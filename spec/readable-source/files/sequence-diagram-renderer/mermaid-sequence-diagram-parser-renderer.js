// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mermaidShapeDrawingUtils'
// - Resolved require(621602) to 'mermaid-shape-drawing-utils'
// - Renamed variable 's' to 'jsYamlCoreImplementation'
// - Resolved require(671191) to 'js-yaml-core-implementation'
// - Renamed variable 'n' to 'imperativeStateClass'
// - Resolved require(97984) to 'imperative-state-class'
// - Renamed variable 'o' to 'mermaidDiagramUtils'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'c' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'l' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'h' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Renamed variable 'd' to 'urlSanitizer'
// - Resolved require(568747) to 'url-sanitizer'
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'z' to 'load' (module 671191)
// - Updated imported property 'A' to 'Schema' (module 671191)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'ZH' to 'clearCommonDb' (module 401926)
// - Updated imported property 'oO' to 'sanitizeText' (module 401926)
// - Updated imported property 'GN' to 'setAccTitle' (module 401926)
// - Updated imported property 'U$' to 'setAccDescription' (module 401926)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 401926)
// - Updated imported property 'eu' to 'getAccTitle' (module 401926)
// - Updated imported property 'Mx' to 'getAccDescription' (module 401926)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 401926)
// - Updated imported property 'ur' to 'renderKatexSanitized' (module 401926)
// - Updated imported property 'iE' to 'getConfig' (module 401926)
// - Updated imported property 'SY' to 'textUtilities' (module 401926)
// - Updated imported property 'l0' to 'hasKatex' (module 401926)
// - Updated imported property 'nH' to 'calcMathMLDims' (module 401926)
// - Updated imported property 'Gr' to 'getUrl' (module 401926)
// - Updated imported property 'Yc' to 'assignWithDepth' (module 401926)
// - Updated imported property 'v2' to 'configureSvgSize' (module 401926)
// - Updated imported property 'Y4' to 'setConfig' (module 401926)
// - Updated imported property 'A' to 'ImperativeState' (module 97984)
// - Updated imported property 'Mu' to 'drawRect' (module 621602)
// - Updated imported property 'kc' to 'getNoteRect' (module 621602)
// - Updated imported property 'rB' to 'drawEmbeddedImage' (module 621602)
// - Updated imported property 'AE' to 'drawImage' (module 621602)
// - Updated imported property 'AD' to 'getTextObj' (module 621602)
// - Updated imported property 'O' to 'drawBackgroundRect' (module 621602)
// - Updated imported property 'VG' to 'parseFontSize' (module 583673)
// - Updated imported property '$m' to 'zeroWidthSpace' (module 583673)
// - Updated imported property 'w8' to 'mermaidUtils' (module 583673)
// - Updated imported property 'Ys' to 'select' (module 381804)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 94773.1c777c8b.js
         * chunkId: 94773
         * moduleId: 511119
         */
