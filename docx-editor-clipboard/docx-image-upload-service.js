// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HZ' to 'supportedImageMimeTypes'
// - Renamed export 'dF' to 'imageUploadErrorToastKey'
// - Renamed export 'wA' to 'DocxImageUploadService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 691820
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var axiosHttpClientLibrary = require("axios-http-client-library") /*id: 936615*/;
  var fileSelectTriggerUtil = require("file-select-trigger-util") /*id: 625286*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docUserServiceToken = require("doc-user-service-token") /*id: 765582*/;
  var docUploaderServiceSymbol = require("doc-uploader-service-symbol") /*id: 308802*/;
  var docFileUtilsSymbol = require("doc-file-utils-symbol") /*id: 696345*/;
  var docEnvServiceSymbol = require("doc-env-service-symbol") /*id: 606694*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var otterDocApiServiceDi = require("otter-doc-api-service-di") /*id: 53616*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  var docxImageUrlUtils = require("docx-image-url-utils") /*id: 219802*/;
  (n = {})[n.AIGen = 1] = "AIGen";
  n[n.UserUpload = 2] = "UserUpload";
  n[n.AISearch = 3] = "AISearch";
  let T = n;
  (i = {})[i.Image = 1] = "Image";
  i[i.File = 2] = "File";
  i[i.VideoCloud = 3] = "VideoCloud";
  let I = i;
  let _ = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp", "image/bmp", "image/x-bmp", "image/x-ms-bmp"];
  let R = t("CreationDoc_Docs_DocXBlock_Image_Toast");
  class B {
    validate(e) {
      let o = this.config.limitSize || 20971520;
      if (e.size > o) {
        let e = t("CreationDoc_Docs_DocXBlock_MaxImageSize_Toast", {
          size: o / 1024 / 1024
        });
        docxEventCollector.wrappedCollector("ccm_doc_image_upload_failed_toast_view", {
          fail_type: "size_too_large"
        });
        return Object.assign(Error(e), {
          msg: e
        });
      }
      let r = this.config.limitTypes || _;
      if (!r.includes(e.type)) {
        let e = t("CreationDoc_Docs_DocXBlock_ImageFormat_Toast", {
          format_list: r.join(", ")
        });
        docxEventCollector.wrappedCollector("ccm_doc_image_upload_failed_toast_view", {
          fail_type: "format_incompatible"
        });
        return Object.assign(Error(e), {
          msg: e
        });
      }
      return null;
    }
    async startDialogUpload() {
      let {
        files: e
      } = await fileSelectTriggerUtil.triggerFileSelect({
        fileTypes: this.config.limitTypes || _
      });
      return e[0] && this.uploadImage({
        file: e[0]
      });
    }
    async getFileByDialog(e = false) {
      let {
        files: o
      } = await fileSelectTriggerUtil.triggerFileSelect({
        allowMultiple: e,
        fileTypes: this.config.limitTypes || _
      });
      if (e) {
        return o;
      } else {
        return o[0];
      }
    }
    static getImageSize(e) {
      return new Promise((o, r) => {
        let n = URL.createObjectURL(e);
        let i = new Image();
        i.onload = () => {
          URL.revokeObjectURL(n);
          o({
            width: i.width,
            height: i.height
          });
        };
        i.onerror = () => {
          URL.revokeObjectURL(n);
          docxEventCollector.wrappedCollector("ccm_doc_image_upload_failed_toast_view", {
            fail_type: "size_recognize_fail"
          });
          r(Object.assign(Error(R), {
            msg: R
          }));
        };
        i.src = xssContentSanitizer.sanitizeUrl(n, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WmhWekZv$2pK$mRH%llRbk5pTWtacldsaEpkb%Z-T$do-%1s$jBaRmhD-zJJe$Jtd*FXRWwxWk$oT2FHTnRaREZqZHowOQ"
        });
      });
    }
    async downloadImage(e) {
      let o = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let r = await axiosHttpClientLibrary.axios.get(e, {
        responseType: "blob",
        withCredentials: o
      });
      let n = r.headers.contentType || r.headers["content-type"] || "image/jpeg";
      return new File([r.data], this.getFileNameFromUrl(e, n), {
        type: n
      });
    }
    getFileNameFromUrl(e, o) {
      let r = docxUtilityHelpers.generateRandomId();
      if (!docxImageUrlUtils.isBase64Image(e)) {
        let o = docUrlProcessingUtilities.createUrlObject(e);
        if (o && o.pathname) {
          r = o.pathname.split("/").pop() || r;
        }
      }
      let n = /\.[a-z0-9]$/i.test(r);
      return `${r}${n ? "" : {
        "image/jpeg": ".jpg",
        "image/jpg": ".jpg",
        "image/png": ".png",
        "image/gif": ".gif",
        "image/webp": ".webp",
        "image/bmp": ".bmp",
        "image/x-ms-bmp": ".bmp",
        "image/x-bmp": ".bmp"
      }[o] || ".jpg"}`;
    }
    async uploadImageToServer(e) {
      let {
        file: o,
        onProgress: r,
        onComplete: n
      } = e;
      let i = () => false;
      platformDocUtils.x6v.addCanLeavePageHandler(i);
      docxEventCollector.wrappedCollector("upload_file_start", {
        file_size: o.size,
        file_type: o.type
      });
      if (this.config.beforeUpload) {
        this.config.beforeUpload();
      }
      let a = await new Promise((e, a) => {
        this.uploader.upload(o, {
          complete: r => {
            let a = r.uploadResult.ImageUri;
            platformDocUtils.x6v.removeCanLeavePageHandler(i);
            if (r.percent === 100 && n) {
              n(r.percent / 100);
            }
            docxEventCollector.wrappedCollector("upload_file_end", {
              file_size: o.size,
              file_type: o.type,
              upload_result: "success"
            });
            e(a || "");
          },
          progress: e => {
            let o = e.percent / 100;
            if (o) {
              if (r != null) {
                r(o);
              }
            }
          },
          error: () => {
            platformDocUtils.x6v.removeCanLeavePageHandler(i);
            docxEventCollector.wrappedCollector("upload_file_end", {
              file_size: o.size,
              file_type: o.type,
              upload_result: "failed"
            });
            a(Error(`upload file to drive error: ${o.type}`));
          }
        });
      });
      let l = diContainerInstance.diContainer.get(docFileUtilsSymbol.docFileUtilsSymbol);
      return await this.bindImageToDoc({
        page_token: docTokenHelperUtils.resolveDocToken(),
        uri: a,
        format: l.getFileExt(o.name)
      });
    }
    async bindImageToDoc(e) {
      let r = await otterDocApiServiceDi.getOtterDocService().AgwBindAttachment({
        ...e,
        type: I.Image,
        source: T.UserUpload
      });
      let n = r == null ? undefined : r.data?.key;
      if (!n) {
        throw Error("bind image to doc failed");
      }
      return n;
    }
    uploadImage(e) {
      let {
        file: o
      } = e;
      let r = this.validate(o);
      if (r) {
        return Promise.reject(r);
      } else {
        return Promise.all([this.uploadImageToServer(e), B.getImageSize(o)]).then(e => {
          let [r, n] = e;
          return {
            src: xssContentSanitizer.sanitizeUrl("", null, {
              logType: "js.href/src",
              reportOnly: "false",
              blackConfig: "{}",
              configMode: "merge",
              isCloseSSRReport: false,
              bid: "flow_web",
              region: "cn",
              urlLimit: "-1",
              htmlLimit: "-1",
              isSaveValidUrl: false,
              isRuntimeLog: false,
              isDOMParser: true,
              escapeRule: "escape-report",
              reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
              scmBranch: "release_train_samantha_2026-03-09_1120843696898",
              scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
              scmVersion: "1.0.4.168",
              webpackPluginVersion: "3.4.5",
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WmhWekZv$2pK$mRH%llRbk5pTWtacldsaEpkb%Z-T$do-%1s$jBaRmhD-zJJe$Jtd*FXRWwxWk$oT2FHTnRaREZqZHowOQ"
            }),
            token: r,
            mimeType: o.type,
            size: o.size,
            name: o.name,
            scale: 1,
            width: n.width,
            height: n.height,
            align: docBlockTypeConstants.alignmentConstants.CENTER
          };
        });
      }
    }
    constructor(e) {
      var o;
      var r;
      var n;
      this.config = e;
      r = undefined;
      if ((o = typeof (n = function (e, o) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, o || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (o === "string" ? String : Number)(e);
      }(o = "uploader", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, o, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[o] = r;
      }
      let i = diContainerInstance.diContainer.get(docUploaderServiceSymbol.docUploaderService);
      let {
        UPLOADER_TYPE: a,
        UPLOADER_SCENE_ID: l
      } = i;
      let s = diContainerInstance.diContainer.get(docUserServiceToken.docUserServiceToken).getUserId();
      let c = diContainerInstance.diContainer.get(docEnvServiceSymbol.docEnvService).getAid();
      this.uploader = i.createUploader({
        type: a.Image,
        scene: l.BOT_CHAT,
        userId: s,
        appId: c
      });
    }
  }
  require.d(exports, {
    supportedImageMimeTypes: function () {
      return _;
    },
    imageUploadErrorToastKey: function () {
      return R;
    },
    DocxImageUploadService: function () {
      return B;
    }
  });
}