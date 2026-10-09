// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cm' to 'viewStates'
// - Renamed export 'IY' to 'presentationMode'
// - Renamed export 'v$' to 'viewTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 739915
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  (i = {}).NONE = "none";
  i.DOCUMENT = "document";
  i.PAGINATION = "pagination";
  let a = i;
  (o = {}).DONE = "done";
  o.ENTERING = "entering";
  o.EXITING = "exiting";
  o.SWITCHING = "switching";
  let u = o;
  let c = "presentation-mode";
  require.d(exports, {
    viewStates: function () {
      return u;
    },
    presentationMode: function () {
      return c;
    },
    viewTypes: function () {
      return a;
    }
  });
}