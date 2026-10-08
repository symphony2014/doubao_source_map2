// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'isCacheable'
// - Renamed export 'Z' to 'BlobUrlCacheManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 865553
         */
module.exports = function (module, exports, require) {
  var docxImageUrlUtils = require("docx-image-url-utils") /*id: 219802*/;
  var limitedCacheManager = require("limited-cache-manager") /*id: 861263*/;
  function l(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  function s(e) {
    let {
      fuzzy: i,
      mimeType: r
    } = e;
    return !i && !docxImageUrlUtils.isGifImage(r);
  }
  exports.BlobUrlCacheManager = new class {
    get couldCacheCount() {
      return 70 - this.couldBeCacheMap.size;
    }
    isBlobURLCouldBeCache(e) {
      return !!this.couldBeCacheMap.get(e);
    }
    enableCacheRequest(e) {
      this.couldBeCacheMap.set(e, true);
    }
    getBlobURL(e) {
      return this.blobURLCache.get(e);
    }
    setBlobURLToCache(e, i) {
      this.blobURLCache.set(e, i);
    }
    destroy() {
      this.blobURLCache.clear();
      this.couldBeCacheMap.clear();
    }
    onAutoDeleteBlobURL(e, i) {
      URL.revokeObjectURL(i);
    }
    init() {
      this.blobURLCache.onAutoDelete(this.onAutoDeleteBlobURL);
    }
    constructor() {
      l(this, "blobURLCache", new limitedCacheManager.LimitedCache(70));
      l(this, "couldBeCacheMap", new limitedCacheManager.LimitedCache(70));
      this.init();
    }
  }();
  require.d(exports, {
    isCacheable: function () {
      return s;
    }
  });
}