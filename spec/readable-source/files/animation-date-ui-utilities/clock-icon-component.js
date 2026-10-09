// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ClockIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 667634
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = require("icon-component-factory") /*id: 129581*/.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM13.5 6.5V11.3787L17.0607 14.9393C17.6464 15.5251 17.6464 16.4749 17.0607 17.0607C16.4749 17.6464 15.5251 17.6464 14.9393 17.0607L10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12V6.5C10.5 5.67157 11.1716 5 12 5C12.8284 5 13.5 5.67157 13.5 6.5Z",
      fill: "currentColor"
    }));
  }, "clock");
  exports.ClockIcon = r;
}