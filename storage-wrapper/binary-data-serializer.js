// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'binarySerializer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47421.f728df43.js
         * chunkId: 47421
         * moduleId: 677248
         */
module.exports = function (module, exports, require) {
  function n(e, t) {
    e = e || [];
    t = t || {};
    try {
      return new Blob(e, t);
    } catch (o) {
      if (o.name !== "TypeError") {
        throw o;
      }
      var r = new (typeof BlobBuilder != "undefined" ? BlobBuilder : typeof MSBlobBuilder != "undefined" ? MSBlobBuilder : typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : WebKitBlobBuilder)();
      var n = 0;
      for (; n < e.length; n += 1) {
        r.append(e[n]);
      }
      return r.getBlob(t.type);
    }
  }
  var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var i = /^~~local_forage_type~([^~]+)~/;
  var a = "__lfsc__:";
  var u = a.length;
  var c = "arbf";
  var f = "blob";
  var s = "si08";
  var l = "ui08";
  var d = "uic8";
  var h = "si16";
  var v = "si32";
  var y = "ur16";
  var g = "ui32";
  var p = "fl32";
  var b = "fl64";
  var m = u + c.length;
  var _ = Object.prototype.toString;
  function S(e) {
    var t;
    var r;
    var n;
    var i;
    var a;
    var u = e.length * 0.75;
    var c = e.length;
    var f = 0;
    if (e[e.length - 1] === "=") {
      u--;
      if (e[e.length - 2] === "=") {
        u--;
      }
    }
    var s = new ArrayBuffer(u);
    var l = new Uint8Array(s);
    for (t = 0; t < c; t += 4) {
      r = o.indexOf(e[t]);
      n = o.indexOf(e[t + 1]);
      i = o.indexOf(e[t + 2]);
      a = o.indexOf(e[t + 3]);
      l[f++] = r << 2 | n >> 4;
      l[f++] = (n & 15) << 4 | i >> 2;
      l[f++] = (i & 3) << 6 | a & 63;
    }
    return s;
  }
  function w(e) {
    var t;
    var r = new Uint8Array(e);
    var n = "";
    for (t = 0; t < r.length; t += 3) {
      n += o[r[t] >> 2];
      n += o[(r[t] & 3) << 4 | r[t + 1] >> 4];
      n += o[(r[t + 1] & 15) << 2 | r[t + 2] >> 6];
      n += o[r[t + 2] & 63];
    }
    if (r.length % 3 == 2) {
      n = n.substring(0, n.length - 1) + "=";
    } else if (r.length % 3 == 1) {
      n = n.substring(0, n.length - 2) + "==";
    }
    return n;
  }
  var I = {
    serialize: function (e, t) {
      var r = "";
      if (e) {
        r = _.call(e);
      }
      if (e && (r === "[object ArrayBuffer]" || e.buffer && _.call(e.buffer) === "[object ArrayBuffer]")) {
        var n;
        var o = a;
        if (e instanceof ArrayBuffer) {
          n = e;
          o += c;
        } else {
          n = e.buffer;
          if (r === "[object Int8Array]") {
            o += s;
          } else if (r === "[object Uint8Array]") {
            o += l;
          } else if (r === "[object Uint8ClampedArray]") {
            o += d;
          } else if (r === "[object Int16Array]") {
            o += h;
          } else if (r === "[object Uint16Array]") {
            o += y;
          } else if (r === "[object Int32Array]") {
            o += v;
          } else if (r === "[object Uint32Array]") {
            o += g;
          } else if (r === "[object Float32Array]") {
            o += p;
          } else if (r === "[object Float64Array]") {
            o += b;
          } else {
            t(Error("Failed to get type for BinaryArray"));
          }
        }
        t(o + w(n));
      } else if (r === "[object Blob]") {
        var i = new FileReader();
        i.onload = function () {
          t(a + f + ("~~local_forage_type~" + e.type + "~") + w(this.result));
        };
        i.readAsArrayBuffer(e);
      } else {
        try {
          t(JSON.stringify(e));
        } catch (e) {
          t(null, e);
        }
      }
    },
    deserialize: function (e) {
      if (e.substring(0, u) !== a) {
        return JSON.parse(e);
      }
      var t;
      var r = e.substring(m);
      var o = e.substring(u, m);
      if (o === f && i.test(r)) {
        var _ = r.match(i);
        t = _[1];
        r = r.substring(_[0].length);
      }
      var w = S(r);
      switch (o) {
        case c:
          return w;
        case f:
          return n([w], {
            type: t
          });
        case s:
          return new Int8Array(w);
        case l:
          return new Uint8Array(w);
        case d:
          return new Uint8ClampedArray(w);
        case h:
          return new Int16Array(w);
        case y:
          return new Uint16Array(w);
        case v:
          return new Int32Array(w);
        case g:
          return new Uint32Array(w);
        case p:
          return new Float32Array(w);
        case b:
          return new Float64Array(w);
        default:
          throw Error("Unkown type: " + o);
      }
    },
    stringToBuffer: S,
    bufferToString: w
  };
  require.d(exports, {
    binarySerializer: function () {
      return I;
    }
  });
}