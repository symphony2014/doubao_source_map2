// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'CodingGenerateButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 67353
         */
module.exports = function (module, exports, require) {
  var motionComponentFactory_1_1 = require("motion-component-factory_1_1") /*id: 516730*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiIconButton = require("semi-icon-button") /*id: 845645*/;
  var dotFlashingLoader = require("dot-flashing-loader") /*id: 887785*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var sparkleIcon = require("sparkle-icon") /*id: 152694*/;
  var codingSkillChatInputStyles = require("coding-skill-chat-input-styles") /*id: 314845*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      disabled: t,
      onClick: n,
      loading: u
    } = e;
    let p = i18nTranslationUtils.useTranslationWithFallback();
    if (u) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: codingSkillChatInputStyles.chatInputStyles.loading,
        children: [reactJsxRuntimeCoreReexport.jsx(dotFlashingLoader.DotFlashing, {}), reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1_1.createMotionComponent.div, {
          className: codingSkillChatInputStyles.chatInputStyles["loading-text"],
          transition: {
            ease: "easeInOut",
            duration: 1,
            bounce: 0,
            repeat: Infinity,
            repeatType: "loop"
          },
          animate: {
            backgroundImage: ["linear-gradient(90deg, rgba(214, 214, 214, 0.44) 0%, rgba(0, 0, 0, 0.44) 0%, rgba(0, 0, 0, 0.44) 0%)", "linear-gradient(90deg, rgba(0, 0, 0, 0.44) 0%, rgba(214, 214, 214, 0.44) 50%, rgba(0, 0, 0, 0.44) 100%)", "linear-gradient(90deg, rgba(0, 0, 0, 0.44) 100%, rgba(0, 0, 0, 0.44) 100%, rgba(214, 214, 214, 0.44) 100%)"]
          },
          children: p("coding_website_prompt_generating")
        })]
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: p(t ? "coding_website_prompt_input_tips" : "coding_website_prompt_optimize"),
        children: reactJsxRuntimeCoreReexport.jsx(semiIconButton.SemiIconButton, {
          className: "h-32 w-32 rounded-8 !p-0",
          style: t ? {} : {
            color: "black"
          },
          icon: reactJsxRuntimeCoreReexport.jsx(sparkleIcon.SparkleIcon, {
            className: "size-18"
          }),
          theme: "borderless",
          disabled: t,
          onClick: n,
          "data-testid": "code-btn-prompt-optimize"
        })
      });
    }
  };
  require.d(exports, {
    CodingGenerateButton: function () {
      return u;
    }
  });
}