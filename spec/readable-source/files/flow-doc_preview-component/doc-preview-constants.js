// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GA' to 'invalidCharRegex'
// - Renamed export 'Pv' to 'maxFileSizeLimit'
// - Renamed export 'XX' to 'uploadStatusTypes'
// - Renamed export 'cX' to 'interactionModes'
// - Renamed export 'eF' to 'debounceDelayMs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 162554
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  (r = {}).SidePanel = "SidePanel";
  r.Slash = "Slash";
  r.Drag = "Drag";
  r.Paste = "Paste";
  let a = r;
  (o = {}).Success = "Success";
  o.Fail = "Fail";
  let l = o;
  let c = 10737418240;
  let s = 250;
  let u = /(?:[?*<>:"/\\|]+)/;
  require.d(exports, {
    invalidCharRegex: function () {
      return u;
    },
    maxFileSizeLimit: function () {
      return c;
    },
    uploadStatusTypes: function () {
      return l;
    },
    interactionModes: function () {
      return a;
    },
    debounceDelayMs: function () {
      return s;
    }
  });
}