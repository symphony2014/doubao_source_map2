// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F$' to 'translationTypes'
// - Renamed export 'Ly' to 'navigationDir'
// - Renamed export 'Q_' to 'uiStates'
// - Renamed export 'hL' to 'resultCodes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 421780
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var c;
  (o = {})[o.ORIGINAL = 0] = "ORIGINAL";
  o[o.TRANSLATION = 1] = "TRANSLATION";
  let u = o;
  (i = {}).previous = "previous";
  i.next = "next";
  let a = i;
  (l = {})[l.SUCCESS = 0] = "SUCCESS";
  l[l.FAIL = 1] = "FAIL";
  l[l.NETWORK_ERROR = 2] = "NETWORK_ERROR";
  l[l.UNAVAILABLE = 3] = "UNAVAILABLE";
  l[l.CANCEL = 4] = "CANCEL";
  l[l.TRANSLATION_MODEL_FAIL = 5] = "TRANSLATION_MODEL_FAIL";
  l[l.EXIST = 6] = "EXIST";
  l[l.SEQUENCE_ERROR = 7] = "SEQUENCE_ERROR";
  let s = l;
  (c = {}).SUCCESS = "success";
  c.LOADING = "loading";
  c.FAILED = "failed";
  let d = c;
  require.d(exports, {
    translationTypes: function () {
      return u;
    },
    navigationDir: function () {
      return a;
    },
    uiStates: function () {
      return d;
    },
    resultCodes: function () {
      return s;
    }
  });
}