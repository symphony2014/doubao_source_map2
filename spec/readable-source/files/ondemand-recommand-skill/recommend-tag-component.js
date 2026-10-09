// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'chatAiConstants'
// - Resolved require(447912) to 'chat-ai-constants'
// - Renamed variable 'a' to 'semiTooltipWrapper'
// - Resolved require(905177) to 'semi-tooltip-wrapper'
// - Renamed variable 'l' to 'infoCircleIcon_2_1'
// - Resolved require(946023) to 'info-circle-icon_2_1'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'ZQ' to 'itemStatus' (module 447912)
// - Updated imported property 's' to 'SemiTooltip' (module 905177)
// - Updated imported property 'Z' to 'InfoCircleIcon' (module 946023)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-recommand-skill.b04129a4.js
         * chunkId: 30198
         * moduleId: 478670
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var infoCircleIcon_2_1 = require("info-circle-icon_2_1") /*id: 946023*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = t => {
    let {
      recommendTag: e,
      onClose: i
    } = t;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let c = e === chatAiConstants.itemStatus.New ? n("input_skillbar_promote_tag_new") : e === chatAiConstants.itemStatus.Recommend ? n("input_skillbar_promote_tag_recommend") : e === chatAiConstants.itemStatus.Upgrade ? n("image_entry_tag_upgrade") : "";
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "recommend-tag-o3IIDa",
        children: c
      }), reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: n("input_skillbar_promote_remove_tooltip"),
        children: reactJsxRuntimeCoreReexport.jsx("button", {
          className: r("absolute -top-8 -right-8 p-2 cursor-pointer border-none rounded-full w-20 h-20", "bg-s-color-bg-primary text-s-color-text-quaternary hover:text-s-color-text-tertiary", "hidden group-hover:block"),
          onClick: t => {
            if (i != null) {
              i();
            }
            t.stopPropagation();
          },
          onMouseUp: t => t.stopPropagation(),
          children: reactJsxRuntimeCoreReexport.jsx(infoCircleIcon_2_1.InfoCircleIcon, {})
        })
      })]
    });
  };
  require.r(exports);
  require.d(exports, {
    RecommendTag: function () {
      return c;
    }
  });
}