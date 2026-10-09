// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'mermaidShapeDrawers'
// - Resolved require(88456) to 'mermaid-shape-drawers'
// - Renamed variable 'n' to 'mermaidIconStylesHelper'
// - Resolved require(988348) to 'mermaid-icon-styles-helper'
// - Renamed variable 'a' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 's' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'ZH' to 'clearAccData' (module 101498)
// - Updated imported property 'nV' to 'getConfigAlias' (module 101498)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 101498)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 101498)
// - Updated imported property 'GN' to 'setAccTitle' (module 101498)
// - Updated imported property 'eu' to 'getAccTitle' (module 101498)
// - Updated imported property 'U$' to 'setAccDescription' (module 101498)
// - Updated imported property 'Mx' to 'getAccDescription' (module 101498)
// - Updated imported property 'v2' to 'configureSvgSize' (module 101498)
// - Updated imported property 'G' to 'getIconStyles' (module 988348)
// - Updated imported property 'Mu' to 'drawRect' (module 88456)
// - Updated imported property 'yU' to 'drawText' (module 88456)
// - Updated imported property 'kc' to 'getNoteRect' (module 88456)
// - Updated imported property 'Ys' to 'select' (module 381804)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14080.0682d617.js
         * chunkId: 14080
         * moduleId: 709460
         */
