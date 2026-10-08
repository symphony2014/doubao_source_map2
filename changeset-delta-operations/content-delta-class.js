// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'ContentDelta'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 69805.3aa70c1d.js
         * chunkId: 69805
         * moduleId: 381475
         */
module.exports = function (module, exports, require) {
  var typescriptHelperUtils = require("typescript-helper-utils") /*id: 669540*/;
  var zoneStructConsts = require("zone-struct-consts") /*id: 750205*/;
  require("diff-match-patch") /*id: 183089*/;
  var deltaSetOperations = require("delta-set-operations") /*id: 454622*/;
  var s = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptHelperUtils.extendsClass(e, t);
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
      this.insert(zoneStructConsts.wildcard, e);
      return this;
    };
    n.insertEnterAndLineMarker = function (t) {
      this.insert(zoneStructConsts.newlineChar, t && t.enterAttributes ? t.enterAttributes : {});
      var e = Object.assign({
        lmkr: 1
      }, t && t.lineAttributes ? t.lineAttributes : {});
      this.insert(zoneStructConsts.wildcard, e);
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
      n.zoneType = zoneStructConsts.structTypes.Content;
      if (o && o.length > 0) {
        n.ops = o;
      }
      return n;
    }
    typescriptHelperUtils.extendsClass(e, t);
    var n = e.prototype;
    n.create = function (t) {
      t.zoneType = t.zoneType || this.zoneType;
      return new e(t);
    };
    n.insertEnter = function (t = {}) {
      this.insert(zoneStructConsts.newlineChar, t);
      return this;
    };
    n.insertEnterAndLineMarker = function (t) {
      return this;
    };
    n.insertLineMarker = function (t) {
      return this;
    };
    return e;
  }(deltaSetOperations.Delta));
  deltaSetOperations.Delta.registerCreator(zoneStructConsts.structTypes.Content, s);
  require.d(exports, {
    ContentDelta: function () {
      return s;
    }
  });
}