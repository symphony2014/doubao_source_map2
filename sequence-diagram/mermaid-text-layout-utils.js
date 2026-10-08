// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$m' to 'zeroWidthSpace'
// - Renamed export 'Cq' to 'calculateTextWidth'
// - Renamed export 'Ln' to 'getEdgeId'
// - Renamed export 'MX' to 'random'
// - Renamed export 'Ox' to 'generateId'
// - Renamed export 'R7' to 'handleUndefinedAttr'
// - Renamed export 'Rb' to 'cleanAndMerge'
// - Renamed export 'SH' to 'decodeEntities'
// - Renamed export 'VG' to 'parseFontSize'
// - Renamed export 'Vy' to 'encodeEntities'
// - Renamed export 'X4' to 'wrapLabel'
// - Renamed export 'XD' to 'calculateTextHeight'
// - Renamed export 'bZ' to 'isDetailedError'
// - Renamed export 'be' to 'getStylesFromArray'
// - Renamed export 'le' to 'interpolateToCurve'
// - Renamed export 'tf' to 'removeDirectives'
// - Renamed export 'w8' to 'textLayoutUtils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11049.b9a4593e.js
         * chunkId: 11049
         * moduleId: 997032
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var urlSanitizer = require("url-sanitizer") /*id: 568747*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var d = "​";
  var h = {
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
  var f = mermaidConfigUtils.setName(function (e, t) {
    let r = p(e, /(?:init\b)|(?:initialize\b)/);
    let n = {};
    if (Array.isArray(r)) {
      let e = r.map(e => e.args);
      mermaidConfigUtils.sanitizeDirective(e);
      n = mermaidConfigUtils.assignWithDepth(n, [...e]);
    } else {
      n = r.args;
    }
    if (!n) {
      return;
    }
    let i = mermaidConfigUtils.detectType(e, t);
    let a = "config";
    if (n[a] !== undefined) {
      if (i === "flowchart-v2") {
        i = "flowchart";
      }
      n[i] = n[a];
      delete n[a];
    }
    return n;
  }, "detectInit");
  var p = mermaidConfigUtils.setName(function (e, t = null) {
    try {
      let i;
      let a = RegExp(`[%]{2}(?![{]${g.source})(?=[}][%]{2}).*
`, "ig");
      e = e.trim().replace(a, "").replace(/'/gm, "\"");
      mermaidConfigUtils.logger.debug(`Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e}`);
      let o = [];
      while ((i = mermaidConfigUtils.directiveVarRegex.exec(e)) !== null) {
        var r;
        var n;
        if (i.index === mermaidConfigUtils.directiveVarRegex.lastIndex) {
          mermaidConfigUtils.directiveVarRegex.lastIndex++;
        }
        if (i && !t || t && ((r = i[1]) === null || r === undefined ? undefined : r.match(t)) || t && ((n = i[2]) === null || n === undefined ? undefined : n.match(t))) {
          let e = i[1] ? i[1] : i[2];
          let t = i[3] ? i[3].trim() : i[4] ? JSON.parse(i[4].trim()) : null;
          o.push({
            type: e,
            args: t
          });
        }
      }
      if (o.length === 0) {
        return {
          type: e,
          args: null
        };
      }
      if (o.length === 1) {
        return o[0];
      } else {
        return o;
      }
    } catch (r) {
      mermaidConfigUtils.logger.error(`ERROR: ${r.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`);
      return {
        type: undefined,
        args: null
      };
    }
  }, "detectDirective");
  var x = mermaidConfigUtils.setName(function (e) {
    return e.replace(mermaidConfigUtils.directiveVarRegex, "");
  }, "removeDirectives");
  var m = mermaidConfigUtils.setName(function (e, t) {
    for (let [r, n] of t.entries()) {
      if (n.match(e)) {
        return r;
      }
    }
    return -1;
  }, "isSubstringInArray");
  function v(e, t) {
    var r;
    if (e && (r = h[`curve${e.charAt(0).toUpperCase() + e.slice(1)}`]) !== null && r !== undefined) {
      return r;
    } else {
      return t;
    }
  }
  function $(e, t) {
    let r = e.trim();
    if (r) {
      if (t.securityLevel !== "loose") {
        return urlSanitizer.sanitizeUrl(r);
      } else {
        return r;
      }
    } else {
      return undefined;
    }
  }
  mermaidConfigUtils.setName(v, "interpolateToCurve");
  mermaidConfigUtils.setName($, "formatUrl");
  var y = mermaidConfigUtils.setName(function (e) {
    var t = arguments.length;
    var r = Array(t > 1 ? t - 1 : 0);
    var n = 1;
    for (; n < t; n++) {
      r[n - 1] = arguments[n];
    }
    let i = e.split(".");
    let a = i.length - 1;
    let o = i[a];
    let c = window;
    for (let t = 0; t < a; t++) {
      if (!(c = c[i[t]])) {
        mermaidConfigUtils.logger.error(`Function name: ${e} not found in window`);
        return;
      }
    }
    c[o](...r);
  }, "runFunc");
  function W(e, t) {
    if (e && t) {
      return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
    } else {
      return 0;
    }
  }
  function w(e) {
    let t;
    let r = 0;
    e.forEach(e => {
      r += W(e, t);
      t = e;
    });
    return R(e, r / 2);
  }
  function M(e) {
    if (e.length === 1) {
      return e[0];
    } else {
      return w(e);
    }
  }
  mermaidConfigUtils.setName(W, "distance");
  mermaidConfigUtils.setName(w, "traverseEdge");
  mermaidConfigUtils.setName(M, "calcLabelPosition");
  var b = mermaidConfigUtils.setName(function (e, t = 2) {
    let r = Math.pow(10, t);
    return Math.round(e * r) / r;
  }, "roundNumber");
  var R = mermaidConfigUtils.setName((e, t) => {
    let r;
    let n = t;
    for (let t of e) {
      if (r) {
        let e = W(t, r);
        if (e === 0) {
          return r;
        }
        if (e < n) {
          n -= e;
        } else {
          let i = n / e;
          if (i <= 0) {
            return r;
          }
          if (i >= 1) {
            return {
              x: t.x,
              y: t.y
            };
          }
          if (i > 0 && i < 1) {
            return {
              x: b((1 - i) * r.x + i * t.x, 5),
              y: b((1 - i) * r.y + i * t.y, 5)
            };
          }
        }
      }
      r = t;
    }
    throw Error("Could not find a suitable point for the given distance");
  }, "calculatePoint");
  var C = mermaidConfigUtils.setName((e, t, r) => {
    mermaidConfigUtils.logger.info(`our points ${JSON.stringify(t)}`);
    if (t[0] !== r) {
      t = t.reverse();
    }
    let n = R(t, 25);
    let i = e ? 10 : 5;
    let a = Math.atan2(t[0].y - n.y, t[0].x - n.x);
    let o = {
      x: 0,
      y: 0
    };
    o.x = Math.sin(a) * i + (t[0].x + n.x) / 2;
    o.y = -Math.cos(a) * i + (t[0].y + n.y) / 2;
    return o;
  }, "calcCardinalityPosition");
  function S(e, t, r) {
    let n = structuredClone(r);
    mermaidConfigUtils.logger.info("our points", n);
    if (t !== "start_left" && t !== "start_right") {
      n.reverse();
    }
    let i = R(n, 25 + e);
    let a = 10 + e * 0.5;
    let o = Math.atan2(n[0].y - i.y, n[0].x - i.x);
    let c = {
      x: 0,
      y: 0
    };
    if (t === "start_left") {
      c.x = Math.sin(o + Math.PI) * a + (n[0].x + i.x) / 2;
      c.y = -Math.cos(o + Math.PI) * a + (n[0].y + i.y) / 2;
    } else if (t === "end_right") {
      c.x = Math.sin(o - Math.PI) * a + (n[0].x + i.x) / 2 - 5;
      c.y = -Math.cos(o - Math.PI) * a + (n[0].y + i.y) / 2 - 5;
    } else if (t === "end_left") {
      c.x = Math.sin(o) * a + (n[0].x + i.x) / 2 - 5;
      c.y = -Math.cos(o) * a + (n[0].y + i.y) / 2 - 5;
    } else {
      c.x = Math.sin(o) * a + (n[0].x + i.x) / 2;
      c.y = -Math.cos(o) * a + (n[0].y + i.y) / 2;
    }
    return c;
  }
  function L(e) {
    let t = "";
    let r = "";
    for (let n of e) {
      if (n !== undefined) {
        if (n.startsWith("color:") || n.startsWith("text-align:")) {
          r = r + n + ";";
        } else {
          t = t + n + ";";
        }
      }
    }
    return {
      style: t,
      labelStyle: r
    };
  }
  mermaidConfigUtils.setName(S, "calcTerminalLabelPosition");
  mermaidConfigUtils.setName(L, "getStylesFromArray");
  var E = 0;
  var F = mermaidConfigUtils.setName(() => {
    E++;
    return "id-" + Math.random().toString(36).substr(2, 12) + "-" + E;
  }, "generateId");
  function T(e) {
    let t = "";
    let r = "0123456789abcdef";
    let n = r.length;
    for (let i = 0; i < e; i++) {
      t += r.charAt(Math.floor(Math.random() * n));
    }
    return t;
  }
  mermaidConfigUtils.setName(T, "makeRandomHex");
  var A = mermaidConfigUtils.setName(e => T(e.length), "random");
  var _ = mermaidConfigUtils.setName(function () {
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
  var k = mermaidConfigUtils.setName(function (e, t) {
    let r = t.text.replace(mermaidConfigUtils.textUtils.lineBreakRegex, " ");
    let [, n] = H(t.fontSize);
    let i = e.append("text");
    i.attr("x", t.x);
    i.attr("y", t.y);
    i.style("text-anchor", t.anchor);
    i.style("font-family", t.fontFamily);
    i.style("font-size", n);
    i.style("font-weight", t.fontWeight);
    i.attr("fill", t.fill);
    if (t.class !== undefined) {
      i.attr("class", t.class);
    }
    let a = i.append("tspan");
    a.attr("x", t.x + t.textMargin * 2);
    a.attr("fill", t.fill);
    a.text(r);
    return i;
  }, "drawSimpleText");
  var B = memoizeFunction.memoize((e, t, r) => {
    if (!e || (r = Object.assign({
      fontSize: 12,
      fontWeight: 400,
      fontFamily: "Arial",
      joinWith: "<br/>"
    }, r), mermaidConfigUtils.textUtils.lineBreakRegex.test(e))) {
      return e;
    }
    let n = e.split(" ").filter(Boolean);
    let i = [];
    let a = "";
    n.forEach((e, l) => {
      let o = D(`${e} `, r);
      let c = D(a, r);
      if (o > t) {
        let {
          hyphenatedStrings: n,
          remainingWord: l
        } = N(e, t, "-", r);
        i.push(a, ...n);
        a = l;
      } else if (c + o >= t) {
        i.push(a);
        a = e;
      } else {
        a = [a, e].filter(Boolean).join(" ");
      }
      if (l + 1 === n.length) {
        i.push(a);
      }
    });
    return i.filter(e => e !== "").join(r.joinWith);
  }, (e, t, r) => `${e}${t}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`);
  var N = memoizeFunction.memoize(function (e, t, r = "-", n) {
    n = Object.assign({
      fontSize: 12,
      fontWeight: 400,
      fontFamily: "Arial",
      margin: 0
    }, n);
    let i = [...e];
    let a = [];
    let l = "";
    i.forEach((e, o) => {
      let c = `${l}${e}`;
      if (D(c, n) >= t) {
        let e = i.length === o + 1;
        let t = `${c}${r}`;
        a.push(e ? c : t);
        l = "";
      } else {
        l = c;
      }
    });
    return {
      hyphenatedStrings: a,
      remainingWord: l
    };
  }, function (e, t, r = "-", n) {
    return `${e}${t}${r}${n.fontSize}${n.fontWeight}${n.fontFamily}`;
  });
  function Z(e, t) {
    return O(e, t).height;
  }
  function D(e, t) {
    return O(e, t).width;
  }
  mermaidConfigUtils.setName(Z, "calculateTextHeight");
  mermaidConfigUtils.setName(D, "calculateTextWidth");
  var O = memoizeFunction.memoize((e, t) => {
    let {
      fontSize: r = 12,
      fontFamily: n = "Arial",
      fontWeight: i = 400
    } = t;
    if (!e) {
      return {
        width: 0,
        height: 0
      };
    }
    let [, a] = H(r);
    let o = e.split(mermaidConfigUtils.textUtils.lineBreakRegex);
    let s = [];
    let u = axisAndZoomUtilities.select("body");
    if (!u.remove) {
      return {
        width: 0,
        height: 0,
        lineHeight: 0
      };
    }
    let h = u.append("svg");
    for (let e of ["sans-serif", n]) {
      let t = 0;
      let r = {
        width: 0,
        height: 0,
        lineHeight: 0
      };
      for (let n of o) {
        let l = _();
        l.text = n || d;
        let o = k(h, l).style("font-size", a).style("font-weight", i).style("font-family", e);
        let c = (o._groups || o)[0][0].getBBox();
        if (c.width === 0 && c.height === 0) {
          throw Error("svg element not in render tree");
        }
        r.width = Math.round(Math.max(r.width, c.width));
        t = Math.round(c.height);
        r.height += t;
        r.lineHeight = Math.round(Math.max(r.lineHeight, t));
      }
      s.push(r);
    }
    h.remove();
    let g = isNaN(s[1].height) || isNaN(s[1].width) || isNaN(s[1].lineHeight) || s[0].height > s[1].height && s[0].width > s[1].width && s[0].lineHeight > s[1].lineHeight ? 0 : 1;
    return s[g];
  }, (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`);
  n = class {
    constructor(e = false, t) {
      this.count = 0;
      this.count = t ? t.length : 0;
      this.next = e ? () => this.count++ : () => Date.now();
    }
  };
  mermaidConfigUtils.setName(n, "InitIDGenerator");
  var P = n;
  var z = mermaidConfigUtils.setName(function (e) {
    i = i || document.createElement("div");
    e = escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";");
    i.innerHTML = xssContentSanitizer.sanitizeHtml(e, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFRjF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*t5-%R*aWJ-TjBWbFJOTTFOc$ZscE9NS*QxWWxkd2$sbFlTbT$r$0%wOQ"
    });
    return unescape(i.textContent);
  }, "entityDecode");
  function I(e) {
    return "str" in e;
  }
  mermaidConfigUtils.setName(I, "isDetailedError");
  var j = mermaidConfigUtils.setName((e, t, r, n) => {
    var i;
    if (!n) {
      return;
    }
    let a = (i = e.node()) === null || i === undefined ? undefined : i.getBBox();
    if (a) {
      e.append("text").text(n).attr("text-anchor", "middle").attr("x", a.x + a.width / 2).attr("y", -r).attr("class", t);
    }
  }, "insertTitle");
  var H = mermaidConfigUtils.setName(e => {
    if (typeof e == "number") {
      return [e, e + "px"];
    }
    let t = parseInt(e ?? "", 10);
    if (Number.isNaN(t)) {
      return [undefined, undefined];
    } else if (e === String(t)) {
      return [t, e + "px"];
    } else {
      return [t, e];
    }
  }, "parseFontSize");
  function U(e, t) {
    return throttledDeepCloneUtil.throttledDeepClone({}, e, t);
  }
  mermaidConfigUtils.setName(U, "cleanAndMerge");
  var Y = {
    assignWithDepth: mermaidConfigUtils.assignWithDepth,
    wrapLabel: B,
    calculateTextHeight: Z,
    calculateTextWidth: D,
    calculateTextDimensions: O,
    cleanAndMerge: U,
    detectInit: f,
    detectDirective: p,
    isSubstringInArray: m,
    interpolateToCurve: v,
    calcLabelPosition: M,
    calcCardinalityPosition: C,
    calcTerminalLabelPosition: S,
    formatUrl: $,
    getStylesFromArray: L,
    generateId: F,
    random: A,
    runFunc: y,
    entityDecode: z,
    insertTitle: j,
    isLabelCoordinateInPath: V,
    parseFontSize: H,
    InitIDGenerator: P
  };
  var J = mermaidConfigUtils.setName(function (e) {
    let t = e;
    return (t = (t = t.replace(/style.*:\S*#.*;/g, function (e) {
      return e.substring(0, e.length - 1);
    })).replace(/classDef.*:\S*#.*;/g, function (e) {
      return e.substring(0, e.length - 1);
    })).replace(/#\w+;/g, function (e) {
      let t = e.substring(1, e.length - 1);
      if (/^\+?\d+$/.test(t)) {
        return "ﬂ°°" + t + "¶ß";
      } else {
        return "ﬂ°" + t + "¶ß";
      }
    });
  }, "encodeEntities");
  var K = mermaidConfigUtils.setName(function (e) {
    return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
  }, "decodeEntities");
  var X = mermaidConfigUtils.setName((e, t, r, n) => {
    let {
      counter: i = 0,
      prefix: a,
      suffix: l
    } = r;
    return n || `${a ? `${a}_` : ""}${e}_${t}_${i}${l ? `_${l}` : ""}`;
  }, "getEdgeId");
  function G(e) {
    return e ?? null;
  }
  function V(e, t) {
    let r = Math.round(e.x);
    let n = Math.round(e.y);
    let i = t.replace(/(\d+\.\d+)/g, e => Math.round(parseFloat(e)).toString());
    return i.includes(r.toString()) || i.includes(n.toString());
  }
  mermaidConfigUtils.setName(G, "handleUndefinedAttr");
  mermaidConfigUtils.setName(V, "isLabelCoordinateInPath");
  require.d(exports, {
    zeroWidthSpace: function () {
      return d;
    },
    calculateTextWidth: function () {
      return D;
    },
    getEdgeId: function () {
      return X;
    },
    random: function () {
      return A;
    },
    generateId: function () {
      return F;
    },
    handleUndefinedAttr: function () {
      return G;
    },
    cleanAndMerge: function () {
      return U;
    },
    decodeEntities: function () {
      return K;
    },
    parseFontSize: function () {
      return H;
    },
    encodeEntities: function () {
      return J;
    },
    wrapLabel: function () {
      return B;
    },
    calculateTextHeight: function () {
      return Z;
    },
    isDetailedError: function () {
      return I;
    },
    getStylesFromArray: function () {
      return L;
    },
    interpolateToCurve: function () {
      return v;
    },
    removeDirectives: function () {
      return x;
    },
    textLayoutUtils: function () {
      return Y;
    }
  });
}