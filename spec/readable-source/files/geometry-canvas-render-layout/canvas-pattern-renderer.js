// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CanvasPattern'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 263643
         */
module.exports = function (module, exports, require) {
  var i;
  var imageCacheLoader = require("image-cache-loader") /*id: 685396*/;
  var canvasSvgRendererModule = require("canvas-svg-renderer-module") /*id: 609194*/;
  var envFeatureDetect = require("env-feature-detect") /*id: 642709*/;
  var canvasCreatorManager = require("canvas-creator-manager") /*id: 705110*/;
  var h = 1;
  var l = function () {
    function t(t) {
      this.type = "pattern";
      this.isPattern = true;
      this.option = t;
      this.id = "okee-render-pattern-" + h++;
    }
    t.prototype.isReady = function () {
      return !!this._pattern;
    };
    t.prototype.getCanvasContextStyle = function (t, e) {
      var n = this;
      var h = this.option;
      var l = h.image;
      var u = h.repeat;
      var c = h.element;
      var p = h.width;
      var d = h.height;
      if (!this._pattern) {
        if (typeof l == "string") {
          var f = imageCacheLoader.loadImage(l, this.id, function (i) {
            n._pattern = t.createPattern(i, u);
            e();
          });
          if (f) {
            this._pattern = t.createPattern(f, u);
            e();
          }
        } else if (envFeatureDetect.isBrowser && l instanceof HTMLImageElement) {
          if (l.complete) {
            try {
              this._pattern = t.createPattern(l, u);
            } catch (t) {}
          } else {
            l.onload = function () {
              try {
                n._pattern = t.createPattern(l, u);
                n._pattern.setTransform();
                e();
              } catch (t) {
                e();
              }
            };
          }
        } else if (c) {
          var g = envFeatureDetect.isBrowser && i ? i : canvasCreatorManager.getCanvasCreator()(p, d);
          var y = new canvasSvgRendererModule.CanvasSvgRenderer(g);
          var v = envFeatureDetect.isBrowser ? y.dpr : 1;
          if (envFeatureDetect.isBrowser) {
            y.resize(p, d);
          }
          if (Array.isArray(c)) {
            y.addAll(c);
          } else {
            y.add(c);
          }
          y.refreshImmediately();
          y.dispose();
          if (envFeatureDetect.isBrowser) {
            var m = new Image();
            var x = g.toDataURL();
            m.onload = function () {
              n._pattern = t.createPattern(m, "repeat");
              if (n._pattern.setTransform) {
                var i = new DOMMatrix([1 / v, 0, 0, 1 / v, 0, 0]);
                n._pattern.setTransform(i);
              }
              e();
            };
            m.src = x;
          } else {
            this._pattern = t.createPattern(g, "repeat");
            e();
          }
        }
      }
      return this._pattern;
    };
    t.prototype.getSVGNode = function () {
      var t = this;
      var e = this.option;
      var n = e.image;
      var i = e.element;
      if (n) {
        var r = n.width;
        var o = n.height;
        var a = n.src;
        return {
          svgTagName: "pattern",
          svgAttr: {
            id: this.id,
            x: 0,
            y: 0,
            width: r,
            height: o,
            patternUnits: "userSpaceOnUse"
          },
          childNodes: [{
            svgTagName: "image",
            svgAttr: {
              "xlink:href": a,
              x: 0,
              y: 0,
              width: r,
              height: o
            }
          }]
        };
      }
      if (i) {
        var s = Array.isArray(i) ? i : [i];
        var h = this.option;
        var r = h.width;
        var o = h.height;
        return {
          svgTagName: "pattern",
          svgAttr: {
            id: this.id,
            x: 0,
            y: 0,
            width: r,
            height: o,
            patternUnits: "userSpaceOnUse"
          },
          childNodes: s.map(function (e) {
            return t._getNodeData(e);
          })
        };
      }
    };
    t.prototype._getNodeData = function (t) {
      var e = this;
      return {
        svgTagName: t.svgTagName,
        svgAttr: t.getSvgAttributes(),
        childNodes: t.childNodes.map(function (t) {
          return e._getNodeData(t);
        })
      };
    };
    return t;
  }();
  exports.CanvasPattern = l;
}