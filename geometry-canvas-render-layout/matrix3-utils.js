// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Iu' to 'translateMatrix'
// - Renamed export 'al' to 'createMatrix'
// - Renamed export 'bA' to 'scaleMatrix'
// - Renamed export 'yR' to 'setIdentity'
// - Renamed export 'U1' to 'rotateMatrix'
// - Renamed export 'Jp' to 'multiplyMatrices'
// - Renamed export 'U_' to 'invertMatrix'
// - Renamed export 'Ue' to 'createIdentity'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 852209
         */
module.exports = function (module, exports, require) {
  var i = typeof Float32Array != "undefined" ? Float32Array : Array;
  function r() {
    var t = new i(9);
    if (i != Float32Array) {
      t[1] = 0;
      t[2] = 0;
      t[3] = 0;
      t[5] = 0;
      t[6] = 0;
      t[7] = 0;
    }
    t[0] = 1;
    t[4] = 1;
    t[8] = 1;
    return t;
  }
  function o(t, e, n, r, o, a, s, h, l) {
    var u = new i(9);
    u[0] = t;
    u[1] = e;
    u[2] = n;
    u[3] = r;
    u[4] = o;
    u[5] = a;
    u[6] = s;
    u[7] = h;
    u[8] = l;
    return u;
  }
  function a(t) {
    t[0] = 1;
    t[1] = 0;
    t[2] = 0;
    t[3] = 0;
    t[4] = 1;
    t[5] = 0;
    t[6] = 0;
    t[7] = 0;
    t[8] = 1;
    return t;
  }
  function s(t, e) {
    var n = e[0];
    var i = e[1];
    var r = e[2];
    var o = e[3];
    var a = e[4];
    var s = e[5];
    var h = e[6];
    var l = e[7];
    var u = e[8];
    var c = u * a - s * l;
    var p = -u * o + s * h;
    var d = l * o - a * h;
    var f = n * c + i * p + r * d;
    if (f) {
      f = 1 / f;
      t[0] = c * f;
      t[1] = (-u * i + r * l) * f;
      t[2] = (s * i - r * a) * f;
      t[3] = p * f;
      t[4] = (u * n - r * h) * f;
      t[5] = (-s * n + r * o) * f;
      t[6] = d * f;
      t[7] = (-l * n + i * h) * f;
      t[8] = (a * n - i * o) * f;
      return t;
    } else {
      return null;
    }
  }
  function h(t, e, n) {
    var i = e[0];
    var r = e[1];
    var o = e[2];
    var a = e[3];
    var s = e[4];
    var h = e[5];
    var l = e[6];
    var u = e[7];
    var c = e[8];
    var p = n[0];
    var d = n[1];
    var f = n[2];
    var g = n[3];
    var y = n[4];
    var v = n[5];
    var m = n[6];
    var x = n[7];
    var _ = n[8];
    t[0] = p * i + d * a + f * l;
    t[1] = p * r + d * s + f * u;
    t[2] = p * o + d * h + f * c;
    t[3] = g * i + y * a + v * l;
    t[4] = g * r + y * s + v * u;
    t[5] = g * o + y * h + v * c;
    t[6] = m * i + x * a + _ * l;
    t[7] = m * r + x * s + _ * u;
    t[8] = m * o + x * h + _ * c;
    return t;
  }
  function l(t, e, n) {
    var i = e[0];
    var r = e[1];
    var o = e[2];
    var a = e[3];
    var s = e[4];
    var h = e[5];
    var l = e[6];
    var u = e[7];
    var c = e[8];
    var p = n[0];
    var d = n[1];
    t[0] = i;
    t[1] = r;
    t[2] = o;
    t[3] = a;
    t[4] = s;
    t[5] = h;
    t[6] = p * i + d * a + l;
    t[7] = p * r + d * s + u;
    t[8] = p * o + d * h + c;
    return t;
  }
  function u(t, e, n) {
    var i = e[0];
    var r = e[1];
    var o = e[2];
    var a = e[3];
    var s = e[4];
    var h = e[5];
    var l = e[6];
    var u = e[7];
    var c = e[8];
    var p = Math.sin(n);
    var d = Math.cos(n);
    t[0] = d * i + p * a;
    t[1] = d * r + p * s;
    t[2] = d * o + p * h;
    t[3] = d * a - p * i;
    t[4] = d * s - p * r;
    t[5] = d * h - p * o;
    t[6] = l;
    t[7] = u;
    t[8] = c;
    return t;
  }
  function c(t, e, n) {
    var i = n[0];
    var r = n[1];
    t[0] = i * e[0];
    t[1] = i * e[1];
    t[2] = i * e[2];
    t[3] = r * e[3];
    t[4] = r * e[4];
    t[5] = r * e[5];
    t[6] = e[6];
    t[7] = e[7];
    t[8] = e[8];
    return t;
  }
  Math.hypot ||= function () {
    var t = 0;
    var e = arguments.length;
    while (e--) {
      t += arguments[e] * arguments[e];
    }
    return Math.sqrt(t);
  };
  require.d(exports, {
    translateMatrix: function () {
      return l;
    },
    createMatrix: function () {
      return o;
    },
    scaleMatrix: function () {
      return c;
    },
    setIdentity: function () {
      return a;
    },
    rotateMatrix: function () {
      return u;
    },
    multiplyMatrices: function () {
      return h;
    },
    invertMatrix: function () {
      return s;
    },
    createIdentity: function () {
      return r;
    }
  });
}