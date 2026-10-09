// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q7' to 'ColumnDelta'
// - Renamed export 'lm' to 'ZoneDelta'
// - Renamed export 'rh' to 'RowDelta'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 240236
         */
module.exports = function (module, exports, require) {
  var tsTranspileHelpers = require("ts-transpile-helpers") /*id: 502250*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  require("diff-match-patch") /*id: 183089*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var a = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      n.ops = [];
      var r = e.zoneId;
      var i = e.ops;
      var o = e.zoneType;
      n.zoneId = r;
      n.zoneType = o;
      if (i && i.length > 0) {
        n.ops = i;
      }
      return n;
    }
    tsTranspileHelpers.extendClass(e, t);
    var n = e.prototype;
    n.insert = function (e, n) {
      if (e) {
        return t.prototype.insert.call(this, {
          id: e
        }, n, false);
      } else {
        return this;
      }
    };
    n.create = function (t) {
      t.zoneType = t.zoneType || this.zoneType;
      return new e(t);
    };
    return e;
  }(deltaSetCore.Delta);
  var s = function (t) {
    function e(e) {
      return t.call(this, tsTranspileHelpers.objectAssign({
        zoneType: documentOperationConstants.structureTypes.Row
      }, e)) || this;
    }
    tsTranspileHelpers.extendClass(e, t);
    return e;
  }(a);
  var l = function (t) {
    function e(e) {
      return t.call(this, tsTranspileHelpers.objectAssign({
        zoneType: documentOperationConstants.structureTypes.Column
      }, e)) || this;
    }
    tsTranspileHelpers.extendClass(e, t);
    return e;
  }(a);
  deltaSetCore.Delta.registerCreator(documentOperationConstants.structureTypes.Row, s);
  deltaSetCore.Delta.registerCreator(documentOperationConstants.structureTypes.Column, l);
  require.d(exports, {
    ColumnDelta: function () {
      return l;
    },
    ZoneDelta: function () {
      return a;
    },
    RowDelta: function () {
      return s;
    }
  });
}