// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AS' to 'zoneType'
// - Renamed export 'Ak' to 'patchTypes'
// - Renamed export 'F5' to 'wildcard'
// - Renamed export 'HP' to 'operationKind'
// - Renamed export 'K5' to 'newline'
// - Renamed export 'Ru' to 'zero'
// - Renamed export 'Zf' to 'cellType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46252.e1de9c24.js
         * chunkId: 46252
         * moduleId: 329334
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
  var c = "*";
  var u = {
    content: s.Content,
    rs: s.Row,
    cs: s.Column
  };
  var l = "0";
  var h = "zoneType";
  require.d(exports, {
    zoneType: function () {
      return h;
    },
    patchTypes: function () {
      return s;
    },
    wildcard: function () {
      return c;
    },
    operationKind: function () {
      return o;
    },
    newline: function () {
      return a;
    },
    zero: function () {
      return l;
    },
    cellType: function () {
      return u;
    }
  });
}