// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AS' to 'zoneType'
// - Renamed export 'Ak' to 'structTypes'
// - Renamed export 'F5' to 'wildcard'
// - Renamed export 'HP' to 'operationTypes'
// - Renamed export 'K5' to 'newlineChar'
// - Renamed export 'Ru' to 'defaultZero'
// - Renamed export 'Zf' to 'structKeyMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 69805.3aa70c1d.js
         * chunkId: 69805
         * moduleId: 750205
         */
module.exports = function (module, exports, require) {
  (r = o ||= {}).DELETE = "delete";
  r.RETAIN = "retain";
  r.INSERT = "insert";
  (i = s ||= {}).Content = "Z";
  i.Row = "R";
  i.Column = "C";
  var r;
  var i;
  var o;
  var s;
  var a = "\n";
  var u = "*";
  var c = {
    content: s.Content,
    rs: s.Row,
    cs: s.Column
  };
  var h = "0";
  var f = "zoneType";
  require.d(exports, {
    zoneType: function () {
      return f;
    },
    structTypes: function () {
      return s;
    },
    wildcard: function () {
      return u;
    },
    operationTypes: function () {
      return o;
    },
    newlineChar: function () {
      return a;
    },
    defaultZero: function () {
      return h;
    },
    structKeyMap: function () {
      return c;
    }
  });
}