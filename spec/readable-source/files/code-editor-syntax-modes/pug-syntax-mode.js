// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'javascriptSyntaxMode'
// - Resolved require(111924) to 'javascript-syntax-mode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12622.8ec141ef.js
         * chunkId: 12622
         * moduleId: 816375
         */
module.exports = function (module, exports, require) {
  var javascriptSyntaxMode = require("javascript-syntax-mode") /*id: 111924*/;
  var i = {
    "{": "}",
    "(": ")",
    "[": "]"
  };
  class a {
    constructor(t) {
      this.indentUnit = t;
      this.javaScriptLine = false;
      this.javaScriptLineExcludesColon = false;
      this.javaScriptArguments = false;
      this.javaScriptArgumentsDepth = 0;
      this.isInterpolating = false;
      this.interpolationNesting = 0;
      this.jsState = javascriptSyntaxMode.javascript.startState(t);
      this.restOfLine = "";
      this.isIncludeFiltered = false;
      this.isEach = false;
      this.lastTag = "";
      this.isAttrs = false;
      this.attrsNest = [];
      this.inAttributeName = true;
      this.attributeIsType = false;
      this.attrValue = "";
      this.indentOf = Infinity;
      this.indentToken = "";
    }
    copy() {
      var t = new a(this.indentUnit);
      t.javaScriptLine = this.javaScriptLine;
      t.javaScriptLineExcludesColon = this.javaScriptLineExcludesColon;
      t.javaScriptArguments = this.javaScriptArguments;
      t.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth;
      t.isInterpolating = this.isInterpolating;
      t.interpolationNesting = this.interpolationNesting;
      t.jsState = (javascriptSyntaxMode.javascript.copyState || function (t) {
        if (typeof t != "object") {
          return t;
        }
        let e = {};
        for (let r in t) {
          let n = t[r];
          e[r] = n instanceof Array ? n.slice() : n;
        }
        return e;
      })(this.jsState);
      t.restOfLine = this.restOfLine;
      t.isIncludeFiltered = this.isIncludeFiltered;
      t.isEach = this.isEach;
      t.lastTag = this.lastTag;
      t.isAttrs = this.isAttrs;
      t.attrsNest = this.attrsNest.slice();
      t.inAttributeName = this.inAttributeName;
      t.attributeIsType = this.attributeIsType;
      t.attrValue = this.attrValue;
      t.indentOf = this.indentOf;
      t.indentToken = this.indentToken;
      return t;
    }
  }
  function o(t, e) {
    if (t.match("#{")) {
      e.isInterpolating = true;
      e.interpolationNesting = 0;
      return "punctuation";
    }
  }
  function u(t, e) {
    if (t.match(/^:([\w\-]+)/)) {
      s(t, e);
      return "atom";
    }
  }
  function s(t, e) {
    e.indentOf = t.indentation();
    e.indentToken = "string";
  }
  let c = {
    startState: function (t) {
      return new a(t);
    },
    copyState: function (t) {
      return t.copy();
    },
    token: function (t, e) {
      var r = function (t, e) {
        if (t.sol()) {
          e.restOfLine = "";
        }
        if (e.restOfLine) {
          t.skipToEnd();
          var r = e.restOfLine;
          e.restOfLine = "";
          return r;
        }
      }(t, e) || function (t, e) {
        if (e.isInterpolating) {
          if (t.peek() === "}") {
            e.interpolationNesting--;
            if (e.interpolationNesting < 0) {
              t.next();
              e.isInterpolating = false;
              return "punctuation";
            }
          } else if (t.peek() === "{") {
            e.interpolationNesting++;
          }
          return javascriptSyntaxMode.javascript.token(t, e.jsState) || true;
        }
      }(t, e) || function (t, e) {
        if (e.isIncludeFiltered) {
          var r = u(t, e);
          e.isIncludeFiltered = false;
          e.restOfLine = "string";
          return r;
        }
      }(t, e) || function (t, e) {
        if (e.isEach) {
          if (t.match(/^ in\b/)) {
            e.javaScriptLine = true;
            e.isEach = false;
            return "keyword";
          }
          if (t.sol() || t.eol()) {
            e.isEach = false;
          } else if (t.next()) {
            while (!t.match(/^ in\b/, false) && t.next());
            return "variable";
          }
        }
      }(t, e) || function t(e, r) {
        if (r.isAttrs) {
          if (i[e.peek()]) {
            r.attrsNest.push(i[e.peek()]);
          }
          if (r.attrsNest[r.attrsNest.length - 1] === e.peek()) {
            r.attrsNest.pop();
          } else if (e.eat(")")) {
            r.isAttrs = false;
            return "punctuation";
          }
          if (r.inAttributeName && e.match(/^[^=,\)!]+/)) {
            if (e.peek() === "=" || e.peek() === "!") {
              r.inAttributeName = false;
              r.jsState = javascriptSyntaxMode.javascript.startState(2);
              if (r.lastTag === "script" && e.current().trim().toLowerCase() === "type") {
                r.attributeIsType = true;
              } else {
                r.attributeIsType = false;
              }
            }
            return "attribute";
          }
          var a = javascriptSyntaxMode.javascript.token(e, r.jsState);
          if (r.attrsNest.length === 0 && (a === "string" || a === "variable" || a === "keyword")) {
            try {
              Function("", "var x " + r.attrValue.replace(/,\s*$/, "").replace(/^!/, ""));
              r.inAttributeName = true;
              r.attrValue = "";
              e.backUp(e.current().length);
              return t(e, r);
            } catch (t) {}
          }
          r.attrValue += e.current();
          return a || true;
        }
      }(t, e) || function (t, e) {
        if (t.sol()) {
          e.javaScriptLine = false;
          e.javaScriptLineExcludesColon = false;
        }
        if (e.javaScriptLine) {
          if (e.javaScriptLineExcludesColon && t.peek() === ":") {
            e.javaScriptLine = false;
            e.javaScriptLineExcludesColon = false;
            return;
          }
          var r = javascriptSyntaxMode.javascript.token(t, e.jsState);
          if (t.eol()) {
            e.javaScriptLine = false;
          }
          return r || true;
        }
      }(t, e) || function (t, e) {
        if (e.javaScriptArguments) {
          if (e.javaScriptArgumentsDepth === 0 && t.peek() !== "(" || (t.peek() === "(" ? e.javaScriptArgumentsDepth++ : t.peek() === ")" && e.javaScriptArgumentsDepth--, e.javaScriptArgumentsDepth === 0)) {
            e.javaScriptArguments = false;
            return;
          }
          return javascriptSyntaxMode.javascript.token(t, e.jsState) || true;
        }
      }(t, e) || function (t, e) {
        if (e.mixinCallAfter) {
          e.mixinCallAfter = false;
          if (!t.match(/^\( *[-\w]+ *=/, false)) {
            e.javaScriptArguments = true;
            e.javaScriptArgumentsDepth = 0;
          }
          return true;
        }
      }(t, e) || function (t) {
        if (t.match(/^yield\b/)) {
          return "keyword";
        }
      }(t) || function (t) {
        if (t.match(/^(?:doctype) *([^\n]+)?/)) {
          return "meta";
        }
      }(t) || o(t, e) || function (t, e) {
        if (t.match(/^case\b/)) {
          e.javaScriptLine = true;
          return "keyword";
        }
      }(t, e) || function (t, e) {
        if (t.match(/^when\b/)) {
          e.javaScriptLine = true;
          e.javaScriptLineExcludesColon = true;
          return "keyword";
        }
      }(t, e) || function (t) {
        if (t.match(/^default\b/)) {
          return "keyword";
        }
      }(t) || function (t, e) {
        if (t.match(/^extends?\b/)) {
          e.restOfLine = "string";
          return "keyword";
        }
      }(t, e) || function (t, e) {
        if (t.match(/^append\b/)) {
          e.restOfLine = "variable";
          return "keyword";
        }
      }(t, e) || function (t, e) {
        if (t.match(/^prepend\b/)) {
          e.restOfLine = "variable";
          return "keyword";
        }
      }(t, e) || function (t, e) {
        if (t.match(/^block\b *(?:(prepend|append)\b)?/)) {
          e.restOfLine = "variable";
          return "keyword";
        }
      }(t, e) || function (t, e) {
        if (t.match(/^include\b/)) {
          e.restOfLine = "string";
          return "keyword";
        }
      }(t, e) || function (t, e) {
        if (t.match(/^include:([a-zA-Z0-9\-]+)/, false) && t.match("include")) {
          e.isIncludeFiltered = true;
          return "keyword";
        }
      }(t, e) || function (t, e) {
        if (t.match(/^mixin\b/)) {
          e.javaScriptLine = true;
          return "keyword";
        }
      }(t, e) || (t.match(/^\+([-\w]+)/) ? (t.match(/^\( *[-\w]+ *=/, false) || (e.javaScriptArguments = true, e.javaScriptArgumentsDepth = 0), "variable") : t.match("+#{", false) ? (t.next(), e.mixinCallAfter = true, o(t, e)) : undefined) || function (t, e) {
        if (t.match(/^(if|unless|else if|else)\b/)) {
          e.javaScriptLine = true;
          return "keyword";
        }
      }(t, e) || function (t, e) {
        if (t.match(/^(- *)?(each|for)\b/)) {
          e.isEach = true;
          return "keyword";
        }
      }(t, e) || function (t, e) {
        if (t.match(/^while\b/)) {
          e.javaScriptLine = true;
          return "keyword";
        }
      }(t, e) || function (t, e) {
        var r;
        if (r = t.match(/^(\w(?:[-:\w]*\w)?)\/?/)) {
          e.lastTag = r[1].toLowerCase();
          return "tag";
        }
      }(t, e) || u(t, e) || function (t, e) {
        if (t.match(/^(!?=|-)/)) {
          e.javaScriptLine = true;
          return "punctuation";
        }
      }(t, e) || function (t) {
        if (t.match(/^#([\w-]+)/)) {
          return "builtin";
        }
      }(t) || function (t) {
        if (t.match(/^\.([\w-]+)/)) {
          return "className";
        }
      }(t) || function (t, e) {
        if (t.peek() == "(") {
          t.next();
          e.isAttrs = true;
          e.attrsNest = [];
          e.inAttributeName = true;
          e.attrValue = "";
          e.attributeIsType = false;
          return "punctuation";
        }
      }(t, e) || function (t, e) {
        if (t.match(/^&attributes\b/)) {
          e.javaScriptArguments = true;
          e.javaScriptArgumentsDepth = 0;
          return "keyword";
        }
      }(t, e) || function (t) {
        if (t.sol() && t.eatSpace()) {
          return "indent";
        }
      }(t) || (t.match(/^(?:\| ?| )([^\n]+)/) ? "string" : t.match(/^(<[^\n]*)/, false) ? (s(t, e), t.skipToEnd(), e.indentToken) : undefined) || function (t, e) {
        if (t.match(/^ *\/\/(-)?([^\n]*)/)) {
          e.indentOf = t.indentation();
          e.indentToken = "comment";
          return "comment";
        }
      }(t, e) || function (t) {
        if (t.match(/^: */)) {
          return "colon";
        }
      }(t) || function (t, e) {
        if (t.eat(".")) {
          s(t, e);
          return "dot";
        }
      }(t, e) || (t.next(), null);
      if (r === true) {
        return null;
      } else {
        return r;
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    pug: function () {
      return c;
    }
  });
}