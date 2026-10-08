// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'horizontalDir'
// - Renamed export 'V' to 'verticalDir'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 385303
         */
module.exports = function (module, exports, require) {
  var r = this && this.__assign || function () {
    return (r = Object.assign || function (t) {
      var e;
      var Q = 1;
      var r = arguments.length;
      for (; Q < r; Q++) {
        for (var T in e = arguments[Q]) {
          if (Object.prototype.hasOwnProperty.call(e, T)) {
            t[T] = e[T];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  };
  var T = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  var n = this && this.__spreadArray || function (t, e, Q) {
    if (Q || arguments.length == 2) {
      var r;
      var T = 0;
      var n = e.length;
      for (; T < n; T++) {
        if (!!r || !(T in e)) {
          r ||= Array.prototype.slice.call(e, 0, T);
          r[T] = e[T];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  };
  var o = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  exports.FontData = exports.NOSTRETCH = exports.horizontalDir = exports.verticalDir = undefined;
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  exports.verticalDir = 1;
  exports.horizontalDir = 2;
  exports.NOSTRETCH = {
    dir: 0
  };
  var a = function () {
    function t(t = null) {
      this.variant = {};
      this.delimiters = {};
      this.cssFontMap = {};
      this.remapChars = {};
      this.skewIcFactor = 0.75;
      var e;
      var Q;
      var a;
      var u;
      var s = this.constructor;
      this.options = optionsMergeUtils.userOptions(optionsMergeUtils.defaultOptions({}, s.OPTIONS), t);
      this.params = r({}, s.defaultParams);
      this.sizeVariants = n([], T(s.defaultSizeVariants), false);
      this.stretchVariants = n([], T(s.defaultStretchVariants), false);
      this.cssFontMap = r({}, s.defaultCssFonts);
      try {
        var l = o(Object.keys(this.cssFontMap));
        var c = l.next();
        for (; !c.done; c = l.next()) {
          var p = c.value;
          if (this.cssFontMap[p][0] === "unknown") {
            this.cssFontMap[p][0] = this.options.unknownFamily;
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (c && !c.done && (Q = l.return)) {
            Q.call(l);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      this.cssFamilyPrefix = s.defaultCssFamilyPrefix;
      this.createVariants(s.defaultVariants);
      this.defineDelimiters(s.defaultDelimiters);
      try {
        var h = o(Object.keys(s.defaultChars));
        var f = h.next();
        for (; !f.done; f = h.next()) {
          var d = f.value;
          this.defineChars(d, s.defaultChars[d]);
        }
      } catch (t) {
        a = {
          error: t
        };
      } finally {
        try {
          if (f && !f.done && (u = h.return)) {
            u.call(h);
          }
        } finally {
          if (a) {
            throw a.error;
          }
        }
      }
      this.defineRemap("accent", s.defaultAccentMap);
      this.defineRemap("mo", s.defaultMoMap);
      this.defineRemap("mn", s.defaultMnMap);
    }
    t.charOptions = function (t, e) {
      var Q = t[e];
      if (Q.length === 3) {
        Q[3] = {};
      }
      return Q[3];
    };
    Object.defineProperty(t.prototype, "styles", {
      get: function () {
        return this._styles;
      },
      set: function (t) {
        this._styles = t;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.createVariant = function (t, e = null, Q = null) {
      var r = {
        linked: [],
        chars: e ? Object.create(this.variant[e].chars) : {}
      };
      if (Q && this.variant[Q]) {
        Object.assign(r.chars, this.variant[Q].chars);
        this.variant[Q].linked.push(r.chars);
        r.chars = Object.create(r.chars);
      }
      this.remapSmpChars(r.chars, t);
      this.variant[t] = r;
    };
    t.prototype.remapSmpChars = function (t, e) {
      var Q;
      var r;
      var n;
      var i;
      var a = this.constructor;
      if (a.VariantSmp[e]) {
        var u = a.SmpRemap;
        var s = [null, null, a.SmpRemapGreekU, a.SmpRemapGreekL];
        try {
          var l = o(a.SmpRanges);
          var c = l.next();
          for (; !c.done; c = l.next()) {
            var p = T(c.value, 3);
            var h = p[0];
            var f = p[1];
            var d = p[2];
            var D = a.VariantSmp[e][h];
            if (D) {
              for (var L = f; L <= d; L++) {
                if (L !== 930) {
                  var m = D + L - f;
                  t[L] = this.smpChar(u[m] || m);
                }
              }
              if (s[h]) {
                try {
                  n = undefined;
                  var y = o(Object.keys(s[h]).map(function (t) {
                    return parseInt(t);
                  }));
                  var H = y.next();
                  for (; !H.done; H = y.next()) {
                    var L = H.value;
                    t[L] = this.smpChar(D + s[h][L]);
                  }
                } catch (t) {
                  n = {
                    error: t
                  };
                } finally {
                  try {
                    if (H && !H.done && (i = y.return)) {
                      i.call(y);
                    }
                  } finally {
                    if (n) {
                      throw n.error;
                    }
                  }
                }
              }
            }
          }
        } catch (t) {
          Q = {
            error: t
          };
        } finally {
          try {
            if (c && !c.done && (r = l.return)) {
              r.call(l);
            }
          } finally {
            if (Q) {
              throw Q.error;
            }
          }
        }
      }
      if (e === "bold") {
        t[988] = this.smpChar(120778);
        t[989] = this.smpChar(120779);
      }
    };
    t.prototype.smpChar = function (t) {
      return [,,, {
        smp: t
      }];
    };
    t.prototype.createVariants = function (t) {
      var e;
      var Q;
      try {
        var r = o(t);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          var n = T.value;
          this.createVariant(n[0], n[1], n[2]);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (T && !T.done && (Q = r.return)) {
            Q.call(r);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    t.prototype.defineChars = function (t, e) {
      var Q;
      var r;
      var T = this.variant[t];
      Object.assign(T.chars, e);
      try {
        var n = o(T.linked);
        var i = n.next();
        for (; !i.done; i = n.next()) {
          var a = i.value;
          Object.assign(a, e);
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (r = n.return)) {
            r.call(n);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
    };
    t.prototype.defineDelimiters = function (t) {
      Object.assign(this.delimiters, t);
    };
    t.prototype.defineRemap = function (t, e) {
      if (!this.remapChars.hasOwnProperty(t)) {
        this.remapChars[t] = {};
      }
      Object.assign(this.remapChars[t], e);
    };
    t.prototype.getDelimiter = function (t) {
      return this.delimiters[t];
    };
    t.prototype.getSizeVariant = function (t, e) {
      if (this.delimiters[t].variants) {
        e = this.delimiters[t].variants[e];
      }
      return this.sizeVariants[e];
    };
    t.prototype.getStretchVariant = function (t, e) {
      return this.stretchVariants[this.delimiters[t].stretchv ? this.delimiters[t].stretchv[e] : 0];
    };
    t.prototype.getChar = function (t, e) {
      return this.variant[t].chars[e];
    };
    t.prototype.getVariant = function (t) {
      return this.variant[t];
    };
    t.prototype.getCssFont = function (t) {
      return this.cssFontMap[t] || ["serif", false, false];
    };
    t.prototype.getFamily = function (t) {
      if (this.cssFamilyPrefix) {
        return this.cssFamilyPrefix + ", " + t;
      } else {
        return t;
      }
    };
    t.prototype.getRemappedChar = function (t, e) {
      return (this.remapChars[t] || {})[e];
    };
    t.OPTIONS = {
      unknownFamily: "serif"
    };
    t.JAX = "common";
    t.NAME = "";
    t.defaultVariants = [["normal"], ["bold", "normal"], ["italic", "normal"], ["bold-italic", "italic", "bold"], ["double-struck", "bold"], ["fraktur", "normal"], ["bold-fraktur", "bold", "fraktur"], ["script", "italic"], ["bold-script", "bold-italic", "script"], ["sans-serif", "normal"], ["bold-sans-serif", "bold", "sans-serif"], ["sans-serif-italic", "italic", "sans-serif"], ["sans-serif-bold-italic", "bold-italic", "bold-sans-serif"], ["monospace", "normal"]];
    t.defaultCssFonts = {
      normal: ["unknown", false, false],
      bold: ["unknown", false, true],
      italic: ["unknown", true, false],
      "bold-italic": ["unknown", true, true],
      "double-struck": ["unknown", false, true],
      fraktur: ["unknown", false, false],
      "bold-fraktur": ["unknown", false, true],
      script: ["cursive", false, false],
      "bold-script": ["cursive", false, true],
      "sans-serif": ["sans-serif", false, false],
      "bold-sans-serif": ["sans-serif", false, true],
      "sans-serif-italic": ["sans-serif", true, false],
      "sans-serif-bold-italic": ["sans-serif", true, true],
      monospace: ["monospace", false, false]
    };
    t.defaultCssFamilyPrefix = "";
    t.VariantSmp = {
      bold: [119808, 119834, 120488, 120514, 120782],
      italic: [119860, 119886, 120546, 120572],
      "bold-italic": [119912, 119938, 120604, 120630],
      script: [119964, 119990],
      "bold-script": [120016, 120042],
      fraktur: [120068, 120094],
      "double-struck": [120120, 120146,,, 120792],
      "bold-fraktur": [120172, 120198],
      "sans-serif": [120224, 120250,,, 120802],
      "bold-sans-serif": [120276, 120302, 120662, 120688, 120812],
      "sans-serif-italic": [120328, 120354],
      "sans-serif-bold-italic": [120380, 120406, 120720, 120746],
      monospace: [120432, 120458,,, 120822]
    };
    t.SmpRanges = [[0, 65, 90], [1, 97, 122], [2, 913, 937], [3, 945, 969], [4, 48, 57]];
    t.SmpRemap = {
      119893: 8462,
      119965: 8492,
      119968: 8496,
      119969: 8497,
      119971: 8459,
      119972: 8464,
      119975: 8466,
      119976: 8499,
      119981: 8475,
      119994: 8495,
      119996: 8458,
      120004: 8500,
      120070: 8493,
      120075: 8460,
      120076: 8465,
      120085: 8476,
      120093: 8488,
      120122: 8450,
      120127: 8461,
      120133: 8469,
      120135: 8473,
      120136: 8474,
      120137: 8477,
      120145: 8484
    };
    t.SmpRemapGreekU = {
      8711: 25,
      1012: 17
    };
    t.SmpRemapGreekL = {
      977: 27,
      981: 29,
      982: 31,
      1008: 28,
      1009: 30,
      1013: 26,
      8706: 25
    };
    t.defaultAccentMap = {
      768: "ˋ",
      769: "ˊ",
      770: "ˆ",
      771: "˜",
      772: "ˉ",
      774: "˘",
      775: "˙",
      776: "¨",
      778: "˚",
      780: "ˇ",
      8594: "⃗",
      8242: "'",
      8243: "''",
      8244: "'''",
      8245: "`",
      8246: "``",
      8247: "```",
      8279: "''''",
      8400: "↼",
      8401: "⇀",
      8406: "←",
      8417: "↔",
      8432: "*",
      8411: "...",
      8412: "....",
      8428: "⇁",
      8429: "↽",
      8430: "←",
      8431: "→"
    };
    t.defaultMoMap = {
      45: "−"
    };
    t.defaultMnMap = {
      45: "−"
    };
    t.defaultParams = {
      x_height: 0.442,
      quad: 1,
      num1: 0.676,
      num2: 0.394,
      num3: 0.444,
      denom1: 0.686,
      denom2: 0.345,
      sup1: 0.413,
      sup2: 0.363,
      sup3: 0.289,
      sub1: 0.15,
      sub2: 0.247,
      sup_drop: 0.386,
      sub_drop: 0.05,
      delim1: 2.39,
      delim2: 1,
      axis_height: 0.25,
      rule_thickness: 0.06,
      big_op_spacing1: 0.111,
      big_op_spacing2: 0.167,
      big_op_spacing3: 0.2,
      big_op_spacing4: 0.6,
      big_op_spacing5: 0.1,
      surd_height: 0.075,
      scriptspace: 0.05,
      nulldelimiterspace: 0.12,
      delimiterfactor: 901,
      delimitershortfall: 0.3,
      min_rule_thickness: 1.25,
      separation_factor: 1.75,
      extra_ic: 0.033
    };
    t.defaultDelimiters = {};
    t.defaultChars = {};
    t.defaultSizeVariants = [];
    t.defaultStretchVariants = [];
    return t;
  }();
  exports.FontData = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}