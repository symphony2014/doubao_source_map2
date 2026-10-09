// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'docxSignalService'
// - Renamed export 'U' to 'DocxSignalRegistry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 272418
         */
module.exports = function (module, exports, require) {
  var docxSignalServiceProvider = require("docx-signal-service-provider") /*id: 812434*/;
  var subjectTypeRegistry = require("subject-type-registry") /*id: 736379*/;
  function a(e, n, r) {
    var i;
    if ((n = typeof (i = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, n || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? i : i + "") in e) {
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
  class u extends subjectTypeRegistry.SubjectTypeRegistry {
    constructor(...e) {
      super(...e);
      a(this, "editorAnimationDisableSignal", this.register());
      a(this, "catalogueActiveUpdateSignal", this.register());
      a(this, "hoverCatalogueSignal", this.register());
      a(this, "performHideAnimationSignal", this.register());
      a(this, "catalogueUpdateSignal", this.register());
      a(this, "hoverBlockToolbox", this.register());
      a(this, "mobileImageDeleteSignal", this.register());
      a(this, "mobileImageAddSignal", this.register());
      a(this, "coverIntersectionChangeSignal", this.register());
      a(this, "editorAnimationStartSignal", this.register());
      a(this, "editorAnimationEndSignal", this.register());
      a(this, "translateMouseOverSignal", this.register());
      a(this, "translateMouseLeaveSignal", this.register());
      a(this, "translateRetrySignal", this.register());
      a(this, "transalteBufferChangeSignal", this.register());
      a(this, "iosWebViewSizeChangeSignal", this.register());
      a(this, "catalogueBoundaryIntersectionSignal", this.register());
      a(this, "commentsUpdateSignal", this.register());
      a(this, "syncedReferenceBlockSelectionChangeSignal", this.register());
      a(this, "AIRecommendQuestionFetchSignal", this.register());
      a(this, "switchDocsModeSignal", this.register());
      a(this, "globalComponentSignal", this.register());
    }
  }
  require.d(exports, {
    docxSignalService: function () {
      return docxSignalServiceProvider.docxSignalService;
    },
    DocxSignalRegistry: function () {
      return u;
    }
  });
}