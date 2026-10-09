// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'ContentDelta'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 768480
         */
module.exports = function (module, exports, require) {
  var tsTranspileHelpers = require("ts-transpile-helpers") /*id: 502250*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  require("diff-match-patch") /*id: 183089*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    tsTranspileHelpers.extendClass(e, t);
    var r = e.prototype;
    r.create = function (t) {
      t.zoneType = t.zoneType || this.zoneType;
      return new e(t);
    };
    r.insert = function (e, r) {
      return t.prototype.insert.call(this, e, r, false);
    };
    r.insertLineMarker = function (t = {}) {
      var e = Object.assign({
        lmkr: 1
      }, t);
      this.insert(documentOperationConstants.wildcardChar, e);
      return this;
    };
    r.insertEnterAndLineMarker = function (t) {
      this.insert(documentOperationConstants.newlineChar, t && t.enterAttributes ? t.enterAttributes : {});
      var e = Object.assign({
        lmkr: 1
      }, t && t.lineAttributes ? t.lineAttributes : {});
      this.insert(documentOperationConstants.wildcardChar, e);
      return this;
    };
    return e;
  }(function (t) {
    function e(e = {}) {
      var r = t.call(this) || this;
      r.ops = [];
      var n = e.zoneId;
      var i = e.ops;
      r.zoneId = n || "0";
      r.zoneType = documentOperationConstants.structureTypes.Content;
      if (i && i.length > 0) {
        r.ops = i;
      }
      return r;
    }
    tsTranspileHelpers.extendClass(e, t);
    var r = e.prototype;
    r.create = function (t) {
      t.zoneType = t.zoneType || this.zoneType;
      return new e(t);
    };
    r.insertEnter = function (t = {}) {
      this.insert(documentOperationConstants.newlineChar, t);
      return this;
    };
    r.insertEnterAndLineMarker = function (t) {
      return this;
    };
    r.insertLineMarker = function (t) {
      return this;
    };
    return e;
  }(deltaSetCore.Delta));
  deltaSetCore.Delta.registerCreator(documentOperationConstants.structureTypes.Content, u);
  require.d(exports, {
    ContentDelta: function () {
      return u;
    }
  });
}