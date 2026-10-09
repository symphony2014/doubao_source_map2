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
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'ZH' to 'clearAccData' (module 101498)
// - Updated imported property 'nV' to 'getConfigAlias' (module 101498)
// - Updated imported property 'GN' to 'setAccTitle' (module 101498)
// - Updated imported property 'eu' to 'getAccTitle' (module 101498)
// - Updated imported property 'U$' to 'setAccDescription' (module 101498)
// - Updated imported property 'Mx' to 'getAccDescription' (module 101498)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 101498)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 101498)
// - Updated imported property 'r2' to 'copyProperties' (module 101498)
// - Updated imported property 'q' to 'getDiagramElement' (module 553740)
// - Updated imported property '_b' to 'getRegisteredLayoutAlgorithm' (module 103329)
// - Updated imported property 'sY' to 'render' (module 103329)
// - Updated imported property 'w8' to 'textLayoutUtils' (module 997032)
// - Updated imported property 'j' to 'setupSvgViewport' (module 509839)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82305.fe77749e.js
         * chunkId: 82305
         * moduleId: 369401
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
  var c = function () {
    var t = mermaidConfigUtils.setName(function (t, e, r, a) {
      r = r || {};
      a = t.length;
      for (; a--; r[t[a]] = e);
      return r;
    }, "o");
    var e = [1, 3];
    var r = [1, 4];
    var a = [1, 5];
    var i = [1, 6];
    var s = [5, 6, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 77, 89, 90];
    var n = [1, 22];
    var l = [2, 7];
    var c = [1, 26];
    var h = [1, 27];
    var d = [1, 28];
    var u = [1, 29];
    var p = [1, 33];
    var y = [1, 34];
    var m = [1, 35];
    var f = [1, 36];
    var g = [1, 37];
    var k = [1, 38];
    var b = [1, 24];
    var E = [1, 31];
    var _ = [1, 32];
    var R = [1, 30];
    var S = [1, 39];
    var x = [1, 40];
    var T = [5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 77, 89, 90];
    var M = [1, 61];
    var w = [89, 90];
    var I = [5, 8, 9, 11, 13, 21, 22, 23, 24, 27, 29, 41, 42, 43, 44, 45, 46, 54, 61, 63, 72, 74, 75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
    var L = [27, 29];
    var N = [1, 70];
    var v = [1, 71];
    var C = [1, 72];
    var q = [1, 73];
    var A = [1, 74];
    var O = [1, 75];
    var W = [1, 76];
    var $ = [1, 83];
    var D = [1, 80];
    var P = [1, 84];
    var Y = [1, 85];
    var F = [1, 86];
    var U = [1, 87];
    var B = [1, 88];
    var H = [1, 89];
    var V = [1, 90];
    var X = [1, 91];
    var Q = [1, 92];
    var z = [5, 8, 9, 11, 13, 21, 22, 23, 24, 27, 41, 42, 43, 44, 45, 46, 54, 72, 74, 75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
    var j = [63, 64];
    var K = [1, 101];
    var Z = [5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 76, 77, 89, 90];
    var G = [5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
    var J = [1, 110];
    var tt = [1, 106];
    var te = [1, 107];
    var tr = [1, 108];
    var ta = [1, 109];
    var ti = [1, 111];
    var ts = [1, 116];
    var tn = [1, 117];
    var tl = [1, 114];
    var to = [1, 115];
    var tc = {
      trace: mermaidConfigUtils.setName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        directive: 4,
        NEWLINE: 5,
        RD: 6,
        diagram: 7,
        EOF: 8,
        acc_title: 9,
        acc_title_value: 10,
        acc_descr: 11,
        acc_descr_value: 12,
        acc_descr_multiline_value: 13,
        requirementDef: 14,
        elementDef: 15,
        relationshipDef: 16,
        direction: 17,
        styleStatement: 18,
        classDefStatement: 19,
        classStatement: 20,
        direction_tb: 21,
        direction_bt: 22,
        direction_rl: 23,
        direction_lr: 24,
        requirementType: 25,
        requirementName: 26,
        STRUCT_START: 27,
        requirementBody: 28,
        STYLE_SEPARATOR: 29,
        idList: 30,
        ID: 31,
        COLONSEP: 32,
        id: 33,
        TEXT: 34,
        text: 35,
        RISK: 36,
        riskLevel: 37,
        VERIFYMTHD: 38,
        verifyType: 39,
        STRUCT_STOP: 40,
        REQUIREMENT: 41,
        FUNCTIONAL_REQUIREMENT: 42,
        INTERFACE_REQUIREMENT: 43,
        PERFORMANCE_REQUIREMENT: 44,
        PHYSICAL_REQUIREMENT: 45,
        DESIGN_CONSTRAINT: 46,
        LOW_RISK: 47,
        MED_RISK: 48,
        HIGH_RISK: 49,
        VERIFY_ANALYSIS: 50,
        VERIFY_DEMONSTRATION: 51,
        VERIFY_INSPECTION: 52,
        VERIFY_TEST: 53,
        ELEMENT: 54,
        elementName: 55,
        elementBody: 56,
        TYPE: 57,
        type: 58,
        DOCREF: 59,
        ref: 60,
        END_ARROW_L: 61,
        relationship: 62,
        LINE: 63,
        END_ARROW_R: 64,
        CONTAINS: 65,
        COPIES: 66,
        DERIVES: 67,
        SATISFIES: 68,
        VERIFIES: 69,
        REFINES: 70,
        TRACES: 71,
        CLASSDEF: 72,
        stylesOpt: 73,
        CLASS: 74,
        ALPHA: 75,
        COMMA: 76,
        STYLE: 77,
        style: 78,
        styleComponent: 79,
        NUM: 80,
        COLON: 81,
        UNIT: 82,
        SPACE: 83,
        BRKT: 84,
        PCT: 85,
        MINUS: 86,
        LABEL: 87,
        SEMICOLON: 88,
        unqString: 89,
        qString: 90,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        5: "NEWLINE",
        6: "RD",
        8: "EOF",
        9: "acc_title",
        10: "acc_title_value",
        11: "acc_descr",
        12: "acc_descr_value",
        13: "acc_descr_multiline_value",
        21: "direction_tb",
        22: "direction_bt",
        23: "direction_rl",
        24: "direction_lr",
        27: "STRUCT_START",
        29: "STYLE_SEPARATOR",
        31: "ID",
        32: "COLONSEP",
        34: "TEXT",
        36: "RISK",
        38: "VERIFYMTHD",
        40: "STRUCT_STOP",
        41: "REQUIREMENT",
        42: "FUNCTIONAL_REQUIREMENT",
        43: "INTERFACE_REQUIREMENT",
        44: "PERFORMANCE_REQUIREMENT",
        45: "PHYSICAL_REQUIREMENT",
        46: "DESIGN_CONSTRAINT",
        47: "LOW_RISK",
        48: "MED_RISK",
        49: "HIGH_RISK",
        50: "VERIFY_ANALYSIS",
        51: "VERIFY_DEMONSTRATION",
        52: "VERIFY_INSPECTION",
        53: "VERIFY_TEST",
        54: "ELEMENT",
        57: "TYPE",
        59: "DOCREF",
        61: "END_ARROW_L",
        63: "LINE",
        64: "END_ARROW_R",
        65: "CONTAINS",
        66: "COPIES",
        67: "DERIVES",
        68: "SATISFIES",
        69: "VERIFIES",
        70: "REFINES",
        71: "TRACES",
        72: "CLASSDEF",
        74: "CLASS",
        75: "ALPHA",
        76: "COMMA",
        77: "STYLE",
        80: "NUM",
        81: "COLON",
        82: "UNIT",
        83: "SPACE",
        84: "BRKT",
        85: "PCT",
        86: "MINUS",
        87: "LABEL",
        88: "SEMICOLON",
        89: "unqString",
        90: "qString"
      },
      productions_: [0, [3, 3], [3, 2], [3, 4], [4, 2], [4, 2], [4, 1], [7, 0], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [17, 1], [17, 1], [17, 1], [17, 1], [14, 5], [14, 7], [28, 5], [28, 5], [28, 5], [28, 5], [28, 2], [28, 1], [25, 1], [25, 1], [25, 1], [25, 1], [25, 1], [25, 1], [37, 1], [37, 1], [37, 1], [39, 1], [39, 1], [39, 1], [39, 1], [15, 5], [15, 7], [56, 5], [56, 5], [56, 2], [56, 1], [16, 5], [16, 5], [62, 1], [62, 1], [62, 1], [62, 1], [62, 1], [62, 1], [62, 1], [19, 3], [20, 3], [20, 3], [30, 1], [30, 3], [30, 1], [30, 3], [18, 3], [73, 1], [73, 3], [78, 1], [78, 2], [79, 1], [79, 1], [79, 1], [79, 1], [79, 1], [79, 1], [79, 1], [79, 1], [79, 1], [79, 1], [26, 1], [26, 1], [33, 1], [33, 1], [35, 1], [35, 1], [55, 1], [55, 1], [58, 1], [58, 1], [60, 1], [60, 1]],
      performAction: mermaidConfigUtils.setName(function (t, e, r, a, i, s, n) {
        var l = s.length - 1;
        switch (i) {
          case 4:
            this.$ = s[l].trim();
            a.setAccTitle(this.$);
            break;
          case 5:
          case 6:
            this.$ = s[l].trim();
            a.setAccDescription(this.$);
            break;
          case 7:
            this.$ = [];
            break;
          case 17:
            a.setDirection("TB");
            break;
          case 18:
            a.setDirection("BT");
            break;
          case 19:
            a.setDirection("RL");
            break;
          case 20:
            a.setDirection("LR");
            break;
          case 21:
            a.addRequirement(s[l - 3], s[l - 4]);
            break;
          case 22:
            a.addRequirement(s[l - 5], s[l - 6]);
            a.setClass([s[l - 5]], s[l - 3]);
            break;
          case 23:
            a.setNewReqId(s[l - 2]);
            break;
          case 24:
            a.setNewReqText(s[l - 2]);
            break;
          case 25:
            a.setNewReqRisk(s[l - 2]);
            break;
          case 26:
            a.setNewReqVerifyMethod(s[l - 2]);
            break;
          case 29:
            this.$ = a.RequirementType.REQUIREMENT;
            break;
          case 30:
            this.$ = a.RequirementType.FUNCTIONAL_REQUIREMENT;
            break;
          case 31:
            this.$ = a.RequirementType.INTERFACE_REQUIREMENT;
            break;
          case 32:
            this.$ = a.RequirementType.PERFORMANCE_REQUIREMENT;
            break;
          case 33:
            this.$ = a.RequirementType.PHYSICAL_REQUIREMENT;
            break;
          case 34:
            this.$ = a.RequirementType.DESIGN_CONSTRAINT;
            break;
          case 35:
            this.$ = a.RiskLevel.LOW_RISK;
            break;
          case 36:
            this.$ = a.RiskLevel.MED_RISK;
            break;
          case 37:
            this.$ = a.RiskLevel.HIGH_RISK;
            break;
          case 38:
            this.$ = a.VerifyType.VERIFY_ANALYSIS;
            break;
          case 39:
            this.$ = a.VerifyType.VERIFY_DEMONSTRATION;
            break;
          case 40:
            this.$ = a.VerifyType.VERIFY_INSPECTION;
            break;
          case 41:
            this.$ = a.VerifyType.VERIFY_TEST;
            break;
          case 42:
            a.addElement(s[l - 3]);
            break;
          case 43:
            a.addElement(s[l - 5]);
            a.setClass([s[l - 5]], s[l - 3]);
            break;
          case 44:
            a.setNewElementType(s[l - 2]);
            break;
          case 45:
            a.setNewElementDocRef(s[l - 2]);
            break;
          case 48:
            a.addRelationship(s[l - 2], s[l], s[l - 4]);
            break;
          case 49:
            a.addRelationship(s[l - 2], s[l - 4], s[l]);
            break;
          case 50:
            this.$ = a.Relationships.CONTAINS;
            break;
          case 51:
            this.$ = a.Relationships.COPIES;
            break;
          case 52:
            this.$ = a.Relationships.DERIVES;
            break;
          case 53:
            this.$ = a.Relationships.SATISFIES;
            break;
          case 54:
            this.$ = a.Relationships.VERIFIES;
            break;
          case 55:
            this.$ = a.Relationships.REFINES;
            break;
          case 56:
            this.$ = a.Relationships.TRACES;
            break;
          case 57:
            this.$ = s[l - 2];
            a.defineClass(s[l - 1], s[l]);
            break;
          case 58:
            a.setClass(s[l - 1], s[l]);
            break;
          case 59:
            a.setClass([s[l - 2]], s[l]);
            break;
          case 60:
          case 62:
          case 65:
            this.$ = [s[l]];
            break;
          case 61:
          case 63:
            this.$ = s[l - 2].concat([s[l]]);
            break;
          case 64:
            this.$ = s[l - 2];
            a.setCssStyle(s[l - 1], s[l]);
            break;
          case 66:
            s[l - 2].push(s[l]);
            this.$ = s[l - 2];
            break;
          case 68:
            this.$ = s[l - 1] + s[l];
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: 2,
        6: e,
        9: r,
        11: a,
        13: i
      }, {
        1: [3]
      }, {
        3: 8,
        4: 2,
        5: [1, 7],
        6: e,
        9: r,
        11: a,
        13: i
      }, {
        5: [1, 9]
      }, {
        10: [1, 10]
      }, {
        12: [1, 11]
      }, t(s, [2, 6]), {
        3: 12,
        4: 2,
        6: e,
        9: r,
        11: a,
        13: i
      }, {
        1: [2, 2]
      }, {
        4: 17,
        5: n,
        7: 13,
        8: l,
        9: r,
        11: a,
        13: i,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: d,
        24: u,
        25: 23,
        33: 25,
        41: p,
        42: y,
        43: m,
        44: f,
        45: g,
        46: k,
        54: b,
        72: E,
        74: _,
        77: R,
        89: S,
        90: x
      }, t(s, [2, 4]), t(s, [2, 5]), {
        1: [2, 1]
      }, {
        8: [1, 41]
      }, {
        4: 17,
        5: n,
        7: 42,
        8: l,
        9: r,
        11: a,
        13: i,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: d,
        24: u,
        25: 23,
        33: 25,
        41: p,
        42: y,
        43: m,
        44: f,
        45: g,
        46: k,
        54: b,
        72: E,
        74: _,
        77: R,
        89: S,
        90: x
      }, {
        4: 17,
        5: n,
        7: 43,
        8: l,
        9: r,
        11: a,
        13: i,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: d,
        24: u,
        25: 23,
        33: 25,
        41: p,
        42: y,
        43: m,
        44: f,
        45: g,
        46: k,
        54: b,
        72: E,
        74: _,
        77: R,
        89: S,
        90: x
      }, {
        4: 17,
        5: n,
        7: 44,
        8: l,
        9: r,
        11: a,
        13: i,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: d,
        24: u,
        25: 23,
        33: 25,
        41: p,
        42: y,
        43: m,
        44: f,
        45: g,
        46: k,
        54: b,
        72: E,
        74: _,
        77: R,
        89: S,
        90: x
      }, {
        4: 17,
        5: n,
        7: 45,
        8: l,
        9: r,
        11: a,
        13: i,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: d,
        24: u,
        25: 23,
        33: 25,
        41: p,
        42: y,
        43: m,
        44: f,
        45: g,
        46: k,
        54: b,
        72: E,
        74: _,
        77: R,
        89: S,
        90: x
      }, {
        4: 17,
        5: n,
        7: 46,
        8: l,
        9: r,
        11: a,
        13: i,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: d,
        24: u,
        25: 23,
        33: 25,
        41: p,
        42: y,
        43: m,
        44: f,
        45: g,
        46: k,
        54: b,
        72: E,
        74: _,
        77: R,
        89: S,
        90: x
      }, {
        4: 17,
        5: n,
        7: 47,
        8: l,
        9: r,
        11: a,
        13: i,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: d,
        24: u,
        25: 23,
        33: 25,
        41: p,
        42: y,
        43: m,
        44: f,
        45: g,
        46: k,
        54: b,
        72: E,
        74: _,
        77: R,
        89: S,
        90: x
      }, {
        4: 17,
        5: n,
        7: 48,
        8: l,
        9: r,
        11: a,
        13: i,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: d,
        24: u,
        25: 23,
        33: 25,
        41: p,
        42: y,
        43: m,
        44: f,
        45: g,
        46: k,
        54: b,
        72: E,
        74: _,
        77: R,
        89: S,
        90: x
      }, {
        4: 17,
        5: n,
        7: 49,
        8: l,
        9: r,
        11: a,
        13: i,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: d,
        24: u,
        25: 23,
        33: 25,
        41: p,
        42: y,
        43: m,
        44: f,
        45: g,
        46: k,
        54: b,
        72: E,
        74: _,
        77: R,
        89: S,
        90: x
      }, {
        4: 17,
        5: n,
        7: 50,
        8: l,
        9: r,
        11: a,
        13: i,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: d,
        24: u,
        25: 23,
        33: 25,
        41: p,
        42: y,
        43: m,
        44: f,
        45: g,
        46: k,
        54: b,
        72: E,
        74: _,
        77: R,
        89: S,
        90: x
      }, {
        26: 51,
        89: [1, 52],
        90: [1, 53]
      }, {
        55: 54,
        89: [1, 55],
        90: [1, 56]
      }, {
        29: [1, 59],
        61: [1, 57],
        63: [1, 58]
      }, t(T, [2, 17]), t(T, [2, 18]), t(T, [2, 19]), t(T, [2, 20]), {
        30: 60,
        33: 62,
        75: M,
        89: S,
        90: x
      }, {
        30: 63,
        33: 62,
        75: M,
        89: S,
        90: x
      }, {
        30: 64,
        33: 62,
        75: M,
        89: S,
        90: x
      }, t(w, [2, 29]), t(w, [2, 30]), t(w, [2, 31]), t(w, [2, 32]), t(w, [2, 33]), t(w, [2, 34]), t(I, [2, 81]), t(I, [2, 82]), {
        1: [2, 3]
      }, {
        8: [2, 8]
      }, {
        8: [2, 9]
      }, {
        8: [2, 10]
      }, {
        8: [2, 11]
      }, {
        8: [2, 12]
      }, {
        8: [2, 13]
      }, {
        8: [2, 14]
      }, {
        8: [2, 15]
      }, {
        8: [2, 16]
      }, {
        27: [1, 65],
        29: [1, 66]
      }, t(L, [2, 79]), t(L, [2, 80]), {
        27: [1, 67],
        29: [1, 68]
      }, t(L, [2, 85]), t(L, [2, 86]), {
        62: 69,
        65: N,
        66: v,
        67: C,
        68: q,
        69: A,
        70: O,
        71: W
      }, {
        62: 77,
        65: N,
        66: v,
        67: C,
        68: q,
        69: A,
        70: O,
        71: W
      }, {
        30: 78,
        33: 62,
        75: M,
        89: S,
        90: x
      }, {
        73: 79,
        75: $,
        76: D,
        78: 81,
        79: 82,
        80: P,
        81: Y,
        82: F,
        83: U,
        84: B,
        85: H,
        86: V,
        87: X,
        88: Q
      }, t(z, [2, 60]), t(z, [2, 62]), {
        73: 93,
        75: $,
        76: D,
        78: 81,
        79: 82,
        80: P,
        81: Y,
        82: F,
        83: U,
        84: B,
        85: H,
        86: V,
        87: X,
        88: Q
      }, {
        30: 94,
        33: 62,
        75: M,
        76: D,
        89: S,
        90: x
      }, {
        5: [1, 95]
      }, {
        30: 96,
        33: 62,
        75: M,
        89: S,
        90: x
      }, {
        5: [1, 97]
      }, {
        30: 98,
        33: 62,
        75: M,
        89: S,
        90: x
      }, {
        63: [1, 99]
      }, t(j, [2, 50]), t(j, [2, 51]), t(j, [2, 52]), t(j, [2, 53]), t(j, [2, 54]), t(j, [2, 55]), t(j, [2, 56]), {
        64: [1, 100]
      }, t(T, [2, 59], {
        76: D
      }), t(T, [2, 64], {
        76: K
      }), {
        33: 103,
        75: [1, 102],
        89: S,
        90: x
      }, t(Z, [2, 65], {
        79: 104,
        75: $,
        80: P,
        81: Y,
        82: F,
        83: U,
        84: B,
        85: H,
        86: V,
        87: X,
        88: Q
      }), t(G, [2, 67]), t(G, [2, 69]), t(G, [2, 70]), t(G, [2, 71]), t(G, [2, 72]), t(G, [2, 73]), t(G, [2, 74]), t(G, [2, 75]), t(G, [2, 76]), t(G, [2, 77]), t(G, [2, 78]), t(T, [2, 57], {
        76: K
      }), t(T, [2, 58], {
        76: D
      }), {
        5: J,
        28: 105,
        31: tt,
        34: te,
        36: tr,
        38: ta,
        40: ti
      }, {
        27: [1, 112],
        76: D
      }, {
        5: ts,
        40: tn,
        56: 113,
        57: tl,
        59: to
      }, {
        27: [1, 118],
        76: D
      }, {
        33: 119,
        89: S,
        90: x
      }, {
        33: 120,
        89: S,
        90: x
      }, {
        75: $,
        78: 121,
        79: 82,
        80: P,
        81: Y,
        82: F,
        83: U,
        84: B,
        85: H,
        86: V,
        87: X,
        88: Q
      }, t(z, [2, 61]), t(z, [2, 63]), t(G, [2, 68]), t(T, [2, 21]), {
        32: [1, 122]
      }, {
        32: [1, 123]
      }, {
        32: [1, 124]
      }, {
        32: [1, 125]
      }, {
        5: J,
        28: 126,
        31: tt,
        34: te,
        36: tr,
        38: ta,
        40: ti
      }, t(T, [2, 28]), {
        5: [1, 127]
      }, t(T, [2, 42]), {
        32: [1, 128]
      }, {
        32: [1, 129]
      }, {
        5: ts,
        40: tn,
        56: 130,
        57: tl,
        59: to
      }, t(T, [2, 47]), {
        5: [1, 131]
      }, t(T, [2, 48]), t(T, [2, 49]), t(Z, [2, 66], {
        79: 104,
        75: $,
        80: P,
        81: Y,
        82: F,
        83: U,
        84: B,
        85: H,
        86: V,
        87: X,
        88: Q
      }), {
        33: 132,
        89: S,
        90: x
      }, {
        35: 133,
        89: [1, 134],
        90: [1, 135]
      }, {
        37: 136,
        47: [1, 137],
        48: [1, 138],
        49: [1, 139]
      }, {
        39: 140,
        50: [1, 141],
        51: [1, 142],
        52: [1, 143],
        53: [1, 144]
      }, t(T, [2, 27]), {
        5: J,
        28: 145,
        31: tt,
        34: te,
        36: tr,
        38: ta,
        40: ti
      }, {
        58: 146,
        89: [1, 147],
        90: [1, 148]
      }, {
        60: 149,
        89: [1, 150],
        90: [1, 151]
      }, t(T, [2, 46]), {
        5: ts,
        40: tn,
        56: 152,
        57: tl,
        59: to
      }, {
        5: [1, 153]
      }, {
        5: [1, 154]
      }, {
        5: [2, 83]
      }, {
        5: [2, 84]
      }, {
        5: [1, 155]
      }, {
        5: [2, 35]
      }, {
        5: [2, 36]
      }, {
        5: [2, 37]
      }, {
        5: [1, 156]
      }, {
        5: [2, 38]
      }, {
        5: [2, 39]
      }, {
        5: [2, 40]
      }, {
        5: [2, 41]
      }, t(T, [2, 22]), {
        5: [1, 157]
      }, {
        5: [2, 87]
      }, {
        5: [2, 88]
      }, {
        5: [1, 158]
      }, {
        5: [2, 89]
      }, {
        5: [2, 90]
      }, t(T, [2, 43]), {
        5: J,
        28: 159,
        31: tt,
        34: te,
        36: tr,
        38: ta,
        40: ti
      }, {
        5: J,
        28: 160,
        31: tt,
        34: te,
        36: tr,
        38: ta,
        40: ti
      }, {
        5: J,
        28: 161,
        31: tt,
        34: te,
        36: tr,
        38: ta,
        40: ti
      }, {
        5: J,
        28: 162,
        31: tt,
        34: te,
        36: tr,
        38: ta,
        40: ti
      }, {
        5: ts,
        40: tn,
        56: 163,
        57: tl,
        59: to
      }, {
        5: ts,
        40: tn,
        56: 164,
        57: tl,
        59: to
      }, t(T, [2, 23]), t(T, [2, 24]), t(T, [2, 25]), t(T, [2, 26]), t(T, [2, 44]), t(T, [2, 45])],
      defaultActions: {
        8: [2, 2],
        12: [2, 1],
        41: [2, 3],
        42: [2, 8],
        43: [2, 9],
        44: [2, 10],
        45: [2, 11],
        46: [2, 12],
        47: [2, 13],
        48: [2, 14],
        49: [2, 15],
        50: [2, 16],
        134: [2, 83],
        135: [2, 84],
        137: [2, 35],
        138: [2, 36],
        139: [2, 37],
        141: [2, 38],
        142: [2, 39],
        143: [2, 40],
        144: [2, 41],
        147: [2, 87],
        148: [2, 88],
        150: [2, 89],
        151: [2, 90]
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
        var u = s.slice.call(arguments, 1);
        var p = Object.create(this.lexer);
        var y = {
          yy: {}
        };
        for (var m in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, m)) {
            y.yy[m] = this.yy[m];
          }
        }
        p.setInput(t, y.yy);
        y.yy.lexer = p;
        y.yy.parser = this;
        if (p.yylloc === undefined) {
          p.yylloc = {};
        }
        var f = p.yylloc;
        s.push(f);
        var g = p.options && p.options.ranges;
        function k() {
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
          i.length = i.length - t;
          s.length = s.length - t;
        }, "popStack");
        mermaidConfigUtils.setName(k, "lex");
        var b;
        var E;
        var _;
        var R;
        var S;
        var x;
        var T;
        var M;
        var w;
        var I = {};
        while (true) {
          _ = r[r.length - 1];
          if (this.defaultActions[_]) {
            R = this.defaultActions[_];
          } else {
            if (b == null) {
              b = k();
            }
            R = n[_] && n[_][b];
          }
          if (R === undefined || !R.length || !R[0]) {
            var L = "";
            w = [];
            for (x in n[_]) {
              if (this.terminals_[x] && x > 2) {
                w.push("'" + this.terminals_[x] + "'");
              }
            }
            L = p.showPosition ? "Parse error on line " + (c + 1) + ":\n" + p.showPosition() + "\nExpecting " + w.join(", ") + ", got '" + (this.terminals_[b] || b) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (b == 1 ? "end of input" : "'" + (this.terminals_[b] || b) + "'");
            this.parseError(L, {
              text: p.match,
              token: this.terminals_[b] || b,
              line: p.yylineno,
              loc: f,
              expected: w
            });
          }
          if (R[0] instanceof Array && R.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + _ + ", token: " + b);
          }
          switch (R[0]) {
            case 1:
              r.push(b);
              i.push(p.yytext);
              s.push(p.yylloc);
              r.push(R[1]);
              b = null;
              if (E) {
                b = E;
                E = null;
              } else {
                h = p.yyleng;
                l = p.yytext;
                c = p.yylineno;
                f = p.yylloc;
                if (d > 0) {
                  d--;
                }
              }
              break;
            case 2:
              T = this.productions_[R[1]][1];
              I.$ = i[i.length - T];
              I._$ = {
                first_line: s[s.length - (T || 1)].first_line,
                last_line: s[s.length - 1].last_line,
                first_column: s[s.length - (T || 1)].first_column,
                last_column: s[s.length - 1].last_column
              };
              if (g) {
                I._$.range = [s[s.length - (T || 1)].range[0], s[s.length - 1].range[1]];
              }
              if ((S = this.performAction.apply(I, [l, h, c, y.yy, R[1], i, s].concat(u))) !== undefined) {
                return S;
              }
              if (T) {
                r = r.slice(0, T * -1 * 2);
                i = i.slice(0, T * -1);
                s = s.slice(0, T * -1);
              }
              r.push(this.productions_[R[1]][0]);
              i.push(I.$);
              s.push(I._$);
              M = n[r[r.length - 2]][r[r.length - 1]];
              r.push(M);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var th = {
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
            return "title";
          case 1:
            this.begin("acc_title");
            return 9;
          case 2:
            this.popState();
            return "acc_title_value";
          case 3:
            this.begin("acc_descr");
            return 11;
          case 4:
            this.popState();
            return "acc_descr_value";
          case 5:
            this.begin("acc_descr_multiline");
            break;
          case 6:
          case 58:
          case 65:
            this.popState();
            break;
          case 7:
            return "acc_descr_multiline_value";
          case 8:
            return 21;
          case 9:
            return 22;
          case 10:
            return 23;
          case 11:
            return 24;
          case 12:
            return 5;
          case 13:
          case 14:
          case 15:
          case 56:
            break;
          case 16:
            return 8;
          case 17:
            return 6;
          case 18:
            return 27;
          case 19:
            return 40;
          case 20:
            return 29;
          case 21:
            return 32;
          case 22:
            return 31;
          case 23:
            return 34;
          case 24:
            return 36;
          case 25:
            return 38;
          case 26:
            return 41;
          case 27:
            return 42;
          case 28:
            return 43;
          case 29:
            return 44;
          case 30:
            return 45;
          case 31:
            return 46;
          case 32:
            return 47;
          case 33:
            return 48;
          case 34:
            return 49;
          case 35:
            return 50;
          case 36:
            return 51;
          case 37:
            return 52;
          case 38:
            return 53;
          case 39:
            return 54;
          case 40:
            return 65;
          case 41:
            return 66;
          case 42:
            return 67;
          case 43:
            return 68;
          case 44:
            return 69;
          case 45:
            return 70;
          case 46:
            return 71;
          case 47:
            return 57;
          case 48:
            return 59;
          case 49:
            this.begin("style");
            return 77;
          case 50:
          case 68:
            return 75;
          case 51:
            return 81;
          case 52:
            return 88;
          case 53:
            return "PERCENT";
          case 54:
            return 86;
          case 55:
            return 84;
          case 57:
          case 64:
            this.begin("string");
            break;
          case 59:
            this.begin("style");
            return 72;
          case 60:
            this.begin("style");
            return 74;
          case 61:
            return 61;
          case 62:
            return 64;
          case 63:
            return 63;
          case 66:
            return "qString";
          case 67:
            e.yytext = e.yytext.trim();
            return 89;
          case 69:
            return 80;
          case 70:
            return 76;
        }
      }, "anonymous"),
      rules: [/^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:(\r?\n)+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:$)/i, /^(?:requirementDiagram\b)/i, /^(?:\{)/i, /^(?:\})/i, /^(?::{3})/i, /^(?::)/i, /^(?:id\b)/i, /^(?:text\b)/i, /^(?:risk\b)/i, /^(?:verifyMethod\b)/i, /^(?:requirement\b)/i, /^(?:functionalRequirement\b)/i, /^(?:interfaceRequirement\b)/i, /^(?:performanceRequirement\b)/i, /^(?:physicalRequirement\b)/i, /^(?:designConstraint\b)/i, /^(?:low\b)/i, /^(?:medium\b)/i, /^(?:high\b)/i, /^(?:analysis\b)/i, /^(?:demonstration\b)/i, /^(?:inspection\b)/i, /^(?:test\b)/i, /^(?:element\b)/i, /^(?:contains\b)/i, /^(?:copies\b)/i, /^(?:derives\b)/i, /^(?:satisfies\b)/i, /^(?:verifies\b)/i, /^(?:refines\b)/i, /^(?:traces\b)/i, /^(?:type\b)/i, /^(?:docref\b)/i, /^(?:style\b)/i, /^(?:\w+)/i, /^(?::)/i, /^(?:;)/i, /^(?:%)/i, /^(?:-)/i, /^(?:#)/i, /^(?: )/i, /^(?:["])/i, /^(?:\n)/i, /^(?:classDef\b)/i, /^(?:class\b)/i, /^(?:<-)/i, /^(?:->)/i, /^(?:-)/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[\w][^:,\r\n\{\<\>\-\=]*)/i, /^(?:\w+)/i, /^(?:[0-9]+)/i, /^(?:,)/i],
      conditions: {
        acc_descr_multiline: {
          rules: [6, 7, 68, 69, 70],
          inclusive: false
        },
        acc_descr: {
          rules: [4, 68, 69, 70],
          inclusive: false
        },
        acc_title: {
          rules: [2, 68, 69, 70],
          inclusive: false
        },
        style: {
          rules: [50, 51, 52, 53, 54, 55, 56, 57, 58, 68, 69, 70],
          inclusive: false
        },
        unqString: {
          rules: [68, 69, 70],
          inclusive: false
        },
        token: {
          rules: [68, 69, 70],
          inclusive: false
        },
        string: {
          rules: [65, 66, 68, 69, 70],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 59, 60, 61, 62, 63, 64, 67, 68, 69, 70],
          inclusive: true
        }
      }
    };
    function td() {
      this.yy = {};
    }
    tc.lexer = th;
    mermaidConfigUtils.setName(td, "Parser");
    td.prototype = tc;
    tc.Parser = td;
    return new td();
  }();
  c.parser = c;
  a = class {
    getDirection() {
      return this.direction;
    }
    setDirection(t) {
      this.direction = t;
    }
    resetLatestRequirement() {
      this.latestRequirement = this.getInitialRequirement();
    }
    resetLatestElement() {
      this.latestElement = this.getInitialElement();
    }
    getInitialRequirement() {
      return {
        requirementId: "",
        text: "",
        risk: "",
        verifyMethod: "",
        name: "",
        type: "",
        cssStyles: [],
        classes: ["default"]
      };
    }
    getInitialElement() {
      return {
        name: "",
        type: "",
        docRef: "",
        cssStyles: [],
        classes: ["default"]
      };
    }
    addRequirement(t, e) {
      if (!this.requirements.has(t)) {
        this.requirements.set(t, {
          name: t,
          type: e,
          requirementId: this.latestRequirement.requirementId,
          text: this.latestRequirement.text,
          risk: this.latestRequirement.risk,
          verifyMethod: this.latestRequirement.verifyMethod,
          cssStyles: [],
          classes: ["default"]
        });
      }
      this.resetLatestRequirement();
      return this.requirements.get(t);
    }
    getRequirements() {
      return this.requirements;
    }
    setNewReqId(t) {
      if (this.latestRequirement !== undefined) {
        this.latestRequirement.requirementId = t;
      }
    }
    setNewReqText(t) {
      if (this.latestRequirement !== undefined) {
        this.latestRequirement.text = t;
      }
    }
    setNewReqRisk(t) {
      if (this.latestRequirement !== undefined) {
        this.latestRequirement.risk = t;
      }
    }
    setNewReqVerifyMethod(t) {
      if (this.latestRequirement !== undefined) {
        this.latestRequirement.verifyMethod = t;
      }
    }
    addElement(t) {
      if (!this.elements.has(t)) {
        this.elements.set(t, {
          name: t,
          type: this.latestElement.type,
          docRef: this.latestElement.docRef,
          cssStyles: [],
          classes: ["default"]
        });
        mermaidConfigUtils.logger.info("Added new element: ", t);
      }
      this.resetLatestElement();
      return this.elements.get(t);
    }
    getElements() {
      return this.elements;
    }
    setNewElementType(t) {
      if (this.latestElement !== undefined) {
        this.latestElement.type = t;
      }
    }
    setNewElementDocRef(t) {
      if (this.latestElement !== undefined) {
        this.latestElement.docRef = t;
      }
    }
    addRelationship(t, e, r) {
      this.relations.push({
        type: t,
        src: e,
        dst: r
      });
    }
    getRelationships() {
      return this.relations;
    }
    clear() {
      this.relations = [];
      this.resetLatestRequirement();
      this.requirements = new Map();
      this.resetLatestElement();
      this.elements = new Map();
      this.classes = new Map();
      mermaidConfigUtils.clearAccData();
    }
    setCssStyle(t, e) {
      for (let a of t) {
        let t = this.requirements.get(a) ?? this.elements.get(a);
        if (!e || !t) {
          return;
        }
        for (let r of e) {
          if (r.includes(",")) {
            t.cssStyles.push(...r.split(","));
          } else {
            t.cssStyles.push(r);
          }
        }
      }
    }
    setClass(t, e) {
      for (let i of t) {
        let t = this.requirements.get(i) ?? this.elements.get(i);
        if (t) {
          for (let r of e) {
            t.classes.push(r);
            let e = this.classes.get(r)?.styles;
            if (e) {
              t.cssStyles.push(...e);
            }
          }
        }
      }
    }
    defineClass(t, e) {
      for (let r of t) {
        let t = this.classes.get(r);
        if (t === undefined) {
          t = {
            id: r,
            styles: [],
            textStyles: []
          };
          this.classes.set(r, t);
        }
        if (e) {
          e.forEach(function (e) {
            if (/color/.exec(e)) {
              let r = e.replace("fill", "bgFill");
              t.textStyles.push(r);
            }
            t.styles.push(e);
          });
        }
        this.requirements.forEach(t => {
          if (t.classes.includes(r)) {
            t.cssStyles.push(...e.flatMap(t => t.split(",")));
          }
        });
        this.elements.forEach(t => {
          if (t.classes.includes(r)) {
            t.cssStyles.push(...e.flatMap(t => t.split(",")));
          }
        });
      }
    }
    getClasses() {
      return this.classes;
    }
    getData() {
      let t = mermaidConfigUtils.getConfigAlias();
      let e = [];
      let r = [];
      for (let r of this.requirements.values()) {
        r.id = r.name;
        r.cssStyles = r.cssStyles;
        r.cssClasses = r.classes.join(" ");
        r.shape = "requirementBox";
        r.look = t.look;
        e.push(r);
      }
      for (let r of this.elements.values()) {
        r.shape = "requirementBox";
        r.look = t.look;
        r.id = r.name;
        r.cssStyles = r.cssStyles;
        r.cssClasses = r.classes.join(" ");
        e.push(r);
      }
      for (let e of this.relations) {
        let o = 0;
        let h = e.type === this.Relationships.CONTAINS;
        let d = {
          id: `${e.src}-${e.dst}-${o}`,
          start: this.requirements.get(e.src)?.name ?? this.elements.get(e.src)?.name,
          end: this.requirements.get(e.dst)?.name ?? this.elements.get(e.dst)?.name,
          label: `&lt;&lt;${e.type}&gt;&gt;`,
          classes: "relationshipLine",
          style: ["fill:none", h ? "" : "stroke-dasharray: 10,7"],
          labelpos: "c",
          thickness: "normal",
          type: "normal",
          pattern: h ? "normal" : "dashed",
          arrowTypeStart: h ? "requirement_contains" : "",
          arrowTypeEnd: h ? "" : "requirement_arrow",
          look: t.look
        };
        r.push(d);
        o++;
      }
      return {
        nodes: e,
        edges: r,
        other: {},
        config: t,
        direction: this.getDirection()
      };
    }
    constructor() {
      this.relations = [];
      this.latestRequirement = this.getInitialRequirement();
      this.requirements = new Map();
      this.latestElement = this.getInitialElement();
      this.elements = new Map();
      this.classes = new Map();
      this.direction = "TB";
      this.RequirementType = {
        REQUIREMENT: "Requirement",
        FUNCTIONAL_REQUIREMENT: "Functional Requirement",
        INTERFACE_REQUIREMENT: "Interface Requirement",
        PERFORMANCE_REQUIREMENT: "Performance Requirement",
        PHYSICAL_REQUIREMENT: "Physical Requirement",
        DESIGN_CONSTRAINT: "Design Constraint"
      };
      this.RiskLevel = {
        LOW_RISK: "Low",
        MED_RISK: "Medium",
        HIGH_RISK: "High"
      };
      this.VerifyType = {
        VERIFY_ANALYSIS: "Analysis",
        VERIFY_DEMONSTRATION: "Demonstration",
        VERIFY_INSPECTION: "Inspection",
        VERIFY_TEST: "Test"
      };
      this.Relationships = {
        CONTAINS: "contains",
        COPIES: "copies",
        DERIVES: "derives",
        SATISFIES: "satisfies",
        VERIFIES: "verifies",
        REFINES: "refines",
        TRACES: "traces"
      };
      this.setAccTitle = mermaidConfigUtils.setAccTitle;
      this.getAccTitle = mermaidConfigUtils.getAccTitle;
      this.setAccDescription = mermaidConfigUtils.setAccDescription;
      this.getAccDescription = mermaidConfigUtils.getAccDescription;
      this.setDiagramTitle = mermaidConfigUtils.setDiagramTitle;
      this.getDiagramTitle = mermaidConfigUtils.getDiagramTitle;
      this.getConfig = mermaidConfigUtils.setName(() => mermaidConfigUtils.getConfigAlias().requirement, "getConfig");
      this.clear();
      this.setDirection = this.setDirection.bind(this);
      this.addRequirement = this.addRequirement.bind(this);
      this.setNewReqId = this.setNewReqId.bind(this);
      this.setNewReqRisk = this.setNewReqRisk.bind(this);
      this.setNewReqText = this.setNewReqText.bind(this);
      this.setNewReqVerifyMethod = this.setNewReqVerifyMethod.bind(this);
      this.addElement = this.addElement.bind(this);
      this.setNewElementType = this.setNewElementType.bind(this);
      this.setNewElementDocRef = this.setNewElementDocRef.bind(this);
      this.addRelationship = this.addRelationship.bind(this);
      this.setCssStyle = this.setCssStyle.bind(this);
      this.setClass = this.setClass.bind(this);
      this.defineClass = this.defineClass.bind(this);
      this.setAccTitle = this.setAccTitle.bind(this);
      this.setAccDescription = this.setAccDescription.bind(this);
    }
  };
  mermaidConfigUtils.setName(a, "RequirementDB");
  var h = a;
  var d = mermaidConfigUtils.setName(t => `

  marker {
    fill: ${t.relationColor};
    stroke: ${t.relationColor};
  }

  marker.cross {
    stroke: ${t.lineColor};
  }

  svg {
    font-family: ${t.fontFamily};
    font-size: ${t.fontSize};
  }

  .reqBox {
    fill: ${t.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${t.requirementBorderColor};
    stroke-width: ${t.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${t.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${t.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${t.requirementBorderColor};
    stroke-width: ${t.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${t.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${t.relationLabelColor};
  }
  .divider {
    stroke: ${t.nodeBorder};
    stroke-width: 1;
  }
  .label {
    font-family: ${t.fontFamily};
    color: ${t.nodeTextColor || t.textColor};
  }
  .label text,span {
    fill: ${t.nodeTextColor || t.textColor};
    color: ${t.nodeTextColor || t.textColor};
  }
  .labelBkg {
    background-color: ${t.edgeLabelBackground};
  }

`, "getStyles");
  var u = {};
  mermaidConfigUtils.copyProperties(u, {
    draw: () => p
  });
  var p = mermaidConfigUtils.setName(async function (t, e, r, a) {
    var u;
    mermaidConfigUtils.logger.info("REF0:");
    mermaidConfigUtils.logger.info("Drawing requirement diagram (unified)", e);
    let {
      securityLevel: p,
      state: y,
      layout: m
    } = mermaidConfigUtils.getConfigAlias();
    let f = a.db.getData();
    let g = mermaidDiagramElementGetter.getDiagramElement(e, p);
    f.type = a.type;
    f.layoutAlgorithm = mermaidLayoutRegistry.getRegisteredLayoutAlgorithm(m);
    f.nodeSpacing = (y == null ? undefined : y.nodeSpacing) ?? 50;
    f.rankSpacing = (y == null ? undefined : y.rankSpacing) ?? 50;
    f.markers = ["requirement_contains", "requirement_arrow"];
    f.diagramId = e;
    await mermaidLayoutRegistry.render(f, g);
    mermaidTextLayoutUtils.textLayoutUtils.insertTitle(g, "requirementDiagramTitleText", (y == null ? undefined : y.titleTopMargin) ?? 25, a.db.getDiagramTitle());
    svgViewportSetup.setupSvgViewport(g, 8, "requirementDiagram", (u = y == null ? undefined : y.useMaxWidth) === null || u === undefined || u);
  }, "draw");
  var y = {
    parser: c,
    get db() {
      return new h();
    },
    renderer: u,
    styles: d
  };
  require.d(exports, {
    diagram: function () {
      return y;
    }
  });
}