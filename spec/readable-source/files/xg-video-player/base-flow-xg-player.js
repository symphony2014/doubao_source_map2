// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'videoPlayerClass'
// - Resolved require(578845) to 'video-player-class'
// - Renamed variable 'i' to 'videoPlayerEventConstants'
// - Resolved require(846243) to 'video-player-event-constants'
// - Renamed variable 'a' to 'eventEmitterWrapper_1'
// - Resolved require(740547) to 'event-emitter-wrapper_1'
// - Renamed variable 's' to 'xgplayerUiDanmuModule'
// - Resolved require(65386) to 'xgplayer-ui-danmu-module'
// - Updated imported property 'v' to 'getEventEmitter' (module 740547)
// - Updated imported property 'Z' to 'VideoPlayer' (module 578845)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 401141
         */
module.exports = function (module, exports, require) {
  var videoPlayerClass = require("video-player-class") /*id: 578845*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  function o(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  var xgplayerUiDanmuModule = require("xgplayer-ui-danmu-module") /*id: 65386*/;
  function l(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let c = new eventEmitterWrapper_1.getEventEmitter();
  let d = new class {
    get channel() {
      return this._channel;
    }
    _onReceiveMessage(e) {
      this._listeners.forEach(t => t(e));
    }
    addListener(e) {
      this._listeners.push(e);
    }
    removeListener(e) {
      let t = this._listeners.indexOf(e);
      if (t > -1) {
        this._listeners.splice(t, 1);
      }
    }
    constructor(e) {
      o(this, "_channelName", "");
      o(this, "_channel", null);
      o(this, "_listeners", []);
      if (!window?.BroadcastChannel) {
        return;
      }
      this._channelName = e;
      this._channel = new BroadcastChannel(e);
      this._channel.addEventListener("message", this._onReceiveMessage.bind(this));
    }
  }("BaseFlowXgPlayerBroadCastChannel");
  class u extends videoPlayerClass.VideoPlayer {
    get playerUniqueKey() {
      return this._playerUniqueKey;
    }
    isCurrentContent(e) {
      return this.playingContentUniqueKey === e;
    }
    _addListenPlayEvent() {
      this.on(videoPlayerEventConstants.PLAY, this._onEmitPlayEvent.bind(this));
      c.on(videoPlayerEventConstants.PLAY, this._onPlayerEvent.bind(this));
      d.addListener(this.pause.bind(this));
    }
    _onEmitPlayEvent() {
      var e;
      c.emit(videoPlayerEventConstants.PLAY, this._playerUniqueKey);
      if ((e = d.channel) !== null && e !== undefined) {
        e.postMessage({
          url: this.url,
          timestamp: Date.now()
        });
      }
    }
    _removeListenPlayEvent() {
      c.off(videoPlayerEventConstants.PLAY, this._onPlayerEvent.bind(this));
      d.removeListener(this.pause.bind(this));
    }
    _onPlayerEvent(e) {
      if (e !== this._playerUniqueKey) {
        this.pause();
      }
    }
    destroy() {
      this._removeListenPlayEvent();
      super.destroy();
    }
    constructor(e) {
      super(e);
      l(this, "_playerUniqueKey", undefined);
      l(this, "playingContentUniqueKey", "");
      this._playerUniqueKey = Symbol("BaseFlowXgPlayer");
      this._addListenPlayEvent();
    }
  }
  require.r(exports);
  require.d(exports, {
    MobilePreset: function () {
      return xgplayerUiDanmuModule.MobilePreset;
    },
    langJp: function () {
      return xgplayerUiDanmuModule.langJp;
    },
    Events: function () {
      return xgplayerUiDanmuModule.Events;
    },
    DanmuPanel: function () {
      return xgplayerUiDanmuModule.DanmuPanel;
    },
    STATES: function () {
      return xgplayerUiDanmuModule.STATES;
    },
    TextTrack: function () {
      return xgplayerUiDanmuModule.TextTrack;
    },
    langZhCn: function () {
      return xgplayerUiDanmuModule.langZhCn;
    },
    Sniffer: function () {
      return xgplayerUiDanmuModule.Sniffer;
    },
    BaseXgPlayer: function () {
      return u;
    },
    langZhHk: function () {
      return xgplayerUiDanmuModule.langZhHk;
    },
    Util: function () {
      return xgplayerUiDanmuModule.Util;
    },
    I18N: function () {
      return xgplayerUiDanmuModule.I18N;
    },
    STATE_CLASS: function () {
      return xgplayerUiDanmuModule.STATE_CLASS;
    },
    Danmu: function () {
      return xgplayerUiDanmuModule.Danmu;
    },
    SimplePlayer: function () {
      return xgplayerUiDanmuModule.SimplePlayer;
    },
    BasePlugin: function () {
      return xgplayerUiDanmuModule.BasePlugin;
    },
    DefaultPresetEn: function () {
      return xgplayerUiDanmuModule.DefaultPresetEn;
    },
    Errors: function () {
      return xgplayerUiDanmuModule.Errors;
    },
    DefaultPreset: function () {
      return xgplayerUiDanmuModule.DefaultPreset;
    },
    Plugin: function () {
      return xgplayerUiDanmuModule.Plugin;
    },
    LivePreset: function () {
      return xgplayerUiDanmuModule.LivePreset;
    },
    PlayerEventEmitter: function () {
      return c;
    },
    DanmuIcon: function () {
      return xgplayerUiDanmuModule.DanmuIcon;
    }
  });
}