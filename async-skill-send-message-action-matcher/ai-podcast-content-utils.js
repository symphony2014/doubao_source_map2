// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T5' to 'isAiPodcastContent'
// - Renamed export 'rP' to 'getPodcastWaiting'
// - Renamed export 'wG' to 'isPodcastValidProto'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 942305
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var messageSendTypes = require("message-send-types") /*id: 37070*/;
  var jsonSafeUtils_1 = require("json-safe-utils_1") /*id: 176900*/;
  let s = e => {
    return (e == null ? undefined : e.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaAiPodcastOutput || (e == null ? undefined : e.content_type) === chatMessageTypes.ContentType.Widget && e.content_obj?.applet_id === contentTypeEnums.contentTypeAuth.Podcast && e.content_obj?.widget_id === contentTypeEnums.widgetType.AIPodcast;
  };
  let c = e => {
    if (!s(e)) {
      return;
    }
    let t = e == null ? undefined : e.content_obj;
    let n = jsonSafeUtils_1.jsonUtils.parse(t == null ? undefined : t.widget_data);
    return jsonSafeUtils_1.jsonUtils.parse(n == null ? undefined : n.data);
  };
  let d = e => {
    var n;
    let r = e == null ? undefined : (n = e.episodeList) === null || n === undefined ? undefined : n.episodes?.[0];
    return (r == null ? undefined : r.meta?.protocol) === messageSendTypes.MessageSendTypes.Normal;
  };
  let u = e => d(c(e));
  let p = e => {
    let t = c(e);
    if (d(t)) {
      if (t == null) {
        return undefined;
      } else {
        return t.waiting_reply;
      }
    } else {
      return undefined;
    }
  };
  require.d(exports, {
    isAiPodcastContent: function () {
      return s;
    },
    getPodcastWaiting: function () {
      return p;
    },
    isPodcastValidProto: function () {
      return u;
    }
  });
}