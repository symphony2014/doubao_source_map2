// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 94379.3f144489.js
         * chunkId: 94379
         * moduleId: 411570
         */
module.exports = function (module, exports, require) {
  var r = {
    slash: 0,
    parenthesis: 1
  };
  var c = {
    comment: 0,
    _string: 1,
    characterClass: 2
  };
  let n = {
    name: "ebnf",
    startState: function () {
      return {
        stringType: null,
        commentType: null,
        braced: 0,
        lhs: true,
        localState: null,
        stack: [],
        inDefinition: false
      };
    },
    token: function (e, t) {
      if (e) {
        if (t.stack.length === 0) {
          if (e.peek() == "\"" || e.peek() == "'") {
            t.stringType = e.peek();
            e.next();
            t.stack.unshift(c._string);
          } else if (e.match("/*")) {
            t.stack.unshift(c.comment);
            t.commentType = r.slash;
          } else if (e.match("(*")) {
            t.stack.unshift(c.comment);
            t.commentType = r.parenthesis;
          }
        }
        switch (t.stack[0]) {
          case c._string:
            while (t.stack[0] === c._string && !e.eol()) {
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
            if (t.lhs) {
              return "property";
            } else {
              return "string";
            }
          case c.comment:
            while (t.stack[0] === c.comment && !e.eol()) {
              if (t.commentType === r.slash && e.match("*/")) {
                t.stack.shift();
                t.commentType = null;
              } else if (t.commentType === r.parenthesis && e.match("*)")) {
                t.stack.shift();
                t.commentType = null;
              } else {
                e.match(/^.[^\*]*/);
              }
            }
            return "comment";
          case c.characterClass:
            while (t.stack[0] === c.characterClass && !e.eol()) {
              if (!e.match(/^[^\]\\]+/) && !e.match(".")) {
                t.stack.shift();
              }
            }
            return "operator";
        }
        var a = e.peek();
        switch (a) {
          case "[":
            e.next();
            t.stack.unshift(c.characterClass);
            return "bracket";
          case ":":
          case "|":
          case ";":
            e.next();
            return "operator";
          case "%":
            if (e.match("%%")) {
              return "header";
            }
            if (e.match(/[%][A-Za-z]+/)) {
              return "keyword";
            }
            if (e.match(/[%][}]/)) {
              return "bracket";
            }
            break;
          case "/":
            if (e.match(/[\/][A-Za-z]+/)) {
              return "keyword";
            }
          case "\\":
            if (e.match(/[\][a-z]+/)) {
              return "string.special";
            }
          case ".":
            if (e.match(".")) {
              return "atom";
            }
          case "*":
          case "-":
          case "+":
          case "^":
            if (e.match(a)) {
              return "atom";
            }
          case "$":
            if (e.match("$$")) {
              return "builtin";
            }
            if (e.match(/[$][0-9]+/)) {
              return "variableName.special";
            }
          case "<":
            if (e.match(/<<[a-zA-Z_]+>>/)) {
              return "builtin";
            }
        }
        if (e.match("//")) {
          e.skipToEnd();
          return "comment";
        }
        if (e.match("return")) {
          return "operator";
        }
        if (e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)) {
          if (e.match(/(?=[\(.])/)) {
            return "variable";
          } else if (e.match(/(?=[\s\n]*[:=])/)) {
            return "def";
          } else {
            return "variableName.special";
          }
        }
        if (["[", "]", "(", ")"].indexOf(e.peek()) != -1) {
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
    ebnf: function () {
      return n;
    }
  });
}