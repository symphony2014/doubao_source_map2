// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'diagramElementSelector'
// - Resolved require(150827) to 'diagram-element-selector'
// - Renamed variable 'r' to 'mermaidSvgViewportSetup'
// - Resolved require(3049) to 'mermaid-svg-viewport-setup'
// - Renamed variable 'a' to 'mermaidLayoutRegistryRenderer'
// - Resolved require(484129) to 'mermaid-layout-registry-renderer'
// - Resolved require(968232) to 'mermaid-flowchart-edge-renderer'
// - Resolved require(173696) to 'diagram-arrow-offset-utils'
// - Resolved require(411411) to 'mermaid-node-shapes-renderer'
// - Resolved require(954180) to 'subgraph-title-margins-calculator'
// - Resolved require(717687) to 'mermaid-style-utils'
// - Resolved require(990626) to 'icon-utils-text-rendering'
// - Renamed variable 'c' to 'mermaidDiagramUtils'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'l' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'o' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'h' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Renamed variable 'u' to 'colorChannelExtractor'
// - Resolved require(165290) to 'color-channel-extractor'
// - Renamed variable 'd' to 'colorAlphaSetter'
// - Resolved require(882094) to 'color-alpha-setter'
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'r2' to 'defineProperties' (module 696754)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'ZH' to 'clearCommonDb' (module 401926)
// - Updated imported property 'GN' to 'setAccTitle' (module 401926)
// - Updated imported property 'eu' to 'getAccTitle' (module 401926)
// - Updated imported property 'U$' to 'setAccDescription' (module 401926)
// - Updated imported property 'Mx' to 'getAccDescription' (module 401926)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 401926)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 401926)
// - Updated imported property 'Ln' to 'getEdgeId' (module 583673)
// - Updated imported property 'w8' to 'mermaidUtils' (module 583673)
// - Updated imported property 'q' to 'getDiagramElement' (module 150827)
// - Updated imported property '_b' to 'getRegisteredLayoutAlgorithm' (module 484129)
// - Updated imported property 'sY' to 'render' (module 484129)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'j' to 'setupViewPortForSvg' (module 3049)
// - Updated imported property 'Z' to 'extractColorChannel' (module 165290)
// - Updated imported property 'Z' to 'setColorWithAlpha' (module 882094)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 86186.be688ec3.js
         * chunkId: 86186
         * moduleId: 478214
         */
