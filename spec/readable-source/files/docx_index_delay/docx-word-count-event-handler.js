// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'platformDocUtils'
// - Resolved require(726907) to 'platform-doc-utils'
// - Renamed variable 'n' to 'unicodeRegexGenerator'
// - Resolved require(725807) to 'unicode-regex-generator'
// - Renamed variable '_' to 'docBlockTextExtractorAndCounter'
// - Resolved require(813142) to 'doc-block-text-extractor-and-counter'
// - Updated imported property 'Rn' to 'getDocumentWordCount' (module 813142)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_index_delay.3c55e6b1.js
         * chunkId: 82165
         * moduleId: 1852
         */
module.exports = function (module, exports, require) {
  var o;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var unicodeRegexGenerator = require("unicode-regex-generator") /*id: 725807*/;
  var s = unicodeRegexGenerator;
  (o = {}).HANDLE_DOCX_WORD_COUNT = "HANDLE_DOCX_WORD_COUNT";
  o.SEND_DOCX_WORD_COUNT = "SEND_DOCX_WORD_COUNT";
  let u = o;
  function l(e, i, r) {
    var o;
    if ((i = typeof (o = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, i || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? o : o + "") in e) {
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
  s().addRange(0, 1114111).removeRange(19968, 40869).removeRange(40870, 40907).removeRange(13312, 19893).removeRange(131072, 173782).removeRange(173824, 177972).removeRange(177984, 178205).removeRange(12032, 12245).removeRange(11904, 12019).removeRange(63744, 64217).removeRange(194560, 195101).removeRange(59413, 59503).removeRange(58368, 58856).removeRange(58880, 59087).removeRange(12736, 12771).removeRange(12272, 12283).removeRange(12549, 12576).removeRange(12704, 12730).removeRange(65, 90).removeRange(97, 122).removeRange(48, 57).remove(39);
  s().addRange(19968, 40869).addRange(40870, 40907).addRange(13312, 19893).addRange(131072, 173782).addRange(173824, 177972).addRange(177984, 178205).addRange(12032, 12245).addRange(11904, 12019).addRange(63744, 64217).addRange(194560, 195101).addRange(59413, 59503).addRange(58368, 58856).addRange(58880, 59087).addRange(12736, 12771).addRange(12272, 12283).addRange(12549, 12576).addRange(12704, 12730);
  class c {
    bindEvent() {
      var e;
      platformDocUtils.vpe.on(u.HANDLE_DOCX_WORD_COUNT, this.handelCount);
      this.sub = (e = this.blockManager.lazyRecordStatus) === null || e === undefined ? undefined : e.applyAllDone$.subscribe(this.handleAllDone);
    }
    unBindEvent() {
      var e;
      platformDocUtils.vpe.off(u.HANDLE_DOCX_WORD_COUNT, this.handelCount);
      if ((e = this.sub) !== null && e !== undefined) {
        e.unsubscribe();
      }
    }
    constructor(e, i) {
      l(this, "getCountStats", undefined);
      l(this, "blockManager", undefined);
      l(this, "sub", undefined);
      l(this, "handleAllDone", () => {
        platformDocUtils.vpe.emit("clientvar_fetch_all_done");
      });
      l(this, "handelCount", () => {
        if (this.blockManager.editorAPI.isDestroyed()) {
          this.unBindEvent();
          return;
        }
        let e = this.getCountStats();
        platformDocUtils.vpe.emit(u.SEND_DOCX_WORD_COUNT, e);
      });
      this.getCountStats = e;
      this.blockManager = i;
    }
  }
  var docBlockTextExtractorAndCounter = require("doc-block-text-extractor-and-counter") /*id: 813142*/;
  function d(e, i, r) {
    var o;
    if ((i = typeof (o = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, i || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? o : o + "") in e) {
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
  class p {
    destroy() {
      this.detailEvent.unBindEvent();
    }
    constructor({
      blockManager: e
    }) {
      d(this, "blockManager", undefined);
      d(this, "detailEvent", undefined);
      d(this, "bindEvent", () => {
        this.detailEvent.bindEvent();
      });
      d(this, "handleCount", () => docBlockTextExtractorAndCounter.getDocumentWordCount(this.blockManager));
      this.blockManager = e;
      this.detailEvent = new c(this.handleCount, e);
      this.bindEvent();
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return p;
    }
  });
}