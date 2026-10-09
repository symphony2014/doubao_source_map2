// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11378.1625a187.js
         * chunkId: 11378
         * moduleId: 709163
         */
module.exports = function (module, exports, require) {
  var r = {};
  let n = {
    name: "troff",
    startState: function () {
      return {
        tokens: []
      };
    },
    token: function (t, a) {
      return (a.tokens[0] || function (t) {
        if (t.eatSpace()) {
          return null;
        }
        var a = t.sol();
        var e = t.next();
        if (e === "\\") {
          if (!t.match("fB") && !t.match("fR") && !t.match("fI") && !t.match("u") && !t.match("d") && !t.match("%") && !t.match("&")) {
            if (t.match("m[")) {
              t.skipTo("]");
              t.next();
            } else if (t.match("s+") || t.match("s-")) {
              t.eatWhile(/[\d-]/);
            } else if (t.match("(") || t.match("*(")) {
              t.eatWhile(/[\w-]/);
            }
          }
          return "string";
        }
        if (a && (e === "." || e === "'") && t.eat("\\") && t.eat("\"")) {
          t.skipToEnd();
          return "comment";
        }
        if (a && e === ".") {
          if (t.match("B ") || t.match("I ") || t.match("R ")) {
            return "attribute";
          }
          if (t.match("TH ") || t.match("SH ") || t.match("SS ") || t.match("HP ")) {
            t.skipToEnd();
            return "quote";
          }
          if (t.match(/[A-Z]/) && t.match(/[A-Z]/) || t.match(/[a-z]/) && t.match(/[a-z]/)) {
            return "attribute";
          }
        }
        t.eatWhile(/[\w-]/);
        var n = t.current();
        if (r.hasOwnProperty(n)) {
          return r[n];
        } else {
          return null;
        }
      })(t, a);
    }
  };
  require.r(exports);
  require.d(exports, {
    troff: function () {
      return n;
    }
  });
}