// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bf' to 'diagramDetectors'
// - Renamed export 'Cq' to 'registerDiagram'
// - Renamed export 'Ee' to 'getStyles'
// - Renamed export 'Fy' to 'frozenConfig'
// - Renamed export 'GN' to 'setAccTitle'
// - Renamed export 'Gr' to 'getUrl'
// - Renamed export 'KO' to 'registerLazyDiagrams'
// - Renamed export 'Kr' to 'getDiagramTitle'
// - Renamed export 'LJ' to 'commonDb'
// - Renamed export 'M6' to 'directiveCommentRegex'
// - Renamed export 'Mx' to 'getAccDescription'
// - Renamed export 'NM' to 'sanitizeDirective'
// - Renamed export 'Rw' to 'setupGraphViewbox'
// - Renamed export 'SY' to 'textUtils'
// - Renamed export 'Tb' to 'updateSiteConfig'
// - Renamed export 'U$' to 'setAccDescription'
// - Renamed export 'UO' to 'parseGenericTypes'
// - Renamed export 'Ub' to 'setLogLevel'
// - Renamed export 'Vg' to 'detectType'
// - Renamed export 'Vw' to 'lineBreakRegex'
// - Renamed export 'XV' to 'addDirective'
// - Renamed export 'Y4' to 'setConfig'
// - Renamed export 'Yc' to 'assignWithDepth'
// - Renamed export 'Yn' to 'setSiteConfig'
// - Renamed export 'ZD' to 'getSiteConfig'
// - Renamed export 'ZH' to 'clearAccData'
// - Renamed export 'Zn' to 'directiveVarRegex'
// - Renamed export '_7' to 'getDiagram'
// - Renamed export '_j' to 'themeRegistry'
// - Renamed export 'cM' to 'logger'
// - Renamed export 'cj' to 'UnknownDiagramError'
// - Renamed export 'cq' to 'getDiagramLoader'
// - Renamed export 'dY' to 'saveInitConfig'
// - Renamed export 'eW' to 'setName'
// - Renamed export 'eu' to 'getAccTitle'
// - Renamed export 'g2' to 'setDiagramTitle'
// - Renamed export 'iE' to 'getConfig'
// - Renamed export 'j7' to 'setupViewbox'
// - Renamed export 'ku' to 'evaluate'
// - Renamed export 'l0' to 'hasKatex'
// - Renamed export 'mc' to 'resetConfig'
// - Renamed export 'nH' to 'calcMathMLDims'
// - Renamed export 'nV' to 'getConfigAlias'
// - Renamed export 'oO' to 'sanitizeText'
// - Renamed export 'r2' to 'copyProperties'
// - Renamed export 'uX' to 'sanitizeTextCfg'
// - Renamed export 'u_' to 'defaultConfig'
// - Renamed export 'ur' to 'renderKatex'
// - Renamed export 'v2' to 'configureSvgSize'
// - Renamed export 'v6' to 'setConfigMain'
// - Renamed export 'vZ' to 'configDefaults'
// - Renamed export 'xN' to 'getDefaultTheme'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 51747.4ea74179.js
         * chunkId: 51747
         * moduleId: 101498
         */
