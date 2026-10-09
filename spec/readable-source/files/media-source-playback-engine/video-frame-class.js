// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'VideoFrame'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 638125
         */
module.exports = function (module, exports, require) {
  var babelClassHelpers = require("babel-class-helpers") /*id: 197180*/;
  var i = function () {
    function e(t, n, i) {
      babelClassHelpers.classCallCheck(this, e);
      babelClassHelpers.defineProperty(this, "flag", {});
      babelClassHelpers.defineProperty(this, "keyframe", false);
      babelClassHelpers.defineProperty(this, "gopId", 0);
      babelClassHelpers.defineProperty(this, "duration", 0);
      babelClassHelpers.defineProperty(this, "size", 0);
      babelClassHelpers.defineProperty(this, "units", []);
      babelClassHelpers.defineProperty(this, "chromaFormat", 420);
      this.originPts = this.pts = t;
      this.originDts = this.dts = n;
      if (i) {
        this.units = i;
      }
    }
    babelClassHelpers.createClass(e, [{
      key: "cts",
      get: function () {
        return this.pts - this.dts;
      }
    }, {
      key: "setToKeyframe",
      value: function () {
        this.keyframe = true;
        this.flag.dependsOn = 2;
        this.flag.isNonSyncSample = 0;
      }
    }]);
    return e;
  }();
  require.d(exports, {
    VideoFrame: function () {
      return i;
    }
  });
}