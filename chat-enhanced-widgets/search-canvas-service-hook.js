// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'useSearchCanvas'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 583489
         */
module.exports = function (module, exports, require) {
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  let r = e => {
    let {
      searchType: t,
      messageReplyId: n,
      conversationId: r,
      referenceInAll: i,
      isAutoOpen: a = false,
      isInSearch: s = true,
      useDeepThinking: d = false,
      isAutoOpenCanvasInNarrow: c = false,
      referenceInUsed: u = [],
      richImagesResults: m = [],
      onTrackEvent: h
    } = e;
    return {
      onOpenSearchCanvas: () => {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel({
          messageId: n ?? "",
          conversationId: "",
          canvasLayoutState: chatPanelModes.PanelMode.NARROW_SIDE_PANEL,
          search_result: {
            siderBarData: {
              searchReference: u,
              searchReferenceInAll: i,
              richImagesResults: m
            },
            searchType: t,
            messageId: n,
            conversationId: r,
            useDeepThinking: d,
            isInSearch: s,
            isAutoOpen: a,
            onTrackEvent: h
          },
          ignoreReopenLogger: c
        }, undefined, c));
      },
      onCloseCanvas: () => {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
      }
    };
  };
  require.d(exports, {
    useSearchCanvas: function () {
      return r;
    }
  });
}