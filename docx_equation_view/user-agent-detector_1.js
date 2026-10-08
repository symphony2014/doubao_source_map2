// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'uaDetector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22007.b9e6c706.js
         * chunkId: 22007
         * moduleId: 277160
         */
module.exports = function (module, exports, require) {
  var userAgentParser_1 = require("user-agent-parser_1") /*id: 757289*/;
  var i = userAgentParser_1;
  var r = window.sessionStorage.getItem("__ENTER_FROM__");
  var a = window.User && window.User.userAgent || navigator.userAgent || "";
  var l = i.getParser(a);
  var s = {
    isFeishu: false,
    isLark: false,
    isLarkPcTab: false,
    isLarkWindow: false,
    isDocs: false,
    isDocsSDK: false,
    isAndroidSDK: false,
    isIOSSDK: false,
    isMobileSDK: false,
    isFeed: false,
    isIphoneX: false,
    isIPad: false,
    isMobile: false,
    isMac: false,
    isWindows: false,
    isLinux: false,
    isSafari: false,
    isIE: false,
    isSougou: false,
    isIOS: false,
    isAndroid: false,
    isQQ: false,
    isX5: false,
    is360: false,
    is360Fast: false,
    isUc: false,
    isBaiDu: false,
    isLB: false,
    oldIE: false,
    modernIE: false,
    kernel: "",
    isLarkTab: false,
    isOldLarkTab: false,
    isEdge: false,
    isFF: false,
    isChrome: false,
    isWebKit: false,
    isBytedanceApp: false,
    isOpendoc: false,
    isIPhoneSeries: function () {
      return false;
    },
    isIOSBelow12: function () {
      return false;
    },
    getChromeVersion: function () {
      return null;
    },
    isPrimaryChrome: false,
    isOpera: false,
    is2345: false,
    isMaxthon: false,
    isTheWorld: false,
    isH5: false
  };
  s.isFeishu = /feishu/i.test(a);
  s.isLark = s.isFeishu || /lark/i.test(a);
  s.isLarkPcTab = s.isLark && /TYPE\/PC_TAB/i.test(a);
  s.isLarkWindow = s.isLark && r === "lark.window";
  s.isDocs = /Docs/i.test(a);
  s.isDocsSDK = s.isLark && s.isDocs;
  s.isAndroidSDK = /DocEditorSDk/i.test(a);
  s.isIOSSDK = /DocsSDK/i.test(a);
  s.isMobileSDK = s.isAndroidSDK || s.isIOSSDK;
  s.isFeed = /Feed/i.test(a) || /lark=1/.test(location.search) || /sourceType=feed/.test(location.search);
  s.isIphoneX = u("X") || false;
  s.isIPad = /iPad/i.test(a);
  s.isMobile = l.getPlatformType(true).includes("mobile");
  s.isMac = l.getOSName(true).includes("macos");
  s.isWindows = l.getOSName(true).includes("windows");
  s.isLinux = l.getOSName(true).includes("linux");
  s.isSafari = l.getBrowserName(true).includes("safari");
  s.isIE = l.getBrowserName(true).includes("internet explorer");
  s.isIOS = !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  s.isAndroid = a.indexOf("Android") > -1 || a.indexOf("Adr") > -1 || /OpenHarmony/.test(a);
  s.isQQ = /QQBrowser/i.test(a);
  s.isX5 = /MQQBrowser/i.test(a);
  s.is360 = /360SE/i.test(a);
  s.is360Fast = /360EE/i.test(a);
  s.isUc = /UBrowser/i.test(a);
  s.isBaiDu = /BIDUBrowser/i.test(a);
  s.is2345 = /2345Explorer/i.test(a);
  s.isMaxthon = /Maxthon/i.test(a);
  s.isTheWorld = /TheWorld/i.test(a);
  s.isLB = /LBBROWSER/i.test(a);
  s.isEdge = /Edge/i.test(a);
  s.isFF = /Firefox/i.test(a);
  s.isOpera = /OPR/i.test(a);
  s.isWebKit = /AppleWebKit/i.test(a);
  s.isChrome = l.getBrowserName(true).includes("chrome");
  s.isPrimaryChrome = s.isChrome && !s.isOpera && !s.isLB && !s.isUc && !s.isBaiDu && !s.is360 && !s.is360Fast && !s.isQQ && !s.isSougou && !s.isEdge && !s.is2345 && !s.isTheWorld && !s.isMaxthon;
  s.isOpendoc = /opendoc=(true|1)/.test((location.search || "").toLowerCase()) || /^\/component\//.test(location.pathname || "");
  if (s.isIE) {
    var d = parseInt(String(l.getBrowserVersion()), 10);
    s.oldIE = d < 11;
    s.modernIE = d >= 11;
  }
  s.kernel = ["msie", "webkit", "blink", "gecko", "msedge", "tablet", "mobile"].find(function (e) {
    return l.getEngineName().toLowerCase().includes(e);
  });
  s.isLarkTab = /from\/(old_)?lark_tab/i.test(a);
  s.isOldLarkTab = /from\/old_lark_tab/i.test(a);
  var c = s.isLark || s.isDocs;
  function u(e) {
    var t = RegExp("(iPhone\\s" + e + ")");
    return !!navigator.userAgent.match(t);
  }
  s.isBytedanceApp = c;
  s.isIPhoneSeries = u;
  s.isIOSBelow12 = function () {
    var e = function () {
      if (!((e = navigator.userAgent).indexOf("iPhone") > 0) && !(e.indexOf("iPad") > 0) && !(e.indexOf("iPhone") > 0)) {
        return null;
      }
      var e;
      var t = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
      if (t) {
        return {
          major: +t[1],
          minor: +t[2]
        };
      } else {
        return null;
      }
    }();
    return !!e && e.major < 12;
  };
  s.getChromeVersion = function () {
    var e = navigator.userAgent.match(/Chrome\/([\d.]+)/i);
    if (e && e[1]) {
      return e[1];
    } else {
      return null;
    }
  };
  s.isH5 = s.isMobile && !s.isBytedanceApp || s.isOpendoc && s.isMobile;
  exports.uaDetector = s;
}