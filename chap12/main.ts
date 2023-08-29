import * as dotenv from 'dotenv';
dotenv.config();

// receiveWeatherInfo関数をインポート
import {receiveWeatherInfo} from "./weatherinfo-receiver";

// アクセス先URLの基本部分の変数を用意
const weatherinfoUrl = "http://api.openweathermap.org/data/2.5/weather";
// クエリパラメータの元データとなるオブジェクトリテラルを用意
const params:{
  lang: string,
  q: string,
  appId: string
} =
{
  // 言語設定のクエリパラメータ
  lang: "ja",
  // 都市名を表すクエリパラメータ
  q: "Himeji",
  // APIキーのクエリパラメータ
  appId: 
}
// クエリパラメータを生成