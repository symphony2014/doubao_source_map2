// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'fetchPdfPreview'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 736066
         */
module.exports = function (module, exports, require) {
  let i;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var getDocumentPdfKey = require("get-document-pdf-key") /*id: 523108*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  function c(e, t, a) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var a = e[Symbol.toPrimitive];
      if (a !== undefined) {
        var i = a.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = a;
    }
    return e;
  }
  class d {
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
          data: a
        } = await this.promise;
        if (a == null) {
          return undefined;
        } else {
          return a.preview_images?.[e];
        }
      }
    }
    run() {
      var e;
      this.sended = true;
      this.promise = apiServicesCollection.SamanthaApiService.PDFPreview({
        uris: this.queue
      });
      if ((e = this.hangResolver) !== null && e !== undefined) {
        e.call(this);
      }
    }
    constructor() {
      c(this, "TIMEOUT", 300);
      c(this, "QUEUE_MAX_LENGTH", 5);
      c(this, "queue", []);
      c(this, "timeoutId", null);
      c(this, "promise", null);
      c(this, "hangResolver", null);
      c(this, "hangPromise", new Promise(e => this.hangResolver = e));
      c(this, "sended", false);
    }
  }
  i = new d();
  let p = async e => {
    if (i.sended) {
      i = new d();
    }
    i.add(e);
    return await i.get(e);
  };
  async function u(e, t = {}) {
    if (!e) {
      return null;
    }
    let a = chatMessageStoreFactory.createMessageStore.getState().pdfPreviewMap[e];
    if ((a == null ? undefined : a.timestamp) && Date.now() - a.timestamp < 31536000000) {
      return a;
    }
    let {
      fileType: i
    } = t;
    let s = eventReportingService.createEventReporter({
      eventName: "get_pdf_preview",
      meta: {
        file_type: i
      }
    });
    try {
      let t = e;
      if (i === "Document") {
        let e = await getDocumentPdfKey.getDocumentPdfKey(t);
        if (e) {
          t = e;
        }
      }
      let a = await p(t);
      if (!a) {
        s.error({
          reason: "image_url_empty",
          error: Error("image_url_empty")
        });
        return null;
      }
      {
        let t = {
          imageUrl: a,
          timestamp: Date.now()
        };
        chatMessageStoreFactory.createMessageStore.setState(immerCoreImplementation.produce(a => {
          let {
            pdfPreviewMap: i
          } = a;
          i[e] = t;
        }));
        s.addDurationPoint("success");
        s.success();
        return t;
      }
    } catch (e) {
      s.error({
        reason: "get_pdf_preview_failed",
        error: e instanceof Error ? e : Error(String(e))
      });
      return null;
    }
  }
  require.d(exports, {
    fetchPdfPreview: function () {
      return u;
    }
  });
}