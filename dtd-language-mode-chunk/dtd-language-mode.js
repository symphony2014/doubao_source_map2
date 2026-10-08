// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75234.a30a9fb7.js
         * chunkId: 75234
         * moduleId: 770561
         */
module.exports = function (module, exports, require) {
  var r;
  function a(t, e) {
    var n;
    var l;
    var i = t.next();
    if (i == "<" && t.eat("!")) {
      if (t.eatWhile(/[\-]/)) {
        e.tokenize = u;
        return u(t, e);
      }
      if (t.eatWhile(/[\w]/)) {
        r = "doindent";
        return "keyword";
      }
    } else if (i == "<" && t.eat("?")) {
      ;
      n = "?>";
      e.tokenize = function (t, e) {
        while (!t.eol()) {
          if (t.match("?>")) {
            e.tokenize = a;
            break;
          }
          t.next();
        }
        return "meta";
      };
      r = i;
      return "meta";
    } else if (i == "#" && t.eatWhile(/[\w]/)) {
      r = "tag";
      return "atom";
    } else if (i == "|") {
      r = "separator";
      return "keyword";
    } else if (i.match(/[\(\)\[\]\-\.,\+\?>]/)) {
      r = i;
      return null;
    } else if (i.match(/[\[\]]/)) {
      r = i;
      return "rule";
    } else if (i == "\"" || i == "'") {
      ;
      l = i;
      e.tokenize = function (t, e) {
        var n;
        var u = false;
        while ((n = t.next()) != null) {
          if (n == l && !u) {
            e.tokenize = a;
            break;
          }
          u = !u && n == "\\";
        }
        r = "tag";
        return "string";
      };
      return e.tokenize(t, e);
    } else if (t.eatWhile(/[a-zA-Z\?\+\d]/)) {
      var s = t.current();
      if (s.substr(s.length - 1, s.length).match(/\?|\+/) !== null) {
        t.backUp(1);
      }
      r = "tag";
      return "tag";
    } else if (i == "%" || i == "*") {
      r = "number";
      return "number";
    } else {
      t.eatWhile(/[\w\\\-_%.{,]/);
      r = null;
      return null;
    }
  }
  function u(t, e) {
    var n;
    var u = 0;
    while ((n = t.next()) != null) {
      if (u >= 2 && n == ">") {
        e.tokenize = a;
        break;
      }
      u = n == "-" ? u + 1 : 0;
    }
    r = "comment";
    return "comment";
  }
  let l = {
    name: "dtd",
    startState: function () {
      return {
        tokenize: a,
        baseIndent: 0,
        stack: []
      };
    },
    token: function (t, e) {
      if (t.eatSpace()) {
        return null;
      }
      var n = e.tokenize(t, e);
      var a = e.stack[e.stack.length - 1];
      if (t.current() == "[" || r === "doindent" || r == "[") {
        e.stack.push("rule");
      } else if (r === "endtag") {
        e.stack[e.stack.length - 1] = "endtag";
      } else if (t.current() == "]" || r == "]" || r == ">" && a == "rule") {
        e.stack.pop();
      } else if (r == "[") {
        e.stack.push("[");
      }
      return n;
    },
    indent: function (t, e, n) {
      var a = t.stack.length;
      if (e.charAt(0) === "]") {
        a--;
      } else if (e.substr(e.length - 1, e.length) === ">") {
        if (e.substr(0, 1) !== "<" && (r != "doindent" || !(e.length > 1))) {
          if (r == "doindent") {
            a--;
          } else if ((r != ">" || !(e.length > 1)) && (r != "tag" || e === ">")) {
            if (r == "tag" && t.stack[t.stack.length - 1] == "rule") {
              a--;
            } else if (r == "tag") {
              a++;
            } else if (e === ">" && t.stack[t.stack.length - 1] == "rule" && r === ">") {
              a--;
            } else if (e !== ">" || t.stack[t.stack.length - 1] != "rule") {
              if (e.substr(0, 1) !== "<" && e.substr(0, 1) === ">") {
                a -= 1;
              } else if (e !== ">") {
                a -= 1;
              }
            }
          }
        }
        if (r == null || r == "]") {
          a--;
        }
      }
      return t.baseIndent + a * n.unit;
    },
    languageData: {
      indentOnInput: /^\s*[\]>]$/
    }
  };
  require.r(exports);
  require.d(exports, {
    dtd: function () {
      return l;
    }
  });
}