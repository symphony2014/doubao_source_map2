// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'o' to 'mermaidTextLayoutUtils'
// - Resolved require(997032) to 'mermaid-text-layout-utils'
// - Renamed variable 'l' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'c' to 'urlSanitizer'
// - Resolved require(568747) to 'url-sanitizer'
// - Renamed variable 'u' to 'dayjsDateLibrary'
// - Resolved require(349712) to 'dayjs-date-library'
// - Renamed variable 'h' to 'dayjsIsoWeekPlugin'
// - Resolved require(902980) to 'dayjs-iso-week-plugin'
// - Renamed variable 'm' to 'customParseFormatPlugin'
// - Resolved require(825043) to 'custom-parse-format-plugin'
// - Renamed variable 'p' to 'dayjsFormatPlugin'
// - Resolved require(260904) to 'dayjs-format-plugin'
// - Renamed variable 'k' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'ZH' to 'clearAccData' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'nV' to 'getConfigAlias' (module 101498)
// - Updated imported property 'GN' to 'setAccTitle' (module 101498)
// - Updated imported property 'eu' to 'getAccTitle' (module 101498)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 101498)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 101498)
// - Updated imported property 'U$' to 'setAccDescription' (module 101498)
// - Updated imported property 'Mx' to 'getAccDescription' (module 101498)
// - Updated imported property 'SY' to 'textUtils' (module 101498)
// - Updated imported property 'v2' to 'configureSvgSize' (module 101498)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'w8' to 'textLayoutUtils' (module 997032)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'Xf' to 'timeScale' (module 381804)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 4078.4dff0351.js
         * chunkId: 4078
         * moduleId: 773465
         */
