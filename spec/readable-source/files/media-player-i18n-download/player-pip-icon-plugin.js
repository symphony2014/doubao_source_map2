// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PipIconPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 201428
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var i18nTipRenderer = require("i18n-tip-renderer") /*id: 438742*/;
  var playerIconHoverPlugin = require("player-icon-hover-plugin") /*id: 945213*/;
  function c() {
    return new DOMParser().parseFromString("<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n    d=\"M16.5 4.3H3.5C3.38954 4.3 3.3 4.38954 3.3 4.5V15.5C3.3 15.6105 3.38954 15.7 3.5 15.7H8.50005L8.50006 17.5H3.5C2.39543 17.5 1.5 16.6046 1.5 15.5V4.5C1.5 3.39543 2.39543 2.5 3.5 2.5H16.5C17.6046 2.5 18.5 3.39543 18.5 4.5V8.5H16.7V4.5C16.7 4.38954 16.6105 4.3 16.5 4.3ZM12 11.5C11.4477 11.5 11 11.9477 11 12.5L11 16.5C11 17.0523 11.4478 17.5 12 17.5H17.5C18.0523 17.5 18.5 17.0523 18.5 16.5L18.5 12.5C18.5 11.9477 18.0523 11.5 17.5 11.5H12Z\"\n    fill=\"white\" />\n</svg>", "image/svg+xml").firstChild;
  }
  function u() {
    return new DOMParser().parseFromString("<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n    d=\"M16.5 4.3H3.5C3.38954 4.3 3.3 4.38954 3.3 4.5V15.5C3.3 15.6105 3.38954 15.7 3.5 15.7H8.50005L8.50006 17.5H3.5C2.39543 17.5 1.5 16.6046 1.5 15.5V4.5C1.5 3.39543 2.39543 2.5 3.5 2.5H16.5C17.6046 2.5 18.5 3.39543 18.5 4.5V8.5H16.7V4.5C16.7 4.38954 16.6105 4.3 16.5 4.3ZM12 11.5C11.4477 11.5 11 11.9477 11 12.5L11 16.5C11 17.0523 11.4478 17.5 12 17.5H17.5C18.0523 17.5 18.5 17.0523 18.5 16.5L18.5 12.5C18.5 11.9477 18.0523 11.5 17.5 11.5H12Z\"\n    fill=\"white\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n    d=\"M9.4998 7.7C9.77595 7.7 9.9998 7.47614 9.9998 7.2V6.5C9.9998 6.22386 9.77595 6 9.4998 6H5.5402L5.52754 6.00016H5.5C5.22386 6.00016 5 6.22401 5 6.50016V10.4598C5 10.7359 5.22386 10.9598 5.5 10.9598H6.2C6.47614 10.9598 6.7 10.7359 6.7 10.4598V8.83005L8.76983 10.9386C8.96327 11.1357 9.27984 11.1386 9.47691 10.9451L9.97645 10.4548C10.1735 10.2613 10.1764 9.94476 9.983 9.7477L7.97289 7.7H9.4998Z\"\n    fill=\"white\" />\n</svg>", "image/svg+xml").firstChild;
  }
  var h = {
    PIP: "picture-in-picture",
    INLINE: "inline",
    FULLSCREEN: "fullscreen"
  };
  var d = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      var t;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      var o = arguments.length;
      var s = Array(o);
      var a = 0;
      for (; a < o; a++) {
        s[a] = arguments[a];
      }
      t = e.call.apply(e, [this].concat(s));
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "switchPIP", function (e) {
        if (!t.isPIPAvailable()) {
          return false;
        }
        if (e.stopPropagation) {
          e.stopPropagation();
        }
        if (t.isPip) {
          t.exitPIP();
          t.emitUserAction(e, "change_pip", {
            props: "pip",
            from: true,
            to: false
          });
          t.setAttr("data-state", "normal");
        } else if (t.player.media.readyState === 4) {
          t.requestPIP();
          t.emitUserAction(e, "change_pip", {
            props: "pip",
            from: false,
            to: true
          });
          t.setAttr("data-state", "pip");
        }
      });
      return t;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "beforeCreate",
      value: function (t) {
        if (typeof t.player.config.pip == "boolean") {
          t.config.showIcon = t.player.config.pip;
        }
      }
    }, {
      key: "afterCreate",
      value: function () {
        var t = this;
        if (this.isPIPAvailable()) {
          babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "afterCreate", this).call(this);
          this.pMode = h.INLINE;
          this.initPipEvents();
          if (this.config.showIcon) {
            this.initIcons();
          }
          this.once(videoPlayerEventConstants.COMPLETE, function () {
            if (t.config.showIcon) {
              playerUtilityHelpers.domUtils.removeClass(t.find(".xgplayer-icon"), "xg-icon-disable");
              t.bind("click", t.switchPIP);
            }
          });
        }
      }
    }, {
      key: "registerIcons",
      value: function () {
        return {
          pipIcon: {
            icon: c,
            class: "xg-get-pip"
          },
          pipIconExit: {
            icon: u,
            class: "xg-exit-pip"
          }
        };
      }
    }, {
      key: "initIcons",
      value: function () {
        var t = this.icons;
        this.appendChild(".xgplayer-icon", t.pipIcon);
        this.appendChild(".xgplayer-icon", t.pipIconExit);
      }
    }, {
      key: "initPipEvents",
      value: function () {
        var t = this;
        var e = this.player;
        this.leavePIPCallback = function () {
          var i = e.paused;
          playerUtilityHelpers.domUtils.setTimeout(t, function () {
            if (!i) {
              e.mediaPlay();
            }
          }, 0);
          if (!i) {
            e.mediaPlay();
          }
          t.setAttr("data-state", "normal");
          e.emit(videoPlayerEventConstants.PIP_CHANGE, false);
        };
        this.enterPIPCallback = function (i) {
          e.emit(videoPlayerEventConstants.PIP_CHANGE, true);
          t.pipWindow = i.pictureInPictureWindow;
          t.setAttr("data-state", "pip");
        };
        this.onWebkitpresentationmodechanged = function (i) {
          var n = e.media.webkitPresentationMode;
          if (t.pMode === h.FULLSCREEN && n !== h.FULLSCREEN) {
            e.onFullscreenChange(null, false);
          }
          t.pMode = n;
          if (n === h.PIP) {
            t.enterPIPCallback(i);
          } else if (n === h.INLINE) {
            t.leavePIPCallback(i);
          }
        };
        if (e.media) {
          e.media.addEventListener("enterpictureinpicture", this.enterPIPCallback);
          e.media.addEventListener("leavepictureinpicture", this.leavePIPCallback);
          if (i.checkWebkitSetPresentationMode(e.media)) {
            e.media.addEventListener("webkitpresentationmodechanged", this.onWebkitpresentationmodechanged);
          }
        }
      }
    }, {
      key: "requestPIP",
      value: function () {
        var t = this.player;
        var e = this.playerConfig;
        if (this.isPIPAvailable() && !this.isPip) {
          try {
            var n = e.poster;
            if (n) {
              t.media.poster = playerUtilityHelpers.domUtils.typeOf(n) === "String" ? n : n.poster;
            }
            if (i.checkWebkitSetPresentationMode(t.media)) {
              t.media.webkitSetPresentationMode("picture-in-picture");
            } else {
              t.media.requestPictureInPicture();
            }
            return true;
          } catch (t) {
            return false;
          }
        }
      }
    }, {
      key: "exitPIP",
      value: function () {
        var t = this.player;
        try {
          if (this.isPIPAvailable() && this.isPip) {
            if (i.checkWebkitSetPresentationMode(t.media)) {
              t.media.webkitSetPresentationMode("inline");
            } else {
              document.exitPictureInPicture();
            }
          }
          return true;
        } catch (t) {
          return false;
        }
      }
    }, {
      key: "isPip",
      get: function () {
        var t = this.player;
        return document.pictureInPictureElement && document.pictureInPictureElement === t.media || t.media.webkitPresentationMode === h.PIP;
      }
    }, {
      key: "isPIPAvailable",
      value: function () {
        var t = this.player.media;
        return (playerUtilityHelpers.domUtils.typeOf(document.pictureInPictureEnabled) !== "Boolean" || document.pictureInPictureEnabled) && (playerUtilityHelpers.domUtils.typeOf(t.disablePictureInPicture) === "Boolean" && !t.disablePictureInPicture || t.webkitSupportsPresentationMode && playerUtilityHelpers.domUtils.typeOf(t.webkitSetPresentationMode) === "Function");
      }
    }, {
      key: "destroy",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "destroy", this).call(this);
        var t = this.player;
        t.media.removeEventListener("enterpictureinpicture", this.enterPIPCallback);
        t.media.removeEventListener("leavepictureinpicture", this.leavePIPCallback);
        if (i.checkWebkitSetPresentationMode(t.media)) {
          t.media.removeEventListener("webkitpresentationmodechanged", this.onWebkitpresentationmodechanged);
        }
        this.exitPIP();
        this.unbind("click", this.btnClick);
      }
    }, {
      key: "render",
      value: function () {
        if (this.config.showIcon && this.isPIPAvailable()) {
          return `<xg-icon class="xgplayer-pip">
      <div class="xgplayer-icon xg-icon-disable">
      </div>
      ${i18nTipRenderer.renderTip(this, "PIP", this.playerConfig.isHideTips)}
    </xg-icon>`;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "pip";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.CONTROLS_RIGHT,
          index: 6,
          showIcon: false
        };
      }
    }, {
      key: "checkWebkitSetPresentationMode",
      value: function (t) {
        return typeof t.webkitSetPresentationMode == "function";
      }
    }]);
    return i;
  }(playerIconHoverPlugin.IconHoverPlugin);
  require.d(exports, {
    PipIconPlugin: function () {
      return d;
    }
  });
}