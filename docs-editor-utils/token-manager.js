// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'tokenManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 939673
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var eventEmitterUmd = require("event-emitter-umd") /*id: 692502*/;
  var l = eventEmitterUmd;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docUrlResolver = require("doc-url-resolver") /*id: 199176*/;
  var docxTokenMappingResolver = require("docx-token-mapping-resolver") /*id: 586713*/;
  function s(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  let d = function () {
    var e = arguments.length;
    var n = Array(e);
    var r = 0;
    for (; r < e; r++) {
      n[r] = arguments[r];
    }
    if (window._isDev || !browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      return;
    }
  };
  var f = new class {
    async updateMappingFromDB() {
      let e = await docxTokenMappingResolver.getTokenMapping();
      if (e) {
        this.mapping.fakeToReal = Object.assign(this.mapping.fakeToReal, e.fakeToReal);
        this.mapping.realToFake = Object.assign(this.mapping.realToFake, e.realToFake);
      }
    }
    destroy() {
      d("tokenManager destroy");
      this.mapping.fakeToReal = {};
      this.mapping.realToFake = {};
    }
    constructor() {
      s(this, "mapping", {
        realToFake: {},
        fakeToReal: {}
      });
      s(this, "eventBus", new l());
      s(this, "getEventName", e => `listener_${e}`);
      s(this, "initMapping", async () => {
        d("initMapping start");
        await this.updateMappingFromDB();
        d("initMapping end");
      });
      s(this, "getRealTokenFromMemory", e => (docUrlResolver.isDocDomain === null || docUrlResolver.isDocDomain === undefined ? undefined : docUrlResolver.isDocDomain(e)) ? this.mapping.fakeToReal[e] : e);
      s(this, "getFakeTokenFromMemory", e => (docUrlResolver.isDocDomain === null || docUrlResolver.isDocDomain === undefined ? undefined : docUrlResolver.isDocDomain(e)) ? e : this.mapping.realToFake[e]);
      s(this, "getRealToken", async e => (docUrlResolver.isDocDomain === null || docUrlResolver.isDocDomain === undefined ? undefined : docUrlResolver.isDocDomain(e)) ? (this.mapping.fakeToReal[e] || (await this.updateMappingFromDB()), this.mapping.fakeToReal[e]) : e);
      s(this, "getFakeToken", async e => (docUrlResolver.isDocDomain === null || docUrlResolver.isDocDomain === undefined ? undefined : docUrlResolver.isDocDomain(e)) ? e : (this.mapping.realToFake[e] || (await this.updateMappingFromDB()), this.mapping.realToFake[e]));
      s(this, "refresh", async (e, n) => {
        this.mapping.fakeToReal[e] = n;
        this.mapping.realToFake[n] = e;
        await this.updateMappingFromDB();
        let r = await this.getRealToken(e);
        d(`refresh: FT ${platformDocUtils.p5T(e)}, TT ${platformDocUtils.p5T(n)}, RT ${platformDocUtils.p5T(r)}`);
        if (!r) {
          d("can not get data after refresh");
          return;
        }
        if (n && n !== r) {
          d("the token from rn is different from the target token");
        }
        this.eventBus.emit(this.getEventName(e), r);
      });
      s(this, "addListener", (e, n) => {
        if (docUrlResolver.isDocDomain(e)) {
          this.eventBus.on(this.getEventName(e), n);
        }
      });
      s(this, "removeListener", (e, n) => {
        if (docUrlResolver.isDocDomain(e)) {
          this.eventBus.off(this.getEventName(e), n);
        }
      });
    }
  }();
  require.d(exports, {
    tokenManager: function () {
      return f;
    }
  });
}