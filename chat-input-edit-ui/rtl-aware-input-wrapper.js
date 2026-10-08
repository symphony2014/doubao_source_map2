// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'RTLInputField'
// - Renamed export 'e' to 'RTLInputComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35606.ec1d3ef0.js
         * chunkId: 35606
         * moduleId: 91343
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var rtlLanguageDetectionHook = require("rtl-language-detection-hook") /*id: 179231*/;
  var semiInputComponent = require("semi-input-component") /*id: 410861*/;
  var formFieldWrapperComponent = require("form-field-wrapper-component") /*id: 520727*/;
  var businessLayoutContext_1 = require("business-layout-context_1") /*id: 47935*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      onlyAlighRightWhenRTL: i = false,
      ...l
    } = e;
    let {
      defaultValue: u,
      value: h,
      onChange: p,
      className: f
    } = l;
    let g = businessLayoutContext_1.defaultLayoutFn();
    let [m, b] = reactCoreLibraryReexport.useState("");
    let y = rtlLanguageDetectionHook.useTextDirection(String(h ?? m ?? u), true);
    return reactJsxRuntimeCoreReexport.jsx(semiInputComponent.InputComponent, {
      ref: t,
      dir: g && !i ? y : "ltr",
      ...l,
      className: o(f, {
        "align-right-DmNrDv": i && g
      }),
      onChange: (e, t) => {
        b(e);
        if (p != null) {
          p(e, t);
        }
      }
    });
  });
  let h = formFieldWrapperComponent.FormFieldWrapper(u, {
    maintainCursor: true
  });
  let p = e => reactJsxRuntimeCoreReexport.jsx(h, {
    ...e
  });
  require.d(exports, {
    RTLInputField: function () {
      return p;
    },
    RTLInputComponent: function () {
      return u;
    }
  });
}