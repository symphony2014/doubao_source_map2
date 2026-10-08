// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'GithubRepoModal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 155455
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var receiveMessageBoxStatus = require("receive-message-box-status") /*id: 682494*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var attachmentToMessageBlockTransformer = require("attachment-to-message-block-transformer") /*id: 324654*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var gitRepoUrlValidator = require("git-repo-url-validator") /*id: 904797*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlIconComponent_3 = require("rtl-icon-component_3") /*id: 651551*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var alertDialogComponents = require("alert-dialog-components") /*id: 119530*/;
  var chatMessageSender_1 = require("chat-message-sender_1") /*id: 195759*/;
  var R = {
    "github-modal-wrapper": "github-modal-wrapper-zVVbaQ",
    githubModalWrapper: "github-modal-wrapper-zVVbaQ",
    "github-modal-desc": "github-modal-desc-d8kI2k",
    githubModalDesc: "github-modal-desc-d8kI2k",
    "github-modal-link-input-wrapper": "github-modal-link-input-wrapper-dQXPcR",
    githubModalLinkInputWrapper: "github-modal-link-input-wrapper-dQXPcR",
    "github-modal-link-input": "github-modal-link-input-KbrMlS",
    githubModalLinkInput: "github-modal-link-input-KbrMlS",
    "github-modal-link-input-error-tip": "github-modal-link-input-error-tip-HD9EjB",
    githubModalLinkInputErrorTip: "github-modal-link-input-error-tip-HD9EjB",
    "github-modal-button": "github-modal-button-EVLZVM",
    githubModalButton: "github-modal-button-EVLZVM",
    "github-modal-button-cancel": "github-modal-button-cancel-oRgQyM",
    githubModalButtonCancel: "github-modal-button-cancel-oRgQyM",
    "github-modal-button-ok": "github-modal-button-ok-aZp7Gj",
    githubModalButtonOk: "github-modal-button-ok-aZp7Gj",
    "github-modal-button-okdisable": "github-modal-button-okdisable-KZaH9u",
    githubModalButtonOkdisable: "github-modal-button-okdisable-KZaH9u",
    "github-recommend-list": "github-recommend-list-hCYrt9",
    githubRecommendList: "github-recommend-list-hCYrt9",
    "github-recommend-title": "github-recommend-title-B7PVIT",
    githubRecommendTitle: "github-recommend-title-B7PVIT",
    "github-recommend-codebases": "github-recommend-codebases-obciRb",
    githubRecommendCodebases: "github-recommend-codebases-obciRb",
    "github-recommend-codebase": "github-recommend-codebase-Xf2Bh9",
    githubRecommendCodebase: "github-recommend-codebase-Xf2Bh9",
    "github-icon": "github-icon-PJcCls",
    githubIcon: "github-icon-PJcCls"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function I(e) {
    let {
      title: t,
      handleConfirm: n,
      handleCancel: o,
      t: I,
      validRemoteGithubUrl: D,
      recommendCodeBasePrompts: A,
      className: O,
      showRecommendCodebase: F = false,
      extra: M,
      useV3: L
    } = e;
    let z = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig;
    let B = z == null ? undefined : z.chatId;
    let W = z == null ? undefined : z.chatType;
    let [V, Z] = reactCoreLibraryReexport.useState("");
    let [U, $] = reactCoreLibraryReexport.useState(false);
    let [G, H] = reactCoreLibraryReexport.useState("");
    let K = !!V && !gitRepoUrlValidator.isGithubUrl(V);
    let Q = !!K || !!G;
    let X = {
      from: "click",
      conversationId: W === chatConversationTypes.ConversationTypes.NewThread ? "" : B,
      uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
      botId: chatConversationBotId.getConversationBotId(B) || "",
      conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), B) || 1,
      skill_name: null,
      skill_id: "",
      chat_type: (W === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", B)) || "other_default",
      upload_way: "add_link",
      upload_collection_way: "single",
      upload_type: "github",
      upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
      upload_file_type: skillConstantsEnum.UploadFileType.UPLOAD_FILE_TYPE_LINK,
      collection_name: "",
      collection_id: ""
    };
    let {
      conversationId: J
    } = chatFeedStoreFactory.useFeedStore(e => {
      var n;
      if (B) {
        return {
          conversationId: ((n = e.localConversationMap[B]) === null || n === undefined ? undefined : n.local?.newConversationId) || B
        };
      } else {
        return {
          conversationId: ""
        };
      }
    }, deepEqualityUtil_1.isDeepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      if (gitRepoUrlValidator.isChineseGitUrl(V)) {
        teaAnalyticsEventTracker.trackEvent("upload_status", {
          ...X,
          meta_info: JSON.stringify({
            code_link: V
          }),
          success: "false",
          error_code: "unsupport_repotype"
        });
      }
      if (gitRepoUrlValidator.isGitSshUrl(V)) {
        teaAnalyticsEventTracker.trackEvent("upload_status", {
          ...X,
          meta_info: JSON.stringify({
            code_link: V
          }),
          success: "false",
          error_code: "unsupport_repourl"
        });
      }
    }, [V]);
    let q = async function (e) {
      try {
        $(true);
        let {
          valid: t,
          errorMessage: n,
          metaInfo: i
        } = await D(e, false);
        if (t) {
          H(undefined);
        } else {
          teaAnalyticsEventTracker.trackEvent("upload_status", {
            ...X,
            meta_info: JSON.stringify(i),
            success: "false",
            error_code: "unsupport_repoprivate"
          });
          H(n);
        }
        return {
          success: t,
          metaInfo: i
        };
      } finally {
        $(false);
      }
    };
    let Y = a([R["github-modal-button"], V ? R["github-modal-button-ok"] : R["github-modal-button-okdisable"]]);
    let ee = a([R["github-modal-button"], R["github-modal-button-cancel"]]);
    let {
      sendMessage: et
    } = chatServiceContext.useChatService("chatMessageService");
    let en = async e => {
      var t;
      var n;
      let i;
      let {
        codebase_id: l = "",
        codebase_name: a = "",
        codebase_url: r = "",
        codebase_branch_name: s = ""
      } = e;
      let u = e.query || "";
      let p = {
        skill_id: chatAppEnums.SkillType.CodeAssistant.toString(),
        skill_type: chatAppEnums.SkillType.CodeAssistant
      };
      if ((await (M == null ? undefined : (t = M.onBeforeSendMessage) === null || t === undefined ? undefined : t.call(M))) === false) {
        return;
      }
      if (l) {
        i = [{
          key: l,
          type: "link",
          identifier: l,
          localKey: l,
          name: a,
          url: r,
          extra: {
            repo_id: l,
            repo_name: a,
            ref: s
          }
        }];
      }
      let m = await aiChatSkillConversationChecker.isValidSkillType(p.skill_type);
      let g = {
        scene: "sidebar_skill_click",
        sec_scene: "click_suggestedprompt_case",
        preset_prompt_type: "default_prompt",
        ...(M == null ? undefined : M.reportParams)
      };
      if (m) {
        let e = attachmentToMessageBlockTransformer.transformAttachmentsToMessageBlock({
          attachments: [{
            type: "link",
            url: r
          }],
          attachmentKeys: [l],
          attachmentStates: [{
            repoInfo: {
              id: l,
              name: a,
              ref: s,
              source: "",
              language: ""
            },
            type: "link",
            fileName: a,
            fileKey: l,
            uploadPercent: 0,
            status: receiveMessageBoxStatus.messageBoxStatus.Uploading
          }]
        });
        await chatMessageSender_1.sendChatMessage({
          text: u,
          conversationId: J,
          attachmentBlock: e,
          reportParams: g,
          messageExt: {
            send_from_skill_guidance_or_suggestion: "1"
          }
        });
      } else {
        et([{
          text: u,
          sendAttachments: i,
          reportParams: g,
          extraExt: {
            useSamanthaChat: "true",
            input_skill: JSON.stringify(p),
            send_from_skill_guidance_or_suggestion: "1"
          }
        }]);
      }
      teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
        ...X,
        content_detail: e.item_type === chatAiConstants.codeFeatureType.CodeBase ? e.codebase_descirption : e.query,
        genre: e.item_type === chatAiConstants.codeFeatureType.CodeBase ? "github" : "query"
      });
      if (l && i) {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel({
          messageId: "",
          conversationId: "",
          canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY,
          fileKey: l,
          attachments: [{
            key: l,
            type: "link",
            identifier: l,
            local_key: l,
            name: a,
            url: r,
            repo_id: l
          }],
          isCodeFile: true,
          chatId: B,
          teaCtx: {
            skillType: chatAppEnums.SkillType.CodeAssistant
          }
        }));
      }
      if (M != null && (n = M.sendGithubPopoverClickEvent) !== null && n !== undefined) {
        n.call(M, "repo", e.codebase_descirption);
      }
      o(true);
    };
    let ei = reactCoreLibraryReexport.useCallback(() => {
      var e;
      o(false);
      if (M != null && (e = M.sendGithubPopoverClickEvent) !== null && e !== undefined) {
        e.call(M, "close");
      }
    }, []);
    let el = reactCoreLibraryReexport.useCallback(e => {
      var t;
      o(e);
      if (M != null && (t = M.sendGithubPopoverClickEvent) !== null && t !== undefined) {
        t.call(M, "cancel");
      }
    }, []);
    let eo = reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("p", {
        className: a(R["github-modal-desc"]),
        children: I("cici_web_ai_coding_repo_upload_explanation")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: R["github-modal-link-input-wrapper"],
        children: reactJsxRuntimeCoreReexport.jsx("input", {
          className: a(R["github-modal-link-input"], Q && R.error),
          placeholder: I("cici_web_ai_coding_input_repo_link"),
          onChange: e => {
            Z(e.target.value);
          },
          autoFocus: true
        })
      }), F && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: R["github-recommend-list"],
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: R["github-recommend-title"],
          children: I("web_ai_coding_repo_popup_repolist_title")
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: R["github-recommend-codebases"],
          children: A == null ? undefined : A.map((e, t) => reactJsxRuntimeCoreReexport.jsxs("span", {
            className: R["github-recommend-codebase"],
            children: [reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_3.RtlIcon, {
              className: R["github-icon"]
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              onClick: () => {
                if (en != null) {
                  en(e);
                }
              },
              children: e == null ? undefined : e.codebase_descirption
            })]
          }))
        })]
      }), Q && reactJsxRuntimeCoreReexport.jsx("div", {
        className: R["github-modal-link-input-error-tip"],
        children: reactJsxRuntimeCoreReexport.jsx("p", {
          children: G || I("cici_web_ai_coding_repo_limit")
        })
      })]
    });
    if (L) {
      return reactJsxRuntimeCoreReexport.jsx(alertDialogComponents.AlertDialogWrapper, {
        open: true,
        children: reactJsxRuntimeCoreReexport.jsxs(alertDialogComponents.AlertDialogRoot, {
          onEscapeKeyDown: ei,
          className: "z-[1200] flex flex-col",
          children: [reactJsxRuntimeCoreReexport.jsx(alertDialogComponents.AlertDialogHeader, {
            title: t || I("cici_web_ai_coding_repo_upload"),
            showCloseIcon: true,
            onClickCloseIcon: ei
          }), eo, reactJsxRuntimeCoreReexport.jsxs(alertDialogComponents.AlertDialogFooter, {
            className: "flex items-center justify-end gap-12",
            children: [reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
              variant: "rectangle",
              color: "grey-outline",
              onClick: () => el(false),
              className: "min-w-80",
              children: I("cancel")
            }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
              className: "min-w-80",
              variant: "rectangle",
              color: "brand-filled",
              onClick: async () => {
                var e;
                let {
                  success: t,
                  metaInfo: i
                } = await q(V);
                if (t) {
                  n(V, JSON.stringify(i));
                  if (M != null && (e = M.sendGithubPopoverClickEvent) !== null && e !== undefined) {
                    e.call(M, "add_link");
                  }
                }
              },
              disabled: !V || K,
              loading: U,
              children: I("cici_web_ai_coding_add_repo_btn")
            })]
          })]
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
        title: t || I("cici_web_ai_coding_repo_upload"),
        visible: true,
        centered: true,
        onCancel: ei,
        maskClosable: true,
        footer: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            className: ee,
            type: "tertiary",
            onClick: () => el(false),
            children: I("cancel")
          }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            type: "primary",
            loading: U,
            disabled: !V || K,
            className: Y,
            style: {
              color: "fff"
            },
            onClick: async () => {
              var e;
              let {
                success: t,
                metaInfo: i
              } = await q(V);
              if (t) {
                n(V, JSON.stringify(i));
                if (M != null && (e = M.sendGithubPopoverClickEvent) !== null && e !== undefined) {
                  e.call(M, "add_link");
                }
              }
            },
            children: I("cici_web_ai_coding_add_repo_btn")
          })]
        }),
        okButtonProps: {
          loading: U,
          disabled: !V || K,
          className: Y,
          style: {
            color: "fff"
          }
        },
        className: a(R["github-modal-wrapper"], O),
        cancelButtonProps: {
          className: ee
        },
        okText: I("cici_web_ai_coding_add_repo_btn"),
        children: eo
      });
    }
  }
  require.d(exports, {
    GithubRepoModal: function () {
      return I;
    }
  });
}