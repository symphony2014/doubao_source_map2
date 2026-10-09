// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'mf' to 'HttpLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 371915
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers = require("babel-runtime-helpers") /*id: 339562*/;
  var httpRequestConstants = require("http-request-constants") /*id: 679554*/;
  var o = function (e) {
    babelRuntimeHelpers.inherits(n, e);
    var t = babelRuntimeHelpers.possibleConstructorReturn(n);
    function n(e, o, a, s) {
      var u;
      babelRuntimeHelpers.classCallCheck(this, n);
      u = t.call(this, s);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(u), "retryCount", 0);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(u), "isTimeout", false);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(u), "loaderType", httpRequestConstants.transportTypes.FETCH);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(u), "startTime", 0);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(u), "endTime", 0);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(u), "options", {});
      u.url = e;
      u.request = o;
      u.response = a;
      return u;
    }
    return babelRuntimeHelpers.classProps(n);
  }(babelRuntimeHelpers.wrapNative(Error));
  var a = Object.prototype.toString;
  function s(e) {
    if (a.call(e) !== "[object Object]") {
      return false;
    }
    var t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype;
  }
  function u(e) {
    if (e && e[0] !== null && e[0] !== undefined && (e[0] !== 0 || e[1] !== null && e[1] !== undefined)) {
      var t = "bytes=" + e[0] + "-";
      if (e[1]) {
        t += e[1];
      }
      return t;
    }
  }
  function c(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function l(e, t) {
    if (e) {
      if (!t) {
        return e;
      }
      var n;
      var i = Object.keys(t).map(function (e) {
        if ((n = t[e]) != null) {
          if (Array.isArray(n)) {
            e += "[]";
          } else {
            n = [n];
          }
          return n.map(function (t) {
            var n;
            var i;
            n = t;
            if (a.call(n) === "[object Date]") {
              t = t.toISOString();
            } else if ((i = t) !== null && babelRuntimeHelpers.typeOf(i) === "object") {
              t = JSON.stringify(t);
            }
            return `${c(e)}=${c(t)}`;
          }).join("&");
        }
      }).filter(Boolean).join("&");
      if (i) {
        var o = e.indexOf("#");
        if (o !== -1) {
          e = e.slice(0, o);
        }
        e += (e.indexOf("?") === -1 ? "?" : "&") + i;
      }
      return e;
    }
  }
  function f(e, t, n, r, i, o, a, s, u, c, l) {
    i = i != null ? parseFloat(i) : null;
    if (Number.isNaN(r = parseInt(r || "0", 10))) {
      r = 0;
    }
    return {
      data: e,
      done: t,
      options: {
        range: u,
        vid: c,
        index: s,
        contentLength: r,
        age: i,
        startTime: o,
        firstByteTime: a,
        endTime: Date.now(),
        priOptions: l
      },
      response: n
    };
  }
  function d(e, t) {
    return Math.round(e * 8000 / t / 1024);
  }
  var mediaCoreEventKeys = require("media-core-event-keys") /*id: 379724*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var v = function (e) {
    babelRuntimeHelpers.inherits(a, e);
    var t;
    var n = babelRuntimeHelpers.possibleConstructorReturn(a);
    function a() {
      var e;
      babelRuntimeHelpers.classCallCheck(this, a);
      e = n.call(this);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_abortController", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_timeoutTimer", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_reader", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_response", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_aborted", false);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_index", -1);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_range", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_receivedLength", 0);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_running", false);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_logger", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_vid", "");
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_onProcessMinLen", 0);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_onCancel", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_priOptions", null);
      return e;
    }
    babelRuntimeHelpers.classProps(a, [{
      key: "load",
      value: function (e) {
        var n = this;
        var a = e.url;
        var s = e.vid;
        var c = e.timeout;
        var p = e.responseType;
        var v = e.onProgress;
        var _ = e.index;
        var y = e.onTimeout;
        var g = e.onCancel;
        var m = e.range;
        var b = e.transformResponse;
        var x = e.request;
        var E = e.params;
        var k = e.logger;
        var A = e.method;
        var S = e.headers;
        var T = e.body;
        var O = e.mode;
        var w = e.credentials;
        var R = e.cache;
        var L = e.redirect;
        var D = e.referrer;
        var C = e.referrerPolicy;
        var P = e.onProcessMinLen;
        var I = e.priOptions;
        this._logger = k;
        this._aborted = false;
        this._onProcessMinLen = P;
        this._onCancel = g;
        this._abortController = typeof AbortController != "undefined" && new AbortController();
        this._running = true;
        this._index = _;
        this._range = m || [0, 0];
        this._vid = s || a;
        this._priOptions = I || {};
        var B = {
          method: A,
          headers: S,
          body: T,
          mode: O,
          credentials: w,
          cache: R,
          redirect: L,
          referrer: D,
          referrerPolicy: C,
          signal: this._abortController?.signal
        };
        var U = false;
        clearTimeout(this._timeoutTimer);
        a = l(a, E);
        var M = u(m);
        if (M) {
          S = x ? x.headers : B.headers = B.headers || (Headers ? new Headers() : {});
          if (Headers && S instanceof Headers) {
            S.append("Range", M);
          } else {
            S.Range = M;
          }
        }
        if (c) {
          this._timeoutTimer = setTimeout(function () {
            U = true;
            n.cancel();
            if (y) {
              var e = new o(a, B, null, "timeout");
              e.isTimeout = true;
              y(e, {
                index: n._index,
                range: n._range,
                vid: n._vid,
                priOptions: n._priOptions
              });
            }
          }, c);
        }
        var j = Date.now();
        this._logger.debug("[fetch load start], index,", _, ",range,", m);
        return new Promise(function (e, t) {
          var s;
          fetch(x || a, x ? undefined : B).then((s = babelRuntimeHelpers.asyncWrapper(babelRuntimeHelpers.keysIterator().mark(function s(u) {
            var c;
            var l;
            var y;
            var g;
            return babelRuntimeHelpers.keysIterator().wrap(function (r) {
              while (true) {
                switch (r.prev = r.next) {
                  case 0:
                    clearTimeout(n._timeoutTimer);
                    n._response = u;
                    if (!n._aborted && !!n._running) {
                      r.next = 4;
                      break;
                    }
                    return r.abrupt("return");
                  case 4:
                    if (b) {
                      u = b(u, a) || u;
                    }
                    if (u.ok) {
                      r.next = 7;
                      break;
                    }
                    throw new o(a, B, u, "bad network response");
                  case 7:
                    c = Date.now();
                    if (p !== httpRequestConstants.responseTypes.TEXT) {
                      r.next = 15;
                      break;
                    }
                    r.next = 11;
                    return u.text();
                  case 11:
                  case 18:
                    l = r.sent;
                    n._running = false;
                    r.next = 37;
                    break;
                  case 15:
                    if (p !== httpRequestConstants.responseTypes.JSON) {
                      r.next = 22;
                      break;
                    }
                    r.next = 18;
                    return u.json();
                  case 22:
                    if (!v) {
                      r.next = 29;
                      break;
                    }
                    n.resolve = e;
                    n.reject = t;
                    n._loadChunk(u, v, j, c);
                    return r.abrupt("return");
                  case 29:
                    r.next = 31;
                    return u.arrayBuffer();
                  case 31:
                    l = new Uint8Array(l = r.sent);
                    n._running = false;
                    y = Date.now() - j;
                    g = d(l.byteLength, y);
                    n.emit(mediaCoreEventKeys.mediaCoreEventKeys.REAL_TIME_SPEED, {
                      speed: g,
                      len: l.byteLength,
                      time: y,
                      vid: n._vid,
                      index: n._index,
                      range: n._range,
                      priOptions: n._priOptions
                    });
                  case 37:
                    n._logger.debug("[fetch load end], index,", _, ",range,", m);
                    e(f(l, true, u, u.headers.get("Content-Length"), u.headers.get("age"), j, c, _, m, n._vid, n._priOptions));
                  case 39:
                  case "end":
                    return r.stop();
                }
              }
            }, s);
          })), function (e) {
            return s.apply(this, arguments);
          })).catch(function (e) {
            clearTimeout(n._timeoutTimer);
            n._running = false;
            if (!n._aborted || U) {
              (e = e instanceof o ? e : new o(a, B, null, e?.message)).startTime = j;
              e.endTime = Date.now();
              e.isTimeout = U;
              e.options = {
                index: n._index,
                range: n._range,
                vid: n._vid,
                priOptions: n._priOptions
              };
              t(e);
            }
          });
        });
      }
    }, {
      key: "cancel",
      value: (t = babelRuntimeHelpers.asyncWrapper(babelRuntimeHelpers.keysIterator().mark(function e() {
        return babelRuntimeHelpers.keysIterator().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                if (!this._aborted) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                this._aborted = true;
                this._running = false;
                if (!this._response) {
                  e.next = 14;
                  break;
                }
                e.prev = 5;
                if (!this._reader) {
                  e.next = 9;
                  break;
                }
                e.next = 9;
                return this._reader.cancel();
              case 9:
                e.next = 13;
                break;
              case 11:
                e.prev = 11;
                e.t0 = e.catch(5);
              case 13:
                this._response = this._reader = null;
              case 14:
                if (this._abortController) {
                  try {
                    this._abortController.abort();
                  } catch (e) {}
                  this._abortController = null;
                }
                if (this._onCancel) {
                  this._onCancel({
                    index: this._index,
                    range: this._range,
                    vid: this._vid,
                    priOptions: this._priOptions
                  });
                }
              case 16:
              case "end":
                return e.stop();
            }
          }
        }, e, this, [[5, 11]]);
      })), function () {
        return t.apply(this, arguments);
      })
    }, {
      key: "_loadChunk",
      value: function (e, t, n, i) {
        var a;
        var s;
        var u;
        var c;
        var l = this;
        if (!e.body || !e.body.getReader) {
          this._running = false;
          var p = new o(e.url, "", e, "onProgress of bad response.body.getReader");
          p.options = {
            index: this._index,
            range: this._range,
            vid: this._vid,
            priOptions: this._priOptions
          };
          this.reject(p);
          return;
        }
        if (this._onProcessMinLen > 0) {
          this._cache = new Uint8Array(2097152);
          this._writeIdx = 0;
        }
        var v = this._reader = e.body.getReader();
        a = babelRuntimeHelpers.asyncWrapper(babelRuntimeHelpers.keysIterator().mark(function o() {
          var p;
          var y;
          var g;
          var m;
          var b;
          var x;
          var E;
          return babelRuntimeHelpers.keysIterator().wrap(function (r) {
            while (true) {
              switch (r.prev = r.next) {
                case 0:
                  u = Date.now();
                  r.prev = 1;
                  r.next = 4;
                  return v.read();
                case 4:
                  s = r.sent;
                  c = Date.now();
                  r.next = 13;
                  break;
                case 8:
                  r.prev = 8;
                  r.t0 = r.catch(1);
                  c = Date.now();
                  if (!l._aborted) {
                    l._running = false;
                    r.t0.options = {
                      index: l._index,
                      range: l._range,
                      vid: l._vid,
                      priOptions: l._priOptions
                    };
                    l.reject(r.t0);
                  }
                  return r.abrupt("return");
                case 13:
                  y = (p = l._range?.length > 0 ? l._range[0] : 0) + l._receivedLength;
                  if (!l._aborted) {
                    r.next = 19;
                    break;
                  }
                  l._running = false;
                  t(undefined, false, {
                    range: [y, y],
                    vid: l._vid,
                    index: l._index,
                    startTime: u,
                    endTime: c,
                    st: n,
                    firstByteTime: i,
                    priOptions: l._priOptions
                  }, e);
                  return r.abrupt("return");
                case 19:
                  g = s.value ? s.value.byteLength : 0;
                  l._receivedLength += g;
                  l._logger.debug("【fetchLoader,onProgress call】,task,", l._range, ", start,", y, ", end,", p + l._receivedLength, ", done,", s.done);
                  if (l._onProcessMinLen > 0) {
                    if (l._writeIdx + g >= l._onProcessMinLen || s.done) {
                      (m = new Uint8Array(l._writeIdx + g)).set(l._cache.slice(0, l._writeIdx), 0);
                      if (g > 0) {
                        m.set(s.value, l._writeIdx);
                      }
                      l._writeIdx = 0;
                      l._logger.debug("【fetchLoader,onProgress enough】,done,", s.done, ",len,", m.byteLength, ", writeIdx,", l._writeIdx);
                    } else if (g > 0 && l._writeIdx + g < 2097152) {
                      l._cache.set(s.value, l._writeIdx);
                      l._writeIdx += g;
                      l._logger.debug("【fetchLoader,onProgress cache】,len,", g, ", writeIdx,", l._writeIdx);
                    } else if (g > 0) {
                      b = new Uint8Array(l._writeIdx + g + 2048);
                      l._logger.debug("【fetchLoader,onProgress extra start】,size,", l._writeIdx + g + 2048, ", datalen,", g, ", writeIdx,", l._writeIdx);
                      b.set(l._cache.slice(0, l._writeIdx), 0);
                      if (g > 0) {
                        b.set(s.value, l._writeIdx);
                      }
                      l._writeIdx += g;
                      delete l._cache;
                      l._cache = b;
                      l._logger.debug("【fetchLoader,onProgress extra end】,len,", g, ", writeIdx,", l._writeIdx);
                    }
                  } else {
                    m = s.value;
                  }
                  if (m && m.byteLength > 0 || s.done) {
                    t(m, s.done, {
                      range: [l._range[0] + l._receivedLength - (m ? m.byteLength : 0), l._range[0] + l._receivedLength],
                      vid: l._vid,
                      index: l._index,
                      startTime: u,
                      endTime: c,
                      st: n,
                      firstByteTime: i,
                      priOptions: l._priOptions
                    }, e);
                  }
                  if (s.done) {
                    x = Date.now() - n;
                    E = d(l._receivedLength, x);
                    l.emit(mediaCoreEventKeys.mediaCoreEventKeys.REAL_TIME_SPEED, {
                      speed: E,
                      len: l._receivedLength,
                      time: x,
                      vid: l._vid,
                      index: l._index,
                      range: l._range,
                      priOptions: l._priOptions
                    });
                    l._running = false;
                    l._logger.debug("[fetchLoader onProgress end],task,", l._range, ",done,", s.done);
                    l.resolve(f(s, true, e, e.headers.get("Content-Length"), e.headers.get("age"), n, i, l._index, l._range, l._vid, l._priOptions));
                  } else {
                    _();
                  }
                case 25:
                case "end":
                  return r.stop();
              }
            }
          }, o, null, [[1, 8]]);
        }));
        function _() {
          return a.apply(this, arguments);
        }
        _();
      }
    }, {
      key: "receiveLen",
      get: function () {
        return this._receivedLength;
      }
    }, {
      key: "running",
      get: function () {
        return this._running;
      },
      set: function (e) {
        this._running = e;
      }
    }], [{
      key: "isSupported",
      value: function () {
        return typeof fetch != "undefined";
      }
    }]);
    return a;
  }(eventEmitterWrapper_1.eventEmitter);
  var _ = function (e) {
    babelRuntimeHelpers.inherits(n, e);
    var t = babelRuntimeHelpers.possibleConstructorReturn(n);
    function n() {
      var e;
      babelRuntimeHelpers.classCallCheck(this, n);
      e = t.call(this);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_xhr", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_aborted", false);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_timeoutTimer", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_range", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_receivedLength", 0);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_url", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_onProgress", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_index", -1);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_headers", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_currentChunkSizeKB", 384);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_timeout", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_xhr", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_withCredentials", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_startTime", -1);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_loadCompleteResolve", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_loadCompleteReject", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_runing", false);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_logger", false);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_vid", "");
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_responseType", undefined);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_credentials", undefined);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_method", undefined);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_transformResponse", undefined);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_firstRtt", undefined);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_onCancel", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(e), "_priOptions", null);
      return e;
    }
    babelRuntimeHelpers.classProps(n, [{
      key: "load",
      value: function (e) {
        var t = this;
        clearTimeout(this._timeoutTimer);
        this._logger = e.logger;
        this._range = e.range;
        this._onProgress = e.onProgress;
        this._index = e.index;
        this._headers = e.headers;
        this._withCredentials = e.credentials === "include" || e.credentials === "same-origin";
        this._body = e.body || null;
        if (e.method) {
          this._method = e.method;
        }
        this._timeout = e.timeout || null;
        this._runing = true;
        this._vid = e.vid || e.url;
        this._responseType = e.responseType;
        this._firstRtt = -1;
        this._onTimeout = e.onTimeout;
        this._onCancel = e.onCancel;
        this._request = e.request;
        this._priOptions = e.priOptions || {};
        this._logger.debug("【xhrLoader task】, range", this._range);
        this._url = l(e.url, e.params);
        var n = Date.now();
        return new Promise(function (e, n) {
          t._loadCompleteResolve = e;
          t._loadCompleteReject = n;
          t._startLoad();
        }).catch(function (e) {
          clearTimeout(t._timeoutTimer);
          t._runing = false;
          if (!t._aborted) {
            (e = e instanceof o ? e : new o(t._url, t._request)).startTime = n;
            e.endTime = Date.now();
            e.options = {
              index: t._index,
              vid: t._vid,
              priOptions: t._priOptions
            };
            throw e;
          }
        });
      }
    }, {
      key: "_startLoad",
      value: function () {
        var e = null;
        if (this._responseType === httpRequestConstants.responseTypes.ARRAY_BUFFER && this._range && this._range.length > 1) {
          if (this._onProgress) {
            this._firstRtt = -1;
            var t = this._currentChunkSizeKB * 1024;
            var n = this._range[0] + this._receivedLength;
            var r = this._range[1];
            if (t < this._range[1] - n) {
              r = n + t;
            }
            e = [n, r];
            this._logger.debug("[xhr_loader->],tast :", this._range, ", SubRange, ", e);
          } else {
            e = this._range;
            this._logger.debug("[xhr_loader->],tast :", this._range, ", allRange, ", e);
          }
        }
        this._internalOpen(e);
      }
    }, {
      key: "_internalOpen",
      value: function (e) {
        var t = this;
        try {
          this._startTime = Date.now();
          var n = this._xhr = new XMLHttpRequest();
          n.open(this._method || "GET", this._url, true);
          n.responseType = this._responseType;
          if (this._timeout) {
            n.timeout = this._timeout;
          }
          n.withCredentials = this._withCredentials;
          n.onload = this._onLoad.bind(this);
          n.onreadystatechange = this._onReadyStatechange.bind(this);
          n.onerror = function (e) {
            t._running = false;
            var a = new o(t._url, t._request, e == null ? undefined : e.currentTarget?.response, "xhr.onerror.status:" + (e == null ? undefined : e.currentTarget?.status) + ",statusText," + (e == null ? undefined : e.currentTarget?.statusText));
            a.options = {
              index: t._index,
              range: t._range,
              vid: t._vid,
              priOptions: t._priOptions
            };
            t._loadCompleteReject(a);
          };
          n.ontimeout = function (e) {
            t.cancel();
            var n = new o(t._url, t._request, {
              status: 408
            }, "timeout");
            if (t._onTimeout) {
              n.isTimeout = true;
              t._onTimeout(n, {
                index: t._index,
                range: t._range,
                vid: t._vid,
                priOptions: t._priOptions
              });
            }
            n.options = {
              index: t._index,
              range: t._range,
              vid: t._vid,
              priOptions: t._priOptions
            };
            t._loadCompleteReject(n);
          };
          var r = this._headers || {};
          var i = u(e);
          if (i) {
            r.Range = i;
          }
          if (r) {
            Object.keys(r).forEach(function (e) {
              n.setRequestHeader(e, r[e]);
            });
          }
          this._logger.debug("[xhr.send->] tast,", this._range, ",load sub range, ", e);
          n.send(this._body);
        } catch (t) {
          t.options = {
            index: this._index,
            range: e,
            vid: this._vid,
            priOptions: this._priOptions
          };
          this._loadCompleteReject(t);
        }
      }
    }, {
      key: "_onReadyStatechange",
      value: function (e) {
        if (e.target.readyState === 2 && this._firstRtt < 0) {
          this._firstRtt = Date.now();
        }
      }
    }, {
      key: "_onLoad",
      value: function (e) {
        var t = e.target.status;
        if (t < 200 || t > 299) {
          var n = new o(this._url, null, babelRuntimeHelpers.objectSpread(babelRuntimeHelpers.objectSpread({}, e.target.response), {}, {
            status: t
          }), "bad response,status:" + t);
          n.options = {
            index: this._index,
            range: this._range,
            vid: this._vid,
            priOptions: this._priOptions
          };
          return this._loadCompleteReject(n);
        }
        var a = null;
        var s = false;
        var u = this._range?.length > 0 ? this._range[0] : 0;
        if (this._responseType === httpRequestConstants.responseTypes.ARRAY_BUFFER) {
          var l;
          var v = new Uint8Array(e.target.response);
          l = u + this._receivedLength;
          if (v && v.byteLength > 0) {
            this._receivedLength += v.byteLength;
            var _ = Date.now() - this._startTime;
            var y = d(this._receivedLength, _);
            this.emit(mediaCoreEventKeys.mediaCoreEventKeys.REAL_TIME_SPEED, {
              speed: y,
              len: this._receivedLength,
              time: _,
              vid: this._vid,
              index: this._index,
              range: [l, u + this._receivedLength],
              priOptions: this._priOptions
            });
          }
          a = v;
          s = !(this._range?.length > 1) || !this._range[1] || !(this._receivedLength < this._range[1] - this._range[0]);
          this._logger.debug("[xhr load done->], tast :", this._range, ", start", l, "end ", u + this._receivedLength, ",dataLen,", v ? v.byteLength : 0, ",receivedLength", this._receivedLength, ",index,", this._index, ", done,", s);
        } else {
          s = true;
          a = e.target.response;
        }
        var g = {
          ok: t >= 200 && t < 300,
          status: t,
          statusText: this._xhr.statusText,
          url: this._xhr.responseURL,
          headers: this._getHeaders(this._xhr),
          body: this._xhr.response
        };
        if (this._transformResponse) {
          g = this._transformResponse(g, this._url) || g;
        }
        if (this._onProgress) {
          this._onProgress(a, s, {
            index: this._index,
            vid: this._vid,
            range: [l, u + this._receivedLength],
            startTime: this._startTime,
            endTime: Date.now(),
            priOptions: this._priOptions
          }, g);
        }
        if (s) {
          this._runing = false;
          if (this._loadCompleteResolve) {
            this._loadCompleteResolve(f(this._onProgress ? null : a, s, g, g.headers["content-length"], g.headers.age, this._startTime, this._firstRtt, this._index, this._range, this._vid, this._priOptions));
          }
        } else {
          this._startLoad();
        }
      }
    }, {
      key: "cancel",
      value: function () {
        if (!this._aborted && (this._aborted = true, this._runing = false, babelRuntimeHelpers.superGet(babelRuntimeHelpers.getProto(n.prototype), "removeAllListeners", this).call(this), this._onCancel && this._onCancel({
          index: this._index,
          range: this._range,
          vid: this._vid,
          priOptions: this._priOptions
        }), this._xhr)) {
          return this._xhr.abort();
        }
      }
    }, {
      key: "receiveLen",
      get: function () {
        return this._receivedLength;
      }
    }, {
      key: "running",
      get: function () {
        return this._running;
      },
      set: function (e) {
        this._running = e;
      }
    }, {
      key: "_getHeaders",
      value: function (e) {
        var t;
        var n = e.getAllResponseHeaders().trim().split("\r\n");
        var i = {};
        var o = babelRuntimeHelpers.createIterator(n);
        try {
          for (o.s(); !(t = o.n()).done;) {
            var a = t.value.split(": ");
            i[a[0].toLowerCase()] = a.slice(1).join(": ");
          }
        } catch (e) {
          o.e(e);
        } finally {
          o.f();
        }
        return i;
      }
    }], [{
      key: "isSupported",
      value: function () {
        return typeof XMLHttpRequest != "undefined";
      }
    }]);
    return n;
  }(eventEmitterWrapper_1.eventEmitter);
  var deferredPromiseUtils = require("deferred-promise-utils") /*id: 373813*/;
  var customLoggerClass = require("custom-logger-class") /*id: 246025*/;
  var m = ["retry", "retryDelay", "onRetryError", "transformError"];
  var b = function () {
    var e;
    function t(e, n) {
      babelRuntimeHelpers.classCallCheck(this, t);
      this.promise = deferredPromiseUtils.createDeferred();
      this.alive = !!n.onProgress;
      n.logger ||= new customLoggerClass.Logger("Loader");
      this._loaderType = e;
      this._loader = e === httpRequestConstants.transportTypes.FETCH && typeof fetch != "undefined" ? new v() : new _();
      this._config = n;
      this._retryCount = 0;
      this._retryTimer = null;
      this._canceled = false;
      this._retryCheckFunc = n.retryCheckFunc;
      this._logger = n.logger;
    }
    babelRuntimeHelpers.classProps(t, [{
      key: "exec",
      value: function () {
        var e;
        var t = this;
        var n = this._config;
        var i = n.retry;
        var o = n.retryDelay;
        var a = n.onRetryError;
        var s = n.transformError;
        var u = babelRuntimeHelpers.objectRest(n, m);
        e = babelRuntimeHelpers.asyncWrapper(babelRuntimeHelpers.keysIterator().mark(function e() {
          var n;
          var l;
          var f;
          return babelRuntimeHelpers.keysIterator().wrap(function (e) {
            while (true) {
              switch (e.prev = e.next) {
                case 0:
                  e.prev = 0;
                  e.next = 3;
                  return t._loader.load(u);
                case 3:
                  n = e.sent;
                  t.promise.resolve(n);
                  e.next = 27;
                  break;
                case 7:
                  e.prev = 7;
                  e.t0 = e.catch(0);
                  t._loader.running = false;
                  t._logger.debug("[task request catch err]", e.t0);
                  if (!t._canceled) {
                    e.next = 13;
                    break;
                  }
                  return e.abrupt("return");
                case 13:
                  e.t0.loaderType = t._loaderType;
                  e.t0.retryCount = t._retryCount;
                  l = e.t0;
                  if (s) {
                    l = s(l) || l;
                  }
                  if (a && t._retryCount > 0) {
                    a(l, t._retryCount, {
                      index: u.index,
                      vid: u.vid,
                      range: u.range,
                      priOptions: u.priOptions
                    });
                  }
                  t._retryCount++;
                  f = true;
                  if (t._retryCheckFunc) {
                    f = t._retryCheckFunc(e.t0);
                  }
                  if (!f || !(t._retryCount <= i)) {
                    e.next = 26;
                    break;
                  }
                  clearTimeout(t._retryTimer);
                  t._logger.debug("[task request setTimeout],retry", t._retryCount, ",retry range,", u.range);
                  t._retryTimer = setTimeout(c, o);
                  return e.abrupt("return");
                case 26:
                  t.promise.reject(l);
                case 27:
                case "end":
                  return e.stop();
              }
            }
          }, e, null, [[0, 7]]);
        }));
        function c() {
          return e.apply(this, arguments);
        }
        c();
        return this.promise;
      }
    }, {
      key: "cancel",
      value: (e = babelRuntimeHelpers.asyncWrapper(babelRuntimeHelpers.keysIterator().mark(function e() {
        return babelRuntimeHelpers.keysIterator().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                clearTimeout(this._retryTimer);
                this._canceled = true;
                this._loader.running = false;
                return e.abrupt("return", this._loader.cancel());
              case 4:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      })), function () {
        return e.apply(this, arguments);
      })
    }, {
      key: "running",
      get: function () {
        return this._loader && this._loader.running;
      }
    }, {
      key: "loader",
      get: function () {
        return this._loader;
      }
    }]);
    return t;
  }();
  var mediaPlaybackUtils = require("media-playback-utils") /*id: 53628*/;
  var E = function (e) {
    babelRuntimeHelpers.inherits(o, e);
    var t;
    var n = babelRuntimeHelpers.possibleConstructorReturn(o);
    function o(e) {
      var t;
      babelRuntimeHelpers.classCallCheck(this, o);
      t = n.call(this, e);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(t), "type", httpRequestConstants.transportTypes.FETCH);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(t), "_queue", []);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(t), "_alive", []);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(t), "_currentTask", null);
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(t), "_finnalUrl", "");
      babelRuntimeHelpers.defineProperty(babelRuntimeHelpers.checkThis(t), "_config", undefined);
      t._config = babelRuntimeHelpers.objectSpread({
        loaderType: httpRequestConstants.transportTypes.FETCH,
        retry: 0,
        retryDelay: 0,
        timeout: 0,
        request: null,
        onTimeout: undefined,
        onProgress: undefined,
        onRetryError: undefined,
        transformRequest: undefined,
        transformResponse: undefined,
        transformError: undefined,
        responseType: httpRequestConstants.responseTypes.TEXT,
        range: undefined,
        url: "",
        params: undefined,
        method: "GET",
        headers: {},
        body: undefined,
        mode: undefined,
        credentials: undefined,
        cache: undefined,
        redirect: undefined,
        referrer: undefined,
        referrerPolicy: undefined,
        integrity: undefined,
        onProcessMinLen: 0
      }, e);
      if (t._config.loaderType === httpRequestConstants.transportTypes.XHR || !v.isSupported()) {
        t.type = httpRequestConstants.transportTypes.XHR;
      }
      t.log = e.logger;
      return t;
    }
    babelRuntimeHelpers.classProps(o, [{
      key: "isFetch",
      value: function () {
        return this.type === httpRequestConstants.transportTypes.FETCH;
      }
    }, {
      key: "load",
      value: function (e) {
        var t = this;
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (typeof e != "string" && e) {
          n = e;
        } else {
          n.url = e || n.url || this._config.url;
        }
        if ((n = Object.assign({}, this._config, n)).params) {
          n.params = Object.assign({}, n.params);
        }
        if (n.headers && s(n.headers)) {
          n.headers = Object.assign({}, n.headers);
        }
        if (n.body && s(n.body)) {
          n.body = Object.assign({}, n.body);
        }
        if (n.transformRequest) {
          n = n.transformRequest(n) || n;
        }
        n.logger = this.log;
        var r = new b(this.type, n);
        r.loader.on(mediaCoreEventKeys.mediaCoreEventKeys.REAL_TIME_SPEED, function (e) {
          t.emit(mediaCoreEventKeys.mediaCoreEventKeys.REAL_TIME_SPEED, e);
        });
        this._queue.push(r);
        if (this._queue.length === 1 && (!this._currentTask || !this._currentTask.running)) {
          this._processTask();
        }
        return r.promise;
      }
    }, {
      key: "cancel",
      value: (t = babelRuntimeHelpers.asyncWrapper(babelRuntimeHelpers.keysIterator().mark(function e() {
        var t;
        return babelRuntimeHelpers.keysIterator().wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                t = this._queue.map(function (e) {
                  return e.cancel();
                }).concat(this._alive.map(function (e) {
                  return e.cancel();
                }));
                if (this._currentTask) {
                  t.push(this._currentTask.cancel());
                }
                this._queue = [];
                this._alive = [];
                e.next = 6;
                return Promise.all(t);
              case 6:
                e.next = 8;
                return mediaPlaybackUtils.delay();
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
      key: "_processTask",
      value: function () {
        var e = this;
        this._currentTask = this._queue.shift();
        if (this._currentTask) {
          if (this._currentTask.alive) {
            this._alive.push(this._currentTask);
          }
          var t = this._currentTask.exec().catch(function (e) {});
          if (t && typeof t.finally == "function") {
            t.finally(function () {
              var t;
              if ((t = e._currentTask) !== null && t !== undefined && t.alive && e._alive?.length > 0) {
                e._alive = e._alive.filter(function (t) {
                  return t && t !== e._currentTask;
                });
              }
              e._processTask();
            });
          }
        }
      }
    }], [{
      key: "isFetchSupport",
      value: function () {
        return v.isSupported();
      }
    }]);
    return o;
  }(eventEmitterWrapper_1.eventEmitter);
  require.d(exports, {
    HttpLoader: function () {
      return E;
    }
  });
}