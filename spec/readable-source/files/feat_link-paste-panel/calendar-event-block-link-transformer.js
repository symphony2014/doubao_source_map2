// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Jf' to 'isCalendarEventLink'
// - Renamed export 'C4' to 'transformCalendarEventLink'
// - Renamed export 'T9' to 'validateCalendarEventLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_link-transform-queue.7e909584.js
         * chunkId: 1321
         * moduleId: 384975
         */
module.exports = function (module, exports, require) {
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var blockInsertionHandler = require("block-insertion-handler") /*id: 235064*/;
  var blockFocusStates = require("block-focus-states") /*id: 324508*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  let a = platformDocUtils.HiA.getLocale().replace("-", "_").toLocaleLowerCase();
  var flowDocEventCollector = require("flow-doc-event-collector") /*id: 276732*/;
  function c(e, t = {}) {
    let {
      eventName: n = "doc_bug_track_dev",
      target: o = "calendar_event_block",
      level: i = "info"
    } = t;
    flowDocEventCollector.collectEvent(n, {
      target: o,
      info: e,
      level: i
    });
  }
  var d = {
    log: c,
    error: function (e, t = {}) {
      return c(e, {
        ...t,
        level: "error"
      });
    }
  };
  var axiosHttpClientLibrary = require("axios-http-client-library") /*id: 936615*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var isPlainObjectUtil = require("is-plain-object-util") /*id: 435967*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var stringDeburrUtil_1 = require("string-deburr-util_1") /*id: 505593*/;
  var stringDeburrTransform = require("string-deburr-transform") /*id: 318449*/;
  function m(e) {
    return function t(n, o = {}) {
      let {
        skip: i,
        bail: r
      } = o;
      if (Array.isArray(n)) {
        return n.map(e => t(e, o));
      } else if (isPlainObjectUtil.isPlainObject(n)) {
        return getOwnKeys.getOwnKeys(n).reduce((l, a) => {
          l[(i == null ? undefined : i(a)) ? a : e(a)] = (r == null ? undefined : r(a)) ? n[a] : t(n[a], o);
          return l;
        }, {});
      } else {
        return n;
      }
    };
  }
  let E = m(stringDeburrUtil_1.deburrString);
  let b = m(stringDeburrTransform.createDeburrTransform);
  let I = e => {
    try {
      if (e.indexOf("%") !== -1) {
        return decodeURIComponent(e);
      } else {
        return e;
      }
    } catch {
      return e;
    }
  };
  let v = e => {
    let t = document.cookie;
    d.log(`getCookie cookieStr=${t}`);
    if (!t || !e) {
      d.error("getCookie failed, because no cookieStr or key");
      return "";
    }
    let n = t.split("; ").find(t => t.indexOf(`${e}=`) === 0);
    d.log(`getCookie cookie=${n}`);
    if (n) {
      return I(n.trim().slice(e.length + 1));
    } else {
      d.error("getCookie failed, because no cookie");
      return "";
    }
  };
  let A = axiosHttpClientLibrary.axios.create({
    baseURL: "/calendar/event-block/",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      locale: a
    }
  });
  async function y(e) {
    return A.post("1010017", {
      calendarId: "",
      uid: "",
      originalTime: 0,
      needsBriefEvents: true,
      messageId: "",
      sharingUserId: 0,
      needFullCalendarEventInfo: false,
      token: e
    });
  }
  if (browserEnvironmentDetectionUtils.browserDetector.isOpendoc) {
    A.interceptors.request.use(platformDocUtils.MrU);
  }
  A.interceptors.request.use(async e => {
    let t = v("_csrf_token");
    e.data = b(e.data);
    e.headers["X-CSRFToken"] = t;
    return e;
  });
  A.interceptors.response.use(e => {
    e.data = E(e.data);
    return e;
  });
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var globalConfigUtils = require("global-config-utils") /*id: 115973*/;
  var appConfigInitializer = require("app-config-initializer") /*id: 321601*/;
  if (browserEnvironmentDetectionUtils.browserDetector.isLark) {
    appConfigInitializer.getEnvConfig().isOverseaPkg;
  } else {
    globalConfigUtils.isLarkProduct();
  }
  let _ = () => true;
  let T = e => e.split(".").slice(-2).join(".");
  let w = async (e, t) => {
    try {
      let n = new URL(e);
      let o = n.searchParams.get("token");
      if (!o || n.pathname !== "/calendar/share") {
        return null;
      }
      if (T(n.host) === T(t || window.location.host)) {
        return n;
      }
      {
        let {
          data: e
        } = await y(o);
        if (e.data.calendarEvent) {
          return n;
        }
      }
      return null;
    } catch (e) {
      return null;
    }
  };
  let L = async e => !!(await w(e));
  let M = async e => {
    let {
      block: t,
      text: n,
      linkRange: l
    } = e;
    let a = await w(n);
    let s = a == null ? undefined : a.searchParams.get("token");
    if (!s) {
      return;
    }
    let {
      blockManager: c
    } = t;
    await blockInsertionHandler.insertBlockHandler({
      blocks: [t],
      panelType: editorUiComponentConstants.uiComponentTypes.LINK_TRANSFORM,
      focusType: blockFocusStates.focusStates.NEXT_LINE_FOCUS,
      blockData: c.createSnapshot(docBlockTypeConstants.blockTypeConstants.CALENDAR_EVENT, {
        token: s
      }),
      eRange: l
    });
  };
  require.d(exports, {
    isCalendarEventLink: function () {
      return _;
    },
    transformCalendarEventLink: function () {
      return M;
    },
    validateCalendarEventLink: function () {
      return L;
    }
  });
}