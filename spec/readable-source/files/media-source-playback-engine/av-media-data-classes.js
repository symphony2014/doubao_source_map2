// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FO' to 'MediaDataModel'
// - Renamed export 'm$' to 'MediaMetadata'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 564754
         */
module.exports = function (module, exports, require) {
  var babelClassHelpers = require("babel-class-helpers") /*id: 197180*/;
  var avMediaConstants = require("av-media-constants") /*id: 87395*/;
  var o = function (e) {
    babelClassHelpers.inherits(n, e);
    var t = babelClassHelpers.createSuper(n);
    function n() {
      babelClassHelpers.classCallCheck(this, n);
      return t.apply(this, arguments);
    }
    return babelClassHelpers.createClass(n);
  }(babelClassHelpers.createClass(function e(t, n) {
    babelClassHelpers.classCallCheck(this, e);
    babelClassHelpers.defineProperty(this, "time", 0);
    this.data = t;
    this.originPts = this.pts = n;
  }));
  var a = function () {
    function e() {
      babelClassHelpers.classCallCheck(this, e);
      babelClassHelpers.defineProperty(this, "id", 3);
      babelClassHelpers.defineProperty(this, "type", avMediaConstants.trackTypes.METADATA);
      babelClassHelpers.defineProperty(this, "timescale", 0);
      babelClassHelpers.defineProperty(this, "flvScriptSamples", []);
      babelClassHelpers.defineProperty(this, "seiSamples", []);
    }
    babelClassHelpers.createClass(e, [{
      key: "exist",
      value: function () {
        return (!!this.flvScriptSamples.length || !!this.seiSamples.length) && !!this.timescale;
      }
    }, {
      key: "reset",
      value: function () {
        this.timescale = 0;
        this.flvScriptSamples = [];
        this.seiSamples = [];
      }
    }, {
      key: "hasSample",
      value: function () {
        return !!this.flvScriptSamples.length || !!this.seiSamples.length;
      }
    }]);
    return e;
  }();
  require.d(exports, {
    MediaDataModel: function () {
      return o;
    },
    MediaMetadata: function () {
      return a;
    }
  });
}