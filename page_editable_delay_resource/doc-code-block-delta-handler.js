// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'CodeBlockHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 566957
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var codeBlockHighlightjsConstants = require("code-block-highlightjs-constants") /*id: 433332*/;
  var flowSyncDeltaOperations = require("flow-sync-delta-operations") /*id: 539974*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxCaptionModelLoader = require("docx-caption-model-loader") /*id: 947061*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxTextBlockModelManager = require("docx-text-block-model-manager") /*id: 568038*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var contentDeltaUtilities = require("content-delta-utilities") /*id: 160217*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  function m(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class v extends docxTextBlockModelManager.TextBlockModel {
    get language() {
      return this.record.snapshot.language || codeBlockHighlightjsConstants.plainTextLabel;
    }
    async initCaptionModel() {
      this.captionFindAndReplaceModel = await docxCaptionModelLoader.createCaptionModel({
        blockId: this.id,
        blockManager: this.blockManager,
        snapshotPath: ["caption"]
      });
    }
    onInit() {
      super.onInit();
      this.initCaptionModel();
    }
    getUpdateContext() {
      var e;
      let i = contentDeltaUtilityFunctions.k(contentDeltaUtilityFunctions.C(this.snapshot.text)).get(editorModuleConstantsConfig.defaultVersion);
      let r = new contentStructureDelta.ContentDelta({
        zoneId: this.zoneId,
        ops: i.ops
      });
      let l = contentDeltaUtilities.filterDeltaSet(contentDeltaUtilityFunctions.k(new deltaSetCore.DeltaSet({
        [this.zoneId]: this.zoneState.getContent(true)
      }), this.zoneId), e => e.includes(editorModuleConstantsConfig.clientsidePrefix)).get(this.zoneId);
      let c = this.editorAPI.viewService.getBlockViewByBlockId(this.id);
      let d = c == null ? undefined : (e = c.model.getSelection()) === null || e === undefined ? undefined : e.toPosition().start;
      let u = new contentStructureDelta.ContentDelta({
        zoneId: this.zoneId
      }).concat(deltaSetCore.diffDelta(l, r, d));
      let m = this.apply.bind(this);
      let v = !deltaSetCore.isEmptyOps(u);
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: "get_update_content_context",
        shouldUpdate: v,
        zoneId: this.zoneId,
        content: this.getText().length,
        snapshot: this.snapshot.text.initialAttributedTexts.text[0].length,
        info: JSON.stringify({
          id: docxUtilityHelpers.maskSensitiveData(this.recordId),
          applyData: flowSyncDeltaOperations.formatOpsForDisplay(new deltaSetCore.DeltaSet().add(u))
        })
      });
      return {
        shouldUpdate: v,
        applyFunction: m,
        applyData: u
      };
    }
    onDestroy() {
      this.captionFindAndReplaceModel = null;
      super.onDestroy();
    }
    constructor(e) {
      super(e);
      m(this, "captionFindAndReplaceModel", null);
    }
  }
  m(v, "type", docBlockTypeConstants.blockTypeConstants.CODE);
  require.d(exports, {
    CodeBlockHandler: function () {
      return v;
    }
  });
}