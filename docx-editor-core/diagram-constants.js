// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V1' to 'diagramTypes'
// - Renamed export 'o4' to 'diagramActions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 75626
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  (r = {}).OPEN_VIEWER = "open_diagram_image_viewer";
  r.DELETE_DIAGRAM_BLOCK = "delete_diagram_block";
  r.LOADED = "LOADED";
  let a = r;
  (o = {}).FLOWCHART = "flowchart";
  o.UML = "uml";
  o.WHITEBOARD = "whiteboard";
  o.DIAGRAM_FLOWCHART = "diagram_flowchart";
  o.DIAGRAM_UML = "diagram_uml";
  o.MINDNOTE = "mindnote";
  let s = o;
  require.d(exports, {
    diagramTypes: function () {
      return s;
    },
    diagramActions: function () {
      return a;
    }
  });
}