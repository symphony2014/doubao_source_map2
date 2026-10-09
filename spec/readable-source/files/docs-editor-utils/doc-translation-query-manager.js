// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T8' to 'translationQuery'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 340349
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docTranslationBlockConfig = require("doc-translation-block-config") /*id: 391959*/;
  let {
    cleanParamFromSearch: l
  } = platformDocUtils.o0s;
  function c(e, n, r) {
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
  let {
    parseQuery: u
  } = platformDocUtils.o0s;
  let a = "translation_mode";
  let s = [a, "language_type", "is_standard"];
  let d = new class {
    init() {
      let e = u(location.search);
      if (!e || this.isInit) {
        return;
      }
      let n = s.filter(n => e[n] !== undefined);
      if (n.length) {
        this.isInit = true;
        l(location.href, n);
        n.forEach(n => {
          this.map.set(n, e[n]);
        });
      }
    }
    get(e) {
      return this.map.get(e);
    }
    isFromMessage() {
      return this.map.get(a) === docTranslationBlockConfig.jumpModeConstants.JUMP_TO_TRANSLATE;
    }
    clear() {
      this.map.clear();
    }
    constructor() {
      c(this, "map", new Map());
      c(this, "isInit", false);
    }
  }();
  require.d(exports, {
    translationQuery: function () {
      return d;
    }
  });
}