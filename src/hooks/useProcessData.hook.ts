import { DataItem } from "../types";
import { ChartControlsSliceState, CountriesFilter, DataType } from "../store/chartControls/types";

export function useProcessData(data: DataItem[], chartControls: ChartControlsSliceState) {

  const countryCharCodeStart: number = chartControls.countriesFilter.charCodeAt(0);
  const countryCharCodeEnd: number = chartControls.countriesFilter.charCodeAt(chartControls.countriesFilter.length - 1);

  const x: string[] = [];
  const y: number[] = [];

  data.forEach((item: DataItem) => {

    const countryCharCode: number = item.country.toUpperCase().charCodeAt(0);

    // filter data
    if (chartControls.countriesFilter === CountriesFilter.ALL ||
      countryCharCode >= countryCharCodeStart && countryCharCode <= countryCharCodeEnd) {

      x.push(item.country);

      // get proper data type
      switch (chartControls.dataType) {
        case DataType.SALARIES:
          y.push(item.annual_salary);
          break;
        case DataType.DEBT:
          y.push(item.credit_card_debt);
          break;
        default:
          console.warn("Data type not handled in data processing:", chartControls.dataType);
      }
    }

  });

  return { processedData: { x, y } };
}