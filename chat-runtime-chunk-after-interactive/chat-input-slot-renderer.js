// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'renderChatInputSlot'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 793887
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var batchImageStoreLogic = require("batch-image-store-logic") /*id: 73795*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  let u = () => ({
    voiceConversationId: "",
    voiceCallStartTime: 0
  });
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      ChatInputSlot: t,
      chatId: n,
      chatType: p,
      chatKey: _,
      renderFallback: v
    } = e;
    let h = chatStoreManager.useStoreSelector("chatGuidanceStore", e => ({
      activeSkillType: e.activeSkillIdentifier
    }), deepEqualityUtil_1.isDeepEqual);
    let m = batchImageStoreLogic.imageStore(e => e.batchDownloadSelected);
    let f = {
      chatId: n,
      chatType: p,
      chatKey: _,
      guidance: h,
      share: chatMessageShareSelectStore.chatMessageShareSelectStore(e => ({
        isSelectMode: e.isSelectMode,
        scene: e.scene
      }), deepEqualityUtil_1.isDeepEqual),
      voiceCall: u(),
      batchDownload: {
        isBatchDownloadMode: m != null && m
      }
    };
    let {
      matcher: g
    } = chatPluginMatcherRegistry.useChatFooterMatcher();
    let y = g == null ? undefined : g.map(e => e(f)).find(e => e !== undefined);
    let {
      plugin: b
    } = chatPluginIocManager.chatFooterPluginHook(y);
    return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
      errorBoundaryName: "chat_input_error",
      fallback: null,
      children: b ? reactJsxRuntimeCoreReexport.jsx(b.Content, {
        ...f,
        ChatInputSlot: t
      }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: v == null ? undefined : v()
      })
    });
  };
  require.d(exports, {
    renderChatInputSlot: function () {
      return p;
    }
  });
}