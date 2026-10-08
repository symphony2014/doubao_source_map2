// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatSashDragHook'
// - Resolved require(290223) to 'chat-sash-drag-hook'
// - Renamed variable 'i' to 'resizableSashComponent'
// - Resolved require(897156) to 'resizable-sash-component'
// - Renamed variable 'o' to 'chatCanvasPanelRenderer'
// - Resolved require(927394) to 'chat-canvas-panel-renderer'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'J' to 'useChatSashDrag' (module 290223)
// - Updated imported property 'g' to 'ResizableSash' (module 897156)
// - Updated imported property 'B' to 'CanvasPanelRenderer' (module 927394)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-layout.adb7a8b6.js
         * chunkId: 36969
         * moduleId: 564771
         */
module.exports = function (module, exports, require) {
  var chatSashDragHook = require("chat-sash-drag-hook") /*id: 290223*/;
  var resizableSashComponent = require("resizable-sash-component") /*id: 897156*/;
  var chatCanvasPanelRenderer = require("chat-canvas-panel-renderer") /*id: 927394*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      rightSideMode: t,
      canvasExpandWithPreRender: n,
      matchedPluginName: s
    } = e;
    let {
      sashRef: l,
      dragging: c,
      onDragEnd: d,
      onDrag: u
    } = chatSashDragHook.useChatSashDrag(s);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [t !== "narrow" && !n && s && reactJsxRuntimeCoreReexport.jsx(resizableSashComponent.ResizableSash, {
        ref: l,
        className: "absolute -left-3 h-full w-6",
        style: {
          zIndex: 1002
        },
        onDrag: u,
        onDragEnd: d
      }), reactJsxRuntimeCoreReexport.jsx(chatCanvasPanelRenderer.CanvasPanelRenderer, {
        containerClassName: c ? "pointer-events-none" : undefined
      })]
    });
  };
  require.r(exports);
  require.d(exports, {
    CanvasPanelWithSash: function () {
      return s;
    }
  });
}