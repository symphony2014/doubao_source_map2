// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'useCodingSkillChat'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59170.744060e8.js
         * chunkId: 59170
         * moduleId: 609755
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var pageVisitTrackContext = require("page-visit-track-context") /*id: 857541*/;
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var receiveMessageBoxStatus = require("receive-message-box-status") /*id: 682494*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var attachmentToMessageBlockTransformer = require("attachment-to-message-block-transformer") /*id: 324654*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var codingCanvasEventTracker = require("coding-canvas-event-tracker") /*id: 943129*/;
  var artifactMetaProcessorUtils = require("artifact-meta-processor-utils") /*id: 686064*/;
  var codingSkillChatInput_3 = require("coding-skill-chat-input_3") /*id: 117608*/;
  var skillActionConstants = require("skill-action-constants") /*id: 418389*/;
  let R = {
    Trending: "热门",
    Entertainment: "娱乐",
    Websites: "网站",
    Productivity: "效率",
    Education: "教育",
    Dashboards: "看板",
    Presentations: "演示",
    Tool: "工具"
  };
  let C = e => {
    let {
      trackParams: t,
      reportParams: r,
      onBeforeSendMessage: C,
      recommendArtifactsCategoryItems: E,
      isCodingPage: P = false
    } = e;
    let N = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendMessage: A
    } = chatServiceContext.useChatService("chatMessageService");
    let {
      trackCodingBaseEvent: j
    } = codingCanvasEventTracker.codingEventTracker();
    let {
      isDevMode: M
    } = codingSkillChatInput_3.useCodingChatInput();
    let W = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig, deepEqualityUtil.deepEqual);
    let $ = (W == null ? undefined : W.chatId) || "";
    let {
      conversationId: I
    } = chatFeedStoreFactory.useFeedStore(e => {
      var r;
      return {
        conversationId: ((r = e.localConversationMap[$]) === null || r === undefined ? undefined : r.local?.newConversationId) || $
      };
    }, deepEqualityUtil.deepEqual);
    let {
      current_page: D
    } = pageVisitTrackContext.getVisitContext();
    let Z = reactCoreLibraryReexport.useCallback(async e => {
      var l;
      var p;
      var g;
      let v;
      let k;
      let S;
      let {
        item: R,
        navigate: j,
        templateId: W,
        referenceKeys: $,
        jumpCodeSiteSource: Z
      } = e;
      let F = [];
      if (W) {
        let e = E == null ? undefined : E.flatMap(e => {
          return (e == null ? undefined : e.artifacts_items) ?? [];
        });
        let t = e == null ? undefined : e.find(e => (e == null ? undefined : e.artifacts_id) === W);
        v = W;
        k = t == null ? undefined : t.prompt;
      } else {
        v = R == null ? undefined : R.artifacts_id;
        k = R == null ? undefined : R.prompt;
        if (R == null ? undefined : R.image_references) {
          for (let e of R.image_references) {
            F.push(e == null ? undefined : e.uri);
          }
        }
        if (R == null ? undefined : R.whiteboard_reference) {
          F.push(R.whiteboard_reference?.uri);
        }
      }
      if (j) {
        let e = (r == null ? undefined : r.send_source) === "guidance_page_click" ? "landingcase" : "chatcase";
        semiToastNotification.toastInstance.info({
          content: N("coding_website_build_enter_tips"),
          duration: 1
        });
        await promiseAsyncUtilities.createDelayedPromise(1000);
        let t = new URLSearchParams();
        t.set("from", e);
        t.set("template_id", v ?? "");
        F.forEach(e => t.append("ref_key", e));
        window.open(xssContentSanitizer.sanitizeUrl(`${codeRouteUtils.codeChatPath}?${t.toString()}`, null, {
          logType: "js.window.location",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$iMkl5T1hKam$%a3hZekpWZEZsW$NqQmhWMXBv$1RO%mRH%khWblJq%jNob1pFZFZk$1JJ$*1oamJX%XhZM2M5%FE9PQ"
        }));
        return;
      }
      let z = {
        text: k,
        extraExt: {
          useSamanthaChat: "true"
        },
        language: "",
        command_name: "default",
        source_type: "artifacts",
        select_file_path: "",
        file_content: "",
        artifacts: {},
        artifact_template_id: v,
        code_assistant_source: P ? skillActionConstants.ConfigKeys.DevMode : undefined
      };
      let O = {
        skill_id: chatAppEnums.SkillType.CodeAssistant.toString(),
        skill_type: chatAppEnums.SkillType.CodeAssistant
      };
      if ((await (C == null ? undefined : C())) === false) {
        return;
      }
      if (Z === "landingcase" || (r == null ? undefined : r.scene) === "chat_action_bar") {
        S = "doubao_site_showcase";
      } else if (Z === "chatcase" || D === "chat") {
        S = "doubao_chat_showcase";
      } else if (D === "code_landingpage") {
        S = "code_site_showcase";
      } else if (D === "code_chat") {
        S = "code_chat_showcase";
      } else if (D === "code_assistant_detail_page") {
        S = "code_skill_showcase";
      }
      let L = {
        content_source: chatCoreConstants.MessageActions.ChangeTemplate,
        use_skill: 1,
        skill_id: chatAppEnums.SkillType.CodeAssistant.toString(),
        skill_type: chatAppEnums.SkillType.CodeAssistant,
        scene: (r == null ? undefined : r.scene) ? String(r == null ? undefined : r.scene) : (r == null ? undefined : r.skill_from) === "click_skill" ? "chat_template" : "",
        sec_scene: "click_suggested_prompt_case",
        select_range: JSON.stringify({
          start_column: 0,
          end_column: 0
        }),
        select_content: "",
        user_select_code: "",
        code_scene: M ? "build" : "chat",
        site_type: P ? "code_site" : "doubao_site",
        code_send_from: S
      };
      let B = [];
      if (R) {
        if (R == null ? undefined : R.image_references) {
          for (let e of R.image_references) {
            let t = uuidGeneratorUtil.generateUuid();
            let {
              data: r
            } = await apiServicesCollection.ResourceApiService.GetFileURL({
              uris: [e.uri],
              type: "image"
            });
            let n = (r == null ? undefined : (l = r.file_urls) === null || l === undefined ? undefined : l[0]?.main_url) || "";
            B.push({
              key: e.uri,
              url: n,
              type: "image",
              localKey: t,
              identifier: t
            });
          }
        }
        if (R == null ? undefined : R.whiteboard_reference) {
          let e = uuidGeneratorUtil.generateUuid();
          let {
            data: t
          } = await apiServicesCollection.ResourceApiService.GetFileURL({
            uris: [R.whiteboard_reference?.uri],
            type: "image"
          });
          let r = (t == null ? undefined : (p = t.file_urls) === null || p === undefined ? undefined : p[0]?.main_url) || "";
          B.push({
            key: R.whiteboard_reference.uri,
            url: r,
            type: "image",
            localKey: e,
            identifier: e
          });
        }
      } else if ($) {
        for (let e of $) {
          let t = uuidGeneratorUtil.generateUuid();
          let {
            data: r
          } = await apiServicesCollection.ResourceApiService.GetFileURL({
            uris: [e],
            type: "image"
          });
          let n = (r == null ? undefined : (g = r.file_urls) === null || g === undefined ? undefined : g[0]?.main_url) || "";
          B.push({
            key: e,
            url: n,
            type: "image",
            localKey: t,
            identifier: t
          });
        }
      }
      if (await aiChatSkillConversationChecker.isValidSkillType(chatAppEnums.SkillType.CodeAssistant)) {
        let e = [];
        let t = [];
        let r = [];
        if (B.length) {
          B.map(n => {
            let i = {
              uploadPercent: 100,
              type: "image",
              url: n.url || "",
              fileName: n.identifier || "",
              fileKey: n.key,
              status: receiveMessageBoxStatus.messageBoxStatus.Normal
            };
            r.push(i);
            t.push(n.key);
            e.push({
              localKey: n.localKey,
              type: "image",
              from: "",
              file: new Blob()
            });
          });
        }
        let n = attachmentToMessageBlockTransformer.transformAttachmentsToMessageBlock({
          attachments: e,
          attachmentKeys: t,
          attachmentStates: r
        });
        await artifactMetaProcessorUtils.sendArtifactMessage({
          text: k ?? "",
          attachmentBlock: n,
          refValue: "",
          messageExt: {
            answer_with_suggest: P ? "0" : "1",
            send_from_skill_guidance_or_suggestion: "1",
            content: ""
          },
          conversationId: I,
          reportParams: L,
          contextValue: z
        });
        return;
      }
      A([{
        text: k,
        ...((B == null ? undefined : B.length) && {
          sendAttachments: B
        }),
        extraExt: {
          useSamanthaChat: "true",
          content: "",
          input_skill: JSON.stringify(O),
          reference_content: JSON.stringify([{
            type: "text",
            text: "",
            extra: {
              context_variables: JSON.stringify(z || {})
            }
          }]),
          send_from_skill_guidance_or_suggestion: "1",
          answer_with_suggest: P ? "0" : "1"
        },
        reportParams: L
      }]);
    }, [E, M, P, D]);
    let F = reactCoreLibraryReexport.useCallback((e, r) => {
      let n = r ? Object.keys(R).find(e => R[e] === r) : "";
      j("click_suggested_content", {
        ...throttledOmitPathStringify.omitPathStringify(t, ["previous_page", "current_page"]),
        content_detail: (e == null ? undefined : e.home_page_item_type) === skillActionConstants.SkillActionType.DocLink ? "application_creation_user_guide_1" : e.artifacts_image_title,
        genre: (e == null ? undefined : e.home_page_item_type) === skillActionConstants.SkillActionType.DocLink ? "doc_link" : "artifacts",
        type: n
      });
    }, [t]);
    let z = reactCoreLibraryReexport.useCallback((e, r) => {
      let n = r ? Object.keys(R).find(e => R[e] === r) : "";
      j("show_suggested_content", {
        ...throttledOmitPathStringify.omitPathStringify(t, ["previous_page", "current_page"]),
        content_detail: (e == null ? undefined : e.home_page_item_type) === skillActionConstants.SkillActionType.DocLink ? "application_creation_user_guide_1" : e.artifacts_image_title,
        genre: (e == null ? undefined : e.home_page_item_type) === skillActionConstants.SkillActionType.DocLink ? "doc_link" : "artifacts",
        type: n
      });
    }, [t]);
    return {
      handleSendTemplate: Z,
      sendArtifactShowEvent: z,
      sendArtifactClickEvent: F,
      sendClickMyCreationEvent: reactCoreLibraryReexport.useCallback(() => {
        j("click_check_my_creation", {
          ...t
        });
      }, [t]),
      sendClickTagEvent: reactCoreLibraryReexport.useCallback(e => {
        let r = e ? Object.keys(R).find(t => R[t] === e) : "";
        j("code_template_category_click", {
          ...throttledOmitPathStringify.omitPathStringify(t, ["previous_page", "current_page"]),
          category_name: r
        });
      }, [t])
    };
  };
  require.d(exports, {
    useCodingSkillChat: function () {
      return C;
    }
  });
}