// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'pdfPreviewStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 745227
         */
module.exports = function (module, exports, require) {
  let n;
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var getDocumentPdfKey = require("get-document-pdf-key") /*id: 523108*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  function c(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
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
          data: i
        } = await this.promise;
        if (i == null) {
          return undefined;
        } else {
          return i.preview_images?.[e];
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
  n = new d();
  let u = async e => {
    if (n.sended) {
      n = new d();
    }
    n.add(e);
    return await n.get(e);
  };
  let p = {
    pdfPreviewMap: {}
  };
  let _ = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer((e, t) => ({
    ...p,
    async updatePdfPreview(i, n = {}) {
      if (!i) {
        return null;
      }
      let a = t().pdfPreviewMap[i];
      if ((a == null ? undefined : a.timestamp) && Date.now() - a.timestamp < 31536000000) {
        return a;
      }
      let {
        fileType: r
      } = n;
      try {
        let t = i;
        if (r === "Document") {
          let e = await getDocumentPdfKey.getDocumentPdfKey(t);
          if (e) {
            t = e;
          }
        }
        let n = await u(t);
        if (!n) {
          return null;
        }
        {
          let t = {
            imageUrl: n,
            timestamp: Date.now()
          };
          e(immerCoreImplementation.produce(e => {
            let {
              pdfPreviewMap: n
            } = e;
            n[i] = t;
          }));
          return t;
        }
      } catch {
        return null;
      }
    }
  })));
  require.d(exports, {
    pdfPreviewStore: function () {
      return _;
    }
  });
}