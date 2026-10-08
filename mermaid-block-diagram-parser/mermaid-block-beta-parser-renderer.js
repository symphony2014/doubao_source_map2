// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mermaidIconStylesHelper'
// - Resolved require(988348) to 'mermaid-icon-styles-helper'
// - Renamed variable 'l' to 'lineArrowOffsetUtils'
// - Resolved require(744654) to 'line-arrow-offset-utils'
// - Renamed variable 'o' to 'mermaidSubgraphTitleMarginUtils'
// - Resolved require(152138) to 'mermaid-subgraph-title-margin-utils'
// - Renamed variable 'd' to 'mermaidTextIconUtils'
// - Resolved require(5699) to 'mermaid-text-icon-utils'
// - Renamed variable 'h' to 'mermaidTextLayoutUtils'
// - Resolved require(997032) to 'mermaid-text-layout-utils'
// - Renamed variable 'c' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'u' to 'syncedReferenceBlockManager'
// - Resolved require(750510) to 'synced-reference-block-manager'
// - Renamed variable 'g' to 'colorChannelExtractor'
// - Resolved require(165290) to 'color-channel-extractor'
// - Renamed variable 'y' to 'colorAlphaSetter'
// - Resolved require(882094) to 'color-alpha-setter'
// - Renamed variable 'p' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Renamed variable 'b' to 'graphDataStructureExport'
// - Resolved require(736993) to 'graph-data-structure-export'
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'nV' to 'getConfigAlias' (module 101498)
// - Updated imported property 'SY' to 'textUtils' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'ZH' to 'clearAccData' (module 101498)
// - Updated imported property 'iE' to 'getConfig' (module 101498)
// - Updated imported property 'oO' to 'sanitizeText' (module 101498)
// - Updated imported property 'ku' to 'evaluate' (module 101498)
// - Updated imported property 'Gr' to 'getUrl' (module 101498)
// - Updated imported property 'v2' to 'configureSvgSize' (module 101498)
// - Updated imported property 'Z' to 'syncReferenceBlock' (module 750510)
// - Updated imported property 'Z' to 'extractColorChannel' (module 165290)
// - Updated imported property 'Z' to 'setColorWithAlpha' (module 882094)
// - Updated imported property 'G' to 'getIconStyles' (module 988348)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'EY' to 'createText' (module 5699)
// - Updated imported property 'rw' to 'replaceIconSubstring' (module 5699)
// - Updated imported property 'SH' to 'decodeEntities' (module 997032)
// - Updated imported property 'w8' to 'textLayoutUtils' (module 997032)
// - Updated imported property 'be' to 'getStylesFromArray' (module 997032)
// - Updated imported property 'L' to 'getSubGraphTitleMargins' (module 152138)
// - Updated imported property 'o' to 'getLineOffsetFns' (module 744654)
// - Updated imported property 'k' to 'Graph' (module 736993)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 93687.1276d11a.js
         * chunkId: 93687
         * moduleId: 323490
         */
