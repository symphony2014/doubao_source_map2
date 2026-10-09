// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'l' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'a' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'c' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Renamed variable 'h' to 'graphDepthCalcUtils'
// - Resolved require(652785) to 'graph-depth-calc-utils'
// - Renamed variable 'u' to 'sankeyLayoutGenerator'
// - Resolved require(458203) to 'sankey-layout-generator'
// - Renamed variable 'f' to 'linkPathGeneratorFactory'
// - Resolved require(612048) to 'link-path-generator-factory'
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'ZH' to 'clearCommonDb' (module 401926)
// - Updated imported property 'SY' to 'textUtilities' (module 401926)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'eu' to 'getAccTitle' (module 401926)
// - Updated imported property 'GN' to 'setAccTitle' (module 401926)
// - Updated imported property 'Mx' to 'getAccDescription' (module 401926)
// - Updated imported property 'U$' to 'setAccDescription' (module 401926)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 401926)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 401926)
// - Updated imported property 'Fy' to 'frozenConfig' (module 401926)
// - Updated imported property 'j7' to 'setupViewbox' (module 401926)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 't$' to 'getNodeDepth' (module 652785)
// - Updated imported property 'F2' to 'calcVerticalOffset' (module 652785)
// - Updated imported property 'be' to 'computeNodeDepth' (module 652785)
// - Updated imported property 'PT' to 'getNodeLayerDepth' (module 652785)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'Z' to 'sankeyLayout' (module 458203)
// - Updated imported property 'Z' to 'createLinkGenerator' (module 612048)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 1800.93d11244.js
         * chunkId: 1800
         * moduleId: 153170
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var s;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var graphDepthCalcUtils = require("graph-depth-calc-utils") /*id: 652785*/;
  var sankeyLayoutGenerator = require("sankey-layout-generator") /*id: 458203*/;
  var linkPathGeneratorFactory = require("link-path-generator-factory") /*id: 612048*/;
  var y = function () {
    var t = loggerLevelUtils.setFunctionName(function (t, e, n, i) {
      n = n || {};
      i = t.length;
      for (; i--; n[t[i]] = e);
      return n;
    }, "o");
    var e = [1, 9];
    var n = [1, 10];
    var i = [1, 5, 10, 12];
    var r = {
      trace: loggerLevelUtils.setFunctionName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        SANKEY: 4,
        NEWLINE: 5,
        csv: 6,
        opt_eof: 7,
        record: 8,
        csv_tail: 9,
        EOF: 10,
        "field[source]": 11,
        COMMA: 12,
        "field[target]": 13,
        "field[value]": 14,
        field: 15,
        escaped: 16,
        non_escaped: 17,
        DQUOTE: 18,
        ESCAPED_TEXT: 19,
        NON_ESCAPED_TEXT: 20,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "SANKEY",
        5: "NEWLINE",
        10: "EOF",
        11: "field[source]",
        12: "COMMA",
        13: "field[target]",
        14: "field[value]",
        18: "DQUOTE",
        19: "ESCAPED_TEXT",
        20: "NON_ESCAPED_TEXT"
      },
      productions_: [0, [3, 4], [6, 2], [9, 2], [9, 0], [7, 1], [7, 0], [8, 5], [15, 1], [15, 1], [16, 3], [17, 1]],
      performAction: loggerLevelUtils.setFunctionName(function (t, e, n, i, r, s, o) {
        var l = s.length - 1;
        switch (r) {
          case 7:
            let a = i.findOrCreateNode(s[l - 4].trim().replaceAll("\"\"", "\""));
            let c = i.findOrCreateNode(s[l - 2].trim().replaceAll("\"\"", "\""));
            let h = parseFloat(s[l].trim());
            i.addLink(a, c, h);
            break;
          case 8:
          case 9:
          case 11:
            this.$ = s[l];
            break;
          case 10:
            this.$ = s[l - 1];
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: [1, 2]
      }, {
        1: [3]
      }, {
        5: [1, 3]
      }, {
        6: 4,
        8: 5,
        15: 6,
        16: 7,
        17: 8,
        18: e,
        20: n
      }, {
        1: [2, 6],
        7: 11,
        10: [1, 12]
      }, t(n, [2, 4], {
        9: 13,
        5: [1, 14]
      }), {
        12: [1, 15]
      }, t(i, [2, 8]), t(i, [2, 9]), {
        19: [1, 16]
      }, t(i, [2, 11]), {
        1: [2, 1]
      }, {
        1: [2, 5]
      }, t(n, [2, 2]), {
        6: 17,
        8: 5,
        15: 6,
        16: 7,
        17: 8,
        18: e,
        20: n
      }, {
        15: 18,
        16: 7,
        17: 8,
        18: e,
        20: n
      }, {
        18: [1, 19]
      }, t(n, [2, 3]), {
        12: [1, 20]
      }, t(i, [2, 10]), {
        15: 21,
        16: 7,
        17: 8,
        18: e,
        20: n
      }, t([1, 5, 10], [2, 7])],
      defaultActions: {
        11: [2, 1],
        12: [2, 5]
      },
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
        var r = [null];
        var s = [];
        var o = this.table;
        var l = "";
        var c = 0;
        var h = 0;
        var u = 0;
        var f = s.slice.call(arguments, 1);
        var y = Object.create(this.lexer);
        var d = {
          yy: {}
        };
        for (var p in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, p)) {
            d.yy[p] = this.yy[p];
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
        var m = y.options && y.options.ranges;
        function k() {
          var t;
          if (typeof (t = i.pop() || y.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (i = t).pop();
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
          n.length = n.length - t * 2;
          r.length = r.length - t;
          s.length = s.length - t;
        }, "popStack");
        loggerLevelUtils.setFunctionName(k, "lex");
        var _;
        var x;
        var b;
        var v;
        var W;
        var S;
        var E;
        var $;
        var w;
        var A = {};
        while (true) {
          b = n[n.length - 1];
          if (this.defaultActions[b]) {
            v = this.defaultActions[b];
          } else {
            if (_ == null) {
              _ = k();
            }
            v = o[b] && o[b][_];
          }
          if (v === undefined || !v.length || !v[0]) {
            var L = "";
            w = [];
            for (S in o[b]) {
              if (this.terminals_[S] && S > 2) {
                w.push("'" + this.terminals_[S] + "'");
              }
            }
            L = y.showPosition ? "Parse error on line " + (c + 1) + ":\n" + y.showPosition() + "\nExpecting " + w.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (_ == 1 ? "end of input" : "'" + (this.terminals_[_] || _) + "'");
            this.parseError(L, {
              text: y.match,
              token: this.terminals_[_] || _,
              line: y.yylineno,
              loc: g,
              expected: w
            });
          }
          if (v[0] instanceof Array && v.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + b + ", token: " + _);
          }
          switch (v[0]) {
            case 1:
              n.push(_);
              r.push(y.yytext);
              s.push(y.yylloc);
              n.push(v[1]);
              _ = null;
              if (x) {
                _ = x;
                x = null;
              } else {
                h = y.yyleng;
                l = y.yytext;
                c = y.yylineno;
                g = y.yylloc;
                if (u > 0) {
                  u--;
                }
              }
              break;
            case 2:
              E = this.productions_[v[1]][1];
              A.$ = r[r.length - E];
              A._$ = {
                first_line: s[s.length - (E || 1)].first_line,
                last_line: s[s.length - 1].last_line,
                first_column: s[s.length - (E || 1)].first_column,
                last_column: s[s.length - 1].last_column
              };
              if (m) {
                A._$.range = [s[s.length - (E || 1)].range[0], s[s.length - 1].range[1]];
              }
              if ((W = this.performAction.apply(A, [l, h, c, d.yy, v[1], r, s].concat(f))) !== undefined) {
                return W;
              }
              if (E) {
                n = n.slice(0, E * -1 * 2);
                r = r.slice(0, E * -1);
                s = s.slice(0, E * -1);
              }
              n.push(this.productions_[v[1]][0]);
              r.push(A.$);
              s.push(A._$);
              $ = o[n[n.length - 2]][n[n.length - 1]];
              n.push($);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var s = {
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
            this.pushState("csv");
            return 4;
          case 2:
            return 10;
          case 3:
            return 5;
          case 4:
            return 12;
          case 5:
            this.pushState("escaped_text");
            return 18;
          case 6:
            return 20;
          case 7:
            this.popState("escaped_text");
            return 18;
          case 8:
            return 19;
        }
      }, "anonymous"),
      rules: [/^(?:sankey-beta\b)/i, /^(?:sankey\b)/i, /^(?:$)/i, /^(?:((\u000D\u000A)|(\u000A)))/i, /^(?:(\u002C))/i, /^(?:(\u0022))/i, /^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i, /^(?:(\u0022)(?!(\u0022)))/i, /^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],
      conditions: {
        csv: {
          rules: [2, 3, 4, 5, 6, 7, 8],
          inclusive: false
        },
        escaped_text: {
          rules: [7, 8],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          inclusive: true
        }
      }
    };
    function o() {
      this.yy = {};
    }
    r.lexer = s;
    loggerLevelUtils.setFunctionName(o, "Parser");
    o.prototype = r;
    r.Parser = o;
    return new o();
  }();
  y.parser = y;
  var d = [];
  var p = [];
  var g = new Map();
  var m = loggerLevelUtils.setFunctionName(() => {
    d = [];
    p = [];
    g = new Map();
    mermaidConfigUtils_1.clearCommonDb();
  }, "clear");
  i = class {
    constructor(t, e, n = 0) {
      this.source = t;
      this.target = e;
      this.value = n;
    }
  };
  loggerLevelUtils.setFunctionName(i, "SankeyLink");
  var k = i;
  var _ = loggerLevelUtils.setFunctionName((t, e, n) => {
    d.push(new k(t, e, n));
  }, "addLink");
  r = class {
    constructor(t) {
      this.ID = t;
    }
  };
  loggerLevelUtils.setFunctionName(r, "SankeyNode");
  var x = r;
  var b = loggerLevelUtils.setFunctionName(t => {
    t = mermaidConfigUtils_1.textUtilities.sanitizeText(t, mermaidConfigUtils_1.getConfigAlias());
    let e = g.get(t);
    if (e === undefined) {
      e = new x(t);
      g.set(t, e);
      p.push(e);
    }
    return e;
  }, "findOrCreateNode");
  var v = loggerLevelUtils.setFunctionName(() => p, "getNodes");
  var W = loggerLevelUtils.setFunctionName(() => d, "getLinks");
  var S = loggerLevelUtils.setFunctionName(() => ({
    nodes: p.map(t => ({
      id: t.ID
    })),
    links: d.map(t => ({
      source: t.source.ID,
      target: t.target.ID,
      value: t.value
    }))
  }), "getGraph");
  var E = {
    nodesMap: g,
    getConfig: loggerLevelUtils.setFunctionName(() => mermaidConfigUtils_1.getConfigAlias().sankey, "getConfig"),
    getNodes: v,
    getLinks: W,
    getGraph: S,
    addLink: _,
    findOrCreateNode: b,
    getAccTitle: mermaidConfigUtils_1.getAccTitle,
    setAccTitle: mermaidConfigUtils_1.setAccTitle,
    getAccDescription: mermaidConfigUtils_1.getAccDescription,
    setAccDescription: mermaidConfigUtils_1.setAccDescription,
    getDiagramTitle: mermaidConfigUtils_1.getDiagramTitle,
    setDiagramTitle: mermaidConfigUtils_1.setDiagramTitle,
    clear: m
  };
  s = class t {
    static next(e) {
      return new t(e + ++t.count);
    }
    toString() {
      return "url(" + this.href + ")";
    }
    constructor(t) {
      this.id = t;
      this.href = xssContentSanitizer.sanitizeUrl(`#${t}`, null, {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: false,
        bid: "flow_web",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: true,
        escapeRule: "escape-report",
        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
        scmVersion: "1.0.4.168",
        webpackPluginVersion: "3.4.5",
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFbDF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb%15%m5WaE1sWTF$a2Rz-%ZvelNta*l$ekZW$jJ0$1NWSkdjRlp$-$RWMFlXN%9hR050WkR*amR6MDk"
      });
    }
  };
  loggerLevelUtils.setFunctionName(s, "Uid");
  s.count = 0;
  var $ = s;
  var w = {
    left: graphDepthCalcUtils.getNodeDepth,
    right: graphDepthCalcUtils.calcVerticalOffset,
    center: graphDepthCalcUtils.computeNodeDepth,
    justify: graphDepthCalcUtils.getNodeLayerDepth
  };
  var A = loggerLevelUtils.setFunctionName(function (t, e, n, i) {
    let m;
    let k;
    let {
      securityLevel: _,
      sankey: x
    } = mermaidConfigUtils_1.getConfigAlias();
    let b = mermaidConfigUtils_1.frozenConfig.sankey;
    if (_ === "sandbox") {
      m = axisAndZoomUtilities.select("#i" + e);
    }
    let v = _ === "sandbox" ? axisAndZoomUtilities.select(m.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body");
    let W = _ === "sandbox" ? v.select(`[id="${e}"]`) : axisAndZoomUtilities.select(`[id="${e}"]`);
    let S = (x == null ? undefined : x.width) ?? b.width;
    let E = (x == null ? undefined : x.height) ?? b.width;
    let A = (x == null ? undefined : x.useMaxWidth) ?? b.useMaxWidth;
    let L = (x == null ? undefined : x.nodeAlignment) ?? b.nodeAlignment;
    let T = (x == null ? undefined : x.prefix) ?? b.prefix;
    let N = (x == null ? undefined : x.suffix) ?? b.suffix;
    let F = (x == null ? undefined : x.showValues) ?? b.showValues;
    let I = i.db.getGraph();
    let D = w[L];
    sankeyLayoutGenerator.sankeyLayout().nodeId(t => t.id).nodeWidth(10).nodePadding(10 + !!F * 15).nodeAlign(D).extent([[0, 0], [S, E]])(I);
    let M = axisAndZoomUtilities.PKp(axisAndZoomUtilities.K2I);
    W.append("g").attr("class", "nodes").selectAll(".node").data(I.nodes).join("g").attr("class", "node").attr("id", t => (t.uid = $.next("node-")).id).attr("transform", function (t) {
      return "translate(" + t.x0 + "," + t.y0 + ")";
    }).attr("x", t => t.x0).attr("y", t => t.y0).append("rect").attr("height", t => t.y1 - t.y0).attr("width", t => t.x1 - t.x0).attr("fill", t => M(t.id));
    let R = loggerLevelUtils.setFunctionName(t => {
      let {
        id: e,
        value: n
      } = t;
      if (F) {
        return `${e}
${T}${Math.round(n * 100) / 100}${N}`;
      } else {
        return e;
      }
    }, "getText");
    W.append("g").attr("class", "node-labels").attr("font-size", 14).selectAll("text").data(I.nodes).join("text").attr("x", t => t.x0 < S / 2 ? t.x1 + 6 : t.x0 - 6).attr("y", t => (t.y1 + t.y0) / 2).attr("dy", `${F ? "0" : "0.35"}em`).attr("text-anchor", t => t.x0 < S / 2 ? "start" : "end").text(R);
    let P = W.append("g").attr("class", "links").attr("fill", "none").attr("stroke-opacity", 0.5).selectAll(".link").data(I.links).join("g").attr("class", "link").style("mix-blend-mode", "multiply");
    let Z = (x == null ? undefined : x.linkColor) ?? "gradient";
    if (Z === "gradient") {
      let t = P.append("linearGradient").attr("id", t => (t.uid = $.next("linearGradient-")).id).attr("gradientUnits", "userSpaceOnUse").attr("x1", t => t.source.x1).attr("x2", t => t.target.x0);
      t.append("stop").attr("offset", "0%").attr("stop-color", t => M(t.source.id));
      t.append("stop").attr("offset", "100%").attr("stop-color", t => M(t.target.id));
    }
    switch (Z) {
      case "gradient":
        k = loggerLevelUtils.setFunctionName(t => t.uid, "coloring");
        break;
      case "source":
        k = loggerLevelUtils.setFunctionName(t => M(t.source.id), "coloring");
        break;
      case "target":
        k = loggerLevelUtils.setFunctionName(t => M(t.target.id), "coloring");
        break;
      default:
        k = Z;
    }
    P.append("path").attr("d", linkPathGeneratorFactory.createLinkGenerator()).attr("stroke", k).attr("stroke-width", t => Math.max(1, t.width));
    mermaidConfigUtils_1.setupViewbox(undefined, W, 0, A);
  }, "draw");
  var L = loggerLevelUtils.setFunctionName(t => t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "").replaceAll(/([\n\r])+/g, "\n").trim(), "prepareTextForParsing");
  var T = loggerLevelUtils.setFunctionName(t => `.label {
      font-family: ${t.fontFamily};
    }`, "getStyles");
  var N = y.parse.bind(y);
  y.parse = t => N(L(t));
  var F = {
    styles: T,
    parser: y,
    db: E,
    renderer: {
      draw: A
    }
  };
  require.d(exports, {
    diagram: function () {
      return F;
    }
  });
}