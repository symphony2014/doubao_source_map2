// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'l' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'a' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Renamed variable 'c' to 'graphDepthCalcUtils'
// - Resolved require(652785) to 'graph-depth-calc-utils'
// - Renamed variable 'h' to 'sankeyLayoutGenerator'
// - Resolved require(458203) to 'sankey-layout-generator'
// - Renamed variable 'u' to 'linkPathGeneratorFactory'
// - Resolved require(612048) to 'link-path-generator-factory'
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'ZH' to 'clearAccData' (module 101498)
// - Updated imported property 'SY' to 'textUtils' (module 101498)
// - Updated imported property 'nV' to 'getConfigAlias' (module 101498)
// - Updated imported property 'eu' to 'getAccTitle' (module 101498)
// - Updated imported property 'GN' to 'setAccTitle' (module 101498)
// - Updated imported property 'Mx' to 'getAccDescription' (module 101498)
// - Updated imported property 'U$' to 'setAccDescription' (module 101498)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 101498)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 101498)
// - Updated imported property 'Fy' to 'frozenConfig' (module 101498)
// - Updated imported property 'j7' to 'setupViewbox' (module 101498)
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
         * chunk file: 67511.03d79b9d.js
         * chunkId: 67511
         * moduleId: 225762
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var s;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var graphDepthCalcUtils = require("graph-depth-calc-utils") /*id: 652785*/;
  var sankeyLayoutGenerator = require("sankey-layout-generator") /*id: 458203*/;
  var linkPathGeneratorFactory = require("link-path-generator-factory") /*id: 612048*/;
  var f = function () {
    var t = mermaidConfigUtils.setName(function (t, e, n, i) {
      n = n || {};
      i = t.length;
      for (; i--; n[t[i]] = e);
      return n;
    }, "o");
    var e = [1, 9];
    var n = [1, 10];
    var i = [1, 5, 10, 12];
    var r = {
      trace: mermaidConfigUtils.setName(function () {}, "trace"),
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
      performAction: mermaidConfigUtils.setName(function (t, e, n, i, r, s, o) {
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
      parseError: mermaidConfigUtils.setName(function (t, e) {
        if (e.recoverable) {
          this.trace(t);
        } else {
          var n = Error(t);
          n.hash = e;
          throw n;
        }
      }, "parseError"),
      parse: mermaidConfigUtils.setName(function (t) {
        var e = this;
        var n = [0];
        var i = [];
        var r = [null];
        var s = [];
        var o = this.table;
        var a = "";
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
        mermaidConfigUtils.setName(function (t) {
          n.length = n.length - t * 2;
          r.length = r.length - t;
          s.length = s.length - t;
        }, "popStack");
        mermaidConfigUtils.setName(k, "lex");
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
                a = y.yytext;
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
              if ((W = this.performAction.apply(A, [a, h, c, d.yy, v[1], r, s].concat(f))) !== undefined) {
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
      performAction: mermaidConfigUtils.setName(function (t, e, n, i) {
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
    mermaidConfigUtils.setName(o, "Parser");
    o.prototype = r;
    r.Parser = o;
    return new o();
  }();
  f.parser = f;
  var y = [];
  var d = [];
  var p = new Map();
  var g = mermaidConfigUtils.setName(() => {
    y = [];
    d = [];
    p = new Map();
    mermaidConfigUtils.clearAccData();
  }, "clear");
  i = class {
    constructor(t, e, n = 0) {
      this.source = t;
      this.target = e;
      this.value = n;
    }
  };
  mermaidConfigUtils.setName(i, "SankeyLink");
  var m = i;
  var k = mermaidConfigUtils.setName((t, e, n) => {
    y.push(new m(t, e, n));
  }, "addLink");
  r = class {
    constructor(t) {
      this.ID = t;
    }
  };
  mermaidConfigUtils.setName(r, "SankeyNode");
  var _ = r;
  var x = mermaidConfigUtils.setName(t => {
    t = mermaidConfigUtils.textUtils.sanitizeText(t, mermaidConfigUtils.getConfigAlias());
    let e = p.get(t);
    if (e === undefined) {
      e = new _(t);
      p.set(t, e);
      d.push(e);
    }
    return e;
  }, "findOrCreateNode");
  var b = mermaidConfigUtils.setName(() => d, "getNodes");
  var v = mermaidConfigUtils.setName(() => y, "getLinks");
  var W = mermaidConfigUtils.setName(() => ({
    nodes: d.map(t => ({
      id: t.ID
    })),
    links: y.map(t => ({
      source: t.source.ID,
      target: t.target.ID,
      value: t.value
    }))
  }), "getGraph");
  var S = {
    nodesMap: p,
    getConfig: mermaidConfigUtils.setName(() => mermaidConfigUtils.getConfigAlias().sankey, "getConfig"),
    getNodes: b,
    getLinks: v,
    getGraph: W,
    addLink: k,
    findOrCreateNode: x,
    getAccTitle: mermaidConfigUtils.getAccTitle,
    setAccTitle: mermaidConfigUtils.setAccTitle,
    getAccDescription: mermaidConfigUtils.getAccDescription,
    setAccDescription: mermaidConfigUtils.setAccDescription,
    getDiagramTitle: mermaidConfigUtils.getDiagramTitle,
    setDiagramTitle: mermaidConfigUtils.setDiagramTitle,
    clear: g
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFRjF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb%15%m5WaE1sWTF$a2Rz-%ZvelNta*l$ekZK$ld0R1ZsWnJO$kZP%XpWMFlXN%9hR050WkR*amR6MDk"
      });
    }
  };
  mermaidConfigUtils.setName(s, "Uid");
  s.count = 0;
  var E = s;
  var $ = {
    left: graphDepthCalcUtils.getNodeDepth,
    right: graphDepthCalcUtils.calcVerticalOffset,
    center: graphDepthCalcUtils.computeNodeDepth,
    justify: graphDepthCalcUtils.getNodeLayerDepth
  };
  var w = mermaidConfigUtils.setName(function (t, e, n, i) {
    let g;
    let m;
    let {
      securityLevel: k,
      sankey: _
    } = mermaidConfigUtils.getConfigAlias();
    let x = mermaidConfigUtils.frozenConfig.sankey;
    if (k === "sandbox") {
      g = axisAndZoomUtilities.select("#i" + e);
    }
    let b = k === "sandbox" ? axisAndZoomUtilities.select(g.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body");
    let v = k === "sandbox" ? b.select(`[id="${e}"]`) : axisAndZoomUtilities.select(`[id="${e}"]`);
    let W = (_ == null ? undefined : _.width) ?? x.width;
    let S = (_ == null ? undefined : _.height) ?? x.width;
    let w = (_ == null ? undefined : _.useMaxWidth) ?? x.useMaxWidth;
    let A = (_ == null ? undefined : _.nodeAlignment) ?? x.nodeAlignment;
    let L = (_ == null ? undefined : _.prefix) ?? x.prefix;
    let T = (_ == null ? undefined : _.suffix) ?? x.suffix;
    let F = (_ == null ? undefined : _.showValues) ?? x.showValues;
    let N = i.db.getGraph();
    let I = $[A];
    sankeyLayoutGenerator.sankeyLayout().nodeId(t => t.id).nodeWidth(10).nodePadding(10 + !!F * 15).nodeAlign(I).extent([[0, 0], [W, S]])(N);
    let M = axisAndZoomUtilities.PKp(axisAndZoomUtilities.K2I);
    v.append("g").attr("class", "nodes").selectAll(".node").data(N.nodes).join("g").attr("class", "node").attr("id", t => (t.uid = E.next("node-")).id).attr("transform", function (t) {
      return "translate(" + t.x0 + "," + t.y0 + ")";
    }).attr("x", t => t.x0).attr("y", t => t.y0).append("rect").attr("height", t => t.y1 - t.y0).attr("width", t => t.x1 - t.x0).attr("fill", t => M(t.id));
    let P = mermaidConfigUtils.setName(t => {
      let {
        id: e,
        value: n
      } = t;
      if (F) {
        return `${e}
${L}${Math.round(n * 100) / 100}${T}`;
      } else {
        return e;
      }
    }, "getText");
    v.append("g").attr("class", "node-labels").attr("font-size", 14).selectAll("text").data(N.nodes).join("text").attr("x", t => t.x0 < W / 2 ? t.x1 + 6 : t.x0 - 6).attr("y", t => (t.y1 + t.y0) / 2).attr("dy", `${F ? "0" : "0.35"}em`).attr("text-anchor", t => t.x0 < W / 2 ? "start" : "end").text(P);
    let R = v.append("g").attr("class", "links").attr("fill", "none").attr("stroke-opacity", 0.5).selectAll(".link").data(N.links).join("g").attr("class", "link").style("mix-blend-mode", "multiply");
    let D = (_ == null ? undefined : _.linkColor) ?? "gradient";
    if (D === "gradient") {
      let t = R.append("linearGradient").attr("id", t => (t.uid = E.next("linearGradient-")).id).attr("gradientUnits", "userSpaceOnUse").attr("x1", t => t.source.x1).attr("x2", t => t.target.x0);
      t.append("stop").attr("offset", "0%").attr("stop-color", t => M(t.source.id));
      t.append("stop").attr("offset", "100%").attr("stop-color", t => M(t.target.id));
    }
    switch (D) {
      case "gradient":
        m = mermaidConfigUtils.setName(t => t.uid, "coloring");
        break;
      case "source":
        m = mermaidConfigUtils.setName(t => M(t.source.id), "coloring");
        break;
      case "target":
        m = mermaidConfigUtils.setName(t => M(t.target.id), "coloring");
        break;
      default:
        m = D;
    }
    R.append("path").attr("d", linkPathGeneratorFactory.createLinkGenerator()).attr("stroke", m).attr("stroke-width", t => Math.max(1, t.width));
    mermaidConfigUtils.setupViewbox(undefined, v, 0, w);
  }, "draw");
  var A = mermaidConfigUtils.setName(t => t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "").replaceAll(/([\n\r])+/g, "\n").trim(), "prepareTextForParsing");
  var L = mermaidConfigUtils.setName(t => `.label {
      font-family: ${t.fontFamily};
    }`, "getStyles");
  var T = f.parse.bind(f);
  f.parse = t => T(A(t));
  var F = {
    styles: L,
    parser: f,
    db: S,
    renderer: {
      draw: w
    }
  };
  require.d(exports, {
    diagram: function () {
      return F;
    }
  });
}