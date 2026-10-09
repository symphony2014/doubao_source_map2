// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'h' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'v' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'g' to 'blockManagerToken'
// - Resolved require(109058) to 'block-manager-token'
// - Renamed variable 'p' to 'firstScreenLayoutProvider'
// - Resolved require(979914) to 'first-screen-layout-provider'
// - Renamed variable 'm' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'y' to 'gridCellIdUtils'
// - Resolved require(812767) to 'grid-cell-id-utils'
// - Renamed variable 'k' to 'diProviderCollectEvent'
// - Resolved require(308105) to 'di-provider-collect-event'
// - Renamed variable 'w' to 'lazyRecordStatusToken'
// - Resolved require(931385) to 'lazy-record-status-token'
// - Updated imported property 'DF' to 'Provide' (module 555385)
// - Updated imported property '_K' to 'instantiate' (module 555385)
// - Updated imported property 'z' to 'firstScreenProvider' (module 979914)
// - Updated imported property 'V' to 'collectEventName' (module 308105)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'U' to 'getCellId' (module 812767)
// - Updated imported property 'n' to 'blockManagerToken' (module 109058)
// - Updated imported property 'XO' to 'registerProviders' (module 135760)
// - Updated imported property 'nc' to 'onInitHook' (module 135760)
// - Updated imported property 'B' to 'lazyRecordStatus' (module 931385)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_first-screen-block-layout.9015fac2.js
         * chunkId: 82429
         * moduleId: 434983
         */
