// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'DirectoryTask'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 168031
         */
module.exports = function (module, exports, require) {
  var aiSpaceConstants = require("ai-space-constants") /*id: 784952*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiSpaceTaskBase = require("ai-space-task-base") /*id: 218332*/;
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
  class l extends aiSpaceTaskBase.TaskBase {
    run() {
      if (!this.canRun) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "DirectoryTask_CanNotRun"
        });
        return;
      }
      if (this.getStatus() === aiSpaceConstants.OperationStatus.Paused) {
        return;
      }
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "DirectoryTask_Start"
      });
      let {
        parentTask: e
      } = this;
      if (!e) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "DirectoryTask_CompleteWithoutMount"
        });
        this._status$.next(aiSpaceConstants.OperationStatus.Success);
        return;
      }
      if (e.getStatus() === aiSpaceConstants.OperationStatus.Error) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "DirectoryTask_ReadyToMount_ParentTaskErrorRetry"
        });
        e.retry();
      } else {
        e.run();
      }
      this._status$.next(aiSpaceConstants.OperationStatus.Inflight);
      e.status$.subscribe(async e => {
        if (e === aiSpaceConstants.OperationStatus.Success) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "DirectoryTask_MountStart"
          });
          try {
            await this.mountNode();
            this._status$.next(aiSpaceConstants.OperationStatus.Success);
            loggerServiceCore.defaultLogger.persist.info({
              eventName: "DirectoryTask_MountSuccess"
            });
          } catch (e) {
            if (e instanceof Error) {
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "DirectoryTask_MountFailed",
                error: e
              });
            }
            this._status$.next(aiSpaceConstants.OperationStatus.Error);
          }
        }
      });
    }
    get canPause() {
      return false;
    }
    pause() {}
    toReadOnly() {
      return {
        ...super.toReadOnly(),
        type: aiSpaceConstants.EntryTypes.Directory,
        isRoot: this.isRoot
      };
    }
    constructor({
      directoryName: e,
      isRoot: t,
      meta: i,
      ...n
    }) {
      super(n);
      o(this, "directoryName", undefined);
      o(this, "isRoot", false);
      this.directoryName = e;
      this.isRoot = !!t;
      this.meta = i;
    }
  }
  require.d(exports, {
    DirectoryTask: function () {
      return l;
    }
  });
}