// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A5' to 'handlePdfPagination'
// - Renamed export 'mH' to 'injectBreakStyles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 691369
         */
module.exports = function (module, exports, require) {
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  var docxBlockTypeConstants_1 = require("docx-block-type-constants_1") /*id: 928355*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  docxShortcutFeatureDetection.shortcutDebug;
  let s = localStorage.getItem("isPDFDebug") === "true";
  let a = function (e = docxBlockTypeConstants_1.pdfExtension) {
    return [...docxBlockTypeConstants_1.blockTypeSelectors].map(i => `${e} ${docxBlockTypeConstants_1.docxPageBlockExt} ${i}`).join(",");
  };
  let c = function (e = document.head, i) {
    let r = a(i);
    if (!r) {
      return;
    }
    let n = document.createElement("style");
    let o = `${r} {
    page-break-inside: avoid;
    page-break-before: auto;
    page-break-after: auto;
  }`;
    n.textContent = o;
    e.appendChild(n);
  };
  let d = () => {
    document.querySelectorAll(".list").forEach(e => {
      let i = e.getBoundingClientRect();
      e.style.height = `${i.height}px`;
    });
  };
  let u = () => {
    if (!docxShortcutFeatureDetection.isPDFMode()) {
      return 1;
    }
    d();
    let {
      container: e,
      height: i
    } = docxShortcutFeatureDetection.getContainerDimensions();
    docxShortcutFeatureDetection.debugLogger("pageHeight", docxBlockTypeConstants_1.getInchWidth, i);
    let r = 0;
    let c = a();
    let u = window.document.querySelectorAll(c);
    docxShortcutFeatureDetection.debugLogger("calcAddOffset sort start length", u.length);
    let h = throttledOrderByUtil.throttledOrderBy(u, e => e.getBoundingClientRect().top);
    docxShortcutFeatureDetection.debugLogger("calcAddOffset sort end");
    h.forEach((e, n) => {
      let o = e.getBoundingClientRect();
      let a = o.top + r;
      let c = Math.ceil(a / i);
      let d = c * i;
      let u = d - a;
      if (o.height > i) {
        return;
      }
      e.classList.add("pdf-avoid-break");
      let p = window.getComputedStyle(e);
      let f = parseFloat(p.marginBottom) || 0;
      let g = parseFloat(p.marginTop) || 0;
      let m = o.bottom + r - d;
      let v = a - (c - 1) * i;
      if (m > 0) {
        r += u;
        if (s) {
          e.style.backgroundColor = "red";
          docxShortcutFeatureDetection.debugLogger("height", u);
        }
      } else if (g > 0 && v <= g) {
        r -= v;
      } else if (m + f > 0 && n < h.length - 1) {
        let i = e.nextElementSibling && window.getComputedStyle(e.nextElementSibling);
        let n = parseFloat((i == null ? undefined : i.marginTop) || "0") || 0;
        r -= Math.max(f, n) + m;
      }
    });
    docxShortcutFeatureDetection.debugLogger("calcAddOffset whiteOffset", r);
    let p = document.querySelector(".page-block .root-render-unit-container>.render-unit-wrapper");
    if (r > 0 && p) {
      p.style.minHeight = `${r + p.offsetHeight}px`;
      if (s) {
        p.style.borderBottom = "1px solid #ccc";
      }
      docxShortcutFeatureDetection.debugLogger("minHeight", p.style.minHeight);
    }
    let f = (p == null ? undefined : p.getBoundingClientRect().bottom) || i;
    if (f < i) {
      e.style.minHeight = `${f}px`;
    }
    return Math.ceil(e.offsetHeight / i);
  };
  require.d(exports, {
    handlePdfPagination: function () {
      return u;
    },
    injectBreakStyles: function () {
      return c;
    }
  });
}