module.exports = function (module, exports, require) {
  var a;
  var mermaidIconStylesHelper = require("mermaid-icon-styles-helper") /*id: 988348*/;
  var lineArrowOffsetUtils = require("line-arrow-offset-utils") /*id: 744654*/;
  var mermaidSubgraphTitleMarginUtils = require("mermaid-subgraph-title-margin-utils") /*id: 152138*/;
  var mermaidTextIconUtils = require("mermaid-text-icon-utils") /*id: 5699*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var syncedReferenceBlockManager = require("synced-reference-block-manager") /*id: 750510*/;
  var colorChannelExtractor = require("color-channel-extractor") /*id: 165290*/;
  var colorAlphaSetter = require("color-alpha-setter") /*id: 882094*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var graphDataStructureExport = require("graph-data-structure-export") /*id: 736993*/;
  var f = function () {
    var t = mermaidConfigUtils.setName(function (t, e, r, i) {
      r = r || {};
      i = t.length;
      for (; i--; r[t[i]] = e);
      return r;
    }, "o");
    var e = [1, 15];
    var r = [1, 7];
    var i = [1, 13];
    var a = [1, 14];
    var s = [1, 19];
    var n = [1, 16];
    var l = [1, 17];
    var o = [1, 18];
    var d = [8, 30];
    var h = [8, 10, 21, 28, 29, 30, 31, 39, 43, 46];
    var u = [1, 23];
    var g = [1, 24];
    var y = [8, 10, 15, 16, 21, 28, 29, 30, 31, 39, 43, 46];
    var p = [8, 10, 15, 16, 21, 27, 28, 29, 30, 31, 39, 43, 46];
    var b = [1, 49];
    var f = {
      trace: mermaidConfigUtils.setName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        spaceLines: 3,
        SPACELINE: 4,
        NL: 5,
        separator: 6,
        SPACE: 7,
        EOF: 8,
        start: 9,
        BLOCK_DIAGRAM_KEY: 10,
        document: 11,
        stop: 12,
        statement: 13,
        link: 14,
        LINK: 15,
        START_LINK: 16,
        LINK_LABEL: 17,
        STR: 18,
        nodeStatement: 19,
        columnsStatement: 20,
        SPACE_BLOCK: 21,
        blockStatement: 22,
        classDefStatement: 23,
        cssClassStatement: 24,
        styleStatement: 25,
        node: 26,
        SIZE: 27,
        COLUMNS: 28,
        "id-block": 29,
        end: 30,
        NODE_ID: 31,
        nodeShapeNLabel: 32,
        dirList: 33,
        DIR: 34,
        NODE_DSTART: 35,
        NODE_DEND: 36,
        BLOCK_ARROW_START: 37,
        BLOCK_ARROW_END: 38,
        classDef: 39,
        CLASSDEF_ID: 40,
        CLASSDEF_STYLEOPTS: 41,
        DEFAULT: 42,
        class: 43,
        CLASSENTITY_IDS: 44,
        STYLECLASS: 45,
        style: 46,
        STYLE_ENTITY_IDS: 47,
        STYLE_DEFINITION_DATA: 48,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "SPACELINE",
        5: "NL",
        7: "SPACE",
        8: "EOF",
        10: "BLOCK_DIAGRAM_KEY",
        15: "LINK",
        16: "START_LINK",
        17: "LINK_LABEL",
        18: "STR",
        21: "SPACE_BLOCK",
        27: "SIZE",
        28: "COLUMNS",
        29: "id-block",
        30: "end",
        31: "NODE_ID",
        34: "DIR",
        35: "NODE_DSTART",
        36: "NODE_DEND",
        37: "BLOCK_ARROW_START",
        38: "BLOCK_ARROW_END",
        39: "classDef",
        40: "CLASSDEF_ID",
        41: "CLASSDEF_STYLEOPTS",
        42: "DEFAULT",
        43: "class",
        44: "CLASSENTITY_IDS",
        45: "STYLECLASS",
        46: "style",
        47: "STYLE_ENTITY_IDS",
        48: "STYLE_DEFINITION_DATA"
      },
      productions_: [0, [3, 1], [3, 2], [3, 2], [6, 1], [6, 1], [6, 1], [9, 3], [12, 1], [12, 1], [12, 2], [12, 2], [11, 1], [11, 2], [14, 1], [14, 4], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [19, 3], [19, 2], [19, 1], [20, 1], [22, 4], [22, 3], [26, 1], [26, 2], [33, 1], [33, 2], [32, 3], [32, 4], [23, 3], [23, 3], [24, 3], [25, 3]],
      performAction: mermaidConfigUtils.setName(function (t, e, r, i, a, s, n) {
        var l = s.length - 1;
        switch (a) {
          case 4:
            i.getLogger().debug("Rule: separator (NL) ");
            break;
          case 5:
            i.getLogger().debug("Rule: separator (Space) ");
            break;
          case 6:
            i.getLogger().debug("Rule: separator (EOF) ");
            break;
          case 7:
            i.getLogger().debug("Rule: hierarchy: ", s[l - 1]);
            i.setHierarchy(s[l - 1]);
            break;
          case 8:
            i.getLogger().debug("Stop NL ");
            break;
          case 9:
            i.getLogger().debug("Stop EOF ");
            break;
          case 10:
            i.getLogger().debug("Stop NL2 ");
            break;
          case 11:
            i.getLogger().debug("Stop EOF2 ");
            break;
          case 12:
            i.getLogger().debug("Rule: statement: ", s[l]);
            if (typeof s[l].length == "number") {
              this.$ = s[l];
            } else {
              this.$ = [s[l]];
            }
            break;
          case 13:
            i.getLogger().debug("Rule: statement #2: ", s[l - 1]);
            this.$ = [s[l - 1]].concat(s[l]);
            break;
          case 14:
            i.getLogger().debug("Rule: link: ", s[l], t);
            this.$ = {
              edgeTypeStr: s[l],
              label: ""
            };
            break;
          case 15:
            i.getLogger().debug("Rule: LABEL link: ", s[l - 3], s[l - 1], s[l]);
            this.$ = {
              edgeTypeStr: s[l],
              label: s[l - 1]
            };
            break;
          case 18:
            let o = parseInt(s[l]);
            let d = i.generateId();
            this.$ = {
              id: d,
              type: "space",
              label: "",
              width: o,
              children: []
            };
            break;
          case 23:
            i.getLogger().debug("Rule: (nodeStatement link node) ", s[l - 2], s[l - 1], s[l], " typestr: ", s[l - 1].edgeTypeStr);
            let h = i.edgeStrToEdgeData(s[l - 1].edgeTypeStr);
            this.$ = [{
              id: s[l - 2].id,
              label: s[l - 2].label,
              type: s[l - 2].type,
              directions: s[l - 2].directions
            }, {
              id: s[l - 2].id + "-" + s[l].id,
              start: s[l - 2].id,
              end: s[l].id,
              label: s[l - 1].label,
              type: "edge",
              directions: s[l].directions,
              arrowTypeEnd: h,
              arrowTypeStart: "arrow_open"
            }, {
              id: s[l].id,
              label: s[l].label,
              type: i.typeStr2Type(s[l].typeStr),
              directions: s[l].directions
            }];
            break;
          case 24:
            i.getLogger().debug("Rule: nodeStatement (abc88 node size) ", s[l - 1], s[l]);
            this.$ = {
              id: s[l - 1].id,
              label: s[l - 1].label,
              type: i.typeStr2Type(s[l - 1].typeStr),
              directions: s[l - 1].directions,
              widthInColumns: parseInt(s[l], 10)
            };
            break;
          case 25:
            i.getLogger().debug("Rule: nodeStatement (node) ", s[l]);
            this.$ = {
              id: s[l].id,
              label: s[l].label,
              type: i.typeStr2Type(s[l].typeStr),
              directions: s[l].directions,
              widthInColumns: 1
            };
            break;
          case 26:
            i.getLogger().debug("APA123", this ? this : "na");
            i.getLogger().debug("COLUMNS: ", s[l]);
            this.$ = {
              type: "column-setting",
              columns: s[l] === "auto" ? -1 : parseInt(s[l])
            };
            break;
          case 27:
            i.getLogger().debug("Rule: id-block statement : ", s[l - 2], s[l - 1]);
            i.generateId();
            this.$ = {
              ...s[l - 2],
              type: "composite",
              children: s[l - 1]
            };
            break;
          case 28:
            i.getLogger().debug("Rule: blockStatement : ", s[l - 2], s[l - 1], s[l]);
            let c = i.generateId();
            this.$ = {
              id: c,
              type: "composite",
              label: "",
              children: s[l - 1]
            };
            break;
          case 29:
            i.getLogger().debug("Rule: node (NODE_ID separator): ", s[l]);
            this.$ = {
              id: s[l]
            };
            break;
          case 30:
            i.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ", s[l - 1], s[l]);
            this.$ = {
              id: s[l - 1],
              label: s[l].label,
              typeStr: s[l].typeStr,
              directions: s[l].directions
            };
            break;
          case 31:
            i.getLogger().debug("Rule: dirList: ", s[l]);
            this.$ = [s[l]];
            break;
          case 32:
            i.getLogger().debug("Rule: dirList: ", s[l - 1], s[l]);
            this.$ = [s[l - 1]].concat(s[l]);
            break;
          case 33:
            i.getLogger().debug("Rule: nodeShapeNLabel: ", s[l - 2], s[l - 1], s[l]);
            this.$ = {
              typeStr: s[l - 2] + s[l],
              label: s[l - 1]
            };
            break;
          case 34:
            i.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ", s[l - 3], s[l - 2], " #3:", s[l - 1], s[l]);
            this.$ = {
              typeStr: s[l - 3] + s[l],
              label: s[l - 2],
              directions: s[l - 1]
            };
            break;
          case 35:
          case 36:
            this.$ = {
              type: "classDef",
              id: s[l - 1].trim(),
              css: s[l].trim()
            };
            break;
          case 37:
            this.$ = {
              type: "applyClass",
              id: s[l - 1].trim(),
              styleClass: s[l].trim()
            };
            break;
          case 38:
            this.$ = {
              type: "applyStyles",
              id: s[l - 1].trim(),
              stylesStr: s[l].trim()
            };
        }
      }, "anonymous"),
      table: [{
        9: 1,
        10: [1, 2]
      }, {
        1: [3]
      }, {
        10: e,
        11: 3,
        13: 4,
        19: 5,
        20: 6,
        21: r,
        22: 8,
        23: 9,
        24: 10,
        25: 11,
        26: 12,
        28: i,
        29: a,
        31: s,
        39: n,
        43: l,
        46: o
      }, {
        8: [1, 20]
      }, t(d, [2, 12], {
        13: 4,
        19: 5,
        20: 6,
        22: 8,
        23: 9,
        24: 10,
        25: 11,
        26: 12,
        11: 21,
        10: e,
        21: r,
        28: i,
        29: a,
        31: s,
        39: n,
        43: l,
        46: o
      }), t(h, [2, 16], {
        14: 22,
        15: u,
        16: g
      }), t(h, [2, 17]), t(h, [2, 18]), t(h, [2, 19]), t(h, [2, 20]), t(h, [2, 21]), t(h, [2, 22]), t(y, [2, 25], {
        27: [1, 25]
      }), t(h, [2, 26]), {
        19: 26,
        26: 12,
        31: s
      }, {
        10: e,
        11: 27,
        13: 4,
        19: 5,
        20: 6,
        21: r,
        22: 8,
        23: 9,
        24: 10,
        25: 11,
        26: 12,
        28: i,
        29: a,
        31: s,
        39: n,
        43: l,
        46: o
      }, {
        40: [1, 28],
        42: [1, 29]
      }, {
        44: [1, 30]
      }, {
        47: [1, 31]
      }, t(p, [2, 29], {
        32: 32,
        35: [1, 33],
        37: [1, 34]
      }), {
        1: [2, 7]
      }, t(d, [2, 13]), {
        26: 35,
        31: s
      }, {
        31: [2, 14]
      }, {
        17: [1, 36]
      }, t(y, [2, 24]), {
        10: e,
        11: 37,
        13: 4,
        14: 22,
        15: u,
        16: g,
        19: 5,
        20: 6,
        21: r,
        22: 8,
        23: 9,
        24: 10,
        25: 11,
        26: 12,
        28: i,
        29: a,
        31: s,
        39: n,
        43: l,
        46: o
      }, {
        30: [1, 38]
      }, {
        41: [1, 39]
      }, {
        41: [1, 40]
      }, {
        45: [1, 41]
      }, {
        48: [1, 42]
      }, t(p, [2, 30]), {
        18: [1, 43]
      }, {
        18: [1, 44]
      }, t(y, [2, 23]), {
        18: [1, 45]
      }, {
        30: [1, 46]
      }, t(h, [2, 28]), t(h, [2, 35]), t(h, [2, 36]), t(h, [2, 37]), t(h, [2, 38]), {
        36: [1, 47]
      }, {
        33: 48,
        34: b
      }, {
        15: [1, 50]
      }, t(h, [2, 27]), t(p, [2, 33]), {
        38: [1, 51]
      }, {
        33: 52,
        34: b,
        38: [2, 31]
      }, {
        31: [2, 15]
      }, t(p, [2, 34]), {
        38: [2, 32]
      }],
      defaultActions: {
        20: [2, 7],
        23: [2, 14],
        50: [2, 15],
        52: [2, 32]
      },
      parseError: mermaidConfigUtils.setName(function (t, e) {
        if (e.recoverable) {
          this.trace(t);
        } else {
          var r = Error(t);
          r.hash = e;
          throw r;
        }
      }, "parseError"),
      parse: mermaidConfigUtils.setName(function (t) {
        var e = this;
        var r = [0];
        var i = [];
        var a = [null];
        var s = [];
        var n = this.table;
        var l = "";
        var o = 0;
        var d = 0;
        var h = 0;
        var u = s.slice.call(arguments, 1);
        var g = Object.create(this.lexer);
        var y = {
          yy: {}
        };
        for (var p in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, p)) {
            y.yy[p] = this.yy[p];
          }
        }
        g.setInput(t, y.yy);
        y.yy.lexer = g;
        y.yy.parser = this;
        if (g.yylloc === undefined) {
          g.yylloc = {};
        }
        var b = g.yylloc;
        s.push(b);
        var f = g.options && g.options.ranges;
        function x() {
          var t;
          if (typeof (t = i.pop() || g.lex() || 1) != "number") {
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
        mermaidConfigUtils.setName(function (t) {
          r.length = r.length - t * 2;
          a.length = a.length - t;
          s.length = s.length - t;
        }, "popStack");
        mermaidConfigUtils.setName(x, "lex");
        var w;
        var m;
        var _;
        var L;
        var v;
        var k;
        var S;
        var E;
        var W;
        var D = {};
        while (true) {
          _ = r[r.length - 1];
          if (this.defaultActions[_]) {
            L = this.defaultActions[_];
          } else {
            if (w == null) {
              w = x();
            }
            L = n[_] && n[_][w];
          }
          if (L === undefined || !L.length || !L[0]) {
            var C = "";
            W = [];
            for (k in n[_]) {
              if (this.terminals_[k] && k > 2) {
                W.push("'" + this.terminals_[k] + "'");
              }
            }
            C = g.showPosition ? "Parse error on line " + (o + 1) + ":\n" + g.showPosition() + "\nExpecting " + W.join(", ") + ", got '" + (this.terminals_[w] || w) + "'" : "Parse error on line " + (o + 1) + ": Unexpected " + (w == 1 ? "end of input" : "'" + (this.terminals_[w] || w) + "'");
            this.parseError(C, {
              text: g.match,
              token: this.terminals_[w] || w,
              line: g.yylineno,
              loc: b,
              expected: W
            });
          }
          if (L[0] instanceof Array && L.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + _ + ", token: " + w);
          }
          switch (L[0]) {
            case 1:
              r.push(w);
              a.push(g.yytext);
              s.push(g.yylloc);
              r.push(L[1]);
              w = null;
              if (m) {
                w = m;
                m = null;
              } else {
                d = g.yyleng;
                l = g.yytext;
                o = g.yylineno;
                b = g.yylloc;
                if (h > 0) {
                  h--;
                }
              }
              break;
            case 2:
              S = this.productions_[L[1]][1];
              D.$ = a[a.length - S];
              D._$ = {
                first_line: s[s.length - (S || 1)].first_line,
                last_line: s[s.length - 1].last_line,
                first_column: s[s.length - (S || 1)].first_column,
                last_column: s[s.length - 1].last_column
              };
              if (f) {
                D._$.range = [s[s.length - (S || 1)].range[0], s[s.length - 1].range[1]];
              }
              if ((v = this.performAction.apply(D, [l, d, o, y.yy, L[1], a, s].concat(u))) !== undefined) {
                return v;
              }
              if (S) {
                r = r.slice(0, S * -1 * 2);
                a = a.slice(0, S * -1);
                s = s.slice(0, S * -1);
              }
              r.push(this.productions_[L[1]][0]);
              a.push(D.$);
              s.push(D._$);
              E = n[r[r.length - 2]][r[r.length - 1]];
              r.push(E);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var x = {
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
        var r = t.split(/(?:\r\n?|\n)/g);
        this._input = t + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - e);
        this.offset -= e;
        var i = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (r.length - 1) {
          this.yylineno -= r.length - 1;
        }
        var a = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: r ? (r.length === i.length ? this.yylloc.first_column : 0) + i[i.length - r.length].length - r[0].length : this.yylloc.first_column - e
        };
        if (this.options.ranges) {
          this.yylloc.range = [a[0], a[0] + this.yyleng - e];
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
        var r;
        var i;
        var a;
        if (this.options.backtrack_lexer) {
          a = {
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
            a.yylloc.range = this.yylloc.range.slice(0);
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
        r = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (r) {
          return r;
        }
        if (this._backtrack) {
          for (var s in a) {
            this[s] = a[s];
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
        var r;
        var i;
        var a = this._currentRules();
        var s = 0;
        for (; s < a.length; s++) {
          if ((r = this._input.match(this.rules[a[s]])) && (!e || r[0].length > e[0].length)) {
            e = r;
            i = s;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(r, a[s])) !== false) {
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
          return (t = this.test_match(e, a[i])) !== false && t;
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
      options: {},
      performAction: mermaidConfigUtils.setName(function (t, e, r, i) {
        switch (r) {
          case 0:
            t.getLogger().debug("Found block-beta");
            return 10;
          case 1:
            t.getLogger().debug("Found id-block");
            return 29;
          case 2:
            t.getLogger().debug("Found block");
            return 10;
          case 3:
            t.getLogger().debug(".", e.yytext);
            break;
          case 4:
            t.getLogger().debug("_", e.yytext);
            break;
          case 5:
            return 5;
          case 6:
            e.yytext = -1;
            return 28;
          case 7:
            e.yytext = e.yytext.replace(/columns\s+/, "");
            t.getLogger().debug("COLUMNS (LEX)", e.yytext);
            return 28;
          case 8:
          case 76:
          case 77:
          case 99:
            this.pushState("md_string");
            break;
          case 9:
            return "MD_STR";
          case 10:
          case 34:
          case 79:
            this.popState();
            break;
          case 11:
            this.pushState("string");
            break;
          case 12:
            t.getLogger().debug("LEX: POPPING STR:", e.yytext);
            this.popState();
            break;
          case 13:
            t.getLogger().debug("LEX: STR end:", e.yytext);
            return "STR";
          case 14:
            e.yytext = e.yytext.replace(/space\:/, "");
            t.getLogger().debug("SPACE NUM (LEX)", e.yytext);
            return 21;
          case 15:
            e.yytext = "1";
            t.getLogger().debug("COLUMNS (LEX)", e.yytext);
            return 21;
          case 16:
            return 42;
          case 17:
            return "LINKSTYLE";
          case 18:
            return "INTERPOLATE";
          case 19:
            this.pushState("CLASSDEF");
            return 39;
          case 20:
            this.popState();
            this.pushState("CLASSDEFID");
            return "DEFAULT_CLASSDEF_ID";
          case 21:
            this.popState();
            this.pushState("CLASSDEFID");
            return 40;
          case 22:
            this.popState();
            return 41;
          case 23:
            this.pushState("CLASS");
            return 43;
          case 24:
            this.popState();
            this.pushState("CLASS_STYLE");
            return 44;
          case 25:
            this.popState();
            return 45;
          case 26:
            this.pushState("STYLE_STMNT");
            return 46;
          case 27:
            this.popState();
            this.pushState("STYLE_DEFINITION");
            return 47;
          case 28:
            this.popState();
            return 48;
          case 29:
            this.pushState("acc_title");
            return "acc_title";
          case 30:
            this.popState();
            return "acc_title_value";
          case 31:
            this.pushState("acc_descr");
            return "acc_descr";
          case 32:
            this.popState();
            return "acc_descr_value";
          case 33:
            this.pushState("acc_descr_multiline");
            break;
          case 35:
            return "acc_descr_multiline_value";
          case 36:
            return 30;
          case 37:
          case 38:
          case 40:
          case 41:
          case 44:
            this.popState();
            t.getLogger().debug("Lex: ((");
            return "NODE_DEND";
          case 39:
            this.popState();
            t.getLogger().debug("Lex: ))");
            return "NODE_DEND";
          case 42:
            this.popState();
            t.getLogger().debug("Lex: (-");
            return "NODE_DEND";
          case 43:
            this.popState();
            t.getLogger().debug("Lex: -)");
            return "NODE_DEND";
          case 45:
            this.popState();
            t.getLogger().debug("Lex: ]]");
            return "NODE_DEND";
          case 46:
            this.popState();
            t.getLogger().debug("Lex: (");
            return "NODE_DEND";
          case 47:
            this.popState();
            t.getLogger().debug("Lex: ])");
            return "NODE_DEND";
          case 48:
          case 49:
            this.popState();
            t.getLogger().debug("Lex: /]");
            return "NODE_DEND";
          case 50:
            this.popState();
            t.getLogger().debug("Lex: )]");
            return "NODE_DEND";
          case 51:
            this.popState();
            t.getLogger().debug("Lex: )");
            return "NODE_DEND";
          case 52:
            this.popState();
            t.getLogger().debug("Lex: ]>");
            return "NODE_DEND";
          case 53:
            this.popState();
            t.getLogger().debug("Lex: ]");
            return "NODE_DEND";
          case 54:
            t.getLogger().debug("Lexa: -)");
            this.pushState("NODE");
            return 35;
          case 55:
            t.getLogger().debug("Lexa: (-");
            this.pushState("NODE");
            return 35;
          case 56:
            t.getLogger().debug("Lexa: ))");
            this.pushState("NODE");
            return 35;
          case 57:
          case 59:
          case 60:
          case 61:
          case 64:
            t.getLogger().debug("Lexa: )");
            this.pushState("NODE");
            return 35;
          case 58:
            t.getLogger().debug("Lex: (((");
            this.pushState("NODE");
            return 35;
          case 62:
            t.getLogger().debug("Lexc: >");
            this.pushState("NODE");
            return 35;
          case 63:
            t.getLogger().debug("Lexa: ([");
            this.pushState("NODE");
            return 35;
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
            this.pushState("NODE");
            return 35;
          case 72:
            t.getLogger().debug("Lexa: [");
            this.pushState("NODE");
            return 35;
          case 73:
            this.pushState("BLOCK_ARROW");
            t.getLogger().debug("LEX ARR START");
            return 37;
          case 74:
            t.getLogger().debug("Lex: NODE_ID", e.yytext);
            return 31;
          case 75:
            t.getLogger().debug("Lex: EOF", e.yytext);
            return 8;
          case 78:
            return "NODE_DESCR";
          case 80:
            t.getLogger().debug("Lex: Starting string");
            this.pushState("string");
            break;
          case 81:
            t.getLogger().debug("LEX ARR: Starting string");
            this.pushState("string");
            break;
          case 82:
            t.getLogger().debug("LEX: NODE_DESCR:", e.yytext);
            return "NODE_DESCR";
          case 83:
            t.getLogger().debug("LEX POPPING");
            this.popState();
            break;
          case 84:
            t.getLogger().debug("Lex: =>BAE");
            this.pushState("ARROW_DIR");
            break;
          case 85:
            e.yytext = e.yytext.replace(/^,\s*/, "");
            t.getLogger().debug("Lex (right): dir:", e.yytext);
            return "DIR";
          case 86:
            e.yytext = e.yytext.replace(/^,\s*/, "");
            t.getLogger().debug("Lex (left):", e.yytext);
            return "DIR";
          case 87:
            e.yytext = e.yytext.replace(/^,\s*/, "");
            t.getLogger().debug("Lex (x):", e.yytext);
            return "DIR";
          case 88:
            e.yytext = e.yytext.replace(/^,\s*/, "");
            t.getLogger().debug("Lex (y):", e.yytext);
            return "DIR";
          case 89:
            e.yytext = e.yytext.replace(/^,\s*/, "");
            t.getLogger().debug("Lex (up):", e.yytext);
            return "DIR";
          case 90:
            e.yytext = e.yytext.replace(/^,\s*/, "");
            t.getLogger().debug("Lex (down):", e.yytext);
            return "DIR";
          case 91:
            e.yytext = "]>";
            t.getLogger().debug("Lex (ARROW_DIR end):", e.yytext);
            this.popState();
            this.popState();
            return "BLOCK_ARROW_END";
          case 92:
            t.getLogger().debug("Lex: LINK", "#" + e.yytext + "#");
            return 15;
          case 93:
          case 94:
          case 95:
            t.getLogger().debug("Lex: LINK", e.yytext);
            return 15;
          case 96:
          case 97:
          case 98:
            t.getLogger().debug("Lex: START_LINK", e.yytext);
            this.pushState("LLABEL");
            return 16;
          case 100:
            t.getLogger().debug("Lex: Starting string");
            this.pushState("string");
            return "LINK_LABEL";
          case 101:
            this.popState();
            t.getLogger().debug("Lex: LINK", "#" + e.yytext + "#");
            return 15;
          case 102:
          case 103:
            this.popState();
            t.getLogger().debug("Lex: LINK", e.yytext);
            return 15;
          case 104:
            t.getLogger().debug("Lex: COLON", e.yytext);
            e.yytext = e.yytext.slice(1);
            return 27;
        }
      }, "anonymous"),
      rules: [/^(?:block-beta\b)/, /^(?:block:)/, /^(?:block\b)/, /^(?:[\s]+)/, /^(?:[\n]+)/, /^(?:((\u000D\u000A)|(\u000A)))/, /^(?:columns\s+auto\b)/, /^(?:columns\s+[\d]+)/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:space[:]\d+)/, /^(?:space\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\s+)/, /^(?:DEFAULT\s+)/, /^(?:\w+\s+)/, /^(?:[^\n]*)/, /^(?:class\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:style\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:end\b\s*)/, /^(?:\(\(\()/, /^(?:\)\)\))/, /^(?:[\)]\))/, /^(?:\}\})/, /^(?:\})/, /^(?:\(-)/, /^(?:-\))/, /^(?:\(\()/, /^(?:\]\])/, /^(?:\()/, /^(?:\]\))/, /^(?:\\\])/, /^(?:\/\])/, /^(?:\)\])/, /^(?:[\)])/, /^(?:\]>)/, /^(?:[\]])/, /^(?:-\))/, /^(?:\(-)/, /^(?:\)\))/, /^(?:\))/, /^(?:\(\(\()/, /^(?:\(\()/, /^(?:\{\{)/, /^(?:\{)/, /^(?:>)/, /^(?:\(\[)/, /^(?:\()/, /^(?:\[\[)/, /^(?:\[\|)/, /^(?:\[\()/, /^(?:\)\)\))/, /^(?:\[\\)/, /^(?:\[\/)/, /^(?:\[\\)/, /^(?:\[)/, /^(?:<\[)/, /^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/, /^(?:$)/, /^(?:["][`])/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:\]>\s*\()/, /^(?:,?\s*right\s*)/, /^(?:,?\s*left\s*)/, /^(?:,?\s*x\s*)/, /^(?:,?\s*y\s*)/, /^(?:,?\s*up\s*)/, /^(?:,?\s*down\s*)/, /^(?:\)\s*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*~~[\~]+\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:["][`])/, /^(?:["])/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?::\d+)/],
      conditions: {
        STYLE_DEFINITION: {
          rules: [28],
          inclusive: false
        },
        STYLE_STMNT: {
          rules: [27],
          inclusive: false
        },
        CLASSDEFID: {
          rules: [22],
          inclusive: false
        },
        CLASSDEF: {
          rules: [20, 21],
          inclusive: false
        },
        CLASS_STYLE: {
          rules: [25],
          inclusive: false
        },
        CLASS: {
          rules: [24],
          inclusive: false
        },
        LLABEL: {
          rules: [99, 100, 101, 102, 103],
          inclusive: false
        },
        ARROW_DIR: {
          rules: [85, 86, 87, 88, 89, 90, 91],
          inclusive: false
        },
        BLOCK_ARROW: {
          rules: [76, 81, 84],
          inclusive: false
        },
        NODE: {
          rules: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 77, 80],
          inclusive: false
        },
        md_string: {
          rules: [9, 10, 78, 79],
          inclusive: false
        },
        space: {
          rules: [],
          inclusive: false
        },
        string: {
          rules: [12, 13, 82, 83],
          inclusive: false
        },
        acc_descr_multiline: {
          rules: [34, 35],
          inclusive: false
        },
        acc_descr: {
          rules: [32],
          inclusive: false
        },
        acc_title: {
          rules: [30],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 14, 15, 16, 17, 18, 19, 23, 26, 29, 31, 33, 36, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 92, 93, 94, 95, 96, 97, 98, 104],
          inclusive: true
        }
      }
    };
    function w() {
      this.yy = {};
    }
    f.lexer = x;
    mermaidConfigUtils.setName(w, "Parser");
    w.prototype = f;
    f.Parser = w;
    return new w();
  }();
  f.parser = f;
  var x = new Map();
  var w = [];
  var m = new Map();
  var _ = "color";
  var L = "fill";
  var v = mermaidConfigUtils.getConfigAlias();
  var k = new Map();
  var S = mermaidConfigUtils.setName(t => mermaidConfigUtils.textUtils.sanitizeText(t, v), "sanitizeText");
  var E = mermaidConfigUtils.setName(function (t, e = "") {
    let r = k.get(t);
    if (!r) {
      r = {
        id: t,
        styles: [],
        textStyles: []
      };
      k.set(t, r);
    }
    if (e != null) {
      e.split(",").forEach(t => {
        let e = t.replace(/([^;]*);/, "$1").trim();
        if (RegExp(_).exec(t)) {
          let t = e.replace(L, "bgFill").replace(_, L);
          r.textStyles.push(t);
        }
        r.styles.push(e);
      });
    }
  }, "addStyleClass");
  var W = mermaidConfigUtils.setName(function (t, e = "") {
    let r = x.get(t);
    if (e != null) {
      r.styles = e.split(",");
    }
  }, "addStyle2Node");
  var D = mermaidConfigUtils.setName(function (t, e) {
    t.split(",").forEach(function (t) {
      let r = x.get(t);
      if (r === undefined) {
        let e = t.trim();
        r = {
          id: e,
          type: "na",
          children: []
        };
        x.set(e, r);
      }
      r.classes ||= [];
      r.classes.push(e);
    });
  }, "setCssClass");
  var C = mermaidConfigUtils.setName((t, e) => {
    let l = t.flat();
    let o = [];
    let d = l.find(t => (t == null ? undefined : t.type) === "column-setting");
    let h = (d == null ? undefined : d.columns) ?? -1;
    for (let t of l) {
      if (typeof h == "number" && h > 0 && t.type !== "column-setting" && typeof t.widthInColumns == "number" && t.widthInColumns > h) {
        mermaidConfigUtils.logger.warn(`Block ${t.id} width ${t.widthInColumns} exceeds configured column width ${h}`);
      }
      t.label &&= S(t.label);
      if (t.type === "classDef") {
        E(t.id, t.css);
        continue;
      }
      if (t.type === "applyClass") {
        D(t.id, (t == null ? undefined : t.styleClass) ?? "");
        continue;
      }
      if (t.type === "applyStyles") {
        if (t == null ? undefined : t.stylesStr) {
          W(t.id, t == null ? undefined : t.stylesStr);
        }
        continue;
      }
      if (t.type === "column-setting") {
        e.columns = t.columns ?? -1;
      } else if (t.type === "edge") {
        let e = (m.get(t.id) ?? 0) + 1;
        m.set(t.id, e);
        t.id = e + "-" + t.id;
        w.push(t);
      } else {
        if (!t.label) {
          if (t.type === "composite") {
            t.label = "";
          } else {
            t.label = t.id;
          }
        }
        let e = x.get(t.id);
        if (e === undefined) {
          x.set(t.id, t);
        } else {
          if (t.type !== "na") {
            e.type = t.type;
          }
          if (t.label !== t.id) {
            e.label = t.label;
          }
        }
        if (t.children) {
          C(t.children, t);
        }
        if (t.type === "space") {
          let e = t.width ?? 1;
          for (let r = 0; r < e; r++) {
            let e = syncedReferenceBlockManager.syncReferenceBlock(t);
            e.id = e.id + "-" + r;
            x.set(e.id, e);
            o.push(e);
          }
        } else if (e === undefined) {
          o.push(t);
        }
      }
    }
    e.children = o;
  }, "populateBlockDatabase");
  var M = [];
  var T = {
    id: "root",
    type: "composite",
    children: [],
    columns: -1
  };
  var $ = mermaidConfigUtils.setName(() => {
    mermaidConfigUtils.logger.debug("Clear called");
    mermaidConfigUtils.clearAccData();
    x = new Map([["root", T = {
      id: "root",
      type: "composite",
      children: [],
      columns: -1
    }]]);
    M = [];
    k = new Map();
    w = [];
    m = new Map();
  }, "clear");
  function N(t) {
    mermaidConfigUtils.logger.debug("typeStr2Type", t);
    switch (t) {
      case "[]":
        return "square";
      case "()":
        mermaidConfigUtils.logger.debug("we have a round");
        return "round";
      case "(())":
        return "circle";
      case ">]":
        return "rect_left_inv_arrow";
      case "{}":
        return "diamond";
      case "{{}}":
        return "hexagon";
      case "([])":
        return "stadium";
      case "[[]]":
        return "subroutine";
      case "[()]":
        return "cylinder";
      case "((()))":
        return "doublecircle";
      case "[//]":
        return "lean_right";
      case "[\\\\]":
        return "lean_left";
      case "[/\\]":
        return "trapezoid";
      case "[\\/]":
        return "inv_trapezoid";
      case "<[]>":
        return "block_arrow";
      default:
        return "na";
    }
  }
  function O(t) {
    mermaidConfigUtils.logger.debug("typeStr2Type", t);
    if (t === "==") {
      return "thick";
    } else {
      return "normal";
    }
  }
  function I(t) {
    switch (t.replace(/^[\s-]+|[\s-]+$/g, "")) {
      case "x":
        return "arrow_cross";
      case "o":
        return "arrow_circle";
      case ">":
        return "arrow_point";
      default:
        return "";
    }
  }
  mermaidConfigUtils.setName(N, "typeStr2Type");
  mermaidConfigUtils.setName(O, "edgeTypeStr2Type");
  mermaidConfigUtils.setName(I, "edgeStrToEdgeData");
  var B = 0;
  var A = mermaidConfigUtils.setName(() => {
    B++;
    return "id-" + Math.random().toString(36).substr(2, 12) + "-" + B;
  }, "generateId");
  var z = mermaidConfigUtils.setName(t => {
    T.children = t;
    C(t, T);
    M = T.children;
  }, "setHierarchy");
  var R = mermaidConfigUtils.setName(t => {
    let e = x.get(t);
    if (e) {
      if (e.columns) {
        return e.columns;
      } else if (e.children) {
        return e.children.length;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  }, "getColumns");
  var P = mermaidConfigUtils.setName(() => [...x.values()], "getBlocksFlat");
  var Y = mermaidConfigUtils.setName(() => M || [], "getBlocks");
  var Z = mermaidConfigUtils.setName(() => w, "getEdges");
  var F = mermaidConfigUtils.setName(t => x.get(t), "getBlock");
  var j = mermaidConfigUtils.setName(t => {
    x.set(t.id, t);
  }, "setBlock");
  var H = mermaidConfigUtils.setName(() => mermaidConfigUtils.logger, "getLogger");
  var X = mermaidConfigUtils.setName(function () {
    return k;
  }, "getClasses");
  var U = {
    getConfig: mermaidConfigUtils.setName(() => mermaidConfigUtils.getConfig().block, "getConfig"),
    typeStr2Type: N,
    edgeTypeStr2Type: O,
    edgeStrToEdgeData: I,
    getLogger: H,
    getBlocksFlat: P,
    getBlocks: Y,
    getEdges: Z,
    setHierarchy: z,
    getBlock: F,
    setBlock: j,
    getColumns: R,
    getClasses: X,
    clear: $,
    generateId: A
  };
  var K = mermaidConfigUtils.setName((t, e) => {
    let r = colorChannelExtractor.extractColorChannel;
    let i = r(t, "r");
    let a = r(t, "g");
    let s = r(t, "b");
    return colorAlphaSetter.setColorWithAlpha(i, a, s, e);
  }, "fade");
  var V = mermaidConfigUtils.setName(t => `.label {
    font-family: ${t.fontFamily};
    color: ${t.nodeTextColor || t.textColor};
  }
  .cluster-label text {
    fill: ${t.titleColor};
  }
  .cluster-label span,p {
    color: ${t.titleColor};
  }



  .label text,span,p {
    fill: ${t.nodeTextColor || t.textColor};
    color: ${t.nodeTextColor || t.textColor};
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
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

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
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${t.edgeLabelBackground};
      fill: ${t.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${K(t.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${K(t.mainBkg, 0.5)};
    fill: ${K(t.clusterBkg, 0.5)};
    stroke: ${K(t.clusterBorder, 0.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  .cluster span,p {
    color: ${t.titleColor};
  }
  /* .cluster div {
    color: ${t.titleColor};
  } */

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

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
  ${mermaidIconStylesHelper.getIconStyles()}
`, "getStyles");
  var G = mermaidConfigUtils.setName((t, e, r, i) => {
    e.forEach(e => {
      ta[e](t, r, i);
    });
  }, "insertMarkers");
  var q = mermaidConfigUtils.setName((t, e, r) => {
    mermaidConfigUtils.logger.trace("Making markers for ", r);
    t.append("defs").append("marker").attr("id", r + "_" + e + "-extensionStart").attr("class", "marker extension " + e).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-extensionEnd").attr("class", "marker extension " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
  }, "extension");
  var J = mermaidConfigUtils.setName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-compositionStart").attr("class", "marker composition " + e).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-compositionEnd").attr("class", "marker composition " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  }, "composition");
  var Q = mermaidConfigUtils.setName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-aggregationStart").attr("class", "marker aggregation " + e).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-aggregationEnd").attr("class", "marker aggregation " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  }, "aggregation");
  var tt = mermaidConfigUtils.setName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-dependencyStart").attr("class", "marker dependency " + e).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
    t.append("defs").append("marker").attr("id", r + "_" + e + "-dependencyEnd").attr("class", "marker dependency " + e).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "dependency");
  var te = mermaidConfigUtils.setName((t, e, r) => {
    t.append("defs").append("marker").attr("id", r + "_" + e + "-lollipopStart").attr("class", "marker lollipop " + e).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
    t.append("defs").append("marker").attr("id", r + "_" + e + "-lollipopEnd").attr("class", "marker lollipop " + e).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
  }, "lollipop");
  var tr = mermaidConfigUtils.setName((t, e, r) => {
    t.append("marker").attr("id", r + "_" + e + "-pointEnd").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", 6).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    t.append("marker").attr("id", r + "_" + e + "-pointStart").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  }, "point");
  var ti = mermaidConfigUtils.setName((t, e, r) => {
    t.append("marker").attr("id", r + "_" + e + "-circleEnd").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    t.append("marker").attr("id", r + "_" + e + "-circleStart").attr("class", "marker " + e).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  }, "circle");
  var ta = {
    extension: q,
    composition: J,
    aggregation: Q,
    dependency: tt,
    lollipop: te,
    point: tr,
    circle: ti,
    cross: mermaidConfigUtils.setName((t, e, r) => {
      t.append("marker").attr("id", r + "_" + e + "-crossEnd").attr("class", "marker cross " + e).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
      t.append("marker").attr("id", r + "_" + e + "-crossStart").attr("class", "marker cross " + e).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
    }, "cross"),
    barb: mermaidConfigUtils.setName((t, e, r) => {
      t.append("defs").append("marker").attr("id", r + "_" + e + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
    }, "barb")
  };
  var ts = ((a = mermaidConfigUtils.getConfigAlias()) === null || a === undefined ? undefined : a.block?.padding) ?? 8;
  function tn(t, e) {
    if (t === 0 || !Number.isInteger(t)) {
      throw Error("Columns must be an integer !== 0.");
    }
    if (e < 0 || !Number.isInteger(e)) {
      throw Error("Position must be a non-negative integer." + e);
    }
    if (t < 0) {
      return {
        px: e,
        py: 0
      };
    }
    if (t === 1) {
      return {
        px: 0,
        py: e
      };
    }
    let r = Math.floor(e / t);
    return {
      px: e % t,
      py: r
    };
  }
  mermaidConfigUtils.setName(tn, "calculateBlockPosition");
  var tl = mermaidConfigUtils.setName(t => {
    let e = 0;
    let r = 0;
    for (let s of t.children) {
      let {
        width: n,
        height: l,
        x: o,
        y: d
      } = s.size ?? {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      };
      mermaidConfigUtils.logger.debug("getMaxChildSize abc95 child:", s.id, "width:", n, "height:", l, "x:", o, "y:", d, s.type);
      if (s.type !== "space") {
        if (n > e) {
          e = n / (t.widthInColumns ?? 1);
        }
        if (l > r) {
          r = l;
        }
      }
    }
    return {
      width: e,
      height: r
    };
  }, "getMaxChildSize");
  function to(t, e) {
    let x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    let w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    mermaidConfigUtils.logger.debug("setBlockSizes abc95 (start)", t.id, t == null ? undefined : t.size?.x, "block width =", t == null ? undefined : t.size, "siblingWidth", x);
    if (!(t == null ? undefined : t.size?.width)) {
      t.size = {
        width: x,
        height: w,
        x: 0,
        y: 0
      };
    }
    let m = 0;
    let _ = 0;
    if (t.children?.length > 0) {
      for (let r of t.children) {
        to(r, e);
      }
      let r = tl(t);
      m = r.width;
      _ = r.height;
      mermaidConfigUtils.logger.debug("setBlockSizes abc95 maxWidth of", t.id, ":s children is ", m, _);
      for (let e of t.children) {
        if (e.size) {
          mermaidConfigUtils.logger.debug(`abc95 Setting size of children of ${t.id} id=${e.id} ${m} ${_} ${JSON.stringify(e.size)}`);
          e.size.width = m * (e.widthInColumns ?? 1) + ts * ((e.widthInColumns ?? 1) - 1);
          e.size.height = _;
          e.size.x = 0;
          e.size.y = 0;
          mermaidConfigUtils.logger.debug(`abc95 updating size of ${t.id} children child:${e.id} maxWidth:${m} maxHeight:${_}`);
        }
      }
      for (let r of t.children) {
        to(r, e, m, _);
      }
      let i = t.columns ?? -1;
      let a = 0;
      for (let e of t.children) {
        a += e.widthInColumns ?? 1;
      }
      let s = t.children.length;
      if (i > 0 && i < a) {
        s = i;
      }
      let n = Math.ceil(a / s);
      let l = s * (m + ts) + ts;
      let o = n * (_ + ts) + ts;
      if (l < x) {
        mermaidConfigUtils.logger.debug(`Detected to small sibling: abc95 ${t.id} siblingWidth ${x} siblingHeight ${w} width ${l}`);
        l = x;
        o = w;
        let e = (x - s * ts - ts) / s;
        let r = (w - n * ts - ts) / n;
        mermaidConfigUtils.logger.debug("Size indata abc88", t.id, "childWidth", e, "maxWidth", m);
        mermaidConfigUtils.logger.debug("Size indata abc88", t.id, "childHeight", r, "maxHeight", _);
        mermaidConfigUtils.logger.debug("Size indata abc88 xSize", s, "padding", ts);
        for (let i of t.children) {
          if (i.size) {
            i.size.width = e;
            i.size.height = r;
            i.size.x = 0;
            i.size.y = 0;
          }
        }
      }
      mermaidConfigUtils.logger.debug(`abc95 (finale calc) ${t.id} xSize ${s} ySize ${n} columns ${i}${t.children.length} width=${Math.max(l, t.size?.width || 0)}`);
      if (l < ((t == null ? undefined : t.size?.width) || 0)) {
        l = (t == null ? undefined : t.size?.width) || 0;
        let e = i > 0 ? Math.min(t.children.length, i) : t.children.length;
        if (e > 0) {
          let r = (l - e * ts - ts) / e;
          mermaidConfigUtils.logger.debug("abc95 (growing to fit) width", t.id, l, t.size?.width, r);
          for (let e of t.children) {
            if (e.size) {
              e.size.width = r;
            }
          }
        }
      }
      t.size = {
        width: l,
        height: o,
        x: 0,
        y: 0
      };
    }
    mermaidConfigUtils.logger.debug("setBlockSizes abc94 (done)", t.id, t == null ? undefined : t.size?.x, t == null ? undefined : t.size?.width, t == null ? undefined : t.size?.y, t == null ? undefined : t.size?.height);
  }
  function td(t, e) {
    var h;
    mermaidConfigUtils.logger.debug(`abc85 layout blocks (=>layoutBlocks) ${t.id} x: ${t == null ? undefined : t.size?.x} y: ${t == null ? undefined : t.size?.y} width: ${t == null ? undefined : t.size?.width}`);
    let S = t.columns ?? -1;
    mermaidConfigUtils.logger.debug("layoutBlocks columns abc95", t.id, "=>", S, t);
    if (t.children && t.children.length > 0) {
      let r = (t == null ? undefined : (h = t.children[0]) === null || h === undefined ? undefined : h.size?.width) ?? 0;
      let i = t.children.length * r + (t.children.length - 1) * ts;
      mermaidConfigUtils.logger.debug("widthOfChildren 88", i, "posX");
      let a = 0;
      mermaidConfigUtils.logger.debug("abc91 block?.size?.x", t.id, t == null ? undefined : t.size?.x);
      let s = (t == null ? undefined : t.size?.x) ? (t == null ? undefined : t.size?.x) + (-(t == null ? undefined : t.size?.width) / 2 || 0) : -ts;
      let n = 0;
      for (let r of t.children) {
        if (!r.size) {
          continue;
        }
        let {
          width: i,
          height: l
        } = r.size;
        let {
          px: o,
          py: d
        } = tn(S, a);
        if (d != n) {
          n = d;
          s = (t == null ? undefined : t.size?.x) ? (t == null ? undefined : t.size?.x) + (-(t == null ? undefined : t.size?.width) / 2 || 0) : -ts;
          mermaidConfigUtils.logger.debug("New row in layout for block", t.id, " and child ", r.id, n);
        }
        mermaidConfigUtils.logger.debug(`abc89 layout blocks (child) id: ${r.id} Pos: ${a} (px, py) ${o},${d} (${t == null ? undefined : t.size?.x},${t == null ? undefined : t.size?.y}) parent: ${t.id} width: ${i}${ts}`);
        if (t.size) {
          let e = i / 2;
          r.size.x = s + ts + e;
          mermaidConfigUtils.logger.debug(`abc91 layout blocks (calc) px, pyid:${r.id} startingPos=X${s} new startingPosX${r.size.x} ${e} padding=${ts} width=${i} halfWidth=${e} => x:${r.size.x} y:${r.size.y} ${r.widthInColumns} (width * (child?.w || 1)) / 2 ${i * ((r == null ? undefined : r.widthInColumns) ?? 1) / 2}`);
          s = r.size.x + e;
          r.size.y = t.size.y - t.size.height / 2 + d * (l + ts) + l / 2 + ts;
          mermaidConfigUtils.logger.debug(`abc88 layout blocks (calc) px, pyid:${r.id}startingPosX${s}${ts}${e}=>x:${r.size.x}y:${r.size.y}${r.widthInColumns}(width * (child?.w || 1)) / 2${i * ((r == null ? undefined : r.widthInColumns) ?? 1) / 2}`);
        }
        if (r.children) {
          td(r, e);
        }
        let h = (r == null ? undefined : r.widthInColumns) ?? 1;
        if (S > 0) {
          h = Math.min(h, S - a % S);
        }
        a += h;
        mermaidConfigUtils.logger.debug("abc88 columnsPos", r, a);
      }
    }
    mermaidConfigUtils.logger.debug(`layout blocks (<==layoutBlocks) ${t.id} x: ${t == null ? undefined : t.size?.x} y: ${t == null ? undefined : t.size?.y} width: ${t == null ? undefined : t.size?.width}`);
  }
  function th(t, {
    minX: e,
    minY: r,
    maxX: i,
    maxY: a
  } = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0
  }) {
    if (t.size && t.id !== "root") {
      let {
        x: s,
        y: n,
        width: l,
        height: o
      } = t.size;
      if (s - l / 2 < e) {
        e = s - l / 2;
      }
      if (n - o / 2 < r) {
        r = n - o / 2;
      }
      if (s + l / 2 > i) {
        i = s + l / 2;
      }
      if (n + o / 2 > a) {
        a = n + o / 2;
      }
    }
    if (t.children) {
      for (let s of t.children) {
        ({
          minX: e,
          minY: r,
          maxX: i,
          maxY: a
        } = th(s, {
          minX: e,
          minY: r,
          maxX: i,
          maxY: a
        }));
      }
    }
    return {
      minX: e,
      minY: r,
      maxX: i,
      maxY: a
    };
  }
  function tc(t) {
    let e = t.getBlock("root");
    if (!e) {
      return;
    }
    to(e, t, 0, 0);
    td(e, t);
    mermaidConfigUtils.logger.debug("getBlocks", JSON.stringify(e, null, 2));
    let {
      minX: r,
      minY: i,
      maxX: a,
      maxY: s
    } = th(e);
    return {
      x: r,
      y: i,
      width: a - r,
      height: s - i
    };
  }
  function tu(t, e) {
    if (e) {
      t.attr("style", e);
    }
  }
  function tg(t, e) {
    let r = axisAndZoomUtilities.select(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));
    let i = r.append("xhtml:div");
    let a = t.label;
    let s = t.isNode ? "nodeLabel" : "edgeLabel";
    let n = i.append("span");
    n.html(mermaidConfigUtils.sanitizeText(a, e));
    tu(n, t.labelStyle);
    n.attr("class", s);
    tu(i, t.labelStyle);
    i.style("display", "inline-block");
    i.style("white-space", "nowrap");
    i.attr("xmlns", "http://www.w3.org/1999/xhtml");
    return r.node();
  }
  mermaidConfigUtils.setName(to, "setBlockSizes");
  mermaidConfigUtils.setName(td, "layoutBlocks");
  mermaidConfigUtils.setName(th, "findBounds");
  mermaidConfigUtils.setName(tc, "layout");
  mermaidConfigUtils.setName(tu, "applyStyle");
  mermaidConfigUtils.setName(tg, "addHtmlLabel");
  var ty = mermaidConfigUtils.setName(async (t, e, r, i) => {
    let a = t || "";
    if (typeof a == "object") {
      a = a[0];
    }
    let s = mermaidConfigUtils.getConfigAlias();
    if (mermaidConfigUtils.evaluate(s.flowchart.htmlLabels)) {
      a = a.replace(/\\n|\n/g, "<br />");
      mermaidConfigUtils.logger.debug("vertexText" + a);
      return tg({
        isNode: i,
        label: await mermaidTextIconUtils.createText(mermaidTextLayoutUtils.decodeEntities(a)),
        labelStyle: e.replace("fill:", "color:")
      }, s);
    }
    {
      let t = document.createElementNS("http://www.w3.org/2000/svg", "text");
      t.setAttribute("style", e.replace("color:", "fill:"));
      let i = [];
      for (let e of typeof a == "string" ? a.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(a) ? a : []) {
        let i = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        i.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        i.setAttribute("dy", "1em");
        i.setAttribute("x", "0");
        if (r) {
          i.setAttribute("class", "title-row");
        } else {
          i.setAttribute("class", "row");
        }
        i.textContent = e.trim();
        t.appendChild(i);
      }
      return t;
    }
  }, "createLabel");
  var tp = mermaidConfigUtils.setName((t, e, r, i, a) => {
    if (e.arrowTypeStart) {
      tf(t, "start", e.arrowTypeStart, r, i, a);
    }
    if (e.arrowTypeEnd) {
      tf(t, "end", e.arrowTypeEnd, r, i, a);
    }
  }, "addEdgeMarkers");
  var tb = {
    arrow_cross: "cross",
    arrow_point: "point",
    arrow_barb: "barb",
    arrow_circle: "circle",
    aggregation: "aggregation",
    extension: "extension",
    composition: "composition",
    dependency: "dependency",
    lollipop: "lollipop"
  };
  var tf = mermaidConfigUtils.setName((t, e, r, i, a, s) => {
    let n = tb[r];
    if (!n) {
      mermaidConfigUtils.logger.warn(`Unknown arrow type: ${r}`);
      return;
    }
    t.attr(`marker-${e}`, `url(${i}#${a}_${s}-${n}${e === "start" ? "Start" : "End"})`);
  }, "addEdgeMarker");
  var tx = {};
  var tw = {};
  var tm = mermaidConfigUtils.setName(async (t, e) => {
    let r;
    let i = mermaidConfigUtils.getConfigAlias();
    let a = mermaidConfigUtils.evaluate(i.flowchart.htmlLabels);
    let s = e.labelType === "markdown" ? mermaidTextIconUtils.replaceIconSubstring(t, e.label, {
      style: e.labelStyle,
      useHtmlLabels: a,
      addSvgBackground: true
    }, i) : await ty(e.label, e.labelStyle);
    let n = t.insert("g").attr("class", "edgeLabel");
    let l = n.insert("g").attr("class", "label");
    l.node().appendChild(s);
    let o = s.getBBox();
    if (a) {
      let t = s.children[0];
      let e = axisAndZoomUtilities.select(s);
      o = t.getBoundingClientRect();
      e.attr("width", o.width);
      e.attr("height", o.height);
    }
    l.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")");
    tx[e.id] = n;
    e.width = o.width;
    e.height = o.height;
    if (e.startLabelLeft) {
      let i = await ty(e.startLabelLeft, e.labelStyle);
      let a = t.insert("g").attr("class", "edgeTerminals");
      let s = a.insert("g").attr("class", "inner");
      r = s.node().appendChild(i);
      let n = i.getBBox();
      s.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")");
      tw[e.id] ||= {};
      tw[e.id].startLeft = a;
      t_(r, e.startLabelLeft);
    }
    if (e.startLabelRight) {
      let i = await ty(e.startLabelRight, e.labelStyle);
      let a = t.insert("g").attr("class", "edgeTerminals");
      let s = a.insert("g").attr("class", "inner");
      r = a.node().appendChild(i);
      s.node().appendChild(i);
      let n = i.getBBox();
      s.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")");
      tw[e.id] ||= {};
      tw[e.id].startRight = a;
      t_(r, e.startLabelRight);
    }
    if (e.endLabelLeft) {
      let i = await ty(e.endLabelLeft, e.labelStyle);
      let a = t.insert("g").attr("class", "edgeTerminals");
      let s = a.insert("g").attr("class", "inner");
      r = s.node().appendChild(i);
      let n = i.getBBox();
      s.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")");
      a.node().appendChild(i);
      tw[e.id] ||= {};
      tw[e.id].endLeft = a;
      t_(r, e.endLabelLeft);
    }
    if (e.endLabelRight) {
      let i = await ty(e.endLabelRight, e.labelStyle);
      let a = t.insert("g").attr("class", "edgeTerminals");
      let s = a.insert("g").attr("class", "inner");
      r = s.node().appendChild(i);
      let n = i.getBBox();
      s.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")");
      a.node().appendChild(i);
      tw[e.id] ||= {};
      tw[e.id].endRight = a;
      t_(r, e.endLabelRight);
    }
    return s;
  }, "insertEdgeLabel");
  function t_(t, e) {
    if (mermaidConfigUtils.getConfigAlias().flowchart.htmlLabels && t) {
      t.style.width = e.length * 9 + "px";
      t.style.height = "12px";
    }
  }
  mermaidConfigUtils.setName(t_, "setTerminalWidth");
  var tL = mermaidConfigUtils.setName((t, e) => {
    mermaidConfigUtils.logger.debug("Moving label abc88 ", t.id, t.label, tx[t.id], e);
    let r = e.updatedPath ? e.updatedPath : e.originalPath;
    let i = mermaidConfigUtils.getConfigAlias();
    let {
      subGraphTitleTotalMargin: a
    } = mermaidSubgraphTitleMarginUtils.getSubGraphTitleMargins(i);
    if (t.label) {
      let i = tx[t.id];
      let s = t.x;
      let n = t.y;
      if (r) {
        let i = mermaidTextLayoutUtils.textLayoutUtils.calcLabelPosition(r);
        mermaidConfigUtils.logger.debug("Moving label " + t.label + " from (", s, ",", n, ") to (", i.x, ",", i.y, ") abc88");
        if (e.updatedPath) {
          s = i.x;
          n = i.y;
        }
      }
      i.attr("transform", `translate(${s}, ${n + a / 2})`);
    }
    if (t.startLabelLeft) {
      let e = tw[t.id].startLeft;
      let i = t.x;
      let a = t.y;
      if (r) {
        let e = mermaidTextLayoutUtils.textLayoutUtils.calcTerminalLabelPosition(!!t.arrowTypeStart * 10, "start_left", r);
        i = e.x;
        a = e.y;
      }
      e.attr("transform", `translate(${i}, ${a})`);
    }
    if (t.startLabelRight) {
      let e = tw[t.id].startRight;
      let i = t.x;
      let a = t.y;
      if (r) {
        let e = mermaidTextLayoutUtils.textLayoutUtils.calcTerminalLabelPosition(!!t.arrowTypeStart * 10, "start_right", r);
        i = e.x;
        a = e.y;
      }
      e.attr("transform", `translate(${i}, ${a})`);
    }
    if (t.endLabelLeft) {
      let e = tw[t.id].endLeft;
      let i = t.x;
      let a = t.y;
      if (r) {
        let e = mermaidTextLayoutUtils.textLayoutUtils.calcTerminalLabelPosition(!!t.arrowTypeEnd * 10, "end_left", r);
        i = e.x;
        a = e.y;
      }
      e.attr("transform", `translate(${i}, ${a})`);
    }
    if (t.endLabelRight) {
      let e = tw[t.id].endRight;
      let i = t.x;
      let a = t.y;
      if (r) {
        let e = mermaidTextLayoutUtils.textLayoutUtils.calcTerminalLabelPosition(!!t.arrowTypeEnd * 10, "end_right", r);
        i = e.x;
        a = e.y;
      }
      e.attr("transform", `translate(${i}, ${a})`);
    }
  }, "positionEdgeLabel");
  var tv = mermaidConfigUtils.setName((t, e) => {
    let r = t.x;
    let i = t.y;
    let a = Math.abs(e.x - r);
    let s = Math.abs(e.y - i);
    let n = t.width / 2;
    let l = t.height / 2;
    return !!(a >= n) || !!(s >= l);
  }, "outsideNode");
  var tk = mermaidConfigUtils.setName((t, e, r) => {
    mermaidConfigUtils.logger.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(e)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);
    let i = t.x;
    let a = t.y;
    let s = Math.abs(i - r.x);
    let n = t.width / 2;
    let l = r.x < e.x ? n - s : n + s;
    let o = t.height / 2;
    let d = Math.abs(e.y - r.y);
    let h = Math.abs(e.x - r.x);
    if (Math.abs(a - e.y) * n > Math.abs(i - e.x) * o) {
      let t = r.y < e.y ? e.y - o - a : a - o - e.y;
      l = h * t / d;
      let i = {
        x: r.x < e.x ? r.x + l : r.x - h + l,
        y: r.y < e.y ? r.y + d - t : r.y - d + t
      };
      if (l === 0) {
        i.x = e.x;
        i.y = e.y;
      }
      if (h === 0) {
        i.x = e.x;
      }
      if (d === 0) {
        i.y = e.y;
      }
      mermaidConfigUtils.logger.debug(`abc89 topp/bott calc, Q ${d}, q ${t}, R ${h}, r ${l}`, i);
      return i;
    }
    {
      let t = d * (l = r.x < e.x ? e.x - n - i : i - n - e.x) / h;
      let a = r.x < e.x ? r.x + h - l : r.x - h + l;
      let s = r.y < e.y ? r.y + t : r.y - t;
      mermaidConfigUtils.logger.debug(`sides calc abc89, Q ${d}, q ${t}, R ${h}, r ${l}`, {
        _x: a,
        _y: s
      });
      if (l === 0) {
        a = e.x;
        s = e.y;
      }
      if (h === 0) {
        a = e.x;
      }
      if (d === 0) {
        s = e.y;
      }
      return {
        x: a,
        y: s
      };
    }
  }, "intersection");
  var tS = mermaidConfigUtils.setName((t, e) => {
    mermaidConfigUtils.logger.debug("abc88 cutPathAtIntersect", t, e);
    let r = [];
    let i = t[0];
    let a = false;
    t.forEach(t => {
      if (tv(e, t) || a) {
        i = t;
        if (!a) {
          r.push(t);
        }
      } else {
        let s = tk(e, i, t);
        let n = false;
        r.forEach(t => {
          n = n || t.x === s.x && t.y === s.y;
        });
        if (!r.some(t => t.x === s.x && t.y === s.y)) {
          r.push(s);
        }
        a = true;
      }
    });
    return r;
  }, "cutPathAtIntersect");
  var tE = mermaidConfigUtils.setName(function (t, e, r, i, a, s, n) {
    let o;
    let d = r.points;
    mermaidConfigUtils.logger.debug("abc88 InsertEdge: edge=", r, "e=", e);
    let h = false;
    let u = s.node(e.v);
    var g = s.node(e.w);
    if ((g == null ? undefined : g.intersect) && (u == null ? undefined : u.intersect)) {
      (d = d.slice(1, r.points.length - 1)).unshift(u.intersect(d[0]));
      d.push(g.intersect(d[d.length - 1]));
    }
    if (r.toCluster) {
      mermaidConfigUtils.logger.debug("to cluster abc88", i[r.toCluster]);
      d = tS(r.points, i[r.toCluster].node);
      h = true;
    }
    if (r.fromCluster) {
      mermaidConfigUtils.logger.debug("from cluster abc88", i[r.fromCluster]);
      d = tS(d.reverse(), i[r.fromCluster].node).reverse();
      h = true;
    }
    let y = d.filter(t => !Number.isNaN(t.y));
    let b = axisAndZoomUtilities.$0Z;
    if (r.curve && (a === "graph" || a === "flowchart")) {
      b = r.curve;
    }
    let {
      x: f,
      y: x
    } = lineArrowOffsetUtils.getLineOffsetFns(r);
    let w = axisAndZoomUtilities.jvg().x(f).y(x).curve(b);
    switch (r.thickness) {
      case "normal":
        o = "edge-thickness-normal";
        break;
      case "thick":
      case "invisible":
        o = "edge-thickness-thick";
        break;
      default:
        o = "";
    }
    switch (r.pattern) {
      case "solid":
        o += " edge-pattern-solid";
        break;
      case "dotted":
        o += " edge-pattern-dotted";
        break;
      case "dashed":
        o += " edge-pattern-dashed";
    }
    let m = t.append("path").attr("d", w(y)).attr("id", r.id).attr("class", " " + o + (r.classes ? " " + r.classes : "")).attr("style", r.style);
    let _ = "";
    if (mermaidConfigUtils.getConfigAlias().flowchart.arrowMarkerAbsolute || mermaidConfigUtils.getConfigAlias().state.arrowMarkerAbsolute) {
      _ = mermaidConfigUtils.getUrl(true);
    }
    tp(m, r, _, n, a);
    let L = {};
    if (h) {
      L.updatedPath = d;
    }
    L.originalPath = r.points;
    return L;
  }, "insertEdge");
  var tW = mermaidConfigUtils.setName(t => {
    let e = new Set();
    for (let r of t) {
      switch (r) {
        case "x":
          e.add("right");
          e.add("left");
          break;
        case "y":
          e.add("up");
          e.add("down");
          break;
        default:
          e.add(r);
      }
    }
    return e;
  }, "expandAndDeduplicateDirections");
  var tD = mermaidConfigUtils.setName((t, e, r) => {
    let i = tW(t);
    let a = e.height + r.padding * 2;
    let s = a / 2;
    let n = e.width + s * 2 + r.padding;
    let l = r.padding / 2;
    if (i.has("right") && i.has("left") && i.has("up") && i.has("down")) {
      return [{
        x: 0,
        y: 0
      }, {
        x: s,
        y: 0
      }, {
        x: n / 2,
        y: l * 2
      }, {
        x: n - s,
        y: 0
      }, {
        x: n,
        y: 0
      }, {
        x: n,
        y: -a / 3
      }, {
        x: n + l * 2,
        y: -a / 2
      }, {
        x: n,
        y: a * -2 / 3
      }, {
        x: n,
        y: -a
      }, {
        x: n - s,
        y: -a
      }, {
        x: n / 2,
        y: -a - l * 2
      }, {
        x: s,
        y: -a
      }, {
        x: 0,
        y: -a
      }, {
        x: 0,
        y: a * -2 / 3
      }, {
        x: l * -2,
        y: -a / 2
      }, {
        x: 0,
        y: -a / 3
      }];
    } else if (i.has("right") && i.has("left") && i.has("up")) {
      return [{
        x: s,
        y: 0
      }, {
        x: n - s,
        y: 0
      }, {
        x: n,
        y: -a / 2
      }, {
        x: n - s,
        y: -a
      }, {
        x: s,
        y: -a
      }, {
        x: 0,
        y: -a / 2
      }];
    } else if (i.has("right") && i.has("left") && i.has("down")) {
      return [{
        x: 0,
        y: 0
      }, {
        x: s,
        y: -a
      }, {
        x: n - s,
        y: -a
      }, {
        x: n,
        y: 0
      }];
    } else if (i.has("right") && i.has("up") && i.has("down")) {
      return [{
        x: 0,
        y: 0
      }, {
        x: n,
        y: -s
      }, {
        x: n,
        y: -a + s
      }, {
        x: 0,
        y: -a
      }];
    } else if (i.has("left") && i.has("up") && i.has("down")) {
      return [{
        x: n,
        y: 0
      }, {
        x: 0,
        y: -s
      }, {
        x: 0,
        y: -a + s
      }, {
        x: n,
        y: -a
      }];
    } else if (i.has("right") && i.has("left")) {
      return [{
        x: s,
        y: 0
      }, {
        x: s,
        y: -l
      }, {
        x: n - s,
        y: -l
      }, {
        x: n - s,
        y: 0
      }, {
        x: n,
        y: -a / 2
      }, {
        x: n - s,
        y: -a
      }, {
        x: n - s,
        y: -a + l
      }, {
        x: s,
        y: -a + l
      }, {
        x: s,
        y: -a
      }, {
        x: 0,
        y: -a / 2
      }];
    } else if (i.has("up") && i.has("down")) {
      return [{
        x: n / 2,
        y: 0
      }, {
        x: 0,
        y: -l
      }, {
        x: s,
        y: -l
      }, {
        x: s,
        y: -a + l
      }, {
        x: 0,
        y: -a + l
      }, {
        x: n / 2,
        y: -a
      }, {
        x: n,
        y: -a + l
      }, {
        x: n - s,
        y: -a + l
      }, {
        x: n - s,
        y: -l
      }, {
        x: n,
        y: -l
      }];
    } else if (i.has("right") && i.has("up")) {
      return [{
        x: 0,
        y: 0
      }, {
        x: n,
        y: -s
      }, {
        x: 0,
        y: -a
      }];
    } else if (i.has("right") && i.has("down")) {
      return [{
        x: 0,
        y: 0
      }, {
        x: n,
        y: 0
      }, {
        x: 0,
        y: -a
      }];
    } else if (i.has("left") && i.has("up")) {
      return [{
        x: n,
        y: 0
      }, {
        x: 0,
        y: -s
      }, {
        x: n,
        y: -a
      }];
    } else if (i.has("left") && i.has("down")) {
      return [{
        x: n,
        y: 0
      }, {
        x: 0,
        y: 0
      }, {
        x: n,
        y: -a
      }];
    } else if (i.has("right")) {
      return [{
        x: s,
        y: -l
      }, {
        x: s,
        y: -l
      }, {
        x: n - s,
        y: -l
      }, {
        x: n - s,
        y: 0
      }, {
        x: n,
        y: -a / 2
      }, {
        x: n - s,
        y: -a
      }, {
        x: n - s,
        y: -a + l
      }, {
        x: s,
        y: -a + l
      }, {
        x: s,
        y: -a + l
      }];
    } else if (i.has("left")) {
      return [{
        x: s,
        y: 0
      }, {
        x: s,
        y: -l
      }, {
        x: n - s,
        y: -l
      }, {
        x: n - s,
        y: -a + l
      }, {
        x: s,
        y: -a + l
      }, {
        x: s,
        y: -a
      }, {
        x: 0,
        y: -a / 2
      }];
    } else if (i.has("up")) {
      return [{
        x: s,
        y: -l
      }, {
        x: s,
        y: -a + l
      }, {
        x: 0,
        y: -a + l
      }, {
        x: n / 2,
        y: -a
      }, {
        x: n,
        y: -a + l
      }, {
        x: n - s,
        y: -a + l
      }, {
        x: n - s,
        y: -l
      }];
    } else if (i.has("down")) {
      return [{
        x: n / 2,
        y: 0
      }, {
        x: 0,
        y: -l
      }, {
        x: s,
        y: -l
      }, {
        x: s,
        y: -a + l
      }, {
        x: n - s,
        y: -a + l
      }, {
        x: n - s,
        y: -l
      }, {
        x: n,
        y: -l
      }];
    } else {
      return [{
        x: 0,
        y: 0
      }];
    }
  }, "getArrowPoints");
  function tC(t, e, r, i) {
    var a = t.x;
    var s = t.y;
    var n = a - i.x;
    var l = s - i.y;
    var o = Math.sqrt(e * e * l * l + r * r * n * n);
    var d = Math.abs(e * r * n / o);
    if (i.x < a) {
      d = -d;
    }
    var h = Math.abs(e * r * l / o);
    if (i.y < s) {
      h = -h;
    }
    return {
      x: a + d,
      y: s + h
    };
  }
  function tM(t, e, r) {
    return tC(t, e, e, r);
  }
  function tT(t, e, r, i) {
    var a;
    var s;
    var n;
    var l;
    var o;
    var d;
    var h;
    var c;
    var u;
    var g;
    var y;
    var p;
    var b;
    a = e.y - t.y;
    n = t.x - e.x;
    o = e.x * t.y - t.x * e.y;
    u = a * r.x + n * r.y + o;
    g = a * i.x + n * i.y + o;
    if (u === 0 || g === 0 || !t$(u, g)) {
      s = i.y - r.y;
      l = r.x - i.x;
      d = i.x * r.y - r.x * i.y;
      h = s * t.x + l * t.y + d;
      c = s * e.x + l * e.y + d;
      if ((h === 0 || c === 0 || !t$(h, c)) && (y = a * l - s * n) != 0) {
        p = Math.abs(y / 2);
        return {
          x: (b = n * d - l * o) < 0 ? (b - p) / y : (b + p) / y,
          y: (b = s * o - a * d) < 0 ? (b - p) / y : (b + p) / y
        };
      }
    }
  }
  function t$(t, e) {
    return t * e > 0;
  }
  function tN(t, e, r) {
    var i = t.x;
    var a = t.y;
    var s = [];
    var n = Number.POSITIVE_INFINITY;
    var l = Number.POSITIVE_INFINITY;
    if (typeof e.forEach == "function") {
      e.forEach(function (t) {
        n = Math.min(n, t.x);
        l = Math.min(l, t.y);
      });
    } else {
      n = Math.min(n, e.x);
      l = Math.min(l, e.y);
    }
    var o = i - t.width / 2 - n;
    var d = a - t.height / 2 - l;
    var h = 0;
    for (; h < e.length; h++) {
      var c = e[h];
      var u = e[h < e.length - 1 ? h + 1 : 0];
      var g = tT(t, r, {
        x: o + c.x,
        y: d + c.y
      }, {
        x: o + u.x,
        y: d + u.y
      });
      if (g) {
        s.push(g);
      }
    }
    if (s.length) {
      if (s.length > 1) {
        s.sort(function (t, e) {
          var i = t.x - r.x;
          var a = t.y - r.y;
          var s = Math.sqrt(i * i + a * a);
          var n = e.x - r.x;
          var l = e.y - r.y;
          var o = Math.sqrt(n * n + l * l);
          if (s < o) {
            return -1;
          } else {
            return +(s !== o);
          }
        });
      }
      return s[0];
    } else {
      return t;
    }
  }
  mermaidConfigUtils.setName(function (t, e) {
    return t.intersect(e);
  }, "intersectNode");
  mermaidConfigUtils.setName(tC, "intersectEllipse");
  mermaidConfigUtils.setName(tM, "intersectCircle");
  mermaidConfigUtils.setName(tT, "intersectLine");
  mermaidConfigUtils.setName(t$, "sameSign");
  mermaidConfigUtils.setName(tN, "intersectPolygon");
  var tO = mermaidConfigUtils.setName((t, e) => {
    var r;
    var i;
    var a = t.x;
    var s = t.y;
    var n = e.x - a;
    var l = e.y - s;
    var o = t.width / 2;
    var d = t.height / 2;
    if (Math.abs(l) * o > Math.abs(n) * d) {
      if (l < 0) {
        d = -d;
      }
      r = l === 0 ? 0 : d * n / l;
      i = d;
    } else {
      if (n < 0) {
        o = -o;
      }
      r = o;
      i = n === 0 ? 0 : o * l / n;
    }
    return {
      x: a + r,
      y: s + i
    };
  }, "intersectRect");
  var tI = mermaidConfigUtils.setName(async (t, e, r, i) => {
    let a;
    let s;
    let n;
    let l = mermaidConfigUtils.getConfigAlias();
    let o = e.useHtmlLabels || mermaidConfigUtils.evaluate(l.flowchart.htmlLabels);
    a = r || "node default";
    let u = t.insert("g").attr("class", a).attr("id", e.domId || e.id);
    let g = u.insert("g").attr("class", "label").attr("style", e.labelStyle);
    s = e.labelText === undefined ? "" : typeof e.labelText == "string" ? e.labelText : e.labelText[0];
    let y = g.node();
    let b = (n = e.labelType === "markdown" ? mermaidTextIconUtils.replaceIconSubstring(g, mermaidConfigUtils.sanitizeText(mermaidTextLayoutUtils.decodeEntities(s), l), {
      useHtmlLabels: o,
      width: e.width || l.flowchart.wrappingWidth,
      classes: "markdown-node-label"
    }, l) : y.appendChild(await ty(mermaidConfigUtils.sanitizeText(mermaidTextLayoutUtils.decodeEntities(s), l), e.labelStyle, false, i))).getBBox();
    let f = e.padding / 2;
    if (mermaidConfigUtils.evaluate(l.flowchart.htmlLabels)) {
      let t = n.children[0];
      let e = axisAndZoomUtilities.select(n);
      let r = t.getElementsByTagName("img");
      if (r) {
        let t = s.replace(/<img[^>]*>/g, "").trim() === "";
        await Promise.all([...r].map(e => new Promise(r => {
          function i() {
            e.style.display = "flex";
            e.style.flexDirection = "column";
            if (t) {
              let t = parseInt(l.fontSize ? l.fontSize : window.getComputedStyle(document.body).fontSize, 10) * 5 + "px";
              e.style.minWidth = t;
              e.style.maxWidth = t;
            } else {
              e.style.width = "100%";
            }
            r(e);
          }
          mermaidConfigUtils.setName(i, "setupImage");
          setTimeout(() => {
            if (e.complete) {
              i();
            }
          });
          e.addEventListener("error", i);
          e.addEventListener("load", i);
        })));
      }
      b = t.getBoundingClientRect();
      e.attr("width", b.width);
      e.attr("height", b.height);
    }
    if (o) {
      g.attr("transform", "translate(" + -b.width / 2 + ", " + -b.height / 2 + ")");
    } else {
      g.attr("transform", "translate(0, " + -b.height / 2 + ")");
    }
    if (e.centerLabel) {
      g.attr("transform", "translate(" + -b.width / 2 + ", " + -b.height / 2 + ")");
    }
    g.insert("rect", ":first-child");
    return {
      shapeSvg: u,
      bbox: b,
      halfPadding: f,
      label: g
    };
  }, "labelHelper");
  var tB = mermaidConfigUtils.setName((t, e) => {
    let r = e.node().getBBox();
    t.width = r.width;
    t.height = r.height;
  }, "updateNodeBounds");
  function tA(t, e, r, i) {
    return t.insert("polygon", ":first-child").attr("points", i.map(function (t) {
      return t.x + "," + t.y;
    }).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -e / 2 + "," + r / 2 + ")");
  }
  mermaidConfigUtils.setName(tA, "insertPolygonShape");
  var tz = mermaidConfigUtils.setName(async (t, e) => {
    if (!e.useHtmlLabels && !mermaidConfigUtils.getConfigAlias().flowchart.htmlLabels) {
      e.centerLabel = true;
    }
    let {
      shapeSvg: r,
      bbox: i,
      halfPadding: a
    } = await tI(t, e, "node " + e.classes, true);
    mermaidConfigUtils.logger.info("Classes = ", e.classes);
    let s = r.insert("rect", ":first-child");
    s.attr("rx", e.rx).attr("ry", e.ry).attr("x", -i.width / 2 - a).attr("y", -i.height / 2 - a).attr("width", i.width + e.padding).attr("height", i.height + e.padding);
    tB(e, s);
    e.intersect = function (t) {
      return tO(e, t);
    };
    return r;
  }, "note");
  var tR = mermaidConfigUtils.setName(t => t ? " " + t : "", "formatClass");
  var tP = mermaidConfigUtils.setName((t, e) => `${e || "node default"}${tR(t.classes)} ${tR(t.class)}`, "getClassesFromNode");
  var tY = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i
    } = await tI(t, e, tP(e, undefined), true);
    let a = i.width + e.padding + (i.height + e.padding);
    let s = [{
      x: a / 2,
      y: 0
    }, {
      x: a,
      y: -a / 2
    }, {
      x: a / 2,
      y: -a
    }, {
      x: 0,
      y: -a / 2
    }];
    mermaidConfigUtils.logger.info("Question main (Circle)");
    let n = tA(r, a, a, s);
    n.attr("style", e.style);
    tB(e, n);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.warn("Intersect called");
      return tN(e, s, t);
    };
    return r;
  }, "question");
  var tZ = mermaidConfigUtils.setName((t, e) => {
    let r = t.insert("g").attr("class", "node default").attr("id", e.domId || e.id);
    r.insert("polygon", ":first-child").attr("points", [{
      x: 0,
      y: 14
    }, {
      x: 14,
      y: 0
    }, {
      x: 0,
      y: -14
    }, {
      x: -14,
      y: 0
    }].map(function (t) {
      return t.x + "," + t.y;
    }).join(" ")).attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28);
    e.width = 28;
    e.height = 28;
    e.intersect = function (t) {
      return tM(e, 14, t);
    };
    return r;
  }, "choice");
  var tF = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i
    } = await tI(t, e, tP(e, undefined), true);
    let a = i.height + e.padding;
    let s = a / 4;
    let n = i.width + s * 2 + e.padding;
    let l = [{
      x: s,
      y: 0
    }, {
      x: n - s,
      y: 0
    }, {
      x: n,
      y: -a / 2
    }, {
      x: n - s,
      y: -a
    }, {
      x: s,
      y: -a
    }, {
      x: 0,
      y: -a / 2
    }];
    let o = tA(r, n, a, l);
    o.attr("style", e.style);
    tB(e, o);
    e.intersect = function (t) {
      return tN(e, l, t);
    };
    return r;
  }, "hexagon");
  var tj = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i
    } = await tI(t, e, undefined, true);
    let a = i.height + e.padding * 2;
    let s = a / 2;
    let n = i.width + s * 2 + e.padding;
    let l = tD(e.directions, i, e);
    let o = tA(r, n, a, l);
    o.attr("style", e.style);
    tB(e, o);
    e.intersect = function (t) {
      return tN(e, l, t);
    };
    return r;
  }, "block_arrow");
  var tH = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i
    } = await tI(t, e, tP(e, undefined), true);
    let a = i.width + e.padding;
    let s = i.height + e.padding;
    let n = [{
      x: -s / 2,
      y: 0
    }, {
      x: a,
      y: 0
    }, {
      x: a,
      y: -s
    }, {
      x: -s / 2,
      y: -s
    }, {
      x: 0,
      y: -s / 2
    }];
    tA(r, a, s, n).attr("style", e.style);
    e.width = a + s;
    e.height = s;
    e.intersect = function (t) {
      return tN(e, n, t);
    };
    return r;
  }, "rect_left_inv_arrow");
  var tX = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i
    } = await tI(t, e, tP(e), true);
    let a = i.width + e.padding;
    let s = i.height + e.padding;
    let n = [{
      x: s * -2 / 6,
      y: 0
    }, {
      x: a - s / 6,
      y: 0
    }, {
      x: a + s * 2 / 6,
      y: -s
    }, {
      x: s / 6,
      y: -s
    }];
    let l = tA(r, a, s, n);
    l.attr("style", e.style);
    tB(e, l);
    e.intersect = function (t) {
      return tN(e, n, t);
    };
    return r;
  }, "lean_right");
  var tU = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i
    } = await tI(t, e, tP(e, undefined), true);
    let a = i.width + e.padding;
    let s = i.height + e.padding;
    let n = [{
      x: s * 2 / 6,
      y: 0
    }, {
      x: a + s / 6,
      y: 0
    }, {
      x: a - s * 2 / 6,
      y: -s
    }, {
      x: -s / 6,
      y: -s
    }];
    let l = tA(r, a, s, n);
    l.attr("style", e.style);
    tB(e, l);
    e.intersect = function (t) {
      return tN(e, n, t);
    };
    return r;
  }, "lean_left");
  var tK = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i
    } = await tI(t, e, tP(e, undefined), true);
    let a = i.width + e.padding;
    let s = i.height + e.padding;
    let n = [{
      x: s * -2 / 6,
      y: 0
    }, {
      x: a + s * 2 / 6,
      y: 0
    }, {
      x: a - s / 6,
      y: -s
    }, {
      x: s / 6,
      y: -s
    }];
    let l = tA(r, a, s, n);
    l.attr("style", e.style);
    tB(e, l);
    e.intersect = function (t) {
      return tN(e, n, t);
    };
    return r;
  }, "trapezoid");
  var tV = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i
    } = await tI(t, e, tP(e, undefined), true);
    let a = i.width + e.padding;
    let s = i.height + e.padding;
    let n = [{
      x: s / 6,
      y: 0
    }, {
      x: a - s / 6,
      y: 0
    }, {
      x: a + s * 2 / 6,
      y: -s
    }, {
      x: s * -2 / 6,
      y: -s
    }];
    let l = tA(r, a, s, n);
    l.attr("style", e.style);
    tB(e, l);
    e.intersect = function (t) {
      return tN(e, n, t);
    };
    return r;
  }, "inv_trapezoid");
  var tG = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i
    } = await tI(t, e, tP(e, undefined), true);
    let a = i.width + e.padding;
    let s = i.height + e.padding;
    let n = [{
      x: 0,
      y: 0
    }, {
      x: a + s / 2,
      y: 0
    }, {
      x: a,
      y: -s / 2
    }, {
      x: a + s / 2,
      y: -s
    }, {
      x: 0,
      y: -s
    }];
    let l = tA(r, a, s, n);
    l.attr("style", e.style);
    tB(e, l);
    e.intersect = function (t) {
      return tN(e, n, t);
    };
    return r;
  }, "rect_right_inv_arrow");
  var tq = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i
    } = await tI(t, e, tP(e, undefined), true);
    let a = i.width + e.padding;
    let s = a / 2;
    let n = s / (2.5 + a / 50);
    let l = i.height + n + e.padding;
    let o = "M 0," + n + " a " + s + "," + n + " 0,0,0 " + a + " 0 a " + s + "," + n + " 0,0,0 " + -a + " 0 l 0," + l + " a " + s + "," + n + " 0,0,0 " + a + " 0 l 0," + -l;
    let d = r.attr("label-offset-y", n).insert("path", ":first-child").attr("style", e.style).attr("d", o).attr("transform", "translate(" + -a / 2 + "," + -(l / 2 + n) + ")");
    tB(e, d);
    e.intersect = function (t) {
      let r = tO(e, t);
      let i = r.x - e.x;
      if (s != 0 && (Math.abs(i) < e.width / 2 || Math.abs(i) == e.width / 2 && Math.abs(r.y - e.y) > e.height / 2 - n)) {
        let a = n * n * (1 - i * i / (s * s));
        if (a != 0) {
          a = Math.sqrt(a);
        }
        a = n - a;
        if (t.y - e.y > 0) {
          a = -a;
        }
        r.y += a;
      }
      return r;
    };
    return r;
  }, "cylinder");
  var tJ = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i,
      halfPadding: a
    } = await tI(t, e, "node " + e.classes + " " + e.class, true);
    let s = r.insert("rect", ":first-child");
    let n = e.positioned ? e.width : i.width + e.padding;
    let l = e.positioned ? e.height : i.height + e.padding;
    let o = e.positioned ? -n / 2 : -i.width / 2 - a;
    let d = e.positioned ? -l / 2 : -i.height / 2 - a;
    s.attr("class", "basic label-container").attr("style", e.style).attr("rx", e.rx).attr("ry", e.ry).attr("x", o).attr("y", d).attr("width", n).attr("height", l);
    if (e.props) {
      let t = new Set(Object.keys(e.props));
      if (e.props.borders) {
        t1(s, e.props.borders, n, l);
        t.delete("borders");
      }
      t.forEach(t => {
        mermaidConfigUtils.logger.warn(`Unknown node property ${t}`);
      });
    }
    tB(e, s);
    e.intersect = function (t) {
      return tO(e, t);
    };
    return r;
  }, "rect");
  var tQ = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i,
      halfPadding: a
    } = await tI(t, e, "node " + e.classes, true);
    let s = r.insert("rect", ":first-child");
    let n = e.positioned ? e.width : i.width + e.padding;
    let l = e.positioned ? e.height : i.height + e.padding;
    let o = e.positioned ? -n / 2 : -i.width / 2 - a;
    let d = e.positioned ? -l / 2 : -i.height / 2 - a;
    s.attr("class", "basic cluster composite label-container").attr("style", e.style).attr("rx", e.rx).attr("ry", e.ry).attr("x", o).attr("y", d).attr("width", n).attr("height", l);
    if (e.props) {
      let t = new Set(Object.keys(e.props));
      if (e.props.borders) {
        t1(s, e.props.borders, n, l);
        t.delete("borders");
      }
      t.forEach(t => {
        mermaidConfigUtils.logger.warn(`Unknown node property ${t}`);
      });
    }
    tB(e, s);
    e.intersect = function (t) {
      return tO(e, t);
    };
    return r;
  }, "composite");
  var t0 = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r
    } = await tI(t, e, "label", true);
    mermaidConfigUtils.logger.trace("Classes = ", e.class);
    let i = r.insert("rect", ":first-child");
    i.attr("width", 0).attr("height", 0);
    r.attr("class", "label edgeLabel");
    if (e.props) {
      let t = new Set(Object.keys(e.props));
      if (e.props.borders) {
        t1(i, e.props.borders, 0, 0);
        t.delete("borders");
      }
      t.forEach(t => {
        mermaidConfigUtils.logger.warn(`Unknown node property ${t}`);
      });
    }
    tB(e, i);
    e.intersect = function (t) {
      return tO(e, t);
    };
    return r;
  }, "labelRect");
  function t1(t, e, r, i) {
    let a = [];
    let s = mermaidConfigUtils.setName(t => {
      a.push(t, 0);
    }, "addBorder");
    let n = mermaidConfigUtils.setName(t => {
      a.push(0, t);
    }, "skipBorder");
    if (e.includes("t")) {
      mermaidConfigUtils.logger.debug("add top border");
      s(r);
    } else {
      n(r);
    }
    if (e.includes("r")) {
      mermaidConfigUtils.logger.debug("add right border");
      s(i);
    } else {
      n(i);
    }
    if (e.includes("b")) {
      mermaidConfigUtils.logger.debug("add bottom border");
      s(r);
    } else {
      n(r);
    }
    if (e.includes("l")) {
      mermaidConfigUtils.logger.debug("add left border");
      s(i);
    } else {
      n(i);
    }
    t.attr("stroke-dasharray", a.join(" "));
  }
  mermaidConfigUtils.setName(t1, "applyNodePropertyBorders");
  var t2 = mermaidConfigUtils.setName(async (t, e) => {
    let r;
    r = e.classes ? "node " + e.classes : "node default";
    let i = t.insert("g").attr("class", r).attr("id", e.domId || e.id);
    let a = i.insert("rect", ":first-child");
    let s = i.insert("line");
    let n = i.insert("g").attr("class", "label");
    let l = e.labelText.flat ? e.labelText.flat() : e.labelText;
    let o = "";
    o = typeof l == "object" ? l[0] : l;
    mermaidConfigUtils.logger.info("Label text abc79", o, l, typeof l == "object");
    let d = n.node().appendChild(await ty(o, e.labelStyle, true, true));
    let h = {
      width: 0,
      height: 0
    };
    if (mermaidConfigUtils.evaluate(mermaidConfigUtils.getConfigAlias().flowchart.htmlLabels)) {
      let t = d.children[0];
      let e = axisAndZoomUtilities.select(d);
      h = t.getBoundingClientRect();
      e.attr("width", h.width);
      e.attr("height", h.height);
    }
    mermaidConfigUtils.logger.info("Text 2", l);
    let u = l.slice(1, l.length);
    let g = d.getBBox();
    let y = n.node().appendChild(await ty(u.join ? u.join("<br/>") : u, e.labelStyle, true, true));
    if (mermaidConfigUtils.evaluate(mermaidConfigUtils.getConfigAlias().flowchart.htmlLabels)) {
      let t = y.children[0];
      let e = axisAndZoomUtilities.select(y);
      h = t.getBoundingClientRect();
      e.attr("width", h.width);
      e.attr("height", h.height);
    }
    let b = e.padding / 2;
    axisAndZoomUtilities.select(y).attr("transform", "translate( " + (h.width > g.width ? 0 : (g.width - h.width) / 2) + ", " + (g.height + b + 5) + ")");
    axisAndZoomUtilities.select(d).attr("transform", "translate( " + (h.width < g.width ? 0 : -(g.width - h.width) / 2) + ", 0)");
    h = n.node().getBBox();
    n.attr("transform", "translate(" + -h.width / 2 + ", " + (-h.height / 2 - b + 3) + ")");
    a.attr("class", "outer title-state").attr("x", -h.width / 2 - b).attr("y", -h.height / 2 - b).attr("width", h.width + e.padding).attr("height", h.height + e.padding);
    s.attr("class", "divider").attr("x1", -h.width / 2 - b).attr("x2", h.width / 2 + b).attr("y1", -h.height / 2 - b + g.height + b).attr("y2", -h.height / 2 - b + g.height + b);
    tB(e, a);
    e.intersect = function (t) {
      return tO(e, t);
    };
    return i;
  }, "rectWithTitle");
  var t3 = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i
    } = await tI(t, e, tP(e, undefined), true);
    let a = i.height + e.padding;
    let s = i.width + a / 4 + e.padding;
    let n = r.insert("rect", ":first-child").attr("style", e.style).attr("rx", a / 2).attr("ry", a / 2).attr("x", -s / 2).attr("y", -a / 2).attr("width", s).attr("height", a);
    tB(e, n);
    e.intersect = function (t) {
      return tO(e, t);
    };
    return r;
  }, "stadium");
  var t4 = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i,
      halfPadding: a
    } = await tI(t, e, tP(e, undefined), true);
    let s = r.insert("circle", ":first-child");
    s.attr("style", e.style).attr("rx", e.rx).attr("ry", e.ry).attr("r", i.width / 2 + a).attr("width", i.width + e.padding).attr("height", i.height + e.padding);
    mermaidConfigUtils.logger.info("Circle main");
    tB(e, s);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("Circle intersect", e, i.width / 2 + a, t);
      return tM(e, i.width / 2 + a, t);
    };
    return r;
  }, "circle");
  var t8 = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i,
      halfPadding: a
    } = await tI(t, e, tP(e, undefined), true);
    let s = r.insert("g", ":first-child");
    let n = s.insert("circle");
    let l = s.insert("circle");
    s.attr("class", e.class);
    n.attr("style", e.style).attr("rx", e.rx).attr("ry", e.ry).attr("r", i.width / 2 + a + 5).attr("width", i.width + e.padding + 10).attr("height", i.height + e.padding + 10);
    l.attr("style", e.style).attr("rx", e.rx).attr("ry", e.ry).attr("r", i.width / 2 + a).attr("width", i.width + e.padding).attr("height", i.height + e.padding);
    mermaidConfigUtils.logger.info("DoubleCircle main");
    tB(e, n);
    e.intersect = function (t) {
      mermaidConfigUtils.logger.info("DoubleCircle intersect", e, i.width / 2 + a + 5, t);
      return tM(e, i.width / 2 + a + 5, t);
    };
    return r;
  }, "doublecircle");
  var t9 = mermaidConfigUtils.setName(async (t, e) => {
    let {
      shapeSvg: r,
      bbox: i
    } = await tI(t, e, tP(e, undefined), true);
    let a = i.width + e.padding;
    let s = i.height + e.padding;
    let n = [{
      x: 0,
      y: 0
    }, {
      x: a,
      y: 0
    }, {
      x: a,
      y: -s
    }, {
      x: 0,
      y: -s
    }, {
      x: 0,
      y: 0
    }, {
      x: -8,
      y: 0
    }, {
      x: a + 8,
      y: 0
    }, {
      x: a + 8,
      y: -s
    }, {
      x: -8,
      y: -s
    }, {
      x: -8,
      y: 0
    }];
    let l = tA(r, a, s, n);
    l.attr("style", e.style);
    tB(e, l);
    e.intersect = function (t) {
      return tN(e, n, t);
    };
    return r;
  }, "subroutine");
  var t5 = mermaidConfigUtils.setName((t, e) => {
    let r = t.insert("g").attr("class", "node default").attr("id", e.domId || e.id);
    let i = r.insert("circle", ":first-child");
    i.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    tB(e, i);
    e.intersect = function (t) {
      return tM(e, 7, t);
    };
    return r;
  }, "start");
  var t6 = mermaidConfigUtils.setName((t, e, r) => {
    let i = t.insert("g").attr("class", "node default").attr("id", e.domId || e.id);
    let a = 70;
    let s = 10;
    if (r === "LR") {
      a = 10;
      s = 70;
    }
    tB(e, i.append("rect").attr("x", a * -1 / 2).attr("y", s * -1 / 2).attr("width", a).attr("height", s).attr("class", "fork-join"));
    e.height = e.height + e.padding / 2;
    e.width = e.width + e.padding / 2;
    e.intersect = function (t) {
      return tO(e, t);
    };
    return i;
  }, "forkJoin");
  var t7 = {
    rhombus: tY,
    composite: tQ,
    question: tY,
    rect: tJ,
    labelRect: t0,
    rectWithTitle: t2,
    choice: tZ,
    circle: t4,
    doublecircle: t8,
    stadium: t3,
    hexagon: tF,
    block_arrow: tj,
    rect_left_inv_arrow: tH,
    lean_right: tX,
    lean_left: tU,
    trapezoid: tK,
    inv_trapezoid: tV,
    rect_right_inv_arrow: tG,
    cylinder: tq,
    start: t5,
    end: mermaidConfigUtils.setName((t, e) => {
      let r = t.insert("g").attr("class", "node default").attr("id", e.domId || e.id);
      let i = r.insert("circle", ":first-child");
      let a = r.insert("circle", ":first-child");
      a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
      i.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10);
      tB(e, a);
      e.intersect = function (t) {
        return tM(e, 7, t);
      };
      return r;
    }, "end"),
    note: tz,
    subroutine: t9,
    fork: t6,
    join: t6,
    class_box: mermaidConfigUtils.setName(async (t, e) => {
      let i;
      let a = e.padding / 2;
      i = e.classes ? "node " + e.classes : "node default";
      let s = t.insert("g").attr("class", i).attr("id", e.domId || e.id);
      let n = s.insert("rect", ":first-child");
      let l = s.insert("line");
      let o = s.insert("line");
      let d = 0;
      let h = 4;
      let u = s.insert("g").attr("class", "label");
      let g = 0;
      let y = e.classData.annotations?.[0];
      let b = e.classData.annotations[0] ? "«" + e.classData.annotations[0] + "»" : "";
      let f = u.node().appendChild(await ty(b, e.labelStyle, true, true));
      let x = f.getBBox();
      if (mermaidConfigUtils.evaluate(mermaidConfigUtils.getConfigAlias().flowchart.htmlLabels)) {
        let t = f.children[0];
        let e = axisAndZoomUtilities.select(f);
        x = t.getBoundingClientRect();
        e.attr("width", x.width);
        e.attr("height", x.height);
      }
      if (e.classData.annotations[0]) {
        h += x.height + 4;
        d += x.width;
      }
      let w = e.classData.label;
      if (e.classData.type !== undefined && e.classData.type !== "") {
        if (mermaidConfigUtils.getConfigAlias().flowchart.htmlLabels) {
          w += "&lt;" + e.classData.type + "&gt;";
        } else {
          w += "<" + e.classData.type + ">";
        }
      }
      let m = u.node().appendChild(await ty(w, e.labelStyle, true, true));
      axisAndZoomUtilities.select(m).attr("class", "classTitle");
      let _ = m.getBBox();
      if (mermaidConfigUtils.evaluate(mermaidConfigUtils.getConfigAlias().flowchart.htmlLabels)) {
        let t = m.children[0];
        let e = axisAndZoomUtilities.select(m);
        _ = t.getBoundingClientRect();
        e.attr("width", _.width);
        e.attr("height", _.height);
      }
      h += _.height + 4;
      if (_.width > d) {
        d = _.width;
      }
      let L = [];
      e.classData.members.forEach(async t => {
        let r = t.getDisplayDetails();
        let i = r.displayText;
        if (mermaidConfigUtils.getConfigAlias().flowchart.htmlLabels) {
          i = i.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        let a = u.node().appendChild(await ty(i, r.cssStyle ? r.cssStyle : e.labelStyle, true, true));
        let s = a.getBBox();
        if (mermaidConfigUtils.evaluate(mermaidConfigUtils.getConfigAlias().flowchart.htmlLabels)) {
          let t = a.children[0];
          let e = axisAndZoomUtilities.select(a);
          s = t.getBoundingClientRect();
          e.attr("width", s.width);
          e.attr("height", s.height);
        }
        if (s.width > d) {
          d = s.width;
        }
        h += s.height + 4;
        L.push(a);
      });
      h += 8;
      let v = [];
      e.classData.methods.forEach(async t => {
        let r = t.getDisplayDetails();
        let i = r.displayText;
        if (mermaidConfigUtils.getConfigAlias().flowchart.htmlLabels) {
          i = i.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        let a = u.node().appendChild(await ty(i, r.cssStyle ? r.cssStyle : e.labelStyle, true, true));
        let s = a.getBBox();
        if (mermaidConfigUtils.evaluate(mermaidConfigUtils.getConfigAlias().flowchart.htmlLabels)) {
          let t = a.children[0];
          let e = axisAndZoomUtilities.select(a);
          s = t.getBoundingClientRect();
          e.attr("width", s.width);
          e.attr("height", s.height);
        }
        if (s.width > d) {
          d = s.width;
        }
        h += s.height + 4;
        v.push(a);
      });
      h += 8;
      if (y) {
        let t = (d - x.width) / 2;
        axisAndZoomUtilities.select(f).attr("transform", "translate( " + (d * -1 / 2 + t) + ", " + h * -1 / 2 + ")");
        g = x.height + 4;
      }
      let k = (d - _.width) / 2;
      axisAndZoomUtilities.select(m).attr("transform", "translate( " + (d * -1 / 2 + k) + ", " + (h * -1 / 2 + g) + ")");
      g += _.height + 4;
      l.attr("class", "divider").attr("x1", -d / 2 - a).attr("x2", d / 2 + a).attr("y1", -h / 2 - a + 8 + g).attr("y2", -h / 2 - a + 8 + g);
      g += 8;
      L.forEach(t => {
        axisAndZoomUtilities.select(t).attr("transform", "translate( " + -d / 2 + ", " + (h * -1 / 2 + g + 4) + ")");
        let r = t == null ? undefined : t.getBBox();
        g += ((r == null ? undefined : r.height) ?? 0) + 4;
      });
      g += 8;
      o.attr("class", "divider").attr("x1", -d / 2 - a).attr("x2", d / 2 + a).attr("y1", -h / 2 - a + 8 + g).attr("y2", -h / 2 - a + 8 + g);
      g += 8;
      v.forEach(t => {
        axisAndZoomUtilities.select(t).attr("transform", "translate( " + -d / 2 + ", " + (h * -1 / 2 + g) + ")");
        let r = t == null ? undefined : t.getBBox();
        g += ((r == null ? undefined : r.height) ?? 0) + 4;
      });
      n.attr("style", e.style).attr("class", "outer title-state").attr("x", -d / 2 - a).attr("y", -(h / 2) - a).attr("width", d + e.padding).attr("height", h + e.padding);
      tB(e, n);
      e.intersect = function (t) {
        return tO(e, t);
      };
      return s;
    }, "class_box")
  };
  var et = {};
  var ee = mermaidConfigUtils.setName(async (t, e, r) => {
    let i;
    let a;
    if (e.link) {
      let s;
      if (mermaidConfigUtils.getConfigAlias().securityLevel === "sandbox") {
        s = "_top";
      } else if (e.linkTarget) {
        s = e.linkTarget || "_blank";
      }
      i = t.insert("svg:a").attr("xlink:href", e.link).attr("target", s);
      a = await t7[e.shape](i, e, r);
    } else {
      i = a = await t7[e.shape](t, e, r);
    }
    if (e.tooltip) {
      a.attr("title", e.tooltip);
    }
    if (e.class) {
      a.attr("class", "node default " + e.class);
    }
    et[e.id] = i;
    if (e.haveCallback) {
      et[e.id].attr("class", et[e.id].attr("class") + " clickable");
    }
    return i;
  }, "insertNode");
  var er = mermaidConfigUtils.setName(t => {
    let e = et[t.id];
    mermaidConfigUtils.logger.trace("Transforming node", t.diff, t, "translate(" + (t.x - t.width / 2 - 5) + ", " + t.width / 2 + ")");
    let r = t.diff || 0;
    if (t.clusterNode) {
      e.attr("transform", "translate(" + (t.x + r - t.width / 2) + ", " + (t.y - t.height / 2 - 8) + ")");
    } else {
      e.attr("transform", "translate(" + t.x + ", " + t.y + ")");
    }
    return r;
  }, "positionNode");
  function ei(t, e) {
    var a;
    let d;
    let u = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    let g = "default";
    if (((t == null ? undefined : t.classes?.length) || 0) > 0) {
      g = ((t == null ? undefined : t.classes) ?? []).join(" ");
    }
    g += " flowchart-label";
    let y = 0;
    let p = "";
    switch (t.type) {
      case "round":
        y = 5;
        p = "rect";
        break;
      case "composite":
        y = 0;
        p = "composite";
        d = 0;
        break;
      case "square":
      case "group":
      default:
        p = "rect";
        break;
      case "diamond":
        p = "question";
        break;
      case "hexagon":
        p = "hexagon";
        break;
      case "block_arrow":
        p = "block_arrow";
        break;
      case "odd":
      case "rect_left_inv_arrow":
        p = "rect_left_inv_arrow";
        break;
      case "lean_right":
        p = "lean_right";
        break;
      case "lean_left":
        p = "lean_left";
        break;
      case "trapezoid":
        p = "trapezoid";
        break;
      case "inv_trapezoid":
        p = "inv_trapezoid";
        break;
      case "circle":
        p = "circle";
        break;
      case "ellipse":
        p = "ellipse";
        break;
      case "stadium":
        p = "stadium";
        break;
      case "subroutine":
        p = "subroutine";
        break;
      case "cylinder":
        p = "cylinder";
        break;
      case "doublecircle":
        p = "doublecircle";
    }
    let b = mermaidTextLayoutUtils.getStylesFromArray((t == null ? undefined : t.styles) ?? []);
    let f = t.label;
    let x = t.size ?? {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
    return {
      labelStyle: b.labelStyle,
      shape: p,
      labelText: f,
      rx: y,
      ry: y,
      class: g,
      style: b.style,
      id: t.id,
      directions: t.directions,
      width: x.width,
      height: x.height,
      x: x.x,
      y: x.y,
      positioned: u,
      intersect: undefined,
      type: t.type,
      padding: d ?? ((a = mermaidConfigUtils.getConfig()) === null || a === undefined ? undefined : a.block?.padding) ?? 0
    };
  }
  async function ea(t, e, r) {
    let i = ei(e, r, false);
    if (i.type === "group") {
      return;
    }
    let a = mermaidConfigUtils.getConfig();
    let s = await ee(t, i, {
      config: a
    });
    let n = s.node().getBBox();
    let l = r.getBlock(i.id);
    l.size = {
      width: n.width,
      height: n.height,
      x: 0,
      y: 0,
      node: s
    };
    r.setBlock(l);
    s.remove();
  }
  async function es(t, e, r) {
    let i = ei(e, r, true);
    if (r.getBlock(i.id).type !== "space") {
      let r = mermaidConfigUtils.getConfig();
      await ee(t, i, {
        config: r
      });
      e.intersect = i == null ? undefined : i.intersect;
      er(i);
    }
  }
  async function en(t, e, r, i) {
    for (let a of e) {
      await i(t, a, r);
      if (a.children) {
        await en(t, a.children, r, i);
      }
    }
  }
  async function el(t, e, r) {
    await en(t, e, r, ea);
  }
  async function eo(t, e, r) {
    await en(t, e, r, es);
  }
  async function ed(t, e, r, i, a) {
    let s = new graphDataStructureExport.Graph({
      multigraph: true,
      compound: true
    });
    s.setGraph({
      rankdir: "TB",
      nodesep: 10,
      ranksep: 10,
      marginx: 8,
      marginy: 8
    });
    for (let t of r) {
      if (t.size) {
        s.setNode(t.id, {
          width: t.size.width,
          height: t.size.height,
          intersect: t.intersect
        });
      }
    }
    for (let r of e) {
      if (r.start && r.end) {
        let e = i.getBlock(r.start);
        let n = i.getBlock(r.end);
        if ((e == null ? undefined : e.size) && (n == null ? undefined : n.size)) {
          let i = e.size;
          let l = n.size;
          let o = [{
            x: i.x,
            y: i.y
          }, {
            x: i.x + (l.x - i.x) / 2,
            y: i.y + (l.y - i.y) / 2
          }, {
            x: l.x,
            y: l.y
          }];
          tE(t, {
            v: r.start,
            w: r.end,
            name: r.id
          }, {
            ...r,
            arrowTypeEnd: r.arrowTypeEnd,
            arrowTypeStart: r.arrowTypeStart,
            points: o,
            classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
          }, undefined, "block", s, a);
          if (r.label) {
            await tm(t, {
              ...r,
              label: r.label,
              labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
              arrowTypeEnd: r.arrowTypeEnd,
              arrowTypeStart: r.arrowTypeStart,
              points: o,
              classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
            });
            tL({
              ...r,
              x: o[1].x,
              y: o[1].y
            }, {
              originalPath: o
            });
          }
        }
      }
    }
  }
  mermaidConfigUtils.setName(ei, "getNodeFromBlock");
  mermaidConfigUtils.setName(ea, "calculateBlockSize");
  mermaidConfigUtils.setName(es, "insertBlockPositioned");
  mermaidConfigUtils.setName(en, "performOperations");
  mermaidConfigUtils.setName(el, "calculateBlockSizes");
  mermaidConfigUtils.setName(eo, "insertBlocks");
  mermaidConfigUtils.setName(ed, "insertEdges");
  var eh = mermaidConfigUtils.setName(function (t, e) {
    return e.db.getClasses();
  }, "getClasses");
  var ec = {
    parser: f,
    db: U,
    renderer: {
      draw: mermaidConfigUtils.setName(async function (t, e, r, i) {
        let a;
        let {
          securityLevel: s,
          block: n
        } = mermaidConfigUtils.getConfig();
        let l = i.db;
        if (s === "sandbox") {
          a = axisAndZoomUtilities.select("#i" + e);
        }
        let o = s === "sandbox" ? axisAndZoomUtilities.select(a.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body");
        let d = s === "sandbox" ? o.select(`[id="${e}"]`) : axisAndZoomUtilities.select(`[id="${e}"]`);
        G(d, ["point", "circle", "cross"], i.type, e);
        let h = l.getBlocks();
        let u = l.getBlocksFlat();
        let g = l.getEdges();
        let y = d.insert("g").attr("class", "block");
        await el(y, h, l);
        let b = tc(l);
        await eo(y, h, l);
        await ed(y, g, u, l, e);
        if (b) {
          let t = Math.max(1, Math.round(b.width / b.height * 0.125));
          let e = b.height + t + 10;
          let r = b.width + 10;
          let {
            useMaxWidth: i
          } = n;
          mermaidConfigUtils.configureSvgSize(d, e, r, !!i);
          mermaidConfigUtils.logger.debug("Here Bounds", b, b);
          d.attr("viewBox", `${b.x - 5} ${b.y - 5} ${b.width + 10} ${b.height + 10}`);
        }
      }, "draw"),
      getClasses: eh
    },
    styles: V
  };
  require.d(exports, {
    diagram: function () {
      return ec;
    }
  });
}