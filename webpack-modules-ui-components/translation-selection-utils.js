// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dv' to 'adjustSelectionForTranslation'
// - Renamed export 'f' to 'hasTranslatedSelection'
// - Renamed export 'zY' to 'expandSelectionToRecordGroup'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 632706
         */
module.exports = function (module, exports, require) {
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var docTranslateBlockUtils_1 = require("doc-translate-block-utils_1") /*id: 520675*/;
  var translationSuffixUtils = require("translation-suffix-utils") /*id: 203170*/;
  function h(e, n) {
    let r = n.editorAPI.config.get("translated");
    let o = n.editorAPI.config.get("translatedWithOriginal");
    if (!r || !o) {
      return [e];
    }
    let i = n.getBlockModelByBlockIdNotCheck(e);
    if (!i) {
      return [e];
    }
    let l = i.previous;
    let a = i.next;
    if (l && i.recordId.split("-")[0] === l.recordId.split("-")[0]) {
      return [l.id, e];
    } else if (a && i.recordId.split("-")[0] === a.recordId.split("-")[0]) {
      return [e, a.id];
    } else {
      return [e];
    }
  }
  let f = (e, n) => {
    let r = e[0];
    let o = e[e.length - 1];
    let i = n.getBlockModelByBlockId(r.id);
    let c = n.getBlockModelByBlockId(o.id);
    if (r.type === docxBlockSelectionHandler_1.blockTypes.TEXT && docTranslateBlockUtils_1.getTranslatableTypes().includes(i.type) && editorTextBlockUtilities.isTextBlock(i)) {
      let e = editorTextBlockUtilities.getModelTextWithoutTrailing(i.zoneState);
      r.selection = {
        start: 0,
        end: e.length
      };
    }
    if (e.length > 1 && o.type === docxBlockSelectionHandler_1.blockTypes.TEXT && docTranslateBlockUtils_1.getTranslatableTypes().includes(c.type) && editorTextBlockUtilities.isTextBlock(c)) {
      let e = editorTextBlockUtilities.getModelTextWithoutTrailing(c.zoneState);
      o.selection = {
        start: 0,
        end: e.length
      };
    }
  };
  let p = (e, n) => {
    let r = e[0];
    let o = e[e.length - 1];
    let i = n.getBlockModelByBlockId(r.id);
    let c = n.getBlockModelByBlockId(o.id);
    let u = i.previous;
    let s = c.next;
    if (i.recordId.includes("-")) {
      let [r] = i.recordId.split("-");
      let [o] = n.getBlockModelsByRecordId(r);
      if (!o && u && r === u.recordId.split("-")[0]) {
        o = u;
      }
      if (o && editorTextBlockUtilities.isTextBlock(o)) {
        let n = editorTextBlockUtilities.getModelTextWithoutTrailing(o.zoneState);
        e.unshift({
          id: o.id,
          type: docxBlockSelectionHandler_1.blockTypes.TEXT,
          selection: {
            start: 0,
            end: n.length
          }
        });
      }
    }
    if (!c.recordId.includes("-")) {
      let [r] = n.getBlockModelsByRecordId(`${c.recordId}-translated`);
      if (!r && s && c.recordId === s.recordId.split("-")[0]) {
        r = s;
      }
      if (r && editorTextBlockUtilities.isTextBlock(r)) {
        let n = editorTextBlockUtilities.getModelTextWithoutTrailing(r.zoneState);
        e.push({
          id: r.id,
          type: docxBlockSelectionHandler_1.blockTypes.TEXT,
          selection: {
            start: 0,
            end: n.length
          }
        });
      }
    }
  };
  function g(e, n) {
    if (e.length === 0) {
      return e;
    }
    let r = n.editorAPI.config.get("translated");
    let a = n.editorAPI.config.get("translatedOnlyTranslation");
    let u = n.editorAPI.config.get("translatedWithOriginal");
    if (!r || !a && !u) {
      return e;
    }
    let d = [arrayFirstElement.getFirstElement(e)];
    let h = [lastElementHelper.getLastElement(e)];
    if (editorSelectionUtilities.isCollapsedTextSelection(d)) {
      e.shift();
    }
    if (editorSelectionUtilities.isCollapsedTextSelection(h)) {
      e.pop();
    }
    if (!u || !!e.some(e => {
      let {
        id: r
      } = e;
      let o = n.getBlockModelByBlockId(r);
      return editorTextBlockUtilities.isTextBlock(o) && docTranslateBlockUtils_1.isRecordTranslated(o);
    })) {
      f(e, n);
      if (u) {
        p(e, n);
      }
    }
    return e;
  }
  function m(e, n) {
    n ||= e.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey).getSelection();
    let r = n.map(n => {
      return e.getRecordByBlockId(n.id)?.id;
    }).filter(Boolean);
    let o = new Set(r);
    return r.some(e => translationSuffixUtils.isTranslated(e) && !o.has(translationSuffixUtils.removeTranslation(e)));
  }
  require.d(exports, {
    adjustSelectionForTranslation: function () {
      return g;
    },
    hasTranslatedSelection: function () {
      return m;
    },
    expandSelectionToRecordGroup: function () {
      return h;
    }
  });
}