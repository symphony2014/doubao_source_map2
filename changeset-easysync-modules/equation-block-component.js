// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'EquationBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 327162
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var syntheticEventUtilities = require("synthetic-event-utilities") /*id: 97252*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var cssDisplayTypes = require("css-display-types") /*id: 226292*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var debounceUtil = require("debounce-util") /*id: 783084*/;
  var randomStringGenerator = require("random-string-generator") /*id: 62944*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var editorLeafTextComponent = require("editor-leaf-text-component") /*id: 374368*/;
  var reactEditorContext = require("react-editor-context") /*id: 955597*/;
  var keyCodeEnum = require("key-code-enum") /*id: 899434*/;
  var f = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.handleKeyDown = function (t) {
        if (e.props.onKeyDown) {
          return e.props.onKeyDown(t);
        }
        var n = t.keyCode;
        var r = false;
        switch (n) {
          case keyCodeEnum.KeyCode.Left:
          case keyCodeEnum.KeyCode.Right:
          case keyCodeEnum.KeyCode.Up:
          case keyCodeEnum.KeyCode.Down:
            r = e._handleArrowKey(t);
        }
        if (r) {
          t.stopEvent();
          t.stopPropagation();
          t.preventDefault();
          t.preventEvent();
        }
      };
      e._handleArrowKey = function (t) {
        if (t.shiftKey) {
          return false;
        }
        var n;
        var r;
        var i;
        var o;
        var s = e.editor.selection.getSelection().toPosition();
        var a = e.getSelectionOfCurrentRef();
        if (!a) {
          return false;
        }
        var u = a.toPosition();
        return s.zoneId === u.zoneId && !!s.isCollapsed() && !e.isFocusOnMe() && (t.keyCode === keyCodeEnum.KeyCode.Left && s.start === u.start + u.len ? (e.editor.selection.setSelection(a, true), (r = (n = e.props).onCursorMoveIn) === null || r === undefined || r.call(n), true) : t.keyCode === keyCodeEnum.KeyCode.Right && s.start === u.start && (e.editor.selection.setSelection(a, true), (o = (i = e.props).onCursorMoveIn) === null || o === undefined || o.call(i), true));
      };
      e._handleEditorSelectionChange = function () {
        var t;
        var n;
        var r;
        var i;
        var o;
        var s;
        var a = e.getSelectionOfCurrentRef();
        if (a) {
          var u = e.editor.selection.getSelection(a.start.zoneId);
          var c = !u || !e._prevSel && u.isCollapsed() || ((t = e._prevSel) === null || t === undefined ? undefined : t.isCollapsed()) && u.isCollapsed();
          e._prevSel = u;
          if (!c) {
            var l = e.editor.getContentState().getEntities(a);
            if ((n = l == null ? undefined : l[0]) === null || n === undefined ? undefined : n.attributes.equation) {
              var p = u.start;
              var h = u.end;
              var f = a.start;
              var d = a.end;
              var v = p.zoneId === f.zoneId && p <= f && h >= d;
              if (v) {
                e._selected = true;
                if ((i = (r = e.props).onSelect) !== null && i !== undefined) {
                  i.call(r);
                }
              } else if (!v) {
                e._selected = false;
                if ((s = (o = e.props).onDeselect) !== null && s !== undefined) {
                  s.call(o);
                }
              }
            }
          }
        }
      };
      return e;
    }
    typescriptHelpers.extendClass(e, t);
    var n = e.prototype;
    n.componentDidMount = function () {
      t.prototype.componentDidMount.call(this);
      this.editor.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this._handleEditorSelectionChange);
    };
    n.componentWillUnmount = function () {
      t.prototype.componentWillUnmount.call(this);
      this.editor.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this._handleEditorSelectionChange);
    };
    return e;
  }(editorLeafTextComponent.LeafTextComponent);
  var d = reactCoreLibraryReexport.forwardRef(function (t, e) {
    var n = reactCoreLibraryReexport.useContext(reactEditorContext.editorContext);
    return n && reactCoreLibraryReexport.createElement(f, typescriptHelpers.assignObject({}, t, {
      forwardRef: e,
      editor: n
    }));
  });
  function v() {
    var t = [];
    var e = 0;
    for (; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
    return t.reduce(function (t, e) {
      var n;
      var i;
      if (typeof e == "string") {
        t += " " + e;
      } else {
        try {
          var o = typescriptHelpers.createIterator(Object.entries(e));
          var s = o.next();
          for (; !s.done; s = o.next()) {
            var a = typescriptHelpers.iteratorToArray(s.value, 2);
            var u = a[0];
            var c = a[1];
            if (c === true) {
              t += " " + u;
            }
          }
        } catch (t) {
          n = {
            error: t
          };
        } finally {
          try {
            if (s && !s.done && (i = o.return)) {
              i.call(o);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      }
      return t;
    }, "");
  }
  function y(t) {
    var e = t.editor;
    var n = t.length;
    var l = t.objectID;
    var p = t.zoneId;
    var h = t.lineState;
    var f = t.defaultEquation;
    var y = t.displayMode;
    var g = t.popoverContainer;
    var _ = t.renderEquationContent;
    var m = reactCoreLibraryReexport.useRef(null);
    var b = typescriptHelpers.iteratorToArray(reactCoreLibraryReexport.useState(f || ""), 2);
    var E = b[0];
    var w = b[1];
    var S = typescriptHelpers.iteratorToArray(reactCoreLibraryReexport.useState(e.isEditable()), 2);
    var T = S[0];
    var I = S[1];
    reactCoreLibraryReexport.useEffect(function () {
      if (f) {
        w(f);
      }
    }, [f]);
    var A = typescriptHelpers.iteratorToArray(reactCoreLibraryReexport.useState(false), 2);
    var C = A[0];
    var M = A[1];
    var k = typescriptHelpers.iteratorToArray(reactCoreLibraryReexport.useState(false), 2);
    var O = k[0];
    var R = k[1];
    var D = reactCoreLibraryReexport.useCallback(debounceUtil.debounce(function (t) {
      R(t);
    }, 30), []);
    var N = reactCoreLibraryReexport.useCallback(function () {
      R(true);
    }, []);
    var x = reactCoreLibraryReexport.useCallback(function () {
      R(false);
    }, []);
    var P = reactCoreLibraryReexport.useCallback(function () {
      if (m.current) {
        return syntheticEventUtilities.createSelectionRange(m.current, e);
      } else {
        return null;
      }
    }, [e]);
    var B = reactCoreLibraryReexport.useCallback(function (t) {
      M(t);
      var n = P();
      if (!t && n) {
        var r = e.selection.getSelection().toPosition();
        var i = r.start;
        var o = r.start + r.len;
        var s = e.getContentState().rangeToPosition(n);
        if (s && (s.start < i || s.start > o)) {
          x();
        }
      }
    }, [e, x, P]);
    var L = reactCoreLibraryReexport.useCallback(function (t) {
      if (t !== E) {
        var n = e.getContentState();
        var r = P();
        if (r) {
          var i = n.getAttributes(r.start, r.end).toMap().objectID;
          if (typeof i != "string") {
            i = randomStringGenerator.createRandomString(8);
          }
          n.setAttributes(r, {
            objectID: i,
            equation: t
          });
        }
      }
    }, [e, E, P]);
    var F = reactCoreLibraryReexport.useCallback(function (t) {
      L(t);
      w(t);
    }, [L]);
    var j = reactCoreLibraryReexport.useMemo(function () {
      return _({
        containerEditor: e,
        objectID: l,
        zoneId: p,
        lineState: h,
        isEditMode: T && C,
        displayMode: y,
        equation: E,
        mountNode: g,
        getEquationRange: P,
        onEquationChange: F,
        onIsEditModeChange: T ? B : null,
        onIsSelectedChange: D
      });
    }, [e, l, p, h, y, g, T, E, C, P, F, _, B, D]);
    var U = reactCoreLibraryReexport.useCallback(function (t) {
      I(t.current);
    }, []);
    reactCoreLibraryReexport.useEffect(function () {
      e.on(editorEventConstants.editorEventTypes.EDITABLE_CHANGE, U);
      return function () {
        e.off(editorEventConstants.editorEventTypes.EDITABLE_CHANGE, U);
      };
    }, [e, U]);
    return reactCoreLibraryReexport.createElement(d, {
      isEditMode: C,
      onCursorMoveIn: function () {
        M(true);
      },
      onSelect: N,
      onDeselect: x,
      length: n,
      autoSelectOnClick: false
    }, reactCoreLibraryReexport.createElement("div", {
      ref: m,
      className: v("editor-kit-equation-block", {
        "editor-kit-equation-block-selected": O || C,
        editable: T
      }),
      style: {
        width: y === cssDisplayTypes.displayTypes.block ? "100%" : "auto"
      }
    }, j));
  }
  require.d(exports, {
    EquationBlock: function () {
      return y;
    }
  });
}