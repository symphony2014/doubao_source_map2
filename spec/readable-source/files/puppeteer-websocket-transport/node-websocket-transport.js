// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'wsBrowserStub'
// - Resolved require(592986) to 'ws-browser-stub'
// - Renamed variable 'o' to 'puppeteerCoreVersion'
// - Resolved require(119221) to 'puppeteer-core-version'
// - Updated imported property 'b' to 'puppeteerVersion' (module 119221)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50164.72fb564c.js
         * chunkId: 50164
         * moduleId: 612365
         */
module.exports = function (module, exports, require) {
  var wsBrowserStub = require("ws-browser-stub") /*id: 592986*/;
  var puppeteerCoreVersion = require("puppeteer-core-version") /*id: 119221*/;
  class r {
    static create(e, s) {
      return new Promise((t, a) => {
        let i = new wsBrowserStub(e, [], {
          followRedirects: true,
          perMessageDeflate: false,
          allowSynchronousEvents: false,
          maxPayload: 268435456,
          headers: {
            "User-Agent": `Puppeteer ${puppeteerCoreVersion.puppeteerVersion}`,
            ...s
          }
        });
        i.addEventListener("open", () => t(new r(i)));
        i.addEventListener("error", a);
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
    NodeWebSocketTransport: function () {
      return r;
    }
  });
}