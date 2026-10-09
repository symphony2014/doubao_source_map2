// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_d' to 'buildLegacyDocQuery'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28074.36f432f6.js
         * chunkId: 28074
         * moduleId: 471669
         */
module.exports = function (module, exports, require) {
  function n(e) {
    let {
      conversationId: t
    } = e;
    let i = ["type=legacy_doc"];
    if (t) {
      i.push(`conversation_id=${t}`);
    }
    return i.join("&");
  }
  require.d(exports, {
    buildLegacyDocQuery: function () {
      return n;
    }
  });
}