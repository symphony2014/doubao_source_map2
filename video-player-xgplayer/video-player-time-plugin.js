// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TimePlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2348.d6dfac26.js
         * chunkId: 2348
         * moduleId: 626088
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var s = function (e) {
    babelRuntimeHelpers_1.inherits(n, e);
    var t = babelRuntimeHelpers_1.constructHelper(n);
    function n(e) {
      var i;
      babelRuntimeHelpers_1.classCallCheck(this, n);
      (i = t.call(this, e)).isActiving = false;
      return i;
    }
    babelRuntimeHelpers_1.createClass(n, [{
      key: "duration",
      get: function () {
        return this.playerConfig.customDuration || this.player.duration;
      }
    }, {
      key: "currentTime",
      get: function () {
        return this.player.currentTime || 0;
      }
    }, {
      key: "timeOffset",
      get: function () {
        return this.playerConfig.timeOffset || 0;
      }
    }, {
      key: "afterCreate",
      value: function () {
        var e = this;
        var t = this.player.controls.config.mode;
        this.mode = t === "flex" ? "flex" : "normal";
        if (!this.config.disable) {
          if (this.mode === "flex") {
            this.createCenterTime();
            this.root.style.display = "none";
          }
          this.durationDom = this.find(".time-duration");
          this.timeDom = this.find(".time-current");
          this.on(videoPlayerEventConstants.DURATION_CHANGE, function () {
            e.onTimeUpdate();
          });
          this.on(videoPlayerEventConstants.TIME_UPDATE, function () {
            e.onTimeUpdate();
          });
          this.on(videoPlayerEventConstants.ENDED, function () {
            e.onTimeUpdate(true);
          });
          this.on(videoPlayerEventConstants.EMPTIED, function () {
            e.onReset();
          });
        }
      }
    }, {
      key: "show",
      value: function () {
        if (this.mode === "flex") {
          if (this.centerCurDom) {
            this.centerCurDom.style.display = "block";
          }
          if (this.centerDurDom) {
            this.centerDurDom.style.display = "block";
          }
          return;
        }
        this.root.style.display = "block";
      }
    }, {
      key: "hide",
      value: function () {
        if (this.mode === "flex") {
          if (this.centerCurDom) {
            this.centerCurDom.style.display = "none";
          }
          if (this.centerDurDom) {
            this.centerDurDom.style.display = "none";
          }
          return;
        }
        this.root.style.display = "none";
      }
    }, {
      key: "onTimeUpdate",
      value: function (e) {
        var t = this.player;
        var n = this.config;
        var r = this.duration;
        if (!n.disable && !this.isActiving && t.hasStart) {
          var o = t.currentTime + this.timeOffset;
          o = playerUtilityHelpers.domUtils.adjustTimeByDuration(o, r, e);
          if (this.mode === "flex") {
            this.centerCurDom.innerHTML = playerUtilityHelpers.domUtils.format(o);
            if (r !== Infinity && r > 0) {
              this.centerDurDom.innerHTML = playerUtilityHelpers.domUtils.format(r);
            }
          } else {
            this.timeDom.innerHTML = playerUtilityHelpers.domUtils.format(o);
            if (r !== Infinity && r > 0) {
              this.durationDom.innerHTML = playerUtilityHelpers.domUtils.format(r);
            }
          }
        }
      }
    }, {
      key: "onReset",
      value: function () {
        if (this.mode === "flex") {
          this.centerCurDom.innerHTML = playerUtilityHelpers.domUtils.format(0);
          this.centerDurDom.innerHTML = playerUtilityHelpers.domUtils.format(0);
        } else {
          this.timeDom.innerHTML = playerUtilityHelpers.domUtils.format(0);
          this.durationDom.innerHTML = playerUtilityHelpers.domUtils.format(0);
        }
      }
    }, {
      key: "createCenterTime",
      value: function () {
        var e = this.player;
        if (e.controls && e.controls.center) {
          var t = e.controls.center;
          this.centerCurDom = playerUtilityHelpers.domUtils.createDom("xg-icon", "00:00", {}, "xgplayer-time xg-time-left");
          this.centerDurDom = playerUtilityHelpers.domUtils.createDom("xg-icon", "00:00", {}, "xgplayer-time xg-time-right");
          if (t.children.length > 0) {
            t.insertBefore(this.centerCurDom, t.children[0]);
          } else {
            t.appendChild(this.centerCurDom);
          }
          t.appendChild(this.centerDurDom);
        }
      }
    }, {
      key: "afterPlayerInit",
      value: function () {
        var e = this.config;
        if (this.duration === Infinity || this.playerConfig.isLive) {
          playerUtilityHelpers.domUtils.hide(this.durationDom);
          playerUtilityHelpers.domUtils.hide(this.timeDom);
          playerUtilityHelpers.domUtils.hide(this.find(".time-separator"));
          playerUtilityHelpers.domUtils.show(this.find(".time-live-tag"));
        } else {
          playerUtilityHelpers.domUtils.hide(this.find(".time-live-tag"));
        }
        if (e.hide) {
          this.hide();
          return;
        }
        this.show();
      }
    }, {
      key: "changeLiveState",
      value: function (e) {
        if (e) {
          playerUtilityHelpers.domUtils.hide(this.durationDom);
          playerUtilityHelpers.domUtils.hide(this.timeDom);
          playerUtilityHelpers.domUtils.hide(this.find(".time-separator"));
          playerUtilityHelpers.domUtils.show(this.find(".time-live-tag"));
        } else {
          playerUtilityHelpers.domUtils.hide(this.find(".time-live-tag"));
          playerUtilityHelpers.domUtils.show(this.find(".time-separator"));
          playerUtilityHelpers.domUtils.show(this.durationDom);
          playerUtilityHelpers.domUtils.show(this.timeDom);
        }
      }
    }, {
      key: "updateTime",
      value: function (e) {
        this.isActiving = true;
        if ((e || e === 0) && !(e > this.duration)) {
          if (this.mode === "flex") {
            this.centerCurDom.innerHTML = playerUtilityHelpers.domUtils.format(e);
            return;
          }
          this.timeDom.innerHTML = playerUtilityHelpers.domUtils.format(e);
        }
      }
    }, {
      key: "resetActive",
      value: function () {
        var e = this;
        var t = this.player;
        function n() {
          e.isActiving = false;
        }
        this.off(videoPlayerEventConstants.SEEKED, n);
        if (t.isSeeking) {
          this.once(videoPlayerEventConstants.SEEKED, n);
        } else {
          this.isActiving = false;
        }
      }
    }, {
      key: "destroy",
      value: function () {
        var e = this.player.controls.center;
        if (this.centerCurDom) {
          e.removeChild(this.centerCurDom);
        }
        this.centerCurDom = null;
        if (this.centerDurDom) {
          e.removeChild(this.centerDurDom);
        }
        this.centerDurDom = null;
      }
    }, {
      key: "render",
      value: function () {
        if (!this.config.disable) {
          return `<xg-icon class="xgplayer-time">
    <span class="time-current">00:00</span>
    <span class="time-separator">/</span>
    <span class="time-duration">00:00</span>
    <span class="time-live-tag">${this.i18n.LIVE_TIP}</span>
    </xg-icon>`;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "time";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.CONTROLS_LEFT,
          index: 2,
          disable: false
        };
      }
    }]);
    return n;
  }(playerUiPluginBase.PlayerUiPlugin);
  require.d(exports, {
    TimePlugin: function () {
      return s;
    }
  });
}