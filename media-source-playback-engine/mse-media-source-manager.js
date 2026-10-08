// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd1' to 'MseManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 595663
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers = require("babel-runtime-helpers") /*id: 339562*/;
  var deferredPromiseUtils = require("deferred-promise-utils") /*id: 373813*/;
  var bufferRangeUtil = require("buffer-range-util") /*id: 252499*/;
  var mediaErrorHandler = require("media-error-handler") /*id: 706617*/;
  var s = typeof window != "undefined";
  var customLoggerClass = require("custom-logger-class") /*id: 246025*/;
  function c() {
    var e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
    try {
      if (!s) {
        return null;
      }
      if (e && typeof ManagedMediaSource != "undefined") {
        return ManagedMediaSource;
      }
      return window.MediaSource;
    } catch (e) {}
  }
  function l(e) {
    return /ManagedMediaSource/gi.test(Object.prototype.toString.call(e));
  }
  var f = {
    APPEND: "appendBuffer",
    REMOVE: "removeBuffer",
    UPDATE_DURATION: "updateDuration"
  };
  var d = function () {
    var e;
    var t;
    var n;
    function s(e, t) {
      var n = this;
      babelRuntimeHelpers.classCallCheck(this, s);
      babelRuntimeHelpers.defineProperty(this, "media", null);
      babelRuntimeHelpers.defineProperty(this, "mediaSource", null);
      babelRuntimeHelpers.defineProperty(this, "_openPromise", deferredPromiseUtils.createDeferred());
      babelRuntimeHelpers.defineProperty(this, "_queue", Object.create(null));
      babelRuntimeHelpers.defineProperty(this, "_sourceBuffer", Object.create(null));
      babelRuntimeHelpers.defineProperty(this, "_mseFullFlag", {});
      babelRuntimeHelpers.defineProperty(this, "_st", 0);
      babelRuntimeHelpers.defineProperty(this, "_opst", 0);
      babelRuntimeHelpers.defineProperty(this, "_logger", null);
      babelRuntimeHelpers.defineProperty(this, "_config", null);
      babelRuntimeHelpers.defineProperty(this, "_url", null);
      babelRuntimeHelpers.defineProperty(this, "_onStartStreaming", function () {
        n._logger.debug("startstreaming");
      });
      babelRuntimeHelpers.defineProperty(this, "_onEndStreaming", function () {
        n._logger.debug("endstreaming");
      });
      babelRuntimeHelpers.defineProperty(this, "_onSBUpdateEnd", function (e) {
        var t = n._queue[e];
        if (t) {
          var r = t[0];
          if ((r == null ? undefined : r.opName) !== f.UPDATE_DURATION) {
            t.shift();
          }
          if (r) {
            var o = deferredPromiseUtils.getTimestamp() - n._opst;
            n._logger.debug("UpdateEnd", r.opName, o, r.context);
            r.promise.resolve({
              name: r.opName,
              context: r.context,
              costtime: o
            });
            n._startQueue(e);
          }
        }
      });
      babelRuntimeHelpers.defineProperty(this, "_onSBUpdateError", function (e, t) {
        var r = n._queue[e];
        if (r) {
          var i = r[0];
          if (i) {
            n._logger.error("UpdateError", e, i.opName, i.context);
            i.promise.reject(new mediaErrorHandler.MediaError(mediaErrorHandler.ErrorTypes.MEDIA, mediaErrorHandler.ErrorTypes.SUB_TYPES.MSE_APPEND_BUFFER, t));
          }
        }
      });
      this._config = Object.assign(s.getDefaultConfig(), t);
      if (e) {
        this.bindMedia(e);
      }
      this._logger = new customLoggerClass.Logger("MSE");
      if (this._config.openLog) {
        customLoggerClass.Logger.enable();
      }
    }
    babelRuntimeHelpers.classProps(s, [{
      key: "isOpened",
      get: function () {
        return this.mediaSource?.readyState === "open";
      }
    }, {
      key: "url",
      get: function () {
        return this._url;
      }
    }, {
      key: "duration",
      get: function () {
        return this.mediaSource?.duration || -1;
      }
    }, {
      key: "isEnded",
      get: function () {
        return !!this.mediaSource && this.mediaSource.readyState === "ended";
      }
    }, {
      key: "streaming",
      get: function () {
        return !l(this.mediaSource) || this.mediaSource.streaming;
      }
    }, {
      key: "isFull",
      value: function (e) {
        if (e) {
          return this._mseFullFlag[e];
        } else {
          return this._mseFullFlag[s.VIDEO];
        }
      }
    }, {
      key: "updateDuration",
      value: function (e) {
        var t = this;
        var n = this.mediaSource && this.mediaSource.duration > e;
        if (this.mediaSource && this.mediaSource.duration > e) {
          var r = 0;
          Object.keys(this._sourceBuffer).forEach(function (e) {
            try {
              r = Math.max(t.bufferEnd(e) || 0, r);
            } catch (e) {}
          });
          if (e < r) {
            return Promise.resolve();
          }
        }
        return this._enqueueBlockingOp(function () {
          if (t.isEnded) {
            t._logger.debug("setDuration but ended");
            return;
          }
          if (t.mediaSource) {
            t.mediaSource.duration = e;
            t._logger.debug("setDuration", e);
          }
        }, f.UPDATE_DURATION, {
          isReduceDuration: n
        });
      }
    }, {
      key: "open",
      value: function () {
        var e = this;
        if (this._openPromise.used && !this.isOpened && this.mediaSource) {
          var t = this.mediaSource;
          t.addEventListener("sourceopen", function n() {
            var r = deferredPromiseUtils.getTimestamp() - e._st;
            e._logger.debug("sourceopen", r);
            t.removeEventListener("sourceopen", n);
            e._openPromise.resolve({
              costtime: r
            });
          });
          this._openPromise = deferredPromiseUtils.createDeferred();
        }
        return this._openPromise;
      }
    }, {
      key: "bindMedia",
      value: (e = babelRuntimeHelpers.asyncWrapper(babelRuntimeHelpers.keysIterator().mark(function e(t) {
        var n;
        var o;
        var a;
        var s;
        var u = this;
        return babelRuntimeHelpers.keysIterator().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if (!this.mediaSource && !this.media) {
                  e.next = 3;
                  break;
                }
                e.next = 3;
                return this.unbindMedia();
              case 3:
                n = c(this._config.preferMMS);
                if (!!t && !!n) {
                  e.next = 6;
                  break;
                }
                throw Error("Param media or MediaSource does not exist");
              case 6:
                this.media = t;
                a = l(o = this.mediaSource = new n());
                this._st = deferredPromiseUtils.getTimestamp();
                s = function e() {
                  var n = deferredPromiseUtils.getTimestamp() - u._st;
                  u._logger.debug("sourceopen");
                  o.removeEventListener("sourceopen", e);
                  URL.revokeObjectURL(t.src);
                  u._openPromise.resolve({
                    costtime: n
                  });
                };
                o.addEventListener("sourceopen", s);
                if (a) {
                  o.addEventListener("startstreaming", this._onStartStreaming);
                  o.addEventListener("endstreaming", this._onEndStreaming);
                }
                this._url = URL.createObjectURL(o);
                t.src = this._url;
                t.disableRemotePlayback = a;
                return e.abrupt("return", this._openPromise);
              case 17:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function (t) {
        return e.apply(this, arguments);
      })
    }, {
      key: "unbindMedia",
      value: (t = babelRuntimeHelpers.asyncWrapper(babelRuntimeHelpers.keysIterator().mark(function e() {
        var t;
        var n;
        var o;
        var a = this;
        return babelRuntimeHelpers.keysIterator().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if (!this._openPromise.used) {
                  this._openPromise.resolve();
                }
                if (t = this.mediaSource) {
                  Object.keys(this._queue).forEach(function (e) {
                    var t = a._queue[e];
                    if (t) {
                      t.forEach(function (e) {
                        var t;
                        var n;
                        if ((t = e.promise) === null || t === undefined) {
                          return undefined;
                        } else if ((n = t.resolve) === null || n === undefined) {
                          return undefined;
                        } else {
                          return n.call(t);
                        }
                      });
                    }
                  });
                  n = !!this.media && this.media.readyState >= 1;
                  o = t.readyState === "open";
                  if (n && o) {
                    try {
                      t.endOfStream();
                    } catch (e) {}
                  }
                  Object.keys(this._sourceBuffer).forEach(function (e) {
                    try {
                      t.removeSourceBuffer(a._sourceBuffer[e]);
                    } catch (e) {}
                  });
                  if (l(t)) {
                    t.removeEventListener("startstreaming", this._onStartStreaming);
                    t.removeEventListener("endstreaming", this._onEndStreaming);
                  }
                }
                if (this.media) {
                  this.media.disableRemotePlayback = false;
                  this.media.removeAttribute("src");
                  try {
                    this.media.load();
                  } catch (e) {}
                  this.media = null;
                }
                this.mediaSource = null;
                this._openPromise = deferredPromiseUtils.createDeferred();
                this._queue = Object.create(null);
                this._sourceBuffer = Object.create(null);
              case 8:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function () {
        return t.apply(this, arguments);
      })
    }, {
      key: "createSource",
      value: function (e, t) {
        var n;
        if (!this._sourceBuffer[e] && this.mediaSource) {
          try {
            n = this._sourceBuffer[e] = this.mediaSource.addSourceBuffer(t);
          } catch (e) {
            throw new mediaErrorHandler.MediaError(mediaErrorHandler.ErrorTypes.MEDIA, mediaErrorHandler.ErrorTypes.SUB_TYPES.MSE_ADD_SB, e);
          }
          n.mimeType = t;
          n.addEventListener("updateend", this._onSBUpdateEnd.bind(this, e));
          n.addEventListener("error", this._onSBUpdateError.bind(this, e));
        }
      }
    }, {
      key: "changeType",
      value: function (e, t) {
        var n = this;
        var r = this._sourceBuffer[e];
        if (this.mediaSource && r && r.mimeType !== t) {
          if (typeof r.changeType != "function") {
            return Promise.reject();
          } else {
            return this._enqueueOp(e, function () {
              r.changeType(t);
              r.mimeType = t;
              n._onSBUpdateEnd(e);
            }, "changeType", {
              mimeType: t
            });
          }
        } else {
          return Promise.resolve();
        }
      }
    }, {
      key: "createOrChangeSource",
      value: function (e, t) {
        this.createSource(e, t);
        return this.changeType(e, t);
      }
    }, {
      key: "append",
      value: function (e, t, n) {
        var r = this;
        if (t && t.byteLength && this._sourceBuffer[e]) {
          return this._enqueueOp(e, function () {
            var o;
            if (r.mediaSource && !r.media.error) {
              r._logger.debug("MSE APPEND START", n);
              r._opst = deferredPromiseUtils.getTimestamp();
              if ((o = r._sourceBuffer[e]) !== null && o !== undefined) {
                o.appendBuffer(t);
              }
            }
          }, f.APPEND, n);
        } else {
          return Promise.resolve();
        }
      }
    }, {
      key: "remove",
      value: function (e, t, n, r) {
        var o = this;
        var a = false;
        if (this._mseFullFlag[e]) {
          a = true;
        }
        return this._enqueueOp(e, function () {
          if (o.mediaSource && !o.media.error) {
            var a = o._sourceBuffer[e];
            if (t >= n || !a) {
              o._onSBUpdateEnd(e);
              return;
            }
            o._opst = deferredPromiseUtils.getTimestamp();
            o._logger.debug("MSE REMOVE START", e, t, n, r);
            a.remove(t, n);
          }
        }, f.REMOVE, r, a);
      }
    }, {
      key: "clearBuffer",
      value: function (e, t) {
        var n;
        var r = this;
        Object.keys(this._sourceBuffer).forEach(function (i) {
          n = r.remove(i, e, t);
        });
        return n || Promise.resolve();
      }
    }, {
      key: "clearAllBuffer",
      value: function () {
        var e;
        var t = this;
        Object.keys(this._sourceBuffer).forEach(function (n) {
          var r = t._sourceBuffer[n];
          e = t.remove(n, 0, bufferRangeUtil.BufferRangeUtil.end(bufferRangeUtil.BufferRangeUtil.get(r)));
        });
        return e;
      }
    }, {
      key: "clearOpQueues",
      value: function (e, t) {
        this._logger.debug("MSE clearOpQueue START");
        var n;
        var r = this._queue[e];
        if (t && r) {
          this._queue[e] = [];
          return;
        }
        if (r && r[e] && !(r.length < 5)) {
          var i = [];
          r.forEach(function (e) {
            if (e.context && e.context.isinit) {
              i.push(e);
            }
          });
          this._queue[e] = r.slice(0, 2);
          if (i.length > 0) {
            (n = this._queue[e]).push.apply(n, i);
          }
        }
      }
    }, {
      key: "endOfStream",
      value: function (e) {
        var t = this;
        if (this.mediaSource && this.mediaSource.readyState === "open") {
          return this._enqueueBlockingOp(function () {
            var n = t.mediaSource;
            if (n && n.readyState === "open") {
              t._logger.debug("MSE endOfStream START");
              if (e) {
                n.endOfStream(e);
              } else {
                n.endOfStream();
              }
            }
          }, "endOfStream");
        } else {
          return Promise.resolve();
        }
      }
    }, {
      key: "setLiveSeekableRange",
      value: function (e, t) {
        var n = this.mediaSource;
        if (!(e < 0) && !(t < e) && n != null && !!n.setLiveSeekableRange && n.readyState === "open") {
          n.setLiveSeekableRange(e, t);
        }
      }
    }, {
      key: "getSourceBuffer",
      value: function (e) {
        return this._sourceBuffer[e];
      }
    }, {
      key: "buffered",
      value: function (e) {
        return bufferRangeUtil.BufferRangeUtil.get(this._sourceBuffer[e]);
      }
    }, {
      key: "bufferStart",
      value: function (e) {
        return bufferRangeUtil.BufferRangeUtil.start(this.buffered(e));
      }
    }, {
      key: "bufferEnd",
      value: function (e) {
        return bufferRangeUtil.BufferRangeUtil.end(this.buffered(e));
      }
    }, {
      key: "_enqueueOp",
      value: function (e, t, n, r, o) {
        var a = this;
        if (!this.mediaSource) {
          return Promise.resolve();
        }
        var s = this._queue[e] = this._queue[e] || [];
        var u = {
          exec: t,
          promise: deferredPromiseUtils.createDeferred(),
          opName: n,
          context: r
        };
        if (o) {
          s.splice(0, 0, u);
          this._mseFullFlag[e] = false;
          this._startQueue(e);
        } else {
          s.push(u);
        }
        if (this.isOpened || this.isEnded) {
          if (s.length === 1) {
            this._startQueue(e);
          }
        } else {
          this._openPromise.then(function () {
            if (s.length === 1) {
              a._startQueue(e);
            }
          });
        }
        return u.promise;
      }
    }, {
      key: "_enqueueBlockingOp",
      value: (n = babelRuntimeHelpers.asyncWrapper(babelRuntimeHelpers.keysIterator().mark(function e(t, n, o) {
        var a;
        var s;
        var u = this;
        return babelRuntimeHelpers.keysIterator().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if (this.mediaSource) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return", Promise.resolve());
              case 2:
                if ((a = Object.keys(this._sourceBuffer)).length) {
                  e.next = 5;
                  break;
                }
                return e.abrupt("return", t());
              case 5:
                s = [];
                a.forEach(function (e) {
                  var t = u._queue[e];
                  var r = deferredPromiseUtils.createDeferred();
                  s.push(r);
                  t.push({
                    exec: function () {
                      r.resolve();
                    },
                    promise: r,
                    opName: n,
                    context: o
                  });
                  if (t.length === 1) {
                    u._startQueue(e);
                  }
                });
                return e.abrupt("return", Promise.all(s).then(function () {
                  try {
                    return t();
                  } finally {
                    a.forEach(function (e) {
                      var t = u._queue[e];
                      var n = u._sourceBuffer[e];
                      if (t != null) {
                        t.shift();
                      }
                      if (!n || !n.updating) {
                        u._startQueue(e);
                      }
                    });
                  }
                }));
              case 8:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function (e, t, r) {
        return n.apply(this, arguments);
      })
    }, {
      key: "_startQueue",
      value: function (e) {
        var t = this._queue[e];
        if (t) {
          var n = t[0];
          if (n && !this._mseFullFlag[e]) {
            try {
              n.exec();
            } catch (r) {
              if (r && r.message && r.message.indexOf("SourceBuffer is full") >= 0) {
                this._mseFullFlag[e] = true;
                this._logger.error("[MSE error],  context,", n.context, " ,name,", n.opName, ",err,SourceBuffer is full");
                n.promise.reject(new mediaErrorHandler.MediaError(mediaErrorHandler.ErrorTypes.MEDIA, mediaErrorHandler.ErrorTypes.SUB_TYPES.MSE_FULL, r));
              } else {
                this._logger.error(r);
                n.promise.reject(new mediaErrorHandler.MediaError(mediaErrorHandler.ErrorTypes.MEDIA, mediaErrorHandler.ErrorTypes.SUB_TYPES.MSE_OTHER, r));
                t.shift();
                this._startQueue(e);
              }
            }
          }
        }
      }
    }, {
      key: "setTimeoffset",
      value: function (e, t, n) {
        var r = this;
        return this._enqueueOp(e, function () {
          if (t < 0) {
            t += 0.001;
          }
          r._sourceBuffer[e].timestampOffset = t;
          r._onSBUpdateEnd(e);
        }, "setTimeoffset", n);
      }
    }, {
      key: "abort",
      value: function (e, t) {
        var n = this;
        if (this.isOpened) {
          return this._enqueueOp(e, function () {
            n._sourceBuffer[e].abort();
            n._onSBUpdateEnd(e);
          }, "abort", t);
        } else {
          return Promise.resolve();
        }
      }
    }], [{
      key: "isSupported",
      value: function (e = "video/mp4; codecs=\"avc1.42E01E,mp4a.40.2\"") {
        var t = c();
        if (!t) {
          return false;
        }
        try {
          return t.isTypeSupported(e);
        } catch (t) {
          this._logger.error(e, t);
          return false;
        }
      }
    }, {
      key: "getDefaultConfig",
      value: function () {
        return {
          openLog: false,
          preferMMS: false
        };
      }
    }]);
    return s;
  }();
  babelRuntimeHelpers.defineProperty(d, "VIDEO", "video");
  babelRuntimeHelpers.defineProperty(d, "AUDIO", "audio");
  require.d(exports, {
    MseManager: function () {
      return d;
    }
  });
}