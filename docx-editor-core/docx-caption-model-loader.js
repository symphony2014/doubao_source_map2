// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'loadCaptionModel'
// - Renamed export 'i' to 'createCaptionModel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 947061
         */
module.exports = function (module, exports, require) {
  let r;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  let l = null;
  async function a() {
    if (!r) {
      if (l) {
        return l;
      }
      l = docxTaskSchedulerUtilities.scheduleTaskWithConfig({
        action: () => require.e("docx_caption_find_and_replace_model") /*id: 88847*/.then(require.bind(require, "docx-caption-find-replace") /*id: 997523*/),
        name: "docx.caption.find_and_replace"
      });
      try {
        let {
          CaptionFindAndReplaceModel: e
        } = await l;
        r = e;
      } finally {
        l = null;
      }
    }
  }
  function s(e) {
    a();
    if (r) {
      return new r(e);
    } else {
      return null;
    }
  }
  require.d(exports, {
    loadCaptionModel: function () {
      return a;
    },
    createCaptionModel: function () {
      return s;
    }
  });
}