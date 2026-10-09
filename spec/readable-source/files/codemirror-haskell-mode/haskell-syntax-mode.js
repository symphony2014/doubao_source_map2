// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 1225.2a638e67.js
         * chunkId: 1225
         * moduleId: 613231
         */
module.exports = function (module, exports, require) {
  var n = /[a-z_]/;
  var a = /[A-Z]/;
  var i = /\d/;
  var o = /[0-9A-Fa-f]/;
  var l = /[0-7]/;
  var u = /[a-z_A-Z0-9'\xa1-\uffff]/;
  var s = /[-!#$%&*+.\/<=>?@\\^|~:]/;
  var f = /[(),;[\]`{}]/;
  var c = /[ \t\v\f]/;
  function d(e, t) {
    if (e.eatWhile(c)) {
      return null;
    }
    var r;
    var h = e.next();
    if (f.test(h)) {
      if (h == "{" && e.eat("-")) {
        var p;
        var g = "comment";
        if (e.eat("#")) {
          g = "meta";
        }
        t(p = function e(t, r) {
          if (r == 0) {
            return d;
          } else {
            return function (n, a) {
              var i = r;
              while (!n.eol()) {
                var o = n.next();
                if (o == "{" && n.eat("-")) {
                  ++i;
                } else if (o == "-" && n.eat("}") && --i == 0) {
                  a(d);
                  return t;
                }
              }
              a(e(t, i));
              return t;
            };
          }
        }(g, 1));
        return p(e, t);
      }
      return null;
    }
    if (h == "'") {
      e.eat("\\");
      e.next();
      if (e.eat("'")) {
        return "string";
      } else {
        return "error";
      }
    }
    if (h == "\"") {
      t(r = m);
      return r(e, t);
    }
    if (a.test(h)) {
      e.eatWhile(u);
      if (e.eat(".")) {
        return "qualifier";
      } else {
        return "type";
      }
    }
    if (n.test(h)) {
      e.eatWhile(u);
      return "variable";
    }
    if (i.test(h)) {
      if (h == "0") {
        if (e.eat(/[xX]/)) {
          e.eatWhile(o);
          return "integer";
        }
        if (e.eat(/[oO]/)) {
          e.eatWhile(l);
          return "number";
        }
      }
      e.eatWhile(i);
      var g = "number";
      if (e.match(/^\.\d+/)) {
        g = "number";
      }
      if (e.eat(/[eE]/)) {
        g = "number";
        e.eat(/[-+]/);
        e.eatWhile(i);
      }
      return g;
    }
    if (h == "." && e.eat(".")) {
      return "keyword";
    } else if (s.test(h)) {
      if (h == "-" && e.eat(/-/) && (e.eatWhile(/-/), !e.eat(s))) {
        e.skipToEnd();
        return "comment";
      } else {
        e.eatWhile(s);
        return "variable";
      }
    } else {
      return "error";
    }
  }
  function m(e, t) {
    while (!e.eol()) {
      var r = e.next();
      if (r == "\"") {
        t(d);
        return "string";
      }
      if (r == "\\") {
        if (e.eol() || e.eat(c)) {
          t(h);
          return "string";
        }
        if (!e.eat("&")) {
          e.next();
        }
      }
    }
    t(d);
    return "error";
  }
  function h(e, t) {
    if (e.eat("\\")) {
      var r;
      t(r = m);
      return r(e, t);
    }
    e.next();
    t(d);
    return "error";
  }
  var p = function () {
    var e = {};
    function t(t) {
      return function () {
        for (var r = 0; r < arguments.length; r++) {
          e[arguments[r]] = t;
        }
      };
    }
    t("keyword")("case", "class", "data", "default", "deriving", "do", "else", "foreign", "if", "import", "in", "infix", "infixl", "infixr", "instance", "let", "module", "newtype", "of", "then", "type", "where", "_");
    t("keyword")("..", ":", "::", "=", "\\", "<-", "->", "@", "~", "=>");
    t("builtin")("!!", "$!", "$", "&&", "+", "++", "-", ".", "/", "/=", "<", "<*", "<=", "<$>", "<*>", "=<<", "==", ">", ">=", ">>", ">>=", "^", "^^", "||", "*", "*>", "**");
    t("builtin")("Applicative", "Bool", "Bounded", "Char", "Double", "EQ", "Either", "Enum", "Eq", "False", "FilePath", "Float", "Floating", "Fractional", "Functor", "GT", "IO", "IOError", "Int", "Integer", "Integral", "Just", "LT", "Left", "Maybe", "Monad", "Nothing", "Num", "Ord", "Ordering", "Rational", "Read", "ReadS", "Real", "RealFloat", "RealFrac", "Right", "Show", "ShowS", "String", "True");
    t("builtin")("abs", "acos", "acosh", "all", "and", "any", "appendFile", "asTypeOf", "asin", "asinh", "atan", "atan2", "atanh", "break", "catch", "ceiling", "compare", "concat", "concatMap", "const", "cos", "cosh", "curry", "cycle", "decodeFloat", "div", "divMod", "drop", "dropWhile", "either", "elem", "encodeFloat", "enumFrom", "enumFromThen", "enumFromThenTo", "enumFromTo", "error", "even", "exp", "exponent", "fail", "filter", "flip", "floatDigits", "floatRadix", "floatRange", "floor", "fmap", "foldl", "foldl1", "foldr", "foldr1", "fromEnum", "fromInteger", "fromIntegral", "fromRational", "fst", "gcd", "getChar", "getContents", "getLine", "head", "id", "init", "interact", "ioError", "isDenormalized", "isIEEE", "isInfinite", "isNaN", "isNegativeZero", "iterate", "last", "lcm", "length", "lex", "lines", "log", "logBase", "lookup", "map", "mapM", "mapM_", "max", "maxBound", "maximum", "maybe", "min", "minBound", "minimum", "mod", "negate", "not", "notElem", "null", "odd", "or", "otherwise", "pi", "pred", "print", "product", "properFraction", "pure", "putChar", "putStr", "putStrLn", "quot", "quotRem", "read", "readFile", "readIO", "readList", "readLn", "readParen", "reads", "readsPrec", "realToFrac", "recip", "rem", "repeat", "replicate", "return", "reverse", "round", "scaleFloat", "scanl", "scanl1", "scanr", "scanr1", "seq", "sequence", "sequence_", "show", "showChar", "showList", "showParen", "showString", "shows", "showsPrec", "significand", "signum", "sin", "sinh", "snd", "span", "splitAt", "sqrt", "subtract", "succ", "sum", "tail", "take", "takeWhile", "tan", "tanh", "toEnum", "toInteger", "toRational", "truncate", "uncurry", "undefined", "unlines", "until", "unwords", "unzip", "unzip3", "userError", "words", "writeFile", "zip", "zip3", "zipWith", "zipWith3");
    return e;
  }();
  let g = {
    name: "haskell",
    startState: function () {
      return {
        f: d
      };
    },
    copyState: function (e) {
      return {
        f: e.f
      };
    },
    token: function (e, t) {
      var r = t.f(e, function (e) {
        t.f = e;
      });
      var n = e.current();
      if (p.hasOwnProperty(n)) {
        return p[n];
      } else {
        return r;
      }
    },
    languageData: {
      commentTokens: {
        line: "--",
        block: {
          open: "{-",
          close: "-}"
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    haskell: function () {
      return g;
    }
  });
}