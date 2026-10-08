// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'businessConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 187074
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var i;
  var r;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  (i = l || {})[i.immediate = 0] = "immediate";
  i[i.appInit = 1] = "appInit";
  i[i.docxInit = 2] = "docxInit";
  i[i.renderFirstScreen = 3] = "renderFirstScreen";
  i[i.firstScreenMainContentUsable = 4] = "firstScreenMainContentUsable";
  i[i.viewportAllViewable = 5] = "viewportAllViewable";
  i[i.viewportAllUsable = 6] = "viewportAllUsable";
  i[i.idle = 15] = "idle";
  i.CommentRendered = "CommentRendered";
  i.SectionNavRendered = "SectionNavRendered";
  i.BlockRendered = "BlockRendered";
  i[i.EditorMount = 1] = "EditorMount";
  i[i.Done = 15] = "Done";
  var l = i;
  (r = s || {}).Doc = "Doc";
  r.Sheet = "Sheet";
  r.Box = "Box";
  r.Wiki = "Wiki";
  r.Docx = "Docx";
  r.Slides = "Slides";
  r.Bitable = "Bitable";
  r.Space = "Space";
  var s = r;
  let c = {
    DocxStage: l,
    Business: s,
    updateBusinessStage: () => ({
      type: "test"
    }),
    MultiStageRenderContainer: e => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: e.children
    }),
    renderStart: 0
  };
  require.d(exports, {
    businessConstants: function () {
      return c;
    }
  });
}