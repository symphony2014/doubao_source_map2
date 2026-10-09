// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'Editor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13032.fea06b08.js
         * chunkId: 13032
         * moduleId: 137381
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var errorHandlerUtil = require("error-handler-util") /*id: 161088*/;
  var randomStringGenerator = require("random-string-generator") /*id: 62944*/;
  var debounceUtil = require("debounce-util") /*id: 783084*/;
  var debounceMaxWaitUtil = require("debounce-max-wait-util") /*id: 869149*/;
  var deepEqualityCheck_1 = require("deep-equality-check_1") /*id: 956585*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var normalizeLineEndings = require("normalize-line-endings") /*id: 565335*/;
  var autoBindMethodDescriptor = require("auto-bind-method-descriptor") /*id: 969612*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var browserDetectUtils = require("browser-detect-utils") /*id: 749406*/;
  var eventEmitterClass_2 = require("event-emitter-class_2") /*id: 114194*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var keyboardMessageEvent = require("keyboard-message-event") /*id: 471750*/;
  var keyboardSyntheticEventClass_1 = require("keyboard-synthetic-event-class_1") /*id: 886246*/;
  var keyboardFocusEvent = require("keyboard-focus-event") /*id: 151463*/;
  var keyboardMouseSyntheticEvent = require("keyboard-mouse-synthetic-event") /*id: 619284*/;
  var keyboardInputUtils = require("keyboard-input-utils") /*id: 633011*/;
  var reactSyntheticEventProps = require("react-synthetic-event-props") /*id: 191267*/;
  var M = function (e) {
    function t(t, n) {
      var i = e.call(this, t, n) || this;
      i.inputType = "";
      keyboardInputUtils.mapProperties(i, reactSyntheticEventProps.inputEventProps, t, n);
      return i;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    return t;
  }(require("keyboard-synthetic-event") /*id: 794654*/.KeyboardInputEvent);
  var I = function (e) {
    function t(t, n) {
      var i = e.call(this, t, n) || this;
      i.dataTransfer = null;
      i.evtTargetSelection = null;
      keyboardInputUtils.mapProperties(i, reactSyntheticEventProps.dragEventProps, t, n);
      return i;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    return t;
  }(keyboardMouseSyntheticEvent.KeyboardMouseEvent);
  var w = "selectionchange";
  var L = new (function () {
    function e() {
      var e = this;
      this.Q = new Map();
      this.X = new Map();
      this.dispatchNativeEvent = function (t) {
        var n = t.type;
        var i = null;
        if (t.type === w) {
          var o = window.getSelection();
          if (!o || !o.rangeCount) {
            return;
          }
          i = ((o = o.getRangeAt(0).startContainer.parentElement) === null || o === undefined ? undefined : o.closest("[contenteditable]")) || null;
        }
        var r = e.Z(n, i || t.target);
        var s = 0;
        var l = r.length;
        for (; s < l; s++) {
          var a = r[s];
          var u = a.dom;
          var a = a.handle;
          if (e.$(t, u, i)) {
            a(t);
          }
        }
      };
      this.on = function (t, n, i, o) {
        var r = o === undefined ? {} : o;
        var o = r.priority;
        var s = o === undefined ? 0 : o;
        var r = r.customizedDelegateDom;
        e.tt(t, n, r || null);
        var l = {
          dom: n,
          handle: i,
          priority: s
        };
        var a = e.Q.get(n);
        if (!a) {
          e.Q.set(n, a = {});
        }
        a[t] ||= [];
        for (var u = 0; u < a[t].length; u++) {
          if (a[t][u].priority > s) {
            a[t].splice(u, 0, l);
            return;
          }
        }
        a[t].push(l);
      };
      this.off = function (t, n, i) {
        var o = e.Q.get(n);
        if (o && o[t]) {
          for (var r = o[t].length - 1; r >= 0; r--) {
            if (o[t][r].handle === i) {
              o[t].splice(r, 1);
            }
          }
          if (!o[t].length) {
            delete o[t];
          }
          if (!Object.keys(o).length) {
            e.Q.delete(n);
            e.et(n);
          }
          if (!e.Q.size) {
            e.rt();
          }
        }
      };
    }
    var t = e.prototype;
    t.tt = function (e, t, n) {
      switch (e) {
        case "resize":
          i = n || window;
          break;
        case "focus":
        case "blur":
          i = n || t instanceof HTMLElement && t.closest("[contenteditable]") || document;
          break;
        default:
          i = n || document;
      }
      var i;
      var o = this.X.get(i);
      if (!o) {
        o = new Map();
        this.X.set(i, o);
      }
      if (!o.has(e)) {
        i.addEventListener(e, this.dispatchNativeEvent);
        o.set(e, true);
      }
    };
    t.Z = function (e, t) {
      var n = [];
      for (; t;) {
        var o = this.Q.get(t);
        if (o && o[e]) {
          n.push.apply(n, typescriptRuntimeHelpers_1.spread(o[e]));
        }
        t = t.parentNode;
      }
      return n.sort(function (e, t) {
        return e.priority - t.priority;
      });
    };
    t.$ = function (e, t, n) {
      if (e.defaultPrevented) {
        return false;
      }
      if (e.type === w) {
        if (t instanceof HTMLElement) {
          if (t.hasAttribute("contenteditable")) {
            return t.contains(n);
          } else {
            return !!(n = window.getSelection()) && !!n.rangeCount && t.contains(n.getRangeAt(0).startContainer);
          }
        }
        if (t instanceof Document) {
          return t === e.target;
        }
      }
      return !!e.target && !!e.target.contains && (t === e.target || t.contains(e.target));
    };
    t.rt = function () {
      var e;
      var t;
      try {
        var n = typescriptRuntimeHelpers_1.values(this.X.keys());
        var o = n.next();
        for (; !o.done; o = n.next()) {
          var r = o.value;
          this.et(r);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (t = n.return)) {
            t.call(n);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    t.et = function (e) {
      var t;
      var n;
      var o = this.X.get(e);
      if (o) {
        this.X.delete(e);
        o = typescriptRuntimeHelpers_1.spread(o.keys());
        try {
          var r = typescriptRuntimeHelpers_1.values(o);
          var s = r.next();
          for (; !s.done; s = r.next()) {
            var l = s.value;
            e.removeEventListener(l, this.dispatchNativeEvent);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (s && !s.done && (n = r.return)) {
              n.call(r);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
      }
    };
    return e;
  }())();
  require("editor-kit-dom-patch") /*id: 218425*/;
  var R = function () {
    function e() {
      this.i = [];
      this.n = false;
    }
    var t = e.prototype;
    t.add = function (e) {
      if (this.n) {
        this.i.push(e);
      }
    };
    t.start = function () {
      this.reset();
      this.n = true;
    };
    t.reset = function () {
      this.n = false;
      this.i = [];
    };
    t.export = function () {
      try {
        return JSON.stringify(this.i);
      } catch (e) {
        return "";
      }
    };
    return e;
  }();
  var editorClipboardManager = require("editor-clipboard-manager") /*id: 797119*/;
  var contentDeltaOpsUtil = require("content-delta-ops-util") /*id: 444706*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var editorModuleZoneManager = require("editor-module-zone-manager") /*id: 586388*/;
  var editorPositionClass = require("editor-position-class") /*id: 77106*/;
  var domEnvManager = require("dom-env-manager") /*id: 219737*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var domElementPositionUtils = require("dom-element-position-utils") /*id: 685116*/;
  var D = function () {
    function e() {
      this.Xn = new WeakMap();
      this.th = new WeakMap();
      this.nh = new WeakMap();
    }
    var t = e.prototype;
    t._setNode = function (e, t) {
      document.contains(t);
      e._node = t;
      this._deleteNode(e);
      this._deleteNode(t);
      this.Xn.set(e, t);
      this.th.set(t, e);
    };
    t._resetNode = function (e) {
      e._node = null;
    };
    t._deleteNode = function (e) {
      var t;
      if (e instanceof HTMLElement) {
        if (t = this.th.get(e)) {
          this.Xn.delete(t);
        }
        this.th.delete(e);
      } else {
        if (t = this.Xn.get(e)) {
          this.th.delete(t);
        }
        this.Xn.delete(e);
      }
    };
    t.getModel = function (e) {
      return this.th.get(e);
    };
    t.getView = function (e) {
      return this.Xn.get(e);
    };
    t._setLeaf = function (e, t) {
      this.nh.set(e, t);
    };
    t._deleteLeaf = function (e) {
      this.nh.delete(e);
    };
    t.getLeafModel = function (e) {
      return this.nh.get(e);
    };
    t.destroy = function () {
      this.Xn = new WeakMap();
      this.th = new WeakMap();
      this.nh = new WeakMap();
    };
    return e;
  }();
  var eventHandlerConfig = require("event-handler-config") /*id: 867160*/;
  function W(e, t, n) {
    var i = e.parentElement;
    if (!t) {
      return i;
    }
    while (i && (!n || !i.matches(n))) {
      if (i.matches(t)) {
        return i;
      }
      i = i.parentElement;
    }
    return null;
  }
  var V = function () {
    function e(e) {
      this.e = 100;
      this.s = e;
    }
    var t = e.prototype;
    t.isZoneContainer = function (e) {
      var t = false;
      this.s.getContentState().getContent().forEach(function (n) {
        if (n._node === e) {
          t = true;
        }
      });
      return t;
    };
    t.getZoneFromNode = function (e) {
      var t = null;
      this.s.getContentState().getContent().forEach(function (n) {
        var i;
        if ((i = n._node) !== null && i !== undefined && i.contains(e)) {
          t = n.getZoneId();
        }
      });
      return t;
    };
    t.getLineStateFromNode = function (e) {
      return (e = W(e, ".ace-line", ".editor-kit-container")) != null && e.classList.contains(".ace-line") && (e = this.s._getViewModel().getModel(e)) || null;
    };
    t.getLineStateInParentZone = function (e) {
      var t = this.getLineStateFromNode(e);
      if ((e = t == null ? undefined : t.parent) !== null && e !== undefined && e.parent) {
        return t.parent.parent;
      } else {
        return null;
      }
    };
    t.getLineStateInRootZone = function (e) {
      var t = 0;
      var n = this.getLineStateInParentZone(e);
      while (t < this.e && n && n.getZoneId() !== zeroConstantModule_1.versionValue) {
        t++;
        n = this.getLineStateInParentZone(e);
      }
      return n;
    };
    t.isNodeInEditor = function (e, t) {
      return e === t || ((e = e == null ? undefined : e.parentElement) === null || e === undefined ? undefined : e.closest("." + editorConstantsKeycodes.editorKitContainer)) === t;
    };
    t.isNodeInOuterControlledZone = function (e) {
      return (e = e == null ? undefined : e.closest("." + editorConstantsKeycodes.editorKitContainer)) !== null && e !== undefined && !!e.classList.contains("" + editorConstantsKeycodes.outerControlledZone);
    };
    t.isNodeInInnerZone = function (e) {
      var t = "." + editorConstantsKeycodes.zoneContainer + ":not(." + editorConstantsKeycodes.editorKitContainer + ")";
      return e != null && !!e.closest(t);
    };
    return e;
  }();
  var layoutBoundsUtils = require("layout-bounds-utils") /*id: 863516*/;
  var F = function () {
    function e(e) {
      this.on = new Map();
      this.name = "rect";
      this.s = e;
    }
    var t = e.prototype;
    t.getCaretRect = function (e, t = zeroConstantModule_1.versionValue) {
      return this._n(e, t);
    };
    t.getLineRect = function (e, t = zeroConstantModule_1.versionValue) {
      return this._n(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), {
        offset: undefined
      }), t);
    };
    t.getZoneRect = function (e, t = zeroConstantModule_1.versionValue) {
      return this._n({
        zoneId: e
      }, t);
    };
    t.getRawCaretRect = function (e, t) {
      return this.jn(e, {
        ignoreNormalize: false,
        ignoreRectContainer: t == null ? undefined : t.ignoreRectContainer,
        ignoreMeasureDom: t == null ? undefined : t.ignoreMeasureDom
      });
    };
    t.getRangeRect = function (e, t = zeroConstantModule_1.versionValue) {
      t = this.s.getContentState().getZoneState(t);
      e = this.jn(e, {
        ignoreNormalize: false
      });
      if (t != null && t._node) {
        t = layoutBoundsUtils.cloneBounds(t._node.getBoundingClientRect());
        return typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), layoutBoundsUtils.calculateBoundsDiff(e, t));
      } else {
        this.s.error({
          message: "zoneState._node undefined, zoneId: " + (t == null ? undefined : t.getZoneId()),
          level: editorConstantsKeycodes.LogLevel.ERROR
        });
        return e;
      }
    };
    t.getRawRangeRect = function (e, t) {
      return this.jn(e, {
        ignoreNormalize: false,
        ignoreRectContainer: t == null ? undefined : t.ignoreRectContainer,
        ignoreMeasureDom: t == null ? undefined : t.ignoreMeasureDom
      });
    };
    t.jn = function (e, t) {
      var n = this;
      var i = this.s.modulesContainer.get(editorModuleConstants.editorModuleConsts.Range);
      var o = "zoneId" in e ? new i({
        editor: this.s,
        start: e,
        end: e
      }) : "toPosition" in e ? e : new i({
        editor: this.s,
        start: e.start,
        end: e.end
      });
      var i = this.s.getContentState().getZoneState(o.start.zoneId);
      if (i) {
        layoutBoundsUtils.normalizePosition(i, o.start);
        if (o.start !== o.end) {
          layoutBoundsUtils.normalizePosition(i, o.end);
        }
        e = function () {
          var e = n.s.selection._toDOMRange(o, {
            ignoreNormalize: t.ignoreNormalize
          });
          if (!e) {
            return layoutBoundsUtils.createEmptyBounds();
          }
          var i;
          var r = e.startContainer;
          var s = e.endContainer;
          var l = e.startOffset;
          var a = e.endOffset;
          var e = t.ignoreRectContainer ? null : n.mn(r, s);
          if ((i = e ? e.getBoundingClientRect() : (e = (i = browserDetectUtils.platformInfo.getIOSVersion()) === null || i === undefined ? undefined : i.major, browserDetectUtils.platformInfo.isIOS && e && e < 13 && (a = (l = Math.max(l - 1, 0)) + 1), i = document.createRange(), ((e = r.textContent) === null || e === undefined ? undefined : e.length) === l && o.start.offset !== o.end.offset ? i.setStartAfter(r) : i.setStart(r, l), i.setEnd(s, a), a = i.getClientRects(), i.collapsed && browserDetectUtils.platformInfo.safari && a.length > 1 ? a[1] : i.getBoundingClientRect())).bottom === 0 && i.height === 0 && i.left === 0 && i.right === 0 && i.top === 0 && i.width === 0 && i.x === 0 && i.y === 0) {
            if (r instanceof HTMLElement) {
              i = r.getBoundingClientRect();
            } else if (r.parentElement instanceof HTMLElement) {
              i = r.parentElement.getBoundingClientRect();
            }
          }
          return layoutBoundsUtils.cloneBounds(i);
        };
        if ((i = (i = this.s.virtualListManager) === null || i === undefined ? undefined : i.getVirtualListModuleOfZone(o.start.zoneId)) != null && i.isEnabled && !i.isLineNodesInRenderContent(o)) {
          return i.getRangeVirtualRect(o, e, t.ignoreMeasureDom) || layoutBoundsUtils.createEmptyBounds();
        } else {
          return e();
        }
      } else {
        return layoutBoundsUtils.createEmptyBounds();
      }
    };
    t.getRawLineRect = function (e) {
      var t = this.s.getContentState().getZoneState(e.zoneId);
      if (!t) {
        return layoutBoundsUtils.createEmptyBounds();
      }
      layoutBoundsUtils.normalizePosition(t, e);
      var n = (n = this.s.virtualListManager) === null || n === undefined ? undefined : n.getVirtualListModuleOfZone(e.zoneId);
      if (n != null && n.isEnabled && !n.isLineNodesInRenderContent(e.line)) {
        return n.getLineVirtualRect(e.line) || layoutBoundsUtils.createEmptyBounds();
      } else if (e = (e = (e = t.getLine(e.line)) === null || e === undefined ? undefined : e._node) === null || e === undefined ? undefined : e.getBoundingClientRect()) {
        return layoutBoundsUtils.cloneBounds(e);
      } else {
        return layoutBoundsUtils.createEmptyBounds();
      }
    };
    t.clearCache = function () {
      this.on.clear();
    };
    t.clearZoneRect = function (e) {
      var t = this;
      var n = [];
      this.on.forEach(function (t, i) {
        if (i.startsWith(e)) {
          n.push(i);
        }
      });
      n.forEach(function (e) {
        return t.on.delete(e);
      });
    };
    t._n = function (e, t = zeroConstantModule_1.versionValue) {
      var n = this.s.getContentState();
      var o = n.getZoneState(e.zoneId);
      if (!o) {
        return layoutBoundsUtils.createEmptyBounds();
      }
      layoutBoundsUtils.normalizePosition(o, e);
      var r = this.on.get(layoutBoundsUtils.createPositionKey(e, t));
      if (r) {
        return r;
      }
      var s = e.line === undefined;
      var l = e.line !== undefined && e.offset === undefined;
      var a = e.line !== undefined && e.offset !== undefined;
      var d = layoutBoundsUtils.createEmptyBounds();
      var r = layoutBoundsUtils.createEmptyBounds();
      var n = (n = n.getZoneState(t)) === null || n === undefined ? undefined : n._node;
      if (!n) {
        this.s.error({
          message: "relativeZoneNode undefined, relativeZone: " + t,
          level: editorConstantsKeycodes.LogLevel.ERROR
        });
        return d;
      }
      if (s) {
        if (!o._node) {
          this.s.error({
            message: "zoneState._node undefined, zoneId: " + e.zoneId,
            level: editorConstantsKeycodes.LogLevel.ERROR
          });
          return d;
        }
        d = layoutBoundsUtils.cloneBounds(o._node.getBoundingClientRect());
        r = layoutBoundsUtils.cloneBounds(n.getBoundingClientRect());
      } else if (l) {
        d = this.getRawLineRect(e);
        r = layoutBoundsUtils.cloneBounds(n.getBoundingClientRect());
      } else if (a) {
        d = this.getRawCaretRect(e);
        r = layoutBoundsUtils.cloneBounds(n.getBoundingClientRect());
      }
      if (s && e.zoneId === t) {
        return d;
      } else {
        r = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, d), layoutBoundsUtils.calculateBoundsDiff(d, r));
        this.on.set(layoutBoundsUtils.createPositionKey(e, t), r);
        return r;
      }
    };
    t.mn = function (e, t) {
      return e.parentElement && e.parentElement === t.parentElement && W(e, "[" + editorConstantsKeycodes.dataRectContainer + "]", ".editor-kit-container");
    };
    return e;
  }();
  var q = function () {
    function e() {
      this.undoable = false;
      this.redoable = false;
    }
    var t = e.prototype;
    t.setUndoDispatcher = function (e, t) {};
    t.getNthUndoRecordFromTop = function (e) {
      return null;
    };
    t.batchedUndo = function (e) {
      e();
    };
    t.undo = function () {};
    t.redo = function () {};
    t.mergeRecords = function (e) {
      var t = [];
      var n = 1;
      for (; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }
    };
    t.clear = function () {};
    t.destroy = function () {};
    return e;
  }();
  var X = errorHandlerUtil.createErrorWrapper(function (e) {
    this.error(e);
  })(errorHandlerUtil.ErrorLevel.ERROR);
  var U = ["input", "beforeinput", "keyup", "keydown", "keypress", "compositionstart", "compositionupdate", "compositionend"];
  var H = function () {
    function e(e) {
      var t = this;
      this.props = e;
      this.version = editorConstantsKeycodes.editorKit + "@4.145.0-alpha.10 - June 27, 2025 08:31:45";
      this.log = (n = this.props.onLog) !== null && n !== undefined ? n : console.log;
      this.copyable = (n = this.props.copyable) === null || n === undefined || n;
      this.isSSR = (n = this.props.isSSR) !== null && n !== undefined && n;
      this.businessKey = this.props.businessKey;
      this.mounted = false;
      this.editorUniqueId = randomStringGenerator.createRandomString(6);
      this.virtualListManager = null;
      this._hydrateMap = new Map();
      this._dir = this.props.dir;
      this._hackMacCompositionInput = this.props.hackMacCompositionInput;
      this._isRenderBrInEmptyLine = this.props.isRenderBrInEmptyLine;
      this._isFixToCommonZone = this.props.isFixToCommonZone;
      this.trace = new R();
      this.h = false;
      this.a = this.props.container;
      this.v = !!this.props.editable;
      this.d = {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0
      };
      this.f = (n = this.props.editable) === null || n === undefined || n;
      this.m = false;
      this.j = false;
      this.p = null;
      this.b = new WeakMap();
      this.togglePlaceHolder = debounceUtil.debounce(function (e, n) {
        var i;
        var o;
        var r;
        if (typeof e != "string") {
          if (t.props.placeholder) {
            i = t.getContainer();
            o = "";
            o = e !== false && (e === true || t.isEmpty()) ? t.props.placeholder : "";
            if ((r = i.getAttribute("data-placeholder")) !== o) {
              if (o) {
                i.setAttribute("data-placeholder", o);
              } else if (r) {
                i.removeAttribute("data-placeholder");
              }
            }
          }
        } else {
          t._toggleZonePlaceHolder(e, n);
        }
      }, 30);
      this.isFocus = function (e) {
        return !!document.hasFocus() && t.isSelectionInEditor(e);
      };
      this._handleContainerResize = debounceMaxWaitUtil.createDebounce(function () {
        t.rectModule.clearCache();
        var e = t.getRect();
        t.setRect();
        var n = t.getRect();
        if (!deepEqualityCheck_1.deepEqual(e, n)) {
          t.call("editorRectChange", {
            prev: e,
            next: n
          });
        }
      });
      this.g = new eventEmitterClass_2.EventEmitter();
      this.dom = new V(this);
      this.rectModule = new F(this);
      this.S = e.fgMap;
      this.modulesContainer = new editorModuleZoneManager.EditorModuleManager();
      this.modulesContainer.set(e.modules);
      var n = this.modulesContainer.get(editorModuleConstants.editorModuleConsts.UndoModule);
      if (n) {
        this.undoModule = new n(this);
        this.triggerEditorEvent(editorEventConstants.editorEventTypes.UNDO_DID_INIT);
      } else {
        this.undoModule = new q();
      }
      this.w = new D();
      this.clipboard = new editorClipboardManager.ClipboardManager(this, e.proxyClipboard);
      var n = this.modulesContainer.get(editorModuleConstants.editorModuleConsts.InputModel);
      this.C = e.debounceFlush;
      if (n) {
        this.inputModel = new n(this, {
          debounceFlush: e.debounceFlush
        });
      }
      this.q = e.contentState || this.M(this.props.initData, this.props.schema);
      this.D();
      if (this.a) {
        this.p = requestAnimationFrame(this.setRect);
      }
      this.k = {
        isPerforming: false,
        contentChanged: false,
        preventScrolling: false,
        dangerousInput: false,
        stopUpdateSelection: false,
        preventUpdateDomSelection: false,
        isComposing: false,
        isClick: false,
        isMouseUp: false,
        isMouseDown: false,
        isSelectionChange: false,
        isPainting: false
      };
      this.initPluginManager({
        registerPlugin: this.props.register,
        plugins: this.props.plugins
      });
      if ((e = (n = this.q).init) !== null && e !== undefined) {
        e.call(n);
      }
      this.I = (n = this.props.eventDelegator) !== null && n !== undefined ? n : L;
      if (this.props.reactDOMServerExternal) {
        domEnvManager.serverRenderer.renderToStaticMarkup = (n = this.props.reactDOMServerExternal) === null || n === undefined ? undefined : n.renderToStaticMarkup;
      }
    }
    var t = e.prototype;
    Object.defineProperty(t, "scrollModule", {
      get: function () {
        var e;
        var t;
        if ((t = (e = (t = this.getContentState()) === null || t === undefined ? undefined : t.getZoneManager) === null || e === undefined ? undefined : e.call(t)) === null || t === undefined) {
          return undefined;
        } else {
          return t.getScrollModuleByZoneId(zeroConstantModule_1.versionValue);
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "getViewPortPadding", {
      get: function () {
        return this.props.getViewPortPadding;
      },
      enumerable: false,
      configurable: true
    });
    t._registerModules = function (e) {
      var t = this.modulesContainer.set(e);
      if (t.includes(editorModuleConstants.editorModuleConsts.InputModel)) {
        e = this.modulesContainer.get(editorModuleConstants.editorModuleConsts.InputModel);
        this.inputModel = new e(this, {
          debounceFlush: this.C
        });
      }
      if (t.includes(editorModuleConstants.editorModuleConsts.UndoModule)) {
        t = this.modulesContainer.get(editorModuleConstants.editorModuleConsts.UndoModule);
        this.undoModule = new t(this);
        this.triggerEditorEvent(editorEventConstants.editorEventTypes.UNDO_DID_INIT);
      }
    };
    t.init = function (e) {
      e = e.element;
      if (!this.a && e) {
        this.p = requestAnimationFrame(this.setRect);
      }
      this.a = e;
      this.a.zoneId = {
        value: "0"
      };
      this.P();
      this.T(this.a);
      this.L();
      this.togglePlaceHolder();
    };
    t.M = function (e, t) {
      var n;
      var i = e instanceof contentStructureDelta.ContentDelta ? new deltaSetCore.DeltaSet().add(zeroConstantModule_1.versionValue, e) : e;
      if (!i.get(zeroConstantModule_1.versionValue)) {
        e = Error(n = "[Editor][constructor] invalid initDeltaSet: " + i + ", initDeltaSet must has zone \"0\"");
        this.error({
          e: e,
          message: n,
          level: errorHandlerUtil.ErrorLevel.FATAL
        });
      }
      return new (this.modulesContainer.get(editorModuleConstants.editorModuleConsts.ContentState))({
        deltaSet: i,
        schema: t,
        modulesContainer: this.modulesContainer
      });
    };
    t.D = function () {
      var e = this;
      var t = this.q;
      t._onWillApply(this._handleContentWillApply);
      t.onWillChange(this._handleContentWillChange);
      t.onChange(this._handleContentChange);
      t._onRefresh(function (t) {
        e.call("_forceRefresh", t);
      });
      t._onError(function (n) {
        e.error(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, n), {
          extra: (n = t._applyStackLog) === null || n === undefined ? undefined : n.join("\n")
        }));
      });
    };
    t.initPluginManager = function (e) {
      if (this.pluginManager) {
        this.pluginManager.destroy();
      }
      this.pluginManager = new editorPluginManager.PluginManager(this, e);
    };
    t.call = function (e, t) {
      var n;
      var o = this;
      if (e === "error" && !this.h) {
        this.h = true;
        n = (n = t == null ? undefined : t.e) === null || n === undefined ? undefined : n.stack;
        t = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, t), {
          errorStack: Error("editor oops").stack,
          originErrorStack: n
        });
      }
      this.g.getListeners(e).slice(0).forEach(function (n) {
        var r;
        var s = n.listener;
        var l = n.isOnce;
        if (s.plugin) {
          if (t != null && t.changes) {
            r = Object.assign(typescriptRuntimeHelpers_1.assign({}, t), {
              changes: {},
              deltaSet: new deltaSetCore.DeltaSet()
            });
            Object.keys(t == null ? undefined : t.changes).forEach(function (e) {
              r.changes[e] = t.changes[e];
              r.deltaSet.add(e, t.deltaSet.get(e));
            });
            s.call(s, r);
            if (l) {
              o.off(e, s);
            }
          } else {
            o.selection.getMultipleSelection().forEach(function (n) {
              n = n.start.zoneId;
              if (o.pluginManager.isPluginInZone(s.plugin, n)) {
                s.call(s, t);
                if (l) {
                  o.off(e, s);
                }
              }
            });
          }
        } else if (o.b.has(s)) {
          n = o.b.get(s);
          if (e === editorEventConstants.editorEventTypes.CONTENT_WILL_CHANGE) {
            if (t.deltaSet.get(n)) {
              s.call(s, t);
              if (l) {
                o.off(e, s);
              }
            }
          } else if (e === editorEventConstants.editorEventTypes.CONTENT_CHANGE) {
            if (n in t.changes) {
              s.call(s, t);
              if (l) {
                o.off(e, s);
              }
            }
          } else if (e === editorEventConstants.editorEventTypes.PAINT) {
            if (n === (t == null ? undefined : t.zoneId)) {
              s.call(s, t);
              if (l) {
                o.off(e, s);
              }
            }
          } else if (o.selection.isZoneInSelection(n)) {
            s.call(s, t);
            if (l) {
              o.off(e, s);
            }
          }
        } else {
          s.call(s, t);
          if (l) {
            o.g.removeEventListener(e, s);
          }
        }
      });
    };
    t.getRect = function (e) {
      if (!e) {
        return this.d;
      }
      var t = this.getContentState().getZoneState(e);
      return t && ((t = (e = this._getViewModel().getView(t)) !== null && e !== undefined ? e : t._node) == null ? undefined : t.getBoundingClientRect()) || this.d;
    };
    t.setRect = function () {
      if (this.a) {
        this.d = this.a.getBoundingClientRect();
      }
    };
    t.getRootContainer = function () {
      return this.a || null;
    };
    t.getContainer = function () {
      return this.a;
    };
    t.setMounted = function (e) {
      this.mounted = e;
    };
    t.getStatus = function (e) {
      return this.k[e];
    };
    t.getDelegator = function () {
      return this.I;
    };
    t.getFg = function (e) {
      return this.S?.[e];
    };
    t._getInlineAttributesOfPreviousPosition = function (e = true, t) {
      var n = this.q.getActiveZone();
      var i = n.getZoneId();
      var o = t ?? this.selection.getSelection(i);
      var r = contentDeltaOpsUtil.createOpArray();
      if (!o) {
        return r;
      }
      var s = n.getLine(o.start.line);
      if (s) {
        t = +!!s.hasLineMarker();
        n = o.start;
        r = o.start;
        if (e && t === o.start.offset && s.length() > t) {
          r = new editorPositionClass.EditorPosition({
            start: o.toPosition().start + 1,
            editor: this,
            len: 0,
            zoneId: i
          }).toRange().start;
        } else if (o.start.offset > t) {
          n = new editorPositionClass.EditorPosition({
            start: o.toPosition().start - 1,
            editor: this,
            len: 0,
            zoneId: i
          }).toRange().start;
        }
        return this.q.getAttributes(n, r);
      } else {
        return r;
      }
    };
    t._getInlineAttributesOfNextPosition = function (e) {
      var t = this.q.getActiveZone().getZoneId();
      var n = e ?? this.selection.getSelection(t);
      if (!n || !(e = (i = this.q.getZoneState(t)) === null || i === undefined ? undefined : i.getLine(n.start.line))) {
        return contentDeltaOpsUtil.createOpArray();
      }
      var i = n.start;
      if (n.start.offset < e.length()) {
        i = new editorPositionClass.EditorPosition({
          start: n.toPosition().start + 1,
          editor: this,
          len: 0,
          zoneId: t
        }).toRange().start;
      }
      return this.q.getAttributes(n.start, i);
    };
    t.calcToggleAttribute = function (e, t = "true", n) {
      var o;
      var r;
      var l = (n = n || this.selection.getSelection()).start;
      var a = l.line;
      var u = l.zoneId;
      var d = n.end.line;
      var c = this.getContentState();
      var h = c.schema;
      if ((l = h.get(e)) === null || l === undefined ? undefined : l.lmkr) {
        var l = Math.min(a, d);
        var f = Math.max(a, d);
        var g = "";
        var v = t;
        var p = l;
        for (; p <= f; p++) {
          var y = c.getLineAttributes(u, p).toMap();
          if (y[e] !== t) {
            g = t;
            v = y[e] || "";
          }
        }
        return {
          key: e,
          originValue: v,
          value: g,
          isLineMarker: true,
          lineRange: {
            startLine: l,
            endLine: f
          }
        };
      }
      if (n.isCollapsed()) {
        return {
          key: e,
          value: null,
          originValue: null,
          isCollapsed: true
        };
      }
      var n = this.q.getEntities(n);
      var m = "";
      var C = t;
      if (n) {
        try {
          var S = typescriptRuntimeHelpers_1.values(n);
          var E = S.next();
          for (; !E.done; E = S.next()) {
            var b = E.value;
            var _ = true;
            var M = contentDeltaOpsUtil.findLineAttributes(h, b.attributes);
            var I = M && h.get(M)?.attributes;
            if (M && I) {
              _ = I instanceof RegExp ? I.test(e) : I(e, t, M);
            }
            if (b.text !== "\n" && !("lmkr" in b.attributes) && _ && b.attributes[e] !== t) {
              m = t;
              C = b.attributes[e] || "";
              break;
            }
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            if (E && !E.done && (r = S.return)) {
              r.call(S);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
      }
      return {
        key: e,
        originValue: C,
        value: m
      };
    };
    t.toggleAttribute = function (e, t = "true", n) {
      var i;
      var o = (n = n || this.selection.getSelection()).start.zoneId;
      var r = this.calcToggleAttribute(e, t, n);
      if (r.isLineMarker) {
        var s = r.value;
        var l = r.lineRange;
        var a = l.startLine;
        var u = l.endLine;
        var d = a;
        for (; d <= u; d++) {
          this.getContentState().setLineAttributes(o, d, ((i = {})[e] = s, i));
        }
      } else if (r.isCollapsed) {
        this.setInlineStyleOverride(e, t, n);
      } else {
        r = r.value;
        this.q.setAttributes(n, ((n = {})[e] = r, n));
      }
    };
    t.setInlineStyleOverride = function (e, t = "true", n) {
      var i = (n = n || this.selection.getSelection()).toPosition();
      var o = this._getInlineAttributesOfPreviousPosition().toMap();
      if (((n = this.q.getInlineStyleOverride(i, e)) !== null && n !== undefined ? n : o[e]) === t) {
        this.q._setInlineStyleOverride(i, e, "");
      } else {
        this.q._setInlineStyleOverride(i, e, t);
      }
    };
    t.on = function (e, t, n) {
      var i;
      var o;
      if (typeof n == "object") {
        o = n.priority;
        if (i = n.zoneId) {
          this.b.set(t, i);
        }
        this.g.on(e, t, o);
      } else {
        this.g.on(e, t, o = n);
      }
    };
    t.once = function (e, t, n) {
      var i;
      var o;
      if (typeof n == "object") {
        o = n.priority;
        if (i = n.zoneId) {
          this.b.set(t, i);
        }
        this.g.once(e, t, o);
      } else {
        this.g.once(e, t, o = n);
      }
    };
    t.off = function (e, t) {
      if (this.b.has(t)) {
        this.b.delete(t);
      }
      this.g.off(e, t);
    };
    t.registerCommand = function (e, t) {
      var n = this;
      this.on(e, function () {
        var e = [];
        var i = 0;
        for (; i < arguments.length; i++) {
          e[i] = arguments[i];
        }
        n.flushInput();
        n.undoModule.batchedUndo(function () {
          t.apply(n, e);
        });
      });
    };
    t.execCommand = function (e, t) {
      var n = false;
      var i = {
        name: e,
        data: t = t === undefined ? {} : t,
        preventEvent: function () {
          n = true;
        }
      };
      this.call(editorEventConstants.editorEventTypes.EXEC_COMMAND, i);
      if (!n) {
        this.g.trigger(e, [t]);
      }
    };
    t.getContentState = function () {
      return this.q;
    };
    t.getContent = function (e = false, t = false) {
      return this.getContentState().toDeltaSet(e, t);
    };
    t.setContent = function (e, t = {}) {
      this.getContentState().setContent(e, Object.assign({}, {
        type: "setContent"
      }, t));
    };
    t.getHTML = function () {
      var e = this.getContent();
      var t = {
        zoneId: zeroConstantModule_1.versionValue,
        deltaSet: e,
        node: this.getContainer(),
        customCopyDatas: []
      };
      var e = this.clipboard.serialize(t);
      var t = document.createElement("div");
      t.appendChild(e.node);
      return t.innerHTML;
    };
    t.setHTML = function (e) {
      e = this.clipboard.deserialize({
        html: e
      }, true);
      this.setContent(e);
    };
    t.getText = function () {
      var e;
      var t;
      var n = this;
      var o = [];
      var r = this.getContentState().getZoneState(zeroConstantModule_1.versionValue);
      if (!r) {
        return "";
      }
      try {
        var s = typescriptRuntimeHelpers_1.values(r);
        var l = s.next();
        for (; !l.done; l = s.next()) {
          var a = l.value;
          (a.hasLineMarker() ? a.getOps().slice(1) : a.getOps()).forEach(function (e) {
            e = {
              text: e.insert,
              attributes: typescriptRuntimeHelpers_1.assign({}, e.attributes)
            };
            n.pluginManager.call("editorCollectText", e);
            o.push(e.text);
          });
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (l && !l.done && (t = s.return)) {
            t.call(s);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return o.join("");
    };
    t.setText = function (e) {
      if (!e.endsWith("\n")) {
        e += "\n";
      }
      this.setContent(new contentStructureDelta.ContentDelta({
        zoneId: zeroConstantModule_1.versionValue
      }).insert(normalizeLineEndings.normalizeNewlines(e)));
    };
    t.isSelectionInEditor = function (e) {
      var t = window.getSelection();
      if (e) {
        return (e = (e = this.getContentState().getZoneState(e)) === null || e === undefined ? undefined : e._node) != null && !!e.contains((t == null ? undefined : t.anchorNode) || null) && e != null && !!e.contains((t == null ? undefined : t.focusNode) || null);
      } else {
        return t != null && !!t.anchorNode && !!t.focusNode && !!this.dom.isNodeInEditor(t.anchorNode, this.getContainer()) && !!this.dom.isNodeInEditor(t.focusNode, this.getContainer()) || !!this.dom.isNodeInEditor(document.activeElement, this.getContainer());
      }
    };
    t.isEmpty = function () {
      return !this.getStatus("isComposing") && this.getContentState().isEmpty();
    };
    t.focusAtEnd = function () {
      var e;
      var t = this.getContentState().getZoneState(zeroConstantModule_1.versionValue);
      if (t) {
        e = t.getModelText().length - 1;
        this.selection.setSelection({
          start: typescriptRuntimeHelpers_1.assign({
            zoneId: zeroConstantModule_1.versionValue
          }, t.offsetToPoint(e)),
          end: typescriptRuntimeHelpers_1.assign({
            zoneId: zeroConstantModule_1.versionValue
          }, t.offsetToPoint(e))
        }, true);
      }
    };
    t.focus = function (e, t = false) {
      if (typeof (e = e !== undefined && e) == "boolean") {
        this.selection.focus(e);
      } else {
        this.selection.focus(e, t);
      }
    };
    t.blur = function () {
      var e;
      if ((e = this.getContentState().getActiveZone()._node) !== null && e !== undefined) {
        e.blur();
      }
    };
    t.flushInput = function () {
      var e;
      if ((e = this.inputModel) !== null && e !== undefined) {
        e._flushInput();
      }
    };
    t.setEditable = function (e, t) {
      this.setContentEditable(e);
      this.setPluginMode(e, t);
    };
    t.isInEmbed = function () {
      return false;
    };
    t.setContentEditable = function (e) {
      var t;
      var n;
      var i;
      if (this.m) {
        this.v = e;
      } else {
        if ((i = (n = this.isEditable()) !== e) && !this.j && (t = this.getRootContainer()) !== null && t !== undefined) {
          t.setAttribute("contenteditable", String(e));
        }
        if (i) {
          this.call(editorEventConstants.editorEventTypes.EDITABLE_CHANGE, {
            previous: n,
            current: e
          });
        }
        this.callAll("aceChangeContentediable");
      }
    };
    t.scrollToSelection = function () {
      var e;
      var t = [];
      var n = 0;
      for (; n < arguments.length; n++) {
        t[n] = arguments[n];
      }
      return typescriptRuntimeHelpers_1.awaiter(this, undefined, undefined, function () {
        return typescriptRuntimeHelpers_1.generator(this, function (n) {
          return [2, (e = this.scrollModule) === null || e === undefined ? undefined : e.scrollIntoViewport.apply(e, typescriptRuntimeHelpers_1.spread(t))];
        });
      });
    };
    t.scrollTo = function (e) {
      var t;
      return typescriptRuntimeHelpers_1.awaiter(this, undefined, undefined, function () {
        return typescriptRuntimeHelpers_1.generator(this, function (n) {
          return [2, (t = this.scrollModule) === null || t === undefined ? undefined : t.scrollTo(e)];
        });
      });
    };
    t.scrollBy = function (e) {
      var t;
      return typescriptRuntimeHelpers_1.awaiter(this, undefined, undefined, function () {
        return typescriptRuntimeHelpers_1.generator(this, function (n) {
          return [2, (t = this.scrollModule) === null || t === undefined ? undefined : t.scrollBy(e)];
        });
      });
    };
    t.callAll = function (e, t) {
      var n = [];
      this.pluginManager.call(e, t || {}, {
        cb: function (e, t) {
          n.push(t);
          return e;
        }
      });
      return n;
    };
    t.destroy = function () {
      var e;
      var t;
      try {
        this.O();
        if ((e = this.inputModel) !== null && e !== undefined) {
          e.destroy();
        }
        this.undoModule.destroy();
        this.rectModule.clearCache();
        this.g.reset();
        this.q._clearListener();
        this.R();
        if (this.p) {
          cancelAnimationFrame(this.p);
        }
        if ((t = this.virtualListManager) !== null && t !== undefined) {
          t.destroy();
        }
      } catch (e) {
        this.log("[Editor][destroy]" + e);
      }
    };
    t.reset = function () {
      var e;
      if ((e = this.inputModel) !== null && e !== undefined) {
        e._flushInput(true);
      }
      this.getContentState().clear();
      this.callAll("reset");
      this.setText("");
      this.z();
      this.rectModule.clearCache();
      this.undoModule.clear();
    };
    t.getScrollContainer = function () {
      var e;
      if ((e = this.scrollModule) === null || e === undefined) {
        return undefined;
      } else {
        return e.getScroller();
      }
    };
    t.isEditable = function () {
      return !!this.f;
    };
    t.isFocusOnBlock = function (e) {
      return false;
    };
    t.getOuterContainer = function () {
      return this.getContainer() && this.getContainer().parentNode;
    };
    t.correctCompositionIfNecessary = function (e) {
      this._correctCompositionIfNecessary(e);
    };
    t.getInheritAttributes = function (e) {
      var t;
      return ((t = this.inputModel) === null || t === undefined ? undefined : t.getInheritAttributes(e)) || {};
    };
    t.U = function (e) {
      this.F(e);
    };
    t.F = function (e) {
      var t = e.keyCode;
      var n = e.shiftKey;
      var i = e.metaKey;
      var o = e.altKey;
      var r = e.ctrlKey;
      if (!n && !o) {
        if ((browserDetectUtils.platformInfo.isMac || browserDetectUtils.platformInfo.isIPad ? i : r) && t === editorConstantsKeycodes.KeyCode.A) {
          t = this.selection.getSelection().start.zoneId;
          this.selection.selectAll(t);
          e.preventDefault();
        }
      }
    };
    t.H = function (e) {
      var t = e.clientX;
      var n = e.clientY;
      var t = t - window.pageXOffset;
      var n = n - window.pageYOffset;
      var t = domElementPositionUtils.getCaretFromPoint(t, n);
      var n = t.textNode;
      var t = t.offset;
      e.evtTargetSelection = this.selection._toModelRange({
        startContainer: n || null,
        endContainer: n || null,
        startOffset: t || 0,
        endOffset: t || 0
      });
    };
    t.L = function () {
      var e = [];
      if (browserDetectUtils.platformInfo.chrome) {
        e.push("chrome");
      }
      if (browserDetectUtils.platformInfo.isFF) {
        e.push("mozilla");
      }
      if (browserDetectUtils.platformInfo.safari) {
        e.push("safari");
      }
      if (browserDetectUtils.platformInfo.msie) {
        e.push("msie");
      }
      if (browserDetectUtils.platformInfo.windows) {
        e.push("window");
      }
      var t = browserDetectUtils.getChromeVersion();
      if (t && parseInt(t) >= 88) {
        e.push("chrome88");
      }
      (t = this.a.classList).add.apply(t, typescriptRuntimeHelpers_1.spread(e));
    };
    t.R = function () {
      try {
        this.pluginManager.destroy();
      } catch (e) {}
    };
    t.P = function () {
      this.on(editorEventConstants.editorEventTypes.RECT_CHANGE, this._handleEditorRectChange);
      this.on(editorEventConstants.editorEventTypes.COMPOSITION_UPDATE, this.togglePlaceHolder);
      this.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.togglePlaceHolder);
      this.on(editorEventConstants.editorEventTypes.SCROLL, this._handleEditorScroll);
      var e = this.getContainer();
      var t = this.I;
      if (browserDetectUtils.platformInfo.isMac && (browserDetectUtils.platformInfo.chrome || browserDetectUtils.platformInfo.safari)) {
        t.on("mousedown", e, this.mouseDownListenerForMac);
      }
      t.on("dragover", e, this.handleDragOver);
      t.on("click", e, this._handleClickEvent);
      t.on("mouseup", document, this._handleMouseUp);
      t.on("mousedown", e, this._handleMouseDown);
    };
    t.O = function () {
      var e = this.I;
      this.off(editorEventConstants.editorEventTypes.RECT_CHANGE, this._handleEditorRectChange);
      this.off(editorEventConstants.editorEventTypes.COMPOSITION_UPDATE, this.togglePlaceHolder);
      this.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.togglePlaceHolder);
      this.off(editorEventConstants.editorEventTypes.SCROLL, this._handleEditorScroll);
      var t = this.getContainer();
      if (browserDetectUtils.platformInfo.isMac && (browserDetectUtils.platformInfo.chrome || browserDetectUtils.platformInfo.safari)) {
        e.off("mousedown", t, this.mouseDownListenerForMac);
      }
      e.off("dragover", t, this.handleDragOver);
      e.off("click", t, this._handleClickEvent);
      e.off("mouseup", document, this._handleMouseUp);
      e.off("mousedown", t, this._handleMouseDown);
    };
    t.handleDragOver = function (e) {
      e.preventDefault();
    };
    t.mouseDownListenerForMac = function (e) {
      var t = this;
      var n = this.I;
      var i = this.getContainer();
      function o() {
        n.off("selectionchange", i, o);
        if (!(t.selection.getMultipleSelection().length > 1)) {
          var r = t.selection.getSelection();
          if (r) {
            try {
              var s = r.start;
              var l = r.end;
              if (s.zoneId === l.zoneId && s.line !== l.line) {
                t.selection.setSelection({
                  start: s,
                  end: s
                });
                t.selection.updateBrowserSelection();
              }
            } catch (n) {
              t.log("mouseDownListenerForMac error", e);
            }
          }
        }
      }
      if (e.button === eventHandlerConfig.priorityHigh) {
        n.on("selectionchange", i, o);
        setTimeout(function () {
          n.off("selectionchange", i, o);
        }, 200);
      }
    };
    t.T = function (e) {
      if (this.props.spellCheck !== undefined) {
        e.setAttribute("spellCheck", String(this.props.spellCheck));
      }
      if (this.props.autoCorrect !== undefined) {
        e.setAttribute("autoCorrect", this.props.autoCorrect ? "on" : "off");
      }
      e.classList.add(editorConstantsKeycodes.editorKitContainer, "notranslate");
    };
    t.z = function () {
      var e;
      var t;
      var n = this.k;
      try {
        var o = typescriptRuntimeHelpers_1.values(Object.keys(n));
        var r = o.next();
        for (; !r.done; r = o.next()) {
          var s = r.value;
          this.setStatus(s, false);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (r && !r.done && (t = o.return)) {
            t.call(o);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    t._toggleZonePlaceHolder = function (e, t) {
      var n;
      var i;
      if (e) {
        if (i = this.getContentState().getZoneState(e)) {
          if (n = i.getContainer()) {
            e = "";
            e = (t == null ? undefined : t.show) !== false && ((t == null ? undefined : t.show) === true || i.isEmpty()) ? i.placeholder : "";
            if ((i = n.getAttribute("data-placeholder")) !== e) {
              if (e) {
                n.setAttribute("data-placeholder", e);
              } else if (i) {
                n.removeAttribute("data-placeholder");
              }
            }
          }
        }
      }
    };
    t.setStatus = function (e, t) {
      this.k[e] = t;
    };
    t.transformPosition = function (e, t) {
      var n = t.zoneId;
      if (e.zoneId !== n) {
        return t;
      }
      var i = t.start;
      var o = t.len;
      var t = e.transform(i);
      var o = e.transform(i + o, this.props.followSelectionExclusively && o !== 0);
      if (this.props.followSelectionExclusively && o < t) {
        o = t;
      }
      return new editorPositionClass.EditorPosition({
        start: t,
        len: o - t,
        zoneId: n,
        editor: this
      });
    };
    t._handleEditorRectChange = function () {
      this.rectModule.clearCache();
      this.setRect();
    };
    t._handleEditorScroll = function () {
      this.rectModule.clearCache();
    };
    t._getViewModel = function () {
      return this.w;
    };
    t._correctCompositionIfNecessary = function (e) {
      var t;
      var n;
      var i = this;
      if (this.getStatus("isComposing") === true) {
        t = e.type;
        e = e instanceof Event ? e : e.nativeEvent;
        n = new keyboardMessageEvent.KeyboardMessageEvent(new CompositionEvent("compositionend"), this.getContainer());
        if (U.includes(t)) {
          if (e instanceof KeyboardEvent && e.isComposing === false) {
            this.triggerEditorEvent("compositionend", n);
            this.log("[Editor][_correctCompositionIfNecessary]\n                   dispatchCompositionEvent because eventType is " + t + " and isComposing is false");
          }
        } else {
          if (browserDetectUtils.platformInfo.windows && t === "blur") {
            setTimeout(function () {
              i.triggerEditorEvent("compositionend", n);
            });
          } else {
            this.triggerEditorEvent("compositionend", n);
          }
          this.log("[Editor][_correctCompositionIfNecessary] dispatchCompositionEvent because eventType is " + t);
        }
      }
    };
    t.B = function () {
      var e = getSelection();
      if (!e) {
        return false;
      }
      var t = e.anchorNode;
      var n = e.focusNode;
      var i = this.dom;
      var o = i.isNodeInOuterControlledZone;
      var e = i.isNodeInInnerZone;
      return ((i = (i = t == null ? undefined : t.parentElement) === null || i === undefined ? undefined : i.closest("." + editorConstantsKeycodes.aditContainer)) === null || i === undefined || !i.closest("." + editorConstantsKeycodes.editorKitContainer)) && ((i = (i = n == null ? undefined : n.parentElement) === null || i === undefined ? undefined : i.closest("." + editorConstantsKeycodes.aditContainer)) === null || i === undefined || !i.closest("." + editorConstantsKeycodes.editorKitContainer)) && (n == null || !n.parentElement || !o(n.parentElement) || !!e(n.parentElement)) && (t == null || !t.parentElement || !o(t.parentElement) || !!e(t.parentElement)) && !!this.dom.isNodeInEditor(t, this.getContainer()) && !!this.dom.isNodeInEditor(n, this.getContainer());
    };
    t.__handleDOMSelectionChange = function () {
      this.log({
        scope: "[editor][_handleDOMSelectionChange]",
        level: "info",
        shouldLogToMobile: false,
        status: this.k,
        sel: getSelection()
      });
      if (this.B()) {
        this.selection._handleDOMSelectionChange();
      }
      if (this.getStatus("isMouseDown")) {
        this.setStatus("isSelectionChange", true);
      }
      var e = getSelection();
      if (this.getStatus("isClick") && this.getStatus("isMouseDown")) {
        this._resetCursorStatus();
        if (!this.getStatus("stopUpdateSelection") && this.isEditable() && this.mounted && e != null && e.focusNode && !this.isFocusOnBlock() && this.getContainer().contains(e.focusNode)) {
          this.selection.updateBrowserSelection();
        }
      }
    };
    t._setPlaceholder = function (e) {
      this.props.placeholder = e;
      this.togglePlaceHolder();
    };
    t._handleMouseDown = function (e) {
      if ((!this.isEditable() || browserDetectUtils.platformInfo.isEdge) && !this.selection.getSelection().isCollapsed() && e.button === eventHandlerConfig.priorityLow) {
        var t = document.caretRangeFromPoint(e.x, e.y);
        if (!t) {
          return;
        }
        var n = this.selection._toModelRange(t);
        if (!n) {
          return;
        }
        var i = n.start;
        var o = this.selection.getSelection();
        var n = o.start;
        var o = o.end;
        if (n <= i && i <= o) {
          this.selection._updateDOMSelection(t);
        }
      }
      if (this.K()) {
        return this._resetCursorStatus();
      }
      this.N(e);
      if (this.mounted && e.target instanceof Node && this.W(e.target)) {
        this.setStatus("isMouseDown", true);
      } else {
        this.setStatus("isMouseDown", false);
      }
    };
    t.W = function (e) {
      var t = this.dom.isNodeInOuterControlledZone(e);
      var n = this.dom.isNodeInInnerZone(e);
      var e = !!this.dom.isNodeInEditor(e, this.getContainer());
      if (t) {
        return n;
      } else {
        return e;
      }
    };
    t.K = function () {
      return this.getStatus("isMouseUp") && !this.getStatus("isMouseDown");
    };
    t._handleContentWillApply = function (e) {
      e = e.options;
      if (this.getStatus("isComposing")) {
        this.error({
          message: "apply when editor in composing",
          level: errorHandlerUtil.ErrorLevel.ERROR,
          options: e
        });
      }
      this.flushInput();
    };
    t._handleContentWillChange = function (e) {
      this.pluginManager.call("editorWillApplyChange", e, {
        cb: function (t, n) {
          e.deltaSet = n;
          return e;
        }
      });
      this.call(editorEventConstants.editorEventTypes.CONTENT_WILL_CHANGE, e);
      return e.deltaSet;
    };
    t._handleContentChange = function (e) {
      var t;
      var n;
      var o;
      var r;
      var s;
      var l;
      var a = this;
      var d = e.previous;
      var c = e.current;
      var h = e.options;
      var g = this.q.getZoneState(zeroConstantModule_1.versionValue);
      if (g) {
        this._getViewModel()._setNode(g, this.getContainer());
      }
      var v = Object.keys(e.changes).map(function (e) {
        if ((e = a.selection.getSelection(e, d)) === null || e === undefined) {
          return undefined;
        } else {
          return e.toPosition(d);
        }
      }).filter(Boolean);
      var g = v.map(function (t) {
        return e.deltaSet.get(t.zoneId);
      });
      e.deltaSet.forEach(function (e) {
        a.rectModule.clearZoneRect(e.zoneId);
      });
      try {
        var p = typescriptRuntimeHelpers_1.values(Object.values(e.changes));
        var m = p.next();
        for (; !m.done; m = p.next()) {
          var C = m.value;
          try {
            o = undefined;
            var S = typescriptRuntimeHelpers_1.values(C);
            var E = S.next();
            for (; !E.done; E = S.next()) {
              var b = E.value;
              try {
                s = undefined;
                var _ = typescriptRuntimeHelpers_1.values(b.deletes);
                var M = _.next();
                for (; !M.done; M = _.next()) {
                  var I = M.value;
                  if (!b.inserts.includes(I)) {
                    this._getViewModel()._deleteNode(I);
                  }
                }
              } catch (e) {
                s = {
                  error: e
                };
              } finally {
                try {
                  if (M && !M.done && (l = _.return)) {
                    l.call(_);
                  }
                } finally {
                  if (s) {
                    throw s.error;
                  }
                }
              }
            }
          } catch (e) {
            o = {
              error: e
            };
          } finally {
            try {
              if (E && !E.done && (r = S.return)) {
                r.call(S);
              }
            } finally {
              if (o) {
                throw o.error;
              }
            }
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (m && !m.done && (n = p.return)) {
            n.call(p);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      g.forEach(function (e, t) {
        t = v[t];
        a.log("[Log]", "[Editor][_handleContentChange] old selection", JSON.stringify({
          zoneId: t.zoneId,
          start: t.start,
          timestamp: Date.now()
        }));
        var n = e && deltaSetCore.isEmptyOps((n = c.getZoneState(e.zoneId)) === null || n === undefined ? undefined : n.getContent());
        if (e && t && !n) {
          t = a.transformPosition(e, t);
          a.log("[Log]", "[Editor][_handleContentChange] new selection", JSON.stringify({
            zoneId: t.zoneId,
            start: t.start,
            timestamp: Date.now()
          }));
          a.selection._replaceSingleRangeModel(t);
        }
      });
      this.setStatus("contentChanged", true);
      if (h.preventScrolling) {
        this.setStatus("preventScrolling", true);
      }
      this.call(editorEventConstants.editorEventTypes.CONTENT_CHANGE, e);
      this.setStatus("preventScrolling", false);
      this.selection._dispatchEvent(false);
    };
    t._handleMouseUp = function (e) {
      this.setStatus("isMouseUp", true);
      if (!(e.target instanceof Node) || !this.W(e.target)) {
        this._resetCursorStatus();
      }
      this.N(e);
    };
    t.N = function (e) {
      var t = new keyboardMouseSyntheticEvent.KeyboardMouseEvent(e, e.target);
      this.triggerEditorEvent(e.type, t);
    };
    t._handleClickEvent = function (e) {
      var t;
      if (e.target instanceof Node && this.W(e.target) && ((t = e.target instanceof Element ? e.target : e.target.parentElement) === null || t === undefined ? undefined : t.closest("." + editorConstantsKeycodes.editorKitContainer)) === this.getContainer()) {
        t = getSelection();
        this.log({
          scope: "[editor][_handleClickEvent]",
          level: "info",
          shouldLogToMobile: false,
          status: this.k,
          sel: t
        });
        if (e.target instanceof Node && this.mounted) {
          this.setStatus("isClick", true);
        }
        if (this.getStatus("isMouseDown") && this.getStatus("isSelectionChange") && this.getStatus("isClick")) {
          this._resetCursorStatus();
          if (!this.getStatus("preventUpdateDomSelection") && t != null && t.focusNode && !this.isFocusOnBlock() && this.getContainer().contains(t.focusNode)) {
            this.selection.updateBrowserSelection();
          }
        }
        this.flushInput();
        t = new keyboardMouseSyntheticEvent.KeyboardMouseEvent(e, e.target);
        this.triggerEditorEvent(e.type, typescriptRuntimeHelpers_1.assign({}, t));
      } else {
        this._resetCursorStatus();
      }
    };
    t._handleKeyEvent = function (e) {
      var t;
      if (!this.isInEmbed() && this.isEditable()) {
        this.log({
          scope: "[editor][_handleKeyEvent]",
          level: "info",
          shouldLogToMobile: false,
          status: this.k,
          evtType: e.type
        });
        var n = new keyboardSyntheticEventClass_1.KeyboardSyntheticEvent(e, e.target);
        if (!this.triggerEditorEvent(e.type, n).shouldPrevent) {
          this.U(n.nativeEvent);
          switch (e.type) {
            case "keydown":
              if ((t = this.inputModel) !== null && t !== undefined) {
                t._handleKeyDown({
                  evt: n
                });
              }
              this.selection.handleArrowKey({
                evt: n
              });
              break;
            case "keypress":
            case "keyup":
              if ((t = this.inputModel) !== null && t !== undefined) {
                t._handleKeyPressAndUp({
                  evt: n
                });
              }
          }
        }
      }
    };
    t._resetCursorStatus = function () {
      this.setStatus("isSelectionChange", false);
      this.setStatus("isMouseUp", false);
      this.setStatus("isMouseDown", false);
      this.setStatus("isClick", false);
    };
    t._handleInputEvent = function (e) {
      if (e.inputType === "deleteContent" || e.inputType === "deleteContentBackward" || e.inputType === "deleteContentForward") {
        this.log("trace", "[Editor Event] name: " + e.type + ", inputType: " + e.inputType + ", cancelable: " + e.cancelable);
      }
      var t = new M(e, e.target);
      if (!this.triggerEditorEvent(editorEventConstants.editorEventTypes.INPUT, t).shouldPrevent) {
        if ((e = this.inputModel) !== null && e !== undefined) {
          e._handleInput(t);
        }
      }
    };
    t._handleBeforeInput = function (e) {
      if (e.inputType === "deleteContent" || e.inputType === "deleteContentBackward" || e.inputType === "deleteContentForward") {
        this.log("trace", "[Editor Event] name: " + e.type + ", inputType: " + e.inputType + ", cancelable: " + e.cancelable);
      }
      var t = new M(e, e.target);
      this.triggerEditorEvent(e.type, t);
    };
    t._handleCompositionEvent = function (e) {
      if (e.type !== "compositionupdate") {
        this.log("trace", "[Editor Event] name: " + e.type);
      }
      var t = new keyboardMessageEvent.KeyboardMessageEvent(e, e.target);
      this.triggerEditorEvent(e.type, t);
    };
    t._handleCopy = function (e) {
      var t = this;
      this.flushInput();
      this.undoModule.batchedUndo(function () {
        t.clipboard.onCopy(e);
      });
    };
    t._handleCut = function (e) {
      var t = this;
      this.flushInput();
      this.undoModule.batchedUndo(function () {
        t.clipboard.onCut(e);
      });
    };
    t._handlePaste = function (e) {
      var t = this;
      this.flushInput();
      if (!this.isFocusOnBlock() && this.isEditable()) {
        this.undoModule.batchedUndo(function () {
          t.clipboard.onPaste(e);
        });
      }
    };
    t._handleDrag = function (e) {
      var t = new I(e, e.target);
      this.H(t);
      this.triggerEditorEvent(e.type, t);
    };
    t._handleFocusEvent = function (e) {
      if (e.type === "focus" && !this.getStatus("isPerforming") && !this.getStatus("preventUpdateDomSelection") && !!this.isFocus() && !!e.target && !e.relatedTarget && !!this.dom.isZoneContainer(e.target) && !browserDetectUtils.platformInfo.mobile) {
        this.selection.updateBrowserSelection();
      }
      var t = new keyboardFocusEvent.KeyboardFocusEvent(e, e.target);
      this.triggerEditorEvent(e.type, t);
    };
    t._handleResizeEvent = function (e) {
      o = e instanceof Event ? domElementPositionUtils.getElementBounds(this.getContainer()) : {
        width: (e = e[0].contentRect).width,
        height: e.height,
        top: e.top,
        bottom: e.bottom,
        left: e.left,
        right: e.right
      };
      var t;
      var n;
      var o;
      var r = this.getRect();
      if (r.width !== o.width || r.height !== o.height) {
        this.call(editorEventConstants.editorEventTypes.RESIZE, {
          previous: r,
          current: o
        });
      }
      try {
        var s = typescriptRuntimeHelpers_1.values(Object.entries(o));
        var l = s.next();
        for (; !l.done; l = s.next()) {
          var a = typescriptRuntimeHelpers_1.readIterable(l.value, 2);
          var u = a[0];
          var d = a[1];
          if (r[u] !== d) {
            this.call(editorEventConstants.editorEventTypes.RECT_CHANGE, {
              previous: r,
              current: o
            });
            break;
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (l && !l.done && (n = s.return)) {
            n.call(s);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
    };
    t.triggerEditorEvent = function (e, t) {
      function n() {
        s = true;
      }
      var i = this;
      var r = this.g.getListeners(e);
      var s = false;
      var l = false;
      function a() {
        l = true;
      }
      t = t || {};
      var u = this;
      var d = 0;
      for (; d < r.length && function (e) {
        if (s) {
          return "break";
        }
        var l;
        var e = r[e];
        var d = e.listener;
        var e = e.isOnce;
        if (t) {
          t.stopEvent = n;
          t.preventEvent = a;
          t.evt = t;
        }
        try {
          if (d.plugin) {
            u.selection.getMultipleSelection().forEach(function (e) {
              e = e.start.zoneId;
              if (i.pluginManager.isPluginInZone(d.plugin, e)) {
                d.call(d, t);
              }
            });
          } else if (u.b.has(d)) {
            l = u.b.get(d);
            if (u.selection.isZoneInSelection(l)) {
              d.call(d, t);
              if (e) {
                u.b.delete(d);
              }
            }
          } else {
            d.call(d, t);
          }
        } catch (e) {
          u.error({
            e: e,
            message: e.message,
            level: errorHandlerUtil.ErrorLevel.ERROR
          });
        }
      }(d) !== "break"; d++);
      return {
        shouldStop: s,
        shouldPrevent: l
      };
    };
    t.setStopUpdateSelection = function (e) {
      this.setStatus("stopUpdateSelection", e);
    };
    t.setPreventUpdateDomSelection = function (e) {
      this.setStatus("preventUpdateDomSelection", e);
    };
    t._getAttributesOfPreviousPosition = function () {
      var e = this.q.getActiveZone().getZoneId();
      var t = this.selection.getSelection(e);
      var n = t.start;
      if (t.start.offset > 0) {
        n = new editorPositionClass.EditorPosition({
          start: t.toPosition().start - 1,
          editor: this,
          len: 0,
          zoneId: e
        }).toRange().start;
      }
      return this.q.getAttributes(n, t.start);
    };
    t._getAttributesOfNextPosition = function () {
      var e = this.q.getActiveZone().getZoneId();
      var t = this.selection.getSelection(e);
      var n = (i = this.q.getZoneState(e)) === null || i === undefined ? undefined : i.getLine(t.start.line);
      if (!n) {
        return contentDeltaOpsUtil.createOpArray();
      }
      var i = t.start;
      if (t.start.offset < n.length()) {
        i = new editorPositionClass.EditorPosition({
          start: t.toPosition().start + 1,
          editor: this,
          len: 0,
          zoneId: e
        }).toRange().start;
      }
      return this.q.getAttributes(t.start, i);
    };
    t.setPluginMode = function (e, t) {
      if (this.G) {
        this.V = {
          designMode: e,
          args: t
        };
      } else {
        this.f = e;
        try {
          if (this.f) {
            this.callAll("pluginReadWrite", t);
          } else {
            this.callAll("pluginReadOnly", t);
          }
        } catch (e) {
          this.log("[Editor][setPluginMode] " + e);
        }
      }
    };
    t.setEditStatusLock = function (e, t) {
      var n;
      if (!(this.G = e) && !!t && !!this.V) {
        t = (n = this.V).designMode;
        n = n.args;
        this.setEditable(t, n);
      }
      if (e) {
        this.V = {
          designMode: this.f,
          args: {}
        };
      }
    };
    t.setContentEditableLock = function (e) {
      if (!(this.m = e = e !== undefined && e)) {
        this.setContentEditable(this.v);
      }
    };
    t.setContainerContentEditableLock = function (e) {
      this.j = e = e !== undefined && e;
    };
    t.unstable_hydrate = function (e, t) {
      this._hydrateMap.set(e, t);
      this._getViewModel()._setNode(e, t);
      t[editorConstantsKeycodes.dataSsr] = true;
    };
    t._deleteHydrateTask = function (e) {
      this._hydrateMap.delete(e);
      if (e._node) {
        e._node[editorConstantsKeycodes.dataSsr] = false;
      }
    };
    t.error = function (e) {
      e.e ||= Error(e.message);
      e.affectingScope ||= "entire-editor";
      this.call("error", e);
      e = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), {
        level: "error",
        shouldLogToMobile: false
      });
      this.log(e);
    };
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "setRect", null);
    typescriptRuntimeHelpers_1.decorate([X], e.prototype, "calcToggleAttribute", null);
    typescriptRuntimeHelpers_1.decorate([X], e.prototype, "toggleAttribute", null);
    typescriptRuntimeHelpers_1.decorate([X], e.prototype, "setInlineStyleOverride", null);
    typescriptRuntimeHelpers_1.decorate([X], e.prototype, "setContent", null);
    typescriptRuntimeHelpers_1.decorate([X], e.prototype, "setHTML", null);
    typescriptRuntimeHelpers_1.decorate([X], e.prototype, "setText", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "scrollToSelection", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "scrollTo", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "handleDragOver", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "mouseDownListenerForMac", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleEditorRectChange", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleEditorScroll", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "__handleDOMSelectionChange", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleMouseDown", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleContentWillApply", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleContentWillChange", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleContentChange", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleMouseUp", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleClickEvent", null);
    typescriptRuntimeHelpers_1.decorate([X], e.prototype, "_handleKeyEvent", null);
    typescriptRuntimeHelpers_1.decorate([X], e.prototype, "_handleInputEvent", null);
    typescriptRuntimeHelpers_1.decorate([X], e.prototype, "_handleBeforeInput", null);
    typescriptRuntimeHelpers_1.decorate([X], e.prototype, "_handleCompositionEvent", null);
    typescriptRuntimeHelpers_1.decorate([X], e.prototype, "_handleCopy", null);
    typescriptRuntimeHelpers_1.decorate([X], e.prototype, "_handleCut", null);
    typescriptRuntimeHelpers_1.decorate([X], e.prototype, "_handlePaste", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleDrag", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleFocusEvent", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleResizeEvent", null);
    typescriptRuntimeHelpers_1.decorate([X], e.prototype, "triggerEditorEvent", null);
    return e;
  }();
  require.d(exports, {
    Editor: function () {
      return H;
    }
  });
}