// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'o' to 'mermaidDiagramUtils'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'l' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'c' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'd' to 'urlSanitizer'
// - Resolved require(568747) to 'url-sanitizer'
// - Renamed variable 'u' to 'dayjsDateLibrary'
// - Resolved require(349712) to 'dayjs-date-library'
// - Renamed variable 'f' to 'dayjsIsoWeekPlugin'
// - Resolved require(902980) to 'dayjs-iso-week-plugin'
// - Renamed variable 'k' to 'customParseFormatPlugin'
// - Resolved require(825043) to 'custom-parse-format-plugin'
// - Renamed variable 'p' to 'dayjsFormatPlugin'
// - Resolved require(260904) to 'dayjs-format-plugin'
// - Renamed variable 'b' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'ZH' to 'clearCommonDb' (module 401926)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'GN' to 'setAccTitle' (module 401926)
// - Updated imported property 'eu' to 'getAccTitle' (module 401926)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 401926)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 401926)
// - Updated imported property 'U$' to 'setAccDescription' (module 401926)
// - Updated imported property 'Mx' to 'getAccDescription' (module 401926)
// - Updated imported property 'SY' to 'textUtilities' (module 401926)
// - Updated imported property 'v2' to 'configureSvgSize' (module 401926)
// - Updated imported property 'w8' to 'mermaidUtils' (module 583673)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'Xf' to 'timeScale' (module 381804)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20443.e36932c3.js
         * chunkId: 20443
         * moduleId: 953076
         */
