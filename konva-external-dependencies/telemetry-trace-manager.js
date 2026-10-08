// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'TelemetryTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 721376
         */
module.exports = function (module, exports, require) {
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  function n(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  class r {
    getRecordTimestamp(e) {
      return this.recordTimestamp[e];
    }
    getRecordTimestamps() {
      return this.recordTimestamp;
    }
    setRecordTimestamp(e, t) {
      this.recordTimestamp[e] = t;
    }
    setCommonTraceParam(e) {
      this.commonTraceParams = {
        ...this.commonTraceParams,
        ...e
      };
    }
    setTeaEventTraceParams(e, t) {
      this.teaEventTraceParams[e] = {
        ...this.teaEventTraceParams[e],
        ...t
      };
    }
    setTeaEventOtherTraceParams(e) {
      this.teaEventOtherTraceParams = {
        ...this.teaEventOtherTraceParams,
        ...e
      };
    }
    getCommonTraceParams() {
      return this.commonTraceParams;
    }
    getTeaEventTraceParams(e) {
      return this.teaEventTraceParams[e];
    }
    getTeaEventOtherTraceParams() {
      return this.teaEventOtherTraceParams;
    }
    addEventReportCount(e) {
      this.eventReportCounts[e] = this.eventReportCounts[e] || 0;
      this.eventReportCounts[e]++;
    }
    getEventReportCounts() {
      return this.eventReportCounts;
    }
    setReportTeaEventFailed(e) {
      this.eventReportSuccessRecords[e] = false;
    }
    setReportTeaEventSuccess(e) {
      this.eventReportSuccessRecords[e] = true;
    }
    getSuccessTeaEventCounts() {
      var t;
      if ((t = objectValuesHelper.getObjectValues(this.eventReportSuccessRecords)) === null || t === undefined) {
        return undefined;
      } else {
        return t.filter(e => e)?.length;
      }
    }
    getFailTeaEventCounts() {
      var t;
      if ((t = objectValuesHelper.getObjectValues(this.eventReportSuccessRecords)) === null || t === undefined) {
        return undefined;
      } else {
        return t.filter(e => !e)?.length;
      }
    }
    constructor(e) {
      n(this, "recordTimestamp", undefined);
      n(this, "commonTraceParams", undefined);
      n(this, "teaEventTraceParams", undefined);
      n(this, "teaEventOtherTraceParams", undefined);
      n(this, "eventReportCounts", undefined);
      n(this, "eventReportSuccessRecords", undefined);
      this.recordTimestamp = {
        receive_think_reason_start: undefined,
        receive_think_reason_first_text: undefined,
        receive_think_reason_end: undefined,
        receive_batch_message_first_text: undefined,
        receive_batch_message_first_token: undefined,
        receive_batch_message_end: undefined,
        client_receive_first_message_duration: undefined,
        client_total_duration_chat_next: undefined,
        client_total_package_length_chat_next: undefined
      };
      this.commonTraceParams = (e == null ? undefined : e.commonTraceParams) || {};
      this.teaEventTraceParams = (e == null ? undefined : e.teaEventTraceParams) || {
        send_message: {},
        receive_suggests: {},
        receive_think_reason: {},
        receive_batch_message: {}
      };
      this.teaEventOtherTraceParams = (e == null ? undefined : e.teaEventOtherTraceParams) || {};
      this.eventReportCounts = {};
      this.eventReportSuccessRecords = {};
    }
  }
  require.d(exports, {
    TelemetryTracker: function () {
      return r;
    }
  });
}