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
        <div className={styles.flexContainer}>
          <div id={styles.imageContainer} className={styles.flexChild}>
            <p>Image Goes Here</p>
          </div>
          <div id={styles.textContainer} className={styles.flexChild}>
            <div className={styles.forecastHeader}>
              <h2 className={styles.title}>Your forecast for</h2>
              <h1 className={styles.location}>Sacramento, CA</h1>
            </div>
            <div>
              <h1 className={styles.temperature}>68°F</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
