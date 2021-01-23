import * as React from "react";
import styles from "./WeatherApp.module.scss";
import { IWeatherAppProps } from "./IWeatherAppProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class WeatherApp extends React.Component<IWeatherAppProps, {}> {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Position is: ", position);
    });
  }

  public render(): React.ReactElement<IWeatherAppProps> {
    return (
      <div className={styles.weatherApp}>
        <div className={styles.container}>
          <div className={styles.flex}>
            <div className={styles.columnSm}>
              <h1>Column 1</h1>
            </div>
            <div className={styles.columnMed}>
              <h1>Column 2</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
