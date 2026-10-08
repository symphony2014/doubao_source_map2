// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'SamanthaUploadBtn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: read-pdf-skill-guidance-page-v2.2be10363.js
         * chunkId: 92219
         * moduleId: 82955
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var skillPinIcon_1 = require("skill-pin-icon_1") /*id: 646133*/;
  var fileUploadHandlerHook = require("file-upload-handler-hook") /*id: 249388*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      className: t,
      onFilesChange: n,
      onClickTrack: i,
      testId: d,
      size: u
    } = e;
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let {
      handleClickButton: f,
      inputElement: h
    } = fileUploadHandlerHook.useFileUpload({
      onFilesChange: n,
      onClickTrack: i,
      testId: d
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        type: "tertiary",
        "data-testid": "upload_file_button",
        icon: reactJsxRuntimeCoreReexport.jsx(skillPinIcon_1.SkillPinIcon, {}),
        onClick: f,
        className: r(t, "button-a3ZdgO"),
        size: u,
        children: p("landing_creation_browsefile")
      }), h]
    });
  };
  require.d(exports, {
    SamanthaUploadBtn: function () {
      return d;
    }
  });
}