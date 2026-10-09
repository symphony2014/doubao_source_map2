// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'Presence'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 292112
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var reactUseLayoutEffectSafe = require("react-use-layout-effect-safe") /*id: 245652*/;
  var a = e => {
    var t;
    let u;
    let c;
    let {
      present: l,
      children: f
    } = e;
    let h = function (e) {
      var t;
      var n;
      let [i, a] = reactCoreLibraryReexport.useState();
      let u = reactCoreLibraryReexport.useRef(null);
      let c = reactCoreLibraryReexport.useRef(e);
      let l = reactCoreLibraryReexport.useRef("none");
      t = e ? "mounted" : "unmounted";
      n = {
        mounted: {
          UNMOUNT: "unmounted",
          ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
          MOUNT: "mounted",
          ANIMATION_END: "unmounted"
        },
        unmounted: {
          MOUNT: "mounted"
        }
      };
      let [f, h] = reactCoreLibraryReexport.useReducer((e, t) => {
        let r = n[e][t];
        return r ?? e;
      }, t);
      reactCoreLibraryReexport.useEffect(() => {
        let e = s(u.current);
        l.current = f === "mounted" ? e : "none";
      }, [f]);
      reactUseLayoutEffectSafe.useLayoutEffect(() => {
        let t = u.current;
        let n = c.current;
        if (n !== e) {
          let r = l.current;
          let i = s(t);
          if (e) {
            h("MOUNT");
          } else if (i === "none" || (t == null ? undefined : t.display) === "none") {
            h("UNMOUNT");
          } else if (n && r !== i) {
            h("ANIMATION_OUT");
          } else {
            h("UNMOUNT");
          }
          c.current = e;
        }
      }, [e, h]);
      reactUseLayoutEffectSafe.useLayoutEffect(() => {
        if (i) {
          let t;
          let n = i.ownerDocument.defaultView ?? window;
          let r = e => {
            let r = s(u.current).includes(CSS.escape(e.animationName));
            if (e.target === i && r && (h("ANIMATION_END"), !c.current)) {
              let e = i.style.animationFillMode;
              i.style.animationFillMode = "forwards";
              t = n.setTimeout(() => {
                if (i.style.animationFillMode === "forwards") {
                  i.style.animationFillMode = e;
                }
              });
            }
          };
          let o = e => {
            if (e.target === i) {
              l.current = s(u.current);
            }
          };
          i.addEventListener("animationstart", o);
          i.addEventListener("animationcancel", r);
          i.addEventListener("animationend", r);
          return () => {
            n.clearTimeout(t);
            i.removeEventListener("animationstart", o);
            i.removeEventListener("animationcancel", r);
            i.removeEventListener("animationend", r);
          };
        }
        h("ANIMATION_END");
      }, [i, h]);
      return {
        isPresent: ["mounted", "unmountSuspended"].includes(f),
        ref: reactCoreLibraryReexport.useCallback(e => {
          u.current = e ? getComputedStyle(e) : null;
          a(e);
        }, [])
      };
    }(l);
    let d = typeof f == "function" ? f({
      present: h.isPresent
    }) : reactCoreLibraryReexport.Children.only(f);
    let p = reactMergeRefs.useMergeRefs(h.ref, (c = (u = Object.getOwnPropertyDescriptor((t = d).props, "ref")?.get) && "isReactWarning" in u && u.isReactWarning) ? t.ref : (c = (u = Object.getOwnPropertyDescriptor(t, "ref")?.get) && "isReactWarning" in u && u.isReactWarning) ? t.props.ref : t.props.ref || t.ref);
    if (typeof f == "function" || h.isPresent) {
      return reactCoreLibraryReexport.cloneElement(d, {
        ref: p
      });
    } else {
      return null;
    }
  };
  function s(e) {
    return (e == null ? undefined : e.animationName) || "none";
  }
  a.displayName = "Presence";
  require.d(exports, {
    Presence: function () {
      return a;
    }
  });
}