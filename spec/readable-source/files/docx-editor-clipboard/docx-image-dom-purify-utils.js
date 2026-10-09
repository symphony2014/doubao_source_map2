// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R3' to 'createElementFromObject'
// - Renamed export 'Ze' to 'buildImageDataFromBlock'
// - Renamed export 'qk' to 'sanitizeHtmlWithTracking'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 520102
         */
module.exports = function (module, exports, require) {
  var dompurifyCore = require("dompurify-core") /*id: 345925*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var docxImageUrlUtils = require("docx-image-url-utils") /*id: 219802*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  function c(e, o, r) {
    var n;
    var s;
    var c;
    let d = e.getBlockIdsByRecordId(o)[0];
    let u = e.getBlockModelByBlockId(d);
    let p = u.record.snapshot;
    let h = ((n = u.parent) === null || n === undefined ? undefined : n.record.snapshot.type) === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN;
    let {
      image: {
        height: g,
        width: m,
        token: f,
        mimeType: b,
        size: k
      }
    } = p;
    let y = encodeURIComponent(docxImageUrlUtils.buildImageUrl(f, o));
    r ||= p.image.scale;
    let v = g * r;
    let E = m * r;
    if (h) {
      let o = e.getBlockViewByBlockIdNotCheck(d);
      let r = o == null ? undefined : (c = o.contentElement) === null || c === undefined ? undefined : (s = c.getBoundingClientRect) === null || s === undefined ? undefined : s.call(c);
      if (r) {
        v = r.height;
        E = r.width;
      }
    }
    return {
      uuid: uuidGeneratorUtil.generateUuid(),
      height: v,
      width: E,
      currHeight: v,
      currWidth: E,
      natrualHeight: g,
      natrualWidth: m,
      pluginName: "imageUpload",
      scale: r,
      src: y,
      file_token: f,
      image_type: b,
      size: k,
      comments: []
    };
  }
  function d(e, o) {
    let r = dompurifyCore.DOMPurify.sanitize(e);
    if (r !== e) {
      o.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: "docx_clipboard_copy",
        info: JSON.stringify({
          copyable: true,
          msg: "trigger DOMPurify.sanitize, html is unsafe"
        })
      });
    }
    return r;
  }
  require.d(exports, {
    createElementFromObject: function () {
      return function e(o) {
        let r = document.createElement(o.tagName);
        if (o.attrs) {
          Object.entries(o.attrs).forEach(e => {
            let [o, n] = e;
            return r.setAttribute(o, n);
          });
        }
        if (o.recordId) {
          r.className = `${r.className} old-record-id-${o.recordId}`;
        }
        let n = o.text || "";
        if (o.children) {
          let r = "";
          o.children.forEach(o => {
            let n = e(o);
            r += n;
          });
          n += r;
        }
        return `${r.outerHTML.replace(RegExp(`(</${o.tagName}>)$`, "i"), "") + n}</${o.tagName}>`;
      };
    },
    buildImageDataFromBlock: function () {
      return c;
    },
    sanitizeHtmlWithTracking: function () {
      return d;
    }
  });
}