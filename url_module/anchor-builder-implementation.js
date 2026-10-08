// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'o' to 'docxImageViewerUtils'
// - Resolved require(200311) to 'docx-image-viewer-utils'
// - Renamed variable 'u' to 'anchorBuilderToken'
// - Resolved require(729431) to 'anchor-builder-token'
// - Updated imported property 'DF' to 'Provide' (module 555385)
// - Updated imported property 'f' to 'anchorBuilderToken' (module 729431)
// - Updated imported property 'lw' to 'isTranslated' (module 200311)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: url_module.89960f7c.js
         * chunkId: 73726
         * moduleId: 443331
         */
module.exports = function (module, exports, require) {
  var n;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxImageViewerUtils = require("docx-image-viewer-utils") /*id: 200311*/;
  var anchorBuilderToken = require("anchor-builder-token") /*id: 729431*/;
  function l(t, r, e) {
    var n;
    if ((r = typeof (n = function (t, r) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var e = t[Symbol.toPrimitive];
      if (e !== undefined) {
        var n = e.call(t, r || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(t);
    }(r, "string")) == "symbol" ? n : n + "") in t) {
      Object.defineProperty(t, r, {
        value: e,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[r] = e;
    }
    return t;
  }
  let s = dependencyInjectionContainer.Provide(anchorBuilderToken.anchorBuilderToken)(n = class {
    injectGetAndhorLink(t) {
      this.customGetAndhorLink = t;
    }
    getAnchor(t) {
      return (this.customGetAndhorLink || this.defaultGetAndhorLink)(t);
    }
    constructor() {
      l(this, "customGetAndhorLink", null);
      l(this, "defaultGetAndhorLink", t => docxImageViewerUtils.isTranslated(t));
    }
  }) || n;
  require.r(exports);
  require.d(exports, {
    AnchorBuilderImpl: function () {
      return s;
    }
  });
}