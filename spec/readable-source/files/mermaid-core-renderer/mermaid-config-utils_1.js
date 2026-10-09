// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bf' to 'diagramTypeRegistry'
// - Renamed export 'Cq' to 'registerDiagram'
// - Renamed export 'Ee' to 'getStyles'
// - Renamed export 'Fy' to 'frozenConfig'
// - Renamed export 'GN' to 'setAccTitle'
// - Renamed export 'Gr' to 'getUrl'
// - Renamed export 'KO' to 'registerLazyDiagrams'
// - Renamed export 'Kr' to 'getDiagramTitle'
// - Renamed export 'LJ' to 'commonDb'
// - Renamed export 'M6' to 'frontmatterRegex'
// - Renamed export 'Mx' to 'getAccDescription'
// - Renamed export 'NM' to 'sanitizeDirective'
// - Renamed export 'Rw' to 'setupGraphViewbox'
// - Renamed export 'SY' to 'textUtilities'
// - Renamed export 'Tb' to 'updateSiteConfig'
// - Renamed export 'U$' to 'setAccDescription'
// - Renamed export 'UO' to 'parseGenericTypes'
// - Renamed export 'Vg' to 'detectType'
// - Renamed export 'Vw' to 'lineBreakRegex'
// - Renamed export 'XV' to 'addDirective'
// - Renamed export 'Y4' to 'setConfig'
// - Renamed export 'Yc' to 'assignWithDepth'
// - Renamed export 'Yn' to 'setSiteConfig'
// - Renamed export 'ZD' to 'getSiteConfig'
// - Renamed export 'ZH' to 'clearCommonDb'
// - Renamed export 'Zn' to 'directiveRegex'
// - Renamed export '_7' to 'getDiagram'
// - Renamed export '_j' to 'themeDefinitions'
// - Renamed export 'cj' to 'UnknownDiagramError'
// - Renamed export 'cq' to 'getDiagramLoader'
// - Renamed export 'dY' to 'saveInitConfig'
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
// - Renamed export 'qO' to 'getUserConfig'
// - Renamed export 'uX' to 'sanitizeTextAlt'
// - Renamed export 'u_' to 'frozenDefaultConfig'
// - Renamed export 'ur' to 'renderKatexSanitized'
// - Renamed export 'v2' to 'configureSvgSize'
// - Renamed export 'v6' to 'setConfigAlias'
// - Renamed export 'vZ' to 'defaultConfig'
// - Renamed export 'xN' to 'getDefaultThemeVars'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 401926
         */
