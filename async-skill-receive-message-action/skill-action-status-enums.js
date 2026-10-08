// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O0' to 'ProcessingStatus'
// - Renamed export 'ON' to 'SearchStatus'
// - Renamed export 'hh' to 'GenerationStatus'
// - Renamed export 'rn' to 'LinkSourceType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 313178
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var a;
  (i = {})[i.Generated = 1] = "Generated";
  i[i.Modified = 2] = "Modified";
  let l = i;
  (r = {})[r.PROCESSING = 0] = "PROCESSING";
  r[r.FAILED = 1] = "FAILED";
  r[r.SUCCESS = 2] = "SUCCESS";
  let s = r;
  (o = {})[o.WaitingForSearch = 1] = "WaitingForSearch";
  o[o.Searched = 2] = "Searched";
  o[o.Modified = 3] = "Modified";
  let d = o;
  (a = {})[a.WEBLink = 1] = "WEBLink";
  a[a.ManualLink = 2] = "ManualLink";
  a[a.ManualFile = 3] = "ManualFile";
  let c = a;
  require.d(exports, {
    ProcessingStatus: function () {
      return s;
    },
    SearchStatus: function () {
      return d;
    },
    GenerationStatus: function () {
      return l;
    },
    LinkSourceType: function () {
      return c;
    }
  });
}