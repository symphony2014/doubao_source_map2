// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LoadingPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 406667
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  function s() {
    return new DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"-5 -5 110 110\">\n  <path d=\"M100,50A50,50,0,1,1,50,0\" stroke-width=\"5\" stroke=\"#ddd\" stroke-dasharray=\"236\" fill=\"none\"></path>\n</svg>\n", "image/svg+xml").firstChild;
  }
  var a = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      babelRuntimeHelpers_1.classCallCheck(this, i);
      return e.apply(this, arguments);
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "registerIcons",
      value: function () {
        return {
          loadingIcon: s
        };
      }
    }, {
      key: "afterCreate",
      value: function () {
        this.appendChild("xg-loading-inner", this.icons.loadingIcon);
      }
    }, {
      key: "render",
      value: function () {
        return "\n    <xg-loading class=\"xgplayer-loading\">\n      <xg-loading-inner></xg-loading-inner>\n    </xg-loading>";
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "loading";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.ROOT
        };
      }
    }]);
    return i;
  }(playerUiPluginBase.PlayerUiPlugin);
  require.d(exports, {
    LoadingPlugin: function () {
      return a;
    }
  });
}