// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$J' to 'expirationConstants'
// - Renamed export 'O1' to 'errorCodes'
// - Renamed export 'XF' to 'neverExpireValue'
// - Renamed export 'ev' to 'sizeBreakpoints'
// - Renamed export 'l' to 'metaFieldNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 918915
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  let a = {
    SevenDays: 604800,
    ThirtyDays: 2592000,
    NeverExpire: -1,
    None: 0
  };
  let u = a.NeverExpire;
  (i = {})[i.InvalidParams = 4000002] = "InvalidParams";
  i[i.ResourceDeleted = 4000007] = "ResourceDeleted";
  let c = i;
  let _ = {
    Large: Infinity,
    Middle: 770,
    Small: 580,
    Tiny: 400
  };
  (o = {}).Title = "title";
  o.Owner = "owner";
  o.Time = "time";
  o.Tool = "tool";
  o.AccessTime = "accessTime";
  let l = o;
  require.d(exports, {
    expirationConstants: function () {
      return a;
    },
    errorCodes: function () {
      return c;
    },
    neverExpireValue: function () {
      return u;
    },
    sizeBreakpoints: function () {
      return _;
    },
    metaFieldNames: function () {
      return l;
    }
  });
}