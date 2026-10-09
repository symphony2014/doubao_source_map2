// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'messageActionTypes'
// - Resolved require(902861) to 'message-action-types'
// - Renamed variable 'c' to 'chatPluginMatcherRegistry'
// - Resolved require(107672) to 'chat-plugin-matcher-registry'
// - Renamed variable 'd' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Renamed variable 'l' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Updated imported property 't' to 'actionTypes' (module 902861)
// - Updated imported property 'Me' to 'loadMessageCmdMatcher' (module 107672)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property '$h' to 'msgCmdPluginBatchLoader' (module 232752)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20342.5094dbb3.js
         * chunkId: 20342
         * moduleId: 177380
         */
module.exports = function (module, exports, require) {
  function i(e, r, t) {
    var i;
    if ((r = typeof (i = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var t = e[Symbol.toPrimitive];
      if (t !== undefined) {
        var i = t.call(e, r || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = t;
    }
    return e;
  }
  class o {
    registerCommandProcessor(e) {
      this._processor = e;
    }
    registerCommandHandler(e) {
      this._handler = e;
    }
    dispatchCommandEvent(e) {
      var r;
      var t;
      var i;
      let o = (t = this._processor) === null || t === undefined ? undefined : (r = t.process) === null || r === undefined ? undefined : r.call(t, e);
      if (o) {
        if ((i = this._handler) !== null && i !== undefined) {
          i.handle(o);
        }
      }
    }
    constructor() {
      i(this, "_handler", undefined);
      i(this, "_processor", undefined);
    }
  }
  var messageActionTypes = require("message-action-types") /*id: 902861*/;
  let a = {
    process(e) {
      let {
        data: r
      } = e;
      if (r.event_type === messageActionTypes.actionTypes.Cmd) {
        return {
          cmd: r.cmd?.cmd_type,
          data: {
            version: "1.0",
            data: r.cmd
          }
        };
      }
      if (r.cmd) {
        return {
          cmd: r.cmd,
          data: {
            version: "2.0",
            data: r.downlink_body
          }
        };
      }
    }
  };
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let s = {
    handle: e => {
      if (e.cmd && e.data) {
        chatPluginMatcherRegistry.loadMessageCmdMatcher().then(r => {
          let t = r.filter(r => {
            var t;
            if ((t = r.matchPlugin) === null || t === undefined) {
              return undefined;
            } else {
              return t.call(r, e);
            }
          }).map(e => e.pluginIdentifier);
          loggerServiceCore.defaultLogger.console.info({
            message: `Received Cmd: ${e.cmd}`
          });
          if (!t.length) {
            loggerServiceCore.defaultLogger.console.info({
              message: `Skip Cmd: ${e.cmd}`
            });
            return;
          }
          chatPluginIocManager.msgCmdPluginBatchLoader(t).then(r => {
            r.forEach(r => {
              var t;
              if (r == null) {
                return undefined;
              } else if ((t = r.handleCmd) === null || t === undefined) {
                return undefined;
              } else {
                return t.call(r, e);
              }
            });
          });
        });
      }
    }
  };
  function v(e, r, t) {
    var i;
    if ((r = typeof (i = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var t = e[Symbol.toPrimitive];
      if (t !== undefined) {
        var i = t.call(e, r || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = t;
    }
    return e;
  }
  class m {
    dispatchCommandEvent(e) {
      this.coreService.dispatchCommandEvent(e);
    }
    constructor({
      externalService: e
    }) {
      var r;
      v(this, "coreService", undefined);
      v(this, "externalService", undefined);
      this.coreService = new o();
      this.coreService.registerCommandProcessor(a);
      this.coreService.registerCommandHandler(s);
      this.externalService = e;
      if ((r = e.socketClient) !== null && r !== undefined) {
        r.on("message", this.coreService.dispatchCommandEvent.bind(this.coreService));
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    DoubaoCommandService: function () {
      return m;
    }
  });
}