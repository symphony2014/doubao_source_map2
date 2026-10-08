// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactIntersectionObserver_1'
// - Resolved require(728951) to 'react-intersection-observer_1'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'lifecycleEventManager'
// - Resolved require(597916) to 'lifecycle-event-manager'
// - Renamed variable 'c' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'd' to 'rpcHostManager'
// - Resolved require(953389) to 'rpc-host-manager'
// - Renamed variable 'u' to 'corpcDebugLoggers'
// - Resolved require(363765) to 'corpc-debug-loggers'
// - Renamed variable 'h' to 'rpcChannelCore'
// - Resolved require(737542) to 'rpc-channel-core'
// - Renamed variable 'm' to 'collaborationEventSubscriber'
// - Resolved require(8519) to 'collaboration-event-subscriber'
// - Renamed variable 'g' to 'inlineDocxPanel_1'
// - Resolved require(913362) to 'inline-docx-panel_1'
// - Renamed variable 'v' to 'docxPanelBridge'
// - Resolved require(827167) to 'docx-panel-bridge'
// - Renamed variable 'b' to 'eventEmitterWrapper_1'
// - Resolved require(740547) to 'event-emitter-wrapper_1'
// - Renamed variable '_' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Pr' to 'getServiceDebug' (module 363765)
// - Updated imported property 'S' to 'RpcHostManager' (module 953389)
// - Updated imported property 'l' to 'RpcError' (module 737542)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'v' to 'getEventEmitter' (module 740547)
// - Updated imported property 'a' to 'getDocxBridge' (module 827167)
// - Updated imported property 'h' to 'docxBridgeManager' (module 827167)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'YD' to 'useInView' (module 728951)
// - Updated imported property 'l' to 'lifecycleManager' (module 597916)
// - Updated imported property '_' to 'collaborationEventSubscriber' (module 8519)
// - Updated imported property 'V' to 'InlineDocxPanel' (module 913362)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 679615
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var lifecycleEventManager = require("lifecycle-event-manager") /*id: 597916*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  var corpcDebugLoggers = require("corpc-debug-loggers") /*id: 363765*/;
  var rpcChannelCore = require("rpc-channel-core") /*id: 737542*/;
  let p = corpcDebugLoggers.getServiceDebug("inline");
  let f = {
    async toggleEditing(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n) {
        p("[warn] RpcHost not initialized");
        return;
      }
      if (!t) {
        p("[warn] No client connected");
        return;
      }
      try {
        await n.call(t, "inline.toggleEditing", {
          editing: e
        });
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          p("[warn] toggleEditing failed:", e.message);
        }
        throw e;
      }
    },
    async copyAllDoc(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n) {
        p("[warn] RpcHost not initialized");
        return;
      }
      if (!t) {
        p("[warn] No client connected");
        return;
      }
      try {
        return await n.call(t, "inline.copyAllDoc", e);
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          p("[warn] copyAllDoc failed:", e.message);
        }
        throw e;
      }
    },
    subscribeEvents(e, t) {
      if (!e) {
        return emptyExportFunction.emptyFunction;
      }
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (!n) {
        p("[warn] RpcHost not initialized");
        return emptyExportFunction.emptyFunction;
      }
      let i = [];
      let r = () => {
        if (t.onMounted) {
          i.push(n.on(e, "inline.mounted", t.onMounted));
        }
        if (t.onFallback) {
          i.push(n.on(e, "inline.fallback", t.onFallback));
        }
        if (t.onHeightChanged) {
          i.push(n.on(e, "inline.heightChanged", t.onHeightChanged));
        }
        if (t.onTitleChanged) {
          i.push(n.on(e, "inline.titleChanged", t.onTitleChanged));
        }
      };
      let o = () => {
        i.forEach(e => e());
        i.length = 0;
      };
      if (n.isClientConnected(e)) {
        r();
      }
      let a = n.onConnection(t => {
        if (t === e && i.length === 0) {
          r();
        }
      });
      let s = n.onDisconnection(t => {
        if (t === e) {
          o();
        }
      });
      return () => {
        a();
        s();
        o();
      };
    }
  };
  var collaborationEventSubscriber = require("collaboration-event-subscriber") /*id: 8519*/;
  var inlineDocxPanel_1 = require("inline-docx-panel_1") /*id: 913362*/;
  var docxPanelBridge = require("docx-panel-bridge") /*id: 827167*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  class y extends eventEmitterWrapper_1.getEventEmitter {
    async toggleEditing(e) {
      await f.toggleEditing(e, this.rpcClientId);
    }
    async copyAll() {
      let t = docxPanelBridge.getDocxBridge(this.rpcClientId);
      if (t == null ? undefined : t.utils?.copyAllDoc) {
        t.utils.copyAllDoc({
          eraseRevisionType: "accept",
          withRoot: true
        });
        return;
      }
      await f.copyAllDoc({
        withRoot: true,
        eraseRevisionType: "accept"
      }, this.rpcClientId);
    }
    constructor({
      rpcClientId: e
    }) {
      var t;
      var n;
      var i;
      super();
      n = undefined;
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
      }(t = "rpcClientId", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = n;
      }
      this.rpcClientId = e;
    }
  }
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  docxPanelBridge.docxBridgeManager.init();
  let E = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      style: a,
      docId: c,
      rpcClientId: d,
      version: u,
      forcePreview: h = false,
      onMount: p,
      onFallback: v,
      onStartMount: b,
      onTitleChange: E
    } = e;
    let w = reactCoreLibraryReexport.useRef(null);
    let x = reactCoreLibraryReexport.useRef();
    let C = reactCoreLibraryReexport.useRef(false);
    let [S, T] = reactCoreLibraryReexport.useState();
    let k = reactCoreLibraryReexport.useMemo(() => new y({
      iframeRef: w,
      rpcClientId: d
    }), []);
    let O = reactCoreLibraryReexport.useMemo(() => Date.now(), [c]);
    let [I, P] = reactCoreLibraryReexport.useState();
    let N = !isUndefinedCheck.isUndefined(u) || h;
    let {
      ref: j,
      inView: R
    } = reactIntersectionObserver_1.useInView({
      rootMargin: "0px 0px 0px 0px",
      threshold: 0,
      initialInView: true
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (E != null) {
        E({
          title: I,
          inView: R
        });
      }
    }, [I, R]);
    reactCoreLibraryReexport.useImperativeHandle(t, () => k, []);
    reactCoreLibraryReexport.useEffect(() => {
      let e;
      let t = lifecycleEventManager.lifecycleManager.subscribeEvents(d, {
        onEditorReady: async () => {
          try {
            await k.toggleEditing(false);
          } catch (e) {}
          e = collaborationEventSubscriber.collaborationEventSubscriber.subscribeEvents(d, {
            onDocumentStateChanged: () => {
              k.toggleEditing(false);
            }
          });
        }
      });
      return () => {
        t();
        if (e != null) {
          e();
        }
      };
    }, [d]);
    let Z = () => {
      if (p != null) {
        p();
      }
      M();
    };
    let D = () => {
      if (v != null) {
        v();
      }
      M();
    };
    let M = () => {
      C.current = true;
      if (!isUndefinedCheck.isUndefined(x.current)) {
        T(x.current);
      }
    };
    let A = e => {
      if (!isUndefinedCheck.isUndefined(e)) {
        x.current = e;
        if (C.current) {
          T(e);
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => f.subscribeEvents(d, {
      onMounted: Z,
      onFallback: D,
      onHeightChanged: e => {
        let {
          height: t
        } = e;
        return A(t);
      },
      onTitleChanged: e => {
        let {
          title: t
        } = e;
        return P(t);
      }
    }), [d]);
    reactCoreLibraryReexport.useEffect(() => {
      if (b != null) {
        b();
      }
    }, [N]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s("container-6LUQrj", n),
      style: a,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        ref: j,
        className: "title-detector-bc18pp"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "inner-w97ARt",
        style: {
          height: S
        },
        children: reactJsxRuntimeCoreReexport.jsx(inlineDocxPanel_1.InlineDocxPanel, {
          ref: w,
          docId: c,
          clientId: d,
          isInline: true,
          isPreview: N,
          isHistory: false,
          version: u,
          perfStartTime: O
        })
      })]
    });
  });
  require.d(exports, {
    InlineNextDocXPanel: function () {
      return E;
    }
  });
}