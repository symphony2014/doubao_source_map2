// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$m' to 'zeroWidthSpace'
// - Renamed export 'Cq' to 'calcTextWidth'
// - Renamed export 'Ln' to 'getEdgeId'
// - Renamed export 'MX' to 'randomString'
// - Renamed export 'Ox' to 'generateId'
// - Renamed export 'R7' to 'handleUndefinedAttr'
// - Renamed export 'Rb' to 'cleanAndMerge'
// - Renamed export 'SH' to 'decodeEntities'
// - Renamed export 'VG' to 'parseFontSize'
// - Renamed export 'Vy' to 'encodeEntities'
// - Renamed export 'X4' to 'wrapLabel'
// - Renamed export 'XD' to 'calcTextHeight'
// - Renamed export 'bZ' to 'isDetailedError'
// - Renamed export 'be' to 'getStylesFromArray'
// - Renamed export 'le' to 'interpolateToCurve'
// - Renamed export 'tf' to 'removeDirectives'
// - Renamed export 'w8' to 'mermaidUtils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 583673
         */
module.exports = function (module, exports, require) {
  var i;
  var a;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var urlSanitizer = require("url-sanitizer") /*id: 568747*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var u = "​";
  var p = {
    curveBasis: axisAndZoomUtilities.$0Z,
    curveBasisClosed: axisAndZoomUtilities.Dts,
    curveBasisOpen: axisAndZoomUtilities.WQY,
    curveBumpX: axisAndZoomUtilities.qpX,
    curveBumpY: axisAndZoomUtilities.u93,
    curveBundle: axisAndZoomUtilities.tFB,
    curveCardinalClosed: axisAndZoomUtilities.OvA,
    curveCardinalOpen: axisAndZoomUtilities.dCK,
    curveCardinal: axisAndZoomUtilities.YY7,
    curveCatmullRomClosed: axisAndZoomUtilities.fGX,
    curveCatmullRomOpen: axisAndZoomUtilities.$m7,
    curveCatmullRom: axisAndZoomUtilities.zgE,
    curveLinear: axisAndZoomUtilities.c_6,
    curveLinearClosed: axisAndZoomUtilities.fxm,
    curveMonotoneX: axisAndZoomUtilities.FdL,
    curveMonotoneY: axisAndZoomUtilities.ak_,
    curveNatural: axisAndZoomUtilities.SxZ,
    curveStep: axisAndZoomUtilities.eA_,
    curveStepAfter: axisAndZoomUtilities.jsv,
    curveStepBefore: axisAndZoomUtilities.createTensionZero
  };
  var g = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
  var f = loggerLevelUtils.setFunctionName(function (t, e) {
    let r = m(t, /(?:init\b)|(?:initialize\b)/);
    let i = {};
    if (Array.isArray(r)) {
      let t = r.map(t => t.args);
      mermaidConfigUtils_1.sanitizeDirective(t);
      i = mermaidConfigUtils_1.assignWithDepth(i, [...t]);
    } else {
      i = r.args;
    }
    if (!i) {
      return;
    }
    let a = mermaidConfigUtils_1.detectType(t, e);
    let o = "config";
    if (i[o] !== undefined) {
      if (a === "flowchart-v2") {
        a = "flowchart";
      }
      i[a] = i[o];
      delete i[o];
    }
    return i;
  }, "detectInit");
  var m = loggerLevelUtils.setFunctionName(function (t, e = null) {
    try {
      let a;
      let o = RegExp(`[%]{2}(?![{]${g.source})(?=[}][%]{2}).*
`, "ig");
      t = t.trim().replace(o, "").replace(/'/gm, "\"");
      loggerLevelUtils.logger.debug(`Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${t}`);
      let s = [];
      while ((a = mermaidConfigUtils_1.directiveRegex.exec(t)) !== null) {
        var r;
        var i;
        if (a.index === mermaidConfigUtils_1.directiveRegex.lastIndex) {
          mermaidConfigUtils_1.directiveRegex.lastIndex++;
        }
        if (a && !e || e && ((r = a[1]) === null || r === undefined ? undefined : r.match(e)) || e && ((i = a[2]) === null || i === undefined ? undefined : i.match(e))) {
          let t = a[1] ? a[1] : a[2];
          let e = a[3] ? a[3].trim() : a[4] ? JSON.parse(a[4].trim()) : null;
          s.push({
            type: t,
            args: e
          });
        }
      }
      if (s.length === 0) {
        return {
          type: t,
          args: null
        };
      }
      if (s.length === 1) {
        return s[0];
      } else {
        return s;
      }
    } catch (r) {
      loggerLevelUtils.logger.error(`ERROR: ${r.message} - Unable to parse directive type: '${e}' based on the text: '${t}'`);
      return {
        type: undefined,
        args: null
      };
    }
  }, "detectDirective");
  var y = loggerLevelUtils.setFunctionName(function (t) {
    return t.replace(mermaidConfigUtils_1.directiveRegex, "");
  }, "removeDirectives");
  var x = loggerLevelUtils.setFunctionName(function (t, e) {
    for (let [r, i] of e.entries()) {
      if (i.match(t)) {
        return r;
      }
    }
    return -1;
  }, "isSubstringInArray");
  function b(t, e) {
    var r;
    if (t && (r = p[`curve${t.charAt(0).toUpperCase() + t.slice(1)}`]) !== null && r !== undefined) {
      return r;
    } else {
      return e;
    }
  }
  function C(t, e) {
    let r = t.trim();
    if (r) {
      if (e.securityLevel !== "loose") {
        return urlSanitizer.sanitizeUrl(r);
      } else {
        return r;
      }
    } else {
      return undefined;
    }
  }
  loggerLevelUtils.setFunctionName(b, "interpolateToCurve");
  loggerLevelUtils.setFunctionName(C, "formatUrl");
  var v = loggerLevelUtils.setFunctionName(function (t) {
    var e = arguments.length;
    var r = Array(e > 1 ? e - 1 : 0);
    var i = 1;
    for (; i < e; i++) {
      r[i - 1] = arguments[i];
    }
    let a = t.split(".");
    let o = a.length - 1;
    let l = a[o];
    let s = window;
    for (let e = 0; e < o; e++) {
      if (!(s = s[a[e]])) {
        loggerLevelUtils.logger.error(`Function name: ${t} not found in window`);
        return;
      }
    }
    s[l](...r);
  }, "runFunc");
  function k(t, e) {
    if (t && e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    } else {
      return 0;
    }
  }
  function w(t) {
    let e;
    let r = 0;
    t.forEach(t => {
      r += k(t, e);
      e = t;
    });
    return B(t, r / 2);
  }
  function S(t) {
    if (t.length === 1) {
      return t[0];
    } else {
      return w(t);
    }
  }
  loggerLevelUtils.setFunctionName(k, "distance");
  loggerLevelUtils.setFunctionName(w, "traverseEdge");
  loggerLevelUtils.setFunctionName(S, "calcLabelPosition");
  var T = loggerLevelUtils.setFunctionName(function (t, e = 2) {
    let r = Math.pow(10, e);
    return Math.round(t * r) / r;
  }, "roundNumber");
  var B = loggerLevelUtils.setFunctionName((t, e) => {
    let r;
    let i = e;
    for (let e of t) {
      if (r) {
        let t = k(e, r);
        if (t === 0) {
          return r;
        }
        if (t < i) {
          i -= t;
        } else {
          let a = i / t;
          if (a <= 0) {
            return r;
          }
          if (a >= 1) {
            return {
              x: e.x,
              y: e.y
            };
          }
          if (a > 0 && a < 1) {
            return {
              x: T((1 - a) * r.x + a * e.x, 5),
              y: T((1 - a) * r.y + a * e.y, 5)
            };
          }
        }
      }
      r = e;
    }
    throw Error("Could not find a suitable point for the given distance");
  }, "calculatePoint");
  var M = loggerLevelUtils.setFunctionName((t, e, r) => {
    loggerLevelUtils.logger.info(`our points ${JSON.stringify(e)}`);
    if (e[0] !== r) {
      e = e.reverse();
    }
    let i = B(e, 25);
    let a = t ? 10 : 5;
    let o = Math.atan2(e[0].y - i.y, e[0].x - i.x);
    let l = {
      x: 0,
      y: 0
    };
    l.x = Math.sin(o) * a + (e[0].x + i.x) / 2;
    l.y = -Math.cos(o) * a + (e[0].y + i.y) / 2;
    return l;
  }, "calcCardinalityPosition");
  function W(t, e, r) {
    let i = structuredClone(r);
    loggerLevelUtils.logger.info("our points", i);
    if (e !== "start_left" && e !== "start_right") {
      i.reverse();
    }
    let a = B(i, 25 + t);
    let o = 10 + t * 0.5;
    let l = Math.atan2(i[0].y - a.y, i[0].x - a.x);
    let s = {
      x: 0,
      y: 0
    };
    if (e === "start_left") {
      s.x = Math.sin(l + Math.PI) * o + (i[0].x + a.x) / 2;
      s.y = -Math.cos(l + Math.PI) * o + (i[0].y + a.y) / 2;
    } else if (e === "end_right") {
      s.x = Math.sin(l - Math.PI) * o + (i[0].x + a.x) / 2 - 5;
      s.y = -Math.cos(l - Math.PI) * o + (i[0].y + a.y) / 2 - 5;
    } else if (e === "end_left") {
      s.x = Math.sin(l) * o + (i[0].x + a.x) / 2 - 5;
      s.y = -Math.cos(l) * o + (i[0].y + a.y) / 2 - 5;
    } else {
      s.x = Math.sin(l) * o + (i[0].x + a.x) / 2;
      s.y = -Math.cos(l) * o + (i[0].y + a.y) / 2;
    }
    return s;
  }
  function L(t) {
    let e = "";
    let r = "";
    for (let i of t) {
      if (i !== undefined) {
        if (i.startsWith("color:") || i.startsWith("text-align:")) {
          r = r + i + ";";
        } else {
          e = e + i + ";";
        }
      }
    }
    return {
      style: e,
      labelStyle: r
    };
  }
  loggerLevelUtils.setFunctionName(W, "calcTerminalLabelPosition");
  loggerLevelUtils.setFunctionName(L, "getStylesFromArray");
  var F = 0;
  var _ = loggerLevelUtils.setFunctionName(() => {
    F++;
    return "id-" + Math.random().toString(36).substr(2, 12) + "-" + F;
  }, "generateId");
  function A(t) {
    let e = "";
    let r = "0123456789abcdef";
    let i = r.length;
    for (let a = 0; a < t; a++) {
      e += r.charAt(Math.floor(Math.random() * i));
    }
    return e;
  }
  loggerLevelUtils.setFunctionName(A, "makeRandomHex");
  var $ = loggerLevelUtils.setFunctionName(t => A(t.length), "random");
  var E = loggerLevelUtils.setFunctionName(function () {
    return {
      x: 0,
      y: 0,
      fill: undefined,
      anchor: "start",
      style: "#666",
      width: 100,
      height: 100,
      textMargin: 0,
      rx: 0,
      ry: 0,
      valign: undefined,
      text: ""
    };
  }, "getTextObj");
  var Z = loggerLevelUtils.setFunctionName(function (t, e) {
    let r = e.text.replace(mermaidConfigUtils_1.textUtilities.lineBreakRegex, " ");
    let [, i] = H(e.fontSize);
    let a = t.append("text");
    a.attr("x", e.x);
    a.attr("y", e.y);
    a.style("text-anchor", e.anchor);
    a.style("font-family", e.fontFamily);
    a.style("font-size", i);
    a.style("font-weight", e.fontWeight);
    a.attr("fill", e.fill);
    if (e.class !== undefined) {
      a.attr("class", e.class);
    }
    let o = a.append("tspan");
    o.attr("x", e.x + e.textMargin * 2);
    o.attr("fill", e.fill);
    o.text(r);
    return a;
  }, "drawSimpleText");
  var O = memoizeFunction.memoize((t, e, r) => {
    if (!t || (r = Object.assign({
      fontSize: 12,
      fontWeight: 400,
      fontFamily: "Arial",
      joinWith: "<br/>"
    }, r), mermaidConfigUtils_1.textUtilities.lineBreakRegex.test(t))) {
      return t;
    }
    let i = t.split(" ").filter(Boolean);
    let a = [];
    let o = "";
    i.forEach((t, l) => {
      let n = q(`${t} `, r);
      let s = q(o, r);
      if (n > e) {
        let {
          hyphenatedStrings: i,
          remainingWord: l
        } = D(t, e, "-", r);
        a.push(o, ...i);
        o = l;
      } else if (s + n >= e) {
        a.push(o);
        o = t;
      } else {
        o = [o, t].filter(Boolean).join(" ");
      }
      if (l + 1 === i.length) {
        a.push(o);
      }
    });
    return a.filter(t => t !== "").join(r.joinWith);
  }, (t, e, r) => `${t}${e}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`);
  var D = memoizeFunction.memoize(function (t, e, r = "-", i) {
    i = Object.assign({
      fontSize: 12,
      fontWeight: 400,
      fontFamily: "Arial",
      margin: 0
    }, i);
    let a = [...t];
    let o = [];
    let l = "";
    a.forEach((t, n) => {
      let s = `${l}${t}`;
      if (q(s, i) >= e) {
        let t = a.length === n + 1;
        let e = `${s}${r}`;
        o.push(t ? s : e);
        l = "";
      } else {
        l = s;
      }
    });
    return {
      hyphenatedStrings: o,
      remainingWord: l
    };
  }, function (t, e, r = "-", i) {
    return `${t}${e}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`;
  });
  function I(t, e) {
    return R(t, e).height;
  }
  function q(t, e) {
    return R(t, e).width;
  }
  loggerLevelUtils.setFunctionName(I, "calculateTextHeight");
  loggerLevelUtils.setFunctionName(q, "calculateTextWidth");
  var R = memoizeFunction.memoize((t, e) => {
    let {
      fontSize: r = 12,
      fontFamily: i = "Arial",
      fontWeight: a = 400
    } = e;
    if (!t) {
      return {
        width: 0,
        height: 0
      };
    }
    let [, o] = H(r);
    let n = t.split(mermaidConfigUtils_1.textUtilities.lineBreakRegex);
    let s = [];
    let c = axisAndZoomUtilities.select("body");
    if (!c.remove) {
      return {
        width: 0,
        height: 0,
        lineHeight: 0
      };
    }
    let d = c.append("svg");
    for (let t of ["sans-serif", i]) {
      let e = 0;
      let r = {
        width: 0,
        height: 0,
        lineHeight: 0
      };
      for (let i of n) {
        let l = E();
        l.text = i || u;
        let n = Z(d, l).style("font-size", o).style("font-weight", a).style("font-family", t);
        let s = (n._groups || n)[0][0].getBBox();
        if (s.width === 0 && s.height === 0) {
          throw Error("svg element not in render tree");
        }
        r.width = Math.round(Math.max(r.width, s.width));
        e = Math.round(s.height);
        r.height += e;
        r.lineHeight = Math.round(Math.max(r.lineHeight, e));
      }
      s.push(r);
    }
    d.remove();
    let p = isNaN(s[1].height) || isNaN(s[1].width) || isNaN(s[1].lineHeight) || s[0].height > s[1].height && s[0].width > s[1].width && s[0].lineHeight > s[1].lineHeight ? 0 : 1;
    return s[p];
  }, (t, e) => `${t}${e.fontSize}${e.fontWeight}${e.fontFamily}`);
  i = class {
    constructor(t = false, e) {
      this.count = 0;
      this.count = e ? e.length : 0;
      this.next = t ? () => this.count++ : () => Date.now();
    }
  };
  loggerLevelUtils.setFunctionName(i, "InitIDGenerator");
  var N = i;
  var P = loggerLevelUtils.setFunctionName(function (t) {
    a = a || document.createElement("div");
    t = escape(t).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";");
    a.innerHTML = xssContentSanitizer.sanitizeHtml(t, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFbDF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*t5-%R*aWJ-TjBWWHBP$TAwd1NscF$NRzkxWWxkd2$sbFlTbT$r$0%wOQ"
    });
    return unescape(a.textContent);
  }, "entityDecode");
  function z(t) {
    return "str" in t;
  }
  loggerLevelUtils.setFunctionName(z, "isDetailedError");
  var j = loggerLevelUtils.setFunctionName((t, e, r, i) => {
    var a;
    if (!i) {
      return;
    }
    let o = (a = t.node()) === null || a === undefined ? undefined : a.getBBox();
    if (o) {
      t.append("text").text(i).attr("text-anchor", "middle").attr("x", o.x + o.width / 2).attr("y", -r).attr("class", e);
    }
  }, "insertTitle");
  var H = loggerLevelUtils.setFunctionName(t => {
    if (typeof t == "number") {
      return [t, t + "px"];
    }
    let e = parseInt(t ?? "", 10);
    if (Number.isNaN(e)) {
      return [undefined, undefined];
    } else if (t === String(e)) {
      return [e, t + "px"];
    } else {
      return [e, t];
    }
  }, "parseFontSize");
  function U(t, e) {
    return throttledDeepCloneUtil.throttledDeepClone({}, t, e);
  }
  loggerLevelUtils.setFunctionName(U, "cleanAndMerge");
  var Y = {
    assignWithDepth: mermaidConfigUtils_1.assignWithDepth,
    wrapLabel: O,
    calculateTextHeight: I,
    calculateTextWidth: q,
    calculateTextDimensions: R,
    cleanAndMerge: U,
    detectInit: f,
    detectDirective: m,
    isSubstringInArray: x,
    interpolateToCurve: b,
    calcLabelPosition: S,
    calcCardinalityPosition: M,
    calcTerminalLabelPosition: W,
    formatUrl: C,
    getStylesFromArray: L,
    generateId: _,
    random: $,
    runFunc: v,
    entityDecode: P,
    insertTitle: j,
    isLabelCoordinateInPath: J,
    parseFontSize: H,
    InitIDGenerator: N
  };
  var G = loggerLevelUtils.setFunctionName(function (t) {
    let e = t;
    return (e = (e = e.replace(/style.*:\S*#.*;/g, function (t) {
      return t.substring(0, t.length - 1);
    })).replace(/classDef.*:\S*#.*;/g, function (t) {
      return t.substring(0, t.length - 1);
    })).replace(/#\w+;/g, function (t) {
      let e = t.substring(1, t.length - 1);
      if (/^\+?\d+$/.test(e)) {
        return "ﬂ°°" + e + "¶ß";
      } else {
        return "ﬂ°" + e + "¶ß";
      }
    });
  }, "encodeEntities");
  var V = loggerLevelUtils.setFunctionName(function (t) {
    return t.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
  }, "decodeEntities");
  var X = loggerLevelUtils.setFunctionName((t, e, r, i) => {
    let {
      counter: a = 0,
      prefix: o,
      suffix: l
    } = r;
    return i || `${o ? `${o}_` : ""}${t}_${e}_${a}${l ? `_${l}` : ""}`;
  }, "getEdgeId");
  function Q(t) {
    return t ?? null;
  }
  function J(t, e) {
    let r = Math.round(t.x);
    let i = Math.round(t.y);
    let a = e.replace(/(\d+\.\d+)/g, t => Math.round(parseFloat(t)).toString());
    return a.includes(r.toString()) || a.includes(i.toString());
  }
  loggerLevelUtils.setFunctionName(Q, "handleUndefinedAttr");
  loggerLevelUtils.setFunctionName(J, "isLabelCoordinateInPath");
  require.d(exports, {
    zeroWidthSpace: function () {
      return u;
    },
    calcTextWidth: function () {
      return q;
    },
    getEdgeId: function () {
      return X;
    },
    randomString: function () {
      return $;
    },
    generateId: function () {
      return _;
    },
    handleUndefinedAttr: function () {
      return Q;
    },
    cleanAndMerge: function () {
      return U;
    },
    decodeEntities: function () {
      return V;
    },
    parseFontSize: function () {
      return H;
    },
    encodeEntities: function () {
      return G;
    },
    wrapLabel: function () {
      return O;
    },
    calcTextHeight: function () {
      return I;
    },
    isDetailedError: function () {
      return z;
    },
    getStylesFromArray: function () {
      return L;
    },
    interpolateToCurve: function () {
      return b;
    },
    removeDirectives: function () {
      return y;
    },
    mermaidUtils: function () {
      return Y;
    }
  });
}