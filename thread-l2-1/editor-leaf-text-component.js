// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'LeafTextComponent'
// - Renamed export 'Z' to 'LeafTextWithContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 374368
         */
module.exports = function (module, exports, require) {
  var i;
  var l;
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var autoBindMethodDescriptor = require("auto-bind-method-descriptor") /*id: 969612*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var browserDetectUtils = require("browser-detect-utils") /*id: 749406*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  var syntheticEventUtilities = require("synthetic-event-utilities") /*id: 97252*/;
  var contentDeltaOpsUtil = require("content-delta-ops-util") /*id: 444706*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactEditorContext = require("react-editor-context") /*id: 955597*/;
  (i = l = l || {}).IMG = "img";
  i.TEXT = "span";
  i.VIEW = "div";
  var f = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.editor = t.context;
      t.option = {};
      t._events = {};
      t._selected = false;
      t._ref = reactCoreLibraryReexport.createRef();
      t._prevSel = null;
      t._handleEditorSelectionChange = function () {
        var e;
        if (t.option.selectEventEnabled) {
          var n;
          var i;
          var l;
          var r = null;
          try {
            r = syntheticEventUtilities.createSelectionRange(t._ref.current, t.editor);
          } catch (e) {}
          if (r) {
            n = t.editor.selection.getSelection(r.start.zoneId);
            i = !t._prevSel && !n || !t._prevSel && (n == null ? undefined : n.isCollapsed()) || ((e = t._prevSel) === null || e === undefined ? undefined : e.isCollapsed()) && !n || ((i = t._prevSel) === null || i === undefined ? undefined : i.isCollapsed()) && (n == null ? undefined : n.isCollapsed());
            t._prevSel = n;
            if (!i) {
              i = r.start;
              r = r.end;
              if ((r = n && n.start.zoneId === i.zoneId && n.start <= i && n.end >= r) && !t._selected) {
                l = t._events.select;
                t._selected = true;
                if (l != null) {
                  l.call(l);
                }
              } else if (!r && t._selected) {
                l = t._events.deselect;
                t._selected = false;
                if (l != null) {
                  l.call(l);
                }
              }
            }
          }
        }
      };
      return t;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    var n = t.prototype;
    n.componentDidMount = function () {
      this.updateEventCb();
      this.editor = this.context;
      this._bindEditorEvents();
    };
    n.componentDidUpdate = function (e) {
      this.updateEventCb();
    };
    n.componentWillUnmount = function () {
      this.editor.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE_AND_DOM_UPDATE, this._handleEditorSelectionChange);
    };
    n.updateEventCb = function () {
      var e = this;
      this._events = Object.keys(this.props).filter(function (e) {
        return e.startsWith("on");
      }).reduce(function (t, n) {
        t[syntheticEventUtilities.normalizeEventName(n)] = e.props[n];
        return t;
      }, {});
    };
    n._bindEditorEvents = function () {
      var e = this;
      if (this.option.selectEventEnabled && syntheticEventUtilities.selectionEventTypes.find(function (t) {
        return e._events[t];
      })) {
        this.editor.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE_AND_DOM_UPDATE, this._handleEditorSelectionChange);
      }
    };
    n._triggerEventCallback = function (e, t) {
      var n = this._events[e.type];
      var i = syntheticEventUtilities.processSyntheticEvent(e);
      if (n) {
        if (syntheticEventUtilities.eventCategoryTypes.includes(syntheticEventUtilities.getObjectType(t))) {
          e = syntheticEventUtilities.createSelectionRange(e.currentTarget, this.editor);
          i.evtTargetSelection = e;
        }
        n.call(n, i);
      }
    };
    n._handleSynthesisEvents = function (e) {
      this._triggerEventCallback(e, e.nativeEvent);
    };
    n.render = function () {
      var e = this;
      var t = this.tagName;
      var n = Object.keys(this.props).reduce(function (t, n) {
        if (n.startsWith("on")) {
          t[n] = syntheticEventUtilities.viewportEventTypes.includes(syntheticEventUtilities.normalizeEventName(n)) ? undefined : e._handleSynthesisEvents;
        } else {
          t[n] = e.props[n];
        }
        return t;
      }, {});
      return reactCoreLibraryReexport.createElement(t, typescriptRuntimeHelpers_1.assign({
        ref: this._ref
      }, n), this.props.children);
    };
    t.contextType = reactEditorContext.editorContext;
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "_bindEditorEvents", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "_triggerEventCallback", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "_handleSynthesisEvents", null);
    return t;
  }(reactCoreLibraryReexport.PureComponent);
  var reactZeroWidthSpace = require("react-zero-width-space") /*id: 285939*/;
  var g = ["editor", "length", "disableDefaultSelected", "forwardRef", "onSelect", "onDeselect", "onKeyDown", "autoSelectOnClick"];
  var _ = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.tagName = l.TEXT;
      t.option = {
        viewportEventEnabled: true,
        selectEventEnabled: true
      };
      t._leftZeroSpaceRef = reactCoreLibraryReexport.createRef();
      t._rightZeroSpaceRef = reactCoreLibraryReexport.createRef();
      t.eo = new WeakMap();
      t.handleKeyDown = function (e) {
        if (t.props.onKeyDown) {
          return t.props.onKeyDown(e);
        }
        if (t.to()) {
          var n = e.keyCode;
          var i = false;
          switch (true) {
            case n === editorConstantsKeycodes.KeyCode.Enter:
              i = t.so();
              break;
            case [editorConstantsKeycodes.KeyCode.Left, editorConstantsKeycodes.KeyCode.Right, editorConstantsKeycodes.KeyCode.Up, editorConstantsKeycodes.KeyCode.Down].includes(n):
              i = t.io(e);
          }
          if (i) {
            e.stopEvent();
            e.stopPropagation();
            e.preventDefault();
            e.preventEvent();
          }
        }
      };
      t.updateLeafModel = function () {
        var e;
        var n;
        var i;
        var l = t._ref.current;
        if (l) {
          if (n = (e = (i = t._ref.current) === null || i === undefined ? undefined : i.closest("[" + editorConstantsKeycodes.dataLeaf + "]")) == null ? undefined : e.__leafModel) {
            t.props.editor._getViewModel()._setLeaf(l, n);
            t.eo.set(l, n);
          }
          if (n && n.lineState) {
            i = n.op;
            l = n.lineState;
            l = n.index === l.getOps().length - 2;
            if (i != null && i.attributes && l) {
              t.no(t._leftZeroSpaceRef.current);
              t.no(t._rightZeroSpaceRef.current);
              if (t.to()) {
                if (!browserDetectUtils.platformInfo.mobile) {
                  requestAnimationFrame(function () {
                    var e;
                    if ((e = (e = t._ref.current) === null || e === undefined ? undefined : e.closest("[" + editorConstantsKeycodes.dataNode + "]")) !== null && e !== undefined) {
                      e.setAttribute("contenteditable", "false");
                    }
                  });
                }
              } else {
                e.style.margin = "0 0.1px";
              }
            }
          }
        }
      };
      t.ro = function (e) {};
      t.oo = function (e) {
        if (e) {
          if (t.to()) {
            e.style.display = "block";
          } else {
            e.style.display = "auto";
          }
        }
      };
      return t;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    var n = t.prototype;
    Object.defineProperty(n, "_length", {
      get: function () {
        var e = this.props.length;
        if (typeof e == "number" && isFinite(e)) {
          return Math.max(e, 1);
        } else {
          return 1;
        }
      },
      enumerable: false,
      configurable: true
    });
    n.handleDeleteKey = function (e) {
      var t = e.e;
      var n = e.stopEvent;
      var i = e.preventEvent;
      var l = e.isBackward;
      var r = this.props.editor;
      var o = r.selection.getSelection();
      var s = o.toPosition();
      var c = s.zoneId;
      var d = s.start;
      if (o.isCollapsed() && (this.to() || this._length !== 1)) {
        var u = this.getSelectionOfCurrentRef();
        if (u) {
          var p = r.getContentState();
          var m = o.start;
          var v = m.line;
          var f = m.offset;
          var e = l ? u.end : u.start;
          var s = v + (l ? 1 : -1) * -1;
          var m = p.getZoneState(c);
          if (m) {
            var h;
            var v = m.getLine(v);
            if (this.to() && e.line === s && v && f === (l ? v.getLineMarker() : v.length() - 1) && e.zoneId === o.start.zoneId) {
              n();
              i();
              t.preventDefault();
              t.stopPropagation();
              if (v.isTextEmpty()) {
                h = new contentStructureDelta.ContentDelta({
                  zoneId: c
                });
                if (l) {
                  v = v.getLineMarker() + 1;
                  h.retain(d - v).delete(v);
                } else {
                  h.retain(d).delete(1);
                  u.start.line--;
                  u.end.line--;
                }
                p.apply(h);
              }
              r.selection.setSelection(u, true);
              return;
            }
            if (e.line === o.start.line && e.offset === o.start.offset) {
              n();
              i();
              t.preventDefault();
              t.stopPropagation();
              (h = new contentStructureDelta.ContentDelta({
                zoneId: c
              })).retain(d + (l ? this._length * -1 : 0)).delete(this._length);
              p.apply(h);
            }
          }
        }
      }
    };
    n.so = function () {
      if (!this.isFocusOnMe()) {
        return false;
      }
      var e = this.getSelectionOfCurrentRef();
      if (!e) {
        return false;
      }
      var t = this.editor.getContentState();
      var n = e.start;
      var i = n.zoneId;
      var e = n.line;
      var n = (n = t.getZoneState(i)) === null || n === undefined ? undefined : n.getLine(e);
      return !!n && !!(e = t.rangePointToOffset({
        line: e,
        zoneId: i,
        offset: n.length() - 1
      })) && (n = new contentStructureDelta.ContentDelta({
        zoneId: i
      }).retain(e).insertEnterAndLineMarker(), t.apply(n), this.editor.selection.setSelection({
        start: e + 2,
        len: 0,
        zoneId: i
      }), true);
    };
    n.io = function (e) {
      var t;
      var n = this.getSelectionOfCurrentRef();
      if (!n) {
        return false;
      }
      var i = n.start;
      var l = i.zoneId;
      var r = i.line;
      var o = this.editor.selection.getSelection();
      var a = o.start;
      var c = o.end;
      var d = a.line;
      var u = a.offset;
      var p = a.zoneId;
      var i = c.line;
      var o = c.offset;
      if (l !== p) {
        return false;
      }
      var m = {
        start: n.start,
        end: n.end
      };
      var v = this.editor.getContentState().getZoneState(p);
      if (!v) {
        return false;
      }
      if (this.isFocusOnMe()) {
        switch (e.keyCode) {
          case editorConstantsKeycodes.KeyCode.Left:
          case editorConstantsKeycodes.KeyCode.Up:
            m.start.line = Math.max(0, r - 1);
            m.start.offset = ((t = (t = v.getLine(m.start.line)) === null || t === undefined ? undefined : t.length()) !== null && t !== undefined ? t : 1) - 1;
            m.end = m.start;
            break;
          case editorConstantsKeycodes.KeyCode.Right:
          case editorConstantsKeycodes.KeyCode.Down:
            m.start.line = Math.min(v.length() - 1, r + 1);
            m.start.offset = (t = (t = v.getLine(m.start.line)) === null || t === undefined ? undefined : t.getLineMarker()) !== null && t !== undefined ? t : 0;
            m.end = m.start;
            break;
          default:
            return false;
        }
        this.editor.selection.setSelection(m, true);
        return true;
      }
      return (d === r + 1 && (e.keyCode === editorConstantsKeycodes.KeyCode.Up && this.uo(a) || e.keyCode === editorConstantsKeycodes.KeyCode.Left && u === ((d = v == null ? undefined : v.getLine(d)) === null || d === undefined ? undefined : d.getLineMarker())) || i === r - 1 && (e.keyCode === editorConstantsKeycodes.KeyCode.Down && !!this.lo(c) || e.keyCode === editorConstantsKeycodes.KeyCode.Right && o + 1 === ((i = v == null ? undefined : v.getLine(i)) === null || i === undefined ? undefined : i.length()))) && (this.editor.selection.setSelection(m = n, true), true);
    };
    n.uo = function (e) {
      var t = (n = this.editor.getContentState().getZoneState(e.zoneId)) === null || n === undefined ? undefined : n.getLine(e.line);
      if (!t) {
        return false;
      }
      var n = t.getLineMarker();
      var t = this.editor.rectModule.getCaretRect(e, e.zoneId);
      var e = this.editor.rectModule.getCaretRect({
        line: e.line,
        offset: n,
        zoneId: e.zoneId
      }, e.zoneId);
      return t.top === e.top;
    };
    n.lo = function (e) {
      var t = (n = this.editor.getContentState().getZoneState(e.zoneId)) === null || n === undefined ? undefined : n.getLine(e.line);
      if (!t) {
        return false;
      }
      var n = this.editor.rectModule.getCaretRect(e, e.zoneId);
      var e = this.editor.rectModule.getCaretRect({
        line: e.line,
        offset: t.length() - 1,
        zoneId: e.zoneId
      }, e.zoneId);
      return n.bottom === e.bottom;
    };
    n.isFocusOnMe = function () {
      var e = (t = this.getSelectionOfCurrentRef()) === null || t === undefined ? undefined : t.toPosition();
      if (!e) {
        return false;
      }
      var t = this.editor.selection.getSelection().toPosition();
      return e.start === t.start && e.len === t.len && e.zoneId === t.zoneId;
    };
    n.shouldComponentUpdate = function () {
      return true;
    };
    n.componentDidUpdate = function (t) {
      e.prototype.componentDidUpdate.call(this, t);
      if (this._ref.current) {
        this.handleRef(this._ref.current);
        this.updateLeafModel();
      }
      t = this.getZoneIdByCurrentRef();
      this.props.editor.once(editorEventConstants.editorEventTypes.PAINT, this.updateLeafModel, {
        zoneId: t
      });
    };
    n.componentDidMount = function () {
      e.prototype.componentDidMount.call(this);
      var t = this.getZoneIdByCurrentRef();
      this.props.editor.on(editorEventConstants.editorEventTypes.DELETE_KEY, this.handleDeleteKey, {
        zoneId: t,
        priority: 900
      });
      this.props.editor.on(editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeyDown, {
        zoneId: t,
        priority: 900
      });
      this.props.editor.once(editorEventConstants.editorEventTypes.PAINT, this.updateLeafModel, {
        zoneId: t
      });
    };
    n.componentWillUnmount = function () {
      var t;
      e.prototype.componentWillUnmount.call(this);
      this.props.editor.off(editorEventConstants.editorEventTypes.DELETE_KEY, this.handleDeleteKey);
      this.props.editor.off(editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeyDown);
      if (this._ref && this._ref.current) {
        this.props.editor._getViewModel()._deleteLeaf(this._ref.current);
      }
      if (this.to() && (t = (t = this._ref.current) === null || t === undefined ? undefined : t.closest("[" + editorConstantsKeycodes.dataNode + "]")) !== null && t !== undefined) {
        t.removeAttribute("contenteditable");
      }
    };
    n.to = function () {
      var e = (this._ref.current && this.eo.get(this._ref.current) || {}).op;
      var t = e == null ? undefined : e.attributes;
      return !!t && (e = this.props.editor.getContentState().schema, contentDeltaOpsUtil.validateDocOps(t, e));
    };
    n.getZoneIdByCurrentRef = function () {
      var e = (e = this._rightZeroSpaceRef.current) !== null && e !== undefined ? e : this._ref.current;
      return ((e = (e = e == null ? undefined : e.closest("[" + editorConstantsKeycodes.dataZoneId + "]")) === null || e === undefined ? undefined : e.dataset) === null || e === undefined ? undefined : e.zoneId) || "";
    };
    n.getSelectionOfCurrentRef = function () {
      if (!this._rightZeroSpaceRef.current && !this._ref.current) {
        return null;
      }
      var e = (e = this._rightZeroSpaceRef.current) !== null && e !== undefined ? e : this._ref.current;
      var e = syntheticEventUtilities.createSelectionRange(e, this.props.editor);
      return e || null;
    };
    n.handleMouseDown = function (e) {
      var t;
      if (this.props.autoSelectOnClick !== false) {
        if (t = this.getSelectionOfCurrentRef()) {
          if (browserDetectUtils.platformInfo.isAndroid && this.props.editor.getStatus("isComposing")) {
            this.editor._correctCompositionIfNecessary(e);
          }
          this.props.editor.selection.setSelection(t);
          this.props.editor.selection.updateBrowserSelection(true);
        }
      }
    };
    n._handleMouseDown = function (e) {
      this.handleMouseDown(e);
    };
    n.handleRef = function (e) {
      if (e) {
        this._ref.current = e;
      }
    };
    n.handleRightZeroSpaceRef = function (e) {
      if (e) {
        if (this.props.forwardRef) {
          this.props.forwardRef.current = e;
        }
        this._rightZeroSpaceRef.current = e;
        this.ro(e);
      }
    };
    n.handleLeftZeroSpaceRef = function (e) {
      if (e) {
        this._leftZeroSpaceRef.current = e;
      }
    };
    n.no = function (e) {
      if (e) {
        if (this.to()) {
          e.style.position = "absolute";
          e.style.width = "0px";
          e.style.height = "0px";
          e.style.display = "inline-block";
        } else {
          e.style.position = "";
          e.style.width = "auto";
          e.style.height = "auto";
          e.style.display = "auto";
        }
      }
    };
    n.render = function () {
      var e;
      var t = this;
      var n = Object.keys(this.props).reduce(function (e, n) {
        if (!g.includes(n)) {
          if (n.startsWith("on")) {
            e[n] = syntheticEventUtilities.viewportEventTypes.includes(syntheticEventUtilities.normalizeEventName(n)) ? undefined : t._handleSynthesisEvents;
          } else {
            e[n] = t.props[n];
          }
        }
        return e;
      }, {});
      if (browserDetectUtils.platformInfo.ios) {
        n.style = Object.assign({
          WebkitUserSelect: "none"
        }, n.style);
      }
      return reactCoreLibraryReexport.createElement("span", typescriptRuntimeHelpers_1.assign({}, ((e = {})[editorConstantsKeycodes.dataRectContainer] = true, e), {
        ref: this.oo
      }), reactCoreLibraryReexport.createElement(reactZeroWidthSpace.ZeroWidthSpace, {
        key: "" + Math.random(),
        ref: this.handleLeftZeroSpaceRef
      }), reactCoreLibraryReexport.createElement("span", typescriptRuntimeHelpers_1.assign({}, ((e = {})[editorConstantsKeycodes.dataFakeText_1] = " ".repeat(this._length), e), {
        contentEditable: false,
        ref: this.handleRef,
        onMouseDown: this._handleMouseDown
      }, n), this.props.children, this.props.disableDefaultSelected && reactCoreLibraryReexport.createElement(reactZeroWidthSpace.ZeroWidthSpace, {
        ref: this.handleRightZeroSpaceRef
      })));
    };
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "handleDeleteKey", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "_handleMouseDown", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "handleRef", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "handleRightZeroSpaceRef", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "handleLeftZeroSpaceRef", null);
    return t;
  }(f);
  var b = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(_, typescriptRuntimeHelpers_1.assign({}, e, {
      forwardRef: t
    }));
  });
  var k = reactEditorContext.withEditor(b);
  require.d(exports, {
    LeafTextComponent: function () {
      return _;
    },
    LeafTextWithContext: function () {
      return k;
    }
  });
}