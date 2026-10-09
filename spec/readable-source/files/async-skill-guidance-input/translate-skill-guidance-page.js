// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'TranslateGuidanceSkillInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: translate-skill-guidance-page.ef1836c4.js
         * chunkId: 29337
         * moduleId: 923423
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatAsrButtonHook = require("chat-asr-button-hook") /*id: 370968*/;
  var chatSkillPluginSymbols = require("chat-skill-plugin-symbols") /*id: 886094*/;
  var translateLanguageSelectorPluginIdentifier_1 = require("translate-language-selector-plugin-identifier_1") /*id: 696529*/;
  var skillGuidanceInputContainer = require("skill-guidance-input-container") /*id: 216652*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var selectSkillBtnPluginId = require("select-skill-btn-plugin-id") /*id: 730494*/;
  var asrToolButtonSymbol = require("asr-tool-button-symbol") /*id: 100129*/;
  var skillToolButtonRenderer = require("skill-tool-button-renderer") /*id: 812051*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var translateLanguageSelectorPluginIdentifier = require("translate-language-selector-plugin-identifier") /*id: 193586*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var translateSkillLangUtils = require("translate-skill-lang-utils") /*id: 226897*/;
  var chatTranslateSkillService = require("chat-translate-skill-service") /*id: 437553*/;
  var chatInputSkillKeydownHandler = require("chat-input-skill-keydown-handler") /*id: 299053*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var useLocalStorageHook = require("use-local-storage-hook") /*id: 296239*/;
  var chatInputGuidanceStore = require("chat-input-guidance-store") /*id: 976175*/;
  let C = "translate-send-msg-button";
  let T = e => {
    let {
      chatId: n,
      chatType: a,
      skill: r,
      trackParams: i,
      reportParams: o,
      isToolButtonSmall: u,
      onKeyDown: c,
      onBeforeSendMessage: d,
      onAfterSendMessage: g
    } = e;
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let [f] = useLocalStorageHook.useLocalStorage("translate_input_target_lang", "");
    let {
      sendMessage: m
    } = chatTranslateSkillService.translateService();
    let T = i18nextLanguageGetter.getCurrentLanguage();
    let j = {
      language_loc: p("flow_web_ext_action_popup_autodetect"),
      language: "",
      value: "",
      language_code: "auto",
      is_default: true
    };
    let {
      editorValue: R,
      translateText: $,
      editorFocused: F,
      setEditorValue: M,
      setEditorFocused: P
    } = chatInputGuidanceStore.chatInputStore(e => ({
      editorValue: e.guidanceEditorValue,
      translateText: inputToolConverter.extractText(e.guidanceEditorValue.data),
      editorFocused: e.guidanceEditorFocused,
      setEditorValue: e.updateGuidanceEditorValue,
      setEditorFocused: e.updateGuidanceEditorFocused
    }), deepEqualityUtil_1.isDeepEqual);
    let {
      config: W
    } = chatInputGuidanceStore.useGuidanceConfig();
    let V = reactCoreLibraryReexport.useMemo(() => f || T, []);
    let Z = reactCoreLibraryReexport.useMemo(() => ((W == null ? undefined : W.language) || []).map(e => ({
      ...e,
      is_default: e.language_code === V
    })), [V, !!(W == null ? undefined : W.language)]);
    let I = (Z == null ? undefined : Z.length) ? [j, ...Z] : [];
    let [B, L] = reactCoreLibraryReexport.useState(j.language_code);
    let [D, O] = reactCoreLibraryReexport.useState(translateSkillLangUtils.resolveLanguageCode(Z, f || T) ?? "");
    reactCoreLibraryReexport.useEffect(() => {
      O(translateSkillLangUtils.resolveLanguageCode(Z, f || T) ?? "");
    }, [f, Z, T]);
    let J = reactCoreLibraryReexport.useRef(null);
    let U = async e => {
      if ((await (d == null ? undefined : d())) === false || !$.trim()) {
        return;
      }
      let t = translateSkillLangUtils.getLanguageValue(I, B);
      let l = translateSkillLangUtils.getLanguageValue(Z, D);
      let a = translateSkillLangUtils.getLanguageLoc(I, B);
      let r = translateSkillLangUtils.getLanguageLoc(Z, D);
      await m({
        translateText: $,
        sourceLangValue: t,
        targetLangValue: l,
        sourceLangName: a,
        targetLangName: r,
        chatId: n || "",
        reportParams: o
      });
      teaAnalyticsEventTracker.trackEvent("skill_module_click_arrow", {
        ...i,
        source_lang: B,
        target_lang: D,
        prompts_content: e,
        upload_collection_way: "",
        collection_name: "",
        upload_file_type: "",
        upload_token_length: ""
      });
      q();
      chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(n || "");
      M({
        data: []
      });
      if (g != null) {
        g();
      }
    };
    let q = e => {
      chatSkillExitEventTracker.trackSkillExitEvent({
        exitScene: e,
        trackParams: {
          ...i,
          prompts_content: $,
          upload_collection_way: "",
          collection_name: "",
          upload_file_type: "",
          upload_token_length: ""
        }
      });
    };
    let X = e => {
      O(e);
    };
    let {
      handleKeyDown: z
    } = chatInputSkillKeydownHandler.useChatInputSkillKeyHandler({
      editorValue: R,
      onResetEditorValue: () => M({
        data: []
      }),
      onSubmit: () => U($),
      onCloseSkillEvent: () => q(chatSkillExitEventTracker.EventInputTypes.Keyboard)
    });
    let G = {
      value: R,
      rows: 1,
      placeholder: p("skill_translate_input_placeholder"),
      autoFocus: true,
      autoComplete: "off",
      onKeyDown: async e => {
        await (c == null ? undefined : c(e));
        z(e);
      },
      onChange: M,
      onFocus: () => {
        P(true);
      },
      onBlur: () => {
        P(false);
      }
    };
    let K = {
      small: u,
      sendMessageClassName: C,
      disableToSend: $.trim() === "",
      onClickSendButton: () => U($)
    };
    let A = {
      skillType: r == null ? undefined : r.skill_type
    };
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      var t;
      if (F) {
        if ((e = J.current) !== null && e !== undefined) {
          e.focus();
        }
      } else if ((t = J.current) !== null && t !== undefined) {
        t.blur();
      }
    }, [F]);
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("skill_module_show", {
        ...i,
        origin_content_type: "message"
      });
      P(true);
      return () => {
        M({
          data: []
        });
      };
    }, []);
    return {
      editorRef: J,
      editorProps: G,
      sendBtnProps: K,
      toolButtonProps: {
        type: "editor",
        chatId: n,
        chatType: a,
        isToolButtonSmall: u,
        getValue: () => R,
        onUpdateValue: M,
        skill: r,
        trackParams: i
      },
      onCheckLoadSuccess: () => !!document.querySelector(`.${C}`),
      loadSuccessReportParams: A,
      closeEvent: q,
      languageSelectProps: {
        handleSourceLanguageChange: e => {
          L(e);
        },
        handleTargetLanguageChange: X,
        sourceLang: B,
        targetLang: D,
        targetLanguageList: Z,
        sourceLanguageList: I,
        value: D,
        onChange: X
      }
    };
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let R = e => {
    let {
      chatId: t
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId || ""
      };
    });
    let {
      editorRef: n,
      languageSelectProps: h,
      closeEvent: v,
      toolButtonProps: k,
      sendBtnProps: x,
      ...w
    } = T({
      ...e,
      chatId: t
    });
    let y = chatResponsiveSize.useChatScreenSize({
      sm: 399,
      md: 899
    });
    let S = () => v(chatSkillExitEventTracker.EventInputTypes.Click);
    let E = {
      type: "textarea",
      chatId: t,
      chatType: e.chatType,
      scene: e.scene,
      skill: e.skill,
      trackParams: e == null ? undefined : e.trackParams,
      onClickExitButton: S,
      ...h
    };
    let {
      skillToolUIV2: b
    } = chatLauncherConfigHooks.useSkillToolLayout(e.scene);
    let N = reactCoreLibraryReexport.useMemo(() => {
      let t = [];
      if (b && e.showExitSkillButton) {
        t.push(chatSkillPluginSymbols.exitSkillPluginSym);
      }
      t.push(b ? translateLanguageSelectorPluginIdentifier.translateLanguageSelectorPluginIdentifier : translateLanguageSelectorPluginIdentifier_1.translateLanguageSelectorPluginIdentifier, selectSkillBtnPluginId.selectSkillBtnId);
      return t;
    }, [b]);
    if (!e.skill) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "[TranslateGuidanceSkillInput]: skill_not_found",
        error: Error("[TranslateGuidanceSkillInput]: skill_not_found")
      });
      return null;
    }
    let {
      customButton: C,
      disableRightTools: R
    } = chatAsrButtonHook.useChatAsrButton({
      scene: e.scene,
      skill: e.skill,
      temporaryShow: x.disableToSend && !e.disabled,
      onUpdateValue: k.onUpdateValue,
      getValue: k.getValue,
      onStopSubmit: () => x.onClickSendButton()
    });
    return reactJsxRuntimeCoreReexport.jsx(skillGuidanceInputContainer.SkillGuidanceInput, {
      ref: n,
      className: e.className,
      testId: "translate_chat_input_panel",
      scene: e.scene,
      ...w,
      enableDragUpload: true,
      leftTools: reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButtonList, {
        toolButtonProps: E,
        list: N,
        small: e.isToolButtonSmall
      }),
      rightTools: y === "sm" || R ? null : reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButton, {
        identifier: asrToolButtonSymbol.asrToolButtonSymbol,
        ...k
      }),
      sendBtnProps: x,
      rightSendBtn: C,
      onClickExitButton: S,
      showExitSkillButton: e.showExitSkillButton,
      exitSkillButtonTheme: e.exitSkillButtonTheme
    });
  };
  require.d(exports, {
    TranslateGuidanceSkillInput: function () {
      return R;
    }
  });
}