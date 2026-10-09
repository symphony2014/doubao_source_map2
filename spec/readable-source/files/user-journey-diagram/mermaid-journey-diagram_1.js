// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mermaidShapeDrawingUtils'
// - Resolved require(621602) to 'mermaid-shape-drawing-utils'
// - Renamed variable 'r' to 'fontAwesomeIconStylesHelper'
// - Resolved require(878353) to 'font-awesome-icon-styles-helper'
// - Renamed variable 'a' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 's' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'l' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'ZH' to 'clearCommonDb' (module 401926)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 401926)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 401926)
// - Updated imported property 'GN' to 'setAccTitle' (module 401926)
// - Updated imported property 'eu' to 'getAccTitle' (module 401926)
// - Updated imported property 'U$' to 'setAccDescription' (module 401926)
// - Updated imported property 'Mx' to 'getAccDescription' (module 401926)
// - Updated imported property 'v2' to 'configureSvgSize' (module 401926)
// - Updated imported property 'G' to 'getIconStyles' (module 878353)
// - Updated imported property 'Mu' to 'drawRect' (module 621602)
// - Updated imported property 'yU' to 'drawText' (module 621602)
// - Updated imported property 'kc' to 'getNoteRect' (module 621602)
// - Updated imported property 'Ys' to 'select' (module 381804)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16090.35eabcc9.js
         * chunkId: 16090
         * moduleId: 47544
         */
