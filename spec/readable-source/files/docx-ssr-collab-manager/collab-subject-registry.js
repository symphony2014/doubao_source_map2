// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'CollabSubjectReg'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 703629
         */
module.exports = function (module, exports, require) {
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var subjectTypeRegistry = require("subject-type-registry") /*id: 736379*/;
  function o(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class a extends subjectTypeRegistry.SubjectTypeRegistry {
    destroy() {
      super.destroy();
      this.colabInitSignal.complete();
    }
    constructor(...e) {
      super(...e);
      o(this, "userLeaveSignal", this.register());
      o(this, "acceptCommitSignal", this.register());
      o(this, "userUpdateCursorSignal", this.register());
      o(this, "newChangeMessageSignal", this.register());
      o(this, "newChangeEndSignal", this.register());
      o(this, "colabInitSignal", new behaviorSubjectClass.BehaviorSubject(false));
      o(this, "resourceUpdateSignal", this.register());
    }
  }
  require.d(exports, {
    CollabSubjectReg: function () {
      return a;
    }
  });
}