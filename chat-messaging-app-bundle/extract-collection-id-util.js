// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'getCollectionId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 740633
         */
module.exports = function (module, exports, require) {
  let i = e => {
    var i;
    var l;
    let r = [];
    if (e == null ? undefined : e.attachments?.length) {
      r = (e == null ? undefined : (i = e.attachments) === null || i === undefined ? undefined : i.map(e => e.key)) || [];
    } else if (e == null ? undefined : e.references?.length) {
      r = (e == null ? undefined : (l = e.references) === null || l === undefined ? undefined : l.map(e => e.key)) || [];
    }
    return {
      collection_id: r.length ? r.length === 1 ? r[0] : JSON.stringify(r) : undefined
    };
  };
  require.d(exports, {
    getCollectionId: function () {
      return i;
    }
  });
}