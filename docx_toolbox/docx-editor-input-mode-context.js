// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'rk' to 'InputModeStore'
// - Renamed export 'Zn' to 'InputModeProvider'
// - Renamed export 'dO' to 'InputModeConsumer'
// - Renamed export 'g2' to 'useEditorInputMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 318127
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var eventEmitterUmd = require("event-emitter-umd") /*id: 692502*/;
  var a = eventEmitterUmd;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var inputDeviceTypes = require("input-device-types") /*id: 865354*/;
  var aiPromptInputCheck = require("ai-prompt-input-check") /*id: 996458*/;
  var docxStateSelectors = require("docx-state-selectors") /*id: 977031*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var keyboardShortcutHandlerResolver = require("keyboard-shortcut-handler-resolver") /*id: 848104*/;
  var featureConstantsTypes = require("feature-constants-types") /*id: 882886*/;
  var editorRevisingStateUtils = require("editor-revising-state-utils") /*id: 83085*/;
  var keyboardKeyCodes = require("keyboard-key-codes") /*id: 73916*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function _(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  let E = "change";
  class C {
    getState() {
      return this.state;
    }
    setState(e) {
      if (!deepEqualUtil_1.deepEqual(e, this.state)) {
        this.state = e;
        this.emitter.emit(E, e);
      }
    }
    onStateChange(e) {
      this.emitter.on(E, e);
      return () => {
        this.emitter.off(E, e);
      };
    }
    constructor() {
      _(this, "state", {
        editMode: inputDeviceTypes.InputDeviceType.Mouse
      });
      _(this, "emitter", new a());
    }
  }
  let k = new C();
  let w = reactCoreLibraryReexport.createContext(k);
  let I = w.Consumer;
  let S = e => {
    let {
      children: n,
      boundary: r = document
    } = e;
    let o = reactCoreLibraryReexport.useMemo(() => new C(), []);
    let l = function (e) {
      let n = e => {
        let n = docxStateSelectors.selectDocsMode(reduxStoreInitializer.reduxStore.getState());
        let r = keyboardShortcutHandlerResolver.resolveShortcutHandler(e);
        let {
          EDITING: o,
          READING: i,
          REVISING: l
        } = featureConstantsTypes.EditorModes;
        let a = n === l && editorRevisingStateUtils.isEKeyPressed(e);
        let c = r === docEditorCommandConstants.switchToReadMode && n !== i;
        let u = r === docEditorCommandConstants.switchToEditMode && n !== o && !a;
        let s = r === docEditorCommandConstants.switchToRevisionMode && n !== l;
        return editorRevisingStateUtils.canShowRevising() && (c || u || s);
      };
      let r = e => e.keyCode === keyboardKeyCodes.keyCodeMap.TAB;
      let [o, l] = reactCoreLibraryReexport.useState(inputDeviceTypes.InputDeviceType.Mouse);
      let a = reactCoreLibraryReexport.useRef(false);
      reactCoreLibraryReexport.useEffect(() => {
        let o = () => {
          if (!a.current) {
            l(inputDeviceTypes.InputDeviceType.Mouse);
          }
        };
        let i = e => {
          if (!document.activeElement || !aiPromptInputCheck.isInPromptInput(document.activeElement)) {
            if ((e.metaKey || e.ctrlKey) && e.keyCode === keyboardKeyCodes.keyCodeMap.V && !n(e)) {
              a.current = true;
              l(inputDeviceTypes.InputDeviceType.Keyboard);
              setTimeout(() => {
                a.current = false;
              }, 300);
            }
            if ([keyboardKeyCodes.keyCodeMap.UP, keyboardKeyCodes.keyCodeMap.DOWN, keyboardKeyCodes.keyCodeMap.LEFT, keyboardKeyCodes.keyCodeMap.RIGHT].includes(e.keyCode)) {
              l(inputDeviceTypes.InputDeviceType.Keyboard);
            }
            if ((e.metaKey || e.ctrlKey) && e.keyCode === keyboardKeyCodes.keyCodeMap.A) {
              l(inputDeviceTypes.InputDeviceType.Keyboard);
            }
            if (!e.metaKey && !e.altKey && !e.ctrlKey && e.keyCode !== keyboardKeyCodes.keyCodeMap.SHIFT && !n(e) && !r(e)) {
              l(inputDeviceTypes.InputDeviceType.Keyboard);
            }
          }
        };
        let d = e => {
          if (e) {
            a.current = true;
            l(inputDeviceTypes.InputDeviceType.Keyboard);
          } else {
            setTimeout(() => {
              a.current = false;
            }, 300);
          }
        };
        docxEditorEventConstantsAndManager.globalEventBus.on(docxEditorEventConstantsAndManager.eventConstants.COMMON.DRAG_STATUS_CHANGE, d);
        e.addEventListener("mousemove", o);
        e.addEventListener("keydown", i, true);
        return () => {
          e.removeEventListener("mousemove", o);
          e.removeEventListener("keydown", i, true);
          docxEditorEventConstantsAndManager.globalEventBus.off(docxEditorEventConstantsAndManager.eventConstants.COMMON.DRAG_STATUS_CHANGE, d);
        };
      }, [e]);
      return o;
    }(r);
    (function (e) {
      let n = reactCoreLibraryReexport.useCallback(function (e = false) {
        return n => {
          docxEditorEventConstantsAndManager.globalEditorState.pointerUp = false;
          docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.GLOBAL_POINTER_DOWN_EVENT, n, e);
        };
      }, []);
      let r = reactCoreLibraryReexport.useCallback(function (e = false) {
        return n => {
          docxEditorEventConstantsAndManager.globalEditorState.pointerUp = true;
          docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.GLOBAL_POINTER_UP_EVENT, n, e);
        };
      }, []);
      let o = reactCoreLibraryReexport.useCallback(e => {
        let {
          target: n
        } = e;
        if (n instanceof Text) {
          e.preventDefault();
        }
      }, []);
      let l = reactCoreLibraryReexport.useCallback(e => {
        docxEditorEventConstantsAndManager.globalEditorState.pointerUp = true;
        docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.GLOBAL_POINTER_UP_EVENT, new PointerEvent("pointerup", e), true);
      }, []);
      reactCoreLibraryReexport.useEffect(() => {
        let r = n();
        let o = n(true);
        e.addEventListener("pointerdown", r);
        e.addEventListener("pointerdown", o, true);
        return () => {
          e.removeEventListener("pointerdown", r);
          e.removeEventListener("pointerdown", o, true);
        };
      }, [e, n]);
      reactCoreLibraryReexport.useEffect(() => {
        let n = r();
        let o = r(true);
        e.addEventListener("pointerup", n);
        e.addEventListener("pointerup", o, true);
        return () => {
          e.removeEventListener("pointerup", n);
          e.removeEventListener("pointerup", o, true);
        };
      }, [e, r]);
      reactCoreLibraryReexport.useEffect(() => {
        e.addEventListener("dragstart", o);
        return () => {
          e.removeEventListener("dragstart", o);
        };
      }, [e, o]);
      reactCoreLibraryReexport.useEffect(() => {
        if (browserEnvironmentDetectionUtils.isAndroidOrMiuiBrowser()) {
          e.addEventListener("touchcancel", l);
        }
        return () => {
          if (browserEnvironmentDetectionUtils.isAndroidOrMiuiBrowser()) {
            e.removeEventListener("touchcancel", l);
          }
        };
      }, [e, l]);
    })(r);
    reactCoreLibraryReexport.useEffect(() => {
      docxEditorEventConstantsAndManager.globalEditorState.editMode = l;
      o.setState({
        editMode: l
      });
    }, [o, l]);
    return reactJsxRuntimeCoreReexport.jsx(w.Provider, {
      value: o,
      children: n
    });
  };
  let T = e => {
    let n = reactCoreLibraryReexport.useMemo(() => e.getService(C, {
      optional: true
    }) || k, [e]);
    let [r, o] = reactCoreLibraryReexport.useState(n.getState());
    reactCoreLibraryReexport.useEffect(() => n.onStateChange(o), [n]);
    return r;
  };
  require.d(exports, {
    InputModeStore: function () {
      return C;
    },
    InputModeProvider: function () {
      return S;
    },
    InputModeConsumer: function () {
      return I;
    },
    useEditorInputMode: function () {
      return T;
    }
  });
}