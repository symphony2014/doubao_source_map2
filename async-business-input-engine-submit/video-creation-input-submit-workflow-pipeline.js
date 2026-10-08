// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'businessInputSubmit'
// - Resolved require(540748) to 'business-input-submit'
// - Renamed variable 'r' to 'videoSkillStore'
// - Resolved require(297271) to 'video-skill-store'
// - Renamed variable 'l' to 'asyncBusinessInputEngineSubmit'
// - Resolved require(129563) to 'async-business-input-engine-submit'
// - Renamed variable 'a' to 'creationSkillChatFlag'
// - Resolved require(734713) to 'creation-skill-chat-flag'
// - Renamed variable 'o' to 'aiSkillConstants'
// - Resolved require(670242) to 'ai-skill-constants'
// - Renamed variable 'u' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 's' to 'aiChatEnumConstants'
// - Resolved require(458113) to 'ai-chat-enum-constants'
// - Renamed variable 'c' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'd' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'p' to 'chatFieldTypes'
// - Resolved require(660462) to 'chat-field-types'
// - Renamed variable '_' to 'inputToolConverter'
// - Resolved require(352793) to 'input-tool-converter'
// - Renamed variable 'f' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'v' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'm' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'g' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Updated imported property 'Z6' to 'extractText' (module 352793)
// - Updated imported property 'f' to 'getFieldTypes' (module 660462)
// - Updated imported property 'l_' to 'createTextData' (module 411117)
// - Updated imported property 'YC' to 'getActionValue' (module 411117)
// - Updated imported property 'NS' to 'createVideoSkillStore' (module 297271)
// - Updated imported property 'wF' to 'getOptionValue' (module 540748)
// - Updated imported property 'Fd' to 'getRatioValue' (module 540748)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// - Updated imported property 'lx' to 'getSkillActionClass' (module 361602)
// - Updated imported property 'JB' to 'getFileCategory' (module 393072)
// - Updated imported property 'Ux' to 'UploadSource' (module 791429)
// - Updated imported property 'j' to 'isCreationSkillNext' (module 734713)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'p' to 'SkillActionTypes' (module 670242)
// - Updated imported property 'w' to 'prepareBusinessInput' (module 129563)
// - Updated imported property 'zo' to 'skillTypes' (module 458113)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 168602
         */
module.exports = function (module, exports, require) {
  var businessInputSubmit = require("business-input-submit") /*id: 540748*/;
  var videoSkillStore = require("video-skill-store") /*id: 297271*/;
  var asyncBusinessInputEngineSubmit = require("async-business-input-engine-submit") /*id: 129563*/;
  var creationSkillChatFlag = require("creation-skill-chat-flag") /*id: 734713*/;
  var aiSkillConstants = require("ai-skill-constants") /*id: 670242*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  let y = e => inputToolConverter.extractText(e.data, {
    stringifyItem: e => {
      if (e.type === chatFieldTypes.getFieldTypes.Select) {
        return `\u{300C}${e.value}\u{300D}`;
      }
    }
  });
  let h = {
    id: "biz-video:input-submit-workflow",
    submitNodes: [{
      id: "video-creation:input-skill-node",
      execute: e => {
        var i;
        let {
          editorValue: _ = chatInputStoreHelpers.createTextData()
        } = e.content;
        let {
          inputOptionsMap: h
        } = videoSkillStore.createVideoSkillStore().getState();
        let S = chatInputStoreHelpers.getActionValue("video-ratio");
        let k = businessInputSubmit.getOptionValue(businessInputSubmit.getRatioValue(_) ?? S, h.ratio);
        let T = y(_);
        let E = {
          skill_type: e.content.abilityType || chatAppEnums.SkillType.VideoGeneration
        };
        let b = e.content.attachmentStates?.[0];
        let R = getFileExtension.getFileExtension((b == null ? undefined : b.fileName) || "");
        let w = {
          ...e.content.reportParams,
          scene: "chat_action_bar",
          sec_scene: e.content.reportParams.sec_scene ? String(e.content.reportParams.sec_scene) : skillTypeMappings.getSkillActionClass(E.skill_type),
          use_skill: 1,
          is_upload_file: R ? "1" : "0",
          ratio: k,
          upload_file_type: R ? fileTypeDetectionUtils.getFileCategory(R) : undefined,
          upload_from: R ? skillConstantsEnum.UploadSource.UPLOAD_FROM_PLUS_BUTTON : undefined,
          upload_file_size: R ? b == null ? undefined : (i = b.size) === null || i === undefined ? undefined : i.toString() : undefined,
          upload_collection_way: R ? "single" : undefined
        };
        let P = creationSkillChatFlag.isCreationSkillNext();
        let I = i18nTranslationUtils.i18nextTranslate("skill_video_message_prefix");
        let N = P ? `${I}${T ? `\u{FF1A}` : ""}${T}` : T;
        let A = {
          ratio: k,
          camera_movement: T.includes("固定镜头") ? "fixed" : undefined
        };
        let x = {
          answer_with_suggest: "0"
        };
        if (P) {
          e.content.abilityParams = A;
          e.content.text = N;
          e.content.extra = {
            ...e.content.extra,
            ...x
          };
          e.content.reportParams = w;
        } else {
          let t = {
            ability_type: aiSkillConstants.SkillActionTypes.VIDEO_GENERATE,
            skillId: "",
            skillType: E == null ? undefined : E.skill_type,
            query: N,
            attachments: e.content.attachments,
            attachmentStates: e.content.attachmentStates,
            extraExt: x,
            chatId: e.content.chatId,
            abilityParams: A,
            reportParams: w
          };
          e.payload = [asyncBusinessInputEngineSubmit.prepareBusinessInput({
            ...t,
            blockSkillType: aiChatEnumConstants.skillTypes.SkillVideoGeneration
          })];
        }
        return Promise.resolve(e);
      }
    }],
    afterSubmitNodes: []
  };
  require.r(exports);
  require.d(exports, {
    InputSubmitPipeline: function () {
      return h;
    }
  });
}