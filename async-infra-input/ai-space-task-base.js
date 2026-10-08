// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'TaskBase'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 218332
         */
module.exports = function (module, exports, require) {
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var aiSpaceConstants = require("ai-space-constants") /*id: 784952*/;
  function o(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class l {
    get canPause() {
      return [aiSpaceConstants.OperationStatus.Pending, aiSpaceConstants.OperationStatus.Inflight].includes(this.getStatus());
    }
    get canRetry() {
      return [aiSpaceConstants.OperationStatus.Paused, aiSpaceConstants.OperationStatus.Error].includes(this.getStatus());
    }
    get canRun() {
      return ![aiSpaceConstants.OperationStatus.Inflight, aiSpaceConstants.OperationStatus.Success].includes(this.getStatus()) && !this.isDestroyed;
    }
    get isDestroyed() {
      return this._isDestroyed;
    }
    retry() {
      if (this.canRetry) {
        this._status$.next(aiSpaceConstants.OperationStatus.Pending);
      }
    }
    toReadOnly() {
      return {
        id: this.id,
        getNodeId: () => this.nodeId,
        status$: this.status$,
        getStatus: () => this._status$.value,
        getParentNodeId: () => {
          var e;
          if ((e = this.parentTask) === null || e === undefined) {
            return undefined;
          } else {
            return e.getNodeId();
          }
        },
        getMeta: () => this.meta
      };
    }
    async mountNode() {
      return Promise.reject(Error("not implemented"));
    }
    destroy() {
      this._status$.complete();
      this._isDestroyed = true;
    }
    constructor({
      parentTask: e,
      id: t,
      batchId: i
    }) {
      o(this, "_isDestroyed", false);
      o(this, "id", undefined);
      o(this, "batchId", undefined);
      o(this, "nodeId", undefined);
      o(this, "_status$", new behaviorSubjectClass.BehaviorSubject(aiSpaceConstants.OperationStatus.Pending));
      o(this, "parentTask", undefined);
      o(this, "status$", this._status$.asObservable());
      o(this, "meta", undefined);
      o(this, "getStatus", () => this._status$.value);
      o(this, "getNodeId", () => this.nodeId);
      this.parentTask = e;
      this.id = t || uuidV1Generator.generateUuid();
      this.batchId = i;
    }
  }
  require.d(exports, {
    TaskBase: function () {
      return l;
    }
  });
}