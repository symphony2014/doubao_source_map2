// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SvgGroupElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 249968
         */
module.exports = function (module, exports, require) {
  var i;
  var arrayDiffEngine = require("array-diff-engine") /*id: 810065*/;
  var svgRenderableBaseElement = require("svg-renderable-base-element") /*id: 707305*/;
  var canvasTextElement = require("canvas-text-element") /*id: 719723*/;
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  i = function (t, e) {
    return (i = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function u(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function c() {
    return (c = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function p() {
    var t = 0;
    var e = 0;
    var n = arguments.length;
    for (; e < n; e++) {
      t += arguments[e].length;
    }
    var i = Array(t);
    var r = 0;
    var e = 0;
    for (; e < n; e++) {
      var o = arguments[e];
      var a = 0;
      var s = o.length;
      for (; a < s; a++, r++) {
        i[r] = o[a];
      }
    }
    return i;
  }
  var d = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "group";
      e.svgTagName = "g";
      e.fillAble = false;
      e.strokeAble = false;
      e.shapeKeys = canvasTextElement.textShapeKeys;
      e._length = 0;
      e._chunks = [];
      return e;
    }
    u(e, t);
    Object.defineProperty(e.prototype, "size", {
      get: function () {
        return this._length;
      },
      enumerable: true,
      configurable: true
    });
    e.prototype.getDefaultAttr = function () {
      return c({}, t.prototype.getDefaultAttr.call(this));
    };
    Object.defineProperty(e.prototype, "isGroup", {
      get: function () {
        return true;
      },
      enumerable: true,
      configurable: true
    });
    e.prototype.onAttrChange = function (e, n, i) {
      t.prototype.onAttrChange.call(this, e, n, i);
      if (canvasTextElement.textShapeKeys.indexOf(e) !== -1) {
        this.dirtyTextChildBBox();
      }
    };
    e.prototype.getAnimationKeys = function () {
      return p(t.prototype.getAnimationKeys.call(this), ["fontSize"]);
    };
    e.prototype.computeBoundingClientRect = function () {
      return this.getBBox();
    };
    e.prototype.getCurrentDirtyRect = function () {
      var t = safeArrayFlattenUtil.safeFlattenArray(this.children().filter(function (t) {
        return t.attr.display;
      }).map(function (t) {
        return t.getDirtyRects();
      }));
      return geometryRectUtils.snapRectToGrid(geometryRectUtils.getRectsBounds(t));
    };
    e.prototype.computeBBox = function () {
      var t = this.children().filter(function (t) {
        return t.attr.display;
      }).map(function (t) {
        return t.getBoundingClientRect();
      });
      return geometryRectUtils.getRectsBounds(t);
    };
    e.prototype.mounted = function () {
      t.prototype.mounted.call(this);
      if (this._chunks.length) {
        this.onChunkChange();
      }
      this.eachChild(function (t) {
        return t.mounted();
      });
    };
    e.prototype.dirtyTransform = function () {
      t.prototype.dirtyTransform.call(this);
      this.eachChild(function (t) {
        return t.dirtyGlobalTransform();
      });
    };
    e.prototype.dirtyGlobalTransform = function () {
      t.prototype.dirtyGlobalTransform.call(this);
      this.eachChild(function (t) {
        return t.dirtyGlobalTransform();
      });
    };
    e.prototype.add = function (t, e = true) {
      if (t) {
        if (t.parentNode === this) {
          this._moveToTail(t);
          if (e) {
            t.dirty();
          }
        } else {
          if (this.firstChild) {
            t.prevSibling = this.lastChild;
            this.lastChild.nextSibling = t;
            this.lastChild = t;
          } else {
            this.firstChild = this.lastChild = t;
          }
          t.nextSibling = null;
          this._length += 1;
          this._mountNode(t, e);
        }
        return this;
      } else {
        return undefined;
      }
    };
    e.prototype.prepend = function (t) {
      if (!this.firstChild) {
        return this.add(t);
      }
      t.nextSibling = this.firstChild;
      this.firstChild.prevSibling = t;
      this.firstChild = t;
      this._length += 1;
      this._mountNode(t);
    };
    e.prototype.addAll = function (t) {
      var e = this;
      t.forEach(function (t) {
        return e.add(t);
      });
      return this;
    };
    e.prototype.addChunk = function (t = []) {
      if (t.length !== 0) {
        this._chunks.push(t);
        this.onChunkChange();
      }
      return this;
    };
    e.prototype.replaceChunks = function (t) {
      this._chunks = t;
      this.onChunkChange();
    };
    e.prototype.clearChunks = function () {
      this._chunks = [];
      this.onChunkChange();
    };
    e.prototype.getChunks = function () {
      return this._chunks;
    };
    e.prototype.onChunkChange = function () {
      if (this.ownerRender) {
        if (this._chunks.length) {
          this.ownerRender.chunksElement.add(this);
          this.ownerRender.nextTick();
        } else {
          this.ownerRender.chunksElement.delete(this);
        }
      }
    };
    e.prototype.mountChunk = function (t) {
      var e = this;
      this._chunks = this._chunks.filter(function (e) {
        return e !== t;
      });
      t.forEach(function (t) {
        return e.add(t, false);
      });
      if (this._chunks.length === 0) {
        this.ownerRender.chunksElement.delete(this);
      }
    };
    e.prototype.remove = function (t) {
      if (t.parentNode === this) {
        if (t === this.firstChild) {
          this.firstChild = t.nextSibling;
        }
        if (t === this.lastChild) {
          this.lastChild = t.prevSibling;
        }
        if (t.nextSibling) {
          t.nextSibling.prevSibling = t.prevSibling;
        }
        if (t.prevSibling) {
          t.prevSibling.nextSibling = t.nextSibling;
        }
        t.prevSibling = null;
        t.nextSibling = null;
        this._length--;
        t.dirty();
        t.destroy();
        this.dirtyBBox();
      }
    };
    e.prototype.clear = function () {
      var t = this;
      this.children().forEach(function (e) {
        return t.remove(e);
      });
      this._length = 0;
      this._chunks = [];
      this.dirty();
      this.dirtyBBox();
    };
    e.prototype.childAt = function (t) {
      if (t < 0 || t >= this._length) {
        return null;
      }
      var e = null;
      var n = 0;
      if (this._length / 2 > t) {
        for (e = this.firstChild; n++ < t;) {
          e = e.nextSibling;
        }
      } else {
        e = this.lastChild;
        n = this._length - 1;
        while (n-- > t) {
          e = e.prevSibling;
        }
      }
      return e;
    };
    e.prototype.destroy = function () {
      if (this._chunks.length) {
        this.clearChunks();
      }
      this.clear();
      t.prototype.destroy.call(this);
      this._chunks = [];
    };
    e.prototype.getLeafNodesSize = function (t = Number.MAX_SAFE_INTEGER) {
      if (this.size >= t) {
        return t;
      }
      var e = this.childNodes;
      var n = 0;
      while (e.length) {
        var i = e.pop();
        if (++n >= t) {
          break;
        }
        if (i.isGroup) {
          if (i.size > t) {
            return t;
          }
          i.eachChild(function (n) {
            if (e.length < t) {
              e.push(n);
            }
          });
        }
      }
      return n;
    };
    e.prototype.updateAll = function (t, e) {
      var n = this;
      if (e === undefined) {
        e = true;
      }
      if (this._chunks.length) {
        this.replaceChunks([]);
      }
      var i = this.children();
      if (i.length === 0) {
        this.addAll(t);
        return;
      }
      var o = i.slice();
      var a = arrayDiffEngine.calculateArrayDiff(i, t, function (t, e) {
        var n = t.attr;
        if (n.key !== undefined) {
          return t.type + n.key;
        } else {
          return "auto-key-" + t.type + "-" + e;
        }
      });
      a.removed.forEach(function (t) {
        o.splice(t, 1);
        var e = i[t];
        var r = e.parentNode;
        e.parentNode = n;
        n.remove(e);
        if (r !== n) {
          e.parentNode = r;
        }
      });
      a.ordered.forEach(function (t, e) {
        var n = t[0];
        var r = t[1];
        o.splice(n, 1);
        o.splice(r, 0, i[a.pureChanged[e][0]]);
      });
      a.maintained.forEach(function (r) {
        var o = r[0];
        var a = r[1];
        var s = i[o];
        var h = t[a];
        if (s === h) {
          s.ownerRender = h.ownerRender = n.ownerRender;
          return;
        }
        if (h.attr.ref) {
          h.attr.ref.current = s;
        }
        if (s.isGroup) {
          s.updateAll(h.children(), e);
          var l = h.getChunks();
          s.replaceChunks(l);
        }
        var u = h.getDragOffset();
        s.setDragOffset(u[0], u[1]);
        n._diffUpdateElement(s, h, e);
      });
      a.added.forEach(function (e) {
        n.add(t[e]);
        o.splice(e, 0, t[e]);
      });
      this.firstChild = o[0];
      this.lastChild = o[o.length - 1];
      for (var s = 0; s < o.length; s++) {
        o[s].prevSibling = o[s - 1];
        o[s].nextSibling = o[s + 1];
      }
      this.afterUpdateAll();
    };
    e.prototype.eachChild = function (t) {
      for (var e = this.firstChild; e;) {
        t(e);
        e = e.nextSibling;
      }
    };
    e.prototype.children = function () {
      var t = [];
      var e = this.firstChild;
      while (e) {
        t.push(e);
        e = e.nextSibling;
      }
      e = null;
      return t;
    };
    e.prototype.getAllLeafNodes = function (t, e) {
      this.eachChild(function (n) {
        if (n.attr.display !== false) {
          if (n.isGroup) {
            n.getAllLeafNodes(t, e);
          } else if (e(n)) {
            t.push(n);
          }
        }
      });
      return t;
    };
    e.prototype.resetPickRGB = function () {
      t.prototype.resetPickRGB.call(this);
      this.eachChild(function (t) {
        return t.resetPickRGB();
      });
    };
    e.prototype.dirtyClipTarget = function (e) {
      t.prototype.dirtyClipTarget.call(this, e);
      this.eachChild(function (t) {
        return t.dirtyClipTarget(e);
      });
    };
    e.prototype.dirtyTextChildBBox = function () {
      this.eachChild(function (t) {
        if (t.type === "text") {
          t.dirtyBBox();
        }
        if (t.isGroup) {
          t.dirtyTextChildBBox();
        }
      });
    };
    e.prototype.onChildDirty = function () {
      var t;
      if ((t = this._refElements) !== null && t !== undefined) {
        t.forEach(function (t) {
          t.dirty();
          t.dirtyTransform();
          t.dirtyBBox();
        });
      }
    };
    e.prototype.afterUpdateAll = function () {};
    e.prototype._mountNode = function (t, e = true) {
      t.parentNode = this;
      t.mounted();
      if (e) {
        t.dirty();
      }
      this.dirtyBBox();
    };
    e.prototype._moveToTail = function (t) {
      if (this.lastChild !== t) {
        if (this.firstChild === t) {
          this.firstChild = t.nextSibling;
          this.firstChild.prevSibling = null;
          var n = this.lastChild;
          t.prevSibling = this.lastChild;
          this.lastChild = n.nextSibling = t;
          t.nextSibling = null;
        } else {
          t.prevSibling.nextSibling = t.nextSibling;
          if (t.nextSibling) {
            t.nextSibling.prevSibling = t.prevSibling;
          }
          t.prevSibling = this.lastChild;
          this.lastChild.nextSibling = t;
          t.nextSibling = null;
          this.lastChild = t;
        }
        if (this.ownerRender?.renderer === "svg") {
          var i = this._findSVGDomNode(t);
          if (i && i.parentNode) {
            i.parentNode.appendChild(i);
          }
        }
      }
    };
    e.prototype._diffUpdateElement = function (t, e, n) {
      var i = t.attr;
      var r = e.attr;
      var a = e.attr;
      var s = a.transitionDuration;
      var h = s === undefined ? svgRenderableBaseElement.defaultAnimationConfig.during : s;
      var u = a.transitionEase;
      var c = u === undefined ? svgRenderableBaseElement.defaultAnimationConfig.ease : u;
      var p = a.transitionProperty;
      var d = p === undefined ? "all" : p;
      var f = a.transitionDelay;
      t.startAttrTransaction();
      for (var g in i) {
        if (!(g in r)) {
          t.removeAttr(g);
        }
      }
      if (n && d !== "none" && d.length !== 0) {
        var y = d === "all" ? r : throttledPathFilterStringify.throttledPathStr(r, d);
        t.stopAllAnimation().animateTo(y, h, c, null, f === undefined ? 0 : f);
      } else {
        t.setAttr(r);
      }
      if (t.$$CustomType) {
        t.skipUpdate();
      }
      t.endAttrTransaction();
    };
    e.prototype._findSVGDomNode = function (t) {
      return this.ownerRender.getPainter().findDOMNode(t);
    };
    return e;
  }(svgRenderableBaseElement.SvgRenderableElement);
  exports.SvgGroupElement = d;
}