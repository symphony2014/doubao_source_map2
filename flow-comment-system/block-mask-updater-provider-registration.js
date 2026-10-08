// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerBlockMaskUpdaterProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 727919
         */
module.exports = function (module, exports, require) {
  var o;
  var r;
  var l;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var boundsUtils = require("bounds-utils") /*id: 94622*/;
  var blockMaskUpdaterProvider = require("block-mask-updater-provider") /*id: 406318*/;
  var docBlockTypeCheckers = require("doc-block-type-checkers") /*id: 391113*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var foldStateSubjects = require("fold-state-subjects") /*id: 726089*/;
  function f(e, i, n, o) {
    if (n) {
      Object.defineProperty(e, i, {
        enumerable: n.enumerable,
        configurable: n.configurable,
        writable: n.writable,
        value: n.initializer ? n.initializer.call(o) : undefined
      });
    }
  }
  function g(e, i, n) {
    var o;
    if ((i = typeof (o = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, i || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  function p(e, i, n, o, r) {
    var l = {};
    Object.keys(o).forEach(function (e) {
      l[e] = o[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = n.slice().reverse().reduce(function (n, o) {
      return o(e, i, n) || n;
    }, l);
    if (r && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(r) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  let b = debugLoggerFactory.createLogger("block:block-mask-updater");
  let k = dependencyInjectionContainer.Provide(blockMaskUpdaterProvider.blockMaskUpdaterName)((r = p((o = class {
    addBlockListener(e, i) {
      this.blockListeners.set(e, i);
      this.addMaskListeners("addBlock");
    }
    removeBlockListener(e) {
      this.blockListeners.delete(e);
      if (!this.blockListeners.size) {
        this.removeMaskListeners("removeBlock.empty");
      }
    }
    addMaskListeners(e) {
      if (this.maskSubs.length > 0) {
        return;
      }
      b("%s: add mask listeners", e);
      let {
        viewService: i,
        structService: n
      } = this.editorAPI;
      this.maskSubs = [i.blockViewMount$.subscribe(e => this.handleOverflowBlockChange(e.blockView.struct, "viewMount")), i.blockViewUnmount$.subscribe(e => this.handleBlockUnmount(e.blockView.struct, "viewUnmount")), i.blockViewUpdate$.subscribe(e => this.handleOverflowBlockChange(e.blockView.struct, "viewUpdate")), n.mutation$.subscribe(e => {
        let {
          mutations: i
        } = e;
        for (let e of i.removed) {
          if (docxEditorCore.isMoveMutation(e)) {
            this.handleBlockChange(e.block.id, true, true, "mutation");
          }
        }
      }), foldStateSubjects.foldSubjects.setFoldStatus$.subscribe(e => this.handleBlockChange(e.blockId, true, true, `setFoldStatus.${e.folded}`))];
    }
    removeMaskListeners(e) {
      if (this.maskSubs.length) {
        b("%s: remove mask listeners", e);
        this.maskSubs.forEach(e => e.unsubscribe());
        this.maskSubs = [];
      }
    }
    getParentListeners(e, i) {
      var n;
      let {
        structService: o
      } = this.editorAPI;
      return (((n = o.getBlockStructByBlockId(e)) === null || n === undefined ? undefined : n.getAncestors(i)) || []).map(e => this.blockListeners.get(e.id)).filter(e => e);
    }
    checkAndCacheBlockRect(e) {
      let i = this.blockManager.getBlockViewByBlockId(e);
      let n = i.getExtendedContentRect();
      let o = i.getRealHostRect();
      return (!boundsUtils.compareBounds(n, this.lastBlockRects.get(e)) || !boundsUtils.compareBounds(o, this.lastBlockHostRects.get(e))) && (this.lastBlockRects.set(e, n), this.lastBlockHostRects.set(e, o), true);
    }
    constructor() {
      f(this, "blockManager", r, this);
      f(this, "editorAPI", l, this);
      g(this, "maskSubs", []);
      g(this, "blockListeners", new Map());
      g(this, "lastBlockRects", new Map());
      g(this, "lastBlockHostRects", new Map());
      g(this, "handleOverflowBlockChange", (e, i) => {
        if (docBlockTypeCheckers.isEmbeddedBlockType(e.type)) {
          this.handleBlockChange(e.id, false, true, i);
        }
      });
      g(this, "handleBlockUnmount", (e, i) => {
        let {
          id: n
        } = e;
        this.lastBlockRects.delete(n);
        this.removeBlockListener(n);
        if (docBlockTypeCheckers.isEmbeddedBlockType(e.type)) {
          this.handleBlockChange(e.id, false, false, i);
        }
      });
      g(this, "handleBlockChange", (e, i, n, o) => {
        let r = this.getParentListeners(e, i);
        if (!r.length) {
          return;
        }
        let l = this.blockManager.getBlockStructByBlockId(e);
        if (n && docBlockTypeCheckers.isEmbeddedBlockType(l.type) && !this.checkAndCacheBlockRect(e)) {
          return;
        }
        let a = `${o}.${l.type}-${l.id}`;
        r.forEach(e => e(a));
      });
    }
  }).prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), l = p(o.prototype, "editorAPI", [docxEditorCore.EDITOR_API_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), o)) || o;
  function y() {
    docxEditorCore.registerProviders([k]);
  }
  require.d(exports, {
    registerBlockMaskUpdaterProvider: function () {
      return y;
    }
  });
}