// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'codeRouteUtils'
// - Resolved require(983618) to 'code-route-utils'
// - Renamed variable 'r' to 'asyncSkillMessageLifecycle_1'
// - Resolved require(359452) to 'async-skill-message-lifecycle_1'
// - Renamed variable 'a' to 'attachmentProcessingUtils'
// - Resolved require(274055) to 'attachment-processing-utils'
// - Renamed variable 'o' to 'aiChatEnumConstants'
// - Resolved require(458113) to 'ai-chat-enum-constants'
// - Renamed variable 'l' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 's' to 'attachmentConstants'
// - Resolved require(373585) to 'attachment-constants'
// - Renamed variable 'c' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'u' to 'messagingSessionUtils'
// - Resolved require(545930) to 'messaging-session-utils'
// - Renamed variable 'd' to 'aiSkillTypeResolver'
// - Resolved require(631164) to 'ai-skill-type-resolver'
// - Renamed variable 'p' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'f' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'm' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'v' to 'storageWrapperWithFallback'
// - Resolved require(319763) to 'storage-wrapper-with-fallback'
// - Renamed variable 'g' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable '_' to 'artifactMetaProcessorUtils'
// - Resolved require(686064) to 'artifact-meta-processor-utils'
// - Renamed variable 'h' to 'codingSkillStoreModule'
// - Resolved require(528099) to 'coding-skill-store-module'
// - Renamed variable 'S' to 'codeAgentModeManager'
// - Resolved require(722076) to 'code-agent-mode-manager'
// - Renamed variable 'k' to 'skillActionConstants'
// - Resolved require(418389) to 'skill-action-constants'
// - Renamed variable 'w' to 'codeChannelWindowUtils'
// - Resolved require(98068) to 'code-channel-window-utils'
// - Renamed variable 'T' to 'chatCodeAssistantSymbol'
// - Resolved require(800611) to 'chat-code-assistant-symbol'
// - Updated imported property 'mr' to 'codingSkillStore' (module 528099)
// - Updated imported property 'OK' to 'artifactStatus' (module 617019)
// - Updated imported property 'rO' to 'createArtifactMetaFromMessage' (module 686064)
// - Updated imported property 'V' to 'skillMsgLifecycle' (module 359452)
// - Updated imported property 'fH' to 'isCodePage' (module 983618)
// - Updated imported property 'ZP' to 'modeManager' (module 722076)
// - Updated imported property 'KR' to 'ConfigKeys' (module 418389)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property '_j' to 'isSpreadsheetOrCsv' (module 274055)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// - Updated imported property 'Rv' to 'independentSiteType' (module 458113)
// - Updated imported property 'd' to 'resolveSkillType' (module 631164)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'S' to 'getChatTraceEvent' (module 545930)
// - Updated imported property 'Ie' to 'SessionStorageWrapper' (module 319763)
// - Updated imported property 'pX' to 'channelSourceKey' (module 98068)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'sf' to 'AttachmentType' (module 373585)
// - Updated imported property 'H' to 'codeAssistantSymbol' (module 800611)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 136064
         */
