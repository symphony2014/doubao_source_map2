// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83900.0949e51d.js
         * chunkId: 83900
         * moduleId: 228783
         */
module.exports = function (module, exports, require) {
  var i = ["and", "as", "block", "endblock", "by", "cycle", "debug", "else", "elif", "extends", "filter", "endfilter", "firstof", "do", "for", "endfor", "if", "endif", "ifchanged", "endifchanged", "ifequal", "endifequal", "ifnotequal", "set", "raw", "endraw", "endifnotequal", "in", "include", "load", "not", "now", "or", "parsed", "regroup", "reversed", "spaceless", "call", "endcall", "macro", "endmacro", "endspaceless", "ssi", "templatetag", "openblock", "closeblock", "openvariable", "closevariable", "without", "context", "openbrace", "closebrace", "opencomment", "closecomment", "widthratio", "url", "with", "endwith", "get_current_language", "trans", "endtrans", "noop", "blocktrans", "endblocktrans", "get_available_languages", "get_current_language_bidi", "pluralize", "autoescape", "endautoescape"];
  var a = /^[+\-*&%=<>!?|~^]/;
  var r = /^[:\[\(\{]/;
  var o = ["true", "false"];
  var s = /^(\d[+\-\*\/])?\d+(\.\d+)?/;
  function c(e, n) {
    var t = e.peek();
    if (n.incomment) {
      if (e.skipTo("#}")) {
        e.eatWhile(/\#|}/);
        n.incomment = false;
      } else {
        e.skipToEnd();
      }
      return "comment";
    }
    if (n.intag) {
      if (n.operator) {
        n.operator = false;
        if (e.match(o)) {
          return "atom";
        }
        if (e.match(s)) {
          return "number";
        }
      }
      if (n.sign) {
        n.sign = false;
        if (e.match(o)) {
          return "atom";
        }
        if (e.match(s)) {
          return "number";
        }
      }
      if (n.instring) {
        if (t == n.instring) {
          n.instring = false;
        }
        e.next();
        return "string";
      }
      if (t == "'" || t == "\"") {
        n.instring = t;
        e.next();
        return "string";
      }
      if (n.inbraces > 0 && t == ")") {
        e.next();
        n.inbraces--;
      } else if (t == "(") {
        e.next();
        n.inbraces++;
      } else if (n.inbrackets > 0 && t == "]") {
        e.next();
        n.inbrackets--;
      } else if (t == "[") {
        e.next();
        n.inbrackets++;
      } else if (!n.lineTag && (e.match(n.intag + "}") || e.eat("-") && e.match(n.intag + "}"))) {
        n.intag = false;
        return "tag";
      } else if (e.match(a)) {
        n.operator = true;
        return "operator";
      } else if (e.match(r)) {
        n.sign = true;
      } else {
        if (e.column() == 1 && n.lineTag && e.match(i)) {
          return "keyword";
        }
        if (e.eat(" ") || e.sol()) {
          if (e.match(i)) {
            return "keyword";
          }
          if (e.match(o)) {
            return "atom";
          }
          if (e.match(s)) {
            return "number";
          }
          if (e.sol()) {
            e.next();
          }
        } else {
          e.next();
        }
      }
      return "variable";
    }
    if (e.eat("{")) {
      if (e.eat("#")) {
        n.incomment = true;
        if (e.skipTo("#}")) {
          e.eatWhile(/\#|}/);
          n.incomment = false;
        } else {
          e.skipToEnd();
        }
        return "comment";
      }
      if (t = e.eat(/\{|%/)) {
        n.intag = t;
        n.inbraces = 0;
        n.inbrackets = 0;
        if (t == "{") {
          n.intag = "}";
        }
        e.eat("-");
        return "tag";
      }
    } else if (e.eat("#")) {
      if (e.peek() == "#") {
        e.skipToEnd();
        return "comment";
      }
      if (!e.eol()) {
        n.intag = true;
        n.lineTag = true;
        n.inbraces = 0;
        n.inbrackets = 0;
        return "tag";
      }
    }
    e.next();
  }
  i = RegExp("((" + i.join(")|(") + "))\\b");
  o = RegExp("((" + o.join(")|(") + "))\\b");
  let l = {
    name: "jinja2",
    startState: function () {
      return {
        tokenize: c,
        inbrackets: 0,
        inbraces: 0
      };
    },
    token: function (e, n) {
      var t = n.tokenize(e, n);
      if (e.eol() && n.lineTag && !n.instring && n.inbraces == 0 && n.inbrackets == 0) {
        n.intag = false;
        n.lineTag = false;
      }
      return t;
    },
    languageData: {
      commentTokens: {
        block: {
          open: "{#",
          close: "#}",
          line: "##"
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    jinja2: function () {
      return l;
    }
  });
}