// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'skillTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29866.6edd5fce.js
         * chunkId: 29866
         * moduleId: 188057
         */
module.exports = function (module, exports, require) {
  var r;
  (r = {}).Weather = "weather";
  r.Stock = "stock";
  r.ExchangeRate = "exchange_rate";
  r.Hanzi = "hanzi";
  r.Calendar = "calendar";
  r.ForexTrend = "forex_trend";
  r.GaokaoYifenyiduan = "gaokao_yifenyiduan";
  r.GaokaoControlscore = "gaokao_controlscore";
  r.GaokaoProvincescore = "gaokao_provincescore_new";
  let t = r;
  require.d(exports, {
    skillTypes: function () {
      return t;
    }
  });
}