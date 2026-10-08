// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DomTextRenderNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 171909
         */
module.exports = function (module, exports, require) {
  var i;
  var renderConstants = require("render-constants") /*id: 207779*/;
  var svgPathElement = require("svg-path-element") /*id: 669730*/;
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
  var componentRendererUtils = require("component-renderer-utils") /*id: 646116*/;
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
  function h(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function l() {
    return (l = Object.assign || function (t) {
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
  var u = ["x", "y", "text", "fontSize", "fontFamily", "textAlign", "textBaseline", "fontWeight"];
  var c = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "dom";
      e.fillAble = false;
      e.strokeAble = false;
      e.shapeKeys = u;
      e._contentDirty = true;
      return e;
    }
    h(e, t);
    e.prototype.getDefaultAttr = function () {
      return l(l({}, t.prototype.getDefaultAttr.call(this)), {
        x: 0,
        y: 0,
        textAlign: "left",
        textBaseline: "top",
        renderer: "html"
      });
    };
    e.prototype.mounted = function () {
      t.prototype.mounted.call(this);
      if (!this._container) {
        this._container = document.createElement("div");
        this._container.className = renderConstants.canvasDomLayer;
      }
      if (this.ownerRender) {
        this.ownerRender.getDom().appendChild(this._container);
        this.update();
      }
    };
    e.prototype.update = function () {
      var t = this;
      var e = this._container;
      if (e) {
        this._renderer = componentRendererUtils.getRenderer(this.attr.renderer);
        var n = this.getExtendAttr("fontSize") + "px";
        var i = this.getExtendAttr("fontFamily");
        var r = this.getExtendAttr("fill");
        var o = this.getExtendAttr("fontWeight");
        var a = this.getExtendAttr("pointerEvents");
        var h = this.getExtendAttr("cursor");
        var l = this.getExtendAttr("textAlign");
        var u = this.getExtendAttr("textBaseline");
        var c = {
          lineHeight: "100%",
          position: "absolute",
          fontSize: n,
          fontFamily: i,
          color: r,
          fontWeight: o + "",
          pointerEvents: a,
          cursor: h
        };
        for (var p in c) {
          e.style[p] = c[p];
        }
        e.style.display = this.attr.display === false ? "none" : "block";
        e.style.textAlign = l;
        this._setTransform();
        if (l === "left") {
          e.style.left = this.attr.x + "px";
          e.style.right = "auto";
        } else if (l === "right") {
          e.style.left = "auto";
          e.style.right = this.ownerRender.getWidth() - this.attr.x + "px";
        }
        if (u === "top") {
          e.style.top = this.attr.y + "px";
          e.style.bottom = "auto";
        } else if (u === "bottom") {
          e.style.top = "auto";
          e.style.bottom = this.ownerRender.getHeight() - this.attr.y + "px";
        }
        if (l === "center" || u === "middle") {
          requestAnimationFrame(function () {
            var n = e.clientWidth;
            var i = e.clientHeight;
            if (l === "center") {
              e.style.left = t.attr.x - n / 2 + "px";
            }
            if (u === "middle") {
              e.style.top = t.attr.y - i / 2 + "px";
            }
          });
        }
        if (this._contentDirty) {
          this._renderer.update(e, this.attr.text);
        }
        this._contentDirty = false;
      }
    };
    e.prototype.destroy = function () {
      t.prototype.destroy.call(this);
      this._renderer.destroy(this._container);
      this._container.parentNode.removeChild(this._container);
    };
    e.prototype.dirtyGlobalTransform = function () {
      t.prototype.dirtyGlobalTransform.call(this);
      this._setTransform();
    };
    e.prototype.getContainer = function () {
      return this._container;
    };
    e.prototype.onAttrChange = function (e, n, i) {
      t.prototype.onAttrChange.call(this, e, n, i);
      if (e === "text") {
        this._contentDirty = true;
      }
    };
    e.prototype.isPointOnPath = function (t, e) {
      return geometryRectUtils.containsPoint(this.getBBox(), t, e);
    };
    e.prototype.computeBBox = function () {
      if (!this._container) {
        return geometryRectUtils.createEmptyRect();
      }
      var t = this.attr;
      var e = t.x;
      var n = t.y;
      var i = this.getExtendAttr("textAlign");
      var r = this.getExtendAttr("textBaseline");
      var o = this._container.clientWidth;
      var s = this._container.clientHeight;
      var h = {
        x: e,
        y: n,
        width: o,
        height: s
      };
      if (i === "center") {
        h.x = e - o / 2;
      } else if (i === "right") {
        h.x = e - o;
      }
      if (r === "top") {
        h.y = n;
      } else if (r === "middle") {
        h.y = n - s / 2;
      } else {
        h.y = n - s;
      }
      return h;
    };
    e.prototype._setTransform = function () {
      var t = this.attr;
      var e = t.x;
      var n = t.y;
      var i = this._container;
      if (i) {
        var r = this.getExtendAttr("textAlign");
        var o = this.getExtendAttr("textBaseline");
        var a = this.getGlobalTransform();
        var s = [a[0], a[1], a[3], a[4], a[6], a[7]];
        var h = {
          left: -e + "px",
          center: "calc(" + -e + "px + 50%)",
          right: "calc(" + -e + "px + 100%)",
          top: -n + "px",
          middle: "calc(" + -n + "px + 50%)",
          bottom: "calc(" + -n + "px + 100%)"
        };
        var l = "matrix(" + s.join(",") + ")";
        i.style.transform = l;
        i.style.transformOrigin = h[r] + " " + h[o];
      }
    };
    return e;
  }(svgPathElement.SvgPathElement);
  exports.DomTextRenderNode = c;
}