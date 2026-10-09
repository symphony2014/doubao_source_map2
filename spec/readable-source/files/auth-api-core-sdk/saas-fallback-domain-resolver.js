// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'accountEnvironmentService'
// - Resolved require(933389) to 'account-environment-service'
// - Renamed variable 'l' to 'fallbackDomainConfig_2'
// - Resolved require(909026) to 'fallback-domain-config_2'
// - Renamed variable 'f' to 'fallbackDomainConfig'
// - Resolved require(911136) to 'fallback-domain-config'
// - Renamed variable 'd' to 'feishuLarkFallbackDomains'
// - Resolved require(554782) to 'feishu-lark-fallback-domains'
// - Renamed variable 'h' to 'fallbackDomainConfig_1'
// - Resolved require(228076) to 'fallback-domain-config_1'
// - Renamed variable 'p' to 'larkFeishuFallbackDomains'
// - Resolved require(670224) to 'lark-feishu-fallback-domains'
// - Renamed variable 'g' to 'fallbackDomainConstants'
// - Resolved require(101197) to 'fallback-domain-constants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 530486
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var o;
  var a;
  var s = this && this.__awaiter || function (e, t, r, n) {
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
  var c = this && this.__generator || function (e, t) {
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
  exports.getFallbackDomainByEnvironment = exports.SaasUnit = undefined;
  var accountEnvironmentService = require("account-environment-service") /*id: 933389*/;
  var fallbackDomainConfig_2 = require("fallback-domain-config_2") /*id: 909026*/;
  var fallbackDomainConfig = require("fallback-domain-config") /*id: 911136*/;
  var feishuLarkFallbackDomains = require("feishu-lark-fallback-domains") /*id: 554782*/;
  var fallbackDomainConfig_1 = require("fallback-domain-config_1") /*id: 228076*/;
  var larkFeishuFallbackDomains = require("lark-feishu-fallback-domains") /*id: 670224*/;
  var fallbackDomainConstants = require("fallback-domain-constants") /*id: 101197*/;
  (n = a = exports.SaasUnit ||= {}).EU_NC = "eu_nc";
  n.EU_EA = "eu_ea";
  n.EU_SG = "larksgaws";
  n.EU_JP = "larkjpaws";
  n.BOE_CN = "boecn";
  n.BOE_VA = "boeva";
  n.MY = "larkmy";
  n.US_TTP = "useast15a";
  (i = {})[a.EU_NC] = fallbackDomainConfig.LARK_FALLBACK_DOMAIN;
  i[a.BOE_CN] = fallbackDomainConfig_2.LARK_FALLBACK_DOMAIN;
  i[a.BOE_VA] = fallbackDomainConfig_2.LARK_FALLBACK_DOMAIN;
  i[a.EU_EA] = fallbackDomainConstants.LARK_FALLBACK_DOMAIN;
  i[a.EU_SG] = fallbackDomainConfig_1.LARK_FALLBACK_DOMAIN;
  i[a.EU_JP] = feishuLarkFallbackDomains.LARK_FALLBACK_DOMAIN;
  i[a.MY] = fallbackDomainConfig_1.LARK_FALLBACK_DOMAIN;
  i[a.US_TTP] = larkFeishuFallbackDomains.LARK_FALLBACK_DOMAIN;
  var v = i;
  (o = {})[a.EU_NC] = fallbackDomainConfig.FEISHU_FALLBACK_DOMAIN;
  o[a.BOE_CN] = fallbackDomainConfig_2.FEISHU_FALLBACK_DOMAIN;
  o[a.BOE_VA] = fallbackDomainConfig_2.FEISHU_FALLBACK_DOMAIN;
  o[a.EU_EA] = fallbackDomainConstants.FEISHU_FALLBACK_DOMAIN;
  o[a.EU_SG] = fallbackDomainConfig_1.FEISHU_FALLBACK_DOMAIN;
  o[a.EU_JP] = feishuLarkFallbackDomains.FEISHU_FALLBACK_DOMAIN;
  o[a.MY] = fallbackDomainConfig_1.FEISHU_FALLBACK_DOMAIN;
  o[a.US_TTP] = larkFeishuFallbackDomains.FEISHU_FALLBACK_DOMAIN;
  var m = o;
  exports.getFallbackDomainByEnvironment = function (e) {
    var t = this;
    var r = e.brand;
    var n = e.origin;
    var i = r === "lark" ? v[a.EU_SG] : m[a.EU_NC];
    return function () {
      return s(t, undefined, undefined, function () {
        var e;
        return c(this, function (t) {
          switch (t.label) {
            case 0:
              t.trys.push([0, 2,, 3]);
              return [4, accountEnvironmentService.getEnvironment(n)];
            case 1:
              if ((e = t.sent()) == null ? undefined : e.unit) {
                return [2, r === "lark" ? v[e.unit] : m[e.unit]];
              }
              return [3, 3];
            case 2:
              t.sent();
              return [3, 3];
            case 3:
              return [2, i];
          }
        });
      });
    };
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}