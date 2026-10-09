// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TeaAnalytics'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22533.27eb4462.js
         * chunkId: 22533
         * moduleId: 95393
         */
module.exports = function (module, exports, require) {
  var i;
  function n(e, t) {
    return (n = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var i in t) {
        if (Object.prototype.hasOwnProperty.call(t, i)) {
          e[i] = t[i];
        }
      }
    })(e, t);
  }
  function o(e, t) {
    if (typeof t != "function" && t !== null) {
      throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
    }
    function i() {
      this.constructor = e;
    }
    n(e, t);
    e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
  }
  function r(e, t) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var i in t) {
        if (Object.prototype.hasOwnProperty.call(t, i)) {
          e[i] = t[i];
        }
      }
    })(e, t);
  }
  function s() {
    return (s = Object.assign || function (e) {
      var t;
      var i = 1;
      var n = arguments.length;
      for (; i < n; i++) {
        for (var o in t = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(t, o)) {
            e[o] = t[o];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function a(e, t, i, n) {
    return new (i ||= Promise)(function (o, r) {
      function s(e) {
        try {
          c(n.next(e));
        } catch (e) {
          r(e);
        }
      }
      function a(e) {
        try {
          c(n.throw(e));
        } catch (e) {
          r(e);
        }
      }
      function c(e) {
        var t;
        if (e.done) {
          o(e.value);
        } else {
          ((t = e.value) instanceof i ? t : new i(function (e) {
            e(t);
          })).then(s, a);
        }
      }
      c((n = n.apply(e, t || [])).next());
    });
  }
  function c(e, t) {
    var i;
    var n;
    var o;
    var r;
    var s = {
      label: 0,
      sent: function () {
        if (o[0] & 1) {
          throw o[1];
        }
        return o[1];
      },
      trys: [],
      ops: []
    };
    r = {
      next: a(0),
      throw: a(1),
      return: a(2)
    };
    if (typeof Symbol == "function") {
      r[Symbol.iterator] = function () {
        return this;
      };
    }
    return r;
    function a(r) {
      return function (a) {
        return function (r) {
          if (i) {
            throw TypeError("Generator is already executing.");
          }
          while (s) {
            try {
              i = 1;
              if (n && (o = r[0] & 2 ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, r[1])).done) {
                return o;
              }
              n = 0;
              if (o) {
                r = [r[0] & 2, o.value];
              }
              switch (r[0]) {
                case 0:
                case 1:
                  o = r;
                  break;
                case 4:
                  s.label++;
                  return {
                    value: r[1],
                    done: false
                  };
                case 5:
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                case 7:
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                default:
                  if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (r[0] === 6 || r[0] === 2)) {
                    s = 0;
                    continue;
                  }
                  if (r[0] === 3 && (!o || r[1] > o[0] && r[1] < o[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (r[0] === 6 && s.label < o[1]) {
                    s.label = o[1];
                    o = r;
                    break;
                  }
                  if (o && s.label < o[2]) {
                    s.label = o[2];
                    s.ops.push(r);
                    break;
                  }
                  if (o[2]) {
                    s.ops.pop();
                  }
                  s.trys.pop();
                  continue;
              }
              r = t.call(e, s);
            } catch (e) {
              r = [6, e];
              n = 0;
            } finally {
              i = o = 0;
            }
          }
          if (r[0] & 5) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : undefined,
            done: true
          };
        }([r, a]);
      };
    }
  }
  var u = function (e) {
    function t(t, i, n) {
      var o = e.call(this, i) || this;
      o.code = t;
      o.message = i;
      o.originError = n;
      o.name = "StarlingError";
      o.code = t;
      o.message = i;
      o.originError = n;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(o, o.constructor);
      }
      return o;
    }
    (function (e, t) {
      function i() {
        this.constructor = e;
      }
      r(e, t);
      e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
    })(t, e);
    return t;
  }(Error);
  var l = {
    API_PARAMS_ERROR: {
      ERROR_CODE: 103,
      ERROR_MESSAGE: "Request failed, confirm your apiKey and namespace is correct"
    },
    PARAMS_ERROR: {
      ERROR_CODE: 110,
      ERROR_MESSAGE: "Check your params, parameter apiKey, namespace and zoneHost is required!"
    },
    PARAMS_ERROR_2: {
      ERROR_CODE: 111,
      ERROR_MESSAGE: "Check your params, parameter request and store is required!"
    },
    CACHE_ERROR: {
      ERROR_CODE: 112,
      ERROR_MESSAGE: "Cache error!"
    },
    VERSION_NOT_FOUND: {
      ERROR_CODE: 120,
      ERROR_MESSAGE: "Version is not found, please check your param [version]!"
    }
  };
  var h = {
    zone: "CN",
    locale: "zh",
    timeout: 15000,
    test: false,
    mode: "normal",
    format: "merged",
    lazyUpdate: false,
    fallbackLang: ["zh"],
    tracker: function () {},
    cache: true
  };
  var p = function () {
    function e(e) {
      this.options = e;
      this.options = e;
    }
    e.prototype.getText = function (e, t) {
      return a(this, undefined, undefined, function () {
        return c(this, function (i) {
          switch (i.label) {
            case 0:
              return [4, this._request(e, t)];
            case 1:
              return [2, i.sent()];
          }
        });
      });
    };
    e.prototype.getTexts = function (e) {
      var t = this;
      return Promise.all(e.map(function (e) {
        var i = e[0];
        var n = e[1];
        return t.getText(i, n);
      }));
    };
    e.prototype._request = function (e, t) {
      return a(this, undefined, undefined, function () {
        var i;
        var n;
        var o;
        var r;
        var s;
        var a;
        var h;
        var p;
        return c(this, function (c) {
          switch (c.label) {
            case 0:
              i = this.options.getReleaseVersion(e);
              if (e && i && t) {
                return [2, {}];
              }
              n = this.getUrl(e, t);
              return [4, (o = this.options).request(n, {
                timeout: o.timeout
              })];
            case 1:
              s = (r = c.sent().data).status;
              a = r.message;
              if (+s == 200) {
                return [2, this._mapResponse(a)];
              }
              if (+s == 1001) {
                throw new u((h = l.VERSION_NOT_FOUND).ERROR_CODE, h.ERROR_MESSAGE);
              }
              throw new u((p = l.API_PARAMS_ERROR).ERROR_CODE, p.ERROR_MESSAGE);
          }
        });
      });
    };
    e.prototype.getUrl = function (e, t) {
      var i = this.options;
      var n = i.apiKey;
      var o = i.locale;
      var r = i.fallbackLang;
      var s = i.zoneHost;
      var a = i.mode;
      var c = i.getReleaseVersion;
      var u = [o].concat(r);
      var l = s + "/check_and_get_text/" + n + "/" + a + "/" + e + "?lang=" + u;
      var h = c(e);
      if (h) {
        l = s + "/text_by_release_version/" + n + "/" + a + "/" + e + "/" + h + "?lang=" + u;
      }
      if (typeof t == "string") {
        l += "&version=" + t;
      }
      return l;
    };
    e.prototype._mapResponse = function (e) {
      if (e) {
        return Object.keys(e).reduce(function (t, i) {
          t[i.toLowerCase()] = e[i];
          return t;
        }, {});
      } else {
        return {};
      }
    };
    return e;
  }();
  var f = function () {
    function e(e) {
      this.options = e;
      this.options = e;
    }
    e.prototype._setCache = function (e, t) {
      try {
        return this.options.store.set(e, t);
      } catch (e) {
        var i = l.CACHE_ERROR.ERROR_CODE;
        this.options.tracker("cache_error", {
          code: i,
          message: e.message,
          stack: e.stack
        });
        return;
      }
    };
    e.prototype._getCache = function (e) {
      var t = this.options;
      var i = t.store;
      var n = t.cache;
      try {
        return n && i.get(e);
      } catch (e) {
        var o = l.CACHE_ERROR.ERROR_CODE;
        this.options.tracker("cache_error", {
          code: o,
          message: e.message,
          stack: e.stack
        });
        return;
      }
    };
    e.prototype.getVersion = function (e) {
      var t = this.options;
      var i = t.apiKey;
      var n = t.locale;
      var o = t.getReleaseVersion;
      var r = "version." + i + "." + e + "." + n;
      var s = o(e);
      if (s) {
        r += "." + s;
      }
      if (this.getText(e)) {
        return this._getCache(r);
      } else {
        return null;
      }
    };
    e.prototype.getVersions = function (e) {
      var t = this;
      return Promise.all(e.map(function (e) {
        return t.getVersion(e);
      }));
    };
    e.prototype.getText = function (e) {
      var t = this.options;
      var i = t.apiKey;
      var n = t.locale;
      var o = t.getReleaseVersion;
      var r = "text." + i + "." + e + "." + n;
      var s = o(e);
      if (s) {
        r += "." + s;
      }
      return this._getCache(r);
    };
    e.prototype.getTexts = function (e) {
      var t = this;
      return Promise.all(e.map(function (e) {
        return t.getText(e);
      }));
    };
    e.prototype.refresh = function (e, t, i, n) {
      return a(this, undefined, undefined, function () {
        var o;
        var r;
        var s;
        var a;
        var u;
        var l = this;
        return c(this, function (c) {
          switch (c.label) {
            case 0:
              r = (o = this.options).apiKey;
              s = o.getReleaseVersion;
              a = o.cache;
              u = [];
              t.forEach(function (o, c) {
                var h = "text." + r + "." + e[c] + "." + n[c];
                var p = "version." + r + "." + e[c] + "." + n[c];
                var f = s(e[c]);
                if (f) {
                  h += "." + f;
                  p += "." + f;
                }
                if (a) {
                  u.push(l._setCache(h, t[c]));
                  u.push(l._setCache(p, i[c]));
                }
              });
              return [4, Promise.all(u)];
            case 1:
              c.sent();
              return [2, t.reduce(function (e, t) {
                return Object.assign(e, t);
              }, {})];
          }
        });
      });
    };
    return e;
  }();
  var d = function () {
    function e(e = []) {
      this._list = [];
      this._list = e;
    }
    Object.defineProperty(e.prototype, "length", {
      get: function () {
        return this._list.length;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.getList = function () {
      return this._list;
    };
    e.prototype.getNamespaces = function () {
      return this._list.map(function (e) {
        return e.namespace;
      });
    };
    e.prototype.addNamespace = function (e) {
      this._list.push(e);
    };
    e.prototype.insertTexts = function (e) {
      this._list.forEach(function (t, i) {
        t.texts = e[i];
      });
    };
    e.prototype.sortByPrior = function () {
      this._list.sort(function (e, t) {
        return e.prior - t.prior;
      });
      return this._list;
    };
    e.prototype.concat = function (t) {
      return new e(this._list.concat(t.getList()));
    };
    return e;
  }();
  var g = function () {
    function e(e, t, i) {
      this._promiseRefresh = Promise.resolve(null);
      this.remote = e;
      this.local = t;
      this.options = i;
    }
    e.prototype._checkVersions = function (e) {
      return a(this, undefined, undefined, function () {
        var t;
        var i;
        var n;
        var o;
        var r;
        var s;
        return c(this, function (a) {
          switch (a.label) {
            case 0:
              t = this.options.locale;
              return [4, this.local.getVersions(e)];
            case 1:
              i = a.sent();
              n = e.map(function (e, t) {
                return [e, i[t]];
              });
              return [4, this.remote.getTexts(n)];
            case 2:
              o = a.sent();
              r = new d();
              s = new d();
              e.forEach(function (e, n) {
                var a = o[n];
                var c = a.updated;
                var u = a.version;
                var l = a.data;
                var h = a.lang;
                if (c) {
                  s.addNamespace({
                    namespace: e,
                    prior: n,
                    version: u,
                    texts: l,
                    lang: h
                  });
                } else {
                  r.addNamespace({
                    namespace: e,
                    prior: n,
                    version: i[n],
                    lang: t
                  });
                }
              });
              return [2, {
                equalNs: r,
                diffNs: s
              }];
          }
        });
      });
    };
    e.prototype.waitForRefresh = function () {
      return this._promiseRefresh;
    };
    e.prototype._refresh = function (e) {
      var t = e.getList();
      var i = [];
      var n = [];
      var o = [];
      var r = [];
      t.forEach(function (e) {
        i.push(e.namespace);
        n.push(e.version);
        o.push(e.texts);
        r.push(e.lang);
      });
      return this.local.refresh(i, o, n, r);
    };
    e.prototype._getLocalTexts = function (e) {
      return a(this, undefined, undefined, function () {
        var t;
        return c(this, function (i) {
          switch (i.label) {
            case 0:
              return [4, this.local.getTexts(e.getNamespaces())];
            case 1:
              t = i.sent();
              e.insertTexts(t);
              return [2, t];
          }
        });
      });
    };
    e.prototype.load = function (e) {
      return a(this, undefined, undefined, function () {
        var t;
        var i;
        var n;
        var o;
        var r;
        var s;
        return c(this, function (s) {
          switch (s.label) {
            case 0:
              t = this.options.format;
              return [4, this._checkVersions(e)];
            case 1:
              n = (i = s.sent()).equalNs;
              o = i.diffNs;
              if (!n.length) {
                return [3, 3];
              }
              return [4, this._getLocalTexts(n)];
            case 2:
              s.sent();
              return [3, 4];
            case 3:
              s.label = 4;
            case 4:
              r = this._formatTexts(t, o.concat(n));
              if (!o.length) {
                return [3, 6];
              }
              return [4, this._refresh(o)];
            case 5:
              s.sent();
              s.label = 6;
            case 6:
              return [2, {
                texts: r,
                diffNs: o.getNamespaces(),
                equalNs: n.getNamespaces()
              }];
          }
        });
      });
    };
    e.prototype._getCacheText = function (e) {
      return a(this, undefined, undefined, function () {
        var t;
        var i;
        var n;
        var o;
        var r;
        var s;
        return c(this, function (a) {
          switch (a.label) {
            case 0:
              i = (t = this.options).locale;
              n = t.format;
              return [4, this.local.getTexts(e)];
            case 1:
              o = a.sent();
              return [4, this.local.getVersions(e)];
            case 2:
              r = a.sent();
              s = new d(o.map(function (t, n) {
                if (t) {
                  return {
                    namespace: e[n],
                    version: r[n],
                    lang: i,
                    texts: t
                  };
                }
              }).filter(function (e) {
                return !!e;
              }));
              return [2, this._formatTexts(n, s)];
          }
        });
      });
    };
    e.prototype.lazyLoad = function (e) {
      return a(this, undefined, undefined, function () {
        var t;
        var i;
        var n;
        return c(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, this._getCacheText(e)];
            case 1:
              i = Object.keys(t = o.sent()).length === 0;
              this._promiseRefresh = this.load(e);
              if (!i) {
                return [3, 3];
              }
              return [4, this._promiseRefresh];
            case 2:
              t = (n = o.sent()).texts;
              o.label = 3;
            case 3:
              return [2, {
                texts: t,
                diffNs: i ? n && n.diffNs : [],
                equalNs: i ? n && n.equalNs : e
              }];
          }
        });
      });
    };
    e.prototype._formatTexts = function (e, t) {
      if (e === "splitted") {
        return t.getList().reduce(function (e, t) {
          var i = t.namespace;
          var n = t.lang;
          var o = t.texts;
          var r = t.version;
          e[i] = {
            lang: n,
            texts: o,
            version: r
          };
          return e;
        }, {});
      } else {
        return t.sortByPrior().map(function (e) {
          return e.texts;
        }).reduce(function (e, t) {
          return Object.assign(e, t);
        }, {});
      }
    };
    return e;
  }();
  if (typeof Object.assign != "function") {
    Object.defineProperty(Object, "assign", {
      value: function (e) {
        if (e == null) {
          throw TypeError("Cannot convert undefined or null to object");
        }
        var t = Object(e);
        var i = 1;
        for (; i < arguments.length; i++) {
          var n = arguments[i];
          if (n != null) {
            for (var o in n) {
              if (Object.prototype.hasOwnProperty.call(n, o)) {
                t[o] = n[o];
              }
            }
          }
        }
        return t;
      },
      writable: true,
      configurable: true
    });
  }
  var _ = {
    EVENT_EXCEPTION: "client_exception",
    EVENT_LOAD: "client_load",
    EVENT_CACHE: "client_cache",
    EVENT_LOAD_TIME: "client_load_time"
  };
  (D ||= {}).AfterLoad = "afterLoad";
  var m = function () {
    function e(e) {
      this.afterLoadPlugins = [];
      this.setConfig(e);
    }
    e.prototype._init = function (e) {
      var t = this;
      this.options = function (e) {
        var t = (e = Object.assign({}, h, e)).namespace;
        var i = e.apiKey;
        var n = e.request;
        var o = e.store;
        var r = e.zoneHost;
        if (e.test) {
          e.mode = "test";
        }
        e.namespace = t = t ? Array.isArray(t) ? t : [t] : [];
        e.apiKey = i = i || e.api_key;
        if (!n || !o) {
          var s = l.PARAMS_ERROR_2;
          var a = s.ERROR_CODE;
          var c = s.ERROR_MESSAGE;
          throw new u(a, c, null);
        }
        if (!i || !t.length || !r) {
          var p = l.PARAMS_ERROR;
          var a = p.ERROR_CODE;
          var c = p.ERROR_MESSAGE;
          throw new u(a, c, null);
        }
        return e;
      }(e);
      var i = this.options;
      var n = i.apiKey;
      var o = i.locale;
      var r = i.zoneHost;
      var a = i.request;
      var c = i.timeout;
      var d = i.fallbackLang;
      var _ = i.store;
      var m = i.lazyUpdate;
      var v = i.test;
      var y = i.mode;
      var b = i.format;
      var E = i.cache;
      var w = {
        mode: m ? "lazy" : v ? "test" : "prod",
        zone: r,
        locale: o,
        apiKey: n
      };
      this._tracker = function (e, i) {
        try {
          t.options.tracker(e, s(s({}, w), i));
        } catch (e) {}
      };
      var S = this._getReleaseVersionByNamespace.bind(this);
      var k = new p({
        request: a,
        timeout: c,
        apiKey: n,
        locale: o,
        zoneHost: r,
        fallbackLang: d,
        mode: y,
        getReleaseVersion: S
      });
      var A = new f({
        apiKey: n,
        locale: o,
        store: _,
        tracker: this._tracker,
        getReleaseVersion: S,
        cache: E
      });
      this._textManager = new g(k, A, {
        locale: o,
        format: b
      });
      this.initPlugin();
    };
    e.prototype.initPlugin = function () {
      var e = this;
      var t = this.options.plugins || [];
      if (Array.isArray(t) && t.every(function (e) {
        return typeof e == "object";
      })) {
        t.forEach(function (t) {
          if (t.type === D.AfterLoad) {
            e.afterLoadPlugins.push(t);
          }
        });
      }
    };
    e.prototype._getReleaseVersionByNamespace = function (e) {
      var t = this.options.namespace;
      var i = this.options.version;
      var n = null;
      if (Array.isArray(i)) {
        n = i[t.findIndex(function (t) {
          return t === e;
        })];
      } else if (i && typeof i == "object") {
        n = i[e];
      } else if (typeof i == "string") {
        n = i;
      }
      return n;
    };
    e.prototype.setConfig = function (e) {
      var t = Object.assign({}, this.options, e);
      this._init(t);
    };
    e.prototype.waitForRefresh = function () {
      return a(this, undefined, undefined, function () {
        var e;
        return c(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, this._textManager.waitForRefresh()];
            case 1:
              return [2, (e = t.sent()) ? e.texts : null];
          }
        });
      });
    };
    e.prototype._load = function () {
      return a(this, undefined, undefined, function () {
        var e;
        var t;
        var i;
        var n;
        var o;
        return c(this, function (r) {
          switch (r.label) {
            case 0:
              t = (e = this.options).namespace;
              i = e.lazyUpdate;
              n = t;
              if (!i) {
                return [3, 2];
              }
              return [4, this._textManager.lazyLoad(n)];
            case 1:
              o = r.sent();
              return [3, 4];
            case 2:
              return [4, this._textManager.load(n)];
            case 3:
              o = r.sent();
              r.label = 4;
            case 4:
              return [2, o];
          }
        });
      });
    };
    e.prototype.load = function (e, t) {
      return a(this, undefined, undefined, function () {
        var i;
        var n;
        var o;
        var r;
        var s;
        var a;
        var u;
        var l;
        var h;
        var p;
        var f;
        var d;
        var g;
        var m = this;
        return c(this, function (c) {
          switch (c.label) {
            case 0:
              i = Date.now();
              n = this.options.namespace;
              c.label = 1;
            case 1:
              c.trys.push([1, 5,, 10]);
              this._tracker(_.EVENT_LOAD, {
                state: "start",
                version: "0.5.9"
              });
              return [4, this._load()];
            case 2:
              r = (o = c.sent()).diffNs;
              s = o.equalNs;
              a = o.texts;
              if (!Array.isArray(u = this.afterLoadPlugins) || !u.length) {
                return [3, 4];
              }
              return [4, u.reduce(function (e, t) {
                return e.then(function (e) {
                  if (typeof t.process == "function") {
                    return t.process(e || a, m.options);
                  } else {
                    return e;
                  }
                });
              }, Promise.resolve(a))];
            case 3:
              a = c.sent() || a;
              c.label = 4;
            case 4:
              if (e) {
                e(a);
              }
              this._tracker(_.EVENT_LOAD_TIME, {
                time: Date.now() - i
              });
              this._tracker(_.EVENT_LOAD, {
                state: "success",
                version: "0.5.9"
              });
              l = r.length;
              f = ((h = s.length) / (p = n.length)).toFixed(2);
              this._tracker(_.EVENT_CACHE, {
                diffLen: l,
                diff: r.join(","),
                equalLen: h,
                equal: s.join(","),
                namespaces: s.join(","),
                namespacesLen: p,
                ratio: f
              });
              return [2, a];
            case 5:
              d = c.sent();
              this._tracker(_.EVENT_LOAD, {
                state: "fail"
              });
              this._tracker(_.EVENT_EXCEPTION, {
                code: d.code,
                message: d.message,
                stack: d.stack
              });
              if (!(d || {}).useWebCache) {
                return [3, 9];
              }
              c.label = 6;
            case 6:
              c.trys.push([6, 8,, 9]);
              return [4, this._textManager._getCacheText(n)];
            case 7:
              if ((g = c.sent()) && typeof g == "object") {
                d.response.data = g;
              } else {
                d.response.data = {};
              }
              return [3, 9];
            case 8:
              c.sent();
              return [3, 9];
            case 9:
              if (!t) {
                return [2, Promise.reject(d)];
              }
              t(d);
              return [3, 10];
            case 10:
              return [2];
          }
        });
      });
    };
    return e;
  }();
  var v = new (function () {
    function e() {}
    e.prototype.get = function (e) {
      if (localStorage && localStorage.getItem) {
        return function (e) {
          if (typeof e == "string") {
            try {
              return JSON.parse(e);
            } catch (t) {
              return e || undefined;
            }
          }
        }(localStorage.getItem(e));
      }
    };
    e.prototype.set = function (e, t) {
      if (localStorage && localStorage.setItem) {
        localStorage.setItem(e, JSON.stringify(t));
      }
    };
    return e;
  }())();
  var y = function (e) {
    function t(t, i, n, o, r, s) {
      var a = e.call(this, t) || this;
      a.url = i;
      a.code = n;
      a.request = o;
      a.response = r;
      a.useWebCache = s;
      a.url = i;
      a.code = n;
      a.request = o;
      a.response = r;
      a.useWebCache = !!s;
      return a;
    }
    o(t, e);
    return t;
  }(Error);
  function b(e, t) {
    var i = t.timeout;
    return new Promise(function (t, n) {
      var o = new XMLHttpRequest();
      o.open("GET", e);
      o.withCredentials = false;
      o.onreadystatechange = function () {
        if (o && o.readyState === 4 && (o.status !== 0 || o.responseURL && o.responseURL.indexOf("file:") === 0)) {
          var i;
          var r;
          var s = function (e) {
            try {
              return JSON.parse(e);
            } catch (e) {
              return {};
            }
          }(o.responseText);
          var a = s.message && typeof s.message == "object" ? s : null;
          if (o.status < 200 || o.status >= 300 || !a) {
            i = o;
            r = (r = (s || {}).message || "") ? `, reason is: ${r}` : "";
            n(new y("Request failed with status code " + i.status + r, e, null, i, {
              data: {}
            }, true));
            o = null;
            return;
          }
          t({
            data: a,
            status: o.status,
            statusText: o.statusText,
            request: o
          });
          o = null;
        }
      };
      o.onerror = function () {
        n(new y("Network Error", e, null, o, {
          data: {}
        }, true));
        o = null;
      };
      o.timeout = i;
      o.ontimeout = function () {
        n(new y("timeout of " + i + "ms exceeded", e, "ECONNABORTED", o));
        o = null;
      };
      o.send();
    });
  }
  var E = function (e) {
    function t(t) {
      var i = this;
      t.store ||= v;
      t.request ||= b;
      return e.call(this, t) || this;
    }
    o(t, e);
    return t;
  }(m);
  function w() {
    return (w = Object.assign || function (e) {
      var t;
      var i = 1;
      var n = arguments.length;
      for (; i < n; i++) {
        for (var o in t = arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(t, o)) {
            e[o] = t[o];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function S(e) {
    var t = typeof Symbol == "function" && e[Symbol.iterator];
    var i = 0;
    if (t) {
      return t.call(e);
    } else {
      return {
        next: function () {
          if (e && i >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[i++],
            done: !e
          };
        }
      };
    }
  }
  function k(e, t) {
    var i = typeof Symbol == "function" && e[Symbol.iterator];
    if (!i) {
      return e;
    }
    var n;
    var o;
    var r = i.call(e);
    var s = [];
    try {
      while ((t === undefined || t-- > 0) && !(n = r.next()).done) {
        s.push(n.value);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        if (n && !n.done && (i = r.return)) {
          i.call(r);
        }
      } finally {
        if (o) {
          throw o.error;
        }
      }
    }
    return s;
  }
  function A() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e = e.concat(k(arguments[t]));
    }
    return e;
  }
  var D;
  var T;
  var O = function () {
    function e() {
      this._hooks = {};
      this._cache = [];
      this._hooksCache = {};
    }
    e.prototype.on = function (e, t) {
      if (e && t && typeof t == "function") {
        this._hooks[e] ||= [];
        this._hooks[e].push(t);
      }
    };
    e.prototype.once = function (e, t) {
      var i = this;
      if (e && t && typeof t == "function") {
        this.on(e, function n(o) {
          t(o);
          i.off(e, n);
        });
      }
    };
    e.prototype.off = function (e, t) {
      if (e && this._hooks[e] && this._hooks[e].length) {
        if (t) {
          var i = this._hooks[e].indexOf(t);
          if (i !== -1) {
            this._hooks[e].splice(i, 1);
          }
        } else {
          this._hooks[e] = [];
        }
      }
    };
    e.prototype.emit = function (e, t, i) {
      if (i) {
        if (e) {
          if (this._cache.indexOf(i) !== -1) {
            this._emit(e, t);
          } else {
            if (!this._hooksCache.hasOwnProperty(i)) {
              this._hooksCache[i] = {};
            }
            if (!this._hooksCache[i].hasOwnProperty(e)) {
              this._hooksCache[i][e] = [];
            }
            this._hooksCache[i][e].push(t);
          }
        }
      } else {
        this._emit(e, t);
      }
    };
    e.prototype._emit = function (e, t) {
      if (e && this._hooks[e] && this._hooks[e].length) {
        A(this._hooks[e]).forEach(function (e) {
          try {
            e(t);
          } catch (e) {}
        });
      }
    };
    e.prototype.set = function (e) {
      if (e && this._cache.indexOf(e) === -1) {
        this._cache.push(e);
      }
    };
    return e;
  }();
  function M(e) {
    return e != null && Object.prototype.toString.call(e) == "[object Object]";
  }
  function R(e) {
    return Array.isArray(e);
  }
  T = +Date.now() + Number(("" + Math.random()).slice(2, 8));
  function C() {
    return T += 1;
  }
  function G(e) {
    return function (e, t, i) {
      if (typeof e == "string" && typeof i == "number") {
        var n;
        var o = [];
        var r = String.fromCharCode((i = i <= 25 ? i : i % 25) + 97);
        n = e.split(r);
        for (var s = 0; s < n.length; s++) {
          var a = parseInt(n[s], i);
          var c = String.fromCharCode(a = +a ^ 64);
          o.push(c);
        }
        return o.join("");
      }
    }(e, 64, 25);
  }
  function x(e) {
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      window.addEventListener("pagehide", e, false);
    } else {
      window.addEventListener("beforeunload", e, false);
    }
  }
  function z(e, t, i) {
    var n = document.createElement("script");
    n.src = e;
    n.onerror = function () {
      i(e);
    };
    n.onload = function () {
      t();
    };
    document.getElementsByTagName("head")[0].appendChild(n);
  }
  function I() {
    var e = 0;
    ["hidden", "msHidden", "webkitHidden"].forEach(function (t) {
      if (document[t] !== undefined) {
        e = 1;
      }
    });
    return e;
  }
  function N(e = function () {}, t = 1000) {
    var i;
    var n = Date.now() + t;
    i = window.setTimeout(function o() {
      var r = Date.now() - n;
      e();
      n += t;
      i = window.setTimeout(o, Math.max(0, t - r));
    }, t);
    return function () {
      window.clearTimeout(i);
    };
  }
  function B(e) {
    var t = document.createElement("a");
    t.href = e;
    return t;
  }
  function U(e) {
    var t = {};
    try {
      var i = B(e).search;
      (i = i.slice(1)).split("&").forEach(function (e) {
        var i;
        var n;
        var o = e.split("=");
        if (o.length) {
          i = o[0];
          n = o[1];
        }
        try {
          t[i] = decodeURIComponent(n === undefined ? "" : n);
        } catch (e) {
          t[i] = n;
        }
      });
    } catch (e) {}
    return t;
  }
  function P(e) {
    var t = 0;
    var i = 0;
    var n = (e += "").length;
    var o = 0;
    for (; o < n; o++) {
      if ((t = t * 31 + e.charCodeAt(i++)) > 140737488355327 || t < -140737488355328) {
        t &= 281474976710655;
      }
    }
    if (t < 0) {
      t += 2251799813685247;
    }
    return t;
  }
  function L(e, t) {
    e(t = {
      exports: {}
    }, t.exports);
    return t.exports;
  }
  var V;
  var j;
  var $ = L(function (e, t) {
    var i;
    i = function () {
      function e() {
        var e = 0;
        var t = {};
        for (; e < arguments.length; e++) {
          var i = arguments[e];
          for (var n in i) {
            t[n] = i[n];
          }
        }
        return t;
      }
      function t(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return function i(n) {
        function o() {}
        function r(t, i, r) {
          if (typeof document != "undefined") {
            if (typeof (r = e({
              path: "/"
            }, o.defaults, r)).expires == "number") {
              r.expires = new Date(+new Date() + r.expires * 86400000);
            }
            r.expires = r.expires ? r.expires.toUTCString() : "";
            try {
              var s = JSON.stringify(i);
              if (/^[\{\[]/.test(s)) {
                i = s;
              }
            } catch (e) {}
            i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
            t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
            var a = "";
            for (var c in r) {
              if (r[c]) {
                a += "; " + c;
                if (r[c] !== true) {
                  a += "=" + r[c].split(";")[0];
                }
              }
            }
            return document.cookie = t + "=" + i + a;
          }
        }
        function s(e, i) {
          if (typeof document != "undefined") {
            var o = {};
            var r = document.cookie ? document.cookie.split("; ") : [];
            var s = 0;
            for (; s < r.length; s++) {
              var a = r[s].split("=");
              var c = a.slice(1).join("=");
              if (!i && c.charAt(0) === "\"") {
                c = c.slice(1, -1);
              }
              try {
                var u = t(a[0]);
                c = (n.read || n)(c, u) || t(c);
                if (i) {
                  try {
                    c = JSON.parse(c);
                  } catch (e) {}
                }
                o[u] = c;
                if (e === u) {
                  break;
                }
              } catch (e) {}
            }
            if (e) {
              return o[e];
            } else {
              return o;
            }
          }
        }
        o.set = r;
        o.get = function (e) {
          return s(e, false);
        };
        o.getJSON = function (e) {
          return s(e, true);
        };
        o.remove = function (t, i) {
          r(t, "", e(i, {
            expires: -1
          }));
        };
        o.defaults = {};
        o.withConverter = i;
        return o;
      }(function () {});
    };
    e.exports = i();
  });
  function q(e, t) {
    try {
      return $.get(e, {
        domain: t || document.domain
      });
    } catch (e) {
      return "";
    }
  }
  function K(e, t, i, n) {
    try {
      var o = n || document.domain;
      var r = +new Date() + (i || 604800000);
      $.set(e, t, {
        expires: new Date(r),
        path: "/",
        domain: o
      });
    } catch (e) {}
  }
  var H = function () {
    function e() {
      this.cache = {};
    }
    e.prototype.setItem = function (e, t) {
      this.cache[e] = t;
    };
    e.prototype.getItem = function (e) {
      return this.cache[e];
    };
    e.prototype.removeItem = function (e) {
      this.cache[e] = undefined;
    };
    e.prototype.getCookie = function (e, t) {
      return q(e, t);
    };
    e.prototype.setCookie = function (e, t, i, n) {
      K(e, t, i, n);
    };
    return e;
  }();
  var W = {
    getItem: function (e) {
      try {
        var t = localStorage.getItem(e);
        var i = t;
        try {
          if (t && typeof t == "string") {
            i = JSON.parse(t);
          }
        } catch (e) {}
        return i || {};
      } catch (e) {}
      return {};
    },
    setItem: function (e, t) {
      try {
        var i = typeof t == "string" ? t : JSON.stringify(t);
        localStorage.setItem(e, i);
      } catch (e) {}
    },
    removeItem: function (e) {
      try {
        localStorage.removeItem(e);
      } catch (e) {}
    },
    getCookie: function (e, t) {
      return q(e, t);
    },
    setCookie: function (e, t, i, n) {
      K(e, t, i, n);
    },
    isSupportLS: function () {
      try {
        localStorage.setItem("_ranger-test-key", "hi");
        localStorage.getItem("_ranger-test-key");
        localStorage.removeItem("_ranger-test-key");
        return true;
      } catch (e) {
        return false;
      }
    }()
  };
  var J = {
    getItem: function (e) {
      try {
        var t = sessionStorage.getItem(e);
        var i = t;
        try {
          if (t && typeof t == "string") {
            i = JSON.parse(t);
          }
        } catch (e) {}
        return i || {};
      } catch (e) {}
      return {};
    },
    setItem: function (e, t) {
      try {
        var i = typeof t == "string" ? t : JSON.stringify(t);
        sessionStorage.setItem(e, i);
      } catch (e) {}
    },
    removeItem: function (e) {
      try {
        sessionStorage.removeItem(e);
      } catch (e) {}
    },
    getCookie: function (e, t) {
      return q(e, t);
    },
    setCookie: function (e, t, i, n) {
      K(e, t, i, n);
    },
    isSupportSession: function () {
      try {
        sessionStorage.setItem("_ranger-test-key", "hi");
        sessionStorage.getItem("_ranger-test-key");
        sessionStorage.removeItem("_ranger-test-key");
        return true;
      } catch (e) {
        return false;
      }
    }()
  };
  var F = function () {
    function e(e, t) {
      this._storage = t && t === "session" ? J : !e && W.isSupportLS ? W : new H();
    }
    e.prototype.getItem = function (e) {
      return this._storage.getItem(e);
    };
    e.prototype.setItem = function (e, t) {
      this._storage.setItem(e, t);
    };
    e.prototype.getCookie = function (e, t) {
      return this._storage.getCookie(e, t);
    };
    e.prototype.setCookie = function (e, t, i, n) {
      this._storage.setCookie(e, t, i, n);
    };
    e.prototype.removeItem = function (e) {
      this._storage.removeItem(e);
    };
    return e;
  }();
  var Y = function () {
    function e(e, t, i) {
      this.appid = e;
      this.domain = t;
      this.userAgent = window.navigator.userAgent;
      this.appVersion = window.navigator.appVersion;
      this.cookie_expire = i;
    }
    e.prototype.init = function () {
      var e = window.navigator.userAgent;
      var t = window.navigator.language;
      var i = document.referrer;
      var n = i ? B(i).hostname : "";
      var o = U(window.location.href);
      var r = /Mobile|htc|mini|Android|iP(ad|od|hone)/.test(this.appVersion) ? "wap" : "web";
      this.utm = function (e, t, i, n) {
        var o = new F(false);
        var r = new F(false, "session");
        var s = e ? "_tea_utm_cache_" + e : "_tea_utm_cache";
        var a = e ? "_$utm_from_url_" + e : "_$utm_from_url";
        var c = {};
        var u = ["tr_shareuser", "tr_admaster", "tr_param1", "tr_param2", "tr_param3", "tr_param4", "$utm_from_url"];
        var l = {
          ad_id: Number(t.ad_id) || undefined,
          campaign_id: Number(t.campaign_id) || undefined,
          creative_id: Number(t.creative_id) || undefined,
          utm_source: t.utm_source,
          utm_medium: t.utm_medium,
          utm_campaign: t.utm_campaign,
          utm_term: t.utm_term,
          utm_content: t.utm_content,
          tr_shareuser: t.tr_shareuser,
          tr_admaster: t.tr_admaster,
          tr_param1: t.tr_param1,
          tr_param2: t.tr_param2,
          tr_param3: t.tr_param3,
          tr_param4: t.tr_param4
        };
        try {
          var h = false;
          for (var p in l) {
            if (l[p]) {
              if (u.indexOf(p) !== -1) {
                if (!c.hasOwnProperty("tracer_data")) {
                  c.tracer_data = {};
                }
                c.tracer_data[p] = l[p];
              } else {
                c[p] = l[p];
              }
              h = true;
            }
          }
          if (h) {
            r.setItem(a, "1");
            o.setCookie(s, JSON.stringify(c), n, i);
          } else {
            var f = o.getCookie(s, i);
            if (f) {
              c = JSON.parse(f);
            }
          }
          if (r.getItem(a)) {
            if (!c.hasOwnProperty("tracer_data")) {
              c.tracer_data = {};
            }
            c.tracer_data.$utm_from_url = 1;
          }
        } catch (e) {
          return l;
        }
        return c;
      }(this.appid, o, this.domain, this.cookie_expire);
      var s = this.browser();
      var a = this.os();
      return {
        browser: s.browser,
        browser_version: s.browser_version,
        platform: r,
        os_name: a.os_name,
        os_version: a.os_version,
        userAgent: e,
        screen_width: window.screen && window.screen.width,
        screen_height: window.screen && window.screen.height,
        device_model: this.getDeviceModel(a.os_name),
        language: t,
        referrer: i,
        referrer_host: n,
        utm: this.utm,
        latest_data: this.last(i, n)
      };
    };
    e.prototype.last = function (e, t) {
      var i = "";
      var n = "";
      var o = "";
      var r = location.hostname;
      var s = false;
      if (e && t && r !== t) {
        i = e;
        n = t;
        s = true;
        var a = U(e);
        if (a.keyword) {
          o = a.keyword;
        }
      }
      return {
        $latest_referrer: i,
        $latest_referrer_host: n,
        $latest_search_keyword: o,
        isLast: s
      };
    };
    e.prototype.browser = function () {
      var e;
      var t;
      var i = "";
      var n = "" + parseFloat(this.appVersion);
      var o = this.userAgent;
      if (o.indexOf("Edge") !== -1 || o.indexOf("Edg") !== -1) {
        i = "Microsoft Edge";
        if (o.indexOf("Edge") !== -1) {
          e = o.indexOf("Edge");
          n = o.substring(e + 5);
        } else {
          e = o.indexOf("Edg");
          n = o.substring(e + 4);
        }
      } else if ((e = o.indexOf("MSIE")) !== -1) {
        i = "Microsoft Internet Explorer";
        n = o.substring(e + 5);
      } else if (o.indexOf("Chrome") !== -1) {
        if ((e = o.indexOf("TTWebView")) !== -1) {
          i = "TTWebView";
          n = o.substring(e + 10, e + 23);
        } else if ((e = o.indexOf("Chrome")) !== -1) {
          i = "Chrome";
          n = o.substring(e + 7);
        } else if ((e = o.indexOf("Chrome")) !== -1) {
          i = "Chrome";
          n = o.substring(e + 7);
        }
      } else if (o.indexOf("Safari") !== -1) {
        if ((e = o.indexOf("Safari")) !== -1) {
          i = "Safari";
          n = o.substring(e + 7);
          if ((e = o.indexOf("Version")) !== -1) {
            n = o.substring(e + 8);
          }
        }
      } else if ((e = o.indexOf("Firefox")) !== -1) {
        i = "Firefox";
        n = o.substring(e + 8);
      }
      if ((t = n.indexOf(";")) !== -1) {
        n = n.substring(0, t);
      }
      if ((t = n.indexOf(" ")) !== -1) {
        n = n.substring(0, t);
      }
      if ((t = n.indexOf(")")) !== -1) {
        n = n.substring(0, t);
      }
      return {
        browser: i,
        browser_version: n
      };
    };
    e.prototype.os = function () {
      var e;
      var t;
      var i = "";
      var n = "";
      var o = [{
        s: "Windows 10",
        r: /(Windows 10.0|Windows NT 10.0|Windows NT 10.1)/
      }, {
        s: "Windows 8.1",
        r: /(Windows 8.1|Windows NT 6.3)/
      }, {
        s: "Windows 8",
        r: /(Windows 8|Windows NT 6.2)/
      }, {
        s: "Windows 7",
        r: /(Windows 7|Windows NT 6.1)/
      }, {
        s: "Android",
        r: /Android/
      }, {
        s: "Sun OS",
        r: /SunOS/
      }, {
        s: "Linux",
        r: /(Linux|X11)/
      }, {
        s: "iOS",
        r: /(iPhone|iPad|iPod)/
      }, {
        s: "Mac OS X",
        r: /Mac OS X/
      }, {
        s: "Mac OS",
        r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
      }];
      var r = 0;
      for (; r < o.length; r++) {
        var s = o[r];
        if (s.r.test(this.userAgent)) {
          if ((i = s.s) === "Mac OS X" && this.isNewIpad()) {
            i = "iOS";
          }
          break;
        }
      }
      function a(e, t) {
        var i = e.exec(t);
        if (i && i[1]) {
          return i[1];
        } else {
          return "";
        }
      }
      function c(e, t) {
        var i = RegExp("(?:^|[^A-Z0-9-_]|[^A-Z0-9-]_|sprd-)(?:" + e + ")", "i").exec(t);
        if (i) {
          return i.slice(1)[0];
        } else {
          return "";
        }
      }
      if (/Windows/.test(i)) {
        n = a(/Windows (.*)/, i);
        i = "windows";
      }
      switch (i) {
        case "Mac OS X":
          n = c("Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\d+(?:[_\\.]\\d+)+))?", this.userAgent);
          i = "mac";
          break;
        case "Android":
          if (!(t = a(/Android ([\.\_\d]+)/, e = this.userAgent))) {
            t = a(/Android\/([\.\_\d]+)/, e);
          }
          n = t;
          i = "android";
          break;
        case "iOS":
          n = this.isNewIpad() ? c("Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\d+(?:[_\\.]\\d+)+))?", this.userAgent) : (n = /OS (\d+)_(\d+)_?(\d+)?/.exec(this.appVersion)) ? n[1] + "." + n[2] + "." + (n[3] | 0) : "";
          i = "ios";
      }
      return {
        os_name: i,
        os_version: n
      };
    };
    e.prototype.getDeviceModel = function (e) {
      var t = "";
      try {
        if (e === "android") {
          navigator.userAgent.split(";").forEach(function (e) {
            if (e.indexOf("Build/") > -1) {
              t = e.slice(0, e.indexOf("Build/"));
            }
          });
        } else if (e === "ios" || e === "mac" || e === "windows") {
          if (this.isNewIpad()) {
            t = "iPad";
          } else {
            var i = navigator.userAgent.replace("Mozilla/5.0 (", "");
            var n = i.indexOf(";");
            t = i.slice(0, n);
          }
        }
      } catch (e) {}
      return t.trim();
    };
    e.prototype.isNewIpad = function () {
      return this.userAgent !== undefined && navigator.platform === "MacIntel" && typeof navigator.maxTouchPoints == "number" && navigator.maxTouchPoints > 1;
    };
    return e;
  }();
  var X = {
    sg: "1fz22z22z1nz21z4mz4bz4bz21z1ez18z1jz1gz49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",
    va: "1fz22z22z1nz21z4mz4bz4bz1kz18z1jz1gz24z18z49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k"
  };
  var Z = {
    va: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az1gz22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
    sg: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
    in: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az1gz22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k"
  };
  var Q = {
    sg: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z21z1ez4az22z1gz1iz22z1mz1iz24z4az1az1mz1k",
    va: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z24z18z4az22z1gz1iz22z1mz1iz24z4az1az1mz1k",
    in: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z24z18z49z23z21z1cz18z21z22z4ez18z4az22z1gz1iz22z1mz1iz24z4az1az1mz1k"
  };
  var ee = {
    sg: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az23z21z4az22z1gz1iz22z1mz1iz24z4az1az1mz1k",
    va: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az23z21z4az22z1gz1iz22z1mz1iz4az1az1mz1k"
  };
  var et = "5.1.4_oversea_safe";
  var ei = function () {
    function e(e, t) {
      this.collector = e;
      this.config = t;
      this.eventNameWhiteList = ["__bav_page", "__bav_beat", "__bav_page_statistics", "__bav_click", "__bav_page_exposure"];
      this.paramsNameWhiteList = ["$inactive", "$inline", "$target_uuid_list", "$source_uuid", "$is_spider", "$source_id", "$is_first_time", "_staging_flag"];
      this.regStr = RegExp("^[a-zA-Z0-9][a-z0-9A-Z_.-]{1,255}$");
    }
    e.prototype.checkVerify = function (e) {
      var t = this;
      if (!e || !e.length) {
        return false;
      }
      var i = e[0];
      if (!i) {
        return false;
      }
      var n = i.events;
      var o = i.header;
      if (!n || !n.length) {
        return false;
      }
      var r = true;
      n.forEach(function (e) {
        if (!e) {
          r = false;
          e.checkEvent = "事件异常";
          return;
        }
        if (!t.checkEventName(e.event)) {
          r = false;
          e.checkEvent = "事件名不能以 $ or __开头";
        }
        if (!t.checkEventParams(e.params)) {
          r = false;
          e.checkParams = "属性名不能以 $ or __开头";
        }
      });
      if (!this.checkEventParams(o)) {
        r = false;
      }
      return r;
    };
    e.prototype.checkEventName = function (e) {
      return !!e && this.calculate(e, "event");
    };
    e.prototype.checkEventParams = function (e) {
      var t = e;
      if (typeof e == "string") {
        t = JSON.parse(t);
      }
      if (!Object.keys(t).length) {
        return true;
      }
      for (var i in t) {
        return !!this.calculate(i, "params") && (typeof t[i] != "string" || !(t[i].length > 1024));
      }
      return true;
    };
    e.prototype.calculate = function (e, t) {
      return (t === "event" ? this.eventNameWhiteList : this.paramsNameWhiteList).indexOf(e) !== -1 || !RegExp("^\\$").test(e) && !RegExp("^__").test(e);
    };
    return e;
  }();
  (ti = V ||= {}).Init = "init";
  ti.Config = "config";
  ti.Start = "start";
  ti.Ready = "ready";
  ti.TokenComplete = "token-complete";
  ti.TokenStorage = "token-storage";
  ti.TokenFetch = "token-fetch";
  ti.TokenError = "token-error";
  ti.ConfigUuid = "config-uuid";
  ti.ConfigWebId = "config-webid";
  ti.ConfigDomain = "config-domain";
  ti.CustomWebId = "custom-webid";
  ti.TokenChange = "token-change";
  ti.TokenReset = "token-reset";
  ti.ConfigTransform = "config-transform";
  ti.EnvTransform = "env-transform";
  ti.SessionReset = "session-reset";
  ti.SessionResetTime = "session-reset-time";
  ti.Event = "event";
  ti.Events = "events";
  ti.EventNow = "event-now";
  ti.CleanEvents = "clean-events";
  ti.BeconEvent = "becon-event";
  ti.SubmitBefore = "submit-before";
  ti.SubmitScuess = "submit-scuess";
  ti.SubmitAfter = "submit-after";
  ti.SubmitError = "submit-error";
  ti.SubmitVerify = "submit-verify";
  ti.DestoryInstance = "destory-instance";
  ti.Stay = "stay";
  ti.ResetStay = "reset-stay";
  ti.StayReady = "stay-ready";
  ti.SetStay = "set-stay";
  ti.RouteChange = "route-change";
  ti.RouteReady = "route-ready";
  ti.Ab = "ab";
  ti.AbVar = "ab-var";
  ti.AbAllVars = "ab-all-vars";
  ti.AbConfig = "ab-config";
  ti.AbExternalVersion = "ab-external-version";
  ti.AbVersionChangeOn = "ab-version-change-on";
  ti.AbVersionChangeOff = "ab-version-change-off";
  ti.AbOpenLayer = "ab-open-layer";
  ti.AbCloseLayer = "ab-close-layer";
  ti.AbReady = "ab-ready";
  ti.AbComplete = "ab-complete";
  ti.AbTimeout = "ab-timeout";
  ti.Profile = "profile";
  ti.ProfileSet = "profile-set";
  ti.ProfileSetOnce = "profile-set-once";
  ti.ProfileUnset = "profile-unset";
  ti.ProfileIncrement = "profile-increment";
  ti.ProfileAppend = "profile-append";
  ti.ProfileClear = "profile-clear";
  ti.Autotrack = "autotrack";
  ti.AutotrackReady = "autotrack-ready";
  ti.CepReady = "cep-ready";
  ti.TracerReady = "tracer-ready";
  ti.sessionRecord = "session-record";
  ti.SessionRecordStart = "session-record-start";
  ti.SessionRecordPause = "session-record-pause";
  ti.SessionRecordEnd = "session-record-end";
  ti.SessionRecordReport = "session-record-report";
  ti.VisualCollectReady = "visual-collect-ready";
  ti.VisualApiReady = "visual-api-ready";
  ti.VisualApiUpdate = "visual-api-update";
  (tn = j ||= {}).DEBUGGER_MESSAGE = "debugger-message";
  tn.DEBUGGER_MESSAGE_SDK = "debugger-message-sdk";
  tn.DEBUGGER_MESSAGE_FETCH = "debugger-message-fetch";
  tn.DEBUGGER_MESSAGE_FETCH_RESULT = "debugger-message-fetch-result";
  tn.DEBUGGER_MESSAGE_EVENT = "debugger-message-event";
  tn.DEVTOOL_WEB_READY = "devtool-web-ready";
  var en = V;
  var eo = undefined;
  var er = new Date().getTimezoneOffset();
  var es = parseInt("" + -er / 60, 10);
  var ea = er * 60;
  var ec = function () {
    function e(e, t) {
      this.is_first_time = true;
      this.configPersist = false;
      this.initConfig = t;
      this.collect = e;
      var i = new Y(t.app_id, t.cookie_domain || "", t.cookie_expire || 604800000).init();
      this.eventCheck = new ei(e, t);
      var n = "__tea_cache_first_" + t.app_id;
      this.configKey = "__tea_cache_config_" + t.app_id;
      this.sessionStorage = new F(false, "session");
      this.localStorage = new F(false, "local");
      this.channelUrl = t.channel_type === "tcpy" || t.channel_type === "ttp" ? {
        WEBID_URL: "/v1/user/webid",
        TOB_URL: "",
        REPORT_URL: "/v1/list"
      } : {
        WEBID_URL: "/webid",
        TOB_URL: "/tobid",
        REPORT_URL: "/list"
      };
      if (t.configPersist) {
        this.configPersist = true;
        this.storage = t.configPersist === 1 ? this.sessionStorage : this.localStorage;
      }
      var o = this.localStorage.getItem(n);
      if (o && o == 1) {
        this.is_first_time = false;
      } else {
        this.is_first_time = true;
        this.localStorage.setItem(n, "1");
      }
      this.envInfo = {
        user: {
          user_unique_id: eo,
          user_type: eo,
          user_id: eo,
          user_is_auth: eo,
          user_is_login: eo,
          device_id: eo,
          web_id: eo,
          ip_addr_id: eo,
          user_unique_id_type: eo
        },
        header: {
          app_id: eo,
          app_name: eo,
          app_install_id: eo,
          install_id: eo,
          app_package: eo,
          app_channel: eo,
          app_version: eo,
          ab_version: eo,
          os_name: i.os_name,
          os_version: i.os_version,
          device_model: i.device_model,
          ab_client: eo,
          traffic_type: eo,
          client_ip: eo,
          device_brand: eo,
          os_api: eo,
          access: eo,
          language: i.language,
          region: eo,
          app_language: eo,
          app_region: eo,
          creative_id: i.utm.creative_id,
          ad_id: i.utm.ad_id,
          campaign_id: i.utm.campaign_id,
          log_type: eo,
          rnd: eo,
          platform: i.platform,
          sdk_version: et,
          sdk_lib: "js",
          province: eo,
          city: eo,
          timezone: es,
          tz_offset: ea,
          tz_name: eo,
          sim_region: eo,
          carrier: eo,
          resolution: i.screen_width + "x" + i.screen_height,
          browser: i.browser,
          browser_version: i.browser_version,
          referrer: i.referrer,
          referrer_host: i.referrer_host,
          width: i.screen_width,
          height: i.screen_height,
          screen_width: i.screen_width,
          screen_height: i.screen_height,
          utm_term: i.utm.utm_term,
          utm_content: i.utm.utm_content,
          utm_source: i.utm.utm_source,
          utm_medium: i.utm.utm_medium,
          utm_campaign: i.utm.utm_campaign,
          tracer_data: JSON.stringify(i.utm.tracer_data),
          custom: {},
          wechat_unionid: eo,
          wechat_openid: eo
        }
      };
      this.ab_version = "";
      this.ab_uuid_cache = {};
      this.evtParams = {};
      this.reportErrorCallback = function () {};
      this.isLast = false;
      this.setCustom(i);
      this.initDomain();
      this.initABData();
    }
    e.prototype.initDomain = function (e) {
      var t = this.initConfig.channel_domain;
      if (t) {
        this.domain = t;
      } else {
        var i = e || this.initConfig.channel;
        var n = this.initConfig && this.initConfig.channel_type ? this.initConfig.channel_type === "tcpy" ? Q[i] : ee[i] : X[i];
        this.domain = G(n);
      }
    };
    e.prototype.setDomain = function (e) {
      this.customDomain = true;
      this.domain = e;
    };
    e.prototype.getDomain = function (e) {
      if (!this.customDomain) {
        if (e) {
          this.initDomain(e);
        }
      }
      return this.domain;
    };
    e.prototype.initABData = function () {
      var e = "__tea_sdk_ab_version_" + this.initConfig.app_id;
      var t = null;
      if (this.initConfig.ab_cross) {
        var i = this.localStorage.getCookie(e, this.initConfig.ab_cookie_domain);
        t = i ? JSON.parse(i) : null;
      } else {
        t = this.localStorage.getItem(e);
      }
      this.setAbCache(t);
    };
    e.prototype.setAbCache = function (e) {
      this.ab_cache = e;
    };
    e.prototype.getAbCache = function () {
      return this.ab_cache;
    };
    e.prototype.clearAbCache = function () {
      this.ab_cache = {};
      this.ab_version = "";
    };
    e.prototype.setAbVersion = function (e) {
      this.ab_version = e;
    };
    e.prototype.getAbVersion = function () {
      return this.ab_version;
    };
    e.prototype.setAbUuidCache = function (e, t) {
      var i = t || this.envInfo.user.user_unique_id;
      this.ab_uuid_cache["" + i] ||= [];
      if (this.ab_uuid_cache["" + i].indexOf(e) === -1) {
        this.ab_uuid_cache["" + i].push(e);
      }
    };
    e.prototype.getAbUuidCache = function (e) {
      return this.ab_uuid_cache["" + e];
    };
    e.prototype.getUrl = function (e) {
      var t = "";
      switch (e) {
        case "event":
          t = this.channelUrl.REPORT_URL;
          break;
        case "webid":
          t = this.channelUrl.WEBID_URL;
          break;
        case "tobid":
          t = this.channelUrl.TOB_URL;
      }
      var i = "";
      if (this.initConfig.caller) {
        i = "?sdk_version=" + et + "&sdk_name=web&app_id=" + this.initConfig.app_id + "&caller=" + this.initConfig.caller;
      }
      return "" + this.getDomain() + t + i;
    };
    e.prototype.setCustom = function (e) {
      if (e && e.latest_data && e.latest_data.isLast) {
        delete e.latest_data.isLast;
        this.isLast = true;
        for (var t in e.latest_data) {
          this.envInfo.header.custom[t] = e.latest_data[t];
        }
      }
    };
    e.prototype.setAppid = function (e) {
      this.envInfo.header.app_id = e;
    };
    e.prototype.set = function (e) {
      var t = this;
      Object.keys(e).forEach(function (i) {
        if (e[i] === undefined || e[i] === null) {
          t.delete(i);
        }
        try {
          t.eventCheck.calculate(i, "config");
        } catch (e) {}
        if (i === "traffic_type" && t.isLast) {
          t.envInfo.header.custom.$latest_traffic_source_type = e[i];
        }
        if (i === "evtParams") {
          t.evtParams = w({}, t.evtParams || {}, e.evtParams || {});
        } else if (i === "_staging_flag") {
          t.evtParams = w({}, t.evtParams || {}, {
            _staging_flag: e._staging_flag
          });
        } else if (i === "reportErrorCallback" && typeof e[i] == "function") {
          t.reportErrorCallback = e[i];
        } else {
          var n = "";
          var o = "";
          if (i.indexOf(".") > -1) {
            var r = i.split(".");
            n = r[0];
            o = r[1];
          }
          if (n) {
            if (n === "user" || n === "header") {
              t.envInfo[n][o] = e[i];
            } else {
              t.envInfo.header.custom[o] = e[i];
            }
          } else if (Object.hasOwnProperty.call(t.envInfo.user, i)) {
            if (["user_type", "ip_addr_id"].indexOf(i) > -1) {
              t.envInfo.user[i] = e[i] ? Number(e[i]) : e[i];
            } else if (["user_id", "web_id", "user_unique_id", "user_unique_id_type"].indexOf(i) > -1) {
              t.envInfo.user[i] = e[i] ? String(e[i]) : e[i];
            } else if (["user_is_auth", "user_is_login"].indexOf(i) > -1) {
              t.envInfo.user[i] = !!e[i];
            } else if (i === "device_id") {
              t.envInfo.user[i] = e[i];
            }
          } else if (Object.hasOwnProperty.call(t.envInfo.header, i)) {
            t.envInfo.header[i] = e[i];
          } else {
            t.envInfo.header.custom[i] = e[i];
          }
        }
      });
    };
    e.prototype.get = function (e) {
      try {
        if (e) {
          if (e === "evtParams") {
            return this.evtParams;
          } else if (e === "reportErrorCallback") {
            return this[e];
          } else if (Object.hasOwnProperty.call(this.envInfo.user, e)) {
            return this.envInfo.user[e];
          } else if (Object.hasOwnProperty.call(this.envInfo.header, e)) {
            return this.envInfo.header[e];
          } else {
            return JSON.parse(JSON.stringify(this.envInfo[e]));
          }
        } else {
          return JSON.parse(JSON.stringify(this.envInfo));
        }
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.setStore = function (e) {
      try {
        if (!this.configPersist) {
          return;
        }
        var t = this.storage.getItem(this.configKey) || {};
        if (t && Object.keys(e).length) {
          var i = Object.assign(e, t);
          this.storage.setItem(this.configKey, i);
        }
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.getStore = function () {
      try {
        if (!this.configPersist) {
          return null;
        }
        var e = this.storage.getItem(this.configKey) || {};
        if (e && Object.keys(e).length) {
          return e;
        } else {
          return null;
        }
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return null;
      }
    };
    e.prototype.delete = function (e) {
      try {
        if (!this.configPersist) {
          return;
        }
        var t = this.storage.getItem(this.configKey) || {};
        if (t && Object.hasOwnProperty.call(t, e)) {
          delete t[e];
          this.storage.setItem(this.configKey, t);
        }
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    return e;
  }();
  var eu = function () {
    function e(e, t) {
      this.isLog = t || false;
      this.name = e || "";
    }
    e.prototype.info = function (e) {
      this.isLog;
    };
    e.prototype.warn = function (e) {
      this.isLog;
    };
    e.prototype.error = function (e) {
      this.isLog;
    };
    e.prototype.throw = function (e) {
      this.error(this.name);
      throw Error(e);
    };
    return e;
  }();
  var el = function () {
    function e() {
      this.spiderBot = ["Baiduspider", "googlebot", "360Spider", "haosouspider", "YoudaoBot", "Sogou News Spider", "Yisouspider", "Googlebot", "Headless", "Applebot", "Bingbot", "PetalBot"];
    }
    e.prototype.checkSpider = function (e) {
      if (!e.enable_spider) {
        return false;
      }
      var t = window.navigator.userAgent;
      if (!t) {
        return true;
      }
      var i = false;
      this.spiderBot.forEach(function (e) {
        if (t.indexOf(e) !== -1) {
          i = true;
        }
      });
      return i;
    };
    return e;
  }();
  var eh = function () {
    function e(e, t) {
      this.collect = e;
      this.native = t;
    }
    var t = e.prototype;
    t.bridgeInject = function () {
      try {
        return !!this.native && !!AppLogBridge;
      } catch (e) {
        return false;
      }
    };
    t.bridgeReady = function () {
      var e = this;
      return new Promise(function (t, i) {
        try {
          if (e.bridgeInject()) {
            AppLogBridge.hasStarted(function (e) {
              if (e) {
                t(true);
              } else {
                i(false);
              }
            });
          } else {
            i(false);
          }
        } catch (e) {
          i(false);
        }
      });
    };
    t.setNativeAppId = function (e) {
      try {
        AppLogBridge.setNativeAppId(JSON.stringify(e));
      } catch (e) {}
    };
    t.setConfig = function (e) {
      var t = this;
      try {
        Object.keys(e).forEach(function (i) {
          if (i === "user_unique_id") {
            t.setUserUniqueId(e[i]);
          } else if (e[i]) {
            t.addHeaderInfo(i, e[i]);
          } else {
            t.removeHeaderInfo(i);
          }
        });
      } catch (e) {}
    };
    t.setUserUniqueId = function (e) {
      try {
        AppLogBridge.setUserUniqueId(e);
      } catch (e) {}
    };
    t.addHeaderInfo = function (e, t) {
      try {
        AppLogBridge.addHeaderInfo(e, t);
      } catch (e) {}
    };
    t.setHeaderInfo = function (e) {
      try {
        AppLogBridge.setHeaderInfo(JSON.stringify(e));
      } catch (e) {}
    };
    t.removeHeaderInfo = function (e) {
      try {
        AppLogBridge.removeHeaderInfo(e);
      } catch (e) {}
    };
    t.reportPv = function (e) {
      this.onEventV3("predefine_pageview", e);
    };
    t.onEventV3 = function (e, t) {
      try {
        AppLogBridge.onEventV3(e, t);
        this.collect.emit(DebuggerMesssge.DEBUGGER_MESSAGE, {
          type: DebuggerMesssge.DEBUGGER_MESSAGE_EVENT,
          info: "bridge埋点上报",
          time: Date.now(),
          data: [{
            events: [{
              event: e,
              params: t
            }]
          }],
          code: 200,
          status: "success"
        });
      } catch (e) {}
    };
    t.profileSet = function (e) {
      try {
        AppLogBridge.profileSet(e);
      } catch (e) {}
    };
    t.profileSetOnce = function (e) {
      try {
        AppLogBridge.profileSetOnce(e);
      } catch (e) {}
    };
    t.profileIncrement = function (e) {
      try {
        AppLogBridge.profileIncrement(e);
      } catch (e) {}
    };
    t.profileUnset = function (e) {
      try {
        AppLogBridge.profileUnset(e);
      } catch (e) {}
    };
    t.profileAppend = function (e) {
      try {
        AppLogBridge.profileAppend(e);
      } catch (e) {}
    };
    return e;
  }();
  var ep = function () {
    function e() {
      this.eventLimit = 50;
      this.enable_ttwebid = false;
      this.eventCache = [];
      this.beconEventCache = [];
    }
    e.prototype.apply = function (e, t) {
      var i = this;
      this.collect = e;
      this.config = t;
      this.configManager = e.configManager;
      this.eventCheck = new ei(e, t);
      this.cacheStorgae = new F(true);
      this.localStorage = new F(false);
      this.maxReport = t.max_report || 10;
      this.reportTime = t.reportTime || 30;
      this.timeout = t.timeout || 100000;
      this.enable_ttwebid = t.enable_ttwebid;
      this.reportUrl = t.report_url || this.configManager.getUrl("event");
      this.eventKey = "__tea_cache_events_" + this.configManager.get("app_id");
      this.beconKey = "__tea_cache_events_becon_" + this.configManager.get("app_id");
      this.abKey = "__tea_sdk_ab_version_" + this.configManager.get("app_id");
      this.refer_key = "__tea_cache_refer_" + this.configManager.get("app_id");
      this.collect.on(en.Ready, function () {
        i.reportAll(false);
      });
      this.collect.on(en.ConfigDomain, function () {
        i.reportUrl = i.configManager.getUrl("event");
      });
      this.collect.on(en.Event, function (e) {
        i.event(e);
      });
      this.collect.on(en.BeconEvent, function (e) {
        i.beconEvent(e);
      });
      this.collect.on(en.CleanEvents, function () {
        i.reportAll(false);
      });
      this.linster();
    };
    e.prototype.linster = function () {
      var e = this;
      window.addEventListener("unload", function () {
        e.reportAll(true);
      }, false);
      x(function () {
        e.reportAll(true);
      });
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") {
          e.reportAll(true);
        }
      }, false);
    };
    e.prototype.reportAll = function (e) {
      this.report(e);
      this.reportBecon();
    };
    e.prototype.event = function (e) {
      var t = this;
      try {
        var i = A(e, this.cacheStorgae.getItem(this.eventKey) || []);
        this.cacheStorgae.setItem(this.eventKey, i);
        if (this.reportTimeout) {
          clearTimeout(this.reportTimeout);
        }
        if (i.length >= this.maxReport) {
          this.report(false);
        } else {
          var n = this.reportTime;
          this.reportTimeout = setTimeout(function () {
            t.report(false);
            t.reportTimeout = null;
          }, n);
        }
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.beconEvent = function (e) {
      var t = A(e, this.cacheStorgae.getItem(this.beconKey) || []);
      this.cacheStorgae.setItem(this.beconKey, t);
      if (!this.collect.destroy) {
        if (this.collect.tokenManager.getReady() && this.collect.sdkReady) {
          this.cacheStorgae.removeItem(this.beconKey);
          this.send(this.split(this.merge(t)), true);
        }
      }
    };
    e.prototype.reportBecon = function () {
      if (!this.collect.destroy && this.collect.tokenManager.getReady() && this.collect.sdkReady) {
        var e = this.cacheStorgae.getItem(this.beconKey) || [];
        if (e && e.length) {
          this.cacheStorgae.removeItem(this.beconKey);
          this.send(this.split(this.merge(e)), true);
        }
      }
    };
    e.prototype.report = function (e) {
      if (!this.collect.destroy && this.collect.tokenManager.getReady() && this.collect.sdkReady) {
        var t = this.cacheStorgae.getItem(this.eventKey) || [];
        if (t.length) {
          this.cacheStorgae.removeItem(this.eventKey);
          this.sliceEvent(t, e);
        }
      }
    };
    e.prototype.sliceEvent = function (e, t) {
      if (e.length > this.eventLimit) {
        for (var i = 0; i < e.length; i += this.eventLimit) {
          n = e.slice(i, i + this.eventLimit);
          var n;
          var o = this.split(this.merge(n));
          this.send(o, t);
        }
      } else {
        o = this.split(this.merge(e));
        this.send(o, t);
      }
    };
    e.prototype.handleRefer = function () {
      var e = "";
      try {
        if (this.config.spa || this.config.autotrack) {
          var t = this.localStorage.getItem(this.refer_key) || {};
          e = t.routeChange ? t.refer_key : this.configManager.get("referrer");
        } else {
          e = this.configManager.get("referrer");
        }
      } catch (t) {
        e = document.referrer;
      }
      return e;
    };
    e.prototype.merge = function (e, t) {
      var i = this;
      var n = this.configManager.get();
      var o = n.header;
      var r = n.user;
      o.custom = JSON.stringify(o.custom);
      o.referrer = this.handleRefer();
      var s = this.configManager.get("evtParams");
      var a = this.configManager.get("user_unique_id_type");
      var c = JSON.parse(JSON.stringify({
        events: e.map(function (e) {
          try {
            if (Object.keys(s).length && !t) {
              e.params = w({}, s, e.params);
            }
            if (a) {
              e.params.$user_unique_id_type = a;
            }
            var n = i.configManager.getAbCache();
            var o = i.configManager.getAbUuidCache(r.user_unique_id);
            if (n && n.uuid && n.uuid === r.user_unique_id) {
              var c = i.configManager.getAbVersion();
              if (i.config.enable_ab_uuid) {
                if (o && o.length) {
                  var u = o.join(",");
                  if (c && c.includes(u)) {
                    e.ab_sdk_version = c;
                  }
                }
              } else if (c) {
                e.ab_sdk_version = c;
              }
            }
            e.session_id = i.collect.sessionManager.getSessionId();
            e.params = JSON.stringify(e.params);
            return e;
          } catch (t) {
            i.collect.emit(j.DEBUGGER_MESSAGE, {
              type: j.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: t.message
            });
            return e;
          }
        }),
        user: r,
        header: o
      }));
      c.local_time = Math.floor(Date.now() / 1000);
      c.user_unique_type = this.config.enable_ttwebid ? this.config.user_unique_type : undefined;
      c.verbose = 1;
      var u = [];
      u.push(c);
      return u;
    };
    e.prototype.split = function (e) {
      return e = e.map(function (e) {
        var t = [];
        t.push(e);
        return t;
      });
    };
    e.prototype.send = function (e, t) {
      var i = this;
      if (e.length) {
        if (!this.config.disable_track_event) {
          e.forEach(function (e) {
            try {
              var n = JSON.parse(JSON.stringify(e));
              if (i.config.filter) {
                n = i.config.filter(n);
              }
              if (i.collect.eventFilter && n) {
                n = i.collect.eventFilter(n);
              }
              var o = n || e;
              var r = JSON.parse(JSON.stringify(o));
              i.eventCheck.checkVerify(r);
              if (!o.length) {
                return;
              }
              i.collect.emit(en.SubmitBefore, o);
              i.collect.emit(en.SubmitVerify, o);
              i.collect.requestManager.useRequest({
                url: i.reportUrl,
                data: o,
                success: function (e, t) {
                  if (e && e.e !== 0) {
                    i.collect.emit(en.SubmitError, {
                      type: "f_data",
                      eventData: t,
                      errorCode: e.e,
                      response: e
                    });
                    i.collect.emit(j.DEBUGGER_MESSAGE, {
                      type: j.DEBUGGER_MESSAGE_EVENT,
                      info: "埋点上报失败",
                      time: Date.now(),
                      data: r,
                      code: e.e,
                      failType: "数据异常失败",
                      status: "fail"
                    });
                  } else {
                    i.collect.emit(en.SubmitScuess, {
                      eventData: t,
                      res: e
                    });
                    i.collect.emit(j.DEBUGGER_MESSAGE, {
                      type: j.DEBUGGER_MESSAGE_EVENT,
                      info: "埋点上报成功",
                      time: Date.now(),
                      data: r,
                      code: 200,
                      status: "success"
                    });
                  }
                },
                fail: function (e, t) {
                  i.configManager.get("reportErrorCallback")(e, t);
                  i.collect.emit(en.SubmitError, {
                    type: "f_net",
                    eventData: e,
                    errorCode: t
                  });
                  i.collect.emit(j.DEBUGGER_MESSAGE, {
                    type: j.DEBUGGER_MESSAGE_EVENT,
                    info: "埋点上报网络异常",
                    time: Date.now(),
                    data: r,
                    code: t,
                    failType: "网络异常失败",
                    status: "fail"
                  });
                },
                timeout: i.timeout,
                useBeacon: !i.config.disable_sendbeacon && t,
                withCredentials: i.enable_ttwebid
              });
              i.collect.emit(en.SubmitAfter, o);
            } catch (e) {
              i.collect.emit(j.DEBUGGER_MESSAGE, {
                type: j.DEBUGGER_MESSAGE_SDK,
                info: "发生了异常",
                level: "error",
                time: Date.now(),
                data: e.message
              });
            }
          });
        }
      }
    };
    return e;
  }();
  function ef() {
    return function e(t) {
      if (t) {
        return (t ^ Math.random() * 16 >> t / 4).toString(10);
      } else {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, e);
      }
    }().replace(/-/g, "").slice(0, 19);
  }
  var ed = function () {
    function e() {
      this.cacheToken = {};
      this.enableCookie = false;
      this.enable_ttwebid = false;
      this.enableCustomWebid = false;
    }
    e.prototype.apply = function (e, t) {
      var i = this;
      this.collect = e;
      this.config = t;
      this.configManager = this.collect.configManager;
      this.storage = new F(false);
      this.tokenKey = "__tea_cache_tokens_" + t.app_id;
      this.enable_ttwebid = t.enable_ttwebid;
      this.enableCustomWebid = t.enable_custom_webid;
      this.collect.on(en.ConfigUuid, function (e) {
        i.setUuid(e);
      });
      this.collect.on(en.ConfigWebId, function (e) {
        i.setWebId(e);
      });
      this.enableCookie = t.cross_subdomain;
      this.expiresTime = t.cookie_expire || 604800000;
      this.cookieDomain = t.cookie_domain || "";
      this.checkStorage();
    };
    e.prototype.checkStorage = function () {
      var e = this;
      if (this.enableCookie) {
        var t = this.storage.getCookie(this.tokenKey, this.cookieDomain);
        this.cacheToken = t && typeof t == "string" ? JSON.parse(t) : {};
      } else {
        this.cacheToken = this.storage.getItem(this.tokenKey) || {};
      }
      this.tokenType = this.cacheToken && this.cacheToken._type_ ? this.cacheToken._type_ : "default";
      if (this.tokenType !== "custom" || this.enableCustomWebid) {
        if (this.enableCustomWebid) {
          this.collect.on(en.CustomWebId, function () {
            e.tokenReady = true;
            e.collect.emit(en.TokenComplete);
          });
        } else if (!this.checkEnv()) {
          if (this.enable_ttwebid) {
            this.completeTtWid(this.cacheToken);
          } else {
            this.check();
          }
        }
      } else {
        this.remoteWebid();
      }
    };
    e.prototype.check = function () {
      if (this.cacheToken && this.cacheToken.web_id) {
        this.complete(this.cacheToken);
      } else if (this.config.disable_webid) {
        this.complete({
          web_id: ef(),
          user_unique_id: this.configManager.get("user_unique_id") || ef()
        });
      } else {
        this.remoteWebid();
      }
    };
    e.prototype.checkEnv = function () {
      var e = window.navigator.userAgent;
      if (e.indexOf("miniProgram") !== -1 || e.indexOf("MiniProgram") !== -1) {
        var t = U(window.location.href);
        return !!t && !!t.Web_ID && (this.complete({
          web_id: "" + t.Web_ID,
          user_unique_id: this.configManager.get("user_unique_id") || "" + t.Web_ID
        }), true);
      }
      return false;
    };
    e.prototype.remoteWebid = function () {
      var e = this;
      var t = this.configManager.getUrl("webid");
      var i = {
        app_key: this.config.app_key,
        app_id: this.config.app_id,
        url: location.href,
        user_agent: window.navigator.userAgent,
        referer: document.referrer,
        user_unique_id: ""
      };
      this.collect.emit(j.DEBUGGER_MESSAGE, {
        type: j.DEBUGGER_MESSAGE_SDK,
        info: "SDK 发起WEBID请求",
        logType: "fetch",
        level: "info",
        time: Date.now(),
        data: i
      });
      var n = ef();
      this.collect.requestManager.useRequest({
        url: t,
        data: i,
        success: function (t) {
          var i;
          if (t && t.e === 0) {
            i = t.web_id;
            e.collect.emit(j.DEBUGGER_MESSAGE, {
              type: j.DEBUGGER_MESSAGE_SDK,
              info: "WEBID请求成功",
              logType: "fetch",
              level: "info",
              time: Date.now(),
              data: t
            });
          } else {
            i = n;
            e.collect.configManager.set({
              localWebId: n
            });
            e.collect.emit(en.TokenError);
            e.collect.emit(j.DEBUGGER_MESSAGE, {
              type: j.DEBUGGER_MESSAGE_SDK,
              info: "WEBID请求返回值异常",
              logType: "fetch",
              level: "warn",
              time: Date.now(),
              data: t
            });
            e.collect.logger.warn("appid: " + e.config.app_id + " get webid error, use local webid~");
          }
          e.complete({
            web_id: e.configManager.get("web_id") || i,
            user_unique_id: e.configManager.get("user_unique_id") || i
          });
        },
        fail: function () {
          e.complete({
            web_id: e.configManager.get("web_id") || n,
            user_unique_id: e.configManager.get("user_unique_id") || n
          });
          e.collect.configManager.set({
            localWebId: n
          });
          e.collect.emit(en.TokenError);
          e.collect.emit(j.DEBUGGER_MESSAGE, {
            type: j.DEBUGGER_MESSAGE_SDK,
            info: "WEBID请求网络异常",
            logType: "fetch",
            level: "error",
            time: Date.now(),
            data: null
          });
          e.collect.logger.warn("appid: " + e.config.app_id + ", get webid error, use local webid~");
        },
        timeout: 300000
      });
    };
    e.prototype.complete = function (e) {
      var t = e.web_id;
      var i = e.user_unique_id;
      e.timestamp = Date.now();
      this.collect.configManager.set({
        web_id: t,
        user_unique_id: i
      });
      this.setStorage(e);
      this.tokenReady = true;
      this.collect.emit(en.TokenComplete);
    };
    e.prototype.completeTtWid = function (e) {
      var t = e.user_unique_id || "";
      var i = this.configManager.get("user_unique_id");
      if (i || t) {
        this.configManager.set({
          user_unique_id: i || t
        });
      }
      this.setStorage(e);
      this.tokenReady = true;
      this.collect.emit(en.TokenComplete);
    };
    e.prototype.setUuid = function (e) {
      if (e && ["null", "undefined", "Null", "None"].indexOf(e) === -1) {
        var t = String(e);
        var i = this.configManager.get("user_unique_id");
        var n = this.cacheToken && this.cacheToken.user_unique_id;
        if (t !== i || t !== n) {
          this.configManager.set({
            user_unique_id: t
          });
          this.cacheToken ||= {};
          this.cacheToken.user_unique_id = t;
          this.cacheToken.timestamp = Date.now();
          this.setStorage(this.cacheToken);
          this.collect.emit(en.TokenChange, "uuid");
          this.collect.emit(en.SessionReset);
        }
      } else {
        this.clearUuid();
      }
    };
    e.prototype.clearUuid = function () {
      if (!this.config.enable_ttwebid) {
        if (this.configManager.get("web_id")) {
          this.configManager.set({
            user_unique_id: this.configManager.get("web_id")
          });
          if (this.cacheToken && this.cacheToken.web_id) {
            this.cacheToken.user_unique_id = this.cacheToken.web_id;
            this.cacheToken.timestamp = Date.now();
            this.setStorage(this.cacheToken);
          }
          this.collect.emit(en.TokenReset);
        }
      }
    };
    e.prototype.setWebId = function (e) {
      if (e && !this.config.enable_ttwebid) {
        if (this.cacheToken && this.cacheToken.web_id) {
          if (this.cacheToken.web_id !== e) {
            this.cacheToken.user_unique_id = this.cacheToken.web_id === this.cacheToken.user_unique_id ? e : this.cacheToken.user_unique_id;
            this.cacheToken.web_id = e;
          }
        } else {
          this.cacheToken = {};
          this.cacheToken.web_id = e;
          this.cacheToken.user_unique_id = e;
        }
        this.cacheToken.timestamp = Date.now();
        var t = this.configManager.get("web_id");
        var i = this.configManager.get("user_unique_id");
        if (!i || i === t) {
          this.configManager.set({
            user_unique_id: e
          });
          this.collect.emit(en.TokenChange, "uuid");
        }
        if (t !== e) {
          this.configManager.set({
            web_id: e
          });
          this.collect.emit(en.TokenChange, "webid");
        }
        this.setStorage(this.cacheToken);
      }
    };
    e.prototype.setStorage = function (e) {
      e._type_ = this.enableCustomWebid ? "custom" : "default";
      delete e["diss".split("").reverse().join("")];
      if (this.enableCookie || this.enable_ttwebid) {
        this.storage.setCookie(this.tokenKey, e, this.expiresTime, this.cookieDomain);
        if (this.enable_ttwebid) {
          delete e.web_id;
          this.storage.setItem(this.tokenKey, e);
        }
      } else {
        this.storage.setItem(this.tokenKey, e);
      }
      this.cacheToken = e;
    };
    e.prototype.getReady = function () {
      return this.tokenReady;
    };
    e.prototype.getTobId = function () {
      var e = this;
      return new Promise(function (t) {
        if (e.config.channel_type !== "tcpy" && e.config.channel_type !== "ttp") {
          e.collect.requestManager.useRequest({
            url: e.configManager.getUrl("tobid"),
            data: {
              app_id: e.config.app_id,
              user_unique_id: e.configManager.get("user_unique_id"),
              web_id: e.configManager.get("web_id"),
              user_unique_id_type: e.configManager.get("user_unique_id_type")
            },
            success: function (e) {
              if (e && e.e === 0) {
                t(e.tobid);
              } else {
                t("");
              }
            },
            fail: function () {
              t("");
            },
            time: 30000,
            withCredentials: e.enable_ttwebid
          });
        } else {
          t("");
        }
      });
    };
    return e;
  }();
  function eg() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var t = Math.random() * 16 | 0;
      return (e === "x" ? t : t & 3 | 8).toString(16);
    });
  }
  var e_ = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      var i = this;
      this.collect = e;
      this.storage = new F(false, "session");
      this.sessionKey = "__tea_session_id_" + t.app_id;
      this.expireTime = t.expireTime || 1800000;
      this.disableSession = t.disable_session;
      if (!this.disableSession) {
        this.setSessionId();
        this.collect.on(en.SessionReset, function () {
          i.resetSessionId();
        });
        this.collect.on(en.SessionResetTime, function () {
          i.updateSessionIdTime();
        });
      }
    };
    e.prototype.updateSessionIdTime = function () {
      var e = this.storage.getItem(this.sessionKey);
      if (e && e.sessionId) {
        var t = e.timestamp;
        if (Date.now() - t > this.expireTime) {
          e = {
            sessionId: eg(),
            timestamp: Date.now()
          };
        } else {
          e.timestamp = Date.now();
        }
        this.storage.setItem(this.sessionKey, e);
        this.resetExpTime();
      }
    };
    e.prototype.setSessionId = function () {
      var e = this;
      var t = this.storage.getItem(this.sessionKey);
      if (t && t.sessionId) {
        t.timestamp = Date.now();
      } else {
        t = {
          sessionId: eg(),
          timestamp: Date.now()
        };
      }
      this.storage.setItem(this.sessionKey, t);
      this.sessionExp = setInterval(function () {
        e.checkEXp();
      }, this.expireTime);
    };
    e.prototype.getSessionId = function () {
      var e = this.storage.getItem(this.sessionKey);
      if (this.disableSession) {
        return "";
      } else if (e && e.sessionId) {
        return e.sessionId;
      } else {
        return "";
      }
    };
    e.prototype.resetExpTime = function () {
      var e = this;
      if (this.sessionExp) {
        clearInterval(this.sessionExp);
        this.sessionExp = setInterval(function () {
          e.checkEXp();
        }, this.expireTime);
      }
    };
    e.prototype.resetSessionId = function () {
      var e = {
        sessionId: eg(),
        timestamp: Date.now()
      };
      this.storage.setItem(this.sessionKey, e);
    };
    e.prototype.checkEXp = function () {
      var e = this.storage.getItem(this.sessionKey);
      if (e && e.sessionId && Date.now() - e.timestamp + 30 >= this.expireTime) {
        e = {
          sessionId: eg(),
          timestamp: Date.now()
        };
        this.storage.setItem(this.sessionKey, e);
      }
    };
    return e;
  }();
  var em = {
    XHR_ON: 500,
    TIMEOUT: 5005
  };
  function ev(e, t, i, n) {
    try {
      var o = e.match(/\/v\d\//);
      var r = "";
      r = o ? o[0] : e.indexOf("/v1/") !== -1 ? "/v1/" : "/v2/";
      var s = e.split(r)[0];
      if (!s) {
        n(e, t, 4001);
        return;
      }
      t.forEach(function (o) {
        var r = function (e) {
          var t = "";
          for (var i in e) {
            if (e.hasOwnProperty(i) && e[i] !== undefined) {
              t += "&" + i + "=" + encodeURIComponent(JSON.stringify(e[i]));
            }
          }
          return t = t[0] === "&" ? t.slice(1) : t;
        }(o);
        var a = new Image(1, 1);
        a.onload = function () {
          a = null;
          if (i) {
            i();
          }
        };
        a.onerror = function () {
          a = null;
          if (n) {
            n(e, t, 4000);
          }
        };
        a.src = s + "/gif?" + r;
      });
    } catch (i) {
      if (n) {
        n(e, t, 4002, i.message);
      }
    }
  }
  function ey(e, t, i, n, o, r, s, a) {
    var c = window.navigator.userAgent;
    if (window.navigator.appName.indexOf("Microsoft Internet Explorer") === -1 || c.indexOf("MSIE 8.0") === -1 && c.indexOf("MSIE 9.0") === -1) {
      if (s) {
        if (window.navigator && window.navigator.sendBeacon) {
          if (window.navigator.sendBeacon(e, JSON.stringify(t))) {
            o();
          } else {
            r(e, t, 4003);
          }
          return;
        } else {
          ev(e, t, o, r);
          return;
        }
      }
    } else {
      ev(e, t, o, r);
    }
    (function (e, t, i, n, o, r, s, a, c) {
      try {
        var u = new XMLHttpRequest();
        u.open("POST", "" + e, true);
        u.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        if (n) {
          u.withCredentials = true;
        }
        u.onload = function () {
          if (o) {
            var e = null;
            if (u.responseText) {
              try {
                e = JSON.parse(u.responseText);
              } catch (t) {
                e = {};
              }
              o(e, t);
            }
          }
        };
        if (i) {
          u.timeout = i;
          u.ontimeout = function () {
            if (r) {
              r(t, em.TIMEOUT);
            }
          };
        }
        u.onerror = function () {
          u.abort();
          if (r) {
            r(t, em.XHR_ON);
          }
        };
        if (c) {
          u.send(t);
        } else {
          u.send(JSON.stringify(t));
        }
      } catch (e) {}
    })(e, t, i, n, o, r, 0, 0, a);
  }
  var eb = function () {
    function e(e, t) {
      this.collector = e;
      this.config = t;
      this.requestType = t.request_type || "xhr";
      this.supportBeacon = !!window.navigator && !!window.navigator.sendBeacon;
      this.errorCode = {
        NO_URL: 4001,
        IMG_ON: 4000,
        IMG_CATCH: 4002,
        BEACON_FALSE: 4003,
        XHR_ON: 500,
        RESPONSE: 5001,
        TIMEOUT: 5005
      };
    }
    e.prototype.useFetch = function (e) {
      var t = e.url;
      var i = e.data;
      var n = e.method;
      var o = e.success;
      var r = e.fail;
      if (window.fetch) {
        fetch(t, {
          method: n || "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify(i)
        }).then(function (e) {
          return e.json();
        }).then(function (e) {
          if (o) {
            o(e);
          }
        }).catch(function (e) {
          if (r) {
            r(i, e);
          }
        });
      } else {
        this.requestType = "xhr";
        this.useRequest({
          url: t,
          data: i,
          method: n,
          success: o,
          fail: r
        });
      }
    };
    e.prototype.useBeacon = function (e) {
      var t = e.url;
      var i = e.data;
      var n = e.success;
      var o = e.fail;
      if (window.navigator.sendBeacon(t, JSON.stringify(i))) {
        if (n) {
          n();
        }
      } else if (o) {
        o(i, this.errorCode.BEACON_FALSE);
      }
    };
    e.prototype.useRequest = function (e) {
      var t = this;
      var i = e.url;
      var n = e.data;
      var o = e.method;
      var r = e.success;
      var s = e.fail;
      var a = e.timeout;
      var c = e.useBeacon;
      var u = e.withCredentials;
      var l = e.app_key;
      var h = e.forceXhr;
      if (c && this.supportBeacon) {
        this.useBeacon({
          url: i,
          data: n,
          method: o,
          success: r,
          fail: s
        });
      } else if (this.requestType !== "fetch" || h) {
        try {
          var p = new XMLHttpRequest();
          var f = o || "POST";
          p.open(f, "" + i, true);
          p.setRequestHeader("Content-Type", "application/json; charset=utf-8");
          if (l) {
            p.setRequestHeader("X-MCS-AppKey", "" + l);
          }
          if (u) {
            p.withCredentials = true;
          }
          if (a) {
            p.timeout = a;
            p.ontimeout = function () {
              if (s) {
                s(n, t.errorCode.TIMEOUT);
              }
            };
          }
          p.onload = function () {
            if (r) {
              var e = null;
              if (p.responseText) {
                try {
                  e = JSON.parse(p.responseText);
                } catch (t) {
                  e = {};
                }
                r(e, n);
              }
            }
          };
          p.onerror = function () {
            p.abort();
            if (s) {
              s(n, t.errorCode.XHR_ON);
            }
          };
          p.send(JSON.stringify(n));
        } catch (e) {}
      } else {
        this.useFetch({
          url: i,
          data: n,
          method: o,
          success: r,
          fail: s
        });
      }
    };
    return e;
  }();
  var eE = function () {
    function e(e, t) {
      this.devToolReady = false;
      this.devToolOrigin = "*";
      this.sendAlready = false;
      if (t.enable_debug) {
        this.collect = e;
        this.config = t;
        this.app_id = t.app_id;
        var i = e.adapters.storage;
        this.cacheStorgae = new i(false, "session");
        this.filterEvent = ["__bav_page", "__bav_beat", "__bav_page_statistics", "__bav_click", "__bav_page_exposure", "bav2b_page", "bav2b_beat", "bav2b_page_statistics", "bav2b_click", "bav2b_page_exposure", "_be_active", "predefine_pageview", "__profile_set", "__profile_set_once", "__profile_increment", "__profile_unset", "__profile_append", "predefine_page_alive", "predefine_page_close", "abtest_exposure"];
        this.load();
      }
    }
    e.prototype.loadScript = function (e) {
      try {
        var t = document.createElement("script");
        t.src = e;
        t.onerror = function () {};
        t.onload = function () {};
        document.getElementsByTagName("body")[0].appendChild(t);
      } catch (e) {}
    };
    e.prototype.parseUrl = function () {
      var e = {};
      try {
        var t = window.location.href.split("?")[1].split("&");
        if (t.length) {
          t.forEach(function (t) {
            var i = t.split("=");
            e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
          });
        }
      } catch (e) {}
      return e;
    };
    e.prototype.load = function () {
      try {
        var e = this.parseUrl();
        if (e.open_devtool_web && e.app_id) {
          if (parseInt(e.app_id) !== this.app_id) {
            return;
          }
        } else if (!this.getStorage()) {
          return;
        }
        this.loadBaseInfo();
        this.loadHook();
        this.setStorage();
        this.addLintener();
        this.loadDebuggerModule();
        this.loadDevTool();
      } catch (e) {}
    };
    e.prototype.getStorage = function () {
      var e = this.cacheStorgae.getItem("__applog_devtool_web");
      return e && parseInt(e) === this.app_id;
    };
    e.prototype.setStorage = function () {
      this.cacheStorgae.setItem("__applog_devtool_web", this.app_id);
    };
    e.prototype.loadDevTool = function () {
      this.loadScript("https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/devtool/debug-web.js");
    };
    e.prototype.loadBaseInfo = function () {
      var e = this;
      this.info = [{
        title: "基本信息",
        type: 1,
        infoName: {
          app_id: this.config.app_id,
          channel: this.config.channel,
          上报域名: this.collect.configManager.getDomain(),
          SDK版本: et,
          SDK引入方式: "npm"
        }
      }, {
        title: "用户信息",
        type: 2,
        infoName: {
          uuid: this.collect.configManager.get("user").user_unique_id || "",
          web_id: this.collect.configManager.get("user").web_id || "",
          ssid: "点击获取SSID"
        }
      }, {
        title: "公共参数信息",
        type: 2,
        infoName: {
          浏览器: this.collect.configManager.get("browser"),
          浏览器版本: this.collect.configManager.get("browser_version"),
          平台: this.collect.configManager.get("platform"),
          设备型号: this.collect.configManager.get("device_model"),
          操作系统: this.collect.configManager.get("os_name"),
          操作系统版本: this.collect.configManager.get("os_version"),
          屏幕分辨率: this.collect.configManager.get("os_version"),
          来源: this.collect.configManager.get("referrer"),
          自定义信息: ""
        }
      }, {
        title: "配置信息",
        type: 3,
        infoName: {
          全埋点: !!this.config.autotrack,
          停留时长: !!this.config.enable_stay_duration
        }
      }, {
        title: "A/B配置信息",
        type: 4,
        infoName: {
          "A/B实验": !!this.config.enable_ab_test
        }
      }, {
        title: "客户端信息",
        type: 3,
        infoName: {
          打通开关: !!this.config.Native
        }
      }];
      this.log = [];
      this.event = [];
      this.collect.on(en.Ready, function () {
        e.info[1].infoName.uuid = e.collect.configManager.get("user").user_unique_id;
        e.info[1].infoName.web_id = e.collect.configManager.get("user").web_id;
        e.info[2].infoName.自定义信息 = JSON.stringify(e.collect.configManager.get("custom"));
        if (e.config.enable_ab_test) {
          e.info[4].infoName.已曝光VID = e.collect.configManager.getAbVersion();
          e.info[4].infoName["A/B域名"] = e.config.ab_channel_domain || G(Z[e.config.channel]);
          e.info[4].infoName.全部配置 = e.collect.configManager.getAbData();
        }
        if (e.config.Native) {
          e.info[5].infoName.是否打通 = !!e.collect.bridgeReport;
        }
      });
    };
    e.prototype.loadHook = function () {
      var e = this;
      this.collect.on(j.DEBUGGER_MESSAGE, function (t) {
        switch (t.type) {
          case j.DEBUGGER_MESSAGE_SDK:
            var i = {
              time: t.time,
              type: t.logType || "sdk",
              level: t.level,
              name: t.info,
              show: true,
              levelShow: true,
              needDesc: !!t.data
            };
            if (t.data) {
              i.desc = {
                content: JSON.stringify(t.data)
              };
            }
            e.updateLog(i);
            if (t.secType && t.secType === "AB") {
              e.info[4].infoName.已曝光VID = e.collect.configManager.getAbVersion();
              e.info[4].infoName.全部配置 = e.collect.configManager.getAbData();
            } else if (t.secType === "USER") {
              e.info[1].infoName.uuid = e.collect.configManager.get("user").user_unique_id;
              e.info[1].infoName.web_id = e.collect.configManager.get("user").web_id;
            }
            e.updateInfo();
            return;
          case j.DEBUGGER_MESSAGE_EVENT:
            if (t.data && t.data.length) {
              var n = t.data[0];
              var o = n.events;
              if (!o.length) {
                return;
              }
              o.forEach(function (i) {
                i.checkShow = true;
                i.searchShow = true;
                i.success = t.status;
                i.type = e.filterEvent.indexOf(i.event) !== -1 ? "sdk" : "cus";
                i.type = e.collect.bridgeReport ? "bridge" : i.type;
                i.info = "";
                if (t.status === "fail") {
                  i.info = {
                    message: "code: " + t.code + "， msg: " + t.failType
                  };
                }
              });
              e.updateEvent(n);
            }
            return;
        }
      });
    };
    e.prototype.addLintener = function () {
      var e = this;
      window.addEventListener("message", function (t) {
        if (t.origin === location.origin) {
          if (t && t.data && t.data.type === "devtool:web:ready") {
            e.devToolOrigin = t.origin;
            e.devToolReady = true;
            if (e.sendAlready) {
              return;
            }
            e.sendData("devtool:web:init", {
              info: e.info,
              log: e.log,
              event: e.event
            });
            e.sendAlready = true;
          }
          if (t && t.data && t.data.type === "devtool:web:ssid") {
            e.collect.getToken(function (t) {
              e.info[1].infoName.ssid = t.tobid;
              e.updateInfo();
            });
          }
        }
      });
    };
    e.prototype.sendData = function (e, t) {
      try {
        (window.opener || window.parent).postMessage({
          type: e,
          payload: t
        }, this.devToolOrigin);
      } catch (e) {}
    };
    e.prototype.updateInfo = function () {
      if (this.devToolReady) {
        this.sendData("devtool:web:info", this.info);
      }
    };
    e.prototype.updateLog = function (e) {
      if (this.devToolReady) {
        this.sendData("devtool:web:log", e);
      } else {
        this.log.push(e);
      }
    };
    e.prototype.updateEvent = function (e) {
      if (this.devToolReady) {
        this.sendData("devtool:web:event", e);
      } else {
        this.event.push(e);
      }
    };
    e.prototype.loadDebuggerModule = function () {
      var e = document.head || document.getElementsByTagName("head")[0];
      var t = document.createElement("style");
      t.appendChild(document.createTextNode("#debugger-applog-web {\n      position: absolute;\n      width: 90px;\n      height: 30px;\n      background: #23c243;\n      border-radius: 6px;\n      color: #fff;\n      font-size: 12px;\n      bottom: 5%;\n      right: 10%;\n      text-align: center;\n      line-height: 30px;\n      cursor: pointer;\n      z-index:100;\n    }"));
      e.appendChild(t);
      var i = document.createElement("div");
      i.innerHTML = "<div id=\"debugger-applog-web\" class=\"debugger-applog-web\">AppLog调试</div>";
      var n = document.createElement("div");
      n.innerHTML = "<div id=\"debugger-container\" class=\"debugger-container\"></div>";
      document.getElementsByTagName("body")[0].appendChild(i);
      document.getElementsByTagName("body")[0].appendChild(n);
      document.getElementById("debugger-applog-web").addEventListener("click", function () {
        (window.opener || window.parent).postMessage({
          type: "devtool:web:open-draw"
        }, location.origin);
      });
    };
    return e;
  }();
  var ew = {
    autotrack: {
      src: {
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/autotrack.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/autotrack.js"
      },
      object: "LogAutoTrack"
    },
    ab: {
      src: {
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/ab.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/ab.js"
      },
      object: "LogAb"
    },
    stay: {
      src: {
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/stay.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/stay.js"
      },
      object: "LogStay"
    },
    route: {
      src: {
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/route.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/route.js"
      },
      object: "LogRoute"
    },
    cep: {
      src: {
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/cep.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/cep.js"
      },
      object: "LogCep"
    },
    tracer: {
      src: {
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/tracer.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/tracer.js"
      },
      object: "LogTracer"
    },
    retry: {
      src: {
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/retry.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/retry.js"
      },
      object: "LogRetry"
    },
    visual: {
      src: {
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/visual.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/visual.js"
      },
      object: "LogVisual"
    }
  };
  var eS = ["ab", "autotrack", "Stay", "store", "et", "profile", "cep", "heartbeat", "monitor", "route", "tracer"];
  var ek = function () {
    function e(e) {
      this.disableAutoPageView = false;
      this.bridgeReport = false;
      this.staging = false;
      this.pluginInstances = [];
      this.sended = false;
      this.started = false;
      this.destroy = false;
      this.sdkReady = false;
      this.adapters = {};
      this.loadType = "base";
      this.name = e;
      this.hook = new O();
      this.remotePlugin = new Map();
      this.Types = en;
      this.adapters.storage = F;
      this.loadType = "full";
    }
    e.usePlugin = function (t, i, n) {
      if (i) {
        var o = false;
        var r = 0;
        var s = e.plugins.length;
        for (; r < s; r++) {
          if (e.plugins[r].name === i) {
            e.plugins[r].plugin = t;
            e.plugins[r].options = n || {};
            o = true;
            break;
          }
        }
        if (!o) {
          e.plugins.push({
            name: i,
            plugin: t,
            options: n
          });
        }
      } else {
        e.plugins.push({
          plugin: t
        });
      }
    };
    e.prototype.usePlugin = function (e, t, i) {
      if (e) {
        if (this.loadType !== "full" || !eS.includes(e)) {
          if (t) {
            if (typeof t == "string") {
              if (!this.remotePlugin.get(e)) {
                this.remotePlugin.set(e, {
                  src: t,
                  call: i
                });
              }
            } else if (!this.remotePlugin.get(e)) {
              this.remotePlugin.set(e, {
                instance: t
              });
            }
          } else if (!this.remotePlugin.get(e)) {
            this.remotePlugin.set(e, "sdk");
          }
        }
      }
    };
    e.prototype.init = function (t) {
      var i;
      var n;
      var o = this;
      try {
        i = JSON.parse(JSON.stringify(t));
      } catch (e) {
        i = t;
      }
      this.logger = new eu(this.name, i.log);
      if (this.inited) {
        this.logger.warn("[instance: " + this.name + "], every instance's api: init,  can be call only one time!");
      } else if (i && M(i)) {
        if (i.app_id && typeof (n = i.app_id) == "number" && !isNaN(n)) {
          if (i.app_key && typeof i.app_key != "string") {
            this.logger.warn("app_key param is error, must be string, please check!");
          } else {
            var r = i.channel_type && i.channel_type === "tcpy" ? ["sg", "va", "in"] : ["sg", "va"];
            if (!i.channel_domain && r.indexOf(i.channel) === -1) {
              this.logger.warn("channel must " + r.join(" ,") + "!!!");
              i.channel = "sg";
            }
            this.spider = new el();
            if (this.spider.checkSpider(i)) {
              this.logger.warn("The current environment may be a spider, can not report!");
            } else {
              this.appBridge = new eh(this, i.enable_native);
              this.requestManager = new eb(this, i);
              this.bridgeReport = this.appBridge.bridgeInject();
              this.configManager = new ec(this, i);
              this.debugger = new eE(this, i);
              this.initConfig = i;
              this.emit(en.Init);
              this.emit(j.DEBUGGER_MESSAGE, {
                type: j.DEBUGGER_MESSAGE_SDK,
                info: "SDK 执行INIT",
                data: i,
                level: "info",
                time: Date.now()
              });
              if (i.disable_auto_pv) {
                this.disableAutoPageView = true;
              }
              if (!this.bridgeReport) {
                this.configManager.setAppid(i.app_id);
                this.eventManager = new ep();
                this.tokenManager = new ed();
                this.sessionManager = new e_();
                Promise.all([new Promise(function (e) {
                  o.once(en.TokenComplete, function () {
                    e(true);
                  });
                }), new Promise(function (e) {
                  o.once(en.Start, function () {
                    e(true);
                  });
                })]).then(function () {
                  try {
                    e.plugins.reduce(function (e, t) {
                      var i = t.plugin;
                      var n = t.options;
                      var r = Object.assign(o.initConfig, n);
                      var s = new i();
                      s.apply(o, r);
                      e.push(s);
                      return e;
                    }, o.pluginInstances);
                  } catch (e) {
                    o.emit(j.DEBUGGER_MESSAGE, {
                      type: j.DEBUGGER_MESSAGE_SDK,
                      info: "发生了异常",
                      level: "error",
                      time: Date.now(),
                      data: e.message
                    });
                  }
                  o.sdkReady = true;
                  o.emit(en.Ready);
                  o.emit(j.DEBUGGER_MESSAGE, {
                    type: j.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 初始化完成",
                    time: Date.now(),
                    level: "info",
                    data: o.configManager.get("user")
                  });
                  o.logger.info("appid: " + i.app_id + ", userInfo:" + JSON.stringify(o.configManager.get("user")));
                  o.logger.info("appid: " + i.app_id + ", sdk is ready, version is " + et + ", you can report now !!!");
                  if (i.disable_auto_pv) {
                    o.disableAutoPageView = true;
                  }
                  try {
                    if (o.loadType === "full" && i.enable_ab_test || i.autotrack) {
                      (window.opener || window.parent).postMessage("[tea-sdk]ready", "*");
                    }
                  } catch (e) {
                    o.emit(j.DEBUGGER_MESSAGE, {
                      type: j.DEBUGGER_MESSAGE_SDK,
                      info: "发生了异常",
                      level: "error",
                      time: Date.now(),
                      data: e.message
                    });
                  }
                  o.pageView();
                  o.on(en.TokenChange, function (e) {
                    if (e === "webid") {
                      o.pageView();
                    }
                    o.logger.info("appid: " + i.app_id + " token change, new userInfo:" + JSON.stringify(o.configManager.get("user")));
                    o.emit(j.DEBUGGER_MESSAGE, {
                      type: j.DEBUGGER_MESSAGE_SDK,
                      info: "SDK 设置了用户信息",
                      time: Date.now(),
                      secType: "USER",
                      level: "info",
                      data: o.configManager.get("user")
                    });
                  });
                  o.on(en.TokenReset, function () {
                    o.logger.info("appid: " + i.app_id + " token reset, new userInfo:" + JSON.stringify(o.configManager.get("user")));
                    o.emit(j.DEBUGGER_MESSAGE, {
                      type: j.DEBUGGER_MESSAGE_SDK,
                      info: "SDK 重置了用户信息",
                      time: Date.now(),
                      secType: "USER",
                      level: "info",
                      data: o.configManager.get("user")
                    });
                  });
                  o.on(en.RouteChange, function (e) {
                    if (!e.init && !i.disable_route_report) {
                      o.pageView();
                    }
                  });
                });
                this.tokenManager.apply(this, i);
                this.eventManager.apply(this, i);
                this.sessionManager.apply(this, i);
              }
              this.inited = true;
            }
          }
        } else {
          this.logger.warn("app_id param is error, must be number, please check!");
        }
      } else {
        this.logger.warn("init params error,please check");
      }
    };
    e.prototype.config = function (e) {
      if (this.inited) {
        if (e && M(e)) {
          var t;
          try {
            t = JSON.parse(JSON.stringify(t));
          } catch (i) {
            t = e;
          }
          if (this.bridgeReport) {
            this.appBridge.setConfig(t);
          } else {
            if (t._staging_flag && t._staging_flag === 1) {
              this.staging = true;
            }
            if (t.disable_auto_pv) {
              this.disableAutoPageView = true;
              delete t.disable_auto_pv;
            }
            var i = w({}, t);
            if (this.initConfig && this.initConfig.configPersist) {
              var n = this.configManager.getStore();
              if (n) {
                i = Object.assign(n, t);
              }
              this.configManager.setStore(t);
            }
            i.web_id;
            i.user_unique_id;
            var o = function (e, t) {
              var i = {};
              for (var n in e) {
                if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
                  i[n] = e[n];
                }
              }
              if (e != null && typeof Object.getOwnPropertySymbols == "function") {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) {
                  if (t.indexOf(n[o]) < 0) {
                    i[n[o]] = e[n[o]];
                  }
                }
              }
              return i;
            }(i, ["web_id", "user_unique_id"]);
            if (i.hasOwnProperty("web_id")) {
              this.emit(en.ConfigWebId, i.web_id);
            }
            if (i.hasOwnProperty("user_unique_id")) {
              this.emit(en.ConfigUuid, i.user_unique_id);
            }
            this.configManager.set(o);
            this.emit(j.DEBUGGER_MESSAGE, {
              type: j.DEBUGGER_MESSAGE_SDK,
              info: "SDK 执行CONFIG",
              level: "info",
              time: Date.now(),
              data: i
            });
          }
        } else {
          this.logger.warn("config params is error, please check");
        }
      } else {
        this.logger.warn("config must be use after function init");
      }
    };
    e.prototype.setDomain = function (e) {
      if (this.configManager) {
        this.configManager.setDomain(e);
      }
      this.emit(en.ConfigDomain);
    };
    e.prototype.getConfig = function (e) {
      return this.configManager.get(e);
    };
    e.prototype.send = function () {
      this.start();
    };
    e.prototype.start = function () {
      if (this.inited && !this.sended) {
        this.sended = true;
        this.emit(en.Start);
        this.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "SDK 执行START",
          level: "info",
          time: Date.now()
        });
        if (this.bridgeReport) {
          this.pageView();
          this.emit(en.Ready);
        }
      }
    };
    e.prototype.event = function (e, t) {
      var i = this;
      try {
        var n = [];
        if (Array.isArray(e)) {
          e.forEach(function (e) {
            var t = i.processEvent(e[0], e[1] || {});
            if (t) {
              n.push(t);
            }
          });
        } else {
          var o = this.processEvent(e, t);
          if (!o) {
            return;
          }
          n.push(o);
        }
        if (this.bridgeReport) {
          n.forEach(function (e) {
            var t = e.event;
            var n = e.params;
            i.appBridge.onEventV3(t, JSON.stringify(n));
          });
        } else if (n.length) {
          this.emit(en.Event, n);
          this.emit(en.SessionResetTime);
        }
      } catch (e) {
        this.logger.warn("something error, please check");
        this.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.beconEvent = function (e, t) {
      if (Array.isArray(e)) {
        this.logger.warn("beconEvent not support batch report, please check");
      } else {
        var i = [];
        var n = this.processEvent(e, t || {});
        if (n) {
          i.push(n);
          if (i.length) {
            this.emit(en.BeconEvent, i);
            this.emit(en.SessionResetTime);
          }
        }
      }
    };
    e.prototype.processEvent = function (e, t = {}) {
      try {
        if (!e) {
          this.logger.warn("eventName is null， please check");
          return null;
        }
        var i = e;
        if (/^event\./.test(e)) {
          i = e.slice(6);
        }
        var n = t;
        if (typeof n != "object") {
          n = {};
        }
        if (n.profile) {
          delete n.profile;
        } else {
          n.event_index = C();
        }
        var o = undefined;
        if (n.local_ms) {
          o = n.local_ms;
          delete n.local_ms;
        } else {
          o = +new Date();
        }
        return {
          event: i,
          params: n,
          local_time_ms: o,
          is_bav: this.initConfig && this.initConfig.autotrack ? 1 : 0
        };
      } catch (i) {
        this.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: i.message
        });
        return {
          event: e,
          params: t
        };
      }
    };
    e.prototype.filterEvent = function (e) {
      this.eventFilter = e;
    };
    e.prototype.on = function (e, t) {
      this.hook.on(e, t);
    };
    e.prototype.once = function (e, t) {
      this.hook.once(e, t);
    };
    e.prototype.off = function (e, t) {
      this.hook.off(e, t);
    };
    e.prototype.emit = function (e, t, i) {
      this.hook.emit(e, t, i);
    };
    e.prototype.set = function (e) {
      this.hook.set(e);
    };
    e.prototype.pageView = function () {
      if (!this.disableAutoPageView) {
        this.predefinePageView();
      }
    };
    e.prototype.predefinePageView = function (e = {}) {
      if (this.inited) {
        var t = {
          title: document.title || location.pathname,
          url: location.href,
          url_path: location.pathname,
          time: Date.now(),
          referrer: window.document.referrer,
          $is_first_time: "" + (this.configManager && this.configManager.is_first_time || false)
        };
        var i = w({}, t, e);
        this.event("predefine_pageview", i);
      } else {
        this.logger.warn("predefinePageView should call after init");
      }
    };
    e.prototype.clearEventCache = function () {
      this.emit(en.CleanEvents);
    };
    e.prototype.setWebIDviaUnionID = function (e) {
      if (e) {
        var t = P(e);
        this.config({
          web_id: "" + t,
          wechat_unionid: e
        });
        this.emit(en.CustomWebId);
      }
    };
    e.prototype.setWebId = function (e) {
      this.config({
        web_id: "" + e
      });
    };
    e.prototype.setWebIDviaOpenID = function (e) {
      if (e) {
        var t = P(e);
        this.config({
          web_id: "" + t,
          wechat_openid: e
        });
        this.emit(en.CustomWebId);
      }
    };
    e.prototype.setNativeAppId = function (e) {
      if (this.bridgeReport) {
        this.appBridge.setNativeAppId(e);
      }
    };
    e.prototype.resetStayDuration = function (e, t, i) {
      this.emit(en.ResetStay, {
        url_path: e,
        title: t,
        url: i
      }, en.Stay);
    };
    e.prototype.resetStayParams = function (e = "", t = "", i = "") {
      this.emit(en.SetStay, {
        url_path: e,
        title: t,
        url: i
      }, en.Stay);
    };
    e.prototype.getToken = function (e, t) {
      var i = this;
      if (this.inited) {
        var n = false;
        function o(t) {
          if (!n) {
            n = true;
            var o = i.configManager.get().user;
            if (t) {
              o.tobid = t;
              o["diss".split("").reverse().join("")] = t;
            }
            return e(w({}, o));
          }
        }
        function r() {
          i.tokenManager.getTobId().then(function (e) {
            o(e);
          });
        }
        if (this.sdkReady) {
          r();
        } else {
          if (t) {
            setTimeout(function () {
              o();
            }, t);
          }
          this.on(en.Ready, function () {
            r();
          });
        }
      } else {
        this.logger.warn("predefinePageView should call after init");
      }
    };
    e.prototype.profileSet = function (e) {
      if (this.bridgeReport) {
        this.appBridge.profileSet(JSON.stringify(e));
      } else {
        this.emit(en.ProfileSet, e, en.Profile);
      }
      this.emit(j.DEBUGGER_MESSAGE, {
        type: j.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileSet",
        level: "info",
        time: Date.now(),
        data: e
      });
    };
    e.prototype.profileSetOnce = function (e) {
      if (this.bridgeReport) {
        this.appBridge.profileSetOnce(JSON.stringify(e));
      } else {
        this.emit(en.ProfileSetOnce, e, en.Profile);
      }
      this.emit(j.DEBUGGER_MESSAGE, {
        type: j.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileSetOnce",
        level: "info",
        time: Date.now(),
        data: e
      });
    };
    e.prototype.profileIncrement = function (e) {
      if (this.bridgeReport) {
        this.appBridge.profileIncrement(JSON.stringify(e));
      } else {
        this.emit(en.ProfileIncrement, e, en.Profile);
      }
      this.emit(j.DEBUGGER_MESSAGE, {
        type: j.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileIncrement",
        level: "info",
        time: Date.now(),
        data: e
      });
    };
    e.prototype.profileUnset = function (e) {
      if (this.bridgeReport) {
        this.appBridge.profileUnset(e);
      } else {
        this.emit(en.ProfileUnset, e, en.Profile);
      }
      this.emit(j.DEBUGGER_MESSAGE, {
        type: j.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileUnset",
        level: "info",
        time: Date.now(),
        data: e
      });
    };
    e.prototype.profileAppend = function (e) {
      if (this.bridgeReport) {
        this.appBridge.profileAppend(JSON.stringify(e));
      } else {
        this.emit(en.ProfileAppend, e, en.Profile);
      }
      this.emit(j.DEBUGGER_MESSAGE, {
        type: j.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileAppend",
        level: "info",
        time: Date.now(),
        data: e
      });
    };
    e.prototype.setExternalAbVersion = function (e) {
      this.emit(en.AbExternalVersion, typeof e == "string" && e ? ("" + e).trim() : null, en.Ab);
    };
    e.prototype.getVar = function (e, t, i, n) {
      this.emit(en.AbVar, {
        name: e,
        defaultValue: t,
        callback: i,
        uuid: n
      }, en.Ab);
    };
    e.prototype.getABconfig = function (e, t) {
      this.emit(en.AbConfig, {
        params: e,
        callback: t
      }, en.Ab);
    };
    e.prototype.getAbSdkVersion = function () {
      return this.configManager.getAbVersion();
    };
    e.prototype.onAbSdkVersionChange = function (e) {
      var t = this;
      this.emit(en.AbVersionChangeOn, e, en.Ab);
      return function () {
        t.emit(en.AbVersionChangeOff, e, en.Ab);
      };
    };
    e.prototype.offAbSdkVersionChange = function (e) {
      this.emit(en.AbVersionChangeOff, e, en.Ab);
    };
    e.prototype.openOverlayer = function () {
      this.emit(en.AbOpenLayer, "", en.Ab);
    };
    e.prototype.closeOverlayer = function () {
      this.emit(en.AbCloseLayer, "", en.Ab);
    };
    e.prototype.getAllVars = function (e) {
      this.emit(en.AbAllVars, e, en.Ab);
    };
    e.prototype.autoInitializationRangers = function (e) {
      var t;
      var i;
      var n;
      var o;
      var r;
      var s;
      var a;
      t = e.app_id;
      i = e.channel;
      n = e.onTokenReady;
      o = X[i] + "/webid";
      r = new F(false);
      s = "__tea_cache_tokens_" + t;
      if ((a = r.getItem(s)) && a.web_id) {
        n(a.web_id);
      } else {
        ey(o, {
          app_key: "",
          app_id: t,
          url: location.href,
          user_agent: window.navigator.userAgent,
          referer: document.referrer
        }, 3000, false, function (e) {
          if (e && e.e === 0) {
            n(e.web_id);
            var t = {
              web_id: e.web_id,
              user_unique_id: e.web_id,
              timestamp: Date.now()
            };
            r.setItem(s, t);
          } else {
            n("");
          }
        }, function () {
          n("");
        }, true);
      }
    };
    e.prototype.destoryInstace = function () {
      if (!this.destroy) {
        this.destroy = true;
        this.off(en.TokenComplete);
        this.emit(en.DestoryInstance);
      }
    };
    e.prototype.destroyInstance = function () {
      if (!this.destroy) {
        this.destroy = true;
        this.off(en.TokenComplete);
        this.emit(en.DestoryInstance);
      }
    };
    e.plugins = [];
    return e;
  }();
  var eA = "__rangers_ab_style__";
  var eD = {};
  var eT = [];
  function eO(e) {
    if (e.length) {
      e.forEach(function (e) {
        eT.push(e);
      });
    }
  }
  function eM(e, t, i, n) {
    var o = e && e.source || window.opener || window.parent;
    var r = e && e.origin || n || "*";
    o.postMessage(JSON.stringify({
      type: t,
      payload: i
    }), r);
  }
  function eR(e, t) {
    eD[e] = eD[e] || [];
    eD[e].push(t);
  }
  function eC(e) {
    if (eT.some(function (e) {
      return e === "*";
    }) || eT.some(function (t) {
      return e.origin.indexOf(t) > -1;
    })) {
      var t = e.data;
      if (typeof e.data == "string") {
        try {
          t = JSON.parse(e.data);
        } catch (e) {
          t = undefined;
        }
      }
      if (t) {
        var i = t.type;
        var n = t.payload;
        if (eD[i]) {
          eD[i].forEach(function (t) {
            if (typeof t == "function") {
              t(e, n);
            }
          });
        }
      }
    }
  }
  function eG(e, t) {
    var i = w({}, e);
    delete i.filter;
    (window.opener || window.parent).postMessage({
      type: "tea:sdk:info",
      config: i,
      version: t
    }, "*");
    window.addEventListener("message", eC, false);
  }
  var ex = "";
  var ez = false;
  function eI(e) {
    var t = e.event;
    var i = e.editorUrl;
    e.collectInstance;
    e.fromSession;
    if (!ez) {
      ez = true;
      z(i, function () {
        eM(t, "abEditorScriptloadSuccess");
      }, function () {
        if (t) {
          eM(t, "abEditorScriptloadError");
        }
        ez = false;
      });
    }
  }
  (to = tr ||= {})[to.Var = 0] = "Var";
  to[to.All = 1] = "All";
  var eN = function () {
    function e() {
      this.fetchStatus = "no";
      this.refreshFetchStatus = "no";
      this.versions = [];
      this.extVersions = [];
      this.mulilinkVersions = [];
      this.enable_multilink = false;
      this.enable_ab_visual = false;
      this.editMode = false;
      this.callbacks = [];
      this.data = {};
      this.changeListener = new Map();
      this.readyStatus = false;
      this.exposureCache = [];
    }
    e.prototype.apply = function (e, t) {
      var i = this;
      this.collect = e;
      this.config = t;
      if (this.config.enable_ab_test) {
        var n = t.enable_multilink;
        var o = t.ab_channel_domain;
        var r = t.enable_ab_visual;
        var s = t.ab_cross;
        var a = t.ab_cookie_domain;
        var c = t.ab_timeout;
        var u = o || G(Z[t.channel || "sg"]);
        var l = e.adapters.storage;
        this.cacheStorgae = new l(false);
        this.timeout = c || 3000;
        this.enable_multilink = n;
        this.enable_ab_visual = r;
        this.abKey = "__tea_sdk_ab_version_" + t.app_id;
        this.ab_cross = s;
        this.ab_cookie_domain = a || "";
        this.fetchUrl = u + "/service/2/abtest_config/";
        this.reportUrl = this.collect.configManager.getUrl("event");
        this.exposureLimit = t.exposure_limit || 20;
        this.ab_batch_time = t.ab_batch_time || 500;
        var h = this.collect.Types;
        this.types = h;
        this.collect.on(h.TokenChange, function (e) {
          if (e === "uuid" && i.readyStatus) {
            i.clearCache();
            i.fetchAB();
          }
        });
        this.collect.on(h.AbVar, function (e) {
          var t = e.name;
          var n = e.defaultValue;
          var o = e.callback;
          i.getVar(t, n, o);
        });
        this.collect.on(h.AbAllVars, function (e) {
          i.getAllVars(e);
        });
        this.collect.on(h.AbConfig, function (e) {
          var t = e.params;
          var n = e.callback;
          i.getABconfig(t, n);
        });
        this.collect.on(h.AbExternalVersion, function (e) {
          i.setExternalAbVersion(e);
        });
        this.collect.on(h.AbOpenLayer, function () {
          i.openOverlayer();
        });
        this.collect.on(h.AbCloseLayer, function () {
          i.closeOverlayer();
        });
        this.collect.on(h.AbVersionChangeOn, function (e) {
          i.changeListener.set(e, e);
        });
        this.collect.on(h.AbVersionChangeOff, function (e) {
          if (i.changeListener.get(e)) {
            i.changeListener.delete(e);
          }
        });
        this.loadMode();
        if (this.enable_ab_visual || this.enable_multilink) {
          this.openOverlayer(this.config.multilink_timeout_ms || 500);
        }
        this.checkLocal();
        this.ready("ab");
        if (!this.readyStatus) {
          this.fetchAB();
          this.readyStatus = true;
        }
        this.collect.emit(h.AbReady);
      }
    };
    e.prototype.ready = function (e) {
      var t = this;
      this.collect.set(e);
      if (this.collect.hook._hooksCache.hasOwnProperty(e)) {
        var i = this.collect.hook._hooksCache[e];
        if (!Object.keys(i).length) {
          return;
        }
        function n(e) {
          if (i[e].length) {
            i[e].forEach(function (i) {
              t.collect.hook.emit(e, i);
            });
          }
        }
        for (var o in i) {
          n(o);
        }
      }
    };
    e.prototype.loadMode = function () {
      var e;
      var t;
      var i = function () {
        try {
          return JSON.parse(atob(window.name)) || undefined;
        } catch (e) {
          return;
        }
      }();
      var n = "";
      if (i) {
        var o = i.scenario;
        var r = i.href;
        if (o) {
          this.editMode = true;
          n = o;
        } else if (r && (r.indexOf("datatester") !== -1 || r.indexOf("visual-editor") !== -1)) {
          this.editMode = true;
          n = "visual-editor";
        }
      }
      if (this.enable_ab_visual && (function (e, t) {
        window.TEAVisualEditor = window.TEAVisualEditor || {};
        eO(["*"]);
        var i;
        var n = "";
        eG(t, et);
        var o = "";
        try {
          var r = window.performance.getEntriesByType("resource");
          if (r && r.length && (r.forEach(function (e) {
            if (e.initiatorType === "script" && e.name && e.name.indexOf("collect") !== -1) {
              o = e.name;
            }
          }), o || document.currentScript && (o = document.currentScript.src), o && (i = o.split("/")) && i.length)) {
            n = "https:/";
            for (var s = 2; s < i.length && s !== i.length - 1; s++) {
              n = n + "/" + i[s];
            }
            n += "/visual-ab-core";
          }
        } catch (e) {}
        eR("tea:openVisualABEditor", function (i) {
          var o = i.data;
          if (typeof i.data == "string") {
            try {
              o = JSON.parse(i.data);
            } catch (e) {
              o = undefined;
            }
          }
          if (o) {
            var r = o.lang;
            if (o.appId !== t.app_id) {
              eM(i, "appIdError");
              return;
            }
            var s = o.version;
            ex = s && n ? n + (s ? "." + s : ".1.0.1") + ".js?query=" + Date.now() : "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/visual-ab-core.js?query=" + Date.now();
            window.TEAVisualEditor.lang = r;
            window.TEAVisualEditor.__ab_domin = t.channel_domain || "";
            eI({
              event: i,
              editorUrl: ex,
              collectInstance: e
            });
          }
        });
      }(this.collect, this.config), n === "visual-editor")) {
        this.collect.destoryInstace();
      } else if (this.enable_multilink) {
        e = this.collect;
        t = this.config;
        window.TEAVisualEditor = window.TEAVisualEditor || {};
        window.TEAVisualEditor.appId = t.app_id;
        eR("tea:openTesterEventInspector", function (t) {
          var i = t.data;
          if (typeof t.data == "string") {
            try {
              i = JSON.parse(t.data);
            } catch (e) {
              i = undefined;
            }
          }
          if (i) {
            var n = i.referrer;
            var o = i.lang;
            var r = i.appId;
            window.TEAVisualEditor.__editor_ajax_domain = n || "";
            window.TEAVisualEditor.__ab_appId = r || "";
            window.TEAVisualEditor.lang = o || "";
            eI({
              event: t,
              editorUrl: "https://lf16-data.bytepluscdn.com/obj/data-static-sg/log-sdk/collect/tester-event-inspector.js?query=" + Date.now(),
              collectInstance: e
            });
          }
        });
      }
    };
    e.prototype.checkLocal = function () {
      var e = this.getABCache();
      var t = e.ab_version;
      var i = e.ab_ext_version;
      var n = e.ab_version_multilink;
      e.data;
      var o = this.checkFromUrl();
      if (o) {
        this.mulilinkVersions.push(o);
      } else {
        this.mulilinkVersions = n || [];
      }
      this.extVersions = i || [];
      this.versions = t || [];
      var r = this.versions.concat(this.extVersions);
      if (this.enable_multilink) {
        r = r.concat(this.mulilinkVersions);
      }
    };
    e.prototype.checkFromUrl = function () {
      var e = U(window.location.href);
      if (e && e.vid) {
        return e.vid;
      } else {
        return "";
      }
    };
    e.prototype.updateVersions = function () {
      var e = this.extVersions.length ? this.versions.concat(this.extVersions) : this.versions;
      if (this.enable_multilink) {
        e = e.concat(this.mulilinkVersions);
      }
      this.configVersions(e.join(","));
      this.updateABCache();
      if (this.changeListener.size > 0) {
        this.changeListener.forEach(function (t) {
          if (typeof t == "function") {
            t(e);
          }
        });
      }
    };
    e.prototype.configVersions = function (e) {
      this.collect.configManager.setAbVersion(e);
    };
    e.prototype.getVar = function (e, t, i, n) {
      if (!e) {
        throw Error("variable must not be empty");
      }
      if (t === undefined) {
        throw Error("variable no default value");
      }
      if (typeof i != "function") {
        throw Error("callback must be a function");
      }
      var o = {
        name: e,
        defaultValue: t,
        callback: i,
        type: tr.Var
      };
      if (this.fetchStatus === "complete" && this.refreshFetchStatus === "complete") {
        this.getRealVar(o, e, n);
      } else {
        this.callbacks.push(o);
      }
    };
    e.prototype.setAbUuid = function (e, t) {
      this.collect.configManager.setAbUuidCache(e, t);
    };
    e.prototype.getRealVar = function (e, t, i) {
      var n = e.name;
      var o = e.defaultValue;
      var r = e.callback;
      var s = this.data;
      if (s) {
        if (M(s[n])) {
          var a = s[n].vid;
          if (t === "$ab_url") {
            if (!this.mulilinkVersions.includes(a)) {
              this.mulilinkVersions.push(a);
            }
          } else if (!this.versions.includes(a)) {
            this.versions.push(a);
          }
          this.setAbUuid(a, i);
          this.updateVersions();
          this.fechEvent(a, t, o);
          r(s[n].val);
          this.collect.emit(j.DEBUGGER_MESSAGE, {
            type: j.DEBUGGER_MESSAGE_SDK,
            secType: "AB",
            info: "SDK 曝光了实验" + n,
            level: "info",
            time: Date.now(),
            data: s[n]
          });
          return;
        }
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          secType: "AB",
          info: "SDK 调用getVar",
          level: "info",
          time: Date.now(),
          data: o
        });
        r(o);
      } else {
        r(o);
      }
    };
    e.prototype.getAllVars = function (e) {
      if (typeof e != "function") {
        throw Error("callback must be a function");
      }
      var t = {
        callback: e,
        type: tr.All
      };
      if (this.fetchStatus === "complete" && this.refreshFetchStatus === "complete") {
        this.getRealAllVars(t);
      } else {
        this.callbacks.push(t);
      }
    };
    e.prototype.getRealAllVars = function (e) {
      e.callback(this.data ? JSON.parse(JSON.stringify(this.data)) : {});
      this.collect.emit(j.DEBUGGER_MESSAGE, {
        type: j.DEBUGGER_MESSAGE_SDK,
        secType: "AB",
        info: "SDK 调用getAllVars",
        level: "info",
        time: Date.now(),
        data: this.data
      });
    };
    e.prototype.fechEvent = function (e, t, i) {
      try {
        if (this.config.disable_track_event || !e) {
          return;
        }
        var n = this.collect.configManager.get();
        var o = n.header;
        var r = n.user;
        var s = this.getABCache();
        if (s && s.uuid && s.uuid !== r.user_unique_id) {
          return;
        }
        var a = {
          event: "abtest_exposure",
          ab_sdk_version: "" + e,
          params: JSON.stringify({
            app_id: this.config.appId,
            ab_url: t === "$ab_url" ? i : window.location.href,
            data: this.data
          }),
          local_time_ms: Date.now()
        };
        o.custom = JSON.stringify(o.custom);
        this.reportExposure({
          events: [a],
          user: r,
          header: o
        }, t);
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.reportExposure = function (e, t) {
      var i = this;
      this.exposureCache.push(e);
      if (this.reportTimeout) {
        clearTimeout(this.reportTimeout);
      }
      if (this.exposureCache.length >= this.exposureLimit) {
        this.report(t);
      } else {
        this.reportTimeout = setTimeout(function () {
          i.report(t);
          clearTimeout(i.reportTimeout);
        }, this.ab_batch_time);
      }
    };
    e.prototype.report = function (e) {
      var t = this;
      this.collect.requestManager.useRequest({
        url: this.reportUrl,
        data: this.exposureCache,
        timeout: 20000,
        useBeacon: e === "$ab_url"
      });
      this.exposureCache.forEach(function (e) {
        t.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_EVENT,
          info: "埋点上报成功",
          time: Date.now(),
          data: [e],
          code: 200,
          status: "success"
        });
      });
      this.exposureCache = [];
    };
    e.prototype.setExternalAbVersion = function (e) {
      this.extVersions = [e];
      this.updateVersions();
    };
    e.prototype.getABconfig = function (e, t) {
      var i = Object.keys(e);
      if (i && i.length) {
        this.collect.configManager.set(e);
      }
      this.fetchAB(t);
    };
    e.prototype.get = function (e) {
      if (this.ab_cross) {
        var t = this.cacheStorgae.getCookie(e, this.ab_cookie_domain);
        if (t) {
          return JSON.parse(t);
        } else {
          return {};
        }
      }
      return this.cacheStorgae.getItem(e);
    };
    e.prototype.set = function (e, t) {
      if (this.ab_cross) {
        this.cacheStorgae.setCookie(e, t, 2592000000, this.ab_cookie_domain);
      } else {
        this.cacheStorgae.setItem(e, t);
      }
      this.collect.configManager.setAbCache(t);
      this.collect.event("abtest_cache", {
        env_uuid: this.collect.configManager.get("user").user_unique_id || "",
        cache: JSON.stringify(t)
      });
    };
    e.prototype.getABCache = function (e) {
      var t = {
        ab_version: [],
        ab_ext_version: [],
        ab_version_multilink: [],
        data: null,
        timestamp: +new Date(),
        uuid: ""
      };
      t = this.get(this.abKey) || t;
      if (e) {
        return t[e];
      } else {
        return t;
      }
    };
    e.prototype.updateABCache = function () {
      var e = this.getABCache();
      e.ab_version_multilink = this.mulilinkVersions;
      e.ab_ext_version = this.extVersions;
      e.ab_version = this.versions;
      e.timestamp = Date.now();
      this.set(this.abKey, e);
    };
    e.prototype.setAbCache = function (e) {
      var t = this.getABCache();
      t.data = this.data;
      t.uuid = e;
      t.timestamp = Date.now();
      this.set(this.abKey, t);
    };
    e.prototype.clearCache = function () {
      this.refreshFetchStatus = "ing";
      this.data = {};
      this.extVersions = [];
      this.mulilinkVersions = [];
      this.versions = [];
      this.collect.configManager.clearAbCache();
    };
    e.prototype.openOverlayer = function (e) {
      var t = this;
      (function () {
        if (!document.getElementById(eA)) {
          var e = "body { opacity: 0 !important; }";
          var t = document.head || document.getElementsByTagName("head")[0];
          var i = document.createElement("style");
          i.id = eA;
          i.type = "text/css";
          if (i.styleSheet) {
            i.styleSheet.cssText = e;
          } else {
            i.appendChild(document.createTextNode(e));
          }
          t.appendChild(i);
        }
      })();
      if (e) {
        var i = setTimeout(function () {
          t.closeOverlayer();
          clearTimeout(i);
        }, e);
      }
    };
    e.prototype.closeOverlayer = function () {
      var e;
      if (e = document.getElementById(eA)) {
        e.parentElement.removeChild(e);
      }
    };
    e.prototype.fetchComplete = function (e, t) {
      var i = this;
      try {
        if (e && Object.prototype.toString.call(e) == "[object Object]") {
          this.data = e;
          this.setAbCache(t);
          var n = [];
          Object.keys(e).forEach(function (t) {
            var i = e[t].vid;
            if (i) {
              n.push(i);
            }
          });
          this.versions = this.versions.filter(function (e) {
            return n.includes(e);
          });
          var o = e.$ab_url;
          var r = e.$ab_modification;
          if (r && r.val && this.enable_ab_visual) {
            if (this.collect.destroy) {
              return;
            }
            this.getVar("$ab_modification", window.location.href, function () {
              var e;
              e = r.val;
              window.TEAVisualEditor = window.TEAVisualEditor || {};
              window.TEAVisualEditor.__ab_config = e;
              z("https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/visual-ab-loader.js?query=" + Date.now(), function () {}, function () {});
              i.closeOverlayer();
            });
          } else if (o && this.enable_multilink) {
            this.mulilinkVersions = this.mulilinkVersions.filter(function (e) {
              return n.includes(e);
            });
            var s = o.val;
            var a = o.vid;
            if (s && a) {
              this.getVar("$ab_url", s, function () {
                if (!i.editMode) {
                  if (s !== window.location.href) {
                    setTimeout(function () {
                      if (!i.collect.destroy) {
                        var e = "" + s;
                        e = e.indexOf("http") === -1 ? "https://" + e : e;
                        if (B(e).host !== location.host) {
                          e = e + "&vid=" + a;
                        } else {
                          window.history.replaceState("", "", e);
                        }
                        window.location.href = e;
                      }
                    }, 100);
                  } else {
                    i.closeOverlayer();
                  }
                }
              });
            }
          }
          this.updateVersions();
        } else {
          this.closeOverlayer();
        }
        this.callbacks.forEach(function (e) {
          return i[e.type === tr.Var ? "getRealVar" : "getRealAllVars"](e, "");
        });
        this.callbacks = [];
      } catch (e) {}
    };
    e.prototype.fetchAB = function (e) {
      var t = this;
      var i = this.collect.configManager.get();
      var n = {
        header: w({
          aid: this.config.app_id
        }, i.user || {}, i.header || {}, {
          ab_sdk_version: this.collect.configManager.getAbVersion(),
          ab_url: window.location.href
        })
      };
      var o = i.user.user_unique_id;
      this.collect.emit(j.DEBUGGER_MESSAGE, {
        type: j.DEBUGGER_MESSAGE_SDK,
        info: "SDK 发起AB实验请求",
        level: "info",
        logType: "fetch",
        time: Date.now(),
        data: n
      });
      this.collect.requestManager.useRequest({
        url: this.fetchUrl,
        data: n,
        success: function (i) {
          t.fetchStatus = "complete";
          t.refreshFetchStatus = "complete";
          var n = i.data;
          if (i.message === "success") {
            t.fetchComplete(n, o);
            if (e) {
              e(n);
            }
          } else {
            t.fetchComplete(null, o);
            if (e) {
              e(null);
            }
          }
          t.collect.emit(t.types.AbComplete, n);
          t.collect.emit(j.DEBUGGER_MESSAGE, {
            type: j.DEBUGGER_MESSAGE_SDK,
            secType: "AB",
            info: "AB实验请求成功",
            level: "info",
            logType: "fetch",
            time: Date.now(),
            data: n
          });
        },
        fail: function () {
          t.fetchStatus = "complete";
          t.refreshFetchStatus = "complete";
          t.fetchComplete(null, i.user.user_unique_id);
          t.collect.emit(t.types.AbTimeout);
          if (e) {
            e(null);
          }
          t.collect.emit(j.DEBUGGER_MESSAGE, {
            type: j.DEBUGGER_MESSAGE_SDK,
            secType: "AB",
            info: "AB实验请求网络异常",
            level: "error",
            logType: "fetch",
            time: Date.now()
          });
        },
        timeout: this.timeout
      });
    };
    e.prototype.filterUrl = function (e) {
      try {
        var t = "";
        if (e.indexOf("&multilink=true") !== -1) {
          t = "&multilink=true[\0-ÿ]*";
        } else if (e.indexOf("?multilink=true") !== -1) {
          t = "\\?multilink=true[\0-ÿ]*";
        }
        var i = RegExp(t, "g");
        e = e.replace(i, "");
      } catch (e) {}
      return e;
    };
    return e;
  }();
  var eB = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      var i = this;
      if (t.event_verify_url && typeof t.event_verify_url == "string" && (this.url = t.event_verify_url + "/v1/list_test", this.url)) {
        var n = e.Types;
        e.on(n.SubmitBefore, function (t) {
          e.requestManager.useBeacon({
            url: i.url,
            data: t
          });
        });
      }
    };
    return e;
  }();
  var eU = function () {
    function e(e, t) {
      this.maxDuration = 43200000;
      this.aliveDTime = 60000;
      this.options = {
        aliveName: "predefine_page_alive",
        params: {}
      };
      this.collect = e;
      this.config = t;
      this.pageStartTime = Date.now();
      this.sessionStartTime = this.pageStartTime;
      this.timerHandler = null;
      if (M(t.enable_stay_duration)) {
        this.options = Object.assign(this.options, t.enable_stay_duration);
      }
    }
    e.prototype.setParams = function (e, t, i) {
      this.set_path = e;
      this.set_url = i;
      this.set_title = t;
    };
    e.prototype.enable = function (e, t, i) {
      this.url_path = e;
      this.url = i;
      this.title = t;
      this.disableCallback = this.enablePageAlive();
    };
    e.prototype.disable = function () {
      this.disableCallback();
      this.pageStartTime = Date.now();
    };
    e.prototype.sendEvent = function (e, t = false) {
      var i = t ? this.aliveDTime : Date.now() - this.sessionStartTime;
      if (!(i < 0) && !(i > this.aliveDTime) && !(Date.now() - this.pageStartTime > this.maxDuration) && (!t || document.visibilityState !== "hidden")) {
        this.collect.beconEvent(this.options.aliveName, w({
          url_path: this.getParams("url_path"),
          title: this.getParams("title"),
          url: this.getParams("url"),
          duration: i,
          is_support_visibility_change: I(),
          startTime: this.sessionStartTime,
          hidden: document.visibilityState,
          leave: e
        }, this.options.params));
        this.sessionStartTime = Date.now();
      }
    };
    e.prototype.getParams = function (e) {
      switch (e) {
        case "url_path":
          return this.set_path || this.url_path || location.pathname;
        case "title":
          return this.set_title || this.title || document.title || location.pathname;
        case "url":
          return this.set_url || this.url || location.href;
      }
    };
    e.prototype.setUpTimer = function () {
      var e = this;
      if (this.timerHandler) {
        clearInterval(this.timerHandler);
      }
      return setInterval(function () {
        if (Date.now() - e.sessionStartTime > e.aliveDTime) {
          e.sendEvent(false, true);
        }
      }, 1000);
    };
    e.prototype.visibilitychange = function () {
      if (document.visibilityState === "hidden") {
        if (this.timerHandler) {
          clearInterval(this.timerHandler);
          this.sendEvent(false);
        }
      } else if (document.visibilityState === "visible") {
        this.sessionStartTime = Date.now();
        this.timerHandler = this.setUpTimer();
      }
    };
    e.prototype.beforeunload = function () {
      if (!document.hidden) {
        this.sendEvent(true);
      }
    };
    e.prototype.enablePageAlive = function () {
      var e = this;
      this.timerHandler = this.setUpTimer();
      var t = this.visibilitychange.bind(this);
      var i = this.beforeunload.bind(this);
      document.addEventListener("visibilitychange", t);
      x(i);
      return function () {
        e.beforeunload();
        document.removeEventListener("visibilitychange", t);
        window.removeEventListener("beforeunload", i);
        window.removeEventListener("pagehide", i);
      };
    };
    return e;
  }();
  var eP = function () {
    function e(e, t) {
      var i = this;
      this.maxDuration = 43200000;
      this.aliveDTime = 60000;
      this.options = {
        closeName: "predefine_page_close",
        params: {}
      };
      this.visibilitychange = function () {
        if (document.visibilityState === "hidden") {
          i.activeEndTime = Date.now();
        } else if (document.visibilityState === "visible") {
          if (i.activeEndTime) {
            i.totalTime += i.activeEndTime - i.activeStartTime;
            i.activeTimes += 1;
          }
          i.activeEndTime = undefined;
          i.activeStartTime = Date.now();
        }
      };
      this.beforeunload = function () {
        i.totalTime += (i.activeEndTime || Date.now()) - i.activeStartTime;
        if (i.config.autotrack) {
          try {
            window.sessionStorage.setItem("_tea_cache_duration", JSON.stringify({
              duration: i.totalTime,
              page_title: document.title || location.pathname
            }));
          } catch (e) {}
        }
        i.sendEventPageClose();
      };
      this.collect = e;
      this.config = t;
      this.maxDuration = t.maxDuration || 86400000;
      this.pageStartTime = Date.now();
      if (M(t.enable_stay_duration)) {
        this.options = Object.assign(this.options, t.enable_stay_duration);
      }
      this.resetData();
    }
    e.prototype.setParams = function (e, t, i) {
      this.set_path = e;
      this.set_url = i;
      this.set_title = t;
    };
    e.prototype.resetParams = function (e, t, i) {
      this.url_path = e;
      this.url = i;
      this.title = t;
    };
    e.prototype.enable = function (e, t, i) {
      this.url_path = e;
      this.url = i;
      this.title = t;
      this.disableCallback = this.enablePageClose();
    };
    e.prototype.disable = function () {
      this.disableCallback();
    };
    e.prototype.resetData = function () {
      this.activeStartTime = this.activeStartTime === undefined ? this.pageStartTime : Date.now();
      this.activeEndTime = undefined;
      this.activeTimes = 1;
      this.totalTime = 0;
      this.resetParams(location.pathname, document.title, location.href);
    };
    e.prototype.sendEventPageClose = function () {
      var e = Date.now() - this.pageStartTime;
      if (!(this.totalTime < 0) && !(e < 0) && !(this.totalTime >= this.maxDuration)) {
        this.collect.beconEvent(this.options.closeName, w({
          url_path: this.getParams("url_path"),
          title: this.getParams("title"),
          url: this.getParams("url"),
          active_times: this.activeTimes,
          duration: this.totalTime,
          total_duration: e,
          is_support_visibility_change: I()
        }, this.options.params));
        this.pageStartTime = Date.now();
        this.resetData();
      }
    };
    e.prototype.getParams = function (e) {
      switch (e) {
        case "url_path":
          return this.set_path || this.url_path || location.pathname;
        case "title":
          return this.set_title || this.title || document.title || location.pathname;
        case "url":
          return this.set_url || this.url || location.href;
      }
    };
    e.prototype.enablePageClose = function () {
      var e = this;
      var t = this.visibilitychange.bind(this);
      var i = this.beforeunload.bind(this);
      document.addEventListener("visibilitychange", t);
      x(i);
      return function () {
        e.beforeunload();
        document.removeEventListener("visibilitychange", t);
        window.removeEventListener("beforeunload", i);
        window.removeEventListener("pagehide", i);
      };
    };
    return e;
  }();
  var eL = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      var i = this;
      this.collect = e;
      this.config = t;
      if (this.config.enable_stay_duration) {
        this.title = document.title || location.pathname;
        this.url = location.href;
        this.url_path = location.pathname;
        this.pageAlive = new eU(e, t);
        this.pageClose = new eP(e, t);
        var n = this.collect.Types;
        this.collect.on(n.ResetStay, function (e) {
          var t = e.url_path;
          var n = e.title;
          var o = e.url;
          i.resetStayDuration(t, n, o);
        });
        this.collect.on(n.RouteChange, function (e) {
          if (!e.init && !t.disable_route_report) {
            i.resetStayDuration();
          }
        });
        this.collect.on(n.SetStay, function (e) {
          var t = e.url_path;
          var n = e.title;
          var o = e.url;
          i.setStayParmas(t, n, o);
        });
        this.enable(this.url_path, this.title, this.url);
        this.ready(n.Stay);
        this.collect.emit(n.StayReady);
      }
    };
    e.prototype.ready = function (e) {
      var t = this;
      this.collect.set(e);
      if (this.collect.hook._hooksCache.hasOwnProperty(e)) {
        var i = this.collect.hook._hooksCache[e];
        if (!Object.keys(i).length) {
          return;
        }
        function n(e) {
          if (i[e].length) {
            i[e].forEach(function (i) {
              t.collect.hook.emit(e, i);
            });
          }
        }
        for (var o in i) {
          n(o);
        }
      }
    };
    e.prototype.enable = function (e, t, i) {
      this.pageAlive.enable(e, t, i);
      this.pageClose.enable(e, t, i);
    };
    e.prototype.disable = function () {
      this.pageAlive.disable();
      this.pageClose.disable();
    };
    e.prototype.setStayParmas = function (e = "", t = "", i = "") {
      this.pageAlive.setParams(e, t, i);
      this.pageClose.setParams(e, t, i);
      this.collect.emit(j.DEBUGGER_MESSAGE, {
        type: j.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行 resetStayParams",
        level: "info",
        time: Date.now(),
        data: {
          url_path: e,
          title: t,
          url: i
        }
      });
    };
    e.prototype.reset = function (e, t, i) {
      this.disable();
      this.enable(e, t, i);
    };
    e.prototype.resetStayDuration = function (e, t, i) {
      this.reset(e, t, i);
      this.collect.emit(j.DEBUGGER_MESSAGE, {
        type: j.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行 resetStayDuration",
        level: "info",
        time: Date.now(),
        data: {
          url_path: e,
          title: t,
          url: i
        }
      });
    };
    return e;
  }();
  var eV = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      var i = this;
      this.collect = e;
      this.config = t;
      this.duration = 60000;
      this.reportUrl = e.configManager.getDomain() + "/profile/list";
      var n = e.Types;
      this.eventCheck = new ei(e, t);
      this.cache = {};
      this.collect.on(n.ProfileSet, function (e) {
        i.setProfile(e);
      });
      this.collect.on(n.ProfileSetOnce, function (e) {
        i.setOnceProfile(e);
      });
      this.collect.on(n.ProfileUnset, function (e) {
        i.unsetProfile(e);
      });
      this.collect.on(n.ProfileIncrement, function (e) {
        i.incrementProfile(e);
      });
      this.collect.on(n.ProfileAppend, function (e) {
        i.appendProfile(e);
      });
      this.collect.on(n.ProfileClear, function () {
        i.cache = {};
      });
      this.ready(n.Profile);
    };
    e.prototype.ready = function (e) {
      var t = this;
      this.collect.set(e);
      if (this.collect.hook._hooksCache.hasOwnProperty(e)) {
        var i = this.collect.hook._hooksCache[e];
        if (!Object.keys(i).length) {
          return;
        }
        function n(e) {
          if (i[e].length) {
            i[e].forEach(function (i) {
              t.collect.hook.emit(e, i);
            });
          }
        }
        for (var o in i) {
          n(o);
        }
      }
    };
    e.prototype.report = function (e, t = {}) {
      try {
        if (this.config.disable_track_event) {
          return;
        }
        var i = [];
        i.push(this.collect.processEvent(e, t));
        var n = this.collect.eventManager.merge(i);
        this.collect.requestManager.useRequest({
          url: this.reportUrl,
          data: n
        });
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_EVENT,
          info: "埋点上报成功",
          time: Date.now(),
          data: n,
          code: 200,
          status: "success"
        });
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.setProfile = function (e) {
      var t = this.formatParams(e);
      if (t && Object.keys(t).length) {
        this.pushCache(t);
        this.report("__profile_set", w({}, t, {
          profile: true
        }));
      }
    };
    e.prototype.setOnceProfile = function (e) {
      var t = this.formatParams(e, true);
      if (t && Object.keys(t).length) {
        this.pushCache(t);
        this.report("__profile_set_once", w({}, t, {
          profile: true
        }));
      }
    };
    e.prototype.incrementProfile = function (e) {
      if (e) {
        this.report("__profile_increment", w({}, e, {
          profile: true
        }));
      }
    };
    e.prototype.unsetProfile = function (e) {
      if (e) {
        var t = {
          [e]: "1"
        };
        this.report("__profile_unset", w({}, t, {
          profile: true
        }));
      }
    };
    e.prototype.appendProfile = function (e) {
      if (e) {
        var t = {};
        for (var i in e) {
          if (typeof e[i] == "string" || Object.prototype.toString.call(e[i]).slice(8, -1) === "Array") {
            t[i] = e[i];
          }
        }
        if (Object.keys(t).length) {
          this.report("__profile_append", w({}, t, {
            profile: true
          }));
        }
      }
    };
    e.prototype.pushCache = function (e) {
      var t = this;
      Object.keys(e).forEach(function (i) {
        t.cache[i] = {
          val: t.clone(e[i]),
          timestamp: Date.now()
        };
      });
    };
    e.prototype.formatParams = function (e, t) {
      var i = this;
      if (t === undefined) {
        t = false;
      }
      try {
        if (!e || Object.prototype.toString.call(e) !== "[object Object]") {
          return;
        }
        var n = {};
        for (var o in e) {
          if (typeof e[o] == "string" || typeof e[o] == "number" || Object.prototype.toString.call(e[o]).slice(8, -1) === "Array") {
            n[o] = e[o];
          }
        }
        var r = Object.keys(n);
        if (!r.length || !this.eventCheck.checkEventParams(n)) {
          return;
        }
        var s = Date.now();
        return r.filter(function (n) {
          var o = i.cache[n];
          if (t) {
            return !o;
          } else {
            return !o || !i.compare(o.val, e[n]) || !(s - o.timestamp < i.duration);
          }
        }).reduce(function (e, t) {
          e[t] = n[t];
          return e;
        }, {});
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.compare = function (e, t) {
      try {
        return JSON.stringify(e) === JSON.stringify(t);
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return false;
      }
    };
    e.prototype.clone = function (e) {
      try {
        return JSON.parse(JSON.stringify(e));
      } catch (t) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: t.message
        });
        return e;
      }
    };
    e.prototype.unReady = function () {};
    return e;
  }();
  var ej = function () {
    function e() {
      var e = this;
      this.setInterval = function () {
        e.clearIntervalFunc = N(function () {
          if (e.isSessionhasEvent) {
            e.endCurrentSession();
          }
        }, e.sessionInterval);
      };
      this.clearInterval = function () {
        if (e.clearIntervalFunc) {
          e.clearIntervalFunc();
        }
      };
    }
    e.prototype.apply = function (e, t) {
      var i = this;
      this.collect = e;
      if (!t.disable_heartbeat) {
        this.sessionInterval = 60000;
        this.startTime = 0;
        this.lastTime = 0;
        this.setInterval();
        var n = this.collect.Types;
        this.collect.on(n.SessionReset, function () {
          i.process();
        });
      }
    };
    e.prototype.endCurrentSession = function () {
      this.collect.event("_be_active", {
        start_time: this.startTime,
        end_time: this.lastTime,
        url: window.location.href,
        referrer: window.document.referrer,
        title: document.title || location.pathname
      });
      this.isSessionhasEvent = false;
      this.startTime = 0;
    };
    e.prototype.process = function () {
      if (!this.isSessionhasEvent) {
        this.isSessionhasEvent = true;
        this.startTime = +new Date();
      }
      var e = this.lastTime || +new Date();
      this.lastTime = +new Date();
      if (this.lastTime - e > this.sessionInterval) {
        this.clearInterval();
        this.endCurrentSession();
        this.setInterval();
      }
    };
    return e;
  }();
  var e$ = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      var i = this;
      this.collect = e;
      this.config = t;
      if (!this.config.channel_domain && !t.disable_track_event && !t.disable_sdk_monitor) {
        this.url = e.configManager.getUrl("event");
        var n = this.collect.Types;
        this.collect.on(n.Ready, function () {
          i.sdkOnload();
        });
        this.collect.on(n.SubmitError, function (e) {
          var t = e.type;
          var n = e.eventData;
          var o = e.errorCode;
          if (t === "f_data") {
            i.sdkError(n, o);
          }
        });
      }
    };
    e.prototype.sdkOnload = function () {
      var e = this;
      try {
        var t = this.collect.configManager.get();
        var i = t.header;
        var n = t.user;
        var o = i.app_id;
        var r = i.app_name;
        var s = i.sdk_version;
        var a = n.web_id;
        var c = {
          events: [{
            event: "onload",
            params: JSON.stringify({
              app_id: o,
              app_name: r || "",
              sdk_version: s,
              sdk_type: "npm",
              sdk_config: this.config,
              sdk_desc: "TOC_OVERSEA"
            }),
            local_time_ms: Date.now()
          }],
          user: {
            user_unique_id: a
          },
          header: {}
        };
        setTimeout(function () {
          e.collect.requestManager.useRequest({
            url: e.url,
            data: [c],
            timeout: 30000,
            app_key: "566f58151b0ed37e",
            forceXhr: true
          });
        }, 16);
      } catch (e) {}
    };
    e.prototype.sdkError = function (e, t) {
      var i = this;
      try {
        var n = e[0];
        var o = n.user;
        var r = n.header;
        var s = [];
        e.forEach(function (e) {
          e.events.forEach(function (e) {
            s.push(e);
          });
        });
        var a = {
          events: s.map(function (e) {
            return {
              event: "on_error",
              params: JSON.stringify({
                error_code: t,
                app_id: r.app_id,
                app_name: r.app_name || "",
                error_event: e.event,
                sdk_version: r.sdk_version,
                local_time_ms: e.local_time_ms,
                tea_event_index: Date.now(),
                params: e.params,
                header: JSON.stringify(r),
                user: JSON.stringify(o)
              }),
              local_time_ms: Date.now()
            };
          }),
          user: {
            user_unique_id: o.user_unique_id
          },
          header: {}
        };
        setTimeout(function () {
          i.collect.requestManager.useRequest({
            url: i.url,
            data: [a],
            timeout: 30000,
            app_key: "566f58151b0ed37e",
            forceXhr: true
          });
        }, 16);
      } catch (e) {}
    };
    return e;
  }();
  function eq(e, t = "list") {
    if (!e) {
      return false;
    }
    if (t && t === "list") {
      if (["LI", "TR", "DL"].includes(e.nodeName) || e.dataset && e.dataset.hasOwnProperty("teaIdx") || e.hasAttribute && e.hasAttribute("data-tea-idx")) {
        return true;
      }
    } else if (["A", "BUTTON"].includes(e.nodeName) || e.dataset && e.dataset.hasOwnProperty("teaContainer") || e.hasAttribute && e.hasAttribute("data-tea-container")) {
      return true;
    }
    return false;
  }
  function eK(e) {
    for (var t = e; t && !eq(t, "container");) {
      if (t.nodeName === "HTML" || t.nodeName === "BODY") {
        return e;
      }
      t = t.parentElement;
    }
    return t || e;
  }
  function eH(e) {
    var t = "";
    if (e.nodeType === 3) {
      t = e.textContent.trim();
    } else if (e.dataset && e.dataset.hasOwnProperty("teaTitle")) {
      t = e.getAttribute("data-tea-title");
    } else if (e.hasAttribute("ata-tea-title")) {
      t = e.getAttribute("data-tea-title");
    } else if (e.hasAttribute("title")) {
      t = e.getAttribute("title");
    } else if (e.nodeName === "INPUT" && ["button", "submit"].includes(e.getAttribute("type"))) {
      t = e.getAttribute("value");
    } else if (e.nodeName === "IMG" && e.getAttribute("alt")) {
      t = e.getAttribute("alt");
    }
    return t.slice(0, 200);
  }
  function eW(e, t) {
    if (e.hasAttribute) {
      return e.hasAttribute(t);
    } else if (e.attributes) {
      return !!e.attributes[t] && !!e.attributes[t].specified;
    } else {
      return undefined;
    }
  }
  function eJ(e, t) {
    if (typeof t == "string") {
      return eW(e, t);
    }
    if (R(t)) {
      var i = false;
      var n = 0;
      for (; n < t.length; n++) {
        if (eW(e, t[n])) {
          i = true;
          break;
        }
      }
      return i;
    }
  }
  function eF(e, t) {
    var i = {};
    if (typeof t == "string") {
      if (eW(e, t)) {
        i.attrs = e.getAttribute(t);
      }
    } else if (R(t)) {
      for (var n = 0; n < t.length; n++) {
        if (eW(e, t[n])) {
          i[t[n]] = e.getAttribute(t[n]);
        }
      }
    }
    return i;
  }
  function eY(e) {
    if (e.children.length) {
      var t = e.children;
      return ![].slice.call(t).some(function (e) {
        return e.children.length > 0;
      });
    }
    return true;
  }
  function eX(e) {
    if (e.tagName.toLowerCase() === "svg") {
      return true;
    }
    var t = e.parentElement;
    var i = false;
    while (t) {
      if (t.tagName.toLowerCase() === "svg") {
        t = null;
        i = true;
      } else {
        t = t.parentElement;
      }
    }
    return i;
  }
  var eZ = function () {
    function e(e, t, i) {
      var n = this;
      this.statistics = false;
      this.pageView = false;
      this.clickEvent = function (e) {
        var t;
        var i;
        t = e.target;
        i = n.options;
        if (t.nodeType === 1 && (!!i.svg || !eX(t)) && !["HTML", "BODY"].includes(t.tagName.toUpperCase()) && t.style.display !== "none" && (eq(t, "container") || eY(t) || i.svg)) {
          n.eventHandel({
            eventType: "dom",
            eventName: "click"
          }, e);
        }
      };
      this.changeEvent = function (e) {
        n.eventHandel({
          eventType: "dom",
          eventName: "change"
        }, e);
      };
      this.submitEvent = function (e) {
        n.eventHandel({
          eventType: "dom",
          eventName: "submit"
        }, e);
      };
      this.getPageViewEvent = function (e, t) {
        if (t && t === "pushState") {
          n.eventHandel({
            eventType: "dom",
            eventName: "beat"
          }, w({
            beat_type: 0
          }, e));
        }
        n.eventHandel({
          eventType: "dom",
          eventName: "page_view"
        }, e);
      };
      this.getPageLoadEvent = function (e) {
        n.eventHandel({
          eventType: "dom",
          eventName: "page_statistics"
        }, {
          lcp: e
        });
      };
      this.config = i.getConfig().eventConfig;
      this.collect = t;
      this.options = e;
      this.beatTime = e.beat;
    }
    e.prototype.init = function (e) {
      this.eventHandel = e;
      var t = this.config.mode;
      this.addListener(t);
    };
    e.prototype.addListener = function (e) {
      var t = this;
      if (e === "proxy-capturing") {
        if (this.config.click) {
          window.document.addEventListener("click", this.clickEvent, true);
        }
        if (this.config.change) {
          window.document.addEventListener("change", this.changeEvent, true);
        }
        if (this.config.submit) {
          window.document.addEventListener("submit", this.submitEvent, true);
        }
        if (this.config.pv) {
          this.collect.on("route-change", function (e) {
            var i = e.config;
            var n = e.name;
            t.getPageViewEvent(i, n);
            t.pageView = true;
          });
          var i = setTimeout(function () {
            if (!t.pageView) {
              t.getPageViewEvent(t.getDefaultConfig());
              t.pageView = true;
              clearTimeout(i);
            }
          }, 2000);
        }
        if (this.config.beat) {
          try {
            if (document.readyState === "complete") {
              this.beatEvent(this.beatTime);
            } else {
              window.addEventListener("load", function () {
                t.beatEvent(t.beatTime);
              });
            }
            var n = 0;
            var o = null;
            window.addEventListener("scroll", function () {
              clearTimeout(o);
              o = setTimeout(r, 500);
              n = document.documentElement.scrollTop || document.body.scrollTop;
            });
            function r() {
              if ((document.documentElement.scrollTop || document.body.scrollTop) == n) {
                t.eventHandel({
                  eventType: "dom",
                  eventName: "beat"
                }, {
                  beat_type: 1
                });
              }
            }
          } catch (e) {}
          try {
            var s = window.performance && window.performance.getEntriesByType("paint");
            if (s && s.length) {
              new PerformanceObserver(function (e) {
                var i = e.getEntries();
                var n = i[i.length - 1];
                var o = n.renderTime || n.loadTime;
                if (!t.statistics) {
                  t.getPageLoadEvent(o);
                  t.statistics = true;
                }
              }).observe({
                entryTypes: ["largest-contentful-paint"]
              });
              setTimeout(function () {
                if (!t.statistics) {
                  t.getPageLoadEvent(s[0].startTime || 0);
                  t.statistics = true;
                }
              }, 2000);
            } else {
              this.getPageLoadEvent(0);
            }
          } catch (e) {
            this.getPageLoadEvent(0);
          }
        }
      }
    };
    e.prototype.removeListener = function () {
      window.document.removeEventListener("click", this.clickEvent, true);
      window.document.removeEventListener("change", this.changeEvent, true);
      window.document.removeEventListener("submit", this.submitEvent, true);
    };
    e.prototype.beatEvent = function (e) {
      var t;
      var i = this;
      try {
        this.eventHandel({
          eventType: "dom",
          eventName: "beat"
        }, {
          beat_type: 3
        });
        if (this.beatTime) {
          t = setInterval(function () {
            i.eventHandel({
              eventType: "dom",
              eventName: "beat"
            }, {
              beat_type: 2
            });
          }, e);
        }
        x(function () {
          i.eventHandel({
            eventType: "dom",
            eventName: "beat",
            eventSend: "becon"
          }, {
            beat_type: 0
          });
          if (i.beatTime) {
            clearInterval(t);
          }
        });
      } catch (e) {}
    };
    e.prototype.getDefaultConfig = function () {
      return {
        is_html: 1,
        url: location.href,
        referrer: document.referrer,
        page_key: location.href,
        refer_page_key: document.referrer,
        page_title: document.title || location.pathname,
        page_manual_key: "",
        refer_page_manual_key: "",
        refer_page_title: "",
        page_path: location.pathname,
        page_host: location.host
      };
    };
    return e;
  }();
  var eQ = {
    eventConfig: {
      mode: "proxy-capturing",
      submit: false,
      click: true,
      change: false,
      pv: true,
      beat: true,
      hashTag: false,
      impr: false
    },
    scoutConfig: {
      mode: "xpath"
    }
  };
  var e1 = function () {
    function e(e, t) {
      this.config = e;
      this.config.eventConfig = Object.assign(this.config.eventConfig, t);
    }
    e.prototype.getConfig = function () {
      return this.config;
    };
    e.prototype.setConfig = function (e) {
      return this.config = e;
    };
    return e;
  }();
  function e0(e, t, i, n, o) {
    return w({
      event: e
    }, function (e, t, i, n) {
      var o;
      var r;
      var s;
      var a;
      var c;
      var u;
      var l;
      var h;
      var p;
      var f;
      var d = {};
      var g = function (e) {
        if (e) {
          var t = e.getBoundingClientRect();
          var i = t.width;
          var n = t.height;
          return {
            left: t.left,
            top: t.top,
            element_width: i,
            element_height: n
          };
        }
      }(t);
      if ((o = e) === undefined) {
        o = {};
      }
      if ((r = g) === undefined) {
        r = {};
      }
      s = o.clientX;
      a = o.clientY;
      var _ = {
        touch_x: Math.floor(s - (c = r.left) >= 0 ? s - c : 0),
        touch_y: Math.floor(a - (u = r.top) >= 0 ? a - u : 0)
      };
      var m = g.element_width;
      var v = g.element_height;
      var y = _.touch_x;
      var b = _.touch_y;
      var E = function (e) {
        var t = [];
        for (; e.parentElement !== null;) {
          t.push(e);
          e = e.parentElement;
        }
        var i = [];
        var n = [];
        t.forEach(function (e) {
          var t = function (e) {
            if (e === null) {
              return {
                str: "",
                index: 0
              };
            }
            var t = 0;
            var i = e.parentElement;
            if (i) {
              var n = i.children;
              var o = 0;
              for (; o < n.length && n[o] !== e; o++) {
                if (n[o].nodeName === e.nodeName) {
                  t++;
                }
              }
            }
            return {
              str: [e.nodeName.toLowerCase(), eq(e, "list") ? "[]" : ""].join(""),
              index: t
            };
          }(e);
          var o = t.str;
          var r = t.index;
          i.unshift(o);
          n.unshift(r);
        });
        return {
          element_path: "/" + i.join("/"),
          positions: n
        };
      }(t);
      var w = E.element_path;
      var S = E.positions;
      l = eK(t);
      h = [];
      (function e(t) {
        var i = eH(t);
        if (i && h.indexOf(i) === -1) {
          h.push(i);
        }
        if (t.childNodes.length > 0) {
          var n = t.childNodes;
          var o = 0;
          for (; o < n.length; o++) {
            if (n[o].nodeType !== 8) {
              e(n[o]);
            }
          }
        }
      })(l);
      var k = h;
      var A = window.performance.timing.navigationStart;
      var D = Date.now() - A;
      var T = S.map(function (e) {
        return "" + e;
      });
      var O = null;
      if (window.TEAVisualEditor && window.TEAVisualEditor.getOriginXpath) {
        O = window.TEAVisualEditor.getOriginXpath({
          xpath: w,
          positions: T
        });
      }
      d.element_path = O && O.xpath || w;
      d.positions = O && O.positions || T;
      if (n && !n.text) {
        d.texts = k;
        p = eK(t);
        f = "";
        (function e(t) {
          var i = eH(t);
          if (i) {
            f += i;
          }
          if (t.childNodes.length > 0) {
            var n = t.childNodes;
            var o = 0;
            for (; o < n.length; o++) {
              if (n[o].nodeType === 3) {
                e(n[o]);
              }
            }
          }
        })(p);
        d.element_title = f;
      }
      d.element_id = t.getAttribute("id") || "";
      d.element_class_name = t.getAttribute("class") || "";
      d.element_type = t.nodeType;
      d.element_width = Math.floor(m);
      d.element_height = Math.floor(v);
      d.touch_x = y;
      d.touch_y = b;
      d.page_manual_key = "";
      d.elememt_manual_key = "";
      d.since_page_start_ms = D;
      d.page_start_ms = A;
      d.page_path = location.pathname;
      d.page_host = location.host;
      if (i.track_attr && eJ(t, i.track_attr)) {
        var M = eF(t, i.track_attr);
        for (var R in M) {
          d[R] = M[R];
        }
      }
      var C = eK(t);
      if (C.tagName === "A") {
        d.href = C.getAttribute("href");
      }
      if (t.tagName === "IMG") {
        d.src = t.getAttribute("src");
      }
      return d;
    }(t, i, n, o), {
      is_html: 1,
      page_key: window.location.href,
      page_title: document.title
    });
  }
  var e2 = function () {
    function e(e, t) {
      this.ignore = {
        text: true
      };
      this.initConfig = e;
      this.options = t;
      this.eventName = t && t.custom === "tea" ? {
        click: "__bav_click",
        page: "__bav_page",
        beat: "__bav_beat",
        static: "__bav_page_statistics",
        exposure: "__bav_page_exposure"
      } : {
        click: "bav2b_click",
        page: "bav2b_page",
        beat: "bav2b_beat",
        static: "bav2b_page_statistics",
        exposure: "bav2b_exposure"
      };
      if (t && t.text === true) {
        this.ignore.text = false;
      }
      if (t && t.exposure && t.exposure.eventName) {
        this.eventName.exposure = t.exposure.eventName;
      }
    }
    e.prototype.handleEvent = function (e, t) {
      try {
        if (function (e) {
          for (var t = e; t && t.parentNode;) {
            if (t.hasAttribute("data-tea-ignore")) {
              return true;
            }
            if (t.nodeName === "HTML" || t.nodeName === "body") {
              break;
            }
            t = t.parentNode;
          }
          return false;
        }(e.target)) {
          return null;
        }
        var i = "bav2b_click";
        switch (t) {
          case "click":
            i = this.eventName.click;
            return e0(i, e, e.target, this.options, this.ignore);
          case "exposure":
            i = this.eventName.exposure;
            return e0(i, e, e.target, this.options, this.ignore);
          case "change":
            return w({}, e0(i = "bav2b_change", e, e.target, this.options), function (e, t) {
              try {
                if (e === "bav2b_change") {
                  if (t.hasAttribute("data-tea-track")) {
                    return {
                      value: t.value
                    };
                  } else {
                    return {};
                  }
                }
              } catch (e) {
                return {};
              }
            }(i, e.target));
          case "submit":
            return e0(i = "bav2b_submit", e, e.target, this.options);
        }
      } catch (e) {
        return null;
      }
    };
    e.prototype.handleViewEvent = function (e) {
      e.event = this.eventName.page;
      e.page_title = document.title;
      e.page_total_width = window.innerWidth;
      e.page_total_height = window.innerHeight;
      try {
        var t = window.sessionStorage.getItem("_tea_cache_duration");
        if (t) {
          var i = JSON.parse(t);
          e.refer_page_duration_ms = i ? i.duration : "";
        }
        e.scroll_width = document.documentElement.scrollLeft ? document.documentElement.scrollLeft + window.innerWidth : window.innerWidth;
        e.scroll_height = document.documentElement.scrollTop ? document.documentElement.scrollTop + window.innerHeight : window.innerHeight;
        e.page_start_ms = window.performance.timing.navigationStart;
      } catch (e) {}
      return e;
    };
    e.prototype.handleStatisticsEvent = function (e) {
      var t = {
        event: this.eventName.static,
        is_html: 1,
        page_key: location.href,
        refer_page_key: document.referrer || "",
        page_title: document.title,
        page_manual_key: this.initConfig.autotrack.page_manual_key || "",
        refer_page_manual_key: ""
      };
      try {
        var i = e.lcp;
        var n = window.performance.timing;
        var o = n.loadEventEnd - n.navigationStart;
        t.page_init_cost_ms = parseInt(i || (o > 0 ? o : 0));
        t.page_start_ms = n.navigationStart;
      } catch (e) {}
      return t;
    };
    e.prototype.handleBeadtEvent = function (e) {
      e.event = this.eventName.beat;
      e.page_key = window.location.href;
      e.is_html = 1;
      e.page_title = document.title;
      e.page_manual_key = this.initConfig.autotrack.page_manual_key || "";
      try {
        e.page_viewport_width = window.innerWidth;
        e.page_viewport_height = window.innerHeight;
        e.page_total_width = document.documentElement.scrollWidth;
        e.page_total_height = document.documentElement.scrollHeight;
        e.scroll_width = document.documentElement.scrollLeft + window.innerWidth;
        e.scroll_height = document.documentElement.scrollTop + window.innerHeight;
        e.since_page_start_ms = Date.now() - window.performance.timing.navigationStart;
        e.page_start_ms = window.performance.timing.navigationStart;
      } catch (e) {}
      return e;
    };
    return e;
  }();
  var e4 = function () {
    function e(e) {
      this.collect = e;
      this.eventNameList = ["report_click_event", "report_change_event", "report_submit_event", "report_exposure_event", "report_page_view_event", "report_page_statistics_event", "report_beat_event"];
    }
    e.prototype.send = function (e, t) {
      var i = e.eventSend;
      var n = t.event;
      delete t.event;
      if (i && i === "becon") {
        this.collect.beconEvent(n, t);
      } else {
        this.collect.event(n, t);
      }
    };
    e.prototype.get = function (e, t) {
      fetch(e, Object.assign({
        headers: {
          "content-type": "application/json"
        },
        method: "GET"
      }, t));
    };
    e.prototype.post = function (e, t) {
      fetch(e, Object.assign({
        headers: {
          "content-type": "application/json"
        },
        method: "POST"
      }, t));
    };
    return e;
  }();
  var e3 = "_TEA_VE_OPEN";
  var e5 = "_TEA_VE_APIHOST";
  var e6 = "lang";
  var e9 = "_VISUAL_EDITOR_V";
  var e8 = "_VISUAL_EDITOR_U";
  function e7() {
    try {
      var e = window.TEAVisualEditor.lang = window.TEAVisualEditor.lang || $.get(e6);
      var t = window.TEAVisualEditor.__editor_ajax_domain = window.TEAVisualEditor.__editor_ajax_domain || $.get(e5);
      var i = window.TEAVisualEditor.__editor_verison = window.TEAVisualEditor.__editor_verison || $.get(e9);
      var n = window.TEAVisualEditor.__editor_url = window.TEAVisualEditor.__editor_url || $.get(e8);
      var o = +new Date();
      var r = new Date(o + 1800000);
      $.set(e3, "1", {
        expires: r
      });
      $.set(e5, t, {
        expires: r
      });
      $.set(e8, n, {
        expires: r
      });
      $.set(e6, e, {
        expires: r
      });
      $.set(e9, i || "", {
        expires: r
      });
    } catch (e) {}
  }
  var te = false;
  function tt(e) {
    var t = e.event;
    var i = e.editorUrl;
    var n = e.autoTrackInstance;
    if (!te) {
      te = true;
      z(i, function () {
        eM(t, "editorScriptloadSuccess");
        n.destroy();
      }, function () {
        if (t) {
          eM(t, "editorScriptloadError");
        }
        te = false;
      });
    }
  }
  var ti;
  var tn;
  var to;
  var tr;
  var ts;
  var ta = function () {
    function e(e) {
      this._instance = null;
      this._intersection = e;
      this.init();
    }
    e.prototype.init = function () {
      var e = this;
      this._instance = new MutationObserver(function (t) {
        t.forEach(function (t) {
          if (t.type === "attributes") {
            e.attributeChangeObserve(t);
          }
          if (t.type === "childList") {
            e.modifyNodeObserve(t);
          }
        });
      });
      this._instance.observe(document.body, {
        childList: true,
        attributes: true,
        subtree: true,
        attributeOldValue: false
      });
    };
    e.prototype.attributeChangeObserve = function (e) {
      if (e.target.hasAttribute("data-exposure")) {
        this.exposureAdd(e, "mutation");
      } else {
        this.exposureRemove(e);
      }
    };
    e.prototype.modifyNodeObserve = function (e) {
      var t = this;
      Array.prototype.forEach.call(e.addedNodes, function (e) {
        if (e.nodeType === 1 && e.hasAttribute("data-exposure")) {
          t.exposureAdd(e, "intersect");
        }
        t.mapChild(e, t.exposureAdd);
      });
      Array.prototype.forEach.call(e.removedNodes, function (e) {
        if (e.nodeType === 1 && e.hasAttribute("data-exposure")) {
          t.exposureRemove(e);
        }
        t.mapChild(e, t.exposureRemove);
      });
    };
    e.prototype.mapChild = function (e, t) {
      var i = this;
      if (e.nodeType === 1 && e.children.length) {
        Array.prototype.forEach.call(e.children, function (e) {
          if (e.nodeType === 1 && e.hasAttribute("data-exposure")) {
            t(e);
          }
          i.mapChild(e, t);
        });
      }
    };
    e.prototype.exposureAdd = function (e, t) {
      this._intersection.exposureAdd(e, t);
    };
    e.prototype.exposureRemove = function (e) {
      this._intersection.exposureRemove(e);
    };
    e._exposure_observer = null;
    return e;
  }();
  var tc = function () {
    function e(t, i) {
      this.count = 1;
      this.instance = this.buildObserver();
      this.observeMap = e._observer_map;
      if (t.autotrack.exposure.ratio) {
        this.Ratio = t.autotrack.exposure.ratio;
      } else if (t.autotrack.exposure.ratio === 0) {
        this.Ratio = 0;
      } else {
        this.Ratio = 0.5;
      }
      this.EventHandle = i;
    }
    e.prototype.buildObserver = function () {
      var t = this;
      if (!e._observer_instance) {
        if (IntersectionObserver) {
          e._observer_instance = new IntersectionObserver(function (e) {
            e.forEach(function (e) {
              if (t.observeMap.get(e.target._observeId)) {
                t.exposureEvent(e);
              }
            });
          }, {
            threshold: [0.01, 0.25, 0.5, 0.75, 1]
          });
        }
        return e._observer_instance;
      }
    };
    e.prototype.exposureAdd = function (e, t) {
      var i = e;
      if (t === "mutation") {
        i = e.target;
      }
      var n = i._observeId;
      if (n || this.observeMap.has(n)) {
        if (i.visible === false) {
          var o = i.getBoundingClientRect();
          var r = o.top;
          var s = o.left;
          var a = o.right;
          var c = o.bottom;
          if (r >= 0 && c <= window.innerHeight && s >= 0 && a <= window.innerWidth) {
            i.visible = true;
            this.EventHandle({
              eventType: "dom",
              eventName: "exposure"
            }, e);
          }
        }
      } else {
        i._observeId = this.count;
        i.visible = false;
        this.observeMap.set(this.count, i);
        this.observe(i);
        this.count++;
      }
    };
    e.prototype.exposureRemove = function (e) {
      if (this.observeMap.has(e._observeId)) {
        this.observeMap.delete(e._observeId);
        this.unobserve(e);
      }
    };
    e.prototype.exposureEvent = function (e) {
      if (e.intersectionRatio >= this.Ratio && e.isIntersecting) {
        if (e.target.style.opacity !== "0" && e.target.style.visibility !== "hidden" && e.target.visible !== true) {
          e.target.visible = true;
          this.EventHandle({
            eventType: "dom",
            eventName: "exposure"
          }, e);
        }
      } else {
        e.target.visible = false;
      }
    };
    e.prototype.observe = function (e) {
      this.instance.observe(e);
    };
    e.prototype.unobserve = function (e) {
      this.instance.unobserve(e);
    };
    e._observer_instance = null;
    e._observer_map = new Map();
    return e;
  }();
  var tu = function () {
    function e(e, t) {
      if (e.autotrack && e.autotrack.exposure) {
        this._intersection = new tc(e, t);
        this._observer = new ta(this._intersection);
        this.initObserver();
      }
    }
    e.prototype.initObserver = function () {
      var e = this;
      Array.prototype.forEach.call(document.querySelectorAll("[data-exposure]"), function (t) {
        e._intersection.exposureAdd(t, "intersect");
      });
    };
    return e;
  }();
  var tl = {
    hashTag: false,
    impr: false
  };
  var th = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      this.autoTrackStart = false;
      this.collect = e;
      this.config = t;
      if (t.autotrack) {
        var i = e.Types;
        if (!t.autotrack || !t.autotrack.collect_url || !!t.autotrack.collect_url()) {
          this.ready(i.Autotrack);
          this.collect.emit(i.AutotrackReady);
        }
      }
    };
    e.prototype.ready = function (e) {
      this.collect.set(e);
      var t = this.config.autotrack;
      t = Object.assign(tl, t = typeof t == "object" ? t : {});
      this.destroyed = false;
      this.options = t;
      this.Config = new e1(eQ, this.options);
      this.Exposure = new tu(this.config, this.handle.bind(this));
      this.Listener = new eZ(t, this.collect, this.Config);
      this.EventHandle = new e2(this.config, t);
      this.Request = new e4(this.collect);
      this.autoTrackStart = true;
      this.init();
      (function (e, t) {
        window.TEAVisualEditor = window.TEAVisualEditor || {};
        var i = "";
        var n = "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/visual-editor-rangers.js?query=" + Date.now();
        window.TEAVisualEditor.appId = t.app_id;
        var o = t.channel_domain;
        var r = "";
        eO(["*"]);
        if (o) {
          var s;
          var a = "";
          try {
            var c = window.performance.getEntriesByType("resource");
            if (c && c.length && (c.forEach(function (e) {
              if (e.initiatorType === "script" && e.name && e.name.indexOf("collect") !== -1) {
                a = e.name;
              }
            }), a && (s = a.split("/")) && s.length)) {
              r = "https:/";
              for (var u = 2; u < s.length && u !== s.length - 1; u++) {
                r = r + "/" + s[u];
              }
              if (r && r.indexOf("/5.0")) {
                r = r.split("/5.0")[0] || r;
              }
            }
          } catch (e) {}
        }
        eG(t, et);
        if ($.get(e3) === "1") {
          var l = function () {
            var e = $.get(e5);
            try {
              e = JSON.parse(e);
            } catch (e) {}
            return e;
          }();
          var h = "";
          if (l) {
            window.TEAVisualEditor.__editor_ajax_domain = l;
            h = $.get(e8);
          }
          tt({
            event: null,
            editorUrl: h || n,
            autoTrackInstance: e
          });
          e7();
        } else {
          try {
            eR("tea:openVisualEditor", function (t) {
              var s = t.data;
              if (typeof t.data == "string") {
                try {
                  s = JSON.parse(t.data);
                } catch (e) {
                  s = undefined;
                }
              }
              if (s) {
                var a = s.referrer;
                var c = s.lang;
                if (a) {
                  window.TEAVisualEditor.__editor_ajax_domain = a;
                }
                i = n;
                if (o) {
                  var u = s.version;
                  i = r ? "" + r + (u ? "/visual-editor-rangers-v" + u : "/visual-editor-rangers-v1.0.0") + ".js" : n;
                  window.TEAVisualEditor.__editor_verison = u;
                }
                window.TEAVisualEditor.__editor_url = i;
                window.TEAVisualEditor.lang = c;
                tt({
                  event: t,
                  editorUrl: i,
                  autoTrackInstance: e
                });
                e7();
              }
            });
            window.TEAVisualEditor.openAutotrackEditor = function () {
              tt({
                event: null,
                editorUrl: window.TEAVisualEditor.__editor_url,
                autoTrackInstance: e
              });
            };
          } catch (e) {}
        }
        try {
          eR("tea:openHeatMapCore", function (i) {
            var n = i.data.app_id;
            if (!n || n === t.app_id) {
              tt({
                event: i,
                editorUrl: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/heatmap-core.js?query=" + Date.now(),
                autoTrackInstance: e
              });
            }
          });
        } catch (e) {}
      })(this, this.config);
    };
    e.prototype.init = function () {
      this.Listener.init(this.handle.bind(this));
      if (this.collect.loadType === "base") {
        (window.opener || window.parent).postMessage("[tea-sdk]ready", "*");
      }
    };
    e.prototype.handle = function (e, t) {
      if (e.eventType === "dom") {
        this.handleDom(e, t);
      }
    };
    e.prototype.handleDom = function (e, t) {
      try {
        var i = e.eventName;
        if (i === "click" || i === "exposure" || i === "change" || i === "submit") {
          var n = this.EventHandle.handleEvent(t, i);
          if (n !== null) {
            this.Request.send({
              eventType: "custom",
              eventName: "report_" + i + "_event",
              extra: {
                methods: "GET"
              }
            }, n);
          }
        } else if (i === "page_view" || i === "page_statistics") {
          var o = undefined;
          o = i === "page_view" ? this.EventHandle.handleViewEvent(t) : this.EventHandle.handleStatisticsEvent(t);
          this.Request.send({
            eventType: "custom",
            eventName: "report_${eventName}_event",
            extra: {
              methods: "GET"
            }
          }, o);
        } else if (i === "beat") {
          var r = this.EventHandle.handleBeadtEvent(t);
          var s = e.eventSend;
          this.Request.send({
            eventType: "custom",
            eventName: "report_${eventName}_event",
            extra: {
              methods: "GET"
            },
            eventSend: s
          }, r);
        }
      } catch (e) {}
    };
    e.prototype.destroy = function () {
      if (this.autoTrackStart) {
        this.autoTrackStart = false;
        this.Listener.removeListener();
      }
    };
    return e;
  }();
  (i = ts ||= {}).Net = "net";
  i.FailNet = "f_net";
  i.FailData = "f_data";
  var tp = {
    pv: ["predefine_pageview"],
    sdk: ["_be_active", "predefine_page_alive", "predefine_page_close", "__profile_set", "__profile_set_once", "__profile_increment", "__profile_unset", "__profile_append"],
    autotrack: ["bav2b_click", "bav2b_page", "bav2b_beat", "bav2b_page_statistics", "__bav_click", "__bav_page", "__bav_beat", "__bav_page_statistics"]
  };
  var tf = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      var i = this;
      this.ready = t.app_id && t.enable_tracer && !t.disable_track_event;
      if (this.ready) {
        this.limit = {
          pv: 1,
          sdk: 3,
          autotrack: 3,
          log: 3
        };
        this.errorCode = {
          f_net: 0,
          f_data: 0
        };
        this.tracerCache = new Map();
        this.collect = e;
        this.appid = t.app_id;
        this.reportUrl = e.configManager.getUrl("event");
        var n = this.collect.Types;
        e.adapters.fetch;
        this.collect.on(n.Event, function (e) {
          if (R(e)) {
            e.forEach(function (e) {
              i.addCount("log");
            });
          } else {
            i.addCount("log");
          }
        });
        this.collect.on(n.SubmitError, function (e) {
          var t = e.type;
          var n = e.eventDate;
          var o = e.errorCode;
          var r = e.response;
          i.addErrorCount(n, t, o, r);
        });
        this.listener();
        this.collect.emit(n.TracerReady);
      }
    };
    e.prototype.addCount = function (e, t = "net", i = 1) {
      try {
        this.tracerCache ||= new Map();
        var n = undefined;
        if (this.tracerCache.has(e)) {
          if ((o = this.tracerCache.get(e)).has(t)) {
            n = o.get(t).params.count;
            n++;
            o.set(t, this.processTracer(n, e, t));
          } else {
            n = i;
            o.set(t, this.processTracer(i, e, t));
          }
        } else {
          var o = new Map();
          n = i;
          o.set(t, this.processTracer(i, e, t));
          this.tracerCache.set(e, o);
        }
        if (t === "net" && n >= this.limit[e]) {
          this.report(false);
        }
      } catch (e) {}
    };
    e.prototype.addErrorCount = function (e, t, i, n) {
      var o = this;
      try {
        if (e && e.length) {
          var r = e[0].events;
          if (r && r.length) {
            if (t === "f_data") {
              if (n && n.hasOwnProperty("sc")) {
                this.addCount("log", t, r.length - n.sc);
              } else {
                this.addCount("log", t, r.length);
              }
              this.errorCode[t] = i;
            } else {
              r.forEach(function (e) {
                var n = "log";
                for (var r in tp) {
                  if (tp[r].indexOf(e.event) !== -1) {
                    n = r;
                    break;
                  }
                }
                o.addCount(n, t, 1);
                o.errorCode[t] = i;
              });
            }
          }
        }
      } catch (e) {}
    };
    e.prototype.report = function (e) {
      if (this.tracerCache) {
        var t = [];
        this.tracerCache.forEach(function (e) {
          e.forEach(function (e) {
            t.push(e);
          });
        });
        if (t && t.length) {
          this.sendTracer(t, e);
        }
      }
    };
    e.prototype.sendTracer = function (e, t) {
      try {
        var i = this.collect.eventManager.merge(e);
        this.collect.requestManager.useRequest({
          url: this.reportUrl,
          data: i,
          useBeacon: t
        });
        this.tracerCache = null;
      } catch (e) {}
    };
    e.prototype.processTracer = function (e, t, i) {
      try {
        var n = {
          count: e,
          state: i,
          key: t,
          params_for_special: "applog_trace",
          aid: this.appid,
          platform: "web",
          _staging_flag: 1,
          sdk_version: et
        };
        if (i === "f_net" || i === "f_data") {
          n.errorCode = this.errorCode[i];
        }
        var o = this.collect.processEvent("applog_trace", n);
        if (o && o.event) {
          delete o.is_bav;
          return o;
        }
      } catch (e) {}
    };
    e.prototype.listener = function () {
      var e = this;
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") {
          e.leavePage();
        }
      });
      x(function () {
        e.leavePage();
      });
    };
    e.prototype.leavePage = function () {
      this.report(true);
    };
    return e;
  }();
  var td = L(function (e, t) {
    var i;
    var n;
    var o;
    var r;
    var s;
    var a;
    var c;
    var u;
    var l;
    var h;
    var p;
    var f;
    var d;
    var g;
    var _;
    var m;
    var v;
    var y;
    var b;
    var E;
    var w;
    i = "millisecond";
    n = "second";
    o = "minute";
    r = "hour";
    s = "week";
    a = "month";
    c = "quarter";
    u = "year";
    l = "date";
    h = "Invalid Date";
    p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
    f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
    d = function (e, t, i) {
      var n = String(e);
      if (!n || n.length >= t) {
        return e;
      } else {
        return "" + Array(t + 1 - n.length).join(i) + e;
      }
    };
    (_ = {})[g = "en"] = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    };
    m = function (e) {
      return e instanceof E;
    };
    v = function (e, t, i) {
      var n;
      if (!e) {
        return g;
      }
      if (typeof e == "string") {
        if (_[e]) {
          n = e;
        }
        if (t) {
          _[e] = t;
          n = e;
        }
      } else {
        var o = e.name;
        _[o] = e;
        n = o;
      }
      if (!i && n) {
        g = n;
      }
      return n || !i && g;
    };
    y = function (e, t) {
      if (m(e)) {
        return e.clone();
      }
      var i = typeof t == "object" ? t : {};
      i.date = e;
      i.args = arguments;
      return new E(i);
    };
    (b = {
      s: d,
      z: function (e) {
        var t = -e.utcOffset();
        var i = Math.abs(t);
        return (t <= 0 ? "+" : "-") + d(Math.floor(i / 60), 2, "0") + ":" + d(i % 60, 2, "0");
      },
      m: function e(t, i) {
        if (t.date() < i.date()) {
          return -e(i, t);
        }
        var n = (i.year() - t.year()) * 12 + (i.month() - t.month());
        var o = t.clone().add(n, a);
        var r = i - o < 0;
        var s = t.clone().add(n + (r ? -1 : 1), a);
        return +(-(n + (i - o) / (r ? o - s : s - o)) || 0);
      },
      a: function (e) {
        if (e < 0) {
          return Math.ceil(e) || 0;
        } else {
          return Math.floor(e);
        }
      },
      p: function (e) {
        return {
          M: a,
          y: u,
          w: s,
          d: "day",
          D: l,
          h: r,
          m: o,
          s: n,
          ms: i,
          Q: c
        }[e] || String(e || "").toLowerCase().replace(/s$/, "");
      },
      u: function (e) {
        return e === undefined;
      }
    }).l = v;
    b.i = m;
    b.w = function (e, t) {
      return y(e, {
        locale: t.$L,
        utc: t.$u,
        x: t.$x,
        $offset: t.$offset
      });
    };
    w = (E = function () {
      function e(e) {
        this.$L = v(e.locale, null, true);
        this.parse(e);
      }
      var t = e.prototype;
      t.parse = function (e) {
        this.$d = function (e) {
          var t = e.date;
          var i = e.utc;
          if (t === null) {
            return new Date(NaN);
          }
          if (b.u(t)) {
            return new Date();
          }
          if (t instanceof Date) {
            return new Date(t);
          }
          if (typeof t == "string" && !/Z$/i.test(t)) {
            var n = t.match(p);
            if (n) {
              var o = n[2] - 1 || 0;
              var r = (n[7] || "0").substring(0, 3);
              if (i) {
                return new Date(Date.UTC(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, r));
              } else {
                return new Date(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, r);
              }
            }
          }
          return new Date(t);
        }(e);
        this.$x = e.x || {};
        this.init();
      };
      t.init = function () {
        var e = this.$d;
        this.$y = e.getFullYear();
        this.$M = e.getMonth();
        this.$D = e.getDate();
        this.$W = e.getDay();
        this.$H = e.getHours();
        this.$m = e.getMinutes();
        this.$s = e.getSeconds();
        this.$ms = e.getMilliseconds();
      };
      t.$utils = function () {
        return b;
      };
      t.isValid = function () {
        return this.$d.toString() !== h;
      };
      t.isSame = function (e, t) {
        var i = y(e);
        return this.startOf(t) <= i && i <= this.endOf(t);
      };
      t.isAfter = function (e, t) {
        return y(e) < this.startOf(t);
      };
      t.isBefore = function (e, t) {
        return this.endOf(t) < y(e);
      };
      t.$g = function (e, t, i) {
        if (b.u(e)) {
          return this[t];
        } else {
          return this.set(i, e);
        }
      };
      t.unix = function () {
        return Math.floor(this.valueOf() / 1000);
      };
      t.valueOf = function () {
        return this.$d.getTime();
      };
      t.startOf = function (e, t) {
        var i = this;
        var c = !!b.u(t) || t;
        var h = b.p(e);
        function p(e, t) {
          var n = b.w(i.$u ? Date.UTC(i.$y, t, e) : new Date(i.$y, t, e), i);
          if (c) {
            return n;
          } else {
            return n.endOf("day");
          }
        }
        function f(e, t) {
          return b.w(i.toDate()[e].apply(i.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), i);
        }
        var d = this.$W;
        var g = this.$M;
        var _ = this.$D;
        var m = "set" + (this.$u ? "UTC" : "");
        switch (h) {
          case u:
            if (c) {
              return p(1, 0);
            } else {
              return p(31, 11);
            }
          case a:
            if (c) {
              return p(1, g);
            } else {
              return p(0, g + 1);
            }
          case s:
            var v = this.$locale().weekStart || 0;
            var y = (d < v ? d + 7 : d) - v;
            return p(c ? _ - y : _ + (6 - y), g);
          case "day":
          case l:
            return f(m + "Hours", 0);
          case r:
            return f(m + "Minutes", 1);
          case o:
            return f(m + "Seconds", 2);
          case n:
            return f(m + "Milliseconds", 3);
          default:
            return this.clone();
        }
      };
      t.endOf = function (e) {
        return this.startOf(e, false);
      };
      t.$set = function (e, t) {
        var s;
        var c = b.p(e);
        var h = "set" + (this.$u ? "UTC" : "");
        var p = ((s = {}).day = h + "Date", s[l] = h + "Date", s[a] = h + "Month", s[u] = h + "FullYear", s[r] = h + "Hours", s[o] = h + "Minutes", s[n] = h + "Seconds", s[i] = h + "Milliseconds", s)[c];
        var f = c === "day" ? this.$D + (t - this.$W) : t;
        if (c === a || c === u) {
          var d = this.clone().set(l, 1);
          d.$d[p](f);
          d.init();
          this.$d = d.set(l, Math.min(this.$D, d.daysInMonth())).$d;
        } else if (p) {
          this.$d[p](f);
        }
        this.init();
        return this;
      };
      t.set = function (e, t) {
        return this.clone().$set(e, t);
      };
      t.get = function (e) {
        return this[b.p(e)]();
      };
      t.add = function (e, t) {
        var i;
        var c = this;
        e = Number(e);
        var l = b.p(t);
        function h(t) {
          var i = y(c);
          return b.w(i.date(i.date() + Math.round(t * e)), c);
        }
        if (l === a) {
          return this.set(a, this.$M + e);
        }
        if (l === u) {
          return this.set(u, this.$y + e);
        }
        if (l === "day") {
          return h(1);
        }
        if (l === s) {
          return h(7);
        }
        var p = ((i = {})[o] = 60000, i[r] = 3600000, i[n] = 1000, i)[l] || 1;
        var f = this.$d.getTime() + e * p;
        return b.w(f, this);
      };
      t.subtract = function (e, t) {
        return this.add(e * -1, t);
      };
      t.format = function (e) {
        var t = this;
        var i = this.$locale();
        if (!this.isValid()) {
          return i.invalidDate || h;
        }
        var n = e || "YYYY-MM-DDTHH:mm:ssZ";
        var o = b.z(this);
        var r = this.$H;
        var s = this.$m;
        var a = this.$M;
        var c = i.weekdays;
        var u = i.months;
        function l(e, i, o, r) {
          return e && (e[i] || e(t, n)) || o[i].substr(0, r);
        }
        function p(e) {
          return b.s(r % 12 || 12, e, "0");
        }
        var d = i.meridiem || function (e, t, i) {
          var n = e < 12 ? "AM" : "PM";
          if (i) {
            return n.toLowerCase();
          } else {
            return n;
          }
        };
        var g = {
          YY: String(this.$y).slice(-2),
          YYYY: this.$y,
          M: a + 1,
          MM: b.s(a + 1, 2, "0"),
          MMM: l(i.monthsShort, a, u, 3),
          MMMM: l(u, a),
          D: this.$D,
          DD: b.s(this.$D, 2, "0"),
          d: String(this.$W),
          dd: l(i.weekdaysMin, this.$W, c, 2),
          ddd: l(i.weekdaysShort, this.$W, c, 3),
          dddd: c[this.$W],
          H: String(r),
          HH: b.s(r, 2, "0"),
          h: p(1),
          hh: p(2),
          a: d(r, s, true),
          A: d(r, s, false),
          m: String(s),
          mm: b.s(s, 2, "0"),
          s: String(this.$s),
          ss: b.s(this.$s, 2, "0"),
          SSS: b.s(this.$ms, 3, "0"),
          Z: o
        };
        return n.replace(f, function (e, t) {
          return t || g[e] || o.replace(":", "");
        });
      };
      t.utcOffset = function () {
        return -(Math.round(this.$d.getTimezoneOffset() / 15) * 15);
      };
      t.diff = function (e, t, i) {
        var l;
        var h = b.p(t);
        var p = y(e);
        var f = (p.utcOffset() - this.utcOffset()) * 60000;
        var d = this - p;
        var g = b.m(this, p);
        g = ((l = {})[u] = g / 12, l[a] = g, l[c] = g / 3, l[s] = (d - f) / 604800000, l.day = (d - f) / 86400000, l[r] = d / 3600000, l[o] = d / 60000, l[n] = d / 1000, l)[h] || d;
        if (i) {
          return g;
        } else {
          return b.a(g);
        }
      };
      t.daysInMonth = function () {
        return this.endOf(a).$D;
      };
      t.$locale = function () {
        return _[this.$L];
      };
      t.locale = function (e, t) {
        if (!e) {
          return this.$L;
        }
        var i = this.clone();
        var n = v(e, t, true);
        if (n) {
          i.$L = n;
        }
        return i;
      };
      t.clone = function () {
        return b.w(this.$d, this);
      };
      t.toDate = function () {
        return new Date(this.valueOf());
      };
      t.toJSON = function () {
        if (this.isValid()) {
          return this.toISOString();
        } else {
          return null;
        }
      };
      t.toISOString = function () {
        return this.$d.toISOString();
      };
      t.toString = function () {
        return this.$d.toUTCString();
      };
      return e;
    }()).prototype;
    y.prototype = w;
    [["$ms", i], ["$s", n], ["$m", o], ["$H", r], ["$W", "day"], ["$M", a], ["$y", u], ["$D", l]].forEach(function (e) {
      w[e[1]] = function (t) {
        return this.$g(t, e[0], e[1]);
      };
    });
    y.extend = function (e, t) {
      if (!e.$i) {
        e(t, E, y);
        e.$i = true;
      }
      return y;
    };
    y.locale = v;
    y.isDayjs = m;
    y.unix = function (e) {
      return y(e * 1000);
    };
    y.en = _[g];
    y.Ls = _;
    y.p = {};
    e.exports = y;
  });
  var tg = L(function (e, t) {
    var i;
    var n;
    var o;
    var r;
    var s;
    var a;
    var c;
    var u;
    var l;
    var h;
    var p;
    var f;
    var d;
    o = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
    r = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    s = {
      years: 31536000000,
      months: 2592000000,
      days: 86400000,
      hours: 3600000,
      minutes: 60000,
      seconds: 1000,
      milliseconds: 1,
      weeks: 604800000
    };
    a = function (e) {
      return e instanceof d;
    };
    c = function (e, t, i) {
      return new d(e, i, t.$l);
    };
    u = function (e) {
      return n.p(e) + "s";
    };
    l = function (e) {
      return e < 0;
    };
    h = function (e) {
      if (l(e)) {
        return Math.ceil(e);
      } else {
        return Math.floor(e);
      }
    };
    p = function (e) {
      return Math.abs(e);
    };
    f = function (e, t) {
      if (e) {
        if (l(e)) {
          return {
            negative: true,
            format: "" + p(e) + t
          };
        } else {
          return {
            negative: false,
            format: "" + e + t
          };
        }
      } else {
        return {
          negative: false,
          format: ""
        };
      }
    };
    d = function () {
      function e(e, t, i) {
        var n = this;
        this.$d = {};
        this.$l = i;
        if (e === undefined) {
          this.$ms = 0;
          this.parseFromMilliseconds();
        }
        if (t) {
          return c(e * s[u(t)], this);
        }
        if (typeof e == "number") {
          this.$ms = e;
          this.parseFromMilliseconds();
          return this;
        }
        if (typeof e == "object") {
          Object.keys(e).forEach(function (t) {
            n.$d[u(t)] = e[t];
          });
          this.calMilliseconds();
          return this;
        }
        if (typeof e == "string") {
          var o = e.match(r);
          if (o) {
            var a = o.slice(2).map(function (e) {
              return Number(e);
            });
            this.$d.years = a[0];
            this.$d.months = a[1];
            this.$d.weeks = a[2];
            this.$d.days = a[3];
            this.$d.hours = a[4];
            this.$d.minutes = a[5];
            this.$d.seconds = a[6];
            this.calMilliseconds();
            return this;
          }
        }
        return this;
      }
      var t = e.prototype;
      t.calMilliseconds = function () {
        var e = this;
        this.$ms = Object.keys(this.$d).reduce(function (t, i) {
          return t + (e.$d[i] || 0) * s[i];
        }, 0);
      };
      t.parseFromMilliseconds = function () {
        var e = this.$ms;
        this.$d.years = h(e / 31536000000);
        e %= 31536000000;
        this.$d.months = h(e / 2592000000);
        e %= 2592000000;
        this.$d.days = h(e / 86400000);
        e %= 86400000;
        this.$d.hours = h(e / 3600000);
        e %= 3600000;
        this.$d.minutes = h(e / 60000);
        e %= 60000;
        this.$d.seconds = h(e / 1000);
        e %= 1000;
        this.$d.milliseconds = e;
      };
      t.toISOString = function () {
        var e = f(this.$d.years, "Y");
        var t = f(this.$d.months, "M");
        var i = +this.$d.days || 0;
        if (this.$d.weeks) {
          i += this.$d.weeks * 7;
        }
        var n = f(i, "D");
        var o = f(this.$d.hours, "H");
        var r = f(this.$d.minutes, "M");
        var s = this.$d.seconds || 0;
        if (this.$d.milliseconds) {
          s += this.$d.milliseconds / 1000;
        }
        var a = f(s, "S");
        var c = e.negative || t.negative || n.negative || o.negative || r.negative || a.negative;
        var u = o.format || r.format || a.format ? "T" : "";
        var l = (c ? "-" : "") + "P" + e.format + t.format + n.format + u + o.format + r.format + a.format;
        if (l === "P" || l === "-P") {
          return "P0D";
        } else {
          return l;
        }
      };
      t.toJSON = function () {
        return this.toISOString();
      };
      t.format = function (e) {
        var t = {
          Y: this.$d.years,
          YY: n.s(this.$d.years, 2, "0"),
          YYYY: n.s(this.$d.years, 4, "0"),
          M: this.$d.months,
          MM: n.s(this.$d.months, 2, "0"),
          D: this.$d.days,
          DD: n.s(this.$d.days, 2, "0"),
          H: this.$d.hours,
          HH: n.s(this.$d.hours, 2, "0"),
          m: this.$d.minutes,
          mm: n.s(this.$d.minutes, 2, "0"),
          s: this.$d.seconds,
          ss: n.s(this.$d.seconds, 2, "0"),
          SSS: n.s(this.$d.milliseconds, 3, "0")
        };
        return (e || "YYYY-MM-DDTHH:mm:ss").replace(o, function (e, i) {
          return i || String(t[e]);
        });
      };
      t.as = function (e) {
        return this.$ms / s[u(e)];
      };
      t.get = function (e) {
        var t = this.$ms;
        var i = u(e);
        if (i === "milliseconds") {
          t %= 1000;
        } else {
          t = i === "weeks" ? h(t / s[i]) : this.$d[i];
        }
        if (t === 0) {
          return 0;
        } else {
          return t;
        }
      };
      t.add = function (e, t, i) {
        var n;
        n = t ? e * s[u(t)] : a(e) ? e.$ms : c(e, this).$ms;
        return c(this.$ms + n * (i ? -1 : 1), this);
      };
      t.subtract = function (e, t) {
        return this.add(e, t, true);
      };
      t.locale = function (e) {
        var t = this.clone();
        t.$l = e;
        return t;
      };
      t.clone = function () {
        return c(this.$ms, this);
      };
      t.humanize = function (e) {
        return i().add(this.$ms, "ms").locale(this.$l).fromNow(!e);
      };
      t.milliseconds = function () {
        return this.get("milliseconds");
      };
      t.asMilliseconds = function () {
        return this.as("milliseconds");
      };
      t.seconds = function () {
        return this.get("seconds");
      };
      t.asSeconds = function () {
        return this.as("seconds");
      };
      t.minutes = function () {
        return this.get("minutes");
      };
      t.asMinutes = function () {
        return this.as("minutes");
      };
      t.hours = function () {
        return this.get("hours");
      };
      t.asHours = function () {
        return this.as("hours");
      };
      t.days = function () {
        return this.get("days");
      };
      t.asDays = function () {
        return this.as("days");
      };
      t.weeks = function () {
        return this.get("weeks");
      };
      t.asWeeks = function () {
        return this.as("weeks");
      };
      t.months = function () {
        return this.get("months");
      };
      t.asMonths = function () {
        return this.as("months");
      };
      t.years = function () {
        return this.get("years");
      };
      t.asYears = function () {
        return this.as("years");
      };
      return e;
    }();
    e.exports = function (e, t, o) {
      i = o;
      n = o().$utils();
      o.duration = function (e, t) {
        return c(e, {
          $l: o.locale()
        }, t);
      };
      o.isDuration = a;
      var r = t.prototype.add;
      var s = t.prototype.subtract;
      t.prototype.add = function (e, t) {
        if (a(e)) {
          e = e.asMilliseconds();
        }
        return r.bind(this)(e, t);
      };
      t.prototype.subtract = function (e, t) {
        if (a(e)) {
          e = e.asMilliseconds();
        }
        return s.bind(this)(e, t);
      };
    };
  });
  td.extend(tg);
  var t_ = ["__cep_sdk_onboard", "__cep_trigger_sdk", "_be_active"];
  var tm = ["and", "or", "not"];
  var tv = function () {
    function e() {
      this.support = true;
      this.currentPlan = 1;
      this.shouldSendEvent = false;
      this.staing = false;
      this.test = false;
      this.cepReady = false;
      this.eventCache = [];
    }
    e.prototype.apply = function (e, t) {
      var i = this;
      this.collect = e;
      this.config = t;
      if (this.config.cep) {
        var n = e.adapters.storage;
        var o = e.Types;
        this.types = o;
        this.storage = new n(false);
        this.configManager = e.configManager;
        this.url = t.cep_url ? "" + t.cep_url : e.configManager.getDomain() + "/service/2/cep_settings/";
        this.reportUrl = e.configManager.getUrl("event");
        this.key = "__tea_cep_plan_" + t.app_id;
        this.quotasKey = "__tea_cep_plan_quotas_" + t.app_id;
        this.isWait = false;
        this.eventCache = [];
        this.test = e.configManager.staging;
        this.collect.on(o.SubmitAfter, function (e) {
          i.matchEvent(e);
        });
        this.init();
      }
    };
    e.prototype.init = function () {
      var e = this;
      var t = true;
      var i = 0;
      var n = 0;
      var o = 0;
      var r = false;
      var s = this.storage.getItem(this.key) || {};
      if (s && Object.keys(s).length) {
        r = true;
        i = s.last_update_time;
        n = s.fetch_interval;
        o = s.config_version || 0;
        t = Date.now() - i > n * 1000;
      }
      if (t) {
        var a = this.configManager.get();
        var c = a.header;
        var u = a.user;
        this.collect.requestManager.useRequest({
          url: this.url,
          data: {
            header: c,
            user: u,
            local_time: Date.now(),
            config_version: o
          },
          success: function (t) {
            if (t && t.code === 0) {
              s.fetch_interval = t.fetch_interval;
              s.data = t.data;
              s.last_update_time = Date.now();
              s.config_version = t.config_version;
              e.clearQuotas();
              e.initState(t.data);
              e.storage.setItem(e.key, s);
              t.data.forEach(function (t) {
                e.event("__cep_sdk_onboard", t.plan_id);
              });
            } else if ((t.code === 304 || t.code === 400) && r) {
              s.last_update_time = Date.now();
              e.storage.setItem(e.key, s);
              e.initState(s.data);
            }
          },
          fail: function () {
            if (r) {
              e.planData = s.data;
              e.initState(s.data);
            } else {
              e.support = false;
            }
          },
          timeout: 5000
        });
      } else {
        s.last_update_time = Date.now();
        this.storage.setItem(this.key, s);
        this.initState(s.data);
      }
    };
    e.prototype.initState = function (e) {
      var t = this;
      if (e && e.length) {
        this.stateArray = new Map();
        this.waitArray = new Map();
        this.planData = e;
        e.forEach(function (e) {
          var i = new Map();
          if (e.pattern && e.pattern.events) {
            var n = e.pattern.events.length === 1;
            e.pattern.events.forEach(function (e) {
              i.set(e.id, {
                id: e.id,
                isMatch: false,
                event: null,
                after: e.after || null,
                connection: e.connection || null,
                window: e.window || null,
                matchTime: 0,
                initTime: Date.now(),
                singleRule: n
              });
            });
            t.stateArray.set(e.plan_id, {
              patternState: i,
              singleRule: n,
              pattern: {
                aid: e.aid,
                biz_id: e.biz_id,
                end_time: e.end_time,
                start_time: e.start_time,
                web_sdk_version: e.web_sdk_version,
                stage: e.stage
              },
              quotas: e.quotas
            });
          }
        });
        this.cepReady = true;
        this.dealCache();
        this.collect.emit(this.types.CepReady);
      }
    };
    e.prototype.check = function (e) {
      var t = Date.now();
      return !(Date.now() > e.end_time * 1000) && !(t < e.start_time * 1000) && !(t > e.end_time * 1000) && (this.staing = e.staing === "testing", !(et < e.web_sdk_version) || (this.support = false, false));
    };
    e.prototype.dealCache = function () {
      var e = this;
      if (this.eventCache.length) {
        var t = 1;
        this.eventCache.forEach(function (i) {
          e.matchEvent(i);
          t++;
        });
        if (t === this.eventCache.length) {
          this.eventCache = [];
        }
      }
    };
    e.prototype.matchEvent = function (e) {
      if (this.support && (!this.staing || this.test) && e && e.length) {
        try {
          if (!this.cepReady) {
            this.eventCache.push(e);
            return;
          }
          var t = e[0];
          var i = t.header;
          var n = t.user;
          var o = t.events;
          if (o.length) {
            o.reverse();
          }
          for (var r = 0; r < o.length; r++) {
            var s = o[r].event;
            if (t_.indexOf(s) !== -1) {
              return false;
            }
            this.matchRule(i, n, o[r]);
          }
        } catch (e) {
          this.collect.emit(j.DEBUGGER_MESSAGE, {
            type: j.DEBUGGER_MESSAGE_SDK,
            info: "发生了异常",
            level: "error",
            time: Date.now(),
            data: e.message
          });
          return;
        }
      }
    };
    e.prototype.matchRule = function (e, t, i) {
      try {
        for (var n = 0; n < this.planData.length; n++) {
          var o = this.planData[n];
          var r = o.plan_id;
          if (this.check(o) && this.checkQuotas(r) && o.pattern && o.pattern.events) {
            var s = o.pattern.events;
            var a = 0;
            for (; a < s.length; a++) {
              if (this.rule(e, t, i, s[a].condition)) {
                var c = this.stateArray.get(r).patternState;
                var u = c.get(s[a].id);
                if (this.stateArray.get(r).singleRule) {
                  this.changeStatus(r, s[a].id, i);
                  this.publish([i], r, s[a].id);
                  break;
                }
                if (!u.isMatch) {
                  if (u.after && c.get(u.after).isMatch) {
                    this.changeStatus(r, s[a].id, i);
                  } else if (!u.after) {
                    this.changeStatus(r, s[a].id, i);
                  }
                  break;
                }
              }
            }
          }
        }
        this.statusCheck();
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return;
      }
    };
    e.prototype.changeStatus = function (e, t, i) {
      var n = this.stateArray.get(e);
      var o = n.patternState.get(t);
      o.isMatch = true;
      o.event = i;
      o.matchTime = i.local_time_ms || Date.now();
      n.patternState.set(t, o);
      this.stateArray.set(e, n);
    };
    e.prototype.statusCheck = function () {
      var e;
      var t;
      var i;
      var n;
      try {
        var o = S(this.stateArray);
        var r = o.next();
        for (; !r.done; r = o.next()) {
          var s = k(r.value, 2);
          var a = s[0];
          var c = s[1];
          var u = c.patternState;
          if (c.isSingle) {
            break;
          }
          try {
            var l = S(u);
            var h = l.next();
            for (; !h.done; h = l.next()) {
              var p = k(h.value, 2);
              var f = p[0];
              var d = p[1];
              if (d.after && (!d.after || u.get(d.after).isMatch)) {
                if (d.connection === "NOT_FOLLOWED_BY") {
                  if (d.isMatch) {
                    this.reset(a, f);
                  } else if (Date.now() - u.get(d.after).matchTime > d.window) {
                    this.publish([u.get(d.after).event, d.event], a, f);
                  } else {
                    this.startWait(a, f, d);
                  }
                  break;
                }
                if (d.isMatch) {
                  if (d.matchTime - u.get(d.after).matchTime <= d.window) {
                    this.publish([u.get(d.after).event, d.event], a, f);
                  } else {
                    this.reset(a, f);
                  }
                } else if (Date.now() - u.get(d.after).matchTime > d.window) {
                  this.reset(a, f);
                } else {
                  this.startWait(a, f, d);
                }
                break;
              }
            }
          } catch (e) {
            i = {
              error: e
            };
          } finally {
            try {
              if (h && !h.done && (n = l.return)) {
                n.call(l);
              }
            } finally {
              if (i) {
                throw i.error;
              }
            }
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (r && !r.done && (t = o.return)) {
            t.call(o);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    e.prototype.startWait = function (e, t, i) {
      var n = this;
      try {
        if (!this.waitArray.get(e)) {
          this.waitArray.set(e, new Map());
        }
        var o = this.waitArray.get(e);
        if (!o.get(t)) {
          var r = setTimeout(function () {
            var o;
            var r = n.stateArray.get(e).patternState;
            var s = r.get(t);
            if (s.connection === "NOT_FOLLOWED_BY") {
              if (!s.isMatch && r.get(s.after).isMatch || s.matchTime - r.get(s.after).matchTime > i.window) {
                (o = n.waitArray.get(e).get(t)).triggerWait = true;
                n.waitArray.set(e, n.waitArray.get(e).set(t, o));
                n.publish([r.get(s.after).event], e, t);
              } else {
                n.reset(e, t);
              }
            } else if (s.connection === "FOLLOWED_BY") {
              if (s.isMatch && r.get(s.after).isMatch) {
                (o = n.waitArray.get(e).get(t)).triggerWait = true;
                n.waitArray.set(e, n.waitArray.get(e).set(t, o));
                n.publish([r.get(s.after).event], e, t);
              } else {
                n.reset(e, t);
              }
            }
          }, i.window);
          o.set(t, {
            waitFn: r,
            triggerWait: false
          });
          this.waitArray.set(e, o);
        }
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.rule = function (e, t, i, n) {
      var o = this;
      try {
        var r = i.event;
        var s = i.params;
        s = JSON.parse(s);
        if (tm.indexOf(n.op) !== -1) {
          if (n.conditions && n.conditions.length) {
            var a = n.conditions;
            var c = 0;
            var u = new Map();
            u.set(c, {
              op: n.op,
              result: undefined,
              resultList: [],
              resultKey: [],
              resultLength: a.length
            });
            (function i(n, a) {
              for (var l = 0; l < n.length; l++) {
                c++;
                if (tm.indexOf(n[l].op) !== -1 && n[l].hasOwnProperty("conditions")) {
                  u.set(c, {
                    op: n[l].op,
                    result: undefined,
                    fatherKey: a,
                    resultList: [],
                    resultKey: [],
                    resultLength: n[l].conditions.length
                  });
                  i(n[l].conditions, c);
                } else {
                  var h = o.scope(n[l].key);
                  var p = h.scope;
                  var f = h.key;
                  var d = h.key2;
                  var g = p ? p === "header" ? d ? JSON.parse(e[d])[f] : e[f] : p === "user" ? t[f] : s[f] : r;
                  var _ = o.calculate(n[l].op, g, n[l].value);
                  u.set(c, {
                    op: n[l].op,
                    result: _,
                    fatherKey: a
                  });
                }
              }
            })(a, c);
            for (var l = u.get(0); l.result === undefined || l.resultList.length < l.resultLength;) {
              u.forEach(function (e, t) {
                if (e.result !== undefined && e.fatherKey !== undefined) {
                  var i = u.get(e.fatherKey);
                  if (i.resultList.length < i.resultLength && i.resultKey.indexOf(t) === -1) {
                    i.resultKey.push(t);
                    i.resultList.push(e.result);
                    u.set(e.fatherKey, i);
                  }
                }
              });
              u.forEach(function (e) {
                if (e.resultList && e.resultList.length === e.resultLength) {
                  if (e.op === "and") {
                    e.result = e.resultList.indexOf(false) === -1;
                  }
                  if (e.op === "or") {
                    e.result = e.resultList.indexOf(true) !== -1;
                  }
                }
              });
            }
            return u.get(0).result;
          }
          return false;
        }
        var h = this.scope(n.key);
        var p = h.scope;
        var f = h.key;
        var d = h.key2;
        var g = p ? p === "header" ? d ? JSON.parse(e[d])[f] : e[f] : p === "user" ? t[f] : s[f] : r;
        return this.calculate(n.op, g, n.value);
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return false;
      }
    };
    e.prototype.publish = function (e, t, i) {
      try {
        var n = this.configManager.get().user;
        var o = {
          biz_id: this.stateArray.get(t).pattern.biz_id,
          plan_id: t,
          uid: n.user_id || "",
          did: n.device_id || "",
          uuid: n.user_unique_id,
          events: e,
          extra: {
            url: window.location.href
          }
        };
        this.collect.emit("__cep_match", o);
        (window.opener || window.parent).postMessage({
          type: "__cep_match",
          data: o
        }, "*");
        this.event("__cep_trigger_sdk", t);
        this.addQuotas(t);
        this.reset(t, i);
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return;
      }
    };
    e.prototype.addQuotas = function (e) {
      var t = this.stateArray.get(e).quotas;
      if (t && t.length) {
        var i = this.storage.getItem(this.quotasKey) || {};
        i[e] ||= {
          value: 0,
          lastTime: Date.now()
        };
        var n = i[e].value;
        if (n === 0) {
          i[e].lastTime = Date.now();
        }
        i[e].value = n + 1;
        this.storage.setItem(this.quotasKey, i);
      }
    };
    e.prototype.checkQuotas = function (e) {
      var t = this.stateArray.get(e).quotas;
      var i = this.storage.getItem(this.quotasKey) || {};
      i[e] ||= {
        value: 0,
        lastTime: Date.now()
      };
      if (t && t.length) {
        var n = t[0].granularity;
        var o = t[0].value;
        if (t[0].type !== "per_keyid") {
          return true;
        }
        var r = this.release(n);
        if (r === "all") {
          return !(i[e].value >= o);
        } else if (Date.now() - i[e].lastTime >= r) {
          i[e].value = 0;
          i[e].lastTime = Date.now();
          this.storage.setItem(this.quotasKey, i);
          return true;
        } else {
          return !(i[e].value >= o);
        }
      }
      return true;
    };
    e.prototype.clearQuotas = function () {
      this.storage.setItem(this.quotasKey, null);
    };
    e.prototype.release = function (e) {
      if (e === "all") {
        return e;
      }
      var t = td.duration(e);
      if (t) {
        return t.asMilliseconds();
      } else {
        return "all";
      }
    };
    e.prototype.reset = function (e, t) {
      var i = this.stateArray.get(e);
      if (i.singleRule) {
        var n = i.patternState.get(t);
        n.isMatch = false;
        n.event = null;
        n.matchTime = 0;
        n.initTime = Date.now();
        i.patternState.set(t, n);
      } else {
        i.patternState.forEach(function (e) {
          e.isMatch = false;
          e.event = null;
          e.matchTime = 0;
          e.initTime = Date.now();
        });
      }
      this.stateArray.set(e, i);
      var o = this.waitArray.get(e);
      if (o && o.get(t)) {
        clearTimeout(o.get(t).waitFn);
        o.delete(t);
      }
    };
    e.prototype.event = function (e, t) {
      try {
        var i = {
          event: e,
          params: JSON.stringify({
            plan_id: t || "",
            biz_id: this.stateArray.get(t).pattern.biz_id
          }),
          local_time_ms: Date.now()
        };
        var n = this.configManager.get();
        var o = n.header;
        var r = n.user;
        o.custom = JSON.stringify(o.custom);
        this.collect.requestManager.useRequest({
          url: this.reportUrl,
          data: [{
            events: [i],
            user: r,
            header: o
          }]
        });
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return;
      }
    };
    e.prototype.scope = function (e) {
      var t = "";
      var i = "";
      if (e.indexOf(".") > -1) {
        var n = e.split(".");
        t = n[0];
        e = n[1];
        if (t === "header" && e === "custom") {
          e = n[2];
          i = n[1];
        }
      }
      return {
        scope: t,
        key: e,
        key2: i
      };
    };
    e.prototype.calculate = function (e, t, i) {
      try {
        if (e === "=") {
          return t === i;
        }
        if (["=", "<", ">", ">=", "<=", "!="].indexOf(e) !== -1) {
          switch (e) {
            case "=":
              return t === i;
            case "<":
              return t < i;
            case ">":
              return t > i;
            case ">=":
              return t >= i;
            case "<=":
              return t <= i;
            case "!=":
              return t !== i;
          }
        } else {
          if (["in", "contains"].indexOf(e) !== -1) {
            return i.indexOf(t) !== -1;
          }
          if (["is not null", "is null"].indexOf(e) !== -1) {
            if (e === "is null") {
              return t == null;
            } else {
              return t != null;
            }
          }
          if (["startswith", "endswith"].indexOf(e) !== -1) {
            if (e === "startswith") {
              return t.indexOf(i) === 0;
            }
            var n = t.length - i.length;
            return t.substr(n, i.length) === i;
          }
        }
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return false;
      }
    };
    return e;
  }();
  var ty = typeof window != "undefined" ? (window.LogPluginObject ||= {}, window.LogPluginObject) : null;
  var tb = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      this._plugin = {};
      this.config = t;
      this.collect = e;
      this.channel = t.channel || "cn";
      this.loadExtend();
    };
    e.prototype.loadExtend = function () {
      var e = this;
      try {
        this.collect.remotePlugin.forEach(function (t, i) {
          if (t === "sdk") {
            if (ew.hasOwnProperty(i)) {
              var n = ew[i].object;
              var o = "" + ew[i].src[e.channel];
              e.exist(i, n, o);
            }
          } else if (typeof t == "object") {
            if (t.src) {
              e.exist(i, t.call, t.src);
            } else {
              e.process(i, t.instance, "INSTANCE");
            }
          }
        });
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.exist = function (e, t, i) {
      var n = this;
      if (ty[t]) {
        this.process(e, ty[t]);
      } else {
        this.loadPlugin(e, i, function () {
          n.process(e, ty[t]);
        }, function () {});
      }
    };
    e.prototype.process = function (e, t, i) {
      try {
        if (i) {
          var n = new t();
          if (n.apply) {
            n.apply(this.collect, this.config);
          }
        } else if (t) {
          t(this.collect, this.config);
        }
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.loadPlugin = function (e, t, i, n) {
      var o = this;
      try {
        var r = document.createElement("script");
        r.src = t;
        this._plugin[e] ||= [];
        this._plugin[e].push(i);
        r.onerror = function () {
          n(t);
        };
        r.onload = function () {
          o._plugin[e].forEach(function (e) {
            e();
          });
        };
        document.getElementsByTagName("head")[0].appendChild(r);
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    return e;
  }();
  var tE = function () {
    function e() {
      this.autotrack = false;
      this.spa = false;
      this.cache = {};
      this.allowHash = false;
    }
    e.prototype.apply = function (e, t) {
      if (t.spa || t.autotrack) {
        var i = e.Types;
        this.collect = e;
        this.config = t;
        this.appid = t.app_id;
        this.allowHash = t.allow_hash;
        this.fncArray = new Map();
        this.setKey();
        this.setLocation();
        this.hack();
        this.init();
        this.listener();
        e.emit(i.RouteReady);
      }
    };
    e.prototype.setKey = function () {
      var e = this.collect.adapters.storage;
      this.storage = new e(false);
      this.cache_key = "__tea_cache_refer_" + this.appid;
      this.cache = {
        refer_key: "",
        refer_title: document.title || location.pathname,
        refer_manual_key: "",
        routeChange: false
      };
      if (this.config.autotrack && typeof this.config.autotrack == "object" && this.config.autotrack.page_manual_key) {
        this.cache.refer_manual_key = this.config.autotrack.page_manual_key;
      }
      this.storage.setItem(this.cache_key, this.cache);
    };
    e.prototype.hack = function () {
      var e = this;
      var t = window.history.pushState;
      history.pushState = function (i) {
        var n = [];
        var o = 1;
        for (; o < arguments.length; o++) {
          n[o - 1] = arguments[o];
        }
        if (typeof history.onpushstate == "function") {
          history.onpushstate({
            state: i
          });
        }
        var r = t.call.apply(t, A([history, i], n));
        if (e.lastLocation !== location.href) {
          var s = e.getPopStateChangeEventData();
          e.setReferCache(e.lastLocation);
          e.lastLocation = location.href;
          e.sendPv(s, "pushState");
          return r;
        }
      };
      var i = history.replaceState;
      history.replaceState = function (t) {
        var n = [];
        var o = 1;
        for (; o < arguments.length; o++) {
          n[o - 1] = arguments[o];
        }
        if (typeof history.onreplacestate == "function") {
          history.onreplacestate({
            state: t
          });
        }
        var r = i.call.apply(i, A([history, t], n));
        if (e.lastLocation !== location.href) {
          var s = e.getPopStateChangeEventData();
          e.setReferCache(e.lastLocation);
          e.lastLocation = location.href;
          e.sendPv(s);
          return r;
        }
      };
    };
    e.prototype.setLocation = function () {
      if (typeof window != "undefined") {
        this.lastLocation = window.location.href;
      }
    };
    e.prototype.getLocation = function () {
      return this.lastLocation;
    };
    e.prototype.init = function () {
      var e = this.getPopStateChangeEventData();
      this.collect.emit("route-change", {
        config: e,
        init: true
      });
    };
    e.prototype.listener = function () {
      var e = this;
      var t = null;
      window.addEventListener("hashchange", function (i) {
        if (e.lastLocation !== window.location.href && (clearTimeout(t), e.allowHash)) {
          e.setReferCache(e.lastLocation);
          e.lastLocation = window.location.href;
          var n = e.getPopStateChangeEventData();
          e.sendPv(n);
        }
      });
      window.addEventListener("popstate", function (i) {
        if (e.lastLocation !== window.location.href) {
          t = setTimeout(function () {
            e.setReferCache(e.lastLocation);
            e.lastLocation = window.location.href;
            var t = e.getPopStateChangeEventData();
            e.sendPv(t);
          }, 10);
        }
      });
    };
    e.prototype.getPopStateChangeEventData = function () {
      var e = this.pageConfig();
      e.is_back = 0;
      return e;
    };
    e.prototype.pageConfig = function () {
      try {
        var e = this.storage.getItem(this.cache_key) || {};
        var t = false;
        var i = this.storage.getItem("__tea_cache_first_" + this.appid);
        t = !i || i != 1;
        return {
          is_html: 1,
          url: location.href,
          referrer: this.handleRefer(),
          page_key: location.href,
          refer_page_key: this.handleRefer(),
          page_title: document.title || location.pathname,
          page_manual_key: this.config.autotrack && this.config.autotrack.page_manual_key || "",
          refer_page_manual_key: e && e.refer_manual_key || "",
          refer_page_title: e && e.refer_title || "",
          page_path: location.pathname,
          page_host: location.host,
          is_first_time: "" + t
        };
      } catch (e) {
        this.collect.emit(j.DEBUGGER_MESSAGE, {
          type: j.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return {};
      }
    };
    e.prototype.sendPv = function (e, t) {
      this.collect.emit("route-change", {
        config: e,
        init: false
      });
    };
    e.prototype.handleRefer = function () {
      var e = "";
      try {
        var t = this.storage.getItem() || {};
        e = t.routeChange ? t.refer_key : this.collect.configManager.get("referrer");
      } catch (t) {
        e = document.referrer;
      }
      return e;
    };
    e.prototype.setReferCache = function (e) {
      var t = this.storage.getItem(this.cache_key) || {};
      t.refer_key = e;
      t.routeChange = true;
      this.storage.setItem(this.cache_key, t);
    };
    return e;
  }();
  ek.usePlugin(tb, "extend");
  ek.usePlugin(tf, "tracer");
  ek.usePlugin(eN, "ab");
  ek.usePlugin(eL, "stay");
  ek.usePlugin(th, "autotrack");
  ek.usePlugin(eB, "et");
  ek.usePlugin(eV, "profile");
  ek.usePlugin(tv, "cep");
  ek.usePlugin(ej, "heartbeat");
  ek.usePlugin(e$, "monitor");
  ek.usePlugin(tE, "route");
  ek.usePlugin(tf, "tracer");
  var tw = new ek("default");
  var tS = {
    CN: 3053,
    OVERSEA: 3297
  };
  var tk = function (e) {
    function t(t) {
      var i;
      var n;
      var o;
      var r;
      var s;
      var a;
      var c = this;
      var u = t.test;
      var l = t.TEAChannelDomain;
      var h = l === undefined ? "" : l;
      var p = t.mode;
      var f = t.TEAChannel;
      var d = t.TEAChannelType;
      t.tracker = h || d || f ? (n = (i = {
        isTest: u || p === "test",
        channel_domain: h,
        channel_type: d,
        channel: f
      }).isTest, o = i.channel_domain, r = i.channel_type, s = i.channel, a = /snssdk|zijieapi/g.test(o) && /ttp|tcpy/g.test(r) && /va|sg|in/g.test(s) ? tS.CN : tS.OVERSEA, tw.init({
        app_id: a,
        channel_type: r,
        channel: s,
        channel_domain: o
      }), tw.config({
        _staging_flag: +!!n,
        enable_et_test: n
      }), tw.start(), tw.event.bind(tw)) : function () {};
      return e.call(this, t) || this;
    }
    o(t, e);
    return t;
  }(E);
  exports.TeaAnalytics = tk;
}