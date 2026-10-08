// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 585312
         */
module.exports = function (module, exports, require) {
  var t = typeof Float32Array == "function";
  function n(e, t, n) {
    return (((1 - n * 3 + t * 3) * e + (n * 3 - t * 6)) * e + t * 3) * e;
  }
  function i(e, t, n) {
    return (1 - n * 3 + t * 3) * 3 * e * e + (n * 3 - t * 6) * 2 * e + t * 3;
  }
  function r(e) {
    return e;
  }
  module.exports = function (e, s, a, o) {
    if (!(e >= 0) || !(e <= 1) || !(a >= 0) || !(a <= 1)) {
      throw Error("bezier x values must be in [0, 1] range");
    }
    if (e === s && a === o) {
      return r;
    }
    var l = t ? new Float32Array(11) : Array(11);
    var u = 0;
    for (; u < 11; ++u) {
      l[u] = n(u * 0.1, e, a);
    }
    return function (t) {
      if (t === 0) {
        return 0;
      } else if (t === 1) {
        return 1;
      } else {
        return n(function (t) {
          var r = 0;
          var s = 1;
          for (; s !== 10 && l[s] <= t; ++s) {
            r += 0.1;
          }
          var o = r + (t - l[--s]) / (l[s + 1] - l[s]) * 0.1;
          var u = i(o, e, a);
          if (u >= 0.001) {
            return function (e, t, r, s) {
              for (var a = 0; a < 4; ++a) {
                var o = i(t, r, s);
                if (o === 0) {
                  break;
                }
                var l = n(t, r, s) - e;
                t -= l / o;
              }
              return t;
            }(t, o, e, a);
          } else if (u === 0) {
            return o;
          } else {
            return function (e, t, i, r, s) {
              var a;
              var o;
              var l = 0;
              do {
                if ((a = n(o = t + (i - t) / 2, r, s) - e) > 0) {
                  i = o;
                } else {
                  t = o;
                }
              } while (Math.abs(a) > 1e-7 && ++l < 10);
              return o;
            }(t, r, r + 0.1, e, a);
          }
        }(t), s, o);
      }
    };
  };
}