module.exports = function (module, exports, require) {
  var s;
  var diagramElementSelector = require("diagram-element-selector") /*id: 150827*/;
  var mermaidSvgViewportSetup = require("mermaid-svg-viewport-setup") /*id: 3049*/;
  var mermaidLayoutRegistryRenderer = require("mermaid-layout-registry-renderer") /*id: 484129*/;
  require("mermaid-flowchart-edge-renderer") /*id: 968232*/;
  require("diagram-arrow-offset-utils") /*id: 173696*/;
  require("mermaid-node-shapes-renderer") /*id: 411411*/;
  require("subgraph-title-margins-calculator") /*id: 954180*/;
  require("mermaid-style-utils") /*id: 717687*/;
  require("icon-utils-text-rendering") /*id: 990626*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var colorChannelExtractor = require("color-channel-extractor") /*id: 165290*/;
  var colorAlphaSetter = require("color-alpha-setter") /*id: 882094*/;
  var y = function () {
    var t = loggerLevelUtils.setFunctionName(function (t, e, i, s) {
      i = i || {};
      s = t.length;
      for (; s--; i[t[s]] = e);
      return i;
    }, "o");
    var e = [6, 8, 10, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 43, 44, 50];
    var i = [1, 10];
    var s = [1, 11];
    var n = [1, 12];
    var r = [1, 13];
    var a = [1, 20];
    var c = [1, 21];
    var l = [1, 22];
    var h = [1, 23];
    var u = [1, 24];
    var d = [1, 19];
    var y = [1, 25];
    var p = [1, 26];
    var _ = [1, 18];
    var g = [1, 33];
    var b = [1, 34];
    var f = [1, 35];
    var m = [1, 36];
    var E = [1, 37];
    var k = [6, 8, 10, 13, 15, 17, 20, 21, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 43, 44, 50, 63, 64, 65, 66, 67];
    var O = [1, 42];
    var S = [1, 43];
    var T = [1, 52];
    var A = [40, 50, 68, 69];
    var N = [1, 63];
    var v = [1, 61];
    var R = [1, 58];
    var I = [1, 62];
    var C = [1, 64];
    var x = [6, 8, 10, 13, 17, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 41, 42, 43, 44, 48, 49, 50, 63, 64, 65, 66, 67];
    var D = [63, 64, 65, 66, 67];
    var $ = [1, 81];
    var L = [1, 80];
    var w = [1, 78];
    var M = [1, 79];
    var W = [6, 10, 42, 47];
    var B = [6, 10, 13, 41, 42, 47, 48, 49];
    var F = [1, 89];
    var Y = [1, 88];
    var P = [1, 87];
    var Z = [19, 56];
    var K = [1, 98];
    var G = [1, 97];
    var U = [19, 56, 58, 60];
    var z = {
      trace: loggerLevelUtils.setFunctionName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        ER_DIAGRAM: 4,
        document: 5,
        EOF: 6,
        line: 7,
        SPACE: 8,
        statement: 9,
        NEWLINE: 10,
        entityName: 11,
        relSpec: 12,
        COLON: 13,
        role: 14,
        STYLE_SEPARATOR: 15,
        idList: 16,
        BLOCK_START: 17,
        attributes: 18,
        BLOCK_STOP: 19,
        SQS: 20,
        SQE: 21,
        title: 22,
        title_value: 23,
        acc_title: 24,
        acc_title_value: 25,
        acc_descr: 26,
        acc_descr_value: 27,
        acc_descr_multiline_value: 28,
        direction: 29,
        classDefStatement: 30,
        classStatement: 31,
        styleStatement: 32,
        direction_tb: 33,
        direction_bt: 34,
        direction_rl: 35,
        direction_lr: 36,
        CLASSDEF: 37,
        stylesOpt: 38,
        separator: 39,
        UNICODE_TEXT: 40,
        STYLE_TEXT: 41,
        COMMA: 42,
        CLASS: 43,
        STYLE: 44,
        style: 45,
        styleComponent: 46,
        SEMI: 47,
        NUM: 48,
        BRKT: 49,
        ENTITY_NAME: 50,
        attribute: 51,
        attributeType: 52,
        attributeName: 53,
        attributeKeyTypeList: 54,
        attributeComment: 55,
        ATTRIBUTE_WORD: 56,
        attributeKeyType: 57,
        ",": 58,
        ATTRIBUTE_KEY: 59,
        COMMENT: 60,
        cardinality: 61,
        relType: 62,
        ZERO_OR_ONE: 63,
        ZERO_OR_MORE: 64,
        ONE_OR_MORE: 65,
        ONLY_ONE: 66,
        MD_PARENT: 67,
        NON_IDENTIFYING: 68,
        IDENTIFYING: 69,
        WORD: 70,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "ER_DIAGRAM",
        6: "EOF",
        8: "SPACE",
        10: "NEWLINE",
        13: "COLON",
        15: "STYLE_SEPARATOR",
        17: "BLOCK_START",
        19: "BLOCK_STOP",
        20: "SQS",
        21: "SQE",
        22: "title",
        23: "title_value",
        24: "acc_title",
        25: "acc_title_value",
        26: "acc_descr",
        27: "acc_descr_value",
        28: "acc_descr_multiline_value",
        33: "direction_tb",
        34: "direction_bt",
        35: "direction_rl",
        36: "direction_lr",
        37: "CLASSDEF",
        40: "UNICODE_TEXT",
        41: "STYLE_TEXT",
        42: "COMMA",
        43: "CLASS",
        44: "STYLE",
        47: "SEMI",
        48: "NUM",
        49: "BRKT",
        50: "ENTITY_NAME",
        56: "ATTRIBUTE_WORD",
        58: ",",
        59: "ATTRIBUTE_KEY",
        60: "COMMENT",
        63: "ZERO_OR_ONE",
        64: "ZERO_OR_MORE",
        65: "ONE_OR_MORE",
        66: "ONLY_ONE",
        67: "MD_PARENT",
        68: "NON_IDENTIFYING",
        69: "IDENTIFYING",
        70: "WORD"
      },
      productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 5], [9, 9], [9, 7], [9, 7], [9, 4], [9, 6], [9, 3], [9, 5], [9, 1], [9, 3], [9, 7], [9, 9], [9, 6], [9, 8], [9, 4], [9, 6], [9, 2], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [29, 1], [29, 1], [29, 1], [29, 1], [30, 4], [16, 1], [16, 1], [16, 3], [16, 3], [31, 3], [32, 4], [38, 1], [38, 3], [45, 1], [45, 2], [39, 1], [39, 1], [39, 1], [46, 1], [46, 1], [46, 1], [46, 1], [11, 1], [11, 1], [18, 1], [18, 2], [51, 2], [51, 3], [51, 3], [51, 4], [52, 1], [53, 1], [54, 1], [54, 3], [57, 1], [55, 1], [12, 3], [61, 1], [61, 1], [61, 1], [61, 1], [61, 1], [62, 1], [62, 1], [14, 1], [14, 1], [14, 1]],
      performAction: loggerLevelUtils.setFunctionName(function (t, e, i, s, n, r, a) {
        var c = r.length - 1;
        switch (n) {
          case 1:
            break;
          case 2:
          case 6:
          case 7:
            this.$ = [];
            break;
          case 3:
            r[c - 1].push(r[c]);
            this.$ = r[c - 1];
            break;
          case 4:
          case 5:
          case 55:
          case 78:
          case 62:
          case 63:
          case 66:
            this.$ = r[c];
            break;
          case 8:
            s.addEntity(r[c - 4]);
            s.addEntity(r[c - 2]);
            s.addRelationship(r[c - 4], r[c], r[c - 2], r[c - 3]);
            break;
          case 9:
            s.addEntity(r[c - 8]);
            s.addEntity(r[c - 4]);
            s.addRelationship(r[c - 8], r[c], r[c - 4], r[c - 5]);
            s.setClass([r[c - 8]], r[c - 6]);
            s.setClass([r[c - 4]], r[c - 2]);
            break;
          case 10:
            s.addEntity(r[c - 6]);
            s.addEntity(r[c - 2]);
            s.addRelationship(r[c - 6], r[c], r[c - 2], r[c - 3]);
            s.setClass([r[c - 6]], r[c - 4]);
            break;
          case 11:
            s.addEntity(r[c - 6]);
            s.addEntity(r[c - 4]);
            s.addRelationship(r[c - 6], r[c], r[c - 4], r[c - 5]);
            s.setClass([r[c - 4]], r[c - 2]);
            break;
          case 12:
            s.addEntity(r[c - 3]);
            s.addAttributes(r[c - 3], r[c - 1]);
            break;
          case 13:
            s.addEntity(r[c - 5]);
            s.addAttributes(r[c - 5], r[c - 1]);
            s.setClass([r[c - 5]], r[c - 3]);
            break;
          case 14:
            s.addEntity(r[c - 2]);
            break;
          case 15:
            s.addEntity(r[c - 4]);
            s.setClass([r[c - 4]], r[c - 2]);
            break;
          case 16:
            s.addEntity(r[c]);
            break;
          case 17:
            s.addEntity(r[c - 2]);
            s.setClass([r[c - 2]], r[c]);
            break;
          case 18:
            s.addEntity(r[c - 6], r[c - 4]);
            s.addAttributes(r[c - 6], r[c - 1]);
            break;
          case 19:
            s.addEntity(r[c - 8], r[c - 6]);
            s.addAttributes(r[c - 8], r[c - 1]);
            s.setClass([r[c - 8]], r[c - 3]);
            break;
          case 20:
            s.addEntity(r[c - 5], r[c - 3]);
            break;
          case 21:
            s.addEntity(r[c - 7], r[c - 5]);
            s.setClass([r[c - 7]], r[c - 2]);
            break;
          case 22:
            s.addEntity(r[c - 3], r[c - 1]);
            break;
          case 23:
            s.addEntity(r[c - 5], r[c - 3]);
            s.setClass([r[c - 5]], r[c]);
            break;
          case 24:
          case 25:
            this.$ = r[c].trim();
            s.setAccTitle(this.$);
            break;
          case 26:
          case 27:
            this.$ = r[c].trim();
            s.setAccDescription(this.$);
            break;
          case 32:
            s.setDirection("TB");
            break;
          case 33:
            s.setDirection("BT");
            break;
          case 34:
            s.setDirection("RL");
            break;
          case 35:
            s.setDirection("LR");
            break;
          case 36:
            this.$ = r[c - 3];
            s.addClass(r[c - 2], r[c - 1]);
            break;
          case 37:
          case 38:
          case 56:
          case 64:
          case 43:
            this.$ = [r[c]];
            break;
          case 39:
          case 40:
            this.$ = r[c - 2].concat([r[c]]);
            break;
          case 41:
            this.$ = r[c - 2];
            s.setClass(r[c - 1], r[c]);
            break;
          case 42:
            this.$ = r[c - 3];
            s.addCssStyles(r[c - 2], r[c - 1]);
            break;
          case 44:
          case 65:
            r[c - 2].push(r[c]);
            this.$ = r[c - 2];
            break;
          case 46:
            this.$ = r[c - 1] + r[c];
            break;
          case 54:
          case 76:
          case 77:
          case 67:
            this.$ = r[c].replace(/"/g, "");
            break;
          case 57:
            r[c].push(r[c - 1]);
            this.$ = r[c];
            break;
          case 58:
            this.$ = {
              type: r[c - 1],
              name: r[c]
            };
            break;
          case 59:
            this.$ = {
              type: r[c - 2],
              name: r[c - 1],
              keys: r[c]
            };
            break;
          case 60:
            this.$ = {
              type: r[c - 2],
              name: r[c - 1],
              comment: r[c]
            };
            break;
          case 61:
            this.$ = {
              type: r[c - 3],
              name: r[c - 2],
              keys: r[c - 1],
              comment: r[c]
            };
            break;
          case 68:
            this.$ = {
              cardA: r[c],
              relType: r[c - 1],
              cardB: r[c - 2]
            };
            break;
          case 69:
            this.$ = s.Cardinality.ZERO_OR_ONE;
            break;
          case 70:
            this.$ = s.Cardinality.ZERO_OR_MORE;
            break;
          case 71:
            this.$ = s.Cardinality.ONE_OR_MORE;
            break;
          case 72:
            this.$ = s.Cardinality.ONLY_ONE;
            break;
          case 73:
            this.$ = s.Cardinality.MD_PARENT;
            break;
          case 74:
            this.$ = s.Identification.NON_IDENTIFYING;
            break;
          case 75:
            this.$ = s.Identification.IDENTIFYING;
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
        11: 9,
        22: i,
        24: s,
        26: n,
        28: r,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        33: a,
        34: c,
        35: l,
        36: h,
        37: u,
        40: d,
        43: y,
        44: p,
        50: _
      }, t(e, [2, 7], {
        1: [2, 1]
      }), t(e, [2, 3]), {
        9: 27,
        11: 9,
        22: i,
        24: s,
        26: n,
        28: r,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        33: a,
        34: c,
        35: l,
        36: h,
        37: u,
        40: d,
        43: y,
        44: p,
        50: _
      }, t(e, [2, 5]), t(e, [2, 6]), t(e, [2, 16], {
        12: 28,
        61: 32,
        15: [1, 29],
        17: [1, 30],
        20: [1, 31],
        63: g,
        64: b,
        65: f,
        66: m,
        67: E
      }), {
        23: [1, 38]
      }, {
        25: [1, 39]
      }, {
        27: [1, 40]
      }, t(e, [2, 27]), t(e, [2, 28]), t(e, [2, 29]), t(e, [2, 30]), t(e, [2, 31]), t(k, [2, 54]), t(k, [2, 55]), t(e, [2, 32]), t(e, [2, 33]), t(e, [2, 34]), t(e, [2, 35]), {
        16: 41,
        40: O,
        41: S
      }, {
        16: 44,
        40: O,
        41: S
      }, {
        16: 45,
        40: O,
        41: S
      }, t(e, [2, 4]), {
        11: 46,
        40: d,
        50: _
      }, {
        16: 47,
        40: O,
        41: S
      }, {
        18: 48,
        19: [1, 49],
        51: 50,
        52: 51,
        56: T
      }, {
        11: 53,
        40: d,
        50: _
      }, {
        62: 54,
        68: [1, 55],
        69: [1, 56]
      }, t(A, [2, 69]), t(A, [2, 70]), t(A, [2, 71]), t(A, [2, 72]), t(A, [2, 73]), t(e, [2, 24]), t(e, [2, 25]), t(e, [2, 26]), {
        13: N,
        38: 57,
        41: v,
        42: R,
        45: 59,
        46: 60,
        48: I,
        49: C
      }, t(x, [2, 37]), t(x, [2, 38]), {
        16: 65,
        40: O,
        41: S,
        42: R
      }, {
        13: N,
        38: 66,
        41: v,
        42: R,
        45: 59,
        46: 60,
        48: I,
        49: C
      }, {
        13: [1, 67],
        15: [1, 68]
      }, t(e, [2, 17], {
        61: 32,
        12: 69,
        17: [1, 70],
        42: R,
        63: g,
        64: b,
        65: f,
        66: m,
        67: E
      }), {
        19: [1, 71]
      }, t(e, [2, 14]), {
        18: 72,
        19: [2, 56],
        51: 50,
        52: 51,
        56: T
      }, {
        53: 73,
        56: [1, 74]
      }, {
        56: [2, 62]
      }, {
        21: [1, 75]
      }, {
        61: 76,
        63: g,
        64: b,
        65: f,
        66: m,
        67: E
      }, t(D, [2, 74]), t(D, [2, 75]), {
        6: $,
        10: L,
        39: 77,
        42: w,
        47: M
      }, {
        40: [1, 82],
        41: [1, 83]
      }, t(W, [2, 43], {
        46: 84,
        13: N,
        41: v,
        48: I,
        49: C
      }), t(B, [2, 45]), t(B, [2, 50]), t(B, [2, 51]), t(B, [2, 52]), t(B, [2, 53]), t(e, [2, 41], {
        42: R
      }), {
        6: $,
        10: L,
        39: 85,
        42: w,
        47: M
      }, {
        14: 86,
        40: F,
        50: Y,
        70: P
      }, {
        16: 90,
        40: O,
        41: S
      }, {
        11: 91,
        40: d,
        50: _
      }, {
        18: 92,
        19: [1, 93],
        51: 50,
        52: 51,
        56: T
      }, t(e, [2, 12]), {
        19: [2, 57]
      }, t(Z, [2, 58], {
        54: 94,
        55: 95,
        57: 96,
        59: K,
        60: G
      }), t([19, 56, 59, 60], [2, 63]), t(e, [2, 22], {
        15: [1, 100],
        17: [1, 99]
      }), t([40, 50], [2, 68]), t(e, [2, 36]), {
        13: N,
        41: v,
        45: 101,
        46: 60,
        48: I,
        49: C
      }, t(e, [2, 47]), t(e, [2, 48]), t(e, [2, 49]), t(x, [2, 39]), t(x, [2, 40]), t(B, [2, 46]), t(e, [2, 42]), t(e, [2, 8]), t(e, [2, 76]), t(e, [2, 77]), t(e, [2, 78]), {
        13: [1, 102],
        42: R
      }, {
        13: [1, 104],
        15: [1, 103]
      }, {
        19: [1, 105]
      }, t(e, [2, 15]), t(Z, [2, 59], {
        55: 106,
        58: [1, 107],
        60: G
      }), t(Z, [2, 60]), t(U, [2, 64]), t(Z, [2, 67]), t(U, [2, 66]), {
        18: 108,
        19: [1, 109],
        51: 50,
        52: 51,
        56: T
      }, {
        16: 110,
        40: O,
        41: S
      }, t(W, [2, 44], {
        46: 84,
        13: N,
        41: v,
        48: I,
        49: C
      }), {
        14: 111,
        40: F,
        50: Y,
        70: P
      }, {
        16: 112,
        40: O,
        41: S
      }, {
        14: 113,
        40: F,
        50: Y,
        70: P
      }, t(e, [2, 13]), t(Z, [2, 61]), {
        57: 114,
        59: K
      }, {
        19: [1, 115]
      }, t(e, [2, 20]), t(e, [2, 23], {
        17: [1, 116],
        42: R
      }), t(e, [2, 11]), {
        13: [1, 117],
        42: R
      }, t(e, [2, 10]), t(U, [2, 65]), t(e, [2, 18]), {
        18: 118,
        19: [1, 119],
        51: 50,
        52: 51,
        56: T
      }, {
        14: 120,
        40: F,
        50: Y,
        70: P
      }, {
        19: [1, 121]
      }, t(e, [2, 21]), t(e, [2, 9]), t(e, [2, 19])],
      defaultActions: {
        52: [2, 62],
        72: [2, 57]
      },
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
        var s = [];
        var n = [null];
        var r = [];
        var a = this.table;
        var c = "";
        var l = 0;
        var h = 0;
        var u = 0;
        var d = r.slice.call(arguments, 1);
        var y = Object.create(this.lexer);
        var p = {
          yy: {}
        };
        for (var _ in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, _)) {
            p.yy[_] = this.yy[_];
          }
        }
        y.setInput(t, p.yy);
        p.yy.lexer = y;
        p.yy.parser = this;
        if (y.yylloc === undefined) {
          y.yylloc = {};
        }
        var g = y.yylloc;
        r.push(g);
        var b = y.options && y.options.ranges;
        function f() {
          var t;
          if (typeof (t = s.pop() || y.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (s = t).pop();
            }
            t = e.symbols_[t] || t;
          }
          return t;
        }
        if (typeof p.yy.parseError == "function") {
          this.parseError = p.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        loggerLevelUtils.setFunctionName(function (t) {
          i.length = i.length - t * 2;
          n.length = n.length - t;
          r.length = r.length - t;
        }, "popStack");
        loggerLevelUtils.setFunctionName(f, "lex");
        var m;
        var E;
        var k;
        var O;
        var S;
        var T;
        var A;
        var N;
        var v;
        var R = {};
        while (true) {
          k = i[i.length - 1];
          if (this.defaultActions[k]) {
            O = this.defaultActions[k];
          } else {
            if (m == null) {
              m = f();
            }
            O = a[k] && a[k][m];
          }
          if (O === undefined || !O.length || !O[0]) {
            var I = "";
            v = [];
            for (T in a[k]) {
              if (this.terminals_[T] && T > 2) {
                v.push("'" + this.terminals_[T] + "'");
              }
            }
            I = y.showPosition ? "Parse error on line " + (l + 1) + ":\n" + y.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[m] || m) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (m == 1 ? "end of input" : "'" + (this.terminals_[m] || m) + "'");
            this.parseError(I, {
              text: y.match,
              token: this.terminals_[m] || m,
              line: y.yylineno,
              loc: g,
              expected: v
            });
          }
          if (O[0] instanceof Array && O.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + k + ", token: " + m);
          }
          switch (O[0]) {
            case 1:
              i.push(m);
              n.push(y.yytext);
              r.push(y.yylloc);
              i.push(O[1]);
              m = null;
              if (E) {
                m = E;
                E = null;
              } else {
                h = y.yyleng;
                c = y.yytext;
                l = y.yylineno;
                g = y.yylloc;
                if (u > 0) {
                  u--;
                }
              }
              break;
            case 2:
              A = this.productions_[O[1]][1];
              R.$ = n[n.length - A];
              R._$ = {
                first_line: r[r.length - (A || 1)].first_line,
                last_line: r[r.length - 1].last_line,
                first_column: r[r.length - (A || 1)].first_column,
                last_column: r[r.length - 1].last_column
              };
              if (b) {
                R._$.range = [r[r.length - (A || 1)].range[0], r[r.length - 1].range[1]];
              }
              if ((S = this.performAction.apply(R, [c, h, l, p.yy, O[1], n, r].concat(d))) !== undefined) {
                return S;
              }
              if (A) {
                i = i.slice(0, A * -1 * 2);
                n = n.slice(0, A * -1);
                r = r.slice(0, A * -1);
              }
              i.push(this.productions_[O[1]][0]);
              n.push(R.$);
              r.push(R._$);
              N = a[i[i.length - 2]][i[i.length - 1]];
              i.push(N);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var j = {
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
        var s = this.match.split(/(?:\r\n?|\n)/g);
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
          last_column: i ? (i.length === s.length ? this.yylloc.first_column : 0) + s[s.length - i.length].length - i[0].length : this.yylloc.first_column - e
        };
        if (this.options.ranges) {
          this.yylloc.range = [n[0], n[0] + this.yyleng - e];
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
        var s;
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
        if (s = t[0].match(/(?:\r\n?|\n).*/g)) {
          this.yylineno += s.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
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
          for (var r in n) {
            this[r] = n[r];
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
        var s;
        var n = this._currentRules();
        var r = 0;
        for (; r < n.length; r++) {
          if ((i = this._input.match(this.rules[n[r]])) && (!e || i[0].length > e[0].length)) {
            e = i;
            s = r;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(i, n[r])) !== false) {
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
          return (t = this.test_match(e, n[s])) !== false && t;
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
      performAction: loggerLevelUtils.setFunctionName(function (t, e, i, s) {
        switch (i) {
          case 0:
            this.begin("acc_title");
            return 24;
          case 1:
            this.popState();
            return "acc_title_value";
          case 2:
            this.begin("acc_descr");
            return 26;
          case 3:
            this.popState();
            return "acc_descr_value";
          case 4:
            this.begin("acc_descr_multiline");
            break;
          case 5:
            this.popState();
            break;
          case 6:
            return "acc_descr_multiline_value";
          case 7:
            return 33;
          case 8:
            return 34;
          case 9:
            return 35;
          case 10:
            return 36;
          case 11:
            return 10;
          case 12:
          case 23:
          case 28:
          case 35:
            break;
          case 13:
            return 8;
          case 14:
            return 50;
          case 15:
            return 70;
          case 16:
            return 4;
          case 17:
            this.begin("block");
            return 17;
          case 18:
          case 19:
          case 38:
            return 49;
          case 20:
          case 37:
            return 42;
          case 21:
            return 15;
          case 22:
          case 36:
            return 13;
          case 24:
            return 59;
          case 25:
          case 26:
            return 56;
          case 27:
            return 60;
          case 29:
            this.popState();
            return 19;
          case 30:
          case 73:
            return e.yytext[0];
          case 31:
            return 20;
          case 32:
            return 21;
          case 33:
            this.begin("style");
            return 44;
          case 34:
            this.popState();
            return 10;
          case 39:
            this.begin("style");
            return 37;
          case 40:
            return 43;
          case 41:
          case 45:
          case 46:
          case 59:
            return 63;
          case 42:
          case 43:
          case 44:
          case 52:
          case 54:
          case 61:
            return 65;
          case 47:
          case 48:
          case 49:
          case 50:
          case 51:
          case 53:
          case 60:
            return 64;
          case 55:
          case 56:
          case 57:
          case 58:
            return 66;
          case 62:
            return 67;
          case 63:
          case 66:
          case 67:
          case 68:
            return 68;
          case 64:
          case 65:
            return 69;
          case 69:
            return 41;
          case 70:
            return 47;
          case 71:
            return 40;
          case 72:
            return 48;
          case 74:
            return 6;
        }
      }, "anonymous"),
      rules: [/^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:[\s]+)/i, /^(?:"[^"%\r\n\v\b\\]+")/i, /^(?:"[^"]*")/i, /^(?:erDiagram\b)/i, /^(?:\{)/i, /^(?:#)/i, /^(?:#)/i, /^(?:,)/i, /^(?::::)/i, /^(?::)/i, /^(?:\s+)/i, /^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i, /^(?:([^\s]*)[~].*[~]([^\s]*))/i, /^(?:([\*A-Za-z_\u00C0-\uFFFF][A-Za-z0-9\-\_\[\]\(\)\u00C0-\uFFFF\*]*))/i, /^(?:"[^"]*")/i, /^(?:[\n]+)/i, /^(?:\})/i, /^(?:.)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:style\b)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?::)/i, /^(?:,)/i, /^(?:#)/i, /^(?:classDef\b)/i, /^(?:class\b)/i, /^(?:one or zero\b)/i, /^(?:one or more\b)/i, /^(?:one or many\b)/i, /^(?:1\+)/i, /^(?:\|o\b)/i, /^(?:zero or one\b)/i, /^(?:zero or more\b)/i, /^(?:zero or many\b)/i, /^(?:0\+)/i, /^(?:\}o\b)/i, /^(?:many\(0\))/i, /^(?:many\(1\))/i, /^(?:many\b)/i, /^(?:\}\|)/i, /^(?:one\b)/i, /^(?:only one\b)/i, /^(?:1\b)/i, /^(?:\|\|)/i, /^(?:o\|)/i, /^(?:o\{)/i, /^(?:\|\{)/i, /^(?:\s*u\b)/i, /^(?:\.\.)/i, /^(?:--)/i, /^(?:to\b)/i, /^(?:optionally to\b)/i, /^(?:\.-)/i, /^(?:-\.)/i, /^(?:([^\x00-\x7F]|\w|-|\*)+)/i, /^(?:;)/i, /^(?:([^\x00-\x7F]|\w|-|\*)+)/i, /^(?:[0-9])/i, /^(?:.)/i, /^(?:$)/i],
      conditions: {
        style: {
          rules: [34, 35, 36, 37, 38, 69, 70],
          inclusive: false
        },
        acc_descr_multiline: {
          rules: [5, 6],
          inclusive: false
        },
        acc_descr: {
          rules: [3],
          inclusive: false
        },
        acc_title: {
          rules: [1],
          inclusive: false
        },
        block: {
          rules: [23, 24, 25, 26, 27, 28, 29, 30],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 31, 32, 33, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 71, 72, 73, 74],
          inclusive: true
        }
      }
    };
    function V() {
      this.yy = {};
    }
    z.lexer = j;
    loggerLevelUtils.setFunctionName(V, "Parser");
    V.prototype = z;
    z.Parser = V;
    return new V();
  }();
  y.parser = y;
  s = class {
    addEntity(t) {
      let s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      if (this.entities.has(t)) {
        if (!this.entities.get(t)?.alias && !!s) {
          this.entities.get(t).alias = s;
          loggerLevelUtils.logger.info(`Add alias '${s}' to entity '${t}'`);
        }
      } else {
        this.entities.set(t, {
          id: `entity-${t}-${this.entities.size}`,
          label: t,
          attributes: [],
          alias: s,
          shape: "erBox",
          look: mermaidConfigUtils_1.getConfigAlias().look ?? "default",
          cssClasses: "default",
          cssStyles: []
        });
        loggerLevelUtils.logger.info("Added new entity :", t);
      }
      return this.entities.get(t);
    }
    getEntity(t) {
      return this.entities.get(t);
    }
    getEntities() {
      return this.entities;
    }
    getClasses() {
      return this.classes;
    }
    addAttributes(t, e) {
      let i;
      let s = this.addEntity(t);
      for (i = e.length - 1; i >= 0; i--) {
        e[i].keys ||= [];
        e[i].comment ||= "";
        s.attributes.push(e[i]);
        loggerLevelUtils.logger.debug("Added attribute ", e[i].name);
      }
    }
    addRelationship(t, e, i, s) {
      let n = this.entities.get(t);
      let r = this.entities.get(i);
      if (!n || !r) {
        return;
      }
      let a = {
        entityA: n.id,
        roleA: e,
        entityB: r.id,
        relSpec: s
      };
      this.relationships.push(a);
      loggerLevelUtils.logger.debug("Added new relationship :", a);
    }
    getRelationships() {
      return this.relationships;
    }
    getDirection() {
      return this.direction;
    }
    setDirection(t) {
      this.direction = t;
    }
    getCompiledStyles(t) {
      let e = [];
      for (let n of t) {
        let t = this.classes.get(n);
        if (t == null ? undefined : t.styles) {
          e = [...e, ...(t.styles ?? [])].map(t => t.trim());
        }
        if (t == null ? undefined : t.textStyles) {
          e = [...e, ...(t.textStyles ?? [])].map(t => t.trim());
        }
      }
      return e;
    }
    addCssStyles(t, e) {
      for (let i of t) {
        let t = this.entities.get(i);
        if (!e || !t) {
          return;
        }
        for (let i of e) {
          t.cssStyles.push(i);
        }
      }
    }
    addClass(t, e) {
      t.forEach(t => {
        let i = this.classes.get(t);
        if (i === undefined) {
          i = {
            id: t,
            styles: [],
            textStyles: []
          };
          this.classes.set(t, i);
        }
        if (e) {
          e.forEach(function (t) {
            if (/color/.exec(t)) {
              let e = t.replace("fill", "bgFill");
              i.textStyles.push(e);
            }
            i.styles.push(t);
          });
        }
      });
    }
    setClass(t, e) {
      for (let i of t) {
        let t = this.entities.get(i);
        if (t) {
          for (let i of e) {
            t.cssClasses += " " + i;
          }
        }
      }
    }
    clear() {
      this.entities = new Map();
      this.classes = new Map();
      this.relationships = [];
      mermaidConfigUtils_1.clearCommonDb();
    }
    getData() {
      let t = [];
      let e = [];
      let i = mermaidConfigUtils_1.getConfigAlias();
      for (let e of this.entities.keys()) {
        let i = this.entities.get(e);
        if (i) {
          i.cssCompiledStyles = this.getCompiledStyles(i.cssClasses.split(" "));
          t.push(i);
        }
      }
      let s = 0;
      for (let t of this.relationships) {
        let n = {
          id: mermaidDiagramUtils.getEdgeId(t.entityA, t.entityB, {
            prefix: "id",
            counter: s++
          }),
          type: "normal",
          curve: "basis",
          start: t.entityA,
          end: t.entityB,
          label: t.roleA,
          labelpos: "c",
          thickness: "normal",
          classes: "relationshipLine",
          arrowTypeStart: t.relSpec.cardB.toLowerCase(),
          arrowTypeEnd: t.relSpec.cardA.toLowerCase(),
          pattern: t.relSpec.relType == "IDENTIFYING" ? "solid" : "dashed",
          look: i.look
        };
        e.push(n);
      }
      return {
        nodes: t,
        edges: e,
        other: {},
        config: i,
        direction: "TB"
      };
    }
    constructor() {
      this.entities = new Map();
      this.relationships = [];
      this.classes = new Map();
      this.direction = "TB";
      this.Cardinality = {
        ZERO_OR_ONE: "ZERO_OR_ONE",
        ZERO_OR_MORE: "ZERO_OR_MORE",
        ONE_OR_MORE: "ONE_OR_MORE",
        ONLY_ONE: "ONLY_ONE",
        MD_PARENT: "MD_PARENT"
      };
      this.Identification = {
        NON_IDENTIFYING: "NON_IDENTIFYING",
        IDENTIFYING: "IDENTIFYING"
      };
      this.setAccTitle = mermaidConfigUtils_1.setAccTitle;
      this.getAccTitle = mermaidConfigUtils_1.getAccTitle;
      this.setAccDescription = mermaidConfigUtils_1.setAccDescription;
      this.getAccDescription = mermaidConfigUtils_1.getAccDescription;
      this.setDiagramTitle = mermaidConfigUtils_1.setDiagramTitle;
      this.getDiagramTitle = mermaidConfigUtils_1.getDiagramTitle;
      this.getConfig = loggerLevelUtils.setFunctionName(() => mermaidConfigUtils_1.getConfigAlias().er, "getConfig");
      this.clear();
      this.addEntity = this.addEntity.bind(this);
      this.addAttributes = this.addAttributes.bind(this);
      this.addRelationship = this.addRelationship.bind(this);
      this.setDirection = this.setDirection.bind(this);
      this.addCssStyles = this.addCssStyles.bind(this);
      this.addClass = this.addClass.bind(this);
      this.setClass = this.setClass.bind(this);
      this.setAccTitle = this.setAccTitle.bind(this);
      this.setAccDescription = this.setAccDescription.bind(this);
    }
  };
  loggerLevelUtils.setFunctionName(s, "ErDB");
  var p = s;
  var _ = {};
  loggerLevelUtils.defineProperties(_, {
    draw: () => g
  });
  var g = loggerLevelUtils.setFunctionName(async function (t, e, i, s) {
    var d;
    loggerLevelUtils.logger.info("REF0:");
    loggerLevelUtils.logger.info("Drawing er diagram (unified)", e);
    let {
      securityLevel: y,
      er: p,
      layout: _
    } = mermaidConfigUtils_1.getConfigAlias();
    let g = s.db.getData();
    let b = diagramElementSelector.getDiagramElement(e, y);
    g.type = s.type;
    g.layoutAlgorithm = mermaidLayoutRegistryRenderer.getRegisteredLayoutAlgorithm(_);
    g.config.flowchart.nodeSpacing = (p == null ? undefined : p.nodeSpacing) || 140;
    g.config.flowchart.rankSpacing = (p == null ? undefined : p.rankSpacing) || 80;
    g.direction = s.db.getDirection();
    g.markers = ["only_one", "zero_or_one", "one_or_more", "zero_or_more"];
    g.diagramId = e;
    await mermaidLayoutRegistryRenderer.render(g, b);
    if (g.layoutAlgorithm === "elk") {
      b.select(".edges").lower();
    }
    let f = b.selectAll("[id*=\"-background\"]");
    if (Array.from(f).length > 0) {
      f.each(function () {
        let t = axisAndZoomUtilities.select(this);
        let e = t.attr("id").replace("-background", "");
        let i = b.select(`#${CSS.escape(e)}`);
        if (!i.empty()) {
          let e = i.attr("transform");
          t.attr("transform", e);
        }
      });
    }
    mermaidDiagramUtils.mermaidUtils.insertTitle(b, "erDiagramTitleText", (p == null ? undefined : p.titleTopMargin) ?? 25, s.db.getDiagramTitle());
    mermaidSvgViewportSetup.setupViewPortForSvg(b, 8, "erDiagram", (d = p == null ? undefined : p.useMaxWidth) === null || d === undefined || d);
  }, "draw");
  var b = loggerLevelUtils.setFunctionName((t, e) => {
    let i = colorChannelExtractor.extractColorChannel;
    let s = i(t, "r");
    let n = i(t, "g");
    let r = i(t, "b");
    return colorAlphaSetter.setColorWithAlpha(s, n, r, e);
  }, "fade");
  var f = {
    parser: y,
    get db() {
      return new p();
    },
    renderer: _,
    styles: loggerLevelUtils.setFunctionName(t => `
  .entityBox {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${t.tertiaryColor};
    opacity: 0.7;
    background-color: ${t.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

  .labelBkg {
    background-color: ${b(t.tertiaryColor, 0.5)};
  }

  .edgeLabel .label {
    fill: ${t.nodeBorder};
    font-size: 14px;
  }

  .label {
    font-family: ${t.fontFamily};
    color: ${t.nodeTextColor || t.textColor};
  }

  .edge-pattern-dashed {
    stroke-dasharray: 8,8;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon
  {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .relationshipLine {
    stroke: ${t.lineColor};
    stroke-width: 1;
    fill: none;
  }

  .marker {
    fill: none !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
`, "getStyles")
  };
  require.d(exports, {
    diagram: function () {
      return f;
    }
  });
}