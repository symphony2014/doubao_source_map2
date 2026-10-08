// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ee' to 'classDiagramStyles'
// - Renamed export 'P0' to 'classDiagramParser'
// - Renamed export 'b0' to 'classDiagramRenderer'
// - Renamed export 'dR' to 'ClassDB'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42509.925f4bc9.js
         * chunkId: 42509
         * moduleId: 60711
         */
module.exports = function (module, exports, require) {
  var i;
  var n;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var fontAwesomeIconStylesHelper = require("font-awesome-icon-styles-helper") /*id: 878353*/;
  var diagramElementSelector = require("diagram-element-selector") /*id: 150827*/;
  var mermaidSvgViewportSetup = require("mermaid-svg-viewport-setup") /*id: 3049*/;
  var mermaidLayoutRegistryRenderer = require("mermaid-layout-registry-renderer") /*id: 484129*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var A = function () {
    var e = loggerLevelUtils.setFunctionName(function (e, t, s, i) {
      s = s || {};
      i = e.length;
      for (; i--; s[e[i]] = t);
      return s;
    }, "o");
    var t = [1, 18];
    var s = [1, 19];
    var i = [1, 20];
    var n = [1, 41];
    var r = [1, 42];
    var l = [1, 26];
    var u = [1, 24];
    var o = [1, 25];
    var c = [1, 32];
    var h = [1, 33];
    var p = [1, 34];
    var A = [1, 45];
    var y = [1, 35];
    var m = [1, 36];
    var g = [1, 37];
    var b = [1, 38];
    var C = [1, 27];
    var E = [1, 28];
    var T = [1, 29];
    var k = [1, 30];
    var f = [1, 31];
    var F = [1, 44];
    var D = [1, 46];
    var B = [1, 43];
    var _ = [1, 47];
    var S = [1, 9];
    var $ = [1, 8, 9];
    var N = [1, 58];
    var L = [1, 59];
    var x = [1, 60];
    var v = [1, 61];
    var O = [1, 62];
    var I = [1, 63];
    var w = [1, 64];
    var R = [1, 8, 9, 41];
    var W = [1, 76];
    var M = [1, 8, 9, 12, 13, 22, 39, 41, 44, 68, 69, 70, 71, 72, 73, 74, 79, 81];
    var P = [1, 8, 9, 12, 13, 18, 20, 22, 39, 41, 44, 50, 60, 68, 69, 70, 71, 72, 73, 74, 79, 81, 86, 100, 102, 103];
    var G = [13, 60, 86, 100, 102, 103];
    var U = [13, 60, 73, 74, 86, 100, 102, 103];
    var Y = [13, 60, 68, 69, 70, 71, 72, 86, 100, 102, 103];
    var z = [1, 100];
    var V = [1, 117];
    var K = [1, 113];
    var j = [1, 109];
    var Z = [1, 115];
    var H = [1, 110];
    var Q = [1, 111];
    var X = [1, 112];
    var q = [1, 114];
    var J = [1, 116];
    var ee = [22, 48, 60, 61, 82, 86, 87, 88, 89, 90];
    var et = [1, 8, 9, 39, 41, 44];
    var es = [1, 8, 9, 22];
    var ei = [1, 145];
    var en = [1, 8, 9, 61];
    var ea = [1, 8, 9, 22, 48, 60, 61, 82, 86, 87, 88, 89, 90];
    var er = {
      trace: loggerLevelUtils.setFunctionName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        mermaidDoc: 4,
        statements: 5,
        graphConfig: 6,
        CLASS_DIAGRAM: 7,
        NEWLINE: 8,
        EOF: 9,
        statement: 10,
        classLabel: 11,
        SQS: 12,
        STR: 13,
        SQE: 14,
        namespaceName: 15,
        alphaNumToken: 16,
        classLiteralName: 17,
        DOT: 18,
        className: 19,
        GENERICTYPE: 20,
        relationStatement: 21,
        LABEL: 22,
        namespaceStatement: 23,
        classStatement: 24,
        memberStatement: 25,
        annotationStatement: 26,
        clickStatement: 27,
        styleStatement: 28,
        cssClassStatement: 29,
        noteStatement: 30,
        classDefStatement: 31,
        direction: 32,
        acc_title: 33,
        acc_title_value: 34,
        acc_descr: 35,
        acc_descr_value: 36,
        acc_descr_multiline_value: 37,
        namespaceIdentifier: 38,
        STRUCT_START: 39,
        classStatements: 40,
        STRUCT_STOP: 41,
        NAMESPACE: 42,
        classIdentifier: 43,
        STYLE_SEPARATOR: 44,
        members: 45,
        CLASS: 46,
        emptyBody: 47,
        SPACE: 48,
        ANNOTATION_START: 49,
        ANNOTATION_END: 50,
        MEMBER: 51,
        SEPARATOR: 52,
        relation: 53,
        NOTE_FOR: 54,
        noteText: 55,
        NOTE: 56,
        CLASSDEF: 57,
        classList: 58,
        stylesOpt: 59,
        ALPHA: 60,
        COMMA: 61,
        direction_tb: 62,
        direction_bt: 63,
        direction_rl: 64,
        direction_lr: 65,
        relationType: 66,
        lineType: 67,
        AGGREGATION: 68,
        EXTENSION: 69,
        COMPOSITION: 70,
        DEPENDENCY: 71,
        LOLLIPOP: 72,
        LINE: 73,
        DOTTED_LINE: 74,
        CALLBACK: 75,
        LINK: 76,
        LINK_TARGET: 77,
        CLICK: 78,
        CALLBACK_NAME: 79,
        CALLBACK_ARGS: 80,
        HREF: 81,
        STYLE: 82,
        CSSCLASS: 83,
        style: 84,
        styleComponent: 85,
        NUM: 86,
        COLON: 87,
        UNIT: 88,
        BRKT: 89,
        PCT: 90,
        commentToken: 91,
        textToken: 92,
        graphCodeTokens: 93,
        textNoTagsToken: 94,
        TAGSTART: 95,
        TAGEND: 96,
        "==": 97,
        "--": 98,
        DEFAULT: 99,
        MINUS: 100,
        keywords: 101,
        UNICODE_TEXT: 102,
        BQUOTE_STR: 103,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        7: "CLASS_DIAGRAM",
        8: "NEWLINE",
        9: "EOF",
        12: "SQS",
        13: "STR",
        14: "SQE",
        18: "DOT",
        20: "GENERICTYPE",
        22: "LABEL",
        33: "acc_title",
        34: "acc_title_value",
        35: "acc_descr",
        36: "acc_descr_value",
        37: "acc_descr_multiline_value",
        39: "STRUCT_START",
        41: "STRUCT_STOP",
        42: "NAMESPACE",
        44: "STYLE_SEPARATOR",
        46: "CLASS",
        48: "SPACE",
        49: "ANNOTATION_START",
        50: "ANNOTATION_END",
        51: "MEMBER",
        52: "SEPARATOR",
        54: "NOTE_FOR",
        56: "NOTE",
        57: "CLASSDEF",
        60: "ALPHA",
        61: "COMMA",
        62: "direction_tb",
        63: "direction_bt",
        64: "direction_rl",
        65: "direction_lr",
        68: "AGGREGATION",
        69: "EXTENSION",
        70: "COMPOSITION",
        71: "DEPENDENCY",
        72: "LOLLIPOP",
        73: "LINE",
        74: "DOTTED_LINE",
        75: "CALLBACK",
        76: "LINK",
        77: "LINK_TARGET",
        78: "CLICK",
        79: "CALLBACK_NAME",
        80: "CALLBACK_ARGS",
        81: "HREF",
        82: "STYLE",
        83: "CSSCLASS",
        86: "NUM",
        87: "COLON",
        88: "UNIT",
        89: "BRKT",
        90: "PCT",
        93: "graphCodeTokens",
        95: "TAGSTART",
        96: "TAGEND",
        97: "==",
        98: "--",
        99: "DEFAULT",
        100: "MINUS",
        101: "keywords",
        102: "UNICODE_TEXT",
        103: "BQUOTE_STR"
      },
      productions_: [0, [3, 1], [3, 1], [4, 1], [6, 4], [5, 1], [5, 2], [5, 3], [11, 3], [15, 1], [15, 1], [15, 3], [15, 2], [19, 1], [19, 3], [19, 1], [19, 2], [19, 2], [19, 2], [10, 1], [10, 2], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [10, 1], [23, 4], [23, 5], [38, 2], [40, 1], [40, 2], [40, 3], [24, 1], [24, 3], [24, 4], [24, 3], [24, 6], [43, 2], [43, 3], [47, 0], [47, 2], [47, 2], [26, 4], [45, 1], [45, 2], [25, 1], [25, 2], [25, 1], [25, 1], [21, 3], [21, 4], [21, 4], [21, 5], [30, 3], [30, 2], [31, 3], [58, 1], [58, 3], [32, 1], [32, 1], [32, 1], [32, 1], [53, 3], [53, 2], [53, 2], [53, 1], [66, 1], [66, 1], [66, 1], [66, 1], [66, 1], [67, 1], [67, 1], [27, 3], [27, 4], [27, 3], [27, 4], [27, 4], [27, 5], [27, 3], [27, 4], [27, 4], [27, 5], [27, 4], [27, 5], [27, 5], [27, 6], [28, 3], [29, 3], [59, 1], [59, 3], [84, 1], [84, 2], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [85, 1], [91, 1], [91, 1], [92, 1], [92, 1], [92, 1], [92, 1], [92, 1], [92, 1], [92, 1], [94, 1], [94, 1], [94, 1], [94, 1], [16, 1], [16, 1], [16, 1], [16, 1], [17, 1], [55, 1]],
      performAction: loggerLevelUtils.setFunctionName(function (e, t, s, i, n, a, r) {
        var l = a.length - 1;
        switch (n) {
          case 8:
            this.$ = a[l - 1];
            break;
          case 9:
          case 10:
          case 13:
          case 15:
            this.$ = a[l];
            break;
          case 11:
          case 14:
            this.$ = a[l - 2] + "." + a[l];
            break;
          case 12:
          case 16:
          case 100:
            this.$ = a[l - 1] + a[l];
            break;
          case 17:
          case 18:
            this.$ = a[l - 1] + "~" + a[l] + "~";
            break;
          case 19:
            i.addRelation(a[l]);
            break;
          case 20:
            a[l - 1].title = i.cleanupLabel(a[l]);
            i.addRelation(a[l - 1]);
            break;
          case 31:
            this.$ = a[l].trim();
            i.setAccTitle(this.$);
            break;
          case 32:
          case 33:
            this.$ = a[l].trim();
            i.setAccDescription(this.$);
            break;
          case 34:
            i.addClassesToNamespace(a[l - 3], a[l - 1]);
            break;
          case 35:
            i.addClassesToNamespace(a[l - 4], a[l - 1]);
            break;
          case 36:
            this.$ = a[l];
            i.addNamespace(a[l]);
            break;
          case 37:
          case 51:
          case 64:
          case 97:
            this.$ = [a[l]];
            break;
          case 38:
            this.$ = [a[l - 1]];
            break;
          case 39:
            a[l].unshift(a[l - 2]);
            this.$ = a[l];
            break;
          case 41:
            i.setCssClass(a[l - 2], a[l]);
            break;
          case 42:
            i.addMembers(a[l - 3], a[l - 1]);
            break;
          case 44:
            i.setCssClass(a[l - 5], a[l - 3]);
            i.addMembers(a[l - 5], a[l - 1]);
            break;
          case 45:
            this.$ = a[l];
            i.addClass(a[l]);
            break;
          case 46:
            this.$ = a[l - 1];
            i.addClass(a[l - 1]);
            i.setClassLabel(a[l - 1], a[l]);
            break;
          case 50:
            i.addAnnotation(a[l], a[l - 2]);
            break;
          case 52:
            a[l].push(a[l - 1]);
            this.$ = a[l];
            break;
          case 53:
          case 55:
          case 56:
            break;
          case 54:
            i.addMember(a[l - 1], i.cleanupLabel(a[l]));
            break;
          case 57:
            this.$ = {
              id1: a[l - 2],
              id2: a[l],
              relation: a[l - 1],
              relationTitle1: "none",
              relationTitle2: "none"
            };
            break;
          case 58:
            this.$ = {
              id1: a[l - 3],
              id2: a[l],
              relation: a[l - 1],
              relationTitle1: a[l - 2],
              relationTitle2: "none"
            };
            break;
          case 59:
            this.$ = {
              id1: a[l - 3],
              id2: a[l],
              relation: a[l - 2],
              relationTitle1: "none",
              relationTitle2: a[l - 1]
            };
            break;
          case 60:
            this.$ = {
              id1: a[l - 4],
              id2: a[l],
              relation: a[l - 2],
              relationTitle1: a[l - 3],
              relationTitle2: a[l - 1]
            };
            break;
          case 61:
            i.addNote(a[l], a[l - 1]);
            break;
          case 62:
            i.addNote(a[l]);
            break;
          case 63:
            this.$ = a[l - 2];
            i.defineClass(a[l - 1], a[l]);
            break;
          case 65:
            this.$ = a[l - 2].concat([a[l]]);
            break;
          case 66:
            i.setDirection("TB");
            break;
          case 67:
            i.setDirection("BT");
            break;
          case 68:
            i.setDirection("RL");
            break;
          case 69:
            i.setDirection("LR");
            break;
          case 70:
            this.$ = {
              type1: a[l - 2],
              type2: a[l],
              lineType: a[l - 1]
            };
            break;
          case 71:
            this.$ = {
              type1: "none",
              type2: a[l],
              lineType: a[l - 1]
            };
            break;
          case 72:
            this.$ = {
              type1: a[l - 1],
              type2: "none",
              lineType: a[l]
            };
            break;
          case 73:
            this.$ = {
              type1: "none",
              type2: "none",
              lineType: a[l]
            };
            break;
          case 74:
            this.$ = i.relationType.AGGREGATION;
            break;
          case 75:
            this.$ = i.relationType.EXTENSION;
            break;
          case 76:
            this.$ = i.relationType.COMPOSITION;
            break;
          case 77:
            this.$ = i.relationType.DEPENDENCY;
            break;
          case 78:
            this.$ = i.relationType.LOLLIPOP;
            break;
          case 79:
            this.$ = i.lineType.LINE;
            break;
          case 80:
            this.$ = i.lineType.DOTTED_LINE;
            break;
          case 81:
          case 87:
            this.$ = a[l - 2];
            i.setClickEvent(a[l - 1], a[l]);
            break;
          case 82:
          case 88:
            this.$ = a[l - 3];
            i.setClickEvent(a[l - 2], a[l - 1]);
            i.setTooltip(a[l - 2], a[l]);
            break;
          case 83:
            this.$ = a[l - 2];
            i.setLink(a[l - 1], a[l]);
            break;
          case 84:
            this.$ = a[l - 3];
            i.setLink(a[l - 2], a[l - 1], a[l]);
            break;
          case 85:
            this.$ = a[l - 3];
            i.setLink(a[l - 2], a[l - 1]);
            i.setTooltip(a[l - 2], a[l]);
            break;
          case 86:
            this.$ = a[l - 4];
            i.setLink(a[l - 3], a[l - 2], a[l]);
            i.setTooltip(a[l - 3], a[l - 1]);
            break;
          case 89:
            this.$ = a[l - 3];
            i.setClickEvent(a[l - 2], a[l - 1], a[l]);
            break;
          case 90:
            this.$ = a[l - 4];
            i.setClickEvent(a[l - 3], a[l - 2], a[l - 1]);
            i.setTooltip(a[l - 3], a[l]);
            break;
          case 91:
            this.$ = a[l - 3];
            i.setLink(a[l - 2], a[l]);
            break;
          case 92:
            this.$ = a[l - 4];
            i.setLink(a[l - 3], a[l - 1], a[l]);
            break;
          case 93:
            this.$ = a[l - 4];
            i.setLink(a[l - 3], a[l - 1]);
            i.setTooltip(a[l - 3], a[l]);
            break;
          case 94:
            this.$ = a[l - 5];
            i.setLink(a[l - 4], a[l - 2], a[l]);
            i.setTooltip(a[l - 4], a[l - 1]);
            break;
          case 95:
            this.$ = a[l - 2];
            i.setCssStyle(a[l - 1], a[l]);
            break;
          case 96:
            i.setCssClass(a[l - 1], a[l]);
            break;
          case 98:
            a[l - 2].push(a[l]);
            this.$ = a[l - 2];
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: 2,
        5: 3,
        6: 4,
        7: [1, 6],
        10: 5,
        16: 39,
        17: 40,
        19: 21,
        21: 7,
        23: 8,
        24: 9,
        25: 10,
        26: 11,
        27: 12,
        28: 13,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        33: t,
        35: s,
        37: i,
        38: 22,
        42: n,
        43: 23,
        46: r,
        49: l,
        51: u,
        52: o,
        54: c,
        56: h,
        57: p,
        60: A,
        62: y,
        63: m,
        64: g,
        65: b,
        75: C,
        76: E,
        78: T,
        82: k,
        83: f,
        86: F,
        100: D,
        102: B,
        103: _
      }, {
        1: [3]
      }, {
        1: [2, 1]
      }, {
        1: [2, 2]
      }, {
        1: [2, 3]
      }, e(S, [2, 5], {
        8: [1, 48]
      }), {
        8: [1, 49]
      }, e($, [2, 19], {
        22: [1, 50]
      }), e($, [2, 21]), e($, [2, 22]), e($, [2, 23]), e($, [2, 24]), e($, [2, 25]), e($, [2, 26]), e($, [2, 27]), e($, [2, 28]), e($, [2, 29]), e($, [2, 30]), {
        34: [1, 51]
      }, {
        36: [1, 52]
      }, e($, [2, 33]), e($, [2, 53], {
        53: 53,
        66: 56,
        67: 57,
        13: [1, 54],
        22: [1, 55],
        68: N,
        69: L,
        70: x,
        71: v,
        72: O,
        73: I,
        74: w
      }), {
        39: [1, 65]
      }, e(R, [2, 40], {
        39: [1, 67],
        44: [1, 66]
      }), e($, [2, 55]), e($, [2, 56]), {
        16: 68,
        60: A,
        86: F,
        100: D,
        102: B
      }, {
        16: 39,
        17: 40,
        19: 69,
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }, {
        16: 39,
        17: 40,
        19: 70,
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }, {
        16: 39,
        17: 40,
        19: 71,
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }, {
        60: [1, 72]
      }, {
        13: [1, 73]
      }, {
        16: 39,
        17: 40,
        19: 74,
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }, {
        13: W,
        55: 75
      }, {
        58: 77,
        60: [1, 78]
      }, e($, [2, 66]), e($, [2, 67]), e($, [2, 68]), e($, [2, 69]), e(M, [2, 13], {
        16: 39,
        17: 40,
        19: 80,
        18: [1, 79],
        20: [1, 81],
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }), e(M, [2, 15], {
        20: [1, 82]
      }), {
        15: 83,
        16: 84,
        17: 85,
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }, {
        16: 39,
        17: 40,
        19: 86,
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }, e(P, [2, 123]), e(P, [2, 124]), e(P, [2, 125]), e(P, [2, 126]), e([1, 8, 9, 12, 13, 20, 22, 39, 41, 44, 68, 69, 70, 71, 72, 73, 74, 79, 81], [2, 127]), e(S, [2, 6], {
        10: 5,
        21: 7,
        23: 8,
        24: 9,
        25: 10,
        26: 11,
        27: 12,
        28: 13,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        19: 21,
        38: 22,
        43: 23,
        16: 39,
        17: 40,
        5: 87,
        33: t,
        35: s,
        37: i,
        42: n,
        46: r,
        49: l,
        51: u,
        52: o,
        54: c,
        56: h,
        57: p,
        60: A,
        62: y,
        63: m,
        64: g,
        65: b,
        75: C,
        76: E,
        78: T,
        82: k,
        83: f,
        86: F,
        100: D,
        102: B,
        103: _
      }), {
        5: 88,
        10: 5,
        16: 39,
        17: 40,
        19: 21,
        21: 7,
        23: 8,
        24: 9,
        25: 10,
        26: 11,
        27: 12,
        28: 13,
        29: 14,
        30: 15,
        31: 16,
        32: 17,
        33: t,
        35: s,
        37: i,
        38: 22,
        42: n,
        43: 23,
        46: r,
        49: l,
        51: u,
        52: o,
        54: c,
        56: h,
        57: p,
        60: A,
        62: y,
        63: m,
        64: g,
        65: b,
        75: C,
        76: E,
        78: T,
        82: k,
        83: f,
        86: F,
        100: D,
        102: B,
        103: _
      }, e($, [2, 20]), e($, [2, 31]), e($, [2, 32]), {
        13: [1, 90],
        16: 39,
        17: 40,
        19: 89,
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }, {
        53: 91,
        66: 56,
        67: 57,
        68: N,
        69: L,
        70: x,
        71: v,
        72: O,
        73: I,
        74: w
      }, e($, [2, 54]), {
        67: 92,
        73: I,
        74: w
      }, e(G, [2, 73], {
        66: 93,
        68: N,
        69: L,
        70: x,
        71: v,
        72: O
      }), e(U, [2, 74]), e(U, [2, 75]), e(U, [2, 76]), e(U, [2, 77]), e(U, [2, 78]), e(Y, [2, 79]), e(Y, [2, 80]), {
        8: [1, 95],
        24: 96,
        40: 94,
        43: 23,
        46: r
      }, {
        16: 97,
        60: A,
        86: F,
        100: D,
        102: B
      }, {
        41: [1, 99],
        45: 98,
        51: z
      }, {
        50: [1, 101]
      }, {
        13: [1, 102]
      }, {
        13: [1, 103]
      }, {
        79: [1, 104],
        81: [1, 105]
      }, {
        22: V,
        48: K,
        59: 106,
        60: j,
        82: Z,
        84: 107,
        85: 108,
        86: H,
        87: Q,
        88: X,
        89: q,
        90: J
      }, {
        60: [1, 118]
      }, {
        13: W,
        55: 119
      }, e($, [2, 62]), e($, [2, 128]), {
        22: V,
        48: K,
        59: 120,
        60: j,
        61: [1, 121],
        82: Z,
        84: 107,
        85: 108,
        86: H,
        87: Q,
        88: X,
        89: q,
        90: J
      }, e(ee, [2, 64]), {
        16: 39,
        17: 40,
        19: 122,
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }, e(M, [2, 16]), e(M, [2, 17]), e(M, [2, 18]), {
        39: [2, 36]
      }, {
        15: 124,
        16: 84,
        17: 85,
        18: [1, 123],
        39: [2, 9],
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }, {
        39: [2, 10]
      }, e(et, [2, 45], {
        11: 125,
        12: [1, 126]
      }), e(S, [2, 7]), {
        9: [1, 127]
      }, e(es, [2, 57]), {
        16: 39,
        17: 40,
        19: 128,
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }, {
        13: [1, 130],
        16: 39,
        17: 40,
        19: 129,
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }, e(G, [2, 72], {
        66: 131,
        68: N,
        69: L,
        70: x,
        71: v,
        72: O
      }), e(G, [2, 71]), {
        41: [1, 132]
      }, {
        24: 96,
        40: 133,
        43: 23,
        46: r
      }, {
        8: [1, 134],
        41: [2, 37]
      }, e(R, [2, 41], {
        39: [1, 135]
      }), {
        41: [1, 136]
      }, e(R, [2, 43]), {
        41: [2, 51],
        45: 137,
        51: z
      }, {
        16: 39,
        17: 40,
        19: 138,
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }, e($, [2, 81], {
        13: [1, 139]
      }), e($, [2, 83], {
        13: [1, 141],
        77: [1, 140]
      }), e($, [2, 87], {
        13: [1, 142],
        80: [1, 143]
      }), {
        13: [1, 144]
      }, e($, [2, 95], {
        61: ei
      }), e(en, [2, 97], {
        85: 146,
        22: V,
        48: K,
        60: j,
        82: Z,
        86: H,
        87: Q,
        88: X,
        89: q,
        90: J
      }), e(ea, [2, 99]), e(ea, [2, 101]), e(ea, [2, 102]), e(ea, [2, 103]), e(ea, [2, 104]), e(ea, [2, 105]), e(ea, [2, 106]), e(ea, [2, 107]), e(ea, [2, 108]), e(ea, [2, 109]), e($, [2, 96]), e($, [2, 61]), e($, [2, 63], {
        61: ei
      }), {
        60: [1, 147]
      }, e(M, [2, 14]), {
        15: 148,
        16: 84,
        17: 85,
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }, {
        39: [2, 12]
      }, e(et, [2, 46]), {
        13: [1, 149]
      }, {
        1: [2, 4]
      }, e(es, [2, 59]), e(es, [2, 58]), {
        16: 39,
        17: 40,
        19: 150,
        60: A,
        86: F,
        100: D,
        102: B,
        103: _
      }, e(G, [2, 70]), e($, [2, 34]), {
        41: [1, 151]
      }, {
        24: 96,
        40: 152,
        41: [2, 38],
        43: 23,
        46: r
      }, {
        45: 153,
        51: z
      }, e(R, [2, 42]), {
        41: [2, 52]
      }, e($, [2, 50]), e($, [2, 82]), e($, [2, 84]), e($, [2, 85], {
        77: [1, 154]
      }), e($, [2, 88]), e($, [2, 89], {
        13: [1, 155]
      }), e($, [2, 91], {
        13: [1, 157],
        77: [1, 156]
      }), {
        22: V,
        48: K,
        60: j,
        82: Z,
        84: 158,
        85: 108,
        86: H,
        87: Q,
        88: X,
        89: q,
        90: J
      }, e(ea, [2, 100]), e(ee, [2, 65]), {
        39: [2, 11]
      }, {
        14: [1, 159]
      }, e(es, [2, 60]), e($, [2, 35]), {
        41: [2, 39]
      }, {
        41: [1, 160]
      }, e($, [2, 86]), e($, [2, 90]), e($, [2, 92]), e($, [2, 93], {
        77: [1, 161]
      }), e(en, [2, 98], {
        85: 146,
        22: V,
        48: K,
        60: j,
        82: Z,
        86: H,
        87: Q,
        88: X,
        89: q,
        90: J
      }), e(et, [2, 8]), e(R, [2, 44]), e($, [2, 94])],
      defaultActions: {
        2: [2, 1],
        3: [2, 2],
        4: [2, 3],
        83: [2, 36],
        85: [2, 10],
        124: [2, 12],
        127: [2, 4],
        137: [2, 52],
        148: [2, 11],
        152: [2, 39]
      },
      parseError: loggerLevelUtils.setFunctionName(function (e, t) {
        if (t.recoverable) {
          this.trace(e);
        } else {
          var s = Error(e);
          s.hash = t;
          throw s;
        }
      }, "parseError"),
      parse: loggerLevelUtils.setFunctionName(function (e) {
        var t = this;
        var s = [0];
        var i = [];
        var n = [null];
        var a = [];
        var r = this.table;
        var l = "";
        var u = 0;
        var o = 0;
        var c = 0;
        var h = a.slice.call(arguments, 1);
        var p = Object.create(this.lexer);
        var A = {
          yy: {}
        };
        for (var y in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, y)) {
            A.yy[y] = this.yy[y];
          }
        }
        p.setInput(e, A.yy);
        A.yy.lexer = p;
        A.yy.parser = this;
        if (p.yylloc === undefined) {
          p.yylloc = {};
        }
        var m = p.yylloc;
        a.push(m);
        var g = p.options && p.options.ranges;
        function b() {
          var e;
          if (typeof (e = i.pop() || p.lex() || 1) != "number") {
            if (e instanceof Array) {
              e = (i = e).pop();
            }
            e = t.symbols_[e] || e;
          }
          return e;
        }
        if (typeof A.yy.parseError == "function") {
          this.parseError = A.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        loggerLevelUtils.setFunctionName(function (e) {
          s.length = s.length - e * 2;
          n.length = n.length - e;
          a.length = a.length - e;
        }, "popStack");
        loggerLevelUtils.setFunctionName(b, "lex");
        var C;
        var E;
        var T;
        var k;
        var f;
        var F;
        var D;
        var B;
        var _;
        var S = {};
        while (true) {
          T = s[s.length - 1];
          if (this.defaultActions[T]) {
            k = this.defaultActions[T];
          } else {
            if (C == null) {
              C = b();
            }
            k = r[T] && r[T][C];
          }
          if (k === undefined || !k.length || !k[0]) {
            var $ = "";
            _ = [];
            for (F in r[T]) {
              if (this.terminals_[F] && F > 2) {
                _.push("'" + this.terminals_[F] + "'");
              }
            }
            $ = p.showPosition ? "Parse error on line " + (u + 1) + ":\n" + p.showPosition() + "\nExpecting " + _.join(", ") + ", got '" + (this.terminals_[C] || C) + "'" : "Parse error on line " + (u + 1) + ": Unexpected " + (C == 1 ? "end of input" : "'" + (this.terminals_[C] || C) + "'");
            this.parseError($, {
              text: p.match,
              token: this.terminals_[C] || C,
              line: p.yylineno,
              loc: m,
              expected: _
            });
          }
          if (k[0] instanceof Array && k.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + T + ", token: " + C);
          }
          switch (k[0]) {
            case 1:
              s.push(C);
              n.push(p.yytext);
              a.push(p.yylloc);
              s.push(k[1]);
              C = null;
              if (E) {
                C = E;
                E = null;
              } else {
                o = p.yyleng;
                l = p.yytext;
                u = p.yylineno;
                m = p.yylloc;
                if (c > 0) {
                  c--;
                }
              }
              break;
            case 2:
              D = this.productions_[k[1]][1];
              S.$ = n[n.length - D];
              S._$ = {
                first_line: a[a.length - (D || 1)].first_line,
                last_line: a[a.length - 1].last_line,
                first_column: a[a.length - (D || 1)].first_column,
                last_column: a[a.length - 1].last_column
              };
              if (g) {
                S._$.range = [a[a.length - (D || 1)].range[0], a[a.length - 1].range[1]];
              }
              if ((f = this.performAction.apply(S, [l, o, u, A.yy, k[1], n, a].concat(h))) !== undefined) {
                return f;
              }
              if (D) {
                s = s.slice(0, D * -1 * 2);
                n = n.slice(0, D * -1);
                a = a.slice(0, D * -1);
              }
              s.push(this.productions_[k[1]][0]);
              n.push(S.$);
              a.push(S._$);
              B = r[s[s.length - 2]][s[s.length - 1]];
              s.push(B);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var el = {
      EOF: 1,
      parseError: loggerLevelUtils.setFunctionName(function (e, t) {
        if (this.yy.parser) {
          this.yy.parser.parseError(e, t);
        } else {
          throw Error(e);
        }
      }, "parseError"),
      setInput: loggerLevelUtils.setFunctionName(function (e, t) {
        this.yy = t || this.yy || {};
        this._input = e;
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
        var e = this._input[0];
        this.yytext += e;
        this.yyleng++;
        this.offset++;
        this.match += e;
        this.matched += e;
        if (e.match(/(?:\r\n?|\n).*/g)) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return e;
      }, "input"),
      unput: loggerLevelUtils.setFunctionName(function (e) {
        var t = e.length;
        var s = e.split(/(?:\r\n?|\n)/g);
        this._input = e + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - t);
        this.offset -= t;
        var i = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (s.length - 1) {
          this.yylineno -= s.length - 1;
        }
        var n = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: s ? (s.length === i.length ? this.yylloc.first_column : 0) + i[i.length - s.length].length - s[0].length : this.yylloc.first_column - t
        };
        if (this.options.ranges) {
          this.yylloc.range = [n[0], n[0] + this.yyleng - t];
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
      less: loggerLevelUtils.setFunctionName(function (e) {
        this.unput(this.match.slice(e));
      }, "less"),
      pastInput: loggerLevelUtils.setFunctionName(function () {
        var e = this.matched.substr(0, this.matched.length - this.match.length);
        return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: loggerLevelUtils.setFunctionName(function () {
        var e = this.match;
        if (e.length < 20) {
          e += this._input.substr(0, 20 - e.length);
        }
        return (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: loggerLevelUtils.setFunctionName(function () {
        var e = this.pastInput();
        var t = Array(e.length + 1).join("-");
        return e + this.upcomingInput() + "\n" + t + "^";
      }, "showPosition"),
      test_match: loggerLevelUtils.setFunctionName(function (e, t) {
        var s;
        var i;
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
        if (i = e[0].match(/(?:\r\n?|\n).*/g)) {
          this.yylineno += i.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
        };
        this.yytext += e[0];
        this.match += e[0];
        this.matches = e;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(e[0].length);
        this.matched += e[0];
        s = this.performAction.call(this, this.yy, this, t, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (s) {
          return s;
        }
        if (this._backtrack) {
          for (var a in n) {
            this[a] = n[a];
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
        var e;
        var t;
        var s;
        var i;
        var n = this._currentRules();
        var a = 0;
        for (; a < n.length; a++) {
          if ((s = this._input.match(this.rules[n[a]])) && (!t || s[0].length > t[0].length)) {
            t = s;
            i = a;
            if (this.options.backtrack_lexer) {
              if ((e = this.test_match(s, n[a])) !== false) {
                return e;
              }
              if (!this._backtrack) {
                return false;
              }
              t = false;
              continue;
            }
            if (!this.options.flex) {
              break;
            }
          }
        }
        if (t) {
          return (e = this.test_match(t, n[i])) !== false && e;
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
        var e = this.next();
        return e || this.lex();
      }, "lex"),
      begin: loggerLevelUtils.setFunctionName(function (e) {
        this.conditionStack.push(e);
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
      topState: loggerLevelUtils.setFunctionName(function (e) {
        if ((e = this.conditionStack.length - 1 - Math.abs(e || 0)) >= 0) {
          return this.conditionStack[e];
        } else {
          return "INITIAL";
        }
      }, "topState"),
      pushState: loggerLevelUtils.setFunctionName(function (e) {
        this.begin(e);
      }, "pushState"),
      stateStackSize: loggerLevelUtils.setFunctionName(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {},
      performAction: loggerLevelUtils.setFunctionName(function (e, t, s, i) {
        switch (s) {
          case 0:
            return 62;
          case 1:
            return 63;
          case 2:
            return 64;
          case 3:
            return 65;
          case 4:
          case 5:
          case 14:
          case 31:
          case 36:
          case 40:
          case 47:
            break;
          case 6:
            this.begin("acc_title");
            return 33;
          case 7:
            this.popState();
            return "acc_title_value";
          case 8:
            this.begin("acc_descr");
            return 35;
          case 9:
            this.popState();
            return "acc_descr_value";
          case 10:
            this.begin("acc_descr_multiline");
            break;
          case 11:
          case 19:
          case 22:
          case 24:
          case 58:
          case 61:
            this.popState();
            break;
          case 12:
            return "acc_descr_multiline_value";
          case 13:
          case 35:
            return 8;
          case 15:
          case 16:
            return 7;
          case 17:
          case 37:
          case 45:
            return "EDGE_STATE";
          case 18:
            this.begin("callback_name");
            break;
          case 20:
            this.popState();
            this.begin("callback_args");
            break;
          case 21:
            return 79;
          case 23:
            return 80;
          case 25:
            return "STR";
          case 26:
            this.begin("string");
            break;
          case 27:
            return 82;
          case 28:
            return 57;
          case 29:
            this.begin("namespace");
            return 42;
          case 30:
          case 39:
            this.popState();
            return 8;
          case 32:
            this.begin("namespace-body");
            return 39;
          case 33:
          case 43:
            this.popState();
            return 41;
          case 34:
          case 44:
            return "EOF_IN_STRUCT";
          case 38:
            this.begin("class");
            return 46;
          case 41:
            this.popState();
            this.popState();
            return 41;
          case 42:
            this.begin("class-body");
            return 39;
          case 46:
            return "OPEN_IN_STRUCT";
          case 48:
            return "MEMBER";
          case 49:
            return 83;
          case 50:
            return 75;
          case 51:
            return 76;
          case 52:
            return 78;
          case 53:
            return 54;
          case 54:
            return 56;
          case 55:
            return 49;
          case 56:
            return 50;
          case 57:
            return 81;
          case 59:
            return "GENERICTYPE";
          case 60:
            this.begin("generic");
            break;
          case 62:
            return "BQUOTE_STR";
          case 63:
            this.begin("bqstring");
            break;
          case 64:
          case 65:
          case 66:
          case 67:
            return 77;
          case 68:
          case 69:
            return 69;
          case 70:
          case 71:
            return 71;
          case 72:
            return 70;
          case 73:
            return 68;
          case 74:
            return 72;
          case 75:
            return 73;
          case 76:
            return 74;
          case 77:
            return 22;
          case 78:
            return 44;
          case 79:
            return 100;
          case 80:
            return 18;
          case 81:
            return "PLUS";
          case 82:
            return 87;
          case 83:
            return 61;
          case 84:
          case 85:
            return 89;
          case 86:
            return 90;
          case 87:
          case 88:
            return "EQUALS";
          case 89:
            return 60;
          case 90:
            return 12;
          case 91:
            return 14;
          case 92:
            return "PUNCTUATION";
          case 93:
            return 86;
          case 94:
            return 102;
          case 95:
          case 96:
            return 48;
          case 97:
            return 9;
        }
      }, "anonymous"),
      rules: [/^(?:.*direction\s+TB[^\n]*)/, /^(?:.*direction\s+BT[^\n]*)/, /^(?:.*direction\s+RL[^\n]*)/, /^(?:.*direction\s+LR[^\n]*)/, /^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/, /^(?:%%[^\n]*(\r?\n)*)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:\s*(\r?\n)+)/, /^(?:\s+)/, /^(?:classDiagram-v2\b)/, /^(?:classDiagram\b)/, /^(?:\[\*\])/, /^(?:call[\s]+)/, /^(?:\([\s]*\))/, /^(?:\()/, /^(?:[^(]*)/, /^(?:\))/, /^(?:[^)]*)/, /^(?:["])/, /^(?:[^"]*)/, /^(?:["])/, /^(?:style\b)/, /^(?:classDef\b)/, /^(?:namespace\b)/, /^(?:\s*(\r?\n)+)/, /^(?:\s+)/, /^(?:[{])/, /^(?:[}])/, /^(?:$)/, /^(?:\s*(\r?\n)+)/, /^(?:\s+)/, /^(?:\[\*\])/, /^(?:class\b)/, /^(?:\s*(\r?\n)+)/, /^(?:\s+)/, /^(?:[}])/, /^(?:[{])/, /^(?:[}])/, /^(?:$)/, /^(?:\[\*\])/, /^(?:[{])/, /^(?:[\n])/, /^(?:[^{}\n]*)/, /^(?:cssClass\b)/, /^(?:callback\b)/, /^(?:link\b)/, /^(?:click\b)/, /^(?:note for\b)/, /^(?:note\b)/, /^(?:<<)/, /^(?:>>)/, /^(?:href\b)/, /^(?:[~])/, /^(?:[^~]*)/, /^(?:~)/, /^(?:[`])/, /^(?:[^`]+)/, /^(?:[`])/, /^(?:_self\b)/, /^(?:_blank\b)/, /^(?:_parent\b)/, /^(?:_top\b)/, /^(?:\s*<\|)/, /^(?:\s*\|>)/, /^(?:\s*>)/, /^(?:\s*<)/, /^(?:\s*\*)/, /^(?:\s*o\b)/, /^(?:\s*\(\))/, /^(?:--)/, /^(?:\.\.)/, /^(?::{1}[^:\n;]+)/, /^(?::{3})/, /^(?:-)/, /^(?:\.)/, /^(?:\+)/, /^(?::)/, /^(?:,)/, /^(?:#)/, /^(?:#)/, /^(?:%)/, /^(?:=)/, /^(?:=)/, /^(?:\w+)/, /^(?:\[)/, /^(?:\])/, /^(?:[!"#$%&'*+,-.`?\\/])/, /^(?:[0-9]+)/, /^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/, /^(?:\s)/, /^(?:\s)/, /^(?:$)/],
      conditions: {
        "namespace-body": {
          rules: [26, 33, 34, 35, 36, 37, 38, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97],
          inclusive: false
        },
        namespace: {
          rules: [26, 29, 30, 31, 32, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97],
          inclusive: false
        },
        "class-body": {
          rules: [26, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97],
          inclusive: false
        },
        class: {
          rules: [26, 39, 40, 41, 42, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97],
          inclusive: false
        },
        acc_descr_multiline: {
          rules: [11, 12, 26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97],
          inclusive: false
        },
        acc_descr: {
          rules: [9, 26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97],
          inclusive: false
        },
        acc_title: {
          rules: [7, 26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97],
          inclusive: false
        },
        callback_args: {
          rules: [22, 23, 26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97],
          inclusive: false
        },
        callback_name: {
          rules: [19, 20, 21, 26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97],
          inclusive: false
        },
        href: xssContentSanitizer.sanitizeUrl({
          rules: [26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97],
          inclusive: false
        }, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFbDF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*t5-%R*aWJ-TjB$$3BT%TFKNlp*RlZiR04xWWxkd2$sbFlTbT$r$0%wOQ"
        }),
        struct: {
          rules: [26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97],
          inclusive: false
        },
        generic: {
          rules: [26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97],
          inclusive: false
        },
        bqstring: {
          rules: [26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97],
          inclusive: false
        },
        string: {
          rules: [24, 25, 26, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 14, 15, 16, 17, 18, 26, 27, 28, 29, 38, 49, 50, 51, 52, 53, 54, 55, 56, 57, 60, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97],
          inclusive: true
        }
      }
    };
    function eu() {
      this.yy = {};
    }
    er.lexer = el;
    loggerLevelUtils.setFunctionName(eu, "Parser");
    eu.prototype = er;
    er.Parser = eu;
    return new eu();
  }();
  A.parser = A;
  var y = A;
  var m = ["#", "+", "~", "-", ""];
  i = class {
    getDisplayDetails() {
      let e = this.visibility + mermaidConfigUtils_1.parseGenericTypes(this.id);
      if (this.memberType === "method") {
        e += `(${mermaidConfigUtils_1.parseGenericTypes(this.parameters.trim())})`;
        if (this.returnType) {
          e += " : " + mermaidConfigUtils_1.parseGenericTypes(this.returnType);
        }
      }
      return {
        displayText: e = e.trim(),
        cssStyle: this.parseClassifier()
      };
    }
    parseMember(e) {
      let t = "";
      if (this.memberType === "method") {
        let s = /([#+~-])?(.+)\((.*)\)([\s$*])?(.*)([$*])?/.exec(e);
        if (s) {
          let e = s[1] ? s[1].trim() : "";
          if (m.includes(e)) {
            this.visibility = e;
          }
          this.id = s[2];
          this.parameters = s[3] ? s[3].trim() : "";
          t = s[4] ? s[4].trim() : "";
          this.returnType = s[5] ? s[5].trim() : "";
          if (t === "") {
            let e = this.returnType.substring(this.returnType.length - 1);
            if (/[$*]/.exec(e)) {
              t = e;
              this.returnType = this.returnType.substring(0, this.returnType.length - 1);
            }
          }
        }
      } else {
        let s = e.length;
        let i = e.substring(0, 1);
        let n = e.substring(s - 1);
        if (m.includes(i)) {
          this.visibility = i;
        }
        if (/[$*]/.exec(n)) {
          t = n;
        }
        this.id = e.substring(+(this.visibility !== ""), t === "" ? s : s - 1);
      }
      this.classifier = t;
      this.id = this.id.startsWith(" ") ? " " + this.id.trim() : this.id.trim();
      let s = `${this.visibility ? "\\" + this.visibility : ""}${mermaidConfigUtils_1.parseGenericTypes(this.id)}${this.memberType === "method" ? `(${mermaidConfigUtils_1.parseGenericTypes(this.parameters)})${this.returnType ? " : " + mermaidConfigUtils_1.parseGenericTypes(this.returnType) : ""}` : ""}`;
      this.text = s.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
      if (this.text.startsWith("\\&lt;")) {
        this.text = this.text.replace("\\&lt;", "~");
      }
    }
    parseClassifier() {
      switch (this.classifier) {
        case "*":
          return "font-style:italic;";
        case "$":
          return "text-decoration:underline;";
        default:
          return "";
      }
    }
    constructor(e, t) {
      this.memberType = t;
      this.visibility = "";
      this.classifier = "";
      this.text = "";
      let s = mermaidConfigUtils_1.sanitizeText(e, mermaidConfigUtils_1.getConfigAlias());
      this.parseMember(s);
    }
  };
  loggerLevelUtils.setFunctionName(i, "ClassMember");
  var g = i;
  var b = "classId-";
  var C = 0;
  var E = loggerLevelUtils.setFunctionName(e => mermaidConfigUtils_1.textUtilities.sanitizeText(e, mermaidConfigUtils_1.getConfigAlias()), "sanitizeText");
  n = class {
    splitClassNameAndType(e) {
      let t = mermaidConfigUtils_1.textUtilities.sanitizeText(e, mermaidConfigUtils_1.getConfigAlias());
      let s = "";
      let i = t;
      if (t.indexOf("~") > 0) {
        let e = t.split("~");
        i = E(e[0]);
        s = E(e[1]);
      }
      return {
        className: i,
        type: s
      };
    }
    setClassLabel(e, t) {
      let s = mermaidConfigUtils_1.textUtilities.sanitizeText(e, mermaidConfigUtils_1.getConfigAlias());
      t &&= E(t);
      let {
        className: i
      } = this.splitClassNameAndType(s);
      this.classes.get(i).label = t;
      this.classes.get(i).text = `${t}${this.classes.get(i).type ? `<${this.classes.get(i).type}>` : ""}`;
    }
    addClass(e) {
      let t = mermaidConfigUtils_1.textUtilities.sanitizeText(e, mermaidConfigUtils_1.getConfigAlias());
      let {
        className: s,
        type: i
      } = this.splitClassNameAndType(t);
      if (this.classes.has(s)) {
        return;
      }
      let n = mermaidConfigUtils_1.textUtilities.sanitizeText(s, mermaidConfigUtils_1.getConfigAlias());
      this.classes.set(n, {
        id: n,
        type: i,
        label: n,
        text: `${n}${i ? `&lt;${i}&gt;` : ""}`,
        shape: "classBox",
        cssClasses: "default",
        methods: [],
        members: [],
        annotations: [],
        styles: [],
        domId: b + n + "-" + C
      });
      C++;
    }
    addInterface(e, t) {
      let s = {
        id: `interface${this.interfaces.length}`,
        label: e,
        classId: t
      };
      this.interfaces.push(s);
    }
    lookUpDomId(e) {
      let t = mermaidConfigUtils_1.textUtilities.sanitizeText(e, mermaidConfigUtils_1.getConfigAlias());
      if (this.classes.has(t)) {
        return this.classes.get(t).domId;
      }
      throw Error("Class not found: " + t);
    }
    clear() {
      this.relations = [];
      this.classes = new Map();
      this.notes = [];
      this.interfaces = [];
      this.functions = [];
      this.functions.push(this.setupToolTips.bind(this));
      this.namespaces = new Map();
      this.namespaceCounter = 0;
      this.direction = "TB";
      mermaidConfigUtils_1.clearCommonDb();
    }
    getClass(e) {
      return this.classes.get(e);
    }
    getClasses() {
      return this.classes;
    }
    getRelations() {
      return this.relations;
    }
    getNotes() {
      return this.notes;
    }
    addRelation(e) {
      loggerLevelUtils.logger.debug("Adding relation: " + JSON.stringify(e));
      let t = [this.relationType.LOLLIPOP, this.relationType.AGGREGATION, this.relationType.COMPOSITION, this.relationType.DEPENDENCY, this.relationType.EXTENSION];
      if (e.relation.type1 !== this.relationType.LOLLIPOP || t.includes(e.relation.type2)) {
        if (e.relation.type2 !== this.relationType.LOLLIPOP || t.includes(e.relation.type1)) {
          this.addClass(e.id1);
          this.addClass(e.id2);
        } else {
          this.addClass(e.id1);
          this.addInterface(e.id2, e.id1);
          e.id2 = `interface${this.interfaces.length - 1}`;
        }
      } else {
        this.addClass(e.id2);
        this.addInterface(e.id1, e.id2);
        e.id1 = `interface${this.interfaces.length - 1}`;
      }
      e.id1 = this.splitClassNameAndType(e.id1).className;
      e.id2 = this.splitClassNameAndType(e.id2).className;
      e.relationTitle1 = mermaidConfigUtils_1.textUtilities.sanitizeText(e.relationTitle1.trim(), mermaidConfigUtils_1.getConfigAlias());
      e.relationTitle2 = mermaidConfigUtils_1.textUtilities.sanitizeText(e.relationTitle2.trim(), mermaidConfigUtils_1.getConfigAlias());
      this.relations.push(e);
    }
    addAnnotation(e, t) {
      let s = this.splitClassNameAndType(e).className;
      this.classes.get(s).annotations.push(t);
    }
    addMember(e, t) {
      this.addClass(e);
      let s = this.splitClassNameAndType(e).className;
      let i = this.classes.get(s);
      if (typeof t == "string") {
        let e = t.trim();
        if (e.startsWith("<<") && e.endsWith(">>")) {
          i.annotations.push(E(e.substring(2, e.length - 2)));
        } else if (e.indexOf(")") > 0) {
          i.methods.push(new g(e, "method"));
        } else if (e) {
          i.members.push(new g(e, "attribute"));
        }
      }
    }
    addMembers(e, t) {
      if (Array.isArray(t)) {
        t.reverse();
        t.forEach(t => this.addMember(e, t));
      }
    }
    addNote(e, t) {
      let s = {
        id: `note${this.notes.length}`,
        class: t,
        text: e
      };
      this.notes.push(s);
    }
    cleanupLabel(e) {
      if (e.startsWith(":")) {
        e = e.substring(1);
      }
      return E(e.trim());
    }
    setCssClass(e, t) {
      e.split(",").forEach(e => {
        let s = e;
        if (/\d/.exec(e[0])) {
          s = b + s;
        }
        let i = this.classes.get(s);
        if (i) {
          i.cssClasses += " " + t;
        }
      });
    }
    defineClass(e, t) {
      for (let s of e) {
        let e = this.styleClasses.get(s);
        if (e === undefined) {
          e = {
            id: s,
            styles: [],
            textStyles: []
          };
          this.styleClasses.set(s, e);
        }
        if (t) {
          t.forEach(t => {
            if (/color/.exec(t)) {
              let s = t.replace("fill", "bgFill");
              e.textStyles.push(s);
            }
            e.styles.push(t);
          });
        }
        this.classes.forEach(e => {
          if (e.cssClasses.includes(s)) {
            e.styles.push(...t.flatMap(e => e.split(",")));
          }
        });
      }
    }
    setTooltip(e, t) {
      e.split(",").forEach(e => {
        if (t !== undefined) {
          this.classes.get(e).tooltip = E(t);
        }
      });
    }
    getTooltip(e, t) {
      if (t && this.namespaces.has(t)) {
        return this.namespaces.get(t).classes.get(e).tooltip;
      } else {
        return this.classes.get(e).tooltip;
      }
    }
    setLink(e, t, s) {
      let i = mermaidConfigUtils_1.getConfigAlias();
      e.split(",").forEach(e => {
        let n = e;
        if (/\d/.exec(e[0])) {
          n = b + n;
        }
        let a = this.classes.get(n);
        if (a) {
          a.link = mermaidDiagramUtils.mermaidUtils.formatUrl(t, i);
          if (i.securityLevel === "sandbox") {
            a.linkTarget = "_top";
          } else if (typeof s == "string") {
            a.linkTarget = E(s);
          } else {
            a.linkTarget = "_blank";
          }
        }
      });
      this.setCssClass(e, "clickable");
    }
    setClickEvent(e, t, s) {
      e.split(",").forEach(e => {
        this.setClickFunc(e, t, s);
        this.classes.get(e).haveCallback = true;
      });
      this.setCssClass(e, "clickable");
    }
    setClickFunc(e, t, s) {
      let i = mermaidConfigUtils_1.textUtilities.sanitizeText(e, mermaidConfigUtils_1.getConfigAlias());
      if (mermaidConfigUtils_1.getConfigAlias().securityLevel === "loose" && t !== undefined && this.classes.has(i)) {
        let e = this.lookUpDomId(i);
        let n = [];
        if (typeof s == "string") {
          n = s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
          for (let e = 0; e < n.length; e++) {
            let t = n[e].trim();
            if (t.startsWith("\"") && t.endsWith("\"")) {
              t = t.substr(1, t.length - 2);
            }
            n[e] = t;
          }
        }
        if (n.length === 0) {
          n.push(e);
        }
        this.functions.push(() => {
          let s = document.querySelector(`[id="${e}"]`);
          if (s !== null) {
            s.addEventListener("click", () => {
              mermaidDiagramUtils.mermaidUtils.runFunc(t, ...n);
            }, false);
          }
        });
      }
    }
    bindFunctions(e) {
      this.functions.forEach(t => {
        t(e);
      });
    }
    getDirection() {
      return this.direction;
    }
    setDirection(e) {
      this.direction = e;
    }
    addNamespace(e) {
      if (!this.namespaces.has(e)) {
        this.namespaces.set(e, {
          id: e,
          classes: new Map(),
          children: {},
          domId: b + e + "-" + this.namespaceCounter
        });
        this.namespaceCounter++;
      }
    }
    getNamespace(e) {
      return this.namespaces.get(e);
    }
    getNamespaces() {
      return this.namespaces;
    }
    addClassesToNamespace(e, t) {
      if (this.namespaces.has(e)) {
        for (let s of t) {
          let {
            className: t
          } = this.splitClassNameAndType(s);
          this.classes.get(t).parent = e;
          this.namespaces.get(e).classes.set(t, this.classes.get(t));
        }
      }
    }
    setCssStyle(e, t) {
      let s = this.classes.get(e);
      if (t && s) {
        for (let e of t) {
          if (e.includes(",")) {
            s.styles.push(...e.split(","));
          } else {
            s.styles.push(e);
          }
        }
      }
    }
    getArrowMarker(e) {
      let t;
      switch (e) {
        case 0:
          t = "aggregation";
          break;
        case 1:
          t = "extension";
          break;
        case 2:
          t = "composition";
          break;
        case 3:
          t = "dependency";
          break;
        case 4:
          t = "lollipop";
          break;
        default:
          t = "none";
      }
      return t;
    }
    getData() {
      let n = [];
      let a = [];
      let r = mermaidConfigUtils_1.getConfigAlias();
      for (let t of this.namespaces.keys()) {
        let s = this.namespaces.get(t);
        if (s) {
          let t = {
            id: s.id,
            label: s.id,
            isGroup: true,
            padding: r.class.padding ?? 16,
            shape: "rect",
            cssStyles: ["fill: none", "stroke: black"],
            look: r.look
          };
          n.push(t);
        }
      }
      for (let e of this.classes.keys()) {
        let t = this.classes.get(e);
        if (t) {
          t.parentId = t.parent;
          t.look = r.look;
          n.push(t);
        }
      }
      let l = 0;
      for (let e of this.notes) {
        l++;
        let u = {
          id: e.id,
          label: e.text,
          isGroup: false,
          shape: "note",
          padding: r.class.padding ?? 6,
          cssStyles: ["text-align: left", "white-space: nowrap", `fill: ${r.themeVariables.noteBkgColor}`, `stroke: ${r.themeVariables.noteBorderColor}`],
          look: r.look
        };
        n.push(u);
        let o = this.classes.get(e.class)?.id ?? "";
        if (o) {
          let t = {
            id: `edgeNote${l}`,
            start: e.id,
            end: o,
            type: "normal",
            thickness: "normal",
            classes: "relation",
            arrowTypeStart: "none",
            arrowTypeEnd: "none",
            arrowheadStyle: "",
            labelStyle: [""],
            style: ["fill: none"],
            pattern: "dotted",
            look: r.look
          };
          a.push(t);
        }
      }
      for (let e of this.interfaces) {
        let t = {
          id: e.id,
          label: e.label,
          isGroup: false,
          shape: "rect",
          cssStyles: ["opacity: 0;"],
          look: r.look
        };
        n.push(t);
      }
      l = 0;
      for (let e of this.relations) {
        l++;
        let t = {
          id: mermaidDiagramUtils.getEdgeId(e.id1, e.id2, {
            prefix: "id",
            counter: l
          }),
          start: e.id1,
          end: e.id2,
          type: "normal",
          label: e.title,
          labelpos: "c",
          thickness: "normal",
          classes: "relation",
          arrowTypeStart: this.getArrowMarker(e.relation.type1),
          arrowTypeEnd: this.getArrowMarker(e.relation.type2),
          startLabelRight: e.relationTitle1 === "none" ? "" : e.relationTitle1,
          endLabelLeft: e.relationTitle2 === "none" ? "" : e.relationTitle2,
          arrowheadStyle: "",
          labelStyle: ["display: inline-block"],
          style: e.style || "",
          pattern: e.relation.lineType == 1 ? "dashed" : "solid",
          look: r.look
        };
        a.push(t);
      }
      return {
        nodes: n,
        edges: a,
        other: {},
        config: r,
        direction: this.getDirection()
      };
    }
    constructor() {
      this.relations = [];
      this.classes = new Map();
      this.styleClasses = new Map();
      this.notes = [];
      this.interfaces = [];
      this.namespaces = new Map();
      this.namespaceCounter = 0;
      this.functions = [];
      this.lineType = {
        LINE: 0,
        DOTTED_LINE: 1
      };
      this.relationType = {
        AGGREGATION: 0,
        EXTENSION: 1,
        COMPOSITION: 2,
        DEPENDENCY: 3,
        LOLLIPOP: 4
      };
      this.setupToolTips = loggerLevelUtils.setFunctionName(e => {
        let t = axisAndZoomUtilities.select(".mermaidTooltip");
        if ((t._groups || t)[0][0] === null) {
          t = axisAndZoomUtilities.select("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0);
        }
        axisAndZoomUtilities.select(e).select("svg").selectAll("g.node").on("mouseover", e => {
          let s = axisAndZoomUtilities.select(e.currentTarget);
          if (s.attr("title") === null) {
            return;
          }
          let i = this.getBoundingClientRect();
          t.transition().duration(200).style("opacity", ".9");
          t.text(s.attr("title")).style("left", window.scrollX + i.left + (i.right - i.left) / 2 + "px").style("top", window.scrollY + i.top - 14 + document.body.scrollTop + "px");
          t.html(t.html().replace(/&lt;br\/&gt;/g, "<br/>"));
          s.classed("hover", true);
        }).on("mouseout", e => {
          t.transition().duration(500).style("opacity", 0);
          axisAndZoomUtilities.select(e.currentTarget).classed("hover", false);
        });
      }, "setupToolTips");
      this.direction = "TB";
      this.setAccTitle = mermaidConfigUtils_1.setAccTitle;
      this.getAccTitle = mermaidConfigUtils_1.getAccTitle;
      this.setAccDescription = mermaidConfigUtils_1.setAccDescription;
      this.getAccDescription = mermaidConfigUtils_1.getAccDescription;
      this.setDiagramTitle = mermaidConfigUtils_1.setDiagramTitle;
      this.getDiagramTitle = mermaidConfigUtils_1.getDiagramTitle;
      this.getConfig = loggerLevelUtils.setFunctionName(() => mermaidConfigUtils_1.getConfigAlias().class, "getConfig");
      this.functions.push(this.setupToolTips.bind(this));
      this.clear();
      this.addRelation = this.addRelation.bind(this);
      this.addClassesToNamespace = this.addClassesToNamespace.bind(this);
      this.addNamespace = this.addNamespace.bind(this);
      this.setCssClass = this.setCssClass.bind(this);
      this.addMembers = this.addMembers.bind(this);
      this.addClass = this.addClass.bind(this);
      this.setClassLabel = this.setClassLabel.bind(this);
      this.addAnnotation = this.addAnnotation.bind(this);
      this.addMember = this.addMember.bind(this);
      this.cleanupLabel = this.cleanupLabel.bind(this);
      this.addNote = this.addNote.bind(this);
      this.defineClass = this.defineClass.bind(this);
      this.setDirection = this.setDirection.bind(this);
      this.setLink = this.setLink.bind(this);
      this.bindFunctions = this.bindFunctions.bind(this);
      this.clear = this.clear.bind(this);
      this.setTooltip = this.setTooltip.bind(this);
      this.setClickEvent = this.setClickEvent.bind(this);
      this.setCssStyle = this.setCssStyle.bind(this);
    }
  };
  loggerLevelUtils.setFunctionName(n, "ClassDB");
  var T = n;
  var k = loggerLevelUtils.setFunctionName(e => `g.classGroup text {
  fill: ${e.nodeBorder || e.classText};
  stroke: none;
  font-family: ${e.fontFamily};
  font-size: 10px;

  .title {
    font-weight: bolder;
  }

}

.nodeLabel, .edgeLabel {
  color: ${e.classText};
}
.edgeLabel .label rect {
  fill: ${e.mainBkg};
}
.label text {
  fill: ${e.classText};
}

.labelBkg {
  background: ${e.mainBkg};
}
.edgeLabel .label span {
  background: ${e.mainBkg};
}

.classTitle {
  font-weight: bolder;
}
.node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }


.divider {
  stroke: ${e.nodeBorder};
  stroke-width: 1;
}

g.clickable {
  cursor: pointer;
}

g.classGroup rect {
  fill: ${e.mainBkg};
  stroke: ${e.nodeBorder};
}

g.classGroup line {
  stroke: ${e.nodeBorder};
  stroke-width: 1;
}

.classLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${e.mainBkg};
  opacity: 0.5;
}

.classLabel .label {
  fill: ${e.nodeBorder};
  font-size: 10px;
}

.relation {
  stroke: ${e.lineColor};
  stroke-width: 1;
  fill: none;
}

.dashed-line{
  stroke-dasharray: 3;
}

.dotted-line{
  stroke-dasharray: 1 2;
}

#compositionStart, .composition {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#compositionEnd, .composition {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#extensionStart, .extension {
  fill: transparent !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#extensionEnd, .extension {
  fill: transparent !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#aggregationStart, .aggregation {
  fill: transparent !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#aggregationEnd, .aggregation {
  fill: transparent !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#lollipopStart, .lollipop {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#lollipopEnd, .lollipop {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

.edgeTerminals {
  font-size: 11px;
  line-height: initial;
}

.classTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${e.textColor};
}
  ${fontAwesomeIconStylesHelper.getIconStyles()}
`, "getStyles");
  var f = loggerLevelUtils.setFunctionName(function (e, t = "TB") {
    if (!e.doc) {
      return t;
    }
    let s = t;
    for (let t of e.doc) {
      if (t.stmt === "dir") {
        s = t.value;
      }
    }
    return s;
  }, "getDir");
  var F = {
    getClasses: loggerLevelUtils.setFunctionName(function (e, t) {
      return t.db.getClasses();
    }, "getClasses"),
    draw: loggerLevelUtils.setFunctionName(async function (e, t, s, i) {
      var a;
      loggerLevelUtils.logger.info("REF0:");
      loggerLevelUtils.logger.info("Drawing class diagram (v3)", t);
      let {
        securityLevel: r,
        state: p,
        layout: A
      } = mermaidConfigUtils_1.getConfigAlias();
      let y = i.db.getData();
      let m = diagramElementSelector.getDiagramElement(t, r);
      y.type = i.type;
      y.layoutAlgorithm = mermaidLayoutRegistryRenderer.getRegisteredLayoutAlgorithm(A);
      y.nodeSpacing = (p == null ? undefined : p.nodeSpacing) || 50;
      y.rankSpacing = (p == null ? undefined : p.rankSpacing) || 50;
      y.markers = ["aggregation", "extension", "composition", "dependency", "lollipop"];
      y.diagramId = t;
      await mermaidLayoutRegistryRenderer.render(y, m);
      mermaidDiagramUtils.mermaidUtils.insertTitle(m, "classDiagramTitleText", (p == null ? undefined : p.titleTopMargin) ?? 25, i.db.getDiagramTitle());
      mermaidSvgViewportSetup.setupViewPortForSvg(m, 8, "classDiagram", (a = p == null ? undefined : p.useMaxWidth) === null || a === undefined || a);
    }, "draw"),
    getDir: f
  };
  require.d(exports, {
    classDiagramStyles: function () {
      return k;
    },
    classDiagramParser: function () {
      return y;
    },
    classDiagramRenderer: function () {
      return F;
    },
    ClassDB: function () {
      return T;
    }
  });
}