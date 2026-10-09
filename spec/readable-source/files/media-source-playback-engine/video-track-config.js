// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'VideoTrackConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 101487
         */
module.exports = function (module, exports, require) {
  var babelClassHelpers = require("babel-class-helpers") /*id: 197180*/;
  var avMediaConstants = require("av-media-constants") /*id: 87395*/;
  var o = function () {
    function e() {
      babelClassHelpers.classCallCheck(this, e);
      babelClassHelpers.defineProperty(this, "id", 1);
      babelClassHelpers.defineProperty(this, "type", avMediaConstants.trackTypes.VIDEO);
      babelClassHelpers.defineProperty(this, "codecType", avMediaConstants.videoCodecs.AVC);
      babelClassHelpers.defineProperty(this, "pid", -1);
      babelClassHelpers.defineProperty(this, "hvcC", undefined);
      babelClassHelpers.defineProperty(this, "codec", "");
      babelClassHelpers.defineProperty(this, "timescale", 0);
      babelClassHelpers.defineProperty(this, "formatTimescale", 0);
      babelClassHelpers.defineProperty(this, "sequenceNumber", 0);
      babelClassHelpers.defineProperty(this, "baseMediaDecodeTime", 0);
      babelClassHelpers.defineProperty(this, "baseDts", 0);
      babelClassHelpers.defineProperty(this, "duration", 0);
      babelClassHelpers.defineProperty(this, "warnings", []);
      babelClassHelpers.defineProperty(this, "samples", []);
      babelClassHelpers.defineProperty(this, "pps", []);
      babelClassHelpers.defineProperty(this, "sps", []);
      babelClassHelpers.defineProperty(this, "vps", []);
      babelClassHelpers.defineProperty(this, "fpsNum", 0);
      babelClassHelpers.defineProperty(this, "fpsDen", 0);
      babelClassHelpers.defineProperty(this, "sarRatio", []);
      babelClassHelpers.defineProperty(this, "width", 0);
      babelClassHelpers.defineProperty(this, "height", 0);
      babelClassHelpers.defineProperty(this, "nalUnitSize", 4);
      babelClassHelpers.defineProperty(this, "present", false);
      babelClassHelpers.defineProperty(this, "isVideoEncryption", false);
      babelClassHelpers.defineProperty(this, "isAudioEncryption", false);
      babelClassHelpers.defineProperty(this, "isVideo", true);
      babelClassHelpers.defineProperty(this, "kid", null);
      babelClassHelpers.defineProperty(this, "pssh", null);
      babelClassHelpers.defineProperty(this, "ext", undefined);
    }
    babelClassHelpers.createClass(e, [{
      key: "reset",
      value: function () {
        this.sequenceNumber = this.width = this.height = this.fpsDen = this.fpsNum = this.duration = this.baseMediaDecodeTime = this.timescale = 0;
        this.codec = "";
        this.present = false;
        this.pid = -1;
        this.pps = [];
        this.sps = [];
        this.vps = [];
        this.sarRatio = [];
        this.samples = [];
        this.warnings = [];
        this.hvcC = null;
      }
    }, {
      key: "exist",
      value: function () {
        return !!this.pps.length && !!this.sps.length && !!this.codec;
      }
    }, {
      key: "hasSample",
      value: function () {
        return !!this.samples.length;
      }
    }, {
      key: "isEncryption",
      get: function () {
        return this.isVideoEncryption;
      }
    }]);
    return e;
  }();
  require.d(exports, {
    VideoTrackConfig: function () {
      return o;
    }
  });
}