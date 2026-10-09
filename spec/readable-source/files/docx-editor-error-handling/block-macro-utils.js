// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EH' to 'formatOutsideTag'
// - Renamed export 'WI' to 'formatBlockTag'
// - Renamed export 'XW' to 'blockTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 761509
         */
module.exports = function (module, exports, require) {
  let n = new Set(["iframe", "table", "diagram", "sheet", "isv", "whiteboard", "bookmark", "base_refer", "task", "poll", "file", "callout", "ai", "calendar_event", "synced_source", "image", "okrx", "agenda", "wiki_catalog", "folder_manager"]);
  function o(e, i = "m") {
    return `<%=${i}[${e}]%>`;
  }
  function l(e, i = "m") {
    return `<%=${i}[outside_${e}]%>`;
  }
  require.d(exports, {
    formatOutsideTag: function () {
      return l;
    },
    formatBlockTag: function () {
      return o;
    },
    blockTypes: function () {
      return n;
    }
  });
}