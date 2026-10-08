// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'PresetPromptButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-input-ref-content-ui.2012527d.js
         * chunkId: 14180
         * moduleId: 573937
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var chatInputAiFeatureConstants = require("chat-input-ai-feature-constants") /*id: 155267*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var arrowRightIconComponent = require("arrow-right-icon-component") /*id: 317574*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      text: n,
      disabled: t,
      className: r,
      onClick: u,
      onShow: s
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (s != null) {
        s();
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
      "data-testid": "preset_prompt_button",
      color: "grey-filled",
      variant: "rectangle",
      size: "sm",
      className: l("!gap-6 !h-30 pl-8 pr-6 flex-row-reverse", r),
      disabled: t,
      onClick: u,
      leadingIcon: reactJsxRuntimeCoreReexport.jsx(arrowRightIconComponent.ArrowRightIcon, {
        className: "size-14"
      }),
      children: n
    });
  };
  let d = e => {
    let {
      onPresetPromptShow: n,
      onClickPresetPrompt: t,
      attachmentCanSend: r
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    return reactCoreLibraryReexport.useCallback((e, i, s) => reactJsxRuntimeCoreReexport.jsx(_, {
      text: l(chatInputAiFeatureConstants.featureSkillIdMap[e]),
      onShow: () => {
        if (n != null) {
          n(l(chatInputAiFeatureConstants.featureSkillIdMap[e]), s);
        }
      },
      onClick: () => {
        if (r) {
          if (t != null) {
            t(l(chatInputAiFeatureConstants.featureSkillIdMap[e]), e, s);
          }
        }
      },
      disabled: !r
    }, e), [r, n, t, l]);
  };
  require.d(exports, {
    PresetPromptButton: function () {
      return d;
    }
  });
}