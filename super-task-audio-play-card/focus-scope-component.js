// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'FocusScope'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16352.bcbc6b55.js
         * chunkId: 16352
         * moduleId: 664921
         */
module.exports = function (module, exports, require) {
  let o;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var reactPrimitiveComponents = require("react-primitive-components") /*id: 301296*/;
  var reactUseLatestCallback = require("react-use-latest-callback") /*id: 440027*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var c = "focusScope.autoFocusOnMount";
  var u = "focusScope.autoFocusOnUnmount";
  var d = {
    bubbles: false,
    cancelable: true
  };
  var p = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      loop: n = false,
      trapped: o = false,
      onMountAutoFocus: p,
      onUnmountAutoFocus: y,
      ...v
    } = e;
    let [b, E] = reactCoreLibraryReexport.useState(null);
    let O = reactUseLatestCallback.useLatestCallback(p);
    let w = reactUseLatestCallback.useLatestCallback(y);
    let C = reactCoreLibraryReexport.useRef(null);
    let x = reactMergeRefs.useMergeRefs(t, e => E(e));
    let j = reactCoreLibraryReexport.useRef({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }).current;
    reactCoreLibraryReexport.useEffect(() => {
      if (o) {
        let e = function (e) {
          if (j.paused || !b) {
            return;
          }
          let t = e.target;
          if (b.contains(t)) {
            C.current = t;
          } else {
            m(C.current, {
              select: true
            });
          }
        };
        let t = function (e) {
          if (j.paused || !b) {
            return;
          }
          let t = e.relatedTarget;
          if (t !== null && !b.contains(t)) {
            m(C.current, {
              select: true
            });
          }
        };
        document.addEventListener("focusin", e);
        document.addEventListener("focusout", t);
        let n = new MutationObserver(function (e) {
          if (document.activeElement === document.body) {
            for (let t of e) {
              if (t.removedNodes.length > 0) {
                m(b);
              }
            }
          }
        });
        if (b) {
          n.observe(b, {
            childList: true,
            subtree: true
          });
        }
        return () => {
          document.removeEventListener("focusin", e);
          document.removeEventListener("focusout", t);
          n.disconnect();
        };
      }
    }, [o, b, j.paused]);
    reactCoreLibraryReexport.useEffect(() => {
      if (b) {
        g.add(j);
        let e = document.activeElement;
        if (!b.contains(e)) {
          let t = new CustomEvent(c, d);
          b.addEventListener(c, O);
          b.dispatchEvent(t);
          if (!t.defaultPrevented) {
            (function (e, {
              select: t = false
            } = {}) {
              let n = document.activeElement;
              for (let o of e) {
                m(o, {
                  select: t
                });
                if (document.activeElement !== n) {
                  return;
                }
              }
            })(f(b).filter(e => e.tagName !== "A"), {
              select: true
            });
            if (document.activeElement === e) {
              m(b);
            }
          }
        }
        return () => {
          b.removeEventListener(c, O);
          setTimeout(() => {
            let t = new CustomEvent(u, d);
            b.addEventListener(u, w);
            b.dispatchEvent(t);
            if (!t.defaultPrevented) {
              m(e ?? document.body, {
                select: true
              });
            }
            b.removeEventListener(u, w);
            g.remove(j);
          }, 0);
        };
      }
    }, [b, O, w, j]);
    let S = reactCoreLibraryReexport.useCallback(e => {
      if (!n && !o || j.paused) {
        return;
      }
      let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey;
      let r = document.activeElement;
      if (t && r) {
        let t = e.currentTarget;
        let [o, i] = function (e) {
          let t = f(e);
          return [h(t, e), h(t.reverse(), e)];
        }(t);
        if (o && i) {
          if (e.shiftKey || r !== i) {
            if (e.shiftKey && r === o) {
              e.preventDefault();
              if (n) {
                m(i, {
                  select: true
                });
              }
            }
          } else {
            e.preventDefault();
            if (n) {
              m(o, {
                select: true
              });
            }
          }
        } else if (r === t) {
          e.preventDefault();
        }
      }
    }, [n, o, j.paused]);
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
      tabIndex: -1,
      ...v,
      ref: x,
      onKeyDown: S
    });
  });
  function f(e) {
    let t = [];
    let n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: e => {
        let t = e.tagName === "INPUT" && e.type === "hidden";
        if (e.disabled || e.hidden || t) {
          return NodeFilter.FILTER_SKIP;
        } else if (e.tabIndex >= 0) {
          return NodeFilter.FILTER_ACCEPT;
        } else {
          return NodeFilter.FILTER_SKIP;
        }
      }
    });
    while (n.nextNode()) {
      t.push(n.currentNode);
    }
    return t;
  }
  function h(e, t) {
    for (let n of e) {
      if (!function (e, t) {
        let {
          upTo: n
        } = t;
        if (getComputedStyle(e).visibility === "hidden") {
          return true;
        }
        while (e && (n === undefined || e !== n)) {
          if (getComputedStyle(e).display === "none") {
            return true;
          }
          e = e.parentElement;
        }
        return false;
      }(n, {
        upTo: t
      })) {
        return n;
      }
    }
  }
  function m(e, {
    select: t = false
  } = {}) {
    if (e && e.focus) {
      var n;
      let o = document.activeElement;
      e.focus({
        preventScroll: true
      });
      if (e !== o && (n = e) instanceof HTMLInputElement && "select" in n && t) {
        e.select();
      }
    }
  }
  p.displayName = "FocusScope";
  o = [];
  var g = {
    add(e) {
      let t = o[0];
      if (e !== t) {
        if (t != null) {
          t.pause();
        }
      }
      (o = y(o, e)).unshift(e);
    },
    remove(e) {
      var t;
      if ((t = (o = y(o, e))[0]) !== null && t !== undefined) {
        t.resume();
      }
    }
  };
  function y(e, t) {
    let n = [...e];
    let o = n.indexOf(t);
    if (o !== -1) {
      n.splice(o, 1);
    }
    return n;
  }
  require.d(exports, {
    FocusScope: function () {
      return p;
    }
  });
}