import * as React from "react";
import styles from "./WeatherApp.module.scss";
import { IWeatherAppProps } from "./IWeatherAppProps";
import { escape } from "@microsoft/sp-lodash-subset";
import axios from "axios";

export default class WeatherApp extends React.Component<IWeatherAppProps, any> {
  constructor(props: IWeatherAppProps) {
    super(props);
    this.state = {
      longitude: null,
      latitude: null,
      weatherData: {
        city: "Sacramento",
        temp: "69",
        icon: "01d",
      },
    };
    this.getGeoCode = this.getGeoCode.bind(this);
  }

  componentDidMount() {
    // Set state with current coordinates
    navigator.geolocation.getCurrentPosition((success) =>
      this.setState(
        {
          longitude: success.coords.longitude,
          latitude: success.coords.latitude,
        },
        this.getGeoCode
      )
    );
  }

  // Use local lat/long to retrieve GeoCode from API
  private getGeoCode() {
    // Add try/catch block here
    axios
      .get(
        `${process.env.SPFX_GEOCODE_URL}lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${process.env.SPFX_GEOCODE_API_KEY}`
      )
      .then((res) => {
        this.setState({
          city: res.data.name,
          temp: res.data.main.temp | 0,
          icon: res.data.weather[0].icon,
        });
        console.log(res);
        () => {
          console.log(this.state);
        };
      });
  }

  public render(): React.ReactElement<IWeatherAppProps> {
    const iconPath = "../src/webparts/weatherApp/assets/";
    console.log(iconPath + this.state.weatherData.icon + ".png");

    return (
      <div className={styles.weatherApp}>
        <div className={styles.flexContainer}>
          <div id={styles.imageContainer} className={styles.flexChild}>
            <img
              src={iconPath + this.state.weatherData.icon + ".png"}
              alt="weather icon"
              id={styles.weatherIcon}
            ></img>
          </div>
          <div id={styles.textContainer} className={styles.flexChild}>
            <div className={styles.forecastHeader}>
              <h2 className={styles.title}>Your forecast for</h2>
              <h1 className={styles.location}>{this.state.city}</h1>
            </div>
            <div>
              <h1 className={styles.temperature}>
                {this.state.temp}°{this.state.scale}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
