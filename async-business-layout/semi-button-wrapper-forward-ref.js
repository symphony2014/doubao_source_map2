// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'SemiButtonWrapperForwardRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 126818
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var c = {
    container: "container-cf56h_",
    "size-small": "size-small-nZYpfk",
    sizeSmall: "size-small-nZYpfk",
    "size-default": "size-default-aJfD9L",
    sizeDefault: "size-default-aJfD9L",
    "size-large": "size-large-igoSHR",
    sizeLarge: "size-large-igoSHR",
    "theme-primary": "theme-primary-npiB1U",
    themePrimary: "theme-primary-npiB1U",
    "set-svg-full": "set-svg-full-C22evP",
    setSvgFull: "set-svg-full-C22evP",
    hoverable: "hoverable-JxlSLz",
    mobile: "mobile-Ghwvrd",
    "theme-borderless": "theme-borderless-qJuY6h",
    themeBorderless: "theme-borderless-qJuY6h",
    "theme-light": "theme-light-FoHT7n",
    themeLight: "theme-light-FoHT7n"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      theme: n = "borderless",
      setSvgFull: i = true,
      hoverable: r = true,
      className: u,
      onMouseEnter: h,
      ...f
    } = e;
    let {
      disabled: p = false,
      size: m = "default"
    } = f;
    return reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
      ref: t,
      className: o(c.container, c[`size-${m}`], c[`theme-${n}`], `!w-40 !h-40 ${u}`, {
        "opacity-30": p,
        [c.hoverable]: r,
        [c.mobile]: userAgentDeviceDetector.isMobile(),
        [c["set-svg-full"]]: i
      }),
      ...f,
      onMouseEnter: async e => {
        if (userAgentDeviceDetector.isMobile() && userAgentDeviceDetector.isWebKit()) {
          await promiseAsyncUtilities.createDelayedPromise(100);
        }
        if (h != null) {
          h(e);
        }
      }
    });
  });
  require.d(exports, {
    SemiButtonWrapperForwardRef: function () {
      return u;
    }
  });
}