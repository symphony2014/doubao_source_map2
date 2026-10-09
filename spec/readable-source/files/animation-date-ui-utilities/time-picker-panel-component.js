// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TimePickerPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 107883
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var o = propTypesFactoryWrapper;
  var dateFormatUtil = require("date-format-util") /*id: 251899*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var semiTimepickerConstants = require("semi-timepicker-constants") /*id: 561832*/;
  var semiScrollListComponent = require("semi-scroll-list-component") /*id: 821094*/;
  var semiScrollList = require("semi-scroll-list") /*id: 777395*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var dateValidationUtil = require("date-validation-util") /*id: 571627*/;
  var nullCheckUtil_1 = require("null-check-util_1") /*id: 179154*/;
  let g = (e, t) => {
    let n = `${e}`;
    if (e < 10) {
      n = `0${e}`;
    }
    let a = false;
    if (t && t.indexOf(e) >= 0) {
      a = true;
    }
    return {
      value: n,
      disabled: a
    };
  };
  function m(e, t, n, a = 1) {
    let r = [];
    for (let i = 0; i < e; i += a) {
      if (!t || t.indexOf(i) < 0 || !n) {
        r.push(i);
      }
    }
    return r;
  }
  class v extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
    }
    isAM() {
      return this.getProp("isAM");
    }
    initData() {
      let {
        timeStampValue: e,
        hourStep: t,
        disabledMinutes: n,
        disabledSeconds: a,
        hideDisabledOptions: r,
        minuteStep: i,
        secondStep: o
      } = this.getProps();
      let s = this.getValidFormat();
      let l = this.getDisplayDateFromTimeStamp(e);
      let u = this.disabledHours();
      let d = n(l ? l.getHours() : null);
      let c = a(l ? l.getHours() : null, l ? l.getMinutes() : null);
      let h = m(24, u, r, t);
      let f = m(60, d, r, i);
      let p = m(60, c, r, o);
      return {
        showHour: !!s.match(/HH|hh|H|h/g),
        showMinute: !!s.match(/mm/g),
        showSecond: !!s.match(/ss/g),
        hourOptions: h,
        minuteOptions: f,
        secondOptions: p
      };
    }
    getPosition() {
      let e = this.getProp("position");
      let t = this.getProp("type") || semiTimepickerConstants.timepickerConfig.DEFAULT_TYPE;
      return e || semiTimepickerConstants.timepickerConfig.DEFAULT_POSITION[t];
    }
    getDefaultFormatIfNeed() {
      if (this._isInProps("format")) {
        return this.getProp("format");
      } else if (this.getProp("use12Hours")) {
        return semiTimepickerConstants.timepickerConfig.DEFAULT_FORMAT_A;
      } else {
        return semiTimepickerConstants.timepickerConfig.DEFAULT_FORMAT;
      }
    }
    disabledHours() {
      let {
        use12Hours: e,
        disabledHours: t
      } = this.getProps();
      let n = t && t();
      if (e && Array.isArray(n)) {
        n = this.isAM() ? n.filter(e => e < 12).map(e => e === 0 ? 12 : e) : n.map(e => e === 12 ? 12 : e - 12);
      }
      return n;
    }
    getValidFormat(e) {
      let t = nullCheckUtil_1.isNil(e) ? this.getProp("format") : e;
      if (typeof (t = this.getDefaultFormatIfNeed()) == "string") {
        return t;
      } else {
        return semiTimepickerConstants.timepickerConfig.DEFAULT_FORMAT;
      }
    }
    getDisplayDateFromTimeStamp(e) {
      let t;
      if (e) {
        t = new Date(e);
      }
      if (e && dateValidationUtil.isValidDate(t)) {
        return t;
      } else {
        return this.createDateDefault();
      }
    }
    createDateDefault() {
      return new Date(parseInt(String(Date.now() / 86400000), 10) * 86400000 - 28800000);
    }
  }
  var aiCreationLocaleWrapper = require("ai-creation-locale-wrapper") /*id: 67026*/;
  class T extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.cacheRefCurrent = (e, t) => {
        if (e && typeof e == "string") {
          this.adapter.setCache(e, t);
        }
      };
      this.reselect = () => {
        ["ampm", "hour", "minute", "second"].forEach(e => {
          let t = this.adapter.getCache(e);
          if (t && t.scrollToIndex) {
            t.scrollToIndex();
          }
        });
      };
      this.onItemChange = e => {
        let {
          type: t,
          value: n,
          disabled: a
        } = e;
        let {
          onChange: r,
          use12Hours: i,
          isAM: o,
          format: l,
          timeStampValue: u
        } = this.props;
        let d = this.foundation.getDisplayDateFromTimeStamp(u);
        if (t === "hour") {
          if (i) {
            if (o) {
              d.setHours(Number(n) % 12);
            } else {
              d.setHours(Number(n) % 12 + 12);
            }
          } else {
            d.setHours(Number(n));
          }
        } else if (t === "minute") {
          d.setMinutes(Number(n));
        } else if (t === "ampm") {
          let e = n.toUpperCase();
          if (i) {
            if (e === "PM") {
              o = false;
              if (d.getHours() < 12) {
                d.setHours(d.getHours() % 12 + 12);
              }
            }
            if (e === "AM") {
              o = true;
              if (d.getHours() >= 12) {
                d.setHours(d.getHours() - 12);
              }
            }
          }
        } else {
          d.setSeconds(Number(n));
        }
        if (r) {
          r({
            isAM: o,
            value: dateFormatUtil.formatDate(d, l && l.replace(/(\s+)A/g, "$1a")),
            timeStampValue: Number(d)
          });
        }
      };
      this.onEnterSelectPanel = e => {
        let {
          onCurrentSelectPanelChange: t
        } = this.props;
        t(e);
      };
      this.getDisplayDateFromTimeStamp = e => this.foundation.getDisplayDateFromTimeStamp(e);
      this.foundation = new v(this.adapter);
      this.state = Object.assign({}, this.foundation.initData());
    }
    componentDidUpdate(e, t) {
      if (e.timeStampValue !== this.props.timeStampValue || e.format !== this.props.format) {
        this.setState(Object.assign({}, this.foundation.initData()));
      }
    }
    componentWillUnmount() {}
    componentDidMount() {}
    renderHourSelect(e, t) {
      let n;
      let a;
      let {
        prefixCls: i,
        disabledHours: o,
        use12Hours: s,
        scrollItemProps: l
      } = this.props;
      let {
        showHour: u,
        hourOptions: d
      } = this.state;
      if (!u) {
        return null;
      }
      let h = o();
      if (s) {
        n = [12].concat(d.filter(e => e < 12 && e > 0));
        a = e % 12 || 12;
      } else {
        n = d;
        a = e;
      }
      let f = `${i}-list-hour`;
      return reactCoreLibraryReexport.createElement(semiScrollList.ScrollList, Object.assign({
        ref: e => this.cacheRefCurrent("hour", e),
        mode: "normal",
        transform: e => e + t.hour,
        className: f,
        list: n.map(e => g(e, h)),
        selectedIndex: n.indexOf(a),
        type: "hour",
        onSelect: this.onItemChange
      }, l));
    }
    renderMinuteSelect(e, t) {
      let {
        prefixCls: n,
        disabledMinutes: a,
        timeStampValue: i,
        scrollItemProps: o
      } = this.props;
      let {
        showMinute: s,
        minuteOptions: l
      } = this.state;
      if (!s) {
        return null;
      }
      let u = new Date(i);
      let d = a && a(u.getHours());
      let h = `${n}-list-minute`;
      return reactCoreLibraryReexport.createElement(semiScrollList.ScrollList, Object.assign({
        ref: e => this.cacheRefCurrent("minute", e),
        mode: "normal",
        transform: e => e + t.minute,
        list: l.map(e => g(e, d)),
        selectedIndex: l.indexOf(e),
        type: "minute",
        onSelect: this.onItemChange,
        className: h
      }, o));
    }
    renderSecondSelect(e, t) {
      let {
        prefixCls: n,
        disabledSeconds: a,
        timeStampValue: i,
        scrollItemProps: o
      } = this.props;
      let {
        showSecond: s,
        secondOptions: l
      } = this.state;
      if (!s) {
        return null;
      }
      let u = new Date(i);
      let d = a && a(u.getHours(), u.getMinutes());
      let h = `${n}-list-second`;
      return reactCoreLibraryReexport.createElement(semiScrollList.ScrollList, Object.assign({
        ref: e => this.cacheRefCurrent("second", e),
        mode: "normal",
        transform: e => String(e) + t.second,
        list: l.map(e => g(e, d)),
        selectedIndex: l.indexOf(e),
        className: h,
        type: "second",
        onSelect: this.onItemChange
      }, o));
    }
    renderAMPMSelect(e, t) {
      let {
        prefixCls: n,
        use12Hours: a,
        isAM: i,
        scrollItemProps: o
      } = this.props;
      if (!a) {
        return null;
      }
      let s = [{
        value: "AM",
        text: e.AM || "上午"
      }, {
        value: "PM",
        text: e.PM || "下午"
      }];
      let l = `${n}-list-ampm`;
      return reactCoreLibraryReexport.createElement(semiScrollList.ScrollList, Object.assign({
        ref: e => this.cacheRefCurrent("ampm", e),
        mode: "normal",
        className: l,
        list: s,
        selectedIndex: +!i,
        type: "ampm",
        onSelect: this.onItemChange
      }, o));
    }
    render() {
      let {
        timeStampValue: e,
        panelHeader: t,
        panelFooter: n
      } = this.props;
      let a = this.getDisplayDateFromTimeStamp(e);
      return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
        componentName: "TimePicker"
      }, (e, i) => reactCoreLibraryReexport.createElement(semiScrollListComponent.ScrollList, {
        header: t,
        footer: n,
        "x-semi-header-alias": "panelHeader",
        "x-semi-footer-alias": "panelFooter"
      }, this.renderAMPMSelect(e, i), this.renderHourSelect(a.getHours(), e), this.renderMinuteSelect(a.getMinutes(), e), this.renderSecondSelect(a.getSeconds(), e)));
    }
  }
  T.propTypes = {
    format: o.string,
    defaultOpenValue: o.object,
    prefixCls: o.string,
    onChange: o.func,
    showHour: o.bool,
    showMinute: o.bool,
    showSecond: o.bool,
    disabledHours: o.func,
    disabledMinutes: o.func,
    disabledSeconds: o.func,
    hideDisabledOptions: o.bool,
    onCurrentSelectPanelChange: o.func,
    use12Hours: o.bool,
    isAM: o.bool,
    timeStampValue: o.any,
    scrollItemProps: o.object
  };
  T.defaultProps = {
    disabledHours: emptyExportFunction.emptyFunction,
    disabledMinutes: emptyExportFunction.emptyFunction,
    disabledSeconds: emptyExportFunction.emptyFunction,
    format: semiTimepickerConstants.timepickerConfig.DEFAULT_FORMAT
  };
  var b = T;
  require.d(exports, {
    TimePickerPanel: function () {
      return b;
    }
  });
}