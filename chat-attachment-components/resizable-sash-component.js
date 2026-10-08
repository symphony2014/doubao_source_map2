// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'ResizableSash'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 897156
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var asyncSkillReceiveMessageBox_1_1 = require("async-skill-receive-message-box_1_1") /*id: 794651*/;
  var asyncSkillReceiveHook = require("async-skill-receive-hook") /*id: 463729*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      orientation: n = "horizontal",
      onDrag: r,
      onDragEnd: d,
      className: u,
      style: p
    } = e;
    let h = useLatestCallbackHook_1.useLatestCallback(r);
    let m = useLatestCallbackHook_1.useLatestCallback(d);
    let {
      current: f
    } = reactCoreLibraryReexport.useRef({
      dragging: false,
      startPos: 0,
      curPos: 0,
      pointerId: null
    });
    let g = reactCoreLibraryReexport.useRef(null);
    let v = reactCoreLibraryReexport.useRef(null);
    let [, b] = asyncSkillReceiveMessageBox_1_1.useMessageBoxUpdate();
    let {
      run: y
    } = asyncSkillReceiveHook.useSkillReceive(e => {
      if (!f.dragging) {
        return;
      }
      let t = {
        delta: e - f.curPos,
        curPos: e,
        prevPos: f.curPos,
        startPos: f.startPos
      };
      f.curPos = e;
      h(t);
    }, {
      leading: true,
      trailing: true,
      wait: 15
    });
    let x = reactCoreLibraryReexport.useCallback(e => {
      y(n === "horizontal" ? e.clientX : e.clientY);
    }, [n]);
    let w = reactCoreLibraryReexport.useCallback(() => {
      var e;
      if ((e = v.current) !== null && e !== undefined) {
        e.call(v);
      }
      v.current = null;
    }, []);
    let A = reactCoreLibraryReexport.useCallback(() => {
      var e;
      if (!f.dragging) {
        return;
      }
      w();
      f.dragging = false;
      let t = f.pointerId;
      f.pointerId = null;
      if (t !== null && ((e = g.current) === null || e === undefined ? undefined : e.hasPointerCapture(t))) {
        g.current.releasePointerCapture(t);
      }
      if (m != null) {
        m();
      }
      b();
    }, [b, m, w]);
    let _ = reactCoreLibraryReexport.useCallback(() => {
      A();
    }, [A]);
    let k = reactCoreLibraryReexport.useCallback(() => {
      if (v.current) {
        return;
      }
      let e = () => {
        A();
      };
      let t = () => {
        A();
      };
      let n = () => {
        A();
      };
      window.addEventListener("pointerup", e, true);
      window.addEventListener("pointercancel", t, true);
      window.addEventListener("blur", n);
      v.current = () => {
        window.removeEventListener("pointerup", e, true);
        window.removeEventListener("pointercancel", t, true);
        window.removeEventListener("blur", n);
      };
    }, [A]);
    reactCoreLibraryReexport.useEffect(() => () => {
      w();
    }, [w]);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      get dragging() {
        return f.dragging;
      }
    }), []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o("sash flex flex-col items-center", "opacity-0 hover:opacity-60 active:opacity-100 transition-opacity", u),
      style: {
        cursor: n === "horizontal" ? "col-resize" : "row-resize",
        ...((f == null ? undefined : f.dragging) ? {
          opacity: 1
        } : {}),
        ...p
      },
      "data-testid": "chat_route_layout_sash",
      onPointerDown: e => {
        var t;
        e.preventDefault();
        f.dragging = true;
        f.pointerId = e.pointerId;
        f.curPos = f.startPos = n === "horizontal" ? e.clientX : e.clientY;
        k();
        if ((t = g.current) !== null && t !== undefined) {
          t.setPointerCapture(e.pointerId);
        }
      },
      onLostPointerCapture: () => {
        A();
      },
      onPointerUp: _,
      onPointerMove: x,
      ref: g,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "min-h-0 w-1 flex-1 bg-s-color-border-primary"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
            h-20 w-6 flex-shrink-0 rounded-3 border-[1px] border-solid
            border-s-color-border-primary bg-s-color-bg-body
          `
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "min-h-0 w-1 flex-1 bg-s-color-border-primary"
      })]
    });
  });
  require.d(exports, {
    ResizableSash: function () {
      return d;
    }
  });
}