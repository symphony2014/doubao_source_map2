// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'debounceUtilWrapper'
// - Resolved require(213804) to 'debounce-util-wrapper'
// - Renamed variable 'n' to 'arrayChunk'
// - Resolved require(554639) to 'array-chunk'
// - Renamed variable 's' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'a' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'u' to 'moduleReExportWrapper'
// - Resolved require(71973) to 'module-re-export-wrapper'
// - Renamed variable 'o' to 'documentImageUtils'
// - Resolved require(606561) to 'document-image-utils'
// - Renamed variable 'c' to 'imageFetchSchedulerConfig'
// - Resolved require(67275) to 'image-fetch-scheduler-config'
// - Renamed variable 'b' to 'performanceTimer'
// - Resolved require(984702) to 'performance-timer'
// - Renamed variable 'C' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'R' to 'arrayIsArrayUtil'
// - Resolved require(447761) to 'array-is-array-util'
// - Renamed variable '$' to 'arrayFindIndexMatcher'
// - Resolved require(489247) to 'array-find-index-matcher'
// - Renamed variable 'S' to 'blobUrlCacheManager'
// - Resolved require(865553) to 'blob-url-cache-manager'
// - Renamed variable 'E' to 'memoizeFunction'
// - Resolved require(565197) to 'memoize-function'
// - Renamed variable 'F' to 'eventEmitterUmd'
// - Resolved require(692502) to 'event-emitter-umd'
// - Renamed variable 'N' to 'docxUtilityHelpers'
// - Resolved require(859002) to 'docx-utility-helpers'
// - Renamed variable 'O' to 'isStringTypeCheck'
// - Resolved require(253558) to 'is-string-type-check'
// - Renamed variable 'W' to 'opendocImageViewerUtils'
// - Resolved require(356868) to 'opendoc-image-viewer-utils'
// - Renamed variable 'x' to 'asyncRetryUtils_1'
// - Resolved require(989891) to 'async-retry-utils_1'
// - Renamed variable 'M' to 'idleCallbackPolyfill_1'
// - Resolved require(55404) to 'idle-callback-polyfill_1'
// - Renamed variable 'B' to 'docxTaskSchedulerUtilities'
// - Resolved require(572734) to 'docx-task-scheduler-utilities'
// - Renamed variable 'I' to 'blobUrlUtils'
// - Resolved require(334362) to 'blob-url-utils'
// - Updated imported property 'Z' to 'arrayChunk' (module 554639)
// - Updated imported property 'zp' to 'maxCdnCount' (module 67275)
// - Updated imported property 'OP' to 'fetchTimeout' (module 67275)
// - Updated imported property 'Ip' to 'fetchLimit' (module 67275)
// - Updated imported property 'zm' to 'fetchFrequency' (module 67275)
// - Updated imported property 'ee' to 'defaultInterval' (module 67275)
// - Updated imported property 'vK' to 'breakpointMap' (module 67275)
// - Updated imported property 'A4' to 'maxTimeslice' (module 67275)
// - Updated imported property 'I_' to 'fetchAttachments' (module 606561)
// - Updated imported property 'pe' to 'prepareImageParams' (module 606561)
// - Updated imported property 'Vw' to 'parseDecryptConfig' (module 606561)
// - Updated imported property 'Xb' to 'fetchImageBuffer' (module 606561)
// - Updated imported property 'qQ' to 'createBlobUrl' (module 606561)
// - Updated imported property 'DK' to 'fetchBlobUrl' (module 606561)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'Z' to 'PerformanceTimer' (module 984702)
// - Updated imported property 'Z' to 'isArray' (module 447761)
// - Updated imported property 'Z' to 'findMatchingIndex' (module 489247)
// - Updated imported property 'y' to 'isCacheable' (module 865553)
// - Updated imported property 'Z' to 'BlobUrlCacheManager' (module 865553)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property '_v' to 'delayPromise' (module 859002)
// - Updated imported property 'Z' to 'memoize' (module 565197)
// - Updated imported property 'b4' to 'safeAsyncExec' (module 989891)
// - Updated imported property 'G4' to 'isOpendoc' (module 356868)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'K' to 'requestIdleCallback' (module 55404)
// - Updated imported property 'nz' to 'isBlobUrl' (module 334362)
// - Updated imported property 'Z' to 'wrappedModule' (module 71973)
// - Updated imported property 'Z' to 'createDebounce' (module 213804)
// - Updated imported property 'mB' to 'taskSchedulerInstance' (module 572734)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_index_delay_for_edit.7ad4a340.js
         * chunkId: 84820
         * moduleId: 566430
         */
