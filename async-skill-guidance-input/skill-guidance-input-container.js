// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'XI' to 'SkillGuidanceInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 216652
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var skillGuidanceChatInputComponent = require("skill-guidance-chat-input-component") /*id: 951605*/;
  var chatInputComposerContainer = require("chat-input-composer-container") /*id: 592237*/;
  var asyncSkillChatContext = require("async-skill-chat-context") /*id: 844074*/;
  var skillChatInputEngine = require("skill-chat-input-engine") /*id: 109888*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      editorProps: n,
      showExitSkillButton: i = true,
      exitSkillButtonTheme: c,
      skillShowName: p,
      editorInputClassName: f,
      exitSkillButtonClassName: m,
      exitSkillButtonShowNameClassName: v,
      onClickExitButton: h,
      scene: _
    } = e;
    let g = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let y = chatStoreManager.useStoreSelector("chatInputStore", e => {
      let i = g ? e.activeSkillTypeMap?.[g] : undefined;
      if (i && g) {
        return e.skillMap?.[i];
      } else {
        return undefined;
      }
    });
    let {
      guidanceSkillActiveInputMode: k
    } = chatLauncherConfigHooks.useLauncherConfig();
    let w = !!k && (_ === "bottom_bar" || _ === "landing");
    let {
      renderEditor: b
    } = skillChatInputEngine.useChatInputEngine({
      editorProps: n,
      editorInputClassName: f,
      useV3: w,
      chatId: g,
      activeSkill: y,
      showExitSkillButton: i,
      exitSkillButtonTheme: c,
      skillShowName: p,
      exitSkillButtonClassName: m,
      exitSkillButtonShowNameClassName: v,
      onClickExitButton: h,
      forwardedRef: t
    });
    if (w) {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillChatContext.ChatInputProvider, {
        value: e.scene,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          children: reactJsxRuntimeCoreReexport.jsx(skillGuidanceChatInputComponent.SkillGuidanceChatInput, {
            ...e,
            renderEditor: b,
            mode: k === chatLauncherConfigHooks.toolBtnLayoutConstants.ToolBtnsBorderLessTop ? "main-tools-top" : "main-tools-bottom"
          })
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        children: reactJsxRuntimeCoreReexport.jsx(chatInputComposerContainer.ChatInputComposer, {
          ...e,
          renderEditor: b
        })
      });
    }
  });
  require.d(exports, {
    SkillGuidanceInput: function () {
      return c;
    }
  });
}