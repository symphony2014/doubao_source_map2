// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'transformMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 319937
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var isCocoConversationChecker = require("is-coco-conversation-checker") /*id: 714933*/;
  let c = e => {
    return (e == null ? undefined : e.ext?.is_finish) === "1";
  };
  var isEducationSkillChecker = require("is-education-skill-checker") /*id: 965929*/;
  var checkAiPptSkill = require("check-ai-ppt-skill") /*id: 897198*/;
  var aiSkillTypeFormatter = require("ai-skill-type-formatter") /*id: 955849*/;
  var parseReferenceContentArray = require("parse-reference-content-array") /*id: 510762*/;
  var chatImageDataMapper = require("chat-image-data-mapper") /*id: 834558*/;
  let p = e => {
    let t = objectPathGetDefault.getObjectPathDefault(e, ["has_err"]);
    if (t) {
      return {
        error_details: {
          has_error: true,
          error_code: Number(t),
          error_message: "Server Error",
          locale: ""
        }
      };
    } else {
      return {};
    }
  };
  var contentBlockTreeBuilder = require("content-block-tree-builder") /*id: 341743*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let x = e => e.type ? {
    type: e.type,
    data: safeJsonUtils.safeParse(e.info, {})
  } : null;
  let T = e => e.map(x).filter(e => !!e);
  let k = e => e.type === chatMessageTypes.MetaType.Think;
  let R = e => {
    if (!e || e.length === 0) {
      return {
        text: "",
        position: 0,
        is_finish: true,
        is_hide: false,
        title: ""
      };
    }
    let i = (e ? T(e) : []).filter(k);
    return {
      ...((i == null ? undefined : i[0]?.data) ?? {})
    };
  };
  var arrayUniqBy = require("array-uniq-by") /*id: 342321*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  var checkImageContentType = require("check-image-content-type") /*id: 490356*/;
  var checkFileContentType = require("check-file-content-type") /*id: 934971*/;
  var chatContentTransformer = require("chat-content-transformer") /*id: 590923*/;
  var imageDataTransformer = require("image-data-transformer") /*id: 122135*/;
  var extractSamanthaRefImages = require("extract-samantha-ref-images") /*id: 203149*/;
  var chatImageListMapper = require("chat-image-list-mapper") /*id: 58874*/;
  var chatAttachmentFormatter = require("chat-attachment-formatter") /*id: 220315*/;
  var chatLinkMapper = require("chat-link-mapper") /*id: 744290*/;
  let j = async (e, t) => {
    var x;
    var F;
    let Z = {
      ...e,
      local_info: t == null ? undefined : t.local_info,
      content_obj: safeJsonUtils.safeParse(e.content, undefined)
    };
    let z = objectPathGetDefault.getObjectPathDefault(e, ["ext", "has_err"]) ? "Error" : c(e) ? "Success" : undefined;
    safePropertyAssignUtil.safePropertyAssign(Z, {
      conversation_type: (t == null ? undefined : t.conversation_type) || chatConversationSelectorUtils.getConversationType(e.conversation_id) || chatConversationSelectorUtils.getConversationType(e.local_conversation_id, true),
      bot_id: e.bot_id || chatConversationBotId.getConversationBotId(e.conversation_id) || chatConversationBotId.getConversationBotId(e.local_conversation_id, true),
      is_finish: !!c(e),
      is_regen: objectPathGetDefault.getObjectPathDefault(e, ["ext", "regen"]) === "1",
      regen_active: objectPathGetDefault.getObjectPathDefault(e, ["ext", "regen_active"]) === "1",
      has_suggest: objectPathGetDefault.getObjectPathDefault(e, ["ext", "has_suggest"]) === "1",
      ...p(e.ext),
      ...aiSkillTypeFormatter.formatSkillType(e.ext),
      security_archive_state: objectPathGetDefault.getObjectPathDefault(e, ["ext", "archive_state"]),
      stream_id: Number(objectPathGetDefault.getObjectPathDefault(e, ["ext", "crowd_test_msg_index"]) ?? "0"),
      ext: e.ext,
      verbose: {
        seed_intention: {
          detail: objectPathGetDefault.getObjectPathDefault(e, ["ext", "llm_intention_detail"]) || "",
          intention: objectPathGetDefault.getObjectPathDefault(e, ["ext", "llm_intention"]) || "",
          is_deep_think: objectPathGetDefault.getObjectPathDefault(e, ["ext", "is_deep_think"]) || "",
          seed_agent_name: objectPathGetDefault.getObjectPathDefault(e, ["ext", "seed_agent_name"]) || "",
          intention_detail_dict: objectPathGetDefault.getObjectPathDefault(e, ["ext", "intention_detail_dict"]) || "",
          query_difficulty: objectPathGetDefault.getObjectPathDefault(e, ["ext", "query_difficulty"]) || ""
        },
        deep_research: {
          deep_research_id: objectPathGetDefault.getObjectPathDefault(e, ["ext", "deep_research_id"]),
          deep_research_stage: Number(objectPathGetDefault.getObjectPathDefault(e, ["ext", "deep_research_stage"]) ?? "0")
        },
        super_task: {
          supertask_id: objectPathGetDefault.getObjectPathDefault(e, ["ext", "supertask_id"]),
          supertask_stage: Number(objectPathGetDefault.getObjectPathDefault(e, ["ext", "supertask_stage"]) ?? "0"),
          supertask_task_type: objectPathGetDefault.getObjectPathDefault(e, ["ext", "supertask_task_type"])
        },
        extra: {
          risk_tips: objectPathGetDefault.getObjectPathDefault(e, ["ext", "risk_tips"]) || objectPathGetDefault.getObjectPathDefault(e, ["ext", "extra", "risk_tips"])
        }
      },
      final_status: {
        message: z,
        session: z
      }
    });
    let H = Z.ext?.chat_next === "1";
    let $ = (x = e.content_block) === null || x === undefined ? undefined : x.filter(e => e.block_type !== aiAssistantSkillTypes.SamanthaTypes.SamanthaSuggest);
    if ($) {
      let e = H ? $ == null ? undefined : $.map(e => {
        if (typeof e.content_v2 == "string") {
          let t = safeJsonUtils.safeParse(e.content_v2, undefined);
          if (t) {
            return {
              ...e,
              content: t,
              parent_id: e.parent_block_id,
              is_finish: true
            };
          } else {
            return undefined;
          }
        }
        return e;
      }).filter(e => e !== undefined) : undefined;
      if ((e == null ? undefined : e.length) === $.length) {
        Z.content_blocks_v2 = e;
      }
      let t = $.map(e => ({
        is_delta: false,
        is_finish: true,
        block_type: e.block_type,
        id: e.block_id || "",
        parent_id: e.parent_block_id || objectPathGetDefault.getObjectPathDefault(e, "parent_id") || "0",
        content_obj: typeof e.content == "object" ? Object.values(e.content).find(e => e != null) : typeof e.content == "string" ? safeJsonUtils.safeParse(e.content, undefined) : undefined,
        meta_infos: (e == null ? undefined : e.meta_infos) || objectPathGetDefault.getObjectPathDefault(e, "meta_info") || [],
        is_deleted: false
      }));
      Z.content_blocks = t;
      let {
        contentBlocksTree: n,
        contentBlockNodes: r
      } = contentBlockTreeBuilder.buildContentBlockTree(t);
      Z.content_blocks_tree = n;
      Z.content_block_nodes = r;
    }
    if (e.ext?.async_task) {
      let t = safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(e, ["ext", "async_task"]), {});
      Z.async_task = t;
    }
    if ((Z == null ? undefined : Z.content_type) === chatConstantsEnum.messageContentType.AGGREGATED_MSG && Z.sub_message_group && e.sub_message_group) {
      Z.sub_message_group.messages = await Promise.all((F = e.sub_message_group) === null || F === undefined ? undefined : F.messages.map(e => j(e)));
    }
    if (H && (t == null ? undefined : t.disableChatNextTransform)) {
      return Z;
    }
    let K = botConversationTypeCheck.isBotConversation(Z);
    let X = isCocoConversationChecker.isCocoConversation(Z) && checkAiPptSkill.isAiPptSkill(Z);
    let {
      settingData: Q
    } = chatStoreManager.getStore("launcherRawSettingStore").getState();
    if (objectPathGetDefault.getObjectPathDefault(Q, "ab_config.ab_results.enable_conv_page_perf") === "true" && !K && !X) {
      let t = function (e, t, n) {
        let s = [];
        if (checkNestedContentType.isNestedContentType(e)) {
          s.push(...chatContentTransformer.transformChatContent(e.content_obj?.entities));
        }
        if (e.content_obj?.file_model) {
          s.push(...chatAttachmentFormatter.formatFileList(e.content_obj.file_model));
        }
        if (checkFileContentType.isFileContentType(e)) {
          s.push(...chatAttachmentFormatter.formatFileList(e.content_obj));
        }
        if (e.content_obj?.link_model) {
          let t = chatLinkMapper.createChatLink(e.content_obj.link_model);
          if (t) {
            s.push(t);
          }
        }
        if (e.content_obj?.image_model) {
          s.push(...imageDataTransformer.transformImageData(e.content_obj.image_model?.image_list));
        }
        if (checkImageContentType.isImageContentType(e) && e.content_obj) {
          s.push(...chatImageListMapper.normalizeImageList(e.content_obj));
        }
        if (t == null ? undefined : t.ext) {
          s.push(...extractSamanthaRefImages.extractRefImages(t.ext));
        }
        return function (e = []) {
          return arrayUniqBy.arrayUniqBy(e, (e, t) => e.type === t.type && e.key === t.key && e.identifier === t.identifier);
        }(s);
      }(Z, e);
      if (t.length) {
        safePropertyAssignUtil.safePropertyAssign(Z, {
          attachments: t
        });
      }
      let n = parseReferenceContentArray.parseReferenceContentArray(e.ext);
      if (n.length) {
        safePropertyAssignUtil.safePropertyAssign(Z, {
          references: n
        });
      }
      if (isCocoConversationChecker.isCocoConversation(Z) && (Z == null ? undefined : Z.content_type) === chatMessageTypes.ContentType.Nested && isEducationSkillChecker.isEducationSkill(Z)) {
        let e = chatImageDataMapper.mapImageData(t);
        Z.content_obj = {
          ...Z.content_obj,
          data: e
        };
        Z.content_type = chatMessageTypes.ContentType.Image;
      }
      return function (e) {
        var t;
        if (!((t = e.meta_infos) === null || t === undefined ? undefined : t.some(e => e.type === chatMessageTypes.MetaType.Think))) {
          return e;
        }
        let {
          text: n,
          is_hide: i
        } = R(e.meta_infos);
        return {
          ...e,
          content_obj: {
            ...e.content_obj,
            think: n
          },
          has_think_reason: true,
          think_reason_default_expand: true,
          think_reason_is_hide: !!i
        };
      }(Z);
    }
    let q = await chatPluginMatcherRegistry.loadProtocolTransformMatcher();
    if (q) {
      let n = q.find(e => {
        var t;
        if ((t = e.matchPluginForAliceChatMessageToMessage) === null || t === undefined) {
          return undefined;
        } else {
          return t.call(e, Z);
        }
      })?.pluginIdentifier;
      let i = await chatPluginIocManager.protocolTransformLoader(n);
      if (i == null ? undefined : i.aliceChatMessageToMessage) {
        return i.aliceChatMessageToMessage(Z, e, t == null ? undefined : t.local_info);
      }
    }
    return throttledOmitPathStringify.omitPathStringify(Z, "content", "content_block");
  };
  require.d(exports, {
    transformMessage: function () {
      return j;
    }
  });
}