// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'dateIntervalFactory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 401424
         */
module.exports = function (module, exports, require) {
  let i = new Date();
  let r = new Date();
  require.d(exports, {
    dateIntervalFactory: function () {
      return function t(n, e, o, u) {
        function a(t) {
          n(t = arguments.length == 0 ? new Date() : new Date(+t));
          return t;
        }
        a.floor = t => {
          n(t = new Date(+t));
          return t;
        };
        a.ceil = t => {
          n(t = new Date(t - 1));
          e(t, 1);
          n(t);
          return t;
        };
        a.round = t => {
          let n = a(t);
          let e = a.ceil(t);
          if (t - n < e - t) {
            return n;
          } else {
            return e;
          }
        };
        a.offset = (t, n) => {
          e(t = new Date(+t), n == null ? 1 : Math.floor(n));
          return t;
        };
        a.range = (t, i, r) => {
          let o;
          let u = [];
          t = a.ceil(t);
          r = r == null ? 1 : Math.floor(r);
          if (!(t < i) || !(r > 0)) {
            return u;
          }
          do {
            u.push(o = new Date(+t));
            e(t, r);
            n(t);
          } while (o < t && t < i);
          return u;
        };
        a.filter = i => t(t => {
          if (t >= t) {
            while (n(t), !i(t)) {
              t.setTime(t - 1);
            }
          }
        }, (t, n) => {
          if (t >= t) {
            if (n < 0) {
              while (++n <= 0) {
                while (e(t, -1), !i(t));
              }
            } else {
              while (--n >= 0) {
                while (e(t, 1), !i(t));
              }
            }
          }
        });
        if (o) {
          a.count = (t, e) => {
            i.setTime(+t);
            r.setTime(+e);
            n(i);
            n(r);
            return Math.floor(o(i, r));
          };
          a.every = t => isFinite(t = Math.floor(t)) && t > 0 ? t > 1 ? a.filter(u ? n => u(n) % t == 0 : n => a.count(0, n) % t == 0) : a : null;
        }
        return a;
      };
    }
  });
}