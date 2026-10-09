// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'WebLinkInputDialog'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 989960
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var dbxDialogUiComponents = require("dbx-dialog-ui-components") /*id: 176507*/;
  var swapIcon = require("swap-icon") /*id: 755459*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var textLinkParser = require("text-link-parser") /*id: 266843*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var businessInputField = require("business-input-field") /*id: 324730*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      title: t,
      onHide: n,
      onSubmit: r
    } = e;
    let a = i18nTranslationUtils.useTranslationWithFallback();
    let [s, c] = reactCoreLibraryReexport.useState("");
    let u = urlParamUtils.validateUrl(s, {
      allowedProtocols: ["https:", "http:"]
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(dbxDialogUiComponents.DbxDialogHeaderVariants, {
        showCloseIcon: true,
        title: t,
        description: a("podcast_window_provideURL_desc")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mt-[24px]",
        children: reactJsxRuntimeCoreReexport.jsx(businessInputField.BusinessInput, {
          "data-testid": "link_input_modal_input",
          autoFocus: true,
          placeholder: a("podcast_window_provideURL_placeholder"),
          value: s,
          onChange: c,
          onKeyDown: e => {
            e.stopPropagation();
            if (e.key === "Enter" && !e.shiftKey && !e.altKey && s.trim() && u) {
              r(s);
            }
          }
        })
      }), reactJsxRuntimeCoreReexport.jsx(dbxDialogUiComponents.DbxDialogFooterVariants, {
        customCancelButton: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          "data-testid": "link_input_modal_cancel_btn",
          size: "md",
          variant: "rectangle",
          color: "grey-outline",
          onClick: n,
          className: "min-w-[80px]",
          children: a("cancel")
        }),
        customActionButton: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          "data-testid": "link_input_modal_add_link_btn",
          size: "md",
          variant: "rectangle",
          color: "brand-filled",
          onClick: () => r(s),
          disabled: !s.trim() || !u,
          className: "min-w-[80px]",
          children: a("landing_button_confirm")
        })
      })]
    });
  };
  var skillEntranceClickTrack_1 = require("skill-entrance-click-track_1") /*id: 388128*/;
  let b = e => {
    let {
      onSubmit: t,
      attachmentStates: n = []
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let [l, s] = reactCoreLibraryReexport.useState(false);
    let h = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId || "";
    });
    let f = chatStoreManager.useStoreSelector("chatInputStore", e => h ? e.activeSkillTypeMap[h] : undefined);
    let m = {
      skill_id: f == null ? undefined : f.toString(),
      skill_name: skillTypeMappings.getSkillName(f)
    };
    let b = reactFunctionMemoHook.useMemoizedCallback(() => {
      s(true);
      skillEntranceClickTrack_1.trackSkillEntrance({
        chatId: h,
        entranceType: "web_link"
      });
      teaAnalyticsEventTracker.trackEvent("pin_button_click", {
        button_name: "web_link",
        click_from: "chat_enter_bar",
        ...m
      });
    });
    let y = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (t != null) {
        t(e);
      }
      s(false);
    });
    let w = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx(v, {
      visible: l,
      title: r("podcast_window_provideURL_header"),
      onHide: () => s(false),
      onSubmit: y
    }), [l, s, t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!l) {
        let e = e => {
          let {
            clipboardData: i
          } = e;
          if (!i || n.length) {
            return;
          }
          let r = i.getData("text");
          let a = r.trim();
          let o = textLinkParser.parseTextLinks(a).find(e => e.type === textLinkParser.tokenTypes.link);
          if (o && "url" in o && r === o.url) {
            e.preventDefault();
            if (t != null) {
              t(o.url);
            }
            return;
          }
        };
        document.addEventListener("paste", e, true);
        return () => {
          document.removeEventListener("paste", e, true);
        };
      }
    }, [l, t, n]);
    return {
      handleClickButton: b,
      inputModalElement: w
    };
  };
  let y = e => {
    let {
      isOverflow: t,
      isToolButtonSmall: n,
      scene: c,
      trackParams: u,
      isAddAttachmentDisabled: d,
      attachmentStates: p = [],
      handleFileLinkChange: h
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    let m = "podcast_mainPage_btn_provideURL";
    let {
      handleClickButton: v,
      inputModalElement: _
    } = b({
      onSubmit: h,
      attachmentStates: p
    });
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("input_bar_skill_option_show", {
        ...u,
        option_label: m,
        show_position: 0,
        is_default: 0,
        is_choose_required: 0
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs(dbxDialogUiComponents.DbxDialog, {
      children: [reactJsxRuntimeCoreReexport.jsx(dbxDialogUiComponents.DbxDialogTrigger, {
        asChild: true,
        children: reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
          scene: c,
          isOverflow: t,
          small: n,
          disabled: d,
          disableTip: f("podcast_mainPage_tooltip_clear"),
          onMouseUp: () => {
            v();
            teaAnalyticsEventTracker.trackEvent("input_bar_skill_option_click", {
              ...u,
              option_label: m,
              action_type: "click_to_open",
              show_position: 0,
              is_default: 0,
              is_choose_required: 0
            });
          },
          leadingIcon: reactJsxRuntimeCoreReexport.jsx(swapIcon.SwapIcon, {}),
          children: f(m)
        })
      }), reactJsxRuntimeCoreReexport.jsx(dbxDialogUiComponents.DbxDialogContentWithOverlay, {
        className: "w-full max-w-[420px]",
        children: _
      })]
    });
  };
  require.d(exports, {
    WebLinkInputDialog: function () {
      return y;
    }
  });
}