module.exports = function (module, exports, require) {
  var r;
  var n;
  var s;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var urlSanitizer = require("url-sanitizer") /*id: 568747*/;
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var h = dayjsDateLibrary;
  var dayjsIsoWeekPlugin = require("dayjs-iso-week-plugin") /*id: 902980*/;
  var m = dayjsIsoWeekPlugin;
  var customParseFormatPlugin = require("custom-parse-format-plugin") /*id: 825043*/;
  var y = customParseFormatPlugin;
  var dayjsFormatPlugin = require("dayjs-format-plugin") /*id: 260904*/;
  var g = dayjsFormatPlugin;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var T = function () {
    var t = loggerLevelUtils.setFunctionName(function (t, e, i, r) {
      i = i || {};
      r = t.length;
      for (; r--; i[t[r]] = e);
      return i;
    }, "o");
    var e = [6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 35, 36, 38, 40];
    var i = [1, 26];
    var r = [1, 27];
    var n = [1, 28];
    var s = [1, 29];
    var o = [1, 30];
    var l = [1, 31];
    var d = [1, 32];
    var u = [1, 33];
    var h = [1, 34];
    var f = [1, 9];
    var m = [1, 10];
    var k = [1, 11];
    var y = [1, 12];
    var p = [1, 13];
    var g = [1, 14];
    var b = [1, 15];
    var T = [1, 16];
    var $ = [1, 19];
    var x = [1, 20];
    var v = [1, 21];
    var w = [1, 22];
    var W = [1, 23];
    var _ = [1, 25];
    var S = [1, 35];
    var D = {
      trace: loggerLevelUtils.setFunctionName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        gantt: 4,
        document: 5,
        EOF: 6,
        line: 7,
        SPACE: 8,
        statement: 9,
        NL: 10,
        weekday: 11,
        weekday_monday: 12,
        weekday_tuesday: 13,
        weekday_wednesday: 14,
        weekday_thursday: 15,
        weekday_friday: 16,
        weekday_saturday: 17,
        weekday_sunday: 18,
        weekend: 19,
        weekend_friday: 20,
        weekend_saturday: 21,
        dateFormat: 22,
        inclusiveEndDates: 23,
        topAxis: 24,
        axisFormat: 25,
        tickInterval: 26,
        excludes: 27,
        includes: 28,
        todayMarker: 29,
        title: 30,
        acc_title: 31,
        acc_title_value: 32,
        acc_descr: 33,
        acc_descr_value: 34,
        acc_descr_multiline_value: 35,
        section: 36,
        clickStatement: 37,
        taskTxt: 38,
        taskData: 39,
        click: 40,
        callbackname: 41,
        callbackargs: 42,
        href: xssContentSanitizer.sanitizeUrl(43, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFbDF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*95%m5Wa1N*SkZZ$mRH-m1OdFJu%k1WW*h-$kRC-$FsZHJO$WxN-lR*eFl6Skdl$m96$m5vPQ"
        }),
        clickStatementDebug: 44,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        4: "gantt",
        6: "EOF",
        8: "SPACE",
        10: "NL",
        12: "weekday_monday",
        13: "weekday_tuesday",
        14: "weekday_wednesday",
        15: "weekday_thursday",
        16: "weekday_friday",
        17: "weekday_saturday",
        18: "weekday_sunday",
        20: "weekend_friday",
        21: "weekend_saturday",
        22: "dateFormat",
        23: "inclusiveEndDates",
        24: "topAxis",
        25: "axisFormat",
        26: "tickInterval",
        27: "excludes",
        28: "includes",
        29: "todayMarker",
        30: "title",
        31: "acc_title",
        32: "acc_title_value",
        33: "acc_descr",
        34: "acc_descr_value",
        35: "acc_descr_multiline_value",
        36: "section",
        38: "taskTxt",
        39: "taskData",
        40: "click",
        41: "callbackname",
        42: "callbackargs",
        43: "href"
      },
      productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [19, 1], [19, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 2], [37, 2], [37, 3], [37, 3], [37, 4], [37, 3], [37, 4], [37, 2], [44, 2], [44, 3], [44, 3], [44, 4], [44, 3], [44, 4], [44, 2]],
      performAction: loggerLevelUtils.setFunctionName(function (t, e, i, r, n, s, a) {
        var o = s.length - 1;
        switch (n) {
          case 1:
            return s[o - 1];
          case 2:
          case 6:
          case 7:
            this.$ = [];
            break;
          case 3:
            s[o - 1].push(s[o]);
            this.$ = s[o - 1];
            break;
          case 4:
          case 5:
            this.$ = s[o];
            break;
          case 8:
            r.setWeekday("monday");
            break;
          case 9:
            r.setWeekday("tuesday");
            break;
          case 10:
            r.setWeekday("wednesday");
            break;
          case 11:
            r.setWeekday("thursday");
            break;
          case 12:
            r.setWeekday("friday");
            break;
          case 13:
            r.setWeekday("saturday");
            break;
          case 14:
            r.setWeekday("sunday");
            break;
          case 15:
            r.setWeekend("friday");
            break;
          case 16:
            r.setWeekend("saturday");
            break;
          case 17:
            r.setDateFormat(s[o].substr(11));
            this.$ = s[o].substr(11);
            break;
          case 18:
            r.enableInclusiveEndDates();
            this.$ = s[o].substr(18);
            break;
          case 19:
            r.TopAxis();
            this.$ = s[o].substr(8);
            break;
          case 20:
            r.setAxisFormat(s[o].substr(11));
            this.$ = s[o].substr(11);
            break;
          case 21:
            r.setTickInterval(s[o].substr(13));
            this.$ = s[o].substr(13);
            break;
          case 22:
            r.setExcludes(s[o].substr(9));
            this.$ = s[o].substr(9);
            break;
          case 23:
            r.setIncludes(s[o].substr(9));
            this.$ = s[o].substr(9);
            break;
          case 24:
            r.setTodayMarker(s[o].substr(12));
            this.$ = s[o].substr(12);
            break;
          case 27:
            r.setDiagramTitle(s[o].substr(6));
            this.$ = s[o].substr(6);
            break;
          case 28:
            this.$ = s[o].trim();
            r.setAccTitle(this.$);
            break;
          case 29:
          case 30:
            this.$ = s[o].trim();
            r.setAccDescription(this.$);
            break;
          case 31:
            r.addSection(s[o].substr(8));
            this.$ = s[o].substr(8);
            break;
          case 33:
            r.addTask(s[o - 1], s[o]);
            this.$ = "task";
            break;
          case 34:
            this.$ = s[o - 1];
            r.setClickEvent(s[o - 1], s[o], null);
            break;
          case 35:
            this.$ = s[o - 2];
            r.setClickEvent(s[o - 2], s[o - 1], s[o]);
            break;
          case 36:
            this.$ = s[o - 2];
            r.setClickEvent(s[o - 2], s[o - 1], null);
            r.setLink(s[o - 2], s[o]);
            break;
          case 37:
            this.$ = s[o - 3];
            r.setClickEvent(s[o - 3], s[o - 2], s[o - 1]);
            r.setLink(s[o - 3], s[o]);
            break;
          case 38:
            this.$ = s[o - 2];
            r.setClickEvent(s[o - 2], s[o], null);
            r.setLink(s[o - 2], s[o - 1]);
            break;
          case 39:
            this.$ = s[o - 3];
            r.setClickEvent(s[o - 3], s[o - 1], s[o]);
            r.setLink(s[o - 3], s[o - 2]);
            break;
          case 40:
            this.$ = s[o - 1];
            r.setLink(s[o - 1], s[o]);
            break;
          case 41:
          case 47:
            this.$ = s[o - 1] + " " + s[o];
            break;
          case 42:
          case 43:
          case 45:
            this.$ = s[o - 2] + " " + s[o - 1] + " " + s[o];
            break;
          case 44:
          case 46:
            this.$ = s[o - 3] + " " + s[o - 2] + " " + s[o - 1] + " " + s[o];
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
        11: 17,
        12: i,
        13: r,
        14: n,
        15: s,
        16: o,
        17: l,
        18: d,
        19: 18,
        20: u,
        21: h,
        22: f,
        23: m,
        24: k,
        25: y,
        26: p,
        27: g,
        28: b,
        29: T,
        30: $,
        31: x,
        33: v,
        35: w,
        36: W,
        37: 24,
        38: _,
        40: S
      }, t(e, [2, 7], {
        1: [2, 1]
      }), t(e, [2, 3]), {
        9: 36,
        11: 17,
        12: i,
        13: r,
        14: n,
        15: s,
        16: o,
        17: l,
        18: d,
        19: 18,
        20: u,
        21: h,
        22: f,
        23: m,
        24: k,
        25: y,
        26: p,
        27: g,
        28: b,
        29: T,
        30: $,
        31: x,
        33: v,
        35: w,
        36: W,
        37: 24,
        38: _,
        40: S
      }, t(e, [2, 5]), t(e, [2, 6]), t(e, [2, 17]), t(e, [2, 18]), t(e, [2, 19]), t(e, [2, 20]), t(e, [2, 21]), t(e, [2, 22]), t(e, [2, 23]), t(e, [2, 24]), t(e, [2, 25]), t(e, [2, 26]), t(e, [2, 27]), {
        32: [1, 37]
      }, {
        34: [1, 38]
      }, t(e, [2, 30]), t(e, [2, 31]), t(e, [2, 32]), {
        39: [1, 39]
      }, t(e, [2, 8]), t(e, [2, 9]), t(e, [2, 10]), t(e, [2, 11]), t(e, [2, 12]), t(e, [2, 13]), t(e, [2, 14]), t(e, [2, 15]), t(e, [2, 16]), {
        41: [1, 40],
        43: [1, 41]
      }, t(e, [2, 4]), t(e, [2, 28]), t(e, [2, 29]), t(e, [2, 33]), t(e, [2, 34], {
        42: [1, 42],
        43: [1, 43]
      }), t(e, [2, 40], {
        41: [1, 44]
      }), t(e, [2, 35], {
        43: [1, 45]
      }), t(e, [2, 36]), t(e, [2, 38], {
        42: [1, 46]
      }), t(e, [2, 37]), t(e, [2, 39])],
      defaultActions: {},
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
        var r = [];
        var n = [null];
        var s = [];
        var a = this.table;
        var o = "";
        var l = 0;
        var d = 0;
        var u = 0;
        var h = s.slice.call(arguments, 1);
        var f = Object.create(this.lexer);
        var m = {
          yy: {}
        };
        for (var k in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            m.yy[k] = this.yy[k];
          }
        }
        f.setInput(t, m.yy);
        m.yy.lexer = f;
        m.yy.parser = this;
        if (f.yylloc === undefined) {
          f.yylloc = {};
        }
        var y = f.yylloc;
        s.push(y);
        var p = f.options && f.options.ranges;
        function g() {
          var t;
          if (typeof (t = r.pop() || f.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (r = t).pop();
            }
            t = e.symbols_[t] || t;
          }
          return t;
        }
        if (typeof m.yy.parseError == "function") {
          this.parseError = m.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        loggerLevelUtils.setFunctionName(function (t) {
          i.length = i.length - t * 2;
          n.length = n.length - t;
          s.length = s.length - t;
        }, "popStack");
        loggerLevelUtils.setFunctionName(g, "lex");
        var b;
        var T;
        var $;
        var x;
        var v;
        var w;
        var W;
        var _;
        var S;
        var D = {};
        while (true) {
          $ = i[i.length - 1];
          if (this.defaultActions[$]) {
            x = this.defaultActions[$];
          } else {
            if (b == null) {
              b = g();
            }
            x = a[$] && a[$][b];
          }
          if (x === undefined || !x.length || !x[0]) {
            var F = "";
            S = [];
            for (w in a[$]) {
              if (this.terminals_[w] && w > 2) {
                S.push("'" + this.terminals_[w] + "'");
              }
            }
            F = f.showPosition ? "Parse error on line " + (l + 1) + ":\n" + f.showPosition() + "\nExpecting " + S.join(", ") + ", got '" + (this.terminals_[b] || b) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (b == 1 ? "end of input" : "'" + (this.terminals_[b] || b) + "'");
            this.parseError(F, {
              text: f.match,
              token: this.terminals_[b] || b,
              line: f.yylineno,
              loc: y,
              expected: S
            });
          }
          if (x[0] instanceof Array && x.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + $ + ", token: " + b);
          }
          switch (x[0]) {
            case 1:
              i.push(b);
              n.push(f.yytext);
              s.push(f.yylloc);
              i.push(x[1]);
              b = null;
              if (T) {
                b = T;
                T = null;
              } else {
                d = f.yyleng;
                o = f.yytext;
                l = f.yylineno;
                y = f.yylloc;
                if (u > 0) {
                  u--;
                }
              }
              break;
            case 2:
              W = this.productions_[x[1]][1];
              D.$ = n[n.length - W];
              D._$ = {
                first_line: s[s.length - (W || 1)].first_line,
                last_line: s[s.length - 1].last_line,
                first_column: s[s.length - (W || 1)].first_column,
                last_column: s[s.length - 1].last_column
              };
              if (p) {
                D._$.range = [s[s.length - (W || 1)].range[0], s[s.length - 1].range[1]];
              }
              if ((v = this.performAction.apply(D, [o, d, l, m.yy, x[1], n, s].concat(h))) !== undefined) {
                return v;
              }
              if (W) {
                i = i.slice(0, W * -1 * 2);
                n = n.slice(0, W * -1);
                s = s.slice(0, W * -1);
              }
              i.push(this.productions_[x[1]][0]);
              n.push(D.$);
              s.push(D._$);
              _ = a[i[i.length - 2]][i[i.length - 1]];
              i.push(_);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var F = {
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
        var r = this.match.split(/(?:\r\n?|\n)/g);
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
          last_column: i ? (i.length === r.length ? this.yylloc.first_column : 0) + r[r.length - i.length].length - i[0].length : this.yylloc.first_column - e
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
        var r;
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
        i = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (i) {
          return i;
        }
        if (this._backtrack) {
          for (var s in n) {
            this[s] = n[s];
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
        var r;
        var n = this._currentRules();
        var s = 0;
        for (; s < n.length; s++) {
          if ((i = this._input.match(this.rules[n[s]])) && (!e || i[0].length > e[0].length)) {
            e = i;
            r = s;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(i, n[s])) !== false) {
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
          return (t = this.test_match(e, n[r])) !== false && t;
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
      performAction: loggerLevelUtils.setFunctionName(function (t, e, i, r) {
        switch (i) {
          case 0:
            this.begin("open_directive");
            return "open_directive";
          case 1:
            this.begin("acc_title");
            return 31;
          case 2:
            this.popState();
            return "acc_title_value";
          case 3:
            this.begin("acc_descr");
            return 33;
          case 4:
            this.popState();
            return "acc_descr_value";
          case 5:
            this.begin("acc_descr_multiline");
            break;
          case 6:
          case 15:
          case 18:
          case 21:
          case 24:
            this.popState();
            break;
          case 7:
            return "acc_descr_multiline_value";
          case 8:
          case 9:
          case 10:
          case 12:
          case 13:
            break;
          case 11:
            return 10;
          case 14:
            this.begin("href");
            break;
          case 16:
            return 43;
          case 17:
            this.begin("callbackname");
            break;
          case 19:
            this.popState();
            this.begin("callbackargs");
            break;
          case 20:
            return 41;
          case 22:
            return 42;
          case 23:
            this.begin("click");
            break;
          case 25:
            return 40;
          case 26:
            return 4;
          case 27:
            return 22;
          case 28:
            return 23;
          case 29:
            return 24;
          case 30:
            return 25;
          case 31:
            return 26;
          case 32:
            return 28;
          case 33:
            return 27;
          case 34:
            return 29;
          case 35:
            return 12;
          case 36:
            return 13;
          case 37:
            return 14;
          case 38:
            return 15;
          case 39:
            return 16;
          case 40:
            return 17;
          case 41:
            return 18;
          case 42:
            return 20;
          case 43:
            return 21;
          case 44:
            return "date";
          case 45:
            return 30;
          case 46:
            return "accDescription";
          case 47:
            return 36;
          case 48:
            return 38;
          case 49:
            return 39;
          case 50:
            return ":";
          case 51:
            return 6;
          case 52:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:%%\{)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:weekday\s+monday\b)/i, /^(?:weekday\s+tuesday\b)/i, /^(?:weekday\s+wednesday\b)/i, /^(?:weekday\s+thursday\b)/i, /^(?:weekday\s+friday\b)/i, /^(?:weekday\s+saturday\b)/i, /^(?:weekday\s+sunday\b)/i, /^(?:weekend\s+friday\b)/i, /^(?:weekend\s+saturday\b)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^\n]+)/i, /^(?:[^:\n]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: {
        acc_descr_multiline: {
          rules: [6, 7],
          inclusive: false
        },
        acc_descr: {
          rules: [4],
          inclusive: false
        },
        acc_title: {
          rules: [2],
          inclusive: false
        },
        callbackargs: {
          rules: [21, 22],
          inclusive: false
        },
        callbackname: {
          rules: [18, 19, 20],
          inclusive: false
        },
        href: xssContentSanitizer.sanitizeUrl({
          rules: [15, 16],
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFbDF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*95%m5Wa1N*SkZZ$mRH-m1OdFJu%k1WW*h-$kRC-$FsZHJO$WxN-lR*eFl6Skdl$m96$m5vPQ"
        }),
        click: {
          rules: [24, 25],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 17, 23, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
          inclusive: true
        }
      }
    };
    function E() {
      this.yy = {};
    }
    D.lexer = F;
    loggerLevelUtils.setFunctionName(E, "Parser");
    E.prototype = D;
    D.Parser = E;
    return new E();
  }();
  T.parser = T;
  h.extend(m);
  h.extend(y);
  h.extend(g);
  var $ = {
    friday: 5,
    saturday: 6
  };
  var x = "";
  var v = "";
  var w = undefined;
  var W = "";
  var _ = [];
  var S = [];
  var D = new Map();
  var F = [];
  var E = [];
  var C = "";
  var M = "";
  var R = ["active", "done", "crit", "milestone", "vert"];
  var L = [];
  var Y = false;
  var A = false;
  var N = "sunday";
  var Z = "saturday";
  var O = 0;
  var I = loggerLevelUtils.setFunctionName(function () {
    F = [];
    E = [];
    C = "";
    L = [];
    tg = 0;
    r = undefined;
    n = undefined;
    tx = [];
    x = "";
    v = "";
    M = "";
    w = undefined;
    W = "";
    _ = [];
    S = [];
    Y = false;
    A = false;
    O = 0;
    D = new Map();
    mermaidConfigUtils_1.clearCommonDb();
    N = "sunday";
    Z = "saturday";
  }, "clear");
  var P = loggerLevelUtils.setFunctionName(function (t) {
    v = t;
  }, "setAxisFormat");
  var B = loggerLevelUtils.setFunctionName(function () {
    return v;
  }, "getAxisFormat");
  var z = loggerLevelUtils.setFunctionName(function (t) {
    w = t;
  }, "setTickInterval");
  var H = loggerLevelUtils.setFunctionName(function () {
    return w;
  }, "getTickInterval");
  var j = loggerLevelUtils.setFunctionName(function (t) {
    W = t;
  }, "setTodayMarker");
  var J = loggerLevelUtils.setFunctionName(function () {
    return W;
  }, "getTodayMarker");
  var V = loggerLevelUtils.setFunctionName(function (t) {
    x = t;
  }, "setDateFormat");
  var U = loggerLevelUtils.setFunctionName(function () {
    Y = true;
  }, "enableInclusiveEndDates");
  var q = loggerLevelUtils.setFunctionName(function () {
    return Y;
  }, "endDatesAreInclusive");
  var G = loggerLevelUtils.setFunctionName(function () {
    A = true;
  }, "enableTopAxis");
  var X = loggerLevelUtils.setFunctionName(function () {
    return A;
  }, "topAxisEnabled");
  var Q = loggerLevelUtils.setFunctionName(function (t) {
    M = t;
  }, "setDisplayMode");
  var K = loggerLevelUtils.setFunctionName(function () {
    return M;
  }, "getDisplayMode");
  var tt = loggerLevelUtils.setFunctionName(function () {
    return x;
  }, "getDateFormat");
  var te = loggerLevelUtils.setFunctionName(function (t) {
    _ = t.toLowerCase().split(/[\s,]+/);
  }, "setIncludes");
  var ti = loggerLevelUtils.setFunctionName(function () {
    return _;
  }, "getIncludes");
  var tr = loggerLevelUtils.setFunctionName(function (t) {
    S = t.toLowerCase().split(/[\s,]+/);
  }, "setExcludes");
  var tn = loggerLevelUtils.setFunctionName(function () {
    return S;
  }, "getExcludes");
  var ts = loggerLevelUtils.setFunctionName(function () {
    return D;
  }, "getLinks");
  var ta = loggerLevelUtils.setFunctionName(function (t) {
    C = t;
    F.push(t);
  }, "addSection");
  var to = loggerLevelUtils.setFunctionName(function () {
    return F;
  }, "getSections");
  var tl = loggerLevelUtils.setFunctionName(function () {
    let t = tS();
    let e = 0;
    while (!t && e < 10) {
      t = tS();
      e++;
    }
    return E = tx;
  }, "getTasks");
  var tc = loggerLevelUtils.setFunctionName(function (t, e, i, r) {
    let n = t.format(e.trim());
    let s = t.format("YYYY-MM-DD");
    return !r.includes(n) && !r.includes(s) && (!!i.includes("weekends") && (t.isoWeekday() === $[Z] || t.isoWeekday() === $[Z] + 1) || !!i.includes(t.format("dddd").toLowerCase()) || i.includes(n) || i.includes(s));
  }, "isInvalidDate");
  var td = loggerLevelUtils.setFunctionName(function (t) {
    N = t;
  }, "setWeekday");
  var tu = loggerLevelUtils.setFunctionName(function () {
    return N;
  }, "getWeekday");
  var th = loggerLevelUtils.setFunctionName(function (t) {
    Z = t;
  }, "setWeekend");
  var tf = loggerLevelUtils.setFunctionName(function (t, e, i, r) {
    let n;
    let s;
    if (!i.length || t.manualEndTime) {
      return;
    }
    let [a, o] = tm(n = (n = t.startTime instanceof Date ? h(t.startTime) : h(t.startTime, e, true)).add(1, "d"), t.endTime instanceof Date ? h(t.endTime) : h(t.endTime, e, true), e, i, r);
    t.endTime = a.toDate();
    t.renderEndTime = o;
  }, "checkTaskDates");
  var tm = loggerLevelUtils.setFunctionName(function (t, e, i, r, n) {
    let s = false;
    let a = null;
    while (t <= e) {
      if (!s) {
        a = e.toDate();
      }
      if (s = tc(t, i, r, n)) {
        e = e.add(1, "d");
      }
      t = t.add(1, "d");
    }
    return [e, a];
  }, "fixTaskDates");
  var tk = loggerLevelUtils.setFunctionName(function (t, e, i) {
    i = i.trim();
    if ((e.trim() === "x" || e.trim() === "X") && /^\d+$/.test(i)) {
      return new Date(Number(i));
    }
    let r = /^after\s+(?<ids>[\d\w- ]+)/.exec(i);
    if (r !== null) {
      let t = null;
      for (let e of r.groups.ids.split(" ")) {
        let i = tW(e);
        if (i !== undefined && (!t || i.endTime > t.endTime)) {
          t = i;
        }
      }
      if (t) {
        return t.endTime;
      }
      let e = new Date();
      e.setHours(0, 0, 0, 0);
      return e;
    }
    let n = h(i, e.trim(), true);
    if (n.isValid()) {
      return n.toDate();
    }
    {
      loggerLevelUtils.logger.debug("Invalid date:" + i);
      loggerLevelUtils.logger.debug("With date format:" + e.trim());
      let t = new Date(i);
      if (t === undefined || isNaN(t.getTime()) || t.getFullYear() < -10000 || t.getFullYear() > 10000) {
        throw Error("Invalid date:" + i);
      }
      return t;
    }
  }, "getStartDate");
  var ty = loggerLevelUtils.setFunctionName(function (t) {
    let e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());
    if (e !== null) {
      return [Number.parseFloat(e[1]), e[2]];
    } else {
      return [NaN, "ms"];
    }
  }, "parseDuration");
  var tp = loggerLevelUtils.setFunctionName(function (t, e, i, r = false) {
    i = i.trim();
    let n = /^until\s+(?<ids>[\d\w- ]+)/.exec(i);
    if (n !== null) {
      let t = null;
      for (let e of n.groups.ids.split(" ")) {
        let i = tW(e);
        if (i !== undefined && (!t || i.startTime < t.startTime)) {
          t = i;
        }
      }
      if (t) {
        return t.startTime;
      }
      let e = new Date();
      e.setHours(0, 0, 0, 0);
      return e;
    }
    let s = h(i, e.trim(), true);
    if (s.isValid()) {
      if (r) {
        s = s.add(1, "d");
      }
      return s.toDate();
    }
    let a = h(t);
    let [o, l] = ty(i);
    if (!Number.isNaN(o)) {
      let t = a.add(o, l);
      if (t.isValid()) {
        a = t;
      }
    }
    return a.toDate();
  }, "getEndDate");
  var tg = 0;
  var tb = loggerLevelUtils.setFunctionName(function (t) {
    if (t === undefined) {
      return "task" + (tg += 1);
    } else {
      return t;
    }
  }, "parseId");
  var tT = loggerLevelUtils.setFunctionName(function (t, e) {
    let i;
    let r = (e.substr(0, 1) === ":" ? e.substr(1, e.length) : e).split(",");
    let n = {};
    tY(r, n, R);
    for (let t = 0; t < r.length; t++) {
      r[t] = r[t].trim();
    }
    let s = "";
    switch (r.length) {
      case 1:
        n.id = tb();
        n.startTime = t.endTime;
        s = r[0];
        break;
      case 2:
        n.id = tb();
        n.startTime = tk(undefined, x, r[0]);
        s = r[1];
        break;
      case 3:
        n.id = tb(r[0]);
        n.startTime = tk(undefined, x, r[1]);
        s = r[2];
    }
    if (s) {
      n.endTime = tp(n.startTime, x, s, Y);
      n.manualEndTime = h(s, "YYYY-MM-DD", true).isValid();
      tf(n, x, S, _);
    }
    return n;
  }, "compileData");
  var t$ = loggerLevelUtils.setFunctionName(function (t, e) {
    let i;
    let r = (e.substr(0, 1) === ":" ? e.substr(1, e.length) : e).split(",");
    let n = {};
    tY(r, n, R);
    for (let t = 0; t < r.length; t++) {
      r[t] = r[t].trim();
    }
    switch (r.length) {
      case 1:
        n.id = tb();
        n.startTime = {
          type: "prevTaskEnd",
          id: t
        };
        n.endTime = {
          data: r[0]
        };
        break;
      case 2:
        n.id = tb();
        n.startTime = {
          type: "getStartDate",
          startData: r[0]
        };
        n.endTime = {
          data: r[1]
        };
        break;
      case 3:
        n.id = tb(r[0]);
        n.startTime = {
          type: "getStartDate",
          startData: r[1]
        };
        n.endTime = {
          data: r[2]
        };
    }
    return n;
  }, "parseData");
  var tx = [];
  var tv = {};
  var tw = loggerLevelUtils.setFunctionName(function (t, e) {
    let i = {
      section: C,
      type: C,
      processed: false,
      manualEndTime: false,
      renderEndTime: null,
      raw: {
        data: e
      },
      task: t,
      classes: []
    };
    let r = t$(n, e);
    i.raw.startTime = r.startTime;
    i.raw.endTime = r.endTime;
    i.id = r.id;
    i.prevTaskId = n;
    i.active = r.active;
    i.done = r.done;
    i.crit = r.crit;
    i.milestone = r.milestone;
    i.vert = r.vert;
    i.order = O;
    O++;
    let s = tx.push(i);
    n = i.id;
    tv[i.id] = s - 1;
  }, "addTask");
  var tW = loggerLevelUtils.setFunctionName(function (t) {
    return tx[tv[t]];
  }, "findTaskById");
  var t_ = loggerLevelUtils.setFunctionName(function (t, e) {
    let i = {
      section: C,
      type: C,
      description: t,
      task: t,
      classes: []
    };
    let n = tT(r, e);
    i.startTime = n.startTime;
    i.endTime = n.endTime;
    i.id = n.id;
    i.active = n.active;
    i.done = n.done;
    i.crit = n.crit;
    i.milestone = n.milestone;
    i.vert = n.vert;
    r = i;
    E.push(i);
  }, "addTaskOrg");
  var tS = loggerLevelUtils.setFunctionName(function () {
    let t = loggerLevelUtils.setFunctionName(function (t) {
      let e = tx[t];
      let i = "";
      switch (tx[t].raw.startTime.type) {
        case "prevTaskEnd":
          {
            let t = tW(e.prevTaskId);
            e.startTime = t.endTime;
            break;
          }
        case "getStartDate":
          if (i = tk(undefined, x, tx[t].raw.startTime.startData)) {
            tx[t].startTime = i;
          }
      }
      if (tx[t].startTime) {
        tx[t].endTime = tp(tx[t].startTime, x, tx[t].raw.endTime.data, Y);
        if (tx[t].endTime) {
          tx[t].processed = true;
          tx[t].manualEndTime = h(tx[t].raw.endTime.data, "YYYY-MM-DD", true).isValid();
          tf(tx[t], x, S, _);
        }
      }
      return tx[t].processed;
    }, "compileTask");
    let e = true;
    for (let [i, r] of tx.entries()) {
      t(i);
      e = e && r.processed;
    }
    return e;
  }, "compileTasks");
  var tD = loggerLevelUtils.setFunctionName(function (t, e) {
    let i = e;
    if (mermaidConfigUtils_1.getConfigAlias().securityLevel !== "loose") {
      i = urlSanitizer.sanitizeUrl(e);
    }
    t.split(",").forEach(function (t) {
      if (tW(t) !== undefined) {
        tC(t, () => {
          window.open(xssContentSanitizer.sanitizeUrl(i, null, {
            logType: "js.window.location",
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFbDF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*95%m5Wa1N*SkZZ$mRH-m1OdFJu%k1WW*h-$kRC-$FsZHJO$WxN-lR*eFl6Skdl$m96$m5vPQ"
          }), "_self");
        });
        D.set(t, i);
      }
    });
    tF(t, "clickable");
  }, "setLink");
  var tF = loggerLevelUtils.setFunctionName(function (t, e) {
    t.split(",").forEach(function (t) {
      let i = tW(t);
      if (i !== undefined) {
        i.classes.push(e);
      }
    });
  }, "setClass");
  var tE = loggerLevelUtils.setFunctionName(function (t, e, i) {
    if (mermaidConfigUtils_1.getConfigAlias().securityLevel !== "loose" || e === undefined) {
      return;
    }
    let r = [];
    if (typeof i == "string") {
      r = i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      for (let t = 0; t < r.length; t++) {
        let e = r[t].trim();
        if (e.startsWith("\"") && e.endsWith("\"")) {
          e = e.substr(1, e.length - 2);
        }
        r[t] = e;
      }
    }
    if (r.length === 0) {
      r.push(t);
    }
    if (tW(t) !== undefined) {
      tC(t, () => {
        mermaidDiagramUtils.mermaidUtils.runFunc(e, ...r);
      });
    }
  }, "setClickFun");
  var tC = loggerLevelUtils.setFunctionName(function (t, e) {
    L.push(function () {
      let i = document.querySelector(`[id="${t}"]`);
      if (i !== null) {
        i.addEventListener("click", function () {
          e();
        });
      }
    }, function () {
      let i = document.querySelector(`[id="${t}-text"]`);
      if (i !== null) {
        i.addEventListener("click", function () {
          e();
        });
      }
    });
  }, "pushFun");
  var tM = loggerLevelUtils.setFunctionName(function (t, e, i) {
    t.split(",").forEach(function (t) {
      tE(t, e, i);
    });
    tF(t, "clickable");
  }, "setClickEvent");
  var tR = loggerLevelUtils.setFunctionName(function (t) {
    L.forEach(function (e) {
      e(t);
    });
  }, "bindFunctions");
  var tL = {
    getConfig: loggerLevelUtils.setFunctionName(() => mermaidConfigUtils_1.getConfigAlias().gantt, "getConfig"),
    clear: I,
    setDateFormat: V,
    getDateFormat: tt,
    enableInclusiveEndDates: U,
    endDatesAreInclusive: q,
    enableTopAxis: G,
    topAxisEnabled: X,
    setAxisFormat: P,
    getAxisFormat: B,
    setTickInterval: z,
    getTickInterval: H,
    setTodayMarker: j,
    getTodayMarker: J,
    setAccTitle: mermaidConfigUtils_1.setAccTitle,
    getAccTitle: mermaidConfigUtils_1.getAccTitle,
    setDiagramTitle: mermaidConfigUtils_1.setDiagramTitle,
    getDiagramTitle: mermaidConfigUtils_1.getDiagramTitle,
    setDisplayMode: Q,
    getDisplayMode: K,
    setAccDescription: mermaidConfigUtils_1.setAccDescription,
    getAccDescription: mermaidConfigUtils_1.getAccDescription,
    addSection: ta,
    getSections: to,
    getTasks: tl,
    addTask: tw,
    findTaskById: tW,
    addTaskOrg: t_,
    setIncludes: te,
    getIncludes: ti,
    setExcludes: tr,
    getExcludes: tn,
    setClickEvent: tM,
    setLink: tD,
    getLinks: ts,
    bindFunctions: tR,
    parseDuration: ty,
    isInvalidDate: tc,
    setWeekday: td,
    getWeekday: tu,
    setWeekend: th
  };
  function tY(t, e, i) {
    let r = true;
    while (r) {
      r = false;
      i.forEach(function (i) {
        let n = RegExp("^\\s*" + i + "\\s*$");
        if (t[0].match(n)) {
          e[i] = true;
          t.shift(1);
          r = true;
        }
      });
    }
  }
  loggerLevelUtils.setFunctionName(tY, "getTaskTags");
  var tA = loggerLevelUtils.setFunctionName(function () {
    loggerLevelUtils.logger.debug("Something is calling, setConf, remove the call");
  }, "setConf");
  var tN = {
    monday: axisAndZoomUtilities.Ox9,
    tuesday: axisAndZoomUtilities.YDX,
    wednesday: axisAndZoomUtilities.EFj,
    thursday: axisAndZoomUtilities.Igq,
    friday: axisAndZoomUtilities.y2j,
    saturday: axisAndZoomUtilities.LqH,
    sunday: axisAndZoomUtilities.Zyz
  };
  var tZ = loggerLevelUtils.setFunctionName((t, e) => {
    let i = [...t].map(() => -Infinity);
    let r = [...t].sort((t, e) => t.startTime - e.startTime || t.order - e.order);
    let n = 0;
    for (let t of r) {
      for (let r = 0; r < i.length; r++) {
        if (t.startTime >= i[r]) {
          i[r] = t.endTime;
          t.order = r + e;
          if (r > n) {
            n = r;
          }
          break;
        }
      }
    }
    return n;
  }, "getMaxIntersections");
  var tO = {
    parser: T,
    db: tL,
    renderer: {
      setConf: tA,
      draw: loggerLevelUtils.setFunctionName(function (t, e, i, r) {
        let n;
        let a = mermaidConfigUtils_1.getConfigAlias().gantt;
        let o = mermaidConfigUtils_1.getConfigAlias().securityLevel;
        if (o === "sandbox") {
          n = axisAndZoomUtilities.select("#i" + e);
        }
        let d = o === "sandbox" ? axisAndZoomUtilities.select(n.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body");
        let u = o === "sandbox" ? n.nodes()[0].contentDocument : document;
        let f = u.getElementById(e);
        if ((s = f.parentElement.offsetWidth) === undefined) {
          s = 1200;
        }
        if (a.useWidth !== undefined) {
          s = a.useWidth;
        }
        let m = r.db.getTasks();
        let k = [];
        for (let t of m) {
          k.push(t.type);
        }
        k = D(k);
        let y = {};
        let p = a.topPadding * 2;
        if (r.db.getDisplayMode() === "compact" || a.displayMode === "compact") {
          let t = {};
          for (let e of m) {
            if (t[e.section] === undefined) {
              t[e.section] = [e];
            } else {
              t[e.section].push(e);
            }
          }
          let e = 0;
          for (let i of Object.keys(t)) {
            let r = tZ(t[i], e) + 1;
            e += r;
            p += r * (a.barHeight + a.barGap);
            y[i] = r;
          }
        } else {
          p += m.length * (a.barHeight + a.barGap);
          for (let t of k) {
            y[t] = m.filter(e => e.type === t).length;
          }
        }
        f.setAttribute("viewBox", "0 0 " + s + " " + p);
        let g = d.select(`[id="${e}"]`);
        let T = axisAndZoomUtilities.timeScale().domain([axisAndZoomUtilities.VV$(m, function (t) {
          return t.startTime;
        }), axisAndZoomUtilities.Fp7(m, function (t) {
          return t.endTime;
        })]).rangeRound([0, s - a.leftPadding - a.rightPadding]);
        function $(t, e) {
          let i = t.startTime;
          let r = e.startTime;
          let n = 0;
          if (i > r) {
            n = 1;
          } else if (i < r) {
            n = -1;
          }
          return n;
        }
        function x(t, e, i) {
          let n = a.barHeight;
          let s = n + a.barGap;
          let o = a.topPadding;
          let l = a.leftPadding;
          let c = axisAndZoomUtilities.BYU().domain([0, k.length]).range(["#00B9FA", "#F95002"]).interpolate(axisAndZoomUtilities.JHv);
          w(s, o, l, e, i, t, r.db.getExcludes(), r.db.getIncludes());
          W(l, o, e, i);
          v(t, s, o, l, n, c, e, i);
          _(s, o, l, n, c);
          S(l, o, e, i);
        }
        function v(t, i, n, s, o, c, d) {
          t.sort((t, e) => t.vert === e.vert ? 0 : t.vert ? 1 : -1);
          let u = [...new Set(t.map(t => t.order))].map(e => t.find(t => t.order === e));
          g.append("g").selectAll("rect").data(u).enter().append("rect").attr("x", 0).attr("y", function (t, e) {
            return t.order * i + n - 2;
          }).attr("width", function () {
            return d - a.rightPadding / 2;
          }).attr("height", i).attr("class", function (t) {
            for (let [e, i] of k.entries()) {
              if (t.type === i) {
                return "section section" + e % a.numberSectionStyles;
              }
            }
            return "section section0";
          }).enter();
          let h = g.append("g").selectAll("rect").data(t).enter();
          let f = r.db.getLinks();
          h.append("rect").attr("id", function (t) {
            return t.id;
          }).attr("rx", 3).attr("ry", 3).attr("x", function (t) {
            if (t.milestone) {
              return T(t.startTime) + s + (T(t.endTime) - T(t.startTime)) * 0.5 - o * 0.5;
            } else {
              return T(t.startTime) + s;
            }
          }).attr("y", function (t, e) {
            e = t.order;
            if (t.vert) {
              return a.gridLineStartPadding;
            } else {
              return e * i + n;
            }
          }).attr("width", function (t) {
            if (t.milestone) {
              return o;
            } else if (t.vert) {
              return o * 0.08;
            } else {
              return T(t.renderEndTime || t.endTime) - T(t.startTime);
            }
          }).attr("height", function (t) {
            if (t.vert) {
              return m.length * (a.barHeight + a.barGap) + a.barHeight * 2;
            } else {
              return o;
            }
          }).attr("transform-origin", function (t, e) {
            e = t.order;
            return (T(t.startTime) + s + (T(t.endTime) - T(t.startTime)) * 0.5).toString() + "px " + (e * i + n + o * 0.5).toString() + "px";
          }).attr("class", function (t) {
            let e = "";
            if (t.classes.length > 0) {
              e = t.classes.join(" ");
            }
            let i = 0;
            for (let [e, r] of k.entries()) {
              if (t.type === r) {
                i = e % a.numberSectionStyles;
              }
            }
            let r = "";
            if (t.active) {
              if (t.crit) {
                r += " activeCrit";
              } else {
                r = " active";
              }
            } else if (t.done) {
              r = t.crit ? " doneCrit" : " done";
            } else if (t.crit) {
              r += " crit";
            }
            if (r.length === 0) {
              r = " task";
            }
            if (t.milestone) {
              r = " milestone " + r;
            }
            if (t.vert) {
              r = " vert " + r;
            }
            r += i;
            return "task" + (r += " " + e);
          });
          h.append("text").attr("id", function (t) {
            return t.id + "-text";
          }).text(function (t) {
            return t.task;
          }).attr("font-size", a.fontSize).attr("x", function (t) {
            let e = T(t.startTime);
            let i = T(t.renderEndTime || t.endTime);
            if (t.milestone) {
              e += (T(t.endTime) - T(t.startTime)) * 0.5 - o * 0.5;
              i = e + o;
            }
            if (t.vert) {
              return T(t.startTime) + s;
            }
            let r = this.getBBox().width;
            if (r > i - e) {
              if (i + r + a.leftPadding * 1.5 > d) {
                return e + s - 5;
              } else {
                return i + s + 5;
              }
            } else {
              return (i - e) / 2 + e + s;
            }
          }).attr("y", function (t, e) {
            if (t.vert) {
              return a.gridLineStartPadding + m.length * (a.barHeight + a.barGap) + 60;
            } else {
              return t.order * i + a.barHeight / 2 + (a.fontSize / 2 - 2) + n;
            }
          }).attr("text-height", o).attr("class", function (t) {
            let e = T(t.startTime);
            let i = T(t.endTime);
            if (t.milestone) {
              i = e + o;
            }
            let r = this.getBBox().width;
            let n = "";
            if (t.classes.length > 0) {
              n = t.classes.join(" ");
            }
            let s = 0;
            for (let [e, i] of k.entries()) {
              if (t.type === i) {
                s = e % a.numberSectionStyles;
              }
            }
            let l = "";
            if (t.active) {
              l = t.crit ? "activeCritText" + s : "activeText" + s;
            }
            if (t.done) {
              l = t.crit ? l + " doneCritText" + s : l + " doneText" + s;
            } else if (t.crit) {
              l = l + " critText" + s;
            }
            if (t.milestone) {
              l += " milestoneText";
            }
            if (t.vert) {
              l += " vertText";
            }
            if (r > i - e) {
              if (i + r + a.leftPadding * 1.5 > d) {
                return n + " taskTextOutsideLeft taskTextOutside" + s + " " + l;
              } else {
                return n + " taskTextOutsideRight taskTextOutside" + s + " " + l + " width-" + r;
              }
            } else {
              return n + " taskText taskText" + s + " " + l + " width-" + r;
            }
          });
          if (mermaidConfigUtils_1.getConfigAlias().securityLevel === "sandbox") {
            let t = axisAndZoomUtilities.select("#i" + e).nodes()[0].contentDocument;
            h.filter(function (t) {
              return f.has(t.id);
            }).each(function (e) {
              var i = t.querySelector("#" + e.id);
              var r = t.querySelector("#" + e.id + "-text");
              let n = i.parentNode;
              var s = t.createElement("a");
              s.setAttribute("xlink:href", f.get(e.id));
              s.setAttribute("target", "_top");
              n.appendChild(s);
              s.appendChild(i);
              s.appendChild(r);
            });
          }
        }
        function w(t, e, i, n, s, o, l, d) {
          let u;
          let f;
          if (l.length === 0 && d.length === 0) {
            return;
          }
          for (let {
            startTime: t,
            endTime: e
          } of o) {
            if (u === undefined || t < u) {
              u = t;
            }
            if (f === undefined || e > f) {
              f = e;
            }
          }
          if (!u || !f) {
            return;
          }
          if (h(f).diff(h(u), "year") > 5) {
            loggerLevelUtils.logger.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");
            return;
          }
          let m = r.db.getDateFormat();
          let k = [];
          let y = null;
          let p = h(u);
          while (p.valueOf() <= f) {
            if (r.db.isInvalidDate(p, m, l, d)) {
              if (y) {
                y.end = p;
              } else {
                y = {
                  start: p,
                  end: p
                };
              }
            } else if (y) {
              k.push(y);
              y = null;
            }
            p = p.add(1, "d");
          }
          g.append("g").selectAll("rect").data(k).enter().append("rect").attr("id", t => "exclude-" + t.start.format("YYYY-MM-DD")).attr("x", t => T(t.start.startOf("day")) + i).attr("y", a.gridLineStartPadding).attr("width", t => T(t.end.endOf("day")) - T(t.start.startOf("day"))).attr("height", s - e - a.gridLineStartPadding).attr("transform-origin", function (e, r) {
            return (T(e.start) + i + (T(e.end) - T(e.start)) * 0.5).toString() + "px " + (r * t + s * 0.5).toString() + "px";
          }).attr("class", "exclude-range");
        }
        function W(t, e, i, n) {
          let s;
          let o = r.db.getDateFormat();
          let l = r.db.getAxisFormat();
          if (l) {
            s = l;
          } else if (o === "D") {
            s = "%d";
          } else {
            s = a.axisFormat ?? "%Y-%m-%d";
          }
          let d = axisAndZoomUtilities.LLu(T).tickSize(-n + e + a.gridLineStartPadding).tickFormat(axisAndZoomUtilities.i$Z(s));
          let u = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval() || a.tickInterval);
          if (u !== null) {
            let t = u[1];
            let e = u[2];
            let i = r.db.getWeekday() || a.weekday;
            switch (e) {
              case "millisecond":
                d.ticks(axisAndZoomUtilities.U8T.every(t));
                break;
              case "second":
                d.ticks(axisAndZoomUtilities.S1K.every(t));
                break;
              case "minute":
                d.ticks(axisAndZoomUtilities.Z_i.every(t));
                break;
              case "hour":
                d.ticks(axisAndZoomUtilities.WQD.every(t));
                break;
              case "day":
                d.ticks(axisAndZoomUtilities.rr1.every(t));
                break;
              case "week":
                d.ticks(tN[i].every(t));
                break;
              case "month":
                d.ticks(axisAndZoomUtilities.F0B.every(t));
            }
          }
          g.append("g").attr("class", "grid").attr("transform", "translate(" + t + ", " + (n - 50) + ")").call(d).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em");
          if (r.db.topAxisEnabled() || a.topAxis) {
            let i = axisAndZoomUtilities.F5q(T).tickSize(-n + e + a.gridLineStartPadding).tickFormat(axisAndZoomUtilities.i$Z(s));
            if (u !== null) {
              let t = u[1];
              let e = u[2];
              let n = r.db.getWeekday() || a.weekday;
              switch (e) {
                case "millisecond":
                  i.ticks(axisAndZoomUtilities.U8T.every(t));
                  break;
                case "second":
                  i.ticks(axisAndZoomUtilities.S1K.every(t));
                  break;
                case "minute":
                  i.ticks(axisAndZoomUtilities.Z_i.every(t));
                  break;
                case "hour":
                  i.ticks(axisAndZoomUtilities.WQD.every(t));
                  break;
                case "day":
                  i.ticks(axisAndZoomUtilities.rr1.every(t));
                  break;
                case "week":
                  i.ticks(tN[n].every(t));
                  break;
                case "month":
                  i.ticks(axisAndZoomUtilities.F0B.every(t));
              }
            }
            g.append("g").attr("class", "grid").attr("transform", "translate(" + t + ", " + e + ")").call(i).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
          }
        }
        function _(t, e) {
          let i = 0;
          let r = Object.keys(y).map(t => [t, y[t]]);
          g.append("g").selectAll("text").data(r).enter().append(function (t) {
            let e = t[0].split(mermaidConfigUtils_1.textUtilities.lineBreakRegex);
            let i = -(e.length - 1) / 2;
            let r = u.createElementNS("http://www.w3.org/2000/svg", "text");
            r.setAttribute("dy", i + "em");
            for (let [t, n] of e.entries()) {
              let e = u.createElementNS("http://www.w3.org/2000/svg", "tspan");
              e.setAttribute("alignment-baseline", "central");
              e.setAttribute("x", "10");
              if (t > 0) {
                e.setAttribute("dy", "1em");
              }
              e.textContent = n;
              r.appendChild(e);
            }
            return r;
          }).attr("x", 10).attr("y", function (n, s) {
            if (!(s > 0)) {
              return n[1] * t / 2 + e;
            }
            for (let a = 0; a < s; a++) {
              i += r[s - 1][1];
              return n[1] * t / 2 + i * t + e;
            }
          }).attr("font-size", a.sectionFontSize).attr("class", function (t) {
            for (let [e, i] of k.entries()) {
              if (t[0] === i) {
                return "sectionTitle sectionTitle" + e % a.numberSectionStyles;
              }
            }
            return "sectionTitle";
          });
        }
        function S(t, e, i, n) {
          let s = r.db.getTodayMarker();
          if (s === "off") {
            return;
          }
          let o = g.append("g").attr("class", "today");
          let l = new Date();
          let c = o.append("line");
          c.attr("x1", T(l) + t).attr("x2", T(l) + t).attr("y1", a.titleTopMargin).attr("y2", n - a.titleTopMargin).attr("class", "today");
          if (s !== "") {
            c.attr("style", s.replace(/,/g, ";"));
          }
        }
        function D(t) {
          let e = {};
          let i = [];
          for (let r = 0, n = t.length; r < n; ++r) {
            if (!Object.prototype.hasOwnProperty.call(e, t[r])) {
              e[t[r]] = true;
              i.push(t[r]);
            }
          }
          return i;
        }
        loggerLevelUtils.setFunctionName($, "taskCompare");
        m.sort($);
        x(m, s, p);
        mermaidConfigUtils_1.configureSvgSize(g, p, s, a.useMaxWidth);
        g.append("text").text(r.db.getDiagramTitle()).attr("x", s / 2).attr("y", a.titleTopMargin).attr("class", "titleText");
        loggerLevelUtils.setFunctionName(x, "makeGantt");
        loggerLevelUtils.setFunctionName(v, "drawRects");
        loggerLevelUtils.setFunctionName(w, "drawExcludeDays");
        loggerLevelUtils.setFunctionName(W, "makeGrid");
        loggerLevelUtils.setFunctionName(_, "vertLabels");
        loggerLevelUtils.setFunctionName(S, "drawToday");
        loggerLevelUtils.setFunctionName(D, "checkUnique");
      }, "draw")
    },
    styles: loggerLevelUtils.setFunctionName(t => `
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor || t.textColor};
    font-family: ${t.fontFamily};
  }
`, "getStyles")
  };
  require.d(exports, {
    diagram: function () {
      return tO;
    }
  });
}