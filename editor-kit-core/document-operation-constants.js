// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AS' to 'zoneType'
// - Renamed export 'Ak' to 'structureTypes'
// - Renamed export 'F5' to 'wildcardChar'
// - Renamed export 'HP' to 'operationTypes'
// - Renamed export 'K5' to 'newlineChar'
// - Renamed export 'Ru' to 'defaultValue'
// - Renamed export 'Zf' to 'structureMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 134823
         */
module.exports = function (module, exports, require) {
  (n = i ||= {}).DELETE = "delete";
  n.RETAIN = "retain";
  n.INSERT = "insert";
  (o = u ||= {}).Content = "Z";
  o.Row = "R";
  o.Column = "C";
  var n;
  var o;
  var i;
  var u;
  var a = "\n";
  var s = "*";
  var c = {
    content: u.Content,
    rs: u.Row,
    cs: u.Column
  };
  var f = "0";
  var l = "zoneType";
  require.d(exports, {
    zoneType: function () {
      return l;
    },
    structureTypes: function () {
      return u;
    },
    wildcardChar: function () {
      return s;
    },
    operationTypes: function () {
      return i;
    },
    newlineChar: function () {
      return a;
    },
    defaultValue: function () {
      return f;
    },
    structureMap: function () {
      return c;
    }
  });
}