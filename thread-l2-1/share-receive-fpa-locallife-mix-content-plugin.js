// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'asyncSkillContentBlock_5'
// - Resolved require(837193) to 'async-skill-content-block_5'
// - Renamed variable 'r' to 'chatReceiveContentSymbol'
// - Resolved require(66267) to 'chat-receive-content-symbol'
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'urlLinkNormalizer'
// - Resolved require(365828) to 'url-link-normalizer'
// - Renamed variable 's' to 'chatContextProviders'
// - Resolved require(793426) to 'chat-context-providers'
// - Renamed variable 'c' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'd' to 'threadCardEnums'
// - Resolved require(462913) to 'thread-card-enums'
// - Renamed variable 'u' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'p' to 'utf8EncodingUtils_1'
// - Resolved require(858081) to 'utf8-encoding-utils_1'
// - Renamed variable 'm' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(5761) to 'runtime-chunk-loader'
// - Resolved require.bind(875368) to 'runtime-export-helper'
// - Resolved require.bind(651137) to 'locallife-widget-renderer'
// - Resolved require.e(1979) to 'image-box'
// - Resolved require.bind(332667) to 'image-box-component'
// - Updated imported property 'nw' to 'normalizeLink' (module 365828)
// - Updated imported property 'jW' to 'extractRawUrl' (module 365828)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'p3' to 'useArtifactClick' (module 793426)
// - Updated imported property 'fz' to 'cardTypes' (module 462913)
// - Updated imported property 'K' to 'Utf8Utils' (module 858081)
// - Updated imported property 'N' to 'AsyncSkillContentBlock' (module 837193)
// - Updated imported property 'H' to 'receiveContentSymbol' (module 66267)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 361550
         */
