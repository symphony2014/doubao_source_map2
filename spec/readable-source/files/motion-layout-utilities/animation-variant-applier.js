// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'applyAnimationVariant'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 400528
         */
module.exports = function (module, exports, require) {
  var animatedValueFactory = require("animated-value-factory") /*id: 556563*/;
  var arrayTypeCheckUtility = require("array-type-check-utility") /*id: 208770*/;
  var animationVariantResolver_1 = require("animation-variant-resolver_1") /*id: 816095*/;
  function o(t, e) {
    let {
      transitionEnd: i = {},
      transition: o = {},
      ...a
    } = animationVariantResolver_1.resolveAnimationVariant(t, e) || {};
    for (let e in a = {
      ...a,
      ...i
    }) {
      var l;
      l = a[e];
      let i = arrayTypeCheckUtility.isArray(l) ? l[l.length - 1] || 0 : l;
      if (t.hasValue(e)) {
        t.getValue(e).set(i);
      } else {
        t.addValue(e, animatedValueFactory.createAnimatedValue(i));
      }
    }
  }
  require.d(exports, {
    applyAnimationVariant: function () {
      return o;
    }
  });
}