module.exports = function (module, exports, require) {
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var asyncSkillMessageLifecycle_1 = require("async-skill-message-lifecycle_1") /*id: 359452*/;
  var attachmentProcessingUtils = require("attachment-processing-utils") /*id: 274055*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var messagingSessionUtils = require("messaging-session-utils") /*id: 545930*/;
  var aiSkillTypeResolver = require("ai-skill-type-resolver") /*id: 631164*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var artifactMetaProcessorUtils = require("artifact-meta-processor-utils") /*id: 686064*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  let y = new Map();
  let b = {
    onMessageReceivingUpdate(e, t) {
      let i = t.content_blocks_v2 || [];
      let r = {};
      let a = 1;
      let {
        updateBlockArtifactMeta: o,
        blockArtifactMetaMap: l
      } = codingSkillStoreModule.codingSkillStore.getState();
      let s = i.find(e => e.block_type === 10030)?.block_id;
      if (!s || y.get(s)) {
        return;
      }
      i.forEach(e => {
        if (e.block_type === 10000) {
          var n;
          r[e.parent_id] = ((n = e.content) === null || n === undefined ? undefined : n.text_block?.text) || "";
        } else if (e.block_type === 10021) {
          a++;
        }
      });
      let c = false;
      i.forEach(e => {
        if (e.block_type === 10030) {
          let {
            content: t,
            block_id: n
          } = e;
          let i = t == null ? undefined : t.artifact_block;
          if (!i) {
            return;
          }
          let {
            status: r
          } = i;
          let a = r === skillMessageLifecycleTypes.artifactStatus.ArtifactStatus_Generating;
          c = skillMessageLifecycleTypes.artifactStatus.ArtifactStatus_Generated === r;
          if (l[n]) {
            if (c) {
              y.set(n, true);
              let {
                codeFileBlockList: e
              } = l[n];
              let t = e.map(e => ({
                ...e,
                artifactMeta: {
                  ...e.artifactMeta,
                  isStreaming: false
                }
              }));
              o({
                ...l[n],
                blockId: n,
                isStreaming: a,
                codeFileBlockList: t
              });
            }
          } else {
            o({
              blockId: n,
              isStreaming: a,
              codeFileBlockList: [{
                id: n,
                artifactMeta: artifactMetaProcessorUtils.createArtifactMetaFromMessage(i)
              }]
            });
          }
        }
        if (e.block_type === 10021 && !c) {
          let {
            content: t,
            block_id: n,
            parent_id: i
          } = e;
          let o = t == null ? undefined : t.artifact_code_file_block;
          let s = l[i];
          if (!s || !o) {
            return;
          }
          let {
            codeFileBlockList: c
          } = s;
          let u = r[n] || "";
          let d = [...c];
          let p = c.findIndex(e => e.id === n);
          if (c.length < a) {
            d = d.map(e => ({
              ...e,
              artifactMeta: {
                ...e.artifactMeta,
                isStreaming: false
              }
            }));
          }
          if (p === -1) {
            let e = c[0];
            d.push({
              id: n,
              pid: i,
              artifactMeta: {
                ...e.artifactMeta,
                isEntry: !!o.is_entry,
                isStreaming: true,
                code: {
                  ...o,
                  review_status: o.review_status,
                  content: u
                }
              }
            });
          } else {
            d[p] = {
              ...d[p],
              artifactMeta: {
                ...d[p].artifactMeta,
                isStreaming: true,
                code: {
                  ...o,
                  review_status: o.review_status,
                  content: u
                }
              }
            };
            if ("is_entry" in o) {
              d[p].artifactMeta.isEntry = o.is_entry;
            }
          }
          codingSkillStoreModule.codingSkillStore.getState().updateBlockArtifactMeta({
            blockId: i,
            activeCodeFileBlockId: n,
            isStreaming: true,
            codeFileBlockList: d
          });
        }
      });
    }
  };
  var codeAgentModeManager = require("code-agent-mode-manager") /*id: 722076*/;
  var skillActionConstants = require("skill-action-constants") /*id: 418389*/;
  var codeChannelWindowUtils = require("code-channel-window-utils") /*id: 98068*/;
  var chatCodeAssistantSymbol = require("chat-code-assistant-symbol") /*id: 800611*/;
  class x {
    async processMessageBefore(e, t) {
      let {
        processMessageBefore: n
      } = asyncSkillMessageLifecycle_1.skillMsgLifecycle.listeners;
      if (n == null ? undefined : n.length) {
        for (let i of n) {
          t = await i(e, t);
        }
      }
      return t;
    }
    onProcessMessageEnd(e, t) {
      return t.map(e => {
        let {
          extraExt: t,
          reportParams: n
        } = e;
        let r = t && "reference_content" in t ? t == null ? undefined : t.reference_content : undefined;
        n.section_id ||= e.sectionId || "";
        if (codeRouteUtils.isCodePage()) {
          n.code_scene = codeAgentModeManager.modeManager.getCurrentMode() === skillActionConstants.ConfigKeys.DevMode ? "build" : "chat";
        } else {
          n.code_scene = "chat";
        }
        if (codeRouteUtils.isCodePage() && t) {
          if ("thread_source" in t) {
            let e = JSON.parse(t.thread_source);
            t.thread_source = JSON.stringify({
              ...e,
              independent_site_type: chatAppEnums.IndependentSiteType.Code
            });
          } else {
            t.thread_source = JSON.stringify({
              independent_site_type: chatAppEnums.IndependentSiteType.Code
            });
          }
        }
        if (r && typeof r == "string") {
          let t = safeJsonUtils.safeParse(r, [])[0];
          if (t && "fileName" in t && t.fileName && attachmentProcessingUtils.isSpreadsheetOrCsv(t.fileName) && "reportParams" in e) {
            e.reportParams = {
              ...e.reportParams,
              quote_type: getFileExtension.getFileExtension(t.fileName)
            };
          }
          if (t && "extra" in t && r.includes("code_assistant_image_references")) {
            let n = JSON.parse(t.extra?.context_variables || "{}");
            if (n == null ? undefined : n.code_assistant_image_references) {
              let t = {};
              n.code_assistant_image_references.forEach(e => {
                if (e.types?.length) {
                  t[e.name] = e.types;
                }
              });
              e.reportParams.image_details = JSON.stringify(t);
            }
          }
          return e;
        }
        if ("sendAttachments" in e && e.sendAttachments) {
          let {
            sendAttachments: t
          } = e;
          let n = t[0];
          if (n == null ? undefined : n.name) {
            if (n.type === "file") {
              e.reportParams.upload_file_type = "code_file";
            } else if (n.type === "directory") {
              e.reportParams.upload_file_type = "code_folder";
            } else if (n.type === "link") {
              e.reportParams.upload_file_type = "github_link";
            }
            if (r == null ? undefined : r.includes("code_assistant_whiteboard_reference")) {
              e.reportParams.upload_file_type = "drawboard";
            }
            if (attachmentProcessingUtils.isSpreadsheetOrCsv(n.name)) {
              e.reportParams.upload_file_type = "data_file";
            }
          }
        }
        return e;
      });
    }
    onMessageReceivingUpdate(e, t) {
      b.onMessageReceivingUpdate(e, t);
      return t;
    }
    onBatchMessageReceivingEnd(e, t) {
      var n;
      if ((n = asyncSkillMessageLifecycle_1.skillMsgLifecycle.get("onBatchMessageReceivingEnd")) !== null && n !== undefined) {
        n.forEach(n => n(e, t));
      }
      return t;
    }
    onMessageReceivingEnd(e, t) {
      var n;
      if ((n = asyncSkillMessageLifecycle_1.skillMsgLifecycle.get("onMessageReceivingEnd")) !== null && n !== undefined) {
        n.forEach(n => n(e, t));
      }
      return t;
    }
    async beforeMessageSending(e, t) {
      let {
        beforeMessageSending: _
      } = asyncSkillMessageLifecycle_1.skillMsgLifecycle.listeners;
      if (_ == null ? undefined : _.length) {
        for (let n of _) {
          await n(e, t);
        }
      }
      let h = !!t.ext?.chat_ability;
      (function (e) {
        let {
          ext: n
        } = e;
        let r = !!e.ext?.chat_ability;
        if (codeRouteUtils.isCodePage() && n) {
          if (r) {
            let e = safeJsonUtils.safeParse(n.conversation_init_option, {});
            n.conversation_init_option = safeJsonUtils.safeStringify({
              ...e,
              independent_sites: [aiChatEnumConstants.independentSiteType.INDEPENDENT_SITE_CODE]
            });
          } else if ("thread_source" in n) {
            let e = {};
            try {
              e = JSON.parse(n.thread_source);
            } catch (e) {}
            n.thread_source = JSON.stringify({
              ...e,
              independent_site_type: chatAppEnums.IndependentSiteType.Code
            });
          } else {
            n.thread_source = JSON.stringify({
              independent_site_type: chatAppEnums.IndependentSiteType.Code
            });
          }
        }
      })(t);
      let y = t.skill ?? aiSkillTypeResolver.resolveSkillType(t.ext);
      if ((y == null ? undefined : y.skill_type) !== aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant) {
        return t;
      } else {
        (function (e, t) {
          var o;
          var c;
          let d = messagingSessionUtils.getChatTraceEvent(e);
          let p = {
            section_id: t.section_id || "",
            skill_name: "coding_assistant"
          };
          if (codeRouteUtils.isCodePage()) {
            p.code_scene = codeAgentModeManager.modeManager.getCurrentMode() === skillActionConstants.ConfigKeys.DevMode ? "build" : "chat";
            p.code_challenge_ug_source = storageWrapperWithFallback.SessionStorageWrapper.getItem(codeChannelWindowUtils.channelSourceKey);
          } else {
            p.code_scene = "chat";
          }
          if (t.content_blocks_v2?.length) {
            let e = t.content_blocks_v2.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT);
            if (e) {
              let t = (c = e.content) === null || c === undefined ? undefined : (o = c.attachment_block) === null || o === undefined ? undefined : o.attachments?.[0];
              if (t) {
                switch (t.type) {
                  case attachmentConstants.AttachmentType.AttachmentTypeFile:
                    p.upload_file_type = "code_file";
                    break;
                  case attachmentConstants.AttachmentType.AttachmentTypeCodeDirectory:
                    p.upload_file_type = "code_directory";
                    break;
                  case attachmentConstants.AttachmentType.AttachmentTypeLink:
                    p.upload_file_type = "code_link";
                }
              }
            }
          }
          (function (e, t) {
            var n;
            var i;
            var r;
            var o;
            let {
              attachments: s,
              references: c
            } = e;
            if ((s == null ? undefined : s.length) && s[0].name && attachmentProcessingUtils.isSpreadsheetOrCsv(s[0].name) && "reportParams" in e) {
              t.quote_type = getFileExtension.getFileExtension(s[0].name);
              t.upload_file_type = "data_file";
            }
            if ((c == null ? undefined : c.length) && "extra" in c[0] && ((i = c[0].extra) === null || i === undefined ? undefined : (n = i.context_variables) === null || n === undefined ? undefined : n.includes("code_assistant_image_references"))) {
              let e = JSON.parse(c[0].extra?.context_variables || "{}");
              if (e == null ? undefined : e.code_assistant_image_references) {
                let n = {};
                e.code_assistant_image_references.forEach(e => {
                  if (e.types?.length) {
                    n[e.name] = e.types;
                  }
                });
                t.image_details = JSON.stringify(n);
              }
            }
            if ((c == null ? undefined : c.length) && "extra" in c[0] && ((o = c[0].extra) === null || o === undefined ? undefined : (r = o.context_variables) === null || r === undefined ? undefined : r.includes("code_assistant_whiteboard_reference"))) {
              t.upload_file_type = "drawboard";
            }
          })(t, p);
          if (d != null) {
            d.setTeaEventOtherTraceParams(p);
          }
        })(e, t);
        if (h) {
          return function (e) {
            let n = codeRouteUtils.isCodePage();
            let r = e.ext?.chat_ability;
            if (!r) {
              return e;
            }
            let a = {};
            try {
              a = JSON.parse(r);
            } catch (e) {}
            let o = {};
            try {
              o = JSON.parse((a == null ? undefined : a.ability_param) || "{}");
            } catch (e) {}
            if (n && codeAgentModeManager.modeManager.getCurrentMode() === skillActionConstants.ConfigKeys.DevMode && (o == null ? undefined : o.code_assistant_source) !== skillActionConstants.ConfigKeys.DevMode) {
              let t = safeJsonUtils.safeStringify({
                ...a,
                ability_param: safeJsonUtils.safeStringify({
                  ...o,
                  code_assistant_source: skillActionConstants.ConfigKeys.DevMode
                })
              });
              return {
                ...e,
                ext: {
                  ...e.ext,
                  chat_ability: t
                }
              };
            }
            return e;
          }(t);
        } else {
          return function (e) {
            var n;
            var r;
            let l = codeRouteUtils.isCodePage();
            let s = (r = e.references) === null || r === undefined ? undefined : (n = r[0]) === null || n === undefined ? undefined : n.extra?.context_variables;
            let c = safeJsonUtils.safeParse(s, null);
            let u = c == null ? undefined : c.code_assistant_source;
            if (l && codeAgentModeManager.modeManager.getCurrentMode() === skillActionConstants.ConfigKeys.DevMode && u !== skillActionConstants.ConfigKeys.DevMode) {
              let t = safeJsonUtils.safeStringify({
                ...c,
                code_assistant_source: skillActionConstants.ConfigKeys.DevMode
              });
              let n = Array.isArray(e.references) && e.references?.length ? e.references.map(e => ({
                ...e,
                extra: {
                  ...e.extra,
                  context_variables: safeJsonUtils.safeStringify({
                    ...c,
                    code_assistant_source: skillActionConstants.ConfigKeys.DevMode
                  })
                }
              })) : [{
                type: "text",
                content: "",
                extra: {
                  context_variables: t
                }
              }];
              let i = safeJsonUtils.safeParse(e.ext?.reference_content, []);
              let r = safeJsonUtils.safeStringify(Array.isArray(i) && i.length ? i.map(e => ({
                ...e,
                extra: {
                  ...e.extra,
                  context_variables: t
                }
              })) : [{
                type: "text",
                text: "",
                extra: {
                  context_variables: t
                }
              }]);
              return {
                ...e,
                references: n,
                ext: {
                  ...e.ext,
                  reference_content: r
                }
              };
            }
            return e;
          }(t);
        }
      }
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatCodeAssistantSymbol.codeAssistantSymbol;
      if ((e = typeof (n = function (e, t) {
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
      }(e, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    CodeAsisstantMessageLifeCyclePlugin: function () {
      return x;
    }
  });
}