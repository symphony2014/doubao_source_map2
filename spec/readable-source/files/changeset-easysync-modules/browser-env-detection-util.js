// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'PV' to 'componentTypes'
// - Renamed export 'ZP' to 'browserDetector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 355358
         */
module.exports = function (module, exports, require) {
  var r;
  var browserDetectionUtil = require("browser-detection-util") /*id: 178370*/;
  var o = browserDetectionUtil;
  function s(t, e) {
    e = RegExp("(iPhone\\s" + e + ")");
    return !!t.match(e);
  }
  var a = {
    Web: "web",
    Feed: "feed",
    Group: "group",
    MultiPage: "multi_page",
    MS: "ms",
    Open: "open",
    Agenda: "agenda"
  };
  var u = {
    Tab: "tab"
  };
  var c = {
    Announce: "announce"
  };
  var l = {
    MeetingNotes: "meeting_notes",
    ChatTab: "chat_tab",
    Message: "message"
  };
  var p = {
    Device: "device",
    Room: "room"
  };
  var h = {
    Miniprogram: "miniprogram"
  };
  var f = ["open_type", "lark", "sourceType", "last_doc_message_id", "feed_id", "contentTheme", "theme", "useNewLarklet", "scene", "sub_scene", "chatTab", "useIframe", "multiPage"];
  function d(t) {
    return function (e, n, r) {
      var i;
      var o;
      return t(e = (e = e || (o = (i = typeof window != "undefined") && window.navigator || {}, i && (window.User && window.User.userAgent || o.userAgent) || "") || "").toLowerCase(), n || function (t) {
        try {
          return JSON.parse("{\"" + decodeURI(t).replace(/^\?/g, "").replace(/"/g, "\\\"").replace(/&/g, "\",\"").replace(/=/g, "\":\"") + "\"}");
        } catch (t) {
          return {};
        }
      }(typeof window != "undefined" ? window.location.search : ""), r);
    };
  }
  function v(t, e) {
    if (typeof window != "undefined" && typeof window.larkTabName == "string") {
      return window.larkTabName;
    } else {
      return e.larkTabName || "";
    }
  }
  function y(t, e) {
    var n;
    var r = e.scene;
    var e = e.sub_scene;
    var i = e === undefined ? "" : e;
    switch (r === undefined ? "" : r) {
      case a.Feed:
        n = {
          scene: a.Feed,
          subScene: u.Tab
        };
        break;
      case a.Group:
        n = {
          scene: a.Group,
          subScene: c.Announce
        };
        break;
      case a.MultiPage:
        n = {
          scene: a.MultiPage,
          subScene: i
        };
        break;
      case a.MS:
        n = {
          scene: a.MS,
          subScene: i
        };
        break;
      case a.Agenda:
        n = {
          scene: a.Agenda,
          subScene: i
        };
        break;
      default:
        n = {
          scene: a.Web,
          subScene: ""
        };
    }
    if (t.includes("miniprogram/feed")) {
      return {
        scene: a.Open,
        subScene: h.Miniprogram
      };
    } else {
      return n;
    }
  }
  function g(t, e, n) {
    var r = e.scene_id;
    var r = r === undefined ? "" : r;
    var e = e.doc_app_id;
    var e = e === undefined ? "" : e;
    var i = "";
    var n = n && n.pathname || typeof window != "undefined" && window.location && window.location.pathname;
    if (/^\/sync\//.test(n || "")) {
      i = "601";
    }
    return {
      docAppId: e || r || i || ""
    };
  }
  function _(t, e) {
    return t.includes("superapp") && !v(t, e) && !m();
  }
  function m() {
    var t = typeof window != "undefined" ? window.User : undefined;
    return !!t && !!t.isFeedEnv;
  }
  (b = r = r || {}).VC_AGENDA = "101";
  b.ROOMS_AGENDA = "201";
  b.CALENDAR_AGENDA = "301";
  b.IM_GROUP = "401";
  b.IM_FEED = "402";
  b.IM_CHAT = "403";
  b.WHITE_BOARD = "501";
  b.ALONE_SYNCEDBLOCK = "601";
  b.IMCHAT_SYNCEDBLOCK = "602";
  b.TASKLISTBLOCK = "701";
  b.APP_RELATE_DOC = "801";
  b.BASE = "901";
  var b;
  var E;
  var w;
  var S;
  var T = {
    getLarkVersion: d(function (t, e) {
      if ((t = t.match(/Lark\/([0-9.]+)/i)) && t.length >= 2) {
        return t[1];
      } else {
        return "";
      }
    }),
    getLarkTabName: d(v),
    getScene: d(y),
    getDocComponent: d(g),
    getDocComponentHeader: d(function (t, e, n) {
      var r = {};
      var i = y(t, e);
      var o = i.scene;
      var o = o === undefined ? "" : o;
      var i = i.subScene;
      var i = i === undefined ? "" : i;
      var t = g(t, e, n).docAppId;
      var e = t === undefined ? "" : t;
      if (o) {
        r["ccm-scene"] = o;
      }
      if (i) {
        r["ccm-sub-scene"] = i;
      }
      if (e) {
        r["doc-component-app"] = e;
      }
      return r;
    }),
    isFromFeed: d(function (t, e) {
      if (_(t, e)) {
        if (e.scene) {
          return y(t, e).scene === a.Feed;
        }
      } else if (e.scene && e.lark === "1") {
        return y(t, e).scene === a.Feed;
      }
      return e.lark === "1" && !e.chatTab;
    }),
    isFromOpenPlatformMini: d(function (t, e) {
      return (t = y(t, e)).scene === a.Open && t.subScene === h.Miniprogram;
    }),
    isFromMeetings: d(function (t, e) {
      if (e.scene && e.lark === "1") {
        return (t = y(t, e)).scene === a.MultiPage && t.subScene === l.MeetingNotes;
      } else {
        return e.lark === "3" || e.open_type === "meeting_notes";
      }
    }),
    isFromChatTab: d(function (t, e) {
      if (e.scene && e.lark === "1") {
        return (t = y(t, e)).scene === a.MultiPage && t.subScene === l.ChatTab;
      } else {
        return e.lark === "1" && e.chatTab === "1" && e.open_type !== "announce";
      }
    }),
    isFromGroup: d(function (t, e) {
      if (e.scene) {
        return (t = y(t, e)).scene === a.Group && t.subScene === c.Announce;
      } else {
        return e.open_type === "announce";
      }
    }),
    isFromMessage: d(function (t, e) {
      return !!e.scene && e.lark === "1" && (t = y(t, e)).scene === a.MultiPage && t.subScene === l.Message;
    }),
    isFromMultiPage: d(function (t, e) {
      if (e.scene && e.lark === "1") {
        return y(t, e).scene === a.MultiPage;
      } else {
        return e.multiPage === "1" && e.lark === "1";
      }
    }),
    isFromSuperApp: d(_),
    isFromIE: d(function (t) {
      return t.includes("msie") || t.includes("trident");
    }),
    isFromMobile: d(function (t) {
      return t.includes("docs") || t.includes("mobile") || t.includes("jike/") || t.includes("iphone");
    }),
    isFromMobileIPad: d(function (t) {
      return t.includes("ipad") && t.includes("docssdk");
    }),
    isFromIPad: d(function (t) {
      return t.includes("ipad");
    }),
    isFromMSLark: d(function (t, e) {
      return (!!t.includes("ironwebview") || !!t.includes("apollyon")) && (e.scene ? (t = y(t, e)).scene === a.MS && t.subScene === p.Device : e.vc === "true" && e.hideHeader === "1");
    }),
    isFromMSWeb: d(function (t, e) {
      return e.vc === "true" && e.hideHeader === "1";
    }),
    isFromMSServer: d(function (t, e) {
      return e.vc === "true" && e.hideHeader === "1" && (t.includes("feishurooms server") || t.includes("larkrooms server"));
    }),
    isFromMSRooms: d(function (t, e) {
      return (!!t.includes("feishurooms") || !!t.includes("larkrooms")) && (e.scene ? (t = y(t, e)).scene === a.MS && t.subScene === p.Room : e.vc === "true" && e.hideHeader === "1");
    }),
    isFeedPrefetch: d(function (t) {
      return t.includes("larkfeed/prefetch");
    }),
    isDocComponent: d(function (t, e, n) {
      e = e.doc_app_id || e.scene_id;
      n = n && n.pathname || typeof window != "undefined" && window.location && window.location.pathname;
      return !isNaN(parseInt(e)) || /^\/sync\//.test(n || "");
    }),
    isLarkTemplate: m,
    getQueryFilter: function () {
      return f;
    }
  };
  var I = typeof window != "undefined";
  var A = I && window.navigator || {};
  if (I) {
    E = window.User && window.User.userAgent;
    w = A.userAgent;
    S = /superapp/i;
    if (E && w && S.test(w) && !S.test(E)) {
      window.User.userAgent += " SuperApp";
    }
  }
  var C = I && (window.User && window.User.userAgent || A.userAgent) || "";
  var M = function (t) {
    var e = typeof window != "undefined";
    try {
      if (e) {
        return window.sessionStorage.getItem(t);
      } else {
        return null;
      }
    } catch (t) {}
    return null;
  }("__ENTER_FROM__") || "";
  var k = I ? window.location : {};
  var O = I ? window.larkTabName : "";
  var R = o.detect(C);
  var D = function (t, e, n) {
    var r;
    var i;
    var n = n || {};
    var o = n.from;
    var o = o === undefined ? "" : o;
    var a = n.larkTabName;
    var a = a === undefined ? "" : a;
    var u = n.user;
    var u = u === undefined ? {} : u;
    var c = n.location;
    var c = c === undefined ? {
      search: "",
      pathname: ""
    } : c;
    var l = n.navigator;
    var l = l === undefined ? {} : l;
    var n = n.wxJsEnvironment;
    var n = n === undefined ? "" : n;
    var p = t;
    var t = {
      isFeishu: false,
      isLark: false,
      isLarkPcTab: false,
      isLarkWindow: false,
      isLKP: false,
      isDocs: false,
      isDocsSDK: false,
      isFeed: false,
      isOpenDoc: false,
      isIphoneX: false,
      isIPhoneX: false,
      isIPad: false,
      isMobile: false,
      isMac: false,
      isWindows: false,
      isSafari: false,
      isIE: false,
      isIECompatibleMode: false,
      isSougou: false,
      isIOS: false,
      isAndroid: false,
      isQQ: false,
      isWechat: false,
      isWeibo: false,
      isToutiao: false,
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
      isIPhoneSeries: function () {
        return false;
      },
      isPrimaryChrome: false,
      isOpera: false,
      is2345: false,
      isMaxthon: false,
      isTheWorld: false,
      isLarkPhone: false,
      isInVC: false,
      isFeishuRooms: false,
      isFeishuRoomsServer: false,
      isVCWebview: false,
      isOpendoc: false,
      isWxMp: false,
      isDocApp: false,
      isH5: false,
      isPcWeb: false,
      isVulcan: false,
      isLarkWebPage: false,
      isLarkPureWebPage: false,
      isLarkWebApp: false,
      isInIframe: false
    };
    t.isFeishu = /feishu/i.test(p);
    t.isLark = t.isFeishu || /lark/i.test(p);
    t.isLarkPcTab = t.isLark && (o === "lark.tab" || !!a || /TYPE\/PC_TAB/i.test(p));
    t.isLarkWindow = t.isLark && o === "lark.window";
    t.isLKP = /LKP_EMBED_LARK/i.test(p);
    t.isDocs = /Docs/i.test(p);
    t.isDocsSDK = t.isLark && t.isDocs;
    t.isFeed = !!u.isFeedEnv;
    t.isOpenDoc = /lark=2/.test(c.search || "") || t.isFeed && /open_type=announce/.test(c.search || "");
    t.isIphoneX = s(p, "X");
    t.isIPhoneX = t.isIphoneX;
    t.isIPad = /iPad/i.test(p) || !!(r = l).maxTouchPoints && !!(r.maxTouchPoints > 2) && !!/Macintosh/.test(p) && !!/MacIntel/.test(r.platform || "");
    t.isMobile = e.mobile;
    t.isMac = e.mac;
    t.isWindows = !!e.windows;
    t.isWechat = /MicroMessenger/i.test(p);
    t.isSafari = e.safari && !t.isWechat;
    t.isIE = e.msie || e.msedge;
    t.isIECompatibleMode = /Trident/i.test(p);
    t.isSougou = /MetaSr/i.test(p);
    t.isIOS = !!p.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    t.isAndroid = p.indexOf("Android") > -1 || p.indexOf("Adr") > -1;
    t.isQQ = /QQBrowser/i.test(p);
    t.isX5 = /MQQBrowser/i.test(p);
    t.isWeibo = /WeiBo/i.test(p);
    t.isToutiao = /newsarticle/i.test(p);
    t.is360 = /360SE/i.test(p);
    t.is360Fast = /360EE/i.test(p);
    t.isUc = /UBrowser/i.test(p);
    t.isBaiDu = /BIDUBrowser/i.test(p);
    t.is2345 = /2345Explorer/i.test(p);
    t.isMaxthon = /Maxthon/i.test(p);
    t.isTheWorld = /TheWorld/i.test(p);
    t.isDocApp = /LarkDocs/i.test(p);
    t.isWxMp = /miniprogram/i.test(p) || n === "miniprogram";
    t.isLB = /LBBROWSER/i.test(p);
    t.isEdge = /Edg/i.test(p);
    t.isFF = /Firefox/i.test(p);
    t.isOpera = /OPR/i.test(p);
    t.isWebKit = /AppleWebKit/i.test(p);
    t.isChrome = e.name.toLocaleLowerCase() === "chrome";
    t.isLarkPhone = /LKPDesktop/i.test(p);
    t.isVulcan = /Vulcan/i.test(p);
    t.isInVC = /vc=true/.test((c.search || "").toLowerCase()) || t.isLark && /\sVC\//.test(p);
    t.isFeishuRooms = /FeishuRooms|LarkRooms/i.test(p);
    t.isFeishuRoomsServer = /(Feishu|Lark)Rooms\sServer/i.test(p);
    t.isVCWebview = /IronWebview/i.test(p);
    t.isPrimaryChrome = t.isChrome && !t.isOpera && !t.isLB && !t.isUc && !t.isBaiDu && !t.is360 && !t.is360Fast && !t.isQQ && !t.isSougou && !t.isEdge && !t.is2345 && !t.isTheWorld && !t.isMaxthon;
    t.isLarkWebApp = t.isLark && /WebApp/i.test(p);
    t.isLarkPureWebPage = t.isLark && /WebPage/i.test(p);
    t.isLarkWebPage = t.isLarkPureWebPage || t.isLarkWebApp;
    if (e.msie) {
      a = parseInt(String(e.version), 10);
      t.oldIE = a < 11;
      t.modernIE = a >= 11;
    }
    if (t.isSougou) {
      t.name = "sougou";
      i = /SE (\w*.\w*)\s/.exec(p);
      t.version = i && i[1] || e.version;
    }
    if (t.isQQ) {
      t.name = "qq";
      i = p.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1");
      t.version = String(parseFloat(i));
    }
    if (t.is360) {
      t.name = "360";
    }
    if (t.is360Fast) {
      t.name = "360fast";
    }
    if (t.isLB) {
      t.name = "liebao";
    }
    if (t.isUc) {
      t.name = "uc";
    }
    if (t.isBaiDu) {
      t.name = "baidu";
    }
    if (t.isMaxthon) {
      t.name = "Maxthon";
    }
    if (t.isVulcan) {
      t.name = "Vulcan";
    }
    t.kernel = ["msie", "webkit", "blink", "gecko", "msedge", "tablet", "mobile"].find(function (t) {
      return e[t];
    });
    t.isLarkTab = /from\/(old_)?lark_tab/i.test(p);
    t.isOldLarkTab = /from\/old_lark_tab/i.test(p);
    var o = t.isLark || t.isDocs;
    t.isBytedanceApp = o;
    t.isInIframe = typeof window != "undefined" && window.self !== window.top;
    t.isOpendoc = (/opendoc=(true|1)/.test((c.search || "").toLowerCase()) || /^\/component\//.test(c.pathname || "")) && t.isInIframe;
    t.isH5 = t.isMobile && !t.isLark && !t.isFeishu && !t.isDocApp;
    t.isPcWeb = !t.isMobile && !t.isLark && !t.isFeishu;
    t.isIPhoneSeries = function (t) {
      return s(p, t);
    };
    return t;
  }(C, R, {
    from: M,
    larkTabName: O,
    user: I ? window.User : undefined,
    navigator: A,
    location: k,
    wxJsEnvironment: I ? window.__wxjs_environment : ""
  });
  var N = Object.assign({}, R, D, T);
  var x = N.isIPhoneX;
  Object.defineProperty(N, "isIphoneX", {
    get: function () {
      return x;
    }
  });
  var P = N;
  require.d(exports, {
    componentTypes: function () {
      return r;
    },
    browserDetector: function () {
      return P;
    }
  });
}