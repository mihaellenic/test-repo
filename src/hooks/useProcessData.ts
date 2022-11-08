import { DataItem } from "../types";
import { CountriesFilter, DataType } from "../store/chartControls/types";

export interface DataProcesssingConfig {
  countriesFilter: CountriesFilter;
  dataType: DataType;
}

export function useProcessData(data: DataItem[], config: DataProcesssingConfig) {

  const countryCharCodeStart: number = config.countriesFilter.charCodeAt(0);
  const countryCharCodeEnd: number = config.countriesFilter.charCodeAt(config.countriesFilter.length - 1);

  const x: string[] = [];
  const y: number[] = [];

  data.forEach((item: DataItem) => {

    const countryCharCode: number = item.country.toUpperCase().charCodeAt(0);

    // filter data
    if (config.countriesFilter === CountriesFilter.ALL ||
      countryCharCode >= countryCharCodeStart && countryCharCode <= countryCharCodeEnd) {

      x.push(item.country);

      // get proper data type
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

  return { processedData: { x, y } };
}