module.exports = function (module, exports, require) {
  let r;
  var o;
  var a;
  var l;
  var s;
  var h;
  var n;
  var c;
  var d;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var C = dayjsDateLibrary;
  var colorChannelAdjuster_1 = require("color-channel-adjuster_1") /*id: 492471*/;
  var colorInvertBlendUtil = require("color-invert-blend-util") /*id: 442482*/;
  var colorLightnessHelper = require("color-lightness-helper") /*id: 366687*/;
  var colorLightnessAdjuster = require("color-lightness-adjuster") /*id: 695366*/;
  var colorDarknessUtil = require("color-darkness-util") /*id: 99164*/;
  var colorAlphaSetter = require("color-alpha-setter") /*id: 882094*/;
  var dompurifyCore = require("dompurify-core") /*id: 345925*/;
  var T = Object.defineProperty;
  var B = (t, i) => T(t, "name", {
    value: i,
    configurable: true
  });
  var S = (t, i) => {
    for (var e in i) {
      T(t, e, {
        get: i[e],
        enumerable: true
      });
    }
  };
  var F = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    fatal: 5
  };
  var v = {
    trace: B(function () {
      var t = arguments.length;
      var i = Array(t);
      var e = 0;
      for (; e < t; e++) {
        i[e] = arguments[e];
      }
    }, "trace"),
    debug: B(function () {
      var t = arguments.length;
      var i = Array(t);
      var e = 0;
      for (; e < t; e++) {
        i[e] = arguments[e];
      }
    }, "debug"),
    info: B(function () {
      var t = arguments.length;
      var i = Array(t);
      var e = 0;
      for (; e < t; e++) {
        i[e] = arguments[e];
      }
    }, "info"),
    warn: B(function () {
      var t = arguments.length;
      var i = Array(t);
      var e = 0;
      for (; e < t; e++) {
        i[e] = arguments[e];
      }
    }, "warn"),
    error: B(function () {
      var t = arguments.length;
      var i = Array(t);
      var e = 0;
      for (; e < t; e++) {
        i[e] = arguments[e];
      }
    }, "error"),
    fatal: B(function () {
      var t = arguments.length;
      var i = Array(t);
      var e = 0;
      for (; e < t; e++) {
        i[e] = arguments[e];
      }
    }, "fatal")
  };
  var L = B(function (t = "fatal") {
    let i = F.fatal;
    if (typeof t == "string") {
      if (t.toLowerCase() in F) {
        i = F[t];
      }
    } else if (typeof t == "number") {
      i = t;
    }
    v.trace = () => {};
    v.debug = () => {};
    v.info = () => {};
    v.warn = () => {};
    v.error = () => {};
    v.fatal = () => {};
    if (i <= F.fatal) {
      v.fatal = undefined;
    }
    if (i <= F.error) {
      v.error = undefined;
    }
    if (i <= F.warn) {
      v.warn = undefined;
    }
    if (i <= F.info) {
      v.info = undefined;
    }
    if (i <= F.debug) {
      v.debug = undefined;
    }
    if (i <= F.trace) {
      v.trace = undefined;
    }
  }, "setLogLevel");
  var _ = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
  var Z = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
  var A = /\s*%%.*\n/gm;
  B(o = class extends Error {
    constructor(t) {
      super(t);
      this.name = "UnknownDiagramError";
    }
  }, "UnknownDiagramError");
  var E = o;
  var w = {};
  var q = B(function (t, i) {
    t = t.replace(_, "").replace(Z, "").replace(A, "\n");
    for (let [e, {
      detector: r
    }] of Object.entries(w)) {
      if (r(t, i)) {
        return e;
      }
    }
    throw new E(`No diagram type detected matching given configuration for text: ${t}`);
  }, "detectType");
  var O = B(function () {
    var t = arguments.length;
    var i = Array(t);
    var e = 0;
    for (; e < t; e++) {
      i[e] = arguments[e];
    }
    for (let {
      id: t,
      detector: e,
      loader: r
    } of i) {
      M(t, e, r);
    }
  }, "registerLazyLoadedDiagrams");
  var M = B((t, i, e) => {
    if (w[t]) {
      v.warn(`Detector with key ${t} already exists. Overwriting.`);
    }
    w[t] = {
      detector: i,
      loader: e
    };
    v.debug(`Detector with key ${t} added${e ? " with loader" : ""}`);
  }, "addDetector");
  var z = B(t => w[t].loader, "getDiagramLoader");
  var I = B(function (t, i, {
    depth: e = 2,
    clobber: r = false
  } = {}) {
    let o = {
      depth: e,
      clobber: r
    };
    if (Array.isArray(i) && !Array.isArray(t)) {
      i.forEach(i => I(t, i, o));
      return t;
    } else if (Array.isArray(i) && Array.isArray(t)) {
      i.forEach(i => {
        if (!t.includes(i)) {
          t.push(i);
        }
      });
      return t;
    } else if (t === undefined || e <= 0) {
      if (t != null && typeof t == "object" && typeof i == "object") {
        return Object.assign(t, i);
      } else {
        return i;
      }
    } else {
      if (i !== undefined && typeof t == "object" && typeof i == "object") {
        Object.keys(i).forEach(o => {
          if (typeof i[o] == "object" && (t[o] === undefined || typeof t[o] == "object")) {
            if (t[o] === undefined) {
              t[o] = Array.isArray(i[o]) ? [] : {};
            }
            t[o] = I(t[o], i[o], {
              depth: e - 1,
              clobber: r
            });
          } else if (r || typeof t[o] != "object" && typeof i[o] != "object") {
            t[o] = i[o];
          }
        });
      }
      return t;
    }
  }, "assignWithDepth");
  var D = I;
  var W = "#ffffff";
  var R = "#f2f2f2";
  var N = B((t, i) => i ? colorChannelAdjuster_1.colorChannelAdjust(t, {
    s: -40,
    l: 10
  }) : colorChannelAdjuster_1.colorChannelAdjust(t, {
    s: -40,
    l: -10
  }), "mkBorder");
  B(a = class {
    updateColors() {
      this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333");
      this.secondaryColor = this.secondaryColor || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -120
      });
      this.tertiaryColor = this.tertiaryColor || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 180,
        l: 5
      });
      this.primaryBorderColor = this.primaryBorderColor || N(this.primaryColor, this.darkMode);
      this.secondaryBorderColor = this.secondaryBorderColor || N(this.secondaryColor, this.darkMode);
      this.tertiaryBorderColor = this.tertiaryBorderColor || N(this.tertiaryColor, this.darkMode);
      this.noteBorderColor = this.noteBorderColor || N(this.noteBkgColor, this.darkMode);
      this.noteBkgColor = this.noteBkgColor || "#fff5ad";
      this.noteTextColor = this.noteTextColor || "#333";
      this.secondaryTextColor = this.secondaryTextColor || colorInvertBlendUtil.invertColorBlend(this.secondaryColor);
      this.tertiaryTextColor = this.tertiaryTextColor || colorInvertBlendUtil.invertColorBlend(this.tertiaryColor);
      this.lineColor = this.lineColor || colorInvertBlendUtil.invertColorBlend(this.background);
      this.arrowheadColor = this.arrowheadColor || colorInvertBlendUtil.invertColorBlend(this.background);
      this.textColor = this.textColor || this.primaryTextColor;
      this.border2 = this.border2 || this.tertiaryBorderColor;
      this.nodeBkg = this.nodeBkg || this.primaryColor;
      this.mainBkg = this.mainBkg || this.primaryColor;
      this.nodeBorder = this.nodeBorder || this.primaryBorderColor;
      this.clusterBkg = this.clusterBkg || this.tertiaryColor;
      this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
      this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
      this.titleColor = this.titleColor || this.tertiaryTextColor;
      this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? colorLightnessHelper.adjustLightness(this.secondaryColor, 30) : this.secondaryColor);
      this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
      this.actorBorder = this.actorBorder || this.primaryBorderColor;
      this.actorBkg = this.actorBkg || this.mainBkg;
      this.actorTextColor = this.actorTextColor || this.primaryTextColor;
      this.actorLineColor = this.actorLineColor || this.actorBorder;
      this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
      this.signalColor = this.signalColor || this.textColor;
      this.signalTextColor = this.signalTextColor || this.textColor;
      this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
      this.labelTextColor = this.labelTextColor || this.actorTextColor;
      this.loopTextColor = this.loopTextColor || this.actorTextColor;
      this.activationBorderColor = this.activationBorderColor || colorLightnessHelper.adjustLightness(this.secondaryColor, 10);
      this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
      this.sequenceNumberColor = this.sequenceNumberColor || colorInvertBlendUtil.invertColorBlend(this.lineColor);
      this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor;
      this.altSectionBkgColor = this.altSectionBkgColor || "white";
      this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor;
      this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor;
      this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
      this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
      this.taskBkgColor = this.taskBkgColor || this.primaryColor;
      this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor;
      this.activeTaskBkgColor = this.activeTaskBkgColor || colorLightnessAdjuster.adjustLightness(this.primaryColor, 23);
      this.gridColor = this.gridColor || "lightgrey";
      this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey";
      this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
      this.critBorderColor = this.critBorderColor || "#ff8888";
      this.critBkgColor = this.critBkgColor || "red";
      this.todayLineColor = this.todayLineColor || "red";
      this.vertLineColor = this.vertLineColor || "navy";
      this.taskTextColor = this.taskTextColor || this.textColor;
      this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
      this.taskTextLightColor = this.taskTextLightColor || this.textColor;
      this.taskTextColor = this.taskTextColor || this.primaryTextColor;
      this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
      this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
      this.personBorder = this.personBorder || this.primaryBorderColor;
      this.personBkg = this.personBkg || this.mainBkg;
      if (this.darkMode) {
        this.rowOdd = this.rowOdd || colorLightnessHelper.adjustLightness(this.mainBkg, 5) || "#ffffff";
        this.rowEven = this.rowEven || colorLightnessHelper.adjustLightness(this.mainBkg, 10);
      } else {
        this.rowOdd = this.rowOdd || colorLightnessAdjuster.adjustLightness(this.mainBkg, 75) || "#ffffff";
        this.rowEven = this.rowEven || colorLightnessAdjuster.adjustLightness(this.mainBkg, 5);
      }
      this.transitionColor = this.transitionColor || this.lineColor;
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || this.tertiaryColor;
      this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
      this.compositeBorder = this.compositeBorder || this.nodeBorder;
      this.innerEndBackground = this.nodeBorder;
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.specialStateColor = this.lineColor;
      this.cScale0 = this.cScale0 || this.primaryColor;
      this.cScale1 = this.cScale1 || this.secondaryColor;
      this.cScale2 = this.cScale2 || this.tertiaryColor;
      this.cScale3 = this.cScale3 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 30
      });
      this.cScale4 = this.cScale4 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60
      });
      this.cScale5 = this.cScale5 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 90
      });
      this.cScale6 = this.cScale6 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120
      });
      this.cScale7 = this.cScale7 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 150
      });
      this.cScale8 = this.cScale8 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 210,
        l: 150
      });
      this.cScale9 = this.cScale9 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 270
      });
      this.cScale10 = this.cScale10 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 300
      });
      this.cScale11 = this.cScale11 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 330
      });
      if (this.darkMode) {
        for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
          this["cScale" + t] = colorLightnessHelper.adjustLightness(this["cScale" + t], 75);
        }
      } else {
        for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
          this["cScale" + t] = colorLightnessHelper.adjustLightness(this["cScale" + t], 25);
        }
      }
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        this["cScaleInv" + t] = this["cScaleInv" + t] || colorInvertBlendUtil.invertColorBlend(this["cScale" + t]);
      }
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        if (this.darkMode) {
          this["cScalePeer" + t] = this["cScalePeer" + t] || colorLightnessAdjuster.adjustLightness(this["cScale" + t], 10);
        } else {
          this["cScalePeer" + t] = this["cScalePeer" + t] || colorLightnessHelper.adjustLightness(this["cScale" + t], 10);
        }
      }
      this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
      }
      let v = this.darkMode ? -4 : -1;
      for (let t = 0; t < 5; t++) {
        this["surface" + t] = this["surface" + t] || colorChannelAdjuster_1.colorChannelAdjust(this.mainBkg, {
          h: 180,
          s: -15,
          l: v * (5 + t * 3)
        });
        this["surfacePeer" + t] = this["surfacePeer" + t] || colorChannelAdjuster_1.colorChannelAdjust(this.mainBkg, {
          h: 180,
          s: -15,
          l: v * (8 + t * 3)
        });
      }
      this.classText = this.classText || this.textColor;
      this.fillType0 = this.fillType0 || this.primaryColor;
      this.fillType1 = this.fillType1 || this.secondaryColor;
      this.fillType2 = this.fillType2 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 64
      });
      this.fillType3 = this.fillType3 || colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: 64
      });
      this.fillType4 = this.fillType4 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -64
      });
      this.fillType5 = this.fillType5 || colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: -64
      });
      this.fillType6 = this.fillType6 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 128
      });
      this.fillType7 = this.fillType7 || colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: 128
      });
      this.pie1 = this.pie1 || this.primaryColor;
      this.pie2 = this.pie2 || this.secondaryColor;
      this.pie3 = this.pie3 || this.tertiaryColor;
      this.pie4 = this.pie4 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        l: -10
      });
      this.pie5 = this.pie5 || colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        l: -10
      });
      this.pie6 = this.pie6 || colorChannelAdjuster_1.colorChannelAdjust(this.tertiaryColor, {
        l: -10
      });
      this.pie7 = this.pie7 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60,
        l: -10
      });
      this.pie8 = this.pie8 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -60,
        l: -10
      });
      this.pie9 = this.pie9 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120,
        l: 0
      });
      this.pie10 = this.pie10 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60,
        l: -20
      });
      this.pie11 = this.pie11 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -60,
        l: -20
      });
      this.pie12 = this.pie12 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120,
        l: -10
      });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12
      };
      this.archEdgeColor = this.archEdgeColor || "#777";
      this.archEdgeArrowColor = this.archEdgeArrowColor || "#777";
      this.archEdgeWidth = this.archEdgeWidth || "3";
      this.archGroupBorderColor = this.archGroupBorderColor || "#000";
      this.archGroupBorderWidth = this.archGroupBorderWidth || "2px";
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill = this.quadrant2Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      });
      this.quadrant3Fill = this.quadrant3Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      });
      this.quadrant4Fill = this.quadrant4Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill = this.quadrant2TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      });
      this.quadrant3TextFill = this.quadrant3TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      });
      this.quadrant4TextFill = this.quadrant4TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      });
      this.quadrantPointFill = this.quadrantPointFill || colorDarknessUtil.isColorDark(this.quadrant1Fill) ? colorLightnessAdjuster.adjustLightness(this.quadrant1Fill) : colorLightnessHelper.adjustLightness(this.quadrant1Fill);
      this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
      };
      this.requirementBackground = this.requirementBackground || this.primaryColor;
      this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? colorLightnessHelper.adjustLightness(this.secondaryColor, 30) : this.secondaryColor);
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = this.git0 || this.primaryColor;
      this.git1 = this.git1 || this.secondaryColor;
      this.git2 = this.git2 || this.tertiaryColor;
      this.git3 = this.git3 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -30
      });
      this.git4 = this.git4 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -60
      });
      this.git5 = this.git5 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -90
      });
      this.git6 = this.git6 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60
      });
      this.git7 = this.git7 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120
      });
      if (this.darkMode) {
        this.git0 = colorLightnessAdjuster.adjustLightness(this.git0, 25);
        this.git1 = colorLightnessAdjuster.adjustLightness(this.git1, 25);
        this.git2 = colorLightnessAdjuster.adjustLightness(this.git2, 25);
        this.git3 = colorLightnessAdjuster.adjustLightness(this.git3, 25);
        this.git4 = colorLightnessAdjuster.adjustLightness(this.git4, 25);
        this.git5 = colorLightnessAdjuster.adjustLightness(this.git5, 25);
        this.git6 = colorLightnessAdjuster.adjustLightness(this.git6, 25);
        this.git7 = colorLightnessAdjuster.adjustLightness(this.git7, 25);
      } else {
        this.git0 = colorLightnessHelper.adjustLightness(this.git0, 25);
        this.git1 = colorLightnessHelper.adjustLightness(this.git1, 25);
        this.git2 = colorLightnessHelper.adjustLightness(this.git2, 25);
        this.git3 = colorLightnessHelper.adjustLightness(this.git3, 25);
        this.git4 = colorLightnessHelper.adjustLightness(this.git4, 25);
        this.git5 = colorLightnessHelper.adjustLightness(this.git5, 25);
        this.git6 = colorLightnessHelper.adjustLightness(this.git6, 25);
        this.git7 = colorLightnessHelper.adjustLightness(this.git7, 25);
      }
      this.gitInv0 = this.gitInv0 || colorInvertBlendUtil.invertColorBlend(this.git0);
      this.gitInv1 = this.gitInv1 || colorInvertBlendUtil.invertColorBlend(this.git1);
      this.gitInv2 = this.gitInv2 || colorInvertBlendUtil.invertColorBlend(this.git2);
      this.gitInv3 = this.gitInv3 || colorInvertBlendUtil.invertColorBlend(this.git3);
      this.gitInv4 = this.gitInv4 || colorInvertBlendUtil.invertColorBlend(this.git4);
      this.gitInv5 = this.gitInv5 || colorInvertBlendUtil.invertColorBlend(this.git5);
      this.gitInv6 = this.gitInv6 || colorInvertBlendUtil.invertColorBlend(this.git6);
      this.gitInv7 = this.gitInv7 || colorInvertBlendUtil.invertColorBlend(this.git7);
      this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor);
      this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
      this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || W;
      this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || R;
    }
    calculate(t) {
      if (typeof t != "object") {
        this.updateColors();
        return;
      }
      let i = Object.keys(t);
      i.forEach(i => {
        this[i] = t[i];
      });
      this.updateColors();
      i.forEach(i => {
        this[i] = t[i];
      });
    }
    constructor() {
      this.background = "#f4f4f4";
      this.primaryColor = "#fff4dd";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "#333";
      this.THEME_COLOR_LIMIT = 12;
      this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif";
      this.fontSize = "16px";
    }
  }, "Theme");
  var P = a;
  var $ = B(t => {
    let i = new P();
    i.calculate(t);
    return i;
  }, "getThemeVariables");
  B(l = class {
    updateColors() {
      this.secondBkg = colorLightnessAdjuster.adjustLightness(this.mainBkg, 16);
      this.lineColor = this.mainContrastColor;
      this.arrowheadColor = this.mainContrastColor;
      this.nodeBkg = this.mainBkg;
      this.nodeBorder = this.border1;
      this.clusterBkg = this.secondBkg;
      this.clusterBorder = this.border2;
      this.defaultLinkColor = this.lineColor;
      this.edgeLabelBackground = colorLightnessAdjuster.adjustLightness(this.labelBackground, 25);
      this.actorBorder = this.border1;
      this.actorBkg = this.mainBkg;
      this.actorTextColor = this.mainContrastColor;
      this.actorLineColor = this.actorBorder;
      this.signalColor = this.mainContrastColor;
      this.signalTextColor = this.mainContrastColor;
      this.labelBoxBkgColor = this.actorBkg;
      this.labelBoxBorderColor = this.actorBorder;
      this.labelTextColor = this.mainContrastColor;
      this.loopTextColor = this.mainContrastColor;
      this.noteBorderColor = this.secondaryBorderColor;
      this.noteBkgColor = this.secondBkg;
      this.noteTextColor = this.secondaryTextColor;
      this.activationBorderColor = this.border1;
      this.activationBkgColor = this.secondBkg;
      this.altSectionBkgColor = this.background;
      this.taskBkgColor = colorLightnessAdjuster.adjustLightness(this.mainBkg, 23);
      this.taskTextColor = this.darkTextColor;
      this.taskTextLightColor = this.mainContrastColor;
      this.taskTextOutsideColor = this.taskTextLightColor;
      this.gridColor = this.mainContrastColor;
      this.doneTaskBkgColor = this.mainContrastColor;
      this.taskTextDarkColor = this.darkTextColor;
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#555";
      this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
      this.compositeBorder = this.compositeBorder || this.nodeBorder;
      this.innerEndBackground = this.primaryBorderColor;
      this.specialStateColor = "#f4f4f4";
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.fillType0 = this.primaryColor;
      this.fillType1 = this.secondaryColor;
      this.fillType2 = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 64
      });
      this.fillType3 = colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: 64
      });
      this.fillType4 = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -64
      });
      this.fillType5 = colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: -64
      });
      this.fillType6 = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 128
      });
      this.fillType7 = colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: 128
      });
      this.cScale1 = this.cScale1 || "#0b0000";
      this.cScale2 = this.cScale2 || "#4d1037";
      this.cScale3 = this.cScale3 || "#3f5258";
      this.cScale4 = this.cScale4 || "#4f2f1b";
      this.cScale5 = this.cScale5 || "#6e0a0a";
      this.cScale6 = this.cScale6 || "#3b0048";
      this.cScale7 = this.cScale7 || "#995a01";
      this.cScale8 = this.cScale8 || "#154706";
      this.cScale9 = this.cScale9 || "#161722";
      this.cScale10 = this.cScale10 || "#00296f";
      this.cScale11 = this.cScale11 || "#01629c";
      this.cScale12 = this.cScale12 || "#010029";
      this.cScale0 = this.cScale0 || this.primaryColor;
      this.cScale1 = this.cScale1 || this.secondaryColor;
      this.cScale2 = this.cScale2 || this.tertiaryColor;
      this.cScale3 = this.cScale3 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 30
      });
      this.cScale4 = this.cScale4 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60
      });
      this.cScale5 = this.cScale5 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 90
      });
      this.cScale6 = this.cScale6 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120
      });
      this.cScale7 = this.cScale7 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 150
      });
      this.cScale8 = this.cScale8 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 210
      });
      this.cScale9 = this.cScale9 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 270
      });
      this.cScale10 = this.cScale10 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 300
      });
      this.cScale11 = this.cScale11 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 330
      });
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        this["cScaleInv" + t] = this["cScaleInv" + t] || colorInvertBlendUtil.invertColorBlend(this["cScale" + t]);
      }
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        this["cScalePeer" + t] = this["cScalePeer" + t] || colorLightnessAdjuster.adjustLightness(this["cScale" + t], 10);
      }
      for (let t = 0; t < 5; t++) {
        this["surface" + t] = this["surface" + t] || colorChannelAdjuster_1.colorChannelAdjust(this.mainBkg, {
          h: 30,
          s: -30,
          l: -(-10 + t * 4)
        });
        this["surfacePeer" + t] = this["surfacePeer" + t] || colorChannelAdjuster_1.colorChannelAdjust(this.mainBkg, {
          h: 30,
          s: -30,
          l: -(-7 + t * 4)
        });
      }
      this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
      }
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        this["pie" + t] = this["cScale" + t];
      }
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill = this.quadrant2Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      });
      this.quadrant3Fill = this.quadrant3Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      });
      this.quadrant4Fill = this.quadrant4Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill = this.quadrant2TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      });
      this.quadrant3TextFill = this.quadrant3TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      });
      this.quadrant4TextFill = this.quadrant4TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      });
      this.quadrantPointFill = this.quadrantPointFill || colorDarknessUtil.isColorDark(this.quadrant1Fill) ? colorLightnessAdjuster.adjustLightness(this.quadrant1Fill) : colorLightnessHelper.adjustLightness(this.quadrant1Fill);
      this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette: this.xyChart?.plotColorPalette || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
      };
      this.packet = {
        startByteColor: this.primaryTextColor,
        endByteColor: this.primaryTextColor,
        labelColor: this.primaryTextColor,
        titleColor: this.primaryTextColor,
        blockStrokeColor: this.primaryTextColor,
        blockFillColor: this.background
      };
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12
      };
      this.classText = this.primaryTextColor;
      this.requirementBackground = this.requirementBackground || this.primaryColor;
      this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? colorLightnessHelper.adjustLightness(this.secondaryColor, 30) : this.secondaryColor);
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = colorLightnessAdjuster.adjustLightness(this.secondaryColor, 20);
      this.git1 = colorLightnessAdjuster.adjustLightness(this.pie2 || this.secondaryColor, 20);
      this.git2 = colorLightnessAdjuster.adjustLightness(this.pie3 || this.tertiaryColor, 20);
      this.git3 = colorLightnessAdjuster.adjustLightness(this.pie4 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -30
      }), 20);
      this.git4 = colorLightnessAdjuster.adjustLightness(this.pie5 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -60
      }), 20);
      this.git5 = colorLightnessAdjuster.adjustLightness(this.pie6 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -90
      }), 10);
      this.git6 = colorLightnessAdjuster.adjustLightness(this.pie7 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60
      }), 10);
      this.git7 = colorLightnessAdjuster.adjustLightness(this.pie8 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120
      }), 20);
      this.gitInv0 = this.gitInv0 || colorInvertBlendUtil.invertColorBlend(this.git0);
      this.gitInv1 = this.gitInv1 || colorInvertBlendUtil.invertColorBlend(this.git1);
      this.gitInv2 = this.gitInv2 || colorInvertBlendUtil.invertColorBlend(this.git2);
      this.gitInv3 = this.gitInv3 || colorInvertBlendUtil.invertColorBlend(this.git3);
      this.gitInv4 = this.gitInv4 || colorInvertBlendUtil.invertColorBlend(this.git4);
      this.gitInv5 = this.gitInv5 || colorInvertBlendUtil.invertColorBlend(this.git5);
      this.gitInv6 = this.gitInv6 || colorInvertBlendUtil.invertColorBlend(this.git6);
      this.gitInv7 = this.gitInv7 || colorInvertBlendUtil.invertColorBlend(this.git7);
      this.gitBranchLabel0 = this.gitBranchLabel0 || colorInvertBlendUtil.invertColorBlend(this.labelTextColor);
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
      this.gitBranchLabel3 = this.gitBranchLabel3 || colorInvertBlendUtil.invertColorBlend(this.labelTextColor);
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || colorLightnessAdjuster.adjustLightness(this.background, 12);
      this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || colorLightnessAdjuster.adjustLightness(this.background, 2);
      this.nodeBorder = this.nodeBorder || "#999";
    }
    calculate(t) {
      if (typeof t != "object") {
        this.updateColors();
        return;
      }
      let i = Object.keys(t);
      i.forEach(i => {
        this[i] = t[i];
      });
      this.updateColors();
      i.forEach(i => {
        this[i] = t[i];
      });
    }
    constructor() {
      this.background = "#333";
      this.primaryColor = "#1f2020";
      this.secondaryColor = colorLightnessAdjuster.adjustLightness(this.primaryColor, 16);
      this.tertiaryColor = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -160
      });
      this.primaryBorderColor = colorInvertBlendUtil.invertColorBlend(this.background);
      this.secondaryBorderColor = N(this.secondaryColor, this.darkMode);
      this.tertiaryBorderColor = N(this.tertiaryColor, this.darkMode);
      this.primaryTextColor = colorInvertBlendUtil.invertColorBlend(this.primaryColor);
      this.secondaryTextColor = colorInvertBlendUtil.invertColorBlend(this.secondaryColor);
      this.tertiaryTextColor = colorInvertBlendUtil.invertColorBlend(this.tertiaryColor);
      this.lineColor = colorInvertBlendUtil.invertColorBlend(this.background);
      this.textColor = colorInvertBlendUtil.invertColorBlend(this.background);
      this.mainBkg = "#1f2020";
      this.secondBkg = "calculated";
      this.mainContrastColor = "lightgrey";
      this.darkTextColor = colorLightnessAdjuster.adjustLightness(colorInvertBlendUtil.invertColorBlend("#323D47"), 10);
      this.lineColor = "calculated";
      this.border1 = "#ccc";
      this.border2 = colorAlphaSetter.setColorWithAlpha(255, 255, 255, 0.25);
      this.arrowheadColor = "calculated";
      this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif";
      this.fontSize = "16px";
      this.labelBackground = "#181818";
      this.textColor = "#ccc";
      this.THEME_COLOR_LIMIT = 12;
      this.nodeBkg = "calculated";
      this.nodeBorder = "calculated";
      this.clusterBkg = "calculated";
      this.clusterBorder = "calculated";
      this.defaultLinkColor = "calculated";
      this.titleColor = "#F9FFFE";
      this.edgeLabelBackground = "calculated";
      this.actorBorder = "calculated";
      this.actorBkg = "calculated";
      this.actorTextColor = "calculated";
      this.actorLineColor = "calculated";
      this.signalColor = "calculated";
      this.signalTextColor = "calculated";
      this.labelBoxBkgColor = "calculated";
      this.labelBoxBorderColor = "calculated";
      this.labelTextColor = "calculated";
      this.loopTextColor = "calculated";
      this.noteBorderColor = "calculated";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "calculated";
      this.activationBorderColor = "calculated";
      this.activationBkgColor = "calculated";
      this.sequenceNumberColor = "black";
      this.sectionBkgColor = colorLightnessHelper.adjustLightness("#EAE8D9", 30);
      this.altSectionBkgColor = "calculated";
      this.sectionBkgColor2 = "#EAE8D9";
      this.excludeBkgColor = colorLightnessHelper.adjustLightness(this.sectionBkgColor, 10);
      this.taskBorderColor = colorAlphaSetter.setColorWithAlpha(255, 255, 255, 70);
      this.taskBkgColor = "calculated";
      this.taskTextColor = "calculated";
      this.taskTextLightColor = "calculated";
      this.taskTextOutsideColor = "calculated";
      this.taskTextClickableColor = "#003163";
      this.activeTaskBorderColor = colorAlphaSetter.setColorWithAlpha(255, 255, 255, 50);
      this.activeTaskBkgColor = "#81B1DB";
      this.gridColor = "calculated";
      this.doneTaskBkgColor = "calculated";
      this.doneTaskBorderColor = "grey";
      this.critBorderColor = "#E83737";
      this.critBkgColor = "#E83737";
      this.taskTextDarkColor = "calculated";
      this.todayLineColor = "#DB5757";
      this.vertLineColor = "#00BFFF";
      this.personBorder = this.primaryBorderColor;
      this.personBkg = this.mainBkg;
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.rowOdd = this.rowOdd || colorLightnessAdjuster.adjustLightness(this.mainBkg, 5) || "#ffffff";
      this.rowEven = this.rowEven || colorLightnessHelper.adjustLightness(this.mainBkg, 10);
      this.labelColor = "calculated";
      this.errorBkgColor = "#a44141";
      this.errorTextColor = "#ddd";
    }
  }, "Theme");
  var H = l;
  var j = B(t => {
    let i = new H();
    i.calculate(t);
    return i;
  }, "getThemeVariables");
  B(s = class {
    updateColors() {
      this.cScale0 = this.cScale0 || this.primaryColor;
      this.cScale1 = this.cScale1 || this.secondaryColor;
      this.cScale2 = this.cScale2 || this.tertiaryColor;
      this.cScale3 = this.cScale3 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 30
      });
      this.cScale4 = this.cScale4 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60
      });
      this.cScale5 = this.cScale5 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 90
      });
      this.cScale6 = this.cScale6 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120
      });
      this.cScale7 = this.cScale7 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 150
      });
      this.cScale8 = this.cScale8 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 210
      });
      this.cScale9 = this.cScale9 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 270
      });
      this.cScale10 = this.cScale10 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 300
      });
      this.cScale11 = this.cScale11 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 330
      });
      this.cScalePeer1 = this.cScalePeer1 || colorLightnessHelper.adjustLightness(this.secondaryColor, 45);
      this.cScalePeer2 = this.cScalePeer2 || colorLightnessHelper.adjustLightness(this.tertiaryColor, 40);
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        this["cScale" + t] = colorLightnessHelper.adjustLightness(this["cScale" + t], 10);
        this["cScalePeer" + t] = this["cScalePeer" + t] || colorLightnessHelper.adjustLightness(this["cScale" + t], 25);
      }
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        this["cScaleInv" + t] = this["cScaleInv" + t] || colorChannelAdjuster_1.colorChannelAdjust(this["cScale" + t], {
          h: 180
        });
      }
      for (let t = 0; t < 5; t++) {
        this["surface" + t] = this["surface" + t] || colorChannelAdjuster_1.colorChannelAdjust(this.mainBkg, {
          h: 30,
          l: -(5 + t * 5)
        });
        this["surfacePeer" + t] = this["surfacePeer" + t] || colorChannelAdjuster_1.colorChannelAdjust(this.mainBkg, {
          h: 30,
          l: -(7 + t * 5)
        });
      }
      this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
      if (this.labelTextColor !== "calculated") {
        this.cScaleLabel0 = this.cScaleLabel0 || colorInvertBlendUtil.invertColorBlend(this.labelTextColor);
        this.cScaleLabel3 = this.cScaleLabel3 || colorInvertBlendUtil.invertColorBlend(this.labelTextColor);
        for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
          this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.labelTextColor;
        }
      }
      this.nodeBkg = this.mainBkg;
      this.nodeBorder = this.border1;
      this.clusterBkg = this.secondBkg;
      this.clusterBorder = this.border2;
      this.defaultLinkColor = this.lineColor;
      this.titleColor = this.textColor;
      this.edgeLabelBackground = this.labelBackground;
      this.actorBorder = colorLightnessAdjuster.adjustLightness(this.border1, 23);
      this.actorBkg = this.mainBkg;
      this.labelBoxBkgColor = this.actorBkg;
      this.signalColor = this.textColor;
      this.signalTextColor = this.textColor;
      this.labelBoxBorderColor = this.actorBorder;
      this.labelTextColor = this.actorTextColor;
      this.loopTextColor = this.actorTextColor;
      this.noteBorderColor = this.border2;
      this.noteTextColor = this.actorTextColor;
      this.actorLineColor = this.actorBorder;
      this.taskTextColor = this.taskTextLightColor;
      this.taskTextOutsideColor = this.taskTextDarkColor;
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.rowOdd = this.rowOdd || colorLightnessAdjuster.adjustLightness(this.primaryColor, 75) || "#ffffff";
      this.rowEven = this.rowEven || colorLightnessAdjuster.adjustLightness(this.primaryColor, 1);
      this.transitionColor = this.transitionColor || this.lineColor;
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#f0f0f0";
      this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
      this.compositeBorder = this.compositeBorder || this.nodeBorder;
      this.innerEndBackground = this.nodeBorder;
      this.specialStateColor = this.lineColor;
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.classText = this.primaryTextColor;
      this.fillType0 = this.primaryColor;
      this.fillType1 = this.secondaryColor;
      this.fillType2 = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 64
      });
      this.fillType3 = colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: 64
      });
      this.fillType4 = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -64
      });
      this.fillType5 = colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: -64
      });
      this.fillType6 = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 128
      });
      this.fillType7 = colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: 128
      });
      this.pie1 = this.pie1 || this.primaryColor;
      this.pie2 = this.pie2 || this.secondaryColor;
      this.pie3 = this.pie3 || colorChannelAdjuster_1.colorChannelAdjust(this.tertiaryColor, {
        l: -40
      });
      this.pie4 = this.pie4 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        l: -10
      });
      this.pie5 = this.pie5 || colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        l: -30
      });
      this.pie6 = this.pie6 || colorChannelAdjuster_1.colorChannelAdjust(this.tertiaryColor, {
        l: -20
      });
      this.pie7 = this.pie7 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60,
        l: -20
      });
      this.pie8 = this.pie8 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -60,
        l: -40
      });
      this.pie9 = this.pie9 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120,
        l: -40
      });
      this.pie10 = this.pie10 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60,
        l: -40
      });
      this.pie11 = this.pie11 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -90,
        l: -40
      });
      this.pie12 = this.pie12 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120,
        l: -30
      });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill = this.quadrant2Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      });
      this.quadrant3Fill = this.quadrant3Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      });
      this.quadrant4Fill = this.quadrant4Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill = this.quadrant2TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      });
      this.quadrant3TextFill = this.quadrant3TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      });
      this.quadrant4TextFill = this.quadrant4TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      });
      this.quadrantPointFill = this.quadrantPointFill || colorDarknessUtil.isColorDark(this.quadrant1Fill) ? colorLightnessAdjuster.adjustLightness(this.quadrant1Fill) : colorLightnessHelper.adjustLightness(this.quadrant1Fill);
      this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12
      };
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette: this.xyChart?.plotColorPalette || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
      };
      this.requirementBackground = this.requirementBackground || this.primaryColor;
      this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground = this.relationLabelBackground || this.labelBackground;
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = this.git0 || this.primaryColor;
      this.git1 = this.git1 || this.secondaryColor;
      this.git2 = this.git2 || this.tertiaryColor;
      this.git3 = this.git3 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -30
      });
      this.git4 = this.git4 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -60
      });
      this.git5 = this.git5 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -90
      });
      this.git6 = this.git6 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60
      });
      this.git7 = this.git7 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120
      });
      if (this.darkMode) {
        this.git0 = colorLightnessAdjuster.adjustLightness(this.git0, 25);
        this.git1 = colorLightnessAdjuster.adjustLightness(this.git1, 25);
        this.git2 = colorLightnessAdjuster.adjustLightness(this.git2, 25);
        this.git3 = colorLightnessAdjuster.adjustLightness(this.git3, 25);
        this.git4 = colorLightnessAdjuster.adjustLightness(this.git4, 25);
        this.git5 = colorLightnessAdjuster.adjustLightness(this.git5, 25);
        this.git6 = colorLightnessAdjuster.adjustLightness(this.git6, 25);
        this.git7 = colorLightnessAdjuster.adjustLightness(this.git7, 25);
      } else {
        this.git0 = colorLightnessHelper.adjustLightness(this.git0, 25);
        this.git1 = colorLightnessHelper.adjustLightness(this.git1, 25);
        this.git2 = colorLightnessHelper.adjustLightness(this.git2, 25);
        this.git3 = colorLightnessHelper.adjustLightness(this.git3, 25);
        this.git4 = colorLightnessHelper.adjustLightness(this.git4, 25);
        this.git5 = colorLightnessHelper.adjustLightness(this.git5, 25);
        this.git6 = colorLightnessHelper.adjustLightness(this.git6, 25);
        this.git7 = colorLightnessHelper.adjustLightness(this.git7, 25);
      }
      this.gitInv0 = this.gitInv0 || colorLightnessHelper.adjustLightness(colorInvertBlendUtil.invertColorBlend(this.git0), 25);
      this.gitInv1 = this.gitInv1 || colorInvertBlendUtil.invertColorBlend(this.git1);
      this.gitInv2 = this.gitInv2 || colorInvertBlendUtil.invertColorBlend(this.git2);
      this.gitInv3 = this.gitInv3 || colorInvertBlendUtil.invertColorBlend(this.git3);
      this.gitInv4 = this.gitInv4 || colorInvertBlendUtil.invertColorBlend(this.git4);
      this.gitInv5 = this.gitInv5 || colorInvertBlendUtil.invertColorBlend(this.git5);
      this.gitInv6 = this.gitInv6 || colorInvertBlendUtil.invertColorBlend(this.git6);
      this.gitInv7 = this.gitInv7 || colorInvertBlendUtil.invertColorBlend(this.git7);
      this.gitBranchLabel0 = this.gitBranchLabel0 || colorInvertBlendUtil.invertColorBlend(this.labelTextColor);
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
      this.gitBranchLabel3 = this.gitBranchLabel3 || colorInvertBlendUtil.invertColorBlend(this.labelTextColor);
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || W;
      this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || R;
    }
    calculate(t) {
      Object.keys(this).forEach(t => {
        if (this[t] === "calculated") {
          this[t] = undefined;
        }
      });
      if (typeof t != "object") {
        this.updateColors();
        return;
      }
      let i = Object.keys(t);
      i.forEach(i => {
        this[i] = t[i];
      });
      this.updateColors();
      i.forEach(i => {
        this[i] = t[i];
      });
    }
    constructor() {
      this.background = "#f4f4f4";
      this.primaryColor = "#ECECFF";
      this.secondaryColor = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120
      });
      this.secondaryColor = "#ffffde";
      this.tertiaryColor = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -160
      });
      this.primaryBorderColor = N(this.primaryColor, this.darkMode);
      this.secondaryBorderColor = N(this.secondaryColor, this.darkMode);
      this.tertiaryBorderColor = N(this.tertiaryColor, this.darkMode);
      this.primaryTextColor = colorInvertBlendUtil.invertColorBlend(this.primaryColor);
      this.secondaryTextColor = colorInvertBlendUtil.invertColorBlend(this.secondaryColor);
      this.tertiaryTextColor = colorInvertBlendUtil.invertColorBlend(this.tertiaryColor);
      this.lineColor = colorInvertBlendUtil.invertColorBlend(this.background);
      this.textColor = colorInvertBlendUtil.invertColorBlend(this.background);
      this.background = "white";
      this.mainBkg = "#ECECFF";
      this.secondBkg = "#ffffde";
      this.lineColor = "#333333";
      this.border1 = "#9370DB";
      this.border2 = "#aaaa33";
      this.arrowheadColor = "#333333";
      this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif";
      this.fontSize = "16px";
      this.labelBackground = "rgba(232,232,232, 0.8)";
      this.textColor = "#333";
      this.THEME_COLOR_LIMIT = 12;
      this.nodeBkg = "calculated";
      this.nodeBorder = "calculated";
      this.clusterBkg = "calculated";
      this.clusterBorder = "calculated";
      this.defaultLinkColor = "calculated";
      this.titleColor = "calculated";
      this.edgeLabelBackground = "calculated";
      this.actorBorder = "calculated";
      this.actorBkg = "calculated";
      this.actorTextColor = "black";
      this.actorLineColor = "calculated";
      this.signalColor = "calculated";
      this.signalTextColor = "calculated";
      this.labelBoxBkgColor = "calculated";
      this.labelBoxBorderColor = "calculated";
      this.labelTextColor = "calculated";
      this.loopTextColor = "calculated";
      this.noteBorderColor = "calculated";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "calculated";
      this.activationBorderColor = "#666";
      this.activationBkgColor = "#f4f4f4";
      this.sequenceNumberColor = "white";
      this.sectionBkgColor = "calculated";
      this.altSectionBkgColor = "calculated";
      this.sectionBkgColor2 = "calculated";
      this.excludeBkgColor = "#eeeeee";
      this.taskBorderColor = "calculated";
      this.taskBkgColor = "calculated";
      this.taskTextLightColor = "calculated";
      this.taskTextColor = this.taskTextLightColor;
      this.taskTextDarkColor = "calculated";
      this.taskTextOutsideColor = this.taskTextDarkColor;
      this.taskTextClickableColor = "calculated";
      this.activeTaskBorderColor = "calculated";
      this.activeTaskBkgColor = "calculated";
      this.gridColor = "calculated";
      this.doneTaskBkgColor = "calculated";
      this.doneTaskBorderColor = "calculated";
      this.critBorderColor = "calculated";
      this.critBkgColor = "calculated";
      this.todayLineColor = "calculated";
      this.vertLineColor = "calculated";
      this.sectionBkgColor = colorAlphaSetter.setColorWithAlpha(102, 102, 255, 0.49);
      this.altSectionBkgColor = "white";
      this.sectionBkgColor2 = "#fff400";
      this.taskBorderColor = "#534fbc";
      this.taskBkgColor = "#8a90dd";
      this.taskTextLightColor = "white";
      this.taskTextColor = "calculated";
      this.taskTextDarkColor = "black";
      this.taskTextOutsideColor = "calculated";
      this.taskTextClickableColor = "#003163";
      this.activeTaskBorderColor = "#534fbc";
      this.activeTaskBkgColor = "#bfc7ff";
      this.gridColor = "lightgrey";
      this.doneTaskBkgColor = "lightgrey";
      this.doneTaskBorderColor = "grey";
      this.critBorderColor = "#ff8888";
      this.critBkgColor = "red";
      this.todayLineColor = "red";
      this.vertLineColor = "navy";
      this.personBorder = this.primaryBorderColor;
      this.personBkg = this.mainBkg;
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.rowOdd = "calculated";
      this.rowEven = "calculated";
      this.labelColor = "black";
      this.errorBkgColor = "#552222";
      this.errorTextColor = "#552222";
      this.updateColors();
    }
  }, "Theme");
  var U = s;
  var G = B(t => {
    let i = new U();
    i.calculate(t);
    return i;
  }, "getThemeVariables");
  B(h = class {
    updateColors() {
      this.actorBorder = colorLightnessHelper.adjustLightness(this.mainBkg, 20);
      this.actorBkg = this.mainBkg;
      this.labelBoxBkgColor = this.actorBkg;
      this.labelTextColor = this.actorTextColor;
      this.loopTextColor = this.actorTextColor;
      this.noteBorderColor = this.border2;
      this.noteTextColor = this.actorTextColor;
      this.actorLineColor = this.actorBorder;
      this.cScale0 = this.cScale0 || this.primaryColor;
      this.cScale1 = this.cScale1 || this.secondaryColor;
      this.cScale2 = this.cScale2 || this.tertiaryColor;
      this.cScale3 = this.cScale3 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 30
      });
      this.cScale4 = this.cScale4 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60
      });
      this.cScale5 = this.cScale5 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 90
      });
      this.cScale6 = this.cScale6 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120
      });
      this.cScale7 = this.cScale7 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 150
      });
      this.cScale8 = this.cScale8 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 210
      });
      this.cScale9 = this.cScale9 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 270
      });
      this.cScale10 = this.cScale10 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 300
      });
      this.cScale11 = this.cScale11 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 330
      });
      this.cScalePeer1 = this.cScalePeer1 || colorLightnessHelper.adjustLightness(this.secondaryColor, 45);
      this.cScalePeer2 = this.cScalePeer2 || colorLightnessHelper.adjustLightness(this.tertiaryColor, 40);
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        this["cScale" + t] = colorLightnessHelper.adjustLightness(this["cScale" + t], 10);
        this["cScalePeer" + t] = this["cScalePeer" + t] || colorLightnessHelper.adjustLightness(this["cScale" + t], 25);
      }
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        this["cScaleInv" + t] = this["cScaleInv" + t] || colorChannelAdjuster_1.colorChannelAdjust(this["cScale" + t], {
          h: 180
        });
      }
      this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
      }
      for (let t = 0; t < 5; t++) {
        this["surface" + t] = this["surface" + t] || colorChannelAdjuster_1.colorChannelAdjust(this.mainBkg, {
          h: 30,
          s: -30,
          l: -(5 + t * 5)
        });
        this["surfacePeer" + t] = this["surfacePeer" + t] || colorChannelAdjuster_1.colorChannelAdjust(this.mainBkg, {
          h: 30,
          s: -30,
          l: -(8 + t * 5)
        });
      }
      this.nodeBkg = this.mainBkg;
      this.nodeBorder = this.border1;
      this.clusterBkg = this.secondBkg;
      this.clusterBorder = this.border2;
      this.defaultLinkColor = this.lineColor;
      this.taskBorderColor = this.border1;
      this.taskTextColor = this.taskTextLightColor;
      this.taskTextOutsideColor = this.taskTextDarkColor;
      this.activeTaskBorderColor = this.taskBorderColor;
      this.activeTaskBkgColor = this.mainBkg;
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.rowOdd = this.rowOdd || colorLightnessAdjuster.adjustLightness(this.mainBkg, 75) || "#ffffff";
      this.rowEven = this.rowEven || colorLightnessAdjuster.adjustLightness(this.mainBkg, 20);
      this.transitionColor = this.transitionColor || this.lineColor;
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#f0f0f0";
      this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
      this.compositeBorder = this.compositeBorder || this.nodeBorder;
      this.innerEndBackground = this.primaryBorderColor;
      this.specialStateColor = this.lineColor;
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.classText = this.primaryTextColor;
      this.fillType0 = this.primaryColor;
      this.fillType1 = this.secondaryColor;
      this.fillType2 = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 64
      });
      this.fillType3 = colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: 64
      });
      this.fillType4 = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -64
      });
      this.fillType5 = colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: -64
      });
      this.fillType6 = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 128
      });
      this.fillType7 = colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: 128
      });
      this.pie1 = this.pie1 || this.primaryColor;
      this.pie2 = this.pie2 || this.secondaryColor;
      this.pie3 = this.pie3 || this.tertiaryColor;
      this.pie4 = this.pie4 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        l: -30
      });
      this.pie5 = this.pie5 || colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        l: -30
      });
      this.pie6 = this.pie6 || colorChannelAdjuster_1.colorChannelAdjust(this.tertiaryColor, {
        h: 40,
        l: -40
      });
      this.pie7 = this.pie7 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60,
        l: -10
      });
      this.pie8 = this.pie8 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -60,
        l: -10
      });
      this.pie9 = this.pie9 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120,
        l: 0
      });
      this.pie10 = this.pie10 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60,
        l: -50
      });
      this.pie11 = this.pie11 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -60,
        l: -50
      });
      this.pie12 = this.pie12 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120,
        l: -50
      });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill = this.quadrant2Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      });
      this.quadrant3Fill = this.quadrant3Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      });
      this.quadrant4Fill = this.quadrant4Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill = this.quadrant2TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      });
      this.quadrant3TextFill = this.quadrant3TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      });
      this.quadrant4TextFill = this.quadrant4TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      });
      this.quadrantPointFill = this.quadrantPointFill || colorDarknessUtil.isColorDark(this.quadrant1Fill) ? colorLightnessAdjuster.adjustLightness(this.quadrant1Fill) : colorLightnessHelper.adjustLightness(this.quadrant1Fill);
      this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.packet = {
        startByteColor: this.primaryTextColor,
        endByteColor: this.primaryTextColor,
        labelColor: this.primaryTextColor,
        titleColor: this.primaryTextColor,
        blockStrokeColor: this.primaryTextColor,
        blockFillColor: this.mainBkg
      };
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12
      };
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette: this.xyChart?.plotColorPalette || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
      };
      this.requirementBackground = this.requirementBackground || this.primaryColor;
      this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground;
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = this.git0 || this.primaryColor;
      this.git1 = this.git1 || this.secondaryColor;
      this.git2 = this.git2 || this.tertiaryColor;
      this.git3 = this.git3 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -30
      });
      this.git4 = this.git4 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -60
      });
      this.git5 = this.git5 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -90
      });
      this.git6 = this.git6 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60
      });
      this.git7 = this.git7 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120
      });
      if (this.darkMode) {
        this.git0 = colorLightnessAdjuster.adjustLightness(this.git0, 25);
        this.git1 = colorLightnessAdjuster.adjustLightness(this.git1, 25);
        this.git2 = colorLightnessAdjuster.adjustLightness(this.git2, 25);
        this.git3 = colorLightnessAdjuster.adjustLightness(this.git3, 25);
        this.git4 = colorLightnessAdjuster.adjustLightness(this.git4, 25);
        this.git5 = colorLightnessAdjuster.adjustLightness(this.git5, 25);
        this.git6 = colorLightnessAdjuster.adjustLightness(this.git6, 25);
        this.git7 = colorLightnessAdjuster.adjustLightness(this.git7, 25);
      } else {
        this.git0 = colorLightnessHelper.adjustLightness(this.git0, 25);
        this.git1 = colorLightnessHelper.adjustLightness(this.git1, 25);
        this.git2 = colorLightnessHelper.adjustLightness(this.git2, 25);
        this.git3 = colorLightnessHelper.adjustLightness(this.git3, 25);
        this.git4 = colorLightnessHelper.adjustLightness(this.git4, 25);
        this.git5 = colorLightnessHelper.adjustLightness(this.git5, 25);
        this.git6 = colorLightnessHelper.adjustLightness(this.git6, 25);
        this.git7 = colorLightnessHelper.adjustLightness(this.git7, 25);
      }
      this.gitInv0 = this.gitInv0 || colorInvertBlendUtil.invertColorBlend(this.git0);
      this.gitInv1 = this.gitInv1 || colorInvertBlendUtil.invertColorBlend(this.git1);
      this.gitInv2 = this.gitInv2 || colorInvertBlendUtil.invertColorBlend(this.git2);
      this.gitInv3 = this.gitInv3 || colorInvertBlendUtil.invertColorBlend(this.git3);
      this.gitInv4 = this.gitInv4 || colorInvertBlendUtil.invertColorBlend(this.git4);
      this.gitInv5 = this.gitInv5 || colorInvertBlendUtil.invertColorBlend(this.git5);
      this.gitInv6 = this.gitInv6 || colorInvertBlendUtil.invertColorBlend(this.git6);
      this.gitInv7 = this.gitInv7 || colorInvertBlendUtil.invertColorBlend(this.git7);
      this.gitBranchLabel0 = this.gitBranchLabel0 || colorInvertBlendUtil.invertColorBlend(this.labelTextColor);
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
      this.gitBranchLabel3 = this.gitBranchLabel3 || colorInvertBlendUtil.invertColorBlend(this.labelTextColor);
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || W;
      this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || R;
    }
    calculate(t) {
      if (typeof t != "object") {
        this.updateColors();
        return;
      }
      let i = Object.keys(t);
      i.forEach(i => {
        this[i] = t[i];
      });
      this.updateColors();
      i.forEach(i => {
        this[i] = t[i];
      });
    }
    constructor() {
      this.background = "#f4f4f4";
      this.primaryColor = "#cde498";
      this.secondaryColor = "#cdffb2";
      this.background = "white";
      this.mainBkg = "#cde498";
      this.secondBkg = "#cdffb2";
      this.lineColor = "green";
      this.border1 = "#13540c";
      this.border2 = "#6eaa49";
      this.arrowheadColor = "green";
      this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif";
      this.fontSize = "16px";
      this.tertiaryColor = colorLightnessAdjuster.adjustLightness("#cde498", 10);
      this.primaryBorderColor = N(this.primaryColor, this.darkMode);
      this.secondaryBorderColor = N(this.secondaryColor, this.darkMode);
      this.tertiaryBorderColor = N(this.tertiaryColor, this.darkMode);
      this.primaryTextColor = colorInvertBlendUtil.invertColorBlend(this.primaryColor);
      this.secondaryTextColor = colorInvertBlendUtil.invertColorBlend(this.secondaryColor);
      this.tertiaryTextColor = colorInvertBlendUtil.invertColorBlend(this.primaryColor);
      this.lineColor = colorInvertBlendUtil.invertColorBlend(this.background);
      this.textColor = colorInvertBlendUtil.invertColorBlend(this.background);
      this.THEME_COLOR_LIMIT = 12;
      this.nodeBkg = "calculated";
      this.nodeBorder = "calculated";
      this.clusterBkg = "calculated";
      this.clusterBorder = "calculated";
      this.defaultLinkColor = "calculated";
      this.titleColor = "#333";
      this.edgeLabelBackground = "#e8e8e8";
      this.actorBorder = "calculated";
      this.actorBkg = "calculated";
      this.actorTextColor = "black";
      this.actorLineColor = "calculated";
      this.signalColor = "#333";
      this.signalTextColor = "#333";
      this.labelBoxBkgColor = "calculated";
      this.labelBoxBorderColor = "#326932";
      this.labelTextColor = "calculated";
      this.loopTextColor = "calculated";
      this.noteBorderColor = "calculated";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "calculated";
      this.activationBorderColor = "#666";
      this.activationBkgColor = "#f4f4f4";
      this.sequenceNumberColor = "white";
      this.sectionBkgColor = "#6eaa49";
      this.altSectionBkgColor = "white";
      this.sectionBkgColor2 = "#6eaa49";
      this.excludeBkgColor = "#eeeeee";
      this.taskBorderColor = "calculated";
      this.taskBkgColor = "#487e3a";
      this.taskTextLightColor = "white";
      this.taskTextColor = "calculated";
      this.taskTextDarkColor = "black";
      this.taskTextOutsideColor = "calculated";
      this.taskTextClickableColor = "#003163";
      this.activeTaskBorderColor = "calculated";
      this.activeTaskBkgColor = "calculated";
      this.gridColor = "lightgrey";
      this.doneTaskBkgColor = "lightgrey";
      this.doneTaskBorderColor = "grey";
      this.critBorderColor = "#ff8888";
      this.critBkgColor = "red";
      this.todayLineColor = "red";
      this.vertLineColor = "#00BFFF";
      this.personBorder = this.primaryBorderColor;
      this.personBkg = this.mainBkg;
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.labelColor = "black";
      this.errorBkgColor = "#552222";
      this.errorTextColor = "#552222";
    }
  }, "Theme");
  var Y = h;
  var V = B(t => {
    let i = new Y();
    i.calculate(t);
    return i;
  }, "getThemeVariables");
  B(n = class {
    updateColors() {
      this.secondBkg = colorLightnessAdjuster.adjustLightness(this.contrast, 55);
      this.border2 = this.contrast;
      this.actorBorder = colorLightnessAdjuster.adjustLightness(this.border1, 23);
      this.actorBkg = this.mainBkg;
      this.actorTextColor = this.text;
      this.actorLineColor = this.actorBorder;
      this.signalColor = this.text;
      this.signalTextColor = this.text;
      this.labelBoxBkgColor = this.actorBkg;
      this.labelBoxBorderColor = this.actorBorder;
      this.labelTextColor = this.text;
      this.loopTextColor = this.text;
      this.noteBorderColor = "#999";
      this.noteBkgColor = "#666";
      this.noteTextColor = "#fff";
      this.cScale0 = this.cScale0 || "#555";
      this.cScale1 = this.cScale1 || "#F4F4F4";
      this.cScale2 = this.cScale2 || "#555";
      this.cScale3 = this.cScale3 || "#BBB";
      this.cScale4 = this.cScale4 || "#777";
      this.cScale5 = this.cScale5 || "#999";
      this.cScale6 = this.cScale6 || "#DDD";
      this.cScale7 = this.cScale7 || "#FFF";
      this.cScale8 = this.cScale8 || "#DDD";
      this.cScale9 = this.cScale9 || "#BBB";
      this.cScale10 = this.cScale10 || "#999";
      this.cScale11 = this.cScale11 || "#777";
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        this["cScaleInv" + t] = this["cScaleInv" + t] || colorInvertBlendUtil.invertColorBlend(this["cScale" + t]);
      }
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        if (this.darkMode) {
          this["cScalePeer" + t] = this["cScalePeer" + t] || colorLightnessAdjuster.adjustLightness(this["cScale" + t], 10);
        } else {
          this["cScalePeer" + t] = this["cScalePeer" + t] || colorLightnessHelper.adjustLightness(this["cScale" + t], 10);
        }
      }
      this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
      this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1;
      this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
      }
      for (let t = 0; t < 5; t++) {
        this["surface" + t] = this["surface" + t] || colorChannelAdjuster_1.colorChannelAdjust(this.mainBkg, {
          l: -(5 + t * 5)
        });
        this["surfacePeer" + t] = this["surfacePeer" + t] || colorChannelAdjuster_1.colorChannelAdjust(this.mainBkg, {
          l: -(8 + t * 5)
        });
      }
      this.nodeBkg = this.mainBkg;
      this.nodeBorder = this.border1;
      this.clusterBkg = this.secondBkg;
      this.clusterBorder = this.border2;
      this.defaultLinkColor = this.lineColor;
      this.titleColor = this.text;
      this.sectionBkgColor = colorLightnessAdjuster.adjustLightness(this.contrast, 30);
      this.sectionBkgColor2 = colorLightnessAdjuster.adjustLightness(this.contrast, 30);
      this.taskBorderColor = colorLightnessHelper.adjustLightness(this.contrast, 10);
      this.taskBkgColor = this.contrast;
      this.taskTextColor = this.taskTextLightColor;
      this.taskTextDarkColor = this.text;
      this.taskTextOutsideColor = this.taskTextDarkColor;
      this.activeTaskBorderColor = this.taskBorderColor;
      this.activeTaskBkgColor = this.mainBkg;
      this.gridColor = colorLightnessAdjuster.adjustLightness(this.border1, 30);
      this.doneTaskBkgColor = this.done;
      this.doneTaskBorderColor = this.lineColor;
      this.critBkgColor = this.critical;
      this.critBorderColor = colorLightnessHelper.adjustLightness(this.critBkgColor, 10);
      this.todayLineColor = this.critBkgColor;
      this.vertLineColor = this.critBkgColor;
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.transitionColor = this.transitionColor || "#000";
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#f4f4f4";
      this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
      this.stateBorder = this.stateBorder || "#000";
      this.innerEndBackground = this.primaryBorderColor;
      this.specialStateColor = "#222";
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.classText = this.primaryTextColor;
      this.fillType0 = this.primaryColor;
      this.fillType1 = this.secondaryColor;
      this.fillType2 = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 64
      });
      this.fillType3 = colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: 64
      });
      this.fillType4 = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -64
      });
      this.fillType5 = colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: -64
      });
      this.fillType6 = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 128
      });
      this.fillType7 = colorChannelAdjuster_1.colorChannelAdjust(this.secondaryColor, {
        h: 128
      });
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++) {
        this["pie" + t] = this["cScale" + t];
      }
      this.pie12 = this.pie0;
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill = this.quadrant2Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      });
      this.quadrant3Fill = this.quadrant3Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      });
      this.quadrant4Fill = this.quadrant4Fill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill = this.quadrant2TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      });
      this.quadrant3TextFill = this.quadrant3TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      });
      this.quadrant4TextFill = this.quadrant4TextFill || colorChannelAdjuster_1.colorChannelAdjust(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      });
      this.quadrantPointFill = this.quadrantPointFill || colorDarknessUtil.isColorDark(this.quadrant1Fill) ? colorLightnessAdjuster.adjustLightness(this.quadrant1Fill) : colorLightnessHelper.adjustLightness(this.quadrant1Fill);
      this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette: this.xyChart?.plotColorPalette || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
      };
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12
      };
      this.requirementBackground = this.requirementBackground || this.primaryColor;
      this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground;
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = colorLightnessHelper.adjustLightness(this.pie1, 25) || this.primaryColor;
      this.git1 = this.pie2 || this.secondaryColor;
      this.git2 = this.pie3 || this.tertiaryColor;
      this.git3 = this.pie4 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -30
      });
      this.git4 = this.pie5 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -60
      });
      this.git5 = this.pie6 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -90
      });
      this.git6 = this.pie7 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 60
      });
      this.git7 = this.pie8 || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 120
      });
      this.gitInv0 = this.gitInv0 || colorInvertBlendUtil.invertColorBlend(this.git0);
      this.gitInv1 = this.gitInv1 || colorInvertBlendUtil.invertColorBlend(this.git1);
      this.gitInv2 = this.gitInv2 || colorInvertBlendUtil.invertColorBlend(this.git2);
      this.gitInv3 = this.gitInv3 || colorInvertBlendUtil.invertColorBlend(this.git3);
      this.gitInv4 = this.gitInv4 || colorInvertBlendUtil.invertColorBlend(this.git4);
      this.gitInv5 = this.gitInv5 || colorInvertBlendUtil.invertColorBlend(this.git5);
      this.gitInv6 = this.gitInv6 || colorInvertBlendUtil.invertColorBlend(this.git6);
      this.gitInv7 = this.gitInv7 || colorInvertBlendUtil.invertColorBlend(this.git7);
      this.branchLabelColor = this.branchLabelColor || this.labelTextColor;
      this.gitBranchLabel0 = this.branchLabelColor;
      this.gitBranchLabel1 = "white";
      this.gitBranchLabel2 = this.branchLabelColor;
      this.gitBranchLabel3 = "white";
      this.gitBranchLabel4 = this.branchLabelColor;
      this.gitBranchLabel5 = this.branchLabelColor;
      this.gitBranchLabel6 = this.branchLabelColor;
      this.gitBranchLabel7 = this.branchLabelColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || W;
      this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || R;
    }
    calculate(t) {
      if (typeof t != "object") {
        this.updateColors();
        return;
      }
      let i = Object.keys(t);
      i.forEach(i => {
        this[i] = t[i];
      });
      this.updateColors();
      i.forEach(i => {
        this[i] = t[i];
      });
    }
    constructor() {
      this.primaryColor = "#eee";
      this.contrast = "#707070";
      this.secondaryColor = colorLightnessAdjuster.adjustLightness(this.contrast, 55);
      this.background = "#ffffff";
      this.tertiaryColor = colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -160
      });
      this.primaryBorderColor = N(this.primaryColor, this.darkMode);
      this.secondaryBorderColor = N(this.secondaryColor, this.darkMode);
      this.tertiaryBorderColor = N(this.tertiaryColor, this.darkMode);
      this.primaryTextColor = colorInvertBlendUtil.invertColorBlend(this.primaryColor);
      this.secondaryTextColor = colorInvertBlendUtil.invertColorBlend(this.secondaryColor);
      this.tertiaryTextColor = colorInvertBlendUtil.invertColorBlend(this.tertiaryColor);
      this.lineColor = colorInvertBlendUtil.invertColorBlend(this.background);
      this.textColor = colorInvertBlendUtil.invertColorBlend(this.background);
      this.mainBkg = "#eee";
      this.secondBkg = "calculated";
      this.lineColor = "#666";
      this.border1 = "#999";
      this.border2 = "calculated";
      this.note = "#ffa";
      this.text = "#333";
      this.critical = "#d42";
      this.done = "#bbb";
      this.arrowheadColor = "#333333";
      this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif";
      this.fontSize = "16px";
      this.THEME_COLOR_LIMIT = 12;
      this.nodeBkg = "calculated";
      this.nodeBorder = "calculated";
      this.clusterBkg = "calculated";
      this.clusterBorder = "calculated";
      this.defaultLinkColor = "calculated";
      this.titleColor = "calculated";
      this.edgeLabelBackground = "white";
      this.actorBorder = "calculated";
      this.actorBkg = "calculated";
      this.actorTextColor = "calculated";
      this.actorLineColor = this.actorBorder;
      this.signalColor = "calculated";
      this.signalTextColor = "calculated";
      this.labelBoxBkgColor = "calculated";
      this.labelBoxBorderColor = "calculated";
      this.labelTextColor = "calculated";
      this.loopTextColor = "calculated";
      this.noteBorderColor = "calculated";
      this.noteBkgColor = "calculated";
      this.noteTextColor = "calculated";
      this.activationBorderColor = "#666";
      this.activationBkgColor = "#f4f4f4";
      this.sequenceNumberColor = "white";
      this.sectionBkgColor = "calculated";
      this.altSectionBkgColor = "white";
      this.sectionBkgColor2 = "calculated";
      this.excludeBkgColor = "#eeeeee";
      this.taskBorderColor = "calculated";
      this.taskBkgColor = "calculated";
      this.taskTextLightColor = "white";
      this.taskTextColor = "calculated";
      this.taskTextDarkColor = "calculated";
      this.taskTextOutsideColor = "calculated";
      this.taskTextClickableColor = "#003163";
      this.activeTaskBorderColor = "calculated";
      this.activeTaskBkgColor = "calculated";
      this.gridColor = "calculated";
      this.doneTaskBkgColor = "calculated";
      this.doneTaskBorderColor = "calculated";
      this.critBkgColor = "calculated";
      this.critBorderColor = "calculated";
      this.todayLineColor = "calculated";
      this.vertLineColor = "calculated";
      this.personBorder = this.primaryBorderColor;
      this.personBkg = this.mainBkg;
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.rowOdd = this.rowOdd || colorLightnessAdjuster.adjustLightness(this.mainBkg, 75) || "#ffffff";
      this.rowEven = this.rowEven || "#f4f4f4";
      this.labelColor = "black";
      this.errorBkgColor = "#552222";
      this.errorTextColor = "#552222";
    }
  }, "Theme");
  var X = n;
  var K = {
    base: {
      getThemeVariables: $
    },
    dark: {
      getThemeVariables: j
    },
    default: {
      getThemeVariables: G
    },
    forest: {
      getThemeVariables: V
    },
    neutral: {
      getThemeVariables: B(t => {
        let i = new X();
        i.calculate(t);
        return i;
      }, "getThemeVariables")
    }
  };
  var Q = {
    flowchart: {
      useMaxWidth: true,
      titleTopMargin: 25,
      subGraphTitleMargin: {
        top: 0,
        bottom: 0
      },
      diagramPadding: 8,
      htmlLabels: true,
      nodeSpacing: 50,
      rankSpacing: 50,
      curve: "basis",
      padding: 15,
      defaultRenderer: "dagre-wrapper",
      wrappingWidth: 200,
      inheritDir: false
    },
    sequence: {
      useMaxWidth: true,
      hideUnusedParticipants: false,
      activationWidth: 10,
      diagramMarginX: 50,
      diagramMarginY: 10,
      actorMargin: 50,
      width: 150,
      height: 65,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      mirrorActors: true,
      forceMenus: false,
      bottomMarginAdj: 1,
      rightAngles: false,
      showSequenceNumbers: false,
      actorFontSize: 14,
      actorFontFamily: "\"Open Sans\", sans-serif",
      actorFontWeight: 400,
      noteFontSize: 14,
      noteFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
      noteFontWeight: 400,
      noteAlign: "center",
      messageFontSize: 16,
      messageFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
      messageFontWeight: 400,
      wrap: false,
      wrapPadding: 10,
      labelBoxWidth: 50,
      labelBoxHeight: 20
    },
    gantt: {
      useMaxWidth: true,
      titleTopMargin: 25,
      barHeight: 20,
      barGap: 4,
      topPadding: 50,
      rightPadding: 75,
      leftPadding: 75,
      gridLineStartPadding: 35,
      fontSize: 11,
      sectionFontSize: 11,
      numberSectionStyles: 4,
      axisFormat: "%Y-%m-%d",
      topAxis: false,
      displayMode: "",
      weekday: "sunday"
    },
    journey: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      leftMargin: 150,
      maxLabelWidth: 360,
      width: 150,
      height: 50,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      bottomMarginAdj: 1,
      rightAngles: false,
      taskFontSize: 14,
      taskFontFamily: "\"Open Sans\", sans-serif",
      taskMargin: 50,
      activationWidth: 10,
      textPlacement: "fo",
      actorColours: ["#8FBC8F", "#7CFC00", "#00FFFF", "#20B2AA", "#B0E0E6", "#FFFFE0"],
      sectionFills: ["#191970", "#8B008B", "#4B0082", "#2F4F4F", "#800000", "#8B4513", "#00008B"],
      sectionColours: ["#fff"],
      titleColor: "",
      titleFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
      titleFontSize: "4ex"
    },
    class: {
      useMaxWidth: true,
      titleTopMargin: 25,
      arrowMarkerAbsolute: false,
      dividerMargin: 10,
      padding: 5,
      textHeight: 10,
      defaultRenderer: "dagre-wrapper",
      htmlLabels: false,
      hideEmptyMembersBox: false
    },
    state: {
      useMaxWidth: true,
      titleTopMargin: 25,
      dividerMargin: 10,
      sizeUnit: 5,
      padding: 8,
      textHeight: 10,
      titleShift: -15,
      noteMargin: 10,
      forkWidth: 70,
      forkHeight: 7,
      miniPadding: 2,
      fontSizeFactor: 5.02,
      fontSize: 24,
      labelHeight: 16,
      edgeLengthFactor: "20",
      compositTitleSize: 35,
      radius: 5,
      defaultRenderer: "dagre-wrapper"
    },
    er: {
      useMaxWidth: true,
      titleTopMargin: 25,
      diagramPadding: 20,
      layoutDirection: "TB",
      minEntityWidth: 100,
      minEntityHeight: 75,
      entityPadding: 15,
      nodeSpacing: 140,
      rankSpacing: 80,
      stroke: "gray",
      fill: "honeydew",
      fontSize: 12
    },
    pie: {
      useMaxWidth: true,
      textPosition: 0.75
    },
    quadrantChart: {
      useMaxWidth: true,
      chartWidth: 500,
      chartHeight: 500,
      titleFontSize: 20,
      titlePadding: 10,
      quadrantPadding: 5,
      xAxisLabelPadding: 5,
      yAxisLabelPadding: 5,
      xAxisLabelFontSize: 16,
      yAxisLabelFontSize: 16,
      quadrantLabelFontSize: 16,
      quadrantTextTopPadding: 5,
      pointTextPadding: 5,
      pointLabelFontSize: 12,
      pointRadius: 5,
      xAxisPosition: "top",
      yAxisPosition: "left",
      quadrantInternalBorderStrokeWidth: 1,
      quadrantExternalBorderStrokeWidth: 2
    },
    xyChart: {
      useMaxWidth: true,
      width: 700,
      height: 500,
      titleFontSize: 20,
      titlePadding: 10,
      showDataLabel: false,
      showTitle: true,
      xAxis: {
        $ref: "#/$defs/XYChartAxisConfig",
        showLabel: true,
        labelFontSize: 14,
        labelPadding: 5,
        showTitle: true,
        titleFontSize: 16,
        titlePadding: 5,
        showTick: true,
        tickLength: 5,
        tickWidth: 2,
        showAxisLine: true,
        axisLineWidth: 2
      },
      yAxis: {
        $ref: "#/$defs/XYChartAxisConfig",
        showLabel: true,
        labelFontSize: 14,
        labelPadding: 5,
        showTitle: true,
        titleFontSize: 16,
        titlePadding: 5,
        showTick: true,
        tickLength: 5,
        tickWidth: 2,
        showAxisLine: true,
        axisLineWidth: 2
      },
      chartOrientation: "vertical",
      plotReservedSpacePercent: 50
    },
    requirement: {
      useMaxWidth: true,
      rect_fill: "#f9f9f9",
      text_color: "#333",
      rect_border_size: "0.5px",
      rect_border_color: "#bbb",
      rect_min_width: 200,
      rect_min_height: 200,
      fontSize: 14,
      rect_padding: 10,
      line_height: 20
    },
    mindmap: {
      useMaxWidth: true,
      padding: 10,
      maxNodeWidth: 200
    },
    kanban: {
      useMaxWidth: true,
      padding: 8,
      sectionWidth: 200,
      ticketBaseUrl: ""
    },
    timeline: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      leftMargin: 150,
      width: 150,
      height: 50,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      bottomMarginAdj: 1,
      rightAngles: false,
      taskFontSize: 14,
      taskFontFamily: "\"Open Sans\", sans-serif",
      taskMargin: 50,
      activationWidth: 10,
      textPlacement: "fo",
      actorColours: ["#8FBC8F", "#7CFC00", "#00FFFF", "#20B2AA", "#B0E0E6", "#FFFFE0"],
      sectionFills: ["#191970", "#8B008B", "#4B0082", "#2F4F4F", "#800000", "#8B4513", "#00008B"],
      sectionColours: ["#fff"],
      disableMulticolor: false
    },
    gitGraph: {
      useMaxWidth: true,
      titleTopMargin: 25,
      diagramPadding: 8,
      nodeLabel: {
        width: 75,
        height: 100,
        x: -25,
        y: 0
      },
      mainBranchName: "main",
      mainBranchOrder: 0,
      showCommitLabel: true,
      showBranches: true,
      rotateCommitLabel: true,
      parallelCommits: false,
      arrowMarkerAbsolute: false
    },
    c4: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      c4ShapeMargin: 50,
      c4ShapePadding: 20,
      width: 216,
      height: 60,
      boxMargin: 10,
      c4ShapeInRow: 4,
      nextLinePaddingX: 0,
      c4BoundaryInRow: 2,
      personFontSize: 14,
      personFontFamily: "\"Open Sans\", sans-serif",
      personFontWeight: "normal",
      external_personFontSize: 14,
      external_personFontFamily: "\"Open Sans\", sans-serif",
      external_personFontWeight: "normal",
      systemFontSize: 14,
      systemFontFamily: "\"Open Sans\", sans-serif",
      systemFontWeight: "normal",
      external_systemFontSize: 14,
      external_systemFontFamily: "\"Open Sans\", sans-serif",
      external_systemFontWeight: "normal",
      system_dbFontSize: 14,
      system_dbFontFamily: "\"Open Sans\", sans-serif",
      system_dbFontWeight: "normal",
      external_system_dbFontSize: 14,
      external_system_dbFontFamily: "\"Open Sans\", sans-serif",
      external_system_dbFontWeight: "normal",
      system_queueFontSize: 14,
      system_queueFontFamily: "\"Open Sans\", sans-serif",
      system_queueFontWeight: "normal",
      external_system_queueFontSize: 14,
      external_system_queueFontFamily: "\"Open Sans\", sans-serif",
      external_system_queueFontWeight: "normal",
      boundaryFontSize: 14,
      boundaryFontFamily: "\"Open Sans\", sans-serif",
      boundaryFontWeight: "normal",
      messageFontSize: 12,
      messageFontFamily: "\"Open Sans\", sans-serif",
      messageFontWeight: "normal",
      containerFontSize: 14,
      containerFontFamily: "\"Open Sans\", sans-serif",
      containerFontWeight: "normal",
      external_containerFontSize: 14,
      external_containerFontFamily: "\"Open Sans\", sans-serif",
      external_containerFontWeight: "normal",
      container_dbFontSize: 14,
      container_dbFontFamily: "\"Open Sans\", sans-serif",
      container_dbFontWeight: "normal",
      external_container_dbFontSize: 14,
      external_container_dbFontFamily: "\"Open Sans\", sans-serif",
      external_container_dbFontWeight: "normal",
      container_queueFontSize: 14,
      container_queueFontFamily: "\"Open Sans\", sans-serif",
      container_queueFontWeight: "normal",
      external_container_queueFontSize: 14,
      external_container_queueFontFamily: "\"Open Sans\", sans-serif",
      external_container_queueFontWeight: "normal",
      componentFontSize: 14,
      componentFontFamily: "\"Open Sans\", sans-serif",
      componentFontWeight: "normal",
      external_componentFontSize: 14,
      external_componentFontFamily: "\"Open Sans\", sans-serif",
      external_componentFontWeight: "normal",
      component_dbFontSize: 14,
      component_dbFontFamily: "\"Open Sans\", sans-serif",
      component_dbFontWeight: "normal",
      external_component_dbFontSize: 14,
      external_component_dbFontFamily: "\"Open Sans\", sans-serif",
      external_component_dbFontWeight: "normal",
      component_queueFontSize: 14,
      component_queueFontFamily: "\"Open Sans\", sans-serif",
      component_queueFontWeight: "normal",
      external_component_queueFontSize: 14,
      external_component_queueFontFamily: "\"Open Sans\", sans-serif",
      external_component_queueFontWeight: "normal",
      wrap: true,
      wrapPadding: 10,
      person_bg_color: "#08427B",
      person_border_color: "#073B6F",
      external_person_bg_color: "#686868",
      external_person_border_color: "#8A8A8A",
      system_bg_color: "#1168BD",
      system_border_color: "#3C7FC0",
      system_db_bg_color: "#1168BD",
      system_db_border_color: "#3C7FC0",
      system_queue_bg_color: "#1168BD",
      system_queue_border_color: "#3C7FC0",
      external_system_bg_color: "#999999",
      external_system_border_color: "#8A8A8A",
      external_system_db_bg_color: "#999999",
      external_system_db_border_color: "#8A8A8A",
      external_system_queue_bg_color: "#999999",
      external_system_queue_border_color: "#8A8A8A",
      container_bg_color: "#438DD5",
      container_border_color: "#3C7FC0",
      container_db_bg_color: "#438DD5",
      container_db_border_color: "#3C7FC0",
      container_queue_bg_color: "#438DD5",
      container_queue_border_color: "#3C7FC0",
      external_container_bg_color: "#B3B3B3",
      external_container_border_color: "#A6A6A6",
      external_container_db_bg_color: "#B3B3B3",
      external_container_db_border_color: "#A6A6A6",
      external_container_queue_bg_color: "#B3B3B3",
      external_container_queue_border_color: "#A6A6A6",
      component_bg_color: "#85BBF0",
      component_border_color: "#78A8D8",
      component_db_bg_color: "#85BBF0",
      component_db_border_color: "#78A8D8",
      component_queue_bg_color: "#85BBF0",
      component_queue_border_color: "#78A8D8",
      external_component_bg_color: "#CCCCCC",
      external_component_border_color: "#BFBFBF",
      external_component_db_bg_color: "#CCCCCC",
      external_component_db_border_color: "#BFBFBF",
      external_component_queue_bg_color: "#CCCCCC",
      external_component_queue_border_color: "#BFBFBF"
    },
    sankey: {
      useMaxWidth: true,
      width: 600,
      height: 400,
      linkColor: "gradient",
      nodeAlignment: "justify",
      showValues: true,
      prefix: "",
      suffix: ""
    },
    block: {
      useMaxWidth: true,
      padding: 8
    },
    packet: {
      useMaxWidth: true,
      rowHeight: 32,
      bitWidth: 32,
      bitsPerRow: 32,
      showBits: true,
      paddingX: 5,
      paddingY: 5
    },
    architecture: {
      useMaxWidth: true,
      padding: 40,
      iconSize: 80,
      fontSize: 16
    },
    radar: {
      useMaxWidth: true,
      width: 600,
      height: 600,
      marginTop: 50,
      marginRight: 50,
      marginBottom: 50,
      marginLeft: 50,
      axisScaleFactor: 1,
      axisLabelFactor: 1.05,
      curveTension: 0.17
    },
    theme: "default",
    look: "classic",
    handDrawnSeed: 0,
    layout: "dagre",
    maxTextSize: 50000,
    maxEdges: 500,
    darkMode: false,
    fontFamily: "\"trebuchet ms\", verdana, arial, sans-serif;",
    logLevel: 5,
    securityLevel: "strict",
    startOnLoad: true,
    arrowMarkerAbsolute: false,
    secure: ["secure", "securityLevel", "startOnLoad", "maxTextSize", "suppressErrorRendering", "maxEdges"],
    legacyMathML: false,
    forceLegacyMathML: false,
    deterministicIds: false,
    fontSize: 16,
    markdownAutoWrap: true,
    suppressErrorRendering: false
  };
  var J = {
    ...Q,
    deterministicIDSeed: undefined,
    elk: {
      mergeEdges: false,
      nodePlacementStrategy: "BRANDES_KOEPF",
      forceNodeModelOrder: false,
      considerModelOrder: "NODES_AND_EDGES"
    },
    themeCSS: undefined,
    themeVariables: K.default.getThemeVariables(),
    sequence: {
      ...Q.sequence,
      messageFont: B(function () {
        return {
          fontFamily: this.messageFontFamily,
          fontSize: this.messageFontSize,
          fontWeight: this.messageFontWeight
        };
      }, "messageFont"),
      noteFont: B(function () {
        return {
          fontFamily: this.noteFontFamily,
          fontSize: this.noteFontSize,
          fontWeight: this.noteFontWeight
        };
      }, "noteFont"),
      actorFont: B(function () {
        return {
          fontFamily: this.actorFontFamily,
          fontSize: this.actorFontSize,
          fontWeight: this.actorFontWeight
        };
      }, "actorFont")
    },
    class: {
      hideEmptyMembersBox: false
    },
    gantt: {
      ...Q.gantt,
      tickInterval: undefined,
      useWidth: undefined
    },
    c4: {
      ...Q.c4,
      useWidth: undefined,
      personFont: B(function () {
        return {
          fontFamily: this.personFontFamily,
          fontSize: this.personFontSize,
          fontWeight: this.personFontWeight
        };
      }, "personFont"),
      flowchart: {
        ...Q.flowchart,
        inheritDir: false
      },
      external_personFont: B(function () {
        return {
          fontFamily: this.external_personFontFamily,
          fontSize: this.external_personFontSize,
          fontWeight: this.external_personFontWeight
        };
      }, "external_personFont"),
      systemFont: B(function () {
        return {
          fontFamily: this.systemFontFamily,
          fontSize: this.systemFontSize,
          fontWeight: this.systemFontWeight
        };
      }, "systemFont"),
      external_systemFont: B(function () {
        return {
          fontFamily: this.external_systemFontFamily,
          fontSize: this.external_systemFontSize,
          fontWeight: this.external_systemFontWeight
        };
      }, "external_systemFont"),
      system_dbFont: B(function () {
        return {
          fontFamily: this.system_dbFontFamily,
          fontSize: this.system_dbFontSize,
          fontWeight: this.system_dbFontWeight
        };
      }, "system_dbFont"),
      external_system_dbFont: B(function () {
        return {
          fontFamily: this.external_system_dbFontFamily,
          fontSize: this.external_system_dbFontSize,
          fontWeight: this.external_system_dbFontWeight
        };
      }, "external_system_dbFont"),
      system_queueFont: B(function () {
        return {
          fontFamily: this.system_queueFontFamily,
          fontSize: this.system_queueFontSize,
          fontWeight: this.system_queueFontWeight
        };
      }, "system_queueFont"),
      external_system_queueFont: B(function () {
        return {
          fontFamily: this.external_system_queueFontFamily,
          fontSize: this.external_system_queueFontSize,
          fontWeight: this.external_system_queueFontWeight
        };
      }, "external_system_queueFont"),
      containerFont: B(function () {
        return {
          fontFamily: this.containerFontFamily,
          fontSize: this.containerFontSize,
          fontWeight: this.containerFontWeight
        };
      }, "containerFont"),
      external_containerFont: B(function () {
        return {
          fontFamily: this.external_containerFontFamily,
          fontSize: this.external_containerFontSize,
          fontWeight: this.external_containerFontWeight
        };
      }, "external_containerFont"),
      container_dbFont: B(function () {
        return {
          fontFamily: this.container_dbFontFamily,
          fontSize: this.container_dbFontSize,
          fontWeight: this.container_dbFontWeight
        };
      }, "container_dbFont"),
      external_container_dbFont: B(function () {
        return {
          fontFamily: this.external_container_dbFontFamily,
          fontSize: this.external_container_dbFontSize,
          fontWeight: this.external_container_dbFontWeight
        };
      }, "external_container_dbFont"),
      container_queueFont: B(function () {
        return {
          fontFamily: this.container_queueFontFamily,
          fontSize: this.container_queueFontSize,
          fontWeight: this.container_queueFontWeight
        };
      }, "container_queueFont"),
      external_container_queueFont: B(function () {
        return {
          fontFamily: this.external_container_queueFontFamily,
          fontSize: this.external_container_queueFontSize,
          fontWeight: this.external_container_queueFontWeight
        };
      }, "external_container_queueFont"),
      componentFont: B(function () {
        return {
          fontFamily: this.componentFontFamily,
          fontSize: this.componentFontSize,
          fontWeight: this.componentFontWeight
        };
      }, "componentFont"),
      external_componentFont: B(function () {
        return {
          fontFamily: this.external_componentFontFamily,
          fontSize: this.external_componentFontSize,
          fontWeight: this.external_componentFontWeight
        };
      }, "external_componentFont"),
      component_dbFont: B(function () {
        return {
          fontFamily: this.component_dbFontFamily,
          fontSize: this.component_dbFontSize,
          fontWeight: this.component_dbFontWeight
        };
      }, "component_dbFont"),
      external_component_dbFont: B(function () {
        return {
          fontFamily: this.external_component_dbFontFamily,
          fontSize: this.external_component_dbFontSize,
          fontWeight: this.external_component_dbFontWeight
        };
      }, "external_component_dbFont"),
      component_queueFont: B(function () {
        return {
          fontFamily: this.component_queueFontFamily,
          fontSize: this.component_queueFontSize,
          fontWeight: this.component_queueFontWeight
        };
      }, "component_queueFont"),
      external_component_queueFont: B(function () {
        return {
          fontFamily: this.external_component_queueFontFamily,
          fontSize: this.external_component_queueFontSize,
          fontWeight: this.external_component_queueFontWeight
        };
      }, "external_component_queueFont"),
      boundaryFont: B(function () {
        return {
          fontFamily: this.boundaryFontFamily,
          fontSize: this.boundaryFontSize,
          fontWeight: this.boundaryFontWeight
        };
      }, "boundaryFont"),
      messageFont: B(function () {
        return {
          fontFamily: this.messageFontFamily,
          fontSize: this.messageFontSize,
          fontWeight: this.messageFontWeight
        };
      }, "messageFont")
    },
    pie: {
      ...Q.pie,
      useWidth: 984
    },
    xyChart: {
      ...Q.xyChart,
      useWidth: undefined
    },
    requirement: {
      ...Q.requirement,
      useWidth: undefined
    },
    packet: {
      ...Q.packet
    },
    radar: {
      ...Q.radar
    },
    treemap: {
      useMaxWidth: true,
      padding: 10,
      diagramPadding: 8,
      showValues: true,
      nodeWidth: 100,
      nodeHeight: 40,
      borderWidth: 1,
      valueFontSize: 12,
      labelFontSize: 14,
      valueFormat: ","
    }
  };
  var tt = B(function (t, i = "") {
    return Object.keys(t).reduce((e, r) => Array.isArray(t[r]) ? e : typeof t[r] == "object" && t[r] !== null ? [...e, i + r, ...tt(t[r], "")] : [...e, i + r], []);
  }, "keyify");
  var ti = new Set(tt(J, ""));
  var te = J;
  var tr = B(t => {
    v.debug("sanitizeDirective called with", t);
    if (typeof t == "object" && t != null) {
      if (Array.isArray(t)) {
        t.forEach(t => tr(t));
        return;
      }
      for (let i of Object.keys(t)) {
        v.debug("Checking key", i);
        if (i.startsWith("__") || i.includes("proto") || i.includes("constr") || !ti.has(i) || t[i] == null) {
          v.debug("sanitize deleting key: ", i);
          delete t[i];
          continue;
        }
        if (typeof t[i] == "object") {
          v.debug("sanitizing object", i);
          tr(t[i]);
          continue;
        }
        for (let e of ["themeCSS", "fontFamily", "altFontFamily"]) {
          if (i.includes(e)) {
            v.debug("sanitizing css option", i);
            t[i] = to(t[i]);
          }
        }
      }
      if (t.themeVariables) {
        for (let i of Object.keys(t.themeVariables)) {
          let e = t.themeVariables[i];
          if ((e == null ? undefined : e.match) && !e.match(/^[\d "#%(),.;A-Za-z]+$/)) {
            t.themeVariables[i] = "";
          }
        }
      }
      v.debug("After sanitization", t);
    }
  }, "sanitizeDirective");
  var to = B(t => {
    let i = 0;
    let e = 0;
    for (let r of t) {
      if (i < e) {
        return "{ /* ERROR: Unbalanced CSS */ }";
      }
      if (r === "{") {
        i++;
      } else if (r === "}") {
        e++;
      }
    }
    if (i !== e) {
      return "{ /* ERROR: Unbalanced CSS */ }";
    } else {
      return t;
    }
  }, "sanitizeCss");
  var ta = Object.freeze(te);
  var tl = D({}, ta);
  var ts = [];
  var th = D({}, ta);
  var tn = B((t, i) => {
    let e = D({}, t);
    let r = {};
    for (let t of i) {
      tm(t);
      r = D(r, t);
    }
    e = D(e, r);
    if (r.theme && r.theme in K) {
      let t = D({}, d);
      let i = D(t.themeVariables || {}, r.themeVariables);
      if (e.theme && e.theme in K) {
        e.themeVariables = K[e.theme].getThemeVariables(i);
      }
    }
    tT(th = e);
    return th;
  }, "updateCurrentConfig");
  var tc = B(t => {
    tl = D({}, ta);
    tl = D(tl, t);
    if (t.theme && K[t.theme]) {
      tl.themeVariables = K[t.theme].getThemeVariables(t.themeVariables);
    }
    tn(tl, ts);
    return tl;
  }, "setSiteConfig");
  var td = B(t => {
    d = D({}, t);
  }, "saveConfigFromInitialize");
  var tu = B(t => {
    tn(tl = D(tl, t), ts);
    return tl;
  }, "updateSiteConfig");
  var tg = B(() => D({}, tl), "getSiteConfig");
  var tC = B(t => {
    tT(t);
    D(th, t);
    return tp();
  }, "setConfig");
  var tp = B(() => D({}, th), "getConfig");
  var tm = B(t => {
    if (t) {
      ["secure", ...(tl.secure ?? [])].forEach(i => {
        if (Object.hasOwn(t, i)) {
          v.debug(`Denied attempt to modify a secure key ${i}`, t[i]);
          delete t[i];
        }
      });
      Object.keys(t).forEach(i => {
        if (i.startsWith("__")) {
          delete t[i];
        }
      });
      Object.keys(t).forEach(i => {
        if (typeof t[i] == "string" && (t[i].includes("<") || t[i].includes(">") || t[i].includes("url(data:"))) {
          delete t[i];
        }
        if (typeof t[i] == "object") {
          tm(t[i]);
        }
      });
    }
  }, "sanitize");
  var tf = B(t => {
    tr(t);
    if (!!t.fontFamily && !t.themeVariables?.fontFamily) {
      t.themeVariables = {
        ...t.themeVariables,
        fontFamily: t.fontFamily
      };
    }
    ts.push(t);
    tn(tl, ts);
  }, "addDirective");
  var ty = B(function (t = tl) {
    tn(t, ts = []);
  }, "reset");
  var tx = {
    LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
  };
  var tb = {};
  var tk = B(t => {
    if (!tb[t]) {
      v.warn(tx[t]);
      tb[t] = true;
    }
  }, "issueWarning");
  var tT = B(t => {
    if (t && (t.lazyLoadedDiagrams || t.loadExternalDiagramsAtStartup)) {
      tk("LAZY_LOAD_DEPRECATED");
    }
  }, "checkConfig");
  var tB = /<br\s*\/?>/gi;
  var tS = B(t => t ? tO(t).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows");
  r = false;
  var tF = () => {
    if (!r) {
      tv();
      r = true;
    }
  };
  function tv() {
    let t = "data-temp-href-target";
    dompurifyCore.DOMPurify.addHook("beforeSanitizeAttributes", i => {
      if (i.tagName === "A" && i.hasAttribute("target")) {
        i.setAttribute(t, i.getAttribute("target") ?? "");
      }
    });
    dompurifyCore.DOMPurify.addHook("afterSanitizeAttributes", i => {
      if (i.tagName === "A" && i.hasAttribute(t)) {
        i.setAttribute("target", i.getAttribute(t) ?? "");
        i.removeAttribute(t);
        if (i.getAttribute("target") === "_blank") {
          i.setAttribute("rel", "noopener");
        }
      }
    });
  }
  B(tv, "setupDompurifyHooks");
  var tL = B(t => {
    tF();
    return dompurifyCore.DOMPurify.sanitize(t);
  }, "removeScript");
  var t_ = B((t, i) => {
    if (i.flowchart?.htmlLabels !== false) {
      let e = i.securityLevel;
      if (e === "antiscript" || e === "strict") {
        t = tL(t);
      } else if (e !== "loose") {
        t = tq(t = (t = (t = tO(t)).replace(/</g, "&lt;").replace(/>/g, "&gt;")).replace(/=/g, "&equals;"));
      }
    }
    return t;
  }, "sanitizeMore");
  var tZ = B((t, i) => t ? t = i.dompurifyConfig ? dompurifyCore.DOMPurify.sanitize(t_(t, i), i.dompurifyConfig).toString() : dompurifyCore.DOMPurify.sanitize(t_(t, i), {
    FORBID_TAGS: ["style"]
  }).toString() : t, "sanitizeText");
  var tA = B((t, i) => typeof t == "string" ? tZ(t, i) : t.flat().map(t => tZ(t, i)), "sanitizeTextOrArray");
  var tE = B(t => tB.test(t), "hasBreaks");
  var tw = B(t => t.split(tB), "splitBreaks");
  var tq = B(t => t.replace(/#br#/g, "<br/>"), "placeholderToBreak");
  var tO = B(t => t.replace(tB, "#br#"), "breakToPlaceholder");
  var tM = B(t => {
    let i = "";
    if (t) {
      i = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
      i = CSS.escape(i);
    }
    return i;
  }, "getUrl");
  var tz = B(t => t !== false && !["false", "null", "0"].includes(String(t).trim().toLowerCase()), "evaluate");
  var tI = B(function () {
    var t = arguments.length;
    var i = Array(t);
    var e = 0;
    for (; e < t; e++) {
      i[e] = arguments[e];
    }
    return Math.max(...i.filter(t => !isNaN(t)));
  }, "getMax");
  var tD = B(function () {
    var t = arguments.length;
    var i = Array(t);
    var e = 0;
    for (; e < t; e++) {
      i[e] = arguments[e];
    }
    return Math.min(...i.filter(t => !isNaN(t)));
  }, "getMin");
  var tW = B(function (t) {
    let i = t.split(/(,)/);
    let e = [];
    for (let t = 0; t < i.length; t++) {
      let r = i[t];
      if (r === "," && t > 0 && t + 1 < i.length) {
        let o = i[t - 1];
        let a = i[t + 1];
        if (tN(o, a)) {
          r = o + "," + a;
          t++;
          e.pop();
        }
      }
      e.push(tP(r));
    }
    return e.join("");
  }, "parseGenericTypes");
  var tR = B((t, i) => Math.max(0, t.split(i).length - 1), "countOccurrence");
  var tN = B((t, i) => {
    let e = tR(t, "~");
    let r = tR(i, "~");
    return e === 1 && r === 1;
  }, "shouldCombineSets");
  var tP = B(t => {
    let i = tR(t, "~");
    let e = false;
    if (i <= 1) {
      return t;
    }
    if (i % 2 != 0 && t.startsWith("~")) {
      t = t.substring(1);
      e = true;
    }
    let r = [...t];
    let o = r.indexOf("~");
    let a = r.lastIndexOf("~");
    while (o !== -1 && a !== -1 && o !== a) {
      r[o] = "<";
      r[a] = ">";
      o = r.indexOf("~");
      a = r.lastIndexOf("~");
    }
    if (e) {
      r.unshift("~");
    }
    return r.join("");
  }, "processSet");
  var t$ = B(() => window.MathMLElement !== undefined, "isMathMLSupported");
  var tH = /\$\$(.*)\$\$/g;
  var tj = B(t => {
    return (t.match(tH)?.length ?? 0) > 0;
  }, "hasKatex");
  var tU = B(async (t, i) => {
    let e = document.createElement("div");
    e.innerHTML = xssContentSanitizer.sanitizeHtml(await tY(t, i), null, {
      logType: "js.innerHTML",
      reportOnly: "false",
      blackConfig: "{}",
      configMode: "merge",
      isCloseSSRReport: false,
      bid: "flow_web",
      region: "cn",
      urlLimit: "-1",
      htmlLimit: "-1",
      isSaveValidUrl: false,
      isRuntimeLog: false,
      isDOMParser: true,
      escapeRule: "escape-report",
      reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
      scmBranch: "release_train_samantha_2026-03-09_1120843696898",
      scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
      scmVersion: "1.0.4.168",
      webpackPluginVersion: "3.4.5",
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFRjF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*t5-%R*aWJ-TjBWbXRz$0%1$ld%SlJW$$-xWWxkd2$sbFlTbT$r$0%wOQ"
    });
    e.id = "katex-temp";
    e.style.visibility = "hidden";
    e.style.position = "absolute";
    e.style.top = "0";
    let r = document.querySelector("body");
    if (r != null) {
      r.insertAdjacentElement("beforeend", e);
    }
    let o = {
      width: e.clientWidth,
      height: e.clientHeight
    };
    e.remove();
    return o;
  }, "calculateMathMLDimensions");
  var tG = B(async (t, i) => {
    if (!tj(t)) {
      return t;
    }
    if (!t$() && !i.legacyMathML && !i.forceLegacyMathML) {
      return t.replace(tH, "MathML is unsupported in this environment.");
    }
    {
      let {
        default: r
      } = await require.e("katex-core-library") /*id: 21553*/.then(require.bind(require, "katex-core-renderer") /*id: 811377*/);
      let o = i.forceLegacyMathML || !t$() && i.legacyMathML ? "htmlAndMathml" : "mathml";
      return t.split(tB).map(t => tj(t) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${t}</div>` : `<div>${t}</div>`).join("").replace(tH, (t, i) => r.renderToString(i, {
        throwOnError: true,
        displayMode: true,
        output: o
      }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
    }
  }, "renderKatexUnsanitized");
  var tY = B(async (t, i) => tZ(await tG(t, i), i), "renderKatexSanitized");
  var tV = {
    getRows: tS,
    sanitizeText: tZ,
    sanitizeTextOrArray: tA,
    hasBreaks: tE,
    splitBreaks: tw,
    lineBreakRegex: tB,
    removeScript: tL,
    getUrl: tM,
    evaluate: tz,
    getMax: tI,
    getMin: tD
  };
  var tX = B(function (t, i) {
    for (let e of i) {
      t.attr(e[0], e[1]);
    }
  }, "d3Attrs");
  var tK = B(function (t, i, e) {
    let r = new Map();
    if (e) {
      r.set("width", "100%");
      r.set("style", `max-width: ${i}px;`);
    } else {
      r.set("height", t);
      r.set("width", i);
    }
    return r;
  }, "calculateSvgSizeAttrs");
  var tQ = B(function (t, i, e, r) {
    tX(t, tK(i, e, r));
  }, "configureSvgSize");
  var tJ = B(function (t, i, e, r) {
    let o = i.node().getBBox();
    let a = o.width;
    let l = o.height;
    v.info(`SVG bounds: ${a}x${l}`, o);
    let s = 0;
    let h = 0;
    v.info(`Graph bounds: ${s}x${h}`, t);
    s = a + e * 2;
    h = l + e * 2;
    v.info(`Calculated bounds: ${s}x${h}`);
    tQ(i, h, s, r);
    let n = `${o.x - e} ${o.y - e} ${o.width + e * 2} ${o.height + e * 2}`;
    i.attr("viewBox", n);
  }, "setupGraphViewbox");
  var t0 = {};
  var t1 = B((t, i, e) => {
    let r = "";
    if (t in t0 && t0[t]) {
      r = t0[t](e);
    } else {
      v.warn(`No theme found for ${t}`);
    }
    return ` & {
    font-family: ${e.fontFamily};
    font-size: ${e.fontSize};
    fill: ${e.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${e.errorBkgColor};
  }
  & .error-text {
    fill: ${e.errorTextColor};
    stroke: ${e.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 1px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${e.lineColor};
    stroke: ${e.lineColor};
  }
  & .marker.cross {
    stroke: ${e.lineColor};
  }

  & svg {
    font-family: ${e.fontFamily};
    font-size: ${e.fontSize};
  }
   & p {
    margin: 0
   }

  ${r}

  ${i}
`;
  }, "getStyles");
  var t2 = B((t, i) => {
    if (i !== undefined) {
      t0[t] = i;
    }
  }, "addStylesForDiagram");
  var t5 = t1;
  var t3 = {};
  S(t3, {
    clear: () => t9,
    getAccDescription: () => ir,
    getAccTitle: () => ii,
    getDiagramTitle: () => ia,
    setAccDescription: () => ie,
    setAccTitle: () => it,
    setDiagramTitle: () => io
  });
  var t4 = "";
  var t6 = "";
  var t8 = "";
  var t7 = B(t => tZ(t, tp()), "sanitizeText");
  var t9 = B(() => {
    t4 = "";
    t8 = "";
    t6 = "";
  }, "clear");
  var it = B(t => {
    t4 = t7(t).replace(/^\s+/g, "");
  }, "setAccTitle");
  var ii = B(() => t4, "getAccTitle");
  var ie = B(t => {
    t8 = t7(t).replace(/\n\s+/g, "\n");
  }, "setAccDescription");
  var ir = B(() => t8, "getAccDescription");
  var io = B(t => {
    t6 = t7(t);
  }, "setDiagramTitle");
  var ia = B(() => t6, "getDiagramTitle");
  var il = tp;
  var is = tC;
  var ih = ta;
  var ic = B(t => tZ(t, il()), "sanitizeText");
  var id = tJ;
  var iu = B(() => t3, "getCommonDb");
  var ig = {};
  var iC = B((t, i, e) => {
    var r;
    if (ig[t]) {
      v.warn(`Diagram with id ${t} already registered. Overwriting.`);
    }
    ig[t] = i;
    if (e) {
      M(t, e);
    }
    t2(t, i.styles);
    if ((r = i.injectUtils) !== null && r !== undefined) {
      r.call(i, v, L, il, ic, id, iu(), () => {});
    }
  }, "registerDiagram");
  var ip = B(t => {
    if (t in ig) {
      return ig[t];
    }
    throw new im(t);
  }, "getDiagram");
  B(c = class extends Error {
    constructor(t) {
      super(`Diagram ${t} not found.`);
    }
  }, "DiagramNotFoundError");
  var im = c;
  require.d(exports, {
    diagramDetectors: function () {
      return w;
    },
    registerDiagram: function () {
      return iC;
    },
    getStyles: function () {
      return t5;
    },
    frozenConfig: function () {
      return ih;
    },
    setAccTitle: function () {
      return it;
    },
    getUrl: function () {
      return tM;
    },
    registerLazyDiagrams: function () {
      return O;
    },
    getDiagramTitle: function () {
      return ia;
    },
    commonDb: function () {
      return t3;
    },
    directiveCommentRegex: function () {
      return _;
    },
    getAccDescription: function () {
      return ir;
    },
    sanitizeDirective: function () {
      return tr;
    },
    setupGraphViewbox: function () {
      return id;
    },
    textUtils: function () {
      return tV;
    },
    updateSiteConfig: function () {
      return tu;
    },
    setAccDescription: function () {
      return ie;
    },
    parseGenericTypes: function () {
      return tW;
    },
    setLogLevel: function () {
      return L;
    },
    detectType: function () {
      return q;
    },
    lineBreakRegex: function () {
      return tB;
    },
    addDirective: function () {
      return tf;
    },
    setConfig: function () {
      return is;
    },
    assignWithDepth: function () {
      return D;
    },
    setSiteConfig: function () {
      return tc;
    },
    getSiteConfig: function () {
      return tg;
    },
    clearAccData: function () {
      return t9;
    },
    directiveVarRegex: function () {
      return Z;
    },
    getDiagram: function () {
      return ip;
    },
    themeRegistry: function () {
      return K;
    },
    logger: function () {
      return v;
    },
    UnknownDiagramError: function () {
      return E;
    },
    getDiagramLoader: function () {
      return z;
    },
    saveInitConfig: function () {
      return td;
    },
    setName: function () {
      return B;
    },
    getAccTitle: function () {
      return ii;
    },
    setDiagramTitle: function () {
      return io;
    },
    getConfig: function () {
      return tp;
    },
    setupViewbox: function () {
      return tJ;
    },
    evaluate: function () {
      return tz;
    },
    hasKatex: function () {
      return tj;
    },
    resetConfig: function () {
      return ty;
    },
    calcMathMLDims: function () {
      return tU;
    },
    getConfigAlias: function () {
      return il;
    },
    sanitizeText: function () {
      return tZ;
    },
    copyProperties: function () {
      return S;
    },
    sanitizeTextCfg: function () {
      return ic;
    },
    defaultConfig: function () {
      return ta;
    },
    renderKatex: function () {
      return tY;
    },
    configureSvgSize: function () {
      return tQ;
    },
    setConfigMain: function () {
      return tC;
    },
    configDefaults: function () {
      return te;
    },
    getDefaultTheme: function () {
      return G;
    }
  });
}