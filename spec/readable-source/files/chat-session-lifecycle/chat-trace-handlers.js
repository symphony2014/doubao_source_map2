// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'chatMessageTrace'
// - Renamed export 'P' to 'chatSessionTrace'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55100.9330c1b8.js
         * chunkId: 55100
         * moduleId: 651544
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var suggestionExtractorUtils = require("suggestion-extractor-utils") /*id: 636335*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let o = e => {
    if (objectPathGetDefault.getObjectPathDefault(e, "ext.is_expose") === "1" && objectPathGetDefault.getObjectPathDefault(e, "ext.expose_scene") === "limit-agent_err") {
      return "server_agent_err_limit";
    } else if (e.error_details?.error_code !== undefined) {
      return String(e.error_details.error_code);
    } else if (e.final_status?.message === "Broken") {
      return "broken";
    } else if (e.final_status?.message === "Timeout") {
      return "timeout";
    } else if (e.final_status?.message === "Error") {
      return "unexpected_error";
    } else {
      return "";
    }
  };
  let r = e => {
    if (e.error_details?.error_code !== undefined) {
      return String(e.error_details.error_code);
    } else if (e.final_status?.message === "Broken") {
      return "broken";
    } else if (e.final_status?.message === "Error") {
      return "unexpected_error";
    } else {
      return "";
    }
  };
  let l = e => {
    if ((e == null ? undefined : e.error_details?.error_code) !== undefined) {
      return String(e.error_details.error_code);
    } else if ((e == null ? undefined : e.final_status?.session) === "Broken") {
      return "broken";
    } else if ((e == null ? undefined : e.final_status?.session) === "Timeout") {
      return "timeout";
    } else if ((e == null ? undefined : e.final_status?.session) === "Error") {
      return "unexpected_error";
    } else if ((e == null ? undefined : e.final_status?.session) === "ExpectError") {
      return "expect_error";
    } else if ((e == null ? undefined : e.final_status?.session) === "PanicError") {
      return "panic_error";
    } else {
      return "";
    }
  };
  let c = {
    beforeMessageSending(e) {
      let n = {
        is_nova: objectPathGetDefault.getObjectPathDefault(e, "local.isNova") ? "1" : "0",
        use_deep_think: e.ext?.use_deep_think,
        send_message: {}
      };
      if (e.local_message_id && n.send_message) {
        n.send_message[e.local_message_id] = {
          local_message_id: e.local_message_id
        };
      }
      return n;
    },
    onMessageSendingStart(e) {
      let s = {
        send_message: {}
      };
      if (e.local_message_id && s.send_message) {
        s.send_message[e.local_message_id] = {
          local_message_id: e.local_message_id,
          content_type: (e == null ? undefined : e.ext?.input_content_type) ?? undefined
        };
      }
      return s;
    },
    onMessageSendingEnd(e) {
      let s = {
        send_message: {}
      };
      if (e.local_message_id && s.send_message) {
        s.send_message[e.local_message_id] = {
          local_message_id: e.local_message_id,
          message_id: e.message_id,
          inner_log_id: e.ext?.inner_log_id ?? e.ext?.log_id,
          log_id: e.local_info?.log_id,
          success: e.final_status?.message === "Success" ? "1" : "0",
          err: o(e),
          content_type: String(e.content_type)
        };
      }
      return s;
    },
    onMessageReceivingUpdate(e) {
      let s = {
        receive_message: {}
      };
      if (e.message_id && s.receive_message) {
        s.receive_message[e.message_id] = {
          local_message_id: e.local_message_id ?? "",
          message_id: e.message_id,
          inner_log_id: e.ext?.inner_log_id ?? e.ext?.log_id,
          log_id: e.local_info?.log_id,
          content_type: String(e.content_type)
        };
      }
      return s;
    },
    onMessageReceivingEnd(e) {
      let c = {
        receive_message: {}
      };
      let g = objectPathGetDefault.getObjectPathDefault(e, "ext.is_expose") === "1" && objectPathGetDefault.getObjectPathDefault(e, "ext.expose_scene") === "limit-agent_err" || e.final_status?.message !== "Success";
      if (e.message_id && c.receive_message) {
        c.receive_message[e.message_id] = {
          local_message_id: e.local_message_id ?? "",
          message_id: e.message_id,
          inner_log_id: e.ext?.inner_log_id ?? e.ext?.log_id,
          log_id: e.local_info?.log_id,
          success: g ? "0" : "1",
          content_type: String(e.content_type),
          err: o(e)
        };
      }
      return c;
    },
    onSuggestReceivingStart: () => ({
      suggest_success: "0"
    }),
    onSuggestReceivingEnd(e) {
      let s = suggestionExtractorUtils.extractSuggestions(e);
      let n = Array.isArray(s) ? s == null ? undefined : s.length : 0;
      return {
        suggest_success: n > 0 ? "1" : "0",
        suggest_length: n,
        suggest_error: r(e)
      };
    }
  };
  let g = (e, s) => {
    if (!(e == null ? undefined : e.params?.common)) {
      loggerServiceCore.defaultLogger.persist.error({
        error: Error("chat-trace: common parmams is not set")
      });
      return {
        conversation_id: "",
        local_conversation_id: "",
        skill_id: "",
        conversation_type: ""
      };
    }
    let {
      params: l
    } = e;
    let {
      slardar: c
    } = l;
    let g = {
      ...e.params.temp,
      ...e.params.common,
      use_deep_think: c == null ? undefined : c.use_deep_think,
      is_nova: c == null ? undefined : c.is_nova,
      chat_session_scene: c == null ? undefined : c.chat_session_scene,
      chat_session_id: c == null ? undefined : c.chat_session_id,
      chat_scene: c == null ? undefined : c.chat_scene
    };
    let d = Object.keys((c == null ? undefined : c.send_message) ?? {})[0];
    if (!d) {
      return g;
    }
    let {
      message_id: u,
      success: v,
      err: _,
      local_message_id: f,
      log_id: S,
      inner_log_id: m,
      content_type: M
    } = (c == null ? undefined : c.send_message?.[d]) ?? {};
    g.send_message_id = u ?? "";
    g.send_local_message_id = f ?? "";
    g.send_success = v ?? undefined;
    g.send_err = _ ?? undefined;
    g.send_log_id = S;
    g.send_inner_log_id = m;
    g.send_content_type = M;
    g.lifecycle_state = `session: ${e.state.session}, message:${e.state.message}`;
    if (s == null ? undefined : s.ext?.llm_intention_detail) {
      g.receive_llm_intention_detail = s.ext.llm_intention_detail;
    }
    return g;
  };
  let d = (e, s) => {
    var i;
    let f = {
      ...(e == null ? undefined : e.params.temp),
      ...g(e)
    };
    if (!e) {
      loggerServiceCore.defaultLogger.persist.error({
        error: Error("chat-trace: chatEventContext is undefined")
      });
      return f;
    }
    let {
      params: S,
      records: m
    } = e;
    let M = m.onMessageReceivingUpdate[(s == null ? undefined : s.message_id) || ""];
    let h = ((M == null ? undefined : M.timestamp_list) ?? []).map((e, s) => s === 0 ? 0 : e - M.timestamp_list[s - 1]).slice(1);
    let y = (i = S.slardar) === null || i === undefined ? undefined : i.receive_message?.[(s == null ? undefined : s.message_id) || ""];
    f.receive_message_id = (y == null ? undefined : y.message_id) ?? "";
    f.receive_local_message_id = (y == null ? undefined : y.local_message_id) ?? "";
    f.receive_success = (y == null ? undefined : y.success) ?? "0";
    let p = (y == null ? undefined : y.err) || (s ? o(s) : "");
    f.receive_err = p;
    f.receive_log_id = y == null ? undefined : y.log_id;
    f.receive_inner_log_id = y == null ? undefined : y.inner_log_id;
    f.receive_content_type = (y == null ? undefined : y.content_type) ?? undefined;
    f.lifecycle_state = `session: ${e.state.session}, message:${e.state.message}`;
    f.receive_stuck_1000_duration = h.filter(e => e > 1000 && e <= 3000).reduce((e, s) => e + s, 0);
    f.receive_stuck_3000_duration = h.filter(e => e > 3000).reduce((e, s) => e + s, 0);
    f.receive_full_duration = h.reduce((e, s) => e + s, 0);
    if (f.receive_full_duration) {
      f.receive_stuck_3000_percentage = f.receive_stuck_3000_duration / f.receive_full_duration;
      f.receive_stuck_1000_percentage = f.receive_stuck_1000_duration / f.receive_full_duration;
    }
    if (M == null ? undefined : M.think_reason_timestamp_list?.length) {
      let e = ((M == null ? undefined : M.think_reason_timestamp_list) ?? []).map((e, s) => s === 0 ? 0 : e - M.think_reason_timestamp_list[s - 1]).slice(1);
      f.receive_think_reason_full_duration = e.reduce((e, s) => e + s, 0);
    }
    if (s == null ? undefined : s.ext?.llm_intention_detail) {
      f.receive_llm_intention_detail = s.ext.llm_intention_detail;
    }
    return f;
  };
  let u = (e, s) => {
    let t = {
      ...(e == null ? undefined : e.params.temp),
      ...g(e, s),
      ...d(e, s)
    };
    if (!e) {
      loggerServiceCore.defaultLogger.persist.error({
        error: Error("chat-trace: chatEventContext is undefined")
      });
      return t;
    }
    let {
      params: o
    } = e;
    let r = Object.values(o.slardar?.receive_message ?? {});
    t.session_success = r.length > 0 && r.every(e => e.success === "1") ? "1" : "0";
    t.lifecycle_state = `session: ${e.state.session}, message:${e.state.message}`;
    return t;
  };
  let v = (e, s) => {
    let o = {
      ...(e == null ? undefined : e.params.temp),
      ...u(e, s)
    };
    if (!e) {
      loggerServiceCore.defaultLogger.persist.error({
        error: Error("chat-trace: chatEventContext is undefined")
      });
      return o;
    }
    let {
      params: r
    } = e;
    o.suggest_success = r.slardar?.suggest_success;
    o.suggest_length = r.slardar?.suggest_length;
    o.suggest_error = r.slardar?.suggest_error;
    o.lifecycle_state = `session: ${e.state.session}, message:${e.state.message}`;
    return o;
  };
  let _ = {
    beforeMessageSending: g,
    onMessageSendingStart: g,
    onMessageSendingEnd: g,
    onLoadingMessageUpdate: g,
    onBatchMessageReceivingStart: g,
    onMessageReceivingStart: g,
    onMessageReceivingUpdate: (e, s) => {
      var i;
      let o = {
        ...(e == null ? undefined : e.params.temp),
        ...g(e)
      };
      if (!e) {
        loggerServiceCore.defaultLogger.persist.error({
          error: Error("chat-trace: chatEventContext is undefined")
        });
        return o;
      }
      let {
        params: r
      } = e;
      let l = (i = r.slardar) === null || i === undefined ? undefined : i.receive_message?.[(s == null ? undefined : s.message_id) || ""];
      if (l) {
        o.receive_message_id = l.message_id;
        o.receive_local_message_id = l.local_message_id;
        o.receive_log_id = l.log_id;
        o.receive_inner_log_id = l.inner_log_id;
        o.receive_content_type = l.content_type ?? undefined;
      }
      let {
        records: c
      } = e;
      o.event_count_err = ["beforeMessageSending", "onMessageSendingStart", "onMessageSendingEnd", "onBatchMessageReceivingStart", "onMessageReceivingStart"].map(e => {
        let s = c[e];
        if (e === "onMessageReceivingStart") {
          if (s.count > 0) {
            return "";
          } else {
            return e;
          }
        } else if (s.count === 1) {
          return "";
        } else {
          return e;
        }
      }).filter(e => e !== "").join(",");
      o.lifecycle_state = `session: ${e.state.session}, message:${e.state.message}`;
      return o;
    },
    onMessageReceivingEnd: d,
    onBatchMessageReceivingEnd: u,
    onSuggestReceivingStart: g,
    onSuggestReceivingEnd: v,
    onMessageSessionEnd: (e, s) => {
      let n = {
        ...(e == null ? undefined : e.params.temp),
        ...v(e, s)
      };
      if (!e) {
        loggerServiceCore.defaultLogger.persist.error({
          error: Error("chat-trace: chatEventContext is undefined")
        });
        return n;
      }
      let {
        records: i
      } = e;
      n.session_err = l(s);
      let t = n.session_err === "expect_error" || n.session_err === "broken" ? [] : n.send_success !== "1" ? ["beforeMessageSending", "onMessageSendingStart", "onMessageSendingEnd", "onMessageSessionEnd"] : ["beforeMessageSending", "onMessageSendingStart", "onMessageSendingEnd", "onBatchMessageReceivingStart", "onMessageReceivingStart", "onMessageReceivingEnd", "onBatchMessageReceivingEnd", "onMessageSessionEnd"];
      n.event_count_err = t.map(e => {
        let s = i[e];
        if (e === "onMessageReceivingStart" || e === "onMessageReceivingEnd") {
          if (s.count > 0) {
            return "";
          } else {
            return e;
          }
        } else if (s.count === 1) {
          return "";
        } else {
          return e;
        }
      }).filter(e => e !== "").join(",");
      n.lifecycle_state = `session: ${e.state.session}, message:${e.state.message}`;
      return n;
    }
  };
  require.d(exports, {
    chatMessageTrace: function () {
      return c;
    },
    chatSessionTrace: function () {
      return _;
    }
  });
}