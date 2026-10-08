// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'MiniProgressPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 519072
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var o = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      babelRuntimeHelpers_1.classCallCheck(this, i);
      return e.apply(this, arguments);
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "afterCreate",
      value: function () {}
    }, {
      key: "update",
      value: function (t = {
        cached: 0,
        played: 0
      }, e) {
        if (e && this.root) {
          if (t.cached) {
            this.find("xg-mini-progress-cache").style.width = `${t.cached / e * 100}%`;
          }
          if (t.played) {
            this.find("xg-mini-progress-played").style.width = `${t.played / e * 100}%`;
          }
        }
      }
    }, {
      key: "render",
      value: function () {
        if (this.playerConfig.progress && this.playerConfig.miniprogress) {
          return "<xg-mini-progress class=\"xg-mini-progress\">\n    <xg-mini-progress-cache class=\"xg-mini-progress-cache\"></xg-mini-progress-cache>\n    <xg-mini-progress-played class=\"xg-mini-progress-played\"></xg-mini-progress-played>\n    </xg-mini-progress>";
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "MiniProgress";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {};
      }
    }]);
    return i;
  }(require("player-ui-plugin-base") /*id: 240976*/.PlayerUiPlugin);
  require.d(exports, {
    MiniProgressPlugin: function () {
      return o;
    }
  });
}