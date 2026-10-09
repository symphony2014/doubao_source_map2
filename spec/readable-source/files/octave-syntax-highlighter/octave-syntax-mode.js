// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 88194.61fa28b3.js
         * chunkId: 88194
         * moduleId: 570138
         */
module.exports = function (module, exports, require) {
  function r(e) {
    return RegExp("^((" + e.join(")|(") + "))\\b");
  }
  var i = RegExp("^[\\+\\-\\*/&|\\^~<>!@'\\\\]");
  var a = RegExp("^[\\(\\[\\{\\},:=;\\.]");
  var o = RegExp("^((==)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))");
  var c = RegExp("^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))");
  var s = RegExp("^((>>=)|(<<=))");
  var m = RegExp("^[\\]\\)]");
  var u = RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*");
  var l = r(["error", "eval", "function", "abs", "acos", "atan", "asin", "cos", "cosh", "exp", "log", "prod", "sum", "log10", "max", "min", "sign", "sin", "sinh", "sqrt", "tan", "reshape", "break", "zeros", "default", "margin", "round", "ones", "rand", "syn", "ceil", "floor", "size", "clear", "zeros", "eye", "mean", "std", "cov", "det", "eig", "inv", "norm", "rank", "trace", "expm", "logm", "sqrtm", "linspace", "plot", "title", "xlabel", "ylabel", "legend", "text", "grid", "meshgrid", "mesh", "num2str", "fft", "ifft", "arrayfun", "cellfun", "input", "fliplr", "flipud", "ismember"]);
  var f = r(["return", "case", "switch", "else", "elseif", "end", "endif", "endfunction", "if", "otherwise", "do", "for", "while", "try", "catch", "classdef", "properties", "events", "methods", "global", "persistent", "endfor", "endwhile", "printf", "sprintf", "disp", "until", "continue", "pkg"]);
  function p(e, n) {
    if (e.sol() || e.peek() !== "'") {
      n.tokenize = h;
      return h(e, n);
    } else {
      e.next();
      n.tokenize = h;
      return "operator";
    }
  }
  function d(e, n) {
    if (e.match(/^.*%}/)) {
      n.tokenize = h;
    } else {
      e.skipToEnd();
    }
    return "comment";
  }
  function h(e, n) {
    if (e.eatSpace()) {
      return null;
    }
    if (e.match("%{")) {
      n.tokenize = d;
      e.skipToEnd();
      return "comment";
    }
    if (e.match(/^[%#]/)) {
      e.skipToEnd();
      return "comment";
    }
    if (e.match(/^[0-9\.+-]/, false)) {
      if (e.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/)) {
        e.tokenize = h;
        return "number";
      }
      if (e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/) || e.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/)) {
        return "number";
      }
    }
    if (e.match(r(["nan", "NaN", "inf", "Inf"]))) {
      return "number";
    }
    var t = e.match(/^"(?:[^"]|"")*("|$)/) || e.match(/^'(?:[^']|'')*('|$)/);
    if (t) {
      if (t[1]) {
        return "string";
      } else {
        return "error";
      }
    } else if (e.match(f)) {
      return "keyword";
    } else if (e.match(l)) {
      return "builtin";
    } else if (e.match(u)) {
      return "variable";
    } else if (e.match(i) || e.match(o)) {
      return "operator";
    } else if (e.match(a) || e.match(c) || e.match(s)) {
      return null;
    } else if (e.match(m)) {
      n.tokenize = p;
      return null;
    } else {
      e.next();
      return "error";
    }
  }
  let g = {
    name: "octave",
    startState: function () {
      return {
        tokenize: h
      };
    },
    token: function (e, n) {
      var t = n.tokenize(e, n);
      if (t === "number" || t === "variable") {
        n.tokenize = p;
      }
      return t;
    },
    languageData: {
      commentTokens: {
        line: "%"
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    octave: function () {
      return g;
    }
  });
}