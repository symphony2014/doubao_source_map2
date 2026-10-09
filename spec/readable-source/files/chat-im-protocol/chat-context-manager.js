// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'ChatContextManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 843425
         */
module.exports = function (module, exports, require) {
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  function r(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  class a {
    initTempContextParams() {
      this.params.temp ||= {
        chat_next: "0"
      };
    }
    setCommonContextParams(e) {
      this.params.common = e;
    }
    updateCommonContextParamsIfExist(e) {
      this.params.common &&= {
        ...this.params.common,
        ...objectExcludeFilterUtil.filterObjectExclude(e, isNullishCheck.isNil)
      };
    }
    mergeMessageParamsRecord(e, t) {
      let n = {
        ...(this.params.slardar?.[e] ?? {})
      };
      if (!t) {
        return n;
      }
      for (let e of Object.keys(t)) {
        if (n[e] === undefined) {
          n[e] = t[e];
        } else {
          n[e] = {
            ...n[e],
            ...t[e]
          };
        }
      }
      return n;
    }
    setSlardarContextParams(e) {
      let {
        send_message: a,
        receive_message: o,
        is_nova: l,
        suggest_success: c,
        use_deep_think: u,
        suggest_length: d,
        suggest_error: v
      } = e;
      this.params.slardar = {
        ...this.params.slardar,
        send_message: this.mergeMessageParamsRecord("send_message", a),
        receive_message: this.mergeMessageParamsRecord("receive_message", o),
        is_nova: l ?? this.params.slardar?.is_nova,
        use_deep_think: u ?? this.params.slardar?.use_deep_think,
        suggest_success: c ?? this.params.slardar?.suggest_success,
        suggest_length: d ?? this.params.slardar?.suggest_length,
        suggest_error: v ?? this.params.slardar?.suggest_error
      };
    }
    constructor({
      params: e = {}
    } = {}) {
      r(this, "params", undefined);
      r(this, "state", {
        session: "",
        message: ""
      });
      r(this, "records", undefined);
      this.params = e;
      this.initTempContextParams();
      this.records = {
        beforeMessageSending: {
          count: 0
        },
        onMessageSendingStart: {
          count: 0
        },
        onMessageSendingEnd: {
          count: 0
        },
        onBatchMessageReceivingStart: {
          count: 0
        },
        onMessageReceivingStart: {
          count: 0
        },
        onMessageReceivingUpdate: {},
        onMessageReceivingEnd: {
          count: 0
        },
        onBatchMessageReceivingEnd: {
          count: 0
        },
        onSuggestReceivingStart: {
          count: 0
        },
        onSuggestReceivingUpdate: {
          count: 0
        },
        onSuggestReceivingEnd: {
          count: 0
        },
        onMessageSessionEnd: {
          count: 0
        }
      };
    }
  }
  require.d(exports, {
    ChatContextManager: function () {
      return a;
    }
  });
}