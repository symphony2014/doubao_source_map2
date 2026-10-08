// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'getSelectionData'
// - Renamed export 'W' to 'getSelectionCoords'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 168631
         */
module.exports = function (module, exports, require) {
  let r;
  let a = ["SCRIPT", "STYLE", "LINK", "IMG", "VIDEO", "FIGURE", "svg"];
  r = null;
  let l = () => r = r || new TextEncoder();
  let i = (e, t) => l().encode(e).length > t;
  let o = function (e = "") {
    return e.replace(/\s+/g, " ");
  };
  let s = (e, t, n) => {
    let r = e;
    let a = t === "prev" ? "previousSibling" : "nextSibling";
    while (r && !r[a]) {
      r = r.parentNode;
      if (n == null ? undefined : n(r)) {
        return null;
      }
    }
    if (r) {
      return r[a];
    } else {
      return null;
    }
  };
  let c = (e, t, n, r, l) => {
    if (n >= 50 || e === t) {
      return false;
    }
    let i = e;
    let o = r === "prev" ? "lastChild" : "firstChild";
    let u = r === "prev" ? "previousSibling" : "nextSibling";
    while (i) {
      let e = "";
      while (i && function (e) {
        if (!e) {
          return false;
        }
        switch (e.nodeType) {
          case Node.TEXT_NODE:
          case Node.COMMENT_NODE:
          case Node.CDATA_SECTION_NODE:
            return true;
          case Node.ELEMENT_NODE:
            switch (e.tagName) {
              case "A":
              case "ABBR":
              case "B":
              case "BDI":
              case "BDO":
              case "BR":
              case "CITE":
              case "CODE":
              case "DATA":
              case "DFN":
              case "EM":
              case "I":
              case "KBD":
              case "MARK":
              case "Q":
              case "RP":
              case "RT":
              case "RTC":
              case "RUBY":
              case "S":
              case "SAMP":
              case "SMALL":
              case "SPAN":
              case "STRONG":
              case "SUB":
              case "SUP":
              case "TIME":
              case "U":
              case "VAR":
              case "WBR":
                return true;
              default:
                return false;
            }
        }
        return false;
      }(i)) {
        var d;
        let t = (d = i).nodeType === Node.TEXT_NODE ? d.nodeValue || "" : d.nodeType === Node.ELEMENT_NODE && d.innerText || "";
        if (t.replace(/\s+/g, "")) {
          e = r === "prev" ? t + e : e + t;
        }
        i = i[u];
      }
      if (e && l(e)) {
        return true;
      }
      if (i) {
        if (!a.some(e => i.nodeName === e) && i.childNodes.length) {
          let e = i;
          while (e[o]) {
            e = e[o];
          }
          let t = c(e, i, n + 1, r, l);
          if (t) {
            return t;
          }
        }
        i = i[u];
      }
    }
    if (e.parentNode !== t) {
      let a = s(e.parentNode, r, e => e === t);
      if (a) {
        return c(a, t, n + 1, r, l);
      }
    }
    return false;
  };
  function u(e, t = 800) {
    try {
      if (!e || e.rangeCount <= 0) {
        return "";
      }
      let n = e.toString();
      if (!n.trim()) {
        return "";
      }
      let r = e.getRangeAt(0);
      if (!r) {
        return "";
      }
      return (function (e, t) {
        let n = e.startContainer;
        let r = "";
        switch (n.nodeType) {
          case Node.TEXT_NODE:
            {
              let {
                textContent: t
              } = n;
              if (t) {
                r = t.slice(0, e.startOffset);
              }
              break;
            }
          case Node.COMMENT_NODE:
          case Node.CDATA_SECTION_NODE:
            break;
          default:
            n = n.childNodes[e.startOffset];
        }
        let a = s(n, "prev");
        if (a) {
          c(a, document.body, 0, "prev", e => {
            let n = o(e);
            return i(r = `${n}
${r}`, t);
          });
        }
        return r;
      }(r, t / 2) + n + function (e, t) {
        let n = e.endContainer;
        let r = "";
        switch (n.nodeType) {
          case Node.TEXT_NODE:
            {
              let {
                textContent: t
              } = n;
              if (t) {
                r = t.slice(e.endOffset);
              }
              break;
            }
          case Node.COMMENT_NODE:
          case Node.CDATA_SECTION_NODE:
            break;
          default:
            n = n.childNodes[e.endOffset - 1];
        }
        let a = s(n, "next");
        if (a) {
          c(a, document.body, 0, "next", e => {
            let n = o(e);
            return i(r = `${r}
${n}`, t);
          });
        }
        return r;
      }(r, t / 2)).trim();
    } catch (e) {
      return "";
    }
  }
  function d(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let h = ["width", "height", "max-width", "max-height", "min-width", "min-height", "padding-top", "padding-bottom", "padding-left", "padding-right", "border", "box-sizing", "line-height", "text-indent", "text-align", "font-size", "font-family", "font-weight", "font-style", "font-variant", "letter-spacing", "white-space", "word-spacing", "word-wrap", "word-break", "position", "overflow"];
  let p = class {
    getStyles(e, t = h) {
      let n = window.getComputedStyle(e);
      let r = {};
      t.map(t => {
        let a = function (e, t = ["-", "_"]) {
          let n = [];
          let r = 0;
          let a = new Set(t);
          while (r < e.length) {
            if (a.has(e[r])) {
              n.push(e[r + 1].toUpperCase());
              r++;
            } else {
              n.push(e[r]);
            }
            r++;
          }
          return n.join("");
        }(t);
        let l = n.getPropertyValue(t);
        if (["width", "height"].includes(t) && l === "auto") {
          let t = e.getBoundingClientRect();
          r[a] = `${t[a]}px`;
          return;
        }
        if (["max-width", "max-height", "min-width", "min-height"].includes(t)) {
          r[a] = this.convertPercentToPx(e, t, l);
          return;
        }
        r[a] = l;
      });
      return r;
    }
    getStyle(e, t) {
      return window.getComputedStyle(e).getPropertyValue(t);
    }
    getCssText(e, t = h) {
      let n = window.getComputedStyle(e);
      return t.map(t => {
        let r = n.getPropertyValue(t);
        if (["width", "height"].includes(t) && r === "auto") {
          let n = e.getBoundingClientRect();
          return `${t}: ${n[t]}px`;
        }
        if (["max-width", "max-height", "min-width", "min-height"].includes(t)) {
          return `${t}: ${this.convertPercentToPx(e, t, r)}`;
        } else {
          return `${t}: ${r}`;
        }
      }).join(";");
    }
    getFontStyles(e) {
      let t = window.getComputedStyle(e);
      return {
        fontFamily: t.getPropertyValue("font-family"),
        fontSize: parseFloat(t.getPropertyValue("font-size")),
        fontWeight: parseFloat(t.getPropertyValue("font-weight")),
        lineHeight: parseFloat(t.getPropertyValue("line-height"))
      };
    }
    getContentBox(e) {
      return {
        width: e.scrollWidth,
        height: e.scrollHeight
      };
    }
    getScrollbarWidth(e) {
      let t = window.getComputedStyle(e);
      let n = parseFloat(t.getPropertyValue("border-left-width")) || 0;
      let r = parseFloat(t.getPropertyValue("border-right-width")) || 0;
      return e.offsetWidth - e.clientWidth - n - r;
    }
    convertPercentToPx(e, t, n) {
      if (!n.includes("%")) {
        return n;
      }
      let r = parseFloat(n) / 100;
      let a = e.parentElement;
      if (!a) {
        return "none";
      }
      let l = window.getComputedStyle(a);
      let i = parseFloat(l.getPropertyValue("width"));
      let o = parseFloat(l.getPropertyValue("height"));
      let s = l.getPropertyValue("box-sizing");
      let c = parseFloat(l.getPropertyValue("border-width"));
      let u = parseFloat(l.getPropertyValue("padding-left"));
      let d = parseFloat(l.getPropertyValue("padding-right"));
      let h = parseFloat(l.getPropertyValue("padding-top"));
      let p = parseFloat(l.getPropertyValue("padding-bottom"));
      let f = i;
      let g = o;
      if (s === "border-box") {
        f = i - u - d - c * 2;
        g = o - h - p - c * 2;
      }
      if (t.includes("height")) {
        return `${g * r}px`;
      } else {
        return `${f * r}px`;
      }
    }
  };
  let f = class {
    measureText(e, t, n) {
      let r = this.domMeasurement.getStyle(e, "display");
      let a = this.domMeasurement.getCssText(e);
      this.mirrorTextNode.style.cssText = a;
      if (r === "inline") {
        this.mirrorTextNode.style.textAlign = "initial";
      }
      this.mirrorTextNode.innerHTML = t.split("").map(e => `<span>${e}</span>`).join("");
      return this.doMeasureText({
        element: e,
        display: r,
        text: t,
        index: n
      });
    }
    loadElement(e, t) {
      let n = this.domMeasurement.getStyle(e, "display");
      let r = parseFloat(this.domMeasurement.getStyle(e, "width"));
      let a = this.domMeasurement.getScrollbarWidth(e);
      let l = this.domMeasurement.getCssText(e);
      l += `; height: auto; max-height: none; width: ${r - a}px; overflow: hidden;`;
      if (n === "inline") {
        l += "; text-align: initial";
      }
      this.mirrorTextNode.style.cssText = l;
      this.mirrorTextNode.innerHTML = t.split("").map(e => `<span>${e}</span>`).join("");
      return {
        measureText: r => this.doMeasureText({
          element: e,
          display: n,
          text: t,
          index: r
        })
      };
    }
    destroy() {
      this.mirrorContainer.remove();
    }
    doMeasureText(e) {
      let {
        element: t,
        display: n,
        index: r,
        text: a
      } = e;
      if (r < 0 || r > a.length - 1) {
        throw Error(`char indexing(index: ${r})overflowed, allowed range:0 - ${a.length - 1}`);
      }
      let {
        offsetLeft: l,
        offsetTop: i,
        offsetHeight: o,
        offsetWidth: s
      } = this.mirrorTextNode.querySelector(`span:nth-child(${r + 1})`);
      let c = 0;
      if (n === "inline") {
        let e = this.mirrorTextNode.querySelector("span:nth-child(1)");
        if (e) {
          c = e.offsetTop;
        }
      }
      let u = i;
      let d = l;
      if (a[r] === `
` && r === a.length - 1) {
        u += parseFloat(this.domMeasurement.getStyle(t, "line-height"));
        d = 0;
      }
      return {
        left: d,
        right: d + s,
        top: u,
        bottom: u + o,
        width: s,
        height: o,
        deviation: c
      };
    }
    initMirrorTextarea() {
      let e = document.createElement("div");
      this.mirrorContainer = e;
      e.setAttribute("contenteditable", "false");
      e.id = this.nodeId;
      e.style.position = "absolute";
      e.style.width = "0px";
      e.style.height = "0px";
      e.style.overflow = "hidden";
      document.body.appendChild(e);
      let t = e.shadowRoot || e.attachShadow({
        mode: "open"
      });
      if (!this.mirrorTextNode) {
        let e = document.createElement("div");
        e.className = "mirror-text-container";
        t.appendChild(e);
        this.mirrorTextNode = e;
        this.mirrorTextNode.style.display = "block";
      }
    }
    constructor() {
      d(this, "nodeId", "-aichat-mirrorTextNode");
      d(this, "mirrorTextNode", undefined);
      d(this, "domMeasurement", new p());
      d(this, "mirrorContainer", undefined);
      if (!document) {
        throw Error("TextareaMeasurement can only be run under DOM environment");
      }
      this.initMirrorTextarea();
    }
  };
  var g = new class {
    getSelectionRect(e) {
      if (!e.collapsed) {
        let t = e.getBoundingClientRect();
        if (t.width !== 0 || t.height !== 0) {
          return t;
        }
      }
      let t = e.startContainer;
      if (t instanceof HTMLElement) {
        let n = t.childNodes[e.startOffset];
        if (n && this.isBasicInput(n)) {
          let e = this.getSelectionRectForBasicInputV2(n);
          e.left = Math.round(e.left);
          e.right = Math.round(e.right);
          e.top = Math.round(e.top);
          e.bottom = Math.round(e.bottom);
          e.width = Math.round(e.width);
          e.height = Math.round(e.height);
          return e;
        }
      }
      return null;
    }
    getSelectedText(e) {
      if (e.commonAncestorContainer.nodeType === Node.TEXT_NODE) {
        let t = o(e.commonAncestorContainer.parentElement);
        if (t.selectable) {
          return i(t.whiteSpaceType, e.commonAncestorContainer.textContent.slice(e.startOffset, e.endOffset).trim());
        } else {
          return "";
        }
      }
      if (e.startContainer instanceof HTMLElement) {
        let t = e.startContainer.childNodes[e.startOffset];
        if (t && this.isBasicInput(t)) {
          if (!o(t).selectable) {
            return "";
          }
          let {
            selectionStart: e,
            selectionEnd: n
          } = t;
          return t.value.slice(e, n).trim();
        }
      }
      let t = [];
      let n = false;
      let r = false;
      let a = (l, s) => {
        if (l.nodeType === Node.TEXT_NODE) {
          (function (a, l) {
            function o(e) {
              return i(l.whiteSpaceType, e);
            }
            if (a === e.startContainer) {
              n = true;
            }
            if (n && a.nodeType === Node.TEXT_NODE && l.selectable) {
              if (a === e.startContainer && a === e.endContainer) {
                t.push({
                  content: o(a.textContent.slice(e.startOffset, e.endOffset))
                });
              } else if (a === e.startContainer) {
                t.push({
                  content: o(a.textContent.slice(e.startOffset))
                });
              } else if (a === e.endContainer) {
                t.push({
                  content: o(a.textContent.slice(0, e.endOffset))
                });
              } else {
                t.push({
                  content: o(a.textContent)
                });
              }
            }
            if (a === e.endContainer) {
              r = true;
            }
          })(l, s);
        } else if (l.nodeType === Node.ELEMENT_NODE) {
          (function (l) {
            var i;
            var s;
            if (l === e.startContainer) {
              n = true;
            }
            if (l === e.endContainer) {
              r = true;
              return;
            }
            let c = o(l);
            if (c.selectable) {
              t.push({
                content: " "
              });
            }
            for (let e of l.childNodes) {
              a(e, c);
              if (r) {
                break;
              }
            }
            if (c.selectable) {
              i = l;
              s = c.style;
              if (i.tagName !== "BR" && s.display.startsWith("inline")) {
                t.push({
                  content: " "
                });
              } else {
                t.push({
                  content: `
`
                });
              }
            }
          })(l);
        }
      };
      let l;
      l = e.commonAncestorContainer instanceof HTMLElement ? o(e.commonAncestorContainer) : o(e.commonAncestorContainer.parentElement);
      a(e.commonAncestorContainer, l);
      return t.map(e => e.content).join("").trim().split(`
`).map(e => e.trim()).join(`
`).replace(/\n\n+/g, `

`).replace(/  +/g, " ");
      function i(e, t) {
        if (e === "normal") {
          return t.split(`
`).map(e => e.trim()).join("");
        } else if (e === "keepNewLine") {
          return t.split(`
`).map(e => e.trim()).join(`
`);
        } else {
          return t;
        }
      }
      function o(e) {
        let t;
        let n = getComputedStyle(e);
        if (e.tagName === "SCRIPT" || e.tagName === "STYLE" || n.userSelect === "none" || n.opacity === "0" || n.display === "none" || n.visibility === "hidden") {
          return {
            style: n,
            selectable: false,
            whiteSpaceType: "normal"
          };
        } else {
          t = n.whiteSpace === "pre-line" ? "keepNewLine" : n.whiteSpace.startsWith("pre") || n.whiteSpace === "break-spaces" ? "keepNewLineAndSpace" : "normal";
          return {
            style: n,
            selectable: true,
            whiteSpaceType: t
          };
        }
      }
    }
    isBasicInput(e) {
      return e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement;
    }
    getSelectionRectForBasicInputV2(e) {
      let t = e.getBoundingClientRect();
      let n = e.selectionStart;
      let r = e.selectionEnd - 1;
      let a = e.scrollTop;
      let l = e.value;
      let i = new f();
      let {
        measureText: o
      } = i.loadElement(e, e.value);
      let s = o(n);
      let c = o(r);
      if (s.top === c.top) {
        i.destroy();
        return {
          left: t.left + s.left,
          right: t.left + c.left,
          top: t.top + s.top - a,
          bottom: t.top + c.bottom,
          width: c.left - s.left,
          height: c.bottom - s.top
        };
      }
      let u = "";
      let d = "";
      let h = n;
      let p = n;
      for (let e = n; e <= r; e++) {
        let t = l[e];
        if (t === `
` || e === r) {
          if (d.length > u.length) {
            u = d;
            h = p;
          }
          d = "";
          p = e + 1;
        } else {
          d += t;
        }
      }
      let g = o(h);
      let m = o(h + u.length);
      if (g.top !== m.top) {
        i.destroy();
        return {
          left: t.left,
          right: t.right,
          top: t.top + s.top - a,
          bottom: t.top + c.bottom,
          width: t.width,
          height: c.bottom - s.top
        };
      }
      let v = Math.min(s.left, c.left, g.left, m.left);
      let x = Math.max(s.left, c.left, g.left, m.left);
      i.destroy();
      return {
        left: t.left + v,
        right: t.left + x,
        top: t.top + s.top - a,
        bottom: t.top + c.bottom,
        width: x - v,
        height: c.bottom - s.top
      };
    }
  }();
  let m = e => {
    if (!e || e.rangeCount < 1) {
      return;
    }
    let t = e.getRangeAt(0);
    let n = g.getSelectionRect(t);
    if (!n) {
      return;
    }
    let {
      top: r,
      left: a,
      bottom: l,
      right: i,
      width: o,
      height: s
    } = n;
    return {
      top: r,
      left: a,
      bottom: l,
      right: i,
      width: o,
      height: s
    };
  };
  let v = e => {
    let {
      target: t,
      page: n
    } = e;
    if (!window.getSelection) {
      return;
    }
    let {
      left: r,
      top: a,
      width: l,
      height: i
    } = t.getBoundingClientRect();
    let o = window.getSelection();
    let s = o ? o.toString() : "";
    if (s.trim() !== "") {
      let e = m(o);
      if (!e) {
        return;
      }
      return {
        ...e,
        page: n,
        text: s,
        contextText: u(o),
        area: [(e.left - r) / l, (e.top - a) / i, (e.right - r) / l, (e.bottom - a) / i]
      };
    }
  };
  let x = e => {
    let {
      target: t
    } = e;
    if (!window.getSelection) {
      return;
    }
    let {
      left: n,
      top: r
    } = t.getBoundingClientRect();
    let a = window.getSelection();
    let l = a ? a.toString() : "";
    if (l.trim() !== "") {
      let e = m(a);
      if (!e) {
        return;
      }
      let t = e.left - n;
      let i = e.top - r;
      let o = t + e.width;
      let s = i + e.height;
      return {
        ...e,
        text: l,
        contextText: u(a),
        area: [t, i, o, s]
      };
    }
  };
  require.d(exports, {
    getSelectionData: function () {
      return v;
    },
    getSelectionCoords: function () {
      return x;
    }
  });
}