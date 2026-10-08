// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'EquationRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 485858
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var cssDisplayTypes = require("css-display-types") /*id: 226292*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var reactDomContextDecorator = require("react-dom-context-decorator") /*id: 955275*/;
  var renderWrapperUtil = require("render-wrapper-util") /*id: 212000*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var u = /\\begin\n*\{(equation|split|align|gather|alignat|CD)\}|\\tag/;
  var syntheticEventUtilities = require("synthetic-event-utilities") /*id: 97252*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var debounceUtil = require("debounce-util") /*id: 783084*/;
  var randomStringGenerator = require("random-string-generator") /*id: 62944*/;
  var editorLeafTextComponent = require("editor-leaf-text-component") /*id: 374368*/;
  var reactEditorContext = require("react-editor-context") /*id: 955597*/;
  var keyboardEventUtils = require("keyboard-event-utils") /*id: 623958*/;
  var m = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.handleKeyDown = function (e) {
        if (t.props.onKeyDown) {
          return t.props.onKeyDown(e);
        }
        var n = e.keyCode;
        var i = false;
        switch (n) {
          case keyboardEventUtils.KeyCode.Left:
          case keyboardEventUtils.KeyCode.Right:
          case keyboardEventUtils.KeyCode.Up:
          case keyboardEventUtils.KeyCode.Down:
            i = t._handleArrowKey(e);
        }
        if (i) {
          e.stopEvent();
          e.stopPropagation();
          e.preventDefault();
          e.preventEvent();
        }
      };
      t._handleArrowKey = function (e) {
        if (e.shiftKey) {
          return false;
        }
        var n;
        var i;
        var o;
        var r;
        var a = t.editor.selection.getSelection().toPosition();
        var l = t.getSelectionOfCurrentRef();
        if (!l) {
          return false;
        }
        var s = l.toPosition();
        return a.zoneId === s.zoneId && !!a.isCollapsed() && !t.isFocusOnMe() && (e.keyCode === keyboardEventUtils.KeyCode.Left && a.start === s.start + s.len ? (t.editor.selection.setSelection(l, true), (i = (n = t.props).onCursorMoveIn) === null || i === undefined || i.call(n), true) : e.keyCode === keyboardEventUtils.KeyCode.Right && a.start === s.start && (t.editor.selection.setSelection(l, true), (r = (o = t.props).onCursorMoveIn) === null || r === undefined || r.call(o), true));
      };
      t._handleEditorSelectionChange = function () {
        var e;
        var n;
        var i;
        var o;
        var r;
        var a;
        var l = t.getSelectionOfCurrentRef();
        if (l) {
          var s = t.editor.selection.getSelection(l.start.zoneId);
          var u = !s || !t._prevSel && s.isCollapsed() || ((e = t._prevSel) === null || e === undefined ? undefined : e.isCollapsed()) && s.isCollapsed();
          t._prevSel = s;
          if (!u) {
            var d = t.editor.getContentState().getEntities(l);
            if ((n = d == null ? undefined : d[0]) === null || n === undefined ? undefined : n.attributes.equation) {
              var c = s.start;
              var h = s.end;
              var f = l.start;
              var p = l.end;
              var v = c.zoneId === f.zoneId && c <= f && h >= p;
              if (v) {
                t._selected = true;
                if ((o = (i = t.props).onSelect) !== null && o !== undefined) {
                  o.call(i);
                }
              } else if (!v) {
                t._selected = false;
                if ((a = (r = t.props).onDeselect) !== null && a !== undefined) {
                  a.call(r);
                }
              }
            }
          }
        }
      };
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.componentDidMount = function () {
      e.prototype.componentDidMount.call(this);
      this.editor.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this._handleEditorSelectionChange);
    };
    n.componentWillUnmount = function () {
      e.prototype.componentWillUnmount.call(this);
      this.editor.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this._handleEditorSelectionChange);
    };
    return t;
  }(editorLeafTextComponent.LeafTextComponent);
  var y = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = reactCoreLibraryReexport.useContext(reactEditorContext.editorContext);
    return n && reactCoreLibraryReexport.createElement(m, typescriptHelpers_1.assign({}, e, {
      forwardRef: t,
      editor: n
    }));
  });
  function b() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    return e.reduce(function (e, t) {
      var n;
      var o;
      if (typeof t == "string") {
        e += " " + t;
      } else {
        try {
          var r = typescriptHelpers_1.getValues(Object.entries(t));
          var a = r.next();
          for (; !a.done; a = r.next()) {
            var l = typescriptHelpers_1.readIterator(a.value, 2);
            var s = l[0];
            var u = l[1];
            if (u === true) {
              e += " " + s;
            }
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            if (a && !a.done && (o = r.return)) {
              o.call(r);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      }
      return e;
    }, "");
  }
  function S(e) {
    var t = e.editor;
    var n = e.length;
    var r = e.objectID;
    var a = e.zoneId;
    var l = e.lineState;
    var u = e.defaultEquation;
    var p = e.displayMode;
    var v = e.popoverContainer;
    var g = e.renderEquationContent;
    var m = reactCoreLibraryReexport.useRef(null);
    var S = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(u || ""), 2);
    var E = S[0];
    var C = S[1];
    var R = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(t.isEditable()), 2);
    var w = R[0];
    var z = R[1];
    reactCoreLibraryReexport.useEffect(function () {
      if (u) {
        C(u);
      }
    }, [u]);
    var I = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(false), 2);
    var M = I[0];
    var k = I[1];
    var T = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(false), 2);
    var x = T[0];
    var L = T[1];
    var D = reactCoreLibraryReexport.useCallback(debounceUtil.debounce(function (e) {
      L(e);
    }, 30), []);
    var A = reactCoreLibraryReexport.useCallback(function () {
      L(true);
    }, []);
    var _ = reactCoreLibraryReexport.useCallback(function () {
      L(false);
    }, []);
    var N = reactCoreLibraryReexport.useCallback(function () {
      if (m.current) {
        return syntheticEventUtilities.createSelectionRange(m.current, t);
      } else {
        return null;
      }
    }, [t]);
    var P = reactCoreLibraryReexport.useCallback(function (e) {
      k(e);
      var n = N();
      if (!e && n) {
        var i = t.selection.getSelection().toPosition();
        var o = i.start;
        var r = i.start + i.len;
        var a = t.getContentState().rangeToPosition(n);
        if (a && (a.start < o || a.start > r)) {
          _();
        }
      }
    }, [t, _, N]);
    var O = reactCoreLibraryReexport.useCallback(function (e) {
      if (e !== E) {
        var n = t.getContentState();
        var i = N();
        if (i) {
          var o = n.getAttributes(i.start, i.end).toMap().objectID;
          if (typeof o != "string") {
            o = randomStringGenerator.createRandomString(8);
          }
          n.setAttributes(i, {
            objectID: o,
            equation: e
          });
        }
      }
    }, [t, E, N]);
    var H = reactCoreLibraryReexport.useCallback(function (e) {
      O(e);
      C(e);
    }, [O]);
    var W = reactCoreLibraryReexport.useMemo(function () {
      return g({
        containerEditor: t,
        objectID: r,
        zoneId: a,
        lineState: l,
        isEditMode: w && M,
        displayMode: p,
        equation: E,
        mountNode: v,
        getEquationRange: N,
        onEquationChange: H,
        onIsEditModeChange: w ? P : null,
        onIsSelectedChange: D
      });
    }, [t, r, a, l, p, v, w, E, M, N, H, g, P, D]);
    var Z = reactCoreLibraryReexport.useCallback(function (e) {
      z(e.current);
    }, []);
    reactCoreLibraryReexport.useEffect(function () {
      t.on(editorEventConstants.editorEventTypes.EDITABLE_CHANGE, Z);
      return function () {
        t.off(editorEventConstants.editorEventTypes.EDITABLE_CHANGE, Z);
      };
    }, [t, Z]);
    return reactCoreLibraryReexport.createElement(y, {
      isEditMode: M,
      onCursorMoveIn: function () {
        k(true);
      },
      onSelect: A,
      onDeselect: _,
      length: n,
      autoSelectOnClick: false
    }, reactCoreLibraryReexport.createElement("div", {
      ref: m,
      className: b("editor-kit-equation-block", {
        "editor-kit-equation-block-selected": x || M,
        editable: w
      }),
      style: {
        width: p === cssDisplayTypes.displayTypes.block ? "100%" : "auto"
      }
    }, W));
  }
  var E = function (e) {
    function t(t) {
      var n = t.editor;
      var o = t.getPopupContainer;
      var r = t.renderEquationContent;
      var a = e.call(this) || this;
      a.name = "Equation";
      a._editor = n;
      a._renderEquationContent = function (e) {
        return r(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, e), {
          containerEditor: a._editor
        }));
      };
      a._getPopupContainer = o;
      a._initPopupWrapperIfNotExist();
      return a;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.editorCollectText = function (e) {
      var t = e.attributes.equation;
      if (typeof t != "string") {
        return "";
      } else {
        return "$$" + t + "$$";
      }
    };
    n.serialize = function (e) {
      return e;
    };
    n.deserialize = function (e) {
      return e.deltaSet;
    };
    n.match = function (e) {
      return e === t.KEY;
    };
    n.render = function (e) {
      var n = e.attributes;
      var i = e.children;
      var r = e.index;
      var a = e.lineState;
      var l = e.op;
      var d = n.equation;
      var c = n.objectID;
      if (typeof d != "string") {
        return i;
      }
      if (!e.key) {
        if (typeof c == "string") {
          e.key = c;
        } else {
          var h = a.getOps().indexOf(l);
          e.key = "equation-line-" + r + "-op-" + h;
        }
      }
      var f = u.test(d) ? cssDisplayTypes.displayTypes.block : cssDisplayTypes.displayTypes.inline;
      e.class += " equation-leaf equation-display-" + f;
      return reactCoreLibraryReexport.createElement(S, {
        editor: this._editor,
        length: e.insert.length,
        objectID: c,
        zoneId: e.zoneId,
        lineState: e.lineState,
        defaultEquation: d,
        displayMode: f,
        popoverContainer: t.popupWrapper,
        renderEquationContent: this._renderEquationContent
      });
    };
    n._initPopupWrapperIfNotExist = function () {
      var e;
      if (!t.popupWrapper || !document.contains(t.popupWrapper)) {
        t.popupWrapper = document.createElement("div");
        t.popupWrapper.className = "editor-kit-equation-popover-wrapper";
        (((e = this._getPopupContainer) === null || e === undefined ? undefined : e.call(this)) || document.body).appendChild(t.popupWrapper);
      }
    };
    t.KEY = "equation";
    typescriptHelpers_1.decorate([renderWrapperUtil.wrapRenderFunction, reactDomContextDecorator.withContextConsumer()], t.prototype, "render", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    EquationRenderer: function () {
      return E;
    }
  });
}