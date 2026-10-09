// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VK' to 'handleDocxError'
// - Renamed export 'Vn' to 'getRefreshCountInRooms'
// - Renamed export 'jH' to 'setRefreshCountInRooms'
// - Renamed export 'rJ' to 'setupOopsGlobal'
// - Renamed export 'sw' to 'initializeOopsCollector'
// - Renamed export 'zm' to 'sendOopsEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 271803
         */
module.exports = function (module, exports, require) {
  require("docx-editor-constants-config") /*id: 302915*/;
  var docxErrorStatusHandler = require("docx-error-status-handler") /*id: 570520*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  require("docx-event-helper") /*id: 997602*/;
  var eventCollectorClass = require("event-collector-class") /*id: 425897*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docEventConstants = require("doc-event-constants") /*id: 816011*/;
  var docxErrorHandler = require("docx-error-handler") /*id: 135685*/;
  let f = null;
  function g(e) {
    f = new eventCollectorClass.EventCollector({
      eventName: docEventConstants.docOopsClickEvent,
      sendEventType: eventCollectorClass.eventTypeEnum.Click,
      blockView: {
        record_id: docTokenHelperUtils.resolveDocToken(),
        block_type: docBlockTypeConstants.blockTypeConstants.PAGE,
        sub_block_type: ""
      },
      extraParams: {
        oopsType: e,
        target: "none",
        click: docEventConstants.clickPopupEvent
      },
      isOnce: false
    });
  }
  function p(e, i) {
    if (f) {
      f.setExtraData({
        action_type: e
      });
      if (i) {
        f.setExtraData({
          actionValue: i
        });
      } else {
        f.deleteExtraData("actionValue");
      }
      f.send();
    }
  }
  function m() {
    let e = window.sessionStorage.getItem("docx_refreshed_times_in_rooms");
    if (!e) {
      return 0;
    }
    let i = Number(e);
    if (Number.isNaN(i)) {
      i = 0;
    }
    return i;
  }
  function v(e) {
    window.sessionStorage.setItem("docx_refreshed_times_in_rooms", String(e));
  }
  function b(e) {
    let {
      type: i,
      event: r,
      editable: o = false
    } = e;
    let {
      code: l = "",
      msg: c = "",
      type: u = "",
      requestId: f = "",
      ttLogId: g = ""
    } = r;
    let p = function (e) {
      let {
        code: i,
        msg: r,
        type: o,
        url: l,
        queryParams: s,
        requestId: a,
        ttLogId: c
      } = e;
      let {
        scm: d,
        scmDocx: u
      } = docxErrorStatusHandler.getScmDebugInfo();
      return {
        msg: r,
        type: o,
        code: i,
        scm: d,
        scmDocx: u,
        url: l,
        queryParams: s,
        requestId: a,
        ttLogId: c,
        isDev: docxErrorStatusHandler.isDebugModeEnabled()
      };
    }(r);
    (function (e) {
      let {
        error: i
      } = e;
      docxErrorDebugUtils.handleErrorDetail(i);
      docxUtilityHelpers.captureException(i);
      docxErrorHandler.handleDocxError(e);
      docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.SHOW_OOPS, e);
    })({
      error: Error(`[${i} error] errorMsg: ${c}; requestId: ${f}; ttLogId: ${g} code: ${l}; type: ${u};`),
      editable: o,
      ...p
    });
  }
  function y() {
    window._oops_ = {
      test: function () {
        let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        if (window.User) {
          window.User.isDebugMode = true;
        }
        b({
          type: "test",
          editable: e,
          event: {
            type: "test-oops"
          }
        });
      },
      testDialog: function (e = 2) {
        let i = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        docxErrorHandler.handleDocxError({
          isDev: true,
          error: Error("mock oops dialog"),
          code: e,
          editable: i,
          ...r
        });
      },
      get isDebugMode() {
        return docxErrorStatusHandler.isDebugModeEnabled();
      },
      enableDebugMode: () => {
        if (window.User) {
          window.User.isDebugMode = true;
        }
      }
    };
  }
  require.d(exports, {
    handleDocxError: function () {
      return b;
    },
    getRefreshCountInRooms: function () {
      return m;
    },
    setRefreshCountInRooms: function () {
      return v;
    },
    setupOopsGlobal: function () {
      return y;
    },
    initializeOopsCollector: function () {
      return g;
    },
    sendOopsEvent: function () {
      return p;
    }
  });
}