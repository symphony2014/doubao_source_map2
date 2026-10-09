// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'AiModeSelectButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 373824
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var buttonComponent_1 = require("button-component_1") /*id: 893534*/;
  var aiCreationGuidanceIcon = require("ai-creation-guidance-icon") /*id: 99723*/;
  var svgArrowIconComponent_1 = require("svg-arrow-icon-component_1") /*id: 760619*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      className: n
    } = e;
    let {
      menu_item_list: i = []
    } = chatStoreManager.getStoreState("chatInputStore").modeSelectConfigs ?? {};
    let d = i.find(e => e.menu_type === chatAiConstants.deepThinkMode.DeepThinkOff);
    return reactJsxRuntimeCoreReexport.jsx(buttonComponent_1.Button, {
      variant: "text",
      size: "lg",
      className: `
        flex !text-[14px] !leading-22
        h-32 !rounded-dbx-xl p-[7px] pr-5 [&_svg:not([class*="size-"])]:size-[18px]
        ${n ?? ""}
      `,
      leadingIcon: reactJsxRuntimeCoreReexport.jsx(aiCreationGuidanceIcon.AiCreationIcon, {}),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex items-center",
        children: [d == null ? undefined : d.name, reactJsxRuntimeCoreReexport.jsx(svgArrowIconComponent_1.ArrowIcon, {
          className: r("size-12 rotate-0", "text-dbx-text-tertiary")
        })]
      })
    });
  };
  require.d(exports, {
    AiModeSelectButton: function () {
      return d;
    }
  });
}