module.exports = function (module, exports, require) {
  var r;
  var n;
  var a;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var urlSanitizer = require("url-sanitizer") /*id: 568747*/;
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var d = dayjsDateLibrary;
  var dayjsIsoWeekPlugin = require("dayjs-iso-week-plugin") /*id: 902980*/;
  var f = dayjsIsoWeekPlugin;
  var customParseFormatPlugin = require("custom-parse-format-plugin") /*id: 825043*/;
  var y = customParseFormatPlugin;
  var dayjsFormatPlugin = require("dayjs-format-plugin") /*id: 260904*/;
  var g = dayjsFormatPlugin;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var x = function () {
    var t = mermaidConfigUtils.setName(function (t, e, i, r) {
      i = i || {};
      r = t.length;
      for (; r--; i[t[r]] = e);
      return i;
    }, "o");
    var e = [6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 35, 36, 38, 40];
    var i = [1, 26];
    var r = [1, 27];
    var n = [1, 28];
    var a = [1, 29];
    var o = [1, 30];
    var c = [1, 31];
    var u = [1, 32];
    var d = [1, 33];
    var h = [1, 34];
    var f = [1, 9];
    var m = [1, 10];
    var y = [1, 11];
    var p = [1, 12];
    var g = [1, 13];
    var k = [1, 14];
    var x = [1, 15];
    var b = [1, 16];
    var v = [1, 19];
    var $ = [1, 20];
    var T = [1, 21];
    var w = [1, 22];
    var W = [1, 23];
    var _ = [1, 25];
    var S = [1, 35];
    var F = {
      trace: mermaidConfigUtils.setName(function () {}, "trace"),
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFRjF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*95%m5Wa1N*SkZZ$mRH-m1OdFJu%k1Wb$J-$*p*d1$rNHd$$EZN-lR*eFl6Skdl$m96$m5vPQ"
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
      performAction: mermaidConfigUtils.setName(function (t, e, i, r, n, a, s) {
        var o = a.length - 1;
        switch (n) {
          case 1:
            return a[o - 1];
          case 2:
          case 6:
          case 7:
            this.$ = [];
            break;
          case 3:
            a[o - 1].push(a[o]);
            this.$ = a[o - 1];
            break;
          case 4:
          case 5:
            this.$ = a[o];
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
            r.setDateFormat(a[o].substr(11));
            this.$ = a[o].substr(11);
            break;
          case 18:
            r.enableInclusiveEndDates();
            this.$ = a[o].substr(18);
            break;
          case 19:
            r.TopAxis();
            this.$ = a[o].substr(8);
            break;
          case 20:
            r.setAxisFormat(a[o].substr(11));
            this.$ = a[o].substr(11);
            break;
          case 21:
            r.setTickInterval(a[o].substr(13));
            this.$ = a[o].substr(13);
            break;
          case 22:
            r.setExcludes(a[o].substr(9));
            this.$ = a[o].substr(9);
            break;
          case 23:
            r.setIncludes(a[o].substr(9));
            this.$ = a[o].substr(9);
            break;
          case 24:
            r.setTodayMarker(a[o].substr(12));
            this.$ = a[o].substr(12);
            break;
          case 27:
            r.setDiagramTitle(a[o].substr(6));
            this.$ = a[o].substr(6);
            break;
          case 28:
            this.$ = a[o].trim();
            r.setAccTitle(this.$);
            break;
          case 29:
          case 30:
            this.$ = a[o].trim();
            r.setAccDescription(this.$);
            break;
          case 31:
            r.addSection(a[o].substr(8));
            this.$ = a[o].substr(8);
            break;
          case 33:
            r.addTask(a[o - 1], a[o]);
            this.$ = "task";
            break;
          case 34:
            this.$ = a[o - 1];
            r.setClickEvent(a[o - 1], a[o], null);
            break;
          case 35:
            this.$ = a[o - 2];
            r.setClickEvent(a[o - 2], a[o - 1], a[o]);
            break;
          case 36:
            this.$ = a[o - 2];
            r.setClickEvent(a[o - 2], a[o - 1], null);
            r.setLink(a[o - 2], a[o]);
            break;
          case 37:
            this.$ = a[o - 3];
            r.setClickEvent(a[o - 3], a[o - 2], a[o - 1]);
            r.setLink(a[o - 3], a[o]);
            break;
          case 38:
            this.$ = a[o - 2];
            r.setClickEvent(a[o - 2], a[o], null);
            r.setLink(a[o - 2], a[o - 1]);
            break;
          case 39:
            this.$ = a[o - 3];
            r.setClickEvent(a[o - 3], a[o - 1], a[o]);
            r.setLink(a[o - 3], a[o - 2]);
            break;
          case 40:
            this.$ = a[o - 1];
            r.setLink(a[o - 1], a[o]);
            break;
          case 41:
          case 47:
            this.$ = a[o - 1] + " " + a[o];
            break;
          case 42:
          case 43:
          case 45:
            this.$ = a[o - 2] + " " + a[o - 1] + " " + a[o];
            break;
          case 44:
          case 46:
            this.$ = a[o - 3] + " " + a[o - 2] + " " + a[o - 1] + " " + a[o];
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
        15: a,
        16: o,
        17: c,
        18: u,
        19: 18,
        20: d,
        21: h,
        22: f,
        23: m,
        24: y,
        25: p,
        26: g,
        27: k,
        28: x,
        29: b,
        30: v,
        31: $,
        33: T,
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
        15: a,
        16: o,
        17: c,
        18: u,
        19: 18,
        20: d,
        21: h,
        22: f,
        23: m,
        24: y,
        25: p,
        26: g,
        27: k,
        28: x,
        29: b,
        30: v,
        31: $,
        33: T,
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
      parseError: mermaidConfigUtils.setName(function (t, e) {
        if (e.recoverable) {
          this.trace(t);
        } else {
          var i = Error(t);
          i.hash = e;
          throw i;
        }
      }, "parseError"),
      parse: mermaidConfigUtils.setName(function (t) {
        var e = this;
        var i = [0];
        var r = [];
        var n = [null];
        var a = [];
        var s = this.table;
        var o = "";
        var c = 0;
        var u = 0;
        var d = 0;
        var h = a.slice.call(arguments, 1);
        var f = Object.create(this.lexer);
        var m = {
          yy: {}
        };
        for (var y in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, y)) {
            m.yy[y] = this.yy[y];
          }
        }
        f.setInput(t, m.yy);
        m.yy.lexer = f;
        m.yy.parser = this;
        if (f.yylloc === undefined) {
          f.yylloc = {};
        }
        var p = f.yylloc;
        a.push(p);
        var g = f.options && f.options.ranges;
        function k() {
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
        mermaidConfigUtils.setName(function (t) {
          i.length = i.length - t * 2;
          n.length = n.length - t;
          a.length = a.length - t;
        }, "popStack");
        mermaidConfigUtils.setName(k, "lex");
        var x;
        var b;
        var v;
        var $;
        var T;
        var w;
        var W;
        var _;
        var S;
        var F = {};
        while (true) {
          v = i[i.length - 1];
          if (this.defaultActions[v]) {
            $ = this.defaultActions[v];
          } else {
            if (x == null) {
              x = k();
            }
            $ = s[v] && s[v][x];
          }
          if ($ === undefined || !$.length || !$[0]) {
            var E = "";
            S = [];
            for (w in s[v]) {
              if (this.terminals_[w] && w > 2) {
                S.push("'" + this.terminals_[w] + "'");
              }
            }
            E = f.showPosition ? "Parse error on line " + (c + 1) + ":\n" + f.showPosition() + "\nExpecting " + S.join(", ") + ", got '" + (this.terminals_[x] || x) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (x == 1 ? "end of input" : "'" + (this.terminals_[x] || x) + "'");
            this.parseError(E, {
              text: f.match,
              token: this.terminals_[x] || x,
              line: f.yylineno,
              loc: p,
              expected: S
            });
          }
          if ($[0] instanceof Array && $.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + v + ", token: " + x);
          }
          switch ($[0]) {
            case 1:
              i.push(x);
              n.push(f.yytext);
              a.push(f.yylloc);
              i.push($[1]);
              x = null;
              if (b) {
                x = b;
                b = null;
              } else {
                u = f.yyleng;
                o = f.yytext;
                c = f.yylineno;
                p = f.yylloc;
                if (d > 0) {
                  d--;
                }
              }
              break;
            case 2:
              W = this.productions_[$[1]][1];
              F.$ = n[n.length - W];
              F._$ = {
                first_line: a[a.length - (W || 1)].first_line,
                last_line: a[a.length - 1].last_line,
                first_column: a[a.length - (W || 1)].first_column,
                last_column: a[a.length - 1].last_column
              };
              if (g) {
                F._$.range = [a[a.length - (W || 1)].range[0], a[a.length - 1].range[1]];
              }
              if ((T = this.performAction.apply(F, [o, u, c, m.yy, $[1], n, a].concat(h))) !== undefined) {
                return T;
              }
              if (W) {
                i = i.slice(0, W * -1 * 2);
                n = n.slice(0, W * -1);
                a = a.slice(0, W * -1);
              }
              i.push(this.productions_[$[1]][0]);
              n.push(F.$);
              a.push(F._$);
              _ = s[i[i.length - 2]][i[i.length - 1]];
              i.push(_);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var E = {
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
          for (var a in n) {
            this[a] = n[a];
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
        var i;
        var r;
        var n = this._currentRules();
        var a = 0;
        for (; a < n.length; a++) {
          if ((i = this._input.match(this.rules[n[a]])) && (!e || i[0].length > e[0].length)) {
            e = i;
            r = a;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(i, n[a])) !== false) {
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
      performAction: mermaidConfigUtils.setName(function (t, e, i, r) {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFRjF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*95%m5Wa1N*SkZZ$mRH-m1OdFJu%k1Wb$J-$*p*d1$rNHd$$EZN-lR*eFl6Skdl$m96$m5vPQ"
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
    function M() {
      this.yy = {};
    }
    F.lexer = E;
    mermaidConfigUtils.setName(M, "Parser");
    M.prototype = F;
    F.Parser = M;
    return new M();
  }();
  x.parser = x;
  d.extend(f);
  d.extend(y);
  d.extend(g);
  var b = {
    friday: 5,
    saturday: 6
  };
  var v = "";
  var $ = "";
  var T = undefined;
  var w = "";
  var W = [];
  var _ = [];
  var S = new Map();
  var F = [];
  var E = [];
  var M = "";
  var R = "";
  var C = ["active", "done", "crit", "milestone", "vert"];
  var D = [];
  var L = false;
  var N = false;
  var Z = "sunday";
  var A = "saturday";
  var B = 0;
  var Y = mermaidConfigUtils.setName(function () {
    F = [];
    E = [];
    M = "";
    D = [];
    tg = 0;
    r = undefined;
    n = undefined;
    tv = [];
    v = "";
    $ = "";
    R = "";
    T = undefined;
    w = "";
    W = [];
    _ = [];
    L = false;
    N = false;
    B = 0;
    S = new Map();
    mermaidConfigUtils.clearAccData();
    Z = "sunday";
    A = "saturday";
  }, "clear");
  var O = mermaidConfigUtils.setName(function (t) {
    $ = t;
  }, "setAxisFormat");
  var P = mermaidConfigUtils.setName(function () {
    return $;
  }, "getAxisFormat");
  var I = mermaidConfigUtils.setName(function (t) {
    T = t;
  }, "setTickInterval");
  var z = mermaidConfigUtils.setName(function () {
    return T;
  }, "getTickInterval");
  var j = mermaidConfigUtils.setName(function (t) {
    w = t;
  }, "setTodayMarker");
  var H = mermaidConfigUtils.setName(function () {
    return w;
  }, "getTodayMarker");
  var J = mermaidConfigUtils.setName(function (t) {
    v = t;
  }, "setDateFormat");
  var U = mermaidConfigUtils.setName(function () {
    L = true;
  }, "enableInclusiveEndDates");
  var V = mermaidConfigUtils.setName(function () {
    return L;
  }, "endDatesAreInclusive");
  var X = mermaidConfigUtils.setName(function () {
    N = true;
  }, "enableTopAxis");
  var q = mermaidConfigUtils.setName(function () {
    return N;
  }, "topAxisEnabled");
  var G = mermaidConfigUtils.setName(function (t) {
    R = t;
  }, "setDisplayMode");
  var K = mermaidConfigUtils.setName(function () {
    return R;
  }, "getDisplayMode");
  var Q = mermaidConfigUtils.setName(function () {
    return v;
  }, "getDateFormat");
  var tt = mermaidConfigUtils.setName(function (t) {
    W = t.toLowerCase().split(/[\s,]+/);
  }, "setIncludes");
  var te = mermaidConfigUtils.setName(function () {
    return W;
  }, "getIncludes");
  var ti = mermaidConfigUtils.setName(function (t) {
    _ = t.toLowerCase().split(/[\s,]+/);
  }, "setExcludes");
  var tr = mermaidConfigUtils.setName(function () {
    return _;
  }, "getExcludes");
  var tn = mermaidConfigUtils.setName(function () {
    return S;
  }, "getLinks");
  var ta = mermaidConfigUtils.setName(function (t) {
    M = t;
    F.push(t);
  }, "addSection");
  var ts = mermaidConfigUtils.setName(function () {
    return F;
  }, "getSections");
  var to = mermaidConfigUtils.setName(function () {
    let t = t_();
    let e = 0;
    while (!t && e < 10) {
      t = t_();
      e++;
    }
    return E = tv;
  }, "getTasks");
  var tl = mermaidConfigUtils.setName(function (t, e, i, r) {
    let n = t.format(e.trim());
    let a = t.format("YYYY-MM-DD");
    return !r.includes(n) && !r.includes(a) && (!!i.includes("weekends") && (t.isoWeekday() === b[A] || t.isoWeekday() === b[A] + 1) || !!i.includes(t.format("dddd").toLowerCase()) || i.includes(n) || i.includes(a));
  }, "isInvalidDate");
  var tc = mermaidConfigUtils.setName(function (t) {
    Z = t;
  }, "setWeekday");
  var tu = mermaidConfigUtils.setName(function () {
    return Z;
  }, "getWeekday");
  var td = mermaidConfigUtils.setName(function (t) {
    A = t;
  }, "setWeekend");
  var th = mermaidConfigUtils.setName(function (t, e, i, r) {
    let n;
    let a;
    if (!i.length || t.manualEndTime) {
      return;
    }
    let [s, o] = tf(n = (n = t.startTime instanceof Date ? d(t.startTime) : d(t.startTime, e, true)).add(1, "d"), t.endTime instanceof Date ? d(t.endTime) : d(t.endTime, e, true), e, i, r);
    t.endTime = s.toDate();
    t.renderEndTime = o;
  }, "checkTaskDates");
  var tf = mermaidConfigUtils.setName(function (t, e, i, r, n) {
    let a = false;
    let s = null;
    while (t <= e) {
      if (!a) {
        s = e.toDate();
      }
      if (a = tl(t, i, r, n)) {
        e = e.add(1, "d");
      }
      t = t.add(1, "d");
    }
    return [e, s];
  }, "fixTaskDates");
  var tm = mermaidConfigUtils.setName(function (t, e, i) {
    i = i.trim();
    let r = /^after\s+(?<ids>[\d\w- ]+)/.exec(i);
    if (r !== null) {
      let t = null;
      for (let e of r.groups.ids.split(" ")) {
        let i = tw(e);
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
    let n = d(i, e.trim(), true);
    if (n.isValid()) {
      return n.toDate();
    }
    {
      mermaidConfigUtils.logger.debug("Invalid date:" + i);
      mermaidConfigUtils.logger.debug("With date format:" + e.trim());
      let t = new Date(i);
      if (t === undefined || isNaN(t.getTime()) || t.getFullYear() < -10000 || t.getFullYear() > 10000) {
        throw Error("Invalid date:" + i);
      }
      return t;
    }
  }, "getStartDate");
  var ty = mermaidConfigUtils.setName(function (t) {
    let e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());
    if (e !== null) {
      return [Number.parseFloat(e[1]), e[2]];
    } else {
      return [NaN, "ms"];
    }
  }, "parseDuration");
  var tp = mermaidConfigUtils.setName(function (t, e, i, r = false) {
    i = i.trim();
    let n = /^until\s+(?<ids>[\d\w- ]+)/.exec(i);
    if (n !== null) {
      let t = null;
      for (let e of n.groups.ids.split(" ")) {
        let i = tw(e);
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
    let a = d(i, e.trim(), true);
    if (a.isValid()) {
      if (r) {
        a = a.add(1, "d");
      }
      return a.toDate();
    }
    let s = d(t);
    let [o, l] = ty(i);
    if (!Number.isNaN(o)) {
      let t = s.add(o, l);
      if (t.isValid()) {
        s = t;
      }
    }
    return s.toDate();
  }, "getEndDate");
  var tg = 0;
  var tk = mermaidConfigUtils.setName(function (t) {
    if (t === undefined) {
      return "task" + (tg += 1);
    } else {
      return t;
    }
  }, "parseId");
  var tx = mermaidConfigUtils.setName(function (t, e) {
    let i;
    let r = (e.substr(0, 1) === ":" ? e.substr(1, e.length) : e).split(",");
    let n = {};
    tL(r, n, C);
    for (let t = 0; t < r.length; t++) {
      r[t] = r[t].trim();
    }
    let a = "";
    switch (r.length) {
      case 1:
        n.id = tk();
        n.startTime = t.endTime;
        a = r[0];
        break;
      case 2:
        n.id = tk();
        n.startTime = tm(undefined, v, r[0]);
        a = r[1];
        break;
      case 3:
        n.id = tk(r[0]);
        n.startTime = tm(undefined, v, r[1]);
        a = r[2];
    }
    if (a) {
      n.endTime = tp(n.startTime, v, a, L);
      n.manualEndTime = d(a, "YYYY-MM-DD", true).isValid();
      th(n, v, _, W);
    }
    return n;
  }, "compileData");
  var tb = mermaidConfigUtils.setName(function (t, e) {
    let i;
    let r = (e.substr(0, 1) === ":" ? e.substr(1, e.length) : e).split(",");
    let n = {};
    tL(r, n, C);
    for (let t = 0; t < r.length; t++) {
      r[t] = r[t].trim();
    }
    switch (r.length) {
      case 1:
        n.id = tk();
        n.startTime = {
          type: "prevTaskEnd",
          id: t
        };
        n.endTime = {
          data: r[0]
        };
        break;
      case 2:
        n.id = tk();
        n.startTime = {
          type: "getStartDate",
          startData: r[0]
        };
        n.endTime = {
          data: r[1]
        };
        break;
      case 3:
        n.id = tk(r[0]);
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
  var tv = [];
  var t$ = {};
  var tT = mermaidConfigUtils.setName(function (t, e) {
    let i = {
      section: M,
      type: M,
      processed: false,
      manualEndTime: false,
      renderEndTime: null,
      raw: {
        data: e
      },
      task: t,
      classes: []
    };
    let r = tb(n, e);
    i.raw.startTime = r.startTime;
    i.raw.endTime = r.endTime;
    i.id = r.id;
    i.prevTaskId = n;
    i.active = r.active;
    i.done = r.done;
    i.crit = r.crit;
    i.milestone = r.milestone;
    i.vert = r.vert;
    i.order = B;
    B++;
    let a = tv.push(i);
    n = i.id;
    t$[i.id] = a - 1;
  }, "addTask");
  var tw = mermaidConfigUtils.setName(function (t) {
    return tv[t$[t]];
  }, "findTaskById");
  var tW = mermaidConfigUtils.setName(function (t, e) {
    let i = {
      section: M,
      type: M,
      description: t,
      task: t,
      classes: []
    };
    let n = tx(r, e);
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
  var t_ = mermaidConfigUtils.setName(function () {
    let t = mermaidConfigUtils.setName(function (t) {
      let e = tv[t];
      let i = "";
      switch (tv[t].raw.startTime.type) {
        case "prevTaskEnd":
          {
            let t = tw(e.prevTaskId);
            e.startTime = t.endTime;
            break;
          }
        case "getStartDate":
          if (i = tm(undefined, v, tv[t].raw.startTime.startData)) {
            tv[t].startTime = i;
          }
      }
      if (tv[t].startTime) {
        tv[t].endTime = tp(tv[t].startTime, v, tv[t].raw.endTime.data, L);
        if (tv[t].endTime) {
          tv[t].processed = true;
          tv[t].manualEndTime = d(tv[t].raw.endTime.data, "YYYY-MM-DD", true).isValid();
          th(tv[t], v, _, W);
        }
      }
      return tv[t].processed;
    }, "compileTask");
    let e = true;
    for (let [i, r] of tv.entries()) {
      t(i);
      e = e && r.processed;
    }
    return e;
  }, "compileTasks");
  var tS = mermaidConfigUtils.setName(function (t, e) {
    let i = e;
    if (mermaidConfigUtils.getConfigAlias().securityLevel !== "loose") {
      i = urlSanitizer.sanitizeUrl(e);
    }
    t.split(",").forEach(function (t) {
      if (tw(t) !== undefined) {
        tM(t, () => {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFRjF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*95%m5Wa1N*SkZZ$mRH-m1OdFJu%k1Wb$J-$*p*d1$rNHd$$EZN-lR*eFl6Skdl$m96$m5vPQ"
          }), "_self");
        });
        S.set(t, i);
      }
    });
    tF(t, "clickable");
  }, "setLink");
  var tF = mermaidConfigUtils.setName(function (t, e) {
    t.split(",").forEach(function (t) {
      let i = tw(t);
      if (i !== undefined) {
        i.classes.push(e);
      }
    });
  }, "setClass");
  var tE = mermaidConfigUtils.setName(function (t, e, i) {
    if (mermaidConfigUtils.getConfigAlias().securityLevel !== "loose" || e === undefined) {
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
    if (tw(t) !== undefined) {
      tM(t, () => {
        mermaidTextLayoutUtils.textLayoutUtils.runFunc(e, ...r);
      });
    }
  }, "setClickFun");
  var tM = mermaidConfigUtils.setName(function (t, e) {
    D.push(function () {
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
  var tR = mermaidConfigUtils.setName(function (t, e, i) {
    t.split(",").forEach(function (t) {
      tE(t, e, i);
    });
    tF(t, "clickable");
  }, "setClickEvent");
  var tC = mermaidConfigUtils.setName(function (t) {
    D.forEach(function (e) {
      e(t);
    });
  }, "bindFunctions");
  var tD = {
    getConfig: mermaidConfigUtils.setName(() => mermaidConfigUtils.getConfigAlias().gantt, "getConfig"),
    clear: Y,
    setDateFormat: J,
    getDateFormat: Q,
    enableInclusiveEndDates: U,
    endDatesAreInclusive: V,
    enableTopAxis: X,
    topAxisEnabled: q,
    setAxisFormat: O,
    getAxisFormat: P,
    setTickInterval: I,
    getTickInterval: z,
    setTodayMarker: j,
    getTodayMarker: H,
    setAccTitle: mermaidConfigUtils.setAccTitle,
    getAccTitle: mermaidConfigUtils.getAccTitle,
    setDiagramTitle: mermaidConfigUtils.setDiagramTitle,
    getDiagramTitle: mermaidConfigUtils.getDiagramTitle,
    setDisplayMode: G,
    getDisplayMode: K,
    setAccDescription: mermaidConfigUtils.setAccDescription,
    getAccDescription: mermaidConfigUtils.getAccDescription,
    addSection: ta,
    getSections: ts,
    getTasks: to,
    addTask: tT,
    findTaskById: tw,
    addTaskOrg: tW,
    setIncludes: tt,
    getIncludes: te,
    setExcludes: ti,
    getExcludes: tr,
    setClickEvent: tR,
    setLink: tS,
    getLinks: tn,
    bindFunctions: tC,
    parseDuration: ty,
    isInvalidDate: tl,
    setWeekday: tc,
    getWeekday: tu,
    setWeekend: td
  };
  function tL(t, e, i) {
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
  mermaidConfigUtils.setName(tL, "getTaskTags");
  var tN = mermaidConfigUtils.setName(function () {
    mermaidConfigUtils.logger.debug("Something is calling, setConf, remove the call");
  }, "setConf");
  var tZ = {
    monday: axisAndZoomUtilities.Ox9,
    tuesday: axisAndZoomUtilities.YDX,
    wednesday: axisAndZoomUtilities.EFj,
    thursday: axisAndZoomUtilities.Igq,
    friday: axisAndZoomUtilities.y2j,
    saturday: axisAndZoomUtilities.LqH,
    sunday: axisAndZoomUtilities.Zyz
  };
  var tA = mermaidConfigUtils.setName((t, e) => {
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
  var tB = {
    parser: x,
    db: tD,
    renderer: {
      setConf: tN,
      draw: mermaidConfigUtils.setName(function (t, e, i, r) {
        let n;
        let s = mermaidConfigUtils.getConfigAlias().gantt;
        let o = mermaidConfigUtils.getConfigAlias().securityLevel;
        if (o === "sandbox") {
          n = axisAndZoomUtilities.select("#i" + e);
        }
        let c = o === "sandbox" ? axisAndZoomUtilities.select(n.nodes()[0].contentDocument.body) : axisAndZoomUtilities.select("body");
        let u = o === "sandbox" ? n.nodes()[0].contentDocument : document;
        let h = u.getElementById(e);
        if ((a = h.parentElement.offsetWidth) === undefined) {
          a = 1200;
        }
        if (s.useWidth !== undefined) {
          a = s.useWidth;
        }
        let f = r.db.getTasks();
        let m = [];
        for (let t of f) {
          m.push(t.type);
        }
        m = S(m);
        let y = {};
        let p = s.topPadding * 2;
        if (r.db.getDisplayMode() === "compact" || s.displayMode === "compact") {
          let t = {};
          for (let e of f) {
            if (t[e.section] === undefined) {
              t[e.section] = [e];
            } else {
              t[e.section].push(e);
            }
          }
          let e = 0;
          for (let i of Object.keys(t)) {
            let r = tA(t[i], e) + 1;
            e += r;
            p += r * (s.barHeight + s.barGap);
            y[i] = r;
          }
        } else {
          p += f.length * (s.barHeight + s.barGap);
          for (let t of m) {
            y[t] = f.filter(e => e.type === t).length;
          }
        }
        h.setAttribute("viewBox", "0 0 " + a + " " + p);
        let g = c.select(`[id="${e}"]`);
        let x = axisAndZoomUtilities.timeScale().domain([axisAndZoomUtilities.VV$(f, function (t) {
          return t.startTime;
        }), axisAndZoomUtilities.Fp7(f, function (t) {
          return t.endTime;
        })]).rangeRound([0, a - s.leftPadding - s.rightPadding]);
        function b(t, e) {
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
        function v(t, e, i) {
          let n = s.barHeight;
          let a = n + s.barGap;
          let o = s.topPadding;
          let l = s.leftPadding;
          let c = axisAndZoomUtilities.BYU().domain([0, m.length]).range(["#00B9FA", "#F95002"]).interpolate(axisAndZoomUtilities.JHv);
          T(a, o, l, e, i, t, r.db.getExcludes(), r.db.getIncludes());
          w(l, o, e, i);
          $(t, a, o, l, n, c, e, i);
          W(a, o, l, n, c);
          _(l, o, e, i);
        }
        function $(t, i, n, a, o, c, u) {
          t.sort((t, e) => t.vert === e.vert ? 0 : t.vert ? 1 : -1);
          let d = [...new Set(t.map(t => t.order))].map(e => t.find(t => t.order === e));
          g.append("g").selectAll("rect").data(d).enter().append("rect").attr("x", 0).attr("y", function (t, e) {
            return t.order * i + n - 2;
          }).attr("width", function () {
            return u - s.rightPadding / 2;
          }).attr("height", i).attr("class", function (t) {
            for (let [e, i] of m.entries()) {
              if (t.type === i) {
                return "section section" + e % s.numberSectionStyles;
              }
            }
            return "section section0";
          }).enter();
          let h = g.append("g").selectAll("rect").data(t).enter();
          let y = r.db.getLinks();
          h.append("rect").attr("id", function (t) {
            return t.id;
          }).attr("rx", 3).attr("ry", 3).attr("x", function (t) {
            if (t.milestone) {
              return x(t.startTime) + a + (x(t.endTime) - x(t.startTime)) * 0.5 - o * 0.5;
            } else {
              return x(t.startTime) + a;
            }
          }).attr("y", function (t, e) {
            e = t.order;
            if (t.vert) {
              return s.gridLineStartPadding;
            } else {
              return e * i + n;
            }
          }).attr("width", function (t) {
            if (t.milestone) {
              return o;
            } else if (t.vert) {
              return o * 0.08;
            } else {
              return x(t.renderEndTime || t.endTime) - x(t.startTime);
            }
          }).attr("height", function (t) {
            if (t.vert) {
              return f.length * (s.barHeight + s.barGap) + s.barHeight * 2;
            } else {
              return o;
            }
          }).attr("transform-origin", function (t, e) {
            e = t.order;
            return (x(t.startTime) + a + (x(t.endTime) - x(t.startTime)) * 0.5).toString() + "px " + (e * i + n + o * 0.5).toString() + "px";
          }).attr("class", function (t) {
            let e = "";
            if (t.classes.length > 0) {
              e = t.classes.join(" ");
            }
            let i = 0;
            for (let [e, r] of m.entries()) {
              if (t.type === r) {
                i = e % s.numberSectionStyles;
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
          }).attr("font-size", s.fontSize).attr("x", function (t) {
            let e = x(t.startTime);
            let i = x(t.renderEndTime || t.endTime);
            if (t.milestone) {
              e += (x(t.endTime) - x(t.startTime)) * 0.5 - o * 0.5;
              i = e + o;
            }
            if (t.vert) {
              return x(t.startTime) + a;
            }
            let r = this.getBBox().width;
            if (r > i - e) {
              if (i + r + s.leftPadding * 1.5 > u) {
                return e + a - 5;
              } else {
                return i + a + 5;
              }
            } else {
              return (i - e) / 2 + e + a;
            }
          }).attr("y", function (t, e) {
            if (t.vert) {
              return s.gridLineStartPadding + f.length * (s.barHeight + s.barGap) + 60;
            } else {
              return t.order * i + s.barHeight / 2 + (s.fontSize / 2 - 2) + n;
            }
          }).attr("text-height", o).attr("class", function (t) {
            let e = x(t.startTime);
            let i = x(t.endTime);
            if (t.milestone) {
              i = e + o;
            }
            let r = this.getBBox().width;
            let n = "";
            if (t.classes.length > 0) {
              n = t.classes.join(" ");
            }
            let a = 0;
            for (let [e, i] of m.entries()) {
              if (t.type === i) {
                a = e % s.numberSectionStyles;
              }
            }
            let l = "";
            if (t.active) {
              l = t.crit ? "activeCritText" + a : "activeText" + a;
            }
            if (t.done) {
              l = t.crit ? l + " doneCritText" + a : l + " doneText" + a;
            } else if (t.crit) {
              l = l + " critText" + a;
            }
            if (t.milestone) {
              l += " milestoneText";
            }
            if (t.vert) {
              l += " vertText";
            }
            if (r > i - e) {
              if (i + r + s.leftPadding * 1.5 > u) {
                return n + " taskTextOutsideLeft taskTextOutside" + a + " " + l;
              } else {
                return n + " taskTextOutsideRight taskTextOutside" + a + " " + l + " width-" + r;
              }
            } else {
              return n + " taskText taskText" + a + " " + l + " width-" + r;
            }
          });
          if (mermaidConfigUtils.getConfigAlias().securityLevel === "sandbox") {
            let t = axisAndZoomUtilities.select("#i" + e).nodes()[0].contentDocument;
            h.filter(function (t) {
              return y.has(t.id);
            }).each(function (e) {
              var i = t.querySelector("#" + e.id);
              var r = t.querySelector("#" + e.id + "-text");
              let n = i.parentNode;
              var a = t.createElement("a");
              a.setAttribute("xlink:href", y.get(e.id));
              a.setAttribute("target", "_top");
              n.appendChild(a);
              a.appendChild(i);
              a.appendChild(r);
            });
          }
        }
        function T(t, e, i, n, a, o, c, u) {
          let h;
          let f;
          if (c.length === 0 && u.length === 0) {
            return;
          }
          for (let {
            startTime: t,
            endTime: e
          } of o) {
            if (h === undefined || t < h) {
              h = t;
            }
            if (f === undefined || e > f) {
              f = e;
            }
          }
          if (!h || !f) {
            return;
          }
          if (d(f).diff(d(h), "year") > 5) {
            mermaidConfigUtils.logger.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");
            return;
          }
          let m = r.db.getDateFormat();
          let y = [];
          let p = null;
          let k = d(h);
          while (k.valueOf() <= f) {
            if (r.db.isInvalidDate(k, m, c, u)) {
              if (p) {
                p.end = k;
              } else {
                p = {
                  start: k,
                  end: k
                };
              }
            } else if (p) {
              y.push(p);
              p = null;
            }
            k = k.add(1, "d");
          }
          g.append("g").selectAll("rect").data(y).enter().append("rect").attr("id", t => "exclude-" + t.start.format("YYYY-MM-DD")).attr("x", t => x(t.start.startOf("day")) + i).attr("y", s.gridLineStartPadding).attr("width", t => x(t.end.endOf("day")) - x(t.start.startOf("day"))).attr("height", a - e - s.gridLineStartPadding).attr("transform-origin", function (e, r) {
            return (x(e.start) + i + (x(e.end) - x(e.start)) * 0.5).toString() + "px " + (r * t + a * 0.5).toString() + "px";
          }).attr("class", "exclude-range");
        }
        function w(t, e, i, n) {
          let a;
          let o = r.db.getDateFormat();
          let l = r.db.getAxisFormat();
          if (l) {
            a = l;
          } else if (o === "D") {
            a = "%d";
          } else {
            a = s.axisFormat ?? "%Y-%m-%d";
          }
          let u = axisAndZoomUtilities.LLu(x).tickSize(-n + e + s.gridLineStartPadding).tickFormat(axisAndZoomUtilities.i$Z(a));
          let d = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval() || s.tickInterval);
          if (d !== null) {
            let t = d[1];
            let e = d[2];
            let i = r.db.getWeekday() || s.weekday;
            switch (e) {
              case "millisecond":
                u.ticks(axisAndZoomUtilities.U8T.every(t));
                break;
              case "second":
                u.ticks(axisAndZoomUtilities.S1K.every(t));
                break;
              case "minute":
                u.ticks(axisAndZoomUtilities.Z_i.every(t));
                break;
              case "hour":
                u.ticks(axisAndZoomUtilities.WQD.every(t));
                break;
              case "day":
                u.ticks(axisAndZoomUtilities.rr1.every(t));
                break;
              case "week":
                u.ticks(tZ[i].every(t));
                break;
              case "month":
                u.ticks(axisAndZoomUtilities.F0B.every(t));
            }
          }
          g.append("g").attr("class", "grid").attr("transform", "translate(" + t + ", " + (n - 50) + ")").call(u).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em");
          if (r.db.topAxisEnabled() || s.topAxis) {
            let i = axisAndZoomUtilities.F5q(x).tickSize(-n + e + s.gridLineStartPadding).tickFormat(axisAndZoomUtilities.i$Z(a));
            if (d !== null) {
              let t = d[1];
              let e = d[2];
              let n = r.db.getWeekday() || s.weekday;
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
                  i.ticks(tZ[n].every(t));
                  break;
                case "month":
                  i.ticks(axisAndZoomUtilities.F0B.every(t));
              }
            }
            g.append("g").attr("class", "grid").attr("transform", "translate(" + t + ", " + e + ")").call(i).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
          }
        }
        function W(t, e) {
          let i = 0;
          let r = Object.keys(y).map(t => [t, y[t]]);
          g.append("g").selectAll("text").data(r).enter().append(function (t) {
            let e = t[0].split(mermaidConfigUtils.textUtils.lineBreakRegex);
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
          }).attr("x", 10).attr("y", function (n, a) {
            if (!(a > 0)) {
              return n[1] * t / 2 + e;
            }
            for (let s = 0; s < a; s++) {
              i += r[a - 1][1];
              return n[1] * t / 2 + i * t + e;
            }
          }).attr("font-size", s.sectionFontSize).attr("class", function (t) {
            for (let [e, i] of m.entries()) {
              if (t[0] === i) {
                return "sectionTitle sectionTitle" + e % s.numberSectionStyles;
              }
            }
            return "sectionTitle";
          });
        }
        function _(t, e, i, n) {
          let a = r.db.getTodayMarker();
          if (a === "off") {
            return;
          }
          let o = g.append("g").attr("class", "today");
          let l = new Date();
          let c = o.append("line");
          c.attr("x1", x(l) + t).attr("x2", x(l) + t).attr("y1", s.titleTopMargin).attr("y2", n - s.titleTopMargin).attr("class", "today");
          if (a !== "") {
            c.attr("style", a.replace(/,/g, ";"));
          }
        }
        function S(t) {
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
        mermaidConfigUtils.setName(b, "taskCompare");
        f.sort(b);
        v(f, a, p);
        mermaidConfigUtils.configureSvgSize(g, p, a, s.useMaxWidth);
        g.append("text").text(r.db.getDiagramTitle()).attr("x", a / 2).attr("y", s.titleTopMargin).attr("class", "titleText");
        mermaidConfigUtils.setName(v, "makeGantt");
        mermaidConfigUtils.setName($, "drawRects");
        mermaidConfigUtils.setName(T, "drawExcludeDays");
        mermaidConfigUtils.setName(w, "makeGrid");
        mermaidConfigUtils.setName(W, "vertLabels");
        mermaidConfigUtils.setName(_, "drawToday");
        mermaidConfigUtils.setName(S, "checkUnique");
      }, "draw")
    },
    styles: mermaidConfigUtils.setName(t => `
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
      return tB;
    }
  });
}