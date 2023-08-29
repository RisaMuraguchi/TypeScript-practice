// 天気情報を表すクラス
export class weatherInfo {
  // 天気情報JSONデータオブジェクト
  private _weatherInfoJSON: WeatherInfoJSON;

  // コンストラクタ
  constructor(weatherInfoJSON: weatherInfoJSON) {
    this_weatherInfoJSON = weatherInfoJSON;
  }

  // 都市名を得るゲッタ
  get cityName() {
    return this._weatherInfoJSON.name;
  }
  // 緯度情報を得るゲッタ
  get latitude() {
    const coord = this._weatherInfoJSON.coord;
    return coord.lat;
  }
  // 緯度情報を得るゲッタ
  get longitude() {
    const coord = this._weatherInfoJSON.coord;
    return coord.lon;
  }
  // 天気情報を得るゲッタ
  get weatherDesc() {
    const weatherArray = this._weatherInfoJSON.weather;
    const weather = weatherArray[0];
    return weather.description;
  }
}