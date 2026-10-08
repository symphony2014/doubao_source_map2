// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$D' to 'calculateImageContainerStyle'
// - Renamed export 'PA' to 'calculateCroppedWidth'
// - Renamed export 'TR' to 'calculateCropTransformStyle'
// - Renamed export 'qF' to 'calculateCroppedDimensions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 304247
         */
module.exports = function (module, exports, require) {
  var docxEditorConstants = require("docx-editor-constants") /*id: 708986*/;
  var docxEditorPaddingUtils = require("docx-editor-padding-utils") /*id: 656664*/;
  function l(e, n, r, o) {
    let {
      width: i,
      height: l
    } = n;
    if (!r) {
      return {
        ...o,
        width: i,
        paddingTop: `${(l / i * 100).toFixed(4)}%`
      };
    }
    let {
      width: c,
      height: a
    } = u(e, n);
    return {
      ...o,
      width: c,
      paddingTop: `${(a / c * 100).toFixed(4)}%`
    };
  }
  function c(e, n = false, r) {
    if (docxEditorPaddingUtils.isPaddingPartial(e.crop) && !n) {
      let {
        maxWidth: n,
        maxHeight: i,
        transformOriginX: l,
        transformOriginY: c,
        translateX: u,
        translateY: a
      } = function (e) {
        let {
          crop: n = docxEditorConstants.editorPadding
        } = e;
        let [r, i, l, c] = n;
        return {
          maxWidth: (1 / (l - r) * 100).toFixed(4),
          maxHeight: (1 / (c - i) * 100).toFixed(4),
          transformOriginX: ((l + r) / 2 * 100).toFixed(4),
          transformOriginY: ((c + i) / 2 * 100).toFixed(4),
          translateX: (-(r * 100)).toFixed(4),
          translateY: (-(i * 100)).toFixed(4)
        };
      }(e);
      return {
        ...r,
        maxWidth: `${n}%`,
        maxHeight: `${i}%`,
        transformOrigin: `${l}% ${c}%`,
        transform: `translate(${u}%, ${a}%)`
      };
    }
    return r ?? {};
  }
  function u(e, n) {
    let r;
    let l;
    if (n) {
      [r, l] = [n.width, n.height];
    } else {
      [r, l] = [e.width, e.height];
    }
    if (!docxEditorPaddingUtils.isPaddingPartial(e.crop)) {
      return n ?? {
        width: r,
        height: l
      };
    }
    let {
      crop: c = docxEditorConstants.editorPadding
    } = e;
    let [u, a, s, d] = c;
    return {
      width: Number((r * (s - u)).toFixed(4)),
      height: Number((l * (d - a)).toFixed(4))
    };
  }
  function a(e, n) {
    if (docxEditorPaddingUtils.isPaddingPartial(n)) {
      return Number((e * (n[2] - n[0])).toFixed(4));
    } else {
      return e;
    }
  }
  require.d(exports, {
    calculateImageContainerStyle: function () {
      return l;
    },
    calculateCroppedWidth: function () {
      return a;
    },
    calculateCropTransformStyle: function () {
      return c;
    },
    calculateCroppedDimensions: function () {
      return u;
    }
  });
}