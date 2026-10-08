// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'l' to 'typescriptRuntimeHelpers'
// - Resolved require(4100) to 'typescript-runtime-helpers'
// - Renamed variable 's' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'd' to 'blockManagerToken'
// - Resolved require(109058) to 'block-manager-token'
// - Renamed variable 'u' to 'docUserServiceToken'
// - Resolved require(765582) to 'doc-user-service-token'
// - Renamed variable 'f' to 'docUploaderServiceSymbol'
// - Resolved require(308802) to 'doc-uploader-service-symbol'
// - Renamed variable 'c' to 'docFileUtilsSymbol'
// - Resolved require(696345) to 'doc-file-utils-symbol'
// - Renamed variable 'p' to 'docEnvServiceSymbol'
// - Resolved require(606694) to 'doc-env-service-symbol'
// - Renamed variable 'v' to 'diContainerInstance'
// - Resolved require(167867) to 'di-container-instance'
// - Renamed variable 'g' to 'asyncRetryUtils_1'
// - Resolved require(989891) to 'async-retry-utils_1'
// - Renamed variable 'h' to 'fileUploaderValidationUtil'
// - Resolved require(285037) to 'file-uploader-validation-util'
// - Renamed variable 'm' to 'docxFileAttachmentHandler'
// - Resolved require(356160) to 'docx-file-attachment-handler'
// - Renamed variable 'I' to 'toastManagerWrapper'
// - Resolved require(55407) to 'toast-manager-wrapper'
// - Renamed variable '_' to 'fileUploaderServiceProvider'
// - Resolved require(754512) to 'file-uploader-service-provider'
// - Updated imported property 'I' to 'diContainer' (module 167867)
// - Updated imported property 'N' to 'docFileUtilsSymbol' (module 696345)
// - Updated imported property 'mW' to 'validateFile' (module 285037)
// - Updated imported property 'L$' to 'getFileStatusMessage' (module 285037)
// - Updated imported property 'TX' to 'truncateFileName' (module 285037)
// - Updated imported property 'J' to 'showToast' (module 55407)
// - Updated imported property 'Bo' to 'safeStringify' (module 989891)
// - Updated imported property 'Hp' to 'bindAttachmentToBlock' (module 356160)
// - Updated imported property 'mv' to 'removeFileBlockByRecordId' (module 356160)
// - Updated imported property 'qD' to 'processFileTokenPaste' (module 356160)
// - Updated imported property 'n' to 'docUploaderService' (module 308802)
// - Updated imported property 'x' to 'docUserServiceToken' (module 765582)
// - Updated imported property 'd' to 'docEnvService' (module 606694)
// - Updated imported property 'DF' to 'Provide' (module 555385)
// - Updated imported property 'G' to 'fileUploaderService' (module 754512)
// - Updated imported property 'gn' to 'metadata' (module 4100)
// - Updated imported property 'fM' to 'decorate' (module 4100)
// - Updated imported property 'w6' to 'reflectMetadata' (module 4100)
// - Updated imported property 'n' to 'blockManagerToken' (module 109058)
// - Updated imported property 'XO' to 'registerProviders' (module 135760)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_file-uploader.f9224cfb.js
         * chunkId: 28747
         * moduleId: 48287
         */
