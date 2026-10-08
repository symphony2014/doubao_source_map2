// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'mermaidShapeDrawers'
// - Resolved require(88456) to 'mermaid-shape-drawers'
// - Renamed variable 'l' to 'mermaidTextLayoutUtils'
// - Resolved require(997032) to 'mermaid-text-layout-utils'
// - Renamed variable 'o' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'h' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Renamed variable 'u' to 'urlSanitizer'
// - Resolved require(568747) to 'url-sanitizer'
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'oO' to 'sanitizeText' (module 101498)
// - Updated imported property 'nV' to 'getConfigAlias' (module 101498)
// - Updated imported property 'GN' to 'setAccTitle' (module 101498)
// - Updated imported property 'eu' to 'getAccTitle' (module 101498)
// - Updated imported property 'Mx' to 'getAccDescription' (module 101498)
// - Updated imported property 'U$' to 'setAccDescription' (module 101498)
// - Updated imported property 'SY' to 'textUtils' (module 101498)
// - Updated imported property 'Yc' to 'assignWithDepth' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'v2' to 'configureSvgSize' (module 101498)
// - Updated imported property 'Mu' to 'drawRect' (module 88456)
// - Updated imported property 'kc' to 'getNoteRect' (module 88456)
// - Updated imported property 'X4' to 'wrapLabel' (module 997032)
// - Updated imported property 'XD' to 'calculateTextHeight' (module 997032)
// - Updated imported property 'Cq' to 'calculateTextWidth' (module 997032)
// - Updated imported property 'Ys' to 'select' (module 381804)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 65210.587e23df.js
         * chunkId: 65210
         * moduleId: 858244
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var a;
  var mermaidShapeDrawers = require("mermaid-shape-drawers") /*id: 88456*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var urlSanitizer = require("url-sanitizer") /*id: 568747*/;
  var d = function () {
    var t = mermaidConfigUtils.setName(function (t, e, n, i) {
      n = n || {};
      i = t.length;
      for (; i--; n[t[i]] = e);
      return n;
    }, "o");
    var e = [1, 24];
    var n = [1, 25];
    var i = [1, 26];
    var r = [1, 27];
    var a = [1, 28];
    var s = [1, 63];
    var l = [1, 64];
    var h = [1, 65];
    var u = [1, 66];
    var d = [1, 67];
    var p = [1, 68];
    var y = [1, 69];
    var f = [1, 29];
    var g = [1, 30];
    var b = [1, 31];
    var x = [1, 32];
    var m = [1, 33];
    var _ = [1, 34];
    var E = [1, 35];
    var S = [1, 36];
    var v = [1, 37];
    var C = [1, 38];
    var A = [1, 39];
    var w = [1, 40];
    var R = [1, 41];
    var O = [1, 42];
    var k = [1, 43];
    var T = [1, 44];
    var W = [1, 45];
    var M = [1, 46];
    var N = [1, 47];
    var D = [1, 48];
    var B = [1, 50];
    var P = [1, 51];
    var L = [1, 52];
    var j = [1, 53];
    var F = [1, 54];
    var I = [1, 55];
    var Y = [1, 56];
    var $ = [1, 57];
    var U = [1, 58];
    var z = [1, 59];
    var X = [1, 60];
    var Q = [14, 42];
    var H = [14, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
    var q = [12, 14, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
    var V = [1, 82];
    var Z = [1, 83];
    var G = [1, 84];
    var K = [1, 85];
    var J = [12, 14, 42];
    var tt = [12, 14, 33, 42];
    var te = [12, 14, 33, 42, 76, 77, 79, 80];
    var tn = [12, 33];
    var ti = [34, 36, 37, 38, 39, 40, 41, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
    var tr = {
      trace: mermaidConfigUtils.setName(function () {}, "trace"),
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
      performAction: mermaidConfigUtils.setName(function (t, e, n, i, r, a, s) {
        var l = a.length - 1;
        switch (r) {
          case 3:
            i.setDirection("TB");
            break;
          case 4:
            i.setDirection("BT");
            break;
          case 5:
            i.setDirection("RL");
            break;
          case 6:
            i.setDirection("LR");
            break;
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
            i.setC4Type(a[l - 3]);
            break;
          case 19:
            i.setTitle(a[l].substring(6));
            this.$ = a[l].substring(6);
            break;
          case 20:
            i.setAccDescription(a[l].substring(15));
            this.$ = a[l].substring(15);
            break;
          case 21:
            this.$ = a[l].trim();
            i.setTitle(this.$);
            break;
          case 22:
          case 23:
            this.$ = a[l].trim();
            i.setAccDescription(this.$);
            break;
          case 28:
            a[l].splice(2, 0, "ENTERPRISE");
            i.addPersonOrSystemBoundary(...a[l]);
            this.$ = a[l];
            break;
          case 29:
            a[l].splice(2, 0, "SYSTEM");
            i.addPersonOrSystemBoundary(...a[l]);
            this.$ = a[l];
            break;
          case 30:
            i.addPersonOrSystemBoundary(...a[l]);
            this.$ = a[l];
            break;
          case 31:
            a[l].splice(2, 0, "CONTAINER");
            i.addContainerBoundary(...a[l]);
            this.$ = a[l];
            break;
          case 32:
            i.addDeploymentNode("node", ...a[l]);
            this.$ = a[l];
            break;
          case 33:
            i.addDeploymentNode("nodeL", ...a[l]);
            this.$ = a[l];
            break;
          case 34:
            i.addDeploymentNode("nodeR", ...a[l]);
            this.$ = a[l];
            break;
          case 35:
            i.popBoundaryParseStack();
            break;
          case 39:
            i.addPersonOrSystem("person", ...a[l]);
            this.$ = a[l];
            break;
          case 40:
            i.addPersonOrSystem("external_person", ...a[l]);
            this.$ = a[l];
            break;
          case 41:
            i.addPersonOrSystem("system", ...a[l]);
            this.$ = a[l];
            break;
          case 42:
            i.addPersonOrSystem("system_db", ...a[l]);
            this.$ = a[l];
            break;
          case 43:
            i.addPersonOrSystem("system_queue", ...a[l]);
            this.$ = a[l];
            break;
          case 44:
            i.addPersonOrSystem("external_system", ...a[l]);
            this.$ = a[l];
            break;
          case 45:
            i.addPersonOrSystem("external_system_db", ...a[l]);
            this.$ = a[l];
            break;
          case 46:
            i.addPersonOrSystem("external_system_queue", ...a[l]);
            this.$ = a[l];
            break;
          case 47:
            i.addContainer("container", ...a[l]);
            this.$ = a[l];
            break;
          case 48:
            i.addContainer("container_db", ...a[l]);
            this.$ = a[l];
            break;
          case 49:
            i.addContainer("container_queue", ...a[l]);
            this.$ = a[l];
            break;
          case 50:
            i.addContainer("external_container", ...a[l]);
            this.$ = a[l];
            break;
          case 51:
            i.addContainer("external_container_db", ...a[l]);
            this.$ = a[l];
            break;
          case 52:
            i.addContainer("external_container_queue", ...a[l]);
            this.$ = a[l];
            break;
          case 53:
            i.addComponent("component", ...a[l]);
            this.$ = a[l];
            break;
          case 54:
            i.addComponent("component_db", ...a[l]);
            this.$ = a[l];
            break;
          case 55:
            i.addComponent("component_queue", ...a[l]);
            this.$ = a[l];
            break;
          case 56:
            i.addComponent("external_component", ...a[l]);
            this.$ = a[l];
            break;
          case 57:
            i.addComponent("external_component_db", ...a[l]);
            this.$ = a[l];
            break;
          case 58:
            i.addComponent("external_component_queue", ...a[l]);
            this.$ = a[l];
            break;
          case 60:
            i.addRel("rel", ...a[l]);
            this.$ = a[l];
            break;
          case 61:
            i.addRel("birel", ...a[l]);
            this.$ = a[l];
            break;
          case 62:
            i.addRel("rel_u", ...a[l]);
            this.$ = a[l];
            break;
          case 63:
            i.addRel("rel_d", ...a[l]);
            this.$ = a[l];
            break;
          case 64:
            i.addRel("rel_l", ...a[l]);
            this.$ = a[l];
            break;
          case 65:
            i.addRel("rel_r", ...a[l]);
            this.$ = a[l];
            break;
          case 66:
            i.addRel("rel_b", ...a[l]);
            this.$ = a[l];
            break;
          case 67:
            a[l].splice(0, 1);
            i.addRel("rel", ...a[l]);
            this.$ = a[l];
            break;
          case 68:
            i.updateElStyle("update_el_style", ...a[l]);
            this.$ = a[l];
            break;
          case 69:
            i.updateRelStyle("update_rel_style", ...a[l]);
            this.$ = a[l];
            break;
          case 70:
            i.updateLayoutConfig("update_layout_config", ...a[l]);
            this.$ = a[l];
            break;
          case 71:
            this.$ = [a[l]];
            break;
          case 72:
            a[l].unshift(a[l - 1]);
            this.$ = a[l];
            break;
          case 73:
          case 75:
            this.$ = a[l].trim();
            break;
          case 74:
            let o = {};
            o[a[l - 1].trim()] = a[l].trim();
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
        23: n,
        24: i,
        26: r,
        28: a,
        29: 49,
        30: 61,
        32: 62,
        34: s,
        36: l,
        37: h,
        38: u,
        39: d,
        40: p,
        41: y,
        43: 23,
        44: f,
        45: g,
        46: b,
        47: x,
        48: m,
        49: _,
        50: E,
        51: S,
        52: v,
        53: C,
        54: A,
        55: w,
        56: R,
        57: O,
        58: k,
        59: T,
        60: W,
        61: M,
        62: N,
        63: D,
        64: B,
        65: P,
        66: L,
        67: j,
        68: F,
        69: I,
        70: Y,
        71: $,
        72: U,
        73: z,
        74: X
      }, {
        13: 70,
        19: 20,
        20: 21,
        21: 22,
        22: e,
        23: n,
        24: i,
        26: r,
        28: a,
        29: 49,
        30: 61,
        32: 62,
        34: s,
        36: l,
        37: h,
        38: u,
        39: d,
        40: p,
        41: y,
        43: 23,
        44: f,
        45: g,
        46: b,
        47: x,
        48: m,
        49: _,
        50: E,
        51: S,
        52: v,
        53: C,
        54: A,
        55: w,
        56: R,
        57: O,
        58: k,
        59: T,
        60: W,
        61: M,
        62: N,
        63: D,
        64: B,
        65: P,
        66: L,
        67: j,
        68: F,
        69: I,
        70: Y,
        71: $,
        72: U,
        73: z,
        74: X
      }, {
        13: 71,
        19: 20,
        20: 21,
        21: 22,
        22: e,
        23: n,
        24: i,
        26: r,
        28: a,
        29: 49,
        30: 61,
        32: 62,
        34: s,
        36: l,
        37: h,
        38: u,
        39: d,
        40: p,
        41: y,
        43: 23,
        44: f,
        45: g,
        46: b,
        47: x,
        48: m,
        49: _,
        50: E,
        51: S,
        52: v,
        53: C,
        54: A,
        55: w,
        56: R,
        57: O,
        58: k,
        59: T,
        60: W,
        61: M,
        62: N,
        63: D,
        64: B,
        65: P,
        66: L,
        67: j,
        68: F,
        69: I,
        70: Y,
        71: $,
        72: U,
        73: z,
        74: X
      }, {
        13: 72,
        19: 20,
        20: 21,
        21: 22,
        22: e,
        23: n,
        24: i,
        26: r,
        28: a,
        29: 49,
        30: 61,
        32: 62,
        34: s,
        36: l,
        37: h,
        38: u,
        39: d,
        40: p,
        41: y,
        43: 23,
        44: f,
        45: g,
        46: b,
        47: x,
        48: m,
        49: _,
        50: E,
        51: S,
        52: v,
        53: C,
        54: A,
        55: w,
        56: R,
        57: O,
        58: k,
        59: T,
        60: W,
        61: M,
        62: N,
        63: D,
        64: B,
        65: P,
        66: L,
        67: j,
        68: F,
        69: I,
        70: Y,
        71: $,
        72: U,
        73: z,
        74: X
      }, {
        13: 73,
        19: 20,
        20: 21,
        21: 22,
        22: e,
        23: n,
        24: i,
        26: r,
        28: a,
        29: 49,
        30: 61,
        32: 62,
        34: s,
        36: l,
        37: h,
        38: u,
        39: d,
        40: p,
        41: y,
        43: 23,
        44: f,
        45: g,
        46: b,
        47: x,
        48: m,
        49: _,
        50: E,
        51: S,
        52: v,
        53: C,
        54: A,
        55: w,
        56: R,
        57: O,
        58: k,
        59: T,
        60: W,
        61: M,
        62: N,
        63: D,
        64: B,
        65: P,
        66: L,
        67: j,
        68: F,
        69: I,
        70: Y,
        71: $,
        72: U,
        73: z,
        74: X
      }, {
        14: [1, 74]
      }, t(Q, [2, 13], {
        43: 23,
        29: 49,
        30: 61,
        32: 62,
        20: 75,
        34: s,
        36: l,
        37: h,
        38: u,
        39: d,
        40: p,
        41: y,
        44: f,
        45: g,
        46: b,
        47: x,
        48: m,
        49: _,
        50: E,
        51: S,
        52: v,
        53: C,
        54: A,
        55: w,
        56: R,
        57: O,
        58: k,
        59: T,
        60: W,
        61: M,
        62: N,
        63: D,
        64: B,
        65: P,
        66: L,
        67: j,
        68: F,
        69: I,
        70: Y,
        71: $,
        72: U,
        73: z,
        74: X
      }), t(Q, [2, 14]), t(H, [2, 16], {
        12: [1, 76]
      }), t(Q, [2, 36], {
        12: [1, 77]
      }), t(q, [2, 19]), t(q, [2, 20]), {
        25: [1, 78]
      }, {
        27: [1, 79]
      }, t(q, [2, 23]), {
        35: 80,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 86,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 87,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 88,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 89,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 90,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 91,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 92,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 93,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 94,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 95,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 96,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 97,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 98,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 99,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 100,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 101,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 102,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 103,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 104,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, t(J, [2, 59]), {
        35: 105,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 106,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 107,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 108,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 109,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 110,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 111,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 112,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 113,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 114,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 115,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        20: 116,
        29: 49,
        30: 61,
        32: 62,
        34: s,
        36: l,
        37: h,
        38: u,
        39: d,
        40: p,
        41: y,
        43: 23,
        44: f,
        45: g,
        46: b,
        47: x,
        48: m,
        49: _,
        50: E,
        51: S,
        52: v,
        53: C,
        54: A,
        55: w,
        56: R,
        57: O,
        58: k,
        59: T,
        60: W,
        61: M,
        62: N,
        63: D,
        64: B,
        65: P,
        66: L,
        67: j,
        68: F,
        69: I,
        70: Y,
        71: $,
        72: U,
        73: z,
        74: X
      }, {
        12: [1, 118],
        33: [1, 117]
      }, {
        35: 119,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 120,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 121,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 122,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 123,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 124,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
      }, {
        35: 125,
        75: 81,
        76: V,
        77: Z,
        79: G,
        80: K
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
      }, t(Q, [2, 15]), t(H, [2, 17], {
        21: 22,
        19: 130,
        22: e,
        23: n,
        24: i,
        26: r,
        28: a
      }), t(Q, [2, 37], {
        19: 20,
        20: 21,
        21: 22,
        43: 23,
        29: 49,
        30: 61,
        32: 62,
        13: 131,
        22: e,
        23: n,
        24: i,
        26: r,
        28: a,
        34: s,
        36: l,
        37: h,
        38: u,
        39: d,
        40: p,
        41: y,
        44: f,
        45: g,
        46: b,
        47: x,
        48: m,
        49: _,
        50: E,
        51: S,
        52: v,
        53: C,
        54: A,
        55: w,
        56: R,
        57: O,
        58: k,
        59: T,
        60: W,
        61: M,
        62: N,
        63: D,
        64: B,
        65: P,
        66: L,
        67: j,
        68: F,
        69: I,
        70: Y,
        71: $,
        72: U,
        73: z,
        74: X
      }), t(q, [2, 21]), t(q, [2, 22]), t(J, [2, 39]), t(tt, [2, 71], {
        75: 81,
        35: 132,
        76: V,
        77: Z,
        79: G,
        80: K
      }), t(te, [2, 73]), {
        78: [1, 133]
      }, t(te, [2, 75]), t(te, [2, 76]), t(J, [2, 40]), t(J, [2, 41]), t(J, [2, 42]), t(J, [2, 43]), t(J, [2, 44]), t(J, [2, 45]), t(J, [2, 46]), t(J, [2, 47]), t(J, [2, 48]), t(J, [2, 49]), t(J, [2, 50]), t(J, [2, 51]), t(J, [2, 52]), t(J, [2, 53]), t(J, [2, 54]), t(J, [2, 55]), t(J, [2, 56]), t(J, [2, 57]), t(J, [2, 58]), t(J, [2, 60]), t(J, [2, 61]), t(J, [2, 62]), t(J, [2, 63]), t(J, [2, 64]), t(J, [2, 65]), t(J, [2, 66]), t(J, [2, 67]), t(J, [2, 68]), t(J, [2, 69]), t(J, [2, 70]), {
        31: 134,
        42: [1, 135]
      }, {
        12: [1, 136]
      }, {
        33: [1, 137]
      }, t(tn, [2, 28]), t(tn, [2, 29]), t(tn, [2, 30]), t(tn, [2, 31]), t(tn, [2, 32]), t(tn, [2, 33]), t(tn, [2, 34]), {
        1: [2, 9]
      }, {
        1: [2, 10]
      }, {
        1: [2, 11]
      }, {
        1: [2, 12]
      }, t(H, [2, 18]), t(Q, [2, 38]), t(tt, [2, 72]), t(te, [2, 74]), t(J, [2, 24]), t(J, [2, 35]), t(ti, [2, 25]), t(ti, [2, 26], {
        12: [1, 138]
      }), t(ti, [2, 27])],
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
        var a = [];
        var s = this.table;
        var l = "";
        var h = 0;
        var u = 0;
        var d = 0;
        var p = a.slice.call(arguments, 1);
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
        a.push(b);
        var x = y.options && y.options.ranges;
        function m() {
          var t;
          if (typeof (t = i.pop() || y.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (i = t).pop();
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
        mermaidConfigUtils.setName(function (t) {
          n.length = n.length - t * 2;
          r.length = r.length - t;
          a.length = a.length - t;
        }, "popStack");
        mermaidConfigUtils.setName(m, "lex");
        var _;
        var E;
        var S;
        var v;
        var C;
        var A;
        var w;
        var R;
        var O;
        var k = {};
        while (true) {
          S = n[n.length - 1];
          if (this.defaultActions[S]) {
            v = this.defaultActions[S];
          } else {
            if (_ == null) {
              _ = m();
            }
            v = s[S] && s[S][_];
          }
          if (v === undefined || !v.length || !v[0]) {
            var T = "";
            O = [];
            for (A in s[S]) {
              if (this.terminals_[A] && A > 2) {
                O.push("'" + this.terminals_[A] + "'");
              }
            }
            T = y.showPosition ? "Parse error on line " + (h + 1) + ":\n" + y.showPosition() + "\nExpecting " + O.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : "Parse error on line " + (h + 1) + ": Unexpected " + (_ == 1 ? "end of input" : "'" + (this.terminals_[_] || _) + "'");
            this.parseError(T, {
              text: y.match,
              token: this.terminals_[_] || _,
              line: y.yylineno,
              loc: b,
              expected: O
            });
          }
          if (v[0] instanceof Array && v.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + S + ", token: " + _);
          }
          switch (v[0]) {
            case 1:
              n.push(_);
              r.push(y.yytext);
              a.push(y.yylloc);
              n.push(v[1]);
              _ = null;
              if (E) {
                _ = E;
                E = null;
              } else {
                u = y.yyleng;
                l = y.yytext;
                h = y.yylineno;
                b = y.yylloc;
                if (d > 0) {
                  d--;
                }
              }
              break;
            case 2:
              w = this.productions_[v[1]][1];
              k.$ = r[r.length - w];
              k._$ = {
                first_line: a[a.length - (w || 1)].first_line,
                last_line: a[a.length - 1].last_line,
                first_column: a[a.length - (w || 1)].first_column,
                last_column: a[a.length - 1].last_column
              };
              if (x) {
                k._$.range = [a[a.length - (w || 1)].range[0], a[a.length - 1].range[1]];
              }
              if ((C = this.performAction.apply(k, [l, u, h, f.yy, v[1], r, a].concat(p))) !== undefined) {
                return C;
              }
              if (w) {
                n = n.slice(0, w * -1 * 2);
                r = r.slice(0, w * -1);
                a = a.slice(0, w * -1);
              }
              n.push(this.productions_[v[1]][0]);
              r.push(k.$);
              a.push(k._$);
              R = s[n[n.length - 2]][n[n.length - 1]];
              n.push(R);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var ta = {
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
          for (var a in r) {
            this[a] = r[a];
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
        var a = 0;
        for (; a < r.length; a++) {
          if ((n = this._input.match(this.rules[r[a]])) && (!e || n[0].length > e[0].length)) {
            e = n;
            i = a;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(n, r[a])) !== false) {
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
      options: {},
      performAction: mermaidConfigUtils.setName(function (t, e, n, i) {
        switch (n) {
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
    tr.lexer = ta;
    mermaidConfigUtils.setName(ts, "Parser");
    ts.prototype = tr;
    tr.Parser = ts;
    return new ts();
  }();
  d.parser = d;
  var p = [];
  var y = [""];
  var f = "global";
  var g = "";
  var b = [{
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
  var x = [];
  var m = "";
  var _ = false;
  var E = 4;
  var S = 2;
  var v = mermaidConfigUtils.setName(function () {
    return a;
  }, "getC4Type");
  var C = mermaidConfigUtils.setName(function (t) {
    a = mermaidConfigUtils.sanitizeText(t, mermaidConfigUtils.getConfigAlias());
  }, "setC4Type");
  var A = mermaidConfigUtils.setName(function (t, e, n, i, r, a, s, l, o) {
    if (t == null || e == null || n == null || i == null) {
      return;
    }
    let h = {};
    let u = x.find(t => t.from === e && t.to === n);
    if (u) {
      h = u;
    } else {
      x.push(h);
    }
    h.type = t;
    h.from = e;
    h.to = n;
    h.label = {
      text: i
    };
    if (r == null) {
      h.techn = {
        text: ""
      };
    } else if (typeof r == "object") {
      let [t, e] = Object.entries(r)[0];
      h[t] = {
        text: e
      };
    } else {
      h.techn = {
        text: r
      };
    }
    if (a == null) {
      h.descr = {
        text: ""
      };
    } else if (typeof a == "object") {
      let [t, e] = Object.entries(a)[0];
      h[t] = {
        text: e
      };
    } else {
      h.descr = {
        text: a
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
    h.wrap = H();
  }, "addRel");
  var w = mermaidConfigUtils.setName(function (t, e, n, i, r, a, s) {
    if (e === null || n === null) {
      return;
    }
    let l = {};
    let o = p.find(t => t.alias === e);
    if (o && e === o.alias) {
      l = o;
    } else {
      l.alias = e;
      p.push(l);
    }
    if (n == null) {
      l.label = {
        text: ""
      };
    } else {
      l.label = {
        text: n
      };
    }
    if (i == null) {
      l.descr = {
        text: ""
      };
    } else if (typeof i == "object") {
      let [t, e] = Object.entries(i)[0];
      l[t] = {
        text: e
      };
    } else {
      l.descr = {
        text: i
      };
    }
    if (typeof r == "object") {
      let [t, e] = Object.entries(r)[0];
      l[t] = e;
    } else {
      l.sprite = r;
    }
    if (typeof a == "object") {
      let [t, e] = Object.entries(a)[0];
      l[t] = e;
    } else {
      l.tags = a;
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
    l.parentBoundary = f;
    l.wrap = H();
  }, "addPersonOrSystem");
  var R = mermaidConfigUtils.setName(function (t, e, n, i, r, a, s, l) {
    if (e === null || n === null) {
      return;
    }
    let o = {};
    let h = p.find(t => t.alias === e);
    if (h && e === h.alias) {
      o = h;
    } else {
      o.alias = e;
      p.push(o);
    }
    if (n == null) {
      o.label = {
        text: ""
      };
    } else {
      o.label = {
        text: n
      };
    }
    if (i == null) {
      o.techn = {
        text: ""
      };
    } else if (typeof i == "object") {
      let [t, e] = Object.entries(i)[0];
      o[t] = {
        text: e
      };
    } else {
      o.techn = {
        text: i
      };
    }
    if (r == null) {
      o.descr = {
        text: ""
      };
    } else if (typeof r == "object") {
      let [t, e] = Object.entries(r)[0];
      o[t] = {
        text: e
      };
    } else {
      o.descr = {
        text: r
      };
    }
    if (typeof a == "object") {
      let [t, e] = Object.entries(a)[0];
      o[t] = e;
    } else {
      o.sprite = a;
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
    o.wrap = H();
    o.typeC4Shape = {
      text: t
    };
    o.parentBoundary = f;
  }, "addContainer");
  var O = mermaidConfigUtils.setName(function (t, e, n, i, r, a, s, l) {
    if (e === null || n === null) {
      return;
    }
    let o = {};
    let h = p.find(t => t.alias === e);
    if (h && e === h.alias) {
      o = h;
    } else {
      o.alias = e;
      p.push(o);
    }
    if (n == null) {
      o.label = {
        text: ""
      };
    } else {
      o.label = {
        text: n
      };
    }
    if (i == null) {
      o.techn = {
        text: ""
      };
    } else if (typeof i == "object") {
      let [t, e] = Object.entries(i)[0];
      o[t] = {
        text: e
      };
    } else {
      o.techn = {
        text: i
      };
    }
    if (r == null) {
      o.descr = {
        text: ""
      };
    } else if (typeof r == "object") {
      let [t, e] = Object.entries(r)[0];
      o[t] = {
        text: e
      };
    } else {
      o.descr = {
        text: r
      };
    }
    if (typeof a == "object") {
      let [t, e] = Object.entries(a)[0];
      o[t] = e;
    } else {
      o.sprite = a;
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
    o.wrap = H();
    o.typeC4Shape = {
      text: t
    };
    o.parentBoundary = f;
  }, "addComponent");
  var k = mermaidConfigUtils.setName(function (t, e, n, i, r) {
    if (t === null || e === null) {
      return;
    }
    let a = {};
    let s = b.find(e => e.alias === t);
    if (s && t === s.alias) {
      a = s;
    } else {
      a.alias = t;
      b.push(a);
    }
    if (e == null) {
      a.label = {
        text: ""
      };
    } else {
      a.label = {
        text: e
      };
    }
    if (n == null) {
      a.type = {
        text: "system"
      };
    } else if (typeof n == "object") {
      let [t, e] = Object.entries(n)[0];
      a[t] = {
        text: e
      };
    } else {
      a.type = {
        text: n
      };
    }
    if (typeof i == "object") {
      let [t, e] = Object.entries(i)[0];
      a[t] = e;
    } else {
      a.tags = i;
    }
    if (typeof r == "object") {
      let [t, e] = Object.entries(r)[0];
      a[t] = e;
    } else {
      a.link = r;
    }
    a.parentBoundary = f;
    a.wrap = H();
    g = f;
    f = t;
    y.push(g);
  }, "addPersonOrSystemBoundary");
  var T = mermaidConfigUtils.setName(function (t, e, n, i, r) {
    if (t === null || e === null) {
      return;
    }
    let a = {};
    let s = b.find(e => e.alias === t);
    if (s && t === s.alias) {
      a = s;
    } else {
      a.alias = t;
      b.push(a);
    }
    if (e == null) {
      a.label = {
        text: ""
      };
    } else {
      a.label = {
        text: e
      };
    }
    if (n == null) {
      a.type = {
        text: "container"
      };
    } else if (typeof n == "object") {
      let [t, e] = Object.entries(n)[0];
      a[t] = {
        text: e
      };
    } else {
      a.type = {
        text: n
      };
    }
    if (typeof i == "object") {
      let [t, e] = Object.entries(i)[0];
      a[t] = e;
    } else {
      a.tags = i;
    }
    if (typeof r == "object") {
      let [t, e] = Object.entries(r)[0];
      a[t] = e;
    } else {
      a.link = r;
    }
    a.parentBoundary = f;
    a.wrap = H();
    g = f;
    f = t;
    y.push(g);
  }, "addContainerBoundary");
  var W = mermaidConfigUtils.setName(function (t, e, n, i, r, a, s, l) {
    if (e === null || n === null) {
      return;
    }
    let o = {};
    let h = b.find(t => t.alias === e);
    if (h && e === h.alias) {
      o = h;
    } else {
      o.alias = e;
      b.push(o);
    }
    if (n == null) {
      o.label = {
        text: ""
      };
    } else {
      o.label = {
        text: n
      };
    }
    if (i == null) {
      o.type = {
        text: "node"
      };
    } else if (typeof i == "object") {
      let [t, e] = Object.entries(i)[0];
      o[t] = {
        text: e
      };
    } else {
      o.type = {
        text: i
      };
    }
    if (r == null) {
      o.descr = {
        text: ""
      };
    } else if (typeof r == "object") {
      let [t, e] = Object.entries(r)[0];
      o[t] = {
        text: e
      };
    } else {
      o.descr = {
        text: r
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
    o.parentBoundary = f;
    o.wrap = H();
    g = f;
    f = e;
    y.push(g);
  }, "addDeploymentNode");
  var M = mermaidConfigUtils.setName(function () {
    f = g;
    y.pop();
    g = y.pop();
    y.push(g);
  }, "popBoundaryParseStack");
  var N = mermaidConfigUtils.setName(function (t, e, n, i, r, a, s, l, o, h, u) {
    let d = p.find(t => t.alias === e);
    if (d !== undefined || (d = b.find(t => t.alias === e)) !== undefined) {
      if (n != null) {
        if (typeof n == "object") {
          let [t, e] = Object.entries(n)[0];
          d[t] = e;
        } else {
          d.bgColor = n;
        }
      }
      if (i != null) {
        if (typeof i == "object") {
          let [t, e] = Object.entries(i)[0];
          d[t] = e;
        } else {
          d.fontColor = i;
        }
      }
      if (r != null) {
        if (typeof r == "object") {
          let [t, e] = Object.entries(r)[0];
          d[t] = e;
        } else {
          d.borderColor = r;
        }
      }
      if (a != null) {
        if (typeof a == "object") {
          let [t, e] = Object.entries(a)[0];
          d[t] = e;
        } else {
          d.shadowing = a;
        }
      }
      if (s != null) {
        if (typeof s == "object") {
          let [t, e] = Object.entries(s)[0];
          d[t] = e;
        } else {
          d.shape = s;
        }
      }
      if (l != null) {
        if (typeof l == "object") {
          let [t, e] = Object.entries(l)[0];
          d[t] = e;
        } else {
          d.sprite = l;
        }
      }
      if (o != null) {
        if (typeof o == "object") {
          let [t, e] = Object.entries(o)[0];
          d[t] = e;
        } else {
          d.techn = o;
        }
      }
      if (h != null) {
        if (typeof h == "object") {
          let [t, e] = Object.entries(h)[0];
          d[t] = e;
        } else {
          d.legendText = h;
        }
      }
      if (u != null) {
        if (typeof u == "object") {
          let [t, e] = Object.entries(u)[0];
          d[t] = e;
        } else {
          d.legendSprite = u;
        }
      }
    }
  }, "updateElStyle");
  var D = mermaidConfigUtils.setName(function (t, e, n, i, r, a, s) {
    let l = x.find(t => t.from === e && t.to === n);
    if (l !== undefined) {
      if (i != null) {
        if (typeof i == "object") {
          let [t, e] = Object.entries(i)[0];
          l[t] = e;
        } else {
          l.textColor = i;
        }
      }
      if (r != null) {
        if (typeof r == "object") {
          let [t, e] = Object.entries(r)[0];
          l[t] = e;
        } else {
          l.lineColor = r;
        }
      }
      if (a != null) {
        if (typeof a == "object") {
          let [t, e] = Object.entries(a)[0];
          l[t] = parseInt(e);
        } else {
          l.offsetX = parseInt(a);
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
  var B = mermaidConfigUtils.setName(function (t, e, n) {
    let i = E;
    let r = S;
    i = typeof e == "object" ? parseInt(Object.values(e)[0]) : parseInt(e);
    r = typeof n == "object" ? parseInt(Object.values(n)[0]) : parseInt(n);
    if (i >= 1) {
      E = i;
    }
    if (r >= 1) {
      S = r;
    }
  }, "updateLayoutConfig");
  var P = mermaidConfigUtils.setName(function () {
    return E;
  }, "getC4ShapeInRow");
  var L = mermaidConfigUtils.setName(function () {
    return S;
  }, "getC4BoundaryInRow");
  var j = mermaidConfigUtils.setName(function () {
    return f;
  }, "getCurrentBoundaryParse");
  var F = mermaidConfigUtils.setName(function () {
    return g;
  }, "getParentBoundaryParse");
  var I = mermaidConfigUtils.setName(function (t) {
    if (t == null) {
      return p;
    } else {
      return p.filter(e => e.parentBoundary === t);
    }
  }, "getC4ShapeArray");
  var Y = mermaidConfigUtils.setName(function (t) {
    return p.find(e => e.alias === t);
  }, "getC4Shape");
  var $ = mermaidConfigUtils.setName(function (t) {
    return Object.keys(I(t));
  }, "getC4ShapeKeys");
  var U = mermaidConfigUtils.setName(function (t) {
    if (t == null) {
      return b;
    } else {
      return b.filter(e => e.parentBoundary === t);
    }
  }, "getBoundaries");
  var z = mermaidConfigUtils.setName(function () {
    return x;
  }, "getRels");
  var X = mermaidConfigUtils.setName(function () {
    return m;
  }, "getTitle");
  var Q = mermaidConfigUtils.setName(function (t) {
    _ = t;
  }, "setWrap");
  var H = mermaidConfigUtils.setName(function () {
    return _;
  }, "autoWrap");
  var q = mermaidConfigUtils.setName(function () {
    p = [];
    b = [{
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
    g = "";
    f = "global";
    y = [""];
    x = [];
    y = [""];
    m = "";
    _ = false;
    E = 4;
    S = 2;
  }, "clear");
  var V = mermaidConfigUtils.setName(function (t) {
    m = mermaidConfigUtils.sanitizeText(t, mermaidConfigUtils.getConfigAlias());
  }, "setTitle");
  var Z = {
    addPersonOrSystem: w,
    addPersonOrSystemBoundary: k,
    addContainer: R,
    addContainerBoundary: T,
    addComponent: O,
    addDeploymentNode: W,
    popBoundaryParseStack: M,
    addRel: A,
    updateElStyle: N,
    updateRelStyle: D,
    updateLayoutConfig: B,
    autoWrap: H,
    setWrap: Q,
    getC4ShapeArray: I,
    getC4Shape: Y,
    getC4ShapeKeys: $,
    getBoundaries: U,
    getBoundarys: U,
    getCurrentBoundaryParse: j,
    getParentBoundaryParse: F,
    getRels: z,
    getTitle: X,
    getC4Type: v,
    getC4ShapeInRow: P,
    getC4BoundaryInRow: L,
    setAccTitle: mermaidConfigUtils.setAccTitle,
    getAccTitle: mermaidConfigUtils.getAccTitle,
    getAccDescription: mermaidConfigUtils.getAccDescription,
    setAccDescription: mermaidConfigUtils.setAccDescription,
    getConfig: mermaidConfigUtils.setName(() => mermaidConfigUtils.getConfigAlias().c4, "getConfig"),
    clear: q,
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
    setTitle: V,
    setC4Type: C
  };
  var G = mermaidConfigUtils.setName(function (t, e) {
    return mermaidShapeDrawers.drawRect(t, e);
  }, "drawRect");
  var K = mermaidConfigUtils.setName(function (t, e, n, i, r, a) {
    let s = t.append("image");
    s.attr("width", e);
    s.attr("height", n);
    s.attr("x", i);
    s.attr("y", r);
    let l = a.startsWith("data:image/png;base64") ? a : urlSanitizer.sanitizeUrl(a);
    s.attr("xlink:href", l);
  }, "drawImage");
  var J = mermaidConfigUtils.setName((t, e, n) => {
    let i = t.append("g");
    let r = 0;
    for (let t of e) {
      let e = t.textColor ? t.textColor : "#444444";
      let a = t.lineColor ? t.lineColor : "#444444";
      let s = t.offsetX ? parseInt(t.offsetX) : 0;
      let l = t.offsetY ? parseInt(t.offsetY) : 0;
      if (r === 0) {
        let e = i.append("line");
        e.attr("x1", t.startPoint.x);
        e.attr("y1", t.startPoint.y);
        e.attr("x2", t.endPoint.x);
        e.attr("y2", t.endPoint.y);
        e.attr("stroke-width", "1");
        e.attr("stroke", a);
        e.style("fill", "none");
        if (t.type !== "rel_b") {
          e.attr("marker-end", "url(#arrowhead)");
        }
        if (t.type === "birel" || t.type === "rel_b") {
          e.attr("marker-start", "url(#arrowend)");
        }
        r = -1;
      } else {
        let e = i.append("path");
        e.attr("fill", "none").attr("stroke-width", "1").attr("stroke", a).attr("d", "Mstartx,starty Qcontrolx,controly stopx,stopy ".replaceAll("startx", t.startPoint.x).replaceAll("starty", t.startPoint.y).replaceAll("controlx", t.startPoint.x + (t.endPoint.x - t.startPoint.x) / 2 - (t.endPoint.x - t.startPoint.x) / 4).replaceAll("controly", t.startPoint.y + (t.endPoint.y - t.startPoint.y) / 2).replaceAll("stopx", t.endPoint.x).replaceAll("stopy", t.endPoint.y));
        if (t.type !== "rel_b") {
          e.attr("marker-end", "url(#arrowhead)");
        }
        if (t.type === "birel" || t.type === "rel_b") {
          e.attr("marker-start", "url(#arrowend)");
        }
      }
      let o = n.messageFont();
      th(n)(t.label.text, i, Math.min(t.startPoint.x, t.endPoint.x) + Math.abs(t.endPoint.x - t.startPoint.x) / 2 + s, Math.min(t.startPoint.y, t.endPoint.y) + Math.abs(t.endPoint.y - t.startPoint.y) / 2 + l, t.label.width, t.label.height, {
        fill: e
      }, o);
      if (t.techn && t.techn.text !== "") {
        o = n.messageFont();
        th(n)("[" + t.techn.text + "]", i, Math.min(t.startPoint.x, t.endPoint.x) + Math.abs(t.endPoint.x - t.startPoint.x) / 2 + s, Math.min(t.startPoint.y, t.endPoint.y) + Math.abs(t.endPoint.y - t.startPoint.y) / 2 + n.messageFontSize + 5 + l, Math.max(t.label.width, t.techn.width), t.techn.height, {
          fill: e,
          "font-style": "italic"
        }, o);
      }
    }
  }, "drawRels");
  var tt = mermaidConfigUtils.setName(function (t, e, n) {
    let i = t.append("g");
    let r = e.bgColor ? e.bgColor : "none";
    let a = e.borderColor ? e.borderColor : "#444444";
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
    G(i, {
      x: e.x,
      y: e.y,
      fill: r,
      stroke: a,
      width: e.width,
      height: e.height,
      rx: 2.5,
      ry: 2.5,
      attrs: l
    });
    let o = n.boundaryFont();
    o.fontWeight = "bold";
    o.fontSize = o.fontSize + 2;
    o.fontColor = s;
    th(n)(e.label.text, i, e.x, e.y + e.label.Y, e.width, e.height, {
      fill: "#444444"
    }, o);
    if (e.type && e.type.text !== "") {
      (o = n.boundaryFont()).fontColor = s;
      th(n)(e.type.text, i, e.x, e.y + e.type.Y, e.width, e.height, {
        fill: "#444444"
      }, o);
    }
    if (e.descr && e.descr.text !== "") {
      (o = n.boundaryFont()).fontSize = o.fontSize - 2;
      o.fontColor = s;
      th(n)(e.descr.text, i, e.x, e.y + e.descr.Y, e.width, e.height, {
        fill: "#444444"
      }, o);
    }
  }, "drawBoundary");
  var te = mermaidConfigUtils.setName(function (t, e, n) {
    let r = e.bgColor ? e.bgColor : n[e.typeC4Shape.text + "_bg_color"];
    let a = e.borderColor ? e.borderColor : n[e.typeC4Shape.text + "_border_color"];
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
    let u = mermaidShapeDrawers.getNoteRect();
    switch (e.typeC4Shape.text) {
      case "person":
      case "external_person":
      case "system":
      case "external_system":
      case "container":
      case "external_container":
      case "component":
      case "external_component":
        u.x = e.x;
        u.y = e.y;
        u.fill = r;
        u.width = e.width;
        u.height = e.height;
        u.stroke = a;
        u.rx = 2.5;
        u.ry = 2.5;
        u.attrs = {
          "stroke-width": 0.5
        };
        G(h, u);
        break;
      case "system_db":
      case "external_system_db":
      case "container_db":
      case "external_container_db":
      case "component_db":
      case "external_component_db":
        h.append("path").attr("fill", r).attr("stroke-width", "0.5").attr("stroke", a).attr("d", "Mstartx,startyc0,-10 half,-10 half,-10c0,0 half,0 half,10l0,heightc0,10 -half,10 -half,10c0,0 -half,0 -half,-10l0,-height".replaceAll("startx", e.x).replaceAll("starty", e.y).replaceAll("half", e.width / 2).replaceAll("height", e.height));
        h.append("path").attr("fill", "none").attr("stroke-width", "0.5").attr("stroke", a).attr("d", "Mstartx,startyc0,10 half,10 half,10c0,0 half,0 half,-10".replaceAll("startx", e.x).replaceAll("starty", e.y).replaceAll("half", e.width / 2));
        break;
      case "system_queue":
      case "external_system_queue":
      case "container_queue":
      case "external_container_queue":
      case "component_queue":
      case "external_component_queue":
        h.append("path").attr("fill", r).attr("stroke-width", "0.5").attr("stroke", a).attr("d", "Mstartx,startylwidth,0c5,0 5,half 5,halfc0,0 0,half -5,halfl-width,0c-5,0 -5,-half -5,-halfc0,0 0,-half 5,-half".replaceAll("startx", e.x).replaceAll("starty", e.y).replaceAll("width", e.width).replaceAll("half", e.height / 2));
        h.append("path").attr("fill", "none").attr("stroke-width", "0.5").attr("stroke", a).attr("d", "Mstartx,startyc-5,0 -5,half -5,halfc0,half 5,half 5,half".replaceAll("startx", e.x + e.width).replaceAll("starty", e.y).replaceAll("half", e.height / 2));
    }
    let d = tc(n, e.typeC4Shape.text);
    h.append("text").attr("fill", l).attr("font-family", d.fontFamily).attr("font-size", d.fontSize - 2).attr("font-style", "italic").attr("lengthAdjust", "spacing").attr("textLength", e.typeC4Shape.width).attr("x", e.x + e.width / 2 - e.typeC4Shape.width / 2).attr("y", e.y + e.typeC4Shape.Y).text("<<" + e.typeC4Shape.text + ">>");
    switch (e.typeC4Shape.text) {
      case "person":
      case "external_person":
        K(h, 48, 48, e.x + e.width / 2 - 24, e.y + e.image.Y, o);
    }
    let p = n[e.typeC4Shape.text + "Font"]();
    p.fontWeight = "bold";
    p.fontSize = p.fontSize + 2;
    p.fontColor = l;
    th(n)(e.label.text, h, e.x, e.y + e.label.Y, e.width, e.height, {
      fill: l
    }, p);
    (p = n[e.typeC4Shape.text + "Font"]()).fontColor = l;
    if (e.techn && e.techn?.text !== "") {
      th(n)(e.techn.text, h, e.x, e.y + e.techn.Y, e.width, e.height, {
        fill: l,
        "font-style": "italic"
      }, p);
    } else if (e.type && e.type.text !== "") {
      th(n)(e.type.text, h, e.x, e.y + e.type.Y, e.width, e.height, {
        fill: l,
        "font-style": "italic"
      }, p);
    }
    if (e.descr && e.descr.text !== "") {
      (p = n.personFont()).fontColor = l;
      th(n)(e.descr.text, h, e.x, e.y + e.descr.Y, e.width, e.height, {
        fill: l
      }, p);
    }
    return e.height;
  }, "drawC4Shape");
  var tn = mermaidConfigUtils.setName(function (t) {
    t.append("defs").append("symbol").attr("id", "database").attr("fill-rule", "evenodd").attr("clip-rule", "evenodd").append("path").attr("transform", "scale(.5)").attr("d", "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z");
  }, "insertDatabaseIcon");
  var ti = mermaidConfigUtils.setName(function (t) {
    t.append("defs").append("symbol").attr("id", "computer").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr("d", "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z");
  }, "insertComputerIcon");
  var tr = mermaidConfigUtils.setName(function (t) {
    t.append("defs").append("symbol").attr("id", "clock").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr("d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z");
  }, "insertClockIcon");
  var ta = mermaidConfigUtils.setName(function (t) {
    t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 9).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z");
  }, "insertArrowHead");
  var ts = mermaidConfigUtils.setName(function (t) {
    t.append("defs").append("marker").attr("id", "arrowend").attr("refX", 1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 10 0 L 0 5 L 10 10 z");
  }, "insertArrowEnd");
  var tl = mermaidConfigUtils.setName(function (t) {
    t.append("defs").append("marker").attr("id", "filled-head").attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "insertArrowFilledHead");
  var to = mermaidConfigUtils.setName(function (t) {
    let e = t.append("defs").append("marker").attr("id", "crosshead").attr("markerWidth", 15).attr("markerHeight", 8).attr("orient", "auto").attr("refX", 16).attr("refY", 4);
    e.append("path").attr("fill", "black").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1px").attr("d", "M 9,2 V 6 L16,4 Z");
    e.append("path").attr("fill", "none").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1px").attr("d", "M 0,1 L 6,7 M 6,1 L 0,7");
  }, "insertArrowCrossHead");
  var tc = mermaidConfigUtils.setName((t, e) => ({
    fontFamily: t[e + "FontFamily"],
    fontSize: t[e + "FontSize"],
    fontWeight: t[e + "FontWeight"]
  }), "getC4ShapeFont");
  var th = function () {
    function t(t, e, n, r, a, s, l) {
      i(e.append("text").attr("x", n + a / 2).attr("y", r + s / 2 + 5).style("text-anchor", "middle").text(t), l);
    }
    function e(t, e, n, r, a, s, l, h) {
      let {
        fontSize: u,
        fontFamily: d,
        fontWeight: p
      } = h;
      let y = t.split(mermaidConfigUtils.textUtils.lineBreakRegex);
      for (let t = 0; t < y.length; t++) {
        let s = t * u - u * (y.length - 1) / 2;
        let o = e.append("text").attr("x", n + a / 2).attr("y", r).style("text-anchor", "middle").attr("dominant-baseline", "middle").style("font-size", u).style("font-weight", p).style("font-family", d);
        o.append("tspan").attr("dy", s).text(y[t]).attr("alignment-baseline", "mathematical");
        i(o, l);
      }
    }
    function n(t, n, r, a, s, l, o, h) {
      let u = n.append("switch");
      let d = u.append("foreignObject").attr("x", r).attr("y", a).attr("width", s).attr("height", l).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
      d.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(t);
      e(t, u, r, a, s, l, o, h);
      i(d, o);
    }
    function i(t, e) {
      for (let n in e) {
        if (e.hasOwnProperty(n)) {
          t.attr(n, e[n]);
        }
      }
    }
    mermaidConfigUtils.setName(t, "byText");
    mermaidConfigUtils.setName(e, "byTspan");
    mermaidConfigUtils.setName(n, "byFo");
    mermaidConfigUtils.setName(i, "_setTextAttrs");
    return function (i) {
      if (i.textPlacement === "fo") {
        return n;
      } else if (i.textPlacement === "old") {
        return t;
      } else {
        return e;
      }
    };
  }();
  var tu = {
    drawBoundary: tt,
    drawC4Shape: te,
    drawRels: J,
    insertArrowHead: ta,
    insertArrowEnd: ts,
    insertArrowFilledHead: tl,
    insertArrowCrossHead: to,
    insertDatabaseIcon: tn,
    insertComputerIcon: ti,
    insertClockIcon: tr
  };
  var td = 0;
  var tp = 0;
  var ty = 4;
  var tf = 2;
  d.yy = Z;
  var tg = {};
  i = class {
    setData(t, e, n, i) {
      this.nextData.startx = this.data.startx = t;
      this.nextData.stopx = this.data.stopx = e;
      this.nextData.starty = this.data.starty = n;
      this.nextData.stopy = this.data.stopy = i;
    }
    updateVal(t, e, n, i) {
      if (t[e] === undefined) {
        t[e] = n;
      } else {
        t[e] = i(n, t[e]);
      }
    }
    insert(t) {
      this.nextData.cnt = this.nextData.cnt + 1;
      let e = this.nextData.startx === this.nextData.stopx ? this.nextData.stopx + t.margin : this.nextData.stopx + t.margin * 2;
      let n = e + t.width;
      let i = this.nextData.starty + t.margin * 2;
      let r = i + t.height;
      if (e >= this.data.widthLimit || n >= this.data.widthLimit || this.nextData.cnt > ty) {
        e = this.nextData.startx + t.margin + tg.nextLinePaddingX;
        i = this.nextData.stopy + t.margin * 2;
        this.nextData.stopx = n = e + t.width;
        this.nextData.starty = this.nextData.stopy;
        this.nextData.stopy = r = i + t.height;
        this.nextData.cnt = 1;
      }
      t.x = e;
      t.y = i;
      this.updateVal(this.data, "startx", e, Math.min);
      this.updateVal(this.data, "starty", i, Math.min);
      this.updateVal(this.data, "stopx", n, Math.max);
      this.updateVal(this.data, "stopy", r, Math.max);
      this.updateVal(this.nextData, "startx", e, Math.min);
      this.updateVal(this.nextData, "starty", i, Math.min);
      this.updateVal(this.nextData, "stopx", n, Math.max);
      this.updateVal(this.nextData, "stopy", r, Math.max);
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
      tx(t.db.getConfig());
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
      tx(t.db.getConfig());
    }
  };
  mermaidConfigUtils.setName(i, "Bounds");
  var tb = i;
  var tx = mermaidConfigUtils.setName(function (t) {
    mermaidConfigUtils.assignWithDepth(tg, t);
    if (t.fontFamily) {
      tg.personFontFamily = tg.systemFontFamily = tg.messageFontFamily = t.fontFamily;
    }
    if (t.fontSize) {
      tg.personFontSize = tg.systemFontSize = tg.messageFontSize = t.fontSize;
    }
    if (t.fontWeight) {
      tg.personFontWeight = tg.systemFontWeight = tg.messageFontWeight = t.fontWeight;
    }
  }, "setConf");
  var tm = mermaidConfigUtils.setName((t, e) => ({
    fontFamily: t[e + "FontFamily"],
    fontSize: t[e + "FontSize"],
    fontWeight: t[e + "FontWeight"]
  }), "c4ShapeFont");
  var t_ = mermaidConfigUtils.setName(t => ({
    fontFamily: t.boundaryFontFamily,
    fontSize: t.boundaryFontSize,
    fontWeight: t.boundaryFontWeight
  }), "boundaryFont");
  var tE = mermaidConfigUtils.setName(t => ({
    fontFamily: t.messageFontFamily,
    fontSize: t.messageFontSize,
    fontWeight: t.messageFontWeight
  }), "messageFont");
  function tS(t, e, n, i, r) {
    if (!e[t].width) {
      if (n) {
        e[t].text = mermaidTextLayoutUtils.wrapLabel(e[t].text, r, i);
        e[t].textLines = e[t].text.split(mermaidConfigUtils.textUtils.lineBreakRegex).length;
        e[t].width = r;
        e[t].height = mermaidTextLayoutUtils.calculateTextHeight(e[t].text, i);
      } else {
        let n = e[t].text.split(mermaidConfigUtils.textUtils.lineBreakRegex);
        e[t].textLines = n.length;
        let r = 0;
        e[t].height = 0;
        e[t].width = 0;
        for (let a of n) {
          e[t].width = Math.max(mermaidTextLayoutUtils.calculateTextWidth(a, i), e[t].width);
          r = mermaidTextLayoutUtils.calculateTextHeight(a, i);
          e[t].height = e[t].height + r;
        }
      }
    }
  }
  mermaidConfigUtils.setName(tS, "calcC4ShapeTextWH");
  var tv = mermaidConfigUtils.setName(function (t, e, n) {
    e.x = n.data.startx;
    e.y = n.data.starty;
    e.width = n.data.stopx - n.data.startx;
    e.height = n.data.stopy - n.data.starty;
    e.label.y = tg.c4ShapeMargin - 35;
    let i = e.wrap && tg.wrap;
    let r = t_(tg);
    r.fontSize = r.fontSize + 2;
    r.fontWeight = "bold";
    let a = mermaidTextLayoutUtils.calculateTextWidth(e.label.text, r);
    tS("label", e, i, r, a);
    tu.drawBoundary(t, e, tg);
  }, "drawBoundary");
  var tC = mermaidConfigUtils.setName(function (t, e, n, i) {
    let r = 0;
    for (let a of i) {
      r = 0;
      let i = n[a];
      let s = tm(tg, i.typeC4Shape.text);
      s.fontSize = s.fontSize - 2;
      i.typeC4Shape.width = mermaidTextLayoutUtils.calculateTextWidth("«" + i.typeC4Shape.text + "»", s);
      i.typeC4Shape.height = s.fontSize + 2;
      i.typeC4Shape.Y = tg.c4ShapePadding;
      r = i.typeC4Shape.Y + i.typeC4Shape.height - 4;
      i.image = {
        width: 0,
        height: 0,
        Y: 0
      };
      switch (i.typeC4Shape.text) {
        case "person":
        case "external_person":
          i.image.width = 48;
          i.image.height = 48;
          i.image.Y = r;
          r = i.image.Y + i.image.height;
      }
      if (i.sprite) {
        i.image.width = 48;
        i.image.height = 48;
        i.image.Y = r;
        r = i.image.Y + i.image.height;
      }
      let o = i.wrap && tg.wrap;
      let h = tg.width - tg.c4ShapePadding * 2;
      let u = tm(tg, i.typeC4Shape.text);
      u.fontSize = u.fontSize + 2;
      u.fontWeight = "bold";
      tS("label", i, o, u, h);
      i.label.Y = r + 8;
      r = i.label.Y + i.label.height;
      if (i.type && i.type.text !== "") {
        i.type.text = "[" + i.type.text + "]";
        let t = tm(tg, i.typeC4Shape.text);
        tS("type", i, o, t, h);
        i.type.Y = r + 5;
        r = i.type.Y + i.type.height;
      } else if (i.techn && i.techn.text !== "") {
        i.techn.text = "[" + i.techn.text + "]";
        let t = tm(tg, i.techn.text);
        tS("techn", i, o, t, h);
        i.techn.Y = r + 5;
        r = i.techn.Y + i.techn.height;
      }
      let d = r;
      let p = i.label.width;
      if (i.descr && i.descr.text !== "") {
        let t = tm(tg, i.typeC4Shape.text);
        tS("descr", i, o, t, h);
        i.descr.Y = r + 20;
        r = i.descr.Y + i.descr.height;
        p = Math.max(i.label.width, i.descr.width);
        d = r - i.descr.textLines * 5;
      }
      p += tg.c4ShapePadding;
      i.width = Math.max(i.width || tg.width, p, tg.width);
      i.height = Math.max(i.height || tg.height, d, tg.height);
      i.margin = i.margin || tg.c4ShapeMargin;
      t.insert(i);
      tu.drawC4Shape(e, i, tg);
    }
    t.bumpLastMargin(tg.c4ShapeMargin);
  }, "drawC4ShapeArray");
  r = class {
    constructor(t, e) {
      this.x = t;
      this.y = e;
    }
  };
  mermaidConfigUtils.setName(r, "Point");
  var tA = r;
  var tw = mermaidConfigUtils.setName(function (t, e) {
    let n = t.x;
    let i = t.y;
    let r = e.x;
    let a = e.y;
    let s = n + t.width / 2;
    let l = i + t.height / 2;
    let o = Math.abs(n - r);
    let h = Math.abs(i - a);
    let u = h / o;
    let d = t.height / t.width;
    let p = null;
    if (i == a && n < r) {
      p = new tA(n + t.width, l);
    } else if (i == a && n > r) {
      p = new tA(n, l);
    } else if (n == r && i < a) {
      p = new tA(s, i + t.height);
    } else if (n == r && i > a) {
      p = new tA(s, i);
    }
    if (n > r && i < a) {
      p = d >= u ? new tA(n, l + u * t.width / 2) : new tA(s - o / h * t.height / 2, i + t.height);
    } else if (n < r && i < a) {
      p = d >= u ? new tA(n + t.width, l + u * t.width / 2) : new tA(s + o / h * t.height / 2, i + t.height);
    } else if (n < r && i > a) {
      p = d >= u ? new tA(n + t.width, l - u * t.width / 2) : new tA(s + t.height / 2 * o / h, i);
    } else if (n > r && i > a) {
      p = d >= u ? new tA(n, l - t.width / 2 * u) : new tA(s - t.height / 2 * o / h, i);
    }
    return p;
  }, "getIntersectPoint");
  var tR = mermaidConfigUtils.setName(function (t, e) {
    let n = {
      x: 0,
      y: 0
    };
    n.x = e.x + e.width / 2;
    n.y = e.y + e.height / 2;
    let i = tw(t, n);
    n.x = t.x + t.width / 2;
    n.y = t.y + t.height / 2;
    return {
      startPoint: i,
      endPoint: tw(e, n)
    };
  }, "getIntersectPoints");
  var tO = mermaidConfigUtils.setName(function (t, e, n, i) {
    let r = 0;
    for (let t of e) {
      r += 1;
      let e = t.wrap && tg.wrap;
      let a = tE(tg);
      if (i.db.getC4Type() === "C4Dynamic") {
        t.label.text = r + ": " + t.label.text;
      }
      let s = mermaidTextLayoutUtils.calculateTextWidth(t.label.text, a);
      tS("label", t, e, a, s);
      if (t.techn && t.techn.text !== "") {
        s = mermaidTextLayoutUtils.calculateTextWidth(t.techn.text, a);
        tS("techn", t, e, a, s);
      }
      if (t.descr && t.descr.text !== "") {
        s = mermaidTextLayoutUtils.calculateTextWidth(t.descr.text, a);
        tS("descr", t, e, a, s);
      }
      let o = tR(n(t.from), n(t.to));
      t.startPoint = o.startPoint;
      t.endPoint = o.endPoint;
    }
    tu.drawRels(t, e, tg);
  }, "drawRels");
  function tk(t, e, n, i, r) {
    let a = new tb(r);
    a.data.widthLimit = n.data.widthLimit / Math.min(tf, i.length);
    for (let [s, l] of i.entries()) {
      let i = 0;
      l.image = {
        width: 0,
        height: 0,
        Y: 0
      };
      if (l.sprite) {
        l.image.width = 48;
        l.image.height = 48;
        l.image.Y = i;
        i = l.image.Y + l.image.height;
      }
      let o = l.wrap && tg.wrap;
      let h = t_(tg);
      h.fontSize = h.fontSize + 2;
      h.fontWeight = "bold";
      tS("label", l, o, h, a.data.widthLimit);
      l.label.Y = i + 8;
      i = l.label.Y + l.label.height;
      if (l.type && l.type.text !== "") {
        l.type.text = "[" + l.type.text + "]";
        tS("type", l, o, t_(tg), a.data.widthLimit);
        l.type.Y = i + 5;
        i = l.type.Y + l.type.height;
      }
      if (l.descr && l.descr.text !== "") {
        let t = t_(tg);
        t.fontSize = t.fontSize - 2;
        tS("descr", l, o, t, a.data.widthLimit);
        l.descr.Y = i + 20;
        i = l.descr.Y + l.descr.height;
      }
      if (s == 0 || s % tf == 0) {
        let t = n.data.startx + tg.diagramMarginX;
        let e = n.data.stopy + tg.diagramMarginY + i;
        a.setData(t, t, e, e);
      } else {
        let t = a.data.stopx !== a.data.startx ? a.data.stopx + tg.diagramMarginX : a.data.startx;
        let e = a.data.starty;
        a.setData(t, t, e, e);
      }
      a.name = l.alias;
      let u = r.db.getC4ShapeArray(l.alias);
      let d = r.db.getC4ShapeKeys(l.alias);
      if (d.length > 0) {
        tC(a, t, u, d);
      }
      e = l.alias;
      let p = r.db.getBoundaries(e);
      if (p.length > 0) {
        tk(t, e, a, p, r);
      }
      if (l.alias !== "global") {
        tv(t, l, a);
      }
      n.data.stopy = Math.max(a.data.stopy + tg.c4ShapeMargin, n.data.stopy);
      n.data.stopx = Math.max(a.data.stopx + tg.c4ShapeMargin, n.data.stopx);
      td = Math.max(td, n.data.stopx);
      tp = Math.max(tp, n.data.stopy);
    }
  }
  mermaidConfigUtils.setName(tk, "drawInsideBoundary");
  var tT = {
    drawPersonOrSystemArray: tC,
    drawBoundary: tv,
    setConf: tx,
    draw: mermaidConfigUtils.setName(function (t, e, n, i) {
      let r;
      tg = mermaidConfigUtils.getConfigAlias().c4;
      let a = mermaidConfigUtils.getConfigAlias().securityLevel;
      if (a === "sandbox") {
        r = axisAndZoomUtilities.select("#i" + e);
      }
      let s = a === "sandbox" ? axisAndZoomUtilities.select(r.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body");
      let l = i.db;
      i.db.setWrap(tg.wrap);
      ty = l.getC4ShapeInRow();
      tf = l.getC4BoundaryInRow();
      mermaidConfigUtils.logger.debug(`C:${JSON.stringify(tg, null, 2)}`);
      let u = a === "sandbox" ? s.select(`[id="${e}"]`) : axisAndZoomUtilities.select(`[id="${e}"]`);
      tu.insertComputerIcon(u);
      tu.insertDatabaseIcon(u);
      tu.insertClockIcon(u);
      let d = new tb(i);
      d.setData(tg.diagramMarginX, tg.diagramMarginX, tg.diagramMarginY, tg.diagramMarginY);
      d.data.widthLimit = screen.availWidth;
      td = tg.diagramMarginX;
      tp = tg.diagramMarginY;
      let p = i.db.getTitle();
      tk(u, "", d, i.db.getBoundaries(""), i);
      tu.insertArrowHead(u);
      tu.insertArrowEnd(u);
      tu.insertArrowCrossHead(u);
      tu.insertArrowFilledHead(u);
      tO(u, i.db.getRels(), i.db.getC4Shape, i);
      d.data.stopx = td;
      d.data.stopy = tp;
      let y = d.data;
      let f = y.stopy - y.starty + tg.diagramMarginY * 2;
      let g = y.stopx - y.startx + tg.diagramMarginX * 2;
      if (p) {
        u.append("text").text(p).attr("x", (y.stopx - y.startx) / 2 - tg.diagramMarginX * 4).attr("y", y.starty + tg.diagramMarginY);
      }
      mermaidConfigUtils.configureSvgSize(u, f, g, tg.useMaxWidth);
      let b = !!p * 60;
      u.attr("viewBox", y.startx - tg.diagramMarginX + " -" + (tg.diagramMarginY + b) + " " + g + " " + (f + b));
      mermaidConfigUtils.logger.debug("models:", y);
    }, "draw")
  };
  var tW = {
    parser: d,
    db: Z,
    renderer: tT,
    styles: mermaidConfigUtils.setName(t => `.person {
    stroke: ${t.personBorder};
    fill: ${t.personBkg};
  }
`, "getStyles"),
    init: mermaidConfigUtils.setName(t => {
      let {
        c4: e,
        wrap: n
      } = t;
      tT.setConf(e);
      Z.setWrap(n);
    }, "init")
  };
  require.d(exports, {
    diagram: function () {
      return tW;
    }
  });
}