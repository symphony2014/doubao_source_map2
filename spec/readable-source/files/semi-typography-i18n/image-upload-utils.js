// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'useImageUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-chat-input.5c53534b.js
         * chunkId: 45281
         * moduleId: 581255
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var imageCompressionUtils_1 = require("image-compression-utils_1") /*id: 532036*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let d = {
    imagex_upload: "imagex_upload_failed"
  };
  let p = () => {
    let [e, t] = reactCoreLibraryReexport.useState(null);
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let p = (e, t) => chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(n => n == null ? undefined : n.getUploader(e, t));
    let m = async e => {
      let {
        file: i,
        onImageUploadProgress: a,
        onImageUploadSuccess: o,
        onImageUploadError: m
      } = e;
      let h = await imageCompressionUtils_1.compressor(i);
      if (h.size > imageCompressionUtils_1.getMaxSizeLimit()) {
        semiToastNotification.toastInstance.error(n("skill_image_intput_reference_alert_format"));
        return;
      }
      let f = new FileReader();
      f.readAsDataURL(h);
      let g = URL.createObjectURL(h);
      if (a != null) {
        a(g, {
          percent: 0
        });
      }
      f.onload = function () {
        let e = new Image();
        e.src = xssContentSanitizer.sanitizeUrl(g, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*t6%214Wld*SnN%RmRzZEZsWFpHeE1NMD%1$1hrNWIySXlPWEpqZ$RreFl6SlZkR0Z-T$do-%1s$jBaRmhD-zJJe$JtdE1ibEo2$1ZoS2Jt%ll%$DA9"
        });
        e.onload = function () {
          let {
            width: r,
            height: l
          } = e;
          if (r <= 40 || l <= 40) {
            semiToastNotification.toastInstance.error(n("skill_image_intput_reference_alert_format"));
            return;
          }
          p("image").then(e => {
            if (e != null) {
              e.upload(h, {
                progress: e => {
                  if (a != null) {
                    a(g, e);
                  }
                },
                complete: async e => {
                  try {
                    var a;
                    var p;
                    let {
                      Uri: u
                    } = e.uploadResult ?? {};
                    if (!u) {
                      throw Error(d.imagex_upload);
                    }
                    let m = i.type.split("/")[1];
                    let {
                      data: f
                    } = await apiServicesCollection.ResourceApiService.GetFileURL({
                      uris: [u],
                      type: "image",
                      format: m,
                      expire_second: 3600
                    });
                    let g = (f == null ? undefined : (a = f.file_urls) === null || a === undefined ? undefined : a[0]?.main_url) || (f == null ? undefined : (p = f.file_urls) === null || p === undefined ? undefined : p[0]?.back_url);
                    if (!g) {
                      throw Error("imagex_upload_failed");
                    }
                    let v = {
                      width: r,
                      height: l,
                      url: g,
                      format: m,
                      url_formats: {}
                    };
                    let b = {
                      key: u,
                      image_thumb: v,
                      image_thumb_raw: v,
                      image_ori: v,
                      image_raw: v,
                      image_preview: v,
                      image_thumb_formats: {},
                      image_thumb_ori_formats: {},
                      feedback: "",
                      request_id: "",
                      description: ""
                    };
                    t(b);
                    o(b);
                  } catch (e) {
                    loggerServiceCore.defaultLogger.persist.error({
                      eventName: "edit_image_imagex_upload_error",
                      error: e
                    });
                    m(e);
                  }
                },
                error: e => {
                  let t = Error(JSON.stringify(e.extra));
                  loggerServiceCore.defaultLogger.persist.error({
                    eventName: "edit_image_imagex_upload_error",
                    error: t
                  });
                  m(t);
                }
              });
            }
          });
        };
      };
      f.onerror = () => {
        let e = Error("文件读取失败");
        loggerServiceCore.defaultLogger.console.error({
          error: e
        });
      };
    };
    let h = async e => {
      if (!e) {
        throw Error("uploadImageFromUrl_url_is_empty");
      }
      let t = await fetch(e).then(e => e.blob());
      return await new Promise((e, n) => {
        m({
          file: new File([t], `image.${t.type.split("/")[1]}`, {
            type: t.type
          }),
          onImageUploadSuccess: t => {
            e(t);
          },
          onImageUploadError: e => {
            n(e);
          }
        });
      });
    };
    return {
      editImage: e,
      uploadImage: m,
      uploadImageFromUrl: h
    };
  };
  require.d(exports, {
    useImageUpload: function () {
      return p;
    }
  });
}