module.exports = function (module, exports, require) {
  var r;
  var mermaidShapeDrawingUtils = require("mermaid-shape-drawing-utils") /*id: 621602*/;
  var jsYamlCoreImplementation = require("js-yaml-core-implementation") /*id: 671191*/;
  var imperativeStateClass = require("imperative-state-class") /*id: 97984*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var urlSanitizer = require("url-sanitizer") /*id: 568747*/;
  var p = function () {
    var t = loggerLevelUtils.setFunctionName(function (t, e, a, r) {
      a = a || {};
      r = t.length;
      for (; r--; a[t[r]] = e);
      return a;
    }, "o");
    var e = [1, 2];
    var a = [1, 3];
    var r = [1, 4];
    var i = [2, 4];
    var s = [1, 9];
    var n = [1, 11];
    var o = [1, 13];
    var c = [1, 14];
    var h = [1, 16];
    var d = [1, 17];
    var p = [1, 18];
    var g = [1, 24];
    var u = [1, 25];
    var x = [1, 26];
    var y = [1, 27];
    var m = [1, 28];
    var b = [1, 29];
    var T = [1, 30];
    var f = [1, 31];
    var E = [1, 32];
    var w = [1, 33];
    var I = [1, 34];
    var L = [1, 35];
    var v = [1, 36];
    var k = [1, 37];
    var _ = [1, 38];
    var P = [1, 39];
    var A = [1, 41];
    var N = [1, 42];
    var M = [1, 43];
    var S = [1, 44];
    var O = [1, 45];
    var D = [1, 46];
    var W = [1, 4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 47, 48, 49, 50, 52, 53, 55, 60, 61, 62, 63, 71];
    var $ = [2, 71];
    var Y = [4, 5, 16, 50, 52, 53];
    var R = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 50, 52, 53, 55, 60, 61, 62, 63, 71];
    var C = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 49, 50, 52, 53, 55, 60, 61, 62, 63, 71];
    var B = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 48, 50, 52, 53, 55, 60, 61, 62, 63, 71];
    var V = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 47, 50, 52, 53, 55, 60, 61, 62, 63, 71];
    var F = [69, 70, 71];
    var q = [1, 127];
    var z = {
      trace: loggerLevelUtils.setFunctionName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        SPACE: 4,
        NEWLINE: 5,
        SD: 6,
        document: 7,
        line: 8,
        statement: 9,
        box_section: 10,
        box_line: 11,
        participant_statement: 12,
        create: 13,
        box: 14,
        restOfLine: 15,
        end: 16,
        signal: 17,
        autonumber: 18,
        NUM: 19,
        off: 20,
        activate: 21,
        actor: 22,
        deactivate: 23,
        note_statement: 24,
        links_statement: 25,
        link_statement: 26,
        properties_statement: 27,
        details_statement: 28,
        title: 29,
        legacy_title: 30,
        acc_title: 31,
        acc_title_value: 32,
        acc_descr: 33,
        acc_descr_value: 34,
        acc_descr_multiline_value: 35,
        loop: 36,
        rect: 37,
        opt: 38,
        alt: 39,
        else_sections: 40,
        par: 41,
        par_sections: 42,
        par_over: 43,
        critical: 44,
        option_sections: 45,
        break: 46,
        option: 47,
        and: 48,
        else: 49,
        participant: 50,
        AS: 51,
        participant_actor: 52,
        destroy: 53,
        actor_with_config: 54,
        note: 55,
        placement: 56,
        text2: 57,
        over: 58,
        actor_pair: 59,
        links: 60,
        link: 61,
        properties: 62,
        details: 63,
        spaceList: 64,
        ",": 65,
        left_of: 66,
        right_of: 67,
        signaltype: 68,
        "+": 69,
        "-": 70,
        ACTOR: 71,
        config_object: 72,
        CONFIG_START: 73,
        CONFIG_CONTENT: 74,
        CONFIG_END: 75,
        SOLID_OPEN_ARROW: 76,
        DOTTED_OPEN_ARROW: 77,
        SOLID_ARROW: 78,
        BIDIRECTIONAL_SOLID_ARROW: 79,
        DOTTED_ARROW: 80,
        BIDIRECTIONAL_DOTTED_ARROW: 81,
        SOLID_CROSS: 82,
        DOTTED_CROSS: 83,
        SOLID_POINT: 84,
        DOTTED_POINT: 85,
        TXT: 86,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "SPACE",
        5: "NEWLINE",
        6: "SD",
        13: "create",
        14: "box",
        15: "restOfLine",
        16: "end",
        18: "autonumber",
        19: "NUM",
        20: "off",
        21: "activate",
        23: "deactivate",
        29: "title",
        30: "legacy_title",
        31: "acc_title",
        32: "acc_title_value",
        33: "acc_descr",
        34: "acc_descr_value",
        35: "acc_descr_multiline_value",
        36: "loop",
        37: "rect",
        38: "opt",
        39: "alt",
        41: "par",
        43: "par_over",
        44: "critical",
        46: "break",
        47: "option",
        48: "and",
        49: "else",
        50: "participant",
        51: "AS",
        52: "participant_actor",
        53: "destroy",
        55: "note",
        58: "over",
        60: "links",
        61: "link",
        62: "properties",
        63: "details",
        65: ",",
        66: "left_of",
        67: "right_of",
        69: "+",
        70: "-",
        71: "ACTOR",
        73: "CONFIG_START",
        74: "CONFIG_CONTENT",
        75: "CONFIG_END",
        76: "SOLID_OPEN_ARROW",
        77: "DOTTED_OPEN_ARROW",
        78: "SOLID_ARROW",
        79: "BIDIRECTIONAL_SOLID_ARROW",
        80: "DOTTED_ARROW",
        81: "BIDIRECTIONAL_DOTTED_ARROW",
        82: "SOLID_CROSS",
        83: "DOTTED_CROSS",
        84: "SOLID_POINT",
        85: "DOTTED_POINT",
        86: "TXT"
      },
      productions_: [0, [3, 2], [3, 2], [3, 2], [7, 0], [7, 2], [8, 2], [8, 1], [8, 1], [10, 0], [10, 2], [11, 2], [11, 1], [11, 1], [9, 1], [9, 2], [9, 4], [9, 2], [9, 4], [9, 3], [9, 3], [9, 2], [9, 3], [9, 3], [9, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [45, 1], [45, 4], [42, 1], [42, 4], [40, 1], [40, 4], [12, 5], [12, 3], [12, 5], [12, 3], [12, 3], [12, 3], [24, 4], [24, 4], [25, 3], [26, 3], [27, 3], [28, 3], [64, 2], [64, 1], [59, 3], [59, 1], [56, 1], [56, 1], [17, 5], [17, 5], [17, 4], [54, 2], [72, 3], [22, 1], [68, 1], [68, 1], [68, 1], [68, 1], [68, 1], [68, 1], [68, 1], [68, 1], [68, 1], [68, 1], [57, 1]],
      performAction: loggerLevelUtils.setFunctionName(function (t, e, a, r, i, s, n) {
        var o = s.length - 1;
        switch (i) {
          case 3:
            r.apply(s[o]);
            return s[o];
          case 4:
          case 9:
          case 8:
          case 13:
            this.$ = [];
            break;
          case 5:
          case 10:
            s[o - 1].push(s[o]);
            this.$ = s[o - 1];
            break;
          case 6:
          case 7:
          case 11:
          case 12:
          case 63:
            this.$ = s[o];
            break;
          case 15:
            s[o].type = "createParticipant";
            this.$ = s[o];
            break;
          case 16:
            s[o - 1].unshift({
              type: "boxStart",
              boxData: r.parseBoxData(s[o - 2])
            });
            s[o - 1].push({
              type: "boxEnd",
              boxText: s[o - 2]
            });
            this.$ = s[o - 1];
            break;
          case 18:
            this.$ = {
              type: "sequenceIndex",
              sequenceIndex: Number(s[o - 2]),
              sequenceIndexStep: Number(s[o - 1]),
              sequenceVisible: true,
              signalType: r.LINETYPE.AUTONUMBER
            };
            break;
          case 19:
            this.$ = {
              type: "sequenceIndex",
              sequenceIndex: Number(s[o - 1]),
              sequenceIndexStep: 1,
              sequenceVisible: true,
              signalType: r.LINETYPE.AUTONUMBER
            };
            break;
          case 20:
            this.$ = {
              type: "sequenceIndex",
              sequenceVisible: false,
              signalType: r.LINETYPE.AUTONUMBER
            };
            break;
          case 21:
            this.$ = {
              type: "sequenceIndex",
              sequenceVisible: true,
              signalType: r.LINETYPE.AUTONUMBER
            };
            break;
          case 22:
            this.$ = {
              type: "activeStart",
              signalType: r.LINETYPE.ACTIVE_START,
              actor: s[o - 1].actor
            };
            break;
          case 23:
            this.$ = {
              type: "activeEnd",
              signalType: r.LINETYPE.ACTIVE_END,
              actor: s[o - 1].actor
            };
            break;
          case 29:
            r.setDiagramTitle(s[o].substring(6));
            this.$ = s[o].substring(6);
            break;
          case 30:
            r.setDiagramTitle(s[o].substring(7));
            this.$ = s[o].substring(7);
            break;
          case 31:
            this.$ = s[o].trim();
            r.setAccTitle(this.$);
            break;
          case 32:
          case 33:
            this.$ = s[o].trim();
            r.setAccDescription(this.$);
            break;
          case 34:
            s[o - 1].unshift({
              type: "loopStart",
              loopText: r.parseMessage(s[o - 2]),
              signalType: r.LINETYPE.LOOP_START
            });
            s[o - 1].push({
              type: "loopEnd",
              loopText: s[o - 2],
              signalType: r.LINETYPE.LOOP_END
            });
            this.$ = s[o - 1];
            break;
          case 35:
            s[o - 1].unshift({
              type: "rectStart",
              color: r.parseMessage(s[o - 2]),
              signalType: r.LINETYPE.RECT_START
            });
            s[o - 1].push({
              type: "rectEnd",
              color: r.parseMessage(s[o - 2]),
              signalType: r.LINETYPE.RECT_END
            });
            this.$ = s[o - 1];
            break;
          case 36:
            s[o - 1].unshift({
              type: "optStart",
              optText: r.parseMessage(s[o - 2]),
              signalType: r.LINETYPE.OPT_START
            });
            s[o - 1].push({
              type: "optEnd",
              optText: r.parseMessage(s[o - 2]),
              signalType: r.LINETYPE.OPT_END
            });
            this.$ = s[o - 1];
            break;
          case 37:
            s[o - 1].unshift({
              type: "altStart",
              altText: r.parseMessage(s[o - 2]),
              signalType: r.LINETYPE.ALT_START
            });
            s[o - 1].push({
              type: "altEnd",
              signalType: r.LINETYPE.ALT_END
            });
            this.$ = s[o - 1];
            break;
          case 38:
            s[o - 1].unshift({
              type: "parStart",
              parText: r.parseMessage(s[o - 2]),
              signalType: r.LINETYPE.PAR_START
            });
            s[o - 1].push({
              type: "parEnd",
              signalType: r.LINETYPE.PAR_END
            });
            this.$ = s[o - 1];
            break;
          case 39:
            s[o - 1].unshift({
              type: "parStart",
              parText: r.parseMessage(s[o - 2]),
              signalType: r.LINETYPE.PAR_OVER_START
            });
            s[o - 1].push({
              type: "parEnd",
              signalType: r.LINETYPE.PAR_END
            });
            this.$ = s[o - 1];
            break;
          case 40:
            s[o - 1].unshift({
              type: "criticalStart",
              criticalText: r.parseMessage(s[o - 2]),
              signalType: r.LINETYPE.CRITICAL_START
            });
            s[o - 1].push({
              type: "criticalEnd",
              signalType: r.LINETYPE.CRITICAL_END
            });
            this.$ = s[o - 1];
            break;
          case 41:
            s[o - 1].unshift({
              type: "breakStart",
              breakText: r.parseMessage(s[o - 2]),
              signalType: r.LINETYPE.BREAK_START
            });
            s[o - 1].push({
              type: "breakEnd",
              optText: r.parseMessage(s[o - 2]),
              signalType: r.LINETYPE.BREAK_END
            });
            this.$ = s[o - 1];
            break;
          case 43:
            this.$ = s[o - 3].concat([{
              type: "option",
              optionText: r.parseMessage(s[o - 1]),
              signalType: r.LINETYPE.CRITICAL_OPTION
            }, s[o]]);
            break;
          case 45:
            this.$ = s[o - 3].concat([{
              type: "and",
              parText: r.parseMessage(s[o - 1]),
              signalType: r.LINETYPE.PAR_AND
            }, s[o]]);
            break;
          case 47:
            this.$ = s[o - 3].concat([{
              type: "else",
              altText: r.parseMessage(s[o - 1]),
              signalType: r.LINETYPE.ALT_ELSE
            }, s[o]]);
            break;
          case 48:
            s[o - 3].draw = "participant";
            s[o - 3].type = "addParticipant";
            s[o - 3].description = r.parseMessage(s[o - 1]);
            this.$ = s[o - 3];
            break;
          case 49:
          case 53:
            s[o - 1].draw = "participant";
            s[o - 1].type = "addParticipant";
            this.$ = s[o - 1];
            break;
          case 50:
            s[o - 3].draw = "actor";
            s[o - 3].type = "addParticipant";
            s[o - 3].description = r.parseMessage(s[o - 1]);
            this.$ = s[o - 3];
            break;
          case 51:
            s[o - 1].draw = "actor";
            s[o - 1].type = "addParticipant";
            this.$ = s[o - 1];
            break;
          case 52:
            s[o - 1].type = "destroyParticipant";
            this.$ = s[o - 1];
            break;
          case 54:
            this.$ = [s[o - 1], {
              type: "addNote",
              placement: s[o - 2],
              actor: s[o - 1].actor,
              text: s[o]
            }];
            break;
          case 55:
            s[o - 2] = [].concat(s[o - 1], s[o - 1]).slice(0, 2);
            s[o - 2][0] = s[o - 2][0].actor;
            s[o - 2][1] = s[o - 2][1].actor;
            this.$ = [s[o - 1], {
              type: "addNote",
              placement: r.PLACEMENT.OVER,
              actor: s[o - 2].slice(0, 2),
              text: s[o]
            }];
            break;
          case 56:
            this.$ = [s[o - 1], {
              type: "addLinks",
              actor: s[o - 1].actor,
              text: s[o]
            }];
            break;
          case 57:
            this.$ = [s[o - 1], {
              type: "addALink",
              actor: s[o - 1].actor,
              text: s[o]
            }];
            break;
          case 58:
            this.$ = [s[o - 1], {
              type: "addProperties",
              actor: s[o - 1].actor,
              text: s[o]
            }];
            break;
          case 59:
            this.$ = [s[o - 1], {
              type: "addDetails",
              actor: s[o - 1].actor,
              text: s[o]
            }];
            break;
          case 62:
            this.$ = [s[o - 2], s[o]];
            break;
          case 64:
            this.$ = r.PLACEMENT.LEFTOF;
            break;
          case 65:
            this.$ = r.PLACEMENT.RIGHTOF;
            break;
          case 66:
            this.$ = [s[o - 4], s[o - 1], {
              type: "addMessage",
              from: s[o - 4].actor,
              to: s[o - 1].actor,
              signalType: s[o - 3],
              msg: s[o],
              activate: true
            }, {
              type: "activeStart",
              signalType: r.LINETYPE.ACTIVE_START,
              actor: s[o - 1].actor
            }];
            break;
          case 67:
            this.$ = [s[o - 4], s[o - 1], {
              type: "addMessage",
              from: s[o - 4].actor,
              to: s[o - 1].actor,
              signalType: s[o - 3],
              msg: s[o]
            }, {
              type: "activeEnd",
              signalType: r.LINETYPE.ACTIVE_END,
              actor: s[o - 4].actor
            }];
            break;
          case 68:
            this.$ = [s[o - 3], s[o - 1], {
              type: "addMessage",
              from: s[o - 3].actor,
              to: s[o - 1].actor,
              signalType: s[o - 2],
              msg: s[o]
            }];
            break;
          case 69:
            this.$ = {
              type: "addParticipant",
              actor: s[o - 1],
              config: s[o]
            };
            break;
          case 70:
            this.$ = s[o - 1].trim();
            break;
          case 71:
            this.$ = {
              type: "addParticipant",
              actor: s[o]
            };
            break;
          case 72:
            this.$ = r.LINETYPE.SOLID_OPEN;
            break;
          case 73:
            this.$ = r.LINETYPE.DOTTED_OPEN;
            break;
          case 74:
            this.$ = r.LINETYPE.SOLID;
            break;
          case 75:
            this.$ = r.LINETYPE.BIDIRECTIONAL_SOLID;
            break;
          case 76:
            this.$ = r.LINETYPE.DOTTED;
            break;
          case 77:
            this.$ = r.LINETYPE.BIDIRECTIONAL_DOTTED;
            break;
          case 78:
            this.$ = r.LINETYPE.SOLID_CROSS;
            break;
          case 79:
            this.$ = r.LINETYPE.DOTTED_CROSS;
            break;
          case 80:
            this.$ = r.LINETYPE.SOLID_POINT;
            break;
          case 81:
            this.$ = r.LINETYPE.DOTTED_POINT;
            break;
          case 82:
            this.$ = r.parseMessage(s[o].trim().substring(1));
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: e,
        5: a,
        6: r
      }, {
        1: [3]
      }, {
        3: 5,
        4: e,
        5: a,
        6: r
      }, {
        3: 6,
        4: e,
        5: a,
        6: r
      }, t([1, 4, 5, 13, 14, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 50, 52, 53, 55, 60, 61, 62, 63, 71], i, {
        7: 7
      }), {
        1: [2, 1]
      }, {
        1: [2, 2]
      }, {
        1: [2, 3],
        4: s,
        5: n,
        8: 8,
        9: 10,
        12: 12,
        13: o,
        14: c,
        17: 15,
        18: h,
        21: d,
        22: 40,
        23: p,
        24: 19,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: g,
        30: u,
        31: x,
        33: y,
        35: m,
        36: b,
        37: T,
        38: f,
        39: E,
        41: w,
        43: I,
        44: L,
        46: v,
        50: k,
        52: _,
        53: P,
        55: A,
        60: N,
        61: M,
        62: S,
        63: O,
        71: D
      }, t(W, [2, 5]), {
        9: 47,
        12: 12,
        13: o,
        14: c,
        17: 15,
        18: h,
        21: d,
        22: 40,
        23: p,
        24: 19,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: g,
        30: u,
        31: x,
        33: y,
        35: m,
        36: b,
        37: T,
        38: f,
        39: E,
        41: w,
        43: I,
        44: L,
        46: v,
        50: k,
        52: _,
        53: P,
        55: A,
        60: N,
        61: M,
        62: S,
        63: O,
        71: D
      }, t(W, [2, 7]), t(W, [2, 8]), t(W, [2, 14]), {
        12: 48,
        50: k,
        52: _,
        53: P
      }, {
        15: [1, 49]
      }, {
        5: [1, 50]
      }, {
        5: [1, 53],
        19: [1, 51],
        20: [1, 52]
      }, {
        22: 54,
        71: D
      }, {
        22: 55,
        71: D
      }, {
        5: [1, 56]
      }, {
        5: [1, 57]
      }, {
        5: [1, 58]
      }, {
        5: [1, 59]
      }, {
        5: [1, 60]
      }, t(W, [2, 29]), t(W, [2, 30]), {
        32: [1, 61]
      }, {
        34: [1, 62]
      }, t(W, [2, 33]), {
        15: [1, 63]
      }, {
        15: [1, 64]
      }, {
        15: [1, 65]
      }, {
        15: [1, 66]
      }, {
        15: [1, 67]
      }, {
        15: [1, 68]
      }, {
        15: [1, 69]
      }, {
        15: [1, 70]
      }, {
        22: 71,
        54: 72,
        71: [1, 73]
      }, {
        22: 74,
        71: D
      }, {
        22: 75,
        71: D
      }, {
        68: 76,
        76: [1, 77],
        77: [1, 78],
        78: [1, 79],
        79: [1, 80],
        80: [1, 81],
        81: [1, 82],
        82: [1, 83],
        83: [1, 84],
        84: [1, 85],
        85: [1, 86]
      }, {
        56: 87,
        58: [1, 88],
        66: [1, 89],
        67: [1, 90]
      }, {
        22: 91,
        71: D
      }, {
        22: 92,
        71: D
      }, {
        22: 93,
        71: D
      }, {
        22: 94,
        71: D
      }, t([5, 51, 65, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86], $), t(W, [2, 6]), t(W, [2, 15]), t(Y, [2, 9], {
        10: 95
      }), t(W, [2, 17]), {
        5: [1, 97],
        19: [1, 96]
      }, {
        5: [1, 98]
      }, t(W, [2, 21]), {
        5: [1, 99]
      }, {
        5: [1, 100]
      }, t(W, [2, 24]), t(W, [2, 25]), t(W, [2, 26]), t(W, [2, 27]), t(W, [2, 28]), t(W, [2, 31]), t(W, [2, 32]), t(R, i, {
        7: 101
      }), t(R, i, {
        7: 102
      }), t(R, i, {
        7: 103
      }), t(C, i, {
        40: 104,
        7: 105
      }), t(B, i, {
        42: 106,
        7: 107
      }), t(B, i, {
        7: 107,
        42: 108
      }), t(V, i, {
        45: 109,
        7: 110
      }), t(R, i, {
        7: 111
      }), {
        5: [1, 113],
        51: [1, 112]
      }, {
        5: [1, 114]
      }, t([5, 51], $, {
        72: 115,
        73: [1, 116]
      }), {
        5: [1, 118],
        51: [1, 117]
      }, {
        5: [1, 119]
      }, {
        22: 122,
        69: [1, 120],
        70: [1, 121],
        71: D
      }, t(F, [2, 72]), t(F, [2, 73]), t(F, [2, 74]), t(F, [2, 75]), t(F, [2, 76]), t(F, [2, 77]), t(F, [2, 78]), t(F, [2, 79]), t(F, [2, 80]), t(F, [2, 81]), {
        22: 123,
        71: D
      }, {
        22: 125,
        59: 124,
        71: D
      }, {
        71: [2, 64]
      }, {
        71: [2, 65]
      }, {
        57: 126,
        86: q
      }, {
        57: 128,
        86: q
      }, {
        57: 129,
        86: q
      }, {
        57: 130,
        86: q
      }, {
        4: [1, 133],
        5: [1, 135],
        11: 132,
        12: 134,
        16: [1, 131],
        50: k,
        52: _,
        53: P
      }, {
        5: [1, 136]
      }, t(W, [2, 19]), t(W, [2, 20]), t(W, [2, 22]), t(W, [2, 23]), {
        4: s,
        5: n,
        8: 8,
        9: 10,
        12: 12,
        13: o,
        14: c,
        16: [1, 137],
        17: 15,
        18: h,
        21: d,
        22: 40,
        23: p,
        24: 19,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: g,
        30: u,
        31: x,
        33: y,
        35: m,
        36: b,
        37: T,
        38: f,
        39: E,
        41: w,
        43: I,
        44: L,
        46: v,
        50: k,
        52: _,
        53: P,
        55: A,
        60: N,
        61: M,
        62: S,
        63: O,
        71: D
      }, {
        4: s,
        5: n,
        8: 8,
        9: 10,
        12: 12,
        13: o,
        14: c,
        16: [1, 138],
        17: 15,
        18: h,
        21: d,
        22: 40,
        23: p,
        24: 19,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: g,
        30: u,
        31: x,
        33: y,
        35: m,
        36: b,
        37: T,
        38: f,
        39: E,
        41: w,
        43: I,
        44: L,
        46: v,
        50: k,
        52: _,
        53: P,
        55: A,
        60: N,
        61: M,
        62: S,
        63: O,
        71: D
      }, {
        4: s,
        5: n,
        8: 8,
        9: 10,
        12: 12,
        13: o,
        14: c,
        16: [1, 139],
        17: 15,
        18: h,
        21: d,
        22: 40,
        23: p,
        24: 19,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: g,
        30: u,
        31: x,
        33: y,
        35: m,
        36: b,
        37: T,
        38: f,
        39: E,
        41: w,
        43: I,
        44: L,
        46: v,
        50: k,
        52: _,
        53: P,
        55: A,
        60: N,
        61: M,
        62: S,
        63: O,
        71: D
      }, {
        16: [1, 140]
      }, {
        4: s,
        5: n,
        8: 8,
        9: 10,
        12: 12,
        13: o,
        14: c,
        16: [2, 46],
        17: 15,
        18: h,
        21: d,
        22: 40,
        23: p,
        24: 19,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: g,
        30: u,
        31: x,
        33: y,
        35: m,
        36: b,
        37: T,
        38: f,
        39: E,
        41: w,
        43: I,
        44: L,
        46: v,
        49: [1, 141],
        50: k,
        52: _,
        53: P,
        55: A,
        60: N,
        61: M,
        62: S,
        63: O,
        71: D
      }, {
        16: [1, 142]
      }, {
        4: s,
        5: n,
        8: 8,
        9: 10,
        12: 12,
        13: o,
        14: c,
        16: [2, 44],
        17: 15,
        18: h,
        21: d,
        22: 40,
        23: p,
        24: 19,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: g,
        30: u,
        31: x,
        33: y,
        35: m,
        36: b,
        37: T,
        38: f,
        39: E,
        41: w,
        43: I,
        44: L,
        46: v,
        48: [1, 143],
        50: k,
        52: _,
        53: P,
        55: A,
        60: N,
        61: M,
        62: S,
        63: O,
        71: D
      }, {
        16: [1, 144]
      }, {
        16: [1, 145]
      }, {
        4: s,
        5: n,
        8: 8,
        9: 10,
        12: 12,
        13: o,
        14: c,
        16: [2, 42],
        17: 15,
        18: h,
        21: d,
        22: 40,
        23: p,
        24: 19,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: g,
        30: u,
        31: x,
        33: y,
        35: m,
        36: b,
        37: T,
        38: f,
        39: E,
        41: w,
        43: I,
        44: L,
        46: v,
        47: [1, 146],
        50: k,
        52: _,
        53: P,
        55: A,
        60: N,
        61: M,
        62: S,
        63: O,
        71: D
      }, {
        4: s,
        5: n,
        8: 8,
        9: 10,
        12: 12,
        13: o,
        14: c,
        16: [1, 147],
        17: 15,
        18: h,
        21: d,
        22: 40,
        23: p,
        24: 19,
        25: 20,
        26: 21,
        27: 22,
        28: 23,
        29: g,
        30: u,
        31: x,
        33: y,
        35: m,
        36: b,
        37: T,
        38: f,
        39: E,
        41: w,
        43: I,
        44: L,
        46: v,
        50: k,
        52: _,
        53: P,
        55: A,
        60: N,
        61: M,
        62: S,
        63: O,
        71: D
      }, {
        15: [1, 148]
      }, t(W, [2, 49]), t(W, [2, 53]), {
        5: [2, 69]
      }, {
        74: [1, 149]
      }, {
        15: [1, 150]
      }, t(W, [2, 51]), t(W, [2, 52]), {
        22: 151,
        71: D
      }, {
        22: 152,
        71: D
      }, {
        57: 153,
        86: q
      }, {
        57: 154,
        86: q
      }, {
        57: 155,
        86: q
      }, {
        65: [1, 156],
        86: [2, 63]
      }, {
        5: [2, 56]
      }, {
        5: [2, 82]
      }, {
        5: [2, 57]
      }, {
        5: [2, 58]
      }, {
        5: [2, 59]
      }, t(W, [2, 16]), t(Y, [2, 10]), {
        12: 157,
        50: k,
        52: _,
        53: P
      }, t(Y, [2, 12]), t(Y, [2, 13]), t(W, [2, 18]), t(W, [2, 34]), t(W, [2, 35]), t(W, [2, 36]), t(W, [2, 37]), {
        15: [1, 158]
      }, t(W, [2, 38]), {
        15: [1, 159]
      }, t(W, [2, 39]), t(W, [2, 40]), {
        15: [1, 160]
      }, t(W, [2, 41]), {
        5: [1, 161]
      }, {
        75: [1, 162]
      }, {
        5: [1, 163]
      }, {
        57: 164,
        86: q
      }, {
        57: 165,
        86: q
      }, {
        5: [2, 68]
      }, {
        5: [2, 54]
      }, {
        5: [2, 55]
      }, {
        22: 166,
        71: D
      }, t(Y, [2, 11]), t(C, i, {
        7: 105,
        40: 167
      }), t(B, i, {
        7: 107,
        42: 168
      }), t(V, i, {
        7: 110,
        45: 169
      }), t(W, [2, 48]), {
        5: [2, 70]
      }, t(W, [2, 50]), {
        5: [2, 66]
      }, {
        5: [2, 67]
      }, {
        86: [2, 62]
      }, {
        16: [2, 47]
      }, {
        16: [2, 45]
      }, {
        16: [2, 43]
      }],
      defaultActions: {
        5: [2, 1],
        6: [2, 2],
        89: [2, 64],
        90: [2, 65],
        115: [2, 69],
        126: [2, 56],
        127: [2, 82],
        128: [2, 57],
        129: [2, 58],
        130: [2, 59],
        153: [2, 68],
        154: [2, 54],
        155: [2, 55],
        162: [2, 70],
        164: [2, 66],
        165: [2, 67],
        166: [2, 62],
        167: [2, 47],
        168: [2, 45],
        169: [2, 43]
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
        var r = [];
        var i = [null];
        var s = [];
        var n = this.table;
        var o = "";
        var c = 0;
        var h = 0;
        var d = 0;
        var p = s.slice.call(arguments, 1);
        var g = Object.create(this.lexer);
        var u = {
          yy: {}
        };
        for (var x in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, x)) {
            u.yy[x] = this.yy[x];
          }
        }
        g.setInput(t, u.yy);
        u.yy.lexer = g;
        u.yy.parser = this;
        if (g.yylloc === undefined) {
          g.yylloc = {};
        }
        var y = g.yylloc;
        s.push(y);
        var m = g.options && g.options.ranges;
        function b() {
          var t;
          if (typeof (t = r.pop() || g.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (r = t).pop();
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
        loggerLevelUtils.setFunctionName(function (t) {
          a.length = a.length - t * 2;
          i.length = i.length - t;
          s.length = s.length - t;
        }, "popStack");
        loggerLevelUtils.setFunctionName(b, "lex");
        var T;
        var f;
        var E;
        var w;
        var I;
        var L;
        var v;
        var k;
        var _;
        var P = {};
        while (true) {
          E = a[a.length - 1];
          if (this.defaultActions[E]) {
            w = this.defaultActions[E];
          } else {
            if (T == null) {
              T = b();
            }
            w = n[E] && n[E][T];
          }
          if (w === undefined || !w.length || !w[0]) {
            var A = "";
            _ = [];
            for (L in n[E]) {
              if (this.terminals_[L] && L > 2) {
                _.push("'" + this.terminals_[L] + "'");
              }
            }
            A = g.showPosition ? "Parse error on line " + (c + 1) + ":\n" + g.showPosition() + "\nExpecting " + _.join(", ") + ", got '" + (this.terminals_[T] || T) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (T == 1 ? "end of input" : "'" + (this.terminals_[T] || T) + "'");
            this.parseError(A, {
              text: g.match,
              token: this.terminals_[T] || T,
              line: g.yylineno,
              loc: y,
              expected: _
            });
          }
          if (w[0] instanceof Array && w.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + E + ", token: " + T);
          }
          switch (w[0]) {
            case 1:
              a.push(T);
              i.push(g.yytext);
              s.push(g.yylloc);
              a.push(w[1]);
              T = null;
              if (f) {
                T = f;
                f = null;
              } else {
                h = g.yyleng;
                o = g.yytext;
                c = g.yylineno;
                y = g.yylloc;
                if (d > 0) {
                  d--;
                }
              }
              break;
            case 2:
              v = this.productions_[w[1]][1];
              P.$ = i[i.length - v];
              P._$ = {
                first_line: s[s.length - (v || 1)].first_line,
                last_line: s[s.length - 1].last_line,
                first_column: s[s.length - (v || 1)].first_column,
                last_column: s[s.length - 1].last_column
              };
              if (m) {
                P._$.range = [s[s.length - (v || 1)].range[0], s[s.length - 1].range[1]];
              }
              if ((I = this.performAction.apply(P, [o, h, c, u.yy, w[1], i, s].concat(p))) !== undefined) {
                return I;
              }
              if (v) {
                a = a.slice(0, v * -1 * 2);
                i = i.slice(0, v * -1);
                s = s.slice(0, v * -1);
              }
              a.push(this.productions_[w[1]][0]);
              i.push(P.$);
              s.push(P._$);
              k = n[a[a.length - 2]][a[a.length - 1]];
              a.push(k);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var H = {
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
        var r = this.match.split(/(?:\r\n?|\n)/g);
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
          last_column: a ? (a.length === r.length ? this.yylloc.first_column : 0) + r[r.length - a.length].length - a[0].length : this.yylloc.first_column - e
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
        var r;
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
        if (r = t[0].match(/(?:\r\n?|\n).*/g)) {
          this.yylineno += r.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
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
          for (var s in i) {
            this[s] = i[s];
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
        var r;
        var i = this._currentRules();
        var s = 0;
        for (; s < i.length; s++) {
          if ((a = this._input.match(this.rules[i[s]])) && (!e || a[0].length > e[0].length)) {
            e = a;
            r = s;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(a, i[s])) !== false) {
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
          return (t = this.test_match(e, i[r])) !== false && t;
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
      performAction: loggerLevelUtils.setFunctionName(function (t, e, a, r) {
        switch (a) {
          case 0:
          case 56:
          case 72:
            return 5;
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          case 6:
            return 19;
          case 7:
            this.begin("CONFIG");
            return 73;
          case 8:
            return 74;
          case 9:
            this.popState();
            this.popState();
            return 75;
          case 10:
          case 57:
            e.yytext = e.yytext.trim();
            return 71;
          case 11:
          case 17:
            e.yytext = e.yytext.trim();
            this.begin("ALIAS");
            return 71;
          case 12:
            this.begin("LINE");
            return 14;
          case 13:
            this.begin("ID");
            return 50;
          case 14:
            this.begin("ID");
            return 52;
          case 15:
            return 13;
          case 16:
            this.begin("ID");
            return 53;
          case 18:
            this.popState();
            this.popState();
            this.begin("LINE");
            return 51;
          case 19:
            this.popState();
            this.popState();
            return 5;
          case 20:
            this.begin("LINE");
            return 36;
          case 21:
            this.begin("LINE");
            return 37;
          case 22:
            this.begin("LINE");
            return 38;
          case 23:
            this.begin("LINE");
            return 39;
          case 24:
            this.begin("LINE");
            return 49;
          case 25:
            this.begin("LINE");
            return 41;
          case 26:
            this.begin("LINE");
            return 43;
          case 27:
            this.begin("LINE");
            return 48;
          case 28:
            this.begin("LINE");
            return 44;
          case 29:
            this.begin("LINE");
            return 47;
          case 30:
            this.begin("LINE");
            return 46;
          case 31:
            this.popState();
            return 15;
          case 32:
            return 16;
          case 33:
            return 66;
          case 34:
            return 67;
          case 35:
            return 60;
          case 36:
            return 61;
          case 37:
            return 62;
          case 38:
            return 63;
          case 39:
            return 58;
          case 40:
            return 55;
          case 41:
            this.begin("ID");
            return 21;
          case 42:
            this.begin("ID");
            return 23;
          case 43:
            return 29;
          case 44:
            return 30;
          case 45:
            this.begin("acc_title");
            return 31;
          case 46:
            this.popState();
            return "acc_title_value";
          case 47:
            this.begin("acc_descr");
            return 33;
          case 48:
            this.popState();
            return "acc_descr_value";
          case 49:
            this.begin("acc_descr_multiline");
            break;
          case 50:
            this.popState();
            break;
          case 51:
            return "acc_descr_multiline_value";
          case 52:
            return 6;
          case 53:
            return 18;
          case 54:
            return 20;
          case 55:
            return 65;
          case 58:
            return 78;
          case 59:
            return 79;
          case 60:
            return 80;
          case 61:
            return 81;
          case 62:
            return 76;
          case 63:
            return 77;
          case 64:
            return 82;
          case 65:
            return 83;
          case 66:
            return 84;
          case 67:
            return 85;
          case 68:
          case 69:
            return 86;
          case 70:
            return 69;
          case 71:
            return 70;
          case 73:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[0-9]+(?=[ \n]+))/i, /^(?:@\{)/i, /^(?:[^\}]+)/i, /^(?:\})/i, /^(?:[^\<->\->:\n,;@\s]+(?=@\{))/i, /^(?:[^\<->\->:\n,;@]+?([\-]*[^\<->\->:\n,;@]+?)*?(?=((?!\n)\s)+as(?!\n)\s|[#\n;]|$))/i, /^(?:box\b)/i, /^(?:participant\b)/i, /^(?:actor\b)/i, /^(?:create\b)/i, /^(?:destroy\b)/i, /^(?:[^<\->\->:\n,;]+?([\-]*[^<\->\->:\n,;]+?)*?(?=((?!\n)\s)+as(?!\n)\s|[#\n;]|$))/i, /^(?:as\b)/i, /^(?:(?:))/i, /^(?:loop\b)/i, /^(?:rect\b)/i, /^(?:opt\b)/i, /^(?:alt\b)/i, /^(?:else\b)/i, /^(?:par\b)/i, /^(?:par_over\b)/i, /^(?:and\b)/i, /^(?:critical\b)/i, /^(?:option\b)/i, /^(?:break\b)/i, /^(?:(?:[:]?(?:no)?wrap)?[^#\n;]*)/i, /^(?:end\b)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:links\b)/i, /^(?:link\b)/i, /^(?:properties\b)/i, /^(?:details\b)/i, /^(?:over\b)/i, /^(?:note\b)/i, /^(?:activate\b)/i, /^(?:deactivate\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:title:\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:sequenceDiagram\b)/i, /^(?:autonumber\b)/i, /^(?:off\b)/i, /^(?:,)/i, /^(?:;)/i, /^(?:[^+<\->\->:\n,;]+((?!(-x|--x|-\)|--\)))[\-]*[^\+<\->\->:\n,;]+)*)/i, /^(?:->>)/i, /^(?:<<->>)/i, /^(?:-->>)/i, /^(?:<<-->>)/i, /^(?:->)/i, /^(?:-->)/i, /^(?:-[x])/i, /^(?:--[x])/i, /^(?:-[\)])/i, /^(?:--[\)])/i, /^(?::(?:(?:no)?wrap)?[^#\n;]*)/i, /^(?::)/i, /^(?:\+)/i, /^(?:-)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: {
        acc_descr_multiline: {
          rules: [50, 51],
          inclusive: false
        },
        acc_descr: {
          rules: [48],
          inclusive: false
        },
        acc_title: {
          rules: [46],
          inclusive: false
        },
        ID: {
          rules: [2, 3, 7, 10, 11, 17],
          inclusive: false
        },
        ALIAS: {
          rules: [2, 3, 18, 19],
          inclusive: false
        },
        LINE: {
          rules: [2, 3, 31],
          inclusive: false
        },
        CONFIG: {
          rules: [8, 9],
          inclusive: false
        },
        CONFIG_DATA: {
          rules: [],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 1, 3, 4, 5, 6, 12, 13, 14, 15, 16, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 47, 49, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73],
          inclusive: true
        }
      }
    };
    function U() {
      this.yy = {};
    }
    z.lexer = H;
    loggerLevelUtils.setFunctionName(U, "Parser");
    U.prototype = z;
    z.Parser = U;
    return new U();
  }();
  p.parser = p;
  var g = {
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
    DOTTED_POINT: 25,
    AUTONUMBER: 26,
    CRITICAL_START: 27,
    CRITICAL_OPTION: 28,
    CRITICAL_END: 29,
    BREAK_START: 30,
    BREAK_END: 31,
    PAR_OVER_START: 32,
    BIDIRECTIONAL_SOLID: 33,
    BIDIRECTIONAL_DOTTED: 34
  };
  var u = {
    FILLED: 0,
    OPEN: 1
  };
  var x = {
    LEFTOF: 0,
    RIGHTOF: 1,
    OVER: 2
  };
  r = class {
    addBox(t) {
      this.state.records.boxes.push({
        name: t.text,
        wrap: t.wrap ?? this.autoWrap(),
        fill: t.color,
        actorKeys: []
      });
      this.state.records.currentBox = this.state.records.boxes.slice(-1)[0];
    }
    addActor(t, e, a, r, i) {
      let c;
      let l = this.state.records.currentBox;
      if (i !== undefined) {
        let t;
        t = i.includes("\n") ? i + "\n" : "{\n" + i + "\n}";
        c = jsYamlCoreImplementation.load(t, {
          schema: jsYamlCoreImplementation.Schema
        });
      }
      r = (c == null ? undefined : c.type) ?? r;
      let h = this.state.records.actors.get(t);
      if (h) {
        if (this.state.records.currentBox && h.box && this.state.records.currentBox !== h.box) {
          throw Error(`A same participant should only be defined in one Box: ${h.name} can't be in '${h.box.name}' and in '${this.state.records.currentBox.name}' at the same time.`);
        }
        l = h.box ? h.box : this.state.records.currentBox;
        h.box = l;
        if (h && e === h.name && a == null) {
          return;
        }
      }
      if ((a == null ? undefined : a.text) == null) {
        a = {
          text: e,
          type: r
        };
      }
      if (r == null || a.text == null) {
        a = {
          text: e,
          type: r
        };
      }
      this.state.records.actors.set(t, {
        box: l,
        name: e,
        description: a.text,
        wrap: a.wrap ?? this.autoWrap(),
        prevActor: this.state.records.prevActor,
        links: {},
        properties: {},
        actorCnt: null,
        rectData: null,
        type: r ?? "participant"
      });
      if (this.state.records.prevActor) {
        let e = this.state.records.actors.get(this.state.records.prevActor);
        if (e) {
          e.nextActor = t;
        }
      }
      if (this.state.records.currentBox) {
        this.state.records.currentBox.actorKeys.push(t);
      }
      this.state.records.prevActor = t;
    }
    activationCount(t) {
      let e;
      let a = 0;
      if (!t) {
        return 0;
      }
      for (e = 0; e < this.state.records.messages.length; e++) {
        if (this.state.records.messages[e].type === this.LINETYPE.ACTIVE_START && this.state.records.messages[e].from === t) {
          a++;
        }
        if (this.state.records.messages[e].type === this.LINETYPE.ACTIVE_END && this.state.records.messages[e].from === t) {
          a--;
        }
      }
      return a;
    }
    addMessage(t, e, a, r) {
      this.state.records.messages.push({
        id: this.state.records.messages.length.toString(),
        from: t,
        to: e,
        message: a.text,
        wrap: a.wrap ?? this.autoWrap(),
        answer: r
      });
    }
    addSignal(t, e, a, r) {
      let n = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
      if (r === this.LINETYPE.ACTIVE_END && this.activationCount(t ?? "") < 1) {
        let e = Error("Trying to inactivate an inactive participant (" + t + ")");
        e.hash = {
          text: "->>-",
          token: "->>-",
          line: "1",
          loc: {
            first_line: 1,
            last_line: 1,
            first_column: 1,
            last_column: 1
          },
          expected: ["'ACTIVE_PARTICIPANT'"]
        };
        throw e;
      }
      this.state.records.messages.push({
        id: this.state.records.messages.length.toString(),
        from: t,
        to: e,
        message: (a == null ? undefined : a.text) ?? "",
        wrap: (a == null ? undefined : a.wrap) ?? this.autoWrap(),
        type: r,
        activate: n
      });
      return true;
    }
    hasAtLeastOneBox() {
      return this.state.records.boxes.length > 0;
    }
    hasAtLeastOneBoxWithTitle() {
      return this.state.records.boxes.some(t => t.name);
    }
    getMessages() {
      return this.state.records.messages;
    }
    getBoxes() {
      return this.state.records.boxes;
    }
    getActors() {
      return this.state.records.actors;
    }
    getCreatedActors() {
      return this.state.records.createdActors;
    }
    getDestroyedActors() {
      return this.state.records.destroyedActors;
    }
    getActor(t) {
      return this.state.records.actors.get(t);
    }
    getActorKeys() {
      return [...this.state.records.actors.keys()];
    }
    enableSequenceNumbers() {
      this.state.records.sequenceNumbersEnabled = true;
    }
    disableSequenceNumbers() {
      this.state.records.sequenceNumbersEnabled = false;
    }
    showSequenceNumbers() {
      return this.state.records.sequenceNumbersEnabled;
    }
    setWrap(t) {
      this.state.records.wrapEnabled = t;
    }
    extractWrap(t) {
      if (t === undefined) {
        return {};
      }
      t = t.trim();
      let e = /^:?wrap:/.exec(t) !== null || /^:?nowrap:/.exec(t) === null && undefined;
      return {
        cleanedText: (e === undefined ? t : t.replace(/^:?(?:no)?wrap:/, "")).trim(),
        wrap: e
      };
    }
    autoWrap() {
      var e;
      if (this.state.records.wrapEnabled !== undefined) {
        return this.state.records.wrapEnabled;
      } else {
        return (e = mermaidConfigUtils_1.getConfigAlias().sequence?.wrap) !== null && e !== undefined && e;
      }
    }
    clear() {
      this.state.reset();
      mermaidConfigUtils_1.clearCommonDb();
    }
    parseMessage(t) {
      let e = t.trim();
      let {
        wrap: a,
        cleanedText: r
      } = this.extractWrap(e);
      let i = {
        text: r,
        wrap: a
      };
      loggerLevelUtils.logger.debug(`parseMessage: ${JSON.stringify(i)}`);
      return i;
    }
    parseBoxData(t) {
      let a = /^((?:rgba?|hsla?)\s*\(.*\)|\w*)(.*)$/.exec(t);
      let r = (a == null ? undefined : a[1]) ? a[1].trim() : "transparent";
      let i = (a == null ? undefined : a[2]) ? a[2].trim() : undefined;
      if (window?.CSS) {
        if (!window.CSS.supports("color", r)) {
          r = "transparent";
          i = t.trim();
        }
      } else {
        let e = new Option().style;
        e.color = r;
        if (e.color !== r) {
          r = "transparent";
          i = t.trim();
        }
      }
      let {
        wrap: s,
        cleanedText: n
      } = this.extractWrap(i);
      return {
        text: n ? mermaidConfigUtils_1.sanitizeText(n, mermaidConfigUtils_1.getConfigAlias()) : undefined,
        color: r,
        wrap: s
      };
    }
    addNote(t, e, a) {
      let s = {
        actor: t,
        placement: e,
        message: a.text,
        wrap: a.wrap ?? this.autoWrap()
      };
      let n = [].concat(t, t);
      this.state.records.notes.push(s);
      this.state.records.messages.push({
        id: this.state.records.messages.length.toString(),
        from: n[0],
        to: n[1],
        message: a.text,
        wrap: a.wrap ?? this.autoWrap(),
        type: this.LINETYPE.NOTE,
        placement: e
      });
    }
    addLinks(t, e) {
      let a = this.getActor(t);
      try {
        let t = mermaidConfigUtils_1.sanitizeText(e.text, mermaidConfigUtils_1.getConfigAlias());
        t = (t = t.replace(/&equals;/g, "=")).replace(/&amp;/g, "&");
        let r = JSON.parse(t);
        this.insertLinks(a, r);
      } catch (t) {
        loggerLevelUtils.logger.error("error while parsing actor link text", t);
      }
    }
    addALink(t, e) {
      let a = this.getActor(t);
      try {
        let t = {};
        let r = mermaidConfigUtils_1.sanitizeText(e.text, mermaidConfigUtils_1.getConfigAlias());
        let i = r.indexOf("@");
        let s = (r = (r = r.replace(/&equals;/g, "=")).replace(/&amp;/g, "&")).slice(0, i - 1).trim();
        let n = r.slice(i + 1).trim();
        t[s] = n;
        this.insertLinks(a, t);
      } catch (t) {
        loggerLevelUtils.logger.error("error while parsing actor link text", t);
      }
    }
    insertLinks(t, e) {
      if (t.links == null) {
        t.links = e;
      } else {
        for (let a in e) {
          t.links[a] = e[a];
        }
      }
    }
    addProperties(t, e) {
      let a = this.getActor(t);
      try {
        let t = mermaidConfigUtils_1.sanitizeText(e.text, mermaidConfigUtils_1.getConfigAlias());
        let r = JSON.parse(t);
        this.insertProperties(a, r);
      } catch (t) {
        loggerLevelUtils.logger.error("error while parsing actor properties text", t);
      }
    }
    insertProperties(t, e) {
      if (t.properties == null) {
        t.properties = e;
      } else {
        for (let a in e) {
          t.properties[a] = e[a];
        }
      }
    }
    boxEnd() {
      this.state.records.currentBox = undefined;
    }
    addDetails(t, e) {
      let a = this.getActor(t);
      let r = document.getElementById(e.text);
      try {
        let t = r.innerHTML;
        let e = JSON.parse(t);
        if (e.properties) {
          this.insertProperties(a, e.properties);
        }
        if (e.links) {
          this.insertLinks(a, e.links);
        }
      } catch (t) {
        loggerLevelUtils.logger.error("error while parsing actor details text", t);
      }
    }
    getActorProperty(t, e) {
      if ((t == null ? undefined : t.properties) !== undefined) {
        return t.properties[e];
      }
    }
    apply(t) {
      if (Array.isArray(t)) {
        t.forEach(t => {
          this.apply(t);
        });
      } else {
        switch (t.type) {
          case "sequenceIndex":
            this.state.records.messages.push({
              id: this.state.records.messages.length.toString(),
              from: undefined,
              to: undefined,
              message: {
                start: t.sequenceIndex,
                step: t.sequenceIndexStep,
                visible: t.sequenceVisible
              },
              wrap: false,
              type: t.signalType
            });
            break;
          case "addParticipant":
            this.addActor(t.actor, t.actor, t.description, t.draw, t.config);
            break;
          case "createParticipant":
            if (this.state.records.actors.has(t.actor)) {
              throw Error("It is not possible to have actors with the same id, even if one is destroyed before the next is created. Use 'AS' aliases to simulate the behavior");
            }
            this.state.records.lastCreated = t.actor;
            this.addActor(t.actor, t.actor, t.description, t.draw, t.config);
            this.state.records.createdActors.set(t.actor, this.state.records.messages.length);
            break;
          case "destroyParticipant":
            this.state.records.lastDestroyed = t.actor;
            this.state.records.destroyedActors.set(t.actor, this.state.records.messages.length);
            break;
          case "activeStart":
          case "activeEnd":
            this.addSignal(t.actor, undefined, undefined, t.signalType);
            break;
          case "addNote":
            this.addNote(t.actor, t.placement, t.text);
            break;
          case "addLinks":
            this.addLinks(t.actor, t.text);
            break;
          case "addALink":
            this.addALink(t.actor, t.text);
            break;
          case "addProperties":
            this.addProperties(t.actor, t.text);
            break;
          case "addDetails":
            this.addDetails(t.actor, t.text);
            break;
          case "addMessage":
            if (this.state.records.lastCreated) {
              if (t.to !== this.state.records.lastCreated) {
                throw Error("The created participant " + this.state.records.lastCreated.name + " does not have an associated creating message after its declaration. Please check the sequence diagram.");
              }
              this.state.records.lastCreated = undefined;
            } else if (this.state.records.lastDestroyed) {
              if (t.to !== this.state.records.lastDestroyed && t.from !== this.state.records.lastDestroyed) {
                throw Error("The destroyed participant " + this.state.records.lastDestroyed.name + " does not have an associated destroying message after its declaration. Please check the sequence diagram.");
              }
              this.state.records.lastDestroyed = undefined;
            }
            this.addSignal(t.from, t.to, t.msg, t.signalType, t.activate);
            break;
          case "boxStart":
            this.addBox(t.boxData);
            break;
          case "boxEnd":
            this.boxEnd();
            break;
          case "loopStart":
            this.addSignal(undefined, undefined, t.loopText, t.signalType);
            break;
          case "loopEnd":
          case "rectEnd":
          case "optEnd":
          case "altEnd":
          case "parEnd":
          case "criticalEnd":
          case "breakEnd":
            this.addSignal(undefined, undefined, undefined, t.signalType);
            break;
          case "rectStart":
            this.addSignal(undefined, undefined, t.color, t.signalType);
            break;
          case "optStart":
            this.addSignal(undefined, undefined, t.optText, t.signalType);
            break;
          case "altStart":
          case "else":
            this.addSignal(undefined, undefined, t.altText, t.signalType);
            break;
          case "setAccTitle":
            mermaidConfigUtils_1.setAccTitle(t.text);
            break;
          case "parStart":
          case "and":
            this.addSignal(undefined, undefined, t.parText, t.signalType);
            break;
          case "criticalStart":
            this.addSignal(undefined, undefined, t.criticalText, t.signalType);
            break;
          case "option":
            this.addSignal(undefined, undefined, t.optionText, t.signalType);
            break;
          case "breakStart":
            this.addSignal(undefined, undefined, t.breakText, t.signalType);
        }
      }
    }
    getConfig() {
      return mermaidConfigUtils_1.getConfigAlias().sequence;
    }
    constructor() {
      this.state = new imperativeStateClass.ImperativeState(() => ({
        prevActor: undefined,
        actors: new Map(),
        createdActors: new Map(),
        destroyedActors: new Map(),
        boxes: [],
        messages: [],
        notes: [],
        sequenceNumbersEnabled: false,
        wrapEnabled: undefined,
        currentBox: undefined,
        lastCreated: undefined,
        lastDestroyed: undefined
      }));
      this.setAccTitle = mermaidConfigUtils_1.setAccTitle;
      this.setAccDescription = mermaidConfigUtils_1.setAccDescription;
      this.setDiagramTitle = mermaidConfigUtils_1.setDiagramTitle;
      this.getAccTitle = mermaidConfigUtils_1.getAccTitle;
      this.getAccDescription = mermaidConfigUtils_1.getAccDescription;
      this.getDiagramTitle = mermaidConfigUtils_1.getDiagramTitle;
      this.apply = this.apply.bind(this);
      this.parseBoxData = this.parseBoxData.bind(this);
      this.parseMessage = this.parseMessage.bind(this);
      this.clear();
      this.setWrap(mermaidConfigUtils_1.getConfigAlias().wrap);
      this.LINETYPE = g;
      this.ARROWTYPE = u;
      this.PLACEMENT = x;
    }
  };
  loggerLevelUtils.setFunctionName(r, "SequenceDB");
  var y = r;
  var m = loggerLevelUtils.setFunctionName(t => `.actor {
    stroke: ${t.actorBorder};
    fill: ${t.actorBkg};
  }

  text.actor > tspan {
    fill: ${t.actorTextColor};
    stroke: none;
  }

  .actor-line {
    stroke: ${t.actorLineColor};
  }
  
  .innerArc {
    stroke-width: 1.5;
    stroke-dasharray: none;
  }

  .messageLine0 {
    stroke-width: 1.5;
    stroke-dasharray: none;
    stroke: ${t.signalColor};
  }

  .messageLine1 {
    stroke-width: 1.5;
    stroke-dasharray: 2, 2;
    stroke: ${t.signalColor};
  }

  #arrowhead path {
    fill: ${t.signalColor};
    stroke: ${t.signalColor};
  }

  .sequenceNumber {
    fill: ${t.sequenceNumberColor};
  }

  #sequencenumber {
    fill: ${t.signalColor};
  }

  #crosshead path {
    fill: ${t.signalColor};
    stroke: ${t.signalColor};
  }

  .messageText {
    fill: ${t.signalTextColor};
    stroke: none;
  }

  .labelBox {
    stroke: ${t.labelBoxBorderColor};
    fill: ${t.labelBoxBkgColor};
  }

  .labelText, .labelText > tspan {
    fill: ${t.labelTextColor};
    stroke: none;
  }

  .loopText, .loopText > tspan {
    fill: ${t.loopTextColor};
    stroke: none;
  }

  .loopLine {
    stroke-width: 2px;
    stroke-dasharray: 2, 2;
    stroke: ${t.labelBoxBorderColor};
    fill: ${t.labelBoxBorderColor};
  }

  .note {
    //stroke: #decc93;
    stroke: ${t.noteBorderColor};
    fill: ${t.noteBkgColor};
  }

  .noteText, .noteText > tspan {
    fill: ${t.noteTextColor};
    stroke: none;
  }

  .activation0 {
    fill: ${t.activationBkgColor};
    stroke: ${t.activationBorderColor};
  }

  .activation1 {
    fill: ${t.activationBkgColor};
    stroke: ${t.activationBorderColor};
  }

  .activation2 {
    fill: ${t.activationBkgColor};
    stroke: ${t.activationBorderColor};
  }

  .actorPopupMenu {
    position: absolute;
  }

  .actorPopupMenuPanel {
    position: absolute;
    fill: ${t.actorBkg};
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
  .actor-man line {
    stroke: ${t.actorBorder};
    fill: ${t.actorBkg};
  }
  .actor-man circle, line {
    stroke: ${t.actorBorder};
    fill: ${t.actorBkg};
    stroke-width: 2px;
  }

`, "getStyles");
  var b = "actor-top";
  var T = "actor-bottom";
  var f = "actor-box";
  var E = "actor-man";
  var w = loggerLevelUtils.setFunctionName(function (t, e) {
    return mermaidShapeDrawingUtils.drawRect(t, e);
  }, "drawRect");
  var I = loggerLevelUtils.setFunctionName(function (t, e, a, r, i) {
    if (e.links === undefined || e.links === null || Object.keys(e.links).length === 0) {
      return {
        height: 0,
        width: 0
      };
    }
    let s = e.links;
    let n = e.actorCnt;
    let o = e.rectData;
    var c = "none";
    if (i) {
      c = "block !important";
    }
    let l = t.append("g");
    l.attr("id", "actor" + n + "_popup");
    l.attr("class", "actorPopupMenu");
    l.attr("display", c);
    var h = "";
    if (o.class !== undefined) {
      h = " " + o.class;
    }
    let p = o.width > a ? o.width : a;
    let g = l.append("rect");
    g.attr("class", "actorPopupMenuPanel" + h);
    g.attr("x", o.x);
    g.attr("y", o.height);
    g.attr("fill", o.fill);
    g.attr("stroke", o.stroke);
    g.attr("width", p);
    g.attr("height", o.height);
    g.attr("rx", o.rx);
    g.attr("ry", o.ry);
    if (s != null) {
      var u = 20;
      for (let t in s) {
        var x = l.append("a");
        var y = urlSanitizer.sanitizeUrl(s[t]);
        x.attr("xlink:href", y);
        x.attr("target", "_blank");
        tt(r)(t, x, o.x + 10, o.height + u, p, 20, {
          class: "actor"
        }, r);
        u += 30;
      }
    }
    g.attr("height", u);
    return {
      height: o.height + u,
      width: p
    };
  }, "drawPopup");
  var L = loggerLevelUtils.setFunctionName(function (t) {
    return "var pu = document.getElementById('" + t + "'); if (pu != null) { pu.style.display = pu.style.display == 'block' ? 'none' : 'block'; }";
  }, "popupMenuToggle");
  var v = loggerLevelUtils.setFunctionName(async function (t, e, a = null) {
    let r = t.append("foreignObject");
    let i = await mermaidConfigUtils_1.renderKatexSanitized(e.text, mermaidConfigUtils_1.getConfig());
    let s = r.append("xhtml:div").attr("style", "width: fit-content;").attr("xmlns", "http://www.w3.org/1999/xhtml").html(i).node().getBoundingClientRect();
    r.attr("height", Math.round(s.height)).attr("width", Math.round(s.width));
    if (e.class === "noteText") {
      let a = t.node().firstChild;
      a.setAttribute("height", s.height + e.textMargin * 2);
      let i = a.getBBox();
      r.attr("x", Math.round(i.x + i.width / 2 - s.width / 2)).attr("y", Math.round(i.y + i.height / 2 - s.height / 2));
    } else if (a) {
      let {
        startx: t,
        stopx: i,
        starty: n
      } = a;
      if (t > i) {
        let e = t;
        t = i;
        i = e;
      }
      r.attr("x", Math.round(t + Math.abs(t - i) / 2 - s.width / 2));
      if (e.class === "loopText") {
        r.attr("y", Math.round(n));
      } else {
        r.attr("y", Math.round(n - s.height));
      }
    }
    return [r];
  }, "drawKatex");
  var k = loggerLevelUtils.setFunctionName(function (t, e) {
    let a = 0;
    let r = 0;
    let i = e.text.split(mermaidConfigUtils_1.textUtilities.lineBreakRegex);
    let [s, n] = mermaidDiagramUtils.parseFontSize(e.fontSize);
    let h = [];
    let d = 0;
    let p = loggerLevelUtils.setFunctionName(() => e.y, "yfunc");
    if (e.valign !== undefined && e.textMargin !== undefined && e.textMargin > 0) {
      switch (e.valign) {
        case "top":
        case "start":
          p = loggerLevelUtils.setFunctionName(() => Math.round(e.y + e.textMargin), "yfunc");
          break;
        case "middle":
        case "center":
          p = loggerLevelUtils.setFunctionName(() => Math.round(e.y + (a + r + e.textMargin) / 2), "yfunc");
          break;
        case "bottom":
        case "end":
          p = loggerLevelUtils.setFunctionName(() => Math.round(e.y + (a + r + e.textMargin * 2) - e.textMargin), "yfunc");
      }
    }
    if (e.anchor !== undefined && e.textMargin !== undefined && e.width !== undefined) {
      switch (e.anchor) {
        case "left":
        case "start":
          e.x = Math.round(e.x + e.textMargin);
          e.anchor = "start";
          e.dominantBaseline = "middle";
          e.alignmentBaseline = "middle";
          break;
        case "middle":
        case "center":
          e.x = Math.round(e.x + e.width / 2);
          e.anchor = "middle";
          e.dominantBaseline = "middle";
          e.alignmentBaseline = "middle";
          break;
        case "right":
        case "end":
          e.x = Math.round(e.x + e.width - e.textMargin);
          e.anchor = "end";
          e.dominantBaseline = "middle";
          e.alignmentBaseline = "middle";
      }
    }
    for (let [c, l] of i.entries()) {
      if (e.textMargin !== undefined && e.textMargin === 0 && s !== undefined) {
        d = c * s;
      }
      let i = t.append("text");
      i.attr("x", e.x);
      i.attr("y", p());
      if (e.anchor !== undefined) {
        i.attr("text-anchor", e.anchor).attr("dominant-baseline", e.dominantBaseline).attr("alignment-baseline", e.alignmentBaseline);
      }
      if (e.fontFamily !== undefined) {
        i.style("font-family", e.fontFamily);
      }
      if (n !== undefined) {
        i.style("font-size", n);
      }
      if (e.fontWeight !== undefined) {
        i.style("font-weight", e.fontWeight);
      }
      if (e.fill !== undefined) {
        i.attr("fill", e.fill);
      }
      if (e.class !== undefined) {
        i.attr("class", e.class);
      }
      if (e.dy !== undefined) {
        i.attr("dy", e.dy);
      } else if (d !== 0) {
        i.attr("dy", d);
      }
      let g = l || mermaidDiagramUtils.zeroWidthSpace;
      if (e.tspan) {
        let t = i.append("tspan");
        t.attr("x", e.x);
        if (e.fill !== undefined) {
          t.attr("fill", e.fill);
        }
        t.text(g);
      } else {
        i.text(g);
      }
      if (e.valign !== undefined && e.textMargin !== undefined && e.textMargin > 0) {
        r += (i._groups || i)[0][0].getBBox().height;
        a = r;
      }
      h.push(i);
    }
    return h;
  }, "drawText");
  var _ = loggerLevelUtils.setFunctionName(function (t, e) {
    function a(t, e, a, r, i) {
      return t + "," + e + " " + (t + a) + "," + e + " " + (t + a) + "," + (e + r - i) + " " + (t + a - i * 1.2) + "," + (e + r) + " " + t + "," + (e + r);
    }
    loggerLevelUtils.setFunctionName(a, "genPoints");
    let r = t.append("polygon");
    r.attr("points", a(e.x, e.y, e.width, e.height, 7));
    r.attr("class", "labelBox");
    e.y = e.y + e.height / 2;
    k(t, e);
    return r;
  }, "drawLabel");
  var P = -1;
  var A = loggerLevelUtils.setFunctionName((t, e, a, r) => {
    if (t.select) {
      a.forEach(a => {
        let i = e.get(a);
        let s = t.select("#actor" + i.actorCnt);
        if (!r.mirrorActors && i.stopy) {
          s.attr("y2", i.stopy + i.height / 2);
        } else if (r.mirrorActors) {
          s.attr("y2", i.stopy);
        }
      });
    }
  }, "fixLifeLineHeights");
  var N = loggerLevelUtils.setFunctionName(function (t, e, a, r) {
    let s = r ? e.stopy : e.starty;
    let n = e.x + e.width / 2;
    let o = s + e.height;
    let l = t.append("g").lower();
    var p = l;
    if (!r) {
      P++;
      if (Object.keys(e.links || {}).length && !a.forceMenus) {
        p.attr("onclick", L(`actor${P}_popup`)).attr("cursor", "pointer");
      }
      p.append("line").attr("id", "actor" + P).attr("x1", n).attr("y1", o).attr("x2", n).attr("y2", 2000).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", e.name);
      p = l.append("g");
      e.actorCnt = P;
      if (e.links != null) {
        p.attr("id", "root-" + P);
      }
    }
    let g = mermaidShapeDrawingUtils.getNoteRect();
    var u = "actor";
    if (e.properties?.class) {
      u = e.properties.class;
    } else {
      g.fill = "#eaeaea";
    }
    if (r) {
      u += ` ${T}`;
    } else {
      u += ` ${b}`;
    }
    g.x = e.x;
    g.y = s;
    g.width = e.width;
    g.height = e.height;
    g.class = u;
    g.rx = 3;
    g.ry = 3;
    g.name = e.name;
    let x = w(p, g);
    e.rectData = g;
    if (e.properties?.icon) {
      let t = e.properties.icon.trim();
      if (t.charAt(0) === "@") {
        mermaidShapeDrawingUtils.drawEmbeddedImage(p, g.x + g.width - 20, g.y + 10, t.substr(1));
      } else {
        mermaidShapeDrawingUtils.drawImage(p, g.x + g.width - 20, g.y + 10, t);
      }
    }
    Q(a, mermaidConfigUtils_1.hasKatex(e.description))(e.description, p, g.x, g.y, g.width, g.height, {
      class: `actor ${f}`
    }, a);
    let y = e.height;
    if (x.node) {
      let t = x.node().getBBox();
      e.height = t.height;
      y = t.height;
    }
    return y;
  }, "drawActorTypeParticipant");
  var M = loggerLevelUtils.setFunctionName(function (t, e, a, r) {
    let s = r ? e.stopy : e.starty;
    let n = e.x + e.width / 2;
    let o = s + e.height;
    let l = t.append("g").lower();
    var p = l;
    if (!r) {
      P++;
      if (Object.keys(e.links || {}).length && !a.forceMenus) {
        p.attr("onclick", L(`actor${P}_popup`)).attr("cursor", "pointer");
      }
      p.append("line").attr("id", "actor" + P).attr("x1", n).attr("y1", o).attr("x2", n).attr("y2", 2000).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", e.name);
      p = l.append("g");
      e.actorCnt = P;
      if (e.links != null) {
        p.attr("id", "root-" + P);
      }
    }
    let g = mermaidShapeDrawingUtils.getNoteRect();
    var u = "actor";
    if (e.properties?.class) {
      u = e.properties.class;
    } else {
      g.fill = "#eaeaea";
    }
    if (r) {
      u += ` ${T}`;
    } else {
      u += ` ${b}`;
    }
    g.x = e.x;
    g.y = s;
    g.width = e.width;
    g.height = e.height;
    g.class = u;
    g.name = e.name;
    let x = {
      ...g,
      x: g.x + -6,
      y: g.y + 6,
      class: "actor"
    };
    let y = w(p, g);
    w(p, x);
    e.rectData = g;
    if (e.properties?.icon) {
      let t = e.properties.icon.trim();
      if (t.charAt(0) === "@") {
        mermaidShapeDrawingUtils.drawEmbeddedImage(p, g.x + g.width - 20, g.y + 10, t.substr(1));
      } else {
        mermaidShapeDrawingUtils.drawImage(p, g.x + g.width - 20, g.y + 10, t);
      }
    }
    Q(a, mermaidConfigUtils_1.hasKatex(e.description))(e.description, p, g.x - 6, g.y + 6, g.width, g.height, {
      class: `actor ${f}`
    }, a);
    let m = e.height;
    if (y.node) {
      let t = y.node().getBBox();
      e.height = t.height;
      m = t.height;
    }
    return m;
  }, "drawActorTypeCollections");
  var S = loggerLevelUtils.setFunctionName(function (t, e, a, r) {
    let o = r ? e.stopy : e.starty;
    let l = e.x + e.width / 2;
    let h = o + e.height;
    let d = t.append("g").lower();
    let p = d;
    if (!r) {
      P++;
      if (Object.keys(e.links || {}).length && !a.forceMenus) {
        p.attr("onclick", L(`actor${P}_popup`)).attr("cursor", "pointer");
      }
      p.append("line").attr("id", "actor" + P).attr("x1", l).attr("y1", h).attr("x2", l).attr("y2", 2000).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", e.name);
      p = d.append("g");
      e.actorCnt = P;
      if (e.links != null) {
        p.attr("id", "root-" + P);
      }
    }
    let g = mermaidShapeDrawingUtils.getNoteRect();
    let u = "actor";
    if (e.properties?.class) {
      u = e.properties.class;
    } else {
      g.fill = "#eaeaea";
    }
    if (r) {
      u += ` ${T}`;
    } else {
      u += ` ${b}`;
    }
    g.x = e.x;
    g.y = o;
    g.width = e.width;
    g.height = e.height;
    g.class = u;
    g.name = e.name;
    let x = g.height / 2;
    let y = x / (2.5 + g.height / 50);
    let m = p.append("g");
    let E = p.append("g");
    m.append("path").attr("d", `M ${g.x},${g.y + x}
    a ${y},${x} 0 0 0 0,${g.height}
    h ${g.width - y * 2}
    a ${y},${x} 0 0 0 0,-${g.height}
    Z
  `).attr("class", u);
    E.append("path").attr("d", `M ${g.x},${g.y + x}
      a ${y},${x} 0 0 0 0,${g.height}`).attr("stroke", "#666").attr("stroke-width", "1px").attr("class", u);
    m.attr("transform", `translate(${y}, ${-(g.height / 2)})`);
    E.attr("transform", `translate(${g.width - y}, ${-g.height / 2})`);
    e.rectData = g;
    if (e.properties?.icon) {
      let t = e.properties.icon.trim();
      let a = g.x + g.width - 20;
      let r = g.y + 10;
      if (t.charAt(0) === "@") {
        mermaidShapeDrawingUtils.drawEmbeddedImage(p, a, r, t.substr(1));
      } else {
        mermaidShapeDrawingUtils.drawImage(p, a, r, t);
      }
    }
    Q(a, mermaidConfigUtils_1.hasKatex(e.description))(e.description, p, g.x, g.y, g.width, g.height, {
      class: `actor ${f}`
    }, a);
    let w = e.height;
    let I = m.select("path:last-child");
    if (I.node()) {
      let t = I.node().getBBox();
      e.height = t.height;
      w = t.height;
    }
    return w;
  }, "drawActorTypeQueue");
  var O = loggerLevelUtils.setFunctionName(function (t, e, a, r) {
    let o = r ? e.stopy : e.starty;
    let l = e.x + e.width / 2;
    let h = o + 75;
    let d = t.append("g").lower();
    if (!r) {
      P++;
      d.append("line").attr("id", "actor" + P).attr("x1", l).attr("y1", h).attr("x2", l).attr("y2", 2000).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", e.name);
      e.actorCnt = P;
    }
    let p = t.append("g");
    let g = E;
    if (r) {
      g += ` ${T}`;
    } else {
      g += ` ${b}`;
    }
    p.attr("class", g);
    p.attr("name", e.name);
    let u = mermaidShapeDrawingUtils.getNoteRect();
    u.x = e.x;
    u.y = o;
    u.fill = "#eaeaea";
    u.width = e.width;
    u.height = e.height;
    u.class = "actor";
    let x = e.x + e.width / 2;
    let y = o + 30;
    p.append("defs").append("marker").attr("id", "filled-head-control").attr("refX", 11).attr("refY", 5.8).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "172.5").append("path").attr("d", "M 14.4 5.6 L 7.2 10.4 L 8.8 5.6 L 7.2 0.8 Z");
    p.append("circle").attr("cx", x).attr("cy", y).attr("r", 18).attr("fill", "#eaeaf7").attr("stroke", "#666").attr("stroke-width", 1.2);
    p.append("line").attr("marker-end", "url(#filled-head-control)").attr("transform", `translate(${x}, ${y - 18})`);
    let m = p.node().getBBox();
    e.height = m.height + ((a == null ? undefined : a.sequence?.labelBoxHeight) ?? 0) * 2;
    Q(a, mermaidConfigUtils_1.hasKatex(e.description))(e.description, p, u.x, u.y + 18 + (r ? 5 : 10), u.width, u.height, {
      class: `actor ${E}`
    }, a);
    return e.height;
  }, "drawActorTypeControl");
  var D = loggerLevelUtils.setFunctionName(function (t, e, a, r) {
    let o = r ? e.stopy : e.starty;
    let l = e.x + e.width / 2;
    let h = o + 75;
    let d = t.append("g").lower();
    let p = t.append("g");
    let g = E;
    if (r) {
      g += ` ${T}`;
    } else {
      g += ` ${b}`;
    }
    p.attr("class", g);
    p.attr("name", e.name);
    let u = mermaidShapeDrawingUtils.getNoteRect();
    u.x = e.x;
    u.y = o;
    u.fill = "#eaeaea";
    u.width = e.width;
    u.height = e.height;
    u.class = "actor";
    let x = e.x + e.width / 2;
    let y = o + (r ? 10 : 25);
    p.append("circle").attr("cx", x).attr("cy", y).attr("r", 18).attr("width", e.width).attr("height", e.height);
    p.append("line").attr("x1", x - 18).attr("x2", x + 18).attr("y1", y + 18).attr("y2", y + 18).attr("stroke", "#333").attr("stroke-width", 2);
    let m = p.node().getBBox();
    e.height = m.height + ((a == null ? undefined : a.sequence?.labelBoxHeight) ?? 0);
    if (!r) {
      P++;
      d.append("line").attr("id", "actor" + P).attr("x1", l).attr("y1", h).attr("x2", l).attr("y2", 2000).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", e.name);
      e.actorCnt = P;
    }
    Q(a, mermaidConfigUtils_1.hasKatex(e.description))(e.description, p, u.x, u.y + (r ? (y - o + 18 - 5) / 2 : (y + 18 - o) / 2), u.width, u.height, {
      class: `actor ${E}`
    }, a);
    p.attr("transform", "translate(0, 9)");
    return e.height;
  }, "drawActorTypeEntity");
  var W = loggerLevelUtils.setFunctionName(function (t, e, a, r) {
    let o = r ? e.stopy : e.starty;
    let l = e.x + e.width / 2;
    let h = o + e.height + a.boxTextMargin * 2;
    let d = t.append("g").lower();
    let p = d;
    if (!r) {
      P++;
      if (Object.keys(e.links || {}).length && !a.forceMenus) {
        p.attr("onclick", L(`actor${P}_popup`)).attr("cursor", "pointer");
      }
      p.append("line").attr("id", "actor" + P).attr("x1", l).attr("y1", h).attr("x2", l).attr("y2", 2000).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", e.name);
      p = d.append("g");
      e.actorCnt = P;
      if (e.links != null) {
        p.attr("id", "root-" + P);
      }
    }
    let g = mermaidShapeDrawingUtils.getNoteRect();
    let u = "actor";
    if (e.properties?.class) {
      u = e.properties.class;
    } else {
      g.fill = "#eaeaea";
    }
    if (r) {
      u += ` ${T}`;
    } else {
      u += ` ${b}`;
    }
    g.x = e.x;
    g.y = o;
    g.width = e.width;
    g.height = e.height;
    g.class = u;
    g.name = e.name;
    g.x = e.x;
    g.y = o;
    let x = g.width / 4;
    let y = g.width / 4;
    let m = x / 2;
    let E = m / (2.5 + x / 50);
    let w = p.append("g");
    let I = `
  M ${g.x},${g.y + E}
  a ${m},${E} 0 0 0 ${x},0
  a ${m},${E} 0 0 0 -${x},0
  l 0,${y - E * 2}
  a ${m},${E} 0 0 0 ${x},0
  l 0,-${y - E * 2}
`;
    w.append("path").attr("d", I).attr("fill", "#eaeaea").attr("stroke", "#000").attr("stroke-width", 1).attr("class", u);
    if (r) {
      w.attr("transform", `translate(${x * 1.5}, ${g.height / 4 - E * 2})`);
    } else {
      w.attr("transform", `translate(${x * 1.5}, ${(g.height + E) / 4})`);
    }
    e.rectData = g;
    Q(a, mermaidConfigUtils_1.hasKatex(e.description))(e.description, p, g.x, g.y + (r ? (g.height + y) / 4 : (g.height + E) / 2), g.width, g.height, {
      class: `actor ${f}`
    }, a);
    let v = w.select("path:last-child");
    if (v.node()) {
      let t = v.node().getBBox();
      e.height = t.height + (a.sequence.labelBoxHeight ?? 0);
    }
    return e.height;
  }, "drawActorTypeDatabase");
  var $ = loggerLevelUtils.setFunctionName(function (t, e, a, r) {
    let n = r ? e.stopy : e.starty;
    let o = e.x + e.width / 2;
    let l = n + 80;
    let h = t.append("g").lower();
    if (!r) {
      P++;
      h.append("line").attr("id", "actor" + P).attr("x1", o).attr("y1", l).attr("x2", o).attr("y2", 2000).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", e.name);
      e.actorCnt = P;
    }
    let d = t.append("g");
    let p = E;
    if (r) {
      p += ` ${T}`;
    } else {
      p += ` ${b}`;
    }
    d.attr("class", p);
    d.attr("name", e.name);
    let g = mermaidShapeDrawingUtils.getNoteRect();
    g.x = e.x;
    g.y = n;
    g.fill = "#eaeaea";
    g.width = e.width;
    g.height = e.height;
    g.class = "actor";
    d.append("line").attr("id", "actor-man-torso" + P).attr("x1", e.x + e.width / 2 - 75).attr("y1", n + 10).attr("x2", e.x + e.width / 2 - 15).attr("y2", n + 10);
    d.append("line").attr("id", "actor-man-arms" + P).attr("x1", e.x + e.width / 2 - 75).attr("y1", n + 0).attr("x2", e.x + e.width / 2 - 75).attr("y2", n + 20);
    d.append("circle").attr("cx", e.x + e.width / 2).attr("cy", n + 10).attr("r", 30);
    let u = d.node().getBBox();
    e.height = u.height + (a.sequence.labelBoxHeight ?? 0);
    Q(a, mermaidConfigUtils_1.hasKatex(e.description))(e.description, d, g.x, g.y + (r ? 11 : 18), g.width, g.height, {
      class: `actor ${E}`
    }, a);
    d.attr("transform", "translate(0,22)");
    return e.height;
  }, "drawActorTypeBoundary");
  var Y = loggerLevelUtils.setFunctionName(function (t, e, a, r) {
    let s = r ? e.stopy : e.starty;
    let n = e.x + e.width / 2;
    let o = s + 80;
    let l = t.append("g").lower();
    if (!r) {
      P++;
      l.append("line").attr("id", "actor" + P).attr("x1", n).attr("y1", o).attr("x2", n).attr("y2", 2000).attr("class", "actor-line 200").attr("stroke-width", "0.5px").attr("stroke", "#999").attr("name", e.name);
      e.actorCnt = P;
    }
    let h = t.append("g");
    let d = E;
    if (r) {
      d += ` ${T}`;
    } else {
      d += ` ${b}`;
    }
    h.attr("class", d);
    h.attr("name", e.name);
    let p = mermaidShapeDrawingUtils.getNoteRect();
    p.x = e.x;
    p.y = s;
    p.fill = "#eaeaea";
    p.width = e.width;
    p.height = e.height;
    p.class = "actor";
    p.rx = 3;
    p.ry = 3;
    h.append("line").attr("id", "actor-man-torso" + P).attr("x1", n).attr("y1", s + 25).attr("x2", n).attr("y2", s + 45);
    h.append("line").attr("id", "actor-man-arms" + P).attr("x1", n - 18).attr("y1", s + 33).attr("x2", n + 18).attr("y2", s + 33);
    h.append("line").attr("x1", n - 18).attr("y1", s + 60).attr("x2", n).attr("y2", s + 45);
    h.append("line").attr("x1", n).attr("y1", s + 45).attr("x2", n + 18 - 2).attr("y2", s + 60);
    let g = h.append("circle");
    g.attr("cx", e.x + e.width / 2);
    g.attr("cy", s + 10);
    g.attr("r", 15);
    g.attr("width", e.width);
    g.attr("height", e.height);
    let u = h.node().getBBox();
    e.height = u.height;
    Q(a, mermaidConfigUtils_1.hasKatex(e.description))(e.description, h, p.x, p.y + 35, p.width, p.height, {
      class: `actor ${E}`
    }, a);
    return e.height;
  }, "drawActorTypeActor");
  var R = loggerLevelUtils.setFunctionName(async function (t, e, a, r) {
    switch (e.type) {
      case "actor":
        return await Y(t, e, a, r);
      case "participant":
        return await N(t, e, a, r);
      case "boundary":
        return await $(t, e, a, r);
      case "control":
        return await O(t, e, a, r);
      case "entity":
        return await D(t, e, a, r);
      case "database":
        return await W(t, e, a, r);
      case "collections":
        return await M(t, e, a, r);
      case "queue":
        return await S(t, e, a, r);
    }
  }, "drawActor");
  var C = loggerLevelUtils.setFunctionName(function (t, e, a) {
    let r = t.append("g");
    q(r, e);
    if (e.name) {
      Q(a)(e.name, r, e.x, e.y + a.boxTextMargin + (e.textMaxHeight || 0) / 2, e.width, 0, {
        class: "text"
      }, a);
    }
    r.lower();
  }, "drawBox");
  var B = loggerLevelUtils.setFunctionName(function (t) {
    return t.append("g");
  }, "anchorElement");
  var V = loggerLevelUtils.setFunctionName(function (t, e, a, r, s) {
    let n = mermaidShapeDrawingUtils.getNoteRect();
    let o = e.anchored;
    n.x = e.startx;
    n.y = e.starty;
    n.class = "activation" + s % 3;
    n.width = e.stopx - e.startx;
    n.height = a - e.starty;
    w(o, n);
  }, "drawActivation");
  var F = loggerLevelUtils.setFunctionName(async function (t, e, a, r) {
    let {
      boxMargin: s,
      boxTextMargin: n,
      labelBoxHeight: o,
      labelBoxWidth: h,
      messageFontFamily: d,
      messageFontSize: p,
      messageFontWeight: g
    } = r;
    let u = t.append("g");
    let x = loggerLevelUtils.setFunctionName(function (t, e, a, r) {
      return u.append("line").attr("x1", t).attr("y1", e).attr("x2", a).attr("y2", r).attr("class", "loopLine");
    }, "drawLoopLine");
    x(e.startx, e.starty, e.stopx, e.starty);
    x(e.stopx, e.starty, e.stopx, e.stopy);
    x(e.startx, e.stopy, e.stopx, e.stopy);
    x(e.startx, e.starty, e.startx, e.stopy);
    if (e.sections !== undefined) {
      e.sections.forEach(function (t) {
        x(e.startx, t.y, e.stopx, t.y).style("stroke-dasharray", "3, 3");
      });
    }
    let y = mermaidShapeDrawingUtils.getTextObj();
    y.text = a;
    y.x = e.startx;
    y.y = e.starty;
    y.fontFamily = d;
    y.fontSize = p;
    y.fontWeight = g;
    y.anchor = "middle";
    y.valign = "middle";
    y.tspan = false;
    y.width = h || 50;
    y.height = o || 20;
    y.textMargin = n;
    y.class = "labelText";
    _(u, y);
    (y = J()).text = e.title;
    y.x = e.startx + h / 2 + (e.stopx - e.startx) / 2;
    y.y = e.starty + s + n;
    y.anchor = "middle";
    y.valign = "middle";
    y.textMargin = n;
    y.class = "loopText";
    y.fontFamily = d;
    y.fontSize = p;
    y.fontWeight = g;
    y.wrap = true;
    let m = mermaidConfigUtils_1.hasKatex(y.text) ? await v(u, y, e) : k(u, y);
    if (e.sectionTitles !== undefined) {
      for (let [t, a] of Object.entries(e.sectionTitles)) {
        if (a.message) {
          y.text = a.message;
          y.x = e.startx + (e.stopx - e.startx) / 2;
          y.y = e.sections[t].y + s + n;
          y.class = "loopText";
          y.anchor = "middle";
          y.valign = "middle";
          y.tspan = false;
          y.fontFamily = d;
          y.fontSize = p;
          y.fontWeight = g;
          y.wrap = e.wrap;
          if (mermaidConfigUtils_1.hasKatex(y.text)) {
            e.starty = e.sections[t].y;
            await v(u, y, e);
          } else {
            k(u, y);
          }
          let r = Math.round(m.map(t => (t._groups || t)[0][0].getBBox().height).reduce((t, e) => t + e));
          e.sections[t].height += r - (s + n);
        }
      }
    }
    e.height = Math.round(e.stopy - e.starty);
    return u;
  }, "drawLoop");
  var q = loggerLevelUtils.setFunctionName(function (t, e) {
    mermaidShapeDrawingUtils.drawBackgroundRect(t, e);
  }, "drawBackgroundRect");
  var z = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("symbol").attr("id", "database").attr("fill-rule", "evenodd").attr("clip-rule", "evenodd").append("path").attr("transform", "scale(.5)").attr("d", "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z");
  }, "insertDatabaseIcon");
  var H = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("symbol").attr("id", "computer").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr("d", "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z");
  }, "insertComputerIcon");
  var U = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("symbol").attr("id", "clock").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr("d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z");
  }, "insertClockIcon");
  var j = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 7.9).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto-start-reverse").append("path").attr("d", "M -1 0 L 10 5 L 0 10 z");
  }, "insertArrowHead");
  var G = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("marker").attr("id", "filled-head").attr("refX", 15.5).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "insertArrowFilledHead");
  var K = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("marker").attr("id", "sequencenumber").attr("refX", 15).attr("refY", 15).attr("markerWidth", 60).attr("markerHeight", 40).attr("orient", "auto").append("circle").attr("cx", 15).attr("cy", 15).attr("r", 6);
  }, "insertSequenceNumber");
  var X = loggerLevelUtils.setFunctionName(function (t) {
    t.append("defs").append("marker").attr("id", "crosshead").attr("markerWidth", 15).attr("markerHeight", 8).attr("orient", "auto").attr("refX", 4).attr("refY", 4.5).append("path").attr("fill", "none").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1pt").attr("d", "M 1,2 L 6,7 M 6,2 L 1,7");
  }, "insertArrowCrossHead");
  var J = loggerLevelUtils.setFunctionName(function () {
    return {
      x: 0,
      y: 0,
      fill: undefined,
      anchor: undefined,
      style: "#666",
      width: undefined,
      height: undefined,
      textMargin: 0,
      rx: 0,
      ry: 0,
      tspan: true,
      valign: undefined
    };
  }, "getTextObj");
  var Z = loggerLevelUtils.setFunctionName(function () {
    return {
      x: 0,
      y: 0,
      fill: "#EDF2AE",
      stroke: "#666",
      width: 100,
      anchor: "start",
      height: 100,
      rx: 0,
      ry: 0
    };
  }, "getNoteRect");
  var Q = function () {
    function t(t, e, a, r, s, n, o) {
      i(e.append("text").attr("x", a + s / 2).attr("y", r + n / 2 + 5).style("text-anchor", "middle").text(t), o);
    }
    function e(t, e, a, r, s, n, l, h) {
      let {
        actorFontSize: d,
        actorFontFamily: p,
        actorFontWeight: g
      } = h;
      let [u, x] = mermaidDiagramUtils.parseFontSize(d);
      let y = t.split(mermaidConfigUtils_1.textUtilities.lineBreakRegex);
      for (let t = 0; t < y.length; t++) {
        let o = t * u - u * (y.length - 1) / 2;
        let c = e.append("text").attr("x", a + s / 2).attr("y", r).style("text-anchor", "middle").style("font-size", x).style("font-weight", g).style("font-family", p);
        c.append("tspan").attr("x", a + s / 2).attr("dy", o).text(y[t]);
        c.attr("y", r + n / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central");
        i(c, l);
      }
    }
    function a(t, a, r, s, n, o, c, l) {
      let h = a.append("switch");
      let d = h.append("foreignObject").attr("x", r).attr("y", s).attr("width", n).attr("height", o).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
      d.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(t);
      e(t, h, r, s, n, o, c, l);
      i(d, c);
    }
    async function r(t, a, r, s, n, o, l, h) {
      let d = await mermaidConfigUtils_1.calcMathMLDims(t, mermaidConfigUtils_1.getConfig());
      let p = a.append("switch");
      let g = p.append("foreignObject").attr("x", r + n / 2 - d.width / 2).attr("y", s + o / 2 - d.height / 2).attr("width", d.width).attr("height", d.height).append("xhtml:div").style("height", "100%").style("width", "100%");
      g.append("div").style("text-align", "center").style("vertical-align", "middle").html(await mermaidConfigUtils_1.renderKatexSanitized(t, mermaidConfigUtils_1.getConfig()));
      e(t, p, r, s, n, o, l, h);
      i(g, l);
    }
    function i(t, e) {
      for (let a in e) {
        if (e.hasOwnProperty(a)) {
          t.attr(a, e[a]);
        }
      }
    }
    loggerLevelUtils.setFunctionName(t, "byText");
    loggerLevelUtils.setFunctionName(e, "byTspan");
    loggerLevelUtils.setFunctionName(a, "byFo");
    loggerLevelUtils.setFunctionName(r, "byKatex");
    loggerLevelUtils.setFunctionName(i, "_setTextAttrs");
    return function (i, s = false) {
      if (s) {
        return r;
      } else if (i.textPlacement === "fo") {
        return a;
      } else if (i.textPlacement === "old") {
        return t;
      } else {
        return e;
      }
    };
  }();
  var tt = function () {
    function t(t, e, a, i, s, n, o) {
      r(e.append("text").attr("x", a).attr("y", i).style("text-anchor", "start").text(t), o);
    }
    function e(t, e, a, i, s, n, o, l) {
      let {
        actorFontSize: h,
        actorFontFamily: d,
        actorFontWeight: p
      } = l;
      let g = t.split(mermaidConfigUtils_1.textUtilities.lineBreakRegex);
      for (let t = 0; t < g.length; t++) {
        let s = t * h - h * (g.length - 1) / 2;
        let c = e.append("text").attr("x", a).attr("y", i).style("text-anchor", "start").style("font-size", h).style("font-weight", p).style("font-family", d);
        c.append("tspan").attr("x", a).attr("dy", s).text(g[t]);
        c.attr("y", i + n / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central");
        r(c, o);
      }
    }
    function a(t, a, i, s, n, o, c, l) {
      let h = a.append("switch");
      let d = h.append("foreignObject").attr("x", i).attr("y", s).attr("width", n).attr("height", o).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
      d.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(t);
      e(t, h, i, s, n, o, c, l);
      r(d, c);
    }
    function r(t, e) {
      for (let a in e) {
        if (e.hasOwnProperty(a)) {
          t.attr(a, e[a]);
        }
      }
    }
    loggerLevelUtils.setFunctionName(t, "byText");
    loggerLevelUtils.setFunctionName(e, "byTspan");
    loggerLevelUtils.setFunctionName(a, "byFo");
    loggerLevelUtils.setFunctionName(r, "_setTextAttrs");
    return function (r) {
      if (r.textPlacement === "fo") {
        return a;
      } else if (r.textPlacement === "old") {
        return t;
      } else {
        return e;
      }
    };
  }();
  var te = {
    drawRect: w,
    drawText: k,
    drawLabel: _,
    drawActor: R,
    drawBox: C,
    drawPopup: I,
    anchorElement: B,
    drawActivation: V,
    drawLoop: F,
    drawBackgroundRect: q,
    insertArrowHead: j,
    insertArrowFilledHead: G,
    insertSequenceNumber: K,
    insertArrowCrossHead: X,
    insertDatabaseIcon: z,
    insertComputerIcon: H,
    insertClockIcon: U,
    getTextObj: J,
    getNoteRect: Z,
    fixLifeLineHeights: A,
    sanitizeUrl: urlSanitizer.sanitizeUrl
  };
  var ta = {};
  var tr = {
    data: {
      startx: undefined,
      stopx: undefined,
      starty: undefined,
      stopy: undefined
    },
    verticalPos: 0,
    sequenceItems: [],
    activations: [],
    models: {
      getHeight: loggerLevelUtils.setFunctionName(function () {
        return Math.max.apply(null, this.actors.length === 0 ? [0] : this.actors.map(t => t.height || 0)) + (this.loops.length === 0 ? 0 : this.loops.map(t => t.height || 0).reduce((t, e) => t + e)) + (this.messages.length === 0 ? 0 : this.messages.map(t => t.height || 0).reduce((t, e) => t + e)) + (this.notes.length === 0 ? 0 : this.notes.map(t => t.height || 0).reduce((t, e) => t + e));
      }, "getHeight"),
      clear: loggerLevelUtils.setFunctionName(function () {
        this.actors = [];
        this.boxes = [];
        this.loops = [];
        this.messages = [];
        this.notes = [];
      }, "clear"),
      addBox: loggerLevelUtils.setFunctionName(function (t) {
        this.boxes.push(t);
      }, "addBox"),
      addActor: loggerLevelUtils.setFunctionName(function (t) {
        this.actors.push(t);
      }, "addActor"),
      addLoop: loggerLevelUtils.setFunctionName(function (t) {
        this.loops.push(t);
      }, "addLoop"),
      addMessage: loggerLevelUtils.setFunctionName(function (t) {
        this.messages.push(t);
      }, "addMessage"),
      addNote: loggerLevelUtils.setFunctionName(function (t) {
        this.notes.push(t);
      }, "addNote"),
      lastActor: loggerLevelUtils.setFunctionName(function () {
        return this.actors[this.actors.length - 1];
      }, "lastActor"),
      lastLoop: loggerLevelUtils.setFunctionName(function () {
        return this.loops[this.loops.length - 1];
      }, "lastLoop"),
      lastMessage: loggerLevelUtils.setFunctionName(function () {
        return this.messages[this.messages.length - 1];
      }, "lastMessage"),
      lastNote: loggerLevelUtils.setFunctionName(function () {
        return this.notes[this.notes.length - 1];
      }, "lastNote"),
      actors: [],
      boxes: [],
      loops: [],
      messages: [],
      notes: []
    },
    init: loggerLevelUtils.setFunctionName(function () {
      this.sequenceItems = [];
      this.activations = [];
      this.models.clear();
      this.data = {
        startx: undefined,
        stopx: undefined,
        starty: undefined,
        stopy: undefined
      };
      this.verticalPos = 0;
      tg(mermaidConfigUtils_1.getConfigAlias());
    }, "init"),
    updateVal: loggerLevelUtils.setFunctionName(function (t, e, a, r) {
      if (t[e] === undefined) {
        t[e] = a;
      } else {
        t[e] = r(a, t[e]);
      }
    }, "updateVal"),
    updateBounds: loggerLevelUtils.setFunctionName(function (t, e, a, r) {
      let i = this;
      let s = 0;
      function n(n) {
        return loggerLevelUtils.setFunctionName(function (o) {
          s++;
          let c = i.sequenceItems.length - s + 1;
          i.updateVal(o, "starty", e - c * ta.boxMargin, Math.min);
          i.updateVal(o, "stopy", r + c * ta.boxMargin, Math.max);
          i.updateVal(tr.data, "startx", t - c * ta.boxMargin, Math.min);
          i.updateVal(tr.data, "stopx", a + c * ta.boxMargin, Math.max);
          if (n !== "activation") {
            i.updateVal(o, "startx", t - c * ta.boxMargin, Math.min);
            i.updateVal(o, "stopx", a + c * ta.boxMargin, Math.max);
            i.updateVal(tr.data, "starty", e - c * ta.boxMargin, Math.min);
            i.updateVal(tr.data, "stopy", r + c * ta.boxMargin, Math.max);
          }
        }, "updateItemBounds");
      }
      loggerLevelUtils.setFunctionName(n, "updateFn");
      this.sequenceItems.forEach(n());
      this.activations.forEach(n("activation"));
    }, "updateBounds"),
    insert: loggerLevelUtils.setFunctionName(function (t, e, a, r) {
      let i = mermaidConfigUtils_1.textUtilities.getMin(t, a);
      let s = mermaidConfigUtils_1.textUtilities.getMax(t, a);
      let n = mermaidConfigUtils_1.textUtilities.getMin(e, r);
      let o = mermaidConfigUtils_1.textUtilities.getMax(e, r);
      this.updateVal(tr.data, "startx", i, Math.min);
      this.updateVal(tr.data, "starty", n, Math.min);
      this.updateVal(tr.data, "stopx", s, Math.max);
      this.updateVal(tr.data, "stopy", o, Math.max);
      this.updateBounds(i, n, s, o);
    }, "insert"),
    newActivation: loggerLevelUtils.setFunctionName(function (t, e, a) {
      let r = a.get(t.from);
      let i = tu(t.from).length || 0;
      let s = r.x + r.width / 2 + (i - 1) * ta.activationWidth / 2;
      this.activations.push({
        startx: s,
        starty: this.verticalPos + 2,
        stopx: s + ta.activationWidth,
        stopy: undefined,
        actor: t.from,
        anchored: te.anchorElement(e)
      });
    }, "newActivation"),
    endActivation: loggerLevelUtils.setFunctionName(function (t) {
      let e = this.activations.map(function (t) {
        return t.actor;
      }).lastIndexOf(t.from);
      return this.activations.splice(e, 1)[0];
    }, "endActivation"),
    createLoop: loggerLevelUtils.setFunctionName(function (t = {
      message: undefined,
      wrap: false,
      width: undefined
    }, e) {
      return {
        startx: undefined,
        starty: this.verticalPos,
        stopx: undefined,
        stopy: undefined,
        title: t.message,
        wrap: t.wrap,
        width: t.width,
        height: 0,
        fill: e
      };
    }, "createLoop"),
    newLoop: loggerLevelUtils.setFunctionName(function (t = {
      message: undefined,
      wrap: false,
      width: undefined
    }, e) {
      this.sequenceItems.push(this.createLoop(t, e));
    }, "newLoop"),
    endLoop: loggerLevelUtils.setFunctionName(function () {
      return this.sequenceItems.pop();
    }, "endLoop"),
    isLoopOverlap: loggerLevelUtils.setFunctionName(function () {
      return !!this.sequenceItems.length && this.sequenceItems[this.sequenceItems.length - 1].overlap;
    }, "isLoopOverlap"),
    addSectionToLoop: loggerLevelUtils.setFunctionName(function (t) {
      let e = this.sequenceItems.pop();
      e.sections = e.sections || [];
      e.sectionTitles = e.sectionTitles || [];
      e.sections.push({
        y: tr.getVerticalPos(),
        height: 0
      });
      e.sectionTitles.push(t);
      this.sequenceItems.push(e);
    }, "addSectionToLoop"),
    saveVerticalPos: loggerLevelUtils.setFunctionName(function () {
      if (this.isLoopOverlap()) {
        this.savedVerticalPos = this.verticalPos;
      }
    }, "saveVerticalPos"),
    resetVerticalPos: loggerLevelUtils.setFunctionName(function () {
      if (this.isLoopOverlap()) {
        this.verticalPos = this.savedVerticalPos;
      }
    }, "resetVerticalPos"),
    bumpVerticalPos: loggerLevelUtils.setFunctionName(function (t) {
      this.verticalPos = this.verticalPos + t;
      this.data.stopy = mermaidConfigUtils_1.textUtilities.getMax(this.data.stopy, this.verticalPos);
    }, "bumpVerticalPos"),
    getVerticalPos: loggerLevelUtils.setFunctionName(function () {
      return this.verticalPos;
    }, "getVerticalPos"),
    getBounds: loggerLevelUtils.setFunctionName(function () {
      return {
        bounds: this.data,
        models: this.models
      };
    }, "getBounds")
  };
  var ti = loggerLevelUtils.setFunctionName(async function (t, e) {
    tr.bumpVerticalPos(ta.boxMargin);
    e.height = ta.boxMargin;
    e.starty = tr.getVerticalPos();
    let a = mermaidShapeDrawingUtils.getNoteRect();
    a.x = e.startx;
    a.y = e.starty;
    a.width = e.width || ta.width;
    a.class = "note";
    let r = t.append("g");
    let s = te.drawRect(r, a);
    let n = mermaidShapeDrawingUtils.getTextObj();
    n.x = e.startx;
    n.y = e.starty;
    n.width = a.width;
    n.dy = "1em";
    n.text = e.message;
    n.class = "noteText";
    n.fontFamily = ta.noteFontFamily;
    n.fontSize = ta.noteFontSize;
    n.fontWeight = ta.noteFontWeight;
    n.anchor = ta.noteAlign;
    n.textMargin = ta.noteMargin;
    n.valign = "center";
    let o = Math.round((mermaidConfigUtils_1.hasKatex(n.text) ? await v(r, n) : k(r, n)).map(t => (t._groups || t)[0][0].getBBox().height).reduce((t, e) => t + e));
    s.attr("height", o + ta.noteMargin * 2);
    e.height += o + ta.noteMargin * 2;
    tr.bumpVerticalPos(o + ta.noteMargin * 2);
    e.stopy = e.starty + o + ta.noteMargin * 2;
    e.stopx = e.startx + a.width;
    tr.insert(e.startx, e.starty, e.stopx, e.stopy);
    tr.models.addNote(e);
  }, "drawNote");
  var ts = loggerLevelUtils.setFunctionName(t => ({
    fontFamily: t.messageFontFamily,
    fontSize: t.messageFontSize,
    fontWeight: t.messageFontWeight
  }), "messageFont");
  var tn = loggerLevelUtils.setFunctionName(t => ({
    fontFamily: t.noteFontFamily,
    fontSize: t.noteFontSize,
    fontWeight: t.noteFontWeight
  }), "noteFont");
  var to = loggerLevelUtils.setFunctionName(t => ({
    fontFamily: t.actorFontFamily,
    fontSize: t.actorFontSize,
    fontWeight: t.actorFontWeight
  }), "actorFont");
  async function tc(t, e) {
    let a;
    tr.bumpVerticalPos(10);
    let {
      startx: r,
      stopx: i,
      message: s
    } = e;
    let n = mermaidConfigUtils_1.textUtilities.splitBreaks(s).length;
    let l = mermaidConfigUtils_1.hasKatex(s);
    let h = l ? await mermaidConfigUtils_1.calcMathMLDims(s, mermaidConfigUtils_1.getConfigAlias()) : mermaidDiagramUtils.mermaidUtils.calculateTextDimensions(s, ts(ta));
    if (!l) {
      let t = h.height / n;
      e.height += t;
      tr.bumpVerticalPos(t);
    }
    let d = h.height - 10;
    let p = h.width;
    if (r === i) {
      a = tr.getVerticalPos() + d;
      if (!ta.rightAngles) {
        d += ta.boxMargin;
        a = tr.getVerticalPos() + d;
      }
      d += 30;
      let t = mermaidConfigUtils_1.textUtilities.getMax(p / 2, ta.width / 2);
      tr.insert(r - t, tr.getVerticalPos() - 10 + d, i + t, tr.getVerticalPos() + 30 + d);
    } else {
      d += ta.boxMargin;
      a = tr.getVerticalPos() + d;
      tr.insert(r, a - 10, i, a);
    }
    tr.bumpVerticalPos(d);
    e.height += d;
    e.stopy = e.starty + e.height;
    tr.insert(e.fromBounds, e.starty, e.toBounds, e.stopy);
    return a;
  }
  loggerLevelUtils.setFunctionName(tc, "boundMessage");
  var tl = loggerLevelUtils.setFunctionName(async function (t, e, a, r) {
    let s;
    let {
      startx: n,
      stopx: l,
      starty: h,
      message: d,
      type: p,
      sequenceIndex: g,
      sequenceVisible: u
    } = e;
    let x = mermaidDiagramUtils.mermaidUtils.calculateTextDimensions(d, ts(ta));
    let y = mermaidShapeDrawingUtils.getTextObj();
    y.x = n;
    y.y = h + 10;
    y.width = l - n;
    y.class = "messageText";
    y.dy = "1em";
    y.text = d;
    y.fontFamily = ta.messageFontFamily;
    y.fontSize = ta.messageFontSize;
    y.fontWeight = ta.messageFontWeight;
    y.anchor = ta.messageAlign;
    y.valign = "center";
    y.textMargin = ta.wrapPadding;
    y.tspan = false;
    if (mermaidConfigUtils_1.hasKatex(y.text)) {
      await v(t, y, {
        startx: n,
        stopx: l,
        starty: a
      });
    } else {
      k(t, y);
    }
    let m = x.width;
    if (n === l) {
      s = ta.rightAngles ? t.append("path").attr("d", `M  ${n},${a} H ${n + mermaidConfigUtils_1.textUtilities.getMax(ta.width / 2, m / 2)} V ${a + 25} H ${n}`) : t.append("path").attr("d", "M " + n + "," + a + " C " + (n + 60) + "," + (a - 10) + " " + (n + 60) + "," + (a + 30) + " " + n + "," + (a + 20));
    } else {
      (s = t.append("line")).attr("x1", n);
      s.attr("y1", a);
      s.attr("x2", l);
      s.attr("y2", a);
    }
    if (p === r.db.LINETYPE.DOTTED || p === r.db.LINETYPE.DOTTED_CROSS || p === r.db.LINETYPE.DOTTED_POINT || p === r.db.LINETYPE.DOTTED_OPEN || p === r.db.LINETYPE.BIDIRECTIONAL_DOTTED) {
      s.style("stroke-dasharray", "3, 3");
      s.attr("class", "messageLine1");
    } else {
      s.attr("class", "messageLine0");
    }
    let b = "";
    if (ta.arrowMarkerAbsolute) {
      b = mermaidConfigUtils_1.getUrl(true);
    }
    s.attr("stroke-width", 2);
    s.attr("stroke", "none");
    s.style("fill", "none");
    if (p === r.db.LINETYPE.SOLID || p === r.db.LINETYPE.DOTTED) {
      s.attr("marker-end", "url(" + b + "#arrowhead)");
    }
    if (p === r.db.LINETYPE.BIDIRECTIONAL_SOLID || p === r.db.LINETYPE.BIDIRECTIONAL_DOTTED) {
      s.attr("marker-start", "url(" + b + "#arrowhead)");
      s.attr("marker-end", "url(" + b + "#arrowhead)");
    }
    if (p === r.db.LINETYPE.SOLID_POINT || p === r.db.LINETYPE.DOTTED_POINT) {
      s.attr("marker-end", "url(" + b + "#filled-head)");
    }
    if (p === r.db.LINETYPE.SOLID_CROSS || p === r.db.LINETYPE.DOTTED_CROSS) {
      s.attr("marker-end", "url(" + b + "#crosshead)");
    }
    if (u || ta.showSequenceNumbers) {
      if (p === r.db.LINETYPE.BIDIRECTIONAL_SOLID || p === r.db.LINETYPE.BIDIRECTIONAL_DOTTED) {
        if (n < l) {
          s.attr("x1", n + 12);
        } else {
          s.attr("x1", n + 6);
        }
      }
      t.append("line").attr("x1", n).attr("y1", a).attr("x2", n).attr("y2", a).attr("stroke-width", 0).attr("marker-start", "url(" + b + "#sequencenumber)");
      t.append("text").attr("x", n).attr("y", a + 4).attr("font-family", "sans-serif").attr("font-size", "12px").attr("text-anchor", "middle").attr("class", "sequenceNumber").text(g);
    }
  }, "drawMessage");
  var th = loggerLevelUtils.setFunctionName(function (t, e, a, r, i, s, n) {
    let o;
    let l = 0;
    let h = 0;
    let d = 0;
    for (let t of r) {
      let r = e.get(t);
      let s = r.box;
      if (o && o != s) {
        if (!n) {
          tr.models.addBox(o);
        }
        h += ta.boxMargin + o.margin;
      }
      if (s && s != o) {
        if (!n) {
          s.x = l + h;
          s.y = i;
        }
        h += s.margin;
      }
      r.width = r.width || ta.width;
      r.height = mermaidConfigUtils_1.textUtilities.getMax(r.height || ta.height, ta.height);
      r.margin = r.margin || ta.actorMargin;
      d = mermaidConfigUtils_1.textUtilities.getMax(d, r.height);
      if (a.get(r.name)) {
        h += r.width / 2;
      }
      r.x = l + h;
      r.starty = tr.getVerticalPos();
      tr.insert(r.x, i, r.x + r.width, r.height);
      l += r.width + h;
      if (r.box) {
        r.box.width = l + s.margin - r.box.x;
      }
      h = r.margin;
      o = r.box;
      tr.models.addActor(r);
    }
    if (o && !n) {
      tr.models.addBox(o);
    }
    tr.bumpVerticalPos(d);
  }, "addActorRenderingData");
  var td = loggerLevelUtils.setFunctionName(async function (t, e, a, r) {
    if (r) {
      let r = 0;
      tr.bumpVerticalPos(ta.boxMargin * 2);
      for (let i of a) {
        let a = e.get(i);
        a.stopy ||= tr.getVerticalPos();
        let s = await te.drawActor(t, a, ta, true);
        r = mermaidConfigUtils_1.textUtilities.getMax(r, s);
      }
      tr.bumpVerticalPos(r + ta.boxMargin);
    } else {
      for (let r of a) {
        let a = e.get(r);
        await te.drawActor(t, a, ta, false);
      }
    }
  }, "drawActors");
  var tp = loggerLevelUtils.setFunctionName(function (t, e, a, r) {
    let i = 0;
    let s = 0;
    for (let n of a) {
      let a = e.get(n);
      let o = tf(a);
      let c = te.drawPopup(t, a, o, ta, ta.forceMenus, r);
      if (c.height > i) {
        i = c.height;
      }
      if (c.width + a.x > s) {
        s = c.width + a.x;
      }
    }
    return {
      maxHeight: i,
      maxWidth: s
    };
  }, "drawActorsPopup");
  var tg = loggerLevelUtils.setFunctionName(function (t) {
    mermaidConfigUtils_1.assignWithDepth(ta, t);
    if (t.fontFamily) {
      ta.actorFontFamily = ta.noteFontFamily = ta.messageFontFamily = t.fontFamily;
    }
    if (t.fontSize) {
      ta.actorFontSize = ta.noteFontSize = ta.messageFontSize = t.fontSize;
    }
    if (t.fontWeight) {
      ta.actorFontWeight = ta.noteFontWeight = ta.messageFontWeight = t.fontWeight;
    }
  }, "setConf");
  var tu = loggerLevelUtils.setFunctionName(function (t) {
    return tr.activations.filter(function (e) {
      return e.actor === t;
    });
  }, "actorActivations");
  var tx = loggerLevelUtils.setFunctionName(function (t, e) {
    let a = e.get(t);
    let r = tu(t);
    return [r.reduce(function (t, e) {
      return mermaidConfigUtils_1.textUtilities.getMin(t, e.startx);
    }, a.x + a.width / 2 - 1), r.reduce(function (t, e) {
      return mermaidConfigUtils_1.textUtilities.getMax(t, e.stopx);
    }, a.x + a.width / 2 + 1)];
  }, "activationBounds");
  function ty(t, e, a, r, i) {
    tr.bumpVerticalPos(a);
    let s = r;
    if (e.id && e.message && t[e.id]) {
      let a = t[e.id].width;
      let i = ts(ta);
      e.message = mermaidDiagramUtils.mermaidUtils.wrapLabel(`[${e.message}]`, a - ta.wrapPadding * 2, i);
      e.width = a;
      e.wrap = true;
      let n = mermaidDiagramUtils.mermaidUtils.calculateTextDimensions(e.message, i);
      let h = mermaidConfigUtils_1.textUtilities.getMax(n.height, ta.labelBoxHeight);
      s = r + h;
      loggerLevelUtils.logger.debug(`${h} - ${e.message}`);
    }
    i(e);
    tr.bumpVerticalPos(s);
  }
  function tm(t, e, a, r, i, s, n) {
    function o(a, r) {
      if (a.x < i.get(t.from).x) {
        tr.insert(e.stopx - r, e.starty, e.startx, e.stopy + a.height / 2 + ta.noteMargin);
        e.stopx = e.stopx + r;
      } else {
        tr.insert(e.startx, e.starty, e.stopx + r, e.stopy + a.height / 2 + ta.noteMargin);
        e.stopx = e.stopx - r;
      }
    }
    function c(a, r) {
      if (a.x < i.get(t.to).x) {
        tr.insert(e.startx - r, e.starty, e.stopx, e.stopy + a.height / 2 + ta.noteMargin);
        e.startx = e.startx + r;
      } else {
        tr.insert(e.stopx, e.starty, e.startx + r, e.stopy + a.height / 2 + ta.noteMargin);
        e.startx = e.startx - r;
      }
    }
    loggerLevelUtils.setFunctionName(o, "receiverAdjustment");
    loggerLevelUtils.setFunctionName(c, "senderAdjustment");
    let h = ["actor", "control", "entity", "database"];
    if (s.get(t.to) == r) {
      let e = i.get(t.to);
      let r = h.includes(e.type) ? 21 : e.width / 2 + 3;
      o(e, r);
      e.starty = a - e.height / 2;
      tr.bumpVerticalPos(e.height / 2);
    } else if (n.get(t.from) == r) {
      let e = i.get(t.from);
      if (ta.mirrorActors) {
        let t = h.includes(e.type) ? 18 : e.width / 2;
        c(e, t);
      }
      e.stopy = a - e.height / 2;
      tr.bumpVerticalPos(e.height / 2);
    } else if (n.get(t.to) == r) {
      let e = i.get(t.to);
      if (ta.mirrorActors) {
        let t = h.includes(e.type) ? 21 : e.width / 2 + 3;
        o(e, t);
      }
      e.stopy = a - e.height / 2;
      tr.bumpVerticalPos(e.height / 2);
    }
  }
  loggerLevelUtils.setFunctionName(ty, "adjustLoopHeightForWrap");
  loggerLevelUtils.setFunctionName(tm, "adjustCreatedDestroyedData");
  var tb = loggerLevelUtils.setFunctionName(async function (t, e, a, r) {
    let i;
    let {
      securityLevel: s,
      sequence: n
    } = mermaidConfigUtils_1.getConfigAlias();
    ta = n;
    if (s === "sandbox") {
      i = axisAndZoomUtilities.select("#i" + e);
    }
    let o = s === "sandbox" ? axisAndZoomUtilities.select(i.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body");
    let d = s === "sandbox" ? i.nodes()[0].contentDocument : document;
    tr.init();
    loggerLevelUtils.logger.debug(r.db);
    let p = s === "sandbox" ? o.select(`[id="${e}"]`) : axisAndZoomUtilities.select(`[id="${e}"]`);
    let g = r.db.getActors();
    let u = r.db.getCreatedActors();
    let x = r.db.getDestroyedActors();
    let y = r.db.getBoxes();
    let m = r.db.getActorKeys();
    let b = r.db.getMessages();
    let T = r.db.getDiagramTitle();
    let f = r.db.hasAtLeastOneBox();
    let E = r.db.hasAtLeastOneBoxWithTitle();
    let w = await tT(g, b, r);
    ta.height = await tE(g, w, y);
    te.insertComputerIcon(p);
    te.insertDatabaseIcon(p);
    te.insertClockIcon(p);
    if (f) {
      tr.bumpVerticalPos(ta.boxMargin);
      if (E) {
        tr.bumpVerticalPos(y[0].textMaxHeight);
      }
    }
    if (ta.hideUnusedParticipants === true) {
      let t = new Set();
      b.forEach(e => {
        t.add(e.from);
        t.add(e.to);
      });
      m = m.filter(e => t.has(e));
    }
    th(p, g, u, m, 0, b, false);
    let I = await tL(b, g, w, r);
    function L(t, e) {
      let a = tr.endActivation(t);
      if (a.starty + 18 > e) {
        a.starty = e - 6;
        e += 12;
      }
      te.drawActivation(p, a, e, ta, tu(t.from).length);
      tr.insert(a.startx, e - 10, a.stopx, e);
    }
    te.insertArrowHead(p);
    te.insertArrowCrossHead(p);
    te.insertArrowFilledHead(p);
    te.insertSequenceNumber(p);
    loggerLevelUtils.setFunctionName(L, "activeEnd");
    let v = 1;
    let k = 1;
    let _ = [];
    let P = [];
    let N = 0;
    for (let t of b) {
      let e;
      let a;
      let i;
      switch (t.type) {
        case r.db.LINETYPE.NOTE:
          tr.resetVerticalPos();
          a = t.noteModel;
          await ti(p, a);
          break;
        case r.db.LINETYPE.ACTIVE_START:
          tr.newActivation(t, p, g);
          break;
        case r.db.LINETYPE.ACTIVE_END:
          L(t, tr.getVerticalPos());
          break;
        case r.db.LINETYPE.LOOP_START:
          ty(I, t, ta.boxMargin, ta.boxMargin + ta.boxTextMargin, t => tr.newLoop(t));
          break;
        case r.db.LINETYPE.LOOP_END:
          e = tr.endLoop();
          await te.drawLoop(p, e, "loop", ta);
          tr.bumpVerticalPos(e.stopy - tr.getVerticalPos());
          tr.models.addLoop(e);
          break;
        case r.db.LINETYPE.RECT_START:
          ty(I, t, ta.boxMargin, ta.boxMargin, t => tr.newLoop(undefined, t.message));
          break;
        case r.db.LINETYPE.RECT_END:
          e = tr.endLoop();
          P.push(e);
          tr.models.addLoop(e);
          tr.bumpVerticalPos(e.stopy - tr.getVerticalPos());
          break;
        case r.db.LINETYPE.OPT_START:
          ty(I, t, ta.boxMargin, ta.boxMargin + ta.boxTextMargin, t => tr.newLoop(t));
          break;
        case r.db.LINETYPE.OPT_END:
          e = tr.endLoop();
          await te.drawLoop(p, e, "opt", ta);
          tr.bumpVerticalPos(e.stopy - tr.getVerticalPos());
          tr.models.addLoop(e);
          break;
        case r.db.LINETYPE.ALT_START:
          ty(I, t, ta.boxMargin, ta.boxMargin + ta.boxTextMargin, t => tr.newLoop(t));
          break;
        case r.db.LINETYPE.ALT_ELSE:
          ty(I, t, ta.boxMargin + ta.boxTextMargin, ta.boxMargin, t => tr.addSectionToLoop(t));
          break;
        case r.db.LINETYPE.ALT_END:
          e = tr.endLoop();
          await te.drawLoop(p, e, "alt", ta);
          tr.bumpVerticalPos(e.stopy - tr.getVerticalPos());
          tr.models.addLoop(e);
          break;
        case r.db.LINETYPE.PAR_START:
        case r.db.LINETYPE.PAR_OVER_START:
          ty(I, t, ta.boxMargin, ta.boxMargin + ta.boxTextMargin, t => tr.newLoop(t));
          tr.saveVerticalPos();
          break;
        case r.db.LINETYPE.PAR_AND:
          ty(I, t, ta.boxMargin + ta.boxTextMargin, ta.boxMargin, t => tr.addSectionToLoop(t));
          break;
        case r.db.LINETYPE.PAR_END:
          e = tr.endLoop();
          await te.drawLoop(p, e, "par", ta);
          tr.bumpVerticalPos(e.stopy - tr.getVerticalPos());
          tr.models.addLoop(e);
          break;
        case r.db.LINETYPE.AUTONUMBER:
          v = t.message.start || v;
          k = t.message.step || k;
          if (t.message.visible) {
            r.db.enableSequenceNumbers();
          } else {
            r.db.disableSequenceNumbers();
          }
          break;
        case r.db.LINETYPE.CRITICAL_START:
          ty(I, t, ta.boxMargin, ta.boxMargin + ta.boxTextMargin, t => tr.newLoop(t));
          break;
        case r.db.LINETYPE.CRITICAL_OPTION:
          ty(I, t, ta.boxMargin + ta.boxTextMargin, ta.boxMargin, t => tr.addSectionToLoop(t));
          break;
        case r.db.LINETYPE.CRITICAL_END:
          e = tr.endLoop();
          await te.drawLoop(p, e, "critical", ta);
          tr.bumpVerticalPos(e.stopy - tr.getVerticalPos());
          tr.models.addLoop(e);
          break;
        case r.db.LINETYPE.BREAK_START:
          ty(I, t, ta.boxMargin, ta.boxMargin + ta.boxTextMargin, t => tr.newLoop(t));
          break;
        case r.db.LINETYPE.BREAK_END:
          e = tr.endLoop();
          await te.drawLoop(p, e, "break", ta);
          tr.bumpVerticalPos(e.stopy - tr.getVerticalPos());
          tr.models.addLoop(e);
          break;
        default:
          try {
            (i = t.msgModel).starty = tr.getVerticalPos();
            i.sequenceIndex = v;
            i.sequenceVisible = r.db.showSequenceNumbers();
            let e = await tc(p, i);
            tm(t, i, e, N, g, u, x);
            _.push({
              messageModel: i,
              lineStartY: e
            });
            tr.models.addMessage(i);
          } catch (t) {
            loggerLevelUtils.logger.error("error while drawing message", t);
          }
      }
      if ([r.db.LINETYPE.SOLID_OPEN, r.db.LINETYPE.DOTTED_OPEN, r.db.LINETYPE.SOLID, r.db.LINETYPE.DOTTED, r.db.LINETYPE.SOLID_CROSS, r.db.LINETYPE.DOTTED_CROSS, r.db.LINETYPE.SOLID_POINT, r.db.LINETYPE.DOTTED_POINT, r.db.LINETYPE.BIDIRECTIONAL_SOLID, r.db.LINETYPE.BIDIRECTIONAL_DOTTED].includes(t.type)) {
        v += k;
      }
      N++;
    }
    loggerLevelUtils.logger.debug("createdActors", u);
    loggerLevelUtils.logger.debug("destroyedActors", x);
    await td(p, g, m, false);
    for (let t of _) {
      await tl(p, t.messageModel, t.lineStartY, r);
    }
    if (ta.mirrorActors) {
      await td(p, g, m, true);
    }
    P.forEach(t => te.drawBackgroundRect(p, t));
    A(p, g, m, ta);
    for (let t of tr.models.boxes) {
      t.height = tr.getVerticalPos() - t.y;
      tr.insert(t.x, t.y, t.x + t.width, t.height);
      let e = ta.boxMargin * 2;
      t.startx = t.x - e;
      t.starty = t.y - e * 0.25;
      t.stopx = t.startx + t.width + e * 2;
      t.stopy = t.starty + t.height + e * 0.75;
      t.stroke = "rgb(0,0,0, 0.5)";
      te.drawBox(p, t, ta);
    }
    if (f) {
      tr.bumpVerticalPos(ta.boxMargin);
    }
    let M = tp(p, g, m, d);
    let {
      bounds: S
    } = tr.getBounds();
    if (S.startx === undefined) {
      S.startx = 0;
    }
    if (S.starty === undefined) {
      S.starty = 0;
    }
    if (S.stopx === undefined) {
      S.stopx = 0;
    }
    if (S.stopy === undefined) {
      S.stopy = 0;
    }
    let O = S.stopy - S.starty;
    if (O < M.maxHeight) {
      O = M.maxHeight;
    }
    let D = O + ta.diagramMarginY * 2;
    if (ta.mirrorActors) {
      D = D - ta.boxMargin + ta.bottomMarginAdj;
    }
    let W = S.stopx - S.startx;
    if (W < M.maxWidth) {
      W = M.maxWidth;
    }
    let $ = W + ta.diagramMarginX * 2;
    if (T) {
      p.append("text").text(T).attr("x", (S.stopx - S.startx) / 2 - ta.diagramMarginX * 2).attr("y", -25);
    }
    mermaidConfigUtils_1.configureSvgSize(p, D, $, ta.useMaxWidth);
    let Y = !!T * 40;
    p.attr("viewBox", S.startx - ta.diagramMarginX + " -" + (ta.diagramMarginY + Y) + " " + $ + " " + (D + Y));
    loggerLevelUtils.logger.debug("models:", tr.models);
  }, "draw");
  async function tT(t, e, a) {
    let r = {};
    for (let i of e) {
      if (t.get(i.to) && t.get(i.from)) {
        let e = t.get(i.to);
        if (i.placement === a.db.PLACEMENT.LEFTOF && !e.prevActor || i.placement === a.db.PLACEMENT.RIGHTOF && !e.nextActor) {
          continue;
        }
        let s = i.placement !== undefined;
        let n = !s;
        let l = s ? tn(ta) : ts(ta);
        let h = i.wrap ? mermaidDiagramUtils.mermaidUtils.wrapLabel(i.message, ta.width - ta.wrapPadding * 2, l) : i.message;
        let d = (mermaidConfigUtils_1.hasKatex(h) ? await mermaidConfigUtils_1.calcMathMLDims(i.message, mermaidConfigUtils_1.getConfigAlias()) : mermaidDiagramUtils.mermaidUtils.calculateTextDimensions(h, l)).width + ta.wrapPadding * 2;
        if (n && i.from === e.nextActor) {
          r[i.to] = mermaidConfigUtils_1.textUtilities.getMax(r[i.to] || 0, d);
        } else if (n && i.from === e.prevActor) {
          r[i.from] = mermaidConfigUtils_1.textUtilities.getMax(r[i.from] || 0, d);
        } else if (n && i.from === i.to) {
          r[i.from] = mermaidConfigUtils_1.textUtilities.getMax(r[i.from] || 0, d / 2);
          r[i.to] = mermaidConfigUtils_1.textUtilities.getMax(r[i.to] || 0, d / 2);
        } else if (i.placement === a.db.PLACEMENT.RIGHTOF) {
          r[i.from] = mermaidConfigUtils_1.textUtilities.getMax(r[i.from] || 0, d);
        } else if (i.placement === a.db.PLACEMENT.LEFTOF) {
          r[e.prevActor] = mermaidConfigUtils_1.textUtilities.getMax(r[e.prevActor] || 0, d);
        } else if (i.placement === a.db.PLACEMENT.OVER) {
          if (e.prevActor) {
            r[e.prevActor] = mermaidConfigUtils_1.textUtilities.getMax(r[e.prevActor] || 0, d / 2);
          }
          if (e.nextActor) {
            r[i.from] = mermaidConfigUtils_1.textUtilities.getMax(r[i.from] || 0, d / 2);
          }
        }
      }
    }
    loggerLevelUtils.logger.debug("maxMessageWidthPerActor:", r);
    return r;
  }
  loggerLevelUtils.setFunctionName(tT, "getMaxMessageWidthPerActor");
  var tf = loggerLevelUtils.setFunctionName(function (t) {
    let e = 0;
    let a = to(ta);
    for (let r in t.links) {
      let t = mermaidDiagramUtils.mermaidUtils.calculateTextDimensions(r, a).width + ta.wrapPadding * 2 + ta.boxMargin * 2;
      if (e < t) {
        e = t;
      }
    }
    return e;
  }, "getRequiredPopupWidth");
  async function tE(t, e, a) {
    let r = 0;
    for (let e of t.keys()) {
      let a = t.get(e);
      if (a.wrap) {
        a.description = mermaidDiagramUtils.mermaidUtils.wrapLabel(a.description, ta.width - ta.wrapPadding * 2, to(ta));
      }
      let i = mermaidConfigUtils_1.hasKatex(a.description) ? await mermaidConfigUtils_1.calcMathMLDims(a.description, mermaidConfigUtils_1.getConfigAlias()) : mermaidDiagramUtils.mermaidUtils.calculateTextDimensions(a.description, to(ta));
      a.width = a.wrap ? ta.width : mermaidConfigUtils_1.textUtilities.getMax(ta.width, i.width + ta.wrapPadding * 2);
      a.height = a.wrap ? mermaidConfigUtils_1.textUtilities.getMax(i.height, ta.height) : ta.height;
      r = mermaidConfigUtils_1.textUtilities.getMax(r, a.height);
    }
    for (let a in e) {
      let r = t.get(a);
      if (!r) {
        continue;
      }
      let i = t.get(r.nextActor);
      if (!i) {
        let t = e[a] + ta.actorMargin - r.width / 2;
        r.margin = mermaidConfigUtils_1.textUtilities.getMax(t, ta.actorMargin);
        continue;
      }
      let s = e[a] + ta.actorMargin - r.width / 2 - i.width / 2;
      r.margin = mermaidConfigUtils_1.textUtilities.getMax(s, ta.actorMargin);
    }
    let i = 0;
    a.forEach(e => {
      let a = ts(ta);
      let r = e.actorKeys.reduce((e, a) => e += t.get(a).width + (t.get(a).margin || 0), 0);
      r += ta.boxMargin * 8;
      r -= ta.boxTextMargin * 2;
      if (e.wrap) {
        e.name = mermaidDiagramUtils.mermaidUtils.wrapLabel(e.name, r - ta.wrapPadding * 2, a);
      }
      let s = mermaidDiagramUtils.mermaidUtils.calculateTextDimensions(e.name, a);
      i = mermaidConfigUtils_1.textUtilities.getMax(s.height, i);
      let n = mermaidConfigUtils_1.textUtilities.getMax(r, s.width + ta.wrapPadding * 2);
      e.margin = ta.boxTextMargin;
      if (r < n) {
        let t = (n - r) / 2;
        e.margin += t;
      }
    });
    a.forEach(t => t.textMaxHeight = i);
    return mermaidConfigUtils_1.textUtilities.getMax(r, ta.height);
  }
  loggerLevelUtils.setFunctionName(tE, "calculateActorMargins");
  var tw = loggerLevelUtils.setFunctionName(async function (t, e, a) {
    let r = e.get(t.from);
    let i = e.get(t.to);
    let s = r.x;
    let n = i.x;
    let h = t.wrap && t.message;
    let d = mermaidConfigUtils_1.hasKatex(t.message) ? await mermaidConfigUtils_1.calcMathMLDims(t.message, mermaidConfigUtils_1.getConfigAlias()) : mermaidDiagramUtils.mermaidUtils.calculateTextDimensions(h ? mermaidDiagramUtils.mermaidUtils.wrapLabel(t.message, ta.width, tn(ta)) : t.message, tn(ta));
    let p = {
      width: h ? ta.width : mermaidConfigUtils_1.textUtilities.getMax(ta.width, d.width + ta.noteMargin * 2),
      height: 0,
      startx: r.x,
      stopx: 0,
      starty: 0,
      stopy: 0,
      message: t.message
    };
    if (t.placement === a.db.PLACEMENT.RIGHTOF) {
      p.width = h ? mermaidConfigUtils_1.textUtilities.getMax(ta.width, d.width) : mermaidConfigUtils_1.textUtilities.getMax(r.width / 2 + i.width / 2, d.width + ta.noteMargin * 2);
      p.startx = s + (r.width + ta.actorMargin) / 2;
    } else if (t.placement === a.db.PLACEMENT.LEFTOF) {
      p.width = h ? mermaidConfigUtils_1.textUtilities.getMax(ta.width, d.width + ta.noteMargin * 2) : mermaidConfigUtils_1.textUtilities.getMax(r.width / 2 + i.width / 2, d.width + ta.noteMargin * 2);
      p.startx = s - p.width + (r.width - ta.actorMargin) / 2;
    } else if (t.to === t.from) {
      d = mermaidDiagramUtils.mermaidUtils.calculateTextDimensions(h ? mermaidDiagramUtils.mermaidUtils.wrapLabel(t.message, mermaidConfigUtils_1.textUtilities.getMax(ta.width, r.width), tn(ta)) : t.message, tn(ta));
      p.width = h ? mermaidConfigUtils_1.textUtilities.getMax(ta.width, r.width) : mermaidConfigUtils_1.textUtilities.getMax(r.width, ta.width, d.width + ta.noteMargin * 2);
      p.startx = s + (r.width - p.width) / 2;
    } else {
      p.width = Math.abs(s + r.width / 2 - (n + i.width / 2)) + ta.actorMargin;
      p.startx = s < n ? s + r.width / 2 - ta.actorMargin / 2 : n + i.width / 2 - ta.actorMargin / 2;
    }
    if (h) {
      p.message = mermaidDiagramUtils.mermaidUtils.wrapLabel(t.message, p.width - ta.wrapPadding * 2, tn(ta));
    }
    loggerLevelUtils.logger.debug(`NM:[${p.startx},${p.stopx},${p.starty},${p.stopy}:${p.width},${p.height}=${t.message}]`);
    return p;
  }, "buildNoteModel");
  var tI = loggerLevelUtils.setFunctionName(function (t, e, a) {
    if (![a.db.LINETYPE.SOLID_OPEN, a.db.LINETYPE.DOTTED_OPEN, a.db.LINETYPE.SOLID, a.db.LINETYPE.DOTTED, a.db.LINETYPE.SOLID_CROSS, a.db.LINETYPE.DOTTED_CROSS, a.db.LINETYPE.SOLID_POINT, a.db.LINETYPE.DOTTED_POINT, a.db.LINETYPE.BIDIRECTIONAL_SOLID, a.db.LINETYPE.BIDIRECTIONAL_DOTTED].includes(t.type)) {
      return {};
    }
    let [r, i] = tx(t.from, e);
    let [s, n] = tx(t.to, e);
    let h = r <= s;
    let d = h ? i : r;
    let p = h ? s : n;
    let g = Math.abs(s - n) > 2;
    let u = loggerLevelUtils.setFunctionName(t => h ? -t : t, "adjustValue");
    if (t.from === t.to) {
      p = d;
    } else {
      if (t.activate && !g) {
        p += u(ta.activationWidth / 2 - 1);
      }
      if (![a.db.LINETYPE.SOLID_OPEN, a.db.LINETYPE.DOTTED_OPEN].includes(t.type)) {
        p += u(3);
      }
      if ([a.db.LINETYPE.BIDIRECTIONAL_SOLID, a.db.LINETYPE.BIDIRECTIONAL_DOTTED].includes(t.type)) {
        d -= u(3);
      }
    }
    let x = [r, i, s, n];
    let y = Math.abs(d - p);
    if (t.wrap && t.message) {
      t.message = mermaidDiagramUtils.mermaidUtils.wrapLabel(t.message, mermaidConfigUtils_1.textUtilities.getMax(y + ta.wrapPadding * 2, ta.width), ts(ta));
    }
    let m = mermaidDiagramUtils.mermaidUtils.calculateTextDimensions(t.message, ts(ta));
    return {
      width: mermaidConfigUtils_1.textUtilities.getMax(t.wrap ? 0 : m.width + ta.wrapPadding * 2, y + ta.wrapPadding * 2, ta.width),
      height: 0,
      startx: d,
      stopx: p,
      starty: 0,
      stopy: 0,
      message: t.message,
      type: t.type,
      wrap: t.wrap,
      fromBounds: Math.min.apply(null, x),
      toBounds: Math.max.apply(null, x)
    };
  }, "buildMessageModel");
  var tL = loggerLevelUtils.setFunctionName(async function (t, e, a, r) {
    let i;
    let s;
    let n;
    let o = {};
    let h = [];
    for (let a of t) {
      switch (a.type) {
        case r.db.LINETYPE.LOOP_START:
        case r.db.LINETYPE.ALT_START:
        case r.db.LINETYPE.OPT_START:
        case r.db.LINETYPE.PAR_START:
        case r.db.LINETYPE.PAR_OVER_START:
        case r.db.LINETYPE.CRITICAL_START:
        case r.db.LINETYPE.BREAK_START:
          h.push({
            id: a.id,
            msg: a.message,
            from: Number.MAX_SAFE_INTEGER,
            to: Number.MIN_SAFE_INTEGER,
            width: 0
          });
          break;
        case r.db.LINETYPE.ALT_ELSE:
        case r.db.LINETYPE.PAR_AND:
        case r.db.LINETYPE.CRITICAL_OPTION:
          if (a.message) {
            o[(i = h.pop()).id] = i;
            o[a.id] = i;
            h.push(i);
          }
          break;
        case r.db.LINETYPE.LOOP_END:
        case r.db.LINETYPE.ALT_END:
        case r.db.LINETYPE.OPT_END:
        case r.db.LINETYPE.PAR_END:
        case r.db.LINETYPE.CRITICAL_END:
        case r.db.LINETYPE.BREAK_END:
          o[(i = h.pop()).id] = i;
          break;
        case r.db.LINETYPE.ACTIVE_START:
          {
            let t = e.get(a.from ? a.from : a.to.actor);
            let r = tu(a.from ? a.from : a.to.actor).length;
            let i = t.x + t.width / 2 + (r - 1) * ta.activationWidth / 2;
            let s = {
              startx: i,
              stopx: i + ta.activationWidth,
              actor: a.from,
              enabled: true
            };
            tr.activations.push(s);
          }
          break;
        case r.db.LINETYPE.ACTIVE_END:
          {
            let t = tr.activations.map(t => t.actor).lastIndexOf(a.from);
            tr.activations.splice(t, 1).splice(0, 1);
          }
      }
      if (a.placement !== undefined) {
        s = await tw(a, e, r);
        a.noteModel = s;
        h.forEach(t => {
          (i = t).from = mermaidConfigUtils_1.textUtilities.getMin(i.from, s.startx);
          i.to = mermaidConfigUtils_1.textUtilities.getMax(i.to, s.startx + s.width);
          i.width = mermaidConfigUtils_1.textUtilities.getMax(i.width, Math.abs(i.from - i.to)) - ta.labelBoxWidth;
        });
      } else {
        n = tI(a, e, r);
        a.msgModel = n;
        if (n.startx && n.stopx && h.length > 0) {
          h.forEach(t => {
            i = t;
            if (n.startx === n.stopx) {
              let t = e.get(a.from);
              let r = e.get(a.to);
              i.from = mermaidConfigUtils_1.textUtilities.getMin(t.x - n.width / 2, t.x - t.width / 2, i.from);
              i.to = mermaidConfigUtils_1.textUtilities.getMax(r.x + n.width / 2, r.x + t.width / 2, i.to);
              i.width = mermaidConfigUtils_1.textUtilities.getMax(i.width, Math.abs(i.to - i.from)) - ta.labelBoxWidth;
            } else {
              i.from = mermaidConfigUtils_1.textUtilities.getMin(n.startx, i.from);
              i.to = mermaidConfigUtils_1.textUtilities.getMax(n.stopx, i.to);
              i.width = mermaidConfigUtils_1.textUtilities.getMax(i.width, n.width) - ta.labelBoxWidth;
            }
          });
        }
      }
    }
    tr.activations = [];
    loggerLevelUtils.logger.debug("Loop type widths:", o);
    return o;
  }, "calculateLoopBounds");
  var tv = {
    parser: p,
    get db() {
      return new y();
    },
    renderer: {
      bounds: tr,
      drawActors: td,
      drawActorsPopup: tp,
      setConf: tg,
      draw: tb
    },
    styles: m,
    init: loggerLevelUtils.setFunctionName(t => {
      t.sequence ||= {};
      if (t.wrap) {
        t.sequence.wrap = t.wrap;
        mermaidConfigUtils_1.setConfig({
          sequence: {
            wrap: t.wrap
          }
        });
      }
    }, "init")
  };
  require.d(exports, {
    diagram: function () {
      return tv;
    }
  });
}