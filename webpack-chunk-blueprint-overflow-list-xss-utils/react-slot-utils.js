// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z8' to 'createSlot'
// - Renamed export 'g7' to 'Slot'
// - Renamed export 'sA' to 'createSlottable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 293688
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function a(e) {
    let t = function (e) {
      let t = reactCoreLibraryReexport.forwardRef((e, t) => {
        let {
          children: n,
          ...o
        } = e;
        if (reactCoreLibraryReexport.isValidElement(n)) {
          var a;
          let e;
          let c;
          let l = (c = (e = Object.getOwnPropertyDescriptor((a = n).props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? a.ref : (c = (e = Object.getOwnPropertyDescriptor(a, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? a.props.ref : a.props.ref || a.ref;
          let f = function (e, t) {
            let n = {
              ...t
            };
            for (let r in t) {
              let i = e[r];
              let o = t[r];
              if (/^on[A-Z]/.test(r)) {
                if (i && o) {
                  n[r] = function () {
                    var e = arguments.length;
                    var t = Array(e);
                    var n = 0;
                    for (; n < e; n++) {
                      t[n] = arguments[n];
                    }
                    let r = o(...t);
                    i(...t);
                    return r;
                  };
                } else if (i) {
                  n[r] = i;
                }
              } else if (r === "style") {
                n[r] = {
                  ...i,
                  ...o
                };
              } else if (r === "className") {
                n[r] = [i, o].filter(Boolean).join(" ");
              }
            }
            return {
              ...e,
              ...n
            };
          }(o, n.props);
          if (n.type !== reactCoreLibraryReexport.Fragment) {
            f.ref = t ? reactMergeRefs.mergeRefs(t, l) : l;
          }
          return reactCoreLibraryReexport.cloneElement(n, f);
        }
        if (reactCoreLibraryReexport.Children.count(n) > 1) {
          return reactCoreLibraryReexport.Children.only(null);
        } else {
          return null;
        }
      });
      t.displayName = `${e}.SlotClone`;
      return t;
    }(e);
    let n = reactCoreLibraryReexport.forwardRef((e, n) => {
      let {
        children: i,
        ...a
      } = e;
      let s = reactCoreLibraryReexport.Children.toArray(i);
      let u = s.find(l);
      if (u) {
        let e = u.props.children;
        let i = s.map(t => t !== u ? t : reactCoreLibraryReexport.Children.count(e) > 1 ? reactCoreLibraryReexport.Children.only(null) : reactCoreLibraryReexport.isValidElement(e) ? e.props.children : null);
        return reactJsxRuntimeCoreReexport.jsx(t, {
          ...a,
          ref: n,
          children: reactCoreLibraryReexport.isValidElement(e) ? reactCoreLibraryReexport.cloneElement(e, undefined, i) : null
        });
      }
      return reactJsxRuntimeCoreReexport.jsx(t, {
        ...a,
        ref: n,
        children: i
      });
    });
    n.displayName = `${e}.Slot`;
    return n;
  }
  var s = a("Slot");
  var u = Symbol("radix.slottable");
  function c(e) {
    let t = e => {
      let {
        children: t
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: t
      });
    };
    t.displayName = `${e}.Slottable`;
    t.__radixId = u;
    return t;
  }
  function l(e) {
    return reactCoreLibraryReexport.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === u;
  }
  require.d(exports, {
    createSlot: function () {
      return a;
    },
    Slot: function () {
      return s;
    },
    createSlottable: function () {
      return c;
    }
  });
}