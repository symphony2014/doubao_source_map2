// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(616138) to 'bear-virtual-layout-styles'
// - Resolved require(286475) to 'empty-module-stub_2'
// - Resolved require(352591) to 'empty-webpack-module'
// - Renamed variable 'eo' to 'isNumberUtil'
// - Resolved require(897814) to 'is-number-util'
// - Renamed variable 'er' to 'moduleReExportWrapper'
// - Resolved require(71973) to 'module-re-export-wrapper'
// - Resolved require(192061) to 'empty-module-stub'
// - Renamed variable 'eV' to 'reactDomEntryWrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Renamed variable 'eK' to 'debounceUtil_1_1'
// - Resolved require(887312) to 'debounce-util_1_1'
// - Renamed variable 'eG' to 'debounceUtilWrapper'
// - Resolved require(213804) to 'debounce-util-wrapper'
// - Renamed variable 'e1' to 'browserEnvDetectionUtil'
// - Resolved require(355358) to 'browser-env-detection-util'
// - Renamed variable 'tt' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'to' to 'deepEqualUtil_1'
// - Resolved require(702050) to 'deep-equal-util_1'
// - Renamed variable 'td' to 'objectPathFilterUtil'
// - Resolved require(213469) to 'object-path-filter-util'
// - Renamed variable 'tu' to 'throttledOmitPathStringify'
// - Resolved require(159496) to 'throttled-omit-path-stringify'
// - Renamed variable 'tW' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Updated imported property 'Z' to 'isNumber' (module 897814)
// - Updated imported property 'Z' to 'wrappedModule' (module 71973)
// - Updated imported property 'Z' to 'debounce' (module 887312)
// - Updated imported property 'Z' to 'createDebounce' (module 213804)
// - Updated imported property 'ZP' to 'browserDetector' (module 355358)
// - Updated imported property 'Z' to 'deepEqual' (module 702050)
// - Updated imported property 'Z' to 'filterObjectByPaths' (module 213469)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'Z' to 'omitPathStringify' (module 159496)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85844.5526ec96.js
         * chunkId: 85844
         * moduleId: 247503
         */
