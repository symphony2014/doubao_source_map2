// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'r' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 's' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Renamed variable 'a' to 'colorDarknessUtil'
// - Resolved require(99164) to 'color-darkness-util'
// - Renamed variable 'l' to 'colorLightnessAdjuster'
// - Resolved require(695366) to 'color-lightness-adjuster'
// - Renamed variable 'o' to 'colorLightnessHelper'
// - Resolved require(366687) to 'color-lightness-helper'
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'r2' to 'defineProperties' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'LJ' to 'commonDb' (module 401926)
// - Updated imported property 'ZH' to 'clearCommonDb' (module 401926)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'j7' to 'setupViewbox' (module 401926)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'Z' to 'isColorDark' (module 99164)
// - Updated imported property 'Z' to 'adjustLightness' (module 695366)
// - Updated imported property 'Z' to 'adjustLightness' (module 366687)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23501.64e3412f.js
         * chunkId: 23501
         * moduleId: 546590
         */
module.exports = function (module, exports, require) {
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var colorDarknessUtil = require("color-darkness-util") /*id: 99164*/;
  var colorLightnessAdjuster = require("color-lightness-adjuster") /*id: 695366*/;
  var colorLightnessHelper = require("color-lightness-helper") /*id: 366687*/;
  var c = function () {
    var t = loggerLevelUtils.setFunctionName(function (t, e, n, i) {
      n = n || {};
      i = t.length;
      for (; i--; n[t[i]] = e);
      return n;
    }, "o");
    var e = [6, 8, 10, 11, 12, 14, 16, 17, 20, 21];
    var n = [1, 9];
    var i = [1, 10];
    var s = [1, 11];
    var a = [1, 12];
    var l = [1, 13];
    var o = [1, 16];
    var c = [1, 17];
    var h = {
      trace: loggerLevelUtils.setFunctionName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        timeline: 4,
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
        period_statement: 18,
        event_statement: 19,
        period: 20,
        event: 21,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "timeline",
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
        20: "period",
        21: "event"
      },
      productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 1], [18, 1], [19, 1]],
      performAction: loggerLevelUtils.setFunctionName(function (t, e, n, i, r, s, a) {
        var l = s.length - 1;
        switch (r) {
          case 1:
            return s[l - 1];
          case 2:
          case 6:
          case 7:
            this.$ = [];
            break;
          case 3:
            s[l - 1].push(s[l]);
            this.$ = s[l - 1];
            break;
          case 4:
          case 5:
            this.$ = s[l];
            break;
          case 8:
            i.getCommonDb().setDiagramTitle(s[l].substr(6));
            this.$ = s[l].substr(6);
            break;
          case 9:
            this.$ = s[l].trim();
            i.getCommonDb().setAccTitle(this.$);
            break;
          case 10:
          case 11:
            this.$ = s[l].trim();
            i.getCommonDb().setAccDescription(this.$);
            break;
          case 12:
            i.addSection(s[l].substr(8));
            this.$ = s[l].substr(8);
            break;
          case 15:
            i.addTask(s[l], 0, "");
            this.$ = s[l];
            break;
          case 16:
            i.addEvent(s[l].substr(2));
            this.$ = s[l];
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
        11: n,
        12: i,
        14: s,
        16: a,
        17: l,
        18: 14,
        19: 15,
        20: o,
        21: c
      }, t(e, [2, 7], {
        1: [2, 1]
      }), t(e, [2, 3]), {
        9: 18,
        11: n,
        12: i,
        14: s,
        16: a,
        17: l,
        18: 14,
        19: 15,
        20: o,
        21: c
      }, t(e, [2, 5]), t(e, [2, 6]), t(e, [2, 8]), {
        13: [1, 19]
      }, {
        15: [1, 20]
      }, t(e, [2, 11]), t(e, [2, 12]), t(e, [2, 13]), t(e, [2, 14]), t(e, [2, 15]), t(e, [2, 16]), t(e, [2, 4]), t(e, [2, 9]), t(e, [2, 10])],
      defaultActions: {},
      parseError: loggerLevelUtils.setFunctionName(function (t, e) {
        if (e.recoverable) {
          this.trace(t);
        } else {
          var n = Error(t);
          n.hash = e;
          throw n;
        }
      }, "parseError"),
      parse: loggerLevelUtils.setFunctionName(function (t) {
        var e = this;
        var n = [0];
        var i = [];
        var s = [null];
        var a = [];
        var l = this.table;
        var o = "";
        var c = 0;
        var h = 0;
        var d = 0;
        var u = a.slice.call(arguments, 1);
        var p = Object.create(this.lexer);
        var y = {
          yy: {}
        };
        for (var g in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, g)) {
            y.yy[g] = this.yy[g];
          }
        }
        p.setInput(t, y.yy);
        y.yy.lexer = p;
        y.yy.parser = this;
        if (p.yylloc === undefined) {
          p.yylloc = {};
        }
        var f = p.yylloc;
        a.push(f);
        var m = p.options && p.options.ranges;
        function x() {
          var t;
          if (typeof (t = i.pop() || p.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (i = t).pop();
            }
            t = e.symbols_[t] || t;
          }
          return t;
        }
        if (typeof y.yy.parseError == "function") {
          this.parseError = y.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        loggerLevelUtils.setFunctionName(function (t) {
          n.length = n.length - t * 2;
          s.length = s.length - t;
          a.length = a.length - t;
        }, "popStack");
        loggerLevelUtils.setFunctionName(x, "lex");
        var _;
        var b;
        var k;
        var v;
        var W;
        var w;
        var S;
        var $;
        var E;
        var M = {};
        while (true) {
          k = n[n.length - 1];
          if (this.defaultActions[k]) {
            v = this.defaultActions[k];
          } else {
            if (_ == null) {
              _ = x();
            }
            v = l[k] && l[k][_];
          }
          if (v === undefined || !v.length || !v[0]) {
            var I = "";
            E = [];
            for (w in l[k]) {
              if (this.terminals_[w] && w > 2) {
                E.push("'" + this.terminals_[w] + "'");
              }
            }
            I = p.showPosition ? "Parse error on line " + (c + 1) + ":\n" + p.showPosition() + "\nExpecting " + E.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (_ == 1 ? "end of input" : "'" + (this.terminals_[_] || _) + "'");
            this.parseError(I, {
              text: p.match,
              token: this.terminals_[_] || _,
              line: p.yylineno,
              loc: f,
              expected: E
            });
          }
          if (v[0] instanceof Array && v.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + k + ", token: " + _);
          }
          switch (v[0]) {
            case 1:
              n.push(_);
              s.push(p.yytext);
              a.push(p.yylloc);
              n.push(v[1]);
              _ = null;
              if (b) {
                _ = b;
                b = null;
              } else {
                h = p.yyleng;
                o = p.yytext;
                c = p.yylineno;
                f = p.yylloc;
                if (d > 0) {
                  d--;
                }
              }
              break;
            case 2:
              S = this.productions_[v[1]][1];
              M.$ = s[s.length - S];
              M._$ = {
                first_line: a[a.length - (S || 1)].first_line,
                last_line: a[a.length - 1].last_line,
                first_column: a[a.length - (S || 1)].first_column,
                last_column: a[a.length - 1].last_column
              };
              if (m) {
                M._$.range = [a[a.length - (S || 1)].range[0], a[a.length - 1].range[1]];
              }
              if ((W = this.performAction.apply(M, [o, h, c, y.yy, v[1], s, a].concat(u))) !== undefined) {
                return W;
              }
              if (S) {
                n = n.slice(0, S * -1 * 2);
                s = s.slice(0, S * -1);
                a = a.slice(0, S * -1);
              }
              n.push(this.productions_[v[1]][0]);
              s.push(M.$);
              a.push(M._$);
              $ = l[n[n.length - 2]][n[n.length - 1]];
              n.push($);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var d = {
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
        var n = t.split(/(?:\r\n?|\n)/g);
        this._input = t + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - e);
        this.offset -= e;
        var i = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (n.length - 1) {
          this.yylineno -= n.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length : this.yylloc.first_column - e
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
        var n;
        var i;
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
        if (i = t[0].match(/(?:\r\n?|\n).*/g)) {
          this.yylineno += i.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
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
        n = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (n) {
          return n;
        }
        if (this._backtrack) {
          for (var s in r) {
            this[s] = r[s];
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
        var n;
        var i;
        var r = this._currentRules();
        var s = 0;
        for (; s < r.length; s++) {
          if ((n = this._input.match(this.rules[r[s]])) && (!e || n[0].length > e[0].length)) {
            e = n;
            i = s;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(n, r[s])) !== false) {
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
          return (t = this.test_match(e, r[i])) !== false && t;
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
      performAction: loggerLevelUtils.setFunctionName(function (t, e, n, i) {
        switch (n) {
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
            return 21;
          case 16:
            return 20;
          case 17:
            return 6;
          case 18:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:timeline\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^:\n]+)/i, /^(?::\s(?:[^:\n]|:(?!\s))+)/i, /^(?:[^#:\n]+)/i, /^(?:$)/i, /^(?:.)/i],
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
          rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18],
          inclusive: true
        }
      }
    };
    function u() {
      this.yy = {};
    }
    h.lexer = d;
    loggerLevelUtils.setFunctionName(u, "Parser");
    u.prototype = h;
    h.Parser = u;
    return new u();
  }();
  c.parser = c;
  var h = {};
  loggerLevelUtils.defineProperties(h, {
    addEvent: () => v,
    addSection: () => x,
    addTask: () => k,
    addTaskOrg: () => W,
    clear: () => m,
    default: () => S,
    getCommonDb: () => f,
    getSections: () => _,
    getTasks: () => b
  });
  var d = "";
  var u = 0;
  var p = [];
  var y = [];
  var g = [];
  var f = loggerLevelUtils.setFunctionName(() => mermaidConfigUtils_1.commonDb, "getCommonDb");
  var m = loggerLevelUtils.setFunctionName(function () {
    p.length = 0;
    y.length = 0;
    d = "";
    g.length = 0;
    mermaidConfigUtils_1.clearCommonDb();
  }, "clear");
  var x = loggerLevelUtils.setFunctionName(function (t) {
    d = t;
    p.push(t);
  }, "addSection");
  var _ = loggerLevelUtils.setFunctionName(function () {
    return p;
  }, "getSections");
  var b = loggerLevelUtils.setFunctionName(function () {
    let t = w();
    let e = 0;
    while (!t && e < 100) {
      t = w();
      e++;
    }
    y.push(...g);
    return y;
  }, "getTasks");
  var k = loggerLevelUtils.setFunctionName(function (t, e, n) {
    let i = {
      id: u++,
      section: d,
      type: d,
      task: t,
      score: e || 0,
      events: n ? [n] : []
    };
    g.push(i);
  }, "addTask");
  var v = loggerLevelUtils.setFunctionName(function (t) {
    g.find(t => t.id === u - 1).events.push(t);
  }, "addEvent");
  var W = loggerLevelUtils.setFunctionName(function (t) {
    let e = {
      section: d,
      type: d,
      description: t,
      task: t,
      classes: []
    };
    y.push(e);
  }, "addTaskOrg");
  var w = loggerLevelUtils.setFunctionName(function () {
    let t = loggerLevelUtils.setFunctionName(function (t) {
      return g[t].processed;
    }, "compileTask");
    let e = true;
    for (let [n, i] of g.entries()) {
      t(n);
      e = e && i.processed;
    }
    return e;
  }, "compileTasks");
  var S = {
    clear: m,
    getCommonDb: f,
    addSection: x,
    getSections: _,
    getTasks: b,
    addTask: k,
    addTaskOrg: W,
    addEvent: v
  };
  var $ = loggerLevelUtils.setFunctionName(function (t, e) {
    let n = t.append("rect");
    n.attr("x", e.x);
    n.attr("y", e.y);
    n.attr("fill", e.fill);
    n.attr("stroke", e.stroke);
    n.attr("width", e.width);
    n.attr("height", e.height);
    n.attr("rx", e.rx);
    n.attr("ry", e.ry);
    if (e.class !== undefined) {
      n.attr("class", e.class);
    }
    return n;
  }, "drawRect");
  var E = loggerLevelUtils.setFunctionName(function (t, e) {
    let n = t.append("circle").attr("cx", e.cx).attr("cy", e.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible");
    let i = t.append("g");
    function a(t) {
      let n = axisAndZoomUtilities.Nb1().startAngle(Math.PI / 2).endAngle(Math.PI / 2 * 3).innerRadius(7.5).outerRadius(15 / 2.2);
      t.append("path").attr("class", "mouth").attr("d", n).attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
    }
    function l(t) {
      let n = axisAndZoomUtilities.Nb1().startAngle(Math.PI * 3 / 2).endAngle(Math.PI / 2 * 5).innerRadius(7.5).outerRadius(15 / 2.2);
      t.append("path").attr("class", "mouth").attr("d", n).attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
    }
    function o(t) {
      t.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", e.cx - 5).attr("y1", e.cy + 7).attr("x2", e.cx + 5).attr("y2", e.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
    }
    i.append("circle").attr("cx", e.cx - 5).attr("cy", e.cy - 5).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
    i.append("circle").attr("cx", e.cx + 5).attr("cy", e.cy - 5).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
    loggerLevelUtils.setFunctionName(a, "smile");
    loggerLevelUtils.setFunctionName(l, "sad");
    loggerLevelUtils.setFunctionName(o, "ambivalent");
    if (e.score > 3) {
      a(i);
    } else if (e.score < 3) {
      l(i);
    } else {
      o(i);
    }
    return n;
  }, "drawFace");
  var M = loggerLevelUtils.setFunctionName(function (t, e) {
    let n = e.text.replace(/<br\s*\/?>/gi, " ");
    let i = t.append("text");
    i.attr("x", e.x);
    i.attr("y", e.y);
    i.attr("class", "legend");
    i.style("text-anchor", e.anchor);
    if (e.class !== undefined) {
      i.attr("class", e.class);
    }
    let r = i.append("tspan");
    r.attr("x", e.x + e.textMargin * 2);
    r.text(n);
    return i;
  }, "drawText");
  var I = -1;
  var A = loggerLevelUtils.setFunctionName(function () {
    return {
      x: 0,
      y: 0,
      width: 100,
      anchor: "start",
      height: 100,
      rx: 0,
      ry: 0
    };
  }, "getNoteRect");
  var T = function () {
    function t(t, e, n, r, s, a, l, o) {
      i(e.append("text").attr("x", n + s / 2).attr("y", r + a / 2 + 5).style("font-color", o).style("text-anchor", "middle").text(t), l);
    }
    function e(t, e, n, r, s, a, l, o, c) {
      let {
        taskFontSize: h,
        taskFontFamily: d
      } = o;
      let u = t.split(/<br\s*\/?>/gi);
      for (let t = 0; t < u.length; t++) {
        let o = t * h - h * (u.length - 1) / 2;
        let p = e.append("text").attr("x", n + s / 2).attr("y", r).attr("fill", c).style("text-anchor", "middle").style("font-size", h).style("font-family", d);
        p.append("tspan").attr("x", n + s / 2).attr("dy", o).text(u[t]);
        p.attr("y", r + a / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central");
        i(p, l);
      }
    }
    function n(t, n, r, s, a, l, o, c) {
      let h = n.append("switch");
      let d = h.append("foreignObject").attr("x", r).attr("y", s).attr("width", a).attr("height", l).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
      d.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(t);
      e(t, h, r, s, a, l, o, c);
      i(d, o);
    }
    function i(t, e) {
      for (let n in e) {
        if (n in e) {
          t.attr(n, e[n]);
        }
      }
    }
    loggerLevelUtils.setFunctionName(t, "byText");
    loggerLevelUtils.setFunctionName(e, "byTspan");
    loggerLevelUtils.setFunctionName(n, "byFo");
    loggerLevelUtils.setFunctionName(i, "_setTextAttrs");
    return function (i) {
      if (i.textPlacement === "fo") {
        return n;
      } else if (i.textPlacement === "old") {
        return t;
      } else {
        return e;
      }
    };
  }();
  var L = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
  }, "initGraphics");
  function N(t, e) {
    t.each(function () {
      var t;
      var n = axisAndZoomUtilities.select(this);
      var i = n.text().split(/(\s+|<br>)/).reverse();
      var r = [];
      var a = n.attr("y");
      var l = parseFloat(n.attr("dy"));
      var o = n.text(null).append("tspan").attr("x", 0).attr("y", a).attr("dy", l + "em");
      for (let s = 0; s < i.length; s++) {
        t = i[i.length - 1 - s];
        r.push(t);
        o.text(r.join(" ").trim());
        if (o.node().getComputedTextLength() > e || t === "<br>") {
          r.pop();
          o.text(r.join(" ").trim());
          r = t === "<br>" ? [""] : [t];
          o = n.append("tspan").attr("x", 0).attr("y", a).attr("dy", "1.1em").text(t);
        }
      }
    });
  }
  loggerLevelUtils.setFunctionName(N, "wrap");
  var H = loggerLevelUtils.setFunctionName(function (t, e, n, i) {
    let s = n % 12 - 1;
    let a = t.append("g");
    e.section = s;
    a.attr("class", (e.class ? e.class + " " : "") + "timeline-node section-" + s);
    let l = a.append("g");
    let o = a.append("g");
    let c = o.append("text").text(e.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(N, e.width).node().getBBox();
    let h = i.fontSize?.replace ? i.fontSize.replace("px", "") : i.fontSize;
    e.height = c.height + h * 0.55 + e.padding;
    e.height = Math.max(e.height, e.maxHeight);
    e.width = e.width + e.padding * 2;
    o.attr("transform", "translate(" + e.width / 2 + ", " + e.padding / 2 + ")");
    O(l, e, s, i);
    return e;
  }, "drawNode");
  var C = loggerLevelUtils.setFunctionName(function (t, e, n) {
    let r = t.append("g");
    let s = r.append("text").text(e.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(N, e.width).node().getBBox();
    let a = n.fontSize?.replace ? n.fontSize.replace("px", "") : n.fontSize;
    r.remove();
    return s.height + a * 0.55 + e.padding;
  }, "getVirtualNodeHeight");
  var O = loggerLevelUtils.setFunctionName(function (t, e, n) {
    t.append("path").attr("id", "node-" + e.id).attr("class", "node-bkg node-" + e.type).attr("d", `M0 ${e.height - 5} v${-e.height + 10} q0,-5 5,-5 h${e.width - 10} q5,0 5,5 v${e.height - 5} H0 Z`);
    t.append("line").attr("class", "node-line-" + n).attr("x1", 0).attr("y1", e.height).attr("x2", e.width).attr("y2", e.height);
  }, "defaultBkg");
  var P = {
    initGraphics: L,
    drawNode: H,
    getVirtualNodeHeight: C
  };
  var D = loggerLevelUtils.setFunctionName(function (t, e, n, a) {
    var u;
    let p;
    let y = mermaidConfigUtils_1.getConfigAlias();
    let g = y.timeline?.leftMargin ?? 50;
    loggerLevelUtils.logger.debug("timeline", a.db);
    let f = y.securityLevel;
    if (f === "sandbox") {
      p = axisAndZoomUtilities.select("#i" + e);
    }
    let m = (f === "sandbox" ? axisAndZoomUtilities.select(p.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body")).select("#" + e);
    m.append("g");
    let x = a.db.getTasks();
    let _ = a.db.getCommonDb().getDiagramTitle();
    loggerLevelUtils.logger.debug("task", x);
    P.initGraphics(m);
    let b = a.db.getSections();
    loggerLevelUtils.logger.debug("sections", b);
    let k = 0;
    let v = 0;
    let W = 0;
    let w = 0;
    let S = 50 + g;
    let $ = 50;
    w = 50;
    let E = 0;
    let M = true;
    b.forEach(function (t) {
      let e = {
        number: E,
        descr: t,
        section: E,
        width: 150,
        padding: 20,
        maxHeight: k
      };
      let n = P.getVirtualNodeHeight(m, e, y);
      loggerLevelUtils.logger.debug("sectionHeight before draw", n);
      k = Math.max(k, n + 20);
    });
    let I = 0;
    let A = 0;
    loggerLevelUtils.logger.debug("tasks.length", x.length);
    for (let [t, e] of x.entries()) {
      let n = {
        number: t,
        descr: e,
        section: e.section,
        width: 150,
        padding: 20,
        maxHeight: v
      };
      let i = P.getVirtualNodeHeight(m, n, y);
      loggerLevelUtils.logger.debug("taskHeight before draw", i);
      v = Math.max(v, i + 20);
      I = Math.max(I, e.events.length);
      let s = 0;
      for (let t of e.events) {
        let n = {
          descr: t,
          section: e.section,
          number: e.section,
          width: 150,
          padding: 20,
          maxHeight: 50
        };
        s += P.getVirtualNodeHeight(m, n, y);
      }
      if (e.events.length > 0) {
        s += (e.events.length - 1) * 10;
      }
      A = Math.max(A, s);
    }
    loggerLevelUtils.logger.debug("maxSectionHeight before draw", k);
    loggerLevelUtils.logger.debug("maxTaskHeight before draw", v);
    if (b && b.length > 0) {
      b.forEach(t => {
        let e = x.filter(e => e.section === t);
        let n = {
          number: E,
          descr: t,
          section: E,
          width: Math.max(e.length, 1) * 200 - 50,
          padding: 20,
          maxHeight: k
        };
        loggerLevelUtils.logger.debug("sectionNode", n);
        let i = m.append("g");
        let s = P.drawNode(i, n, E, y);
        loggerLevelUtils.logger.debug("sectionNode output", s);
        i.attr("transform", `translate(${S}, ${w})`);
        $ += k + 50;
        if (e.length > 0) {
          j(m, e, E, S, $, v, y, I, A, k, false);
        }
        S += Math.max(e.length, 1) * 200;
        $ = w;
        E++;
      });
    } else {
      M = false;
      j(m, x, E, S, $, v, y, I, A, k, true);
    }
    let T = m.node().getBBox();
    loggerLevelUtils.logger.debug("bounds", T);
    if (_) {
      m.append("text").text(_).attr("x", T.width / 2 - g).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20);
    }
    W = M ? k + v + 150 : v + 100;
    m.append("g").attr("class", "lineWrapper").append("line").attr("x1", g).attr("y1", W).attr("x2", T.width + g * 3).attr("y2", W).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
    mermaidConfigUtils_1.setupViewbox(undefined, m, y.timeline?.padding ?? 50, (u = y.timeline?.useMaxWidth) !== null && u !== undefined && u);
  }, "draw");
  var j = loggerLevelUtils.setFunctionName(function (t, e, n, i, s, a, l, o, c, h, d) {
    for (let o of e) {
      let e = {
        descr: o.task,
        section: n,
        number: n,
        width: 150,
        padding: 20,
        maxHeight: a
      };
      loggerLevelUtils.logger.debug("taskNode", e);
      let h = t.append("g").attr("class", "taskWrapper");
      let p = P.drawNode(h, e, n, l).height;
      loggerLevelUtils.logger.debug("taskHeight after draw", p);
      h.attr("transform", `translate(${i}, ${s})`);
      a = Math.max(a, p);
      if (o.events) {
        let e = t.append("g").attr("class", "lineWrapper");
        s += 100;
        z(t, o.events, n, i, s, l);
        s -= 100;
        e.append("line").attr("x1", i + 95).attr("y1", s + a).attr("x2", i + 95).attr("y2", s + a + 100 + c + 100).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", "url(#arrowhead)").attr("stroke-dasharray", "5,5");
      }
      i += 200;
      if (d && !l.timeline?.disableMulticolor) {
        n++;
      }
    }
  }, "drawTasks");
  var z = loggerLevelUtils.setFunctionName(function (t, e, n, i, s, a) {
    let l = 0;
    let o = s;
    s += 100;
    for (let o of e) {
      let e = {
        descr: o,
        section: n,
        number: n,
        width: 150,
        padding: 20,
        maxHeight: 50
      };
      loggerLevelUtils.logger.debug("eventNode", e);
      let c = t.append("g").attr("class", "eventWrapper");
      let h = P.drawNode(c, e, n, a).height;
      l += h;
      c.attr("transform", `translate(${i}, ${s})`);
      s = s + 10 + h;
    }
    s = o;
    return l;
  }, "drawEvents");
  var R = {
    setConf: loggerLevelUtils.setFunctionName(() => {}, "setConf"),
    draw: D
  };
  var B = loggerLevelUtils.setFunctionName(t => {
    let e = "";
    for (let e = 0; e < t.THEME_COLOR_LIMIT; e++) {
      t["lineColor" + e] = t["lineColor" + e] || t["cScaleInv" + e];
      if (colorDarknessUtil.isColorDark(t["lineColor" + e])) {
        t["lineColor" + e] = colorLightnessAdjuster.adjustLightness(t["lineColor" + e], 20);
      } else {
        t["lineColor" + e] = colorLightnessHelper.adjustLightness(t["lineColor" + e], 20);
      }
    }
    for (let n = 0; n < t.THEME_COLOR_LIMIT; n++) {
      let i = "" + (17 - n * 3);
      e += `
    .section-${n - 1} rect, .section-${n - 1} path, .section-${n - 1} circle, .section-${n - 1} path  {
      fill: ${t["cScale" + n]};
    }
    .section-${n - 1} text {
     fill: ${t["cScaleLabel" + n]};
    }
    .node-icon-${n - 1} {
      font-size: 40px;
      color: ${t["cScaleLabel" + n]};
    }
    .section-edge-${n - 1}{
      stroke: ${t["cScale" + n]};
    }
    .edge-depth-${n - 1}{
      stroke-width: ${i};
    }
    .section-${n - 1} line {
      stroke: ${t["cScaleInv" + n]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${t["cScaleLabel" + n]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
    }
    return e;
  }, "genSections");
  var F = {
    db: h,
    renderer: R,
    parser: c,
    styles: loggerLevelUtils.setFunctionName(t => `
  .edge {
    stroke-width: 3;
  }
  ${B(t)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`, "getStyles")
  };
  require.d(exports, {
    diagram: function () {
      return F;
    }
  });
}