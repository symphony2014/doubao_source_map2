// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'Player'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12575.ecc95d9e.js
         * chunkId: 12575
         * moduleId: 741933
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var environmentDetectorUtil = require("environment-detector-util") /*id: 257644*/;
  var playerErrorHandler = require("player-error-handler") /*id: 608826*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  function u(e, t) {
    if (this && this.emit) {
      if (e === "error") {
        this.errorHandler(e, t.error);
      } else {
        this.emit(e, t);
      }
    }
  }
  var c = function (e) {
    babelRuntimeHelpers_1.inherits(i, e);
    var t = babelRuntimeHelpers_1.constructHelper(i);
    function i(e) {
      babelRuntimeHelpers_1.classCallCheck(this, i);
      (r = t.call(this, e))._hasStart = false;
      r._currentTime = 0;
      r._duration = 0;
      r._internalOp = {};
      r._lastMuted = false;
      r.vtype = "MP4";
      r._rate = -1;
      r.mediaConfig = Object.assign({}, {
        controls: false,
        autoplay: e.autoplay,
        playsinline: e.playsinline,
        "x5-playsinline": e.playsinline,
        "webkit-playsinline": e.playsinline,
        "x5-video-player-fullscreen": e["x5-video-player-fullscreen"] || e.x5VideoPlayerFullscreen,
        "x5-video-orientation": e["x5-video-orientation"] || e.x5VideoOrientation,
        airplay: e.airplay,
        "webkit-airplay": e.airplay,
        tabindex: e.tabindex | 0,
        mediaType: e.mediaType || "video",
        "data-index": -1
      }, e.videoConfig, e.videoAttributes);
      var r;
      var a = e["x5-video-player-type"] || e.x5VideoPlayerType;
      if (environmentDetectorUtil.environmentUtils.isWeixin && environmentDetectorUtil.environmentUtils.os.isAndroid && a) {
        r.mediaConfig["x5-video-player-type"] = a;
        delete r.mediaConfig.playsinline;
        delete r.mediaConfig["webkit-playsinline"];
        delete r.mediaConfig["x5-playsinline"];
      }
      if (e.loop) {
        r.mediaConfig.loop = "loop";
      }
      r.media = playerUtilityHelpers.domUtils.createDom(r.mediaConfig.mediaType, "", r.mediaConfig, "");
      if (e.defaultPlaybackRate) {
        r.media.defaultPlaybackRate = r.media.playbackRate = e.defaultPlaybackRate;
      }
      if (playerUtilityHelpers.domUtils.typeOf(e.volume) === "Number") {
        r.volume = e.volume;
      }
      if (e.autoplayMuted) {
        r.media.muted = true;
        r._lastMuted = true;
      }
      if (e.autoplay) {
        r.media.autoplay = true;
      }
      r._interval = {};
      r.mediaEventMiddleware = {};
      r.attachVideoEvents();
      return r;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "setEventsMiddleware",
      value: function (e) {
        var t = this;
        Object.keys(e).map(function (i) {
          t.mediaEventMiddleware[i] = e[i];
        });
      }
    }, {
      key: "removeEventsMiddleware",
      value: function (e) {
        var t = this;
        Object.keys(e).map(function (e) {
          delete t.mediaEventMiddleware[e];
        });
      }
    }, {
      key: "attachVideoEvents",
      value: function () {
        var e = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.media;
        this._evHandlers ||= videoPlayerEventConstants.VIDEO_EVENTS.map(function (t) {
          var i = `on${t.charAt(0).toUpperCase()}${t.slice(1)}`;
          if (typeof e[i] == "function") {
            e.on(t, e[i]);
          }
          return babelRuntimeHelpers_1.defineProperty({}, t, function (i, n) {
            var r = {
              player: e,
              eventName: t,
              originalEvent: i,
              detail: i.detail || {},
              timeStamp: i.timeStamp,
              currentTime: e.currentTime,
              duration: e.duration,
              paused: e.paused,
              ended: e.ended,
              isInternalOp: !!e._internalOp[i.type],
              muted: e.muted,
              volume: e.volume,
              host: playerUtilityHelpers.domUtils.getHostFromUrl(e.currentSrc),
              vtype: e.vtype
            };
            e.removeInnerOP(i.type);
            if (t === "timeupdate") {
              e._currentTime = e.media && e.media.currentTime;
            }
            if (t === "ratechange") {
              var o = e.media ? e.media.playbackRate : 0;
              if (o && e._rate === o) {
                return;
              }
              e._rate = e.media && e.media.playbackRate;
            }
            if (t === "durationchange") {
              e._duration = e.media.duration;
            }
            if (t === "volumechange") {
              r.isMutedChange = e._lastMuted !== e.muted;
              e._lastMuted = e.muted;
            }
            if (t === "error") {
              r.error = n || e.video.error;
            }
            if (e.mediaEventMiddleware[t]) {
              var a = u.bind(e, t, r);
              try {
                e.mediaEventMiddleware[t].call(e, r, a);
              } catch (i) {
                u.call(e, t, r);
                throw i;
              }
            } else {
              u.call(e, t, r);
            }
          });
        });
        this._evHandlers.forEach(function (e) {
          var i = Object.keys(e)[0];
          t.addEventListener(i, e[i], false);
        });
      }
    }, {
      key: "detachVideoEvents",
      value: function () {
        var e = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.media;
        this._evHandlers.forEach(function (e) {
          var i = Object.keys(e)[0];
          t.removeEventListener(i, e[i], false);
        });
        this._evHandlers.forEach(function (t) {
          var i = Object.keys(t)[0];
          var n = `on${i.charAt(0).toUpperCase()}${i.slice(1)}`;
          if (typeof e[n] == "function") {
            e.off(i, e[n]);
          }
        });
        this._evHandlers = null;
      }
    }, {
      key: "_attachSourceEvents",
      value: function (e, t) {
        var i = this;
        e.removeAttribute("src");
        e.load();
        t.forEach(function (e) {
          i.media.appendChild(playerUtilityHelpers.domUtils.createDom("source", "", {
            src: `${e.src}`,
            type: `${e.type || ""}`
          }));
        });
        var n = e.children;
        if (n) {
          this._videoSourceCount = n.length;
          this._vLoadeddata = function (e) {
            i.emit(videoPlayerEventConstants.SOURCE_SUCCESS, {
              src: e.target.currentSrc,
              host: playerUtilityHelpers.domUtils.getHostFromUrl(e.target.currentSrc)
            });
          };
          var r = null;
          var o = 0;
          for (; o < this._evHandlers.length; o++) {
            if (Object.keys(this._evHandlers[o])[0] === "error") {
              r = this._evHandlers[o];
              break;
            }
          }
          this._sourceError ||= function (e) {
            i._videoSourceCount--;
            if (i._videoSourceCount === 0) {
              var t = {
                code: 4,
                message: "sources_load_error"
              };
              if (r) {
                r.error(e, t);
              } else {
                i.errorHandler("error", t);
              }
            }
            var n = playerErrorHandler.errorTypeMap["4"];
            i.emit(videoPlayerEventConstants.SOURCE_ERROR, new playerErrorHandler.MediaErrorClass(i, {
              errorType: n,
              errorCode: 4,
              errorMessage: "sources_load_error",
              mediaError: {
                code: 4,
                message: "sources_load_error"
              },
              src: e.target.src
            }));
          };
          for (var u = 0; u < n.length; u++) {
            n[u].addEventListener("error", this._sourceError);
          }
          e.addEventListener("loadeddata", this._vLoadeddata);
        }
      }
    }, {
      key: "_detachSourceEvents",
      value: function (e) {
        var t = e.children;
        if (t && t.length !== 0 && this._sourceError) {
          for (var i = 0; i < t.length; i++) {
            t[i].removeEventListener("error", this._sourceError);
          }
          while (t.length > 0) {
            e.removeChild(t[0]);
          }
          if (this._vLoadeddata) {
            e.removeEventListener("loadeddata", this._vLoadeddata);
          }
        }
      }
    }, {
      key: "errorHandler",
      value: function (e, t = null) {
        if (this.media && (this.media.error || t)) {
          var i = this.media.error || t;
          var n = i.code ? playerErrorHandler.errorTypeMap[i.code] : "other";
          var r = i.message;
          if (!this.media.currentSrc) {
            i = {
              code: 6,
              message: "empty_src"
            };
          }
          this.emit(e, new playerErrorHandler.MediaErrorClass(this, {
            errorType: n,
            errorCode: i.code,
            errorMessage: i.message || "",
            mediaError: i
          }));
        }
      }
    }, {
      key: "destroy",
      value: function () {
        if (this.media) {
          if (this.media.pause) {
            this.media.pause();
            this.media.muted = true;
          }
          this.media.removeAttribute("src");
          this.media.load();
        }
        this._currentTime = 0;
        this._duration = 0;
        this.mediaConfig = null;
        for (var e in this._interval) {
          if (Object.prototype.hasOwnProperty.call(this._interval, e)) {
            clearInterval(this._interval[e]);
            this._interval[e] = null;
          }
        }
        this.detachVideoEvents();
        this.media = null;
        this.mediaEventMiddleware = {};
        this.removeAllListeners();
      }
    }, {
      key: "video",
      get: function () {
        return this.media;
      },
      set: function (e) {
        this.media = e;
      }
    }, {
      key: "play",
      value: function () {
        if (this.media) {
          return this.media.play();
        } else {
          return null;
        }
      }
    }, {
      key: "pause",
      value: function () {
        if (this.media) {
          this.media.pause();
        }
      }
    }, {
      key: "load",
      value: function () {
        if (this.media) {
          this.media.load();
        }
      }
    }, {
      key: "canPlayType",
      value: function (e) {
        return !!this.media && this.media.canPlayType(e);
      }
    }, {
      key: "getBufferedRange",
      value: function (e) {
        var t = [0, 0];
        if (!this.media) {
          return t;
        }
        e ||= this.media.buffered;
        var i = this.media.currentTime;
        if (e) {
          var n = 0;
          var r = e.length;
          for (; n < r && (t[0] = e.start(n), t[1] = e.end(n), !(t[0] <= i) || !(i <= t[1])); n++);
        }
        if (t[0] - i <= 0 && i - t[1] <= 0) {
          return t;
        } else {
          return [0, 0];
        }
      }
    }, {
      key: "autoplay",
      get: function () {
        return !!this.media && this.media.autoplay;
      },
      set: function (e) {
        if (this.media) {
          this.media.autoplay = e;
        }
      }
    }, {
      key: "buffered",
      get: function () {
        if (this.media) {
          return this.media.buffered;
        } else {
          return null;
        }
      }
    }, {
      key: "buffered2",
      get: function () {
        if (this.media && this.media.buffered) {
          return playerUtilityHelpers.domUtils.getBuffered2(this.media.buffered);
        } else {
          return null;
        }
      }
    }, {
      key: "bufferedPoint",
      get: function () {
        var e = {
          start: 0,
          end: 0
        };
        if (!this.media) {
          return e;
        }
        var t = this.media.buffered;
        if (!t || t.length === 0) {
          return e;
        }
        for (var i = 0; i < t.length; i++) {
          if ((t.start(i) <= this.currentTime || t.start(i) < 0.1) && t.end(i) >= this.currentTime) {
            return {
              start: t.start(i),
              end: t.end(i)
            };
          }
        }
        return e;
      }
    }, {
      key: "crossOrigin",
      get: function () {
        if (this.media) {
          return this.media.crossOrigin;
        } else {
          return "";
        }
      },
      set: function (e) {
        if (this.media) {
          this.media.crossOrigin = e;
        }
      }
    }, {
      key: "currentSrc",
      get: function () {
        if (this.media) {
          return this.media.currentSrc;
        } else {
          return "";
        }
      },
      set: function (e) {
        if (this.media) {
          this.media.currentSrc = e;
        }
      }
    }, {
      key: "currentTime",
      get: function () {
        if (this.media) {
          if (this.media.currentTime !== undefined) {
            return this.media.currentTime;
          } else {
            return this._currentTime;
          }
        } else {
          return 0;
        }
      },
      set: function (e) {
        if (this.media) {
          this.media.currentTime = e;
        }
      }
    }, {
      key: "defaultMuted",
      get: function () {
        return !!this.media && this.media.defaultMuted;
      },
      set: function (e) {
        if (this.media) {
          this.media.defaultMuted = e;
        }
      }
    }, {
      key: "duration",
      get: function () {
        return this._duration;
      }
    }, {
      key: "ended",
      get: function () {
        return !!this.media && this.media.ended;
      }
    }, {
      key: "error",
      get: function () {
        return this.media.error;
      }
    }, {
      key: "errorNote",
      get: function () {
        if (this.media.error) {
          return ["MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED"][this.media.error.code - 1];
        } else {
          return "";
        }
      }
    }, {
      key: "loop",
      get: function () {
        return !!this.media && this.media.loop;
      },
      set: function (e) {
        if (this.media) {
          this.media.loop = e;
        }
      }
    }, {
      key: "muted",
      get: function () {
        return !!this.media && this.media.muted;
      },
      set: function (e) {
        if (this.media && this.media.muted !== e) {
          this._lastMuted = this.media.muted;
          this.media.muted = e;
        }
      }
    }, {
      key: "networkState",
      get: function () {
        return this.media.networkState;
      }
    }, {
      key: "paused",
      get: function () {
        return !this.media || this.media.paused;
      }
    }, {
      key: "playbackRate",
      get: function () {
        if (this.media) {
          return this.media.playbackRate;
        } else {
          return 0;
        }
      },
      set: function (e) {
        if (this.media && e !== Infinity) {
          this.media.defaultPlaybackRate = e;
          this.media.playbackRate = e;
        }
      }
    }, {
      key: "played",
      get: function () {
        if (this.media) {
          return this.media.played;
        } else {
          return null;
        }
      }
    }, {
      key: "preload",
      get: function () {
        return !!this.media && this.media.preload;
      },
      set: function (e) {
        if (this.media) {
          this.media.preload = e;
        }
      }
    }, {
      key: "readyState",
      get: function () {
        return this.media.readyState;
      }
    }, {
      key: "seekable",
      get: function () {
        return !!this.media && this.media.seekable;
      }
    }, {
      key: "seeking",
      get: function () {
        return !!this.media && this.media.seeking;
      }
    }, {
      key: "src",
      get: function () {
        if (this.media) {
          return this.media.src;
        } else {
          return "";
        }
      },
      set: function (e) {
        if (this.media) {
          this.emit(videoPlayerEventConstants.URL_CHANGE, e);
          this.emit(videoPlayerEventConstants.WAITING);
          this._currentTime = 0;
          this._duration = 0;
          if (/^blob/.test(this.media.currentSrc) || /^blob/.test(this.media.src)) {
            this.onWaiting();
            return;
          }
          this._detachSourceEvents(this.media);
          if (playerUtilityHelpers.domUtils.typeOf(e) === "Array") {
            this._attachSourceEvents(this.media, e);
          } else if (e) {
            this.media.src = e;
          } else {
            this.media.removeAttribute("src");
          }
          this.load();
        }
      }
    }, {
      key: "volume",
      get: function () {
        if (this.media) {
          return this.media.volume;
        } else {
          return 0;
        }
      },
      set: function (e) {
        if (e !== Infinity && this.media) {
          this.media.volume = e;
        }
      }
    }, {
      key: "addInnerOP",
      value: function (e) {
        this._internalOp[e] = true;
      }
    }, {
      key: "removeInnerOP",
      value: function (e) {
        delete this._internalOp[e];
      }
    }, {
      key: "emit",
      value: function (e, t) {
        var r;
        var s = arguments.length;
        var o = Array(s > 2 ? s - 2 : 0);
        var a = 2;
        for (; a < s; a++) {
          o[a - 2] = arguments[a];
        }
        (r = babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "emit", this)).call.apply(r, [this, e, t].concat(o));
      }
    }, {
      key: "on",
      value: function (e, t) {
        var r;
        var s = arguments.length;
        var o = Array(s > 2 ? s - 2 : 0);
        var a = 2;
        for (; a < s; a++) {
          o[a - 2] = arguments[a];
        }
        (r = babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "on", this)).call.apply(r, [this, e, t].concat(o));
      }
    }, {
      key: "once",
      value: function (e, t) {
        var r;
        var s = arguments.length;
        var o = Array(s > 2 ? s - 2 : 0);
        var a = 2;
        for (; a < s; a++) {
          o[a - 2] = arguments[a];
        }
        (r = babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "once", this)).call.apply(r, [this, e, t].concat(o));
      }
    }, {
      key: "off",
      value: function (e, t) {
        var r;
        var s = arguments.length;
        var o = Array(s > 2 ? s - 2 : 0);
        var a = 2;
        for (; a < s; a++) {
          o[a - 2] = arguments[a];
        }
        (r = babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "off", this)).call.apply(r, [this, e, t].concat(o));
      }
    }, {
      key: "offAll",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "removeAllListeners", this).call(this);
      }
    }]);
    return i;
  }(eventEmitterWrapper_1.eventEmitter);
  var h = function () {
    function e(t = {
      name: "xgplayer",
      version: 1,
      db: null,
      ojstore: {
        name: "xg-m4a",
        keypath: "vid"
      }
    }) {
      babelRuntimeHelpers_1.classCallCheck(this, e);
      this.indexedDB = window.indexedDB || window.webkitindexedDB;
      this.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
      this.myDB = t;
    }
    babelRuntimeHelpers_1.createClass(e, [{
      key: "openDB",
      value: function (e) {
        var t = this;
        var i = this;
        var n = this.myDB.version || 1;
        var r = i.indexedDB.open(i.myDB.name, n);
        r.onerror = function (e) {};
        r.onsuccess = function (n) {
          t.myDB.db = n.target.result;
          e.call(i);
        };
        r.onupgradeneeded = function (e) {
          var t = e.target.result;
          e.target.transaction;
          if (!t.objectStoreNames.contains(i.myDB.ojstore.name)) {
            t.createObjectStore(i.myDB.ojstore.name, {
              keyPath: i.myDB.ojstore.keypath
            });
          }
        };
      }
    }, {
      key: "deletedb",
      value: function () {
        this.indexedDB.deleteDatabase(this.myDB.name);
      }
    }, {
      key: "closeDB",
      value: function () {
        this.myDB.db.close();
      }
    }, {
      key: "addData",
      value: function (e, t) {
        var i;
        var n = this.myDB.db.transaction(e, "readwrite").objectStore(e);
        var r = 0;
        for (; r < t.length; r++) {
          (i = n.add(t[r])).onerror = function () {};
          i.onsuccess = function () {};
        }
      }
    }, {
      key: "putData",
      value: function (e, t) {
        var i;
        var n = this.myDB.db.transaction(e, "readwrite").objectStore(e);
        var r = 0;
        for (; r < t.length; r++) {
          (i = n.put(t[r])).onerror = function () {};
          i.onsuccess = function () {};
        }
      }
    }, {
      key: "getDataByKey",
      value: function (e, t, i) {
        var n = this;
        var r = this.myDB.db.transaction(e, "readwrite").objectStore(e).get(t);
        r.onerror = function () {
          i.call(n, null);
        };
        r.onsuccess = function (e) {
          var t = e.target.result;
          i.call(n, t);
        };
      }
    }, {
      key: "deleteData",
      value: function (e, t) {
        this.myDB.db.transaction(e, "readwrite").objectStore(e).delete(t);
      }
    }, {
      key: "clearData",
      value: function (e) {
        this.myDB.db.transaction(e, "readwrite").objectStore(e).clear();
      }
    }]);
    return e;
  }();
  var d = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
  var f = ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"];
  var g = ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"];
  var p = "data-xgplayerid";
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var playerPluginBaseClass = require("player-plugin-base-class") /*id: 738545*/;
  var m = function () {
    function e() {
      var t = this;
      babelRuntimeHelpers_1.classCallCheck(this, e);
      babelRuntimeHelpers_1.defineProperty(this, "__trigger", function (e) {
        var i = new Date().getTime();
        t.timeStamp = i;
        for (var n = 0; n < e.length; n++) {
          t.__runHandler(e[n].target);
        }
      });
      this.__handlers = [];
      this.timeStamp = 0;
      this.observer = null;
      if (window.ResizeObserver) {
        try {
          this.observer = new window.ResizeObserver(playerUtilityHelpers.debounce(this.__trigger, 100, {
            trailing: true
          }));
          this.timeStamp = new Date().getTime();
        } catch (e) {}
      }
    }
    babelRuntimeHelpers_1.createClass(e, [{
      key: "addObserver",
      value: function (e, t) {
        if (this.observer) {
          if (this.observer) {
            this.observer.observe(e);
          }
          var i = e.getAttribute(p);
          var n = this.__handlers;
          var r = -1;
          var s = 0;
          for (; s < n.length; s++) {
            if (n[s] && e === n[s].target) {
              r = s;
            }
          }
          if (r > -1) {
            this.__handlers[r].handler = t;
          } else {
            this.__handlers.push({
              target: e,
              handler: t,
              playerId: i
            });
          }
        }
      }
    }, {
      key: "unObserver",
      value: function (e) {
        var t = -1;
        this.__handlers.map(function (i, n) {
          if (e === i.target) {
            t = n;
          }
        });
        try {
          if (this.observer) {
            this.observer.unobserve(e);
          }
        } catch (e) {}
        if (this.observer) {
          this.observer.unobserve(e);
        }
        if (t > -1) {
          this.__handlers.splice(t, 1);
        }
      }
    }, {
      key: "destroyObserver",
      value: function () {
        if (this.observer) {
          this.observer.disconnect();
        }
        this.observer = null;
        this.__handlers = null;
      }
    }, {
      key: "__runHandler",
      value: function (e) {
        var t = this.__handlers;
        var i = 0;
        for (; i < t.length; i++) {
          if (t[i] && e === t[i].target) {
            try {
              t[i].handler(e);
            } catch (e) {}
            return true;
          }
        }
        return false;
      }
    }]);
    return e;
  }();
  var _ = null;
  var E = {
    pluginGroup: {},
    init: function (e) {
      var t;
      var i;
      var n = e._pluginInfoId;
      if (!n) {
        n = new Date().getTime();
        e._pluginInfoId = n;
      }
      if (!e.config.closeResizeObserver) {
        t = e.root;
        i = function () {
          e.resize();
        };
        _ ||= new m();
        _.addObserver(t, i);
      }
      if (Object.keys(this.pluginGroup).length === 0) {
        e.isUserActive = true;
      }
      this.pluginGroup[n] = {
        _player: e,
        _originalOptions: e.config || {},
        _plugins: {}
      };
    },
    checkPlayerRoot: function (e) {
      if (this.pluginGroup) {
        var t = Object.keys(this.pluginGroup);
        var i = 0;
        for (; i < t.length; i++) {
          var n = this.pluginGroup[t[i]]._player;
          if (n.root === e) {
            return n;
          }
        }
      }
      return null;
    },
    formatPluginInfo: function (e, t) {
      var i = null;
      var n = null;
      if (e.plugin && typeof e.plugin == "function") {
        i = e.plugin;
        n = e.options;
      } else {
        i = e;
        n = {};
      }
      if (t) {
        n.config = t || {};
      }
      return {
        PLUFGIN: i,
        options: n
      };
    },
    checkPluginIfExits: function (e, t) {
      for (var i = 0; i < t.length; i++) {
        if (e.toLowerCase() === t[i].pluginName.toLowerCase()) {
          return true;
        }
      }
      return false;
    },
    getRootByConfig: function (e, t) {
      var i = Object.keys(t);
      var n = null;
      var r = 0;
      for (; r < i.length; r++) {
        if (e.toLowerCase() === i[r].toLowerCase()) {
          n = t[i[r]];
          break;
        }
      }
      if (playerUtilityHelpers.domUtils.typeOf(n) === "Object") {
        return {
          root: n.root,
          position: n.position
        };
      } else {
        return {};
      }
    },
    lazyRegister: function (e, t) {
      var i = this;
      var n = t.timeout || 1500;
      return Promise.race([t.loader().then(function (t) {
        var n;
        n = t && t.__esModule ? t.default : t;
        i.register(e, n, t.options);
      }), new Promise(function (e, t) {
        setTimeout(function () {
          t(Error("timeout"));
        }, n);
      })]);
    },
    register: function (e, t, i = {}) {
      if (!!e && !!t && typeof t == "function" && t.prototype !== undefined) {
        var n = e._pluginInfoId;
        if (n && this.pluginGroup[n]) {
          this.pluginGroup[n]._plugins ||= {};
          var r = this.pluginGroup[n]._plugins;
          var o = this.pluginGroup[n]._originalOptions;
          i.player = this.pluginGroup[n]._player;
          var a = i.pluginName || t.pluginName;
          if (!a) {
            throw Error("The property pluginName is necessary");
          }
          if (!t.isSupported || t.isSupported(e.config.mediaType, e.config.codecType)) {
            i.config ||= {};
            var l = Object.keys(o);
            var u = 0;
            for (; u < l.length; u++) {
              if (a.toLowerCase() === l[u].toLowerCase()) {
                var c = o[l[u]];
                if (playerUtilityHelpers.domUtils.typeOf(c) === "Object") {
                  i.config = Object.assign({}, i.config, o[l[u]]);
                } else if (playerUtilityHelpers.domUtils.typeOf(c) === "Boolean") {
                  i.config.disable = !c;
                }
                break;
              }
            }
            if (t.defaultConfig) {
              Object.keys(t.defaultConfig).forEach(function (e) {
                if (i.config[e] === undefined) {
                  i.config[e] = t.defaultConfig[e];
                }
              });
            }
            if (i.root) {
              if (typeof i.root == "string") {
                i.root = e[i.root];
              }
            } else {
              i.root = e.root;
            }
            i.index = i.config.index || 0;
            try {
              if (r[a.toLowerCase()]) {
                this.unRegister(n, a.toLowerCase());
              }
              var h = new t(i);
              r[a.toLowerCase()] = h;
              r[a.toLowerCase()].func = t;
              if (h && typeof h.afterCreate == "function") {
                h.afterCreate();
              }
              return h;
            } catch (e) {
              throw e;
            }
          }
        }
      }
    },
    unRegister: function (e, t) {
      if (e._pluginInfoId) {
        e = e._pluginInfoId;
      }
      t = t.toLowerCase();
      try {
        var i = this.pluginGroup[e]._plugins[t];
        if (i) {
          if (i.pluginName) {
            i.__destroy();
          }
          delete this.pluginGroup[e]._plugins[t];
        }
      } catch (e) {}
    },
    deletePlugin: function (e, t) {
      var i = e._pluginInfoId;
      if (i && this.pluginGroup[i] && this.pluginGroup[i]._plugins) {
        delete this.pluginGroup[i]._plugins[t];
      }
    },
    getPlugins: function (e) {
      var t = e._pluginInfoId;
      if (t && this.pluginGroup[t]) {
        return this.pluginGroup[t]._plugins;
      } else {
        return {};
      }
    },
    findPlugin: function (e, t) {
      var i = e._pluginInfoId;
      if (!i || !this.pluginGroup[i]) {
        return null;
      }
      var n = t.toLowerCase();
      return this.pluginGroup[i]._plugins[n];
    },
    beforeInit: function (e) {
      var t = this;
      function i(e) {
        if (e && e.then) {
          return e;
        } else {
          return new Promise(function (e) {
            e();
          });
        }
      }
      return new Promise(function (n) {
        var r;
        if (t.pluginGroup) {
          return (e._loadingPlugins && e._loadingPlugins.length ? Promise.all(e._loadingPlugins) : Promise.resolve()).then(function () {
            var r = e._pluginInfoId;
            if (!t.pluginGroup[r]) {
              n();
              return;
            }
            var s = t.pluginGroup[r]._plugins;
            var o = [];
            Object.keys(s).forEach(function (e) {
              if (s[e] && s[e].beforePlayerInit) {
                try {
                  var t = s[e].beforePlayerInit();
                  o.push(i(t));
                } catch (e) {
                  o.push(i(null));
                  throw e;
                }
              }
            });
            Promise.all([].concat(o)).then(function () {
              n();
            }).catch(function (e) {
              n();
            });
          });
        }
      });
    },
    afterInit: function (e) {
      var t = e._pluginInfoId;
      if (t && this.pluginGroup[t]) {
        var i = this.pluginGroup[t]._plugins;
        Object.keys(i).forEach(function (e) {
          if (i[e] && i[e].afterPlayerInit) {
            i[e].afterPlayerInit();
          }
        });
      }
    },
    setLang: function (e, t) {
      var i = t._pluginInfoId;
      if (i && this.pluginGroup[i]) {
        var n = this.pluginGroup[i]._plugins;
        Object.keys(n).forEach(function (t) {
          if (n[t].updateLang) {
            n[t].updateLang(e);
          } else {
            try {
              n[t].lang = e;
            } catch (e) {}
          }
        });
      }
    },
    reRender: function (e) {
      var t = this;
      var i = e._pluginInfoId;
      if (i && this.pluginGroup[i]) {
        var n = [];
        var r = this.pluginGroup[i]._plugins;
        Object.keys(r).forEach(function (e) {
          if (e !== "controls" && r[e]) {
            n.push({
              plugin: r[e].func,
              options: r[e].__args
            });
            t.unRegister(i, e);
          }
        });
        n.forEach(function (i) {
          t.register(e, i.plugin, i.options);
        });
      }
    },
    onPluginsReady: function (e) {
      var t = e._pluginInfoId;
      if (t && this.pluginGroup[t]) {
        var i = this.pluginGroup[t]._plugins || {};
        Object.keys(i).forEach(function (e) {
          if (i[e].onPluginsReady && typeof i[e].onPluginsReady == "function") {
            i[e].onPluginsReady();
          }
        });
      }
    },
    setCurrentUserActive: function (e, t) {
      if (this.pluginGroup[e]) {
        if (!t) {
          this.pluginGroup[e]._player.isUserActive = t;
          return e;
        }
        var i = Object.keys(this.pluginGroup);
        var n = 0;
        for (; n < i.length; n++) {
          var r = this.pluginGroup[i[n]];
          if (r && r._player) {
            this.pluginGroup[i[n]]._player.isUserActive = false;
          }
        }
        this.pluginGroup[e]._player.isUserActive = t;
        return e;
      }
    },
    getCurrentUseActiveId: function () {
      if (this.pluginGroup) {
        var e = Object.keys(this.pluginGroup);
        var t = 0;
        for (; t < e.length; t++) {
          var i = this.pluginGroup[e[t]];
          if (i && i._player && i._player.isUserActive) {
            return e[t];
          }
        }
        return null;
      }
    },
    destroy: function (e) {
      var t;
      var i = e._pluginInfoId;
      if (this.pluginGroup[i]) {
        t = e.root;
        _.unObserver(t, undefined);
        var n = this.pluginGroup[i]._plugins;
        var r = 0;
        var s = Object.keys(n);
        for (; r < s.length; r++) {
          var o = s[r];
          this.unRegister(i, o);
        }
        var a = e.isUseActive;
        delete this.pluginGroup[i];
        delete e._pluginInfoId;
        if (a) {
          var l = Object.keys(this.pluginGroup);
          if (l.length > 0) {
            this.setCurrentUserActive(l[l.length - 1], true);
          }
        }
      }
    }
  };
  var xgplayerClassNames = require("xgplayer-class-names") /*id: 643317*/;
  function k() {
    return {
      id: "",
      el: null,
      url: "",
      domEventType: "default",
      nullUrlStart: false,
      width: 600,
      height: 337.5,
      fluid: false,
      fitVideoSize: "fixed",
      videoFillMode: "auto",
      volume: 0.6,
      autoplay: false,
      autoplayMuted: false,
      loop: false,
      isLive: false,
      zoom: 1,
      videoInit: true,
      poster: "",
      isMobileSimulateMode: false,
      defaultPlaybackRate: 1,
      execBeforePluginsCall: null,
      allowSeekAfterEnded: true,
      enableContextmenu: true,
      closeVideoClick: false,
      closeVideoDblclick: false,
      closePlayerBlur: false,
      closeDelayBlur: false,
      leavePlayerTime: 3000,
      closePlayVideoFocus: false,
      closePauseVideoFocus: false,
      closeFocusVideoFocus: true,
      closeControlsBlur: true,
      topBarAutoHide: true,
      videoAttributes: {},
      startTime: 0,
      seekedStatus: "play",
      miniprogress: false,
      disableSwipeHandler: function () {},
      enableSwipeHandler: function () {},
      ignores: [],
      whitelist: [],
      inactive: 3000,
      lang: playerUtilityHelpers.getLanguage(),
      controls: true,
      marginControls: false,
      fullscreenTarget: null,
      screenShot: false,
      rotate: false,
      pip: false,
      download: false,
      mini: false,
      cssFullscreen: true,
      keyShortcut: true,
      presets: [],
      plugins: [],
      playbackRate: 1,
      definition: {
        list: []
      },
      playsinline: true,
      customDuration: 0,
      timeOffset: 0,
      icons: {},
      i18n: [],
      tabindex: 0,
      thumbnail: null,
      videoConfig: {},
      isHideTips: false,
      minWaitDelay: 200,
      commonStyle: {
        progressColor: "",
        playedColor: "",
        cachedColor: "",
        sliderBtnStyle: {},
        volumeColor: ""
      }
    };
  }
  function C(e, t) {
    var i;
    var r;
    var s;
    var o = t.preset && t.options ? new t.preset(t.options, e.config) : new t({}, e.config);
    var a = o.plugins;
    var l = o.ignores;
    var u = o.icons;
    var c = u === undefined ? {} : u;
    var h = o.i18n;
    var d = h === undefined ? [] : h;
    e.config.plugins ||= [];
    e.config.ignores ||= [];
    (i = e.config.plugins).push.apply(i, babelRuntimeHelpers_1.toArray(a === undefined ? [] : a));
    (r = e.config.ignores).push.apply(r, babelRuntimeHelpers_1.toArray(l === undefined ? [] : l));
    Object.keys(c).map(function (t) {
      e.config.icons[t] ||= c[t];
    });
    var f = e.config.i18n || [];
    d.push.apply(d, babelRuntimeHelpers_1.toArray(f));
    e.config.i18n = d;
  }
  var pluginHooksManager = require("plugin-hooks-manager") /*id: 206040*/;
  var A = function (e) {
    babelRuntimeHelpers_1.inherits(i, e);
    var t = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      var e;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      var r = arguments.length;
      var s = Array(r);
      var o = 0;
      for (; o < r; o++) {
        s[o] = arguments[o];
      }
      e = t.call.apply(t, [this].concat(s));
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(e), "onMouseEnter", function (t) {
        var i = babelRuntimeHelpers_1.assertThisInit(e);
        var r = i.player;
        if (i.playerConfig.closeControlsBlur) {
          r.focus({
            autoHide: false
          });
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(e), "onMouseLeave", function () {
        babelRuntimeHelpers_1.assertThisInit(e).player.focus();
      });
      return e;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "beforeCreate",
      value: function (e) {
        if (!e.config.mode && environmentDetectorUtil.environmentUtils.device === "mobile") {
          e.config.mode = "flex";
        }
        if (e.player.config.marginControls) {
          e.config.autoHide = false;
        }
      }
    }, {
      key: "afterCreate",
      value: function () {
        var e = this;
        var t = this.config;
        var i = t.disable;
        var n = t.height;
        var r = t.mode;
        if (!i) {
          if (r === "flex") {
            this.player.addClass(xgplayerClassNames.playerClasses.FLEX_CONTROLS);
          }
          var a = {
            height: `${n}px`
          };
          Object.keys(a).map(function (t) {
            e.root.style[t] = a[t];
          });
          this.left = this.find("xg-left-grid");
          this.center = this.find("xg-center-grid");
          this.right = this.find("xg-right-grid");
          this.innerRoot = this.find("xg-inner-controls");
          this.on(videoPlayerEventConstants.MINI_STATE_CHANGE, function (t) {
            if (t) {
              playerUtilityHelpers.domUtils.addClass(e.root, "mini-controls");
            } else {
              playerUtilityHelpers.domUtils.removeClass(e.root, "mini-controls");
            }
          });
          var u = this.playerConfig.isMobileSimulateMode;
          if (environmentDetectorUtil.environmentUtils.device !== "mobile" && u !== "mobile") {
            this.bind("mouseenter", this.onMouseEnter);
            this.bind("mouseleave", this.onMouseLeave);
          }
        }
      }
    }, {
      key: "focus",
      value: function () {
        this.player.focus({
          autoHide: false
        });
      }
    }, {
      key: "focusAwhile",
      value: function () {
        this.player.focus({
          autoHide: true
        });
      }
    }, {
      key: "blur",
      value: function () {
        this.player.blur({
          ignorePaused: true
        });
      }
    }, {
      key: "recoverAutoHide",
      value: function () {
        if (this.config.autoHide) {
          playerUtilityHelpers.domUtils.addClass(this.root, xgplayerClassNames.playerClasses.CONTROLS_AUTOHIDE);
        }
      }
    }, {
      key: "pauseAutoHide",
      value: function () {
        playerUtilityHelpers.domUtils.removeClass(this.root, xgplayerClassNames.playerClasses.CONTROLS_AUTOHIDE);
      }
    }, {
      key: "show",
      value: function () {
        playerUtilityHelpers.domUtils.addClass(this.root, "show");
      }
    }, {
      key: "hide",
      value: function () {
        playerUtilityHelpers.domUtils.removeClass(this.root, "show");
      }
    }, {
      key: "mode",
      get: function () {
        return this.config.mode;
      }
    }, {
      key: "registerPlugin",
      value: function (e, t = {}, r) {
        if (this.root) {
          var s = e.defaultConfig || {};
          if (!t.root) {
            switch (t.position ? t.position : t.config && t.config.position ? t.config.position : s.position) {
              case playerUiPluginBase.playerPositions.CONTROLS_LEFT:
                t.root = this.left;
                break;
              case playerUiPluginBase.playerPositions.CONTROLS_RIGHT:
                t.root = this.right;
                break;
              case playerUiPluginBase.playerPositions.CONTROLS_CENTER:
                t.root = this.center;
                break;
              case playerUiPluginBase.playerPositions.CONTROLS:
                t.root = this.root;
                break;
              default:
                t.root = this.left;
            }
            return babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "registerPlugin", this).call(this, e, t, r);
          }
        }
      }
    }, {
      key: "destroy",
      value: function () {
        if (environmentDetectorUtil.environmentUtils.device !== "mobile") {
          this.unbind("mouseenter", this.onMouseEnter);
          this.unbind("mouseleave", this.onMouseLeave);
        }
      }
    }, {
      key: "render",
      value: function () {
        var e = this.config;
        var t = e.mode;
        var i = e.autoHide;
        var r = e.initShow;
        if (!e.disable) {
          var o = playerUtilityHelpers.domUtils.classNames({
            "xgplayer-controls": true
          }, {
            "flex-controls": t === "flex"
          }, {
            "bottom-controls": t === "bottom"
          }, babelRuntimeHelpers_1.defineProperty({}, xgplayerClassNames.playerClasses.CONTROLS_AUTOHIDE, i), {
            "xgplayer-controls-initshow": r || !i
          });
          return `<xg-controls class="${o}" unselectable="on">
    <xg-inner-controls class="xg-inner-controls xg-pos">
      <xg-left-grid class="xg-left-grid">
      </xg-left-grid>
      <xg-center-grid class="xg-center-grid"></xg-center-grid>
      <xg-right-grid class="xg-right-grid">
      </xg-right-grid>
    </xg-inner-controls>
    </xg-controls>`;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "controls";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          disable: false,
          autoHide: true,
          mode: "",
          initShow: false
        };
      }
    }]);
    return i;
  }(playerUiPluginBase.PlayerUiPlugin);
  var xgplayerLogger = require("xgplayer-logger") /*id: 587555*/;
  var playerI18nManager = require("player-i18n-manager") /*id: 834464*/;
  var appVersionConstant = require("app-version-constant") /*id: 244951*/;
  var audioPlayStateConstants = require("audio-play-state-constants") /*id: 820236*/;
  var O = ["play", "pause", "replay", "retry"];
  var L = 0;
  var I = 0;
  var Z = function (e) {
    babelRuntimeHelpers_1.inherits(i, e);
    var t = babelRuntimeHelpers_1.constructHelper(i);
    function i(e) {
      babelRuntimeHelpers_1.classCallCheck(this, i);
      var r;
      var a = playerUtilityHelpers.domUtils.deepMerge(k(), e);
      r = t.call(this, a);
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(r), "canPlayFunc", function () {
        if (r.config) {
          var e = r.config;
          var t = e.autoplay;
          var i = e.startTime;
          var n = e.defaultPlaybackRate;
          xgplayerLogger.logger.logInfo("player", "canPlayFunc, startTime", i);
          if (i) {
            r.currentTime = i > r.duration ? r.duration : i;
            r.config.startTime = 0;
          }
          r.playbackRate = n;
          if (t || r._useAutoplay) {
            r.mediaPlay();
          }
          r.off(videoPlayerEventConstants.CANPLAY, r.canPlayFunc);
          r.removeClass(xgplayerClassNames.playerClasses.ENTER);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(r), "onFullscreenChange", function (e, t) {
        function i() {
          playerUtilityHelpers.domUtils.setTimeout(babelRuntimeHelpers_1.assertThisInit(r), function () {
            r.resize();
          }, 100);
        }
        var o = playerUtilityHelpers.domUtils.getFullScreenEl();
        if (r._fullActionFrom) {
          r._fullActionFrom = "";
        } else {
          r.emit(videoPlayerEventConstants.USER_ACTION, {
            eventType: "system",
            action: "switch_fullscreen",
            pluginName: "player",
            currentTime: r.currentTime,
            duration: r.duration,
            props: [{
              prop: "fullscreen",
              from: true,
              to: false
            }]
          });
        }
        var a = playerUtilityHelpers.isMediaElement(o, r.playerId, p);
        if (t || o && (o === r._fullscreenEl || a)) {
          i();
          if (!r.config.closeFocusVideoFocus) {
            r.media.focus();
          }
          r.fullscreen = true;
          r.changeFullStyle(r.root, o, xgplayerClassNames.playerClasses.FULLSCREEN);
          r.emit(videoPlayerEventConstants.FULLSCREEN_CHANGE, true, r._fullScreenOffset);
          if (r.cssfullscreen) {
            r.exitCssFullscreen();
          }
        } else if (r.fullscreen) {
          i();
          var u = babelRuntimeHelpers_1.assertThisInit(r);
          var c = u._fullScreenOffset;
          if (u.config.needFullscreenScroll) {
            window.scrollTo(c.left, c.top);
            playerUtilityHelpers.domUtils.setTimeout(babelRuntimeHelpers_1.assertThisInit(r), function () {
              r.fullscreen = false;
              r._fullScreenOffset = null;
            }, 100);
          } else {
            if (!r.config.closeFocusVideoFocus) {
              r.media.focus();
            }
            r.fullscreen = false;
            r._fullScreenOffset = null;
          }
          if (r.cssfullscreen) {
            r.removeClass(xgplayerClassNames.playerClasses.FULLSCREEN);
          } else {
            r.recoverFullStyle(r.root, r._fullscreenEl, xgplayerClassNames.playerClasses.FULLSCREEN);
          }
          r._fullscreenEl = null;
          r.emit(videoPlayerEventConstants.FULLSCREEN_CHANGE, false);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(r), "_onWebkitbeginfullscreen", function (e) {
        r._fullscreenEl = r.media;
        r.onFullscreenChange(e, true);
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(r), "_onWebkitendfullscreen", function (e) {
        r.onFullscreenChange(e, false);
      });
      pluginHooksManager.initHooks(babelRuntimeHelpers_1.assertThisInit(r), O);
      r.config = a;
      r._pluginInfoId = playerUtilityHelpers.domUtils.generateSessionId();
      xgplayerLogger.installLogger(babelRuntimeHelpers_1.assertThisInit(r));
      var u = r.constructor.defaultPreset;
      if (r.config.presets.length) {
        var c = r.config.presets.indexOf("default");
        if (c >= 0 && u) {
          r.config.presets[c] = u;
        }
      } else if (u) {
        r.config.presets.push(u);
      }
      r.userTimer = null;
      r.waitTimer = null;
      r._state = audioPlayStateConstants.PlayStateMap.INITIAL;
      r.isError = false;
      r._hasStart = false;
      r.isSeeking = false;
      r.isCanplay = false;
      r._useAutoplay = false;
      r.rotateDeg = 0;
      r.isActive = false;
      r.fullscreen = false;
      r.cssfullscreen = false;
      r.isRotateFullscreen = false;
      r._fullscreenEl = null;
      r._cssfullscreenEl = null;
      r.curDefinition = null;
      r._orgCss = "";
      r._fullScreenOffset = null;
      r._videoHeight = 0;
      r._videoWidth = 0;
      r.videoPos = {
        pi: 1,
        scale: 0,
        rotate: 0,
        x: 0,
        y: 0,
        h: -1,
        w: -1,
        vy: 0,
        vx: 0
      };
      r._accPlayed = {
        t: 0,
        acc: 0,
        loopAcc: 0
      };
      r.innerContainer = null;
      r.controls = null;
      r.topBar = null;
      r.root = null;
      r.__i18n = playerI18nManager.playerLangManager.init(r._pluginInfoId);
      if (environmentDetectorUtil.environmentUtils.os.isAndroid && environmentDetectorUtil.environmentUtils.osVersion > 0 && environmentDetectorUtil.environmentUtils.osVersion < 6) {
        r.config.autoplay = false;
      }
      r.database = new h();
      r.isUserActive = false;
      r._onceSeekCanplay = null;
      r._isPauseBeforeSeek = 0;
      if (!r._initDOM()) {
        return babelRuntimeHelpers_1.constructorReturn(r);
      }
      var d = r.config;
      var f = d.definition;
      var g = f === undefined ? {} : f;
      if (!d.url && g.list && g.list.length > 0) {
        var y = g.list.find(function (e) {
          return e.definition && e.definition === g.defaultDefinition;
        });
        if (!y) {
          g.defaultDefinition = g.list[0].definition;
          y = g.list[0];
        }
        r.config.url = y.url;
        r.curDefinition = y;
      }
      r._bindEvents();
      r._registerPresets();
      r._registerPlugins();
      E.onPluginsReady(babelRuntimeHelpers_1.assertThisInit(r));
      r.getInitDefinition();
      r.setState(audioPlayStateConstants.PlayStateMap.READY);
      playerUtilityHelpers.domUtils.setTimeout(babelRuntimeHelpers_1.assertThisInit(r), function () {
        r.emit(videoPlayerEventConstants.READY);
      }, 0);
      if (r.onReady) {
        r.onReady();
      }
      if ((r.config.videoInit || r.config.autoplay) && (!r.hasStart || r.state < audioPlayStateConstants.PlayStateMap.ATTACHED)) {
        r.start();
      }
      return r;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "_initDOM",
      value: function () {
        var e = this;
        this.root = this.config.id ? document.getElementById(this.config.id) : null;
        if (!this.root) {
          var t = this.config.el;
          if (!t || t.nodeType !== 1) {
            this.emit(videoPlayerEventConstants.ERROR, new playerErrorHandler.MediaErrorClass("use", this.config.vid, {
              line: 32,
              handle: "Constructor",
              msg: "container id can't be empty"
            }));
            return false;
          }
          this.root = t;
        }
        var i = E.checkPlayerRoot(this.root);
        if (i) {
          xgplayerLogger.logger.logWarn("The is an Player instance already exists in this.root, destroy it and reinitialize");
          i.destroy();
        }
        this.root.setAttribute(p, this.playerId);
        E.init(this);
        this._initBaseDoms();
        var n = this.constructor.XgVideoProxy;
        if (n && this.mediaConfig.mediaType === n.mediaType) {
          var r = this.innerContainer || this.root;
          this.detachVideoEvents(this.media);
          var s = new n(r, this.config, this.mediaConfig);
          this.attachVideoEvents(s);
          this.media = s;
        }
        this.media.setAttribute(p, this.playerId);
        if (this.config.controls) {
          var u = this.config.controls.root || null;
          var c = E.register(this, A, {
            root: u
          });
          this.controls = c;
        }
        var h = this.config.isMobileSimulateMode === "mobile" ? "mobile" : environmentDetectorUtil.environmentUtils.device;
        this.addClass(`${xgplayerClassNames.playerClasses.DEFAULT} ${xgplayerClassNames.playerClasses.INACTIVE} xgplayer-${h} ${this.config.controls ? "" : xgplayerClassNames.playerClasses.NO_CONTROLS}`);
        if (this.config.autoplay) {
          this.addClass(xgplayerClassNames.playerClasses.ENTER);
        } else {
          this.addClass(xgplayerClassNames.playerClasses.NO_START);
        }
        if (this.config.fluid) {
          var d = this.config;
          var f = d.width;
          var g = d.height;
          if (typeof f != "number" || typeof g != "number") {
            f = 600;
            g = 337.5;
          }
          var y = {
            width: "100%",
            height: "0",
            "max-width": "100%",
            "padding-top": `${g * 100 / f}%`
          };
          Object.keys(y).forEach(function (t) {
            e.root.style[t] = y[t];
          });
        } else {
          ["width", "height"].forEach(function (t) {
            if (e.config[t]) {
              if (typeof e.config[t] != "number") {
                e.root.style[t] = e.config[t];
              } else {
                e.root.style[t] = `${e.config[t]}px`;
              }
            }
          });
        }
        return true;
      }
    }, {
      key: "_initBaseDoms",
      value: function () {
        this.topBar = null;
        this.leftBar = null;
        this.rightBar = null;
        if (this.config.marginControls) {
          this.innerContainer = playerUtilityHelpers.domUtils.createDom("xg-video-container", "", {
            "data-index": -1
          }, "xg-video-container");
          this.root.appendChild(this.innerContainer);
        }
      }
    }, {
      key: "_bindEvents",
      value: function () {
        var e = this;
        ["focus", "blur"].forEach(function (t) {
          e.on(t, e["on" + t.charAt(0).toUpperCase() + t.slice(1)]);
        });
        d.forEach(function (t) {
          if (document) {
            document.addEventListener(t, e.onFullscreenChange);
          }
        });
        if (environmentDetectorUtil.environmentUtils.os.isIos) {
          this.media.addEventListener("webkitbeginfullscreen", this._onWebkitbeginfullscreen);
          this.media.addEventListener("webkitendfullscreen", this._onWebkitendfullscreen);
        }
        this.once(videoPlayerEventConstants.LOADED_DATA, this.resize);
        this.playFunc = function () {
          if (!e.config.closeFocusVideoFocus) {
            e.media.focus();
          }
        };
        this.once(videoPlayerEventConstants.PLAY, this.playFunc);
      }
    }, {
      key: "_unbindEvents",
      value: function () {
        var e = this;
        this.root.removeEventListener("mousemove", this.mousemoveFunc);
        d.forEach(function (t) {
          document.removeEventListener(t, e.onFullscreenChange);
        });
        if (this.playFunc) {
          this.off(videoPlayerEventConstants.PLAY, this.playFunc);
        }
        this.off(videoPlayerEventConstants.CANPLAY, this.canPlayFunc);
        this.media.removeEventListener("webkitbeginfullscreen", this._onWebkitbeginfullscreen);
        this.media.removeEventListener("webkitendfullscreen", this._onWebkitendfullscreen);
      }
    }, {
      key: "_startInit",
      value: function (e) {
        var t = this;
        if (this.media && (e && e !== "" && (playerUtilityHelpers.domUtils.typeOf(e) !== "Array" || e.length !== 0) || (e = "", this.emit(videoPlayerEventConstants.URL_NULL), xgplayerLogger.logger.logWarn("config.url is null, please get url and run player._startInit(url)"), !this.config.nullUrlStart))) {
          this._detachSourceEvents(this.media);
          if (playerUtilityHelpers.domUtils.typeOf(e) === "Array" && e.length > 0) {
            this._attachSourceEvents(this.media, e);
          } else if (this.media.src && this.media.src === e) {
            if (!e) {
              this.media.removeAttribute("src");
            }
          } else {
            this.media.src = e;
          }
          if (playerUtilityHelpers.domUtils.typeOf(this.config.volume) === "Number") {
            this.volume = this.config.volume;
          }
          var i = this.innerContainer ? this.innerContainer : this.root;
          if (this.media instanceof window.Element && !i.contains(this.media)) {
            i.insertBefore(this.media, i.firstChild);
          }
          var n = this.media.readyState;
          xgplayerLogger.logger.logInfo("_startInit readyState", n);
          if (this.config.autoplay) {
            if (!/^blob/.test(this.media.currentSrc) && !/^blob/.test(this.media.src)) {
              this.load();
            }
            if (environmentDetectorUtil.environmentUtils.os.isIpad || environmentDetectorUtil.environmentUtils.os.isPhone) {
              this.mediaPlay();
            }
          }
          if (n >= 2) {
            this.canPlayFunc();
          } else {
            this.once(videoPlayerEventConstants.CANPLAY, this.canPlayFunc);
          }
          if (!this.hasStart || this.state < audioPlayStateConstants.PlayStateMap.ATTACHED) {
            E.afterInit(this);
          }
          this.hasStart = true;
          this.setState(audioPlayStateConstants.PlayStateMap.ATTACHED);
          playerUtilityHelpers.domUtils.setTimeout(this, function () {
            t.emit(videoPlayerEventConstants.COMPLETE);
          }, 0);
        }
      }
    }, {
      key: "_registerPlugins",
      value: function () {
        var e = this;
        var t = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        this._loadingPlugins = [];
        var i = this.config.ignores || [];
        var n = this.config.plugins || [];
        var r = this.config.i18n || [];
        if (t) {
          playerI18nManager.playerLangManager.extend(r, this.__i18n);
        }
        var s = i.join("||").toLowerCase().split("||");
        var o = this.plugins;
        n.forEach(function (i) {
          try {
            var n = i.plugin ? i.plugin.pluginName : i.pluginName;
            if (n && s.indexOf(n.toLowerCase()) > -1) {
              return null;
            }
            if (!t && o[n.toLowerCase()]) {
              return;
            }
            if (i.lazy && i.loader) {
              var r = E.lazyRegister(e, i);
              if (i.forceBeforeInit) {
                r.then(function () {
                  e._loadingPlugins.splice(e._loadingPlugins.indexOf(r), 1);
                }).catch(function (t) {
                  xgplayerLogger.logger.logError("_registerPlugins:loadingPlugin", t);
                  e._loadingPlugins.splice(e._loadingPlugins.indexOf(r), 1);
                });
                e._loadingPlugins.push(r);
              }
              return;
            }
            return e.registerPlugin(i);
          } catch (e) {
            xgplayerLogger.logger.logError("_registerPlugins:", e);
          }
        });
      }
    }, {
      key: "_registerPresets",
      value: function () {
        var e = this;
        this.config.presets.forEach(function (t) {
          C(e, t);
        });
      }
    }, {
      key: "_getRootByPosition",
      value: function (e) {
        var t = null;
        switch (e) {
          case playerUiPluginBase.playerPositions.ROOT_RIGHT:
            this.rightBar ||= playerUtilityHelpers.domUtils.createPositionBar("xg-right-bar", this.root);
            t = this.rightBar;
            break;
          case playerUiPluginBase.playerPositions.ROOT_LEFT:
            this.leftBar ||= playerUtilityHelpers.domUtils.createPositionBar("xg-left-bar", this.root);
            t = this.leftBar;
            break;
          case playerUiPluginBase.playerPositions.ROOT_TOP:
            if (!this.topBar) {
              this.topBar = playerUtilityHelpers.domUtils.createPositionBar("xg-top-bar", this.root);
              if (this.config.topBarAutoHide) {
                playerUtilityHelpers.domUtils.addClass(this.topBar, xgplayerClassNames.playerClasses.TOP_BAR_AUTOHIDE);
              }
            }
            t = this.topBar;
            break;
          default:
            t = this.innerContainer || this.root;
        }
        return t;
      }
    }, {
      key: "registerPlugin",
      value: function (e, t) {
        var i = E.formatPluginInfo(e, t);
        var n = i.PLUFGIN;
        var r = i.options;
        var s = this.config.plugins;
        if (!E.checkPluginIfExits(n.pluginName, s)) {
          s.push(n);
        }
        var o = E.getRootByConfig(n.pluginName, this.config);
        if (o.root) {
          r.root = o.root;
        }
        if (o.position) {
          r.position = o.position;
        }
        var a = r.position ? r.position : r.config && r.config.position || n.defaultConfig && n.defaultConfig.position;
        if (!r.root && typeof a == "string" && a.indexOf("controls") > -1) {
          return this.controls && this.controls.registerPlugin(n, r, n.pluginName);
        } else {
          r.root ||= this._getRootByPosition(a);
          return E.register(this, n, r);
        }
      }
    }, {
      key: "deregister",
      value: function (e) {
        if (typeof e == "string") {
          E.unRegister(this, e);
        } else if (e instanceof playerPluginBaseClass.PluginBase) {
          E.unRegister(this, e.pluginName);
        }
      }
    }, {
      key: "unRegisterPlugin",
      value: function (e, t = false) {
        this.deregister(e);
        if (t) {
          this.removePluginFromConfig(e);
        }
      }
    }, {
      key: "removePluginFromConfig",
      value: function (e) {
        var t;
        if (typeof e == "string") {
          t = e;
        } else if (e instanceof playerPluginBaseClass.PluginBase) {
          t = e.pluginName;
        }
        if (t) {
          for (var i = this.config.plugins.length - 1; i > -1; i--) {
            if (this.config.plugins[i].pluginName.toLowerCase() === t.toLowerCase()) {
              this.config.plugins.splice(i, 1);
              break;
            }
          }
        }
      }
    }, {
      key: "plugins",
      get: function () {
        return E.getPlugins(this);
      }
    }, {
      key: "getPlugin",
      value: function (e) {
        var t = E.findPlugin(this, e);
        if (t && t.pluginName) {
          return t;
        } else {
          return null;
        }
      }
    }, {
      key: "addClass",
      value: function (e) {
        if (this.root) {
          if (!playerUtilityHelpers.domUtils.hasClass(this.root, e)) {
            playerUtilityHelpers.domUtils.addClass(this.root, e);
          }
        }
      }
    }, {
      key: "removeClass",
      value: function (e) {
        if (this.root) {
          playerUtilityHelpers.domUtils.removeClass(this.root, e);
        }
      }
    }, {
      key: "hasClass",
      value: function (e) {
        if (this.root) {
          return playerUtilityHelpers.domUtils.hasClass(this.root, e);
        }
      }
    }, {
      key: "setAttribute",
      value: function (e, t) {
        if (this.root) {
          this.root.setAttribute(e, t);
        }
      }
    }, {
      key: "removeAttribute",
      value: function (e, t) {
        if (this.root) {
          this.root.removeAttribute(e, t);
        }
      }
    }, {
      key: "start",
      value: function (e) {
        var t = this;
        if (!(this.state > audioPlayStateConstants.PlayStateMap.ATTACHING)) {
          if (!e && !this.config.url) {
            this.getInitDefinition();
          }
          this.hasStart = true;
          this.setState(audioPlayStateConstants.PlayStateMap.ATTACHING);
          this._registerPlugins(false);
          return E.beforeInit(this).then(function () {
            if (t.config) {
              e ||= t.url || t.config.url;
              return t._startInit(e);
            }
          }).catch(function (e) {
            e.fileName = "player";
            e.lineNumber = "236";
            xgplayerLogger.logger.logError("start:beforeInit:", e);
            throw e;
          });
        }
      }
    }, {
      key: "switchURL",
      value: function (e, t) {
        var i = this;
        var n = e;
        if (playerUtilityHelpers.domUtils.typeOf(e) === "Object") {
          n = e.url;
        }
        var r = this.currentTime;
        var a = this.paused && !this.isError;
        this.src = n;
        return new Promise(function (e, t) {
          function s(e) {
            i.off("timeupdate", l);
            i.off("canplay", l);
            t(e);
          }
          function l() {
            i.currentTime = r;
            if (a) {
              i.pause();
            }
            i.off("error", s);
            e(true);
          }
          i.once("error", s);
          if (!n) {
            i.errorHandler("error", {
              code: 6,
              message: "empty_src"
            });
            return;
          }
          if (environmentDetectorUtil.environmentUtils.os.isAndroid) {
            i.once("timeupdate", l);
          } else {
            i.once("canplay", l);
          }
          i.play();
        });
      }
    }, {
      key: "videoPlay",
      value: function () {
        this.mediaPlay();
      }
    }, {
      key: "mediaPlay",
      value: function () {
        var e = this;
        if (!this.hasStart && this.state < audioPlayStateConstants.PlayStateMap.ATTACHED) {
          this.removeClass(xgplayerClassNames.playerClasses.NO_START);
          this.addClass(xgplayerClassNames.playerClasses.ENTER);
          this.start();
          this._useAutoplay = true;
          return;
        }
        if (this.state < audioPlayStateConstants.PlayStateMap.RUNNING) {
          this.removeClass(xgplayerClassNames.playerClasses.NO_START);
          if (!this.isCanplay) {
            this.addClass(xgplayerClassNames.playerClasses.ENTER);
          }
        }
        var t = babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "play", this).call(this);
        if (t !== undefined && t && t.then) {
          t.then(function () {
            e.removeClass(xgplayerClassNames.playerClasses.NOT_ALLOW_AUTOPLAY);
            e.addClass(xgplayerClassNames.playerClasses.PLAYING);
            if (e.state < audioPlayStateConstants.PlayStateMap.RUNNING) {
              xgplayerLogger.logger.logInfo(">>>>playPromise.then");
              e.setState(audioPlayStateConstants.PlayStateMap.RUNNING);
              e.emit(videoPlayerEventConstants.AUTOPLAY_STARTED);
            }
          }).catch(function (t) {
            xgplayerLogger.logger.logWarn(">>>>playPromise.catch", t.name);
            if (e.media && e.media.error) {
              e.onError();
              e.removeClass(xgplayerClassNames.playerClasses.ENTER);
              return;
            }
            if (t.name === "NotAllowedError") {
              e._errorTimer = playerUtilityHelpers.domUtils.setTimeout(e, function () {
                e._errorTimer = null;
                e.emit(videoPlayerEventConstants.AUTOPLAY_PREVENTED);
                e.addClass(xgplayerClassNames.playerClasses.NOT_ALLOW_AUTOPLAY);
                e.removeClass(xgplayerClassNames.playerClasses.ENTER);
                e.pause();
                e.setState(audioPlayStateConstants.PlayStateMap.NOTALLOW);
              }, 0);
            }
          });
        } else {
          xgplayerLogger.logger.logWarn("video.play not return promise");
          if (this.state < audioPlayStateConstants.PlayStateMap.RUNNING) {
            this.setState(audioPlayStateConstants.PlayStateMap.RUNNING);
            this.removeClass(xgplayerClassNames.playerClasses.NOT_ALLOW_AUTOPLAY);
            this.removeClass(xgplayerClassNames.playerClasses.NO_START);
            this.removeClass(xgplayerClassNames.playerClasses.ENTER);
            this.addClass(xgplayerClassNames.playerClasses.PLAYING);
            this.emit(videoPlayerEventConstants.AUTOPLAY_STARTED);
          }
        }
        return t;
      }
    }, {
      key: "mediaPause",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "pause", this).call(this);
      }
    }, {
      key: "videoPause",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "pause", this).call(this);
      }
    }, {
      key: "play",
      value: function () {
        var e = this;
        this.removeClass(xgplayerClassNames.playerClasses.PAUSED);
        return pluginHooksManager.runHooks(this, "play", function () {
          return e.mediaPlay();
        });
      }
    }, {
      key: "pause",
      value: function () {
        var e = this;
        pluginHooksManager.runHooks(this, "pause", function () {
          babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "pause", e).call(e);
        });
      }
    }, {
      key: "seek",
      value: function (e, t) {
        var i = this;
        if (!!this.media && !Number.isNaN(Number(e)) && this.hasStart) {
          var n = this.config;
          var r = n.isSeekedPlay;
          var s = n.seekedStatus;
          var o = t || (r ? "play" : s);
          e = e < 0 ? 0 : e > this.duration ? parseInt(this.duration, 10) : e;
          this._isPauseBeforeSeek ||= this.paused ? 2 : 1;
          if (this._onceSeekCanplay) {
            this.off(videoPlayerEventConstants.SEEKED, this._onceSeekCanplay);
          }
          this._onceSeekCanplay = function () {
            i.removeClass(xgplayerClassNames.playerClasses.ENTER);
            i.isSeeking = false;
            switch (o) {
              case "play":
                i.play();
                break;
              case "pause":
                i.pause();
                break;
              default:
                if (i._isPauseBeforeSeek > 1 || i.paused) {
                  i.pause();
                } else {
                  i.play();
                }
            }
            i._isPauseBeforeSeek = 0;
            i._onceSeekCanplay = null;
          };
          this.once(videoPlayerEventConstants.SEEKED, this._onceSeekCanplay);
          if (this.state < audioPlayStateConstants.PlayStateMap.RUNNING) {
            this.removeClass(xgplayerClassNames.playerClasses.NO_START);
            this.currentTime = e;
            this.play();
          } else {
            this.currentTime = e;
          }
        }
      }
    }, {
      key: "getInitDefinition",
      value: function () {
        var e = this;
        var t = this.config;
        var i = t.definition;
        if (!t.url && i && i.list && i.list.length > 0 && i.defaultDefinition) {
          i.list.map(function (t) {
            if (t.definition === i.defaultDefinition) {
              e.config.url = t.url;
              e.curDefinition = t;
            }
          });
        }
      }
    }, {
      key: "changeDefinition",
      value: function (e, t) {
        var i = this;
        var r = this.config.definition;
        if (Array.isArray(r == null ? undefined : r.list)) {
          r.list.forEach(function (t) {
            if ((e == null ? undefined : e.definition) === t.definition) {
              i.curDefinition = t;
            }
          });
        }
        if (e != null && e.bitrate && typeof e.bitrate != "number") {
          e.bitrate = parseInt(e.bitrate, 10) || 0;
        }
        this.emit(videoPlayerEventConstants.DEFINITION_CHANGE, {
          from: t,
          to: e
        });
        if (!this.hasStart) {
          this.config.url = e.url;
          return;
        }
        var s = this.switchURL(e.url, babelRuntimeHelpers_1.objectSpread({
          seamless: r.seamless !== false && typeof MediaSource != "undefined" && typeof MediaSource.isTypeSupported == "function"
        }, e));
        if (s && s.then) {
          s.then(function () {
            i.emit(videoPlayerEventConstants.AFTER_DEFINITION_CHANGE, {
              from: t,
              to: e
            });
          });
        } else {
          this.emit(videoPlayerEventConstants.AFTER_DEFINITION_CHANGE, {
            from: t,
            to: e
          });
        }
      }
    }, {
      key: "reload",
      value: function () {
        this.load();
        this.reloadFunc = function () {
          this.play();
        };
        this.once(videoPlayerEventConstants.LOADED_DATA, this.reloadFunc);
      }
    }, {
      key: "resetState",
      value: function () {
        var e = this;
        var t = xgplayerClassNames.playerClasses.NOT_ALLOW_AUTOPLAY;
        var i = xgplayerClassNames.playerClasses.PLAYING;
        var n = xgplayerClassNames.playerClasses.NO_START;
        var r = xgplayerClassNames.playerClasses.PAUSED;
        var s = xgplayerClassNames.playerClasses.REPLAY;
        var o = xgplayerClassNames.playerClasses.ENTER;
        var a = xgplayerClassNames.playerClasses.ENDED;
        var u = xgplayerClassNames.playerClasses.ERROR;
        var c = xgplayerClassNames.playerClasses.LOADING;
        this.hasStart = false;
        this.isError = false;
        this._useAutoplay = false;
        this.mediaPause();
        this._accPlayed.acc = 0;
        this._accPlayed.t = 0;
        this._accPlayed.loopAcc = 0;
        [t, i, n, r, s, o, a, u, c].forEach(function (t) {
          e.removeClass(t);
        });
        this.addClass(xgplayerClassNames.playerClasses.ENTER);
        this.emit(videoPlayerEventConstants.RESET);
      }
    }, {
      key: "reset",
      value: function () {
        var e = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var i = arguments.length > 1 ? arguments[1] : undefined;
        this.resetState();
        if (this.plugins && (t.map(function (t) {
          e.deregister(t);
        }), i)) {
          var n = k();
          Object.keys(this.config).keys(function (t) {
            if (e.config[t] !== "undefined" && (t === "plugins" || t === "presets" || t === "el" || t === "id")) {
              e.config[t] = n[t];
            }
          });
        }
      }
    }, {
      key: "destroy",
      value: function () {
        var e = this;
        var t = this.innerContainer;
        var r = this.root;
        var o = this.media;
        if (r && o) {
          this.hasStart = false;
          this._useAutoplay = false;
          r.removeAttribute(p);
          this.updateAcc("destroy");
          this._unbindEvents();
          this._detachSourceEvents(this.media);
          playerUtilityHelpers.domUtils.clearAllTimers(this);
          this.emit(videoPlayerEventConstants.DESTROY);
          E.destroy(this);
          pluginHooksManager.clearHooks(this);
          babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "destroy", this).call(this);
          if (this.fullscreen && this._fullscreenEl === this.root) {
            this.exitFullscreen();
          }
          if (t) {
            var a = t.children;
            var u = 0;
            for (; u < a.length; u++) {
              t.removeChild(a[u]);
            }
          }
          if (!t && o instanceof window.Node && r.contains(o)) {
            r.removeChild(o);
          }
          ["topBar", "leftBar", "rightBar", "innerContainer"].map(function (t) {
            if (e[t]) {
              r.removeChild(e[t]);
            }
            e[t] = null;
          });
          var c = r.className.split(" ");
          if (c.length > 0) {
            r.className = c.filter(function (e) {
              return e.indexOf("xgplayer") < 0;
            }).join(" ");
          } else {
            r.className = "";
          }
          this.removeAttribute("data-xgfill");
          ["isSeeking", "isCanplay", "isActive", "cssfullscreen", "fullscreen"].forEach(function (t) {
            e[t] = false;
          });
        }
      }
    }, {
      key: "replay",
      value: function () {
        var e = this;
        this.removeClass(xgplayerClassNames.playerClasses.ENDED);
        this.currentTime = 0;
        this.isSeeking = false;
        pluginHooksManager.runHooks(this, "replay", function () {
          e.once(videoPlayerEventConstants.SEEKED, function () {
            var t = e.mediaPlay();
            if (t && t.catch) {
              t.catch(function (e) {});
            }
          });
          e.play();
          e.emit(videoPlayerEventConstants.REPLAY);
          e.onPlay();
        });
      }
    }, {
      key: "retry",
      value: function () {
        var e = this;
        this.removeClass(xgplayerClassNames.playerClasses.ERROR);
        this.addClass(xgplayerClassNames.playerClasses.LOADING);
        pluginHooksManager.runHooks(this, "retry", function () {
          var t = e.currentTime;
          e.src = e.config.url;
          if (!e.config.isLive) {
            e.currentTime = t;
          }
          e.once(videoPlayerEventConstants.CANPLAY, function () {
            e.mediaPlay();
          });
        });
      }
    }, {
      key: "changeFullStyle",
      value: function (e, t, i, n) {
        if (e) {
          n ||= xgplayerClassNames.playerClasses.PARENT_FULLSCREEN;
          this._orgCss ||= playerUtilityHelpers.domUtils.filterStyleFromText(e);
          playerUtilityHelpers.domUtils.addClass(e, i);
          if (t && t !== e && !this._orgPCss) {
            this._orgPCss = playerUtilityHelpers.domUtils.filterStyleFromText(t);
            playerUtilityHelpers.domUtils.addClass(t, n);
            t.setAttribute(p, this.playerId);
          }
        }
      }
    }, {
      key: "recoverFullStyle",
      value: function (e, t, i, n) {
        n ||= xgplayerClassNames.playerClasses.PARENT_FULLSCREEN;
        if (this._orgCss) {
          playerUtilityHelpers.domUtils.setStyleFromCsstext(e, this._orgCss);
          this._orgCss = "";
        }
        playerUtilityHelpers.domUtils.removeClass(e, i);
        if (t && t !== e && this._orgPCss) {
          playerUtilityHelpers.domUtils.setStyleFromCsstext(t, this._orgPCss);
          this._orgPCss = "";
          playerUtilityHelpers.domUtils.removeClass(t, n);
          t.removeAttribute(p);
        }
      }
    }, {
      key: "getFullscreen",
      value: function (e = this.config.fullscreenTarget) {
        var t = this.root;
        var i = this.media;
        e ||= t;
        this._fullScreenOffset = {
          top: playerUtilityHelpers.domUtils.scrollTop(),
          left: playerUtilityHelpers.domUtils.scrollLeft()
        };
        this._fullscreenEl = e;
        this._fullActionFrom = "get";
        if (playerUtilityHelpers.domUtils.getFullScreenEl() === this._fullscreenEl) {
          this.onFullscreenChange();
          return;
        }
        try {
          for (var n = 0; n < f.length; n++) {
            var r = f[n];
            if (e[r]) {
              var o = r === "webkitRequestFullscreen" ? e.webkitRequestFullscreen(window.Element.ALLOW_KEYBOARD_INPUT) : e[r]();
              if (o && o.then) {
                return o;
              }
              return Promise.resolve();
            }
          }
          if (i.fullscreenEnabled || i.webkitSupportsFullscreen) {
            i.webkitEnterFullscreen();
            return Promise.resolve();
          }
          return Promise.reject(Error("call getFullscreen fail"));
        } catch (e) {
          return Promise.reject(Error("call getFullscreen fail"));
        }
      }
    }, {
      key: "exitFullscreen",
      value: function (e) {
        if (this.isRotateFullscreen) {
          this.exitRotateFullscreen();
        }
        if (this._fullscreenEl || playerUtilityHelpers.domUtils.getFullScreenEl()) {
          this.root;
          var t = this.media;
          this._fullActionFrom = "exit";
          try {
            for (var i = 0; i < g.length; i++) {
              var n = g[i];
              if (document[n]) {
                var r = document[n]();
                if (r && r.then) {
                  return r;
                }
                return Promise.resolve();
              }
            }
            if (t && t.webkitSupportsFullscreen) {
              t.webkitExitFullScreen();
              return Promise.resolve();
            }
            return Promise.reject(Error("call exitFullscreen fail"));
          } catch (e) {
            return Promise.reject(Error("call exitFullscreen fail"));
          }
        }
      }
    }, {
      key: "getCssFullscreen",
      value: function (e = this.config.fullscreenTarget) {
        if (this.isRotateFullscreen) {
          this.exitRotateFullscreen();
        } else if (this.fullscreen) {
          this.exitFullscreen();
        }
        var t = e ? `${xgplayerClassNames.playerClasses.INNER_FULLSCREEN} ${xgplayerClassNames.playerClasses.CSS_FULLSCREEN}` : xgplayerClassNames.playerClasses.CSS_FULLSCREEN;
        this.changeFullStyle(this.root, e, t);
        var i = this.config.fullscreen;
        var n = i === undefined ? {} : i;
        if (n.useCssFullscreen === true || typeof n.useCssFullscreen == "function" && n.useCssFullscreen()) {
          this.fullscreen = true;
          this.emit(videoPlayerEventConstants.FULLSCREEN_CHANGE, true);
        }
        this._cssfullscreenEl = e;
        this.cssfullscreen = true;
        this.emit(videoPlayerEventConstants.CSS_FULLSCREEN_CHANGE, true);
      }
    }, {
      key: "exitCssFullscreen",
      value: function () {
        var e = this._cssfullscreenEl ? `${xgplayerClassNames.playerClasses.INNER_FULLSCREEN} ${xgplayerClassNames.playerClasses.CSS_FULLSCREEN}` : xgplayerClassNames.playerClasses.CSS_FULLSCREEN;
        if (this.fullscreen) {
          var t = this.config.fullscreen;
          var i = t === undefined ? {} : t;
          if (i.useCssFullscreen === true || typeof i.useCssFullscreen == "function" && i.useCssFullscreen()) {
            this.recoverFullStyle(this.root, this._cssfullscreenEl, e);
            this.fullscreen = false;
            this.emit(videoPlayerEventConstants.FULLSCREEN_CHANGE, false);
          } else {
            this.removeClass(e);
          }
        } else {
          this.recoverFullStyle(this.root, this._cssfullscreenEl, e);
        }
        this._cssfullscreenEl = null;
        this.cssfullscreen = false;
        this.emit(videoPlayerEventConstants.CSS_FULLSCREEN_CHANGE, false);
      }
    }, {
      key: "getRotateFullscreen",
      value: function (e = this.config.fullscreenTarget) {
        if (this.cssfullscreen) {
          this.exitCssFullscreen(e);
        }
        var t = e ? `${xgplayerClassNames.playerClasses.INNER_FULLSCREEN} ${xgplayerClassNames.playerClasses.ROTATE_FULLSCREEN}` : xgplayerClassNames.playerClasses.ROTATE_FULLSCREEN;
        this._fullscreenEl = e || this.root;
        this.changeFullStyle(this.root, e, t, xgplayerClassNames.playerClasses.PARENT_ROTATE_FULLSCREEN);
        this.isRotateFullscreen = true;
        this.fullscreen = true;
        this.setRotateDeg(90);
        this._rootStyle = this.root.getAttribute("style");
        this.root.style.width = `${window.innerHeight}px`;
        this.emit(videoPlayerEventConstants.FULLSCREEN_CHANGE, true);
      }
    }, {
      key: "exitRotateFullscreen",
      value: function (e) {
        var t = this._fullscreenEl !== this.root ? `${xgplayerClassNames.playerClasses.INNER_FULLSCREEN} ${xgplayerClassNames.playerClasses.ROTATE_FULLSCREEN}` : xgplayerClassNames.playerClasses.ROTATE_FULLSCREEN;
        this.recoverFullStyle(this.root, this._fullscreenEl, t, xgplayerClassNames.playerClasses.PARENT_ROTATE_FULLSCREEN);
        this.isRotateFullscreen = false;
        this.fullscreen = false;
        this.setRotateDeg(0);
        this.emit(videoPlayerEventConstants.FULLSCREEN_CHANGE, false);
        if (this._rootStyle) {
          this.root.style.style = this._rootStyle;
          this._rootStyle = false;
        }
      }
    }, {
      key: "setRotateDeg",
      value: function (e) {
        if (window.orientation === 90 || window.orientation === -90) {
          this.rotateDeg = 0;
        } else {
          this.rotateDeg = e;
        }
      }
    }, {
      key: "focus",
      value: function (e = {
        autoHide: !this.config.closeDelayBlur,
        delay: this.config.inactive
      }) {
        if (this.isActive) {
          this.onFocus(e);
          return;
        }
        this.emit(videoPlayerEventConstants.PLAYER_FOCUS, babelRuntimeHelpers_1.objectSpread({
          paused: this.paused,
          ended: this.ended
        }, e));
      }
    }, {
      key: "blur",
      value: function (e = {
        ignorePaused: false
      }) {
        if (!this.isActive) {
          this.onBlur(e);
          return;
        }
        this.emit(videoPlayerEventConstants.PLAYER_BLUR, babelRuntimeHelpers_1.objectSpread({
          paused: this.paused,
          ended: this.ended
        }, e));
      }
    }, {
      key: "onFocus",
      value: function () {
        var e = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var i = t.autoHide;
        var n = i === undefined ? !this.config.closePlayerBlur : i;
        var r = t.delay;
        var o = r === undefined ? this.config.inactive : r;
        this.isActive = true;
        this.removeClass(xgplayerClassNames.playerClasses.INACTIVE);
        if (this.userTimer) {
          playerUtilityHelpers.domUtils.clearTimeout(this, this.userTimer);
          this.userTimer = null;
        }
        if (!n) {
          if (this.userTimer) {
            playerUtilityHelpers.domUtils.clearTimeout(this, this.userTimer);
            this.userTimer = null;
          }
          return;
        }
        this.userTimer = playerUtilityHelpers.domUtils.setTimeout(this, function () {
          e.userTimer = null;
          e.blur();
        }, o);
      }
    }, {
      key: "onBlur",
      value: function (e = {}) {
        var t = e.ignorePaused;
        if (this.isActive) {
          var i = this.config.closePauseVideoFocus;
          this.isActive = false;
          if (t !== undefined && t || i || !this.paused && !this.ended) {
            this.addClass(xgplayerClassNames.playerClasses.INACTIVE);
          }
        }
      }
    }, {
      key: "onEmptied",
      value: function () {
        this.updateAcc("emptied");
      }
    }, {
      key: "onCanplay",
      value: function () {
        this.removeClass(xgplayerClassNames.playerClasses.ENTER);
        this.removeClass(xgplayerClassNames.playerClasses.ERROR);
        this.removeClass(xgplayerClassNames.playerClasses.LOADING);
        this.isCanplay = true;
        if (this.waitTimer) {
          playerUtilityHelpers.domUtils.clearTimeout(this, this.waitTimer);
        }
      }
    }, {
      key: "onLoadeddata",
      value: function () {
        this.isError = false;
        this.isSeeking = false;
      }
    }, {
      key: "onLoadstart",
      value: function () {
        this.removeClass(xgplayerClassNames.playerClasses.ERROR);
        this.isCanplay = false;
      }
    }, {
      key: "onPlay",
      value: function () {
        if (this.state === audioPlayStateConstants.PlayStateMap.ENDED) {
          this.setState(audioPlayStateConstants.PlayStateMap.RUNNING);
        }
        this.removeClass(xgplayerClassNames.playerClasses.PAUSED);
        if (this.ended) {
          this.removeClass(xgplayerClassNames.playerClasses.ENDED);
        }
        if (!this.config.closePlayVideoFocus) {
          this.focus();
        }
      }
    }, {
      key: "onPause",
      value: function () {
        this.addClass(xgplayerClassNames.playerClasses.PAUSED);
        this.updateAcc("pause");
        if (!this.config.closePauseVideoFocus) {
          if (this.userTimer) {
            playerUtilityHelpers.domUtils.clearTimeout(this, this.userTimer);
            this.userTimer = null;
          }
          this.focus();
        }
      }
    }, {
      key: "onEnded",
      value: function () {
        this.updateAcc("ended");
        this.addClass(xgplayerClassNames.playerClasses.ENDED);
        this.setState(audioPlayStateConstants.PlayStateMap.ENDED);
      }
    }, {
      key: "onError",
      value: function () {
        this.isError = true;
        this.updateAcc("error");
        this.removeClass(xgplayerClassNames.playerClasses.NOT_ALLOW_AUTOPLAY);
        this.removeClass(xgplayerClassNames.playerClasses.NO_START);
        this.removeClass(xgplayerClassNames.playerClasses.ENTER);
        this.removeClass(xgplayerClassNames.playerClasses.LOADING);
        this.addClass(xgplayerClassNames.playerClasses.ERROR);
      }
    }, {
      key: "onSeeking",
      value: function () {
        if (!this.isSeeking) {
          this.updateAcc("seeking");
        }
        this.isSeeking = true;
        this.addClass(xgplayerClassNames.playerClasses.SEEKING);
      }
    }, {
      key: "onSeeked",
      value: function () {
        this.isSeeking = false;
        if (this.waitTimer) {
          playerUtilityHelpers.domUtils.clearTimeout(this, this.waitTimer);
        }
        this.removeClass(xgplayerClassNames.playerClasses.LOADING);
        this.removeClass(xgplayerClassNames.playerClasses.SEEKING);
      }
    }, {
      key: "onWaiting",
      value: function () {
        var e = this;
        if (this.waitTimer) {
          playerUtilityHelpers.domUtils.clearTimeout(this, this.waitTimer);
        }
        this.updateAcc("waiting");
        this.waitTimer = playerUtilityHelpers.domUtils.setTimeout(this, function () {
          e.addClass(xgplayerClassNames.playerClasses.LOADING);
          playerUtilityHelpers.domUtils.clearTimeout(e, e.waitTimer);
          e.waitTimer = null;
        }, this.config.minWaitDelay);
      }
    }, {
      key: "onPlaying",
      value: function () {
        var e = this;
        this.isError = false;
        [xgplayerClassNames.playerClasses.NO_START, xgplayerClassNames.playerClasses.PAUSED, xgplayerClassNames.playerClasses.ENDED, xgplayerClassNames.playerClasses.ERROR, xgplayerClassNames.playerClasses.REPLAY, xgplayerClassNames.playerClasses.LOADING].forEach(function (t) {
          e.removeClass(t);
        });
      }
    }, {
      key: "onTimeupdate",
      value: function () {
        if (!this._videoHeight) {
          this.resize();
        }
        if ((this.waitTimer || this.hasClass(xgplayerClassNames.playerClasses.LOADING)) && this.media.readyState > 2) {
          this.removeClass(xgplayerClassNames.playerClasses.LOADING);
          playerUtilityHelpers.domUtils.clearTimeout(this, this.waitTimer);
          this.waitTimer = null;
        }
        if (!this.paused && this.state < audioPlayStateConstants.PlayStateMap.RUNNING && this.duration) {
          this.setState(audioPlayStateConstants.PlayStateMap.RUNNING);
          this.emit(videoPlayerEventConstants.AUTOPLAY_STARTED);
        }
        if (!this._accPlayed.t && !this.paused && !this.ended) {
          this._accPlayed.t = new Date().getTime();
        }
      }
    }, {
      key: "onVolumechange",
      value: function () {
        if (playerUtilityHelpers.domUtils.typeOf(this.config.volume) === "Number") {
          this.config.volume = this.volume;
        }
      }
    }, {
      key: "onRatechange",
      value: function () {
        this.config.defaultPlaybackRate = this.playbackRate;
      }
    }, {
      key: "emitUserAction",
      value: function (e, t, i) {
        if (this.media && t && e) {
          var r = playerUtilityHelpers.domUtils.typeOf(e) === "String" ? e : e.type || "";
          if (i.props && playerUtilityHelpers.domUtils.typeOf(i.props) !== "Array") {
            i.props = [i.props];
          }
          this.emit(videoPlayerEventConstants.USER_ACTION, babelRuntimeHelpers_1.objectSpread({
            eventType: r,
            action: t,
            currentTime: this.currentTime,
            duration: this.duration,
            ended: this.ended,
            event: e
          }, i));
        }
      }
    }, {
      key: "updateAcc",
      value: function (e) {
        if (this._accPlayed.t) {
          var t = new Date().getTime() - this._accPlayed.t;
          this._accPlayed.acc += t;
          this._accPlayed.t = 0;
          if (e === "ended" || this.ended) {
            this._accPlayed.loopAcc = this._accPlayed.acc;
          }
        }
      }
    }, {
      key: "checkBuffer",
      value: function (e) {
        var t = this.media.buffered;
        if (!t || t.length === 0 || !this.duration) {
          return true;
        }
        var i = e || this.media.currentTime || 0.2;
        var n = t.length;
        var r = 0;
        for (; r < n; r++) {
          if (t.start(r) <= i && t.end(r) > i) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: "resizePosition",
      value: function () {
        var e = this.videoPos;
        var t = e.rotate;
        var i = e.vy;
        var n = e.vx;
        var r = e.h;
        var o = e.w;
        var a = this.videoPos._pi;
        a ||= this.media.videoWidth / this.media.videoHeight * 100;
        if (a) {
          this.videoPos.pi = a;
          var l = {
            rotate: t
          };
          var u = 0;
          var c = 0;
          var h = 1;
          var d = Math.abs(t / 90);
          var f = this.root;
          var g = this.innerContainer;
          var p = f.offsetWidth;
          var y = g ? g.offsetHeight : f.offsetHeight;
          var v = y;
          var m = p;
          if (d % 2 == 0) {
            h = r > 0 ? 100 / r : o > 0 ? 100 / o : 1;
            l.scale = h;
            u = i > 0 ? (100 - r) / 2 - i : 0;
            l.y = d === 2 ? 0 - u : u;
            c = n > 0 ? (100 - o) / 2 - n : 0;
            l.x = d === 2 ? 0 - c : c;
            this.media.style.width = `${m}px`;
            this.media.style.height = `${v}px`;
          } else if (d % 2 == 1) {
            m = y;
            v = p;
            var _ = y - p;
            c = -_ / 2 / m * 100;
            l.x = d === 3 ? c + i / 2 : c - i / 2;
            u = _ / 2 / v * 100;
            l.y = d === 3 ? u + n / 2 : u - n / 2;
            l.scale = h;
            this.media.style.width = `${m}px`;
            this.media.style.height = `${v}px`;
          }
          var E = playerUtilityHelpers.domUtils.getTransformStyle(l);
          this.media.style.transform = E;
          this.media.style.webkitTransform = E;
        }
      }
    }, {
      key: "position",
      value: function (e = {
        h: 0,
        y: 0,
        x: 0,
        w: 0
      }) {
        if (this.media && e && e.h) {
          var t = this.videoPos;
          t.h = e.h * 100 || 0;
          t.w = e.w * 100 || 0;
          t.vx = e.x * 100 || 0;
          t.vy = e.y * 100 || 0;
          this.resizePosition();
        }
      }
    }, {
      key: "setConfig",
      value: function (e) {
        var t = this;
        if (e) {
          Object.keys(e).map(function (i) {
            if (i !== "plugins") {
              t.config[i] = e[i];
              var n = t.plugins[i.toLowerCase()];
              if (n && playerUtilityHelpers.domUtils.typeOf(n.setConfig) === "Function") {
                n.setConfig(e[i]);
              }
            }
          });
        }
      }
    }, {
      key: "playNext",
      value: function (e) {
        var t = this;
        this.resetState();
        this.setConfig(e);
        this._currentTime = 0;
        this._duration = 0;
        pluginHooksManager.runHooks(this, "playnext", function () {
          t.start();
          t.emit(videoPlayerEventConstants.PLAYNEXT, e);
        });
      }
    }, {
      key: "resize",
      value: function () {
        var e = this;
        if (this.media) {
          var t = this.media;
          var i = t.videoWidth;
          var n = t.videoHeight;
          var r = this.config;
          var s = r.fitVideoSize;
          var o = r.videoFillMode;
          if (o === "fill" || o === "cover") {
            this.setAttribute("data-xgfill", o);
          }
          if (n && i) {
            this._videoHeight = n;
            this._videoWidth = i;
            var a = this.root.getBoundingClientRect();
            var u = this.controls && this.innerContainer ? this.controls.root.getBoundingClientRect().height : 0;
            var c = a.width;
            var h = a.height - u;
            var d = parseInt(i / n * 1000, 10);
            var f = parseInt(c / h * 1000, 10);
            var g = c;
            var p = h;
            var y = {};
            if (s === "auto" && f > d || s === "fixWidth") {
              p = c / d * 1000;
              if (this.config.fluid) {
                y.paddingTop = `${p * 100 / g}%`;
              } else {
                y.height = `${p + u}px`;
              }
            } else if (s === "auto" && f < d || s === "fixHeight") {
              g = d * h / 1000;
              y.width = `${g}px`;
            }
            if (!this.fullscreen && !this.cssfullscreen) {
              Object.keys(y).forEach(function (t) {
                e.root.style[t] = y[t];
              });
            }
            if (o === "fillHeight" && f < d || o === "fillWidth" && f > d) {
              this.setAttribute("data-xgfill", "cover");
            }
            var v = {
              videoScale: d,
              vWidth: g,
              vHeight: p,
              cWidth: g,
              cHeight: p + u
            };
            this.resizePosition();
            this.emit(videoPlayerEventConstants.VIDEO_RESIZE, v);
          }
        }
      }
    }, {
      key: "updateObjectPosition",
      value: function (e = 0, t = 0) {
        if (this.media.updateObjectPosition) {
          this.media.updateObjectPosition(e, t);
          return;
        }
        this.media.style.objectPosition = `${e * 100}% ${t * 100}%`;
      }
    }, {
      key: "setState",
      value: function (e) {
        xgplayerLogger.logger.logInfo("setState", `state from:${audioPlayStateConstants.playStateNames[this.state]} to:${audioPlayStateConstants.playStateNames[e]}`);
        this._state = e;
      }
    }, {
      key: "state",
      get: function () {
        return this._state;
      }
    }, {
      key: "isFullscreen",
      get: function () {
        return this.fullscreen;
      }
    }, {
      key: "isCssfullScreen",
      get: function () {
        return this.cssfullscreen;
      }
    }, {
      key: "hasStart",
      get: function () {
        return this._hasStart;
      },
      set: function (e) {
        if (typeof e == "boolean") {
          this._hasStart = e;
          if (e === false) {
            this.setState(audioPlayStateConstants.PlayStateMap.READY);
          }
          this.emit("hasstart");
        }
      }
    }, {
      key: "isPlaying",
      get: function () {
        return this._state === audioPlayStateConstants.PlayStateMap.RUNNING || this._state === audioPlayStateConstants.PlayStateMap.ENDED;
      },
      set: function (e) {
        if (e) {
          this.setState(audioPlayStateConstants.PlayStateMap.RUNNING);
        } else if (this._state >= audioPlayStateConstants.PlayStateMap.RUNNING) {
          this.setState(audioPlayStateConstants.PlayStateMap.ATTACHED);
        }
      }
    }, {
      key: "definitionList",
      get: function () {
        return this.config && this.config.definition && this.config.definition.list || [];
      },
      set: function (e) {
        var t = this;
        var i = this.config.definition;
        var n = null;
        var r = null;
        i.list = e;
        this.emit("resourceReady", e);
        e.forEach(function (e) {
          if (t.curDefinition?.definition === e.definition) {
            n = e;
          }
          if (i.defaultDefinition === e.definition) {
            r = e;
          }
        });
        if (!r && e.length > 0) {
          r = e[0];
        }
        if (n) {
          this.changeDefinition(n);
        } else if (r) {
          this.changeDefinition(r);
        }
      }
    }, {
      key: "videoFrameInfo",
      get: function () {
        var e = {
          total: 0,
          dropped: 0,
          corrupted: 0,
          droppedRate: 0,
          droppedDuration: 0
        };
        if (!this.media || !this.media.getVideoPlaybackQuality) {
          return e;
        }
        var t = this.media.getVideoPlaybackQuality();
        e.dropped = t.droppedVideoFrames || 0;
        e.total = t.totalVideoFrames || 0;
        e.corrupted = t.corruptedVideoFrames || 0;
        if (e.total > 0) {
          e.droppedRate = e.dropped / e.total * 100;
          e.droppedDuration = parseInt(this.cumulateTime / e.total * e.dropped, 0);
        }
        return e;
      }
    }, {
      key: "lang",
      get: function () {
        return this.config.lang;
      },
      set: function (e) {
        if (playerI18nManager.playerLangManager.langKeys.filter(function (t) {
          return t === e;
        }).length !== 0 || e === "zh") {
          this.config.lang = e;
          E.setLang(e, this);
        }
      }
    }, {
      key: "i18n",
      get: function () {
        var e = this.config.lang;
        if (e === "zh") {
          e = "zh-cn";
        }
        return this.__i18n.lang[e] || this.__i18n.lang.en;
      }
    }, {
      key: "i18nKeys",
      get: function () {
        return this.__i18n.textKeys || {};
      }
    }, {
      key: "version",
      get: function () {
        return appVersionConstant.appVersion;
      }
    }, {
      key: "playerId",
      get: function () {
        return this._pluginInfoId;
      }
    }, {
      key: "url",
      get: function () {
        return this.__url || this.config.url;
      },
      set: function (e) {
        this.__url = e;
      }
    }, {
      key: "poster",
      get: function () {
        if (this.plugins.poster) {
          return this.plugins.poster.config.poster;
        } else {
          return this.config.poster;
        }
      },
      set: function (e) {
        if (this.plugins.poster) {
          this.plugins.poster.update(e);
        }
      }
    }, {
      key: "readyState",
      get: function () {
        return babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "readyState", this);
      }
    }, {
      key: "error",
      get: function () {
        var e = babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "error", this);
        return this.i18n[e] || e;
      }
    }, {
      key: "networkState",
      get: function () {
        return babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "networkState", this);
      }
    }, {
      key: "fullscreenChanging",
      get: function () {
        return this._fullScreenOffset !== null;
      }
    }, {
      key: "cumulateTime",
      get: function () {
        var e = this._accPlayed;
        this.updateAcc("get");
        return e.acc;
      }
    }, {
      key: "zoom",
      get: function () {
        return this.config.zoom;
      },
      set: function (e) {
        this.config.zoom = e;
      }
    }, {
      key: "videoRotateDeg",
      get: function () {
        return this.videoPos.rotate;
      },
      set: function (e) {
        if ((e = playerUtilityHelpers.domUtils.convertDeg(e)) % 90 == 0 && e !== this.videoPos.rotate) {
          this.videoPos.rotate = e;
          this.resizePosition();
        }
      }
    }, {
      key: "avgSpeed",
      get: function () {
        return I;
      },
      set: function (e) {
        I = e;
      }
    }, {
      key: "realTimeSpeed",
      get: function () {
        return L;
      },
      set: function (e) {
        L = e;
      }
    }, {
      key: "hook",
      value: function (e, t) {
        return pluginHooksManager.createHook.call.apply(pluginHooksManager.createHook, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "useHooks",
      value: function (e, t) {
        return pluginHooksManager.setHook.call.apply(pluginHooksManager.setHook, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "removeHooks",
      value: function (e, t) {
        return pluginHooksManager.deleteHook.call.apply(pluginHooksManager.deleteHook, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "usePluginHooks",
      value: function (e, t, i) {
        var n = arguments.length;
        var r = Array(n > 3 ? n - 3 : 0);
        var s = 3;
        for (; s < n; s++) {
          r[s - 3] = arguments[s];
        }
        return pluginHooksManager.usePluginHooks.call.apply(pluginHooksManager.usePluginHooks, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "removePluginHooks",
      value: function (e, t, i) {
        var n = arguments.length;
        var r = Array(n > 3 ? n - 3 : 0);
        var s = 3;
        for (; s < n; s++) {
          r[s - 3] = arguments[s];
        }
        return pluginHooksManager.removePluginHooks.call.apply(pluginHooksManager.removePluginHooks, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "setUserActive",
      value: function (e, t) {
        if (typeof t == "boolean" && t !== this.muted) {
          this.addInnerOP("volumechange");
          this.muted = t;
        }
        E.setCurrentUserActive(this.playerId, e);
      }
    }], [{
      key: "debugger",
      get: function () {
        return xgplayerLogger.logger.config.debug;
      },
      set: function (e) {
        xgplayerLogger.logger.config.debug = e;
      }
    }, {
      key: "getCurrentUserActivePlayerId",
      value: function () {
        return E.getCurrentUseActiveId();
      }
    }, {
      key: "setCurrentUserActive",
      value: function (e, t) {
        E.setCurrentUserActive(e, t);
      }
    }, {
      key: "isHevcSupported",
      value: function () {
        return environmentDetectorUtil.environmentUtils.isHevcSupported();
      }
    }, {
      key: "probeConfigSupported",
      value: function (e) {
        return environmentDetectorUtil.environmentUtils.probeConfigSupported(e);
      }
    }, {
      key: "install",
      value: function (e, t) {
        i.plugins ||= {};
        i.plugins[e] ||= t;
      }
    }, {
      key: "use",
      value: function (e, t) {
        i.plugins ||= {};
        i.plugins[e] = t;
      }
    }]);
    return i;
  }(c);
  babelRuntimeHelpers_1.defineProperty(Z, "defaultPreset", null);
  babelRuntimeHelpers_1.defineProperty(Z, "XgVideoProxy", null);
  require.d(exports, {
    Player: function () {
      return Z;
    }
  });
}