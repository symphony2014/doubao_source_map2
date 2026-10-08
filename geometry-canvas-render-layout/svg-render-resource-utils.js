// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BY' to 'collectShadows'
// - Renamed export 'Mg' to 'collectPaintStyles'
// - Renamed export 'NG' to 'svgAttrMap'
// - Renamed export 'aE' to 'getClipId'
// - Renamed export 'ie' to 'collectMarkers'
// - Renamed export 'pu' to 'collectClips'
// - Renamed export 'q2' to 'buildSvgStyle'
// - Renamed export 'qV' to 'createSvgRoot'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 815682
         */
module.exports = function (module, exports, require) {
  var svgRenderableBaseElement = require("svg-renderable-base-element") /*id: 707305*/;
  var matrixIdentityCreate = require("matrix-identity-create") /*id: 609577*/;
  var matrix3Utils = require("matrix3-utils") /*id: 852209*/;
  var renderConstants = require("render-constants") /*id: 207779*/;
  var colorRenderUtils = require("color-render-utils") /*id: 286955*/;
  function h(t) {
    return "matrix(" + [t[0], t[1], t[3], t[4], t[6], t[7]].join(" ") + ")";
  }
  var l = {
    "clip-path": "clip",
    fill: "fill",
    stroke: "stroke",
    "stroke-width": "lineWidth",
    "stroke-linecap": "lineCap",
    "stroke-linjoin": "lineJoin",
    "stroke-miterlimit": "miterLimit",
    "stroke-dasharray": "lineDash",
    "stroke-dashoffset": "lineDashOffset",
    "font-size": "fontSize",
    "font-weight": "fontWeight",
    "font-family": "fontFamily",
    "font-style": "fontStyle",
    display: "display",
    opacity: "opacity",
    "fill-opacity": "fillOpacity",
    "stroke-opacity": "strokeOpacity",
    cursor: "cursor"
  };
  function u(t, e) {
    return {
      width: t,
      height: e,
      fill: "none",
      xmlns: renderConstants.namespaceSvg,
      "xmlns:xlink": renderConstants.namespaceXlink,
      style: "user-select: none;cursor: default;font-size:" + svgRenderableBaseElement.defaultRenderStyle.fontSize + "px; font-family: " + svgRenderableBaseElement.defaultRenderStyle.fontFamily
    };
  }
  function c(t) {
    var e = t.attr;
    var n = e.fill;
    var l = e.stroke;
    var u = e.color;
    var c = e.lineWidth;
    var d = e.lineDash;
    var f = e.lineDashOffset;
    var g = e.lineCap;
    var y = e.miterLimit;
    var v = e.lineJoin;
    var m = e.opacity;
    var x = e.fillOpacity;
    var _ = e.strokeOpacity;
    var b = e.cursor;
    var w = e.display;
    var S = e.fontSize;
    var A = e.fontFamily;
    var E = e.fontWeight;
    var k = e.fontStyle;
    var M = e.shadowColor;
    var P = e.shadowBlur;
    var O = e.markerStart;
    var C = e.markerEnd;
    var T = {};
    var I = t.getClipElement();
    var Z = t.getTransform();
    var L = t.getDragOffset();
    var R = L[0] !== 0 || L[1] !== 0;
    if (I) {
      T["clip-path"] = "url(#" + p(I) + ")";
    }
    if (R || Z !== renderConstants.identityMatrix3 || svgRenderableBaseElement.transformKeys.some(function (e) {
      return e in t.attr;
    })) {
      if (R) {
        var D = t.getGlobalTransform();
        var B = t.parentNode.getGlobalTransform();
        var j = matrixIdentityCreate.createIdentity3();
        matrix3Utils.multiplyMatrices(j, matrix3Utils.invertMatrix(j, B), D);
        T.transform = h(j);
      } else {
        T.transform = h(Z);
      }
    }
    if (n) {
      T.fill = colorRenderUtils.getColorCssValue(n);
    }
    if (l) {
      T.stroke = colorRenderUtils.getColorCssValue(l);
    }
    if (u) {
      T.color = colorRenderUtils.getColorCssValue(u);
    }
    if (c !== undefined && c >= 0) {
      T["stroke-width"] = (t.attr.strokeNoScale ? t.getExtendAttr("lineWidth") : c) + "";
    }
    if (m !== undefined) {
      T.opacity = m + "";
    }
    if (x !== undefined) {
      T["fill-opacity"] = x + "";
    }
    if (_ !== undefined) {
      T["stroke-opacity"] = _ + "";
    }
    if (!w) {
      T.display = "none";
    }
    if (b) {
      T.cursor = b;
    }
    if (S !== undefined) {
      T["font-size"] = S + "";
    }
    if (E !== undefined) {
      T["font-weight"] = E + "";
    }
    if (A !== undefined) {
      T["font-family"] = A;
    }
    if (k !== undefined) {
      T["font-style"] = k;
    }
    if (d) {
      T["stroke-dasharray"] = d.join(" ");
    }
    if (f !== undefined) {
      T["stroke-dashoffset"] = f + "";
    }
    if (g) {
      T["stroke-linecap"] = g;
    }
    if (v) {
      T["stroke-linejoin"] = v;
    }
    if (y) {
      T["stroke-miterlimit"] = y + "";
    }
    if (M && P >= 0) {
      T.filter = "url(#" + t.getShadowObj().id + ")";
    }
    if (O) {
      T["marker-start"] = "url(#" + O.getMarkerId() + ")";
    }
    if (C) {
      T["marker-end"] = "url(#" + C.getMarkerId() + ")";
    }
    return T;
  }
  function p(t) {
    return "okee-render-clip-" + t.id;
  }
  require.d(exports, {
    collectShadows: function () {
      return function t(e, n = []) {
        e.eachChild(function (e) {
          var i = e.attr;
          var r = i.shadowColor;
          var o = i.shadowBlur;
          if (r && o >= 0) {
            var a = e.getShadowObj();
            if (n.indexOf(a) === -1) {
              n.push(a);
            }
          }
          if (e.isGroup) {
            t(e, n);
          }
        });
        return n;
      };
    },
    collectPaintStyles: function () {
      return function t(e, n = []) {
        e.eachChild(function (e) {
          var i = e.attr;
          var r = i.fill;
          var o = i.stroke;
          if ((colorRenderUtils.isGradient(r) || colorRenderUtils.isPattern(r)) && n.indexOf(r) === -1) {
            n.push(r);
          }
          if ((colorRenderUtils.isGradient(o) || colorRenderUtils.isPattern(o)) && n.indexOf(o) === -1) {
            n.push(o);
          }
          if (e.isGroup) {
            t(e, n);
          }
        });
        return n;
      };
    },
    svgAttrMap: function () {
      return l;
    },
    getClipId: function () {
      return p;
    },
    collectMarkers: function () {
      return function t(e, n = []) {
        e.eachChild(function (e) {
          var i = e.attr;
          var r = i.markerStart;
          var o = i.markerEnd;
          if (r && n.indexOf(r) === -1) {
            n.push(r);
          }
          if (o && n.indexOf(o) === -1) {
            n.push(o);
          }
          if (e.isGroup) {
            t(e, n);
          }
        });
        return n;
      };
    },
    collectClips: function () {
      return function t(e, n = []) {
        e.eachChild(function (e) {
          var i = e.getClipElement();
          if (i && !i.parentNode && n.indexOf(i) === -1) {
            n.push(i);
          }
          if (e.isGroup) {
            t(e, n);
          }
        });
        return n;
      };
    },
    buildSvgStyle: function () {
      return c;
    },
    createSvgRoot: function () {
      return u;
    }
  });
}