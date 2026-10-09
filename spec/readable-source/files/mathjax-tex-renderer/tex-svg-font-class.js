// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'svgFontDataUtils'
// - Resolved require(821082) to 'svg-font-data-utils'
// - Renamed variable 'i' to 'commonTexFontMixin'
// - Resolved require(966760) to 'common-tex-font-mixin'
// - Renamed variable 'a' to 'boldItalicFontPaths'
// - Resolved require(211748) to 'bold-italic-font-paths'
// - Renamed variable 'u' to 'boldFontSvgPaths'
// - Resolved require(489985) to 'bold-font-svg-paths'
// - Renamed variable 's' to 'doubleStruckConstants_1'
// - Resolved require(267233) to 'double-struck-constants_1'
// - Renamed variable 'l' to 'frakturBoldFontPaths'
// - Resolved require(525641) to 'fraktur-bold-font-paths'
// - Renamed variable 'c' to 'frakturSvgFontData'
// - Resolved require(87789) to 'fraktur-svg-font-data'
// - Renamed variable 'p' to 'italicFontSvgPaths'
// - Resolved require(685704) to 'italic-font-svg-paths'
// - Renamed variable 'h' to 'mathLargeOpSvgPaths'
// - Resolved require(200141) to 'math-large-op-svg-paths'
// - Renamed variable 'f' to 'fontMonospaceSvgData'
// - Resolved require(349010) to 'font-monospace-svg-data'
// - Renamed variable 'd' to 'reactPropsMergeUtil_2'
// - Resolved require(189884) to 'react-props-merge-util_2'
// - Renamed variable 'D' to 'svgFontSansSerifBoldItalic'
// - Resolved require(399996) to 'svg-font-sans-serif-bold-italic'
// - Renamed variable 'L' to 'sansSerifBoldFontData'
// - Resolved require(334462) to 'sans-serif-bold-font-data'
// - Renamed variable 'm' to 'svgFontSansSerifItalic'
// - Resolved require(507745) to 'svg-font-sans-serif-italic'
// - Renamed variable 'y' to 'sansSerifFontSvgData'
// - Resolved require(230804) to 'sans-serif-font-svg-data'
// - Renamed variable 'H' to 'scriptBoldStyle'
// - Resolved require(233145) to 'script-bold-style'
// - Renamed variable 'v' to 'scriptModuleInitExport'
// - Resolved require(772836) to 'script-module-init-export'
// - Renamed variable 'g' to 'mathmlSmallopSvgPaths'
// - Resolved require(925503) to 'mathml-smallop-svg-paths'
// - Renamed variable 'b' to 'texCalligraphicBoldFont'
// - Resolved require(399451) to 'tex-calligraphic-bold-font'
// - Renamed variable 'E' to 'texCalligraphicSvgFont'
// - Resolved require(360064) to 'tex-calligraphic-svg-font'
// - Renamed variable 'C' to 'texMathitFontData'
// - Resolved require(720756) to 'tex-mathit-font-data'
// - Renamed variable 'V' to 'texOldstyleBoldFont'
// - Resolved require(847008) to 'tex-oldstyle-bold-font'
// - Renamed variable 'M' to 'texOldstyleSvgData'
// - Resolved require(850637) to 'tex-oldstyle-svg-data'
// - Renamed variable 'F' to 'texMathSymbolSvgPaths'
// - Resolved require(40392) to 'tex-math-symbol-svg-paths'
// - Renamed variable 'x' to 'texFontSize4Paths'
// - Resolved require(581585) to 'tex-font-size4-paths'
// - Renamed variable 'O' to 'svgFontTexVariant'
// - Resolved require(960019) to 'svg-font-tex-variant'
// - Renamed variable 'A' to 'fontDataDelimiters'
// - Resolved require(114086) to 'font-data-delimiters'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 871440
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  var n = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  exports.TeXFont = undefined;
  var svgFontDataUtils = require("svg-font-data-utils") /*id: 821082*/;
  var commonTexFontMixin = require("common-tex-font-mixin") /*id: 966760*/;
  var boldItalicFontPaths = require("bold-italic-font-paths") /*id: 211748*/;
  var boldFontSvgPaths = require("bold-font-svg-paths") /*id: 489985*/;
  var doubleStruckConstants_1 = require("double-struck-constants_1") /*id: 267233*/;
  var frakturBoldFontPaths = require("fraktur-bold-font-paths") /*id: 525641*/;
  var frakturSvgFontData = require("fraktur-svg-font-data") /*id: 87789*/;
  var italicFontSvgPaths = require("italic-font-svg-paths") /*id: 685704*/;
  var mathLargeOpSvgPaths = require("math-large-op-svg-paths") /*id: 200141*/;
  var fontMonospaceSvgData = require("font-monospace-svg-data") /*id: 349010*/;
  var reactPropsMergeUtil_2 = require("react-props-merge-util_2") /*id: 189884*/;
  var svgFontSansSerifBoldItalic = require("svg-font-sans-serif-bold-italic") /*id: 399996*/;
  var sansSerifBoldFontData = require("sans-serif-bold-font-data") /*id: 334462*/;
  var svgFontSansSerifItalic = require("svg-font-sans-serif-italic") /*id: 507745*/;
  var sansSerifFontSvgData = require("sans-serif-font-svg-data") /*id: 230804*/;
  var scriptBoldStyle = require("script-bold-style") /*id: 233145*/;
  var scriptModuleInitExport = require("script-module-init-export") /*id: 772836*/;
  var mathmlSmallopSvgPaths = require("mathml-smallop-svg-paths") /*id: 925503*/;
  var texCalligraphicBoldFont = require("tex-calligraphic-bold-font") /*id: 399451*/;
  var texCalligraphicSvgFont = require("tex-calligraphic-svg-font") /*id: 360064*/;
  var texMathitFontData = require("tex-mathit-font-data") /*id: 720756*/;
  var texOldstyleBoldFont = require("tex-oldstyle-bold-font") /*id: 847008*/;
  var texOldstyleSvgData = require("tex-oldstyle-svg-data") /*id: 850637*/;
  var texMathSymbolSvgPaths = require("tex-math-symbol-svg-paths") /*id: 40392*/;
  var texFontSize4Paths = require("tex-font-size4-paths") /*id: 581585*/;
  var svgFontTexVariant = require("svg-font-tex-variant") /*id: 960019*/;
  var fontDataDelimiters = require("font-data-delimiters") /*id: 114086*/;
  var _ = function (t) {
    function e(e = null) {
      var Q;
      var r;
      var T = t.call(this, e) || this;
      var o = T.constructor;
      try {
        var i = n(Object.keys(o.variantCacheIds));
        var a = i.next();
        for (; !a.done; a = i.next()) {
          var u = a.value;
          T.variant[u].cacheID = "TEX-" + o.variantCacheIds[u];
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (a && !a.done && (r = i.return)) {
            r.call(i);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
      return T;
    }
    T(e, t);
    e.defaultDelimiters = fontDataDelimiters.delimiters;
    e.defaultChars = {
      normal: reactPropsMergeUtil_2.normal,
      bold: boldFontSvgPaths.bold,
      italic: italicFontSvgPaths.italic,
      "bold-italic": boldItalicFontPaths.boldItalic,
      "double-struck": doubleStruckConstants_1.doubleStruck,
      fraktur: frakturSvgFontData.fraktur,
      "bold-fraktur": frakturBoldFontPaths.frakturBold,
      script: scriptModuleInitExport.script,
      "bold-script": scriptBoldStyle.scriptBold,
      "sans-serif": sansSerifFontSvgData.sansSerif,
      "bold-sans-serif": sansSerifBoldFontData.sansSerifBold,
      "sans-serif-italic": svgFontSansSerifItalic.sansSerifItalic,
      "sans-serif-bold-italic": svgFontSansSerifBoldItalic.sansSerifBoldItalic,
      monospace: fontMonospaceSvgData.monospace,
      "-smallop": mathmlSmallopSvgPaths.smallop,
      "-largeop": mathLargeOpSvgPaths.largeop,
      "-size3": texMathSymbolSvgPaths.texSize3,
      "-size4": texFontSize4Paths.texSize4,
      "-tex-calligraphic": texCalligraphicSvgFont.texCalligraphic,
      "-tex-bold-calligraphic": texCalligraphicBoldFont.texCalligraphicBold,
      "-tex-mathit": texMathitFontData.texMathit,
      "-tex-oldstyle": texOldstyleSvgData.texOldstyle,
      "-tex-bold-oldstyle": texOldstyleBoldFont.texOldstyleBold,
      "-tex-variant": svgFontTexVariant.texVariant
    };
    e.variantCacheIds = {
      normal: "N",
      bold: "B",
      italic: "I",
      "bold-italic": "BI",
      "double-struck": "D",
      fraktur: "F",
      "bold-fraktur": "BF",
      script: "S",
      "bold-script": "BS",
      "sans-serif": "SS",
      "bold-sans-serif": "BSS",
      "sans-serif-italic": "SSI",
      "sans-serif-bold-italic": "SSBI",
      monospace: "M",
      "-smallop": "SO",
      "-largeop": "LO",
      "-size3": "S3",
      "-size4": "S4",
      "-tex-calligraphic": "C",
      "-tex-bold-calligraphic": "BC",
      "-tex-mathit": "MI",
      "-tex-oldstyle": "OS",
      "-tex-bold-oldstyle": "BOS",
      "-tex-variant": "V"
    };
    return e;
  }(commonTexFontMixin.CommonTeXFontMixin(svgFontDataUtils.SVGFontData));
  exports.TeXFont = _;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}