// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ee' to 'classDiagramParser'
// - Renamed export 'P0' to 'parserInstance'
// - Renamed export 'b0' to 'diagramRenderer'
// - Renamed export 'dR' to 'ClassDB'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10244.d40828c2.js
         * chunkId: 10244
         * moduleId: 651870
         */
module.exports = function (module, exports, require) {
  var a;
  var s;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var mermaidIconStylesHelper = require("mermaid-icon-styles-helper") /*id: 988348*/;
  var mermaidDiagramElementGetter = require("mermaid-diagram-element-getter") /*id: 553740*/;
  var svgViewportSetup = require("svg-viewport-setup") /*id: 509839*/;
  var mermaidLayoutRegistry = require("mermaid-layout-registry") /*id: 103329*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var p = function () {
    var t = mermaidConfigUtils.setName(function (t, e, r, a) {
      r = r || {};
      a = t.length;
      for (; a--; r[t[a]] = e);
      return r;
    }, "o");
    var e = [1, 18];
    var r = [1, 19];
    var a = [1, 20];
    var s = [1, 41];
    var n = [1, 42];
    var l = [1, 26];
    var o = [1, 24];
    var u = [1, 25];
    var c = [1, 32];
    var d = [1, 33];
    var p = [1, 34];
    var y = [1, 45];
    var g = [1, 35];
    var m = [1, 36];
    var f = [1, 37];
    var b = [1, 38];
    var k = [1, 27];
    var A = [1, 28];
    var C = [1, 29];
    var E = [1, 30];
    var T = [1, 31];
    var _ = [1, 44];
    var x = [1, 46];
    var F = [1, 43];
    var B = [1, 47];
    var S = [1, 9];
    var D = [1, 8, 9];
    var L = [1, 58];
    var $ = [1, 59];
    var w = [1, 60];
    var M = [1, 61];
    var O = [1, 62];
    var N = [1, 63];
    var v = [1, 64];
    var W = [1, 8, 9, 41];
    var R = [1, 76];
    var I = [1, 8, 9, 12, 13, 22, 39, 41, 44, 66, 67, 68, 69, 70, 71, 72, 77, 79];
    var P = [1, 8, 9, 12, 13, 18, 20, 22, 39, 41, 44, 48, 58, 66, 67, 68, 69, 70, 71, 72, 77, 79, 84, 99, 101, 102];
    var Y = [13, 58, 84, 99, 101, 102];
    var U = [13, 58, 71, 72, 84, 99, 101, 102];
    var X = [13, 58, 66, 67, 68, 69, 70, 84, 99, 101, 102];
    var z = [1, 99];
    var H = [1, 116];
    var G = [1, 108];
    var j = [1, 114];
    var V = [1, 109];
    var Z = [1, 110];
    var Q = [1, 111];
    var q = [1, 112];
    var K = [1, 113];
    var J = [1, 115];
    var tt = [22, 58, 59, 80, 84, 85, 86, 87, 88, 89];
    var te = [1, 8, 9, 39, 41, 44];
    var tr = [1, 8, 9, 22];
    var ta = [1, 144];
    var ts = [1, 8, 9, 59];
    var ti = [1, 8, 9, 22, 58, 59, 80, 84, 85, 86, 87, 88, 89];
    var tn = {
      trace: mermaidConfigUtils.setName(function () {}, "trace"),
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
        ANNOTATION_START: 47,
        ANNOTATION_END: 48,
        MEMBER: 49,
        SEPARATOR: 50,
        relation: 51,
        NOTE_FOR: 52,
        noteText: 53,
        NOTE: 54,
        CLASSDEF: 55,
        classList: 56,
        stylesOpt: 57,
        ALPHA: 58,
        COMMA: 59,
        direction_tb: 60,
        direction_bt: 61,
        direction_rl: 62,
        direction_lr: 63,
        relationType: 64,
        lineType: 65,
        AGGREGATION: 66,
        EXTENSION: 67,
        COMPOSITION: 68,
        DEPENDENCY: 69,
        LOLLIPOP: 70,
        LINE: 71,
        DOTTED_LINE: 72,
        CALLBACK: 73,
        LINK: 74,
        LINK_TARGET: 75,
        CLICK: 76,
        CALLBACK_NAME: 77,
        CALLBACK_ARGS: 78,
        HREF: 79,
        STYLE: 80,
        CSSCLASS: 81,
        style: 82,
        styleComponent: 83,
        NUM: 84,
        COLON: 85,
        UNIT: 86,
        SPACE: 87,
        BRKT: 88,
        PCT: 89,
        commentToken: 90,
        textToken: 91,
        graphCodeTokens: 92,
        textNoTagsToken: 93,
        TAGSTART: 94,
        TAGEND: 95,
        "==": 96,
        "--": 97,
        DEFAULT: 98,
        MINUS: 99,
        keywords: 100,
        UNICODE_TEXT: 101,
        BQUOTE_STR: 102,
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
        47: "ANNOTATION_START",
        48: "ANNOTATION_END",
        49: "MEMBER",
        50: "SEPARATOR",
        52: "NOTE_FOR",
        54: "NOTE",
        55: "CLASSDEF",
        58: "ALPHA",
        59: "COMMA",
        60: "direction_tb",
        61: "direction_bt",
        62: "direction_rl",
        63: "direction_lr",
        66: "AGGREGATION",
        67: "EXTENSION",
        68: "COMPOSITION",
        69: "DEPENDENCY",
        70: "LOLLIPOP",
        71: "LINE",
        72: "DOTTED_LINE",
        73: "CALLBACK",
        74: "LINK",
        75: "LINK_TARGET",
        76: "CLICK",
        77: "CALLBACK_NAME",
        78: "CALLBACK_ARGS",
        79: "HREF",
        80: "STYLE",
        81: "CSSCLASS",
        84: "NUM",
        85: "COLON",
        86: "UNIT",
        87: "SPACE",
        88: "BRKT",
        89: "PCT",
        92: "graphCodeTokens",
        94: "TAGSTART",
        95: "TAGEND",
        96: "==",
        97: "--",
        98: "DEFAULT",
        99: "MINUS",
        100: "keywords",
        101: "UNICODE_TEXT",
        102: "BQUOTE_STR"
      },
      productions_: [0, [3, 1], [3, 1], [4, 1], [6, 4], [5, 1], [5, 2], [5, 3], [11, 3], [15, 1], [15, 1], [15, 3], [15, 2], [19, 1], [19, 3], [19, 1], [19, 2], [19, 2], [19, 2], [10, 1], [10, 2], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [10, 1], [23, 4], [23, 5], [38, 2], [40, 1], [40, 2], [40, 3], [24, 1], [24, 3], [24, 4], [24, 6], [43, 2], [43, 3], [26, 4], [45, 1], [45, 2], [25, 1], [25, 2], [25, 1], [25, 1], [21, 3], [21, 4], [21, 4], [21, 5], [30, 3], [30, 2], [31, 3], [56, 1], [56, 3], [32, 1], [32, 1], [32, 1], [32, 1], [51, 3], [51, 2], [51, 2], [51, 1], [64, 1], [64, 1], [64, 1], [64, 1], [64, 1], [65, 1], [65, 1], [27, 3], [27, 4], [27, 3], [27, 4], [27, 4], [27, 5], [27, 3], [27, 4], [27, 4], [27, 5], [27, 4], [27, 5], [27, 5], [27, 6], [28, 3], [29, 3], [57, 1], [57, 3], [82, 1], [82, 2], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [90, 1], [90, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [93, 1], [93, 1], [93, 1], [93, 1], [16, 1], [16, 1], [16, 1], [16, 1], [17, 1], [53, 1]],
      performAction: mermaidConfigUtils.setName(function (t, e, r, a, s, i, n) {
        var l = i.length - 1;
        switch (s) {
          case 8:
            this.$ = i[l - 1];
            break;
          case 9:
          case 10:
          case 13:
          case 15:
            this.$ = i[l];
            break;
          case 11:
          case 14:
            this.$ = i[l - 2] + "." + i[l];
            break;
          case 12:
          case 16:
          case 96:
            this.$ = i[l - 1] + i[l];
            break;
          case 17:
          case 18:
            this.$ = i[l - 1] + "~" + i[l] + "~";
            break;
          case 19:
            a.addRelation(i[l]);
            break;
          case 20:
            i[l - 1].title = a.cleanupLabel(i[l]);
            a.addRelation(i[l - 1]);
            break;
          case 31:
            this.$ = i[l].trim();
            a.setAccTitle(this.$);
            break;
          case 32:
          case 33:
            this.$ = i[l].trim();
            a.setAccDescription(this.$);
            break;
          case 34:
            a.addClassesToNamespace(i[l - 3], i[l - 1]);
            break;
          case 35:
            a.addClassesToNamespace(i[l - 4], i[l - 1]);
            break;
          case 36:
            this.$ = i[l];
            a.addNamespace(i[l]);
            break;
          case 37:
          case 47:
          case 60:
          case 93:
            this.$ = [i[l]];
            break;
          case 38:
            this.$ = [i[l - 1]];
            break;
          case 39:
            i[l].unshift(i[l - 2]);
            this.$ = i[l];
            break;
          case 41:
            a.setCssClass(i[l - 2], i[l]);
            break;
          case 42:
            a.addMembers(i[l - 3], i[l - 1]);
            break;
          case 43:
            a.setCssClass(i[l - 5], i[l - 3]);
            a.addMembers(i[l - 5], i[l - 1]);
            break;
          case 44:
            this.$ = i[l];
            a.addClass(i[l]);
            break;
          case 45:
            this.$ = i[l - 1];
            a.addClass(i[l - 1]);
            a.setClassLabel(i[l - 1], i[l]);
            break;
          case 46:
            a.addAnnotation(i[l], i[l - 2]);
            break;
          case 48:
            i[l].push(i[l - 1]);
            this.$ = i[l];
            break;
          case 49:
          case 51:
          case 52:
            break;
          case 50:
            a.addMember(i[l - 1], a.cleanupLabel(i[l]));
            break;
          case 53:
            this.$ = {
              id1: i[l - 2],
              id2: i[l],
              relation: i[l - 1],
              relationTitle1: "none",
              relationTitle2: "none"
            };
            break;
          case 54:
            this.$ = {
              id1: i[l - 3],
              id2: i[l],
              relation: i[l - 1],
              relationTitle1: i[l - 2],
              relationTitle2: "none"
            };
            break;
          case 55:
            this.$ = {
              id1: i[l - 3],
              id2: i[l],
              relation: i[l - 2],
              relationTitle1: "none",
              relationTitle2: i[l - 1]
            };
            break;
          case 56:
            this.$ = {
              id1: i[l - 4],
              id2: i[l],
              relation: i[l - 2],
              relationTitle1: i[l - 3],
              relationTitle2: i[l - 1]
            };
            break;
          case 57:
            a.addNote(i[l], i[l - 1]);
            break;
          case 58:
            a.addNote(i[l]);
            break;
          case 59:
            this.$ = i[l - 2];
            a.defineClass(i[l - 1], i[l]);
            break;
          case 61:
            this.$ = i[l - 2].concat([i[l]]);
            break;
          case 62:
            a.setDirection("TB");
            break;
          case 63:
            a.setDirection("BT");
            break;
          case 64:
            a.setDirection("RL");
            break;
          case 65:
            a.setDirection("LR");
            break;
          case 66:
            this.$ = {
              type1: i[l - 2],
              type2: i[l],
              lineType: i[l - 1]
            };
            break;
          case 67:
            this.$ = {
              type1: "none",
              type2: i[l],
              lineType: i[l - 1]
            };
            break;
          case 68:
            this.$ = {
              type1: i[l - 1],
              type2: "none",
              lineType: i[l]
            };
            break;
          case 69:
            this.$ = {
              type1: "none",
              type2: "none",
              lineType: i[l]
            };
            break;
          case 70:
            this.$ = a.relationType.AGGREGATION;
            break;
          case 71:
            this.$ = a.relationType.EXTENSION;
            break;
          case 72:
            this.$ = a.relationType.COMPOSITION;
            break;
          case 73:
            this.$ = a.relationType.DEPENDENCY;
            break;
          case 74:
            this.$ = a.relationType.LOLLIPOP;
            break;
          case 75:
            this.$ = a.lineType.LINE;
            break;
          case 76:
            this.$ = a.lineType.DOTTED_LINE;
            break;
          case 77:
          case 83:
            this.$ = i[l - 2];
            a.setClickEvent(i[l - 1], i[l]);
            break;
          case 78:
          case 84:
            this.$ = i[l - 3];
            a.setClickEvent(i[l - 2], i[l - 1]);
            a.setTooltip(i[l - 2], i[l]);
            break;
          case 79:
            this.$ = i[l - 2];
            a.setLink(i[l - 1], i[l]);
            break;
          case 80:
            this.$ = i[l - 3];
            a.setLink(i[l - 2], i[l - 1], i[l]);
            break;
          case 81:
            this.$ = i[l - 3];
            a.setLink(i[l - 2], i[l - 1]);
            a.setTooltip(i[l - 2], i[l]);
            break;
          case 82:
            this.$ = i[l - 4];
            a.setLink(i[l - 3], i[l - 2], i[l]);
            a.setTooltip(i[l - 3], i[l - 1]);
            break;
          case 85:
            this.$ = i[l - 3];
            a.setClickEvent(i[l - 2], i[l - 1], i[l]);
            break;
          case 86:
            this.$ = i[l - 4];
            a.setClickEvent(i[l - 3], i[l - 2], i[l - 1]);
            a.setTooltip(i[l - 3], i[l]);
            break;
          case 87:
            this.$ = i[l - 3];
            a.setLink(i[l - 2], i[l]);
            break;
          case 88:
            this.$ = i[l - 4];
            a.setLink(i[l - 3], i[l - 1], i[l]);
            break;
          case 89:
            this.$ = i[l - 4];
            a.setLink(i[l - 3], i[l - 1]);
            a.setTooltip(i[l - 3], i[l]);
            break;
          case 90:
            this.$ = i[l - 5];
            a.setLink(i[l - 4], i[l - 2], i[l]);
            a.setTooltip(i[l - 4], i[l - 1]);
            break;
          case 91:
            this.$ = i[l - 2];
            a.setCssStyle(i[l - 1], i[l]);
            break;
          case 92:
            a.setCssClass(i[l - 1], i[l]);
            break;
          case 94:
            i[l - 2].push(i[l]);
            this.$ = i[l - 2];
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
        33: e,
        35: r,
        37: a,
        38: 22,
        42: s,
        43: 23,
        46: n,
        47: l,
        49: o,
        50: u,
        52: c,
        54: d,
        55: p,
        58: y,
        60: g,
        61: m,
        62: f,
        63: b,
        73: k,
        74: A,
        76: C,
        80: E,
        81: T,
        84: _,
        99: x,
        101: F,
        102: B
      }, {
        1: [3]
      }, {
        1: [2, 1]
      }, {
        1: [2, 2]
      }, {
        1: [2, 3]
      }, t(S, [2, 5], {
        8: [1, 48]
      }), {
        8: [1, 49]
      }, t(D, [2, 19], {
        22: [1, 50]
      }), t(D, [2, 21]), t(D, [2, 22]), t(D, [2, 23]), t(D, [2, 24]), t(D, [2, 25]), t(D, [2, 26]), t(D, [2, 27]), t(D, [2, 28]), t(D, [2, 29]), t(D, [2, 30]), {
        34: [1, 51]
      }, {
        36: [1, 52]
      }, t(D, [2, 33]), t(D, [2, 49], {
        51: 53,
        64: 56,
        65: 57,
        13: [1, 54],
        22: [1, 55],
        66: L,
        67: $,
        68: w,
        69: M,
        70: O,
        71: N,
        72: v
      }), {
        39: [1, 65]
      }, t(W, [2, 40], {
        39: [1, 67],
        44: [1, 66]
      }), t(D, [2, 51]), t(D, [2, 52]), {
        16: 68,
        58: y,
        84: _,
        99: x,
        101: F
      }, {
        16: 39,
        17: 40,
        19: 69,
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }, {
        16: 39,
        17: 40,
        19: 70,
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }, {
        16: 39,
        17: 40,
        19: 71,
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }, {
        58: [1, 72]
      }, {
        13: [1, 73]
      }, {
        16: 39,
        17: 40,
        19: 74,
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }, {
        13: R,
        53: 75
      }, {
        56: 77,
        58: [1, 78]
      }, t(D, [2, 62]), t(D, [2, 63]), t(D, [2, 64]), t(D, [2, 65]), t(I, [2, 13], {
        16: 39,
        17: 40,
        19: 80,
        18: [1, 79],
        20: [1, 81],
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }), t(I, [2, 15], {
        20: [1, 82]
      }), {
        15: 83,
        16: 84,
        17: 85,
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }, {
        16: 39,
        17: 40,
        19: 86,
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }, t(P, [2, 119]), t(P, [2, 120]), t(P, [2, 121]), t(P, [2, 122]), t([1, 8, 9, 12, 13, 20, 22, 39, 41, 44, 66, 67, 68, 69, 70, 71, 72, 77, 79], [2, 123]), t(S, [2, 6], {
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
        33: e,
        35: r,
        37: a,
        42: s,
        46: n,
        47: l,
        49: o,
        50: u,
        52: c,
        54: d,
        55: p,
        58: y,
        60: g,
        61: m,
        62: f,
        63: b,
        73: k,
        74: A,
        76: C,
        80: E,
        81: T,
        84: _,
        99: x,
        101: F,
        102: B
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
        33: e,
        35: r,
        37: a,
        38: 22,
        42: s,
        43: 23,
        46: n,
        47: l,
        49: o,
        50: u,
        52: c,
        54: d,
        55: p,
        58: y,
        60: g,
        61: m,
        62: f,
        63: b,
        73: k,
        74: A,
        76: C,
        80: E,
        81: T,
        84: _,
        99: x,
        101: F,
        102: B
      }, t(D, [2, 20]), t(D, [2, 31]), t(D, [2, 32]), {
        13: [1, 90],
        16: 39,
        17: 40,
        19: 89,
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }, {
        51: 91,
        64: 56,
        65: 57,
        66: L,
        67: $,
        68: w,
        69: M,
        70: O,
        71: N,
        72: v
      }, t(D, [2, 50]), {
        65: 92,
        71: N,
        72: v
      }, t(Y, [2, 69], {
        64: 93,
        66: L,
        67: $,
        68: w,
        69: M,
        70: O
      }), t(U, [2, 70]), t(U, [2, 71]), t(U, [2, 72]), t(U, [2, 73]), t(U, [2, 74]), t(X, [2, 75]), t(X, [2, 76]), {
        8: [1, 95],
        24: 96,
        40: 94,
        43: 23,
        46: n
      }, {
        16: 97,
        58: y,
        84: _,
        99: x,
        101: F
      }, {
        45: 98,
        49: z
      }, {
        48: [1, 100]
      }, {
        13: [1, 101]
      }, {
        13: [1, 102]
      }, {
        77: [1, 103],
        79: [1, 104]
      }, {
        22: H,
        57: 105,
        58: G,
        80: j,
        82: 106,
        83: 107,
        84: V,
        85: Z,
        86: Q,
        87: q,
        88: K,
        89: J
      }, {
        58: [1, 117]
      }, {
        13: R,
        53: 118
      }, t(D, [2, 58]), t(D, [2, 124]), {
        22: H,
        57: 119,
        58: G,
        59: [1, 120],
        80: j,
        82: 106,
        83: 107,
        84: V,
        85: Z,
        86: Q,
        87: q,
        88: K,
        89: J
      }, t(tt, [2, 60]), {
        16: 39,
        17: 40,
        19: 121,
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }, t(I, [2, 16]), t(I, [2, 17]), t(I, [2, 18]), {
        39: [2, 36]
      }, {
        15: 123,
        16: 84,
        17: 85,
        18: [1, 122],
        39: [2, 9],
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }, {
        39: [2, 10]
      }, t(te, [2, 44], {
        11: 124,
        12: [1, 125]
      }), t(S, [2, 7]), {
        9: [1, 126]
      }, t(tr, [2, 53]), {
        16: 39,
        17: 40,
        19: 127,
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }, {
        13: [1, 129],
        16: 39,
        17: 40,
        19: 128,
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }, t(Y, [2, 68], {
        64: 130,
        66: L,
        67: $,
        68: w,
        69: M,
        70: O
      }), t(Y, [2, 67]), {
        41: [1, 131]
      }, {
        24: 96,
        40: 132,
        43: 23,
        46: n
      }, {
        8: [1, 133],
        41: [2, 37]
      }, t(W, [2, 41], {
        39: [1, 134]
      }), {
        41: [1, 135]
      }, {
        41: [2, 47],
        45: 136,
        49: z
      }, {
        16: 39,
        17: 40,
        19: 137,
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }, t(D, [2, 77], {
        13: [1, 138]
      }), t(D, [2, 79], {
        13: [1, 140],
        75: [1, 139]
      }), t(D, [2, 83], {
        13: [1, 141],
        78: [1, 142]
      }), {
        13: [1, 143]
      }, t(D, [2, 91], {
        59: ta
      }), t(ts, [2, 93], {
        83: 145,
        22: H,
        58: G,
        80: j,
        84: V,
        85: Z,
        86: Q,
        87: q,
        88: K,
        89: J
      }), t(ti, [2, 95]), t(ti, [2, 97]), t(ti, [2, 98]), t(ti, [2, 99]), t(ti, [2, 100]), t(ti, [2, 101]), t(ti, [2, 102]), t(ti, [2, 103]), t(ti, [2, 104]), t(ti, [2, 105]), t(D, [2, 92]), t(D, [2, 57]), t(D, [2, 59], {
        59: ta
      }), {
        58: [1, 146]
      }, t(I, [2, 14]), {
        15: 147,
        16: 84,
        17: 85,
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }, {
        39: [2, 12]
      }, t(te, [2, 45]), {
        13: [1, 148]
      }, {
        1: [2, 4]
      }, t(tr, [2, 55]), t(tr, [2, 54]), {
        16: 39,
        17: 40,
        19: 149,
        58: y,
        84: _,
        99: x,
        101: F,
        102: B
      }, t(Y, [2, 66]), t(D, [2, 34]), {
        41: [1, 150]
      }, {
        24: 96,
        40: 151,
        41: [2, 38],
        43: 23,
        46: n
      }, {
        45: 152,
        49: z
      }, t(W, [2, 42]), {
        41: [2, 48]
      }, t(D, [2, 46]), t(D, [2, 78]), t(D, [2, 80]), t(D, [2, 81], {
        75: [1, 153]
      }), t(D, [2, 84]), t(D, [2, 85], {
        13: [1, 154]
      }), t(D, [2, 87], {
        13: [1, 156],
        75: [1, 155]
      }), {
        22: H,
        58: G,
        80: j,
        82: 157,
        83: 107,
        84: V,
        85: Z,
        86: Q,
        87: q,
        88: K,
        89: J
      }, t(ti, [2, 96]), t(tt, [2, 61]), {
        39: [2, 11]
      }, {
        14: [1, 158]
      }, t(tr, [2, 56]), t(D, [2, 35]), {
        41: [2, 39]
      }, {
        41: [1, 159]
      }, t(D, [2, 82]), t(D, [2, 86]), t(D, [2, 88]), t(D, [2, 89], {
        75: [1, 160]
      }), t(ts, [2, 94], {
        83: 145,
        22: H,
        58: G,
        80: j,
        84: V,
        85: Z,
        86: Q,
        87: q,
        88: K,
        89: J
      }), t(te, [2, 8]), t(W, [2, 43]), t(D, [2, 90])],
      defaultActions: {
        2: [2, 1],
        3: [2, 2],
        4: [2, 3],
        83: [2, 36],
        85: [2, 10],
        123: [2, 12],
        126: [2, 4],
        136: [2, 48],
        147: [2, 11],
        151: [2, 39]
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
        var s = [null];
        var i = [];
        var n = this.table;
        var l = "";
        var o = 0;
        var u = 0;
        var c = 0;
        var d = i.slice.call(arguments, 1);
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
        var m = p.yylloc;
        i.push(m);
        var f = p.options && p.options.ranges;
        function b() {
          var t;
          if (typeof (t = a.pop() || p.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (a = t).pop();
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
          s.length = s.length - t;
          i.length = i.length - t;
        }, "popStack");
        mermaidConfigUtils.setName(b, "lex");
        var k;
        var A;
        var C;
        var E;
        var T;
        var _;
        var x;
        var F;
        var B;
        var S = {};
        while (true) {
          C = r[r.length - 1];
          if (this.defaultActions[C]) {
            E = this.defaultActions[C];
          } else {
            if (k == null) {
              k = b();
            }
            E = n[C] && n[C][k];
          }
          if (E === undefined || !E.length || !E[0]) {
            var D = "";
            B = [];
            for (_ in n[C]) {
              if (this.terminals_[_] && _ > 2) {
                B.push("'" + this.terminals_[_] + "'");
              }
            }
            D = p.showPosition ? "Parse error on line " + (o + 1) + ":\n" + p.showPosition() + "\nExpecting " + B.join(", ") + ", got '" + (this.terminals_[k] || k) + "'" : "Parse error on line " + (o + 1) + ": Unexpected " + (k == 1 ? "end of input" : "'" + (this.terminals_[k] || k) + "'");
            this.parseError(D, {
              text: p.match,
              token: this.terminals_[k] || k,
              line: p.yylineno,
              loc: m,
              expected: B
            });
          }
          if (E[0] instanceof Array && E.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + C + ", token: " + k);
          }
          switch (E[0]) {
            case 1:
              r.push(k);
              s.push(p.yytext);
              i.push(p.yylloc);
              r.push(E[1]);
              k = null;
              if (A) {
                k = A;
                A = null;
              } else {
                u = p.yyleng;
                l = p.yytext;
                o = p.yylineno;
                m = p.yylloc;
                if (c > 0) {
                  c--;
                }
              }
              break;
            case 2:
              x = this.productions_[E[1]][1];
              S.$ = s[s.length - x];
              S._$ = {
                first_line: i[i.length - (x || 1)].first_line,
                last_line: i[i.length - 1].last_line,
                first_column: i[i.length - (x || 1)].first_column,
                last_column: i[i.length - 1].last_column
              };
              if (f) {
                S._$.range = [i[i.length - (x || 1)].range[0], i[i.length - 1].range[1]];
              }
              if ((T = this.performAction.apply(S, [l, u, o, y.yy, E[1], s, i].concat(d))) !== undefined) {
                return T;
              }
              if (x) {
                r = r.slice(0, x * -1 * 2);
                s = s.slice(0, x * -1);
                i = i.slice(0, x * -1);
              }
              r.push(this.productions_[E[1]][0]);
              s.push(S.$);
              i.push(S._$);
              F = n[r[r.length - 2]][r[r.length - 1]];
              r.push(F);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var tl = {
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
        var s = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: r ? (r.length === a.length ? this.yylloc.first_column : 0) + a[a.length - r.length].length - r[0].length : this.yylloc.first_column - e
        };
        if (this.options.ranges) {
          this.yylloc.range = [s[0], s[0] + this.yyleng - e];
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
        var s;
        if (this.options.backtrack_lexer) {
          s = {
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
            s.yylloc.range = this.yylloc.range.slice(0);
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
          for (var i in s) {
            this[i] = s[i];
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
        var s = this._currentRules();
        var i = 0;
        for (; i < s.length; i++) {
          if ((r = this._input.match(this.rules[s[i]])) && (!e || r[0].length > e[0].length)) {
            e = r;
            a = i;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(r, s[i])) !== false) {
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
          return (t = this.test_match(e, s[a])) !== false && t;
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
      performAction: mermaidConfigUtils.setName(function (t, e, r, a) {
        switch (r) {
          case 0:
            return 60;
          case 1:
            return 61;
          case 2:
            return 62;
          case 3:
            return 63;
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
            return 77;
          case 23:
            return 78;
          case 25:
            return "STR";
          case 26:
            this.begin("string");
            break;
          case 27:
            return 80;
          case 28:
            return 55;
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
            return 81;
          case 50:
            return 73;
          case 51:
            return 74;
          case 52:
            return 76;
          case 53:
            return 52;
          case 54:
            return 54;
          case 55:
            return 47;
          case 56:
            return 48;
          case 57:
            return 79;
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
            return 75;
          case 68:
          case 69:
            return 67;
          case 70:
          case 71:
            return 69;
          case 72:
            return 68;
          case 73:
            return 66;
          case 74:
            return 70;
          case 75:
            return 71;
          case 76:
            return 72;
          case 77:
            return 22;
          case 78:
            return 44;
          case 79:
            return 99;
          case 80:
            return 18;
          case 81:
            return "PLUS";
          case 82:
            return 85;
          case 83:
            return 59;
          case 84:
          case 85:
            return 88;
          case 86:
            return 89;
          case 87:
          case 88:
            return "EQUALS";
          case 89:
            return 58;
          case 90:
            return 12;
          case 91:
            return 14;
          case 92:
            return "PUNCTUATION";
          case 93:
            return 84;
          case 94:
            return 101;
          case 95:
          case 96:
            return 87;
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFRjF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*t5-%R*aWJ-TjB$MnRL$TFZd05IbFdhelIxWWxkd2$sbFlTbT$r$0%wOQ"
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
    function to() {
      this.yy = {};
    }
    tn.lexer = tl;
    mermaidConfigUtils.setName(to, "Parser");
    to.prototype = tn;
    tn.Parser = to;
    return new to();
  }();
  p.parser = p;
  var y = p;
  var g = ["#", "+", "~", "-", ""];
  a = class {
    getDisplayDetails() {
      let t = this.visibility + mermaidConfigUtils.parseGenericTypes(this.id);
      if (this.memberType === "method") {
        t += `(${mermaidConfigUtils.parseGenericTypes(this.parameters.trim())})`;
        if (this.returnType) {
          t += " : " + mermaidConfigUtils.parseGenericTypes(this.returnType);
        }
      }
      return {
        displayText: t = t.trim(),
        cssStyle: this.parseClassifier()
      };
    }
    parseMember(t) {
      let e = "";
      if (this.memberType === "method") {
        let r = /([#+~-])?(.+)\((.*)\)([\s$*])?(.*)([$*])?/.exec(t);
        if (r) {
          let t = r[1] ? r[1].trim() : "";
          if (g.includes(t)) {
            this.visibility = t;
          }
          this.id = r[2];
          this.parameters = r[3] ? r[3].trim() : "";
          e = r[4] ? r[4].trim() : "";
          this.returnType = r[5] ? r[5].trim() : "";
          if (e === "") {
            let t = this.returnType.substring(this.returnType.length - 1);
            if (/[$*]/.exec(t)) {
              e = t;
              this.returnType = this.returnType.substring(0, this.returnType.length - 1);
            }
          }
        }
      } else {
        let r = t.length;
        let a = t.substring(0, 1);
        let s = t.substring(r - 1);
        if (g.includes(a)) {
          this.visibility = a;
        }
        if (/[$*]/.exec(s)) {
          e = s;
        }
        this.id = t.substring(+(this.visibility !== ""), e === "" ? r : r - 1);
      }
      this.classifier = e;
      this.id = this.id.startsWith(" ") ? " " + this.id.trim() : this.id.trim();
      let r = `${this.visibility ? "\\" + this.visibility : ""}${mermaidConfigUtils.parseGenericTypes(this.id)}${this.memberType === "method" ? `(${mermaidConfigUtils.parseGenericTypes(this.parameters)})${this.returnType ? " : " + mermaidConfigUtils.parseGenericTypes(this.returnType) : ""}` : ""}`;
      this.text = r.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
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
    constructor(t, e) {
      this.memberType = e;
      this.visibility = "";
      this.classifier = "";
      this.text = "";
      let r = mermaidConfigUtils.sanitizeText(t, mermaidConfigUtils.getConfigAlias());
      this.parseMember(r);
    }
  };
  mermaidConfigUtils.setName(a, "ClassMember");
  var m = a;
  var f = "classId-";
  var b = 0;
  var k = mermaidConfigUtils.setName(t => mermaidConfigUtils.textUtils.sanitizeText(t, mermaidConfigUtils.getConfigAlias()), "sanitizeText");
  s = class {
    splitClassNameAndType(t) {
      let e = mermaidConfigUtils.textUtils.sanitizeText(t, mermaidConfigUtils.getConfigAlias());
      let r = "";
      let a = e;
      if (e.indexOf("~") > 0) {
        let t = e.split("~");
        a = k(t[0]);
        r = k(t[1]);
      }
      return {
        className: a,
        type: r
      };
    }
    setClassLabel(t, e) {
      let r = mermaidConfigUtils.textUtils.sanitizeText(t, mermaidConfigUtils.getConfigAlias());
      e &&= k(e);
      let {
        className: a
      } = this.splitClassNameAndType(r);
      this.classes.get(a).label = e;
      this.classes.get(a).text = `${e}${this.classes.get(a).type ? `<${this.classes.get(a).type}>` : ""}`;
    }
    addClass(t) {
      let e = mermaidConfigUtils.textUtils.sanitizeText(t, mermaidConfigUtils.getConfigAlias());
      let {
        className: r,
        type: a
      } = this.splitClassNameAndType(e);
      if (this.classes.has(r)) {
        return;
      }
      let s = mermaidConfigUtils.textUtils.sanitizeText(r, mermaidConfigUtils.getConfigAlias());
      this.classes.set(s, {
        id: s,
        type: a,
        label: s,
        text: `${s}${a ? `&lt;${a}&gt;` : ""}`,
        shape: "classBox",
        cssClasses: "default",
        methods: [],
        members: [],
        annotations: [],
        styles: [],
        domId: f + s + "-" + b
      });
      b++;
    }
    addInterface(t, e) {
      let r = {
        id: `interface${this.interfaces.length}`,
        label: t,
        classId: e
      };
      this.interfaces.push(r);
    }
    lookUpDomId(t) {
      let e = mermaidConfigUtils.textUtils.sanitizeText(t, mermaidConfigUtils.getConfigAlias());
      if (this.classes.has(e)) {
        return this.classes.get(e).domId;
      }
      throw Error("Class not found: " + e);
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
      mermaidConfigUtils.clearAccData();
    }
    getClass(t) {
      return this.classes.get(t);
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
    addRelation(t) {
      mermaidConfigUtils.logger.debug("Adding relation: " + JSON.stringify(t));
      let e = [this.relationType.LOLLIPOP, this.relationType.AGGREGATION, this.relationType.COMPOSITION, this.relationType.DEPENDENCY, this.relationType.EXTENSION];
      if (t.relation.type1 !== this.relationType.LOLLIPOP || e.includes(t.relation.type2)) {
        if (t.relation.type2 !== this.relationType.LOLLIPOP || e.includes(t.relation.type1)) {
          this.addClass(t.id1);
          this.addClass(t.id2);
        } else {
          this.addClass(t.id1);
          this.addInterface(t.id2, t.id1);
          t.id2 = `interface${this.interfaces.length - 1}`;
        }
      } else {
        this.addClass(t.id2);
        this.addInterface(t.id1, t.id2);
        t.id1 = `interface${this.interfaces.length - 1}`;
      }
      t.id1 = this.splitClassNameAndType(t.id1).className;
      t.id2 = this.splitClassNameAndType(t.id2).className;
      t.relationTitle1 = mermaidConfigUtils.textUtils.sanitizeText(t.relationTitle1.trim(), mermaidConfigUtils.getConfigAlias());
      t.relationTitle2 = mermaidConfigUtils.textUtils.sanitizeText(t.relationTitle2.trim(), mermaidConfigUtils.getConfigAlias());
      this.relations.push(t);
    }
    addAnnotation(t, e) {
      let r = this.splitClassNameAndType(t).className;
      this.classes.get(r).annotations.push(e);
    }
    addMember(t, e) {
      this.addClass(t);
      let r = this.splitClassNameAndType(t).className;
      let a = this.classes.get(r);
      if (typeof e == "string") {
        let t = e.trim();
        if (t.startsWith("<<") && t.endsWith(">>")) {
          a.annotations.push(k(t.substring(2, t.length - 2)));
        } else if (t.indexOf(")") > 0) {
          a.methods.push(new m(t, "method"));
        } else if (t) {
          a.members.push(new m(t, "attribute"));
        }
      }
    }
    addMembers(t, e) {
      if (Array.isArray(e)) {
        e.reverse();
        e.forEach(e => this.addMember(t, e));
      }
    }
    addNote(t, e) {
      let r = {
        id: `note${this.notes.length}`,
        class: e,
        text: t
      };
      this.notes.push(r);
    }
    cleanupLabel(t) {
      if (t.startsWith(":")) {
        t = t.substring(1);
      }
      return k(t.trim());
    }
    setCssClass(t, e) {
      t.split(",").forEach(t => {
        let r = t;
        if (/\d/.exec(t[0])) {
          r = f + r;
        }
        let a = this.classes.get(r);
        if (a) {
          a.cssClasses += " " + e;
        }
      });
    }
    defineClass(t, e) {
      for (let r of t) {
        let t = this.styleClasses.get(r);
        if (t === undefined) {
          t = {
            id: r,
            styles: [],
            textStyles: []
          };
          this.styleClasses.set(r, t);
        }
        if (e) {
          e.forEach(e => {
            if (/color/.exec(e)) {
              let r = e.replace("fill", "bgFill");
              t.textStyles.push(r);
            }
            t.styles.push(e);
          });
        }
        this.classes.forEach(t => {
          if (t.cssClasses.includes(r)) {
            t.styles.push(...e.flatMap(t => t.split(",")));
          }
        });
      }
    }
    setTooltip(t, e) {
      t.split(",").forEach(t => {
        if (e !== undefined) {
          this.classes.get(t).tooltip = k(e);
        }
      });
    }
    getTooltip(t, e) {
      if (e && this.namespaces.has(e)) {
        return this.namespaces.get(e).classes.get(t).tooltip;
      } else {
        return this.classes.get(t).tooltip;
      }
    }
    setLink(t, e, r) {
      let a = mermaidConfigUtils.getConfigAlias();
      t.split(",").forEach(t => {
        let s = t;
        if (/\d/.exec(t[0])) {
          s = f + s;
        }
        let i = this.classes.get(s);
        if (i) {
          i.link = mermaidTextLayoutUtils.textLayoutUtils.formatUrl(e, a);
          if (a.securityLevel === "sandbox") {
            i.linkTarget = "_top";
          } else if (typeof r == "string") {
            i.linkTarget = k(r);
          } else {
            i.linkTarget = "_blank";
          }
        }
      });
      this.setCssClass(t, "clickable");
    }
    setClickEvent(t, e, r) {
      t.split(",").forEach(t => {
        this.setClickFunc(t, e, r);
        this.classes.get(t).haveCallback = true;
      });
      this.setCssClass(t, "clickable");
    }
    setClickFunc(t, e, r) {
      let a = mermaidConfigUtils.textUtils.sanitizeText(t, mermaidConfigUtils.getConfigAlias());
      if (mermaidConfigUtils.getConfigAlias().securityLevel === "loose" && e !== undefined && this.classes.has(a)) {
        let t = this.lookUpDomId(a);
        let s = [];
        if (typeof r == "string") {
          s = r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
          for (let t = 0; t < s.length; t++) {
            let e = s[t].trim();
            if (e.startsWith("\"") && e.endsWith("\"")) {
              e = e.substr(1, e.length - 2);
            }
            s[t] = e;
          }
        }
        if (s.length === 0) {
          s.push(t);
        }
        this.functions.push(() => {
          let r = document.querySelector(`[id="${t}"]`);
          if (r !== null) {
            r.addEventListener("click", () => {
              mermaidTextLayoutUtils.textLayoutUtils.runFunc(e, ...s);
            }, false);
          }
        });
      }
    }
    bindFunctions(t) {
      this.functions.forEach(e => {
        e(t);
      });
    }
    getDirection() {
      return this.direction;
    }
    setDirection(t) {
      this.direction = t;
    }
    addNamespace(t) {
      if (!this.namespaces.has(t)) {
        this.namespaces.set(t, {
          id: t,
          classes: new Map(),
          children: {},
          domId: f + t + "-" + this.namespaceCounter
        });
        this.namespaceCounter++;
      }
    }
    getNamespace(t) {
      return this.namespaces.get(t);
    }
    getNamespaces() {
      return this.namespaces;
    }
    addClassesToNamespace(t, e) {
      if (this.namespaces.has(t)) {
        for (let r of e) {
          let {
            className: e
          } = this.splitClassNameAndType(r);
          this.classes.get(e).parent = t;
          this.namespaces.get(t).classes.set(e, this.classes.get(e));
        }
      }
    }
    setCssStyle(t, e) {
      let r = this.classes.get(t);
      if (e && r) {
        for (let t of e) {
          if (t.includes(",")) {
            r.styles.push(...t.split(","));
          } else {
            r.styles.push(t);
          }
        }
      }
    }
    getArrowMarker(t) {
      let e;
      switch (t) {
        case 0:
          e = "aggregation";
          break;
        case 1:
          e = "extension";
          break;
        case 2:
          e = "composition";
          break;
        case 3:
          e = "dependency";
          break;
        case 4:
          e = "lollipop";
          break;
        default:
          e = "none";
      }
      return e;
    }
    getData() {
      let s = [];
      let i = [];
      let n = mermaidConfigUtils.getConfigAlias();
      for (let e of this.namespaces.keys()) {
        let r = this.namespaces.get(e);
        if (r) {
          let e = {
            id: r.id,
            label: r.id,
            isGroup: true,
            padding: n.class.padding ?? 16,
            shape: "rect",
            cssStyles: ["fill: none", "stroke: black"],
            look: n.look
          };
          s.push(e);
        }
      }
      for (let t of this.classes.keys()) {
        let e = this.classes.get(t);
        if (e) {
          e.parentId = e.parent;
          e.look = n.look;
          s.push(e);
        }
      }
      let l = 0;
      for (let t of this.notes) {
        l++;
        let o = {
          id: t.id,
          label: t.text,
          isGroup: false,
          shape: "note",
          padding: n.class.padding ?? 6,
          cssStyles: ["text-align: left", "white-space: nowrap", `fill: ${n.themeVariables.noteBkgColor}`, `stroke: ${n.themeVariables.noteBorderColor}`],
          look: n.look
        };
        s.push(o);
        let u = this.classes.get(t.class)?.id ?? "";
        if (u) {
          let e = {
            id: `edgeNote${l}`,
            start: t.id,
            end: u,
            type: "normal",
            thickness: "normal",
            classes: "relation",
            arrowTypeStart: "none",
            arrowTypeEnd: "none",
            arrowheadStyle: "",
            labelStyle: [""],
            style: ["fill: none"],
            pattern: "dotted",
            look: n.look
          };
          i.push(e);
        }
      }
      for (let t of this.interfaces) {
        let e = {
          id: t.id,
          label: t.label,
          isGroup: false,
          shape: "rect",
          cssStyles: ["opacity: 0;"],
          look: n.look
        };
        s.push(e);
      }
      l = 0;
      for (let t of this.relations) {
        l++;
        let e = {
          id: mermaidTextLayoutUtils.getEdgeId(t.id1, t.id2, {
            prefix: "id",
            counter: l
          }),
          start: t.id1,
          end: t.id2,
          type: "normal",
          label: t.title,
          labelpos: "c",
          thickness: "normal",
          classes: "relation",
          arrowTypeStart: this.getArrowMarker(t.relation.type1),
          arrowTypeEnd: this.getArrowMarker(t.relation.type2),
          startLabelRight: t.relationTitle1 === "none" ? "" : t.relationTitle1,
          endLabelLeft: t.relationTitle2 === "none" ? "" : t.relationTitle2,
          arrowheadStyle: "",
          labelStyle: ["display: inline-block"],
          style: t.style || "",
          pattern: t.relation.lineType == 1 ? "dashed" : "solid",
          look: n.look
        };
        i.push(e);
      }
      return {
        nodes: s,
        edges: i,
        other: {},
        config: n,
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
      this.setupToolTips = mermaidConfigUtils.setName(t => {
        let e = axisAndZoomUtilities.select(".mermaidTooltip");
        if ((e._groups || e)[0][0] === null) {
          e = axisAndZoomUtilities.select("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0);
        }
        axisAndZoomUtilities.select(t).select("svg").selectAll("g.node").on("mouseover", t => {
          let r = axisAndZoomUtilities.select(t.currentTarget);
          if (r.attr("title") === null) {
            return;
          }
          let a = this.getBoundingClientRect();
          e.transition().duration(200).style("opacity", ".9");
          e.text(r.attr("title")).style("left", window.scrollX + a.left + (a.right - a.left) / 2 + "px").style("top", window.scrollY + a.top - 14 + document.body.scrollTop + "px");
          e.html(e.html().replace(/&lt;br\/&gt;/g, "<br/>"));
          r.classed("hover", true);
        }).on("mouseout", t => {
          e.transition().duration(500).style("opacity", 0);
          axisAndZoomUtilities.select(t.currentTarget).classed("hover", false);
        });
      }, "setupToolTips");
      this.direction = "TB";
      this.setAccTitle = mermaidConfigUtils.setAccTitle;
      this.getAccTitle = mermaidConfigUtils.getAccTitle;
      this.setAccDescription = mermaidConfigUtils.setAccDescription;
      this.getAccDescription = mermaidConfigUtils.getAccDescription;
      this.setDiagramTitle = mermaidConfigUtils.setDiagramTitle;
      this.getDiagramTitle = mermaidConfigUtils.getDiagramTitle;
      this.getConfig = mermaidConfigUtils.setName(() => mermaidConfigUtils.getConfigAlias().class, "getConfig");
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
  mermaidConfigUtils.setName(s, "ClassDB");
  var A = s;
  var C = mermaidConfigUtils.setName(t => `g.classGroup text {
  fill: ${t.nodeBorder || t.classText};
  stroke: none;
  font-family: ${t.fontFamily};
  font-size: 10px;

  .title {
    font-weight: bolder;
  }

}

.nodeLabel, .edgeLabel {
  color: ${t.classText};
}
.edgeLabel .label rect {
  fill: ${t.mainBkg};
}
.label text {
  fill: ${t.classText};
}

.labelBkg {
  background: ${t.mainBkg};
}
.edgeLabel .label span {
  background: ${t.mainBkg};
}

.classTitle {
  font-weight: bolder;
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


.divider {
  stroke: ${t.nodeBorder};
  stroke-width: 1;
}

g.clickable {
  cursor: pointer;
}

g.classGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.classGroup line {
  stroke: ${t.nodeBorder};
  stroke-width: 1;
}

.classLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.classLabel .label {
  fill: ${t.nodeBorder};
  font-size: 10px;
}

.relation {
  stroke: ${t.lineColor};
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
  fill: ${t.lineColor} !important;
  stroke: ${t.lineColor} !important;
  stroke-width: 1;
}

#compositionEnd, .composition {
  fill: ${t.lineColor} !important;
  stroke: ${t.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${t.lineColor} !important;
  stroke: ${t.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${t.lineColor} !important;
  stroke: ${t.lineColor} !important;
  stroke-width: 1;
}

#extensionStart, .extension {
  fill: transparent !important;
  stroke: ${t.lineColor} !important;
  stroke-width: 1;
}

#extensionEnd, .extension {
  fill: transparent !important;
  stroke: ${t.lineColor} !important;
  stroke-width: 1;
}

#aggregationStart, .aggregation {
  fill: transparent !important;
  stroke: ${t.lineColor} !important;
  stroke-width: 1;
}

#aggregationEnd, .aggregation {
  fill: transparent !important;
  stroke: ${t.lineColor} !important;
  stroke-width: 1;
}

#lollipopStart, .lollipop {
  fill: ${t.mainBkg} !important;
  stroke: ${t.lineColor} !important;
  stroke-width: 1;
}

#lollipopEnd, .lollipop {
  fill: ${t.mainBkg} !important;
  stroke: ${t.lineColor} !important;
  stroke-width: 1;
}

.edgeTerminals {
  font-size: 11px;
  line-height: initial;
}

.classTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
  ${mermaidIconStylesHelper.getIconStyles()}
`, "getStyles");
  var E = mermaidConfigUtils.setName(function (t, e = "TB") {
    if (!t.doc) {
      return e;
    }
    let r = e;
    for (let e of t.doc) {
      if (e.stmt === "dir") {
        r = e.value;
      }
    }
    return r;
  }, "getDir");
  var T = {
    getClasses: mermaidConfigUtils.setName(function (t, e) {
      return e.db.getClasses();
    }, "getClasses"),
    draw: mermaidConfigUtils.setName(async function (t, e, r, a) {
      var i;
      mermaidConfigUtils.logger.info("REF0:");
      mermaidConfigUtils.logger.info("Drawing class diagram (v3)", e);
      let {
        securityLevel: n,
        state: d,
        layout: p
      } = mermaidConfigUtils.getConfigAlias();
      let y = a.db.getData();
      let g = mermaidDiagramElementGetter.getDiagramElement(e, n);
      y.type = a.type;
      y.layoutAlgorithm = mermaidLayoutRegistry.getRegisteredLayoutAlgorithm(p);
      y.nodeSpacing = (d == null ? undefined : d.nodeSpacing) || 50;
      y.rankSpacing = (d == null ? undefined : d.rankSpacing) || 50;
      y.markers = ["aggregation", "extension", "composition", "dependency", "lollipop"];
      y.diagramId = e;
      await mermaidLayoutRegistry.render(y, g);
      mermaidTextLayoutUtils.textLayoutUtils.insertTitle(g, "classDiagramTitleText", (d == null ? undefined : d.titleTopMargin) ?? 25, a.db.getDiagramTitle());
      svgViewportSetup.setupSvgViewport(g, 8, "classDiagram", (i = d == null ? undefined : d.useMaxWidth) === null || i === undefined || i);
    }, "draw"),
    getDir: E
  };
  require.d(exports, {
    classDiagramParser: function () {
      return C;
    },
    parserInstance: function () {
      return y;
    },
    diagramRenderer: function () {
      return T;
    },
    ClassDB: function () {
      return A;
    }
  });
}