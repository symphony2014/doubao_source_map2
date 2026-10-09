// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'safePropertyAssignUtil'
// - Resolved require(377863) to 'safe-property-assign-util'
// - Renamed variable 'r' to 'chatCoreConstants'
// - Resolved require(746101) to 'chat-core-constants'
// - Renamed variable 'l' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 'a' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'o' to 'chatMessageBuilders'
// - Resolved require(502721) to 'chat-message-builders'
// - Renamed variable 'u' to 'chatRefContentSelectors'
// - Resolved require(434690) to 'chat-ref-content-selectors'
// - Renamed variable 's' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'c' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'd' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'p' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Updated imported property 'L9' to 'getRefContentState' (module 434690)
// - Updated imported property 'iz' to 'MessageActions' (module 746101)
// - Updated imported property 'JB' to 'getFileCategory' (module 393072)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'tz' to 'createTextMessage' (module 502721)
// - Updated imported property 'm0' to 'processAttachments' (module 502721)
// - Updated imported property 'eg' to 'getPreGeneratedId' (module 502721)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'Ux' to 'UploadSource' (module 791429)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 459323
         */
module.exports = function (module, exports, require) {
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatMessageBuilders = require("chat-message-builders") /*id: 502721*/;
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  let _ = {
    id: "biz-super-task:input-submit-workflow",
    submitNodes: [{
      id: "biz-super-task:before-submit-node",
      execute: async e => {
        var v;
        var m;
        let {
          content: y
        } = e;
        let h = y.chatId;
        let S = y.localMessageId ?? "";
        let {
          attachments: k = [],
          attachmentKeys: T = [],
          attachmentStates: E = [],
          refContents: b
        } = y;
        let R = chatRefContentSelectors.getRefContentState(h);
        let w = chatCoreConstants.MessageActions.Original;
        let P = y.reportParams?.scene ?? (R == null ? undefined : R.scene) ?? "keyboard";
        let I = E.some(e => e.uploadWay === "screenshot");
        let N = {
          ...y.reportParams,
          scene: P,
          upload_collection_way: E.length ? E.length > 1 ? "multi" : "single" : undefined,
          upload_file_type: E.length ? fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(E[0].fileName)) : undefined,
          ...(R == null ? undefined : R.reportParams),
          is_long_file: 0,
          new_guidance: "1",
          _screen_shot: +!!I
        };
        let A = {
          input_skill: JSON.stringify({
            skill_id: chatAppEnums.SkillType.DesExtSkillSuperTask.toString(),
            skill_type: chatAppEnums.SkillType.DesExtSkillSuperTask
          })
        };
        if (k.length === 0) {
          if (y.text) {
            let t = {
              ...A
            };
            safePropertyAssignUtil.safePropertyAssign(t, {
              reference_content: JSON.stringify(b)
            });
            let i = b == null ? undefined : (v = b.filter(e => e.type === "attachment")) === null || v === undefined ? undefined : v.map(e => e.fileKey);
            let r = b == null ? undefined : (m = b.filter(e => e.type === "attachment")) === null || m === undefined ? undefined : m.map(e => e.fileName || "");
            let l = chatMessageBuilders.createTextMessage(y.text, {
              content_source: w,
              ...((i == null ? undefined : i.length) && (r == null ? undefined : r.length) ? {
                collection_id: (i == null ? undefined : i.length) === 1 ? i[0] : safeJsonUtils.safeStringify(i),
                collection_name: (r == null ? undefined : r.length) === 1 ? r[0] : safeJsonUtils.safeStringify(r)
              } : {}),
              ...N
            });
            e.payload = [{
              ...l,
              conversationId: h,
              extraExt: t
            }];
          }
        } else {
          let {
            enableImageVlm: t
          } = chatStoreManager.getStoreState("attachmentUploadStore").attachmentUploadConfig;
          let i = skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON;
          let n = chatMessageBuilders.processAttachments({
            text: y.text ?? "",
            attachments: k,
            attachmentKeys: T,
            attachmentStates: E,
            enableImageVlm: t
          }, {
            upload_from: i,
            ...N
          });
          if (n) {
            e.payload = [{
              ...n,
              conversationId: h,
              preGeneratedLocalMessageId: S,
              extraExt: {
                ...(await chatMessageBuilders.getPreGeneratedId(S)),
                ...A
              }
            }];
          } else if (y.text) {
            e.payload = [{
              ...chatMessageBuilders.createTextMessage(y.text, {
                content_source: w,
                ...N
              }),
              conversationId: h,
              extraExt: {
                ...A
              }
            }];
          }
        }
        return Promise.resolve(e);
      }
    }],
    afterSubmitNodes: []
  };
  require.r(exports);
  require.d(exports, {
    InputSubmitPipeline: function () {
      return _;
    }
  });
}