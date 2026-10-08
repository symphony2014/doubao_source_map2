// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$P' to 'isIPad'
// - Renamed export 'Cl' to 'isWindows'
// - Renamed export 'OA' to 'isMobileOrIOS'
// - Renamed export 'aB' to 'isSpecialBuild'
// - Renamed export 'dD' to 'isMobile'
// - Renamed export 'p1' to 'isIOS'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 221233
         */
module.exports = function (module, exports, require) {
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var runtimeContextResolver = require("runtime-context-resolver") /*id: 761917*/;
  let a = e => typeof window != "undefined" ? function () {
    var t = arguments.length;
    var n = Array(t);
    var r = 0;
    for (; r < t; r++) {
      n[r] = arguments[r];
    }
    let {
      userAgent: i
    } = window.navigator;
    return e(i, ...n);
  } : function () {
    var n = arguments.length;
    var r = Array(n);
    var a = 0;
    for (; a < n; a++) {
      r[a] = arguments[a];
    }
    let {
      context: o
    } = runtimeContextResolver.useRuntimeContext();
    let {
      userAgent: s
    } = o.request ?? {};
    let l = typeof window != "undefined" ? window.navigator.userAgent : undefined;
    return e(s ?? l, ...r);
  };
  let o = a(userAgentDeviceDetector.isWindows);
  a(userAgentDeviceDetector.isFirefox);
  a(userAgentDeviceDetector.isWebKit);
  a(userAgentDeviceDetector.isEdge);
  a(userAgentDeviceDetector.isChrome);
  a(userAgentDeviceDetector.isChromeNotEdge);
  a(userAgentDeviceDetector.isSafari);
  a(userAgentDeviceDetector.isWebKitDesktop);
  a(userAgentDeviceDetector.isAppleDevice);
  a(userAgentDeviceDetector.isMac);
  a(userAgentDeviceDetector.isWeChat);
  a(userAgentDeviceDetector.isByteDanceWebview);
  let s = a(userAgentDeviceDetector.isLarkUserAgent);
  a(userAgentDeviceDetector.isSamanthaDoubao);
  a(userAgentDeviceDetector.isSamanthaCici);
  a(userAgentDeviceDetector.isSamanthaApp);
  let l = a(userAgentDeviceDetector.isMobileCached);
  let u = a(userAgentDeviceDetector.isIOS);
  let c = a(userAgentDeviceDetector.isIPad);
  let d = a(userAgentDeviceDetector.isMobileOrIOS);
  a(userAgentDeviceDetector.getChromeVersion);
  a(userAgentDeviceDetector.getSamanthaVersion);
  a(userAgentDeviceDetector.getSamanthaType);
  require.d(exports, {
    isIPad: function () {
      return c;
    },
    isWindows: function () {
      return o;
    },
    isMobileOrIOS: function () {
      return d;
    },
    isSpecialBuild: function () {
      return s;
    },
    isMobile: function () {
      return l;
    },
    isIOS: function () {
      return u;
    }
  });
}