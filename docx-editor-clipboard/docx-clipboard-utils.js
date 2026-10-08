// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AB' to 'hasPendingBlocksInSelection'
// - Renamed export 'Ac' to 'isSingleTextBlockCode'
// - Renamed export 'Hy' to 'cloneRecordWithChildren'
// - Renamed export 'Kr' to 'getPreviousBlockForSelection'
// - Renamed export 'M8' to 'parseClipboardData'
// - Renamed export 'Qk' to 'createFileRecordFromBlock'
// - Renamed export 'be' to 'normalizeTextForClipboard'
// - Renamed export 'fW' to 'copyTextToClipboard'
// - Renamed export 'gC' to 'cloneRecord'
// - Renamed export 'i5' to 'extractMentionTitlesAndUrls'
// - Renamed export 'kN' to 'convertSelectionToBlockSelection'
// - Renamed export 'kt' to 'removeInvisibleCharacters'
// - Renamed export 'lk' to 'traverseAndFilterRecords'
// - Renamed export 'nG' to 'normalizeHtmlWhitespace'
// - Renamed export 'uy' to 'extractMentionInfoFromRecords'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 538199
         */
module.exports = function (module, exports, require) {
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var driveFileTypeConstants_1 = require("drive-file-type-constants_1") /*id: 944521*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxBlockTypeConstants = require("docx-block-type-constants") /*id: 49433*/;
  var docClipboardRecordConfig = require("doc-clipboard-record-config") /*id: 282146*/;
  var docxBlockChildrenUtils = require("docx-block-children-utils") /*id: 429601*/;
  var docTranslateBlockUtils = require("doc-translate-block-utils") /*id: 436987*/;
  var structureQueryToken = require("structure-query-token") /*id: 763917*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docxUrlPreviewUtils_1 = require("docx-url-preview-utils_1") /*id: 293956*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docxSyncedBlockUtils = require("docx-synced-block-utils") /*id: 791402*/;
  var extractTokenFromUrlAndCreateDocumentNode = require("extract-token-from-url-and-create-document-node") /*id: 120372*/;
  var docxDocumentNodeFactory = require("docx-document-node-factory") /*id: 52340*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let k = ["reference"];
  function w(e, n) {
    if (e.length === 1 && e[0].type === docxBlockSelectionHandler_1.blockTypes.TEXT) {
      return n.getBlockModelByBlockIdNotCheck(e[0].id)?.type === docBlockTypeConstants.blockTypeConstants.CODE;
    }
    return false;
  }
  function I(e) {
    return function (e, n) {
      if (!e) {
        throw Error(`record id can not be empty, id=${e}`);
      }
      return {
        id: e,
        snapshot: n
      };
    }(e.source_block_id, docxDocumentNodeFactory.createFileNode(e, true));
  }
  function S(e, n) {
    let r = e.getBlockModelByBlockId(n);
    return T(e, r.record.id);
  }
  function T(e, n, r) {
    let {
      isCopy: i = true
    } = r || {};
    let l = e.getRecord(n);
    let a = deepCloneWrapper_1.deepClone(l.snapshot);
    let c = {
      [n]: {
        id: n,
        snapshot: a
      }
    };
    if (k.includes(a.type)) {
      return c;
    }
    let u = a.type === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE;
    if (!u || !syncUrlBlockUtils.isSyncingActive()) {
      for (let n of docxBlockChildrenUtils.getAllBlockChildren(a)) {
        Object.assign(c, T(e, n, r));
      }
    }
    if (a.type === docBlockTypeConstants.blockTypeConstants.MESSAGE) {
      c[n].snapshot = extractTokenFromUrlAndCreateDocumentNode.createDocumentNodeFromMessage(a);
    }
    if (u) {
      if (syncUrlBlockUtils.isSyncingActive()) {
        c[n].snapshot = docxSyncedBlockUtils.createTextNode(a);
      } else {
        c[n].snapshot = docxSyncedBlockUtils.createSyncedNode(a, n);
      }
      return c;
    }
    if (a.type === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE) {
      let e = a.src_block_id;
      c[n].snapshot = docxSyncedBlockUtils.createSyncedNode(a, e);
    }
    if (i && a.type === docBlockTypeConstants.blockTypeConstants.URL_PREVIEW && docxUrlPreviewUtils_1.getUrlPreviewData(a == null ? undefined : a.url_type)) {
      let r = e.getBlockModelsByRecordId(n)[0];
      c[n].snapshot = docxUrlPreviewUtils_1.openUrlPreviewLink(r);
    }
    docTranslateBlockUtils.handleTranslateOkr(e, c, n);
    if (editorTextBlockUtilities.hasTextWithApoolSimple(a)) {
      a.text = editorTextBlockUtilities.processDocMentionsInText(a.text, e);
      a.text = editorTextBlockUtilities.stripAiExtraAttributes(a.text);
      editorTextBlockUtilities.extractFileMentionData(a.text).forEach(e => {
        if (e.source_block_id) {
          let n = I(e);
          c[n.id] = n;
        }
      });
    }
    return c;
  }
  function B(e, n) {
    let r = false;
    e.some(e => {
      let {
        editorAPI: o
      } = n;
      let i = n.getBlockModelByBlockId(e.id);
      o.getService(structureQueryToken.structureQueryToken).traverseRecord(i.recordId, e => e.snapshot.type !== docBlockTypeConstants.blockTypeConstants.PENDING || (r = true, false));
      return r;
    });
    return r;
  }
  function M(e) {
    let n = {};
    let r = {};
    editorTextBlockUtilities.hasTextWithApoolAlt(e, [inlineComponentFacade.mentionTypes.DOC]).forEach(e => {
      let {
        token: o,
        file_type: i,
        title: a,
        raw_url: c
      } = e.data;
      if (i === driveFileTypeConstants_1.FileType.DOCX) {
        n[o] = a || "";
        r[o] = c;
      }
    });
    return {
      mention_page_title: n,
      external_mention_url: r
    };
  }
  function R(e) {
    let n = {};
    let r = {};
    for (let o of Object.values(e)) {
      if (editorTextBlockUtilities.hasTextWithApoolSimple(o.snapshot)) {
        let {
          text: e
        } = o.snapshot;
        let {
          mention_page_title: i,
          external_mention_url: l
        } = M(e);
        Object.assign(n, i);
        Object.assign(r, l);
      }
    }
    return {
      mention_page_title: n,
      external_mention_url: r
    };
  }
  function O(e) {
    return e = (e = (e = e || "").replace(/\t/g, "        ")).replace(/\r\n/g, "\n");
  }
  let A = (e, n) => {
    let r = null;
    try {
      r = JSON.parse(e.getData(docxBlockTypeConstants.fileTypes.DOCX_TEXT) || e.getData(docxBlockTypeConstants.fileTypes.DOCX_RECORD));
    } catch (e) {}
    if (!r) {
      try {
        let n = e.getData(docxBlockTypeConstants.fileTypes.HTML);
        if (n) {
          let e = new DOMParser().parseFromString(`<div id="block-root">${n}</div>`, "text/html").querySelector(`.${docClipboardRecordConfig.clipboardClass}`);
          let o = e == null ? undefined : e.getAttribute(docClipboardRecordConfig.recordDataAttr);
          let i = e == null ? undefined : e.getAttribute(docClipboardRecordConfig.recordFormatAttr);
          if (e && o && i && [docxBlockTypeConstants.fileTypes.DOCX_TEXT, docxBlockTypeConstants.fileTypes.DOCX_RECORD].includes(i)) {
            r = JSON.parse(o);
          }
        }
      } catch (e) {}
    }
    if (!(r == null ? undefined : r.rootId) || !isBooleanUtil.isBoolean(r.isCut)) {
      return {
        pasteInSamePage: false,
        applyFrom: docBlockTypeConstants.pasteOperationTypes.outerCopyPaste
      };
    }
    let {
      rootId: o,
      isCut: l
    } = r;
    let a = n.editorAPI.config.get("token") === o;
    return {
      pasteInSamePage: a,
      applyFrom: a ? l ? docBlockTypeConstants.pasteOperationTypes.innerCutPaste : docBlockTypeConstants.pasteOperationTypes.innerCopyPaste : l ? docBlockTypeConstants.pasteOperationTypes.outerCutPaste : docBlockTypeConstants.pasteOperationTypes.outerCopyPaste,
      parseData: r
    };
  };
  function Z(e, n, r) {
    e.forEach(o => {
      (function e(o, i, l, a) {
        let c = r(o, a);
        if (c) {
          let {
            remove: e = false,
            stop: n = false
          } = c;
          if (e) {
            let e = l.findIndex(e => e === o);
            l.splice(e, 1);
            return;
          }
          if (n) {
            return;
          }
        }
        let u = docxBlockChildrenUtils.getAllBlockChildren(i);
        u.forEach(r => {
          e(r, n[r].snapshot, u, o);
        });
      })(o, n[o].snapshot, e);
    });
  }
  function L(e) {
    reduxStoreInitializer.reduxStore.dispatch(platformDocUtils.Nwg.permission.copyTextWithoutPermission(e));
  }
  function x(e) {
    let n = "<([^\\/][^>]+|[^>\\/]+)>";
    let r = "<\\/([^>]+)>";
    let o = RegExp(`${n}\\n+\\s*?${n}`, "g");
    let i = RegExp(`${n}\\n+\\s*?${r}`, "g");
    let l = RegExp(`${r}\\n+\\s*?${n}`, "g");
    let a = RegExp(`${r}\\n+\\s*?${r}`, "g");
    return e.replace(/\r\n/g, "\n").replace(/\n+$/g, "").replace(/(\x3C!--[\s\S]*?-->)\n+\s*/g, "$1").replace(i, (e, n, r) => n.split(" ")[0] !== r.split(" ")[0] ? `<${n}></${r}>` : e).replace(l, "</$1><$2>").replace(o, "<$1><$2>").replace(a, "</$1></$2>").replace(o, "<$1><$2>").replace(a, "</$1></$2>");
  }
  function N(e, n, r) {
    let o = n.getBlockModelByBlockIdNotCheck(e[0]);
    let i = o == null ? undefined : o.previous;
    if (!i) {
      return null;
    }
    if (!r.isShow(i.id)) {
      let e = r.findFoldedByBlock(i.id);
      let o = e && n.getBlockModelByBlockIdNotCheck(e);
      if (!o) {
        return null;
      }
      i = o;
    }
    let {
      type: l
    } = i;
    if (docBlockTypeConstants.gridTableOkTypes.includes(l)) {
      return null;
    }
    if (!i.isTextBlock) {
      return {
        id: i.id,
        type: docxBlockSelectionHandler_1.blockTypes.BLOCK
      };
    }
    {
      let e = editorTextBlockUtilities.getModelTextWithoutTrailing(i.zoneState);
      return {
        id: i.id,
        position: e.length,
        type: docxBlockSelectionHandler_1.blockTypes.TEXT
      };
    }
  }
  function P(e, n) {
    let r;
    if (!e) {
      return null;
    }
    let {
      id: o,
      recordId: i,
      position: l = 0,
      type: a = docxBlockSelectionHandler_1.blockTypes.TEXT
    } = e;
    if (o) {
      r = o;
    } else if (i) {
      r = n.getBlockModelsByRecordId(i)[0].id;
    }
    if (!r) {
      return null;
    }
    let c = {
      type: a,
      id: r
    };
    if (a === docxBlockSelectionHandler_1.blockTypes.TEXT) {
      c.selection = {
        start: l,
        end: l
      };
    }
    return c;
  }
  function D(e) {
    let n = e.replace(/([\u4E00-\u9FA5\u3000-\u303F\u0020-\u007E])([\u200b-\u200f\uFEFF\u202a-\u202e]+)|([\u200b-\u200f\uFEFF\u202a-\u202e]+)([\u4E00-\u9FA5\u3000-\u303F\u0020-\u007E])/g, "$1$4");
    if (/^[\u200b-\u200f\uFEFF\u202a-\u202e]+$/.test(n)) {
      return "";
    } else {
      return n;
    }
  }
  require.d(exports, {
    hasPendingBlocksInSelection: function () {
      return B;
    },
    isSingleTextBlockCode: function () {
      return w;
    },
    cloneRecordWithChildren: function () {
      return T;
    },
    getPreviousBlockForSelection: function () {
      return N;
    },
    parseClipboardData: function () {
      return A;
    },
    createFileRecordFromBlock: function () {
      return I;
    },
    normalizeTextForClipboard: function () {
      return O;
    },
    copyTextToClipboard: function () {
      return L;
    },
    cloneRecord: function () {
      return S;
    },
    extractMentionTitlesAndUrls: function () {
      return M;
    },
    convertSelectionToBlockSelection: function () {
      return P;
    },
    removeInvisibleCharacters: function () {
      return D;
    },
    traverseAndFilterRecords: function () {
      return Z;
    },
    normalizeHtmlWhitespace: function () {
      return x;
    },
    extractMentionInfoFromRecords: function () {
      return R;
    }
  });
}