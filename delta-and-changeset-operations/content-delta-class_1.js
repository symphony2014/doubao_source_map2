// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'ContentDelta'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46252.e1de9c24.js
         * chunkId: 46252
         * moduleId: 564245
         */
module.exports = function (module, exports, require) {
  var typescriptHelperUtils_1 = require("typescript-helper-utils_1") /*id: 712698*/;
  var patchOperationConstants = require("patch-operation-constants") /*id: 329334*/;
  require("diff-match-patch") /*id: 183089*/;
  var deltaPatchOperations = require("delta-patch-operations") /*id: 713456*/;
  var s = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptHelperUtils_1.extendsClass(e, t);
    var n = e.prototype;
    n.create = function (t) {
      t.zoneType = t.zoneType || this.zoneType;
      return new e(t);
    };
    n.insert = function (e, n) {
      return t.prototype.insert.call(this, e, n, false);
    };
    n.insertLineMarker = function (t = {}) {
      var e = Object.assign({
        lmkr: 1
      }, t);
      this.insert(patchOperationConstants.wildcard, e);
      return this;
    };
    n.insertEnterAndLineMarker = function (t) {
      this.insert(patchOperationConstants.newline, t && t.enterAttributes ? t.enterAttributes : {});
      var e = Object.assign({
        lmkr: 1
      }, t && t.lineAttributes ? t.lineAttributes : {});
      this.insert(patchOperationConstants.wildcard, e);
      return this;
    };
    return e;
  }(function (t) {
    function e(e = {}) {
      var n = t.call(this) || this;
      n.ops = [];
      var r = e.zoneId;
      var o = e.ops;
      n.zoneId = r || "0";
      n.zoneType = patchOperationConstants.patchTypes.Content;
      if (o && o.length > 0) {
        n.ops = o;
      }
      return n;
    }
    typescriptHelperUtils_1.extendsClass(e, t);
    var n = e.prototype;
    n.create = function (t) {
      t.zoneType = t.zoneType || this.zoneType;
      return new e(t);
    };
    n.insertEnter = function (t = {}) {
      this.insert(patchOperationConstants.newline, t);
      return this;
    };
    n.insertEnterAndLineMarker = function (t) {
      return this;
    };
    n.insertLineMarker = function (t) {
      return this;
    };
    return e;
  }(deltaPatchOperations.Delta));
  deltaPatchOperations.Delta.registerCreator(patchOperationConstants.patchTypes.Content, s);
  require.d(exports, {
    ContentDelta: function () {
      return s;
    }
  });
}