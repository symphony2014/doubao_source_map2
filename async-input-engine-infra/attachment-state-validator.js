// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'useAttachValidator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-input-attachment-area.08bd2afd.js
         * chunkId: 17478
         * moduleId: 151792
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var receiveMessageBoxStatus = require("receive-message-box-status") /*id: 682494*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var doubaoConfigConstants_1 = require("doubao-config-constants_1") /*id: 234080*/;
  function d(e) {
    let {
      attachmentStates: t,
      trackParams: i,
      scene: d,
      submitIgnoreUploadStatus: p = false
    } = e;
    let g = i18nTranslationUtils.useTranslationWithFallback();
    let f = chatFgStoreHooks.getSourceValue("ai_reader.max_char_count", {
      source: chatStorageKeys.chatStorageKeys.setting
    }) || 100000;
    reactCoreLibraryReexport.useEffect(() => {
      if (t.length === 0 || t.some(e => {
        let {
          status: t
        } = e;
        return [receiveMessageBoxStatus.messageBoxStatus.Retry, receiveMessageBoxStatus.messageBoxStatus.Uploading].includes(t);
      }) || t.filter(h).some(e => {
        let {
          parseState: t = messagingConstants.parseState.ParseState_Default
        } = e;
        return [messagingConstants.parseState.ParseState_Failed, messagingConstants.parseState.ParseState_Default, messagingConstants.parseState.ParseState_Processing].includes(t);
      })) {
        return;
      }
      let e = t.reduce((e, t) => {
        return e + (t.parsedCharCount ?? 0);
      }, 0);
      let n = e > f;
      if (d === "attachmentArea") {
        teaAnalyticsEventTracker.trackEvent("upload_parse", {
          all_token_length: e,
          single_file_token_length: t.map(e => {
            let {
              parsedCharCount: t
            } = e;
            return t || 0;
          }).join(","),
          is_long_file: +!!n,
          file_cnt: t.length,
          success_cnt: t.length,
          ...i
        });
      }
    }, [t, f]);
    return reactCoreLibraryReexport.useMemo(() => {
      if (t.length === 0 || p) {
        return {
          success: true
        };
      }
      if (t.some(e => e.status === receiveMessageBoxStatus.messageBoxStatus.Retry)) {
        return {
          success: false,
          tips: g("file_upload_failed")
        };
      }
      if (t.some(e => e.status === receiveMessageBoxStatus.messageBoxStatus.Uploading)) {
        return {
          success: false,
          tips: g("file_uploading_cant_sent")
        };
      }
      if (t.filter(h).some(e => e.parseState === messagingConstants.parseState.ParseState_Failed)) {
        return {
          success: false,
          tips: g("multi_files_parse_failed")
        };
      }
      if (t.filter(h).some(e => {
        let {
          parseState: t = messagingConstants.parseState.ParseState_Default
        } = e;
        return [messagingConstants.parseState.ParseState_Default, messagingConstants.parseState.ParseState_Processing].includes(t);
      })) {
        return {
          success: false,
          tips: g("skill_read_parsing")
        };
      }
      let e = t.reduce((e, t) => {
        return e + (t.parsedCharCount ?? 0);
      }, 0);
      let i = t.length === 1;
      let n = e > f;
      let o = n ? (f / e * 100).toFixed(1) : "100";
      if (i) {
        return {
          success: true,
          tips: n ? g("single_file_exceed_limit", {
            postProcess: "sprintf",
            sprintf: [doubaoConfigConstants_1.productNameChinese, `${o}%`]
          }) : undefined
        };
      } else {
        return {
          success: !n,
          tips: n ? g("multi_files_exceed_limit_alert", {
            postProcess: "sprintf",
            sprintf: [doubaoConfigConstants_1.productNameChinese, `${o}%`]
          }) : undefined
        };
      }
    }, [t, g, f, p]);
  }
  function h(e) {
    return e.type === "file" || e.type === "directory" || e.isRepo;
  }
  require.d(exports, {
    useAttachValidator: function () {
      return d;
    }
  });
}