// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zu' to 'UploadTaskStatus'
// - Renamed export 'ZP' to 'ExternalImageUploadManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 271525
         */
module.exports = function (module, exports, require) {
  var r;
  var otterDocApiServiceDi = require("otter-doc-api-service-di") /*id: 53616*/;
  var docxClientVarsService = require("docx-client-vars-service") /*id: 595324*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var toastNotificationHandler = require("toast-notification-handler") /*id: 669090*/;
  function s(e, n, i) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = i;
    }
    return e;
  }
  (r = {})[r.WAITING = -1] = "WAITING";
  r[r.PROCESSING = 0] = "PROCESSING";
  r[r.SUCCESS = 1] = "SUCCESS";
  r[r.FAILED = 2] = "FAILED";
  r[r.ERROR = 3] = "ERROR";
  let u = r;
  function d(e) {
    let n = setTimeout(() => {
      clearTimeout(n);
      e();
    }, 0);
  }
  exports.ExternalImageUploadManager = class {
    addTask(e, n, i, r) {
      let o = {
        blockId: e,
        recordId: n,
        imageUrl: i,
        imageCode: "",
        fileToken: "",
        count: 120,
        callback: r,
        startTime: performance.now(),
        status: u.WAITING
      };
      this.taskMap.set(n, o);
      if (this.uploadingSet.size < 9) {
        this.handleStartSave(o);
      } else {
        this.waitingList.push(n);
      }
    }
    async bindImageToDoc(e) {
      let i = otterDocApiServiceDi.getOtterDocService();
      let r = await i.AgwBindAttachment({
        ...e,
        type: 1,
        source: 2
      });
      let a = r == null ? undefined : r.data?.key;
      if (!a) {
        throw Error("bind image to doc failed");
      }
      return a;
    }
    async handleStartSave(e) {
      this.uploadingSet.add(e.recordId);
      try {
        let {
          data: {
            task_id: n
          }
        } = await docxClientVarsService.docxApiService.createImage(e.imageUrl);
        this.imageCodeToRecordIdMap.set(n, e.recordId);
        e.imageCode = n;
        this.flushPolling();
      } catch (n) {
        this.handleSaveFailed(e, u.WAITING);
        this.handleDeleteTask(e);
      }
    }
    constructor(e) {
      s(this, "taskMap", new Map());
      s(this, "waitingList", []);
      s(this, "uploadingSet", new Set());
      s(this, "imageCodeToRecordIdMap", new Map());
      s(this, "isPolling", false);
      s(this, "pollingTimer", null);
      s(this, "collectorManager", undefined);
      s(this, "flushPolling", () => {
        if (!this.isPolling) {
          this.poll();
        }
      });
      s(this, "poll", async () => {
        if (this.uploadingSet.size === 0) {
          this.isPolling = false;
          return;
        }
        this.isPolling = true;
        this.clearExcessTask();
        let e = Array.from(this.imageCodeToRecordIdMap.keys());
        if (e.length > 0) {
          let {
            data: {
              task_result_list: n
            }
          } = await docxClientVarsService.docxApiService.checkImage(e);
          n.forEach(async e => {
            let {
              task_id: n,
              status: i,
              uri: r
            } = e;
            let o = this.imageCodeToRecordIdMap.get(n);
            let a = o && this.taskMap.get(o);
            if (a) {
              a.status = i;
              switch (i) {
                case u.FAILED:
                case u.ERROR:
                  this.handleDeleteTask(a);
                  this.handleSaveFailed(a, i);
                  break;
                case u.SUCCESS:
                  a.fileToken = await this.bindImageToDoc({
                    page_token: docTokenHelperUtils.resolveDocToken(),
                    uri: r
                  });
                  this.handleDeleteTask(a);
                  this.handleSaveSuccess(a);
                case u.PROCESSING:
              }
            }
          });
        }
        this.pollingTimer = setTimeout(this.poll, 1000);
      });
      s(this, "clearExcessTask", () => {
        for (let e of this.imageCodeToRecordIdMap.values()) {
          let n = this.taskMap.get(e);
          if (!n || n.count > 0) {
            if (n) {
              n.count--;
            }
            continue;
          }
          this.handleSaveFailed(n, u.ERROR);
          this.handleDeleteTask(n);
        }
      });
      s(this, "handleSaveFailed", (e, n) => {
        toastNotificationHandler.showToast({
          pcToastType: "error",
          mobileToastType: "fail",
          closable: true,
          message: t("etherpad.image_save_failed"),
          duration: 5000
        });
        d(() => e.callback(n));
        this.collectorManager.get(e.blockId).logSaveExternalImage(e.fileToken, e.recordId, false, e.startTime);
      });
      s(this, "handleSaveSuccess", e => {
        d(() => e.callback(u.SUCCESS, e.fileToken));
        this.collectorManager.get(e.blockId).logSaveExternalImage(e.fileToken, e.recordId, true, e.startTime);
      });
      s(this, "handleDeleteTask", e => {
        if (this.uploadingSet.has(e.recordId)) {
          this.uploadingSet.delete(e.recordId);
        }
        if (this.taskMap.has(e.recordId) && (this.taskMap.delete(e.recordId), e.imageCode && this.imageCodeToRecordIdMap.delete(e.imageCode), this.uploadingSet.size < 9 && this.waitingList.length > 0)) {
          let e = this.waitingList.shift();
          let n = this.taskMap.get(e);
          if (n) {
            this.handleStartSave(n);
            this.uploadingSet.add(n.recordId);
            this.flushPolling();
          }
        }
      });
      s(this, "stopTask", e => {
        let n = this.taskMap.get(e);
        if (n) {
          this.handleDeleteTask(n);
        }
      });
      s(this, "destroy", () => {
        this.isPolling = false;
        if (this.pollingTimer) {
          clearTimeout(this.pollingTimer);
        }
        this.taskMap.clear();
        this.uploadingSet.clear();
        this.waitingList.length = 0;
      });
      this.collectorManager = e;
    }
  };
  require.d(exports, {
    UploadTaskStatus: function () {
      return u;
    }
  });
}