// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JP' to 'shouldUpdateMessage'
// - Renamed export 'ST' to 'isNormalMessage'
// - Renamed export 'tg' to 'parseWidgetData'
// - Renamed export 'zI' to 'isTitleMissing'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 233546
         */
module.exports = function (module, exports, require) {
  var messageSendTypes = require("message-send-types") /*id: 37070*/;
  var jsonSafeUtils_1 = require("json-safe-utils_1") /*id: 176900*/;
  let a = e => {
    var r;
    let n = jsonSafeUtils_1.jsonUtils.parse(e == null ? undefined : e.widget_data);
    let a = jsonSafeUtils_1.jsonUtils.parse(n == null ? undefined : n.data);
    let o = a == null ? undefined : (r = a.episodeList) === null || r === undefined ? undefined : r.episodes?.[0];
    return {
      widgetData: a,
      podcast: o
    };
  };
  let o = e => {
    let {
      title: t
    } = (e == null ? undefined : e.meta) || {};
    return !t;
  };
  let s = e => {
    let {
      protocol: t
    } = (e == null ? undefined : e.meta) || {};
    return !o(e) && t === messageSendTypes.MessageSendTypes.Normal;
  };
  let l = (e, t) => {
    let r = o(e);
    let n = o(t);
    return !e || !!r || !n;
  };
  require.d(exports, {
    shouldUpdateMessage: function () {
      return l;
    },
    isNormalMessage: function () {
      return s;
    },
    parseWidgetData: function () {
      return a;
    },
    isTitleMissing: function () {
      return o;
    }
  });
}