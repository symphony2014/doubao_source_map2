// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Lx' to 'chatFooterDisclaimerHook'
// - Renamed export 'Q3' to 'chatCanvasPluginLoader'
// - Renamed export 'YX' to 'syncPluginLoader'
// - Renamed export 'gu' to 'skillBarItemPluginLoader'
// - Renamed export 'A6' to 'receiveMsgActionBtnHook'
// - Renamed export 'Ny' to 'receiveMsgActionRightHook'
// - Renamed export 'ag' to 'sendMsgBoxRightHook'
// - Renamed export 'XG' to 'promptEditorPluginHook'
// - Renamed export '$h' to 'msgCmdPluginBatchLoader'
// - Renamed export 'HC' to 'receiveMsgSuggestHook'
// - Renamed export 'Sd' to 'presetPromptAreaHook'
// - Renamed export 'av' to 'chatCanvasPluginHook'
// - Renamed export 'mP' to 'msgListBottomBtnHook'
// - Renamed export 'cK' to 'guidanceInputPluginHook'
// - Renamed export 'Dq' to 'skillBarPluginHook'
// - Renamed export 'PV' to 'feedListItemMenuHook'
// - Renamed export 'Vo' to 'sendMsgBoxLeftHook'
// - Renamed export 'ce' to 'receiveMsgNodeChecker'
// - Renamed export 'sx' to 'receiveMsgBoxBottomHook'
// - Renamed export 'LB' to 'pluginKeysGetter'
// - Renamed export 'as' to 'inputEventsPluginLoader'
// - Renamed export 'bc' to 'receiveMsgNodeHook'
// - Renamed export 'b7' to 'sendMsgActionBtnHook'
// - Renamed export 'n2' to 'sendMsgBoxBottomHook'
// - Renamed export 'Pe' to 'inputToolMenuHook'
// - Renamed export 'RT' to 'sidebarAppPluginHook'
// - Renamed export 'dh' to 'chatHeaderPluginHook'
// - Renamed export 'os' to 'chatInputPluginHook'
// - Renamed export 'pB' to 'protocolTransformLoader'
// - Renamed export 'f2' to 'referenceAreaPluginHook'
// - Renamed export 'GM' to 'sendMsgBoxPluginHook'
// - Renamed export 'fm' to 'guidanceInputLoader'
// - Renamed export 'cf' to 'chatProtocolLoader'
// - Renamed export 'uN' to 'asyncPluginLoader'
// - Renamed export 'ae' to 'sendMsgNodeChecker'
// - Renamed export 'hX' to 'msgListLifeCycleHook'
// - Renamed export '$$' to 'msgErrorPluginBatch'
// - Renamed export 'CD' to 'receiveMsgBoxTopHook'
// - Renamed export 'KH' to 'msgGroupBottomHook'
// - Renamed export 'iW' to 'sendMsgBoxTopHook'
// - Renamed export '$I' to 'attachmentAreaHook'
// - Renamed export 'MM' to 'chatGuidanceHook'
// - Renamed export 'Ug' to 'receiveMsgGroupHook'
// - Renamed export 'Vm' to 'sendMsgNodeHook'
// - Renamed export 'tP' to 'receiveMsgNodeLoader'
// - Renamed export 'wW' to 'chatInputPluginLoader'
// - Renamed export 'sU' to 'skillBarItemHook'
// - Renamed export 'Pc' to 'contentBlockResolveLoader'
// - Renamed export 'Qt' to 'headerToolBtnHook'
// - Renamed export 'PM' to 'receiveMsgBoxHook'
// - Renamed export 'o6' to 'msgLifeCycleLoader'
// - Renamed export 'kJ' to 'launcherDataLoader'
// - Renamed export 'Y6' to 'guidanceSuggestionsHook'
// - Renamed export 'rS' to 'engineTemplateHook'
// - Renamed export 'Xg' to 'inputToolBtnHook'
// - Renamed export 'Hc' to 'contentBlockMergeLoader'
// - Renamed export 'EF' to 'receiveMsgBoxRightHook'
// - Renamed export 'aI' to 'receiveMsgBoxLeftHook'
// - Renamed export 'GG' to 'contentBlockPluginHook'
// - Renamed export 'O5' to 'inputModeSelectHook'
// - Renamed export '$4' to 'chatFooterPluginHook'
// - Renamed export 'eD' to 'sendMsgNodeLoader'
// - Renamed export 'sw' to 'receiveMsgActionBotHook'
// - Renamed export 'kR' to 'feedListItemToolHook'
// - Renamed export '_W' to 'inputToolBtnListHook'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 232752
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isErrorUtil = require("is-error-util") /*id: 597114*/;
  var customDeepEqualUtil = require("custom-deep-equal-util") /*id: 815226*/;
  let a = e => {
    let [t, n] = reactCoreLibraryReexport.useState(() => typeof e == "function" ? e() : e);
    let r = reactCoreLibraryReexport.useRef(t);
    let o = reactCoreLibraryReexport.useCallback(e => {
      let t = typeof e == "function" ? e(r.current) : e;
      r.current = t;
      n(t);
    }, []);
    return [r.current, o, r];
  };
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var isClassUtil = require("is-class-util") /*id: 156635*/;
  var bindingManager = require("binding-manager") /*id: 503351*/;
  var chatIocManager = require("chat-ioc-manager") /*id: 998196*/;
  let d = e => (t, n, i) => {
    let {
      pluginContainerMap: r
    } = chatIocManager.getResourceCtrl(i);
    r[e] ||= new bindingManager.BindingManager();
    let o = r[e];
    let a = typeof t == "symbol" ? t : t.toString();
    if (!o.isBound(a)) {
      isClassUtil.isClass(n);
      o.bind(a, n);
    }
  };
  let h = e => (t, n) => {
    let {
      pluginContainerMap: i
    } = chatIocManager.getResourceCtrl(n);
    let r = i[e];
    let o = typeof t == "symbol" ? t : t.toString();
    if (r == null ? undefined : r.isBound(o)) {
      return r.get(o);
    }
  };
  let m = e => (t, n) => {
    if (!t) {
      return;
    }
    let {
      resourceStore: i
    } = chatIocManager.getResourceCtrl(n);
    let r = i.getState()[e];
    if (r == null) {
      return undefined;
    } else {
      return r[t];
    }
  };
  let g = (e, t, n) => {
    if (!t) {
      return;
    }
    let i = h(e)(t, n);
    if (i) {
      if (isClassUtil.isClass(i)) {
        return new i();
      } else {
        return i;
      }
    }
  };
  let f = e => async (t, n) => {
    if (!t) {
      return;
    }
    let i = g(e, t, n);
    if (i) {
      return i;
    }
    {
      let i = h(e);
      let r = m(e)(t, n);
      let o = await (r == null ? undefined : r.load());
      if (!o) {
        return;
      }
      d(e)(t, o, n);
      let a = i(t, n);
      if (isClassUtil.isClass(a)) {
        return new a();
      } else {
        return a;
      }
    }
  };
  let p = (e, t, n) => {
    let i = m(e)(t, n);
    let r = i == null ? undefined : i.load();
    let o = r && !(r instanceof Promise);
    if (o && t) {
      d(e)(t, r, n);
      let i = h(e)(t, n);
      return {
        plugin: isClassUtil.isClass(i) ? new i() : i,
        isSyncPlugin: o
      };
    }
    return {
      plugin: undefined,
      isSyncPlugin: o
    };
  };
  let _ = e => (t, n) => {
    var d;
    let [h, m, _] = a(() => {
      let i = {};
      if (!t) {
        return i;
      }
      let r = g(e, t, n);
      i[t] = {
        plugin: r,
        done: !!r,
        error: undefined
      };
      return i;
    });
    let {
      plugin: v,
      isSyncPlugin: b
    } = p(e, t, n);
    let S = _.current[t]?.plugin;
    if (!v && t && !S) {
      let i = g(e, t, n);
      if (i) {
        _.current[t] = {
          plugin: i,
          done: !!i,
          error: undefined
        };
      }
    }
    reactCoreLibraryReexport.useEffect(() => {
      var i;
      let o = false;
      if (t && !b && ((i = _.current[t]) === null || i === undefined || !i.plugin)) {
        (async () => {
          try {
            let i = await f(e)(t, n);
            if (o) {
              m(e => ({
                ...e,
                [t]: {
                  done: true
                }
              }));
              return;
            }
            m(e => ({
              ...e,
              [t]: {
                plugin: i,
                done: true
              }
            }));
          } catch (n) {
            if (o) {
              m(e => ({
                ...e,
                [t]: {
                  done: true
                }
              }));
              return;
            }
            if (isErrorUtil.isError(n) && n.name === "ChunkLoadError") {
              loggerServiceCore.defaultLogger.persist.error({
                message: "load plugin failed",
                error: Error("ioc_plugin_load_chunk_error"),
                eventName: "react_error_collection",
                meta: {
                  reportJsError: true,
                  plugin_type: e,
                  plugin_identifier: t,
                  ori_error_msg: n.message
                }
              });
            }
            m(e => ({
              ...e,
              [t]: {
                error: n,
                done: true
              }
            }));
          }
        })();
        return () => {
          o = true;
        };
      }
    }, [t]);
    if (v) {
      return {
        plugin: v,
        loading: false
      };
    }
    let P = _.current;
    return {
      plugin: P[t]?.plugin,
      loading: (d = P[t]?.done) === null || d === undefined || !d,
      error: P[t]?.error
    };
  };
  let v = (e, t, n) => {
    if (!t.length) {
      return [];
    }
    let i = h(e);
    let r = t.map(e => i(e, n));
    if (r.every(e => e !== undefined)) {
      return r.map(e => isClassUtil.isClass(e) ? new e() : e);
    } else {
      return [];
    }
  };
  let b = e => async (t, n) => {
    if (!t.length) {
      return [];
    }
    let i = v(e, t, n);
    if (i.length === t.length && i.every(e => e !== undefined)) {
      return i;
    }
    {
      let i = h(e);
      let r = t.map(t => m(e)(t, n));
      let o = await Promise.all(r.map(e => e == null ? undefined : e.load()));
      for (let i = 0; i < t.length; i++) {
        let r = o[i];
        let a = t[i];
        if (r) {
          d(e)(a, r, n);
        }
      }
      return t.map(e => {
        let t = i(e, n);
        if (isClassUtil.isClass(t)) {
          return new t();
        } else {
          return t;
        }
      });
    }
  };
  let S = (e, t, n) => {
    let i = t.map(t => m(e)(t, n)).map(e => e == null ? undefined : e.load()).map((i, r) => {
      let o = t[r];
      let a = i && !(i instanceof Promise);
      if (a) {
        d(e)(t[r], i, n);
      }
      let l = h(e)(o, n);
      return {
        plugin: isClassUtil.isClass(l) ? new l() : l,
        isSyncPlugin: a
      };
    });
    if (i.every(e => e.isSyncPlugin)) {
      return {
        pluginList: i.map(e => e.plugin),
        isSyncPluginList: true
      };
    } else {
      return {
        pluginList: [],
        isSyncPluginList: false
      };
    }
  };
  let P = e => (t, n) => {
    var c;
    let [d, h] = reactCoreLibraryReexport.useState(() => {
      let i = v(e, t, n);
      let r = new Map();
      if (t == null ? undefined : t.length) {
        r.set(t, {
          done: i.every(e => e !== undefined),
          error: undefined,
          pluginList: v(e, t, n)
        });
      }
      return r;
    });
    let m = [...d.keys()].find(e => customDeepEqualUtil.customDeepEqual(e, t, (e, t) => e.length === t.length && e.every((e, n) => e === t[n]))) || t;
    let {
      pluginList: g,
      isSyncPluginList: f
    } = S(e, m, n);
    reactCoreLibraryReexport.useEffect(() => {
      var t;
      var i;
      let o = false;
      if ((m == null ? undefined : m.length) && !f && ((i = d.get(m)) === null || i === undefined || (t = i.pluginList) === null || t === undefined || !t.length)) {
        (async () => {
          try {
            let t = await b(e)(m, n);
            if (o) {
              h(e => {
                let t = new Map(e);
                t.set(m, {
                  done: true
                });
                return t;
              });
              return;
            }
            h(e => {
              let n = new Map(e);
              n.set(m, {
                pluginList: t,
                done: true
              });
              return n;
            });
          } catch (t) {
            if (o) {
              h(e => {
                let t = new Map(e);
                t.set(m, {
                  done: true
                });
                return t;
              });
              return;
            }
            if (isErrorUtil.isError(t) && t.name === "ChunkLoadError") {
              loggerServiceCore.defaultLogger.persist.error({
                message: "load plugin failed",
                error: Error("ioc_plugin_load_chunk_error"),
                eventName: "react_error_collection",
                meta: {
                  reportJsError: true,
                  plugin_type: e,
                  plugin_identifier_list: m.map(e => e.toString()),
                  ori_error_msg: t.message
                }
              });
            }
            h(e => {
              let n = new Map(e);
              n.set(m, {
                error: t,
                done: true
              });
              return n;
            });
          }
        })();
        return () => {
          o = true;
        };
      }
    }, [m]);
    if (g == null ? undefined : g.length) {
      return {
        pluginList: g,
        loading: false
      };
    } else {
      return {
        pluginList: d.get(m)?.pluginList || [],
        loading: (c = d.get(m)?.done) === null || c === undefined || !c,
        error: d.get(m)?.error
      };
    }
  };
  let C = (e, t) => {
    let {
      resourceStore: i
    } = chatIocManager.getResourceCtrl(t);
    return Reflect.ownKeys(i.getState()[e] ?? {});
  };
  let y = e => (t, n) => t.reduce((t, i) => {
    let r = g(e, i, n);
    t[i] = r !== undefined;
    return t;
  }, {});
  let E = f("chatInputPlugin");
  let x = _("chatInputPlugin");
  f("inputPlugin");
  _("inputPlugin");
  f("chatGuidancePlugin");
  let T = _("chatGuidancePlugin");
  b("chatGuidanceCardPlugin");
  P("chatGuidanceCardPlugin");
  let k = f("chatProtocolPlugin");
  let R = f("chatProtocolTransformPlugin");
  f("chatReceiveMessageBoxPlugin");
  let w = _("chatReceiveMessageBoxPlugin");
  f("chatSendMessageBoxPlugin");
  let I = _("chatSendMessageBoxPlugin");
  let M = f("skillBarItemPlugin");
  let A = _("skillBarItemPlugin");
  let D = f("guidanceInputPlugin");
  let N = _("guidanceInputPlugin");
  let L = _("chatGuidanceSuggestionsPlugin");
  f("chatMessageListBottomBtnPlugin");
  let O = _("chatMessageListBottomBtnPlugin");
  let B = f("chatMessageLifeCyclePlugin");
  f("chatFooterPlugin");
  let G = _("chatFooterPlugin");
  f("chatFooterDisclaimerPlugin");
  let j = _("chatFooterDisclaimerPlugin");
  f("skillBarPlugin");
  let W = _("skillBarPlugin");
  f("inputToolButtonPlugin");
  let U = _("inputToolButtonPlugin");
  let F = _("inputEngineTemplatePlugin");
  let V = _("inputEngineAttachmentAreaPlugin");
  let Z = _("inputEngineReferenceAreaPlugin");
  let z = _("inputEnginePresetPromptAreaPlugin");
  let H = _("inputEnginePromptEditorPlugin");
  let $ = P("inputToolButtonPlugin");
  let K = _("inputToolMenuOptionPlugin");
  P("inputToolMenuOptionPlugin");
  let X = f("inputEventsPlugin");
  _("inputEventsPlugin");
  let Q = P("inputModeSelectPlugin");
  let q = P("chatMessageListLifeCyclePlugin");
  let Y = P("sidebarApplicationPlugin");
  let J = b("chatMessageErrorPlugin");
  let ee = b("chatMessageCmdPlugin");
  let et = _("chatHeaderPlugin");
  let en = f("chatCanvasPlugin");
  let ei = _("chatCanvasPlugin");
  let er = _("feedListItemToolButtonPlugin");
  let eo = _("feedListItemMenuOptionPlugin");
  f("chatReceiveMessageContentBlockPlugin");
  let ea = _("chatReceiveMessageContentBlockPlugin");
  let el = f("chatReceiveMessageContentBlockMergePlugin");
  let es = f("launcherDataLoaderPlugin");
  let eu = f("chatReceiveMessageContentBlockResolvePlugin");
  let ec = _("chatHeaderToolButtonPlugin");
  let ed = _("chatReceiveMessageSuggestPlugin");
  let eh = _("chatReceiveMessageGroupBottomPlugin");
  let em = _("chatReceiveMessageGroupPlugin");
  let eg = _("chatSendMessageBoxLeftPlugin");
  let ef = _("chatSendMessageBoxBottomPlugin");
  let ep = _("chatSendMessageBoxRightPlugin");
  let e_ = _("chatSendMessageBoxTopPlugin");
  _("chatReceiveMessageGroupStrategyMatcherPlugin");
  let ev = _("chatReceiveMessageBoxLeftPlugin");
  let eb = _("chatReceiveMessageBoxBottomPlugin");
  let eS = _("chatReceiveMessageBoxRightPlugin");
  let eP = _("chatReceiveMessageBoxTopPlugin");
  let eC = _("chatReceiveMessageActionButtonPlugin");
  let ey = _("chatSendMessageActionButtonPlugin");
  let eE = _("chatReceiveMessageActionBottomPlugin");
  let ex = _("chatReceiveMessageActionRightPlugin");
  let eT = _("chatReceiveMessageNodePlugin");
  let ek = _("chatSendMessageNodePlugin");
  let eR = f("chatSendMessageNodePlugin");
  let ew = f("chatReceiveMessageNodePlugin");
  let eI = y("chatSendMessageNodePlugin");
  let eM = y("chatReceiveMessageNodePlugin");
  require.d(exports, {
    chatFooterDisclaimerHook: function () {
      return j;
    },
    chatCanvasPluginLoader: function () {
      return en;
    },
    syncPluginLoader: function () {
      return p;
    },
    skillBarItemPluginLoader: function () {
      return M;
    },
    receiveMsgActionBtnHook: function () {
      return eC;
    },
    receiveMsgActionRightHook: function () {
      return ex;
    },
    sendMsgBoxRightHook: function () {
      return ep;
    },
    promptEditorPluginHook: function () {
      return H;
    },
    msgCmdPluginBatchLoader: function () {
      return ee;
    },
    receiveMsgSuggestHook: function () {
      return ed;
    },
    presetPromptAreaHook: function () {
      return z;
    },
    chatCanvasPluginHook: function () {
      return ei;
    },
    msgListBottomBtnHook: function () {
      return O;
    },
    guidanceInputPluginHook: function () {
      return N;
    },
    skillBarPluginHook: function () {
      return W;
    },
    feedListItemMenuHook: function () {
      return eo;
    },
    sendMsgBoxLeftHook: function () {
      return eg;
    },
    receiveMsgNodeChecker: function () {
      return eM;
    },
    receiveMsgBoxBottomHook: function () {
      return eb;
    },
    pluginKeysGetter: function () {
      return C;
    },
    inputEventsPluginLoader: function () {
      return X;
    },
    receiveMsgNodeHook: function () {
      return eT;
    },
    sendMsgActionBtnHook: function () {
      return ey;
    },
    sendMsgBoxBottomHook: function () {
      return ef;
    },
    inputToolMenuHook: function () {
      return K;
    },
    sidebarAppPluginHook: function () {
      return Y;
    },
    chatHeaderPluginHook: function () {
      return et;
    },
    chatInputPluginHook: function () {
      return x;
    },
    protocolTransformLoader: function () {
      return R;
    },
    referenceAreaPluginHook: function () {
      return Z;
    },
    sendMsgBoxPluginHook: function () {
      return I;
    },
    guidanceInputLoader: function () {
      return D;
    },
    chatProtocolLoader: function () {
      return k;
    },
    asyncPluginLoader: function () {
      return f;
    },
    sendMsgNodeChecker: function () {
      return eI;
    },
    msgListLifeCycleHook: function () {
      return q;
    },
    msgErrorPluginBatch: function () {
      return J;
    },
    receiveMsgBoxTopHook: function () {
      return eP;
    },
    msgGroupBottomHook: function () {
      return eh;
    },
    sendMsgBoxTopHook: function () {
      return e_;
    },
    attachmentAreaHook: function () {
      return V;
    },
    chatGuidanceHook: function () {
      return T;
    },
    receiveMsgGroupHook: function () {
      return em;
    },
    sendMsgNodeHook: function () {
      return ek;
    },
    receiveMsgNodeLoader: function () {
      return ew;
    },
    chatInputPluginLoader: function () {
      return E;
    },
    skillBarItemHook: function () {
      return A;
    },
    contentBlockResolveLoader: function () {
      return eu;
    },
    headerToolBtnHook: function () {
      return ec;
    },
    receiveMsgBoxHook: function () {
      return w;
    },
    msgLifeCycleLoader: function () {
      return B;
    },
    launcherDataLoader: function () {
      return es;
    },
    guidanceSuggestionsHook: function () {
      return L;
    },
    engineTemplateHook: function () {
      return F;
    },
    inputToolBtnHook: function () {
      return U;
    },
    contentBlockMergeLoader: function () {
      return el;
    },
    receiveMsgBoxRightHook: function () {
      return eS;
    },
    receiveMsgBoxLeftHook: function () {
      return ev;
    },
    contentBlockPluginHook: function () {
      return ea;
    },
    inputModeSelectHook: function () {
      return Q;
    },
    chatFooterPluginHook: function () {
      return G;
    },
    sendMsgNodeLoader: function () {
      return eR;
    },
    receiveMsgActionBotHook: function () {
      return eE;
    },
    feedListItemToolHook: function () {
      return er;
    },
    inputToolBtnListHook: function () {
      return $;
    }
  });
}