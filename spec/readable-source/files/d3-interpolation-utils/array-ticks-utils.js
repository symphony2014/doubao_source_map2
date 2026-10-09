// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G9' to 'tickStep'
// - Renamed export 'ZP' to 'generateTicks'
// - Renamed export 'ly' to 'tickIncrement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 536202
         */
module.exports = function (module, exports, require) {
  let i = Math.sqrt(50);
  let r = Math.sqrt(10);
  let o = Math.sqrt(2);
  function u(t, n, e) {
    let a;
    let s;
    let c;
    let h = (n - t) / Math.max(0, e);
    let f = Math.floor(Math.log10(h));
    let l = h / Math.pow(10, f);
    let _ = l >= i ? 10 : l >= r ? 5 : l >= o ? 2 : 1;
    if (f < 0) {
      a = Math.round(t * (c = Math.pow(10, -f) / _));
      s = Math.round(n * c);
      if (a / c < t) {
        ++a;
      }
      if (s / c > n) {
        --s;
      }
      c = -c;
    } else {
      a = Math.round(t / (c = Math.pow(10, f) * _));
      s = Math.round(n / c);
      if (a * c < t) {
        ++a;
      }
      if (s * c > n) {
        --s;
      }
    }
    if (s < a && e >= 0.5 && e < 2) {
      return u(t, n, e * 2);
    } else {
      return [a, s, c];
    }
  }
  function a(t, n, e) {
    n *= 1;
    t *= 1;
    if (!((e *= 1) > 0)) {
      return [];
    }
    if (t === n) {
      return [t];
    }
    let i = n < t;
    let [r, o, a] = i ? u(n, t, e) : u(t, n, e);
    if (!(o >= r)) {
      return [];
    }
    let s = o - r + 1;
    let c = Array(s);
    if (i) {
      if (a < 0) {
        for (let t = 0; t < s; ++t) {
          c[t] = -((o - t) / a);
        }
      } else {
        for (let t = 0; t < s; ++t) {
          c[t] = (o - t) * a;
        }
      }
    } else if (a < 0) {
      for (let t = 0; t < s; ++t) {
        c[t] = -((r + t) / a);
      }
    } else {
      for (let t = 0; t < s; ++t) {
        c[t] = (r + t) * a;
      }
    }
    return c;
  }
  function s(t, n, e) {
    return u(t *= 1, n *= 1, e *= 1)[2];
  }
  function c(t, n, e) {
    n *= 1;
    t *= 1;
    e *= 1;
    let i = n < t;
    let r = i ? s(n, t, e) : s(t, n, e);
    return (i ? -1 : 1) * (r < 0 ? -(1 / r) : r);
  }
  require.d(exports, {
    tickStep: function () {
      return s;
    },
    generateTicks: function () {
      return a;
    },
    tickIncrement: function () {
      return c;
    }
  });
}