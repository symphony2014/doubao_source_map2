// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BZ' to 'twoPi'
// - Renamed export 'Fp' to 'max'
// - Renamed export 'Ho' to 'epsilon'
// - Renamed export 'Kh' to 'safeAcos'
// - Renamed export 'O$' to 'sin'
// - Renamed export 'VV' to 'min'
// - Renamed export 'Wn' to 'abs'
// - Renamed export 'ZR' to 'safeAsin'
// - Renamed export '_b' to 'sqrt'
// - Renamed export 'fv' to 'atan2'
// - Renamed export 'mC' to 'cos'
// - Renamed export 'ou' to 'halfPi'
// - Renamed export 'pi' to 'pi'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 608921
         */
module.exports = function (module, exports, require) {
  let i = Math.abs;
  let r = Math.atan2;
  let o = Math.cos;
  let u = Math.max;
  let a = Math.min;
  let s = Math.sin;
  let c = Math.sqrt;
  let h = 1e-12;
  let f = Math.PI;
  let l = f / 2;
  let _ = f * 2;
  function p(t) {
    if (t > 1) {
      return 0;
    } else if (t < -1) {
      return f;
    } else {
      return Math.acos(t);
    }
  }
  function y(t) {
    if (t >= 1) {
      return l;
    } else if (t <= -1) {
      return -l;
    } else {
      return Math.asin(t);
    }
  }
  require.d(exports, {
    twoPi: function () {
      return _;
    },
    max: function () {
      return u;
    },
    epsilon: function () {
      return h;
    },
    safeAcos: function () {
      return p;
    },
    sin: function () {
      return s;
    },
    min: function () {
      return a;
    },
    abs: function () {
      return i;
    },
    safeAsin: function () {
      return y;
    },
    sqrt: function () {
      return c;
    },
    atan2: function () {
      return r;
    },
    cos: function () {
      return o;
    },
    halfPi: function () {
      return l;
    },
    pi: function () {
      return f;
    }
  });
}