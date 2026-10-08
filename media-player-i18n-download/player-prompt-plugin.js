// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PromptPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 591567
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var xgplayerClassNames = require("xgplayer-class-names") /*id: 643317*/;
  var r = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      babelRuntimeHelpers_1.classCallCheck(this, i);
      return e.apply(this, arguments);
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "afterCreate",
      value: function () {
        var t = this;
        this.intervalId = 0;
        this.customConfig = null;
        this.bind(".highlight", ["click", "touchend"], function (e) {
          if (t.config.onClick || t.customOnClick) {
            e.preventDefault();
            e.stopPropagation();
            if (t.customOnClick) {
              t.customOnClick(e);
            } else {
              t.config.onClick(e);
            }
          }
        });
        this.player.showPrompt = function () {
          t.show.apply(t, arguments);
        };
        this.player.hidePrompt = function () {
          t.hide();
        };
      }
    }, {
      key: "setStyle",
      value: function (t) {
        var e = this;
        Object.keys(t).map(function (i) {
          e.root.style[i] = t[i];
        });
      }
    }, {
      key: "show",
      value: function (t) {
        var e = this;
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        if (t) {
          this.customOnClick = n;
          var s = this.config.interval;
          if (this.intervalId) {
            clearTimeout(this.intervalId);
            this.intervalId = null;
          }
          playerUtilityHelpers.domUtils.addClass(this.root, "show");
          if (i.mode === "arrow") {
            playerUtilityHelpers.domUtils.addClass(this.root, "arrow");
          }
          if (typeof t == "string") {
            this.find(".xgplayer-prompt-detail").innerHTML = t;
          } else {
            this.find(".xgplayer-prompt-detail").innerHTML = `${t.text || ""}${t.highlight ? `<i class="highlight">${t.highlight}</i>` : ""}`;
          }
          if (i.style) {
            this.setStyle(i.style);
          }
          if (typeof i.autoHide == "boolean" ? i.autoHide : this.config.autoHide) {
            var a = i.interval || s;
            this.intervalId = setTimeout(function () {
              e.hide();
            }, a);
          }
        }
      }
    }, {
      key: "hide",
      value: function () {
        playerUtilityHelpers.domUtils.removeClass(this.root, "show");
        playerUtilityHelpers.domUtils.removeClass(this.root, "arrow");
        this.root.removeAttribute("style");
        this.customOnClick = null;
      }
    }, {
      key: "render",
      value: function () {
        return `<xg-prompt class="xgplayer-prompt ${xgplayerClassNames.playerClasses.CONTROLS_FOLLOW}">
    <span class="xgplayer-prompt-detail"></span>
    </xg-prompt>`;
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "prompt";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          interval: 3000,
          style: {},
          mode: "arrow",
          autoHide: true,
          detail: {
            text: "",
            highlight: ""
          },
          onClick: function () {}
        };
      }
    }]);
    return i;
  }(playerUiPluginBase.PlayerUiPlugin);
  require.d(exports, {
    PromptPlugin: function () {
      return r;
    }
  });
}