// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'XF' to 'browserEnv'
// - Renamed export 'ZP' to 'browserDetector'
// - Renamed export 's0' to 'isAndroidOrMiuiBrowser'
// - Renamed export 'y_' to 'isMiuiBrowser'
// - Renamed export 'nR' to 'isOpendocOrDocComponent'
// - Renamed export 'lA' to 'isSuperApp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 744607
         */
module.exports = function (module, exports, require) {
  var o;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  let {
    isIPhoneX: _
  } = browserEnvDetectionUtil.browserDetector;
  let l = typeof window == "undefined" ? "" : window.User?.userAgent || navigator.userAgent || "";
  Object.defineProperty(browserEnvDetectionUtil.browserDetector, "isIphoneX", {
    get: function () {
      return _;
    }
  });
  let s = /doubao_app/.test(navigator.userAgent);
  let E = {
    isDoubaoApp: s,
    isMobileRaw: browserEnvDetectionUtil.browserDetector.isMobile,
    isLark: browserEnvDetectionUtil.browserDetector.isLark || typeof location != "undefined" && /lark=1/.test(location.search),
    isMobile: browserEnvDetectionUtil.browserDetector.isMobile || browserEnvDetectionUtil.browserDetector.isIPad && browserEnvDetectionUtil.browserDetector.isLark || s,
    isH5: browserEnvDetectionUtil.browserDetector.isMobile && !s,
    isBytedanceApp: browserEnvDetectionUtil.browserDetector.isBytedanceApp,
    isNonIPadMobile: browserEnvDetectionUtil.browserDetector.isMobile,
    isLarkDocs: typeof navigator != "undefined" && /LarkDocs/i.test(navigator.userAgent),
    larkVersion: typeof navigator == "undefined" ? "" : objectPathGetDefault.getObjectPathDefault((o = navigator.userAgent) === null || o === undefined ? undefined : o.match(/Lark\/([0-9.]+)/i), "[1]"),
    isLarkFeed: false,
    isIPadApp: browserEnvDetectionUtil.browserDetector.isIPad && browserEnvDetectionUtil.browserDetector.isBytedanceApp,
    isPhoneApp: browserEnvDetectionUtil.browserDetector.isMobile && browserEnvDetectionUtil.browserDetector.isBytedanceApp,
    isIPadSafariBrowser: browserEnvDetectionUtil.browserDetector.isIPad && browserEnvDetectionUtil.browserDetector.isSafari && !browserEnvDetectionUtil.browserDetector.isBytedanceApp,
    isIPadBrowser: browserEnvDetectionUtil.browserDetector.isIPad && !browserEnvDetectionUtil.browserDetector.isBytedanceApp,
    isTablet: typeof navigator != "undefined" && /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(ip|ap|wp))))/.test(navigator.userAgent.toLowerCase()),
    isAnnouncement: platformDocUtils.xgt(),
    isMeetingNote: platformDocUtils.AQB(),
    isInChatTab: platformDocUtils.tc9(),
    isPcTemplate: browserEnvDetectionUtil.browserDetector.isPcWeb || browserEnvDetectionUtil.browserDetector.isFromSuperApp() && !browserEnvDetectionUtil.browserDetector.isMobile,
    isLarkTemplate: browserEnvDetectionUtil.browserDetector.isLarkTemplate,
    isMiuiBrowser: typeof navigator != "undefined" && /MiuiBrowser/.test(navigator.userAgent),
    isWechatMiniProgram: typeof navigator != "undefined" && /MicroMessenger/i.test(navigator.userAgent) && /miniprogram/i.test(l),
    isWxWebview: typeof navigator != "undefined" && /MicroMessenger/i.test(navigator.userAgent),
    isInVCNew: (() => {
      if (typeof window == "undefined") {
        return false;
      }
      let e = browserEnvDetectionUtil.browserDetector.isLark && (browserEnvDetectionUtil.browserDetector.isVCWebview || browserEnvDetectionUtil.browserDetector.isFeishuRooms || browserEnvDetectionUtil.browserDetector.isFeishuRoomsServer);
      if (window.self !== window.top) {
        e = /vc=true/.test((location.search || "").toLowerCase()) || e;
      }
      return e;
    })(),
    isLarkPcTabNext: (browserEnvDetectionUtil.browserDetector.getLarkTabName() === "space" || browserEnvDetectionUtil.browserDetector.getLarkTabName() === "wiki") && !browserEnvDetectionUtil.browserDetector.isLarkPcTab
  };
  let d = Object.assign({}, browserEnvDetectionUtil.browserDetector, E);
  function T() {
    return /superapp/i.test(navigator.userAgent);
  }
  function p() {
    return !d.isBytedanceApp && (d.isAndroid || d.isMiuiBrowser);
  }
  function S() {
    return !d.isBytedanceApp && d.isMiuiBrowser;
  }
  function f() {
    return d.isOpendoc || d.isDocComponent();
  }
  if (d.isLark && d.isMobile && typeof window != "undefined") {
    Object.defineProperty(d, "isInVC", {
      get: () => /vc=true/.test((location.search || "").toLowerCase())
    });
    Object.defineProperty(d, "isInVCNew", {
      get: () => /vc=true/.test((location.search || "").toLowerCase())
    });
  }
  if (d.isMobile) {
    d.isMobile = false;
    d.isLark = false;
    d.isFeishu = false;
    d.isBytedanceApp = false;
    d.isPcTemplate = true;
  }
  Object.defineProperty(d, "isAnnouncement", {
    get: () => platformDocUtils.xgt()
  });
  if (d.isOpendoc && d.isLark) {
    d.isLark = false;
    d.isBytedanceApp = false;
    if (d.isIPad) {
      d.isMobile = false;
    }
  }
  var A = d;
  let m = d;
  require.d(exports, {
    browserEnv: function () {
      return m;
    },
    browserDetector: function () {
      return A;
    },
    isAndroidOrMiuiBrowser: function () {
      return p;
    },
    isMiuiBrowser: function () {
      return S;
    },
    isOpendocOrDocComponent: function () {
      return f;
    },
    isSuperApp: function () {
      return T;
    }
  });
}