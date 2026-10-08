// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'xy' to 'createSseClient'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 474279
         */
module.exports = function (module, exports, require) {
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  function o(e, t) {
    if (!e || function (e) {
      if (e.startsWith("//")) {
        return true;
      }
      try {
        new URL(e);
        return true;
      } catch {
        return false;
      }
    }(t)) {
      return t;
    } else {
      return new URL(t, e).toString();
    }
  }
  var a = {
    CONNECTING: 0,
    OPEN: 1,
    CLOSED: 2
  };
  let l = {
    length(e) {
      let t = 0;
      let n = 0;
      for (let i = 0; i < e.length; ++i) {
        if ((n = e.charCodeAt(i)) < 128) {
          t += 1;
        } else if (n < 2048) {
          t += 2;
        } else if ((n & 64512) == 55296 && (e.charCodeAt(i + 1) & 64512) == 56320) {
          ++i;
          t += 4;
        } else {
          t += 3;
        }
      }
      return t;
    },
    read(e, t, n) {
      if (n - t < 1) {
        return "";
      }
      let i = "";
      for (let o = t; o < n;) {
        let t = e[o++];
        if (t <= 127) {
          i += String.fromCharCode(t);
        } else if (t >= 192 && t < 224) {
          i += String.fromCharCode((t & 31) << 6 | e[o++] & 63);
        } else if (t >= 224 && t < 240) {
          i += String.fromCharCode((t & 15) << 12 | (e[o++] & 63) << 6 | e[o++] & 63);
        } else if (t >= 240) {
          let n = ((t & 7) << 18 | (e[o++] & 63) << 12 | (e[o++] & 63) << 6 | e[o++] & 63) - 65536;
          i += String.fromCharCode(55296 + (n >> 10));
          i += String.fromCharCode(56320 + (n & 1023));
        }
      }
      return i;
    },
    write(e, t, n) {
      let i;
      let o;
      let a = n;
      for (let a = 0; a < e.length; ++a) {
        if ((i = e.charCodeAt(a)) < 128) {
          t[n++] = i;
        } else {
          if (i < 2048) {
            t[n++] = i >> 6 | 192;
          } else {
            if ((i & 64512) == 55296 && ((o = e.charCodeAt(a + 1)) & 64512) == 56320) {
              i = 65536 + ((i & 1023) << 10) + (o & 1023);
              ++a;
              t[n++] = i >> 18 | 240;
              t[n++] = i >> 12 & 63 | 128;
            } else {
              t[n++] = i >> 12 | 224;
            }
            t[n++] = i >> 6 & 63 | 128;
          }
          t[n++] = i & 63 | 128;
        }
      }
      return n - a;
    }
  };
  function r(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let s = {
    decode: e => e ? l.read(e, 0, e.byteLength) : ""
  };
  class d {
    feed(e) {
      this._append(e);
      this._readLineLoop();
    }
    _new() {
      return {
        data: undefined,
        event: undefined,
        id: undefined,
        retry: undefined
      };
    }
    _readLineLoop() {
      let e = this._buffer.length;
      if (e) {
        for (this._line.end !== -1 && (this._line.start = 0); this._pos < e && (this._line.end = -1, this._readLine(), this._line.end !== -1);) {
          this._readField(this._buffer.subarray(this._line.start, this._line.end));
          this._line.start = this._pos;
          this._fieldLen = -1;
          if (this._line.start !== 0) {
            this._buffer = this._buffer.subarray(this._line.start);
            this._pos -= this._line.start;
            this._line.start = this._pos;
          }
        }
      }
    }
    _readLine() {
      let e = this._buffer.length;
      while (this._pos < e && this._line.end === -1) {
        switch (this._buffer[this._pos]) {
          case 58:
            if (this._fieldLen === -1) {
              this._fieldLen = this._pos - this._line.start;
            }
            break;
          case 13:
            this._line.end = this._pos;
            this._skipTrailingNewLine();
            break;
          case 10:
            this._line.end = this._pos;
        }
        this._pos += 1;
      }
    }
    _skipTrailingNewLine() {
      if (this._buffer[this._pos + 1] === 10) {
        this._pos++;
      }
    }
    _readField(e) {
      if (e.length === 0) {
        this._onMessage(this._message);
        this._message = this._new();
      }
      if (this._fieldLen === -1) {
        let t = this._decoder.decode(e);
        this._writeField(t, "");
        return;
      }
      if (this._fieldLen === e.length - 1) {
        let t = this._decoder.decode(e.subarray(0, this._fieldLen));
        this._writeField(t, "");
        return;
      }
      if (this._fieldLen) {
        let t = this._decoder.decode(e.subarray(0, this._fieldLen));
        let n = this._fieldLen + 1;
        if (e[this._fieldLen + 1] === 32) {
          n += 1;
        }
        let i = this._decoder.decode(e.subarray(n));
        this._writeField(t, i);
        return;
      }
    }
    _writeField(e, t) {
      switch (e) {
        case "data":
          if (this._message.data !== undefined) {
            this._message.data = `${this._message.data}
${t}`;
          } else {
            this._message.data = t;
          }
          break;
        case "event":
          this._message.event = t;
          break;
        case "id":
          this._message.id = t;
          break;
        case "retry":
          this._message.retry = function (e) {
            let t = Number(e);
            if (!Number.isNaN(t)) {
              return t;
            }
          }(t);
      }
    }
    _append(e) {
      let t = this._buffer.length;
      let n = new Uint8Array(t + e.length);
      n.set(this._buffer);
      n.set(e, t);
      this._buffer = n;
    }
    constructor(e, t = s) {
      this._onMessage = e;
      this._decoder = t;
      r(this, "_buffer", new Uint8Array());
      r(this, "_pos", undefined);
      r(this, "_fieldLen", undefined);
      r(this, "_line", undefined);
      r(this, "_message", undefined);
      this._message = this._new();
      this._line = {
        start: 0,
        end: -1
      };
      this._fieldLen = -1;
      this._pos = 0;
      this.feed = this.feed.bind(this);
    }
  }
  async function c(e, t) {
    let n;
    let i = e.getReader();
    let o = new d(t);
    while (!(n = await i.read()).done) {
      o.feed(n.value);
    }
  }
  var sseConstants = require("sse-constants") /*id: 259486*/;
  function h(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let p = class {
    async _startFetch() {
      try {
        this._readyState = a.CONNECTING;
        let e = new AbortController();
        let {
          headers: t
        } = this._requestOptions;
        if (t instanceof Headers && this._lastEventId) {
          t.set(sseConstants.lastEventId, String(this._lastEventId));
        } else {
          t = Array.isArray(t) ? [...t, [sseConstants.lastEventId, String(this._lastEventId)]] : {
            ...t,
            [sseConstants.lastEventId]: String(this._lastEventId)
          };
        }
        let {
          openInterceptor: n,
          ...i
        } = this._requestOptions;
        this._fetchInstance = fetch(this._input, {
          ...i,
          headers: t,
          signal: e.signal
        });
        this._abortController = e;
        let o = await this._fetchInstance;
        await (n == null ? undefined : n(o));
        this._readyState = a.OPEN;
        await this._onOpen(o);
      } catch (e) {
        this._onError(e);
      }
    }
    async _onOpen(e) {
      let t = e.headers.get("content-type");
      if (!(t == null ? undefined : t.startsWith(sseConstants.eventStreamMimeType))) {
        throw Error("Invalid Content-Type");
      }
      if (!(e == null ? undefined : e.ok) || !(e == null ? undefined : e.body)) {
        throw Error("Invalid Response");
      }
      this._emitter.emit("open", e);
      await c(e.body, this._onMessage.bind(this));
      this._emitter.emit("close", "done");
    }
    _onError(e) {
      this._fetchInstance = undefined;
      this._readyState = a.CLOSED;
      this._emitter.emit("error", e);
    }
    _onMessage(e) {
      this._lastEventId = Number(e.id);
      this._emitter.emit("message", e);
    }
    get lastEventId() {
      return this._lastEventId;
    }
    get isAborted() {
      var e;
      return !!((e = this._abortController) === null || e === undefined ? undefined : e.signal.aborted);
    }
    get abortReason() {
      var e;
      if ((e = this._abortController) === null || e === undefined) {
        return undefined;
      } else {
        return e.signal.reason;
      }
    }
    get readyState() {
      return this._readyState;
    }
    start() {
      if (!this._fetchInstance) {
        this._startFetch();
      }
    }
    on(e, t, n) {
      this._emitter.on(e, t, n);
    }
    off(e, t, n, i) {
      this._emitter.off(e, t, n, i);
    }
    cancel(e) {
      var t;
      if ((t = this._abortController) !== null && t !== undefined) {
        t.abort(e);
      }
      this._fetchInstance = undefined;
    }
    constructor(e, t) {
      this._input = e;
      this._requestOptions = t;
      h(this, "CONNECTING", a.CONNECTING);
      h(this, "OPEN", a.OPEN);
      h(this, "CLOSED", a.CLOSED);
      h(this, "_emitter", undefined);
      h(this, "_readyState", a.CLOSED);
      h(this, "_lastEventId", undefined);
      h(this, "_fetchInstance", undefined);
      h(this, "_abortController", undefined);
      this._emitter = new eventEmitterWrapper_1.eventEmitter();
      this._startFetch();
    }
  };
  let v = (e, t) => {
    if (typeof e == "string") {
      e = o("", e);
    } else if (e instanceof Request) {
      e = new Request(o("", e.url), e);
    }
    let {
      onClose: n,
      onOpen: i,
      onError: a,
      onMessage: l,
      ...r
    } = t;
    let s = new p(e, r);
    if (i) {
      s.on("open", i);
    }
    if (n) {
      s.on("close", n);
    }
    if (l) {
      s.on("message", l);
    }
    if (a) {
      s.on("error", a);
    }
    return s;
  };
  require.d(exports, {
    createSseClient: function () {
      return v;
    }
  });
}