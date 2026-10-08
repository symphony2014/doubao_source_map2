// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DatePicker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 927627
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var safeObjectPathUtils = require("safe-object-path-utils") /*id: 881861*/;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  var logLevelTypes = require("log-level-types") /*id: 818674*/;
  var tooltipPopoverConstants = require("tooltip-popover-constants") /*id: 126132*/;
  let l = {
    DAY_TODAY: `${semiIdentifier.semiIdentifier}-datepicker-day-today`,
    DAY_IN_RANGE: `${semiIdentifier.semiIdentifier}-datepicker-day-inrange`,
    DAY_HOVER: `${semiIdentifier.semiIdentifier}-datepicker-day-inhover`,
    DAY_SELECTED: `${semiIdentifier.semiIdentifier}-datepicker-day-selected`,
    DAY_SELECTED_START: `${semiIdentifier.semiIdentifier}-datepicker-day-selected-start`,
    DAY_SELECTED_END: `${semiIdentifier.semiIdentifier}-datepicker-day-selected-end`,
    DAY_DISABLED: `${semiIdentifier.semiIdentifier}-datepicker-day-disabled`,
    DAY_HOVER_DAY: `${semiIdentifier.semiIdentifier}-datepicker-day-hoverday`,
    DAY_HOVER_DAY_OFFSET: `${semiIdentifier.semiIdentifier}-datepicker-day-hoverday-offset`,
    DAY_IN_OFFSET_RANGE: `${semiIdentifier.semiIdentifier}-datepicker-day-inoffsetrange`,
    DAY_SELECTED_RANGE_HOVER: `${semiIdentifier.semiIdentifier}-datepicker-day-selectedrange-hover`,
    DAY_OFFSET_RANGE_START: `${semiIdentifier.semiIdentifier}-datepicker-day-offsetrange-start`,
    DAY_OFFSET_RANGE_END: `${semiIdentifier.semiIdentifier}-datepicker-day-offsetrange-end`,
    DAY_SELECTED_START_AFTER_HOVER: `${semiIdentifier.semiIdentifier}-datepicker-day-selected-start-afterhover`,
    DAY_SELECTED_END_BEFORE_HOVER: `${semiIdentifier.semiIdentifier}-datepicker-day-selected-end-beforehover`,
    DAY_HOVER_DAY_BEFORE_RANGE: `${semiIdentifier.semiIdentifier}-datepicker-day-hoverday-beforerange`,
    DAY_HOVER_DAY_AFTER_RANGE: `${semiIdentifier.semiIdentifier}-datepicker-day-hoverday-afterrange`,
    DAY_HOVER_DAY_IN_RANGE: `${semiIdentifier.semiIdentifier}-datepicker-day-hoverday-inrange`,
    DAY_HOVER_DAY_AROUND_SINGLE_SELECTED: `${semiIdentifier.semiIdentifier}-datepicker-day-hoverday-around-singleselected`
  };
  let u = Object.assign({
    PREFIX: `${semiIdentifier.semiIdentifier}-datepicker`,
    NAVIGATION: `${semiIdentifier.semiIdentifier}-datepicker-navigation`,
    PANEL_YAM: `${semiIdentifier.semiIdentifier}-datepicker-panel-yam`,
    MONTH: `${semiIdentifier.semiIdentifier}-datepicker-month`,
    WEEKDAY: `${semiIdentifier.semiIdentifier}-datepicker-weekday`,
    WEEKS: `${semiIdentifier.semiIdentifier}-datepicker-weeks`,
    WEEK: `${semiIdentifier.semiIdentifier}-datepicker-week`,
    DAY: `${semiIdentifier.semiIdentifier}-datepicker-day`
  }, l);
  let d = Object.assign({
    DEFAULT_SEPARATOR_MULTIPLE: ",",
    DEFAULT_SEPARATOR_RANGE: " ~ ",
    SIZE_SET: ["small", "default", "large"],
    TYPE_SET: ["date", "dateRange", "year", "month", "monthRange", "dateTime", "dateTimeRange"],
    PRESET_POSITION_SET: ["left", "right", "top", "bottom"],
    DENSITY_SET: ["default", "compact"],
    PANEL_TYPE_LEFT: "left",
    PANEL_TYPE_RIGHT: "right",
    STATUS: logLevelTypes.logLevels,
    POSITION_SET: tooltipPopoverConstants.tooltipOptions.POSITION_SET,
    POSITION_INLINE_INPUT: "leftTopOver"
  }, {
    FORMAT_FULL_DATE: "yyyy-MM-dd",
    FORMAT_TIME_PICKER: "HH:mm:ss",
    FORMAT_DATE_TIME: "yyyy-MM-dd HH:mm:ss",
    FORMAT_YEAR_MONTH: "yyyy-MM"
  });
  let c = {
    WEEK_START_ON: 0,
    WEEK_HEIGHT: 36,
    SPACING: tooltipPopoverConstants.tooltipLayout.SPACING,
    SPACING_INSET_INPUT: 1
  };
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isDateUtil_1 = require("is-date-util_1") /*id: 650513*/;
  var alwaysFalseUtil = require("always-false-util") /*id: 843723*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var b = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var _ = propTypesFactoryWrapper;
  var createContextProvider = require("create-context-provider") /*id: 289192*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var dateValidationUtil_1 = require("date-validation-util_1") /*id: 152056*/;
  var dateNormalizer = require("date-normalizer") /*id: 414214*/;
  var validateArgumentCount = require("validate-argument-count") /*id: 131411*/;
  function R(e) {
    validateArgumentCount.validateArgCount(1, arguments);
    var t = dateNormalizer.normalizeDate(e);
    t.setMilliseconds(0);
    return t;
  }
  function M(e, t) {
    validateArgumentCount.validateArgCount(2, arguments);
    var n = R(e);
    var a = R(t);
    return n.getTime() === a.getTime();
  }
  function I(e, t) {
    validateArgumentCount.validateArgCount(2, arguments);
    var n = dateNormalizer.normalizeDate(e);
    var a = dateNormalizer.normalizeDate(t);
    return n.getTime() === a.getTime();
  }
  var dateInstanceValidator = require("date-instance-validator") /*id: 8954*/;
  var dateFormatUtil = require("date-format-util") /*id: 251899*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var dateValidationUtil = require("date-validation-util") /*id: 571627*/;
  function x(e) {
    return (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]") && dateValidationUtil.isValidDate(new Date(e));
  }
  var nullCheckUtil_1 = require("null-check-util_1") /*id: 179154*/;
  var timezoneConversionUtils = require("timezone-conversion-utils") /*id: 986472*/;
  var dateFormatParser = require("date-format-parser") /*id: 637973*/;
  var timeConstantsMs = require("time-constants-ms") /*id: 52003*/;
  var numberToIntegerConverter = require("number-to-integer-converter") /*id: 156285*/;
  function H(e, t) {
    validateArgumentCount.validateArgCount(1, arguments);
    var a;
    var r;
    var i = numberToIntegerConverter.toInteger((t == null ? undefined : t.additionalDigits) ?? 2);
    if (i !== 2 && i !== 1 && i !== 0) {
      throw RangeError("additionalDigits must be 0, 1 or 2");
    }
    if (typeof e != "string" && Object.prototype.toString.call(e) !== "[object String]") {
      return new Date(NaN);
    }
    var o = function (e) {
      var t;
      var n = {};
      var a = e.split($.dateTimeDelimiter);
      if (a.length > 2) {
        return n;
      }
      if (/:/.test(a[0])) {
        t = a[0];
      } else {
        n.date = a[0];
        t = a[1];
        if ($.timeZoneDelimiter.test(n.date)) {
          n.date = e.split($.timeZoneDelimiter)[0];
          t = e.substr(n.date.length, e.length);
        }
      }
      if (t) {
        var r = $.timezone.exec(t);
        if (r) {
          n.time = t.replace(r[1], "");
          n.timezone = r[1];
        } else {
          n.time = t;
        }
      }
      return n;
    }(e);
    if (o.date) {
      var s = function (e, t) {
        var n = RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)");
        var a = e.match(n);
        if (!a) {
          return {
            year: NaN,
            restDateString: ""
          };
        }
        var r = a[1] ? parseInt(a[1]) : null;
        var i = a[2] ? parseInt(a[2]) : null;
        return {
          year: i === null ? r : i * 100,
          restDateString: e.slice((a[1] || a[2]).length)
        };
      }(o.date, i);
      a = function (e, t) {
        if (t === null) {
          return new Date(NaN);
        }
        var n;
        var a;
        var r;
        var i;
        var o;
        var s;
        var l;
        var u;
        var d;
        var c;
        var h;
        var f;
        var p;
        var g = e.match(V);
        if (!g) {
          return new Date(NaN);
        }
        var m = !!g[4];
        var v = B(g[1]);
        var y = B(g[2]) - 1;
        var T = B(g[3]);
        var b = B(g[4]);
        var w = B(g[5]) - 1;
        if (m) {
          n = 0;
          a = b;
          r = w;
          if (a >= 1 && a <= 53 && r >= 0 && r <= 6) {
            i = t;
            o = b;
            s = w;
            (l = new Date(0)).setUTCFullYear(i, 0, 4);
            u = l.getUTCDay() || 7;
            l.setUTCDate(l.getUTCDate() + ((o - 1) * 7 + s + 1 - u));
            return l;
          } else {
            return new Date(NaN);
          }
        }
        var _ = new Date(0);
        d = t;
        c = y;
        h = T;
        if (c >= 0 && c <= 11 && h >= 1 && h <= (z[c] || (X(d) ? 29 : 28)) && (f = t, (p = v) >= 1 && p <= (X(f) ? 366 : 365))) {
          _.setUTCFullYear(t, y, Math.max(v, T));
          return _;
        } else {
          return new Date(NaN);
        }
      }(s.restDateString, s.year);
    }
    if (!a || isNaN(a.getTime())) {
      return new Date(NaN);
    }
    var l = a.getTime();
    var u = 0;
    if (o.time && isNaN(u = function (e) {
      var t;
      var n;
      var a;
      var r = e.match(W);
      if (!r) {
        return NaN;
      }
      var i = q(r[1]);
      var o = q(r[2]);
      var s = q(r[3]);
      t = i;
      n = o;
      a = s;
      if (t === 24 ? n === 0 && a === 0 : a >= 0 && a < 60 && n >= 0 && n < 60 && t >= 0 && t < 25) {
        return i * timeConstantsMs.msPerHour + o * timeConstantsMs.msPerMinute + s * 1000;
      } else {
        return NaN;
      }
    }(o.time))) {
      return new Date(NaN);
    }
    if (o.timezone) {
      if (isNaN(r = function (e) {
        if (e === "Z") {
          return 0;
        }
        var t;
        var n;
        var a = e.match(G);
        if (!a) {
          return 0;
        }
        var r = a[1] === "+" ? -1 : 1;
        var i = parseInt(a[2]);
        var o = a[3] && parseInt(a[3]) || 0;
        t = 0;
        if ((n = o) >= 0 && n <= 59) {
          return r * (i * timeConstantsMs.msPerHour + o * timeConstantsMs.msPerMinute);
        } else {
          return NaN;
        }
      }(o.timezone))) {
        return new Date(NaN);
      }
    } else {
      var d = new Date(l + u);
      var c = new Date(0);
      c.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
      c.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
      return c;
    }
    return new Date(l + u + r);
  }
  var $ = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/
  };
  var V = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
  var W = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
  var G = /^([+-])(\d{2})(?::?(\d{2}))?$/;
  function B(e) {
    if (e) {
      return parseInt(e);
    } else {
      return 1;
    }
  }
  function q(e) {
    return e && parseFloat(e.replace(",", ".")) || 0;
  }
  var z = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function X(e) {
    return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
  }
  function Q(e, t, n, a) {
    let r = null;
    if (e) {
      if (t) {
        n = n || new Date();
        r = dateFormatParser.parseDate(e, t, n, {
          locale: a
        });
      }
      if (!dateValidationUtil_1.isValidDate(r)) {
        r = H(e);
      }
      if (!dateValidationUtil_1.isValidDate(r)) {
        r = new Date(Date.parse(e));
      }
      let i = dateValidationUtil_1.isValidDate(r) && String(r.getFullYear()).length > 4;
      if (!dateValidationUtil_1.isValidDate(r) || i) {
        r = null;
      }
    }
    return r;
  }
  let K = {
    date: d.FORMAT_FULL_DATE,
    dateTime: d.FORMAT_DATE_TIME,
    dateRange: d.FORMAT_FULL_DATE,
    dateTimeRange: d.FORMAT_DATE_TIME,
    month: d.FORMAT_YEAR_MONTH,
    monthRange: d.FORMAT_YEAR_MONTH
  };
  function J(e) {
    return e && K[e];
  }
  var ee = e => K;
  var semiInputConstants = require("semi-input-constants") /*id: 859366*/;
  function en(e) {
    let t;
    let {
      format: n,
      type: a
    } = e;
    let r = J(a);
    switch (a) {
      case "dateTime":
      case "dateTimeRange":
        let i = /([yMd]{0,4}[^a-z\s]*[yMd]{0,4}[^a-z\s]*[yMd]{0,4}) (H{0,2}[^a-z\s]*m{0,2}[^a-z\s]*s{0,2})/i.exec(n);
        t = i && i[1] && i[2] ? `${i[1]} ${i[2]}` : r;
        break;
      default:
        let o = /([yMd]{0,4}[^a-z\s]*[yMd]{0,4}[^a-z\s]*[yMd]{0,4})/i.exec(n);
        t = o && o[1] || r;
    }
    return t;
  }
  function ea(e) {
    let t;
    let n;
    let a;
    let r;
    let {
      inputValue: i = "",
      rangeSeparator: o,
      type: s
    } = e;
    let l = {
      monthLeft: {
        dateInput: "",
        timeInput: ""
      },
      monthRight: {
        dateInput: "",
        timeInput: ""
      }
    };
    switch (s) {
      case "date":
      case "month":
      case "monthRange":
        l.monthLeft.dateInput = i;
        break;
      case "dateRange":
        [t = "", a = ""] = i.split(o);
        l.monthLeft.dateInput = t;
        l.monthRight.dateInput = a;
        break;
      case "dateTime":
        [t = "", n = ""] = i.split(" ");
        l.monthLeft.dateInput = t;
        l.monthLeft.timeInput = n;
        break;
      case "dateTimeRange":
        let [u = "", d = ""] = i.split(o);
        [t = "", n = ""] = u.split(" ");
        [a = "", r = ""] = d.split(" ");
        l.monthLeft.dateInput = t;
        l.monthLeft.timeInput = n;
        l.monthRight.dateInput = a;
        l.monthRight.timeInput = r;
    }
    return l;
  }
  function er(e) {
    return ["string", "number"].includes(typeof e) && e !== "";
  }
  var pageNoopHandler = require("page-noop-handler") /*id: 73359*/;
  class eo extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      this.clearRangeInputFocus = () => {
        let {
          type: e
        } = this._adapter.getProps();
        let {
          rangeInputFocus: t
        } = this._adapter.getStates();
        if (e === "dateTimeRange" && t) {
          this._adapter.setRangeInputFocus(false);
        }
      };
      this._isRangeType = () => {
        let e = this._adapter.getProp("type");
        return /range/i.test(e);
      };
      this._isRangeValueComplete = e => {
        let t = false;
        if (Array.isArray(e)) {
          t = !e.some(e => nullCheckUtil_1.isNil(e));
        }
        return t;
      };
    }
    init() {
      let e = this.getProp("timeZone");
      if (this._isControlledComponent()) {
        this.initFromProps({
          timeZone: e,
          value: this.getProp("value")
        });
      } else if (this._isInProps("defaultValue")) {
        this.initFromProps({
          timeZone: e,
          value: this.getProp("defaultValue")
        });
      }
      this.initPanelOpenStatus(this.getProp("defaultOpen"));
    }
    initFromProps(e) {
      let {
        value: t,
        timeZone: n,
        prevTimeZone: a
      } = e;
      let r = (Array.isArray(t) ? [...t] : (t || t === 0) && [t]) || [];
      let i = this.parseWithTimezone(r, n, a);
      this._adapter.updatePrevTimezone(a);
      this.clearInputValue();
      this._adapter.updateValue(i);
      this.resetCachedSelectedValue(i);
      this.initRangeInputFocus(i);
      if (this._adapter.needConfirm()) {
        this._adapter.updateCachedSelectedValue(i);
      }
    }
    initRangeInputFocus(e) {
      let {
        triggerRender: t
      } = this.getProps();
      if (this._isRangeType() && isFunctionUtil_1.isFunction(t) && e.length === 0) {
        this._adapter.setRangeInputFocus("rangeStart");
      }
    }
    parseWithTimezone(e, t, n) {
      let a = [];
      if (Array.isArray(e) && e.length) {
        for (let r of e) {
          let e = (r || r === 0) && this._parseValue(r);
          if (e) {
            if (er(n)) {
              e = timezoneConversionUtils.zonedTimeToUtc(e, n);
            }
            a.push(er(t) ? timezoneConversionUtils.utcToZonedTime(e, t) : e);
          } else {
            pageNoopHandler.noopHandler(true, `[Semi DatePicker] value cannot be parsed, value: ${String(r)}`);
          }
        }
      }
      return a;
    }
    _isMultiple() {
      return !!this.getProp("multiple");
    }
    _parseValue(e) {
      let t;
      let n = this._adapter.getProp("dateFnsLocale");
      if (!e && e !== 0) {
        return new Date();
      }
      if (dateValidationUtil.isValidDate(e)) {
        t = e;
      } else if (isStringTypeCheck.isString(e)) {
        t = Q(e, this.getProp("format"), undefined, n);
      } else if (x(e)) {
        t = new Date(e);
      } else {
        throw TypeError("defaultValue should be valid Date object/timestamp or string");
      }
      return t;
    }
    destroy() {
      this._adapter.togglePanel(false);
      this._adapter.unregisterClickOutSide();
    }
    initPanelOpenStatus(e) {
      if ((this.getProp("open") || e) && !this.getProp("disabled")) {
        this._adapter.togglePanel(true);
        this._adapter.registerClickOutSide();
      } else {
        this._adapter.togglePanel(false);
        this._adapter.unregisterClickOutSide();
      }
    }
    openPanel() {
      if (!this.getProp("disabled")) {
        if (!this._isControlledComponent("open")) {
          this.open();
        }
        this._adapter.notifyOpenChange(true);
      }
    }
    clearInsetInputValue() {
      let {
        insetInput: e
      } = this._adapter.getProps();
      if (e) {
        this._adapter.updateInsetInputValue(null);
      }
    }
    resetCachedSelectedValue(e) {
      let {
        value: t,
        cachedSelectedValue: n
      } = this._adapter.getStates();
      let a = Array.isArray(e) ? e : t;
      if (!deepEqualUtil_1.deepEqual(a, n)) {
        this._adapter.updateCachedSelectedValue(a);
      }
    }
    closePanel(e) {
      if (arguments.length > 1 && arguments[1] !== undefined) {
        arguments[1];
      }
      let t = arguments.length > 2 ? arguments[2] : undefined;
      let {
        value: n
      } = this._adapter.getStates();
      let a = nullCheckUtil_1.isNil(t) ? n : t;
      if (this._isControlledComponent("open")) {
        this.resetInnerSelectedStates(a);
      } else {
        this.close();
      }
      this._adapter.notifyOpenChange(false);
    }
    open() {
      this._adapter.togglePanel(true);
      this._adapter.registerClickOutSide();
    }
    close() {
      this._adapter.togglePanel(false, () => this.resetInnerSelectedStates());
      this._adapter.unregisterClickOutSide();
    }
    focus(e) {
      if (this._isRangeType()) {
        this._adapter.setRangeInputFocus(e ?? "rangeStart");
      } else {
        this._adapter.setInputFocus();
      }
    }
    blur() {
      if (this._isRangeType()) {
        this._adapter.setRangeInputBlur();
      } else {
        this._adapter.setInputBlur();
      }
    }
    resetInnerSelectedStates(e) {
      let {
        value: t
      } = this._adapter.getStates();
      if (!this.isCachedSelectedValueValid(e) || this._adapter.needConfirm() && !this.clickConfirmButton) {
        this.resetCachedSelectedValue(t);
      }
      this.resetFocus();
      this.clearInputValue();
      this.clickConfirmButton = false;
    }
    resetFocus(e) {
      this._adapter.setRangeInputFocus(false);
      this._adapter.notifyBlur(e);
    }
    isCachedSelectedValueValid(e) {
      let t = e || this._adapter.getState("cachedSelectedValue");
      let {
        type: n
      } = this._adapter.getProps();
      let a = true;
      switch (true) {
        case n === "dateRange":
        case n === "dateTimeRange":
          if (!this._isRangeValueComplete(t)) {
            a = false;
          }
          break;
        default:
          let r = t == null ? undefined : t.filter(e => e);
          if (!Array.isArray(r) || !r.length) {
            a = false;
          }
      }
      return a;
    }
    clearInputValue() {
      this._adapter.updateInputValue(null);
      this._adapter.updateInsetInputValue(null);
    }
    handleInputChange(e, t) {
      let n = this._isMultiple() ? this.parseMultipleInput(e) : this.parseInput(e);
      let {
        value: a
      } = this.getStates();
      this._updateCachedSelectedValueFromInput(e);
      if (n && n.length || e === "") {
        if (objectPathGetDefault.getObjectPathDefault(t, semiInputConstants.inputConstants.CLEARBTN_CLICKED_EVENT_FLAG) && this._isControlledComponent("value")) {
          this._notifyChange(n);
          return;
        }
        this._updateValueAndInput(n, e === "", e);
        let r = this._getChangedDates(n);
        if (!this._someDateDisabled(r, n) && !deepEqualUtil_1.deepEqual(n, a)) {
          this._notifyChange(n);
        }
      } else {
        this._adapter.updateInputValue(e);
      }
    }
    handleInsetInputChange(e) {
      let {
        insetInputStr: t,
        format: n,
        insetInputValue: a
      } = e;
      let r = this._isMultiple();
      let i = r ? this.parseMultipleInput(t, n) : this.parseInput(t, n);
      let {
        value: o
      } = this.getStates();
      this._updateCachedSelectedValueFromInput(t);
      if (i && i.length) {
        let e = this._getChangedDates(i);
        if (!this._someDateDisabled(e, i)) {
          if (!deepEqualUtil_1.deepEqual(i, o)) {
            if (!this._isControlledComponent() && !this._adapter.needConfirm()) {
              this._adapter.updateValue(i);
            }
            this._notifyChange(i);
          }
          let e = r ? this.formatMultipleDates(i) : this.formatDates(i);
          this._adapter.updateInputValue(e);
        }
      }
      this._adapter.updateInsetInputValue(a);
    }
    _updateCachedSelectedValueFromInput(e) {
      let t = this.getLooseDateFromInput(e);
      let n = this._getChangedDates(t);
      if (!this._someDateDisabled(n, t)) {
        this.resetCachedSelectedValue(t);
      }
    }
    handleInputBlur() {
      if (arguments.length > 0 && arguments[0] !== undefined) {
        arguments[0];
      }
      if (arguments.length > 1) {
        arguments[1];
      }
    }
    handleRangeEndTabPress(e) {
      this._adapter.setRangeInputFocus(false);
    }
    handleInputFocus(e, t) {
      let n = this._adapter.getState("rangeInputFocus");
      if (t) {
        this._adapter.setRangeInputFocus(t);
      }
      if (!t || !["rangeStart", "rangeEnd"].includes(n)) {
        this._adapter.notifyFocus(e, t);
      }
    }
    handleSetRangeFocus(e) {
      this._adapter.setRangeInputFocus(e);
    }
    handleInputClear(e) {
      this._adapter.notifyClear(e);
    }
    handleRangeInputClear(e) {
      let t = [];
      if (!this._isControlledComponent("value")) {
        this._updateValueAndInput(t, true, "");
        this._adapter.updateInsetInputValue(null);
        this.resetCachedSelectedValue(t);
      }
      this._notifyChange(t);
      this._adapter.setRangeInputFocus(false);
      this._adapter.notifyClear(e);
    }
    handleRangeInputBlur(e, t) {}
    handleInputComplete(e = "") {
      let t = e ? this._isMultiple() ? this.parseMultipleInput(e, ",", true) : this.parseInput(e) : [];
      if (!(t = t && t.length ? t : this.getState("value")) || !t.length) {
        let e = new Date();
        t = this._isRangeType() ? [e, e] : [e];
      }
      this._updateValueAndInput(t);
      let {
        value: n
      } = this.getStates();
      let a = this._getChangedDates(t);
      if (!this._someDateDisabled(a, t) && !deepEqualUtil_1.deepEqual(t, n)) {
        this._notifyChange(t);
      }
    }
    parseInput(e = "", t) {
      let n = [];
      let {
        dateFnsLocale: a,
        rangeSeparator: r
      } = this.getProps();
      if (e && e.length) {
        let i;
        let o;
        let s = this.getProp("type");
        let l = t || this.getProp("format") || J(s);
        let u = new Date();
        switch (s) {
          case "date":
          case "dateTime":
          case "month":
            o = (i = e ? Q(e, l, u, a) : "") && dateValidationUtil_1.isValidDate(i) && this.localeFormat(i, l);
            if (i && o === e) {
              n = [i];
            }
            break;
          case "dateRange":
          case "dateTimeRange":
          case "monthRange":
            let d = e.split(r);
            o = (i = d && d.reduce((e, t) => {
              let n = t && Q(t, l, u, a);
              if (n) {
                e.push(n);
              }
              return e;
            }, [])) && i.map(e => e && dateValidationUtil_1.isValidDate(e) && this.localeFormat(e, l)).join(r);
            if (i && o === e) {
              i.sort((e, t) => e.getTime() - t.getTime());
              n = i;
            }
        }
      }
      return n;
    }
    getLooseDateFromInput(e) {
      if (this._isMultiple()) {
        return this.parseMultipleInputLoose(e);
      } else {
        return this.parseInputLoose(e);
      }
    }
    parseInputLoose(e = "") {
      let t = [];
      let {
        dateFnsLocale: n,
        rangeSeparator: a,
        type: r,
        format: i
      } = this.getProps();
      if (e && e.length) {
        let o;
        let s;
        let l = i || J(r);
        let u = new Date();
        switch (r) {
          case "date":
          case "dateTime":
          case "month":
            let d = Q(e, l, u, n);
            if (dateValidationUtil.isValidDate(d)) {
              if (this.localeFormat(d, l) === e) {
                o = d;
              }
            } else {
              o = null;
            }
            t = [o];
            break;
          case "dateRange":
          case "dateTimeRange":
            let c = e.split(a);
            if (Array.isArray(o = c && c.reduce((e, t) => {
              let a = null;
              let r = Q(t, l, u, n);
              if (dateValidationUtil.isValidDate(r) && this.localeFormat(r, l) === t) {
                a = r;
              }
              e.push(a);
              return e;
            }, [])) && o.every(e => dateValidationUtil_1.isValidDate(e))) {
              o.sort((e, t) => e.getTime() - t.getTime());
            }
            t = o;
        }
      }
      return t;
    }
    parseMultipleInputLoose(e = "", t = d.DEFAULT_SEPARATOR_MULTIPLE, n = false) {
      let a = this.getProp("max");
      let r = e.split(t);
      let i = [];
      for (let e of r) {
        let t = e && this.parseInputLoose(e);
        if (!(t = Array.isArray(t) ? t : t && [t]) || !t.length) {
          return [];
        }
        if (!n || !i.filter(e => !!t.find(t => M(e, t)))) {
          i.push(...t);
        }
        if (a && a > 0 && i.length > a) {
          return [];
        }
      }
      return i;
    }
    parseMultipleInput(e = "", t = d.DEFAULT_SEPARATOR_MULTIPLE, n = false) {
      let a = this.getProp("max");
      let r = e.split(t);
      let i = [];
      for (let e of r) {
        let t = e && this.parseInput(e);
        if (!(t = Array.isArray(t) ? t : t && [t]) || !t.length) {
          return [];
        }
        if (!n || !i.filter(e => !!t.find(t => M(e, t)))) {
          i.push(...t);
        }
        if (a && a > 0 && i.length > a) {
          return [];
        }
      }
      return i;
    }
    formatDates(e = [], t) {
      let n = "";
      let a = this.getProp("rangeSeparator");
      if (Array.isArray(e) && e.length) {
        let r = this.getProp("type");
        let i = t || this.getProp("format") || J(r);
        switch (r) {
          case "date":
          case "dateTime":
          case "month":
            n = this.localeFormat(e[0], i);
            break;
          case "dateRange":
          case "dateTimeRange":
          case "monthRange":
            let o = !nullCheckUtil_1.isNil(e[0]);
            let s = !nullCheckUtil_1.isNil(e[1]);
            if (o && s) {
              n = `${this.localeFormat(e[0], i)}${a}${this.localeFormat(e[1], i)}`;
            } else if (o) {
              n = `${this.localeFormat(e[0], i)}${a}`;
            } else if (s) {
              n = `${a}${this.localeFormat(e[1], i)}`;
            }
        }
      }
      return n;
    }
    formatMultipleDates(e = [], t = d.DEFAULT_SEPARATOR_MULTIPLE, n) {
      let a = [];
      if (Array.isArray(e) && e.length) {
        switch (this.getProp("type")) {
          case "date":
          case "dateTime":
          case "month":
            e.forEach(e => a.push(this.formatDates([e], n)));
            break;
          case "dateRange":
          case "dateTimeRange":
          case "monthRange":
            for (let t = 0; t < e.length; t += 2) {
              a.push(this.formatDates(e.slice(t, t + 2), n));
            }
        }
      }
      return a.join(t);
    }
    _updateValueAndInput(e, t, n) {
      let a;
      if (t || e) {
        a = Array.isArray(e) ? e : e ? [e] : [];
        let t = this._getChangedDates(a);
        if (!this._isControlledComponent() && !this._someDateDisabled(t, a) && !this._adapter.needConfirm()) {
          this._adapter.updateValue(a);
        }
      }
      this._adapter.updateInputValue(n);
    }
    handleSelectedChange(e, t) {
      let n;
      let a;
      let {
        type: r,
        format: i,
        rangeSeparator: o,
        insetInput: s
      } = this._adapter.getProps();
      let {
        value: l
      } = this.getStates();
      let u = this._isControlledComponent();
      let d = isObjectOrFunction_1_1.isObjectOrFunction(t) ? t.fromPreset : t;
      let c = objectPathGetDefault.getObjectPathDefault(t, "closePanel", true);
      let h = objectPathGetDefault.getObjectPathDefault(t, "needCheckFocusRecord", true);
      let p = Array.isArray(e) ? [...e] : e ? [e] : [];
      let m = this._getChangedDates(p);
      if (!this._someDateDisabled(m, p)) {
        this.resetCachedSelectedValue(p);
        n = this._isMultiple() ? this.formatMultipleDates(p) : this.formatDates(p);
        if (s) {
          let e = en({
            format: i,
            type: r
          });
          a = ea({
            inputValue: this._isMultiple() ? this.formatMultipleDates(p, undefined, e) : this.formatDates(p, e),
            type: r,
            rangeSeparator: o
          });
        }
        if (this._isRangeType() && !this._isRangeValueComplete(p)) {
          this._adapter.updateInputValue(n);
          this._adapter.updateInsetInputValue(a);
          return;
        }
        if (!u || d) {
          this._updateValueAndInput(p, true, n);
          this._adapter.updateInsetInputValue(a);
        }
        if (!deepEqualUtil_1.deepEqual(e, l)) {
          this._notifyChange(e);
        }
      }
      let v = !h || h && this._adapter.couldPanelClosed();
      if (r === "date" && !this._isMultiple() && c || r === "dateRange" && this._isRangeValueComplete(p) && c && v) {
        this.closePanel(undefined, n, p);
      }
    }
    handleYMSelectedChange(e = {}) {
      let {
        currentMonth: t,
        currentYear: n
      } = e;
      let {
        type: a
      } = this.getProps();
      if (a === "month") {
        let e = new Date(n.left, t.left - 1);
        this.handleSelectedChange([e]);
      } else {
        let e = new Date(n.left, t.left - 1);
        let a = new Date(n.right, t.right - 1);
        this.handleSelectedChange([e, a]);
      }
    }
    handleConfirm() {
      this.clickConfirmButton = true;
      let {
        cachedSelectedValue: e,
        value: t
      } = this._adapter.getStates();
      let n = this._isRangeValueComplete(e);
      let a = n ? e : t;
      if (this._adapter.needConfirm() && !this._isControlledComponent()) {
        this._adapter.updateValue(a);
      }
      this.closePanel(undefined, undefined, a);
      if (n) {
        let {
          notifyValue: t,
          notifyDate: n
        } = this.disposeCallbackArgs(e);
        this._adapter.notifyConfirm(n, t);
      }
    }
    handleCancel() {
      this.closePanel();
      let e = this.getState("value");
      let {
        notifyValue: t,
        notifyDate: n
      } = this.disposeCallbackArgs(e);
      this._adapter.notifyCancel(n, t);
    }
    handlePresetClick(e, t) {
      let n;
      let {
        type: a,
        timeZone: r
      } = this.getProps();
      let i = this.getState("prevTimezone");
      let o = typeof e.start == "function" ? e.start() : e.start;
      let s = typeof e.end == "function" ? e.end() : e.end;
      switch (a) {
        case "month":
        case "dateTime":
        case "date":
          n = this.parseWithTimezone([o], r, i);
          this.handleSelectedChange(n);
          break;
        case "dateTimeRange":
        case "dateRange":
          n = this.parseWithTimezone([o, s], r, i);
          this.handleSelectedChange(n, {
            needCheckFocusRecord: false
          });
      }
      this._adapter.notifyPresetsClick(e, t);
    }
    disposeCallbackArgs(e) {
      let t;
      let n;
      let a = Array.isArray(e) ? e : e && [e] || [];
      let r = this.getProp("timeZone");
      if (er(r)) {
        a = a.map(e => timezoneConversionUtils.zonedTimeToUtc(e, r));
      }
      let i = this.getProp("type");
      let o = this.getProp("format") || J(i);
      switch (i) {
        case "date":
        case "dateTime":
        case "month":
          if (this._isMultiple()) {
            t = a.map(e => e && this.localeFormat(e, o));
            n = [...a];
          } else {
            t = a[0] && this.localeFormat(a[0], o);
            [n] = a;
          }
          break;
        case "dateRange":
        case "dateTimeRange":
        case "monthRange":
          t = a.map(e => e && this.localeFormat(e, o));
          n = [...a];
      }
      return {
        notifyValue: t,
        notifyDate: n
      };
    }
    _notifyChange(e) {
      if (this._isRangeType() && !this._isRangeValueComplete(e)) {
        return;
      }
      let {
        onChangeWithDateFirst: t
      } = this.getProps();
      let {
        notifyValue: n,
        notifyDate: a
      } = this.disposeCallbackArgs(e);
      if (t) {
        this._adapter.notifyChange(a, n);
      } else {
        this._adapter.notifyChange(n, a);
      }
    }
    _getChangedDates(e) {
      let t = this._adapter.getProp("type");
      let {
        cachedSelectedValue: n
      } = this._adapter.getStates();
      let a = [];
      switch (t) {
        case "dateRange":
        case "dateTimeRange":
          let [r, i] = n;
          let [o, s] = e;
          if (!I(o, r)) {
            a.push(o);
          }
          if (!I(s, i)) {
            a.push(s);
          }
          break;
        default:
          let l = new Set();
          n.forEach(e => l.add(dateInstanceValidator.isDate(e) && e.valueOf()));
          for (let t of e) {
            if (!l.has(dateInstanceValidator.isDate(t) && t.valueOf())) {
              a.push(t);
            }
          }
      }
      return a;
    }
    _someDateDisabled(e, t) {
      let {
        rangeInputFocus: n
      } = this.getStates();
      let a = {
        rangeStart: "",
        rangeEnd: "",
        rangeInputFocus: n
      };
      if (this._isRangeType() && Array.isArray(t)) {
        if (dateValidationUtil_1.isValidDate(t[0])) {
          let e = dateFormatUtil.formatDate(t[0], "yyyy-MM-dd");
          a.rangeStart = e;
        }
        if (dateValidationUtil_1.isValidDate(t[1])) {
          let e = dateFormatUtil.formatDate(t[1], "yyyy-MM-dd");
          a.rangeEnd = e;
        }
      }
      let r = false;
      for (let t of e) {
        if (!nullCheckUtil_1.isNil(t) && this.disabledDisposeDate(t, a)) {
          r = true;
          break;
        }
      }
      return r;
    }
    localeFormat(e, t) {
      let n = this._adapter.getProp("dateFnsLocale");
      return dateFormatUtil.formatDate(e, t, {
        locale: n
      });
    }
    disposeDateFn(e, t) {
      let n;
      let {
        notifyDate: a
      } = this.disposeCallbackArgs(t);
      let r = Array.isArray(t);
      n = r === Array.isArray(a) ? a : r ? [a] : a[0];
      var i = arguments.length;
      var o = Array(i > 2 ? i - 2 : 0);
      var s = 2;
      for (; s < i; s++) {
        o[s - 2] = arguments[s];
      }
      return e(n, ...o);
    }
    disabledDisposeDate(e) {
      let {
        disabledDate: t
      } = this.getProps();
      var n = arguments.length;
      var a = Array(n > 1 ? n - 1 : 0);
      var r = 1;
      for (; r < n; r++) {
        a[r - 1] = arguments[r];
      }
      return this.disposeDateFn(t, e, ...a);
    }
    disabledDisposeTime(e) {
      let {
        disabledTime: t
      } = this.getProps();
      var n = arguments.length;
      var a = Array(n > 1 ? n - 1 : 0);
      var r = 1;
      for (; r < n; r++) {
        a[r - 1] = arguments[r];
      }
      return this.disposeDateFn(t, e, ...a);
    }
    handleTriggerWrapperClick(e) {
      let {
        disabled: t,
        triggerRender: n
      } = this._adapter.getProps();
      let {
        rangeInputFocus: a
      } = this._adapter.getStates();
      if (!t) {
        if (this._isRangeType() && !a) {
          if (this._adapter.isEventTarget(e)) {
            setTimeout(() => {
              this.handleInputFocus(e, "rangeStart");
            }, 0);
          } else if (isFunctionUtil_1.isFunction(n)) {
            this._adapter.setRangeInputFocus("rangeStart");
          }
        }
        this.openPanel();
      }
    }
    handlePanelVisibleChange(e) {
      if (e) {
        this._adapter.setInsetInputFocus();
        setTimeout(() => {
          this._adapter.setTriggerDisabled(true);
        }, 0);
      } else {
        this._adapter.setTriggerDisabled(false);
      }
    }
  }
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  function ed(e, t, {
    groupInnerSeparator: n = d.DEFAULT_SEPARATOR_RANGE,
    groupSize: a = 1,
    groupSeparator: r = d.DEFAULT_SEPARATOR_MULTIPLE
  } = {}, i) {
    let o = "";
    if (a <= 0 || typeof a != "number") {
      a = 1;
    }
    if (Array.isArray(e) && e.length) {
      let s = [];
      let {
        length: l
      } = e;
      for (let t = 0; t < l; t++) {
        if (t % a == 0) {
          s.push([]);
        }
        s[Math.floor(t / a)].push(e[t]);
      }
      o = s.map(e => e.map(e => e ? dateFormatUtil.formatDate(e, t, {
        locale: i
      }) : "").join(n)).join(r);
    }
    return o;
  }
  function ec(e, t) {
    validateArgumentCount.validateArgCount(2, arguments);
    var n = dateNormalizer.normalizeDate(e);
    var a = numberToIntegerConverter.toInteger(t);
    if (isNaN(a)) {
      return new Date(NaN);
    }
    if (!a) {
      return n;
    }
    var r = n.getDate();
    var i = new Date(n.getTime());
    i.setMonth(n.getMonth() + a + 1, 0);
    if (r >= i.getDate()) {
      return i;
    } else {
      n.setFullYear(i.getFullYear(), i.getMonth(), r);
      return n;
    }
  }
  function eh(e) {
    let {
      defaultPickerValue: t,
      format: n,
      dateFnsLocale: a
    } = e;
    let r = Array.isArray(t) ? t[0] : t;
    let i = Array.isArray(t) ? t[1] : undefined;
    switch (true) {
      case dateValidationUtil.isValidDate(r):
        break;
      case x(r):
        r = new Date(r);
        break;
      case typeof r == "string":
        r = Q(r, n, undefined, a);
        break;
      default:
        r = new Date();
    }
    switch (true) {
      case dateValidationUtil.isValidDate(i):
        break;
      case x(i):
        i = new Date(i);
        break;
      case typeof i == "string":
        i = Q(i, n, undefined, a);
        break;
      default:
        i = ec(r, 1);
    }
    return {
      nowDate: r,
      nextDate: i
    };
  }
  var deepCloneUtil = require("deep-clone-util") /*id: 539809*/;
  let ep = "Enter";
  class eg extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
    }
    init() {}
    destroy() {}
    handleClick(e) {
      this._adapter.notifyClick(e);
    }
    handleChange(e, t) {
      this._adapter.notifyChange(e, t);
    }
    handleInputComplete(e) {
      if (e.key === ep) {
        this._adapter.notifyEnter(e.target.value);
      }
    }
    handleInputClear(e) {
      this._adapter.notifyClear(e);
    }
    handleRangeInputClear(e) {
      this.stopPropagation(e);
      this._adapter.notifyRangeInputClear(e);
    }
    handleRangeInputEnterPress(e, t) {
      if (e.key === ep) {
        this._adapter.notifyEnter(t);
      }
    }
    handleRangeInputEndKeyPress(e) {
      if (e.key === "Tab") {
        this._adapter.notifyTabPress(e);
      }
    }
    handleRangeInputFocus(e, t) {
      this._adapter.notifyRangeInputFocus(e, t);
    }
    formatShowText(e, t) {
      let {
        type: n,
        dateFnsLocale: a,
        format: r,
        rangeSeparator: i
      } = this._adapter.getProps();
      let o = t || r || J(n);
      let s = "";
      switch (n) {
        case "date":
        case "dateTime":
        case "month":
          s = ed(e, o, undefined, a);
          break;
        case "dateRange":
        case "dateTimeRange":
        case "monthRange":
          s = ed(e, o, {
            groupSize: 2,
            groupInnerSeparator: i
          }, a);
      }
      return s;
    }
    handleInsetInputChange(e) {
      let {
        value: t,
        valuePath: n,
        insetInputValue: a
      } = e;
      let {
        format: r,
        type: i,
        rangeSeparator: o
      } = this._adapter.getProps();
      let s = en({
        type: i,
        format: r
      });
      let l = safeObjectSetWrapper.safeObjectSet(deepCloneUtil.deepClone(a), n, t);
      let u = ea({
        inputValue: this.concatInsetInputValue({
          insetInputValue: l
        }),
        type: i,
        rangeSeparator: o
      });
      let d = this._autoFillTimeToInsetInputValue({
        insetInputValue: u,
        valuePath: n,
        format: s
      });
      let c = this.concatInsetInputValue({
        insetInputValue: d
      });
      this._adapter.notifyInsetInputChange({
        insetInputValue: d,
        format: s,
        insetInputStr: c
      });
    }
    _autoFillTimeToInsetInputValue(e) {
      let {
        valuePath: t,
        insetInputValue: n,
        format: a
      } = e;
      let {
        type: r,
        defaultPickerValue: i,
        dateFnsLocale: o
      } = this._adapter.getProps();
      let s = deepCloneUtil.deepClone(n);
      let {
        nowDate: l,
        nextDate: u
      } = eh({
        defaultPickerValue: i,
        format: a,
        dateFnsLocale: o
      });
      if (r.includes("Time")) {
        let e = "";
        let n = objectPathGetDefault.getObjectPathDefault(a.split(" "), "0", d.FORMAT_FULL_DATE);
        let r = objectPathGetDefault.getObjectPathDefault(a.split(" "), "1", d.FORMAT_TIME_PICKER);
        switch (t) {
          case "monthLeft.dateInput":
            let i = s.monthLeft.dateInput;
            if (!s.monthLeft.timeInput && i.length === n.length) {
              let t = Q(s.monthLeft.dateInput, n);
              if (dateValidationUtil.isValidDate(t)) {
                e = dateFormatUtil.formatDate(l, r);
                s.monthLeft.timeInput = e;
              }
            }
            break;
          case "monthRight.dateInput":
            let o = s.monthRight.dateInput;
            if (!s.monthRight.timeInput && o.length === n.length) {
              let t = Q(o, n);
              if (dateValidationUtil.isValidDate(t)) {
                e = dateFormatUtil.formatDate(u, r);
                s.monthRight.timeInput = e;
              }
            }
        }
      }
      return s;
    }
    getInsetInputPlaceholder() {
      let e;
      let t;
      let {
        type: n,
        format: a,
        rangeSeparator: r
      } = this._adapter.getProps();
      let i = en({
        type: n,
        format: a
      });
      switch (n) {
        case "date":
        case "month":
        case "dateRange":
          e = i;
          break;
        case "dateTime":
        case "dateTimeRange":
          [e, t] = i.split(" ");
          break;
        case "monthRange":
          e = i + r + i;
      }
      return {
        datePlaceholder: e,
        timePlaceholder: t
      };
    }
    getInsetInputValue(e) {
      let {
        value: t,
        insetInputValue: n
      } = e;
      let {
        type: a,
        rangeSeparator: r,
        format: i
      } = this._adapter.getProps();
      let o = "";
      if (isObjectOrFunction_1_1.isObjectOrFunction(n)) {
        o = this.concatInsetInputValue({
          insetInputValue: n
        });
      } else {
        let e = en({
          format: i,
          type: a
        });
        o = this.formatShowText(t, e);
      }
      return ea({
        inputValue: o,
        type: a,
        rangeSeparator: r
      });
    }
    concatInsetDateAndTime(e) {
      let {
        date: t,
        time: n
      } = e;
      return `${t} ${n}`;
    }
    concatInsetDateRange(e) {
      let {
        rangeStart: t,
        rangeEnd: n
      } = e;
      let {
        rangeSeparator: a
      } = this._adapter.getProps();
      return `${t}${a}${n}`;
    }
    concatInsetInputValue(e) {
      let {
        insetInputValue: t
      } = e;
      let {
        type: n
      } = this._adapter.getProps();
      let a = "";
      switch (n) {
        case "date":
        case "month":
        case "monthRange":
          a = t.monthLeft.dateInput;
          break;
        case "dateRange":
          a = this.concatInsetDateRange({
            rangeStart: t.monthLeft.dateInput,
            rangeEnd: t.monthRight.dateInput
          });
          break;
        case "dateTime":
          a = this.concatInsetDateAndTime({
            date: t.monthLeft.dateInput,
            time: t.monthLeft.timeInput
          });
          break;
        case "dateTimeRange":
          let r = this.concatInsetDateAndTime({
            date: t.monthLeft.dateInput,
            time: t.monthLeft.timeInput
          });
          let i = this.concatInsetDateAndTime({
            date: t.monthRight.dateInput,
            time: t.monthRight.timeInput
          });
          a = this.concatInsetDateRange({
            rangeStart: r,
            rangeEnd: i
          });
      }
      return a;
    }
  }
  var emptyFunctionExport = require("empty-function-export") /*id: 185067*/;
  var clearIcon = require("clear-icon") /*id: 137025*/;
  var iconComponentFactory = require("icon-component-factory") /*id: 129581*/;
  let eT = iconComponentFactory.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 20V8H20V20H4ZM2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4ZM6 10.5C6 10.2239 6.22386 10 6.5 10H8.5C8.77614 10 9 10.2239 9 10.5V12.5C9 12.7761 8.77614 13 8.5 13H6.5C6.22386 13 6 12.7761 6 12.5V10.5ZM6.5 15C6.22386 15 6 15.2239 6 15.5V17.5C6 17.7761 6.22386 18 6.5 18H8.5C8.77614 18 9 17.7761 9 17.5V15.5C9 15.2239 8.77614 15 8.5 15H6.5ZM10.5 10.5C10.5 10.2239 10.7239 10 11 10H13C13.2761 10 13.5 10.2239 13.5 10.5V12.5C13.5 12.7761 13.2761 13 13 13H11C10.7239 13 10.5 12.7761 10.5 12.5V10.5ZM11 15C10.7239 15 10.5 15.2239 10.5 15.5V17.5C10.5 17.7761 10.7239 18 11 18H13C13.2761 18 13.5 17.7761 13.5 17.5V15.5C13.5 15.2239 13.2761 15 13 15H11ZM15 10.5C15 10.2239 15.2239 10 15.5 10H17.5C17.7761 10 18 10.2239 18 10.5V12.5C18 12.7761 17.7761 13 17.5 13H15.5C15.2239 13 15 12.7761 15 12.5V10.5ZM15.5 15C15.2239 15 15 15.2239 15 15.5V17.5C15 17.7761 15.2239 18 15.5 18H17.5C17.7761 18 18 17.7761 18 17.5V15.5C18 15.2239 17.7761 15 17.5 15H15.5Z",
      fill: "currentColor"
    }));
  }, "calendar");
  let eb = iconComponentFactory.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M2 5V19C2 20.6569 3.34315 22 5 22H12.101C11.5151 21.4259 11.0297 20.7496 10.6736 20H6C4.89543 20 4 19.1046 4 18V8C4 7.44772 4.44772 7 5 7H19C19.5523 7 20 7.44772 20 8V10.6736C20.7496 11.0297 21.4259 11.5151 22 12.101V5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M16 10H17C16.4614 10 15.9369 10.0608 15.4332 10.176C15.5943 10.065 15.7896 10 16 10Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M13.4981 10.9376C13.4659 10.4144 13.0313 10 12.5 10H11.5C10.9477 10 10.5 10.4477 10.5 11V12C10.5 12.4742 10.83 12.8712 11.2729 12.9741C11.857 12.1446 12.6168 11.4478 13.4981 10.9376Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M7 10C6.44772 10 6 10.4477 6 11V12C6 12.5523 6.44772 13 7 13H8C8.55228 13 9 12.5523 9 12V11C9 10.4477 8.55228 10 8 10H7Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M6 16C6 15.4477 6.44772 15 7 15H8C8.55228 15 9 15.4477 9 16V17C9 17.5523 8.55228 18 8 18H7C6.44772 18 6 17.5523 6 17V16Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17ZM18 15C18 14.4477 17.5523 14 17 14C16.4477 14 16 14.4477 16 15V17C16 17.2652 16.1054 17.5196 16.2929 17.7071L17.7929 19.2071C18.1834 19.5976 18.8166 19.5976 19.2071 19.2071C19.5976 18.8166 19.5976 18.1834 19.2071 17.7929L18 16.5858V15Z",
      fill: "currentColor"
    }));
  }, "calendar_clock");
  var semiInputComponent = require("semi-input-component") /*id: 410861*/;
  function e_(e) {
    let {
      insetInputValue: t,
      valuePath: n,
      onFocus: r,
      onChange: i,
      placeholder: o,
      forwardRef: s
    } = e;
    let l = objectPathGetDefault.getObjectPathDefault(t, n);
    return reactCoreLibraryReexport.createElement(semiInputComponent.InputComponent, {
      value: l,
      onChange: (e, a) => {
        i({
          value: e,
          event: a,
          insetInputValue: t,
          valuePath: n
        });
      },
      onFocus: r,
      placeholder: o,
      ref: s
    });
  }
  function eC(e) {
    let {
      insetInputValue: t,
      valuePath: n,
      type: r,
      onFocus: i,
      onChange: o,
      placeholder: s,
      disabled: l
    } = e;
    if (!r.includes("Time")) {
      return null;
    }
    let u = objectPathGetDefault.getObjectPathDefault(t, n);
    return reactCoreLibraryReexport.createElement(semiInputComponent.InputComponent, {
      value: u,
      onChange: (e, a) => {
        o({
          value: e,
          event: a,
          insetInputValue: t,
          valuePath: n
        });
      },
      onFocus: i,
      placeholder: s,
      disabled: l
    });
  }
  function eE(e, t) {
    var n = {};
    for (var a in e) {
      if (Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0) {
        n[a] = e[a];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var a = Object.getOwnPropertySymbols(e);
      for (; r < a.length; r++) {
        if (t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r])) {
          n[a[r]] = e[a[r]];
        }
      }
    }
    return n;
  }
  class eD extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.handleChange = (e, t) => this.foundation.handleChange(e, t);
      this.handleEnterPress = e => this.foundation.handleInputComplete(e);
      this.handleInputClear = e => this.foundation.handleInputClear(e);
      this.handleRangeInputChange = (e, t, n) => {
        let a = this.getRangeInputValue(e, t);
        this.foundation.handleChange(a, n);
      };
      this.handleRangeInputClear = e => {
        this.foundation.handleRangeInputClear(e);
      };
      this.handleRangeInputEnterPress = (e, t, n) => {
        let a = this.getRangeInputValue(t, n);
        this.foundation.handleRangeInputEnterPress(e, a);
      };
      this.handleRangeInputEndKeyPress = e => {
        this.foundation.handleRangeInputEndKeyPress(e);
      };
      this.handleRangeInputFocus = (e, t) => {
        this.foundation.handleRangeInputFocus(e, t);
      };
      this.handleRangeStartFocus = e => {
        this.handleRangeInputFocus(e, "rangeStart");
      };
      this.handleInsetInputChange = e => {
        this.foundation.handleInsetInputChange(e);
      };
      this.getRangeInputValue = (e, t) => {
        let {
          rangeSeparator: n
        } = this.props;
        return `${e}${n}${t}`;
      };
      this.foundation = new eg(this.adapter);
    }
    get adapter() {
      var e = this;
      return Object.assign(Object.assign({}, super.adapter), {
        updateIsFocusing: e => this.setState({
          isFocusing: e
        }),
        notifyClick: function () {
          return e.props.onClick(...arguments);
        },
        notifyChange: function () {
          return e.props.onChange(...arguments);
        },
        notifyEnter: function () {
          return e.props.onEnterPress(...arguments);
        },
        notifyBlur: function () {
          return e.props.onBlur(...arguments);
        },
        notifyClear: function () {
          return e.props.onClear(...arguments);
        },
        notifyFocus: function () {
          return e.props.onFocus(...arguments);
        },
        notifyRangeInputClear: function () {
          return e.props.onRangeClear(...arguments);
        },
        notifyRangeInputFocus: function () {
          return e.props.onFocus(...arguments);
        },
        notifyTabPress: function () {
          return e.props.onRangeEndTabPress(...arguments);
        },
        notifyInsetInputChange: e => this.props.onInsetInputChange(e)
      });
    }
    componentDidMount() {
      this.foundation.init();
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    formatText(e) {
      if (e && e.length) {
        return this.foundation.formatShowText(e);
      } else {
        return "";
      }
    }
    renderRangePrefix() {
      let {
        prefix: e,
        insetLabel: t,
        prefixCls: n,
        disabled: r,
        rangeInputFocus: i
      } = this.props;
      let o = e || t;
      if (o) {
        return reactCoreLibraryReexport.createElement("div", {
          className: `${n}-range-input-prefix`,
          onClick: e => !r && !i && this.handleRangeStartFocus(e),
          "x-semi-prop": "prefix,insetLabel"
        }, o);
      } else {
        return null;
      }
    }
    renderRangeSeparator(e, t) {
      let {
        disabled: n,
        rangeSeparator: r
      } = this.props;
      let i = b({
        [`${u.PREFIX}-range-input-separator`]: true,
        [`${u.PREFIX}-range-input-separator-active`]: (e || t) && !n
      });
      return reactCoreLibraryReexport.createElement("span", {
        onClick: e => !n && this.handleRangeStartFocus(e),
        className: i
      }, r);
    }
    renderRangeClearBtn(e, t) {
      let {
        showClear: n,
        prefixCls: r,
        disabled: i,
        clearIcon: o,
        showClearIgnoreDisabled: s
      } = this.props;
      if ((e || t) && n && (!i || !!s)) {
        return reactCoreLibraryReexport.createElement("div", {
          role: "button",
          tabIndex: 0,
          "aria-label": "Clear range input value",
          className: `${r}-range-input-clearbtn`,
          onMouseDown: e => this.handleRangeInputClear(e)
        }, o || reactCoreLibraryReexport.createElement(clearIcon.ClearIcon, {
          "aria-hidden": true
        }));
      } else {
        return null;
      }
    }
    renderRangeSuffix(e) {
      let {
        prefixCls: t,
        disabled: n,
        rangeInputFocus: r
      } = this.props;
      if (e) {
        return reactCoreLibraryReexport.createElement("div", {
          className: `${t}-range-input-suffix`,
          onClick: e => !n && !r && this.handleRangeStartFocus(e)
        }, e);
      } else {
        return null;
      }
    }
    renderRangeInput(e) {
      let {
        placeholder: t,
        inputStyle: n,
        disabled: r,
        inputReadOnly: i,
        autofocus: o,
        size: s,
        text: l,
        suffix: u,
        inputCls: d,
        rangeInputStartRef: c,
        rangeInputEndRef: h,
        rangeInputFocus: f,
        prefixCls: p,
        rangeSeparator: g,
        borderless: m
      } = e;
      let [v, y = ""] = l.split(g) || [];
      let T = s === "large" ? "default" : "small";
      let [w, _] = Array.isArray(t) ? t : [t, t];
      let C = b(`${p}-range-input-wrapper-start`, `${p}-range-input-wrapper`, {
        [`${p}-range-input-wrapper-active`]: f === "rangeStart" && !r,
        [`${p}-range-input-wrapper-start-with-prefix`]: this.props.prefix || this.props.insetLabel,
        [`${p}-borderless`]: m
      });
      let E = b(`${p}-range-input-wrapper-end`, `${p}-range-input-wrapper`, {
        [`${p}-range-input-wrapper-active`]: f === "rangeEnd" && !r,
        [`${p}-borderless`]: m
      });
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, this.renderRangePrefix(), reactCoreLibraryReexport.createElement("div", {
        onClick: e => !r && this.handleRangeInputFocus(e, "rangeStart"),
        className: `${d} ${C}`
      }, reactCoreLibraryReexport.createElement(semiInputComponent.InputComponent, {
        borderless: m,
        size: T,
        style: n,
        disabled: r,
        readonly: i,
        placeholder: w,
        value: v,
        onChange: (e, t) => this.handleRangeInputChange(e, y, t),
        onEnterPress: e => this.handleRangeInputEnterPress(e, v, y),
        onFocus: e => this.handleRangeInputFocus(e, "rangeStart"),
        autoFocus: o,
        ref: c
      })), this.renderRangeSeparator(v, y), reactCoreLibraryReexport.createElement("div", {
        className: `${d} ${E}`,
        onClick: e => !r && this.handleRangeInputFocus(e, "rangeEnd")
      }, reactCoreLibraryReexport.createElement(semiInputComponent.InputComponent, {
        borderless: m,
        size: T,
        style: n,
        disabled: r,
        readonly: i,
        placeholder: _,
        value: y,
        onChange: (e, t) => this.handleRangeInputChange(v, e, t),
        onEnterPress: e => this.handleRangeInputEnterPress(e, v, y),
        onFocus: e => this.handleRangeInputFocus(e, "rangeEnd"),
        onKeyDown: this.handleRangeInputEndKeyPress,
        ref: h
      })), this.renderRangeClearBtn(v, y), this.renderRangeSuffix(u));
    }
    isRenderMultipleInputs() {
      let {
        type: e
      } = this.props;
      return e.includes("Range") && e !== "monthRange";
    }
    renderInputInset() {
      let {
        type: e,
        handleInsetDateFocus: t,
        handleInsetTimeFocus: n,
        value: r,
        insetInputValue: i,
        prefixCls: o,
        rangeInputStartRef: s,
        rangeInputEndRef: l,
        density: u,
        insetInput: d
      } = this.props;
      let c = this.foundation.getInsetInputValue({
        value: r,
        insetInputValue: i
      });
      let {
        dateStart: h,
        dateEnd: f,
        timeStart: p,
        timeEnd: m
      } = objectPathGetDefault.getObjectPathDefault(d, "placeholder", {});
      let {
        datePlaceholder: v,
        timePlaceholder: y
      } = this.foundation.getInsetInputPlaceholder();
      let T = `${o}-inset-input-wrapper`;
      let b = `${o}-inset-input-separator`;
      return reactCoreLibraryReexport.createElement("div", {
        className: T,
        "x-type": e
      }, reactCoreLibraryReexport.createElement(e_, {
        forwardRef: s,
        insetInputValue: c,
        placeholder: h ?? v,
        valuePath: "monthLeft.dateInput",
        onChange: this.handleInsetInputChange,
        onFocus: e => t(e, "rangeStart")
      }), reactCoreLibraryReexport.createElement(eC, {
        disabled: !c.monthLeft.dateInput,
        insetInputValue: c,
        placeholder: p ?? y,
        type: e,
        valuePath: "monthLeft.timeInput",
        onChange: this.handleInsetInputChange,
        onFocus: n
      }), this.isRenderMultipleInputs() && reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("div", {
        className: b
      }, u === "compact" ? null : "-"), reactCoreLibraryReexport.createElement(e_, {
        forwardRef: l,
        insetInputValue: c,
        placeholder: f ?? v,
        valuePath: "monthRight.dateInput",
        onChange: this.handleInsetInputChange,
        onFocus: e => t(e, "rangeEnd")
      }), reactCoreLibraryReexport.createElement(eC, {
        disabled: !c.monthRight.dateInput,
        insetInputValue: c,
        placeholder: m ?? y,
        type: e,
        valuePath: "monthRight.timeInput",
        onChange: this.handleInsetInputChange,
        onFocus: n
      })));
    }
    renderTriggerInput() {
      let e = this.props;
      let {
        placeholder: t,
        type: n,
        value: r,
        inputValue: i,
        inputStyle: o,
        disabled: s,
        showClear: l,
        inputReadOnly: u,
        insetLabel: d,
        validateStatus: c,
        block: h,
        prefixCls: f,
        multiple: p,
        dateFnsLocale: g,
        onBlur: m,
        onClear: v,
        onFocus: y,
        prefix: T,
        autofocus: w,
        size: _,
        inputRef: C,
        rangeInputStartRef: E,
        rangeInputEndRef: D,
        onRangeClear: Z,
        onRangeBlur: P,
        onRangeEndTabPress: S,
        rangeInputFocus: R,
        rangeSeparator: M,
        insetInput: I,
        insetInputValue: k,
        defaultPickerValue: O,
        showClearIgnoreDisabled: A
      } = e;
      let N = eE(e, ["placeholder", "type", "value", "inputValue", "inputStyle", "disabled", "showClear", "inputReadOnly", "insetLabel", "validateStatus", "block", "prefixCls", "multiple", "dateFnsLocale", "onBlur", "onClear", "onFocus", "prefix", "autofocus", "size", "inputRef", "rangeInputStartRef", "rangeInputEndRef", "onRangeClear", "onRangeBlur", "onRangeEndTabPress", "rangeInputFocus", "rangeSeparator", "insetInput", "insetInputValue", "defaultPickerValue", "showClearIgnoreDisabled"]);
      let x = reactCoreLibraryReexport.createElement(eT, {
        "aria-hidden": true
      });
      let Y = reactCoreLibraryReexport.createElement(eb, {
        "aria-hidden": true
      });
      let L = n.includes("Time") ? Y : x;
      let j = "";
      if (nullCheckUtil_1.isNil(i)) {
        if (r) {
          j = this.formatText(r);
        }
      } else {
        j = i;
      }
      let U = b({
        [`${f}-input-readonly`]: u,
        [`${f}-monthRange-input`]: n === "monthRange"
      });
      let H = Object.assign(Object.assign({}, this.props), {
        text: j,
        suffix: L,
        inputCls: U
      });
      if (this.isRenderMultipleInputs()) {
        return this.renderRangeInput(H);
      } else {
        return reactCoreLibraryReexport.createElement(semiInputComponent.InputComponent, Object.assign({}, N, {
          ref: C,
          insetLabel: d,
          disabled: s,
          showClearIgnoreDisabled: A,
          readonly: u,
          className: U,
          style: o,
          hideSuffix: l,
          placeholder: n === "monthRange" && Array.isArray(t) ? t[0] + M + t[1] : t,
          onEnterPress: this.handleEnterPress,
          onChange: this.handleChange,
          onClear: this.handleInputClear,
          suffix: L,
          showClear: l,
          value: j,
          validateStatus: c,
          prefix: T,
          autoFocus: w,
          size: _,
          onBlur: m,
          onFocus: y
        }));
      }
    }
    render() {
      let {
        insetInput: e
      } = this.props;
      if (e) {
        return this.renderInputInset();
      } else {
        return this.renderTriggerInput();
      }
    }
  }
  function eZ(e) {
    validateArgumentCount.validateArgCount(1, arguments);
    var t = dateNormalizer.normalizeDate(e);
    t.setHours(0, 0, 0, 0);
    return t;
  }
  function eP(e, t) {
    validateArgumentCount.validateArgCount(2, arguments);
    var n = eZ(e);
    var a = eZ(t);
    return n.getTime() === a.getTime();
  }
  eD.propTypes = {
    borderless: _.bool,
    onClick: _.func,
    onChange: _.func,
    onEnterPress: _.func,
    onBlur: _.func,
    onClear: _.func,
    onFocus: _.func,
    value: _.array,
    disabled: _.bool,
    type: _.oneOf(d.TYPE_SET),
    showClear: _.bool,
    format: _.string,
    inputStyle: _.object,
    inputReadOnly: _.bool,
    insetLabel: _.node,
    validateStatus: _.string,
    prefix: _.node,
    prefixCls: _.string,
    dateFnsLocale: _.object.isRequired,
    placeholder: _.oneOfType([_.string, _.array]),
    rangeInputFocus: _.oneOfType([_.string, _.bool]),
    rangeInputStartRef: _.object,
    rangeInputEndRef: _.object,
    rangeSeparator: _.string,
    insetInput: _.oneOfType([_.bool, _.object]),
    insetInputValue: _.object,
    defaultPickerValue: _.oneOfType([_.string, _.number, _.object, _.array])
  };
  eD.defaultProps = {
    borderless: false,
    showClear: true,
    onClick: emptyFunctionExport.emptyFunction,
    onChange: emptyFunctionExport.emptyFunction,
    onEnterPress: emptyFunctionExport.emptyFunction,
    onBlur: emptyFunctionExport.emptyFunction,
    onClear: emptyFunctionExport.emptyFunction,
    onFocus: emptyFunctionExport.emptyFunction,
    type: "date",
    inputStyle: {},
    inputReadOnly: false,
    prefixCls: u.PREFIX,
    rangeSeparator: d.DEFAULT_SEPARATOR_RANGE
  };
  var isSetValidator = require("is-set-validator") /*id: 138262*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  function eM(e, t) {
    validateArgumentCount.validateArgCount(2, arguments);
    var n = dateNormalizer.normalizeDate(e);
    var a = dateNormalizer.normalizeDate(t);
    return (n.getFullYear() - a.getFullYear()) * 12 + (n.getMonth() - a.getMonth());
  }
  function eI(e, t) {
    validateArgumentCount.validateArgCount(2, arguments);
    return ec(e, numberToIntegerConverter.toInteger(t) * 12);
  }
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  function eO(e) {
    validateArgumentCount.validateArgCount(1, arguments);
    var t = dateNormalizer.normalizeDate(e);
    var n = t.getFullYear();
    var a = t.getMonth();
    var r = new Date(0);
    r.setFullYear(n, a + 1, 0);
    r.setHours(0, 0, 0, 0);
    return r.getDate();
  }
  function eA(e, t) {
    validateArgumentCount.validateArgCount(2, arguments);
    var n = dateNormalizer.normalizeDate(e);
    var a = numberToIntegerConverter.toInteger(t);
    var r = n.getFullYear();
    var i = n.getDate();
    var o = new Date(0);
    o.setFullYear(r, a, 15);
    o.setHours(0, 0, 0, 0);
    var s = eO(o);
    n.setMonth(a, Math.min(i, s));
    return n;
  }
  function eN(e, t) {
    validateArgumentCount.validateArgCount(2, arguments);
    if (typeofHelper.getType(t) !== "object" || t === null) {
      throw RangeError("values parameter must be an object");
    }
    var n = dateNormalizer.normalizeDate(e);
    if (isNaN(n.getTime())) {
      return new Date(NaN);
    } else {
      if (t.year != null) {
        n.setFullYear(t.year);
      }
      if (t.month != null) {
        n = eA(n, t.month);
      }
      if (t.date != null) {
        n.setDate(numberToIntegerConverter.toInteger(t.date));
      }
      if (t.hours != null) {
        n.setHours(numberToIntegerConverter.toInteger(t.hours));
      }
      if (t.minutes != null) {
        n.setMinutes(numberToIntegerConverter.toInteger(t.minutes));
      }
      if (t.seconds != null) {
        n.setSeconds(numberToIntegerConverter.toInteger(t.seconds));
      }
      if (t.milliseconds != null) {
        n.setMilliseconds(numberToIntegerConverter.toInteger(t.milliseconds));
      }
      return n;
    }
  }
  var ex = (e, t) => {
    if (!t) {
      return "";
    }
    let n = new Date(t);
    let a = isFunctionUtil_1.isFunction(e) ? e(n) : n;
    return dateFormatUtil.formatDate(new Date(a), d.FORMAT_FULL_DATE);
  };
  function eF(e, t) {
    validateArgumentCount.validateArgCount(2, arguments);
    var n = dateNormalizer.normalizeDate(e);
    var a = dateNormalizer.normalizeDate(t);
    return n.getTime() < a.getTime();
  }
  function eY(e) {
    return typeof e == "string";
  }
  function eL(e, t) {
    return eF(eY(e) ? H(e) : e, eY(t) ? H(t) : t);
  }
  function ej(e = "", t = "", n = "") {
    let a = "";
    let r = typeof t == "number" && t < 10 ? `0${t}` : t.toString();
    let i = typeof n == "number" && n < 10 ? `0${n}` : n.toString();
    return `${String(e)}-${r}-${i}`;
  }
  var eU = (e, t) => {
    let n = function (e, t = 0) {
      let n = {
        dayNumber: "",
        dateNumberFull: "",
        fullDate: ""
      };
      let a = eO(e);
      let r = dateFormatUtil.formatDate(e, "yyyy");
      let i = dateFormatUtil.formatDate(e, "MM");
      let o = function (e) {
        validateArgumentCount.validateArgCount(1, arguments);
        var t = dateNormalizer.normalizeDate(e);
        var n = t.getMonth();
        t.setFullYear(t.getFullYear(), n + 1, 0);
        t.setHours(0, 0, 0, 0);
        return t;
      }(e);
      let s = function (e) {
        validateArgumentCount.validateArgCount(1, arguments);
        var t = dateNormalizer.normalizeDate(e);
        t.setDate(1);
        t.setHours(0, 0, 0, 0);
        return t;
      }(e);
      let l = Number(dateFormatUtil.formatDate(s, "e", {
        weekStartsOn: t
      }));
      let u = [];
      let d = [];
      for (let e = 1; e < l; e++) {
        d.push(n);
      }
      for (let e = 0; e < a; e++) {
        let t = e + 1;
        let n = t < 10 ? `0${t}` : t.toString();
        let a = ej(r, i, t);
        d.push({
          dayNumber: t,
          dayNumberFull: n,
          fullDate: a
        });
        if (d.length === 7) {
          u.push(d);
          d = [];
        } else if (a === dateFormatUtil.formatDate(o, "yyyy-MM-dd")) {
          u.push(d);
          d = [];
        }
      }
      return u;
    }(e, t);
    return {
      monthText: dateFormatUtil.formatDate(e, "yyyy-MM"),
      weeks: n,
      month: e
    };
  };
  let eH = {
    month: eM,
    year: function (e, t) {
      validateArgumentCount.validateArgCount(2, arguments);
      var n = dateNormalizer.normalizeDate(e);
      var a = dateNormalizer.normalizeDate(t);
      return n.getFullYear() - a.getFullYear();
    }
  };
  let e$ = {
    prevMonth: function (e, t) {
      validateArgumentCount.validateArgCount(2, arguments);
      return ec(e, -numberToIntegerConverter.toInteger(t));
    },
    nextMonth: ec,
    prevYear: function (e, t) {
      validateArgumentCount.validateArgCount(2, arguments);
      return eI(e, -numberToIntegerConverter.toInteger(t));
    },
    nextYear: eI
  };
  class eV extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
      this.newBiMonthPanelDate = [this.getState("monthLeft").pickerDate, this.getState("monthRight").pickerDate];
    }
    init() {
      let e = this.getProp("defaultValue");
      this.initDefaultPickerValue();
      this.updateSelectedFromProps(e);
    }
    initDefaultPickerValue() {
      let e = Q(this.getProp("defaultPickerValue"));
      if (e && dateValidationUtil.isValidDate(e)) {
        this._updatePanelDetail(d.PANEL_TYPE_LEFT, {
          pickerDate: e
        });
        this._updatePanelDetail(d.PANEL_TYPE_RIGHT, {
          pickerDate: ec(e, 1)
        });
      }
    }
    updateSelectedFromProps(e) {
      let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let n = this.getProp("type");
      let {
        selected: a,
        rangeStart: r,
        rangeEnd: i
      } = this.getStates();
      if (e && (e == null ? undefined : e.length)) {
        switch (n) {
          case "date":
            this._initDatePickerFromValue(e, t);
            break;
          case "dateRange":
            this._initDateRangePickerFromValue(e);
            break;
          case "dateTime":
            this._initDateTimePickerFromValue(e);
            break;
          case "dateTimeRange":
            this._initDateTimeRangePickerFormValue(e);
        }
      } else if (Array.isArray(e) && !e.length || !e) {
        if (isSetValidator.isSet(a) && a.size) {
          this._adapter.updateDaySelected(new Set());
        }
        if (r) {
          this._adapter.setRangeStart("");
        }
        if (i) {
          this._adapter.setRangeEnd("");
        }
      }
    }
    calcDisabledTime(e) {
      let {
        disabledTime: t,
        type: n
      } = this.getProps();
      if (typeof t == "function" && e && ["dateTime", "dateTimeRange"].includes(n)) {
        let {
          rangeStart: a,
          rangeEnd: r,
          monthLeft: i
        } = this.getStates();
        let o = [];
        if (n === "dateTimeRange") {
          if (a) {
            o.push(a);
          }
          if (a && r) {
            o.push(r);
          }
        } else if (i && i.showDate) {
          o.push(i.showDate);
        }
        let s = o.map(e => e instanceof Date ? e : H(e));
        return t(n === "dateTimeRange" ? s : s[0], e);
      }
    }
    _initDatePickerFromValue(e) {
      let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let {
        monthLeft: n
      } = this._adapter.getStates();
      let a = Object.assign({}, n);
      this._adapter.updateMonthOnLeft(a);
      let r = new Set();
      let i = this._isMultiple();
      if (i) {
        e.forEach(e => {
          if (e) {
            r.add(dateFormatUtil.formatDate(e, d.FORMAT_FULL_DATE));
          }
        });
      } else if (e[0]) {
        r.add(dateFormatUtil.formatDate(e[0], d.FORMAT_FULL_DATE));
      }
      if (t) {
        if (!i || !(e == null ? undefined : e.some(e => e && eM(e, n.pickerDate) === 0))) {
          this.handleShowDateAndTime(d.PANEL_TYPE_LEFT, e[0] || a.pickerDate);
        }
      } else {
        this.handleShowDateAndTime(d.PANEL_TYPE_LEFT, a.pickerDate);
      }
      this._adapter.updateDaySelected(r);
    }
    _initDateRangePickerFromValue(e, t = false) {
      let n = this.getState("monthLeft");
      let a = this.getState("monthRight");
      let r = this._autoAdjustMonth(Object.assign(Object.assign({}, n), {
        pickerDate: e[0] || n.pickerDate
      }), Object.assign(Object.assign({}, a), {
        pickerDate: e[1] || a.pickerDate
      }));
      if (Array.isArray(e) && e.filter(e => e).length > 1) {
        this.handleShowDateAndTime(d.PANEL_TYPE_LEFT, r.monthLeft.pickerDate);
        this.handleShowDateAndTime(d.PANEL_TYPE_RIGHT, r.monthRight.pickerDate);
      } else {
        let t = e.find(e => e);
        if (t) {
          let e = Math.abs(eM(t, n.pickerDate)) > 0;
          let i = Math.abs(eM(t, a.pickerDate)) > 0;
          if (e && i) {
            this.handleShowDateAndTime(d.PANEL_TYPE_LEFT, r.monthLeft.pickerDate);
            this.handleShowDateAndTime(d.PANEL_TYPE_RIGHT, r.monthRight.pickerDate);
          }
        }
      }
      let i = t ? d.FORMAT_DATE_TIME : d.FORMAT_FULL_DATE;
      let o = e[0] && dateFormatUtil.formatDate(e[0], i);
      let s = e[1] && dateFormatUtil.formatDate(e[1], i);
      if (this._isNeedSwap(o, s)) {
        [o, s] = [s, o];
      }
      this._adapter.setRangeStart(o);
      this._adapter.setRangeEnd(s);
      this._adapter.setHoverDay(s);
    }
    _initDateTimePickerFromValue(e) {
      this._initDatePickerFromValue(e);
    }
    _initDateTimeRangePickerFormValue(e) {
      this._initDateRangePickerFromValue(e, true);
    }
    destroy() {}
    handleSyncChangeMonths(e) {
      let {
        panelType: t,
        target: n
      } = e;
      let {
        type: a
      } = this._adapter.getProps();
      let {
        monthLeft: r,
        monthRight: i
      } = this._adapter.getStates();
      if (this.isRangeType(a)) {
        if (t === "right" && eM(n, r.pickerDate) === 0) {
          this.handleYearOrMonthChange("prevMonth", "left", 1, true);
        } else if (t === "left" && eM(i.pickerDate, n) === 0) {
          this.handleYearOrMonthChange("nextMonth", "right", 1, true);
        }
      }
    }
    getTargetChangeDate(e) {
      let t;
      let {
        panelType: n,
        switchType: a
      } = e;
      let {
        monthRight: r,
        monthLeft: i
      } = this._adapter.getStates();
      let o = n === "left" ? i.pickerDate : r.pickerDate;
      switch (a) {
        case "prevMonth":
          t = ec(o, -1);
          break;
        case "nextMonth":
          t = ec(o, 1);
          break;
        case "prevYear":
          t = eI(o, -1);
          break;
        case "nextYear":
          t = eI(o, 1);
      }
      return t;
    }
    toMonth(e, t) {
      let {
        type: n
      } = this._adapter.getProps();
      let a = this._getDiff("month", t, e);
      this.handleYearOrMonthChange(a < 0 ? "prevMonth" : "nextMonth", e, Math.abs(a), false);
      if (this.isRangeType(n)) {
        this.handleSyncChangeMonths({
          panelType: e,
          target: t
        });
      }
    }
    toYear(e, t) {
      let n = this._getDiff("year", t, e);
      this.handleYearOrMonthChange(n < 0 ? "prevYear" : "nextYear", e, Math.abs(n), false);
    }
    toYearMonth(e, t) {
      this.toYear(e, t);
      this.toMonth(e, t);
    }
    isRangeType(e) {
      let {
        type: t
      } = this.getProps();
      let n = e || t;
      return typeof n == "string" && /range/i.test(n);
    }
    handleSwitchMonthOrYear(e, t) {
      let {
        type: n,
        syncSwitchMonth: a
      } = this.getProps();
      let r = this.isRangeType(n);
      if (r && a) {
        this.handleYearOrMonthChange(e, "left", 1, true);
        this.handleYearOrMonthChange(e, "right", 1, true);
      } else {
        this.handleYearOrMonthChange(e, t);
        if (r) {
          let n = this.getTargetChangeDate({
            panelType: t,
            switchType: e
          });
          this.handleSyncChangeMonths({
            panelType: t,
            target: n
          });
        }
      }
    }
    prevMonth(e) {
      this.handleSwitchMonthOrYear("prevMonth", e);
    }
    nextMonth(e) {
      this.handleSwitchMonthOrYear("nextMonth", e);
    }
    prevYear(e) {
      this.handleSwitchMonthOrYear("prevYear", e);
    }
    nextYear(e) {
      this.handleSwitchMonthOrYear("nextYear", e);
    }
    _getDiff(e, t, n) {
      let a = this._getPanelDetail(n);
      return eH[e] && eH[e](t, a.pickerDate);
    }
    _getPanelDetail(e) {
      if (e === d.PANEL_TYPE_RIGHT) {
        return this.getState("monthRight");
      } else {
        return this.getState("monthLeft");
      }
    }
    localeFormat(e, t) {
      let n = this._adapter.getProp("dateFnsLocale");
      return dateFormatUtil.formatDate(e, t, {
        locale: n
      });
    }
    disposeCallbackArgs(e) {
      let t;
      let n;
      let a = Array.isArray(e) ? e : e && [e] || [];
      let r = this.getProp("timeZone");
      if (er(r)) {
        a = a.map(e => timezoneConversionUtils.zonedTimeToUtc(e, r));
      }
      let i = this.getProp("type");
      let o = this.getProp("format") || J(i);
      switch (i) {
        case "date":
        case "dateTime":
        case "month":
          if (this._isMultiple()) {
            t = a.map(e => e && this.localeFormat(e, o));
            n = [...a];
          } else {
            t = a[0] && this.localeFormat(a[0], o);
            [n] = a;
          }
          break;
        case "dateRange":
        case "dateTimeRange":
          t = a.map(e => e && this.localeFormat(e, o));
          n = [...a];
      }
      return {
        notifyValue: t,
        notifyDate: n
      };
    }
    handleYearOrMonthChange(e, t = d.PANEL_TYPE_LEFT, n = 1, a = false) {
      let {
        autoSwitchDate: r,
        type: i
      } = this.getProps();
      let {
        monthLeft: o,
        monthRight: s
      } = this.getStates();
      let l = this.isRangeType(i);
      let u = l && t === d.PANEL_TYPE_LEFT;
      let {
        pickerDate: c
      } = this._getPanelDetail(t);
      let h = e$[e](c, n);
      let p = t === d.PANEL_TYPE_LEFT && !deepEqualUtil_1.deepEqual(h, o.pickerDate) || t === d.PANEL_TYPE_RIGHT && !deepEqualUtil_1.deepEqual(h, s.pickerDate);
      this._updatePanelDetail(t, {
        pickerDate: h
      });
      if (p) {
        if (l) {
          if (u) {
            this.newBiMonthPanelDate[0] = h;
          } else {
            this.newBiMonthPanelDate[1] = h;
          }
          if (!u || !a) {
            let {
              notifyValue: e,
              notifyDate: t
            } = this.disposeCallbackArgs(this.newBiMonthPanelDate);
            this._adapter.notifyPanelChange(t, e);
          }
        } else {
          let {
            notifyValue: e,
            notifyDate: t
          } = this.disposeCallbackArgs(h);
          this._adapter.notifyPanelChange(t, e);
        }
      }
      if (r) {
        this.updateDateAfterChangeYM(e, h);
      }
    }
    updateDateAfterChangeYM(e, t) {
      let {
        multiple: n,
        disabledDate: a,
        type: r
      } = this.getProps();
      let {
        selected: i,
        rangeStart: o,
        rangeEnd: s,
        monthLeft: l
      } = this.getStates();
      let u = ["dateRange", "dateTimeRange"].includes(e);
      if (!n && !u && i.size) {
        let e = new Date(Array.from(i)[0]);
        let n = eN(e, {
          year: t.getFullYear(),
          month: t.getMonth()
        });
        if (r === "dateTime") {
          n = this._mergeDateAndTime(n, l.pickerDate);
        }
        if (a(n, {
          rangeStart: o,
          rangeEnd: s
        })) {
          return;
        }
        this._adapter.notifySelectedChange([n], {
          closePanel: false
        });
      }
    }
    _isMultiple() {
      return !!this.getProp("multiple") && this.getProp("type") === "date";
    }
    _isRange() {}
    handleDayClick(e, t) {
      let n = this.getProp("type");
      switch (true) {
        case n === "date" || n === "dateTime":
          this.handleDateSelected(e, t);
          break;
        case n === "dateRange" || n === "dateTimeRange":
          this.handleRangeSelected(e);
      }
    }
    handleDateSelected(e, t) {
      let {
        max: n,
        type: a,
        isControlledComponent: r,
        dateFnsLocale: i
      } = this.getProps();
      let o = this._isMultiple();
      let {
        selected: s
      } = this.getStates();
      let l = this._getPanelDetail(t);
      let u = new Set(o ? [...s] : []);
      let {
        fullDate: d
      } = e;
      let c = l.pickerDate;
      let h = a === "dateTime" ? this._mergeDateAndTime(d, c) : d;
      if (o) {
        if (u.has(h)) {
          u.delete(h);
        } else if (n && u.size === n) {
          this._adapter.notifyMaxLimit();
        } else {
          u.add(h);
        }
      } else {
        u.add(h);
      }
      let f = this.getValidDateFormat();
      let p = [...u].map(e => Q(e, f, undefined, i));
      this.handleShowDateAndTime(t, c);
      if (!r) {
        this._adapter.updateDaySelected(u);
      }
      this._adapter.notifySelectedChange(p);
    }
    handleShowDateAndTime(e, t, n) {
      let a = n || t;
      this._updatePanelDetail(e, {
        showDate: a,
        pickerDate: t
      });
    }
    _mergeDateAndTime(e, t) {
      let n = this._adapter.getProp("dateFnsLocale");
      let a = dateFormatUtil.formatDate(dateValidationUtil.isValidDate(e) ? e : Q(e, d.FORMAT_FULL_DATE, undefined, n), d.FORMAT_FULL_DATE);
      let r = dateFormatUtil.formatDate(dateValidationUtil.isValidDate(t) ? t : Q(t, d.FORMAT_TIME_PICKER, undefined, n), d.FORMAT_TIME_PICKER);
      return Q(`${a} ${r}`, this.getValidTimeFormat(), undefined, n);
    }
    handleRangeSelected(e) {
      let {
        rangeStart: t,
        rangeEnd: n
      } = this.getStates();
      let {
        startDateOffset: a,
        endDateOffset: r,
        type: i,
        dateFnsLocale: o,
        rangeInputFocus: s,
        triggerRender: l
      } = this._adapter.getProps();
      let {
        fullDate: u
      } = e;
      let d = false;
      let c = false;
      let h = (a || r) && i === "dateRange";
      if (h) {
        t = ex(a, u);
        n = ex(r, u);
      } else if (s === "rangeEnd") {
        n = u;
        if (t && n && eL(n, t.trim().split(/\s+/)[0])) {
          t = null;
          d = true;
        }
      } else if ((s === "rangeStart" || !s) && (t = u) && n && eL(n.trim().split(/\s+/)[0], t)) {
        n = null;
        c = true;
      }
      if (/range/i.test(i)) {
        if (h) {
          this._adapter.setRangeStart(t);
          this._adapter.setRangeEnd(n);
        } else if (s === "rangeEnd") {
          this._adapter.setRangeEnd(n);
          if (d) {
            this._adapter.setRangeStart(t);
          }
          if (!this._adapter.isAnotherPanelHasOpened("rangeEnd") || !t) {
            this._adapter.setRangeInputFocus("rangeStart");
          }
        } else if (s === "rangeStart" || !s) {
          this._adapter.setRangeStart(t);
          if (c) {
            this._adapter.setRangeEnd(n);
          }
          if (!this._adapter.isAnotherPanelHasOpened("rangeStart") || !n) {
            this._adapter.setRangeInputFocus("rangeEnd");
          }
        }
      }
      let f = this.getValidDateFormat();
      if (t || n) {
        let [e, a] = [Q(t, f, undefined, o), Q(n, f, undefined, o)];
        let r = [e, a];
        if (i === "dateTimeRange") {
          let i = this.getState("monthLeft").pickerDate;
          let o = this.getState("monthRight").pickerDate;
          let s = t ? this._mergeDateAndTime(t, i) : null;
          let l = n ? this._mergeDateAndTime(n, o) : null;
          r = eP(e, a) && eL(l, s) ? [s, s] : [s, l];
        }
        this._adapter.notifySelectedChange(r, {
          needCheckFocusRecord: i !== "dateRange" || !h
        });
      }
    }
    _isNeedSwap(e, t) {
      return e && t && eL(t, e);
    }
    handleDayHover(e = {
      fullDate: ""
    }) {
      if (arguments.length > 1) {
        arguments[1];
      }
      let {
        fullDate: t
      } = e;
      let {
        startDateOffset: n,
        endDateOffset: a,
        type: r
      } = this.getProps();
      this._adapter.setHoverDay(t);
      if ((n || a) && r === "dateRange") {
        let e = ex(n, t);
        let r = ex(a, t);
        this._adapter.setOffsetRangeStart(e);
        this._adapter.setOffsetRangeEnd(r);
      }
    }
    _autoAdjustMonth(e, t) {
      let n = e;
      let a = t;
      let r = eM(e.pickerDate, t.pickerDate);
      if (r > 0) {
        n = Object.assign({}, t);
        a = Object.assign({}, e);
      } else if (r === 0) {
        n = e;
        a = Object.assign(Object.assign({}, t), {
          pickerDate: ec(t.pickerDate, 1)
        });
      }
      return {
        monthLeft: n,
        monthRight: a
      };
    }
    getValidTimeFormat() {
      let e = this.getProp("format") || d.FORMAT_TIME_PICKER;
      let t = [];
      if (collectionIncludesUtil.includes(e, "h") || collectionIncludesUtil.includes(e, "H")) {
        t.push("HH");
      }
      if (collectionIncludesUtil.includes(e, "m")) {
        t.push("mm");
      }
      if (collectionIncludesUtil.includes(e, "s")) {
        t.push("ss");
      }
      return t.join(":");
    }
    getValidDateFormat() {
      return this.getProp("format") || ee(this.getProp("type"));
    }
    handleTimeChange(e, t) {
      let n;
      let a;
      let r;
      let {
        rangeEnd: i,
        rangeStart: o
      } = this.getStates();
      let s = this.getProp("dateFnsLocale");
      let l = e.timeStampValue;
      let u = this.getProp("type");
      let {
        showDate: c
      } = this._getPanelDetail(t);
      let h = new Date(l);
      let f = this.getValidDateFormat();
      let p = t === d.PANEL_TYPE_RIGHT ? i : o;
      if (u === "dateTimeRange" && p) {
        let e = Q(p, f, undefined, s);
        n = e.getFullYear();
        a = e.getMonth();
        r = e.getDate();
      } else {
        n = c.getFullYear();
        a = c.getMonth();
        r = c.getDate();
      }
      let g = h.getHours();
      let m = h.getMinutes();
      let v = new Date(...[n, a, r, g, m, h.getSeconds(), h.getMilliseconds()]);
      if (u === "dateTimeRange") {
        this.handleShowDateAndTime(t, v, c);
        this._updateTimeInDateRange(t, v);
      } else {
        let e = ej(n, a + 1, r);
        this.handleDateSelected({
          fullDate: e,
          fullValidDate: v
        }, t);
        this.handleShowDateAndTime(t, v);
        this._adapter.notifySelectedChange([v]);
      }
    }
    _updateTimeInDateRange(e, t) {
      let {
        isControlledComponent: n,
        dateFnsLocale: a
      } = this.getProps();
      let r = this.getState("rangeStart");
      let i = this.getState("rangeEnd");
      let o = this.getValidDateFormat();
      if (r && i) {
        let s = Q(r, o, undefined, a);
        let l = Q(i, o, undefined, a);
        if (e === d.PANEL_TYPE_RIGHT) {
          l = this._mergeDateAndTime(t, t);
          i = dateFormatUtil.formatDate(l, d.FORMAT_DATE_TIME);
          if (this._isNeedSwap(r, i)) {
            [r, i] = [i, r];
            [s, l] = [l, s];
          }
          if (!n) {
            this._adapter.setRangeEnd(i);
          }
        } else {
          s = this._mergeDateAndTime(t, t);
          r = dateFormatUtil.formatDate(s, d.FORMAT_DATE_TIME);
          if (this._isNeedSwap(r, i)) {
            [r, i] = [i, r];
            [s, l] = [l, s];
          }
          if (!n) {
            this._adapter.setRangeStart(r);
          }
        }
        this._adapter.notifySelectedChange([s, l]);
      }
    }
    _updatePanelDetail(e, t) {
      let {
        monthLeft: n,
        monthRight: a
      } = this.getStates();
      if (e === d.PANEL_TYPE_RIGHT) {
        this._adapter.updateMonthOnRight(Object.assign(Object.assign({}, a), t));
      } else {
        this._adapter.updateMonthOnLeft(Object.assign(Object.assign({}, n), t));
      }
    }
    showYearPicker(e) {
      this._updatePanelDetail(e, {
        isTimePickerOpen: false,
        isYearPickerOpen: true
      });
    }
    showTimePicker(e, t) {
      if (!this.getProp("disabledTimePicker")) {
        this._updatePanelDetail(e, {
          isTimePickerOpen: true,
          isYearPickerOpen: false
        });
      }
    }
    showDatePanel(e) {
      this._updatePanelDetail(e, {
        isTimePickerOpen: false,
        isYearPickerOpen: false
      });
    }
    getYAMOpenType() {
      let {
        monthLeft: e,
        monthRight: t
      } = this._adapter.getStates();
      let n = e.isYearPickerOpen;
      let a = t.isYearPickerOpen;
      if (n && a) {
        return "both";
      } else if (n) {
        return "left";
      } else if (a) {
        return "right";
      } else {
        return "none";
      }
    }
  }
  var semiIconButton = require("semi-icon-button") /*id: 845645*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  let eB = iconComponentFactory.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.6185 4.39653C13.1272 4.92524 13.1272 5.78245 12.6185 6.31116L7.14483 12L12.6185 17.6888C13.1272 18.2176 13.1272 19.0748 12.6185 19.6035C12.1098 20.1322 11.285 20.1322 10.7763 19.6035L4.38153 12.9573C3.87282 12.4286 3.87282 11.5714 4.38153 11.0427L10.7763 4.39653C11.285 3.86782 12.1098 3.86782 12.6185 4.39653Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.6185 4.39653C20.1272 4.92524 20.1272 5.78245 19.6185 6.31116L14.1448 12L19.6185 17.6888C20.1272 18.2176 20.1272 19.0748 19.6185 19.6035C19.1098 20.1322 18.285 20.1322 17.7763 19.6035L11.3815 12.9573C10.8728 12.4286 10.8728 11.5714 11.3815 11.0427L17.7763 4.39653C18.285 3.86782 19.1098 3.86782 19.6185 4.39653Z",
      fill: "currentColor"
    }));
  }, "double_chevron_left");
  var chevronLeftIcon = require("chevron-left-icon") /*id: 220673*/;
  var chevronRightIcon = require("chevron-right-icon") /*id: 386685*/;
  let eX = iconComponentFactory.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.38153 4.39653C4.89024 3.86782 5.71502 3.86782 6.22373 4.39653L12.6185 11.0427C13.1272 11.5714 13.1272 12.4286 12.6185 12.9573L6.22373 19.6035C5.71502 20.1322 4.89024 20.1322 4.38153 19.6035C3.87282 19.0748 3.87282 18.2176 4.38153 17.6888L9.85517 12L4.38153 6.31116C3.87282 5.78245 3.87282 4.92524 4.38153 4.39653Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.3815 4.39653C11.8902 3.86782 12.715 3.86782 13.2237 4.39653L19.6185 11.0427C20.1272 11.5714 20.1272 12.4286 19.6185 12.9573L13.2237 19.6035C12.715 20.1322 11.8902 20.1322 11.3815 19.6035C10.8728 19.0748 10.8728 18.2176 11.3815 17.6888L16.8552 12L11.3815 6.31116C10.8728 5.78245 10.8728 4.92524 11.3815 4.39653Z",
      fill: "currentColor"
    }));
  }, "double_chevron_right");
  let eQ = u.NAVIGATION;
  class eK extends reactCoreLibraryReexport.PureComponent {
    constructor(e) {
      super(e);
      this.navRef = reactCoreLibraryReexport.createRef();
    }
    render() {
      let {
        forwardRef: e,
        monthText: t,
        onMonthClick: n,
        onNextMonth: r,
        onPrevMonth: i,
        onPrevYear: o,
        onNextYear: s,
        density: l,
        shouldBimonthSwitch: u,
        panelType: c
      } = this.props;
      let h = "borderless";
      let f = l === "compact" ? "default" : "large";
      let p = l === "compact" ? "small" : "default";
      let g = c === d.PANEL_TYPE_LEFT;
      let m = c === d.PANEL_TYPE_RIGHT;
      let v = {};
      let y = {};
      if (u && m) {
        v.visibility = "hidden";
      }
      if (u && g) {
        y.visibility = "hidden";
      }
      let T = e || this.navRef;
      return reactCoreLibraryReexport.createElement("div", {
        className: eQ,
        ref: T
      }, reactCoreLibraryReexport.createElement(semiIconButton.SemiIconButton, {
        key: "double-chevron-left",
        "aria-label": "Previous year",
        icon: reactCoreLibraryReexport.createElement(eB, {
          "aria-hidden": true,
          size: f
        }),
        size: p,
        theme: h,
        noHorizontalPadding: true,
        onClick: o,
        style: v
      }), reactCoreLibraryReexport.createElement(semiIconButton.SemiIconButton, {
        key: "chevron-left",
        "aria-label": "Previous month",
        icon: reactCoreLibraryReexport.createElement(chevronLeftIcon.ChevronLeftIcon, {
          "aria-hidden": true,
          size: f
        }),
        size: p,
        onClick: i,
        theme: h,
        noHorizontalPadding: true,
        style: v
      }), reactCoreLibraryReexport.createElement("div", {
        className: `${eQ}-month`
      }, reactCoreLibraryReexport.createElement(semiButtonWrapperComponent.SemiButtonWrapper, {
        onClick: n,
        theme: h,
        size: p
      }, reactCoreLibraryReexport.createElement("span", null, t))), reactCoreLibraryReexport.createElement(semiIconButton.SemiIconButton, {
        key: "chevron-right",
        "aria-label": "Next month",
        icon: reactCoreLibraryReexport.createElement(chevronRightIcon.ChevronRightIcon, {
          "aria-hidden": true,
          size: f
        }),
        size: p,
        onClick: r,
        theme: h,
        noHorizontalPadding: true,
        style: y
      }), reactCoreLibraryReexport.createElement(semiIconButton.SemiIconButton, {
        key: "double-chevron-right",
        "aria-label": "Next year",
        icon: reactCoreLibraryReexport.createElement(eX, {
          "aria-hidden": true,
          size: f
        }),
        size: p,
        theme: h,
        noHorizontalPadding: true,
        onClick: s,
        style: y
      }));
    }
  }
  eK.propTypes = {
    monthText: _.string,
    density: _.string,
    onMonthClick: _.func,
    onNextMonth: _.func,
    onPrevMonth: _.func,
    onNextYear: _.func,
    onPrevYear: _.func,
    navPrev: _.node,
    navNext: _.node,
    shouldBimonthSwitch: _.bool,
    panelType: _.oneOf([d.PANEL_TYPE_LEFT, d.PANEL_TYPE_RIGHT])
  };
  eK.defaultProps = {
    monthText: "",
    onMonthClick: emptyExportFunction.emptyFunction,
    onNextMonth: emptyExportFunction.emptyFunction,
    onPrevMonth: emptyExportFunction.emptyFunction,
    onNextYear: emptyExportFunction.emptyFunction,
    onPrevYear: emptyExportFunction.emptyFunction
  };
  var eJ = e => {
    let {
      weekStartsOn: t = 0
    } = e;
    let n = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let e = 0; e < t; e++) {
      n.push(n.shift());
    }
    return n;
  };
  class e0 extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
    }
    init() {
      this._getToday();
      this.getMonthTable();
    }
    _getToday() {
      let e = new Date();
      let t = dateFormatUtil.formatDate(e, "yyyy-MM-dd");
      this._adapter.updateToday(t);
    }
    getMonthTable() {
      let e = this._adapter.getProp("month");
      let t = this.getState("weeksRowNum");
      if (e) {
        this.updateWeekDays();
        let n = eU(e, this._adapter.getProp("weekStartsOn"));
        let {
          weeks: a
        } = n;
        this._adapter.updateMonthTable(n);
        if (nullCheckUtil_1.isNil(t)) {
          this._adapter.setWeeksRowNum(a.length);
        } else if (Array.isArray(a) && a.length !== t) {
          this._adapter.setWeeksRowNum(a.length, () => {
            this._adapter.notifyWeeksRowNumChange(a.length);
          });
        }
      }
    }
    updateWeekDays() {
      let e = eJ({
        weekStartsOn: this._adapter.getProp("weekStartsOn")
      });
      this._adapter.setWeekDays(e);
    }
    destroy() {}
    handleClick(e) {
      this._adapter.notifyDayClick(e);
    }
    handleHover(e) {
      this._adapter.notifyDayHover(e);
    }
  }
  function e1(e, t) {
    return function (e, t) {
      validateArgumentCount.validateArgCount(2, arguments);
      var n = dateNormalizer.normalizeDate(e);
      var a = dateNormalizer.normalizeDate(t);
      return n.getTime() > a.getTime();
    }(eY(e) ? H(e) : e, eY(t) ? H(t) : t);
  }
  function e2(e, t) {
    return eP(eY(e) ? H(e) : e, eY(t) ? H(t) : t);
  }
  function e3(e, t) {
    let {
      start: n,
      end: a
    } = t;
    let r = eY(e) ? H(e) : e;
    let i = eY(n) ? H(n) : n;
    let o = eY(a) ? H(a) : a;
    return eF(i, o) && function (e, t) {
      validateArgumentCount.validateArgCount(2, arguments);
      var n = dateNormalizer.normalizeDate(e).getTime();
      var a = dateNormalizer.normalizeDate(t.start).getTime();
      var r = dateNormalizer.normalizeDate(t.end).getTime();
      if (!(a <= r)) {
        throw RangeError("Invalid interval");
      }
      return n >= a && n <= r;
    }(r, {
      start: i,
      end: o
    }) && !I(r, i) && !I(r, o);
  }
  let e5 = u.PREFIX;
  class e7 extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.state = {
        weekdays: [],
        month: {
          weeks: [],
          monthText: ""
        },
        todayText: "",
        weeksRowNum: e.weeksRowNum
      };
      this.monthRef = reactCoreLibraryReexport.createRef();
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        updateToday: e => this.setState({
          todayText: e
        }),
        setWeekDays: e => this.setState({
          weekdays: e
        }),
        setWeeksRowNum: (e, t) => this.setState({
          weeksRowNum: e
        }, t),
        updateMonthTable: e => this.setState({
          month: e
        }),
        notifyDayClick: e => this.props.onDayClick(e),
        notifyDayHover: e => this.props.onDayHover(e),
        notifyWeeksRowNumChange: e => this.props.onWeeksRowNumChange(e)
      });
    }
    componentDidMount() {
      this.foundation = new e0(this.adapter);
      this.foundation.init();
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    componentDidUpdate(e, t) {
      if (e.month !== this.props.month) {
        this.foundation.getMonthTable();
      }
    }
    getSingleDayStatus(e) {
      let {
        rangeInputFocus: t
      } = this.props;
      let {
        fullDate: n,
        todayText: a,
        selected: r,
        disabledDate: i,
        rangeStart: o,
        rangeEnd: s
      } = e;
      let l = n === a;
      let u = r.has(n);
      let d = i && i(H(n), {
        rangeStart: o,
        rangeEnd: s,
        rangeInputFocus: t
      });
      if (!d && this.props.rangeInputFocus === "rangeStart" && s && this.props.focusRecordsRef && this.props.focusRecordsRef.current.rangeEnd) {
        d = e1(n, s.trim().split(/\s+/)[0]);
      }
      if (!d && this.props.rangeInputFocus === "rangeEnd" && o && this.props.focusRecordsRef && this.props.focusRecordsRef.current.rangeStart) {
        d = eL(n, o.trim().split(/\s+/)[0]);
      }
      return {
        isToday: l,
        isSelected: u,
        isDisabled: d
      };
    }
    getDateRangeStatus(e) {
      let t;
      let n;
      let a;
      let r;
      let i;
      let o;
      let s;
      let l;
      let u;
      let d;
      let c;
      let h;
      let {
        rangeStart: f,
        rangeEnd: p,
        fullDate: g,
        hoverDay: m,
        offsetRangeStart: v,
        offsetRangeEnd: y,
        rangeInputFocus: T
      } = e;
      let b = !!f || !!p;
      let w = !!f && !!p;
      let _ = v || y;
      if (!b) {
        return {};
      }
      let C = e2(m, g);
      if (f) {
        a = e2(g, f);
        if (T === "rangeEnd") {
          t = e3(g, {
            start: f,
            end: m
          });
        }
      }
      if (p) {
        r = e2(g, p);
        if (T === "rangeStart") {
          n = e3(g, {
            start: m,
            end: p
          });
        }
      }
      if (!w && b) {
        i = C;
      }
      if (!_) {
        o = t || n || C;
      }
      if (w) {
        s = e3(g, {
          start: f,
          end: p
        });
        if (!_) {
          l = a && e1(f, m);
          u = r && eL(p, m);
          d = C && T === "rangeStart";
          c = C && T === "rangeEnd";
          h = C && e3(m, {
            start: f,
            end: p
          });
        }
      }
      return {
        isHoverDay: C,
        isSelectedStart: a,
        isSelectedEnd: r,
        isInRange: s,
        isHover: o,
        isSelectedStartAfterHover: l,
        isSelectedEndBeforeHover: u,
        isHoverDayInRange: h,
        isHoverDayInStartSelection: d,
        isHoverDayInEndSelection: c,
        isHoverDayAroundOneSelected: i
      };
    }
    getOffsetDateStatus(e) {
      let t;
      let n;
      let {
        offsetRangeStart: a,
        offsetRangeEnd: r,
        rangeStart: i,
        rangeEnd: o,
        fullDate: s,
        hoverDay: l
      } = e;
      if (!a && !r) {
        return {};
      }
      let u = e3(s, {
        start: i,
        end: o
      });
      let d = e2(l, s);
      let c = i && e2(s, i);
      let h = o && e2(s, o);
      let f = !!i && !!o;
      let p = e2(s, a);
      let g = e2(s, r);
      if (f) {
        t = u && d;
      }
      if (a && r) {
        n = c || e3(s, {
          start: a,
          end: r
        }) || h;
      }
      return {
        isOffsetRangeStart: p,
        isOffsetRangeEnd: g,
        isHoverInOffsetRange: t,
        isHoverDayOffset: d,
        isInOffsetRange: n
      };
    }
    getDayStatus(e, t) {
      let {
        fullDate: n
      } = e;
      let {
        hoverDay: a,
        rangeStart: r,
        rangeEnd: i,
        todayText: o,
        offsetRangeStart: s,
        offsetRangeEnd: l,
        disabledDate: u,
        selected: d,
        rangeInputFocus: c
      } = t;
      let h = this.getSingleDayStatus({
        fullDate: n,
        todayText: o,
        hoverDay: a,
        selected: d,
        disabledDate: u,
        rangeStart: r,
        rangeEnd: i
      });
      let f = this.getDateRangeStatus(Object.assign({
        fullDate: n,
        rangeStart: r,
        rangeEnd: i,
        hoverDay: a,
        offsetRangeStart: s,
        offsetRangeEnd: l,
        rangeInputFocus: c
      }, h));
      let p = this.getOffsetDateStatus(Object.assign(Object.assign({
        offsetRangeStart: s,
        offsetRangeEnd: l,
        rangeStart: r,
        rangeEnd: i,
        fullDate: n,
        hoverDay: a
      }, h), f));
      return Object.assign(Object.assign(Object.assign({}, h), f), p);
    }
    renderDayOfWeek() {
      let {
        locale: e
      } = this.props;
      let t = b(u.WEEKDAY);
      let n = b(`${e5}-weekday-item`);
      let {
        weekdays: r
      } = this.state;
      let i = r.map(t => e.weeks[t]);
      return reactCoreLibraryReexport.createElement("div", {
        role: "row",
        className: t
      }, i.map((e, t) => reactCoreLibraryReexport.createElement("div", {
        role: "columnheader",
        key: e + t,
        className: n
      }, e)));
    }
    renderWeeks() {
      let {
        month: e
      } = this.state;
      let {
        weeks: t
      } = e;
      let {
        weeksRowNum: n
      } = this.props;
      let r = {};
      if (n) {
        r = {
          height: n * c.WEEK_HEIGHT
        };
      }
      let i = b(u.WEEKS);
      return reactCoreLibraryReexport.createElement("div", {
        className: i,
        style: r
      }, t.map((e, t) => this.renderWeek(e, t)));
    }
    renderWeek(e, t) {
      let n = u.WEEK;
      return reactCoreLibraryReexport.createElement("div", {
        role: "row",
        className: n,
        key: t
      }, e.map((e, t) => this.renderDay(e, t)));
    }
    renderDay(e, t) {
      let {
        todayText: n
      } = this.state;
      let {
        renderFullDate: r,
        renderDate: i
      } = this.props;
      let {
        fullDate: o,
        dayNumber: s
      } = e;
      if (!o) {
        return reactCoreLibraryReexport.createElement("div", {
          role: "gridcell",
          tabIndex: -1,
          key: s + t,
          className: u.DAY
        }, reactCoreLibraryReexport.createElement("span", null));
      }
      let l = this.getDayStatus(e, Object.assign({
        todayText: n
      }, this.props));
      let d = b(u.DAY, {
        [u.DAY_TODAY]: l.isToday,
        [u.DAY_IN_RANGE]: l.isInRange,
        [u.DAY_HOVER]: l.isHover,
        [u.DAY_SELECTED]: l.isSelected,
        [u.DAY_SELECTED_START]: l.isSelectedStart,
        [u.DAY_SELECTED_END]: l.isSelectedEnd,
        [u.DAY_DISABLED]: l.isDisabled,
        [u.DAY_HOVER_DAY]: l.isHoverDayOffset,
        [u.DAY_IN_OFFSET_RANGE]: l.isInOffsetRange,
        [u.DAY_SELECTED_RANGE_HOVER]: l.isHoverInOffsetRange,
        [u.DAY_OFFSET_RANGE_START]: l.isOffsetRangeStart,
        [u.DAY_OFFSET_RANGE_END]: l.isOffsetRangeEnd,
        [u.DAY_SELECTED_START_AFTER_HOVER]: l.isSelectedStartAfterHover,
        [u.DAY_SELECTED_END_BEFORE_HOVER]: l.isSelectedEndBeforeHover,
        [u.DAY_HOVER_DAY_BEFORE_RANGE]: l.isHoverDayInStartSelection,
        [u.DAY_HOVER_DAY_AFTER_RANGE]: l.isHoverDayInEndSelection,
        [u.DAY_HOVER_DAY_AROUND_SINGLE_SELECTED]: l.isHoverDayAroundOneSelected
      });
      let c = b({
        [`${u.DAY}-main`]: true
      });
      let h = [s, o, l];
      let f = isFunctionUtil_1.isFunction(r);
      return reactCoreLibraryReexport.createElement("div", {
        role: "gridcell",
        tabIndex: l.isDisabled ? -1 : 0,
        "aria-disabled": l.isDisabled,
        "aria-selected": l.isSelected,
        "aria-label": o,
        className: f ? u.DAY : d,
        title: o,
        key: s + t,
        onClick: t => !l.isDisabled && this.foundation.handleClick(e),
        onMouseEnter: () => this.foundation.handleHover(e),
        onMouseLeave: () => this.foundation.handleHover()
      }, f ? r(...h) : reactCoreLibraryReexport.createElement("div", {
        className: c
      }, isFunctionUtil_1.isFunction(i) ? i(s, o) : reactCoreLibraryReexport.createElement("span", null, s)));
    }
    render() {
      let {
        forwardRef: e,
        multiple: t
      } = this.props;
      let n = this.renderDayOfWeek();
      let r = this.renderWeeks();
      let i = b(u.MONTH);
      let o = e || this.monthRef;
      return reactCoreLibraryReexport.createElement("div", {
        role: "grid",
        "aria-multiselectable": t,
        ref: o,
        className: i
      }, n, r);
    }
  }
  e7.propTypes = {
    month: _.object,
    selected: _.object,
    rangeStart: _.string,
    rangeEnd: _.string,
    offsetRangeStart: _.string,
    offsetRangeEnd: _.string,
    onDayClick: _.func,
    onDayHover: _.func,
    weekStartsOn: _.number,
    disabledDate: _.func,
    weeksRowNum: _.number,
    onWeeksRowNumChange: _.func,
    renderDate: _.func,
    renderFullDate: _.func,
    hoverDay: _.string,
    startDateOffset: _.func,
    endDateOffset: _.func,
    rangeInputFocus: _.oneOfType([_.string, _.bool]),
    focusRecordsRef: _.object,
    multiple: _.bool
  };
  e7.defaultProps = {
    month: new Date(),
    selected: new Set(),
    rangeStart: "",
    rangeEnd: "",
    onDayClick: emptyExportFunction.emptyFunction,
    onDayHover: emptyExportFunction.emptyFunction,
    onWeeksRowNumChange: emptyExportFunction.emptyFunction,
    weekStartsOn: c.WEEK_START_ON,
    disabledDate: alwaysFalseUtil.alwaysFalse,
    weeksRowNum: 0
  };
  var timePickerPanelComponent = require("time-picker-panel-component") /*id: 107883*/;
  function e4(e, t) {
    validateArgumentCount.validateArgCount(2, arguments);
    var n = dateNormalizer.normalizeDate(e);
    var a = numberToIntegerConverter.toInteger(t);
    if (isNaN(n.getTime())) {
      return new Date(NaN);
    } else {
      n.setFullYear(a);
      return n;
    }
  }
  class e8 extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
    }
    init() {}
    destroy() {}
    selectYear(e, t) {
      let {
        currentYear: n,
        currentMonth: a
      } = this.getStates();
      let {
        type: r
      } = this.getProps();
      let i = d.PANEL_TYPE_LEFT;
      let o = d.PANEL_TYPE_RIGHT;
      let s = deepCloneUtil.deepClone(n);
      s[t] = e.value;
      if (r === "monthRange") {
        let n = s[i] === s[o] && a[i] > a[o];
        if (t === i && e.value > s[o] || t === i && n) {
          s[o] = e.value + 1;
        } else if (t === o && n) {
          s[i] = e.value - 1;
        }
      }
      this._adapter.setCurrentYear(s, () => this.autoSelectMonth(e, t, s));
      this._adapter.notifySelectYear(s);
    }
    selectMonth(e, t) {
      let {
        currentMonth: n,
        currentYear: a
      } = this.getStates();
      let {
        type: r
      } = this.getProps();
      let i = d.PANEL_TYPE_LEFT;
      let o = d.PANEL_TYPE_RIGHT;
      let s = deepCloneUtil.deepClone(n);
      s[t] = e.month;
      if (r === "monthRange" && t === i && a[i] === a[o] && e.value > s[o]) {
        s[o] = e.month + 1;
      }
      this._adapter.setCurrentMonth(s);
      this._adapter.notifySelectMonth(s);
    }
    autoSelectMonth(e, t, n) {
      let {
        disabledDate: a,
        locale: r
      } = this._adapter.getProps();
      let {
        months: i,
        currentMonth: o
      } = this._adapter.getStates();
      let s = e4(Date.now(), e.year);
      if (a(eA(s, o[t] - 1))) {
        let e;
        let r = i.findIndex(e => {
          let {
            month: n
          } = e;
          return n === o[t];
        });
        if (!(e = i.slice(r).find(e => {
          let {
            month: t
          } = e;
          return !a(eA(s, t - 1));
        }))) {
          e = i.slice(0, r).find(e => {
            let {
              month: t
            } = e;
            return !a(eA(s, t - 1));
          });
        }
        if (e) {
          let a = deepCloneUtil.deepClone(o);
          a[t] = e.month;
          this._adapter.setCurrentYearAndMonth(n, a);
          this._adapter.notifySelectYearAndMonth(n, a);
        }
      }
    }
    backToMain() {
      this._adapter.notifyBackToMain();
    }
  }
  var semiScrollListComponent = require("semi-scroll-list-component") /*id: 821094*/;
  var semiScrollList = require("semi-scroll-list") /*id: 777395*/;
  var tt = (e, t) => {
    let n = new Date().getFullYear();
    let a = typeof e == "number" ? e : n - 100;
    let r = typeof t == "number" ? t : n + 100;
    if (r < a) {
      [a, r] = [r, a];
    }
    return Array.from({
      length: r - a + 1
    }, (e, t) => a + t);
  };
  let tn = `${semiIdentifier.semiIdentifier}-datepicker`;
  class ta extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.selectYear = (e, t) => {
        this.foundation.selectYear(e, t);
      };
      this.selectMonth = (e, t) => {
        this.foundation.selectMonth(e, t);
      };
      this.reselect = () => {
        ["yearRef", "monthRef"].forEach(e => {
          let t = this[e];
          if (t && t.current && t.current.scrollToIndex) {
            t.current.scrollToIndex();
          }
        });
      };
      this.backToMain = e => {
        e.nativeEvent.stopImmediatePropagation();
        this.foundation.backToMain();
      };
      let t = new Date();
      let {
        currentYear: n,
        currentMonth: r
      } = e;
      this.state = {
        years: tt(e.startYear, e.endYear).map(e => ({
          value: e,
          year: e
        })),
        months: Array(12).fill(0).map((e, t) => ({
          value: t + 1,
          month: t + 1
        })),
        currentYear: {
          left: n.left || t.getFullYear(),
          right: n.right || t.getFullYear()
        },
        currentMonth: {
          left: r.left || t.getMonth() + 1,
          right: r.right || t.getMonth() + 2
        }
      };
      this.yearRef = reactCoreLibraryReexport.createRef();
      this.monthRef = reactCoreLibraryReexport.createRef();
      this.foundation = new e8(this.adapter);
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        setCurrentYear: (e, t) => this.setState({
          currentYear: e
        }, t),
        setCurrentMonth: e => this.setState({
          currentMonth: e
        }),
        setCurrentYearAndMonth: (e, t) => this.setState({
          currentYear: e,
          currentMonth: t
        }),
        notifySelectYear: e => this.props.onSelect({
          currentMonth: this.state.currentMonth,
          currentYear: e
        }),
        notifySelectMonth: e => this.props.onSelect({
          currentYear: this.state.currentYear,
          currentMonth: e
        }),
        notifySelectYearAndMonth: (e, t) => this.props.onSelect({
          currentYear: e,
          currentMonth: t
        }),
        notifyBackToMain: () => this.props.onBackToMain()
      });
    }
    static getDerivedStateFromProps(e, t) {
      let n = {};
      if (!deepEqualUtil_1.deepEqual(e.currentYear, t.currentYear)) {
        let t = new Date().getFullYear();
        n.currentYear = {
          left: e.currentYear.left || t,
          right: e.currentYear.right || t
        };
      }
      if (!deepEqualUtil_1.deepEqual(e.currentMonth, t.currentMonth)) {
        let t = new Date().getMonth();
        n.currentMonth = {
          left: e.currentMonth.left || t + 1,
          right: e.currentMonth.right || t + 2
        };
      }
      return n;
    }
    renderColYear(e) {
      let {
        years: t,
        currentYear: n,
        currentMonth: r,
        months: i
      } = this.state;
      let {
        disabledDate: o,
        localeCode: s,
        yearCycled: l,
        yearAndMonthOpts: u
      } = this.props;
      let c = eA(Date.now(), r[e] - 1);
      let h = d.PANEL_TYPE_LEFT;
      let f = d.PANEL_TYPE_RIGHT;
      let p = t => e === f && !!n[h] && n[h] > t;
      let g = t.map(e => {
        let {
          value: t,
          year: n
        } = e;
        let a = i.every(e => {
          let {
            month: t
          } = e;
          return o(eN(c, {
            year: n,
            month: t - 1
          }));
        });
        let r = p(n);
        return {
          year: n,
          value: t,
          disabled: a || r
        };
      });
      let m = e => e;
      if (s === "zh-CN" || s === "zh-TW") {
        m = e => `${e}\u{5E74}`;
      }
      return reactCoreLibraryReexport.createElement(semiScrollList.ScrollList, Object.assign({
        ref: this.yearRef,
        cycled: l,
        list: g,
        transform: m,
        selectedIndex: t.findIndex(t => t.value === n[e]),
        type: "year",
        onSelect: t => this.selectYear(t, e),
        mode: "normal"
      }, u));
    }
    renderColMonth(e) {
      let {
        months: t,
        currentMonth: n,
        currentYear: r
      } = this.state;
      let {
        locale: i,
        localeCode: o,
        monthCycled: s,
        disabledDate: l,
        yearAndMonthOpts: u
      } = this.props;
      let c = e => e;
      let h = e4(Date.now(), r[e]);
      let f = d.PANEL_TYPE_LEFT;
      let p = d.PANEL_TYPE_RIGHT;
      if (o === "zh-CN" || o === "zh-TW") {
        c = e => `${e}\u{6708}`;
      }
      let g = t.map(t => {
        let {
          value: a,
          month: o
        } = t;
        let s = e === p && n[f] && r[f] === r[p] && n[f] > o;
        return {
          month: o,
          disabled: l(eA(h, o - 1)) || s,
          value: i.fullMonths[a]
        };
      });
      let m = g.findIndex(t => t.month === n[e]);
      return reactCoreLibraryReexport.createElement(semiScrollList.ScrollList, Object.assign({
        ref: this.monthRef,
        cycled: s,
        list: g,
        transform: c,
        selectedIndex: m,
        type: "month",
        onSelect: t => this.selectMonth(t, e),
        mode: "normal"
      }, u));
    }
    renderPanel(e) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(semiScrollListComponent.ScrollList, null, this.renderColYear(e), this.renderColMonth(e)));
    }
    render() {
      let {
        locale: e,
        noBackBtn: t,
        density: n,
        presetPosition: r,
        renderQuickControls: i,
        renderDateInput: o,
        type: s
      } = this.props;
      let l = `${tn}-yearmonth-header`;
      let u = `${tn}-yearmonth-body`;
      let c = e.selectDate;
      let h = d.PANEL_TYPE_LEFT;
      let f = d.PANEL_TYPE_RIGHT;
      let p = null;
      p = s === "month" ? this.renderPanel(h) : reactCoreLibraryReexport.createElement("div", {
        className: u
      }, this.renderPanel(h), this.renderPanel(f));
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, t ? null : reactCoreLibraryReexport.createElement("div", {
        className: l
      }, reactCoreLibraryReexport.createElement(semiIconButton.SemiIconButton, {
        noHorizontalPadding: false,
        icon: reactCoreLibraryReexport.createElement(chevronLeftIcon.ChevronLeftIcon, {
          "aria-hidden": true,
          size: n === "compact" ? "default" : "large"
        }),
        size: n === "compact" ? "small" : "default",
        onClick: this.backToMain
      }, reactCoreLibraryReexport.createElement("span", null, c))), r ? reactCoreLibraryReexport.createElement("div", {
        style: {
          display: "flex"
        }
      }, r === "left" && s !== "monthRange" && i, reactCoreLibraryReexport.createElement("div", null, o, p), r === "right" && s !== "monthRange" && i) : reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, o, p));
    }
  }
  ta.propTypes = {
    currentYear: _.object,
    currentMonth: _.object,
    onSelect: _.func,
    locale: _.object,
    localeCode: _.string,
    monthCycled: _.bool,
    yearCycled: _.bool,
    noBackBtn: _.bool,
    disabledDate: _.func,
    density: _.string,
    presetPosition: _.oneOf(d.PRESET_POSITION_SET),
    renderQuickControls: _.node,
    renderDateInput: _.node,
    type: _.oneOf(d.TYPE_SET),
    startYear: _.number,
    endYear: _.number
  };
  ta.defaultProps = {
    disabledDate: alwaysFalseUtil.alwaysFalse,
    monthCycled: false,
    yearCycled: false,
    noBackBtn: false,
    onSelect: emptyExportFunction.emptyFunction,
    type: "month"
  };
  var clockIconComponent = require("clock-icon-component") /*id: 667634*/;
  let ti = u.PREFIX;
  class to extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.cacheRefCurrent = (e, t) => {
        if (typeof e == "string" && e.length) {
          this.adapter.setCache(e, t);
        }
      };
      this.leftIsYearOrTime = e => {
        let {
          monthLeft: t
        } = e || this.state;
        return !!t && (!!t.isTimePickerOpen || !!t.isYearPickerOpen);
      };
      this.rightIsYearOrTime = e => {
        let {
          monthRight: t
        } = e || this.state;
        return !!t && (!!t.isTimePickerOpen || !!t.isYearPickerOpen);
      };
      this.calcScrollListHeight = () => {
        let e = this.adapter.getCache(`wrap-${d.PANEL_TYPE_LEFT}`);
        let t = this.adapter.getCache(`wrap-${d.PANEL_TYPE_RIGHT}`);
        let n = this.adapter.getCache(`switch-${d.PANEL_TYPE_LEFT}`);
        let a = this.adapter.getCache(`switch-${d.PANEL_TYPE_RIGHT}`);
        let r = e && e.getBoundingClientRect();
        let i = t && t.getBoundingClientRect();
        let o = r && r.height || 0;
        let s = i && i.height || 0;
        if (n) {
          o += n.getBoundingClientRect().height;
        }
        if (a) {
          s += a.getBoundingClientRect().height;
        }
        return Math.max(o, s);
      };
      this.handleWeeksRowNumChange = (e, t) => {
        let n = t === d.PANEL_TYPE_RIGHT;
        let a = t === d.PANEL_TYPE_RIGHT;
        let r = this.leftIsYearOrTime() && this.rightIsYearOrTime();
        if (this.foundation.isRangeType() && !r) {
          let t = {
            weeksRowNum: e,
            currentPanelHeight: this.calcScrollListHeight()
          };
          this.setState(t, () => {
            if (this.leftIsYearOrTime() && a || this.rightIsYearOrTime() && n) {
              this.reselect();
            }
          });
        }
      };
      this.reselect = () => {
        [`timepicker-${d.PANEL_TYPE_LEFT}`, `timepicker-${d.PANEL_TYPE_RIGHT}`, `yam-${d.PANEL_TYPE_LEFT}`, `yam-${d.PANEL_TYPE_RIGHT}`].forEach(e => {
          let t = this.adapter.getCache(e);
          if (t && typeof t.reselect == "function") {
            t.reselect();
          }
        });
      };
      this.getYAMOpenType = () => this.foundation.getYAMOpenType();
      let t = e.format || J(e.type);
      let {
        nowDate: n,
        nextDate: a
      } = eh({
        defaultPickerValue: e.defaultPickerValue,
        format: t,
        dateFnsLocale: e.dateFnsLocale
      });
      let r = {
        selected: new Set()
      };
      let i = {
        monthLeft: {
          pickerDate: n,
          showDate: n,
          isTimePickerOpen: false,
          isYearPickerOpen: false
        },
        monthRight: {
          pickerDate: a,
          showDate: a,
          isTimePickerOpen: false,
          isYearPickerOpen: false
        },
        maxWeekNum: 0,
        hoverDay: "",
        rangeStart: e.rangeStart,
        rangeEnd: "",
        currentPanelHeight: 0,
        offsetRangeStart: "",
        offsetRangeEnd: ""
      };
      this.state = Object.assign(Object.assign({}, r), i);
      this.foundation = new eV(this.adapter);
    }
    get dateAdapter() {
      return {
        updateDaySelected: e => this.setState({
          selected: e
        })
      };
    }
    get rangeAdapter() {
      return {
        setRangeStart: e => this.setState({
          rangeStart: e
        }),
        setRangeEnd: e => this.setState({
          rangeEnd: e
        }),
        setHoverDay: e => this.setState({
          hoverDay: e
        }),
        setWeeksHeight: e => this.setState({
          maxWeekNum: e
        }),
        setOffsetRangeStart: e => this.setState({
          offsetRangeStart: e
        }),
        setOffsetRangeEnd: e => this.setState({
          offsetRangeEnd: e
        })
      };
    }
    get adapter() {
      return Object.assign(Object.assign(Object.assign(Object.assign({}, super.adapter), this.dateAdapter), this.rangeAdapter), {
        updateMonthOnLeft: e => this.setState({
          monthLeft: e
        }),
        updateMonthOnRight: e => this.setState({
          monthRight: e
        }),
        notifySelectedChange: (e, t) => this.props.onChange(e, t),
        notifyMaxLimit: e => this.props.onMaxSelect(e),
        notifyPanelChange: (e, t) => this.props.onPanelChange(e, t),
        setRangeInputFocus: e => this.props.setRangeInputFocus(e),
        isAnotherPanelHasOpened: e => this.props.isAnotherPanelHasOpened(e)
      });
    }
    componentDidMount() {
      super.componentDidMount();
    }
    componentDidUpdate(e, t) {
      let {
        defaultValue: n,
        defaultPickerValue: a
      } = this.props;
      if (e.defaultValue !== n) {
        this.foundation.updateSelectedFromProps(n);
      }
      if (e.defaultPickerValue !== a) {
        this.foundation.initDefaultPickerValue();
      }
      if (this.foundation.isRangeType()) {
        let e = this.leftIsYearOrTime(t) && this.rightIsYearOrTime(t);
        let n = this.leftIsYearOrTime(t) && !this.rightIsYearOrTime(t) || !this.leftIsYearOrTime(t) && this.rightIsYearOrTime(t);
        let a = this.leftIsYearOrTime() && this.rightIsYearOrTime();
        let r = this.leftIsYearOrTime() && !this.rightIsYearOrTime() || !this.leftIsYearOrTime() && this.rightIsYearOrTime();
        if (n && a) {
          this.setState({
            currentPanelHeight: this.calcScrollListHeight()
          }, this.reselect);
        } else if (e && r) {
          this.reselect();
        }
      }
    }
    renderPanel(e, t) {
      let n = b(`${ti}-month-grid-${t}`);
      let {
        monthLeft: r,
        monthRight: i,
        currentPanelHeight: o
      } = this.state;
      let {
        insetInput: s
      } = this.props;
      let l = t === d.PANEL_TYPE_RIGHT ? i : r;
      let {
        isTimePickerOpen: u,
        isYearPickerOpen: c
      } = l;
      let h = this.renderMonth(e, t);
      let f = c ? reactCoreLibraryReexport.createElement("div", {
        className: `${ti}-yam`
      }, this.renderYearAndMonth(t, l)) : null;
      let p = u ? reactCoreLibraryReexport.createElement("div", {
        className: `${ti}-tpk`
      }, this.renderTimePicker(t, l)) : null;
      let g = {};
      let m = this.adapter.getCache(`wrap-${d.PANEL_TYPE_LEFT}`);
      let v = this.adapter.getCache(`wrap-${d.PANEL_TYPE_RIGHT}`);
      let y = t === d.PANEL_TYPE_RIGHT ? v : m;
      if (this.foundation.isRangeType()) {
        if (c || u) {
          g.minWidth = y.getBoundingClientRect().width;
        }
        if (this.leftIsYearOrTime() && this.rightIsYearOrTime() && !s) {
          g.minHeight = o || this.calcScrollListHeight();
        }
      } else if (this.props.type !== "year" && this.props.type !== "month" && (u || c)) {
        n = b(n, `${ti}-yam-showing`);
      }
      return reactCoreLibraryReexport.createElement("div", {
        className: n,
        key: t,
        style: g,
        "x-open-type": c || u ? c ? "year" : "time" : "date"
      }, f, p, this.foundation.isRangeType() ? h : c || u ? null : h, this.renderSwitch(t));
    }
    showYearPicker(e, t) {
      t.nativeEvent.stopImmediatePropagation();
      this.foundation.showYearPicker(e);
    }
    renderMonth(e, t) {
      let {
        selected: n,
        rangeStart: r,
        rangeEnd: i,
        hoverDay: o,
        maxWeekNum: s,
        offsetRangeStart: l,
        offsetRangeEnd: u
      } = this.state;
      let {
        weekStartsOn: c,
        disabledDate: h,
        locale: f,
        localeCode: p,
        renderDate: g,
        renderFullDate: m,
        startDateOffset: v,
        endDateOffset: y,
        density: T,
        rangeInputFocus: b,
        syncSwitchMonth: w,
        multiple: _
      } = this.props;
      let C = "";
      if (e) {
        let t = e ? dateFormatUtil.formatDate(e, "yyyy") : "";
        let n = e ? dateFormatUtil.formatDate(e, "L") : "";
        let a = f.months[n];
        C = f.monthText.replace("${year}", t).replace("${month}", a);
      }
      let E = {};
      let D = t === d.PANEL_TYPE_RIGHT ? this.state.monthRight : this.state.monthLeft;
      let Z = this.foundation.isRangeType();
      if (Z && D && (D.isYearPickerOpen || D.isTimePickerOpen)) {
        E = {
          visibility: "hidden",
          position: "absolute",
          pointerEvents: "none"
        };
      }
      return reactCoreLibraryReexport.createElement("div", {
        ref: e => this.cacheRefCurrent(`wrap-${t}`, e),
        style: E
      }, reactCoreLibraryReexport.createElement(eK, {
        forwardRef: e => this.cacheRefCurrent(`nav-${t}`, e),
        monthText: C,
        density: T,
        onMonthClick: e => this.showYearPicker(t, e),
        onPrevMonth: () => this.foundation.prevMonth(t),
        onNextMonth: () => this.foundation.nextMonth(t),
        onNextYear: () => this.foundation.nextYear(t),
        onPrevYear: () => this.foundation.prevYear(t),
        shouldBimonthSwitch: Z && w,
        panelType: t
      }), reactCoreLibraryReexport.createElement(e7, {
        locale: f,
        localeCode: p,
        forwardRef: e => this.cacheRefCurrent(`month-${t}`, e),
        disabledDate: h,
        weekStartsOn: c,
        month: e,
        selected: n,
        rangeStart: r,
        rangeEnd: i,
        rangeInputFocus: b,
        offsetRangeStart: l,
        offsetRangeEnd: u,
        hoverDay: o,
        weeksRowNum: s,
        renderDate: g,
        renderFullDate: m,
        onDayClick: e => this.foundation.handleDayClick(e, t),
        onDayHover: e => this.foundation.handleDayHover(e, t),
        onWeeksRowNumChange: e => this.handleWeeksRowNumChange(e, t),
        startDateOffset: v,
        endDateOffset: y,
        focusRecordsRef: this.props.focusRecordsRef,
        multiple: _
      }));
    }
    renderTimePicker(e, t) {
      let n;
      let r;
      let {
        type: i,
        locale: o,
        format: s,
        hideDisabledOptions: l,
        timePickerOpts: u,
        dateFnsLocale: c
      } = this.props;
      let {
        pickerDate: h
      } = t;
      let f = b(`${ti}-time`);
      let p = Object.assign(Object.assign({}, u), {
        hideDisabledOptions: l
      });
      let g = this.foundation.calcDisabledTime(e);
      if (g) {
        ["disabledHours", "disabledMinutes", "disabledSeconds"].forEach(e => {
          if (g[e]) {
            p[e] = g[e];
          }
        });
      }
      let {
        rangeStart: m,
        rangeEnd: v
      } = this.state;
      let y = this.foundation.getValidDateFormat();
      if (i === "dateTimeRange" && m && v && eP(n = Q(m, y, undefined, c), r = Q(v, y, undefined, c))) {
        if (e === d.PANEL_TYPE_RIGHT) {
          if (m) {
            p.startDate = n;
          }
        } else if (v) {
          p.endDate = r;
        }
      }
      let T = o.selectTime;
      return reactCoreLibraryReexport.createElement("div", {
        className: f
      }, reactCoreLibraryReexport.createElement(timePickerPanelComponent.TimePickerPanel, Object.assign({
        ref: t => this.cacheRefCurrent(`timepicker-${e}`, t),
        panelHeader: T,
        format: s || d.FORMAT_TIME_PICKER,
        timeStampValue: h,
        onChange: t => this.foundation.handleTimeChange(t, e)
      }, p)));
    }
    renderYearAndMonth(e, t) {
      let {
        pickerDate: n
      } = t;
      let {
        locale: r,
        localeCode: i,
        density: o,
        yearAndMonthOpts: s,
        startYear: l,
        endYear: u
      } = this.props;
      let d = n.getFullYear();
      let c = n.getMonth() + 1;
      return reactCoreLibraryReexport.createElement(ta, {
        ref: t => this.cacheRefCurrent(`yam-${e}`, t),
        locale: r,
        localeCode: i,
        currentYear: {
          left: d,
          right: 0
        },
        currentMonth: {
          left: c,
          right: 0
        },
        onSelect: t => this.foundation.toYearMonth(e, new Date(t.currentYear.left, t.currentMonth.left - 1)),
        onBackToMain: () => {
          this.foundation.showDatePanel(e);
          let t = this.adapter.getCache(`wrap-${e}`);
          if (t) {
            t.style.height = "auto";
          }
        },
        density: o,
        yearAndMonthOpts: s,
        startYear: l,
        endYear: u
      });
    }
    renderSwitch(e) {
      let t;
      let n;
      let {
        rangeStart: r,
        rangeEnd: i,
        monthLeft: o,
        monthRight: s
      } = this.state;
      let {
        type: l,
        locale: u,
        disabledTimePicker: c,
        density: h,
        dateFnsLocale: f,
        insetInput: p
      } = this.props;
      if (!l.includes("Time") || p) {
        return null;
      }
      let {
        FORMAT_SWITCH_DATE: g
      } = u.localeFormatToken;
      let m = this.foundation.getValidTimeFormat();
      let v = this.foundation.getValidDateFormat();
      if (e === d.PANEL_TYPE_LEFT) {
        t = o;
        n = r ? dateFormatUtil.formatDate(Q(r, v, undefined, f), g) : "";
      } else {
        t = s;
        n = i ? dateFormatUtil.formatDate(Q(i, v, undefined, f), g) : "";
      }
      let {
        isTimePickerOpen: y,
        showDate: T
      } = t;
      let w = T ? dateFormatUtil.formatDate(T, g) : "";
      let _ = T ? dateFormatUtil.formatDate(T, m) : "";
      let C = ["default"].includes(h);
      let E = b(`${ti}-switch`);
      let D = b({
        [`${ti}-switch-date`]: true,
        [`${ti}-switch-date-active`]: !y
      });
      let Z = b({
        [`${ti}-switch-time`]: true,
        [`${ti}-switch-time-disabled`]: c,
        [`${ti}-switch-date-active`]: y
      });
      let P = b(`${ti}-switch-text`);
      return reactCoreLibraryReexport.createElement("div", {
        className: E,
        ref: t => this.adapter.setCache(`switch-${e}`, t)
      }, reactCoreLibraryReexport.createElement("div", {
        role: "button",
        "aria-label": "Switch to date panel",
        className: D,
        onClick: t => this.foundation.showDatePanel(e)
      }, C && reactCoreLibraryReexport.createElement(eT, {
        "aria-hidden": true
      }), reactCoreLibraryReexport.createElement("span", {
        className: P
      }, n || w)), reactCoreLibraryReexport.createElement("div", {
        role: "button",
        "aria-label": "Switch to time panel",
        className: Z,
        onClick: t => this.foundation.showTimePicker(e, true)
      }, C && reactCoreLibraryReexport.createElement(clockIconComponent.ClockIcon, {
        "aria-hidden": true
      }), reactCoreLibraryReexport.createElement("span", {
        className: P
      }, _)));
    }
    render() {
      let {
        monthLeft: e,
        monthRight: t
      } = this.state;
      let {
        type: n,
        insetInput: r,
        presetPosition: i,
        renderQuickControls: o,
        renderDateInput: s
      } = this.props;
      let l = b({
        [`${ti}-month-grid`]: true
      });
      let u = d.PANEL_TYPE_LEFT;
      let c = d.PANEL_TYPE_RIGHT;
      let h = null;
      if (n === "date" || n === "dateTime") {
        h = this.renderPanel(e.pickerDate, u);
      } else if (n === "dateRange" || n === "dateTimeRange") {
        h = [this.renderPanel(e.pickerDate, u), this.renderPanel(t.pickerDate, c)];
      } else if (n === "year" || n === "month") {
        h = "year month";
      }
      let f = this.getYAMOpenType();
      return reactCoreLibraryReexport.createElement("div", {
        style: {
          display: "flex"
        }
      }, i === "left" && o, reactCoreLibraryReexport.createElement("div", null, s, reactCoreLibraryReexport.createElement("div", {
        className: l,
        "x-type": n,
        "x-panel-yearandmonth-open-type": f,
        "x-insetinput": r ? "true" : "false",
        "x-preset-position": o === null ? "null" : i,
        ref: e => this.cacheRefCurrent("monthGrid", e)
      }, h)), i === "right" && o);
    }
  }
  to.propTypes = {
    type: _.oneOf(d.TYPE_SET),
    defaultValue: _.array,
    defaultPickerValue: _.oneOfType([_.string, _.number, _.object, _.array]),
    multiple: _.bool,
    max: _.number,
    weekStartsOn: _.number,
    disabledDate: _.func,
    disabledTime: _.func,
    disabledTimePicker: _.bool,
    hideDisabledOptions: _.bool,
    navPrev: _.node,
    navNext: _.node,
    onMaxSelect: _.func,
    timePickerOpts: _.object,
    isControlledComponent: _.bool,
    rangeStart: _.oneOfType([_.string]),
    rangeInputFocus: _.oneOfType([_.bool, _.string]),
    locale: _.object,
    localeCode: _.string,
    format: _.string,
    renderDate: _.func,
    renderFullDate: _.func,
    startDateOffset: _.func,
    endDateOffset: _.func,
    autoSwitchDate: _.bool,
    density: _.string,
    dateFnsLocale: _.object.isRequired,
    timeZone: _.oneOfType([_.string, _.number]),
    syncSwitchMonth: _.bool,
    onPanelChange: _.func,
    focusRecordsRef: _.object,
    triggerRender: _.func,
    presetPosition: _.oneOf(d.PRESET_POSITION_SET),
    renderQuickControls: _.node,
    renderDateInput: _.node
  };
  to.defaultProps = {
    type: "date",
    rangeStart: "",
    multiple: false,
    weekStartsOn: c.WEEK_START_ON,
    disabledDate: alwaysFalseUtil.alwaysFalse,
    onMaxSelect: emptyExportFunction.emptyFunction,
    locale: {}
  };
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  let tl = u.PREFIX;
  let {
    Text: tu
  } = typographyWrapperModule.TypographyWrapper;
  class td extends reactCoreLibraryReexport.PureComponent {
    render() {
      let {
        presets: e,
        onPresetClick: t,
        type: n,
        presetPosition: r,
        insetInput: i,
        locale: o
      } = this.props;
      let s = r === "top" || r === "bottom";
      let l = s && (n === "dateRange" || n === "dateTimeRange");
      let u = s && n === "month";
      let d = b(`${tl}-quick-control`, {
        [`${tl}-quick-control-${n}`]: n,
        [`${tl}-quick-control-${r}`]: true
      });
      let c = b({
        [`${tl}-quick-control-header`]: true
      });
      let h = b({
        [`${tl}-quick-control-${r}-content-wrapper`]: true
      });
      let f = b({
        [`${tl}-quick-control-${r}-content`]: !l && !u,
        [`${tl}-quick-control-${r}-range-content`]: l,
        [`${tl}-quick-control-${r}-month-content`]: u
      });
      let p = b({
        [`${tl}-quick-control-${r}-content-item`]: !l && !u,
        [`${tl}-quick-control-${r}-range-content-item`]: l,
        [`${tl}-quick-control-${r}-month-content-item`]: u
      });
      let g = b({
        [`${tl}-quick-control-${r}-content-item-ellipsis`]: !l && !u,
        [`${tl}-quick-control-${r}-range-content-item-ellipsis`]: l,
        [`${tl}-quick-control-${r}-month-content-item-ellipsis`]: u
      });
      if (e.length) {
        return reactCoreLibraryReexport.createElement("div", {
          className: d,
          "x-insetinput": i ? "true" : "false"
        }, !s && reactCoreLibraryReexport.createElement("div", {
          className: c
        }, o.presets), reactCoreLibraryReexport.createElement("div", {
          className: h
        }, reactCoreLibraryReexport.createElement("div", {
          className: f
        }, e.map((e, n) => {
          let r = typeof e == "function" ? e() : e;
          return reactCoreLibraryReexport.createElement(semiButtonWrapperComponent.SemiButtonWrapper, {
            size: "small",
            type: "primary",
            onClick: e => t(r, e),
            key: n
          }, reactCoreLibraryReexport.createElement("div", {
            className: p
          }, reactCoreLibraryReexport.createElement(tu, {
            ellipsis: {
              showTooltip: true
            },
            className: g
          }, r.text)));
        }))));
      } else {
        return null;
      }
    }
  }
  function tc(e = {}) {
    let {
      prefixCls: t,
      locale: n,
      onCancelClick: r,
      onConfirmClick: i
    } = e;
    let o = b(`${t}-footer`);
    return reactCoreLibraryReexport.createElement("div", {
      className: o
    }, reactCoreLibraryReexport.createElement(semiButtonWrapperComponent.SemiButtonWrapper, {
      theme: "borderless",
      onClick: r
    }, objectPathGetDefault.getObjectPathDefault(n, "footer.cancel", "")), reactCoreLibraryReexport.createElement(semiButtonWrapperComponent.SemiButtonWrapper, {
      theme: "solid",
      onClick: i
    }, objectPathGetDefault.getObjectPathDefault(n, "footer.confirm", "")));
  }
  td.propTypes = {
    presets: _.array,
    presetPosition: _.oneOf(d.PRESET_POSITION_SET),
    onPresetClick: _.func,
    type: _.string,
    insetInput: _.oneOfType([_.bool, _.object]),
    locale: _.object
  };
  td.defaultProps = {
    presets: [],
    presetPosition: "bottom",
    onPresetClick: emptyFunctionExport.emptyFunction
  };
  var triggerRenderWrapper = require("trigger-render-wrapper") /*id: 921310*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  function tp(e, t) {
    var n = {};
    for (var a in e) {
      if (Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0) {
        n[a] = e[a];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var a = Object.getOwnPropertySymbols(e);
      for (; r < a.length; r++) {
        if (t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r])) {
          n[a[r]] = e[a[r]];
        }
      }
    }
    return n;
  }
  class tg extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      var t;
      super(e);
      t = this;
      this.setTriggerRef = e => this.triggerElRef.current = e;
      this.handleSelectedChange = (e, t) => this.foundation.handleSelectedChange(e, t);
      this.handleYMSelectedChange = e => this.foundation.handleYMSelectedChange(e);
      this.disabledDisposeDate = function (e) {
        var n = arguments.length;
        var a = Array(n > 1 ? n - 1 : 0);
        var r = 1;
        for (; r < n; r++) {
          a[r - 1] = arguments[r];
        }
        return t.foundation.disabledDisposeDate(e, ...a);
      };
      this.disabledDisposeTime = function (e) {
        var n = arguments.length;
        var a = Array(n > 1 ? n - 1 : 0);
        var r = 1;
        for (; r < n; r++) {
          a[r - 1] = arguments[r];
        }
        return t.foundation.disabledDisposeTime(e, ...a);
      };
      this.handleOpenPanel = () => this.foundation.openPanel();
      this.handleInputChange = function () {
        return t.foundation.handleInputChange(...arguments);
      };
      this.handleInsetInputChange = e => this.foundation.handleInsetInputChange(e);
      this.handleInputComplete = e => this.foundation.handleInputComplete(e);
      this.handleInputBlur = e => this.foundation.handleInputBlur(objectPathGetDefault.getObjectPathDefault(e, "nativeEvent.target.value"), e);
      this.handleInputFocus = function () {
        return t.foundation.handleInputFocus(...arguments);
      };
      this.handleInputClear = e => this.foundation.handleInputClear(e);
      this.handleTriggerWrapperClick = e => this.foundation.handleTriggerWrapperClick(e);
      this.handleSetRangeFocus = e => this.foundation.handleSetRangeFocus(e);
      this.handleRangeInputBlur = (e, t) => this.foundation.handleRangeInputBlur(e, t);
      this.handleRangeInputClear = e => this.foundation.handleRangeInputClear(e);
      this.handleRangeEndTabPress = e => this.foundation.handleRangeEndTabPress(e);
      this.isAnotherPanelHasOpened = e => e === "rangeStart" ? this.focusRecordsRef.current.rangeEnd : this.focusRecordsRef.current.rangeStart;
      this.handleInsetDateFocus = (e, t) => {
        let n = objectPathGetDefault.getObjectPathDefault(this, "monthGrid.current.foundation");
        if (n) {
          n.showDatePanel(d.PANEL_TYPE_LEFT);
          n.showDatePanel(d.PANEL_TYPE_RIGHT);
        }
        this.handleInputFocus(e, t);
      };
      this.handleInsetTimeFocus = () => {
        let e = objectPathGetDefault.getObjectPathDefault(this, "monthGrid.current.foundation");
        if (e) {
          e.showTimePicker(d.PANEL_TYPE_LEFT);
          e.showTimePicker(d.PANEL_TYPE_RIGHT);
        }
      };
      this.handlePanelVisibleChange = e => {
        this.foundation.handlePanelVisibleChange(e);
      };
      this.handleConfirm = e => this.foundation.handleConfirm();
      this.handleCancel = e => this.foundation.handleCancel();
      this.renderFooter = (e, t) => this.adapter.needConfirm() ? reactCoreLibraryReexport.createElement(tc, Object.assign({}, this.props, {
        locale: e,
        localeCode: t,
        onConfirmClick: this.handleConfirm,
        onCancelClick: this.handleCancel
      })) : null;
      this.renderPanel = (e, t, n) => {
        let {
          dropdownClassName: r,
          dropdownStyle: i,
          density: o,
          topSlot: s,
          bottomSlot: l,
          presetPosition: d,
          type: c
        } = this.props;
        let h = b(u.PREFIX, {
          [u.PANEL_YAM]: this.adapter.typeIsYearOrMonth(),
          [`${u.PREFIX}-compact`]: o === "compact"
        }, r);
        return reactCoreLibraryReexport.createElement("div", {
          ref: this.panelRef,
          className: h,
          style: i,
          "x-type": c
        }, s && reactCoreLibraryReexport.createElement("div", {
          className: `${u.PREFIX}-topSlot`,
          "x-semi-prop": "topSlot"
        }, s), d === "top" && c !== "monthRange" && this.renderQuickControls(), this.adapter.typeIsYearOrMonth() ? this.renderYearMonthPanel(e, t) : this.renderMonthGrid(e, t, n), d === "bottom" && c !== "monthRange" && this.renderQuickControls(), l && reactCoreLibraryReexport.createElement("div", {
          className: `${u.PREFIX}-bottomSlot`,
          "x-semi-prop": "bottomSlot"
        }, l), this.renderFooter(e, t));
      };
      this.renderYearMonthPanel = (e, t) => {
        let {
          density: n,
          presetPosition: r,
          yearAndMonthOpts: i,
          type: o,
          startYear: s,
          endYear: l
        } = this.props;
        let u = this.state.value[0];
        let d = {
          left: 0,
          right: 0
        };
        let c = {
          left: 0,
          right: 0
        };
        if (isDateUtil_1.isDate(u)) {
          d.left = u.getFullYear();
          c.left = u.getMonth() + 1;
        }
        if (o === "monthRange") {
          let e = this.state.value[1];
          if (isDateUtil_1.isDate(e)) {
            d.right = e.getFullYear();
            c.right = e.getMonth() + 1;
          }
        }
        return reactCoreLibraryReexport.createElement(ta, {
          locale: e,
          localeCode: t,
          disabledDate: this.disabledDisposeDate,
          noBackBtn: true,
          monthCycled: true,
          onSelect: this.handleYMSelectedChange,
          currentYear: d,
          currentMonth: c,
          density: n,
          presetPosition: r,
          renderQuickControls: this.renderQuickControls(),
          renderDateInput: this.renderDateInput(),
          type: o,
          yearAndMonthOpts: i,
          startYear: s,
          endYear: l
        });
      };
      this.wrapPopover = e => {
        let {
          panelShow: t
        } = this.state;
        let {
          direction: n
        } = this.context;
        let {
          motion: r,
          zIndex: i,
          position: o = n === "rtl" ? "bottomRight" : "bottomLeft",
          getPopupContainer: s,
          locale: l,
          localeCode: u,
          dateFnsLocale: d,
          stopPropagation: c,
          autoAdjustOverflow: h,
          spacing: f,
          dropdownMargin: p
        } = this.props;
        return reactCoreLibraryReexport.createElement(popoverComponent.PopoverComponent, {
          getPopupContainer: s,
          autoAdjustOverflow: h,
          zIndex: i,
          motion: r,
          margin: p,
          content: this.renderPanel(l, u, d),
          trigger: "custom",
          position: o,
          visible: t,
          stopPropagation: c,
          spacing: f,
          onVisibleChange: this.handlePanelVisibleChange
        }, e);
      };
      this.state = {
        panelShow: e.open || e.defaultOpen,
        isRange: false,
        inputValue: null,
        value: [],
        cachedSelectedValue: [],
        prevTimeZone: null,
        rangeInputFocus: undefined,
        autofocus: e.autoFocus || this.isRangeType(e.type, e.triggerRender) && (e.open || e.defaultOpen),
        insetInputValue: null,
        triggerDisabled: undefined
      };
      this.triggerElRef = reactCoreLibraryReexport.createRef();
      this.panelRef = reactCoreLibraryReexport.createRef();
      this.monthGrid = reactCoreLibraryReexport.createRef();
      this.inputRef = reactCoreLibraryReexport.createRef();
      this.rangeInputStartRef = reactCoreLibraryReexport.createRef();
      this.rangeInputEndRef = reactCoreLibraryReexport.createRef();
      this.focusRecordsRef = reactCoreLibraryReexport.createRef();
      this.focusRecordsRef.current = {
        rangeStart: false,
        rangeEnd: false
      };
      this.foundation = new eo(this.adapter);
    }
    get adapter() {
      var e = this;
      return Object.assign(Object.assign({}, super.adapter), {
        togglePanel: (e, t) => {
          this.setState({
            panelShow: e
          }, t);
          if (!e) {
            this.focusRecordsRef.current.rangeEnd = false;
            this.focusRecordsRef.current.rangeStart = false;
          }
        },
        registerClickOutSide: () => {
          if (this.clickOutSideHandler) {
            this.adapter.unregisterClickOutSide();
            this.clickOutSideHandler = null;
          }
          this.clickOutSideHandler = e => {
            let t = this.triggerElRef && this.triggerElRef.current;
            let n = this.panelRef && this.panelRef.current;
            let a = t && t.contains(e.target);
            let r = n && n.contains(e.target);
            let i = !a && !r && this._mounted;
            if (this.adapter.needConfirm()) {
              if (i) {
                this.props.onClickOutSide();
              }
              return;
            }
            if (i) {
              this.props.onClickOutSide();
              this.foundation.closePanel(e);
            }
          };
          document.addEventListener("mousedown", this.clickOutSideHandler);
        },
        unregisterClickOutSide: () => {
          document.removeEventListener("mousedown", this.clickOutSideHandler);
        },
        notifyBlur: function () {
          return e.props.onBlur(...arguments);
        },
        notifyFocus: function () {
          return e.props.onFocus(...arguments);
        },
        notifyClear: function () {
          return e.props.onClear(...arguments);
        },
        notifyChange: function () {
          return e.props.onChange(...arguments);
        },
        notifyCancel: function () {
          return e.props.onCancel(...arguments);
        },
        notifyConfirm: function () {
          return e.props.onConfirm(...arguments);
        },
        notifyOpenChange: function () {
          return e.props.onOpenChange(...arguments);
        },
        notifyPresetsClick: function () {
          return e.props.onPresetClick(...arguments);
        },
        updateValue: e => this.setState({
          value: e
        }),
        updatePrevTimezone: e => this.setState({
          prevTimeZone: e
        }),
        updateCachedSelectedValue: e => {
          let t = e;
          if (e && !Array.isArray(e)) {
            t = [...e];
          }
          this.setState({
            cachedSelectedValue: t
          });
        },
        updateInputValue: e => {
          this.setState({
            inputValue: e
          });
        },
        updateInsetInputValue: e => {
          let {
            insetInput: t
          } = this.props;
          if (t && !deepEqualUtil_1.deepEqual(e, this.state.insetInputValue)) {
            this.setState({
              insetInputValue: e
            });
          }
        },
        needConfirm: () => ["dateTime", "dateTimeRange"].includes(this.props.type) && this.props.needConfirm === true,
        typeIsYearOrMonth: () => ["month", "year", "monthRange"].includes(this.props.type),
        setRangeInputFocus: e => {
          let {
            preventScroll: t
          } = this.props;
          if (e !== this.state.rangeInputFocus) {
            this.setState({
              rangeInputFocus: e
            });
          }
          switch (e) {
            case "rangeStart":
              let n = objectPathGetDefault.getObjectPathDefault(this, "rangeInputStartRef.current");
              if (n) {
                n.focus({
                  preventScroll: t
                });
              }
              setTimeout(() => {
                this.focusRecordsRef.current.rangeStart = true;
              }, 0);
              break;
            case "rangeEnd":
              let a = objectPathGetDefault.getObjectPathDefault(this, "rangeInputEndRef.current");
              if (a) {
                a.focus({
                  preventScroll: t
                });
              }
              setTimeout(() => {
                this.focusRecordsRef.current.rangeEnd = true;
              }, 0);
              break;
            default:
              return;
          }
        },
        couldPanelClosed: () => this.focusRecordsRef.current.rangeStart && this.focusRecordsRef.current.rangeEnd,
        isEventTarget: e => e && e.target === e.currentTarget,
        setInsetInputFocus: () => {
          let {
            preventScroll: e
          } = this.props;
          let {
            rangeInputFocus: t
          } = this.state;
          if (t === "rangeEnd") {
            if (document.activeElement !== this.rangeInputEndRef.current) {
              let t = objectPathGetDefault.getObjectPathDefault(this, "rangeInputEndRef.current");
              if (t) {
                t.focus({
                  preventScroll: e
                });
              }
            }
          } else if (document.activeElement !== this.rangeInputStartRef.current) {
            let t = objectPathGetDefault.getObjectPathDefault(this, "rangeInputStartRef.current");
            if (t) {
              t.focus({
                preventScroll: e
              });
            }
          }
        },
        setInputFocus: () => {
          let {
            preventScroll: e
          } = this.props;
          let t = objectPathGetDefault.getObjectPathDefault(this, "inputRef.current");
          if (t) {
            t.focus({
              preventScroll: e
            });
          }
        },
        setInputBlur: () => {
          let e = objectPathGetDefault.getObjectPathDefault(this, "inputRef.current");
          if (e) {
            e.blur();
          }
        },
        setRangeInputBlur: () => {
          let {
            rangeInputFocus: e
          } = this.state;
          if (e === "rangeStart") {
            let e = objectPathGetDefault.getObjectPathDefault(this, "rangeInputStartRef.current");
            if (e) {
              e.blur();
            }
          } else if (e === "rangeEnd") {
            let e = objectPathGetDefault.getObjectPathDefault(this, "rangeInputEndRef.current");
            if (e) {
              e.blur();
            }
          }
          this.adapter.setRangeInputFocus(false);
        },
        setTriggerDisabled: e => {
          this.setState({
            triggerDisabled: e
          });
        }
      });
    }
    isRangeType(e, t) {
      return /range/i.test(e) && !isFunctionUtil_1.isFunction(t);
    }
    componentDidUpdate(e) {
      if (deepEqualUtil_1.deepEqual(e.value, this.props.value)) {
        if (this.props.timeZone !== e.timeZone) {
          this.foundation.initFromProps({
            value: this.state.value,
            timeZone: this.props.timeZone,
            prevTimeZone: e.timeZone
          });
        }
      } else {
        this.foundation.initFromProps(Object.assign({}, this.props));
      }
      if (e.open !== this.props.open) {
        this.foundation.initPanelOpenStatus();
        if (!this.props.open) {
          this.foundation.clearRangeInputFocus();
        }
      }
    }
    componentDidMount() {
      this._mounted = true;
      super.componentDidMount();
    }
    componentWillUnmount() {
      this._mounted = false;
      super.componentWillUnmount();
    }
    open() {
      this.foundation.open();
    }
    close() {
      this.foundation.close();
    }
    focus(e) {
      this.foundation.focus(e);
    }
    blur() {
      this.foundation.blur();
    }
    renderMonthGrid(e, t, n) {
      let {
        type: r,
        multiple: i,
        max: o,
        weekStartsOn: s,
        timePickerOpts: l,
        defaultPickerValue: u,
        format: d,
        hideDisabledOptions: c,
        disabledTimePicker: h,
        renderDate: f,
        renderFullDate: p,
        startDateOffset: g,
        endDateOffset: m,
        autoSwitchDate: v,
        density: y,
        syncSwitchMonth: T,
        onPanelChange: b,
        timeZone: w,
        triggerRender: _,
        insetInput: C,
        presetPosition: E,
        yearAndMonthOpts: D,
        startYear: Z,
        endYear: P
      } = this.props;
      let {
        cachedSelectedValue: S,
        rangeInputFocus: R
      } = this.state;
      return reactCoreLibraryReexport.createElement(to, {
        ref: this.monthGrid,
        locale: e,
        localeCode: t,
        dateFnsLocale: n,
        weekStartsOn: s,
        type: r,
        multiple: i,
        max: o,
        format: d,
        disabledDate: this.disabledDisposeDate,
        hideDisabledOptions: c,
        disabledTimePicker: h,
        disabledTime: this.disabledDisposeTime,
        defaultValue: S,
        defaultPickerValue: u,
        timePickerOpts: l,
        isControlledComponent: !this.adapter.needConfirm() && this.isControlled("value"),
        onChange: this.handleSelectedChange,
        renderDate: f,
        renderFullDate: p,
        startDateOffset: g,
        endDateOffset: m,
        autoSwitchDate: v,
        density: y,
        rangeInputFocus: R,
        setRangeInputFocus: this.handleSetRangeFocus,
        isAnotherPanelHasOpened: this.isAnotherPanelHasOpened,
        syncSwitchMonth: T,
        onPanelChange: b,
        timeZone: w,
        focusRecordsRef: this.focusRecordsRef,
        triggerRender: _,
        insetInput: C,
        presetPosition: E,
        renderQuickControls: this.renderQuickControls(),
        renderDateInput: this.renderDateInput(),
        yearAndMonthOpts: D,
        startYear: Z,
        endYear: P
      });
    }
    renderQuickControls() {
      let {
        presets: e,
        type: t,
        presetPosition: n,
        insetInput: r,
        locale: i
      } = this.props;
      return reactCoreLibraryReexport.createElement(td, {
        type: t,
        presets: e,
        insetInput: r,
        presetPosition: n,
        onPresetClick: (e, t) => this.foundation.handlePresetClick(e, t),
        locale: i
      });
    }
    renderDateInput() {
      let {
        insetInput: e,
        dateFnsLocale: t,
        density: n,
        type: r,
        format: i,
        rangeSeparator: o,
        defaultPickerValue: s
      } = this.props;
      let {
        insetInputValue: l,
        value: u
      } = this.state;
      let d = {
        dateFnsLocale: t,
        format: i,
        insetInputValue: l,
        rangeSeparator: o,
        type: r,
        value: u,
        handleInsetDateFocus: this.handleInsetDateFocus,
        handleInsetTimeFocus: this.handleInsetTimeFocus,
        onInsetInputChange: this.handleInsetInputChange,
        rangeInputStartRef: this.rangeInputStartRef,
        rangeInputEndRef: this.rangeInputEndRef,
        density: n,
        defaultPickerValue: s
      };
      if (e) {
        return reactCoreLibraryReexport.createElement(eD, Object.assign({}, d, {
          insetInput: e
        }));
      } else {
        return null;
      }
    }
    renderInner(e) {
      let {
        clearIcon: t,
        type: n,
        format: r,
        multiple: i,
        disabled: o,
        showClear: s,
        insetLabel: l,
        insetLabelId: d,
        placeholder: c,
        validateStatus: h,
        inputStyle: f,
        prefix: p,
        locale: g,
        dateFnsLocale: m,
        triggerRender: v,
        size: y,
        inputReadOnly: T,
        rangeSeparator: w,
        insetInput: _,
        defaultPickerValue: C,
        borderless: E
      } = this.props;
      let {
        value: D,
        inputValue: Z,
        rangeInputFocus: P,
        triggerDisabled: S
      } = this.state;
      let R = this.isRangeType(n, v);
      let M = o || _ && S;
      let I = b(`${u.PREFIX}-input`, {
        [`${u.PREFIX}-range-input`]: R,
        [`${u.PREFIX}-range-input-${y}`]: R && y,
        [`${u.PREFIX}-range-input-active`]: R && P && !M,
        [`${u.PREFIX}-range-input-disabled`]: R && M,
        [`${u.PREFIX}-range-input-${h}`]: R && h,
        [`${u.PREFIX}-borderless`]: E
      });
      let k = c || g.placeholder[n];
      let O = Object.assign(Object.assign({}, e), {
        showClearIgnoreDisabled: !!_,
        placeholder: k,
        clearIcon: t,
        disabled: M,
        inputValue: Z,
        value: D,
        defaultPickerValue: C,
        onChange: this.handleInputChange,
        onEnterPress: this.handleInputComplete,
        block: true,
        inputStyle: f,
        showClear: s,
        insetLabel: l,
        insetLabelId: d,
        type: n,
        format: r,
        multiple: i,
        validateStatus: h,
        inputReadOnly: T || !!_,
        onBlur: this.handleInputBlur,
        onFocus: this.handleInputFocus,
        onClear: this.handleInputClear,
        prefix: p,
        size: y,
        autofocus: this.state.autofocus,
        dateFnsLocale: m,
        rangeInputFocus: P,
        rangeSeparator: w,
        onRangeBlur: this.handleRangeInputBlur,
        onRangeClear: this.handleRangeInputClear,
        onRangeEndTabPress: this.handleRangeEndTabPress,
        rangeInputStartRef: _ ? null : this.rangeInputStartRef,
        rangeInputEndRef: _ ? null : this.rangeInputEndRef,
        inputRef: this.inputRef
      });
      return reactCoreLibraryReexport.createElement("div", {
        role: "combobox",
        "aria-label": Array.isArray(D) && D.length ? "Change date" : "Choose date",
        "aria-disabled": o,
        onClick: this.handleTriggerWrapperClick,
        className: I
      }, typeof v == "function" ? reactCoreLibraryReexport.createElement(triggerRenderWrapper.TriggerRenderWrapper, Object.assign({}, O, {
        triggerRender: v,
        componentName: "DatePicker",
        componentProps: Object.assign({}, this.props)
      })) : reactCoreLibraryReexport.createElement(eD, Object.assign({}, O)));
    }
    render() {
      let e = this.props;
      let {
        style: t,
        className: n,
        prefixCls: r,
        type: i
      } = e;
      let o = tp(e, ["style", "className", "prefixCls", "type"]);
      let s = Object.assign({
        style: t,
        className: b(n, {
          [r]: true
        }),
        ref: this.setTriggerRef,
        "aria-invalid": this.props["aria-invalid"],
        "aria-errormessage": this.props["aria-errormessage"],
        "aria-labelledby": this.props["aria-labelledby"],
        "aria-describedby": this.props["aria-describedby"],
        "aria-required": this.props["aria-required"]
      }, this.getDataAttr(o));
      let l = [];
      if (!i.toLowerCase().includes("range")) {
        l.push("borderless");
      }
      let u = this.renderInner(throttledPathFilterStringify.throttledPathStr(this.props, l));
      let d = this.wrapPopover(u);
      return reactCoreLibraryReexport.createElement("div", Object.assign({}, s), d);
    }
  }
  tg.contextType = createContextProvider.context;
  tg.propTypes = {
    "aria-describedby": _.string,
    "aria-errormessage": _.string,
    "aria-invalid": _.bool,
    "aria-labelledby": _.string,
    "aria-required": _.bool,
    borderless: _.bool,
    type: _.oneOf(d.TYPE_SET),
    size: _.oneOf(d.SIZE_SET),
    clearIcon: _.node,
    density: _.oneOf(d.DENSITY_SET),
    defaultValue: _.oneOfType([_.string, _.number, _.object, _.array]),
    value: _.oneOfType([_.string, _.number, _.object, _.array]),
    defaultPickerValue: _.oneOfType([_.string, _.number, _.object, _.array]),
    disabledTime: _.func,
    disabledTimePicker: _.bool,
    hideDisabledOptions: _.bool,
    format: _.string,
    disabled: _.bool,
    multiple: _.bool,
    max: _.number,
    placeholder: _.oneOfType([_.string, _.array]),
    presets: _.array,
    presetPosition: _.oneOf(d.PRESET_POSITION_SET),
    onChange: _.func,
    onChangeWithDateFirst: _.bool,
    weekStartsOn: _.number,
    disabledDate: _.func,
    timePickerOpts: _.object,
    showClear: _.bool,
    onOpenChange: _.func,
    open: _.bool,
    defaultOpen: _.bool,
    motion: _.oneOfType([_.bool, _.func, _.object]),
    className: _.string,
    prefixCls: _.string,
    prefix: _.node,
    insetLabel: _.node,
    insetLabelId: _.string,
    zIndex: _.number,
    position: _.oneOf(tooltipPopoverConstants.tooltipOptions.POSITION_SET),
    getPopupContainer: _.func,
    onCancel: _.func,
    onConfirm: _.func,
    needConfirm: _.bool,
    inputStyle: _.object,
    timeZone: _.oneOfType([_.string, _.number]),
    triggerRender: _.func,
    stopPropagation: _.oneOfType([_.bool, _.string]),
    autoAdjustOverflow: _.bool,
    onBlur: _.func,
    onFocus: _.func,
    onClear: _.func,
    style: _.object,
    autoFocus: _.bool,
    inputReadOnly: _.bool,
    validateStatus: _.oneOf(d.STATUS),
    renderDate: _.func,
    renderFullDate: _.func,
    spacing: _.oneOfType([_.number, _.object]),
    startDateOffset: _.func,
    endDateOffset: _.func,
    autoSwitchDate: _.bool,
    dropdownClassName: _.string,
    dropdownStyle: _.object,
    dropdownMargin: _.oneOfType([_.number, _.object]),
    topSlot: _.node,
    bottomSlot: _.node,
    dateFnsLocale: _.object,
    syncSwitchMonth: _.bool,
    onPanelChange: _.func,
    rangeSeparator: _.string,
    preventScroll: _.bool,
    yearAndMonthOpts: _.object,
    onClickOutSide: _.func
  };
  tg.__SemiComponentName__ = "DatePicker";
  tg.defaultProps = commonFrontendUtils.configProxyHandler(tg.__SemiComponentName__, {
    onChangeWithDateFirst: true,
    borderless: false,
    autoAdjustOverflow: true,
    stopPropagation: true,
    motion: true,
    prefixCls: u.PREFIX,
    presetPosition: "bottom",
    zIndex: tooltipPopoverConstants.tooltipLayout.DEFAULT_Z_INDEX,
    type: "date",
    size: "default",
    density: "default",
    multiple: false,
    defaultOpen: false,
    disabledHours: emptyExportFunction.emptyFunction,
    disabledMinutes: emptyExportFunction.emptyFunction,
    disabledSeconds: emptyExportFunction.emptyFunction,
    hideDisabledOptions: false,
    onBlur: emptyExportFunction.emptyFunction,
    onFocus: emptyExportFunction.emptyFunction,
    onClear: emptyExportFunction.emptyFunction,
    onCancel: emptyExportFunction.emptyFunction,
    onConfirm: emptyExportFunction.emptyFunction,
    onChange: emptyExportFunction.emptyFunction,
    onOpenChange: emptyExportFunction.emptyFunction,
    onPanelChange: emptyExportFunction.emptyFunction,
    onPresetClick: emptyExportFunction.emptyFunction,
    weekStartsOn: c.WEEK_START_ON,
    disabledDate: alwaysFalseUtil.alwaysFalse,
    disabledTime: alwaysFalseUtil.alwaysFalse,
    inputReadOnly: false,
    spacing: c.SPACING,
    autoSwitchDate: true,
    syncSwitchMonth: false,
    rangeSeparator: d.DEFAULT_SEPARATOR_RANGE,
    insetInput: false,
    onClickOutSide: emptyExportFunction.emptyFunction
  });
  var aiCreationLocaleWrapper = require("ai-creation-locale-wrapper") /*id: 67026*/;
  var tv = safeObjectPathUtils.mergeObjects(reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = Object.assign({}, e);
    let {
      type: r,
      format: i,
      rangeSeparator: o
    } = n;
    if (typeof i == "string" && i && !/[Hhms]+/.test(i)) {
      if (r === "dateTime") {
        n.type = "date";
      } else if (r === "dateTimeRange") {
        n.type = "dateRange";
      }
    }
    if (o && typeof o == "string") {
      n.rangeSeparator = ` ${o.trim()} `;
    }
    if (n.insetInput) {
      n.position ||= d.POSITION_INLINE_INPUT;
      if (n.position.includes("Over") && !n.spacing) {
        n.spacing = c.SPACING_INSET_INPUT;
      }
    }
    return reactCoreLibraryReexport.createElement(createContextProvider.context.Consumer, null, e => {
      let {
        timeZone: r
      } = e;
      return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
        componentName: "DatePicker"
      }, (e, i, o) => reactCoreLibraryReexport.createElement(tg, Object.assign({
        timeZone: r,
        localeCode: i,
        locale: e,
        dateFnsLocale: o
      }, n, {
        ref: t
      })));
    });
  }), tg);
  require.d(exports, {
    DatePicker: function () {
      return tv;
    }
  });
}