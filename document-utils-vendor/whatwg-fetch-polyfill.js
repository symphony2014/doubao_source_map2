// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 281626
         */
module.exports = function (module, exports, require) {
  var r = typeof self != "undefined" ? self : this;
  var n = function () {
    function e() {
      this.fetch = false;
      this.DOMException = r.DOMException;
    }
    e.prototype = r;
    return new e();
  }();
  (function (e) {
    var t = {
      searchParams: "URLSearchParams" in n,
      iterable: "Symbol" in n && "iterator" in Symbol,
      blob: "FileReader" in n && "Blob" in n && function () {
        try {
          new Blob();
          return true;
        } catch (e) {
          return false;
        }
      }(),
      formData: "FormData" in n,
      arrayBuffer: "ArrayBuffer" in n
    };
    if (t.arrayBuffer) {
      var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"];
      var i = ArrayBuffer.isView || function (e) {
        return e && r.indexOf(Object.prototype.toString.call(e)) > -1;
      };
    }
    function o(e) {
      if (typeof e != "string") {
        e = String(e);
      }
      if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) {
        throw TypeError("Invalid character in header field name");
      }
      return e.toLowerCase();
    }
    function a(e) {
      if (typeof e != "string") {
        e = String(e);
      }
      return e;
    }
    function s(e) {
      var r = {
        next: function () {
          var t = e.shift();
          return {
            done: t === undefined,
            value: t
          };
        }
      };
      if (t.iterable) {
        r[Symbol.iterator] = function () {
          return r;
        };
      }
      return r;
    }
    function l(e) {
      this.map = {};
      if (e instanceof l) {
        e.forEach(function (e, t) {
          this.append(t, e);
        }, this);
      } else if (Array.isArray(e)) {
        e.forEach(function (e) {
          this.append(e[0], e[1]);
        }, this);
      } else if (e) {
        Object.getOwnPropertyNames(e).forEach(function (t) {
          this.append(t, e[t]);
        }, this);
      }
    }
    function u(e) {
      if (e.bodyUsed) {
        return Promise.reject(TypeError("Already read"));
      }
      e.bodyUsed = true;
    }
    function c(e) {
      return new Promise(function (t, r) {
        e.onload = function () {
          t(e.result);
        };
        e.onerror = function () {
          r(e.error);
        };
      });
    }
    function h(e) {
      var t = new FileReader();
      var r = c(t);
      t.readAsArrayBuffer(e);
      return r;
    }
    function d(e) {
      if (e.slice) {
        return e.slice(0);
      }
      var t = new Uint8Array(e.byteLength);
      t.set(new Uint8Array(e));
      return t.buffer;
    }
    function f() {
      this.bodyUsed = false;
      this._initBody = function (e) {
        this._bodyInit = e;
        if (e) {
          if (typeof e == "string") {
            this._bodyText = e;
          } else if (t.blob && Blob.prototype.isPrototypeOf(e)) {
            this._bodyBlob = e;
          } else if (t.formData && FormData.prototype.isPrototypeOf(e)) {
            this._bodyFormData = e;
          } else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) {
            this._bodyText = e.toString();
          } else {
            var r;
            if (t.arrayBuffer && t.blob && (r = e) && DataView.prototype.isPrototypeOf(r)) {
              this._bodyArrayBuffer = d(e.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (t.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || i(e))) {
              this._bodyArrayBuffer = d(e);
            } else {
              this._bodyText = e = Object.prototype.toString.call(e);
            }
          }
        } else {
          this._bodyText = "";
        }
        if (!this.headers.get("content-type")) {
          if (typeof e == "string") {
            this.headers.set("content-type", "text/plain;charset=UTF-8");
          } else if (this._bodyBlob && this._bodyBlob.type) {
            this.headers.set("content-type", this._bodyBlob.type);
          } else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) {
            this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
          }
        }
      };
      if (t.blob) {
        this.blob = function () {
          var e = u(this);
          if (e) {
            return e;
          }
          if (this._bodyBlob) {
            return Promise.resolve(this._bodyBlob);
          }
          if (this._bodyArrayBuffer) {
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          }
          if (!this._bodyFormData) {
            return Promise.resolve(new Blob([this._bodyText]));
          }
          throw Error("could not read FormData body as blob");
        };
        this.arrayBuffer = function () {
          if (this._bodyArrayBuffer) {
            return u(this) || Promise.resolve(this._bodyArrayBuffer);
          } else {
            return this.blob().then(h);
          }
        };
      }
      this.text = function () {
        var e;
        var t;
        var r;
        var n = u(this);
        if (n) {
          return n;
        }
        if (this._bodyBlob) {
          e = this._bodyBlob;
          r = c(t = new FileReader());
          t.readAsText(e);
          return r;
        }
        if (this._bodyArrayBuffer) {
          return Promise.resolve(function (e) {
            var t = new Uint8Array(e);
            var r = Array(t.length);
            var n = 0;
            for (; n < t.length; n++) {
              r[n] = String.fromCharCode(t[n]);
            }
            return r.join("");
          }(this._bodyArrayBuffer));
        }
        if (!this._bodyFormData) {
          return Promise.resolve(this._bodyText);
        }
        throw Error("could not read FormData body as text");
      };
      if (t.formData) {
        this.formData = function () {
          return this.text().then(p);
        };
      }
      this.json = function () {
        return this.text().then(JSON.parse);
      };
      return this;
    }
    l.prototype.append = function (e, t) {
      e = o(e);
      t = a(t);
      var r = this.map[e];
      this.map[e] = r ? r + ", " + t : t;
    };
    l.prototype.delete = function (e) {
      delete this.map[o(e)];
    };
    l.prototype.get = function (e) {
      e = o(e);
      if (this.has(e)) {
        return this.map[e];
      } else {
        return null;
      }
    };
    l.prototype.has = function (e) {
      return this.map.hasOwnProperty(o(e));
    };
    l.prototype.set = function (e, t) {
      this.map[o(e)] = a(t);
    };
    l.prototype.forEach = function (e, t) {
      for (var r in this.map) {
        if (this.map.hasOwnProperty(r)) {
          e.call(t, this.map[r], r, this);
        }
      }
    };
    l.prototype.keys = function () {
      var e = [];
      this.forEach(function (t, r) {
        e.push(r);
      });
      return s(e);
    };
    l.prototype.values = function () {
      var e = [];
      this.forEach(function (t) {
        e.push(t);
      });
      return s(e);
    };
    l.prototype.entries = function () {
      var e = [];
      this.forEach(function (t, r) {
        e.push([r, t]);
      });
      return s(e);
    };
    if (t.iterable) {
      l.prototype[Symbol.iterator] = l.prototype.entries;
    }
    var A = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function g(e, t) {
      var r;
      var n;
      var i = (t = t || {}).body;
      if (e instanceof g) {
        if (e.bodyUsed) {
          throw TypeError("Already read");
        }
        this.url = e.url;
        this.credentials = e.credentials;
        if (!t.headers) {
          this.headers = new l(e.headers);
        }
        this.method = e.method;
        this.mode = e.mode;
        this.signal = e.signal;
        if (!i && e._bodyInit != null) {
          i = e._bodyInit;
          e.bodyUsed = true;
        }
      } else {
        this.url = String(e);
      }
      this.credentials = t.credentials || this.credentials || "same-origin";
      if (t.headers || !this.headers) {
        this.headers = new l(t.headers);
      }
      this.method = (n = (r = t.method || this.method || "GET").toUpperCase(), A.indexOf(n) > -1 ? n : r);
      this.mode = t.mode || this.mode || null;
      this.signal = t.signal || this.signal;
      this.referrer = null;
      if ((this.method === "GET" || this.method === "HEAD") && i) {
        throw TypeError("Body not allowed for GET or HEAD requests");
      }
      this._initBody(i);
    }
    function p(e) {
      var t = new FormData();
      e.trim().split("&").forEach(function (e) {
        if (e) {
          var r = e.split("=");
          var n = r.shift().replace(/\+/g, " ");
          var i = r.join("=").replace(/\+/g, " ");
          t.append(decodeURIComponent(n), decodeURIComponent(i));
        }
      });
      return t;
    }
    function m(e, t) {
      t ||= {};
      this.type = "default";
      this.status = t.status === undefined ? 200 : t.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = "statusText" in t ? t.statusText : "OK";
      this.headers = new l(t.headers);
      this.url = t.url || "";
      this._initBody(e);
    }
    g.prototype.clone = function () {
      return new g(this, {
        body: this._bodyInit
      });
    };
    f.call(g.prototype);
    f.call(m.prototype);
    m.prototype.clone = function () {
      return new m(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new l(this.headers),
        url: this.url
      });
    };
    m.error = function () {
      var e = new m(null, {
        status: 0,
        statusText: ""
      });
      e.type = "error";
      return e;
    };
    var y = [301, 302, 303, 307, 308];
    m.redirect = function (e, t) {
      if (y.indexOf(t) === -1) {
        throw RangeError("Invalid status code");
      }
      return new m(null, {
        status: t,
        headers: {
          location: e
        }
      });
    };
    e.DOMException = n.DOMException;
    try {
      new e.DOMException();
    } catch (t) {
      e.DOMException = function (e, t) {
        this.message = e;
        this.name = t;
        var r = Error(e);
        this.stack = r.stack;
      };
      e.DOMException.prototype = Object.create(Error.prototype);
      e.DOMException.prototype.constructor = e.DOMException;
    }
    function v(r, n) {
      return new Promise(function (i, o) {
        var a = new g(r, n);
        if (a.signal && a.signal.aborted) {
          return o(new e.DOMException("Aborted", "AbortError"));
        }
        var s = new XMLHttpRequest();
        function u() {
          s.abort();
        }
        s.onload = function () {
          var e;
          var t;
          var r = {
            status: s.status,
            statusText: s.statusText,
            headers: (e = s.getAllResponseHeaders() || "", t = new l(), e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (e) {
              var r = e.split(":");
              var n = r.shift().trim();
              if (n) {
                var i = r.join(":").trim();
                t.append(n, i);
              }
            }), t)
          };
          r.url = "responseURL" in s ? s.responseURL : r.headers.get("X-Request-URL");
          i(new m("response" in s ? s.response : s.responseText, r));
        };
        s.onerror = function () {
          o(TypeError("Network request failed"));
        };
        s.ontimeout = function () {
          o(TypeError("Network request failed"));
        };
        s.onabort = function () {
          o(new e.DOMException("Aborted", "AbortError"));
        };
        s.open(a.method, a.url, true);
        if (a.credentials === "include") {
          s.withCredentials = true;
        } else if (a.credentials === "omit") {
          s.withCredentials = false;
        }
        if ("responseType" in s && t.blob) {
          s.responseType = "blob";
        }
        a.headers.forEach(function (e, t) {
          s.setRequestHeader(t, e);
        });
        if (a.signal) {
          a.signal.addEventListener("abort", u);
          s.onreadystatechange = function () {
            if (s.readyState === 4) {
              a.signal.removeEventListener("abort", u);
            }
          };
        }
        s.send(a._bodyInit === undefined ? null : a._bodyInit);
      });
    }
    v.polyfill = true;
    if (!n.fetch) {
      n.fetch = v;
      n.Headers = l;
      n.Request = g;
      n.Response = m;
    }
    e.Headers = l;
    e.Request = g;
    e.Response = m;
    e.fetch = v;
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  })({});
  n.fetch.ponyfill = true;
  delete n.fetch.polyfill;
  (exports = n.fetch).default = n.fetch;
  exports.fetch = n.fetch;
  exports.Headers = n.Headers;
  exports.Request = n.Request;
  exports.Response = n.Response;
  module.exports = exports;
}