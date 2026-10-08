// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'EditorComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13032.fea06b08.js
         * chunkId: 13032
         * moduleId: 704772
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var errorHandlerUtil = require("error-handler-util") /*id: 161088*/;
  var autoBindMethodDescriptor = require("auto-bind-method-descriptor") /*id: 969612*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var browserDetectUtils = require("browser-detect-utils") /*id: 749406*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  var editorPositionClass = require("editor-position-class") /*id: 77106*/;
  var elementJsonSerializer = require("element-json-serializer") /*id: 39786*/;
  function g(e, t) {
    t = function (e, t = false) {
      var e = e.parentElement;
      var n = [];
      var i = document.scrollingElement || document.documentElement;
      if (!t && e) {
        i = e;
      }
      for (var o = e; o && o !== i;) {
        if (o.offsetHeight < o.scrollHeight || o.offsetWidth < o.scrollWidth) {
          n.push([o, o.scrollTop, o.scrollLeft]);
        }
        o = o.parentElement;
      }
      n.push([i, i.scrollTop, i.scrollLeft]);
      return n;
    }(e, t = t !== undefined && t);
    e.focus({
      preventScroll: true
    });
    (function (e) {
      for (var t = 0; t < e.length; t++) {
        e[t][0].scrollTop = e[t][1];
        e[t][0].scrollLeft = e[t][2];
      }
      e = [];
    })(t);
  }
  var unicodeCharLengthUtils = require("unicode-char-length-utils") /*id: 832308*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var editorDomNodeUtils = require("editor-dom-node-utils") /*id: 978010*/;
  var editorRangeClass = require("editor-range-class") /*id: 172613*/;
  var C = function () {
    function e(e) {
      var t = e.editor;
      var e = e.range;
      this.fn = [];
      this.Sn = [];
      this.En = 0;
      this.bn = null;
      this.s = t;
      if (e) {
        this.fn.push(e);
        this.Sn.push(e);
      }
    }
    var t = e.prototype;
    Object.defineProperty(t, "range", {
      get: function () {
        return this.fn[0];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "prevRange", {
      get: function () {
        return this.Sn[0];
      },
      enumerable: false,
      configurable: true
    });
    t.yn = function (e, t) {
      this.En = e;
      this.bn = t;
    };
    t.gn = function () {
      this.yn(0, null);
    };
    t.qn = function (e) {
      return e && ((e = this.s.getContentState().getZoneState(e)) === null || e === undefined ? undefined : e.getContainer()) || null;
    };
    t.focus = function (e, t = false, n = false) {
      var i = (o = this.range) === null || o === undefined ? undefined : o.start.zoneId;
      var o = false;
      if (typeof (e = e !== undefined && e) == "boolean") {
        o = e;
        n = t;
      } else {
        i = e;
        o = t;
      }
      if (!!i && (!!n || !this.hasFocus(i))) {
        if (i = this.qn(i)) {
          g(i, o);
          this.setSelection(this.fn, true);
        }
      }
    };
    t.hasFocus = function (e) {
      var t = e ?? ((t = this.range) === null || t === undefined ? undefined : t.start.zoneId);
      return !!t && this.s.isFocus(t);
    };
    t.getSelection = function (e, t) {
      var n = this.range;
      if (typeof e == "string") {
        n = this.fn.find(function (t) {
          return t.start.zoneId === e;
        }) || null;
      } else {
        t = e;
      }
      t = t || this.s.getContentState();
      if (n && t.getZoneState(n.start.zoneId)) {
        return n.clone(t);
      } else {
        return n;
      }
    };
    t.getMultipleSelection = function () {
      var e = this;
      return this.fn.map(function (t) {
        if (e.s.getContentState().getZoneState(t.start.zoneId)) {
          return t.clone();
        } else {
          return t;
        }
      });
    };
    t.isZoneInSelection = function (e) {
      var t = false;
      var n = 0;
      var i = this.fn.length;
      for (; n < i; ++n) {
        if (this.fn[n].start.zoneId === e) {
          t = true;
          break;
        }
      }
      return t;
    };
    t.Mn = function (e) {
      var t = this.s;
      var n = this.s.modulesContainer.get(editorModuleConstants.editorModuleConsts.Range);
      var o = null;
      switch (typeof e.start) {
        case "number":
          o = new editorPositionClass.EditorPosition(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), {
            editor: t
          })).toRange();
          break;
        case "object":
          o = new n(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), {
            editor: t
          }));
      }
      return o;
    };
    t.wn = function (e) {
      return new (this.s.modulesContainer.get(editorModuleConstants.editorModuleConsts.Range))({
        editor: this.s,
        start: this.pn(e.start),
        end: this.pn(e.end),
        isBackward: e.isBackward
      });
    };
    t._replaceSingleRangeModel = function (e, t = false) {
      var n;
      var i = this.Mn(e);
      if (i) {
        if (e = (n = this.fn.findIndex(function (e) {
          return e.start.zoneId === (i == null ? undefined : i.start.zoneId);
        })) === -1 ? null : this.fn[n]) {
          this.Sn = this.fn;
          if (!!t || !editorRangeClass.EditorRange.isRangeEqual(e, i)) {
            i = this.wn(i);
            (e = this.fn.slice(0))[n] = i;
            this.fn = e;
          }
        }
      }
    };
    t._setSelectionModel = function (e, t) {
      var n;
      var o;
      var r = this;
      if (t === undefined) {
        t = false;
      }
      var e = Array.isArray(e) ? e : [e];
      var s = [];
      try {
        var l = typescriptRuntimeHelpers_1.values(e);
        var a = l.next();
        for (; !a.done; a = l.next()) {
          var u = a.value;
          var d = this.Mn(u);
          if (d) {
            s.push(d);
          }
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          if (a && !a.done && (o = l.return)) {
            o.call(l);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      this.Sn = this.fn;
      if (!!t || !editorRangeClass.EditorRange.isRangesEqual(this.fn, s)) {
        s = s.map(function (e) {
          return r.wn(e);
        });
        this.fn = s;
      }
    };
    t.setSelection = function (e, t) {
      this.s.log({
        scope: "[Selection][setSelection]",
        level: "info",
        shouldLogToMobile: false,
        force: t = t !== undefined && t,
        sel: e,
        range: this.fn,
        stack: Error().stack
      });
      this._setSelectionModel(e);
      this._dispatchEvent(t);
      if (t) {
        this.updateBrowserSelection();
      }
    };
    t._dispatchEvent = function (e) {
      var t = this.fn;
      var n = this.Sn;
      if (!!e || !editorRangeClass.EditorRange.isRangesEqual(n, t)) {
        if (this.range) {
          this.s.call(editorEventConstants.editorEventTypes.SELECTION_CHANGE, {
            previousRanges: n,
            currentRanges: t,
            previous: this.prevRange,
            current: this.range,
            attributes: this.s.getContentState().getAttributes(this.range.start, this.range.end)
          });
        }
      }
    };
    t.updateBrowserSelection = function (e) {
      this.s.log({
        scope: "[Selection][updateBrowserSelection]",
        level: "info",
        shouldLogToMobile: false,
        updateDomSelectionTimes: this.En,
        force: e,
        ranges: this.fn
      });
      if (this.range && !(this.fn.length > 1)) {
        var t = this.range.toPosition();
        var n = this.s.getContentState().getZoneState(t.zoneId);
        var i = browserDetectUtils.platformInfo.safari && n && t.len === n.totalWidth() - 1 - ((i = n.getLine(0)) !== null && i !== undefined && i.hasLineMarker() ? 1 : 0);
        if (e || !this.s.getStatus("isMouseDown") || i) {
          if (i = this._toDOMRange(this.range)) {
            try {
              this._updateDOMSelection(i);
            } catch (e) {
              this.s.error({
                message: "[Selection][updateBrowserSelection] range:" + this.range + " _updateDOMSelection occur error",
                level: errorHandlerUtil.ErrorLevel.ERROR
              });
            }
            this.s.call(editorEventConstants.editorEventTypes.SELECTION_CHANGE_AND_DOM_UPDATE, {
              selection: this.range
            });
          } else {
            this.s.error({
              message: "[Selection][updateBrowserSelection] range:" + this.range + " _toDOMRange faild",
              level: errorHandlerUtil.ErrorLevel.ERROR
            });
          }
        }
      }
    };
    t.selectAll = function (e = zeroConstantModule_1.versionValue) {
      var t;
      var n;
      var i = this.s.getContentState().getZoneState(e);
      if (i) {
        t = i.getLine(0);
        if ((n = i.getLine(i.length() - 1)) && t) {
          e = new (this.s.modulesContainer.get(editorModuleConstants.editorModuleConsts.Range))({
            editor: this.s,
            start: {
              line: 0,
              offset: +!!t.hasLineMarker(),
              zoneId: e
            },
            end: {
              line: i.length() - 1,
              offset: n.length() - 1,
              zoneId: e
            }
          });
          this.s.log({
            scope: "[Selection][selectAll]",
            level: "info",
            shouldLogToMobile: false,
            range: e,
            stack: Error().stack
          });
          this.setSelection(e);
          this.updateBrowserSelection();
        }
      }
    };
    t.isSelectingAll = function (e = zeroConstantModule_1.versionValue) {
      var t = this.getSelection(e);
      if (!t) {
        return false;
      }
      var n = t.start;
      var i = t.end;
      var r = this.s.getContentState().getZoneState(e);
      return !!r && (t = r.length() - 1, e = r.getLine(0), !!(r = r.getLine(t)) && !!e && n.line === 0 && n.offset === +!!e.hasLineMarker() && i.line === t && i.offset === r.length() - 1);
    };
    t.pn = function (e) {
      var t = this.s;
      var n = e.zoneId;
      var t = t.getContentState().getZoneState(n);
      if (t) {
        n = t.length() - 1;
        e.line = Math.max(0, e.line);
        if (e.line > n) {
          e.line = n;
          e.offset = t.getLine(n).getModelText().length - 1;
        }
        t = t.getLine(e.line);
        e.offset = Math.min(t.getModelText().length - 1, e.offset);
        if (e.offset <= 0) {
          e.offset = +!!t.hasLineMarker();
        }
      }
      return e;
    };
    t._handleDOMSelectionChange = function () {
      var e;
      var t;
      var n;
      var i;
      var o = window.getSelection();
      if (o !== null) {
        this.s.log({
          scope: "[Selection][_handleDOMSelectionChange]",
          level: "info",
          shouldLogToMobile: false,
          sel: o
        });
        if (browserDetectUtils.platformInfo.ios && o.focusNode === null && this.s.isFocus()) {
          this.s.setStopUpdateSelection(false);
          this.setSelection(this.getSelection(), true);
        }
        if (!this.s.getStatus("stopUpdateSelection")) {
          if (t = editorDomNodeUtils.getRangeFromSel(o, 0)) {
            n = t.startContainer;
            i = t.endContainer;
            e = t.collapsed;
            if (!!(t = this.s.getContainer()).contains(n) && (!!e || !!t.contains(i)) && (!editorDomNodeUtils.hasFakeText(n) || !editorDomNodeUtils.hasFakeText(i))) {
              if (n = this._toModelRange(o)) {
                i = !browserDetectUtils.platformInfo.isAndroid || !!n.isCollapsed();
                if (!this.s.getStatus("isMouseDown")) {
                  o = n.toPosition();
                  this.s.log("[Log]", "[Selection][_handleDOMSelectionChange] selection", JSON.stringify({
                    zoneId: o.zoneId,
                    start: o.start,
                    timestamp: Date.now()
                  }));
                }
                this.setSelection(n, i);
              }
            }
          }
        }
      }
    };
    t.toDOMRange = function (e, t) {
      return this._toDOMRange(e, t = t === undefined ? {
        ignoreNormalize: false
      } : t);
    };
    t._toDOMRange = function (e, t = {
      ignoreNormalize: false
    }) {
      var n = e.start;
      var i = e.end;
      var n = this.In(n);
      var i = this.In(i);
      if (n.node && i.node) {
        if (t.ignoreNormalize) {
          return editorDomNodeUtils.createRangeFrom(n, i);
        } else {
          e = (i = this.Tn(n, i, e)).start;
          i = i.end;
          return editorDomNodeUtils.createRangeFrom(e, i);
        }
      } else {
        return null;
      }
    };
    t.Tn = function (e, t, n) {
      var o = e.node;
      var r = e.offset;
      var s = t.node;
      var l = t.offset;
      var a = n.start;
      var d = n.end;
      var c = editorDomNodeUtils.hasFakeText(o);
      var h = editorDomNodeUtils.hasFakeText(s);
      var f = ((g = editorDomNodeUtils.getFakeTextAttr(o)) === null || g === undefined ? undefined : g.length) || 0;
      var g = ((v = editorDomNodeUtils.getFakeTextAttr(s)) === null || v === undefined ? undefined : v.length) || 0;
      var v = editorDomNodeUtils.hasZeroSpaceAttr(o);
      if (!c && !h && o && o === s && e.offset === t.offset && (C = o instanceof Element ? o : o.parentElement) && C.closest("[" + editorConstantsKeycodes.dataEnter + "]")) {
        var p = {
          node: C,
          offset: ((p = C == null ? undefined : C.textContent) === null || p === undefined ? undefined : p.length) || 0
        };
        return {
          start: p,
          end: p
        };
      }
      if (c && editorDomNodeUtils.hasZeroSpaceNode(o) && o === s && a < d || c && r === 0 && editorDomNodeUtils.hasZeroSpaceNode(o) && h && l === g && editorDomNodeUtils.hasZeroSpaceNode(s)) {
        return {
          start: e,
          end: t
        };
      }
      if (c && h && o !== s && !editorDomNodeUtils.hasZeroSpaceNode(o) && !editorDomNodeUtils.hasZeroSpaceNode(s)) {
        var p = this.Cn(a.zoneId, a.line);
        var m = this.Cn(d.zoneId, d.line);
        return {
          start: this.Dn(e, p, 1),
          end: this.Dn(t, m, 1)
        };
      }
      if (n.isCollapsed() && c && r === f) {
        var C;
        var S = this.Cn(a.zoneId, a.line);
        if ((C = (E = this.Dn(e, S, 1)).node instanceof Element ? E.node : (m = E.node) === null || m === undefined ? undefined : m.parentElement) && C.closest("[" + editorConstantsKeycodes.dataEnter + "]")) {
          E.offset = 1;
        }
        return {
          start: E,
          end: E
        };
      }
      if (n.isCollapsed() && c && r === 0) {
        S = this.Cn(a.zoneId, a.line);
        return {
          start: E = this.Dn(e, S, -1),
          end: E
        };
      }
      if (c && h && o !== s && n.isBackward) {
        var E;
        var S = this.Cn(d.zoneId, d.line);
        return {
          start: e,
          end: E = this.Dn(t, S, 1)
        };
      }
      if (v && h && (o == null ? undefined : o.nextSibling) === s && editorDomNodeUtils.findZeroSpaceNode(s) && !this.s.getStatus("isMouseDown")) {
        return {
          start: typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, t), {
            offset: 0
          }),
          end: t
        };
      } else if (c && r === 0) {
        S = this.Cn(a.zoneId, a.line);
        return {
          start: this.Dn(e, S, -1),
          end: t
        };
      } else if (h && l === 0) {
        S = this.Cn(d.zoneId, d.line);
        return {
          start: e,
          end: this.Dn(t, S, -1)
        };
      } else if (c && r === f && h && n.toPosition().len <= (((s = editorDomNodeUtils.getFakeTextAttr(s)) === null || s === undefined ? undefined : s.length) || 0)) {
        return {
          start: typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, t), {
            offset: 0
          }),
          end: t
        };
      } else if (c && r === f) {
        S = this.Cn(a.zoneId, a.line);
        return {
          start: this.Dn(e, S, 1),
          end: t
        };
      } else if (h && l === g) {
        S = this.Cn(d.zoneId, d.line);
        return {
          start: e,
          end: this.Dn(t, S, 1)
        };
      } else {
        return {
          start: e,
          end: t
        };
      }
    };
    t.Dn = function (e, t, n) {
      var o;
      var r;
      var s = e.node;
      if (!t || !(s instanceof Element)) {
        return e;
      }
      var l = editorDomNodeUtils.queryEditorNodes(t);
      var a = l.indexOf(s);
      var a = l[a + n] || s;
      if (a.hasAttribute(editorConstantsKeycodes.dataFakeText_1)) {
        var s = editorDomNodeUtils.findZeroSpaceNode(a);
        if (s) {
          return {
            node: s,
            offset: !(n > 0) && ((s = s.textContent) === null || s === undefined ? undefined : s.length) || 0
          };
        } else {
          return this.Dn(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), {
            node: a
          }), t, 1);
        }
      }
      if (browserDetectUtils.platformInfo.safari && a.hasAttribute(editorConstantsKeycodes.dataZeroSpace) && (o = a.nextElementSibling) !== null && o !== undefined && o.hasAttribute(editorConstantsKeycodes.dataFakeText_1)) {
        return {
          node: a,
          offset: ((r = a.textContent) === null || r === undefined ? undefined : r.length) || 0
        };
      } else if (a.closest("[" + editorConstantsKeycodes.dataEnter + "]")) {
        if (browserDetectUtils.platformInfo.safari) {
          return {
            node: a,
            offset: 0
          };
        } else {
          return {
            node: a,
            offset: ((r = a.textContent) === null || r === undefined ? undefined : r.length) || 0
          };
        }
      } else {
        return {
          node: a,
          offset: !(n > 0) && ((a = a.textContent) === null || a === undefined ? undefined : a.length) || 0
        };
      }
    };
    t.In = function (e) {
      var t = e.zoneId;
      var n = e.line;
      var i = e.offset;
      var e = this.Cn(t, n);
      if (e && (n = (t = this.s.getContentState().getZoneState(t)) === null || t === undefined ? undefined : t.getLine(n))) {
        return this.Ln(e, Math.max(i - (n != null && n.hasLineMarker() ? 1 : 0), 0));
      } else {
        return {
          node: null,
          offset: 0
        };
      }
    };
    t.Ln = function (e, t) {
      if (editorDomNodeUtils.isTextNode(e)) {
        return {
          node: e,
          offset: t
        };
      }
      if (!e || !e.querySelectorAll) {
        return {
          node: e,
          offset: 0
        };
      }
      var n = editorDomNodeUtils.queryEditorNodes(e);
      var o = 0;
      try {
        var r = typescriptRuntimeHelpers_1.values(n);
        var s = r.next();
        for (; !s.done; s = r.next()) {
          var l;
          var a;
          var h;
          var g;
          var v = s.value;
          var p = v.textContent?.length || 0;
          if (v.hasAttribute(editorConstantsKeycodes.dataFakeText_1)) {
            p = (g = v.getAttribute(editorConstantsKeycodes.dataFakeText_1)) ? Math.min(g.length, t - o) : 0;
          }
          if (!((o += p = v.hasAttribute(editorConstantsKeycodes.dataZeroSpace) ? 0 : p) < t)) {
            if (browserDetectUtils.platformInfo.safari && v.hasAttribute(editorConstantsKeycodes.dataZeroSpace) && (h = v.nextElementSibling) !== null && h !== undefined && h.hasAttribute(editorConstantsKeycodes.dataFakeText_1)) {
              return {
                node: v,
                offset: v.textContent?.length || 0
              };
            } else {
              return {
                node: v,
                offset: Math.max(p + t - o, 0)
              };
            }
          }
        }
      } catch (e) {
        l = {
          error: e
        };
      } finally {
        try {
          if (s && !s.done && (a = r.return)) {
            a.call(r);
          }
        } finally {
          if (l) {
            throw l.error;
          }
        }
      }
      return {
        node: e,
        offset: 0
      };
    };
    t.Cn = function (e, t) {
      var n;
      var r;
      var s;
      var l;
      var a = this.s._getViewModel();
      var d = (s = this.s.getContentState().getZoneState(e)) === null || s === undefined ? undefined : s.getLine(t);
      if (!d) {
        return null;
      }
      if (a = a.getView(d)) {
        return a;
      }
      var c = e === zeroConstantModule_1.versionValue ? this.s.getContainer() : document.querySelector("[data-zone-id=\"" + e + "\"]");
      var e = Array.from((c == null ? undefined : c.querySelectorAll(".ace-line,[" + editorConstantsKeycodes.dataVirtualListPlaceholder + "]")) || []).filter(function (e) {
        return e.closest("[" + editorConstantsKeycodes.dataZoneContainer + "]") === c;
      });
      var h = 0;
      try {
        var f = typescriptRuntimeHelpers_1.values(e);
        var g = f.next();
        for (; !g.done; g = f.next()) {
          var v = g.value;
          if (h > d.index) {
            return null;
          }
          if (h === d.index) {
            if (v.hasAttribute(editorConstantsKeycodes.dataVirtualListPlaceholder)) {
              return null;
            } else {
              return v;
            }
          }
          var p = ((l = v.getAttribute(editorConstantsKeycodes.dataVirtualListPlaceholder)) === null || l === undefined ? undefined : l.split("-").map(function (e) {
            return +e;
          })) || [];
          if (p.length) {
            h += p[1] - p[0] + 1;
          } else {
            h++;
          }
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          if (g && !g.done && (r = f.return)) {
            r.call(f);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      return null;
    };
    t.On = function (e) {
      var t = e.start;
      var n = e.end;
      var i = e.isBackward;
      var o = e.zoneId;
      var s = this._toModelRangePoint(t, false, o);
      var e = this._toModelRangePoint(n, true, o);
      if (!s || !e) {
        this.s.error({
          message: "[Selection][_calcModelRangeFromDom] startPoint: " + s + ", endPoint: " + e,
          level: errorHandlerUtil.ErrorLevel.ERROR
        });
        return null;
      }
      if (!o && s.zoneId !== e.zoneId && !this.s._isFixToCommonZone) {
        return null;
      }
      if (o && s.zoneId !== e.zoneId) {
        if (!(t = this.s.getContentState().getZoneState(o)) || (n = t.length() - 1, !(t = t.getLine(n)))) {
          return null;
        }
        if (o === s.zoneId) {
          e = {
            line: n,
            offset: t.length() - 1,
            zoneId: o
          };
        } else if (o === e.zoneId) {
          s = {
            line: 0,
            offset: 0,
            zoneId: o
          };
        } else {
          s = {
            line: 0,
            offset: 0,
            zoneId: o
          };
          e = {
            line: n,
            offset: t.length() - 1,
            zoneId: o
          };
        }
      }
      return new (this.s.modulesContainer.get(editorModuleConstants.editorModuleConsts.Range))({
        start: s,
        end: e,
        isBackward: i,
        editor: this.s
      });
    };
    t.toModelRange = function (e, t) {
      return this._toModelRange(e, t);
    };
    t._toModelRange = function (e, t) {
      var n = false;
      if (function (e) {
        var t = Object.prototype.toString.call(e);
        if (t) {
          var n = t.split(" ")[1];
          if (n) {
            return n.slice(0, -1).toLowerCase();
          }
        }
        return "";
      }(e) === "selection") {
        var i = e.anchorNode;
        var o = e.anchorOffset;
        var r = e.focusNode;
        var s = e.focusOffset;
        var l = editorDomNodeUtils.getRangeFromSel(e, 0);
        if (!l) {
          return null;
        }
        var a = (e = l).startContainer;
        var u = e.startOffset;
        var d = e.endContainer;
        var l = e.endOffset;
        var n = i !== a || r !== d || o !== u || s !== l;
      }
      d = e.startContainer;
      o = e.startOffset;
      u = e.endContainer;
      s = e.endOffset;
      if ((l = this.On({
        start: {
          node: d,
          offset: o
        },
        end: {
          node: u,
          offset: s
        },
        isBackward: n,
        zoneId: t
      })) != null && l.isCollapsed() && !e.collapsed) {
        s = (u = this.Tn({
          node: d,
          offset: o
        }, {
          node: u,
          offset: s
        }, l)).start;
        u = u.end;
        l = this.On({
          start: s,
          end: u,
          isBackward: n,
          zoneId: t
        });
      }
      return l;
    };
    t._toModelRangePoint = function (e, t = false, n) {
      var o;
      var r;
      var s;
      var l = editorDomNodeUtils.adjustRangeOffset(e);
      var a = l.node;
      var d = l.offset;
      var l = editorDomNodeUtils.findClosestNode(a);
      if (!a || !l || !editorDomNodeUtils.getViewModelLine(this.s, l, t)) {
        if (!n) {
          return null;
        }
        var c = this.s.getContentState().getZoneState(n);
        if (!c) {
          return null;
        }
        var h = c.length() - 1;
        var g = c.getLine(h);
        if (g) {
          if (t) {
            return {
              line: h,
              offset: g.length() - 1,
              zoneId: n
            };
          } else {
            return {
              line: 0,
              offset: 0,
              zoneId: n
            };
          }
        } else {
          return null;
        }
      }
      h = (c = editorDomNodeUtils.getViewModelLine(this.s, l, t)).getZoneId();
      g = c.index;
      n = 0;
      if (l = a instanceof HTMLElement ? editorDomNodeUtils.hasFakeTextSel(a) : editorDomNodeUtils.hasFakeTextSel(a.parentElement)) {
        d = 0;
      }
      if (l && t) {
        n = ((v = l.getAttribute(editorConstantsKeycodes.dataFakeText_1)) === null || v === undefined ? undefined : v.length) || 0;
      }
      var v = editorDomNodeUtils.isVoidNode(a);
      if (v) {
        n = d = 0;
        l = v;
      }
      if (!(l = l || (a instanceof HTMLElement ? a.closest("[" + editorConstantsKeycodes.dataString + "]") : (p = a.parentElement) === null || p === undefined ? undefined : p.closest("[" + editorConstantsKeycodes.dataString + "]")))) {
        var p = editorDomNodeUtils.cleanRangeContent(e);
        var e = p ? editorDomNodeUtils.getCleanTextLen(p) : 0;
        if (p && e) {
          var m = Array.from(p.querySelectorAll("[" + editorConstantsKeycodes.dataZeroSpace + "]"));
          if (m.length) {
            try {
              var C = typescriptRuntimeHelpers_1.values(m);
              var S = C.next();
              for (; !S.done; S = C.next()) {
                var E = S.value;
                if ((s = E.textContent) !== null && s !== undefined && s.length) {
                  this.s.log("trace", {
                    zerospacesLength: m.length,
                    domInfo: elementJsonSerializer.serializeElement(E)
                  });
                }
              }
            } catch (e) {
              o = {
                error: e
              };
            } finally {
              try {
                if (S && !S.done && (r = C.return)) {
                  r.call(C);
                }
              } finally {
                if (o) {
                  throw o.error;
                }
              }
            }
          }
        }
        return {
          line: g,
          offset: Math.max(e = e + +!!c.hasLineMarker() + n, 0),
          zoneId: h
        };
      }
      if (l.hasAttribute(editorConstantsKeycodes.dataEnter)) {
        d = 0;
      }
      return {
        line: g,
        offset: Math.max(c = (l && ((l = this.s._getViewModel().getLeafModel(l)) === null || l === undefined ? undefined : l.start) || 0) + d + n + +!!c.hasLineMarker(), 0),
        zoneId: h
      };
    };
    t._updateDOMSelection = function (e) {
      var t = this;
      var n = e.startContainer;
      var i = e.startOffset;
      var o = e.endContainer;
      var r = e.endOffset;
      var s = document.getSelection();
      this.s.log({
        scope: "[Selection][_updateDOMSelection]",
        level: "info",
        shouldLogToMobile: false,
        selection: s,
        preDomSelection: this.bn,
        updateDomSelectionTimes: this.En
      });
      if (this.En >= 100 && this.bn !== null && this.bn === s) {
        this.En;
        this.range;
        if (this.En === 100) {
          setTimeout(function () {
            t.gn();
          }, 200);
        }
        this.En++;
        return;
      }
      if (s !== null) {
        if (n === null || o === null) {
          s.removeAllRanges();
          this.s.getContainer().blur();
          this.gn();
          return;
        }
        if (!this.hasFocus()) {
          if (u = this.qn((a = this.range) === null || a === undefined ? undefined : a.start.zoneId)) {
            g(u);
          }
        }
        var l;
        var a = editorDomNodeUtils.getRangeFromSel(s, 0);
        if (a && this.Pn(e, a)) {
          this.gn();
        } else {
          if (s.anchorNode !== s.baseNode || s.focusNode !== s.extentNode) {
            var u = editorDomNodeUtils.compareSelRange(s, a) ? {
              startContainer: s.extentNode,
              startOffset: s.extentOffset,
              endContainer: s.baseNode,
              endOffset: s.baseOffset
            } : {
              startContainer: s.baseNode,
              startOffset: s.baseOffset,
              endContainer: s.extentNode,
              endOffset: s.extentOffset
            };
            if (this.Pn(e, u)) {
              this.gn();
              return;
            }
          }
          this.yn(this.En + 1, s);
          if (s.collapse && s.extend) {
            if (n === o && i === r) {
              s.collapse(n, i);
            } else if ((l = this.range) !== null && l !== undefined && l.isBackward) {
              s.collapse(o, r);
              s.extend(n, i);
            } else {
              s.collapse(n, i);
              s.extend(o, r);
            }
          } else {
            (l = document.createRange()).setStart(n, i);
            l.setEnd(o, r);
            s.removeAllRanges();
            s.addRange(l);
          }
        }
      } else {
        this.gn();
      }
    };
    t.Pn = function (e, t) {
      return e.startContainer === t.startContainer && e.endContainer === t.endContainer && e.startOffset === t.startOffset && e.endOffset === t.endOffset;
    };
    t.An = function (e, t, n, i) {
      var o = this.Cn(e.zoneId, e.line);
      if (!o) {
        return 0;
      }
      var e = t.hasAttribute(editorConstantsKeycodes.dataZeroSpace) || t.hasAttribute(editorConstantsKeycodes.dataEnter);
      var r = i ? (r = t.textContent) === null || r === undefined ? undefined : r.slice(n) : (s = t.textContent) === null || s === undefined ? undefined : s.slice(0, n);
      var s = i ? 1 : -1;
      var n = 0;
      if (r && r.length && !e) {
        n = (i ? unicodeCharLengthUtils.getFirstCharLength : unicodeCharLengthUtils.getLastCharLength)(r);
      } else {
        o = editorDomNodeUtils.queryEditorNodes(o);
        t = editorDomNodeUtils.hasFakeTextSel(t) || t;
        var t = o.indexOf(t);
        var o = i ? o.slice(t + 1).find(function (e) {
          return !editorDomNodeUtils.hasZeroSpaceAttr(e);
        }) : o.slice(0, t).reverse().find(function (e) {
          return !editorDomNodeUtils.hasZeroSpaceAttr(e);
        });
        if (!o) {
          return s;
        }
        n = editorDomNodeUtils.hasFakeTextSel(o) ? ((t = editorDomNodeUtils.getFakeTextAttr(o)) === null || t === undefined ? undefined : t.length) || 1 : (o = o.textContent || "", (i ? unicodeCharLengthUtils.getFirstCharLength : unicodeCharLengthUtils.getLastCharLength)(o));
      }
      return s * Math.max(n, 1);
    };
    t.kn = function (e) {
      var t = typescriptRuntimeHelpers_1.assign({}, e);
      var n = e.zoneId;
      var o = e.line;
      var r = e.offset;
      var s = this.s.getContentState().getZoneState(n);
      if (!s) {
        return e;
      }
      var l = s.getLine(o);
      if (!l) {
        return e;
      }
      var a = +!!l.hasLineMarker();
      var u = l.length() - 1;
      var n = (l = this.s.virtualListManager) === null || l === undefined ? undefined : l.getVirtualListModuleOfZone(n);
      var d = n == null ? undefined : n.getInvisibleLinesModule();
      if (r < a) {
        if (o > 0) {
          while (t.line--, d != null && d.isInvisible(t.line));
          if (!(n = s.getLine(t.line))) {
            return e;
          }
          t.offset = n.length() - 1;
        } else {
          t.offset = a;
        }
      }
      if (u < r) {
        if (o < s.length() - 1) {
          while (t.line++, d != null && d.isInvisible(t.line));
          t.offset = (s = s.getLine(t.line)) !== null && s !== undefined && s.hasLineMarker() ? 1 : 0;
        } else {
          t.offset = u;
        }
      }
      return t;
    };
    t.handleArrowKey = function (e) {
      var t;
      var n;
      var o;
      var r;
      var s;
      var l;
      var a;
      var c;
      var h;
      var f;
      var g;
      var v;
      var C;
      var S;
      var E;
      var b;
      var _;
      var M;
      var I = e.evt;
      var w = I.keyCode;
      var L = I.shiftKey;
      var R = I.metaKey;
      var x = I.altKey;
      var N = I.ctrlKey;
      if (I.type === "keydown") {
        t = w === editorConstantsKeycodes.KeyCode.Right || browserDetectUtils.platformInfo.isMac && N && w === editorConstantsKeycodes.KeyCode.F;
        if ((!!(E = w === editorConstantsKeycodes.KeyCode.Left || browserDetectUtils.platformInfo.isMac && N && w === editorConstantsKeycodes.KeyCode.B) || !!t) && !R && !this.s.getStatus("stopUpdateSelection") && !(this.fn.length > 1) && (C = window.getSelection()) !== null) {
          if (f = editorDomNodeUtils.getRangeFromSel(C, 0)) {
            g = f.startContainer;
            n = f.startOffset;
            v = f.endContainer;
            o = f.endOffset;
            r = f.collapsed;
            l = (s = g instanceof Element ? g : g.parentElement) == null ? undefined : s.hasAttribute(editorConstantsKeycodes.dataZeroSpace);
            b = editorDomNodeUtils.getNextFakeText(s, n);
            c = (a = v instanceof Element ? v : v.parentElement) == null ? undefined : a.hasAttribute(editorConstantsKeycodes.dataZeroSpace);
            h = editorDomNodeUtils.getNextFakeText(v, o);
            _ = (S = this.getSelection()).start;
            e = S.end;
            R = S.isBackward;
            g = (f = (C = this.s.getContentState()).getZoneState(_.zoneId)) === null || f === undefined ? undefined : f.getLine(_.line);
            S = (v = C.getZoneState(e.zoneId)) === null || v === undefined ? undefined : v.getLine(e.line);
            f = _.offset === ((g == null ? undefined : g.length()) || 0) - 1;
            v = _.offset === Number(g == null ? undefined : g.hasLineMarker());
            g = e.offset === ((S == null ? undefined : S.length()) || 0) - 1;
            this.s.log({
              scope: "[Selection][handleArrowKey]",
              level: "info",
              shouldLogToMobile: false,
              keyCode: w,
              selection: this.getSelection(),
              isStartInZeroSpace: l,
              isStartInFakeText: b,
              isEndInZeroSpace: c,
              isEndInFakeText: h,
              isStartPointInLineEnd: f,
              isStartPointInLineStart: v,
              isEndPointInLineEnd: g
            });
            if (c || g || l || f || v || b || h) {
              if (L && !N && R && (l || f || b) && s) {
                _ = this.kn(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, _), {
                  offset: _.offset += this.An(_, s, n, t)
                }));
              }
              if (s && a) {
                if (L) {
                  w = _.offset === 0;
                  v = _.line === 0;
                  b = e.offset === ((S == null ? undefined : S.length()) || 0) - 1;
                  C = e.line === (((S = C.getZoneState(e.zoneId)) === null || S === undefined ? undefined : S.length()) || 0) - 1;
                  S = true;
                  if (!v && w && E && (r || R)) {
                    M = this.An(_, s, n, t);
                    if (Math.abs((E = this.kn(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, _), {
                      offset: _.offset + M
                    }))).line - _.line) > 1) {
                      _ = E;
                      if (r) {
                        R = true;
                      }
                      S = false;
                    }
                  } else if (!C && !!b && !!t && (!!r || !R)) {
                    M = this.An(e, a, o, t);
                    if (Math.abs((b = this.kn(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), {
                      offset: e.offset + M
                    }))).line - e.line) > 1) {
                      e = b;
                      if (r) {
                        R = false;
                      }
                      S = false;
                    }
                  }
                  if (!N && !R && (c || g || h) && S) {
                    e = this.kn(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), {
                      offset: e.offset += this.An(e, a, o, t)
                    }));
                  }
                } else if (r && ((!N || !browserDetectUtils.platformInfo.windows) && (!x || !browserDetectUtils.platformInfo.isMac) || f && t)) {
                  M = this.An(_, s, n, t);
                  e = _ = this.kn(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, _), {
                    offset: _.offset += M
                  }));
                }
                if (!L && !r && l && c) {
                  M = this.An(_, s, n, t);
                  e = _ = this.kn(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, _), {
                    offset: _.offset += M
                  }));
                }
                R = new (this.s.modulesContainer.get(editorModuleConstants.editorModuleConsts.Range))({
                  editor: this.s,
                  start: _,
                  end: e,
                  isBackward: R
                });
                if (this.range && !editorRangeClass.EditorRange.isRangeEqual(R, this.range)) {
                  this.setSelection(R, true);
                  I.preventDefault();
                }
              }
            }
          }
        }
      }
    };
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "updateBrowserSelection", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_handleDOMSelectionChange", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "handleArrowKey", null);
    return e;
  }();
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var eventHandlerConfig = require("event-handler-config") /*id: 867160*/;
  var editorCoreClass = require("editor-core-class") /*id: 137381*/;
  var _ = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      n.editableElem = null;
      n.r = function () {};
      n.o = eventHandlerConfig.eventNames;
      n.c = function (e) {
        var t = n.editor;
        if (!t.getStatus("isPerforming") && !t.getStatus("preventUpdateDomSelection") && !!t.isFocus() && !!e.target && !e.relatedTarget && !!t.dom.isZoneContainer(e.target) && !browserDetectUtils.platformInfo.mobile) {
          t.selection.updateBrowserSelection();
        }
      };
      if (t.editor) {
        n.editor = t.editor;
        if (t.copyable) {
          n.editor.copyable = t.copyable;
        }
        if (t.editable) {
          n.editor.setEditable(t.editable);
        }
        if (t.isSSR) {
          n.editor.isSSR = t.isSSR;
        }
      } else {
        n.editor = new editorCoreClass.Editor(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, n.props), {
          initData: t.initData
        }));
      }
      if (t = t.listenEvents) {
        n.o = t;
      }
      n.u = function () {
        return n.editor.call(editorEventConstants.editorEventTypes.SCROLL);
      };
      return n;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    var n = t.prototype;
    n.onMount = function (e) {
      var t = this.editor;
      var n = this.props;
      this.editableElem = e;
      t.init({
        element: e
      });
      t.setMounted(true);
      Promise.resolve().then(function () {
        t.callAll("editorDidMount");
      });
      var i = t.getContentState().getZoneState(zeroConstantModule_1.versionValue);
      if (i != null && i.length()) {
        i = +!!i.getLine(0).hasLineMarker();
        i = new editorPositionClass.EditorPosition({
          start: i,
          len: 0,
          zoneId: zeroConstantModule_1.versionValue,
          editor: t
        });
        t.selection = new C({
          editor: t,
          range: i.toRange()
        });
      } else {
        t.selection = new C({
          editor: t
        });
      }
      t.togglePlaceHolder();
      this._(e);
      if ((e = n.onInit) !== null && e !== undefined) {
        e.call(n, t);
      }
      if ((e = n._onInitData) !== null && e !== undefined) {
        e.call(n, t);
      }
    };
    n._ = function (e) {
      var t;
      var n;
      var o = this.editor;
      var r = o.getDelegator();
      r.on("selectionchange", o.getContainer(), o.__handleDOMSelectionChange);
      r.on("resize", document.body, o._handleContainerResize);
      r.on("focusin", o.getContainer(), this.c);
      o.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this.handleSelectionChange);
      o.on(editorEventConstants.editorEventTypes.ERROR, this.handleEditorError);
      window.addEventListener("scroll", this.u);
      try {
        var s = typescriptRuntimeHelpers_1.values(this.o);
        var l = s.next();
        for (; !l.done; l = s.next()) {
          var a = l.value;
          if (a === "resize") {
            this.r = function (e, t) {
              if (!e) {
                return function () {};
              }
              if (window.ResizeObserver) {
                var n = new window.ResizeObserver(t);
                n.observe(e);
                return function () {
                  n.disconnect();
                };
              }
              var i = document.createElement("iframe");
              i.setAttribute("style", "\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: -1000%;\n      left: -1000%;\n      user-select: none;\n      visibility: hidden;\n    ");
              i.addEventListener("resize", t);
              var o = e.parentElement;
              o.appendChild(i);
              return function () {
                o.removeChild(i);
                i.removeEventListener("resize", t);
              };
            }(e, this.editor._handleResizeEvent);
          } else if (this.props.forceListenContainer || a === "focus" || a === "blur") {
            r.on(a, o.getContainer(), this.handleEvent, {
              priority: 1,
              customizedDelegateDom: o.getContainer()
            });
          } else {
            r.on(a, o.getContainer(), this.handleEvent, {
              priority: 1
            });
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
    n.l = function () {
      var e;
      var t;
      var n = this.editor;
      var o = n.getDelegator();
      n.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this.handleSelectionChange);
      n.off(editorEventConstants.editorEventTypes.ERROR, this.handleEditorError);
      var r = n.getContainer();
      try {
        var s = typescriptRuntimeHelpers_1.values(this.o);
        var l = s.next();
        for (; !l.done; l = s.next()) {
          var a = l.value;
          o.off(a, r, this.handleEvent);
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
      o.off("selectionchange", r, n.__handleDOMSelectionChange);
      this.r();
      o.off("resize", document.body, n._handleContainerResize);
      o.off("focusin", n.getContainer(), this.c);
      window.removeEventListener("scroll", this.u);
    };
    n.componentDidUpdate = function (e) {
      var t = e.editable;
      var n = e.copyable;
      var i = n === undefined || n;
      var o = e.isSSR;
      var r = o !== undefined && o;
      var n = this.props;
      var e = n.editable;
      var o = e === undefined || e;
      var e = n.copyable;
      var e = e === undefined || e;
      var n = n.isSSR;
      var n = n !== undefined && n;
      if (o !== (t === undefined || t)) {
        this.editor.setEditable(o);
      }
      if (e !== i) {
        this.editor.copyable = e;
      }
      if (n !== r) {
        this.editor.isSSR = n;
      }
    };
    n.componentWillUnmount = function () {
      var e = this.editor;
      this.l();
      e._getViewModel().destroy();
      e.destroy();
    };
    n.handleSelectionChange = function () {
      var e = this.editor.selection.getSelection();
      this.editor.getContentState().setActiveZone(e.start.zoneId);
    };
    n.handleEvent = function (e) {
      var t;
      var n;
      var i = this.editor;
      i._correctCompositionIfNecessary(e);
      if (e instanceof Event) {
        if ((!(e.currentTarget instanceof Element) || !!e.currentTarget.contains(e.target)) && (!(e.target instanceof Element) || e.target.closest("." + editorConstantsKeycodes.editorKitContainer) === this.editor.getContainer() && ((t = e.target.closest("." + editorConstantsKeycodes.aditContainer)) === null || t === undefined || !t.closest("." + editorConstantsKeycodes.editorKitContainer))) && (!this.editor.getContainer().classList.contains(editorConstantsKeycodes.outerControlledZone) || !(e.target instanceof Element) || !!e.target.classList.contains(editorConstantsKeycodes.zoneContainer) || (n = e.target.closest("." + editorConstantsKeycodes.zoneContainer)) === null || n === undefined || !n.classList.contains(editorConstantsKeycodes.outerControlledZone))) {
          i[eventHandlerConfig.eventHandlers[e.type]](e);
        }
      }
    };
    n.handleEditorError = function (e) {
      var t;
      var n;
      if ((n = (t = this.props).onError) !== null && n !== undefined) {
        n.call(t, e);
      }
    };
    n.UNSAFE_componentWillReceiveProps = function (e) {
      if (e.placeholder !== this.props.placeholder) {
        this.editor._setPlaceholder(e.placeholder);
      }
    };
    n.componentDidCatch = function (e) {
      this.editor.error({
        e: e,
        level: errorHandlerUtil.ErrorLevel.FATAL,
        message: e.message
      });
    };
    t.defaultProps = {
      editable: true,
      placeholder: "",
      initData: new deltaSetCore.DeltaSet().add(zeroConstantModule_1.versionValue, new contentStructureDelta.ContentDelta().insertEnter())
    };
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "onMount", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "handleSelectionChange", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "handleEvent", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "handleEditorError", null);
    return t;
  }(reactCoreLibraryReexport.PureComponent);
  require.d(exports, {
    EditorComponent: function () {
      return _;
    }
  });
}