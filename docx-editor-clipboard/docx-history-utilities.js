// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'mk' to 'getHistoryVersion'
// - Renamed export 'Bi' to 'handleNetworkError'
// - Renamed export 'dd' to 'isLocalHistory'
// - Renamed export 'WN' to 'getMindmapToken'
// - Renamed export 'cI' to 'getHistoryDisplayName'
// - Renamed export 'CP' to 'restoreHistory'
// - Renamed export 'au' to 'formatHistoryDateTitle'
// - Renamed export 'dr' to 'getOfflineHistoryService'
// - Renamed export 'iz' to 'formatHistoryDateLabel'
// - Renamed export 'Mb' to 'getEditTimeMs'
// - Renamed export 'Xx' to 'hasMinorHistory'
// - Renamed export '$v' to 'isLocalOrBackup'
// - Renamed export '$4' to 'isFromSystemUpgrade'
// - Renamed export 'qR' to 'getSheetToken'
// - Renamed export 'QQ' to 'getHistorySnapshot'
// - Renamed export 'o_' to 'getHistoryResultStatus'
// - Renamed export 'Eb' to 'getHistoryChangeInfo'
// - Renamed export 'jA' to 'getHistoryShowFlag'
// - Renamed export 'Vq' to 'isBackupData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 525555
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var momentJsCoreLib = require("moment-js-core-lib") /*id: 132840*/;
  var l = momentJsCoreLib;
  var networkStateErrorHandler = require("network-state-error-handler") /*id: 309691*/;
  var docxHistoryFlags = require("docx-history-flags") /*id: 840802*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docEditorConstants = require("doc-editor-constants") /*id: 260128*/;
  var localHistoryTokenExport = require("local-history-token-export") /*id: 237053*/;
  let h = require("dependency-injection-container") /*id: 555385*/.providerName("offline-sync-history");
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docxHistoryConstants = require("docx-history-constants") /*id: 995012*/;
  var flowDocConstants = require("flow-doc-constants") /*id: 41369*/;
  var docxEventCollectorWrapper = require("docx-event-collector-wrapper") /*id: 954913*/;
  let y = {
    BEFORE_MONTH: t("history.date.before_month"),
    BEFORE_YEAR: t("history.date.before_year"),
    TITLE_DATE: t("space.date_format.same_year")
  };
  function b(e) {
    let r = (e -= docxHistoryConstants.timezoneOffsetMs) % docxHistoryConstants.oneDayInMs;
    return e - r + docxHistoryConstants.timezoneOffsetMs;
  }
  function v(e, r = new Date()) {
    let i = (b(r.getTime()) - b(e)) / docxHistoryConstants.oneDayInMs;
    let o = {
      0: t("history.date.sunday"),
      1: t("history.date.monday"),
      2: t("history.date.tuesday"),
      3: t("history.date.wednesday"),
      4: t("history.date.thursday"),
      5: t("history.date.friday"),
      6: t("history.date.saturday")
    };
    if (i === 0) {
      return t("history.date.today");
    }
    if (i === 1) {
      return t("history.date.yesterday");
    }
    if (i <= r.getDay()) {
      return o[r.getDay() - i];
    }
    {
      if (i - 7 <= r.getDay()) {
        return t("history.date.last_week");
      }
      let o = new Date(e);
      if (r.getFullYear() === o.getFullYear()) {
        if (r.getMonth() === o.getMonth()) {
          return t("history.date.this_month");
        } else {
          return l(e).format(y.BEFORE_MONTH);
        }
      } else {
        return l(e).format(y.BEFORE_YEAR);
      }
    }
  }
  function _(e) {
    return l(e).format(y.TITLE_DATE);
  }
  function k(e) {
    return C(e) || x(e);
  }
  function C(e) {
    return e.isLocal || false;
  }
  function x(e) {
    return e.isBackupData || false;
  }
  function I(e) {
    let r;
    let i = {};
    if (C(e)) {
      i.local = true;
      i.online = e.isOnline;
      return i;
    }
    if (x(e)) {
      i.offlineRecord = true;
      return i;
    }
    let n = e.page_info;
    if (e.type === docxHistoryConstants.HistorySourceType.CREATED) {
      i.created = true;
    }
    if (e.type === docxHistoryConstants.HistorySourceType.FROM_DOC_UPGRADE) {
      i.fromDocUpgrade = true;
    }
    if (e.type === docxHistoryConstants.HistorySourceType.FROM_DOC_UPGRADE_SYSTEM) {
      i.fromSystemDocUpgrade = true;
    }
    if (!n) {
      return i;
    }
    let {
      origin: l,
      now: s
    } = n.title_changes;
    if (s !== l) {
      i.rename = s || " ";
    }
    let {
      origin: a,
      now: c
    } = n.cover_changes || {};
    if (!deepEqualUtil_1.deepEqual(a, c)) {
      if (a) {
        if (!c || c.dlp_status) {
          i.cover = flowDocConstants.EditActions.remove;
        } else {
          i.cover = flowDocConstants.EditActions.modify;
        }
      } else {
        i.cover = flowDocConstants.EditActions.add;
      }
    }
    let {
      origin: u,
      now: h
    } = n.doc_info_changes || {};
    if (!deepEqualUtil_1.deepEqual(u, h)) {
      if (u == null ? undefined : u[docEditorConstants.docFieldKeys.options]?.length) {
        if (h == null ? undefined : h[docEditorConstants.docFieldKeys.options]?.length) {
          i.docInfo = flowDocConstants.ActionTypes.modify;
        } else {
          i.docInfo = flowDocConstants.ActionTypes.remove;
        }
      } else {
        i.docInfo = flowDocConstants.ActionTypes.add;
      }
    }
    if (e.minor_history && e.minor_history.length === 1) {
      r = e.minor_history[0].page_info.revert_info;
    } else if (e.page_info.revert_info) {
      r = e.page_info.revert_info;
    }
    if (r) {
      i.revertTime = _(r.time * 1000);
    }
    return i;
  }
  function E() {
    return networkStateErrorHandler.handleNetworkError(t("common.network_error"));
  }
  function S(e) {
    if (k(e)) {
      return {
        history_version: "none",
        history_sub_version: "none"
      };
    }
    let r = e.version;
    let i = e.minor_history;
    if (i && i[0]) {
      r = i[0].version;
    }
    return {
      history_version: e.parentVersion || e.version,
      history_sub_version: r
    };
  }
  function O(e) {
    if (!e) {
      return docxHistoryConstants.HistoryResultStatus.FAIL;
    }
    let {
      status: r,
      block_status: i
    } = e;
    let o = docxHistoryConstants.HistoryResultStatus.FAIL;
    if (r === docxHistoryConstants.HistoryStatusCodes.SUCCESSES) {
      o = docxHistoryConstants.HistoryResultStatus.SUCCESS;
    } else if (i && Object.keys(i).some(e => i[e].status === docxHistoryConstants.HistoryStatusCodes.SUCCESSES)) {
      o = docxHistoryConstants.HistoryResultStatus.PARTIAL_SUCCESS;
    }
    return o;
  }
  function w(e) {
    return e.name || _(e.edit_time * 1000);
  }
  function T(e, r) {
    let i = null;
    if (e === docBlockTypeConstants.blockTypeConstants.MINDMAP) {
      i = {
        mainToken: r,
        subToken: null
      };
    }
    return i;
  }
  function R(e, r) {
    if (e === docBlockTypeConstants.blockTypeConstants.SHEET) {
      return T(e, r).mainToken;
    } else {
      return r;
    }
  }
  function M(e) {
    return e.edit_time * 1000;
  }
  function L(e) {
    let r = e.minor_history;
    return !!r && !!r[0];
  }
  function N() {
    return docxHistoryFlags.getHistoryShow(reduxStoreInitializer.reduxStore.getState());
  }
  async function A(e, r, i, o) {
    docxEventCollectorWrapper.wrapEventCollector("history", {
      action: "restore_popup",
      source: "restore_btn"
    });
    docxEventCollectorWrapper.wrapEventCollector("ccm_docs_history_page_click", {
      click: "click_restore_entrance",
      target: "none",
      version_time: M(r),
      is_large_version: String(o)
    });
    if (!(await e(i))) {
      docxEventCollectorWrapper.wrapEventCollector("ccm_docs_history_page_click", {
        click: "click_cancel_restore",
        target: "none",
        version_time: M(r),
        is_large_version: String(o)
      });
      return false;
    }
    docxEventCollectorWrapper.wrapEventCollector("history", {
      action: "restore",
      source: "restore_confirm_btn"
    });
    let n = S(r);
    docxEventCollectorWrapper.wrapEventCollector("ccm_docs_history_page_click", {
      ...n,
      click: "click_restore",
      target: "none",
      version_time: M(r),
      is_large_version: String(o)
    });
    return true;
  }
  async function P(e, r) {
    let i = e.editorAPI.getService(localHistoryTokenExport.historyManagerToken, {
      optional: true
    });
    if (i) {
      return await i.getSnapshot(r.id, r.edit_time * 1000);
    }
  }
  function D(e) {
    if (e) {
      return e.editorAPI.getService(h, {
        optional: true
      });
    }
  }
  function j(e) {
    return e === docxHistoryConstants.HistorySourceType.FROM_DOC_UPGRADE_SYSTEM;
  }
  require.d(exports, {
    getHistoryVersion: function () {
      return S;
    },
    handleNetworkError: function () {
      return E;
    },
    isLocalHistory: function () {
      return C;
    },
    getMindmapToken: function () {
      return T;
    },
    getHistoryDisplayName: function () {
      return w;
    },
    restoreHistory: function () {
      return A;
    },
    formatHistoryDateTitle: function () {
      return _;
    },
    getOfflineHistoryService: function () {
      return D;
    },
    formatHistoryDateLabel: function () {
      return v;
    },
    getEditTimeMs: function () {
      return M;
    },
    hasMinorHistory: function () {
      return L;
    },
    isLocalOrBackup: function () {
      return k;
    },
    isFromSystemUpgrade: function () {
      return j;
    },
    getSheetToken: function () {
      return R;
    },
    getHistorySnapshot: function () {
      return P;
    },
    getHistoryResultStatus: function () {
      return O;
    },
    getHistoryChangeInfo: function () {
      return I;
    },
    getHistoryShowFlag: function () {
      return N;
    },
    isBackupData: function () {
      return x;
    }
  });
}