// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(283731) to 'url-search-params-polyfill'
// - Resolved require(251413) to 'form-data-export'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 775091
         */
module.exports = function (module, exports, require) {
  module.exports = {
    isBrowser: true,
    classes: {
      URLSearchParams: require("url-search-params-polyfill") /*id: 283731*/,
      FormData: require("form-data-export") /*id: 251413*/,
      Blob: Blob
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
}