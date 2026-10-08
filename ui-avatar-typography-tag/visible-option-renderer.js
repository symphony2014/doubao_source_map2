// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'renderOptionItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 71518.fd54164e.js
         * chunkId: 71518
         * moduleId: 131028
         */
module.exports = function (module, exports, require) {
  exports.renderOptionItem = e => {
    let {
      index: t,
      data: n,
      style: s
    } = e;
    let {
      visibleOptions: i,
      renderOption: o
    } = n;
    return o(i[t], t, s);
  };
}