module.exports = function (module, exports, require) {
  var o;
  var a;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var docUserServiceToken = require("doc-user-service-token") /*id: 765582*/;
  var docUploaderServiceSymbol = require("doc-uploader-service-symbol") /*id: 308802*/;
  var docFileUtilsSymbol = require("doc-file-utils-symbol") /*id: 696345*/;
  var docEnvServiceSymbol = require("doc-env-service-symbol") /*id: 606694*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var asyncRetryUtils_1 = require("async-retry-utils_1") /*id: 989891*/;
  var fileUploaderValidationUtil = require("file-uploader-validation-util") /*id: 285037*/;
  var docxFileAttachmentHandler = require("docx-file-attachment-handler") /*id: 356160*/;
  var toastManagerWrapper = require("toast-manager-wrapper") /*id: 55407*/;
  function y(e, r, i) {
    var o;
    if ((r = typeof (o = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var o = i.call(e, r || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, r, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = i;
    }
    return e;
  }
  var b = class {
    getUploader(e) {
      let r = diContainerInstance.diContainer.get(docFileUtilsSymbol.docFileUtilsSymbol);
      let i = r.fileIsImage(e);
      let o = r.fileIsAudio(e);
      let a = r.fileIsVideo(e);
      if (i) {
        return this.imageUploader;
      } else if (o || a) {
        return this.mediaUploader;
      } else {
        return this.fileUploader;
      }
    }
    filterFiles(e) {
      if (e instanceof FileList) {
        e = Array.from(e);
      }
      return e.filter(e => !!fileUploaderValidationUtil.validateFile(e) || (toastManagerWrapper.showToast({
        type: "error",
        content: fileUploaderValidationUtil.getFileStatusMessage(e)
      }, false), false));
    }
    async uploadFile(e, r, i, o) {
      let a = diContainerInstance.diContainer.get(docFileUtilsSymbol.docFileUtilsSymbol);
      r.forEach(async (e, r) => {
        let [, n] = i[r];
        let l = a.fileIsImage(e);
        let s = a.fileIsAudio(e);
        let d = a.fileIsVideo(e);
        let u = s || d;
        let f = u ? asyncRetryUtils_1.safeStringify({
          Source: 2
        }) : undefined;
        let c = await this.getUploader(e).upload(e, {
          complete: r => {
            let a = u ? r.uploadResult.Vid : r.uploadResult.ImageUri;
            let s = d ? r.uploadResult.VideoMeta?.Width : l ? r.uploadResult.ImageWidth : undefined;
            let f = d ? r.uploadResult.VideoMeta?.Height : l ? r.uploadResult.ImageHeight : undefined;
            if (a) {
              docxFileAttachmentHandler.bindAttachmentToBlock({
                token: a,
                recordId: n,
                blockManager: this.blockManager,
                fileType: u ? 3 : l ? 1 : 2,
                width: s,
                height: f,
                onError: () => {
                  toastManagerWrapper.showToast({
                    type: "error",
                    content: `\u{300C}${fileUploaderValidationUtil.truncateFileName(e.name)}\u{300D} ${t("mention.uploader_failure")}`
                  }, false);
                  docxFileAttachmentHandler.removeFileBlockByRecordId(n, this.blockManager);
                }
              });
            }
            if (c) {
              this.taskInfoMap.delete(c);
            }
          },
          progress: e => {
            let r = e.percent;
            docxFileAttachmentHandler.processFileTokenPaste(n, r / 100);
          },
          error: () => {
            if (c && this.taskInfoMap.get(c)) {
              toastManagerWrapper.showToast({
                type: "error",
                content: `\u{300C}${fileUploaderValidationUtil.truncateFileName(e.name)}\u{300D} ${t("mention.uploader_failure")}`
              }, false);
              docxFileAttachmentHandler.removeFileBlockByRecordId(n, this.blockManager);
              if (c) {
                this.taskInfoMap.delete(c);
              }
            }
          }
        }, {
          callbackArgs: f
        });
        if (c) {
          this.taskInfoMap.set(c, {
            file: e,
            uploadKey: c,
            recordId: n,
            source: o,
            startTime: performance.now()
          });
        }
      });
    }
    getTaskInfoById(e) {
      return Array.from(this.taskInfoMap.values()).find(r => r.recordId === e);
    }
    pause(e) {
      let {
        uploadKey: r,
        file: i
      } = this.getTaskInfoById(e) || {};
      if (r && i) {
        this.getUploader(i).pause(r);
      }
    }
    retry(e) {}
    cancel(e) {
      let {
        uploadKey: r,
        file: i
      } = this.getTaskInfoById(e) || {};
      if (r && i) {
        var o;
        if ((o = this.getUploader(i).client) !== null && o !== undefined) {
          o.cancel(r);
        }
        this.taskInfoMap.delete(r);
      }
    }
    destroy() {
      [...this.taskInfoMap.keys()].forEach(e => {
        let {
          uploadKey: r,
          file: i
        } = this.taskInfoMap.get(e) || {};
        if (r && i) {
          var o;
          if ((o = this.getUploader(i).client) !== null && o !== undefined) {
            o.cancel(e);
          }
        }
      });
      this.taskInfoMap.clear();
    }
    constructor(e) {
      y(this, "blockManager", undefined);
      y(this, "imageUploader", undefined);
      y(this, "fileUploader", undefined);
      y(this, "mediaUploader", undefined);
      y(this, "taskInfoMap", new Map());
      this.blockManager = e;
      let r = diContainerInstance.diContainer.get(docUploaderServiceSymbol.docUploaderService);
      let {
        UPLOADER_TYPE: i,
        UPLOADER_SCENE_ID: o
      } = r;
      let a = diContainerInstance.diContainer.get(docUserServiceToken.docUserServiceToken).getUserId();
      let n = diContainerInstance.diContainer.get(docEnvServiceSymbol.docEnvService).getAid();
      let l = {
        scene: o.BOT_CHAT,
        userId: a,
        appId: n
      };
      this.imageUploader = r.createUploader({
        type: i.Image,
        ...l
      });
      this.fileUploader = r.createUploader({
        type: i.File,
        ...l
      });
      this.mediaUploader = r.createUploader({
        type: i.Video,
        ...l
      });
    }
  };
  var fileUploaderServiceProvider = require("file-uploader-service-provider") /*id: 754512*/;
  let k = dependencyInjectionContainer.Provide(fileUploaderServiceProvider.fileUploaderService)((a = class {
    destroy() {
      var e;
      if ((e = this.instance) !== null && e !== undefined) {
        e.destroy();
      }
    }
    constructor(e) {
      var r;
      var i;
      var o;
      i = undefined;
      if ((r = typeof (o = function (e, r) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var i = e[Symbol.toPrimitive];
        if (i !== undefined) {
          var o = i.call(e, r || "default");
          if (typeof o != "object") {
            return o;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(e);
      }(r = "instance", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, r, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[r] = i;
      }
      this.instance = new b(e);
    }
  }, o = a = typescriptRuntimeHelpers.metadata([typescriptRuntimeHelpers.decorate(0, blockManagerToken.blockManagerToken), typescriptRuntimeHelpers.reflectMetadata("design:type", Function), typescriptRuntimeHelpers.reflectMetadata("design:paramtypes", [undefined])], a))) || o;
  function U() {
    docxEditorCore.registerProviders([{
      provide: fileUploaderServiceProvider.fileUploaderService,
      useClass: k
    }]);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return U;
    }
  });
}