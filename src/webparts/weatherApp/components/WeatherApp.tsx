import * as React from "react";
import styles from "./WeatherApp.module.scss";
import { IWeatherAppProps } from "./IWeatherAppProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class WeatherApp extends React.Component<IWeatherAppProps, {}> {
  public render(): React.ReactElement<IWeatherAppProps> {
    return (
      <div className={styles.weatherApp}>
        <div className={styles.container}>
          <div className={styles.flex}>
            <div className={styles.column}>
              <h1>Column 1</h1>
            </div>
            <div className={styles.column}>
              <h1>Column 2</h1>
            </div>
            <div className={styles.column}>
              <h1>Column 3</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
