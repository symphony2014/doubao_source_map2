// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'deepThinkingModeHandler'
// - Resolved require(349989) to 'deep-thinking-mode-handler'
// - Renamed variable 'r' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'l' to 'contentTypeEnums'
// - Resolved require(153202) to 'content-type-enums'
// - Renamed variable 'a' to 'chatInputAiFeatureConstants'
// - Resolved require(155267) to 'chat-input-ai-feature-constants'
// - Renamed variable 'o' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 'u' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 's' to 'messageBoxTypeCheckers'
// - Resolved require(117360) to 'message-box-type-checkers'
// - Renamed variable 'c' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'd' to 'businessInputSubmitProcessor'
// - Resolved require(897086) to 'business-input-submit-processor'
// - Renamed variable 'f' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'v' to 'attachmentUploadParamsBuilder'
// - Resolved require(952830) to 'attachment-upload-params-builder'
// - Updated imported property 'U3' to 'resourceType' (module 153202)
// - Updated imported property 'bQ' to 'mediaType' (module 153202)
// - Updated imported property 'Or' to 'isImageType' (module 117360)
// - Updated imported property 'u$' to 'isLinkType' (module 117360)
// - Updated imported property '$' to 'processSubmitData' (module 897086)
// - Updated imported property 'J' to 'deepThinkingHandler' (module 349989)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'vQ' to 'featureActionNameMap' (module 155267)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'Ux' to 'UploadSource' (module 791429)
// - Updated imported property 'h' to 'buildUploadParams' (module 952830)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 123299
         */
module.exports = function (module, exports, require) {
  var deepThinkingModeHandler = require("deep-thinking-mode-handler") /*id: 349989*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var chatInputAiFeatureConstants = require("chat-input-ai-feature-constants") /*id: 155267*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var businessInputSubmitProcessor = require("business-input-submit-processor") /*id: 897086*/;
  let p = e => {
    let {
      attachments: t,
      attachmentStates: i,
      enableImageVlm: n
    } = e;
    return t.map(e => {
      if (e.type === "link" || e.type === "remote") {
        return;
      }
      let t = i.find(t => t.localKey === e.localKey);
      if (!t) {
        return;
      }
      let r = {
        type: contentTypeEnums.resourceType.File,
        fileKey: t.fileKey,
        fileName: t.fileName,
        size: t.size,
        identifier: t.localKey,
        parseState: t.parseState,
        reviewState: t.reviewState,
        md5: t.md5
      };
      if (messageBoxTypeCheckers.isImageType(e)) {
        return {
          ...r,
          type: n ? contentTypeEnums.resourceType.Image : contentTypeEnums.resourceType.File,
          fileType: contentTypeEnums.mediaType.OCRImage,
          image: {
            key: t.fileKey,
            image_ori: {
              width: t.imageWidth,
              height: t.imageHeight
            }
          }
        };
      } else {
        return {
          ...r,
          fileType: contentTypeEnums.mediaType.File
        };
      }
    }).filter(Boolean);
  };
  let _ = e => {
    let {
      payload: t,
      skillId: i,
      skillType: n,
      presetPrompt: r,
      presetPromptType: l,
      uploadFrom: a,
      trackParams: o,
      refContents: u
    } = e;
    return businessInputSubmitProcessor.processSubmitData({
      payload: t,
      skillId: i,
      skillType: n,
      presetPrompt: r,
      presetPromptType: l,
      uploadFrom: a,
      from: "",
      trackParams: o,
      refContents: u
    });
  };
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var attachmentUploadParamsBuilder = require("attachment-upload-params-builder") /*id: 952830*/;
  let m = {
    id: "biz-podcast:input-submit-workflow",
    submitNodes: [deepThinkingModeHandler.deepThinkingHandler, {
      id: "podcast:input-skill-node",
      execute: e => {
        var i;
        let {
          attachments: l = [],
          attachmentStates: d = [],
          text: f = "",
          presetPrompt: v,
          localMessageId: m,
          reportParams: g,
          refContents: y
        } = e.content;
        if (isEmptyUtil.isEmpty(l) && !f) {
          return Promise.resolve(e);
        }
        let h = e.content.abilityType ?? chatAppEnums.SkillType.SkillAiPodcast;
        let S = String(h);
        let k = v ? chatInputAiFeatureConstants.featureActionNameMap[v] || f : undefined;
        let T = (i = chatStoreManager.getStoreState("attachmentUploadStore")) === null || i === undefined ? undefined : i.attachmentUploadConfig?.enableImageVlm;
        if (!isEmptyUtil.isEmpty(l)) {
          if (l.length === 1 && messageBoxTypeCheckers.isLinkType(l[0])) {
            let t = l[0];
            e.payload = _({
              payload: {
                compositeContent: {
                  text: f,
                  links: [t.url]
                },
                preGeneratedLocalMessageId: m
              },
              skillId: S,
              skillType: h,
              presetPrompt: v,
              presetPromptType: k,
              uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_READ_SUMMARIZE_MODULE,
              trackParams: g,
              refContents: y
            });
            return Promise.resolve(e);
          }
          let t = p({
            attachments: l,
            attachmentStates: d,
            enableImageVlm: T
          });
          if (t.length) {
            e.payload = _({
              payload: {
                text: f,
                nestedItems: t,
                preGeneratedLocalMessageId: m
              },
              skillId: S,
              skillType: h,
              presetPrompt: v,
              presetPromptType: k,
              uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_READ_SUMMARIZE_MODULE,
              trackParams: g,
              refContents: y
            });
          }
          return Promise.resolve(e);
        }
        e.payload = _({
          payload: {
            text: f,
            preGeneratedLocalMessageId: m
          },
          skillId: S,
          skillType: h,
          presetPrompt: v,
          presetPromptType: k,
          trackParams: g,
          refContents: y
        });
        return Promise.resolve(e);
      }
    }],
    afterSubmitNodes: [{
      id: "biz-podcast:after-submit-track",
      execute: e => {
        if (e.payload) {
          teaAnalyticsEventTracker.trackEvent("skill_module_click_arrow", {
            ...e.content.reportParams,
            ...attachmentUploadParamsBuilder.buildUploadParams({
              attachmentStates: e.content.attachmentStates || []
            })
          });
        }
        return Promise.resolve(e);
      }
    }]
  };
  require.r(exports);
  require.d(exports, {
    InputSubmitPipeline: function () {
      return m;
    }
  });
}