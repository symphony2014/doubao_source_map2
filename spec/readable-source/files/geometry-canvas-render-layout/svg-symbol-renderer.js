// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$J' to 'createSymbolAttr'
// - Renamed export 'Q5' to 'getFirstElement'
// - Renamed export 'Ty' to 'createSymbolElement'
// - Renamed export 'Wi' to 'getSecondElement'
// - Renamed export 'ky' to 'registerSymbol'
// - Renamed export 'td' to 'createCenteredSymbol'
// - Renamed export 'th' to 'detectSymbolType'
// - Renamed export 'u8' to 'getSecondElement_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 330448
         */
module.exports = function (module, exports, require) {
  var svgPathHandler = require("svg-path-handler") /*id: 993453*/;
  var matrix3Utils = require("matrix3-utils") /*id: 852209*/;
  var svgImageElementClass = require("svg-image-element-class") /*id: 577462*/;
  var svgPathCanvasRenderer = require("svg-path-canvas-renderer") /*id: 254381*/;
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
  var h = {};
  function l(t) {
    if (Array.isArray(t)) {
      return t[0];
    } else {
      return t;
    }
  }
  function u(t) {
    if (Array.isArray(t)) {
      return t[1];
    } else {
      return t;
    }
  }
  function c(t, e, n, i = 0) {
    var r = l(n);
    var o = u(n);
    return {
      x: t - r / 2,
      y: e - o / 2,
      width: r,
      height: o,
      borderRadius: i
    };
  }
  function p(t, e, n) {
    h[t] = [e, n];
  }
  function d(t, e, n, i, r) {
    return {
      src: t,
      x: e,
      y: n,
      width: i,
      height: r
    };
  }
  function f(t, e, n, o, a) {
    var s = new svgPathHandler.Path(t.slice(7));
    var h = s.getPathBBox();
    if (h.width === 0 || h.height === 0) {
      return {
        pathData: s
      };
    }
    var l = matrix3Utils.createIdentity();
    var u = o / h.width;
    var c = a / h.height;
    matrix3Utils.translateMatrix(l, l, [-h.x, -h.y]);
    matrix3Utils.scaleMatrix(l, l, [u, c]);
    matrix3Utils.translateMatrix(l, l, [e / u, n / c]);
    return {
      pathData: s,
      matrix: l
    };
  }
  function g(t) {
    if (h[t]) {
      return "registered";
    } else if (/^(https?|ftp|file)/gi.test(t) || /^data:/gi.test(t)) {
      return "url";
    } else if (t.indexOf("path://") === 0) {
      return "path";
    } else if (/^image:/gi.test(t)) {
      return "image";
    } else {
      return undefined;
    }
  }
  function y(t, e, n) {
    var i = e.x;
    var r = e.y;
    var o = e.width;
    var a = e.height;
    return m(t.symbol, i, r, o, a, n);
  }
  function v(t, e) {
    var n = e.x;
    var i = e.y;
    var r = e.width;
    var o = e.height;
    return function (t, e, n, i, r) {
      if (typeof t == "function") {
        return t(e, n, i, r).attr;
      }
      if (typeof t == "string") {
        var o = g(t);
        if (o === "registered") {
          return h[t][1](e, n, i, r);
        }
        if (o === "url") {
          return d(t, e, n, i, r);
        }
        if (o === "path") {
          return f(t, e, n, i, r);
        }
        if (o === "image") {
          return d(t.slice(8), e, n, i, r);
        }
      }
    }(t.symbol, n, i, r, o);
  }
  function m(t, e, n, i, r, l) {
    if (typeof t == "function") {
      var u = t(e, n, i, r);
      u.setAttr(l);
      return u;
    }
    if (typeof t == "string") {
      var c = g(t);
      var p = c === "registered" ? h[t][0] : c === "image" || c === "url" ? svgImageElementClass.SvgImageElement : c === "path" ? svgPathCanvasRenderer.PathRenderer : undefined;
      var y = undefined;
      if (c === "registered") {
        y = h[t][1](e, n, i, r);
      } else if (c === "url") {
        y = d(t, e, n, i, r);
      } else if (c === "path") {
        y = f(t, e, n, i, r);
      } else if (c === "image") {
        y = d(t.slice(8), e, n, i, r);
      }
      return new p(s(s({}, y), l));
    }
  }
  function x(t, e, n, i, r, o) {
    return m(t, e - i / 2, n - r / 2, i, r, o);
  }
  require.d(exports, {
    createSymbolAttr: function () {
      return v;
    },
    getFirstElement: function () {
      return l;
    },
    createSymbolElement: function () {
      return m;
    },
    getSecondElement: function () {
      return c;
    },
    registerSymbol: function () {
      return p;
    },
    createCenteredSymbol: function () {
      return x;
    },
    detectSymbolType: function () {
      return y;
    },
    getSecondElement_1: function () {
      return u;
    }
  });
}