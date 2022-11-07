import { DataItem } from "../types";
import { CountriesFilter, DataType } from "../store/chartControls/types";

export interface DataProcesssingConfig {
  countriesFilter: CountriesFilter;
  dataType: DataType;
  aggregationType: "AVG";
}

export function useProcessDataHook(data: DataItem[], config: DataProcesssingConfig) {
  console.log("useProcessDataHook");

//   console.log(config.countriesFilter.charAt(0),
//     config.countriesFilter.charCodeAt(0));
//   console.log(config.countriesFilter.charAt(config.countriesFilter.length - 1),
//     config.countriesFilter.charCodeAt(config.countriesFilter.length - 1));

  const nameRangeStart: number = config.countriesFilter.charCodeAt(0);
  const nameRangeEnd: number = config.countriesFilter.charCodeAt(config.countriesFilter.length - 1);

  const x: string[] = [];
  const y: number[] = [];

  // get from cache if exists

  data.forEach((item: DataItem): any => {

//     console.log(item.country?.toUpperCase().charAt(0), item.country?.toUpperCase().charCodeAt(0));
    const countryNameCode: number = item.country.toUpperCase().charCodeAt(0);

    // filter data
    if (config.countriesFilter === CountriesFilter.ALL ||
      countryNameCode >= nameRangeStart && countryNameCode <= nameRangeEnd) {

      x.push(item.country);

      // get proper data by type
      switch (config.dataType) {
        case DataType.SALARIES:
          y.push(item.annual_salary);
          break;
        case DataType.DEBT:
          y.push(item.credit_card_debt);
          break;
        default:
          console.warn("Data type not handled in data processing:", config.dataType);
      }
    }

  });

  // aggregate data

  // store to cache

  return { processedData: { x, y } };
}