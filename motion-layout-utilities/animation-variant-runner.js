// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'animate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 368852
         */
module.exports = function (module, exports, require) {
  var animationVariantResolver_1 = require("animation-variant-resolver_1") /*id: 816095*/;
  var exportResolveUtil = require("export-resolve-util") /*id: 809859*/;
  var frameloopSchedulerUtils_1 = require("frameloop-scheduler-utils_1") /*id: 668554*/;
  var cssLayoutPropsSet = require("css-layout-props-set") /*id: 549077*/;
  var animationVariantApplier = require("animation-variant-applier") /*id: 400528*/;
  var addWillChangeProperty = require("add-will-change-property") /*id: 118534*/;
  var extractFramerAppearDataAttribute = require("extract-framer-appear-data-attribute") /*id: 114896*/;
  var animationCoreFactory = require("animation-core-factory") /*id: 905602*/;
  function c(t, e, {
    delay: i = 0,
    transitionOverride: n,
    type: c
  } = {}) {
    let {
      transition: d = t.getDefaultTransition(),
      transitionEnd: p,
      ...f
    } = e;
    if (n) {
      d = n;
    }
    let m = [];
    let g = c && t.animationState && t.animationState.getState()[c];
    for (let e in f) {
      let n = t.getValue(e, t.latestValues[e] ?? null);
      let a = f[e];
      if (a === undefined || g && function (t, e) {
        let {
          protectedKeys: i,
          needsAnimating: n
        } = t;
        let r = i.hasOwnProperty(e) && n[e] !== true;
        n[e] = false;
        return r;
      }(g, e)) {
        continue;
      }
      let c = {
        delay: i,
        ...exportResolveUtil.getPropertyWithFallback(d || {}, e)
      };
      let p = n.get();
      if (p !== undefined && !n.isAnimating && !Array.isArray(a) && a === p && !c.velocity) {
        continue;
      }
      let y = false;
      if (window.MotionHandoffAnimation) {
        let i = extractFramerAppearDataAttribute.extractFramerAppearData(t);
        if (i) {
          let t = window.MotionHandoffAnimation(i, e, frameloopSchedulerUtils_1.scheduleFrame);
          if (t !== null) {
            c.startTime = t;
            y = true;
          }
        }
      }
      addWillChangeProperty.addWillChangeProperty(t, e);
      n.start(animationCoreFactory.createAnimation(e, n, a, t.shouldReduceMotion && cssLayoutPropsSet.layoutAndTransformProps.has(e) ? {
        type: false
      } : c, t, y));
      let x = n.animation;
      if (x) {
        m.push(x);
      }
    }
    if (p) {
      Promise.all(m).then(() => {
        frameloopSchedulerUtils_1.scheduleFrame.update(() => {
          if (p) {
            animationVariantApplier.applyAnimationVariant(t, p);
          }
        });
      });
    }
    return m;
  }
  function d(t, e) {
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let s = animationVariantResolver_1.resolveAnimationVariant(t, e, r.type === "exit" ? t.presenceContext?.custom : undefined);
    let {
      transition: o = t.getDefaultTransition() || {}
    } = s || {};
    if (r.transitionOverride) {
      o = r.transitionOverride;
    }
    let a = s ? () => Promise.all(c(t, s, r)) : () => Promise.resolve();
    let l = t.variantChildren && t.variantChildren.size ? function (i = 0) {
      let {
        delayChildren: n = 0,
        staggerChildren: s,
        staggerDirection: a
      } = o;
      return function (t, e, i = 0, n = 0, r = 1, s) {
        let o = [];
        let a = (t.variantChildren.size - 1) * n;
        let l = r === 1 ? function (t = 0) {
          return t * n;
        } : function (t = 0) {
          return a - t * n;
        };
        Array.from(t.variantChildren).sort(p).forEach((t, n) => {
          t.notify("AnimationStart", e);
          o.push(d(t, e, {
            ...s,
            delay: i + l(n)
          }).then(() => t.notify("AnimationComplete", e)));
        });
        return Promise.all(o);
      }(t, e, n + i, s, a, r);
    } : () => Promise.resolve();
    let {
      when: u
    } = o;
    if (!u) {
      return Promise.all([a(), l(r.delay)]);
    }
    {
      let [t, e] = u === "beforeChildren" ? [a, l] : [l, a];
      return t().then(() => e());
    }
  }
  function p(t, e) {
    return t.sortNodePosition(e);
  }
  function f(t, e) {
    let i;
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    t.notify("AnimationStart", e);
    if (Array.isArray(e)) {
      i = Promise.all(e.map(e => d(t, e, r)));
    } else if (typeof e == "string") {
      i = d(t, e, r);
    } else {
      let s = typeof e == "function" ? animationVariantResolver_1.resolveAnimationVariant(t, e, r.custom) : e;
      i = Promise.all(c(t, s, r));
    }
    return i.then(() => {
      t.notify("AnimationComplete", e);
    });
  }
  require.d(exports, {
    animate: function () {
      return f;
    }
  });
}