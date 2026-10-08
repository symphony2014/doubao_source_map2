// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E4' to 'tempTransactionEnabled'
// - Renamed export 'Gs' to 'networkAlertEnabled'
// - Renamed export 'SW' to 'syncDegradeEnabled'
// - Renamed export 'av' to 'vcSyncDegradeEnabled'
// - Renamed export 'bR' to 'combineNewChanges'
// - Renamed export 'db' to 'docxDegradeEnabled'
// - Renamed export 'eD' to 'localVersionCompare'
// - Renamed export 'jY' to 'getFlowbaseConfig'
// - Renamed export 'jy' to 'fixCollectMissings'
// - Renamed export 'wf' to 'syncConfig'
// - Renamed export 'zT' to 'mobilePreUpdateConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 934075
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  let l = {
    last_cs_ack_timeout: 600000,
    send_cs_max_timeout: 60000,
    send_cs_min_timeout: 10000,
    send_cs_retry_count: 3,
    submit_cs_retry_max_count: 5,
    throttle_flush_time: 500,
    send_cs_sleep_duration: 2000,
    error_times_to_offline: 1
  };
  let s = {
    send_cursor_debounce: 200,
    update_cursor_short_throttle: 500,
    update_cursor_long_throttle: 1000,
    member_buffer_active_consume_interval: 1000,
    engine_buffer_active_consume_interval: 200
  };
  function a() {
    let e = boolDefaultGetterUtil.getDefaultBool("ccm_doc_flowbase_config", l);
    let r = [];
    Object.keys(l).forEach(i => {
      if (isUndefinedCheck.isUndefined(e[i])) {
        r.push(i);
      }
    });
    if (r.length) {
      return {
        ...l,
        ...e
      };
    } else {
      return e;
    }
  }
  let c = {
    ...s,
    ...boolDefaultGetterUtil.getDefaultBool("ccm_doc_sync_config", s)
  };
  let d = boolDefaultGetterUtil.getDefaultBool("mobile_docx_pre_update_clientvar", {
    versionOverLimit: 3000
  });
  let u = boolDefaultGetterUtil.getDefaultBool("ccm.vc.sync_degrade_enable", false);
  let h = boolDefaultGetterUtil.getDefaultBool("ccm.docx.degrade_enable", false);
  let f = true;
  let g = boolDefaultGetterUtil.getDefaultBool("ccm.docx.temp_transaction_enable", true);
  let m = boolDefaultGetterUtil.getDefaultBool("ccm.docx.network_alert", true);
  let p = boolDefaultGetterUtil.getDefaultBool("ccm.docx.local_version_compare", false);
  let y = boolDefaultGetterUtil.getDefaultBool("ccm.combine.new.changes.enabled", false);
  let b = boolDefaultGetterUtil.getDefaultBool("ccm.docx.fix_collect_missings", false);
  require.d(exports, {
    tempTransactionEnabled: function () {
      return g;
    },
    networkAlertEnabled: function () {
      return m;
    },
    syncDegradeEnabled: function () {
      return f;
    },
    vcSyncDegradeEnabled: function () {
      return u;
    },
    combineNewChanges: function () {
      return y;
    },
    docxDegradeEnabled: function () {
      return h;
    },
    localVersionCompare: function () {
      return p;
    },
    getFlowbaseConfig: function () {
      return a;
    },
    fixCollectMissings: function () {
      return b;
    },
    syncConfig: function () {
      return c;
    },
    mobilePreUpdateConfig: function () {
      return d;
    }
  });
}