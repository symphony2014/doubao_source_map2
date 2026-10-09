// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'BehaviorWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 633889
         */
module.exports = function (module, exports, require) {
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var distinctUntilChangedOperator = require("distinct-until-changed-operator") /*id: 309760*/;
  var observableShareReplayOperator = require("observable-share-replay-operator") /*id: 669027*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  function s(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  class c {
    get value() {
      return this.subject.value;
    }
    setup() {
      let e = this.init();
      if (e) {
        this.destoryHandle = e;
      }
    }
    next(e) {
      this.subject.next(e);
    }
    error(e) {
      this.subject.error(e);
    }
    complete() {
      this.subject.complete();
    }
    destory() {
      var e;
      if ((e = this.destoryHandle) !== null && e !== undefined) {
        e.call(this);
      }
      this.subject.complete();
    }
    constructor(e, i = true) {
      s(this, "subject", undefined);
      s(this, "reactive", undefined);
      s(this, "destoryHandle", undefined);
      this.subject = new behaviorSubjectClass.BehaviorSubject(e);
      this.reactive = this.subject.pipe(distinctUntilChangedOperator.distinctUntilChanged(deepEqualUtil_1.deepEqual), observableShareReplayOperator.shareReplayWithConfig());
      if (i) {
        this.setup();
      }
    }
  }
  require.d(exports, {
    BehaviorWrapper: function () {
      return c;
    }
  });
}