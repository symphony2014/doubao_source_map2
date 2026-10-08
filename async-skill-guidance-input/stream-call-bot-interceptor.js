// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'toEntriesUtil'
// - Resolved require(537539) to 'to-entries-util'
// - Renamed variable 'o' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'a' to 'sseClientFactory'
// - Resolved require(474279) to 'sse-client-factory'
// - Renamed variable 'l' to 'sseConstants'
// - Resolved require(259486) to 'sse-constants'
// - Renamed variable 'r' to 'chatCoreConstants'
// - Resolved require(746101) to 'chat-core-constants'
// - Renamed variable 's' to 'protocolMessageConstants'
// - Resolved require(444681) to 'protocol-message-constants'
// - Renamed variable 'd' to 'messageInfraUtils'
// - Resolved require(716917) to 'message-infra-utils'
// - Renamed variable 'c' to 'uiComponentTypeConstants'
// - Resolved require(169442) to 'ui-component-type-constants'
// - Renamed variable 'u' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'h' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'xy' to 'createSseClient' (module 474279)
// - Updated imported property 'G' to 'buildUrlWithQuery' (module 716917)
// - Updated imported property 'Z' to 'toEntries' (module 537539)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'Bo' to 'releaseType' (module 169442)
// - Updated imported property 'tw' to 'messageTypes' (module 444681)
// - Updated imported property 'jK' to 'ErrorCodes' (module 746101)
// - Updated imported property 'a' to 'eventStreamMimeType' (module 259486)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 256917
         */
module.exports = function (module, exports, require) {
  var toEntriesUtil = require("to-entries-util") /*id: 537539*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var sseClientFactory = require("sse-client-factory") /*id: 474279*/;
  var sseConstants = require("sse-constants") /*id: 259486*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var protocolMessageConstants = require("protocol-message-constants") /*id: 444681*/;
  var messageInfraUtils = require("message-infra-utils") /*id: 716917*/;
  var uiComponentTypeConstants = require("ui-component-type-constants") /*id: 169442*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  let p = [];
  function v(e) {
    if (!p.includes(e)) {
      p.push(e);
    }
  }
  function m(e) {
    let {
      event: t,
      onMessage: n,
      onError: v,
      onFinish: m,
      getCommonHttpParams: g,
      getCommonHttpHeaders: _
    } = e;
    let f = "";
    let b = eventReportingService.createEventReporter({
      eventName: "stream_call_bot"
    });
    let y = sseClientFactory.createSseClient(messageInfraUtils.buildUrlWithQuery("/samantha/chat/completion", g == null ? undefined : g()), {
      method: "POST",
      headers: [["content-type", "application/json"], ["Agw-Js-Conv", "str"], ...toEntriesUtil.toEntries((_ == null ? undefined : _()) || {})],
      body: safeJsonUtils.safeStringify(t),
      credentials: "same-origin",
      onError: k,
      onMessage: function (e) {
        let {
          data: l = ""
        } = e;
        if (isUndefinedCheck.isUndefined(b == null ? undefined : b.getDuration()?.received_first_packet)) {
          b.addDurationPoint("received_first_packet");
        }
        if ((t == null ? undefined : t.completion_option?.launch_stage) === uiComponentTypeConstants.releaseType.Diff) {
          return;
        }
        let {
          event_data: d = "",
          event_type: h
        } = safeJsonUtils.safeParse(l, {});
        switch (h) {
          case protocolMessageConstants.messageTypes.CMPL:
            n(safeJsonUtils.safeParse(d, {}), f);
            return;
          case protocolMessageConstants.messageTypes.FIN:
            m(true);
            b.addDurationPoint("success");
            b.success();
            return;
          case protocolMessageConstants.messageTypes.ERR:
            k(JSON.stringify({
              message: safeJsonUtils.safeParse(d, {}).message,
              code: chatCoreConstants.ErrorCodes.ServerError
            }));
            return;
          case protocolMessageConstants.messageTypes.CMD:
          default:
            return;
        }
      },
      openInterceptor: w
    });
    function k(e) {
      if ((t == null ? undefined : t.completion_option?.launch_stage) === uiComponentTypeConstants.releaseType.Diff) {
        return;
      }
      let i = {
        message: "",
        code: 0
      };
      if (e instanceof Error) {
        i = {
          message: e.message,
          code: chatCoreConstants.ErrorCodes.FetchFailed
        };
      } else if (typeof e == "string") {
        i = JSON.parse(e);
      }
      b.error({
        reason: i == null ? undefined : i.message,
        meta: {
          error: i,
          log_id: f
        }
      });
      if (!y.isAborted) {
        v(i, f);
      }
    }
    async function w(e) {
      let t = e.headers.get("content-type");
      if (p.length > 0) {
        try {
          await Promise.all(p.map(t => t(e)));
        } catch (e) {
          throw Error(`onOpen interceptor error: ${e}`);
        }
      }
      if (!(e == null ? undefined : e.ok) || !(e == null ? undefined : e.body)) {
        throw Error(JSON.stringify({
          message: `Invalid Response, ResponseStatus: ${e.statusText}`,
          code: chatCoreConstants.ErrorCodes.ResponseIsInvalid
        }));
      }
      if (!(t == null ? undefined : t.startsWith(sseConstants.eventStreamMimeType))) {
        let t = await e.json();
        throw Error(JSON.stringify({
          message: t.msg,
          code: t.code
        }));
      }
      f = e.headers.get("x-tt-logid") || "";
    }
  }
  require.r(exports);
  require.d(exports, {
    setFetchStreamInterceptorForStreamCallBot: function () {
      return v;
    },
    streamCallBotForChatCompletion: function () {
      return m;
    }
  });
}