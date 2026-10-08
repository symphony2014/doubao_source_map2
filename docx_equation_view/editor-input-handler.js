// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'kK' to 'InputActionTypes'
// - Renamed export 'F3' to 'EditorInputHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 142590
         */
module.exports = function (module, exports, require) {
  var r;
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var debounceMaxWaitUtil = require("debounce-max-wait-util") /*id: 869149*/;
  var errorHandlerUtil = require("error-handler-util") /*id: 161088*/;
  var deepEqualityCheck_1 = require("deep-equality-check_1") /*id: 956585*/;
  var autoBindMethodDescriptor = require("auto-bind-method-descriptor") /*id: 969612*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var browserDetectUtils = require("browser-detect-utils") /*id: 749406*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  var editorDomNodeUtils = require("editor-dom-node-utils") /*id: 978010*/;
  var editorRangeZoneClass = require("editor-range-zone-class") /*id: 731872*/;
  var g = /[\u0030-\u0039\u0041-\u005A\u0061-\u007A\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0100-\u1FFF\u3040-\u9FFF\uF900-\uFDFF\uFE70-\uFEFE\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFDC]/;
  var b = String.fromCharCode(8203);
  var unicodeCharLengthUtils = require("unicode-char-length-utils") /*id: 832308*/;
  function k(e) {
    var n = e.keyCode;
    var e = e.ctrlKey;
    return [editorConstantsKeycodes.KeyCode.Left, editorConstantsKeycodes.KeyCode.Right, editorConstantsKeycodes.KeyCode.Up, editorConstantsKeycodes.KeyCode.Down].includes(n) || browserDetectUtils.platformInfo.isMac && e && n === editorConstantsKeycodes.KeyCode.B || browserDetectUtils.platformInfo.isMac && e && n === editorConstantsKeycodes.KeyCode.F;
  }
  function _(e) {
    var n = e.keyCode;
    return !e.charCode && [editorConstantsKeycodes.KeyCode.Shift, editorConstantsKeycodes.KeyCode.Alt, editorConstantsKeycodes.KeyCode.Ctrl, editorConstantsKeycodes.KeyCode.CapsLock, editorConstantsKeycodes.KeyCode.Meta, editorConstantsKeycodes.KeyCode.BracketRightKeyDown].includes(n);
  }
  function E(e) {
    while (e) {
      var n;
      if ((n = e).getAttribute(editorConstantsKeycodes.dataFakeText_1) || n.getAttribute(editorConstantsKeycodes.dataFakeText)) {
        return true;
      }
      if (e.className.includes(editorConstantsKeycodes.aceLine) || e.className.includes("editor-kit-container")) {
        break;
      }
      e = e.parentElement;
    }
    return false;
  }
  function w(e) {
    return g.test(e);
  }
  function C(e) {
    var n = e.offset;
    var e = e.lineText;
    return unicodeCharLengthUtils.getLastCharLength(e.slice(0, n));
  }
  function Z(e) {
    var n = e.offset;
    var e = e.lineText;
    return unicodeCharLengthUtils.getFirstCharLength(e.slice(n));
  }
  function x(e) {
    var n = e.lineMarker;
    return e.offset - n;
  }
  function S(e) {
    var n = e.offset;
    return e.lineText.length - 1 - n;
  }
  function T(e) {
    var n = e.lineMarker;
    var i = e.offset;
    var r = e.lineText;
    var e = C(e);
    if (e > 1) {
      return e;
    }
    for (var o = i - 1; n < o && w(r[o - 1]);) {
      o--;
    }
    return i - o;
  }
  function R(e) {
    var n = e.offset;
    var i = e.lineText;
    var e = Z(e);
    if (e > 1) {
      return e;
    }
    for (var r = n + 1; r < i.length - 1 && w(i[r]);) {
      r++;
    }
    return r - n;
  }
  function I(e, n, i) {
    i = JSON.stringify({
      rangeStartLine: n.start.line,
      rangeEndLine: n.end.line,
      isLineStateNull: !i,
      isViewModelMatchedNull: !e._getViewModel().getView(i),
      isLineStateNodeNull: i == null || !i.getNode(),
      zoneStateSize: ((i = i.parent) === null || i === undefined ? undefined : i.length()) || 0
    });
    e.error({
      level: editorConstantsKeycodes.LogLevel.ERROR,
      message: "line is null while input",
      extra: i
    });
  }
  var A;
  var M;
  (A = {})[editorConstantsKeycodes.KeyCode.Enter] = "_handleReturnKey";
  A[editorConstantsKeycodes.KeyCode.Delete] = "_handleDeleteKey";
  A[editorConstantsKeycodes.KeyCode.BackSpace] = "_handleDeleteKey";
  var B = A;
  (r = M = M || {}).FlushInput = "flushInput";
  r.Composition = "composition";
  r.DeleteForward = "deleteForward";
  r.DeleteBackward = "deleteBackward";
  r.DeleteToLineStart = "deleteToLineStart";
  r.DeleteToLineEnd = "deleteToLineEnd";
  r.DeleteEntireWordBackward = "deleteEntireWordBackward";
  r.DeleteEntireWordForward = "deleteEntireWordForward";
  r.DeleteRange = "deleteRange";
  r.Return = "doReturnKey";
  r.KeyEvent = "handleKeyEvent";
  var O = [M.FlushInput, M.DeleteForward, M.DeleteBackward, M.Return];
  var P = ["formatBold", "formatItalic", "formatStrikeThrough", "formatUnderline"];
  var N = function () {
    function e(e, n) {
      var i = this;
      this._isFirefoxCompositionEnded = false;
      this.it = null;
      this.st = null;
      this.nt = 0;
      this.ot = [];
      this.C = 0;
      this.lt = null;
      this.ut = -1;
      this.ct = null;
      this.ht = false;
      this._t = false;
      this.at = null;
      this.mt = false;
      this._handleKeyDown = this.vt(function (e) {
        var n;
        var r;
        var o;
        var a;
        var l;
        var c;
        var s;
        var u = e.evt.nativeEvent;
        if (!_(u)) {
          if (k(u)) {
            i._flushInput();
          }
          n = u.keyCode;
          s = u.ctrlKey;
          c = u.metaKey;
          l = u.altKey;
          r = M.KeyEvent;
          if (!k(u) && !i.editor.getStatus("isComposing")) {
            i._t = false;
            o = null;
            if (n === editorConstantsKeycodes.KeyCode.Enter) {
              o = i._handleReturnKey(u);
              i._t = true;
            } else if (n === editorConstantsKeycodes.KeyCode.BackSpace && (s || c)) {
              o = i.dt(u, true, x);
              r = M.DeleteToLineStart;
              i._t = true;
            } else if (n === editorConstantsKeycodes.KeyCode.Delete && (s || c) || s && n === editorConstantsKeycodes.KeyCode.K && (browserDetectUtils.platformInfo.isMac || browserDetectUtils.platformInfo.isIOS)) {
              o = i.dt(u, false, S);
              r = M.DeleteToLineEnd;
              i._t = true;
            } else if (n === editorConstantsKeycodes.KeyCode.BackSpace && l) {
              o = i.dt(u, true, T);
              r = M.DeleteEntireWordBackward;
              i._t = true;
            } else if (n === editorConstantsKeycodes.KeyCode.Delete && l) {
              o = i.dt(u, false, R);
              r = M.DeleteEntireWordForward;
              i._t = true;
            } else if (n === editorConstantsKeycodes.KeyCode.Ime && browserDetectUtils.platformInfo.isAndroid || n === editorConstantsKeycodes.KeyCode.BackSpace && browserDetectUtils.platformInfo.isIOS) {
              i.at = u;
              i.mt = true;
              i._t = false;
            } else if (n === editorConstantsKeycodes.KeyCode.BackSpace || s && n === editorConstantsKeycodes.KeyCode.H && (browserDetectUtils.platformInfo.isMac || browserDetectUtils.platformInfo.isIOS)) {
              o = i.dt(u, true, C);
              r = M.DeleteBackward;
              i._t = true;
            } else if (n === editorConstantsKeycodes.KeyCode.Delete || s && n === editorConstantsKeycodes.KeyCode.D && (browserDetectUtils.platformInfo.isMac || browserDetectUtils.platformInfo.isIOS)) {
              o = i.dt(u, false, Z);
              r = M.DeleteForward;
              i._t = true;
            } else if (n === editorConstantsKeycodes.KeyCode.Insert) {
              i._flushInput();
            } else if ((n === editorConstantsKeycodes.KeyCode.A || n === editorConstantsKeycodes.KeyCode.E) && s && browserDetectUtils.platformInfo.isMac) {
              i._t = true;
              l = (c = (e = (a = i.editor.selection).getSelection()).start).line;
              s = c.zoneId;
              c = i.editor.getContentState().getZoneState(s).getLine(l);
              s = {
                line: l,
                offset: n === editorConstantsKeycodes.KeyCode.A ? +!!c.hasLineMarker() : c.length() - 1,
                zoneId: s
              };
              a.setSelection({
                start: s,
                end: s,
                isBackward: e.isBackward
              }, true);
            }
            if (i._t && !browserDetectUtils.platformInfo.ios) {
              u.preventDefault();
              i._t = false;
            }
            if (o) {
              i._apply(o, {
                type: r
              });
              i._mergeInputRecord();
            }
          }
        }
      });
      this._mergeInputRecord = debounceMaxWaitUtil.createDebounce(function () {
        var e = i.ot.length - 1;
        var n = e - 1;
        while (n >= 0 && e >= 0) {
          var r = i.ot[e];
          var o = i.ot[n];
          if (r.type === o.type && O.includes(r.type)) {
            i.editor.undoModule.mergeRecords(o, r);
            n = (e = n) - 1;
          } else {
            n = (e = n - 1) - 1;
          }
        }
        i.ot = [];
      }, 1000, {
        leading: false
      });
      this.pt = 0;
      this.editor = e;
      this.C = (n = n.debounceFlush) !== null && n !== undefined ? n : 0;
      e.on("beforeinput", this._handleBeforeInput, 0);
      e.on("compositionstart", this._handleCompositionEvent, 0);
      e.on("compositionupdate", this._handleCompositionEvent, 0);
      e.on("compositionend", this._handleCompositionEvent, 0);
      e.on("mousedown", this._handleMouseDown, 0);
      e.on("contentchange", this._handleContentChange, 0);
    }
    var n = e.prototype;
    n.vt = function (e) {
      var n = this;
      return function () {
        var i = [];
        var r = 0;
        for (; r < arguments.length; r++) {
          i[r] = arguments[r];
        }
        n.editor.undoModule.batchedUndo(function () {
          e.apply(n, i);
        });
      };
    };
    n._handleKeyPressAndUp = function (e) {
      var n = e.evt;
      this.mt = false;
      this.at = null;
      if (!_(n.nativeEvent)) {
        e = B[e = n.keyCode];
        if (!E(n.target) && !this.editor.isFocusOnBlock()) {
          if (this[e]) {
            n.preventDefault();
          }
        }
      }
    };
    n._handleMouseDown = function () {
      this._flushInput();
    };
    n._handleContentChange = function () {
      var e = this.editor.getContentState().contentApplyRuntime;
      this.ot.push(e.currentRuntime);
    };
    n._handleBeforeInput = function (e) {
      var n = this.editor;
      if (!n.getStatus("isComposing")) {
        if (browserDetectUtils.platformInfo.ios && this._t) {
          this._t = false;
          e.preventDefault();
        }
        var i;
        var r = e.inputType;
        var a = e.data;
        var l = a === undefined ? "" : a;
        var c = e.dataTransfer;
        var s = c === undefined ? null : c;
        var a = typescriptRuntimeHelpers_1.readIterable(e.nativeEvent.getTargetRanges(), 1)[0];
        var c = a ?? ((u = document.getSelection()) === null || u === undefined ? undefined : u.getRangeAt(0));
        var u = r === "deleteContentBackward" || r === "deleteWordBackward" || c && !c.collapsed && r === "insertText" && l === "";
        if (u && this.mt && this.at && (browserDetectUtils.platformInfo.isAndroid || browserDetectUtils.platformInfo.isIOS) || browserDetectUtils.platformInfo.isIOS && r === "deleteWordBackward") {
          if (!n.triggerEditorEvent("deleteWordBackward", e).shouldPrevent) {
            c = ((i = c ? n.selection._toModelRange(c) : null) == null ? undefined : i.toPosition().len) || C;
            i = null;
            if (i = this.at ? this.dt(this.at, true, c) : this.ft(true, c)) {
              this._apply(i, {
                type: M.DeleteBackward
              });
              this._mergeInputRecord();
            }
          }
          e.preventDefault();
          this._t = true;
          return;
        }
        if (l && !browserDetectUtils.platformInfo.mobile && !browserDetectUtils.platformInfo.isIPad && browserDetectUtils.platformInfo.safari && /^\d+\.$/.test(l) && r === "insertText") {
          e.preventDefault();
        } else if (!r.startsWith("delete") && !r.startsWith("deleteBy")) {
          i = getSelection();
          if (!a && (i == null || !i.isCollapsed)) {
            a = i == null ? undefined : i.getRangeAt(0);
          }
          if (P.includes(r)) {
            e.preventDefault();
          }
          i = a && !a.collapsed;
          this.jt(a, i);
          n.callAll("editorWillHandleBeforeInput", {
            event: e
          });
          if (r === "insertText" && l && l.indexOf("\n") > -1 || r === "insertReplacementText" && l || r === "insertReplacementText" && s != null && s.getData("text")) {
            r = n.selection.getSelection();
            n.getContentState().replaceText(r, l || (s == null ? undefined : s.getData("text")) || "");
            e.preventDefault();
            if (browserDetectUtils.platformInfo.isAndroid && !e.nativeEvent.cancelable) {
              this._t = true;
            }
          }
        }
      }
    };
    n._handleInput = function (e) {
      var n;
      var i;
      var r;
      var o = this;
      var a = this.editor;
      if (this._t && browserDetectUtils.platformInfo.ios && a.getStatus("isComposing")) {
        this._t = false;
      } else if (this._t) {
        this._t = false;
        var l = a.selection.getSelection().start;
        a.triggerEditorEvent("_forceRefresh", {
          zoneId: l.zoneId,
          from: "input"
        });
        return;
      }
      if (!["historyUndo", "historyRedo"].includes(e.inputType)) {
        if (!browserDetectUtils.platformInfo.isIPad || e.inputType !== "deleteCompositionText" || a.getStatus("isComposing")) {
          if (!browserDetectUtils.platformInfo.android || !a.getStatus("isComposing") || e.inputType !== "deleteContentBackward" && e.inputType !== "insertCompositionText") {
            if (e.inputType !== "deleteContentBackward") {
              if (browserDetectUtils.platformInfo.isFF && this._isFirefoxCompositionEnded && e.nativeEvent.isComposing === false) {
                this._isFirefoxCompositionEnded = false;
              } else if (!this.editor.getStatus("isComposing") && !E(e.target) && !a.isFocusOnBlock(e.target) && (!browserDetectUtils.platformInfo.isIPad || e.nativeEvent.inputType !== "deleteContentForward")) {
                if (this.st) {
                  window.clearTimeout(this.st);
                  this.st = null;
                }
                this.nt++;
                i = (n = a.selection.getSelection().toPosition()).len;
                e = n.start;
                n = n.zoneId;
                this.editor.log("[Log]", "[Input][_handleInput] selection", JSON.stringify({
                  zoneId: n,
                  start: e,
                  timestamp: Date.now()
                }));
                if (i || !this.C) {
                  this.yt(M.FlushInput);
                } else {
                  this.editor.setStopUpdateSelection(true);
                  this.st = window.setTimeout(function () {
                    o._flushInput();
                  }, this.C);
                }
              }
            } else {
              this._flushInput();
              if ((i = a.selection.getSelection()).isCollapsed()) {
                if ((browserDetectUtils.platformInfo.isIOS || browserDetectUtils.platformInfo.isIPad) && (r = this.ft(true, 1))) {
                  this._apply(r, {
                    type: M.DeleteBackward
                  });
                }
              } else {
                l = (a = i.toPosition()).start;
                i = a.len;
                a = a.zoneId;
                r = new contentStructureDelta.ContentDelta({
                  zoneId: a
                }).retain(l).delete(i);
                this._apply(r, {
                  type: M.DeleteRange
                });
              }
            }
          }
        } else {
          this.ht = true;
        }
      }
    };
    n._flushInput = function (e) {
      this.editor._resetCursorStatus();
      if (!this.editor.getStatus("isComposing") || e) {
        if (this.st) {
          window.clearTimeout(this.st);
          this.editor.setStopUpdateSelection(false);
          this.st = null;
          this.yt(M.FlushInput);
        }
      } else {
        this.editor.log("[Input][_flushInput] _flushInput return in composition");
      }
    };
    n.yt = function (e) {
      var n = this.editor;
      var i = n.selection.getSelection();
      var r = i.start;
      var o = i.end;
      var a = n._getViewModel();
      var l = n.getContentState();
      var c = l.getActiveZone().getZoneId();
      var s = l.getZoneState(c);
      if (s) {
        var u = s.getLine(r.line);
        var d = a.getView(u);
        var f = Number(u.hasLineMarker());
        var l = u.getText();
        var c = l.slice(0, l.length - 1);
        if (this.editor.getFg("isEditorKitDirtDOMRefreshEnabled") && !d) {
          I(this.editor, i, u);
          this.editor.getContentState()._forceRefresh(r.zoneId, [(u == null ? undefined : u.index) || 0], "input");
          return;
        }
        i = (l = editorDomNodeUtils.collectTextNodes(d).join("")).replace(/\n/g, "");
        u = r.offset - f;
        c = o.offset + i.length - c.length - f;
        if (o.line > r.line) {
          s = (f = s.getLine(o.line)).getText() || "";
          p = Number(f.hasLineMarker());
          p = s.slice(0, s.length - 1).length - (o.offset - p);
          if (!n.getContainer().contains(d) || !i) {
            d = a.getView(f);
            u = 0;
          }
          c = browserDetectUtils.platformInfo.isEdge ? i.length : i.length - p;
        }
        var p = l;
        var l = editorDomNodeUtils.collectEditorText(d).join("");
        var d = i.slice(u, c).replace(b, "");
        var c = this._getInheritAttributesAndsetStatus();
        if (p !== l && r.line === o.line) {
          n.setStatus("dangerousInput", true);
          this.Et(d, c, {
            refresh: true,
            type: e
          });
        } else if (d.length === 0 && r.line === o.line && r.offset === o.offset) {
          d = i.substr(u, this.nt);
          this.Et(d, c, {
            overtype: true,
            type: e
          });
        } else {
          this.Et(d, c, {
            overtype: false,
            type: e
          });
        }
        this.nt = 0;
      }
    };
    n._getInheritAttributesAndsetStatus = function () {
      var e = this;
      var n = this.editor.selection.getSelection();
      var i = n.toPosition().zoneId;
      var i = this.editor.pluginManager.call("editorGetInheritAttributes", {}, {
        cb: function (e, n) {
          return n;
        },
        zoneId: i
      });
      var n = this.getInheritAttributes(n, function () {
        e.editor.setStatus("dangerousInput", true);
      });
      return Object.assign({}, n, i);
    };
    n.getInheritAttributes = function (e, n) {
      var i;
      var r;
      var a;
      var l = this.editor;
      var c = l.getContentState();
      var s = l._getInlineAttributesOfPreviousPosition(true, e);
      var u = l._getInlineAttributesOfPreviousPosition(false, e).toMap();
      var d = (e ?? l.selection.getSelection()).toPosition();
      var d = c.getInlineStyleOverride(d);
      var f = {};
      try {
        var h = typescriptRuntimeHelpers_1.values(s);
        var p = h.next();
        for (; !p.done; p = h.next()) {
          var m = typescriptRuntimeHelpers_1.readIterable(p.value, 2);
          var v = m[0];
          var g = m[1];
          var b = this.bt();
          if (b != null && b.test(v) && (((w = c.schema.get(v)) == null ? undefined : w.lineStartInherit) !== false || v in u)) {
            if (w && w.tailInherit === false && l._getInlineAttributesOfNextPosition(e).toMap()[v] !== g) {
              if (w != null && w.refresh && n) {
                n();
              }
              continue;
            }
            f[v] = g;
          }
        }
      } catch (e) {
        y = {
          error: e
        };
      } finally {
        try {
          if (p && !p.done && (i = h.return)) {
            i.call(h);
          }
        } finally {
          if (y) {
            throw y.error;
          }
        }
      }
      var y = l._getInlineAttributesOfNextPosition(e);
      var k = this.bt();
      try {
        var _ = typescriptRuntimeHelpers_1.values(y);
        var E = _.next();
        for (; !E.done; E = _.next()) {
          var w;
          var C = typescriptRuntimeHelpers_1.readIterable(E.value, 2);
          var v = C[0];
          var g = C[1];
          if (k != null && !!k.test(v) && !(v in f)) {
            if ((w = c.schema.get(v)) && w.headInherit) {
              f[v] = g;
            }
          }
        }
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          if (E && !E.done && (a = _.return)) {
            a.call(_);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
      return typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, f), d);
    };
    n.bt = function () {
      if (this.it) {
        return this.it;
      }
      var e;
      var n;
      var i = this.editor.getContentState().schema;
      var r = [];
      try {
        var a = typescriptRuntimeHelpers_1.values(Object.keys(i.schemas));
        var l = a.next();
        for (; !l.done; l = a.next()) {
          var c = l.value;
          if (i.schemas[c].mark) {
            r.push(c);
          }
        }
      } catch (n) {
        e = {
          error: n
        };
      } finally {
        try {
          if (l && !l.done && (n = a.return)) {
            n.call(a);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      if (r.length) {
        this.it = new RegExp(r.join("|"));
        return this.it;
      } else {
        return null;
      }
    };
    n._handleReturnKey = function (e) {
      return null;
    };
    n.dt = function (e, n = true, i = 1) {
      this.editor.log("trace", "[Editor Event] name: " + e.type + ", type: deleteKey");
      var r = Date.now();
      if (r - this.pt < 5) {
        this.editor.error({
          level: errorHandlerUtil.ErrorLevel.ERROR,
          message: "[Editor Error]: delete trigger multiple times in a short period of time."
        });
      }
      this.pt = r;
      this._flushInput();
      var o = this.editor;
      o.triggerEditorEvent(editorEventConstants.editorEventTypes.DELETE_KEY, {
        e: e,
        isBackward: n
      });
      if (e.defaultPrevented) {
        return null;
      }
      var a = o.getContentState();
      var c = a.getActiveZone().getZoneId();
      var s = o.selection.getSelection();
      var f = s.start;
      var h = f.line;
      var m = f.offset;
      var v = s.toPosition();
      var r = v.start;
      var f = v.len;
      var s = {
        evt: e,
        deltaSet: new deltaSetCore.DeltaSet().compose(new contentStructureDelta.ContentDelta({
          zoneId: c
        })),
        editor: o
      };
      if (n) {
        o.pluginManager.call("editorWillDoDeleteKey", s);
      }
      o.callAll("aceDoDeleteKey", {
        editor: o,
        evt: e,
        caretLine: o.selection.getSelection().start.line
      });
      v = [];
      if (f) {
        f = new contentStructureDelta.ContentDelta({
          zoneId: c
        }).retain(r).delete(f);
        f = s.deltaSet.compose(f);
        this._apply(f, {
          type: M.DeleteRange
        });
        v = [true];
      } else if (n) {
        m = {
          editor: this.editor,
          evt: e,
          lineMarker: (a = (a = a.getZoneState(c)) === null || a === undefined ? undefined : a.getLine(h)) === null || a === undefined ? undefined : a.hasLineMarker(),
          zoneId: c,
          theLine: h,
          col: m
        };
        v = o.callAll("editorDoDeleteKey", m);
      }
      if (v.includes(true)) {
        o.callAll("editorAfterDoDeleteKey", {
          editor: o,
          theLine: h,
          evt: e
        });
        return null;
      }
      var g = false;
      s.deltaSet.forEach(function (e) {
        if (e.ops.length > 0) {
          g = true;
        }
      });
      if (g) {
        return s.deltaSet;
      } else if (i = this.ft(n, i)) {
        return s.deltaSet.compose(i);
      } else {
        return null;
      }
    };
    n.ft = function (e, n = 1) {
      var i = this.editor.selection.getSelection();
      var r = this.editor.getContentState();
      var o = i.start;
      var a = o.offset;
      var l = o.zoneId;
      var c = i.toPosition().start;
      var s = new contentStructureDelta.ContentDelta({
        zoneId: l
      });
      var d = i.start.line;
      var f = r.getZoneState(l);
      if (!f) {
        return null;
      }
      var h;
      var o = f.getLine(d);
      var r = Number(o.hasLineMarker());
      var l = i.start.offset === r;
      var f = o.length() - i.start.offset == 1;
      var i = o.nextSibling();
      var o = o.getModelText();
      if (!i && f && !e || l && e && d === 0) {
        return null;
      } else {
        if (e) {
          if (l) {
            s.retain(c - 1 - r).delete(r + 1);
          } else {
            h = typeof n == "function" ? n({
              lineText: o,
              offset: a,
              lineMarker: r
            }) : n;
            s.retain(c - h).delete(h);
          }
        } else if (f) {
          i = Number(i.hasLineMarker());
          s.retain(c).delete(1 + i);
        } else {
          h = typeof n == "function" ? n({
            lineText: o,
            offset: a,
            lineMarker: r
          }) : n;
          s.retain(c).delete(h);
        }
        return s;
      }
    };
    n._handleCompositionEvent = function (e) {
      var n = e.type;
      var i = this.editor;
      if (n === "compositionstart") {
        this._handleCompositionstart(e);
      } else if (n === "compositionupdate") {
        this.wt();
      } else if (n === "compositionend") {
        this.It(e);
      }
      i.callAll("aceCompositionEvent", {
        evt: e,
        editor: i
      });
      e.stopPropagation();
    };
    n._handleCompositionstart = function (e) {
      this.editor.setStatus("isComposing", true);
      var n = (i = e.nativeEvent) === null || i === undefined ? undefined : i.data;
      var i = this.editor.selection.getSelection();
      if (n && n.length > 0 && i.isCollapsed()) {
        r = i.start;
        a = i.end;
        this.editor.selection.setSelection({
          start: typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, r), {
            offset: r.offset - n.length
          }),
          end: a
        });
      } else {
        this.jt();
      }
      var r = this.editor;
      r.callAll("editorWillHandleCompositionStart", {
        event: e
      });
      r.callAll("aceAfterCompositionStart");
      r.setStopUpdateSelection(true);
      n = r.selection.getSelection();
      if (browserDetectUtils.platformInfo.isAndroid && n.isCollapsed()) {
        var a = n.start;
        var e = r._getViewModel();
        var r = r.getContentState().getActiveZone().getLine(a.line);
        this.lt = e.getView(r);
        if (this.editor.getFg("isEditorKitDirtDOMRefreshEnabled") && !this.lt) {
          I(this.editor, n, r);
          this.editor.getContentState()._forceRefresh(a.zoneId, [(r == null ? undefined : r.index) || 0], "input");
          return;
        }
        this.ut = editorDomNodeUtils.collectTextNodes(this.lt).join("").replace(/\n/g, "").length;
        this.ct = n;
      }
    };
    n.qt = function () {
      var e = this.editor;
      var n = e.selection.getSelection();
      var i = n.start;
      var r = e._getViewModel();
      var o = e.getContentState();
      var a = o.getActiveZone();
      var l = a.getZoneId();
      var c = a.getLine(i.line);
      var s = r.getView(c);
      var a = Number(c.hasLineMarker());
      var r = c.getText();
      var d = r.slice(0, r.length - 1);
      if (this.editor.getFg("isEditorKitDirtDOMRefreshEnabled") && !s) {
        I(this.editor, n, c);
        this.editor.getContentState()._forceRefresh(i.zoneId, [(c == null ? undefined : c.index) || 0], "input");
        return;
      }
      var f = editorDomNodeUtils.collectTextNodes(s).join("").replace(/\n/g, "");
      var h = i.offset - a;
      var p = h;
      var v = p = this.ut !== -1 && this.ut < d.length ? h - (d.length - this.ut) : p;
      var g = h - d.length;
      var b = 0;
      for (; b < p; b++) {
        if (d[b] !== f[b]) {
          v = b;
          break;
        }
      }
      for (b = 0; b < d.length - h; b++) {
        if (d[d.length - b - 1] !== f[f.length - b - 1]) {
          g = -b;
          break;
        }
      }
      e.setStatus("dangerousInput", true);
      if ((o = o.rangePointToOffset({
        zoneId: l,
        line: i.line,
        offset: v + a
      })) !== null) {
        i = d.length + g - v;
        a = f.slice(v, f.length + g);
        if (i != 0 || a.length !== 0) {
          a = new contentStructureDelta.ContentDelta({
            zoneId: l
          }).retain(o).delete(i).insert(a, this._getInheritAttributesAndsetStatus());
          this._apply(a, {
            type: M.Composition
          });
        } else {
          e.__handleDOMSelectionChange();
        }
      }
    };
    n.wt = function () {
      var e;
      if (browserDetectUtils.platformInfo.isAndroid && this.lt && (e = editorDomNodeUtils.collectTextNodes(this.lt).join("").replace(/\n/g, "")).length < this.ut) {
        this.ut = e.length;
      }
    };
    n.It = function (e) {
      var n;
      var i;
      if (!browserDetectUtils.platformInfo.isAndroid || this.editor.getStatus("isComposing")) {
        if (browserDetectUtils.platformInfo.isIPad && !this.editor.getStatus("isComposing") && this.ht) {
          this.gt();
          this.ht = false;
          return;
        }
        this.editor.setStatus("isComposing", false);
        if (browserDetectUtils.platformInfo.isFF) {
          this._isFirefoxCompositionEnded = true;
        }
        this.editor.setStopUpdateSelection(false);
        this.lt = null;
        if (E(e.target) || this.editor.isFocusOnBlock()) {
          this.ut = -1;
          this.ct = null;
          return;
        }
        this.editor.callAll("aceBeforeCompositionEnd");
        var r = this.editor.selection.getSelection();
        var a = (d = this.editor.getContentState().getActiveZone()) === null || d === undefined ? undefined : d.getLine(r.start.line);
        if ((!e.data.includes("\n") || e.data.startsWith("\n")) && a && document.contains(a.getNode())) {
          if (browserDetectUtils.platformInfo.isAndroid && r.isCollapsed()) {
            if (deepEqualityCheck_1.deepEqual(r, this.ct)) {
              this.qt();
            }
          } else {
            this.yt(M.Composition);
          }
        } else {
          var l = e.data.split("\n");
          var s = r.toPosition();
          var d = s.zoneId;
          var a = s.start;
          var s = s.len;
          var f = new contentStructureDelta.ContentDelta({
            zoneId: d
          }).retain(a).delete(s).insert(l[0], this.getInheritAttributes());
          try {
            var p = typescriptRuntimeHelpers_1.values(l.slice(1));
            var m = p.next();
            for (; !m.done; m = p.next()) {
              var v = m.value;
              var f = f.insertEnter().insert(v);
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              if (m && !m.done && (i = p.return)) {
                i.call(p);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
          this._apply(f, {
            type: M.Composition
          });
          this.gt();
          this._mergeInputRecord();
        }
        if (browserDetectUtils.platformInfo.isAndroid) {
          this.jt();
        }
        this.ut = -1;
        this.ct = null;
        this.editor.callAll("aceAfterCompositionEnd", {
          evt: e
        });
        e.preventDefault();
      }
    };
    n.gt = function () {
      var e = this.editor.selection.getSelection().start;
      var n = e.zoneId;
      var e = e.line;
      this.editor.getContentState()._forceRefresh(n, [e], "input");
    };
    n.Et = function (e, n = {}, i = {
      refresh: false,
      overtype: false,
      type: M.FlushInput
    }) {
      var r;
      var o;
      var a;
      var l;
      var c;
      var s;
      var d;
      var f = this.editor;
      if (!!e || !f.selection.getSelection().isCollapsed()) {
        o = (r = f.getContentState().getActiveZone()).getZoneId();
        l = (d = (a = f.selection.getSelection()).toPosition()).start;
        s = c = d.len;
        d = a.start.line;
        if (d = r.getLine(d)) {
          f.getContentState()._clearInlineStyleOverride(a.toPosition());
          if (c > 0 || d != null && d.isEmpty()) {
            f.setStatus("dangerousInput", true);
          }
          if (c === 0 && i.overtype) {
            s = e.length;
          }
          n = new contentStructureDelta.ContentDelta({
            zoneId: o
          }).retain(l).delete(s).insert(e, n);
          this._apply(n, {
            type: i.type
          });
          this._mergeInputRecord();
        }
      }
    };
    n.jt = function (e, n) {
      if ((e = e || getSelection() || undefined) && (e = this.editor.selection._toModelRange(e)) && !editorRangeZoneClass.EditorRangeZone.isRangeEqual(this.editor.selection.getSelection(), e)) {
        this.editor.selection.setSelection(e, n);
      }
    };
    n._apply = function (e, n) {
      return this.editor.getContentState().apply(e, n);
    };
    n.destroy = function () {
      this._flushInput();
    };
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleMouseDown", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleContentChange", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleBeforeInput", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleInput", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleCompositionEvent", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleCompositionstart", null);
    return e;
  }();
  require.d(exports, {
    InputActionTypes: function () {
      return M;
    },
    EditorInputHandler: function () {
      return N;
    }
  });
}