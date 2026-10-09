// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'sourceMapPathUtil'
// - Resolved require(919725) to 'source-map-path-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53224.ebaf78df.js
         * chunkId: 53224
         * moduleId: 531074
         */
module.exports = function (module, exports, require) {
  var sourceMapPathUtil = require("source-map-path-util") /*id: 919725*/;
  function i() {
    this._array = [];
    this._sorted = true;
    this._last = {
      generatedLine: -1,
      generatedColumn: 0
    };
  }
  i.prototype.unsortedForEach = function (e, t) {
    this._array.forEach(e, t);
  };
  i.prototype.add = function (e) {
    var t;
    var n;
    var i;
    var o;
    var a;
    n = (t = this._last).generatedLine;
    i = e.generatedLine;
    o = t.generatedColumn;
    a = e.generatedColumn;
    if (i > n || i == n && a >= o || sourceMapPathUtil.compareByGeneratedPositionsInflated(t, e) <= 0) {
      this._last = e;
    } else {
      this._sorted = false;
    }
    this._array.push(e);
  };
  i.prototype.toArray = function () {
    if (!this._sorted) {
      this._array.sort(sourceMapPathUtil.compareByGeneratedPositionsInflated);
      this._sorted = true;
    }
    return this._array;
  };
  exports.MappingList = i;
}