// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'SkillGuidanceInputWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 391099
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var autoFocusOnKeypressAndVisibilityChange = require("auto-focus-on-keypress-and-visibility-change") /*id: 952645*/;
  var skillGuidanceChatInputComponent = require("skill-guidance-chat-input-component") /*id: 951605*/;
  var chatInputComposerContainer = require("chat-input-composer-container") /*id: 592237*/;
  var asyncSkillChatContext = require("async-skill-chat-context") /*id: 844074*/;
  var skillGuidanceInput_1 = require("skill-guidance-input_1") /*id: 636432*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      editorProps: n,
      onClick: f,
      beforeEditorAnchor: m
    } = e;
    let {
      disabled: v,
      value: h
    } = n ?? {};
    let _ = reactCoreLibraryReexport.useRef(null);
    let g = reactMergeRefs.useMergeRefs(_, t);
    let y = useLatestCallbackHook_1.useLatestCallback(() => {
      var e;
      if (!v && (e = _.current) !== null && e !== undefined) {
        e.focus();
      }
      if (f != null) {
        f();
      }
    });
    autoFocusOnKeypressAndVisibilityChange.useAutoFocusOnKeyPress(_);
    let k = skillGuidanceInput_1.SkillGuidanceInput(n ?? {}, g);
    let {
      guidanceGenericInputMode: w
    } = chatLauncherConfigHooks.useLauncherConfig();
    if (w && (e.scene === "bottom_bar" || e.scene === "landing")) {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillChatContext.ChatInputProvider, {
        value: e.scene,
        children: reactJsxRuntimeCoreReexport.jsx(skillGuidanceChatInputComponent.SkillGuidanceChatInput, {
          ...e,
          mode: w === chatLauncherConfigHooks.inputModeConstants.ActionBarWithSingleLine ? "default_one_line" : "default_two_line",
          beforeEditorAnchor: m,
          renderEditor: k,
          onClick: y,
          placeholderContent: w === chatLauncherConfigHooks.inputModeConstants.ActionBarWithSingleLine ? h : undefined
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(chatInputComposerContainer.ChatInputComposer, {
        ...e,
        beforeEditorAnchor: m,
        renderEditor: k,
        onClick: y
      });
    }
  });
  require.d(exports, {
    SkillGuidanceInputWrapper: function () {
      return f;
    }
  });
}