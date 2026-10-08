// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'useVideoFileUpload'
// - Renamed export 'V' to 'useVideoAttachment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 642912
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var imageConfigConstants_1 = require("image-config-constants_1") /*id: 620790*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var imageCompressionUtils_1 = require("image-compression-utils_1") /*id: 532036*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var dbxSonnerToasterWrapper = require("dbx-sonner-toaster-wrapper") /*id: 682910*/;
  var checkVideoUploadMultiplePic = require("check-video-upload-multiple-pic") /*id: 472580*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let a = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig);
    let o = (e == null ? undefined : e.chatId) ?? (a == null ? undefined : a.chatId) ?? "";
    let u = (e == null ? undefined : e.skillType) ?? chatAppEnums.SkillType.VideoGeneration;
    let d = attachmentUploadStoreHooks.subscribeAttachments({
      chatId: o,
      skillType: u
    });
    let p = attachmentUploadStoreHooks.getAttachmentKeys({
      chatId: o,
      skillType: u
    });
    let f = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: o,
      skillType: u
    });
    let {
      addAttachment: m,
      clearAttachments: g,
      deleteAttachment: v,
      reuploadAttachment: _
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: o,
      skillType: chatAppEnums.SkillType.VideoGeneration
    });
    let y = reactCoreLibraryReexport.useMemo(() => f.length > 0 && reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
      showPresetPrompt: false,
      attachmentStates: f,
      onDeleteAttachment: e => {
        v({
          index: e
        });
      },
      onRetryAttachment: e => _({
        index: e
      }),
      renderArea: e => reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentImageAreaLazy, {
        ...e
      })
    }), [f]);
    return {
      attachments: d,
      attachmentKeys: p,
      attachmentStates: f,
      customShowArea: y,
      hasAttachment: f.length > 0,
      clearAttachments: g,
      addAttachment: m
    };
  };
  let w = e => {
    let {
      skill: n,
      chatId: r
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let {
      clearAttachments: s,
      addAttachment: c,
      attachmentStates: b
    } = y({
      chatId: r,
      skillType: (n == null ? undefined : n.skill_type) ?? chatAppEnums.SkillType.VideoGeneration
    });
    let w = checkVideoUploadMultiplePic.checkVideoUploadMultiplePic();
    let x = reactFunctionMemoHook.useMemoizedCallback((e, t) => {
      let {
        onAdded: r
      } = t;
      return new Promise(async t => {
        let p = (await fileTypeDetectionUtils.getFileExtensionFromBlob(e)) ?? "";
        let h = {
          upload_file_type: fileTypeDetectionUtils.getFileCategory(p),
          upload_collection_way: "single",
          upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_IMAGE_REFERENCE,
          upload_type: "pic"
        };
        let f = await imageCompressionUtils_1.compressor(e);
        if (f.size > imageCompressionUtils_1.getMaxSizeLimit()) {
          dbxSonnerToasterWrapper.dbxToastAPI.error(l("skill_image_intput_reference_alert_format"));
          return;
        }
        let m = new FileReader();
        m.readAsDataURL(f);
        m.onload = function (e) {
          let o = new Image();
          o.src = xssContentSanitizer.sanitizeUrl(e.target?.result, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkcxc2ExcFhPSFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$ucE1NMXB3$2tk$2RreFh%bmxh$jBZd1lW-z$k$Xh-$*05Wld*RjBZ$mMxZDJSW$$-WmhSemwyW$ROTmRX%kl%alJa$0$wd$p*aE5Q%T09"
          });
          o.onload = function () {
            let {
              width: e,
              height: i
            } = o;
            if (e <= 40 || i <= 40) {
              dbxSonnerToasterWrapper.dbxToastAPI.error(l("skill_image_intput_reference_alert_format"));
              teaAnalyticsEventTracker.trackEvent("upload_status", {
                ...h,
                status: "0",
                upload_from: "video_generation"
              });
              return;
            }
            function a() {
              var e;
              c({
                file: f,
                type: "image",
                disablePreprocess: true,
                ctx: {
                  conversationId: "",
                  chatType: "other_default",
                  skillType: (n == null ? undefined : n.skill_type) || 0,
                  skillId: (n == null ? undefined : (e = n.skill_type) === null || e === undefined ? undefined : e.toString()) || "",
                  botId: "",
                  from: "",
                  uploadCollectionWay: "single",
                  uploadId: "",
                  uploadWay: "browse_folder",
                  uploadFrom: "video_generation"
                }
              });
            }
            if (w) {
              a();
            } else {
              s({}).then(a);
            }
            if (r != null) {
              r();
            }
            t(null);
          };
        };
        m.onerror = () => {
          teaAnalyticsEventTracker.trackEvent("upload_status", {
            ...h,
            status: "0",
            upload_from: "video_generation"
          });
          t(null);
        };
      });
    });
    let C = async e => {
      let t = `${Date.now()}`;
      let n = b.length + e.length;
      let i = imageConfigConstants_1.maxItemCount - b.length;
      let r = () => {
        dbxSonnerToasterWrapper.dbxToastAPI.error(l("image_upload_toast_maxNum", {
          s_number: imageConfigConstants_1.maxItemCount
        }));
        teaAnalyticsEventTracker.trackEvent("upload_image_cnt_fail_toast", {
          upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_IMAGE_REFERENCE,
          upload_collection_id: t,
          upload_file_cnt: n
        });
      };
      for (let t of e) {
        if (i <= 0) {
          r();
          return;
        }
        await x(t, {
          onAdded: () => {
            i--;
          }
        });
      }
    };
    return {
      submitFiles: useLatestCallbackHook_1.useLatestCallback(C)
    };
  };
  require.d(exports, {
    useVideoFileUpload: function () {
      return w;
    },
    useVideoAttachment: function () {
      return y;
    }
  });
}