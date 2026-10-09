// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PdfThumbnail'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 826504
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classNamesUtil = require("class-names-util") /*id: 953283*/;
  var invariantCheck = require("invariant-check") /*id: 415427*/;
  var pdfPageComponent = require("pdf-page-component") /*id: 75002*/;
  var pdfRendererUtils = require("pdf-renderer-utils") /*id: 665248*/;
  var usePatchContext = require("use-patch-context") /*id: 48138*/;
  function h(t, e) {
    var r = {};
    for (var i in t) {
      if (Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0) {
        r[i] = t[i];
      }
    }
    if (t != null && typeof Object.getOwnPropertySymbols == "function") {
      var n = 0;
      var i = Object.getOwnPropertySymbols(t);
      for (; n < i.length; n++) {
        if (e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n])) {
          r[i[n]] = t[i[n]];
        }
      }
    }
    return r;
  }
  let c = function (t) {
    let {
      className: e,
      linkService: r,
      onItemClick: c,
      pageIndex: u,
      pageNumber: d,
      pdf: f
    } = Object.assign(Object.assign({}, usePatchContext.usePatchContext()), t);
    invariantCheck.invariant(f, "Attempted to load a thumbnail, but no document was specified. Wrap <Thumbnail /> in a <Document /> or pass explicit `pdf` prop.");
    let p = pdfRendererUtils.isNotNullish(d) ? d - 1 : u ?? null;
    let g = d ?? (pdfRendererUtils.isNotNullish(u) ? u + 1 : null);
    function m(t) {
      t.preventDefault();
      if (pdfRendererUtils.isNotNullish(p) && g) {
        invariantCheck.invariant(c || r, "Either onItemClick callback or linkService must be defined in order to navigate to an outline item.");
        if (c) {
          c({
            pageIndex: p,
            pageNumber: g
          });
        } else if (r) {
          r.goToPage(g);
        }
      }
    }
    let {
      className: v,
      onItemClick: y
    } = t;
    let b = h(t, ["className", "onItemClick"]);
    return reactCoreLibraryReexport.createElement("a", {
      className: classNamesUtil.classNames_1("react-pdf__Thumbnail", e),
      href: g ? "#" : undefined,
      onClick: m
    }, reactCoreLibraryReexport.createElement(pdfPageComponent.PdfPage, Object.assign({}, b, {
      _className: "react-pdf__Thumbnail__page",
      _enableRegisterUnregisterPage: false,
      renderAnnotationLayer: false,
      renderTextLayer: false
    })));
  };
  exports.PdfThumbnail = c;
}