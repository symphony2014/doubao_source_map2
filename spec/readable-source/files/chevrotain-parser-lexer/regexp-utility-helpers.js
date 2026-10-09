// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K0' to 'lineBreakRegex'
// - Renamed export 'Rn' to 'isMultilineRegex'
// - Renamed export 'XC' to 'matchRegexPattern'
// - Renamed export 'cb' to 'hasWhitespaceRegex'
// - Renamed export 'cp' to 'makeCaseInsensitive'
// - Renamed export 'hr' to 'escapeRegexChars'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 880286
         */
module.exports = function (module, exports, require) {
  var regexpParserVisitor = require("regexp-parser-visitor") /*id: 582787*/;
  let i = /\r?\n/gm;
  let a = new regexpParserVisitor.RegExpParser();
  class s extends regexpParserVisitor.RegExpVisitor {
    constructor() {
      super(...arguments);
      this.isStarting = true;
      this.endRegexpStack = [];
      this.multiline = false;
    }
    get endRegex() {
      return this.endRegexpStack.join("");
    }
    reset(e) {
      this.multiline = false;
      this.regex = e;
      this.startRegexp = "";
      this.isStarting = true;
      this.endRegexpStack = [];
    }
    visitGroup(e) {
      if (e.quantifier) {
        this.isStarting = false;
        this.endRegexpStack = [];
      }
    }
    visitCharacter(e) {
      let t = String.fromCharCode(e.value);
      if (!this.multiline && t === "\n") {
        this.multiline = true;
      }
      if (e.quantifier) {
        this.isStarting = false;
        this.endRegexpStack = [];
      } else {
        let e = d(t);
        this.endRegexpStack.push(e);
        if (this.isStarting) {
          this.startRegexp += e;
        }
      }
    }
    visitSet(e) {
      if (!this.multiline) {
        let t = new RegExp(this.regex.substring(e.loc.begin, e.loc.end));
        this.multiline = !!"\n".match(t);
      }
      if (e.quantifier) {
        this.isStarting = false;
        this.endRegexpStack = [];
      } else {
        let t = this.regex.substring(e.loc.begin, e.loc.end);
        this.endRegexpStack.push(t);
        if (this.isStarting) {
          this.startRegexp += t;
        }
      }
    }
    visitChildren(e) {
      if (e.type !== "Group" || !e.quantifier) {
        super.visitChildren(e);
      }
    }
  }
  let o = new s();
  function l(e) {
    try {
      if (typeof e == "string") {
        e = new RegExp(e);
      }
      e = e.toString();
      o.reset(e);
      o.visit(a.pattern(e));
      return o.multiline;
    } catch (e) {
      return false;
    }
  }
  let u = "\f\n\r\t \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000﻿".split("");
  function c(e) {
    let t = typeof e == "string" ? new RegExp(e) : e;
    return u.some(e => t.test(e));
  }
  function d(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function h(e) {
    return Array.prototype.map.call(e, e => /\w/.test(e) ? `[${e.toLowerCase()}${e.toUpperCase()}]` : d(e)).join("");
  }
  function f(e, t) {
    let r = function (e) {
      if (typeof e == "string") {
        e = new RegExp(e);
      }
      let t = e;
      let r = e.source;
      let n = 0;
      return new RegExp(function e() {
        let i = "";
        let a;
        function s(e) {
          i += r.substr(n, e);
          n += e;
        }
        function o(e) {
          i += "(?:" + r.substr(n, e) + "|$)";
          n += e;
        }
        while (n < r.length) {
          switch (r[n]) {
            case "\\":
              switch (r[n + 1]) {
                case "c":
                  o(3);
                  break;
                case "x":
                  o(4);
                  break;
                case "u":
                  o(t.unicode ? r[n + 2] === "{" ? r.indexOf("}", n) - n + 1 : 6 : 2);
                  break;
                case "p":
                case "P":
                  o(t.unicode ? r.indexOf("}", n) - n + 1 : 2);
                  break;
                case "k":
                  o(r.indexOf(">", n) - n + 1);
                  break;
                default:
                  o(2);
              }
              break;
            case "[":
              (a = /\[(?:\\.|.)*?\]/g).lastIndex = n;
              o((a = a.exec(r) || [])[0].length);
              break;
            case "|":
            case "^":
            case "$":
            case "*":
            case "+":
            case "?":
              s(1);
              break;
            case "{":
              (a = /\{\d+,?\d*\}/g).lastIndex = n;
              if (a = a.exec(r)) {
                s(a[0].length);
              } else {
                o(1);
              }
              break;
            case "(":
              if (r[n + 1] === "?") {
                switch (r[n + 2]) {
                  case ":":
                    i += "(?:";
                    n += 3;
                    i += e() + "|$)";
                    break;
                  case "=":
                    i += "(?=";
                    n += 3;
                    i += e() + ")";
                    break;
                  case "!":
                    a = n;
                    n += 3;
                    e();
                    i += r.substr(a, n - a);
                    break;
                  case "<":
                    switch (r[n + 3]) {
                      case "=":
                      case "!":
                        a = n;
                        n += 4;
                        e();
                        i += r.substr(a, n - a);
                        break;
                      default:
                        s(r.indexOf(">", n) - n + 1);
                        i += e() + "|$)";
                    }
                }
              } else {
                s(1);
                i += e() + "|$)";
              }
              break;
            case ")":
              ++n;
              return i;
            default:
              o(1);
          }
        }
        return i;
      }(), e.flags);
    }(e);
    let n = t.match(r);
    return !!n && n[0].length > 0;
  }
  require.d(exports, {
    lineBreakRegex: function () {
      return i;
    },
    isMultilineRegex: function () {
      return l;
    },
    matchRegexPattern: function () {
      return f;
    },
    hasWhitespaceRegex: function () {
      return c;
    },
    makeCaseInsensitive: function () {
      return h;
    },
    escapeRegexChars: function () {
      return d;
    }
  });
}