module.exports = function (module, exports, require) {
  var r;
  var l;
  var n;
  var o;
  var a;
  var c;
  var s;
  var u;
  var b;
  var f;
  var d;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var firstScreenLayoutProvider = require("first-screen-layout-provider") /*id: 979914*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var gridCellIdUtils = require("grid-cell-id-utils") /*id: 812767*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  function _(e, i, t) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var t = e[Symbol.toPrimitive];
      if (t !== undefined) {
        var r = t.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = t;
    }
    return e;
  }
  let B = dependencyInjectionContainer.Provide(firstScreenLayoutProvider.firstScreenProvider)((r = (c = class {
    report() {
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_docx_first_screen_block_layout_dev", this.genReportParams());
    }
    genReportParams() {
      return {
        blockList: JSON.stringify(this.flatBlockList())
      };
    }
    flatBlockList() {
      let e = Array(this.allBlocksId.length);
      for (let i = 0; i < this.allBlocksId.length; ++i) {
        let t = this.allBlocksId[i];
        if (!this.blockManager.hasBlockStructByBlockId(t)) {
          continue;
        }
        let r = this.blockManager.getBlockStructByBlockId(t);
        let {
          type: l,
          children: n,
          snapshot: o
        } = r;
        let {
          folder: a
        } = o;
        if (l === docBlockTypeConstants.blockTypeConstants.CELL) {
          continue;
        }
        let c = {
          [docBlockTypeConstants.blockTypeConstants.TABLE]: () => {
            let e = new Map();
            r.children.forEach(i => {
              e.set(gridCellIdUtils.getCellId(i), i);
            });
            let {
              colWidth: i,
              cellChildren: t
            } = this.genTableCell(e, o);
            return {
              tp: l,
              fd: +!!a,
              c: t.join(","),
              cw: i.join(",")
            };
          }
        };
        let s = () => ({
          tp: l,
          fd: +!!a,
          c: this.collectChildren(n)
        });
        e[i] = c[l] ? c[l]() : s();
      }
      for (let [i, t] of this.cellCacheMap.entries()) {
        e[i] = t;
      }
      return e;
    }
    genTableCell(e, i) {
      let {
        rows_id: t,
        columns_id: r,
        cell_set: l,
        column_set: n
      } = i;
      let o = [];
      let a = r.map(e => n[e].column_width);
      for (let i = 0; i < t.length; ++i) {
        for (let n = 0; n < r.length; ++n) {
          let a = `${t[i]}${r[n]}`;
          let {
            merge_info: {
              col_span: c,
              row_span: s
            }
          } = l[a];
          if (!e.has(a)) {
            continue;
          }
          let {
            children: u,
            id: b
          } = e.get(a);
          let f = {
            k: `r${i}_c${n}`,
            rp: s,
            cp: c,
            c: this.collectChildren(u)
          };
          if (this.allBlocksId.includes(b)) {
            let e = this.allBlocksId.indexOf(b);
            this.cellCacheMap.set(e, f);
            o.push(e);
          }
        }
      }
      return {
        colWidth: a,
        cellChildren: o
      };
    }
    collectChildren(e) {
      return e.reduce((e, i) => this.allBlocksId.includes(i.id) ? [...e, i.id] : e, []).join(",");
    }
    constructor() {
      var e;
      var i;
      e = "blockManager";
      if (i = s) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
      _(this, "allBlocksId", []);
      _(this, "cellCacheMap", new Map());
      _(this, "handleRenderDocxFirstScreenSuccess", e => {
        this.allBlocksId = e;
        window.requestAnimationFrame(() => {
          this.report();
        });
      });
    }
  }).prototype, l = "blockManager", n = [blockManagerToken.blockManagerToken], a = {}, Object.keys(o = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = o[e];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = true), s = (a = n.slice().reverse().reduce(function (e, i) {
    return i(r, l, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(r, l, a), null) : a, c)) || c;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  function S(e, i, t, r) {
    if (t) {
      Object.defineProperty(e, i, {
        enumerable: t.enumerable,
        configurable: t.configurable,
        writable: t.writable,
        value: t.initializer ? t.initializer.call(r) : undefined
      });
    }
  }
  function z(e, i, t) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var t = e[Symbol.toPrimitive];
      if (t !== undefined) {
        var r = t.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = t;
    }
    return e;
  }
  function M(e, i, t, r, l) {
    var n = {};
    Object.keys(r).forEach(function (e) {
      n[e] = r[e];
    });
    n.enumerable = !!n.enumerable;
    n.configurable = !!n.configurable;
    if ("value" in n || n.initializer) {
      n.writable = true;
    }
    n = t.slice().reverse().reduce(function (t, r) {
      return r(e, i, t) || t;
    }, n);
    if (l && n.initializer !== undefined) {
      n.value = n.initializer ? n.initializer.call(l) : undefined;
      n.initializer = undefined;
    }
    if (n.initializer === undefined) {
      Object.defineProperty(e, i, n);
      return null;
    } else {
      return n;
    }
  }
  function j() {
    docxEditorCore.registerProviders([{
      provide: firstScreenLayoutProvider.firstScreenProvider,
      useClass: B
    }]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.instantiate(C);
      e.init();
      return () => e.destroy();
    });
  }
  b = M((u = class {
    init() {
      this.sub = this.status.firstScreenReady$.subscribe(this.handleRenderDocxFirstScreenSuccess);
    }
    destroy() {
      var e;
      if ((e = this.sub) !== null && e !== undefined) {
        e.unsubscribe();
      }
    }
    constructor() {
      S(this, "firstScreenBlockLayoutCollector", b, this);
      S(this, "status", f, this);
      S(this, "blockManager", d, this);
      z(this, "sub", undefined);
      z(this, "handleRenderDocxFirstScreenSuccess", () => {
        var e;
        var i;
        var t;
        var r;
        let l = ((i = this.blockManager) === null || i === undefined ? undefined : (e = i.layoutManager) === null || e === undefined ? undefined : e.getViewportBlocks()) || [];
        let n = ((r = this.blockManager) === null || r === undefined ? undefined : (t = r.layoutManager) === null || t === undefined ? undefined : t.getBufferBlocks()) || [];
        this.firstScreenBlockLayoutCollector.handleRenderDocxFirstScreenSuccess([...l, ...n]);
      });
    }
  }).prototype, "firstScreenBlockLayoutCollector", [firstScreenLayoutProvider.firstScreenProvider], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  f = M(u.prototype, "status", [lazyRecordStatusToken.lazyRecordStatus], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  d = M(u.prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let C = u;
  require.r(exports);
  require.d(exports, {
    default: function () {
      return j;
    }
  });
}