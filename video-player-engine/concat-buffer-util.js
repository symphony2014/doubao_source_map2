// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 270682
         */
module.exports = function (module, exports, require) {
  exports.default = function (U) {
    var n = 0;
    var F = arguments.length;
    var Q = Array(F > 1 ? F - 1 : 0);
    var l = 1;
    for (; l < F; l++) {
      Q[l - 1] = arguments[l];
    }
    var i = true;
    var a = false;
    var d = undefined;
    try {
      var r;
      var o = Q[Symbol.iterator]();
      for (; !(i = (r = o.next()).done); i = true) {
        var B = r.value;
        n += B.length;
      }
    } catch (U) {
      a = true;
      d = U;
    } finally {
      try {
        if (!i && o.return) {
          o.return();
        }
      } finally {
        if (a) {
          throw d;
        }
      }
    }
    var R = new U(n);
    var c = 0;
    var s = true;
    var V = false;
    var Z = undefined;
    try {
      var h;
      var u = Q[Symbol.iterator]();
      for (; !(s = (h = u.next()).done); s = true) {
        var S = h.value;
        R.set(S, c);
        c += S.length;
      }
    } catch (U) {
      V = true;
      Z = U;
    } finally {
      try {
        if (!s && u.return) {
          u.return();
        }
      } finally {
        if (V) {
          throw Z;
        }
      }
    }
    return R;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}