// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'userAgentInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 68901
         */
module.exports = function (module, exports, require) {
  var userAgentParser_1 = require("user-agent-parser_1") /*id: 757289*/;
  var i = userAgentParser_1;
  var o = window.sessionStorage.getItem("__ENTER_FROM__");
  var a = window.User && window.User.userAgent || navigator.userAgent || "";
  var s = i.getParser(a);
  var l = {
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
  l.isFeishu = /feishu/i.test(a);
  l.isLark = l.isFeishu || /lark/i.test(a);
  l.isLarkPcTab = l.isLark && /TYPE\/PC_TAB/i.test(a);
  l.isLarkWindow = l.isLark && o === "lark.window";
  l.isDocs = /Docs/i.test(a);
  l.isDocsSDK = l.isLark && l.isDocs;
  l.isAndroidSDK = /DocEditorSDk/i.test(a);
  l.isIOSSDK = /DocsSDK/i.test(a);
  l.isMobileSDK = l.isAndroidSDK || l.isIOSSDK;
  l.isFeed = /Feed/i.test(a) || /lark=1/.test(location.search) || /sourceType=feed/.test(location.search);
  l.isIphoneX = h("X") || false;
  l.isIPad = /iPad/i.test(a);
  l.isMobile = s.getPlatformType(true).includes("mobile");
  l.isMac = s.getOSName(true).includes("macos");
  l.isWindows = s.getOSName(true).includes("windows");
  l.isLinux = s.getOSName(true).includes("linux");
  l.isSafari = s.getBrowserName(true).includes("safari");
  l.isIE = s.getBrowserName(true).includes("internet explorer");
  l.isIOS = !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  l.isAndroid = a.indexOf("Android") > -1 || a.indexOf("Adr") > -1 || /OpenHarmony/.test(a);
  l.isQQ = /QQBrowser/i.test(a);
  l.isX5 = /MQQBrowser/i.test(a);
  l.is360 = /360SE/i.test(a);
  l.is360Fast = /360EE/i.test(a);
  l.isUc = /UBrowser/i.test(a);
  l.isBaiDu = /BIDUBrowser/i.test(a);
  l.is2345 = /2345Explorer/i.test(a);
  l.isMaxthon = /Maxthon/i.test(a);
  l.isTheWorld = /TheWorld/i.test(a);
  l.isLB = /LBBROWSER/i.test(a);
  l.isEdge = /Edge/i.test(a);
  l.isFF = /Firefox/i.test(a);
  l.isOpera = /OPR/i.test(a);
  l.isWebKit = /AppleWebKit/i.test(a);
  l.isChrome = s.getBrowserName(true).includes("chrome");
  l.isPrimaryChrome = l.isChrome && !l.isOpera && !l.isLB && !l.isUc && !l.isBaiDu && !l.is360 && !l.is360Fast && !l.isQQ && !l.isSougou && !l.isEdge && !l.is2345 && !l.isTheWorld && !l.isMaxthon;
  l.isOpendoc = /opendoc=(true|1)/.test((location.search || "").toLowerCase()) || /^\/component\//.test(location.pathname || "");
  if (l.isIE) {
    var u = parseInt(String(s.getBrowserVersion()), 10);
    l.oldIE = u < 11;
    l.modernIE = u >= 11;
  }
  l.kernel = ["msie", "webkit", "blink", "gecko", "msedge", "tablet", "mobile"].find(function (e) {
    return s.getEngineName().toLowerCase().includes(e);
  });
  l.isLarkTab = /from\/(old_)?lark_tab/i.test(a);
  l.isOldLarkTab = /from\/old_lark_tab/i.test(a);
  var c = l.isLark || l.isDocs;
  function h(e) {
    var t = RegExp("(iPhone\\s" + e + ")");
    return !!navigator.userAgent.match(t);
  }
  l.isBytedanceApp = c;
  l.isIPhoneSeries = h;
  l.isIOSBelow12 = function () {
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
  l.getChromeVersion = function () {
    var e = navigator.userAgent.match(/Chrome\/([\d.]+)/i);
    if (e && e[1]) {
      return e[1];
    } else {
      return null;
    }
  };
  l.isH5 = l.isMobile && !l.isBytedanceApp || l.isOpendoc && l.isMobile;
  exports.userAgentInfo = l;
}