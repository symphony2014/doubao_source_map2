// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'o' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'asyncSkillReceiveMessageBox_1_1'
// - Resolved require(794651) to 'async-skill-receive-message-box_1_1'
// - Renamed variable 'l' to 'skillPinModalCallback'
// - Resolved require(381053) to 'skill-pin-modal-callback'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'd' to 'writeConfigManager'
// - Resolved require(336456) to 'write-config-manager'
// - Renamed variable 'h' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 'p' to 'reactReduxExports'
// - Resolved require(426907) to 'react-redux-exports'
// - Renamed variable 'm' to 'flowPermissionHooks'
// - Resolved require(930373) to 'flow-permission-hooks'
// - Renamed variable 'f' to 'flowDocxEditorControllerModule'
// - Resolved require(544579) to 'flow-docx-editor-controller-module'
// - Renamed variable 'g' to 'canvasEventProvider'
// - Resolved require(41235) to 'canvas-event-provider'
// - Renamed variable 'v' to 'docLauncherController'
// - Resolved require(227005) to 'doc-launcher-controller'
// - Renamed variable 'b' to 'chatUserInfoStatus'
// - Resolved require(607389) to 'chat-user-info-status'
// - Renamed variable 'A' to 'blockHeaderViewHook'
// - Resolved require(558499) to 'block-header-view-hook'
// - Renamed variable 'y' to 'otterDocDiContainerInitializer'
// - Resolved require(669008) to 'otter-doc-di-container-initializer'
// - Renamed variable 'w' to 'canvasBehaviorTrackerHook'
// - Resolved require(57087) to 'canvas-behavior-tracker-hook'
// - Updated imported property 'N' to 'useMessageBoxUpdate' (module 794651)
// - Updated imported property 'i' to 'useSkillPinCallback' (module 381053)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'zt' to 'Provider' (module 426907)
// - Updated imported property 'vN' to 'FlowDocXEditorController' (module 544579)
// - Updated imported property 'v9' to 'FlowDocXPreviewComponent' (module 544579)
// - Updated imported property 'Tu' to 'FlowDocXEditorProvider' (module 544579)
// - Updated imported property 'l' to 'initializeOtterDocContainer' (module 669008)
// - Updated imported property 'p' to 'WriteConfigManager' (module 336456)
// - Updated imported property 'w' to 'DocLauncher' (module 227005)
// - Updated imported property 'M' to 'useCanvasBehavior' (module 57087)
// - Updated imported property 'Y7' to 'ChatServiceContext' (module 18590)
// - Updated imported property 'Uv' to 'ChatServiceProvider' (module 18590)
// - Updated imported property 'M' to 'getUserInfoStatus' (module 607389)
// - Updated imported property 'm' to 'UserInfoStatus' (module 607389)
// - Updated imported property '$' to 'useBlockHeaderView' (module 558499)
// - Updated imported property 'h' to 'reduxStore' (module 930373)
// - Updated imported property 'v8' to 'CanvasEventProvider' (module 41235)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-docx-panel.109f029d.js
         * chunkId: 93946
         * moduleId: 447724
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var asyncSkillReceiveMessageBox_1_1 = require("async-skill-receive-message-box_1_1") /*id: 794651*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      style: o,
      selector: u,
      timeout: d,
      children: h,
      onMount: p,
      onTimeout: m
    } = e;
    let [f, g] = asyncSkillReceiveMessageBox_1_1.useMessageBoxUpdate();
    let v = reactCoreLibraryReexport.useRef(null);
    let b = skillPinModalCallback.useSkillPinCallback(p);
    let A = skillPinModalCallback.useSkillPinCallback(m);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      reset: g
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      let e;
      let t = v.current;
      if (!t || !b) {
        return;
      }
      let n = new MutationObserver(() => {
        let e = t.querySelector(u);
        if (e) {
          if (b != null) {
            b(e);
          }
          n.disconnect();
        }
      });
      if (!isUndefinedCheck.isUndefined(d)) {
        e = window.setTimeout(() => {
          n.disconnect();
          if (A != null) {
            A();
          }
          e = undefined;
        }, d);
      }
      n.observe(t, {
        attributes: false,
        childList: true,
        subtree: true
      });
      return () => {
        n.disconnect();
        if (!isUndefinedCheck.isUndefined(e)) {
          clearTimeout(e);
        }
      };
    }, [d, f, b]);
    if (typeof h == "function") {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: h(v)
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        ref: v,
        className: a("container-UILvmT", n),
        style: o,
        children: h
      });
    }
  });
  var writeConfigManager = require("write-config-manager") /*id: 336456*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var reactReduxExports = require("react-redux-exports") /*id: 426907*/;
  var flowPermissionHooks = require("flow-permission-hooks") /*id: 930373*/;
  var flowDocxEditorControllerModule = require("flow-docx-editor-controller-module") /*id: 544579*/;
  var canvasEventProvider = require("canvas-event-provider") /*id: 41235*/;
  var docLauncherController = require("doc-launcher-controller") /*id: 227005*/;
  var chatUserInfoStatus = require("chat-user-info-status") /*id: 607389*/;
  var blockHeaderViewHook = require("block-header-view-hook") /*id: 558499*/;
  var otterDocDiContainerInitializer = require("otter-doc-di-container-initializer") /*id: 669008*/;
  var canvasBehaviorTrackerHook = require("canvas-behavior-tracker-hook") /*id: 57087*/;
  let x = "page-block-header";
  let E = `.${x}, [data-sel=error-overlay-desc]`;
  let C = reactReduxExports.Provider;
  let k = reactCoreLibraryReexport.memo(function (e) {
    let {
      docId: t,
      version: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(flowDocxEditorControllerModule.FlowDocXEditorController, {
      docId: t,
      docVersion: isUndefinedCheck.isUndefined(n) ? undefined : String(n),
      enableVirtualRender: false,
      enableDocInline: true
    });
  });
  let S = reactCoreLibraryReexport.memo(function (e) {
    let {
      docId: t,
      BlockWrapper: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(flowDocxEditorControllerModule.FlowDocXPreviewComponent, {
      docId: t,
      readonly: true,
      enableComment: false,
      enableVirtualRender: false,
      BlockWrapper: n,
      enableDocInline: true
    });
  });
  otterDocDiContainerInitializer.initializeOtterDocContainer();
  let T = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      style: o,
      docId: s,
      version: l,
      forcePreview: p = false,
      onMount: m,
      onFallback: g,
      onStartMount: y,
      onTitleChange: C
    } = e;
    let T = reactCoreLibraryReexport.useRef(null);
    let I = writeConfigManager.WriteConfigManager.useDirectAcceptRevisionDefault();
    let [$, R] = reactCoreLibraryReexport.useState(null);
    let [N, _] = reactCoreLibraryReexport.useState();
    let M = reactCoreLibraryReexport.useRef(true);
    let P = reactCoreLibraryReexport.useMemo(() => new docLauncherController.DocLauncher({
      docId: s
    }), [s]);
    let Z = reactCoreLibraryReexport.useRef(P);
    reactCoreLibraryReexport.useEffect(() => {
      Z.current = P;
    }, [P]);
    canvasBehaviorTrackerHook.useCanvasBehavior({
      docRef: Z
    });
    let j = reactCoreLibraryReexport.useContext(chatServiceContext.ChatServiceContext);
    let D = reactCoreLibraryReexport.useMemo(() => e => {
      let {
        children: t
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(flowDocxEditorControllerModule.FlowDocXEditorProvider, {
        value: {
          flowDocXEditorController: P
        },
        children: reactJsxRuntimeCoreReexport.jsx(chatServiceContext.ChatServiceProvider, {
          value: j,
          children: t
        })
      });
    }, []);
    let O = chatUserInfoStatus.getUserInfoStatus();
    reactCoreLibraryReexport.useImperativeHandle(t, () => P, [P]);
    let W = !isUndefinedCheck.isUndefined(l) || p;
    let {
      inViewBlockHeader: L,
      docxTitle: F
    } = blockHeaderViewHook.useBlockHeaderView($, {
      rootMargin: "-140px 0px 0px 0px"
    });
    let z = W ? N : F;
    reactCoreLibraryReexport.useEffect(() => {
      if (C != null) {
        C({
          title: z,
          inView: L
        });
      }
    }, [L, z]);
    reactCoreLibraryReexport.useEffect(() => {
      P.eventEmitter.on("init", R);
      return () => {
        P.eventEmitter.off("init", R);
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if (y != null) {
        y();
      }
      if (M.current) {
        M.current = false;
        return;
      }
      if ((e = T.current) !== null && e !== undefined) {
        e.reset();
      }
    }, [W]);
    let B = () => W ? reactJsxRuntimeCoreReexport.jsx(k, {
      docId: s,
      version: l
    }) : reactJsxRuntimeCoreReexport.jsx(S, {
      docId: s,
      BlockWrapper: D
    });
    if (O !== chatUserInfoStatus.UserInfoStatus.Finished) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(flowDocxEditorControllerModule.FlowDocXEditorProvider, {
        value: {
          flowDocXEditorController: P
        },
        children: reactJsxRuntimeCoreReexport.jsx(u, {
          ref: T,
          selector: E,
          timeout: 30000,
          onMount: e => {
            if (e.classList.contains(x)) {
              if (m != null) {
                m();
              }
              _(e.innerText.trim());
            } else if (g != null) {
              g();
            }
          },
          onTimeout: () => {},
          children: e => reactJsxRuntimeCoreReexport.jsx("div", {
            ref: e,
            className: a("container-jpvK3Z", n, {
              "flow-revision-animation-enabled": I
            }),
            style: o,
            children: B()
          })
        })
      });
    }
  });
  let I = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      docId: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(C, {
      store: flowPermissionHooks.reduxStore,
      children: reactJsxRuntimeCoreReexport.jsx(canvasEventProvider.CanvasEventProvider, {
        docId: n,
        extraParams: {
          canvas_type: null,
          click_from: "canvas_outside_doc_card"
        },
        children: reactJsxRuntimeCoreReexport.jsx(T, {
          ref: t,
          ...e
        })
      })
    });
  });
  require.d(exports, {
    InlineDocXPanel: function () {
      return I;
    }
  });
}