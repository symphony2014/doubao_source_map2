// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PlayerDownloadPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 644133
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var browserFileSaver = require("browser-file-saver") /*id: 981042*/;
  var s = browserFileSaver;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var i18nTipRenderer = require("i18n-tip-renderer") /*id: 438742*/;
  function l() {
    return new DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\">\n  <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n    <g transform=\"translate(-488.000000, -340.000000)\" fill=\"#FFFFFF\">\n      <g id=\"Group-2\">\n        <g id=\"volme_big-copy\" transform=\"translate(488.000000, 340.000000)\">\n          <rect id=\"Rectangle-18\" x=\"11\" y=\"4\" width=\"2\" height=\"12\" rx=\"1\"></rect>\n          <rect id=\"Rectangle-2\" x=\"3\" y=\"18\" width=\"18\" height=\"2\" rx=\"1\"></rect>\n          <rect id=\"Rectangle-2\" transform=\"translate(4.000000, 17.500000) rotate(90.000000) translate(-4.000000, -17.500000) \" x=\"1.5\" y=\"16.5\" width=\"5\" height=\"2\" rx=\"1\"></rect><rect id=\"Rectangle-2-Copy-3\" transform=\"translate(20.000000, 17.500000) rotate(90.000000) translate(-20.000000, -17.500000) \" x=\"17.5\" y=\"16.5\" width=\"5\" height=\"2\" rx=\"1\"></rect>\n          <path d=\"M9.48791171,8.26502656 L9.48791171,14.2650266 C9.48791171,14.8173113 9.04019646,15.2650266 8.48791171,15.2650266 C7.93562696,15.2650266 7.48791171,14.8173113 7.48791171,14.2650266 L7.48791171,7.26502656 C7.48791171,6.71274181 7.93562696,6.26502656 8.48791171,6.26502656 L15.4879117,6.26502656 C16.0401965,6.26502656 16.4879117,6.71274181 16.4879117,7.26502656 C16.4879117,7.81731131 16.0401965,8.26502656 15.4879117,8.26502656 L9.48791171,8.26502656 Z\" id=\"Combined-Shape\" transform=\"translate(11.987912, 10.765027) scale(1, -1) rotate(45.000000) translate(-11.987912, -10.765027) \"></path>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n", "image/svg+xml").firstChild;
  }
  var c = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i(t) {
      var o;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      o = e.call(this, t);
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "download", function (t) {
        if (!o.isLock) {
          o.emitUserAction(t, "download");
          var e = o.getAbsoluteURL(o.player.src);
          s(e);
          o.isLock = true;
          o.timer = window.setTimeout(function () {
            o.isLock = false;
            window.clearTimeout(o.timer);
            o.timer = null;
          }, 300);
        }
      });
      o.timer = null;
      o.isLock = false;
      return o;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "afterCreate",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "afterCreate", this).call(this);
        if (!this.config.disable) {
          this.appendChild(".xgplayer-icon", this.icons.download);
          this._handler = this.hook("click", this.download, {
            pre: function (t) {
              t.preventDefault();
              t.stopPropagation();
            }
          });
          this.bind(["click", "touchend"], this._handler);
        }
      }
    }, {
      key: "registerIcons",
      value: function () {
        return {
          download: l
        };
      }
    }, {
      key: "getAbsoluteURL",
      value: function (t) {
        if (!t.match(/^https?:\/\//)) {
          var e = document.createElement("div");
          e.innerHTML = `<a href="${t}">x</a>`;
          t = e.firstChild.href;
        }
        return t;
      }
    }, {
      key: "destroy",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "destroy", this).call(this);
        this.unbind(["click", "touchend"], this.download);
        window.clearTimeout(this.timer);
        this.timer = null;
      }
    }, {
      key: "render",
      value: function () {
        if (!this.config.disable) {
          return `<xg-icon class="xgplayer-download">
   <div class="xgplayer-icon">
   </div>
   ${i18nTipRenderer.renderTip(this, "DOWNLOAD_TIPS", this.playerConfig.isHideTips)}
    </xg-icon>`;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "download";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.CONTROLS_RIGHT,
          index: 3,
          disable: true
        };
      }
    }]);
    return i;
  }(require("player-icon-hover-plugin") /*id: 945213*/.IconHoverPlugin);
  require.d(exports, {
    PlayerDownloadPlugin: function () {
      return c;
    }
  });
}