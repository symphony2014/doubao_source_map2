// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'DocxExternalHistory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 234536
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxHistoryUtilities = require("docx-history-utilities") /*id: 525555*/;
  var docxEditorEventConstantsAndManager_1 = require("docx-editor-event-constants-and-manager_1") /*id: 851701*/;
  function s(e, r, i) {
    var o;
    if ((r = typeof (o = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var o = i.call(e, r || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, r, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = i;
    }
    return e;
  }
  class a {
    static onHistoryResultReady(e, r, i) {
      let {
        mainToken: o,
        subToken: s
      } = docxHistoryUtilities.getMindmapToken(e, r) || {};
      docxEditorEventConstantsAndManager_1.globalEventEmitter.emit(docxEditorEventConstantsAndManager_1.externalHistoryEventConstants.EXTERNAL_HISTORY_RESULT_READY, {
        mainToken: o || "",
        subToken: s || "",
        result: i
      });
    }
    injectOptions(e) {
      this.externalBlockInfo = e.externalBlockInfo;
      this.tempChangeDetails = e.changeDetails;
      docxEditorEventConstantsAndManager_1.globalEventEmitter.on(docxEditorEventConstantsAndManager_1.externalHistoryEventConstants.EXTERNAL_HISTORY_RESULT_READY, this.handleExternalHistoryResultReady);
    }
    injectBlockManager(e) {
      if (!this.isShowDiff) {
        return;
      }
      let r = [];
      e.traverse(e.rootBlockId, i => this.initBlockModel(i, e, r));
      r.forEach((e, r) => {
        this.recordIdToIndexMap.set(e, r);
      });
      if (!this.hasExternalChange) {
        this.emitReadyEvent();
      }
    }
    emitReadyEvent() {
      docxEditorEventConstantsAndManager_1.globalEventEmitter.emit(docxEditorEventConstantsAndManager_1.externalHistoryEventConstants.EXTERNAL_HISTORY_ALL_READY, {
        changes: this.getChangeDetailsWithExternalChange()
      });
    }
    getChangeDetailsWithExternalChange() {
      if (this.hasExternalChange) {
        return this.tempChangeDetails.map(e => [this.recordIdToIndexMap.get(e.recordId), e]).sort((e, r) => e[0] === r[0] ? e[1].type === "external" ? 1 : -1 : e[0] < r[0] ? -1 : +!!(e[0] > r[0])).map(e => e[1]);
      } else {
        return this.tempChangeDetails;
      }
    }
    reset() {
      this.recordIdToIndexMap.clear();
      this.blockTokenLoadedStatus.clear();
      this.blockTokenToRecordIdMap.clear();
      this.hasExternalChange = false;
      this.tempChangeDetails.length = 0;
      this.isShowDiff = true;
      docxEditorEventConstantsAndManager_1.globalEventEmitter.off(docxEditorEventConstantsAndManager_1.externalHistoryEventConstants.EXTERNAL_HISTORY_RESULT_READY, this.handleExternalHistoryResultReady);
    }
    destroy() {
      docxEditorEventConstantsAndManager_1.globalEventEmitter.off(docxEditorEventConstantsAndManager_1.externalHistoryEventConstants.EXTERNAL_HISTORY_RESULT_READY, this.handleExternalHistoryResultReady);
    }
    constructor() {
      s(this, "externalBlockInfo", undefined);
      s(this, "recordIdToIndexMap", new Map());
      s(this, "externalBlockType", new Set([docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.SHEET]));
      s(this, "blockTokenToRecordIdMap", new Map());
      s(this, "blockTokenLoadedStatus", new Map());
      s(this, "tempChangeDetails", []);
      s(this, "hasExternalChange", false);
      s(this, "isShowDiff", true);
      s(this, "initBlockModel", (e, r, i) => {
        let {
          id: o,
          snapshot: l
        } = r.getRecordByBlockId(e);
        i.push(o);
        let {
          type: s,
          token: a
        } = l;
        let c = docxHistoryUtilities.getSheetToken(s, a);
        if (this.externalBlockType.has(s) && this.externalBlockInfo[c]) {
          this.hasExternalChange = true;
          this.blockTokenToRecordIdMap.set(a, o);
          this.blockTokenLoadedStatus.set(a, false);
          this.initExternalBlockModel(r, e);
        }
        return true;
      });
      s(this, "initExternalBlockModel", (e, r) => {
        e.editorAPI.modelService.loadBlockModel(r, {
          immediately: true
        });
      });
      s(this, "handleExternalHistoryResultReady", e => {
        let {
          mainToken: r,
          subToken: i,
          result: o
        } = e;
        o.forEach(e => {
          let i = `${r}_${e}`;
          let o = this.blockTokenLoadedStatus.get(i);
          if (o === undefined) {
            return;
          }
          this.blockTokenLoadedStatus.set(i, true);
          let n = this.blockTokenToRecordIdMap.get(i);
          if (o !== true || !this.tempChangeDetails.find(e => e.recordId === n)) {
            this.tempChangeDetails.push({
              recordId: n,
              id: n,
              siblings: [],
              type: "external"
            });
          }
        });
        let n = `${r}_${i}`;
        if (this.blockTokenLoadedStatus.has(n)) {
          this.blockTokenLoadedStatus.set(n, true);
        }
        if (Array.from(this.blockTokenLoadedStatus.values()).every(e => e === true)) {
          this.emitReadyEvent();
        }
      });
    }
  }
  require.d(exports, {
    DocxExternalHistory: function () {
      return a;
    }
  });
}