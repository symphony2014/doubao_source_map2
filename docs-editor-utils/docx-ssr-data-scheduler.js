// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'DocxSsrScheduler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 456291
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var objectMatchUtil = require("object-match-util") /*id: 941914*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxSsrSchedulerConfig = require("docx-ssr-scheduler-config") /*id: 174298*/;
  class s {
    set(e, n) {
      return this.data.set(e, n);
    }
    get(e) {
      return this.data.get(e);
    }
    batchGet(e) {
      let n = {};
      e.forEach(e => {
        n[e] = this.data.get(e);
      });
      return n;
    }
    batchSet(e) {
      e.forEach(e => {
        this.data.set(e.key, e.value);
      });
    }
    filterNoCacheKeys(e) {
      return e.filter(e => !this.data.get(e));
    }
    delete(e) {
      this.data.delete(e);
    }
    clear() {
      this.data.clear();
    }
    constructor() {
      var e;
      var n;
      var r;
      e = "data";
      n = new Map();
      if ((e = typeof (r = function (e, n) {
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
      }(e, "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = n;
      }
    }
  }
  function d(e, n, r) {
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
  let f = "__prerender_docx_bitable__";
  let h = {
    max_con_req_num: 3,
    max_con_block_count: 5,
    block_types: [],
    max_req_num: 10
  };
  class _ {
    onRequestBlock(e) {
      if (e === docBlockTypeConstants.blockTypeConstants.BITABLE && docxSsrSchedulerConfig.isSsrOptEnabled) {
        this.onBitableRequest();
      }
    }
    destroy() {
      this.cacher.clear();
      this.pendingQueue.clear();
      this.resolveMap.clear();
      this.blockHasRequestCount = 0;
      this.concurrentCount = 0;
      this.blockNeedToFetch = [];
      this.reqHasSendCount = 0;
    }
    constructor() {
      d(this, "cacher", new s());
      d(this, "pendingQueue", new s());
      d(this, "blockNeedToFetch", []);
      d(this, "concurrentCount", 0);
      d(this, "blockHasRequestCount", 0);
      d(this, "reqHasSendCount", 0);
      d(this, "resolveMap", new Map());
      d(this, "blockSSRConfig", undefined);
      d(this, "log", undefined);
      d(this, "requestCommonParams", undefined);
      d(this, "setConfig", e => {
        let {
          ssrConfig: n,
          log: r,
          requestCommonParams: o
        } = e;
        this.blockSSRConfig = n || h;
        this.log = r;
        this.requestCommonParams = o;
      });
      d(this, "batchFetchSSRData", (e, n) => {
        if (e.length === 0) {
          return;
        }
        let r = [];
        if (n) {
          r = e.filter(e => !this.pendingQueue.get(e.id) || objectMatchUtil.checkObjectMatch(this.blockNeedToFetch, n => n.id === e.id));
          this.updatePendingQueue(r);
          this.fetchSSRDataImmediately(r);
        } else {
          r = e.filter(e => !this.cacher.get(e.id) && !this.pendingQueue.get(e.id));
          this.updatePendingQueue(r);
          this.blockNeedToFetch.push(...r);
          this.schedulerForSSRData();
        }
      });
      d(this, "updateSSRDataCache", (e, n) => {
        this.cacher.set(e, n);
      });
      d(this, "getSSRContent", e => this.cacher.get(e));
      d(this, "waitForStaticBlock", e => {
        let {
          id: n
        } = e;
        let r = this.cacher.get(n);
        if (r) {
          return Promise.resolve(r);
        } else {
          this.batchFetchSSRData([e], true);
          return this.pendingQueue.get(n);
        }
      });
      d(this, "removeData", e => {
        this.pendingQueue.delete(e);
        this.resolveMap.delete(e);
        this.cacher.delete(e);
      });
      d(this, "updatePendingQueue", e => {
        let n = e.filter(e => !this.pendingQueue.get(e.id)).map(e => ({
          key: e.id,
          value: new Promise(n => {
            this.resolveMap.set(e.id, n);
          })
        }));
        this.pendingQueue.batchSet(n);
      });
      d(this, "removeBlockIdsFromToFetchQueue", e => {
        this.blockNeedToFetch = this.blockNeedToFetch.filter(n => !objectMatchUtil.checkObjectMatch(e, e => e.id === n.id));
      });
      d(this, "fetchSSRDataImmediately", e => {
        if (e && !(e.length <= 0)) {
          this.removeBlockIdsFromToFetchQueue(e);
          this.requestSSRFromServer(e, "immediate");
        }
      });
      d(this, "schedulerForSSRData", () => {
        if (!(this.concurrentCount >= this.blockSSRConfig.max_con_req_num)) {
          while (this.blockNeedToFetch && this.blockNeedToFetch.length > 0 && this.concurrentCount < this.blockSSRConfig.max_con_req_num) {
            let e = this.blockNeedToFetch.splice(0, this.blockSSRConfig.max_con_block_count);
            this.concurrentCount++;
            this.requestSSRFromServer(e, "scheduler");
          }
        }
      });
      d(this, "onBitableRequest", onceFunctionFactory.createOnce(async () => {
        if (!window[f] && platformDocUtils.YuS) {
          let {
            prerenderBitableSSR: e
          } = await platformDocUtils.YuS();
          window[f] = e;
        }
      }));
      d(this, "requestSSRFromServer", (e, n) => {
        var r;
        var o;
        try {
          if (this.reqHasSendCount >= this.blockSSRConfig.max_req_num) {
            if (n === "scheduler") {
              if ((r = this.log) !== null && r !== undefined) {
                r.call(this, "max_req_limit", {
                  req_count: this.reqHasSendCount,
                  block_count_has_request: this.blockHasRequestCount
                });
              }
            }
            return;
          }
          e.forEach(e => {
            this.onRequestBlock(e.type);
          });
          this.reqHasSendCount++;
          this.blockHasRequestCount += e.length;
          docxApiConstantsExports.docxApiService.getBlockSSR({
            blockInfos: e,
            ...(this.requestCommonParams || {})
          }).then(e => {
            var n;
            var r;
            if (e != null && (r = e.data) !== null && r !== undefined && (n = r.forEach) !== null && n !== undefined) {
              n.call(r, e => {
                let {
                  id: n,
                  ssrData: r,
                  isFallback: o
                } = e;
                let i = this.resolveMap.get(n);
                if (i) {
                  this.resolveMap.delete(n);
                  this.cacher.set(n, {
                    ssrData: r,
                    isFallback: o
                  });
                  i(this.cacher.get(n) || {
                    ssrData: ""
                  });
                }
              });
            }
          }).finally(() => {
            this.concurrentCount--;
            e.forEach(e => {
              let n = this.resolveMap.get(e.id);
              if (n != null) {
                n({
                  ssrData: ""
                });
              }
              this.resolveMap.delete(e.id);
            });
            this.schedulerForSSRData();
          });
        } catch (e) {
          if ((o = this.log) !== null && o !== undefined) {
            o.call(this, "request_ssr_from_server_error", e);
          }
        }
      });
    }
  }
  require.d(exports, {
    DocxSsrScheduler: function () {
      return _;
    }
  });
}