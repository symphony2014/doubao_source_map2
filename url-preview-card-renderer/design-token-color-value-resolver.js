// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ef' to 'resolveColorValue'
// - Renamed export 'H2' to 'formatLengthValue'
// - Renamed export 'Yh' to 'identityResolver'
// - Renamed export 'rn' to 'resolveLinearGradient'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 598953
         */
module.exports = function (module, exports, require) {
  var errorConstantsCodes = require("error-constants-codes") /*id: 850732*/;
  var colorFormatUtils = require("color-format-utils") /*id: 912018*/;
  var designTokenColors = require("design-token-colors") /*id: 568719*/;
  let _ = Object.entries(errorConstantsCodes.WEQ).reduce((e, t) => {
    e[t[1]] = t[0];
    return e;
  }, {});
  let a = {
    mode: "LIGHT",
    vars: designTokenColors.designTokens
  };
  function E(e) {
    if (!e) {
      return null;
    }
    switch (e.type) {
      case errorConstantsCodes.zBQ.AUTO:
        return "auto";
      case errorConstantsCodes.zBQ.POINT:
        return `${e.value}px`;
      case errorConstantsCodes.zBQ.PERCENTAGE:
        return `${e.value}%`;
      default:
        return null;
    }
  }
  function l(e) {
    if (!(e == null ? undefined : e.linear)?.colorsV2?.length) {
      return;
    }
    let {
      deg: r
    } = e.linear;
    let i = e.linear.colorsV2;
    let o = T(i[0]);
    if (i.length === 1) {
      return o;
    }
    let _ = T(i[1]);
    if (r !== undefined) {
      return `linear-gradient(${r}deg, ${o}, ${_})`;
    } else {
      return `linear-gradient(${o}, ${_})`;
    }
  }
  function c(e) {
    return e;
  }
  function T(e, t) {
    if (e) {
      if (e.token) {
        if (t) {
          return function (e) {
            if (a.vars) {
              return a.vars?.[e];
            }
          }(e.token);
        } else {
          return `var(--${e.token})`;
        }
      }
      if (e.key) {
        return function (e) {
          if (e.type === errorConstantsCodes.WEQ.STATIC_WHITE) {
            let t = Number.isInteger(e.alpha) ? e.alpha / 100 : 1;
            return `rgba(255, 255, 255, ${t})`;
          }
          let t = `${_[e.type]}${e.value}`;
          let n = 1;
          if (Number.isInteger(e.alpha)) {
            n = e.alpha / 100;
          }
          return `rgba(var(--${t}-raw), ${n})`;
        }(e.key);
      }
      if (typeof e.value == "number" && Number.isInteger(e.value)) {
        var n;
        n = e.value;
        return colorFormatUtils.numberToRgba(n);
      }
    }
  }
  require.d(exports, {
    resolveColorValue: function () {
      return T;
    },
    formatLengthValue: function () {
      return E;
    },
    identityResolver: function () {
      return c;
    },
    resolveLinearGradient: function () {
      return l;
    }
  });
}