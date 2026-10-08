// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PlaybackRatePlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 909938
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var videoPlayerOptionsIconPlugin = require("video-player-options-icon-plugin") /*id: 804563*/;
  var r = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i(t) {
      var o;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      (o = e.call(this, t)).curRate = 1;
      return o;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "beforeCreate",
      value: function (t) {
        var e = t.player.config.playbackRate;
        var i = e ? Array.isArray(e) ? e : t.config.list : [];
        if (Array.isArray(i)) {
          t.config.list = i.map(function (t) {
            if (typeof t == "number") {
              t = {
                rate: t,
                text: `${t}x`
              };
            } else if (!t.text && t.rate) {
              t.text = `${t.rate}x`;
            }
            return t;
          });
        }
      }
    }, {
      key: "afterCreate",
      value: function () {
        var t = this;
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "afterCreate", this).call(this);
        this.on(videoPlayerEventConstants.RATE_CHANGE, function () {
          if (t.curValue !== t.player.playbackRate) {
            t.renderItemList();
          }
        });
        this.renderItemList();
      }
    }, {
      key: "show",
      value: function () {
        if (this.config.list && this.config.list.length !== 0) {
          babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "show", this).call(this);
        }
      }
    }, {
      key: "onItemClick",
      value: function (t, e) {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "onItemClick", this).apply(this, arguments);
        var o = Number(t.delegateTarget.getAttribute("rate"));
        if (!o || o === this.curValue) {
          return false;
        }
        var s = {
          playbackRate: {
            from: this.player.playbackRate,
            to: o
          }
        };
        this.emitUserAction(t, "change_rate", {
          props: s
        });
        this.curValue = o;
        this.player.playbackRate = o;
      }
    }, {
      key: "renderItemList",
      value: function () {
        var t = this;
        var e = this.player.playbackRate || 1;
        this.curValue = e;
        var o = -1;
        var s = this.config.list.map(function (i, n) {
          var s = {
            rate: i.rate
          };
          if (s.rate === e) {
            s.selected = true;
            o = n;
          }
          s.showText = t.getTextByLang(i);
          return s;
        });
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "renderItemList", this).call(this, s, o);
      }
    }, {
      key: "changeCurrentText",
      value: function () {
        if (!this.isIcons) {
          var t = this.config.list;
          var e = this.curIndex < t.length ? this.curIndex : 0;
          var i = t[e];
          var n = "";
          n = !i || this.curIndex < 0 ? `${this.player.playbackRate}x` : this.getTextByLang(i, "iconText");
          this.find(".icon-text").innerHTML = n;
        }
      }
    }, {
      key: "destroy",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "destroy", this).call(this);
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "playbackRate";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return babelRuntimeHelpers_1.objectSpread(babelRuntimeHelpers_1.objectSpread({}, videoPlayerOptionsIconPlugin.OptionsIconPlugin.defaultConfig), {}, {
          position: playerUiPluginBase.playerPositions.CONTROLS_RIGHT,
          index: 4,
          list: [2, 1.5, 1, 0.75, 0.5],
          className: "xgplayer-playbackrate",
          isShowIcon: true,
          hidePortrait: false
        });
      }
    }]);
    return i;
  }(videoPlayerOptionsIconPlugin.OptionsIconPlugin);
  require.d(exports, {
    PlaybackRatePlugin: function () {
      return r;
    }
  });
}