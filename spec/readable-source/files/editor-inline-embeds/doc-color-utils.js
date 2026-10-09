// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HC' to 'getBrandColorWithAlpha'
// - Renamed export 'Kx' to 'getTextOrBgColor'
// - Renamed export 'hU' to 'getDocColorWithAlpha'
// - Renamed export 'w6' to 'getRevisionUserColor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 986243
         */
module.exports = function (module, exports, require) {
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var colorUtils = require("color-utils") /*id: 845364*/;
  var l = colorUtils;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  require("user-color-utilities") /*id: 511417*/;
  require("theme-color-utils") /*id: 191810*/;
  var docTokenColorManager = require("doc-token-color-manager") /*id: 445170*/;
  let c = {
    B500: "#336DF4",
    T350: "#2DBEAB",
    L500: "#6B7F06",
    O400: "#ED6D0C",
    V900: "#520052",
    P500: "#8D55ED",
    W500: "#047FB0",
    G500: "#258832",
    Y600: "#865B03",
    R400: "#F54A45",
    V600: "#A630A6",
    I900: "#151B70",
    W400: "#1295CA",
    G800: "#04430C",
    O500: "#C25705",
    C400: "#DF58A5",
    P600: "#7A35F0",
    T400: "#10A893",
    L800: "#333D00",
    Y400: "#D99904",
    C700: "#9D1562",
    P900: "#2F0080",
    B700: "#0442D2",
    T600: "#067062",
    L350: "#91AD00",
    O800: "#642B02",
    C500: "#CC398C",
    P800: "#4811A6",
    R600: "#C02A26",
    V400: "#CF5ECF",
    B800: "#002F9E",
    W700: "#0F587A",
    G350: "#35BD4B",
    R800: "#741915",
    V800: "#6A116A",
    I500: "#5B65F5",
    G400: "#32A645",
    I350: "#959BEE",
    B900: "#002270"
  };
  memoizeFunction.memoize(e => Object.keys(c).find(i => c[i] === e));
  let d = (e, i) => {
    let n = docTokenColorManager.getDocColor(e);
    if (i) {
      return l(n).setAlpha(0.15).toRgbString();
    } else {
      return n;
    }
  };
  let u = function (e, i = false) {
    if (docxFeatureFlags.isR0Enabled()) {
      if (i) {
        return "var(--s-color-brand-primary-transparent-1)";
      } else {
        return "var(--s-color-brand-primary-pressed)";
      }
    } else {
      return d(e, i);
    }
  };
  let h = () => "rgba(0, 87, 255, 0.60)";
  let p = (e, i) => {
    let n = i.find(i => i.revisionId === e);
    if (n) {
      return u(n == null ? undefined : n.userId);
    }
  };
  let f = function (e = false) {
    if (e) {
      return "var(--s-color-bg-trans)";
    } else {
      return "var(--s-color-text-quaternary)";
    }
  };
  require.d(exports, {
    getBrandColorWithAlpha: function () {
      return h;
    },
    getTextOrBgColor: function () {
      return f;
    },
    getDocColorWithAlpha: function () {
      return u;
    },
    getRevisionUserColor: function () {
      return p;
    }
  });
}