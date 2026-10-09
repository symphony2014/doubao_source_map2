// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Kr' to 'ContentType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 921355
         */
module.exports = function (module, exports, require) {
  var n;
  (n = {})[n.Default = 0] = "Default";
  n[n.Documents = 1] = "Documents";
  n[n.ConversationFiles = 2] = "ConversationFiles";
  n[n.MeetingMinutes = 3] = "MeetingMinutes";
  n[n.CodeArtifact = 4] = "CodeArtifact";
  n[n.Creation = 5] = "Creation";
  let a = n;
  require.d(exports, {
    ContentType: function () {
      return a;
    }
  });
}