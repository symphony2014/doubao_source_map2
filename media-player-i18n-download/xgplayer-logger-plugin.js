// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'XgLoggerPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 955123
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var xgplayerLogger = require("xgplayer-logger") /*id: 587555*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  function l() {
    return new Date().getTime();
  }
  var c = {
    LOAD_START: "loadstart",
    LOADED_DATA: "loadeddata",
    FIRST_FRAME: "firstFrame",
    WAIT_START: "waitingStart",
    WAIT_END: "waitingEnd",
    SEEK_START: "seekStart",
    SEEK_END: "seekEnd"
  };
  var u = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      var t;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      var s = arguments.length;
      var r = Array(s);
      var u = 0;
      for (; u < s; u++) {
        r[u] = arguments[u];
      }
      t = e.call.apply(e, [this].concat(r));
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onTimeupdate", function () {
        t._state.isTimeUpdate = true;
        if (t._state.autoplayStart) {
          xgplayerLogger.logger.logInfo(`[xgLogger]${t.player.playerId} _onTimeupdate`);
          t._sendFF("onTimeupdate");
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onAutoplayStart", function () {
        xgplayerLogger.logger.logInfo(`[xgLogger]${t.player.playerId} _onAutoplayStart`);
        t._state.autoplayStart = true;
        if (t.vt) {
          t._sendFF("onAutoplayStart");
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onReset", function () {
        t._state = {
          autoplayStart: false,
          isFFLoading: false,
          isTimeUpdate: false,
          isFFSend: false,
          isLs: false
        };
        t.vt = 0;
        t.pt = 0;
        t.fvt = 0;
        t.newPointTime = l();
        t.loadedCostTime = 0;
        t.startCostTime = 0;
        t._isSeeking = false;
        t.seekingStart = 0;
        t.waitingStart = 0;
        t.fixedWaitingStart = 0;
        t._isWaiting = false;
        if (t._waitTimer) {
          playerUtilityHelpers.domUtils.clearTimeout(babelRuntimeHelpers_1.assertThisInit(t), t._waitTimer);
        }
        if (t._waittTimer) {
          playerUtilityHelpers.domUtils.clearTimeout(babelRuntimeHelpers_1.assertThisInit(t), t._waittTimer);
        }
        t._waitTimer = null;
        t._waittTimer = null;
        t._waitType = 0;
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onSeeking", function () {
        if (!t.seekingStart) {
          t.suspendWaitingStatus("seek");
          t.seekingStart = l();
          t.emitLog(c.SEEK_START, {
            start: l()
          });
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onSeeked", function () {
        t.suspendSeekingStatus("seeked");
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onWaitingLoadStart", function () {
        if (!t._isWaiting && !t.vt) {
          t._isWaiting = true;
          t.waitingStart = l();
          t.fixedWaitingStart = l();
          t._waitType = 1;
          t.emitLog(c.WAIT_START, {
            fixedStart: t.fixedWaitingStart,
            start: t.waitingStart,
            type: 1,
            endType: "loadstart"
          });
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onWaiting", function () {
        if (!t._isWaiting && t.vt) {
          t._isWaiting = true;
          if (t.vt) {
            if (t.seekingStart) {
              t._waitType = 2;
            } else {
              t._waitType = 0;
            }
          } else {
            t._waitType = 1;
          }
          t.fixedWaitingStart = l();
          t._waitTimer = playerUtilityHelpers.domUtils.setTimeout(babelRuntimeHelpers_1.assertThisInit(t), function () {
            if (t._isWaiting) {
              t.waitingStart = l();
              playerUtilityHelpers.domUtils.clearTimeout(babelRuntimeHelpers_1.assertThisInit(t), t._waitTimer);
              t._waitTimer = null;
              t._startWaitTimeout();
              t.emitLog(c.WAIT_START, {
                fixedStart: t.fixedWaitingStart,
                start: t.waitingStart,
                type: t._waitType,
                endType: t._waitType === 2 ? "seek" : "playing"
              });
            }
          }, 200);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onError", function () {
        t.suspendSeekingStatus("error");
        t.suspendWaitingStatus("error");
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onPlaying", function () {
        if (t._isWaiting) {
          t.suspendWaitingStatus("playing");
        }
      });
      return t;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "afterCreate",
      value: function () {
        var t = this;
        this._onReset();
        this._waitType = "firstFrame";
        this._initOnceEvents();
        this.newPointTime = l();
        this.loadedCostTime = 0;
        this.startCostTime = 0;
        this.on(videoPlayerEventConstants.LOAD_START, function () {
          var e = t._state;
          var i = e.autoplayStart;
          var n = e.isFFSend;
          t.startCostTime = l() - t.newPointTime;
          xgplayerLogger.logger.logInfo(`[xgLogger]${t.player.playerId} LOAD_START`, `autoplayStart:${i} isFFSend:${n} startCostTime:${t.startCostTime} newPointTime${t.newPointTime}`);
          if (!n) {
            if (!e.isLs) {
              t.emitLog(c.LOAD_START, {});
            }
            e.isLs = true;
            e.isTimeUpdate = false;
            e.isFFLoading = true;
            t.pt = l();
            t.vt = 0;
            t.fvt = 0;
            t._initOnceEvents();
            t._onWaitingLoadStart();
          }
        });
        this.on(videoPlayerEventConstants.LOADED_DATA, function () {
          t.vt = l();
          t.fvt = t.vt - t.pt;
          t.loadedCostTime = t.vt - t.newPointTime;
          var e = t._state;
          var i = e.isTimeUpdate;
          var n = e.isFFSend;
          var o = e.autoplayStart;
          xgplayerLogger.logger.logInfo(`[xgLogger]${t.player.playerId} LOADED_DATA`, `fvt:${t.fvt} isTimeUpdate:${t._state.isTimeUpdate} loadedCostTime:${t.loadedCostTime}`);
          if (i || o) {
            t._sendFF("loadedData");
          }
          if (!n) {
            t.emitLog(c.LOADED_DATA, {});
          }
          t.suspendWaitingStatus("loadeddata");
        });
        this.on(videoPlayerEventConstants.SEEKING, this._onSeeking);
        this.on(videoPlayerEventConstants.SEEKED, this._onSeeked);
        this.on(videoPlayerEventConstants.DESTROY, function () {
          t.endState("destroy");
        });
        this.on(videoPlayerEventConstants.URL_CHANGE, function () {
          t.endState("urlChange");
          xgplayerLogger.logger.logInfo(`[xgLogger]${t.player.playerId} URL_CHANGE`);
          if (t._state.isFFSend) {
            t._onReset();
          }
        });
        this.on([videoPlayerEventConstants.PLAYING, videoPlayerEventConstants.CANPLAY], this._onPlaying);
        this.on(videoPlayerEventConstants.WAITING, this._onWaiting);
        this.on(videoPlayerEventConstants.ERROR, this._onError);
        this.on(videoPlayerEventConstants.RESET, function () {
          xgplayerLogger.logger.logInfo(`[xgLogger]${t.player.playerId} RESET`);
          t.endState("reset");
          t._initOnceEvents();
          t._onReset();
        });
      }
    }, {
      key: "_initOnceEvents",
      value: function () {
        this.off(videoPlayerEventConstants.AUTOPLAY_STARTED, this._onAutoplayStart);
        this.off(videoPlayerEventConstants.TIME_UPDATE, this._onTimeupdate);
        this.once(videoPlayerEventConstants.AUTOPLAY_STARTED, this._onAutoplayStart);
        this.once(videoPlayerEventConstants.TIME_UPDATE, this._onTimeupdate);
      }
    }, {
      key: "_sendFF",
      value: function (t) {
        this.s = l();
        var e = this._state;
        var i = e.isFFLoading;
        var n = e.isFFSend;
        xgplayerLogger.logger.logInfo(`[xgLogger]${this.player.playerId} _sendFF`, `${t} fvt:${this.fvt} isFFLoading:${i} !isFFSend:${!n}`);
        if (this.vt > 0 && i && !n) {
          xgplayerLogger.logger.logInfo(`[xgLogger]${this.player.playerId} emitLog_firstFrame`, t);
          this._state.isFFLoading = false;
          this._state.isFFSend = true;
          this.emitLog(c.FIRST_FRAME, {
            fvt: this.fvt,
            costTime: this.fvt,
            vt: this.vt,
            startCostTime: this.startCostTime,
            loadedCostTime: this.loadedCostTime
          });
        }
      }
    }, {
      key: "_startWaitTimeout",
      value: function () {
        var t = this;
        if (this._waittTimer) {
          playerUtilityHelpers.domUtils.clearTimeout(this, this._waittTimer);
        }
        this._waittTimer = playerUtilityHelpers.domUtils.setTimeout(this, function () {
          t.suspendWaitingStatus("timeout");
          playerUtilityHelpers.domUtils.clearTimeout(t, t._waittTimer);
          t._waittTimer = null;
        }, this.config.waitTimeout);
      }
    }, {
      key: "endState",
      value: function (t) {
        this.suspendWaitingStatus(t);
        this.suspendSeekingStatus(t);
      }
    }, {
      key: "suspendSeekingStatus",
      value: function (t) {
        if (this.seekingStart) {
          var e = l();
          var i = e - this.seekingStart;
          this.seekingStart = 0;
          this.emitLog(c.SEEK_END, {
            end: e,
            costTime: i,
            endType: t
          });
        }
      }
    }, {
      key: "suspendWaitingStatus",
      value: function (t) {
        if (this._waitTimer) {
          playerUtilityHelpers.domUtils.clearTimeout(this, this._waitTimer);
          this._waitTimer = null;
        }
        if (this._waittTimer) {
          playerUtilityHelpers.domUtils.clearTimeout(this, this._waittTimer);
          this._waittTimer = null;
        }
        this._isWaiting = false;
        if (this.waitingStart) {
          var e = l();
          var i = e - this.waitingStart;
          var n = e - this.fixedWaitingStart;
          var s = this.config.waitTimeout;
          this._isWaiting = false;
          this.waitingStart = 0;
          this.fixedWaitingStart = 0;
          this.emitLog(c.WAIT_END, {
            fixedCostTime: n > s ? s : n,
            costTime: i > s ? s : i,
            type: t === "loadeddata" ? 1 : this._waitType,
            endType: this._waitType === 2 ? "seek" : t
          });
        }
      }
    }, {
      key: "emitLog",
      value: function (t, e) {
        var i = this.player;
        this.emit(videoPlayerEventConstants.XGLOG, babelRuntimeHelpers_1.objectSpread({
          t: l(),
          host: playerUtilityHelpers.domUtils.getHostFromUrl(i.currentSrc),
          vtype: i.vtype,
          eventType: t,
          currentTime: this.player.currentTime,
          readyState: i.video.readyState,
          networkState: i.video.networkState
        }, e));
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "xgLogger";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          waitTimeout: 10000
        };
      }
    }]);
    return i;
  }(playerUiPluginBase.PlayerUiPlugin);
  require.d(exports, {
    XgLoggerPlugin: function () {
      return u;
    }
  });
}