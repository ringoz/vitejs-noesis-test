/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/v1/availability/{latitude}/{longitude}": {
    /** Determine the data sets available for the specified location. */
    get: operations["getAvailability"];
  };
  "/api/v1/weather/{language}/{latitude}/{longitude}": {
    /** Obtain weather data for the specified location. */
    get: operations["getWeather"];
  };
  "/api/v1/weatherAlert/{language}/{id}": {
    /** Receive an active weather alert. */
    get: operations["getWeatherAlert"];
  };
}

export interface components {
  schemas: {
    /** @description The collection of all requested weather data. */
    Weather: {
      currentWeather?: components["schemas"]["CurrentWeather"];
      forecastDaily?: components["schemas"]["DailyForecast"];
      forecastHourly?: components["schemas"]["HourlyForecast"];
      forecastNextHour?: components["schemas"]["NextHourForecast"];
      weatherAlerts?: components["schemas"]["WeatherAlertCollection"];
    };
    /** @description Descriptive information about the weather data. */
    Metadata: {
      /**
       * Format: uri
       * @description The URL of the legal attribution for the data source.
       */
      attributionURL?: string;
      /**
       * Format: date-time
       * @description The time when the weather data is no longer valid.
       */
      expireTime: string;
      /** @description The ISO language code for localizable fields. */
      language?: string;
      /** @description The latitude of the relevant location. */
      latitude: number;
      /** @description The longitude of the relevant location. */
      longitude: number;
      /**
       * Format: uri
       * @description The URL of a logo for the data provider.
       */
      providerLogo?: string;
      /** @description The name of the data provider. */
      providerName?: string;
      /**
       * Format: date-time
       * @description The time the weather data was procured.
       */
      readTime: string;
      /**
       * Format: date-time
       * @description The time the provider reported the weather data.
       */
      reportedTime?: string;
      /** @description The weather data is temporarily unavailable from the provider. */
      temporarilyUnavailable?: boolean;
      /** @description The system of units that the weather data is reported in. This is set to metric. */
      units?: components["schemas"]["UnitsSystem"];
      /** @description The data format version. */
      version: number;
    };
    /** @description The current weather conditions for the specified location. */
    CurrentWeather: {
      metadata: components["schemas"]["Metadata"];
      /**
       * Format: date-time
       * @description The date and time.
       */
      asOf: string;
      /** @description The percentage of the sky covered with clouds during the period, from 0 to 1. */
      cloudCover?: number;
      /** @description An enumeration value indicating the condition at the time. */
      conditionCode: components["schemas"]["ConditionCode"];
      /** @description A Boolean value indicating whether there is daylight. */
      daylight?: boolean;
      /** @description The relative humidity, from 0 to 1. */
      humidity: number;
      /** @description The precipitation intensity in millimeters per hour. */
      precipitationIntensity: number;
      /** @description The sea level air pressure in millibars. */
      pressure: number;
      /** @description The direction of change of the sea level air pressure. */
      pressureTrend: components["schemas"]["PressureTrend"];
      /** @description The current temperature. */
      temperature: number;
      /** @description The feels-like temperature when factoring wind and humidity. */
      temperatureApparent: number;
      /** @description The temperature at which relative humidity is 100%. */
      temperatureDewPoint: number;
      /** @description The level of ultraviolet radiation. */
      uvIndex: number;
      /** @description The distance at which terrain is visible. */
      visibility: number;
      /** @description The direction of the wind. */
      windDirection?: number;
      /** @description The maximum wind gust speed. */
      windGust?: number;
      /** @description The wind speed. */
      windSpeed: number;
    };
    /** @description The summary for a specified period in the minute forecast. */
    ForecastPeriodSummary: {
      /** @description The type of precipitation forecasted. */
      condition: components["schemas"]["PrecipitationType"];
      /**
       * Format: date-time
       * @description The end time of the forecast.
       */
      endTime?: string;
      /** @description The probability of precipitation during this period. */
      precipitationChance: number;
      /** @description The precipitation intensity in millimeters per hour. */
      precipitationIntensity: number;
      /**
       * Format: date-time
       * @description The start time of the forecast.
       */
      startTime: string;
    };
    /** @description The precipitation forecast for a specified minute. */
    ForecastMinute: {
      /** @description The probability of precipitation during this minute. */
      precipitationChance: number;
      /** @description The precipitation intensity in millimeters per hour. */
      precipitationIntensity: number;
      /**
       * Format: date-time
       * @description The start time of the minute.
       */
      startTime: string;
    };
    /** @description The historical or forecasted weather conditions for a specified hour. */
    HourWeatherConditions: {
      /** @description The percentage of the sky covered with clouds during the period, from 0 to 1. */
      cloudCover: number;
      /** @description An enumeration value indicating the condition at the time. */
      conditionCode: string;
      /** @description Indicates whether the hour starts during the day or night. */
      daylight?: boolean;
      /**
       * Format: date-time
       * @description The starting date and time of the forecast.
       */
      forecastStart?: string;
      /** @description The relative humidity at the start of the hour, from 0 to 1. */
      humidity: number;
      /** @description The chance of precipitation forecasted to occur during the hour. */
      precipitationChance: number;
      /** @description The type of precipitation forecasted to occur during the period. */
      precipitationType: components["schemas"]["PrecipitationType"];
      /** @description The sea level air pressure in millibars. */
      pressure: number;
      /** @description The direction of change of the sea level air pressure. */
      pressureTrend?: components["schemas"]["PressureTrend"];
      /** @description The rate at which snow crystals are falling in millimeters per hour. */
      snowfallIntensity?: number;
      /** @description The temperature at the start of the hour. */
      temperature: number;
      /** @description The feels-like temperature when considering wind and humidity, at the start of the hour. */
      temperatureApparent: number;
      /** @description The temperature at which relative humidity is 100% at the start of the hour. */
      temperatureDewPoint?: number;
      /** @description The level of ultraviolet radiation at the start of the hour. */
      uvIndex: number;
      /** @description The distance at which terrain is visible at the start of the hour. */
      visibility: number;
      /** @description The direction of the wind at the start of the hour. */
      windDirection?: number;
      /** @description The maximum wind gust speed during the hour. */
      windGust?: number;
      /** @description The wind speed at the start of the hour. */
      windSpeed: number;
      /** @description The amount of precipitation forecasted to occur during period, in millimeters. */
      precipitationAmount?: number;
    };
    /** @description A collection of hour forecasts for a specified range of hours. */
    HourlyForecast: {
      metadata: components["schemas"]["Metadata"];
      /** @description An array of hourly forecasts. */
      hours: components["schemas"]["HourWeatherConditions"][];
    };
    /** @description A minute-by-minute forecast for the next hour. */
    NextHourForecast: {
      metadata: components["schemas"]["Metadata"];
      /**
       * Format: date-time
       * @description The time the forecast ends.
       */
      forecastEnd?: string;
      /**
       * Format: date-time
       * @description The time the forecast starts.
       */
      forecastStart?: string;
      /** @description An array of the forecast minutes. */
      minutes: components["schemas"]["ForecastMinute"][];
      /** @description An array of the forecast summaries. */
      summary: components["schemas"]["ForecastPeriodSummary"][];
    };
    /** @description The historical or forecasted weather conditions for a specified day. */
    DayWeatherConditions: {
      /** @description An enumeration value indicating the condition at the time. */
      conditionCode: string;
      daytimeForecast?: components["schemas"]["DayPartForecast"];
      /**
       * Format: date-time
       * @description The ending date and time of the day.
       */
      forecastEnd: string;
      /**
       * Format: date-time
       * @description The starting date and time of the day.
       */
      forecastStart: string;
      /** @description The maximum ultraviolet index value during the day. */
      maxUvIndex: number;
      moonPhase: components["schemas"]["MoonPhase"];
      /**
       * Format: date-time
       * @description The time of moonrise on the specified day.
       */
      moonrise?: string;
      /**
       * Format: date-time
       * @description The time of moonset on the specified day.
       */
      moonset?: string;
      overnightForecast?: components["schemas"]["DayPartForecast"];
      /** @description The amount of precipitation forecasted to occur during the day, in millimeters. */
      precipitationAmount: number;
      /** @description The chance of precipitation forecasted to occur during the day. */
      precipitationChance: number;
      /** @description The type of precipitation forecasted to occur during the day. */
      precipitationType: components["schemas"]["PrecipitationType"];
      /** @description The depth of snow as ice crystals forecasted to occur during the day. */
      snowfallAmount: number;
      /**
       * Format: date-time
       * @description The time when the sun is at its lowest in the sky.
       */
      solarMidnight?: string;
      /**
       * Format: date-time
       * @description The time when the sun is at its highest in the sky.
       */
      solarNoon?: string;
      /**
       * Format: date-time
       * @description The time when the top edge of the sun reaches the horizon in the morning.
       */
      sunrise?: string;
      /**
       * Format: date-time
       * @description The time when the sun is 18 degrees below the horizon in the morning.
       */
      sunriseAstronomical?: string;
      /**
       * Format: date-time
       * @description The time when the sun is 6 degrees below the horizon in the morning.
       */
      sunriseCivil?: string;
      /**
       * Format: date-time
       * @description The time when the sun is 12 degrees below the horizon in the morning.
       */
      sunriseNautical?: string;
      /**
       * Format: date-time
       * @description The time when the top edge of the sun reaches the horizon in the evening.
       */
      sunset?: string;
      /**
       * Format: date-time
       * @description The time when the sun is 18 degrees below the horizon in the evening.
       */
      sunsetAstronomical?: string;
      /**
       * Format: date-time
       * @description The time when the sun is 6 degrees below the horizon in the evening.
       */
      sunsetCivil?: string;
      /**
       * Format: date-time
       * @description The time when the sun is 12 degrees below the horizon in the evening.
       */
      sunsetNautical?: string;
      /** @description The maximum temperature forecasted to occur during the day. */
      temperatureMax: number;
      /** @description The minimum temperature forecasted to occur during the day. */
      temperatureMin: number;
    };
    /** @description A summary forecast for a daytime (7 AM to 7 PM) or overnight (7 PM to 7 AM) period. */
    DayPartForecast: {
      /** @description The percentage of the sky covered with clouds during the period, from 0 to 1. */
      cloudCover: number;
      /** @description An enumeration value indicating the condition at the time. */
      conditionCode: string;
      /**
       * Format: date-time
       * @description The ending date and time of the forecast.
       */
      forecastEnd: string;
      /**
       * Format: date-time
       * @description The starting date and time of the forecast.
       */
      forecastStart: string;
      /** @description The relative humidity during the period, from 0 to 1. */
      humidity: number;
      /** @description The amount of precipitation forecasted to occur during the period, in millimeters. */
      precipitationAmount: number;
      /** @description The chance of precipitation forecasted to occur during the period. */
      precipitationChance: number;
      /** @description The type of precipitation forecasted to occur during the period. */
      precipitationType: components["schemas"]["PrecipitationType"];
      /** @description The depth of snow as ice crystals forecasted to occur during the period. */
      snowfallAmount: number;
      /** @description The direction the wind is forecasted to come from during the period. */
      windDirection?: number;
      /** @description The average speed the wind is forecasted to be during the period. */
      windSpeed: number;
    };
    /** @description A collection of day forecasts for a specified range of days. */
    DailyForecast: {
      metadata: components["schemas"]["Metadata"];
      /** @description An array of the day forecast weather conditions. */
      days: components["schemas"]["DayWeatherConditions"][];
      /**
       * Format: uri
       * @description A URL that provides more information about the forecast.
       */
      learnMoreURL?: string;
    };
    /** @description Detailed information about the weather alert. */
    WeatherAlertSummary: {
      /** @description An official designation of the affected area. */
      areaId?: string;
      /** @description A human-readable name of the affected area. */
      areaName?: string;
      /** @description How likely the event is to occur. */
      certainty: components["schemas"]["Certainty"];
      /** @description The ISO code of the reporting country. */
      countryCode: string;
      /** @description A human-readable description of the event. */
      description?: string;
      /**
       * Format: uri
       * @description The URL to a page containing detailed information about the event.
       */
      detailsUrl?: string;
      /**
       * Format: date-time
       * @description The time the event went into effect.
       */
      effectiveTime: string;
      /**
       * Format: date-time
       * @description The time when the underlying weather event is projected to end.
       */
      eventEndTime?: string;
      /**
       * Format: date-time
       * @description The time when the underlying weather event is projected to start.
       */
      eventOnsetTime?: string;
      /**
       * Format: date-time
       * @description The time when the event expires.
       */
      expireTime: string;
      /**
       * Format: uuid
       * @description A unique identifier of the event.
       */
      id: string;
      /**
       * Format: date-time
       * @description The time that event was issued by the reporting agency.
       */
      issuedTime: string;
      /** @description An array of recommended actions from the reporting agency. */
      responses: components["schemas"]["ResponseType"][];
      /** @description The level of danger to life and property. */
      severity: components["schemas"]["Severity"];
      /** @description The name of the reporting agency. */
      source: string;
      /** @description An indication of urgency of action from the reporting agency. */
      urgency?: components["schemas"]["Urgency"];
    };
    /** @description An official message indicating severe weather from a reporting agency. */
    WeatherAlert: components["schemas"]["WeatherAlertSummary"] & {
      /** @description An object defining the geographic region the weather alert applies to. */
      area: { [key: string]: unknown };
      /** @description An array of official text messages describing a severe weather event from the agency. */
      messages: components["schemas"]["EventText"][];
    };
    /** @description A collection of severe weather alerts for a specified location. */
    WeatherAlertCollection: {
      metadata: components["schemas"]["Metadata"];
      /** @description An array of weather alert summaries. */
      alerts: components["schemas"]["WeatherAlertSummary"][];
      /**
       * Format: uri
       * @description A URL that provides more information about the alerts.
       */
      detailsUrl?: string;
    };
    /** @description The official text describing a severe weather event from the agency. */
    EventText: {
      /** @description The ISO language code that the text is in. */
      language?: string;
      /** @description The severe weather event text. */
      text?: string;
    };
    /**
     * @description The collection of weather information for a location.
     * @enum {string}
     */
    DataSet:
      | "currentWeather"
      | "forecastDaily"
      | "forecastHourly"
      | "forecastNextHour"
      | "weatherAlerts";
    /**
     * @description The condition at the time.
     * @enum {string}
     */
    ConditionCode:
      | "Clear"
      | "Cloudy"
      | "Dust"
      | "Fog"
      | "Haze"
      | "MostlyClear"
      | "MostlyCloudy"
      | "PartlyCloudy"
      | "ScatteredThunderstorms"
      | "Smoke"
      | "Breezy"
      | "Windy"
      | "Drizzle"
      | "HeavyRain"
      | "Rain"
      | "Showers"
      | "Flurries"
      | "HeavySnow"
      | "MixedRainAndSleet"
      | "MixedRainAndSnow"
      | "MixedRainfall"
      | "MixedSnowAndSleet"
      | "ScatteredShowers"
      | "ScatteredSnowShowers"
      | "Sleet"
      | "Snow"
      | "SnowShowers"
      | "Blizzard"
      | "BlowingSnow"
      | "FreezingDrizzle"
      | "FreezingRain"
      | "Frigid"
      | "Hail"
      | "Hot"
      | "Hurricane"
      | "IsolatedThunderstorms"
      | "SevereThunderstorm"
      | "Thunderstorm"
      | "Tornado"
      | "TropicalStorm";
    /**
     * @description The direction of change of the sea level air pressure.
     * @enum {string}
     */
    PressureTrend: "rising" | "falling" | "steady";
    /**
     * @description The type of precipitation forecasted to occur during the day.
     * @enum {string}
     */
    PrecipitationType:
      | "clear"
      | "precipitation"
      | "rain"
      | "snow"
      | "sleet"
      | "hail"
      | "mixed";
    /**
     * @description The shape of the moon as seen by an observer on the ground at a given time.
     * @enum {string}
     */
    MoonPhase:
      | "new"
      | "waxingCrescent"
      | "firstQuarter"
      | "full"
      | "waxingGibbous"
      | "waningGibbous"
      | "thirdQuarter"
      | "waningCrescent";
    /**
     * @description How likely the event is to occur.
     * @enum {string}
     */
    Certainty: "observed" | "likely" | "possible" | "unlikely" | "unknown";
    /**
     * @description The recommended action from a reporting agency.
     * @enum {string}
     */
    ResponseType:
      | "shelter"
      | "evacuate"
      | "prepare"
      | "execute"
      | "avoid"
      | "monitor"
      | "assess"
      | "allClear"
      | "none";
    /**
     * @description The level of danger to life and property.
     * @enum {string}
     */
    Severity: "extreme" | "severe" | "moderate" | "minor" | "unknown";
    /**
     * @description The system of units that the weather data is reported in.
     * @enum {string}
     */
    UnitsSystem: "m";
    /**
     * @description An indication of urgency of action from the reporting agency.
     * @enum {string}
     */
    Urgency: "immediate" | "expected" | "future" | "past" | "unknown";
  };
}

