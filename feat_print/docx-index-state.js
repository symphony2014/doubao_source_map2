// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'docxIndexState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_index_delay.3c55e6b1.js
         * chunkId: 82165
         * moduleId: 283622
         */
module.exports = function (module, exports, require) {
  let o = {
    getIsShow(e) {
      let {
        fold: i
      } = e.props.recursionProps;
      return i.isShow(e.id);
    },
    hasSheetTakeScreenshot: false,
    setHasSheetTakeScreenshot(e) {
      this.hasSheetTakeScreenshot = e;
    },
    getHasSheetTakeScreenshot() {
      return this.hasSheetTakeScreenshot;
    }
  };
  require.d(exports, {
    docxIndexState: function () {
      return o;
    }
  });
}