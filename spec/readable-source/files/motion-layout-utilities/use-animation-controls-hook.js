// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'useAnimControls'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 228242
         */
module.exports = function (module, exports, require) {
  var useLazyRefHook_1 = require("use-lazy-ref-hook_1") /*id: 906944*/;
  var useLayoutEffectSsr = require("use-layout-effect-ssr") /*id: 730770*/;
  var noopFunction_2 = require("noop-function_2") /*id: 772282*/;
  var animationVariantApplier = require("animation-variant-applier") /*id: 400528*/;
  var animationVariantRunner = require("animation-variant-runner") /*id: 368852*/;
  function l(t, e) {
    [...e].reverse().forEach(i => {
      let n = t.getVariant(i);
      if (n) {
        animationVariantApplier.applyAnimationVariant(t, n);
      }
      if (t.variantChildren) {
        t.variantChildren.forEach(t => {
          l(t, e);
        });
      }
    });
  }
  function u() {
    let t = false;
    let e = new Set();
    let i = {
      subscribe: t => {
        e.add(t);
        return () => void e.delete(t);
      },
      start(i, n) {
        noopFunction_2.noop(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
        let r = [];
        e.forEach(t => {
          r.push(animationVariantRunner.animate(t, i, {
            transitionOverride: n
          }));
        });
        return Promise.all(r);
      },
      set: i => {
        noopFunction_2.noop(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
        return e.forEach(t => {
          if (Array.isArray(i)) {
            l(t, i);
          } else if (typeof i == "string") {
            l(t, [i]);
          } else {
            animationVariantApplier.applyAnimationVariant(t, i);
          }
        });
      },
      stop() {
        e.forEach(t => {
          (function (t) {
            t.values.forEach(t => t.stop());
          })(t);
        });
      },
      mount: () => {
        t = true;
        return () => {
          t = false;
          i.stop();
        };
      }
    };
    return i;
  }
  function h() {
    let t = useLazyRefHook_1.useLazyRef(u);
    useLayoutEffectSsr.useSafeLayoutEffect(t.mount, []);
    return t;
  }
  require.d(exports, {
    useAnimControls: function () {
      return h;
    }
  });
}