// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'Mp4BoxParser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 413511
         */
module.exports = function (module, exports, require) {
  var babelClassHelpers = require("babel-class-helpers") /*id: 197180*/;
  var avMediaConstants = require("av-media-constants") /*id: 87395*/;
  var binaryBufferUtils = require("binary-buffer-utils") /*id: 852150*/;
  var aacAdtsParserUtil = require("aac-adts-parser-util") /*id: 493629*/;
  var s = function () {
    function e() {
      babelClassHelpers.classCallCheck(this, e);
    }
    babelClassHelpers.createClass(e, null, [{
      key: "findBox",
      value: function (t, n, r = 0) {
        var i = [];
        if (!t) {
          return i;
        }
        var a = 0;
        var s = "";
        var u = 0;
        while (t.length > 7) {
          a = binaryBufferUtils.readUint32(t);
          s = String.fromCharCode.apply(null, t.subarray(4, 8));
          u = 8;
          if (a === 1) {
            a = binaryBufferUtils.readUint64(t, 8);
            u += 8;
          } else {
            a ||= t.length;
          }
          if (!n[0] || s === n[0]) {
            var c = t.subarray(0, a);
            if (!(n.length < 2)) {
              return e.findBox(c.subarray(u), n.slice(1), r + u);
            }
            i.push({
              start: r,
              size: a,
              headerSize: u,
              type: s,
              data: c
            });
          }
          r += a;
          t = t.subarray(a);
        }
        return i;
      }
    }, {
      key: "tfhd",
      value: function (e) {
        return f(e, true, function (e, t) {
          e.trackId = binaryBufferUtils.readUint32(t);
          var n = 4;
          var r = e.flags & 1;
          var i = e.flags & 2;
          var a = e.flags & 8;
          var s = e.flags & 16;
          var u = e.flags & 32;
          if (r) {
            n += 4;
            e.baseDataOffset = binaryBufferUtils.readUint32(t, n);
            n += 4;
          }
          if (i) {
            e.sampleDescriptionIndex = binaryBufferUtils.readUint32(t, n);
            n += 4;
          }
          if (a) {
            e.defaultSampleDuration = binaryBufferUtils.readUint32(t, n);
            n += 4;
          }
          if (s) {
            e.defaultSampleSize = binaryBufferUtils.readUint32(t, n);
            n += 4;
          }
          if (u) {
            e.defaultSampleFlags = binaryBufferUtils.readUint32(t, n);
          }
        });
      }
    }, {
      key: "sidx",
      value: function (e) {
        return f(e, true, function (e, t) {
          var n = 0;
          e.reference_ID = binaryBufferUtils.readUint32(t, n);
          n += 4;
          e.timescale = binaryBufferUtils.readUint32(t, n);
          n += 4;
          if (e.version === 0) {
            e.earliest_presentation_time = binaryBufferUtils.readUint32(t, n);
            n += 4;
            e.first_offset = binaryBufferUtils.readUint32(t, n);
            n += 4;
          } else {
            e.earliest_presentation_time = binaryBufferUtils.readUint64(t, n);
            n += 8;
            e.first_offset = binaryBufferUtils.readUint64(t, n);
            n += 8;
          }
          n += 2;
          e.references = [];
          var r = binaryBufferUtils.readUint16(t, n);
          n += 2;
          for (var i = 0; i < r; i++) {
            var a = {};
            e.references.push(a);
            var s = binaryBufferUtils.readUint32(t, n);
            n += 4;
            a.reference_type = s >> 31 & 1;
            a.referenced_size = s & 2147483647;
            a.subsegment_duration = binaryBufferUtils.readUint32(t, n);
            n += 4;
            s = binaryBufferUtils.readUint32(t, n);
            n += 4;
            a.starts_with_SAP = s >> 31 & 1;
            a.SAP_type = s >> 28 & 7;
            a.SAP_delta_time = s & 268435455;
          }
        });
      }
    }, {
      key: "moov",
      value: function (t) {
        return f(t, false, function (t, n, r) {
          t.mvhd = e.mvhd(e.findBox(n, ["mvhd"], r)[0]);
          t.trak = e.findBox(n, ["trak"], r).map(function (t) {
            return e.trak(t);
          });
          t.pssh = e.pssh(e.findBox(n, ["pssh"], r)[0]);
        });
      }
    }, {
      key: "mvhd",
      value: function (e) {
        return f(e, true, function (e, t) {
          var n = 0;
          if (e.version === 1) {
            e.timescale = binaryBufferUtils.readUint32(t, 16);
            e.duration = binaryBufferUtils.readUint64(t, 20);
            n += 28;
          } else {
            e.timescale = binaryBufferUtils.readUint32(t, 8);
            e.duration = binaryBufferUtils.readUint32(t, 12);
            n += 16;
          }
          e.nextTrackId = binaryBufferUtils.readUint32(t, n + 76);
        });
      }
    }, {
      key: "trak",
      value: function (t) {
        return f(t, false, function (t, n, r) {
          t.tkhd = e.tkhd(e.findBox(n, ["tkhd"], r)[0]);
          t.mdia = e.mdia(e.findBox(n, ["mdia"], r)[0]);
        });
      }
    }, {
      key: "tkhd",
      value: function (e) {
        return f(e, true, function (e, t) {
          var n = 0;
          if (e.version === 1) {
            e.trackId = binaryBufferUtils.readUint32(t, 16);
            e.duration = binaryBufferUtils.readUint64(t, 24);
            n += 32;
          } else {
            e.trackId = binaryBufferUtils.readUint32(t, 8);
            e.duration = binaryBufferUtils.readUint32(t, 16);
            n += 20;
          }
          e.width = binaryBufferUtils.readUint32(t, n + 52);
          e.height = binaryBufferUtils.readUint32(t, n + 56);
        });
      }
    }, {
      key: "mdia",
      value: function (t) {
        return f(t, false, function (t, n, r) {
          t.mdhd = e.mdhd(e.findBox(n, ["mdhd"], r)[0]);
          t.hdlr = e.hdlr(e.findBox(n, ["hdlr"], r)[0]);
          t.minf = e.minf(e.findBox(n, ["minf"], r)[0]);
        });
      }
    }, {
      key: "mdhd",
      value: function (e) {
        return f(e, true, function (e, t) {
          var n = 0;
          if (e.version === 1) {
            e.timescale = binaryBufferUtils.readUint32(t, 16);
            e.duration = binaryBufferUtils.readUint64(t, 20);
            n += 28;
          } else {
            e.timescale = binaryBufferUtils.readUint32(t, 8);
            e.duration = binaryBufferUtils.readUint32(t, 12);
            n += 16;
          }
          var r = binaryBufferUtils.readUint16(t, n);
          e.language = String.fromCharCode((r >> 10 & 31) + 96, (r >> 5 & 31) + 96, (r & 31) + 96);
        });
      }
    }, {
      key: "hdlr",
      value: function (e) {
        return f(e, true, function (e, t) {
          if (e.version === 0) {
            e.handlerType = String.fromCharCode.apply(null, t.subarray(4, 8));
          }
        });
      }
    }, {
      key: "minf",
      value: function (t) {
        return f(t, false, function (t, n, r) {
          t.vmhd = e.vmhd(e.findBox(n, ["vmhd"], r)[0]);
          t.smhd = e.smhd(e.findBox(n, ["smhd"], r)[0]);
          t.stbl = e.stbl(e.findBox(n, ["stbl"], r)[0]);
        });
      }
    }, {
      key: "vmhd",
      value: function (e) {
        return f(e, true, function (e, t) {
          e.graphicsmode = binaryBufferUtils.readUint16(t);
          e.opcolor = [binaryBufferUtils.readUint16(t, 2), binaryBufferUtils.readUint16(t, 4), binaryBufferUtils.readUint16(t, 6)];
        });
      }
    }, {
      key: "smhd",
      value: function (e) {
        return f(e, true, function (e, t) {
          e.balance = binaryBufferUtils.readUint16(t);
        });
      }
    }, {
      key: "stbl",
      value: function (t) {
        return f(t, false, function (t, n, r) {
          t.stsd = e.stsd(e.findBox(n, ["stsd"], r)[0]);
          t.stts = e.stts(e.findBox(n, ["stts"], r)[0]);
          t.ctts = e.ctts(e.findBox(n, ["ctts"], r)[0]);
          t.stsc = e.stsc(e.findBox(n, ["stsc"], r)[0]);
          t.stsz = e.stsz(e.findBox(n, ["stsz"], r)[0]);
          t.stco = e.stco(e.findBox(n, ["stco"], r)[0]);
          if (!t.stco) {
            t.co64 = e.co64(e.findBox(n, ["co64"], r)[0]);
            t.stco = t.co64;
          }
          var i;
          var o;
          var a;
          var s = (i = t.stsd.entries[0]) === null || i === undefined ? undefined : (o = i.sinf) === null || o === undefined ? undefined : (a = o.schi) === null || a === undefined ? undefined : a.tenc.default_IV_size;
          t.stss = e.stss(e.findBox(n, ["stss"], r)[0]);
          t.senc = e.senc(e.findBox(n, ["senc"], r)[0], s);
        });
      }
    }, {
      key: "senc",
      value: function (e, t = 8) {
        return f(e, true, function (e, n) {
          var r = 0;
          var i = binaryBufferUtils.readUint32(n, r);
          r += 4;
          e.samples = [];
          for (var a = 0; a < i; a++) {
            var s = {
              InitializationVector: []
            };
            for (var u = 0; u < t; u++) {
              s.InitializationVector[u] = n[r + u];
            }
            r += t;
            if (e.flags & 2) {
              s.subsamples = [];
              var c = binaryBufferUtils.readUint16(n, r);
              r += 2;
              for (var l = 0; l < c; l++) {
                var f = {};
                f.BytesOfClearData = binaryBufferUtils.readUint16(n, r);
                r += 2;
                f.BytesOfProtectedData = binaryBufferUtils.readUint32(n, r);
                r += 4;
                s.subsamples.push(f);
              }
            }
            e.samples.push(s);
          }
        });
      }
    }, {
      key: "pssh",
      value: function (e) {
        return f(e, true, function (e, t) {
          var n = [];
          var r = [];
          var i = 0;
          var a = 0;
          for (; a < 16; a++) {
            r.push(h(t[i + a]));
          }
          i += 16;
          if (e.version > 0) {
            var s = binaryBufferUtils.readUint32(t, i);
            i += 4;
            for (var u = 0; u < ("" + s).length; u++) {
              for (var c = 0; c < 16; c++) {
                var l = t[i];
                i += 1;
                n.push(h(l));
              }
            }
          }
          var f = binaryBufferUtils.readUint32(t, i);
          e.data_size = f;
          i += 4;
          e.kid = n;
          e.system_id = r;
          e.buffer = t;
        });
      }
    }, {
      key: "stsd",
      value: function (t) {
        return f(t, true, function (t, n, r) {
          t.entryCount = binaryBufferUtils.readUint32(n);
          t.entries = e.findBox(n.subarray(4), [], r + 4).map(function (t) {
            switch (t.type) {
              case "avc1":
              case "avc2":
              case "avc3":
              case "avc4":
                return e.avc1(t);
              case "hvc1":
              case "hev1":
                return e.hvc1(t);
              case "mp4a":
                return e.mp4a(t);
              case "alaw":
              case "ulaw":
                return e.alaw(t);
              case "enca":
                return f(t, false, function (t, n, r) {
                  t.channelCount = binaryBufferUtils.readUint16(n, 16);
                  t.samplesize = binaryBufferUtils.readUint16(n, 18);
                  t.sampleRate = binaryBufferUtils.readUint32(n, 24) / 65536;
                  n = n.subarray(28);
                  t.sinf = e.sinf(e.findBox(n, ["sinf"], r)[0]);
                  t.esds = e.esds(e.findBox(n, ["esds"], r)[0]);
                });
              case "encv":
                return f(t, false, function (t, n, r) {
                  t.width = binaryBufferUtils.readUint16(n, 24);
                  t.height = binaryBufferUtils.readUint16(n, 26);
                  t.horizresolution = binaryBufferUtils.readUint32(n, 28);
                  t.vertresolution = binaryBufferUtils.readUint32(n, 32);
                  n = n.subarray(78);
                  t.sinf = e.sinf(e.findBox(n, ["sinf"], r)[0]);
                  t.avcC = e.avcC(e.findBox(n, ["avcC"], r)[0]);
                  t.hvcC = e.hvcC(e.findBox(n, ["hvcC"], r)[0]);
                  t.pasp = e.pasp(e.findBox(n, ["pasp"], r)[0]);
                });
            }
          }).filter(Boolean);
        });
      }
    }, {
      key: "tenc",
      value: function (e) {
        return f(e, false, function (e, t) {
          var n = 6;
          e.default_IsEncrypted = t[n];
          n += 1;
          e.default_IV_size = t[n];
          n += 1;
          e.default_KID = [];
          for (var r = 0; r < 16; r++) {
            e.default_KID.push(h(t[n]));
            n += 1;
          }
        });
      }
    }, {
      key: "schi",
      value: function (t) {
        return f(t, false, function (t, n, r) {
          t.tenc = e.tenc(e.findBox(n, ["tenc"], r)[0]);
        });
      }
    }, {
      key: "sinf",
      value: function (t) {
        return f(t, false, function (t, n, r) {
          t.schi = e.schi(e.findBox(n, ["schi"], r)[0]);
          t.frma = e.frma(e.findBox(n, ["frma"], r)[0]);
        });
      }
    }, {
      key: "frma",
      value: function (e) {
        return f(e, false, function (e, t) {
          e.data_format = "";
          for (var n = 0; n < 4; n++) {
            e.data_format += String.fromCharCode(t[n]);
          }
        });
      }
    }, {
      key: "avc1",
      value: function (t) {
        return f(t, false, function (t, n, r) {
          var i = c(t, n);
          var o = n.subarray(i);
          r += i;
          t.avcC = e.avcC(e.findBox(o, ["avcC"], r)[0]);
          t.pasp = e.pasp(e.findBox(o, ["pasp"], r)[0]);
        });
      }
    }, {
      key: "avcC",
      value: function (e) {
        return f(e, false, function (e, t) {
          e.configurationVersion = t[0];
          e.AVCProfileIndication = t[1];
          e.profileCompatibility = t[2];
          e.AVCLevelIndication = t[3];
          e.codec = binaryBufferUtils.getAvcCodec([t[1], t[2], t[3]]);
          e.lengthSizeMinusOne = t[4] & 3;
          e.spsLength = t[5] & 31;
          e.sps = [];
          var n = 6;
          var r = 0;
          for (; r < e.spsLength; r++) {
            var i = binaryBufferUtils.readUint16(t, n);
            n += 2;
            e.sps.push(t.subarray(n, n + i));
            n += i;
          }
          e.ppsLength = t[n];
          n += 1;
          e.pps = [];
          for (var a = 0; a < e.ppsLength; a++) {
            var s = binaryBufferUtils.readUint16(t, n);
            n += 2;
            e.pps.push(t.subarray(n, n += s));
            n += s;
          }
        });
      }
    }, {
      key: "hvc1",
      value: function (t) {
        return f(t, false, function (t, n, r) {
          var i = c(t, n);
          var o = n.subarray(i);
          r += i;
          t.hvcC = e.hvcC(e.findBox(o, ["hvcC"], r)[0]);
          t.pasp = e.pasp(e.findBox(o, ["pasp"], r)[0]);
        });
      }
    }, {
      key: "hvcC",
      value: function (e) {
        return f(e, false, function (t, n) {
          t.data = e.data;
          t.codec = "hev1.1.6.L93.B0";
          t.configurationVersion = n[0];
          var r = n[1];
          t.generalProfileSpace = r >> 6;
          t.generalTierFlag = (r & 32) >> 5;
          t.generalProfileIdc = r & 31;
          t.generalProfileCompatibility = binaryBufferUtils.readUint32(n, 2);
          t.generalConstraintIndicatorFlags = n.subarray(6, 12);
          t.generalLevelIdc = n[12];
          t.avgFrameRate = binaryBufferUtils.readUint16(n, 19);
          t.numOfArrays = n[22];
          t.vps = [];
          t.sps = [];
          t.pps = [];
          var i = 23;
          var a = 0;
          var s = 0;
          var u = 0;
          var c = 0;
          for (; c < t.numOfArrays; c++) {
            a = n[i] & 63;
            s = binaryBufferUtils.readUint16(n, i + 1);
            i += 3;
            var l;
            var f;
            var d;
            var h = [];
            var p = 0;
            for (; p < s; p++) {
              u = binaryBufferUtils.readUint16(n, i);
              i += 2;
              h.push(n.subarray(i, i + u));
              i += u;
            }
            if (a === 32) {
              (l = t.vps).push.apply(l, h);
            } else if (a === 33) {
              (f = t.sps).push.apply(f, h);
            } else if (a === 34) {
              (d = t.pps).push.apply(d, h);
            }
          }
        });
      }
    }, {
      key: "pasp",
      value: function (e) {
        return f(e, false, function (e, t) {
          e.hSpacing = binaryBufferUtils.readUint32(t);
          e.vSpacing = binaryBufferUtils.readUint32(t, 4);
        });
      }
    }, {
      key: "mp4a",
      value: function (t) {
        return f(t, false, function (t, n, r) {
          var i = l(t, n);
          t.esds = e.esds(e.findBox(n.subarray(i), ["esds"], r + i)[0]);
        });
      }
    }, {
      key: "esds",
      value: function (e) {
        return f(e, true, function (e, t) {
          e.codec = "mp4a.";
          var n = 0;
          var r = 0;
          var i = 0;
          var o = 0;
          while (t.length) {
            o = t[n = 0];
            r = t[n + 1];
            n += 2;
            while (r & 128) {
              i = (r & 127) << 7;
              r = t[n];
              n += 1;
            }
            i += r & 127;
            if (o === 3) {
              t = t.subarray(n + 3);
            } else if (o === 4) {
              e.codec += (t[n].toString(16) + ".").padStart(3, "0");
              t = t.subarray(n + 13);
            } else if (o === 5) {
              var a = e.config = t.subarray(n, n + i);
              var s = (a[0] & 248) >> 3;
              if (s === 31 && a.length >= 2) {
                s = 32 + ((a[0] & 7) << 3) + ((a[1] & 224) >> 5);
              }
              e.objectType = s;
              e.codec += s.toString(16);
              if (e.codec[e.codec.length - 1] === ".") {
                e.codec = e.codec.substring(0, e.codec.length - 1);
              }
              return;
            } else {
              if (e.codec[e.codec.length - 1] === ".") {
                e.codec = e.codec.substring(0, e.codec.length - 1);
              }
              return;
            }
          }
        });
      }
    }, {
      key: "alaw",
      value: function (e) {
        return f(e, false, function (e, t) {
          l(e, t);
        });
      }
    }, {
      key: "stts",
      value: function (e) {
        return f(e, true, function (e, t) {
          var n = binaryBufferUtils.readUint32(t);
          var r = [];
          var i = 4;
          var a = 0;
          for (; a < n; a++) {
            r.push({
              count: binaryBufferUtils.readUint32(t, i),
              delta: binaryBufferUtils.readUint32(t, i + 4)
            });
            i += 8;
          }
          e.entryCount = n;
          e.entries = r;
        });
      }
    }, {
      key: "ctts",
      value: function (e) {
        return f(e, true, function (e, t) {
          var n = binaryBufferUtils.readUint32(t);
          var r = [];
          var i = 4;
          if (e.version === 1) {
            for (var a = 0; a < n; a++) {
              r.push({
                count: binaryBufferUtils.readUint32(t, i),
                offset: binaryBufferUtils.readUint32(t, i + 4)
              });
              i += 8;
            }
          } else {
            for (var s = 0; s < n; s++) {
              r.push({
                count: binaryBufferUtils.readUint32(t, i),
                offset: -(~binaryBufferUtils.readUint32(t, i + 4) + 1)
              });
              i += 8;
            }
          }
          e.entryCount = n;
          e.entries = r;
        });
      }
    }, {
      key: "stsc",
      value: function (e) {
        return f(e, true, function (e, t) {
          var n = binaryBufferUtils.readUint32(t);
          var r = [];
          var i = 4;
          var a = 0;
          for (; a < n; a++) {
            r.push({
              firstChunk: binaryBufferUtils.readUint32(t, i),
              samplesPerChunk: binaryBufferUtils.readUint32(t, i + 4),
              sampleDescriptionIndex: binaryBufferUtils.readUint32(t, i + 8)
            });
            i += 12;
          }
          e.entryCount = n;
          e.entries = r;
        });
      }
    }, {
      key: "stsz",
      value: function (e) {
        return f(e, true, function (e, t) {
          var n = binaryBufferUtils.readUint32(t);
          var r = binaryBufferUtils.readUint32(t, 4);
          var i = [];
          if (!n) {
            var a = 8;
            var s = 0;
            for (; s < r; s++) {
              i.push(binaryBufferUtils.readUint32(t, a));
              a += 4;
            }
          }
          e.sampleSize = n;
          e.sampleCount = r;
          e.entrySizes = i;
        });
      }
    }, {
      key: "stco",
      value: function (e) {
        return f(e, true, function (e, t) {
          var n = binaryBufferUtils.readUint32(t);
          var r = [];
          var i = 4;
          var a = 0;
          for (; a < n; a++) {
            r.push(binaryBufferUtils.readUint32(t, i));
            i += 4;
          }
          e.entryCount = n;
          e.entries = r;
        });
      }
    }, {
      key: "co64",
      value: function (e) {
        return f(e, true, function (e, t) {
          var n = binaryBufferUtils.readUint32(t);
          var r = [];
          var i = 4;
          var a = 0;
          for (; a < n; a++) {
            r.push(binaryBufferUtils.readUint64(t, i));
            i += 8;
          }
          e.entryCount = n;
          e.entries = r;
        });
      }
    }, {
      key: "stss",
      value: function (e) {
        return f(e, true, function (e, t) {
          var n = binaryBufferUtils.readUint32(t);
          var r = [];
          var i = 4;
          var a = 0;
          for (; a < n; a++) {
            r.push(binaryBufferUtils.readUint32(t, i));
            i += 4;
          }
          e.entryCount = n;
          e.entries = r;
        });
      }
    }, {
      key: "moof",
      value: function (t) {
        return f(t, false, function (t, n, r) {
          t.mfhd = e.mfhd(e.findBox(n, ["mfhd"], r)[0]);
          t.traf = e.findBox(n, ["traf"], r).map(function (t) {
            return e.traf(t);
          });
        });
      }
    }, {
      key: "mfhd",
      value: function (e) {
        return f(e, true, function (e, t) {
          e.sequenceNumber = binaryBufferUtils.readUint32(t);
        });
      }
    }, {
      key: "traf",
      value: function (t) {
        return f(t, false, function (t, n, r) {
          t.tfhd = e.tfhd(e.findBox(n, ["tfhd"], r)[0]);
          t.tfdt = e.tfdt(e.findBox(n, ["tfdt"], r)[0]);
          t.trun = e.trun(e.findBox(n, ["trun"], r)[0]);
        });
      }
    }, {
      key: "trun",
      value: function (e) {
        return f(e, true, function (e, t) {
          var n;
          var r = e.version;
          var i = e.flags;
          var a = t.length;
          var s = e.sampleCount = binaryBufferUtils.readUint32(t);
          var u = 4;
          if (a > 4 && i & 1) {
            e.dataOffset = -(~binaryBufferUtils.readUint32(t, u) + 1);
            u += 4;
          }
          if (a > u && i & 4) {
            e.firstSampleFlags = binaryBufferUtils.readUint32(t, u);
            u += 4;
          }
          e.samples = [];
          if (a > u) {
            for (var c = 0; c < s; c++) {
              n = {};
              if (i & 256) {
                n.duration = binaryBufferUtils.readUint32(t, u);
                u += 4;
              }
              if (i & 512) {
                n.size = binaryBufferUtils.readUint32(t, u);
                u += 4;
              }
              if (i & 1024) {
                n.flags = binaryBufferUtils.readUint32(t, u);
                u += 4;
              }
              if (i & 2048) {
                if (r) {
                  n.cts = -(~binaryBufferUtils.readUint32(t, u + 4) + 1);
                } else {
                  n.cts = binaryBufferUtils.readUint32(t, u);
                }
                u += 4;
              }
              e.samples.push(n);
            }
          }
        });
      }
    }, {
      key: "tfdt",
      value: function (e) {
        return f(e, true, function (e, t) {
          if (e.version === 1) {
            e.baseMediaDecodeTime = binaryBufferUtils.readUint64(t);
          } else {
            e.baseMediaDecodeTime = binaryBufferUtils.readUint32(t);
          }
        });
      }
    }, {
      key: "probe",
      value: function (t) {
        return !!e.findBox(t, ["ftyp"]);
      }
    }, {
      key: "parseSampleFlags",
      value: function (e) {
        return {
          isLeading: (e[0] & 12) >>> 2,
          dependsOn: e[0] & 3,
          isDependedOn: (e[1] & 192) >>> 6,
          hasRedundancy: (e[1] & 48) >>> 4,
          paddingValue: (e[1] & 14) >>> 1,
          isNonSyncSample: e[1] & 1,
          degradationPriority: e[2] << 8 | e[3]
        };
      }
    }, {
      key: "moovToTrack",
      value: function (e, t, n) {
        var r = e.trak;
        if (r && r.length) {
          var o = r.find(function (e) {
            var t;
            return ((t = e.mdia) === null || t === undefined ? undefined : t.hdlr?.handlerType) === "vide";
          });
          var s = r.find(function (e) {
            var t;
            return ((t = e.mdia) === null || t === undefined ? undefined : t.hdlr?.handlerType) === "soun";
          });
          if (o && t) {
            if (o.tkhd?.trackId != null) {
              t.id = o.tkhd.trackId;
            }
            t.tkhdDuration = o.tkhd.duration;
            t.mvhdDurtion = e.mvhd.duration;
            t.mvhdTimecale = e.mvhd.timescale;
            t.timescale = t.formatTimescale = o.mdia.mdhd.timescale;
            t.duration = o.mdia.mdhd.duration || t.mvhdDurtion / t.mvhdTimecale * t.timescale;
            var f;
            var d;
            var p;
            var v;
            var y;
            var g;
            var m;
            var b;
            var x;
            var E;
            var k;
            var S = o.mdia.minf.stbl.stsd.entries[0];
            t.width = S.width;
            t.height = S.height;
            if (S.pasp) {
              t.sarRatio = [S.pasp.hSpacing, S.pasp.vSpacing];
            }
            if (S.hvcC) {
              t.codecType = avMediaConstants.videoCodecs.HEVC;
              t.codec = S.hvcC.codec;
              t.vps = S.hvcC.vps;
              t.sps = S.hvcC.sps;
              t.pps = S.hvcC.pps;
              t.hvcC = S.hvcC.data;
            } else if (S.avcC) {
              t.codec = S.avcC.codec;
              t.sps = S.avcC.sps;
              t.pps = S.avcC.pps;
            } else {
              throw Error("unknown video stsd entry");
            }
            t.present = true;
            t.ext = {};
            t.ext.stss = (f = o.mdia) === null || f === undefined ? undefined : (d = f.minf) === null || d === undefined ? undefined : d.stbl?.stss;
            t.ext.ctts = (p = o.mdia) === null || p === undefined ? undefined : (v = p.minf) === null || v === undefined ? undefined : v.stbl?.ctts;
            if (S && S.type === "encv") {
              t.isVideoEncryption = true;
              S.default_KID = (y = S.sinf) === null || y === undefined ? undefined : (g = y.schi) === null || g === undefined ? undefined : g.tenc.default_KID;
              S.default_IsEncrypted = (m = S.sinf) === null || m === undefined ? undefined : (b = m.schi) === null || b === undefined ? undefined : b.tenc.default_IsEncrypted;
              S.default_IV_size = (x = S.sinf) === null || x === undefined ? undefined : (E = x.schi) === null || E === undefined ? undefined : E.tenc.default_IV_size;
              t.videoSenc = o.mdia.minf.stbl.senc && o.mdia.minf.stbl.senc.samples;
              S.data_format = (k = S.sinf) === null || k === undefined ? undefined : k.frma?.data_format;
              t.useEME = e.useEME;
              t.kidValue = e.kidValue;
              t.pssh = e.pssh;
              t.encv = S;
            }
          }
          if (s && n) {
            if (s.tkhd?.trackId != null) {
              n.id = s.tkhd.trackId;
            }
            n.tkhdDuration = s.tkhd.duration;
            n.mvhdDurtion = e.mvhd.duration;
            n.mvhdTimecale = e.mvhd.timescale;
            n.timescale = n.formatTimescale = s.mdia.mdhd.timescale;
            n.duration = s.mdia.mdhd.duration || n.mvhdDurtion / n.mvhdTimecale * n.timescale;
            var R;
            var L;
            var C;
            var P;
            var B;
            var M;
            var j;
            var F;
            var N;
            var V;
            var H;
            var z = s.mdia.minf.stbl.stsd.entries[0];
            n.sampleSize = z.sampleSize;
            n.sampleRate = z.sampleRate;
            n.channelCount = z.channelCount;
            n.present = true;
            switch (z.type) {
              case "alaw":
                n.codecType = n.codec = avMediaConstants.audioCodecs.G711PCMA;
                n.sampleRate = 8000;
                break;
              case "ulaw":
                n.codecType = n.codec = avMediaConstants.audioCodecs.G711PCMU;
                n.sampleRate = 8000;
                break;
              default:
                n.sampleDuration = aacAdtsParserUtil.AacAdtsParser.getFrameDuration(n.sampleRate, n.timescale);
                n.sampleRateIndex = aacAdtsParserUtil.AacAdtsParser.getRateIndexByRate(n.sampleRate);
                n.objectType = z.esds?.objectType || 2;
                if (z.esds) {
                  n.config = Array.from(z.esds.config);
                }
                n.codec = z.esds?.codec || "mp4a.40.2";
            }
            n.sampleDuration = aacAdtsParserUtil.AacAdtsParser.getFrameDuration(n.sampleRate, n.timescale);
            n.objectType = z.esds?.objectType || 2;
            if (z.esds && z.esds.config) {
              n.config = Array.from(z.esds.config);
            }
            n.codec = z.esds?.codec || "mp4a.40.2";
            n.sampleRateIndex = aacAdtsParserUtil.AacAdtsParser.getRateIndexByRate(n.sampleRate);
            n.ext = {};
            n.ext.stss = (R = s.mdia) === null || R === undefined ? undefined : (L = R.minf) === null || L === undefined ? undefined : L.stbl?.stss;
            n.ext.ctts = (C = s.mdia) === null || C === undefined ? undefined : (P = C.minf) === null || P === undefined ? undefined : P.stbl?.ctts;
            n.present = true;
            if (z && z.type === "enca") {
              n.isAudioEncryption = true;
              z.data_format = (B = z.sinf) === null || B === undefined ? undefined : B.frma?.data_format;
              z.default_KID = (M = z.sinf) === null || M === undefined ? undefined : (j = M.schi) === null || j === undefined ? undefined : j.tenc.default_KID;
              z.default_IsEncrypted = (F = z.sinf) === null || F === undefined ? undefined : (N = F.schi) === null || N === undefined ? undefined : N.tenc.default_IsEncrypted;
              z.default_IV_size = (V = z.sinf) === null || V === undefined ? undefined : (H = V.schi) === null || H === undefined ? undefined : H.tenc.default_IV_size;
              n.audioSenc = s.mdia.minf.stbl.senc && s.mdia.minf.stbl.senc.samples;
              n.useEME = e.useEME;
              n.kidValue = e.kidValue;
              n.enca = z;
            }
          }
          if (n) {
            n.isVideoEncryption = !!t && t.isVideoEncryption;
          }
          if (t) {
            t.isAudioEncryption = !!n && n.isAudioEncryption;
          }
          if (t != null && t.encv || n != null && n.enca) {
            var K = t == null ? undefined : t.encv?.default_KID;
            var W = n == null ? undefined : n.enca?.default_KID;
            var Y = K || W ? (K || W).join("") : null;
            if (t) {
              t.kid = Y;
            }
            if (n) {
              n.kid = Y;
            }
          }
          if (t) {
            t.flags = 3841;
          }
          if (n) {
            n.flags = 1793;
          }
          return {
            videoTrack: t,
            audioTrack: n
          };
        }
      }
    }, {
      key: "evaluateDefaultDuration",
      value: function (e, t, n) {
        var i = t == null ? undefined : t.samples?.length;
        if (i) {
          return i * 1024 / t.timescale * e.timescale / n;
        } else {
          return 1024;
        }
      }
    }, {
      key: "moofToSamples",
      value: function (t, n, r) {
        var i = {};
        if (t.mfhd) {
          if (n) {
            n.sequenceNumber = t.mfhd.sequenceNumber;
          }
          if (r) {
            r.sequenceNumber = t.mfhd.sequenceNumber;
          }
        }
        t.traf.forEach(function (t) {
          var o = t.tfhd;
          var a = t.tfdt;
          var s = t.trun;
          if (o && s) {
            if (a) {
              if (n && n.id === o.trackId) {
                n.baseMediaDecodeTime = a.baseMediaDecodeTime;
              }
              if (r && r.id === o.trackId) {
                r.baseMediaDecodeTime = a.baseMediaDecodeTime;
              }
            }
            var u = o.defaultSampleSize || 0;
            var c = o.defaultSampleDuration || e.evaluateDefaultDuration(n, r, s.samples.length || s.sampleCount);
            var l = s.dataOffset || 0;
            var f = 0;
            var d = -1;
            if (!s.samples.length && s.sampleCount) {
              i[o.trackId] = [];
              for (var h = 0; h < s.sampleCount; h++) {
                i[o.trackId].push({
                  offset: l,
                  dts: f,
                  duration: c,
                  size: u
                });
                f += c;
                l += u;
              }
            } else {
              i[o.trackId] = s.samples.map(function (e, t) {
                if ((e = {
                  offset: l,
                  dts: f,
                  pts: f + (e.cts || 0),
                  duration: e.duration || c,
                  size: e.size || u,
                  gopId: d,
                  keyframe: t === 0 || e.flags !== null && e.flags !== undefined && (e.flags & 65536) >>> 0 != 65536
                }).keyframe) {
                  d++;
                  e.gopId = d;
                }
                f += e.duration;
                l += e.size;
                return e;
              });
            }
          }
        });
        return i;
      }
    }, {
      key: "moovToSamples",
      value: function (e) {
        var t = e.trak;
        if (t && t.length) {
          var n = t.find(function (e) {
            var t;
            return ((t = e.mdia) === null || t === undefined ? undefined : t.hdlr?.handlerType) === "vide";
          });
          var r = t.find(function (e) {
            var t;
            return ((t = e.mdia) === null || t === undefined ? undefined : t.hdlr?.handlerType) === "soun";
          });
          if (n || r) {
            if (n) {
              var i;
              var o;
              var a;
              var c = (a = n.mdia) === null || a === undefined ? undefined : a.minf?.stbl;
              if (!c) {
                return;
              }
              var l = c.stts;
              var f = c.stsc;
              var d = c.stsz;
              var h = c.stco;
              var p = c.stss;
              var v = c.ctts;
              if (!l || !f || !d || !h || !p) {
                return;
              }
              i = u(l, f, d, h, v, p);
            }
            if (r) {
              var _;
              var m = (_ = r.mdia) === null || _ === undefined ? undefined : _.minf?.stbl;
              if (!m) {
                return;
              }
              var b = r.mdia.mdhd?.timescale;
              var x = m.stts;
              var E = m.stsc;
              var k = m.stsz;
              var A = m.stco;
              if (!b || !x || !E || !k || !A) {
                return;
              }
              o = u(x, E, k, A);
            }
            return {
              videoSamples: i,
              audioSamples: o
            };
          }
        }
      }
    }]);
    return e;
  }();
  function u(e, t, n, r, i, o) {
    var a;
    var s;
    var u;
    var c = [];
    var l = i == null ? undefined : i.entries;
    var f = t.entries;
    var d = r.entries;
    var h = n.entrySizes;
    var p = o == null ? undefined : o.entries;
    if (p) {
      a = {};
      p.forEach(function (e) {
        a[e - 1] = true;
      });
    }
    if (l) {
      s = [];
      l.forEach(function (e) {
        var t = e.count;
        var n = e.offset;
        var r = 0;
        for (; r < t; r++) {
          s.push(n);
        }
      });
    }
    var v = -1;
    var _ = 0;
    var y = 0;
    var g = 0;
    var m = 0;
    var b = 0;
    var x = f[0].samplesPerChunk;
    var E = f[1] ? f[1].firstChunk - 1 : Infinity;
    e.entries.forEach(function (e) {
      var t = e.count;
      var r = e.delta;
      var i = 0;
      for (; i < t; i++) {
        u = {
          dts: _,
          duration: r,
          size: h[y] || n.sampleSize,
          offset: d[g] + b,
          index: y
        };
        if (p) {
          u.keyframe = a[y];
          if (u.keyframe) {
            v++;
          }
          u.gopId = v;
        }
        if (s && y < s.length) {
          u.pts = u.dts + s[y];
        }
        c.push(u);
        _ += r;
        if (++y < x) {
          b += u.size;
        } else {
          g++;
          b = 0;
          if (g >= E) {
            E = f[++m + 1] ? f[m + 1].firstChunk - 1 : Infinity;
          }
          x += f[m].samplesPerChunk;
        }
      }
    });
    return c;
  }
  function c(e, t) {
    e.dataReferenceIndex = binaryBufferUtils.readUint16(t, 6);
    e.width = binaryBufferUtils.readUint16(t, 24);
    e.height = binaryBufferUtils.readUint16(t, 26);
    e.horizresolution = binaryBufferUtils.readUint32(t, 28);
    e.vertresolution = binaryBufferUtils.readUint32(t, 32);
    e.frameCount = binaryBufferUtils.readUint16(t, 40);
    e.depth = binaryBufferUtils.readUint16(t, 74);
    return 78;
  }
  function l(e, t) {
    e.dataReferenceIndex = binaryBufferUtils.readUint16(t, 6);
    e.channelCount = binaryBufferUtils.readUint16(t, 16);
    e.sampleSize = binaryBufferUtils.readUint16(t, 18);
    e.sampleRate = binaryBufferUtils.readUint32(t, 24) / 65536;
    return 28;
  }
  function f(e, t, n) {
    if (e) {
      if (e.size !== e.data.length) {
        throw Error(`box ${e.type} size !== data.length`);
      }
      var r = {
        start: e.start,
        size: e.size,
        headerSize: e.headerSize,
        type: e.type
      };
      if (t) {
        r.version = e.data[e.headerSize];
        r.flags = binaryBufferUtils.readUint24(e.data, e.headerSize + 1);
        r.headerSize += 4;
      }
      n(r, e.data.subarray(r.headerSize), r.start + r.headerSize);
      return r;
    }
  }
  function d(e, t, n) {
    var r = String(n);
    var i = t >> 0;
    var o = Math.ceil(i / r.length);
    var a = [];
    var s = String(e);
    while (o--) {
      a.push(r);
    }
    return a.join("").substring(0, i - s.length) + s;
  }
  function h() {
    var e = [];
    var t = arguments.length;
    var n = Array(t);
    var r = 0;
    for (; r < t; r++) {
      n[r] = arguments[r];
    }
    n.forEach(function (t) {
      e.push(d(Number(t).toString(16), 2, 0));
    });
    return e[0];
  }
  require.d(exports, {
    Mp4BoxParser: function () {
      return s;
    }
  });
}