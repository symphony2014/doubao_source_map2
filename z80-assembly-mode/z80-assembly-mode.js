// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 6336.d6d65783.js
         * chunkId: 6336
         * moduleId: 2278
         */
module.exports = function (module, exports, require) {
  function i(e) {
    if (e) {
      t = /^(exx?|(ld|cp)([di]r?)?|[lp]ea|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|[de]i|halt|im|in([di]mr?|ir?|irx|2r?)|ot(dmr?|[id]rx|imr?)|out(0?|[di]r?|[di]2r?)|tst(io)?|slp)(\.([sl]?i)?[sl])?\b/i;
      r = /^(((call|j[pr]|rst|ret[in]?)(\.([sl]?i)?[sl])?)|(rs|st)mix)\b/i;
    } else {
      t = /^(exx?|(ld|cp|in)([di]r?)?|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|rst|[de]i|halt|im|ot[di]r|out[di]?)\b/i;
      r = /^(call|j[pr]|ret[in]?|b_?(call|jump))\b/i;
    }
    var t;
    var r;
    var i = /^(af?|bc?|c|de?|e|hl?|l|i[xy]?|r|sp)\b/i;
    var n = /^(n?[zc]|p[oe]?|m)\b/i;
    var l = /^([hl][xy]|i[xy][hl]|slia|sll)\b/i;
    var s = /^([\da-f]+h|[0-7]+o|[01]+b|\d+d?)\b/i;
    return {
      name: "z80",
      startState: function () {
        return {
          context: 0
        };
      },
      token: function (a, c) {
        var u;
        if (!a.column()) {
          c.context = 0;
        }
        if (a.eatSpace()) {
          return null;
        }
        if (a.eatWhile(/\w/)) {
          if (e && a.eat(".")) {
            a.eatWhile(/\w/);
          }
          u = a.current();
          if (a.indentation()) {
            if ((c.context == 1 || c.context == 4) && i.test(u)) {
              c.context = 4;
              return "variable";
            }
            if (c.context == 2 && n.test(u)) {
              c.context = 4;
              return "variableName.special";
            }
            if (t.test(u)) {
              c.context = 1;
              return "keyword";
            }
            if (r.test(u)) {
              c.context = 2;
              return "keyword";
            }
            if (c.context == 4 && s.test(u)) {
              return "number";
            }
            if (l.test(u)) {
              return "error";
            }
          } else if (a.match(s)) {
            return "number";
          }
        } else if (a.eat(";")) {
          a.skipToEnd();
          return "comment";
        } else if (a.eat("\"")) {
          while ((u = a.next()) && u != "\"") {
            if (u == "\\") {
              a.next();
            }
          }
          return "string";
        } else if (a.eat("'")) {
          if (a.match(/\\?.'/)) {
            return "number";
          }
        } else if (a.eat(".") || a.sol() && a.eat("#")) {
          c.context = 5;
          if (a.eatWhile(/\w/)) {
            return "def";
          }
        } else if (a.eat("$")) {
          if (a.eatWhile(/[\da-f]/i)) {
            return "number";
          }
        } else if (a.eat("%")) {
          if (a.eatWhile(/[01]/)) {
            return "number";
          }
        } else {
          a.next();
        }
        return null;
      }
    };
  }
  let n = i(false);
  let l = i(true);
  require.r(exports);
  require.d(exports, {
    ez80: function () {
      return l;
    },
    z80: function () {
      return n;
    }
  });
}