// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'AacAdtsParser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 493629
         */
module.exports = function (module, exports, require) {
  var babelClassHelpers = require("babel-class-helpers") /*id: 197180*/;
  var browserDetection = require("browser-detection") /*id: 93195*/;
  var o = function () {
    function e() {
      babelClassHelpers.classCallCheck(this, e);
    }
    babelClassHelpers.createClass(e, null, [{
      key: "getRateIndexByRate",
      value: function (t) {
        return e.FREQ.indexOf(t);
      }
    }, {
      key: "parseADTS",
      value: function (t, n) {
        var r;
        var i;
        var o = t.length;
        var a = 0;
        while (a + 2 < o && (t[a] !== 255 || (t[a + 1] & 246) != 240)) {
          a++;
        }
        if (!(a >= o)) {
          var s = a;
          var u = [];
          var c = (t[a + 2] & 60) >>> 2;
          var l = e.FREQ[c];
          if (!l) {
            throw Error(`Invalid sampling index: ${c}`);
          }
          var f = ((t[a + 2] & 192) >>> 6) + 1;
          var d = (t[a + 2] & 1) << 2 | (t[a + 3] & 192) >>> 6;
          var h = e._getConfig(c, d, f);
          var p = h.config;
          var v = h.codec;
          var _ = 0;
          var y = e.getFrameDuration(l);
          while (a + 7 < o) {
            if (t[a] !== 255 || (t[a + 1] & 246) != 240) {
              a++;
              continue;
            }
            i = (t[a + 3] & 3) << 11 | t[a + 4] << 3 | (t[a + 5] & 224) >> 5;
            if (o - a < i) {
              break;
            }
            r = (~t[a + 1] & 1) * 2;
            u.push({
              pts: n + _ * y,
              data: t.subarray(a + 7 + r, a + i)
            });
            _++;
            a += i;
          }
          return {
            skip: s,
            remaining: a >= o ? undefined : t.subarray(a),
            frames: u,
            samplingFrequencyIndex: c,
            sampleRate: l,
            objectType: f,
            channelCount: d,
            codec: v,
            config: p,
            originCodec: `mp4a.40.${f}`
          };
        }
      }
    }, {
      key: "parseAudioSpecificConfig",
      value: function (t) {
        if (t.length) {
          var n = t[0] >>> 3;
          var r = (t[0] & 7) << 1 | t[1] >>> 7;
          var i = (t[1] & 120) >>> 3;
          var o = e.FREQ[r];
          if (o) {
            var a = e._getConfig(r, i, n);
            return {
              samplingFrequencyIndex: r,
              sampleRate: o,
              objectType: n,
              channelCount: i,
              config: a.config,
              codec: a.codec,
              originCodec: `mp4a.40.${n}`
            };
          }
        }
      }
    }, {
      key: "getFrameDuration",
      value: function (e, t = 90000) {
        return t * 1024 / e;
      }
    }, {
      key: "_getConfig",
      value: function (e, t, n) {
        var r;
        var o;
        var a = [];
        if (browserDetection.isFirefox) {
          if (e >= 6) {
            r = 5;
            o = e - 3;
          } else {
            r = 2;
            o = e;
          }
        } else if (browserDetection.isAndroid) {
          r = 2;
          o = e;
        } else {
          r = n === 2 || n === 5 ? n : 5;
          o = e;
          if (e >= 6) {
            o = e - 3;
          } else if (t === 1) {
            r = 2;
            o = e;
          }
        }
        a[0] = r << 3;
        a[0] |= (e & 14) >> 1;
        a[1] = (e & 1) << 7;
        a[1] |= t << 3;
        if (r === 5) {
          a[1] |= (o & 14) >> 1;
          a[2] = (o & 1) << 7;
          a[2] |= 8;
          a[3] = 0;
        }
        return {
          config: a,
          codec: `mp4a.40.${r}`
        };
      }
    }, {
      key: "getSilentFrame",
      value: function (e, t) {
        if (e === "mp4a.40.2") {
          if (t === 1) {
            return new Uint8Array([0, 200, 0, 128, 35, 128]);
          }
          if (t === 2) {
            return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
          }
          if (t === 3) {
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
          }
          if (t === 4) {
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
          }
          if (t === 5) {
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
          }
          if (t === 6) {
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
          }
        } else {
          if (t === 1) {
            return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
          }
          if (t === 2 || t === 3) {
            return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
          }
        }
      }
    }]);
    return e;
  }();
  babelClassHelpers.defineProperty(o, "FREQ", [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350]);
  require.d(exports, {
    AacAdtsParser: function () {
      return o;
    }
  });
}