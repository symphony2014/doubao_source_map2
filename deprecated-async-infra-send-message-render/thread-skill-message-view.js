// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KD' to 'MessageContentView'
// - Renamed export 'c9' to 'ThreadMessageItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 88008
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var refContentWrapperComponent = require("ref-content-wrapper-component") /*id: 15351*/;
  var docxCreationAgentHook = require("docx-creation-agent-hook") /*id: 933686*/;
  var threadImageTaskTypes = require("thread-image-task-types") /*id: 783900*/;
  var imageQuoteHandlerHooks = require("image-quote-handler-hooks") /*id: 536904*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var skillMessageBoxDataExtractor = require("skill-message-box-data-extractor") /*id: 179396*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var imagePreviewEventHandlerHook = require("image-preview-event-handler-hook") /*id: 810587*/;
  var businessStatusConstants = require("business-status-constants") /*id: 215311*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var imageBoxGridComponent = require("image-box-grid-component") /*id: 750824*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var spaceLayoutComponent = require("space-layout-component") /*id: 765807*/;
  var tagAvatarComponent = require("tag-avatar-component") /*id: 406406*/;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var exitToAppIcon = require("exit-to-app-icon") /*id: 703191*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let L = e => {
    let {
      className: t,
      style: n,
      quoted: i,
      onClickQuote: l,
      ...r
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: c(t, "send-hover-btn-group-wrapper-IKB04I"),
      style: n,
      ...r,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "send-hover-btn-group-inner-roOl8D",
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "btn-wrapper-NY9cmL",
          onClick: l,
          children: [i ? reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {}) : reactJsxRuntimeCoreReexport.jsx(exitToAppIcon.ExitToAppIcon, {}), o("image_btn_quote")]
        })
      })
    });
  };
  var threadImageItem = require("thread-image-item") /*id: 367969*/;
  var threadMessageStyles = require("thread-message-styles") /*id: 717766*/;
  let H = "data-quoted-image-index";
  let X = e => {
    let {
      skillTagArr: t = [],
      content: n,
      originalText: i,
      isNarrow: l,
      textContentBorderLess: o
    } = e;
    let a = t.every(e => isNullishCheck.isNil(e) || e === "");
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: c("flex flex-col gap-8"),
      children: [o ? reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageTextWithAfterNode, {
        text: n
      }) : reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
        text: n
      }), i ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
            border-0 border-t border-solid border-[rgba(0,0,0,0.12)] pt-8 pr-8
            pb-2 pl-0
          `,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: c("border-solid border-0 border-l-2 border-[rgba(0,0,0,0.12)] pl-8 font-[400] whitespace-break-spaces ml-2", `${l ? "text-12 leading-14" : "text-14 leading-18"}`),
          children: i
        })
      }) : null, !a && reactJsxRuntimeCoreReexport.jsx(spaceLayoutComponent.Space, {
        wrap: true,
        children: t.map(e => e && reactJsxRuntimeCoreReexport.jsx(tagAvatarComponent.Tag, {
          className: c("flex bg-[rgba(0,0,0,0.13)] rounded-6 pt-4 pr-8 pb-4 pl-8 gap-10", `${l ? "text-12 leading-14" : "text-14 leading-18"}`),
          "data-testid": "message_tag",
          children: e
        }, e))
      })]
    });
  };
  let J = e => {
    let {
      message: r
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let [g, M] = reactCoreLibraryReexport.useState(0);
    let [A, B] = reactCoreLibraryReexport.useState();
    let O = responsiveScreenHooks.useIsNarrowScreen();
    let {
      refImageIntoImageAttachmentEnabled: J
    } = docxCreationAgentHook.useCreationAgent();
    let U = !chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.isExpand && e.canvasLayoutState !== chatPanelModes.PanelMode.NARROW_SIDE_PANEL) && J;
    let {
      skillData: K,
      skillTagArr: q,
      messageTextContent: Q,
      editImage: G,
      refImgs: Y,
      refImgList: ee = []
    } = chatStoreManager.useStoreSelector("attachmentUploadStore", e => {
      let t = [];
      let n = [];
      let i = {};
      let l = Object.values(e.preprocessTaskMap);
      if (messageContentTypeAndStatusChecker.NB8(r) && (r == null ? undefined : r.content_obj)) {
        var d;
        var m;
        var f;
        let e = safeJsonUtils.safeParse(objectPathGetDefault.getObjectPathDefault(r.ext, ["samantha_context"]), {})?.query_context;
        i.url = ((d = r.content_obj) === null || d === undefined ? undefined : d.edit_image?.edit_image_url) || (e == null ? undefined : e.edit_image_url);
        let s = ((m = r.content_obj) === null || m === undefined ? undefined : m.edit_image?.edit_image_token) || (e == null ? undefined : e.edit_image_token);
        let p = l.findIndex(e => e.key === s);
        let h = p !== -1 ? l[p] : undefined;
        i.review_state = (h == null ? undefined : h.reviewState) || ((f = r.content_obj) === null || f === undefined ? undefined : f.edit_image?.edit_image_review_status) || (e == null ? undefined : e.edit_image_review_status) || messagingConstants.reviewState.ReviewState_Processing;
        let g = r.attachments;
        if (g) {
          t = g.map(e => {
            let n = l.findIndex(t => t.key === e.key || t.localKey === e.key);
            let i = n !== -1 ? l[n] : undefined;
            return {
              url: (i == null ? undefined : i.blobUrl) || e.url || "",
              refer_types: e.extra?.refer_types || "",
              review_state: (i == null ? undefined : i.reviewState) || (e == null ? undefined : e.file_review_state) || messagingConstants.reviewState.ReviewState_Processing
            };
          });
          n = g.map(e => ({
            key: e.key || "",
            feedback: "",
            request_id: "",
            description: ""
          }));
        }
      }
      if (!messageContentTypeAndStatusChecker.G7Q(r)) {
        return null;
      }
      let g = skillMessageBoxDataExtractor.extractSkillBoxData(r);
      let _ = [g == null ? undefined : g.template, g == null ? undefined : g.tone, g == null ? undefined : g.length, g == null ? undefined : g.language, g == null ? undefined : g.style];
      let y = messageContentUtils.formatMessage(r, undefined, s("chat_unsupported_message_type"));
      if (objectPathGetDefault.getObjectPathDefault(r.content_obj, "edit_image.ability") === threadImageTaskTypes.imageTaskTypes.Inpainting) {
        y = `${s("edit_image_prompt_inPainting")}\u{FF1A}${y}`;
      }
      return {
        skillData: g,
        skillTagArr: _,
        messageTextContent: y,
        editImage: i,
        refImgs: t,
        refImgList: n
      };
    }, deepEqualUtil_1.deepEqual) ?? {};
    let {
      imageEventCallbacks: {
        onImageClick: et
      },
      renderImagePreview: en
    } = imagePreviewEventHandlerHook.useImagePreviewEvents({
      conversationId: r.conversation_id,
      messageId: String(r == null ? undefined : r.message_id),
      chatType: chatSkillPinTypeDeterminer.determineSkillPinType("", r.conversation_id),
      conversationType: chatConversationSelectorUtils.getConversationType(r.conversation_id) || "",
      botId: chatConversationBotId.getConversationBotId(r.conversation_id) || ""
    }, ee, chatCoreConstants.MessageActions.Original);
    let ei = reactCoreLibraryReexport.useMemo(() => (Y == null ? undefined : Y.map(e => {
      return e.url ?? "";
    })) || [], [Y]);
    let el = reactCoreLibraryReexport.useMemo(() => (G == null ? undefined : G.url) ? [G == null ? undefined : G.url] : [], [G]);
    let {
      latestFileUrls: er
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: ei
    });
    let {
      latestFileUrls: eo
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: el
    });
    let {
      isRefImageKeyExist: ea,
      handleRefImage: es
    } = imageQuoteHandlerHooks.useImageQuoteHandler({
      chatId: r == null ? undefined : r.conversation_id
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (A == null ? undefined : A.key) {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => {
          teaAnalyticsEventTracker.trackEvent("image_hover_show", {
            ...(e == null ? undefined : e.getCanvasTeaParams()),
            click_from: "image_prompt_hover",
            message_id: r == null ? undefined : r.message_id,
            pic_id: A.key
          });
        });
      }
    }, [A == null ? undefined : A.key]);
    let ec = reactFunctionMemoHook.useMemoizedCallback(e => {
      es({
        imageBrief: e,
        imageQuoteFrom: "image_quote",
        entryType: "image_prompt_hover"
      });
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(t => {
        teaAnalyticsEventTracker.trackEvent("user_prompt_image_button_click", {
          ...(t == null ? undefined : t.getCanvasTeaParams()),
          button_type: "continue_edit",
          message_id: r == null ? undefined : r.message_id,
          pic_id: e.key
        });
      });
    });
    let ed = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (!(e.target instanceof HTMLElement)) {
        return;
      }
      let t = e.target.closest(`[${H}]`);
      if (t instanceof HTMLElement && e.currentTarget.contains(t)) {
        let e = t == null ? undefined : t.dataset?.quotedImageIndex;
        let i = Number(e);
        if (e && !isNaN(i)) {
          if (t.dataset.needCalcQuotedImageWidth === "1") {
            let {
              width: e
            } = t.getBoundingClientRect();
            if (typeof e == "number" && !isNaN(e)) {
              M(e);
            }
          }
          B(ee[i]);
          return;
        }
      }
      B(undefined);
    });
    if ((K == null ? undefined : K.skillType) === chatAppEnums.SkillType.WriteAssistant) {
      if ((K == null ? undefined : K.templateType) === businessStatusConstants.messageActions.Compose) {
        return reactJsxRuntimeCoreReexport.jsx(X, {
          skillTagArr: q,
          isNarrow: O,
          content: `${s("skill_writing_mode_compose")} ${K.template} ${s("skill_writing_sent_message_conjunction_word")} "${Q}"`
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx(X, {
          skillTagArr: q,
          isNarrow: O,
          content: `${s("skill_writing_mode_reply")} ${K.template} ${s("skill_writing_sent_message_conjunction_word")} "${Q}"`,
          originalText: K.originalText
        });
      }
    } else if ((K == null ? undefined : K.skillType) === chatAppEnums.SkillType.ImageGeneration) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
          flex w-fit max-w-450 min-w-0 flex-col items-start rounded-s-radius-s
          bg-s-color-bg-trans px-16 py-9 text-s-color-text-secondary s-font-base
          sm:text-15
        `,
        onMouseOver: ed,
        onMouseLeave: () => B(undefined),
        children: [(eo == null ? undefined : eo[0]) && reactJsxRuntimeCoreReexport.jsx(refContentWrapperComponent.RefContentWrapper, {
          className: "mb-8",
          text: "",
          icon: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: (G == null ? undefined : G.review_state) === messagingConstants.reviewState.ReviewState_NotCompliant ? reactJsxRuntimeCoreReexport.jsxs("div", {
              className: threadMessageStyles.threadClasses["ref-img-not-safety"],
              children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
                className: "text-32 text-s-color-text-quaternary"
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: threadMessageStyles.threadClasses["not-safety-text"],
                children: s("msg_error_image_notCompliant")
              })]
            }) : reactJsxRuntimeCoreReexport.jsx("img", {
              src: xssContentSanitizer.sanitizeUrl(eo == null ? undefined : eo[0], null, {
                logType: "js.href/src",
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4ZEZwW$RucFpWMlJz$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZEZsdE9%%k1NMD$zWW0x%mRHSXllR3RN$0Zwb1kyMXNhRmx0Z%d4T$dFNXlZ$mQ0-zB4WFRuWmlibEpzWW01%mRsa3lPWFJq%npsM$ds-zFNRXh1$W5wbFIwWj$Xak5XZWc9PQ"
              }),
              className: "ml-4",
              style: {
                height: "28px",
                width: "28px",
                borderRadius: "4px",
                objectFit: "cover"
              },
              onContextMenu: e => {
                e.preventDefault();
              }
            })
          })
        }), Y && Y.length > 1 && reactJsxRuntimeCoreReexport.jsx(imageBoxGridComponent.ImageBoxGrid, {
          className: threadMessageStyles.threadClasses["ref-image-list"],
          gridColumns: Math.min(Y.length, 3),
          imgList: er,
          children: (e, t) => {
            return reactJsxRuntimeCoreReexport.jsxs("div", {
              className: U ? "send-hover-btn-group-container-obrs6X" : undefined,
              [H]: `${t}`,
              children: [reactJsxRuntimeCoreReexport.jsx(threadImageItem.ThreadImageItem, {
                url: e,
                reviewState: Y[t]?.review_state,
                isMultiple: true,
                onClick: t => et(t, e)
              }), U && reactJsxRuntimeCoreReexport.jsx(L, {
                quoted: ea(ee[t]?.key),
                onClickQuote: () => {
                  return ec({
                    key: ee[t]?.key,
                    description: ee[t]?.description,
                    url: e
                  });
                }
              })]
            }, e);
          }
        }), (Y == null ? undefined : Y.length) === 1 && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(threadImageItem.ThreadImageItem, {
            url: er[0],
            reviewState: Y[0].review_state,
            isMultiple: false,
            [H]: "0",
            "data-need-calc-quoted-image-width": "1",
            onClick: e => {
              return et(e, Y[0].url ?? "");
            }
          }), U && !!g && reactJsxRuntimeCoreReexport.jsx(L, {
            className: c("auto-position-GUezdS", threadMessageStyles.threadClasses["single-image-hover-btn-group"]),
            style: {
              width: g
            },
            quoted: ea(ee[0]?.key),
            [H]: "0",
            onClickQuote: () => {
              return ec({
                key: ee[0]?.key,
                description: ee[0]?.description,
                url: er[0]
              });
            }
          })]
        }), reactJsxRuntimeCoreReexport.jsx(X, {
          skillType: K == null ? undefined : K.skillType,
          skillTagArr: q,
          isNarrow: O,
          content: Q ?? "",
          textContentBorderLess: true
        }), en()]
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    MessageContentView: function () {
      return X;
    },
    ThreadMessageItem: function () {
      return J;
    }
  });
}