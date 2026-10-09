// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'classRegistry'
// - Renamed export 'Z' to 'FormatterBase'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 187930
         */
module.exports = function (module, exports, require) {
  var i = new (function () {
    function t() {
      this._classMap = {};
    }
    t.prototype.registerClass = function (t, e) {
      this._classMap[t] = e;
    };
    t.prototype.getClass = function (t) {
      return this._classMap[t];
    };
    return t;
  }())();
  var r = function () {
    function t() {}
    t.prototype.setFormatter = function (t) {
      this.formatter = t;
    };
    return t;
  }();
  require.d(exports, {
    classRegistry: function () {
      return i;
    },
    FormatterBase: function () {
      return r;
    }
  });
}