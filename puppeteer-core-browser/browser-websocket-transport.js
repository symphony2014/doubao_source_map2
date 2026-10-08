// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: puppeteer-core-browser.0fda468e.js
         * chunkId: 41616
         * moduleId: 119856
         */
module.exports = function (module, exports, require) {
  class r {
    static create(e) {
      return new Promise((t, i) => {
        let a = new WebSocket(e);
        a.addEventListener("open", () => t(new r(a)));
        a.addEventListener("error", i);
      });
    }
    #e;
    onmessage;
    onclose;
    constructor(e) {
      this.#e = e;
      this.#e.addEventListener("message", e => {
        if (this.onmessage) {
          this.onmessage.call(null, e.data);
        }
      });
      this.#e.addEventListener("close", () => {
        if (this.onclose) {
          this.onclose.call(null);
        }
      });
      this.#e.addEventListener("error", () => {});
    }
    send(e) {
      this.#e.send(e);
    }
    close() {
      this.#e.close();
    }
  }
  require.r(exports);
  require.d(exports, {
    BrowserWebSocketTransport: function () {
      return r;
    }
  });
}