export interface operations {
  /** Determine the data sets available for the specified location. */
  getAvailability: {
    parameters: {
      path: {
        /** The latitude of the desired location. */
        latitude: number;
        /** The longitude of the desired location. */
        longitude: number;
      };
      query: {
        /** The ISO Alpha-2 country code for the requested location. This parameter is necessary for air quality and weather alerts. */
        country: string;
      };
    };
    responses: {
      /** The request is successful. The data sets are in the response. */
      200: {
        content: {
          "application/json": components["schemas"]["DataSet"][];
        };
      };
      /** The server is unable to process the request due to an invalid parameter value. */
      400: unknown;
      /** The request isn’t authorized or doesn’t include the correct authentication information. */
      401: unknown;
    };
  };
  /** Obtain weather data for the specified location. */
  getWeather: {
    parameters: {
      path: {
        /** The latitude of the desired location. */
        latitude: number;
        /** The longitude of the desired location. */
        longitude: number;
        /** The language tag to use for localizing responses. */
        language: string;
      };
      query: {
        /** The time to end the daily forecast. If this parameter is absent, daily forecasts run for 10 days. */
        timezone: string;
        /** The ISO Alpha-2 country code for the requested location. This parameter is necessary for air quality and weather alerts. */
        countryCode?: string;
        /** The time to obtain current conditions. Defaults to now. */
        currentAsOf?: string;
        /** The time to start the daily forecast. If this parameter is absent, daily forecasts start on the current day. */
        dailyStart?: string;
        /** The time to end the daily forecast. If this parameter is absent, daily forecasts run for 10 days. */
        dailyEnd?: string;
        /** The time to start the hourly forecast. If this parameter is absent, hourly forecasts start on the current hour. */
        hourlyStart?: string;
        /** The time to end the hourly forecast. If this parameter is absent, hourly forecasts run 24 hours or the length of the daily forecast, whichever is longer. */
        hourlyEnd?: string;
        /** A comma-delimited list of data sets to include in the response. */
        dataSets?: components["schemas"]["DataSet"][];
      };
    };
    responses: {
      /** The request is successful. The weather alert is in the response. */
      200: {
        content: {
          "application/json": components["schemas"]["Weather"];
        };
      };
      /** The server is unable to process the request due to an invalid parameter value. */
      400: unknown;
      /** The request isn’t authorized or doesn’t include the correct authentication information. */
      401: unknown;
    };
  };
  /** Receive an active weather alert. */
  getWeatherAlert: {
    parameters: {
      path: {
        /** The unique identifier for the weather alert. */
        id: string;
        /** The language tag to use for localizing responses. */
        language: string;
      };
    };
    responses: {
      /** The request is successful. The weather alert is in the response. */
      200: {
        content: {
          "application/json": components["schemas"]["WeatherAlert"];
        };
      };
    };
  };
}

export interface external {}
