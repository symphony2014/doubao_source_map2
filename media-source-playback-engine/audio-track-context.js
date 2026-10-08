// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'AudioTrack'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 536430
         */
module.exports = function (module, exports, require) {
  var babelClassHelpers = require("babel-class-helpers") /*id: 197180*/;
  var avMediaConstants = require("av-media-constants") /*id: 87395*/;
  var o = function () {
    function e() {
      babelClassHelpers.classCallCheck(this, e);
      babelClassHelpers.defineProperty(this, "id", 2);
      babelClassHelpers.defineProperty(this, "type", avMediaConstants.trackTypes.AUDIO);
      babelClassHelpers.defineProperty(this, "codecType", avMediaConstants.audioCodecs.AAC);
      babelClassHelpers.defineProperty(this, "pid", -1);
      babelClassHelpers.defineProperty(this, "codec", "");
      babelClassHelpers.defineProperty(this, "sequenceNumber", 0);
      babelClassHelpers.defineProperty(this, "sampleDuration", 0);
      babelClassHelpers.defineProperty(this, "timescale", 0);
      babelClassHelpers.defineProperty(this, "formatTimescale", 0);
      babelClassHelpers.defineProperty(this, "baseMediaDecodeTime", 0);
      babelClassHelpers.defineProperty(this, "duration", 0);
      babelClassHelpers.defineProperty(this, "warnings", []);
      babelClassHelpers.defineProperty(this, "samples", []);
      babelClassHelpers.defineProperty(this, "baseDts", 0);
      babelClassHelpers.defineProperty(this, "sampleSize", 16);
      babelClassHelpers.defineProperty(this, "sampleRate", 0);
      babelClassHelpers.defineProperty(this, "channelCount", 0);
      babelClassHelpers.defineProperty(this, "objectType", 0);
      babelClassHelpers.defineProperty(this, "sampleRateIndex", 0);
      babelClassHelpers.defineProperty(this, "config", []);
      babelClassHelpers.defineProperty(this, "present", false);
      babelClassHelpers.defineProperty(this, "isVideoEncryption", false);
      babelClassHelpers.defineProperty(this, "isAudioEncryption", false);
      babelClassHelpers.defineProperty(this, "kid", null);
      babelClassHelpers.defineProperty(this, "ext", undefined);
    }
    babelClassHelpers.createClass(e, [{
      key: "reset",
      value: function () {
        this.sequenceNumber = 0;
        this.timescale = 0;
        this.sampleDuration = 0;
        this.sampleRate = 0;
        this.channelCount = 0;
        this.baseMediaDecodeTime = 0;
        this.present = false;
        this.pid = -1;
        this.codec = "";
        this.samples = [];
        this.config = [];
        this.warnings = [];
      }
    }, {
      key: "exist",
      value: function () {
        return !!this.sampleRate && !!this.channelCount && !!this.codec && this.codecType === avMediaConstants.audioCodecs.AAC;
      }
    }, {
      key: "hasSample",
      value: function () {
        return !!this.samples.length;
      }
    }, {
      key: "isEncryption",
      get: function () {
        return this.isAudioEncryption;
      }
    }]);
    return e;
  }();
  require.d(exports, {
    AudioTrack: function () {
      return o;
    }
  });
}