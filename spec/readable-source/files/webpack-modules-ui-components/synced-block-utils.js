// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ax' to 'createSyncedNode'
// - Renamed export 'Tu' to 'hasExcludedDesc'
// - Renamed export 'eL' to 'isSyncedReference'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 622058
         */
module.exports = function (module, exports, require) {
  var highlightjsLanguageResolver = require("highlightjs-language-resolver") /*id: 553850*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var pdfDocumentRenderer = require("pdf-document-renderer") /*id: 791284*/;
  var contentFormatConstants = require("content-format-constants") /*id: 266577*/;
  var docEditorConstants_1 = require("doc-editor-constants_1") /*id: 2607*/;
  var orderedBlockConstants = require("ordered-block-constants") /*id: 976830*/;
  var orderedBlockUtils = require("ordered-block-utils") /*id: 5008*/;
  var docxBlockTypeConstants = require("docx-block-type-constants") /*id: 49433*/;
  let g = (e, r, n) => !!docxFeatureFlags.isR7Enabled() && (e === docxBlockTypeConstants.fileTypes.HTML || e === docxBlockTypeConstants.fileTypes.TEXT) && !!docBlockTypeConstants.quoteBlockTypes.includes(r) && !!docBlockTypeConstants.quoteBlockTypes.includes(n) && r !== n;
  function m(e, r, n, o, i) {
    let {
      recordId: l
    } = r;
    let s = r.type;
    let c = n.type;
    if (!g(e, s, c)) {
      return;
    }
    let d = s;
    if (i && docBlockTypeConstants.quoteBlockTypes.includes(c) && c !== docBlockTypeConstants.blockTypeConstants.TEXT && (!docBlockTypeConstants.headingTypeArray.includes(s) || c !== docBlockTypeConstants.blockTypeConstants.ORDERED)) {
      d = c;
      o.replace(l, ["type"], c);
    }
    let f = r.snapshot.seq;
    let m = r.snapshot.seq_level;
    let k = n.seq;
    let T = n.seq_level;
    if (!f && (d === docBlockTypeConstants.blockTypeConstants.ORDERED || k && docBlockTypeConstants.headingTypeArray.includes(d))) {
      let e = orderedBlockUtils.isNumericString(k) ? k : orderedBlockConstants.orderModeAuto;
      o.replace(l, ["seq"], e);
    } else if (f && !docBlockTypeConstants.orderedHeadingTypes.includes(d)) {
      o.remove(l, ["seq"]);
    }
    if (!m && docBlockTypeConstants.headingTypeArray.includes(d) && T) {
      let e = orderedBlockUtils.isNumericString(T) ? T : docEditorConstants_1.defaultMode;
      o.replace(l, ["seq_level"], e);
    } else if (m && !docBlockTypeConstants.headingTypeArray.includes(d)) {
      o.remove(l, ["seq_level"]);
    }
  }
  function k(e, r) {
    if (!docxFeatureFlags.isR7Enabled() || r.isCopyFromDoc) {
      return e;
    }
    let n = deepCloneWrapper_1.deepClone(e);
    let o = {
      isMatchCode: false,
      codeLauguage: "",
      codeIndexs: [],
      codeResults: []
    };
    n.forEach((n, i) => {
      let {
        nodes: l
      } = n.data;
      if (!l) {
        return;
      }
      let s = "";
      let u = 0;
      let h = [];
      if (l != null) {
        l.forEach(e => {
          s += e.text;
          if (e.mark) {
            h.push({
              start: u,
              end: u + e.text.length - 1,
              mark: e.mark
            });
          }
          u += e.text.length;
        });
      }
      let p = new pdfDocumentRenderer.PdfDocumentRenderer().parse({
        type: contentFormatConstants.contentType.HTML,
        text: s,
        state: {
          node: n.node,
          data: n.data,
          context: n.context,
          originalMarks: h
        },
        blockContext: r
      });
      if (p) {
        n.data.nodes = p;
      }
      if (r.type !== docBlockTypeConstants.blockTypeConstants.CODE) {
        T(o, i, s, e);
      }
    });
    if (o.codeResults.length) {
      for (let e = o.codeResults.length - 1; e >= 0; e--) {
        n.splice(o.codeResults[e].start, o.codeResults[e].length, o.codeResults[e].content);
      }
    }
    return n;
  }
  function T(e, r, n, i) {
    if (!i.length) {
      return;
    }
    let l = !!i[0].node;
    let c = n.match(/^(`{3})(\S*)\s*$/);
    if (!!e.isMatchCode && !c) {
      e.codeIndexs.push(r);
      if (!l) {
        e.codeContentText += n;
        if (!/\n$/.test(n)) {
          e.codeContentText += "\n";
        }
      }
    }
    if (c) {
      if (e.isMatchCode && !c[2]) {
        if (l) {
          let r = i.slice(e.codeIndexs[0] + 1, e.codeIndexs[e.codeIndexs.length - 1] + 1).map(e => e.data.nodes);
          let n = [];
          r.forEach(e => {
            if (e) {
              let r = e[e.length - 1];
              if (!/\n$/.test(r.text)) {
                r.text = `${r.text}
`;
              }
              n.push(...e);
            }
          });
          let o = {
            node: i[e.codeIndexs[0]].node,
            data: {
              type: docBlockTypeConstants.blockTypeConstants.CODE,
              nodes: n,
              language: e.codeLauguage,
              keepEnter: true
            },
            context: {},
            children: [],
            payload: {}
          };
          e.codeResults.push({
            start: e.codeIndexs[0],
            length: e.codeIndexs.length + 1,
            content: o
          });
        } else {
          let r = {
            blockType: docBlockTypeConstants.blockTypeConstants.CODE,
            nodes: [{
              text: e.codeContentText,
              type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
            }]
          };
          e.codeResults.push({
            start: e.codeIndexs[0],
            length: e.codeIndexs.length + 1,
            content: r
          });
          e.codeContentText = "";
        }
        e.isMatchCode = false;
        e.codeIndexs = [];
        e.codeLauguage = "";
      } else {
        e.isMatchCode = true;
        e.codeLauguage = highlightjsLanguageResolver.resolveLanguage(decodeURIComponent(c[2]));
        e.codeIndexs.push(r);
      }
    }
  }
  require.d(exports, {
    createSyncedNode: function () {
      return T;
    },
    hasExcludedDesc: function () {
      return m;
    },
    isSyncedReference: function () {
      return k;
    }
  });
}