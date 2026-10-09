// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'queryStringUtils_6'
// - Resolved require(313705) to 'query-string-utils_6'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 537105
         */
module.exports = function (module, exports, require) {
  var n = this && this.__assign || function () {
    return (n = Object.assign || function (e) {
      var t;
      var r = 1;
      var n = arguments.length;
      for (; r < n; r++) {
        for (var i in t = arguments[r]) {
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            e[i] = t[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  };
  var i = this && this.__awaiter || function (e, t, r, n) {
    return new (r ||= Promise)(function (i, o) {
      function a(e) {
        try {
          c(n.next(e));
        } catch (e) {
          o(e);
        }
      }
      function s(e) {
        try {
          c(n.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function c(e) {
        var t;
        if (e.done) {
          i(e.value);
        } else {
          ((t = e.value) instanceof r ? t : new r(function (e) {
            e(t);
          })).then(a, s);
        }
      }
      c((n = n.apply(e, t || [])).next());
    });
  };
  var o = this && this.__generator || function (e, t) {
    var r;
    var n;
    var i;
    var o;
    var a = {
      label: 0,
      sent: function () {
        if (i[0] & 1) {
          throw i[1];
        }
        return i[1];
      },
      trys: [],
      ops: []
    };
    o = {
      next: s(0),
      throw: s(1),
      return: s(2)
    };
    if (typeof Symbol == "function") {
      o[Symbol.iterator] = function () {
        return this;
      };
    }
    return o;
    function s(o) {
      return function (s) {
        return function (o) {
          if (r) {
            throw TypeError("Generator is already executing.");
          }
          while (a) {
            try {
              r = 1;
              if (n && (i = o[0] & 2 ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) {
                return i;
              }
              n = 0;
              if (i) {
                o = [o[0] & 2, i.value];
              }
              switch (o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  a.label++;
                  return {
                    value: o[1],
                    done: false
                  };
                case 5:
                  a.label++;
                  n = o[1];
                  o = [0];
                  continue;
                case 7:
                  o = a.ops.pop();
                  a.trys.pop();
                  continue;
                default:
                  if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                    a = 0;
                    continue;
                  }
                  if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                    a.label = o[1];
                    break;
                  }
                  if (o[0] === 6 && a.label < i[1]) {
                    a.label = i[1];
                    i = o;
                    break;
                  }
                  if (i && a.label < i[2]) {
                    a.label = i[2];
                    a.ops.push(o);
                    break;
                  }
                  if (i[2]) {
                    a.ops.pop();
                  }
                  a.trys.pop();
                  continue;
              }
              o = t.call(e, a);
            } catch (e) {
              o = [6, e];
              n = 0;
            } finally {
              r = i = 0;
            }
          }
          if (o[0] & 5) {
            throw o[1];
          }
          return {
            value: o[0] ? o[1] : undefined,
            done: true
          };
        }([o, s]);
      };
    }
  };
  exports.SettingsService = undefined;
  var queryStringUtils_6 = require("query-string-utils_6") /*id: 313705*/;
  var s = {
    version: "7.39.0",
    platform: "web",
    appId: 1,
    tag: "passportWeb",
    fgTag: "passportWeb"
  };
  var c = function () {
    function e(e) {
      this.cache = {};
      this.config = n(n(n({}, s), {
        fetchTimeoutMs: 3000
      }), e);
    }
    e.prototype.getApiUrl = function (e) {
      var t = n(n({}, this.config), e);
      var r = t.apiDomain;
      var i = t.version;
      var o = t.platform;
      var s = t.appId;
      var c = t.tag;
      var u = t.fgTag;
      var l = t.userBrand;
      var f = t.userUnit;
      var d = t.deviceId;
      var h = queryStringUtils_6.stringify({
        platform: o,
        app_id: s,
        version: i,
        tags: c,
        fg_tags: u,
        user_brand: l,
        user_unit: f,
        device_id: d
      }, {
        addQueryPrefix: true,
        skipNulls: true
      });
      return `https://${r}/settings/v3/${h}`;
    };
    e.prototype.getFromRemote = function (e) {
      return i(this, undefined, undefined, function () {
        var t;
        var r;
        var n = this;
        return o(this, function (a) {
          t = function () {
            return i(n, undefined, undefined, function () {
              return o(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, function e(t, r, n) {
                      var a = r.retryTimes;
                      var s = a === undefined ? 3 : a;
                      var c = r.waitTimeMs;
                      var u = c === undefined ? 100 : c;
                      return i(this, undefined, undefined, function () {
                        return o(this, function (r) {
                          switch (r.label) {
                            case 0:
                              r.trys.push([0, 2,, 4]);
                              return [4, fetch(t, {
                                method: "GET",
                                credentials: "include"
                              })];
                            case 1:
                              return [2, r.sent().json()];
                            case 2:
                              r.sent();
                              if (!s || n && n >= s - 1) {
                                return [2, undefined];
                              }
                              return [4, new Promise(function (e) {
                                return setTimeout(e, u);
                              })];
                            case 3:
                              r.sent();
                              return [2, e(t, {
                                retryTimes: s
                              }, n ? n + 1 : 1)];
                            case 4:
                              return [2];
                          }
                        });
                      });
                    }(this.getApiUrl(e), {
                      retryTimes: 3
                    })];
                  case 1:
                    return [2, t.sent()];
                }
              });
            });
          };
          if (this.config.fetchTimeoutMs) {
            r = new Promise(function (e) {
              var t = setTimeout(function () {
                e(undefined);
                clearTimeout(t);
              }, n.config.fetchTimeoutMs);
            });
            return [2, Promise.race([t(), r])];
          } else {
            return [2, t()];
          }
        });
      });
    };
    e.prototype.getCacheKey = function (e) {
      var t = n(n({}, this.config), e);
      var r = t.appId;
      var i = t.userBrand;
      var o = t.userUnit;
      return `security_settings_${r}_${i}_${o}`;
    };
    e.prototype.getCache = function (e) {
      if (this.cache) {
        return this.cache;
      }
      var t;
      var r = this.getCacheKey(e);
      var n = (t = this.config.cacheDelegate) === null || t === undefined ? undefined : t.getCache(r);
      if (n) {
        this.cache = n;
        return n;
      }
    };
    e.prototype.updateCache = function (e, t) {
      this.cache = e;
      var r;
      var n = this.getCacheKey(t);
      if ((r = this.config.cacheDelegate) !== null && r !== undefined) {
        r.setCache(n, e);
      }
    };
    e.prototype.getSettingsSync = function (e) {
      var t = this.getCache(e);
      this.getSettings(e);
      return t;
    };
    e.prototype.getSettings = function (e) {
      return i(this, undefined, undefined, function () {
        var t;
        return o(this, function (r) {
          switch (r.label) {
            case 0:
              if (this.promise) {
                return [2, this.promise];
              }
              this.promise = this.getFromRemote(e);
              return [4, this.promise];
            case 1:
              t = r.sent();
              this.promise = undefined;
              if (t) {
                this.updateCache(t, e);
              }
              return [2, t];
          }
        });
      });
    };
    return e;
  }();
  exports.SettingsService = c;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}