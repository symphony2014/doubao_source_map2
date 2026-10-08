// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZX' to 'isUrlPreviewBlock'
// - Renamed export 'sY' to 'parseUrlPreview'
// - Renamed export 'An' to 'openUrlPreviewLink'
// - Renamed export 'mI' to 'createUrlPreview'
// - Renamed export 'Ff' to 'getUrlPreviewData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 293956
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var editorDataTextUtils = require("editor-data-text-utils") /*id: 606734*/;
  require("user-environment-utils") /*id: 107339*/;
  require("docx-utility-helpers") /*id: 859002*/;
  require("docx-shortcut-feature-detection") /*id: 407607*/;
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  require("dependency-injection-container") /*id: 555385*/.providerName("url-sdk-service");
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var docBlockLinkConfig = require("doc-block-link-config") /*id: 178118*/;
  function p(e) {
    return e && docBlockLinkConfig.messageLinkConfig[e]?.convertToLinkByCopy || docBlockLinkConfig.messageLinkConfig.default.convertToLinkByCopy;
  }
  function g(e) {
    let {
      rawUrl: n,
      viewType: r,
      urlType: d
    } = e;
    let {
      author: f,
      comments: h
    } = e.snapshot;
    let _ = {
      author: f
    };
    h.forEach(e => {
      _[`${docxCommentConstants.commentIdPrefix}${e}`] = "true";
    });
    let p = new contentStructureDelta.ContentDelta().insert(n, _);
    let g = new deltaSetCore.DeltaSet({
      [zeroConstantModule_1.versionValue]: p
    });
    let E = editorDataTextUtils.getAttributedTexts(g);
    return documentNodeFactory_2.createDocumentNode({
      text: E,
      comments: h,
      view_type: r,
      url_type: d
    }, docBlockTypeConstants.blockTypeConstants.TEXT);
  }
  function E(e, n, r = {}) {
    let {
      apool: o
    } = e;
    let {
      blockManager: i
    } = n;
    if (!Object.values(o.numToAttrib).some(e => {
      var n;
      return e[0] === displayTypeConstants.displayInlineBlock && ((n = i.dataService.getRecordByRecordId(e[1])) === null || n === undefined ? undefined : n.snapshot.type) === docBlockTypeConstants.blockTypeConstants.URL_PREVIEW;
    })) {
      return e;
    }
    let l = editorDataManagerClass.EditorDataManager.serialize(e);
    let c = 0;
    let u = 0;
    let s = "";
    let _ = l.nodes.reduce((e, o) => {
      let _ = o == null ? undefined : o.mark?.[displayTypeConstants.displayInlineBlock];
      let g = o.text;
      let E = o.mark;
      let m = o.text.length;
      if (_) {
        let e = i.getBlockModelsByRecordId(_)[0];
        let o = i.getBlockViewsByRecordId(_)[0];
        let {
          rawUrl: l,
          viewType: u,
          previewId: s,
          urlType: b
        } = e;
        if (function (e, n) {
          let o = e.getBlockViewsByRecordId(n)[0];
          return (o == null ? undefined : o.type) === docBlockTypeConstants.blockTypeConstants.URL_PREVIEW && (o == null ? undefined : o.props?.displaymode) === viewTypeConstants.viewTypes.Inline;
        }(i, _) && p(b)) {
          m = (g = l).length;
          if (E != null) {
            delete E[displayTypeConstants.displayInlineBlock];
          }
          if (!r[`${n.record.id}`]) {
            r[`${n.record.id}`] = [];
          }
          r[`${n.record.id}`].push({
            type: docBlockTypeConstants.blockTypeConstants.URL_PREVIEW,
            start: c,
            len: m,
            value: g,
            viewType: u,
            displaymode: o.props?.displaymode,
            previewId: s
          });
        }
      }
      let b = {
        text: g,
        mark: E
      };
      u += g.length;
      s += g;
      c += m;
      e.push(b);
      return e;
    }, []);
    return editorDataManagerClass.EditorDataManager.deserialize({
      alltext: s,
      size: u,
      nodes: _
    });
  }
  function m(e) {
    return e.type === docBlockTypeConstants.blockTypeConstants.URL_PREVIEW;
  }
  let b = /^\/client\/message\/link\/open$/;
  function v(e) {
    try {
      let {
        pathname: n,
        search: r
      } = new URL(e);
      if (b.test(n)) {
        let {
          token: e
        } = r.slice(1).split("&").reduce((e, n) => {
          let [r, o] = n.split("=");
          e[r] = o;
          return e;
        }, {});
        return e;
      }
    } catch {}
  }
  require.d(exports, {
    isUrlPreviewBlock: function () {
      return m;
    },
    parseUrlPreview: function () {
      return E;
    },
    openUrlPreviewLink: function () {
      return g;
    },
    createUrlPreview: function () {
      return v;
    },
    getUrlPreviewData: function () {
      return p;
    }
  });
}