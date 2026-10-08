// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K$' to 'isCodeBlockWrapped'
// - Renamed export 'N$' to 'isCodeBlockFolded'
// - Renamed export 'Nz' to 'scrollToCodeStart'
// - Renamed export 'Pl' to 'getCodeBlockContent'
// - Renamed export 'T0' to 'hasCodeBlockCaption'
// - Renamed export '_N' to 'isFoldedTransition'
// - Renamed export 'aN' to 'createCodeBlockNode'
// - Renamed export 'pZ' to 'processCodeDelta'
// - Renamed export 'rQ' to 'filterCodeBlocks'
// - Renamed export 'rT' to 'scrollToCodeEnd'
// - Renamed export 'rt' to 'hasLanguageProp'
// - Renamed export 'x' to 'getCodeBlockLang'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 352632
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var codeBlockHighlightjsConstants = require("code-block-highlightjs-constants") /*id: 433332*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var l = debugBrowserConfig;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var localStorageUtils = require("local-storage-utils") /*id: 378345*/;
  var docxCodeBlockFeatureFlags = require("docx-code-block-feature-flags") /*id: 888140*/;
  var defaultTextDocumentTemplate = require("default-text-document-template") /*id: 53079*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var createDocumentNodeHelper = require("create-document-node-helper") /*id: 980168*/;
  var editorDeltaTextUtils = require("editor-delta-text-utils") /*id: 728515*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  var docxTextCommentRenderer = require("docx-text-comment-renderer") /*id: 192686*/;
  var codeBlockConstants = require("code-block-constants") /*id: 48094*/;
  function w() {
    return localStorageUtils.getStorageItem(codeBlockHighlightjsConstants.lastLanguageStorageKey) || codeBlockHighlightjsConstants.plainTextLabel;
  }
  function E() {
    return localStorageUtils.getStorageItem(codeBlockConstants.lastWrappedStatusKey) === "true" || codeBlockConstants.codeBlockEnabled;
  }
  function k(e) {
    return Reflect.get(e.snapshot, "language") !== undefined;
  }
  function T(e = {}, n = docBlockTypeConstants.blockTypeConstants.CODE) {
    let i = {
      language: w(),
      wrap: false,
      ...e
    };
    if (docxCodeBlockFeatureFlags.isCodeBlockBasic() && !i.caption) {
      i.caption = defaultTextDocumentTemplate.createDefaultTextDoc();
    }
    return createDocumentNodeHelper.createEmptyDocumentNode(i, n);
  }
  function S(e, n) {
    let i = new contentStructureDelta.ContentDelta({
      zoneId: e.getZoneId()
    });
    let o = 0;
    let a = [[docxTextCommentRenderer.inlineCodeConstant]];
    let s = e.getEntities([[displayTypeConstants.displayInlineBlock], [inlineComponentConstants.componentType], [docxTextCommentRenderer.inlineCodeConstant], [docxInlineBlockRenderers.EquationRendererClass.KEY], ...a]);
    let l = e => !!a.find(n => {
      let [i] = n;
      return !!e.attributes[i];
    });
    s.forEach(r => {
      let s;
      let u = throttledPathFilterStringify.throttledPathStr(r.attributes, codeBlockConstants.textFormatStyles);
      let {
        start: d,
        end: h
      } = r;
      let p = e.pointToOffset(d);
      let m = e.pointToOffset(h);
      if (typeof p == "number" && typeof m == "number") {
        if (r.attributes[displayTypeConstants.displayInlineBlock]) {
          let e = r.attributes[displayTypeConstants.displayInlineBlock];
          if (!e || !n.hasRecordByRecordId(e)) {
            return;
          }
          let i = n.getRecordByRecordId(e);
          if (i) {
            s = editorDeltaTextUtils.getRangeText(i);
          }
        } else if (r.attributes[inlineComponentConstants.componentType] || r.attributes[docxInlineBlockRenderers.EquationRendererClass.KEY]) {
          s = editorDeltaTextUtils.isDeltaEmpty({
            insert: r.text,
            attributes: r.attributes
          }, n, false, true);
        } else if (l(r)) {
          let e = {
            ...r.attributes
          };
          a.forEach(n => {
            let [i] = n;
            if (r.attributes[i]) {
              e[i] = "";
            }
          });
          i.retain(p - o).retain(m - p, e);
          o = m;
          return;
        }
        if (s !== undefined) {
          i.retain(p - o).delete(m - p).insert(s, u);
          o = m;
        }
      }
    });
    return i;
  }
  function C(e) {
    let n = {
      line: 0,
      offset: 0,
      zoneId: e.getContentState().getActiveZone().getZoneId()
    };
    let i = new activeEditorRange.ActiveEditorRange({
      editor: e,
      start: n,
      end: n
    });
    e.selection.setSelection(i, true);
    let r = e.getContainer().querySelector(".ace-line");
    if (r) {
      r.scrollLeft = 0;
    }
  }
  function I(e) {
    let n = e.getContainer().querySelector(".ace-line");
    if (n) {
      n.scrollLeft = n.scrollWidth;
    }
    e.focusAtEnd();
  }
  function M(e) {
    if (e == null) {
      return undefined;
    } else {
      return e.querySelector(codeBlockConstants.codeBlockContentSelector);
    }
  }
  function A(e, n) {
    let i = e.filter(e => {
      var i;
      return ((i = n[e]) === null || i === undefined ? undefined : i.snapshot.type) === docBlockTypeConstants.blockTypeConstants.CODE;
    });
    if (i.length) {
      if (!docxCodeBlockFeatureFlags.isCodeBlockBasic()) {
        i.forEach(e => {
          var r;
          if ((r = n[e]) === null || r === undefined ? undefined : r.snapshot?.caption) {
            delete n[e].snapshot.caption;
          }
        });
      }
    }
  }
  function $(e) {
    return e.type === docBlockTypeConstants.blockTypeConstants.CODE && e.snapshot.folded === true;
  }
  function R(e, n) {
    return e.snapshot.folded === true && e.type !== docBlockTypeConstants.blockTypeConstants.CODE && n.type === docBlockTypeConstants.blockTypeConstants.CODE;
  }
  function x(e) {
    return !!e.caption || docxCodeBlockFeatureFlags.isCodeBlockNewUi();
  }
  l("getStruct");
  require.d(exports, {
    isCodeBlockWrapped: function () {
      return E;
    },
    isCodeBlockFolded: function () {
      return $;
    },
    scrollToCodeStart: function () {
      return C;
    },
    getCodeBlockContent: function () {
      return M;
    },
    hasCodeBlockCaption: function () {
      return x;
    },
    isFoldedTransition: function () {
      return R;
    },
    createCodeBlockNode: function () {
      return T;
    },
    processCodeDelta: function () {
      return S;
    },
    filterCodeBlocks: function () {
      return A;
    },
    scrollToCodeEnd: function () {
      return I;
    },
    hasLanguageProp: function () {
      return k;
    },
    getCodeBlockLang: function () {
      return w;
    }
  });
}