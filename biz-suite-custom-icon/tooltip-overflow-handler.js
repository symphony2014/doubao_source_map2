// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'sj' to 'useOverflowTooltip'
// - Renamed export 'tG' to 'useStableCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 831248
         */
module.exports = function (module, exports, require) {
  var isDomElementUtil_1 = require("is-dom-element-util_1") /*id: 425304*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function l(e) {
    let i = reactCoreLibraryReexport.useRef(e);
    i.current = e;
    let n = reactCoreLibraryReexport.useRef();
    n.current ||= function () {
      var e = arguments.length;
      var n = Array(e);
      var r = 0;
      for (; r < e; r++) {
        n[r] = arguments[r];
      }
      return i.current.apply(this, n);
    };
    return n.current;
  }
  let a = e => {
    let {
      ref: i,
      title: n,
      delay: a,
      shouldShowTooltip: s
    } = e;
    let c = () => s ? s() : !!i.current && i.current.scrollWidth > i.current.clientWidth;
    let d = reactCoreLibraryReexport.useRef(null);
    let u = reactCoreLibraryReexport.useRef({
      left: -9999,
      top: -9999
    });
    let h = reactCoreLibraryReexport.useRef();
    let g = reactCoreLibraryReexport.useCallback(() => {
      if (!n) {
        return;
      }
      let e = document.createElement("div");
      e.textContent = n;
      e.style.left = `${u.current.left + 6}px`;
      e.style.top = `${u.current.top + 6}px`;
      e.classList.add("text-title-tooltip");
      let {
        body: i
      } = document;
      if (i) {
        i.appendChild(e);
        d.current = e;
      }
    }, [n]);
    let p = () => {
      try {
        let {
          body: e
        } = document;
        if (e && d.current && isDomElementUtil_1.isDomElement(d.current) && d.current.parentNode === e) {
          e.removeChild(d.current);
          d.current = null;
        }
      } catch (e) {}
    };
    let f = reactCoreLibraryReexport.useCallback(() => {
      h.current = setTimeout(() => {
        if (i.current && c()) {
          g();
        }
      }, a);
    }, [n, i.current]);
    let v = l(() => {
      if (h.current) {
        clearTimeout(h.current);
      }
      p();
    });
    let m = l(e => {
      let {
        pageX: i,
        pageY: n
      } = e;
      u.current.left = i;
      u.current.top = n;
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (i.current && n) {
        i.current.addEventListener("mouseenter", f);
        i.current.addEventListener("mouseleave", v);
        i.current.addEventListener("mousemove", m);
        return () => {
          if (i.current) {
            i.current.removeEventListener("mouseenter", f);
            i.current.removeEventListener("mouseleave", v);
            i.current.removeEventListener("mousemove", m);
          }
          if (h.current) {
            clearTimeout(h.current);
          }
        };
      }
    }, [n, i.current, f]);
    return {
      destory: v
    };
  };
  require.d(exports, {
    useOverflowTooltip: function () {
      return a;
    },
    useStableCallback: function () {
      return l;
    }
  });
}