// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BH' to 'getModeIcon'
// - Renamed export 'YQ' to 'findMenuNameByType'
// - Renamed export 'qD' to 'ModeSelectorButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 90945
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var buttonComponent_1 = require("button-component_1") /*id: 893534*/;
  var aiCreationGuidanceIcon = require("ai-creation-guidance-icon") /*id: 99723*/;
  var locationPinSvgIcon = require("location-pin-svg-icon") /*id: 575962*/;
  var reactSvgIconGoogleLogo = require("react-svg-icon-google-logo") /*id: 203173*/;
  var locationIconSvg = require("location-icon-svg") /*id: 379595*/;
  var svgArrowIconComponent_1 = require("svg-arrow-icon-component_1") /*id: 760619*/;
  var modeConstants = require("mode-constants") /*id: 701817*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => require.e("new-tag-component") /*id: 53191*/.then(require.bind(require, "skillbar-promote-tag") /*id: 649962*/).then(e => ({
    default: e.NewTags
  }))));
  let _ = (e, t) => {
    return e.find(e => String(e.menu_type) === String(t))?.name;
  };
  let v = e => {
    switch (e) {
      case modeConstants.modeConstants.Off:
        return reactJsxRuntimeCoreReexport.jsx(aiCreationGuidanceIcon.AiCreationIcon, {});
      case modeConstants.modeConstants.On:
        return reactJsxRuntimeCoreReexport.jsx(locationPinSvgIcon.LocationPinIcon, {});
      case modeConstants.modeConstants.Auto:
        return reactJsxRuntimeCoreReexport.jsx(reactSvgIconGoogleLogo.GoogleLogoIcon, {});
      case modeConstants.modeConstants.Pro:
        return reactJsxRuntimeCoreReexport.jsx(locationIconSvg.LocationIcon, {});
      default:
        return reactJsxRuntimeCoreReexport.jsx(aiCreationGuidanceIcon.AiCreationIcon, {});
    }
  };
  let b = e => {
    let {
      className: t,
      fallBackTitle: n,
      onHover: i
    } = e;
    let r = chatStoreManager.getStoreState("deepThinkingControlStore");
    let l = _(r.menuLists, modeConstants.modeConstants.Off);
    let c = r.showActionBarNewTag && r.newTagsExposeTime.outer <= 3;
    return reactJsxRuntimeCoreReexport.jsx(buttonComponent_1.Button, {
      variant: "text",
      size: "lg",
      className: `
        flex !text-[14px] !leading-22
        ${t ?? ""}
      `,
      leadingIcon: reactJsxRuntimeCoreReexport.jsx(aiCreationGuidanceIcon.AiCreationIcon, {}),
      onMouseOver: i,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex items-center",
        children: [l || n, c && reactJsxRuntimeCoreReexport.jsx(p, {}), reactJsxRuntimeCoreReexport.jsx(svgArrowIconComponent_1.ArrowIcon, {
          className: o("size-12 rotate-0", "text-dbx-text-tertiary")
        })]
      })
    });
  };
  require.d(exports, {
    getModeIcon: function () {
      return v;
    },
    findMenuNameByType: function () {
      return _;
    },
    ModeSelectorButton: function () {
      return b;
    }
  });
}