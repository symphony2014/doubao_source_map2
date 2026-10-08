// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cy' to 'useAutoWriteStatus'
// - Renamed export 'XL' to 'getAutoWriteTracker'
// - Renamed export 'ff' to 'isAutoWriteEnabled'
// - Renamed export 'Xl' to 'subscribeAutoWrite'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 27740
         */
module.exports = function (module, exports, require) {
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useEventListenerHook = require("use-event-listener-hook") /*id: 629504*/;
  var useLocalStorageHook = require("use-local-storage-hook") /*id: 296239*/;
  let s = "__custom_event_name_for_use_storage_synced__";
  let c = (e, i) => {
    let [n, r] = useLocalStorageHook.useLocalStorage_1(e, i);
    useEventListenerHook.useEventListener(s, i => {
      let n = i == null ? undefined : i.detail;
      if ((n == null ? undefined : n.key) === e) {
        r(n == null ? undefined : n.newValue);
      }
    }, {});
    return [n, i => {
      window.dispatchEvent(new CustomEvent(s, {
        detail: {
          key: e,
          newValue: i
        }
      }));
    }];
  };
  var docIframeEventConstants = require("doc-iframe-event-constants") /*id: 226725*/;
  let u = () => false;
  let h = () => false;
  let g = e => userInfoStatusSelectors.subscribeToUserInfoStatus(() => {
    e(h());
  }, {
    fireImmediately: true
  });
  let p = () => c(docIframeEventConstants.autoContinueWriteEnable, true);
  let f = e => {
    let {
      messageId: i,
      artifact: n
    } = e;
    let {
      artifact_id: o,
      artifact_key: l
    } = n || {};
    let a = {
      canvas_id: o,
      canvas_key: l
    };
    return {
      trackAutoContinueWriteGeneratedTextShow: e => {
        let {
          trigger_scene: n
        } = e;
        teaAnalyticsEventTracker.trackEvent("ai_generate_content_show", {
          canvas_type: "writing",
          ...a,
          message_id: i,
          trigger_scene: n
        });
      },
      trackAutoContinueWriteActionsShow: e => {
        let {
          trigger_scene: n
        } = e;
        teaAnalyticsEventTracker.trackEvent("ai_generate_button_show", {
          canvas_type: "writing",
          ...a,
          message_id: i,
          trigger_scene: n
        });
      },
      trackAutoContinueWriteActionClick: e => {
        let {
          trigger_scene: n,
          method: o,
          button_name: l
        } = e;
        teaAnalyticsEventTracker.trackEvent("ai_generate_button_click", {
          canvas_type: "writing",
          ...a,
          message_id: i,
          trigger_scene: n,
          method: o,
          button_name: l
        });
      }
    };
  };
  require.d(exports, {
    useAutoWriteStatus: function () {
      return f;
    },
    getAutoWriteTracker: function () {
      return g;
    },
    isAutoWriteEnabled: function () {
      return p;
    },
    subscribeAutoWrite: function () {
      return u;
    }
  });
}