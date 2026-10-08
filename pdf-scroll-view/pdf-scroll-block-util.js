// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'gM' to 'getTranslateBlocks'
// - Renamed export 'tt' to 'filterTextBlocks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 519275
         */
module.exports = function (module, exports, require) {
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var pdfViewConfigConstants = require("pdf-view-config-constants") /*id: 676477*/;
  let l = e => /^[\d\s+\-*/^()[\].]+$/.test(e);
  let i = e => !e || !!l(e);
  let o = e => {
    let {
      blocks: t,
      pages: n,
      showTranslateImage: l
    } = e;
    let o = pdfViewConfigConstants.supportedElementTypes.filter(e => e !== "image" || !l);
    return {
      translateBlocks: safeArrayFlattenUtil.safeFlattenArray(t == null ? undefined : t.filter(e => {
        var t;
        return n.includes(e.page) && !o.includes(e.label || "") && ((t = e.text) === null || t === undefined ? undefined : t.trim());
      }).map(e => {
        if (e.label === "image" && e.textlines) {
          var t;
          if ((t = e.textlines) === null || t === undefined) {
            return undefined;
          } else {
            return t.map(t => ({
              ...e,
              label: "image_text",
              norm_box: function (e, t) {
                let n = (e == null ? undefined : e.x0) || 0;
                let r = (e == null ? undefined : e.x1) || 0;
                let a = (e == null ? undefined : e.y0) || 0;
                let l = (e == null ? undefined : e.y1) || 0;
                let i = r - n;
                let o = l - a;
                return {
                  x0: n + i * ((t == null ? undefined : t.x0) || 0),
                  x1: n + i * ((t == null ? undefined : t.x1) || 0),
                  y0: a + o * ((t == null ? undefined : t.y0) || 0),
                  y1: a + o * ((t == null ? undefined : t.y1) || 0)
                };
              }(e.norm_box, t.norm_box),
              text: t.text || ""
            })).filter(e => {
              let {
                text: t
              } = e;
              return !!t;
            });
          }
        }
        return e;
      })).filter(e => !i(e.text))
    };
  };
  let s = e => {
    let {
      blocks: t,
      pages: n,
      showTranslateImage: l
    } = e;
    let o = pdfViewConfigConstants.supportedElementTypes.filter(e => e !== "image" && e !== "table" || !l);
    return {
      translateBlocks: safeArrayFlattenUtil.safeFlattenArray(t == null ? undefined : t.filter(e => {
        var t;
        return n.includes(e.page) && !o.includes(e.label || "") && ((t = e.text) === null || t === undefined ? undefined : t.trim());
      })).filter(e => !i(e.text))
    };
  };
  require.d(exports, {
    getTranslateBlocks: function () {
      return o;
    },
    filterTextBlocks: function () {
      return s;
    }
  });
}