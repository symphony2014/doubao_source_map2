// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initStructureQuery'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 775478
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var blockQueryProviderName = require("block-query-provider-name") /*id: 856405*/;
  var blockTraversalOrder = require("block-traversal-order") /*id: 893047*/;
  var structureQueryProvider = require("structure-query-provider") /*id: 388568*/;
  function h(e, i, r) {
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
  let f = dependencyInjectionContainer.Provide(structureQueryProvider.structureQueryToken)((o = class {
    getFirstBlockIdByPreOrder(e) {
      let i = this.structService.getBlockStructByBlockId(e);
      if (i && i.children.length) {
        return this.blockQueryHooks.get().filter(e => e.type === blockTraversalOrder.BlockTraversalOrder.ON_FIRST_BLOCK_IN_PRE_ORDER).reduce((e, i) => i.apply(e), i.children[0].id);
      } else {
        return null;
      }
    }
    getLastBlockIdByPreOrder(e) {
      let i = this.structService.getBlockStructByBlockId(e);
      if (!i || !i.children.length) {
        return null;
      }
      let r = docxEditorCore.ZERO_OFFSET;
      let {
        children: n
      } = i;
      while (!r && n.length) {
        let e = n.length - 1;
        if (n[e].children.length) {
          ({
            children: n
          } = n[e]);
        } else {
          r = n[e].id;
        }
      }
      return this.blockQueryHooks.get().filter(e => e.type === blockTraversalOrder.BlockTraversalOrder.ON_LAST_BLOCK_IN_PRE_ORDER).reduce((e, i) => i.apply(e), r);
    }
    traverseRecord(e, i) {
      this.dataService.traverse(e, null, i);
    }
    constructor(e, i, r) {
      h(this, "blockQueryHooks", undefined);
      h(this, "dataService", undefined);
      h(this, "structService", undefined);
      this.blockQueryHooks = e;
      this.dataService = i;
      this.structService = r;
    }
  }, n = o = typescriptRuntimeHelpers.metadata([typescriptRuntimeHelpers.decorate(0, dependencyInjectionContainer.Dynamic()), typescriptRuntimeHelpers.decorate(0, dependencyInjectionContainer.Many()), typescriptRuntimeHelpers.decorate(0, blockQueryProviderName.blockQueryProvider), typescriptRuntimeHelpers.decorate(1, docxEditorCore.BLOCK_DATA_TOKEN), typescriptRuntimeHelpers.decorate(2, docxEditorCore.BLOCK_STRUCT_TOKEN), typescriptRuntimeHelpers.reflectMetadata("design:type", Function), typescriptRuntimeHelpers.reflectMetadata("design:paramtypes", [undefined, undefined, undefined])], o))) || n;
  function g() {
    docxEditorCore.registerProviders([f]);
  }
  require.d(exports, {
    initStructureQuery: function () {
      return g;
    }
  });
}