// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'SkillGuidanceInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 721400
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var videoPluginIdentifiers = require("video-plugin-identifiers") /*id: 995193*/;
  var videoSkillStore = require("video-skill-store") /*id: 297271*/;
  var businessInputSubmit = require("business-input-submit") /*id: 540748*/;
  var chatSkillPluginSymbols = require("chat-skill-plugin-symbols") /*id: 886094*/;
  var imageCreationPluginIds = require("image-creation-plugin-ids") /*id: 20940*/;
  var chatInputSkillCheckHook = require("chat-input-skill-check-hook") /*id: 735810*/;
  var selectSkillBtnPluginId = require("select-skill-btn-plugin-id") /*id: 730494*/;
  var skillToolButtonRenderer = require("skill-tool-button-renderer") /*id: 812051*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      chatId: t,
      chatType: n,
      isGuidance: g,
      small: y,
      skill: k,
      trackParams: w,
      onImageSubmit: b,
      onClickExitButton: x,
      showExitSkillButton: S,
      scene: C,
      forwardedRef: E,
      enableMultiple: T
    } = e;
    let R = chatInputSkillCheckHook.useHasImageVideoGenerationSkills();
    let [P, N, j] = videoSkillStore.useVideoSkillStore(e => [e.editorValue, e.updateEditorValue, e.inputOptionsMap], deepEqualityUtil_1.isDeepEqual);
    let [I, M] = reactCoreLibraryReexport.useState("");
    let D = useLatestCallbackHook_1.useLatestCallback(e => {
      M(businessInputSubmit.getOptionValue(businessInputSubmit.getRatioValue(e), j.ratio));
    });
    reactCoreLibraryReexport.useImperativeHandle(E, () => ({
      syncRatio: D
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      M(businessInputSubmit.getOptionValue(businessInputSubmit.getRatioValue(P), j.ratio));
    }, [P]);
    let {
      skillToolUIV2: Z
    } = chatLauncherConfigHooks.useSkillToolLayout(C);
    let $ = chatFgStoreHooks.getSourceValue("video_model_switch", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    });
    let O = reactCoreLibraryReexport.useMemo(() => {
      let e = [];
      if (Z && S) {
        e.push(chatSkillPluginSymbols.exitSkillPluginSym);
      }
      if (R) {
        e.push(imageCreationPluginIds.skillSwitchPluginId);
      }
      if (g) {
        e.push(videoPluginIdentifiers.videoUploadPluginId);
      }
      if ($ === "1") {
        e.push(videoPluginIdentifiers.videoModelPluginId);
      }
      e.push(videoPluginIdentifiers.videoRatioPluginId, selectSkillBtnPluginId.selectSkillBtnId);
      return e;
    }, [g]);
    return reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButtonList, {
      list: O,
      toolButtonProps: {
        type: "editor",
        trackParams: w,
        chatId: t,
        chatType: n,
        scene: C,
        skill: k,
        onClickExitButton: x,
        getValue: () => P,
        onUpdateValue: e => {
          if (typeof e != "string") {
            N(e);
          }
        },
        onImageSubmit: b,
        value: I,
        onChange: M,
        ratioSort: +!!R,
        enableMultiple: T
      },
      small: y
    });
  };
  require.d(exports, {
    SkillGuidanceInput: function () {
      return g;
    }
  });
}