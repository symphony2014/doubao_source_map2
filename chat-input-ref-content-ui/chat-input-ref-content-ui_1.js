// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatInputAiFeatureConstants'
// - Resolved require(155267) to 'chat-input-ai-feature-constants'
// - Renamed variable 'l' to 'chatInputAiPresetPrompt'
// - Resolved require(573937) to 'chat-input-ai-preset-prompt'
// - Renamed variable 'u' to 'chatInputRefContentUi'
// - Resolved require(917632) to 'chat-input-ref-content-ui'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'KP' to 'AiFeatureType' (module 155267)
// - Updated imported property 'B' to 'PresetPromptButton' (module 573937)
// - Updated imported property 'Mr' to 'ChatInputRefContent' (module 917632)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-input-ref-content-ui.2012527d.js
         * chunkId: 14180
         * moduleId: 394163
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatInputAiFeatureConstants = require("chat-input-ai-feature-constants") /*id: 155267*/;
  var chatInputAiPresetPrompt = require("chat-input-ai-preset-prompt") /*id: 573937*/;
  var chatInputRefContentUi = require("chat-input-ref-content-ui") /*id: 917632*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      refContents: n,
      showPresetPrompt: t,
      onPresetPromptShow: o,
      onClickPresetPrompt: f
    } = e;
    let a = reactCoreLibraryReexport.useMemo(() => t ? [chatInputAiFeatureConstants.AiFeatureType.ExplainAskSug, chatInputAiFeatureConstants.AiFeatureType.ExpandAskSug, chatInputAiFeatureConstants.AiFeatureType.DeepResearchAskSug] : [], [t]);
    let _ = chatInputAiPresetPrompt.PresetPromptButton({
      disableHighlight: true,
      onPresetPromptShow: o,
      onClickPresetPrompt: f,
      attachmentCanSend: true
    });
    let d = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx("div", {
      className: `
          flex flex-wrap gap-8 overflow-hidden px-12 pt-12
          empty:hidden
        `,
      children: a.map((e, n) => _(e, false, n))
    }), [t, a, _]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-input-ref-content": "true",
      children: [reactJsxRuntimeCoreReexport.jsx(chatInputRefContentUi.ChatInputRefContent, {
        refContents: n
      }), d]
    });
  };
  require.r(exports);
  require.d(exports, {
    ChatRefContentUI: function () {
      return o;
    }
  });
}