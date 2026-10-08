// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'useDirectoryUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 954181
         */
module.exports = function (module, exports, require) {
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var skillMessageTypes = require("skill-message-types") /*id: 824454*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      addDirAttachment: t,
      isNewThread: n,
      chatId: h,
      skillType: m,
      skillId: f,
      getPreGeneratedLocalMessageId: _,
      clearRefContent: v,
      setUploadedFileType: g,
      trackExtraParams: b
    } = e;
    let y = i18nTranslationUtils.useTranslationWithFallback();
    let x = n ? "" : h ?? "";
    let C = {
      conversation_id: x,
      conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), x) || 1,
      chat_type: (n ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", h)) || "other_default",
      skill_name: m ? skillTypeMappings.getSkillName(m) : "",
      skill_id: f,
      upload_way: "browse_folder",
      upload_collection_way: "multi",
      upload_type: "folder",
      upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
      upload_file_type: skillConstantsEnum.UploadFileType.UPLOAD_FILE_TYPE_FOLDER,
      ...b
    };
    return {
      handleAddDir: async e => {
        if (e.target.files) {
          let a = Array.from(e.target.files);
          let o = [];
          let l = a[0].webkitRelativePath;
          let d = l == null ? undefined : l.split("/")[0];
          if (a.length > 2000) {
            samanthaToastFactory.defaultToast.error(y("cici_web_ai_coding_directory_limit"));
            teaAnalyticsEventTracker.trackEvent("upload_status", {
              ...C,
              collection_name: d,
              file_cnt: a.length,
              success: "false",
              error_code: "over_num"
            });
            return;
          }
          let x = function (e) {
            let t = 0;
            for (let n of e) {
              t = Math.max(t, n.webkitRelativePath.split("/").length);
            }
            return t;
          }(a);
          if (x > 15) {
            samanthaToastFactory.defaultToast.error(y("cici_web_ai_coding_directory_limit"));
            teaAnalyticsEventTracker.trackEvent("upload_status", {
              ...C,
              collection_name: d,
              folder_level: x,
              success: "false",
              error_code: "over_level"
            });
            return;
          }
          let w = a.reduce((e, t) => e + t.size, 0);
          if (w > 41943040) {
            samanthaToastFactory.defaultToast.error({
              content: reactJsxRuntimeCoreReexport.jsx("div", {
                className: "text-left",
                children: y("cici_web_ai_coding_folder_size_limit")
              })
            });
            teaAnalyticsEventTracker.trackEvent("upload_status", {
              ...C,
              collection_name: d,
              size: w,
              folder_size: w,
              success: "false",
              error_code: "over_size"
            });
            return;
          }
          a = a.filter(e => e.size !== 0 || (o.push(e), false));
          if (o.length > 0) {
            samanthaToastFactory.defaultToast.warning({
              content: reactJsxRuntimeCoreReexport.jsx("div", {
                className: "text-left",
                children: o.length === 1 ? y("cici_web_ai_coding_file_null_limit", {
                  postProcess: "sprintf",
                  sprintf: [o[0].name]
                }) : y("cici_web_ai_coding_file_null_limit_mutiple", {
                  postProcess: "sprintf",
                  sprintf: [o[0].name, o.length]
                })
              })
            });
          }
          if (a.length === 0) {
            teaAnalyticsEventTracker.trackEvent("upload_status", {
              ...C,
              collection_name: d,
              file_cnt: 0,
              success: "false",
              error_code: "empty_folder"
            });
            return;
          }
          await t({
            files: a,
            type: "directory",
            ctx: {
              conversationId: n ? "" : h ?? "",
              chatType: (n ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", h)) || "other_default",
              skillType: m,
              skillId: f,
              uploadId: await _(),
              uploadCollectionWay: "multi",
              uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
              file_cnt: a.length,
              folder_size: w,
              folder_level: x,
              extraParams: {
                code_scene: (b == null ? undefined : b.code_scene) || "chat",
                upload_file_type: "code_folder"
              }
            }
          });
          if (g != null) {
            g(skillMessageTypes.resourceTypes.DIR);
          }
          if (v != null) {
            v();
          }
        }
      }
    };
  };
  require.d(exports, {
    useDirectoryUpload: function () {
      return h;
    }
  });
}