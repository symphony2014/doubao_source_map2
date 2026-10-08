// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mermaidDiagramElementGetter'
// - Resolved require(553740) to 'mermaid-diagram-element-getter'
// - Renamed variable 's' to 'svgViewportSetup'
// - Resolved require(509839) to 'svg-viewport-setup'
// - Renamed variable 'n' to 'mermaidLayoutRegistry'
// - Resolved require(103329) to 'mermaid-layout-registry'
// - Resolved require(836477) to 'mermaid-edge-rendering-utils'
// - Resolved require(744654) to 'line-arrow-offset-utils'
// - Resolved require(608361) to 'mermaid-node-shapes-renderer_1'
// - Resolved require(152138) to 'mermaid-subgraph-title-margin-utils'
// - Resolved require(587619) to 'mermaid-node-style-utils'
// - Resolved require(5699) to 'mermaid-text-icon-utils'
// - Renamed variable 'l' to 'mermaidTextLayoutUtils'
// - Resolved require(997032) to 'mermaid-text-layout-utils'
// - Renamed variable 'o' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'c' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Renamed variable 'h' to 'colorChannelExtractor'
// - Resolved require(165290) to 'color-channel-extractor'
// - Renamed variable 'd' to 'colorAlphaSetter'
// - Resolved require(882094) to 'color-alpha-setter'
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'nV' to 'getConfigAlias' (module 101498)
// - Updated imported property 'ZH' to 'clearAccData' (module 101498)
// - Updated imported property 'GN' to 'setAccTitle' (module 101498)
// - Updated imported property 'eu' to 'getAccTitle' (module 101498)
// - Updated imported property 'U$' to 'setAccDescription' (module 101498)
// - Updated imported property 'Mx' to 'getAccDescription' (module 101498)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 101498)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 101498)
// - Updated imported property 'r2' to 'copyProperties' (module 101498)
// - Updated imported property 'Ln' to 'getEdgeId' (module 997032)
// - Updated imported property 'w8' to 'textLayoutUtils' (module 997032)
// - Updated imported property 'q' to 'getDiagramElement' (module 553740)
// - Updated imported property '_b' to 'getRegisteredLayoutAlgorithm' (module 103329)
// - Updated imported property 'sY' to 'render' (module 103329)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'j' to 'setupSvgViewport' (module 509839)
// - Updated imported property 'Z' to 'extractColorChannel' (module 165290)
// - Updated imported property 'Z' to 'setColorWithAlpha' (module 882094)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92010.83c1e37d.js
         * chunkId: 92010
         * moduleId: 63261
         */
