// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'AnimationDebugControls'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 850149
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useMediaQuery = require("use-media-query") /*id: 797741*/;
  var mergeClassNamesUtil = require("merge-class-names-util") /*id: 975716*/;
  var animationDebugContext = require("animation-debug-context") /*id: 60445*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      className: t,
      isCanvasOpen: n = false
    } = e;
    let {
      animationScale: s,
      setAnimationScale: c,
      showBorders: d,
      setShowBorders: u,
      triggerRemount: p
    } = animationDebugContext.useAnimationDebug();
    let m = useMediaQuery.useMediaQuery("(width < 600px)") || n;
    let v = reactCoreLibraryReexport.useMemo(() => [{
      value: 0.25,
      showInSm: true
    }, {
      value: 0.5,
      showInSm: true
    }, {
      value: 0.75
    }, {
      value: 1,
      showInSm: true
    }, {
      value: 1.5
    }, {
      value: 2,
      showInSm: true
    }], []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: mergeClassNamesUtil.mergeClassNames("w-full flex flex-row justify-center items-center gap-[8px] !flex-wrap", t),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex flex-row items-center gap-[8px]",
        children: v.map(e => reactJsxRuntimeCoreReexport.jsx("button", {
          className: mergeClassNamesUtil.mergeClassNames("w-[4em] shrink-0 grow-1 cursor-pointer items-center justify-center border-solid rounded-[8px] border border-s-color-border-tertiary bg-s-color-bg-primary text-xs text-s-color-text-primary transition-colors hover:bg-s-color-bg-secondary py-[2px] px-[4px] outline-none flex", !e.showInSm && m && "hidden", s === e.value && s === 1 && "border-blue-300/50 bg-blue-300/20 hover:bg-blue-300/30", s === e.value && s !== 1 && "border-red-300/50 bg-red-300/20 hover:bg-red-300/30"),
          onClick: () => c(e.value),
          children: reactJsxRuntimeCoreReexport.jsxs("span", {
            className: "trim-both",
            children: [e.value, "×"]
          })
        }, e.value))
      }), reactJsxRuntimeCoreReexport.jsxs("button", {
        className: mergeClassNamesUtil.mergeClassNames("flex cursor-pointer flex-col items-center rounded-[8px] border-solid border border-s-color-border-tertiary bg-s-color-bg-primary text-xs text-s-color-text-primary transition-colors hover:bg-s-color-bg-secondary py-[2px] px-[4px] outline-none", d && "border-red-300/50 bg-red-300/20 hover:bg-red-300/30"),
        onClick: () => u(!d),
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: "trim-both",
          children: d ? "Hide borders" : "Show borders"
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: "trim-both invisible h-0 overflow-clip leading-0",
          children: "Show borders"
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: "trim-both invisible h-0 overflow-clip leading-0",
          children: "Hide borders"
        })]
      }), reactJsxRuntimeCoreReexport.jsx("button", {
        className: mergeClassNamesUtil.mergeClassNames("flex cursor-pointer flex-col items-center rounded-[8px] border-solid border border-s-color-border-tertiary bg-s-color-bg-primary text-xs text-s-color-text-primary transition-colors hover:bg-s-color-bg-secondary py-[2px] px-[4px] outline-none"),
        onClick: () => p(),
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: "trim-both",
          children: "Remount"
        })
      })]
    });
  };
  require.d(exports, {
    AnimationDebugControls: function () {
      return s;
    }
  });
}