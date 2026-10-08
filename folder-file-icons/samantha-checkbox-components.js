// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'CheckboxWrapper'
// - Renamed export 'F' to 'CheckboxGroup'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-ai-creation-guidance.67ffc317.js
         * chunkId: 15933
         * moduleId: 739837
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var checkboxWrapperComponent = require("checkbox-wrapper-component") /*id: 495136*/;
  var checkboxGroupComponent = require("checkbox-group-component") /*id: 654013*/;
  var l = {
    "samantha-checkbox": "samantha-checkbox-iF8c3Q",
    samanthaCheckbox: "samantha-checkbox-iF8c3Q",
    "samantha-checkbox-group": "samantha-checkbox-group-ZsOrIy",
    samanthaCheckboxGroup: "samantha-checkbox-group-ZsOrIy"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      type: n = "default",
      ...r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(checkboxWrapperComponent.CheckboxWrapper, {
      ref: t,
      ...r,
      className: o(l["samantha-checkbox"], l[n], r.className),
      children: e.children
    });
  });
  let u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      type: n = "default",
      ...r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(checkboxGroupComponent.CheckboxGroup, {
      ref: t,
      ...r,
      className: o(l["samantha-checkbox-group"], l[n], r.className),
      children: e.children
    });
  });
  require.d(exports, {
    CheckboxWrapper: function () {
      return d;
    },
    CheckboxGroup: function () {
      return u;
    }
  });
}