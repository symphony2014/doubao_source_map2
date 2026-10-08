// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactDomEntryWrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-react.0f1f9659.js
         * chunkId: 43361
         * moduleId: 306316
         */
module.exports = function (module, exports, require) {
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  exports.createRoot = reactDomEntryWrapper.createRoot;
  exports.hydrateRoot = reactDomEntryWrapper.hydrateRoot;
}