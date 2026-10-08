// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'vk' to 'TaskState'
// - Renamed export 'KW' to 'CompletionMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 904051
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  (o = {})[o.UNKNOWN_MODE = 0] = "UNKNOWN_MODE";
  o[o.USER_COMPLETE = 1] = "USER_COMPLETE";
  o[o.TASK_COMPLETE = 2] = "TASK_COMPLETE";
  let l = o;
  (i = {})[i.New = 0] = "New";
  i[i.Initializing = 1] = "Initializing";
  i[i.Initialized = 2] = "Initialized";
  i[i.Failed = 3] = "Failed";
  let a = i;
  require.d(exports, {
    TaskState: function () {
      return a;
    },
    CompletionMode: function () {
      return l;
    }
  });
}