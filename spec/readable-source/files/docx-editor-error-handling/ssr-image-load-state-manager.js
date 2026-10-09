// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'getImageLoadState'
// - Renamed export 't' to 'initializeSSRImageLoadStates'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 181276
         */
module.exports = function (module, exports, require) {
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docxImageUrlUtils = require("docx-image-url-utils") /*id: 219802*/;
  var storeCoverActionsMap = require("store-cover-actions-map") /*id: 535604*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let u = new Map();
  let h = {
    imgLoaded: false,
    lightLoaded: false
  };
  function f(e) {
    return !!e && e.complete && (!isNumberUtil.isNumber(e.naturalWidth) || e.naturalWidth > 0);
  }
  function g(e, i) {
    let r = i.querySelector("img");
    let n = r == null ? undefined : r.src;
    if (docxImageUrlUtils.isImageStreamUrl(n)) {
      u.set(e, {
        src: n,
        loaded: f(r)
      });
    }
  }
  function p() {
    (function () {
      let e = document.querySelector(docxEditorConstantsConfig.ssrBoxContainer);
      if (e) {
        e.querySelectorAll(".docx-image-block").forEach(e => {
          let i = e.getAttribute("data-record-id");
          let r = e.getAttribute("data-block-type");
          if (i && r === docBlockTypeConstants.blockTypeConstants.IMAGE) {
            g(i, e);
          }
        });
      }
    })();
    (function () {
      let e = document.querySelector("#ssrBox");
      let i = e == null ? undefined : e.querySelector(".ssr-cover");
      let r = i == null ? undefined : i.querySelector(".ssr-cover-image-container");
      if (i && r) {
        let e = r.querySelector(".ssr-cover-cover-image");
        let i = r.querySelector(".ssr-cover-hd-image");
        let o = window.finalSSRCoverInfo || null;
        if (o) {
          h.imgLoaded = f(i);
          h.lightLoaded = f(e);
          h.coverInfo = deepCloneWrapper_1.deepClone(o);
          if (o) {
            reduxStoreInitializer.reduxStore.dispatch(storeCoverActionsMap.setCoverInfo(o));
          }
        }
      }
    })();
  }
  function m(e) {
    if (!u.has(e)) {
      (function (e) {
        let i = document.querySelector(docxEditorConstantsConfig.ssrBoxContainer);
        if (!i) {
          return;
        }
        let r = i.querySelector(`.docx-image-block[data-record-id=${e}]`);
        if (r && r.getAttribute("data-block-type") === docBlockTypeConstants.blockTypeConstants.IMAGE) {
          g(e, r);
        }
      })(e);
    }
    return u.get(e);
  }
  require.d(exports, {
    getImageLoadState: function () {
      return m;
    },
    initializeSSRImageLoadStates: function () {
      return p;
    }
  });
}