module.exports = function (module, exports, require) {
  var a;
  var mermaidDiagramElementGetter = require("mermaid-diagram-element-getter") /*id: 553740*/;
  var svgViewportSetup = require("svg-viewport-setup") /*id: 509839*/;
  var mermaidLayoutRegistry = require("mermaid-layout-registry") /*id: 103329*/;
  require("mermaid-edge-rendering-utils") /*id: 836477*/;
  require("line-arrow-offset-utils") /*id: 744654*/;
  require("mermaid-node-shapes-renderer_1") /*id: 608361*/;
  require("mermaid-subgraph-title-margin-utils") /*id: 152138*/;
  require("mermaid-node-style-utils") /*id: 587619*/;
  require("mermaid-text-icon-utils") /*id: 5699*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var colorChannelExtractor = require("color-channel-extractor") /*id: 165290*/;
  var colorAlphaSetter = require("color-alpha-setter") /*id: 882094*/;
  var p = function () {
    var t = mermaidConfigUtils.setName(function (t, e, r, a) {
      r = r || {};
      a = t.length;
      for (; a--; r[t[a]] = e);
      return r;
    }, "o");
    var e = [6, 8, 10, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 43, 44, 50];
    var r = [1, 10];
    var a = [1, 11];
    var i = [1, 12];
    var s = [1, 13];
    var n = [1, 20];
    var l = [1, 21];
    var c = [1, 22];
    var h = [1, 23];
    var d = [1, 24];
    var p = [1, 19];
    var y = [1, 25];
    var u = [1, 26];
    var g = [1, 18];
    var f = [1, 33];
    var m = [1, 34];
    var b = [1, 35];
    var k = [1, 36];
    var _ = [1, 37];
    var x = [6, 8, 10, 13, 15, 17, 20, 21, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 43, 44, 50, 63, 64, 65, 66, 67];
    var E = [1, 42];
    var M = [1, 43];
    var w = [1, 52];
    var O = [40, 50, 68, 69];
    var S = [1, 63];
    var L = [1, 61];
    var T = [1, 58];
    var W = [1, 62];
    var v = [1, 64];
    var A = [6, 8, 10, 13, 17, 22, 24, 26, 28, 33, 34, 35, 36, 37, 40, 41, 42, 43, 44, 48, 49, 50, 63, 64, 65, 66, 67];
    var $ = [63, 64, 65, 66, 67];
    var C = [1, 81];
    var N = [1, 80];
    var R = [1, 78];
    var I = [1, 79];
    var D = [6, 10, 42, 47];
    var Y = [6, 10, 13, 41, 42, 47, 48, 49];
    var B = [1, 89];
    var P = [1, 88];
    var X = [1, 87];
    var F = [19, 56];
    var Z = [1, 98];
    var H = [1, 97];
    var z = [19, 56, 58, 60];
    var U = {
      trace: mermaidConfigUtils.setName(function () {}, "trace"),
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
      performAction: mermaidConfigUtils.setName(function (t, e, r, a, i, s, n) {
        var l = s.length - 1;
        switch (i) {
          case 1:
            break;
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
          case 55:
          case 78:
          case 62:
          case 63:
          case 66:
            this.$ = s[l];
            break;
          case 8:
            a.addEntity(s[l - 4]);
            a.addEntity(s[l - 2]);
            a.addRelationship(s[l - 4], s[l], s[l - 2], s[l - 3]);
            break;
          case 9:
            a.addEntity(s[l - 8]);
            a.addEntity(s[l - 4]);
            a.addRelationship(s[l - 8], s[l], s[l - 4], s[l - 5]);
            a.setClass([s[l - 8]], s[l - 6]);
            a.setClass([s[l - 4]], s[l - 2]);
            break;
          case 10:
            a.addEntity(s[l - 6]);
            a.addEntity(s[l - 2]);
            a.addRelationship(s[l - 6], s[l], s[l - 2], s[l - 3]);
            a.setClass([s[l - 6]], s[l - 4]);
            break;
          case 11:
            a.addEntity(s[l - 6]);
            a.addEntity(s[l - 4]);
            a.addRelationship(s[l - 6], s[l], s[l - 4], s[l - 5]);
            a.setClass([s[l - 4]], s[l - 2]);
            break;
          case 12:
            a.addEntity(s[l - 3]);
            a.addAttributes(s[l - 3], s[l - 1]);
            break;
          case 13:
            a.addEntity(s[l - 5]);
            a.addAttributes(s[l - 5], s[l - 1]);
            a.setClass([s[l - 5]], s[l - 3]);
            break;
          case 14:
            a.addEntity(s[l - 2]);
            break;
          case 15:
            a.addEntity(s[l - 4]);
            a.setClass([s[l - 4]], s[l - 2]);
            break;
          case 16:
            a.addEntity(s[l]);
            break;
          case 17:
            a.addEntity(s[l - 2]);
            a.setClass([s[l - 2]], s[l]);
            break;
          case 18:
            a.addEntity(s[l - 6], s[l - 4]);
            a.addAttributes(s[l - 6], s[l - 1]);
            break;
          case 19:
            a.addEntity(s[l - 8], s[l - 6]);
            a.addAttributes(s[l - 8], s[l - 1]);
            a.setClass([s[l - 8]], s[l - 3]);
            break;
          case 20:
            a.addEntity(s[l - 5], s[l - 3]);
            break;
          case 21:
            a.addEntity(s[l - 7], s[l - 5]);
            a.setClass([s[l - 7]], s[l - 2]);
            break;
          case 22:
            a.addEntity(s[l - 3], s[l - 1]);
            break;
          case 23:
            a.addEntity(s[l - 5], s[l - 3]);
            a.setClass([s[l - 5]], s[l]);
            break;
          case 24:
          case 25:
            this.$ = s[l].trim();
            a.setAccTitle(this.$);
            break;
          case 26:
          case 27:
            this.$ = s[l].trim();
            a.setAccDescription(this.$);
            break;
          case 32:
            a.setDirection("TB");
            break;
          case 33:
            a.setDirection("BT");
            break;
          case 34:
            a.setDirection("RL");
            break;
          case 35:
            a.setDirection("LR");
            break;
          case 36:
            this.$ = s[l - 3];
            a.addClass(s[l - 2], s[l - 1]);
            break;
          case 37:
          case 38:
          case 56:
          case 64:
          case 43:
            this.$ = [s[l]];
            break;
          case 39:
          case 40:
            this.$ = s[l - 2].concat([s[l]]);
            break;
          case 41:
            this.$ = s[l - 2];
            a.setClass(s[l - 1], s[l]);
            break;
          case 42:
            this.$ = s[l - 3];
            a.addCssStyles(s[l - 2], s[l - 1]);
            break;
          case 44:
          case 65:
            s[l - 2].push(s[l]);
            this.$ = s[l - 2];
            break;
          case 46:
            this.$ = s[l - 1] + s[l];
            break;
          case 54:
          case 76:
          case 77:
          case 67:
            this.$ = s[l].replace(/"/g, "");
            break;
          case 57:
            s[l].push(s[l - 1]);
            this.$ = s[l];
            break;
          case 58:
            this.$ = {
              type: s[l - 1],
              name: s[l]
            };
            break;
          case 59:
            this.$ = {
              type: s[l - 2],
              name: s[l - 1],
              keys: s[l]
            };
            break;
          case 60:
            this.$ = {
              type: s[l - 2],
              name: s[l - 1],
              comment: s[l]
            };
            break;
          case 61:
            this.$ = {
              type: s[l - 3],
              name: s[l - 2],
              keys: s[l - 1],
              comment: s[l]
            };
            break;
          case 68:
            this.$ = {
              cardA: s[l],
              relType: s[l - 1],
              cardB: s[l - 2]
            };
            break;
          case 69:
            this.$ = a.Cardinality.ZERO_OR_ONE;
            break;
          case 70:
            this.$ = a.Cardinality.ZERO_OR_MORE;
            break;
          case 71:
            this.$ = a.Cardinality.ONE_OR_MORE;
            break;
          case 72:
            this.$ = a.Cardinality.ONLY_ONE;
            break;
          case 73:
            this.$ = a.Cardinality.MD_PARENT;
            break;
          case 74:
            this.$ = a.Identification.NON_IDENTIFYING;
            break;
          case 75:
            this.$ = a.Identification.IDENTIFYING;
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
        22: r,
        24: a,
        26: i,
        28: s,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        33: n,
        34: l,
        35: c,
        36: h,
        37: d,
        40: p,
        43: y,
        44: u,
        50: g
      }, t(e, [2, 7], {
        1: [2, 1]
      }), t(e, [2, 3]), {
        9: 27,
        11: 9,
        22: r,
        24: a,
        26: i,
        28: s,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        33: n,
        34: l,
        35: c,
        36: h,
        37: d,
        40: p,
        43: y,
        44: u,
        50: g
      }, t(e, [2, 5]), t(e, [2, 6]), t(e, [2, 16], {
        12: 28,
        61: 32,
        15: [1, 29],
        17: [1, 30],
        20: [1, 31],
        63: f,
        64: m,
        65: b,
        66: k,
        67: _
      }), {
        23: [1, 38]
      }, {
        25: [1, 39]
      }, {
        27: [1, 40]
      }, t(e, [2, 27]), t(e, [2, 28]), t(e, [2, 29]), t(e, [2, 30]), t(e, [2, 31]), t(x, [2, 54]), t(x, [2, 55]), t(e, [2, 32]), t(e, [2, 33]), t(e, [2, 34]), t(e, [2, 35]), {
        16: 41,
        40: E,
        41: M
      }, {
        16: 44,
        40: E,
        41: M
      }, {
        16: 45,
        40: E,
        41: M
      }, t(e, [2, 4]), {
        11: 46,
        40: p,
        50: g
      }, {
        16: 47,
        40: E,
        41: M
      }, {
        18: 48,
        19: [1, 49],
        51: 50,
        52: 51,
        56: w
      }, {
        11: 53,
        40: p,
        50: g
      }, {
        62: 54,
        68: [1, 55],
        69: [1, 56]
      }, t(O, [2, 69]), t(O, [2, 70]), t(O, [2, 71]), t(O, [2, 72]), t(O, [2, 73]), t(e, [2, 24]), t(e, [2, 25]), t(e, [2, 26]), {
        13: S,
        38: 57,
        41: L,
        42: T,
        45: 59,
        46: 60,
        48: W,
        49: v
      }, t(A, [2, 37]), t(A, [2, 38]), {
        16: 65,
        40: E,
        41: M,
        42: T
      }, {
        13: S,
        38: 66,
        41: L,
        42: T,
        45: 59,
        46: 60,
        48: W,
        49: v
      }, {
        13: [1, 67],
        15: [1, 68]
      }, t(e, [2, 17], {
        61: 32,
        12: 69,
        17: [1, 70],
        42: T,
        63: f,
        64: m,
        65: b,
        66: k,
        67: _
      }), {
        19: [1, 71]
      }, t(e, [2, 14]), {
        18: 72,
        19: [2, 56],
        51: 50,
        52: 51,
        56: w
      }, {
        53: 73,
        56: [1, 74]
      }, {
        56: [2, 62]
      }, {
        21: [1, 75]
      }, {
        61: 76,
        63: f,
        64: m,
        65: b,
        66: k,
        67: _
      }, t($, [2, 74]), t($, [2, 75]), {
        6: C,
        10: N,
        39: 77,
        42: R,
        47: I
      }, {
        40: [1, 82],
        41: [1, 83]
      }, t(D, [2, 43], {
        46: 84,
        13: S,
        41: L,
        48: W,
        49: v
      }), t(Y, [2, 45]), t(Y, [2, 50]), t(Y, [2, 51]), t(Y, [2, 52]), t(Y, [2, 53]), t(e, [2, 41], {
        42: T
      }), {
        6: C,
        10: N,
        39: 85,
        42: R,
        47: I
      }, {
        14: 86,
        40: B,
        50: P,
        70: X
      }, {
        16: 90,
        40: E,
        41: M
      }, {
        11: 91,
        40: p,
        50: g
      }, {
        18: 92,
        19: [1, 93],
        51: 50,
        52: 51,
        56: w
      }, t(e, [2, 12]), {
        19: [2, 57]
      }, t(F, [2, 58], {
        54: 94,
        55: 95,
        57: 96,
        59: Z,
        60: H
      }), t([19, 56, 59, 60], [2, 63]), t(e, [2, 22], {
        15: [1, 100],
        17: [1, 99]
      }), t([40, 50], [2, 68]), t(e, [2, 36]), {
        13: S,
        41: L,
        45: 101,
        46: 60,
        48: W,
        49: v
      }, t(e, [2, 47]), t(e, [2, 48]), t(e, [2, 49]), t(A, [2, 39]), t(A, [2, 40]), t(Y, [2, 46]), t(e, [2, 42]), t(e, [2, 8]), t(e, [2, 76]), t(e, [2, 77]), t(e, [2, 78]), {
        13: [1, 102],
        42: T
      }, {
        13: [1, 104],
        15: [1, 103]
      }, {
        19: [1, 105]
      }, t(e, [2, 15]), t(F, [2, 59], {
        55: 106,
        58: [1, 107],
        60: H
      }), t(F, [2, 60]), t(z, [2, 64]), t(F, [2, 67]), t(z, [2, 66]), {
        18: 108,
        19: [1, 109],
        51: 50,
        52: 51,
        56: w
      }, {
        16: 110,
        40: E,
        41: M
      }, t(D, [2, 44], {
        46: 84,
        13: S,
        41: L,
        48: W,
        49: v
      }), {
        14: 111,
        40: B,
        50: P,
        70: X
      }, {
        16: 112,
        40: E,
        41: M
      }, {
        14: 113,
        40: B,
        50: P,
        70: X
      }, t(e, [2, 13]), t(F, [2, 61]), {
        57: 114,
        59: Z
      }, {
        19: [1, 115]
      }, t(e, [2, 20]), t(e, [2, 23], {
        17: [1, 116],
        42: T
      }), t(e, [2, 11]), {
        13: [1, 117],
        42: T
      }, t(e, [2, 10]), t(z, [2, 65]), t(e, [2, 18]), {
        18: 118,
        19: [1, 119],
        51: 50,
        52: 51,
        56: w
      }, {
        14: 120,
        40: B,
        50: P,
        70: X
      }, {
        19: [1, 121]
      }, t(e, [2, 21]), t(e, [2, 9]), t(e, [2, 19])],
      defaultActions: {
        52: [2, 62],
        72: [2, 57]
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
        var a = [];
        var i = [null];
        var s = [];
        var n = this.table;
        var l = "";
        var c = 0;
        var h = 0;
        var d = 0;
        var p = s.slice.call(arguments, 1);
        var y = Object.create(this.lexer);
        var u = {
          yy: {}
        };
        for (var g in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, g)) {
            u.yy[g] = this.yy[g];
          }
        }
        y.setInput(t, u.yy);
        u.yy.lexer = y;
        u.yy.parser = this;
        if (y.yylloc === undefined) {
          y.yylloc = {};
        }
        var f = y.yylloc;
        s.push(f);
        var m = y.options && y.options.ranges;
        function b() {
          var t;
          if (typeof (t = a.pop() || y.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (a = t).pop();
            }
            t = e.symbols_[t] || t;
          }
          return t;
        }
        if (typeof u.yy.parseError == "function") {
          this.parseError = u.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        mermaidConfigUtils.setName(function (t) {
          r.length = r.length - t * 2;
          i.length = i.length - t;
          s.length = s.length - t;
        }, "popStack");
        mermaidConfigUtils.setName(b, "lex");
        var k;
        var _;
        var x;
        var E;
        var M;
        var w;
        var O;
        var S;
        var L;
        var T = {};
        while (true) {
          x = r[r.length - 1];
          if (this.defaultActions[x]) {
            E = this.defaultActions[x];
          } else {
            if (k == null) {
              k = b();
            }
            E = n[x] && n[x][k];
          }
          if (E === undefined || !E.length || !E[0]) {
            var W = "";
            L = [];
            for (w in n[x]) {
              if (this.terminals_[w] && w > 2) {
                L.push("'" + this.terminals_[w] + "'");
              }
            }
            W = y.showPosition ? "Parse error on line " + (c + 1) + ":\n" + y.showPosition() + "\nExpecting " + L.join(", ") + ", got '" + (this.terminals_[k] || k) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (k == 1 ? "end of input" : "'" + (this.terminals_[k] || k) + "'");
            this.parseError(W, {
              text: y.match,
              token: this.terminals_[k] || k,
              line: y.yylineno,
              loc: f,
              expected: L
            });
          }
          if (E[0] instanceof Array && E.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + x + ", token: " + k);
          }
          switch (E[0]) {
            case 1:
              r.push(k);
              i.push(y.yytext);
              s.push(y.yylloc);
              r.push(E[1]);
              k = null;
              if (_) {
                k = _;
                _ = null;
              } else {
                h = y.yyleng;
                l = y.yytext;
                c = y.yylineno;
                f = y.yylloc;
                if (d > 0) {
                  d--;
                }
              }
              break;
            case 2:
              O = this.productions_[E[1]][1];
              T.$ = i[i.length - O];
              T._$ = {
                first_line: s[s.length - (O || 1)].first_line,
                last_line: s[s.length - 1].last_line,
                first_column: s[s.length - (O || 1)].first_column,
                last_column: s[s.length - 1].last_column
              };
              if (m) {
                T._$.range = [s[s.length - (O || 1)].range[0], s[s.length - 1].range[1]];
              }
              if ((M = this.performAction.apply(T, [l, h, c, u.yy, E[1], i, s].concat(p))) !== undefined) {
                return M;
              }
              if (O) {
                r = r.slice(0, O * -1 * 2);
                i = i.slice(0, O * -1);
                s = s.slice(0, O * -1);
              }
              r.push(this.productions_[E[1]][0]);
              i.push(T.$);
              s.push(T._$);
              S = n[r[r.length - 2]][r[r.length - 1]];
              r.push(S);
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
        var a = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (r.length - 1) {
          this.yylineno -= r.length - 1;
        }
        var i = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: r ? (r.length === a.length ? this.yylloc.first_column : 0) + a[a.length - r.length].length - r[0].length : this.yylloc.first_column - e
        };
        if (this.options.ranges) {
          this.yylloc.range = [i[0], i[0] + this.yyleng - e];
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
        var a;
        var i;
        if (this.options.backtrack_lexer) {
          i = {
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
            i.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        if (a = t[0].match(/(?:\r\n?|\n).*/g)) {
          this.yylineno += a.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: a ? a[a.length - 1].length - a[a.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
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
          for (var s in i) {
            this[s] = i[s];
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
        var a;
        var i = this._currentRules();
        var s = 0;
        for (; s < i.length; s++) {
          if ((r = this._input.match(this.rules[i[s]])) && (!e || r[0].length > e[0].length)) {
            e = r;
            a = s;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(r, i[s])) !== false) {
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
          return (t = this.test_match(e, i[a])) !== false && t;
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
      performAction: mermaidConfigUtils.setName(function (t, e, r, a) {
        switch (r) {
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
    function q() {
      this.yy = {};
    }
    U.lexer = j;
    mermaidConfigUtils.setName(q, "Parser");
    q.prototype = U;
    U.Parser = q;
    return new q();
  }();
  p.parser = p;
  a = class {
    addEntity(t) {
      let a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      if (this.entities.has(t)) {
        if (!this.entities.get(t)?.alias && !!a) {
          this.entities.get(t).alias = a;
          mermaidConfigUtils.logger.info(`Add alias '${a}' to entity '${t}'`);
        }
      } else {
        this.entities.set(t, {
          id: `entity-${t}-${this.entities.size}`,
          label: t,
          attributes: [],
          alias: a,
          shape: "erBox",
          look: mermaidConfigUtils.getConfigAlias().look ?? "default",
          cssClasses: "default",
          cssStyles: []
        });
        mermaidConfigUtils.logger.info("Added new entity :", t);
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
      let r;
      let a = this.addEntity(t);
      for (r = e.length - 1; r >= 0; r--) {
        e[r].keys ||= [];
        e[r].comment ||= "";
        a.attributes.push(e[r]);
        mermaidConfigUtils.logger.debug("Added attribute ", e[r].name);
      }
    }
    addRelationship(t, e, r, a) {
      let i = this.entities.get(t);
      let s = this.entities.get(r);
      if (!i || !s) {
        return;
      }
      let n = {
        entityA: i.id,
        roleA: e,
        entityB: s.id,
        relSpec: a
      };
      this.relationships.push(n);
      mermaidConfigUtils.logger.debug("Added new relationship :", n);
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
      for (let i of t) {
        let t = this.classes.get(i);
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
      for (let r of t) {
        let t = this.entities.get(r);
        if (!e || !t) {
          return;
        }
        for (let r of e) {
          t.cssStyles.push(r);
        }
      }
    }
    addClass(t, e) {
      t.forEach(t => {
        let r = this.classes.get(t);
        if (r === undefined) {
          r = {
            id: t,
            styles: [],
            textStyles: []
          };
          this.classes.set(t, r);
        }
        if (e) {
          e.forEach(function (t) {
            if (/color/.exec(t)) {
              let e = t.replace("fill", "bgFill");
              r.textStyles.push(e);
            }
            r.styles.push(t);
          });
        }
      });
    }
    setClass(t, e) {
      for (let r of t) {
        let t = this.entities.get(r);
        if (t) {
          for (let r of e) {
            t.cssClasses += " " + r;
          }
        }
      }
    }
    clear() {
      this.entities = new Map();
      this.classes = new Map();
      this.relationships = [];
      mermaidConfigUtils.clearAccData();
    }
    getData() {
      let t = [];
      let e = [];
      let r = mermaidConfigUtils.getConfigAlias();
      for (let e of this.entities.keys()) {
        let r = this.entities.get(e);
        if (r) {
          r.cssCompiledStyles = this.getCompiledStyles(r.cssClasses.split(" "));
          t.push(r);
        }
      }
      let a = 0;
      for (let t of this.relationships) {
        let i = {
          id: mermaidTextLayoutUtils.getEdgeId(t.entityA, t.entityB, {
            prefix: "id",
            counter: a++
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
          look: r.look
        };
        e.push(i);
      }
      return {
        nodes: t,
        edges: e,
        other: {},
        config: r,
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
      this.setAccTitle = mermaidConfigUtils.setAccTitle;
      this.getAccTitle = mermaidConfigUtils.getAccTitle;
      this.setAccDescription = mermaidConfigUtils.setAccDescription;
      this.getAccDescription = mermaidConfigUtils.getAccDescription;
      this.setDiagramTitle = mermaidConfigUtils.setDiagramTitle;
      this.getDiagramTitle = mermaidConfigUtils.getDiagramTitle;
      this.getConfig = mermaidConfigUtils.setName(() => mermaidConfigUtils.getConfigAlias().er, "getConfig");
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
  mermaidConfigUtils.setName(a, "ErDB");
  var y = a;
  var u = {};
  mermaidConfigUtils.copyProperties(u, {
    draw: () => g
  });
  var g = mermaidConfigUtils.setName(async function (t, e, r, a) {
    var d;
    mermaidConfigUtils.logger.info("REF0:");
    mermaidConfigUtils.logger.info("Drawing er diagram (unified)", e);
    let {
      securityLevel: p,
      er: y,
      layout: u
    } = mermaidConfigUtils.getConfigAlias();
    let g = a.db.getData();
    let f = mermaidDiagramElementGetter.getDiagramElement(e, p);
    g.type = a.type;
    g.layoutAlgorithm = mermaidLayoutRegistry.getRegisteredLayoutAlgorithm(u);
    g.config.flowchart.nodeSpacing = (y == null ? undefined : y.nodeSpacing) || 140;
    g.config.flowchart.rankSpacing = (y == null ? undefined : y.rankSpacing) || 80;
    g.direction = a.db.getDirection();
    g.markers = ["only_one", "zero_or_one", "one_or_more", "zero_or_more"];
    g.diagramId = e;
    await mermaidLayoutRegistry.render(g, f);
    if (g.layoutAlgorithm === "elk") {
      f.select(".edges").lower();
    }
    let m = f.selectAll("[id*=\"-background\"]");
    if (Array.from(m).length > 0) {
      m.each(function () {
        let t = axisAndZoomUtilities.select(this);
        let e = t.attr("id").replace("-background", "");
        let r = f.select(`#${CSS.escape(e)}`);
        if (!r.empty()) {
          let e = r.attr("transform");
          t.attr("transform", e);
        }
      });
    }
    mermaidTextLayoutUtils.textLayoutUtils.insertTitle(f, "erDiagramTitleText", (y == null ? undefined : y.titleTopMargin) ?? 25, a.db.getDiagramTitle());
    svgViewportSetup.setupSvgViewport(f, 8, "erDiagram", (d = y == null ? undefined : y.useMaxWidth) === null || d === undefined || d);
  }, "draw");
  var f = mermaidConfigUtils.setName((t, e) => {
    let r = colorChannelExtractor.extractColorChannel;
    let a = r(t, "r");
    let i = r(t, "g");
    let s = r(t, "b");
    return colorAlphaSetter.setColorWithAlpha(a, i, s, e);
  }, "fade");
  var m = {
    parser: p,
    get db() {
      return new y();
    },
    renderer: u,
    styles: mermaidConfigUtils.setName(t => `
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
    background-color: ${f(t.tertiaryColor, 0.5)};
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
      return m;
    }
  });
}