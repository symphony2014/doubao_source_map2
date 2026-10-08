// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'githubLinkHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 714583
         */
module.exports = function (module, exports, require) {
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var skillMessageTypes = require("skill-message-types") /*id: 824454*/;
  let l = e => {
    let {
      addGitHubLink: t,
      isNewThread: n,
      chatId: l,
      conversationId: s,
      skillType: d,
      skillId: c,
      getPreGeneratedLocalMessageId: u,
      clearRefContent: p,
      setUploadedFileType: h,
      trackExtraParams: m
    } = e;
    return {
      handleAddGithubLink: async (e, f) => {
        await t({
          url: e,
          ctx: {
            conversationId: n ? "" : l ?? "",
            chatType: (n ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", l)) || "other_default",
            skillType: d || 0,
            skillId: c || "",
            uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_PULL_CODE,
            botId: chatConversationBotId.getConversationBotId(s) || "",
            uploadWay: "add_link",
            from: "click",
            uploadCollectionWay: "single",
            uploadId: await u(),
            metaInfo: f,
            extraParams: {
              code_scene: (m == null ? undefined : m.code_scene) || "chat",
              upload_file_type: "github_link"
            }
          }
        });
        if (p != null) {
          p();
        }
        if (h != null) {
          h(skillMessageTypes.resourceTypes.REPO);
        }
      }
    };
  };
  require.d(exports, {
    githubLinkHandler: function () {
      return l;
    }
  });
}