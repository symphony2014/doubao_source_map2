// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K5' to 'flowTaskType'
// - Renamed export 'Ri' to 'canvasElementId'
// - Renamed export 'bw' to 'docStatus'
// - Renamed export 'eU' to 'artifactActionType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 729799
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var l = {
    Generating: 1,
    Generated: 2
  };
  var a = {
    InstructRewrite: 1,
    ChatRewrite: 2,
    StartUp: 3
  };
  (r = {})[r.ArtifactPolish = 1] = "ArtifactPolish";
  r[r.ArtifactAdjustLonger = 2] = "ArtifactAdjustLonger";
  r[r.ArtifactAdjustShorter = 3] = "ArtifactAdjustShorter";
  let s = r;
  (o = {}).CanvasFunction = "canvas_function";
  o.CanvasSelectionBar = "canvas_selection_bar";
  let c = o;
  require.d(exports, {
    flowTaskType: function () {
      return a;
    },
    canvasElementId: function () {
      return c;
    },
    docStatus: function () {
      return l;
    },
    artifactActionType: function () {
      return s;
    }
  });
}