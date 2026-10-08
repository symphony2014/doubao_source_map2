// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'configManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 406357
         */
module.exports = function (module, exports, require) {
  var n;
  var r;
  var o;
  var s;
  var aceLoggerCoreManager = require("ace-logger-core-manager") /*id: 711568*/;
  (n = o ||= {}).deDE = "de-DE";
  n.enUS = "en-US";
  n.esES = "es-ES";
  n.frFR = "fr-FR";
  n.hiIN = "hi-IN";
  n.idID = "id-ID";
  n.itIT = "it-IT";
  n.jaJP = "ja-JP";
  n.koKR = "ko-KR";
  n.msMY = "ms-MY";
  n.ptBR = "pt-BR";
  n.ruRU = "ru-RU";
  n.stJO = "st-JO";
  n.thTH = "th-TH";
  n.viVN = "vi-VN";
  n.zhCN = "zh-CN";
  n.zhHK = "zh-HK";
  n.zhTW = "zh-TW";
  var promiseDeferredAndMemoize = require("promise-deferred-and-memoize") /*id: 569657*/;
  (r = s ||= {}).Dev = "development";
  r.Alpha = "alpha";
  r.Staging = "staging";
  r.Boe = "boe";
  r.Prerelease = "prerelease";
  r.Production = "production";
  let c = {
    appName: "unknown",
    appVersion: "0.0.0",
    appRegion: "cn",
    env: s.Production,
    locale: o.enUS,
    channel: "saas",
    urls: {
      larkAPIDomain: ""
    }
  };
  let u = {
    set(e) {
      c = Object.assign(c || {}, e, {
        urls: Object.assign({}, c == null ? undefined : c.urls, e.urls),
        tracingAttributes: Object.assign({}, c == null ? undefined : c.tracingAttributes, e.tracingAttributes)
      });
    },
    get() {
      if (!c) {
        throw Error("please set config first!");
      }
      return c;
    },
    getByKey(e) {
      if (!c) {
        throw Error("please set config first!");
      }
      return c[e];
    },
    isChinaMainlandGeo() {
      return c.user?.geo === "CN";
    },
    isFeishuBrand() {
      return c.user?.tenantBrand === "feishu";
    },
    isHostApp(e) {
      return !!c && (c.appName.toLowerCase() === e || !!c.tracingAttributes?.hostApp && c.tracingAttributes.hostApp.toLowerCase() === e);
    },
    getLarkVersion: () => "7.60.0-fix-emoji-alpha.0",
    init: e => Promise.resolve(),
    _inited: false
  };
  let g = new promiseDeferredAndMemoize.DeferredPromise();
  var larkWidgetLogger = require("lark-widget-logger") /*id: 360994*/;
  var webCoreLoggerManager = require("web-core-logger-manager") /*id: 101534*/;
  var serviceBlockLocaleUtils = require("service-block-locale-utils") /*id: 913121*/;
  var authProfileInitializer = require("auth-profile-initializer") /*id: 767286*/;
  var udPreviewConfigManager = require("ud-preview-config-manager") /*id: 266905*/;
  var webCoreSettingsManager = require("web-core-settings-manager") /*id: 743945*/;
  var udGlobalErrorDispatch = require("ud-global-error-dispatch") /*id: 439316*/;
  var m = new class {
    constructor() {
      this.getDynamicImageSetting = (e = "eu_nc-cdn") => {
        if (!this.settings) {
          let e = Error("[getDynamicImageSetting]call config.init first");
          udGlobalErrorDispatch.dispatchGlobalError(e);
          throw e;
        }
        let r = this.settings.getSettings();
        if ((r == null ? undefined : r.resource_url_tpl)?.fs_domains?.[e] && (r == null ? undefined : r.resource_url_tpl)?.fs_image_path) {
          return {
            domains: r.resource_url_tpl.fs_domains[e],
            path: r.resource_url_tpl.fs_image_path
          };
        } else {
          return {
            domains: [],
            path: ""
          };
        }
      };
      this.getTeaDomain = () => {
        if (!this.settings) {
          let e = Error("[getTeaDomain]call config.init first");
          udGlobalErrorDispatch.dispatchGlobalError(e);
          throw e;
        }
        let i = this.settings.getSettings();
        let n = (i == null ? undefined : i.biz_domain_config)?.tt_tea?.[0];
        if (n && n.indexOf("https://") !== 0) {
          return `https://${n}`;
        } else {
          return n ?? "";
        }
      };
      this.getLoginDomain = () => {
        if (!this.settings) {
          let e = Error("[getLoginDomain]call config.init first");
          udGlobalErrorDispatch.dispatchGlobalError(e);
          throw e;
        }
        let i = "/accounts/page/login";
        let n = this.settings.getSettings();
        let r = (n == null ? undefined : n.biz_domain_config)?.passport_accounts?.[0] || "";
        if (r && !r.startsWith("https://")) {
          return `https://${r}${i}`;
        } else if (r) {
          return `${r}${i}`;
        } else {
          return "";
        }
      };
      this.getFrontierAppKey = () => {
        if (!this.settings) {
          let e = Error("[getFrontierAppKey]call config.init first");
          udGlobalErrorDispatch.dispatchGlobalError(e);
          throw e;
        }
        let i = this.settings.getSettings();
        return (i == null ? undefined : i.client_frontier_config)?.lark_frontier_app_key ?? "";
      };
      this.getDocCustomIconConfig = async () => {
        var e;
        let t = (e = this.settings) === null || e === undefined ? undefined : e.getSettings();
        return {
          biz_domain_config: t == null ? undefined : t.biz_domain_config,
          ccm_custom_icon_config: t == null ? undefined : t.ccm_custom_icon_config
        };
      };
    }
    async initSettings(e) {
      if (!this.settings) {
        serviceBlockLocaleUtils.assignConfig(e);
        this.settings = e.settings ? e.settings : await webCoreSettingsManager.getSettingsInstance();
      }
    }
    async updateSettings(e) {
      serviceBlockLocaleUtils.assignConfig(e);
      this.settings = await webCoreSettingsManager.getSettingsInstance();
    }
    isFeatureEnabled(e) {
      if (!this.settings) {
        let e = Error("[isFeatureEnabled]call config.init first");
        udGlobalErrorDispatch.dispatchGlobalError(e);
        throw e;
      }
      return this.settings.featureGatings.isFeatureEnabled(e);
    }
    getDomain(e) {
      if (this.settings) {
        return this.settings.domains.getDomain(e);
      } else {
        return "";
      }
    }
    getDomains(e) {
      if (this.settings) {
        return this.settings.domains.getDomains(e);
      } else {
        return [];
      }
    }
    getFsUnitTpl(e = "eu_nc") {
      var r;
      if (!this.settings) {
        let e = Error("[getFsUnitTpl]call config.init first");
        udGlobalErrorDispatch.dispatchGlobalError(e);
        throw e;
      }
      let o = this.settings.getSettings();
      let s = {
        avatar_path: "",
        hosts: []
      };
      if ((o == null ? undefined : o.resource_url_tpl)?.fs_avatar_path) {
        s.avatar_path = o.resource_url_tpl?.fs_avatar_path;
      }
      if ((o == null ? undefined : o.resource_url_tpl)?.fs_domains) {
        s.hosts = (r = o == null ? undefined : o.resource_url_tpl) === null || r === undefined ? undefined : r.fs_domains[`${e}-cdn`];
      }
      return s;
    }
  }();
  var contactEntityEnums = require("contact-entity-enums") /*id: 788152*/;
  function A(e) {
    if (e) {
      return `https://${e}`;
    } else {
      return "";
    }
  }
  function f(e) {
    if (!e) {
      throw Error("The parameter \"urls.larkAPIDomain\" is required after 5.30.0. Please pass the \"urls.larkAPIDomain\" parameter.");
    }
  }
  let j = Object.assign({}, u, {
    getByKey(e) {
      if (e === "urls") {
        let e = u.getByKey("urls");
        let t = m.getDomain(serviceBlockLocaleUtils.serviceBlockConst.API);
        let i = e.larkAPIDomain || t;
        f(i);
        let n = m.getDomain("applink");
        let r = e.larkApplinkDomain || n;
        let o = m.getDomain(serviceBlockLocaleUtils.serviceBlockConst.FILE);
        let s = e.larkFileDomain || o;
        let l = m.getDomain(serviceBlockLocaleUtils.serviceBlockConst.LONG);
        let a = e.larkFrontierDomain || l;
        let c = m.getDomain(serviceBlockLocaleUtils.serviceBlockConst.PASSPORT);
        let g = e.larkPassportDomain || c;
        return {
          larkAPIDomain: i,
          larkAPI: e.larkAPI || A(i),
          larkApplinkDomain: r,
          larkApplink: e.larkApplink || A(r),
          larkFileDomain: s,
          larkFile: e.larkFile || A(s),
          larkFrontierDomain: a,
          larkFrontier: e.larkFrontier || A(a),
          larkPassportDomain: g,
          larkPassport: e.larkPassport || A(g)
        };
      }
      return u.getByKey(e);
    },
    async init(e) {
      var o;
      try {
        j._inited;
        j._inited = true;
        Object.values(s).includes(e.env);
        if ((e == null ? undefined : e.skipFetchUser) && (!(o = e == null ? undefined : e.user) || typeof o != "object" || !["id", "tenantId", "region", "unit", "geo", "tenantBrand", "tenantTag"].every(e => e in o))) {
          throw Error("When params.skipFetchUser is true, all keys in params.user are required.");
        }
        j.set(e);
        udPreviewConfigManager.initConfig(m);
        try {
          if (e == null ? undefined : e.getExtraHeaders) {
            serviceBlockLocaleUtils.assignConfig({
              getExtraHeaders: e.getExtraHeaders
            });
          }
          if (!(e == null ? undefined : e.skipFetchUser)) {
            let e = await authProfileInitializer.initAndGetProfile({
              baseUrl: j.getByKey("urls").larkAPI || ""
            });
            j.set({
              user: Object.assign({}, j.getByKey("user"), {
                id: e.userId,
                tenantId: e.tenantId,
                region: e.unit === "eu_ea" ? "va" : "cn",
                unit: e.unit,
                geo: e.geo,
                tenantBrand: e.tenant?.tenant_brand ?? "feishu",
                tenantTag: e.tenant?.tenant_tag ?? contactEntityEnums.ViewModes.STANDARD
              })
            });
          }
        } catch (e) {
          udGlobalErrorDispatch.dispatchGlobalError(e);
        }
        let a = j.isFeishuBrand() ? 161471 : 166462;
        await v(a);
        (function () {
          let t = j.get();
          if (!t.user?.id) {
            return;
          }
          larkWidgetLogger.logger.setAttributes(Object.assign({
            app: t.appName,
            appVersion: t.appVersion,
            env: t.env,
            isFeishuBrand: j.isFeishuBrand()
          }, t.tracingAttributes));
          let i = [s.Production, s.Boe, s.Prerelease].includes(t.env);
          let n = s.Production === t.env;
          let r = A(m.getDomain(serviceBlockLocaleUtils.serviceBlockConst.TT_SLARDAR));
          let {
            slardar: o = true
          } = t;
          if (o) {
            let e = new webCoreLoggerManager.LogSlardarExporter({
              version: j.getLarkVersion(),
              bid: n ? "ud_biz" : "ud_biz_test",
              env: "production",
              uid: t.user.id,
              domain: r
            });
            larkWidgetLogger.logger.manager.setExporter(aceLoggerCoreManager.LogLevel.Debug, e);
          }
          if (i) {
            let e = udPreviewConfigManager.getTeaDomain();
            let i = new webCoreLoggerManager.EventTeaExporter({
              app_id: 1161,
              uid: t.user.id,
              env: t.env,
              enable: true,
              domain: e
            });
            larkWidgetLogger.logger.manager.setExporter(aceLoggerCoreManager.LogLevel.Debug, i);
          }
          larkWidgetLogger.logger.manager.setExporter(aceLoggerCoreManager.LogLevel.Debug, new webCoreLoggerManager.IndexedDbExporter());
        })();
        g.resolve();
      } catch (e) {
        g.reject(e);
        udGlobalErrorDispatch.dispatchGlobalError(e);
      }
    }
  });
  async function v(e) {
    let t = u.getByKey("urls").larkAPIDomain;
    f(t);
    await m.initSettings({
      appId: e,
      appVersion: j.getLarkVersion(),
      locale: j.getByKey("locale").replace(/-/g, "_"),
      channel: j.getByKey("channel"),
      domains: {
        [serviceBlockLocaleUtils.serviceBlockConst.API]: [t]
      },
      settings: j.getByKey("settings")
    });
  }
  var D = j;
  require.d(exports, {
    configManager: function () {
      return D;
    }
  });
}