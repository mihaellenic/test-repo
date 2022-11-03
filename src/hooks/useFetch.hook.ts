import Papa from "papaparse";
import { useState, useEffect } from "react";
import { DataItem } from "src/types";

export function useFetch(url: string) {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {

    // load csv from file and parse
    Papa.parse(url, {
      download: true, // fetches csv from url
      dynamicTyping: true, // dynamically detects data types
      header: true, // expects first row to contain column names, which is used for attr names
      // cleans headers, so when used as attr names it's safe and convenient
      transformHeader(header: string): string {
        return header
          .toLowerCase()
          .replace(" ", "_")
          .replace("-", "");
      },
      complete: function(results) {
        console.log("results", results.data);
        const parsedData = results.data as DataItem[];
        const sortedData = parsedData.sort((item1: DataItem, item2: DataItem) =>
          item1.country?.localeCompare(item2.country)
        );

        setData(sortedData);
      },
      error(error: Error) {
        console.error("Error while fetching/parsing csv file:", error);
      }
    });

  }, []);

  return { data };
}