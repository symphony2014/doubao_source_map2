// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'ZoneRenderer'
// - Renamed export 'h' to 'EditorComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13032.fea06b08.js
         * chunkId: 13032
         * moduleId: 566183
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var errorHandlerUtil = require("error-handler-util") /*id: 161088*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var editorLineModel = require("editor-line-model") /*id: 136973*/;
  var reactinxDomRenderer = require("reactinx-dom-renderer") /*id: 415017*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var tsRuntimeHelpers = require("ts-runtime-helpers") /*id: 287285*/;
  var domEnvManager = require("dom-env-manager") /*id: 219737*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  require("react-dom-entry-wrapper") /*id: 640848*/;
  var v;
  var reactinxElementFactory = require("reactinx-element-factory") /*id: 276161*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  function m(e, t) {
    function n(n) {
      var o;
      var r;
      var l;
      var a;
      var u;
      var d;
      var c = e.getContentState();
      var h = c.getZoneState(t);
      if (h) {
        try {
          var f = typescriptRuntimeHelpers_1.values(n);
          var g = f.next();
          for (; !g.done; g = f.next()) {
            var v = g.value;
            if (v.addedNodes.length) {
              try {
                l = undefined;
                var p = typescriptRuntimeHelpers_1.values(Array.from(v.addedNodes));
                var m = p.next();
                for (; !m.done; m = p.next()) {
                  var C = m.value;
                  if (C.nodeType === Node.TEXT_NODE && C.textContent) {
                    var S;
                    var E;
                    var b = 0;
                    if (C.nextSibling) {
                      if (!(C.nextSibling instanceof HTMLElement)) {
                        continue;
                      }
                      var _ = C.nextSibling;
                      if (!(_ = C.nextSibling.hasAttribute(editorConstantsKeycodes.dataNode) ? _ : C.nextSibling.querySelector("[" + editorConstantsKeycodes.dataNode + "]"))) {
                        continue;
                      }
                      var M = e._getViewModel().getModel(_);
                      if (!M) {
                        continue;
                      }
                      b = M.index;
                    } else {
                      b = h.length();
                    }
                    if (b !== -1) {
                      if ((S = b === 0 ? 0 : h.pointToOffset({
                        line: b - 1,
                        offset: (((u = h.getLine(b - 1)) === null || u === undefined ? undefined : u.length()) || 1) - 1
                      })) !== null) {
                        if ((d = C.parentNode) !== null && d !== undefined) {
                          d.removeChild(C);
                        }
                        E = new contentStructureDelta.ContentDelta({
                          zoneId: t
                        }).retain(S);
                        E = b === 0 ? E.insert(C.textContent).insertEnter() : E.insertEnter().insert(C.textContent);
                        c.apply(E);
                      }
                    }
                  }
                }
              } catch (e) {
                l = {
                  error: e
                };
              } finally {
                try {
                  if (m && !m.done && (a = p.return)) {
                    a.call(p);
                  }
                } finally {
                  if (l) {
                    throw l.error;
                  }
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
            if (g && !g.done && (r = f.return)) {
              r.call(f);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
      }
    }
    reactCoreLibraryReexport.useLayoutEffect(function () {
      var i = (i = e.getContentState().getZoneState(t)) === null || i === undefined ? undefined : i._node;
      if (i) {
        var o;
        var r;
        var s;
        o = i;
        r = {
          childList: true
        };
        (s = new MutationObserver(s = n)).observe(o, r);
        var l = s;
        return function () {
          l.disconnect();
        };
      }
    }, [e, t]);
  }
  var autoBindMethodDescriptor = require("auto-bind-method-descriptor") /*id: 969612*/;
  var S = {
    left: undefined,
    top: undefined
  };
  (v = {})[editorEventConstants.editorEventTypes.SELECTION_CHANGE] = {
    onlyScrollWhenCollapsed: true
  };
  var E = v;
  function b(e) {
    if (e instanceof Window) {
      return {
        top: 0,
        left: 0,
        clientWidth: window.innerWidth,
        clientHeight: window.innerHeight,
        scrollTop: e.scrollY,
        scrollLeft: e.scrollX
      };
    }
    if (e instanceof Element) {
      var t = e.getBoundingClientRect();
      return {
        top: t.top,
        left: t.left,
        clientWidth: e.clientWidth,
        clientHeight: e.clientHeight,
        scrollTop: e.scrollTop,
        scrollLeft: e.scrollLeft
      };
    }
    return {
      top: 0,
      left: 0,
      clientHeight: 0,
      clientWidth: 0,
      scrollLeft: 0,
      scrollTop: 0
    };
  }
  function _(e) {
    if (typeof e == "number") {
      return {
        paddingBottom: e,
        paddingLeft: e,
        paddingRight: e,
        paddingTop: e
      };
    } else {
      return {
        paddingBottom: e.bottom || 0,
        paddingTop: e.top || 0,
        paddingLeft: e.left || 0,
        paddingRight: e.right || 0
      };
    }
  }
  function M(e) {
    return e.height !== 0 || e.top !== 0 || e.left !== 0 || e.right !== 0 || e.left !== 0;
  }
  function I(e) {
    return e.left || e.top;
  }
  var w = function () {
    function e(e, t, n = {}, i, o = []) {
      this.s = e;
      this.Se = t;
      this.Me = n;
      this.qe = i;
      this.we = o;
      this.ge = [];
      this.Ie = {};
      this.init();
    }
    var t = e.prototype;
    t.Pe = function () {
      var e = this;
      this.we.forEach(function (t) {
        var n;
        var o = typeof t == "string" ? E[n = t] || {} : Object.assign({}, E[n = t.type], t.overideConfig);
        function s() {
          return e.scrollIntoViewport(undefined, typescriptRuntimeHelpers_1.assign({
            _event: n
          }, o));
        }
        if (n === editorEventConstants.editorEventTypes.SELECTION_CHANGE || n === editorEventConstants.editorEventTypes.SELECTION_CHANGE_AND_DOM_UPDATE) {
          s = function () {
            var t = e.s.selection.getSelection(e.qe);
            if (t && e.s.isFocus()) {
              e.scrollIntoViewport(t.start, typescriptRuntimeHelpers_1.assign({
                _event: n
              }, o));
            }
          };
        }
        t = function (t) {
          var n = o.shouldPreventScroll;
          var i = o.triggerAfterPaint;
          if (n == null || !n(t)) {
            if (i) {
              e.s.once("paint", s);
            } else {
              s();
            }
          }
        };
        e.s.on(n, t, e.qe === zeroConstantModule_1.versionValue ? undefined : {
          zoneId: e.qe
        });
        e.ge.push(t);
      });
    };
    t.getScroller = function () {
      return this.Se;
    };
    t.emitScroll = function (e) {
      this.s.call(editorEventConstants.editorEventTypes.SCROLL, e);
    };
    t.destroy = function () {
      var e;
      var t = 0;
      for (; t < this.we.length; t++) {
        var n = this.we[t];
        var i = typeof n == "string" ? n : n.type;
        this.s.off(i, this.ge[t]);
      }
      Object.values(this.Ie).forEach(function (e) {
        return window.clearTimeout(e);
      });
      var o = (e = (o = this.s.getContentState()) === null || o === undefined ? undefined : o.getZoneManager) === null || e === undefined ? undefined : e.call(o);
      if (o != null) {
        o.removeScrollModule(this.qe);
      }
      this.Se.removeEventListener("scroll", this.emitScroll);
    };
    t.init = function (e = true) {
      var t;
      var n = (n = (t = this.s.getContentState()) === null || t === undefined ? undefined : t.getZoneManager) === null || n === undefined ? undefined : n.call(t);
      if (n != null) {
        n.registerScrollModule(this.qe, this);
      }
      if (e) {
        this.Se.addEventListener("scroll", this.emitScroll);
      }
      this.Pe();
    };
    t.scrollTo = function (e) {
      this.Se.scrollTo(e);
    };
    t.scrollBy = function (e) {
      this.Se.scrollBy(e);
    };
    t.scrollPointIntoScrollerView = function (e, t, n, o) {
      var r = this.s;
      var s = this.qe;
      if (!r || !s) {
        return S;
      }
      var l;
      var a = {};
      if (!M(o)) {
        return S;
      }
      try {
        l = b(t);
      } catch (e) {
        return S;
      }
      r = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, o), {
        top: o.top - l.top,
        bottom: o.bottom - l.top,
        left: o.left - l.left,
        right: o.right - l.left
      });
      t = (s = _(n)).paddingBottom;
      o = s.paddingLeft;
      n = s.paddingRight;
      s = s.paddingTop;
      s = -r.top + s;
      t = r.bottom - l.clientHeight + t;
      if (s > 1) {
        a.top = l.scrollTop - s;
      } else if (t > 1) {
        a.top = l.scrollTop + t;
      }
      o = -r.left + o;
      n = r.right - l.clientWidth + n;
      if (o > 1) {
        a.left = l.scrollLeft - o;
      } else if (n > 1) {
        a.left = l.scrollLeft + n;
      }
      return a;
    };
    t.scrollPointIntoWindowView = function (e, t, n, i) {
      if (!this.s) {
        return S;
      }
      var o;
      var r = {};
      if (!M(i)) {
        return S;
      }
      try {
        o = b(t);
        if (window.visualViewport) {
          o.clientHeight = window.visualViewport.height;
          o.clientWidth = window.visualViewport.width;
        }
      } catch (e) {
        return S;
      }
      var s = _(n);
      var l = s.paddingBottom;
      var t = s.paddingLeft;
      var n = s.paddingRight;
      var s = s.paddingTop;
      var s = -i.top + s;
      var l = i.bottom - o.clientHeight + l;
      if (s > 1) {
        r.top = o.scrollTop - s;
      } else if (l > 1) {
        r.top = o.scrollTop + l;
      }
      t = -i.left + t;
      n = i.right - o.clientWidth + n;
      if (t > 1) {
        r.left = o.scrollLeft - t;
      } else if (n > 1) {
        r.left = o.scrollLeft + n;
      }
      return r;
    };
    t._scrollIntoViewport = function (e, t) {
      var n;
      var i = this.s;
      var o = this.Se;
      var s = this.qe;
      var l = this.Me;
      var a = (t = t === undefined ? {} : t).onlyScrollWhenCollapsed;
      var t = i.selection.getSelection();
      if ((!a || !!t.isCollapsed()) && !!e && (e.zoneId === s || s === zeroConstantModule_1.versionValue)) {
        if (!i.getStatus("preventScrolling") && i.isEditable()) {
          if ((s = (t = i.virtualListManager) === null || t === undefined ? undefined : t.getVirtualListModuleOfZone(e.zoneId)) != null && s.isEnabled) {
            s.scrollIntoViewport(e.line);
          }
          t = i.rectModule.getRawCaretRect(e);
          s = S;
          if (o !== document.scrollingElement) {
            s = this.scrollPointIntoScrollerView(e, o, ((n = l.getScrollerPadding) === null || n === undefined ? undefined : n.call(l)) || 0, t);
            o.scrollTo(s);
          }
          n = document.scrollingElement || window;
          o = S;
          if (!l.disableBodyScroll) {
            o = this.scrollPointIntoWindowView(e, n, ((e = l.getViewPortPadding) === null || e === undefined ? undefined : e.call(l)) || 0, t);
            n.scrollTo(o);
          }
          if (I(s) || I(o)) {
            this.emitScroll();
          }
        } else {
          i.setStatus("preventScrolling", false);
        }
      }
    };
    t.scrollIntoViewport = function () {
      var t = this;
      var n = [];
      var o = 0;
      for (; o < arguments.length; o++) {
        n[o] = arguments[o];
      }
      var r = n[1]?._event || "DEFAULT";
      if (this.Ie[r] === undefined) {
        this._scrollIntoViewport.apply(this, typescriptRuntimeHelpers_1.spread(n));
        this.Ie[r] = window.setTimeout(function () {
          t.Ie[r] = undefined;
        }, 66);
      }
    };
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "getScroller", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "emitScroll", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "destroy", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "init", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "scrollTo", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "scrollBy", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "scrollPointIntoScrollerView", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "scrollPointIntoWindowView", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "_scrollIntoViewport", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "scrollIntoViewport", null);
    return e;
  }();
  var reactEditorContext = require("react-editor-context") /*id: 955597*/;
  var lineAttributeComparator = require("line-attribute-comparator") /*id: 925951*/;
  var diffChangeConstants = require("diff-change-constants") /*id: 699476*/;
  var reactLifecycleDiffConstants = require("react-lifecycle-diff-constants") /*id: 971280*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var editorPluginRenderer = require("editor-plugin-renderer") /*id: 69913*/;
  var deepEqualityCheck_1 = require("deep-equality-check_1") /*id: 956585*/;
  var sortObjectKeysUtil = require("sort-object-keys-util") /*id: 780137*/;
  var arrayEqualsUtil = require("array-equals-util") /*id: 503762*/;
  var setElementAttributes = require("set-element-attributes") /*id: 394222*/;
  var D = function (e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    t.prototype.render = function () {
      var e = this;
      var t = this.props;
      var n = t.data;
      var o = t.dataSet;
      var r = o === undefined ? {} : o;
      var l = t.className;
      var a = t.style;
      var u = t.editor;
      var o = n.op;
      var t = n.parent;
      if (typeof o.insert != "string") {
        return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomContextExports.ReactInXExports.Fragment, null);
      } else {
        l = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign(((n = {})[editorConstantsKeycodes.dataString] = true, n), r), {
          className: l,
          style: a
        });
        if ((a = o.attributes) !== null && a !== undefined && a.enter && (l[editorConstantsKeycodes.dataEnter] = true, t.isTextEmpty() && u._isRenderBrInEmptyLine)) {
          return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.BreakSymbol, typescriptRuntimeHelpers_1.assign({}, l, {
            ref: function (t) {
              var n;
              var i;
              if ((i = (n = e.props) === null || n === undefined ? undefined : n._ref) !== null && i !== undefined) {
                i.call(n, t);
              }
            }
          }));
        } else {
          return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.TextSymbol, typescriptRuntimeHelpers_1.assign({}, l, {
            ref: function (t) {
              var n;
              var i;
              if ((i = (n = e.props) === null || n === undefined ? undefined : n._ref) !== null && i !== undefined) {
                i.call(n, t);
              }
            }
          }), o.insert);
        }
      }
    };
    return t;
  }(reactinxDomContextExports.ReactInXExports.Component);
  var Z = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.zs = false;
      t.Xr = null;
      t.Vr = null;
      t.Qr = null;
      t.renderContext = null;
      t.$r = null;
      t.handleTextViewRef = function (e) {
        if (e) {
          t.ec(e);
        } else {
          t.tc();
        }
      };
      t.handleRef = function (e) {
        t.props.editor.trace.add({
          extra: {
            refDom: !!e
          }
        });
        if (e) {
          t.nc(e);
        } else {
          t.ic();
        }
      };
      return t;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    var n = t.prototype;
    n.componentDidMount = function () {
      this.sc();
      this.rc();
      this.zs = true;
      this.props.editor.trace.add({
        type: "Mount"
      });
    };
    n.componentDidUpdate = function () {
      this.sc();
      this.rc();
      this.props.editor.trace.add({
        type: "Update"
      });
    };
    n.componentWillUnmount = function () {
      this.zs = false;
      if (this.Vr) {
        this.viewModel._deleteLeaf(this.Vr);
      }
      if (this.Xr) {
        this.viewModel._deleteLeaf(this.Xr);
      }
      var e = this.Vr || this.Xr;
      if (e && e.firstChild) {
        e.removeChild(e.firstChild);
      }
      this.cc();
    };
    n.cc = function () {
      var e;
      var t;
      var n = this.props.state.reactInXInstanceList;
      try {
        var o = typescriptRuntimeHelpers_1.values(n);
        var r = o.next();
        for (; !r.done; r = o.next()) {
          r.value.unmount();
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
    n.componentWillReceiveProps = function (e) {
      var t = e.state;
      var e = this.props.state;
      t.setNode(e.getNode());
      t.reactInXInstanceList = e.reactInXInstanceList;
    };
    n.shouldComponentForceUpdate = function (e) {
      var t = e.state;
      return this.props.state.offset !== t.offset || (t = this.props.state.getNode(), this.oc(t) !== e.state.op.insert || t != null && !!t.querySelector(".inline-code"));
    };
    n.oc = function (e) {
      if (!e) {
        return "";
      }
      var t = e.querySelector("[" + editorConstantsKeycodes.dataFakeText_1 + "]");
      if (t) {
        return t.getAttribute(editorConstantsKeycodes.dataFakeText_1);
      } else {
        return e.textContent;
      }
    };
    n.ec = function (e) {
      if (this.Vr) {
        this.viewModel._deleteLeaf(this.Vr);
      }
      this.Vr = e;
    };
    n.tc = function () {
      if (this.Vr) {
        this.viewModel._deleteLeaf(this.Vr);
      }
      this.Vr = null;
    };
    n.nc = function (e) {
      if ((this.Xr = e).hasAttribute(editorConstantsKeycodes.dataString) && e.hasAttribute(editorConstantsKeycodes.dataLeaf)) {
        this.Vr = null;
      }
    };
    n.ic = function () {
      this.Xr = null;
    };
    n.rc = function () {
      var e;
      var t;
      var n;
      if (this.Xr) {
        e = this.Xr;
        t = (n = this.props).state;
        n = n.editor;
        if (this.zs) {
          this.uc(e);
        }
        e.__leafModel = this.leafModel;
        e.__index = t.index;
        e.__key = t.getCustomKey() || t.getKey();
        n.trace.add({
          extra: {
            updateLeafNode: !!e,
            lineKey: (n = (n = t.parent) === null || n === undefined ? undefined : n.getKey()) !== null && n !== undefined ? n : null
          }
        });
        t.setNode(e);
      }
    };
    n.sc = function () {
      var e = this;
      var t = e.Xr;
      var n = e.Vr;
      var e = e.viewModel;
      if (t) {
        e._setLeaf(t, this.leafModel);
      }
      if (n) {
        e._setLeaf(n, this.leafModel);
      }
    };
    Object.defineProperty(n, "viewModel", {
      get: function () {
        return this.props.editor._getViewModel();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(n, "leafModel", {
      get: function () {
        var e = this.props.state;
        var t = e.op;
        var n = e.parent;
        return {
          op: t,
          start: e.offset,
          lineState: n,
          index: e.index + +!!n.hasLineMarker()
        };
      },
      enumerable: false,
      configurable: true
    });
    n.lc = function () {
      var e = this.props;
      var t = e.state;
      var n = e.context;
      var o = e.editor;
      var r = o.trace;
      var s = t.op;
      var l = t.parent;
      var e = reactinxDomContextExports.ReactInXExports.createElement(D, {
        data: t,
        editor: o,
        _ref: this.handleTextViewRef
      });
      r.add({
        extra: {
          renderPluginsTextView: !!e,
          leavesCount: (t = l == null ? undefined : l.leaves.length) !== null && t !== undefined ? t : 0
        }
      });
      o = (n = editorPluginRenderer.renderPlugins(l, s, e, typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, n), {
        editor: o,
        zoneId: l.getZoneId(),
        index: l.index
      }))).view;
      n = n.renderContext;
      r.add({
        extra: {
          pluginRendererCustomView: !!o,
          leavesCount: (l = l == null ? undefined : l.leaves.length) !== null && l !== undefined ? l : 0
        }
      });
      this.Qr = n;
      this.$r = o;
    };
    n.preRender = function () {
      this.lc();
      return {
        key: this.Qr.key
      };
    };
    n.render = function () {
      var e;
      var t;
      var n = this.props;
      var o = n.state;
      var r = n.context;
      var l = o.op;
      if (!this.Qr || !this.$r) {
        this.lc();
      }
      var a = this.$r;
      var u = this.Qr;
      var d = u.style;
      var n = u.class;
      var h = u.domAttributes;
      var u = u.key;
      this.renderContext = this.Qr;
      this.$r = null;
      this.Qr = null;
      if (u) {
        o.setCustomKey(u);
      }
      u = {
        className: ""
      };
      if (d) {
        u.style = d;
      }
      if (n) {
        u.className = n;
      }
      if ((l = l.attributes) !== null && l !== undefined && l.displayEnter) {
        u.className += " not-display-enter";
      }
      var f = {};
      var g = {};
      var l = Object.keys(h);
      try {
        var v = typescriptRuntimeHelpers_1.values(l);
        var p = v.next();
        for (; !p.done; p = v.next()) {
          var y = p.value;
          if (y.startsWith("data-")) {
            g[y] = h[y];
          } else {
            f[y] = h[y];
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (p && !p.done && (t = v.return)) {
            t.call(v);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      r.class = "";
      if ((a == null ? undefined : a.type) === D) {
        a.props = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, a.props), g), f), ((r = {
          style: u.style,
          className: u.className
        })[editorConstantsKeycodes.dataLeaf] = true, r._ref = this.handleRef, r));
        return a;
      } else if (a instanceof HTMLElement && a.hasAttribute(editorConstantsKeycodes.dataString)) {
        return this._c(a, typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, a.props), f), {
          style: u.style,
          className: u.className
        }), g));
      } else {
        return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.TextSymbol, typescriptRuntimeHelpers_1.assign({}, u, f, g, ((u = {})[editorConstantsKeycodes.dataLeaf] = true, u), {
          ref: this.handleRef
        }), a);
      }
    };
    n._c = function (e, t) {
      t[editorConstantsKeycodes.dataLeaf] = true;
      setElementAttributes.setDomAttributes(e, t);
      domEnvManager.enqueueTask([this.handleRef, e, null]);
      return e;
    };
    n.uc = function (e) {
      var t = this;
      e.childNodes.forEach(function (e) {
        var n = e.parentNode;
        if (n instanceof HTMLElement) {
          if (e instanceof HTMLElement) {
            var i = e.classList;
            if (e.hasAttribute(editorConstantsKeycodes.dataFakeText_1) || i != null && i.contains(editorConstantsKeycodes.ignoreCollect) || i != null && i.contains(editorConstantsKeycodes.ignoreDom)) {
              return;
            }
          } else if (e.nodeType === Node.TEXT_NODE && !n.closest("[" + editorConstantsKeycodes.dataString + "]") && !n.closest("[" + editorConstantsKeycodes.dataZeroSpace + "]") && !n.closest("[" + editorConstantsKeycodes.dataVoid + "]") && e.textContent !== editorConstantsKeycodes.zeroWidthChar) {
            n.removeChild(e);
            return;
          }
          if ((n = e.childNodes) !== null && n !== undefined && n.length && e instanceof HTMLElement) {
            t.uc(e);
          }
        }
      });
    };
    return t;
  }(reactinxDomContextExports.ReactInXExports.Component);
  var W = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t._node = null;
      t.eu = editorConstantsKeycodes.aceLine;
      t.tu = false;
      t.iu = {
        editable: true
      };
      t.state = null;
      return t;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    var n = t.prototype;
    n.nu = function (e) {
      this.state = e;
    };
    n.shouldComponentForceUpdate = function (e, t) {
      var n = this;
      if (t != null && t.isStateConstant) {
        return false;
      }
      var i = e.state.clone();
      var o = this.ru(i).lineState;
      if (o !== i) {
        this.nu(o);
        return this.tu = true;
      }
      if (this.state) {
        this.nu(null);
        return this.tu = true;
      }
      if (this.su(this.props.state) || t != null && t.changes && this.uu(t.changes)) {
        return this.tu = true;
      }
      var r = e.state;
      if (this.props.state !== e.state) {
        this.tu = r.leaves.some(function (e) {
          return n.ou(e, r);
        });
        if (this.tu) {
          return true;
        }
        var s = this.props.state;
        this.tu = s.leaves.some(function (e) {
          return n.ou(e, s);
        });
        if (this.tu) {
          return true;
        }
      }
      e = this.props.editor.pluginManager.getPlugins(r.getZoneId());
      this.tu = e.some(function (e) {
        return !!e.renderLine && !!e.shouldForceRenderLine && e.shouldForceRenderLine({
          lineState: r
        });
      });
      return this.tu;
    };
    n.componentDidMount = function () {
      var e = this.props;
      var t = e.editor;
      var e = e.state;
      this.sc();
      this.cu();
      this.lu();
      t.callAll("lineDidMount", {
        lineState: e
      });
    };
    n.au = function (e, t, n) {
      var i = this;
      var o = e.hasLineMarker();
      var r = t.hasLineMarker();
      if (!r && o || r && o && !deepEqualityCheck_1.deepEqual(e.getLineAttributes(), t.getLineAttributes())) {
        n.pluginManager.getPlugins(e.getZoneId()).forEach(function (t) {
          var n;
          if (t.renderLine) {
            n = {
              lineState: e,
              children: [],
              style: {},
              lineClass: i.eu,
              index: e.index,
              editable: true
            };
            t.renderLine(n);
            i.eu = n.lineClass;
            if (i.iu.editable !== n.editable) {
              i.iu.editable = n.editable;
            }
          }
        });
      } else if (r && !o) {
        this.eu = editorConstantsKeycodes.aceLine;
      }
    };
    n.componentDidUpdate = function (e) {
      var t;
      var n;
      var i = this;
      if (this._node) {
        t = (n = this.props).state;
        n = n.editor;
        if (!this.tu) {
          this.au(t, e.state, n);
        }
        this.sc();
        this.cu();
        this.lu();
        Promise.resolve().then(function () {
          if (i.props.editor.mounted !== false) {
            i.props.editor.callAll("lineDidUpdate", {
              data: {
                prev: e.state,
                curr: i.props.state
              },
              isUpdate: true
            });
          }
        });
      }
      this.tu = false;
    };
    n.componentWillUnmount = function () {
      var e;
      var t;
      var n = this.props;
      var o = n.editor;
      var r = n.state;
      var s = r.getZoneId();
      var n = o.getContentState().getZoneState(s);
      var s = this.props.editor._getViewModel();
      s._resetNode(r);
      s._deleteNode(r);
      var l = false;
      if (n) {
        try {
          var a = typescriptRuntimeHelpers_1.values(n);
          var u = a.next();
          for (; !u.done; u = a.next()) {
            if (u.value === r) {
              l = true;
              break;
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (u && !u.done && (t = a.return)) {
              t.call(a);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      }
      if (!l) {
        o.callAll("lineWillUnmount", {
          lineState: r
        });
        this.clear();
      }
    };
    n.uu = function (e) {
      var t = false;
      var n = false;
      var i = e.length - 1;
      for (; i >= 0; --i) {
        var o = e[i];
        if (o.type === diffChangeConstants.ChangeType.LEAF_DELETE) {
          t = o.deletes.some(function (e) {
            return !!e.getCustomKey();
          });
        }
        if (o.type === diffChangeConstants.ChangeType.LEAF_INSERT) {
          n = true;
        }
        if (t && n) {
          break;
        }
      }
      return t && n;
    };
    n.su = function (e) {
      var t;
      var n = e.getNode();
      if (!n) {
        throw Error("LineState._node empty when updating.");
      }
      var i = ((t = (i = e.parent) === null || i === undefined ? undefined : i.getContainer) === null || t === undefined ? undefined : t.call(i)) || null;
      return !!document.body.contains(i) && !e.getEntities([["zoneId"]])[0] && (i = e.leaves, (n = Array.from(n.querySelectorAll("[" + editorConstantsKeycodes.dataLeaf + "]"))).length !== i.length || !!this.vu(n) || !!this.hu(e));
    };
    n.hu = function (e) {
      var t = e.getNode().querySelector("[" + editorConstantsKeycodes.dataEnter + "]");
      var e = e.getLinefeedLeaf();
      return !t || !e || t !== e.getNode();
    };
    n.vu = function (e) {
      var t;
      var n;
      try {
        var o = typescriptRuntimeHelpers_1.values(e);
        var r = o.next();
        for (; !r.done; r = o.next()) {
          var l = r.value;
          var a = l.hasAttribute("" + editorConstantsKeycodes.dataString) ? l : l.querySelector("[" + editorConstantsKeycodes.dataString + "]");
          if (a != null && a.firstChild && a.firstChild.nodeType !== Node.TEXT_NODE) {
            return true;
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (r && !r.done && (n = o.return)) {
            n.call(o);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return false;
    };
    n.clear = function () {
      var e = this.props;
      var t = e.editor;
      var n = e.state;
      var i = t._getViewModel();
      var e = n.getZoneId();
      var e = t.getContentState().getZoneState(e);
      if (!e || e.getLineByKey(n.getKey()) !== n) {
        i._deleteNode(n);
      }
    };
    n.handleRef = function (e) {
      if (e) {
        this.nc(e);
      } else {
        this.ic();
      }
    };
    n.nc = function (e) {
      this._node = e;
    };
    n.ic = function () {
      this._node = null;
    };
    n.sc = function () {
      var e;
      if (this._node) {
        e = this.props.state;
        this.props.editor._getViewModel()._setNode(e, this._node);
      }
    };
    n.cu = function () {
      var e;
      var t;
      if (this._node) {
        e = this._node;
        t = this.props.state;
        if (e.className !== this.eu) {
          e.className = this.eu;
        }
        if (this.iu.editable === false) {
          e.setAttribute("contenteditable", "false");
        } else if (e.contentEditable === "true") {
          e.removeAttribute("contenteditable");
        }
        e.__index = t.index;
        e.__key = t.getKey();
        if (this.state) {
          this.state.setNode(e);
          this.state.instance = this;
        }
      }
    };
    n.lu = function () {
      var e;
      var t;
      var n;
      if (this._node) {
        var r = this.props.editor;
        var l = r.trace;
        var a = (this.state || this.props.state).leaves;
        try {
          var u = typescriptRuntimeHelpers_1.values(a);
          var d = u.next();
          for (; !d.done; d = u.next()) {
            var c = d.value;
            var h = c.getNode();
            if (!h) {
              l.add({
                extra: {
                  updateLeavesNodes: a.map(function (e) {
                    return Object.keys(((e = e.op) === null || e === undefined ? undefined : e.attributes) || {});
                  }),
                  lineKey: (this.state || this.props.state).getKey()
                }
              });
              var f = (n = c.parent) === null || n === undefined ? undefined : n.getNode();
              r.error({
                level: errorHandlerUtil.ErrorLevel.ERROR,
                message: "leaf DOM is null",
                extra: l.export()
              });
              l.reset();
              throw Error("leaf DOM null,leaves: " + a.length + ",child: " + (f == null ? undefined : f.childNodes.length));
            }
            h.__index = c.index;
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (d && !d.done && (t = u.return)) {
              t.call(u);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        this._node.querySelectorAll("[" + editorConstantsKeycodes.dataInlineWrapper + "]").forEach(function (e) {
          var t = (t = e == null ? undefined : e.querySelector("[" + editorConstantsKeycodes.dataLeaf + "]")) === null || t === undefined ? undefined : t.__index;
          e.__index = t;
        });
      }
    };
    n._u = function () {
      var e;
      var t = this.props.editor;
      if (this.tu && this.state) {
        e = this.state;
      } else {
        i = this.props.state.clone();
        if ((e = this.ru(i).lineState) !== i) {
          this.nu(e);
        }
      }
      t.trace.add({
        extra: {
          lineStateMatch: e === this.state,
          leavesMatch: e.leaves === this.props.state.leaves,
          propsLeavesLen: this.props.state.leaves.length,
          lineStateLen: e.leaves.length
        }
      });
      var n = e.leaves;
      this.eu = editorConstantsKeycodes.aceLine;
      var i = [];
      if (e.hasLineMarker()) {
        t = reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.FragmentSymbol, {
          key: 1
        }, this.fu(e, n));
        if (t = this.ju(e, t)) {
          i.push(t);
        }
      } else {
        i = this.fu(e, n);
      }
      return this.du(e, i);
    };
    n.ru = function (e) {
      var t = this.props.editor;
      var n = {
        lineState: e,
        index: e.index
      };
      var e = e.getKey();
      t.callAll("_editorLineStateWillRender", n);
      n.lineState._setKey(e);
      return n;
    };
    n.du = function (e, t) {
      var n = this;
      var i = this.props.editor.pluginManager.getPlugins(e.getZoneId());
      var r = {};
      var t = i.reduce(function (t, i) {
        if (i.renderLine) {
          var s = {
            lineState: e,
            children: t,
            style: r,
            lineClass: n.eu,
            index: e.index,
            editable: true
          };
          try {
            var l = i.renderLine(s);
            n.eu = s.lineClass;
            if (n.iu.editable !== s.editable) {
              n.iu.editable = s.editable;
            }
            if (l) {
              return l;
            }
          } catch (e) {
            n.props.editor.error({
              message: i.name + " plugin renderLine failed!",
              level: errorHandlerUtil.ErrorLevel.ERROR,
              e: e
            });
            return t;
          }
        }
        return t;
      }, t);
      if (Object.keys(r).length) {
        return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.DivSymbol, {
          style: r
        }, t);
      } else {
        return t;
      }
    };
    n.ju = function (e, t) {
      var n = e.getOps()[0];
      var i = {
        tokenClass: "",
        lineClass: this.eu,
        editor: this.props.editor,
        zoneId: e.getZoneId(),
        index: e.index
      };
      var t = editorPluginRenderer.renderPlugins(e, n, t, i);
      var i = t.view;
      var t = t.renderContext;
      this.eu = t.lineClass;
      return i;
    };
    n.fu = function (e, t) {
      var n;
      var o;
      var r = this.props.editor;
      var s = r.trace;
      var l = [];
      var a = new Map();
      s.add({
        extra: {
          leavesLenBefore: t.length
        }
      });
      try {
        var u = typescriptRuntimeHelpers_1.values(t);
        var d = u.next();
        for (; !d.done; d = u.next()) {
          var c = d.value;
          var h = c.op;
          s.add({
            extra: {
              op: Object.keys((h == null ? undefined : h.attributes) || {})
            }
          });
          var f = {
            lineClass: this.eu,
            class: "",
            text: ""
          };
          var g = reactinxDomContextExports.ReactInXExports.createElement(Z, {
            key: c.getKey(),
            editor: r,
            state: c,
            context: f
          });
          a.set(h, g);
          l.push(g);
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          if (d && !d.done && (o = u.return)) {
            o.call(u);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      s.add({
        extra: {
          leavesLenAfter: t.length,
          children: l.length
        }
      });
      return this.yu(l, t, e, a);
    };
    n.ou = function (e, t) {
      var n = e.op;
      var o = e.index;
      var e = this.props.editor;
      if (!n.attributes) {
        return false;
      }
      var r = typescriptRuntimeHelpers_1.assign({}, n.attributes || {});
      return editorPluginRenderer.resolvePlugins({
        attributes: r,
        editor: e,
        zoneId: t.getZoneId()
      }).some(function (e) {
        if (e.renderInlineWrapper) {
          if ((n = e.shouldForceRenderLine) !== null && n !== undefined && n.call(e, {
            lineState: t
          })) {
            return true;
          }
          var n = {
            index: o + +!!t.hasLineMarker(),
            attributes: r,
            lineState: t,
            key: ""
          };
          if (e.renderInlineWrapper(n)) {
            return true;
          }
        }
        return false;
      });
    };
    n.mu = function (e, t) {
      if (e) {
        e.__key = t;
      }
    };
    n.yu = function (e, t, n, o) {
      var r = this;
      var l = new Map();
      var a = +!!n.hasLineMarker();
      var u = t.reduce(function (t, s, u) {
        var d = s.index;
        var c = s.op;
        var h = d + a;
        var f = r.props.editor;
        var g = typescriptRuntimeHelpers_1.assign({}, c.attributes || {});
        var s = t.length ? t[t.length - 1] : null;
        var d = o.get(c);
        var d = e.indexOf(d);
        if (d !== -1) {
          u = d;
        }
        var f = editorPluginRenderer.resolvePlugins({
          attributes: g,
          editor: f,
          zoneId: n.getZoneId()
        });
        var v = [];
        var c = JSON.stringify(c.attributes ? sortObjectKeysUtil.sortObjectKeys(c.attributes) : {});
        var p = {
          index: h,
          attributes: g,
          lineState: n,
          key: c
        };
        f.forEach(function (e) {
          if (e.renderInlineWrapper) {
            if (e = e.renderInlineWrapper(p)) {
              v.push(e);
            }
          }
        });
        if (v.length !== 0) {
          g = p.key || c;
          if (s && arrayEqualsUtil.areArraysEqual(s.opWrappers, v) && s.range[1] + 1 === u) {
            s.key += g;
            s.range[1] = u;
          } else {
            if (s) {
              f = s.key;
              c = l.has(f) ? l.get(f) + 1 : 0;
              l.set(f, c);
              s.key += "" + c;
            }
            t.push({
              opWrappers: v,
              key: g,
              range: [u, u]
            });
          }
        }
        return t;
      }, []);
      var d = u.length;
      while (--d >= 0) {
        (function () {
          var t = u[d];
          var n = t.opWrappers;
          var o = t.range;
          var l = t.key;
          var a = typescriptRuntimeHelpers_1.readIterable(o, 2);
          var t = a[0];
          var o = a[1];
          var a = e.slice(t, o + 1);
          var a = n.reduce(function (e, t) {
            e = Array.isArray(e) ? e : [e];
            return reactinxElementFactory.cloneElement.apply(undefined, typescriptRuntimeHelpers_1.spread([t, ((t = {})[editorConstantsKeycodes.dataInlineWrapper] = true, t.ref = function (e) {
              r.mu(e, l);
            }, t)], e));
          }, a);
          if (!(a instanceof HTMLElement)) {
            a.props.key = l;
          }
          e.splice(t, o - t + 1, a);
        })();
      }
      return e;
    };
    n.render = function () {
      var e;
      var t = this.props.editor;
      var n = this._u();
      return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.DivSymbol, typescriptRuntimeHelpers_1.assign({}, ((e = {})[editorConstantsKeycodes.dataNode] = true, e), {
        ref: this.handleRef,
        dir: t._dir || "auto",
        className: this.eu
      }), n);
    };
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "handleRef", null);
    return t;
  }(reactinxDomContextExports.ReactInXExports.Component);
  var V = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      n.vc = false;
      n.ac = {
        mainContentLines: [],
        retentiveLines: [],
        invisibleLines: []
      };
      n.childrenCommonProps = {
        editor: t.editor
      };
      return n;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    var n = t.prototype;
    n.componentWillReceiveProps = function (e) {
      this.childrenCommonProps = {
        editor: e.editor
      };
      this.jc(e);
    };
    n.componentDidMount = function () {
      var e;
      var t;
      this.vc = true;
      if ((t = (e = this.props).onMount) !== null && t !== undefined) {
        t.call(e);
      }
      this.hc();
      this.fc();
    };
    n.componentDidUpdate = function (e) {
      var t = this.props.editor;
      if (t.getStatus("isPainting")) {
        t.setStatus("isPainting", false);
        this.hc();
        this.fc();
      }
    };
    n.componentWillUnmount = function () {
      this.vc = false;
      var e = this.props;
      var t = e.editor;
      var e = e.state;
      t._getViewModel()._resetNode(e);
    };
    n.fc = function () {
      var e;
      var t;
      var n;
      var o;
      var r = this.props.state;
      var l = this.yc();
      try {
        var a = typescriptRuntimeHelpers_1.values(r.lines);
        var u = a.next();
        for (; !u.done; u = a.next()) {
          var d = u.value;
          var c = d.getNode();
          if (c) {
            c.__index = d.index;
          }
          if (!c && l.has(d)) {
            throw Error("line DOM is null\nzoneId: " + this.props.zoneId + ", line: " + d.index);
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (u && !u.done && (t = a.return)) {
            t.call(a);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      if (r = r.getContainer()) {
        try {
          var h = typescriptRuntimeHelpers_1.values(Array.from(r.children));
          var f = h.next();
          for (; !f.done; f = h.next()) {
            var g = f.value;
            if (!g.getAttribute(editorConstantsKeycodes.dataNode) && !g.getAttribute(editorConstantsKeycodes.dataVirtualListPlaceholder)) {
              this.dc(g);
            }
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            if (f && !f.done && (o = h.return)) {
              o.call(h);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      }
    };
    n.shouldComponentForceUpdate = function (e, t) {
      var n;
      var o;
      var r;
      var s;
      var l;
      var a;
      var u = t.changes;
      var d = true;
      var c = this.props;
      var h = c.editor;
      var t = c.zoneId;
      var h = (c = h.virtualListManager) === null || c === undefined ? undefined : c.getVirtualListModuleOfZone(t);
      var c = !!h && h.isEnabled;
      var t = c && (h == null ? undefined : h.getContentChangeCacheData()) || null;
      var u = (t === null ? undefined : t.originalChanges) || u;
      try {
        var f = typescriptRuntimeHelpers_1.values(u);
        var g = f.next();
        for (; !g.done; g = f.next()) {
          var v = g.value;
          if ([diffChangeConstants.ChangeType.LINE_DELETE, diffChangeConstants.ChangeType.LINE_INSERT].includes(v.type)) {
            d = false;
            break;
          }
          if (v.type === diffChangeConstants.ChangeType.LINE_UPDATE) {
            var p = false;
            var y = 0;
            for (; y < v.inserts.length && !(p = lineAttributeComparator.compareLineAttrs(v.inserts[y].state, v.deletes[y])); ++y);
            if (p) {
              d = false;
              break;
            }
          }
        }
      } catch (e) {
        l = {
          error: e
        };
      } finally {
        try {
          if (g && !g.done && (s = f.return)) {
            s.call(f);
          }
        } finally {
          if (l) {
            throw l.error;
          }
        }
      }
      if (d) {
        return false;
      }
      a = t ? (s = t.nextRenderLines, l = t.nextRetentiveLines, typescriptRuntimeHelpers_1.spread(new Set(typescriptRuntimeHelpers_1.spread(s, l)))) : e.state.lines;
      var e = this.props.state.lines;
      var m = new Map();
      try {
        var C = typescriptRuntimeHelpers_1.values(e);
        var S = C.next();
        for (; !S.done; S = C.next()) {
          var E = S.value;
          m.set(E.getKey(), E);
        }
      } catch (e) {
        b = {
          error: e
        };
      } finally {
        try {
          if (S && !S.done && (n = C.return)) {
            n.call(C);
          }
        } finally {
          if (b) {
            throw b.error;
          }
        }
      }
      var b;
      var _;
      var M = false;
      var y = 0;
      for (; y < a.length; ++y) {
        var I = a[y];
        if (M = this.mc(I)) {
          break;
        }
        var w = m.get(I.getKey());
        if (w && lineAttributeComparator.compareLineAttrs(I, w)) {
          M = true;
          break;
        }
      }
      if (!M) {
        _ = t ? (b = t.prevRenderLines, _ = t.prevRetentiveLines, typescriptRuntimeHelpers_1.spread(new Set(typescriptRuntimeHelpers_1.spread(b, _)))) : this.props.state.lines;
        try {
          var L = typescriptRuntimeHelpers_1.values(_);
          var N = L.next();
          for (; !N.done; N = L.next()) {
            var A = N.value;
            if (M = this.mc(A)) {
              break;
            }
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            if (N && !N.done && (r = L.return)) {
              r.call(L);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
      }
      if (M && c && h != null) {
        h.beforeRendererForceUpdate();
      }
      return M;
    };
    n.mc = function (e) {
      return this.props.editor.pluginManager.getLineWrapperInfo(e).hasWrapper;
    };
    n.dc = function (e) {
      var t;
      var n;
      var o;
      var r = Array.from(e.querySelectorAll("[" + editorConstantsKeycodes.dataNode + "]"));
      if (r.length) {
        var l = r[0].__index;
        var a = [];
        try {
          var u = typescriptRuntimeHelpers_1.values(r);
          var d = u.next();
          for (; !d.done; d = u.next()) {
            var c = d.value.__key;
            if (c) {
              a.push(c);
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (d && !d.done && (n = u.return)) {
              n.call(u);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        if (a.length !== 0) {
          var h = reactLifecycleDiffConstants.markPrefix + a.join(reactLifecycleDiffConstants.defaultSeparator);
          var f = e;
          while (f) {
            f.__key = h;
            f.__index = l;
            f = (o = f.firstElementChild) !== null && o !== undefined && o.getAttribute(editorConstantsKeycodes.dataNode) ? null : f.firstElementChild;
          }
        }
      }
    };
    n.hc = function () {
      var e = this;
      Promise.resolve().then(function () {
        var t;
        var n;
        var i;
        if (e.vc) {
          i = Array.from(e.yc());
          if ((n = (t = e.props).onDidPaint) !== null && n !== undefined) {
            n.call(t, i.map(function (e, t) {
              return {
                data: e,
                originIndex: t
              };
            }));
          }
        }
      });
    };
    n.jc = function (e) {
      var t = (e = e === undefined ? this.props : e).editor;
      var n = e.zoneId;
      var e = e.state;
      var n = (t = t.virtualListManager) === null || t === undefined ? undefined : t.getVirtualListModuleOfZone(n);
      this.ac.mainContentLines = n != null && n.isEnabled ? n.getNextRenderLines() : e.lines;
      this.ac.retentiveLines = n != null && n.isEnabled ? n.getRetentiveLines() : [];
      this.ac.invisibleLines = n != null && n.isEnabled ? n.getInvisibleLines() : [];
    };
    n.yc = function () {
      var e = this.ac;
      var t = e.mainContentLines;
      var n = e.retentiveLines;
      var e = e.invisibleLines;
      var o = new Set(e);
      return new Set(typescriptRuntimeHelpers_1.spread(t, n).filter(function (e) {
        return !o.has(e);
      }));
    };
    n.render = function () {
      var e = this;
      this.jc();
      var t = this.props;
      var n = t.editor;
      var t = t.zoneId;
      var n = (n = n.virtualListManager) === null || n === undefined ? undefined : n.getVirtualListModuleOfZone(t);
      var t = [];
      if (this.vc && n != null && n.isEnabled) {
        t = ((r = (o = n == null ? undefined : n.getContentChangeCacheData) === null || o === undefined ? undefined : o.call(n)) === null || r === undefined ? undefined : r.extraForceUpdateLines) || [];
      }
      var o = this.ac;
      var n = o.mainContentLines;
      var r = o.retentiveLines;
      var o = o.invisibleLines;
      var s = new Set(o);
      var r = Array.from(new Set(typescriptRuntimeHelpers_1.spread(n, r, t).filter(function (e) {
        return !s.has(e);
      }))).sort(function (e, t) {
        return e.index - t.index;
      });
      var t = r.map(function (t) {
        return reactinxDomContextExports.ReactInXExports.createElement(W, typescriptRuntimeHelpers_1.assign({}, e.childrenCommonProps, {
          state: t,
          key: t.getKey()
        }));
      });
      editorPluginRenderer.wrapElements(r, t, function (t) {
        return e.props.editor.pluginManager.getLineWrapperInfo(t);
      });
      return t;
    };
    return t;
  }(reactinxDomContextExports.ReactInXExports.Component);
  function B(e) {
    var t = e.editor;
    var n = e.zoneId;
    var o = e.Context;
    var r = e.contextValue;
    var s = e.children;
    var e = typescriptRuntimeHelpers_1.readIterable(reactCoreLibraryReexport.useState(r), 2);
    var r = e[0];
    var a = e[1];
    reactCoreLibraryReexport.useEffect(function () {
      function e(e) {
        if (e.zoneId === n && e.Context === o) {
          a(e.contextValue);
        }
      }
      t.on(editorEventConstants.editorEventTypes.REACT_CONTEXT_UPDATE, e);
      return function () {
        t.off(editorEventConstants.editorEventTypes.REACT_CONTEXT_UPDATE, e);
      };
    }, [t, n, o]);
    return reactCoreLibraryReexport.createElement(o.Provider, {
      value: r
    }, s);
  }
  var domElementPositionUtils = require("dom-element-position-utils") /*id: 685116*/;
  var editorReactComponent = require("editor-react-component") /*id: 704772*/;
  function X(e) {
    var t;
    var n;
    var v;
    var y;
    var C;
    var S;
    var E;
    var b;
    var _;
    var M;
    var I;
    var R;
    var x;
    var N = e.zoneId;
    var A = e.editor;
    var T = e.style;
    var O = e.className;
    var z = e.editable;
    var P = e.placeholder;
    var k = P === undefined ? "" : P;
    var D = e.root;
    var Z = D !== undefined && D;
    var W = e.ignoreContainerEditable;
    var F = W !== undefined && W;
    var q = e.register;
    var X = e.plugins;
    var U = e.scroller;
    var H = e.scrollerOptions;
    var P = e.contextList;
    var D = P === undefined ? [] : P;
    var W = e.customizedProviderConstructorList;
    var P = W === undefined ? [] : W;
    var K = e.children;
    var j = e.onMount;
    var G = e.onDidPaint;
    var W = e.isSSR;
    var Q = typescriptRuntimeHelpers_1.rest(e, ["zoneId", "editor", "style", "className", "editable", "placeholder", "root", "ignoreContainerEditable", "register", "plugins", "scroller", "scrollerOptions", "contextList", "customizedProviderConstructorList", "children", "onMount", "onDidPaint", "isSSR"]);
    function J() {
      var e;
      var t;
      if (Q.modules) {
        try {
          var n = typescriptRuntimeHelpers_1.values(Object.keys(Q.modules));
          var o = n.next();
          for (; !o.done; o = n.next()) {
            var r;
            var s;
            var l;
            var a = o.value;
            var u = Q.modules[a];
            if (u) {
              s = (r = typescriptRuntimeHelpers_1.readIterable(u, 2))[0];
              l = r[1];
              A.modulesContainer.setZoneModule(N, a, s, l);
            }
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
      }
    }
    J();
    var Y = (n = (t = {
      editor: A,
      zoneId: N,
      contextList: typescriptRuntimeHelpers_1.spread([{
        Context: reactEditorContext.editorContext,
        contextValue: A
      }], D),
      customizedProviderConstructorList: P
    }).editor, v = t.zoneId, y = t.contextList, C = t.customizedProviderConstructorList, S = reactCoreLibraryReexport.useRef(null), reactCoreLibraryReexport.useEffect(function () {
      var e;
      var t;
      var o;
      var r;
      if (S.current) {
        try {
          var s = typescriptRuntimeHelpers_1.values(y);
          var a = s.next();
          for (; !a.done; a = s.next()) {
            var u;
            var d = a.value;
            var c = d.Context;
            var h = d.contextValue;
            if (S.current.has(c) && S.current.get(c) !== h) {
              u = {
                zoneId: v,
                Context: c,
                contextValue: h
              };
              n.call(editorEventConstants.editorEventTypes.REACT_CONTEXT_UPDATE, u);
            }
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            if (a && !a.done && (r = s.return)) {
              r.call(s);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
      } else {
        S.current = new WeakMap();
        try {
          var f = typescriptRuntimeHelpers_1.values(y);
          var g = f.next();
          for (; !g.done; g = f.next()) {
            var p = g.value;
            var c = p.Context;
            var h = p.contextValue;
            S.current.set(c, h);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (g && !g.done && (t = f.return)) {
              t.call(f);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      }
    }, [n, v, y]), {
      Provider: function (e) {
        var t;
        e = e.children;
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, y.reduce(function (e, t) {
          var i = t.Context;
          var t = t.contextValue;
          return reactCoreLibraryReexport.createElement(B, {
            editor: n,
            zoneId: v,
            Context: i,
            contextValue: t
          }, e);
        }, (t = e, typescriptRuntimeHelpers_1.spread(C).reduce(function (e, t) {
          return t(e);
        }, t))));
      }
    }).Provider;
    var $ = reactCoreLibraryReexport.useRef(null);
    var ee = reactCoreLibraryReexport.useRef(null);
    var et = reactCoreLibraryReexport.useRef(null);
    var en = reactCoreLibraryReexport.useCallback(function (e) {
      var t;
      if ($.current = e) {
        if (t = A.getContentState().getZoneState(N)) {
          A._getViewModel()._setNode(t, e);
        }
      }
    }, [A, N]);
    if (!Z) {
      if (X && q) {
        A.error({
          message: "Simultaneous usage of both plugins and register is not permissible.",
          level: errorHandlerUtil.ErrorLevel.ERROR
        });
      }
      if (X) {
        A.pluginManager._registerV2(X, N);
      } else if (q) {
        A.pluginManager._resetPluginConstructorToZoneMap(N);
        try {
          var ei = typescriptRuntimeHelpers_1.values(q(A));
          var eo = ei.next();
          for (; !eo.done; eo = ei.next()) {
            var er = eo.value;
            A.pluginManager.register(er, N);
          }
        } catch (e) {
          ed = {
            error: e
          };
        } finally {
          try {
            if (eo && !eo.done && (x = ei.return)) {
              x.call(ei);
            }
          } finally {
            if (ed) {
              throw ed.error;
            }
          }
        }
      }
    }
    function es() {
      var e;
      if ($.current) {
        if (!Z) {
          A.pluginManager.call("zoneDidMount", {
            zoneId: N
          }, {
            zoneId: N
          });
        }
        if (j != null) {
          j($.current);
        }
        if ((e = A.getContentState().getZoneState(N)) !== null && e !== undefined) {
          e.setPlaceholder(k);
        }
        A._toggleZonePlaceHolder(N);
      }
    }
    function el(e, t = {}) {
      if (A.mounted !== false) {
        if (G) {
          G(e, t);
        }
        A.call(editorEventConstants.editorEventTypes.PAINT, {
          data: e,
          zoneId: N
        });
        if (A.selection.getSelection().start.zoneId === N && !A.getStatus("isPerforming") && !A.getStatus("preventUpdateDomSelection") && !A.getStatus("isComposing") && !!A.isFocus()) {
          A.selection.updateBrowserSelection();
        }
        A.setStatus("contentChanged", false);
        A.call(editorConstantsKeycodes.dirtyDomWithoutChangeset);
      }
    }
    function ea(e, t = true) {
      var n = A.getContentState().getZoneState(N);
      if (n) {
        try {
          A.trace.start();
          A.trace.add({
            extra: {
              isInitialRender: t
            }
          });
          var i = reactinxDomRenderer.renderReactInX(V, {
            editor: A,
            zoneId: N,
            state: n,
            onMount: es,
            onDidPaint: el
          }, e, {
            PluginContextProvider: Y
          });
          A.trace.reset();
          return i;
        } catch (i) {
          if (!t || (t = et.current) !== null && t !== undefined && t.isEnabled) {
            if (!A.mounted) {
              throw i;
            }
            A.error({
              message: "[render error] " + i.message,
              level: errorHandlerUtil.ErrorLevel.FATAL,
              e: i,
              extra: A.trace.export()
            });
            return null;
          }
          if (N === zeroConstantModule_1.versionValue) {
            return undefined;
          } else {
            reactinxDomRenderer.unmountComponents(n);
            e.innerHTML = "";
            return ea(e, false);
          }
        }
      }
    }
    reactCoreLibraryReexport.useLayoutEffect(function () {
      function e(e) {
        var t;
        var n = e.changes;
        var i = e.diffResult;
        var s = e.previous;
        var a = e.current;
        var u = e.options;
        if (N in n && N in i) {
          A.setStatus("isPainting", true);
          var h = s.getContent().get(N);
          if (h) {
            try {
              function f() {
                A.call(editorEventConstants.editorEventTypes.BEFORE_DOM_RENDERER_RECONCILE, {
                  applyType: u.type,
                  zoneId: N
                });
              }
              function g(e) {
                reactinxDomReconciler.reconcile({
                  diffResult: e,
                  previousState: h,
                  ReactContextProvider: Y
                });
              }
              function v() {
                A.call(editorEventConstants.editorEventTypes.AFTER_DOM_RENDERER_RECONCILE, {
                  applyType: u.type,
                  zoneId: N
                });
              }
              if ((t = et.current) !== null && t !== undefined && t.isEnabled) {
                et.current.handleContentChange({
                  changes: n[N],
                  previousZoneState: h,
                  zoneDiff: i[N],
                  applyOptions: u,
                  contentChangeRender: g,
                  beforeRender: f,
                  afterRender: v
                });
              } else {
                f();
                g(i[N]);
                v();
              }
            } catch (e) {
              v = {
                message: "[content change reconcile error]: " + (e == null ? undefined : e.message),
                level: errorHandlerUtil.ErrorLevel.ERROR,
                e: (v = e == null ? undefined : e.originalError) !== null && v !== undefined ? v : e,
                extra: e != null && e.extraInfo ? JSON.stringify(e.extraInfo) : ""
              };
              if (!$.current || N === zeroConstantModule_1.versionValue) {
                v.level = e != null && e.isFatal ? errorHandlerUtil.ErrorLevel.FATAL : errorHandlerUtil.ErrorLevel.ERROR;
                A.error(v);
                return;
              }
              A.error(v);
              reactinxDomRenderer.unmountComponents(i[N].state);
              $.current.innerHTML = "";
              if (!(v = A.getContentState().getZoneState(N))) {
                return;
              }
              var p = $.current;
              if ((i = et.current) !== null && i !== undefined && i.isEnabled) {
                A._getViewModel()._setNode(v, $.current);
                et.current.initializeZoneRender(function () {
                  ea(p, false);
                });
              } else {
                ea(p, false);
                A._getViewModel()._setNode(v, $.current);
              }
            }
          }
          if (A.getStatus("isPainting")) {
            A.setStatus("isPainting", false);
          }
          if (a = a.getContent().get(N)) {
            ee.current = a;
          }
          A._toggleZonePlaceHolder(N);
        }
      }
      A.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, e, {
        zoneId: N,
        priority: 100
      });
      return function () {
        A.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, e);
      };
    }, [A, N, Y, es, el]);
    reactCoreLibraryReexport.useLayoutEffect(function () {
      var e;
      var t;
      var n;
      var r;
      if (Z && K) {
        es();
      } else if ($.current) {
        e = $.current;
        if (t = A.getContentState().getZoneState(N)) {
          J();
          if (n = A.modulesContainer.getZoneModule(N, editorModuleConstants.virtualListConsts.VirtualListModule)) {
            n = (r = typescriptRuntimeHelpers_1.readIterable(n, 2))[0];
            r = r[1];
            et.current = n.create(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, r), {
              editor: A,
              zoneId: N
            }));
            et.current.setRenderInformation({
              ReactContextProvider: Y
            });
          }
          if ((r = et.current) !== null && r !== undefined && r.isEnabled) {
            et.current.initializeZoneRender(function () {
              ea(e);
            });
          } else {
            ea(e);
          }
          ee.current = t;
        } else {
          A.error({
            message: "[render zone content failed]: ZoneState is not exist. zoneId: " + N,
            level: errorHandlerUtil.ErrorLevel.ERROR
          });
        }
      }
      return function () {
        (function () {
          if (!Z) {
            A.pluginManager.call("zoneWillUnmount", {
              zoneId: N
            }, {
              zoneId: N
            });
          }
          var e;
          var t;
          var n = A.getContentState().getZoneState(N);
          if (n != null && n.instance) {
            reactinxDomRenderer.unmountComponents(n);
          } else if (ee.current) {
            reactinxDomRenderer.unmountComponents(ee.current);
          }
          if ($.current) {
            A._getViewModel()._deleteNode($.current);
          }
          if ((n = et.current) !== null && n !== undefined) {
            n.destroy();
          }
          et.current = null;
          if (Q.modules) {
            try {
              var o = typescriptRuntimeHelpers_1.values(Object.keys(Q.modules));
              var r = o.next();
              for (; !r.done; r = o.next()) {
                var s = r.value;
                A.modulesContainer.unSubscribingZone(N, s);
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
          }
        })();
      };
    }, []);
    var eu = reactCoreLibraryReexport.useRef(!!K);
    reactCoreLibraryReexport.useLayoutEffect(function () {
      var e;
      if (Z && K && !eu.current && (e = A.getContentState().getZoneState(zeroConstantModule_1.versionValue))) {
        e.lines.forEach(function (e) {
          var t = e.getNode();
          reactinxDomRenderer.unmountComponents(e);
          if (t != null) {
            t.remove();
          }
        });
      }
      eu.current = !!K;
    }, [Z, K, A]);
    var ed = reactCoreLibraryReexport.useMemo(function () {
      if (!Z || !F) {
        if (z && !A.inputModel) {
          A.error({
            message: "InputModel is required when editable is set to true",
            level: errorHandlerUtil.ErrorLevel.FATAL
          });
        }
        return z;
      }
    }, [z, Z, F]);
    reactCoreLibraryReexport.useLayoutEffect(function () {
      var e = Z && F;
      if (e) {
        A.setContainerContentEditableLock(true);
      }
      return function () {
        if (e) {
          A.setContainerContentEditableLock(false);
        }
      };
    }, [A, Z, F]);
    reactCoreLibraryReexport.useEffect(function () {
      function e(e) {
        var t;
        var n;
        var r = e.zoneId;
        var s = e.lineArr;
        var d = e.from;
        var h = function (e, t, n) {
          var i;
          var t = e.getContentState().getZoneState(t);
          if (!t) {
            return null;
          }
          for (var o = t.parent; o;) {
            if (o instanceof editorLineModel.EditorLine && ((i = o.parent) === null || i === undefined ? undefined : i.getZoneId()) === n) {
              return o;
            }
            o = o.parent;
          }
          return null;
        }(A, N, r);
        if ((e = et.current) !== null && e !== undefined && e.isEnabled && h && s != null && s.includes(h.index)) {
          if (t = A.modulesContainer.getZoneModule(N, editorModuleConstants.virtualListConsts.VirtualListModule)) {
            n = typescriptRuntimeHelpers_1.readIterable(t, 2)[1];
            et.current.handleAncestorForceRefresh(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, n), {
              zoneId: N,
              editor: A
            }));
          }
        } else if (N === r) {
          if (d === "input") {
            A.error({
              message: "warning: force refresh view by input model",
              level: errorHandlerUtil.ErrorLevel.ERROR
            });
          }
          t = A.getContentState().getZoneState(N);
          n = ee.current;
          if (t && n) {
            en(d = n.getContainer());
            if ((d = et.current) !== null && d !== undefined && d.isEnabled) {
              et.current.handleForceRefresh(n, s);
            }
            A.setStatus("isPainting", true);
            A.call(editorEventConstants.editorEventTypes.BEFORE_DOM_RENDERER_RECONCILE, {
              applyType: "forceRefresh",
              zoneId: r
            });
            reactinxDomReconciler.reconcile({
              diffResult: {
                state: t,
                changes: null
              },
              previousState: n,
              ReactContextProvider: Y
            });
            A.call(editorEventConstants.editorEventTypes.AFTER_DOM_RENDERER_RECONCILE, {
              applyType: "forceRefresh",
              zoneId: r
            });
            if (A.getStatus("isPainting")) {
              A.setStatus("isPainting", false);
            }
            ee.current = t;
          }
        }
      }
      A.on("_forceRefresh", e);
      return function () {
        A.off("_forceRefresh", e);
      };
    }, [A, N, en, Y]);
    m(A, N);
    E = (U = U ?? $.current) !== null && U !== undefined && U;
    if ((b = H) === undefined) {
      b = {};
    }
    _ = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(function () {
      if (_.current) {
        _.current.destroy();
      }
      var e = null;
      if (E === undefined || E === true) {
        e = document.scrollingElement || document.body;
      } else if (E === false) {
        e = null;
      } else if (E instanceof Element || E instanceof Window) {
        e = E;
      }
      _.current = e !== null ? new w(A, e, typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, b), {
        getViewPortPadding: A.getViewPortPadding
      }), N, (e = b.scrollListenEventConfigs) !== null && e !== undefined ? e : [{
        type: editorEventConstants.editorEventTypes.SELECTION_CHANGE,
        overideConfig: {
          triggerAfterPaint: true
        }
      }]) : null;
    }, [E, N, A, b]);
    reactCoreLibraryReexport.useEffect(function () {
      return function () {
        var e;
        if ((e = _ == null ? undefined : _.current) !== null && e !== undefined) {
          e.destroy();
        }
      };
    }, []);
    _.current;
    if (!A.isSSR && !W || Z && K) {
      return reactCoreLibraryReexport.createElement("div", {
        key: N,
        ref: en,
        style: T || {
          outline: "none"
        },
        className: editorConstantsKeycodes.zoneContainer + " " + (O || "zoneId-" + N + " ace-editor"),
        "data-zone-id": N,
        "data-zone-container": "*",
        "data-slate-editor": "true",
        contentEditable: ed,
        suppressContentEditableWarning: true
      }, Z && K);
    } else if (H = A.getContentState().getZoneState(N)) {
      M = {
        state: H,
        editor: A,
        zoneId: N,
        onMount: es,
        onDidPaint: el
      };
      if (Y) {
        domEnvManager.setRootObj(Y);
      }
      domEnvManager.initDomMode(true);
      I = reactinxElementFactory.createElement(V, M);
      if (Y) {
        domEnvManager.setRootObj(null);
      }
      domEnvManager.initDomMode(false);
      R = document.createElement("div");
      if (Array.isArray(I)) {
        R.append.apply(R, tsRuntimeHelpers.spreadArgs(I));
      } else {
        R.append(I);
      }
      W = R.innerHTML;
      reactinxDomRenderer.unmountComponents(H);
      return reactCoreLibraryReexport.createElement("div", {
        key: N,
        ref: en,
        style: T || {
          outline: "none"
        },
        className: editorConstantsKeycodes.zoneContainer + " " + (O || "zoneId-" + N + " ace-editor"),
        "data-zone-id": N,
        "data-zone-container": "*",
        "data-slate-editor": "true",
        contentEditable: ed,
        suppressContentEditableWarning: true,
        dangerouslySetInnerHTML: {
          __html: W
        }
      });
    } else {
      A.error({
        message: "[render zone content failed]: ZoneState is not exist. zoneId: " + N,
        level: errorHandlerUtil.ErrorLevel.ERROR
      });
      return null;
    }
  }
  var U = function (e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    t.prototype.render = function () {
      var e = this.editor;
      var t = this.props;
      var n = t.style;
      var i = t.editable;
      var o = t.ignoreContainerEditable;
      var r = t.className;
      var l = t.scroller;
      var a = t.contextList;
      var u = t.customizedProviderConstructorList;
      var d = t.scrollerOptions;
      var c = t.modules;
      var t = t.plugins;
      if (t) {
        e.pluginManager._registerV2(t);
      }
      if (c) {
        e._registerModules(c);
      }
      if (!!i && !o && !e.inputModel) {
        e.error({
          message: "InputModel is required when editable is set to true",
          level: editorConstantsKeycodes.LogLevel.FATAL
        });
      }
      return reactCoreLibraryReexport.createElement(reactEditorContext.editorContext.Provider, {
        value: e
      }, reactCoreLibraryReexport.createElement(X, {
        root: true,
        zoneId: "0",
        editor: e,
        style: n || {},
        className: "editor-kit-container " + domElementPositionUtils.getPlatformClasses() + " " + (r || ""),
        editable: i,
        onMount: this.onMount,
        scroller: l,
        scrollerOptions: d,
        contextList: a,
        customizedProviderConstructorList: u
      }));
    };
    return t;
  }(editorReactComponent.EditorComponent);
  require.d(exports, {
    ZoneRenderer: function () {
      return X;
    },
    EditorComponent: function () {
      return U;
    }
  });
}