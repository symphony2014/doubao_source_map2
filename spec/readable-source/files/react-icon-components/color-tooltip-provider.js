// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ColorTooltipProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 32256
         */
module.exports = function (module, exports, require) {
  var browserThemeManager = require("browser-theme-manager") /*id: 542418*/;
  var localeContextProvider = require("locale-context-provider") /*id: 577211*/;
  var popperTriggerComponent = require("popper-trigger-component") /*id: 564146*/;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var colorThemeTokens = require("color-theme-tokens") /*id: 635565*/;
  var docButtonBgColors = require("doc-button-bg-colors") /*id: 11473*/;
  var docCalloutColorThemes = require("doc-callout-color-themes") /*id: 309297*/;
  var uiThemeColorDefinitions = require("ui-theme-color-definitions") /*id: 434278*/;
  var textHighlightColors = require("text-highlight-colors") /*id: 514350*/;
  let v = {
    [colorThemeTokens.colorConstants.COLOR_DEFAULT_TEXT]: t("LarkCCM_Docs_TextColor_B_Black_Tooltip"),
    [colorThemeTokens.colorConstants.COLOR_GRAY_TEXT]: t("LarkCCM_Docs_TextColor_B_Gray_Tooltip"),
    [colorThemeTokens.colorConstants.COLOR_PINK_TEXT]: t("LarkCCM_Docs_TextColor_B_Red_Tooltip"),
    [colorThemeTokens.colorConstants.COLOR_ORANGE_TEXT]: t("LarkCCM_Docs_TextColor_B_Orange_Tooltip"),
    [colorThemeTokens.colorConstants.COLOR_YELLOW_TEXT]: t("LarkCCM_Docs_TextColor_B_Yellow_Tooltip"),
    [colorThemeTokens.colorConstants.COLOR_GREEN_TEXT]: t("LarkCCM_Docs_TextColor_B_Green_Tooltip"),
    [colorThemeTokens.colorConstants.COLOR_BLUE_TEXT]: t("LarkCCM_Docs_TextColor_B_Blue_Tooltip"),
    [colorThemeTokens.colorConstants.COLOR_PURPLE_TEXT]: t("LarkCCM_Docs_TextColor_B_Purple_Tooltip")
  };
  let _ = {
    [colorThemeTokens.colorConstants.COLOR_DEFAULT_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_Transparent_Tooltip"),
    [colorThemeTokens.colorConstants.LIGHT_GRAY_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_LightGrey_Tooltip"),
    [colorThemeTokens.colorConstants.LIGHT_RED_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_LightRed_Tooltip"),
    [colorThemeTokens.colorConstants.LIGHT_ORANGE_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_LightOrange_Tooltip"),
    [colorThemeTokens.colorConstants.LIGHT_YELLOW_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_LightYellow_Tooltip"),
    [colorThemeTokens.colorConstants.LIGHT_GREEN_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_LightGreen_Tooltip"),
    [colorThemeTokens.colorConstants.LIGHT_BLUE_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_LightBlue_Tooltip"),
    [colorThemeTokens.colorConstants.LIGHT_PURPLE_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_LightPurple_Tooltip"),
    [colorThemeTokens.colorConstants.DARK_NEUTRAL_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_MediumGray_Tooltip"),
    [colorThemeTokens.colorConstants.DARK_GRAY_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_Gray_Tooltip"),
    [colorThemeTokens.colorConstants.DARK_RED_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_MediumRed_Tooltip"),
    [colorThemeTokens.colorConstants.DARK_ORANGE_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_MediumOrange_Tooltip"),
    [colorThemeTokens.colorConstants.DARK_YELLOW_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_MediumYellow_Tooltip"),
    [colorThemeTokens.colorConstants.DARK_GREEN_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_MediumGreen_Tooltip"),
    [colorThemeTokens.colorConstants.DARK_BLUE_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_MediumBlue_Tooltip"),
    [colorThemeTokens.colorConstants.DARK_PURPLE_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_MediumPurple_Tooltip")
  };
  let g = {
    [docCalloutColorThemes.colorVariants.Default]: t("LarkCCM_Docs_TextColor_B_Black_Tooltip"),
    [docCalloutColorThemes.colorVariants.Neutral]: t("LarkCCM_Docs_TextColor_B_Gray_Tooltip"),
    [docCalloutColorThemes.colorVariants.Red]: t("LarkCCM_Docs_TextColor_B_Red_Tooltip"),
    [docCalloutColorThemes.colorVariants.Orange]: t("LarkCCM_Docs_TextColor_B_Orange_Tooltip"),
    [docCalloutColorThemes.colorVariants.Yellow]: t("LarkCCM_Docs_TextColor_B_Yellow_Tooltip"),
    [docCalloutColorThemes.colorVariants.Green]: t("LarkCCM_Docs_TextColor_B_Green_Tooltip"),
    [docCalloutColorThemes.colorVariants.Blue]: t("LarkCCM_Docs_TextColor_B_Blue_Tooltip"),
    [docCalloutColorThemes.colorVariants.Purple]: t("LarkCCM_Docs_TextColor_B_Purple_Tooltip")
  };
  let b = {
    [docCalloutColorThemes.colorOptions.Default]: t("LarkCCM_Docs_TextColor_A_Transparent_Tooltip"),
    [docCalloutColorThemes.colorOptions.LightNeutral]: t("LarkCCM_Docs_TextColor_A_LightGrey_Tooltip"),
    [docCalloutColorThemes.colorOptions.LightRed]: t("LarkCCM_Docs_TextColor_A_LightRed_Tooltip"),
    [docCalloutColorThemes.colorOptions.LightOrange]: t("LarkCCM_Docs_TextColor_A_LightOrange_Tooltip"),
    [docCalloutColorThemes.colorOptions.LightYellow]: t("LarkCCM_Docs_TextColor_A_LightYellow_Tooltip"),
    [docCalloutColorThemes.colorOptions.LightGreen]: t("LarkCCM_Docs_TextColor_A_LightGreen_Tooltip"),
    [docCalloutColorThemes.colorOptions.LightBlue]: t("LarkCCM_Docs_TextColor_A_LightBlue_Tooltip"),
    [docCalloutColorThemes.colorOptions.LightPurple]: t("LarkCCM_Docs_TextColor_A_LightPurple_Tooltip"),
    [docCalloutColorThemes.colorOptions.DarkGray]: t("LarkCCM_Docs_TextColor_A_MediumGray_Tooltip"),
    [docCalloutColorThemes.colorOptions.DarkNeutral]: t("LarkCCM_Docs_TextColor_A_Gray_Tooltip"),
    [docCalloutColorThemes.colorOptions.DarkRed]: t("LarkCCM_Docs_TextColor_A_MediumRed_Tooltip"),
    [docCalloutColorThemes.colorOptions.DarkOrange]: t("LarkCCM_Docs_TextColor_A_MediumOrange_Tooltip"),
    [docCalloutColorThemes.colorOptions.DarkYellow]: t("LarkCCM_Docs_TextColor_A_MediumYellow_Tooltip"),
    [docCalloutColorThemes.colorOptions.DarkGreen]: t("LarkCCM_Docs_TextColor_A_MediumGreen_Tooltip"),
    [docCalloutColorThemes.colorOptions.DarkBlue]: t("LarkCCM_Docs_TextColor_A_MediumBlue_Tooltip"),
    [docCalloutColorThemes.colorOptions.DarkPurple]: t("LarkCCM_Docs_TextColor_A_MediumPurple_Tooltip")
  };
  let C = {
    [docCalloutColorThemes.colorNames.Default]: t("LarkCCM_Docs_TextColor_A_Transparent_Tooltip"),
    [docCalloutColorThemes.colorNames.Neutral]: t("LarkCCM_Docs_TextColor_A_Gray_Tooltip"),
    [docCalloutColorThemes.colorNames.Red]: t("LarkCCM_Docs_TextColor_A_Red_Tooltip"),
    [docCalloutColorThemes.colorNames.Orange]: t("LarkCCM_Docs_TextColor_A_Orange_Tooltip"),
    [docCalloutColorThemes.colorNames.Yellow]: t("LarkCCM_Docs_TextColor_A_Yellow_Tooltip"),
    [docCalloutColorThemes.colorNames.Green]: t("LarkCCM_Docs_TextColor_A_Green_Tooltip"),
    [docCalloutColorThemes.colorNames.Blue]: t("LarkCCM_Docs_TextColor_A_Blue_Tooltip"),
    [docCalloutColorThemes.colorNames.Purple]: t("LarkCCM_Docs_TextColor_A_Purple_Tooltip")
  };
  let x = {
    [uiThemeColorDefinitions.colorConstants.COLOR_DEFAULT_TEXT]: t("LarkCCM_Docs_TextColor_B_Black_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_GRAY_TEXT]: t("LarkCCM_Docs_TextColor_B_Gray_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_PINK_TEXT]: t("LarkCCM_Docs_TextColor_B_Red_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_ORANGE_TEXT]: t("LarkCCM_Docs_TextColor_B_Orange_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_YELLOW_TEXT]: t("LarkCCM_Docs_TextColor_B_Yellow_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_GREEN_TEXT]: t("LarkCCM_Docs_TextColor_B_Green_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_BLUE_TEXT]: t("LarkCCM_Docs_TextColor_B_Blue_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_PURPLE_TEXT]: t("LarkCCM_Docs_TextColor_B_Purple_Tooltip")
  };
  let w = {
    [uiThemeColorDefinitions.colorConstants.COLOR_DEFAULT_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_Transparent_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_GRAY_LIGHT_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_LightGrey_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_PINK_LIGHT_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_LightRed_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_ORANGE_LIGHT_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_LightOrange_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_YELLOW_LIGHT_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_LightYellow_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_GREEN_LIGHT_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_LightGreen_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_BLUE_LIGHT_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_LightBlue_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_PURPLE_LIGHT_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_LightPurple_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_GRAY_SLIGHT_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_MediumGray_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_GRAY_DARK_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_Gray_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_PINK_DARK_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_Red_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_ORANGE_DARK_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_Orange_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_YELLOW_DARK_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_Yellow_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_GREEN_DARK_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_Green_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_BLUE_DARK_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_Blue_Tooltip"),
    [uiThemeColorDefinitions.colorConstants.COLOR_PURPLE_DARK_BACKGROUND]: t("LarkCCM_Docs_TextColor_A_Purple_Tooltip")
  };
  let T = {
    [docButtonBgColors.ButtonBgColors.LightRed]: t("LarkCCM_Docs_TextColor_B_LightRed_Tooltip"),
    [docButtonBgColors.ButtonBgColors.LightOrigin]: t("LarkCCM_Docs_TextColor_B_LightOrange_Tooltip"),
    [docButtonBgColors.ButtonBgColors.LightGreen]: t("LarkCCM_Docs_TextColor_B_LightGreen_Tooltip"),
    [docButtonBgColors.ButtonBgColors.LightWathet]: t("LarkCCM_Docs_TextColor_B_LightSkyBlue_Tooltip"),
    [docButtonBgColors.ButtonBgColors.LightBlue]: t("LarkCCM_Docs_TextColor_B_LightBlue_Tooltip"),
    [docButtonBgColors.ButtonBgColors.LightCarmine]: t("LarkCCM_Docs_TextColor_B_LightPink_Tooltip"),
    [docButtonBgColors.ButtonBgColors.LightPurple]: t("LarkCCM_Docs_TextColor_B_LightPurple_Tooltip"),
    [docButtonBgColors.ButtonBgColors.LightNeutral]: t("LarkCCM_Docs_TextColor_B_LightGray_Tooltip"),
    [docButtonBgColors.ButtonBgColors.DeepRed]: t("LarkCCM_Docs_TextColor_B_Red_Tooltip"),
    [docButtonBgColors.ButtonBgColors.DeepOrigin]: t("LarkCCM_Docs_TextColor_B_Orange_Tooltip"),
    [docButtonBgColors.ButtonBgColors.DeepGreen]: t("LarkCCM_Docs_TextColor_B_Green_Tooltip"),
    [docButtonBgColors.ButtonBgColors.DeepWathet]: t("LarkCCM_Docs_TextColor_B_SkyBlue_Tooltip"),
    [docButtonBgColors.ButtonBgColors.DeepBlue]: t("LarkCCM_Docs_TextColor_B_Blue_Tooltip"),
    [docButtonBgColors.ButtonBgColors.DeepCarmine]: t("LarkCCM_Docs_TextColor_B_Pink_Tooltip"),
    [docButtonBgColors.ButtonBgColors.DeepPurple]: t("LarkCCM_Docs_TextColor_B_Purple_Tooltip"),
    [docButtonBgColors.ButtonBgColors.DeepNeutral]: t("LarkCCM_Docs_TextColor_B_Black_Tooltip")
  };
  let k = {
    [textHighlightColors.highlightColors.COLOR]: {
      ...x,
      ...v
    },
    [textHighlightColors.highlightColors.BACKGROUND_COLOR]: {
      ...w,
      ..._
    },
    [docCalloutColorThemes.colorTypeKeys.TextColor]: g,
    [docCalloutColorThemes.colorTypeKeys.BackgroundColor]: b,
    [docCalloutColorThemes.colorTypeKeys.Border]: C,
    [docButtonBgColors.buttonBgColorKey.ButtonBackgroundColor]: T
  };
  let Z = {
    [browserThemeManager.ThemeMode.LIGHT]: k,
    [browserThemeManager.ThemeMode.DARK]: {
      ...k,
      [textHighlightColors.highlightColors.COLOR]: {
        ...k[textHighlightColors.highlightColors.COLOR],
        [colorThemeTokens.colorConstants.COLOR_DEFAULT_TEXT]: t("LarkCCM_Docs_TextColor_B_White_Tooltip"),
        [uiThemeColorDefinitions.colorConstants.COLOR_DEFAULT_TEXT]: t("LarkCCM_Docs_TextColor_B_White_Tooltip")
      },
      [docCalloutColorThemes.colorTypeKeys.TextColor]: {
        ...k[docCalloutColorThemes.colorTypeKeys.TextColor],
        [docCalloutColorThemes.colorVariants.Default]: t("LarkCCM_Docs_TextColor_B_White_Tooltip")
      },
      [docButtonBgColors.buttonBgColorKey.ButtonBackgroundColor]: {
        ...k[docButtonBgColors.buttonBgColorKey.ButtonBackgroundColor],
        [docButtonBgColors.ButtonBgColors.DeepNeutral]: t("LarkCCM_Docs_TextColor_B_White_Tooltip")
      }
    }
  };
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function I(e) {
    let {
      type: r,
      colorType: o,
      children: c
    } = e;
    let [u, p] = reactCoreLibraryReexport.useState(browserThemeManager.getThemeMode());
    reactCoreLibraryReexport.useEffect(() => browserThemeManager.registerThemeCallback(() => p(browserThemeManager.getThemeMode)), []);
    let h = reactCoreLibraryReexport.useMemo(() => function (e, r) {
      var n;
      let a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : browserThemeManager.getThemeMode();
      return ((n = Z[a || browserThemeManager.ThemeMode.LIGHT]) === null || n === undefined ? undefined : n[e]?.[r]) || "";
    }(r, o, u), [u]);
    return reactJsxRuntimeCoreReexport.jsx(localeContextProvider.localeWrapper, {
      PopperSidecar: popperTriggerComponent.PopperComponent,
      children: reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
        title: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "tooltip-color-panel__title",
          children: h
        }),
        placement: "top",
        offset: 3,
        showArrow: false,
        overlayClassName: s({
          "tooltip-color-panel": !browserEnvironmentDetectionUtils.browserDetector.isIPad || !browserEnvironmentDetectionUtils.browserDetector.isSafari,
          "tooltip-color-panel_ipadSafari": browserEnvironmentDetectionUtils.browserDetector.isIPad && browserEnvironmentDetectionUtils.browserDetector.isSafari
        }),
        children: c
      })
    });
  }
  require.d(exports, {
    ColorTooltipProvider: function () {
      return I;
    }
  });
}