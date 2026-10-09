// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'getRootBlockText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 196698
         */
module.exports = function (module, exports, require) {
  let n = e => {
    var i;
    var r;
    if (!e) {
      return "";
    }
    let {
      rootBlockId: n
    } = e;
    return ((r = e.getBlockModelByBlockIdNotCheck(n)) === null || r === undefined ? undefined : (i = r.getText()) === null || i === undefined ? undefined : i.trim()) || "";
  };
  require.d(exports, {
    getRootBlockText: function () {
      return n;
    }
  });
}