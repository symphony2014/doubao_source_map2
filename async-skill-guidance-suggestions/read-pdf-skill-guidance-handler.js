// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'handleReadPdfGuidanceClick'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: read-pdf-skill-guidance-page-v2.2be10363.js
         * chunkId: 92219
         * moduleId: 915414
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var chatSkillMessageSenderHook = require("chat-skill-message-sender-hook") /*id: 832138*/;
  var chatFileOpenHandler = require("chat-file-open-handler") /*id: 145253*/;
  var receiveMessageBoxStatus = require("receive-message-box-status") /*id: 682494*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var getDocumentPdfKey = require("get-document-pdf-key") /*id: 523108*/;
  var arxivPdfUrlChecker_1 = require("arxiv-pdf-url-checker_1") /*id: 82103*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let y = e => {
    let {
      reportParams: t,
      onBeforeSendMessage: n,
      onAfterSendMessage: y
    } = e;
    let {
      sendMessage: b
    } = chatSkillMessageSenderHook.useChatSkillMessageSender();
    let x = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig);
    let {
      openFileByKey: w,
      openFileByLink: k
    } = chatFileOpenHandler.createChatFileHandler({
      chatViewConfig: x
    });
    let j = chatResponsiveSize.useChatScreenSize({
      sm: 800,
      md: 1200
    }) === "sm";
    let S = reactFunctionMemoHook.useMemoizedCallback(async (e, t) => {
      if (j || e.length > 1) {
        return;
      }
      let n = e[0];
      if ("fileKey" in n) {
        let e = n.fileName || n.fileKey || "";
        let {
          fileKey: i
        } = n;
        let r = fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(e));
        if (r === "Document") {
          let e = await getDocumentPdfKey.getDocumentPdfKey(n.fileKey);
          if (e) {
            i = e;
            r = "PDF";
          }
        }
        if (r === "PDF") {
          if (w != null) {
            w(i, r, {
              pdf: {
                fileName: e,
                realFileKey: n.fileKey
              },
              openFrom: t
            }, {
              skillType: chatAppEnums.SkillType.ReadPDF
            });
          }
        }
      } else if (n.link && (await arxivPdfUrlChecker_1.getArxivPdfStatus(n.link))) {
        if (k != null) {
          k(n.link, {
            attchmentType: "pdf",
            pdf: {
              fileName: n.link,
              realFileKey: n.link
            },
            openFrom: t
          }, {
            skillType: chatAppEnums.SkillType.ReadPDF
          });
        }
      }
    });
    let {
      run: C
    } = useDebouncedCallbackHook_1.useDebouncedCallback(async e => {
      let {
        item: s,
        trackParams: a,
        needTrackEvent: o = false,
        needLog: c = true
      } = e;
      if (c) {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "skill_guidance_page_click",
          meta: {
            skill_type: chatAppEnums.SkillType.ReadPDF,
            type: "send_message"
          }
        });
      }
      if ((await (n == null ? undefined : n())) === false) {
        return;
      }
      if (o) {
        teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
          content_detail: s.prompt,
          ...a
        });
      }
      let {
        attachments: d,
        attachmentStates: h,
        attachmentKeys: m
      } = s.assets.every(e => "link" in e && e.link) ? {
        attachments: s.assets.map(e => ({
          type: "link",
          url: e.link
        })),
        attachmentStates: [],
        attachmentKeys: []
      } : s.assets.filter(e => "fileKey" in e).reduce((e, t) => {
        let n = uuidGeneratorUtil.generateUuid();
        let r = {
          type: "file",
          localKey: n,
          fileName: t.fileName,
          from: "",
          file: new File([], t.fileName || t.fileKey || "")
        };
        let s = {
          type: "file",
          localKey: n,
          fileKey: t.fileKey,
          fileName: t.fileName,
          size: t.size,
          reviewState: messagingConstants.reviewState.ReviewState_Access,
          parseState: messagingConstants.parseState.ParseState_Default,
          uploadPercent: 100,
          status: receiveMessageBoxStatus.messageBoxStatus.Normal
        };
        return {
          attachments: [...e.attachments, r],
          attachmentStates: [...e.attachmentStates, s],
          attachmentKeys: [...e.attachmentKeys, t.fileKey]
        };
      }, {
        attachments: [],
        attachmentKeys: [],
        attachmentStates: []
      });
      await b({
        chatId: (x == null ? undefined : x.chatId) ?? "",
        reportParams: {
          send_source: "skill_guidance_page_click",
          scene: "sidebar_skill_click",
          sec_scene: "click_suggestedprompt_case",
          preset_prompt_type: "default_prompt",
          ...t,
          ...a
        },
        extraExt: {
          ...s.ext,
          send_from_skill_guidance_or_suggestion: "1"
        },
        text: s.prompt,
        attachments: d,
        attachmentKeys: m,
        attachmentStates: h
      });
      await S(s.assets, c ? "click_template_in_read_guidance_page" : "click_template_in_home_guidance_page");
      if (y != null) {
        y();
      }
    }, {
      leading: true,
      trailing: false,
      wait: 1000
    });
    return C;
  };
  require.d(exports, {
    handleReadPdfGuidanceClick: function () {
      return y;
    }
  });
}