// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'createCollectionProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18380.923ae249.js
         * chunkId: 18380
         * moduleId: 680586
         */
module.exports = function (module, exports, require) {
  var n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextUtils = require("react-context-utils") /*id: 187414*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var reactSlotUtils = require("react-slot-utils") /*id: 293688*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function l(e, t, r) {
    if (typeof e == "function" ? e === t : e.has(t)) {
      if (arguments.length < 3) {
        return t;
      } else {
        return r;
      }
    }
    throw TypeError("Private element is not present on this object");
  }
  function c(e) {
    let t = e + "CollectionProvider";
    let [r, n] = reactContextUtils.createContextScope(t);
    let [l, c] = r(t, {
      collectionRef: {
        current: null
      },
      itemMap: new Map()
    });
    let d = e => {
      let {
        scope: t,
        children: r
      } = e;
      let n = reactCoreLibraryReexport.useRef(null);
      let o = reactCoreLibraryReexport.useRef(new Map()).current;
      return reactJsxRuntimeCoreReexport.jsx(l, {
        scope: t,
        itemMap: o,
        collectionRef: n,
        children: r
      });
    };
    d.displayName = t;
    let f = e + "CollectionSlot";
    let p = reactSlotUtils.createSlot(f);
    let h = reactCoreLibraryReexport.forwardRef((e, t) => {
      let {
        scope: r,
        children: n
      } = e;
      let u = c(f, r);
      let o = reactMergeRefs.useMergeRefs(t, u.collectionRef);
      return reactJsxRuntimeCoreReexport.jsx(p, {
        ref: o,
        children: n
      });
    });
    h.displayName = f;
    let v = e + "CollectionItemSlot";
    let D = "data-radix-collection-item";
    let g = reactSlotUtils.createSlot(v);
    let C = reactCoreLibraryReexport.forwardRef((e, t) => {
      let {
        scope: r,
        children: n,
        ...o
      } = e;
      let i = reactCoreLibraryReexport.useRef(null);
      let l = reactMergeRefs.useMergeRefs(t, i);
      let d = c(v, r);
      reactCoreLibraryReexport.useEffect(() => {
        d.itemMap.set(i, {
          ref: i,
          ...o
        });
        return () => void d.itemMap.delete(i);
      });
      return reactJsxRuntimeCoreReexport.jsx(g, {
        [D]: "",
        ref: l,
        children: n
      });
    });
    C.displayName = v;
    return [{
      Provider: d,
      Slot: h,
      ItemSlot: C
    }, function (t) {
      let r = c(e + "CollectionConsumer", t);
      return reactCoreLibraryReexport.useCallback(() => {
        let e = r.collectionRef.current;
        if (!e) {
          return [];
        }
        let t = Array.from(e.querySelectorAll(`[${D}]`));
        return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current));
      }, [r.collectionRef, r.itemMap]);
    }, n];
  }
  require.d(exports, {
    createCollectionProvider: function () {
      return c;
    }
  });
}