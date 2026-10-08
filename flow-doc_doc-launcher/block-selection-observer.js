// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'useBlockSelectionViews'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 216766
         */
module.exports = function (module, exports, require) {
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var blockSelectionUtils = require("block-selection-utils") /*id: 166197*/;
  function a(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  function c(e) {
    e();
  }
  class u {
    disconnect() {
      this.sub.unsubscribe();
      this.subTreeObservers.clear();
      this.contentObservers.clear();
    }
    observe(e, n, r) {
      if (r.content) {
        this.observeContent(e, n);
      }
      if (r.subTree) {
        this.observerSubTree(e, n);
      }
    }
    observeContent(e, n) {
      let r = this.contentObservers.get(e) || [];
      r.push(n);
      this.contentObservers.set(e, r);
    }
    observerSubTree(e, n) {
      let r = this.subTreeObservers.get(e) || [];
      r.push(n);
      this.subTreeObservers.set(e, r);
    }
    handleContentMutation(e) {
      let {
        contentObservers: n
      } = this;
      if (n.size) {
        for (let r of e) {
          let {
            block: e
          } = r;
          let o = n.get(e.id);
          if (o) {
            o.forEach(c);
          }
        }
      }
    }
    handleSubTreeMutation(e) {
      let {
        subTreeObservers: n,
        blockManager: r
      } = this;
      if (n.size) {
        for (let [o, i] of n) {
          let n = r.getBlockStructByBlockId(o);
          if (n) {
            for (let r of e) {
              let {
                block: e
              } = r;
              if (n.contains(e)) {
                i.forEach(c);
                break;
              }
            }
          }
        }
      }
    }
    constructor(e) {
      this.blockManager = e;
      a(this, "subTreeObservers", new Map());
      a(this, "contentObservers", new Map());
      a(this, "sub", undefined);
      a(this, "onBlockMutation", e => {
        let {
          mutations: n
        } = e;
        let {
          updated: r
        } = n;
        this.handleContentMutation(r);
        this.handleSubTreeMutation(r);
      });
      this.sub = this.blockManager.structService.mutation$.subscribe(this.onBlockMutation);
    }
  }
  let s = [];
  function d(e) {
    let {
      selectionAPI: n,
      blockManager: r,
      filter: a,
      selectionFilter: c,
      selectionType: d,
      recursive: h = false,
      excludeSources: f = s,
      fold: p
    } = e;
    let [g, m] = reactCoreLibraryReexport.useState(() => n.getSelection());
    let [v, b] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => m(n.getSelection());
      n.onSelectionChange(e);
      return () => n.offSelectionChange(e);
    }, [n]);
    let [y, _] = reactCoreLibraryReexport.useState([]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = n.getContext();
      let o = [];
      if (!e || !f.includes(e.source)) {
        let e = g.filter(e => !c || c(e)).map(e => r.getBlockModelByBlockIdNotCheck(e.id)).filter(e => !!e && (!a || a(e)));
        o = blockSelectionUtils.getBlockModelsWithChildren({
          fold: p,
          blockList: e,
          shouldIgnoreFold: e.length > 1,
          blockManager: r,
          recursive: h
        }).filter(e => !a || a(e));
      }
      let i = o.sort();
      _(e => i.length === e.length && i.every((n, r) => n.id === e[r].id && n.type === e[r].type) ? e : i);
    }, [g, n, v, r, a, d, h, f, p]);
    let E = reactCoreLibraryReexport.useCallback(() => {
      b(e => e + 1);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      let e = new u(r);
      n.getSelection().forEach(n => e.observe(n.id, E, {
        content: true,
        subTree: true
      }));
      return () => e.disconnect();
    }, [g, r, n, E]);
    let [C, k] = reactCoreLibraryReexport.useState([]);
    let w = reactCoreLibraryReexport.useRef(0);
    reactCoreLibraryReexport.useEffect(() => {
      ++w.current;
    }, [y]);
    let I = reactCoreLibraryReexport.useCallback(async () => {
      let e = w.current;
      let n = await blockSelectionUtils.renderBlockViews(y, r);
      if (e === w.current) {
        k(n);
      }
    }, [y, r]);
    let S = reactCoreLibraryReexport.useRef(I);
    reactCoreLibraryReexport.useEffect(() => {
      S.current = I;
    }, [I]);
    let T = reactCoreLibraryReexport.useMemo(() => debounceUtil_1_1.debounce(() => S.current()), []);
    reactCoreLibraryReexport.useEffect(() => () => {
      ++w.current;
      T.cancel();
    }, [T]);
    reactCoreLibraryReexport.useEffect(() => {
      T();
    }, [y]);
    return C;
  }
  require.d(exports, {
    useBlockSelectionViews: function () {
      return d;
    }
  });
}