// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'VolumeControlPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 802453
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var environmentDetectorUtil = require("environment-detector-util") /*id: 257644*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  function l() {
    return new DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"40\" viewBox=\"0 -10 28 40\">\n  <path fill=\"#fff\" transform=\"scale(0.0220625 0.0220625)\" d=\"M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z\"></path>\n  <path fill=\"#fff\" transform=\"scale(0.0220625 0.0220625)\" d=\"M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z\"></path>\n</svg>\n", "image/svg+xml").firstChild;
  }
  function c() {
    return new DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"40\" viewBox=\"0 -10 28 40\">\n  <path fill=\"#fff\" transform=\"scale(0.0220625 0.0220625)\" d=\"M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z\"></path>\n  <path fill=\"#fff\" transform=\"scale(0.0220625 0.0220625)\" d=\"M795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z\"></path>\n</svg>\n", "image/svg+xml").firstChild;
  }
  function u() {
    return new DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"40\" viewBox=\"0 -10 28 40\">\n  <path fill=\"#fff\" transform=\"scale(0.0220625 0.0220625)\" d=\"M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z\"></path>\n  <path fill=\"#fff\" transform=\"scale(0.0220625 0.0220625)\" d=\"M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z\"></path>\n</svg>\n", "image/svg+xml").firstChild;
  }
  var h = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      var t;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      var s = arguments.length;
      var a = Array(s);
      var r = 0;
      for (; r < s; r++) {
        a[r] = arguments[r];
      }
      t = e.call.apply(e, [this].concat(a));
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onBarMousedown", function (e) {
        var i = babelRuntimeHelpers_1.assertThisInit(t).player;
        var s = t.find(".xgplayer-bar");
        playerUtilityHelpers.domUtils.event(e);
        var a = s.getBoundingClientRect();
        var r = playerUtilityHelpers.domUtils.getEventPos(e, i.zoom);
        var l = a.height - (r.clientY - a.top);
        r.h = l;
        r.barH = a.height;
        t.pos = r;
        if (!(l < -2)) {
          t.updateVolumePos(l, e);
          document.addEventListener("mouseup", t.onBarMouseUp);
          t._d.isStart = true;
          return false;
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onBarMouseMove", function (e) {
        var i = babelRuntimeHelpers_1.assertThisInit(t)._d;
        if (i.isStart) {
          var s = babelRuntimeHelpers_1.assertThisInit(t);
          var a = s.pos;
          var r = s.player;
          e.preventDefault();
          e.stopPropagation();
          playerUtilityHelpers.domUtils.event(e);
          var l = playerUtilityHelpers.domUtils.getEventPos(e, r.zoom);
          i.isMoving = true;
          var c = a.h - l.clientY + a.clientY;
          if (!(c > a.barH)) {
            t.updateVolumePos(c, e);
          }
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onBarMouseUp", function (e) {
        playerUtilityHelpers.domUtils.event(e);
        document.removeEventListener("mouseup", t.onBarMouseUp);
        var i = babelRuntimeHelpers_1.assertThisInit(t)._d;
        i.isStart = false;
        i.isMoving = false;
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onMouseenter", function (e) {
        t._d.isActive = true;
        t.focus();
        t.emit("icon_mouseenter", {
          pluginName: t.pluginName
        });
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onMouseleave", function (e) {
        t._d.isActive = false;
        t.unFocus(100, false, e);
        t.emit("icon_mouseleave", {
          pluginName: t.pluginName
        });
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onVolumeChange", function (e) {
        if (t.player) {
          var i = t.player;
          var n = i.muted;
          var o = i.volume;
          if (!t._d.isMoving) {
            t.find(".xgplayer-drag").style.height = n || o === 0 ? "4px" : `${o * 100}%`;
            if (t.config.showValueLabel) {
              t.updateVolumeValue();
            }
          }
          t.animate(n, o);
        }
      });
      return t;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "registerIcons",
      value: function () {
        return {
          volumeSmall: {
            icon: c,
            class: "xg-volume-small"
          },
          volumeLarge: {
            icon: l,
            class: "xg-volume"
          },
          volumeMuted: {
            icon: u,
            class: "xg-volume-mute"
          }
        };
      }
    }, {
      key: "afterCreate",
      value: function () {
        var t = this;
        this._timerId = null;
        this._d = {
          isStart: false,
          isMoving: false,
          isActive: false
        };
        if (!this.config.disable) {
          this.initIcons();
          var e = this.playerConfig;
          var i = e.commonStyle;
          var n = e.volume;
          if (i.volumeColor) {
            this.find(".xgplayer-drag").style.backgroundColor = i.volumeColor;
          }
          this.changeMutedHandler = this.hook("mutedChange", function (e) {
            t.changeMuted(e);
          }, {
            pre: function (t) {
              t.preventDefault();
              t.stopPropagation();
            }
          });
          this._onMouseenterHandler = this.hook("mouseenter", this.onMouseenter);
          this._onMouseleaveHandler = this.hook("mouseleave", this.onMouseleave);
          if (environmentDetectorUtil.environmentUtils.device !== "mobile" && this.playerConfig.isMobileSimulateMode !== "mobile") {
            this.bind("mouseenter", this._onMouseenterHandler);
            this.bind(["blur", "mouseleave"], this._onMouseleaveHandler);
            this.bind(".xgplayer-slider", "mousedown", this.onBarMousedown);
            this.bind(".xgplayer-slider", "mousemove", this.onBarMouseMove);
            this.bind(".xgplayer-slider", "mouseup", this.onBarMouseUp);
          }
          this.bind(".xgplayer-icon", ["touchend", "click"], this.changeMutedHandler);
          this.on(videoPlayerEventConstants.VOLUME_CHANGE, this.onVolumeChange);
          this.once(videoPlayerEventConstants.LOADED_DATA, this.onVolumeChange);
          if (playerUtilityHelpers.domUtils.typeOf(n) !== "Number") {
            this.player.volume = this.config.default;
          }
          this.onVolumeChange();
        }
      }
    }, {
      key: "updateVolumePos",
      value: function (t, e) {
        var i = this.player;
        var n = this.find(".xgplayer-drag");
        var o = this.find(".xgplayer-bar");
        if (o && n) {
          var s = parseInt(t / o.getBoundingClientRect().height * 1000, 10);
          n.style.height = `${t}px`;
          var a = Math.max(Math.min(s / 1000, 1), 0);
          var r = {
            volume: {
              from: i.volume,
              to: a
            }
          };
          if (i.muted) {
            r.muted = {
              from: true,
              to: false
            };
          }
          this.emitUserAction(e, "change_volume", {
            muted: i.muted,
            volume: i.volume,
            props: r
          });
          i.volume = Math.max(Math.min(s / 1000, 1), 0);
          i.muted &&= false;
          if (this.config.showValueLabel) {
            this.updateVolumeValue();
          }
        }
      }
    }, {
      key: "updateVolumeValue",
      value: function () {
        var t = this.player;
        var e = t.volume;
        var i = t.muted;
        var n = this.find(".xgplayer-value-label");
        var o = Math.max(Math.min(e, 1), 0);
        n.innerText = i ? 0 : Math.ceil(o * 100);
      }
    }, {
      key: "focus",
      value: function () {
        this.player.focus({
          autoHide: false
        });
        if (this._timerId) {
          playerUtilityHelpers.domUtils.clearTimeout(this, this._timerId);
          this._timerId = null;
        }
        playerUtilityHelpers.domUtils.addClass(this.root, "slide-show");
      }
    }, {
      key: "unFocus",
      value: function () {
        var t = this;
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
        var i = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        var n = arguments.length > 2 ? arguments[2] : undefined;
        var s = this._d;
        var a = this.player;
        if (!s.isActive) {
          if (this._timerId) {
            playerUtilityHelpers.domUtils.clearTimeout(this, this._timerId);
            this._timerId = null;
          }
          this._timerId = playerUtilityHelpers.domUtils.setTimeout(this, function () {
            if (!s.isActive) {
              if (i) {
                a.blur();
              } else {
                a.focus();
              }
              playerUtilityHelpers.domUtils.removeClass(t.root, "slide-show");
              if (s.isStart) {
                t.onBarMouseUp(n);
              }
            }
            t._timerId = null;
          }, e);
        }
      }
    }, {
      key: "changeMuted",
      value: function (t) {
        if (t) {
          t.stopPropagation();
        }
        var e = this.player;
        if (this._d.isStart) {
          this.onBarMouseUp(t);
        }
        this.emitUserAction(t, "change_muted", {
          muted: e.muted,
          volume: e.volume,
          props: {
            muted: {
              from: e.muted,
              to: !e.muted
            }
          }
        });
        if (e.volume > 0) {
          e.muted = !e.muted;
        }
        if (e.volume < 0.01) {
          e.volume = this.config.miniVolume;
        }
      }
    }, {
      key: "animate",
      value: function (t, e) {
        if (t || e === 0) {
          this.setAttr("data-state", "mute");
        } else if (e < 0.5 && this.icons.volumeSmall) {
          this.setAttr("data-state", "small");
        } else {
          this.setAttr("data-state", "normal");
        }
      }
    }, {
      key: "initIcons",
      value: function () {
        var t = this.icons;
        this.appendChild(".xgplayer-icon", t.volumeSmall);
        this.appendChild(".xgplayer-icon", t.volumeLarge);
        this.appendChild(".xgplayer-icon", t.volumeMuted);
      }
    }, {
      key: "destroy",
      value: function () {
        if (this._timerId) {
          playerUtilityHelpers.domUtils.clearTimeout(this, this._timerId);
          this._timerId = null;
        }
        this.unbind("mouseenter", this.onMouseenter);
        this.unbind(["blur", "mouseleave"], this.onMouseleave);
        this.unbind(".xgplayer-slider", "mousedown", this.onBarMousedown);
        this.unbind(".xgplayer-slider", "mousemove", this.onBarMouseMove);
        this.unbind(".xgplayer-slider", "mouseup", this.onBarMouseUp);
        document.removeEventListener("mouseup", this.onBarMouseUp);
        this.unbind(".xgplayer-icon", environmentDetectorUtil.environmentUtils.device === "mobile" ? "touchend" : "click", this.changeMutedHandler);
      }
    }, {
      key: "render",
      value: function () {
        if (!this.config.disable) {
          var t = this.config.default || this.player.volume;
          var e = this.config.showValueLabel;
          return `
    <xg-icon class="xgplayer-volume" data-state="normal">
      <div class="xgplayer-icon">
      </div>
      <xg-slider class="xgplayer-slider">
        ${e ? `<div class="xgplayer-value-label">${t * 100}</div>` : ""}
        <div class="xgplayer-bar">
          <xg-drag class="xgplayer-drag" style="height: ${t * 100}%"></xg-drag>
        </div>
      </xg-slider>
    </xg-icon>`;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "volume";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.CONTROLS_RIGHT,
          index: 1,
          disable: false,
          showValueLabel: false,
          default: 0.6,
          miniVolume: 0.2
        };
      }
    }]);
    return i;
  }(playerUiPluginBase.PlayerUiPlugin);
  require.d(exports, {
    VolumeControlPlugin: function () {
      return h;
    }
  });
}