// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'parseCssValues'
// - Renamed export 'P' to 'cssValueTransformer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 208273
         */
module.exports = function (module, exports, require) {
  var colorValidationUtils_1 = require("color-validation-utils_1") /*id: 485358*/;
  let r = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  var numberPatternRegex = require("number-pattern-regex") /*id: 937066*/;
  var numberRoundPrecision = require("number-round-precision") /*id: 379285*/;
  let a = "number";
  let l = "color";
  let u = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function h(t) {
    let e = t.toString();
    let i = [];
    let r = {
      color: [],
      number: [],
      var: []
    };
    let s = [];
    let o = 0;
    let h = e.replace(u, t => {
      if (colorValidationUtils_1.colorValidator.test(t)) {
        r.color.push(o);
        s.push(l);
        i.push(colorValidationUtils_1.colorValidator.parse(t));
      } else if (t.startsWith("var(")) {
        r.var.push(o);
        s.push("var");
        i.push(t);
      } else {
        r.number.push(o);
        s.push(a);
        i.push(parseFloat(t));
      }
      ++o;
      return "${}";
    }).split("${}");
    return {
      values: i,
      split: h,
      indexes: r,
      types: s
    };
  }
  function d(t) {
    return h(t).values;
  }
  function c(t) {
    let {
      split: e,
      types: i
    } = h(t);
    let r = e.length;
    return t => {
      let s = "";
      for (let u = 0; u < r; u++) {
        s += e[u];
        if (t[u] !== undefined) {
          let e = i[u];
          if (e === a) {
            s += numberRoundPrecision.roundPrecision(t[u]);
          } else if (e === l) {
            s += colorValidationUtils_1.colorValidator.transform(t[u]);
          } else {
            s += t[u];
          }
        }
      }
      return s;
    };
  }
  let p = t => typeof t == "number" ? 0 : colorValidationUtils_1.colorValidator.test(t) ? colorValidationUtils_1.colorValidator.getAnimatableNone(t) : t;
  let m = {
    test: function (t) {
      return isNaN(t) && typeof t == "string" && (t.match(numberPatternRegex.numberPattern)?.length || 0) + (t.match(r)?.length || 0) > 0;
    },
    parse: d,
    createTransformer: c,
    getAnimatableNone: function (t) {
      let e = d(t);
      return c(t)(e.map(p));
    }
  };
  require.d(exports, {
    parseCssValues: function () {
      return h;
    },
    cssValueTransformer: function () {
      return m;
    }
  });
}