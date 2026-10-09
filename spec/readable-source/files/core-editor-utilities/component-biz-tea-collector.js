// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'collectComponentBizEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 568420
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  class o {
    constructor(e, t = true) {
      this.tracker = null;
      this.pendingEvents = [];
      this.initialized = false;
      this.config = e;
      if (t) {
        this.initTeaSDK();
      }
    }
    static async getComponentBizTea() {
      let {
        getDomainConfig: t
      } = await require.e("domain-config") /*id: 62370*/.then(require.bind(require, "global-domain-config-util") /*id: 179334*/);
      let a = t("tea");
      let i = objectPathGetDefault.getObjectPathDefault(a, "config.appId.doc");
      let c = objectPathGetDefault.getObjectPathDefault(a, "config.channel_domain");
      let s = window?.User;
      if (i && c && (s == null ? undefined : s.suid) && (s == null ? undefined : s.tenantId)) {
        return new o({
          instanceName: "gpf-component-biz",
          appId: i,
          channelDomain: c,
          userId: s.suid,
          tenantId: s.tenantId
        });
      } else {
        return null;
      }
    }
    static async getCollector() {
      if (!o.Collector) {
        let e = await Promise.resolve().then(require.bind(require, "tea-analytics-collector-core") /*id: 103899*/);
        o.Collector = e.Collector;
      }
      return o.Collector;
    }
    async initTeaSDK() {
      if (this.initialized) {
        return;
      }
      this.initialized = true;
      let e = await o.getCollector();
      this.tracker = new e(this.config.instanceName);
      this.tracker.init({
        app_id: this.config.appId,
        channel_domain: this.config.channelDomain,
        log: false,
        disable_session: true,
        disable_sdk_monitor: true
      });
      let {
        encryptTea: t
      } = await require.e("tea-encryption") /*id: 17634*/.then(require.bind(require, "tea-encryption-reexport") /*id: 676718*/);
      let n = t(this.config.userId);
      let a = this.config.tenantId ? t(this.config.tenantId) : "";
      this.tracker.config({
        user_unique_id: n,
        disable_auto_pv: true,
        custom: {
          user_id: n,
          tenant_id: a
        },
        device_id: n,
        app_name: this.config.instanceName
      });
      this.tracker.start();
      if (this.pendingEvents.length > 0) {
        this.pendingEvents.forEach(([e, t]) => this.collectEvent(e, t));
        this.pendingEvents = [];
      }
    }
    collectEvent(e, t) {
      var r;
      if (!this.tracker) {
        this.pendingEvents.push([e, t || {}]);
        this.initTeaSDK();
        return;
      }
      if ((r = this.tracker) !== null && r !== undefined) {
        r.call(this, e, t);
      }
    }
  }
  o.Collector = null;
  let a = null;
  let i = (e, t) => {
    let n = window?.collectEvent;
    if (n && typeof n == "function") {
      return n(e, t);
    }
    if (a) {
      if (a != null) {
        a.collectEvent(e, t);
      }
    } else {
      o.getComponentBizTea().then(r => {
        if ((a = r) != null) {
          a.collectEvent(e, t);
        }
      });
    }
  };
  require.d(exports, {
    collectComponentBizEvent: function () {
      return i;
    }
  });
}