module.exports = function (module, exports, require) {
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var arrayChunk = require("array-chunk") /*id: 554639*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var moduleReExportWrapper = require("module-re-export-wrapper") /*id: 71973*/;
  var documentImageUtils = require("document-image-utils") /*id: 606561*/;
  var imageFetchSchedulerConfig = require("image-fetch-scheduler-config") /*id: 67275*/;
  function l(e) {
    let {
      token: t,
      isHD: r,
      fuzzy: i
    } = e;
    let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    return `${(n ? "c/" : "") + t}-${r ? "hd" : ""}-${i ? "fuzzy" : "cover"}-`;
  }
  async function h(e, t) {
    return Promise.all(arrayChunk.arrayChunk(e, imageFetchSchedulerConfig.maxCdnCount).map(async e => {
      let r = Array(e.length).fill(undefined);
      try {
        return (await documentImageUtils.fetchAttachments(documentImageUtils.prepareImageParams(e).map(e => ({
          ...e,
          auth_token: t
        })))).reduce((e, t, r) => {
          if (t == null ? undefined : t.url) {
            e[objectPathGetDefault.getObjectPathDefault(t, "index", r)] = t;
          }
          return e;
        }, r);
      } catch (e) {
        return r;
      }
    })).then(e => e.flat());
  }
  async function d(e, t, r) {
    e.forEach(e => e.logger.logFetchCdnConfigStart());
    let i = e.filter(e => {
      if (e.cdnConfig) {
        if ("cdnUrl" in e.cdnConfig) {
          e.logger.logFetchCdnConfigEnd(true);
          return false;
        }
        if ("then" in e.cdnConfig) {
          return t;
        }
      }
      return true;
    });
    if (i.length) {
      (await h(i, r)).forEach((e, t) => {
        let r = i[t];
        if ((e == null ? undefined : e.file_token) !== (r == null ? undefined : r.token)) {
          r.logger.logFetchCdnConfigEnd(false);
          p(r, "cdnConfig", `invalid cdnInfo token ${e == null ? undefined : e.file_token}`);
          return;
        }
        try {
          let t = (e == null ? undefined : e.url) ? documentImageUtils.parseDecryptConfig(e) : undefined;
          if (t == null ? undefined : t.cdnUrl) {
            r.logger.logFetchCdnConfigEnd(true);
            g(r, "cdnConfig", t);
            return;
          }
        } catch (e) {}
        r.logger.logFetchCdnConfigEnd(false);
        p(r, "cdnConfig", "invalid response");
      });
    }
    return e;
  }
  function f(e, t) {
    if (e[t] === undefined) {
      let r;
      let i;
      e[t] = Object.assign(new Promise((e, t) => {
        r = e;
        i = t;
      }), {
        resolve: r,
        reject: i
      });
    }
    return e[t];
  }
  function g(e, t, r) {
    var n;
    if (e[t]?.resolve) {
      if ((n = e[t]) !== null && n !== undefined) {
        n.resolve(r);
      }
    }
    return e[t] = r;
  }
  function p(e, t, r) {
    if (e[t]?.reject && e[t].catch(emptyExportFunction.emptyFunction)) {
      e[t].reject(r || "no reason");
    }
    e[t] = undefined;
  }
  function m(e) {
    if (e) {
      if ("then" in e) {
        e.then(e => {
          URL.revokeObjectURL(e.src);
        });
      } else {
        URL.revokeObjectURL(e.src);
      }
    }
  }
  function y(e = 1, t = 1) {
    let r = e / (e + t);
    let i = e + t;
    return (r + 3.8415999999999997 / (i * 2) - Math.sqrt((r * (1 - r) + 3.8415999999999997 / (i * 4)) / i) * 1.96) / (1 + 3.8415999999999997 / i);
  }
  function v() {
    let e = 0;
    try {
      e = performance.getEntriesByType("resource").filter(e => {
        let {
          duration: t,
          transferSize: r
        } = e;
        return t > 0 && r > 0;
      }).map(e => {
        let {
          duration: t,
          transferSize: r
        } = e;
        return r / t || -Infinity;
      }).sort((e, t) => t - e)[1];
    } catch (e) {}
    return e;
  }
  class _ extends Map {
    add(e, t) {
      if (!this.has(e)) {
        this.set(e, new Set());
      }
      this.get(e).add(t);
    }
    remove(e, t) {
      let r = this.get(e);
      return !r || (r.delete(t), r.size === 0 && this.delete(e));
    }
  }
  var performanceTimer = require("performance-timer") /*id: 984702*/;
  function w(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class k {
    logFetchCdnConfigStart() {
      this.timer.start(`fetchCdnConfig_${this.uuid}`);
      this.fetchStatus.request_cdn_url_necessary = true;
    }
    logFetchCdnConfigEnd(e) {
      this.fetchStatus.request_cdn_url_fail = !e;
      this.fetchStatus.request_cdn_url_time_cost = this.timer.end(`fetchCdnConfig_${this.uuid}`);
    }
    logFetchCdnStart() {
      this.timer.start(`fetchCdn_${this.uuid}`);
      this.fetchStatus.request_cdn_necessary = true;
      this.fetchStatus.request_cdn_start = Date.now();
    }
    logFetchCdnEnd(e, t) {
      let r = !!e;
      this.fetchStatus.request_cdn_fail = !r;
      this.fetchStatus.request_cdn_time_cost = this.timer.end(`fetchCdn_${this.uuid}`);
      this.fetchStatus.cdn_size = e.byteLength;
      this.fetchStatus.request_cdn_end = Date.now();
      Object.assign(this.fetchStatus, t);
    }
    logDecryptStart() {
      this.timer.start(`decrypt_${this.uuid}`);
      this.fetchStatus.decrypt_necessary = true;
      this.fetchStatus.decrypt_cdn_start = Date.now();
    }
    logNoNeedDecrypt() {
      this.fetchStatus.decrypt_necessary = false;
    }
    logDecryptEnd(e) {
      this.fetchStatus.decrypt_fail = !e;
      this.fetchStatus.decrypt_time_cost = this.timer.end(`decrypt_${this.uuid}`);
      this.fetchStatus.decrypt_cdn_end = Date.now();
    }
    destroy() {
      this.fetchStatus = {};
      this.timer.clear();
    }
    constructor(e) {
      w(this, "uuid", undefined);
      w(this, "fetchStatus", {});
      w(this, "timer", new performanceTimer.PerformanceTimer());
      this.uuid = e;
    }
  }
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var arrayFindIndexMatcher = require("array-find-index-matcher") /*id: 489247*/;
  var blobUrlCacheManager = require("blob-url-cache-manager") /*id: 865553*/;
  var q = {
    CDN_INFO: 1,
    FUZZY: 2,
    COVER: 3
  };
  class T {
    async create(e) {
      let t = arrayIsArrayUtil.isArray(e) ? e : [e];
      let [r, i] = function (e, t) {
        let r = [];
        let i = [];
        e.forEach((e, n, s) => {
          if (t(e, n, s)) {
            r.push(n);
          } else {
            i.push(n);
          }
        });
        return [r.map(t => e[t]), i.map(t => e[t])];
      }(t, (e, r) => {
        let i = l(e);
        let n = this.fetcher.get(i);
        if ((n == null ? undefined : n.cdnConfig) !== undefined) {
          t[r] = n;
          return false;
        } else {
          e.logger = e.logger || this.manager.getLogger(e.uuid);
          f(e, "cdnConfig");
          this.fetcher.set(i, e);
          return true;
        }
      });
      if (r.length) {
        let e = Object.assign(async () => {
          r.forEach(e => {
            let t = l(e, true);
            this.scheduler.pendingTask.delete(t);
          });
          return await this.fetcher.prepare(r).then(e => {
            e.forEach(e => {
              if (!("cdnUrl" in ((e == null ? undefined : e.cdnConfig) || Object))) {
                this.fetcher.delete(l(e, true));
              }
            });
            return e;
          });
        }, {
          type: q.CDN_INFO,
          args: [r],
          weight: q.CDN_INFO
        });
        r.forEach(t => {
          let r = l(t, true);
          this.scheduler.pendingTask.set(r, e);
        });
        await Promise.all([this.scheduler.enqueue(e), ...i.map(e => e.cdnConfig)]).catch(e => undefined);
      }
      if (arrayIsArrayUtil.isArray(e)) {
        return t.map(e => e.cdnConfig);
      } else {
        return t[0].cdnConfig;
      }
    }
    beforeDequeue() {
      if (!this.scheduler.queue.length) {
        return;
      }
      let {
        task: e
      } = this.scheduler.queue[0];
      if (e.type === q.CDN_INFO) {
        let t = arrayFindIndexMatcher.findMatchingIndex(this.scheduler.queue, (t, r) => {
          let {
            task: i,
            resolve: n,
            reject: s
          } = t;
          return r !== 0 && (i.type !== q.CDN_INFO || (e.args[0].push(...i.args[0]), n(Promise.all(i.args[0].map(e => e.cdnConfig))), false));
        });
        if (t === -1) {
          this.scheduler.queue.splice(1, this.scheduler.queue.length);
        } else {
          this.scheduler.queue.splice(1, t - 1);
        }
      }
    }
    constructor(e, t, r) {
      this.scheduler = e;
      this.fetcher = t;
      this.manager = r;
      this.scheduler.on("dequeue", this.beforeDequeue.bind(this));
    }
  }
  class Z {
    async create(e) {
      let t = l(e);
      let r = blobUrlCacheManager.isCacheable(e);
      let i = blobUrlCacheManager.BlobUrlCacheManager.getBlobURL(e.token);
      if (r && i) {
        return {
          src: xssContentSanitizer.sanitizeUrl(i, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WmhWekZv$2pK$mR*cHRWakJaTW1oc1kyaz$S$050-kRK-$ZXeDBX$mRr-kZKdFZqQlpNbWhzWTJ4%2FHTXljM1Zr%0%1b1kyMWtN$04z%FQwPQ"
          }),
          isFromCache: true,
          originSrc: ""
        };
      }
      let n = this.fetcher.get(t) || e;
      if (n.data !== undefined) {
        this.manager.buzz(e);
        return {
          ...(await n.data),
          isFromCache: true
        };
      }
      let s = f(n, "data");
      this.fetcher.set(t, n);
      this.manager.preTaskCreator.create([n, ...(e.relatedRes || [])]);
      let a = n.fuzzy ? q.FUZZY : q.COVER;
      let u = Object.assign(() => {
        this.scheduler.pendingTask.delete(t);
        return this.fetcher.fetch(n);
      }, {
        type: a,
        weight: a
      });
      this.scheduler.pendingTask.set(t, u);
      blobUrlCacheManager.BlobUrlCacheManager.enableCacheRequest(e.token);
      let o = await this.scheduler.enqueue(u);
      n.data = o;
      if (r && blobUrlCacheManager.BlobUrlCacheManager.isBlobURLCouldBeCache(e.token)) {
        blobUrlCacheManager.BlobUrlCacheManager.setBlobURLToCache(e.token, n.data.src);
      }
      s.resolve(n.data);
      if (r) {
        delete n.data;
      }
      return o;
    }
    constructor(e, t, r) {
      this.scheduler = e;
      this.fetcher = t;
      this.manager = r;
    }
  }
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var eventEmitterUmd = require("event-emitter-umd") /*id: 692502*/;
  var z = eventEmitterUmd;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  function D(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class P extends z {
    async enqueue(e) {
      return new Promise((t, r) => {
        this.queue.unshift({
          task: e,
          resolve: t,
          reject: r
        });
        this.prioritizeQueue();
        this.next();
      });
    }
    async dequeue() {
      let e = this.queue.shift();
      if (!e) {
        return;
      }
      let {
        task: t,
        resolve: r,
        reject: i
      } = e;
      return Promise.race([t().then(r, i), docxUtilityHelpers.delayPromise(imageFetchSchedulerConfig.fetchTimeout)]);
    }
    isSchedulerAvailable() {
      return !!this.started && !(this.running >= this.limit) && !!this.queue.length;
    }
    async dequeueAndNext() {
      if (arguments.length > 0 && arguments[0] !== undefined) {
        arguments[0];
      } else {
        this.frequency;
      }
      await docxUtilityHelpers.delayPromise(this.frequency);
      return this.dequeue();
    }
    next() {
      if (this.isSchedulerAvailable()) {
        this.running++;
        this.prioritizeQueue(true);
        this.dequeueAndNext().finally(() => {
          this.running--;
          this.next();
        });
        this.next();
      }
    }
    start() {
      if (!this.started) {
        this.started = true;
        this.next();
      }
    }
    stop() {
      this.started = false;
    }
    prioritizeQueue(e = false) {
      if (this.$dirty && e) {
        this.queue.sort((e, t) => {
          let {
            task: r
          } = e;
          let {
            task: i
          } = t;
          r.$scope = r.$scope || this.calculatePriority(r.priority, r.weight);
          i.$scope = i.$scope || this.calculatePriority(i.priority, i.weight);
          return i.$scope - r.$scope;
        });
      }
      this.$dirty = !e;
    }
    constructor(e = 3, t = 10, r = true) {
      super();
      this.limit = e;
      this.frequency = t;
      D(this, "running", 0);
      D(this, "queue", []);
      D(this, "started", false);
      D(this, "calculatePriority", memoizeFunction.memoize(y, (e, t) => `${e} ${t}`));
      D(this, "$dirty", false);
      if (r) {
        this.start();
      }
    }
  }
  function j(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class L extends P {
    buzz(e, t = 1) {
      [this.pendingTask.get(l(e, true)), this.pendingTask.get(l(e))].forEach(e => {
        if (e) {
          e.priority = (e.priority || 1) + t;
          e.$scope = this.calculatePriority(e.priority, e.weight);
          this.prioritizeQueue();
        }
      });
    }
    dequeue() {
      this.emit("dequeue");
      return super.dequeue();
    }
    async dequeueAndNext() {
      let {
        task: e
      } = this.queue[0];
      if (e.type === q.CDN_INFO) {
        return super.dequeueAndNext();
      } else {
        return super.dequeueAndNext(0);
      }
    }
    getProfile() {
      return {
        limit: this.limit,
        frequency: this.frequency,
        queue: this.queue.length
      };
    }
    async delete(e) {
      let t = l(e);
      this.pendingTask.delete(t);
    }
    clear() {
      this.removeAllListeners();
      this.queue = [];
      this.pendingTask.clear();
      this.running = 0;
    }
    constructor(e = imageFetchSchedulerConfig.fetchLimit, t = imageFetchSchedulerConfig.fetchFrequency) {
      super(e, t);
      j(this, "queue", []);
      j(this, "pendingTask", new Map());
    }
  }
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  class A extends Map {
    async _fetchResource(e) {
      return this.fetchResource(e).then(t => (t == null ? undefined : t.src) ? g(e, "data", t) : (p(e, "data", "resource src is empty"), t));
    }
    async fetch(e) {
      await this.prepare(e, true);
      if (Array.isArray(e)) {
        return Promise.all(e.map(e => this._fetchResource(e)));
      } else {
        return this._fetchResource(e);
      }
    }
  }
  var opendocImageViewerUtils = require("opendoc-image-viewer-utils") /*id: 356868*/;
  var asyncRetryUtils_1 = require("async-retry-utils_1") /*id: 989891*/;
  class U extends A {
    async prepare(e, t) {
      let r;
      try {
        var i;
        r = await ((i = this.getAuthToken) === null || i === undefined ? undefined : i.call(this));
      } catch {}
      if (Array.isArray(e)) {
        return d(e, !t, r);
      } else {
        return (await d([e], !t, r))[0];
      }
    }
    async fetchResource(e) {
      let {
        cdnConfig: t,
        logger: r
      } = e;
      try {
        if (!t) {
          throw Error("invalid cdn config");
        }
        let {
          cdnUrl: e,
          needDecrypt: i,
          key: n,
          iv: s,
          extra: a
        } = await t;
        if (!e) {
          throw Error("cdn url is empty");
        }
        try {
          r.logFetchCdnStart();
          let {
            imageArrayBuffer: t,
            originRes: i
          } = await documentImageUtils.fetchImageBuffer(e, {
            timeout: imageFetchSchedulerConfig.defaultInterval
          });
          let n = i.headers.get("x-tt-logid");
          let s = i.headers.get("x-request-id");
          r.logFetchCdnEnd(t, {
            logId: n,
            requestId: s
          });
          r.logNoNeedDecrypt();
          if (a == null ? undefined : a.cover) {
            let [e] = await asyncRetryUtils_1.safeAsyncExec(async () => {
              let {
                imageArrayBuffer: e
              } = await documentImageUtils.fetchImageBuffer(a.cover, {
                timeout: imageFetchSchedulerConfig.defaultInterval
              });
              return documentImageUtils.createBlobUrl(e);
            });
            a.cover = e || a.cover;
          }
          return {
            src: documentImageUtils.createBlobUrl(t),
            originSrc: e,
            extra: a
          };
        } catch (i) {
          let t = e;
          let r = t;
          if (opendocImageViewerUtils.isOpendoc) {
            r = t;
            t = await documentImageUtils.fetchBlobUrl(t);
          }
          return {
            src: t,
            originSrc: r
          };
        }
      } catch (e) {
        return {
          src: xssContentSanitizer.sanitizeUrl("", null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WmhWekZv$2pK$mR*cHRWakJaTW1oc1kyaz$S$050-kRK-$ZXeDBX$mRr-kZKdFZqQlpNbWhzWTJrMWRWcFlZM1Zr%0%1b1kyMWtN$04z%FQwPQ"
          }),
          originSrc: ""
        };
      }
    }
    getProfile() {
      return {
        cache: this.size
      };
    }
    delete(e) {
      let t = isStringTypeCheck.isString(e) ? e : l(e);
      let r = this.get(t);
      return !!r && !!super.delete(t) && !!r.data && (m(r.data), true);
    }
    clear() {
      this.forEach(e => m(e.data));
      super.clear();
    }
    constructor(e) {
      super();
      this.getAuthToken = e;
    }
  }
  var idleCallbackPolyfill_1 = require("idle-callback-polyfill_1") /*id: 55404*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var blobUrlUtils = require("blob-url-utils") /*id: 334362*/;
  function H(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let Q = new URLSearchParams(location.search);
  class X {
    getLogger(e) {
      return this.logger.get(e) || new k(e);
    }
    async preload(e) {
      let t = await this.preTaskCreator.create(e);
      let r = async () => {
        if (e.length <= 0 || blobUrlCacheManager.BlobUrlCacheManager.couldCacheCount <= 0) {
          return;
        }
        let t = e.shift();
        if (t) {
          await this.resTaskCreator.create(t);
        }
        idleCallbackPolyfill_1.requestIdleCallback(r);
      };
      idleCallbackPolyfill_1.requestIdleCallback(r);
      return t;
    }
    fetch(e, t, r) {
      let i = this.getLogger(e.uuid);
      let n = this.resTaskCreator.create({
        ...e,
        logger: i,
        uuid: e.uuid
      });
      this.addGlobalBlockingTask(n);
      return n.then(t => {
        let {
          src: n
        } = t;
        if (blobUrlUtils.isBlobUrl(n)) {
          this.blobRef.add(n, e.uuid);
        }
        let {
          logId: s,
          requestId: a,
          ...u
        } = i.fetchStatus;
        i.destroy();
        return r({
          ...t,
          fetchCdnLogStatus: u,
          logId: s,
          requestId: a
        });
      });
    }
    buzz(e, t) {
      this.scheduler.buzz(e, t);
    }
    profile() {
      return {
        time_origin: window.performance.timeOrigin,
        init: this.init,
        ...this.scheduler.getProfile(),
        ...this.fetcher.getProfile(),
        bpms: this.bpms
      };
    }
    async delete(e, t) {
      let r = l(e);
      let i = this.fetcher.get(r);
      if (i == null ? undefined : i.data) {
        await i.data;
        if ("src" in i.data && blobUrlUtils.isBlobUrl(i.data.src) && this.blobRef.remove(i.data.src, t || e.uuid)) {
          this.scheduler.delete(e);
        }
      }
    }
    destroy() {
      this.fetcher.clear();
      this.scheduler.clear();
    }
    get fetchers() {
      return this.fetcher;
    }
    constructor(e) {
      this.getAuthToken = e;
      H(this, "init", Date.now());
      H(this, "fetcher", undefined);
      H(this, "scheduler", new L(parseInt(Q.get("IMAGE_FETCHER_SCHEDULER_LIMIT")) || function (e) {
        let r = v();
        return moduleReExportWrapper.wrappedModule(Object.entries(e), e => {
          let [t] = e;
          return r >= t;
        })?.[1];
      }(imageFetchSchedulerConfig.breakpointMap), parseInt(Q.get("IMAGE_FETCHER_SCHEDULER_FREQUENCY")) || undefined));
      H(this, "blobRef", new _());
      H(this, "logger", new Map());
      H(this, "preTaskCreator", undefined);
      H(this, "resTaskCreator", undefined);
      H(this, "fetchCdnInfos", this.preload.bind(this));
      H(this, "addGlobalBlockingTask", debounceUtilWrapper.createDebounce(e => docxTaskSchedulerUtilities.taskSchedulerInstance.scheduler.addBlockingTask({
        name: "image-fetcher",
        action: () => e
      }), imageFetchSchedulerConfig.maxTimeslice, {
        leading: true
      }));
      H(this, "bpms", v());
      this.fetcher = new U(this.getAuthToken);
      this.preTaskCreator = new T(this.scheduler, this.fetcher, this);
      this.resTaskCreator = new Z(this.scheduler, this.fetcher, this);
    }
  }
  require.r(exports);
  require.d(exports, {
    DriveImageFetcherManager: function () {
      return X;
    }
  });
}