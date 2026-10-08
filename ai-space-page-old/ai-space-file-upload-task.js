// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'FileUploadTask'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 292067
         */
module.exports = function (module, exports, require) {
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var aiSpaceConstants = require("ai-space-constants") /*id: 784952*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var aiSpaceQuoteUtils = require("ai-space-quote-utils") /*id: 577173*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiSpaceTaskBase = require("ai-space-task-base") /*id: 218332*/;
  function d(e, t, i) {
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
  class u extends aiSpaceTaskBase.TaskBase {
    getErrorType() {
      return this.errorType;
    }
    async run() {
      if (!this.canRun) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "FileTask_CanNotRun"
        });
        return;
      }
      if (this.uploadResult) {
        this.executeMountNode();
        return;
      }
      let {
        file: e
      } = this;
      if (await this.tryResumeUploading()) {
        return;
      }
      this._status$.next(aiSpaceConstants.OperationStatus.Inflight);
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "FileTask_UploadStart",
        meta: {
          size: e.size
        }
      });
      let t = {
        complete: t => {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "FileTask_UploadComplete",
            meta: {
              size: e.size
            }
          });
          this.uploadResult = t.uploadResult;
          let {
            parentTask: i
          } = this;
          if (!i) {
            loggerServiceCore.defaultLogger.persist.info({
              eventName: "FileTask_CompleteWithoutMount"
            });
            this._status$.next(aiSpaceConstants.OperationStatus.Success);
            return;
          }
          if (i.getStatus() === aiSpaceConstants.OperationStatus.Error) {
            loggerServiceCore.defaultLogger.persist.info({
              eventName: "FileTask_ReadyToMount_ParentTaskErrorRetry"
            });
            i.retry();
          } else {
            i.run();
          }
          i.status$.subscribe(e => {
            if (e === aiSpaceConstants.OperationStatus.Success) {
              loggerServiceCore.defaultLogger.persist.info({
                eventName: "FileTask_MountStart"
              });
              this.executeMountNode();
            }
          });
        },
        progress: e => {
          let t = Number(e.percent);
          if (Number.isFinite(t)) {
            this._uploadPercent$.next(t);
          }
        },
        error: () => {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "FileTask_UploadFailed",
            meta: {
              size: this.file.size
            }
          });
          this.errorType = aiSpaceConstants.StorageErrors.UploadError;
          this._status$.next(aiSpaceConstants.OperationStatus.Error);
        }
      };
      if (this.getCustomUploader) {
        let i = await this.getCustomUploader();
        if (i) {
          if (i != null) {
            i.upload(e, {
              complete: t.complete,
              progress: t.progress,
              error: t.error
            });
          }
          return;
        }
      }
      let i = await chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService");
      if (!i) {
        return;
      }
      let {
        local_key: n
      } = i.preprocessFile(e, this.preprocessTaskType(), undefined, {
        calculateMd5: this.calculateMd5,
        fileUploadCallbacks: t
      });
      this.uploadFileKey = n;
    }
    async pause() {
      if (!this.canPause) {
        return;
      }
      if (this.getStatus() === aiSpaceConstants.OperationStatus.Pending) {
        this._status$.next(aiSpaceConstants.OperationStatus.Paused);
        return;
      }
      let e = this.getFileKey();
      if (this.getStatus() === aiSpaceConstants.OperationStatus.Inflight && this.uploadFileKey && e) {
        let t = await chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService");
        if (t != null) {
          t.pause(e, this.preprocessTaskType());
        }
        this._status$.next(aiSpaceConstants.OperationStatus.Paused);
      }
    }
    async executeMountNode() {
      try {
        await this.mountNode();
        this._status$.next(aiSpaceConstants.OperationStatus.Success);
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "FileTask_MountSuccess"
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "FileTask_MountFailed",
          error: e
        });
        this.errorType = aiSpaceConstants.StorageErrors.MountError;
        this._status$.next(aiSpaceConstants.OperationStatus.Error);
      }
    }
    async tryResumeUploading() {
      if (!this.uploadFileKey) {
        return false;
      }
      let {
        fileKey: e,
        loading: t
      } = chatStoreManager.getStore("attachmentUploadStore").getState().preprocessTaskMap[this.uploadFileKey];
      if (!e || !t) {
        return false;
      }
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "FileTask_UploadResume",
        meta: {
          size: this.file.size
        }
      });
      let i = await chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService");
      if (i != null) {
        i.resume(e, this.preprocessTaskType());
      }
      this._status$.next(aiSpaceConstants.OperationStatus.Inflight);
      return true;
    }
    getUploadResult() {
      return this.uploadResult;
    }
    toReadOnly() {
      return {
        ...super.toReadOnly(),
        type: aiSpaceConstants.EntryTypes.File,
        uploadPercent$: this.uploadPercent$,
        getFileLocalKey: () => this.uploadFileKey,
        getFile: () => this.file,
        getErrorType: () => this.errorType
      };
    }
    preprocessTaskType() {
      if (aiSpaceQuoteUtils.isImageBlob(this.file)) {
        return "image";
      } else {
        return "file";
      }
    }
    getFileKey() {
      if (!this.uploadFileKey) {
        return;
      }
      let {
        fileKey: e
      } = chatStoreManager.getStore("attachmentUploadStore").getState().preprocessTaskMap[this.uploadFileKey] || {};
      return e;
    }
    async destroy() {
      super.destroy();
      if (this.uploadFileKey) {
        let {
          fileKey: e,
          loading: t
        } = chatStoreManager.getStore("attachmentUploadStore").getState().preprocessTaskMap[this.uploadFileKey];
        if (e && t) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "FileTask_UploadCancel"
          });
          let t = await chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService");
          if (t != null) {
            t.cancel(e);
          }
        }
      }
    }
    constructor({
      file: e,
      ...t
    }) {
      super(t);
      d(this, "errorType", undefined);
      d(this, "file", undefined);
      d(this, "uploadFileKey", null);
      d(this, "uploadResult", undefined);
      d(this, "_uploadPercent$", new behaviorSubjectClass.BehaviorSubject(0));
      d(this, "uploadPercent$", this._uploadPercent$.asObservable());
      d(this, "getCustomUploader", undefined);
      d(this, "calculateMd5", true);
      this.file = e;
    }
  }
  require.d(exports, {
    FileUploadTask: function () {
      return u;
    }
  });
}