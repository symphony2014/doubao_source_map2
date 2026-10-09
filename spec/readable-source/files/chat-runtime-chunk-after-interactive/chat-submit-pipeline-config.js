// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'r' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(79175) to 'samantha-message-utils'
// - Resolved require.e(55100) to 'chat-session-lifecycle'
// - Resolved require.e(30286) to 'konva-external-dependencies'
// - Resolved require.e(2177) to 'conversation-management'
// - Resolved require.e(1543) to 'webpack-bundle-runtime-chunks'
// - Resolved require.e(47840) to 'chat-app-main'
// - Resolved require.bind(831889) to 'chat-message-utils-index'
// - Renamed variable 'l' to 'uuidGeneratorUtil'
// - Resolved require(641535) to 'uuid-generator-util'
// - Renamed variable 'a' to 'conversationMessageUtils'
// - Resolved require(45244) to 'conversation-message-utils'
// - Renamed variable 'c' to 'chatTextBlockFactory'
// - Resolved require(351389) to 'chat-text-block-factory'
// - Renamed variable 'u' to 'referenceBlockTransformer'
// - Resolved require(642515) to 'reference-block-transformer'
// - Renamed variable 'd' to 'attachmentToMessageBlockTransformer'
// - Resolved require(324654) to 'attachment-to-message-block-transformer'
// - Renamed variable '_' to 'securityVerifySdkLoader'
// - Resolved require(279207) to 'security-verify-sdk-loader'
// - Renamed variable 'h' to 'chatRefContentSelectors'
// - Resolved require(434690) to 'chat-ref-content-selectors'
// - Renamed variable 'm' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'g' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'b' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'S' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 'k' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 'E' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 'C' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'x' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'R' to 'asyncSkillChatInput_1_1'
// - Resolved require(222126) to 'async-skill-chat-input_1_1'
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'S' to 'transformAttachmentsToMessageBlock' (module 324654)
// - Updated imported property 'Q' to 'transformReferences' (module 642515)
// - Updated imported property 'f' to 'createTextBlock' (module 351389)
// - Updated imported property 'Gq' to 'assembleContentBlocks' (module 45244)
// - Updated imported property 'cW' to 'createMessageObject' (module 45244)
// - Updated imported property 'i1' to 'parseConversationId' (module 45244)
// - Updated imported property 'yn' to 'serializeAbilityData' (module 45244)
// - Updated imported property 'Z' to 'generateUuid' (module 641535)
// - Updated imported property 'g' to 'getFingerprint' (module 279207)
// - Updated imported property 'Qx' to 'getEnabledRefs' (module 434690)
// - Updated imported property 'L9' to 'getRefContentState' (module 434690)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'Qk' to 'getExtractedText' (module 411117)
// - Updated imported property 'Fd' to 'getEditorValue' (module 411117)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'Pn' to 'getSourceKeySync' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'Dc' to 'getAttachments' (module 793484)
// - Updated imported property 'rp' to 'processUploadAttachment' (module 793484)
// - Updated imported property 'Ep' to 'mapAttachmentKeys' (module 793484)
// - Updated imported property 'JB' to 'getFileCategory' (module 393072)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// - Updated imported property 'u' to 'asyncSkillManager' (module 222126)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 815955
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let o = {
    id: "infra:send-message-node",
    execute: async e => {
      var n;
      var o;
      let {
        message: s,
        content: l
      } = e;
      let a = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
      if (!s) {
        return e;
      }
      let c = a == null ? undefined : a.sendMessage({
        message: s,
        session: {
          reportParams: l.reportParams
        }
      });
      if (!l.reportParams?.scene) {
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "pipeline_send_message_no_scene",
          meta: {
            block_type: (o = s.content_blocks_v2) === null || o === undefined ? undefined : (n = o.map(e => e.block_id)) === null || n === undefined ? undefined : n.join(",")
          }
        });
      }
      e.result = c;
      return e;
    }
  };
  let s = {
    id: "infra:send-chat-nova-message-node",
    execute: async e => {
      let {
        payload: t
      } = e;
      if (t) {
        (await Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("konva-external-dependencies") /*id: 30286*/, require.e("conversation-management") /*id: 2177*/, require.e("webpack-bundle-runtime-chunks") /*id: 1543*/, require.e("chat-app-main") /*id: 47840*/]).then(require.bind(require, "chat-message-utils-index") /*id: 831889*/).then(e => e.sendSupportedMessage))(t);
      }
      return e;
    }
  };
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var referenceBlockTransformer = require("reference-block-transformer") /*id: 642515*/;
  var attachmentToMessageBlockTransformer = require("attachment-to-message-block-transformer") /*id: 324654*/;
  let p = {
    id: "infra:generate-message-node",
    execute: e => {
      if (e.payload) {
        return Promise.resolve(e);
      }
      let {
        content: v
      } = e;
      let h = attachmentToMessageBlockTransformer.transformAttachmentsToMessageBlock({
        attachments: v.attachments ?? [],
        attachmentKeys: v.attachmentKeys ?? [],
        attachmentStates: v.attachmentStates ?? []
      });
      let m = referenceBlockTransformer.transformReferences(v.refContents ?? []);
      let f = chatTextBlockFactory.createTextBlock(v.text ?? "");
      let g = conversationMessageUtils.assembleContentBlocks({
        attachmentBlock: h,
        textBlock: f,
        referenceBlocks: m
      }, {
        excludeReferenceOnAttachment: false
      });
      let y = v.extra ?? {};
      let b = y.answer_with_suggest;
      let S = conversationMessageUtils.createMessageObject({
        conversation: conversationMessageUtils.parseConversationId(v.chatId ?? ""),
        message: {
          content_blocks_v2: g,
          unique_id: v.localMessageId ?? uuidGeneratorUtil.generateUuid(),
          ext: {
            ...y,
            ...(b !== undefined ? {
              answer_with_suggest: b
            } : {}),
            chat_ability: conversationMessageUtils.serializeAbilityData(v.abilityType, JSON.stringify(v.abilityParams)),
            use_submit_pipeline: "1"
          }
        }
      });
      e.message = S;
      return Promise.resolve(e);
    }
  };
  var securityVerifySdkLoader = require("security-verify-sdk-loader") /*id: 279207*/;
  let v = {
    id: "infra:ext-fp",
    execute: async e => {
      let t = await securityVerifySdkLoader.getFingerprint();
      e.content.extra = {
        ...e.content.extra,
        fp: t
      };
      return e;
    }
  };
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let f = {
    id: "infra:ref-content-node",
    execute: e => {
      var n;
      var i;
      if (!e.content.chatId || e.content.attachments?.length) {
        return Promise.resolve(e);
      }
      let o = chatRefContentSelectors.getEnabledRefs(e.content.chatId);
      e.content.refContents = o;
      let s = chatRefContentSelectors.getRefContentState(e.content.chatId);
      e.content.refContentInputSkill = s == null ? undefined : s.inputSkill;
      let l = o == null ? undefined : (n = o.filter(e => e.type === "attachment")) === null || n === undefined ? undefined : n.map(e => e.fileKey);
      let a = o == null ? undefined : (i = o.filter(e => e.type === "attachment")) === null || i === undefined ? undefined : i.map(e => e.fileName || "");
      e.content.reportParams = {
        ...e.content.reportParams,
        scene: e.content.reportParams?.scene || (s == null ? undefined : s.scene),
        ...(s == null ? undefined : s.reportParams),
        ...((l == null ? undefined : l.length) > 0 && (a == null ? undefined : a.length) > 0 ? {
          collection_id: (l == null ? undefined : l.length) === 1 ? l[0] : safeJsonUtils.safeStringify(l),
          collection_name: (a == null ? undefined : a.length) === 1 ? a[0] : safeJsonUtils.safeStringify(a)
        } : {})
      };
      return Promise.resolve(e);
    }
  };
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  let y = {
    id: "infra:prompt-node",
    execute: e => {
      e.content.text = (chatInputStoreHelpers.getExtractedText() || "").trim();
      e.content.editorValue = chatInputStoreHelpers.getEditorValue();
      return Promise.resolve(e);
    }
  };
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let T = (e, t) => {
    if (!(t == null ? undefined : t.length) || t.every(e => e.type === "image")) {
      return;
    }
    let n = t.map(e => {
      switch (e.type) {
        case "file":
          return {
            type: "attachment",
            fileName: (e == null ? undefined : e.fileName) || "File",
            fileKey: (e == null ? undefined : e.fileKey) || ""
          };
        case "image":
          return {
            type: "attachment",
            fileName: "Image",
            fileKey: (e == null ? undefined : e.fileKey) || ""
          };
        case "link":
          return {
            type: "link",
            link: e.url || ""
          };
        default:
          return;
      }
    }).filter(Boolean);
    if (n.length) {
      let t = chatStoreManager.getStoreState("chatInputStore").activeSkillTypeMap[e];
      chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(i => {
        if (i != null) {
          i.setRefContents({
            refContents: n,
            channel: t ? `skill_${t}` : "default"
          }, e);
        }
      });
    }
  };
  let w = {
    id: "infra:auto-set-ref-node",
    execute: e => {
      let t = chatFgStoreHooks.getSourceKeySync("auto_set_ref_node", {
        source: chatStorageKeys.chatStorageKeys.serverAB,
        defaultValue: "1"
      }) === "0";
      let {
        attachmentStates: n,
        chatId: r
      } = e.content;
      if (t) {
        chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
          if (e != null) {
            e.clearRefContents(r);
          }
        });
      } else if (n == null ? undefined : n.length) {
        T(r, n);
      }
      return Promise.resolve(e);
    }
  };
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  let I = {
    id: "infra:attachment-node",
    execute: e => {
      let {
        chatId: t,
        abilityType: n
      } = e.content;
      if (!t) {
        return Promise.resolve(e);
      }
      let i = attachmentUploadStoreHooks.getAttachments({
        chatId: t,
        skillType: n ?? "default"
      });
      e.content.attachments = i;
      let r = attachmentUploadStoreHooks.processUploadAttachment({
        chatId: t,
        skillType: n ?? "default"
      });
      e.content.attachmentStates = r;
      let o = attachmentUploadStoreHooks.mapAttachmentKeys({
        chatId: t,
        skillType: n ?? "default"
      });
      e.content.attachmentKeys = o;
      let s = (r ?? []).some(e => e.uploadWay === "screenshot");
      e.content.reportParams = {
        ...e.content.reportParams,
        is_from_screen_shot: +!!s,
        upload_collection_way: (r == null ? undefined : r.length) ? r.length > 1 ? "multi" : "single" : undefined,
        upload_file_type: (r == null ? undefined : r.length) > 0 ? fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(r[0].fileName)) : undefined
      };
      return Promise.resolve(e);
    }
  };
  var asyncSkillChatInput_1_1 = require("async-skill-chat-input_1_1") /*id: 222126*/;
  let P = () => {
    asyncSkillChatInput_1_1.asyncSkillManager.setPresetNodes({
      preSubmitNodes: [],
      prependSubmitNodes: [y, I, f],
      appendSubmitNodes: [v, p, s, o],
      afterSubmitNodes: [w]
    });
  };
  require.r(exports);
  require.d(exports, {
    configSubmitPipeline: function () {
      return P;
    }
  });
}