// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'ResizableDragBtn'
// - Renamed export 'w' to 'loadResizableBtn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image_crop.094a2056.js
         * chunkId: 63099
         * moduleId: 622599
         */
module.exports = function (module, exports, require) {
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var o = reactLoadableComponent;
  let a = () => require.e("resizable-draggable-btn") /*id: 43606*/.then(require.bind(require, "resizable-draggable-button-component") /*id: 993403*/);
  let s = o({
    loader: a,
    loading: () => null
  });
  require.d(exports, {
    ResizableDragBtn: function () {
      return s;
    },
    loadResizableBtn: function () {
      return a;
    }
  });
}