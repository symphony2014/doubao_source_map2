// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'resolveEasing'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 898748
         */
module.exports = function (module, exports, require) {
  var stubFunctions = require("stub-functions") /*id: 319573*/;
  var identityFunction = require("identity-function") /*id: 482695*/;
  var cubicBezierEasingUtil = require("cubic-bezier-easing-util") /*id: 750010*/;
  var cubicBezierEasingFns = require("cubic-bezier-easing-fns") /*id: 348834*/;
  var easingFunctionVariants = require("easing-function-variants") /*id: 74618*/;
  var cubicBezierEasing_1 = require("cubic-bezier-easing_1") /*id: 4151*/;
  var cubicBezierEasingPresets = require("cubic-bezier-easing-presets") /*id: 13122*/;
  var arrayNumberCheckUtil = require("array-number-check-util") /*id: 671127*/;
  let u = {
    linear: identityFunction.identity,
    easeIn: cubicBezierEasingPresets.easeInBezier,
    easeInOut: cubicBezierEasingPresets.easeInOutBezier,
    easeOut: cubicBezierEasingPresets.easeOutBezier,
    circIn: easingFunctionVariants.trigEasingFunction,
    circInOut: easingFunctionVariants.easeInOutVariant,
    circOut: easingFunctionVariants.inverseEasingFunc,
    backIn: cubicBezierEasingFns.invertedEasingFn,
    backInOut: cubicBezierEasingFns.easeInOutWrapper,
    backOut: cubicBezierEasingFns.customBezierEasing,
    anticipate: cubicBezierEasingUtil.cubicEasingFn
  };
  let p = e => typeof e == "string";
  let h = e => {
    if (arrayNumberCheckUtil.isNumberArray(e)) {
      stubFunctions.noopFunc(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
      let [t, n, l, r] = e;
      return cubicBezierEasing_1.cubicBezierEasing(t, n, l, r);
    }
    if (p(e)) {
      stubFunctions.noopFunc(u[e] !== undefined, `Invalid easing type '${e}'`, "invalid-easing-type");
      return u[e];
    } else {
      return e;
    }
  };
  require.d(exports, {
    resolveEasing: function () {
      return h;
    }
  });
}