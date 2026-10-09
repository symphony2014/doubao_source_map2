// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zo' to 'hasReminder'
// - Renamed export '_k' to 'updateReminderComponent'
// - Renamed export '_q' to 'formatTimestamp'
// - Renamed export 'vK' to 'insertReminder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 25358
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var chatUserInfoService = require("chat-user-info-service") /*id: 152763*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var momentJsCoreLib = require("moment-js-core-lib") /*id: 132840*/;
  var f = momentJsCoreLib;
  require("docx-user-detail-manager") /*id: 794466*/;
  require("browser-environment-detection-utils") /*id: 744607*/;
  require("docx-i18n-text-util") /*id: 979462*/;
  require("docx-view-state-util") /*id: 596609*/;
  require("doc-block-zoom-utils") /*id: 735944*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var docxEquationBlockRenderer = require("docx-equation-block-renderer") /*id: 541234*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  require("react-core-library-reexport") /*id: 634663*/;
  require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  require("content-mode-types") /*id: 145497*/;
  var editorRevisionAddHandler = require("editor-revision-add-handler") /*id: 856858*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var docInlineComponentUtils = require("doc-inline-component-utils") /*id: 595942*/;
  function k(e, n, r) {
    var i;
    if ((n = typeof (i = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, n || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  var S = class {
    constructor(e) {
      k(this, "yesterday", undefined);
      k(this, "today", undefined);
      k(this, "tomorrow", undefined);
      k(this, "getToday", () => this.today);
      k(this, "getYesterday", () => this.yesterday);
      k(this, "getTomorrow", () => this.tomorrow);
      this.yesterday = e.yesterday;
      this.today = e.today;
      this.tomorrow = e.tomorrow;
    }
  };
  function j(e, n, r) {
    var i;
    if ((n = typeof (i = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, n || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  var P = new class extends S {
    constructor() {
      super({
        yesterday: "昨天",
        today: "今天",
        tomorrow: "明天"
      });
      j(this, "weekMap", {
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六",
        7: "日"
      });
      j(this, "getMonthDay", (e, n) => `${e}\u{6708}${n}\u{65E5}`);
      j(this, "getYearMonthDay", (e, n, r) => `${e}\u{5E74}${n}\u{6708}${r}\u{65E5}`);
      j(this, "getCurrentWeek", e => `\u{672C}\u{5468}${this.weekMap[e]}`);
      j(this, "getNextWeek", e => `\u{4E0B}\u{5468}${this.weekMap[e]}`);
    }
  }();
  function C(e, n, r) {
    var i;
    if ((n = typeof (i = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, n || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  var R = new class extends S {
    constructor() {
      super({
        yesterday: "Yesterday",
        today: "Today",
        tomorrow: "Tomorrow"
      });
      C(this, "weekMap", {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
      });
      C(this, "monthMap", {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
      });
      C(this, "getMonthDay", (e, n) => `${this.monthMap[e]} ${n}`);
      C(this, "getYearMonthDay", (e, n, r) => `${this.monthMap[n]} ${r}, ${e}`);
      C(this, "getCurrentWeek", e => this.weekMap[e]);
      C(this, "getNextWeek", e => `Next ${this.weekMap[e]}`);
    }
  }();
  function D(e, n, r) {
    var i;
    if ((n = typeof (i = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, n || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  var O = new class extends S {
    constructor() {
      super({
        yesterday: "昨日",
        today: "今日",
        tomorrow: "明日"
      });
      D(this, "weekMap", {
        1: "月",
        2: "火",
        3: "水",
        4: "木",
        5: "金",
        6: "土",
        7: "日"
      });
      D(this, "getMonthDay", (e, n) => `${e}\u{6708}${n}\u{65E5}`);
      D(this, "getYearMonthDay", (e, n, r) => `${e}\u{5E74}${n}\u{6708}${r}\u{65E5}`);
      D(this, "getCurrentWeek", e => `${this.weekMap[e]}\u{66DC}\u{65E5}`);
      D(this, "getNextWeek", e => `\u{6B21}\u{306E}${this.weekMap[e]}\u{66DC}\u{65E5}`);
    }
  }();
  function M(e, n, r) {
    var i;
    if ((n = typeof (i = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, n || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  (i = {})["zh-CN"] = "cn";
  i["zh-cn"] = "cn";
  i.cn = "cn";
  i.en = "en";
  i["en-US"] = "en";
  i["en-us"] = "en";
  i.ja = "ja";
  i["ja-JP"] = "ja";
  i["ja-jp"] = "ja";
  let w = i;
  class N {
    getLocale() {
      let e = platformDocUtils.HiA.getLocale();
      if (e) {
        if (e.indexOf("zh") !== -1) {
          return "cn";
        }
        if (e.indexOf("ja") !== -1) {
          return "ja";
        }
      }
      return "en";
    }
    static setLanguage(e) {
      if (e in w) {
        N.language = e;
      }
      return N.language;
    }
    getFormatedDate(e) {
      var n = arguments.length;
      var r = Array(n > 1 ? n - 1 : 0);
      var i = 1;
      for (; i < n; i++) {
        r[i - 1] = arguments[i];
      }
      let o = w[this.getLocale()];
      let s = this.locale[o][e];
      return s && s(...r);
    }
    getFormateTime(e, n) {
      if (w[this.getLocale()] === "en") {
        let r = Number(e);
        return ` ${r % 12 || 12}:${n} ${r > 11 ? "PM" : "AM"}`;
      }
      return ` ${e}:${n}`;
    }
    constructor() {
      M(this, "locale", undefined);
      this.locale = {
        cn: P,
        en: R,
        ja: O
      };
      N.language = w[this.getLocale()];
    }
  }
  M(N, "language", w.en);
  (o = {}).today = "getToday";
  o.yesterday = "getYesterday";
  o.tomorrow = "getTomorrow";
  o.monthDay = "getMonthDay";
  o.yearMonthDay = "getYearMonthDay";
  o.currentWeek = "getCurrentWeek";
  o.nextWeek = "getNextWeek";
  let A = o;
  let L = new class {
    static setLanguage(e) {
      N.setLanguage(e);
    }
    getTimeString(e, n) {
      let r = "";
      let i = new Date(e);
      let o = new Date();
      let s = this.parseDate(i);
      let l = this.parseDate(o);
      r = this.getNormalDateStr(s, l);
      if (n) {
        let e = this.parseTimeIfNeeded(s.hour);
        let n = this.parseTimeIfNeeded(s.minute);
        r += this.i18nDate.getFormateTime(e, n);
      }
      return r;
    }
    getSimpleTimeString(e, n) {
      let r = "";
      let i = new Date(e);
      let o = new Date();
      let s = this.parseDate(i);
      let l = this.parseDate(o);
      r = this.getNormalDateStr(s, l, true);
      if (n) {
        let e = this.parseTimeIfNeeded(s.hour);
        let n = this.parseTimeIfNeeded(s.minute);
        r += this.i18nDate.getFormateTime(e, n);
      }
      return r;
    }
    parseDate(e) {
      let n = e.getDay();
      n = n === 0 ? 7 : n;
      return {
        year: e.getFullYear(),
        month: e.getMonth() + 1,
        date: e.getDate(),
        hour: e.getHours(),
        minute: e.getMinutes(),
        second: e.getSeconds(),
        day: n,
        time: e.getTime()
      };
    }
    parseTimeIfNeeded(e) {
      let n = String(e);
      if (n.length === 1) {
        return `0${e}`;
      } else {
        return n;
      }
    }
    getNormalDateStr(e, n, r) {
      let i = "";
      let {
        year: o,
        month: s,
        date: l
      } = e;
      let {
        dateWeeks: u,
        nowWeeks: a
      } = this.getRealWeek(e, n);
      if (e.year !== n.year) {
        return this.i18nDate.getFormatedDate(A.yearMonthDay, o, s, l);
      } else if (u - a >= 2 || u - a <= -1) {
        if (n.date - e.date == 1 && u - a == -1 && s === n.month) {
          return this.i18nDate.getFormatedDate(A.yesterday);
        } else {
          return this.i18nDate.getFormatedDate(A.monthDay, s, l);
        }
      } else if (e.date === n.date) {
        return this.i18nDate.getFormatedDate(A.today);
      } else if (n.date - e.date == 1) {
        return this.i18nDate.getFormatedDate(A.yesterday);
      } else if (e.date - n.date == 1) {
        return this.i18nDate.getFormatedDate(A.tomorrow);
      } else if (r) {
        return this.i18nDate.getFormatedDate(A.monthDay, s, l);
      } else if (u - a >= 1) {
        return this.i18nDate.getFormatedDate(A.nextWeek, e.day);
      } else {
        return this.i18nDate.getFormatedDate(A.currentWeek, e.day);
      }
    }
    getRealWeek(e, n) {
      let r = new Date(new Date(e.time).setHours(0, 0, 0, 0)).getTime();
      return {
        dateWeeks: Math.ceil((r / 86400000 + 4) / 7),
        nowWeeks: Math.ceil((new Date(new Date(n.time).setHours(0, 0, 0, 0)).getTime() / 86400000 + 4) / 7)
      };
    }
    constructor() {
      var e;
      var n;
      var r;
      n = undefined;
      if ((e = typeof (r = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, n || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
      }(e = "i18nDate", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = n;
      }
      this.i18nDate = new N();
    }
  }();
  var docxReminderConstants = require("docx-reminder-constants") /*id: 770772*/;
  let B = function (e = {}) {
    let {
      isNow: n,
      isToday: r,
      isTomorrow: i
    } = e;
    let o = f();
    if (!n && !r) {
      o.add(1, "days");
    }
    if (!n) {
      let e = f().minute() < docxReminderConstants.limitValue ? 0 : docxReminderConstants.limitValue;
      o.set("minute", e);
    }
    let s = o.set("second", 0).set("millisecond", 0).valueOf();
    let u = s;
    if (r || i) {
      s = o.set("hour", docxReminderConstants.reminderTypeId).set("minute", docxReminderConstants.actionId).set("second", docxReminderConstants.optionId).valueOf();
      u = o.set("hour", docxReminderConstants.viewId).set("minute", 0).set("second", 0).valueOf();
    }
    return {
      is_whole_day: !!r || !!i,
      should_notify: true,
      notify_time: u,
      expire_time: s,
      create_user_id: chatUserInfoService.userInfoService.getCurrentUser().get("id") || window.User.id
    };
  };
  async function $(e, n, r = {}) {
    let {
      zoneId: i
    } = e.model;
    let o = editorRangeUtilities.convertRangeWithZone(e, [n.start, n.start + n.len]);
    let l = e.model.zoneState.getEntities(o).reduce((e, n) => e += n.text, "");
    let u = l.slice(1).startsWith("n");
    let a = l.slice(1).startsWith("tod");
    let d = l.slice(1).startsWith("tom");
    let f = !!r.reminderProps;
    let h = r.reminderProps || docInlineComponentUtils.createBlockObject(inlineComponentConstants.mentionTypes.REMINDER, B({
      isNow: u,
      isToday: a,
      isTomorrow: d
    }));
    let g = {};
    let k = {};
    if (r.isInitReminder || !f) {
      let [r, i] = editorRevisionAddHandler.getRevisionInfo(e, editorRangeUtilities.convertRangeWithZone(e, editorRangeUtilities.getStartLenArray(n)));
      if (r && i) {
        g[r[0]] = r[1];
        k.extra = {
          revisionContext: i
        };
      }
    }
    k.afterTransactionAccepted = () => {
      if (r.openPopover) {
        let e = h.id;
        docxEditorEventConstantsAndManager.globalEventBus.emit(docxReminderConstants.popoverCommand, e);
      }
    };
    await e.blockManager.applyTransaction("addReminder", r => {
      let l = e.model.getAttributes(o.start, o.end).toMap();
      let u = throttledOmitPathStringify.omitPathStringify(l, [displayTypeConstants.displayInlineBlock, docxEquationBlockRenderer.EquationRenderer.KEY, "objectID"]);
      let a = new contentStructureDelta.ContentDelta({
        zoneId: i
      }).retain(n.start).delete(n.len).insert(" ", {
        ...u,
        ...g,
        [inlineComponentConstants.componentType]: JSON.stringify(h)
      });
      e.model.apply(a, {
        extra: {
          op: r
        }
      });
      r.replace(e.record.id, ["text"], e.model.zoneState.toAttributeText());
    }, k);
    let {
      focus: S,
      openPopover: j
    } = r;
    if (S) {
      let r = n.start + 1;
      e.blockManager.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey).setSelection([{
        id: e.id,
        type: docxBlockSelectionHandler_1.blockTypes.TEXT,
        selection: {
          start: r,
          end: r
        }
      }]);
    }
    if (j) {
      let e = h.id;
      docxEditorEventConstantsAndManager.globalEventBus.emit(docxReminderConstants.popoverCommand, e);
    }
  }
  function F(e, n, r) {
    let i;
    platformDocUtils.p5T(n);
    platformDocUtils.p5T(e);
    try {
      i = r.getRecord(n);
    } catch (e) {
      return false;
    }
    if (!i) {
      return false;
    }
    let o = contentDeltaUtilityFunctions.C(i.snapshot.text);
    let s = false;
    o.get(editorModuleConstantsConfig.defaultVersion).ops.forEach(n => {
      if (n.attributes?.[inlineComponentConstants.componentType]) {
        let r = docInlineComponentUtils.getComponentType(n);
        if ((r == null ? undefined : r.type) === inlineComponentConstants.mentionTypes.REMINDER && r.id === e) {
          s = true;
        }
      }
    });
    return s;
  }
  let q = (e, n) => {
    var r;
    r = !n;
    if (isNumberUtil.isNumber(e)) {
      return L.getTimeString(e, r);
    } else {
      return e;
    }
  };
  let V = (e, n, r, i) => {
    try {
      let {
        model: o
      } = e;
      let {
        zoneState: s
      } = e.model;
      if (o != null) {
        o.setAttributes(editorRangeUtilities.createRangeWithZone(s, n), {
          [inlineComponentConstants.componentType]: JSON.stringify(r)
        });
      }
      if (i) {
        let r = editorRangeUtilities.toPosition(n).start + 1;
        e.blockManager.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey).setSelection([{
          id: e.id,
          type: docxBlockSelectionHandler_1.blockTypes.TEXT,
          selection: {
            start: r,
            end: r
          }
        }]);
      }
    } catch (e) {}
  };
  require.d(exports, {
    hasReminder: function () {
      return F;
    },
    updateReminderComponent: function () {
      return V;
    },
    formatTimestamp: function () {
      return q;
    },
    insertReminder: function () {
      return $;
    }
  });
}