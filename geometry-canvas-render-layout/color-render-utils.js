// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H3' to 'isGradient'
// - Renamed export 'Q0' to 'lightenColorValue'
// - Renamed export 'Qm' to 'isTransparent'
// - Renamed export 'R' to 'isPattern'
// - Renamed export 'T0' to 'resolveColorStyle'
// - Renamed export 'XU' to 'decodePackedColor'
// - Renamed export 'o_' to 'getColorCssValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 286955
         */
module.exports = function (module, exports, require) {
  var colorManipulationModule = require("color-manipulation-module") /*id: 16252*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var renderConstants = require("render-constants") /*id: 207779*/;
  function a(t, e) {
    var n = colorManipulationModule.Color(t).lighten(e);
    var r = n.alpha();
    if (r === 1) {
      return n.hex();
    } else {
      return "rgba(" + [Math.round(n.red()), Math.round(n.green()), Math.round(n.blue()), r].join(",") + ")";
    }
  }
  function s(t, e = 0) {
    if (!t) {
      return t;
    }
    if (typeof t == "string") {
      return a(t, e);
    }
    if (t.isGradient) {
      var n = t.clone();
      n.option.stops.forEach(function (t) {
        t.color = a(t.color, e);
      });
      return n;
    }
    return t;
  }
  function h(t) {
    return t && t.isGradient;
  }
  function l(t) {
    return t && t.isPattern;
  }
  function u(t) {
    return t === renderConstants.transparentRgba || t === renderConstants.colorTransparent;
  }
  function c(t) {
    if (isStringTypeCheck.isString(t)) {
      return t;
    } else if (h(t) || l(t)) {
      return "url(#" + t.id + ")";
    } else {
      return undefined;
    }
  }
  function p(t) {
    if (t >= 32768) {
      return [0, 0, 0];
    } else {
      return [(t >> 10) % 32 * 8, (t >> 5) % 32 * 8, t % 32 * 8];
    }
  }
  require.d(exports, {
    isGradient: function () {
      return h;
    },
    lightenColorValue: function () {
      return s;
    },
    isTransparent: function () {
      return u;
    },
    isPattern: function () {
      return l;
    },
    resolveColorStyle: function () {
      return function t(e, n, i) {
        if (isStringTypeCheck.isString(n)) {
          if (n === "currentColor") {
            return t(e, i.getExtendAttr("color"), i);
          } else {
            return n;
          }
        } else if (n.isGradient) {
          return n.getCanvasContextStyle(e, i.getBBox());
        } else if (n.isPattern) {
          return n.getCanvasContextStyle(e, function () {
            i.dirty();
          });
        } else {
          return undefined;
        }
      };
    },
    decodePackedColor: function () {
      return p;
    },
    getColorCssValue: function () {
      return c;
    }
  });
}