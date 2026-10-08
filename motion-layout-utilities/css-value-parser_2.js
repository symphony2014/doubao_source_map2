// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'parseStyleValues'
// - Renamed export 'P' to 'cssValueHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 584871
         */
module.exports = function (module, exports, require) {
  var colorParserAndTransformer = require("color-parser-and-transformer") /*id: 719203*/;
  let r = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  var numberRegexPattern = require("number-regex-pattern") /*id: 910589*/;
  var numberPrecisionRound = require("number-precision-round") /*id: 847616*/;
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
      if (colorParserAndTransformer.colorParser.test(t)) {
        r.color.push(o);
        s.push(l);
        i.push(colorParserAndTransformer.colorParser.parse(t));
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
  function c(t) {
    return h(t).values;
  }
  function d(t) {
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
            s += numberPrecisionRound.round5Decimals(t[u]);
          } else if (e === l) {
            s += colorParserAndTransformer.colorParser.transform(t[u]);
          } else {
            s += t[u];
          }
        }
      }
      return s;
    };
  }
  let p = t => typeof t == "number" ? 0 : colorParserAndTransformer.colorParser.test(t) ? colorParserAndTransformer.colorParser.getAnimatableNone(t) : t;
  let f = {
    test: function (t) {
      return isNaN(t) && typeof t == "string" && (t.match(numberRegexPattern.numberRegex)?.length || 0) + (t.match(r)?.length || 0) > 0;
    },
    parse: c,
    createTransformer: d,
    getAnimatableNone: function (t) {
      let e = c(t);
      return d(t)(e.map(p));
    }
  };
  require.d(exports, {
    parseStyleValues: function () {
      return h;
    },
    cssValueHandler: function () {
      return f;
    }
  });
}