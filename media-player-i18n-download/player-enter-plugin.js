// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'EnterPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 272209
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var s = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      babelRuntimeHelpers_1.classCallCheck(this, i);
      return e.apply(this, arguments);
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "render",
      value: function () {
        var t = this.config.innerHtml;
        var e = playerUtilityHelpers.domUtils.createDom("xg-enter", "", {}, "xgplayer-enter");
        if (t && t instanceof window.HTMLElement) {
          e.appendChild(t);
        } else if (t && typeof t == "string") {
          e.innerHTML = t;
        } else {
          var i = "";
          var n = 1;
          for (; n <= 12; n++) {
            i += `<div class="xgplayer-enter-bar${n}"></div>`;
          }
          e.innerHTML = `<div class="xgplayer-enter-spinner">${i}</div>`;
        }
        return e;
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "enter";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          innerHtml: "",
          logo: ""
        };
      }
    }]);
    return i;
  }(require("player-ui-plugin-base") /*id: 240976*/.PlayerUiPlugin);
  require.d(exports, {
    EnterPlugin: function () {
      return s;
    }
  });
}