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
// - Renamed variable 'l' to 'mermaidDiagramUtils'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'c' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'o' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'r2' to 'defineProperties' (module 696754)
// - Updated imported property 'ZH' to 'clearCommonDb' (module 401926)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'GN' to 'setAccTitle' (module 401926)
// - Updated imported property 'eu' to 'getAccTitle' (module 401926)
// - Updated imported property 'U$' to 'setAccDescription' (module 401926)
// - Updated imported property 'Mx' to 'getAccDescription' (module 401926)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 401926)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 401926)
// - Updated imported property 'q' to 'getDiagramElement' (module 150827)
// - Updated imported property '_b' to 'getRegisteredLayoutAlgorithm' (module 484129)
// - Updated imported property 'sY' to 'render' (module 484129)
// - Updated imported property 'w8' to 'mermaidUtils' (module 583673)
// - Updated imported property 'j' to 'setupViewPortForSvg' (module 3049)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29501.f9fecd0f.js
         * chunkId: 29501
         * moduleId: 940188
         */
module.exports = function (module, exports, require) {
  var i;
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
  var h = function () {
    var e = loggerLevelUtils.setFunctionName(function (e, t, s, i) {
      s = s || {};
      i = e.length;
      for (; i--; s[e[i]] = t);
      return s;
    }, "o");
    var t = [1, 3];
    var s = [1, 4];
    var i = [1, 5];
    var n = [1, 6];
    var r = [5, 6, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 77, 89, 90];
    var a = [1, 22];
    var l = [2, 7];
    var c = [1, 26];
    var h = [1, 27];
    var u = [1, 28];
    var y = [1, 29];
    var d = [1, 33];
    var m = [1, 34];
    var E = [1, 35];
    var p = [1, 36];
    var R = [1, 37];
    var _ = [1, 38];
    var f = [1, 24];
    var g = [1, 31];
    var S = [1, 32];
    var I = [1, 30];
    var b = [1, 39];
    var T = [1, 40];
    var k = [5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 77, 89, 90];
    var N = [1, 61];
    var q = [89, 90];
    var v = [5, 8, 9, 11, 13, 21, 22, 23, 24, 27, 29, 41, 42, 43, 44, 45, 46, 54, 61, 63, 72, 74, 75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
    var A = [27, 29];
    var C = [1, 70];
    var L = [1, 71];
    var x = [1, 72];
    var D = [1, 73];
    var O = [1, 74];
    var w = [1, 75];
    var M = [1, 76];
    var $ = [1, 83];
    var F = [1, 80];
    var P = [1, 84];
    var W = [1, 85];
    var V = [1, 86];
    var U = [1, 87];
    var Y = [1, 88];
    var B = [1, 89];
    var H = [1, 90];
    var Q = [1, 91];
    var K = [1, 92];
    var j = [5, 8, 9, 11, 13, 21, 22, 23, 24, 27, 41, 42, 43, 44, 45, 46, 54, 72, 74, 75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
    var G = [63, 64];
    var z = [1, 101];
    var X = [5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 76, 77, 89, 90];
    var Z = [5, 8, 9, 11, 13, 21, 22, 23, 24, 41, 42, 43, 44, 45, 46, 54, 72, 74, 75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
    var J = [1, 110];
    var ee = [1, 106];
    var et = [1, 107];
    var es = [1, 108];
    var ei = [1, 109];
    var en = [1, 111];
    var er = [1, 116];
    var ea = [1, 117];
    var el = [1, 114];
    var ec = [1, 115];
    var eo = {
      trace: loggerLevelUtils.setFunctionName(function () {}, "trace"),
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
      performAction: loggerLevelUtils.setFunctionName(function (e, t, s, i, n, r, a) {
        var l = r.length - 1;
        switch (n) {
          case 4:
            this.$ = r[l].trim();
            i.setAccTitle(this.$);
            break;
          case 5:
          case 6:
            this.$ = r[l].trim();
            i.setAccDescription(this.$);
            break;
          case 7:
            this.$ = [];
            break;
          case 17:
            i.setDirection("TB");
            break;
          case 18:
            i.setDirection("BT");
            break;
          case 19:
            i.setDirection("RL");
            break;
          case 20:
            i.setDirection("LR");
            break;
          case 21:
            i.addRequirement(r[l - 3], r[l - 4]);
            break;
          case 22:
            i.addRequirement(r[l - 5], r[l - 6]);
            i.setClass([r[l - 5]], r[l - 3]);
            break;
          case 23:
            i.setNewReqId(r[l - 2]);
            break;
          case 24:
            i.setNewReqText(r[l - 2]);
            break;
          case 25:
            i.setNewReqRisk(r[l - 2]);
            break;
          case 26:
            i.setNewReqVerifyMethod(r[l - 2]);
            break;
          case 29:
            this.$ = i.RequirementType.REQUIREMENT;
            break;
          case 30:
            this.$ = i.RequirementType.FUNCTIONAL_REQUIREMENT;
            break;
          case 31:
            this.$ = i.RequirementType.INTERFACE_REQUIREMENT;
            break;
          case 32:
            this.$ = i.RequirementType.PERFORMANCE_REQUIREMENT;
            break;
          case 33:
            this.$ = i.RequirementType.PHYSICAL_REQUIREMENT;
            break;
          case 34:
            this.$ = i.RequirementType.DESIGN_CONSTRAINT;
            break;
          case 35:
            this.$ = i.RiskLevel.LOW_RISK;
            break;
          case 36:
            this.$ = i.RiskLevel.MED_RISK;
            break;
          case 37:
            this.$ = i.RiskLevel.HIGH_RISK;
            break;
          case 38:
            this.$ = i.VerifyType.VERIFY_ANALYSIS;
            break;
          case 39:
            this.$ = i.VerifyType.VERIFY_DEMONSTRATION;
            break;
          case 40:
            this.$ = i.VerifyType.VERIFY_INSPECTION;
            break;
          case 41:
            this.$ = i.VerifyType.VERIFY_TEST;
            break;
          case 42:
            i.addElement(r[l - 3]);
            break;
          case 43:
            i.addElement(r[l - 5]);
            i.setClass([r[l - 5]], r[l - 3]);
            break;
          case 44:
            i.setNewElementType(r[l - 2]);
            break;
          case 45:
            i.setNewElementDocRef(r[l - 2]);
            break;
          case 48:
            i.addRelationship(r[l - 2], r[l], r[l - 4]);
            break;
          case 49:
            i.addRelationship(r[l - 2], r[l - 4], r[l]);
            break;
          case 50:
            this.$ = i.Relationships.CONTAINS;
            break;
          case 51:
            this.$ = i.Relationships.COPIES;
            break;
          case 52:
            this.$ = i.Relationships.DERIVES;
            break;
          case 53:
            this.$ = i.Relationships.SATISFIES;
            break;
          case 54:
            this.$ = i.Relationships.VERIFIES;
            break;
          case 55:
            this.$ = i.Relationships.REFINES;
            break;
          case 56:
            this.$ = i.Relationships.TRACES;
            break;
          case 57:
            this.$ = r[l - 2];
            i.defineClass(r[l - 1], r[l]);
            break;
          case 58:
            i.setClass(r[l - 1], r[l]);
            break;
          case 59:
            i.setClass([r[l - 2]], r[l]);
            break;
          case 60:
          case 62:
          case 65:
            this.$ = [r[l]];
            break;
          case 61:
          case 63:
            this.$ = r[l - 2].concat([r[l]]);
            break;
          case 64:
            this.$ = r[l - 2];
            i.setCssStyle(r[l - 1], r[l]);
            break;
          case 66:
            r[l - 2].push(r[l]);
            this.$ = r[l - 2];
            break;
          case 68:
            this.$ = r[l - 1] + r[l];
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: 2,
        6: t,
        9: s,
        11: i,
        13: n
      }, {
        1: [3]
      }, {
        3: 8,
        4: 2,
        5: [1, 7],
        6: t,
        9: s,
        11: i,
        13: n
      }, {
        5: [1, 9]
      }, {
        10: [1, 10]
      }, {
        12: [1, 11]
      }, e(r, [2, 6]), {
        3: 12,
        4: 2,
        6: t,
        9: s,
        11: i,
        13: n
      }, {
        1: [2, 2]
      }, {
        4: 17,
        5: a,
        7: 13,
        8: l,
        9: s,
        11: i,
        13: n,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: u,
        24: y,
        25: 23,
        33: 25,
        41: d,
        42: m,
        43: E,
        44: p,
        45: R,
        46: _,
        54: f,
        72: g,
        74: S,
        77: I,
        89: b,
        90: T
      }, e(r, [2, 4]), e(r, [2, 5]), {
        1: [2, 1]
      }, {
        8: [1, 41]
      }, {
        4: 17,
        5: a,
        7: 42,
        8: l,
        9: s,
        11: i,
        13: n,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: u,
        24: y,
        25: 23,
        33: 25,
        41: d,
        42: m,
        43: E,
        44: p,
        45: R,
        46: _,
        54: f,
        72: g,
        74: S,
        77: I,
        89: b,
        90: T
      }, {
        4: 17,
        5: a,
        7: 43,
        8: l,
        9: s,
        11: i,
        13: n,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: u,
        24: y,
        25: 23,
        33: 25,
        41: d,
        42: m,
        43: E,
        44: p,
        45: R,
        46: _,
        54: f,
        72: g,
        74: S,
        77: I,
        89: b,
        90: T
      }, {
        4: 17,
        5: a,
        7: 44,
        8: l,
        9: s,
        11: i,
        13: n,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: u,
        24: y,
        25: 23,
        33: 25,
        41: d,
        42: m,
        43: E,
        44: p,
        45: R,
        46: _,
        54: f,
        72: g,
        74: S,
        77: I,
        89: b,
        90: T
      }, {
        4: 17,
        5: a,
        7: 45,
        8: l,
        9: s,
        11: i,
        13: n,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: u,
        24: y,
        25: 23,
        33: 25,
        41: d,
        42: m,
        43: E,
        44: p,
        45: R,
        46: _,
        54: f,
        72: g,
        74: S,
        77: I,
        89: b,
        90: T
      }, {
        4: 17,
        5: a,
        7: 46,
        8: l,
        9: s,
        11: i,
        13: n,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: u,
        24: y,
        25: 23,
        33: 25,
        41: d,
        42: m,
        43: E,
        44: p,
        45: R,
        46: _,
        54: f,
        72: g,
        74: S,
        77: I,
        89: b,
        90: T
      }, {
        4: 17,
        5: a,
        7: 47,
        8: l,
        9: s,
        11: i,
        13: n,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: u,
        24: y,
        25: 23,
        33: 25,
        41: d,
        42: m,
        43: E,
        44: p,
        45: R,
        46: _,
        54: f,
        72: g,
        74: S,
        77: I,
        89: b,
        90: T
      }, {
        4: 17,
        5: a,
        7: 48,
        8: l,
        9: s,
        11: i,
        13: n,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: u,
        24: y,
        25: 23,
        33: 25,
        41: d,
        42: m,
        43: E,
        44: p,
        45: R,
        46: _,
        54: f,
        72: g,
        74: S,
        77: I,
        89: b,
        90: T
      }, {
        4: 17,
        5: a,
        7: 49,
        8: l,
        9: s,
        11: i,
        13: n,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: u,
        24: y,
        25: 23,
        33: 25,
        41: d,
        42: m,
        43: E,
        44: p,
        45: R,
        46: _,
        54: f,
        72: g,
        74: S,
        77: I,
        89: b,
        90: T
      }, {
        4: 17,
        5: a,
        7: 50,
        8: l,
        9: s,
        11: i,
        13: n,
        14: 14,
        15: 15,
        16: 16,
        17: 18,
        18: 19,
        19: 20,
        20: 21,
        21: c,
        22: h,
        23: u,
        24: y,
        25: 23,
        33: 25,
        41: d,
        42: m,
        43: E,
        44: p,
        45: R,
        46: _,
        54: f,
        72: g,
        74: S,
        77: I,
        89: b,
        90: T
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
      }, e(k, [2, 17]), e(k, [2, 18]), e(k, [2, 19]), e(k, [2, 20]), {
        30: 60,
        33: 62,
        75: N,
        89: b,
        90: T
      }, {
        30: 63,
        33: 62,
        75: N,
        89: b,
        90: T
      }, {
        30: 64,
        33: 62,
        75: N,
        89: b,
        90: T
      }, e(q, [2, 29]), e(q, [2, 30]), e(q, [2, 31]), e(q, [2, 32]), e(q, [2, 33]), e(q, [2, 34]), e(v, [2, 81]), e(v, [2, 82]), {
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
      }, e(A, [2, 79]), e(A, [2, 80]), {
        27: [1, 67],
        29: [1, 68]
      }, e(A, [2, 85]), e(A, [2, 86]), {
        62: 69,
        65: C,
        66: L,
        67: x,
        68: D,
        69: O,
        70: w,
        71: M
      }, {
        62: 77,
        65: C,
        66: L,
        67: x,
        68: D,
        69: O,
        70: w,
        71: M
      }, {
        30: 78,
        33: 62,
        75: N,
        89: b,
        90: T
      }, {
        73: 79,
        75: $,
        76: F,
        78: 81,
        79: 82,
        80: P,
        81: W,
        82: V,
        83: U,
        84: Y,
        85: B,
        86: H,
        87: Q,
        88: K
      }, e(j, [2, 60]), e(j, [2, 62]), {
        73: 93,
        75: $,
        76: F,
        78: 81,
        79: 82,
        80: P,
        81: W,
        82: V,
        83: U,
        84: Y,
        85: B,
        86: H,
        87: Q,
        88: K
      }, {
        30: 94,
        33: 62,
        75: N,
        76: F,
        89: b,
        90: T
      }, {
        5: [1, 95]
      }, {
        30: 96,
        33: 62,
        75: N,
        89: b,
        90: T
      }, {
        5: [1, 97]
      }, {
        30: 98,
        33: 62,
        75: N,
        89: b,
        90: T
      }, {
        63: [1, 99]
      }, e(G, [2, 50]), e(G, [2, 51]), e(G, [2, 52]), e(G, [2, 53]), e(G, [2, 54]), e(G, [2, 55]), e(G, [2, 56]), {
        64: [1, 100]
      }, e(k, [2, 59], {
        76: F
      }), e(k, [2, 64], {
        76: z
      }), {
        33: 103,
        75: [1, 102],
        89: b,
        90: T
      }, e(X, [2, 65], {
        79: 104,
        75: $,
        80: P,
        81: W,
        82: V,
        83: U,
        84: Y,
        85: B,
        86: H,
        87: Q,
        88: K
      }), e(Z, [2, 67]), e(Z, [2, 69]), e(Z, [2, 70]), e(Z, [2, 71]), e(Z, [2, 72]), e(Z, [2, 73]), e(Z, [2, 74]), e(Z, [2, 75]), e(Z, [2, 76]), e(Z, [2, 77]), e(Z, [2, 78]), e(k, [2, 57], {
        76: z
      }), e(k, [2, 58], {
        76: F
      }), {
        5: J,
        28: 105,
        31: ee,
        34: et,
        36: es,
        38: ei,
        40: en
      }, {
        27: [1, 112],
        76: F
      }, {
        5: er,
        40: ea,
        56: 113,
        57: el,
        59: ec
      }, {
        27: [1, 118],
        76: F
      }, {
        33: 119,
        89: b,
        90: T
      }, {
        33: 120,
        89: b,
        90: T
      }, {
        75: $,
        78: 121,
        79: 82,
        80: P,
        81: W,
        82: V,
        83: U,
        84: Y,
        85: B,
        86: H,
        87: Q,
        88: K
      }, e(j, [2, 61]), e(j, [2, 63]), e(Z, [2, 68]), e(k, [2, 21]), {
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
        31: ee,
        34: et,
        36: es,
        38: ei,
        40: en
      }, e(k, [2, 28]), {
        5: [1, 127]
      }, e(k, [2, 42]), {
        32: [1, 128]
      }, {
        32: [1, 129]
      }, {
        5: er,
        40: ea,
        56: 130,
        57: el,
        59: ec
      }, e(k, [2, 47]), {
        5: [1, 131]
      }, e(k, [2, 48]), e(k, [2, 49]), e(X, [2, 66], {
        79: 104,
        75: $,
        80: P,
        81: W,
        82: V,
        83: U,
        84: Y,
        85: B,
        86: H,
        87: Q,
        88: K
      }), {
        33: 132,
        89: b,
        90: T
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
      }, e(k, [2, 27]), {
        5: J,
        28: 145,
        31: ee,
        34: et,
        36: es,
        38: ei,
        40: en
      }, {
        58: 146,
        89: [1, 147],
        90: [1, 148]
      }, {
        60: 149,
        89: [1, 150],
        90: [1, 151]
      }, e(k, [2, 46]), {
        5: er,
        40: ea,
        56: 152,
        57: el,
        59: ec
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
      }, e(k, [2, 22]), {
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
      }, e(k, [2, 43]), {
        5: J,
        28: 159,
        31: ee,
        34: et,
        36: es,
        38: ei,
        40: en
      }, {
        5: J,
        28: 160,
        31: ee,
        34: et,
        36: es,
        38: ei,
        40: en
      }, {
        5: J,
        28: 161,
        31: ee,
        34: et,
        36: es,
        38: ei,
        40: en
      }, {
        5: J,
        28: 162,
        31: ee,
        34: et,
        36: es,
        38: ei,
        40: en
      }, {
        5: er,
        40: ea,
        56: 163,
        57: el,
        59: ec
      }, {
        5: er,
        40: ea,
        56: 164,
        57: el,
        59: ec
      }, e(k, [2, 23]), e(k, [2, 24]), e(k, [2, 25]), e(k, [2, 26]), e(k, [2, 44]), e(k, [2, 45])],
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
        var r = [];
        var a = this.table;
        var l = "";
        var c = 0;
        var h = 0;
        var u = 0;
        var y = r.slice.call(arguments, 1);
        var d = Object.create(this.lexer);
        var m = {
          yy: {}
        };
        for (var E in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, E)) {
            m.yy[E] = this.yy[E];
          }
        }
        d.setInput(e, m.yy);
        m.yy.lexer = d;
        m.yy.parser = this;
        if (d.yylloc === undefined) {
          d.yylloc = {};
        }
        var p = d.yylloc;
        r.push(p);
        var R = d.options && d.options.ranges;
        function _() {
          var e;
          if (typeof (e = i.pop() || d.lex() || 1) != "number") {
            if (e instanceof Array) {
              e = (i = e).pop();
            }
            e = t.symbols_[e] || e;
          }
          return e;
        }
        if (typeof m.yy.parseError == "function") {
          this.parseError = m.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        loggerLevelUtils.setFunctionName(function (e) {
          s.length = s.length - e * 2;
          n.length = n.length - e;
          r.length = r.length - e;
        }, "popStack");
        loggerLevelUtils.setFunctionName(_, "lex");
        var f;
        var g;
        var S;
        var I;
        var b;
        var T;
        var k;
        var N;
        var q;
        var v = {};
        while (true) {
          S = s[s.length - 1];
          if (this.defaultActions[S]) {
            I = this.defaultActions[S];
          } else {
            if (f == null) {
              f = _();
            }
            I = a[S] && a[S][f];
          }
          if (I === undefined || !I.length || !I[0]) {
            var A = "";
            q = [];
            for (T in a[S]) {
              if (this.terminals_[T] && T > 2) {
                q.push("'" + this.terminals_[T] + "'");
              }
            }
            A = d.showPosition ? "Parse error on line " + (c + 1) + ":\n" + d.showPosition() + "\nExpecting " + q.join(", ") + ", got '" + (this.terminals_[f] || f) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (f == 1 ? "end of input" : "'" + (this.terminals_[f] || f) + "'");
            this.parseError(A, {
              text: d.match,
              token: this.terminals_[f] || f,
              line: d.yylineno,
              loc: p,
              expected: q
            });
          }
          if (I[0] instanceof Array && I.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + S + ", token: " + f);
          }
          switch (I[0]) {
            case 1:
              s.push(f);
              n.push(d.yytext);
              r.push(d.yylloc);
              s.push(I[1]);
              f = null;
              if (g) {
                f = g;
                g = null;
              } else {
                h = d.yyleng;
                l = d.yytext;
                c = d.yylineno;
                p = d.yylloc;
                if (u > 0) {
                  u--;
                }
              }
              break;
            case 2:
              k = this.productions_[I[1]][1];
              v.$ = n[n.length - k];
              v._$ = {
                first_line: r[r.length - (k || 1)].first_line,
                last_line: r[r.length - 1].last_line,
                first_column: r[r.length - (k || 1)].first_column,
                last_column: r[r.length - 1].last_column
              };
              if (R) {
                v._$.range = [r[r.length - (k || 1)].range[0], r[r.length - 1].range[1]];
              }
              if ((b = this.performAction.apply(v, [l, h, c, m.yy, I[1], n, r].concat(y))) !== undefined) {
                return b;
              }
              if (k) {
                s = s.slice(0, k * -1 * 2);
                n = n.slice(0, k * -1);
                r = r.slice(0, k * -1);
              }
              s.push(this.productions_[I[1]][0]);
              n.push(v.$);
              r.push(v._$);
              N = a[s[s.length - 2]][s[s.length - 1]];
              s.push(N);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var eh = {
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
        var e;
        var t;
        var s;
        var i;
        var n = this._currentRules();
        var r = 0;
        for (; r < n.length; r++) {
          if ((s = this._input.match(this.rules[n[r]])) && (!t || s[0].length > t[0].length)) {
            t = s;
            i = r;
            if (this.options.backtrack_lexer) {
              if ((e = this.test_match(s, n[r])) !== false) {
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
      options: {
        "case-insensitive": true
      },
      performAction: loggerLevelUtils.setFunctionName(function (e, t, s, i) {
        switch (s) {
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
            t.yytext = t.yytext.trim();
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
    function eu() {
      this.yy = {};
    }
    eo.lexer = eh;
    loggerLevelUtils.setFunctionName(eu, "Parser");
    eu.prototype = eo;
    eo.Parser = eu;
    return new eu();
  }();
  h.parser = h;
  i = class {
    getDirection() {
      return this.direction;
    }
    setDirection(e) {
      this.direction = e;
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
    addRequirement(e, t) {
      if (!this.requirements.has(e)) {
        this.requirements.set(e, {
          name: e,
          type: t,
          requirementId: this.latestRequirement.requirementId,
          text: this.latestRequirement.text,
          risk: this.latestRequirement.risk,
          verifyMethod: this.latestRequirement.verifyMethod,
          cssStyles: [],
          classes: ["default"]
        });
      }
      this.resetLatestRequirement();
      return this.requirements.get(e);
    }
    getRequirements() {
      return this.requirements;
    }
    setNewReqId(e) {
      if (this.latestRequirement !== undefined) {
        this.latestRequirement.requirementId = e;
      }
    }
    setNewReqText(e) {
      if (this.latestRequirement !== undefined) {
        this.latestRequirement.text = e;
      }
    }
    setNewReqRisk(e) {
      if (this.latestRequirement !== undefined) {
        this.latestRequirement.risk = e;
      }
    }
    setNewReqVerifyMethod(e) {
      if (this.latestRequirement !== undefined) {
        this.latestRequirement.verifyMethod = e;
      }
    }
    addElement(e) {
      if (!this.elements.has(e)) {
        this.elements.set(e, {
          name: e,
          type: this.latestElement.type,
          docRef: this.latestElement.docRef,
          cssStyles: [],
          classes: ["default"]
        });
        loggerLevelUtils.logger.info("Added new element: ", e);
      }
      this.resetLatestElement();
      return this.elements.get(e);
    }
    getElements() {
      return this.elements;
    }
    setNewElementType(e) {
      if (this.latestElement !== undefined) {
        this.latestElement.type = e;
      }
    }
    setNewElementDocRef(e) {
      if (this.latestElement !== undefined) {
        this.latestElement.docRef = e;
      }
    }
    addRelationship(e, t, s) {
      this.relations.push({
        type: e,
        src: t,
        dst: s
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
      mermaidConfigUtils_1.clearCommonDb();
    }
    setCssStyle(e, t) {
      for (let i of e) {
        let e = this.requirements.get(i) ?? this.elements.get(i);
        if (!t || !e) {
          return;
        }
        for (let s of t) {
          if (s.includes(",")) {
            e.cssStyles.push(...s.split(","));
          } else {
            e.cssStyles.push(s);
          }
        }
      }
    }
    setClass(e, t) {
      for (let n of e) {
        let e = this.requirements.get(n) ?? this.elements.get(n);
        if (e) {
          for (let s of t) {
            e.classes.push(s);
            let t = this.classes.get(s)?.styles;
            if (t) {
              e.cssStyles.push(...t);
            }
          }
        }
      }
    }
    defineClass(e, t) {
      for (let s of e) {
        let e = this.classes.get(s);
        if (e === undefined) {
          e = {
            id: s,
            styles: [],
            textStyles: []
          };
          this.classes.set(s, e);
        }
        if (t) {
          t.forEach(function (t) {
            if (/color/.exec(t)) {
              let s = t.replace("fill", "bgFill");
              e.textStyles.push(s);
            }
            e.styles.push(t);
          });
        }
        this.requirements.forEach(e => {
          if (e.classes.includes(s)) {
            e.cssStyles.push(...t.flatMap(e => e.split(",")));
          }
        });
        this.elements.forEach(e => {
          if (e.classes.includes(s)) {
            e.cssStyles.push(...t.flatMap(e => e.split(",")));
          }
        });
      }
    }
    getClasses() {
      return this.classes;
    }
    getData() {
      let e = mermaidConfigUtils_1.getConfigAlias();
      let t = [];
      let s = [];
      for (let s of this.requirements.values()) {
        s.id = s.name;
        s.cssStyles = s.cssStyles;
        s.cssClasses = s.classes.join(" ");
        s.shape = "requirementBox";
        s.look = e.look;
        t.push(s);
      }
      for (let s of this.elements.values()) {
        s.shape = "requirementBox";
        s.look = e.look;
        s.id = s.name;
        s.cssStyles = s.cssStyles;
        s.cssClasses = s.classes.join(" ");
        t.push(s);
      }
      for (let t of this.relations) {
        let c = 0;
        let h = t.type === this.Relationships.CONTAINS;
        let u = {
          id: `${t.src}-${t.dst}-${c}`,
          start: this.requirements.get(t.src)?.name ?? this.elements.get(t.src)?.name,
          end: this.requirements.get(t.dst)?.name ?? this.elements.get(t.dst)?.name,
          label: `&lt;&lt;${t.type}&gt;&gt;`,
          classes: "relationshipLine",
          style: ["fill:none", h ? "" : "stroke-dasharray: 10,7"],
          labelpos: "c",
          thickness: "normal",
          type: "normal",
          pattern: h ? "normal" : "dashed",
          arrowTypeStart: h ? "requirement_contains" : "",
          arrowTypeEnd: h ? "" : "requirement_arrow",
          look: e.look
        };
        s.push(u);
        c++;
      }
      return {
        nodes: t,
        edges: s,
        other: {},
        config: e,
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
      this.setAccTitle = mermaidConfigUtils_1.setAccTitle;
      this.getAccTitle = mermaidConfigUtils_1.getAccTitle;
      this.setAccDescription = mermaidConfigUtils_1.setAccDescription;
      this.getAccDescription = mermaidConfigUtils_1.getAccDescription;
      this.setDiagramTitle = mermaidConfigUtils_1.setDiagramTitle;
      this.getDiagramTitle = mermaidConfigUtils_1.getDiagramTitle;
      this.getConfig = loggerLevelUtils.setFunctionName(() => mermaidConfigUtils_1.getConfigAlias().requirement, "getConfig");
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
  loggerLevelUtils.setFunctionName(i, "RequirementDB");
  var u = i;
  var y = loggerLevelUtils.setFunctionName(e => `

  marker {
    fill: ${e.relationColor};
    stroke: ${e.relationColor};
  }

  marker.cross {
    stroke: ${e.lineColor};
  }

  svg {
    font-family: ${e.fontFamily};
    font-size: ${e.fontSize};
  }

  .reqBox {
    fill: ${e.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${e.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${e.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${e.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${e.relationLabelColor};
  }
  .divider {
    stroke: ${e.nodeBorder};
    stroke-width: 1;
  }
  .label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .label text,span {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }
  .labelBkg {
    background-color: ${e.edgeLabelBackground};
  }

`, "getStyles");
  var d = {};
  loggerLevelUtils.defineProperties(d, {
    draw: () => m
  });
  var m = loggerLevelUtils.setFunctionName(async function (e, t, s, i) {
    var d;
    loggerLevelUtils.logger.info("REF0:");
    loggerLevelUtils.logger.info("Drawing requirement diagram (unified)", t);
    let {
      securityLevel: m,
      state: E,
      layout: p
    } = mermaidConfigUtils_1.getConfigAlias();
    let R = i.db.getData();
    let _ = diagramElementSelector.getDiagramElement(t, m);
    R.type = i.type;
    R.layoutAlgorithm = mermaidLayoutRegistryRenderer.getRegisteredLayoutAlgorithm(p);
    R.nodeSpacing = (E == null ? undefined : E.nodeSpacing) ?? 50;
    R.rankSpacing = (E == null ? undefined : E.rankSpacing) ?? 50;
    R.markers = ["requirement_contains", "requirement_arrow"];
    R.diagramId = t;
    await mermaidLayoutRegistryRenderer.render(R, _);
    mermaidDiagramUtils.mermaidUtils.insertTitle(_, "requirementDiagramTitleText", (E == null ? undefined : E.titleTopMargin) ?? 25, i.db.getDiagramTitle());
    mermaidSvgViewportSetup.setupViewPortForSvg(_, 8, "requirementDiagram", (d = E == null ? undefined : E.useMaxWidth) === null || d === undefined || d);
  }, "draw");
  var E = {
    parser: h,
    get db() {
      return new u();
    },
    renderer: d,
    styles: y
  };
  require.d(exports, {
    diagram: function () {
      return E;
    }
  });
}