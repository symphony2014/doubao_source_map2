// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Resolved require.e(20063) to 'router-config-helper'
// - Resolved require.bind(460454) to 'domain-config-utils'
// - Resolved require.bind(103899) to 'tea-analytics-collector-core'
// - Resolved require.e(6529) to 'crypto-utilities'
// - Resolved require.bind(213541) to 'encrypt-tea-util'
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30519.3599d1ce.js
         * chunkId: 30519
         * moduleId: 61668
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  class l {
    constructor(t, n = true) {
      this.tracker = null;
      this.pendingEvents = [];
      this.initialized = false;
      this.config = t;
      if (n) {
        this.initTeaSDK();
      }
    }
    static async getComponentBizTea() {
      let {
        getDomainConfig: n
      } = await require.e("router-config-helper") /*id: 20063*/.then(require.bind(require, "domain-config-utils") /*id: 460454*/);
      let s = n("tea");
      let o = objectPathGetDefault.getObjectPathDefault(s, "config.appId.doc");
      let a = objectPathGetDefault.getObjectPathDefault(s, "config.channel_domain");
      let c = window?.User;
      if (o && a && (c == null ? undefined : c.suid) && (c == null ? undefined : c.tenantId)) {
        return new l({
          instanceName: "gpf-component-biz",
          appId: o,
          channelDomain: a,
          userId: c.suid,
          tenantId: c.tenantId
        });
      } else {
        return null;
      }
    }
    static async getCollector() {
      if (!l.Collector) {
        let t = await Promise.resolve().then(require.bind(require, "tea-analytics-collector-core") /*id: 103899*/);
        l.Collector = t.Collector;
      }
      return l.Collector;
    }
    async initTeaSDK() {
      if (this.initialized) {
        return;
      }
      this.initialized = true;
      let t = await l.getCollector();
      this.tracker = new t(this.config.instanceName);
      this.tracker.init({
        app_id: this.config.appId,
        channel_domain: this.config.channelDomain,
        log: false,
        disable_session: true,
        disable_sdk_monitor: true
      });
      let {
        encryptTea: n
      } = await require.e("crypto-utilities") /*id: 6529*/.then(require.bind(require, "encrypt-tea-util") /*id: 213541*/);
      let e = n(this.config.userId);
      let s = this.config.tenantId ? n(this.config.tenantId) : "";
      this.tracker.config({
        user_unique_id: e,
        disable_auto_pv: true,
        custom: {
          user_id: e,
          tenant_id: s
        },
        device_id: e,
        app_name: this.config.instanceName
      });
      this.tracker.start();
      if (this.pendingEvents.length > 0) {
        this.pendingEvents.forEach(([t, n]) => this.collectEvent(t, n));
        this.pendingEvents = [];
      }
    }
    collectEvent(t, n) {
      var i;
      if (!this.tracker) {
        this.pendingEvents.push([t, n || {}]);
        this.initTeaSDK();
        return;
      }
      if ((i = this.tracker) !== null && i !== undefined) {
        i.call(this, t, n);
      }
    }
  }
  l.Collector = null;
  let s = null;
  let o = (t, n) => {
    let e = window?.collectEvent;
    if (e && typeof e == "function") {
      return e(t, n);
    }
    if (s) {
      if (s != null) {
        s.collectEvent(t, n);
      }
    } else {
      l.getComponentBizTea().then(i => {
        if ((s = i) != null) {
          s.collectEvent(t, n);
        }
      });
    }
  };
  require.d(exports, {
    collectEvent: function () {
      return o;
    }
  });
}