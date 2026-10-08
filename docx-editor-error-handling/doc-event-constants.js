// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Qu' to 'eventTypeCode'
// - Renamed export 'U5' to 'copyFailEvent'
// - Renamed export 'U_' to 'docOopsClickEvent'
// - Renamed export 'Wu' to 'copySuccessEvent'
// - Renamed export 'n' to 'clickPopupEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 816011
         */
module.exports = function (module, exports, require) {
  let n = "ccm_doc_oops_page_click";
  let o = "copy_successful";
  let l = "copy_fail";
  let s = "click_pop_up";
  let a = 3;
  require.d(exports, {
    eventTypeCode: function () {
      return a;
    },
    copyFailEvent: function () {
      return l;
    },
    docOopsClickEvent: function () {
      return n;
    },
    copySuccessEvent: function () {
      return o;
    },
    clickPopupEvent: function () {
      return s;
    }
  });
}