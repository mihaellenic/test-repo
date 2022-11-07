export enum CountriesFilter {
  "ALL" = "All",
  "A_TO_F" = "A-F",
  "G_TO_L" = "G-L",
  "M_TO_P" = "M-P",
  "Q_TO_Z" = "Q-Z"
}

export enum DataType {
  "SALARIES" = "Annual salaries",
  "DEBT" = "Credit card debt"
}

export interface ChartControlsSliceState {
  countriesFilter: CountriesFilter;
  dataType: DataType;
}