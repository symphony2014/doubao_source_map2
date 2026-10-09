// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 811071
         */
module.exports = function (module, exports, require) {
  var t;
  var a;
  a = function () {
    function e(e) {
      this.mode = i.MODE_8BIT_BYTE;
      this.data = e;
      this.parsedData = [];
      var t = 0;
      var a = this.data.length;
      for (; t < a; t++) {
        var r = [];
        var n = this.data.charCodeAt(t);
        if (n > 65536) {
          r[0] = (n & 1835008) >>> 18 | 240;
          r[1] = (n & 258048) >>> 12 | 128;
          r[2] = (n & 4032) >>> 6 | 128;
          r[3] = n & 63 | 128;
        } else if (n > 2048) {
          r[0] = (n & 61440) >>> 12 | 224;
          r[1] = (n & 4032) >>> 6 | 128;
          r[2] = n & 63 | 128;
        } else if (n > 128) {
          r[0] = (n & 1984) >>> 6 | 192;
          r[1] = n & 63 | 128;
        } else {
          r[0] = n;
        }
        this.parsedData.push(r);
      }
      this.parsedData = Array.prototype.concat.apply([], this.parsedData);
      if (this.parsedData.length != this.data.length) {
        this.parsedData.unshift(191);
        this.parsedData.unshift(187);
        this.parsedData.unshift(239);
      }
    }
    function a(e, t) {
      this.typeNumber = e;
      this.errorCorrectLevel = t;
      this.modules = null;
      this.moduleCount = 0;
      this.dataCache = null;
      this.dataList = [];
    }
    e.prototype = {
      getLength: function (e) {
        return this.parsedData.length;
      },
      write: function (e) {
        var t = 0;
        var a = this.parsedData.length;
        for (; t < a; t++) {
          e.put(this.parsedData[t], 8);
        }
      }
    };
    a.prototype = {
      addData: function (t) {
        var a = new e(t);
        this.dataList.push(a);
        this.dataCache = null;
      },
      isDark: function (e, t) {
        if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) {
          throw Error(e + "," + t);
        }
        return this.modules[e][t];
      },
      getModuleCount: function () {
        return this.moduleCount;
      },
      make: function () {
        this.makeImpl(false, this.getBestMaskPattern());
      },
      makeImpl: function (e, t) {
        this.moduleCount = this.typeNumber * 4 + 17;
        this.modules = Array(this.moduleCount);
        for (var r = 0; r < this.moduleCount; r++) {
          this.modules[r] = Array(this.moduleCount);
          for (var n = 0; n < this.moduleCount; n++) {
            this.modules[r][n] = null;
          }
        }
        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this.moduleCount - 7, 0);
        this.setupPositionProbePattern(0, this.moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(e, t);
        if (this.typeNumber >= 7) {
          this.setupTypeNumber(e);
        }
        if (this.dataCache == null) {
          this.dataCache = a.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
        }
        this.mapData(this.dataCache, t);
      },
      setupPositionProbePattern: function (e, t) {
        for (var a = -1; a <= 7; a++) {
          if (!(e + a <= -1) && !(this.moduleCount <= e + a)) {
            for (var r = -1; r <= 7; r++) {
              if (!(t + r <= -1) && !(this.moduleCount <= t + r)) {
                if (a >= 0 && a <= 6 && (r == 0 || r == 6) || r >= 0 && r <= 6 && (a == 0 || a == 6) || a >= 2 && a <= 4 && r >= 2 && r <= 4) {
                  this.modules[e + a][t + r] = true;
                } else {
                  this.modules[e + a][t + r] = false;
                }
              }
            }
          }
        }
      },
      getBestMaskPattern: function () {
        var e = 0;
        var t = 0;
        var a = 0;
        for (; a < 8; a++) {
          this.makeImpl(true, a);
          var r = l.getLostPoint(this);
          if (a == 0 || e > r) {
            e = r;
            t = a;
          }
        }
        return t;
      },
      createMovieClip: function (e, t, a) {
        var r = e.createEmptyMovieClip(t, a);
        this.make();
        for (var n = 0; n < this.modules.length; n++) {
          var i = +n;
          var s = 0;
          for (; s < this.modules[n].length; s++) {
            var o = +s;
            if (this.modules[n][s]) {
              r.beginFill(0, 100);
              r.moveTo(o, i);
              r.lineTo(o + 1, i);
              r.lineTo(o + 1, i + 1);
              r.lineTo(o, i + 1);
              r.endFill();
            }
          }
        }
        return r;
      },
      setupTimingPattern: function () {
        for (var e = 8; e < this.moduleCount - 8; e++) {
          if (this.modules[e][6] == null) {
            this.modules[e][6] = e % 2 == 0;
          }
        }
        for (var t = 8; t < this.moduleCount - 8; t++) {
          if (this.modules[6][t] == null) {
            this.modules[6][t] = t % 2 == 0;
          }
        }
      },
      setupPositionAdjustPattern: function () {
        var e = l.getPatternPosition(this.typeNumber);
        var t = 0;
        for (; t < e.length; t++) {
          for (var a = 0; a < e.length; a++) {
            var r = e[t];
            var n = e[a];
            if (this.modules[r][n] == null) {
              for (var i = -2; i <= 2; i++) {
                for (var s = -2; s <= 2; s++) {
                  if (i == -2 || i == 2 || s == -2 || s == 2 || i == 0 && s == 0) {
                    this.modules[r + i][n + s] = true;
                  } else {
                    this.modules[r + i][n + s] = false;
                  }
                }
              }
            }
          }
        }
      },
      setupTypeNumber: function (e) {
        var t = l.getBCHTypeNumber(this.typeNumber);
        var a = 0;
        for (; a < 18; a++) {
          var r = !e && (t >> a & 1) == 1;
          this.modules[Math.floor(a / 3)][a % 3 + this.moduleCount - 8 - 3] = r;
        }
        for (var a = 0; a < 18; a++) {
          var r = !e && (t >> a & 1) == 1;
          this.modules[a % 3 + this.moduleCount - 8 - 3][Math.floor(a / 3)] = r;
        }
      },
      setupTypeInfo: function (e, t) {
        var a = this.errorCorrectLevel << 3 | t;
        var r = l.getBCHTypeInfo(a);
        var n = 0;
        for (; n < 15; n++) {
          var i = !e && (r >> n & 1) == 1;
          if (n < 6) {
            this.modules[n][8] = i;
          } else if (n < 8) {
            this.modules[n + 1][8] = i;
          } else {
            this.modules[this.moduleCount - 15 + n][8] = i;
          }
        }
        for (var n = 0; n < 15; n++) {
          var i = !e && (r >> n & 1) == 1;
          if (n < 8) {
            this.modules[8][this.moduleCount - n - 1] = i;
          } else if (n < 9) {
            this.modules[8][15 - n - 1 + 1] = i;
          } else {
            this.modules[8][15 - n - 1] = i;
          }
        }
        this.modules[this.moduleCount - 8][8] = !e;
      },
      mapData: function (e, t) {
        var a = -1;
        var r = this.moduleCount - 1;
        var n = 7;
        var i = 0;
        var s = this.moduleCount - 1;
        for (; s > 0; s -= 2) {
          for (s == 6 && s--;;) {
            for (var o = 0; o < 2; o++) {
              if (this.modules[r][s - o] == null) {
                var d = false;
                if (i < e.length) {
                  d = (e[i] >>> n & 1) == 1;
                }
                if (l.getMask(t, r, s - o)) {
                  d = !d;
                }
                this.modules[r][s - o] = d;
                if (--n == -1) {
                  i++;
                  n = 7;
                }
              }
            }
            if ((r += a) < 0 || this.moduleCount <= r) {
              r -= a;
              a = -a;
              break;
            }
          }
        }
      }
    };
    a.PAD0 = 236;
    a.PAD1 = 17;
    a.createData = function (e, t, r) {
      var n = h.getRSBlocks(e, t);
      var i = new p();
      var s = 0;
      for (; s < r.length; s++) {
        var o = r[s];
        i.put(o.mode, 4);
        i.put(o.getLength(), l.getLengthInBits(o.mode, e));
        o.write(i);
      }
      var d = 0;
      var s = 0;
      for (; s < n.length; s++) {
        d += n[s].dataCount;
      }
      if (i.getLengthInBits() > d * 8) {
        throw Error("code length overflow. (" + i.getLengthInBits() + ">" + d * 8 + ")");
      }
      for (i.getLengthInBits() + 4 <= d * 8 && i.put(0, 4); i.getLengthInBits() % 8 != 0;) {
        i.putBit(false);
      }
      while (!(i.getLengthInBits() >= d * 8) && (i.put(a.PAD0, 8), !(i.getLengthInBits() >= d * 8))) {
        i.put(a.PAD1, 8);
      }
      return a.createBytes(i, n);
    };
    a.createBytes = function (e, t) {
      var a = 0;
      var r = 0;
      var n = 0;
      var i = Array(t.length);
      var s = Array(t.length);
      var o = 0;
      for (; o < t.length; o++) {
        var d = t[o].dataCount;
        var c = t[o].totalCount - d;
        r = Math.max(r, d);
        n = Math.max(n, c);
        i[o] = Array(d);
        for (var h = 0; h < i[o].length; h++) {
          i[o][h] = e.buffer[h + a] & 255;
        }
        a += d;
        var p = l.getErrorCorrectPolynomial(c);
        var f = new u(i[o], p.getLength() - 1).mod(p);
        s[o] = Array(p.getLength() - 1);
        for (var h = 0; h < s[o].length; h++) {
          var g = h + f.getLength() - s[o].length;
          s[o][h] = g >= 0 ? f.get(g) : 0;
        }
      }
      var m = 0;
      var h = 0;
      for (; h < t.length; h++) {
        m += t[h].totalCount;
      }
      var x = Array(m);
      var v = 0;
      var h = 0;
      for (; h < r; h++) {
        for (var o = 0; o < t.length; o++) {
          if (h < i[o].length) {
            x[v++] = i[o][h];
          }
        }
      }
      for (var h = 0; h < n; h++) {
        for (var o = 0; o < t.length; o++) {
          if (h < s[o].length) {
            x[v++] = s[o][h];
          }
        }
      }
      return x;
    };
    var r;
    var n;
    var i = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8
    };
    var s = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    };
    var o = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var l = {
      PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
      G15: 1335,
      G18: 7973,
      G15_MASK: 21522,
      getBCHTypeInfo: function (e) {
        for (var t = e << 10; l.getBCHDigit(t) - l.getBCHDigit(l.G15) >= 0;) {
          t ^= l.G15 << l.getBCHDigit(t) - l.getBCHDigit(l.G15);
        }
        return (e << 10 | t) ^ l.G15_MASK;
      },
      getBCHTypeNumber: function (e) {
        for (var t = e << 12; l.getBCHDigit(t) - l.getBCHDigit(l.G18) >= 0;) {
          t ^= l.G18 << l.getBCHDigit(t) - l.getBCHDigit(l.G18);
        }
        return e << 12 | t;
      },
      getBCHDigit: function (e) {
        var t = 0;
        for (; e != 0;) {
          t++;
          e >>>= 1;
        }
        return t;
      },
      getPatternPosition: function (e) {
        return l.PATTERN_POSITION_TABLE[e - 1];
      },
      getMask: function (e, t, a) {
        switch (e) {
          case o.PATTERN000:
            return (t + a) % 2 == 0;
          case o.PATTERN001:
            return t % 2 == 0;
          case o.PATTERN010:
            return a % 3 == 0;
          case o.PATTERN011:
            return (t + a) % 3 == 0;
          case o.PATTERN100:
            return (Math.floor(t / 2) + Math.floor(a / 3)) % 2 == 0;
          case o.PATTERN101:
            return t * a % 2 + t * a % 3 == 0;
          case o.PATTERN110:
            return (t * a % 2 + t * a % 3) % 2 == 0;
          case o.PATTERN111:
            return (t * a % 3 + (t + a) % 2) % 2 == 0;
          default:
            throw Error("bad maskPattern:" + e);
        }
      },
      getErrorCorrectPolynomial: function (e) {
        var t = new u([1], 0);
        var a = 0;
        for (; a < e; a++) {
          t = t.multiply(new u([1, d.gexp(a)], 0));
        }
        return t;
      },
      getLengthInBits: function (e, t) {
        if (t >= 1 && t < 10) {
          switch (e) {
            case i.MODE_NUMBER:
              return 10;
            case i.MODE_ALPHA_NUM:
              return 9;
            case i.MODE_8BIT_BYTE:
            case i.MODE_KANJI:
              return 8;
            default:
              throw Error("mode:" + e);
          }
        } else if (t < 27) {
          switch (e) {
            case i.MODE_NUMBER:
              return 12;
            case i.MODE_ALPHA_NUM:
              return 11;
            case i.MODE_8BIT_BYTE:
              return 16;
            case i.MODE_KANJI:
              return 10;
            default:
              throw Error("mode:" + e);
          }
        } else if (t < 41) {
          switch (e) {
            case i.MODE_NUMBER:
              return 14;
            case i.MODE_ALPHA_NUM:
              return 13;
            case i.MODE_8BIT_BYTE:
              return 16;
            case i.MODE_KANJI:
              return 12;
            default:
              throw Error("mode:" + e);
          }
        } else {
          throw Error("type:" + t);
        }
      },
      getLostPoint: function (e) {
        var t = e.getModuleCount();
        var a = 0;
        var r = 0;
        for (; r < t; r++) {
          for (var n = 0; n < t; n++) {
            var i = 0;
            var s = e.isDark(r, n);
            var o = -1;
            for (; o <= 1; o++) {
              if (!(r + o < 0) && !(t <= r + o)) {
                for (var l = -1; l <= 1; l++) {
                  if (!(n + l < 0) && !(t <= n + l) && (o != 0 || l != 0) && s == e.isDark(r + o, n + l)) {
                    i++;
                  }
                }
              }
            }
            if (i > 5) {
              a += 3 + i - 5;
            }
          }
        }
        for (var r = 0; r < t - 1; r++) {
          for (var n = 0; n < t - 1; n++) {
            var d = 0;
            if (e.isDark(r, n)) {
              d++;
            }
            if (e.isDark(r + 1, n)) {
              d++;
            }
            if (e.isDark(r, n + 1)) {
              d++;
            }
            if (e.isDark(r + 1, n + 1)) {
              d++;
            }
            if (d == 0 || d == 4) {
              a += 3;
            }
          }
        }
        for (var r = 0; r < t; r++) {
          for (var n = 0; n < t - 6; n++) {
            if (e.isDark(r, n) && !e.isDark(r, n + 1) && e.isDark(r, n + 2) && e.isDark(r, n + 3) && e.isDark(r, n + 4) && !e.isDark(r, n + 5) && e.isDark(r, n + 6)) {
              a += 40;
            }
          }
        }
        for (var n = 0; n < t; n++) {
          for (var r = 0; r < t - 6; r++) {
            if (e.isDark(r, n) && !e.isDark(r + 1, n) && e.isDark(r + 2, n) && e.isDark(r + 3, n) && e.isDark(r + 4, n) && !e.isDark(r + 5, n) && e.isDark(r + 6, n)) {
              a += 40;
            }
          }
        }
        var c = 0;
        var n = 0;
        for (; n < t; n++) {
          for (var r = 0; r < t; r++) {
            if (e.isDark(r, n)) {
              c++;
            }
          }
        }
        return a + Math.abs(c * 100 / t / t - 50) / 5 * 10;
      }
    };
    var d = {
      glog: function (e) {
        if (e < 1) {
          throw Error("glog(" + e + ")");
        }
        return d.LOG_TABLE[e];
      },
      gexp: function (e) {
        while (e < 0) {
          e += 255;
        }
        while (e >= 256) {
          e -= 255;
        }
        return d.EXP_TABLE[e];
      },
      EXP_TABLE: Array(256),
      LOG_TABLE: Array(256)
    };
    var c = 0;
    for (; c < 8; c++) {
      d.EXP_TABLE[c] = 1 << c;
    }
    for (var c = 8; c < 256; c++) {
      d.EXP_TABLE[c] = d.EXP_TABLE[c - 4] ^ d.EXP_TABLE[c - 5] ^ d.EXP_TABLE[c - 6] ^ d.EXP_TABLE[c - 8];
    }
    for (var c = 0; c < 255; c++) {
      d.LOG_TABLE[d.EXP_TABLE[c]] = c;
    }
    function u(e, t) {
      if (e.length == undefined) {
        throw Error(e.length + "/" + t);
      }
      for (var a = 0; a < e.length && e[a] == 0;) {
        a++;
      }
      this.num = Array(e.length - a + t);
      for (var r = 0; r < e.length - a; r++) {
        this.num[r] = e[r + a];
      }
    }
    function h(e, t) {
      this.totalCount = e;
      this.dataCount = t;
    }
    function p() {
      this.buffer = [];
      this.length = 0;
    }
    u.prototype = {
      get: function (e) {
        return this.num[e];
      },
      getLength: function () {
        return this.num.length;
      },
      multiply: function (e) {
        var t = Array(this.getLength() + e.getLength() - 1);
        var a = 0;
        for (; a < this.getLength(); a++) {
          for (var r = 0; r < e.getLength(); r++) {
            t[a + r] ^= d.gexp(d.glog(this.get(a)) + d.glog(e.get(r)));
          }
        }
        return new u(t, 0);
      },
      mod: function (e) {
        if (this.getLength() - e.getLength() < 0) {
          return this;
        }
        var t = d.glog(this.get(0)) - d.glog(e.get(0));
        var a = Array(this.getLength());
        var r = 0;
        for (; r < this.getLength(); r++) {
          a[r] = this.get(r);
        }
        for (var r = 0; r < e.getLength(); r++) {
          a[r] ^= d.gexp(d.glog(e.get(r)) + t);
        }
        return new u(a, 0).mod(e);
      }
    };
    h.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
    h.getRSBlocks = function (e, t) {
      var a = h.getRsBlockTable(e, t);
      if (a == undefined) {
        throw Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
      }
      var r = a.length / 3;
      var n = [];
      var i = 0;
      for (; i < r; i++) {
        var s = a[i * 3 + 0];
        var o = a[i * 3 + 1];
        var l = a[i * 3 + 2];
        var d = 0;
        for (; d < s; d++) {
          n.push(new h(o, l));
        }
      }
      return n;
    };
    h.getRsBlockTable = function (e, t) {
      switch (t) {
        case s.L:
          return h.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
        case s.M:
          return h.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
        case s.Q:
          return h.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
        case s.H:
          return h.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
        default:
          return;
      }
    };
    p.prototype = {
      get: function (e) {
        var t = Math.floor(e / 8);
        return (this.buffer[t] >>> 7 - e % 8 & 1) == 1;
      },
      put: function (e, t) {
        for (var a = 0; a < t; a++) {
          this.putBit((e >>> t - a - 1 & 1) == 1);
        }
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (e) {
        var t = Math.floor(this.length / 8);
        if (this.buffer.length <= t) {
          this.buffer.push(0);
        }
        if (e) {
          this.buffer[t] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    var f = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
    function g() {
      var e = false;
      var t = navigator.userAgent;
      if (/android/i.test(t)) {
        e = true;
        var a = t.toString().match(/android ([0-9]\.[0-9])/i);
        if (a && a[1]) {
          e = parseFloat(a[1]);
        }
      }
      return e;
    }
    (r = function (e, t) {
      this._el = e;
      this._htOption = t;
    }).prototype.draw = function (e) {
      var t = this._htOption;
      var a = this._el;
      var r = e.getModuleCount();
      function n(e, t) {
        var a = document.createElementNS("http://www.w3.org/2000/svg", e);
        for (var r in t) {
          if (t.hasOwnProperty(r)) {
            a.setAttribute(r, t[r]);
          }
        }
        return a;
      }
      t.width;
      t.height;
      this.clear();
      var i = n("svg", {
        viewBox: "0 0 " + String(r) + " " + String(r),
        width: "100%",
        height: "100%",
        fill: t.colorLight
      });
      i.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
      a.appendChild(i);
      i.appendChild(n("rect", {
        fill: t.colorLight,
        width: "100%",
        height: "100%"
      }));
      i.appendChild(n("rect", {
        fill: t.colorDark,
        width: "1",
        height: "1",
        id: "template"
      }));
      for (var s = 0; s < r; s++) {
        for (var o = 0; o < r; o++) {
          if (e.isDark(s, o)) {
            var l = n("use", {
              x: String(o),
              y: String(s)
            });
            l.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template");
            i.appendChild(l);
          }
        }
      }
    };
    r.prototype.clear = function () {
      while (this._el.hasChildNodes()) {
        this._el.removeChild(this._el.lastChild);
      }
    };
    var m = r;
    var x = document.documentElement.tagName.toLowerCase() === "svg" ? m : typeof CanvasRenderingContext2D != "undefined" ? function () {
      function e() {
        this._elImage.src = this._elCanvas.toDataURL("image/png");
        this._elImage.style.display = "block";
        this._elCanvas.style.display = "none";
      }
      if (this._android && this._android <= 2.1) {
        var t = 1 / window.devicePixelRatio;
        var a = CanvasRenderingContext2D.prototype.drawImage;
        CanvasRenderingContext2D.prototype.drawImage = function (e, r, n, i, s, o, l, d, c) {
          if ("nodeName" in e && /img/i.test(e.nodeName)) {
            for (var u = arguments.length - 1; u >= 1; u--) {
              arguments[u] = arguments[u] * t;
            }
          } else if (d === undefined) {
            arguments[1] *= t;
            arguments[2] *= t;
            arguments[3] *= t;
            arguments[4] *= t;
          }
          a.apply(this, arguments);
        };
      }
      function r(e, t) {
        var a = this;
        a._fFail = t;
        a._fSuccess = e;
        if (a._bSupportDataURI === null) {
          var r = document.createElement("img");
          function n() {
            a._bSupportDataURI = false;
            if (a._fFail) {
              a._fFail.call(a);
            }
          }
          r.onabort = n;
          r.onerror = n;
          r.onload = function () {
            a._bSupportDataURI = true;
            if (a._fSuccess) {
              a._fSuccess.call(a);
            }
          };
          r.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
          return;
        }
        if (a._bSupportDataURI === true && a._fSuccess) {
          a._fSuccess.call(a);
        } else if (a._bSupportDataURI === false && a._fFail) {
          a._fFail.call(a);
        }
      }
      function n(e, t) {
        this._bIsPainted = false;
        this._android = g();
        this._htOption = t;
        this._elCanvas = document.createElement("canvas");
        this._elCanvas.width = t.width;
        this._elCanvas.height = t.height;
        e.appendChild(this._elCanvas);
        this._el = e;
        this._oContext = this._elCanvas.getContext("2d");
        this._bIsPainted = false;
        this._elImage = document.createElement("img");
        this._elImage.alt = "Scan me!";
        this._elImage.style.display = "none";
        this._el.appendChild(this._elImage);
        this._bSupportDataURI = null;
      }
      n.prototype.draw = function (e) {
        var t = this._elImage;
        var a = this._oContext;
        var r = this._htOption;
        var n = e.getModuleCount();
        var i = r.width / n;
        var s = r.height / n;
        var o = Math.round(i);
        var l = Math.round(s);
        t.style.display = "none";
        this.clear();
        for (var d = 0; d < n; d++) {
          for (var c = 0; c < n; c++) {
            var u = e.isDark(d, c);
            var h = c * i;
            var p = d * s;
            a.strokeStyle = u ? r.colorDark : r.colorLight;
            a.lineWidth = 1;
            a.fillStyle = u ? r.colorDark : r.colorLight;
            a.fillRect(h, p, i, s);
            a.strokeRect(Math.floor(h) + 0.5, Math.floor(p) + 0.5, o, l);
            a.strokeRect(Math.ceil(h) - 0.5, Math.ceil(p) - 0.5, o, l);
          }
        }
        this._bIsPainted = true;
      };
      n.prototype.makeImage = function () {
        if (this._bIsPainted) {
          r.call(this, e);
        }
      };
      n.prototype.isPainted = function () {
        return this._bIsPainted;
      };
      n.prototype.clear = function () {
        this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
        this._bIsPainted = false;
      };
      n.prototype.round = function (e) {
        if (e) {
          return Math.floor(e * 1000) / 1000;
        } else {
          return e;
        }
      };
      return n;
    }() : ((n = function (e, t) {
      this._el = e;
      this._htOption = t;
    }).prototype.draw = function (e) {
      var t = this._htOption;
      var a = this._el;
      var r = e.getModuleCount();
      var n = Math.floor(t.width / r);
      var i = Math.floor(t.height / r);
      var s = ["<table style=\"border:0;border-collapse:collapse;\">"];
      var o = 0;
      for (; o < r; o++) {
        s.push("<tr>");
        for (var l = 0; l < r; l++) {
          s.push("<td style=\"border:0;border-collapse:collapse;padding:0;margin:0;width:" + n + "px;height:" + i + "px;background-color:" + (e.isDark(o, l) ? t.colorDark : t.colorLight) + ";\"></td>");
        }
        s.push("</tr>");
      }
      s.push("</table>");
      a.innerHTML = s.join("");
      var d = a.childNodes[0];
      var c = (t.width - d.offsetWidth) / 2;
      var u = (t.height - d.offsetHeight) / 2;
      if (c > 0 && u > 0) {
        d.style.margin = u + "px " + c + "px";
      }
    }, n.prototype.clear = function () {
      this._el.innerHTML = "";
    }, n);
    (t = function (e, t) {
      this._htOption = {
        width: 256,
        height: 256,
        typeNumber: 4,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: s.H
      };
      if (typeof t == "string") {
        t = {
          text: t
        };
      }
      if (t) {
        for (var a in t) {
          this._htOption[a] = t[a];
        }
      }
      if (typeof e == "string") {
        e = document.getElementById(e);
      }
      if (this._htOption.useSVG) {
        x = m;
      }
      this._android = g();
      this._el = e;
      this._oQRCode = null;
      this._oDrawing = new x(this._el, this._htOption);
      if (this._htOption.text) {
        this.makeCode(this._htOption.text);
      }
    }).prototype.makeCode = function (e) {
      this._oQRCode = new a(function (e, t) {
        var a;
        var r;
        var n = 1;
        var i = (r = encodeURI(a = e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a")).length + (r.length != a) * 3;
        var o = 0;
        var l = f.length;
        for (; o <= l; o++) {
          var d = 0;
          switch (t) {
            case s.L:
              d = f[o][0];
              break;
            case s.M:
              d = f[o][1];
              break;
            case s.Q:
              d = f[o][2];
              break;
            case s.H:
              d = f[o][3];
          }
          if (i <= d) {
            break;
          }
          n++;
        }
        if (n > f.length) {
          throw Error("Too long data");
        }
        return n;
      }(e, this._htOption.correctLevel), this._htOption.correctLevel);
      this._oQRCode.addData(e);
      this._oQRCode.make();
      this._el.title = e;
      this._oDrawing.draw(this._oQRCode);
      this.makeImage();
    };
    t.prototype.makeImage = function () {
      if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {
        this._oDrawing.makeImage();
      }
    };
    t.prototype.clear = function () {
      this._oDrawing.clear();
    };
    t.CorrectLevel = s;
    return t;
  };
  module.exports = a();
}