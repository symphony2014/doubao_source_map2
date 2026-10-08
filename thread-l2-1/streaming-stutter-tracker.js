// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$C' to 'logStutterRate'
// - Renamed export 'jC' to 'StutterTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 585624
         */
module.exports = function (module, exports, require) {
  var i;
  var l;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function s(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  (i = {}).START = "start";
  i.UPDATE = "update";
  i.COMPLETE = "complete";
  i.ERROR = "error";
  let c = i;
  (l = {}).NONE = "none";
  l.MILD = "mild";
  l.SEVERE = "severe";
  let d = l;
  let u = e => ({
    ...e,
    startTimestamp: Date.now(),
    updateTimestamps: [],
    events: [],
    stutterInfos: [],
    stutterDurations: {
      mild: 0,
      severe: 0
    },
    totalDuration: 0,
    isFinished: false,
    isError: false
  });
  class p {
    update(e) {
      let t = Date.now();
      this.lifecycleData.updateTimestamps.push(t);
      this.lifecycleData.events.push({
        type: c.UPDATE,
        timestamp: t,
        data: e
      });
      this._processCurrentStutter(t);
    }
    complete() {
      let e = Date.now();
      this.lifecycleData.endTimestamp = e;
      this.lifecycleData.isFinished = true;
      this.lifecycleData.totalDuration = e - this.lifecycleData.startTimestamp;
      this.lifecycleData.events.push({
        type: c.COMPLETE,
        timestamp: e
      });
    }
    error(e) {
      let t = Date.now();
      this.lifecycleData.endTimestamp = t;
      this.lifecycleData.isFinished = true;
      this.lifecycleData.isError = true;
      this.lifecycleData.totalDuration = t - this.lifecycleData.startTimestamp;
      this.lifecycleData.errorDetails = [e.message];
      this.lifecycleData.events.push({
        type: c.ERROR,
        timestamp: t,
        data: e
      });
    }
    get hasError() {
      return this.lifecycleData.isError;
    }
    constructor(e) {
      s(this, "lifecycleData", undefined);
      s(this, "_processCurrentStutter", e => {
        let {
          updateTimestamps: t
        } = this.lifecycleData;
        if (t.length < 2) {
          return;
        }
        let {
          lifecycleData: n
        } = this;
        let i = n.updateTimestamps[n.updateTimestamps.length - 2];
        let l = e - i;
        let r = d.NONE;
        if (l > 3000) {
          r = d.SEVERE;
          n.stutterDurations.severe += l;
        } else if (l > 1000) {
          r = d.MILD;
          n.stutterDurations.mild += l;
        }
        if (r !== d.NONE) {
          n.stutterInfos.push({
            duration: l,
            level: r,
            startTimestamp: i,
            endTimestamp: e
          });
        }
      });
      s(this, "calcStutterRate", () => {
        let {
          stutterInfos: e,
          totalDuration: t,
          stutterDurations: n
        } = this.lifecycleData;
        let i = t || 1;
        let l = n.mild / i;
        let r = n.severe / i;
        return {
          mildStutterPercentage: l,
          severeStutterPercentage: r,
          mildStutterCount: e.filter(e => e.level === d.MILD).length,
          severeStutterCount: e.filter(e => e.level === d.SEVERE).length,
          totalDuration: i,
          mildStutterDuration: n.mild,
          severeStutterDuration: n.severe
        };
      });
      let t = u(e);
      t.events.push({
        type: c.START,
        timestamp: t.startTimestamp
      });
      this.lifecycleData = t;
    }
  }
  let m = e => {
    let t;
    let n;
    let i = e.calcStutterRate();
    let {
      blockId: l,
      messageId: a,
      conversationId: s
    } = e.lifecycleData;
    if (a && s) {
      var c;
      var d;
      var u;
      var p;
      let e = conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), s, a);
      t = e == null ? undefined : (d = e.skill) === null || d === undefined ? undefined : (c = d.skill_id) === null || c === undefined ? undefined : c.toString();
      n = e == null ? undefined : (p = e.skill) === null || p === undefined ? undefined : (u = p.skill_type) === null || u === undefined ? undefined : u.toString();
    }
    return {
      block_id: l,
      skill_id: t,
      skill_type: n,
      message_id: a,
      conversation_id: s,
      streaming_full_duration: i.totalDuration,
      streaming_stuck_1000_duration: i.mildStutterDuration,
      streaming_stuck_3000_duration: i.severeStutterDuration,
      streaming_stuck_1000_percentage: i.mildStutterPercentage,
      streaming_stuck_3000_percentage: i.severeStutterPercentage,
      streaming_stuck_1000_count: i.mildStutterCount,
      streaming_stuck_3000_count: i.severeStutterCount,
      streaming_is_error: +!!e.lifecycleData.isError
    };
  };
  let v = e => {
    if (!e.lifecycleData.isFinished || e.lifecycleData.updateTimestamps.length <= 2) {
      return;
    }
    let t = m(e);
    loggerServiceCore.defaultLogger.persist.success({
      eventName: "coding_canvas_streaming_output_stutter_rate",
      meta: t
    });
  };
  require.d(exports, {
    logStutterRate: function () {
      return v;
    },
    StutterTracker: function () {
      return p;
    }
  });
}