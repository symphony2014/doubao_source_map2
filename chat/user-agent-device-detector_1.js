// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KX' to 'isMobileOrIos'
// - Renamed export 'W7' to 'isMobileDevice'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 720848
         */
module.exports = function (module, exports, require) {
  let i;
  let r;
  var userAgentParser_1_1 = require("user-agent-parser_1_1") /*id: 956882*/;
  var a = userAgentParser_1_1;
  let l = typeof window != "undefined";
  let s = e => {
    if (e ?? typeof globalThis.navigator?.userAgent == "string") {
      return globalThis.navigator?.userAgent;
    } else {
      return "";
    }
  };
  let u = e => a.getParser(s(e)).getPlatformType(true).includes("mobile");
  let c = e => {
    if (r === undefined) {
      r = u(e);
    }
    return r;
  };
  let d = e => {
    if (i === undefined) {
      let t = s(e);
      let n = /iPad|iPhone|iPod/.test(t);
      let r = t.includes("Macintosh") && l && "ontouchstart" in document.documentElement;
      i = n || r;
    }
    return i;
  };
  let h = e => c(e) || d(e);
  require.d(exports, {
    isMobileOrIos: function () {
      return h;
    },
    isMobileDevice: function () {
      return c;
    }
  });
}