module.exports = function (module, exports, require) {
  require("bear-virtual-layout-styles") /*id: 616138*/;
  require("empty-module-stub_2") /*id: 286475*/;
  var r;
  var n;
  var i;
  var a;
  var l;
  var s;
  var c;
  var d;
  var u;
  var h;
  var p;
  var f;
  var v;
  var y;
  var g;
  var N;
  var T;
  var R;
  var w;
  var m;
  var E;
  var L;
  var b;
  var C;
  var I;
  var S;
  var O;
  var A;
  var D;
  var P;
  var _;
  var k;
  var M;
  var x;
  var V;
  var H;
  var U;
  var F;
  var B;
  var W;
  var z;
  function Y(e) {
    var t = typeof Symbol == "function" && Symbol.iterator;
    var o = t && e[t];
    var r = 0;
    if (o) {
      return o.call(e);
    }
    if (e && typeof e.length == "number") {
      return {
        next: function () {
          if (e && r >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  (L ||= {}).TRACKER_EACH_PAINT = "tracker_each_paint";
  var j = function () {
    function e() {
      this.listeners = new Map();
    }
    e.prototype.removeOnce = function (e) {
      var t = this.listeners.get(e);
      if (t) {
        this.listeners.set(e, t.filter(function (e) {
          return !e.once;
        }));
      }
    };
    e.prototype.on = function (e, t) {
      var r = this.listeners.get(e) ?? [];
      r.push({
        listener: t,
        once: false
      });
      this.listeners.set(e, r);
    };
    e.prototype.once = function (e, t) {
      var r = this.listeners.get(e) ?? [];
      r.push({
        listener: t,
        once: true
      });
      this.listeners.set(e, r);
    };
    e.prototype.off = function (e, t) {
      var o = this.listeners.get(e);
      if (o) {
        this.listeners.set(e, o.filter(function (e) {
          return t !== e.listener;
        }));
      }
    };
    e.prototype.offAll = function (e) {
      this.listeners.delete(e);
    };
    e.prototype.emit = function (e) {
      var t;
      var o;
      var n = [];
      var i = 1;
      for (; i < arguments.length; i++) {
        n[i - 1] = arguments[i];
      }
      var a = this.listeners.get(e) ?? [];
      try {
        var l = Y(a);
        var s = l.next();
        for (; !s.done; s = l.next()) {
          s.value.listener.apply(this, n);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (s && !s.done && (o = l.return)) {
            o.call(l);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      this.removeOnce(e);
    };
    return e;
  }();
  var K = new j();
  function G(e, t) {
    var o = typeof Symbol == "function" && e[Symbol.iterator];
    if (!o) {
      return e;
    }
    var r;
    var n;
    var i = o.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
        a.push(r.value);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (o = i.return)) {
          o.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return a;
  }
  function Z() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e = e.concat(G(arguments[t]));
    }
    return e;
  }
  function J(e, t = {}) {
    var o;
    var r;
    var n = false;
    var i = false;
    var a = t.combineArgsFn;
    var l = t.eachCallFunction;
    var s = t.recursiveCallStrategy;
    var c = s === undefined ? "nextTick" : s;
    function d() {
      var t = [];
      var s = 0;
      for (; s < arguments.length; s++) {
        t[s] = arguments[s];
      }
      if (l) {
        l();
      }
      if (n) {
        if (!i) {
          e.apply(undefined, Z(t));
        }
        return Promise.resolve();
      } else {
        r = typeof a == "function" ? a(r, t) : t;
        if (o) {
          return o;
        } else {
          return o = Promise.resolve().then(function () {
            if (c === "immediate") {
              n = true;
            } else {
              o = undefined;
            }
            try {
              if (!i) {
                e.apply(undefined, Z(r));
              }
            } finally {
              o = undefined;
              n = false;
            }
          });
        }
      }
    }
    d.cancel = function () {
      i = true;
    };
    return d;
  }
  var q = function (e) {
    var t = window.location.search.substring(1).split("&");
    var o = 0;
    for (; o < t.length; o++) {
      var r = t[o].split("=");
      if (r[0] === e) {
        return r[1];
      }
    }
    return null;
  }("isDebug") === "true";
  (function () {
    function e() {
      this.frame1 = undefined;
      this.frame2 = undefined;
    }
    e.prototype.hasRequested = function () {
      return this.frame1 !== undefined || this.frame2 !== undefined;
    };
    e.prototype.request = function () {
      var e = this;
      this.cancel();
      return new Promise(function (t) {
        e.frame1 = window.requestAnimationFrame(function () {
          e.frame1 = undefined;
          e.frame2 = window.requestAnimationFrame(function () {
            e.frame2 = undefined;
            t();
          });
        });
      });
    };
    e.prototype.cancel = function () {
      if (this.frame1 !== undefined) {
        window.cancelAnimationFrame(this.frame1);
        this.frame1 = undefined;
      }
      if (this.frame2 !== undefined) {
        window.cancelAnimationFrame(this.frame2);
        this.frame2 = undefined;
      }
    };
  })();
  (r = b ||= {})[r.IN_TABLE = 23] = "IN_TABLE";
  r[r.DEFAULT = 26] = "DEFAULT";
  (n = C ||= {}).VERTICAL = "vertical";
  n.IGNORE_CHILDREN = "ignore-children";
  n.IGNORE = "ignore";
  n.HORIZONTAL = "horizontal";
  n.TABLE_ROW = "table-row";
  n.PENDING = "pending";
  n.TABLE_CELL = "table-cell";
  (i = I ||= {})[i.AUTO = 1] = "AUTO";
  i[i.SHOULD_RENDER = 2] = "SHOULD_RENDER";
  i[i.SKIPPED = 4] = "SKIPPED";
  (a = S ||= {}).INSERT_CHILD = "INSERT_CHILD";
  a.DELETE_CHILD = "DELETE_CHILD";
  a.MARK_RENDER_DIRTY = "MARK_RENDER_DIRTY";
  a.CLEAR_RENDER_DIRTY = "CLEAR_RENDER_DIRTY";
  a.MARK_LAYOUT_DIRTY = "MARK_LAYOUT_DIRTY";
  a.MARK_MOUNT_DIRTY = "MARK_MOUNT_DIRTY";
  a.CLEAR_MOUNT_DIRTY = "CLEAR_MOUNT_DIRTY";
  a.UPDATE_LAYOUT = "UPDATE_LAYOUT";
  a.UPDATE_LAYOUT_NODE_CONFIG = "UPDATE_LAYOUT_NODE_CONFIG";
  a.UPDATE_LAYOUT_NODE_PARENT_ID = "UPDATE_LAYOUT_NODE_PARENT_ID";
  (l = O ||= {})[l.DEFAULT = 0] = "DEFAULT";
  l[l.PRIORITY = 1] = "PRIORITY";
  l[l.SINGLE = 2] = "SINGLE";
  var Q = {
    shouldRetain: 1,
    ensureLayout: 2,
    isAsync: 4,
    disableLazyIdleRender: 8,
    ignoreMarginCollapse: 16,
    onlyChildrenHeight: 64,
    skipIdleWhenIgnore: 128,
    childrenWithoutRenderUnit: 256,
    disableDescendantRender: 512,
    sticky: 1024,
    cellVisible: 2048,
    forceRenderCell: 4096
  };
  require("empty-webpack-module") /*id: 352591*/;
  function X(e) {
    var t = typeof Symbol == "function" && Symbol.iterator;
    var o = t && e[t];
    var r = 0;
    if (o) {
      return o.call(e);
    }
    if (e && typeof e.length == "number") {
      return {
        next: function () {
          if (e && r >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  var $ = function () {
    function e(e, t) {
      this.context = t;
      this.topToParent = 0;
      this.leftToParent = 0;
      this.distanceToFirstChild = 0;
      this.height = 0;
      this.width = 0;
      this.marginTop = 0;
      this.marginBottom = 0;
      this.marginLeft = 0;
      this.marginRight = 0;
      this.left = 0;
      this.calculateModel = C.VERTICAL;
      this.rareData = null;
      this.configFlags = 0;
      this.defaultLayout = null;
      this.dirtyFlags = 31;
      this.nodeId = e;
    }
    e.prototype.isDirty = function (e) {
      return (this.dirtyFlags & e) != 0;
    };
    e.prototype.setDirty = function (e, t) {
      var o;
      this.dirtyFlags = (o = this.dirtyFlags, t ? o | e : o & ~e);
    };
    e.prototype.hasConfig = function (e) {
      return (this.configFlags & e) != 0;
    };
    e.prototype.setConfig = function (e, t) {
      var o;
      this.configFlags = (o = this.configFlags, t ? o | e : o & ~e);
    };
    e.prototype.getDefaultHeight = function () {
      return this.context.getDefaultHeight();
    };
    e.prototype.handleLayoutConfig = function (e) {
      this.layoutNodeConfig = e;
      if (e) {
        var t = e.delaySyncDefaultLayout;
        this.updateConfig(e);
        if (!t) {
          this.applyDefaultLayout(e);
        }
      }
    };
    e.prototype.clearLayout = function () {
      this.height = 0;
      this.width = 0;
      this.marginTop = 0;
      this.marginBottom = 0;
      this.marginLeft = 0;
      this.marginRight = 0;
      this.topToParent = 0;
      this.left = 0;
    };
    e.prototype.updateConfig = function (e) {
      this.layoutNodeConfig = e;
      var t;
      var o;
      var r = e.delaySyncDefaultLayout;
      var n = e.calculateModel;
      if (r) {
        this.saveDefaultLayout(e);
      }
      if (n !== undefined) {
        this.calculateModel = n;
      }
      var i = e.rowSpan;
      var a = e.colSpan;
      var l = e.defaultWidth;
      if (i !== undefined) {
        et(this).rowSpan = i;
      }
      if (a !== undefined) {
        et(this).colSpan = a;
      }
      if (l !== undefined) {
        et(this).defaultWidth = l;
      }
      var s = this.configFlags;
      try {
        var c = X(Object.keys(e));
        var d = c.next();
        for (; !d.done; d = c.next()) {
          var u;
          var h = d.value;
          var p = Q[h];
          if (p !== undefined) {
            u = s;
            s = e[h] ? u | p : u & ~p;
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (d && !d.done && (o = c.return)) {
            o.call(c);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      this.configFlags = s;
    };
    e.prototype.syncDefaultLayout = function () {
      if (this.defaultLayout) {
        this.applyDefaultLayout(this.defaultLayout);
        this.defaultLayout = null;
      }
    };
    e.prototype.applyDefaultLayout = function (e) {
      if (this.calculateModel === C.IGNORE) {
        this.applyIgnoreLayout();
        return;
      }
      var o = e.defaultHeight;
      var r = e.defaultMarginTop;
      var n = e.defaultMarginBottom;
      var i = e.defaultMarginLeft;
      var a = e.defaultMarginRight;
      var l = e.defaultWidth;
      if (o === undefined) {
        this.height = this.getDefaultHeight();
      } else {
        this.height = o * (this.rareData?.rowSpan || 1);
      }
      if (r !== undefined) {
        this.marginTop = r;
      }
      if (n !== undefined) {
        this.marginBottom = n;
      }
      if (i !== undefined) {
        this.marginLeft = i;
      }
      if (a !== undefined) {
        this.marginRight = a;
      }
      if (l !== undefined) {
        this.width = l;
      }
    };
    e.prototype.applyIgnoreLayout = function () {
      this.height = 0;
      this.distanceToFirstChild = 0;
      this.marginTop = 0;
      this.marginBottom = 0;
    };
    e.prototype.saveDefaultLayout = function (e) {
      var t = e.defaultHeight;
      var o = e.defaultMarginTop;
      var r = e.defaultMarginBottom;
      var n = e.defaultMarginLeft;
      var i = e.defaultMarginRight;
      var a = e.defaultWidth;
      if (this.height === 0) {
        ee(this);
      }
      if (t !== undefined) {
        ee(this).defaultHeight = t;
      }
      if (o !== undefined) {
        ee(this).defaultMarginTop = o;
      }
      if (r !== undefined) {
        ee(this).defaultMarginBottom = r;
      }
      if (n !== undefined) {
        ee(this).defaultMarginLeft = n;
      }
      if (i !== undefined) {
        ee(this).defaultMarginRight = i;
      }
      if (a !== undefined) {
        ee(this).defaultWidth = a;
      }
    };
    return e;
  }();
  function ee(e) {
    e.defaultLayout ||= {};
    return e.defaultLayout;
  }
  function et(e) {
    e.rareData ||= {};
    return e.rareData;
  }
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  function en(e) {
    var t;
    var o = e;
    while (o) {
      if (((t = o.parent) === null || t === undefined ? undefined : t.node.calculateModel) === C.TABLE_ROW) {
        return o;
      }
      o = o.parent;
    }
    return null;
  }
  function ei(e, t) {
    for (var o = t; o;) {
      var r = o.node.nodeId;
      var n = e.viewportMap.get(r);
      if (n) {
        return n;
      }
      o = o.parent;
    }
    return null;
  }
  (s = A ||= {}).HORIZONTAL = "horizontal";
  s.VERTICAL = "vertical";
  function ea(e) {
    var t = typeof Symbol == "function" && Symbol.iterator;
    var o = t && e[t];
    var r = 0;
    if (o) {
      return o.call(e);
    }
    if (e && typeof e.length == "number") {
      return {
        next: function () {
          if (e && r >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function el(e, t) {
    var o = typeof Symbol == "function" && e[Symbol.iterator];
    if (!o) {
      return e;
    }
    var r;
    var n;
    var i = o.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
        a.push(r.value);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (o = i.return)) {
          o.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return a;
  }
  var es = function () {
    function e(e, t) {
      this.reconciler = e;
      this.children = [];
      this.cacheIdleConfig = I.AUTO;
      this.node = new $(t, this);
    }
    Object.defineProperty(e.prototype, "firstChild", {
      get: function () {
        return this.children[0];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "lastChild", {
      get: function () {
        return this.children[this.children.length - 1];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "prevSibling", {
      get: function () {
        var e;
        var t;
        var o = (e = this.parent) === null || e === undefined ? undefined : e.children.indexOf(this);
        if (o != null && o !== -1) {
          if ((t = this.parent) === null || t === undefined) {
            return undefined;
          } else {
            return t.children[o - 1];
          }
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "nextSibling", {
      get: function () {
        var e;
        var t;
        var o = (e = this.parent) === null || e === undefined ? undefined : e.children.indexOf(this);
        if (o != null && o !== -1) {
          if ((t = this.parent) === null || t === undefined) {
            return undefined;
          } else {
            return t.children[o + 1];
          }
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "childCount", {
      get: function () {
        return this.children.length;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "depth", {
      get: function () {
        if (this.parent) {
          return this.parent.depth + 1;
        } else {
          return 0;
        }
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.toJSON = function () {};
    e.prototype.isRenderDisabled = function () {
      if (this.isDirty(16)) {
        this.setDirty(16, false);
        var e = this.parent;
        if (e) {
          this.node.setConfig(8192, e.hasConfig(512) || e.isRenderDisabled());
        } else {
          this.node.setConfig(8192, false);
        }
      }
      return this.hasConfig(8192);
    };
    e.prototype.getDefaultHeight = function () {
      var e;
      if (eR(this) || eT(this)) {
        return b.IN_TABLE;
      } else {
        return ((e = this.parent) === null || e === undefined ? undefined : e.getDefaultHeight()) || b.DEFAULT;
      }
    };
    e.prototype.handleLayoutConfig = function (e) {
      this.node.handleLayoutConfig(e);
      if (e.viewport) {
        this.reconciler.registerViewport(this, e.viewport);
      }
    };
    e.prototype.isDirty = function (e) {
      return this.node.isDirty(e);
    };
    e.prototype.setDirty = function (e, t) {
      this.node.setDirty(e, t);
    };
    e.prototype.hasConfig = function (e) {
      return this.node.hasConfig(e);
    };
    e.prototype.getIdleConfig = function () {
      if (!this.isDirty(8)) {
        return this.cacheIdleConfig;
      }
      this.setDirty(8, false);
      this.cacheIdleConfig = I.AUTO;
      if (this.childCount) {
        try {
          var e;
          var t;
          var o = ea(this.children);
          var r = o.next();
          for (; !r.done; r = o.next()) {
            var n = r.value.getIdleConfig();
            if (n === I.SHOULD_RENDER) {
              this.cacheIdleConfig = n;
              return I.SHOULD_RENDER;
            }
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
      var i = this.reconciler;
      if (i.getCanSkipIdle(this)) {
        this.cacheIdleConfig = I.SKIPPED;
      } else if (!i.getCanLazyIdleRender(this)) {
        this.cacheIdleConfig = I.SHOULD_RENDER;
      }
      return this.cacheIdleConfig;
    };
    e.prototype.getTopToRoot = function () {
      var e;
      return this.node.topToParent + (((e = this.parent) === null || e === undefined ? undefined : e.getTopToRoot()) || 0);
    };
    e.prototype.getLeftToRoot = function () {
      var e = en(this);
      if (e && e.parent) {
        var t = function (e) {
          var t = en(e);
          if (t && t.parent) {
            var o = t.parent;
            var r = 0;
            var n = 0;
            for (; n < o.children.length; n++) {
              var i = o.children[n];
              if (i === t) {
                return r;
              }
              r += i.node.width;
            }
          }
          return null;
        }(e);
        if (isNumberUtil.isNumber(t)) {
          return t;
        } else {
          return 0;
        }
      }
      return 0;
    };
    e.prototype.getDistanceToStart = function (e) {
      if (e === A.HORIZONTAL) {
        return this.getLeftToRoot();
      } else {
        return this.getTopToRoot();
      }
    };
    e.prototype.getNodeWidth = function () {
      var e = en(this);
      if (e) {
        return e.node.width;
      } else {
        return this.node.width;
      }
    };
    e.prototype.getFirstChildMarginTop = function () {
      var e;
      if (this.children.length && this.node.calculateModel !== C.TABLE_ROW) {
        if (this.node.calculateModel === C.HORIZONTAL) {
          return this.children.reduce(function (e, t) {
            return Math.max(e, t.node.marginTop);
          }, 0);
        } else {
          return ((e = this.children.find(function (e) {
            return e.node.calculateModel !== C.IGNORE;
          })) === null || e === undefined ? undefined : e.node.marginTop) || 0;
        }
      } else {
        return 0;
      }
    };
    e.prototype.getLastChildMarginBottom = function () {
      var e;
      if (this.children.length && this.node.calculateModel !== C.TABLE_ROW) {
        if (this.node.calculateModel === C.HORIZONTAL) {
          return this.children.reduce(function (e, t) {
            return Math.max(e, t.node.marginBottom);
          }, 0);
        } else {
          return ((e = moduleReExportWrapper.wrappedModule(this.children, function (e) {
            return e.node.calculateModel !== C.IGNORE;
          })) === null || e === undefined ? undefined : e.node.marginBottom) || 0;
        }
      } else {
        return 0;
      }
    };
    e.prototype.isAboveToNode = function (e) {
      if (!e) {
        return false;
      }
      var t = this.parent;
      var o = e == null ? undefined : e.parent;
      if (t && o && t === o && t.node.calculateModel === C.VERTICAL) {
        var r = t.children.indexOf(this);
        var n = t.children.indexOf(e);
        if (r >= 0 && n >= 0) {
          return r < n;
        }
      }
      return this.getTopToRoot() - e.getTopToRoot() < 0;
    };
    e.prototype.getIsChildOf = function (e) {
      for (var t = this.parent; t;) {
        if (t.node.nodeId === e) {
          return true;
        }
        t = t.parent;
      }
      return false;
    };
    e.prototype.getPreValidChildNode = function (e) {
      if ((e = Math.min(e - 1, this.children.length - 1)) >= 0) {
        return this.children[e];
      } else {
        return undefined;
      }
    };
    e.prototype.getNextValidChildNode = function (e) {
      if ((e = Math.max(e + 1, 0)) < this.children.length) {
        return this.children[e];
      } else {
        return undefined;
      }
    };
    e.prototype.insertChild = function (e, t) {
      if (e === this.children.length) {
        this.children.push(t);
      } else {
        this.children.splice(e, 0, t);
      }
      t.parent = this;
    };
    e.prototype.removeChild = function (e) {
      var t = this.children.splice(e, 1)[0];
      if (t && t.parent === this) {
        t.parent = undefined;
      }
      return t;
    };
    e.prototype.isInBufferRange = function () {
      var e = el(this.reconciler.viewport.calcBufferRange(), 2);
      var t = e[0];
      var o = e[1];
      var r = this.getTopToRoot();
      if (r + this.node.height < t || r > o) {
        return false;
      }
      var n = ei(this.reconciler, this);
      if (n) {
        var i = el(n.calcBufferRange(), 2);
        var a = i[0];
        var l = i[1];
        var s = this.getLeftToRoot();
        if (s + this.node.width < a || s > l) {
          return false;
        }
      }
      return true;
    };
    return e;
  }();
  function ec(e, t) {
    var o = typeof Symbol == "function" && e[Symbol.iterator];
    if (!o) {
      return e;
    }
    var r;
    var n;
    var i = o.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
        a.push(r.value);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (o = i.return)) {
          o.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return a;
  }
  function ed() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e = e.concat(ec(arguments[t]));
    }
    return e;
  }
  function eu(e) {
    var t = typeof Symbol == "function" && Symbol.iterator;
    var o = t && e[t];
    var r = 0;
    if (o) {
      return o.call(e);
    }
    if (e && typeof e.length == "number") {
      return {
        next: function () {
          if (e && r >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function eh(e, t) {
    var o = e.depth;
    var r = e.parent;
    var n = e.node;
    if (r) {
      var i = t[o];
      if (!i) {
        i = new Map();
        t[o] = i;
      }
      var a = r.node.nodeId;
      var l = i.get(a);
      if (!l) {
        l = new Map();
        i.set(a, l);
      }
      l.set(n.nodeId, e);
    }
  }
  function ep(e, t) {
    function o(o) {
      var r = e[o];
      if (r != null) {
        r.forEach(function (e, r) {
          e.forEach(function (e, n) {
            t({
              depth: o,
              nodeId: n,
              node: e,
              parentId: r
            });
          });
        });
      }
    }
    var r = e.length;
    for (; r >= 0; r--) {
      o(r);
    }
  }
  function ef(e, t) {
    for (var o = e.length - 1; o >= 2; o--) {
      var r = e[o];
      if (r != null) {
        r.forEach(function (o) {
          o.forEach(function (o) {
            var r = o.parent;
            if (r && (!t || t(r))) {
              eh(r, e);
            }
          });
        });
      }
    }
  }
  function ev(e, t) {
    var o;
    var r;
    var n;
    var i;
    var a = 0;
    for (; a < e.length; a++) {
      var l = e[a];
      if (l) {
        try {
          o = undefined;
          var s = eu(l.entries());
          var c = s.next();
          for (; !c.done; c = s.next()) {
            var d = ec(c.value, 2);
            var u = d[0];
            var h = d[1];
            try {
              n = undefined;
              var p = eu(h.entries());
              var f = p.next();
              for (; !f.done; f = p.next()) {
                var v = ec(f.value, 2);
                var y = v[0];
                var g = v[1];
                if (t({
                  depth: a,
                  nodeId: y,
                  node: g,
                  parentId: u
                })) {
                  return;
                }
              }
            } catch (e) {
              n = {
                error: e
              };
            } finally {
              try {
                if (f && !f.done && (i = p.return)) {
                  i.call(p);
                }
              } finally {
                if (n) {
                  throw n.error;
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
            if (c && !c.done && (r = s.return)) {
              r.call(s);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
      }
    }
  }
  function ey(e) {
    var t = typeof Symbol == "function" && Symbol.iterator;
    var o = t && e[t];
    var r = 0;
    if (o) {
      return o.call(e);
    }
    if (e && typeof e.length == "number") {
      return {
        next: function () {
          if (e && r >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  var eg = function () {
    function e(e) {
      this.reconciler = e;
      this.modificationMap = new Map();
      this.layoutNodes = new Map();
      this.needSyncDefaultLayoutNodes = new Set();
      this.modificationMap.set(S.INSERT_CHILD, this.insertChild.bind(this));
      this.modificationMap.set(S.DELETE_CHILD, this.deleteChild.bind(this));
      this.modificationMap.set(S.MARK_RENDER_DIRTY, this.markRenderDirty.bind(this));
      this.modificationMap.set(S.CLEAR_RENDER_DIRTY, this.clearRenderDirty.bind(this));
      this.modificationMap.set(S.MARK_LAYOUT_DIRTY, this.markLayoutDirty.bind(this));
      this.modificationMap.set(S.MARK_MOUNT_DIRTY, this.markMountDirty.bind(this));
      this.modificationMap.set(S.CLEAR_MOUNT_DIRTY, this.clearMountDirty.bind(this));
      this.modificationMap.set(S.UPDATE_LAYOUT, this.updateLayout.bind(this));
      this.modificationMap.set(S.UPDATE_LAYOUT_NODE_CONFIG, this.updateLayoutNodeConfig.bind(this));
    }
    e.prototype.hasNeedSyncDefaultLayoutNodes = function () {
      return this.needSyncDefaultLayoutNodes.size > 0;
    };
    e.prototype.getNeedSyncDefaultLayoutNodes = function () {
      return this.needSyncDefaultLayoutNodes;
    };
    e.prototype.isNeedSyncDefaultLayoutNode = function (e) {
      return this.needSyncDefaultLayoutNodes.has(e);
    };
    e.prototype.addNeedSyncDefaultLayoutNode = function (e) {
      return this.needSyncDefaultLayoutNodes.add(e);
    };
    e.prototype.traverseAllDescendants = function (e, t) {
      var o;
      var r;
      var n = e.children;
      try {
        var i = ey(n);
        var a = i.next();
        for (; !a.done; a = i.next()) {
          var l = a.value;
          var s = t(l);
          if (s !== false) {
            this.traverseAllDescendants(l, t);
          }
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          if (a && !a.done && (r = i.return)) {
            r.call(i);
          }
        } finally {
          if (o) {
            throw o.error;
          }
        }
      }
    };
    e.prototype.hasSameParent = function (e, t) {
      return e.parent === t.parent;
    };
    e.prototype.getNode = function (e) {
      return this.layoutNodes.get(e);
    };
    e.prototype.getNodeOrCreateFreeNodeIfNotExisted = function (e, t) {
      var o = this.layoutNodes.get(e);
      o ||= this.createFreeLayoutNode(e, t);
      return o;
    };
    e.prototype.getRootParentNodeByNode = function (e) {
      while (e == null ? undefined : e.parent) {
        e = e.parent;
      }
      return e;
    };
    e.prototype.isExistedInLayoutTree = function (e) {
      return this.getRootParentNodeByNode(e) === this.rootLayoutNode;
    };
    e.prototype.isNodeBetweenRange = function (e, t) {
      if (!this.isExistedInLayoutTree(e)) {
        return false;
      }
      var o = t[0];
      var r = t[1];
      var n = e.getTopToRoot();
      return !(e.node.height + n < o) && !(n > r);
    };
    e.prototype.getChildNodes = function (e) {
      var t = this.layoutNodes.get(e);
      if (t) {
        return t.children;
      } else {
        return [];
      }
    };
    e.prototype.getLayoutInfo = function (e) {
      var t;
      var o = this.getNode(e);
      if (!o) {
        return null;
      }
      var r = o.node;
      var n = {
        width: r.width,
        height: r.height,
        marginTop: r.marginTop,
        marginBottom: r.marginBottom,
        marginLeft: r.marginLeft,
        marginRight: r.marginRight,
        top: o.getTopToRoot(),
        left: r.left
      };
      var i = ei(this.reconciler, o);
      var a = i && this.getNode(i.rootId);
      if (i && a) {
        n.left = o.getLeftToRoot() + a.node.left - (((t = i.virtualScroller) === null || t === undefined ? undefined : t.getScrollHelper().getScrollerRect().left) || 0);
      }
      return n;
    };
    e.prototype.buildLayoutTree = function (e, t) {
      var o = this;
      var r = new Set();
      function n(e, i) {
        var a;
        var l = t.get(e);
        var s = new es(o.reconciler, e);
        o.layoutNodes.set(e, s);
        s.parent = i;
        s.handleLayoutConfig(l);
        r.add(s);
        if ((a = l.childIds) !== null && a !== undefined) {
          a.forEach(function (e, t) {
            s.children[t] = n(e, s);
          });
        }
        o.updateNodeHeightByChildren(s);
        return s;
      }
      var i = n(e);
      this.rootLayoutNode = i;
      i.setDirty(1, false);
      this.resetTopToParent(r);
    };
    e.prototype.cloneTableCellLayoutTree = function (e) {
      var t = this;
      var o = new Set();
      function r(e, n) {
        var i = t.layoutNodes.get(e);
        var a = i.node.layoutNodeConfig;
        a.delaySyncDefaultLayout = false;
        var l = new es(t.reconciler, e);
        if (n) {
          l.parent = n;
        } else {
          l.parent = i.parent;
        }
        l.handleLayoutConfig(a);
        o.add(l);
        i.children.forEach(function (e, t) {
          l.children[t] = r(e.node.nodeId, l);
        });
        t.updateNodeHeightByChildren(l);
        return l;
      }
      var n = r(e);
      this.resetTopToParent(o);
      return n;
    };
    e.prototype.updateNodeHeightByChildren = function (e) {
      var t = e.node;
      var o = e.children;
      var r = t.calculateModel;
      if (r === C.IGNORE) {
        t.width = 0;
        t.height = 0;
        t.marginTop = 0;
        t.marginBottom = 0;
        t.marginLeft = 0;
        t.marginRight = 0;
        t.distanceToFirstChild = 0;
      } else if (r === C.VERTICAL) {
        if (t.hasConfig(64)) {
          t.height = o.reduce(function (e, t) {
            return e + t.node.height;
          }, 0);
        } else {
          t.height += o.reduce(function (e, t) {
            return e + t.node.height;
          }, 0);
        }
        var n = undefined;
        var i = 0;
        for (; i < o.length; i++) {
          var a = o[i];
          if (a.node.height !== 0 || !this.isNeedSyncDefaultLayoutNode(a.node.nodeId)) {
            t.height += Math.max(a.node.marginTop, (n == null ? undefined : n.node.marginBottom) || 0);
            n = a;
          }
        }
        t.height += (n == null ? undefined : n.node.marginBottom) || 0;
      } else if (r === C.HORIZONTAL || r === C.TABLE_ROW) {
        if (t.hasConfig(64)) {
          t.height = o.reduce(function (e, t) {
            return Math.max(e, t.node.height);
          }, 0);
        } else {
          t.height += o.reduce(function (e, t) {
            return Math.max(e, t.node.height);
          }, 0);
        }
      }
    };
    e.prototype.apply = function (e, t) {
      var o;
      var r;
      var n;
      var i = this;
      var a = new Set();
      var l = new Set();
      var s = [];
      try {
        var c = ey(e);
        var d = c.next();
        for (; !d.done; d = c.next()) {
          var u = d.value;
          if ((n = this.modificationMap.get(u.type)) !== null && n !== undefined) {
            n({
              layoutTreeModification: u,
              layoutNodeSet: a,
              deleteNodeSet: l,
              postApplyQueue: s
            });
          }
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          if (d && !d.done && (r = c.return)) {
            r.call(c);
          }
        } finally {
          if (o) {
            throw o.error;
          }
        }
      }
      if (t != null) {
        t.preResetTopToParent(a);
      }
      l.forEach(function (e) {
        if (!i.isExistedInLayoutTree(e)) {
          e.node.clearLayout();
        }
      });
      if (a.size) {
        this.resetTopToParent(a);
      }
      s.forEach(function (e) {
        return e();
      });
    };
    e.prototype.destroy = function () {
      this.layoutNodes = new Map();
    };
    e.prototype.createFreeLayoutNode = function (e, t) {
      var o = new es(this.reconciler, e);
      o.handleLayoutConfig(t);
      this.layoutNodes.set(e, o);
      return o;
    };
    e.prototype.resetTopToParent = function (e) {
      var t;
      var o;
      var r = Array.from(e);
      var n = new Set();
      while (r.length) {
        var i = r.pop();
        if (!n.has(i)) {
          if (i.childCount !== 0) {
            n.add(i);
          }
          if (i.parent && !n.has(i.parent)) {
            r.push(i.parent);
          }
        }
      }
      var a = Array.from(n).sort(function (e, t) {
        return t.depth - e.depth;
      });
      try {
        var l = ey(a);
        var s = l.next();
        for (; !s.done; s = l.next()) {
          var c = s.value;
          var d = c.children;
          var u = d[0];
          var h = 0;
          for (; h < d.length; h++) {
            var i = d[h];
            if (h === 0 || c.node.calculateModel === C.HORIZONTAL || c.node.calculateModel === C.TABLE_ROW) {
              i.node.topToParent = c.node.distanceToFirstChild;
              continue;
            }
            var p = u.node.topToParent;
            var f = u.node.height;
            var v = p + f;
            var y = u.node.marginBottom;
            if (i.node.height === 0 && (i.node.calculateModel === C.IGNORE || this.isNeedSyncDefaultLayoutNode(i.node.nodeId))) {
              i.node.topToParent = v;
              continue;
            }
            var g = i.node.marginTop;
            i.node.topToParent = p + f + Math.max(y, g);
            u = i;
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (s && !s.done && (o = l.return)) {
            o.call(l);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
    };
    e.prototype.syncDefaultLayout = function () {
      var e = this;
      var t = this.needSyncDefaultLayoutNodes;
      this.needSyncDefaultLayoutNodes = new Set();
      var o = [];
      t.forEach(function (t) {
        var r = e.getNode(t);
        if (r && e.isExistedInLayoutTree(r)) {
          eh(r, o);
          e.traverseAllDescendants(r, function (e) {
            eh(e, o);
          });
        }
      });
      var r = new Set();
      ef(o);
      (function (e, t) {
        var o;
        var r;
        var n;
        var i;
        var a = e.length - 1;
        for (; a >= 0; a--) {
          var l = e[a];
          if (l) {
            try {
              o = undefined;
              var s = eu(l.entries());
              var c = s.next();
              for (; !c.done; c = s.next()) {
                var d = ec(c.value, 2);
                var u = d[0];
                var h = d[1];
                try {
                  n = undefined;
                  var p = eu(h.entries());
                  var f = p.next();
                  for (; !f.done; f = p.next()) {
                    var v = ec(f.value, 2);
                    var y = v[0];
                    var g = v[1];
                    if (t({
                      depth: a,
                      nodeId: y,
                      node: g,
                      parentId: u
                    })) {
                      return;
                    }
                  }
                } catch (e) {
                  n = {
                    error: e
                  };
                } finally {
                  try {
                    if (f && !f.done && (i = p.return)) {
                      i.call(p);
                    }
                  } finally {
                    if (n) {
                      throw n.error;
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
                if (c && !c.done && (r = s.return)) {
                  r.call(s);
                }
              } finally {
                if (o) {
                  throw o.error;
                }
              }
            }
          }
        }
      })(o, function (t) {
        var o = t.node;
        o.node.syncDefaultLayout();
        e.updateNodeHeightByChildren(o);
        r.add(o);
      });
      this.resetTopToParent(r);
      this.apply([{
        type: S.MARK_LAYOUT_DIRTY,
        layoutNodes: Array.from(r)
      }]);
      return o;
    };
    e.prototype.updateLayout = function (e) {
      var t = e.layoutTreeModification;
      var o = e.layoutNodeSet;
      if (t.type === S.UPDATE_LAYOUT) {
        var r = t.layoutInfos;
        var n = t.layoutNodes;
        var i = t.updateLayoutWithoutClearDirty;
        n.forEach(function (e, t) {
          var n = r[t];
          var a = e.node;
          var l = new $(a.nodeId, e);
          Object.assign(l, a, n);
          if (!i) {
            l.setDirty(2, false);
          }
          e.node = l;
          o.add(e);
          eN(e);
        });
      }
    };
    e.prototype.updateLayoutNodeConfig = function (e) {
      var t = this;
      var o = e.layoutTreeModification;
      var r = e.postApplyQueue;
      if (o.type === S.UPDATE_LAYOUT_NODE_CONFIG) {
        var n = o.nodeId;
        var i = o.config;
        var a = o.subTreeDirty;
        var l = o.preApply;
        var s = o.postApply;
        if (l) {
          l();
        }
        var c = this.isNeedSyncDefaultLayoutNode(n);
        if (c) {
          i.delaySyncDefaultLayout = true;
        }
        var d = this.getNodeOrCreateFreeNodeIfNotExisted(n, i);
        d.setDirty(2, true);
        d.node.updateConfig(i);
        if (i.viewport) {
          this.reconciler.registerViewport(d, i.viewport);
        }
        eN(d, true);
        var u = [d];
        if (a) {
          d.setDirty(1, true);
          this.traverseAllDescendants(d, function (e) {
            e.setDirty(27, true);
            if (c) {
              t.addNeedSyncDefaultLayoutNode(e.node.nodeId);
            }
            u.push(e);
          });
        }
        if (s) {
          r.push(function () {
            return s(u);
          });
        }
      }
    };
    e.prototype.insertChild = function (e) {
      var t = e.layoutTreeModification;
      var o = e.layoutNodeSet;
      var r = e.postApplyQueue;
      if (t.type === S.INSERT_CHILD) {
        var n = t.parentId;
        var i = t.childId;
        var a = t.index;
        var l = t.config;
        var s = t.parentConfig;
        var c = t.preApply;
        var d = t.postApply;
        if (c) {
          c();
        }
        if (this.isNeedSyncDefaultLayoutNode(i)) {
          l.delaySyncDefaultLayout = true;
        }
        var u = [];
        var h = this.getNodeOrCreateFreeNodeIfNotExisted(n, s);
        var p = this.getNodeOrCreateFreeNodeIfNotExisted(i, l);
        h.insertChild(a, p);
        eN(p, true);
        if (this.isExistedInLayoutTree(h)) {
          p.setDirty(27, true);
          u.push(p);
          o.add(p);
          this.traverseAllDescendants(p, function (e) {
            e.setDirty(27, true);
            u.push(e);
            eN(e, true);
          });
        }
        if (d) {
          r.push(function () {
            return d(u);
          });
        }
      }
    };
    e.prototype.markRenderDirty = function (e) {
      e.layoutTreeModification.layoutNodes.forEach(function (e) {
        e.setDirty(3, true);
      });
    };
    e.prototype.clearRenderDirty = function (e) {
      e.layoutTreeModification.layoutNodes.forEach(function (e) {
        return e.setDirty(1, false);
      });
    };
    e.prototype.markLayoutDirty = function (e) {
      e.layoutTreeModification.layoutNodes.forEach(function (e) {
        return e.setDirty(2, true);
      });
    };
    e.prototype.markMountDirty = function (e) {
      e.layoutTreeModification.layoutNodes.forEach(function (e) {
        return eN(e);
      });
    };
    e.prototype.clearMountDirty = function (e) {
      e.layoutTreeModification.layoutNodes.forEach(function (e) {
        return e.setDirty(4, false);
      });
    };
    e.prototype.deleteChild = function (e) {
      var t = e.layoutTreeModification;
      var o = e.layoutNodeSet;
      var r = e.deleteNodeSet;
      var n = e.postApplyQueue;
      if (t.type === S.DELETE_CHILD) {
        var i = t.parentId;
        var a = t.index;
        var l = t.preApply;
        var s = t.postApply;
        if (l) {
          l();
        }
        var c = this.layoutNodes.get(i);
        var d = c == null ? undefined : c.getPreValidChildNode(a);
        var u = c == null ? undefined : c.getNextValidChildNode(a);
        var h = c == null ? undefined : c.removeChild(a);
        if (h) {
          h.setDirty(27, true);
          this.traverseAllDescendants(h, function (e) {
            e.setDirty(27, true);
          });
        }
        var p = u || d || c || null;
        if (p && (u || d)) {
          o.add(p);
          if (c) {
            eN(c, true);
          }
        } else if (p && c) {
          o.add(p);
          p.setDirty(2, true);
          eN(p, true);
        }
        if (h) {
          r.add(h);
        }
        if (s) {
          n.push(function () {
            return s(h, p);
          });
        }
      }
    };
    return e;
  }();
  function eN(e, t) {
    var o = 4;
    if (t) {
      o |= 8;
    }
    e.setDirty(o, true);
    for (var r = e.parent; r && (!r.isDirty(4) || !!t && !r.isDirty(8));) {
      r.setDirty(o, true);
      r = e.parent;
    }
  }
  function eT(e) {
    return e.node.calculateModel === C.TABLE_ROW;
  }
  function eR(e) {
    var t;
    return e.node.calculateModel === C.TABLE_CELL || ((t = e.parent) === null || t === undefined ? undefined : t.node.calculateModel) === C.TABLE_ROW;
  }
  (c = D ||= {}).INIT = "0";
  c.HAS_REPORT = "1";
  c.HAS_REPORT_LOOP = "2";
  c.HAS_REPORT_DISPLAY_EMPTY = "3";
  function ew(e, t = 0) {
    var o = {};
    function r() {
      if (o.timer) {
        window.clearTimeout(o.timer);
      }
      o.timer = undefined;
    }
    o.timer = window.setTimeout(function () {
      r();
      e();
    }, t);
    return r;
  }
  function em(e, t) {
    var o = e.top;
    var r = e.bottom;
    var n = e.node;
    var i = e.bufferTop;
    var a = i === undefined ? o : i;
    var l = e.bufferBottom;
    var s = l === undefined ? r : l;
    var c = e.depth;
    var d = c === undefined ? 0 : c;
    var u = e.isParentInBuffer;
    var h = e.isForceLayoutForAll;
    var p = n.children;
    var f = 0;
    for (; f < p.length; f += 1) {
      var v = p[f];
      var y = v.node;
      var g = y.height;
      var N = y.topToParent;
      var T = y.calculateModel;
      if (T !== C.IGNORE && !v.isRenderDisabled()) {
        var R = N + g;
        if (T !== C.TABLE_ROW) {
          if (a > R) {
            continue;
          }
          if (s < N) {
            break;
          }
        }
        var w = u;
        if (o <= R && r >= N) {
          t(v, true);
        } else if (a <= R && s >= N) {
          t(v, false);
          w = true;
        }
        var m = T === C.HORIZONTAL;
        if (v.childCount) {
          em({
            node: v,
            depth: d + 1,
            bufferTop: m && !h ? 0 : a - N,
            top: o - N,
            bottom: r - N,
            bufferBottom: m && !h ? g : s - N,
            isParentInBuffer: w,
            isForceLayoutForAll: h
          }, t);
        }
      }
    }
  }
  function eE() {
    return (eE = Object.assign || function (e) {
      var t;
      var o = 1;
      var r = arguments.length;
      for (; o < r; o++) {
        for (var n in t = arguments[o]) {
          if (Object.prototype.hasOwnProperty.call(t, n)) {
            e[n] = t[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function eL(e, t) {
    var o = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        o[r] = e[r];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var n = 0;
      var r = Object.getOwnPropertySymbols(e);
      for (; n < r.length; n++) {
        if (t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n])) {
          o[r[n]] = e[r[n]];
        }
      }
    }
    return o;
  }
  function eb(e, t) {
    var o = typeof Symbol == "function" && e[Symbol.iterator];
    if (!o) {
      return e;
    }
    var r;
    var n;
    var i = o.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
        a.push(r.value);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (o = i.return)) {
          o.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return a;
  }
  function eC() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e = e.concat(eb(arguments[t]));
    }
    return e;
  }
  (d = P ||= {})[d.DID_CHANGE_NODE = 0] = "DID_CHANGE_NODE";
  d[d.SCROLL = 1] = "SCROLL";
  d[d.RESIZE = 2] = "RESIZE";
  d[d.WATCH_PROPS_CHANGE = 3] = "WATCH_PROPS_CHANGE";
  d[d.NOTIFY_HEIGHT_CHANGE = 4] = "NOTIFY_HEIGHT_CHANGE";
  d[d.PAINT = 5] = "PAINT";
  d[d.RENDER = 6] = "RENDER";
  d[d.LAYOUT = 7] = "LAYOUT";
  d[d.MOUNT = 8] = "MOUNT";
  d[d.ENTER_FORCE_LAYOUT_FOR_ALL = 9] = "ENTER_FORCE_LAYOUT_FOR_ALL";
  d[d.QUIT_FORCE_LAYOUT_FOR_ALL = 10] = "QUIT_FORCE_LAYOUT_FOR_ALL";
  d[d.IDLE_RENDER_NODE = 11] = "IDLE_RENDER_NODE";
  d[d.RENDER_NODE_BY_ID = 12] = "RENDER_NODE_BY_ID";
  d[d.RENDER_NODE_BY_ID_SYNC = 13] = "RENDER_NODE_BY_ID_SYNC";
  d[d.VIEWPORT_LOCKER_SET_TEMP_ANCHOR_NODE = 14] = "VIEWPORT_LOCKER_SET_TEMP_ANCHOR_NODE";
  d[d.VIEWPORT_LOCKER_SET_ANCHOR_NODE = 15] = "VIEWPORT_LOCKER_SET_ANCHOR_NODE";
  d[d.VIEWPORT_LOCKER_SET_ANCHOR_NODE_BY_TMP = 16] = "VIEWPORT_LOCKER_SET_ANCHOR_NODE_BY_TMP";
  d[d.VIEWPORT_LOCKER_POST_PAINT = 17] = "VIEWPORT_LOCKER_POST_PAINT";
  d[d.VIEWPORT_LOCKER_LOCK_VIEWPORT = 18] = "VIEWPORT_LOCKER_LOCK_VIEWPORT";
  d[d.VIEWPORT_LOCKER_CALC_SHOULD_LOCK = 19] = "VIEWPORT_LOCKER_CALC_SHOULD_LOCK";
  d[d.PAINT_ERROR = 20] = "PAINT_ERROR";
  d[d.ENSURE_INACTIVE = 21] = "ENSURE_INACTIVE";
  (u = _ ||= {})[u.vertical = 0] = "vertical";
  u[u["ignore-children"] = 1] = "ignore-children";
  u[u.ignore = 2] = "ignore";
  u[u.horizontal = 3] = "horizontal";
  u[u["table-row"] = 4] = "table-row";
  u[u.pending = 5] = "pending";
  (h = k ||= {})[h.insertChild = 0] = "insertChild";
  h[h.deleteChild = 1] = "deleteChild";
  h[h.updateParentId = 2] = "updateParentId";
  h[h.ignore = 3] = "ignore";
  var eI = ["depth", "nodeId", "topToParent", "height", "marginTop", "marginBottom", "blockType", "recordId"];
  function eS(e, t) {
    return function () {
      var o = [];
      var r = 0;
      for (; r < arguments.length; r++) {
        o[r] = arguments[r];
      }
      try {
        return e.apply(undefined, eC(o));
      } catch (e) {
        if (t) {
          t(e);
        }
      }
    };
  }
  (p = M ||= {})[p.LOCAL_OP_AND_WITHOUT_NEED_SYNC_LAYOUT_NODE = 0] = "LOCAL_OP_AND_WITHOUT_NEED_SYNC_LAYOUT_NODE";
  p[p.ANCHOR_NODE_NOT_EXIST = 1] = "ANCHOR_NODE_NOT_EXIST";
  p[p.ANCHOR_NODE_NOT_LAYOUT = 2] = "ANCHOR_NODE_NOT_LAYOUT";
  p[p.ALREADY_ON_TOP = 3] = "ALREADY_ON_TOP";
  p[p.NO_HEIGHT_CHANGE_ABOVE_ANCHOR_NODE = 4] = "NO_HEIGHT_CHANGE_ABOVE_ANCHOR_NODE";
  p[p.NO_DIFF_OR_NO_ROOT_HEIGHT_CHANGE = 5] = "NO_DIFF_OR_NO_ROOT_HEIGHT_CHANGE";
  p[p.DIFF_BELOW_ZERO_POINT_ONE = 6] = "DIFF_BELOW_ZERO_POINT_ONE";
  (f = x ||= {})[f.PAINT = 0] = "PAINT";
  f[f.IDLE_RENDER = 1] = "IDLE_RENDER";
  f[f.PAINT_ERROR = 2] = "PAINT_ERROR";
  var eO = ["viewportTop", "viewportNodes", "viewportNodesInfo"];
  var eA = ["node", "viewportAnchorTop", "isViewportAnchorNodeAlreadyLayout", "scrollTop"];
  var eD = ["depth", "node", "parentId"];
  var eP = ["topToParent", "distanceToFirstChild", "height", "width", "marginTop", "marginBottom", "defaultCalculateModel", "dirtyFlags", "configFlags", "nodeId", "rowSpan"];
  function e_(e, t, o) {
    return t.reduce(function (t, r, n) {
      var i = e[n];
      t[i] = o ? o(r, i, t) : r;
      return t;
    }, {});
  }
  var ek = function () {
    function e(e) {
      this.tracker = e;
    }
    e.prototype.postPaint = function () {
      this.tracker.addOnePaintContext(x.PAINT);
    };
    return e;
  }();
  var eM = function () {
    function e(e) {
      var t = this;
      this.reconciler = e;
      this.tempContexts = [];
      this.eachPaintContexts = [];
      this.whoseTriggerDebouncePaint = [];
      this.maxStoreSize = 10;
      this.reportPoint = 0;
      this.scrollReportPoint = 0;
      this.cacheBlockTypes = new Map();
      this.enable = false;
      this.utils = null;
      this.needCollectEachPaint = false;
      this.errorHandler = function (e) {
        if (t.reconciler.onWarning) {
          t.reconciler.onWarning(e, "tracker");
        }
      };
      this.updateBlockType = eS(function (e, o) {
        var n = t.cacheBlockTypes;
        var i = t.utils?.getBlockType || function (e) {
          return e;
        };
        function a(e) {
          var t = i(e);
          n.set(e, t.toString());
        }
        var l = e.nodeId;
        var s = o.action;
        var c = o.childId;
        switch (s) {
          case "updateObject":
            a(l);
            break;
          case "insertChild":
            if (c) {
              a(c);
            }
        }
      }, this.errorHandler);
      this.addContext = eS(function (e) {
        var o;
        var s;
        var h;
        var p;
        var v = parseInt(Object.keys(e)[0]);
        (o = {})[v] = e[v];
        o.r = Date.now();
        var y = o;
        if (t.lastContext === P.IDLE_RENDER_NODE) {
          if (v === P.RENDER) {
            return;
          }
          if (v !== P.IDLE_RENDER_NODE) {
            t.addOnePaintContext(x.IDLE_RENDER);
          }
        }
        switch (v) {
          case P.DID_CHANGE_NODE:
            var g = e[v];
            if (g) {
              y[v] = [JSON.stringify(g[0]), g[1]];
            }
            break;
          case P.PAINT:
            var N = e[v]?.[0];
            if (N) {
              y[v] = [JSON.stringify(N)];
            }
            break;
          case P.RENDER:
            var T = e[v]?.[0];
            if (T) {
              y[v] = T;
            }
            break;
          case P.LAYOUT:
          case P.MOUNT:
            var R;
            var T = e[v]?.[0];
            var w = e[v]?.[1];
            if (T && w) {
              y[v] = [(R = [], ep(w, function (e) {
                var r = e.depth;
                var n = e.node;
                var i = e.parentId;
                var a = n.node;
                var l = [a.topToParent, a.distanceToFirstChild, a.height, a.width, a.marginTop, a.marginBottom, _[a.calculateModel], a.dirtyFlags, a.configFlags, a.nodeId, a.rareData?.rowSpan ?? 1];
                R.push([r, JSON.stringify(l), i]);
              }), R), T];
            }
            break;
          case P.IDLE_RENDER_NODE:
            var m = e[v]?.[0];
            if (m) {
              y[v] = [(s = m[0]) === null || s === undefined ? undefined : s.node.nodeId];
            }
            break;
          case P.VIEWPORT_LOCKER_SET_TEMP_ANCHOR_NODE:
          case P.VIEWPORT_LOCKER_SET_ANCHOR_NODE:
            var E = e[v];
            if (E) {
              var L = eb(E, 3);
              var b = L[0];
              var C = L[1];
              var I = L[2];
              var S = I == null ? undefined : I.viewportAnchorNode;
              y[v] = [b, C == null ? undefined : C.map(function (e) {
                return e.node.nodeId;
              }), JSON.stringify(S == null ? undefined : S.node)];
            }
            break;
          case P.VIEWPORT_LOCKER_SET_ANCHOR_NODE_BY_TMP:
          case P.VIEWPORT_LOCKER_LOCK_VIEWPORT:
            var E = e[v]?.[0];
            if (E) {
              var S = E.viewportAnchorNode;
              var O = E.viewportAnchorTop;
              var A = E.isViewportAnchorNodeAlreadyLayout;
              var D = E.scrollTop;
              y[v] = [JSON.stringify(S.node), O, A, D];
            }
            break;
          case P.PAINT_ERROR:
            var k = e[v]?.[0];
            if (k) {
              y[v] = [k.message];
            }
            break;
          case P.ENSURE_INACTIVE:
            var k = e[v];
            if (k) {
              y[v] = k;
            }
        }
        if (t.lastContext === v && (v === P.NOTIFY_HEIGHT_CHANGE || v === P.IDLE_RENDER_NODE)) {
          var M = t.tempContexts[t.tempContexts.length - 1];
          try {
            if (M) {
              M[v].push(y[v]?.[0]);
            }
          } catch (e) {
            if ((p = (h = t.reconciler) === null || h === undefined ? undefined : h.onWarning) !== null && p !== undefined) {
              p.call(h, e, "contextAggregationError", {
                ignoreTea: true,
                context: v,
                lastContextInfoLength: M[v]?.length
              });
            }
          }
          return;
        }
        t.lastContext = v;
        t.tempContexts.push(y);
      }, this.errorHandler);
      this.addOnePaintContext = eS(function (e) {
        if (t.tempContexts.length) {
          var o = t.whoseTriggerDebouncePaint.splice(0);
          var r = e !== x.IDLE_RENDER && o.length === 0;
          var n = t.tempContexts.splice(0);
          var i = {
            c: n,
            w: o,
            i: +!!r,
            s: e
          };
          if (q || t.enable) {
            t.eachPaintContexts.push(i);
            if (t.eachPaintContexts.length > t.maxStoreSize) {
              t.eachPaintContexts.shift();
              t.reportPoint = Math.max(t.reportPoint - 1, 0);
              t.scrollReportPoint = Math.max(t.scrollReportPoint - 1, 0);
            }
          }
          if (e === x.PAINT_ERROR) {
            t.eachPaintErrorContext = i;
          }
          if (e === x.PAINT && t.needCollectEachPaint) {
            K.emit(L.TRACKER_EACH_PAINT, n);
          }
        }
      }, this.errorHandler);
      this.getTrackerLog = eS(function (e = true) {
        var o = t.eachPaintContexts.slice(t.reportPoint);
        if (e) {
          t.reportPoint = t.eachPaintContexts.length;
        }
        return JSON.stringify(o);
      }, this.errorHandler);
      this.getScrollTrackerLog = eS(function () {
        var e = eD.findIndex(function (e) {
          return e === "depth";
        });
        var o = t.eachPaintContexts.slice(t.scrollReportPoint).map(function (t) {
          return t.c.map(function (t) {
            if (t[P.LAYOUT] || t[P.MOUNT]) {
              var o = t[P.LAYOUT] || t[P.MOUNT];
              if (o && o[0]) {
                var r = eb(o);
                var n = r[0];
                var i = r.slice(1);
                return eC([n.filter(function (t) {
                  return t[e] === 1;
                })], i);
              }
              return o;
            }
            return t;
          });
        });
        t.scrollReportPoint = t.eachPaintContexts.length;
        return JSON.stringify(o);
      }, this.errorHandler);
      this.getContextActions = eS(function (e) {
        var t = e.match(/(insertChild)|(deleteChild)|(updateParentId)|(ignore)/g);
        var o = t == null ? undefined : t.reduce(function (e, t) {
          var o = k[t];
          e[o] += 1;
          return e;
        }, [0, 0, 0, 0]);
        return {
          insertChild: (o == null ? undefined : o[k.insertChild]) || 0,
          deleteChild: (o == null ? undefined : o[k.deleteChild]) || 0,
          updateParentId: (o == null ? undefined : o[k.updateParentId]) || 0,
          ignore: (o == null ? undefined : o[k.ignore]) || 0
        };
      }, this.errorHandler);
      this.getLastPaintErrorMessage = eS(function () {
        var e;
        var o = (e = t.eachPaintErrorContext) === null || e === undefined ? undefined : e.c.find(function (e) {
          return e[P.PAINT_ERROR];
        });
        if (o) {
          return o[P.PAINT_ERROR][0];
        } else {
          return "";
        }
      }, this.errorHandler);
      this.getCompleteTrackerInfo = eS(function (e) {
        return (e || t.eachPaintContexts).map(function (e) {
          var t = e.c;
          var o = e.s;
          var r = e.i;
          var n = e.w;
          var i = eL(e, ["c", "s", "i", "w"]);
          var a = x[o];
          var l = t.map(function (e) {
            e.r;
            var t;
            var o = parseInt(Object.keys(eL(e, ["r"]))[0]);
            var r = e[o];
            switch (o) {
              case P.RENDER:
                var n = e[o] || [];
                r = {
                  count: n[0]
                };
                break;
              case P.LAYOUT:
              case P.MOUNT:
                var i = e[o];
                var n = i[1] || [];
                var a = i[0].map(function (e) {
                  return e_(eD, e, function (e, t, o) {
                    if (t === "node") {
                      var r = e_(eP, JSON.parse(e), function (e, t) {
                        if (t === "defaultCalculateModel") {
                          return _[e];
                        } else {
                          return e;
                        }
                      });
                      o.nodeId = r == null ? undefined : r.nodeId;
                      return r;
                    }
                    return e;
                  });
                });
                r = eC([o === P.MOUNT ? {
                  count: n[0]
                } : {
                  renderUnitLayoutCount: n[0],
                  calcLayoutInfoCount: n[1]
                }], a);
                break;
              case P.VIEWPORT_LOCKER_SET_TEMP_ANCHOR_NODE:
              case P.VIEWPORT_LOCKER_SET_ANCHOR_NODE:
                var i = e[o];
                r = e_(eO, i);
                break;
              case P.VIEWPORT_LOCKER_SET_ANCHOR_NODE_BY_TMP:
              case P.VIEWPORT_LOCKER_LOCK_VIEWPORT:
                var i = e[o];
                r = e_(eA, i);
                break;
              case P.VIEWPORT_LOCKER_CALC_SHOULD_LOCK:
                var i = e[o];
                var l = eb(i);
                var s = l[0];
                var c = l.slice(1);
                r = eC([M[s]], c);
            }
            (t = {})[P[o]] = r;
            t.recordTime = performance.now();
            return t;
          });
          return eE({
            situation: a,
            contexts: l,
            isTriggerByPrePaint: r,
            whoseTriggerDebouncePaint: n
          }, i);
        });
      }, this.errorHandler);
      this.getDocumentStructsInfo = eS(function () {
        return new Map();
      }, this.errorHandler);
      this.diffLayoutInfo = eS(function (e, t) {
        var o = [];
        var r = [];
        t.forEach(function (t, n) {
          var i = eb(t, 6);
          var a = i[3];
          var l = i[4];
          var s = i[5];
          var c = e.get(n);
          if (c) {
            var d = eb(c, 6);
            var u = d[3];
            var h = d[4];
            var p = d[5];
            var f = u !== a;
            var v = h !== l;
            var y = p !== s;
            if (f || v || y) {
              var g = n + ":";
              if (f) {
                g += "[height " + u + " -> " + a + "]";
              }
              if (v) {
                g += "[marginTop " + h + " -> " + l + "]";
              }
              if (y) {
                g += "[marginBottom " + p + " -> " + s + "]";
              }
              o.push(g);
              r.push(n);
            }
          }
        });
        return {
          layoutChangedNodes: o,
          layoutChangedNodeIds: r
        };
      }, this.errorHandler);
      this.recordTriggerDebouncePaint = eS(function () {
        t.whoseTriggerDebouncePaint.push(t.tempContexts.length - 1);
      }, this.errorHandler);
      this.destroy = eS(function () {
        t.tempContexts = [];
        t.lastContext = undefined;
        t.eachPaintContexts = [];
        t.whoseTriggerDebouncePaint = [];
        t.reportPoint = 0;
        t.trackerPlugin = null;
        t.reconciler = null;
        t.utils = null;
        t.cacheBlockTypes.clear();
        t.cacheBlockTypes = null;
      }, this.errorHandler);
      this.trackerPlugin = new ek(this);
    }
    e.prototype.enableTracker = function () {
      this.enable = true;
    };
    e.prototype.disableTracker = function () {
      this.enable = false;
    };
    e.prototype.injectUtils = function (e) {
      var r = this;
      this.utils = e;
      if (this.utils?.getBlockType) {
        var n = this.utils?.getBlockType || function (e) {
          return e;
        };
        var i = this.reconciler.getLayoutTree();
        i.traverseAllDescendants(i.rootLayoutNode, function (e) {
          var t = e.node.nodeId;
          r.cacheBlockTypes.set(t, n(t).toString());
        });
      }
    };
    e.prototype.bindCollectEvent = function (e, t) {
      if (e === "on") {
        Object.entries(t).forEach(function (e) {
          var t = eb(e, 2);
          var o = t[0];
          var r = t[1];
          K.on(o, r);
        });
      } else {
        Object.entries(t).forEach(function (e) {
          var t = eb(e, 2);
          var o = t[0];
          var r = t[1];
          K.off(o, r);
        });
      }
    };
    e.prototype.setStoreSize = function (e) {
      this.maxStoreSize = e;
    };
    e.prototype.startRecordPaintContextsOnScroll = function () {
      this.needCollectEachPaint = true;
    };
    e.prototype.stopRecordPaintContextsOnScroll = function () {
      this.needCollectEachPaint = false;
    };
    e.prototype.getOriginEachPaintContexts = function () {
      return eC(this.eachPaintContexts);
    };
    e.prototype.recoverDocumentStructs = function (e) {
      if (e) {
        return JSON.parse(e).map(function (e) {
          return e_(eI, e);
        });
      }
    };
    return e;
  }();
  function ex(e, t) {
    for (var o = 0; o < e.children.length; o++) {
      t(e.children[o]);
      ex(e.children[o], t);
    }
  }
  require("empty-module-stub") /*id: 192061*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var eH = function () {
    function e(e) {
      this.config = e;
      this.upRenderDistance = 0;
      this.downRenderDistance = 0;
    }
    e.prototype.find = function (e, t, o = new Set()) {
      return {
        top: this.findRenderTarget(e, "top", o),
        bottom: this.findRenderTarget(e, "bottom", o)
      };
    };
    e.prototype.setRenderDistance = function (e, t) {
      this.upRenderDistance = e;
      this.downRenderDistance = t;
    };
    e.prototype.findRenderTarget = function (e, t, o) {
      var r = this.config;
      var n = r.getRect;
      var i = r.getViewPort();
      var a = i.y;
      var l = i.height;
      var s = a + l;
      var c = Math.max(0, a - this.upRenderDistance);
      var d = a + l + this.downRenderDistance;
      var u = this.upRenderDistance || this.downRenderDistance;
      return this.findNode(e, {
        isFullyInRenderRange: null,
        isIgnored: false
      }, o, function (e) {
        var o = n(e);
        var r = o.height;
        var i = o.y;
        var l = i + r;
        if (t === "top") {
          if (l <= a) {
            return a - l;
          } else if (i < a) {
            return 0;
          } else if (u && i < s) {
            return Infinity;
          } else {
            return a - i;
          }
        } else if (i >= s) {
          return i - s;
        } else if (l > s) {
          return 0;
        } else if (u && a < l) {
          return Infinity;
        } else {
          return l - s;
        }
      }, function (t, o) {
        if (o === null && t !== e) {
          var r = n(t);
          var i = r.height;
          var a = r.y;
          var l = a + i;
          if (l < c || d < a) {
            o = false;
          } else if (c <= a && l <= d) {
            o = true;
          }
        }
        return o;
      });
    };
    e.prototype.findNode = function (e, t, o, r, n) {
      var i = this;
      if (!this.config.getIsRenderDisabled(e)) {
        if (!this.config.getIsRendered(e)) {
          return e;
        }
        var a = this.config.getChildren(e);
        if (a.length) {
          var l = this.upRenderDistance || this.downRenderDistance;
          var s = t.isFullyInRenderRange;
          var c = t.isIgnored;
          var d = a.reduce(function (e, t) {
            if (o.has(t)) {
              return e;
            }
            var a = c;
            var d = s;
            if (l) {
              var u = i.config.getIdleRenderConfig(t);
              if (u === I.SKIPPED || (d = n(t, s), a = c || i.config.getIsIgnored(t), u === I.AUTO && (d === false || a))) {
                return e;
              }
            }
            var h = r(t);
            if (h >= 0) {
              e.push([t, h, {
                isFullyInRenderRange: d,
                isIgnored: a
              }]);
            }
            return e;
          }, []);
          if (d.length !== 0) {
            d.sort(function (e, t) {
              return e[1] - t[1];
            });
            for (var u = 0; u < d.length; u += 1) {
              var h = d[u];
              var p = this.findNode(h[0], h[2], o, r, n);
              if (p) {
                return p;
              }
            }
          }
        }
      }
    };
    return e;
  }();
  function eU(e, t) {
    var o;
    var r;
    var n;
    var i;
    var a = {
      label: 0,
      sent: function () {
        if (n[0] & 1) {
          throw n[1];
        }
        return n[1];
      },
      trys: [],
      ops: []
    };
    i = {
      next: l(0),
      throw: l(1),
      return: l(2)
    };
    if (typeof Symbol == "function") {
      i[Symbol.iterator] = function () {
        return this;
      };
    }
    return i;
    function l(i) {
      return function (l) {
        return function (i) {
          if (o) {
            throw TypeError("Generator is already executing.");
          }
          while (a) {
            try {
              o = 1;
              if (r && (n = i[0] & 2 ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, i[1])).done) {
                return n;
              }
              r = 0;
              if (n) {
                i = [i[0] & 2, n.value];
              }
              switch (i[0]) {
                case 0:
                case 1:
                  n = i;
                  break;
                case 4:
                  a.label++;
                  return {
                    value: i[1],
                    done: false
                  };
                case 5:
                  a.label++;
                  r = i[1];
                  i = [0];
                  continue;
                case 7:
                  i = a.ops.pop();
                  a.trys.pop();
                  continue;
                default:
                  if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                    a = 0;
                    continue;
                  }
                  if (i[0] === 3 && (!n || i[1] > n[0] && i[1] < n[3])) {
                    a.label = i[1];
                    break;
                  }
                  if (i[0] === 6 && a.label < n[1]) {
                    a.label = n[1];
                    n = i;
                    break;
                  }
                  if (n && a.label < n[2]) {
                    a.label = n[2];
                    a.ops.push(i);
                    break;
                  }
                  if (n[2]) {
                    a.ops.pop();
                  }
                  a.trys.pop();
                  continue;
              }
              i = t.call(e, a);
            } catch (e) {
              i = [6, e];
              r = 0;
            } finally {
              o = n = 0;
            }
          }
          if (i[0] & 5) {
            throw i[1];
          }
          return {
            value: i[0] ? i[1] : undefined,
            done: true
          };
        }([i, l]);
      };
    }
  }
  try {
    V = window.requestIdleCallback;
    H = window.cancelIdleCallback;
  } catch (e) {}
  function eF(e) {
    var t = Date.now();
    return setTimeout(function () {
      e({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 8 - (Date.now() - t));
        }
      });
    }, 1);
  }
  if (!V) {
    V = eF;
    H = clearTimeout;
  }
  var eB = function () {
    function e() {
      this.idleCallbackHandle = null;
      this.timeoutHandle = null;
      this.mockIdleCallbackHandle = null;
    }
    e.prototype.request = function (e) {
      var t;
      var o;
      var r;
      var n;
      if (e === undefined) {
        e = 1000;
      }
      t = this;
      o = undefined;
      r = undefined;
      n = function () {
        return eU(this, function (t) {
          switch (t.label) {
            case 0:
              this.cancel();
              t.label = 1;
            case 1:
              t.trys.push([1,, 3, 4]);
              return [4, Promise.race([this.awaitIdle(), this.awaitTimeout(e)])];
            case 2:
              return [2, t.sent()];
            case 3:
              this.cancel();
              return [7];
            case 4:
              return [2];
          }
        });
      };
      return new (r ||= Promise)(function (e, i) {
        function a(e) {
          try {
            s(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function l(e) {
          try {
            s(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(t) {
          var o;
          if (t.done) {
            e(t.value);
          } else {
            ((o = t.value) instanceof r ? o : new r(function (e) {
              e(o);
            })).then(a, l);
          }
        }
        s((n = n.apply(t, o || [])).next());
      });
    };
    e.prototype.awaitIdle = function () {
      var e = this;
      return new Promise(function (t) {
        e.idleCallbackHandle = V(function (o) {
          e.idleCallbackHandle = null;
          t({
            timeRemaining: o.timeRemaining.bind(o)
          });
        });
      });
    };
    e.prototype.awaitTimeout = function (e) {
      var t = this;
      this.cancelTimeouts();
      return new Promise(function (o) {
        t.timeoutHandle = setTimeout(function () {
          t.timeoutHandle = null;
          t.mockIdleCallbackHandle = eF(function (e) {
            t.mockIdleCallbackHandle = null;
            o(e);
          });
        }, e);
      });
    };
    e.prototype.cancel = function () {
      if (this.idleCallbackHandle !== null) {
        H(this.idleCallbackHandle);
        this.idleCallbackHandle = null;
      }
      this.cancelTimeouts();
    };
    e.prototype.cancelTimeouts = function () {
      if (this.timeoutHandle !== null) {
        clearTimeout(this.timeoutHandle);
        this.timeoutHandle = null;
      }
      if (this.mockIdleCallbackHandle !== null) {
        clearTimeout(this.mockIdleCallbackHandle);
        this.mockIdleCallbackHandle = null;
      }
    };
    return e;
  }();
  function eW(e, t, o, r) {
    return new (o ||= Promise)(function (n, i) {
      function a(e) {
        try {
          s(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function l(e) {
        try {
          s(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function s(e) {
        var t;
        if (e.done) {
          n(e.value);
        } else {
          ((t = e.value) instanceof o ? t : new o(function (e) {
            e(t);
          })).then(a, l);
        }
      }
      s((r = r.apply(e, t || [])).next());
    });
  }
  function ez(e, t) {
    var o;
    var r;
    var n;
    var i;
    var a = {
      label: 0,
      sent: function () {
        if (n[0] & 1) {
          throw n[1];
        }
        return n[1];
      },
      trys: [],
      ops: []
    };
    i = {
      next: l(0),
      throw: l(1),
      return: l(2)
    };
    if (typeof Symbol == "function") {
      i[Symbol.iterator] = function () {
        return this;
      };
    }
    return i;
    function l(i) {
      return function (l) {
        return function (i) {
          if (o) {
            throw TypeError("Generator is already executing.");
          }
          while (a) {
            try {
              o = 1;
              if (r && (n = i[0] & 2 ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, i[1])).done) {
                return n;
              }
              r = 0;
              if (n) {
                i = [i[0] & 2, n.value];
              }
              switch (i[0]) {
                case 0:
                case 1:
                  n = i;
                  break;
                case 4:
                  a.label++;
                  return {
                    value: i[1],
                    done: false
                  };
                case 5:
                  a.label++;
                  r = i[1];
                  i = [0];
                  continue;
                case 7:
                  i = a.ops.pop();
                  a.trys.pop();
                  continue;
                default:
                  if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                    a = 0;
                    continue;
                  }
                  if (i[0] === 3 && (!n || i[1] > n[0] && i[1] < n[3])) {
                    a.label = i[1];
                    break;
                  }
                  if (i[0] === 6 && a.label < n[1]) {
                    a.label = n[1];
                    n = i;
                    break;
                  }
                  if (n && a.label < n[2]) {
                    a.label = n[2];
                    a.ops.push(i);
                    break;
                  }
                  if (n[2]) {
                    a.ops.pop();
                  }
                  a.trys.pop();
                  continue;
              }
              i = t.call(e, a);
            } catch (e) {
              i = [6, e];
              r = 0;
            } finally {
              o = n = 0;
            }
          }
          if (i[0] & 5) {
            throw i[1];
          }
          return {
            value: i[0] ? i[1] : undefined,
            done: true
          };
        }([i, l]);
      };
    }
  }
  var eY = function () {
    function e(e, t = function (e) {}, o = 1, r) {
      this.task = e;
      this.errorHandler = t;
      this.minExecutableRemainingTime = o;
      this.scheduler = r;
      this.running = false;
      this.idleMinInterval = 0;
      this.idleMaxInterval = 1000;
      this.idleCallback = new eB();
    }
    e.prototype.start = function () {
      if (!this.running) {
        this.running = true;
        this.loop();
      }
    };
    e.prototype.setIdleMinInterval = function (e) {
      var t = this.idleMinInterval;
      this.idleMinInterval = e;
      if (t !== e && e === 0) {
        this.stop();
        this.start();
      }
    };
    e.prototype.setIdleMaxInterval = function (e) {
      this.idleMaxInterval = e;
    };
    e.prototype.loop = function () {
      return eW(this, undefined, undefined, function () {
        return ez(this, function (e) {
          if (this.externalSchedulerEnable) {
            return [2, this.loopScheduler()];
          } else {
            return [2, this.loopLagacy()];
          }
        });
      });
    };
    Object.defineProperty(e.prototype, "externalSchedulerEnable", {
      get: function () {
        return !!this.scheduler;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.loopLagacy = function () {
      return eW(this, undefined, undefined, function () {
        var e;
        var t;
        var o;
        return ez(this, function (r) {
          switch (r.label) {
            case 0:
              r.trys.push([0,, 6, 7]);
              e = 0;
              r.label = 1;
            case 1:
              if (!this.running) {
                return [3, 5];
              }
              return [4, this.idleCallback.request(this.idleMaxInterval)];
            case 2:
              t = r.sent().timeRemaining;
              if (!(o = this.getTimeoutForNextIdle(e, Date.now()))) {
                return [3, 4];
              }
              return [4, this.idleCallback.awaitTimeout(o)];
            case 3:
              r.sent();
              return [3, 1];
            case 4:
              e = Date.now();
              this.executeWhileRemainingTimeIsEnough(t);
              return [3, 1];
            case 5:
              return [3, 7];
            case 6:
              this.running = false;
              return [7];
            case 7:
              return [2];
          }
        });
      });
    };
    e.prototype.loopScheduler = function () {
      return eW(this, undefined, undefined, function () {
        var e;
        var t;
        var o;
        var r;
        var n = this;
        return ez(this, function (i) {
          switch (i.label) {
            case 0:
              i.trys.push([0,, 6, 7]);
              e = 0;
              t = function () {
                var e = 0;
                return function () {
                  return Math.max(0, (e = e || Date.now() + 2) - Date.now());
                };
              };
              i.label = 1;
            case 1:
              if (!this.running) {
                return [3, 5];
              }
              if (!(o = this.getTimeoutForNextIdle(e, Date.now()))) {
                return [3, 3];
              }
              return [4, this.idleCallback.awaitTimeout(o)];
            case 2:
            case 4:
              i.sent();
              return [3, 1];
            case 3:
              e = Date.now();
              r = this.scheduler.addTask({
                name: "bearVirtual.idleRender",
                action: function () {
                  return n.executeWhileRemainingTimeIsEnough(t());
                }
              });
              this.scheduledTask = r.taskToken;
              return [4, r];
            case 5:
              return [3, 7];
            case 6:
              this.running = false;
              return [7];
            case 7:
              return [2];
          }
        });
      });
    };
    e.prototype.getTimeoutForNextIdle = function (e, t) {
      var o = this.idleMinInterval;
      if (o && e < t && t < e + o) {
        return e + o - t;
      } else {
        return 0;
      }
    };
    e.prototype.executeWhileRemainingTimeIsEnough = function (e) {
      while (this.running && e() > this.minExecutableRemainingTime) {
        try {
          if (this.task(e).done) {
            this.stop();
            break;
          }
        } catch (e) {
          this.errorHandler(e);
        }
      }
    };
    e.prototype.stop = function () {
      var e;
      this.running = false;
      this.idleCallback.cancel();
      if (this.externalSchedulerEnable) {
        if ((e = this.scheduler) !== null && e !== undefined) {
          e.cancelTask(this.scheduledTask);
        }
      }
    };
    return e;
  }();
  var ej = function () {
    function e(e) {
      var t = this;
      var o = e.minExecutableRemainingTime;
      var r = o === undefined ? 1 : o;
      var n = e.errorHandler;
      var i = e.render;
      var a = e.root;
      var l = e.finderConfig;
      var s = e.scheduler;
      this.disabled = false;
      this.renderMode = "init";
      this.idleRenderOptions = null;
      this.returnNormalRenderModeTimeout = null;
      this.handleVisibilityChange = function () {
        if (document.visibilityState === "visible") {
          t.start();
        } else {
          t.stop();
        }
      };
      this.run = function (e) {
        var o;
        var r;
        var n;
        var i;
        var a;
        var l;
        var s;
        var c;
        var d;
        var u = true;
        var h = new Set();
        try {
          while (e() > t.minExecutableRemainingTime) {
            var p = t.finder.find(t.root, u, h);
            if (!p.bottom && !p.top) {
              if ((r = (o = t.finder).clearRenderState) !== null && r !== undefined) {
                r.call(o);
              }
              return {
                done: true
              };
            }
            u = false;
            var f = t.getRenderTargetByStrategy(p);
            if (f) {
              t.render(f);
              if ((i = (n = t.finder).updateRenderState) !== null && i !== undefined) {
                i.call(n, f);
              }
              h.add(f);
            }
          }
        } catch (e) {
          if ((l = (a = t.finder).clearRenderState) !== null && l !== undefined) {
            l.call(a);
          }
          if ((s = t.errorHandler) !== null && s !== undefined) {
            s.call(t, e);
          }
          return {
            done: true
          };
        }
        if ((d = (c = t.finder).clearRenderState) !== null && d !== undefined) {
          d.call(c);
        }
        return {
          done: false
        };
      };
      this.root = a;
      this.render = i;
      this.errorHandler = n;
      this.finderConfig = l;
      this.minExecutableRemainingTime = r;
      this.worker = new eY(this.run, n, r, s);
      this.finder = new eH(l);
      this.bindEvents();
    }
    e.prototype.bindEvents = function () {
      document.addEventListener("visibilitychange", this.handleVisibilityChange);
    };
    e.prototype.unbindEvents = function () {
      document.removeEventListener("visibilitychange", this.handleVisibilityChange);
    };
    e.prototype.isRenderRangeEnabled = function () {
      return !!this.idleRenderOptions?.normalRenderDistance;
    };
    e.prototype.updateIdleRenderOptions = function (e) {
      this.idleRenderOptions = e;
    };
    e.prototype.enterNormalRenderMode = function () {
      if (this.renderMode !== "normal" && this.idleRenderOptions?.normalRenderDistance) {
        var t = this.idleRenderOptions;
        var o = t.normalRenderDistance;
        var r = t.normalMinInterval;
        this.renderMode = "normal";
        this.finder.setRenderDistance(o, o);
        this.worker.setIdleMaxInterval(1000);
        this.worker.setIdleMinInterval(r);
        this.cancelReturnNormalRenderMode();
      }
    };
    e.prototype.enterFastRenderMode = function (e) {
      if (this.renderMode !== "fast" && this.idleRenderOptions?.normalRenderDistance) {
        var o = this.idleRenderOptions;
        var r = o.normalRenderDistance;
        var n = o.fastRenderDistance;
        var i = o.fastMaxInterval;
        var a = o.fastRenderDuration;
        this.renderMode = "fast";
        var l = e ? n : r;
        var s = e ? r : n;
        this.finder.setRenderDistance(l, s);
        this.worker.setIdleMaxInterval(i);
        this.worker.setIdleMinInterval(0);
        this.returnNormalRenderModeAfter(a);
      }
    };
    e.prototype.returnNormalRenderModeAfter = function (e) {
      var t = this;
      this.cancelReturnNormalRenderMode();
      this.returnNormalRenderModeTimeout = window.setTimeout(function () {
        t.returnNormalRenderModeTimeout = null;
        t.enterNormalRenderMode();
      }, e);
    };
    e.prototype.cancelReturnNormalRenderMode = function () {
      if (this.returnNormalRenderModeTimeout !== null) {
        clearTimeout(this.returnNormalRenderModeTimeout);
        this.returnNormalRenderModeTimeout = null;
      }
    };
    e.prototype.disable = function () {
      this.stop();
      this.disabled = true;
    };
    e.prototype.enable = function () {
      this.disabled = false;
      this.start();
    };
    e.prototype.stop = function () {
      this.worker.stop();
    };
    e.prototype.start = function () {
      if (!this.disabled) {
        this.worker.start();
      }
    };
    e.prototype.getRenderTargetByStrategy = function (e) {
      var t = e.top;
      var o = e.bottom;
      if (t) {
        if (o) {
          if (this.strategy === "nearest") {
            if (this.getDistanceToViewport(t) < this.getDistanceToViewport(o)) {
              return t;
            } else {
              return o;
            }
          } else {
            return t;
          }
        } else {
          return t;
        }
      } else {
        return o;
      }
    };
    e.prototype.getDistanceToViewport = function (e) {
      var t = this.finderConfig;
      var o = t.getViewPort;
      var r = t.getRect(e);
      var n = r.y;
      var i = n + r.height;
      var a = o();
      var l = a.height;
      var s = a.y;
      var c = l + s;
      if (i < s) {
        return s - i;
      } else if (n > c) {
        return n - c;
      } else {
        return 0;
      }
    };
    e.prototype.destroy = function () {
      this.unbindEvents();
      this.cancelReturnNormalRenderMode();
      this.worker.stop();
    };
    return e;
  }();
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var eZ = function () {
    function e(e) {
      this.props = e;
      this.targetNodeId = null;
    }
    e.prototype.enable = function (e) {
      this.targetNodeId = e;
      this.props.reconciler.pluginManager.addPluginForNextPaint(this);
    };
    e.prototype.postCalcViewport = function (e) {
      if (this.targetNodeId) {
        var o = this.props.reconciler;
        var r = o.getLayoutTree();
        var n = r.getNode(this.targetNodeId);
        if (n && r.isExistedInLayoutTree(n)) {
          var i = o.viewport.viewportData;
          var a = 0;
          var l = ei(o, n)?.viewportData;
          if (l) {
            var s = n.getLeftToRoot();
            a = l.left;
            l.left = s;
          }
          var c = n.getTopToRoot();
          var d = i.top;
          i.top = c;
          var u = o.calculateViewportActivation();
          i.top = d;
          if (l) {
            l.left = a;
          }
          if (e.isFirstTime) {
            eh(n, e.needRecalculateNodes);
          }
          u.activeNodes.forEach(function (t) {
            var o = r.getNode(t);
            if (o.isDirty(2)) {
              eh(o, e.needRecalculateNodes);
            }
            e.activeNodes.add(t);
            e.noSliceMountNodes.add(t);
            eh(o, e.needMountNodes);
          });
        }
      }
    };
    e.prototype.postPaint = function () {
      if (this.targetNodeId) {
        this.props.reconciler.pluginManager.addPluginForNextPaint(this);
      }
    };
    e.prototype.disable = function () {
      if (this.targetNodeId) {
        this.targetNodeId = null;
        this.props.reconciler.pluginManager.removePluginForNextPaint(this);
      }
    };
    return e;
  }();
  function eJ(e) {
    var t = e.start;
    var o = e.size;
    var r = e.bufferPixel;
    if (e.isForceLayoutForAll) {
      return [-Infinity, Infinity];
    } else {
      return [Math.max(t - r, -r), t + o + r];
    }
  }
  (v = U ||= {})[v.VIEWPORT_LOCK = 0] = "VIEWPORT_LOCK";
  v[v.COMMON = 1] = "COMMON";
  (y = F ||= {})[y.ENABLED_AUTO_UPDATE_SCROLL_TOP = 0] = "ENABLED_AUTO_UPDATE_SCROLL_TOP";
  y[y.DISABLED_AUTO_UPDATE_SCROLL_TOP = 1] = "DISABLED_AUTO_UPDATE_SCROLL_TOP";
  y[y.DISABLED_AUTO_UPDATE_SCROLL_TOP_EXCEPT_ANCHOR_LOCK = 2] = "DISABLED_AUTO_UPDATE_SCROLL_TOP_EXCEPT_ANCHOR_LOCK";
  var eq = function () {
    function e(e, t) {
      var o = this;
      this.onStart = e;
      this.onStop = t;
      this.timer = null;
      this.active = false;
      this.stop = function () {
        if (o.active) {
          o.active = false;
          if (o.timer !== null) {
            clearTimeout(o.timer);
            o.timer = null;
          }
          o.onStop();
        }
      };
    }
    e.prototype.start = function (e) {
      if (this.active) {
        this.stop();
      }
      this.active = true;
      this.timer = setTimeout(this.stop, e);
      this.onStart();
    };
    return e;
  }();
  function eQ(e, t, o, r) {
    return new (o ||= Promise)(function (n, i) {
      function a(e) {
        try {
          s(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function l(e) {
        try {
          s(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function s(e) {
        var t;
        if (e.done) {
          n(e.value);
        } else {
          ((t = e.value) instanceof o ? t : new o(function (e) {
            e(t);
          })).then(a, l);
        }
      }
      s((r = r.apply(e, t || [])).next());
    });
  }
  function eX(e, t) {
    var o;
    var r;
    var n;
    var i;
    var a = {
      label: 0,
      sent: function () {
        if (n[0] & 1) {
          throw n[1];
        }
        return n[1];
      },
      trys: [],
      ops: []
    };
    i = {
      next: l(0),
      throw: l(1),
      return: l(2)
    };
    if (typeof Symbol == "function") {
      i[Symbol.iterator] = function () {
        return this;
      };
    }
    return i;
    function l(i) {
      return function (l) {
        return function (i) {
          if (o) {
            throw TypeError("Generator is already executing.");
          }
          while (a) {
            try {
              o = 1;
              if (r && (n = i[0] & 2 ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, i[1])).done) {
                return n;
              }
              r = 0;
              if (n) {
                i = [i[0] & 2, n.value];
              }
              switch (i[0]) {
                case 0:
                case 1:
                  n = i;
                  break;
                case 4:
                  a.label++;
                  return {
                    value: i[1],
                    done: false
                  };
                case 5:
                  a.label++;
                  r = i[1];
                  i = [0];
                  continue;
                case 7:
                  i = a.ops.pop();
                  a.trys.pop();
                  continue;
                default:
                  if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                    a = 0;
                    continue;
                  }
                  if (i[0] === 3 && (!n || i[1] > n[0] && i[1] < n[3])) {
                    a.label = i[1];
                    break;
                  }
                  if (i[0] === 6 && a.label < n[1]) {
                    a.label = n[1];
                    n = i;
                    break;
                  }
                  if (n && a.label < n[2]) {
                    a.label = n[2];
                    a.ops.push(i);
                    break;
                  }
                  if (n[2]) {
                    a.ops.pop();
                  }
                  a.trys.pop();
                  continue;
              }
              i = t.call(e, a);
            } catch (e) {
              i = [6, e];
              r = 0;
            } finally {
              o = n = 0;
            }
          }
          if (i[0] & 5) {
            throw i[1];
          }
          return {
            value: i[0] ? i[1] : undefined,
            done: true
          };
        }([i, l]);
      };
    }
  }
  var e$ = {
    scrollInterval: 0
  };
  var e0 = function () {
    function e(e, t) {
      var o = this;
      var r = t === undefined ? e$ : t;
      var n = r.scrollInterval;
      var i = n === undefined ? 0 : n;
      var a = r.doNotUpdateViewportInScrolling;
      this.reconciler = e;
      this.allowSetScrollTopForAnchorLock = false;
      this.scrolling = false;
      this.disableHandleScroll = false;
      this.isDestroyed = false;
      this.rect = {
        top: 0,
        height: 0,
        left: 0,
        width: 0
      };
      this.onScrollStart = function () {};
      this.onScrollEnd = function () {};
      this.onSetScrollTop = function (e) {};
      this.cachedContentAboveRootHeight = null;
      this.scrollToNodePlugin = new eZ({
        reconciler: this.reconciler
      });
      this.widthResizing = false;
      this.getViewportHelper = function () {
        return {
          getScrollTop: o.getScrollTop,
          setScrollTop: o.setScrollTop,
          getViewportHeight: o.getViewportHeight
        };
      };
      this.getViewportHeight = function () {
        if (o.scroller instanceof Window) {
          return o.scroller.innerHeight;
        } else {
          return o.scroller.offsetHeight;
        }
      };
      this.getScrollTop = function () {
        return (o.scroller instanceof Window ? window.scrollY : o.scroller.scrollTop) - o.getContentAboveRootHeight();
      };
      this.getContentAboveRootHeight = function () {
        if (o.cachedContentAboveRootHeight === null) {
          var e = o.scroller instanceof Window ? window.scrollY : o.scroller.scrollTop;
          var t = o.getContentTopToScrollerTop();
          o.cachedContentAboveRootHeight = e - t;
        }
        return o.cachedContentAboveRootHeight;
      };
      this.setScrollTop = function (e, t = {
        force: false,
        updateViewport: true,
        from: U.COMMON
      }) {
        if (!o.isDestroyed) {
          var r = o.reconciler;
          var n = t.force;
          var i = t.updateViewport;
          var a = t.from;
          if ((!o.reconciler.enableForceSetScrollTop || !n) && o.isScrolling() && !o.widthResizing) {
            var l = o.reconciler.viewportLockBehaviorWhenScrolling;
            if (l === F.DISABLED_AUTO_UPDATE_SCROLL_TOP || l === F.DISABLED_AUTO_UPDATE_SCROLL_TOP_EXCEPT_ANCHOR_LOCK && !o.allowSetScrollTopForAnchorLock && (!r.isUserAnchorLocking() || !r.fg.clearAnchorWhenNotInViewport)) {
              return;
            }
          }
          o.clearContentOffsetTopCache();
          var s = Number((Math.round((e + o.getContentAboveRootHeight()) * 2) / 2).toFixed(1));
          if (o.scroller instanceof Window) {
            o.scroller.scrollTo({
              top: s,
              left: 0,
              behavior: "auto"
            });
          } else {
            o.scroller.scrollTop = s;
          }
          o.onSetScrollTop({
            scrollTop: s,
            from: a
          });
          o.updateRect();
          if (!r.isInScrollPainting) {
            if (r.enableScrollNodeAnchor) {
              if (i) {
                o.updateViewport();
              }
            } else {
              o.updateViewport();
            }
          }
        }
      };
      this.handleBinding = function (e) {
        if (e === "on") {
          o.scroller.addEventListener("scroll", o.handleScroll);
          return;
        }
        o.scroller.removeEventListener("scroll", o.handleScroll);
      };
      this.debounceScrollEnd = debounceUtil_1_1.debounce(function (e = false) {
        o.scrolling = false;
        if (e) {
          o.updateViewport(true);
        }
        o.onScrollEnd();
      }, 300);
      this.handleScroll = function () {
        if (!o.scrolling) {
          o.onScrollStart();
        }
        o.scrolling = true;
        o.debounceScrollEnd(o.options.doNotUpdateViewportInScrolling);
        if (!o.options.doNotUpdateViewportInScrolling) {
          if (o.options.scrollInterval > 0) {
            o.throttleUpdateViewport();
          } else {
            o.updateViewport();
          }
        }
      };
      this.isScrolling = function () {
        return o.scrolling;
      };
      this.disableHandleScrollTimeout = null;
      this.resetDisableHandleScrollTimeout = function () {
        if (o.disableHandleScrollTimeout) {
          clearTimeout(o.disableHandleScrollTimeout);
        }
        o.disableHandleScrollTimeout = setTimeout(function () {
          o.disableHandleScroll = false;
        }, 5000);
      };
      this.withoutHandleScrolling = function (e) {
        return eQ(o, undefined, undefined, function () {
          return eX(this, function (t) {
            switch (t.label) {
              case 0:
                this.disableHandleScroll = true;
                this.resetDisableHandleScrollTimeout();
                t.label = 1;
              case 1:
                t.trys.push([1,, 3, 4]);
                return [4, e()];
              case 2:
                t.sent();
                return [3, 4];
              case 3:
                this.disableHandleScroll = false;
                this.scrollToNodePlugin.disable();
                return [7];
              case 4:
                this.updateRect();
                return [4, this.reconciler.debouncePaint()];
              case 5:
                t.sent();
                return [2];
            }
          });
        });
      };
      this.scrollToSelection = function (e, t) {
        return eQ(o, undefined, undefined, function () {
          var o;
          var r = this;
          return eX(this, function (n) {
            switch (n.label) {
              case 0:
                this.clearViewportLockAnchorWorkers();
                this.reconciler.updateViewportLockAnchorNode(undefined);
                this.reconciler.tracker.addContext(((o = {})[P.SCROLL] = [e], o));
                return [4, this.withoutHandleScrolling(function () {
                  return eQ(r, undefined, undefined, function () {
                    var o;
                    var r;
                    return eX(this, function (n) {
                      switch (n.label) {
                        case 0:
                          if (!(o = this.reconciler.getLayoutTree().getNode(e)) || !this.reconciler.getLayoutTree().isExistedInLayoutTree(o)) {
                            return [2];
                          }
                          this.reconciler.lockHeightPlugin.unlockAncestorHeight(o);
                          if (this.reconciler.getActiveNodes().has(e)) {
                            return [3, 2];
                          }
                          this.scrollToNodePlugin.enable(e);
                          return [4, this.reconciler.debouncePaint({
                            disableSlice: true
                          })];
                        case 1:
                          n.sent();
                          n.label = 2;
                        case 2:
                          r = o.getTopToRoot();
                          if (!t) {
                            return [3, 4];
                          }
                          return [4, t(r, this.getContentAboveRootHeight())];
                        case 3:
                          n.sent();
                          return [3, 5];
                        case 4:
                          this.defaultScrollIntoView(e);
                          this.updateViewportLockAnchorNode(e);
                          n.label = 5;
                        case 5:
                          return [2];
                      }
                    });
                  });
                })];
              case 1:
                n.sent();
                return [2];
            }
          });
        });
      };
      this.updateViewportLockAnchorNodeTimer = null;
      this.updateViewportLockAnchorNode = function (e, t, r) {
        if (!o.reconciler.enableScrollNodeAnchor) {
          if (t) {
            t();
          }
          return;
        }
        o.reconciler.updateViewportNodes();
        var n = o.reconciler.getLayoutTree().getNode(e);
        if (!n) {
          if (t) {
            t();
          }
          return;
        }
        var i = o.reconciler.fg;
        if (r == null) {
          r = i.useNoLayoutAnchorLock || i.useLongDefaultAnchorLockTime ? 20000 : 5000;
        }
        o.clearViewportLockAnchorWorkers();
        if (!i.clearAnchorWhenNotInViewport) {
          o.updateViewportLockAnchorNodeTimer = setTimeout(function () {
            o.reconciler.updateViewportLockAnchorNode(undefined);
            o.clearViewportLockAnchorWorkers();
          }, r);
        }
        if (o.reconciler.viewportLockBehaviorWhenScrolling === F.DISABLED_AUTO_UPDATE_SCROLL_TOP_EXCEPT_ANCHOR_LOCK) {
          o.userScrollIntentionDetector.start(r);
        }
        if (t) {
          t();
        }
        o.reconciler.updateViewportLockAnchorNode(n);
      };
      this.debounceWidthResizeEnd = debounceUtil_1_1.debounce(function () {
        o.widthResizing = false;
      }, 300);
      this.options = {
        scrollInterval: i,
        doNotUpdateViewportInScrolling: a !== undefined && a
      };
      this.throttleUpdateViewport = debounceUtilWrapper.createDebounce(this.updateViewport.bind(this), i);
      this.userScrollIntentionDetector = new eq(function () {
        o.allowSetScrollTopForAnchorLock = true;
      }, function () {
        o.allowSetScrollTopForAnchorLock = false;
      });
    }
    Object.defineProperty(e.prototype, "rootId", {
      get: function () {
        return this.reconciler.getLayoutTree().rootLayoutNode.node.nodeId;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "rootElement", {
      get: function () {
        return this.reconciler.getRenderUnit(this.rootId).wrapper;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "viewportData", {
      get: function () {
        return this.rect;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.calcBufferRange = function (e) {
      var t = e === undefined ? this.viewportData : e;
      return eJ({
        start: t.top,
        size: t.height,
        bufferPixel: this.bufferPixel,
        isForceLayoutForAll: this.reconciler.isForceLayoutForAll
      });
    };
    Object.defineProperty(e.prototype, "bufferPixel", {
      get: function () {
        return this.reconciler.bufferPixel;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.getRect = function () {
      return {
        offset: this.rect.top,
        size: this.rect.height
      };
    };
    Object.defineProperty(e.prototype, "tracker", {
      get: function () {
        return this.reconciler.tracker;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.updateOptions = function (e) {
      Object.assign(this.options, e);
      if (e.scrollInterval !== undefined) {
        this.throttleUpdateViewport.cancel();
        this.throttleUpdateViewport = debounceUtilWrapper.createDebounce(this.updateViewport.bind(this), e.scrollInterval);
      }
    };
    e.prototype.updateRect = function () {
      this.rect.top = this.getScrollTop();
      this.rect.height = this.getViewportHeight();
    };
    e.prototype.clearContentOffsetTopCache = function () {
      this.cachedContentAboveRootHeight = null;
    };
    e.prototype.getContentTopToScrollerTop = function () {
      return (this.scroller instanceof Window ? 0 : this.scroller.getBoundingClientRect().top) - this.rootElement.getBoundingClientRect().top;
    };
    e.prototype.updateViewportSync = function () {
      this.updateViewport();
    };
    e.prototype.updateViewport = function (e = false) {
      if (this.scroller) {
        this.tracker.addContext(((t = {})[P.SCROLL] = [], t));
        if (!this.disableHandleScroll) {
          this.clearContentOffsetTopCache();
          var t;
          var o = this.rect;
          this.updateRect();
          this.reconciler.updateViewport({
            prevRect: o,
            currRect: this.rect,
            isSyncPaint: e
          });
        }
      }
    };
    e.prototype.defaultScrollIntoView = function (e) {
      var t = this.reconciler.getLayoutTree().getNode(e);
      if (!!t && !this.reconciler.getViewportNodes().find(function (e) {
        return t.node.nodeId === e;
      }) && (e !== this.rootId || !(this.getContentTopToScrollerTop() < 0))) {
        var o = Math.max(t.getTopToRoot() - this.getViewportHeight() / 4);
        this.setScrollTop(o, {
          updateViewport: false
        });
      }
    };
    e.prototype.init = function (e, t) {
      var o = t.onScrollEnd;
      var r = t.onScrollStart;
      var n = t.onSetScrollTop;
      this.scroller = e;
      this.onScrollStart = r;
      this.onScrollEnd = o;
      if (n) {
        this.onSetScrollTop = n;
      }
      (function (e) {
        try {
          if (e instanceof Window) {
            document.documentElement.style.overflowAnchor = "none";
          } else {
            e.style.overflowAnchor = "none";
          }
        } catch (e) {}
      })(this.scroller);
      this.handleBinding("on");
      this.updateViewport();
    };
    e.prototype.destroy = function () {
      this.isDestroyed = true;
      this.clearViewportLockAnchorWorkers();
      if (this.disableHandleScrollTimeout) {
        clearTimeout(this.disableHandleScrollTimeout);
      }
      this.throttleUpdateViewport.cancel();
      this.debounceScrollEnd.cancel();
      this.debounceWidthResizeEnd.cancel();
      this.handleBinding("off");
    };
    e.prototype.clearViewportLockAnchorWorkers = function () {
      if (this.updateViewportLockAnchorNodeTimer) {
        clearTimeout(this.updateViewportLockAnchorNodeTimer);
      }
      this.updateViewportLockAnchorNodeTimer = null;
      this.userScrollIntentionDetector.stop();
    };
    e.prototype.handleWidthResize = function () {
      this.widthResizing = true;
      this.debounceWidthResizeEnd();
    };
    return e;
  }();
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var e2 = {
    display: "block",
    position: "absolute",
    width: "100%",
    top: -10000,
    left: -10000,
    minHeight: "auto",
    pointerEvents: "none"
  };
  var e3 = function () {
    function e(e) {
      this.reconciler = e;
      this.host = null;
    }
    e.prototype.attach = function () {
      var e = this.reconciler;
      var t = e.getLayoutTree().rootLayoutNode.node.nodeId;
      var o = e.getRenderUnit(t);
      if (!o.props.isRoot) {
        throw Error("props.isRoot of rootRenderUnit should be set as true");
      }
      var r = o.getPreRendererHostElement();
      if (!r) {
        throw Error("preRenderer host element not found from rootRenderUnit");
      }
      this.host = r;
    };
    e.prototype.append = function (e) {
      var t;
      var o = this;
      var r = document.createDocumentFragment();
      e.forEach(function (e) {
        var t = e.node;
        var n = o.reconciler.cacheLines.get(t.nodeId);
        if (n) {
          r.appendChild(n);
        }
      });
      if ((t = this.host) !== null && t !== undefined) {
        t.appendChild(r);
      }
    };
    e.prototype.clear = function () {
      while (this.host && this.host.firstChild) {
        this.host.removeChild(this.host.firstChild);
      }
    };
    e.prototype.calculateLayoutInfos = function (e) {
      var t = this.reconciler;
      var o = t.domApi;
      var r = o.getBoundingClientRect;
      var n = o.getClientHeight;
      var i = o.getComputedStyle;
      function a(e, o, n) {
        var i;
        var a = r(o).top;
        var l = e;
        var s = r(l);
        if (s.width === 0 && s.height === 0) {
          return 0;
        }
        if (((i = n.children[0]) === null || i === undefined ? undefined : i.node.calculateModel) === C.TABLE_ROW && n.hasConfig(1024) && n.children[1] && n.children[1].node.nodeId) {
          var c = n.children[1];
          var d = t.getVirtualCacheLine(c.node.nodeId) || undefined;
          if (n.children[1].node.nodeId && d) {
            return r(d).top - a - s.height;
          }
        }
        while (l && s.width === 0 && s.height === 0 && s.top === 0 && s.left === 0) {
          if (n.node.calculateModel !== C.TABLE_ROW || !(l = l.nextElementSibling)) {
            return 0;
          }
          s = r(l);
        }
        return s.top - a;
      }
      var l = {};
      e.forEach(function (e) {
        var o;
        var s = e.element;
        var c = e.node;
        var d = e.firstChildElement;
        var u = e.shouldSkip;
        var h = c.node;
        var p = h.nodeId;
        var f = h.calculateModel;
        if (u) {
          var v = c.node;
          var y = v.height;
          var g = v.width;
          var N = v.left;
          var T = v.distanceToFirstChild;
          var R = v.marginBottom;
          var w = v.marginTop;
          var m = v.marginLeft;
          var E = v.marginRight;
          l[p] = {
            marginTop: w,
            marginBottom: R,
            marginLeft: m,
            marginRight: E,
            height: y,
            width: g,
            left: N,
            distanceToFirstChild: T
          };
          return;
        }
        if (c.parent && c.parent.hasConfig(256)) {
          s = t.getVirtualCacheLine(c.node.nodeId);
        }
        var L = {
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          height: 0,
          width: 0,
          left: 0,
          distanceToFirstChild: 0
        };
        l[p] = L;
        if (f !== C.IGNORE) {
          if (!s) {
            if ((o = t.onWarning) !== null && o !== undefined) {
              o.call(t, Error("element is undefined, nodeId"), "PreRenderer", {
                nodeId: p,
                disableConsoleLog: true
              });
            }
            return;
          }
          if (browserEnvDetectionUtil.browserDetector.isIOS) {
            L.height = n(s);
          }
          var b = i(s);
          if (d && s) {
            L.distanceToFirstChild = a(d, s, c);
          }
          var I = b.marginTop;
          var S = b.marginBottom;
          var O = c.hasConfig(16);
          Object.assign(L, {
            marginTop: L.distanceToFirstChild || O ? I : Math.max(I, c.getFirstChildMarginTop()),
            marginBottom: O ? S : Math.max(S, c.getLastChildMarginBottom()),
            marginLeft: b.marginLeft,
            marginRight: b.marginRight,
            height: b.height,
            width: b.width,
            left: r(s).left
          });
        }
      });
      return l;
    };
    return e;
  }();
  function e4(e, t) {
    var o = typeof Symbol == "function" && e[Symbol.iterator];
    if (!o) {
      return e;
    }
    var r;
    var n;
    var i = o.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
        a.push(r.value);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (o = i.return)) {
          o.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return a;
  }
  function e6() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e = e.concat(e4(arguments[t]));
    }
    return e;
  }
  function e5(e) {
    var t = typeof Symbol == "function" && Symbol.iterator;
    var o = t && e[t];
    var r = 0;
    if (o) {
      return o.call(e);
    }
    if (e && typeof e.length == "number") {
      return {
        next: function () {
          if (e && r >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  var e7 = function () {
    function e(e) {
      this.layoutTree = e;
      this.pluginsForNextPaint = new Set();
      this.pluginsForThisPaint = new Set();
      this.plugins = [];
    }
    e.prototype.addPlugin = function (e) {
      var t;
      if (!Array.isArray(e)) {
        e = [e];
      }
      (t = this.plugins).push.apply(t, e6(e));
    };
    e.prototype.addPluginForNextPaint = function (e) {
      this.pluginsForNextPaint.add(e);
    };
    e.prototype.removePluginForNextPaint = function (e) {
      this.pluginsForNextPaint.delete(e);
    };
    e.prototype.call = function (e, t) {
      this.plugins.forEach(function (o) {
        var r;
        if ((r = o[e]) !== null && r !== undefined) {
          r.call(o, t);
        }
      });
    };
    e.prototype.prePaint = function () {
      this.enablePluginsForThisPaint();
      this.call("prePaint");
    };
    e.prototype.enablePluginsForThisPaint = function () {
      var e = this;
      if (this.pluginsForNextPaint.size > 0) {
        this.pluginsForNextPaint.forEach(function (t) {
          e.plugins.push(t);
          e.pluginsForThisPaint.add(t);
        });
        this.pluginsForNextPaint.clear();
      }
    };
    e.prototype.getNodesThatStayOnDomWhenLayout = function (e) {
      var t;
      var o;
      var r;
      var n;
      var i = new Set();
      try {
        var a = e5(this.plugins);
        var l = a.next();
        for (; !l.done; l = a.next()) {
          var s = l.value;
          if (s.getNodesThatStayOnDomWhenLayout) {
            try {
              r = undefined;
              var c = e5(s.getNodesThatStayOnDomWhenLayout(e));
              var d = c.next();
              for (; !d.done; d = c.next()) {
                var u = d.value;
                i.add(u);
              }
            } catch (e) {
              r = {
                error: e
              };
            } finally {
              try {
                if (d && !d.done && (n = c.return)) {
                  n.call(c);
                }
              } finally {
                if (r) {
                  throw r.error;
                }
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
          if (l && !l.done && (o = a.return)) {
            o.call(a);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return function (e, t) {
        var o;
        var r;
        var n = new Set();
        var i = new Set();
        try {
          var a = e5(e);
          var l = a.next();
          for (; !l.done; l = a.next()) {
            var s = l.value;
            var c = t.getNode(s);
            if (c) {
              while (c && !n.has(c.node.nodeId)) {
                n.add(c.node.nodeId);
                if (c.depth === 1) {
                  i.add(c.node.nodeId);
                  break;
                }
                c = c.parent;
              }
            }
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            if (l && !l.done && (r = a.return)) {
              r.call(a);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
        return i;
      }(i, this.layoutTree);
    };
    e.prototype.postPaint = function () {
      this.call("postPaint");
      this.clearPluginsForThisPaint();
    };
    e.prototype.clearPluginsForThisPaint = function () {
      var e = this;
      if (this.pluginsForThisPaint.size > 0) {
        this.plugins = this.plugins.filter(function (t) {
          return !e.pluginsForThisPaint.has(t);
        });
        this.pluginsForThisPaint.clear();
      }
    };
    return e;
  }();
  function e8(e) {
    var t = typeof Symbol == "function" && Symbol.iterator;
    var o = t && e[t];
    var r = 0;
    if (o) {
      return o.call(e);
    }
    if (e && typeof e.length == "number") {
      return {
        next: function () {
          if (e && r >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  var e9 = function () {
    function e(e, t, o) {
      this.reconciler = e;
      this.viewportData = t;
      this.extraDirtyRange = o;
      this.layoutTree = this.reconciler.getLayoutTree();
    }
    e.prototype.postCalcViewport = function (e) {
      if (e.isFirstTime && this.calcShouldLayoutExtraRange(e)) {
        var t = this.viewportData.top;
        var o = this.layoutTree.rootLayoutNode;
        em({
          isForceLayoutForAll: this.reconciler.isForceLayoutForAll,
          node: o,
          top: t,
          bottom: t,
          bufferTop: Math.max(t - this.extraDirtyRange, 0),
          bufferBottom: t,
          depth: 1
        }, function (t) {
          if (t.isDirty(2)) {
            eh(t, e.needRecalculateNodes);
          }
        });
      }
    };
    e.prototype.calcShouldLayoutExtraRange = function (e) {
      var t;
      var o;
      try {
        var r = e8(e.activeNodes);
        var n = r.next();
        for (; !n.done; n = r.next()) {
          var i = n.value;
          if (!e.prevActiveNodes.has(i) && this.layoutTree.getNode(i).isDirty(2)) {
            return true;
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (n && !n.done && (o = r.return)) {
            o.call(r);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return false;
    };
    return e;
  }();
  (g = B ||= {})[g.DID_CHANGE_NODE = 0] = "DID_CHANGE_NODE";
  g[g.DEFAULT = 1] = "DEFAULT";
  var te = function () {
    function e(e) {
      this.layoutTree = e;
      this.layoutDirtyNodeMap = new Map();
    }
    e.prototype.addNode = function (e, t = B.DEFAULT) {
      var o = this.layoutDirtyNodeMap.get(t) || new Set();
      o.add(e);
      this.layoutDirtyNodeMap.set(t, o);
    };
    e.prototype.deleteNode = function (e, t = B.DEFAULT) {
      var o = this.layoutDirtyNodeMap.get(t) || new Set();
      o.delete(e);
      this.layoutDirtyNodeMap.set(t, o);
    };
    e.prototype.deleteNodeByNodeId = function (e) {
      this.layoutDirtyNodeMap.forEach(function (t) {
        t.delete(e);
      });
    };
    e.prototype.postCalcViewport = function (e) {
      var t = this;
      if (e.isFirstTime) {
        this.layoutDirtyNodeMap.forEach(function (o) {
          o.forEach(function (o) {
            var r = t.layoutTree.getNode(o);
            if (r && t.layoutTree.isExistedInLayoutTree(r)) {
              eh(r, e.needRecalculateNodes);
            }
          });
        });
        if (!e.fromSliceCheck) {
          this.layoutDirtyNodeMap.clear();
        }
      }
    };
    return e;
  }();
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  N = function (e, t) {
    return (N = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var o in t) {
        if (t.hasOwnProperty(o)) {
          e[o] = t[o];
        }
      }
    })(e, t);
  };
  function tr(e, t) {
    function o() {
      this.constructor = e;
    }
    N(e, t);
    e.prototype = t === null ? Object.create(t) : (o.prototype = t.prototype, new o());
  }
  function tn() {
    return (tn = Object.assign || function (e) {
      var t;
      var o = 1;
      var r = arguments.length;
      for (; o < r; o++) {
        for (var n in t = arguments[o]) {
          if (Object.prototype.hasOwnProperty.call(t, n)) {
            e[n] = t[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function ti(e, t) {
    var o = typeof Symbol == "function" && e[Symbol.iterator];
    if (!o) {
      return e;
    }
    var r;
    var n;
    var i = o.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
        a.push(r.value);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (o = i.return)) {
          o.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return a;
  }
  function ta() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e = e.concat(ti(arguments[t]));
    }
    return e;
  }
  var tl = "bear-virtual-renderUnit-placeholder";
  var ts = function (e) {
    function t(t) {
      var r = e.call(this, t) || this;
      r.preRendererHostElementRef = reactCoreLibraryReexport.createRef();
      r.mountNodeInfos = new Map();
      r.placeholderInfo = [];
      r.renderChild = function (e) {
        var t = r.reuseCacheRenderView(e);
        var o = r.props.childContainerTag;
        var n = t || r.cacheLines.get(e) || document.createElement(o === undefined ? "div" : o);
        r.cacheLines.set(e, n);
        var i = {};
        var a = r.propsRenderChild(e, {
          current: n
        }, i);
        var l = i.className;
        var s = i.style;
        var c = i.attributes;
        if (l) {
          n.className = l;
        }
        if (s) {
          Object.keys(s).forEach(function (e) {
            n.style[e] = s[e];
          });
        }
        if (c) {
          Object.keys(c).forEach(function (e) {
            n.setAttribute(e, c[e]);
          });
        }
        reactDomEntryWrapper.render(a, n);
        if (t) {
          r.notifyReuseViewRenderFinish(e);
        }
      };
      r.renderChildSync = function (e) {
        var t = r.layoutTree.getNode(e);
        if (!t || t.node.calculateModel === C.IGNORE) {
          return null;
        }
        var o = r.props.childContainerTag;
        var n = reactCoreLibraryReexport.createRef();
        var i = {};
        var a = r.propsRenderChild(e, n, i);
        var l = i.className;
        var s = i.style;
        var c = i.attributes;
        if (o) {
          return reactCoreLibraryReexport.createElement(o, tn({
            className: l,
            style: s
          }, c), a);
        } else {
          return a;
        }
      };
      r.layout = function (e) {
        if (r.wrapper !== null) {
          if (r.isTableCellWrapper) {
            r.wrapper.removeAttribute("style");
          }
          var t = new Map();
          r.mountNodeInfos.forEach(function (e, o) {
            if (r.cacheLines.has(o) && e.layoutNode.node.calculateModel !== C.IGNORE) {
              t.set(o, e);
            }
          });
          e.forEach(function (e, o) {
            var n = r.cacheLines.get(o);
            if (n && !t.has(o)) {
              t.set(o, {
                layoutNode: e,
                mountElement: n
              });
            }
          });
          r.doUpdate(t);
        }
      };
      r.mount = function (e) {
        if (r.wrapper !== null) {
          if (r.isTableCellWrapper) {
            r.wrapper.removeAttribute("style");
          }
          var t = new Map();
          e.forEach(function (e, o) {
            t.set(o, {
              layoutNode: e,
              mountElement: r.cacheLines.get(o)
            });
          });
          r.doUpdate(t);
        }
      };
      r.componentDidMount = function () {
        r.reconciler.registerRenderUnit(r.props.id, r);
      };
      r.componentWillUnmount = function () {
        var e = r.props.id;
        r.reconciler.unregisterRenderUnit(e);
        r.reconciler.removeViewportVisibilityObserve(r.placeholderInfo.map(function (e) {
          return e.placeholder;
        }));
        r.removeCachedRenderUnit(e);
        if (r.reconciler.fg.enableVirtualMemoryOptimize) {
          r.wrapper.innerHTML = "";
        }
      };
      r.setWrapperRef = function (e) {
        r.wrapperElement = e;
      };
      r.propsRenderChild = t.renderChild;
      r.currentNode = r.layoutTree.getNode(r.props.id);
      r.parentNode = r.currentNode?.parent;
      return r;
    }
    tr(t, e);
    Object.defineProperty(t.prototype, "reconciler", {
      get: function () {
        return this.props.reconciler;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "layoutTree", {
      get: function () {
        return this.props.reconciler.getLayoutTree();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "cacheLines", {
      get: function () {
        return this.reconciler.cacheLines;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "renderLineCacheStrategy", {
      get: function () {
        return this.reconciler.renderLineCacheStrategy;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "childLayoutNodes", {
      get: function () {
        return this.layoutTree.getChildNodes(this.props.id);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "isTableCellWrapper", {
      get: function () {
        return this.parentNode && eT(this.parentNode);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "isHorizontal", {
      get: function () {
        var e;
        return ((e = this.currentNode) === null || e === undefined ? undefined : e.node.calculateModel) === C.HORIZONTAL;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.createPlaceholder = function () {
      var e = this.props;
      var t = e.childContainerTag;
      var o = e.id;
      var r = document.createElement(t === undefined ? "div" : t);
      var n = document.createElement("span");
      r.appendChild(n);
      r.dataset.parentId = "" + o;
      r.className = tl;
      this.reconciler.addViewportVisibilityObserve([r]);
      return r;
    };
    t.prototype.updatePlaceholderStyle = function (e, t) {
      var o = e.placeholder;
      var r = t.width;
      var n = t.height;
      var i = t.marginTop;
      var a = t.marginBottom;
      var l = t.marginLeft;
      var s = t.marginRight;
      var c = t.visible;
      o.style.height = n + "px";
      o.style.marginTop = i + "px";
      o.style.marginBottom = a + "px";
      if (this.reconciler.enablePlaceholderHorizontalStyle) {
        if (this.isHorizontal) {
          o.style.width = r + "px";
          o.style.marginLeft = l + "px";
          o.style.marginRight = s + "px";
        } else {
          o.style.width = "";
          o.style.marginLeft = "";
          o.style.marginRight = "";
        }
      }
      o.style.display = c ? "" : "none";
      e.style = t;
    };
    t.prototype.findVisibleRange = function (e) {
      var t = e[0];
      var o = e[1];
      var r = this.childLayoutNodes;
      var n = null;
      var i = null;
      var a = t;
      for (; a <= o; a++) {
        if (r[a].node.calculateModel !== C.IGNORE) {
          if (n === null) {
            n = a;
          }
          i = a;
        }
      }
      if (n !== null && i !== null) {
        return [n, i];
      } else {
        return null;
      }
    };
    t.prototype.getPlaceholderStyle = function (e, t) {
      var r = e[0];
      var n = e[1];
      var i = this.childLayoutNodes;
      var a = i[r];
      var l = i[n];
      var s = l.node.topToParent - a.node.topToParent + l.node.height;
      var c = a.node;
      var d = c.marginTop;
      var u = c.marginLeft;
      var h = l.node;
      var p = h.marginBottom;
      var f = h.marginRight;
      var v = a.node.rareData?.defaultWidth;
      if (this.isHorizontal) {
        var y = i.slice(r, n + 1);
        var g = y[0];
        var N = 0;
        v = y.reduce(function (e, t) {
          e = N + e + t.node.width;
          N = Math.max(g.node.marginRight, t.node.marginLeft);
          g = t;
          return e;
        }, 0);
      }
      return this.reconciler.domApi.getPlaceholderStyle({
        height: s,
        marginTop: d,
        marginBottom: p,
        marginLeft: u,
        marginRight: f,
        width: v,
        visible: t
      }, this);
    };
    t.prototype.getPlaceholderInfo = function (e, t) {
      var o;
      var r = this.findVisibleRange(t);
      if (r) {
        t = r;
      }
      var n = this.getPlaceholderStyle(t, !!r);
      if (!this.placeholderInfo[e]) {
        var i = {
          style: n,
          range: t,
          placeholder: this.createPlaceholder()
        };
        this.updatePlaceholderStyle(i, n);
        this.placeholderInfo[e] = i;
        return i;
      }
      var a = this.placeholderInfo[e];
      if ((o = a.style).height !== n.height || o.marginTop !== n.marginTop || o.marginBottom !== n.marginBottom || o.marginLeft !== n.marginLeft || o.marginRight !== n.marginRight || o.width !== n.width || o.visible !== n.visible) {
        this.updatePlaceholderStyle(a, n);
      }
      a.range = t;
      return a;
    };
    t.prototype.doUpdate = function (e) {
      var t;
      var o;
      var r = this;
      var n = this.childLayoutNodes;
      var i = -1;
      var a = 0;
      var l = n.reduce(function (t, o, n) {
        var l = o.node.nodeId;
        if (e.has(l)) {
          if (i !== -1) {
            var s = r.getPlaceholderInfo(a, [i, n - 1]);
            t.push({
              element: s.placeholder,
              isPlaceholder: true
            });
            a++;
          }
          var c = r.cacheLines.get(l);
          if (c) {
            t.push({
              element: c,
              nodeId: l
            });
          } else {
            throw Error("Node " + l + " doesn't exist in cache lines");
          }
          i = -1;
        } else if (i === -1) {
          i = n;
        }
        return t;
      }, []);
      if (i !== -1) {
        var s = this.getPlaceholderInfo(a, [i, n.length - 1]);
        l.push({
          element: s.placeholder,
          isPlaceholder: true
        });
        a++;
      }
      this.mountNodeInfos.forEach(function (t, o) {
        var n = t.mountElement;
        var i = r.cacheLines.get(o);
        var a = n === i;
        if (!e.has(o) || !a) {
          if (n && n.parentElement === r.wrapper) {
            r.wrapper.removeChild(n);
            r.reconciler.onRemoveNode(n, o);
          }
          t.mountElement = i;
        }
      });
      for (var c = 0; c < this.placeholderInfo.length; c++) {
        var d = this.placeholderInfo[c];
        var u = d.placeholder;
        var h = d.range;
        var p = h[0];
        var f = h[1];
        var v = this.reconciler.cacheLines.get((t = n[p - 1]) === null || t === undefined ? undefined : t.node.nodeId) || null;
        var y = this.reconciler.cacheLines.get((o = n[f + 1]) === null || o === undefined ? undefined : o.node.nodeId) || null;
        var g = c >= a || u.previousElementSibling !== v && u.nextElementSibling !== y;
        if (u.parentElement && g) {
          u.parentElement.removeChild(u);
        }
      }
      var N = this.wrapper.firstElementChild;
      l.forEach(function (e) {
        var t = e.element;
        var o = e.isPlaceholder;
        var n = e.nodeId;
        if (N !== t) {
          r.wrapper.insertBefore(t, N);
          if (!o && n !== undefined) {
            r.reconciler.onInsertNode(t, n);
          }
        }
        N = t.nextElementSibling;
      });
      this.mountNodeInfos = e;
    };
    t.prototype.shouldComponentUpdate = function (e) {
      if (!deepEqualUtil_1.deepEqual(this.props.watchProps, e.watchProps)) {
        this.propsRenderChild = e.renderChild;
        var t = new Set();
        var o = this.props.watchProps;
        var r = e.watchProps;
        Object.keys(o).forEach(function (e) {
          return o[e] !== r[e] && t.add(e);
        });
        Object.keys(r).forEach(function (e) {
          return o[e] !== r[e] && t.add(e);
        });
        this.reconciler.handleWatchPropsChange(this.props.id, ta(t));
      }
      if (this.props.className !== e.className) {
        var n = this.calculateClassNames();
        this.wrapper.className = n.wrapper;
        var i = this.getPreRendererHostElement();
        if (i) {
          i.className = n.preRenderer;
        }
      }
      return false;
    };
    t.prototype.reuseCacheRenderView = function (e) {
      var t;
      var o;
      var r;
      var n = (t = this.renderLineCacheStrategy) === null || t === undefined ? undefined : t.get(e);
      if (!n) {
        return n;
      }
      this.unMountCacheViewIfNeed(e);
      var i = n.renderView;
      var a = n.renderUnit;
      if (i) {
        r = i;
        this.cacheLines.set(e, i);
      }
      if (a) {
        this.reconciler.getRenderUnits().set(e, a);
      }
      if ((o = this.renderLineCacheStrategy) !== null && o !== undefined) {
        o.delete(e);
      }
      return r;
    };
    t.prototype.unMountCacheViewIfNeed = function (e) {
      var t;
      var o = this.renderLineCacheStrategy.get(e);
      if (o) {
        var r = o.renderView;
        var n = o.renderUnit;
        var i = o.isHaveChildren;
        var a = this.layoutTree.getNode(e);
        var l = a == null ? undefined : a.childCount;
        if (this.cacheLines.has(e) || !i && l && !this.reconciler.getRenderUnits().has(e) && !n) {
          if ((t = this.renderLineCacheStrategy) !== null && t !== undefined) {
            t.delete(e);
          }
          if (r) {
            reactDomEntryWrapper.unmountComponentAtNode(r);
          }
        }
      }
    };
    t.prototype.removeCachedRenderUnit = function (e) {
      if (this.renderLineCacheStrategy) {
        this.renderLineCacheStrategy.delete(e);
      }
    };
    t.prototype.notifyReuseViewRenderFinish = function (e) {
      var t = this.layoutTree.getNode(e);
      if (t == null ? undefined : t.hasConfig(4)) {
        this.reconciler.handleAsyncNodeRenderFinish(e);
      }
    };
    t.prototype.getFirstChildElement = function () {
      return this.wrapper?.firstElementChild;
    };
    Object.defineProperty(t.prototype, "wrapper", {
      get: function () {
        return this.props.wrapper?.current ?? this.wrapperElement;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.getPreRendererHostElement = function () {
      return this.preRendererHostElementRef.current;
    };
    t.prototype.calculateClassNames = function () {
      var e = this.props.className;
      var t = e === undefined ? "" : e;
      return {
        wrapper: "render-unit-wrapper" + (t ? " " + t : ""),
        preRenderer: "bear-virtual-pre-renderer" + (t ? " " + t : "")
      };
    };
    t.prototype.getChildIds = function (e) {
      var t;
      if ((t = this.reconciler.getLayoutTree().getNode(e)) === null || t === undefined) {
        return undefined;
      } else {
        return t.children.map(function (e) {
          return e.node.nodeId;
        });
      }
    };
    t.prototype.render = function () {
      var t;
      var o = this;
      if (this.props.wrapper) {
        if (window.clientFeatures?.docx_block_ssr && this.reconciler.isSSR) {
          var r = this.getChildIds(this.props.id);
          return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, r == null ? undefined : r.map(this.renderChildSync));
        }
        return null;
      }
      var n = this.props;
      var i = n.tag;
      var a = i === undefined ? "div" : i;
      var l = n.isRoot;
      var s = this.calculateClassNames();
      var c = {};
      if (this.isTableCellWrapper) {
        try {
          var d = this.layoutTree.cloneTableCellLayoutTree(this.props.id);
          var u = this.childLayoutNodes;
          var h = d.children[0];
          var p = d.children[u.length - 1];
          if (h && p) {
            var f = p.node.topToParent - h.node.topToParent + p.node.height;
            c.style = {
              height: f
            };
          }
        } catch (e) {}
      }
      if (this.reconciler.isSSR) {
        var r = this.getChildIds(this.props.id);
        t = reactCoreLibraryReexport.createElement(a, {
          className: s.wrapper,
          ref: this.setWrapperRef,
          children: r == null ? undefined : r.map(function (e) {
            return o.renderChildSync(e);
          })
        });
      } else {
        t = reactCoreLibraryReexport.createElement(a, tn({
          className: s.wrapper,
          ref: this.setWrapperRef
        }, c));
      }
      if (l) {
        return reactCoreLibraryReexport.createElement("div", {
          className: "root-render-unit-container",
          style: {
            position: "relative"
          }
        }, t, this.reconciler.isSSR ? null : reactCoreLibraryReexport.createElement("div", {
          ref: this.preRendererHostElementRef,
          className: s.preRenderer,
          style: e2
        }));
      } else {
        return t;
      }
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  var tc = function () {
    function e(e) {
      this.idleWorker = e;
    }
    e.prototype.didChangeNodes = function (e) {
      if (!(e.needRePaintNodeSet.size > 0) && this.idleWorker.isRenderRangeEnabled() && e.changeNodes.some(function (e) {
        return e.modifications.some(function (e) {
          return e.action === "insertChild" || e.action === "updateParentId" && e.parentId;
        });
      })) {
        this.idleWorker.start();
      }
    };
    e.prototype.postPaint = function () {
      this.idleWorker.start();
    };
    return e;
  }();
  var objectPathFilterUtil = require("object-path-filter-util") /*id: 213469*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  (T = W ||= {})[T.Normal = 0] = "Normal";
  T[T.WithDidChangeNodes = 1] = "WithDidChangeNodes";
  T[T.FullPage = 2] = "FullPage";
  function th(e, t) {
    var o = typeof Symbol == "function" && e[Symbol.iterator];
    if (!o) {
      return e;
    }
    var r;
    var n;
    var i = o.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
        a.push(r.value);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (o = i.return)) {
          o.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return a;
  }
  function tp() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e = e.concat(th(arguments[t]));
    }
    return e;
  }
  var tf = function () {
    function e(e) {
      var t = e.reconciler;
      var o = e.onPaintError;
      this.renderLimitTime = 16;
      this.onPaintError = o;
      this.layoutTree = t.getLayoutTree();
      this.renderUnits = t.getRenderUnits();
      this.nodeHeightChangePlugin = t.nodeHeightChangePlugin;
      this.tracker = t.tracker;
      this.cacheLines = t.cacheLines;
    }
    e.prototype.getRenderUnit = function (e) {
      var t = e.nodeId;
      var o = e.parentId;
      var r = e.source;
      var n = this.layoutTree.getNode(t);
      if (!n || !n.isRenderDisabled()) {
        var i = this.renderUnits.get(o);
        if (!i) {
          this.onPaintError(Error("Cannot get renderUnit"), r === undefined ? "fullRender" : r, {
            nodeId: o,
            disableConsoleLog: true
          });
          return;
        }
        return i;
      }
    };
    e.prototype.renderDepthLayoutNodesMap = function (e, t) {
      var o = this;
      if (t === undefined) {
        t = 0;
      }
      var r = performance.now();
      var n = r + t;
      var i = 0;
      var a = new Map();
      var l = 0;
      var s = new Set();
      ef(e);
      (function (e, t, o = false) {
        var r;
        var n;
        var i = [];
        e.forEach(function (e, t) {
          if (e != null) {
            e.forEach(function (e, o) {
              e.forEach(function (e, r) {
                i.push({
                  depth: t,
                  nodeId: r,
                  node: e,
                  parentId: o
                });
              });
            });
          }
        });
        i.sort(function (e, t) {
          var r = e.node;
          var n = t.node;
          var i = r.getTopToRoot() - n.getTopToRoot();
          if (o) {
            return -i;
          } else {
            return i;
          }
        });
        try {
          var a = eu(i);
          var l = a.next();
          for (; !l.done; l = a.next()) {
            var s = l.value;
            if (t(s)) {
              break;
            }
          }
        } catch (e) {
          r = {
            error: e
          };
        } finally {
          try {
            if (l && !l.done && (n = a.return)) {
              n.call(a);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
      })(e, function (e) {
        var t = e.depth;
        var l = e.nodeId;
        var c = e.node;
        var d = e.parentId;
        if (t !== 0) {
          var u = o.layoutTree.getNode(d);
          if ((u == null ? undefined : u.hasConfig(256)) && s.has(u)) {
            s.add(c);
            return;
          }
          if (!(n - r >= o.renderLimitTime)) {
            var h = o.getRenderUnit({
              nodeId: l,
              parentId: d,
              source: "sliceRender"
            });
            if (h) {
              o.nodeHeightChangePlugin.deleteNodeByNodeId(l);
              if (c.isDirty(1)) {
                var p;
                var f;
                var v;
                p = function () {
                  return h.renderChild(l);
                };
                f = performance.now();
                p();
                var y = {
                  startTime: f,
                  endTime: v = performance.now(),
                  duration: v - f
                };
                var g = y.endTime;
                var N = y.duration;
                i++;
                a.set(l, N);
                n = g;
              }
              s.add(c);
            }
          }
        }
      });
      this.layoutTree.apply([{
        layoutNodes: tp(s),
        type: S.CLEAR_RENDER_DIRTY
      }]);
      return {
        renderedNodes: s,
        renderedCount: i,
        renderedCostMap: a,
        cost: n - r
      };
    };
    e.prototype.fullRender = function (e) {
      var t;
      var o = this;
      var r = [0, new Map(), 0];
      var n = [];
      ef(e);
      e.forEach(function (e, t) {
        if (t !== 0 && e) {
          e.forEach(function (e, t) {
            var i = e.values().next().value;
            if (i) {
              var a = i == null ? undefined : i.parent;
              if (a && a.hasConfig(256)) {
                e.forEach(function (e) {
                  return n.push(e);
                });
                return;
              }
              var l = o.getRenderUnit({
                nodeId: i.node.nodeId,
                parentId: t
              });
              if (l) {
                e.forEach(function (e) {
                  var t = e.node.nodeId;
                  if (e.isDirty(1) || !o.cacheLines.has(t)) {
                    var i = performance.now();
                    l.renderChild(t);
                    r[0] += 1;
                    r[1].set(t, performance.now() - i);
                  }
                  n.push(e);
                });
              }
            }
          });
        }
      });
      this.layoutTree.apply([{
        layoutNodes: n,
        type: S.CLEAR_RENDER_DIRTY
      }]);
      this.tracker.addContext(((t = {})[P.RENDER] = [r, e], t));
      return {
        count: r[0]
      };
    };
    e.prototype.sliceRender = function (e) {
      var t;
      var o;
      var r;
      var n = [0, new Map(), 0];
      var i = new Set();
      t = function (e) {
        return e.node.layoutNodeConfig.priority === O.PRIORITY;
      };
      o = [];
      ev(e, function (e) {
        var r = e.node;
        if (t(r)) {
          eh(r, o);
        }
      });
      var a = o;
      var l = this.renderDepthLayoutNodesMap(a);
      var s = l.renderedNodes;
      var c = l.renderedCount;
      var d = l.renderedCostMap;
      var u = l.cost;
      n[0] += c;
      d.forEach(function (e, t) {
        return n[1].set(t, e);
      });
      s.forEach(function (e) {
        return i.add(e);
      });
      var h = this.renderDepthLayoutNodesMap(e, u);
      var p = h.renderedNodes;
      var f = h.renderedCount;
      var v = h.renderedCostMap;
      var y = h.cost;
      n[0] += f;
      v.forEach(function (e, t) {
        return n[1].set(t, e);
      });
      p.forEach(function (e) {
        return i.add(e);
      });
      n[2] = y;
      this.tracker.addContext(((r = {})[P.RENDER] = [n, e], r));
      return {
        renderedNodeSet: i,
        count: n[0]
      };
    };
    e.prototype.setRenderLimitTime = function (e) {
      this.renderLimitTime = e;
    };
    e.prototype.findSingleRenderNode = function (e) {
      var t;
      var o;
      t = function (e) {
        var t = e.node;
        return t.isDirty(3) && t.layoutNodeConfig.priority === O.SINGLE;
      };
      ev(e, function (e) {
        var r = e.node;
        if (t(r)) {
          o = r;
          return true;
        }
      });
      return o;
    };
    return e;
  }();
  var tv = function () {
    function e(e, t) {
      var o = this;
      this.viewport = e;
      this.getContentDistanceToStart = function () {
        return 0;
      };
      this.handleScroll = function () {
        o.viewport.handleScroll();
      };
      var r = t.setScrollerOffset;
      var n = t.getScrollerRect;
      var i = t.getContentDistanceToStart;
      this.setScrollerOffset = r;
      this.getScrollerRect = n;
      if (i) {
        this.getContentDistanceToStart = i;
      }
    }
    e.prototype.getScrollHelper = function () {
      return {
        getScrollerRect: this.getScrollerRect,
        setScrollOffset: this.setScrollerOffset,
        getContentDistanceToStart: this.getContentDistanceToStart
      };
    };
    e.prototype.destroy = function () {};
    return e;
  }();
  var ty = function () {
    function e(e, t) {
      var o = this;
      this.reconciler = e;
      this.virtualScroller = null;
      this.bufferPixel = 0;
      this.rect = {
        left: 0,
        width: 0,
        top: 0,
        height: 0
      };
      this.getScrollLeft = function () {
        if (!o.virtualScroller) {
          return o.rect.left;
        }
        var e = o.virtualScroller.getScrollHelper();
        var t = e.getScrollerRect;
        var r = e.getContentDistanceToStart;
        return t().left - r();
      };
      this.getViewportWidth = function () {
        if (o.virtualScroller) {
          return o.virtualScroller.getScrollHelper().getScrollerRect().width;
        } else {
          return o.rect.width;
        }
      };
      this.cachedContentOffset = null;
      this.getContentOffset = function () {
        if (!o.virtualScroller) {
          return o.cachedContentOffset || 0;
        }
        if (o.cachedContentOffset === null) {
          var e = o.virtualScroller.getScrollHelper().getContentDistanceToStart;
          o.cachedContentOffset = e();
        }
        return o.cachedContentOffset;
      };
      this.debounceScrollEnd = debounceUtil_1_1.debounce(function () {
        o.updateRect();
        o.mainViewport.updateViewport(true);
      }, 300);
      this.handleScroll = function () {
        o.clearContentOffsetCache();
        o.getContentOffset();
        o.updateRect();
        o.debounceScrollEnd();
        o.mainViewport.updateViewport();
      };
      this.updateViewportLockConfigTimer = null;
      var r = t.rootNode;
      var n = t.defaultScrollOffset;
      var i = n === undefined ? 0 : n;
      var a = t.defaultSize;
      var l = a === undefined ? 0 : a;
      var s = t.bufferPixel;
      this.rootId = r.node.nodeId;
      this.bufferPixel = s === undefined ? 0 : s;
      if (i) {
        this.rect.left = i;
      }
      if (l) {
        this.rect.width = l;
      }
      this.mainViewport = this.reconciler.viewport;
    }
    Object.defineProperty(e.prototype, "viewportData", {
      get: function () {
        return this.rect;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.calcBufferRange = function () {
      var e = this.bufferPixel;
      var t = this.rect;
      return eJ({
        start: t.left,
        size: t.width,
        bufferPixel: e,
        isForceLayoutForAll: this.reconciler.isForceLayoutForAll
      });
    };
    e.prototype.bindScroller = function (e) {
      this.virtualScroller = new tv(this, e);
    };
    e.prototype.unbindScroller = function () {
      if (this.virtualScroller) {
        this.virtualScroller.destroy();
      }
      this.virtualScroller = null;
    };
    e.prototype.updateRect = function () {
      if (this.virtualScroller) {
        this.rect.left = this.getScrollLeft();
        this.rect.width = this.getViewportWidth();
      }
    };
    e.prototype.getRect = function () {
      return {
        offset: this.rect.left,
        size: this.rect.width
      };
    };
    e.prototype.setScrollLeft = function (e) {
      if (!this.virtualScroller) {
        this.rect.left = e;
        return;
      }
      this.clearContentOffsetCache();
      var t = this.getContentOffset();
      this.virtualScroller.getScrollHelper().setScrollOffset(e + t);
      this.updateRect();
      this.mainViewport.updateViewport();
    };
    e.prototype.clearContentOffsetCache = function () {
      this.cachedContentOffset = null;
    };
    e.prototype.destroy = function () {
      this.unbindScroller();
    };
    return e;
  }();
  function tg(e, t) {
    var o = typeof Symbol == "function" && e[Symbol.iterator];
    if (!o) {
      return e;
    }
    var r;
    var n;
    var i = o.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
        a.push(r.value);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (o = i.return)) {
          o.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return a;
  }
  function tN(e) {
    var t = tg(e.calcBufferRange(), 2);
    var o = t[0];
    var r = t[1];
    var n = e.getRect();
    var i = n.offset;
    var a = n.offset + n.size;
    var l = A.VERTICAL;
    if (e instanceof ty) {
      l = A.HORIZONTAL;
    }
    return {
      start: i,
      end: a,
      bufferStart: o,
      bufferEnd: r,
      direction: l
    };
  }
  (R = z ||= {})[R.VIEWPORT = 0] = "VIEWPORT";
  R[R.BUFFER = 1] = "BUFFER";
  R[R.OUTSIDE_ABOVE = 2] = "OUTSIDE_ABOVE";
  R[R.OUTSIDE_BELOW = 3] = "OUTSIDE_BELOW";
  var tT = {};
  function tR(e, t, o) {
    var r = new Set();
    (function e(t) {
      if (t.node.children.length) {
        var o = t.node;
        var r = t.reconciler;
        var n = t.verticalViewportOptions;
        var i = t.callback;
        var a = t.isParentInBuffer;
        var l = t.cellParent;
        var s = t.horizontalViewportOptions;
        var c = t.forceRenderCellNodes;
        var d = o.children;
        if (s && !l && eR(o)) {
          l = o;
        }
        var u = r.viewportMap.get(o.node.nodeId);
        if (u) {
          s = tN(u);
        }
        for (var h = 0; h < d.length; h++) {
          var p = d[h];
          if (p.node.calculateModel !== C.IGNORE && !p.isRenderDisabled()) {
            var f = undefined;
            var v = tw(p, n, tm);
            f = v;
            if (eT(p) || v !== z.OUTSIDE_ABOVE) {
              if (v === z.OUTSIDE_BELOW) {
                break;
              }
              if (s && v <= z.BUFFER) {
                var y = tw(p, s, tE);
                if (f < y) {
                  f = y;
                }
                if (l && p.hasConfig(4096)) {
                  c.add(l);
                }
              }
              if (f <= z.BUFFER && i(p, !a && f === z.VIEWPORT) === tT) {
                return;
              }
              e({
                node: p,
                cellParent: l,
                forceRenderCellNodes: c,
                reconciler: r,
                verticalViewportOptions: n,
                horizontalViewportOptions: s,
                isParentInBuffer: a || f === z.BUFFER,
                callback: i
              });
            }
          }
        }
      }
    })({
      node: t.getLayoutTree().getNode(e.rootId),
      cellParent: undefined,
      verticalViewportOptions: tN(e),
      reconciler: t,
      forceRenderCellNodes: r,
      callback: o
    });
    r.forEach(function (e) {
      ex(e, function (e) {
        o(e, false);
      });
    });
  }
  function tw(e, t, o) {
    var r = t.start;
    var n = t.end;
    var i = t.bufferStart;
    var a = t.bufferEnd;
    var l = o(e);
    var s = l.nodeStart;
    var c = l.nodeEnd;
    if (s <= a && c >= i) {
      if (s <= n && c >= r) {
        return z.VIEWPORT;
      } else {
        return z.BUFFER;
      }
    } else if (s > a) {
      return z.OUTSIDE_BELOW;
    } else {
      return z.OUTSIDE_ABOVE;
    }
  }
  function tm(e) {
    var t = e.getTopToRoot();
    var o = t + e.node.height;
    return {
      nodeStart: t,
      nodeEnd: o
    };
  }
  function tE(e) {
    var t = e.getLeftToRoot();
    var o = t + e.getNodeWidth();
    return {
      nodeStart: t,
      nodeEnd: o
    };
  }
  var tL = function () {
    function e(e) {
      this.reconciler = e;
      this.observedNodes = new Map();
      this.untouchedResizeNodes = new Set();
      this.triggerTimesMap = new Map();
      this.idTimeoutMap = new Map();
      this.init();
    }
    e.prototype.handleNodeHeightChange = function (e) {
      var t = this;
      var o = this.triggerTimesMap.get(e) || 0;
      if (!(o > 3)) {
        var r = this.idTimeoutMap.get(e);
        this.triggerTimesMap.set(e, o + 1);
        if (r !== undefined) {
          window.clearTimeout(r);
        }
        var n = window.setTimeout(function () {
          t.triggerTimesMap.delete(e);
          t.idTimeoutMap.delete(e);
        }, 1000);
        this.idTimeoutMap.set(e, n);
        this.reconciler.handleNodeHeightChange(e);
      }
    };
    e.prototype.handleResize = function (e, t) {
      if (this.reconciler.getLayoutTree().getNode(e) && t.target && t.target.isConnected && t.borderBoxSize && t.borderBoxSize[0] && t.borderBoxSize[0].blockSize) {
        var o = this.reconciler.getLayoutTree().getNode(e).node.height;
        if (Math.abs(t.borderBoxSize[0].blockSize - o) > 1) {
          this.handleNodeHeightChange(e);
        }
      }
    };
    e.prototype.addResizeObserver = function (e, t) {
      this.resizeObserver.observe(e);
      this.observedNodes.set(e, t);
      this.untouchedResizeNodes.add(t);
    };
    e.prototype.removeResizeObserver = function (e) {
      this.resizeObserver.unobserve(e);
      this.observedNodes.delete(e);
    };
    e.prototype.init = function () {
      var e = this;
      this.resizeObserver = new window.ResizeObserver(function (t) {
        t.forEach(function (t) {
          var o = t.target;
          var r = e.observedNodes.get(o);
          if (r) {
            if (e.untouchedResizeNodes.has(r)) {
              e.untouchedResizeNodes.delete(r);
              return;
            }
            e.handleResize(r, t);
          }
        });
      });
    };
    e.prototype.onInsertNode = function (e, t) {
      this.addResizeObserver(e, t);
    };
    e.prototype.onRemoveNode = function (e) {
      this.removeResizeObserver(e);
    };
    e.prototype.destroy = function () {
      this.resizeObserver.disconnect();
      this.observedNodes.clear();
      this.untouchedResizeNodes.clear();
      this.triggerTimesMap.clear();
      Array.from(this.idTimeoutMap.values()).forEach(function (e) {
        return window.clearTimeout(e);
      });
    };
    return e;
  }();
  function tb(e) {
    return window.ResizeObserver && window.ResizeObserver.toString().includes("[native code]") && e;
  }
  w = function (e, t) {
    return (w = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var o in t) {
        if (t.hasOwnProperty(o)) {
          e[o] = t[o];
        }
      }
    })(e, t);
  };
  function tC(e, t) {
    function o() {
      this.constructor = e;
    }
    w(e, t);
    e.prototype = t === null ? Object.create(t) : (o.prototype = t.prototype, new o());
  }
  function tI(e) {
    var t = typeof Symbol == "function" && Symbol.iterator;
    var o = t && e[t];
    var r = 0;
    if (o) {
      return o.call(e);
    }
    if (e && typeof e.length == "number") {
      return {
        next: function () {
          if (e && r >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function tS(e, t) {
    var o = typeof Symbol == "function" && e[Symbol.iterator];
    if (!o) {
      return e;
    }
    var r;
    var n;
    var i = o.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
        a.push(r.value);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (o = i.return)) {
          o.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return a;
  }
  function tO() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e = e.concat(tS(arguments[t]));
    }
    return e;
  }
  tC(function (e) {
    var t = m.call(this, "viewport lock out of threshold") || this;
    t.rate = e;
    t.name = "ViewportLockRateError";
    return t;
  }, m = Error);
  var tA = function () {
    function e(e, t, o, r, n, i, a) {
      var l = this;
      this.viewportHelper = e;
      this.layoutTree = t;
      this.reconciler = o;
      this.onViewportLocked = r;
      this.onError = n;
      this.useNoLayoutAnchorLock = i;
      this.clearAnchorWhenNotInViewport = a;
      this.tmpViewportAnchorInfos = undefined;
      this.viewportAnchorInfos = undefined;
      this.hasDirtyNodeAboveToViewportAnchorNode = false;
      this.hasContentAboveRootHeightChange = false;
      this.hasLayoutTreeStructChange = false;
      this.hasRootWatchPropsChange = false;
      this.hasNeedSyncDefaultLayoutNodesBeforeLocalOp = false;
      this.config = {
        partInViewportThreshold: 0,
        anchorOffsetToViewportTop: 0,
        viewportLockThreshold: 4
      };
      this.forbiddenNodes = new Set();
      this.isLockViewportDisabled = false;
      this.lockRate = 0;
      this.lockRateList = [];
      this.userLockAnchorNode = undefined;
      this.userAnchorNodeCheckCount = 0;
      this.setUserLockAnchorNode = function (e) {
        l.userLockAnchorNode;
        l.userLockAnchorNode = e;
        l.userAnchorNodeCheckCount = 0;
      };
      this.calcViewportAnchorInfos = function (e, t = []) {
        var o;
        var r;
        var n = l.config;
        var i = n.partInViewportThreshold;
        var a = n.anchorOffsetToViewportTop;
        var s = new Set();
        var c = l.userLockAnchorNode;
        var d = l.clearAnchorWhenNotInViewport || c && t.includes(c);
        if (c && d && l.getNodesOutOfForbiddenNodes([c]).length) {
          return {
            viewportAnchorNode: c,
            distanceToViewportTop: c.getTopToRoot() - (e + a),
            isPartInViewportAndOverThreshold: true,
            viewportAnchorTop: c.getTopToRoot(),
            isViewportAnchorNodeAlreadyLayout: !c.isDirty(2),
            scrollTop: e
          };
        }
        var u = undefined;
        try {
          var h = tI(l.getNodesOutOfForbiddenNodes(t));
          var p = h.next();
          for (; !p.done; p = h.next()) {
            var f = p.value;
            var v = f.getTopToRoot() - (e + a);
            var y = v < 0;
            var g = v + f.node.height >= i;
            var N = y && g;
            if (function (e, t, o) {
              if (u == null) {
                return true;
              }
              if (s.has(e)) {
                return false;
              }
              if (u.isPartInViewportAndOverThreshold !== t) {
                var r = u.viewportAnchorNode.node.nodeId;
                if (!o.getIsChildOf(r)) {
                  return t;
                }
              }
              var n = u.distanceToViewportTop;
              if (e >= 0) {
                return n < 0 || e < n;
              } else {
                return e > n;
              }
            }(v, N, f)) {
              s.add(v);
              u = {
                viewportAnchorNode: f,
                distanceToViewportTop: v,
                isPartInViewportAndOverThreshold: N
              };
            }
          }
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            if (p && !p.done && (r = h.return)) {
              r.call(h);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
        return u && {
          viewportAnchorNode: u.viewportAnchorNode,
          viewportAnchorTop: u.viewportAnchorNode.getTopToRoot(),
          isViewportAnchorNodeAlreadyLayout: !u.viewportAnchorNode.isDirty(2),
          scrollTop: e
        };
      };
      this.setTempViewportAnchorInfosIfNeeded = function (e, t) {
        var o;
        if (t === undefined) {
          t = [];
        }
        if (l.viewportAnchorInfos === undefined) {
          l.tmpViewportAnchorInfos = l.calcViewportAnchorInfos(e, t);
          l.tracker.addContext(((o = {})[P.VIEWPORT_LOCKER_SET_TEMP_ANCHOR_NODE] = [e, t, l.tmpViewportAnchorInfos], o));
        }
      };
      this.setViewportAnchorInfosIfNeeded = function (e, t) {
        var o;
        if (l.viewportAnchorInfos === undefined) {
          l.viewportAnchorInfos = l.calcViewportAnchorInfos(e, t);
          l.tracker.addContext(((o = {})[P.VIEWPORT_LOCKER_SET_ANCHOR_NODE] = [e, t, l.viewportAnchorInfos], o));
        }
      };
      this.setViewportAnchorInfosByTmpIfNeeded = function () {
        var e;
        if (l.viewportAnchorInfos === undefined) {
          l.viewportAnchorInfos = l.tmpViewportAnchorInfos;
          l.tracker.addContext(((e = {})[P.VIEWPORT_LOCKER_SET_ANCHOR_NODE_BY_TMP] = [l.viewportAnchorInfos], e));
        }
      };
    }
    e.prototype.init = function () {
      if (tb(this.reconciler.useResizeObserverLock)) {
        this.blockSizeChangeDetector = new tL(this.reconciler);
      }
    };
    Object.defineProperty(e.prototype, "tracker", {
      get: function () {
        return this.reconciler.tracker;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.getViewportAnchorInfos = function () {
      return this.viewportAnchorInfos;
    };
    e.prototype.toggleDisabledLockViewport = function (e) {
      this.isLockViewportDisabled = e;
    };
    e.prototype.updateConfig = function (e) {
      Object.assign(this.config, objectPathFilterUtil.filterObjectByPaths(e, function (e, t) {
        return new Set(["partInViewportThreshold", "anchorOffsetToViewportTop", "viewportLockThreshold"]).has(t) && e != null;
      }));
    };
    e.prototype.forbiddenChildrenBecomeAnchorNode = function (e) {
      this.forbiddenNodes.add(this.layoutTree.getNode(e));
    };
    e.prototype.onInsertNode = function (e, t) {
      if (tb(this.reconciler.useResizeObserverLock)) {
        this.blockSizeChangeDetector.onInsertNode(e, t);
      }
    };
    e.prototype.onRemoveNode = function (e, t) {
      if (tb(this.reconciler.useResizeObserverLock)) {
        this.blockSizeChangeDetector.onRemoveNode(e);
      }
    };
    Object.defineProperty(e.prototype, "shouldLock", {
      get: function () {
        return this.calcShouldLock(this.hasDirtyNodeAboveToViewportAnchorNode);
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.isUserAnchorLocking = function () {
      return !!this.userLockAnchorNode;
    };
    e.prototype.isLocalOp = function (e, t) {
      return e && !t;
    };
    e.prototype.isAboveBlockInViewport = function (e) {
      return e.scrollTop <= 0;
    };
    e.prototype.isHeightChangeAboveAnchorNode = function (e, t) {
      return e || t;
    };
    e.prototype.isAnchorNodeExist = function (e, t) {
      return !!e && t.isExistedInLayoutTree(e.viewportAnchorNode);
    };
    e.prototype.isAnchorNodeAlreadyLayout = function (e, t, o) {
      return !!this.useNoLayoutAnchorLock || e.isViewportAnchorNodeAlreadyLayout || !t || o;
    };
    e.prototype.isDiffValueBelowZeroPointOne = function (e) {
      var t;
      var o = e.viewportAnchorNode;
      var r = e.viewportAnchorTop;
      var n = o.getTopToRoot() - r;
      return Math.abs(n) < 0.01 && n !== 0 && (this.tracker.addContext(((t = {})[P.VIEWPORT_LOCKER_CALC_SHOULD_LOCK] = [M.DIFF_BELOW_ZERO_POINT_ONE], t)), true);
    };
    e.prototype.calcShouldLock = function (e) {
      var t;
      var o;
      var r;
      var n;
      var i;
      var a;
      var l = this.isLockViewportDisabled;
      var s = this.viewportAnchorInfos;
      var c = this.layoutTree;
      var d = this.hasLocalUserOperation;
      var u = this.hasContentAboveRootHeightChange;
      var h = this.hasLayoutTreeStructChange;
      var p = this.hasRootWatchPropsChange;
      var f = this.hasNeedSyncDefaultLayoutNodesBeforeLocalOp;
      return !l && (this.isLocalOp(d, f) ? (this.tracker.addContext(((t = {})[P.VIEWPORT_LOCKER_CALC_SHOULD_LOCK] = [M.LOCAL_OP_AND_WITHOUT_NEED_SYNC_LAYOUT_NODE], t)), false) : this.isAnchorNodeExist(s, c) ? this.isAnchorNodeAlreadyLayout(s, h, p) ? this.isAboveBlockInViewport(s) ? (this.tracker.addContext(((n = {})[P.VIEWPORT_LOCKER_CALC_SHOULD_LOCK] = [M.ALREADY_ON_TOP], n)), false) : this.isHeightChangeAboveAnchorNode(e, u) ? !this.isDiffValueBelowZeroPointOne(s) || (this.tracker.addContext(((a = {})[P.VIEWPORT_LOCKER_CALC_SHOULD_LOCK] = [M.DIFF_BELOW_ZERO_POINT_ONE], a)), false) : (this.tracker.addContext(((i = {})[P.VIEWPORT_LOCKER_CALC_SHOULD_LOCK] = [M.NO_HEIGHT_CHANGE_ABOVE_ANCHOR_NODE], i)), false) : (this.tracker.addContext(((r = {})[P.VIEWPORT_LOCKER_CALC_SHOULD_LOCK] = [M.ANCHOR_NODE_NOT_LAYOUT, [s.isViewportAnchorNodeAlreadyLayout, !h, p]], r)), false) : (this.tracker.addContext(((o = {})[P.VIEWPORT_LOCKER_CALC_SHOULD_LOCK] = [M.ANCHOR_NODE_NOT_EXIST], o)), false));
    };
    e.prototype.getNodesOutOfForbiddenNodes = function (e) {
      var t = this;
      if (!this.forbiddenNodes.size) {
        return e;
      }
      var o = new Set();
      this.forbiddenNodes.forEach(function (e) {
        t.layoutTree.traverseAllDescendants(e, function (e) {
          o.add(e);
        });
      });
      return e.filter(function (e) {
        return !o.has(e);
      });
    };
    e.prototype.handleContentAboveRootHeightChange = function (e, t) {
      this.hasContentAboveRootHeightChange = true;
      this.setViewportAnchorInfosIfNeeded(e, t);
    };
    e.prototype.handleRootWatchPropsChange = function () {
      this.hasRootWatchPropsChange = true;
    };
    e.prototype.preDidChangeNodes = function (e) {
      var t = e.hasLocalUserOperation;
      var o = e.viewportTop;
      var r = e.viewportNodes;
      if (!this.hasLocalUserOperation && t) {
        this.hasNeedSyncDefaultLayoutNodesBeforeLocalOp = this.layoutTree.hasNeedSyncDefaultLayoutNodes();
        this.hasLocalUserOperation = true;
      }
      this.setTempViewportAnchorInfosIfNeeded(o, r);
    };
    e.prototype.postDidChangeNodes = function (e) {
      var t = e.nearestRootNodeTopToRoot;
      if (this.tmpViewportAnchorInfos && t !== undefined && t < this.tmpViewportAnchorInfos.viewportAnchorTop) {
        this.hasDirtyNodeAboveToViewportAnchorNode = true;
      }
      if (e.needRePaintNodeSet.size) {
        this.setViewportAnchorInfosByTmpIfNeeded();
      }
      this.tmpViewportAnchorInfos = undefined;
      this.recordLayoutTreeStructChange(e);
    };
    e.prototype.recordLayoutTreeStructChange = function (e) {
      var t = this;
      if (!this.hasLayoutTreeStructChange) {
        e.changeNodes.find(function (e) {
          return e.modifications.find(function (e) {
            return e.action !== "updateObject" && (t.hasLayoutTreeStructChange = true, true);
          });
        });
      }
    };
    e.prototype.lockViewportImpl = function (e) {
      var t;
      var o;
      var r;
      var n = e.viewportAnchorNode;
      var i = e.viewportAnchorTop;
      var a = e.scrollTop;
      var l = n.getTopToRoot() - i;
      if (l || this.hasContentAboveRootHeightChange) {
        this.tracker.addContext(((t = {})[P.VIEWPORT_LOCKER_LOCK_VIEWPORT] = [e], t));
        this.calcLockRate();
        this.viewportHelper.setScrollTop(a + l, {
          from: U.VIEWPORT_LOCK
        });
        if ((r = this.onViewportLocked) !== null && r !== undefined) {
          r.call(this);
        }
      } else {
        this.tracker.addContext(((o = {})[P.VIEWPORT_LOCKER_CALC_SHOULD_LOCK] = [M.NO_DIFF_OR_NO_ROOT_HEIGHT_CHANGE], o));
      }
      return a + l;
    };
    e.prototype.calcLockRate = function () {
      var e = this;
      if (this.lockRate === 0) {
        setTimeout(function () {
          var t = e.lockRate;
          if (t > e.config.viewportLockThreshold) {
            e.onError(Error("viewport lock out of threshold"), "ViewportLockRateError", {
              rate: t
            });
          }
          e.lockRateList.push(t);
          e.lockRate = 0;
          if (e.lockRateList.length >= 100) {
            e.lockRateList = [e.collectMaxLockRate()];
          }
        }, 1000);
      }
      this.lockRate++;
    };
    e.prototype.collectMaxLockRate = function () {
      var e = Math.max.apply(Math, tO(this.lockRateList, [0]));
      this.lockRateList = [];
      return e;
    };
    e.prototype.preSyncDefaultLayout = function (e) {
      var o = this;
      var r = e.viewportTop;
      var n = e.viewportNodes;
      this.setViewportAnchorInfosIfNeeded(r, n);
      var i = this.layoutTree.getNeedSyncDefaultLayoutNodes();
      var a = this.viewportAnchorInfos?.viewportAnchorNode;
      if (a) {
        i.forEach(function (e) {
          var t = o.layoutTree.getNode(e);
          if (t && t.isAboveToNode(a)) {
            o.hasDirtyNodeAboveToViewportAnchorNode = true;
            return;
          }
        });
      }
    };
    e.prototype.postSyncDefaultLayout = function () {
      if (this.viewportAnchorInfos && this.shouldLock) {
        var e = this.viewportAnchorInfos.viewportAnchorNode;
        var t = this.lockViewportImpl(this.viewportAnchorInfos);
        this.viewportAnchorInfos.viewportAnchorTop = e.getTopToRoot();
        this.viewportAnchorInfos.scrollTop = t;
      }
    };
    e.prototype.readonlyPostCalcViewport = function (e) {
      var t;
      var o;
      var r;
      var n;
      var i;
      var a;
      var l = e.needRecalculateNodes;
      var s = e.viewportNodes;
      var c = e.viewportTop;
      this.setViewportAnchorInfosIfNeeded(c, s);
      if (this.viewportAnchorInfos) {
        var d = this.viewportAnchorInfos.viewportAnchorNode;
        if (this.calcShouldLock(true)) {
          this.viewportAnchorInfos.isViewportAnchorNodeAlreadyLayout &&= !d.isDirty(2);
          if (this.calcShouldLock(true) && !this.hasDirtyNodeAboveToViewportAnchorNode) {
            try {
              var u = tI(l);
              var h = u.next();
              for (; !h.done; h = u.next()) {
                var p = h.value;
                var f = p == null ? undefined : p.values();
                if (f) {
                  try {
                    r = undefined;
                    var v = tI(f);
                    var y = v.next();
                    for (; !y.done; y = v.next()) {
                      var g = y.value.values();
                      try {
                        i = undefined;
                        var N = tI(g);
                        var T = N.next();
                        for (; !T.done; T = N.next()) {
                          if (T.value.isAboveToNode(d)) {
                            this.hasDirtyNodeAboveToViewportAnchorNode = true;
                            return;
                          }
                        }
                      } catch (e) {
                        i = {
                          error: e
                        };
                      } finally {
                        try {
                          if (T && !T.done && (a = N.return)) {
                            a.call(N);
                          }
                        } finally {
                          if (i) {
                            throw i.error;
                          }
                        }
                      }
                    }
                  } catch (e) {
                    r = {
                      error: e
                    };
                  } finally {
                    try {
                      if (y && !y.done && (n = v.return)) {
                        n.call(v);
                      }
                    } finally {
                      if (r) {
                        throw r.error;
                      }
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
                if (h && !h.done && (o = u.return)) {
                  o.call(u);
                }
              } finally {
                if (t) {
                  throw t.error;
                }
              }
            }
          }
        }
      }
    };
    e.prototype.preLayout = function (e) {
      var t = e.viewportData.top;
      var o = e.viewportNodes;
      this.setViewportAnchorInfosIfNeeded(t, o);
    };
    e.prototype.tryToResetUserAnchorNode = function () {
      var e = this.userLockAnchorNode;
      var t = this.reconciler;
      var o = this.layoutTree.rootLayoutNode;
      if (o) {
        var r = false;
        if (this.layoutTree.getNode(o.node.nodeId)) {
          tR(t.viewport, t, function (t, o) {
            if (o && e === t) {
              r = true;
              return tT;
            }
          });
        }
        if (r) {
          this.userAnchorNodeCheckCount = 0;
        } else if (++this.userAnchorNodeCheckCount > 1) {
          this.setUserLockAnchorNode(undefined);
        }
      }
    };
    e.prototype.postPaint = function () {
      var e;
      this.tracker.addContext(((e = {})[P.VIEWPORT_LOCKER_POST_PAINT] = [], e));
      if (this.shouldLock && this.viewportAnchorInfos) {
        this.lockViewportImpl(this.viewportAnchorInfos);
      }
      if (this.clearAnchorWhenNotInViewport && this.userLockAnchorNode && !this.reconciler.isNodeInViewport(this.userLockAnchorNode)) {
        this.tryToResetUserAnchorNode();
      }
      this.viewportAnchorInfos = undefined;
      this.hasDirtyNodeAboveToViewportAnchorNode = false;
      this.hasContentAboveRootHeightChange = false;
      this.hasLayoutTreeStructChange = false;
      this.hasRootWatchPropsChange = false;
      this.forbiddenNodes.clear();
      this.hasLocalUserOperation = undefined;
      this.hasNeedSyncDefaultLayoutNodesBeforeLocalOp = false;
    };
    e.prototype.destroy = function () {
      if (tb(this.reconciler.useResizeObserverLock)) {
        this.blockSizeChangeDetector.destroy();
      }
    };
    return e;
  }();
  var tD = function () {
    function e(e) {
      this.props = e;
      this.lockedHeightNodes = new Set();
      this.renderFinishedNodes = new Set();
    }
    Object.defineProperty(e.prototype, "onWarning", {
      get: function () {
        return this.props.reconciler.onWarning;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.isLockedHeight = function (e) {
      return this.lockedHeightNodes.has(e);
    };
    e.prototype.unlockAncestorHeight = function (e) {
      var t = this.getLockedHeightAncestor(e);
      if (t) {
        this.unlockHeight(t);
      }
    };
    e.prototype.getLockedHeightAncestor = function (e) {
      for (var t = e; t;) {
        if (this.isLockedHeight(t.node.nodeId)) {
          return t.node.nodeId;
        }
        t = t.parent;
      }
      return null;
    };
    e.prototype.handleRenderFinish = function (e) {
      if (this.props.isAboveViewport(e)) {
        this.lockUnrenderedNodeAboveViewport(e);
        this.renderFinishedNodes.add(e);
        return;
      }
      this.renderFinishedNodes.add(e);
      if (!this.props.isScrolling() && this.lockedHeightNodes.has(e)) {
        this.lockedHeightNodes.delete(e);
        this.unlockHeight(e);
      }
    };
    e.prototype.readonlyPreMount = function (e) {
      var t = this;
      var o = new Set(e.viewportNodes.map(function (e) {
        return e.node.nodeId;
      }));
      var r = this.calcLockHeightOps(o, e.needMountNodes, this.lockedHeightNodes);
      var n = r.lockedHeightNodes;
      r.needLockHeightNodes.forEach(function (e) {
        return t.lockHeight(e);
      });
      this.lockedHeightNodes = n;
    };
    e.prototype.calcLockHeightOps = function (e, t, o) {
      var r = this;
      var n = new Set();
      var i = new Set();
      var a = t.length - 1;
      for (; a >= 1; a -= 1) {
        var l = t[a];
        if (l != null) {
          l.forEach(function (t) {
            t.forEach(function (t) {
              var a;
              var l = t.node.nodeId;
              if (!!t.hasConfig(4) && !r.renderFinishedNodes.has(l) && !e.has(l) && r.props.isAboveViewport(l)) {
                if (!r.props.cacheLines.get(l)) {
                  if ((a = r.onWarning) !== null && a !== undefined) {
                    a.call(r, Error("found unrendered line try to lock height!"), "calcLockHeightOps", {
                      nodeId: l
                    });
                  }
                  return;
                }
                n.add(l);
                if (!o.has(l)) {
                  i.add(l);
                }
              }
            });
          });
        }
      }
      o.forEach(function (e) {
        n.add(e);
      });
      return {
        lockedHeightNodes: n,
        needLockHeightNodes: i
      };
    };
    e.prototype.didChangeNodes = function (e) {
      var t = this;
      var o = false;
      e.changeNodes.forEach(function (e) {
        e.modifications.forEach(function (r) {
          switch (r.action) {
            case "insertChild":
              t.renderFinishedNodes.delete(r.childId);
              t.lockedHeightNodes.delete(r.childId);
              break;
            case "updateParentId":
              t.renderFinishedNodes.delete(e.nodeId);
              t.lockedHeightNodes.delete(e.nodeId);
              break;
            case "deleteChild":
              o = true;
          }
        });
      });
      if (o) {
        this.removeNotInTreeNodes(this.renderFinishedNodes);
        this.removeNotInTreeNodes(this.lockedHeightNodes);
      }
    };
    e.prototype.lockUnrenderedNodeAboveViewport = function (e) {
      var t;
      var o = this.props.layoutTree.getNode(e);
      if ((o == null ? undefined : o.hasConfig(4)) && !this.renderFinishedNodes.has(e) && !this.lockedHeightNodes.has(e) && this.props.isAboveViewport(e)) {
        if (!this.props.cacheLines.get(e)) {
          if ((t = this.onWarning) !== null && t !== undefined) {
            t.call(this, Error("found unrendered line try to lock height!"), "lockUnrenderedNodeAboveViewport", {
              nodeId: e
            });
          }
          return;
        }
        this.lockedHeightNodes.add(e);
        this.lockHeight(e);
      }
    };
    e.prototype.didNodeHeightChange = function (e) {
      this.lockUnrenderedNodeAboveViewport(e.nodeId);
    };
    e.prototype.lockHeight = function (e) {
      var t = this.props.cacheLines.get(e);
      var o = this.props.layoutTree.getNode(e);
      if (t && o) {
        t.style.height = o.node.height + "px";
        t.style.marginTop = o.node.marginTop + "px";
        t.style.marginBottom = o.node.marginBottom + "px";
        this.props.onLockNodeHeight(t, e);
      }
    };
    e.prototype.unlockHeight = function (e) {
      var t = this.props.cacheLines.get(e);
      if (t) {
        t.style.height = "";
        t.style.marginTop = "";
        t.style.marginBottom = "";
        this.props.onUnlockNodeHeight(t, e);
      }
    };
    e.prototype.handleScrollEnd = function () {
      var e = this;
      this.lockedHeightNodes.forEach(function (t) {
        if (!e.props.isAboveViewport(t) && e.renderFinishedNodes.has(t)) {
          e.lockedHeightNodes.delete(t);
          e.unlockHeight(t);
        }
      });
    };
    e.prototype.removeNotInTreeNodes = function (e) {
      var t = this;
      e.forEach(function (o) {
        var r = t.props.layoutTree.getNode(o);
        if (r && !t.props.layoutTree.isExistedInLayoutTree(r)) {
          e.delete(o);
        }
      });
    };
    return e;
  }();
  var tP = function () {
    function e(e) {
      this.layoutTree = e;
      this.layoutRecalculateNodeMap = new Map();
      this.layoutRecalculatedNodes = [];
      this.topToRootRecalculatedNodes = [];
    }
    e.prototype.getLayoutRecalculatedNodes = function () {
      return Array.from(this.layoutRecalculatedNodes);
    };
    e.prototype.getTopToRootRecalculatedNodes = function () {
      return Array.from(this.topToRootRecalculatedNodes);
    };
    e.prototype.preResetTopToParent = function (e) {
      var t = this;
      e.forEach(function (e) {
        if (t.layoutTree.isExistedInLayoutTree(e)) {
          for (var o = e; o;) {
            t.layoutRecalculateNodeMap.set(o.node.nodeId, t.layoutTree.getLayoutInfo(o.node.nodeId));
            o = o.parent;
          }
        }
      });
    };
    e.prototype.preSyncDefaultLayout = function () {
      var e = this;
      if (this.layoutTree.hasNeedSyncDefaultLayoutNodes()) {
        this.layoutTree.getNeedSyncDefaultLayoutNodes().forEach(function (t) {
          for (var o = e.layoutTree.getNode(t); o;) {
            e.layoutRecalculateNodeMap.set(o.node.nodeId, e.layoutTree.getLayoutInfo(o.node.nodeId));
            o = o.parent;
          }
        });
      }
    };
    e.prototype.preLayout = function (e) {
      var t = this;
      var o = e.needRecalculateNodes;
      var r = this.layoutRecalculateNodeMap;
      ep(o, function (e) {
        var o = e.nodeId;
        if (!r.has(o)) {
          r.set(o, t.layoutTree.getLayoutInfo(o));
        }
      });
    };
    e.prototype.readonlyPreMount = function () {
      var e = this;
      var t = this.layoutRecalculateNodeMap;
      var o = this.layoutRecalculatedNodes;
      var r = this.topToRootRecalculatedNodes;
      t.forEach(function (t, n) {
        var i = e.layoutTree.getLayoutInfo(n);
        if (t !== i) {
          if (!t || !i) {
            o.push(n);
            r.push(n);
            return;
          }
          if (t.height !== i.height || t.width !== i.width || t.marginTop !== i.marginTop || t.marginBottom !== i.marginBottom) {
            o.push(n);
          }
          if (t.top !== i.top) {
            r.push(n);
          }
        }
      });
    };
    e.prototype.postPaint = function () {
      this.layoutRecalculateNodeMap.clear();
      this.layoutRecalculatedNodes.length = 0;
      this.topToRootRecalculatedNodes.length = 0;
    };
    return e;
  }();
  var t_ = function () {
    function e(e) {
      var t = this;
      this.props = e;
      this.retainNodes = new Set();
      this.deactivatedNodes = new Set();
      this.isRetainInDomTree = function (e) {
        return t.deactivatedNodes.has(e);
      };
      this.getDeactiveNodeStyle = function (e) {
        return e;
      };
      this.tmpActivatedNodes = new Set();
    }
    e.prototype.postCalcViewport = function (e) {
      var t = this;
      this.retainNodes.forEach(function (o) {
        var r = t.props.layoutTree.getNode(o);
        if (r && r.isDirty(3) && t.props.layoutTree.isExistedInLayoutTree(r)) {
          eh(r, e.needRecalculateNodes);
        }
      });
    };
    e.prototype.preMount = function (e) {
      var t = this;
      var o = this.calcRetainOps(e.activeNodes, e.prevActiveNodes, this.retainNodes, this.deactivatedNodes);
      var r = o.retainNodes;
      var n = o.deactivatedNodes;
      var i = o.needActivateNodes;
      var a = o.needDeactivateNodes;
      r.forEach(function (o) {
        eh(t.props.layoutTree.getNode(o), e.needMountNodes);
      });
      var l = Array.from(r).filter(function (e) {
        return !t.retainNodes.has(e);
      });
      var s = Array.from(this.retainNodes).filter(function (e) {
        return !r.has(e);
      });
      this.props.addViewportVisibilityObserveByIds(l);
      this.props.removeViewportVisibilityObserveByIds(s);
      if (!this.props.useNewRetain) {
        i.forEach(function (e) {
          return t.activateNode(e);
        });
        a.forEach(function (e) {
          return t.deactivateNode(e);
        });
      }
      this.retainNodes = r;
      this.deactivatedNodes = n;
    };
    e.prototype.activateNode = function (e) {
      var t = this.props.cacheLines.get(e);
      if (t) {
        delete t.dataset.bearVirtualDeactivatedIgnore;
        if (!this.props.isLockedHeight(e)) {
          t.style.height = "";
          t.style.marginTop = "";
          t.style.marginBottom = "";
        }
        Array.from(t.childNodes).forEach(function (e) {
          if (e instanceof HTMLElement) {
            delete e.dataset.bearVirtualDeactivatedChild;
          }
        });
      }
    };
    e.prototype.deactivateNode = function (e) {
      var t = this.props.cacheLines.get(e);
      var o = this.props.layoutTree.getNode(e);
      if (t && o) {
        var r = this.getDeactiveNodeStyle({
          height: o.node.height,
          marginTop: o.node.marginTop,
          marginBottom: o.node.marginBottom
        }, t);
        t.style.height = r.height + "px";
        t.style.marginTop = r.marginTop + "px";
        t.style.marginBottom = r.marginBottom + "px";
        if (o.node.calculateModel === C.IGNORE) {
          t.dataset.bearVirtualDeactivatedIgnore = "";
        }
        Array.from(t.childNodes).forEach(function (e) {
          if (e instanceof HTMLElement) {
            e.dataset.bearVirtualDeactivatedChild = "";
          }
        });
      }
    };
    e.prototype.updateGetDeactiveNodeStyle = function (e) {
      this.getDeactiveNodeStyle = e;
    };
    e.prototype.getNodesThatStayOnDomWhenLayout = function (e) {
      return this.calcDepthOneRetainNodes(e.activeNodes, e.prevActiveNodes, this.retainNodes);
    };
    e.prototype.calcDepthOneRetainNodes = function (e, t, o) {
      var r = new Set();
      this.findRetainNodes(e, t, o, function (e) {
        return e.depth === 1 && r.add(e.node.nodeId);
      });
      return r;
    };
    e.prototype.preLayout = function (e) {
      var t = this;
      if (!this.props.useNewRetain) {
        for (var o = e.needRecalculateNodes.length - 1; o >= 1; o--) {
          var r = e.needRecalculateNodes[o];
          if (r != null) {
            r.forEach(function (e) {
              e.forEach(function (e, o) {
                if (t.deactivatedNodes.has(o)) {
                  t.activateNode(o);
                  t.tmpActivatedNodes.add(o);
                }
              });
            });
          }
        }
      }
    };
    e.prototype.postLayout = function () {
      var e = this;
      if (!this.props.useNewRetain) {
        this.tmpActivatedNodes.forEach(function (t) {
          e.deactivateNode(t);
        });
        this.tmpActivatedNodes.clear();
      }
    };
    e.prototype.calcRetainOps = function (e, t, o, r) {
      var n = this;
      var i = new Set();
      var a = new Set();
      var l = this.findRetainNodes(e, t, o, function (e, t) {
        if (t) {
          var o = e.node.nodeId;
          i.add(o);
          if (!r.has(o)) {
            a.add(o);
          }
        }
      });
      var s = new Set();
      r.forEach(function (t) {
        if (e.has(t)) {
          s.add(t);
        } else {
          var o = n.props.layoutTree.getNode(t);
          if (o && n.props.layoutTree.isExistedInLayoutTree(o)) {
            i.add(t);
          }
        }
      });
      return {
        retainNodes: l,
        deactivatedNodes: i,
        needActivateNodes: s,
        needDeactivateNodes: a
      };
    };
    e.prototype.findRetainNodes = function (e, t, o, r) {
      var n = this;
      var i = new Set();
      function a(t) {
        var o = n.props.layoutTree.getNode(t);
        if (!!o && !!o.hasConfig(1) && !e.has(t) && n.props.layoutTree.isExistedInLayoutTree(o)) {
          for (var a = o; a && a.parent;) {
            var l = a.node.nodeId;
            if (i.has(l)) {
              return;
            }
            i.add(l);
            var s = a.parent.node.nodeId;
            var c = e.has(s);
            r(a, c);
            if (c) {
              return;
            }
            a = a.parent;
          }
        }
      }
      t.forEach(a);
      o.forEach(a);
      return i;
    };
    e.prototype.postPaint = function () {
      if (!this.props.useNewRetain) {
        this.tmpActivatedNodes.clear();
      }
    };
    return e;
  }();
  var tk = function () {
    function e(e) {
      this.reconciler = e;
    }
    e.prototype.postPaint = function () {
      var e = this.reconciler;
      var t = this.reconciler.getLayoutTree();
      var o = e.cacheLines;
      if (e.enableFirstNodeCheck) {
        var r = t.rootLayoutNode.children[0];
        if (r) {
          var n = r.node.nodeId;
          var i = this.prevFirstNodeId;
          if (i && i !== n) {
            var a = t.getNode(i);
            var l = [];
            var s = new Map();
            var c = new Set();
            if (a && this.checkRenderedAndActive(a.node.nodeId)) {
              var d = e.getRenderUnits().get(a.node.nodeId);
              var u = (d == null ? undefined : d.getFirstChildElement()) || undefined;
              l.push({
                firstChildElement: u,
                node: a,
                element: o.get(a.node.nodeId)
              });
              s.set(a.node.nodeId, a);
              c.add(a);
            }
            if (r && this.checkRenderedAndActive(r.node.nodeId)) {
              var d = e.getRenderUnits().get(r.node.nodeId);
              var u = (d == null ? undefined : d.getFirstChildElement()) || undefined;
              l.push({
                firstChildElement: u,
                node: r,
                element: o.get(r.node.nodeId)
              });
              s.set(r.node.nodeId, r);
              c.add(r);
            }
            var h = e.getPreRender().calculateLayoutInfos(l);
            t.apply([{
              type: S.UPDATE_LAYOUT,
              layoutInfos: h,
              layoutNodes: s,
              updateLayoutWithoutClearDirty: true
            }]);
            t.resetTopToParent(c);
          }
          this.prevFirstNodeId = n;
        }
      }
    };
    e.prototype.checkRenderedAndActive = function (e) {
      return this.reconciler.cacheLines.get(e) && this.reconciler.getActiveNodes().has(e);
    };
    return e;
  }();
  function tM(e) {
    var t = typeof Symbol == "function" && Symbol.iterator;
    var o = t && e[t];
    var r = 0;
    if (o) {
      return o.call(e);
    }
    if (e && typeof e.length == "number") {
      return {
        next: function () {
          if (e && r >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  var tx = function () {
    function e(e, t) {
      this.reconciler = e;
      this.layoutTree = t;
    }
    e.prototype.preReadonlyPostCalcViewport = function (e) {
      var t = this;
      var o = new Set();
      this.updateNecessaryRows(e, o);
      tH(o, function (t) {
        e.noSliceMountNodes.add(t.node.nodeId);
        if (t.isDirty(3)) {
          eh(t, e.needRecalculateNodes);
        }
        eh(t, e.needMountNodes);
      }, ["row", "cell"]);
      var r = new Set();
      var n = new Set(e.viewportNodes);
      Array.from(o).forEach(function (e) {
        var t = e.parent;
        if ((t == null ? undefined : t.hasConfig(1024)) && t && n.has(t)) {
          r.add(t.children[0]);
        }
      });
      r.forEach(function (o) {
        ex(o, function (o) {
          e.activeNodes.add(o.node.nodeId);
          e.viewportNodes.push(o);
          if (o.isDirty(3)) {
            eh(o, e.needRecalculateNodes);
          }
          if (!e.fromScrolling || t.reconciler.cacheLines.has(o.node.nodeId) || t.reconciler.getVirtualCacheLine(o.node.nodeId)) {
            eh(o, e.needMountNodes);
          }
        });
      });
    };
    e.prototype.updateNecessaryRows = function (e, t) {
      var o;
      var r;
      var n;
      var i;
      var a;
      var l;
      var s;
      var c;
      var d;
      var u;
      var h = new Set();
      try {
        var p = tM(e.prevActiveNodes);
        var f = p.next();
        for (; !f.done; f = p.next()) {
          var v = f.value;
          var y = this.layoutTree.getNode(v);
          if (y && eT(y)) {
            t.add(y);
          }
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          if (f && !f.done && (r = p.return)) {
            r.call(p);
          }
        } finally {
          if (o) {
            throw o.error;
          }
        }
      }
      var g = new Set();
      try {
        var N = tM(e.activeNodes);
        var T = N.next();
        for (; !T.done; T = N.next()) {
          var v = T.value;
          var y = this.layoutTree.getNode(v);
          if (y && eT(y)) {
            h.add(y);
            var R = y.parent;
            if (R) {
              g.add(R);
            }
          }
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          if (T && !T.done && (i = N.return)) {
            i.call(N);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      try {
        var w = tM(g);
        var m = w.next();
        for (; !m.done; m = w.next()) {
          var R = m.value;
          try {
            s = undefined;
            var E = tM(R.children);
            var L = E.next();
            for (; !L.done; L = E.next()) {
              var b = L.value;
              if (eT(b)) {
                h.add(b);
              }
            }
          } catch (e) {
            s = {
              error: e
            };
          } finally {
            try {
              if (L && !L.done && (c = E.return)) {
                c.call(E);
              }
            } finally {
              if (s) {
                throw s.error;
              }
            }
          }
        }
      } catch (e) {
        a = {
          error: e
        };
      } finally {
        try {
          if (m && !m.done && (l = w.return)) {
            l.call(w);
          }
        } finally {
          if (a) {
            throw a.error;
          }
        }
      }
      var C = tV(h);
      try {
        var I = tM(C);
        var S = I.next();
        for (; !S.done; S = I.next()) {
          var b = S.value;
          t.add(b);
        }
      } catch (e) {
        d = {
          error: e
        };
      } finally {
        try {
          if (S && !S.done && (u = I.return)) {
            u.call(I);
          }
        } finally {
          if (d) {
            throw d.error;
          }
        }
      }
      this.filterDead(t);
    };
    e.prototype.filterDead = function (e) {
      var t;
      var o;
      try {
        var r = tM(Array.from(e));
        var n = r.next();
        for (; !n.done; n = r.next()) {
          var i = n.value;
          if (i.node.calculateModel === C.IGNORE || !this.layoutTree.isExistedInLayoutTree(i)) {
            e.delete(i);
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (n && !n.done && (o = r.return)) {
            o.call(r);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
    };
    e.prototype.didChangeNodes = function (e) {
      var t;
      var o;
      var r = this;
      var n = e.changeNodes;
      var i = e.needRePaintNodeSet;
      var a = new Map();
      try {
        var l = tM(n);
        var s = l.next();
        for (; !s.done; s = l.next()) {
          var c = s.value.nodeId;
          var d = this.layoutTree.getNode(c);
          if (!d || !this.layoutTree.isNeedSyncDefaultLayoutNode(d.node.nodeId)) {
            while (d) {
              if (d.node.calculateModel === C.TABLE_ROW) {
                if (d.parent) {
                  var u = a.get(d.parent) || new Set();
                  u.add(d);
                  a.set(d.parent, u);
                }
                break;
              }
              d = d.parent;
            }
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (s && !s.done && (o = l.return)) {
            o.call(l);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      if (a.size) {
        var h = new Set();
        a.forEach(function (e, t) {
          if (r.reconciler.shouldRePaint(t)) {
            e.forEach(function (e) {
              return h.add(e);
            });
          }
        });
        if (h.size) {
          tH(tV(h), function (e) {
            i.add(e);
          }, ["cell", "row"]);
        }
      }
    };
    return e;
  }();
  function tV(e) {
    var t;
    var o;
    var r;
    var n;
    var i = new Set();
    var a = new Set();
    try {
      var l = tM(e);
      var s = l.next();
      for (; !s.done; s = l.next()) {
        var c = s.value;
        if (c.parent) {
          i.add(c.parent);
          a.add(c);
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        if (s && !s.done && (o = l.return)) {
          o.call(l);
        }
      } finally {
        if (t) {
          throw t.error;
        }
      }
    }
    try {
      var d = tM(i);
      var u = d.next();
      for (; !u.done; u = d.next()) {
        var h = u.value;
        (function (e, t, o) {
          var r = e.children;
          var n = r.length;
          var i = 0;
          for (; i < n; i++) {
            var a = i;
            var l = false;
            var s = i;
            for (; i <= s && i < n; i++) {
              var c = r[i];
              s = Math.min(Math.max(s, i + c.children.reduce(function (e, t) {
                return Math.max(e, t.node.rareData?.rowSpan || 1);
              }, 0) - 1), n - 1);
              l = l || t.has(c);
            }
            if (l) {
              for (var d = a; d <= s; d++) {
                o.add(r[d]);
              }
            }
          }
        })(h, e, a);
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        if (u && !u.done && (n = d.return)) {
          n.call(d);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    return a;
  }
  function tH(e, t, o) {
    var r;
    var n;
    var i;
    var a;
    var l;
    var s;
    var c = o.includes("row");
    var d = o.includes("cell");
    var u = o.includes("cell-child");
    var h = o.includes("all-child");
    try {
      var p = tM(e);
      var f = p.next();
      for (; !f.done; f = p.next()) {
        var v = f.value;
        if (c) {
          t(v, "row");
        }
        if (d || u) {
          try {
            i = undefined;
            var y = tM(v.children);
            var g = y.next();
            for (; !g.done; g = y.next()) {
              var N = g.value;
              if (d) {
                t(N, "cell");
              }
              if (u) {
                try {
                  l = undefined;
                  var T = tM(N.children);
                  var R = T.next();
                  for (; !R.done; R = T.next()) {
                    var w = R.value;
                    t(w, "cell-child");
                    if (h) {
                      for (var m = [w]; m.length > 0;) {
                        var E = m.shift();
                        var L = (E == null ? undefined : E.children) || [];
                        var b = 0;
                        for (; b < L.length; b++) {
                          m.push(L[b]);
                          if (h) {
                            t(L[b], "all-child");
                          }
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
                    if (R && !R.done && (s = T.return)) {
                      s.call(T);
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
            i = {
              error: e
            };
          } finally {
            try {
              if (g && !g.done && (a = y.return)) {
                a.call(y);
              }
            } finally {
              if (i) {
                throw i.error;
              }
            }
          }
        }
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        if (f && !f.done && (n = p.return)) {
          n.call(p);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
  }
  var tU = function () {
    function e(e) {
      this.reconciler = e;
      this.ignoreElements = new WeakSet();
    }
    e.prototype.preLayout = function (e) {
      var t = this;
      ep(e.needRecalculateNodes, function (e) {
        var o = e.node;
        var r = e.nodeId;
        var n = t.reconciler.cacheLines.get(r);
        if (n) {
          if (o.node.calculateModel === C.IGNORE) {
            t.ignoreElements.add(n);
            n.dataset.bearVirtualLayoutIgnore = "";
          } else if (t.ignoreElements.has(n)) {
            t.ignoreElements.delete(n);
            delete n.dataset.bearVirtualLayoutIgnore;
          }
        }
      });
    };
    return e;
  }();
  function tF(e, t) {
    var o = typeof Symbol == "function" && e[Symbol.iterator];
    if (!o) {
      return e;
    }
    var r;
    var n;
    var i = o.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
        a.push(r.value);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (o = i.return)) {
          o.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return a;
  }
  function tB() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e = e.concat(tF(arguments[t]));
    }
    return e;
  }
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  E = function (e, t) {
    return (E = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var o in t) {
        if (t.hasOwnProperty(o)) {
          e[o] = t[o];
        }
      }
    })(e, t);
  };
  function tz(e, t) {
    function o() {
      this.constructor = e;
    }
    E(e, t);
    e.prototype = t === null ? Object.create(t) : (o.prototype = t.prototype, new o());
  }
  function tY(e, t) {
    var o = typeof Symbol == "function" && e[Symbol.iterator];
    if (!o) {
      return e;
    }
    var r;
    var n;
    var i = o.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
        a.push(r.value);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (o = i.return)) {
          o.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return a;
  }
  function tj() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e = e.concat(tY(arguments[t]));
    }
    return e;
  }
  var tK = function (e) {
    function t(t) {
      var o = e.call(this) || this;
      o.max = t;
      o.map = new Map();
      if (t < 0) {
        throw Error("max must be greater or equal than 0");
      }
      return o;
    }
    tz(t, e);
    Object.defineProperty(t.prototype, "capacity", {
      get: function () {
        return this.max;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "size", {
      get: function () {
        return this.map.size;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.updateCapacity = function (e) {
      if (e < 0) {
        throw Error("val must be greater or equal than 0");
      }
      this.max = e;
      this.deleteOverflow();
    };
    t.prototype.get = function (e) {
      var t = this.map.get(e);
      if (t !== undefined) {
        this.map.delete(e);
        this.map.set(e, t);
      }
      return t;
    };
    t.prototype.set = function (e, t) {
      if (this.capacity === 0) {
        this.emit("overflow", [[e, t]]);
        return;
      }
      if (this.map.has(e)) {
        this.map.delete(e);
      }
      this.map.set(e, t);
      this.deleteOverflow();
    };
    t.prototype.has = function (e) {
      return this.map.has(e);
    };
    t.prototype.delete = function (e) {
      return this.map.delete(e);
    };
    t.prototype.keys = function () {
      return this.map.keys();
    };
    t.prototype.forEach = function () {
      var e;
      var t = [];
      var o = 0;
      for (; o < arguments.length; o++) {
        t[o] = arguments[o];
      }
      (e = this.map).forEach.apply(e, tj(t));
    };
    t.prototype.deleteOverflow = function () {
      var e = [];
      for (; this.map.size > this.capacity;) {
        var t = this.map.keys().next().value;
        e.push([t, this.map.get(t)]);
        this.map.delete(t);
      }
      if (e.length) {
        this.emit("overflow", e);
      }
    };
    return t;
  }(j);
  function tG(e, t) {
    var o;
    var r;
    var n;
    var i;
    var a = {
      label: 0,
      sent: function () {
        if (n[0] & 1) {
          throw n[1];
        }
        return n[1];
      },
      trys: [],
      ops: []
    };
    i = {
      next: l(0),
      throw: l(1),
      return: l(2)
    };
    if (typeof Symbol == "function") {
      i[Symbol.iterator] = function () {
        return this;
      };
    }
    return i;
    function l(i) {
      return function (l) {
        return function (i) {
          if (o) {
            throw TypeError("Generator is already executing.");
          }
          while (a) {
            try {
              o = 1;
              if (r && (n = i[0] & 2 ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, i[1])).done) {
                return n;
              }
              r = 0;
              if (n) {
                i = [i[0] & 2, n.value];
              }
              switch (i[0]) {
                case 0:
                case 1:
                  n = i;
                  break;
                case 4:
                  a.label++;
                  return {
                    value: i[1],
                    done: false
                  };
                case 5:
                  a.label++;
                  r = i[1];
                  i = [0];
                  continue;
                case 7:
                  i = a.ops.pop();
                  a.trys.pop();
                  continue;
                default:
                  if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                    a = 0;
                    continue;
                  }
                  if (i[0] === 3 && (!n || i[1] > n[0] && i[1] < n[3])) {
                    a.label = i[1];
                    break;
                  }
                  if (i[0] === 6 && a.label < n[1]) {
                    a.label = n[1];
                    n = i;
                    break;
                  }
                  if (n && a.label < n[2]) {
                    a.label = n[2];
                    a.ops.push(i);
                    break;
                  }
                  if (n[2]) {
                    a.ops.pop();
                  }
                  a.trys.pop();
                  continue;
              }
              i = t.call(e, a);
            } catch (e) {
              i = [6, e];
              r = 0;
            } finally {
              o = n = 0;
            }
          }
          if (i[0] & 5) {
            throw i[1];
          }
          return {
            value: i[0] ? i[1] : undefined,
            done: true
          };
        }([i, l]);
      };
    }
  }
  function tZ(e, t) {
    var o = typeof Symbol == "function" && e[Symbol.iterator];
    if (!o) {
      return e;
    }
    var r;
    var n;
    var i = o.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
        a.push(r.value);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (o = i.return)) {
          o.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return a;
  }
  function tJ() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e = e.concat(tZ(arguments[t]));
    }
    return e;
  }
  var tq = function () {
    function e(e) {
      var t = this;
      var o = e.cacheCountLimit;
      var r = e.needStore;
      var n = e.layoutTree;
      var i = e.onError;
      var a = e.onWarning;
      this.storage = new Map();
      this.recycleMap = new Map();
      this.needStore = function (e) {
        return false;
      };
      this.recycleLimit = 5;
      this.weakRefs = new Set();
      this.onError = function () {
        var e = [];
        var t = 0;
        for (; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
      };
      this.onWarning = function () {
        var e = [];
        var t = 0;
        for (; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
      };
      this.updateTimer = null;
      this.recycleTimer = null;
      this.recycle = function (e) {
        var r;
        var n;
        if (e) {
          e.forEach(function (e) {
            var o = tZ(e, 2);
            var r = o[0];
            var n = o[1];
            return t.recycleMap.set(r, n);
          });
        }
        if (t.recycleMap.size && !t.recycleTimer) {
          if ((n = (r = window.navigator?.scheduling) === null || r === undefined ? undefined : r.isInputPending()) === null || n === undefined || !n) {
            for (var i = performance.now(); performance.now() - i < t.recycleLimit && t.recycleMap.size;) {
              var a = tZ(t.recycleMap.entries().next().value, 2);
              var l = a[0];
              var s = a[1];
              t.unmountNode(l, s);
              t.recycleMap.delete(l);
            }
          }
          t.recycleMap.size;
          t.recycleTimer = setTimeout(function () {
            t.recycleTimer = null;
            t.recycle();
          }, 200);
        }
      };
      this.isCheckingLeak = false;
      this.layoutTree = n;
      this.cache = new tK(o === undefined ? 500 : o);
      if (!isUndefinedCheck.isUndefined(r)) {
        this.needStore = r;
      }
      if (i) {
        this.onError = i;
      }
      if (a) {
        this.onWarning = a;
      }
      this.cache.on("overflow", this.recycle);
    }
    Object.defineProperty(e.prototype, "size", {
      get: function () {
        return this.storage.size + this.cache.size;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.has = function (e) {
      return this.storage.has(e) || this.cache.has(e) || this.recycleMap.has(e);
    };
    e.prototype.get = function (e) {
      var o = this.storage.get(e) ?? this.cache.get(e);
      if (!o && this.recycleMap.has(e)) {
        o = this.recycleMap.get(e);
        this.stopRecycling(e);
      }
      return o;
    };
    e.prototype.set = function (e, t) {
      this.storage.set(e, t);
      this.cache.delete(e);
      this.recycleMap.delete(e);
    };
    e.prototype.updateStorage = function () {
      var e = this;
      this.storage.forEach(function (t, o) {
        if (!e.needStore(o)) {
          e.storage.delete(o);
          e.cache.set(o, t);
        }
      });
      this.cache.forEach(function (t, o) {
        if (e.needStore(o)) {
          e.storage.set(o, t);
          e.cache.delete(o);
        }
      });
    };
    e.prototype.delete = function (e, t) {
      var o = this;
      if (t === undefined) {
        t = true;
      }
      if (!Array.isArray(e)) {
        e = [e];
      }
      e.forEach(function (e) {
        var r = o.get(e);
        if (r && t) {
          o.unmountNode(e, r);
        }
        o.storage.delete(e);
        o.cache.delete(e);
      });
    };
    e.prototype.forEach = function () {
      var e;
      var t;
      var o = [];
      var r = 0;
      for (; r < arguments.length; r++) {
        o[r] = arguments[r];
      }
      (e = this.storage).forEach.apply(e, tJ(o));
      (t = this.cache).forEach.apply(t, tJ(o));
    };
    e.prototype.canStore = function (e) {
      return e !== undefined && this.needStore(e) || this.cache.size < this.cache.capacity;
    };
    e.prototype.stopRecycling = function (e) {
      var t = this.recycleMap.get(e);
      if (t) {
        this.set(e, t);
      }
    };
    e.prototype.destroy = function () {
      if (this.updateTimer) {
        clearTimeout(this.updateTimer);
      }
      if (this.recycleTimer) {
        clearTimeout(this.recycleTimer);
      }
      this.cache.off("overflow", this.recycle);
    };
    e.prototype.unmountNode = function (e, t) {
      var o = this.layoutTree.getNode(e);
      if (o) {
        if (this.needStore(e)) {
          this.stopRecycling(e);
          return;
        }
        try {
          reactDomEntryWrapper.unmountComponentAtNode(t);
          this.layoutTree.apply([{
            type: S.MARK_RENDER_DIRTY,
            layoutNodes: [o]
          }]);
        } catch (t) {
          this.onError(t, "CacheManager.recycle", {
            nodeId: e
          });
        }
      }
    };
    e.prototype.updateCacheCapacity = function () {
      var e = this;
      if (!this.updateTimer) {
        this.updateTimer = setTimeout(function () {
          var t = Math.max(e.cacheCountLimit - e.storage.size, 0);
          if (e.cache.capacity !== t) {
            e.cache.updateCapacity(t);
            e.checkOutOfLimit();
            e.checkLeak();
          }
          e.updateCacheCapacity();
          e.updateTimer = null;
        }, 30000);
      }
    };
    e.prototype.checkOutOfLimit = function () {
      if (this.storage.size > this.cacheCountLimit) {
        this.onWarning(Error("dom store count out of limit"), "CacheManager.checkOutOfLimit", {
          cacheCountLimit: this.cacheCountLimit,
          storageSize: this.storage.size
        });
      }
    };
    e.prototype.checkLeak = function () {
      var e;
      var t;
      var o;
      var r;
      e = this;
      t = undefined;
      o = undefined;
      r = function () {
        var e;
        var t;
        var o;
        var r = this;
        return tG(this, function (n) {
          switch (n.label) {
            case 0:
              if (this.isCheckingLeak) {
                return [2];
              }
              this.isCheckingLeak = true;
              return [4, new Promise(function (e) {
                setTimeout(e, 30000);
              })];
            case 1:
              n.sent();
              e = 0;
              this.weakRefs.forEach(function (t) {
                if (t.deref()) {
                  e++;
                } else {
                  r.weakRefs.delete(t);
                }
              });
              t = this.storage.size + this.cache.size;
              if (e > t) {
                o = {
                  count: e,
                  expectCount: t
                };
                this.onError(Error("has elements not been collect"), "CacheManager.checkLeak", o);
              }
              this.isCheckingLeak = false;
              return [2];
          }
        });
      };
      return new (o ||= Promise)(function (n, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function l(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          if (e.done) {
            n(e.value);
          } else {
            ((t = e.value) instanceof o ? t : new o(function (e) {
              e(t);
            })).then(a, l);
          }
        }
        s((r = r.apply(e, t || [])).next());
      });
    };
    return e;
  }();
  function tQ() {
    return (tQ = Object.assign || function (e) {
      var t;
      var o = 1;
      var r = arguments.length;
      for (; o < r; o++) {
        for (var n in t = arguments[o]) {
          if (Object.prototype.hasOwnProperty.call(t, n)) {
            e[n] = t[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function tX(e, t, o, r) {
    return new (o ||= Promise)(function (n, i) {
      function a(e) {
        try {
          s(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function l(e) {
        try {
          s(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function s(e) {
        var t;
        if (e.done) {
          n(e.value);
        } else {
          ((t = e.value) instanceof o ? t : new o(function (e) {
            e(t);
          })).then(a, l);
        }
      }
      s((r = r.apply(e, t || [])).next());
    });
  }
  function t$(e, t) {
    var o;
    var r;
    var n;
    var i;
    var a = {
      label: 0,
      sent: function () {
        if (n[0] & 1) {
          throw n[1];
        }
        return n[1];
      },
      trys: [],
      ops: []
    };
    i = {
      next: l(0),
      throw: l(1),
      return: l(2)
    };
    if (typeof Symbol == "function") {
      i[Symbol.iterator] = function () {
        return this;
      };
    }
    return i;
    function l(i) {
      return function (l) {
        return function (i) {
          if (o) {
            throw TypeError("Generator is already executing.");
          }
          while (a) {
            try {
              o = 1;
              if (r && (n = i[0] & 2 ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, i[1])).done) {
                return n;
              }
              r = 0;
              if (n) {
                i = [i[0] & 2, n.value];
              }
              switch (i[0]) {
                case 0:
                case 1:
                  n = i;
                  break;
                case 4:
                  a.label++;
                  return {
                    value: i[1],
                    done: false
                  };
                case 5:
                  a.label++;
                  r = i[1];
                  i = [0];
                  continue;
                case 7:
                  i = a.ops.pop();
                  a.trys.pop();
                  continue;
                default:
                  if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                    a = 0;
                    continue;
                  }
                  if (i[0] === 3 && (!n || i[1] > n[0] && i[1] < n[3])) {
                    a.label = i[1];
                    break;
                  }
                  if (i[0] === 6 && a.label < n[1]) {
                    a.label = n[1];
                    n = i;
                    break;
                  }
                  if (n && a.label < n[2]) {
                    a.label = n[2];
                    a.ops.push(i);
                    break;
                  }
                  if (n[2]) {
                    a.ops.pop();
                  }
                  a.trys.pop();
                  continue;
              }
              i = t.call(e, a);
            } catch (e) {
              i = [6, e];
              r = 0;
            } finally {
              o = n = 0;
            }
          }
          if (i[0] & 5) {
            throw i[1];
          }
          return {
            value: i[0] ? i[1] : undefined,
            done: true
          };
        }([i, l]);
      };
    }
  }
  function t0(e, t) {
    var o = typeof Symbol == "function" && e[Symbol.iterator];
    if (!o) {
      return e;
    }
    var r;
    var n;
    var i = o.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
        a.push(r.value);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (o = i.return)) {
          o.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return a;
  }
  function t1() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e = e.concat(t0(arguments[t]));
    }
    return e;
  }
  function t2(e) {
    var t = typeof Symbol == "function" && Symbol.iterator;
    var o = t && e[t];
    var r = 0;
    if (o) {
      return o.call(e);
    }
    if (e && typeof e.length == "number") {
      return {
        next: function () {
          if (e && r >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  var t3 = function () {
    function e(e) {
      var t = this;
      this.renderUnits = new Map();
      this.viewportNodes = [];
      this.bufferNodes = [];
      this.isScrollingUp = false;
      this.viewportTopOnScrollStart = 0;
      this.fastScrollDistanceFactor = 0;
      this.isSSR = false;
      this.enableScrollNodeAnchor = false;
      this.enableFirstNodeCheck = false;
      this.viewportLockBehaviorWhenScrolling = F.ENABLED_AUTO_UPDATE_SCROLL_TOP;
      this.activeNodes = new Set();
      this.mountNodes = [];
      this.getRemainActiveNodes = function () {
        return [];
      };
      this.onActiveChanged = function () {
        return null;
      };
      this.onBufferChanged = function () {
        return null;
      };
      this.onViewportChanged = function () {
        return null;
      };
      this.extraDirtyRangeToBeUpdateWhenScrollUp = 0;
      this.onPaint = function () {};
      this.onPostPaint = function () {};
      this.onPostDidChangeNodes = function () {};
      this.onScrollStart = function () {
        return null;
      };
      this.onScrollEnd = function () {
        return null;
      };
      this.useResizeObserverLock = false;
      this.onLockNodeHeight = function () {
        return null;
      };
      this.onUnlockNodeHeight = function () {
        return null;
      };
      this.onWarning = function () {};
      this.domApi = {
        getBoundingClientRect: function (e) {
          return e.getBoundingClientRect();
        },
        getClientHeight: function (e) {
          return (e == null ? undefined : e.clientHeight) || 0;
        },
        getComputedStyle: function (e) {
          if (e) {
            var t = window.getComputedStyle(e);
            var o = parseFloat(t.marginTop) || 0;
            var r = parseFloat(t.marginBottom) || 0;
            var n = parseFloat(t.marginLeft) || 0;
            var i = parseFloat(t.marginRight) || 0;
            var a = parseFloat(t.height) || 0;
            return {
              marginTop: o,
              marginBottom: r,
              marginLeft: n,
              marginRight: i,
              width: parseFloat(t.width) || 0,
              height: a
            };
          }
          return {
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            width: 0,
            height: 0
          };
        },
        getPlaceholderStyle: function (e) {
          return e;
        }
      };
      this.onError = function () {};
      this.isForceLayoutForAll = false;
      this.cacheLines = new Map();
      this.tableStructCacheLines = new Map();
      this.virtualCacheLines = new Map();
      this.viewportVisibilityObserver = null;
      this.sliceMountThreshold = 0;
      this.didChangeNodesRecord = [];
      this.didChangeNodesRecordStoreSize = 0;
      this.autoFixedMode = W.Normal;
      this.additionalActiveBlocks = new Set();
      this.getForceActiveNodes = function () {
        return Array.from(t.additionalActiveBlocks);
      };
      this.viewportMap = new Map();
      this.retainNodes = new Set();
      this.scrollPaintLimit = 100;
      this.activeNodesInBufferRange = new Set();
      this.rawPaint = function (e, o) {
        var r;
        var n = t.activeNodes;
        var i = t.viewport.viewportData;
        var a = i.top;
        var l = 0;
        var s = t.calculateViewportActivation(e);
        var c = s.bufferNodes;
        var d = s.viewportNodes;
        var u = s.needMountNodes;
        var h = s.needRecalculateNodes;
        var p = s.activeNodes;
        var f = s.noSliceMountNodes;
        function v(e) {
          t.pluginManager.call("postCalcViewport", e);
          t.pluginManager.call("preReadonlyPostCalcViewport", e);
          t.pluginManager.call("readonlyPostCalcViewport", e);
        }
        v({
          viewportNodes: d,
          activeNodes: p,
          needMountNodes: u,
          needRecalculateNodes: h,
          prevActiveNodes: n,
          noSliceMountNodes: f,
          isFirstTime: true,
          viewportTop: a,
          fromScrolling: e,
          fromSliceCheck: e
        });
        function y() {
          if (e) {
            var o = t.paintManager.sliceRender(h).renderedNodeSet;
            var r = [];
            o.forEach(function (e) {
              p.add(e.node.nodeId);
              eh(e, u);
              eh(e, r);
            });
            h = r;
          } else {
            t.paintManager.fullRender(h);
          }
          var a = t.pluginManager.getNodesThatStayOnDomWhenLayout({
            viewportNodes: d,
            activeNodes: p,
            needMountNodes: u,
            needRecalculateNodes: h,
            prevActiveNodes: n
          });
          t.layout({
            needRecalculateNodes: h,
            needMountNodes: u,
            depthOneRetainNodes: a,
            viewportNodes: d,
            viewportData: i
          });
        }
        function g() {
          var e;
          c = (e = t.calculateViewportActivation()).bufferNodes;
          d = e.viewportNodes;
          u = e.needMountNodes;
          h = e.needRecalculateNodes;
          p = e.activeNodes;
          f = e.noSliceMountNodes;
          v({
            viewportNodes: d,
            activeNodes: p,
            needMountNodes: u,
            needRecalculateNodes: h,
            prevActiveNodes: n,
            noSliceMountNodes: f,
            isFirstTime: false,
            viewportTop: a
          });
        }
        if (e) {
          var N = t.paintManager.findSingleRenderNode(h);
          if (N) {
            h.length = 0;
            eh(N, h);
            eh(N, u);
          }
          y();
        } else {
          while (l <= 20 && h.find(function (e) {
            return e && e.size;
          })) {
            y();
            g();
            l++;
          }
        }
        t.ensureInactiveNodeLayoutInfoCorrect(p);
        t.pluginManager.call("preMount", {
          viewportNodes: d,
          activeNodes: p,
          needMountNodes: u,
          needRecalculateNodes: h,
          prevActiveNodes: n,
          fromScrolling: e
        });
        if (!e) {
          var T = {
            viewportNodes: d,
            bufferNodes: c,
            activeNodes: p,
            needMountNodes: u,
            prevActiveNodes: n,
            noSliceMountNodes: f
          };
          d = (r = t.handleSliceMount(T)).viewportNodes;
          c = r.bufferNodes;
          p = r.activeNodes;
          u = r.needMountNodes;
        }
        t.pluginManager.call("readonlyPreMount", {
          viewportNodes: d,
          activeNodes: p,
          needMountNodes: u,
          needRecalculateNodes: h,
          prevActiveNodes: n
        });
        var R = t.collectEachPaintLayoutRecalculateNodesPlugin;
        t.mount(u);
        var w = new Set(t.getViewportNodes().filter(function (e) {
          return n.has(e);
        }));
        t.viewportNodes = d;
        t.bufferNodes = c;
        t.mountNodes = u;
        t.activeNodes = p;
        var m = new Set(t.getViewportNodes());
        if (t.fg.enableVirtualMemoryOptimize) {
          var E = t.activeNodesInBufferRange;
          t.refreshActiveNodesInBufferRange();
          var L = t.activeNodesInBufferRange;
          t.callChangedEvent(E, L, "buffer");
          t.callChangedEvent(n, p, "active");
        } else {
          t.callChangedEvent(n, p, "buffer");
        }
        t.callChangedEvent(w, m, "viewport");
        t.onPaint({
          layoutRecalculatedNodes: R.getLayoutRecalculatedNodes(),
          topToRootRecalculatedNodes: R.getTopToRootRecalculatedNodes(),
          viewportLock: !!t.viewportLockPlugin.shouldLock && !!t.viewportLockPlugin.getViewportAnchorInfos(),
          isScrollPaint: t.viewport.isScrolling()
        });
        if (t.fg.enableVirtualMemoryOptimize && t.cacheLines instanceof tq) {
          t.cacheLines.updateStorage();
        }
        if (e) {
          g();
          if (h.find(function (e) {
            return e && e.size;
          }) && t.scrollPaintLimit >= 0) {
            t.scrollPaintLimit--;
            if (o) {
              t.debounceRAFPaint();
            } else {
              t.debouncePaint();
            }
          } else {
            t.isInScrollPainting = false;
          }
        }
      };
      this.renderNodeIfDirty = function (e) {
        if (!Array.isArray(e)) {
          return t.renderNodeIfDirty([e]);
        }
        t.tracker.addContext(((o = {})[P.IDLE_RENDER_NODE] = [e], o));
        var o;
        var r = [];
        e.forEach(function (e) {
          if (e.parent && e.isDirty(1)) {
            eh(e, r);
          }
        });
        t.paintManager.fullRender(r);
      };
      this.renderNodeById = function (e) {
        return tX(t, undefined, undefined, function () {
          var t;
          var o;
          var r = this;
          return t$(this, function (n) {
            switch (n.label) {
              case 0:
                if (!Array.isArray(e)) {
                  return [2, this.renderNodeById([e])];
                }
                this.tracker.addContext(((o = {})[P.RENDER_NODE_BY_ID] = [e], o));
                return [4, Promise.resolve()];
              case 1:
                n.sent();
                t = e.map(function (e) {
                  return r.layoutTree.getNode(e);
                }).filter(Boolean);
                this.renderNodeIfDirty(t);
                return [2];
            }
          });
        });
      };
      this.renderNodeByIdSync = function (e) {
        if (!Array.isArray(e)) {
          t.renderNodeByIdSync([e]);
          return;
        }
        t.tracker.addContext(((o = {})[P.RENDER_NODE_BY_ID_SYNC] = [e], o));
        var o;
        var r = e.map(function (e) {
          return t.layoutTree.getNode(e);
        }).filter(Boolean);
        t.renderNodeIfDirty(r);
      };
      this.nodesMergeToNeedRecalculateNodes = function (e, o = []) {
        e.forEach(function (e) {
          if (t.layoutTree.isExistedInLayoutTree(e)) {
            eh(e, o);
          }
        });
        return o;
      };
      this.combineChangeNodes = function (e, t) {
        if (e) {
          return [Array.from(new Set(e[0].concat(t[0])))];
        } else {
          return t;
        }
      };
      this.reRender = function (e) {
        var o = t.nodesMergeToNeedRecalculateNodes(e);
        t.paintManager.fullRender(o);
      };
      this.debounceRender = J(this.reRender, {
        combineArgsFn: this.combineChangeNodes,
        recursiveCallStrategy: "immediate"
      });
      this.isInPainting = false;
      this.isInScrollPainting = false;
      this.debounceRAFPaint = function (e, t = {}) {
        var o;
        var r = t.eachCallFunction;
        function n() {
          var t = [];
          var n = 0;
          for (; n < arguments.length; n++) {
            t[n] = arguments[n];
          }
          if (r) {
            r();
          }
          cancelAnimationFrame(o);
          o = requestAnimationFrame(function () {
            try {
              e.apply(undefined, Z(t));
            } catch (e) {}
          });
        }
        n.cancel = function () {
          cancelAnimationFrame(o);
        };
        return n;
      }(function (e) {
        var o = e === undefined ? {} : e;
        var r = o.disableSlice;
        var n = o.mustSlice;
        t.invokeRawPaint({
          isSlice: t.isSlice(r, n),
          nextRAF: true
        });
      }, {
        eachCallFunction: function () {
          return t.tracker.recordTriggerDebouncePaint();
        }
      });
      this.debouncePaint = J(function (e) {
        var o = e === undefined ? {} : e;
        var r = o.disableSlice;
        var n = o.mustSlice;
        t.invokeRawPaint({
          isSlice: t.isSlice(r, n),
          nextRAF: t.viewport.isScrolling()
        });
      }, {
        eachCallFunction: function () {
          return t.tracker.recordTriggerDebouncePaint();
        }
      });
      this.forcePaint = debounceUtil_1_1.debounce(this.debouncePaint, 500);
      this.addViewportVisibilityObserve = function (e) {
        if (t.viewportVisibilityObserver) {
          e.forEach(function (e) {
            return t.viewportVisibilityObserver.observe(e);
          });
        }
      };
      this.addViewportVisibilityObserveByIds = function (e) {
        if (t.viewportVisibilityObserver) {
          e.forEach(function (e) {
            var o = t.cacheLines.get(e);
            if (o) {
              t.viewportVisibilityObserver.observeById(e, o);
            }
          });
        }
      };
      this.removeViewportVisibilityObserve = function (e) {
        if (t.viewportVisibilityObserver) {
          e.forEach(function (e) {
            return t.viewportVisibilityObserver.unobserve(e);
          });
        }
      };
      this.removeViewportVisibilityObserveByIds = function (e) {
        if (t.viewportVisibilityObserver) {
          e.forEach(function (e) {
            return t.viewportVisibilityObserver.unobserveById(e);
          });
        }
      };
      this.getViewportNodes = function () {
        return t.viewportNodes.map(function (e) {
          return e.node.nodeId;
        });
      };
      this.updateViewportNodes = function () {
        t.viewport.updateRect();
        var e = t.calculateViewportActivation().viewportNodes;
        t.viewportNodes = e;
      };
      this.getBufferNodes = function () {
        return t.bufferNodes.map(function (e) {
          return e.node.nodeId;
        });
      };
      this.getActiveNodes = function () {
        return t.activeNodes;
      };
      this.getContentAboveRootHeight = function () {
        return t.viewport.getContentAboveRootHeight();
      };
      this.didChangeNodesPool = [];
      this.didChangeNodes = function (e, o) {
        t.didChangeNodesPool.push({
          changeNodes: e,
          hasLocalUserOperation: o
        });
        if (!(t.didChangeNodesPool.length > 1)) {
          t.didChangeNodesImpl();
        }
      };
      this.didChangeNodesImpl = function () {
        if (t.didChangeNodesPool.length) {
          var e;
          var o = t.didChangeNodesPool[0];
          var r = o.changeNodes;
          var n = o.hasLocalUserOperation;
          if (!t.fg.disableVirtualDidUpdateNest) {
            t.didChangeNodesPool.shift();
          }
          t.tracker.addContext(((e = {})[P.DID_CHANGE_NODE] = [r, n], e));
          if (t.autoFixedMode === W.WithDidChangeNodes && t.didChangeNodesRecordStoreSize) {
            if (t.didChangeNodesRecord.length >= t.didChangeNodesRecordStoreSize) {
              t.didChangeNodesRecord.shift();
            }
            t.didChangeNodesRecord.push(r);
          }
          var i = t.layoutTree.rootLayoutNode.node.nodeId;
          var a = r.filter(function (e) {
            return e.nodeId !== i || !!(e.modifications = e.modifications.filter(function (e) {
              return ["insertChild", "deleteChild"].includes(e.action);
            })).length;
          });
          t.pluginManager.call("preDidChangeNodes", {
            viewportNodes: t.viewportNodes,
            viewportTop: t.viewport.viewportData.top,
            hasLocalUserOperation: n
          });
          var l = t.updateChildren(a);
          var s = l.needRePaintNodeSet;
          var c = {
            changeNodes: a,
            needRePaintNodeSet: s,
            nearestRootNodeTopToRoot: l.nearestRootNodeTopToRoot
          };
          if (s.size) {
            t.updateRenderUnits();
            t.viewportLockPlugin.setViewportAnchorInfosByTmpIfNeeded();
            t.syncDefaultLayoutIfNeeded(n);
            Array.from(s).forEach(function (e) {
              if (!t.shouldRePaint(e)) {
                s.delete(e);
                t.nodeHeightChangePlugin.deleteNode(e.node.nodeId, B.DID_CHANGE_NODE);
              }
            });
            t.debouncePaint({
              disableSlice: true
            });
          }
          t.pluginManager.call("didChangeNodes", c);
          s.forEach(function (e) {
            return t.handleNodeHeightChangeImpl(e.node.nodeId, {
              from: B.DID_CHANGE_NODE,
              hasLocalUserOperation: n,
              disablePaint: true
            });
          });
          t.pluginManager.call("postDidChangeNodes", c);
          t.onPostDidChangeNodes({
            needRepaint: !!s.size
          });
          t.didChangeNodesPool.shift();
          if (t.didChangeNodesPool.length > 0) {
            t.didChangeNodesImpl();
          }
        }
      };
      this.handleRenderLineCacheDelete = function (e, o) {
        function r(e, o) {
          var r;
          var n = t.layoutTree.getNode(e);
          if ((!n || !t.layoutTree.isExistedInLayoutTree(n) || !t.cacheLines.has(e)) && o) {
            if (o.renderView) {
              reactDomEntryWrapper.unmountComponentAtNode(o.renderView);
            }
            if (o.renderUnit) {
              t.unregisterRenderUnit(e);
            }
          }
          if ((r = t.renderLineCacheStrategy) !== null && r !== undefined) {
            r.delete(e);
          }
        }
        r(e, o);
        var n = t.layoutTree.getNode(e);
        if (n) {
          t.layoutTree.traverseAllDescendants(n, function (e) {
            var o;
            r(e.node.nodeId, (o = t.renderLineCacheStrategy) === null || o === undefined ? undefined : o.get(e.node.nodeId));
          });
        }
      };
      this.updateViewport = function (e) {
        var o;
        var r = e === undefined ? {} : e;
        var n = r.prevRect;
        var i = n === undefined ? t.viewport.viewportData : n;
        var a = r.currRect;
        var l = a === undefined ? t.viewport.viewportData : a;
        var s = r.isSyncPaint;
        var c = i.top;
        var d = l.top;
        t.isScrollingUp = d < c;
        var u = t.viewport.isScrolling();
        if (!u) {
          t.viewportTopOnScrollStart = d;
        }
        if (t.isScrollingUp && t.extraDirtyRangeToBeUpdateWhenScrollUp) {
          t.pluginManager.addPluginForNextPaint(new e9(t, l, t.extraDirtyRangeToBeUpdateWhenScrollUp));
        }
        if ((o = t.idleWorker) !== null && o !== undefined) {
          o.enterNormalRenderMode();
        }
        t.scrollPaintLimit = 100;
        if (s !== undefined && s) {
          t.syncPaint();
        } else if (u) {
          t.debounceRAFPaint({
            disableSlice: t.disableSlice
          });
        } else {
          t.debouncePaint({
            disableSlice: t.disableSlice
          });
        }
      };
      this.handleScrollStart = function () {
        t.onScrollStart();
      };
      this.handleScrollEnd = function () {
        var e;
        var o = t.viewportTopOnScrollStart;
        var r = t.viewport.viewportData;
        var n = r.top;
        var i = r.height;
        t.viewportTopOnScrollStart = n;
        t.isScrollingUp = false;
        t.lockHeightPlugin.handleScrollEnd();
        if (t.fastScrollDistanceFactor) {
          var a = n - o;
          if (Math.abs(a) > i * t.fastScrollDistanceFactor) {
            if ((e = t.idleWorker) !== null && e !== undefined) {
              e.enterFastRenderMode(a < 0);
            }
          }
        }
        t.onScrollEnd();
      };
      this.handleWarning = function () {
        var e = [];
        var o = 0;
        for (; o < arguments.length; o++) {
          e[o] = arguments[o];
        }
        t.onWarning.apply(t, t1(e));
      };
      this.handleError = function () {
        var e = [];
        var o = 0;
        for (; o < arguments.length; o++) {
          e[o] = arguments[o];
        }
        t.onError.apply(t, t1(e));
      };
      this.enterForceLayoutForAll = function () {
        return tX(t, undefined, undefined, function () {
          var e;
          return t$(this, function (t) {
            switch (t.label) {
              case 0:
                this.tracker.addContext(((e = {})[P.ENTER_FORCE_LAYOUT_FOR_ALL] = [], e));
                this.isForceLayoutForAll = true;
                return [4, this.debouncePaint()];
              case 1:
                t.sent();
                return [2];
            }
          });
        });
      };
      this.quitForceLayoutForAll = function () {
        return tX(t, undefined, undefined, function () {
          var e;
          return t$(this, function (t) {
            switch (t.label) {
              case 0:
                this.tracker.addContext(((e = {})[P.QUIT_FORCE_LAYOUT_FOR_ALL] = [], e));
                this.isForceLayoutForAll = false;
                return [4, this.debouncePaint()];
              case 1:
                t.sent();
                return [2];
            }
          });
        });
      };
      this.renderNearbyElements = function (e) {
        return tX(t, undefined, undefined, function () {
          var t;
          return t$(this, function (o) {
            switch (o.label) {
              case 0:
                if (!(t = this.getLayoutTree().getNode(e)) || !this.getLayoutTree().isExistedInLayoutTree(t)) {
                  return [2];
                }
                this.lockHeightPlugin.unlockAncestorHeight(t);
                if (this.getActiveNodes().has(e)) {
                  return [3, 2];
                }
                this.viewport.scrollToNodePlugin.enable(e);
                return [4, this.debouncePaint({
                  disableSlice: true
                })];
              case 1:
                o.sent();
                o.label = 2;
              case 2:
                return [2];
            }
          });
        });
      };
      var o = e.disableSlice;
      var r = e.viewportOptions;
      var n = e.enableNewRetain;
      var i = e.fg;
      this.fg = i === undefined ? {} : i;
      this.disableSlice = o !== undefined && o;
      this.layoutTree = new eg(this);
      this.preRenderer = new e3(this);
      this.tracker = new eM(this);
      this.viewport = new e0(this, r);
      this.tracker.enableTracker();
      this.pluginManager = new e7(this.layoutTree);
      (function (e, t, o) {
        var r = o.useNewRetain;
        var n = o.onError;
        var i = e.getLayoutTree();
        var a = e.cacheLines;
        var l = new tA(e.viewport.getViewportHelper(), i, e, function () {
          var t;
          if ((t = e.onViewportLocked) !== null && t !== undefined) {
            t.call(e);
          }
        }, n, e.fg.useNoLayoutAnchorLock, e.fg.clearAnchorWhenNotInViewport);
        var s = new tD({
          reconciler: e,
          layoutTree: i,
          cacheLines: a,
          onLockNodeHeight: function (t, o) {
            e.onLockNodeHeight(t, o);
          },
          onUnlockNodeHeight: function (t, o) {
            e.onUnlockNodeHeight(t, o);
            e.handleNodeHeightChangeImpl(o);
            l.forbiddenChildrenBecomeAnchorNode(o);
          },
          isAboveViewport: function (t) {
            if (e.getViewportData().top === 0) {
              return false;
            }
            var o = i.getNode(t);
            return !!o && !!(o.getTopToRoot() + o.node.height <= e.getViewportData().top);
          },
          isScrolling: function () {
            return e.viewport.isScrolling();
          }
        });
        var c = new tP(i);
        var d = [];
        if (!e.fg.enableVirtualMemoryOptimize) {
          var u = new t_({
            layoutTree: i,
            cacheLines: a,
            isLockedHeight: function (e) {
              return s.isLockedHeight(e);
            },
            addViewportVisibilityObserveByIds: e.addViewportVisibilityObserveByIds,
            removeViewportVisibilityObserveByIds: e.removeViewportVisibilityObserveByIds,
            useNewRetain: r
          });
          d.push(u);
          e.setPlugin("retainPlugin", u);
        }
        var h = new te(i);
        t.addPlugin(tB([new tk(e), new tx(e, i)], d, [l, s, new tU(e), c, e.tracker.trackerPlugin]));
        e.setPlugin("lockHeightPlugin", s);
        e.setPlugin("nodeHeightChangePlugin", h);
        e.setPlugin("viewportLockPlugin", l);
        e.setPlugin("collectEachPaintLayoutRecalculateNodesPlugin", c);
      })(this, this.pluginManager, {
        useNewRetain: n,
        onError: this.handleError
      });
    }
    e.prototype.setPlugin = function (e, t) {
      this[e] = t;
    };
    e.prototype.init = function (e) {
      var t;
      var o;
      var r = this;
      var n = e.rootId;
      var i = e.layoutNodeConfigs;
      var a = e.enableIdleWorker;
      var l = e.enableCheckViewportVisibility;
      var s = e.bufferRange;
      var c = e.trackerStoreSize;
      var d = e.autoFixedMode;
      var u = e.didChangeNodesRecordStoreSize;
      var h = e.renderLimitTime;
      var p = e.idleRenderOptions;
      var f = e.overwriteDOMApi;
      var v = e.renderLineCacheStrategy;
      var y = e.onInit;
      var g = e.scheduler;
      var N = e.scroller;
      var T = e.onSetScrollTop;
      var R = e.viewportLockConfig;
      var w = e.cacheOptions;
      var m = w === undefined ? {} : w;
      var E = e.getDeactiveNodeStyle;
      var L = e.disableSetScrollTopWhenScrolling;
      var b = e.viewportLockBehaviorWhenScrolling;
      if (b !== undefined) {
        this.viewportLockBehaviorWhenScrolling = b;
      } else if (L) {
        this.viewportLockBehaviorWhenScrolling = F.DISABLED_AUTO_UPDATE_SCROLL_TOP;
      }
      Object.assign(this, objectPathFilterUtil.filterObjectByPaths(e, function (e, t) {
        return new Set(["isSSR", "enableForceSetScrollTop", "enablePlaceholderHorizontalStyle", "enableFirstNodeCheck", "enableScrollNodeAnchor", "onScrollStart", "onScrollEnd", "enableVirtualRender", "getRemainActiveNodes", "onActiveChanged", "onBufferChanged", "onViewportChanged", "onPaint", "onPostPaint", "onPostDidChangeNodes", "onViewportLocked", "extraDirtyRangeToBeUpdateWhenScrollUp", "onLockNodeHeight", "onUnlockNodeHeight", "sliceMountThreshold", "onWarning", "onError", "onPerfMatricUpdate", "useResizeObserverLock"]).has(t) && e !== undefined;
      }));
      var C = this.layoutTree;
      if (this.isSSR) {
        C.buildLayoutTree(n, i);
        this.disableIdleWorker();
        return;
      }
      var I = m.cacheCountLimit;
      var S = m.needStore;
      if (this.fg.enableVirtualMemoryOptimize) {
        this.cacheLines = new tq({
          layoutTree: C,
          cacheCountLimit: I,
          onWarning: this.handleWarning,
          onError: this.handleError,
          needStore: function (e) {
            return r.activeNodes.has(e) || (S == null ? undefined : S(e)) || false;
          }
        });
      }
      if (R) {
        this.viewportLockPlugin.updateConfig(R);
      }
      C.buildLayoutTree(n, i);
      this.viewport.init(N, {
        onScrollEnd: this.handleScrollEnd,
        onScrollStart: this.handleScrollStart,
        onSetScrollTop: T
      });
      this.paintManager = new tf({
        reconciler: this,
        onPaintError: this.handleError
      });
      this.paintManager.setRenderLimitTime(h === undefined ? 16 : h);
      if (c) {
        this.tracker.setStoreSize(c);
      }
      this.setBufferRange(s);
      this.domApi = Object.assign(this.domApi, f || {});
      if (E) {
        if ((t = this.retainPlugin) !== null && t !== undefined) {
          t.updateGetDeactiveNodeStyle(E);
        }
      }
      this.activeNodes.add(n);
      this.preRenderer.attach();
      this.initIdleWorker({
        enableIdleWorker: a !== undefined && a,
        idleRenderOptions: p,
        scheduler: g
      });
      if (this.enableVirtualRender && l) {
        this.autoFixedMode = d ?? W.Normal;
        this.didChangeNodesRecordStoreSize = u ?? 0;
        this.observeViewportVisibility();
      }
      this.renderLineCacheStrategy = v;
      if ((o = this.renderLineCacheStrategy) !== null && o !== undefined) {
        o.onAutoDelete(this.handleRenderLineCacheDelete);
      }
      if (y) {
        y();
      }
    };
    e.prototype.initViewportLocker = function () {
      if (tb(this.useResizeObserverLock)) {
        this.viewportLockPlugin.init();
      }
    };
    e.prototype.initIdleWorker = function (e) {
      var t;
      var o;
      var r = this;
      var n = e.enableIdleWorker;
      var i = e.idleRenderOptions;
      var a = e.scheduler;
      var l = this.layoutTree;
      t = false;
      function s(e) {
        if (!t) {
          t = true;
          Promise.resolve().then(function () {
            try {
              e();
            } catch (e) {} finally {
              t = false;
            }
          });
        }
      }
      var c = new ej({
        finderConfig: {
          getChildren: function (e) {
            if (!r.idleWorker.isRenderRangeEnabled() && (e.node.calculateModel === C.IGNORE || e.node.calculateModel === C.IGNORE_CHILDREN || e.isRenderDisabled())) {
              return [];
            } else {
              return e.children;
            }
          },
          getParent: function (e) {
            return e.parent;
          },
          getIsRendered: function (e) {
            return !e.isDirty(1);
          },
          getRect: function (e) {
            return {
              height: e.node.height,
              y: e.getTopToRoot()
            };
          },
          getViewPort: function () {
            var e = r.viewport.viewportData;
            return {
              height: e.height,
              y: e.top
            };
          },
          getIsRenderDisabled: function (e) {
            return e.isRenderDisabled();
          },
          getIsIgnored: function (e) {
            return e.node.calculateModel === C.IGNORE;
          },
          getIdleRenderConfig: function (e) {
            return e.getIdleConfig();
          }
        },
        root: l.rootLayoutNode,
        render: function (e) {
          var t = Date.now();
          r.renderNodeIfDirty([e]);
          if (r.fg.enableVirtualMemoryOptimize && r.cacheLines instanceof tq) {
            r.cacheLines.updateStorage();
          }
          s(function () {
            var e;
            if ((e = r.onPerfMatricUpdate) !== null && e !== undefined) {
              e.call(r, {
                duration: Date.now() - t,
                type: "idleRenderEnd"
              });
            }
          });
        },
        errorHandler: (o = new Map(), function (e) {
          var n;
          var a = o.get(e.message) ?? 0;
          if (!(a >= 5)) {
            o.set(e.message, a + 1);
            r.onError(e, "idleRender", {
              paintError: r.tracker.getLastPaintErrorMessage(),
              documentStructs: JSON.stringify(t1(((n = r.tracker.getDocumentStructsInfo()) === null || n === undefined ? undefined : n.values()) ?? []))
            });
          }
        }),
        scheduler: a
      });
      this.idleWorker = c;
      c.root = l.rootLayoutNode;
      if (n) {
        this.pluginManager.addPlugin(new tc(c));
        if (i) {
          this.fastScrollDistanceFactor = i.fastScrollDistanceFactor;
          c.updateIdleRenderOptions(i);
          c.enterNormalRenderMode();
        }
      } else {
        this.disableIdleWorker();
      }
    };
    e.prototype.isUserAnchorLocking = function () {
      return this.viewportLockPlugin.isUserAnchorLocking();
    };
    e.prototype.getCanLazyIdleRender = function (e) {
      return !e.hasConfig(8) || e.hasConfig(128);
    };
    e.prototype.getCanSkipIdle = function (e) {
      return !!this.fg.enableVirtualMemoryOptimize && this.cacheLines instanceof tq && !this.cacheLines.canStore(e.node.nodeId);
    };
    e.prototype.registerViewport = function (e, t) {
      if (!this.viewportMap.has(e.node.nodeId)) {
        for (var o = e; o;) {
          if (this.viewportMap.get(o.node.nodeId)) {
            return;
          }
          o = o.parent;
        }
        var r = new ty(this, tQ({
          rootNode: e
        }, t));
        this.viewportMap.set(e.node.nodeId, r);
      }
    };
    e.prototype.setDisableSlice = function (e) {
      this.disableSlice = e;
    };
    e.prototype.registerVirtualCacheLine = function (e, t) {
      this.virtualCacheLines.set(e, t);
    };
    e.prototype.removeVirtualCacheLine = function (e) {
      this.virtualCacheLines.delete(e);
    };
    e.prototype.getVirtualCacheLine = function (e) {
      return this.virtualCacheLines.get(e);
    };
    Object.defineProperty(e.prototype, "bufferPixel", {
      get: function () {
        var e = this.enableVirtualRender;
        var t = this.bufferRange;
        if (!e || this.isForceLayoutForAll) {
          return Infinity;
        } else if (t !== undefined) {
          return t;
        } else {
          return Math.floor(window.innerHeight / 2);
        }
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.setBufferRange = function (e) {
      this.bufferRange = e;
    };
    e.prototype.getLayoutTree = function () {
      return this.layoutTree;
    };
    e.prototype.getRenderUnit = function (e) {
      return this.renderUnits.get(e);
    };
    e.prototype.getRenderUnits = function () {
      return this.renderUnits;
    };
    e.prototype.getViewportData = function () {
      return this.viewport.viewportData;
    };
    e.prototype.isDescendantRenderDisabled = function (e) {
      var t = this.layoutTree.getNode(e);
      return !!t && t.hasConfig(512);
    };
    e.prototype.isRenderDisabled = function (e) {
      var t = this.layoutTree.getNode(e);
      return !!t && t.isRenderDisabled();
    };
    e.prototype.calculateViewportActivation = function (e = false) {
      var t = this.retainNodes;
      var o = this.cacheLines;
      var r = this.virtualCacheLines;
      var n = this.fg.enableVirtualMemoryOptimize;
      var i = this.layoutTree.rootLayoutNode;
      var a = [];
      var l = [];
      var s = new Set([i.node.nodeId]);
      var c = [];
      var d = [];
      var u = new Set();
      if (i && this.layoutTree.getNode(i.node.nodeId)) {
        tR(this.viewport, this, function (i, u) {
          if (u) {
            a.push(i);
          } else {
            l.push(i);
          }
          (function i(a, u) {
            var h = a.node.nodeId;
            if (!e || o.has(h) || r.has(h)) {
              s.add(h);
              eh(a, c);
            }
            if (a.isDirty(3)) {
              eh(a, d);
            }
            var p = a.parent;
            if (!e && !!p && !s.has(p.node.nodeId)) {
              i(p, u);
              l.push(p);
            }
            if (n && a.hasConfig(1)) {
              t.add(h);
            }
          })(i, u);
        });
      }
      this.addAdditionalActiveNodes(d, c, s, u);
      return {
        viewportNodes: a,
        bufferNodes: l,
        needMountNodes: c,
        needRecalculateNodes: d,
        activeNodes: s,
        noSliceMountNodes: u
      };
    };
    e.prototype.refreshActiveNodesInBufferRange = function () {
      var e = this;
      var t = new Set();
      if (this.layoutTree.rootLayoutNode) {
        t.add(this.layoutTree.rootLayoutNode.node.nodeId);
      }
      this.bufferNodes.forEach(function (o) {
        if (e.activeNodes.has(o.node.nodeId)) {
          t.add(o.node.nodeId);
        }
      });
      this.viewportNodes.forEach(function (o) {
        if (e.activeNodes.has(o.node.nodeId)) {
          t.add(o.node.nodeId);
        }
      });
      this.activeNodesInBufferRange = t;
    };
    e.prototype.getIsNodeAdditionalRetain = function (e) {
      return this.additionalActiveBlocks.has(e);
    };
    e.prototype.addAdditionalActiveBlock = function (e) {
      if (!this.additionalActiveBlocks.has(e)) {
        this.additionalActiveBlocks.add(e);
        if (this.paintManager) {
          this.debouncePaint();
        }
      }
    };
    e.prototype.removeAdditionalActiveBlock = function (e) {
      if (this.additionalActiveBlocks.has(e)) {
        this.additionalActiveBlocks.delete(e);
        if (this.paintManager) {
          this.debouncePaint();
        }
      }
    };
    e.prototype.layout = function (e) {
      var t;
      var o;
      var r = this;
      var n = e.needRecalculateNodes;
      var i = e.needMountNodes;
      var a = e.depthOneRetainNodes;
      var l = e.viewportNodes;
      var s = l === undefined ? this.viewportNodes : l;
      var c = e.viewportData;
      var d = c === undefined ? this.viewport.viewportData : c;
      var u = e.updateLayoutWithoutClearDirty;
      var h = u !== undefined && u;
      var p = [0, 0, 0];
      var f = performance.now();
      ef(n);
      this.pluginManager.call("preLayout", {
        needRecalculateNodes: n,
        viewportNodes: s,
        viewportData: d
      });
      var v = new Map();
      function y(e) {
        var t = n[e];
        var o = n[e + 1];
        if (t != null) {
          t.forEach(function (t, n) {
            t.forEach(function (e, t) {
              var n = o == null ? undefined : o.get(t);
              if (e.isDirty(4) || n && n.size) {
                var i = r.renderUnits.get(t);
                if (i) {
                  i.layout(n ?? new Map());
                  p[0] += 1;
                }
              }
            });
            if (e === 1) {
              var l = r.renderUnits.get(n);
              var s = new Map();
              t.forEach(function (t, o) {
                var l;
                var c;
                var d;
                var u;
                var h = !!((c = (l = r.mountNodes[e]) === null || l === undefined ? undefined : l.get(n)) === null || c === undefined ? undefined : c.has(o));
                var p = t.node.calculateModel !== C.IGNORE;
                if (p && !h && (((u = (d = i == null ? undefined : i[e]) === null || d === undefined ? undefined : d.get(n)) === null || u === undefined ? undefined : u.has(o)) || (a == null ? undefined : a.has(o)))) {
                  s.set(o, t);
                } else if (p && !h) {
                  v.set(o, t);
                }
              });
              if (s.size) {
                l.layout(s);
                p[0] += 1;
              }
            }
          });
        }
      }
      var g = n.length - 1;
      for (; g >= 1; g--) {
        y(g);
      }
      if (v.size) {
        this.preRenderer.append(v);
      }
      var N = this;
      var g = n.length - 1;
      for (; g >= 1; g--) {
        (function (e) {
          var t = new Map();
          var i = [];
          function a(e, o, r, n) {
            var a = o.isRenderDisabled();
            t.set(e, o);
            i.push({
              firstChildElement: n,
              node: o,
              element: r,
              shouldSkip: a
            });
          }
          if ((o = n[e]) !== null && o !== undefined) {
            o.forEach(function (e) {
              e.forEach(function (e, t) {
                var o;
                if (e.hasConfig(256)) {
                  o = e.children && e.children[0] && r.getVirtualCacheLine(e.children[0].node.nodeId) || undefined;
                } else {
                  var n = r.renderUnits.get(e.node.nodeId);
                  o = (n == null ? undefined : n.getFirstChildElement()) || undefined;
                }
                a(t, e, r.cacheLines.get(e.node.nodeId), o);
              });
            });
          }
          p[1] += i.length;
          var l = N.preRenderer.calculateLayoutInfos(i);
          N.layoutTree.apply([{
            type: S.UPDATE_LAYOUT,
            layoutInfos: l,
            layoutNodes: t,
            updateLayoutWithoutClearDirty: h
          }]);
        })(g);
      }
      if (v.size) {
        this.preRenderer.clear();
      }
      this.pluginManager.call("postLayout");
      var T = performance.now();
      p[2] = T - f;
      this.tracker.addContext(((t = {})[P.LAYOUT] = [p, n, i, a], t));
    };
    e.prototype.ensureLayoutNodesLayoutInfoCorrect = function (e) {
      var t = this;
      var o = [];
      var r = [];
      e.forEach(function (e) {
        var n = t.layoutTree.getNode(e);
        if ((n == null ? undefined : n.hasConfig(2)) && t.layoutTree.isExistedInLayoutTree(n)) {
          eh(n, o);
          if (n.isDirty(1)) {
            eh(n, r);
          }
        }
      });
      if (r.length) {
        this.paintManager.fullRender(r);
      }
      if (o.length) {
        this.layout({
          needRecalculateNodes: o,
          updateLayoutWithoutClearDirty: true
        });
      }
    };
    e.prototype.ensureInactiveNodeLayoutInfoCorrect = function (e) {
      var t = this;
      var o = [];
      this.findInactiveNodes(e, this.activeNodes, function (e) {
        if (t.layoutTree.isExistedInLayoutTree(e)) {
          eh(e, o);
        }
      });
      this.paintManager.fullRender(o);
      this.layout({
        needRecalculateNodes: o
      });
    };
    e.prototype.mount = function (e) {
      var t;
      var o;
      var r = this;
      var n = [0];
      this.tracker.addContext(((o = {})[P.MOUNT] = [n, e], o));
      t = ed([this.layoutTree.rootLayoutNode]);
      ep(e, function (e) {
        var o = e.node;
        t.push(o);
      });
      t.forEach(function (t) {
        var o = t.node;
        var r = t.depth;
        var n = e[r + 1];
        if (!n) {
          n = new Map();
          e[r + 1] = n;
        }
        if (!n.has(o.nodeId)) {
          n.set(o.nodeId, new Map());
        }
      });
      this.layoutTree.apply([{
        type: S.MARK_MOUNT_DIRTY,
        layoutNodes: this.findNewlyMountOrUnmountNodes(this.mountNodes, e)
      }]);
      var i = [];
      (function (e, t) {
        var o;
        var r;
        var n = e.length - 1;
        for (; n >= 0; n--) {
          var i = e[n];
          if (i) {
            try {
              o = undefined;
              var a = eu(i.entries());
              var l = a.next();
              for (; !l.done; l = a.next()) {
                var s = ec(l.value, 2);
                var c = s[0];
                var d = s[1];
                if (t({
                  depth: n,
                  parentId: c,
                  group: d
                })) {
                  return;
                }
              }
            } catch (e) {
              o = {
                error: e
              };
            } finally {
              try {
                if (l && !l.done && (r = a.return)) {
                  r.call(a);
                }
              } finally {
                if (o) {
                  throw o.error;
                }
              }
            }
          }
        }
      })(e, function (e) {
        var t = e.depth;
        var o = e.parentId;
        var n = e.group;
        var a = r.layoutTree.getNode(o);
        if (a && !a.isRenderDisabled() && !a.hasConfig(512) && (t === 1 || a.isDirty(4))) {
          i.push(a);
          var l = r.renderUnits.get(o);
          if (l != null) {
            l.mount(n);
          }
        }
      });
      n[0] += i.length;
      this.layoutTree.apply([{
        type: S.CLEAR_MOUNT_DIRTY,
        layoutNodes: i
      }]);
    };
    e.prototype.findNewlyMountOrUnmountNodes = function (e, t) {
      var o = [];
      ep(e, function (e) {
        var r;
        var n;
        var i = e.node;
        var a = e.nodeId;
        var l = e.depth;
        var s = e.parentId;
        if (!((n = (r = t[l]) === null || r === undefined ? undefined : r.get(s)) === null || n === undefined ? undefined : n.has(a))) {
          o.push(i);
        }
      });
      ep(t, function (t) {
        var r;
        var n;
        var i = t.node;
        var a = t.nodeId;
        var l = t.depth;
        var s = t.parentId;
        if (!((n = (r = e[l]) === null || r === undefined ? undefined : r.get(s)) === null || n === undefined ? undefined : n.has(a))) {
          o.push(i);
        }
      });
      return o;
    };
    e.prototype.handleSliceMount = function (e) {
      var t = this;
      if (!this.sliceMountThreshold || this.isForceLayoutForAll || !this.viewport.isScrolling()) {
        return e;
      }
      var o = new Set();
      var r = this.layoutTree;
      e.activeNodes.forEach(function (e) {
        var t = r.getNode(e);
        if (t && t.hasConfig(1)) {
          (function (e) {
            for (var t = r.getNode(e); t && t.parent;) {
              var n = t.node.nodeId;
              if (o.has(n)) {
                return;
              }
              o.add(n);
              t = t.parent;
            }
          })(e);
        }
      });
      var n = new Set();
      var i = new Set();
      var a = e.viewportNodes;
      var l = e.bufferNodes;
      var s = e.activeNodes;
      var c = e.prevActiveNodes;
      var d = e.needMountNodes;
      var u = e.noSliceMountNodes;
      function h(e, r) {
        var a = e.node.nodeId;
        if (!c.has(a) && !n.has(e) && !o.has(a)) {
          var l = e.depth;
          var s = e.parent;
          if (n.size <= t.sliceMountThreshold || r && l === 1 || u.has(a) || !s) {
            n.add(e);
            i.delete(e);
            for (var d = s; d && !c.has(d.node.nodeId) && !n.has(d);) {
              n.add(d);
              i.delete(d);
              d = d.parent;
            }
            return;
          }
          i.add(e);
        }
      }
      if (this.isScrollingUp) {
        for (var p = a.length - 1; p >= 0; p -= 1) {
          h(a[p], true);
        }
      } else {
        for (var p = 0; p < a.length; p += 1) {
          h(a[p], true);
        }
      }
      var f = new Set(a.map(function (e) {
        return e.node.nodeId;
      }));
      s.forEach(function (e) {
        var o = t.layoutTree.getNode(e);
        if (o && !f.has(e)) {
          h(o, false);
        }
      });
      if (i.size === 0) {
        return e;
      } else {
        i.forEach(function (e) {
          var t;
          var o;
          var r = e.parent;
          var n = e.depth;
          if (r) {
            var i = e.node.nodeId;
            var a = r.node.nodeId;
            s.delete(i);
            if ((o = (t = d[n]) === null || t === undefined ? undefined : t.get(a)) !== null && o !== undefined) {
              o.delete(i);
            }
          }
        });
        this.debounceRAFPaint();
        return {
          viewportNodes: a.filter(function (e) {
            return !i.has(e);
          }),
          bufferNodes: l.filter(function (e) {
            return !i.has(e);
          }),
          activeNodes: s,
          needMountNodes: d,
          prevActiveNodes: c,
          noSliceMountNodes: u
        };
      }
    };
    e.prototype.invokeRawPaint = function (e) {
      var t;
      var o;
      var r;
      var i = e.isSlice;
      var a = e.nextRAF;
      this.tracker.addContext(((t = {})[P.PAINT] = [this.viewport.viewportData], t));
      this.ensureLayoutNodesLayoutInfoCorrect(this.activeNodes);
      this.syncDefaultLayoutIfNeeded();
      this.isInPainting = true;
      this.pluginManager.prePaint();
      try {
        if (i) {
          this.isInScrollPainting = true;
        }
        this.rawPaint(i, a !== undefined && a);
      } catch (e) {
        this.tracker.addContext(((o = {})[P.PAINT_ERROR] = [e], o));
        this.tracker.addOnePaintContext(x.PAINT_ERROR);
        this.onError(e, "paint", {
          paintError: this.tracker.getLastPaintErrorMessage(),
          documentStructs: JSON.stringify(t1(((r = this.tracker.getDocumentStructsInfo()) === null || r === undefined ? undefined : r.values()) ?? []))
        });
      } finally {
        this.pluginManager.postPaint();
        this.isInPainting = false;
        this.isInScrollPainting = false;
        this.forcePaint.cancel();
        if (this.onPostPaint) {
          this.onPostPaint();
        }
      }
    };
    e.prototype.isSlice = function (e = false, t = false) {
      return !e && (t || this.viewport.isScrolling());
    };
    e.prototype.syncPaint = function () {
      this.invokeRawPaint({
        isSlice: false
      });
    };
    e.prototype.syncDefaultLayoutIfNeeded = function (e) {
      var t = this;
      if (e === undefined) {
        e = false;
      }
      if (this.layoutTree.hasNeedSyncDefaultLayoutNodes()) {
        var o = [];
        if (!e) {
          o = this.calculateViewportActivation().viewportNodes;
        }
        this.pluginManager.call("preSyncDefaultLayout", {
          viewportNodes: o,
          viewportTop: this.viewport.viewportData.top
        });
        var r = this.layoutTree.syncDefaultLayout();
        function n(e) {
          var o = r[e];
          if (o != null) {
            o.forEach(function (o, r) {
              var n;
              var a = t.renderUnits.get(r);
              if (a) {
                var l = ((n = t.mountNodes[e]) === null || n === undefined ? undefined : n.get(r)) ?? new Map();
                a.layout(l);
              }
            });
          }
        }
        var i = r.length - 1;
        for (; i >= 1; i--) {
          n(i);
        }
        this.pluginManager.call("postSyncDefaultLayout");
      }
    };
    e.prototype.isNodeInViewport = function (e) {
      return this.viewportNodes.includes(e);
    };
    e.prototype.handleContentAboveRootHeightChange = function () {
      var e = this.viewport.viewportData.top;
      if (e !== 0) {
        this.viewportLockPlugin.handleContentAboveRootHeightChange(e, this.viewportNodes);
      }
      this.viewport.updateViewport();
    };
    e.prototype.handleAsyncNodeRenderFinish = function (e, t) {
      this.lockHeightPlugin.handleRenderFinish(e);
      this.handleNodeHeightChange(e, t);
    };
    e.prototype.handleNodeHeightChangeForAll = function () {
      this.handleRootWidthResize();
    };
    e.prototype.handleRootWidthResize = function () {
      this.tracker.addContext(((e = {})[P.RESIZE] = [], e));
      var e;
      var t = [];
      this.layoutTree.traverseAllDescendants(this.layoutTree.rootLayoutNode, function (e) {
        t.push(e);
      });
      this.layoutTree.apply([{
        type: S.MARK_LAYOUT_DIRTY,
        layoutNodes: t
      }]);
      this.viewport.handleWidthResize();
      this.debouncePaint({
        disableSlice: true
      });
    };
    e.prototype.setPreRenderer = function (e) {
      this.preRenderer = e;
    };
    e.prototype.getPreRender = function () {
      return this.preRenderer;
    };
    e.prototype.disableIdleWorker = function () {
      var e;
      if ((e = this.idleWorker) !== null && e !== undefined) {
        e.disable();
      }
    };
    e.prototype.enableIdleWorker = function () {
      var e;
      if ((e = this.idleWorker) !== null && e !== undefined) {
        e.enable();
      }
    };
    e.prototype.registerRenderUnit = function (e, t) {
      this.renderUnits.set(e, t);
    };
    e.prototype.unregisterRenderUnit = function (e) {
      this.renderUnits.delete(e);
    };
    e.prototype.observeViewportVisibility = function () {
      var e = this;
      var t = D.INIT;
      function o(e, t) {
        var o = [];
        if (e != null) {
          e.forEach(function (e) {
            var r = Number(e.dataset.blockId);
            if (!r || !t.has(r)) {
              o.push(e);
            }
          });
        }
        return o;
      }
      function r(e) {
        return e.map(function (e) {
          var t = e.previousElementSibling;
          var o = e.nextElementSibling;
          return "[" + ((t == null ? undefined : t.dataset.blockId) || "null") + "] + " + e.outerHTML + " + [" + ((o == null ? undefined : o.dataset.blockId) || "null") + "]";
        });
      }
      function n(e) {
        return e.map(function (e) {
          return e.cloneNode(false).outerHTML;
        });
      }
      function i(t) {
        var a = t.prevActiveNodes;
        var l = t.preStructs;
        var s = t.placeholderElms;
        var c = t.visibilityOtherElms;
        var d = e.activeNodes;
        var u = Array.from(a).filter(function (e) {
          return !d.has(e);
        });
        var h = Array.from(d).filter(function (e) {
          return !a.has(e);
        });
        var p = [];
        var f = [];
        var v = e.tracker.getDocumentStructsInfo();
        if (l && v) {
          var y = e.tracker.diffLayoutInfo(l, v);
          p = (y == null ? undefined : y.layoutChangedNodes) ?? [];
          f = (y == null ? undefined : y.layoutChangedNodeIds) ?? [];
        }
        return {
          unMountNodes: u.join(","),
          newMountNodes: h.join(","),
          trackerLog: e.tracker.getTrackerLog(),
          layoutChangedNodes: p.join(","),
          layoutChangedNodeIds: f,
          visibilityPlaceholders: r(s).join(","),
          visibilityBlocks: n(c).join(","),
          documentStructs: v
        };
      }
      this.viewportVisibilityObserver = function (e) {
        var t;
        var o = new Map();
        var r = null;
        var n = null;
        var i = null;
        var a = new Map();
        try {
          var l = (t = new IntersectionObserver(function (e) {
            n ||= new Set();
            e.forEach(function (e) {
              if (e.intersectionRatio > 0) {
                n.add(e.target);
              } else {
                n.delete(e.target);
              }
            });
          })).observe;
          var s = t.unobserve;
          function c() {
            if (e) {
              e(n, r);
            }
            r = new Set(n);
            i = window.setTimeout(c, 10000);
          }
          t.start = function () {
            if (!i) {
              i = window.setTimeout(c, 10000);
            }
          };
          t.observeById = function (e, r) {
            if (t != null) {
              t.unobserveById(e);
            }
            if (o != null) {
              o.set(e, r);
            }
            l.call(t, r);
          };
          t.unobserveById = function (e) {
            var r = o == null ? undefined : o.get(e);
            if (r) {
              if (o != null) {
                o.delete(e);
              }
              if (n != null) {
                n.delete(r);
              }
              s.call(t, r);
            }
          };
          t.requestTimeout = function (e, t = 0) {
            var o = ew(function () {
              e();
              a.delete(e);
            }, t);
            a.set(e, o);
          };
          t.destroy = function () {
            if (i) {
              window.clearTimeout(i);
            }
            i = null;
            a.forEach(function (e) {
              e();
            });
            a.clear();
            if (o != null) {
              o.clear();
            }
            o = null;
            if (r != null) {
              r.clear();
            }
            r = null;
            if (n != null) {
              n.clear();
            }
            n = null;
            t.disconnect();
          };
        } catch (e) {
          t = null;
        }
        return t;
      }(function (a, l) {
        var d = 0;
        if (e.viewport.isScrolling()) {
          if (t === D.HAS_REPORT_LOOP) {
            t = D.HAS_REPORT;
          }
          return;
        }
        var u = e.layoutTree.rootLayoutNode;
        var h = e.activeNodes.size;
        if (!h || h === 1 && e.activeNodes.has(u.node.nodeId) && u.children.length) {
          if (t === D.HAS_REPORT_DISPLAY_EMPTY) {
            return;
          }
          var p = e.viewport.viewportData;
          var f = p.top;
          var v = p.height === 0;
          var y = u.children[u.children.length - 1];
          var g = !!y && f - e.bufferPixel > y.getTopToRoot() + y.node.height;
          t = D.HAS_REPORT_DISPLAY_EMPTY;
          var N = e.tracker.getTrackerLog();
          var T = e.tracker.getDocumentStructsInfo();
          e.onWarning(Error(v || g ? "found no height or scroll over document display empty case!" : "Doc viewport is invisible!"), "observeViewportVisibility", tQ({
            isDisplayEmpty: 1,
            isZeroHeight: +!!v,
            isScrollOverDocumentHeight: +!!g,
            isLoopBeforeReport: d,
            activeNodesSize: h,
            trackerLog: N,
            documentStructs: JSON.stringify(t1((T == null ? undefined : T.values()) ?? [])),
            paintError: e.tracker.getLastPaintErrorMessage()
          }, e.tracker.getContextActions(N ?? "")));
          return;
        }
        var R = o(a, e.activeNodes);
        var w = t0(R.reduce(function (e, t) {
          if (t.className === tl) {
            e[0].push(t);
            return e;
          }
          var o = t.style;
          var r = o.height;
          var n = o.marginTop;
          var i = o.marginBottom;
          if (!/^0/.test(r === undefined ? "" : r) || !/^0/.test(n === undefined ? "" : n) || !/^0/.test(i === undefined ? "" : i)) {
            e[1].push(t);
          }
          return e;
        }, [[], []]), 2);
        var m = w[0];
        var E = w[1];
        var L = [];
        var b = E.filter(function (t) {
          var o = Number(t.dataset.blockId);
          return e.cacheLines.get(o) === t || (L.push(t), false);
        });
        var C = !!b.length || !!m.length;
        var I = b.length && !m.length;
        if (!C) {
          if (R.length) {
            e.onWarning(Error("has visibility nodes but wont fix!"), "observeViewportVisibility", {
              visibilityBlocks: R.map(function (e) {
                return e.cloneNode(false).outerHTML;
              }).join(",")
            });
          }
          if (L.length) {
            e.onWarning(Error("has unexpect visibility retain nodes!"), "observeViewportVisibility", {
              unexpectVisibilityBlocks: n(L).join(",")
            });
          }
          return;
        }
        var S = o(l, e.activeNodes);
        if (R.length && S.length && deepEqualUtil_1.deepEqual(a, l)) {
          switch (t) {
            case D.INIT:
              d = 1;
              break;
            case D.HAS_REPORT:
            case D.HAS_REPORT_DISPLAY_EMPTY:
              var N = e.tracker.getTrackerLog();
              var T = e.tracker.getDocumentStructsInfo();
              e.onWarning(Error("Doc viewport is invisible!"), "observeViewportVisibility", tQ({
                isLoopBeforeReport: d,
                isLoop: 1,
                reportStatus: t,
                curVisibilitySetSize: R.length.toString(),
                visibilityPlaceholders: r(m).join(","),
                visibilityBlocks: n(b).join(","),
                unexpectVisibilityBlocks: n(L).join(","),
                documentStructs: JSON.stringify(t1((T == null ? undefined : T.values()) ?? [])),
                onlyHasRetainNodes: +!!I,
                trackerLog: N,
                paintError: e.tracker.getLastPaintErrorMessage()
              }, e.tracker.getContextActions(N ?? "")));
              t = D.HAS_REPORT_LOOP;
              return;
            case D.HAS_REPORT_LOOP:
              return;
          }
        }
        t = D.HAS_REPORT;
        var O = new Set(e.activeNodes);
        var A = e.tracker.getDocumentStructsInfo();
        var P = R.length.toString();
        function _(t, r) {
          r = r || e.didChangeNodesRecord.splice(0);
          var l = {
            postPaint: function () {
              var l;
              if ((l = e.viewportVisibilityObserver) !== null && l !== undefined) {
                l.requestTimeout(function () {
                  var s = o(a, e.activeNodes);
                  if (s.length > 0 && t !== e.autoFixedMode) {
                    _(e.autoFixedMode, r);
                    e.debouncePaint();
                    return;
                  }
                  var c = i({
                    prevActiveNodes: O,
                    preStructs: A,
                    placeholderElms: m,
                    visibilityOtherElms: b
                  });
                  var u = c.layoutChangedNodeIds;
                  var h = c.trackerLog;
                  var p = c.documentStructs;
                  var f = u.reduce(function (t, o) {
                    var r;
                    var n;
                    var a = (n = (r = e.tracker.utils) === null || r === undefined ? undefined : r.getBlockType) === null || n === undefined ? undefined : n.call(r, o);
                    if (a) {
                      var l = a + "LayoutChangeCount";
                      t[l] = (t[l] ?? 0) + 1;
                    }
                    return t;
                  }, {});
                  e.onWarning(Error("Doc viewport is invisible!"), "observeViewportVisibility", tQ(tQ(tQ(tQ({}, c), {
                    isLoopBeforeReport: d,
                    unexpectVisibilityBlocks: n(L).join(","),
                    preVisibilitySetSize: P,
                    curVisibilitySetSize: s.length.toString(),
                    documentStructs: JSON.stringify(t1((p == null ? undefined : p.values()) ?? [])),
                    autoFixedMode: t,
                    onlyHasRetainNodes: +!!I,
                    paintError: e.tracker.getLastPaintErrorMessage()
                  }), f), e.tracker.getContextActions(h ?? "")));
                });
              }
            }
          };
          switch (t) {
            case W.Normal:
              break;
            case W.WithDidChangeNodes:
              l.postCalcViewport = function (t) {
                var o;
                var n;
                if (t.isFirstTime) {
                  var i = e.getRelationDidChangeNodes(r || []);
                  try {
                    var a = t2(i);
                    var l = a.next();
                    for (; !l.done; l = a.next()) {
                      var s = l.value;
                      eh(s, t.needRecalculateNodes);
                    }
                  } catch (e) {
                    o = {
                      error: e
                    };
                  } finally {
                    try {
                      if (l && !l.done && (n = a.return)) {
                        n.call(a);
                      }
                    } finally {
                      if (o) {
                        throw o.error;
                      }
                    }
                  }
                }
              };
              break;
            case W.FullPage:
              l.postCalcViewport = function (t) {
                if (t.isFirstTime) {
                  em({
                    isForceLayoutForAll: e.isForceLayoutForAll,
                    node: e.layoutTree.rootLayoutNode,
                    top: 0,
                    bottom: 0,
                    bufferTop: 0,
                    bufferBottom: e.viewport.viewportData.top,
                    depth: 1
                  }, function (e) {
                    if (e.isDirty(2)) {
                      eh(e, t.needRecalculateNodes);
                    }
                  });
                }
              };
          }
          e.pluginManager.addPluginForNextPaint(l);
        }
        if (e.isInScrollPainting) {
          var k = i({
            prevActiveNodes: O,
            preStructs: A,
            placeholderElms: m,
            visibilityOtherElms: b
          });
          e.onWarning(Error("Doc viewport is isInScrollPainting and check visibility!"), "observeViewportVisibility", throttledOmitPathStringify.omitPathStringify(k, ["documentStructs"]));
          return;
        }
        _(W.Normal);
        e.handleNodeHeightChangeForAll();
      });
      this.pluginManager.addPluginForNextPaint({
        postPaint: function () {
          var t;
          if ((t = e.viewportVisibilityObserver) !== null && t !== undefined) {
            t.start();
          }
        }
      });
    };
    e.prototype.updateViewportLockConfig = function (e) {
      this.viewportLockPlugin.updateConfig(e);
    };
    e.prototype.updateViewportLockAnchorNode = function (e) {
      this.viewportLockPlugin.setUserLockAnchorNode(e);
    };
    e.prototype.onInsertNode = function (e, t) {
      this.viewportLockPlugin.onInsertNode(e, t);
    };
    e.prototype.onRemoveNode = function (e, t) {
      this.viewportLockPlugin.onRemoveNode(e, t);
    };
    e.prototype.destroy = function () {
      var e;
      var t;
      try {
        if ((e = this.viewportVisibilityObserver) !== null && e !== undefined) {
          e.destroy();
        }
        this.viewportVisibilityObserver = null;
        this.autoFixedMode = W.Normal;
        this.didChangeNodesRecord = [];
        this.didChangeNodesRecordStoreSize = 0;
        if (!this.isSSR) {
          this.viewport.destroy();
          this.deleteRenderUnitCacheForNodeAndAllDescendants(this.layoutTree.rootLayoutNode);
        }
        this.tracker.destroy();
        this.viewportLockPlugin.destroy();
        this.layoutTree.destroy();
        if ((t = this.idleWorker) !== null && t !== undefined) {
          t.destroy();
        }
        this.debounceRender.cancel();
        this.debouncePaint.cancel();
        this.debounceRAFPaint.cancel();
        this.forcePaint.cancel();
        this.clearRenderLineCacheEffectWhenDestroy();
        this.virtualCacheLines.clear();
      } catch (e) {
        this.onWarning(e, "destroy", {
          stack: e.stack
        });
      }
    };
    e.prototype.handleWatchPropsChange = function (e, t) {
      var o;
      var r = this;
      this.tracker.addContext(((o = {})[P.WATCH_PROPS_CHANGE] = [e, t], o));
      var n = this.layoutTree.getChildNodes(e);
      if (n && n.length) {
        this.layoutTree.apply([{
          type: S.MARK_RENDER_DIRTY,
          layoutNodes: n
        }]);
        var i = n.filter(function (e) {
          return r.cacheLines.has(e.node.nodeId) && r.shouldRePaint(e);
        });
        if (this.layoutTree.rootLayoutNode.node.nodeId === e) {
          this.viewportLockPlugin.handleRootWatchPropsChange();
        }
        if (this.isInPainting) {
          this.reRender(i);
        } else {
          this.debounceRender(i);
          this.debouncePaint();
        }
      }
    };
    e.prototype.updateRenderUnits = function () {
      var e = this;
      if (this.renderLineCacheStrategy) {
        this.renderLineCacheStrategy.keys().forEach(function (t) {
          var o = e.renderLineCacheStrategy.get(t);
          if (o && o.renderUnit) {
            e.renderUnits.set(t, o.renderUnit);
            o.renderUnit = undefined;
          }
        });
      }
    };
    e.prototype.handleNodeHeightChange = function (e, t) {
      var o = this.layoutTree.getNode(e);
      if (!!o && o.node.calculateModel !== C.IGNORE && !o.isRenderDisabled()) {
        this.handleNodeHeightChangeImpl(e, t);
      }
    };
    e.prototype.handleNodeHeightChangeImpl = function (e, t) {
      var o;
      var r;
      var i = t || {};
      var a = i.from;
      var l = i.hasLocalUserOperation;
      var s = i.forceUpdate;
      var c = i.disablePaint;
      this.tracker.addContext(((o = {})[P.NOTIFY_HEIGHT_CHANGE] = [e], o));
      var d = this.activeNodes;
      this.pluginManager.call("didNodeHeightChange", {
        nodeId: e,
        activeNodes: d
      });
      if (!this.lockHeightPlugin.isLockedHeight(e) || (s !== undefined && s) !== false) {
        this.nodeHeightChangePlugin.addNode(e, a);
        this.pluginManager.addPluginForNextPaint(this.nodeHeightChangePlugin);
        if (c === undefined || !c) {
          if ((((r = this.layoutTree.getNode(e)) === null || r === undefined ? undefined : r.getTopToRoot()) ?? 0) > this.viewport.viewportData.top) {
            this.debounceRAFPaint();
            return;
          }
          this.debouncePaint({
            mustSlice: this.isInScrollPainting,
            disableSlice: l
          });
        }
      }
    };
    e.prototype.shouldRePaint = function (e) {
      var t;
      var o = e.node.nodeId;
      return e === this.layoutTree.rootLayoutNode || !!this.activeNodes.has(o) || !!((t = this.retainPlugin) === null || t === undefined ? undefined : t.isRetainInDomTree(o)) || !!this.layoutTree.isExistedInLayoutTree(e) && !!e.isInBufferRange() && e.node.calculateModel !== C.IGNORE && !e.isRenderDisabled() && e.parent && e.parent.node.calculateModel !== C.IGNORE;
    };
    e.prototype.updateChildren = function (e) {
      var t;
      var o;
      var r = this;
      var n = new Set();
      function i(e, t) {
        var o;
        var i;
        if (e) {
          if (!Array.isArray(e)) {
            e = [e];
          }
          try {
            var a = t2(e);
            var l = a.next();
            for (; !l.done; l = a.next()) {
              var s = l.value;
              if (r.shouldRePaint(s) || r.layoutTree.isExistedInLayoutTree(s) && t) {
                n.add(s);
              } else {
                r.nodeHeightChangePlugin.deleteNode(s.node.nodeId, B.DID_CHANGE_NODE);
              }
            }
          } catch (e) {
            o = {
              error: e
            };
          } finally {
            try {
              if (l && !l.done && (i = a.return)) {
                i.call(a);
              }
            } finally {
              if (o) {
                throw o.error;
              }
            }
          }
        }
      }
      var a = this.calcNearestDeleteNodeTopToRoot(e);
      e.forEach(function (e) {
        return r.delaySyncDefaultLayoutIfNeeded(e);
      });
      var l = [];
      function s(e) {
        var t = e.nodeId;
        var o = e.modifications;
        var n = e.config;
        o.forEach(function (o) {
          var a = o.action;
          var s = o.childId;
          var c = o.index;
          var d = o.config;
          var u = o.subTreeDirty;
          function h() {
            return r.tracker.updateBlockType(e, o);
          }
          switch (a) {
            case "updateObject":
              var p = S.UPDATE_LAYOUT_NODE_CONFIG;
              l.push({
                type: p,
                nodeId: t,
                subTreeDirty: u || (d == null ? undefined : d.disableDescendantRender),
                config: n || {},
                preApply: h,
                postApply: i
              });
              break;
            case "insertChild":
              if (s === undefined || c === undefined || d === undefined) {
                break;
              }
              var p = S.INSERT_CHILD;
              l.push({
                type: p,
                parentId: t,
                childId: s,
                index: c,
                config: d,
                parentConfig: n,
                preApply: h,
                postApply: i
              });
              break;
            case "deleteChild":
              if (c === undefined) {
                break;
              }
              var p = S.DELETE_CHILD;
              l.push({
                type: p,
                parentId: t,
                index: c,
                preApply: h,
                postApply: function (e, t) {
                  i(t, true);
                  if (e) {
                    r.deleteRenderUnitCacheForNodeAndAllDescendants(e);
                  }
                  if (e) {
                    r.retainNodes.delete(e.node.nodeId);
                  }
                }
              });
          }
        });
      }
      try {
        var c = t2(e);
        var d = c.next();
        for (; !d.done; d = c.next()) {
          var u = d.value;
          s(u);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (d && !d.done && (o = c.return)) {
            o.call(c);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      this.layoutTree.apply(l, {
        preResetTopToParent: function (e) {
          r.collectEachPaintLayoutRecalculateNodesPlugin.preResetTopToParent(e);
        }
      });
      return {
        needRePaintNodeSet: n,
        nearestRootNodeTopToRoot: a
      };
    };
    e.prototype.calcNearestDeleteNodeTopToRoot = function (e) {
      var t;
      var o = this;
      e.forEach(function (e) {
        var r = e.nodeId;
        e.modifications.forEach(function (e) {
          var n = e.action;
          var i = e.childId;
          switch (n) {
            case "deleteChild":
              if (i != null) {
                var a = o.layoutTree.getNode(i);
                if (a && o.layoutTree.isExistedInLayoutTree(a) && (t === undefined || t && a.getTopToRoot() < t)) {
                  t = a.getTopToRoot();
                }
              }
              break;
            case "updateParentId":
              if (r != null) {
                var l = o.layoutTree.getNode(r);
                if (l && o.layoutTree.isExistedInLayoutTree(l) && (t === undefined || t && l.getTopToRoot() < t)) {
                  t = l.getTopToRoot();
                }
              }
          }
        });
      });
      return t;
    };
    e.prototype.delaySyncDefaultLayoutIfNeeded = function (e) {
      var t = this;
      var o = e.nodeId;
      var r = e.modifications;
      var n = e.config;
      var i = this.layoutTree.getNode(o);
      function a(e, o) {
        return !e || e.node.calculateModel === C.IGNORE || (o == null ? undefined : o.calculateModel) === C.IGNORE || !t.layoutTree.isExistedInLayoutTree(e);
      }
      r.forEach(function (e) {
        var r = e.action;
        var l = e.childId;
        switch (r) {
          case "updateObject":
          case "updateParentId":
            if (a(i, n)) {
              t.layoutTree.addNeedSyncDefaultLayoutNode(o);
            }
            break;
          case "insertChild":
            if (a(i)) {
              t.layoutTree.addNeedSyncDefaultLayoutNode(o);
            }
            if (l != null) {
              t.layoutTree.addNeedSyncDefaultLayoutNode(l);
            }
        }
      });
    };
    e.prototype.clearRenderLineCacheEffectWhenDestroy = function () {
      var e = this;
      if (this.renderLineCacheStrategy) {
        this.renderLineCacheStrategy.clear(true);
        var t = this.renderLineCacheStrategy.keys();
        if (t && t.length) {
          t.forEach(function (t) {
            var o = e.renderLineCacheStrategy.get(t);
            if (o) {
              e.handleRenderLineCacheDelete(t, o);
            }
          });
        }
        this.renderLineCacheStrategy.offAutoDelete(this.handleRenderLineCacheDelete);
      }
    };
    e.prototype.cacheRenderLineInfo = function (e) {
      var t;
      var o;
      var r;
      var n = this.cacheLines.get(e);
      var i = this.renderUnits.get(e);
      if ((t = this.renderLineCacheStrategy) === null || t === undefined ? undefined : t.get(e)) {
        var a = this.renderLineCacheStrategy.get(e);
        var l = this.layoutTree.getNode(e);
        if (a && (!l || !this.layoutTree.isExistedInLayoutTree(l))) {
          if (a.renderView) {
            reactDomEntryWrapper.unmountComponentAtNode(a.renderView);
          }
          if (a.renderUnit) {
            this.unregisterRenderUnit(e);
          }
          if ((o = this.renderLineCacheStrategy) !== null && o !== undefined) {
            o.delete(e);
          }
        }
      }
      var s = this.getLayoutTree().getNode(e);
      var c = !!s && !!s.childCount;
      if (i || n) {
        if ((r = this.renderLineCacheStrategy) !== null && r !== undefined) {
          r.set(e, {
            renderView: n,
            renderUnit: i,
            isHaveChildren: c
          });
        }
      }
    };
    e.prototype.deleteRenderUnitCacheForNodeAndAllDescendants = function (e) {
      var t = this;
      function o(e) {
        var o = t.cacheLines.get(e);
        var r = t.renderLineCacheStrategy && t.renderLineCacheStrategy.enabled;
        if (r) {
          t.cacheRenderLineInfo(e);
        }
        if (t.cacheLines.has(e)) {
          if (t.fg.enableVirtualMemoryOptimize && t.cacheLines instanceof tq) {
            t.cacheLines.delete(e, false);
          } else {
            t.cacheLines.delete(e);
          }
          t.unregisterRenderUnit(e);
        }
        if (o) {
          try {
            if (!r) {
              reactDomEntryWrapper.unmountComponentAtNode(o);
            }
          } catch (e) {}
        }
      }
      var r = e.node.nodeId;
      var n = [r];
      o(r);
      var i = r === this.layoutTree.rootLayoutNode.node.nodeId;
      this.layoutTree.traverseAllDescendants(e, function (e) {
        o(e.node.nodeId);
        n.push(e.node.nodeId);
      });
      (function (e, t) {
        var o = new Set(e);
        t.forEach(function (e) {
          if (e != null) {
            e.forEach(function (e) {
              o.forEach(function (t) {
                if (e.has(t)) {
                  e.delete(t);
                  o.delete(t);
                }
              });
            });
          }
        });
      })(n, this.mountNodes);
      n.forEach(function (e) {
        t.activeNodes.delete(e);
        t.activeNodesInBufferRange.delete(e);
      });
      if (i) {
        this.cacheLines.forEach(function (e, t) {
          return o(t);
        });
      }
    };
    e.prototype.getNodePosition = function (e) {
      var t = this.layoutTree.getNode(e);
      if (t) {
        return {
          topToRoot: t.getTopToRoot(),
          height: t.node.height
        };
      }
    };
    e.prototype.findInactiveNodes = function (e, t, o) {
      var r = this;
      t.forEach(function (t) {
        if (!e.has(t)) {
          var n = r.layoutTree.getNode(t);
          if (n) {
            o(n);
          }
        }
      });
    };
    e.prototype.addAdditionalActiveNodes = function (e, t, o, r) {
      var n = this;
      var i = new Set(this.getForceActiveNodes());
      var a = new Set(t1(i, this.getRemainActiveNodes(), this.retainNodes));
      i.forEach(function (e) {
        var t;
        var r = n.layoutTree.getNode(e);
        var a = (t = r == null ? undefined : r.parent) === null || t === undefined ? undefined : t.node.nodeId;
        if (a !== undefined && !o.has(a)) {
          i.add(a);
        }
      });
      a.forEach(function (a) {
        for (var l = n.layoutTree.getNode(a); l;) {
          var s = l.node;
          var c = s.nodeId;
          if (l.node.calculateModel === C.IGNORE || l.isRenderDisabled() || o.has(c) || !i.has(c) && !n.activeNodes.has(c)) {
            return;
          }
          o.add(c);
          r.add(c);
          if (s.isDirty(3)) {
            eh(l, e);
          }
          eh(l, t);
          if (s.calculateModel === C.HORIZONTAL || eT(l)) {
            n.layoutTree.traverseAllDescendants(l, function (n) {
              var i = n.node;
              if (i.calculateModel !== C.IGNORE && !n.isRenderDisabled()) {
                o.add(i.nodeId);
                r.add(i.nodeId);
                if (i.isDirty(3)) {
                  eh(n, e);
                }
                eh(n, t);
              }
            });
          }
          l = l.parent;
        }
      });
    };
    e.prototype.callChangedEvent = function (e, t, o) {
      var r = [];
      e.forEach(function (e) {
        if (!t.has(e)) {
          r.push(e);
        }
      });
      var n = [];
      t.forEach(function (t) {
        if (!e.has(t)) {
          n.push(t);
        }
      });
      if (n.length > 0 || r.length > 0) {
        var i = {
          enterNodes: n,
          leaveNodes: r,
          viewportNodes: this.getViewportNodes()
        };
        switch (o) {
          case "buffer":
            this.onBufferChanged(i);
            break;
          case "active":
            this.onActiveChanged(i);
            break;
          case "viewport":
            this.onViewportChanged(i);
        }
      }
    };
    e.prototype.getRelationDidChangeNodes = function (e) {
      var t;
      var o;
      var r;
      var n;
      var i = this;
      var a = new Set();
      var l = new Set();
      function s(e) {
        var t = i.layoutTree.getNode(e);
        if (t && !l.has(e)) {
          l.add(e);
          if (i.layoutTree.isExistedInLayoutTree(t)) {
            a.add(t);
          }
        }
      }
      try {
        var c = t2(e);
        var d = c.next();
        for (; !d.done; d = c.next()) {
          var u = d.value;
          try {
            r = undefined;
            var h = t2(u);
            var p = h.next();
            for (; !p.done; p = h.next()) {
              var f = p.value;
              var v = f.nodeId;
              var y = f.modifications;
              s(v);
              y.forEach(function (e) {
                var t = e.parentId;
                var o = e.childId;
                if (t) {
                  s(t);
                }
                if (o) {
                  s(o);
                }
              });
            }
          } catch (e) {
            r = {
              error: e
            };
          } finally {
            try {
              if (p && !p.done && (n = h.return)) {
                n.call(h);
              }
            } finally {
              if (r) {
                throw r.error;
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
          if (d && !d.done && (o = c.return)) {
            o.call(c);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      a.delete(this.layoutTree.rootLayoutNode);
      return a;
    };
    e.prototype.turnOnLockViewport = function () {
      this.viewportLockPlugin.toggleDisabledLockViewport(false);
    };
    e.prototype.turnOffLockViewport = function () {
      this.viewportLockPlugin.toggleDisabledLockViewport(true);
    };
    e.prototype.tempCollectMaxLockRate = function () {
      return this.viewportLockPlugin.collectMaxLockRate();
    };
    return e;
  }();
  require.d(exports, {
    CalculateModel: function () {
      return C;
    },
    Reconciler: function () {
      return t3;
    },
    TrackerContextType: function () {
      return P;
    },
    SET_SCROLLTOP_FROM: function () {
      return U;
    },
    RenderUnit: function () {
      return ts;
    },
    RenderPriority: function () {
      return O;
    },
    ViewportLockBehaviorWhenScrolling: function () {
      return F;
    },
    VirtualEvent: function () {
      return L;
    }
  });
}