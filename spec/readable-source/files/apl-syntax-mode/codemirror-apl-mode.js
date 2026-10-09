// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13790.faa36f57.js
         * chunkId: 13790
         * moduleId: 52604
         */
module.exports = function (module, exports, require) {
  var l = {
    "+": ["conjugate", "add"],
    "−": ["negate", "subtract"],
    "×": ["signOf", "multiply"],
    "÷": ["reciprocal", "divide"],
    "⌈": ["ceiling", "greaterOf"],
    "⌊": ["floor", "lesserOf"],
    "∣": ["absolute", "residue"],
    "⍳": ["indexGenerate", "indexOf"],
    "?": ["roll", "deal"],
    "⋆": ["exponentiate", "toThePowerOf"],
    "⍟": ["naturalLog", "logToTheBase"],
    "○": ["piTimes", "circularFuncs"],
    "!": ["factorial", "binomial"],
    "⌹": ["matrixInverse", "matrixDivide"],
    "<": [null, "lessThan"],
    "≤": [null, "lessThanOrEqual"],
    "=": [null, "equals"],
    ">": [null, "greaterThan"],
    "≥": [null, "greaterThanOrEqual"],
    "≠": [null, "notEqual"],
    "≡": ["depth", "match"],
    "≢": [null, "notMatch"],
    "∈": ["enlist", "membership"],
    "⍷": [null, "find"],
    "∪": ["unique", "union"],
    "∩": [null, "intersection"],
    "∼": ["not", "without"],
    "∨": [null, "or"],
    "∧": [null, "and"],
    "⍱": [null, "nor"],
    "⍲": [null, "nand"],
    "⍴": ["shapeOf", "reshape"],
    ",": ["ravel", "catenate"],
    "⍪": [null, "firstAxisCatenate"],
    "⌽": ["reverse", "rotate"],
    "⊖": ["axis1Reverse", "axis1Rotate"],
    "⍉": ["transpose", null],
    "↑": ["first", "take"],
    "↓": [null, "drop"],
    "⊂": ["enclose", "partitionWithAxis"],
    "⊃": ["diclose", "pick"],
    "⌷": [null, "index"],
    "⍋": ["gradeUp", null],
    "⍒": ["gradeDown", null],
    "⊤": ["encode", null],
    "⊥": ["decode", null],
    "⍕": ["format", "formatByExample"],
    "⍎": ["execute", null],
    "⊣": ["stop", "left"],
    "⊢": ["pass", "right"]
  };
  var a = /[\.\/⌿⍀¨⍣]/;
  var r = /⍬/;
  var u = /[\+−×÷⌈⌊∣⍳\?⋆⍟○!⌹<≤=>≥≠≡≢∈⍷∪∩∼∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢]/;
  var i = /←/;
  var s = /[⍝#].*$/;
  function o(e) {
    var n;
    n = false;
    return function (t) {
      n = t;
      return t !== e || n === "\\";
    };
  }
  let c = {
    name: "apl",
    startState: function () {
      return {
        prev: false,
        func: false,
        op: false,
        string: false,
        escape: false
      };
    },
    token: function (e, n) {
      var t;
      if (e.eatSpace()) {
        return null;
      } else if ((t = e.next()) === "\"" || t === "'") {
        e.eatWhile(o(t));
        e.next();
        n.prev = true;
        return "string";
      } else if (/[\[{\(]/.test(t)) {
        n.prev = false;
        return null;
      } else if (/[\]}\)]/.test(t)) {
        n.prev = true;
        return null;
      } else if (r.test(t)) {
        n.prev = false;
        return "atom";
      } else if (/[¯\d]/.test(t)) {
        if (n.func) {
          n.func = false;
          n.prev = false;
        } else {
          n.prev = true;
        }
        e.eatWhile(/[\w\.]/);
        return "number";
      } else if (a.test(t) || i.test(t)) {
        return "operator";
      } else if (u.test(t)) {
        n.func = true;
        n.prev = false;
        if (l[t]) {
          return "variableName.function.standard";
        } else {
          return "variableName.function";
        }
      } else if (s.test(t)) {
        e.skipToEnd();
        return "comment";
      } else if (t === "∘" && e.peek() === ".") {
        e.next();
        return "variableName.function";
      } else {
        e.eatWhile(/[\w\$_]/);
        n.prev = true;
        return "keyword";
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    apl: function () {
      return c;
    }
  });
}