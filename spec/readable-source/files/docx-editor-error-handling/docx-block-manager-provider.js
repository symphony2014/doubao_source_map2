// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'BlockManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 903870
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var blockManagerProviderName = require("block-manager-provider-name") /*id: 443647*/;
  var layoutManagerToken = require("layout-manager-token") /*id: 709939*/;
  var structureQueryToken = require("structure-query-token") /*id: 763917*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var eventEmitterProviderNameExport = require("event-emitter-provider-name-export") /*id: 889973*/;
  var clientVarProviderAccess = require("client-var-provider-access") /*id: 503677*/;
  var docBlockDepthUtil = require("doc-block-depth-util") /*id: 511268*/;
  function v(e, i, r) {
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
  let b = dependencyInjectionContainer.Provide(blockManagerProviderName.blockManagerToken)((o = class {
    isDestroyed() {
      return this.editorAPI.isDestroyed();
    }
    get lazyRecordStatus() {
      return this._lazyRecordStatus.get();
    }
    get config() {
      return this.editorAPI.config;
    }
    get dataService() {
      return this.editorAPI.dataService;
    }
    get modelService() {
      return this.editorAPI.modelService;
    }
    get structService() {
      return this.editorAPI.structService;
    }
    get viewService() {
      return this.editorAPI.viewService;
    }
    get selectionService() {
      return this.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey);
    }
    get isPreview() {
      return !!this.config.get("isPreview");
    }
    get isHistory() {
      return !!this.config.get("isHistory");
    }
    get editable() {
      return this.config.get("editable");
    }
    get editPermission() {
      return this.config.get("editPermission");
    }
    get events() {
      return this.config.get("events");
    }
    get allBlockViews() {
      return this.viewService.getAllBlockViews();
    }
    get rootBlockId() {
      return this.getRootBlockId();
    }
    get rootRecordId() {
      return this.getRootRecordId();
    }
    get rootBlockModel() {
      return this.getBlockModelByBlockId(this.rootBlockId);
    }
    get allBlockModels() {
      return this.modelService.allBlockModels;
    }
    destroy() {
      this.orderMap.clear();
    }
    onServiceDispose() {
      this.destroy();
    }
    applyTransaction(e, i, r) {
      return new Promise(n => {
        let o = r && r.onFinish;
        this.dataService.applyTransaction(e, i, {
          ...r,
          onFinish: (e, i) => {
            if (o) {
              o(e, i);
            }
            this.layoutManager.waitForNextPaint().then(n);
          }
        });
      });
    }
    fetchRecord(e, i) {
      return this.clientVar.fetchRecord(e, i);
    }
    fetchRecordBatch(e) {
      return this.clientVar.fetchRecordBatch(e);
    }
    getRecord(e) {
      return this.dataService.getRecordByRecordId(e);
    }
    getRootRecordId() {
      return this.dataService.rootRecordId;
    }
    getRootBlockId() {
      return this.structService.root.id;
    }
    getRecordByBlockId(e) {
      return this.structService.getBlockStructByBlockId(e)?.record;
    }
    getBlockMaxLevelInContainer(e) {
      let i = this.getBlockMaxDepth(e);
      return docBlockDepthUtil.getBlockDepth(e) + i;
    }
    getBlockMaxDepth(e) {
      return e.getMaxDepth();
    }
    getBlockMaxNestingDepthInRoot(e) {
      let i = this.getBlockMaxDepth(e);
      return e.depth + i;
    }
    getFirstBlockIdByPreOrder() {
      let e = this.getRootBlockId();
      if (e) {
        return this.structureQuery.getFirstBlockIdByPreOrder(e);
      } else {
        return null;
      }
    }
    getLastBlockIdByPreOrder() {
      let e = this.getRootBlockId();
      if (e) {
        return this.structureQuery.getLastBlockIdByPreOrder(e);
      } else {
        return null;
      }
    }
    getBlockStructByBlockId(e) {
      return this.structService.getBlockStructByBlockId(e);
    }
    getBlockStructsByRecordId(e) {
      return this.structService.getBlockStructsByRecordId(e);
    }
    hasBlockStructByBlockId(e) {
      return this.structService.hasBlockStructByBlockId(e);
    }
    getBlockModelByBlockId(e) {
      let i = this.modelService.getBlockModelByBlockId(e);
      if (!i) {
        throw Error(`Failed to get block model (id: "${e}")`);
      }
      return i;
    }
    getBlockModelByBlockIdNotCheck(e) {
      return this.modelService.getBlockModelByBlockId(e);
    }
    hasBlockModelByBlockId(e) {
      return this.modelService.hasBlockModelByBlockId(e);
    }
    hasRecordByRecordId(e) {
      return this.dataService.hasRecordByRecordId(e);
    }
    getBlockViewByBlockId(e) {
      let i = this.viewService.getBlockViewByBlockId(e);
      if (!i) {
        throw Error(`Failed to get block view (id: "${e}")`);
      }
      return i;
    }
    getBlockViewByBlockIdNotCheck(e) {
      return this.viewService.getBlockViewByBlockId(e);
    }
    hasBlockViewByBlockId(e) {
      return this.viewService.hasBlockViewByBlockId(e);
    }
    getBlockIdsByRecordId(e) {
      return this.structService.getBlockStructsByRecordId(e).map(e => e.id);
    }
    getBlockModelsByRecordId(e) {
      return this.modelService.getBlockModelsByRecordId(e);
    }
    getBlockViewsByRecordId(e) {
      return this.viewService.getBlockViewsByRecordId(e);
    }
    findClosestBlockViewByBlockId(e, i, r) {
      let n;
      let o;
      r = r || (e => true);
      let l = this.getBlockStructByBlockId(e);
      while (l && (n = i ? l.next : l.previous)) {
        let e = this.getBlockViewByBlockId(n.id);
        if (e && r(e)) {
          o = e.id;
          break;
        }
        l = n;
      }
      if (o) {
        return this.getBlockViewByBlockId(o);
      }
    }
    getBlockPath(e) {
      var i;
      return ((i = this.getBlockStructByBlockId(e)) === null || i === undefined ? undefined : i.getAncestors().map(e => e.id)) || [];
    }
    getBlockModelCreatorByBlockType(e) {
      return this.modelService.getBlockModelCreator(e);
    }
    dispatch(e, i, r = "anonymous") {
      this.eventEmitter.dispatch(e, i, r);
    }
    addListener(e, i, r = "anonymous") {
      this.eventEmitter.addListener(e, i, r);
    }
    addListenerOnce(e, i, r = "anonymous") {
      this.eventEmitter.addListenerOnce(e, i, r);
    }
    removeListener(e, i, r = "anonymous") {
      this.eventEmitter.removeListener(e, i, r);
    }
    createSnapshot(e, i) {
      return this.dataService.createRecordSnapshot(e, i || {});
    }
    constructor(e, i, r, n, o, l) {
      v(this, "orderMap", new Map());
      v(this, "eventEmitter", undefined);
      v(this, "layoutManager", undefined);
      v(this, "editorAPI", undefined);
      v(this, "structureQuery", undefined);
      v(this, "clientVar", undefined);
      v(this, "_lazyRecordStatus", undefined);
      v(this, "traverse", (e, i) => {
        if (!this.hasBlockStructByBlockId(e) || !i(e)) {
          return;
        }
        let {
          children: r
        } = this.getBlockStructByBlockId(e);
        r.forEach(e => this.traverse(e.id, i));
      });
      this.eventEmitter = e;
      this.layoutManager = i;
      this.editorAPI = r;
      this.structureQuery = n;
      this.clientVar = o;
      this._lazyRecordStatus = l;
    }
  }, n = o = typescriptRuntimeHelpers.metadata([typescriptRuntimeHelpers.decorate(0, eventEmitterProviderNameExport.eventEmitterProviderName), typescriptRuntimeHelpers.decorate(1, layoutManagerToken.layoutManagerToken), typescriptRuntimeHelpers.decorate(2, docxEditorCore.EDITOR_API_TOKEN), typescriptRuntimeHelpers.decorate(3, structureQueryToken.structureQueryToken), typescriptRuntimeHelpers.decorate(4, clientVarProviderAccess.getClientProvider), typescriptRuntimeHelpers.decorate(5, dependencyInjectionContainer.Dynamic()), typescriptRuntimeHelpers.decorate(5, lazyRecordStatusToken.lazyRecordStatus), typescriptRuntimeHelpers.reflectMetadata("design:type", Function), typescriptRuntimeHelpers.reflectMetadata("design:paramtypes", [undefined, undefined, undefined, undefined, undefined, undefined])], o))) || n;
  function y() {
    docxEditorCore.registerProviders([b]);
  }
  require.d(exports, {
    BlockManager: function () {
      return y;
    }
  });
}