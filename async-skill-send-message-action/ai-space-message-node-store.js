// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'messageNodeInfoStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-action.e6a2cf79.js
         * chunkId: 29547
         * moduleId: 939801
         */
module.exports = function (module, exports, require) {
  let i;
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  function u(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
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
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class c {
    add(e) {
      if (!this.queue.includes(e)) {
        this.queue.push(e);
      }
      if (this.queue.length >= this.QUEUE_MAX_LENGTH) {
        this.run();
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
          this.timeoutId = null;
        }
      } else {
        this.timeoutId ||= setTimeout(() => this.run(), this.TIMEOUT);
      }
    }
    async get(e) {
      await this.hangPromise;
      if (this.promise) {
        let {
          data: n
        } = await this.promise;
        return ((n == null ? undefined : n.message_node_data_list_str) || (n == null ? undefined : n.message_node_data_list))?.[e];
      }
    }
    run() {
      var e;
      this.sended = true;
      this.promise = apiServicesCollection.SamanthaApiService.AISpaceGetMessageNodeInfo({
        message_ids: this.queue.map(e => Number(e)),
        message_ids_str: this.queue.map(e => String(e))
      });
      if ((e = this.hangResolver) !== null && e !== undefined) {
        e.call(this);
      }
    }
    constructor() {
      u(this, "TIMEOUT", 300);
      u(this, "QUEUE_MAX_LENGTH", 5);
      u(this, "queue", []);
      u(this, "timeoutId", null);
      u(this, "promise", null);
      u(this, "hangResolver", null);
      u(this, "hangPromise", new Promise(e => this.hangResolver = e));
      u(this, "sended", false);
    }
  }
  i = new c();
  let d = async e => {
    if (i.sended) {
      i = new c();
    }
    i.add(e);
    return await i.get(e);
  };
  let p = {
    messageNodeInfoMap: {},
    hasToasted: undefined,
    messageNodeInfoLoading: {}
  };
  let h = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer((e, t) => {
    let n = "aispace-save-toast";
    return {
      ...p,
      getHasToasted: () => {
        let {
          hasToasted: i
        } = t();
        if (i === undefined) {
          i = storageWrapperWithFallback.LocalStorageWrapper.getItem(n) === "1";
          e(immerCoreImplementation.produce(e => {
            e.hasToasted = i;
          }));
        }
        return i;
      },
      updateToasted: () => {
        storageWrapperWithFallback.LocalStorageWrapper.setItem(n, "1");
        e(immerCoreImplementation.produce(e => {
          e.hasToasted = true;
        }));
      },
      getMessageNodeInfos(e) {
        var i;
        if (e) {
          if ((i = t().messageNodeInfoMap) === null || i === undefined) {
            return undefined;
          } else {
            return i[e]?.nodeInfos;
          }
        }
      },
      async updateMessageNodeInfo(n) {
        if (!n) {
          return null;
        }
        let i = t().messageNodeInfoMap[n];
        if ((i == null ? undefined : i.timeStamp) && Date.now() - i.timeStamp < 31536000000) {
          if (i == null) {
            return undefined;
          } else {
            return i.nodeInfos;
          }
        }
        if (t().messageNodeInfoLoading[n]) {
          return null;
        }
        try {
          e(immerCoreImplementation.produce(e => {
            let {
              messageNodeInfoLoading: t
            } = e;
            t[n] = true;
          }));
          let t = await d(n);
          if (!t) {
            return null;
          }
          {
            let i = {
              nodeInfos: t,
              timeStamp: Date.now()
            };
            e(immerCoreImplementation.produce(e => {
              let {
                messageNodeInfoMap: t
              } = e;
              t[n] = i;
            }));
            return t;
          }
        } catch {
          return null;
        } finally {
          e(immerCoreImplementation.produce(e => {
            let {
              messageNodeInfoLoading: t
            } = e;
            t[n] = false;
          }));
        }
      }
    };
  }));
  require.d(exports, {
    messageNodeInfoStore: function () {
      return h;
    }
  });
}