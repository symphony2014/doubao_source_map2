// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fu' to 'isGifMimeType'
// - Renamed export 'Jl' to 'clampOffsetValue'
// - Renamed export 'Q4' to 'buildCoverUrlParams'
// - Renamed export 'TR' to 'getCoverLayout'
// - Renamed export 'Vd' to 'getOffsetRatio'
// - Renamed export 'eT' to 'getDocxCoverHeight'
// - Renamed export 'jW' to 'resolveSsrImageUrl'
// - Renamed export 'mQ' to 'isFeatureSupported'
// - Renamed export 'w0' to 'isSameUrlOriginPath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 326877
         */
module.exports = function (module, exports, require) {
  require("xss-content-sanitizer") /*id: 508971*/;
  var docxCaptionConfig = require("docx-caption-config") /*id: 338988*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var coverImageUrlUtils = require("cover-image-url-utils") /*id: 604470*/;
  function s(e, i) {
    let r = e ? new URL(coverImageUrlUtils.getCoverThumbnailUrl(e)) : "";
    if (i && r) {
      let {
        searchParams: e
      } = r;
      Object.keys(i).forEach(r => {
        e.append(r, i[r]);
      });
    }
    return r.toString();
  }
  function a(e, i) {
    try {
      let r = new URL(e);
      let n = new URL(i);
      return r.origin === n.origin && r.pathname === n.pathname;
    } catch (e) {
      return false;
    }
  }
  function c(e, i, r) {
    let n = e;
    if (n > 0) {
      n = 0;
    }
    if (n < -(i - r)) {
      n = -(i - r);
    }
    return Number(n.toFixed(0));
  }
  function d(e, i, r) {
    return Number((((e || 0) + (i - r) / 2) / i).toFixed(6));
  }
  function u(e, i, r) {
    let n;
    let o;
    let l;
    if (!e || !i) {
      return {};
    }
    let {
      offset_ratio_x: s = 0,
      offset_ratio_y: a = 0
    } = e;
    let d = i.naturalWidth;
    let u = i.naturalHeight;
    if (!d || !u) {
      return {};
    }
    let h = Number((d / u).toFixed(6));
    let f = (r == null ? undefined : r.width) || document.documentElement.clientWidth;
    let g = (r == null ? undefined : r.height) || document.documentElement.clientHeight * 0.27;
    let p = 0;
    let m = 0;
    if (h > f / g) {
      n = g / u;
      l = g;
      p = c(p = -((o = d * n) - f) / 2 + s * o, o, f);
    } else {
      n = Number((f / d).toFixed(6));
      o = f;
      m = c(m = -((l = u * n) - g) / 2 + a * l, l, g);
    }
    return {
      width: Number(o.toFixed(0)),
      height: Number(l.toFixed(0)),
      marginLeft: Number(p.toFixed(0)),
      marginTop: Number(m.toFixed(0))
    };
  }
  function h(e) {
    return e === "image/gif";
  }
  function f(e) {
    if (!(e = syncedReferenceBlockUtils.getMainDocxBlockManager(e.editorAPI) || e).getRecord(e.getRootRecordId()).snapshot.cover) {
      return 0;
    }
    let i = document.querySelector(`.${docxCaptionConfig.wrapperClass}`);
    if (i) {
      return i.clientHeight;
    } else {
      return 0;
    }
  }
  function g(e) {
    if (!e) {
      return null;
    }
    let i = new URL(e);
    let {
      opendocSSRImage: r
    } = window;
    if (r) {
      let e = Object.keys(r).find(e => e.match(i.pathname));
      if (e) {
        return r[e];
      } else {
        return null;
      }
    }
    return null;
  }
  function p() {
    return false;
  }
  require.d(exports, {
    isGifMimeType: function () {
      return h;
    },
    clampOffsetValue: function () {
      return c;
    },
    buildCoverUrlParams: function () {
      return s;
    },
    getCoverLayout: function () {
      return u;
    },
    getOffsetRatio: function () {
      return d;
    },
    getDocxCoverHeight: function () {
      return f;
    },
    resolveSsrImageUrl: function () {
      return g;
    },
    isFeatureSupported: function () {
      return p;
    },
    isSameUrlOriginPath: function () {
      return a;
    }
  });
}