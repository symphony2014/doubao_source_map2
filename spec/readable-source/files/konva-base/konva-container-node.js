// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'a' to 'konvaCoreNodeBase'
// - Resolved require(395622) to 'konva-core-node-base'
// - Renamed variable 'n' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 757034
         */
module.exports = function (module, exports, require) {
  exports.Container = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  class s extends konvaCoreNodeBase.Node {
    constructor() {
      super(...arguments);
      this.children = [];
    }
    getChildren(t) {
      if (!t) {
        return this.children || [];
      }
      let e = this.children || [];
      var i = [];
      e.forEach(function (e) {
        if (t(e)) {
          i.push(e);
        }
      });
      return i;
    }
    hasChildren() {
      return this.getChildren().length > 0;
    }
    removeChildren() {
      this.getChildren().forEach(t => {
        t.parent = null;
        t.index = 0;
        t.remove();
      });
      this.children = [];
      this._requestDraw();
      return this;
    }
    destroyChildren() {
      this.getChildren().forEach(t => {
        t.parent = null;
        t.index = 0;
        t.destroy();
      });
      this.children = [];
      this._requestDraw();
      return this;
    }
    add(...t) {
      if (t.length === 0) {
        return this;
      }
      if (t.length > 1) {
        for (var e = 0; e < t.length; e++) {
          this.add(t[e]);
        }
        return this;
      }
      let i = t[0];
      if (i.getParent()) {
        i.moveTo(this);
      } else {
        this._validateAdd(i);
        i.index = this.getChildren().length;
        i.parent = this;
        i._clearCaches();
        this.getChildren().push(i);
        this._fire("add", {
          child: i
        });
        this._requestDraw();
      }
      return this;
    }
    destroy() {
      if (this.hasChildren()) {
        this.destroyChildren();
      }
      super.destroy();
      return this;
    }
    find(t) {
      return this._generalFind(t, false);
    }
    findOne(t) {
      var e = this._generalFind(t, true);
      if (e.length > 0) {
        return e[0];
      } else {
        return undefined;
      }
    }
    _generalFind(t, e) {
      var i = [];
      this._descendants(r => {
        let a = r._isMatch(t);
        if (a) {
          i.push(r);
        }
        return !!a && !!e;
      });
      return i;
    }
    _descendants(t) {
      let e = false;
      for (let e of this.getChildren()) {
        if (t(e) || e.hasChildren() && e._descendants(t)) {
          return true;
        }
      }
      return false;
    }
    toObject() {
      var t = konvaCoreNodeBase.Node.prototype.toObject.call(this);
      t.children = [];
      this.getChildren().forEach(e => {
        t.children.push(e.toObject());
      });
      return t;
    }
    isAncestorOf(t) {
      for (var e = t.getParent(); e;) {
        if (e._id === this._id) {
          return true;
        }
        e = e.getParent();
      }
      return false;
    }
    clone(t) {
      var e = konvaCoreNodeBase.Node.prototype.clone.call(this, t);
      this.getChildren().forEach(function (t) {
        e.add(t.clone());
      });
      return e;
    }
    getAllIntersections(t) {
      var e = [];
      this.find("Shape").forEach(i => {
        if (i.isVisible() && i.intersects(t)) {
          e.push(i);
        }
      });
      return e;
    }
    _clearSelfAndDescendantCache(t) {
      var e;
      super._clearSelfAndDescendantCache(t);
      if (!this.isCached()) {
        if ((e = this.children) !== null && e !== undefined) {
          e.forEach(function (e) {
            e._clearSelfAndDescendantCache(t);
          });
        }
      }
    }
    _setChildrenIndices() {
      var t;
      if ((t = this.children) !== null && t !== undefined) {
        t.forEach(function (t, e) {
          t.index = e;
        });
      }
      this._requestDraw();
    }
    drawScene(t, e, i) {
      var r = this.getLayer();
      var a = t || r && r.getCanvas();
      var n = a && a.getContext();
      var s = this._getCanvasCache();
      var o = s && s.scene;
      var h = a && a.isCache;
      if (!this.isVisible() && !h) {
        return this;
      }
      if (o) {
        n.save();
        var l = this.getAbsoluteTransform(e).getMatrix();
        n.transform(l[0], l[1], l[2], l[3], l[4], l[5]);
        this._drawCachedSceneCanvas(n);
        n.restore();
      } else {
        this._drawChildren("drawScene", a, e, i);
      }
      return this;
    }
    drawHit(t, e) {
      if (!this.shouldDrawHit(e)) {
        return this;
      }
      var i = this.getLayer();
      var r = t || i && i.hitCanvas;
      var a = r && r.getContext();
      var n = this._getCanvasCache();
      if (n && n.hit) {
        a.save();
        var s = this.getAbsoluteTransform(e).getMatrix();
        a.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
        this._drawCachedHitCanvas(a);
        a.restore();
      } else {
        this._drawChildren("drawHit", r, e);
      }
      return this;
    }
    _drawChildren(t, e, i, r) {
      var a;
      var n = e && e.getContext();
      var s = this.clipWidth();
      var o = this.clipHeight();
      var h = this.clipFunc();
      var l = typeof s == "number" && typeof o == "number" || h;
      let d = i === this;
      if (l) {
        let t;
        n.save();
        var c = this.getAbsoluteTransform(i);
        var u = c.getMatrix();
        n.transform(u[0], u[1], u[2], u[3], u[4], u[5]);
        n.beginPath();
        if (h) {
          t = h.call(this, n, this);
        } else {
          var f = this.clipX();
          var g = this.clipY();
          n.rect(f || 0, g || 0, s, o);
        }
        n.clip.apply(n, t);
        u = c.copy().invert().getMatrix();
        n.transform(u[0], u[1], u[2], u[3], u[4], u[5]);
      }
      var p = !d && this.globalCompositeOperation() !== "source-over" && t === "drawScene";
      if (p) {
        n.save();
        n._applyGlobalCompositeOperation(this);
      }
      if ((a = this.children) !== null && a !== undefined) {
        a.forEach(function (a) {
          a[t](e, i, r);
        });
      }
      if (p) {
        n.restore();
      }
      if (l) {
        n.restore();
      }
    }
    getClientRect(t = {}) {
      var e;
      var i;
      var r;
      var a;
      var n;
      var s = t.skipTransform;
      var o = t.relativeTo;
      var h = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
      };
      var l = this;
      if ((e = this.children) !== null && e !== undefined) {
        e.forEach(function (e) {
          if (e.visible()) {
            var s = e.getClientRect({
              relativeTo: l,
              skipShadow: t.skipShadow,
              skipStroke: t.skipStroke
            });
            if (s.width !== 0 || s.height !== 0) {
              if (i === undefined) {
                i = s.x;
                r = s.y;
                a = s.x + s.width;
                n = s.y + s.height;
              } else {
                i = Math.min(i, s.x);
                r = Math.min(r, s.y);
                a = Math.max(a, s.x + s.width);
                n = Math.max(n, s.y + s.height);
              }
            }
          }
        });
      }
      var d = this.find("Shape");
      var c = false;
      var u = 0;
      for (; u < d.length; u++) {
        if (d[u]._isVisible(this)) {
          c = true;
          break;
        }
      }
      h = c && i !== undefined ? {
        x: i,
        y: r,
        width: a - i,
        height: n - r
      } : {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      if (s) {
        return h;
      } else {
        return this._transformedRect(h, o);
      }
    }
  }
  exports.Container = s;
  konvaPropertyFactory.Factory.addComponentsGetterSetter(s, "clip", ["x", "y", "width", "height"]);
  konvaPropertyFactory.Factory.addGetterSetter(s, "clipX", undefined, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(s, "clipY", undefined, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(s, "clipWidth", undefined, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(s, "clipHeight", undefined, konvaPropertyValidators.getNumberValidator());
  konvaPropertyFactory.Factory.addGetterSetter(s, "clipFunc");
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}