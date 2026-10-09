// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$X' to 'subtractVectors'
// - Renamed export 'AK' to 'dotProduct'
// - Renamed export 'EU' to 'getAngleBetween'
// - Renamed export 'Fv' to 'normalizeVector'
// - Renamed export 'I6' to 'vectorsEqual'
// - Renamed export 'JJ' to 'createVector'
// - Renamed export 'Nm' to 'getBoundingBox'
// - Renamed export 'kC' to 'crossProduct2D'
// - Renamed export 'kK' to 'transformVector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 843052
         */
module.exports = function (module, exports, require) {
  function i() {
    var t;
    try {
      t = typeof Float32Array != "undefined" ? new Float32Array(2) : [,,];
    } catch (e) {
      t = [,,];
    }
    t[0] = t[1] = 0;
    return t;
  }
  function r(t, e, n) {
    var i = e[0];
    var r = e[1];
    t[0] = n[0] * i + n[3] * r + n[6];
    t[1] = n[1] * i + n[4] * r + n[7];
    return t;
  }
  function o(t, e) {
    return t[0] * e[0] + t[1] * e[1];
  }
  function a(t, e, n) {
    t[0] = e[0] - n[0];
    t[1] = e[1] - n[1];
    return t;
  }
  function s(t, e) {
    return t[0] * e[1] - t[1] * e[0];
  }
  function h(t, e) {
    return t[0] === e[0] && t[1] === e[1];
  }
  function l(t, e) {
    var n = e[0];
    var i = e[1];
    var r = n * n + i * i;
    if (r > 0) {
      r = 1 / Math.sqrt(r);
    }
    t[0] = e[0] * r;
    t[1] = e[1] * r;
    return t;
  }
  function u(t, e) {
    var n = t[0];
    var i = t[1];
    var r = e[0];
    var o = e[1];
    var a = Math.sqrt(n * n + i * i) * Math.sqrt(r * r + o * o);
    return Math.acos(Math.min(Math.max(a && (n * r + i * o) / a, -1), 1));
  }
  function c(t, e) {
    var n = Number.POSITIVE_INFINITY;
    var i = Number.POSITIVE_INFINITY;
    var r = Number.NEGATIVE_INFINITY;
    var o = Number.NEGATIVE_INFINITY;
    var a = 0;
    for (; a < t.length; a++) {
      n = Math.min(t[a][0], n);
      r = Math.max(t[a][0], r);
      i = Math.min(t[a][1], i);
      o = Math.max(t[a][1], o);
    }
    e.x = n;
    e.y = i;
    e.width = r - n;
    e.height = o - i;
    return e;
  }
  require.d(exports, {
    subtractVectors: function () {
      return a;
    },
    dotProduct: function () {
      return o;
    },
    getAngleBetween: function () {
      return u;
    },
    normalizeVector: function () {
      return l;
    },
    vectorsEqual: function () {
      return h;
    },
    createVector: function () {
      return i;
    },
    getBoundingBox: function () {
      return c;
    },
    crossProduct2D: function () {
      return s;
    },
    transformVector: function () {
      return r;
    }
  });
}