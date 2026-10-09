// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 408040
         */
module.exports = function (module, exports, require) {
  var r = typeof Uint8Array != "undefined" && typeof Uint16Array != "undefined" && typeof Int32Array != "undefined";
  function i(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  exports.assign = function (t) {
    for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
      var r = e.shift();
      if (r) {
        if (typeof r != "object") {
          throw TypeError(r + "must be non-object");
        }
        for (var n in r) {
          if (i(r, n)) {
            t[n] = r[n];
          }
        }
      }
    }
    return t;
  };
  exports.shrinkBuf = function (t, e) {
    if (t.length === e) {
      return t;
    } else if (t.subarray) {
      return t.subarray(0, e);
    } else {
      t.length = e;
      return t;
    }
  };
  var n = {
    arraySet: function (t, e, r, i, n) {
      if (e.subarray && t.subarray) {
        t.set(e.subarray(r, r + i), n);
        return;
      }
      for (var o = 0; o < i; o++) {
        t[n + o] = e[r + o];
      }
    },
    flattenChunks: function (t) {
      var e;
      var r;
      var i;
      var n;
      var o;
      var s;
      e = 0;
      i = 0;
      r = t.length;
      for (; e < r; e++) {
        i += t[e].length;
      }
      e = 0;
      s = new Uint8Array(i);
      n = 0;
      r = t.length;
      for (; e < r; e++) {
        o = t[e];
        s.set(o, n);
        n += o.length;
      }
      return s;
    }
  };
  var o = {
    arraySet: function (t, e, r, i, n) {
      for (var o = 0; o < i; o++) {
        t[n + o] = e[r + o];
      }
    },
    flattenChunks: function (t) {
      return [].concat.apply([], t);
    }
  };
  exports.setTyped = function (t) {
    if (t) {
      exports.Buf8 = Uint8Array;
      exports.Buf16 = Uint16Array;
      exports.Buf32 = Int32Array;
      exports.assign(exports, n);
    } else {
      exports.Buf8 = Array;
      exports.Buf16 = Array;
      exports.Buf32 = Array;
      exports.assign(exports, o);
    }
  };
  exports.setTyped(r);
}