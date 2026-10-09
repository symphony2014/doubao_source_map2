// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'getNavigatePath'
// - Renamed export 'Q' to 'getChannelParam'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 818560
         */
module.exports = function (module, exports, require) {
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  let r = e => {
    return urlParamUtils.parseQueryString((e || location)?.search).channel;
  };
  let o = e => {
    try {
      let t = urlParamUtils.parseQueryString(e.hash || e.search).state;
      let n = globalThis.atob(t);
      return JSON.parse(n).navigatePath;
    } catch (e) {
      return "";
    }
  };
  require.d(exports, {
    getNavigatePath: function () {
      return o;
    },
    getChannelParam: function () {
      return r;
    }
  });
}