module.exports = function (module, exports, require) {
  let i;
  var a;
  var o;
  var l;
  var n;
  var s;
  var h;
  var c;
  var d;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var colorChannelAdjuster_1 = require("color-channel-adjuster_1") /*id: 492471*/;
  var colorInvertBlendUtil = require("color-invert-blend-util") /*id: 442482*/;
  var colorLightnessHelper = require("color-lightness-helper") /*id: 366687*/;
  var colorLightnessAdjuster = require("color-lightness-adjuster") /*id: 695366*/;
  var colorDarknessUtil = require("color-darkness-util") /*id: 99164*/;
  var colorAlphaSetter = require("color-alpha-setter") /*id: 882094*/;
  var dompurifyCore = require("dompurify-core") /*id: 345925*/;
  var v = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
  var k = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
  var w = /\s*%%.*\n/gm;
  a = class extends Error {
    constructor(t) {
      super(t);
      this.name = "UnknownDiagramError";
    }
  };
  loggerLevelUtils.setFunctionName(a, "UnknownDiagramError");
  var S = a;
  var T = {};
  var B = loggerLevelUtils.setFunctionName(function (t, e) {
    t = t.replace(v, "").replace(k, "").replace(w, "\n");
    for (let [r, {
      detector: i
    }] of Object.entries(T)) {
      if (i(t, e)) {
        return r;
      }
    }
    throw new S(`No diagram type detected matching given configuration for text: ${t}`);
  }, "detectType");
  var M = loggerLevelUtils.setFunctionName(function () {
    var t = arguments.length;
    var e = Array(t);
    var r = 0;
    for (; r < t; r++) {
      e[r] = arguments[r];
    }
    for (let {
      id: t,
      detector: r,
      loader: i
    } of e) {
      W(t, r, i);
    }
  }, "registerLazyLoadedDiagrams");
  var W = loggerLevelUtils.setFunctionName((t, e, r) => {
    if (T[t]) {
      loggerLevelUtils.logger.warn(`Detector with key ${t} already exists. Overwriting.`);
    }
    T[t] = {
      detector: e,
      loader: r
    };
    loggerLevelUtils.logger.debug(`Detector with key ${t} added${r ? " with loader" : ""}`);
  }, "addDetector");
  var L = loggerLevelUtils.setFunctionName(t => T[t].loader, "getDiagramLoader");
  var F = loggerLevelUtils.setFunctionName(function (t, e, {
    depth: r = 2,
    clobber: i = false
  } = {}) {
    let a = {
      depth: r,
      clobber: i
    };
    if (Array.isArray(e) && !Array.isArray(t)) {
      e.forEach(e => F(t, e, a));
      return t;
    } else if (Array.isArray(e) && Array.isArray(t)) {
      e.forEach(e => {
        if (!t.includes(e)) {
          t.push(e);
        }
      });
      return t;
    } else if (t === undefined || r <= 0) {
      if (t != null && typeof t == "object" && typeof e == "object") {
        return Object.assign(t, e);
      } else {
        return e;
      }
    } else {
      if (e !== undefined && typeof t == "object" && typeof e == "object") {
        Object.keys(e).forEach(a => {
          if (typeof e[a] == "object" && (t[a] === undefined || typeof t[a] == "object")) {
            if (t[a] === undefined) {
              t[a] = Array.isArray(e[a]) ? [] : {};
            }
            t[a] = F(t[a], e[a], {
              depth: r - 1,
              clobber: i
            });
          } else if (i || typeof t[a] != "object" && typeof e[a] != "object") {
            t[a] = e[a];
          }
        });
      }
      return t;
    }
  }, "assignWithDepth");
  var _ = F;
  var A = "#ffffff";
  var $ = "#f2f2f2";
  var E = loggerLevelUtils.setFunctionName((t, e) => e ? colorChannelAdjuster_1.colorChannelAdjust(t, {
    s: -40,
    l: 10
  }) : colorChannelAdjuster_1.colorChannelAdjust(t, {
    s: -40,
    l: -10
  }), "mkBorder");
  o = class {
    updateColors() {
      this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333");
      this.secondaryColor = this.secondaryColor || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: -120
      });
      this.tertiaryColor = this.tertiaryColor || colorChannelAdjuster_1.colorChannelAdjust(this.primaryColor, {
        h: 180,
        l: 5
      });
      this.primaryBorderColor = this.primaryBorderColor || E(this.primaryColor, this.darkMode);
      this.secondaryBorderColor = this.secondaryBorderColor || E(this.secondaryColor, this.darkMode);
      this.tertiaryBorderColor = this.tertiaryBorderColor || E(this.tertiaryColor, this.darkMode);
      this.noteBorderColor = this.noteBorderColor || E(this.noteBkgColor, this.darkMode);
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
      let B = this.darkMode ? -4 : -1;
      for (let t = 0; t < 5; t++) {
        this["surface" + t] = this["surface" + t] || colorChannelAdjuster_1.colorChannelAdjust(this.mainBkg, {
          h: 180,
          s: -15,
          l: B * (5 + t * 3)
        });
        this["surfacePeer" + t] = this["surfacePeer" + t] || colorChannelAdjuster_1.colorChannelAdjust(this.mainBkg, {
          h: 180,
          s: -15,
          l: B * (8 + t * 3)
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
      this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || A;
      this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $;
    }
    calculate(t) {
      if (typeof t != "object") {
        this.updateColors();
        return;
      }
      let e = Object.keys(t);
      e.forEach(e => {
        this[e] = t[e];
      });
      this.updateColors();
      e.forEach(e => {
        this[e] = t[e];
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
  };
  loggerLevelUtils.setFunctionName(o, "Theme");
  var Z = o;
  var O = loggerLevelUtils.setFunctionName(t => {
    let e = new Z();
    e.calculate(t);
    return e;
  }, "getThemeVariables");
  l = class {
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
      let e = Object.keys(t);
      e.forEach(e => {
        this[e] = t[e];
      });
      this.updateColors();
      e.forEach(e => {
        this[e] = t[e];
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
      this.secondaryBorderColor = E(this.secondaryColor, this.darkMode);
      this.tertiaryBorderColor = E(this.tertiaryColor, this.darkMode);
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
  };
  loggerLevelUtils.setFunctionName(l, "Theme");
  var D = l;
  var I = loggerLevelUtils.setFunctionName(t => {
    let e = new D();
    e.calculate(t);
    return e;
  }, "getThemeVariables");
  n = class {
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
      this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || A;
      this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $;
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
      let e = Object.keys(t);
      e.forEach(e => {
        this[e] = t[e];
      });
      this.updateColors();
      e.forEach(e => {
        this[e] = t[e];
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
      this.primaryBorderColor = E(this.primaryColor, this.darkMode);
      this.secondaryBorderColor = E(this.secondaryColor, this.darkMode);
      this.tertiaryBorderColor = E(this.tertiaryColor, this.darkMode);
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
  };
  loggerLevelUtils.setFunctionName(n, "Theme");
  var q = n;
  var R = loggerLevelUtils.setFunctionName(t => {
    let e = new q();
    e.calculate(t);
    return e;
  }, "getThemeVariables");
  s = class {
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
      this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || A;
      this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $;
    }
    calculate(t) {
      if (typeof t != "object") {
        this.updateColors();
        return;
      }
      let e = Object.keys(t);
      e.forEach(e => {
        this[e] = t[e];
      });
      this.updateColors();
      e.forEach(e => {
        this[e] = t[e];
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
      this.primaryBorderColor = E(this.primaryColor, this.darkMode);
      this.secondaryBorderColor = E(this.secondaryColor, this.darkMode);
      this.tertiaryBorderColor = E(this.tertiaryColor, this.darkMode);
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
  };
  loggerLevelUtils.setFunctionName(s, "Theme");
  var N = s;
  var P = loggerLevelUtils.setFunctionName(t => {
    let e = new N();
    e.calculate(t);
    return e;
  }, "getThemeVariables");
  h = class {
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
      this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || A;
      this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $;
    }
    calculate(t) {
      if (typeof t != "object") {
        this.updateColors();
        return;
      }
      let e = Object.keys(t);
      e.forEach(e => {
        this[e] = t[e];
      });
      this.updateColors();
      e.forEach(e => {
        this[e] = t[e];
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
      this.primaryBorderColor = E(this.primaryColor, this.darkMode);
      this.secondaryBorderColor = E(this.secondaryColor, this.darkMode);
      this.tertiaryBorderColor = E(this.tertiaryColor, this.darkMode);
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
  };
  loggerLevelUtils.setFunctionName(h, "Theme");
  var z = h;
  var j = {
    base: {
      getThemeVariables: O
    },
    dark: {
      getThemeVariables: I
    },
    default: {
      getThemeVariables: R
    },
    forest: {
      getThemeVariables: P
    },
    neutral: {
      getThemeVariables: loggerLevelUtils.setFunctionName(t => {
        let e = new z();
        e.calculate(t);
        return e;
      }, "getThemeVariables")
    }
  };
  var H = {
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
      maxNodeWidth: 200,
      layoutAlgorithm: "cose-bilkent"
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
  var U = {
    ...H,
    deterministicIDSeed: undefined,
    elk: {
      mergeEdges: false,
      nodePlacementStrategy: "BRANDES_KOEPF",
      forceNodeModelOrder: false,
      considerModelOrder: "NODES_AND_EDGES"
    },
    themeCSS: undefined,
    themeVariables: j.default.getThemeVariables(),
    sequence: {
      ...H.sequence,
      messageFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.messageFontFamily,
          fontSize: this.messageFontSize,
          fontWeight: this.messageFontWeight
        };
      }, "messageFont"),
      noteFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.noteFontFamily,
          fontSize: this.noteFontSize,
          fontWeight: this.noteFontWeight
        };
      }, "noteFont"),
      actorFont: loggerLevelUtils.setFunctionName(function () {
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
      ...H.gantt,
      tickInterval: undefined,
      useWidth: undefined
    },
    c4: {
      ...H.c4,
      useWidth: undefined,
      personFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.personFontFamily,
          fontSize: this.personFontSize,
          fontWeight: this.personFontWeight
        };
      }, "personFont"),
      flowchart: {
        ...H.flowchart,
        inheritDir: false
      },
      external_personFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.external_personFontFamily,
          fontSize: this.external_personFontSize,
          fontWeight: this.external_personFontWeight
        };
      }, "external_personFont"),
      systemFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.systemFontFamily,
          fontSize: this.systemFontSize,
          fontWeight: this.systemFontWeight
        };
      }, "systemFont"),
      external_systemFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.external_systemFontFamily,
          fontSize: this.external_systemFontSize,
          fontWeight: this.external_systemFontWeight
        };
      }, "external_systemFont"),
      system_dbFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.system_dbFontFamily,
          fontSize: this.system_dbFontSize,
          fontWeight: this.system_dbFontWeight
        };
      }, "system_dbFont"),
      external_system_dbFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.external_system_dbFontFamily,
          fontSize: this.external_system_dbFontSize,
          fontWeight: this.external_system_dbFontWeight
        };
      }, "external_system_dbFont"),
      system_queueFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.system_queueFontFamily,
          fontSize: this.system_queueFontSize,
          fontWeight: this.system_queueFontWeight
        };
      }, "system_queueFont"),
      external_system_queueFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.external_system_queueFontFamily,
          fontSize: this.external_system_queueFontSize,
          fontWeight: this.external_system_queueFontWeight
        };
      }, "external_system_queueFont"),
      containerFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.containerFontFamily,
          fontSize: this.containerFontSize,
          fontWeight: this.containerFontWeight
        };
      }, "containerFont"),
      external_containerFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.external_containerFontFamily,
          fontSize: this.external_containerFontSize,
          fontWeight: this.external_containerFontWeight
        };
      }, "external_containerFont"),
      container_dbFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.container_dbFontFamily,
          fontSize: this.container_dbFontSize,
          fontWeight: this.container_dbFontWeight
        };
      }, "container_dbFont"),
      external_container_dbFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.external_container_dbFontFamily,
          fontSize: this.external_container_dbFontSize,
          fontWeight: this.external_container_dbFontWeight
        };
      }, "external_container_dbFont"),
      container_queueFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.container_queueFontFamily,
          fontSize: this.container_queueFontSize,
          fontWeight: this.container_queueFontWeight
        };
      }, "container_queueFont"),
      external_container_queueFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.external_container_queueFontFamily,
          fontSize: this.external_container_queueFontSize,
          fontWeight: this.external_container_queueFontWeight
        };
      }, "external_container_queueFont"),
      componentFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.componentFontFamily,
          fontSize: this.componentFontSize,
          fontWeight: this.componentFontWeight
        };
      }, "componentFont"),
      external_componentFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.external_componentFontFamily,
          fontSize: this.external_componentFontSize,
          fontWeight: this.external_componentFontWeight
        };
      }, "external_componentFont"),
      component_dbFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.component_dbFontFamily,
          fontSize: this.component_dbFontSize,
          fontWeight: this.component_dbFontWeight
        };
      }, "component_dbFont"),
      external_component_dbFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.external_component_dbFontFamily,
          fontSize: this.external_component_dbFontSize,
          fontWeight: this.external_component_dbFontWeight
        };
      }, "external_component_dbFont"),
      component_queueFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.component_queueFontFamily,
          fontSize: this.component_queueFontSize,
          fontWeight: this.component_queueFontWeight
        };
      }, "component_queueFont"),
      external_component_queueFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.external_component_queueFontFamily,
          fontSize: this.external_component_queueFontSize,
          fontWeight: this.external_component_queueFontWeight
        };
      }, "external_component_queueFont"),
      boundaryFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.boundaryFontFamily,
          fontSize: this.boundaryFontSize,
          fontWeight: this.boundaryFontWeight
        };
      }, "boundaryFont"),
      messageFont: loggerLevelUtils.setFunctionName(function () {
        return {
          fontFamily: this.messageFontFamily,
          fontSize: this.messageFontSize,
          fontWeight: this.messageFontWeight
        };
      }, "messageFont")
    },
    pie: {
      ...H.pie,
      useWidth: 984
    },
    xyChart: {
      ...H.xyChart,
      useWidth: undefined
    },
    requirement: {
      ...H.requirement,
      useWidth: undefined
    },
    packet: {
      ...H.packet
    },
    radar: {
      ...H.radar
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
  var Y = loggerLevelUtils.setFunctionName(function (t, e = "") {
    return Object.keys(t).reduce((r, i) => Array.isArray(t[i]) ? r : typeof t[i] == "object" && t[i] !== null ? [...r, e + i, ...Y(t[i], "")] : [...r, e + i], []);
  }, "keyify");
  var G = new Set(Y(U, ""));
  var V = U;
  var X = loggerLevelUtils.setFunctionName(t => {
    loggerLevelUtils.logger.debug("sanitizeDirective called with", t);
    if (typeof t == "object" && t != null) {
      if (Array.isArray(t)) {
        t.forEach(t => X(t));
        return;
      }
      for (let e of Object.keys(t)) {
        loggerLevelUtils.logger.debug("Checking key", e);
        if (e.startsWith("__") || e.includes("proto") || e.includes("constr") || !G.has(e) || t[e] == null) {
          loggerLevelUtils.logger.debug("sanitize deleting key: ", e);
          delete t[e];
          continue;
        }
        if (typeof t[e] == "object") {
          loggerLevelUtils.logger.debug("sanitizing object", e);
          X(t[e]);
          continue;
        }
        for (let r of ["themeCSS", "fontFamily", "altFontFamily"]) {
          if (e.includes(r)) {
            loggerLevelUtils.logger.debug("sanitizing css option", e);
            t[e] = Q(t[e]);
          }
        }
      }
      if (t.themeVariables) {
        for (let e of Object.keys(t.themeVariables)) {
          let r = t.themeVariables[e];
          if ((r == null ? undefined : r.match) && !r.match(/^[\d "#%(),.;A-Za-z]+$/)) {
            t.themeVariables[e] = "";
          }
        }
      }
      loggerLevelUtils.logger.debug("After sanitization", t);
    }
  }, "sanitizeDirective");
  var Q = loggerLevelUtils.setFunctionName(t => {
    let e = 0;
    let r = 0;
    for (let i of t) {
      if (e < r) {
        return "{ /* ERROR: Unbalanced CSS */ }";
      }
      if (i === "{") {
        e++;
      } else if (i === "}") {
        r++;
      }
    }
    if (e !== r) {
      return "{ /* ERROR: Unbalanced CSS */ }";
    } else {
      return t;
    }
  }, "sanitizeCss");
  var J = Object.freeze(V);
  var K = _({}, J);
  var tt = [];
  var te = _({}, J);
  var tr = loggerLevelUtils.setFunctionName((t, e) => {
    let r = _({}, t);
    let i = {};
    for (let t of e) {
      th(t);
      i = _(i, t);
    }
    r = _(r, i);
    if (i.theme && i.theme in j) {
      let t = _({}, d);
      let e = _(t.themeVariables || {}, i.themeVariables);
      if (r.theme && r.theme in j) {
        r.themeVariables = j[r.theme].getThemeVariables(e);
      }
    }
    tf(te = r);
    return te;
  }, "updateCurrentConfig");
  var ti = loggerLevelUtils.setFunctionName(t => {
    K = _({}, J);
    K = _(K, t);
    if (t.theme && j[t.theme]) {
      K.themeVariables = j[t.theme].getThemeVariables(t.themeVariables);
    }
    tr(K, tt);
    return K;
  }, "setSiteConfig");
  var ta = loggerLevelUtils.setFunctionName(t => {
    d = _({}, t);
  }, "saveConfigFromInitialize");
  var to = loggerLevelUtils.setFunctionName(t => {
    tr(K = _(K, t), tt);
    return K;
  }, "updateSiteConfig");
  var tl = loggerLevelUtils.setFunctionName(() => _({}, K), "getSiteConfig");
  var tn = loggerLevelUtils.setFunctionName(t => {
    tf(t);
    _(te, t);
    return ts();
  }, "setConfig");
  var ts = loggerLevelUtils.setFunctionName(() => _({}, te), "getConfig");
  var th = loggerLevelUtils.setFunctionName(t => {
    if (t) {
      ["secure", ...(K.secure ?? [])].forEach(e => {
        if (Object.hasOwn(t, e)) {
          loggerLevelUtils.logger.debug(`Denied attempt to modify a secure key ${e}`, t[e]);
          delete t[e];
        }
      });
      Object.keys(t).forEach(e => {
        if (e.startsWith("__")) {
          delete t[e];
        }
      });
      Object.keys(t).forEach(e => {
        if (typeof t[e] == "string" && (t[e].includes("<") || t[e].includes(">") || t[e].includes("url(data:"))) {
          delete t[e];
        }
        if (typeof t[e] == "object") {
          th(t[e]);
        }
      });
    }
  }, "sanitize");
  var tc = loggerLevelUtils.setFunctionName(t => {
    X(t);
    if (!!t.fontFamily && !t.themeVariables?.fontFamily) {
      t.themeVariables = {
        ...t.themeVariables,
        fontFamily: t.fontFamily
      };
    }
    tt.push(t);
    tr(K, tt);
  }, "addDirective");
  var td = loggerLevelUtils.setFunctionName(function (t = K) {
    tr(t, tt = []);
  }, "reset");
  var tu = {
    LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
  };
  var tp = {};
  var tg = loggerLevelUtils.setFunctionName(t => {
    if (!tp[t]) {
      loggerLevelUtils.logger.warn(tu[t]);
      tp[t] = true;
    }
  }, "issueWarning");
  var tf = loggerLevelUtils.setFunctionName(t => {
    if (t && (t.lazyLoadedDiagrams || t.loadExternalDiagramsAtStartup)) {
      tg("LAZY_LOAD_DEPRECATED");
    }
  }, "checkConfig");
  var tm = loggerLevelUtils.setFunctionName(() => {
    let t = {};
    if (d) {
      t = _(t, d);
    }
    for (let e of tt) {
      t = _(t, e);
    }
    return t;
  }, "getUserDefinedConfig");
  var ty = /<br\s*\/?>/gi;
  var tx = loggerLevelUtils.setFunctionName(t => t ? tW(t).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows");
  i = false;
  var tb = () => {
    if (!i) {
      tC();
      i = true;
    }
  };
  function tC() {
    let t = "data-temp-href-target";
    dompurifyCore.DOMPurify.addHook("beforeSanitizeAttributes", e => {
      if (e.tagName === "A" && e.hasAttribute("target")) {
        e.setAttribute(t, e.getAttribute("target") ?? "");
      }
    });
    dompurifyCore.DOMPurify.addHook("afterSanitizeAttributes", e => {
      if (e.tagName === "A" && e.hasAttribute(t)) {
        e.setAttribute("target", e.getAttribute(t) ?? "");
        e.removeAttribute(t);
        if (e.getAttribute("target") === "_blank") {
          e.setAttribute("rel", "noopener");
        }
      }
    });
  }
  loggerLevelUtils.setFunctionName(tC, "setupDompurifyHooks");
  var tv = loggerLevelUtils.setFunctionName(t => {
    tb();
    return dompurifyCore.DOMPurify.sanitize(t);
  }, "removeScript");
  var tk = loggerLevelUtils.setFunctionName((t, e) => {
    if (e.flowchart?.htmlLabels !== false) {
      let r = e.securityLevel;
      if (r === "antiscript" || r === "strict") {
        t = tv(t);
      } else if (r !== "loose") {
        t = tM(t = (t = (t = tW(t)).replace(/</g, "&lt;").replace(/>/g, "&gt;")).replace(/=/g, "&equals;"));
      }
    }
    return t;
  }, "sanitizeMore");
  var tw = loggerLevelUtils.setFunctionName((t, e) => t ? t = e.dompurifyConfig ? dompurifyCore.DOMPurify.sanitize(tk(t, e), e.dompurifyConfig).toString() : dompurifyCore.DOMPurify.sanitize(tk(t, e), {
    FORBID_TAGS: ["style"]
  }).toString() : t, "sanitizeText");
  var tS = loggerLevelUtils.setFunctionName((t, e) => typeof t == "string" ? tw(t, e) : t.flat().map(t => tw(t, e)), "sanitizeTextOrArray");
  var tT = loggerLevelUtils.setFunctionName(t => ty.test(t), "hasBreaks");
  var tB = loggerLevelUtils.setFunctionName(t => t.split(ty), "splitBreaks");
  var tM = loggerLevelUtils.setFunctionName(t => t.replace(/#br#/g, "<br/>"), "placeholderToBreak");
  var tW = loggerLevelUtils.setFunctionName(t => t.replace(ty, "#br#"), "breakToPlaceholder");
  var tL = loggerLevelUtils.setFunctionName(t => {
    let e = "";
    if (t) {
      e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
      e = CSS.escape(e);
    }
    return e;
  }, "getUrl");
  var tF = loggerLevelUtils.setFunctionName(t => t !== false && !["false", "null", "0"].includes(String(t).trim().toLowerCase()), "evaluate");
  var t_ = loggerLevelUtils.setFunctionName(function () {
    var t = arguments.length;
    var e = Array(t);
    var r = 0;
    for (; r < t; r++) {
      e[r] = arguments[r];
    }
    return Math.max(...e.filter(t => !isNaN(t)));
  }, "getMax");
  var tA = loggerLevelUtils.setFunctionName(function () {
    var t = arguments.length;
    var e = Array(t);
    var r = 0;
    for (; r < t; r++) {
      e[r] = arguments[r];
    }
    return Math.min(...e.filter(t => !isNaN(t)));
  }, "getMin");
  var t$ = loggerLevelUtils.setFunctionName(function (t) {
    let e = t.split(/(,)/);
    let r = [];
    for (let t = 0; t < e.length; t++) {
      let i = e[t];
      if (i === "," && t > 0 && t + 1 < e.length) {
        let a = e[t - 1];
        let o = e[t + 1];
        if (tZ(a, o)) {
          i = a + "," + o;
          t++;
          r.pop();
        }
      }
      r.push(tO(i));
    }
    return r.join("");
  }, "parseGenericTypes");
  var tE = loggerLevelUtils.setFunctionName((t, e) => Math.max(0, t.split(e).length - 1), "countOccurrence");
  var tZ = loggerLevelUtils.setFunctionName((t, e) => {
    let r = tE(t, "~");
    let i = tE(e, "~");
    return r === 1 && i === 1;
  }, "shouldCombineSets");
  var tO = loggerLevelUtils.setFunctionName(t => {
    let e = tE(t, "~");
    let r = false;
    if (e <= 1) {
      return t;
    }
    if (e % 2 != 0 && t.startsWith("~")) {
      t = t.substring(1);
      r = true;
    }
    let i = [...t];
    let a = i.indexOf("~");
    let o = i.lastIndexOf("~");
    while (a !== -1 && o !== -1 && a !== o) {
      i[a] = "<";
      i[o] = ">";
      a = i.indexOf("~");
      o = i.lastIndexOf("~");
    }
    if (r) {
      i.unshift("~");
    }
    return i.join("");
  }, "processSet");
  var tD = loggerLevelUtils.setFunctionName(() => window.MathMLElement !== undefined, "isMathMLSupported");
  var tI = /\$\$(.*)\$\$/g;
  var tq = loggerLevelUtils.setFunctionName(t => {
    return (t.match(tI)?.length ?? 0) > 0;
  }, "hasKatex");
  var tR = loggerLevelUtils.setFunctionName(async (t, e) => {
    let r = document.createElement("div");
    r.innerHTML = xssContentSanitizer.sanitizeHtml(await tP(t, e), null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFbDF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*t5-%R*aWJ-TjB$$lZLW$Zk$mNFeE5hM%-xWWxkd2$sbFlTbT$r$0%wOQ"
    });
    r.id = "katex-temp";
    r.style.visibility = "hidden";
    r.style.position = "absolute";
    r.style.top = "0";
    let i = document.querySelector("body");
    if (i != null) {
      i.insertAdjacentElement("beforeend", r);
    }
    let a = {
      width: r.clientWidth,
      height: r.clientHeight
    };
    r.remove();
    return a;
  }, "calculateMathMLDimensions");
  var tN = loggerLevelUtils.setFunctionName(async (t, e) => {
    if (!tq(t)) {
      return t;
    }
    if (!tD() && !e.legacyMathML && !e.forceLegacyMathML) {
      return t.replace(tI, "MathML is unsupported in this environment.");
    }
    {
      let {
        default: i
      } = await require.e("katex-core-library") /*id: 21553*/.then(require.bind(require, "katex-core-renderer") /*id: 811377*/);
      let a = e.forceLegacyMathML || !tD() && e.legacyMathML ? "htmlAndMathml" : "mathml";
      return t.split(ty).map(t => tq(t) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${t}</div>` : `<div>${t}</div>`).join("").replace(tI, (t, e) => i.renderToString(e, {
        throwOnError: true,
        displayMode: true,
        output: a
      }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
    }
  }, "renderKatexUnsanitized");
  var tP = loggerLevelUtils.setFunctionName(async (t, e) => tw(await tN(t, e), e), "renderKatexSanitized");
  var tz = {
    getRows: tx,
    sanitizeText: tw,
    sanitizeTextOrArray: tS,
    hasBreaks: tT,
    splitBreaks: tB,
    lineBreakRegex: ty,
    removeScript: tv,
    getUrl: tL,
    evaluate: tF,
    getMax: t_,
    getMin: tA
  };
  var tj = loggerLevelUtils.setFunctionName(function (t, e) {
    for (let r of e) {
      t.attr(r[0], r[1]);
    }
  }, "d3Attrs");
  var tH = loggerLevelUtils.setFunctionName(function (t, e, r) {
    let i = new Map();
    if (r) {
      i.set("width", "100%");
      i.set("style", `max-width: ${e}px;`);
    } else {
      i.set("height", t);
      i.set("width", e);
    }
    return i;
  }, "calculateSvgSizeAttrs");
  var tU = loggerLevelUtils.setFunctionName(function (t, e, r, i) {
    tj(t, tH(e, r, i));
  }, "configureSvgSize");
  var tY = loggerLevelUtils.setFunctionName(function (t, e, r, i) {
    let a = e.node().getBBox();
    let o = a.width;
    let l = a.height;
    loggerLevelUtils.logger.info(`SVG bounds: ${o}x${l}`, a);
    let n = 0;
    let s = 0;
    loggerLevelUtils.logger.info(`Graph bounds: ${n}x${s}`, t);
    n = o + r * 2;
    s = l + r * 2;
    loggerLevelUtils.logger.info(`Calculated bounds: ${n}x${s}`);
    tU(e, s, n, i);
    let h = `${a.x - r} ${a.y - r} ${a.width + r * 2} ${a.height + r * 2}`;
    e.attr("viewBox", h);
  }, "setupGraphViewbox");
  var tG = {};
  var tV = loggerLevelUtils.setFunctionName((t, e, r) => {
    let i = "";
    if (t in tG && tG[t]) {
      i = tG[t](r);
    } else {
      loggerLevelUtils.logger.warn(`No theme found for ${t}`);
    }
    return ` & {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
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
    fill: ${r.errorBkgColor};
  }
  & .error-text {
    fill: ${r.errorTextColor};
    stroke: ${r.errorTextColor};
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
    fill: ${r.lineColor};
    stroke: ${r.lineColor};
  }
  & .marker.cross {
    stroke: ${r.lineColor};
  }

  & svg {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
  }
   & p {
    margin: 0
   }

  ${i}

  ${e}
`;
  }, "getStyles");
  var tX = loggerLevelUtils.setFunctionName((t, e) => {
    if (e !== undefined) {
      tG[t] = e;
    }
  }, "addStylesForDiagram");
  var tQ = tV;
  var tJ = {};
  loggerLevelUtils.defineProperties(tJ, {
    clear: () => t5,
    getAccDescription: () => t8,
    getAccTitle: () => t6,
    getDiagramTitle: () => t7,
    setAccDescription: () => t4,
    setAccTitle: () => t3,
    setDiagramTitle: () => t9
  });
  var tK = "";
  var t0 = "";
  var t1 = "";
  var t2 = loggerLevelUtils.setFunctionName(t => tw(t, ts()), "sanitizeText");
  var t5 = loggerLevelUtils.setFunctionName(() => {
    tK = "";
    t1 = "";
    t0 = "";
  }, "clear");
  var t3 = loggerLevelUtils.setFunctionName(t => {
    tK = t2(t).replace(/^\s+/g, "");
  }, "setAccTitle");
  var t6 = loggerLevelUtils.setFunctionName(() => tK, "getAccTitle");
  var t4 = loggerLevelUtils.setFunctionName(t => {
    t1 = t2(t).replace(/\n\s+/g, "\n");
  }, "setAccDescription");
  var t8 = loggerLevelUtils.setFunctionName(() => t1, "getAccDescription");
  var t9 = loggerLevelUtils.setFunctionName(t => {
    t0 = t2(t);
  }, "setDiagramTitle");
  var t7 = loggerLevelUtils.setFunctionName(() => t0, "getDiagramTitle");
  var et = loggerLevelUtils.logger;
  var ee = loggerLevelUtils.setLogLevel;
  var er = ts;
  var ei = tn;
  var ea = J;
  var eo = loggerLevelUtils.setFunctionName(t => tw(t, er()), "sanitizeText");
  var el = tY;
  var en = loggerLevelUtils.setFunctionName(() => tJ, "getCommonDb");
  var es = {};
  var eh = loggerLevelUtils.setFunctionName((t, e, r) => {
    var i;
    if (es[t]) {
      et.warn(`Diagram with id ${t} already registered. Overwriting.`);
    }
    es[t] = e;
    if (r) {
      W(t, r);
    }
    tX(t, e.styles);
    if ((i = e.injectUtils) !== null && i !== undefined) {
      i.call(e, et, ee, er, eo, el, en(), () => {});
    }
  }, "registerDiagram");
  var ec = loggerLevelUtils.setFunctionName(t => {
    if (t in es) {
      return es[t];
    }
    throw new ed(t);
  }, "getDiagram");
  c = class extends Error {
    constructor(t) {
      super(`Diagram ${t} not found.`);
    }
  };
  loggerLevelUtils.setFunctionName(c, "DiagramNotFoundError");
  var ed = c;
  require.d(exports, {
    diagramTypeRegistry: function () {
      return T;
    },
    registerDiagram: function () {
      return eh;
    },
    getStyles: function () {
      return tQ;
    },
    frozenConfig: function () {
      return ea;
    },
    setAccTitle: function () {
      return t3;
    },
    getUrl: function () {
      return tL;
    },
    registerLazyDiagrams: function () {
      return M;
    },
    getDiagramTitle: function () {
      return t7;
    },
    commonDb: function () {
      return tJ;
    },
    frontmatterRegex: function () {
      return v;
    },
    getAccDescription: function () {
      return t8;
    },
    sanitizeDirective: function () {
      return X;
    },
    setupGraphViewbox: function () {
      return el;
    },
    textUtilities: function () {
      return tz;
    },
    updateSiteConfig: function () {
      return to;
    },
    setAccDescription: function () {
      return t4;
    },
    parseGenericTypes: function () {
      return t$;
    },
    detectType: function () {
      return B;
    },
    lineBreakRegex: function () {
      return ty;
    },
    addDirective: function () {
      return tc;
    },
    setConfig: function () {
      return ei;
    },
    assignWithDepth: function () {
      return _;
    },
    setSiteConfig: function () {
      return ti;
    },
    getSiteConfig: function () {
      return tl;
    },
    clearCommonDb: function () {
      return t5;
    },
    directiveRegex: function () {
      return k;
    },
    getDiagram: function () {
      return ec;
    },
    themeDefinitions: function () {
      return j;
    },
    UnknownDiagramError: function () {
      return S;
    },
    getDiagramLoader: function () {
      return L;
    },
    saveInitConfig: function () {
      return ta;
    },
    getAccTitle: function () {
      return t6;
    },
    setDiagramTitle: function () {
      return t9;
    },
    getConfig: function () {
      return ts;
    },
    setupViewbox: function () {
      return tY;
    },
    evaluate: function () {
      return tF;
    },
    hasKatex: function () {
      return tq;
    },
    resetConfig: function () {
      return td;
    },
    calcMathMLDims: function () {
      return tR;
    },
    getConfigAlias: function () {
      return er;
    },
    sanitizeText: function () {
      return tw;
    },
    getUserConfig: function () {
      return tm;
    },
    sanitizeTextAlt: function () {
      return eo;
    },
    frozenDefaultConfig: function () {
      return J;
    },
    renderKatexSanitized: function () {
      return tP;
    },
    configureSvgSize: function () {
      return tU;
    },
    setConfigAlias: function () {
      return tn;
    },
    defaultConfig: function () {
      return V;
    },
    getDefaultThemeVars: function () {
      return R;
    }
  });
}