// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'getUrlPreview'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 933085
         */
module.exports = function (module, exports, require) {
  let i;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  function s(e, t, n) {
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
        var t;
        let {
          data: n
        } = await this.promise;
        if (n == null) {
          return undefined;
        } else if ((t = n.results) === null || t === undefined) {
          return undefined;
        } else {
          return t.find(t => t.url === e);
        }
      }
    }
    run() {
      var e;
      this.sended = true;
      this.promise = apiServicesCollection.SamanthaApiService.SniffLink({
        links: this.queue,
        with_link_meta: true
      });
      if ((e = this.hangResolver) !== null && e !== undefined) {
        e.call(this);
      }
    }
    constructor() {
      s(this, "TIMEOUT", 300);
      s(this, "QUEUE_MAX_LENGTH", 5);
      s(this, "queue", []);
      s(this, "timeoutId", null);
      s(this, "promise", null);
      s(this, "hangResolver", null);
      s(this, "hangPromise", new Promise(e => this.hangResolver = e));
      s(this, "sended", false);
    }
  }
  i = new c();
  let d = async e => {
    if (i.sended) {
      i = new c();
    }
    i.add(e);
    let t = await i.get(e);
    if (t == null) {
      return undefined;
    } else {
      return t.link_meta;
    }
  };
  async function u(e) {
    if (!e) {
      return null;
    }
    let t = chatMessageStoreFactory.createMessageStore.getState().linkPreviewMap[e];
    if (t) {
      return t;
    }
    let n = eventReportingService.createEventReporter({
      eventName: "get_url_preview",
      meta: {
        url: e
      }
    });
    try {
      let t = await d(e);
      if (t) {
        chatMessageStoreFactory.createMessageStore.setState(immerCoreImplementation.produce(n => {
          let {
            linkPreviewMap: i
          } = n;
          i[e] = t;
        }));
        n.addDurationPoint("success");
        n.success();
        return t;
      }
      n.error({
        reason: "url_preview_empty",
        error: Error("url_preview_empty")
      });
      return null;
    } catch (e) {
      n.error({
        reason: "get_url_preview_failed",
        error: e instanceof Error ? e : Error(String(e))
      });
      return null;
    }
  }
  require.d(exports, {
    getUrlPreview: function () {
      return u;
    }
  });
}