module.exports = function (module, exports, require) {
  var mermaidShapeDrawers = require("mermaid-shape-drawers") /*id: 88456*/;
  var mermaidIconStylesHelper = require("mermaid-icon-styles-helper") /*id: 988348*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var l = function () {
    var t = mermaidConfigUtils.setName(function (t, e, i, r) {
      i = i || {};
      r = t.length;
      for (; r--; i[t[r]] = e);
      return i;
    }, "o");
    var e = [6, 8, 10, 11, 12, 14, 16, 17, 18];
    var i = [1, 9];
    var r = [1, 10];
    var n = [1, 11];
    var s = [1, 12];
    var l = [1, 13];
    var o = [1, 14];
    var c = {
      trace: mermaidConfigUtils.setName(function () {}, "trace"),
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
      performAction: mermaidConfigUtils.setName(function (t, e, i, r, n, a, s) {
        var l = a.length - 1;
        switch (n) {
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
            r.setDiagramTitle(a[l].substr(6));
            this.$ = a[l].substr(6);
            break;
          case 9:
            this.$ = a[l].trim();
            r.setAccTitle(this.$);
            break;
          case 10:
          case 11:
            this.$ = a[l].trim();
            r.setAccDescription(this.$);
            break;
          case 12:
            r.addSection(a[l].substr(8));
            this.$ = a[l].substr(8);
            break;
          case 13:
            r.addTask(a[l - 1], a[l]);
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
        12: r,
        14: n,
        16: s,
        17: l,
        18: o
      }, t(e, [2, 7], {
        1: [2, 1]
      }), t(e, [2, 3]), {
        9: 15,
        11: i,
        12: r,
        14: n,
        16: s,
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
      parseError: mermaidConfigUtils.setName(function (t, e) {
        if (e.recoverable) {
          this.trace(t);
        } else {
          var i = Error(t);
          i.hash = e;
          throw i;
        }
      }, "parseError"),
      parse: mermaidConfigUtils.setName(function (t) {
        var e = this;
        var i = [0];
        var r = [];
        var n = [null];
        var s = [];
        var l = this.table;
        var o = "";
        var c = 0;
        var h = 0;
        var u = 0;
        var p = s.slice.call(arguments, 1);
        var y = Object.create(this.lexer);
        var d = {
          yy: {}
        };
        for (var f in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, f)) {
            d.yy[f] = this.yy[f];
          }
        }
        y.setInput(t, d.yy);
        d.yy.lexer = y;
        d.yy.parser = this;
        if (y.yylloc === undefined) {
          y.yylloc = {};
        }
        var g = y.yylloc;
        s.push(g);
        var x = y.options && y.options.ranges;
        function m() {
          var t;
          if (typeof (t = r.pop() || y.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (r = t).pop();
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
        mermaidConfigUtils.setName(function (t) {
          i.length = i.length - t * 2;
          n.length = n.length - t;
          s.length = s.length - t;
        }, "popStack");
        mermaidConfigUtils.setName(m, "lex");
        var k;
        var _;
        var b;
        var v;
        var w;
        var W;
        var $;
        var C;
        var E;
        var M = {};
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
            E = [];
            for (W in l[b]) {
              if (this.terminals_[W] && W > 2) {
                E.push("'" + this.terminals_[W] + "'");
              }
            }
            S = y.showPosition ? "Parse error on line " + (c + 1) + ":\n" + y.showPosition() + "\nExpecting " + E.join(", ") + ", got '" + (this.terminals_[k] || k) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (k == 1 ? "end of input" : "'" + (this.terminals_[k] || k) + "'");
            this.parseError(S, {
              text: y.match,
              token: this.terminals_[k] || k,
              line: y.yylineno,
              loc: g,
              expected: E
            });
          }
          if (v[0] instanceof Array && v.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + b + ", token: " + k);
          }
          switch (v[0]) {
            case 1:
              i.push(k);
              n.push(y.yytext);
              s.push(y.yylloc);
              i.push(v[1]);
              k = null;
              if (_) {
                k = _;
                _ = null;
              } else {
                h = y.yyleng;
                o = y.yytext;
                c = y.yylineno;
                g = y.yylloc;
                if (u > 0) {
                  u--;
                }
              }
              break;
            case 2:
              $ = this.productions_[v[1]][1];
              M.$ = n[n.length - $];
              M._$ = {
                first_line: s[s.length - ($ || 1)].first_line,
                last_line: s[s.length - 1].last_line,
                first_column: s[s.length - ($ || 1)].first_column,
                last_column: s[s.length - 1].last_column
              };
              if (x) {
                M._$.range = [s[s.length - ($ || 1)].range[0], s[s.length - 1].range[1]];
              }
              if ((w = this.performAction.apply(M, [o, h, c, d.yy, v[1], n, s].concat(p))) !== undefined) {
                return w;
              }
              if ($) {
                i = i.slice(0, $ * -1 * 2);
                n = n.slice(0, $ * -1);
                s = s.slice(0, $ * -1);
              }
              i.push(this.productions_[v[1]][0]);
              n.push(M.$);
              s.push(M._$);
              C = l[i[i.length - 2]][i[i.length - 1]];
              i.push(C);
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
      parseError: mermaidConfigUtils.setName(function (t, e) {
        if (this.yy.parser) {
          this.yy.parser.parseError(t, e);
        } else {
          throw Error(t);
        }
      }, "parseError"),
      setInput: mermaidConfigUtils.setName(function (t, e) {
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
      input: mermaidConfigUtils.setName(function () {
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
      unput: mermaidConfigUtils.setName(function (t) {
        var e = t.length;
        var i = t.split(/(?:\r\n?|\n)/g);
        this._input = t + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - e);
        this.offset -= e;
        var r = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (i.length - 1) {
          this.yylineno -= i.length - 1;
        }
        var n = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: i ? (i.length === r.length ? this.yylloc.first_column : 0) + r[r.length - i.length].length - i[0].length : this.yylloc.first_column - e
        };
        if (this.options.ranges) {
          this.yylloc.range = [n[0], n[0] + this.yyleng - e];
        }
        this.yyleng = this.yytext.length;
        return this;
      }, "unput"),
      more: mermaidConfigUtils.setName(function () {
        this._more = true;
        return this;
      }, "more"),
      reject: mermaidConfigUtils.setName(function () {
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
      less: mermaidConfigUtils.setName(function (t) {
        this.unput(this.match.slice(t));
      }, "less"),
      pastInput: mermaidConfigUtils.setName(function () {
        var t = this.matched.substr(0, this.matched.length - this.match.length);
        return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: mermaidConfigUtils.setName(function () {
        var t = this.match;
        if (t.length < 20) {
          t += this._input.substr(0, 20 - t.length);
        }
        return (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: mermaidConfigUtils.setName(function () {
        var t = this.pastInput();
        var e = Array(t.length + 1).join("-");
        return t + this.upcomingInput() + "\n" + e + "^";
      }, "showPosition"),
      test_match: mermaidConfigUtils.setName(function (t, e) {
        var i;
        var r;
        var n;
        if (this.options.backtrack_lexer) {
          n = {
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
            n.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        if (r = t[0].match(/(?:\r\n?|\n).*/g)) {
          this.yylineno += r.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
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
          for (var a in n) {
            this[a] = n[a];
          }
        }
        return false;
      }, "test_match"),
      next: mermaidConfigUtils.setName(function () {
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
        var r;
        var n = this._currentRules();
        var a = 0;
        for (; a < n.length; a++) {
          if ((i = this._input.match(this.rules[n[a]])) && (!e || i[0].length > e[0].length)) {
            e = i;
            r = a;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(i, n[a])) !== false) {
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
          return (t = this.test_match(e, n[r])) !== false && t;
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
      lex: mermaidConfigUtils.setName(function () {
        var t = this.next();
        return t || this.lex();
      }, "lex"),
      begin: mermaidConfigUtils.setName(function (t) {
        this.conditionStack.push(t);
      }, "begin"),
      popState: mermaidConfigUtils.setName(function () {
        if (this.conditionStack.length - 1 > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      }, "popState"),
      _currentRules: mermaidConfigUtils.setName(function () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions.INITIAL.rules;
        }
      }, "_currentRules"),
      topState: mermaidConfigUtils.setName(function (t) {
        if ((t = this.conditionStack.length - 1 - Math.abs(t || 0)) >= 0) {
          return this.conditionStack[t];
        } else {
          return "INITIAL";
        }
      }, "topState"),
      pushState: mermaidConfigUtils.setName(function (t) {
        this.begin(t);
      }, "pushState"),
      stateStackSize: mermaidConfigUtils.setName(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true
      },
      performAction: mermaidConfigUtils.setName(function (t, e, i, r) {
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
    mermaidConfigUtils.setName(u, "Parser");
    u.prototype = c;
    c.Parser = u;
    return new u();
  }();
  l.parser = l;
  var o = "";
  var c = [];
  var h = [];
  var u = [];
  var p = mermaidConfigUtils.setName(function () {
    c.length = 0;
    h.length = 0;
    o = "";
    u.length = 0;
    mermaidConfigUtils.clearAccData();
  }, "clear");
  var y = mermaidConfigUtils.setName(function (t) {
    o = t;
    c.push(t);
  }, "addSection");
  var d = mermaidConfigUtils.setName(function () {
    return c;
  }, "getSections");
  var f = mermaidConfigUtils.setName(function () {
    let t = k();
    let e = 0;
    while (!t && e < 100) {
      t = k();
      e++;
    }
    h.push(...u);
    return h;
  }, "getTasks");
  var g = mermaidConfigUtils.setName(function () {
    let t = [];
    h.forEach(e => {
      if (e.people) {
        t.push(...e.people);
      }
    });
    return [...new Set(t)].sort();
  }, "updateActors");
  var x = mermaidConfigUtils.setName(function (t, e) {
    let i = e.substr(1).split(":");
    let r = 0;
    let n = [];
    if (i.length === 1) {
      r = Number(i[0]);
      n = [];
    } else {
      r = Number(i[0]);
      n = i[1].split(",");
    }
    let a = n.map(t => t.trim());
    let s = {
      section: o,
      type: o,
      people: a,
      task: t,
      score: r
    };
    u.push(s);
  }, "addTask");
  var m = mermaidConfigUtils.setName(function (t) {
    let e = {
      section: o,
      type: o,
      description: t,
      task: t,
      classes: []
    };
    h.push(e);
  }, "addTaskOrg");
  var k = mermaidConfigUtils.setName(function () {
    let t = mermaidConfigUtils.setName(function (t) {
      return u[t].processed;
    }, "compileTask");
    let e = true;
    for (let [i, r] of u.entries()) {
      t(i);
      e = e && r.processed;
    }
    return e;
  }, "compileTasks");
  var _ = mermaidConfigUtils.setName(function () {
    return g();
  }, "getActors");
  var b = {
    getConfig: mermaidConfigUtils.setName(() => mermaidConfigUtils.getConfigAlias().journey, "getConfig"),
    clear: p,
    setDiagramTitle: mermaidConfigUtils.setDiagramTitle,
    getDiagramTitle: mermaidConfigUtils.getDiagramTitle,
    setAccTitle: mermaidConfigUtils.setAccTitle,
    getAccTitle: mermaidConfigUtils.getAccTitle,
    setAccDescription: mermaidConfigUtils.setAccDescription,
    getAccDescription: mermaidConfigUtils.getAccDescription,
    addSection: y,
    getSections: d,
    getTasks: f,
    addTask: x,
    addTaskOrg: m,
    getActors: _
  };
  var v = mermaidConfigUtils.setName(t => `.label {
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
  ${mermaidIconStylesHelper.getIconStyles()}
`, "getStyles");
  var w = mermaidConfigUtils.setName(function (t, e) {
    return mermaidShapeDrawers.drawRect(t, e);
  }, "drawRect");
  var W = mermaidConfigUtils.setName(function (t, e) {
    let i = t.append("circle").attr("cx", e.cx).attr("cy", e.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible");
    let r = t.append("g");
    function n(t) {
      let i = axisAndZoomUtilities.Nb1().startAngle(Math.PI / 2).endAngle(Math.PI / 2 * 3).innerRadius(7.5).outerRadius(15 / 2.2);
      t.append("path").attr("class", "mouth").attr("d", i).attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
    }
    function l(t) {
      let i = axisAndZoomUtilities.Nb1().startAngle(Math.PI * 3 / 2).endAngle(Math.PI / 2 * 5).innerRadius(7.5).outerRadius(15 / 2.2);
      t.append("path").attr("class", "mouth").attr("d", i).attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
    }
    function o(t) {
      t.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", e.cx - 5).attr("y1", e.cy + 7).attr("x2", e.cx + 5).attr("y2", e.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
    }
    r.append("circle").attr("cx", e.cx - 5).attr("cy", e.cy - 5).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
    r.append("circle").attr("cx", e.cx + 5).attr("cy", e.cy - 5).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
    mermaidConfigUtils.setName(n, "smile");
    mermaidConfigUtils.setName(l, "sad");
    mermaidConfigUtils.setName(o, "ambivalent");
    if (e.score > 3) {
      n(r);
    } else if (e.score < 3) {
      l(r);
    } else {
      o(r);
    }
    return i;
  }, "drawFace");
  var $ = mermaidConfigUtils.setName(function (t, e) {
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
  var C = mermaidConfigUtils.setName(function (t, e) {
    return mermaidShapeDrawers.drawText(t, e);
  }, "drawText");
  var E = mermaidConfigUtils.setName(function (t, e, i) {
    let n = t.append("g");
    let a = mermaidShapeDrawers.getNoteRect();
    a.x = e.x;
    a.y = e.y;
    a.fill = e.fill;
    a.width = i.width * e.taskCount + i.diagramMarginX * (e.taskCount - 1);
    a.height = i.height;
    a.class = "journey-section section-type-" + e.num;
    a.rx = 3;
    a.ry = 3;
    w(n, a);
    A(i)(e.text, n, a.x, a.y, a.width, a.height, {
      class: "journey-section section-type-" + e.num
    }, i, e.colour);
  }, "drawSection");
  var M = -1;
  var S = mermaidConfigUtils.setName(function (t, e, i) {
    let n = e.x + i.width / 2;
    let a = t.append("g");
    M++;
    a.append("line").attr("id", "task" + M).attr("x1", n).attr("y1", e.y).attr("x2", n).attr("y2", 450).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666");
    W(a, {
      cx: n,
      cy: 300 + (5 - e.score) * 30,
      score: e.score
    });
    let s = mermaidShapeDrawers.getNoteRect();
    s.x = e.x;
    s.y = e.y;
    s.fill = e.fill;
    s.width = i.width;
    s.height = i.height;
    s.class = "task task-type-" + e.num;
    s.rx = 3;
    s.ry = 3;
    w(a, s);
    let l = e.x + 14;
    e.people.forEach(t => {
      let i = e.actors[t].color;
      $(a, {
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
    A(i)(e.task, a, s.x, s.y, s.width, s.height, {
      class: "task"
    }, i, e.colour);
  }, "drawTask");
  var A = function () {
    function t(t, e, i, n, a, s, l, o) {
      r(e.append("text").attr("x", i + a / 2).attr("y", n + s / 2 + 5).style("font-color", o).style("text-anchor", "middle").text(t), l);
    }
    function e(t, e, i, n, a, s, l, o, c) {
      let {
        taskFontSize: h,
        taskFontFamily: u
      } = o;
      let p = t.split(/<br\s*\/?>/gi);
      for (let t = 0; t < p.length; t++) {
        let o = t * h - h * (p.length - 1) / 2;
        let y = e.append("text").attr("x", i + a / 2).attr("y", n).attr("fill", c).style("text-anchor", "middle").style("font-size", h).style("font-family", u);
        y.append("tspan").attr("x", i + a / 2).attr("dy", o).text(p[t]);
        y.attr("y", n + s / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central");
        r(y, l);
      }
    }
    function i(t, i, n, a, s, l, o, c) {
      let h = i.append("switch");
      let u = h.append("foreignObject").attr("x", n).attr("y", a).attr("width", s).attr("height", l).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
      u.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(t);
      e(t, h, n, a, s, l, o, c);
      r(u, o);
    }
    function r(t, e) {
      for (let i in e) {
        if (i in e) {
          t.attr(i, e[i]);
        }
      }
    }
    mermaidConfigUtils.setName(t, "byText");
    mermaidConfigUtils.setName(e, "byTspan");
    mermaidConfigUtils.setName(i, "byFo");
    mermaidConfigUtils.setName(r, "_setTextAttrs");
    return function (r) {
      if (r.textPlacement === "fo") {
        return i;
      } else if (r.textPlacement === "old") {
        return t;
      } else {
        return e;
      }
    };
  }();
  var R = {
    drawCircle: $,
    drawSection: E,
    drawText: C,
    drawTask: S,
    initGraphics: mermaidConfigUtils.setName(function (t) {
      t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
    }, "initGraphics")
  };
  var T = mermaidConfigUtils.setName(function (t) {
    Object.keys(t).forEach(function (e) {
      j[e] = t[e];
    });
  }, "setConf");
  var I = {};
  var L = 0;
  function P(t) {
    let e = mermaidConfigUtils.getConfigAlias().journey;
    let i = e.maxLabelWidth;
    L = 0;
    let r = 60;
    Object.keys(I).forEach(n => {
      let a = I[n].color;
      let s = {
        cx: 20,
        cy: r,
        r: 7,
        fill: a,
        stroke: "#000",
        pos: I[n].position
      };
      R.drawCircle(t, s);
      let l = t.append("text").attr("visibility", "hidden").text(n);
      let o = l.node().getBoundingClientRect().width;
      l.remove();
      let c = [];
      if (o <= i) {
        c = [n];
      } else {
        let e = n.split(" ");
        let r = "";
        l = t.append("text").attr("visibility", "hidden");
        e.forEach(t => {
          let e = r ? `${r} ${t}` : t;
          l.text(e);
          if (l.node().getBoundingClientRect().width > i) {
            if (r) {
              c.push(r);
            }
            r = t;
            l.text(t);
            if (l.node().getBoundingClientRect().width > i) {
              let e = "";
              for (let r of t) {
                e += r;
                l.text(e + "-");
                if (l.node().getBoundingClientRect().width > i) {
                  c.push(e.slice(0, -1) + "-");
                  e = r;
                }
              }
              r = e;
            }
          } else {
            r = e;
          }
        });
        if (r) {
          c.push(r);
        }
        l.remove();
      }
      c.forEach((i, n) => {
        let s = {
          x: 40,
          y: r + 7 + n * 20,
          fill: "#666",
          text: i,
          textMargin: e.boxTextMargin ?? 5
        };
        let l = R.drawText(t, s).node().getBoundingClientRect().width;
        if (l > L && l > e.leftMargin - l) {
          L = l;
        }
      });
      r += Math.max(20, c.length * 20);
    });
  }
  mermaidConfigUtils.setName(P, "drawActorLegend");
  var j = mermaidConfigUtils.getConfigAlias().journey;
  var F = 0;
  var V = mermaidConfigUtils.setName(function (t, e, i, r) {
    let n;
    let l = mermaidConfigUtils.getConfigAlias();
    let o = l.journey.titleColor;
    let c = l.journey.titleFontSize;
    let h = l.journey.titleFontFamily;
    let u = l.securityLevel;
    if (u === "sandbox") {
      n = axisAndZoomUtilities.select("#i" + e);
    }
    let p = u === "sandbox" ? axisAndZoomUtilities.select(n.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body");
    B.init();
    let y = p.select("#" + e);
    R.initGraphics(y);
    let d = r.db.getTasks();
    let f = r.db.getDiagramTitle();
    let g = r.db.getActors();
    for (let t in I) {
      delete I[t];
    }
    let x = 0;
    g.forEach(t => {
      I[t] = {
        color: j.actorColours[x % j.actorColours.length],
        position: x
      };
      x++;
    });
    P(y);
    F = j.leftMargin + L;
    B.insert(0, 0, F, Object.keys(I).length * 50);
    O(y, d, 0);
    let m = B.getBounds();
    if (f) {
      y.append("text").text(f).attr("x", F).attr("font-size", c).attr("font-weight", "bold").attr("y", 25).attr("fill", o).attr("font-family", h);
    }
    let k = m.stopy - m.starty + j.diagramMarginY * 2;
    let _ = F + m.stopx + j.diagramMarginX * 2;
    mermaidConfigUtils.configureSvgSize(y, k, _, j.useMaxWidth);
    y.append("line").attr("x1", F).attr("y1", j.height * 4).attr("x2", _ - F - 4).attr("y2", j.height * 4).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
    let b = !!f * 70;
    y.attr("viewBox", `${m.startx} -25 ${_} ${k + b}`);
    y.attr("preserveAspectRatio", "xMinYMin meet");
    y.attr("height", k + b + 25);
  }, "draw");
  var B = {
    data: {
      startx: undefined,
      stopx: undefined,
      starty: undefined,
      stopy: undefined
    },
    verticalPos: 0,
    sequenceItems: [],
    init: mermaidConfigUtils.setName(function () {
      this.sequenceItems = [];
      this.data = {
        startx: undefined,
        stopx: undefined,
        starty: undefined,
        stopy: undefined
      };
      this.verticalPos = 0;
    }, "init"),
    updateVal: mermaidConfigUtils.setName(function (t, e, i, r) {
      if (t[e] === undefined) {
        t[e] = i;
      } else {
        t[e] = r(i, t[e]);
      }
    }, "updateVal"),
    updateBounds: mermaidConfigUtils.setName(function (t, e, i, r) {
      let n = mermaidConfigUtils.getConfigAlias().journey;
      let s = this;
      let l = 0;
      function o(o) {
        return mermaidConfigUtils.setName(function (a) {
          l++;
          let c = s.sequenceItems.length - l + 1;
          s.updateVal(a, "starty", e - c * n.boxMargin, Math.min);
          s.updateVal(a, "stopy", r + c * n.boxMargin, Math.max);
          s.updateVal(B.data, "startx", t - c * n.boxMargin, Math.min);
          s.updateVal(B.data, "stopx", i + c * n.boxMargin, Math.max);
          if (o !== "activation") {
            s.updateVal(a, "startx", t - c * n.boxMargin, Math.min);
            s.updateVal(a, "stopx", i + c * n.boxMargin, Math.max);
            s.updateVal(B.data, "starty", e - c * n.boxMargin, Math.min);
            s.updateVal(B.data, "stopy", r + c * n.boxMargin, Math.max);
          }
        }, "updateItemBounds");
      }
      mermaidConfigUtils.setName(o, "updateFn");
      this.sequenceItems.forEach(o());
    }, "updateBounds"),
    insert: mermaidConfigUtils.setName(function (t, e, i, r) {
      let n = Math.min(t, i);
      let a = Math.max(t, i);
      let s = Math.min(e, r);
      let l = Math.max(e, r);
      this.updateVal(B.data, "startx", n, Math.min);
      this.updateVal(B.data, "starty", s, Math.min);
      this.updateVal(B.data, "stopx", a, Math.max);
      this.updateVal(B.data, "stopy", l, Math.max);
      this.updateBounds(n, s, a, l);
    }, "insert"),
    bumpVerticalPos: mermaidConfigUtils.setName(function (t) {
      this.verticalPos = this.verticalPos + t;
      this.data.stopy = this.verticalPos;
    }, "bumpVerticalPos"),
    getVerticalPos: mermaidConfigUtils.setName(function () {
      return this.verticalPos;
    }, "getVerticalPos"),
    getBounds: mermaidConfigUtils.setName(function () {
      return this.data;
    }, "getBounds")
  };
  var N = j.sectionFills;
  var D = j.sectionColours;
  var O = mermaidConfigUtils.setName(function (t, e, i) {
    let r = mermaidConfigUtils.getConfigAlias().journey;
    let n = "";
    let s = i + (r.height * 2 + r.diagramMarginY);
    let l = 0;
    let o = "#CCC";
    let c = "black";
    let h = 0;
    for (let [i, a] of e.entries()) {
      if (n !== a.section) {
        o = N[l % N.length];
        h = l % N.length;
        c = D[l % D.length];
        let s = 0;
        let u = a.section;
        for (let t = i; t < e.length; t++) {
          if (e[t].section == u) {
            s += 1;
          } else {
            break;
          }
        }
        let p = {
          x: i * r.taskMargin + i * r.width + F,
          y: 50,
          text: a.section,
          fill: o,
          num: h,
          colour: c,
          taskCount: s
        };
        R.drawSection(t, p, r);
        n = a.section;
        l++;
      }
      let u = a.people.reduce((t, e) => {
        if (I[e]) {
          t[e] = I[e];
        }
        return t;
      }, {});
      a.x = i * r.taskMargin + i * r.width + F;
      a.y = s;
      a.width = r.diagramMarginX;
      a.height = r.diagramMarginY;
      a.colour = c;
      a.fill = o;
      a.num = h;
      a.actors = u;
      R.drawTask(t, a, r);
      B.insert(a.x, a.y, a.x + a.width + r.taskMargin, 450);
    }
  }, "drawTasks");
  var U = {
    setConf: T,
    draw: V
  };
  var z = {
    parser: l,
    db: b,
    renderer: U,
    styles: v,
    init: mermaidConfigUtils.setName(t => {
      U.setConf(t.journey);
      b.clear();
    }, "init")
  };
  require.d(exports, {
    diagram: function () {
      return z;
    }
  });
}