// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G6' to 'isSafariBrowser'
// - Renamed export 'N$' to 'isVCEnv'
// - Renamed export 'VG' to 'isWebKitEngine'
// - Renamed export 'Vk' to 'getBrowserVersion'
// - Renamed export 'g_' to 'getBrowserName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 966573
         */
module.exports = function (module, exports, require) {
  let n;
  var userAgentParser_1_1 = require("user-agent-parser_1_1") /*id: 956882*/;
  var r = userAgentParser_1_1;
  let s = typeof window != "undefined" && window.User && window.User.userAgent || typeof navigator != "undefined" && navigator.userAgent || "";
  try {
    n = r.getParser(s);
  } catch (e) {
    n = {
      getBrowserName: () => "",
      getBrowserVersion: () => "",
      getEngine: () => ({
        name: ""
      }),
      is: () => false
    };
  }
  if (window && window.User) {
    window.User.isFeedEnv;
  }
  if (!/feishu/i.test(s)) {
    /lark/i.test(s);
  }
  /Docs/i.test(s);
  /SpaceApp/i.test(s);
  /MicroMessenger/i.test(s);
  /QQBrowser/i.test(s);
  /WeiBo/i.test(s);
  /newsarticle/i.test(s);
  n.is("mobile");
  n.is("macos");
  n.is("windows");
  let l = n.getEngine().name === "WebKit";
  function a() {
    return n.getBrowserName();
  }
  function u() {
    return n.getBrowserVersion();
  }
  function d() {
    return /\sVC\//.test(s);
  }
  function c() {
    return (a() || "").toLowerCase() === "safari";
  }
  require.d(exports, {
    isSafariBrowser: function () {
      return c;
    },
    isVCEnv: function () {
      return d;
    },
    isWebKitEngine: function () {
      return l;
    },
    getBrowserVersion: function () {
      return u;
    },
    getBrowserName: function () {
      return a;
    }
  });
}