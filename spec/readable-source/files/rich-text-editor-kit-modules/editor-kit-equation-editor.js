// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'EquationEditor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 843399
         */
module.exports = function (module, exports, require) {
  var i;
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var editorUndoModule = require("editor-undo-module") /*id: 933023*/;
  var editorReturnKeyHandler = require("editor-return-key-handler") /*id: 336730*/;
  var textNodeDeserializer = require("text-node-deserializer") /*id: 232530*/;
  var blockElementDeserializer = require("block-element-deserializer") /*id: 120234*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var keyboardEventUtils = require("keyboard-event-utils") /*id: 623958*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var normalizeLineEndings = require("normalize-line-endings") /*id: 565335*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var g = [{
    key: editorUndoModule.undoCommand,
    shortcut: {
      windows: {
        ctrlKey: true,
        keyCode: 90
      },
      mac: {
        metaKey: true,
        keyCode: 90
      }
    }
  }, {
    key: editorUndoModule.redoCommand,
    shortcut: [{
      windows: {
        ctrlKey: true,
        keyCode: 90,
        shiftKey: true
      },
      mac: {
        metaKey: true,
        keyCode: 90,
        shiftKey: true
      }
    }, {
      windows: {
        ctrlKey: true,
        keyCode: 89
      }
    }]
  }];
  var contentStateManager = require("content-state-manager") /*id: 519638*/;
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var editorZoneState = require("editor-zone-state") /*id: 962363*/;
  var editorRootComponent = require("editor-root-component") /*id: 614300*/;
  var plainTextHandlerRenderer = require("plain-text-handler-renderer") /*id: 685325*/;
  var keyboardShortcutsRenderer = require("keyboard-shortcuts-renderer") /*id: 307048*/;
  (i = {})[editorModuleConstants.editorModuleConsts.ContentState] = contentStateManager.ContentStateManager;
  i[editorModuleConstants.editorModuleConsts.Range] = activeEditorRange.ActiveEditorRange;
  i[editorModuleConstants.editorModuleConsts.ZoneState] = editorZoneState.EditorZoneState;
  i[editorModuleConstants.editorModuleConsts.UndoModule] = editorUndoModule.UndoModule;
  i[editorModuleConstants.editorModuleConsts.InputModel] = editorReturnKeyHandler.ReturnKeyHandler;
  var R = i;
  function w(e) {
    var t = e.placeholder;
    var n = e.equation;
    var i = e.className;
    var r = e.style;
    var a = e.scrollerClassName;
    var l = e.scrollerStyle;
    var m = e.scrollerOptions;
    var y = e.proxyClipboard;
    var b = e.fgMap;
    var w = e.onEquationChange;
    var z = e.registerPlugins;
    var I = e.onInit;
    var M = e.onExit;
    var k = e.onFocus;
    var T = reactCoreLibraryReexport.useRef(null);
    var x = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(false), 2);
    var L = x[0];
    var D = x[1];
    var A = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(null), 2);
    var _ = A[0];
    var N = A[1];
    var P = reactCoreLibraryReexport.useCallback(function (e) {
      return typescriptHelpers_1.spreadArray([[plainTextHandlerRenderer.PlainTextHandler], [textNodeDeserializer.TextNodeDeserializer], [blockElementDeserializer.BlockDeserializer], [keyboardShortcutsRenderer.KeyboardShortcutsRenderer, {
        editor: e,
        shortcutsMap: g
      }]], (z == null ? undefined : z(e)) || []);
    }, [z]);
    var O = reactCoreLibraryReexport.useCallback(function (e) {
      var t = e.target;
      if (t && T.current) {
        if (T.current.contains(t)) {
          if (_ != null) {
            _.focus();
          }
          D(true);
        } else {
          if (_ != null) {
            _.blur();
          }
          D(false);
        }
      }
    }, [_]);
    var H = reactCoreLibraryReexport.useCallback(function (e) {
      var t = _ == null ? undefined : _.getText();
      if (t && t !== n && e.options.type !== "highlight") {
        w(t);
      }
    }, [_, n, w]);
    var W = reactCoreLibraryReexport.useRef(null);
    var Z = reactCoreLibraryReexport.useCallback(function (e) {
      if (W.current) {
        clearTimeout(W.current);
        W.current = null;
      }
      W.current = setTimeout(function () {
        H(e);
      }, 300);
    }, [H]);
    var V = reactCoreLibraryReexport.useCallback(function (e) {
      var t = _ == null ? undefined : _.getContentState();
      var n = _ == null ? undefined : _.selection.getSelection();
      if (!(n == null ? undefined : n.isCollapsed())) {
        return false;
      }
      var i = n.toPosition();
      var o = t == null ? undefined : t.getActiveZone().totalWidth();
      if (e.keyCode === keyboardEventUtils.KeyCode.Left && i.start === 0) {
        if (M != null) {
          M(false);
        }
        return true;
      } else {
        return e.keyCode === keyboardEventUtils.KeyCode.Right && !!o && i.start === o - 1 && (M == null || M(true), true);
      }
    }, [_, M]);
    var B = reactCoreLibraryReexport.useCallback(function (e) {
      var t = e.keyCode;
      var n = false;
      switch (t) {
        case keyboardEventUtils.KeyCode.Left:
        case keyboardEventUtils.KeyCode.Right:
        case keyboardEventUtils.KeyCode.Up:
        case keyboardEventUtils.KeyCode.Down:
          n = V(e);
          break;
        case keyboardEventUtils.KeyCode.Esc:
          if (M != null) {
            M(true);
          }
      }
      if (n) {
        e.stopEvent();
        e.stopPropagation();
        e.preventDefault();
        e.preventEvent();
      }
    }, [V, M]);
    var F = reactCoreLibraryReexport.useCallback(function () {
      if (k != null) {
        k();
      }
    }, [k]);
    reactCoreLibraryReexport.useEffect(function () {
      document.addEventListener("click", O);
      if (_ != null) {
        _.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, Z);
      }
      if (_ != null) {
        _.on(editorEventConstants.editorEventTypes.KEYDOWN, B);
      }
      if (_ != null) {
        _.on(editorEventConstants.editorEventTypes.FOCUS, F);
      }
      return function () {
        document.removeEventListener("click", O);
        if (_ != null) {
          _.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, Z);
        }
        if (_ != null) {
          _.off(editorEventConstants.editorEventTypes.KEYDOWN, B);
        }
        if (_ != null) {
          _.off(editorEventConstants.editorEventTypes.FOCUS, F);
        }
      };
    }, [_, O, Z, B, F]);
    var K = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(function () {
      if (_ && n) {
        var e = _ == null ? undefined : _.getText();
        var t = n;
        if (!n.endsWith("\n")) {
          t += "\n";
        }
        if (t !== e) {
          var i = new contentStructureDelta.ContentDelta({
            zoneId: zeroConstantModule_1.versionValue
          }).insert(normalizeLineEndings.normalizeNewlines(t));
          _.setContent(i, {
            nonundoable: true
          });
        }
        if (!K.current) {
          K.current = true;
          if (I != null) {
            I(_);
          }
        }
      }
    }, [_, n, I]);
    return reactCoreLibraryReexport.createElement("div", {
      ref: T,
      className: "editor-kit-equation-editor " + (i === undefined ? "" : i) + (L ? " editor-kit-equation-editor-selected" : ""),
      style: r === undefined ? {} : r
    }, reactCoreLibraryReexport.createElement(editorRootComponent.EditorComponent, {
      className: "editor-kit-equation-editor-content " + (a === undefined ? "" : a),
      style: l === undefined ? {} : l,
      businessKey: "editor-kit-equation-editor",
      scroller: T.current || false,
      scrollerOptions: m === undefined ? {} : m,
      editable: true,
      copyable: true,
      placeholder: t,
      proxyClipboard: y,
      register: P,
      modules: R,
      onInit: function (e) {
        N(e);
      },
      fgMap: b
    }));
  }
  require.d(exports, {
    EquationEditor: function () {
      return w;
    }
  });
}