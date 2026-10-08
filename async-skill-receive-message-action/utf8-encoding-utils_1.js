// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'Utf8Utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-alice.a1dd235d.js
         * chunkId: 20105
         * moduleId: 858081
         */
module.exports = function (module, exports, require) {
  var dataProcessor = require("data-processor") /*id: 395538*/;
  let r = {
    length(e) {
      let t = 0;
      let n = 0;
      for (let i = 0; i < e.length; ++i) {
        if ((n = e.charCodeAt(i)) < 128) {
          t += 1;
        } else if (n < 2048) {
          t += 2;
        } else if ((n & 64512) == 55296 && (e.charCodeAt(i + 1) & 64512) == 56320) {
          ++i;
          t += 4;
        } else {
          t += 3;
        }
      }
      return t;
    },
    read(e, t, n) {
      if (n - t < 1) {
        return "";
      }
      let i = "";
      for (let r = t; r < n;) {
        let t = e[r++];
        if (t <= 127) {
          i += String.fromCharCode(t);
        } else if (t >= 192 && t < 224) {
          i += String.fromCharCode((t & 31) << 6 | e[r++] & 63);
        } else if (t >= 224 && t < 240) {
          i += String.fromCharCode((t & 15) << 12 | (e[r++] & 63) << 6 | e[r++] & 63);
        } else if (t >= 240) {
          let n = ((t & 7) << 18 | (e[r++] & 63) << 12 | (e[r++] & 63) << 6 | e[r++] & 63) - 65536;
          i += String.fromCharCode(55296 + (n >> 10));
          i += String.fromCharCode(56320 + (n & 1023));
        }
      }
      return i;
    },
    write(e, t, n) {
      let i;
      let r;
      let a = n;
      for (let a = 0; a < e.length; ++a) {
        if ((i = e.charCodeAt(a)) < 128) {
          t[n++] = i;
        } else {
          if (i < 2048) {
            t[n++] = i >> 6 | 192;
          } else {
            if ((i & 64512) == 55296 && ((r = e.charCodeAt(a + 1)) & 64512) == 56320) {
              i = 65536 + ((i & 1023) << 10) + (r & 1023);
              ++a;
              t[n++] = i >> 18 | 240;
              t[n++] = i >> 12 & 63 | 128;
            } else {
              t[n++] = i >> 12 | 224;
            }
            t[n++] = i >> 6 & 63 | 128;
          }
          t[n++] = i & 63 | 128;
        }
      }
      return n - a;
    },
    posCalcRange(e, t) {
      let n = 0;
      let r = {};
      let a = t.slice();
      a = dataProcessor.processData(a.sort((e, t) => e - t));
      for (let t = 0; t < e.length; t++) {
        if (a.length && n === a[0]) {
          r[a[0]] = t;
          a.shift();
        }
        let i = e.charCodeAt(t);
        if ((i & 64512) == 55296 && t + 1 < e.length && (e.charCodeAt(t + 1) & 64512) == 56320) {
          n += 4;
          t++;
        } else {
          n += i < 128 ? 1 : i < 2048 ? 2 : 3;
        }
        if (!a.length) {
          break;
        }
      }
      while (a.length && n === a[0]) {
        r[a[0]] = e.length;
        a.shift();
      }
      return r;
    },
    posCalc(e, t) {
      if (t <= 0) {
        return 0;
      } else if (t >= this.length(e)) {
        return e.length;
      } else {
        return this.posCalcRange(e, [t])[t] ?? 0;
      }
    }
  };
  require.d(exports, {
    Utf8Utils: function () {
      return r;
    }
  });
}