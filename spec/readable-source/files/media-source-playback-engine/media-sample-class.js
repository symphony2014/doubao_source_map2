// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'MediaSample'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 972226
         */
module.exports = function (module, exports, require) {
  var babelClassHelpers = require("babel-class-helpers") /*id: 197180*/;
  var i = babelClassHelpers.createClass(function e(t, n, i, o) {
    babelClassHelpers.classCallCheck(this, e);
    babelClassHelpers.defineProperty(this, "duration", 1024);
    babelClassHelpers.defineProperty(this, "flag", {
      dependsOn: 2,
      isNonSyncSample: 0
    });
    babelClassHelpers.defineProperty(this, "keyframe", true);
    this.originPts = this.pts = this.dts = t;
    this.data = n;
    this.size = n.byteLength;
    this.sampleOffset = o;
    if (i) {
      this.duration = i;
    }
  });
  require.d(exports, {
    MediaSample: function () {
      return i;
    }
  });
}