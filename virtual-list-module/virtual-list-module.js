// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'VirtualListModule'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 727271
         */
module.exports = function (module, exports, require) {
  var i;
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var errorHandlerUtil = require("error-handler-util") /*id: 161088*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  var diffChangeConstants = require("diff-change-constants") /*id: 699476*/;
  var reactinxDomRenderer = require("reactinx-dom-renderer") /*id: 415017*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var domEnvManager = require("dom-env-manager") /*id: 219737*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var editorPluginRenderer = require("editor-plugin-renderer") /*id: 69913*/;
  function c(e) {
    var t = Math.ceil(window.innerHeight);
    if (f(e)) {
      return {
        top: 0,
        bottom: t
      };
    } else if ((e = {
      top: Math.max(0, Math.floor((e = e.getBoundingClientRect()).top)),
      bottom: Math.min(t, Math.ceil(e.bottom))
    }).bottom < e.top) {
      return {
        top: 0,
        bottom: t
      };
    } else {
      return e;
    }
  }
  function d(e, t) {
    if (f(e)) {
      e.scrollTo(e.scrollX, e.scrollY + t);
    } else {
      t = e.scrollTop + t;
      e.scrollTop = t;
    }
  }
  function f(e) {
    return e instanceof Window || e.toString() === "[object Window]";
  }
  var v = function (e) {
    function t(n, i, r, o = {}) {
      (n = e.call(this, "[VirtualListModule Error] " + n) || this).isFatal = i;
      n.originalError = r;
      n.extraInfo = o;
      n.type = "VirtualListError";
      Object.setPrototypeOf(n, t.prototype);
      return n;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    return t;
  }(Error);
  var g = function () {
    function e() {}
    e.setEditor = function (e) {
      if (e.error) {
        this.editor = e;
      }
    };
    e.report = function (e, t) {
      var n = this;
      e.extra;
      var i = typescriptRuntimeHelpers_1.rest(e, ["extra"]);
      var o = typescriptRuntimeHelpers_1.assign({}, i);
      try {
        if (e.extra) {
          o.extra = JSON.stringify(e.extra);
        }
      } catch (e) {}
      if (t) {
        var s = t.uniqueKey;
        if (t.debounce && s) {
          if (this.timerMap[s]) {
            clearTimeout(this.timerMap[s]);
            delete this.timerMap[s];
          }
          this.timerMap[s] = setTimeout(function () {
            var e;
            if ((e = n.editor) !== null && e !== undefined) {
              e.error(o);
            }
          });
          return;
        }
      }
      if ((s = this.editor) !== null && s !== undefined) {
        s.error(o);
      }
    };
    e.timerMap = {};
    return e;
  }();
  var virtualListConstants = require("virtual-list-constants") /*id: 951136*/;
  var elementJsonSerializer = require("element-json-serializer") /*id: 39786*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var m = function () {
    function e() {
      this.changeMap = new Map();
    }
    var t = e.prototype;
    t.remove = function (e) {
      var t = w(e);
      var n = this.changeMap.get(t);
      if (n) {
        throw new v(R("remove", t, e, n), false);
      }
      this.changeMap.set(t, {
        type: "remove"
      });
      return this;
    };
    t.insert = function (e) {
      var t = w(e);
      var n = this.changeMap.get(t);
      if (n) {
        throw new v(R("insert", t, e, n), false);
      }
      this.changeMap.set(t, typescriptRuntimeHelpers_1.assign({
        type: "insert"
      }, e));
      return this;
    };
    t.update = function (e, t) {
      var n = w(e);
      var i = this.changeMap.get(n);
      if (i && i.type !== "update") {
        throw new v(R("update", n, e, i), false);
      }
      i = typescriptRuntimeHelpers_1.assign({
        type: "update",
        startLineDiff: 0,
        endLineDiff: 0
      }, i);
      i.startLineDiff += t.startLineDiff;
      i.endLineDiff += t.endLineDiff;
      this.changeMap.set(n, i);
      return this;
    };
    return e;
  }();
  var b = function () {
    function e(e, t, n, i) {
      this.s = e;
      this.qe = t;
      this.Pi = n;
      this.ji = i;
      this.Di = new Map();
    }
    var t = e.prototype;
    t.getPlaceholderRangeList = function () {
      return typescriptRuntimeHelpers_1.spread(this.Di.values());
    };
    t.findPlaceholderItem = function (e, t) {
      var n;
      var i;
      if (t === undefined) {
        t = this.Di;
      }
      try {
        var o = typescriptRuntimeHelpers_1.values(t.values());
        var s = o.next();
        for (; !s.done; s = o.next()) {
          var a = s.value;
          if (e >= a.startLine && e <= a.endLine) {
            return a;
          }
        }
      } catch (e) {
        n = {
          error: e
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
      return null;
    };
    t.getPlaceholderNode = function (e, t) {
      var n = (t = t === undefined ? {} : t).isRequired;
      var t = n !== undefined && n;
      var n = (n = (n = this.findPlaceholderItem(e)) === null || n === undefined ? undefined : n.node) !== null && n !== undefined ? n : null;
      if (!n && t) {
        throw new v("placeholder node is null", true, undefined, {
          line: e
        });
      }
      return n;
    };
    t.findAllPlaceholderItemLargerThan = function (e) {
      var t;
      var n;
      var i = [];
      try {
        var o = typescriptRuntimeHelpers_1.values(this.Di.values());
        var s = o.next();
        for (; !s.done; s = o.next()) {
          var a = s.value;
          if (e < a.startLine) {
            i.push(a);
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (s && !s.done && (n = o.return)) {
            n.call(o);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return i;
    };
    t.updateState = function (e) {
      if (e.changeMap.size === 0) {
        return this.Di;
      }
      var t = new Map(this.Di);
      var n = new Map(e.changeMap);
      try {
        var i = typescriptRuntimeHelpers_1.values(n);
        var o = i.next();
        for (; !o.done; o = i.next()) {
          var s = typescriptRuntimeHelpers_1.readIterable(o.value, 2);
          var a = s[0];
          if ((v = s[1]).type !== "insert") {
            if (v.type === "update") {
              this.Ki(t, a, v);
            } else if (v.type === "remove") {
              this.Hi(t, a);
            }
            n.delete(a);
          }
        }
      } catch (e) {
        h = {
          error: e
        };
      } finally {
        try {
          if (o && !o.done && (c = i.return)) {
            c.call(i);
          }
        } finally {
          if (h) {
            throw h.error;
          }
        }
      }
      try {
        var l = typescriptRuntimeHelpers_1.values(n);
        var u = l.next();
        for (; !u.done; u = l.next()) {
          var h;
          var c;
          var d;
          var f;
          var v;
          var g = typescriptRuntimeHelpers_1.readIterable(u.value, 2);
          var a = g[0];
          if ((v = g[1]).type === "insert") {
            this.Ii(t, a, v);
          }
        }
      } catch (e) {
        d = {
          error: e
        };
      } finally {
        try {
          if (u && !u.done && (f = l.return)) {
            f.call(l);
          }
        } finally {
          if (d) {
            throw d.error;
          }
        }
      }
      this.Ji(t);
      this.Di = new Map(typescriptRuntimeHelpers_1.spread(t).sort(function (e, t) {
        e = typescriptRuntimeHelpers_1.readIterable(e, 2)[1];
        t = typescriptRuntimeHelpers_1.readIterable(t, 2)[1];
        return e.startLine - t.startLine;
      }));
      return this.Di;
    };
    t.updatePlaceholderRectInfoByIndex = function (e) {
      if (e = this.findPlaceholderItem(e)) {
        this.Fi(e);
      }
    };
    t.updateAllPlaceholderRectInfo = function () {
      var e;
      var t;
      try {
        var n = typescriptRuntimeHelpers_1.values(this.Di.values());
        var i = n.next();
        for (; !i.done; i = n.next()) {
          var o = i.value;
          this.Fi(o);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (t = n.return)) {
            t.call(n);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    t.Fi = function (e) {
      var t = this.Ri(e);
      if (t.width !== e.width || t.height !== e.height) {
        e.width = t.width;
        e.height = t.height;
        this.zi(e.node, t);
        this.Di.set(w(e), e);
      }
    };
    t.removeAll = function () {
      var e;
      var t;
      if (this.Di.size) {
        try {
          var n = typescriptRuntimeHelpers_1.values(this.Di.keys());
          var i = n.next();
          for (; !i.done; i = n.next()) {
            var o = i.value;
            this.Hi(this.Di, o);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (i && !i.done && (t = n.return)) {
              t.call(n);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      }
    };
    t.forceRenderText = function () {
      var e;
      var t;
      var n;
      var i = this.s.getContentState().getZoneState(this.qe);
      if (i) {
        try {
          var o = typescriptRuntimeHelpers_1.values(this.Di);
          var s = o.next();
          for (; !s.done; s = o.next()) {
            var a = typescriptRuntimeHelpers_1.readIterable(s.value, 2)[1];
            var l = "";
            var u = a.startLine;
            for (; u <= a.endLine; u++) {
              l += ((n = i.getLine(u)) === null || n === undefined ? undefined : n.getModelText()) || "";
            }
            a.node.textContent = l;
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (s && !s.done && (t = o.return)) {
              t.call(o);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      }
    };
    t.cancelForceRenderText = function () {
      var e;
      var t;
      try {
        var n = typescriptRuntimeHelpers_1.values(this.Di);
        var i = n.next();
        for (; !i.done; i = n.next()) {
          typescriptRuntimeHelpers_1.readIterable(i.value, 2)[1].node.textContent = "";
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (t = n.return)) {
            t.call(n);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    t.checkPlaceholderNodeRemoved = function () {
      var e;
      var t;
      var n = this.s.getContentState().getZoneState(this.qe);
      var i = n == null ? undefined : n.getContainer();
      if (i) {
        var o = new m();
        try {
          var s = typescriptRuntimeHelpers_1.values(typescriptRuntimeHelpers_1.spread(this.Di.values()));
          var a = s.next();
          for (; !a.done; a = s.next()) {
            var l = a.value;
            if (!i.contains(l.node)) {
              o.remove(l);
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (a && !a.done && (t = s.return)) {
              t.call(s);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        this.updateState(o);
      }
    };
    t.Hi = function (e, t) {
      var n;
      var i = e.get(t);
      if (i) {
        n = i.node;
        if ((i = (i = this.s.virtualListManager) === null || i === undefined ? undefined : i.getIntersectionObserver(this.qe)) != null) {
          i.unobserve(n);
        }
        n.remove();
        e.delete(t);
      }
    };
    t.Ii = function (e, t, n) {
      var i;
      var o = n.startLine;
      var s = n.endLine;
      if (!(s < o) && !e.has(t)) {
        var a = this.s.getContentState().getZoneState(this.qe);
        var l = a == null ? undefined : a.getContainer();
        if (a && l) {
          var u = this.findPlaceholderItem(o, e);
          if (u) {
            this.Ki(e, w(u), {
              startLineDiff: 0,
              endLineDiff: s - o + 1
            });
          } else {
            u = ((n = this.findPlaceholderItem(s + 1, e)) === null || n === undefined ? undefined : n.node) || this.Gi(a, l, s + 1) || null;
            n = this.Qi(o, s);
            a = this.Ri({
              startLine: o,
              endLine: s
            });
            this.zi(n, a);
            try {
              l.insertBefore(n, u);
              var h = (i = this.s.virtualListManager) === null || i === undefined ? undefined : i.getIntersectionObserver(this.qe);
              if (h != null) {
                h.observe(n);
              }
            } catch (e) {
              throw new v(e.message, false, e, {
                referenceLine: s + 1,
                placeholderRange: [o, s],
                referenceNode: u ? elementJsonSerializer.serializeElement(u) : null,
                referenceNodeParent: u !== null && u.parentElement ? elementJsonSerializer.serializeElement(u.parentElement) : null
              });
            }
            e.set(t, typescriptRuntimeHelpers_1.assign({
              node: n,
              startLine: o,
              endLine: s
            }, a));
          }
        }
      }
    };
    t.Gi = function (e, t, n) {
      var i = (n = e.getLine(n)) === null || n === undefined ? undefined : n.getNode();
      if (!i) {
        return null;
      }
      while (i.parentElement && i.parentElement !== t) {
        i = i.parentElement;
      }
      return i;
    };
    t.Ki = function (e, t, n) {
      var i = e.get(t);
      if (i) {
        if ((n = {
          node: i.node,
          startLine: i.startLine + n.startLineDiff,
          endLine: i.endLine + n.endLineDiff,
          width: i.width,
          height: i.height
        }).startLine > n.endLine) {
          this.Hi(e, t);
        } else {
          if ((i = this.Ri(n)).width !== n.width || i.height !== n.height) {
            this.zi(n.node, i);
            n.width = i.width;
            n.height = i.height;
          }
          n.node.setAttribute(editorConstantsKeycodes.dataVirtualListPlaceholder, n.startLine + "-" + n.endLine);
          if (this.Vi(n.startLine, n.endLine)) {
            n.node.toggleAttribute(editorConstantsKeycodes.dataVirtualListInvisiblePlaceholder, true);
          } else {
            n.node.toggleAttribute(editorConstantsKeycodes.dataVirtualListInvisiblePlaceholder, false);
          }
          i = w(n);
          e.delete(t);
          e.set(i, n);
        }
      }
    };
    t.Ji = function (e) {
      var t = typescriptRuntimeHelpers_1.spread(e);
      if (t.length) {
        t.sort(function (e, t) {
          return e[1].startLine - t[1].startLine;
        });
        var n = typescriptRuntimeHelpers_1.readIterable(t[0], 2);
        var i = n[0];
        var o = n[1];
        var s = 1;
        for (; s < t.length; s++) {
          var a = typescriptRuntimeHelpers_1.readIterable(t[s], 2);
          var l = a[0];
          var a = a[1];
          if (o.endLine + 1 !== a.startLine) {
            i = l;
            o = a;
          } else {
            this.Ki(e, i, {
              startLineDiff: 0,
              endLineDiff: a.endLine - a.startLine + 1
            });
            this.Hi(e, l);
          }
        }
      }
    };
    t.Qi = function (e, t) {
      var n = document.createElement("div");
      n.setAttribute(editorConstantsKeycodes.dataVirtualListPlaceholder, e + "-" + t);
      n.contentEditable = "false";
      n[virtualListConstants.zoneIdSymbol] = this.qe;
      if (this.Vi(e, t)) {
        n.toggleAttribute(editorConstantsKeycodes.dataVirtualListInvisiblePlaceholder, true);
      }
      return n;
    };
    t.Vi = function (e, t) {
      return this.ji.getInvisibleLineRanges().some(function (n) {
        var i = n.start;
        var n = n.end;
        return i.index === e && n.index === t;
      });
    };
    t.Ri = function (e) {
      return {
        width: this.Pi.getWidth(e.startLine, e.endLine + 1),
        height: this.Pi.getHeight(e.startLine, e.endLine + 1)
      };
    };
    t.zi = function (e, t) {
      e.style.width = t.width === "auto" ? "auto" : t.width + "px";
      e.style.height = t.height + "px";
    };
    return e;
  }();
  function w(e) {
    return e.startLine + "-" + e.endLine;
  }
  function R(e, t, n, i) {
    return "The change already exists:\nkey: " + t + "\ncurrent change: " + JSON.stringify({
      type: e,
      range: n
    }) + "\nexisting change: " + JSON.stringify(i);
  }
  function x(e, t, n, i) {
    var o = e.startLine;
    var s = e.endLine;
    var a = [];
    var l = [];
    var c = o;
    for (; c <= s; c++) {
      if (!(g = n(c))) {
        throw new v("LineState is not found, line: " + c + ", range: [" + e.startLine + "," + e.endLine + "]", true);
      }
      var d = g.getNode();
      if (!d) {
        throw new v("line node is not found, line: " + c, true);
      }
      a.push(d);
      l.push(g);
    }
    var f = domEnvManager.getEnvMode();
    if (f === "V-DOM") {
      domEnvManager.setEnvMode("DOM");
    }
    editorPluginRenderer.wrapElements(l, a, i);
    if (f === "V-DOM") {
      domEnvManager.setEnvMode("V-DOM");
    }
    if (!a.length) {
      return null;
    }
    i = null;
    if (!(f = t.findPlaceholderItem(o))) {
      var g;
      var p = (g = n(o)) == null ? undefined : g.getNode();
      var t = (t = g == null ? undefined : g.parent) === null || t === undefined ? undefined : t.getContainer();
      throw new v("placeholder node not found, line: " + o, true, undefined, {
        isLineNodeNull: !p,
        isLineNodeInContainer: p && t && t.contains(p)
      });
    }
    if (f.endLine < s) {
      throw new v("insertRange does not match the placeholder node: insertRange: [" + o + ", " + s + "], placeholder node range: [" + f.startLine + ", " + f.endLine + "]", true);
    }
    p = new m();
    if (f.startLine === o) {
      i = f.node;
      p.update(f, {
        startLineDiff: s - f.startLine + 1,
        endLineDiff: 0
      });
    } else if (f.endLine === s) {
      i = f.node.nextElementSibling;
      p.update(f, {
        startLineDiff: 0,
        endLineDiff: o - f.endLine - 1
      });
    } else {
      i = f.node;
      p.update(f, {
        startLineDiff: s - f.startLine + 1,
        endLineDiff: 0
      });
      p.insert({
        startLine: f.startLine,
        endLine: o - 1
      });
    }
    return {
      patch: {
        type: "insert_before",
        nodes: typescriptRuntimeHelpers_1.spread(a),
        referenceNode: i
      },
      placeholderChange: p
    };
  }
  function S(e, t, n) {
    var i = e.startLine;
    var r = e.endLine;
    var o = [];
    var s = i;
    for (; s <= r; s++) {
      var a = n(s);
      if (!a) {
        throw new v("LineState is not found, line: " + s + ", range: [" + e.startLine + "," + e.endLine + "]", true);
      }
      if (a = a.getNode()) {
        o.push(a);
      }
    }
    if (!o.length) {
      return null;
    }
    var l = new m();
    var u = t.findPlaceholderItem(i - 1);
    var t = t.findPlaceholderItem(r + 1);
    if (u && t) {
      if (u !== t) {
        l.update(u, {
          startLineDiff: 0,
          endLineDiff: t.endLine - u.endLine
        });
        l.remove(t);
      }
    } else if (u) {
      l.update(u, {
        startLineDiff: 0,
        endLineDiff: r - u.endLine
      });
    } else if (t) {
      l.update(t, {
        startLineDiff: i - t.startLine,
        endLineDiff: 0
      });
    } else {
      l.insert({
        startLine: i,
        endLine: r
      });
    }
    return {
      patch: {
        type: "remove",
        nodes: o
      },
      placeholderChange: l
    };
  }
  function E(e, t) {
    if (!e) {
      return null;
    }
    var n = t.getHeight();
    if (e.top > n || e.bottom < 0) {
      return null;
    }
    var i = Math.min(Math.max(0, e.top), n);
    var e = Math.max(Math.min(n, e.bottom), 0);
    var i = t.lineAt(i, "down");
    var e = t.lineAt(e, "up");
    if (i && e) {
      if ((e = {
        startLine: i[1],
        endLine: e[1]
      }).endLine < e.startLine) {
        return null;
      } else {
        return e;
      }
    } else {
      return null;
    }
  }
  function M(e, t) {
    var n = e.length ? e[e.length - 1] : null;
    if (n && n.endLine + 1 === t) {
      n.endLine += 1;
    } else {
      e.push({
        startLine: t,
        endLine: t
      });
    }
    return e;
  }
  function I(e) {
    if ((e = /(.*)px$/g.exec(e)) != null && e[1]) {
      return +e[1];
    } else {
      return 0;
    }
  }
  function N(e, t, n = 0.01) {
    return Math.abs(e - t) < n;
  }
  var debounceMaxWaitUtil = require("debounce-max-wait-util") /*id: 869149*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var O = function () {
    function e(e) {
      var t = this;
      this.s = e;
      this.ur = {};
      this.or = new Map();
      this.cr = new WeakMap();
      this.vr = new Map();
      this._r = new WeakMap();
      this.hr = new Set();
      this.jr = debounceMaxWaitUtil.createDebounce(function () {
        var e;
        var n;
        try {
          var i = typescriptRuntimeHelpers_1.values(t.hr);
          var o = i.next();
          for (; !o.done; o = i.next()) {
            var s = o.value;
            var a = t.or.get(s);
            if (a) {
              a.handleViewportResize();
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (o && !o.done && (n = i.return)) {
              n.call(i);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      }, 16);
      this.dr = debounceMaxWaitUtil.createDebounce(function (e) {
        var n;
        if ((n = t.getModule("idleModule")) !== null && n !== undefined) {
          n.stop();
        }
        t.fr(e);
      }, 16);
      this.yr = function (e) {
        var n;
        var i;
        var o;
        var s;
        var a;
        var l;
        var u;
        var h = e.previousRanges;
        var e = e.currentRanges;
        var c = {};
        try {
          var d = typescriptRuntimeHelpers_1.values(h);
          var f = d.next();
          for (; !f.done; f = d.next()) {
            var v = f.value;
            c[v.start.zoneId] = v;
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            if (f && !f.done && (i = d.return)) {
              i.call(d);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
        try {
          var g = typescriptRuntimeHelpers_1.values(e);
          var p = g.next();
          for (; !p.done; p = g.next()) {
            var y;
            var L = p.value;
            var m = L.start.zoneId;
            if (t.hr.has(m) && (y = t.getVirtualListModuleOfZone(m))) {
              y.handleSelectionChange(L);
              delete c[m];
            }
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            if (p && !p.done && (s = g.return)) {
              s.call(g);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
        try {
          var b = typescriptRuntimeHelpers_1.values(Object.values(c));
          var w = b.next();
          for (; !w.done; w = b.next()) {
            m = w.value.start.zoneId;
            if (t.hr.has(m) && (u = t.getVirtualListModuleOfZone(m)) !== null && u !== undefined) {
              u.handleSelectionChange(null);
            }
          }
        } catch (e) {
          a = {
            error: e
          };
        } finally {
          try {
            if (w && !w.done && (l = b.return)) {
              l.call(b);
            }
          } finally {
            if (a) {
              throw a.error;
            }
          }
        }
      };
      this.qr = function () {
        var e;
        if ((e = t.getModule("idleModule")) !== null && e !== undefined) {
          e.stop();
        }
      };
      this.mr = function (e) {
        var n = e.applyType;
        var e = e.zoneId;
        if (n === "forceRefresh" && e && t.hr.has(e) && (e = t.or.get(e))) {
          e.beforeRendererForceUpdate();
        }
      };
      this.Er = function (e) {
        var n = e.applyType;
        var e = e.zoneId;
        if (e) {
          if (n === "forceRefresh" && t.hr.has(e) && (n = t.or.get(e))) {
            n.afterRendererForceUpdate();
            return;
          }
          t.Sr(e);
        }
      };
      this.Mr = function (e) {
        var n;
        var i;
        var o = new Set();
        try {
          var s = typescriptRuntimeHelpers_1.values(e);
          var a = s.next();
          for (; !a.done; a = s.next()) {
            var l;
            var u = a.value;
            var h = u.target[virtualListConstants.zoneIdSymbol];
            if (u.isIntersecting && h && !o.has(h) && (l = t.getVirtualListModuleOfZone(h)) != null && l.isEnabled && !u.target.hasAttribute(editorConstantsKeycodes.dataVirtualListInvisiblePlaceholder)) {
              l.scheduleViewportCheck(undefined, t.wr);
              o.add(h);
            }
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            if (a && !a.done && (i = s.return)) {
              i.call(s);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      };
      this.wr = function () {
        var e = Error("[VirtualListModule Warning] placeholder intersection");
        g.report({
          e: e,
          message: e.message,
          level: errorHandlerUtil.ErrorLevel.ERROR
        });
      };
      this.Ue();
    }
    var t = e.prototype;
    t.destroy = function () {
      var e;
      this.He();
      if ((e = this.getModule("idleModule")) !== null && e !== undefined) {
        e.destroy();
      }
    };
    t.registerModule = function (e, t) {
      this.ur[e] ||= t;
    };
    t.getModule = function (e) {
      return this.ur[e];
    };
    t.getVirtualListModuleOfZone = function (e) {
      return this.or.get(e) || null;
    };
    t.getIntersectionObserver = function (e) {
      if (e = (e = this.getVirtualListModuleOfZone(e)) === null || e === undefined ? undefined : e.getScroller()) {
        return this._r.get(e);
      } else {
        return null;
      }
    };
    t.bindEventsForZone = function (e) {
      if (this.or.has(e)) {
        this.hr.add(e);
      }
    };
    t.unbindEventsForZone = function (e) {
      this.hr.delete(e);
    };
    t.bindVirtualListModuleWithZone = function (e, t) {
      this.or.has(e);
      this.or.set(e, t);
    };
    t.unbindVirtualListModuleWithZone = function (e) {
      var t;
      this.or.delete(e);
      if ((t = this.getModule("idleModule")) !== null && t !== undefined) {
        t.removeZone(e);
      }
    };
    t.bindZoneWithScroller = function (e, t, n) {
      if (!this.cr.has(t)) {
        this.cr.set(t, new Set());
        this._r.set(t, new IntersectionObserver(this.Mr));
        t.addEventListener("scroll", this.dr);
      }
      this.cr.get(t).add(e);
      if (n) {
        this.vr.set(e, t);
      }
    };
    t.unbindZoneWithScroller = function (e, t) {
      var n = this.cr.get(t);
      if (n) {
        n.delete(e);
        this.vr.delete(e);
        if (!n.size) {
          t.removeEventListener("scroll", this.dr);
          this.cr.delete(t);
          if ((n = this._r.get(t)) != null) {
            n.disconnect();
          }
          this._r.delete(t);
        }
      }
    };
    t.getScrollerOfZone = function (e) {
      return this.vr.get(e);
    };
    t.fr = function (e) {
      g.setEditor(this.s);
      var t;
      var n;
      var i = e.currentTarget;
      var e = this.cr.get(i);
      if (e) {
        var o = c(i);
        try {
          var s = typescriptRuntimeHelpers_1.values(e.values());
          var a = s.next();
          for (; !a.done; a = s.next()) {
            var l = a.value;
            var u = this.or.get(l);
            if (u) {
              u.handleScroll({
                viewportData: o
              });
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (a && !a.done && (n = s.return)) {
              n.call(s);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
      }
    };
    t.Ue = function () {
      this.s.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this.yr);
      this.s.on(editorEventConstants.editorEventTypes.CONTENT_WILL_CHANGE, this.qr);
      this.s.on(editorEventConstants.editorEventTypes.BEFORE_DOM_RENDERER_RECONCILE, this.mr);
      this.s.on(editorEventConstants.editorEventTypes.AFTER_DOM_RENDERER_RECONCILE, this.Er);
      window.addEventListener("resize", this.jr);
    };
    t.He = function () {
      this.s.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this.yr);
      this.s.off(editorEventConstants.editorEventTypes.CONTENT_WILL_CHANGE, this.qr);
      this.s.off(editorEventConstants.editorEventTypes.BEFORE_DOM_RENDERER_RECONCILE, this.mr);
      this.s.off(editorEventConstants.editorEventTypes.AFTER_DOM_RENDERER_RECONCILE, this.Er);
      window.removeEventListener("resize", this.jr);
    };
    t.Sr = function (e) {
      var t;
      var n;
      var i;
      if (!this.or.get(e)) {
        var o = (i = (o = this.s.getContentState()).getZoneManager) === null || i === undefined ? undefined : i.call(o);
        if (o) {
          o = o.getAncestorZones(e);
          try {
            var s = typescriptRuntimeHelpers_1.values(o);
            var a = s.next();
            for (; !a.done; a = s.next()) {
              var l = a.value;
              var u = this.or.get(l);
              if (u && u.isEnabled) {
                u.handleChildZoneContentChange(e);
                break;
              }
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              if (a && !a.done && (n = s.return)) {
                n.call(s);
              }
            } finally {
              if (t) {
                throw t.error;
              }
            }
          }
        }
      }
    };
    return e;
  }();
  function _(e, t = {}) {
    return typescriptRuntimeHelpers_1.assign({
      height: e,
      width: "auto",
      layoutDirty: false,
      needIdlePeriodRender: true
    }, t);
  }
  function P(e, t) {
    var n = 0;
    var i = 0;
    var r = [];
    while (n < t.length && i < e.length) {
      var o;
      var s = t[n];
      var a = e[i];
      if (s.index < a.startLine) {
        n++;
      } else if (s.index > a.endLine) {
        r.push(a);
        i++;
      } else {
        n++;
        o = {
          startLine: a.startLine,
          endLine: s.index - 1
        };
        a = {
          startLine: s.index + 1,
          endLine: a.endLine
        };
        if (o.startLine <= o.endLine) {
          r.push(o);
        }
        if (a.startLine <= a.endLine) {
          e[i] = a;
        } else {
          i++;
        }
      }
    }
    while (i < e.length) {
      r.push(e[i++]);
    }
    return r;
  }
  var eventEmitterClass_2 = require("event-emitter-class_2") /*id: 114194*/;
  (i = i || {}).Change = "change";
  var D = function () {
    function e(e, t) {
      var n = this;
      this.s = e;
      this.qe = t;
      this.en = new Set();
      this.nn = [];
      this.g = new eventEmitterClass_2.EventEmitter();
      this.in = function (e) {
        var t;
        var i;
        var o;
        var e = e.prevZoneState;
        if (e) {
          try {
            var s = typescriptRuntimeHelpers_1.values(e.lines);
            var a = s.next();
            for (; !a.done; a = s.next()) {
              var l;
              var u = a.value;
              if (u && n.en.has(u)) {
                l = (o = n.s.getContentState().getZoneState(n.qe)) === null || o === undefined ? undefined : o.getLine(u.index);
                n.rn(u, l);
                if (l) {
                  n.nn.push({
                    line: l,
                    index: l.index,
                    visible: false
                  });
                }
              }
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              if (a && !a.done && (i = s.return)) {
                i.call(s);
              }
            } finally {
              if (t) {
                throw t.error;
              }
            }
          }
          n.sn();
        }
      };
      this.s.on("_forceRefresh", this.in, 1001);
    }
    var t = e.prototype;
    t.getInvisibleLines = function () {
      return typescriptRuntimeHelpers_1.spread(this.en).sort(function (e, t) {
        return e.index - t.index;
      });
    };
    t.getInvisibleLineRanges = function () {
      return typescriptRuntimeHelpers_1.spread(this.en).sort(function (e, t) {
        return e.index - t.index;
      }).reduce(function (e, t, n, i) {
        if ((n = i[n - 1]) && n.index + 1 === t.index) {
          e[e.length - 1].end = t;
        } else {
          e.push({
            start: t,
            end: t
          });
        }
        return e;
      }, []);
    };
    t.reconcile = function (e) {
      var t = this;
      e.forEach(function (e) {
        var n = e.deletes;
        var e = e.inserts;
        var i = new Map(e.map(function (e) {
          return [e.getKey(), e];
        }));
        n.forEach(function (e) {
          var n;
          if (t.isInvisible(e)) {
            n = e.getKey();
            if (i.has(n)) {
              t.rn(e, i.get(n));
            } else {
              t.un(e);
            }
          }
        });
      });
    };
    t.setLinesVisibleState = function (e, t) {
      var n = this;
      e.forEach(function (e) {
        n.vn(e, t);
      });
      this.sn();
    };
    t.isInvisible = function (e) {
      if (typeof e == "number") {
        var t = (t = this.s.getContentState().getZoneState(this.qe)) === null || t === undefined ? undefined : t.getLine(e);
        if (!t) {
          return false;
        }
        e = t;
      }
      return this.en.has(e);
    };
    t.filterInvisibleLinesInViewportDiff = function (e) {
      var t = this.getInvisibleLines();
      e.insertRangeList = P(e.insertRangeList, t);
      e.removeRangeList = P(e.removeRangeList, t);
      return e;
    };
    t.getNextVisibleLine = function (e) {
      var t = this.s.getContentState().getZoneState(this.qe);
      if (!t) {
        return null;
      }
      for (var n = e.index + 1; n <= t.length(); n++) {
        var i = t.getLine(n);
        if (i && !this.isInvisible(i)) {
          return i;
        }
      }
      return null;
    };
    t.on = function (e, t, n) {
      this.g.on(e, t, n);
    };
    t.off = function (e, t) {
      this.g.off(e, t);
    };
    t.destroy = function () {
      this.s.off("_forceRefresh", this.in);
    };
    t.un = function (e) {
      this.en.delete(e);
    };
    t.cn = function (e) {
      this.en.add(e);
    };
    t.rn = function (e, t) {
      this.un(e);
      if (t) {
        this.cn(t);
      }
    };
    t.vn = function (e, t) {
      if (this.isInvisible(e) === t) {
        if (t) {
          this.en.delete(e);
        } else {
          this.en.add(e);
        }
        this.nn.push({
          line: e,
          visible: t,
          index: e.index
        });
      }
    };
    t.sn = function () {
      var e;
      if (this.nn.length) {
        e = this.nn;
        this.g.trigger("change", [e.sort(function (e, t) {
          return e.index - t.index;
        })]);
        this.nn = [];
      }
    };
    return e;
  }();
  var htmlTextMaskUtil = require("html-text-mask-util") /*id: 822125*/;
  var W = function () {
    function e(e) {
      this.left = null;
      this.right = null;
      this.Oi = e;
      this.size = 1;
      this.totalHeight = e.height;
      this.treeDepth = 1;
      this.treeLayoutDirty = e.layoutDirty;
      this.treeNeedIdlePeriodRender = e.needIdlePeriodRender;
    }
    var t = e.prototype;
    Object.defineProperty(t, "layoutInfo", {
      get: function () {
        return typescriptRuntimeHelpers_1.assign({}, this.Oi);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "leftSize", {
      get: function () {
        return this.left?.size || 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "rightSize", {
      get: function () {
        return this.right?.size || 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "leftHeight", {
      get: function () {
        return this.left?.totalHeight || 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "rightHeight", {
      get: function () {
        return this.right?.totalHeight || 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "leftTreeHeight", {
      get: function () {
        return this.left?.treeDepth || 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "rightTreeHeight", {
      get: function () {
        return this.right?.treeDepth || 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "leftTreeLayoutDirty", {
      get: function () {
        return this.left?.treeLayoutDirty || false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "rightTreeLayoutDirty", {
      get: function () {
        return this.right?.treeLayoutDirty || false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "leftTreeNeedIdlePeriodRender", {
      get: function () {
        return this.left?.treeNeedIdlePeriodRender || false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "rightTreeNeedIdlePeriodRender", {
      get: function () {
        return this.right?.treeNeedIdlePeriodRender || false;
      },
      enumerable: false,
      configurable: true
    });
    t.updateLayoutInfo = function (e) {
      var t;
      if (e.invisible || !(e.height <= 0) && (typeof e.width != "number" || !(e.width <= 0))) {
        this.Oi = typescriptRuntimeHelpers_1.assign({}, e);
      } else {
        if (this.Oi.needIdlePeriodRender) {
          this.Oi.idleMeasureFailCount = (this.Oi.idleMeasureFailCount || 0) + 1;
          if (this.Oi.idleMeasureFailCount >= virtualListConstants.listTypeFlag) {
            this.Oi.layoutDirty = false;
            this.Oi.needIdlePeriodRender = false;
          }
        }
        t = Error("[VirtualListModule Warning] update node layout info with unexpected layout.");
        g.report({
          e: t,
          message: t.message,
          level: errorHandlerUtil.ErrorLevel.ERROR,
          extra: typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), {
            idleMeasureFailCount: this.Oi.idleMeasureFailCount
          })
        }, {
          uniqueKey: "LayoutTreeNodeUpdateInfo",
          debounce: true
        });
      }
    };
    return e;
  }();
  var z = function (e) {
    function t(t, n, i, r) {
      var o = e.call(this) || this;
      o.s = t;
      o.qe = n;
      o._i = i;
      o.ji = r;
      o.mi = null;
      o.qi = function (e) {
        e.forEach(function (e) {
          var t = e.index;
          var e = e.visible ? {
            height: o._i,
            invisible: false,
            layoutDirty: true
          } : {
            width: "auto",
            height: 0,
            invisible: true
          };
          o.updateNodeLayoutInfo(t, e);
        });
      };
      return o;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    var n = t.prototype;
    Object.defineProperty(n, "size", {
      get: function () {
        return this.mi?.size || 0;
      },
      enumerable: false,
      configurable: true
    });
    n.init = function () {
      this.ji.on(i.Change, this.qi, 1);
    };
    n.destroy = function () {
      this.mi = null;
      this.ji.off(i.Change, this.qi);
    };
    n.insert = function (e, t) {
      t = this._insert(e, t, 0, this.mi);
      return this.mi = t;
    };
    n.remove = function (e) {
      e = this._remove(e, 0, this.mi);
      return this.mi = e;
    };
    n.reconcile = function (e) {
      for (var t = e.length - 1; t >= 0; t--) {
        var n = e[t];
        var i = n.start;
        var r = n.deletes;
        var o = n.inserts;
        var s = new Set(o.map(function (e) {
          return e.getKey();
        }));
        var a = new Set();
        var l = 0;
        var u = 0;
        for (; u < r.length; u++) {
          var h = r[u].getKey();
          if (s.has(h)) {
            l++;
            a.add(h);
          } else {
            this.remove(i + l);
          }
        }
        for (u = 0; u < o.length; u++) {
          if (!a.has(o[u].getKey())) {
            this.insert(i + u, _(this._i));
          }
        }
      }
    };
    n.getTop = function (e) {
      if (this.mi) {
        return this._getTop(e, this.mi);
      } else {
        return 0;
      }
    };
    n.getWidth = function (e, t) {
      if (!this.mi) {
        return "auto";
      }
      var n = typescriptRuntimeHelpers_1.readIterable(this.yi({
        start: e,
        end: t
      }), 2);
      var e = n[0];
      var t = n[1];
      var n = {
        width: "auto"
      };
      this.Ei(this.mi, [e, t - 1], {
        searchedSize: 0
      }, n);
      return n.width;
    };
    n.getHeight = function (e, t) {
      if (this.mi) {
        t = (e = typescriptRuntimeHelpers_1.readIterable(this.yi({
          start: e,
          end: t
        }), 2))[0];
        e = e[1];
        t = this._getTop(t, this.mi);
        return Math.max(0, (e = this._getTop(e, this.mi)) - t);
      } else {
        return 0;
      }
    };
    n.lineAt = function (e, t) {
      if (!this.mi) {
        return null;
      }
      var n = this._find(0, 0, this.mi, function (n) {
        var i = n.top;
        var r = n.currentHeight;
        var o = n.node;
        var n = o.left ? -1 : 0;
        var o = +!!o.right;
        if (r === 0) {
          if (!(e < i) && (i + r < e || t === "up")) {
            return o;
          } else {
            return n;
          }
        } else if (e < i) {
          return n;
        } else if (e === i) {
          if (t === "up") {
            return n;
          } else {
            return 0;
          }
        } else if (e < i + r || (e === i + r || N(e, i + r)) && t === "up") {
          return 0;
        } else {
          return o;
        }
      });
      if (n) {
        return [n.node, n.offset];
      } else {
        return null;
      }
    };
    n.findIdleRenderTarget = function (e, t) {
      if (!this.mi || !this.mi.treeNeedIdlePeriodRender) {
        return null;
      }
      var n = t === "backward" ? [0, e - 1] : [e + 1, this.size];
      var i = {
        renderTargetOffset: -1
      };
      this.Li(this.mi, n, t, {
        searchedSize: 0
      }, i);
      if ((i = i.renderTargetOffset) === -1) {
        return null;
      } else {
        return {
          offset: i,
          distance: Math.abs(e - i)
        };
      }
    };
    n.updateNodeLayoutInfo = function (e, t) {
      if (!(e >= this.size)) {
        this._updateNodeLayoutInfo(e, t, 0, this.mi);
      }
    };
    n.fixRenderDirty = function (e) {
      var t;
      var n;
      var i = this;
      var r = this.s.getContentState().getZoneState(this.qe);
      var o = e || (r != null && r.getContainer() && r != null ? r.getContainer() : undefined);
      r = o ? (t = window.getComputedStyle(o), n = o.getBoundingClientRect(), function (e) {
        return i.Mi(e, o, t, n);
      }) : function (e) {
        return {
          height: i._i,
          width: "auto",
          shouldRenderInIdlePeriod: true
        };
      };
      this._fixRenderDirty(this.mi, null, 0, r);
    };
    n.Mi = function (e, t, n, i) {
      var r = this.s.getContentState().getZoneState(this.qe);
      var s = {
        height: this._i,
        width: "auto",
        shouldRenderInIdlePeriod: true
      };
      var a = r == null ? undefined : r.getLine(e);
      if (!r || !a) {
        return s;
      }
      if (this.ji.isInvisible(a)) {
        return {
          height: 0,
          width: "auto",
          invisible: true,
          shouldRenderInIdlePeriod: false
        };
      }
      var l = a.getNode();
      if (!l || !t.contains(l)) {
        return s;
      }
      var u = l.clientWidth;
      var h = l.scrollWidth;
      var c = (d = this.s.virtualListManager) === null || d === undefined ? undefined : d.getScrollerOfZone(this.qe);
      if (u !== h || !!c && !(c instanceof Window) && !!(c.scrollWidth > c.clientWidth)) {
        s.width = Math.max(u, h);
      }
      var d = this.ji.getNextVisibleLine(a);
      var c = e === 0;
      var u = e === r.length() - 1 || !d;
      var h = I(n.borderBottomWidth);
      var a = I(n.paddingBottom);
      var e = I(n.borderTopWidth);
      var r = I(n.paddingTop);
      if (c && u) {
        s.height = i.height - e - h - r - a;
      }
      n = l.getBoundingClientRect();
      if (u) {
        s.height = i.bottom - h - a - n.top;
      }
      u = {
        top: n.bottom
      };
      if ((d = d == null ? undefined : d.getNode()) && t.contains(d)) {
        u = d.getBoundingClientRect();
      }
      if (c) {
        s.height = u.top - i.top - r - e;
      }
      s.height = u.top - n.top;
      s.shouldRenderInIdlePeriod = false;
      if (s.height <= 0) {
        n = Error("[VirtualListModule Warning] getNodeLayoutRectInfo error");
        g.report({
          e: n,
          message: n.message,
          level: errorHandlerUtil.ErrorLevel.ERROR,
          extra: {
            rectInfo: s,
            containerBorderTop: e,
            containerBorderBottom: h,
            containerPaddingTop: r,
            containerPaddingBottom: a,
            containerRect: i,
            onDOM: document.contains(l),
            html: htmlTextMaskUtil.maskElementText(l)
          }
        });
      }
      return s;
    };
    n.yi = function (e) {
      var t = e.start;
      var e = e.end;
      if (this.mi) {
        return [t === undefined ? 0 : Math.min(Math.max(t, 0), this.mi.size), e === undefined ? this.mi.size : Math.max(Math.min(e, this.mi.size), 0)];
      } else {
        return [-1, -1];
      }
    };
    n.Ei = function (e, t, n, i) {
      var o = typescriptRuntimeHelpers_1.readIterable(t, 2);
      var s = o[0];
      var a = o[1];
      if (!(a < s)) {
        if (e) {
          if (a < (o = n.searchedSize + e.leftSize)) {
            this.Ei(e.left, t, n, i);
          } else if (o < s) {
            this.Ei(e.right, t, {
              searchedSize: o + 1
            }, i);
          } else {
            this.Ei(e.left, [s, o - 1], n, i);
            if (i.width === "auto") {
              i.width = e.layoutInfo.width;
            } else if (e.layoutInfo.width !== "auto") {
              i.width = Math.max(i.width, e.layoutInfo.width);
            }
            this.Ei(e.right, [o + 1, a], {
              searchedSize: o + 1
            }, i);
          }
        }
      }
    };
    n.Li = function (e, t, n, i, o) {
      var s;
      var a;
      if (e) {
        var l = typescriptRuntimeHelpers_1.readIterable(t, 2);
        var u = l[0];
        var h = l[1];
        if (!(h < u) && e.treeNeedIdlePeriodRender !== false) {
          var c = i.searchedSize + e.leftSize;
          if (h < c) {
            this.Li(e.left, t, n, i, o);
          } else if (c < u) {
            this.Li(e.right, t, n, {
              searchedSize: c + 1
            }, o);
          } else {
            t = n === "backward" ? ["right", "middle", "left"] : ["left", "middle", "right"];
            try {
              var d = typescriptRuntimeHelpers_1.values(t);
              var f = d.next();
              for (; !f.done; f = d.next()) {
                var v = f.value;
                if (v === "left") {
                  this.Li(e.left, [u, c - 1], n, i, o);
                } else if (v === "middle") {
                  if (e.layoutInfo.needIdlePeriodRender) {
                    o.renderTargetOffset = c;
                  }
                } else if (v === "right") {
                  this.Li(e.right, [c + 1, h], n, {
                    searchedSize: c + 1
                  }, o);
                }
                if (o.renderTargetOffset > -1) {
                  return;
                }
              }
            } catch (e) {
              s = {
                error: e
              };
            } finally {
              try {
                if (f && !f.done && (a = d.return)) {
                  a.call(d);
                }
              } finally {
                if (s) {
                  throw s.error;
                }
              }
            }
          }
        }
      }
    };
    return t;
  }(function () {
    function e() {}
    var t = e.prototype;
    t._insert = function (e, t, n, i) {
      if (!i) {
        return new W(t);
      }
      var r = n + i.leftSize;
      if (e <= r) {
        i.left = this._insert(e, t, n, i.left);
      } else if (r < e) {
        i.right = this._insert(e, t, r + 1, i.right);
      }
      i.treeDepth = Math.max(i.leftTreeHeight, i.rightTreeHeight) + 1;
      this.wi(i);
      this.Ti(i);
      this.pi(i);
      return this.Ni(i);
    };
    t._remove = function (e, t, n) {
      if (n === null) {
        return n;
      }
      var i = t + n.leftSize;
      if (e < i) {
        n.left = this._remove(e, t, n.left);
      } else if (i < e) {
        n.right = this._remove(e, i + 1, n.right);
      } else if (n.left || n.right) {
        if (n.right) {
          if (n.left) {
            e = this.xi(n.right);
            n.updateLayoutInfo(e.layoutInfo);
            n.right = this._remove(i + 1, i + 1, n.right);
          } else {
            n = n.right;
          }
        } else {
          n = n.left;
        }
      } else {
        n = null;
      }
      if (n === null) {
        return n;
      } else {
        n.treeDepth = Math.max(n.leftTreeHeight, n.rightTreeHeight) + 1;
        this.wi(n);
        this.Ti(n);
        this.pi(n);
        return this.Ni(n);
      }
    };
    t.Ni = function (e) {
      var t = this.Ai(e);
      if (t === 0) {
        if (!e.left) {
          throw Error("Unexpected Error: node.left is null while balance state is UNBALANCED_LEFT");
        }
        var n = this.Ai(e.left);
        if (n === 1) {
          return this.Ui(e);
        }
        if (n === 3) {
          e.left = this.gi(e.left);
          return this.Ui(e);
        }
      }
      if (t === 4) {
        if (!e.right) {
          throw Error("Unexpected Error: node.right is null while balance state is UNBALANCED_RIGHT");
        }
        if ((t = this.Ai(e.right)) === 3) {
          return this.gi(e);
        }
        if (t === 1) {
          e.right = this.Ui(e.right);
          return this.gi(e);
        }
      }
      return e;
    };
    t.xi = function (e) {
      for (var t = e; t.left;) {
        t = t.left;
      }
      return t;
    };
    t._find = function (e, t, n, i) {
      if (!n) {
        return null;
      }
      var r = e + n.leftHeight;
      var o = t + n.leftSize;
      var s = i({
        offset: o,
        top: r,
        currentHeight: n.layoutInfo.height,
        node: n
      });
      if (s < 0) {
        return this._find(e, t, n.left, i);
      } else if (s === 0) {
        return {
          node: n,
          offset: o,
          top: r
        };
      } else {
        return this._find(r + n.layoutInfo.height, o + 1, n.right, i);
      }
    };
    t._getTop = function (e, t) {
      if (e >= t.size) {
        return t.totalHeight;
      } else {
        return ((t = this._find(0, 0, t, function (t) {
          return e - (t = t.offset);
        })) == null ? undefined : t.top) || 0;
      }
    };
    t._updateNodeLayoutInfo = function (e, t, n, i) {
      var o;
      if (i) {
        if (e < (o = n + i.leftSize)) {
          this._updateNodeLayoutInfo(e, t, n, i.left);
        } else if (e === o) {
          i.updateLayoutInfo(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, i.layoutInfo), t));
        } else {
          this._updateNodeLayoutInfo(e, t, o + 1, i.right);
        }
        this.Ti(i);
        this.pi(i);
      }
    };
    t._fixRenderDirty = function (e, t, n, i) {
      var o;
      var s;
      var a;
      if (e && e.treeLayoutDirty) {
        s = n + e.leftSize;
        this._fixRenderDirty(e.right, t, s + 1, i);
        if (e.layoutInfo.layoutDirty) {
          o = (a = i(s)).width;
          t = a.height;
          s = a.shouldRenderInIdlePeriod;
          a = a.invisible;
          e.updateLayoutInfo(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e.layoutInfo), {
            width: o,
            height: t,
            invisible: a,
            layoutDirty: false,
            needIdlePeriodRender: s
          }));
        }
        this._fixRenderDirty(e.left, e, n, i);
        this.Ti(e);
        this.pi(e);
      }
    };
    t.Ti = function (e) {
      e.totalHeight = e.leftHeight + e.rightHeight + e.layoutInfo.height;
    };
    t.wi = function (e) {
      e.size = e.leftSize + e.rightSize + 1;
    };
    t.pi = function (e) {
      e.treeLayoutDirty = e.leftTreeLayoutDirty || e.rightTreeLayoutDirty || e.layoutInfo.layoutDirty;
      e.treeNeedIdlePeriodRender = e.leftTreeNeedIdlePeriodRender || e.rightTreeNeedIdlePeriodRender || e.layoutInfo.needIdlePeriodRender;
    };
    t.Ai = function (e) {
      switch (e.rightTreeHeight - e.leftTreeHeight) {
        case -2:
          return 0;
        case -1:
          return 1;
        case 1:
          return 3;
        case 2:
          return 4;
        default:
          return 2;
      }
    };
    t.Ui = function (e) {
      var t = e.left;
      if (!t) {
        throw Error("Unexpected function call: rotateRight() node.left is null");
      }
      e.left = t.right;
      (t.right = e).treeDepth = Math.max(e.leftTreeHeight, e.rightTreeHeight) + 1;
      t.treeDepth = Math.max(t.leftTreeHeight, t.rightTreeHeight) + 1;
      this.wi(e);
      this.Ti(e);
      this.pi(e);
      this.wi(t);
      this.Ti(t);
      this.pi(t);
      return t;
    };
    t.gi = function (e) {
      var t = e.right;
      if (!t) {
        throw Error("Unexpected function call: rotateLeft() node.right is null");
      }
      e.right = t.left;
      (t.left = e).treeDepth = Math.max(e.leftTreeHeight, e.rightTreeHeight) + 1;
      t.treeDepth = Math.max(t.leftTreeHeight, t.rightTreeHeight) + 1;
      this.wi(e);
      this.Ti(e);
      this.pi(e);
      this.wi(t);
      this.Ti(t);
      this.pi(t);
      return t;
    };
    return e;
  }());
  var H = function () {
    function e(e) {
      var t;
      var n;
      var i;
      this.Si = e;
      this.Ci = [];
      this.ki = true;
      this.Bi = (t = e, (n = document.createElement("div")).className = t.className, i = getComputedStyle(t), t = U.reduce(function (e, t) {
        var n;
        if (i[t]) {
          return typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), ((n = {})[t] = i[t], n));
        } else {
          return e;
        }
      }, {}), n.style.position = "absolute", n.style.top = "-10000px", function (e, t) {
        for (var n in t) {
          if (t[n]) {
            e.style[n] = t[n];
          }
        }
      }(n, t), n);
    }
    var t = e.prototype;
    t.addMeasureRequest = function (e, t) {
      if (document.contains(t)) {
        return this.ki = false;
      } else {
        this.Bi.appendChild(t);
        this.Ci.push({
          lineIndex: e,
          node: t
        });
        return true;
      }
    };
    t.finalize = function (e) {
      if (!this.ki || !this.Si.parentElement) {
        this.Wi();
        return false;
      }
      this.Si.parentElement.append(this.Bi);
      try {
        e(this.Ci, this.Bi);
      } catch (e) {
        this.Wi();
        return false;
      }
      this.Wi();
      return true;
    };
    t.Wi = function () {
      this.Bi.textContent = "";
      this.Bi.remove();
      this.Ci.length = 0;
      this.ki = true;
    };
    return e;
  }();
  var U = ["width", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStretch", "fontVariant", "lineHeight", "whiteSpace", "wordBreak", "overflowWrap", "lineBreak", "hyphens"];
  var k = function () {
    function e() {
      this.bi = [];
    }
    var t = e.prototype;
    Object.defineProperty(t, "size", {
      get: function () {
        return this.bi.length;
      },
      enumerable: false,
      configurable: true
    });
    t.insertFront = function (e) {
      var t = this.size === 0 ? -1 : this.bi[0].priority - 1;
      this.enqueue(e, t);
    };
    t.enqueue = function (e, t) {
      this.bi.push({
        value: e,
        priority: t
      });
      for (var n = this.bi.length - 1; n > 0;) {
        var i = Math.floor((n - 1) / 2);
        if (this.bi[n].priority >= this.bi[i].priority) {
          break;
        }
        var r = this.bi[n];
        this.bi[n] = this.bi[i];
        this.bi[i] = r;
        n = i;
      }
    };
    t.dequeue = function () {
      if (this.size === 0) {
        return null;
      }
      var e = this.bi[0];
      if (this.size === 1) {
        this.bi.length = 0;
        return e.value;
      }
      this.bi[0] = this.bi[this.size - 1];
      this.bi.pop();
      for (var t = 0; t * 2 < this.size - 1;) {
        var n = t;
        var i = n * 2 + 1;
        var r = n * 2 + 2;
        if (i < this.size && this.bi[i].priority < this.bi[n].priority) {
          n = i;
        }
        if ((n = r < this.size && this.bi[r].priority < this.bi[n].priority ? r : n) === t) {
          break;
        }
        r = this.bi[n];
        this.bi[n] = this.bi[t];
        this.bi[t] = r;
        t = n;
      }
      return e.value;
    };
    t.empty = function () {
      this.bi.length = 0;
    };
    return e;
  }();
  var B = function () {
    function e(e, t) {
      this.s = e;
      this.ai = t;
    }
    var t = e.prototype;
    t.findNextRenderTargetForAllZone = function (e) {
      var t;
      var n;
      var i = e.zoneInfoSet;
      try {
        var o = typescriptRuntimeHelpers_1.values(i);
        var s = o.next();
        for (; !s.done; s = o.next()) {
          var a = s.value;
          this.findNextRenderTargetForZone(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), {
            zoneId: a
          }));
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (s && !s.done && (n = o.return)) {
            n.call(o);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
    };
    t.findNextRenderTargetForZone = function (e) {
      var t;
      var n;
      var i = e.zoneId;
      var o = e.zoneInfoSet;
      var s = e.idleTaskQueue;
      var e = this.di(i);
      if (!e) {
        o.delete(i);
      }
      try {
        var a = typescriptRuntimeHelpers_1.values(e);
        var l = a.next();
        for (; !l.done; l = a.next()) {
          var u;
          var h = l.value;
          var c = h.zoneId;
          var d = h.offset;
          var f = h.distance;
          var v = h.positionRelatedToViewport;
          if (this.s.getContentState().getZoneState(c)) {
            u = Math.round(f);
            s.enqueue({
              methodName: "render",
              context: {
                zoneId: c,
                offset: d,
                idleTaskQueue: s,
                positionRelatedToViewport: v
              }
            }, u);
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (l && !l.done && (n = a.return)) {
            n.call(a);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
    };
    t.di = function (e) {
      var t = (i = this.s.virtualListManager) === null || i === undefined ? undefined : i.getVirtualListModuleOfZone(e);
      if (t == null || !t.isEnabled) {
        return [];
      }
      var n = t.getRenderBoundary();
      var i = t.getLayoutModule();
      if (!n) {
        if (!(t = this.s.getContentState().getZoneState(e))) {
          return [];
        }
        try {
          var o = typescriptRuntimeHelpers_1.values(t.lines);
          var s = o.next();
          for (; !s.done; s = o.next()) {
            var a = s.value;
            if (!a.getNode()) {
              return [{
                zoneId: e,
                offset: a.index,
                distance: Infinity,
                positionRelatedToViewport: "unknown"
              }];
            }
          }
        } catch (e) {
          u = {
            error: e
          };
        } finally {
          try {
            if (s && !s.done && (l = o.return)) {
              l.call(o);
            }
          } finally {
            if (u) {
              throw u.error;
            }
          }
        }
        return [];
      }
      var l = [];
      var u = n.startLine;
      var n = n.endLine;
      var n = i.findIdleRenderTarget(n, "forward");
      var u = u !== 0 ? i.findIdleRenderTarget(u, "backward") : null;
      if (u && this.vi(u)) {
        l.push(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, u), {
          zoneId: e,
          positionRelatedToViewport: "above"
        }));
      }
      if (n && this.vi(n)) {
        l.push(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, n), {
          zoneId: e,
          positionRelatedToViewport: "below"
        }));
      }
      return l;
    };
    t.vi = function (e) {
      return !!e && e.distance <= this.ai;
    };
    t.render = function (e) {
      var t = e.zoneId;
      var n = e.offset;
      var i = e.idleTaskQueue;
      var o = e.positionRelatedToViewport;
      var s = (h = this.s.virtualListManager) === null || h === undefined ? undefined : h.getVirtualListModuleOfZone(t);
      if (!s) {
        return false;
      }
      var a = this.s.getContentState().getZoneState(t);
      if (!this.fi(t, n)) {
        return true;
      }
      var l = s.ensureLineNodeDOMCache(n);
      var u = a == null ? undefined : a.getContainer();
      var h = s.getRenderBoundary();
      return o !== "below" || !h || !u || !!u.contains(l) || !!this.hi(t, n) || !this.fi(t, n + 1) || (a && n + 1 < a.length() && s.ensureLineNodeDOMCache(n + 1), i.insertFront({
        methodName: "measure",
        context: typescriptRuntimeHelpers_1.assign({}, e)
      }), false);
    };
    t.measure = function (e) {
      var t = e.zoneId;
      var n = e.offset;
      var i = (o = this.s.virtualListManager) === null || o === undefined ? undefined : o.getVirtualListModuleOfZone(t);
      var r = this.s.getContentState().getZoneState(t);
      var o = r == null ? undefined : r.getContainer();
      if (!i || !r || !o || !document.contains(o)) {
        return false;
      }
      var s = i.getLayoutModule();
      var t = new H(o);
      var o = (o = r.getLine(n)) === null || o === undefined ? undefined : o.getNode();
      if (!o) {
        return true;
      }
      t.addMeasureRequest(n, o);
      if (n + 1 < r.length()) {
        if (!(r = (r = r.getLine(n + 1)) === null || r === undefined ? undefined : r.getNode())) {
          return true;
        }
        t.addMeasureRequest(n + 1, r);
      }
      if (t.finalize(function (e, t) {
        for (var n = 0; n < e.length && (n === 0 || n !== e.length - 1); n++) {
          var i = e[n].lineIndex;
          s.updateNodeLayoutInfo(i, {
            layoutDirty: true
          });
        }
        s.fixRenderDirty(t);
        return true;
      })) {
        this.ci(e);
      } else {
        i.getLayoutModule().updateNodeLayoutInfo(n, {
          needIdlePeriodRender: false
        });
      }
      return true;
    };
    t.ci = function (e) {
      var t = e.zoneId;
      var n = e.offset;
      var t = (e = this.s.virtualListManager) === null || e === undefined ? undefined : e.getVirtualListModuleOfZone(t);
      if (t) {
        t.placeholderModule.updatePlaceholderRectInfoByIndex(n);
        if ((t = t.layoutUpdateController) !== null && t !== undefined) {
          t.checkLayoutUpdate();
        }
      }
    };
    t.fi = function (e, t) {
      var n;
      var i;
      var e = this.s.getContentState().getZoneState(e);
      if (t >= ((e == null ? undefined : e.length()) || -1) || !(t = e == null ? undefined : e.getLine(t))) {
        return false;
      }
      var a = this.s.getContentState().schema.schemas;
      var t = t.getAttributes(0, 1);
      try {
        var l = typescriptRuntimeHelpers_1.values(t);
        var u = l.next();
        for (; !u.done; u = l.next()) {
          if (a[typescriptRuntimeHelpers_1.readIterable(u.value, 1)[0]]?.virtualList?.needRenderInIdlePeriod === false) {
            return false;
          }
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          if (u && !u.done && (i = l.return)) {
            i.call(l);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      return true;
    };
    t.hi = function (e, t) {
      return !(t >= (((e = this.s.getContentState().getZoneState(e)) == null ? undefined : e.length()) || -1)) && !!(t = e == null ? undefined : e.getLine(t)) && this.s.pluginManager.getLineWrapperInfo(t).hasWrapper;
    };
    return e;
  }();
  var Y = function () {
    function e(e) {
      var n = this;
      this.Ze = true;
      this.Ve = false;
      this.Xe = 8;
      this.Ye = 1;
      this.$e = new Set();
      this.li = new k();
      this.runningLoop = function (e) {
        try {
          if (e.didTimeout) {
            n.si();
          } else {
            for (var t = 0; e.timeRemaining() > n.Xe && n.Ve && t < n.Ye;) {
              n.si();
              t++;
            }
          }
          if (n.Ve) {
            n.ui = F(n.runningLoop);
          }
        } catch (e) {
          n.stop();
          throw e;
        }
      };
      this.s = e.editor;
      this.oi = new B(e.editor, e.renderDistance ?? Infinity);
      if (e.maxExecuteNumber) {
        this.Ye = e.maxExecuteNumber;
      }
    }
    var t = e.prototype;
    Object.defineProperty(t, "runningStatus", {
      get: function () {
        return this.Ve;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "enabled", {
      get: function () {
        return this.Ze;
      },
      enumerable: false,
      configurable: true
    });
    t.removeZone = function (e) {
      this.$e.delete(e);
    };
    t.destroy = function () {
      this.stop();
    };
    t.disable = function () {
      this.Ze = false;
      this.stop();
    };
    t.enable = function () {
      this.Ze = true;
    };
    t.stop = function () {
      this.Ve = false;
      if (this.ui) {
        (function (e) {
          if (window.cancelIdleCallback) {
            return window.cancelIdleCallback(e);
          }
          window.clearTimeout(e);
        })(this.ui);
        this.ui = null;
      }
      this.$e.clear();
      this.li.empty();
    };
    t.start = function (e) {
      if (this.Ze) {
        this.Ve = true;
        if (this.s.getContentState().getZoneState(e)) {
          this.$e.add(e);
          this.li.empty();
          this.li.insertFront({
            methodName: "findNextRenderTargetForAllZone",
            context: {
              zoneInfoSet: this.$e,
              idleTaskQueue: this.li
            }
          });
          this.ui = F(this.runningLoop);
        }
      }
    };
    t.si = function () {
      var e = this.li.dequeue();
      if (e) {
        var t = false;
        try {
          switch (e.methodName) {
            case "findNextRenderTargetForAllZone":
              this.oi.findNextRenderTargetForAllZone(e.context);
              break;
            case "findNextRenderTargetForZone":
              this.oi.findNextRenderTargetForZone(e.context);
              break;
            case "render":
              t = this.oi.render(e.context);
              break;
            case "measure":
              t = this.oi.measure(e.context);
          }
        } catch (t) {
          var n = {};
          (n = t instanceof v ? t.extraInfo : n).isIdlePeriod = true;
          if (e.methodName === "render") {
            n.renderNodeOffset = e.context.offset;
          }
          g.report({
            e: t,
            message: t == null ? undefined : t.message,
            level: errorHandlerUtil.ErrorLevel.ERROR,
            extra: n
          });
        }
        if (t && (e.methodName === "render" || e.methodName === "measure")) {
          if ((n = (n = this.s.virtualListManager) === null || n === undefined ? undefined : n.getVirtualListModuleOfZone(e.context.zoneId)) != null && n.isEnabled) {
            n.getLayoutModule().updateNodeLayoutInfo(e.context.offset, {
              needIdlePeriodRender: false
            });
          }
          this.li.insertFront({
            methodName: "findNextRenderTargetForZone",
            context: {
              zoneId: e.context.zoneId,
              zoneInfoSet: this.$e,
              idleTaskQueue: this.li
            }
          });
        }
        if (this.li.size === 0 && e.methodName !== "findNextRenderTargetForAllZone") {
          this.li.insertFront({
            methodName: "findNextRenderTargetForAllZone",
            context: {
              zoneInfoSet: this.$e,
              idleTaskQueue: this.li
            }
          });
        }
      } else {
        this.stop();
      }
    };
    return e;
  }();
  function F(e, t) {
    if (window.requestIdleCallback) {
      return window.requestIdleCallback(e);
    }
    var n = Date.now();
    return window.setTimeout(function () {
      e({
        get didTimeout() {
          return (t == null ? undefined : t.timeout) !== undefined && Date.now() - n > t.timeout;
        },
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - n));
        }
      });
    });
  }
  var X = function () {
    function e() {
      this.es = -1;
      this.ts = null;
      this.Se = null;
    }
    var t = e.prototype;
    t.startLock = function (e) {
      var t = [];
      var n = 1;
      for (; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }
      this.ss();
      var i = this.ns.apply(this, typescriptRuntimeHelpers_1.spread(t));
      var o = i == null ? undefined : i.getNode();
      if (o) {
        o = o.getBoundingClientRect();
        if ((i == null ? undefined : i.index) !== 0 || !(o.top >= 0)) {
          this.es = o.top;
          this.ts = i;
          this.Se = e;
        }
      }
    };
    t.refreshAnchorLine = function (e) {
      var t;
      if (this.ts) {
        t = this.ts.index;
        t = e.getLine(t);
        this.ts = t;
      }
    };
    t.correctAndUnlock = function (e) {
      var t = this;
      var n = t.es;
      var i = t.ts;
      var t = t.Se;
      this.ss();
      i = i == null ? undefined : i.getNode();
      if (n !== -1 && i && t) {
        if (e) {
          e(i);
        } else if ((i = i.getBoundingClientRect().top) - n != 0) {
          d(t, i - n);
        }
      }
    };
    t.ns = function (e, t, n) {
      var i = e.viewportStart;
      var r = e.bufferStart;
      var o = i;
      for (; r <= o; o--) {
        var s = t.getLine(o);
        if (!s) {
          break;
        }
        if (!n || !n.has(o)) {
          return s;
        }
      }
      return null;
    };
    t.ss = function () {
      this.es = -1;
      this.ts = null;
      this.Se = null;
    };
    return e;
  }();
  var q = function () {
    function e(e, t, n) {
      this.s = e;
      this.qe = t;
      this.ji = n;
      this.Xi = new Map();
      this.Yi = [];
      this.Zi = new Map();
      this.$i = new Map();
      this.tr = new Set();
      this.ir = new Map();
      this.rr = false;
    }
    var t = e.prototype;
    Object.defineProperty(t, "zoneState", {
      get: function () {
        return this.s.getContentState().getZoneState(this.qe);
      },
      enumerable: false,
      configurable: true
    });
    t.getRetentiveLines = function () {
      if (this.rr) {
        return this.ir;
      } else {
        return this.$i;
      }
    };
    t.getCustomRetentiveLines = function () {
      return this.Zi;
    };
    t.getOriginalSelectionLines = function () {
      return this.Xi;
    };
    t.getSelectionLinesWithExpanding = function () {
      this.Yi.length;
      return this.Yi.map(function (e) {
        return Array.from(e.values());
      }).flat();
    };
    t.init = function () {
      var e;
      var t;
      var n;
      var i = this.s.getContentState().schema;
      try {
        var o = typescriptRuntimeHelpers_1.values(Object.entries(i.schemas));
        var s = o.next();
        for (; !s.done; s = o.next()) {
          var a = typescriptRuntimeHelpers_1.readIterable(s.value, 2);
          var l = a[0];
          if ((n = a[1].virtualList) !== null && n !== undefined && n.retentive) {
            this.tr.add(l);
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (s && !s.done && (t = o.return)) {
            t.call(o);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    t.reset = function () {
      this.Xi.clear();
      this.Yi = [];
      this.Zi.clear();
      this.$i.clear();
      this.ir.clear();
      this.rr = false;
    };
    t.handleFollowWhenContentChange = function (e) {
      this.rr = true;
      this.ir = new Map(e);
    };
    t.clearFollowStatus = function () {
      this.rr = false;
      this.ir.clear();
    };
    t.addCustomRetentiveLines = function (e) {
      var t;
      var n;
      if (this.zoneState) {
        try {
          var i = typescriptRuntimeHelpers_1.values(e);
          var o = i.next();
          for (; !o.done; o = i.next()) {
            var s = o.value;
            var a = s.startLine;
            for (; a <= s.endLine; a++) {
              var l = this.zoneState.getLine(a);
              if (l) {
                this.reconcileCustomRetentiveLines({
                  type: virtualListConstants.operationTypes.INSERT,
                  insert: {
                    newLineState: l
                  }
                });
              }
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (o && !o.done && (n = i.return)) {
              n.call(i);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        this.updateRetentiveLines();
      }
    };
    t.reconcileCustomRetentiveLines = function (e) {
      var t;
      switch (e.type) {
        case virtualListConstants.operationTypes.INSERT:
          var n = e.insert.newLineState;
          if (this.Zi.has(n.index)) {
            return;
          }
          var i = n.getAttributes().toMap() || {};
          try {
            var o = typescriptRuntimeHelpers_1.values(this.tr);
            var s = o.next();
            for (; !s.done; s = o.next()) {
              if (i[s.value]) {
                this.Zi.set(n.index, n);
                break;
              }
            }
          } catch (e) {
            a = {
              error: e
            };
          } finally {
            try {
              if (s && !s.done && (t = o.return)) {
                t.call(o);
              }
            } finally {
              if (a) {
                throw a.error;
              }
            }
          }
          break;
        case virtualListConstants.operationTypes.UPDATE:
          var a = e.update;
          var l = a.prevIndex;
          var n = a.newLineState;
          if (this.Zi.has(l)) {
            this.Zi.delete(l);
            this.Zi.set(n.index, n);
          }
          break;
        case virtualListConstants.operationTypes.DELETE:
          l = e.delete.prevIndex;
          if (this.Zi.has(l)) {
            this.Zi.delete(l);
          }
      }
    };
    t.refreshCustomRetentiveLines = function () {
      var e;
      var t;
      try {
        var n = typescriptRuntimeHelpers_1.values(this.Zi);
        var i = n.next();
        for (; !i.done; i = n.next()) {
          var o = typescriptRuntimeHelpers_1.readIterable(i.value, 2);
          var s = o[0];
          var a = o[1];
          if (a.index !== s) {
            this.Zi.delete(s);
            this.Zi.set(a.index, a);
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (t = n.return)) {
            t.call(n);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    t.updateSelectionLines = function (e, t) {
      var n;
      var i;
      var r;
      if (t === undefined) {
        t = true;
      }
      this.Xi.clear();
      if (e) {
        n = e.start;
        r = e.end;
        i = [];
        if (e = this.sr(n)) {
          this.er(e.index, e);
          if (e = this.nr(e.index)) {
            i.push(e);
          }
        }
        if (n.line !== r.line) {
          if (r = this.sr(r)) {
            this.er(r.index, r);
            if (r = this.nr(r.index)) {
              i.push(r);
            }
          }
        }
        this.Yi = i.slice(0);
      }
      if (t) {
        this.updateRetentiveLines();
      }
    };
    t.updateRetentiveLines = function () {
      var e;
      var t;
      var n;
      var i = this;
      var o = this.zoneState;
      if (o) {
        var s = [];
        try {
          var a = typescriptRuntimeHelpers_1.values(this.Yi);
          var l = a.next();
          for (; !l.done; l = a.next()) {
            var u = l.value;
            var h = typescriptRuntimeHelpers_1.spread(u.keys());
            var c = {
              startLine: h[0],
              endLine: h[h.length - 1]
            };
            var d = this.expandingBoundary(c);
            var f = o.lines.slice(d.startLine, d.endLine + 1);
            s.push.apply(s, typescriptRuntimeHelpers_1.spread(f));
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (l && !l.done && (t = a.return)) {
              t.call(a);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        var v = [];
        try {
          var g = typescriptRuntimeHelpers_1.values(this.Zi.keys());
          var p = g.next();
          for (; !p.done; p = g.next()) {
            var y = p.value;
            var d = this.expandingBoundary(y);
            var L = o.lines.slice(d.startLine, d.endLine + 1);
            v.push.apply(v, typescriptRuntimeHelpers_1.spread(L));
          }
        } catch (e) {
          m = {
            error: e
          };
        } finally {
          try {
            if (p && !p.done && (n = g.return)) {
              n.call(g);
            }
          } finally {
            if (m) {
              throw m.error;
            }
          }
        }
        var m = new Set(typescriptRuntimeHelpers_1.spread(s, v));
        var m = Array.from(m).sort(function (e, t) {
          return e.index - t.index;
        }).filter(function (e) {
          return !i.ji.isInvisible(e);
        });
        this.$i = new Map();
        m.forEach(function (e) {
          i.$i.set(e.index, e);
        });
      }
    };
    t.expandingBoundary = function (e) {
      var t;
      var n;
      if (typeof e == "number") {
        t = n = e;
      } else {
        t = e.startLine;
        n = e.endLine;
      }
      return {
        startLine: t = this.ar(t, "forward"),
        endLine: n = this.ar(n, "backward")
      };
    };
    t.filterRetentiveLinesInViewportDiff = function (e, t = false) {
      var n = typescriptRuntimeHelpers_1.spread(this.$i.values());
      if (n.length === 0) {
        return e;
      }
      var i = typescriptRuntimeHelpers_1.spread(e.insertRangeList);
      var o = typescriptRuntimeHelpers_1.spread(e.removeRangeList);
      var e = {
        insertRangeList: [],
        removeRangeList: []
      };
      if (this.zoneState) {
        if (t) {
          if ((t = typescriptRuntimeHelpers_1.spread(this.getOriginalSelectionLines().values())).length === 2 && t[1].index - t[0].index > 0) {
            t = this.zoneState.lines.slice(t[0].index, t[1].index);
            n.push.apply(n, typescriptRuntimeHelpers_1.spread(t));
          }
        }
        (n = Array.from(new Set(n))).sort(function (e, t) {
          return e.index - t.index;
        });
        e.insertRangeList = P(i, n);
        e.removeRangeList = P(o, n);
      }
      return e;
    };
    t.calcOnScreenRetentiveRangeList = function () {
      if (!this.zoneState) {
        return [];
      }
      var e;
      var t;
      var n;
      var i = this.zoneState.getContainer();
      if (!i) {
        return [];
      }
      var o = this.$i.keys();
      var s = [];
      try {
        var a = typescriptRuntimeHelpers_1.values(o);
        var l = a.next();
        for (; !l.done; l = a.next()) {
          var u = l.value;
          var h = (n = this.zoneState.getLine(u)) === null || n === undefined ? undefined : n.getNode();
          if (h && i.contains(h)) {
            s.push({
              startLine: u,
              endLine: u
            });
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (l && !l.done && (t = a.return)) {
            t.call(a);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return s;
    };
    t.er = function (e, t) {
      this.Xi.set(e, t);
      this.Xi.size;
    };
    t.sr = function (e) {
      var t;
      var n = this.s.getContentState();
      if (e.zoneId !== this.qe) {
        var i = (t = n.getZoneManager) === null || t === undefined ? undefined : t.call(n);
        if (!i) {
          return;
        }
        t = i.getMatchedAncestorLine(e.zoneId, this.qe);
      } else {
        t = ((i = this.zoneState) === null || i === undefined ? undefined : i.getLine(e.line)) || undefined;
      }
      return t;
    };
    t.nr = function (e) {
      if (this.zoneState) {
        var t = new Map();
        var n = this.zoneState.getLine(e);
        if (n) {
          var i = e;
          if (i - 1 > -1 && (e = this.zoneState.getLine(i - 1))) {
            t.set(i - 1, e);
          }
          t.set(i, n);
          if (i + 1 < this.zoneState.length() && (n = this.zoneState.getLine(i + 1))) {
            t.set(i + 1, n);
          }
          return t;
        }
      }
    };
    t.ar = function (e, t) {
      if (!this.zoneState) {
        return e;
      }
      var n = this.zoneState;
      var i = n.getLine(e);
      var r = i ? this.lr(i) : "";
      if (r) {
        for (var o = t === "forward" ? e - 1 : e + 1; o > -1 && o < n.length();) {
          var s = n.getLine(o);
          if ((s ? this.lr(s) : "") !== r) {
            break;
          }
          e = o;
          if (t === "forward") {
            o--;
          } else {
            o++;
          }
        }
      }
      return e;
    };
    t.lr = function (e) {
      return this.s.pluginManager.getLineWrapperInfo(e).key;
    };
    return e;
  }();
  var lineAttributeComparator = require("line-attribute-comparator") /*id: 925951*/;
  var V = function () {
    function e(e, t, n, i) {
      this.s = e;
      this.qe = t;
      this.Lr = n;
      this.Os = i;
    }
    var t = e.prototype;
    t.getTransformInfo = function (e) {
      return {
        nextRenderBoundary: this.br(this.Lr.getRenderBoundary(), e),
        placeholderChange: this.pr(this.Lr.placeholderModule.getPlaceholderRangeList(), e)
      };
    };
    t.br = function (e, t) {
      if (!e) {
        return null;
      }
      var n = {
        startLine: e.startLine,
        endLine: e.endLine
      };
      var i = t.length - 1;
      for (; i >= 0; i--) {
        var r = t[i];
        var o = r.start;
        var s = r.deletes;
        var a = r.inserts;
        if (!(o > n.endLine)) {
          var l = new Set(a.map(function (e) {
            return e.getKey();
          }));
          var u = new Set();
          var h = 0;
          var c = 0;
          for (; c < s.length; c++) {
            var d = s[c].getKey();
            if (l.has(d)) {
              h++;
              u.add(d);
            } else {
              n = this.gr(n, "delete", o + h);
            }
          }
          for (c = 0; c < a.length; c++) {
            if (!u.has(a[c].getKey())) {
              n = this.gr(n, "insert", o + c);
            }
          }
        }
      }
      if (n.startLine > n.endLine) {
        return null;
      } else {
        return n;
      }
    };
    t.pr = function (e, t) {
      var n;
      var i;
      var o = new m();
      try {
        var s = typescriptRuntimeHelpers_1.values(e);
        var a = s.next();
        for (; !a.done; a = s.next()) {
          var l;
          var u;
          var h = a.value;
          var c = this.br(h, t);
          if (c) {
            l = c.startLine - h.startLine;
            u = c.endLine - h.endLine;
            if (l != 0 || u != 0) {
              o.update(h, {
                startLineDiff: l,
                endLineDiff: u
              });
            }
          } else {
            o.remove(h);
          }
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          if (a && !a.done && (i = s.return)) {
            i.call(s);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      return o;
    };
    t.reconcileChangeList = function (e, t, n) {
      var i = [];
      var o = {
        referenceNode: null,
        followedRetentiveLines: new Map(n),
        deletedLinesSet: new Set(),
        updateLines: [],
        needForceUpdateLines: [],
        needForceUnmountLines: []
      };
      var a = e.length - 1;
      for (; a >= 0; a--) {
        var l = e[a];
        switch (l.type) {
          case diffChangeConstants.ChangeType.LINE_DELETE:
            i.push.apply(i, typescriptRuntimeHelpers_1.spread(this.Pr(l, o)));
            break;
          case diffChangeConstants.ChangeType.LINE_CONSTANT:
            i.push.apply(i, typescriptRuntimeHelpers_1.spread(this.Dr(l, o)));
            break;
          case diffChangeConstants.ChangeType.LINE_UPDATE:
            i.push.apply(i, typescriptRuntimeHelpers_1.spread(this.kr(l, o)));
            break;
          case diffChangeConstants.ChangeType.LINE_INSERT:
            i.push.apply(i, typescriptRuntimeHelpers_1.spread(this.Rr(l, t, o)));
        }
      }
      i.reverse();
      return {
        newChangeList: i,
        followedRetentiveLines: o.followedRetentiveLines,
        deletedLinesSet: o.deletedLinesSet,
        updateLines: o.updateLines,
        needForceUpdateLines: o.needForceUpdateLines,
        needForceUnmountLines: o.needForceUnmountLines
      };
    };
    t.markChangeListDirty = function (e) {
      var t;
      var n;
      try {
        var i = typescriptRuntimeHelpers_1.values(e);
        var o = i.next();
        for (; !o.done; o = i.next()) {
          var a = o.value;
          switch (a.type) {
            case diffChangeConstants.ChangeType.LINE_DELETE:
              this.xr(a);
              break;
            case diffChangeConstants.ChangeType.LINE_UPDATE:
            case diffChangeConstants.ChangeType.LINE_INSERT:
              this.Cr(a);
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (o && !o.done && (n = i.return)) {
            n.call(i);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
    };
    t.gr = function (e, t, n) {
      t = t === "insert" ? 1 : -1;
      if (n < (e = {
        startLine: e.startLine,
        endLine: e.endLine
      }).startLine) {
        e.startLine += t;
        e.endLine += t;
      } else if (n >= e.startLine && n <= e.endLine) {
        e.endLine += t;
      }
      return e;
    };
    t.Pr = function (e, t) {
      var n;
      var i;
      var o;
      var a = (o = this.s.getContentState().getZoneState(this.qe)) === null || o === undefined ? undefined : o.getContainer();
      if (!a) {
        return [];
      }
      var l = [];
      var u = e.deletes.length - 1;
      for (; u >= 0; u--) {
        var h = e.retain + u;
        var c = e.originalStart + u;
        if (t.followedRetentiveLines.has(c)) {
          t.followedRetentiveLines.delete(c);
        }
        this.Os.reconcileCustomRetentiveLines({
          type: virtualListConstants.operationTypes.DELETE,
          delete: {
            prevIndex: c
          }
        });
        var d = e.deletes[u].getNode();
        if (d) {
          t.deletedLinesSet.add(c);
          var f = a.contains(d);
          if (!f) {
            t.needForceUnmountLines.push(e.deletes[u]);
          }
          if ((d = l.length > 0 ? l[l.length - 1] : null) && d.retain === h + 1 && d.shouldBeAppliedToDOMTree === f) {
            d.retain = h;
            d.originalStart = c;
            d.deletes.push(e.deletes[u]);
          } else {
            f = {
              type: diffChangeConstants.ChangeType.LINE_DELETE,
              retain: h,
              originalStart: c,
              deletes: [e.deletes[u]],
              shouldBeAppliedToDOMTree: f
            };
            l.push(f);
          }
          try {
            n = undefined;
            var v = typescriptRuntimeHelpers_1.values(l);
            var g = v.next();
            for (; !g.done; g = v.next()) {
              g.value.deletes.reverse();
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              if (g && !g.done && (i = v.return)) {
                i.call(v);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
        }
      }
      return l.reverse();
    };
    t.kr = function (e, t) {
      var n;
      var i;
      var o;
      var a = (o = this.s.getContentState().getZoneState(this.qe)) === null || o === undefined ? undefined : o.getContainer();
      if (!a) {
        return [];
      }
      var l = [];
      var u = e.inserts.length - 1;
      for (; u >= 0; u--) {
        var h = e.retain + u;
        var c = e.originalStart + u;
        var d = e.inserts[u].state;
        var f = false;
        if (t.followedRetentiveLines.has(c)) {
          f = true;
          t.followedRetentiveLines.delete(c);
          t.followedRetentiveLines.set(d.index, d);
        }
        this.Os.reconcileCustomRetentiveLines({
          type: virtualListConstants.operationTypes.UPDATE,
          update: {
            prevIndex: c,
            newLineState: d
          }
        });
        var g = e.inserts[u].state.getNode();
        if (g) {
          d = l.length > 0 ? l[l.length - 1] : null;
          f = f || a.contains(g);
          if (d && d.retain === h + 1 && d.shouldBeAppliedToDOMTree === f) {
            d.retain = h;
            d.originalStart = c;
            d.inserts.push(e.inserts[u]);
            d.deletes.push(e.deletes[u]);
          } else {
            d = t.referenceNode;
            d = typescriptRuntimeHelpers_1.assign({
              type: diffChangeConstants.ChangeType.LINE_UPDATE,
              retain: h,
              originalStart: c,
              inserts: [e.inserts[u]],
              deletes: [e.deletes[u]],
              shouldBeAppliedToDOMTree: f
            }, f && d ? {
              referenceNode: d
            } : {});
            l.push(d);
          }
          t.updateLines.push(e.inserts[u].state);
          if (f) {
            t.referenceNode = g;
          } else {
            try {
              t.referenceNode = this.Lr.placeholderModule.getPlaceholderNode(c, {
                isRequired: true
              });
            } catch (t) {
              if (t instanceof v) {
                f = e.inserts[u].state.getNode();
                g = e.deletes[u].getNode();
                t.extraInfo.isInsertNodeNull = !f;
                t.extraInfo.isDeleteNodeNull = !g;
                t.extraInfo.isNodeRefEqual = f === g;
                t.extraInfo.isInsertNodeInContainer = a.contains(f);
                t.extraInfo.isDeleteNodeInContainer = a.contains(g);
                t.extraInfo.originalStart = c;
                t.extraInfo.changedStart = h;
              }
              throw t;
            }
            if ((h = (h = this.Lr.getPreviousZoneState()) === null || h === undefined ? undefined : h.getLine(c)) && lineAttributeComparator.compareLineAttrs(e.inserts[u].state, h)) {
              t.needForceUpdateLines.push(e.inserts[u].state.index);
            }
          }
        } else {
          t.referenceNode = this.Lr.placeholderModule.getPlaceholderNode(c, {
            isRequired: true
          });
        }
      }
      try {
        var y = typescriptRuntimeHelpers_1.values(l);
        var L = y.next();
        for (; !L.done; L = y.next()) {
          var m = L.value;
          m.inserts.reverse();
          m.deletes.reverse();
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          if (L && !L.done && (i = y.return)) {
            i.call(y);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      return l.reverse();
    };
    t.Dr = function (e, t) {
      var n;
      var i;
      var o;
      var a = (o = this.s.getContentState().getZoneState(this.qe)) === null || o === undefined ? undefined : o.getContainer();
      if (!a) {
        return [];
      }
      var l = [];
      var u = e.inserts.length - 1;
      for (; u >= 0; u--) {
        var h = e.retain + u;
        var c = e.originalStart + u;
        var d = e.deletes[u].getNode();
        if (!d || !a.contains(d)) {
          try {
            t.referenceNode = this.Lr.placeholderModule.getPlaceholderNode(c, {
              isRequired: true
            });
            continue;
          } catch (e) {
            if (e instanceof v) {
              e.extraInfo.cachedNode = !!d;
              e.extraInfo.nodeMounted = a.contains(d);
            }
            throw e;
          }
        }
        var f = l.length > 0 ? l[l.length - 1] : null;
        if (f && f.retain === h + 1) {
          f.retain = h;
          f.originalStart = c;
          f.inserts.push(e.inserts[u]);
          f.deletes.push(e.deletes[u]);
        } else {
          c = {
            type: diffChangeConstants.ChangeType.LINE_CONSTANT,
            retain: h,
            originalStart: c,
            inserts: [e.inserts[u]],
            deletes: [e.deletes[u]]
          };
          l.push(c);
        }
        t.referenceNode = d;
      }
      try {
        var g = typescriptRuntimeHelpers_1.values(l);
        var p = g.next();
        for (; !p.done; p = g.next()) {
          var y = p.value;
          y.inserts.reverse();
          y.deletes.reverse();
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          if (p && !p.done && (i = g.return)) {
            i.call(g);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      return l.reverse();
    };
    t.Rr = function (e, t, n) {
      var i;
      var o;
      var s = n.referenceNode;
      var a = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), s ? {
        referenceNode: s
      } : {}), {
        inserts: []
      });
      var l = this.Os.getRetentiveLines();
      try {
        var u = typescriptRuntimeHelpers_1.values(e.inserts);
        var h = u.next();
        for (; !h.done; h = u.next()) {
          var c = h.value;
          var d = c.state;
          if (d.getNode() && !d.instance) {
            d.setNode(null);
          }
          if (t && d.index >= t.startLine && d.index <= t.endLine) {
            a.inserts.push(c);
            this.Os.reconcileCustomRetentiveLines({
              type: virtualListConstants.operationTypes.INSERT,
              insert: {
                newLineState: d
              }
            });
          } else if (l.has(c.state.index) && this.s.pluginManager.getLineWrapperInfo(d).hasWrapper) {
            a.inserts.push(c);
          }
        }
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          if (h && !h.done && (o = u.return)) {
            o.call(u);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
      if (a.inserts.length === 0) {
        return [];
      } else {
        n.referenceNode = null;
        return [a];
      }
    };
    t.xr = function (e) {
      this.Lr.getLayoutModule().updateNodeLayoutInfo(e.retain - 1, {
        layoutDirty: true
      });
    };
    t.Cr = function (e) {
      var t;
      var n;
      var i;
      var o;
      var s = this.Lr.getLayoutModule();
      if (e.shouldBeAppliedToDOMTree !== false) {
        try {
          var a = typescriptRuntimeHelpers_1.values(e.inserts);
          var l = a.next();
          for (; !l.done; l = a.next()) {
            var u = l.value;
            s.updateNodeLayoutInfo(u.state.index, {
              layoutDirty: true
            });
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (l && !l.done && (n = a.return)) {
              n.call(a);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
      } else {
        try {
          var h = typescriptRuntimeHelpers_1.values(e.inserts);
          var c = h.next();
          for (; !c.done; c = h.next()) {
            u = c.value;
            s.updateNodeLayoutInfo(u.state.index, {
              needIdlePeriodRender: true
            });
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            if (c && !c.done && (o = h.return)) {
              o.call(h);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
      }
      if (e.retain - 1 >= 0) {
        s.updateNodeLayoutInfo(e.retain - 1, {
          layoutDirty: true
        });
      }
    };
    return e;
  }();
  var layoutBoundsUtils = require("layout-bounds-utils") /*id: 863516*/;
  var reactLifecycleDiffConstants = require("react-lifecycle-diff-constants") /*id: 971280*/;
  var G = function () {
    function e(e, t, n) {
      this.Pi = e;
      this.rs = t;
      this.ls = n;
      this.us = null;
    }
    var t = e.prototype;
    t.destroy = function () {
      this.os();
    };
    t.checkLayoutUpdate = function () {
      var e = this.Pi.getHeight();
      var t = this.Pi.getWidth();
      if (this.rs && (t !== this.rs.width || e !== this.rs.height)) {
        this.hs();
      }
      this.rs = {
        width: t,
        height: e
      };
    };
    t.ensureLayoutUpdate = function () {
      if (this.us !== null) {
        this.hs({
          immediate: true
        });
      }
    };
    t.hs = function (e) {
      var t = this;
      var e = (e = e === undefined ? {} : e).immediate;
      var e = e !== undefined && e;
      this.os();
      if (e) {
        this.ls();
      } else {
        this.us = setTimeout(function () {
          t.ls();
        });
      }
    };
    t.os = function () {
      if (this.us !== null) {
        clearTimeout(this.us);
        this.us = null;
      }
    };
    return e;
  }();
  var Q = function () {
    function e(e, t, n, i, r, o, s, a, l, u, h, c) {
      var d = this;
      this.qe = e;
      this.s = t;
      this.as = n;
      this.ds = i;
      this.cs = r;
      this.vs = o;
      this.Se = s;
      this._s = a;
      this.fs = l;
      this.Ls = u;
      this.ms = c;
      this.layoutUpdateController = null;
      this.Ms = null;
      this.ys = null;
      this.js = null;
      this.gs = [];
      this.ps = false;
      this.bs = null;
      this.ws = {
        ReactContextProvider: null
      };
      this.qs = null;
      this.Ss = null;
      this.Es = null;
      this.Rs = null;
      this.Ps = false;
      this.Is = null;
      this.handleAncestorForceRefresh = function (e) {
        d.vs.unbindZoneWithScroller(d.qe, d.Se);
        var t = typeof e.virtualListScroller == "function" ? e.virtualListScroller() : e.virtualListScroller;
        var e = typeof e.outerScroller == "function" ? e.outerScroller() : e.outerScroller;
        d.Se = t;
        d._s = e ? Array.isArray(e) ? e : [e] : [];
        d.vs.bindZoneWithScroller(d.qe, d.Se, true);
        d._s.forEach(function (e) {
          return d.vs.bindZoneWithScroller(d.qe, e);
        });
        if (e = d.s.getContentState().getZoneState(d.qe)) {
          d.Ds([{
            startLine: 0,
            endLine: e.length() - 1
          }]);
        }
        d.xs({
          scene: "viewport-change"
        });
      };
      this.qi = function (e) {
        var t;
        var n = (t = d.zoneState) === null || t === undefined ? undefined : t.getContainer();
        if (n) {
          e = (t = e.reduce(function (e, t) {
            var i = t.line;
            var r = t.visible;
            var o = t.index;
            var s = i.getNode();
            var t = s && n.contains(s);
            if (!r && t) {
              M(e.removeRangeList, o);
            }
            if (d.ys) {
              s = (i = d.ys).startLine;
              i = i.endLine;
              if (r && !t && s <= o && o <= i) {
                M(e.insertRangeList, o);
              }
            }
            return e;
          }, {
            insertRangeList: [],
            removeRangeList: []
          })).insertRangeList;
          t = t.removeRangeList;
          if (e.length || t.length) {
            d.Bs({
              insertRangeList: e,
              removeRangeList: t
            }, {
              scene: "viewport-change"
            });
            d.handleViewportUpdate();
          }
        }
      };
      this.zs = false;
      this.resetBufferHeight();
      this.vs.bindVirtualListModuleWithZone(this.qe, this);
      this.Cs = this.ms;
      this.ji = new D(this.s, this.qe);
      this.Pi = new z(this.s, this.qe, this.as, this.ji);
      this.layoutUpdateController = h ? new G(this.Pi, null, h) : null;
      this.Os = new q(this.s, this.qe, this.ji);
      this.placeholderModule = new b(this.s, this.qe, this.Pi, this.ji);
      this.As = new V(this.s, this.qe, this, this.Os);
    }
    var t = e.prototype;
    t.Ts = function () {
      if (this.Ss !== null) {
        cancelAnimationFrame(this.Ss);
      }
      if (this.Es !== null) {
        cancelAnimationFrame(this.Es);
      }
    };
    t.ss = function () {
      var e;
      this.placeholderModule.removeAll();
      this.Pi.destroy();
      this.Os.reset();
      if ((e = this.layoutUpdateController) !== null && e !== undefined) {
        e.destroy();
      }
      this.ys = null;
      this.bs = null;
      this.gs = [];
      this.zs = false;
      this.Ms = null;
      this.ps = false;
      this.Ps = false;
      this.Rs = null;
      this.Ts();
    };
    t.destroy = function () {
      var e = this;
      this.vs.unbindVirtualListModuleWithZone(this.qe);
      this.vs.unbindZoneWithScroller(this.qe, this.Se);
      this._s.forEach(function (t) {
        return e.vs.unbindZoneWithScroller(e.qe, t);
      });
      this.vs.unbindEventsForZone(this.qe);
      this.Cs = false;
      this.ss();
      this.ji.off(i.Change, this.qi);
    };
    Object.defineProperty(t, "isEnabled", {
      get: function () {
        return this.Cs;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "isMounted", {
      get: function () {
        return this.zs;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "zoneState", {
      get: function () {
        return this.s.getContentState().getZoneState(this.qe);
      },
      enumerable: false,
      configurable: true
    });
    t.getDefaultLineHeight = function () {
      return this.as;
    };
    t.getLayoutModule = function () {
      return this.Pi;
    };
    t.getInvisibleLinesModule = function () {
      return this.ji;
    };
    t.getNextRenderLines = function () {
      return this.gs;
    };
    t.getRetentiveLines = function () {
      return typescriptRuntimeHelpers_1.spread(this.Os.getRetentiveLines().values());
    };
    t.getInvisibleLines = function () {
      return typescriptRuntimeHelpers_1.spread(this.ji.getInvisibleLines());
    };
    t.getRenderBoundary = function () {
      return this.ys && typescriptRuntimeHelpers_1.assign({}, this.ys);
    };
    t.getRenderRangeWithoutBuffer = function () {
      return this.js && typescriptRuntimeHelpers_1.assign({}, this.js);
    };
    t.getPreviousZoneState = function () {
      return this.bs;
    };
    t.getViewportBoundaryRelativeToZone = function () {
      return this.Ms && typescriptRuntimeHelpers_1.assign({}, this.Ms);
    };
    t.getPaintedTextSize = function () {
      var e;
      var t;
      var n = new Set(typescriptRuntimeHelpers_1.spread(this.getNextRenderLines(), this.getRetentiveLines()));
      var i = 0;
      try {
        var o = typescriptRuntimeHelpers_1.values(n);
        var s = o.next();
        for (; !s.done; s = o.next()) {
          i += s.value.getModelText().length;
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (s && !s.done && (t = o.return)) {
            t.call(o);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return i;
    };
    t.getViewportLockModule = function () {
      return this.Ls;
    };
    t.getScroller = function () {
      return this.Se;
    };
    t.updateScroller = function (e, t) {
      this.Se = e;
      if (t !== undefined) {
        this.ks = t;
      }
    };
    t.getContentChangeCacheData = function () {
      return this.Rs;
    };
    t.Vs = function () {
      var e = this;
      this.ss();
      this.vs.bindZoneWithScroller(this.qe, this.Se, true);
      this._s.forEach(function (t) {
        return e.vs.bindZoneWithScroller(e.qe, t);
      });
      this.vs.bindEventsForZone(this.qe);
      this.Pi.init();
      this.Os.init();
      this.ji.on(i.Change, this.qi);
    };
    t.initializeZoneRender = function (e) {
      var t = this;
      var n = this.s.getContentState().getZoneState(this.qe);
      if (n) {
        this.Vs();
        n.lines.forEach(function (e) {
          var n = t.ji.isInvisible(e);
          t.Pi.insert(e.index, typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, _(t.as)), n ? {
            height: 0,
            invisible: true
          } : {}));
        });
        this.xs({
          scene: "initial",
          initialRender: e
        });
        e = this.s.selection.getSelection(this.qe);
        this.handleSelectionChange(e);
        this.zs = true;
      }
    };
    t.setRenderInformation = function (e) {
      this.ws = typescriptRuntimeHelpers_1.assign({}, e);
    };
    t.resetBufferHeight = function () {
      this.ks = this.ds();
    };
    t.open = function () {
      var e = this;
      var t = this.s.getContentState().getZoneState(this.qe);
      if (t) {
        if (!this.Cs) {
          this.Cs = true;
          if (this.s.mounted) {
            this.Vs();
            t.lines.forEach(function (t) {
              e.Pi.insert(t.index, _(e.as, {
                layoutDirty: true
              }));
              e.Os.reconcileCustomRetentiveLines({
                type: virtualListConstants.operationTypes.INSERT,
                insert: {
                  newLineState: t
                }
              });
            });
            t = {
              startLine: 0,
              endLine: t.lines.length - 1
            };
            this.ys = t;
            t = this.s.selection.getSelection(this.qe);
            this.Os.updateSelectionLines(t, true);
            if ((t = (t = this.zoneState) === null || t === undefined ? undefined : t.getContainer()) && document.contains(t)) {
              this.Pi.fixRenderDirty();
            }
            this.resetBufferHeight();
            this.xs({
              scene: "viewport-change"
            });
            this.zs = true;
          }
        }
      }
    };
    t.close = function () {
      if (this.Cs) {
        this.Cs = false;
        this.forceRenderAll();
        this.ss();
      }
    };
    t.forceRenderAll = function (e) {
      var t = this;
      if (e === undefined) {
        e = {};
      }
      this.vs.unbindZoneWithScroller(this.qe, this.Se);
      this._s.forEach(function (e) {
        return t.vs.unbindZoneWithScroller(t.qe, e);
      });
      this.vs.unbindEventsForZone(this.qe);
      if ((this.qs = e).shouldRenderPlainText) {
        this.placeholderModule.forceRenderText();
      } else {
        this.ks = Infinity;
        this.xs({
          scene: "viewport-change"
        });
      }
    };
    t.cancelForceRenderAll = function () {
      var t = this;
      this.vs.bindZoneWithScroller(this.qe, this.Se, true);
      this._s.forEach(function (e) {
        return t.vs.bindZoneWithScroller(t.qe, e);
      });
      this.vs.bindEventsForZone(this.qe);
      if (this.qs?.shouldRenderPlainText === true) {
        this.placeholderModule.cancelForceRenderText();
      } else {
        this.resetBufferHeight();
        this.xs({
          scene: "viewport-change"
        });
      }
      this.qs = null;
    };
    t.isLineInViewport = function (e) {
      return this.getLinePosRelativeToContent(e) === 2;
    };
    t.scrollIntoViewport = function (e, t) {
      var n;
      var i;
      var r;
      var o;
      if (t === undefined) {
        t = {};
      }
      g.setEditor(this.s);
      if (this.isMounted) {
        if ((i = (r = this.zoneState) === null || r === undefined ? undefined : r.getContainer()) && document.contains(i)) {
          if (!this.isLineInViewport(e)) {
            n = (o = c(this.Se)).bottom - o.top;
            i = (r = this.Pi.getTop(e)) - n / 2;
            o = r + n / 2;
            r = E({
              top: i - this.ks,
              bottom: o + this.ks
            }, this.Pi);
            o = E({
              top: i,
              bottom: o
            }, this.Pi);
            if (r && o) {
              this.xs({
                scene: "scroll-into-viewport"
              }, {
                renderRangeInfo: {
                  renderBoundary: r,
                  renderRangeWithoutBuffer: o
                }
              });
              if ((o = this.layoutUpdateController) !== null && o !== undefined) {
                o.ensureLayoutUpdate();
              }
              if (t.shouldScroll) {
                if (e = this.getLineVirtualRect(e)) {
                  d(this.Se, e.top - n / 2);
                }
              }
              this.scheduleViewportCheck();
            }
          }
        }
      }
    };
    t.handleContentChange = function (e) {
      var t;
      g.setEditor(this.s);
      try {
        this.bs = e.previousZoneState;
        if ((t = this.layoutUpdateController) !== null && t !== undefined) {
          t.checkLayoutUpdate();
        }
        this.Pi.reconcile(e.changes);
        this.ji.reconcile(e.changes);
        this.Ns(e);
        this.bs = null;
      } catch (t) {
        if (t instanceof v) {
          t.extraInfo.changes = e.changes.map(function (e) {
            return {
              start: e.start,
              deletes: e.deletes.length,
              inserts: e.inserts.length
            };
          });
          t.extraInfo.renderDiff = (e = e.zoneDiff.changes) === null || e === undefined ? undefined : e.map(function (e) {
            return typescriptRuntimeHelpers_1.assign({
              type: e.type,
              retain: e.retain,
              inserts: e.type !== diffChangeConstants.ChangeType.LINE_DELETE ? e.inserts.length : undefined
            }, e.type !== diffChangeConstants.ChangeType.LINE_INSERT ? {
              originalStart: e.originalStart,
              deletes: e.deletes.length
            } : {});
          });
          t.extraInfo = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, t.extraInfo), {
            zone: this.qe,
            zoneStateSize: ((e = this.zoneState) === null || e === undefined ? undefined : e.length()) || 0,
            previousZoneStateSize: ((e = this.bs) === null || e === undefined ? undefined : e.length()) || 0,
            placeholderState: typescriptRuntimeHelpers_1.spread(this.placeholderModule.Di.keys()),
            renderBoundary: this.ys,
            retentiveLines: this.getRetentiveLines().map(function (e) {
              return e.index;
            })
          });
        }
        throw t;
      }
    };
    t.Ns = function (e) {
      var t;
      var n = this;
      var i = e.zoneDiff;
      var o = typescriptRuntimeHelpers_1.rest(e, ["zoneDiff"]);
      if ((y = i.changes) !== null && y !== undefined && y.length) {
        var s = this.zoneState;
        var l = s == null ? undefined : s.getContainer();
        if (s && l) {
          var u = this.ys ? typescriptRuntimeHelpers_1.assign({}, this.ys) : null;
          var h = this.js ? typescriptRuntimeHelpers_1.assign({}, this.js) : null;
          var c = this.gs.slice(0);
          var d = this.Os.getRetentiveLines();
          var f = this.As.getTransformInfo(o.changes);
          var v = f.nextRenderBoundary;
          var g = f.placeholderChange;
          var p = this.s.selection.getSelection(this.qe);
          this.Os.updateSelectionLines(p, false);
          var e = this.As.reconcileChangeList(i.changes, v, d);
          var y = e.newChangeList;
          var L = e.followedRetentiveLines;
          this.ys = v ? typescriptRuntimeHelpers_1.assign({}, v) : null;
          this.gs = this.Xs(v);
          L.forEach(function (e, t) {
            if (e.index !== t) {
              L.delete(t);
              L.set(e.index, e);
            }
          });
          this.Os.updateRetentiveLines();
          if (!y.length) {
            this.Fs(v, g, L);
            this.startIdleWorker();
            return;
          }
          var m;
          var s = e.updateLines;
          var f = e.deletedLinesSet;
          var p = e.needForceUnmountLines;
          var e = e.needForceUpdateLines;
          this.Rs = {
            updateLines: s,
            needForceUnmountLines: p,
            originalChanges: i.changes,
            prevRenderLines: c,
            prevRetentiveLines: typescriptRuntimeHelpers_1.spread(d.values()),
            nextRenderLines: this.gs.slice(0),
            nextRetentiveLines: this.getRetentiveLines().slice(0)
          };
          this.Os.handleFollowWhenContentChange(L);
          if (h && u && (t = this.Ls) !== null && t !== undefined) {
            t.startLock(this.Se, {
              bufferStart: u.startLine,
              viewportStart: h.startLine
            }, o.previousZoneState, f);
          }
          if ((f = o.beforeRender) !== null && f !== undefined) {
            f.call(o);
          }
          o.contentChangeRender(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, i), {
            changes: y
          }));
          if ((i = o.afterRender) !== null && i !== undefined) {
            i.call(o);
          }
          this.Os.clearFollowStatus();
          if (this.ps) {
            if (m = this.Rs.extraForceUpdateLines) {
              m.forEach(function (e) {
                if ((e = e.getNode()) !== null && e !== undefined) {
                  e.remove();
                }
              });
            }
            this.afterRendererForceUpdate();
            if ((m = this.Ls) !== null && m !== undefined) {
              m.correctAndUnlock();
            }
          } else {
            if ((m = this.Ls) !== null && m !== undefined) {
              m.correctAndUnlock();
            }
            e.forEach(function (e) {
              var t = (t = n.zoneState) === null || t === undefined ? undefined : t.getLine(e);
              var e = t == null ? undefined : t.getNode();
              if (t && e && !l.contains(e)) {
                reactinxDomRenderer.unmountComponents(t);
                t._node = null;
              }
            });
            this.Fs(v, g, L);
          }
          this.Rs = null;
          if (!o.applyOptions.noLayoutUpdate) {
            this.As.markChangeListDirty(y);
            this.Us();
          }
          this.scheduleViewportCheck();
        }
      }
    };
    t.Fs = function (e, t, n) {
      var i;
      if (this.zoneState) {
        i = this.Os.calcOnScreenRetentiveRangeList();
        i = this.Ws(t, this.zoneState.length(), e, i);
        this.reconcileRetentiveLines(Array.from(n.values()), this.getRetentiveLines());
        if (!i) {
          this.placeholderModule.removeAll();
          this.Hs();
        }
      }
    };
    t.handleSelectionChange = function (e) {
      try {
        var t = this.getRetentiveLines();
        this.Os.updateSelectionLines(e, true);
        this.reconcileRetentiveLines(t, this.getRetentiveLines());
      } catch (e) {
        if (e instanceof v) {
          if (e.isFatal) {
            if (this.Ps) {
              throw e;
            }
            this.Js();
          }
          e.extraInfo = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e.extraInfo), {
            placeholderState: typescriptRuntimeHelpers_1.spread(this.placeholderModule.Di.keys()),
            renderBoundary: this.ys,
            retentiveLines: this.getRetentiveLines().map(function (e) {
              return e.index;
            })
          });
          this.s.error({
            message: e.message,
            level: errorHandlerUtil.ErrorLevel.ERROR,
            e: (t = e.originalError) !== null && t !== undefined ? t : e,
            extra: JSON.stringify(e.extraInfo)
          });
        } else if (e instanceof Error) {
          this.s.error({
            message: e.message,
            level: errorHandlerUtil.ErrorLevel.ERROR,
            e: e
          });
        }
      }
    };
    t.Xs = function (e) {
      var t = this;
      if (e && this.zoneState) {
        return this.zoneState.lines.slice(e.startLine, e.endLine + 1).filter(function (e) {
          return !t.ji.isInvisible(e);
        });
      } else {
        return [];
      }
    };
    t.reconcileRetentiveLines = function (e, t) {
      var n;
      var i;
      var o;
      var s;
      var a;
      var l;
      if (this.zoneState) {
        var u = this.zoneState.getContainer();
        if (u) {
          e = typescriptRuntimeHelpers_1.spread(e);
          (t = typescriptRuntimeHelpers_1.spread(t)).sort(function (e, t) {
            return e.index - t.index;
          });
          var h = new Map();
          try {
            var c = typescriptRuntimeHelpers_1.values(e);
            var d = c.next();
            for (; !d.done; d = c.next()) {
              if (x = (w = d.value).getNode()) {
                h.set(x, w);
              }
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              if (d && !d.done && (i = c.return)) {
                i.call(c);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
          var f = [];
          try {
            var g;
            var p = typescriptRuntimeHelpers_1.values(t);
            var y = p.next();
            for (; !y.done; y = p.next()) {
              if ((x = (w = y.value).getNode()) && u.contains(x)) {
                if (h.has(x)) {
                  h.delete(x);
                }
              } else if ((g = f.length > 0 ? f[f.length - 1] : null) && g.endLine + 1 === w.index) {
                g.endLine += 1;
              } else {
                f.push({
                  startLine: w.index,
                  endLine: w.index
                });
              }
            }
          } catch (e) {
            o = {
              error: e
            };
          } finally {
            try {
              if (y && !y.done && (s = p.return)) {
                s.call(p);
              }
            } finally {
              if (o) {
                throw o.error;
              }
            }
          }
          var L = [];
          try {
            var m = typescriptRuntimeHelpers_1.values(h);
            var b = m.next();
            for (; !b.done; b = m.next()) {
              var w;
              var R = typescriptRuntimeHelpers_1.readIterable(b.value, 2);
              var x = R[0];
              var S = (w = R[1]).index;
              if (!this.isLineInViewport(S) && u.contains(x)) {
                L.push({
                  startLine: S,
                  endLine: S
                });
              }
            }
          } catch (e) {
            a = {
              error: e
            };
          } finally {
            try {
              if (b && !b.done && (l = m.return)) {
                l.call(m);
              }
            } finally {
              if (a) {
                throw a.error;
              }
            }
          }
          if (L.length || f.length) {
            try {
              this.Bs({
                insertRangeList: f,
                removeRangeList: L
              }, {
                scene: "viewport-change"
              });
            } catch (e) {
              if (e instanceof v) {
                e.extraInfo.insertRangeList = f;
                e.extraInfo.removeRangeList = L;
              }
              throw e;
            }
            this.Ds(f);
            this.Us();
          }
        }
      }
    };
    t.startIdleWorker = function () {
      var e = this.s.getContentState().getZoneState(this.qe);
      var t = e == null ? undefined : e.getContainer();
      if (e && t && (!this.ys || this.ys.startLine !== 0 || this.ys.endLine !== e.length() - 1) && (e = this.fs) !== null && e !== undefined) {
        e.start(this.qe);
      }
    };
    t.handleScroll = function (e) {
      this.xs({
        scene: "normal-scroll"
      }, e);
    };
    t.handleViewportUpdate = function (e) {
      this.xs({
        scene: "viewport-change"
      }, e);
    };
    t.handleViewportResize = function () {
      this.resetBufferHeight();
      this.xs({
        scene: "viewport-resize"
      }, {
        linesLayoutUpdate: !this.cs()
      });
    };
    t.Ks = function (e, t) {
      var n;
      var i;
      var r;
      t = t.getBoundingClientRect().top;
      this.Ms = (r = t, n = this.ks, {
        top: i = e.top - n - r,
        bottom: r = e.bottom + n - r,
        topWithoutBuffer: i + n,
        bottomWithoutBuffer: r - n
      });
      return {
        renderBoundary: E(t = this.getViewportBoundaryRelativeToZone(), this.Pi),
        renderRangeWithoutBuffer: E(t ? {
          top: t.topWithoutBuffer,
          bottom: t.bottomWithoutBuffer
        } : null, this.Pi)
      };
    };
    t.handleChildZoneContentChange = function (e) {
      var t;
      var n = (t = (n = this.s.getContentState()).getZoneManager) === null || t === undefined ? undefined : t.call(n);
      if (n) {
        if (e = n.getMatchedAncestorLine(e, this.qe)) {
          this.notifyInnerNodeLayoutUpdate(e);
        }
      }
    };
    t.notifyInnerNodeLayoutUpdate = function (e) {
      var t;
      var n;
      if (this.Cs) {
        if (t = e.getNode()) {
          if ((n = (n = this.zoneState) === null || n === undefined ? undefined : n.getContainer()) != null && n.contains(t)) {
            this.Pi.updateNodeLayoutInfo(e.index, {
              layoutDirty: true
            });
            this.Us();
            this.scheduleViewportCheck();
          } else {
            this.Pi.updateNodeLayoutInfo(e.index, {
              needIdlePeriodRender: true
            });
          }
        }
      }
    };
    t.xs = function (e, t) {
      var n;
      var i;
      var s;
      var a;
      if (t === undefined) {
        t = {};
      }
      g.setEditor(this.s);
      if (this.Es !== null) {
        cancelAnimationFrame(this.Es);
        this.Es = null;
      }
      if (this.Ss) {
        this.Us(true);
      }
      try {
        var l;
        var u;
        var h;
        var d;
        var f;
        var p;
        var y = this.zoneState;
        if (!y) {
          return;
        }
        var L = y.getContainer();
        if (!L) {
          return;
        }
        if (e.scene !== "initial" && !document.contains(L)) {
          this.startIdleWorker();
          return;
        }
        var m = this.Qs(L);
        var b = m.isContainerResized;
        var w = m.isContainerExpanded;
        if (!t.linesLayoutUpdate && !this.cs()) {
          t.linesLayoutUpdate = b;
        }
        var R;
        var x = (x = t.viewportData) || c(this.Se);
        var S = null;
        var E = null;
        E = t.renderRangeInfo ? (S = t.renderRangeInfo.renderBoundary, t.renderRangeInfo.renderRangeWithoutBuffer) : (S = (R = this.Ks(x, L)).renderBoundary, R.renderRangeWithoutBuffer);
        if (e.scene === "initial" && !S) {
          if (!y.lines.length) {
            throw new v("zone lines has no length, zoneId: " + this.qe + ",", true);
          }
          S = {
            startLine: 0,
            endLine: 0
          };
        }
        S = S && this.Os.expandingBoundary(S);
        f = this.ys;
        p = S;
        var M = f || p ? !f && p ? {
          insertRangeList: [{
            startLine: p.startLine,
            endLine: p.endLine
          }],
          removeRangeList: []
        } : !p && f ? {
          insertRangeList: [],
          removeRangeList: [{
            startLine: f.startLine,
            endLine: f.endLine
          }]
        } : (l = f, u = p, h = [], d = [], u.startLine > l.endLine || u.endLine < l.startLine ? (h.push({
          startLine: u.startLine,
          endLine: u.endLine
        }), d.push({
          startLine: l.startLine,
          endLine: l.endLine
        })) : (u.startLine < l.startLine && h.push({
          startLine: u.startLine,
          endLine: l.startLine - 1
        }), u.endLine > l.endLine && h.push({
          startLine: l.endLine + 1,
          endLine: u.endLine
        }), u.startLine > l.startLine && d.push({
          startLine: l.startLine,
          endLine: u.startLine - 1
        }), u.endLine < l.endLine && d.push({
          startLine: u.endLine + 1,
          endLine: l.endLine
        })), {
          insertRangeList: h,
          removeRangeList: d
        }) : {
          insertRangeList: [],
          removeRangeList: []
        };
        var I = this.Os.filterRetentiveLinesInViewportDiff(M, this.s.getStatus("isComposing"));
        var N = this.ji.filterInvisibleLinesInViewportDiff(I);
        if (this.s.getStatus("isComposing")) {
          this.placeholderModule.checkPlaceholderNodeRemoved();
        }
        if (this.Zs(S, N, e)) {
          S = this.ys;
          E = this.js;
          N.removeRangeList.length = 0;
        }
        if ((n = this.layoutUpdateController) !== null && n !== undefined) {
          n.checkLayoutUpdate();
        }
        var C = this.ys;
        this.ys = S ? typescriptRuntimeHelpers_1.assign({}, S) : null;
        this.js = E;
        this.gs = this.Xs(S);
        if (N.insertRangeList.length === 0 && N.removeRangeList.length === 0 && e.scene !== "initial" && !t.linesLayoutUpdate) {
          this.startIdleWorker();
          if ((i = this.layoutUpdateController) !== null && i !== undefined) {
            i.ensureLayoutUpdate();
          }
          return;
        }
        try {
          this.Bs(N, e);
        } catch (e) {
          var T = this.getRetentiveLines();
          if (e instanceof v) {
            e.extraInfo = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e.extraInfo), {
              rawViewportDiff: M,
              finalViewportDiff: N,
              prevRenderBoundary: C,
              nextRenderBoundary: S,
              retentiveLines: T.map(function (e) {
                return e.index;
              })
            });
          }
          throw e;
        }
        if (t.linesLayoutUpdate) {
          if (S) {
            this.Ds([{
              startLine: 0,
              endLine: this.Pi.size - 1
            }], w);
          }
        } else {
          this.Ds(N.insertRangeList);
        }
        this.Us();
        if ((s = this.layoutUpdateController) !== null && s !== undefined) {
          s.checkLayoutUpdate();
        }
        if (e.scene !== "scroll-into-viewport") {
          O = e.scene === "initial";
          this.scheduleViewportCheck(O ? undefined : x);
        }
      } catch (e) {
        if (e instanceof v && e.isFatal) {
          if (this.Ps) {
            throw e;
          }
          this.Js();
        } else {
          var O = e;
          var x = O instanceof v;
          this.s.error({
            message: O == null ? undefined : O.message,
            level: errorHandlerUtil.ErrorLevel.ERROR,
            e: x && (a = O.originalError) !== null && a !== undefined ? a : O,
            extra: x ? JSON.stringify(O.extraInfo) : ""
          });
        }
      }
    };
    t.scheduleViewportCheck = function (e, t) {
      var n = this;
      if (this.Es !== null) {
        cancelAnimationFrame(this.Es);
      }
      this.Es = requestAnimationFrame(function () {
        n.xs({
          scene: "viewport-change"
        }, {
          viewportData: e
        });
        if ((n.Es = null) != t) {
          t();
        }
      });
    };
    t.triggerBufferChangeEvent = function (e) {
      e = typescriptRuntimeHelpers_1.assign({
        zoneId: this.qe
      }, e);
      this.s.call(virtualListConstants.virtualListEvent, e);
    };
    t.Ds = function (e, t) {
      var n;
      var i;
      var o;
      if (t === undefined) {
        t = false;
      }
      if (this.zoneState) {
        var s = this.zoneState.getContainer();
        if (s) {
          try {
            var a = typescriptRuntimeHelpers_1.values(e);
            var l = a.next();
            for (; !l.done; l = a.next()) {
              var u = l.value;
              var h = u.startLine;
              var c = u.endLine;
              var d = Math.max(0, h - 1);
              for (; d <= c; d++) {
                var f = (o = this.zoneState.getLine(d)) === null || o === undefined ? undefined : o.getNode();
                var v = !!f && !!s.contains(f);
                var g = this.ji.isInvisible(d);
                this.Pi.updateNodeLayoutInfo(d, typescriptRuntimeHelpers_1.assign({
                  layoutDirty: v,
                  needIdlePeriodRender: !v
                }, t && !g ? {
                  height: this.as
                } : {}));
              }
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              if (l && !l.done && (i = a.return)) {
                i.call(a);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
          if (t) {
            this.placeholderModule.updateAllPlaceholderRectInfo();
          }
        }
      }
    };
    t.Zs = function (e, t, n) {
      var i = t.insertRangeList;
      var t = t.removeRangeList;
      return n.scene === "normal-scroll" && !!e && i.length === 0 && t.length === 1 && t[0].startLine === t[0].endLine && (t[0].startLine === e.startLine - 1 || t[0].startLine === e.endLine + 1);
    };
    t.Bs = function (e, t) {
      var n;
      var i;
      var r;
      if (e.insertRangeList.length !== 0 || e.removeRangeList.length !== 0 || t.scene === "initial") {
        if ((n = t.beforeRender) !== null && n !== undefined) {
          n.call(t);
        }
        if ((t.scene === "viewport-change" || t.scene === "viewport-resize" || t.scene === "normal-scroll") && this.ys && this.js && this.zoneState) {
          r = e.insertRangeList.reduce(function (e, t) {
            for (var n = t.startLine; n <= t.endLine; n++) {
              e.add(n);
            }
            return e;
          }, new Set());
          if ((n = this.Ls) !== null && n !== undefined) {
            n.startLock(this.Se, {
              bufferStart: this.ys.startLine,
              viewportStart: this.js.startLine
            }, this.zoneState, r);
          }
        }
        switch (t.scene) {
          case "initial":
            this.Gs(e, t.initialRender);
            break;
          case "normal-scroll":
          case "viewport-change":
          case "viewport-resize":
          case "scroll-into-viewport":
            this.Ys(e);
        }
        if (t.scene === "viewport-change" || t.scene === "normal-scroll") {
          if ((r = this.Ls) !== null && r !== undefined) {
            r.correctAndUnlock();
          }
        } else if (t.scene === "viewport-resize" && (i = this.Ls) !== null && i !== undefined) {
          i.correctAndUnlock(function (e) {
            e.scrollIntoView();
          });
        }
        this.Os.addCustomRetentiveLines(e.insertRangeList);
        if (!this.$s({
          viewportDiff: e
        })) {
          this.placeholderModule.removeAll();
          this.Hs();
        }
        if ((i = t.afterRender) !== null && i !== undefined) {
          i.call(t);
        }
        this.triggerBufferChangeEvent(e);
      }
    };
    t.Gs = function (e, t) {
      var n = this.s.getContentState().getZoneState(this.qe);
      if (n) {
        t((e = e.insertRangeList[0]) ? n.lines.slice(e.startLine, e.endLine + 1) : []);
        this.Hs(e);
      }
    };
    t.Ys = function (e) {
      var t;
      var n = this;
      var i = this.s.getContentState().getZoneState(this.qe);
      var o = i == null ? undefined : i.getContainer();
      if (i && o) {
        var s = [];
        try {
          var a = typescriptRuntimeHelpers_1.values(e.insertRangeList);
          var l = a.next();
          for (; !l.done; l = a.next()) {
            (function (e) {
              var t = e.endLine - e.startLine + 1;
              var n = e.startLine;
              s.push.apply(s, typescriptRuntimeHelpers_1.spread(Array.from(Array(t), function (e, t) {
                return n + t;
              })));
            })(l.value);
          }
        } catch (e) {
          u = {
            error: e
          };
        } finally {
          try {
            if (l && !l.done && (t = a.return)) {
              t.call(a);
            }
          } finally {
            if (u) {
              throw u.error;
            }
          }
        }
        this.ln(s);
        function u(e, t) {
          var s;
          var a;
          var l = e === "insert" ? x : S;
          try {
            var u = typescriptRuntimeHelpers_1.values(t);
            var h = u.next();
            for (; !h.done; h = u.next()) {
              var c = l(h.value, n.placeholderModule, function (e) {
                return i.getLine(e);
              }, function (e) {
                return n.s.pluginManager.getLineWrapperInfo(e);
              });
              if (c) {
                (function (e, t) {
                  for (var n = 0; n < e.length; n++) {
                    (function (n) {
                      var i;
                      var r = e[n];
                      if (r.type === "insert_before") {
                        n = r.nodes;
                        i = r.referenceNode;
                        n.forEach(function (e) {
                          t.insertBefore(e, i);
                        });
                      }
                      if (r.type === "remove") {
                        r.nodes.forEach(function (e) {
                          e.remove();
                        });
                      }
                    })(n);
                  }
                })([c.patch], o);
                n.placeholderModule.updateState(c.placeholderChange);
              }
            }
          } catch (e) {
            s = {
              error: e
            };
          } finally {
            try {
              if (h && !h.done && (a = u.return)) {
                a.call(u);
              }
            } finally {
              if (s) {
                throw s.error;
              }
            }
          }
        }
        try {
          u("insert", e.insertRangeList);
          u("remove", e.removeRangeList);
          (function (e) {
            var t;
            var n;
            var e = e.getNode();
            if (e) {
              try {
                var i = typescriptRuntimeHelpers_1.values(Array.from(e));
                var o = i.next();
                for (; !o.done; o = i.next()) {
                  var s = o.value;
                  if (s instanceof Element) {
                    var a;
                    var l = s;
                    while ((a = l.__key) && a.startsWith(reactLifecycleDiffConstants.markPrefix)) {
                      if (!l.children.length) {
                        s.remove();
                        break;
                      }
                      if (l.children.length !== 1 || !l.firstElementChild) {
                        break;
                      }
                      l = l.firstElementChild;
                    }
                  }
                }
              } catch (e) {
                t = {
                  error: e
                };
              } finally {
                try {
                  if (o && !o.done && (n = i.return)) {
                    n.call(i);
                  }
                } finally {
                  if (t) {
                    throw t.error;
                  }
                }
              }
            }
          })(i);
        } catch (e) {
          if (e instanceof v) {
            e.extraInfo.linesCount = i.lines.length;
          }
          throw e;
        }
      }
    };
    t.hn = function (e) {
      g.setEditor(this.s);
      try {
        reactinxDomReconciler.reconcile(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), {
          ReactContextProvider: this.ws.ReactContextProvider
        }));
      } catch (n) {
        var t = (e.diffResult.changes || []).reduce(function (e, t) {
          if (t.type === diffChangeConstants.ChangeType.LINE_INSERT) {
            e.push([t.inserts[0].state.index, t.inserts[t.inserts.length - 1].state.index]);
          }
          return e;
        }, []);
        var e = (e.diffResult.changes || []).reduce(function (e, t) {
          if (t.type === diffChangeConstants.ChangeType.LINE_DELETE) {
            e.push([t.deletes[0].index, t.deletes[t.deletes.length - 1].index]);
          }
          return e;
        }, []).join();
        var t = "The insert ranges: " + JSON.stringify(t) + "\nThe remove ranges: " + JSON.stringify(e);
        if (n instanceof Error) {
          e = n.message + "\nExtra information:\n" + t;
          n.message = e;
          throw new v(e, true, n);
        }
        throw new v(t, true);
      }
    };
    t.Us = function (e) {
      var t = this;
      if (e === undefined) {
        e = false;
      }
      if (this.Ss !== null) {
        cancelAnimationFrame(this.Ss);
      }
      if (e) {
        if ((e = (e = this.zoneState) === null || e === undefined ? undefined : e.getContainer()) && document.contains(e)) {
          this.Pi.fixRenderDirty();
        }
      } else {
        this.Ss = requestAnimationFrame(function () {
          var e = (t.Ss = null) === (e = t.zoneState) || e === undefined ? undefined : e.getContainer();
          if (e && document.contains(e)) {
            t.Pi.fixRenderDirty();
          }
        });
      }
    };
    t.getLinePosRelativeToContent = function (e, t) {
      if (t = t === undefined ? this.getRenderBoundary() : t) {
        if (e >= t.startLine && e <= t.endLine) {
          return 2;
        } else if (e < t.startLine) {
          return 0;
        } else {
          return 1;
        }
      } else {
        return 3;
      }
    };
    t.isLineNodesInRenderContent = function (e) {
      var t = null;
      t = typeof e == "number" ? [e, e] : [e.start.line, e.end.line];
      return this.an(t);
    };
    t.an = function (e) {
      var t = typescriptRuntimeHelpers_1.readIterable(e, 2);
      var e = t[0];
      var n = t[1];
      var i = this;
      var o = e;
      for (; o <= n; o++) {
        var s = function (e) {
          if (!i.ji.isInvisible(e) && (i.getRetentiveLines().find(function (t) {
            return t.index === e;
          }) || i.ys && i.getLinePosRelativeToContent(e) === 2)) {
            return "continue";
          } else {
            return {
              value: false
            };
          }
        }(o);
        if (typeof s == "object") {
          return s.value;
        }
      }
      return true;
    };
    t.ensureLineNodeDOMCache = function (e) {
      this.ln([e]);
      var t = (n = this.zoneState) === null || n === undefined ? undefined : n.getLine(e);
      var n = t == null ? undefined : t.getNode();
      if (!n) {
        throw new v("ensureLineNodeDOMCache failed: node is null, line: " + e, true, undefined, {
          zoneStateSize: (e = this.zoneState) === null || e === undefined ? undefined : e.length(),
          isLineExist: !!t,
          isNodeNull: !n
        });
      }
      return n;
    };
    t.rerender = function () {
      var e = this.s.getContentState().getZoneState(this.qe);
      if (e) {
        this.hn({
          diffResult: {
            state: e,
            changes: null
          },
          previousState: e
        });
      }
    };
    t.ln = function (e) {
      var t;
      var n;
      var i = this.s.getContentState().getZoneState(this.qe);
      if (i) {
        var o = [];
        e.reduce(function (e, t) {
          var n = i == null ? undefined : i.getLine(t);
          var t = n == null ? undefined : n.getNode();
          if (n && !t) {
            if ((t = o.length ? e[e.length - 1] : null) && t[t.length - 1].state.index === n.index - 1) {
              t.push({
                state: n,
                changes: null
              });
            } else {
              e.push([{
                state: n,
                changes: null
              }]);
            }
          }
          return e;
        }, o);
        try {
          var a = typescriptRuntimeHelpers_1.values(o);
          var l = a.next();
          for (; !l.done; l = a.next()) {
            var u = l.value;
            this.hn({
              diffResult: {
                state: i,
                changes: [{
                  type: diffChangeConstants.ChangeType.LINE_INSERT,
                  retain: u[0].state.index,
                  inserts: u,
                  shouldBeAppliedToDOMTree: false
                }],
                ignoreForceUpdate: true
              },
              previousState: i
            });
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (l && !l.done && (n = a.return)) {
              n.call(a);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
      }
    };
    t.getLineVirtualRect = function (e) {
      g.setEditor(this.s);
      var t = this.s.getContentState().getZoneState(this.qe);
      var n = t == null ? undefined : t.getContainer();
      if (!t || !n) {
        return null;
      }
      var i = t.getLine(e);
      var t = i == null ? undefined : i.getNode();
      if (t && n.contains(t)) {
        return t.getBoundingClientRect();
      } else if ((i = this.placeholderModule.getPlaceholderNode(e, {
        isRequired: true
      })) === null) {
        return null;
      } else {
        t = i.getBoundingClientRect();
        i = n.getBoundingClientRect();
        n = this.Pi.getTop(e);
        e = this.Pi.getHeight(e, e + 1);
        return layoutBoundsUtils.createBounds(t.left, i.top + n, t.width, e);
      }
    };
    t.getRangeVirtualRect = function (e, t, n) {
      g.setEditor(this.s);
      var i = this.s.getContentState().getZoneState(this.qe);
      var r = i == null ? undefined : i.getContainer();
      if (!i || !r) {
        return null;
      }
      var i = e.start.line;
      var e = e.end.line;
      var o = this.getLineVirtualRect(i);
      if (!o) {
        return layoutBoundsUtils.createEmptyBounds();
      }
      if (i !== e) {
        var s = this.Pi.getHeight(i, e + 1);
        return layoutBoundsUtils.createBounds(o.left, o.top, o.width, s);
      }
      e = this.ensureLineNodeDOMCache(i);
      if (r.contains(e)) {
        return t();
      }
      if (n) {
        s = this.Pi.getHeight(i, i + 1);
        return layoutBoundsUtils.createBounds(o.left, o.top, o.width, s);
      }
      var a = null;
      var r = new H(r);
      r.addMeasureRequest(i, e);
      r.finalize(function (e, n) {
        var i = n.getBoundingClientRect();
        var n = t();
        var i = n.left - i.left;
        a = layoutBoundsUtils.createBounds(o.left + i, o.top, n.width, n.height);
      });
      return a;
    };
    t.beforeRendererForceUpdate = function () {
      var e;
      var t;
      var n = this.zoneState;
      if (n) {
        this.ys &&= typescriptRuntimeHelpers_1.assign({}, this.Os.expandingBoundary(this.ys));
        this.gs = this.Xs(this.ys);
        this.Os.clearFollowStatus();
        this.Os.refreshCustomRetentiveLines();
        var i = this.s.selection.getSelection(this.qe);
        this.Os.updateSelectionLines(i, true);
        var o = new Set(typescriptRuntimeHelpers_1.spread(this.gs, this.getRetentiveLines()));
        if (this.Rs) {
          var s = this.Rs;
          var i = s.updateLines;
          var s = s.needForceUnmountLines;
          var l = [];
          try {
            var u = typescriptRuntimeHelpers_1.values(i);
            var h = u.next();
            for (; !h.done; h = u.next()) {
              var c = h.value;
              if (!o.has(c)) {
                l.push(c);
              }
            }
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              if (h && !h.done && (t = u.return)) {
                t.call(u);
              }
            } finally {
              if (e) {
                throw e.error;
              }
            }
          }
          this.Rs.extraForceUpdateLines = l;
          s.forEach(function (e) {
            reactinxDomRenderer.unmountComponents(e);
          });
        }
        if ((s = this.Ls) !== null && s !== undefined) {
          s.refreshAnchorLine(n);
        }
        this.ps = true;
      }
    };
    t.afterRendererForceUpdate = function () {
      this.placeholderModule.removeAll();
      this.Hs();
      this.ps = false;
    };
    t.handleForceRefresh = function (e, t) {
      var n;
      var i;
      var o;
      var s;
      var l = (o = this.zoneState) === null || o === undefined ? undefined : o.getContainer();
      if (this.zoneState && l) {
        t = t || e.lines.map(function (e, t) {
          return t;
        });
        try {
          var u = typescriptRuntimeHelpers_1.values(t);
          var h = u.next();
          for (; !h.done; h = u.next()) {
            var c = h.value;
            var d = e.getLine(c);
            var f = d == null ? undefined : d.getNode();
            if (d && f && !l.contains(f)) {
              reactinxDomRenderer.unmountComponents(d);
              if ((s = this.zoneState.getLine(c)) !== null && s !== undefined) {
                s.setNode(null);
              }
            }
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            if (h && !h.done && (i = u.return)) {
              i.call(u);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      }
    };
    t.Hs = function (e = this.ys) {
      var t;
      var n;
      var i = this.s.getContentState().getZoneState(this.qe);
      if (i && (i = i.lines.length, this.gs.length !== i)) {
        var o = [];
        if (e) {
          e = P(e = [{
            startLine: e.startLine,
            endLine: e.endLine
          }], this.ji.getInvisibleLines());
          o.push.apply(o, typescriptRuntimeHelpers_1.spread(e.map(function (e) {
            return [e.startLine, e.endLine];
          })));
        }
        try {
          var s = typescriptRuntimeHelpers_1.values(this.getRetentiveLines());
          var a = s.next();
          for (; !a.done; a = s.next()) {
            var l = a.value;
            var u = l.index;
            if (this.getLinePosRelativeToContent(u) !== 2 && !this.ji.isInvisible(l)) {
              o.push([u, u]);
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (a && !a.done && (n = s.return)) {
              n.call(s);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        if (o.length) {
          o.sort(function (e, t) {
            return e[0] - t[0];
          });
          o.push([i, i]);
          o.unshift([-1, -1]);
          var h = new m();
          var c = 1;
          for (; c < o.length; c++) {
            var d = o[c];
            var f = o[c - 1];
            if (d[0] - f[1] > 1) {
              h.insert({
                startLine: f[1] + 1,
                endLine: d[0] - 1
              });
            }
          }
          this.placeholderModule.updateState(h);
        } else {
          i = new m().insert({
            startLine: 0,
            endLine: i - 1
          });
          this.placeholderModule.updateState(i);
        }
      }
    };
    t.Ws = function (e, t, n, i) {
      this.placeholderModule.updateState(e);
      return !(i = this.dn(t, this.placeholderModule.getPlaceholderRangeList(), n, i, this.ji.getInvisibleLines())).overlap && (i.gap && this.placeholderModule.updateState(i.fillPlaceholderChange), true);
    };
    t.dn = function (e, t, n, i, o) {
      var s;
      var a;
      var i = i.filter(function (e) {
        return !n || e.startLine < n.startLine || e.startLine > n.endLine;
      });
      if (n) {
        s = n.startLine;
        a = n.endLine;
        t = P(t, o = o.filter(function (e) {
          return s <= (e = e.index) && e <= a;
        }));
      }
      var l = typescriptRuntimeHelpers_1.spread(t, i);
      if (n) {
        l.push(n);
      }
      l.sort(function (e, t) {
        return e.startLine - t.startLine;
      });
      l.unshift({
        startLine: -1,
        endLine: -1
      });
      l.push({
        startLine: e,
        endLine: e
      });
      var u = false;
      var h = false;
      var c = new m();
      var d = 0;
      for (; d < l.length - 1; d++) {
        var f = l[d];
        var v = l[d + 1];
        if (f.endLine + 1 !== v.startLine) {
          if (f.endLine + 1 > v.startLine) {
            u = true;
            break;
          }
          h = true;
          c.insert({
            startLine: f.endLine + 1,
            endLine: v.startLine - 1
          });
        }
      }
      return {
        overlap: u,
        gap: h,
        fillPlaceholderChange: c,
        rangeList: l.slice(1, -1)
      };
    };
    t.$s = function (e) {
      if (!this.zoneState) {
        return true;
      }
      var t = this.dn(this.zoneState.length(), this.placeholderModule.getPlaceholderRangeList(), this.ys, this.getRetentiveLines().map(function (e) {
        return {
          startLine: e.index,
          endLine: e.index
        };
      }), this.ji.getInvisibleLines());
      var n = !t.overlap && !t.gap;
      if (!n) {
        t = new v("unexpected render range list", false, undefined, typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), {
          renderRangeList: t.rangeList,
          renderBoundary: this.ys,
          retentiveLines: this.getRetentiveLines().map(function (e) {
            return e.index;
          }),
          zoneLength: this.zoneState.length()
        }));
        this.s.error({
          message: t.message,
          level: errorHandlerUtil.ErrorLevel.ERROR,
          e: t,
          extra: JSON.stringify(t.extraInfo)
        });
      }
      return n;
    };
    t.Js = function () {
      var e;
      var t;
      var n;
      var i = this;
      if (!this.Ps) {
        var s = (n = this.zoneState) === null || n === undefined ? undefined : n.getContainer();
        if (s) {
          this.Ps = true;
          this.Os.reset();
          this.placeholderModule.removeAll();
          if ((n = this.layoutUpdateController) !== null && n !== undefined) {
            n.destroy();
          }
          this.bs = null;
          this.ps = false;
          this.Rs = null;
          this.Ts();
          try {
            this.ys &&= this.Os.expandingBoundary(this.ys);
            this.gs = this.Xs(this.ys);
            try {
              var l = typescriptRuntimeHelpers_1.values(this.gs);
              var c = l.next();
              for (; !c.done; c = l.next()) {
                var d = c.value;
                var f = d.getNode();
                if (f && typeof f.textContent == "string" && f.textContent.length !== d.length()) {
                  reactinxDomRenderer.unmountComponents(d);
                  d.setNode(null);
                }
              }
            } catch (t) {
              e = {
                error: t
              };
            } finally {
              try {
                if (c && !c.done && (t = l.return)) {
                  t.call(l);
                }
              } finally {
                if (e) {
                  throw e.error;
                }
              }
            }
            this.ln(this.gs.map(function (e) {
              return e.index;
            }));
            var g = this.gs.map(function (e) {
              return e.getNode();
            });
            var p = domEnvManager.getEnvMode();
            domEnvManager.setEnvMode("DOM");
            editorPluginRenderer.wrapElements(this.gs, g, function (e) {
              return i.s.pluginManager.getLineWrapperInfo(e);
            });
            domEnvManager.setEnvMode(p);
            s.textContent = "";
            s.append.apply(s, typescriptRuntimeHelpers_1.spread(g));
            this.Hs();
            if (this.ys) {
              this.Os.addCustomRetentiveLines([typescriptRuntimeHelpers_1.assign({}, this.ys)]);
              this.Ds([typescriptRuntimeHelpers_1.assign({}, this.ys)]);
            }
            var y = this.s.selection.getSelection(this.qe);
            this.handleSelectionChange(y);
            this.Us();
            this.s.selection.updateBrowserSelection(true);
            this.scheduleViewportCheck();
          } catch (e) {
            if (e instanceof v) {
              e.extraInfo.isForceReRender = true;
              this.s.error({
                message: e.message,
                level: e.isFatal ? errorHandlerUtil.ErrorLevel.FATAL : errorHandlerUtil.ErrorLevel.ERROR,
                e: (y = e.originalError) !== null && y !== undefined ? y : e,
                affectingScope: "zone",
                extra: JSON.stringify(e.extraInfo)
              });
            } else if (e instanceof Error) {
              this.s.error({
                message: e.message,
                level: errorHandlerUtil.ErrorLevel.ERROR,
                e: e
              });
            }
          }
          this.Ps = false;
        }
      }
    };
    t.Qs = function (e) {
      var t = false;
      var n = false;
      var i = this.Is;
      var e = e.getBoundingClientRect().width;
      if (i !== null && !N(i, e, 2)) {
        t = true;
        n = i < e;
      }
      this.Is = e;
      return {
        isContainerResized: t,
        isContainerExpanded: n
      };
    };
    e.create = function (t) {
      var n = t.editor;
      var i = t.zoneId;
      var r = t.useIdleModule;
      var o = t.useViewportLockModule;
      if (n.virtualListManager === null) {
        n.virtualListManager = new O(n);
      }
      if (r) {
        n.virtualListManager.registerModule("idleModule", new Y({
          editor: n
        }));
      }
      if (o) {
        n.virtualListManager.registerModule("viewportLockModule", new X());
      }
      var s;
      var a;
      var l = n.virtualListManager.getVirtualListModuleOfZone(i);
      if (!l) {
        s = typeof t.virtualListScroller == "function" ? t.virtualListScroller() : t.virtualListScroller;
        a = typeof t.outerScroller == "function" ? t.outerScroller() : t.outerScroller;
        l = new e(t.zoneId, t.editor, (i = t.defaultLineHeight) !== null && i !== undefined ? i : 22, t.bufferHeight || function () {
          return 0;
        }, t.isLineHeightFixed || function () {
          return false;
        }, n.virtualListManager, s, a ? Array.isArray(a) ? a : [a] : [], (r = r ? n.virtualListManager.getModule("idleModule") : null) !== null && r !== undefined ? r : null, (n = o ? n.virtualListManager.getModule("viewportLockModule") : null) !== null && n !== undefined ? n : null, (n = t.onLayoutUpdate) !== null && n !== undefined ? n : null, (t = t.enableWhenInitial) === null || t === undefined || t);
      }
      return l;
    };
    return e;
  }();
  require.d(exports, {
    VirtualListModule: function () {
      return Q;
    }
  });
}