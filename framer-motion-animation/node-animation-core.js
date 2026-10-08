// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'animateNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 527160
         */
module.exports = function (module, exports, require) {
  var resolveVariantUtil = require("resolve-variant-util") /*id: 868547*/;
  var safePropertyAccess = require("safe-property-access") /*id: 945701*/;
  var frameloopSchedulerUtils = require("frameloop-scheduler-utils") /*id: 232060*/;
  var cssLayoutProps = require("css-layout-props") /*id: 599622*/;
  var applyVariantValuesToMotion = require("apply-variant-values-to-motion") /*id: 331813*/;
  var willChangeHandler = require("will-change-handler") /*id: 610147*/;
  var extractFramerAppearDataAttribute_1 = require("extract-framer-appear-data-attribute_1") /*id: 812636*/;
  var animationController = require("animation-controller") /*id: 421013*/;
  function d(t, e, {
    delay: i = 0,
    transitionOverride: n,
    type: d
  } = {}) {
    let {
      transition: c = t.getDefaultTransition(),
      transitionEnd: p,
      ...m
    } = e;
    if (n) {
      c = n;
    }
    let f = [];
    let v = d && t.animationState && t.animationState.getState()[d];
    for (let e in m) {
      let n = t.getValue(e, t.latestValues[e] ?? null);
      let a = m[e];
      if (a === undefined || v && function (t, e) {
        let {
          protectedKeys: i,
          needsAnimating: n
        } = t;
        let r = i.hasOwnProperty(e) && n[e] !== true;
        n[e] = false;
        return r;
      }(v, e)) {
        continue;
      }
      let d = {
        delay: i,
        ...safePropertyAccess.resolveValue(c || {}, e)
      };
      let p = n.get();
      if (p !== undefined && !n.isAnimating && !Array.isArray(a) && a === p && !d.velocity) {
        continue;
      }
      let y = false;
      if (window.MotionHandoffAnimation) {
        let i = extractFramerAppearDataAttribute_1.extractFramerAppearData(t);
        if (i) {
          let t = window.MotionHandoffAnimation(i, e, frameloopSchedulerUtils.scheduleFrame);
          if (t !== null) {
            d.startTime = t;
            y = true;
          }
        }
      }
      willChangeHandler.addWillChangeValue(t, e);
      n.start(animationController.createAnimation(e, n, a, t.shouldReduceMotion && cssLayoutProps.cssPropertySet.has(e) ? {
        type: false
      } : d, t, y));
      let x = n.animation;
      if (x) {
        f.push(x);
      }
    }
    if (p) {
      Promise.all(f).then(() => {
        frameloopSchedulerUtils.scheduleFrame.update(() => {
          if (p) {
            applyVariantValuesToMotion.applyVariantValues(t, p);
          }
        });
      });
    }
    return f;
  }
  var nodePositionCalc = require("node-position-calc") /*id: 212456*/;
  function p(t, e) {
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let s = resolveVariantUtil.resolveVariant(t, e, r.type === "exit" ? t.presenceContext?.custom : undefined);
    let {
      transition: o = t.getDefaultTransition() || {}
    } = s || {};
    if (r.transitionOverride) {
      o = r.transitionOverride;
    }
    let a = s ? () => Promise.all(d(t, s, r)) : () => Promise.resolve();
    let l = t.variantChildren && t.variantChildren.size ? function (i = 0) {
      let {
        delayChildren: n = 0,
        staggerChildren: s,
        staggerDirection: a
      } = o;
      return function (t, e, i = 0, n = 0, r = 0, s = 1, o) {
        let a = [];
        for (let l of t.variantChildren) {
          l.notify("AnimationStart", e);
          a.push(p(l, e, {
            ...o,
            delay: i + (typeof n == "function" ? 0 : n) + nodePositionCalc.calcNodeOffset(t.variantChildren, l, n, r, s)
          }).then(() => l.notify("AnimationComplete", e)));
        }
        return Promise.all(a);
      }(t, e, i, n, s, a, r);
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
  function m(t, e) {
    let i;
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    t.notify("AnimationStart", e);
    if (Array.isArray(e)) {
      i = Promise.all(e.map(e => p(t, e, r)));
    } else if (typeof e == "string") {
      i = p(t, e, r);
    } else {
      let s = typeof e == "function" ? resolveVariantUtil.resolveVariant(t, e, r.custom) : e;
      i = Promise.all(d(t, s, r));
    }
    return i.then(() => {
      t.notify("AnimationComplete", e);
    });
  }
  require.d(exports, {
    animateNode: function () {
      return m;
    }
  });
}