// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bh' to 'readUint32'
// - Renamed export 'Qc' to 'hexToBytes'
// - Renamed export 'dB' to 'getAvcCodec'
// - Renamed export 'gJ' to 'concatBuffers'
// - Renamed export 'h9' to 'readUint64'
// - Renamed export 'i4' to 'readUint16'
// - Renamed export 'mw' to 'bytesToHex'
// - Renamed export 'sV' to 'readUint24'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 852150
         */
module.exports = function (module, exports, require) {
  function r() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    var r = new Uint8Array((t = t.filter(Boolean)).reduce(function (e, t) {
      return e + t.byteLength;
    }, 0));
    var i = 0;
    t.forEach(function (e) {
      r.set(e, i);
      i += e.byteLength;
    });
    return r;
  }
  function i(e, t = 0) {
    return (e[t] << 8) + (e[t + 1] || 0);
  }
  function o(e, t = 0) {
    return (e[t] << 16) + (e[t + 1] << 8) + (e[t + 2] || 0);
  }
  function a(e, t = 0) {
    return (e[t] << 24 >>> 0) + (e[t + 1] << 16) + (e[t + 2] << 8) + (e[t + 3] || 0);
  }
  function s(e, t = 0) {
    return a(e, t) * 4294967296 + a(e, t + 4);
  }
  function u(e) {
    var t;
    var n = "avc1.";
    var r = 0;
    for (; r < 3; r++) {
      if ((t = e[r].toString(16)).length < 2) {
        t = `0${t}`;
      }
      n += t;
    }
    return n;
  }
  function c(e) {
    var t = "";
    e.forEach(function (e) {
      t += ("0" + Number(e).toString(16)).slice(-2).toUpperCase();
    });
    if (t.length <= 32) {
      var n = 32 - t.length;
      var r = 0;
      for (; r < n; r++) {
        t += "0";
      }
    }
    return t;
  }
  function l(e) {
    if (!Array.isArray(e)) {
      var t = [];
      var n = "";
      var r = 0;
      for (; r < e.length; r++) {
        if (r % 2) {
          t.push(parseInt(n = e[r - 1] + e[r], 16));
          n = "";
        }
      }
      return t;
    }
    return e.map(function (e) {
      return parseInt(e, 16);
    });
  }
  require.d(exports, {
    readUint32: function () {
      return a;
    },
    hexToBytes: function () {
      return l;
    },
    getAvcCodec: function () {
      return u;
    },
    concatBuffers: function () {
      return r;
    },
    readUint64: function () {
      return s;
    },
    readUint16: function () {
      return i;
    },
    bytesToHex: function () {
      return c;
    },
    readUint24: function () {
      return o;
    }
  });
}