// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'ImageSkillToolInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 574459
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var chatSkillPluginSymbols = require("chat-skill-plugin-symbols") /*id: 886094*/;
  var imageCreationPluginIds = require("image-creation-plugin-ids") /*id: 20940*/;
  var chatInputSkillCheckHook = require("chat-input-skill-check-hook") /*id: 735810*/;
  var creationAgentConfigProvider = require("creation-agent-config-provider") /*id: 798206*/;
  var selectSkillBtnPluginId = require("select-skill-btn-plugin-id") /*id: 730494*/;
  var skillToolButtonRenderer = require("skill-tool-button-renderer") /*id: 812051*/;
  var chatGuestAccessControlHooks = require("chat-guest-access-control-hooks") /*id: 874237*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFieldProcessor = require("chat-field-processor") /*id: 880637*/;
  var imageSkillStoreHook = require("image-skill-store-hook") /*id: 310175*/;
  var imageSkillStoreSelectors = require("image-skill-store-selectors") /*id: 701989*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      chatId: t,
      chatType: n,
      skill: y,
      trackParams: k,
      onSubmitFiles: w,
      multiple: b = false,
      hasImage: x,
      imageCount: S = 0,
      selectedRatio: C,
      selectedStyle: E,
      selectedModel: T,
      onSelectItem: R,
      styleAndRatioDisabled: P,
      isToolButtonSmall: N,
      onClickExitButton: j,
      showExitSkillButton: I,
      scene: M,
      popoverRef: D,
      getValue: Z,
      onUpdateValue: $
    } = e;
    let O = i18nTranslationUtils.useTranslationWithFallback();
    let [A] = imageSkillStoreHook.useImageSkillStore(e => [e.inputOptionsMap], deepEqualityUtil_1.isDeepEqual);
    let B = imageSkillStoreSelectors.useCategoryName();
    let {
      onClickGuestDisabled: F
    } = chatGuestAccessControlHooks.createGuestDisabledHandler({
      source: "image_send_message",
      checkNewGuidanceAb: true
    });
    let W = async function (e, t) {
      var n;
      var i;
      let r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      if (r) {
        R(e, "", t);
        return;
      }
      if ((await F()) && t) {
        if (t === chatFieldProcessor.fieldConstants.MODEL) {
          R(e, "", t);
          teaAnalyticsEventTracker.trackEvent("click_image_generation_model_panel", {
            ...k,
            to_status: e.value,
            skill_id: (n = y.skill_type) === null || n === undefined ? undefined : n.toString(),
            skill_name: y.show_name
          });
        } else {
          R(e, t === chatFieldProcessor.fieldConstants.RATIO ? `${O("skill_image_intput_ratio")} ` : `${O("skill_image_textfield_editBlock_prefix_style")} `, t);
          teaAnalyticsEventTracker.trackEvent("input_bar_enter_click", {
            ...k,
            button_name: t === chatFieldProcessor.fieldConstants.RATIO ? "ratio" : "image_styles",
            skill_id: (i = y.skill_type) === null || i === undefined ? undefined : i.toString(),
            skill_name: y.show_name,
            image_styles: E,
            image_category: B
          });
        }
      }
    };
    let {
      creationAgentModelSwitchEnabled: L
    } = creationAgentConfigProvider.getAgentConfigs();
    let V = chatInputSkillCheckHook.useHasImageVideoGenerationSkills();
    let U = +!!V;
    let z = U + +!!L;
    let {
      skillToolUIV2: K,
      skillToolLayoutV2: G
    } = chatLauncherConfigHooks.useSkillToolLayout(M);
    let H = reactCoreLibraryReexport.useMemo(() => {
      let e = [];
      if (I && K) {
        e.push(chatSkillPluginSymbols.exitSkillPluginSym);
      }
      if (V) {
        e.push(imageCreationPluginIds.skillSwitchPluginId);
      }
      e.push(imageCreationPluginIds.uploadRefPluginId);
      if (L) {
        e.push(imageCreationPluginIds.modelSwitchPluginId);
      }
      e.push(imageCreationPluginIds.ratioSelectPluginId, imageCreationPluginIds.styleSelectPluginId);
      if (G && M === "bottom_bar") {
        e.push(chatSkillPluginSymbols.skillTemplateSym);
      }
      e.push(selectSkillBtnPluginId.selectSkillBtnId);
      return e;
    }, [K, G, I, V, L]);
    return reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButtonList, {
      list: H,
      toolButtonProps: {
        type: "editor",
        trackParams: k,
        chatId: t,
        chatType: n,
        scene: M,
        skill: y,
        onClickExitButton: j,
        multiple: b,
        hasImage: x,
        onSubmitFiles: w,
        imageCount: S,
        styleAndRatioDisabled: P,
        inputOptionsMap: A,
        categoryName: B,
        selectedModel: T,
        selectedModelSort: U,
        selectedRatio: C,
        selectedRatioSort: z,
        selectedStyle: E,
        selectedStyleSort: z + 1,
        handleSelect: W,
        getValue: Z,
        onUpdateValue: $,
        expandPopoverRef: D
      },
      small: N
    });
  };
  require.d(exports, {
    ImageSkillToolInput: function () {
      return y;
    }
  });
}