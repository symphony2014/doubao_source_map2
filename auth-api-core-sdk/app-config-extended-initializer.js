// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Xb' to 'appEnvironments'
// - Renamed export 'ac' to 'initPromise'
// - Renamed export 'lY' to 'appConfig'
// - Renamed export 'ZP' to 'extendedAppConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 806887
         */
module.exports = function (module, exports, require) {
  var aceLoggerCoreManager = require("ace-logger-core-manager") /*id: 711568*/;
  var appConfigManager = require("app-config-manager") /*id: 196878*/;
  var larkLoggerTracingUtils = require("lark-logger-tracing-utils") /*id: 944519*/;
  var webCoreLoggerManager = require("web-core-logger-manager") /*id: 101534*/;
  var serviceBlockLocaleUtils = require("service-block-locale-utils") /*id: 913121*/;
  var authProfileInitializer = require("auth-profile-initializer") /*id: 767286*/;
  var docxConfigAccessor = require("docx-config-accessor") /*id: 195932*/;
  var serviceConfigManager = require("service-config-manager") /*id: 410316*/;
  var contactEntityEnums = require("contact-entity-enums") /*id: 788152*/;
  var globalErrorDispatcher = require("global-error-dispatcher") /*id: 663923*/;
  function h(e) {
    if (e) {
      return `https://${e}`;
    } else {
      return "";
    }
  }
  function p(e) {
    if (!e) {
      throw Error("The parameter \"urls.larkAPIDomain\" is required after 5.30.0. Please pass the \"urls.larkAPIDomain\" parameter.");
    }
  }
  let g = Object.assign({}, appConfigManager.appConfig, {
    getByKey(e) {
      if (e === "urls") {
        let e = appConfigManager.appConfig.getByKey("urls");
        let t = serviceConfigManager.ConfigService.getDomain(serviceBlockLocaleUtils.serviceBlockConst.API);
        let r = e.larkAPIDomain || t;
        p(r);
        let n = serviceConfigManager.ConfigService.getDomain("applink");
        let o = e.larkApplinkDomain || n;
        let a = serviceConfigManager.ConfigService.getDomain(serviceBlockLocaleUtils.serviceBlockConst.FILE);
        let c = e.larkFileDomain || a;
        let u = serviceConfigManager.ConfigService.getDomain(serviceBlockLocaleUtils.serviceBlockConst.LONG);
        let f = e.larkFrontierDomain || u;
        let d = serviceConfigManager.ConfigService.getDomain(serviceBlockLocaleUtils.serviceBlockConst.PASSPORT);
        let g = e.larkPassportDomain || d;
        return {
          larkAPIDomain: r,
          larkAPI: e.larkAPI || h(r),
          larkApplinkDomain: o,
          larkApplink: e.larkApplink || h(o),
          larkFileDomain: c,
          larkFile: e.larkFile || h(c),
          larkFrontierDomain: f,
          larkFrontier: e.larkFrontier || h(f),
          larkPassportDomain: g,
          larkPassport: e.larkPassport || h(g)
        };
      }
      return appConfigManager.appConfig.getByKey(e);
    },
    async init(e) {
      var y;
      try {
        g._inited;
        g._inited = true;
        Object.values(appConfigManager.appEnvironments).includes(e.env);
        if ((e == null ? undefined : e.skipFetchUser) && (!(y = e == null ? undefined : e.user) || typeof y != "object" || !["id", "tenantId", "region", "unit", "geo", "tenantBrand", "tenantTag"].every(e => e in y))) {
          throw Error("When params.skipFetchUser is true, all keys in params.user are required.");
        }
        g.set(e);
        docxConfigAccessor.initConfig(serviceConfigManager.ConfigService);
        try {
          if (e == null ? undefined : e.getExtraHeaders) {
            serviceBlockLocaleUtils.assignConfig({
              getExtraHeaders: e.getExtraHeaders
            });
          }
          if (!(e == null ? undefined : e.skipFetchUser)) {
            let e = await authProfileInitializer.initAndGetProfile({
              baseUrl: g.getByKey("urls").larkAPI || ""
            });
            g.set({
              user: Object.assign({}, g.getByKey("user"), {
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
          globalErrorDispatcher.dispatchGlobalError(e);
        }
        let b = g.isFeishuBrand() ? 161471 : 166462;
        await v(b);
        (function () {
          let t = g.get();
          if (!t.user?.id) {
            return;
          }
          larkLoggerTracingUtils.defaultLogger.setAttributes(Object.assign({
            app: t.appName,
            appVersion: t.appVersion,
            env: t.env,
            isFeishuBrand: g.isFeishuBrand()
          }, t.tracingAttributes));
          let r = [appConfigManager.appEnvironments.Production, appConfigManager.appEnvironments.Boe, appConfigManager.appEnvironments.Prerelease].includes(t.env);
          let c = appConfigManager.appEnvironments.Production === t.env;
          let f = h(serviceConfigManager.ConfigService.getDomain(serviceBlockLocaleUtils.serviceBlockConst.TT_SLARDAR));
          let {
            slardar: d = true
          } = t;
          if (d) {
            let e = new webCoreLoggerManager.LogSlardarExporter({
              version: g.getLarkVersion(),
              bid: c ? "ud_biz" : "ud_biz_test",
              env: "production",
              uid: t.user.id,
              domain: f
            });
            larkLoggerTracingUtils.defaultLogger.manager.setExporter(aceLoggerCoreManager.LogLevel.Debug, e);
          }
          if (r) {
            let e = docxConfigAccessor.getTeaDomain();
            let r = new webCoreLoggerManager.EventTeaExporter({
              app_id: 1161,
              uid: t.user.id,
              env: t.env,
              enable: true,
              domain: e
            });
            larkLoggerTracingUtils.defaultLogger.manager.setExporter(aceLoggerCoreManager.LogLevel.Debug, r);
          }
          larkLoggerTracingUtils.defaultLogger.manager.setExporter(aceLoggerCoreManager.LogLevel.Debug, new webCoreLoggerManager.IndexedDbExporter());
        })();
        appConfigManager.initPromise.resolve();
      } catch (e) {
        appConfigManager.initPromise.reject(e);
        globalErrorDispatcher.dispatchGlobalError(e);
      }
    }
  });
  async function v(e) {
    let t = appConfigManager.appConfig.getByKey("urls").larkAPIDomain;
    p(t);
    await serviceConfigManager.ConfigService.initSettings({
      appId: e,
      appVersion: g.getLarkVersion(),
      locale: g.getByKey("locale").replace(/-/g, "_"),
      channel: g.getByKey("channel"),
      domains: {
        [serviceBlockLocaleUtils.serviceBlockConst.API]: [t]
      },
      settings: g.getByKey("settings")
    });
  }
  exports.extendedAppConfig = g;
  require.d(exports, {
    appEnvironments: function () {
      return appConfigManager.appEnvironments;
    },
    initPromise: function () {
      return appConfigManager.initPromise;
    },
    appConfig: function () {
      return appConfigManager.appConfig;
    }
  });
}