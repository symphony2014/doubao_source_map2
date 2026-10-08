// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ef' to 'resolveColorValue'
// - Renamed export 'H2' to 'formatSizeValue'
// - Renamed export 'Yh' to 'identityFunction'
// - Renamed export 'rn' to 'resolveGradient'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 470236
         */
module.exports = function (module, exports, require) {
  var errorConstantsCodes = require("error-constants-codes") /*id: 850732*/;
  var colorFormatConverter = require("color-format-converter") /*id: 712415*/;
  var designTokenColors = require("design-token-colors") /*id: 568719*/;
  let s = Object.entries(errorConstantsCodes.WEQ).reduce((e, t) => {
    e[t[1]] = t[0];
    return e;
  }, {});
  let l = {
    mode: "LIGHT",
    vars: designTokenColors.designTokens
  };
  function a(e) {
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
  function c(e) {
    if (!(e == null ? undefined : e.linear)?.colorsV2?.length) {
      return;
    }
    let {
      deg: n
    } = e.linear;
    let r = e.linear.colorsV2;
    let o = g(r[0]);
    if (r.length === 1) {
      return o;
    }
    let s = g(r[1]);
    if (n !== undefined) {
      return `linear-gradient(${n}deg, ${o}, ${s})`;
    } else {
      return `linear-gradient(${o}, ${s})`;
    }
  }
  function u(e) {
    return e;
  }
  function g(e, t) {
    if (e) {
      if (e.token) {
        if (t) {
          return function (e) {
            if (l.vars) {
              return l.vars?.[e];
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
          let t = `${s[e.type]}${e.value}`;
          let i = 1;
          if (Number.isInteger(e.alpha)) {
            i = e.alpha / 100;
          }
          return `rgba(var(--${t}-raw), ${i})`;
        }(e.key);
      }
      if (typeof e.value == "number" && Number.isInteger(e.value)) {
        var i;
        i = e.value;
        return colorFormatConverter.intToRgba(i);
      }
    }
  }
  require.d(exports, {
    resolveColorValue: function () {
      return g;
    },
    formatSizeValue: function () {
      return a;
    },
    identityFunction: function () {
      return u;
    },
    resolveGradient: function () {
      return c;
    }
  });
}