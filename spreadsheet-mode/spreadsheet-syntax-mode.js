// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2787.60cfc68b.js
         * chunkId: 2787
         * moduleId: 52248
         */
module.exports = function (module, exports, require) {
  let a = {
    name: "spreadsheet",
    startState: function () {
      return {
        stringType: null,
        stack: []
      };
    },
    token: function (e, t) {
      if (e) {
        if (t.stack.length === 0 && (e.peek() == "\"" || e.peek() == "'")) {
          t.stringType = e.peek();
          e.next();
          t.stack.unshift("string");
        }
        switch (t.stack[0]) {
          case "string":
            while (t.stack[0] === "string" && !e.eol()) {
              if (e.peek() === t.stringType) {
                e.next();
                t.stack.shift();
              } else if (e.peek() === "\\") {
                e.next();
                e.next();
              } else {
                e.match(/^.[^\\\"\']*/);
              }
            }
            return "string";
          case "characterClass":
            while (t.stack[0] === "characterClass" && !e.eol()) {
              if (!e.match(/^[^\]\\]+/) && !e.match(/^\\./)) {
                t.stack.shift();
              }
            }
            return "operator";
        }
        var r = e.peek();
        switch (r) {
          case "[":
            e.next();
            t.stack.unshift("characterClass");
            return "bracket";
          case ":":
            e.next();
            return "operator";
          case "\\":
            if (e.match(/\\[a-z]+/)) {
              return "string.special";
            }
            e.next();
            return "atom";
          case ".":
          case ",":
          case ";":
          case "*":
          case "-":
          case "+":
          case "^":
          case "<":
          case "/":
          case "=":
            e.next();
            return "atom";
          case "$":
            e.next();
            return "builtin";
        }
        if (e.match(/\d+/)) {
          if (e.match(/^\w+/)) {
            return "error";
          } else {
            return "number";
          }
        }
        if (e.match(/^[a-zA-Z_]\w*/)) {
          if (e.match(/(?=[\(.])/, false)) {
            return "keyword";
          } else {
            return "variable";
          }
        }
        if (["[", "]", "(", ")", "{", "}"].indexOf(r) != -1) {
          e.next();
          return "bracket";
        }
        if (!e.eatSpace()) {
          e.next();
        }
        return null;
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    spreadsheet: function () {
      return a;
    }
  });
}