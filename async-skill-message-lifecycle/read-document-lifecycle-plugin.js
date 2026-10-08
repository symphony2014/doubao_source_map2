// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'r' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'a' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'o' to 'chatReadDocumentSymbol_1'
// - Resolved require(374916) to 'chat-read-document-symbol_1'
// - Resolved require(358907) to 'event-emitter-class'
// - Updated imported property 'M' to 'EventEmitter' (module 358907)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property '_' to 'readDocumentSymbol' (module 374916)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 556266
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatReadDocumentSymbol_1 = require("chat-read-document-symbol_1") /*id: 374916*/;
  let l = new (require("event-emitter-class") /*id: 358907*/.EventEmitter)();
  class s {
    onMessageReceivingUpdate(e, t) {
      let {
        meta_infos: n,
        is_finish: o
      } = t;
      if (o && !isEmptyUtil.isEmpty(n)) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "flow_pdf_page_anchor_counter",
          meta: {
            anchor_nums: (n == null ? undefined : n.filter(e => e.type === chatMessageTypes.MetaType.DocumentRef).length) || 0,
            message_id: t.message_id,
            inner_log_id: t.ext?.inner_log_id
          }
        });
      }
      return t;
    }
    async processMessageBefore(e, t) {
      for (let n of l.get("processMessageBefore")) {
        t = await n(e, t);
      }
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatReadDocumentSymbol_1.readDocumentSymbol;
      if ((e = typeof (n = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    ReadDocumentMessageLifeCyclePlugin: function () {
      return s;
    }
  });
}