// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'applyVariantValues'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 331813
         */
module.exports = function (module, exports, require) {
  var motionValueFactory = require("motion-value-factory") /*id: 413604*/;
  var arrayCheckUtil = require("array-check-util") /*id: 818975*/;
  var resolveVariantUtil = require("resolve-variant-util") /*id: 868547*/;
  function o(t, e) {
    let {
      transitionEnd: i = {},
      transition: o = {},
      ...a
    } = resolveVariantUtil.resolveVariant(t, e) || {};
    for (let e in a = {
      ...a,
      ...i
    }) {
      var l;
      l = a[e];
      let i = arrayCheckUtil.isArray(l) ? l[l.length - 1] || 0 : l;
      if (t.hasValue(e)) {
        t.getValue(e).set(i);
      } else {
        t.addValue(e, motionValueFactory.createMotionValue(i));
      }
    }
  }
  require.d(exports, {
    applyVariantValues: function () {
      return o;
    }
  });
}