module.exports = function (module, exports, require) {
  var i;
  var asyncSkillContentBlock_5 = require("async-skill-content-block_5") /*id: 837193*/;
  var chatReceiveContentSymbol = require("chat-receive-content-symbol") /*id: 66267*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var urlLinkNormalizer = require("url-link-normalizer") /*id: 365828*/;
  var chatContextProviders = require("chat-context-providers") /*id: 793426*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var threadCardEnums = require("thread-card-enums") /*id: 462913*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var utf8EncodingUtils_1 = require("utf8-encoding-utils_1") /*id: 858081*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  require.e("runtime-chunk-loader") /*id: 5761*/.then(require.bind(require, "runtime-export-helper") /*id: 875368*/);
  let f = reactCoreLibraryReexport.lazy(() => Promise.resolve().then(require.bind(require, "locallife-widget-renderer") /*id: 651137*/));
  let h = reactCoreLibraryReexport.lazy(() => require.e("image-box") /*id: 1979*/.then(require.bind(require, "image-box-component") /*id: 332667*/).then(e => ({
    default: e.ImageBox
  })));
  (i = {}).Unknown = "unknown";
  i.Locallife = "com.flow.locallife";
  let g = i;
  let _ = {
    Applet: "applet",
    ImageGroup: "image-group"
  };
  let b = new Set(Object.values(_));
  let k = /\[([^\]]+)\]\(([^)]+)\)/;
  function y(e, t, n) {
    if (e.replace_text) {
      let t = e.replace_text.match(k);
      let n = t == null ? undefined : t[1];
      let i = t == null ? undefined : t[2];
      if (!n || !i) {
        return;
      }
      return {
        mode: "raw",
        render: () => `[${n}](${urlLinkNormalizer.normalizeLink(i)})`
      };
    }
    if (b.has((e == null ? undefined : e.card_type) ?? "")) {
      if (e.card_type === _.Applet) {
        let i = safeJsonUtils.safeParse(w(e.value), {});
        if (!i) {
          return;
        }
        if (i.applet_id === g.Locallife) {
          return {
            render: () => reactJsxRuntimeCoreReexport.jsx(f, {
              widgetContent: i,
              handleClick: n,
              teaReportFn: teaAnalyticsEventTracker.trackEvent,
              message: t,
              logger: loggerServiceCore.defaultLogger.persist
            })
          };
        }
      } else if (e.card_type === _.ImageGroup) {
        let t = safeJsonUtils.safeParse(e.value, {});
        if (!t) {
          return;
        }
        return {
          render: () => reactJsxRuntimeCoreReexport.jsx(h, {
            images: t.images,
            onClick: n
          })
        };
      }
    }
  }
  let x = e => {
    let {
      metaInfos: t,
      messageText: n,
      message: i
    } = e;
    let {
      onArtifactCardClick: l
    } = chatContextProviders.useArtifactClick();
    loggerServiceCore.defaultLogger.console.info(`metaInfos: ${JSON.stringify(t)}`);
    let r = [];
    for (let e of t) {
      let {
        data: t
      } = e;
      if (e.type !== threadCardEnums.cardTypes.CommonCard || b.has(t.card_type)) {
        if (typeof t.pos == "number") {
          r.push(t.pos);
        } else if (typeof t.start == "number" && typeof t.end == "number") {
          r.push(t.start, t.end);
        }
      }
    }
    let o = utf8EncodingUtils_1.Utf8Utils.posCalcRange(n, r);
    let a = [];
    for (let e of t) {
      let {
        data: t
      } = e;
      if (e.type === threadCardEnums.cardTypes.Replaceable) {
        let {
          start: e,
          end: n
        } = t;
        let r = o[e];
        let s = o[n];
        if (r === undefined || s === undefined) {
          continue;
        }
        let c = y(t, i, l);
        if (!c) {
          continue;
        }
        let {
          render: d,
          mode: u
        } = c;
        a.push({
          range: [r, s],
          mode: u,
          render: d
        });
      } else if (e.type === threadCardEnums.cardTypes.CommonCard) {
        let e = o[t.pos];
        if (e === undefined) {
          continue;
        }
        let n = y(t, i, l);
        if (!n) {
          continue;
        }
        let {
          render: r,
          mode: s
        } = n;
        a.push({
          range: e,
          mode: s,
          render: r
        });
      }
    }
    return function (e) {
      let t = [];
      let n = [];
      for (let i of e) {
        let e;
        let l;
        let {
          range: r
        } = i;
        if (typeof r == "number") {
          e = r;
        } else {
          [e, l] = r;
        }
        if (function (e, t = e) {
          for (let [i, l] of n) {
            if (e >= i && e <= l || t >= i && t <= l) {
              loggerServiceCore.defaultLogger.console.info(`compare range: [${i}, ${l}], [${e}, ${t}], overlapping`);
              return true;
            }
            loggerServiceCore.defaultLogger.console.info(`compare range: [${i}, ${l}], [${e}, ${t}], not overlapping`);
          }
          return false;
        }(e, l)) {
          loggerServiceCore.defaultLogger.console.warning(`range overlaps: [${e}, ${l}]`);
          continue;
        }
        n.push([e, l ?? e]);
        t.push(i);
      }
      return t;
    }(a);
  };
  let w = e => {
    if (!e) {
      return "";
    }
    let t = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": "\"",
      "&#039;": "'",
      "&#34;": "\""
    };
    return e.replace(/&amp;|&lt;|&gt;|&quot;|&#039;|&#34;/g, e => t[e] || e);
  };
  let S = () => [];
  let R = e => {
    let {
      message: t,
      defaultCallbacks: n
    } = e;
    let {
      onArtifactCardClick: i
    } = chatContextProviders.useArtifactClick();
    return {
      onLinkClick: (e, l) => {
        let {
          url: r,
          openLink: o
        } = l;
        e.preventDefault();
        let s = urlLinkNormalizer.extractRawUrl(r);
        if (!s) {
          if (n == null ? undefined : n.onLinkClick) {
            if (n != null) {
              n.onLinkClick(e, l);
            }
          } else {
            o(r);
          }
          return;
        }
        if (i != null) {
          i();
        }
        teaAnalyticsEventTracker.trackEvent("first_party_card_h5_share_page_click", {
          url: s,
          message_id: t == null ? undefined : t.message_id,
          click_from: "link"
        });
      }
    };
  };
  function $(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let C = e => {
    let {
      inView: t,
      message: n,
      theme: i
    } = e;
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_5.AsyncSkillContentBlock, {
        inView: t,
        message: n,
        messageBlockText: undefined,
        messageBlockTextFinish: undefined,
        messageBlockTextBroken: undefined,
        theme: i,
        customRenderOptions: {
          getInitialReplacementElements: S,
          useCustomReplacementElements: x,
          useCustomEventCallbacks: R
        }
      });
    } else {
      return null;
    }
  };
  class T {
    constructor() {
      $(this, "pluginIdentifier", chatReceiveContentSymbol.receiveContentSymbol);
      $(this, "Content", C);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveFPALocallifeMixContentPlugin: function () {
      return T;
    }
  });
}