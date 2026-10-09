// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'mermaidShapeDrawingUtils'
// - Resolved require(621602) to 'mermaid-shape-drawing-utils'
// - Renamed variable 'l' to 'mermaidDiagramUtils'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'o' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'h' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'd' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Renamed variable 'u' to 'urlSanitizer'
// - Resolved require(568747) to 'url-sanitizer'
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'oO' to 'sanitizeText' (module 401926)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'GN' to 'setAccTitle' (module 401926)
// - Updated imported property 'eu' to 'getAccTitle' (module 401926)
// - Updated imported property 'Mx' to 'getAccDescription' (module 401926)
// - Updated imported property 'U$' to 'setAccDescription' (module 401926)
// - Updated imported property 'SY' to 'textUtilities' (module 401926)
// - Updated imported property 'Yc' to 'assignWithDepth' (module 401926)
// - Updated imported property 'v2' to 'configureSvgSize' (module 401926)
// - Updated imported property 'Mu' to 'drawRect' (module 621602)
// - Updated imported property 'kc' to 'getNoteRect' (module 621602)
// - Updated imported property 'X4' to 'wrapLabel' (module 583673)
// - Updated imported property 'XD' to 'calcTextHeight' (module 583673)
// - Updated imported property 'Cq' to 'calcTextWidth' (module 583673)
// - Updated imported property 'Ys' to 'select' (module 381804)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 1902.4e4bc0b1.js
         * chunkId: 1902
         * moduleId: 563322
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var r;
  var mermaidShapeDrawingUtils = require("mermaid-shape-drawing-utils") /*id: 621602*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var urlSanitizer = require("url-sanitizer") /*id: 568747*/;
  var p = function () {
    var t = loggerLevelUtils.setFunctionName(function (t, e, a, n) {
      a = a || {};
      n = t.length;
      for (; n--; a[t[n]] = e);
      return a;
    }, "o");
    var e = [1, 24];
    var a = [1, 25];
    var n = [1, 26];
    var i = [1, 27];
    var r = [1, 28];
    var s = [1, 63];
    var l = [1, 64];
    var o = [1, 65];
    var d = [1, 66];
    var u = [1, 67];
    var p = [1, 68];
    var y = [1, 69];
    var f = [1, 29];
    var g = [1, 30];
    var b = [1, 31];
    var x = [1, 32];
    var _ = [1, 33];
    var m = [1, 34];
    var E = [1, 35];
    var A = [1, 36];
    var S = [1, 37];
    var C = [1, 38];
    var O = [1, 39];
    var k = [1, 40];
    var w = [1, 41];
    var T = [1, 42];
    var v = [1, 43];
    var R = [1, 44];
    var D = [1, 45];
    var N = [1, 46];
    var W = [1, 47];
    var P = [1, 48];
    var M = [1, 50];
    var B = [1, 51];
    var j = [1, 52];
    var Y = [1, 53];
    var L = [1, 54];
    var I = [1, 55];
    var U = [1, 56];
    var F = [1, 57];
    var X = [1, 58];
    var z = [1, 59];
    var Q = [1, 60];
    var $ = [14, 42];
    var q = [14, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
    var V = [12, 14, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
    var H = [1, 82];
    var G = [1, 83];
    var K = [1, 84];
    var J = [1, 85];
    var Z = [12, 14, 42];
    var tt = [12, 14, 33, 42];
    var te = [12, 14, 33, 42, 76, 77, 79, 80];
    var ta = [12, 33];
    var tn = [34, 36, 37, 38, 39, 40, 41, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
    var ti = {
      trace: loggerLevelUtils.setFunctionName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        mermaidDoc: 4,
        direction: 5,
        direction_tb: 6,
        direction_bt: 7,
        direction_rl: 8,
        direction_lr: 9,
        graphConfig: 10,
        C4_CONTEXT: 11,
        NEWLINE: 12,
        statements: 13,
        EOF: 14,
        C4_CONTAINER: 15,
        C4_COMPONENT: 16,
        C4_DYNAMIC: 17,
        C4_DEPLOYMENT: 18,
        otherStatements: 19,
        diagramStatements: 20,
        otherStatement: 21,
        title: 22,
        accDescription: 23,
        acc_title: 24,
        acc_title_value: 25,
        acc_descr: 26,
        acc_descr_value: 27,
        acc_descr_multiline_value: 28,
        boundaryStatement: 29,
        boundaryStartStatement: 30,
        boundaryStopStatement: 31,
        boundaryStart: 32,
        LBRACE: 33,
        ENTERPRISE_BOUNDARY: 34,
        attributes: 35,
        SYSTEM_BOUNDARY: 36,
        BOUNDARY: 37,
        CONTAINER_BOUNDARY: 38,
        NODE: 39,
        NODE_L: 40,
        NODE_R: 41,
        RBRACE: 42,
        diagramStatement: 43,
        PERSON: 44,
        PERSON_EXT: 45,
        SYSTEM: 46,
        SYSTEM_DB: 47,
        SYSTEM_QUEUE: 48,
        SYSTEM_EXT: 49,
        SYSTEM_EXT_DB: 50,
        SYSTEM_EXT_QUEUE: 51,
        CONTAINER: 52,
        CONTAINER_DB: 53,
        CONTAINER_QUEUE: 54,
        CONTAINER_EXT: 55,
        CONTAINER_EXT_DB: 56,
        CONTAINER_EXT_QUEUE: 57,
        COMPONENT: 58,
        COMPONENT_DB: 59,
        COMPONENT_QUEUE: 60,
        COMPONENT_EXT: 61,
        COMPONENT_EXT_DB: 62,
        COMPONENT_EXT_QUEUE: 63,
        REL: 64,
        BIREL: 65,
        REL_U: 66,
        REL_D: 67,
        REL_L: 68,
        REL_R: 69,
        REL_B: 70,
        REL_INDEX: 71,
        UPDATE_EL_STYLE: 72,
        UPDATE_REL_STYLE: 73,
        UPDATE_LAYOUT_CONFIG: 74,
        attribute: 75,
        STR: 76,
        STR_KEY: 77,
        STR_VALUE: 78,
        ATTRIBUTE: 79,
        ATTRIBUTE_EMPTY: 80,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        6: "direction_tb",
        7: "direction_bt",
        8: "direction_rl",
        9: "direction_lr",
        11: "C4_CONTEXT",
        12: "NEWLINE",
        14: "EOF",
        15: "C4_CONTAINER",
        16: "C4_COMPONENT",
        17: "C4_DYNAMIC",
        18: "C4_DEPLOYMENT",
        22: "title",
        23: "accDescription",
        24: "acc_title",
        25: "acc_title_value",
        26: "acc_descr",
        27: "acc_descr_value",
        28: "acc_descr_multiline_value",
        33: "LBRACE",
        34: "ENTERPRISE_BOUNDARY",
        36: "SYSTEM_BOUNDARY",
        37: "BOUNDARY",
        38: "CONTAINER_BOUNDARY",
        39: "NODE",
        40: "NODE_L",
        41: "NODE_R",
        42: "RBRACE",
        44: "PERSON",
        45: "PERSON_EXT",
        46: "SYSTEM",
        47: "SYSTEM_DB",
        48: "SYSTEM_QUEUE",
        49: "SYSTEM_EXT",
        50: "SYSTEM_EXT_DB",
        51: "SYSTEM_EXT_QUEUE",
        52: "CONTAINER",
        53: "CONTAINER_DB",
        54: "CONTAINER_QUEUE",
        55: "CONTAINER_EXT",
        56: "CONTAINER_EXT_DB",
        57: "CONTAINER_EXT_QUEUE",
        58: "COMPONENT",
        59: "COMPONENT_DB",
        60: "COMPONENT_QUEUE",
        61: "COMPONENT_EXT",
        62: "COMPONENT_EXT_DB",
        63: "COMPONENT_EXT_QUEUE",
        64: "REL",
        65: "BIREL",
        66: "REL_U",
        67: "REL_D",
        68: "REL_L",
        69: "REL_R",
        70: "REL_B",
        71: "REL_INDEX",
        72: "UPDATE_EL_STYLE",
        73: "UPDATE_REL_STYLE",
        74: "UPDATE_LAYOUT_CONFIG",
        76: "STR",
        77: "STR_KEY",
        78: "STR_VALUE",
        79: "ATTRIBUTE",
        80: "ATTRIBUTE_EMPTY"
      },
      productions_: [0, [3, 1], [3, 1], [5, 1], [5, 1], [5, 1], [5, 1], [4, 1], [10, 4], [10, 4], [10, 4], [10, 4], [10, 4], [13, 1], [13, 1], [13, 2], [19, 1], [19, 2], [19, 3], [21, 1], [21, 1], [21, 2], [21, 2], [21, 1], [29, 3], [30, 3], [30, 3], [30, 4], [32, 2], [32, 2], [32, 2], [32, 2], [32, 2], [32, 2], [32, 2], [31, 1], [20, 1], [20, 2], [20, 3], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 1], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [43, 2], [35, 1], [35, 2], [75, 1], [75, 2], [75, 1], [75, 1]],
      performAction: loggerLevelUtils.setFunctionName(function (t, e, a, n, i, r, s) {
        var l = r.length - 1;
        switch (i) {
          case 3:
            n.setDirection("TB");
            break;
          case 4:
            n.setDirection("BT");
            break;
          case 5:
            n.setDirection("RL");
            break;
          case 6:
            n.setDirection("LR");
            break;
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
            n.setC4Type(r[l - 3]);
            break;
          case 19:
            n.setTitle(r[l].substring(6));
            this.$ = r[l].substring(6);
            break;
          case 20:
            n.setAccDescription(r[l].substring(15));
            this.$ = r[l].substring(15);
            break;
          case 21:
            this.$ = r[l].trim();
            n.setTitle(this.$);
            break;
          case 22:
          case 23:
            this.$ = r[l].trim();
            n.setAccDescription(this.$);
            break;
          case 28:
            r[l].splice(2, 0, "ENTERPRISE");
            n.addPersonOrSystemBoundary(...r[l]);
            this.$ = r[l];
            break;
          case 29:
            r[l].splice(2, 0, "SYSTEM");
            n.addPersonOrSystemBoundary(...r[l]);
            this.$ = r[l];
            break;
          case 30:
            n.addPersonOrSystemBoundary(...r[l]);
            this.$ = r[l];
            break;
          case 31:
            r[l].splice(2, 0, "CONTAINER");
            n.addContainerBoundary(...r[l]);
            this.$ = r[l];
            break;
          case 32:
            n.addDeploymentNode("node", ...r[l]);
            this.$ = r[l];
            break;
          case 33:
            n.addDeploymentNode("nodeL", ...r[l]);
            this.$ = r[l];
            break;
          case 34:
            n.addDeploymentNode("nodeR", ...r[l]);
            this.$ = r[l];
            break;
          case 35:
            n.popBoundaryParseStack();
            break;
          case 39:
            n.addPersonOrSystem("person", ...r[l]);
            this.$ = r[l];
            break;
          case 40:
            n.addPersonOrSystem("external_person", ...r[l]);
            this.$ = r[l];
            break;
          case 41:
            n.addPersonOrSystem("system", ...r[l]);
            this.$ = r[l];
            break;
          case 42:
            n.addPersonOrSystem("system_db", ...r[l]);
            this.$ = r[l];
            break;
          case 43:
            n.addPersonOrSystem("system_queue", ...r[l]);
            this.$ = r[l];
            break;
          case 44:
            n.addPersonOrSystem("external_system", ...r[l]);
            this.$ = r[l];
            break;
          case 45:
            n.addPersonOrSystem("external_system_db", ...r[l]);
            this.$ = r[l];
            break;
          case 46:
            n.addPersonOrSystem("external_system_queue", ...r[l]);
            this.$ = r[l];
            break;
          case 47:
            n.addContainer("container", ...r[l]);
            this.$ = r[l];
            break;
          case 48:
            n.addContainer("container_db", ...r[l]);
            this.$ = r[l];
            break;
          case 49:
            n.addContainer("container_queue", ...r[l]);
            this.$ = r[l];
            break;
          case 50:
            n.addContainer("external_container", ...r[l]);
            this.$ = r[l];
            break;
          case 51:
            n.addContainer("external_container_db", ...r[l]);
            this.$ = r[l];
            break;
          case 52:
            n.addContainer("external_container_queue", ...r[l]);
            this.$ = r[l];
            break;
          case 53:
            n.addComponent("component", ...r[l]);
            this.$ = r[l];
            break;
          case 54:
            n.addComponent("component_db", ...r[l]);
            this.$ = r[l];
            break;
          case 55:
            n.addComponent("component_queue", ...r[l]);
            this.$ = r[l];
            break;
          case 56:
            n.addComponent("external_component", ...r[l]);
            this.$ = r[l];
            break;
          case 57:
            n.addComponent("external_component_db", ...r[l]);
            this.$ = r[l];
            break;
          case 58:
            n.addComponent("external_component_queue", ...r[l]);
            this.$ = r[l];
            break;
          case 60:
            n.addRel("rel", ...r[l]);
            this.$ = r[l];
            break;
          case 61:
            n.addRel("birel", ...r[l]);
            this.$ = r[l];
            break;
          case 62:
            n.addRel("rel_u", ...r[l]);
            this.$ = r[l];
            break;
          case 63:
            n.addRel("rel_d", ...r[l]);
            this.$ = r[l];
            break;
          case 64:
            n.addRel("rel_l", ...r[l]);
            this.$ = r[l];
            break;
          case 65:
            n.addRel("rel_r", ...r[l]);
            this.$ = r[l];
            break;
          case 66:
            n.addRel("rel_b", ...r[l]);
            this.$ = r[l];
            break;
          case 67:
            r[l].splice(0, 1);
            n.addRel("rel", ...r[l]);
            this.$ = r[l];
            break;
          case 68:
            n.updateElStyle("update_el_style", ...r[l]);
            this.$ = r[l];
            break;
          case 69:
            n.updateRelStyle("update_rel_style", ...r[l]);
            this.$ = r[l];
            break;
          case 70:
            n.updateLayoutConfig("update_layout_config", ...r[l]);
            this.$ = r[l];
            break;
          case 71:
            this.$ = [r[l]];
            break;
          case 72:
            r[l].unshift(r[l - 1]);
            this.$ = r[l];
            break;
          case 73:
          case 75:
            this.$ = r[l].trim();
            break;
          case 74:
            let o = {};
            o[r[l - 1].trim()] = r[l].trim();
            this.$ = o;
            break;
          case 76:
            this.$ = "";
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: 2,
        5: 3,
        6: [1, 5],
        7: [1, 6],
        8: [1, 7],
        9: [1, 8],
        10: 4,
        11: [1, 9],
        15: [1, 10],
        16: [1, 11],
        17: [1, 12],
        18: [1, 13]
      }, {
        1: [3]
      }, {
        1: [2, 1]
      }, {
        1: [2, 2]
      }, {
        1: [2, 7]
      }, {
        1: [2, 3]
      }, {
        1: [2, 4]
      }, {
        1: [2, 5]
      }, {
        1: [2, 6]
      }, {
        12: [1, 14]
      }, {
        12: [1, 15]
      }, {
        12: [1, 16]
      }, {
        12: [1, 17]
      }, {
        12: [1, 18]
      }, {
        13: 19,
        19: 20,
        20: 21,
        21: 22,
        22: e,
        23: a,
        24: n,
        26: i,
        28: r,
        29: 49,
        30: 61,
        32: 62,
        34: s,
        36: l,
        37: o,
        38: d,
        39: u,
        40: p,
        41: y,
        43: 23,
        44: f,
        45: g,
        46: b,
        47: x,
        48: _,
        49: m,
        50: E,
        51: A,
        52: S,
        53: C,
        54: O,
        55: k,
        56: w,
        57: T,
        58: v,
        59: R,
        60: D,
        61: N,
        62: W,
        63: P,
        64: M,
        65: B,
        66: j,
        67: Y,
        68: L,
        69: I,
        70: U,
        71: F,
        72: X,
        73: z,
        74: Q
      }, {
        13: 70,
        19: 20,
        20: 21,
        21: 22,
        22: e,
        23: a,
        24: n,
        26: i,
        28: r,
        29: 49,
        30: 61,
        32: 62,
        34: s,
        36: l,
        37: o,
        38: d,
        39: u,
        40: p,
        41: y,
        43: 23,
        44: f,
        45: g,
        46: b,
        47: x,
        48: _,
        49: m,
        50: E,
        51: A,
        52: S,
        53: C,
        54: O,
        55: k,
        56: w,
        57: T,
        58: v,
        59: R,
        60: D,
        61: N,
        62: W,
        63: P,
        64: M,
        65: B,
        66: j,
        67: Y,
        68: L,
        69: I,
        70: U,
        71: F,
        72: X,
        73: z,
        74: Q
      }, {
        13: 71,
        19: 20,
        20: 21,
        21: 22,
        22: e,
        23: a,
        24: n,
        26: i,
        28: r,
        29: 49,
        30: 61,
        32: 62,
        34: s,
        36: l,
        37: o,
        38: d,
        39: u,
        40: p,
        41: y,
        43: 23,
        44: f,
        45: g,
        46: b,
        47: x,
        48: _,
        49: m,
        50: E,
        51: A,
        52: S,
        53: C,
        54: O,
        55: k,
        56: w,
        57: T,
        58: v,
        59: R,
        60: D,
        61: N,
        62: W,
        63: P,
        64: M,
        65: B,
        66: j,
        67: Y,
        68: L,
        69: I,
        70: U,
        71: F,
        72: X,
        73: z,
        74: Q
      }, {
        13: 72,
        19: 20,
        20: 21,
        21: 22,
        22: e,
        23: a,
        24: n,
        26: i,
        28: r,
        29: 49,
        30: 61,
        32: 62,
        34: s,
        36: l,
        37: o,
        38: d,
        39: u,
        40: p,
        41: y,
        43: 23,
        44: f,
        45: g,
        46: b,
        47: x,
        48: _,
        49: m,
        50: E,
        51: A,
        52: S,
        53: C,
        54: O,
        55: k,
        56: w,
        57: T,
        58: v,
        59: R,
        60: D,
        61: N,
        62: W,
        63: P,
        64: M,
        65: B,
        66: j,
        67: Y,
        68: L,
        69: I,
        70: U,
        71: F,
        72: X,
        73: z,
        74: Q
      }, {
        13: 73,
        19: 20,
        20: 21,
        21: 22,
        22: e,
        23: a,
        24: n,
        26: i,
        28: r,
        29: 49,
        30: 61,
        32: 62,
        34: s,
        36: l,
        37: o,
        38: d,
        39: u,
        40: p,
        41: y,
        43: 23,
        44: f,
        45: g,
        46: b,
        47: x,
        48: _,
        49: m,
        50: E,
        51: A,
        52: S,
        53: C,
        54: O,
        55: k,
        56: w,
        57: T,
        58: v,
        59: R,
        60: D,
        61: N,
        62: W,
        63: P,
        64: M,
        65: B,
        66: j,
        67: Y,
        68: L,
        69: I,
        70: U,
        71: F,
        72: X,
        73: z,
        74: Q
      }, {
        14: [1, 74]
      }, t($, [2, 13], {
        43: 23,
        29: 49,
        30: 61,
        32: 62,
        20: 75,
        34: s,
        36: l,
        37: o,
        38: d,
        39: u,
        40: p,
        41: y,
        44: f,
        45: g,
        46: b,
        47: x,
        48: _,
        49: m,
        50: E,
        51: A,
        52: S,
        53: C,
        54: O,
        55: k,
        56: w,
        57: T,
        58: v,
        59: R,
        60: D,
        61: N,
        62: W,
        63: P,
        64: M,
        65: B,
        66: j,
        67: Y,
        68: L,
        69: I,
        70: U,
        71: F,
        72: X,
        73: z,
        74: Q
      }), t($, [2, 14]), t(q, [2, 16], {
        12: [1, 76]
      }), t($, [2, 36], {
        12: [1, 77]
      }), t(V, [2, 19]), t(V, [2, 20]), {
        25: [1, 78]
      }, {
        27: [1, 79]
      }, t(V, [2, 23]), {
        35: 80,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 86,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 87,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 88,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 89,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 90,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 91,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 92,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 93,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 94,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 95,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 96,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 97,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 98,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 99,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 100,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 101,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 102,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 103,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 104,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, t(Z, [2, 59]), {
        35: 105,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 106,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 107,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 108,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 109,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 110,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 111,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 112,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 113,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 114,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 115,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        20: 116,
        29: 49,
        30: 61,
        32: 62,
        34: s,
        36: l,
        37: o,
        38: d,
        39: u,
        40: p,
        41: y,
        43: 23,
        44: f,
        45: g,
        46: b,
        47: x,
        48: _,
        49: m,
        50: E,
        51: A,
        52: S,
        53: C,
        54: O,
        55: k,
        56: w,
        57: T,
        58: v,
        59: R,
        60: D,
        61: N,
        62: W,
        63: P,
        64: M,
        65: B,
        66: j,
        67: Y,
        68: L,
        69: I,
        70: U,
        71: F,
        72: X,
        73: z,
        74: Q
      }, {
        12: [1, 118],
        33: [1, 117]
      }, {
        35: 119,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 120,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 121,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 122,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 123,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 124,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        35: 125,
        75: 81,
        76: H,
        77: G,
        79: K,
        80: J
      }, {
        14: [1, 126]
      }, {
        14: [1, 127]
      }, {
        14: [1, 128]
      }, {
        14: [1, 129]
      }, {
        1: [2, 8]
      }, t($, [2, 15]), t(q, [2, 17], {
        21: 22,
        19: 130,
        22: e,
        23: a,
        24: n,
        26: i,
        28: r
      }), t($, [2, 37], {
        19: 20,
        20: 21,
        21: 22,
        43: 23,
        29: 49,
        30: 61,
        32: 62,
        13: 131,
        22: e,
        23: a,
        24: n,
        26: i,
        28: r,
        34: s,
        36: l,
        37: o,
        38: d,
        39: u,
        40: p,
        41: y,
        44: f,
        45: g,
        46: b,
        47: x,
        48: _,
        49: m,
        50: E,
        51: A,
        52: S,
        53: C,
        54: O,
        55: k,
        56: w,
        57: T,
        58: v,
        59: R,
        60: D,
        61: N,
        62: W,
        63: P,
        64: M,
        65: B,
        66: j,
        67: Y,
        68: L,
        69: I,
        70: U,
        71: F,
        72: X,
        73: z,
        74: Q
      }), t(V, [2, 21]), t(V, [2, 22]), t(Z, [2, 39]), t(tt, [2, 71], {
        75: 81,
        35: 132,
        76: H,
        77: G,
        79: K,
        80: J
      }), t(te, [2, 73]), {
        78: [1, 133]
      }, t(te, [2, 75]), t(te, [2, 76]), t(Z, [2, 40]), t(Z, [2, 41]), t(Z, [2, 42]), t(Z, [2, 43]), t(Z, [2, 44]), t(Z, [2, 45]), t(Z, [2, 46]), t(Z, [2, 47]), t(Z, [2, 48]), t(Z, [2, 49]), t(Z, [2, 50]), t(Z, [2, 51]), t(Z, [2, 52]), t(Z, [2, 53]), t(Z, [2, 54]), t(Z, [2, 55]), t(Z, [2, 56]), t(Z, [2, 57]), t(Z, [2, 58]), t(Z, [2, 60]), t(Z, [2, 61]), t(Z, [2, 62]), t(Z, [2, 63]), t(Z, [2, 64]), t(Z, [2, 65]), t(Z, [2, 66]), t(Z, [2, 67]), t(Z, [2, 68]), t(Z, [2, 69]), t(Z, [2, 70]), {
        31: 134,
        42: [1, 135]
      }, {
        12: [1, 136]
      }, {
        33: [1, 137]
      }, t(ta, [2, 28]), t(ta, [2, 29]), t(ta, [2, 30]), t(ta, [2, 31]), t(ta, [2, 32]), t(ta, [2, 33]), t(ta, [2, 34]), {
        1: [2, 9]
      }, {
        1: [2, 10]
      }, {
        1: [2, 11]
      }, {
        1: [2, 12]
      }, t(q, [2, 18]), t($, [2, 38]), t(tt, [2, 72]), t(te, [2, 74]), t(Z, [2, 24]), t(Z, [2, 35]), t(tn, [2, 25]), t(tn, [2, 26], {
        12: [1, 138]
      }), t(tn, [2, 27])],
      defaultActions: {
        2: [2, 1],
        3: [2, 2],
        4: [2, 7],
        5: [2, 3],
        6: [2, 4],
        7: [2, 5],
        8: [2, 6],
        74: [2, 8],
        126: [2, 9],
        127: [2, 10],
        128: [2, 11],
        129: [2, 12]
      },
      parseError: loggerLevelUtils.setFunctionName(function (t, e) {
        if (e.recoverable) {
          this.trace(t);
        } else {
          var a = Error(t);
          a.hash = e;
          throw a;
        }
      }, "parseError"),
      parse: loggerLevelUtils.setFunctionName(function (t) {
        var e = this;
        var a = [0];
        var n = [];
        var i = [null];
        var r = [];
        var s = this.table;
        var l = "";
        var o = 0;
        var d = 0;
        var u = 0;
        var p = r.slice.call(arguments, 1);
        var y = Object.create(this.lexer);
        var f = {
          yy: {}
        };
        for (var g in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, g)) {
            f.yy[g] = this.yy[g];
          }
        }
        y.setInput(t, f.yy);
        f.yy.lexer = y;
        f.yy.parser = this;
        if (y.yylloc === undefined) {
          y.yylloc = {};
        }
        var b = y.yylloc;
        r.push(b);
        var x = y.options && y.options.ranges;
        function _() {
          var t;
          if (typeof (t = n.pop() || y.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (n = t).pop();
            }
            t = e.symbols_[t] || t;
          }
          return t;
        }
        if (typeof f.yy.parseError == "function") {
          this.parseError = f.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        loggerLevelUtils.setFunctionName(function (t) {
          a.length = a.length - t * 2;
          i.length = i.length - t;
          r.length = r.length - t;
        }, "popStack");
        loggerLevelUtils.setFunctionName(_, "lex");
        var m;
        var E;
        var A;
        var S;
        var C;
        var O;
        var k;
        var w;
        var T;
        var v = {};
        while (true) {
          A = a[a.length - 1];
          if (this.defaultActions[A]) {
            S = this.defaultActions[A];
          } else {
            if (m == null) {
              m = _();
            }
            S = s[A] && s[A][m];
          }
          if (S === undefined || !S.length || !S[0]) {
            var R = "";
            T = [];
            for (O in s[A]) {
              if (this.terminals_[O] && O > 2) {
                T.push("'" + this.terminals_[O] + "'");
              }
            }
            R = y.showPosition ? "Parse error on line " + (o + 1) + ":\n" + y.showPosition() + "\nExpecting " + T.join(", ") + ", got '" + (this.terminals_[m] || m) + "'" : "Parse error on line " + (o + 1) + ": Unexpected " + (m == 1 ? "end of input" : "'" + (this.terminals_[m] || m) + "'");
            this.parseError(R, {
              text: y.match,
              token: this.terminals_[m] || m,
              line: y.yylineno,
              loc: b,
              expected: T
            });
          }
          if (S[0] instanceof Array && S.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + A + ", token: " + m);
          }
          switch (S[0]) {
            case 1:
              a.push(m);
              i.push(y.yytext);
              r.push(y.yylloc);
              a.push(S[1]);
              m = null;
              if (E) {
                m = E;
                E = null;
              } else {
                d = y.yyleng;
                l = y.yytext;
                o = y.yylineno;
                b = y.yylloc;
                if (u > 0) {
                  u--;
                }
              }
              break;
            case 2:
              k = this.productions_[S[1]][1];
              v.$ = i[i.length - k];
              v._$ = {
                first_line: r[r.length - (k || 1)].first_line,
                last_line: r[r.length - 1].last_line,
                first_column: r[r.length - (k || 1)].first_column,
                last_column: r[r.length - 1].last_column
              };
              if (x) {
                v._$.range = [r[r.length - (k || 1)].range[0], r[r.length - 1].range[1]];
              }
              if ((C = this.performAction.apply(v, [l, d, o, f.yy, S[1], i, r].concat(p))) !== undefined) {
                return C;
              }
              if (k) {
                a = a.slice(0, k * -1 * 2);
                i = i.slice(0, k * -1);
                r = r.slice(0, k * -1);
              }
              a.push(this.productions_[S[1]][0]);
              i.push(v.$);
              r.push(v._$);
              w = s[a[a.length - 2]][a[a.length - 1]];
              a.push(w);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var tr = {
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
        var a = t.split(/(?:\r\n?|\n)/g);
        this._input = t + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - e);
        this.offset -= e;
        var n = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (a.length - 1) {
          this.yylineno -= a.length - 1;
        }
        var i = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: a ? (a.length === n.length ? this.yylloc.first_column : 0) + n[n.length - a.length].length - a[0].length : this.yylloc.first_column - e
        };
        if (this.options.ranges) {
          this.yylloc.range = [i[0], i[0] + this.yyleng - e];
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
        var a;
        var n;
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
        if (n = t[0].match(/(?:\r\n?|\n).*/g)) {
          this.yylineno += n.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: n ? n[n.length - 1].length - n[n.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
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
        a = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (a) {
          return a;
        }
        if (this._backtrack) {
          for (var r in i) {
            this[r] = i[r];
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
        var a;
        var n;
        var i = this._currentRules();
        var r = 0;
        for (; r < i.length; r++) {
          if ((a = this._input.match(this.rules[i[r]])) && (!e || a[0].length > e[0].length)) {
            e = a;
            n = r;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(a, i[r])) !== false) {
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
          return (t = this.test_match(e, i[n])) !== false && t;
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
      options: {},
      performAction: loggerLevelUtils.setFunctionName(function (t, e, a, n) {
        switch (a) {
          case 0:
            return 6;
          case 1:
            return 7;
          case 2:
            return 8;
          case 3:
            return 9;
          case 4:
            return 22;
          case 5:
            return 23;
          case 6:
            this.begin("acc_title");
            return 24;
          case 7:
            this.popState();
            return "acc_title_value";
          case 8:
            this.begin("acc_descr");
            return 26;
          case 9:
            this.popState();
            return "acc_descr_value";
          case 10:
            this.begin("acc_descr_multiline");
            break;
          case 11:
          case 73:
            this.popState();
            break;
          case 12:
            return "acc_descr_multiline_value";
          case 13:
          case 16:
          case 70:
            break;
          case 14:
            c;
            break;
          case 15:
            return 12;
          case 17:
            return 11;
          case 18:
            return 15;
          case 19:
            return 16;
          case 20:
            return 17;
          case 21:
            return 18;
          case 22:
            this.begin("person_ext");
            return 45;
          case 23:
            this.begin("person");
            return 44;
          case 24:
            this.begin("system_ext_queue");
            return 51;
          case 25:
            this.begin("system_ext_db");
            return 50;
          case 26:
            this.begin("system_ext");
            return 49;
          case 27:
            this.begin("system_queue");
            return 48;
          case 28:
            this.begin("system_db");
            return 47;
          case 29:
            this.begin("system");
            return 46;
          case 30:
            this.begin("boundary");
            return 37;
          case 31:
            this.begin("enterprise_boundary");
            return 34;
          case 32:
            this.begin("system_boundary");
            return 36;
          case 33:
            this.begin("container_ext_queue");
            return 57;
          case 34:
            this.begin("container_ext_db");
            return 56;
          case 35:
            this.begin("container_ext");
            return 55;
          case 36:
            this.begin("container_queue");
            return 54;
          case 37:
            this.begin("container_db");
            return 53;
          case 38:
            this.begin("container");
            return 52;
          case 39:
            this.begin("container_boundary");
            return 38;
          case 40:
            this.begin("component_ext_queue");
            return 63;
          case 41:
            this.begin("component_ext_db");
            return 62;
          case 42:
            this.begin("component_ext");
            return 61;
          case 43:
            this.begin("component_queue");
            return 60;
          case 44:
            this.begin("component_db");
            return 59;
          case 45:
            this.begin("component");
            return 58;
          case 46:
          case 47:
            this.begin("node");
            return 39;
          case 48:
            this.begin("node_l");
            return 40;
          case 49:
            this.begin("node_r");
            return 41;
          case 50:
            this.begin("rel");
            return 64;
          case 51:
            this.begin("birel");
            return 65;
          case 52:
          case 53:
            this.begin("rel_u");
            return 66;
          case 54:
          case 55:
            this.begin("rel_d");
            return 67;
          case 56:
          case 57:
            this.begin("rel_l");
            return 68;
          case 58:
          case 59:
            this.begin("rel_r");
            return 69;
          case 60:
            this.begin("rel_b");
            return 70;
          case 61:
            this.begin("rel_index");
            return 71;
          case 62:
            this.begin("update_el_style");
            return 72;
          case 63:
            this.begin("update_rel_style");
            return 73;
          case 64:
            this.begin("update_layout_config");
            return 74;
          case 65:
            return "EOF_IN_STRUCT";
          case 66:
            this.begin("attribute");
            return "ATTRIBUTE_EMPTY";
          case 67:
            this.begin("attribute");
            break;
          case 68:
          case 79:
            this.popState();
            this.popState();
            break;
          case 69:
          case 71:
            return 80;
          case 72:
            this.begin("string");
            break;
          case 74:
          case 80:
            return "STR";
          case 75:
            this.begin("string_kv");
            break;
          case 76:
            this.begin("string_kv_key");
            return "STR_KEY";
          case 77:
            this.popState();
            this.begin("string_kv_value");
            break;
          case 78:
            return "STR_VALUE";
          case 81:
            return "LBRACE";
          case 82:
            return "RBRACE";
          case 83:
            return "SPACE";
          case 84:
            return "EOL";
          case 85:
            return 14;
        }
      }, "anonymous"),
      rules: [/^(?:.*direction\s+TB[^\n]*)/, /^(?:.*direction\s+BT[^\n]*)/, /^(?:.*direction\s+RL[^\n]*)/, /^(?:.*direction\s+LR[^\n]*)/, /^(?:title\s[^#\n;]+)/, /^(?:accDescription\s[^#\n;]+)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/, /^(?:%%[^\n]*(\r?\n)*)/, /^(?:\s*(\r?\n)+)/, /^(?:\s+)/, /^(?:C4Context\b)/, /^(?:C4Container\b)/, /^(?:C4Component\b)/, /^(?:C4Dynamic\b)/, /^(?:C4Deployment\b)/, /^(?:Person_Ext\b)/, /^(?:Person\b)/, /^(?:SystemQueue_Ext\b)/, /^(?:SystemDb_Ext\b)/, /^(?:System_Ext\b)/, /^(?:SystemQueue\b)/, /^(?:SystemDb\b)/, /^(?:System\b)/, /^(?:Boundary\b)/, /^(?:Enterprise_Boundary\b)/, /^(?:System_Boundary\b)/, /^(?:ContainerQueue_Ext\b)/, /^(?:ContainerDb_Ext\b)/, /^(?:Container_Ext\b)/, /^(?:ContainerQueue\b)/, /^(?:ContainerDb\b)/, /^(?:Container\b)/, /^(?:Container_Boundary\b)/, /^(?:ComponentQueue_Ext\b)/, /^(?:ComponentDb_Ext\b)/, /^(?:Component_Ext\b)/, /^(?:ComponentQueue\b)/, /^(?:ComponentDb\b)/, /^(?:Component\b)/, /^(?:Deployment_Node\b)/, /^(?:Node\b)/, /^(?:Node_L\b)/, /^(?:Node_R\b)/, /^(?:Rel\b)/, /^(?:BiRel\b)/, /^(?:Rel_Up\b)/, /^(?:Rel_U\b)/, /^(?:Rel_Down\b)/, /^(?:Rel_D\b)/, /^(?:Rel_Left\b)/, /^(?:Rel_L\b)/, /^(?:Rel_Right\b)/, /^(?:Rel_R\b)/, /^(?:Rel_Back\b)/, /^(?:RelIndex\b)/, /^(?:UpdateElementStyle\b)/, /^(?:UpdateRelStyle\b)/, /^(?:UpdateLayoutConfig\b)/, /^(?:$)/, /^(?:[(][ ]*[,])/, /^(?:[(])/, /^(?:[)])/, /^(?:,,)/, /^(?:,)/, /^(?:[ ]*["]["])/, /^(?:[ ]*["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:[ ]*[\$])/, /^(?:[^=]*)/, /^(?:[=][ ]*["])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:[^,]+)/, /^(?:\{)/, /^(?:\})/, /^(?:[\s]+)/, /^(?:[\n\r]+)/, /^(?:$)/],
      conditions: {
        acc_descr_multiline: {
          rules: [11, 12],
          inclusive: false
        },
        acc_descr: {
          rules: [9],
          inclusive: false
        },
        acc_title: {
          rules: [7],
          inclusive: false
        },
        string_kv_value: {
          rules: [78, 79],
          inclusive: false
        },
        string_kv_key: {
          rules: [77],
          inclusive: false
        },
        string_kv: {
          rules: [76],
          inclusive: false
        },
        string: {
          rules: [73, 74],
          inclusive: false
        },
        attribute: {
          rules: [68, 69, 70, 71, 72, 75, 80],
          inclusive: false
        },
        update_layout_config: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        update_rel_style: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        update_el_style: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        rel_b: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        rel_r: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        rel_l: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        rel_d: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        rel_u: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        rel_bi: {
          rules: [],
          inclusive: false
        },
        rel: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        node_r: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        node_l: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        node: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        index: {
          rules: [],
          inclusive: false
        },
        rel_index: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        component_ext_queue: {
          rules: [],
          inclusive: false
        },
        component_ext_db: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        component_ext: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        component_queue: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        component_db: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        component: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        container_boundary: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        container_ext_queue: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        container_ext_db: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        container_ext: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        container_queue: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        container_db: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        container: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        birel: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        system_boundary: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        enterprise_boundary: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        boundary: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        system_ext_queue: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        system_ext_db: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        system_ext: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        system_queue: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        system_db: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        system: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        person_ext: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        person: {
          rules: [65, 66, 67, 68],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 81, 82, 83, 84, 85],
          inclusive: true
        }
      }
    };
    function ts() {
      this.yy = {};
    }
    ti.lexer = tr;
    loggerLevelUtils.setFunctionName(ts, "Parser");
    ts.prototype = ti;
    ti.Parser = ts;
    return new ts();
  }();
  p.parser = p;
  var y = [];
  var f = [""];
  var g = "global";
  var b = "";
  var x = [{
    alias: "global",
    label: {
      text: "global"
    },
    type: {
      text: "global"
    },
    tags: null,
    link: null,
    parentBoundary: ""
  }];
  var _ = [];
  var m = "";
  var E = false;
  var A = 4;
  var S = 2;
  var C = loggerLevelUtils.setFunctionName(function () {
    return r;
  }, "getC4Type");
  var O = loggerLevelUtils.setFunctionName(function (t) {
    r = mermaidConfigUtils_1.sanitizeText(t, mermaidConfigUtils_1.getConfigAlias());
  }, "setC4Type");
  var k = loggerLevelUtils.setFunctionName(function (t, e, a, n, i, r, s, l, o) {
    if (t == null || e == null || a == null || n == null) {
      return;
    }
    let h = {};
    let d = _.find(t => t.from === e && t.to === a);
    if (d) {
      h = d;
    } else {
      _.push(h);
    }
    h.type = t;
    h.from = e;
    h.to = a;
    h.label = {
      text: n
    };
    if (i == null) {
      h.techn = {
        text: ""
      };
    } else if (typeof i == "object") {
      let [t, e] = Object.entries(i)[0];
      h[t] = {
        text: e
      };
    } else {
      h.techn = {
        text: i
      };
    }
    if (r == null) {
      h.descr = {
        text: ""
      };
    } else if (typeof r == "object") {
      let [t, e] = Object.entries(r)[0];
      h[t] = {
        text: e
      };
    } else {
      h.descr = {
        text: r
      };
    }
    if (typeof s == "object") {
      let [t, e] = Object.entries(s)[0];
      h[t] = e;
    } else {
      h.sprite = s;
    }
    if (typeof l == "object") {
      let [t, e] = Object.entries(l)[0];
      h[t] = e;
    } else {
      h.tags = l;
    }
    if (typeof o == "object") {
      let [t, e] = Object.entries(o)[0];
      h[t] = e;
    } else {
      h.link = o;
    }
    h.wrap = V();
  }, "addRel");
  var w = loggerLevelUtils.setFunctionName(function (t, e, a, n, i, r, s) {
    if (e === null || a === null) {
      return;
    }
    let l = {};
    let o = y.find(t => t.alias === e);
    if (o && e === o.alias) {
      l = o;
    } else {
      l.alias = e;
      y.push(l);
    }
    if (a == null) {
      l.label = {
        text: ""
      };
    } else {
      l.label = {
        text: a
      };
    }
    if (n == null) {
      l.descr = {
        text: ""
      };
    } else if (typeof n == "object") {
      let [t, e] = Object.entries(n)[0];
      l[t] = {
        text: e
      };
    } else {
      l.descr = {
        text: n
      };
    }
    if (typeof i == "object") {
      let [t, e] = Object.entries(i)[0];
      l[t] = e;
    } else {
      l.sprite = i;
    }
    if (typeof r == "object") {
      let [t, e] = Object.entries(r)[0];
      l[t] = e;
    } else {
      l.tags = r;
    }
    if (typeof s == "object") {
      let [t, e] = Object.entries(s)[0];
      l[t] = e;
    } else {
      l.link = s;
    }
    l.typeC4Shape = {
      text: t
    };
    l.parentBoundary = g;
    l.wrap = V();
  }, "addPersonOrSystem");
  var T = loggerLevelUtils.setFunctionName(function (t, e, a, n, i, r, s, l) {
    if (e === null || a === null) {
      return;
    }
    let o = {};
    let h = y.find(t => t.alias === e);
    if (h && e === h.alias) {
      o = h;
    } else {
      o.alias = e;
      y.push(o);
    }
    if (a == null) {
      o.label = {
        text: ""
      };
    } else {
      o.label = {
        text: a
      };
    }
    if (n == null) {
      o.techn = {
        text: ""
      };
    } else if (typeof n == "object") {
      let [t, e] = Object.entries(n)[0];
      o[t] = {
        text: e
      };
    } else {
      o.techn = {
        text: n
      };
    }
    if (i == null) {
      o.descr = {
        text: ""
      };
    } else if (typeof i == "object") {
      let [t, e] = Object.entries(i)[0];
      o[t] = {
        text: e
      };
    } else {
      o.descr = {
        text: i
      };
    }
    if (typeof r == "object") {
      let [t, e] = Object.entries(r)[0];
      o[t] = e;
    } else {
      o.sprite = r;
    }
    if (typeof s == "object") {
      let [t, e] = Object.entries(s)[0];
      o[t] = e;
    } else {
      o.tags = s;
    }
    if (typeof l == "object") {
      let [t, e] = Object.entries(l)[0];
      o[t] = e;
    } else {
      o.link = l;
    }
    o.wrap = V();
    o.typeC4Shape = {
      text: t
    };
    o.parentBoundary = g;
  }, "addContainer");
  var v = loggerLevelUtils.setFunctionName(function (t, e, a, n, i, r, s, l) {
    if (e === null || a === null) {
      return;
    }
    let o = {};
    let h = y.find(t => t.alias === e);
    if (h && e === h.alias) {
      o = h;
    } else {
      o.alias = e;
      y.push(o);
    }
    if (a == null) {
      o.label = {
        text: ""
      };
    } else {
      o.label = {
        text: a
      };
    }
    if (n == null) {
      o.techn = {
        text: ""
      };
    } else if (typeof n == "object") {
      let [t, e] = Object.entries(n)[0];
      o[t] = {
        text: e
      };
    } else {
      o.techn = {
        text: n
      };
    }
    if (i == null) {
      o.descr = {
        text: ""
      };
    } else if (typeof i == "object") {
      let [t, e] = Object.entries(i)[0];
      o[t] = {
        text: e
      };
    } else {
      o.descr = {
        text: i
      };
    }
    if (typeof r == "object") {
      let [t, e] = Object.entries(r)[0];
      o[t] = e;
    } else {
      o.sprite = r;
    }
    if (typeof s == "object") {
      let [t, e] = Object.entries(s)[0];
      o[t] = e;
    } else {
      o.tags = s;
    }
    if (typeof l == "object") {
      let [t, e] = Object.entries(l)[0];
      o[t] = e;
    } else {
      o.link = l;
    }
    o.wrap = V();
    o.typeC4Shape = {
      text: t
    };
    o.parentBoundary = g;
  }, "addComponent");
  var R = loggerLevelUtils.setFunctionName(function (t, e, a, n, i) {
    if (t === null || e === null) {
      return;
    }
    let r = {};
    let s = x.find(e => e.alias === t);
    if (s && t === s.alias) {
      r = s;
    } else {
      r.alias = t;
      x.push(r);
    }
    if (e == null) {
      r.label = {
        text: ""
      };
    } else {
      r.label = {
        text: e
      };
    }
    if (a == null) {
      r.type = {
        text: "system"
      };
    } else if (typeof a == "object") {
      let [t, e] = Object.entries(a)[0];
      r[t] = {
        text: e
      };
    } else {
      r.type = {
        text: a
      };
    }
    if (typeof n == "object") {
      let [t, e] = Object.entries(n)[0];
      r[t] = e;
    } else {
      r.tags = n;
    }
    if (typeof i == "object") {
      let [t, e] = Object.entries(i)[0];
      r[t] = e;
    } else {
      r.link = i;
    }
    r.parentBoundary = g;
    r.wrap = V();
    b = g;
    g = t;
    f.push(b);
  }, "addPersonOrSystemBoundary");
  var D = loggerLevelUtils.setFunctionName(function (t, e, a, n, i) {
    if (t === null || e === null) {
      return;
    }
    let r = {};
    let s = x.find(e => e.alias === t);
    if (s && t === s.alias) {
      r = s;
    } else {
      r.alias = t;
      x.push(r);
    }
    if (e == null) {
      r.label = {
        text: ""
      };
    } else {
      r.label = {
        text: e
      };
    }
    if (a == null) {
      r.type = {
        text: "container"
      };
    } else if (typeof a == "object") {
      let [t, e] = Object.entries(a)[0];
      r[t] = {
        text: e
      };
    } else {
      r.type = {
        text: a
      };
    }
    if (typeof n == "object") {
      let [t, e] = Object.entries(n)[0];
      r[t] = e;
    } else {
      r.tags = n;
    }
    if (typeof i == "object") {
      let [t, e] = Object.entries(i)[0];
      r[t] = e;
    } else {
      r.link = i;
    }
    r.parentBoundary = g;
    r.wrap = V();
    b = g;
    g = t;
    f.push(b);
  }, "addContainerBoundary");
  var N = loggerLevelUtils.setFunctionName(function (t, e, a, n, i, r, s, l) {
    if (e === null || a === null) {
      return;
    }
    let o = {};
    let h = x.find(t => t.alias === e);
    if (h && e === h.alias) {
      o = h;
    } else {
      o.alias = e;
      x.push(o);
    }
    if (a == null) {
      o.label = {
        text: ""
      };
    } else {
      o.label = {
        text: a
      };
    }
    if (n == null) {
      o.type = {
        text: "node"
      };
    } else if (typeof n == "object") {
      let [t, e] = Object.entries(n)[0];
      o[t] = {
        text: e
      };
    } else {
      o.type = {
        text: n
      };
    }
    if (i == null) {
      o.descr = {
        text: ""
      };
    } else if (typeof i == "object") {
      let [t, e] = Object.entries(i)[0];
      o[t] = {
        text: e
      };
    } else {
      o.descr = {
        text: i
      };
    }
    if (typeof s == "object") {
      let [t, e] = Object.entries(s)[0];
      o[t] = e;
    } else {
      o.tags = s;
    }
    if (typeof l == "object") {
      let [t, e] = Object.entries(l)[0];
      o[t] = e;
    } else {
      o.link = l;
    }
    o.nodeType = t;
    o.parentBoundary = g;
    o.wrap = V();
    b = g;
    g = e;
    f.push(b);
  }, "addDeploymentNode");
  var W = loggerLevelUtils.setFunctionName(function () {
    g = b;
    f.pop();
    b = f.pop();
    f.push(b);
  }, "popBoundaryParseStack");
  var P = loggerLevelUtils.setFunctionName(function (t, e, a, n, i, r, s, l, o, h, d) {
    let u = y.find(t => t.alias === e);
    if (u !== undefined || (u = x.find(t => t.alias === e)) !== undefined) {
      if (a != null) {
        if (typeof a == "object") {
          let [t, e] = Object.entries(a)[0];
          u[t] = e;
        } else {
          u.bgColor = a;
        }
      }
      if (n != null) {
        if (typeof n == "object") {
          let [t, e] = Object.entries(n)[0];
          u[t] = e;
        } else {
          u.fontColor = n;
        }
      }
      if (i != null) {
        if (typeof i == "object") {
          let [t, e] = Object.entries(i)[0];
          u[t] = e;
        } else {
          u.borderColor = i;
        }
      }
      if (r != null) {
        if (typeof r == "object") {
          let [t, e] = Object.entries(r)[0];
          u[t] = e;
        } else {
          u.shadowing = r;
        }
      }
      if (s != null) {
        if (typeof s == "object") {
          let [t, e] = Object.entries(s)[0];
          u[t] = e;
        } else {
          u.shape = s;
        }
      }
      if (l != null) {
        if (typeof l == "object") {
          let [t, e] = Object.entries(l)[0];
          u[t] = e;
        } else {
          u.sprite = l;
        }
      }
      if (o != null) {
        if (typeof o == "object") {
          let [t, e] = Object.entries(o)[0];
          u[t] = e;
        } else {
          u.techn = o;
        }
      }
      if (h != null) {
        if (typeof h == "object") {
          let [t, e] = Object.entries(h)[0];
          u[t] = e;
        } else {
          u.legendText = h;
        }
      }
      if (d != null) {
        if (typeof d == "object") {
          let [t, e] = Object.entries(d)[0];
          u[t] = e;
        } else {
          u.legendSprite = d;
        }
      }
    }
  }, "updateElStyle");
  var M = loggerLevelUtils.setFunctionName(function (t, e, a, n, i, r, s) {
    let l = _.find(t => t.from === e && t.to === a);
    if (l !== undefined) {
      if (n != null) {
        if (typeof n == "object") {
          let [t, e] = Object.entries(n)[0];
          l[t] = e;
        } else {
          l.textColor = n;
        }
      }
      if (i != null) {
        if (typeof i == "object") {
          let [t, e] = Object.entries(i)[0];
          l[t] = e;
        } else {
          l.lineColor = i;
        }
      }
      if (r != null) {
        if (typeof r == "object") {
          let [t, e] = Object.entries(r)[0];
          l[t] = parseInt(e);
        } else {
          l.offsetX = parseInt(r);
        }
      }
      if (s != null) {
        if (typeof s == "object") {
          let [t, e] = Object.entries(s)[0];
          l[t] = parseInt(e);
        } else {
          l.offsetY = parseInt(s);
        }
      }
    }
  }, "updateRelStyle");
  var B = loggerLevelUtils.setFunctionName(function (t, e, a) {
    let n = A;
    let i = S;
    n = typeof e == "object" ? parseInt(Object.values(e)[0]) : parseInt(e);
    i = typeof a == "object" ? parseInt(Object.values(a)[0]) : parseInt(a);
    if (n >= 1) {
      A = n;
    }
    if (i >= 1) {
      S = i;
    }
  }, "updateLayoutConfig");
  var j = loggerLevelUtils.setFunctionName(function () {
    return A;
  }, "getC4ShapeInRow");
  var Y = loggerLevelUtils.setFunctionName(function () {
    return S;
  }, "getC4BoundaryInRow");
  var L = loggerLevelUtils.setFunctionName(function () {
    return g;
  }, "getCurrentBoundaryParse");
  var I = loggerLevelUtils.setFunctionName(function () {
    return b;
  }, "getParentBoundaryParse");
  var U = loggerLevelUtils.setFunctionName(function (t) {
    if (t == null) {
      return y;
    } else {
      return y.filter(e => e.parentBoundary === t);
    }
  }, "getC4ShapeArray");
  var F = loggerLevelUtils.setFunctionName(function (t) {
    return y.find(e => e.alias === t);
  }, "getC4Shape");
  var X = loggerLevelUtils.setFunctionName(function (t) {
    return Object.keys(U(t));
  }, "getC4ShapeKeys");
  var z = loggerLevelUtils.setFunctionName(function (t) {
    if (t == null) {
      return x;
    } else {
      return x.filter(e => e.parentBoundary === t);
    }
  }, "getBoundaries");
  var Q = loggerLevelUtils.setFunctionName(function () {
    return _;
  }, "getRels");
  var $ = loggerLevelUtils.setFunctionName(function () {
    return m;
  }, "getTitle");
  var q = loggerLevelUtils.setFunctionName(function (t) {
    E = t;
  }, "setWrap");
  var V = loggerLevelUtils.setFunctionName(function () {
    return E;
  }, "autoWrap");
  var H = loggerLevelUtils.setFunctionName(function () {
    y = [];
    x = [{
      alias: "global",
      label: {
        text: "global"
      },
      type: {
        text: "global"
      },
      tags: null,
      link: null,
      parentBoundary: ""
    }];
    b = "";
    g = "global";
    f = [""];
    _ = [];
    f = [""];
    m = "";
    E = false;
    A = 4;
    S = 2;
  }, "clear");
  var G = loggerLevelUtils.setFunctionName(function (t) {
    m = mermaidConfigUtils_1.sanitizeText(t, mermaidConfigUtils_1.getConfigAlias());
  }, "setTitle");
  var K = {
    addPersonOrSystem: w,
    addPersonOrSystemBoundary: R,
    addContainer: T,
    addContainerBoundary: D,
    addComponent: v,
    addDeploymentNode: N,
    popBoundaryParseStack: W,
    addRel: k,
    updateElStyle: P,
    updateRelStyle: M,
    updateLayoutConfig: B,
    autoWrap: V,
    setWrap: q,
    getC4ShapeArray: U,
    getC4Shape: F,
    getC4ShapeKeys: X,
    getBoundaries: z,
    getBoundarys: z,
    getCurrentBoundaryParse: L,
    getParentBoundaryParse: I,
    getRels: Q,
    getTitle: $,
    getC4Type: C,
    getC4ShapeInRow: j,
    getC4BoundaryInRow: Y,
    setAccTitle: mermaidConfigUtils_1.setAccTitle,
    getAccTitle: mermaidConfigUtils_1.getAccTitle,
    getAccDescription: mermaidConfigUtils_1.getAccDescription,
    setAccDescription: mermaidConfigUtils_1.setAccDescription,
    getConfig: loggerLevelUtils.setFunctionName(() => mermaidConfigUtils_1.getConfigAlias().c4, "getConfig"),
    clear: H,
    LINETYPE: {
      SOLID: 0,
      DOTTED: 1,
      NOTE: 2,
      SOLID_CROSS: 3,
      DOTTED_CROSS: 4,
      SOLID_OPEN: 5,
      DOTTED_OPEN: 6,
      LOOP_START: 10,
      LOOP_END: 11,
      ALT_START: 12,
      ALT_ELSE: 13,
      ALT_END: 14,
      OPT_START: 15,
      OPT_END: 16,
      ACTIVE_START: 17,
      ACTIVE_END: 18,
      PAR_START: 19,
      PAR_AND: 20,
      PAR_END: 21,
      RECT_START: 22,
      RECT_END: 23,
      SOLID_POINT: 24,
      DOTTED_POINT: 25
    },
    ARROWTYPE: {
      FILLED: 0,
      OPEN: 1
    },
    PLACEMENT: {
      LEFTOF: 0,
      RIGHTOF: 1,
      OVER: 2
    },
    setTitle: G,
    setC4Type: O
  };
  var J = loggerLevelUtils.setFunctionName(function (t, e) {
    return mermaidShapeDrawingUtils.drawRect(t, e);
  }, "drawRect");
  var Z = loggerLevelUtils.setFunctionName(function (t, e, a, n, i, r) {
    let s = t.append("image");
    s.attr("width", e);
    s.attr("height", a);
    s.attr("x", n);
    s.attr("y", i);
    let l = r.startsWith("data:image/png;base64") ? r : urlSanitizer.sanitizeUrl(r);
    s.attr("xlink:href", l);
  }, "drawImage");
  var tt = loggerLevelUtils.setFunctionName((t, e, a) => {
    let n = t.append("g");
    let i = 0;
    for (let t of e) {
      let e = t.textColor ? t.textColor : "#444444";
      let r = t.lineColor ? t.lineColor : "#444444";
      let s = t.offsetX ? parseInt(t.offsetX) : 0;
      let l = t.offsetY ? parseInt(t.offsetY) : 0;
      if (i === 0) {
        let e = n.append("line");
        e.attr("x1", t.startPoint.x);
        e.attr("y1", t.startPoint.y);
        e.attr("x2", t.endPoint.x);
        e.attr("y2", t.endPoint.y);
        e.attr("stroke-width", "1");
        e.attr("stroke", r);
        e.style("fill", "none");
        if (t.type !== "rel_b") {
          e.attr("marker-end", "url(#arrowhead)");
        }
        if (t.type === "birel" || t.type === "rel_b") {
          e.attr("marker-start", "url(#arrowend)");
        }
        i = -1;
      } else {
        let e = n.append("path");
        e.attr("fill", "none").attr("stroke-width", "1").attr("stroke", r).attr("d", "Mstartx,starty Qcontrolx,controly stopx,stopy ".replaceAll("startx", t.startPoint.x).replaceAll("starty", t.startPoint.y).replaceAll("controlx", t.startPoint.x + (t.endPoint.x - t.startPoint.x) / 2 - (t.endPoint.x - t.startPoint.x) / 4).replaceAll("controly", t.startPoint.y + (t.endPoint.y - t.startPoint.y) / 2).replaceAll("stopx", t.endPoint.x).replaceAll("stopy", t.endPoint.y));
        if (t.type !== "rel_b") {
          e.attr("marker-end", "url(#arrowhead)");
        }
        if (t.type === "birel" || t.type === "rel_b") {
          e.attr("marker-start", "url(#arrowend)");
        }
      }
      let o = a.messageFont();
      td(a)(t.label.text, n, Math.min(t.startPoint.x, t.endPoint.x) + Math.abs(t.endPoint.x - t.startPoint.x) / 2 + s, Math.min(t.startPoint.y, t.endPoint.y) + Math.abs(t.endPoint.y - t.startPoint.y) / 2 + l, t.label.width, t.label.height, {
        fill: e
      }, o);
      if (t.techn && t.techn.text !== "") {
        o = a.messageFont();
        td(a)("[" + t.techn.text + "]", n, Math.min(t.startPoint.x, t.endPoint.x) + Math.abs(t.endPoint.x - t.startPoint.x) / 2 + s, Math.min(t.startPoint.y, t.endPoint.y) + Math.abs(t.endPoint.y - t.startPoint.y) / 2 + a.messageFontSize + 5 + l, Math.max(t.label.width, t.techn.width), t.techn.height, {
          fill: e,
          "font-style": "italic"
        }, o);
      }
    }
  }, "drawRels");
  var te = loggerLevelUtils.setFunctionName(function (t, e, a) {
    let n = t.append("g");
    let i = e.bgColor ? e.bgColor : "none";
    let r = e.borderColor ? e.borderColor : "#444444";
    let s = e.fontColor ? e.fontColor : "black";
    let l = {
      "stroke-width": 1,
      "stroke-dasharray": "7.0,7.0"
    };
    if (e.nodeType) {
      l = {
        "stroke-width": 1
      };
    }
    J(n, {
      x: e.x,
      y: e.y,
      fill: i,
      stroke: r,
      width: e.width,
      height: e.height,
      rx: 2.5,
      ry: 2.5,
      attrs: l
    });
    let o = a.boundaryFont();
    o.fontWeight = "bold";
    o.fontSize = o.fontSize + 2;
    o.fontColor = s;
    td(a)(e.label.text, n, e.x, e.y + e.label.Y, e.width, e.height, {
      fill: "#444444"
    }, o);
    if (e.type && e.type.text !== "") {
      (o = a.boundaryFont()).fontColor = s;
      td(a)(e.type.text, n, e.x, e.y + e.type.Y, e.width, e.height, {
        fill: "#444444"
      }, o);
    }
    if (e.descr && e.descr.text !== "") {
      (o = a.boundaryFont()).fontSize = o.fontSize - 2;
      o.fontColor = s;
      td(a)(e.descr.text, n, e.x, e.y + e.descr.Y, e.width, e.height, {
        fill: "#444444"
      }, o);
    }
  }, "drawBoundary");
  var ta = loggerLevelUtils.setFunctionName(function (t, e, a) {
    let i = e.bgColor ? e.bgColor : a[e.typeC4Shape.text + "_bg_color"];
    let r = e.borderColor ? e.borderColor : a[e.typeC4Shape.text + "_border_color"];
    let l = e.fontColor ? e.fontColor : "#FFFFFF";
    let o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAACD0lEQVR4Xu2YoU4EMRCGT+4j8Ai8AhaH4QHgAUjQuFMECUgMIUgwJAgMhgQsAYUiJCiQIBBY+EITsjfTdme6V24v4c8vyGbb+ZjOtN0bNcvjQXmkH83WvYBWto6PLm6v7p7uH1/w2fXD+PBycX1Pv2l3IdDm/vn7x+dXQiAubRzoURa7gRZWd0iGRIiJbOnhnfYBQZNJjNbuyY2eJG8fkDE3bbG4ep6MHUAsgYxmE3nVs6VsBWJSGccsOlFPmLIViMzLOB7pCVO2AtHJMohH7Fh6zqitQK7m0rJvAVYgGcEpe//PLdDz65sM4pF9N7ICcXDKIB5Nv6j7tD0NoSdM2QrU9Gg0ewE1LqBhHR3BBdvj2vapnidjHxD/q6vd7Pvhr31AwcY8eXMTXAKECZZJFXuEq27aLgQK5uLMohCenGGuGewOxSjBvYBqeG6B+Nqiblggdjnc+ZXDy+FNFpFzw76O3UBAROuXh6FoiAcf5g9eTvUgzy0nWg6I8cXHRUpg5bOVBCo+KDpFajOf23GgPme7RSQ+lacIENUgJ6gg1k6HjgOlqnLqip4tEuhv0hNEMXUD0clyXE3p6pZA0S2nnvTlXwLJEZWlb7cTQH1+USgTN4VhAenm/wea1OCAOmqo6fE1WCb9WSKBah+rbUWPWAmE2Rvk0ApiB45eOyNAzU8xcTvj8KvkKEoOaIYeHNA3ZuygAvFMUO0AAAAASUVORK5CYII=";
    switch (e.typeC4Shape.text) {
      case "person":
        o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAACD0lEQVR4Xu2YoU4EMRCGT+4j8Ai8AhaH4QHgAUjQuFMECUgMIUgwJAgMhgQsAYUiJCiQIBBY+EITsjfTdme6V24v4c8vyGbb+ZjOtN0bNcvjQXmkH83WvYBWto6PLm6v7p7uH1/w2fXD+PBycX1Pv2l3IdDm/vn7x+dXQiAubRzoURa7gRZWd0iGRIiJbOnhnfYBQZNJjNbuyY2eJG8fkDE3bbG4ep6MHUAsgYxmE3nVs6VsBWJSGccsOlFPmLIViMzLOB7pCVO2AtHJMohH7Fh6zqitQK7m0rJvAVYgGcEpe//PLdDz65sM4pF9N7ICcXDKIB5Nv6j7tD0NoSdM2QrU9Gg0ewE1LqBhHR3BBdvj2vapnidjHxD/q6vd7Pvhr31AwcY8eXMTXAKECZZJFXuEq27aLgQK5uLMohCenGGuGewOxSjBvYBqeG6B+Nqiblggdjnc+ZXDy+FNFpFzw76O3UBAROuXh6FoiAcf5g9eTvUgzy0nWg6I8cXHRUpg5bOVBCo+KDpFajOf23GgPme7RSQ+lacIENUgJ6gg1k6HjgOlqnLqip4tEuhv0hNEMXUD0clyXE3p6pZA0S2nnvTlXwLJEZWlb7cTQH1+USgTN4VhAenm/wea1OCAOmqo6fE1WCb9WSKBah+rbUWPWAmE2Rvk0ApiB45eOyNAzU8xcTvj8KvkKEoOaIYeHNA3ZuygAvFMUO0AAAAASUVORK5CYII=";
        break;
      case "external_person":
        o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAB6ElEQVR4Xu2YLY+EMBCG9+dWr0aj0Wg0Go1Go0+j8Xdv2uTCvv1gpt0ebHKPuhDaeW4605Z9mJvx4AdXUyTUdd08z+u6flmWZRnHsWkafk9DptAwDPu+f0eAYtu2PEaGWuj5fCIZrBAC2eLBAnRCsEkkxmeaJp7iDJ2QMDdHsLg8SxKFEJaAo8lAXnmuOFIhTMpxxKATebo4UiFknuNo4OniSIXQyRxEA3YsnjGCVEjVXD7yLUAqxBGUyPv/Y4W2beMgGuS7kVQIBycH0fD+oi5pezQETxdHKmQKGk1eQEYldK+jw5GxPfZ9z7Mk0Qnhf1W1m3w//EUn5BDmSZsbR44QQLBEqrBHqOrmSKaQAxdnLArCrxZcM7A7ZKs4ioRq8LFC+NpC3WCBJsvpVw5edm9iEXFuyNfxXAgSwfrFQ1c0iNda8AdejvUgnktOtJQQxmcfFzGglc5WVCj7oDgFqU18boeFSs52CUh8LE8BIVQDT1ABrB0HtgSEYlX5doJnCwv9TXocKCaKbnwhdDKPq4lf3SwU3HLq4V/+WYhHVMa/3b4IlfyikAduCkcBc7mQ3/z/Qq/cTuikhkzB12Ae/mcJC9U+Vo8Ej1gWAtgbeGgFsAMHr50BIWOLCbezvhpBFUdY6EJuJ/QDW0XoMX60zZ0AAAAASUVORK5CYII=";
    }
    let h = t.append("g");
    h.attr("class", "person-man");
    let d = mermaidShapeDrawingUtils.getNoteRect();
    switch (e.typeC4Shape.text) {
      case "person":
      case "external_person":
      case "system":
      case "external_system":
      case "container":
      case "external_container":
      case "component":
      case "external_component":
        d.x = e.x;
        d.y = e.y;
        d.fill = i;
        d.width = e.width;
        d.height = e.height;
        d.stroke = r;
        d.rx = 2.5;
        d.ry = 2.5;
        d.attrs = {
          "stroke-width": 0.5
        };
        J(h, d);
        break;
      case "system_db":
      case "external_system_db":
      case "container_db":
      case "external_container_db":
      case "component_db":
      case "external_component_db":
        h.append("path").attr("fill", i).attr("stroke-width", "0.5").attr("stroke", r).attr("d", "Mstartx,startyc0,-10 half,-10 half,-10c0,0 half,0 half,10l0,heightc0,10 -half,10 -half,10c0,0 -half,0 -half,-10l0,-height".replaceAll("startx", e.x).replaceAll("starty", e.y).replaceAll("half", e.width / 2).replaceAll("height", e.height));
        h.append("path").attr("fill", "none").attr("stroke-width", "0.5").attr("stroke", r).attr("d", "Mstartx,startyc0,10 half,10 half,10c0,0 half,0 half,-10".replaceAll("startx", e.x).replaceAll("starty", e.y).replaceAll("half", e.width / 2));
        break;
      case "system_queue":
      case "external_system_queue":
      case "container_queue":
      case "external_container_queue":
      case "component_queue":
      case "external_component_queue":
        h.append("path").attr("fill", i).attr("stroke-width", "0.5").attr("stroke", r).attr("d", "Mstartx,startylwidth,0c5,0 5,half 5,halfc0,0 0,half -5,halfl-width,0c-5,0 -5,-half -5,-halfc0,0 0,-half 5,-half".replaceAll("startx", e.x).replaceAll("starty", e.y).replaceAll("width", e.width).replaceAll("half", e.height / 2));
        h.append("path").attr("fill", "none").attr("stroke-width", "0.5").attr("stroke", r).attr("d", "Mstartx,startyc-5,0 -5,half -5,halfc0,half 5,half 5,half".replaceAll("startx", e.x + e.width).replaceAll("starty", e.y).replaceAll("half", e.height / 2));
    }
    let u = th(a, e.typeC4Shape.text);
    h.append("text").attr("fill", l).attr("font-family", u.fontFamily).attr("font-size", u.fontSize - 2).attr("font-style", "italic").attr("lengthAdjust", "spacing").attr("textLength", e.typeC4Shape.width).attr("x", e.x + e.width / 2 - e.typeC4Shape.width / 2).attr("y", e.y + e.typeC4Shape.Y).text("<<" + e.typeC4Shape.text + ">>");
    switch (e.typeC4Shape.text) {
      case "person":
      case "external_person":
        Z(h, 48, 48, e.x + e.width / 2 - 24, e.y + e.image.Y, o);
    }
    let p = a[e.typeC4Shape.text + "Font"]();
    p.fontWeight = "bold";
    p.fontSize = p.fontSize + 2;
    p.fontColor = l;
    td(a)(e.label.text, h, e.x, e.y + e.label.Y, e.width, e.height, {
      fill: l
    }, p);
    (p = a[e.typeC4Shape.text + "Font"]()).fontColor = l;
    if (e.techn && e.techn?.text !== "") {
      td(a)(e.techn.text, h, e.x, e.y + e.techn.Y, e.width, e.height, {
        fill: l,
        "font-style": "italic"
      }, p);
    } else if (e.type && e.type.text !== "") {
      td(a)(e.type.text, h, e.x, e.y + e.type.Y, e.width, e.height, {
        fill: l,
        "font-style": "italic"
      }, p);
    }
    if (e.descr && e.descr.text !== "") {
      (p = a.personFont()).fontColor = l;
      td(a)(e.descr.text, h, e.x, e.y + e.descr.Y, e.width, e.height, {
        fill: l
      }, p);
    }
    return e.height;
  }, "drawC4Shape");
  var tn = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("symbol").attr("id", "database").attr("fill-rule", "evenodd").attr("clip-rule", "evenodd").append("path").attr("transform", "scale(.5)").attr("d", "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z");
  }, "insertDatabaseIcon");
  var ti = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("symbol").attr("id", "computer").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr("d", "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z");
  }, "insertComputerIcon");
  var tr = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("symbol").attr("id", "clock").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr("d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z");
  }, "insertClockIcon");
  var ts = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 9).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z");
  }, "insertArrowHead");
  var tl = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("marker").attr("id", "arrowend").attr("refX", 1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 10 0 L 0 5 L 10 10 z");
  }, "insertArrowEnd");
  var to = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("marker").attr("id", "filled-head").attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "insertArrowFilledHead");
  var tc = loggerLevelUtils.setFunctionName(function (t) {
    let e = t.append("defs").append("marker").attr("id", "crosshead").attr("markerWidth", 15).attr("markerHeight", 8).attr("orient", "auto").attr("refX", 16).attr("refY", 4);
    e.append("path").attr("fill", "black").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1px").attr("d", "M 9,2 V 6 L16,4 Z");
    e.append("path").attr("fill", "none").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1px").attr("d", "M 0,1 L 6,7 M 6,1 L 0,7");
  }, "insertArrowCrossHead");
  var th = loggerLevelUtils.setFunctionName((t, e) => ({
    fontFamily: t[e + "FontFamily"],
    fontSize: t[e + "FontSize"],
    fontWeight: t[e + "FontWeight"]
  }), "getC4ShapeFont");
  var td = function () {
    function t(t, e, a, i, r, s, l) {
      n(e.append("text").attr("x", a + r / 2).attr("y", i + s / 2 + 5).style("text-anchor", "middle").text(t), l);
    }
    function e(t, e, a, i, r, s, l, h) {
      let {
        fontSize: d,
        fontFamily: u,
        fontWeight: p
      } = h;
      let y = t.split(mermaidConfigUtils_1.textUtilities.lineBreakRegex);
      for (let t = 0; t < y.length; t++) {
        let s = t * d - d * (y.length - 1) / 2;
        let o = e.append("text").attr("x", a + r / 2).attr("y", i).style("text-anchor", "middle").attr("dominant-baseline", "middle").style("font-size", d).style("font-weight", p).style("font-family", u);
        o.append("tspan").attr("dy", s).text(y[t]).attr("alignment-baseline", "mathematical");
        n(o, l);
      }
    }
    function a(t, a, i, r, s, l, o, h) {
      let d = a.append("switch");
      let u = d.append("foreignObject").attr("x", i).attr("y", r).attr("width", s).attr("height", l).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
      u.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(t);
      e(t, d, i, r, s, l, o, h);
      n(u, o);
    }
    function n(t, e) {
      for (let a in e) {
        if (e.hasOwnProperty(a)) {
          t.attr(a, e[a]);
        }
      }
    }
    loggerLevelUtils.setFunctionName(t, "byText");
    loggerLevelUtils.setFunctionName(e, "byTspan");
    loggerLevelUtils.setFunctionName(a, "byFo");
    loggerLevelUtils.setFunctionName(n, "_setTextAttrs");
    return function (n) {
      if (n.textPlacement === "fo") {
        return a;
      } else if (n.textPlacement === "old") {
        return t;
      } else {
        return e;
      }
    };
  }();
  var tu = {
    drawBoundary: te,
    drawC4Shape: ta,
    drawRels: tt,
    insertArrowHead: ts,
    insertArrowEnd: tl,
    insertArrowFilledHead: to,
    insertArrowCrossHead: tc,
    insertDatabaseIcon: tn,
    insertComputerIcon: ti,
    insertClockIcon: tr
  };
  var tp = 0;
  var ty = 0;
  var tf = 4;
  var tg = 2;
  p.yy = K;
  var tb = {};
  n = class {
    setData(t, e, a, n) {
      this.nextData.startx = this.data.startx = t;
      this.nextData.stopx = this.data.stopx = e;
      this.nextData.starty = this.data.starty = a;
      this.nextData.stopy = this.data.stopy = n;
    }
    updateVal(t, e, a, n) {
      if (t[e] === undefined) {
        t[e] = a;
      } else {
        t[e] = n(a, t[e]);
      }
    }
    insert(t) {
      this.nextData.cnt = this.nextData.cnt + 1;
      let e = this.nextData.startx === this.nextData.stopx ? this.nextData.stopx + t.margin : this.nextData.stopx + t.margin * 2;
      let a = e + t.width;
      let n = this.nextData.starty + t.margin * 2;
      let i = n + t.height;
      if (e >= this.data.widthLimit || a >= this.data.widthLimit || this.nextData.cnt > tf) {
        e = this.nextData.startx + t.margin + tb.nextLinePaddingX;
        n = this.nextData.stopy + t.margin * 2;
        this.nextData.stopx = a = e + t.width;
        this.nextData.starty = this.nextData.stopy;
        this.nextData.stopy = i = n + t.height;
        this.nextData.cnt = 1;
      }
      t.x = e;
      t.y = n;
      this.updateVal(this.data, "startx", e, Math.min);
      this.updateVal(this.data, "starty", n, Math.min);
      this.updateVal(this.data, "stopx", a, Math.max);
      this.updateVal(this.data, "stopy", i, Math.max);
      this.updateVal(this.nextData, "startx", e, Math.min);
      this.updateVal(this.nextData, "starty", n, Math.min);
      this.updateVal(this.nextData, "stopx", a, Math.max);
      this.updateVal(this.nextData, "stopy", i, Math.max);
    }
    init(t) {
      this.name = "";
      this.data = {
        startx: undefined,
        stopx: undefined,
        starty: undefined,
        stopy: undefined,
        widthLimit: undefined
      };
      this.nextData = {
        startx: undefined,
        stopx: undefined,
        starty: undefined,
        stopy: undefined,
        cnt: 0
      };
      t_(t.db.getConfig());
    }
    bumpLastMargin(t) {
      this.data.stopx += t;
      this.data.stopy += t;
    }
    constructor(t) {
      this.name = "";
      this.data = {};
      this.data.startx = undefined;
      this.data.stopx = undefined;
      this.data.starty = undefined;
      this.data.stopy = undefined;
      this.data.widthLimit = undefined;
      this.nextData = {};
      this.nextData.startx = undefined;
      this.nextData.stopx = undefined;
      this.nextData.starty = undefined;
      this.nextData.stopy = undefined;
      this.nextData.cnt = 0;
      t_(t.db.getConfig());
    }
  };
  loggerLevelUtils.setFunctionName(n, "Bounds");
  var tx = n;
  var t_ = loggerLevelUtils.setFunctionName(function (t) {
    mermaidConfigUtils_1.assignWithDepth(tb, t);
    if (t.fontFamily) {
      tb.personFontFamily = tb.systemFontFamily = tb.messageFontFamily = t.fontFamily;
    }
    if (t.fontSize) {
      tb.personFontSize = tb.systemFontSize = tb.messageFontSize = t.fontSize;
    }
    if (t.fontWeight) {
      tb.personFontWeight = tb.systemFontWeight = tb.messageFontWeight = t.fontWeight;
    }
  }, "setConf");
  var tm = loggerLevelUtils.setFunctionName((t, e) => ({
    fontFamily: t[e + "FontFamily"],
    fontSize: t[e + "FontSize"],
    fontWeight: t[e + "FontWeight"]
  }), "c4ShapeFont");
  var tE = loggerLevelUtils.setFunctionName(t => ({
    fontFamily: t.boundaryFontFamily,
    fontSize: t.boundaryFontSize,
    fontWeight: t.boundaryFontWeight
  }), "boundaryFont");
  var tA = loggerLevelUtils.setFunctionName(t => ({
    fontFamily: t.messageFontFamily,
    fontSize: t.messageFontSize,
    fontWeight: t.messageFontWeight
  }), "messageFont");
  function tS(t, e, a, n, i) {
    if (!e[t].width) {
      if (a) {
        e[t].text = mermaidDiagramUtils.wrapLabel(e[t].text, i, n);
        e[t].textLines = e[t].text.split(mermaidConfigUtils_1.textUtilities.lineBreakRegex).length;
        e[t].width = i;
        e[t].height = mermaidDiagramUtils.calcTextHeight(e[t].text, n);
      } else {
        let a = e[t].text.split(mermaidConfigUtils_1.textUtilities.lineBreakRegex);
        e[t].textLines = a.length;
        let i = 0;
        e[t].height = 0;
        e[t].width = 0;
        for (let r of a) {
          e[t].width = Math.max(mermaidDiagramUtils.calcTextWidth(r, n), e[t].width);
          i = mermaidDiagramUtils.calcTextHeight(r, n);
          e[t].height = e[t].height + i;
        }
      }
    }
  }
  loggerLevelUtils.setFunctionName(tS, "calcC4ShapeTextWH");
  var tC = loggerLevelUtils.setFunctionName(function (t, e, a) {
    e.x = a.data.startx;
    e.y = a.data.starty;
    e.width = a.data.stopx - a.data.startx;
    e.height = a.data.stopy - a.data.starty;
    e.label.y = tb.c4ShapeMargin - 35;
    let n = e.wrap && tb.wrap;
    let i = tE(tb);
    i.fontSize = i.fontSize + 2;
    i.fontWeight = "bold";
    let r = mermaidDiagramUtils.calcTextWidth(e.label.text, i);
    tS("label", e, n, i, r);
    tu.drawBoundary(t, e, tb);
  }, "drawBoundary");
  var tO = loggerLevelUtils.setFunctionName(function (t, e, a, n) {
    let i = 0;
    for (let r of n) {
      i = 0;
      let n = a[r];
      let s = tm(tb, n.typeC4Shape.text);
      s.fontSize = s.fontSize - 2;
      n.typeC4Shape.width = mermaidDiagramUtils.calcTextWidth("«" + n.typeC4Shape.text + "»", s);
      n.typeC4Shape.height = s.fontSize + 2;
      n.typeC4Shape.Y = tb.c4ShapePadding;
      i = n.typeC4Shape.Y + n.typeC4Shape.height - 4;
      n.image = {
        width: 0,
        height: 0,
        Y: 0
      };
      switch (n.typeC4Shape.text) {
        case "person":
        case "external_person":
          n.image.width = 48;
          n.image.height = 48;
          n.image.Y = i;
          i = n.image.Y + n.image.height;
      }
      if (n.sprite) {
        n.image.width = 48;
        n.image.height = 48;
        n.image.Y = i;
        i = n.image.Y + n.image.height;
      }
      let o = n.wrap && tb.wrap;
      let h = tb.width - tb.c4ShapePadding * 2;
      let d = tm(tb, n.typeC4Shape.text);
      d.fontSize = d.fontSize + 2;
      d.fontWeight = "bold";
      tS("label", n, o, d, h);
      n.label.Y = i + 8;
      i = n.label.Y + n.label.height;
      if (n.type && n.type.text !== "") {
        n.type.text = "[" + n.type.text + "]";
        let t = tm(tb, n.typeC4Shape.text);
        tS("type", n, o, t, h);
        n.type.Y = i + 5;
        i = n.type.Y + n.type.height;
      } else if (n.techn && n.techn.text !== "") {
        n.techn.text = "[" + n.techn.text + "]";
        let t = tm(tb, n.techn.text);
        tS("techn", n, o, t, h);
        n.techn.Y = i + 5;
        i = n.techn.Y + n.techn.height;
      }
      let u = i;
      let p = n.label.width;
      if (n.descr && n.descr.text !== "") {
        let t = tm(tb, n.typeC4Shape.text);
        tS("descr", n, o, t, h);
        n.descr.Y = i + 20;
        i = n.descr.Y + n.descr.height;
        p = Math.max(n.label.width, n.descr.width);
        u = i - n.descr.textLines * 5;
      }
      p += tb.c4ShapePadding;
      n.width = Math.max(n.width || tb.width, p, tb.width);
      n.height = Math.max(n.height || tb.height, u, tb.height);
      n.margin = n.margin || tb.c4ShapeMargin;
      t.insert(n);
      tu.drawC4Shape(e, n, tb);
    }
    t.bumpLastMargin(tb.c4ShapeMargin);
  }, "drawC4ShapeArray");
  i = class {
    constructor(t, e) {
      this.x = t;
      this.y = e;
    }
  };
  loggerLevelUtils.setFunctionName(i, "Point");
  var tk = i;
  var tw = loggerLevelUtils.setFunctionName(function (t, e) {
    let a = t.x;
    let n = t.y;
    let i = e.x;
    let r = e.y;
    let s = a + t.width / 2;
    let l = n + t.height / 2;
    let o = Math.abs(a - i);
    let h = Math.abs(n - r);
    let d = h / o;
    let u = t.height / t.width;
    let p = null;
    if (n == r && a < i) {
      p = new tk(a + t.width, l);
    } else if (n == r && a > i) {
      p = new tk(a, l);
    } else if (a == i && n < r) {
      p = new tk(s, n + t.height);
    } else if (a == i && n > r) {
      p = new tk(s, n);
    }
    if (a > i && n < r) {
      p = u >= d ? new tk(a, l + d * t.width / 2) : new tk(s - o / h * t.height / 2, n + t.height);
    } else if (a < i && n < r) {
      p = u >= d ? new tk(a + t.width, l + d * t.width / 2) : new tk(s + o / h * t.height / 2, n + t.height);
    } else if (a < i && n > r) {
      p = u >= d ? new tk(a + t.width, l - d * t.width / 2) : new tk(s + t.height / 2 * o / h, n);
    } else if (a > i && n > r) {
      p = u >= d ? new tk(a, l - t.width / 2 * d) : new tk(s - t.height / 2 * o / h, n);
    }
    return p;
  }, "getIntersectPoint");
  var tT = loggerLevelUtils.setFunctionName(function (t, e) {
    let a = {
      x: 0,
      y: 0
    };
    a.x = e.x + e.width / 2;
    a.y = e.y + e.height / 2;
    let n = tw(t, a);
    a.x = t.x + t.width / 2;
    a.y = t.y + t.height / 2;
    return {
      startPoint: n,
      endPoint: tw(e, a)
    };
  }, "getIntersectPoints");
  var tv = loggerLevelUtils.setFunctionName(function (t, e, a, n) {
    let i = 0;
    for (let t of e) {
      i += 1;
      let e = t.wrap && tb.wrap;
      let r = tA(tb);
      if (n.db.getC4Type() === "C4Dynamic") {
        t.label.text = i + ": " + t.label.text;
      }
      let s = mermaidDiagramUtils.calcTextWidth(t.label.text, r);
      tS("label", t, e, r, s);
      if (t.techn && t.techn.text !== "") {
        s = mermaidDiagramUtils.calcTextWidth(t.techn.text, r);
        tS("techn", t, e, r, s);
      }
      if (t.descr && t.descr.text !== "") {
        s = mermaidDiagramUtils.calcTextWidth(t.descr.text, r);
        tS("descr", t, e, r, s);
      }
      let o = tT(a(t.from), a(t.to));
      t.startPoint = o.startPoint;
      t.endPoint = o.endPoint;
    }
    tu.drawRels(t, e, tb);
  }, "drawRels");
  function tR(t, e, a, n, i) {
    let r = new tx(i);
    r.data.widthLimit = a.data.widthLimit / Math.min(tg, n.length);
    for (let [s, l] of n.entries()) {
      let n = 0;
      l.image = {
        width: 0,
        height: 0,
        Y: 0
      };
      if (l.sprite) {
        l.image.width = 48;
        l.image.height = 48;
        l.image.Y = n;
        n = l.image.Y + l.image.height;
      }
      let o = l.wrap && tb.wrap;
      let h = tE(tb);
      h.fontSize = h.fontSize + 2;
      h.fontWeight = "bold";
      tS("label", l, o, h, r.data.widthLimit);
      l.label.Y = n + 8;
      n = l.label.Y + l.label.height;
      if (l.type && l.type.text !== "") {
        l.type.text = "[" + l.type.text + "]";
        tS("type", l, o, tE(tb), r.data.widthLimit);
        l.type.Y = n + 5;
        n = l.type.Y + l.type.height;
      }
      if (l.descr && l.descr.text !== "") {
        let t = tE(tb);
        t.fontSize = t.fontSize - 2;
        tS("descr", l, o, t, r.data.widthLimit);
        l.descr.Y = n + 20;
        n = l.descr.Y + l.descr.height;
      }
      if (s == 0 || s % tg == 0) {
        let t = a.data.startx + tb.diagramMarginX;
        let e = a.data.stopy + tb.diagramMarginY + n;
        r.setData(t, t, e, e);
      } else {
        let t = r.data.stopx !== r.data.startx ? r.data.stopx + tb.diagramMarginX : r.data.startx;
        let e = r.data.starty;
        r.setData(t, t, e, e);
      }
      r.name = l.alias;
      let d = i.db.getC4ShapeArray(l.alias);
      let u = i.db.getC4ShapeKeys(l.alias);
      if (u.length > 0) {
        tO(r, t, d, u);
      }
      e = l.alias;
      let p = i.db.getBoundaries(e);
      if (p.length > 0) {
        tR(t, e, r, p, i);
      }
      if (l.alias !== "global") {
        tC(t, l, r);
      }
      a.data.stopy = Math.max(r.data.stopy + tb.c4ShapeMargin, a.data.stopy);
      a.data.stopx = Math.max(r.data.stopx + tb.c4ShapeMargin, a.data.stopx);
      tp = Math.max(tp, a.data.stopx);
      ty = Math.max(ty, a.data.stopy);
    }
  }
  loggerLevelUtils.setFunctionName(tR, "drawInsideBoundary");
  var tD = {
    drawPersonOrSystemArray: tO,
    drawBoundary: tC,
    setConf: t_,
    draw: loggerLevelUtils.setFunctionName(function (t, e, a, n) {
      let i;
      tb = mermaidConfigUtils_1.getConfigAlias().c4;
      let r = mermaidConfigUtils_1.getConfigAlias().securityLevel;
      if (r === "sandbox") {
        i = axisAndZoomUtilities.select("#i" + e);
      }
      let s = r === "sandbox" ? axisAndZoomUtilities.select(i.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body");
      let l = n.db;
      n.db.setWrap(tb.wrap);
      tf = l.getC4ShapeInRow();
      tg = l.getC4BoundaryInRow();
      loggerLevelUtils.logger.debug(`C:${JSON.stringify(tb, null, 2)}`);
      let u = r === "sandbox" ? s.select(`[id="${e}"]`) : axisAndZoomUtilities.select(`[id="${e}"]`);
      tu.insertComputerIcon(u);
      tu.insertDatabaseIcon(u);
      tu.insertClockIcon(u);
      let p = new tx(n);
      p.setData(tb.diagramMarginX, tb.diagramMarginX, tb.diagramMarginY, tb.diagramMarginY);
      p.data.widthLimit = screen.availWidth;
      tp = tb.diagramMarginX;
      ty = tb.diagramMarginY;
      let y = n.db.getTitle();
      tR(u, "", p, n.db.getBoundaries(""), n);
      tu.insertArrowHead(u);
      tu.insertArrowEnd(u);
      tu.insertArrowCrossHead(u);
      tu.insertArrowFilledHead(u);
      tv(u, n.db.getRels(), n.db.getC4Shape, n);
      p.data.stopx = tp;
      p.data.stopy = ty;
      let f = p.data;
      let g = f.stopy - f.starty + tb.diagramMarginY * 2;
      let b = f.stopx - f.startx + tb.diagramMarginX * 2;
      if (y) {
        u.append("text").text(y).attr("x", (f.stopx - f.startx) / 2 - tb.diagramMarginX * 4).attr("y", f.starty + tb.diagramMarginY);
      }
      mermaidConfigUtils_1.configureSvgSize(u, g, b, tb.useMaxWidth);
      let x = !!y * 60;
      u.attr("viewBox", f.startx - tb.diagramMarginX + " -" + (tb.diagramMarginY + x) + " " + b + " " + (g + x));
      loggerLevelUtils.logger.debug("models:", f);
    }, "draw")
  };
  var tN = {
    parser: p,
    db: K,
    renderer: tD,
    styles: loggerLevelUtils.setFunctionName(t => `.person {
    stroke: ${t.personBorder};
    fill: ${t.personBkg};
  }
`, "getStyles"),
    init: loggerLevelUtils.setFunctionName(t => {
      let {
        c4: e,
        wrap: a
      } = t;
      tD.setConf(e);
      K.setWrap(a);
    }, "init")
  };
  require.d(exports, {
    diagram: function () {
      return tN;
    }
  });
}