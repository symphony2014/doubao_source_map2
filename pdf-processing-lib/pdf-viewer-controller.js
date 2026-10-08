// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PdfViewerController'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 153449
         */
module.exports = function (module, exports, require) {
  var invariantCheck = require("invariant-check") /*id: 415427*/;
  let n = "noopener noreferrer nofollow";
  class o {
    constructor() {
      this.externalLinkEnabled = true;
      this.externalLinkRel = undefined;
      this.externalLinkTarget = undefined;
      this.isInPresentationMode = false;
      this.pdfDocument = undefined;
      this.pdfViewer = undefined;
    }
    setDocument(t) {
      this.pdfDocument = t;
    }
    setViewer(t) {
      this.pdfViewer = t;
    }
    setExternalLinkRel(t) {
      this.externalLinkRel = t;
    }
    setExternalLinkTarget(t) {
      this.externalLinkTarget = t;
    }
    setHistory() {}
    get pagesCount() {
      if (this.pdfDocument) {
        return this.pdfDocument.numPages;
      } else {
        return 0;
      }
    }
    get page() {
      invariantCheck.invariant(this.pdfViewer, "PDF viewer is not initialized.");
      return this.pdfViewer.currentPageNumber || 0;
    }
    set page(t) {
      invariantCheck.invariant(this.pdfViewer, "PDF viewer is not initialized.");
      this.pdfViewer.currentPageNumber = t;
    }
    get rotation() {
      return 0;
    }
    set rotation(t) {}
    goToDestination(t) {
      return new Promise(e => {
        invariantCheck.invariant(this.pdfDocument, "PDF document not loaded.");
        invariantCheck.invariant(t, "Destination is not specified.");
        if (typeof t == "string") {
          this.pdfDocument.getDestination(t).then(e);
        } else if (Array.isArray(t)) {
          e(t);
        } else {
          t.then(e);
        }
      }).then(t => {
        invariantCheck.invariant(Array.isArray(t), `"${t}" is not a valid destination array.`);
        let e = t[0];
        new Promise(t => {
          invariantCheck.invariant(this.pdfDocument, "PDF document not loaded.");
          if (e instanceof Object) {
            this.pdfDocument.getPageIndex(e).then(e => {
              t(e);
            }).catch(() => {
              invariantCheck.invariant(false, `"${e}" is not a valid page reference.`);
            });
          } else if (typeof e == "number") {
            t(e);
          } else {
            invariantCheck.invariant(false, `"${e}" is not a valid destination reference.`);
          }
        }).then(e => {
          let r = e + 1;
          invariantCheck.invariant(this.pdfViewer, "PDF viewer is not initialized.");
          invariantCheck.invariant(r >= 1 && r <= this.pagesCount, `"${r}" is not a valid page number.`);
          this.pdfViewer.scrollPageIntoView({
            dest: t,
            pageIndex: e,
            pageNumber: r
          });
        });
      });
    }
    navigateTo(t) {
      this.goToDestination(t);
    }
    goToPage(t) {
      let e = t - 1;
      invariantCheck.invariant(this.pdfViewer, "PDF viewer is not initialized.");
      invariantCheck.invariant(t >= 1 && t <= this.pagesCount, `"${t}" is not a valid page number.`);
      this.pdfViewer.scrollPageIntoView({
        pageIndex: e,
        pageNumber: t
      });
    }
    addLinkAttributes(t, e, r) {
      t.href = e;
      t.rel = this.externalLinkRel || n;
      t.target = r ? "_blank" : this.externalLinkTarget || "";
    }
    getDestinationHash() {
      return "#";
    }
    getAnchorUrl() {
      return "#";
    }
    setHash() {}
    executeNamedAction() {}
    cachePageRef() {}
    isPageVisible() {
      return true;
    }
    isPageCached() {
      return true;
    }
    executeSetOCGState() {}
  }
  require.d(exports, {
    PdfViewerController: function () {
      return o;
    }
  });
}