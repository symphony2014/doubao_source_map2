// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'ImageRefWithDelete'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-chat-input.5c53534b.js
         * chunkId: 45281
         * moduleId: 83012
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var exitToAppIcon = require("exit-to-app-icon") /*id: 703191*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var a = {
    ref: "ref-xLQZMN",
    "ref-icon": "ref-icon-hfim4s",
    image: "image-KAy0Y0",
    close: "close-lQMuE0"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      imgSrc: t,
      showDelete: n = false,
      onDelete: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a.ref,
      children: [reactJsxRuntimeCoreReexport.jsx(exitToAppIcon.ExitToAppIcon, {
        className: a["ref-icon"]
      }), reactJsxRuntimeCoreReexport.jsx("img", {
        className: a.image,
        src: t
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "w-0 grow"
      }), n && reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
        className: a.close,
        onClick: () => o == null ? undefined : o()
      })]
    });
  };
  require.d(exports, {
    ImageRefWithDelete: function () {
      return o;
    }
  });
}