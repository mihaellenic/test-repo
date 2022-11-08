import Papa from "papaparse";
import { useState, useEffect } from "react";
import { DataItem } from "src/types";

export function useFetch(url: string) {

  const [data, setData] = useState<DataItem[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    // load csv from file and parse
    Papa.parse(url, {
      download: true, // fetches csv from url
      dynamicTyping: true, // dynamically sets data types
      header: true, // expects first row to contain column names, and uses it for attr names
      skipEmptyLines: true,
      // cleans headers, so when used as attr names it's safe and convenient
      transformHeader(header: string): string {
        return header
          .toLowerCase()
          .replaceAll(" ", "_")
          .replaceAll("-", "");
      },
      complete: function(results) {
        const parsedData = results.data as DataItem[];
        const sortedData = parsedData.sort((item1: DataItem, item2: DataItem) =>
          item1.country?.localeCompare(item2.country)
        );
        setData(sortedData);
        setError(undefined);
      },
      error(error: Error) {
        setError(error);
        console.error("Error while fetching/parsing csv file:", error);
      }
    });

  }, []);

  return { data, error };
}