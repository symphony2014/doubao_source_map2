// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'passportSettingsService'
// - Resolved require(537105) to 'passport-settings-service'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 944824
         */
module.exports = function (module, exports, require) {
  var n = this && this.__awaiter || function (e, t, r, n) {
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
  var i = this && this.__generator || function (e, t) {
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
  var o = this && this.__rest || function (e, t) {
    var r = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        r[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; i < n.length; i++) {
        if (t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i])) {
          r[n[i]] = e[n[i]];
        }
      }
    }
    return r;
  };
  exports.SettingsDomainService = undefined;
  var passportSettingsService = require("passport-settings-service") /*id: 537105*/;
  var s = function () {
    function e(e) {
      var t = e.fallbackDomain;
      var r = o(e, ["fallbackDomain"]);
      this.service = new passportSettingsService.SettingsService(r);
      this.fallbackDomain = t;
    }
    e.prototype.resolveFallbackDomain = function () {
      return n(this, undefined, undefined, function () {
        return i(this, function (e) {
          if (typeof this.fallbackDomain == "function") {
            return [2, this.fallbackDomain()];
          } else {
            return [2, this.fallbackDomain];
          }
        });
      });
    };
    e.prototype.updateConfig = function (e) {
      return n(this, undefined, undefined, function () {
        var t;
        var r;
        return i(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, this.service.getSettings(e)];
            case 1:
              if (t = n.sent()) {
                if (!(r = function (e) {
                  if ((e == null ? undefined : e.data)?.biz_domain_config) {
                    return {
                      captchaIdScriptDomain: e.data.biz_domain_config.passport_captcha_id_script_domain?.[0]
                    };
                  }
                }(t))) {
                  return [2, this.resolveFallbackDomain()];
                }
                this.cache = r;
                return [2, r];
              }
              return [2, this.resolveFallbackDomain()];
          }
        });
      });
    };
    e.prototype.getConfig = function (e) {
      return n(this, undefined, undefined, function () {
        var t;
        return i(this, function (r) {
          switch (r.label) {
            case 0:
              if (this.cache && !(e == null ? undefined : e.force)) {
                return [2, this.cache];
              }
              if (this.promise) {
                return [2, this.promise];
              }
              this.promise = this.updateConfig(e);
              return [4, this.promise];
            case 1:
              t = r.sent();
              this.promise = undefined;
              return [2, t];
          }
        });
      });
    };
    return e;
  }();
  exports.SettingsDomainService = s;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}