// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'Fmp4Remuxer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 480914
         */
module.exports = function (module, exports, require) {
  var babelClassHelpers = require("babel-class-helpers") /*id: 197180*/;
  var avMediaConstants = require("av-media-constants") /*id: 87395*/;
  var binaryBufferUtils = require("binary-buffer-utils") /*id: 852150*/;
  var uint8BufferWriter = require("uint8-buffer-writer") /*id: 512273*/;
  var s = function () {
    function e() {
      babelClassHelpers.classCallCheck(this, e);
    }
    babelClassHelpers.createClass(e, null, [{
      key: "box",
      value: function (e) {
        var t = arguments.length;
        var n = Array(t > 1 ? t - 1 : 0);
        var r = 1;
        for (; r < t; r++) {
          n[r - 1] = arguments[r];
        }
        var i = 8 + (n = n.filter(Boolean)).reduce(function (e, t) {
          return e + t.byteLength;
        }, 0);
        var o = new Uint8Array(i);
        o[0] = i >> 24 & 255;
        o[1] = i >> 16 & 255;
        o[2] = i >> 8 & 255;
        o[3] = i & 255;
        o.set(e, 4);
        var a = 8;
        n.forEach(function (e) {
          o.set(e, a);
          a += e.byteLength;
        });
        return o;
      }
    }, {
      key: "ftyp",
      value: function (t) {
        if (t.find(function (e) {
          return e.type === avMediaConstants.trackTypes.VIDEO && e.codecType === avMediaConstants.videoCodecs.HEVC;
        })) {
          return e.FTYPHEV1;
        } else {
          return e.FTYPAVC1;
        }
      }
    }, {
      key: "initSegment",
      value: function (t) {
        var n = e.ftyp(t);
        return binaryBufferUtils.concatBuffers(n, e.moov(t));
      }
    }, {
      key: "pssh",
      value: function (t) {
        var n = new Uint8Array([1, 0, 0, 0].concat([16, 119, 239, 236, 192, 178, 77, 2, 172, 227, 60, 30, 82, 226, 251, 75], [0, 0, 0, 1], binaryBufferUtils.hexToBytes(t.kid), [0, 0, 0, 0]));
        return e.box(e.types.pssh, n);
      }
    }, {
      key: "moov",
      value: function (t) {
        if (!t[0].useEME || !t[0].encv && !t[0].enca) {
          return e.box.apply(e, [e.types.moov, e.mvhd(t[0].mvhdDurtion || t[0].duration, t[0].mvhdTimecale || t[0].timescale)].concat(babelClassHelpers.toConsumableArray(t.map(function (t) {
            return e.trak(t);
          })), [e.mvex(t)]));
        }
        t[0].pssh ||= {
          kid: t[0].kid
        };
        var n = this.pssh(t[0].pssh);
        return e.box.apply(e, [e.types.moov, e.mvhd(t[0].mvhdDurtion || t[0].duration, t[0].mvhdTimecale || t[0].timescale), e.mvex(t)].concat(babelClassHelpers.toConsumableArray(t.map(function (t) {
          return e.trak(t);
        })), [n]));
      }
    }, {
      key: "mvhd",
      value: function (t, n = 90000) {
        return e.box(e.types.mvhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]));
      }
    }, {
      key: "trak",
      value: function (t) {
        return e.box(e.types.trak, e.tkhd(t.id, t.tkhdDuration || 0, t.width, t.height), e.mdia(t));
      }
    }, {
      key: "tkhd",
      value: function (t, n, r = 0, i = 0) {
        return e.box(e.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255, 0, 0, 0, 0, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r >> 8 & 255, r & 255, 0, 0, i >> 8 & 255, i & 255, 0, 0]));
      }
    }, {
      key: "mdia",
      value: function (t) {
        return e.box(e.types.mdia, e.mdhd(t.duration, t.timescale), e.hdlr(t.type), e.minf(t));
      }
    }, {
      key: "mdhd",
      value: function (t, n = 90000) {
        return e.box(e.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255, 85, 196, 0, 0]));
      }
    }, {
      key: "hdlr",
      value: function (t) {
        return e.box(e.types.hdlr, e.HDLR_TYPES[t]);
      }
    }, {
      key: "minf",
      value: function (t) {
        return e.box(e.types.minf, t.type === avMediaConstants.trackTypes.VIDEO ? e.VMHD : e.SMHD, e.DINF, e.stbl(t));
      }
    }, {
      key: "stbl",
      value: function (t) {
        var n = [];
        if (t && t.ext && t.ext.stss) {
          n.push(e.stss(t.ext.stss.entries));
        }
        return e.box(e.types.stbl, e.stsd(t), e.STTS, n[0], e.STSC, e.STSZ, e.STCO);
      }
    }, {
      key: "stsd",
      value: function (t) {
        var n;
        n = t.type === "audio" ? t.useEME && t.enca ? e.enca(t) : e.mp4a(t) : t.useEME && t.encv ? e.encv(t) : e.avc1hev1(t);
        return e.box(e.types.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), n);
      }
    }, {
      key: "enca",
      value: function (t) {
        var n = t.enca.channelCount;
        var r = t.enca.sampleRate;
        var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, n, 0, 16, 0, 0, 0, 0, r >> 8 & 255, r & 255, 0, 0]);
        var o = e.esds(t.config);
        var a = e.sinf(t.enca);
        return e.box(e.types.enca, i, o, a);
      }
    }, {
      key: "encv",
      value: function (t) {
        var n;
        var i;
        var o = t.sps.length > 0 ? t.sps[0] : [];
        var a = t.pps.length > 0 ? t.pps[0] : [];
        var s = t.width;
        var u = t.height;
        var c = t.sarRatio[0];
        var l = t.sarRatio[1];
        var f = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, s >> 8 & 255, s & 255, u >> 8 & 255, u & 255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]);
        var d = new Uint8Array((n = (i = [1, o[1], o[2], o[3], 255, 225, o.length >>> 8 & 255, o.length & 255]).concat.apply(i, babelClassHelpers.toConsumableArray(o)).concat([1, a.length >>> 8 & 255, a.length & 255])).concat.apply(n, babelClassHelpers.toConsumableArray(a)));
        var h = new Uint8Array([0, 0, 88, 57, 0, 15, 200, 192, 0, 4, 86, 72]);
        var p = e.sinf(t.encv);
        var v = new Uint8Array([c >> 24, c >> 16 & 255, c >> 8 & 255, c & 255, l >> 24, l >> 16 & 255, l >> 8 & 255, l & 255]);
        return e.box(e.types.encv, f, e.box(e.types.avcC, d), e.box(e.types.btrt, h), p, e.box(e.types.pasp, v));
      }
    }, {
      key: "schi",
      value: function (t) {
        var n = new Uint8Array([]);
        var r = e.tenc(t);
        return e.box(e.types.schi, n, r);
      }
    }, {
      key: "tenc",
      value: function (t) {
        var n = new Uint8Array([0, 0, 0, 0, 0, 0, t.default_IsEncrypted & 255, t.default_IV_size & 255].concat(binaryBufferUtils.hexToBytes(t.default_KID)));
        return e.box(e.types.tenc, n);
      }
    }, {
      key: "sinf",
      value: function (t) {
        var n = new Uint8Array([]);
        var r = new Uint8Array([t.data_format.charCodeAt(0), t.data_format.charCodeAt(1), t.data_format.charCodeAt(2), t.data_format.charCodeAt(3)]);
        var i = new Uint8Array([0, 0, 0, 0, 99, 101, 110, 99, 0, 1, 0, 0]);
        var o = e.schi(t);
        return e.box(e.types.sinf, n, e.box(e.types.frma, r), e.box(e.types.schm, i), o);
      }
    }, {
      key: "avc1hev1",
      value: function (t) {
        var n = t.codecType === avMediaConstants.videoCodecs.HEVC;
        var r = n ? e.types.hvc1 : e.types.avc1;
        var o = n ? e.hvcC(t) : e.avcC(t);
        var a = [new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.width >> 8 & 255, t.width & 255, t.height >> 8 & 255, t.height & 255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o];
        if (n) {
          a.push(e.box(e.types.fiel, new Uint8Array([1, 0])));
        } else if (t.sarRatio && t.sarRatio.length > 1) {
          a.push(e.pasp(t.sarRatio));
        }
        return e.box.apply(e, [r].concat(a));
      }
    }, {
      key: "avcC",
      value: function (t) {
        var n;
        var i;
        var o;
        var a = [];
        var s = [];
        t.sps.forEach(function (e) {
          o = e.byteLength;
          a.push(o >>> 8 & 255);
          a.push(o & 255);
          a.push.apply(a, babelClassHelpers.toConsumableArray(e));
        });
        t.pps.forEach(function (e) {
          o = e.byteLength;
          s.push(o >>> 8 & 255);
          s.push(o & 255);
          s.push.apply(s, babelClassHelpers.toConsumableArray(e));
        });
        return e.box(e.types.avcC, new Uint8Array((n = (i = [1, a[3], a[4], a[5], 255, t.sps.length | 224]).concat.apply(i, a).concat([t.pps.length])).concat.apply(n, s)));
      }
    }, {
      key: "hvcC",
      value: function (t) {
        var n;
        var i = t.hvcC;
        if (i instanceof ArrayBuffer || i instanceof Uint8Array) {
          return i;
        }
        var o = t.vps;
        var a = t.sps;
        var s = t.pps;
        if (i) {
          var u = i.generalProfileCompatibilityFlags;
          var c = i.generalConstraintIndicatorFlags;
          var l = (o.length && 1) + (a.length && 1) + (s.length && 1);
          n = [1, i.generalProfileSpace << 6 | i.generalTierFlag << 5 | i.generalProfileIdc, u >>> 24, u >>> 16, u >>> 8, u, c[0], c[1], c[2], c[3], c[4], c[5], i.generalLevelIdc, 240, 0, 252, i.chromaFormatIdc | 252, i.bitDepthLumaMinus8 | 248, i.bitDepthChromaMinus8 | 248, 0, 0, i.numTemporalLayers << 3 | i.temporalIdNested << 2 | 3, l];
          function f(e) {
            var t;
            n.push(e.length >> 8, e.length);
            (t = n).push.apply(t, babelClassHelpers.toConsumableArray(e));
          }
          if (o.length) {
            n.push(160, 0, o.length);
            o.forEach(f);
          }
          if (a.length) {
            n.push(161, 0, a.length);
            a.forEach(f);
          }
          if (s.length) {
            n.push(162, 0, s.length);
            s.forEach(f);
          }
        } else {
          n = [1, 1, 96, 0, 0, 0, 144, 0, 0, 0, 0, 0, 93, 240, 0, 252, 253, 248, 248, 0, 0, 15, 3, 160, 0, 1, 0, 24, 64, 1, 12, 1, 255, 255, 1, 96, 0, 0, 3, 0, 144, 0, 0, 3, 0, 0, 3, 0, 93, 153, 152, 9, 161, 0, 1, 0, 45, 66, 1, 1, 1, 96, 0, 0, 3, 0, 144, 0, 0, 3, 0, 0, 3, 0, 93, 160, 2, 128, 128, 45, 22, 89, 153, 164, 147, 43, 154, 128, 128, 128, 130, 0, 0, 3, 0, 2, 0, 0, 3, 0, 50, 16, 162, 0, 1, 0, 7, 68, 1, 193, 114, 180, 98, 64];
        }
        return e.box(e.types.hvcC, new Uint8Array(n));
      }
    }, {
      key: "pasp",
      value: function (t) {
        var n = babelClassHelpers.slicedToArray(t, 2);
        var i = n[0];
        var o = n[1];
        return e.box(e.types.pasp, new Uint8Array([i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255, o >> 24, o >> 16 & 255, o >> 8 & 255, o & 255]));
      }
    }, {
      key: "mp4a",
      value: function (t) {
        return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, t.sampleRate >> 8 & 255, t.sampleRate & 255, 0, 0]), t.config.length ? e.esds(t.config) : undefined);
      }
    }, {
      key: "esds",
      value: function (t) {
        var n = t.length;
        return e.box(e.types.esds, new Uint8Array([0, 0, 0, 0, 3, 23 + n, 0, 0, 0, 4, 15 + n, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5].concat([n]).concat(t).concat([6, 1, 2])));
      }
    }, {
      key: "mvex",
      value: function (t) {
        return e.box.apply(e, [e.types.mvex].concat(babelClassHelpers.toConsumableArray(t.map(function (t) {
          return e.trex(t.id);
        }))));
      }
    }, {
      key: "trex",
      value: function (t) {
        return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]));
      }
    }, {
      key: "trex1",
      value: function (t) {
        return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0]));
      }
    }, {
      key: "trex2",
      value: function (t) {
        return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255, 0, 0, 0, 1, 0, 0, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0]));
      }
    }, {
      key: "moof",
      value: function (t) {
        return e.box.apply(e, [e.types.moof, e.mfhd(t[0].samples ? t[0].samples[0].gopId : 0)].concat(babelClassHelpers.toConsumableArray(t.map(function (t) {
          return e.traf(t);
        }))));
      }
    }, {
      key: "mfhd",
      value: function (t) {
        return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255]));
      }
    }, {
      key: "traf",
      value: function (t) {
        var n = e.tfhd(t.id);
        var r = e.tfdt(t, t.baseMediaDecodeTime);
        var i = 0;
        if (t.isVideo && t.videoSenc) {
          t.videoSenc.forEach(function (e) {
            i += 8;
            if (e.subsamples && e.subsamples.length) {
              i += 2 + e.subsamples.length * 6;
            }
          });
        }
        t.videoSencLength = i;
        if (t.useEME && (t.isVideoEncryption || t.isAudioEncryption)) {
          if (t.isVideoEncryption) {
            if (t.isVideo) {
              var o = e.saiz(t);
              var a = e.saio(t);
              var s = e.trun1(t);
              var u = e.senc(t);
              return e.box(e.types.traf, n, r, o, a, s, u);
            }
            if (t.isAudioEncryption) {
              var c = e.sbgp();
              var l = e.saiz(t);
              var f = e.saio(t);
              var d = e.senc(t);
              var h = e.trun1(t);
              return e.box(e.types.traf, n, r, c, l, f, d, h);
            }
            var p = e.sbgp();
            var v = e.trun1(t);
            return e.box(e.types.traf, n, r, p, v);
          }
          if (t.isVideo) {
            var _ = e.trun1(t);
            return e.box(e.types.traf, n, r, _);
          }
          var y = e.sbgp();
          var g = e.saiz(t);
          var m = e.saio(t);
          var b = e.senc(t);
          var x = e.trun1(t);
          return e.box(e.types.traf, n, r, y, g, m, b, x);
        }
        var E = e.sdtp(t);
        return e.box(e.types.traf, n, r, E, e.trun(t.samples, E.byteLength + 76));
      }
    }, {
      key: "sdtp",
      value: function (t) {
        var n = new uint8BufferWriter.BufferWriter();
        t.samples.forEach(function (e) {
          n.write(new Uint8Array(t.isVideo ? [e.keyframe ? 32 : 16] : [16]));
        });
        return e.box(e.types.sdtp, this.extension(0, 0), n.buffer);
      }
    }, {
      key: "trun1",
      value: function (t) {
        var n = new uint8BufferWriter.BufferWriter();
        var r = uint8BufferWriter.BufferWriter.writeUint32(t.samples.length);
        var i = null;
        if (t.isVideo) {
          var o = t.videoSencLength;
          i = uint8BufferWriter.BufferWriter.writeUint32(t.samples.length * 16 + o + 149);
          if (!t.isVideoEncryption && t.isAudioEncryption) {
            i = uint8BufferWriter.BufferWriter.writeUint32(t.samples.length * 16 + 92);
          }
        } else {
          var s = t.samples.length * 12 + 124;
          if (t.isAudioEncryption) {
            s = t.samples.length * 12 + t.audioSenc.length * 8 + 177;
          }
          i = uint8BufferWriter.BufferWriter.writeUint32(s);
        }
        t.samples.forEach(function (e) {
          n.write(uint8BufferWriter.BufferWriter.writeUint32(e.duration));
          n.write(uint8BufferWriter.BufferWriter.writeUint32(e.size));
          n.write(uint8BufferWriter.BufferWriter.writeUint32(e.keyframe ? 33554432 : 65536));
          if (t.isVideo) {
            n.write(uint8BufferWriter.BufferWriter.writeUint32(e.cts ? e.cts : 0));
          }
        });
        return e.box(e.types.trun, this.extension(0, t.flags), r, i, n.buffer);
      }
    }, {
      key: "senc",
      value: function (t) {
        var n = new uint8BufferWriter.BufferWriter();
        var r = t.samples.length;
        var i = t.isVideo ? 16 : 8;
        var o = !!t.isVideo * 2;
        var s = [];
        var u = 0;
        if (t.isVideo) {
          s = t.videoSenc;
          u = t.videoSencLength;
        } else {
          s = t.audioSenc;
        }
        u = u || i * r;
        n.write(uint8BufferWriter.BufferWriter.writeUint32(16 + u), e.types.senc, this.extension(0, o));
        n.write(uint8BufferWriter.BufferWriter.writeUint32(r));
        s.forEach(function (e) {
          for (var t = 0; t < e.InitializationVector.length; t++) {
            n.write(new Uint8Array([e.InitializationVector[t]]));
          }
          if (e.subsamples && e.subsamples.length) {
            n.write(uint8BufferWriter.BufferWriter.writeUint16(e.subsamples.length));
            e.subsamples.forEach(function (e) {
              n.write(uint8BufferWriter.BufferWriter.writeUint16(e.BytesOfClearData));
              n.write(uint8BufferWriter.BufferWriter.writeUint32(e.BytesOfProtectedData));
            });
          }
        });
        return n.buffer;
      }
    }, {
      key: "saio",
      value: function (t) {
        var n = t.samples.length * 12 + 141;
        if (!t.isVideo && t.isAudioEncryption) {
          n = 149;
        }
        var r = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255]);
        return e.box(e.types.saio, r);
      }
    }, {
      key: "saiz",
      value: function (t) {
        var n = t.samples.length;
        var r = new Uint8Array([0, 0, 0, 0, 16, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255]);
        return e.box(e.types.saiz, r);
      }
    }, {
      key: "sbgp",
      value: function () {
        var t = new Uint8Array([114, 111, 108, 108, 0, 0, 0, 1, 0, 0, 1, 25, 0, 0, 0, 1]);
        return e.box(e.types.sbgp, this.extension(0, 0), t);
      }
    }, {
      key: "extension",
      value: function (e, t) {
        return new Uint8Array([e, t >> 16 & 255, t >> 8 & 255, t & 255]);
      }
    }, {
      key: "tfhd",
      value: function (t) {
        return e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255]));
      }
    }, {
      key: "tfdt",
      value: function (t, n) {
        var r = Math.floor(n / 4294967296);
        var i = Math.floor(n % 4294967296);
        if (t.useEME && (t.isVideoEncryption || t.isAudioEncryption)) {
          return e.box(e.types.tfdt, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255]));
        } else {
          return e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, r & 255, i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255]));
        }
      }
    }, {
      key: "trun",
      value: function (t, n) {
        var r = t.length;
        var i = 12 + r * 16;
        n += 8 + i;
        var o = new Uint8Array(i);
        o.set([0, 0, 15, 1, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, r & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n & 255], 0);
        for (var a = 0; a < r; a++) {
          var s = t[a];
          var u = s.duration;
          var c = s.size;
          var l = s.flag;
          var f = l === undefined ? {} : l;
          var d = s.cts;
          var h = d === undefined ? 0 : d;
          o.set([u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, u & 255, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, c & 255, f.isLeading << 2 | (f.dependsOn === null || f.dependsOn === undefined ? 1 : f.dependsOn), f.isDependedOn << 6 | f.hasRedundancy << 4 | f.paddingValue << 1 | (f.isNonSyncSample === null || f.isNonSyncSample === undefined ? 1 : f.isNonSyncSample), f.degradationPriority & 61440, f.degradationPriority & 15, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, h & 255], 12 + a * 16);
        }
        return e.box(e.types.trun, o);
      }
    }, {
      key: "moovMP4",
      value: function (t) {
        return e.box.apply(e, [e.types.moov, e.mvhd(t[0].duration, t[0].timescale)].concat(babelClassHelpers.toConsumableArray(t.map(function (t) {
          return e.trackMP4(t);
        }))));
      }
    }, {
      key: "trackMP4",
      value: function (t) {
        return e.box(e.types.trak, e.tkhd(t.id, t.duration, t.width, t.height), e.mdiaMP4(t));
      }
    }, {
      key: "mdiaMP4",
      value: function (t) {
        return e.box(e.types.mdia, e.mdhd(t.duration, t.timescale), e.hdlr(t.type), e.minfMP4(t));
      }
    }, {
      key: "minfMP4",
      value: function (t) {
        return e.box(e.types.minf, t.type === avMediaConstants.trackTypes.VIDEO ? e.VMHD : e.SMHD, e.DINF, e.stblMP4(t));
      }
    }, {
      key: "stblMP4",
      value: function (t) {
        var n = t.ext;
        var r = [e.stsd(t), e.stts(n.stts), e.stsc(n.stsc), e.stsz(n.stsz), e.stco(n.stco)];
        if (n.stss.length) {
          r.push(e.stss(n.stss));
        }
        if (n.ctts.length) {
          r.push(e.ctts(n.ctts));
        }
        return e.box.apply(e, [e.types.stbl].concat(r));
      }
    }, {
      key: "stts",
      value: function (t) {
        var n = t.length;
        var r = new Uint8Array(n * 8);
        var i = 0;
        t.forEach(function (e) {
          var t = e.value;
          var n = e.count;
          r.set([n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255], i);
          i += 8;
        });
        return e.box(e.types.stts, binaryBufferUtils.concatBuffers(new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255]), r));
      }
    }, {
      key: "stsc",
      value: function (t) {
        var n = t.length;
        var r = new Uint8Array(n * 12);
        var i = 0;
        t.forEach(function (e) {
          var t = e.firstChunk;
          var n = e.samplesPerChunk;
          var o = e.sampleDescIndex;
          r.set([t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255, n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255, o >> 24, o >> 16 & 255, o >> 8 & 255, o & 255], i);
          i += 12;
        });
        return e.box(e.types.stsc, binaryBufferUtils.concatBuffers(new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255]), r));
      }
    }, {
      key: "stsz",
      value: function (t) {
        var n = t.length;
        var r = new Uint8Array(n * 4);
        var i = 0;
        t.forEach(function (e) {
          r.set([e >> 24, e >> 16 & 255, e >> 8 & 255, e & 255], i);
          i += 4;
        });
        return e.box(e.types.stsz, binaryBufferUtils.concatBuffers(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255]), r));
      }
    }, {
      key: "stco",
      value: function (t) {
        var n = t.length;
        var r = new Uint8Array(n * 4);
        var i = 0;
        t.forEach(function (e) {
          r.set([e >> 24, e >> 16 & 255, e >> 8 & 255, e & 255], i);
          i += 4;
        });
        return e.box(e.types.stco, binaryBufferUtils.concatBuffers(new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255]), r));
      }
    }, {
      key: "stss",
      value: function (t) {
        var n = t.length;
        var r = new Uint8Array(n * 4);
        var i = 0;
        t.forEach(function (e) {
          r.set([e >> 24, e >> 16 & 255, e >> 8 & 255, e & 255], i);
          i += 4;
        });
        return e.box(e.types.stss, binaryBufferUtils.concatBuffers(new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255]), r));
      }
    }, {
      key: "ctts",
      value: function (t) {
        var n = t.length;
        var r = new Uint8Array(n * 8);
        var i = 0;
        t.forEach(function (e) {
          var t = e.value;
          var n = e.count;
          r.set([n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255], i);
          i += 8;
        });
        return e.box(e.types.ctts, binaryBufferUtils.concatBuffers(new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255]), r));
      }
    }, {
      key: "styp",
      value: function () {
        return e.box(e.types.styp, new Uint8Array([109, 115, 100, 104, 0, 0, 0, 0, 109, 115, 100, 104, 109, 115, 105, 120]));
      }
    }, {
      key: "sidx",
      value: function (t) {
        var n = t.timescale;
        var r = t.samples[0].duration;
        var i = r * t.samples.length;
        var o = t.samples[0].sampleOffset * r;
        var a = 8;
        t.samples.forEach(function (e) {
          a += e.size;
        });
        var s = 0;
        if (t.isVideo) {
          var u;
          var c = 0;
          if (t.videoSenc) {
            u = t.videoSenc;
          }
          if (t.isVideo) {
            u.forEach(function (e) {
              c += 8;
              if (e.subsamples && e.subsamples.length) {
                c += 2 + e.subsamples.length * 6;
              }
            });
          }
          t.videoSencLength = c;
          s = a + 141 + t.samples.length * 16 + c;
          if (t.useEME && t.isAudioEncryption && !t.isVideoEncryption) {
            s = a + t.samples.length * 16 + 84;
          }
        } else {
          s = a + 116 + t.samples.length * 12;
          if (t.useEME && t.isAudioEncryption) {
            s = a + 169 + t.samples.length * 12 + t.audioSenc.length * 8;
          }
        }
        var l = new Uint8Array([0, 0, 0, 0, 0, 0, 0, t.id & 255, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, o & 255, 0, 0, 0, 0, 0, 0, 0, 1, 0, s >> 16 & 255, s >> 8 & 255, s & 255, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255, 144, 0, 0, 0]);
        return e.box(e.types.sidx, l);
      }
    }, {
      key: "mdat",
      value: function (t) {
        return e.box(e.types.mdat, t);
      }
    }]);
    return e;
  }();
  babelClassHelpers.defineProperty(s, "types", ["avc1", "avcC", "hvc1", "hvcC", "dinf", "dref", "esds", "ftyp", "hdlr", "mdat", "mdhd", "mdia", "mfhd", "minf", "moof", "moov", "mp4a", "mvex", "mvhd", "pasp", "stbl", "stco", "stsc", "stsd", "stsz", "stts", "tfdt", "tfhd", "traf", "trak", "trex", "tkhd", "vmhd", "smhd", "ctts", "stss", "styp", "pssh", "sidx", "sbgp", "saiz", "saio", "senc", "trun", "encv", "enca", "sinf", "btrt", "frma", "tenc", "schm", "schi", "mehd", "fiel", "sdtp"].reduce(function (e, t) {
    e[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)];
    return e;
  }, Object.create(null)));
  babelClassHelpers.defineProperty(s, "HDLR_TYPES", {
    video: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
    audio: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0])
  });
  babelClassHelpers.defineProperty(s, "FTYPAVC1", s.box(s.types.ftyp, new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49])));
  babelClassHelpers.defineProperty(s, "FTYPHEV1", s.box(s.types.ftyp, new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 104, 101, 118, 49])));
  babelClassHelpers.defineProperty(s, "DINF", s.box(s.types.dinf, s.box(s.types.dref, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]))));
  babelClassHelpers.defineProperty(s, "VMHD", s.box(s.types.vmhd, new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])));
  babelClassHelpers.defineProperty(s, "SMHD", s.box(s.types.smhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])));
  babelClassHelpers.defineProperty(s, "StblTable", new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]));
  babelClassHelpers.defineProperty(s, "STTS", s.box(s.types.stts, s.StblTable));
  babelClassHelpers.defineProperty(s, "STSC", s.box(s.types.stsc, s.StblTable));
  babelClassHelpers.defineProperty(s, "STSZ", s.box(s.types.stsz, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])));
  babelClassHelpers.defineProperty(s, "STCO", s.box(s.types.stco, s.StblTable));
  var debugLoggerClass = require("debug-logger-class") /*id: 118426*/;
  var c = function () {
    function e(t, n, i) {
      babelClassHelpers.classCallCheck(this, e);
      this.videoTrack = t;
      this.audioTrack = n;
      var o = /Chrome\/([^.]+)/.exec(navigator.userAgent);
      this.forceFirstIDR = o && Number(o[1]) < 50;
      this.log = new debugLoggerClass.Logger("FMP4Remuxer", !i || !i.openLog || !i.openLog);
    }
    babelClassHelpers.createClass(e, [{
      key: "remux",
      value: function () {
        var e;
        var t;
        var n;
        var r;
        var i;
        var o = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var u = this.videoTrack;
        var c = this.audioTrack;
        var l = u.exist();
        var f = c.exist();
        var d = [];
        if (o) {
          if (a && a.initMerge) {
            if (l) {
              d.push(this.videoTrack);
            }
            if (f) {
              d.push(this.audioTrack);
            }
            n = s.initSegment(d);
          } else {
            if (l) {
              e = s.initSegment([this.videoTrack]);
            }
            if (f) {
              t = s.initSegment([this.audioTrack]);
            }
          }
        }
        if (l && u.hasSample()) {
          r = this._remuxVideo();
        }
        if (f && c.hasSample()) {
          i = this._remuxAudio();
        }
        u.samples = [];
        c.samples = [];
        return {
          initSegment: n,
          videoInitSegment: e,
          audioInitSegment: t,
          videoSegment: r,
          audioSegment: i
        };
      }
    }, {
      key: "_remuxVideo",
      value: function () {
        var e = this.videoTrack;
        if (this.forceFirstIDR) {
          e.samples[0].flag = {
            dependsOn: 2,
            isNonSyncSample: 0
          };
        }
        var t = e.samples;
        var n = 0;
        t.forEach(function (e) {
          n += e.units.reduce(function (e, t) {
            return e + t.byteLength;
          }, 0);
          n += e.units.length * 4;
        });
        var r;
        var i = new Uint8Array(n);
        var a = new DataView(i.buffer);
        function u(e, n) {
          n = t[c];
          var o = 0;
          n.units.forEach(function (t) {
            a.setUint32(e, t.byteLength);
            e += 4;
            i.set(t, e);
            e += t.byteLength;
            o += 4 + t.byteLength;
          });
          n.size = o;
          f = e;
          r = n;
        }
        var c = 0;
        var l = t.length;
        var f = 0;
        for (; c < l; c++) {
          u(f, r);
        }
        var d = s.mdat(i);
        var h = s.moof([e]);
        return binaryBufferUtils.concatBuffers(h, d);
      }
    }, {
      key: "_remuxAudio",
      value: function () {
        var e = this.audioTrack;
        var t = new Uint8Array(e.samples.reduce(function (e, t) {
          return e + t.size;
        }, 0));
        e.samples.reduce(function (e, n) {
          t.set(n.data, e);
          return e + n.size;
        }, 0);
        var n = s.mdat(t);
        var r = s.moof([e]);
        return binaryBufferUtils.concatBuffers(r, n);
      }
    }, {
      key: "reset",
      value: function () {
        this.videoTrack.reset();
        this.audioTrack.reset();
      }
    }]);
    return e;
  }();
  require.d(exports, {
    Fmp4Remuxer: function () {
      return c;
    }
  });
}