// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'createPatternSymbol'
// - Renamed export 'W' to 'patternSymbolPresets'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 399361
         */
module.exports = function (module, exports, require) {
  var canvasPatternRenderer = require("canvas-pattern-renderer") /*id: 263643*/;
  var svgPathCanvasRenderer = require("svg-path-canvas-renderer") /*id: 254381*/;
  var svgRectElement = require("svg-rect-element") /*id: 345343*/;
  var svgSymbolRenderer = require("svg-symbol-renderer") /*id: 330448*/;
  function s() {
    return (s = Object.assign || function (t) {
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
  var h = [{
    type: "line",
    isStagger: false,
    config: {
      spacing: 7,
      rotation: -Math.PI / 4
    },
    style: {
      lineWidth: 3
    }
  }, {
    type: "symbol",
    isStagger: true,
    config: {
      symbol: "circle",
      size: 6,
      padding: 2
    }
  }, {
    type: "line",
    isStagger: false,
    config: {
      spacing: 7,
      rotation: Math.PI / 4
    },
    style: {
      lineWidth: 3
    }
  }, {
    type: "symbol",
    isStagger: true,
    config: {
      symbol: "triangle",
      size: 6,
      padding: 2
    }
  }, {
    type: "symbol",
    isStagger: false,
    config: {
      symbol: function () {
        return new svgPathCanvasRenderer.PathRenderer({
          lineJoin: "round",
          lineCap: "round",
          brush: function (t) {
            t.moveTo(0, 6);
            t.lineTo(4, 3);
            t.lineTo(8, 6);
          }
        });
      },
      size: 8,
      padding: 0
    },
    style: {
      lineWidth: 2,
      fill: "none"
    }
  }, {
    type: "symbol",
    isStagger: true,
    config: {
      symbol: "rect",
      size: 6,
      padding: 2
    }
  }];
  function l(t) {
    var e = t.type;
    var n = e === undefined ? "line" : e;
    var h = t.config;
    var l = h === undefined ? {} : h;
    var u = t.style;
    var c = u === undefined ? {} : u;
    var p = t.backgroundColor;
    var d = t.isStagger;
    var f = d === undefined ? n !== "line" : d;
    var g = [];
    if (n === "line") {
      var y = l.spacing;
      var v = y === undefined ? 7 : y;
      var m = l.rotation;
      var x = m === undefined ? Math.PI / 4 : m;
      var _ = Math.sin(x);
      var b = Math.abs(Math.round(v / _));
      var w = Math.abs(Math.round(v / Math.cos(x)));
      if (p) {
        g.push(new svgRectElement.SvgRectElement({
          x: 0,
          y: 0,
          width: b,
          height: w,
          fill: p
        }));
      }
      g.push(new svgPathCanvasRenderer.PathRenderer(s({
        brush: function (t) {
          if (_ > 0 || f) {
            t.moveTo(0, 0);
            t.lineTo(b, w);
            t.moveTo(-b, 0);
            t.lineTo(b, w * 2);
            t.moveTo(0, -w);
            t.lineTo(b * 2, w);
          }
          if (_ <= 0 || f) {
            t.moveTo(b, 0);
            t.lineTo(0, w);
            t.moveTo(b, -w);
            t.lineTo(-b, w);
            t.moveTo(b * 2, 0);
            t.lineTo(0, w * 2);
          }
        },
        lineWidth: 3
      }, c)));
      return new canvasPatternRenderer.CanvasPattern({
        width: b,
        height: w,
        element: g
      });
    }
    if (n === "symbol") {
      var S = l.symbol;
      var A = S === undefined ? "circle" : S;
      var E = l.size;
      var k = E === undefined ? 6 : E;
      var M = l.padding;
      var P = M === undefined ? 2 : M;
      var O = svgSymbolRenderer.getFirstElement(k);
      var C = svgSymbolRenderer.getSecondElement_1(k);
      var T = f ? (O + P) * 2 : O + P * 2;
      var I = f ? (C + P) * 2 : C + P * 2;
      if (p) {
        g.push(new svgRectElement.SvgRectElement({
          x: 0,
          y: 0,
          width: T,
          height: I,
          fill: p
        }));
      }
      if (f) {
        [{
          x: -O / 2,
          y: -C / 2,
          width: O,
          height: C
        }, {
          x: T - O / 2,
          y: -C / 2,
          width: O,
          height: C
        }, {
          x: T - O / 2,
          y: I - C / 2,
          width: O,
          height: C
        }, {
          x: -O / 2,
          y: I - C / 2,
          width: O,
          height: C
        }, {
          x: T / 2 - O / 2,
          y: I / 2 - C / 2,
          width: O,
          height: C
        }].forEach(function (t) {
          g.push(svgSymbolRenderer.createSymbolElement(A, t.x, t.y, t.width, t.height, s({
            lineWidth: 0
          }, c)));
        });
      } else {
        g.push(svgSymbolRenderer.createSymbolElement(A, P, P, O, C, c));
      }
      return new canvasPatternRenderer.CanvasPattern({
        width: T,
        height: I,
        element: g
      });
    }
  }
  Object.freeze(h);
  require.d(exports, {
    createPatternSymbol: function () {
      return l;
    },
    patternSymbolPresets: function () {
      return h;
    }
  });
}