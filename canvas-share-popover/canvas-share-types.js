// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M5' to 'ActionType'
// - Renamed export 'Xh' to 'AgeRestriction'
// - Renamed export 'ch' to 'SentimentType'
// - Renamed export 'tR' to 'DisplayPolicy'
// - Renamed export 'xH' to 'SourceType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5550.70936565.js
         * chunkId: 5550
         * moduleId: 546605
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var o;
  var s;
  var a;
  (n = {})[n.Pass = 1] = "Pass";
  n[n.Forbid = 2] = "Forbid";
  n[n.Display = 3] = "Display";
  let l = n;
  (i = {})[i.NotAllowedAge = 1] = "NotAllowedAge";
  i[i.TooMinAge = 2] = "TooMinAge";
  let c = i;
  (o = {})[o.Launch = 1] = "Launch";
  let u = o;
  (s = {})[s.NonNeutral = 1] = "NonNeutral";
  s[s.Neutral = 2] = "Neutral";
  let d = s;
  (a = {})[a.DocX = 24] = "DocX";
  let p = a;
  require.d(exports, {
    ActionType: function () {
      return u;
    },
    AgeRestriction: function () {
      return c;
    },
    SentimentType: function () {
      return d;
    },
    DisplayPolicy: function () {
      return l;
    },
    SourceType: function () {
      return p;
    }
  });
}