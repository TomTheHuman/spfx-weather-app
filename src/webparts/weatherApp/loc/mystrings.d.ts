declare interface IWeatherAppWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'WeatherAppWebPartStrings' {
  const strings: IWeatherAppWebPartStrings;
  export = strings;
}
