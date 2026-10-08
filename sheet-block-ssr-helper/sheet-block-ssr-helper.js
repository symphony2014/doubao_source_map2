// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'i' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'J' to 'sanitizeHtml' (module 508971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: sheet-block-ssr-helper.420afdde.js
         * chunkId: 51268
         * moduleId: 302453
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function a(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  function o(e) {
    if (!e || e.length <= 0) {
      return;
    }
    let t = document.querySelector(".bear-web-x-container");
    let r = document.querySelector(".page-main-item .docx-page-block");
    if (!t || !r) {
      return;
    }
    let n = window.pageContainerRect ||= t.getBoundingClientRect();
    let i = window.pageItemRect ||= r.getBoundingClientRect();
    if (window.scrollbarWidth === undefined) {
      window.scrollbarWidth = t.offsetWidth - t.clientWidth;
    }
    let a = t.clientWidth >= 540 ? 66 : 44;
    let {
      scrollbarWidth: o
    } = window;
    let l = n.width - a * 2 - o;
    let s = Math.round(Math.max(i.left - n.left - a, 0));
    for (let r = 0; r < e.length; r++) {
      let n = e[r];
      let a = function (e, r = t) {
        let n = e;
        while (n.parentElement && n !== r && n.getAttribute("data-block-type") !== "grid_column") {
          n = n.parentElement;
        }
        return [n.getAttribute("data-block-type") === "grid_column", n];
      }(n);
      let o = a[0];
      let c = a[1];
      let f = n.getAttribute("data-record-id");
      let d = n.querySelector(".scrollable-wrapper");
      let u = n.querySelector(".scrollable-container");
      let h = n.querySelector(".scrollable-item");
      let g = n.querySelector(".sheet-block-container");
      let b = n.querySelector(".right-shadow");
      if (!f || !d || !u || !h || !g || !b) {
        continue;
      }
      d.style.width = `${l}px`;
      u.style.width = `${l}px`;
      if (o) {
        d.style.maxWidth = "100%";
        u.style.maxWidth = "100%";
      } else {
        d.style.left = `-${s}px`;
        h.style.left = `${s}px`;
      }
      let p = g.querySelector("svg");
      let m = c.getBoundingClientRect();
      if (p) {
        g.style.maxWidth = `${l}px`;
        b.style.opacity = p.getBoundingClientRect().right < m.right ? "0" : "1";
        b.style.height = "calc(100% - 29px)";
        b.style.top = "24px";
        b.style.bottom = "unset";
      } else {
        g.style.width = `${o ? m.width : i.width}px`;
      }
    }
  }
  function l() {
    let e = Array.from(document.querySelectorAll("[data-block-type=\"sheet\"]"));
    if (e) {
      o(e);
    }
  }
  function s(e) {
    var r;
    return !!(((r = window) === null || r === undefined ? undefined : r.User?.clientFeatures) || {})[e];
  }
  function c(e, t) {
    let r = document.querySelector(`${e} [data-record-id="${t}"]`);
    return r && o([r]);
  }
  class f {
    genScript(e) {
      let t = e && e.map(e => e.id);
      let r = `!window["isChunkedRender"] && ${t && t.length > 0}`;
      return `
    const ${this.globalVar}_${l.name} = ${l.toString()};
    ${o.toString()};
    ${u.toString()};
    window.${this.globalVar} = ${d.toString()};
    ${r} && window.${this.globalVar}(${JSON.stringify(t)});
    ${g.toString()};
    ${b.toString()};
    ${p.toString()};
    ${m.toString()};
    ${s.toString()};
    ${r} && ${this.globalVar}_${l.name}();
    window.genSheetBlockSSRScriptByRecordId=${h.toString()};
    window.ssrUpdateSheetLayoutByRecordId=${c.toString()};
    window.sheetLayoutById=function(recordId){
      var selector = "#ssrBox";
      window.genSheetBlockSSRScriptByRecordId(selector, recordId);
      window.ssrUpdateSheetLayoutByRecordId(selector, recordId);
    }
    `;
    }
    constructor() {
      a(this, "blockType", docBlockTypeConstants.blockTypeConstants.SHEET);
      a(this, "globalVar", "SHEET_BLOCK_SSR_HELPER");
    }
  }
  function d(e) {
    let t = Array.from(document.querySelectorAll(".docx-sheet-block"));
    if (t.length) {
      u(t, e);
    }
  }
  function u(e, t) {
    let n;
    let i = Array.from(e);
    let a = [];
    if (!i.length) {
      return t;
    }
    let o = ((n = window?.__theme__ || "light") === "system" && (n = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), n) === "dark";
    let l = b(p());
    for (let e = 0; e < t.length; e++) {
      let r = t[e];
      let n = i.find(e => {
        return e.attributes["data-record-id"]?.value === r;
      });
      if (!n) {
        a.push(r);
        continue;
      }
      let s = n.querySelector(".sheet-block-container");
      if (!s) {
        a.push(r);
        continue;
      }
      let c = function (e, t) {
        let n = `ssr-${e}-svg`;
        let i = t.querySelector(`#${n}`);
        if (!i) {
          return;
        }
        let a = i.querySelector("svg");
        if (!a || (a == null ? undefined : a.innerHTML?.[0]) !== "<") {
          return;
        }
        let l = a.getAttribute("content-width") || "1920";
        let s = a.getAttribute("content-height") || "1080";
        if (l) {
          a.setAttribute("width", String(Math.min(1920, Number(l) - 95)));
        }
        if (s) {
          a.setAttribute("height", String(Math.min(1080, Number(s) - 70)));
        }
        a.style.display = "block";
        let c = o ? "rgba(var(--N900-FG), 0.15)" : "var(--line-border-card)";
        a.style.borderTop = `1px solid ${c}`;
        a.style.borderLeft = `1px solid ${c}`;
        a.style.borderRight = `1px solid ${c}`;
        if (o) {
          a.style.background = "var(--bg-base)";
        }
        if (!o) {
          let e = a.closest(".ssr-wrapper");
          if (e) {
            e.style.backgroundColor = "#fff";
          }
        }
        a.style.marginBottom = "5px";
        a.style.fontSize = "14px";
        let f = Number(i.getAttribute("data-schema-version"));
        a.style.marginLeft = `-${f >= 9 ? 46 : 24}px`;
        a.style.clipPath = `inset(23.5px 0 0 ${f >= 9 ? 45.5 : 23.5}px)`;
        a.style.borderStyle = "hidden";
        let d = document.body.classList.contains("presentation-mode") ? 1.8 : 1;
        a.style.zoom = d;
        return a;
      }(r, s);
      if (c) {
        g(c, l);
        s.innerHTML = "";
        s.appendChild(c);
      }
    }
    return a;
  }
  function h(e, t) {
    let r = document.querySelector(`${e} [data-record-id="${t}"]`);
    if (r) {
      return u([r], [t]);
    } else {
      return [t];
    }
  }
  function g(e, t) {
    var r;
    var a;
    var o;
    var l;
    var s;
    let c = e.getElementsByTagName("style")[0];
    if (!c) {
      return;
    }
    if (!c.sheet) {
      let e = document.createElement("style");
      e.innerHTML = xssContentSanitizer.sanitizeHtml(c.innerHTML, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9XOWFWM2gz$2xoS2$rd3lTbk5pTWs1e$R*aE9lb%5wT$c5-$-zaDNXb*hKZ*1NeWFHe*FXRk-w$1cxN*Rsa3ljM1JqTTA1N$R*Z*9iR0pJ%W14amF%$XdZekpHZ$ZvelZubz0"
      });
      if ((a = c.parentNode) !== null && a !== undefined) {
        a.insertBefore(e, c);
      }
      if ((o = c.parentNode) !== null && o !== undefined) {
        o.removeChild(c);
      }
      c = e;
    }
    let f = document.createElement("style");
    let d = ((r = e.querySelector("g")) === null || r === undefined ? undefined : r.getAttribute("id")) || "";
    if (c == null ? undefined : c.sheet?.cssRules) {
      let e = c.sheet.cssRules;
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = e[n];
        let {
          selectorText: a
        } = i;
        let o = {
          fa: 0,
          fb: 1,
          fc: 2,
          fx: 2
        }[a.slice(1, 3)];
        let l = i.style[0];
        let s = t(i.style[l], o ?? 2);
        if (a.includes("fa0")) {
          continue;
        }
        let c = i.cssText.includes(d) ? i.cssText : `#${d} ${i.cssText}`;
        r.push(c);
        if (o !== undefined) {
          let e = d ? `#${d} ${a}` : a;
          r.push(`${e} {${l}: ${s}}`);
        }
      }
      f.innerHTML = xssContentSanitizer.sanitizeHtml(r.join(""), null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9XOWFWM2gz$2xoS2$rd3lTbk5pTWs1e$R*aE9lb%5wT$c5-$-zaDNXb*hKZ*1NeWFHe*FXRk-w$1cxN*Rsa3ljM1JqTTA1N$R*Z*9iR0pJ%W14amF%$XdZekpHZ$ZvelZubz0"
      });
      if ((l = c.parentNode) !== null && l !== undefined) {
        l.insertBefore(f, c);
      }
      if ((s = c.parentNode) !== null && s !== undefined) {
        s.removeChild(c);
      }
    }
  }
  function b(e) {
    let t = {
      LIGHT: "light",
      DARK: "dark"
    };
    let r = {
      FOREGROUND: "FG",
      BACKGROUND: "BG",
      BORDER: "BD"
    };
    let n = new Map();
    let i = new Map();
    let a = new Map();
    let o = window.cssvars ||= window.getComputedStyle(document.documentElement);
    let l = "var(--";
    let s = l.length;
    let c = {
      VARIABLE: 0,
      HEX: 1,
      RGB: 2,
      UNKNOWN: 3
    };
    let f = e => {
      let t = e.toLowerCase();
      if (t.startsWith(l)) {
        return {
          value: e.slice(s, -1),
          type: c.VARIABLE
        };
      } else if (t.startsWith("#")) {
        return {
          value: t,
          type: c.HEX
        };
      } else if (t.startsWith("rgb")) {
        return {
          value: t,
          type: c.RGB
        };
      } else {
        return {
          value: t,
          type: c.UNKNOWN
        };
      }
    };
    let d = e => {
      let t = e.split(";");
      let r = t[0];
      let n = t[1];
      let i = n == null ? undefined : n.trim();
      if (!i) {
        return {
          baseColor: r,
          richInfo: null
        };
      }
      let a = {};
      i.split(",").map(e => e.split(":").map(e => e.trim())).forEach(e => {
        let t = e[0];
        let r = e[1];
        a[t] = t === "alpha" ? Number(r) : r;
      });
      return {
        baseColor: r,
        richInfo: a
      };
    };
    function u(e) {
      return o.getPropertyValue(`--${e}`);
    }
    function h(e) {
      if (!e) {
        return;
      }
      if (n.has(e)) {
        return n.get(e);
      }
      let t = e.replace("#", "");
      if (!t || t.length !== 6) {
        return;
      }
      let r = [parseInt(t.slice(0, 2), 16), parseInt(t.slice(2, 4), 16), parseInt(t.slice(4, 6), 16)];
      n.set(e, r);
      return r;
    }
    function g(e) {
      let t;
      let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      t = e.includes("#") ? h(e) : e.includes("rgb") ? e.replace("rgb(|)", "").replace(")", "").split(",").map(e => Number(e)) : h(u(e));
      return `rgba(${t.join(",")}, ${r})`;
    }
    let b = (() => {
      let e = ["00", "100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"];
      let t = ["W", "T", "L", "O", "C"].map(t => e.map(e => `${t}${e}`)).flat(1);
      let r = {
        W900: "#004761",
        W800: "#006185",
        W700: "#037eaa",
        W600: "#049fd7",
        W500: "#14c0ff",
        W400: "#50cefb",
        W300: "#7edafb",
        W200: "#b1e8fc",
        W100: "#d9f3fd",
        W50: "#ecf9fe",
        T900: "#024b41",
        T800: "#036356",
        T700: "#078372",
        T600: "#04b49c",
        T500: "#00d6b9",
        T400: "#14e1c6",
        T300: "#64e8d6",
        T200: "#a9efe6",
        T100: "#d5f6f2",
        T50: "#eafaf8",
        O900: "#6b3900",
        O800: "#8f4f04",
        O700: "#b26206",
        O600: "#de7802",
        O500: "#ff8800",
        O400: "#ffa53d",
        O300: "#ffba6b",
        O200: "#fed4a4",
        O100: "#feead2",
        O50: "#fff5eb",
        C900: "#520a32",
        C800: "#7a0f4b",
        C700: "#9e1361",
        C600: "#c71077",
        C500: "#f01d94",
        C400: "#f14ba9",
        C300: "#f57ac0",
        C200: "#f9aed9",
        C100: "#fdddef",
        C50: "#fef1f8",
        L900: "#354200",
        L800: "#495700",
        L700: "#667901",
        L600: "#8fac02",
        L500: "#b3d600",
        L400: "#c3dd40",
        L300: "#d2e76a",
        L200: "#dfee96",
        L100: "#eef6c6",
        L50: "#f7fae5"
      };
      let n = new Map();
      t.forEach(e => {
        let t = r[e];
        if (t) {
          n.set(String(t).toLowerCase(), e);
        }
      });
      return n;
    })();
    let p = {
      2: r.FOREGROUND,
      0: r.BACKGROUND,
      1: r.BORDER
    };
    let $ = {
      C100: ["#fdddef", "#5c2542"],
      C200: ["#f9aed9", "#91376a"],
      C300: ["#f57ac0", "#ad407e"],
      C400: ["#f14ba9", "#cc4792"],
      C50: ["#fef1f8", "#421b31"],
      C500: ["#f01d94", "#e352a3"],
      C600: ["#c71077", "#ed66b3"],
      C700: ["#9e1361", "#ff91cf"],
      C800: ["#7a0f4b", "#ffbde2"],
      C900: ["#520a32", "#ffdbef"],
      W100: ["#d9f3fd", "#173742"],
      W200: ["#b1e8fc", "#225b70"],
      W300: ["#7edafb", "#2782a3"],
      W400: ["#50cefb", "#2ea5d1"],
      W50: ["#ecf9fe", "#142930"],
      W500: ["#14c0ff", "#42bdeb"],
      W600: ["#049fd7", "#5fd4fe"],
      W700: ["#037eaa", "#89dffe"],
      W800: ["#006185", "#c2eeff"],
      W900: ["#004761", "#def6ff"],
      T100: ["#d5f6f2", "#153d38"],
      T200: ["#a9efe6", "#23665d"],
      T300: ["#64e8d6", "#269687"],
      T400: ["#14e1c6", "#37b8a6"],
      T50: ["#eafaf8", "#162e2b"],
      T500: ["#00d6b9", "#41ccb9"],
      T600: ["#04b49c", "#5cdbca"],
      T700: ["#078372", "#7febdc"],
      T800: ["#036356", "#b7f7ef"],
      T900: ["#024b41", "#daf9f5"],
      L100: ["#eef6c6", "#495706"],
      L200: ["#dfee96", "#6d8205"],
      L300: ["#d2e76a", "#91ad02"],
      L400: ["#c3dd40", "#abc912"],
      L50: ["#f7fae5", "#2e3605"],
      L500: ["#b3d600", "#b9d627"],
      L600: ["#8fac02", "#c7e04d"],
      L700: ["#667901", "#d6ea75"],
      L800: ["#495700", "#e7f5a6"],
      L900: ["#354200", "#f6ffcc"],
      O100: ["#feead2", "#57330a"],
      O200: ["#fed4a4", "#845117"],
      O300: ["#ffba6b", "#bd7017"],
      O400: ["#ffa53d", "#de8218"],
      O50: ["#fff5eb", "#33210b"],
      O500: ["#ff8800", "#f2962c"],
      O600: ["#de7802", "#f5a54a"],
      O700: ["#b26206", "#fabc75"],
      O800: ["#8f4f04", "#ffd8ac"],
      O900: ["#6b3900", "#ffeace"],
      N00: ["#ffffff", "#0a0a0a"],
      B400: ["#4e83fd", "#2e65d1"],
      G500: ["#34c724", "#54c248"],
      P500: ["#7f3bf5", "#9762f5"],
      R500: ["#f54a45", "#f05b56"],
      N100: ["#f2f3f5", "#292929"],
      B100: ["#e1eaff", "#192a4c"],
      G100: ["#d9f5d6", "#1f471b"],
      P100: ["#ece2fe", "#361d61"],
      Y100: ["#faf1d1", "#574711"],
      R200: ["#fbbfbc", "#6b2827"],
      N300: ["#dee0e3", "#434343"],
      B200: ["#bacefd", "#203e78"],
      G300: ["#8ee085", "#339428"],
      P300: ["#ad82f7", "#6533bd"],
      Y400: ["#fad355", "#f0bb0a"],
      R400: ["#f76964", "#cc4743"],
      N500: ["#8f959e", "#757575"],
      B500: ["#3370ff", "#4c88ff"],
      G600: ["#2ea121", "#6dd162"],
      P600: ["#6425d0", "#a472fc"],
      Y500: ["#ffc60a", "#fac823"],
      R600: ["#d83931", "#fa7873"],
      N700: ["#373c43", "#e0e0e0"],
      B600: ["#245bdb", "#70a0ff"],
      G800: ["#186010", "#bdf0b8"],
      P800: ["#380d82", "#d3bafd"],
      Y600: ["#dc9b04", "#fcd456"],
      R800: ["#812520", "#fec6c3"],
      N900: ["#1f2329", "#ebebeb"],
      B800: ["#133c9a", "#b8cfff"],
      G900: ["#124b0c", "#d6f5d2"],
      P900: ["#270561", "#e3d4ff"],
      Y800: ["#795101", "#ffe694"],
      R900: ["#621c18", "#ffe0e0"]
    };
    let S = ["N00", "B400", "G500", "P500", "R500", "N100", "B100", "G100", "P100", "R200", "Y100", "N300", "B200", "G300", "P300", "R400", "Y400", "N500", "B500", "G600", "P600", "R600", "Y500", "N700", "B600", "G800", "P800", "R800", "Y600", "N900", "B800", "G900", "P900", "R900", "Y800"];
    let y = (e, r) => {
      let n = $[e];
      if (n) {
        return n[+(r !== t.LIGHT)];
      }
    };
    let w = (() => {
      let e = {};
      for (let t of S) {
        e[$[t][0]] = t;
      }
      return e;
    })();
    function R() {
      let t = window?.__theme__ || "light";
      if (t === "system") {
        t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return t;
    }
    let v = m();
    let T = new Map();
    function x(r, n) {
      if (R() === t.LIGHT) {
        return r;
      }
      if (!i.has(r)) {
        let e = new v(r);
        i.set(r, e.toHexString().toLowerCase());
      }
      let a = i.get(r);
      if (b.has(a)) {
        return y(b.get(a), R());
      } else {
        return function (r, n) {
          let i = R();
          if (i !== t.DARK) {
            return r;
          }
          {
            let t = `${r.trim()}-${n}-${i}`;
            if (T.has(t)) {
              return T.get(t);
            }
            {
              let i = function (t, r) {
                let n = R();
                let i = new v(t);
                let a = i.getAlpha();
                let o = w[i.toHexString()];
                if (!o || !(S.indexOf(o) > -1)) {
                  return e(t, r);
                }
                {
                  let e = y(o, n);
                  let t = new v(e);
                  if (a < 1 && t.isValid()) {
                    t.setAlpha(a);
                    return t.toRgbString();
                  } else {
                    return e;
                  }
                }
              }(r, n);
              T.set(t, i);
              return i;
            }
          }
        }(r, n);
      }
    }
    return (e, t) => {
      if (typeof e != "string") {
        return e;
      }
      if (e === "var(--illustration-yellow)") {
        e = "var(--colorful-yellow)";
      }
      let n = a.get(e);
      if (n) {
        return n;
      }
      let {
        value: i,
        type: o
      } = f(e);
      if (o === c.VARIABLE) {
        let t = i.split(",");
        let r = t[0];
        let n = t[1];
        let o = u(r);
        if (n) {
          o = g(o, parseFloat(n.trim()));
        }
        a.set(e, o);
        return o;
      }
      if (o === c.UNKNOWN) {
        return i;
      }
      let {
        baseColor: l,
        richInfo: s
      } = d(i);
      if (!s) {
        return x(l, t === undefined ? r.FOREGROUND : p[t]);
      }
      let h = s.colorType || r.FOREGROUND;
      let b = typeof s.alpha == "number" && s.alpha !== 1;
      let m = x(l, h);
      let $ = b ? g(m, s.alpha) : m;
      a.set(e, $);
      return $;
    };
  }
  function p() {
    function e(e) {
      let {
        h: t,
        s: r,
        l: n,
        a: i = 1
      } = e;
      if (r === 0) {
        let e = [n, n, n].map(e => Math.round(e * 255));
        return {
          r: e[0],
          g: e[1],
          b: e[2],
          a: i
        };
      }
      let a = (1 - Math.abs(n * 2 - 1)) * r;
      let o = a * (1 - Math.abs(t / 60 % 2 - 1));
      let l = n - a / 2;
      let s = (t < 60 ? [a, o, 0] : t < 120 ? [o, a, 0] : t < 180 ? [0, a, o] : t < 240 ? [0, o, a] : t < 300 ? [o, 0, a] : [a, 0, o]).map(e => Math.round((e + l) * 255));
      return {
        r: s[0],
        g: s[1],
        b: s[2],
        a: i
      };
    }
    function t(e) {
      let {
        r: t,
        g: r,
        b: n,
        a: i = 1
      } = e;
      let a = t / 255;
      let o = r / 255;
      let l = n / 255;
      let s = Math.max(a, o, l);
      let c = Math.min(a, o, l);
      let f = s - c;
      let d = (s + c) / 2;
      if (f === 0) {
        return {
          h: 0,
          s: 0,
          l: d,
          a: i
        };
      }
      let u = (s === a ? (o - l) / f % 6 : s === o ? (l - a) / f + 2 : (a - o) / f + 4) * 60;
      if (u < 0) {
        u += 360;
      }
      return {
        h: u,
        s: f / (1 - Math.abs(d * 2 - 1)),
        l: d,
        a: i
      };
    }
    function r(e, t = 0) {
      let r = e.toFixed(t);
      if (t === 0) {
        return r;
      }
      let n = r.indexOf(".");
      if (n >= 0) {
        let e = r.match(/0+$/);
        if (e) {
          if (e.index === n + 1) {
            return r.substring(0, n);
          } else {
            return r.substring(0, e.index);
          }
        }
      }
      return r;
    }
    let n = /^rgba?\([^\(\)]+\)$/;
    let i = /^hsla?\([^\(\)]+\)$/;
    let a = /^#[0-9a-f]+$/i;
    function o(t) {
      let r = t.trim().toLowerCase();
      if (r.match(n)) {
        return function (e) {
          let t = l(e, s, c, f);
          return {
            r: t[0],
            g: t[1],
            b: t[2],
            a: t[3] || 1
          };
        }(r);
      }
      if (r.match(i)) {
        return function (t) {
          let r = l(t, d, u, h);
          return e({
            h: r[0],
            s: r[1],
            l: r[2],
            a: r[3] || 1
          });
        }(r);
      }
      if (r.match(a)) {
        return function (e) {
          let t = e.substring(1);
          switch (t.length) {
            case 3:
            case 4:
              {
                let e = [0, 1, 2].map(e => parseInt(`${t[e]}${t[e]}`, 16));
                let r = t.length === 3 ? 1 : parseInt(`${t[3]}${t[3]}`, 16) / 255;
                return {
                  r: e[0],
                  g: e[1],
                  b: e[2],
                  a: r
                };
              }
            case 6:
            case 8:
              {
                let e = [0, 2, 4].map(e => parseInt(t.substring(e, e + 2), 16));
                let r = t.length === 6 ? 1 : parseInt(t.substring(6, 8), 16) / 255;
                return {
                  r: e[0],
                  g: e[1],
                  b: e[2],
                  a: r
                };
              }
            default:
              throw Error(`Unable to parse ${e}`);
          }
        }(r);
      }
      if (t === "transparent") {
        return {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        };
      }
      throw Error(`Unable to parse ${t}`);
    }
    function l(e, t, r, n) {
      let i = e.split(t).filter(e => e);
      let a = Object.entries(n);
      return i.map(e => e.trim()).map((e, t) => {
        let n;
        let i = a.find(t => e.endsWith(t[0]));
        n = i ? parseFloat(e.substring(0, e.length - i[0].length)) / i[1] * r[t] : parseFloat(e);
        if (r[t] > 1) {
          return Math.round(n);
        } else {
          return n;
        }
      });
    }
    let s = /rgba?|\(|\)|\/|,|\s/gi;
    let c = [255, 255, 255, 1];
    let f = {
      "%": 100
    };
    let d = /hsla?|\(|\)|\/|,|\s/gi;
    let u = [360, 1, 1, 1];
    let h = {
      "%": 100,
      deg: 360,
      rad: Math.PI * 2,
      turn: 1
    };
    function g(e, t) {
      let r = [];
      for (let n = 0, i = e.length; n < i; n++) {
        r[n] = [];
        for (let i = 0, a = t[0].length; i < a; i++) {
          let a = 0;
          for (let r = 0, o = e[0].length; r < o; r++) {
            a += e[n][r] * t[r][i];
          }
          r[n][i] = a;
        }
      }
      return r;
    }
    let b = {
      identity: () => [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]],
      invertNHue: () => [[0.333, -0.667, -0.667, 0, 1], [-0.667, 0.333, -0.667, 0, 1], [-0.667, -0.667, 0.333, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]],
      brightness: e => [[e, 0, 0, 0, 0], [0, e, 0, 0, 0], [0, 0, e, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]],
      contrast(e) {
        let t = (1 - e) / 2;
        return [[e, 0, 0, 0, t], [0, e, 0, 0, t], [0, 0, e, 0, t], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
      },
      sepia: e => [[0.393 + (1 - e) * 0.607, 0.769 - (1 - e) * 0.769, 0.189 - (1 - e) * 0.189, 0, 0], [0.349 - (1 - e) * 0.349, 0.686 + (1 - e) * 0.314, 0.168 - (1 - e) * 0.168, 0, 0], [0.272 - (1 - e) * 0.272, 0.534 - (1 - e) * 0.534, 0.131 + (1 - e) * 0.869, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]],
      grayscale: e => [[0.2126 + (1 - e) * 0.7874, 0.7152 - (1 - e) * 0.7152, 0.0722 - (1 - e) * 0.0722, 0, 0], [0.2126 - (1 - e) * 0.2126, 0.7152 + (1 - e) * 0.2848, 0.0722 - (1 - e) * 0.0722, 0, 0], [0.2126 - (1 - e) * 0.2126, 0.7152 - (1 - e) * 0.7152, 0.0722 + (1 - e) * 0.9278, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]
    };
    let p = "#1a1a1a";
    let m = "#ebebeb";
    let $ = "#ffffff";
    let S = "#1f2329";
    let y = {
      mode: 1,
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      sepia: 0,
      darkSchemeBackgroundColor: p,
      darkSchemeTextColor: m,
      lightSchemeBackgroundColor: $,
      lightSchemeTextColor: S
    };
    let w = new Set(["inherit", "transparent", "initial", "currentcolor", "none", "unset"]);
    let R = new Map();
    let v = new Map();
    let T = new Map();
    let x = ["r", "g", "b", "a"];
    let _ = ["mode", "brightness", "contrast", "grayscale", "sepia", "darkSchemeBackgroundColor", "darkSchemeTextColor", "lightSchemeBackgroundColor", "lightSchemeTextColor"];
    function M(e) {
      if (v.has(e)) {
        return v.get(e);
      }
      let r = t(o(e));
      v.set(e, r);
      return r;
    }
    function k(e) {
      let t = e.mode === 1;
      return e[t ? "darkSchemeBackgroundColor" : "lightSchemeBackgroundColor"];
    }
    function N(e) {
      let t = e.mode === 1;
      return e[t ? "darkSchemeTextColor" : "lightSchemeTextColor"];
    }
    function C(e) {
      return (e - 205) * 15 / 40 + 205;
    }
    function B(e, t) {
      var r;
      var n;
      var i;
      let a;
      let {
        h: o,
        s: l,
        l: s,
        a: c
      } = e;
      let f = s < 0.2 || l < 0.24;
      let d = !f && o > 205 && o < 245;
      if (s > 0.5) {
        let e = (s - 0.5) * (t.l - 0.55) / 0.5 + 0.55;
        if (f) {
          return {
            h: t.h,
            s: t.s,
            l: e,
            a: c
          };
        }
        let r = o;
        if (d) {
          r = C(o);
        }
        return {
          h: r,
          s: l,
          l: e,
          a: c
        };
      }
      if (f) {
        let e = t.h;
        return {
          h: e,
          s: t.s,
          l: (s - 0) * (0.55 - (r = t.l)) / 0.5 + r,
          a: c
        };
      }
      let u = o;
      if (d) {
        u = C(o);
        a = (s - 0) * (Math.min(1, 0.6000000000000001) - (n = t.l)) / 0.5 + n;
      } else {
        a = (s - 0) * (0.55 - (i = t.l)) / 0.5 + i;
      }
      return {
        h: u,
        s: l,
        l: a,
        a: c
      };
    }
    function L(e, t) {
      let {
        h: r,
        s: n,
        l: i,
        a
      } = e;
      let o = n < 0.12 || i > 0.8 && r > 200 && r < 280;
      if (i < 0.5) {
        let e = (i - 0) * 0.4 / 0.5 + 0;
        if (o) {
          return {
            h: t.h,
            s: t.s,
            l: e,
            a
          };
        } else {
          return {
            h: r,
            s: n,
            l: e,
            a
          };
        }
      }
      let l = (i - 0.5) * (t.l - 0.4) / 0.5 + 0.4;
      if (o) {
        return {
          h: t.h,
          s: t.s,
          l: l,
          a
        };
      }
      let s = r;
      if (r > 60 && r < 180) {
        s = r > 120 ? (r - 120) * 45 / 60 + 135 : (r - 60) * 45 / 60 + 60;
      }
      return {
        h: s,
        s: n,
        l: l,
        a
      };
    }
    function O(e, t, r) {
      let {
        h: n,
        s: i,
        l: a,
        a: o
      } = e;
      let l = n;
      let s = i;
      if (a < 0.2 || i < 0.24) {
        if (a < 0.5) {
          l = t.h;
          s = t.s;
        } else {
          l = r.h;
          s = r.s;
        }
      }
      return {
        h: l,
        s: s,
        l: -((a - 0) * 0.3) / 1 + 0.5,
        a: o
      };
    }
    function W(e, t) {
      let r = k(t);
      let n = N(t);
      return E(e, t, A, n, r);
    }
    function E(n, i, a, o, l) {
      let s;
      let c;
      if (T.has(a)) {
        s = T.get(a);
      } else {
        s = new Map();
        T.set(a, s);
      }
      let f = x.map(e => n[e]).concat(_.map(e => i[e])).join(";");
      if (s.has(f)) {
        return s.get(f);
      }
      let d = t(n);
      let {
        r: u,
        g: h,
        b: p,
        a: m
      } = e(a(d, o === undefined ? undefined : M(o), l === undefined ? undefined : M(l)));
      let $ = function (e, t) {
        let r = g(t, [[e[0] / 255], [e[1] / 255], [e[2] / 255], [1], [1]]);
        return [0, 1, 2].map(e => Math.min(255, Math.max(0, Math.round(r[e][0] * 255))));
      }([u, h, p], (c = b.identity(), i.sepia !== 0 && (c = g(c, b.sepia(i.sepia / 100))), i.grayscale !== 0 && (c = g(c, b.grayscale(i.grayscale / 100))), i.contrast !== 100 && (c = g(c, b.contrast(i.contrast / 100))), i.brightness !== 100 && (c = g(c, b.brightness(i.brightness / 100))), i.mode === 1 && (c = g(c, b.invertNHue())), c));
      let S = $[0];
      let y = $[1];
      let w = $[2];
      let R = m === 1 ? function (e) {
        let {
          r: t,
          g: r,
          b: n,
          a: i
        } = e;
        return `#${(i !== undefined && i < 1 ? [t, r, n, Math.round(i * 255)] : [t, r, n]).map(e => `${e < 16 ? "0" : ""}${e.toString(16)}`).join("")}`;
      }({
        r: S,
        g: y,
        b: w
      }) : function (e) {
        let {
          r: t,
          g: n,
          b: i,
          a
        } = e;
        if (a !== undefined && a < 1) {
          return `rgba(${r(t)}, ${r(n)}, ${r(i)}, ${r(a, 2)})`;
        } else {
          return `rgb(${r(t)}, ${r(n)}, ${r(i)})`;
        }
      }({
        r: S,
        g: y,
        b: w,
        a: m
      });
      s.set(f, R);
      return R;
    }
    function A(e, t, r) {
      var n;
      let i;
      let {
        h: a,
        s: o,
        l,
        a: s
      } = e;
      let c = l < 0.5;
      i = c ? l < 0.2 || o < 0.12 : o < 0.24 || l > 0.8 && a > 200 && a < 280;
      let f = a;
      let d = l;
      if (i) {
        if (c) {
          f = t.h;
          d = t.s;
        } else {
          f = r.h;
          d = r.s;
        }
      }
      return {
        h: f,
        s: d,
        l: (n = t.l, (l - 0) * (r.l - n) / 1 + n),
        a: s
      };
    }
    return (e, t) => {
      if (w.has(e.toLowerCase())) {
        return e;
      }
      try {
        let r = function (e) {
          let t = e.trim();
          if (R.has(t)) {
            return R.get(t);
          }
          let r = o(t);
          R.set(t, r);
          return r;
        }(e);
        switch (t || "FG") {
          case "BG":
            return function (e, t) {
              if (t.mode === 0) {
                return W(e, t);
              }
              let r = k(t);
              return E(e, Object.assign(Object.assign({}, t), {
                mode: 0
              }), L, r);
            }(r, y);
          case "BD":
            return function (e, t) {
              if (t.mode === 0) {
                return W(e, t);
              }
              let r = N(t);
              let n = k(t);
              return E(e, Object.assign(Object.assign({}, t), {
                mode: 0
              }), O, r, n);
            }(r, y);
          default:
            return function (e, t) {
              if (t.mode === 0) {
                return W(e, t);
              }
              let r = N(t);
              return E(e, Object.assign(Object.assign({}, t), {
                mode: 0
              }), B, r);
            }(r, y);
        }
      } catch (t) {
        return e;
      }
    };
  }
  function m() {
    let e = /^\s+/;
    let t = /\s+$/;
    let r = function () {
      let e = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)";
      let t = `[\\s|\\(]+(${e})[,|\\s]+(${e})[,|\\s]+(${e})\\s*\\)?`;
      let r = `[\\s|\\(]+(${e})[,|\\s]+(${e})[,|\\s]+(${e})[,|\\s]+(${e})\\s*\\)?`;
      return {
        CSS_UNIT: new RegExp(e),
        rgb: RegExp(`rgb${t}`),
        rgba: RegExp(`rgba${r}`),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
    }();
    function n(e) {
      if (isNaN(e = parseFloat(e)) || e < 0 || e > 1) {
        e = 1;
      }
      return e;
    }
    function i(e) {
      if (e.length === 1) {
        return `0${e}`;
      } else {
        return `${e}`;
      }
    }
    function a(e, t) {
      var r;
      var n;
      if (typeof (r = e) == "string" && r.indexOf(".") !== -1 && parseFloat(r) === 1) {
        e = "100%";
      }
      let i = typeof (n = e) == "string" && n.indexOf("%") !== -1;
      e = Math.min(t, Math.max(0, parseFloat(e)));
      if (i) {
        e = parseInt(String(e * t), 10) / 100;
      }
      if (Math.abs(e - t) < 0.000001) {
        return 1;
      } else {
        return e % t / parseFloat(t);
      }
    }
    function o(e) {
      return parseInt(e, 16);
    }
    function l(e) {
      return !!r.CSS_UNIT.exec(e);
    }
    function s(i, c) {
      if (i instanceof s) {
        return i;
      }
      let f = function (i) {
        var s;
        var c;
        var f;
        var d;
        var u;
        let h = {
          r: 0,
          g: 0,
          b: 0
        };
        let g = 1;
        let b = false;
        let p = false;
        if (typeof i == "string") {
          let n;
          i = (s = (s = i).replace(e, "").replace(t, "").toLowerCase()) === "transparent" ? {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
          } : (n = r.rgb.exec(s)) ? {
            r: n[1],
            g: n[2],
            b: n[3]
          } : (n = r.rgba.exec(s)) ? {
            r: n[1],
            g: n[2],
            b: n[3],
            a: n[4]
          } : (n = r.hex6.exec(s)) ? {
            r: o(n[1]),
            g: o(n[2]),
            b: o(n[3]),
            format: "hex"
          } : !!(n = r.hex3.exec(s)) && {
            r: o(String(n[1]) + n[1]),
            g: o(String(n[2]) + n[2]),
            b: o(String(n[3]) + n[3]),
            format: "hex"
          };
        }
        if (((c = i) === null ? "null" : c === undefined ? "undefined" : Object.prototype.toString.call(c).slice(8, -1).toLowerCase()) === "object") {
          if (l(i.r) && l(i.g) && l(i.b)) {
            f = i.r;
            d = i.g;
            u = i.b;
            h = {
              r: a(f, 255) * 255,
              g: a(d, 255) * 255,
              b: a(u, 255) * 255
            };
            b = true;
            p = String(i.r).substr(-1) === "%" ? "prgb" : "rgb";
          }
          if (Object.prototype.hasOwnProperty.call(i, "a")) {
            g = i.a;
          }
        }
        g = n(g);
        return {
          ok: b,
          format: i.format || p,
          r: Math.min(255, Math.max(h.r, 0)),
          g: Math.min(255, Math.max(h.g, 0)),
          b: Math.min(255, Math.max(h.b, 0)),
          a: g
        };
      }(i);
      this._originalInput = i;
      this._r = f.r;
      this._g = f.g;
      this._b = f.b;
      this._a = f.a;
      this._roundA = Math.round(this._a * 100) / 100;
      this._format = (c == null ? undefined : c.format) || f.format;
      this._gradientType = c == null ? undefined : c.gradientType;
      if (this._r < 1) {
        this._r = Math.round(this._r);
      }
      if (this._g < 1) {
        this._g = Math.round(this._g);
      }
      if (this._b < 1) {
        this._b = Math.round(this._b);
      }
      this._ok = f.ok;
    }
    s.prototype.isValid = function () {
      return this._ok;
    };
    s.prototype.getAlpha = function () {
      return this._a;
    };
    s.prototype.setAlpha = function (e) {
      this._a = n(e);
      this._roundA = Math.round(this._a * 100) / 100;
      return this;
    };
    s.prototype.toHexString = function (e = false) {
      return `#${this.toHex(e)}`;
    };
    s.prototype.toHex = function (e) {
      return function (e, t, r, n) {
        let a = [i(Math.round(e).toString(16)), i(Math.round(t).toString(16)), i(Math.round(r).toString(16))];
        if (n && a[0].charAt(0) === a[0].charAt(1) && a[1].charAt(0) === a[1].charAt(1) && a[2].charAt(0) === a[2].charAt(1)) {
          return a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0);
        } else {
          return a.join("");
        }
      }(this._r, this._g, this._b, e);
    };
    s.prototype.toRgbString = function () {
      if (this._a === 1) {
        return `rgb(${Math.round(this._r)}, ${Math.round(this._g)}, ${Math.round(this._b)})`;
      } else {
        return `rgba(${Math.round(this._r)}, ${Math.round(this._g)}, ${Math.round(this._b)}, ${this._roundA})`;
      }
    };
    return s;
  }
  require.r(exports);
  require.d(exports, {
    SheetBlockSSRHelper: function () {
      return f;
    },
    genGetDarkColor: function () {
      return p;
    },
    genSheetBlockSSRScript: function () {
      return d;
    },
    genSheetBlockSSRScriptByRecordId: function () {
      return h;
    },
    genSheetBlockSSRScriptCore: function () {
      return u;
    },
    genSheetColorTheme: function () {
      return b;
    },
    genTinyColor: function () {
      return m;
    },
    ssrUpdateSheetLayoutByRecordId: function () {
      return c;
    },
    ssrUpdateSheetLayoutCore: function () {
      return o;
    }
  });
}