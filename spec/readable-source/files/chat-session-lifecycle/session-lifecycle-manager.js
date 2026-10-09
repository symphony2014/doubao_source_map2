// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'sessionManager'
// - Renamed export 'd' to 'SessionManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55100.9330c1b8.js
         * chunkId: 55100
         * moduleId: 49481
         */
module.exports = function (module, exports, require) {
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var concurrencyQueueManager = require("concurrency-queue-manager") /*id: 631781*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var messageSessionEnums = require("message-session-enums") /*id: 497192*/;
  let r = {
    [messageSessionEnums.MessageSessionStage.Init]: {
      [messageSessionEnums.MessageSessionEvent.StartMessageSession]: messageSessionEnums.MessageSessionStage.MessageSessionStart
    },
    [messageSessionEnums.MessageSessionStage.MessageSessionStart]: {
      [messageSessionEnums.MessageSessionEvent.StartMessageSending]: messageSessionEnums.MessageSessionStage.MessageSendingStage,
      [messageSessionEnums.MessageSessionEvent.BreakMessageSending]: messageSessionEnums.MessageSessionStage.MessageSessionEnd
    },
    [messageSessionEnums.MessageSessionStage.MessageSendingStage]: {
      [messageSessionEnums.MessageSessionEvent.BreakMessageSending]: messageSessionEnums.MessageSessionStage.MessageSessionEnd,
      [messageSessionEnums.MessageSessionEvent.StartSyncMessageReceiving]: messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage,
      [messageSessionEnums.MessageSessionEvent.ErrorMessageSending]: messageSessionEnums.MessageSessionStage.MessageSessionEnd,
      [messageSessionEnums.MessageSessionEvent.TimeoutMessageSending]: messageSessionEnums.MessageSessionStage.MessageSessionEnd
    },
    [messageSessionEnums.MessageSessionStage.SyncMessageReceivingStage]: {
      [messageSessionEnums.MessageSessionEvent.StartSuggestionReceiving]: messageSessionEnums.MessageSessionStage.SuggestionReceivingStage,
      [messageSessionEnums.MessageSessionEvent.BreakSyncMessageReceiving]: messageSessionEnums.MessageSessionStage.MessageSessionEnd,
      [messageSessionEnums.MessageSessionEvent.EndMessageSession]: messageSessionEnums.MessageSessionStage.MessageSessionEnd,
      [messageSessionEnums.MessageSessionEvent.ErrorSyncMessageReceiving]: messageSessionEnums.MessageSessionStage.MessageSessionEnd,
      [messageSessionEnums.MessageSessionEvent.TimeoutSyncMessageReceiving]: messageSessionEnums.MessageSessionStage.MessageSessionEnd
    },
    [messageSessionEnums.MessageSessionStage.SuggestionReceivingStage]: {
      [messageSessionEnums.MessageSessionEvent.EndMessageSession]: messageSessionEnums.MessageSessionStage.MessageSessionEnd
    },
    [messageSessionEnums.MessageSessionStage.MessageSessionEnd]: {}
  };
  let l = {
    [messageSessionEnums.MessageStatus.Init]: {
      [messageSessionEnums.MessageStage.StartMessage]: messageSessionEnums.MessageStatus.MessageStart
    },
    [messageSessionEnums.MessageStatus.MessageStart]: {
      [messageSessionEnums.MessageStage.EndMessage]: messageSessionEnums.MessageStatus.MessageStart
    },
    [messageSessionEnums.MessageStatus.MessageEnd]: {}
  };
  class c {
    setState(e) {
      this.state = e;
    }
    getState() {
      return this.state;
    }
    resetState() {
      this.state = this.initState;
    }
    nextState(e) {
      let s = this.actionMap[this.state][e];
      if (s !== undefined) {
        this.state = s;
      }
    }
    constructor(e, s) {
      var n;
      var i;
      var t;
      this.initState = e;
      this.actionMap = s;
      i = undefined;
      if ((n = typeof (t = function (e, s) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, s || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (s === "string" ? String : Number)(e);
      }(n = "state", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, n, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = i;
      }
      this.state = e;
    }
  }
  class g extends c {
    constructor(e = messageSessionEnums.MessageSessionStage.Init, s = r) {
      super(e, s);
      this.initState = e;
      this.actionMap = s;
    }
  }
  class d extends c {
    constructor(e = messageSessionEnums.MessageStatus.Init, s = l) {
      super(e, s);
      this.initState = e;
      this.actionMap = s;
    }
  }
  function u(e, s, n) {
    var i;
    if ((s = typeof (i = function (e, s) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, s || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (s === "string" ? String : Number)(e);
    }(s, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, s, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[s] = n;
    }
    return e;
  }
  function v() {
    return {
      context: {},
      sessionMachine: new g(),
      timers: {},
      queue: new concurrencyQueueManager.ConcurrencyQueue({
        concurrency: 1
      }),
      singleReceivingMessageMachine: {}
    };
  }
  class _ {
    _initSessionStoreIfNeed(e, s) {
      if (this.store[e]) {
        this.store[e][s] ||= v();
      } else {
        this.store[e] = {
          [s]: v()
        };
      }
      return this.store[e][s];
    }
    _initSessionStoreForce(e, s) {
      if (this.store[e]) {
        this._clearEffect(this.store[e][s]);
        this.store[e][s] = v();
      } else {
        this.store[e] = {
          [s]: v()
        };
      }
      return this.store[e][s];
    }
    _clearEffect(e) {
      var s;
      let n = e == null ? undefined : e.timers;
      if ((s = objectValuesHelper.getObjectValues(n)) !== null && s !== undefined) {
        s.forEach(e => {
          clearTimeout(e);
        });
      }
      let i = e == null ? undefined : e.queue;
      if (i != null) {
        i.clear();
      }
    }
    _getSessionLifeCycleContext(e, s) {
      this._initSessionStoreIfNeed(e, s);
      return {
        ctx: this.store[e][s].context
      };
    }
    _getSessionLifeCycleIdleNextActionTimer(e, s) {
      this._initSessionStoreIfNeed(e, s);
      return {
        timers: this.store[e][s].timers
      };
    }
    _createSessionIdWithSentMessageIdIfNeed(e, s) {
      this.sessionIdMap[e] ||= {};
      if (!this.sessionIdMap[e][s]) {
        let n = uuidV1Generator.generateUuid();
        this.sessionIdMap[e][s] = n;
      }
      return this.sessionIdMap[e][s];
    }
    getSessionIdBySentMessageId(e, s) {
      return this._createSessionIdWithSentMessageIdIfNeed(e, s);
    }
    copySessionIdWithSentMessageId(e, s, n) {
      this.sessionIdMap[e] ||= {};
      this.sessionIdMap[e][n] = this.sessionIdMap[e][s];
      return this.sessionIdMap[e][n];
    }
    createLifeCycleSessionStore(e, s) {
      return this._initSessionStoreForce(e, s);
    }
    getSessionLifeCycleContext(e, s, n) {
      let {
        ctx: i
      } = this._getSessionLifeCycleContext(e, s);
      return {
        current_session_state: this._getSessionLifeCycleMachine(e, s).getState(),
        current_single_receiving_message_state: this._getSingleRecevingMessageLifeCycleMachine(e, s, n || "").getState(),
        get: e => i == null ? undefined : i[e],
        set: (e, s) => {
          i[e] = s;
          return i[e];
        }
      };
    }
    _getAllSingleRecevingMessageLifeCycleMachine(e, s) {
      this._initSessionStoreIfNeed(e, s);
      return {
        state: this.store[e][s].singleReceivingMessageMachine,
        resetState: () => {
          this.store[e][s].singleReceivingMessageMachine = {};
        }
      };
    }
    _getSessionLifeCycleMachine(e, s) {
      this._initSessionStoreIfNeed(e, s);
      return this.store[e][s].sessionMachine;
    }
    _getSingleRecevingMessageLifeCycleMachine(e, s, n) {
      this._initSessionStoreIfNeed(e, s);
      if (!this.store[e][s].singleReceivingMessageMachine?.[n]) {
        this.store[e][s].singleReceivingMessageMachine[n] = new d();
      }
      return this.store[e][s].singleReceivingMessageMachine[n];
    }
    nextSessionLifeCycleMachineState(e, s, n) {
      let i = this._getSessionLifeCycleMachine(e, s);
      if (n !== undefined) {
        i.nextState(n);
      }
    }
    nextSingleReceivingMessageLifeCycleMachineState(e, s, n, i) {
      let t = this._getSingleRecevingMessageLifeCycleMachine(e, s, n);
      if (i !== undefined) {
        t.nextState(i);
      }
    }
    getSessionLifeCycleMachineState(e, s) {
      return this._getSessionLifeCycleMachine(e, s).getState();
    }
    forceUpdateSessionLifeCycleMachine(e, s, n) {
      return this._getSessionLifeCycleMachine(e, s).setState(n);
    }
    getSingleRecevingMessageLifeCycleMachineState(e, s, n) {
      return this._getSingleRecevingMessageLifeCycleMachine(e, s, n).getState();
    }
    pushQueue(e, s, n) {
      this._initSessionStoreIfNeed(e, s);
      this.store[e][s].queue.add(n);
    }
    idleExecuteSessionLifeCycleNextAction(e, s, n, i) {
      let t = this.getSessionLifeCycleMachineState(e, s);
      this.clearSessionLifeCycleIdleNextAction(e, s, t);
      this.store[e][s].timers[t] = setTimeout(n, i);
    }
    clearSessionLifeCycleIdleNextAction(e, s, n) {
      let {
        timers: i
      } = this._getSessionLifeCycleIdleNextActionTimer(e, s);
      if (i[n]) {
        clearTimeout(i[n]);
        i[n] = undefined;
      }
    }
    moveAllSessionLifeCycle(e, s) {
      this.store[s] = this.store[e];
      this.sessionIdMap[s] = this.sessionIdMap[e];
    }
    constructor() {
      u(this, "store", {});
      u(this, "sessionIdMap", {});
    }
  }
  let f = new _();
  require.d(exports, {
    sessionManager: function () {
      return f;
    },
    SessionManager: function () {
      return _;
    }
  });
}