// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'SourceLocationError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 643059
         */
module.exports = function (module, exports, require) {
  var sourceLocationFormatter = require("source-location-formatter") /*id: 648255*/;
  class r extends Error {
    constructor(t, e, i) {
      super();
      if (typeof e == "string") {
        i = e;
        e = undefined;
      }
      let r = "";
      let s = {};
      let o = false;
      if (e) {
        s = "line" in e && "column" in e ? {
          place: e
        } : "start" in e && "end" in e ? {
          place: e
        } : "type" in e ? {
          ancestors: [e],
          place: e.position
        } : {
          ...e
        };
      }
      if (typeof t == "string") {
        r = t;
      } else if (!s.cause && t) {
        o = true;
        r = t.message;
        s.cause = t;
      }
      if (!s.ruleId && !s.source && typeof i == "string") {
        let t = i.indexOf(":");
        if (t === -1) {
          s.ruleId = i;
        } else {
          s.source = i.slice(0, t);
          s.ruleId = i.slice(t + 1);
        }
      }
      if (!s.place && s.ancestors && s.ancestors) {
        let t = s.ancestors[s.ancestors.length - 1];
        if (t) {
          s.place = t.position;
        }
      }
      let a = s.place && "start" in s.place ? s.place.start : s.place;
      this.ancestors = s.ancestors || undefined;
      this.cause = s.cause || undefined;
      this.column = a ? a.column : undefined;
      this.fatal = undefined;
      this.file;
      this.message = r;
      this.line = a ? a.line : undefined;
      this.name = sourceLocationFormatter.formatLocation(s.place) || "1:1";
      this.place = s.place || undefined;
      this.reason = this.message;
      this.ruleId = s.ruleId || undefined;
      this.source = s.source || undefined;
      this.stack = o && s.cause && typeof s.cause.stack == "string" ? s.cause.stack : "";
      this.actual;
      this.expected;
      this.note;
      this.url;
    }
  }
  r.prototype.file = "";
  r.prototype.name = "";
  r.prototype.reason = "";
  r.prototype.message = "";
  r.prototype.stack = "";
  r.prototype.column = undefined;
  r.prototype.line = undefined;
  r.prototype.ancestors = undefined;
  r.prototype.cause = undefined;
  r.prototype.fatal = undefined;
  r.prototype.place = undefined;
  r.prototype.ruleId = undefined;
  r.prototype.source = undefined;
  require.d(exports, {
    SourceLocationError: function () {
      return r;
    }
  });
}