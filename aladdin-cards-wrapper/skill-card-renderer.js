// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'renderSkillCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29866.6edd5fce.js
         * chunkId: 29866
         * moduleId: 600813
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var skillTypeConstants = require("skill-type-constants") /*id: 188057*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = () => reactJsxRuntimeCoreReexport.jsx("div", {
    children: "[暂不支持该卡片]"
  });
  let c = reactCoreLibraryReexport.lazy(() => Promise.all([require.e("semi-design-core") /*id: 73666*/, require.e("ui-form-components") /*id: 4172*/]).then(require.bind(require, "exchange-rate-card") /*id: 704017*/).then(e => ({
    default: e.ExchangeRateCard
  })));
  let l = reactCoreLibraryReexport.lazy(() => Promise.all([require.e("semi-design-core") /*id: 73666*/, require.e("geometry-canvas-render-layout") /*id: 42711*/, require.e("stock-chart-component") /*id: 89268*/]).then(require.bind(require, "stock-market-chart-card") /*id: 120445*/).then(e => ({
    default: e.StockCard
  })));
  let i = reactCoreLibraryReexport.lazy(() => Promise.all([require.e("semi-design-core") /*id: 73666*/, require.e("geometry-canvas-render-layout") /*id: 42711*/, require.e("weather-card") /*id: 13468*/]).then(require.bind(require, "weather-card-component") /*id: 864213*/).then(e => ({
    default: e.WeatherCard
  })));
  let s = reactCoreLibraryReexport.lazy(() => Promise.all([require.e("lottie-web-player-core") /*id: 97546*/, require.e("semi-design-core") /*id: 73666*/, require.e("lottie-hanzi-card") /*id: 44862*/]).then(require.bind(require, "hanzi-card-component") /*id: 408308*/).then(e => ({
    default: e.HanziCard
  })));
  let u = reactCoreLibraryReexport.lazy(() => Promise.all([require.e("semi-design-core") /*id: 73666*/, require.e("resize-observer-calendar-components") /*id: 37250*/]).then(require.bind(require, "calendar-card-component") /*id: 510198*/).then(e => ({
    default: e.CalendarCard
  })));
  let h = reactCoreLibraryReexport.lazy(() => Promise.all([require.e("semi-design-core") /*id: 73666*/, require.e("geometry-canvas-render-layout") /*id: 42711*/, require.e("stock-trend-card-ui") /*id: 92966*/]).then(require.bind(require, "forex-trend-card-component") /*id: 990888*/).then(e => ({
    default: e.ForexTrendCard
  })));
  let E = e => {
    let {
      data: a,
      cardType: n,
      trackEvent: r
    } = e;
    switch (n) {
      case skillTypeConstants.skillTypes.Weather:
        return reactJsxRuntimeCoreReexport.jsx(i, {
          data: a,
          onTrackEvent: r
        });
      case skillTypeConstants.skillTypes.Stock:
        return reactJsxRuntimeCoreReexport.jsx(l, {
          data: a,
          onTrackEvent: r
        });
      case skillTypeConstants.skillTypes.ExchangeRate:
        return reactJsxRuntimeCoreReexport.jsx(c, {
          data: a,
          onTrackEvent: r
        });
      case skillTypeConstants.skillTypes.Hanzi:
        return reactJsxRuntimeCoreReexport.jsx(s, {
          data: a,
          onTrackEvent: r
        });
      case skillTypeConstants.skillTypes.Calendar:
        return reactJsxRuntimeCoreReexport.jsx(u, {
          data: a,
          onTrackEvent: r
        });
      case skillTypeConstants.skillTypes.ForexTrend:
        return reactJsxRuntimeCoreReexport.jsx(h, {
          data: a,
          onTrackEvent: r
        });
      default:
        return reactJsxRuntimeCoreReexport.jsx(d, {});
    }
  };
  require.d(exports, {
    renderSkillCard: function () {
      return E;
    }
  });
}