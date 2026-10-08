// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 'a' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'n' to 'konvaCanvasClasses'
// - Resolved require(210164) to 'konva-canvas-classes'
// - Renamed variable 's' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// - Renamed variable 'o' to 'konvaDragDropManager'
// - Resolved require(489337) to 'konva-drag-drop-manager'
// - Renamed variable 'h' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// - Updated imported property 'DD' to 'dragDropManager' (module 489337)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 395622
         */
module.exports = function (module, exports, require) {
  exports.Node = undefined;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCanvasClasses = require("konva-canvas-classes") /*id: 210164*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let konvaDragDropManager = require("konva-drag-drop-manager") /*id: 489337*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  var l = "absoluteOpacity";
  var d = "allEventListeners";
  var c = "absoluteTransform";
  var u = "absoluteScale";
  var f = "canvas";
  var g = "listening";
  var p = "mouseenter";
  var v = "mouseleave";
  var m = "Shape";
  var y = "stage";
  var _ = "transform";
  var b = "visible";
  let x = 1;
  class S {
    constructor(t) {
      this._id = x++;
      this.eventListeners = {};
      this.attrs = {};
      this.index = 0;
      this._allEventListeners = null;
      this.parent = null;
      this._cache = new Map();
      this._attachedDepsListeners = new Map();
      this._lastPos = null;
      this._batchingTransformChange = false;
      this._needClearTransformCache = false;
      this._filterUpToDate = false;
      this._isUnderCache = false;
      this._dragEventId = null;
      this._shouldFireChangeEvents = false;
      this.setAttrs(t);
      this._shouldFireChangeEvents = true;
    }
    hasChildren() {
      return false;
    }
    _clearCache(t) {
      if ((t === _ || t === c) && this._cache.get(t)) {
        this._cache.get(t).dirty = true;
      } else if (t) {
        this._cache.delete(t);
      } else {
        this._cache.clear();
      }
    }
    _getCache(t, e) {
      var i = this._cache.get(t);
      var r = t === _ || t === c;
      if (i === undefined || r && i.dirty === true) {
        i = e.call(this);
        this._cache.set(t, i);
      }
      return i;
    }
    _calculate(t, e, i) {
      if (!this._attachedDepsListeners.get(t)) {
        let i = e.map(t => t + "Change.konva").join(" ");
        this.on(i, () => {
          this._clearCache(t);
        });
        this._attachedDepsListeners.set(t, true);
      }
      return this._getCache(t, i);
    }
    _getCanvasCache() {
      return this._cache.get(f);
    }
    _clearSelfAndDescendantCache(t) {
      this._clearCache(t);
      if (t === c) {
        this.fire("absoluteTransformChange");
      }
    }
    clearCache() {
      if (this._cache.has(f)) {
        let {
          scene: t,
          filter: e,
          hit: i
        } = this._cache.get(f);
        konvaTransformUtil.Util.releaseCanvas(t, e, i);
        this._cache.delete(f);
      }
      this._clearSelfAndDescendantCache();
      this._requestDraw();
      return this;
    }
    cache(t) {
      var e = t || {};
      var i = {};
      if (e.x === undefined || e.y === undefined || e.width === undefined || e.height === undefined) {
        i = this.getClientRect({
          skipTransform: true,
          relativeTo: this.getParent() || undefined
        });
      }
      var a = Math.ceil(e.width || i.width);
      var s = Math.ceil(e.height || i.height);
      var o = e.pixelRatio;
      var h = e.x === undefined ? Math.floor(i.x) : e.x;
      var d = e.y === undefined ? Math.floor(i.y) : e.y;
      var c = e.offset || 0;
      var g = e.drawBorder || false;
      var p = e.hitCanvasPixelRatio || 1;
      if (!a || !s) {
        konvaTransformUtil.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
        return;
      }
      let v = +(Math.abs(Math.round(i.x) - h) > 0.5);
      let m = +(Math.abs(Math.round(i.y) - d) > 0.5);
      a += c * 2 + v;
      s += c * 2 + m;
      h -= c;
      d -= c;
      var y = new konvaCanvasClasses.SceneCanvas({
        pixelRatio: o,
        width: a,
        height: s
      });
      var _ = new konvaCanvasClasses.SceneCanvas({
        pixelRatio: o,
        width: 0,
        height: 0,
        willReadFrequently: true
      });
      var b = new konvaCanvasClasses.HitCanvas({
        pixelRatio: p,
        width: a,
        height: s
      });
      var x = y.getContext();
      var S = b.getContext();
      b.isCache = true;
      y.isCache = true;
      this._cache.delete(f);
      this._filterUpToDate = false;
      if (e.imageSmoothingEnabled === false) {
        y.getContext()._context.imageSmoothingEnabled = false;
        _.getContext()._context.imageSmoothingEnabled = false;
      }
      x.save();
      S.save();
      x.translate(-h, -d);
      S.translate(-h, -d);
      this._isUnderCache = true;
      this._clearSelfAndDescendantCache(l);
      this._clearSelfAndDescendantCache(u);
      this.drawScene(y, this);
      this.drawHit(b, this);
      this._isUnderCache = false;
      x.restore();
      S.restore();
      if (g) {
        x.save();
        x.beginPath();
        x.rect(0, 0, a, s);
        x.closePath();
        x.setAttr("strokeStyle", "red");
        x.setAttr("lineWidth", 5);
        x.stroke();
        x.restore();
      }
      this._cache.set(f, {
        scene: y,
        filter: _,
        hit: b,
        x: h,
        y: d
      });
      this._requestDraw();
      return this;
    }
    isCached() {
      return this._cache.has(f);
    }
    getClientRect(t) {
      throw Error("abstract \"getClientRect\" method call");
    }
    _transformedRect(t, e) {
      var i = [{
        x: t.x,
        y: t.y
      }, {
        x: t.x + t.width,
        y: t.y
      }, {
        x: t.x + t.width,
        y: t.y + t.height
      }, {
        x: t.x,
        y: t.y + t.height
      }];
      var r = Infinity;
      var a = Infinity;
      var n = -Infinity;
      var s = -Infinity;
      var o = this.getAbsoluteTransform(e);
      i.forEach(function (t) {
        var e = o.point(t);
        if (r === undefined) {
          r = n = e.x;
          a = s = e.y;
        }
        r = Math.min(r, e.x);
        a = Math.min(a, e.y);
        n = Math.max(n, e.x);
        s = Math.max(s, e.y);
      });
      return {
        x: r,
        y: a,
        width: n - r,
        height: s - a
      };
    }
    _drawCachedSceneCanvas(t) {
      t.save();
      t._applyOpacity(this);
      t._applyGlobalCompositeOperation(this);
      let e = this._getCanvasCache();
      t.translate(e.x, e.y);
      var i = this._getCachedSceneCanvas();
      var r = i.pixelRatio;
      t.drawImage(i._canvas, 0, 0, i.width / r, i.height / r);
      t.restore();
    }
    _drawCachedHitCanvas(t) {
      var e = this._getCanvasCache();
      var i = e.hit;
      t.save();
      t.translate(e.x, e.y);
      t.drawImage(i._canvas, 0, 0, i.width / i.pixelRatio, i.height / i.pixelRatio);
      t.restore();
    }
    _getCachedSceneCanvas() {
      var t;
      var e;
      var i;
      var a;
      var n = this.filters();
      var s = this._getCanvasCache();
      var o = s.scene;
      var h = s.filter;
      var l = h.getContext();
      if (n) {
        if (!this._filterUpToDate) {
          var d = o.pixelRatio;
          h.setSize(o.width / o.pixelRatio, o.height / o.pixelRatio);
          try {
            t = n.length;
            l.clear();
            l.drawImage(o._canvas, 0, 0, o.getWidth() / d, o.getHeight() / d);
            e = l.getImageData(0, 0, h.getWidth(), h.getHeight());
            i = 0;
            for (; i < t; i++) {
              a = n[i];
              if (typeof a != "function") {
                konvaTransformUtil.Util.error("Filter should be type of function, but got " + typeof a + " instead. Please check correct filters");
                continue;
              }
              a.call(this, e);
              l.putImageData(e, 0, 0);
            }
          } catch (t) {
            konvaTransformUtil.Util.error("Unable to apply filter. " + t.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
          }
          this._filterUpToDate = true;
        }
        return h;
      }
      return o;
    }
    on(t, e) {
      if (this._cache) {
        this._cache.delete(d);
      }
      if (arguments.length == 3) {
        return this._delegate.apply(this, arguments);
      }
      var i;
      var r;
      var a;
      var n;
      var s = t.split(" ");
      var o = s.length;
      for (i = 0; i < o; i++) {
        a = (r = s[i].split("."))[0];
        n = r[1] || "";
        this.eventListeners[a] ||= [];
        this.eventListeners[a].push({
          name: n,
          handler: e
        });
      }
      return this;
    }
    off(t, e) {
      var i;
      var r;
      var a;
      var n;
      var s;
      var o = (t || "").split(" ");
      var h = o.length;
      if (this._cache) {
        this._cache.delete(d);
      }
      if (!t) {
        for (r in this.eventListeners) {
          this._off(r);
        }
      }
      for (i = 0; i < h; i++) {
        n = (a = o[i].split("."))[0];
        s = a[1];
        if (n) {
          if (this.eventListeners[n]) {
            this._off(n, s, e);
          }
        } else {
          for (r in this.eventListeners) {
            this._off(r, s, e);
          }
        }
      }
      return this;
    }
    dispatchEvent(t) {
      var e = {
        target: this,
        type: t.type,
        evt: t
      };
      this.fire(t.type, e);
      return this;
    }
    addEventListener(t, e) {
      this.on(t, function (t) {
        e.call(this, t.evt);
      });
      return this;
    }
    removeEventListener(t) {
      this.off(t);
      return this;
    }
    _delegate(t, e, i) {
      var a = this;
      this.on(t, function (t) {
        var n = t.target.findAncestors(e, true, a);
        var s = 0;
        for (; s < n.length; s++) {
          (t = konvaTransformUtil.Util.cloneObject(t)).currentTarget = n[s];
          i.call(n[s], t);
        }
      });
    }
    remove() {
      if (this.isDragging()) {
        this.stopDrag();
      }
      konvaDragDropManager.dragDropManager._dragElements.delete(this._id);
      this._remove();
      return this;
    }
    _clearCaches() {
      this._clearSelfAndDescendantCache(c);
      this._clearSelfAndDescendantCache(l);
      this._clearSelfAndDescendantCache(u);
      this._clearSelfAndDescendantCache(y);
      this._clearSelfAndDescendantCache(b);
      this._clearSelfAndDescendantCache(g);
    }
    _remove() {
      this._clearCaches();
      var t = this.getParent();
      if (t && t.children) {
        t.children.splice(this.index, 1);
        t._setChildrenIndices();
        this.parent = null;
      }
    }
    destroy() {
      this.remove();
      this.clearCache();
      return this;
    }
    getAttr(t) {
      var e = "get" + konvaTransformUtil.Util._capitalize(t);
      if (konvaTransformUtil.Util._isFunction(this[e])) {
        return this[e]();
      } else {
        return this.attrs[t];
      }
    }
    getAncestors() {
      var t = this.getParent();
      var e = [];
      while (t) {
        e.push(t);
        t = t.getParent();
      }
      return e;
    }
    getAttrs() {
      return this.attrs || {};
    }
    setAttrs(t) {
      this._batchTransformChanges(() => {
        var e;
        var i;
        if (!t) {
          return this;
        }
        for (e in t) {
          if (e !== "children") {
            i = "set" + konvaTransformUtil.Util._capitalize(e);
            if (konvaTransformUtil.Util._isFunction(this[i])) {
              this[i](t[e]);
            } else {
              this._setAttr(e, t[e]);
            }
          }
        }
      });
      return this;
    }
    isListening() {
      return this._getCache(g, this._isListening);
    }
    _isListening(t) {
      if (!this.listening()) {
        return false;
      }
      let e = this.getParent();
      return !e || e === t || this === t || e._isListening(t);
    }
    isVisible() {
      return this._getCache(b, this._isVisible);
    }
    _isVisible(t) {
      if (!this.visible()) {
        return false;
      }
      let e = this.getParent();
      return !e || e === t || this === t || e._isVisible(t);
    }
    shouldDrawHit(t, e = false) {
      if (t) {
        return this._isVisible(t) && this._isListening(t);
      }
      var i = this.getLayer();
      var r = false;
      konvaDragDropManager.dragDropManager._dragElements.forEach(t => {
        if (t.dragStatus === "dragging") {
          if (t.node.nodeType === "Stage") {
            r = true;
          } else if (t.node.getLayer() === i) {
            r = true;
          }
        }
      });
      var a = !e && !konvaCoreConfig.Konva.hitOnDragEnabled && (r || konvaCoreConfig.Konva.isTransforming());
      return this.isListening() && this.isVisible() && !a;
    }
    show() {
      this.visible(true);
      return this;
    }
    hide() {
      this.visible(false);
      return this;
    }
    getZIndex() {
      return this.index || 0;
    }
    getAbsoluteZIndex() {
      var t;
      var e;
      var i;
      var r;
      var a = this.getDepth();
      var n = this;
      var s = 0;
      let o = this.getStage();
      if (n.nodeType !== "Stage" && o) {
        (function o(h) {
          i = 0;
          t = [];
          e = h.length;
          for (; i < e; i++) {
            r = h[i];
            s++;
            if (r.nodeType !== m) {
              t = t.concat(r.getChildren().slice());
            }
            if (r._id === n._id) {
              i = e;
            }
          }
          if (t.length > 0 && t[0].getDepth() <= a) {
            o(t);
          }
        })(o.getChildren());
      }
      return s;
    }
    getDepth() {
      var t = 0;
      var e = this.parent;
      while (e) {
        t++;
        e = e.parent;
      }
      return t;
    }
    _batchTransformChanges(t) {
      this._batchingTransformChange = true;
      t();
      this._batchingTransformChange = false;
      if (this._needClearTransformCache) {
        this._clearCache(_);
        this._clearSelfAndDescendantCache(c);
      }
      this._needClearTransformCache = false;
    }
    setPosition(t) {
      this._batchTransformChanges(() => {
        this.x(t.x);
        this.y(t.y);
      });
      return this;
    }
    getPosition() {
      return {
        x: this.x(),
        y: this.y()
      };
    }
    getRelativePointerPosition() {
      let t = this.getStage();
      if (!t) {
        return null;
      }
      var e = t.getPointerPosition();
      if (!e) {
        return null;
      }
      var i = this.getAbsoluteTransform().copy();
      i.invert();
      return i.point(e);
    }
    getAbsolutePosition(t) {
      let e = false;
      let i = this.parent;
      while (i) {
        if (i.isCached()) {
          e = true;
          break;
        }
        i = i.parent;
      }
      if (e && !t) {
        t = true;
      }
      var a = this.getAbsoluteTransform(t).getMatrix();
      var n = new konvaTransformUtil.Transform();
      var s = this.offset();
      n.m = a.slice();
      n.translate(s.x, s.y);
      return n.getTranslation();
    }
    setAbsolutePosition(t) {
      let {
        x: e,
        y: i,
        ...r
      } = this._clearTransform();
      this.attrs.x = e;
      this.attrs.y = i;
      this._clearCache(_);
      var a = this._getAbsoluteTransform().copy();
      a.invert();
      a.translate(t.x, t.y);
      t = {
        x: this.attrs.x + a.getTranslation().x,
        y: this.attrs.y + a.getTranslation().y
      };
      this._setTransform(r);
      this.setPosition({
        x: t.x,
        y: t.y
      });
      this._clearCache(_);
      this._clearSelfAndDescendantCache(c);
      return this;
    }
    _setTransform(t) {
      var e;
      for (e in t) {
        this.attrs[e] = t[e];
      }
    }
    _clearTransform() {
      var t = {
        x: this.x(),
        y: this.y(),
        rotation: this.rotation(),
        scaleX: this.scaleX(),
        scaleY: this.scaleY(),
        offsetX: this.offsetX(),
        offsetY: this.offsetY(),
        skewX: this.skewX(),
        skewY: this.skewY()
      };
      this.attrs.x = 0;
      this.attrs.y = 0;
      this.attrs.rotation = 0;
      this.attrs.scaleX = 1;
      this.attrs.scaleY = 1;
      this.attrs.offsetX = 0;
      this.attrs.offsetY = 0;
      this.attrs.skewX = 0;
      this.attrs.skewY = 0;
      return t;
    }
    move(t) {
      var e = t.x;
      var i = t.y;
      var r = this.x();
      var a = this.y();
      if (e !== undefined) {
        r += e;
      }
      if (i !== undefined) {
        a += i;
      }
      this.setPosition({
        x: r,
        y: a
      });
      return this;
    }
    _eachAncestorReverse(t, e) {
      var i;
      var r;
      var a = [];
      var n = this.getParent();
      if (!e || e._id !== this._id) {
        for (a.unshift(this); n && (!e || n._id !== e._id);) {
          a.unshift(n);
          n = n.parent;
        }
        r = 0;
        i = a.length;
        for (; r < i; r++) {
          t(a[r]);
        }
      }
    }
    rotate(t) {
      this.rotation(this.rotation() + t);
      return this;
    }
    moveToTop() {
      if (!this.parent) {
        konvaTransformUtil.Util.warn("Node has no parent. moveToTop function is ignored.");
        return false;
      }
      var t = this.index;
      return t < this.parent.getChildren().length - 1 && (this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), true);
    }
    moveUp() {
      if (!this.parent) {
        konvaTransformUtil.Util.warn("Node has no parent. moveUp function is ignored.");
        return false;
      }
      var t = this.index;
      return t < this.parent.getChildren().length - 1 && (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), true);
    }
    moveDown() {
      if (!this.parent) {
        konvaTransformUtil.Util.warn("Node has no parent. moveDown function is ignored.");
        return false;
      }
      var t = this.index;
      return t > 0 && (this.parent.children.splice(t, 1), this.parent.children.splice(t - 1, 0, this), this.parent._setChildrenIndices(), true);
    }
    moveToBottom() {
      if (!this.parent) {
        konvaTransformUtil.Util.warn("Node has no parent. moveToBottom function is ignored.");
        return false;
      }
      var t = this.index;
      return t > 0 && (this.parent.children.splice(t, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), true);
    }
    setZIndex(t) {
      if (!this.parent) {
        konvaTransformUtil.Util.warn("Node has no parent. zIndex parameter is ignored.");
        return this;
      }
      if (t < 0 || t >= this.parent.children.length) {
        konvaTransformUtil.Util.warn("Unexpected value " + t + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
      }
      var e = this.index;
      this.parent.children.splice(e, 1);
      this.parent.children.splice(t, 0, this);
      this.parent._setChildrenIndices();
      return this;
    }
    getAbsoluteOpacity() {
      return this._getCache(l, this._getAbsoluteOpacity);
    }
    _getAbsoluteOpacity() {
      var t = this.opacity();
      var e = this.getParent();
      if (e && !e._isUnderCache) {
        t *= e.getAbsoluteOpacity();
      }
      return t;
    }
    moveTo(t) {
      if (this.getParent() !== t) {
        this._remove();
        t.add(this);
      }
      return this;
    }
    toObject() {
      var t;
      var e;
      var i;
      var a;
      var n = this.getAttrs();
      let s = {
        attrs: {},
        className: this.getClassName()
      };
      for (t in n) {
        e = n[t];
        if (!konvaTransformUtil.Util.isObject(e) || konvaTransformUtil.Util._isPlainObject(e) || konvaTransformUtil.Util._isArray(e)) {
          i = typeof this[t] == "function" && this[t];
          delete n[t];
          a = i ? i.call(this) : null;
          n[t] = e;
          if (a !== e) {
            s.attrs[t] = e;
          }
        }
      }
      return konvaTransformUtil.Util._prepareToStringify(s);
    }
    toJSON() {
      return JSON.stringify(this.toObject());
    }
    getParent() {
      return this.parent;
    }
    findAncestors(t, e, i) {
      var r = [];
      if (e && this._isMatch(t)) {
        r.push(this);
      }
      for (var a = this.parent; a && a !== i;) {
        if (a._isMatch(t)) {
          r.push(a);
        }
        a = a.parent;
      }
      return r;
    }
    isAncestorOf(t) {
      return false;
    }
    findAncestor(t, e, i) {
      return this.findAncestors(t, e, i)[0];
    }
    _isMatch(t) {
      if (!t) {
        return false;
      }
      if (typeof t == "function") {
        return t(this);
      }
      var e;
      var i;
      var a = t.replace(/ /g, "").split(",");
      var n = a.length;
      for (e = 0; e < n; e++) {
        i = a[e];
        if (!konvaTransformUtil.Util.isValidSelector(i)) {
          konvaTransformUtil.Util.warn("Selector \"" + i + "\" is invalid. Allowed selectors examples are \"#foo\", \".bar\" or \"Group\".");
          konvaTransformUtil.Util.warn("If you have a custom shape with such className, please change it to start with upper letter like \"Triangle\".");
          konvaTransformUtil.Util.warn("Konva is awesome, right?");
        }
        if (i.charAt(0) === "#") {
          if (this.id() === i.slice(1)) {
            return true;
          }
        } else if (i.charAt(0) === ".") {
          if (this.hasName(i.slice(1))) {
            return true;
          }
        } else if (this.className === i || this.nodeType === i) {
          return true;
        }
      }
      return false;
    }
    getLayer() {
      var t = this.getParent();
      if (t) {
        return t.getLayer();
      } else {
        return null;
      }
    }
    getStage() {
      return this._getCache(y, this._getStage);
    }
    _getStage() {
      var t = this.getParent();
      if (t) {
        return t.getStage();
      } else {
        return null;
      }
    }
    fire(t, e = {}, i) {
      e.target = e.target || this;
      if (i) {
        this._fireAndBubble(t, e);
      } else {
        this._fire(t, e);
      }
      return this;
    }
    getAbsoluteTransform(t) {
      if (t) {
        return this._getAbsoluteTransform(t);
      } else {
        return this._getCache(c, this._getAbsoluteTransform);
      }
    }
    _getAbsoluteTransform(t) {
      if (t) {
        e = new konvaTransformUtil.Transform();
        this._eachAncestorReverse(function (t) {
          var i = t.transformsEnabled();
          if (i === "all") {
            e.multiply(t.getTransform());
          } else if (i === "position") {
            e.translate(t.x() - t.offsetX(), t.y() - t.offsetY());
          }
        }, t);
        return e;
      }
      e = this._cache.get(c) || new konvaTransformUtil.Transform();
      if (this.parent) {
        this.parent.getAbsoluteTransform().copyInto(e);
      } else {
        e.reset();
      }
      var e;
      var i = this.transformsEnabled();
      if (i === "all") {
        e.multiply(this.getTransform());
      } else if (i === "position") {
        let t = this.attrs.x || 0;
        let i = this.attrs.y || 0;
        let r = this.attrs.offsetX || 0;
        let a = this.attrs.offsetY || 0;
        e.translate(t - r, i - a);
      }
      e.dirty = false;
      return e;
    }
    getAbsoluteScale(t) {
      for (var e = this; e;) {
        if (e._isUnderCache) {
          t = e;
        }
        e = e.getParent();
      }
      let i = this.getAbsoluteTransform(t).decompose();
      return {
        x: i.scaleX,
        y: i.scaleY
      };
    }
    getAbsoluteRotation() {
      return this.getAbsoluteTransform().decompose().rotation;
    }
    getTransform() {
      return this._getCache(_, this._getTransform);
    }
    _getTransform() {
      var i = this._cache.get(_) || new konvaTransformUtil.Transform();
      i.reset();
      var a = this.x();
      var n = this.y();
      var o = konvaCoreConfig.Konva.getAngle(this.rotation());
      var h = this.attrs.scaleX ?? 1;
      var l = this.attrs.scaleY ?? 1;
      var d = this.attrs.skewX || 0;
      var c = this.attrs.skewY || 0;
      var u = this.attrs.offsetX || 0;
      var f = this.attrs.offsetY || 0;
      if (a !== 0 || n !== 0) {
        i.translate(a, n);
      }
      if (o !== 0) {
        i.rotate(o);
      }
      if (d !== 0 || c !== 0) {
        i.skew(d, c);
      }
      if (h !== 1 || l !== 1) {
        i.scale(h, l);
      }
      if (u !== 0 || f !== 0) {
        i.translate(u * -1, f * -1);
      }
      i.dirty = false;
      return i;
    }
    clone(t) {
      var e;
      var i;
      var a;
      var n;
      var s;
      var o = konvaTransformUtil.Util.cloneObject(this.attrs);
      for (e in t) {
        o[e] = t[e];
      }
      var h = new this.constructor(o);
      for (e in this.eventListeners) {
        n = 0;
        a = (i = this.eventListeners[e]).length;
        for (; n < a; n++) {
          if ((s = i[n]).name.indexOf("konva") < 0) {
            h.eventListeners[e] ||= [];
            h.eventListeners[e].push(s);
          }
        }
      }
      return h;
    }
    _toKonvaCanvas(t) {
      t = t || {};
      var e = this.getClientRect();
      var i = this.getStage();
      var r = t.x !== undefined ? t.x : Math.floor(e.x);
      var a = t.y !== undefined ? t.y : Math.floor(e.y);
      var s = t.pixelRatio || 1;
      var o = new konvaCanvasClasses.SceneCanvas({
        width: t.width || Math.ceil(e.width) || (i ? i.width() : 0),
        height: t.height || Math.ceil(e.height) || (i ? i.height() : 0),
        pixelRatio: s
      });
      var h = o.getContext();
      let l = new konvaCanvasClasses.SceneCanvas({
        width: o.width / o.pixelRatio + Math.abs(r),
        height: o.height / o.pixelRatio + Math.abs(a),
        pixelRatio: o.pixelRatio
      });
      if (t.imageSmoothingEnabled === false) {
        h._context.imageSmoothingEnabled = false;
      }
      h.save();
      if (r || a) {
        h.translate(r * -1, a * -1);
      }
      this.drawScene(o, undefined, l);
      h.restore();
      return o;
    }
    toCanvas(t) {
      return this._toKonvaCanvas(t)._canvas;
    }
    toDataURL(t) {
      var e = (t = t || {}).mimeType || null;
      var i = t.quality || null;
      var r = this._toKonvaCanvas(t).toDataURL(e, i);
      if (t.callback) {
        t.callback(r);
      }
      return r;
    }
    toImage(t) {
      return new Promise((e, i) => {
        try {
          let i = t == null ? undefined : t.callback;
          if (i) {
            delete t.callback;
          }
          konvaTransformUtil.Util._urlToImage(this.toDataURL(t), function (t) {
            e(t);
            if (i != null) {
              i(t);
            }
          });
        } catch (t) {
          i(t);
        }
      });
    }
    toBlob(t) {
      return new Promise((e, i) => {
        try {
          let i = t == null ? undefined : t.callback;
          if (i) {
            delete t.callback;
          }
          this.toCanvas(t).toBlob(t => {
            e(t);
            if (i != null) {
              i(t);
            }
          }, t == null ? undefined : t.mimeType, t == null ? undefined : t.quality);
        } catch (t) {
          i(t);
        }
      });
    }
    setSize(t) {
      this.width(t.width);
      this.height(t.height);
      return this;
    }
    getSize() {
      return {
        width: this.width(),
        height: this.height()
      };
    }
    getClassName() {
      return this.className || this.nodeType;
    }
    getType() {
      return this.nodeType;
    }
    getDragDistance() {
      if (this.attrs.dragDistance !== undefined) {
        return this.attrs.dragDistance;
      } else if (this.parent) {
        return this.parent.getDragDistance();
      } else {
        return konvaCoreConfig.Konva.dragDistance;
      }
    }
    _off(t, e, i) {
      var r;
      var a;
      var n;
      var s = this.eventListeners[t];
      for (r = 0; r < s.length; r++) {
        a = s[r].name;
        n = s[r].handler;
        if ((a !== "konva" || e === "konva") && (!e || a === e) && (!i || i === n)) {
          s.splice(r, 1);
          if (s.length === 0) {
            delete this.eventListeners[t];
            break;
          }
          r--;
        }
      }
    }
    _fireChangeEvent(t, e, i) {
      this._fire(t + "Change", {
        oldVal: e,
        newVal: i
      });
    }
    addName(t) {
      if (!this.hasName(t)) {
        var e = this.name();
        this.name(e ? e + " " + t : t);
      }
      return this;
    }
    hasName(t) {
      if (!t) {
        return false;
      }
      let e = this.name();
      return !!e && (e || "").split(/\s/g).indexOf(t) !== -1;
    }
    removeName(t) {
      var e = (this.name() || "").split(/\s/g);
      var i = e.indexOf(t);
      if (i !== -1) {
        e.splice(i, 1);
        this.name(e.join(" "));
      }
      return this;
    }
    setAttr(t, e) {
      var i = this["set" + konvaTransformUtil.Util._capitalize(t)];
      if (konvaTransformUtil.Util._isFunction(i)) {
        i.call(this, e);
      } else {
        this._setAttr(t, e);
      }
      return this;
    }
    _requestDraw() {
      if (konvaCoreConfig.Konva.autoDrawEnabled) {
        let t = this.getLayer() || this.getStage();
        if (t != null) {
          t.batchDraw();
        }
      }
    }
    _setAttr(t, e) {
      var i = this.attrs[t];
      if (i !== e || konvaTransformUtil.Util.isObject(e)) {
        if (e == null) {
          delete this.attrs[t];
        } else {
          this.attrs[t] = e;
        }
        if (this._shouldFireChangeEvents) {
          this._fireChangeEvent(t, i, e);
        }
        this._requestDraw();
      }
    }
    _setComponentAttr(t, e, i) {
      var r;
      if (i !== undefined) {
        if (!(r = this.attrs[t])) {
          this.attrs[t] = this.getAttr(t);
        }
        this.attrs[t][e] = i;
        this._fireChangeEvent(t, r, i);
      }
    }
    _fireAndBubble(t, e, i) {
      if (e && this.nodeType === m) {
        e.target = this;
      }
      if (t !== p && t !== v || (!i || this !== i && (!this.isAncestorOf || !this.isAncestorOf(i))) && (this.nodeType !== "Stage" || !!i)) {
        this._fire(t, e);
        var r = (t === p || t === v) && i && i.isAncestorOf && i.isAncestorOf(this) && !i.isAncestorOf(this.parent);
        if ((e && !e.cancelBubble || !e) && this.parent && this.parent.isListening() && !r) {
          if (i && i.parent) {
            this._fireAndBubble.call(this.parent, t, e, i);
          } else {
            this._fireAndBubble.call(this.parent, t, e);
          }
        }
      }
    }
    _getProtoListeners(t) {
      let a = this._cache.get(d) ?? {};
      let n = a == null ? undefined : a[t];
      if (n === undefined) {
        n = [];
        let e = Object.getPrototypeOf(this);
        while (e) {
          let a = e.eventListeners?.[t] ?? [];
          n.push(...a);
          e = Object.getPrototypeOf(e);
        }
        a[t] = n;
        this._cache.set(d, a);
      }
      return n;
    }
    _fire(t, e) {
      (e = e || {}).currentTarget = this;
      e.type = t;
      let i = this._getProtoListeners(t);
      if (i) {
        for (var r = 0; r < i.length; r++) {
          i[r].handler.call(this, e);
        }
      }
      let a = this.eventListeners[t];
      if (a) {
        for (var r = 0; r < a.length; r++) {
          a[r].handler.call(this, e);
        }
      }
    }
    draw() {
      this.drawScene();
      this.drawHit();
      return this;
    }
    _createDragElement(t) {
      var e = t ? t.pointerId : undefined;
      var i = this.getStage();
      var r = this.getAbsolutePosition();
      if (i) {
        var a = i._getPointerById(e) || i._changedPointerPositions[0] || r;
        konvaDragDropManager.dragDropManager._dragElements.set(this._id, {
          node: this,
          startPointerPos: a,
          offset: {
            x: a.x - r.x,
            y: a.y - r.y
          },
          dragStatus: "ready",
          pointerId: e
        });
      }
    }
    startDrag(t, e = true) {
      if (!konvaDragDropManager.dragDropManager._dragElements.has(this._id)) {
        this._createDragElement(t);
      }
      konvaDragDropManager.dragDropManager._dragElements.get(this._id).dragStatus = "dragging";
      this.fire("dragstart", {
        type: "dragstart",
        target: this,
        evt: t && t.evt
      }, e);
    }
    _setDragPosition(t, e) {
      let i = this.getStage()._getPointerById(e.pointerId);
      if (i) {
        var a = {
          x: i.x - e.offset.x,
          y: i.y - e.offset.y
        };
        var n = this.dragBoundFunc();
        if (n !== undefined) {
          let e = n.call(this, a, t);
          if (e) {
            a = e;
          } else {
            konvaTransformUtil.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
          }
        }
        if (!this._lastPos || this._lastPos.x !== a.x || this._lastPos.y !== a.y) {
          this.setAbsolutePosition(a);
          this._requestDraw();
        }
        this._lastPos = a;
      }
    }
    stopDrag(t) {
      let e = konvaDragDropManager.dragDropManager._dragElements.get(this._id);
      if (e) {
        e.dragStatus = "stopped";
      }
      konvaDragDropManager.dragDropManager._endDragBefore(t);
      konvaDragDropManager.dragDropManager._endDragAfter(t);
    }
    setDraggable(t) {
      this._setAttr("draggable", t);
      this._dragChange();
    }
    isDragging() {
      let t = konvaDragDropManager.dragDropManager._dragElements.get(this._id);
      return !!t && t.dragStatus === "dragging";
    }
    _listenDrag() {
      this._dragCleanup();
      this.on("mousedown.konva touchstart.konva", function (t) {
        if ((t.evt.button === undefined || !!(konvaCoreConfig.Konva.dragButtons.indexOf(t.evt.button) >= 0)) && !this.isDragging()) {
          var e = false;
          konvaDragDropManager.dragDropManager._dragElements.forEach(t => {
            if (this.isAncestorOf(t.node)) {
              e = true;
            }
          });
          if (!e) {
            this._createDragElement(t);
          }
        }
      });
    }
    _dragChange() {
      if (this.attrs.draggable) {
        this._listenDrag();
      } else {
        this._dragCleanup();
        if (!this.getStage()) {
          return;
        }
        let t = konvaDragDropManager.dragDropManager._dragElements.get(this._id);
        let e = t && t.dragStatus === "dragging";
        let i = t && t.dragStatus === "ready";
        if (e) {
          this.stopDrag();
        } else if (i) {
          konvaDragDropManager.dragDropManager._dragElements.delete(this._id);
        }
      }
    }
    _dragCleanup() {
      this.off("mousedown.konva");
      this.off("touchstart.konva");
    }
    isClientRectOnScreen(t = {
      x: 0,
      y: 0
    }) {
      let e = this.getStage();
      if (!e) {
        return false;
      }
      let i = {
        x: -t.x,
        y: -t.y,
        width: e.width() + t.x * 2,
        height: e.height() + t.y * 2
      };
      return konvaTransformUtil.Util.haveIntersection(i, this.getClientRect());
    }
    static create(t, e) {
      if (konvaTransformUtil.Util._isString(t)) {
        t = JSON.parse(t);
      }
      return this._createNode(t, e);
    }
    static _createNode(t, e) {
      var i;
      var a;
      var n;
      var o = S.prototype.getClassName.call(t);
      var h = t.children;
      if (e) {
        t.attrs.container = e;
      }
      if (!konvaCoreConfig.Konva[o]) {
        konvaTransformUtil.Util.warn("Can not find a node with class name \"" + o + "\". Fallback to \"Shape\".");
        o = "Shape";
      }
      i = new konvaCoreConfig.Konva[o](t.attrs);
      if (h) {
        n = 0;
        a = h.length;
        for (; n < a; n++) {
          i.add(S._createNode(h[n]));
        }
      }
      return i;
    }
  }
  exports.Node = S;
  S.prototype.nodeType = "Node";
  S.prototype._attrsAffectingSize = [];
  S.prototype.eventListeners = {};
  S.prototype.on.call(S.prototype, "xChange.konva yChange.konva scaleXChange.konva scaleYChange.konva skewXChange.konva skewYChange.konva rotationChange.konva offsetXChange.konva offsetYChange.konva transformsEnabledChange.konva", function () {
    if (this._batchingTransformChange) {
      this._needClearTransformCache = true;
      return;
    }
    this._clearCache(_);
    this._clearSelfAndDescendantCache(c);
  });
  S.prototype.on.call(S.prototype, "visibleChange.konva", function () {
    this._clearSelfAndDescendantCache(b);
  });
  S.prototype.on.call(S.prototype, "listeningChange.konva", function () {
    this._clearSelfAndDescendantCache(g);
  });
  S.prototype.on.call(S.prototype, "opacityChange.konva", function () {
    this._clearSelfAndDescendantCache(l);
  });
  let C = konvaPropertyFactory.Factory.addGetterSetter;
  C(S, "zIndex");
  C(S, "absolutePosition");
  C(S, "position");
  C(S, "x", 0, konvaPropertyValidators.getNumberValidator());
  C(S, "y", 0, konvaPropertyValidators.getNumberValidator());
  C(S, "globalCompositeOperation", "source-over", konvaPropertyValidators.getStringValidator());
  C(S, "opacity", 1, konvaPropertyValidators.getNumberValidator());
  C(S, "name", "", konvaPropertyValidators.getStringValidator());
  C(S, "id", "", konvaPropertyValidators.getStringValidator());
  C(S, "rotation", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addComponentsGetterSetter(S, "scale", ["x", "y"]);
  C(S, "scaleX", 1, konvaPropertyValidators.getNumberValidator());
  C(S, "scaleY", 1, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addComponentsGetterSetter(S, "skew", ["x", "y"]);
  C(S, "skewX", 0, konvaPropertyValidators.getNumberValidator());
  C(S, "skewY", 0, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addComponentsGetterSetter(S, "offset", ["x", "y"]);
  C(S, "offsetX", 0, konvaPropertyValidators.getNumberValidator());
  C(S, "offsetY", 0, konvaPropertyValidators.getNumberValidator());
  C(S, "dragDistance", null, konvaPropertyValidators.getNumberValidator());
  C(S, "width", 0, konvaPropertyValidators.getNumberValidator());
  C(S, "height", 0, konvaPropertyValidators.getNumberValidator());
  C(S, "listening", true, konvaPropertyValidators.getBooleanValidator());
  C(S, "preventDefault", true, konvaPropertyValidators.getBooleanValidator());
  C(S, "filters", null, function (t) {
    this._filterUpToDate = false;
    return t;
  });
  C(S, "visible", true, konvaPropertyValidators.getBooleanValidator());
  C(S, "transformsEnabled", "all", konvaPropertyValidators.getStringValidator());
  C(S, "size");
  C(S, "dragBoundFunc");
  C(S, "draggable", false, konvaPropertyValidators.getBooleanValidator());
  konvaPropertyFactory.Factory.backCompat(S, {
    rotateDeg: "rotate",
    setRotationDeg: "setRotation",
    getRotationDeg: "getRotation"
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}