// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Renamed variable 'i' to 'useLatestCallbackHook_1'
// - Resolved require(318475) to 'use-latest-callback-hook_1'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Sd' to 'presetPromptAreaHook' (module 232752)
// - Updated imported property 'Z' to 'useLatestCallback' (module 318475)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-engine-infra.27de6beb.js
         * chunkId: 63727
         * moduleId: 551040
         */
module.exports = function (module, exports, require) {
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      presetPromptConfig: t,
      onSubmit: n,
      ...o
    } = e;
    let {
      plugin: s
    } = chatPluginIocManager.presetPromptAreaHook(t || "");
    let u = useLatestCallbackHook_1.useLatestCallback(n);
    if (t && s) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: reactJsxRuntimeCoreReexport.jsx(s.Content, {
          ...o,
          onSubmit: u
        })
      });
    } else {
      return null;
    }
  };
  require.r(exports);
  require.d(exports, {
    FlowChatInputEnginePresetPromptBarFoundation: function () {
      return o;
    }
  });
}