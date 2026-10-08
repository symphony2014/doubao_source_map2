// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$8' to 'useLikeFeedback'
// - Renamed export 'Cr' to 'useReportOptions'
// - Renamed export 'SC' to 'useUnlikeFeedback'
// - Renamed export 'XO' to 'useImageFeedback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 952134
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let s = e => {
    var t;
    return (e == null ? undefined : (t = e.filter(e => Number.isInteger(e.id))) === null || t === undefined ? undefined : t.map(e => ({
      text: e.display_content || "",
      value: e.id || 0
    }))) ?? [];
  };
  let d = () => chatStoreManager.useStoreSelector("launcherRawSettingStore", e => {
    var t;
    var n;
    let {
      launchData: i
    } = e;
    return {
      unlikeFeedbackMeta: (t = (i == null ? undefined : i.feedback_meta) || []) === null || t === undefined ? undefined : t.filter(e => e.feedback_type === messagingConstants.feedbackType.Unlike),
      likeFeedbackMeta: (n = (i == null ? undefined : i.feedback_meta) || []) === null || n === undefined ? undefined : n.filter(e => e.feedback_type === messagingConstants.feedbackType.Like),
      feedbackPlaceholder: (i == null ? undefined : i.feedback_placeholder) || "",
      botReportMeta: (i == null ? undefined : i.bot_report_reason_list) || [],
      messageReportMeta: (i == null ? undefined : i.message_report_reason_list) || []
    };
  }, deepEqualityUtil.deepEqual);
  let c = () => {
    let {
      unlikeFeedbackMeta: e,
      feedbackPlaceholder: t
    } = d();
    return {
      presetOptions: e.filter(e => Number.isInteger(e.feedback_detail_type)).map(e => ({
        text: e.feedback_display || "",
        value: e.feedback_detail_type || 0
      })),
      placeholder: t
    };
  };
  let u = () => {
    let {
      likeFeedbackMeta: e,
      feedbackPlaceholder: t
    } = d();
    return {
      presetOptions: e.filter(e => Number.isInteger(e.feedback_detail_type)).map(e => ({
        text: e.feedback_display || "",
        value: e.feedback_detail_type || 0
      })),
      placeholder: t
    };
  };
  let v = () => {
    let {
      botReportMeta: e,
      messageReportMeta: t
    } = d();
    let n = s(e);
    let r = s(t);
    let [o, a] = reactCoreLibraryReexport.useState({
      botPresetOptions: n,
      messagePresetOptions: r
    });
    return {
      ...o,
      reloadPresetOptions: () => {
        apiServicesCollection.SettingApiService.Launch().then(e => {
          let {
            data: t
          } = e;
          a({
            messagePresetOptions: s(t == null ? undefined : t.message_report_reason_list),
            botPresetOptions: s(t == null ? undefined : t.bot_report_reason_list)
          });
        });
      }
    };
  };
  let p = () => chatStoreManager.useStoreSelector("launcherRawSettingStore", e => {
    var t;
    var n;
    var i;
    var r;
    let {
      settingData: l
    } = e;
    return {
      imageLikeOptions: ((l == null ? undefined : (n = l.feedback) === null || n === undefined ? undefined : (t = n.image) === null || t === undefined ? undefined : t.filter(e => e.feedback_type === 1)) ?? []).map(e => {
        return {
          title: e.feedback_display ?? "",
          key: e.feedback_detail_type ?? 0,
          showInputWhenSelected: e.feedback_detail_type === 254
        };
      }),
      imageUnlikeOptions: ((l == null ? undefined : (r = l.feedback) === null || r === undefined ? undefined : (i = r.image) === null || i === undefined ? undefined : i.filter(e => e.feedback_type === 2)) ?? []).map(e => {
        return {
          title: e.feedback_display ?? "",
          key: e.feedback_detail_type ?? 0,
          showInputWhenSelected: e.feedback_detail_type === 204
        };
      })
    };
  }, deepEqualityUtil.deepEqual);
  require.d(exports, {
    useLikeFeedback: function () {
      return u;
    },
    useReportOptions: function () {
      return v;
    },
    useUnlikeFeedback: function () {
      return c;
    },
    useImageFeedback: function () {
      return p;
    }
  });
}