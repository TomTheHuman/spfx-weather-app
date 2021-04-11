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
      city: "",
      temp: "",
      icon: "01d",
    };
    this.getWeather = this.getWeather.bind(this);
  }

  public componentDidMount() {
    // Set state with current coordinates
    navigator.geolocation.getCurrentPosition(
      (success) =>
        this.setState(
          {
            longitude: success.coords.longitude,
            latitude: success.coords.latitude,
          },
          this.getWeather
        ),
      (error) => {
        this.setState(
          {
            longitude: -121.478851,
            latitude: 38.575764,
          },
          this.getWeather
        );
      }
    );
  }

  // Use local lat/long to retrieve GeoCode from API
  private getWeather() {
    // Add try/catch block here
    axios
      .get(
        `${process.env.SPFX_GEOCODE_URL}lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${process.env.SPFX_GEOCODE_API_KEY}`
      )
      .then((res) => {
        this.setState(
          {
            city: res.data.name,
            temp: res.data.main.temp | 0,
            icon: res.data.weather[0].icon,
          },
          () => console.log(this.state)
        );
      });
  }

  public render(): React.ReactElement<IWeatherAppProps> {
    const weatherAppClasses =
      styles.weatherApp + " " + styles["bg_" + this.state.icon];

    return (
      <div className={weatherAppClasses}>
        <div className={styles.flexContainer}>
          <div id={styles.imageContainer} className={styles.flexChild}>
            <img
              src={require("./assets/" + this.state.icon + ".png")}
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