module.exports = function (module, exports, require) {
  var mermaidShapeDrawingUtils = require("mermaid-shape-drawing-utils") /*id: 621602*/;
  var fontAwesomeIconStylesHelper = require("font-awesome-icon-styles-helper") /*id: 878353*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var o = function () {
    var t = loggerLevelUtils.setFunctionName(function (t, e, i, n) {
      i = i || {};
      n = t.length;
      for (; n--; i[t[n]] = e);
      return i;
    }, "o");
    var e = [6, 8, 10, 11, 12, 14, 16, 17, 18];
    var i = [1, 9];
    var n = [1, 10];
    var r = [1, 11];
    var a = [1, 12];
    var l = [1, 13];
    var o = [1, 14];
    var c = {
      trace: loggerLevelUtils.setFunctionName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        journey: 4,
        document: 5,
        EOF: 6,
        line: 7,
        SPACE: 8,
        statement: 9,
        NEWLINE: 10,
        title: 11,
        acc_title: 12,
        acc_title_value: 13,
        acc_descr: 14,
        acc_descr_value: 15,
        acc_descr_multiline_value: 16,
        section: 17,
        taskName: 18,
        taskData: 19,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "journey",
        6: "EOF",
        8: "SPACE",
        10: "NEWLINE",
        11: "title",
        12: "acc_title",
        13: "acc_title_value",
        14: "acc_descr",
        15: "acc_descr_value",
        16: "acc_descr_multiline_value",
        17: "section",
        18: "taskName",
        19: "taskData"
      },
      productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2]],
      performAction: loggerLevelUtils.setFunctionName(function (t, e, i, n, r, a, s) {
        var l = a.length - 1;
        switch (r) {
          case 1:
            return a[l - 1];
          case 2:
          case 6:
          case 7:
            this.$ = [];
            break;
          case 3:
            a[l - 1].push(a[l]);
            this.$ = a[l - 1];
            break;
          case 4:
          case 5:
            this.$ = a[l];
            break;
          case 8:
            n.setDiagramTitle(a[l].substr(6));
            this.$ = a[l].substr(6);
            break;
          case 9:
            this.$ = a[l].trim();
            n.setAccTitle(this.$);
            break;
          case 10:
          case 11:
            this.$ = a[l].trim();
            n.setAccDescription(this.$);
            break;
          case 12:
            n.addSection(a[l].substr(8));
            this.$ = a[l].substr(8);
            break;
          case 13:
            n.addTask(a[l - 1], a[l]);
            this.$ = "task";
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: [1, 2]
      }, {
        1: [3]
      }, t(e, [2, 2], {
        5: 3
      }), {
        6: [1, 4],
        7: 5,
        8: [1, 6],
        9: 7,
        10: [1, 8],
        11: i,
        12: n,
        14: r,
        16: a,
        17: l,
        18: o
      }, t(e, [2, 7], {
        1: [2, 1]
      }), t(e, [2, 3]), {
        9: 15,
        11: i,
        12: n,
        14: r,
        16: a,
        17: l,
        18: o
      }, t(e, [2, 5]), t(e, [2, 6]), t(e, [2, 8]), {
        13: [1, 16]
      }, {
        15: [1, 17]
      }, t(e, [2, 11]), t(e, [2, 12]), {
        19: [1, 18]
      }, t(e, [2, 4]), t(e, [2, 9]), t(e, [2, 10]), t(e, [2, 13])],
      defaultActions: {},
      parseError: loggerLevelUtils.setFunctionName(function (t, e) {
        if (e.recoverable) {
          this.trace(t);
        } else {
          var i = Error(t);
          i.hash = e;
          throw i;
        }
      }, "parseError"),
      parse: loggerLevelUtils.setFunctionName(function (t) {
        var e = this;
        var i = [0];
        var n = [];
        var r = [null];
        var a = [];
        var l = this.table;
        var o = "";
        var c = 0;
        var h = 0;
        var u = 0;
        var y = a.slice.call(arguments, 1);
        var p = Object.create(this.lexer);
        var d = {
          yy: {}
        };
        for (var f in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, f)) {
            d.yy[f] = this.yy[f];
          }
        }
        p.setInput(t, d.yy);
        d.yy.lexer = p;
        d.yy.parser = this;
        if (p.yylloc === undefined) {
          p.yylloc = {};
        }
        var g = p.yylloc;
        a.push(g);
        var x = p.options && p.options.ranges;
        function m() {
          var t;
          if (typeof (t = n.pop() || p.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (n = t).pop();
            }
            t = e.symbols_[t] || t;
          }
          return t;
        }
        if (typeof d.yy.parseError == "function") {
          this.parseError = d.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        loggerLevelUtils.setFunctionName(function (t) {
          i.length = i.length - t * 2;
          r.length = r.length - t;
          a.length = a.length - t;
        }, "popStack");
        loggerLevelUtils.setFunctionName(m, "lex");
        var k;
        var _;
        var b;
        var v;
        var w;
        var W;
        var $;
        var M;
        var T;
        var E = {};
        while (true) {
          b = i[i.length - 1];
          if (this.defaultActions[b]) {
            v = this.defaultActions[b];
          } else {
            if (k == null) {
              k = m();
            }
            v = l[b] && l[b][k];
          }
          if (v === undefined || !v.length || !v[0]) {
            var S = "";
            T = [];
            for (W in l[b]) {
              if (this.terminals_[W] && W > 2) {
                T.push("'" + this.terminals_[W] + "'");
              }
            }
            S = p.showPosition ? "Parse error on line " + (c + 1) + ":\n" + p.showPosition() + "\nExpecting " + T.join(", ") + ", got '" + (this.terminals_[k] || k) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (k == 1 ? "end of input" : "'" + (this.terminals_[k] || k) + "'");
            this.parseError(S, {
              text: p.match,
              token: this.terminals_[k] || k,
              line: p.yylineno,
              loc: g,
              expected: T
            });
          }
          if (v[0] instanceof Array && v.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + b + ", token: " + k);
          }
          switch (v[0]) {
            case 1:
              i.push(k);
              r.push(p.yytext);
              a.push(p.yylloc);
              i.push(v[1]);
              k = null;
              if (_) {
                k = _;
                _ = null;
              } else {
                h = p.yyleng;
                o = p.yytext;
                c = p.yylineno;
                g = p.yylloc;
                if (u > 0) {
                  u--;
                }
              }
              break;
            case 2:
              $ = this.productions_[v[1]][1];
              E.$ = r[r.length - $];
              E._$ = {
                first_line: a[a.length - ($ || 1)].first_line,
                last_line: a[a.length - 1].last_line,
                first_column: a[a.length - ($ || 1)].first_column,
                last_column: a[a.length - 1].last_column
              };
              if (x) {
                E._$.range = [a[a.length - ($ || 1)].range[0], a[a.length - 1].range[1]];
              }
              if ((w = this.performAction.apply(E, [o, h, c, d.yy, v[1], r, a].concat(y))) !== undefined) {
                return w;
              }
              if ($) {
                i = i.slice(0, $ * -1 * 2);
                r = r.slice(0, $ * -1);
                a = a.slice(0, $ * -1);
              }
              i.push(this.productions_[v[1]][0]);
              r.push(E.$);
              a.push(E._$);
              M = l[i[i.length - 2]][i[i.length - 1]];
              i.push(M);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var h = {
      EOF: 1,
      parseError: loggerLevelUtils.setFunctionName(function (t, e) {
        if (this.yy.parser) {
          this.yy.parser.parseError(t, e);
        } else {
          throw Error(t);
        }
      }, "parseError"),
      setInput: loggerLevelUtils.setFunctionName(function (t, e) {
        this.yy = e || this.yy || {};
        this._input = t;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      }, "setInput"),
      input: loggerLevelUtils.setFunctionName(function () {
        var t = this._input[0];
        this.yytext += t;
        this.yyleng++;
        this.offset++;
        this.match += t;
        this.matched += t;
        if (t.match(/(?:\r\n?|\n).*/g)) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return t;
      }, "input"),
      unput: loggerLevelUtils.setFunctionName(function (t) {
        var e = t.length;
        var i = t.split(/(?:\r\n?|\n)/g);
        this._input = t + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - e);
        this.offset -= e;
        var n = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (i.length - 1) {
          this.yylineno -= i.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: i ? (i.length === n.length ? this.yylloc.first_column : 0) + n[n.length - i.length].length - i[0].length : this.yylloc.first_column - e
        };
        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - e];
        }
        this.yyleng = this.yytext.length;
        return this;
      }, "unput"),
      more: loggerLevelUtils.setFunctionName(function () {
        this._more = true;
        return this;
      }, "more"),
      reject: loggerLevelUtils.setFunctionName(function () {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
          return this;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      }, "reject"),
      less: loggerLevelUtils.setFunctionName(function (t) {
        this.unput(this.match.slice(t));
      }, "less"),
      pastInput: loggerLevelUtils.setFunctionName(function () {
        var t = this.matched.substr(0, this.matched.length - this.match.length);
        return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: loggerLevelUtils.setFunctionName(function () {
        var t = this.match;
        if (t.length < 20) {
          t += this._input.substr(0, 20 - t.length);
        }
        return (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: loggerLevelUtils.setFunctionName(function () {
        var t = this.pastInput();
        var e = Array(t.length + 1).join("-");
        return t + this.upcomingInput() + "\n" + e + "^";
      }, "showPosition"),
      test_match: loggerLevelUtils.setFunctionName(function (t, e) {
        var i;
        var n;
        var r;
        if (this.options.backtrack_lexer) {
          r = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            r.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        if (n = t[0].match(/(?:\r\n?|\n).*/g)) {
          this.yylineno += n.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: n ? n[n.length - 1].length - n[n.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
        };
        this.yytext += t[0];
        this.match += t[0];
        this.matches = t;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(t[0].length);
        this.matched += t[0];
        i = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (i) {
          return i;
        }
        if (this._backtrack) {
          for (var a in r) {
            this[a] = r[a];
          }
        }
        return false;
      }, "test_match"),
      next: loggerLevelUtils.setFunctionName(function () {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var t;
        var e;
        var i;
        var n;
        var r = this._currentRules();
        var a = 0;
        for (; a < r.length; a++) {
          if ((i = this._input.match(this.rules[r[a]])) && (!e || i[0].length > e[0].length)) {
            e = i;
            n = a;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(i, r[a])) !== false) {
                return t;
              }
              if (!this._backtrack) {
                return false;
              }
              e = false;
              continue;
            }
            if (!this.options.flex) {
              break;
            }
          }
        }
        if (e) {
          return (t = this.test_match(e, r[n])) !== false && t;
        } else if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      }, "next"),
      lex: loggerLevelUtils.setFunctionName(function () {
        var t = this.next();
        return t || this.lex();
      }, "lex"),
      begin: loggerLevelUtils.setFunctionName(function (t) {
        this.conditionStack.push(t);
      }, "begin"),
      popState: loggerLevelUtils.setFunctionName(function () {
        if (this.conditionStack.length - 1 > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      }, "popState"),
      _currentRules: loggerLevelUtils.setFunctionName(function () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions.INITIAL.rules;
        }
      }, "_currentRules"),
      topState: loggerLevelUtils.setFunctionName(function (t) {
        if ((t = this.conditionStack.length - 1 - Math.abs(t || 0)) >= 0) {
          return this.conditionStack[t];
        } else {
          return "INITIAL";
        }
      }, "topState"),
      pushState: loggerLevelUtils.setFunctionName(function (t) {
        this.begin(t);
      }, "pushState"),
      stateStackSize: loggerLevelUtils.setFunctionName(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true
      },
      performAction: loggerLevelUtils.setFunctionName(function (t, e, i, n) {
        switch (i) {
          case 0:
          case 1:
          case 3:
          case 4:
            break;
          case 2:
            return 10;
          case 5:
            return 4;
          case 6:
            return 11;
          case 7:
            this.begin("acc_title");
            return 12;
          case 8:
            this.popState();
            return "acc_title_value";
          case 9:
            this.begin("acc_descr");
            return 14;
          case 10:
            this.popState();
            return "acc_descr_value";
          case 11:
            this.begin("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            return 17;
          case 15:
            return 18;
          case 16:
            return 19;
          case 17:
            return ":";
          case 18:
            return 6;
          case 19:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:journey\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: {
        acc_descr_multiline: {
          rules: [12, 13],
          inclusive: false
        },
        acc_descr: {
          rules: [10],
          inclusive: false
        },
        acc_title: {
          rules: [8],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19],
          inclusive: true
        }
      }
    };
    function u() {
      this.yy = {};
    }
    c.lexer = h;
    loggerLevelUtils.setFunctionName(u, "Parser");
    u.prototype = c;
    c.Parser = u;
    return new u();
  }();
  o.parser = o;
  var c = "";
  var h = [];
  var u = [];
  var y = [];
  var p = loggerLevelUtils.setFunctionName(function () {
    h.length = 0;
    u.length = 0;
    c = "";
    y.length = 0;
    mermaidConfigUtils_1.clearCommonDb();
  }, "clear");
  var d = loggerLevelUtils.setFunctionName(function (t) {
    c = t;
    h.push(t);
  }, "addSection");
  var f = loggerLevelUtils.setFunctionName(function () {
    return h;
  }, "getSections");
  var g = loggerLevelUtils.setFunctionName(function () {
    let t = _();
    let e = 0;
    while (!t && e < 100) {
      t = _();
      e++;
    }
    u.push(...y);
    return u;
  }, "getTasks");
  var x = loggerLevelUtils.setFunctionName(function () {
    let t = [];
    u.forEach(e => {
      if (e.people) {
        t.push(...e.people);
      }
    });
    return [...new Set(t)].sort();
  }, "updateActors");
  var m = loggerLevelUtils.setFunctionName(function (t, e) {
    let i = e.substr(1).split(":");
    let n = 0;
    let r = [];
    if (i.length === 1) {
      n = Number(i[0]);
      r = [];
    } else {
      n = Number(i[0]);
      r = i[1].split(",");
    }
    let a = r.map(t => t.trim());
    let s = {
      section: c,
      type: c,
      people: a,
      task: t,
      score: n
    };
    y.push(s);
  }, "addTask");
  var k = loggerLevelUtils.setFunctionName(function (t) {
    let e = {
      section: c,
      type: c,
      description: t,
      task: t,
      classes: []
    };
    u.push(e);
  }, "addTaskOrg");
  var _ = loggerLevelUtils.setFunctionName(function () {
    let t = loggerLevelUtils.setFunctionName(function (t) {
      return y[t].processed;
    }, "compileTask");
    let e = true;
    for (let [i, n] of y.entries()) {
      t(i);
      e = e && n.processed;
    }
    return e;
  }, "compileTasks");
  var b = loggerLevelUtils.setFunctionName(function () {
    return x();
  }, "getActors");
  var v = {
    getConfig: loggerLevelUtils.setFunctionName(() => mermaidConfigUtils_1.getConfigAlias().journey, "getConfig"),
    clear: p,
    setDiagramTitle: mermaidConfigUtils_1.setDiagramTitle,
    getDiagramTitle: mermaidConfigUtils_1.getDiagramTitle,
    setAccTitle: mermaidConfigUtils_1.setAccTitle,
    getAccTitle: mermaidConfigUtils_1.getAccTitle,
    setAccDescription: mermaidConfigUtils_1.setAccDescription,
    getAccDescription: mermaidConfigUtils_1.getAccDescription,
    addSection: d,
    getSections: f,
    getTasks: g,
    addTask: m,
    addTaskOrg: k,
    getActors: b
  };
  var w = loggerLevelUtils.setFunctionName(t => `.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor ? `fill: ${t.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0 ? `fill: ${t.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0 ? `fill: ${t.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0 ? `fill: ${t.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0 ? `fill: ${t.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0 ? `fill: ${t.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0 ? `fill: ${t.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0 ? `fill: ${t.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0 ? `fill: ${t.fillType7}` : ""};
  }

  .actor-0 {
    ${t.actor0 ? `fill: ${t.actor0}` : ""};
  }
  .actor-1 {
    ${t.actor1 ? `fill: ${t.actor1}` : ""};
  }
  .actor-2 {
    ${t.actor2 ? `fill: ${t.actor2}` : ""};
  }
  .actor-3 {
    ${t.actor3 ? `fill: ${t.actor3}` : ""};
  }
  .actor-4 {
    ${t.actor4 ? `fill: ${t.actor4}` : ""};
  }
  .actor-5 {
    ${t.actor5 ? `fill: ${t.actor5}` : ""};
  }
  ${fontAwesomeIconStylesHelper.getIconStyles()}
`, "getStyles");
  var W = loggerLevelUtils.setFunctionName(function (t, e) {
    return mermaidShapeDrawingUtils.drawRect(t, e);
  }, "drawRect");
  var $ = loggerLevelUtils.setFunctionName(function (t, e) {
    let i = t.append("circle").attr("cx", e.cx).attr("cy", e.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible");
    let n = t.append("g");
    function r(t) {
      let i = axisAndZoomUtilities.Nb1().startAngle(Math.PI / 2).endAngle(Math.PI / 2 * 3).innerRadius(7.5).outerRadius(15 / 2.2);
      t.append("path").attr("class", "mouth").attr("d", i).attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
    }
    function a(t) {
      let i = axisAndZoomUtilities.Nb1().startAngle(Math.PI * 3 / 2).endAngle(Math.PI / 2 * 5).innerRadius(7.5).outerRadius(15 / 2.2);
      t.append("path").attr("class", "mouth").attr("d", i).attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
    }
    function o(t) {
      t.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", e.cx - 5).attr("y1", e.cy + 7).attr("x2", e.cx + 5).attr("y2", e.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
    }
    n.append("circle").attr("cx", e.cx - 5).attr("cy", e.cy - 5).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
    n.append("circle").attr("cx", e.cx + 5).attr("cy", e.cy - 5).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
    loggerLevelUtils.setFunctionName(r, "smile");
    loggerLevelUtils.setFunctionName(a, "sad");
    loggerLevelUtils.setFunctionName(o, "ambivalent");
    if (e.score > 3) {
      r(n);
    } else if (e.score < 3) {
      a(n);
    } else {
      o(n);
    }
    return i;
  }, "drawFace");
  var M = loggerLevelUtils.setFunctionName(function (t, e) {
    let i = t.append("circle");
    i.attr("cx", e.cx);
    i.attr("cy", e.cy);
    i.attr("class", "actor-" + e.pos);
    i.attr("fill", e.fill);
    i.attr("stroke", e.stroke);
    i.attr("r", e.r);
    if (i.class !== undefined) {
      i.attr("class", i.class);
    }
    if (e.title !== undefined) {
      i.append("title").text(e.title);
    }
    return i;
  }, "drawCircle");
  var T = loggerLevelUtils.setFunctionName(function (t, e) {
    return mermaidShapeDrawingUtils.drawText(t, e);
  }, "drawText");
  var E = loggerLevelUtils.setFunctionName(function (t, e, i) {
    let r = t.append("g");
    let a = mermaidShapeDrawingUtils.getNoteRect();
    a.x = e.x;
    a.y = e.y;
    a.fill = e.fill;
    a.width = i.width * e.taskCount + i.diagramMarginX * (e.taskCount - 1);
    a.height = i.height;
    a.class = "journey-section section-type-" + e.num;
    a.rx = 3;
    a.ry = 3;
    W(r, a);
    C(i)(e.text, r, a.x, a.y, a.width, a.height, {
      class: "journey-section section-type-" + e.num
    }, i, e.colour);
  }, "drawSection");
  var S = -1;
  var A = loggerLevelUtils.setFunctionName(function (t, e, i) {
    let r = e.x + i.width / 2;
    let a = t.append("g");
    S++;
    a.append("line").attr("id", "task" + S).attr("x1", r).attr("y1", e.y).attr("x2", r).attr("y2", 450).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666");
    $(a, {
      cx: r,
      cy: 300 + (5 - e.score) * 30,
      score: e.score
    });
    let s = mermaidShapeDrawingUtils.getNoteRect();
    s.x = e.x;
    s.y = e.y;
    s.fill = e.fill;
    s.width = i.width;
    s.height = i.height;
    s.class = "task task-type-" + e.num;
    s.rx = 3;
    s.ry = 3;
    W(a, s);
    let l = e.x + 14;
    e.people.forEach(t => {
      let i = e.actors[t].color;
      M(a, {
        cx: l,
        cy: e.y,
        r: 7,
        fill: i,
        stroke: "#000",
        title: t,
        pos: e.actors[t].position
      });
      l += 10;
    });
    C(i)(e.task, a, s.x, s.y, s.width, s.height, {
      class: "task"
    }, i, e.colour);
  }, "drawTask");
  var C = function () {
    function t(t, e, i, r, a, s, l, o) {
      n(e.append("text").attr("x", i + a / 2).attr("y", r + s / 2 + 5).style("font-color", o).style("text-anchor", "middle").text(t), l);
    }
    function e(t, e, i, r, a, s, l, o, c) {
      let {
        taskFontSize: h,
        taskFontFamily: u
      } = o;
      let y = t.split(/<br\s*\/?>/gi);
      for (let t = 0; t < y.length; t++) {
        let o = t * h - h * (y.length - 1) / 2;
        let p = e.append("text").attr("x", i + a / 2).attr("y", r).attr("fill", c).style("text-anchor", "middle").style("font-size", h).style("font-family", u);
        p.append("tspan").attr("x", i + a / 2).attr("dy", o).text(y[t]);
        p.attr("y", r + s / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central");
        n(p, l);
      }
    }
    function i(t, i, r, a, s, l, o, c) {
      let h = i.append("switch");
      let u = h.append("foreignObject").attr("x", r).attr("y", a).attr("width", s).attr("height", l).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
      u.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(t);
      e(t, h, r, a, s, l, o, c);
      n(u, o);
    }
    function n(t, e) {
      for (let i in e) {
        if (i in e) {
          t.attr(i, e[i]);
        }
      }
    }
    loggerLevelUtils.setFunctionName(t, "byText");
    loggerLevelUtils.setFunctionName(e, "byTspan");
    loggerLevelUtils.setFunctionName(i, "byFo");
    loggerLevelUtils.setFunctionName(n, "_setTextAttrs");
    return function (n) {
      if (n.textPlacement === "fo") {
        return i;
      } else if (n.textPlacement === "old") {
        return t;
      } else {
        return e;
      }
    };
  }();
  var I = {
    drawCircle: M,
    drawSection: E,
    drawText: T,
    drawTask: A,
    initGraphics: loggerLevelUtils.setFunctionName(function (t) {
      t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
    }, "initGraphics")
  };
  var P = loggerLevelUtils.setFunctionName(function (t) {
    Object.keys(t).forEach(function (e) {
      L[e] = t[e];
    });
  }, "setConf");
  var j = {};
  var V = 0;
  function D(t) {
    let e = mermaidConfigUtils_1.getConfigAlias().journey;
    let i = e.maxLabelWidth;
    V = 0;
    let n = 60;
    Object.keys(j).forEach(r => {
      let a = j[r].color;
      let s = {
        cx: 20,
        cy: n,
        r: 7,
        fill: a,
        stroke: "#000",
        pos: j[r].position
      };
      I.drawCircle(t, s);
      let l = t.append("text").attr("visibility", "hidden").text(r);
      let o = l.node().getBoundingClientRect().width;
      l.remove();
      let c = [];
      if (o <= i) {
        c = [r];
      } else {
        let e = r.split(" ");
        let n = "";
        l = t.append("text").attr("visibility", "hidden");
        e.forEach(t => {
          let e = n ? `${n} ${t}` : t;
          l.text(e);
          if (l.node().getBoundingClientRect().width > i) {
            if (n) {
              c.push(n);
            }
            n = t;
            l.text(t);
            if (l.node().getBoundingClientRect().width > i) {
              let e = "";
              for (let n of t) {
                e += n;
                l.text(e + "-");
                if (l.node().getBoundingClientRect().width > i) {
                  c.push(e.slice(0, -1) + "-");
                  e = n;
                }
              }
              n = e;
            }
          } else {
            n = e;
          }
        });
        if (n) {
          c.push(n);
        }
        l.remove();
      }
      c.forEach((i, r) => {
        let s = {
          x: 40,
          y: n + 7 + r * 20,
          fill: "#666",
          text: i,
          textMargin: e.boxTextMargin ?? 5
        };
        let l = I.drawText(t, s).node().getBoundingClientRect().width;
        if (l > V && l > e.leftMargin - l) {
          V = l;
        }
      });
      n += Math.max(20, c.length * 20);
    });
  }
  loggerLevelUtils.setFunctionName(D, "drawActorLegend");
  var L = mermaidConfigUtils_1.getConfigAlias().journey;
  var O = 0;
  var B = loggerLevelUtils.setFunctionName(function (t, e, i, n) {
    let r;
    let s = mermaidConfigUtils_1.getConfigAlias();
    let o = s.journey.titleColor;
    let c = s.journey.titleFontSize;
    let h = s.journey.titleFontFamily;
    let u = s.securityLevel;
    if (u === "sandbox") {
      r = axisAndZoomUtilities.select("#i" + e);
    }
    let y = u === "sandbox" ? axisAndZoomUtilities.select(r.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body");
    F.init();
    let p = y.select("#" + e);
    I.initGraphics(p);
    let d = n.db.getTasks();
    let f = n.db.getDiagramTitle();
    let g = n.db.getActors();
    for (let t in j) {
      delete j[t];
    }
    let x = 0;
    g.forEach(t => {
      j[t] = {
        color: L.actorColours[x % L.actorColours.length],
        position: x
      };
      x++;
    });
    D(p);
    O = L.leftMargin + V;
    F.insert(0, 0, O, Object.keys(j).length * 50);
    z(p, d, 0);
    let m = F.getBounds();
    if (f) {
      p.append("text").text(f).attr("x", O).attr("font-size", c).attr("font-weight", "bold").attr("y", 25).attr("fill", o).attr("font-family", h);
    }
    let k = m.stopy - m.starty + L.diagramMarginY * 2;
    let _ = O + m.stopx + L.diagramMarginX * 2;
    mermaidConfigUtils_1.configureSvgSize(p, k, _, L.useMaxWidth);
    p.append("line").attr("x1", O).attr("y1", L.height * 4).attr("x2", _ - O - 4).attr("y2", L.height * 4).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
    let b = !!f * 70;
    p.attr("viewBox", `${m.startx} -25 ${_} ${k + b}`);
    p.attr("preserveAspectRatio", "xMinYMin meet");
    p.attr("height", k + b + 25);
  }, "draw");
  var F = {
    data: {
      startx: undefined,
      stopx: undefined,
      starty: undefined,
      stopy: undefined
    },
    verticalPos: 0,
    sequenceItems: [],
    init: loggerLevelUtils.setFunctionName(function () {
      this.sequenceItems = [];
      this.data = {
        startx: undefined,
        stopx: undefined,
        starty: undefined,
        stopy: undefined
      };
      this.verticalPos = 0;
    }, "init"),
    updateVal: loggerLevelUtils.setFunctionName(function (t, e, i, n) {
      if (t[e] === undefined) {
        t[e] = i;
      } else {
        t[e] = n(i, t[e]);
      }
    }, "updateVal"),
    updateBounds: loggerLevelUtils.setFunctionName(function (t, e, i, n) {
      let r = mermaidConfigUtils_1.getConfigAlias().journey;
      let l = this;
      let o = 0;
      function c(a) {
        return loggerLevelUtils.setFunctionName(function (s) {
          o++;
          let c = l.sequenceItems.length - o + 1;
          l.updateVal(s, "starty", e - c * r.boxMargin, Math.min);
          l.updateVal(s, "stopy", n + c * r.boxMargin, Math.max);
          l.updateVal(F.data, "startx", t - c * r.boxMargin, Math.min);
          l.updateVal(F.data, "stopx", i + c * r.boxMargin, Math.max);
          if (a !== "activation") {
            l.updateVal(s, "startx", t - c * r.boxMargin, Math.min);
            l.updateVal(s, "stopx", i + c * r.boxMargin, Math.max);
            l.updateVal(F.data, "starty", e - c * r.boxMargin, Math.min);
            l.updateVal(F.data, "stopy", n + c * r.boxMargin, Math.max);
          }
        }, "updateItemBounds");
      }
      loggerLevelUtils.setFunctionName(c, "updateFn");
      this.sequenceItems.forEach(c());
    }, "updateBounds"),
    insert: loggerLevelUtils.setFunctionName(function (t, e, i, n) {
      let r = Math.min(t, i);
      let a = Math.max(t, i);
      let s = Math.min(e, n);
      let l = Math.max(e, n);
      this.updateVal(F.data, "startx", r, Math.min);
      this.updateVal(F.data, "starty", s, Math.min);
      this.updateVal(F.data, "stopx", a, Math.max);
      this.updateVal(F.data, "stopy", l, Math.max);
      this.updateBounds(r, s, a, l);
    }, "insert"),
    bumpVerticalPos: loggerLevelUtils.setFunctionName(function (t) {
      this.verticalPos = this.verticalPos + t;
      this.data.stopy = this.verticalPos;
    }, "bumpVerticalPos"),
    getVerticalPos: loggerLevelUtils.setFunctionName(function () {
      return this.verticalPos;
    }, "getVerticalPos"),
    getBounds: loggerLevelUtils.setFunctionName(function () {
      return this.data;
    }, "getBounds")
  };
  var N = L.sectionFills;
  var R = L.sectionColours;
  var z = loggerLevelUtils.setFunctionName(function (t, e, i) {
    let n = mermaidConfigUtils_1.getConfigAlias().journey;
    let r = "";
    let s = i + (n.height * 2 + n.diagramMarginY);
    let l = 0;
    let o = "#CCC";
    let c = "black";
    let h = 0;
    for (let [i, a] of e.entries()) {
      if (r !== a.section) {
        o = N[l % N.length];
        h = l % N.length;
        c = R[l % R.length];
        let s = 0;
        let u = a.section;
        for (let t = i; t < e.length; t++) {
          if (e[t].section == u) {
            s += 1;
          } else {
            break;
          }
        }
        let y = {
          x: i * n.taskMargin + i * n.width + O,
          y: 50,
          text: a.section,
          fill: o,
          num: h,
          colour: c,
          taskCount: s
        };
        I.drawSection(t, y, n);
        r = a.section;
        l++;
      }
      let u = a.people.reduce((t, e) => {
        if (j[e]) {
          t[e] = j[e];
        }
        return t;
      }, {});
      a.x = i * n.taskMargin + i * n.width + O;
      a.y = s;
      a.width = n.diagramMarginX;
      a.height = n.diagramMarginY;
      a.colour = c;
      a.fill = o;
      a.num = h;
      a.actors = u;
      I.drawTask(t, a, n);
      F.insert(a.x, a.y, a.x + a.width + n.taskMargin, 450);
    }
  }, "drawTasks");
  var U = {
    setConf: P,
    draw: B
  };
  var Y = {
    parser: o,
    db: v,
    renderer: U,
    styles: w,
    init: loggerLevelUtils.setFunctionName(t => {
      U.setConf(t.journey);
      v.clear();
    }, "init")
  };
  require.d(exports, {
    diagram: function () {
      return Y;
    }
  });
}