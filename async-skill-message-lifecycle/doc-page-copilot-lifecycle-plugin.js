// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'r' to 'arrayValueFinder'
// - Resolved require(421495) to 'array-value-finder'
// - Renamed variable 'a' to 'routePathUtils'
// - Resolved require(930304) to 'route-path-utils'
// - Renamed variable 'o' to 'docPlaygroundCheck'
// - Resolved require(993680) to 'doc-playground-check'
// - Renamed variable 'l' to 'artifactResourceLayout'
// - Resolved require(774071) to 'artifact-resource-layout'
// - Renamed variable 's' to 'writingSkillStore'
// - Resolved require(704044) to 'writing-skill-store'
// - Renamed variable 'c' to 'writeConfigManager'
// - Resolved require(336456) to 'write-config-manager'
// - Renamed variable 'u' to 'writingTaskConstants'
// - Resolved require(147584) to 'writing-task-constants'
// - Renamed variable 'd' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'p' to 'aiChatEnumConstants'
// - Resolved require(458113) to 'ai-chat-enum-constants'
// - Renamed variable 'f' to 'extractArtifactFromChatMessage'
// - Resolved require(117895) to 'extract-artifact-from-chat-message'
// - Renamed variable 'm' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'v' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'g' to 'storageWrapperWithFallback'
// - Resolved require(319763) to 'storage-wrapper-with-fallback'
// - Renamed variable '_' to 'asyncSkillMessageLifecycle_2'
// - Resolved require(288954) to 'async-skill-message-lifecycle_2'
// - Renamed variable 'h' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'y' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'b' to 'documentNavigationAndCreationUtils'
// - Resolved require(491592) to 'document-navigation-and-creation-utils'
// - Renamed variable 'S' to 'writeArtifactPreviewId'
// - Resolved require(896254) to 'write-artifact-preview-id'
// - Renamed variable 'k' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'I' to 'isStringTypeCheck'
// - Resolved require(253558) to 'is-string-type-check'
// - Renamed variable 'N' to 'isNumberUtil'
// - Resolved require(897814) to 'is-number-util'
// - Renamed variable 'A' to 'safePropertyAssignUtil'
// - Resolved require(377863) to 'safe-property-assign-util'
// - Renamed variable 'O' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable '$' to 'chatInputSkillTypes'
// - Resolved require(878542) to 'chat-input-skill-types'
// - Renamed variable 'D' to 'referenceBlockTransformer'
// - Resolved require(642515) to 'reference-block-transformer'
// - Renamed variable 'z' to 'docPageCopilotSymbol'
// - Resolved require(435716) to 'doc-page-copilot-symbol'
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'zo' to 'skillTypes' (module 458113)
// - Updated imported property 'Rv' to 'independentSiteType' (module 458113)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'E' to 'artifactPreviewId' (module 896254)
// - Updated imported property 'AQ' to 'createDocument' (module 491592)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'Z' to 'isNumber' (module 897814)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'i' to 'writingSkillStore' (module 704044)
// - Updated imported property 'Lz' to 'ChatInputMode' (module 878542)
// - Updated imported property 'Us' to 'ChatSkillAction' (module 878542)
// - Updated imported property 'Q' to 'transformReferences' (module 642515)
// - Updated imported property 's$' to 'isDocPath' (module 930304)
// - Updated imported property 'p' to 'WriteConfigManager' (module 336456)
// - Updated imported property 'G' to 'isDocPlayground' (module 993680)
// - Updated imported property 'yQ' to 'LocalStorageWrapper' (module 319763)
// - Updated imported property 'Z' to 'valueFinder' (module 421495)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'N' to 'skillLifecycle' (module 288954)
// - Updated imported property 'le' to 'extractArtifactFromMessage' (module 117895)
// - Updated imported property '$' to 'ArtifactResource' (module 774071)
// - Updated imported property 'H' to 'docPageCopilotKey' (module 435716)
// - Updated imported property 'Us' to 'writingTasks' (module 147584)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 798700
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var arrayValueFinder = require("array-value-finder") /*id: 421495*/;
  var routePathUtils = require("route-path-utils") /*id: 930304*/;
  var docPlaygroundCheck = require("doc-playground-check") /*id: 993680*/;
  var artifactResourceLayout = require("artifact-resource-layout") /*id: 774071*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var writeConfigManager = require("write-config-manager") /*id: 336456*/;
  var writingTaskConstants = require("writing-task-constants") /*id: 147584*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var extractArtifactFromChatMessage = require("extract-artifact-from-chat-message") /*id: 117895*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var asyncSkillMessageLifecycle_2 = require("async-skill-message-lifecycle_2") /*id: 288954*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var documentNavigationAndCreationUtils = require("document-navigation-and-creation-utils") /*id: 491592*/;
  var writeArtifactPreviewId = require("write-artifact-preview-id") /*id: 896254*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let w = e => {
    let n = safeJsonUtils.safeParse(e.extraExt?.input_skill, null);
    if (n == null) {
      return undefined;
    } else {
      return n.skill_type;
    }
  };
  let T = e => {
    let i = safeJsonUtils.safeParse(e.ext?.input_skill, null);
    if (i) {
      return i.skill_type;
    }
    let r = safeJsonUtils.safeParse(e.ext?.chat_ability, null);
    if (r) {
      return r.ability_type;
    }
  };
  let x = e => {
    let i = e.ext?.chat_ability;
    let r = safeJsonUtils.safeParse(i, null) ?? {
      ability_type: aiChatEnumConstants.skillTypes.FreeChat,
      ability_param: ""
    };
    let a = safeJsonUtils.safeParse(r.ability_param, {});
    return {
      ability_type: r.ability_type,
      ability_param: a
    };
  };
  let E = e => {
    let t = w(e);
    return t === aiAssistantSkillTypes.SkillTypes.SkillFreeChat || isUndefinedCheck.isUndefined(t);
  };
  let C = e => {
    let t = T(e);
    return t === aiAssistantSkillTypes.SkillTypes.SkillFreeChat || isUndefinedCheck.isUndefined(t);
  };
  let M = e => {
    let t = x(e);
    return t.ability_type === aiChatEnumConstants.skillTypes.SkillWrite && isEmptyUtil.isEmpty(t.ability_param);
  };
  let R = () => {
    let {
      canvasContent: e,
      matchedCanvasPluginIdentifier: t
    } = chatStoreManager.getStoreState("chatViewCanvasStore");
    let n = e == null ? undefined : e.type;
    return t === writeArtifactPreviewId.artifactPreviewId && documentNavigationAndCreationUtils.createDocument(n);
  };
  let P = () => {
    if (typeof window == "undefined") {
      return false;
    }
    let {
      pathname: e
    } = window.location;
    return /^\/doc(\/|$)/.test(e);
  };
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatInputSkillTypes = require("chat-input-skill-types") /*id: 878542*/;
  var referenceBlockTransformer = require("reference-block-transformer") /*id: 642515*/;
  let L = e => {
    let {
      ability_type: t,
      ability_param: n
    } = e;
    return safeJsonUtils.safeStringify({
      ability_type: t,
      ability_param: safeJsonUtils.safeStringify(n)
    });
  };
  let Z = e => {
    if (isStringTypeCheck.isString(e.ext?.action_bar_skill_id)) {
      return e.ext?.action_bar_skill_id;
    }
    let a = safeJsonUtils.safeParse(e.ext?.input_skill, {})?.skill_type;
    if (isNumberUtil.isNumber(a)) {
      return a.toString();
    }
    let o = x(e);
    if (o) {
      return o.ability_type.toString();
    } else {
      return "0";
    }
  };
  let W = e => {
    let t = Z(e);
    if (t) {
      e.ext = e.ext || {};
      e.ext.action_bar_skill_id = t;
    }
    return e;
  };
  let j = e => {
    var t;
    var r;
    if ((t = e.content_blocks_v2) === null || t === undefined ? undefined : t.some(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT)) {
      return e;
    }
    let {
      getSelection: o
    } = writingSkillStore.writingSkillStore.getState();
    let l = o(e.conversation_id || "");
    let c = T(e);
    if (c && (l == null ? undefined : l.skillType) && c !== (l == null ? undefined : l.skillType)) {
      return e;
    }
    if (l) {
      let t = x(e);
      t.ability_type = c;
      e = W(e);
      let o = t.ability_param;
      o.content_context ||= {};
      if (!o.content_context) {
        return e;
      }
      o.content_context.doc_structure_version = l.version;
      o.content_context.selected_content = l.selectedContent;
      if (l.docCursorType) {
        o.content_context.type = l.docCursorType;
      }
      if (l.docAction && !o.action) {
        o.action = l.docAction;
      }
      o.config ||= {
        canvas_mode: chatInputSkillTypes.ChatInputMode.AUTO,
        enable_search: false
      };
      e.ext = e.ext || {};
      e.ext.chat_ability = L(t);
      let s = null;
      if (!l.referenceContent || e.ext?.reference_content) {
        if (e.ext?.reference_content) {
          s = e.ext?.reference_content;
        }
      } else {
        s = l.referenceContent;
      }
      if (s && !((r = e.content_blocks_v2) === null || r === undefined ? undefined : r.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_REFERENCE))) {
        let t = safeJsonUtils.safeParse(s, {});
        let n = referenceBlockTransformer.transformReferences(t);
        e.content_blocks_v2 = n ? [...n, ...(e.content_blocks_v2 || [])] : e.content_blocks_v2;
      }
    }
    return e;
  };
  let B = e => {
    let {
      openedArtifact: t
    } = writingSkillStore.writingSkillStore.getState();
    if (!t) {
      return e;
    }
    let {
      artifactKey: n,
      pageToken: i,
      resourceType: r
    } = t;
    if (!n && !i) {
      return e;
    }
    let a = x(e);
    if (n || i) {
      a.ability_type = aiChatEnumConstants.skillTypes.SkillWrite;
      e = W(e);
    }
    let o = a.ability_param;
    o.content_context ||= {};
    if (o.content_context) {
      if (n) {
        o.content_context.artifact_key = n;
      }
      if (i) {
        o.content_context.page_token = i;
      }
      if (P()) {
        o.content_context.scene = 1;
      }
      if (isNumberUtil.isNumber(r)) {
        o.content_context.resource_type = r;
      }
      if ((n || i) && !o.action) {
        o.action = chatInputSkillTypes.ChatSkillAction.DIRECT_INPUT;
      }
      o.config ||= {
        canvas_mode: chatInputSkillTypes.ChatInputMode.AUTO,
        enable_search: false
      };
      e.ext = e.ext || {};
      e.ext.chat_ability = L(a);
    }
    return e;
  };
  let F = async e => {
    if (!M(e) && (C(e) || !R() && !routePathUtils.isDocPath()) || !(await writeConfigManager.WriteConfigManager.isNewDoc({
      fallback: false
    }))) {
      return e;
    }
    let t = x(e);
    t.ability_type = aiChatEnumConstants.skillTypes.SkillWrite;
    e = W(e);
    let n = t.ability_param;
    n.content_context ||= {};
    if (n.content_context) {
      if (isUndefinedCheck.isUndefined(n.action)) {
        n.action = chatInputSkillTypes.ChatSkillAction.DIRECT_INPUT;
      }
      n.config ||= {
        canvas_mode: chatInputSkillTypes.ChatInputMode.AUTO,
        enable_search: false
      };
      e.ext = e.ext || {};
      e.ext.chat_ability = L(t);
    }
    return e;
  };
  let U = async e => {
    if (!docPlaygroundCheck.isDocPlayground()) {
      return e;
    }
    let t = x(e);
    let n = t.ability_param;
    let a = storageWrapperWithFallback.LocalStorageWrapper.getItem("draft_style_info");
    let l = storageWrapperWithFallback.LocalStorageWrapper.getItem("draft_style_selected_id");
    if (!(await writeConfigManager.WriteConfigManager.isNewDoc({
      fallback: false
    }))) {
      return e;
    }
    try {
      let o = safeJsonUtils.safeParse(a, []);
      let s = arrayValueFinder.valueFinder(o, e => e.id === l);
      let c = objectPathGetDefault.getObjectPathDefault(s, "content");
      n.content_context ||= {};
      if (a && l && c) {
        safePropertyAssignUtil.safePropertyAssign(n.content_context, {
          custom_style_requirement: c
        });
      }
      e.ext = e.ext || {};
      safePropertyAssignUtil.safePropertyAssign(e.ext, {
        is_playground: "1"
      });
      e.ext.chat_ability = L(t);
      safePropertyAssignUtil.safePropertyAssign(e.ext, {
        conversation_init_option: safeJsonUtils.safeStringify({
          independent_sites: [aiChatEnumConstants.independentSiteType.INDEPENDENT_SITE_AI_PLAYGROUND]
        })
      });
      return e;
    } catch (t) {
      return e;
    }
  };
  var docPageCopilotSymbol = require("doc-page-copilot-symbol") /*id: 435716*/;
  function K(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class H {
    async beforeMessageSending(e, t) {
      if (!t.content_blocks_v2) {
        return t;
      }
      for (let e of [j, B, F, U]) {
        t = await e(t);
      }
      return t;
    }
    onMessageSendingStart(e, t) {
      asyncSkillMessageLifecycle_2.skillLifecycle.emit("copilot.doc-generate.message-start", {
        message: t
      });
      return t;
    }
    onMessageReceivingUpdate(e, t) {
      let n = extractArtifactFromChatMessage.extractArtifactFromMessage(t);
      if ((n == null ? undefined : n.resourceType) && [artifactResourceLayout.ArtifactResource.CanvasPages, artifactResourceLayout.ArtifactResource.DocxPage, artifactResourceLayout.ArtifactResource.StepWritingOtterPage, artifactResourceLayout.ArtifactResource.StepDocxPage].includes(n.resourceType)) {
        asyncSkillMessageLifecycle_2.skillLifecycle.emit("copilot.doc-generate.artifact-receiving", {
          message: t
        });
      }
      return t;
    }
    onMessageReceivingEnd(e, t) {
      asyncSkillMessageLifecycle_2.skillLifecycle.emit("copilot.doc-generate.message-end", {
        message: t
      });
      return t;
    }
    constructor() {
      K(this, "pluginIdentifier", docPageCopilotSymbol.docPageCopilotKey);
      K(this, "processMessageBefore", async (e, t) => {
        let n = [this.docSelectionProcessPayload, this.docArtifactProcessPayload, this.docPlaygroundProcessPayload];
        if (await writeConfigManager.WriteConfigManager.isNewDoc().catch(() => false)) {
          n.push(this.docCanvasProcessPayload);
          n.push(this.docxContentTypeProcessPayload);
          n.push(this.docxPlaygroundAddStyleOld);
        }
        return t.map(e => {
          let t = e;
          n.forEach(e => {
            t = e(t);
          });
          return t;
        });
      });
      K(this, "docxContentTypeProcessPayload", e => {
        let r = e.extraExt?.input_skill;
        let a = e.extraExt?.doc_action;
        if (String(objectPathGetDefault.getObjectPathDefault(safeJsonUtils.safeParse(r, undefined), "skill_id")) !== String(chatAppEnums.SkillType.WriteAssistant) || a === undefined) {
          return e;
        }
        let o = {
          ...e.extraExt
        };
        o.input_content_type = `${aiAssistantSkillTypes.SamanthaTypes.SamanthaWritingGenerateInput}`;
        return {
          ...e,
          extraExt: o
        };
      });
      K(this, "docSelectionProcessPayload", e => {
        var t;
        let {
          getSelection: n
        } = writingSkillStore.writingSkillStore.getState();
        if ("nestedItems" in e && ((t = e.nestedItems) === null || t === undefined ? undefined : t.find(e => e.fileKey))) {
          return e;
        }
        let i = n(e.conversationId || "");
        let r = {
          ...e.extraExt
        };
        let a = w(e);
        if (a && (i == null ? undefined : i.skillType) && a !== (i == null ? undefined : i.skillType)) {
          return e;
        } else {
          if (i) {
            r = {
              ...r,
              doc_structure_version: i.version.toString(),
              selection: JSON.stringify(i.selectedContent),
              input_content_type: `${aiAssistantSkillTypes.SamanthaTypes.SamanthaWritingGenerateInput}`
            };
            if (i.docAction && !r.doc_action) {
              r.doc_action = i.docAction.toString();
            }
            if (i.docCursorType) {
              r.type = i.docCursorType.toString();
            }
            if (!r.input_skill && i.skillType) {
              r.input_skill = JSON.stringify({
                skill_id: String(i.skillType),
                skill_type: i.skillType
              });
            }
            if (i.referenceContent && !r.reference_content) {
              r.reference_content = i.referenceContent;
            }
          }
          return {
            ...e,
            extraExt: r
          };
        }
      });
      K(this, "docCanvasProcessPayload", e => {
        if (!E(e) || !R() && !routePathUtils.isDocPath() && !docPlaygroundCheck.isDocPlayground()) {
          return e;
        }
        let t = {
          ...e.extraExt
        };
        t.doc_action = String(writingTaskConstants.writingTasks.DIRECT_INPUT);
        return {
          ...e,
          extraExt: t
        };
      });
      K(this, "docArtifactProcessPayload", e => {
        let {
          openedArtifact: n
        } = writingSkillStore.writingSkillStore.getState();
        if (!(n == null ? undefined : n.artifactKey)) {
          return e;
        }
        let i = {
          ...e.extraExt
        };
        i.artifact_key = n.artifactKey;
        if (safeJsonUtils.safeParse(e.extraExt?.input_skill, {}).action === "gen_outline") {
          i.answer_with_suggest = "0";
        }
        return {
          ...e,
          extraExt: i
        };
      });
      K(this, "docPlaygroundProcessPayload", e => {
        if (!docPlaygroundCheck.isDocPlayground()) {
          return e;
        }
        let t = {
          ...e.extraExt
        };
        t.is_playground = "1";
        t.conversation_init_option = safeJsonUtils.safeStringify({
          independent_sites: [aiChatEnumConstants.independentSiteType.INDEPENDENT_SITE_AI_PLAYGROUND]
        });
        return {
          ...e,
          extraExt: t
        };
      });
      K(this, "docxPlaygroundAddStyleOld", e => {
        if (!docPlaygroundCheck.isDocPlayground()) {
          return e;
        }
        let t = storageWrapperWithFallback.LocalStorageWrapper.getItem("draft_style_info");
        let n = storageWrapperWithFallback.LocalStorageWrapper.getItem("draft_style_selected_id");
        try {
          let a = safeJsonUtils.safeParse(t, []);
          let o = arrayValueFinder.valueFinder(a, e => e.id === n);
          let l = objectPathGetDefault.getObjectPathDefault(o, "content");
          let s = {
            ...e.extraExt
          };
          if (t && n && l) {
            s.custom_style_requirement = l;
          }
          return {
            ...e,
            extraExt: s
          };
        } catch (t) {
          return e;
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    DocPageCopliotMessageLifeCyclePlugin: function () {
      return H;
    }
  });
}