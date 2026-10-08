// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'MessageFeedbackCard'
// - Renamed export 'Z' to 'useMessageFeedback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 992792
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var s = clipboardCopyHelper;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var localRegenCheck = require("local-regen-check") /*id: 965069*/;
  var extractCollectionIdUtil = require("extract-collection-id-util") /*id: 740633*/;
  var messageFeedbackStateUpdate = require("message-feedback-state-update") /*id: 194772*/;
  var submitMessageFeedback = require("submit-message-feedback") /*id: 535134*/;
  var checkLastSectionId = require("check-last-section-id") /*id: 320509*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_2 = require("conversation-message-utils_2") /*id: 149246*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var viewReportContextHook = require("view-report-context-hook") /*id: 515049*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let M = () => false;
  let P = e => {
    storageWrapperWithFallback.LocalStorageWrapper.setItem("feedBackShowTime", String(e));
  };
  var feedbackReportModalLoader = require("feedback-report-modal-loader") /*id: 25486*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var $ = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M9 10.395V20.5h8.557a1 1 0 0 0 .98-.797l1.774-8.576A.937.937 0 0 0 19.393 10h-3.659a2.177 2.177 0 0 1-2.093-2.775L14.678 3.6a.736.736 0 0 0-1.342-.576zM7 11v9.5H5a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1zM5 9a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h12.557a3 3 0 0 0 2.938-2.392l1.774-8.576A2.937 2.937 0 0 0 19.393 8h-3.659a.177.177 0 0 1-.17-.225l1.037-3.627a2.736 2.736 0 0 0-4.989-2.139L7.5 9z",
      clipRule: "evenodd"
    })
  }), {}));
  var B = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M15 13.605V3.5H6.443a1 1 0 0 0-.98.797L3.69 12.873A.937.937 0 0 0 4.607 14h3.659a2.177 2.177 0 0 1 2.093 2.775l-1.037 3.627a.736.736 0 0 0 1.342.575zM17 13V3.5h2a1 1 0 0 1 1 1V12a1 1 0 0 1-1 1zm2 2a3 3 0 0 0 3-3V4.5a3 3 0 0 0-3-3H6.443a3 3 0 0 0-2.938 2.392l-1.774 8.576A2.937 2.937 0 0 0 4.607 16h3.659c.117 0 .202.112.17.225l-1.037 3.627a2.736 2.736 0 0 0 4.989 2.139L16.5 15z",
      clipRule: "evenodd"
    })
  }), {}));
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var G = classnamesUtils;
  var semiTextareaComponent = require("semi-textarea-component") /*id: 252810*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var noteOutlinedIcon = require("note-outlined-icon") /*id: 356739*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  require("button-component-export") /*id: 576887*/;
  var z = {
    container: "container-v3TEhZ",
    "checked-theme-full": "checked-theme-full-K_Ln72",
    checkedThemeFull: "checked-theme-full-K_Ln72",
    checked: "checked-xjTQNk",
    "checked-theme-solid": "checked-theme-solid-m5hlbH",
    checkedThemeSolid: "checked-theme-solid-m5hlbH",
    icon: "icon-RgHPZH",
    text: "text-DpjGRj"
  };
  let V = e => {
    let {
      className: t,
      style: n,
      unCheckedClassName: i,
      onClick: r,
      icon: o,
      checked: a = false,
      children: l,
      checkedTheme: s = "full",
      ...d
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: G(z.container, t, !a && i, z[`checked-theme-${s}`], {
        [z.checked]: a
      }),
      style: n,
      onClick: r,
      "data-checked": a,
      ...d,
      children: [o && reactJsxRuntimeCoreReexport.jsx("div", {
        className: z.icon,
        children: o
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: z.text,
        children: l
      })]
    });
  };
  var X = {
    container: "container-tLWT3m",
    "title-bar": "title-bar-pgYIhh",
    title: "title-qkhzgn",
    text: "text-x8UVjM",
    copy_feedback_id_button: "copy_feedback_id_button-MgO5AA",
    close: "close-sf37wH",
    "options-bar": "options-bar-AXUY4e",
    "left-side": "left-side-i5uC1w",
    options: "options-iTA1x2",
    item: "item-RTmlIk",
    unchecked: "unchecked-Tc2ALZ",
    input: "input-k7_YhC",
    inner: "inner-znrq8_",
    "right-side": "right-side-ZaJYFP",
    submit: "submit-mOMogo",
    divider: "divider-ZUdu8q"
  };
  let q = e => {
    let {
      className: t,
      style: n,
      title: i,
      options: r,
      onFeedback: a,
      onClose: l,
      onCopyFeedbackId: s,
      copyText: d,
      submitText: c = "Submit",
      textInputPlaceholder: u = "Tell us more about your experience",
      ...v
    } = e;
    let [p, f] = reactCoreLibraryReexport.useState([]);
    let m = p.some(e => r.find(t => t.key === e && t.showInputWhenSelected));
    let [g, h] = reactCoreLibraryReexport.useState("");
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: G(X.container, t),
      style: n,
      "data-testid": "message_feedback_post_panel",
      ...v,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: X["title-bar"],
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: X.title,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: X.text,
            children: i
          })
        }), s ? reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          className: X.copy_feedback_id_button,
          type: "quartary",
          size: "small",
          icon: reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {
            className: "text-14"
          }),
          onClick: s,
          children: d
        }) : null, s ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: X.divider
        }) : null, reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
          className: X.close,
          onClick: l,
          "data-testid": "message_feedback_close_button"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: X["options-bar"],
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: X["left-side"],
          children: [r.length ? reactJsxRuntimeCoreReexport.jsx("div", {
            className: X.options,
            children: r.map(e => {
              let {
                title: t,
                key: n
              } = e;
              let i = p.includes(n);
              return reactJsxRuntimeCoreReexport.jsx(V, {
                className: X.item,
                unCheckedClassName: X.unchecked,
                checked: i,
                checkedTheme: "solid",
                onClick: () => {
                  if (i) {
                    f(p.filter(e => e !== n));
                  } else {
                    f([...p, n]);
                  }
                },
                "data-testid": "message_feedback_option_item",
                children: t
              }, n);
            })
          }) : null, m && reactJsxRuntimeCoreReexport.jsx("div", {
            className: X.input,
            children: reactJsxRuntimeCoreReexport.jsx(semiTextareaComponent.TextArea, {
              className: X.inner,
              value: g,
              onChange: h,
              placeholder: u,
              borderless: true,
              autosize: {
                minRows: 1,
                maxRows: 5
              },
              "data-testid": "message_feedback_input"
            })
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: X["right-side"],
          children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            className: X.submit,
            onClick: () => {
              if (a != null) {
                a({
                  text: g || undefined,
                  options: p
                });
              }
            },
            disabled: !p.length,
            "data-testid": "message_feedback_submit_button",
            size: "small",
            children: c
          })
        })]
      })]
    });
  };
  var useDebounceCallbackHook_1_1 = require("use-debounce-callback-hook_1_1") /*id: 420834*/;
  let Y = e => {
    let {
      className: t,
      style: n,
      title: i = "Thank you for helping us become better",
      onClose: r
    } = e;
    useDebounceCallbackHook_1_1.useDebounceCallback(() => {
      if (r != null) {
        r();
      }
    }, 1000);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: G("container-VPQc38", t),
      style: n,
      "data-testid": "message_feedback_finished_panel",
      children: i
    });
  };
  (i = Q || {})[i.CheckStep = 0] = "CheckStep";
  i[i.SatisfiedPostStep = 1] = "SatisfiedPostStep";
  i[i.UnsatisfiedPostStep = 2] = "UnsatisfiedPostStep";
  i[i.Finished = 3] = "Finished";
  var Q = i;
  let ee = e => isUndefinedCheck.isUndefined(e) ? Q.CheckStep : e ? Q.SatisfiedPostStep : Q.UnsatisfiedPostStep;
  let et = e => {
    let {
      className: t,
      style: n,
      satisfyingTitle: i = "What did you find satisfying?",
      unsatisfyingTitle: r = "What did you find unsatisfying?",
      submitText: a,
      copyText: l,
      textInputPlaceholder: s,
      feedbackFinishTitle: d,
      defaultFeedbackChecked: c,
      onClose: u,
      satisfiedOptions: v,
      unsatisfiedOptions: p,
      onSatisfiedFeedback: f,
      onUnsatisfiedFeedback: m,
      onCopyFeedbackId: g
    } = e;
    let [h, _] = reactCoreLibraryReexport.useState(ee(c));
    let b = e => {
      _(ee(e));
    };
    reactUseUpdateEffect.useUpdateEffect(() => {
      b(c);
    }, [c]);
    if (h === Q.SatisfiedPostStep || h === Q.UnsatisfiedPostStep) {
      let e = h === Q.SatisfiedPostStep;
      return reactJsxRuntimeCoreReexport.jsx(q, {
        className: t,
        style: n,
        icon: e ? reactJsxRuntimeCoreReexport.jsx($, {}) : reactJsxRuntimeCoreReexport.jsx(B, {}),
        title: e ? i : r,
        copyText: l,
        submitText: a,
        textInputPlaceholder: s,
        onFeedback: t => {
          _(Q.Finished);
          if (e) {
            if (f != null) {
              f(t);
            }
          } else if (m != null) {
            m(t);
          }
        },
        onCopyFeedbackId: g,
        onClose: u,
        options: e ? v : p,
        "data-type": e ? "like" : "dislike"
      });
    }
    if (h === Q.Finished) {
      return reactJsxRuntimeCoreReexport.jsx(Y, {
        className: t,
        style: n,
        title: d,
        onClose: u
      });
    } else {
      return null;
    }
  };
  var chatFeedbackReportHooks = require("chat-feedback-report-hooks") /*id: 952134*/;
  (r = {}).Direct = "direct";
  r.WeeklyDisabled = "weekly_disabled";
  r.PermanentDisabled = "permanent_disabled";
  let ei = r;
  let er = e => {
    let {
      className: t,
      style: n,
      onClose: i,
      onCopyFeedbackId: r,
      defaultFeedbackChecked: o,
      message: a
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let {
      presetOptions: s
    } = chatFeedbackReportHooks.useUnlikeFeedback();
    let {
      presetOptions: u
    } = chatFeedbackReportHooks.useLikeFeedback();
    let {
      imageLikeOptions: v,
      imageUnlikeOptions: f
    } = chatFeedbackReportHooks.useImageFeedback();
    let m = (e, t) => {
      let {
        options: n,
        text: i
      } = t;
      let r = eventReportingService.createEventReporter({
        eventName: "message_report_new"
      });
      let o = e ? u : s;
      teaAnalyticsEventTracker.trackEvent("complete_feedback_reason", {
        bot_id: a == null ? undefined : a.bot_id,
        message_id: a == null ? undefined : a.message_id,
        if_regenerated: +!!localRegenCheck.shouldRegenerate(a),
        feedback_type: e ? "like" : "dislike",
        feedback_content: `${n.map(e => {
          return o.find(t => t.value === e)?.text;
        }).join(", ")}, ${i}`
      });
      submitMessageFeedback.sendMessageFeedback({
        conversationId: a.conversation_id || "",
        messageId: a.message_id || "",
        detail: {
          feedback_type: e ? messagingConstants.feedbackType.Like : messagingConstants.feedbackType.Unlike,
          feedback_detail_content: i,
          feedback_detail_types: n
        },
        reportEvent: r
      });
    };
    return reactJsxRuntimeCoreReexport.jsx(et, {
      className: t,
      style: n,
      satisfyingTitle: l("answer_feedback_like_title"),
      unsatisfyingTitle: l("answer_feedback_dislike_title"),
      submitText: l("feedback_submit_button"),
      textInputPlaceholder: l("answer_feedback_input_placeholder"),
      feedbackFinishTitle: l("answer_feedback_submitted_info"),
      copyText: l("cc_mob_feedback_bottomSheet_button_copy"),
      defaultFeedbackChecked: o,
      satisfiedOptions: messageContentTypeAndStatusChecker.qP0(a) || messageContentTypeAndStatusChecker.dqg(a) ? v : u.map(e => {
        let {
          text: t,
          value: n
        } = e;
        return {
          title: t,
          key: n,
          showInputWhenSelected: n === 8
        };
      }),
      unsatisfiedOptions: messageContentTypeAndStatusChecker.qP0(a) || messageContentTypeAndStatusChecker.dqg(a) ? f : s.map(e => {
        let {
          text: t,
          value: n
        } = e;
        return {
          title: t,
          key: n,
          showInputWhenSelected: n === 4
        };
      }),
      onSatisfiedFeedback: e => m(true, e),
      onUnsatisfiedFeedback: e => m(false, e),
      onCopyFeedbackId: r,
      onClose: () => i == null ? undefined : i(ei.Direct)
    });
  };
  var debugTokenGenerator = require("debug-token-generator") /*id: 419751*/;
  let ea = e => {
    let {
      message: t,
      trackParams: n
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let {
      locationState: r
    } = chatContextUtil.useChatContext({
      optionalProvider: true
    });
    let l = t.conversation_id || "";
    let s = t.message_id || "";
    let v = t.bot_id || "";
    let j = checkLastSectionId.isLastSection(t);
    let O = conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), t.conversation_id || "", t.message_id || "");
    let P = O && j;
    let L = messageContentTypeAndStatusChecker.C_i(t);
    let [D, $] = reactCoreLibraryReexport.useState({
      visible: false,
      click_from: undefined,
      if_regenerated: Number(localRegenCheck.shouldRegenerate(t)),
      isLyricMusic: L
    });
    let B = !isUndefinedCheck.isUndefined(t.feedback) && t.feedback !== messagingConstants.feedbackType.Default;
    let {
      liked: F,
      disliked: G,
      detail: H
    } = conversationMessageUtils_2.useMessageFeedback(l, s);
    let {
      hasCanceledFeedback: U = false
    } = H;
    let {
      botInfo: K
    } = chatSkillPinTypeDeterminer.getConversationBotInfo(l);
    let [W, z] = reactCoreLibraryReexport.useState(!B && !U && M());
    let {
      collectionType: V,
      collectionId: X
    } = viewReportContextHook.useViewContext();
    let q = (r == null ? undefined : r.enter_from) === "bot_discover";
    let J = chatConversationBotId.getConversationBotId(l);
    let Y = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), (t == null ? undefined : t.conversation_id) || "", {
      messageId: (t == null ? undefined : t.reply_id) || "",
      isLocalMessage: false
    });
    let Q = async () => {
      let e = eventReportingService.createEventReporter({
        eventName: "feedback_disLike"
      });
      let t = !G;
      if (t) {
        z(true);
      }
      let i = {
        feedback_type: t ? messagingConstants.feedbackType.Unlike : messagingConstants.feedbackType.Default
      };
      if (t) {
        let e = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), l, {
          messageId: s,
          isLocalMessage: false
        });
        let t = await chatIocServiceLoaderHook.loadServiceAsync("chatBotService");
        teaAnalyticsEventTracker.trackEvent("dislike", {
          bot_id: J,
          if_regenerated: Number(localRegenCheck.shouldRegenerate(e)),
          message_id: s,
          click_from: O ? "answer" : "long_press_message",
          user_id: q ? chatUserInfoActions.getUserIdStr() : undefined,
          req_id: q && J ? t == null ? undefined : t.getBotIdToRequestIdMap()?.[J] : undefined,
          chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", l, K),
          recommend_from: q ? "bot_list_discover" : undefined,
          collection_id: extractCollectionIdUtil.getCollectionId(Y).collection_id,
          skill_id: e == null ? undefined : e.skill?.skill_id_no_default,
          ...n,
          ...(X ? {
            collect_id: X,
            collect_type: V
          } : {})
        });
        let {
          allow_unauthorized_decryption: i
        } = (await chatFgStoreHooks.fetchSourceKey("feedback", {
          source: chatStorageKeys.chatStorageKeys.tcc,
          defaultValue: {
            allow_unauthorized_decryption: false
          }
        })) ?? {
          allow_unauthorized_decryption: false
        };
        if (e && i) {
          await debugTokenGenerator.generateDebugTokens(e, debugTokenGenerator.DebugActionType.Report);
        }
      }
      submitMessageFeedback.sendMessageFeedback({
        detail: i,
        messageId: s,
        conversationId: l,
        reportEvent: e
      });
    };
    let ee = async e => {
      let {
        click_from: o
      } = e || {};
      let a = await chatIocServiceLoaderHook.loadServiceAsync("chatBotService");
      if (s) {
        teaAnalyticsEventTracker.trackEvent("report", {
          message_id: s,
          click_from: P ? "answer" : "long_press_message",
          bot_id: J,
          user_id: q ? chatUserInfoActions.getUserIdStr() : undefined,
          req_id: q && J ? a == null ? undefined : a.getBotIdToRequestIdMap()?.[J] : undefined,
          chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", l, K),
          recommend_from: q ? "bot_list_discover" : undefined,
          ...n
        });
      } else {
        teaAnalyticsEventTracker.trackEvent("report_bot", {
          bot_id: J,
          user_id: q ? chatUserInfoActions.getUserIdStr() : undefined,
          req_id: q && J ? a == null ? undefined : a.getBotIdToRequestIdMap()?.[J] : undefined,
          recommend_from: q ? "bot_list_discover" : undefined,
          ...n
        });
      }
      $({
        visible: true,
        click_from: o,
        if_regenerated: Number(localRegenCheck.shouldRegenerate(t)),
        isLyricMusic: L
      });
    };
    let et = messageContentTypeAndStatusChecker.G7Q(t);
    let en = messageContentTypeAndStatusChecker.pp8(t);
    let ei = messageContentTypeAndStatusChecker.mT2(t);
    let er = messageContentTypeAndStatusChecker.lpb(t);
    let ea = messageContentTypeAndStatusChecker.qP0(t);
    let el = messageContentTypeAndStatusChecker.ZRq(t);
    let es = messageContentTypeAndStatusChecker.tK5(t);
    let ed = messageContentTypeAndStatusChecker.RF2(t);
    let ec = messageContentTypeAndStatusChecker.vlk(t);
    let eu = messageContentTypeAndStatusChecker.cnd(t);
    return {
      liked: F,
      disliked: G,
      onLikeClick: () => {
        let e = X ? {
          collect_id: X,
          collect_type: V
        } : {};
        let t = eventReportingService.createEventReporter({
          eventName: "feedback_like"
        });
        let i = !F;
        let r = {
          feedback_type: i ? messagingConstants.feedbackType.Like : messagingConstants.feedbackType.Default
        };
        if (i) {
          z(true);
        }
        if (i) {
          let t = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), l, {
            messageId: s,
            isLocalMessage: false
          });
          (async () => {
            let o = await chatIocServiceLoaderHook.loadServiceAsync("chatBotService");
            teaAnalyticsEventTracker.trackEvent("like", {
              bot_id: J,
              message_id: s,
              if_regenerated: Number(localRegenCheck.shouldRegenerate(t)),
              click_from: O ? "answer" : "long_press_message",
              user_id: q ? chatUserInfoActions.getUserIdStr() : undefined,
              req_id: q && J ? o == null ? undefined : o.getBotIdToRequestIdMap()?.[J] : undefined,
              chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", l, K),
              recommend_from: q ? "bot_list_discover" : undefined,
              collection_id: extractCollectionIdUtil.getCollectionId(Y).collection_id,
              skill_id: t == null ? undefined : t.skill?.skill_id_no_default,
              ...n,
              ...e
            });
          })();
        }
        submitMessageFeedback.sendMessageFeedback({
          detail: r,
          messageId: s,
          conversationId: l,
          reportEvent: t
        });
      },
      onDislikeClick: Q,
      feedbackCardCanVisible: W && (et || en || ei || er || ea || eu) && !!messageContentUtils.formatMessage(t, undefined, i("chat_unsupported_message_type")) && !messageContentTypeAndStatusChecker.hWN(t) && !messageContentTypeAndStatusChecker.Kzj(t) && P && (el || es) && !ed && !ec,
      onCloseFeedbackCard: () => z(false),
      onBotOrMessageReportClick: ee,
      renderReportDialog: () => D.visible ? reactJsxRuntimeCoreReexport.jsx(feedbackReportModalLoader.FeedbackReportModal, {
        entityId: s || v,
        messageId: s,
        conversationId: l,
        exts: D,
        onHide: () => $({
          visible: false
        }),
        locationState: r,
        t: i
      }) : null
    };
  };
  let el = e => {
    let {
      feedbackCardCanVisible: n,
      onCloseFeedbackCard: i,
      message: r
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let a = r.conversation_id || "";
    let l = r.message_id || "";
    let {
      liked: d,
      disliked: c
    } = conversationMessageUtils_2.useMessageFeedback(a, l);
    let {
      allow_unauthorized_decryption: u
    } = chatFgStoreHooks.getSourceValue("feedback", {
      source: chatStorageKeys.chatStorageKeys.tcc,
      defaultValue: {
        allow_unauthorized_decryption: false
      }
    }) ?? {
      allow_unauthorized_decryption: false
    };
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(er, {
        className: "mt-24 h-fit w-full",
        onClose: e => {
          i();
          messageFeedbackStateUpdate.setMessageFeedback({
            conversationId: a,
            messageId: l,
            detail: {
              hasCanceledFeedback: true
            }
          });
          if (e === ei.WeeklyDisabled) {
            let e = new Date();
            e.setDate(e.getDate() + 7);
            P(e.getTime());
          } else if (e === ei.PermanentDisabled) {
            P(Infinity);
          }
        },
        onCopyFeedbackId: u ? () => {
          s((r == null ? undefined : r.ext?.inner_log_id) || (r == null ? undefined : r.local_info?.log_id) || (r == null ? undefined : r.local_info?.async_task_log_id) || "");
          samanthaToastFactory.toastInstance.success({
            showClose: false,
            content: o("cc_mob_feedback_bottomSheet_toast_copied"),
            theme: "light"
          });
        } : undefined,
        defaultFeedbackChecked: !!d || !c && undefined,
        message: r
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    MessageFeedbackCard: function () {
      return el;
    },
    useMessageFeedback: function () {
      return ea;
    }
  });
}