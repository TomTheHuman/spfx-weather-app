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
      city: "Sacramento",
      state_code: "CA",
      temperature: "69",
      scale: "F",
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

  getGeoCode() {
    // Add try/catch block here
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}
      &location_type=ROOFTOP&result_type=street_address&key=${this.props.geocode_api_key}`
      )
      .then((res) => {
        this.setState(
          {
            city: res.data.results[0].address_components[2].long_name,
            state_code: res.data.results[0].address_components[4].short_name,
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  public render(): React.ReactElement<IWeatherAppProps> {
    return (
      <div className={styles.weatherApp}>
        <div className={styles.flexContainer}>
          <div id={styles.imageContainer} className={styles.flexChild}>
            <p>{this.props.description}</p>
          </div>
          <div id={styles.textContainer} className={styles.flexChild}>
            <div className={styles.forecastHeader}>
              <h2 className={styles.title}>Your forecast for</h2>
              <h1 className={styles.location}>
                {this.state.city}, {this.state.state_code}
              </h1>
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
