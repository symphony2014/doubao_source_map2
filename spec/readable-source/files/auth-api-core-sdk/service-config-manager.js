// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'ConfigService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 410316
         */
module.exports = function (module, exports, require) {
  var serviceBlockLocaleUtils = require("service-block-locale-utils") /*id: 913121*/;
  var webCoreSettingsManager = require("web-core-settings-manager") /*id: 743945*/;
  var globalErrorDispatcher = require("global-error-dispatcher") /*id: 663923*/;
  exports.ConfigService = new class {
    constructor() {
      this.getDynamicImageSetting = (e = "eu_nc-cdn") => {
        if (!this.settings) {
          let e = Error("[getDynamicImageSetting]call config.init first");
          globalErrorDispatcher.dispatchGlobalError(e);
          throw e;
        }
        let i = this.settings.getSettings();
        if ((i == null ? undefined : i.resource_url_tpl)?.fs_domains?.[e] && (i == null ? undefined : i.resource_url_tpl)?.fs_image_path) {
          return {
            domains: i.resource_url_tpl.fs_domains[e],
            path: i.resource_url_tpl.fs_image_path
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
          globalErrorDispatcher.dispatchGlobalError(e);
          throw e;
        }
        let r = this.settings.getSettings();
        let n = (r == null ? undefined : r.biz_domain_config)?.tt_tea?.[0];
        if (n && n.indexOf("https://") !== 0) {
          return `https://${n}`;
        } else {
          return n ?? "";
        }
      };
      this.getLoginDomain = () => {
        if (!this.settings) {
          let e = Error("[getLoginDomain]call config.init first");
          globalErrorDispatcher.dispatchGlobalError(e);
          throw e;
        }
        let r = "/accounts/page/login";
        let n = this.settings.getSettings();
        let i = (n == null ? undefined : n.biz_domain_config)?.passport_accounts?.[0] || "";
        if (i && !i.startsWith("https://")) {
          return `https://${i}${r}`;
        } else if (i) {
          return `${i}${r}`;
        } else {
          return "";
        }
      };
      this.getFrontierAppKey = () => {
        if (!this.settings) {
          let e = Error("[getFrontierAppKey]call config.init first");
          globalErrorDispatcher.dispatchGlobalError(e);
          throw e;
        }
        let r = this.settings.getSettings();
        return (r == null ? undefined : r.client_frontier_config)?.lark_frontier_app_key ?? "";
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
        globalErrorDispatcher.dispatchGlobalError(e);
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
      var i;
      if (!this.settings) {
        let e = Error("[getFsUnitTpl]call config.init first");
        globalErrorDispatcher.dispatchGlobalError(e);
        throw e;
      }
      let a = this.settings.getSettings();
      let s = {
        avatar_path: "",
        hosts: []
      };
      if ((a == null ? undefined : a.resource_url_tpl)?.fs_avatar_path) {
        s.avatar_path = a.resource_url_tpl?.fs_avatar_path;
      }
      if ((a == null ? undefined : a.resource_url_tpl)?.fs_domains) {
        s.hosts = (i = a == null ? undefined : a.resource_url_tpl) === null || i === undefined ? undefined : i.fs_domains[`${e}-cdn`];
      }
      return s;
    }
  }();
}