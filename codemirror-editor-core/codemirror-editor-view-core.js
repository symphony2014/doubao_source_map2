// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l9' to 'Decoration'
// - Renamed export 'Zs' to 'columnSelection'
// - Renamed export 'SJ' to 'RangeValue'
// - Renamed export 'Uw' to 'cursorConfig'
// - Renamed export 'lg' to 'Plugin'
// - Renamed export 'tk' to 'EditorView'
// - Renamed export 'v5' to 'gutterConfig'
// - Renamed export '$f' to 'keymapFacet'
// - Renamed export '$1' to 'keyBindingHandler'
// - Renamed export 'v7' to 'gutterMarkers'
// - Renamed export 'qr' to 'dropCursor'
// - Renamed export 'Sd' to 'activeLineGutter'
// - Renamed export 'AE' to 'specialChars'
// - Renamed export 'gB' to 'tooltipLookup'
// - Renamed export 'W$' to 'placeholder'
// - Renamed export 'bF' to 'crosshairCursor'
// - Renamed export 'Eu' to 'lineNumbers'
// - Renamed export 'HQ' to 'activeLine'
// - Renamed export 'ZO' to 'errorHandler'
// - Renamed export 'OO' to 'DecorationType'
// - Renamed export 'p' to 'decorationClass'
// - Renamed export 'mH' to 'panelsFacet'
// - Renamed export 'hJ' to 'tooltipsFacet'
// - Renamed export 'S2' to 'textDirection'
// - Renamed export 'Nm' to 'directionConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53909.8afb4c62.js
         * chunkId: 53909
         * moduleId: 928053
         */
module.exports = function (module, exports, require) {
  let n;
  var s;
  var r;
  var o;
  var codemirrorStateCore = require("codemirror-state-core") /*id: 980017*/;
  var cssStyleManager = require("css-style-manager") /*id: 140542*/;
  var h = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
  };
  var c = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: "\""
  };
  var u = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
  var f = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
  var d = 0;
  for (; d < 10; d++) {
    h[48 + d] = h[96 + d] = String(d);
  }
  for (var d = 1; d <= 24; d++) {
    h[d + 111] = "F" + d;
  }
  for (var d = 65; d <= 90; d++) {
    h[d] = String.fromCharCode(d + 32);
    c[d] = String.fromCharCode(d);
  }
  for (var p in h) {
    if (!c.hasOwnProperty(p)) {
      c[p] = h[p];
    }
  }
  function m(t) {
    let e;
    return (t.nodeType == 11 ? t.getSelection ? t : t.ownerDocument : t).getSelection();
  }
  function g(t, e) {
    return !!e && (t == e || t.contains(e.nodeType != 1 ? e.parentNode : e));
  }
  function v(t, e) {
    if (!e.anchorNode) {
      return false;
    }
    try {
      return g(t, e.anchorNode);
    } catch (t) {
      return false;
    }
  }
  function b(t) {
    if (t.nodeType == 3) {
      return D(t, 0, t.nodeValue.length).getClientRects();
    } else if (t.nodeType == 1) {
      return t.getClientRects();
    } else {
      return [];
    }
  }
  function w(t, e, i, n) {
    return !!i && (k(t, e, i, n, -1) || k(t, e, i, n, 1));
  }
  function y(t) {
    for (var e = 0;; e++) {
      if (!(t = t.previousSibling)) {
        return e;
      }
    }
  }
  function x(t) {
    return t.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName);
  }
  function k(t, e, i, n, s) {
    while (true) {
      if (t == i && e == n) {
        return true;
      }
      if (e == (s < 0 ? 0 : S(t))) {
        if (t.nodeName == "DIV") {
          return false;
        }
        let i = t.parentNode;
        if (!i || i.nodeType != 1) {
          return false;
        }
        e = y(t) + (s < 0 ? 0 : 1);
        t = i;
      } else {
        if (t.nodeType != 1 || (t = t.childNodes[e + (s < 0 ? -1 : 0)]).nodeType == 1 && t.contentEditable == "false") {
          return false;
        }
        e = s < 0 ? S(t) : 0;
      }
    }
  }
  function S(t) {
    if (t.nodeType == 3) {
      return t.nodeValue.length;
    } else {
      return t.childNodes.length;
    }
  }
  function C(t, e) {
    let i = e ? t.left : t.right;
    return {
      left: i,
      right: i,
      top: t.top,
      bottom: t.bottom
    };
  }
  function M(t, e) {
    let i = e.width / t.offsetWidth;
    let n = e.height / t.offsetHeight;
    if (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.width - t.offsetWidth) < 1) {
      i = 1;
    }
    if (n > 0.995 && n < 1.005 || !isFinite(n) || Math.abs(e.height - t.offsetHeight) < 1) {
      n = 1;
    }
    return {
      scaleX: i,
      scaleY: n
    };
  }
  class A {
    constructor() {
      this.anchorNode = null;
      this.anchorOffset = 0;
      this.focusNode = null;
      this.focusOffset = 0;
    }
    eq(t) {
      return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset;
    }
    setRange(t) {
      let {
        anchorNode: e,
        focusNode: i
      } = t;
      this.set(e, Math.min(t.anchorOffset, e ? S(e) : 0), i, Math.min(t.focusOffset, i ? S(i) : 0));
    }
    set(t, e, i, n) {
      this.anchorNode = t;
      this.anchorOffset = e;
      this.focusNode = i;
      this.focusOffset = n;
    }
  }
  let T = null;
  function O(t) {
    if (t.setActive) {
      return t.setActive();
    }
    if (T) {
      return t.focus(T);
    }
    let e = [];
    for (let i = t; i && (e.push(i, i.scrollTop, i.scrollLeft), i != i.ownerDocument); i = i.parentNode);
    t.focus(T == null ? {
      get preventScroll() {
        T = {
          preventScroll: true
        };
        return true;
      }
    } : undefined);
    if (!T) {
      T = false;
      for (let t = 0; t < e.length;) {
        let i = e[t++];
        let n = e[t++];
        let s = e[t++];
        if (i.scrollTop != n) {
          i.scrollTop = n;
        }
        if (i.scrollLeft != s) {
          i.scrollLeft = s;
        }
      }
    }
  }
  function D(t, e, i = e) {
    let s = n ||= document.createRange();
    s.setEnd(t, i);
    s.setStart(t, e);
    return s;
  }
  function P(t, e, i, n) {
    let s = {
      key: e,
      code: e,
      keyCode: i,
      which: i,
      cancelable: true
    };
    if (n) {
      ({
        altKey: s.altKey,
        ctrlKey: s.ctrlKey,
        shiftKey: s.shiftKey,
        metaKey: s.metaKey
      } = n);
    }
    let r = new KeyboardEvent("keydown", s);
    r.synthetic = true;
    t.dispatchEvent(r);
    let o = new KeyboardEvent("keyup", s);
    o.synthetic = true;
    t.dispatchEvent(o);
    return r.defaultPrevented || o.defaultPrevented;
  }
  function E(t) {
    while (t.attributes.length) {
      t.removeAttributeNode(t.attributes[0]);
    }
  }
  function R(t) {
    return t.scrollTop > Math.max(1, t.scrollHeight - t.clientHeight - 4);
  }
  function L(t, e) {
    for (let i = t, n = e;;) {
      if (i.nodeType == 3 && n > 0) {
        return {
          node: i,
          offset: n
        };
      }
      if (i.nodeType == 1 && n > 0) {
        if (i.contentEditable == "false") {
          return null;
        }
        n = S(i = i.childNodes[n - 1]);
      } else {
        if (!i.parentNode || x(i)) {
          return null;
        }
        n = y(i);
        i = i.parentNode;
      }
    }
  }
  function B(t, e) {
    for (let i = t, n = e;;) {
      if (i.nodeType == 3 && n < i.nodeValue.length) {
        return {
          node: i,
          offset: n
        };
      }
      if (i.nodeType == 1 && n < i.childNodes.length) {
        if (i.contentEditable == "false") {
          return null;
        }
        i = i.childNodes[n];
        n = 0;
      } else {
        if (!i.parentNode || x(i)) {
          return null;
        }
        n = y(i) + 1;
        i = i.parentNode;
      }
    }
  }
  class I {
    constructor(t, e, i = true) {
      this.node = t;
      this.offset = e;
      this.precise = i;
    }
    static before(t, e) {
      return new I(t.parentNode, y(t), e);
    }
    static after(t, e) {
      return new I(t.parentNode, y(t) + 1, e);
    }
  }
  let N = [];
  class V {
    constructor() {
      this.parent = null;
      this.dom = null;
      this.flags = 2;
    }
    get overrideDOMText() {
      return null;
    }
    get posAtStart() {
      if (this.parent) {
        return this.parent.posBefore(this);
      } else {
        return 0;
      }
    }
    get posAtEnd() {
      return this.posAtStart + this.length;
    }
    posBefore(t) {
      let e = this.posAtStart;
      for (let i of this.children) {
        if (i == t) {
          return e;
        }
        e += i.length + i.breakAfter;
      }
      throw RangeError("Invalid child in posBefore");
    }
    posAfter(t) {
      return this.posBefore(t) + t.length;
    }
    sync(t, e) {
      if (this.flags & 2) {
        let i = this.dom;
        let n = null;
        let s;
        for (let r of this.children) {
          if (r.flags & 7) {
            if (!r.dom && (s = n ? n.nextSibling : i.firstChild)) {
              let t = V.get(s);
              if (!t || !t.parent && t.canReuseDOM(r)) {
                r.reuseDOM(s);
              }
            }
            r.sync(t, e);
            r.flags &= -8;
          }
          s = n ? n.nextSibling : i.firstChild;
          if (e && !e.written && e.node == i && s != r.dom) {
            e.written = true;
          }
          if (r.dom.parentNode == i) {
            while (s && s != r.dom) {
              s = F(s);
            }
          } else {
            i.insertBefore(r.dom, s);
          }
          n = r.dom;
        }
        for ((s = n ? n.nextSibling : i.firstChild) && e && e.node == i && (e.written = true); s;) {
          s = F(s);
        }
      } else if (this.flags & 1) {
        for (let i of this.children) {
          if (i.flags & 7) {
            i.sync(t, e);
            i.flags &= -8;
          }
        }
      }
    }
    reuseDOM(t) {}
    localPosFromDOM(t, e) {
      let i;
      if (t == this.dom) {
        i = this.dom.childNodes[e];
      } else {
        let n = S(t) == 0 ? 0 : e == 0 ? -1 : 1;
        while (true) {
          let e = t.parentNode;
          if (e == this.dom) {
            break;
          }
          if (n == 0 && e.firstChild != e.lastChild) {
            n = t == e.firstChild ? -1 : 1;
          }
          t = e;
        }
        i = n < 0 ? t : t.nextSibling;
      }
      if (i == this.dom.firstChild) {
        return 0;
      }
      while (i && !V.get(i)) {
        i = i.nextSibling;
      }
      if (!i) {
        return this.length;
      }
      for (let t = 0, e = 0;; t++) {
        let n = this.children[t];
        if (n.dom == i) {
          return e;
        }
        e += n.length + n.breakAfter;
      }
    }
    domBoundsAround(t, e, i = 0) {
      let n = -1;
      let s = -1;
      let r = -1;
      let o = -1;
      for (let l = 0, a = i, h = i; l < this.children.length; l++) {
        let i = this.children[l];
        let c = a + i.length;
        if (a < t && c > e) {
          return i.domBoundsAround(t, e, a);
        }
        if (c >= t && n == -1) {
          n = l;
          s = a;
        }
        if (a > e && i.dom.parentNode == this.dom) {
          r = l;
          o = h;
          break;
        }
        h = c;
        a = c + i.breakAfter;
      }
      return {
        from: s,
        to: o < 0 ? i + this.length : o,
        startDOM: (n ? this.children[n - 1].dom.nextSibling : null) || this.dom.firstChild,
        endDOM: r < this.children.length && r >= 0 ? this.children[r].dom : null
      };
    }
    markDirty(t = false) {
      this.flags |= 2;
      this.markParentsDirty(t);
    }
    markParentsDirty(t) {
      for (let e = this.parent; e; e = e.parent) {
        if (t) {
          e.flags |= 2;
        }
        if (e.flags & 1) {
          return;
        }
        e.flags |= 1;
        t = false;
      }
    }
    setParent(t) {
      if (this.parent != t) {
        this.parent = t;
        if (this.flags & 7) {
          this.markParentsDirty(true);
        }
      }
    }
    setDOM(t) {
      if (this.dom != t) {
        if (this.dom) {
          this.dom.cmView = null;
        }
        this.dom = t;
        t.cmView = this;
      }
    }
    get rootView() {
      for (let t = this;;) {
        let e = t.parent;
        if (!e) {
          return t;
        }
        t = e;
      }
    }
    replaceChildren(t, e, i = N) {
      this.markDirty();
      for (let n = t; n < e; n++) {
        let t = this.children[n];
        if (t.parent == this && i.indexOf(t) < 0) {
          t.destroy();
        }
      }
      if (i.length < 250) {
        this.children.splice(t, e - t, ...i);
      } else {
        this.children = [].concat(this.children.slice(0, t), i, this.children.slice(e));
      }
      for (let t = 0; t < i.length; t++) {
        i[t].setParent(this);
      }
    }
    ignoreMutation(t) {
      return false;
    }
    ignoreEvent(t) {
      return false;
    }
    childCursor(t = this.length) {
      return new j(this.children, t, this.children.length);
    }
    childPos(t, e = 1) {
      return this.childCursor().findPos(t, e);
    }
    toString() {
      let t = this.constructor.name.replace("View", "");
      return t + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (t == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
    }
    static get(t) {
      return t.cmView;
    }
    get isEditable() {
      return true;
    }
    get isWidget() {
      return false;
    }
    get isHidden() {
      return false;
    }
    merge(t, e, i, n, s, r) {
      return false;
    }
    become(t) {
      return false;
    }
    canReuseDOM(t) {
      return t.constructor == this.constructor && !((this.flags | t.flags) & 8);
    }
    getSide() {
      return 0;
    }
    destroy() {
      for (let t of this.children) {
        if (t.parent == this) {
          t.destroy();
        }
      }
      this.parent = null;
    }
  }
  function F(t) {
    let e = t.nextSibling;
    t.parentNode.removeChild(t);
    return e;
  }
  V.prototype.breakAfter = 0;
  class j {
    constructor(t, e, i) {
      this.children = t;
      this.pos = e;
      this.i = i;
      this.off = 0;
    }
    findPos(t, e = 1) {
      while (true) {
        if (t > this.pos || t == this.pos && (e > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) {
          this.off = t - this.pos;
          return this;
        }
        let i = this.children[--this.i];
        this.pos -= i.length + i.breakAfter;
      }
    }
  }
  function H(t, e, i, n, s, r, o, l, a) {
    let {
      children: h
    } = t;
    let c = h.length ? h[e] : null;
    let u = r.length ? r[r.length - 1] : null;
    let f = u ? u.breakAfter : o;
    if (e != n || !c || !!o || !!f || !(r.length < 2) || !c.merge(i, s, r.length ? u : null, i == 0, l, a)) {
      if (n < h.length) {
        let t = h[n];
        if (t && (s < t.length || t.breakAfter && (u == null ? undefined : u.breakAfter))) {
          if (e == n) {
            t = t.split(s);
            s = 0;
          }
          if (!f && u && t.merge(0, s, u, true, 0, a)) {
            r[r.length - 1] = t;
          } else {
            if (s || t.children.length && !t.children[0].length) {
              t.merge(0, s, null, false, 0, a);
            }
            r.push(t);
          }
        } else if (t == null ? undefined : t.breakAfter) {
          if (u) {
            u.breakAfter = 1;
          } else {
            o = 1;
          }
        }
        n++;
      }
      for (c && (c.breakAfter = o, i > 0 && (!o && r.length && c.merge(i, c.length, r[0], false, l, 0) ? c.breakAfter = r.shift().breakAfter : (i < c.length || c.children.length && c.children[c.children.length - 1].length == 0) && c.merge(i, c.length, null, false, l, 0), e++)); e < n && r.length;) {
        if (h[n - 1].become(r[r.length - 1])) {
          n--;
          r.pop();
          a = r.length ? 0 : l;
        } else if (h[e].become(r[0])) {
          e++;
          r.shift();
          l = r.length ? 0 : a;
        } else {
          break;
        }
      }
      if (!r.length && e && n < h.length && !h[e - 1].breakAfter && h[n].merge(0, 0, h[e - 1], false, l, a)) {
        e--;
      }
      if (e < n || r.length) {
        t.replaceChildren(e, n, r);
      }
    }
  }
  function W(t, e, i, n, s, r) {
    let o = t.childCursor();
    let {
      i: l,
      off: a
    } = o.findPos(i, 1);
    let {
      i: h,
      off: c
    } = o.findPos(e, -1);
    let u = e - i;
    for (let t of n) {
      u += t.length;
    }
    t.length += u;
    H(t, h, c, l, a, n, 0, s, r);
  }
  let z = typeof navigator != "undefined" ? navigator : {
    userAgent: "",
    vendor: "",
    platform: ""
  };
  let q = typeof document != "undefined" ? document : {
    documentElement: {
      style: {}
    }
  };
  let $ = /Edge\/(\d+)/.exec(z.userAgent);
  let J = /MSIE \d/.test(z.userAgent);
  let _ = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(z.userAgent);
  let K = !!J || !!_ || !!$;
  let U = !K && /gecko\/(\d+)/i.test(z.userAgent);
  let G = !K && /Chrome\/(\d+)/.exec(z.userAgent);
  let Q = "webkitFontSmoothing" in q.documentElement.style;
  let X = !K && /Apple Computer/.test(z.vendor);
  let Y = X && (/Mobile\/\w+/.test(z.userAgent) || z.maxTouchPoints > 2);
  var Z = {
    mac: Y || /Mac/.test(z.platform),
    windows: /Win/.test(z.platform),
    linux: /Linux|X11/.test(z.platform),
    ie: K,
    ie_version: J ? q.documentMode || 6 : _ ? +_[1] : $ ? +$[1] : 0,
    gecko: U,
    gecko_version: U ? +(/Firefox\/(\d+)/.exec(z.userAgent) || [0, 0])[1] : 0,
    chrome: !!G,
    chrome_version: G ? +G[1] : 0,
    ios: Y,
    android: /Android\b/.test(z.userAgent),
    webkit: Q,
    safari: X,
    webkit_version: Q ? +(/\bAppleWebKit\/(\d+)/.exec(z.userAgent) || [0, 0])[1] : 0,
    tabSize: q.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
  };
  class tt extends V {
    constructor(t) {
      super();
      this.text = t;
    }
    get length() {
      return this.text.length;
    }
    createDOM(t) {
      this.setDOM(t || document.createTextNode(this.text));
    }
    sync(t, e) {
      if (!this.dom) {
        this.createDOM();
      }
      if (this.dom.nodeValue != this.text) {
        if (e && e.node == this.dom) {
          e.written = true;
        }
        this.dom.nodeValue = this.text;
      }
    }
    reuseDOM(t) {
      if (t.nodeType == 3) {
        this.createDOM(t);
      }
    }
    merge(t, e, i) {
      return !(this.flags & 8) && (!i || i instanceof tt && !(this.length - (e - t) + i.length > 256) && !(i.flags & 8)) && (this.text = this.text.slice(0, t) + (i ? i.text : "") + this.text.slice(e), this.markDirty(), true);
    }
    split(t) {
      let e = new tt(this.text.slice(t));
      this.text = this.text.slice(0, t);
      this.markDirty();
      e.flags |= this.flags & 8;
      return e;
    }
    localPosFromDOM(t, e) {
      if (t == this.dom) {
        return e;
      } else if (e) {
        return this.text.length;
      } else {
        return 0;
      }
    }
    domAtPos(t) {
      return new I(this.dom, t);
    }
    domBoundsAround(t, e, i) {
      return {
        from: i,
        to: i + this.length,
        startDOM: this.dom,
        endDOM: this.dom.nextSibling
      };
    }
    coordsAt(t, e) {
      return function (t, e, i) {
        let n = t.nodeValue.length;
        if (e > n) {
          e = n;
        }
        let s = e;
        let r = e;
        let o = 0;
        if (e == 0 && i < 0 || e == n && i >= 0) {
          if (!Z.chrome && !Z.gecko) {
            if (e) {
              s--;
              o = 1;
            } else if (r < n) {
              r++;
              o = -1;
            }
          }
        } else if (i < 0) {
          s--;
        } else if (r < n) {
          r++;
        }
        let l = D(t, s, r).getClientRects();
        if (!l.length) {
          return null;
        }
        let a = l[(o ? o < 0 : i >= 0) ? 0 : l.length - 1];
        if (Z.safari && !o && a.width == 0) {
          a = Array.prototype.find.call(l, t => t.width) || a;
        }
        if (o) {
          return C(a, o < 0);
        } else {
          return a || null;
        }
      }(this.dom, t, e);
    }
  }
  class te extends V {
    constructor(t, e = [], i = 0) {
      super();
      this.mark = t;
      this.children = e;
      this.length = i;
      for (let n of e) {
        n.setParent(this);
      }
    }
    setAttrs(t) {
      E(t);
      if (this.mark.class) {
        t.className = this.mark.class;
      }
      if (this.mark.attrs) {
        for (let e in this.mark.attrs) {
          t.setAttribute(e, this.mark.attrs[e]);
        }
      }
      return t;
    }
    canReuseDOM(t) {
      return super.canReuseDOM(t) && !((this.flags | t.flags) & 8);
    }
    reuseDOM(t) {
      if (t.nodeName == this.mark.tagName.toUpperCase()) {
        this.setDOM(t);
        this.flags |= 6;
      }
    }
    sync(t, e) {
      if (this.dom) {
        if (this.flags & 4) {
          this.setAttrs(this.dom);
        }
      } else {
        this.setDOM(this.setAttrs(document.createElement(this.mark.tagName)));
      }
      super.sync(t, e);
    }
    merge(t, e, i, n, s, r) {
      return (!i || !!(i instanceof te) && !!i.mark.eq(this.mark) && (!t || !(s <= 0)) && (!(e < this.length) || !(r <= 0))) && (W(this, t, e, i ? i.children.slice() : [], s - 1, r - 1), this.markDirty(), true);
    }
    split(t) {
      let e = [];
      let i = 0;
      let n = -1;
      let s = 0;
      for (let r of this.children) {
        let o = i + r.length;
        if (o > t) {
          e.push(i < t ? r.split(t - i) : r);
        }
        if (n < 0 && i >= t) {
          n = s;
        }
        i = o;
        s++;
      }
      let r = this.length - t;
      this.length = t;
      if (n > -1) {
        this.children.length = n;
        this.markDirty();
      }
      return new te(this.mark, e, r);
    }
    domAtPos(t) {
      return ts(this, t);
    }
    coordsAt(t, e) {
      return tr(this, t, e);
    }
  }
  class ti extends V {
    static create(t, e, i) {
      return new ti(t, e, i);
    }
    constructor(t, e, i) {
      super();
      this.widget = t;
      this.length = e;
      this.side = i;
      this.prevWidget = null;
    }
    split(t) {
      let e = ti.create(this.widget, this.length - t, this.side);
      this.length -= t;
      return e;
    }
    sync(t) {
      if (!this.dom || !this.widget.updateDOM(this.dom, t)) {
        if (this.dom && this.prevWidget) {
          this.prevWidget.destroy(this.dom);
        }
        this.prevWidget = null;
        this.setDOM(this.widget.toDOM(t));
        if (!this.widget.editable) {
          this.dom.contentEditable = "false";
        }
      }
    }
    getSide() {
      return this.side;
    }
    merge(t, e, i, n, s, r) {
      return (!i || i instanceof ti && !!this.widget.compare(i.widget) && (!(t > 0) || !(s <= 0)) && (!(e < this.length) || !(r <= 0))) && (this.length = t + (i ? i.length : 0) + (this.length - e), true);
    }
    become(t) {
      return t instanceof ti && t.side == this.side && this.widget.constructor == t.widget.constructor && (this.widget.compare(t.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, true);
    }
    ignoreMutation() {
      return true;
    }
    ignoreEvent(t) {
      return this.widget.ignoreEvent(t);
    }
    get overrideDOMText() {
      if (this.length == 0) {
        return codemirrorStateCore.Text.empty;
      }
      let t = this;
      while (t.parent) {
        t = t.parent;
      }
      let {
        view: e
      } = t;
      let i = e && e.state.doc;
      let n = this.posAtStart;
      if (i) {
        return i.slice(n, n + this.length);
      } else {
        return codemirrorStateCore.Text.empty;
      }
    }
    domAtPos(t) {
      if (this.length ? t == 0 : this.side > 0) {
        return I.before(this.dom);
      } else {
        return I.after(this.dom, t == this.length);
      }
    }
    domBoundsAround() {
      return null;
    }
    coordsAt(t, e) {
      let i = this.widget.coordsAt(this.dom, t, e);
      if (i) {
        return i;
      }
      let n = this.dom.getClientRects();
      let s = null;
      if (!n.length) {
        return null;
      }
      let r = this.side ? this.side < 0 : t > 0;
      for (let e = r ? n.length - 1 : 0; s = n[e], t > 0 ? e != 0 : e != n.length - 1 && !(s.top < s.bottom); e += r ? -1 : 1);
      return C(s, !r);
    }
    get isEditable() {
      return false;
    }
    get isWidget() {
      return true;
    }
    get isHidden() {
      return this.widget.isHidden;
    }
    destroy() {
      super.destroy();
      if (this.dom) {
        this.widget.destroy(this.dom);
      }
    }
  }
  class tn extends V {
    constructor(t) {
      super();
      this.side = t;
    }
    get length() {
      return 0;
    }
    merge() {
      return false;
    }
    become(t) {
      return t instanceof tn && t.side == this.side;
    }
    split() {
      return new tn(this.side);
    }
    sync() {
      if (!this.dom) {
        let t = document.createElement("img");
        t.className = "cm-widgetBuffer";
        t.setAttribute("aria-hidden", "true");
        this.setDOM(t);
      }
    }
    getSide() {
      return this.side;
    }
    domAtPos(t) {
      if (this.side > 0) {
        return I.before(this.dom);
      } else {
        return I.after(this.dom);
      }
    }
    localPosFromDOM() {
      return 0;
    }
    domBoundsAround() {
      return null;
    }
    coordsAt(t) {
      return this.dom.getBoundingClientRect();
    }
    get overrideDOMText() {
      return codemirrorStateCore.Text.empty;
    }
    get isHidden() {
      return true;
    }
  }
  function ts(t, e) {
    let i = t.dom;
    let {
      children: n
    } = t;
    let s = 0;
    for (let t = 0; s < n.length; s++) {
      let r = n[s];
      let o = t + r.length;
      if (o != t || !(r.getSide() <= 0)) {
        if (e > t && e < o && r.dom.parentNode == i) {
          return r.domAtPos(e - t);
        }
        if (e <= t) {
          break;
        }
        t = o;
      }
    }
    for (let t = s; t > 0; t--) {
      let e = n[t - 1];
      if (e.dom.parentNode == i) {
        return e.domAtPos(e.length);
      }
    }
    for (let t = s; t < n.length; t++) {
      let e = n[t];
      if (e.dom.parentNode == i) {
        return e.domAtPos(0);
      }
    }
    return new I(i, 0);
  }
  function tr(t, e, i) {
    let n = null;
    let s = -1;
    let r = null;
    let o = -1;
    (function t(e, l) {
      for (let a = 0, h = 0; a < e.children.length && h <= l; a++) {
        let c = e.children[a];
        let u = h + c.length;
        if (u >= l) {
          if (c.children.length) {
            t(c, l - h);
          } else if ((!r || r.isHidden && i > 0) && (u > l || h == u && c.getSide() > 0)) {
            r = c;
            o = l - h;
          } else if (h < l || h == u && c.getSide() < 0 && !c.isHidden) {
            n = c;
            s = l - h;
          }
        }
        h = u;
      }
    })(t, e);
    let l = (i < 0 ? n : r) || n || r;
    if (l) {
      return l.coordsAt(Math.max(0, l == n ? s : o), i);
    } else {
      return function (t) {
        let e = t.dom.lastChild;
        if (!e) {
          return t.dom.getBoundingClientRect();
        }
        let i = b(e);
        return i[i.length - 1] || null;
      }(t);
    }
  }
  function to(t, e) {
    for (let i in t) {
      if (i == "class" && e.class) {
        e.class += " " + t.class;
      } else if (i == "style" && e.style) {
        e.style += ";" + t.style;
      } else {
        e[i] = t[i];
      }
    }
    return e;
  }
  tt.prototype.children = ti.prototype.children = tn.prototype.children = N;
  let tl = Object.create(null);
  function ta(t, e, i) {
    if (t == e) {
      return true;
    }
    t ||= tl;
    e ||= tl;
    let n = Object.keys(t);
    let s = Object.keys(e);
    if (n.length - (i && n.indexOf(i) > -1 ? 1 : 0) != s.length - (i && s.indexOf(i) > -1 ? 1 : 0)) {
      return false;
    }
    for (let r of n) {
      if (r != i && (s.indexOf(r) == -1 || t[r] !== e[r])) {
        return false;
      }
    }
    return true;
  }
  function th(t, e, i) {
    let n = false;
    if (e) {
      for (let s in e) {
        if (!i || !(s in i)) {
          n = true;
          if (s == "style") {
            t.style.cssText = "";
          } else {
            t.removeAttribute(s);
          }
        }
      }
    }
    if (i) {
      for (let s in i) {
        if (!e || e[s] != i[s]) {
          n = true;
          if (s == "style") {
            t.style.cssText = i[s];
          } else {
            t.setAttribute(s, i[s]);
          }
        }
      }
    }
    return n;
  }
  class tc {
    eq(t) {
      return false;
    }
    updateDOM(t, e) {
      return false;
    }
    compare(t) {
      return this == t || this.constructor == t.constructor && this.eq(t);
    }
    get estimatedHeight() {
      return -1;
    }
    get lineBreaks() {
      return 0;
    }
    ignoreEvent(t) {
      return true;
    }
    coordsAt(t, e, i) {
      return null;
    }
    get isHidden() {
      return false;
    }
    get editable() {
      return false;
    }
    destroy(t) {}
  }
  (s = tu ||= {})[s.Text = 0] = "Text";
  s[s.WidgetBefore = 1] = "WidgetBefore";
  s[s.WidgetAfter = 2] = "WidgetAfter";
  s[s.WidgetRange = 3] = "WidgetRange";
  var tu = s;
  class tf extends codemirrorStateCore.RangeValue {
    constructor(t, e, i, n) {
      super();
      this.startSide = t;
      this.endSide = e;
      this.widget = i;
      this.spec = n;
    }
    get heightRelevant() {
      return false;
    }
    static mark(t) {
      return new td(t);
    }
    static widget(t) {
      let e = Math.max(-10000, Math.min(10000, t.side || 0));
      let i = !!t.block;
      e += i && !t.inlineOrder ? e > 0 ? 300000000 : -400000000 : e > 0 ? 100000000 : -100000000;
      return new tm(t, e, e, i, t.widget || null, false);
    }
    static replace(t) {
      let e = !!t.block;
      let i;
      let n;
      if (t.isBlockGap) {
        i = -500000000;
        n = 400000000;
      } else {
        let {
          start: s,
          end: r
        } = tg(t, e);
        i = (s ? e ? -300000000 : -1 : 500000000) - 1;
        n = (r ? e ? 200000000 : 1 : -600000000) + 1;
      }
      return new tm(t, i, n, e, t.widget || null, true);
    }
    static line(t) {
      return new tp(t);
    }
    static set(t, e = false) {
      return codemirrorStateCore.RangeSet.of(t, e);
    }
    hasHeight() {
      return !!this.widget && this.widget.estimatedHeight > -1;
    }
  }
  tf.none = codemirrorStateCore.RangeSet.empty;
  class td extends tf {
    constructor(t) {
      let {
        start: e,
        end: i
      } = tg(t);
      super(e ? -1 : 500000000, i ? 1 : -600000000, null, t);
      this.tagName = t.tagName || "span";
      this.class = t.class || "";
      this.attrs = t.attributes || null;
    }
    eq(t) {
      return this == t || t instanceof td && this.tagName == t.tagName && (this.class || this.attrs?.class) == (t.class || t.attrs?.class) && ta(this.attrs, t.attrs, "class");
    }
    range(t, e = t) {
      if (t >= e) {
        throw RangeError("Mark decorations may not be empty");
      }
      return super.range(t, e);
    }
  }
  td.prototype.point = false;
  class tp extends tf {
    constructor(t) {
      super(-200000000, -200000000, null, t);
    }
    eq(t) {
      return t instanceof tp && this.spec.class == t.spec.class && ta(this.spec.attributes, t.spec.attributes);
    }
    range(t, e = t) {
      if (e != t) {
        throw RangeError("Line decoration ranges must be zero-length");
      }
      return super.range(t, e);
    }
  }
  tp.prototype.mapMode = codemirrorStateCore.MapMode.TrackBefore;
  tp.prototype.point = true;
  class tm extends tf {
    constructor(t, e, i, n, s, r) {
      super(e, i, s, t);
      this.block = n;
      this.isReplace = r;
      this.mapMode = n ? e <= 0 ? codemirrorStateCore.MapMode.TrackBefore : codemirrorStateCore.MapMode.TrackAfter : codemirrorStateCore.MapMode.TrackDel;
    }
    get type() {
      if (this.startSide != this.endSide) {
        return tu.WidgetRange;
      } else if (this.startSide <= 0) {
        return tu.WidgetBefore;
      } else {
        return tu.WidgetAfter;
      }
    }
    get heightRelevant() {
      return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
    }
    eq(t) {
      var e;
      var i;
      return t instanceof tm && (e = this.widget, e == (i = t.widget) || !!e && !!i && !!e.compare(i)) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
    }
    range(t, e = t) {
      if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0)) {
        throw RangeError("Invalid range for replacement decoration");
      }
      if (!this.isReplace && e != t) {
        throw RangeError("Widget decorations can only have zero-length ranges");
      }
      return super.range(t, e);
    }
  }
  function tg(t, e = false) {
    let {
      inclusiveStart: i,
      inclusiveEnd: n
    } = t;
    if (i == null) {
      i = t.inclusive;
    }
    if (n == null) {
      n = t.inclusive;
    }
    return {
      start: i ?? e,
      end: n ?? e
    };
  }
  function tv(t, e, i, n = 0) {
    let s = i.length - 1;
    if (s >= 0 && i[s] + n >= t) {
      i[s] = Math.max(i[s], e);
    } else {
      i.push(t, e);
    }
  }
  tm.prototype.point = true;
  class tb extends V {
    constructor() {
      super(...arguments);
      this.children = [];
      this.length = 0;
      this.prevAttrs = undefined;
      this.attrs = null;
      this.breakAfter = 0;
    }
    merge(t, e, i, n, s, r) {
      if (i) {
        if (!(i instanceof tb)) {
          return false;
        }
        if (!this.dom) {
          i.transferDOM(this);
        }
      }
      if (n) {
        this.setDeco(i ? i.attrs : null);
      }
      W(this, t, e, i ? i.children.slice() : [], s, r);
      return true;
    }
    split(t) {
      let e = new tb();
      e.breakAfter = this.breakAfter;
      if (this.length == 0) {
        return e;
      }
      let {
        i,
        off: n
      } = this.childPos(t);
      if (n) {
        e.append(this.children[i].split(n), 0);
        this.children[i].merge(n, this.children[i].length, null, false, 0, 0);
        i++;
      }
      for (let t = i; t < this.children.length; t++) {
        e.append(this.children[t], 0);
      }
      while (i > 0 && this.children[i - 1].length == 0) {
        this.children[--i].destroy();
      }
      this.children.length = i;
      this.markDirty();
      this.length = t;
      return e;
    }
    transferDOM(t) {
      if (this.dom) {
        this.markDirty();
        t.setDOM(this.dom);
        t.prevAttrs = this.prevAttrs === undefined ? this.attrs : this.prevAttrs;
        this.prevAttrs = undefined;
        this.dom = null;
      }
    }
    setDeco(t) {
      if (!ta(this.attrs, t)) {
        if (this.dom) {
          this.prevAttrs = this.attrs;
          this.markDirty();
        }
        this.attrs = t;
      }
    }
    append(t, e) {
      (function t(e, i, n) {
        let s;
        let {
          children: r
        } = e;
        if (n > 0 && i instanceof te && r.length && (s = r[r.length - 1]) instanceof te && s.mark.eq(i.mark)) {
          t(s, i.children[0], n - 1);
        } else {
          r.push(i);
          i.setParent(e);
        }
        e.length += i.length;
      })(this, t, e);
    }
    addLineDeco(t) {
      let e = t.spec.attributes;
      let i = t.spec.class;
      if (e) {
        this.attrs = to(e, this.attrs || {});
      }
      if (i) {
        this.attrs = to({
          class: i
        }, this.attrs || {});
      }
    }
    domAtPos(t) {
      return ts(this, t);
    }
    reuseDOM(t) {
      if (t.nodeName == "DIV") {
        this.setDOM(t);
        this.flags |= 6;
      }
    }
    sync(t, e) {
      if (this.dom) {
        if (this.flags & 4) {
          E(this.dom);
          this.dom.className = "cm-line";
          this.prevAttrs = this.attrs ? null : undefined;
        }
      } else {
        this.setDOM(document.createElement("div"));
        this.dom.className = "cm-line";
        this.prevAttrs = this.attrs ? null : undefined;
      }
      if (this.prevAttrs !== undefined) {
        th(this.dom, this.prevAttrs, this.attrs);
        this.dom.classList.add("cm-line");
        this.prevAttrs = undefined;
      }
      super.sync(t, e);
      let n = this.dom.lastChild;
      while (n && V.get(n) instanceof te) {
        n = n.lastChild;
      }
      if (!n || !this.length || n.nodeName != "BR" && V.get(n)?.isEditable == false && (!Z.ios || !this.children.some(t => t instanceof tt))) {
        let t = document.createElement("BR");
        t.cmIgnore = true;
        this.dom.appendChild(t);
      }
    }
    measureTextSize() {
      if (this.children.length == 0 || this.length > 20) {
        return null;
      }
      let t = 0;
      let e;
      for (let i of this.children) {
        if (!(i instanceof tt) || /[^ -~]/.test(i.text)) {
          return null;
        }
        let n = b(i.dom);
        if (n.length != 1) {
          return null;
        }
        t += n[0].width;
        e = n[0].height;
      }
      if (t) {
        return {
          lineHeight: this.dom.getBoundingClientRect().height,
          charWidth: t / this.length,
          textHeight: e
        };
      } else {
        return null;
      }
    }
    coordsAt(t, e) {
      let i = tr(this, t, e);
      if (!this.children.length && i && this.parent) {
        let {
          heightOracle: t
        } = this.parent.view.viewState;
        let e = i.bottom - i.top;
        if (Math.abs(e - t.lineHeight) < 2 && t.textHeight < e) {
          let n = (e - t.textHeight) / 2;
          return {
            top: i.top + n,
            bottom: i.bottom - n,
            left: i.left,
            right: i.left
          };
        }
      }
      return i;
    }
    become(t) {
      return t instanceof tb && this.children.length == 0 && t.children.length == 0 && ta(this.attrs, t.attrs) && this.breakAfter == t.breakAfter;
    }
    covers() {
      return true;
    }
    static find(t, e) {
      for (let i = 0, n = 0; i < t.children.length; i++) {
        let s = t.children[i];
        let r = n + s.length;
        if (r >= e) {
          if (s instanceof tb) {
            return s;
          }
          if (r > e) {
            break;
          }
        }
        n = r + s.breakAfter;
      }
      return null;
    }
  }
  class tw extends V {
    constructor(t, e, i) {
      super();
      this.widget = t;
      this.length = e;
      this.deco = i;
      this.breakAfter = 0;
      this.prevWidget = null;
    }
    merge(t, e, i, n, s, r) {
      return (!i || i instanceof tw && !!this.widget.compare(i.widget) && (!(t > 0) || !(s <= 0)) && (!(e < this.length) || !(r <= 0))) && (this.length = t + (i ? i.length : 0) + (this.length - e), true);
    }
    domAtPos(t) {
      if (t == 0) {
        return I.before(this.dom);
      } else {
        return I.after(this.dom, t == this.length);
      }
    }
    split(t) {
      let e = this.length - t;
      this.length = t;
      let i = new tw(this.widget, e, this.deco);
      i.breakAfter = this.breakAfter;
      return i;
    }
    get children() {
      return N;
    }
    sync(t) {
      if (!this.dom || !this.widget.updateDOM(this.dom, t)) {
        if (this.dom && this.prevWidget) {
          this.prevWidget.destroy(this.dom);
        }
        this.prevWidget = null;
        this.setDOM(this.widget.toDOM(t));
        if (!this.widget.editable) {
          this.dom.contentEditable = "false";
        }
      }
    }
    get overrideDOMText() {
      if (this.parent) {
        return this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd);
      } else {
        return codemirrorStateCore.Text.empty;
      }
    }
    domBoundsAround() {
      return null;
    }
    become(t) {
      return t instanceof tw && t.widget.constructor == this.widget.constructor && (t.widget.compare(this.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, this.deco = t.deco, this.breakAfter = t.breakAfter, true);
    }
    ignoreMutation() {
      return true;
    }
    ignoreEvent(t) {
      return this.widget.ignoreEvent(t);
    }
    get isEditable() {
      return false;
    }
    get isWidget() {
      return true;
    }
    coordsAt(t, e) {
      let i = this.widget.coordsAt(this.dom, t, e);
      return i || (this.widget instanceof ty ? null : C(this.dom.getBoundingClientRect(), this.length ? t == 0 : e <= 0));
    }
    destroy() {
      super.destroy();
      if (this.dom) {
        this.widget.destroy(this.dom);
      }
    }
    covers(t) {
      let {
        startSide: e,
        endSide: i
      } = this.deco;
      return e != i && (t < 0 ? e < 0 : i > 0);
    }
  }
  class ty extends tc {
    constructor(t) {
      super();
      this.height = t;
    }
    toDOM() {
      let t = document.createElement("div");
      t.className = "cm-gap";
      this.updateDOM(t);
      return t;
    }
    eq(t) {
      return t.height == this.height;
    }
    updateDOM(t) {
      t.style.height = this.height + "px";
      return true;
    }
    get editable() {
      return true;
    }
    get estimatedHeight() {
      return this.height;
    }
    ignoreEvent() {
      return false;
    }
  }
  class tx {
    constructor(t, e, i, n) {
      this.doc = t;
      this.pos = e;
      this.end = i;
      this.disallowBlockEffectsFor = n;
      this.content = [];
      this.curLine = null;
      this.breakAtStart = 0;
      this.pendingBuffer = 0;
      this.bufferMarks = [];
      this.atCursorPos = true;
      this.openStart = -1;
      this.openEnd = -1;
      this.text = "";
      this.textOff = 0;
      this.cursor = t.iter();
      this.skip = e;
    }
    posCovered() {
      if (this.content.length == 0) {
        return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
      }
      let t = this.content[this.content.length - 1];
      return !t.breakAfter && (!(t instanceof tw) || !(t.deco.endSide < 0));
    }
    getLine() {
      if (!this.curLine) {
        this.content.push(this.curLine = new tb());
        this.atCursorPos = true;
      }
      return this.curLine;
    }
    flushBuffer(t = this.bufferMarks) {
      if (this.pendingBuffer) {
        this.curLine.append(tk(new tn(-1), t), t.length);
        this.pendingBuffer = 0;
      }
    }
    addBlockWidget(t) {
      this.flushBuffer();
      this.curLine = null;
      this.content.push(t);
    }
    finish(t) {
      if (this.pendingBuffer && t <= this.bufferMarks.length) {
        this.flushBuffer();
      } else {
        this.pendingBuffer = 0;
      }
      if (!this.posCovered() && (!t || !this.content.length || !(this.content[this.content.length - 1] instanceof tw))) {
        this.getLine();
      }
    }
    buildText(t, e, i) {
      while (t > 0) {
        if (this.textOff == this.text.length) {
          let {
            value: e,
            lineBreak: i,
            done: n
          } = this.cursor.next(this.skip);
          this.skip = 0;
          if (n) {
            throw Error("Ran out of text content when drawing inline views");
          }
          if (i) {
            if (!this.posCovered()) {
              this.getLine();
            }
            if (this.content.length) {
              this.content[this.content.length - 1].breakAfter = 1;
            } else {
              this.breakAtStart = 1;
            }
            this.flushBuffer();
            this.curLine = null;
            this.atCursorPos = true;
            t--;
            continue;
          }
          this.text = e;
          this.textOff = 0;
        }
        let n = Math.min(this.text.length - this.textOff, t, 512);
        this.flushBuffer(e.slice(e.length - i));
        this.getLine().append(tk(new tt(this.text.slice(this.textOff, this.textOff + n)), e), i);
        this.atCursorPos = true;
        this.textOff += n;
        t -= n;
        i = 0;
      }
    }
    span(t, e, i, n) {
      this.buildText(e - t, i, n);
      this.pos = e;
      if (this.openStart < 0) {
        this.openStart = n;
      }
    }
    point(t, e, i, n, s, r) {
      if (this.disallowBlockEffectsFor[r] && i instanceof tm) {
        if (i.block) {
          throw RangeError("Block decorations may not be specified via plugins");
        }
        if (e > this.doc.lineAt(this.pos).to) {
          throw RangeError("Decorations that replace line breaks may not be specified via plugins");
        }
      }
      let o = e - t;
      if (i instanceof tm) {
        if (i.block) {
          if (i.startSide > 0 && !this.posCovered()) {
            this.getLine();
          }
          this.addBlockWidget(new tw(i.widget || tS.block, o, i));
        } else {
          let r = ti.create(i.widget || tS.inline, o, o ? 0 : i.startSide);
          let l = this.atCursorPos && !r.isEditable && s <= n.length && (t < e || i.startSide > 0);
          let a = !r.isEditable && (t < e || s > n.length || i.startSide <= 0);
          let h = this.getLine();
          if (this.pendingBuffer == 2 && !l && !r.isEditable) {
            this.pendingBuffer = 0;
          }
          this.flushBuffer(n);
          if (l) {
            h.append(tk(new tn(1), n), s);
            s = n.length + Math.max(0, s - n.length);
          }
          h.append(tk(r, n), s);
          this.atCursorPos = a;
          this.pendingBuffer = a ? t < e || s > n.length ? 1 : 2 : 0;
          if (this.pendingBuffer) {
            this.bufferMarks = n.slice();
          }
        }
      } else if (this.doc.lineAt(this.pos).from == this.pos) {
        this.getLine().addLineDeco(i);
      }
      if (o) {
        if (this.textOff + o <= this.text.length) {
          this.textOff += o;
        } else {
          this.skip += o - (this.text.length - this.textOff);
          this.text = "";
          this.textOff = 0;
        }
        this.pos = e;
      }
      if (this.openStart < 0) {
        this.openStart = s;
      }
    }
    static build(t, e, i, n, s) {
      let r = new tx(t, e, i, s);
      r.openEnd = codemirrorStateCore.RangeSet.spans(n, e, i, r);
      if (r.openStart < 0) {
        r.openStart = r.openEnd;
      }
      r.finish(r.openEnd);
      return r;
    }
  }
  function tk(t, e) {
    for (let i of e) {
      t = new te(i, [t], t.length);
    }
    return t;
  }
  class tS extends tc {
    constructor(t) {
      super();
      this.tag = t;
    }
    eq(t) {
      return t.tag == this.tag;
    }
    toDOM() {
      return document.createElement(this.tag);
    }
    updateDOM(t) {
      return t.nodeName.toLowerCase() == this.tag;
    }
    get isHidden() {
      return true;
    }
  }
  tS.inline = new tS("span");
  tS.block = new tS("div");
  (r = tC ||= {})[r.LTR = 0] = "LTR";
  r[r.RTL = 1] = "RTL";
  var tC = r;
  let tM = tC.LTR;
  let tA = tC.RTL;
  function tT(t) {
    let e = [];
    for (let i = 0; i < t.length; i++) {
      e.push(1 << +t[i]);
    }
    return e;
  }
  let tO = tT("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008");
  let tD = tT("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333");
  let tP = Object.create(null);
  let tE = [];
  for (let t of ["()", "[]", "{}"]) {
    let e = t.charCodeAt(0);
    let i = t.charCodeAt(1);
    tP[e] = i;
    tP[i] = -e;
  }
  function tR(t) {
    if (t <= 247) {
      return tO[t];
    } else if (t >= 1424 && t <= 1524) {
      return 2;
    } else if (t >= 1536 && t <= 1785) {
      return tD[t - 1536];
    } else if (t >= 1774 && t <= 2220) {
      return 4;
    } else if (t >= 8192 && t <= 8204) {
      return 256;
    } else if (t >= 64336 && t <= 65023) {
      return 4;
    } else {
      return 1;
    }
  }
  let tL = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
  class tB {
    get dir() {
      if (this.level % 2) {
        return tA;
      } else {
        return tM;
      }
    }
    constructor(t, e, i) {
      this.from = t;
      this.to = e;
      this.level = i;
    }
    side(t, e) {
      if (this.dir == e == t) {
        return this.to;
      } else {
        return this.from;
      }
    }
    forward(t, e) {
      return t == (this.dir == e);
    }
    static find(t, e, i, n) {
      let s = -1;
      for (let r = 0; r < t.length; r++) {
        let o = t[r];
        if (o.from <= e && o.to >= e) {
          if (o.level == i) {
            return r;
          }
          if (s < 0 || (n != 0 ? n < 0 ? o.from < e : o.to > e : t[s].level > o.level)) {
            s = r;
          }
        }
      }
      if (s < 0) {
        throw RangeError("Index out of range");
      }
      return s;
    }
  }
  let tI = [];
  function tN(t) {
    return [new tB(0, t, 0)];
  }
  let tV = "";
  let tF = codemirrorStateCore.Facet.define();
  let tj = codemirrorStateCore.Facet.define();
  let tH = codemirrorStateCore.Facet.define();
  let tW = codemirrorStateCore.Facet.define();
  let tz = codemirrorStateCore.Facet.define();
  let tq = codemirrorStateCore.Facet.define();
  let t$ = codemirrorStateCore.Facet.define();
  let tJ = codemirrorStateCore.Facet.define();
  let t_ = codemirrorStateCore.Facet.define();
  let tK = codemirrorStateCore.Facet.define({
    combine: t => t.some(t => t)
  });
  let tU = codemirrorStateCore.Facet.define({
    combine: t => t.some(t => t)
  });
  let tG = codemirrorStateCore.Facet.define();
  class tQ {
    constructor(t, e = "nearest", i = "nearest", n = 5, s = 5, r = false) {
      this.range = t;
      this.y = e;
      this.x = i;
      this.yMargin = n;
      this.xMargin = s;
      this.isSnapshot = r;
    }
    map(t) {
      if (t.empty) {
        return this;
      } else {
        return new tQ(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
      }
    }
    clip(t) {
      if (this.range.to <= t.doc.length) {
        return this;
      } else {
        return new tQ(codemirrorStateCore.EditorSelection.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
      }
    }
  }
  let tX = codemirrorStateCore.EffectType.define({
    map: (t, e) => t.map(e)
  });
  let tY = codemirrorStateCore.EffectType.define();
  function tZ(t, e, i) {
    let n = t.facet(tW);
    if (n.length) {
      n[0](e);
    } else if (window.onerror) {
      window.onerror(String(e), i, undefined, undefined, e);
    }
  }
  let t0 = codemirrorStateCore.Facet.define({
    combine: t => !t.length || t[0]
  });
  let t1 = 0;
  let t2 = codemirrorStateCore.Facet.define();
  class t6 {
    constructor(t, e, i, n, s) {
      this.id = t;
      this.create = e;
      this.domEventHandlers = i;
      this.domEventObservers = n;
      this.extension = s(this);
    }
    static define(t, e) {
      let {
        eventHandlers: i,
        eventObservers: n,
        provide: s,
        decorations: r
      } = e || {};
      return new t6(t1++, t, i, n, t => {
        let e = [t2.of(t)];
        if (r) {
          e.push(t4.of(e => {
            let i = e.plugin(t);
            if (i) {
              return r(i);
            } else {
              return tf.none;
            }
          }));
        }
        if (s) {
          e.push(s(t));
        }
        return e;
      });
    }
    static fromClass(t, e) {
      return t6.define(e => new t(e), e);
    }
  }
  class t3 {
    constructor(t) {
      this.spec = t;
      this.mustUpdate = null;
      this.value = null;
    }
    update(t) {
      if (this.value) {
        if (this.mustUpdate) {
          let t = this.mustUpdate;
          this.mustUpdate = null;
          if (this.value.update) {
            try {
              this.value.update(t);
            } catch (e) {
              tZ(t.state, e, "CodeMirror plugin crashed");
              if (this.value.destroy) {
                try {
                  this.value.destroy();
                } catch (t) {}
              }
              this.deactivate();
            }
          }
        }
      } else if (this.spec) {
        try {
          this.value = this.spec.create(t);
        } catch (e) {
          tZ(t.state, e, "CodeMirror plugin crashed");
          this.deactivate();
        }
      }
      return this;
    }
    destroy(t) {
      if (this.value?.destroy) {
        try {
          this.value.destroy();
        } catch (e) {
          tZ(t.state, e, "CodeMirror plugin crashed");
        }
      }
    }
    deactivate() {
      this.spec = this.value = null;
    }
  }
  let t5 = codemirrorStateCore.Facet.define();
  let t8 = codemirrorStateCore.Facet.define();
  let t4 = codemirrorStateCore.Facet.define();
  let t9 = codemirrorStateCore.Facet.define();
  let t7 = codemirrorStateCore.Facet.define();
  let et = codemirrorStateCore.Facet.define();
  function ee(t, e) {
    let i = t.state.facet(et);
    if (!i.length) {
      return i;
    }
    let n = i.map(e => e instanceof Function ? e(t) : e);
    let s = [];
    codemirrorStateCore.RangeSet.spans(n, e.from, e.to, {
      point() {},
      span(t, i, n, r) {
        let o = t - e.from;
        let l = i - e.from;
        let a = s;
        for (let t = n.length - 1; t >= 0; t--, r--) {
          let i = n[t].spec.bidiIsolate;
          let s;
          if (i == null) {
            i = function (t, e, i) {
              for (let n = e; n < i; n++) {
                let e = tR(t.charCodeAt(n));
                if (e == 1) {
                  break;
                }
                if (e == 2 || e == 4) {
                  return tA;
                }
              }
              return tM;
            }(e.text, o, l);
          }
          if (r > 0 && a.length && (s = a[a.length - 1]).to == o && s.direction == i) {
            s.to = l;
            a = s.inner;
          } else {
            let t = {
              from: o,
              to: l,
              direction: i,
              inner: []
            };
            a.push(t);
            a = t.inner;
          }
        }
      }
    });
    return s;
  }
  let ei = codemirrorStateCore.Facet.define();
  function en(t) {
    let e = 0;
    let i = 0;
    let n = 0;
    let s = 0;
    for (let r of t.state.facet(ei)) {
      let o = r(t);
      if (o) {
        if (o.left != null) {
          e = Math.max(e, o.left);
        }
        if (o.right != null) {
          i = Math.max(i, o.right);
        }
        if (o.top != null) {
          n = Math.max(n, o.top);
        }
        if (o.bottom != null) {
          s = Math.max(s, o.bottom);
        }
      }
    }
    return {
      left: e,
      right: i,
      top: n,
      bottom: s
    };
  }
  let es = codemirrorStateCore.Facet.define();
  class er {
    constructor(t, e, i, n) {
      this.fromA = t;
      this.toA = e;
      this.fromB = i;
      this.toB = n;
    }
    join(t) {
      return new er(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
    }
    addToSet(t) {
      let e = t.length;
      let i = this;
      for (; e > 0; e--) {
        let n = t[e - 1];
        if (!(n.fromA > i.toA)) {
          if (n.toA < i.fromA) {
            break;
          }
          i = i.join(n);
          t.splice(e - 1, 1);
        }
      }
      t.splice(e, 0, i);
      return t;
    }
    static extendWithRanges(t, e) {
      if (e.length == 0) {
        return t;
      }
      let i = [];
      for (let n = 0, s = 0, r = 0, o = 0;; n++) {
        let l = n == t.length ? null : t[n];
        let a = r - o;
        let h = l ? l.fromB : 1000000000;
        while (s < e.length && e[s] < h) {
          let t = e[s];
          let n = e[s + 1];
          let r = Math.max(o, t);
          let l = Math.min(h, n);
          if (r <= l) {
            new er(r + a, l + a, r, l).addToSet(i);
          }
          if (n > h) {
            break;
          }
          s += 2;
        }
        if (!l) {
          return i;
        }
        new er(l.fromA, l.toA, l.fromB, l.toB).addToSet(i);
        r = l.toA;
        o = l.toB;
      }
    }
  }
  class eo {
    constructor(t, e, i) {
      this.view = t;
      this.state = e;
      this.transactions = i;
      this.flags = 0;
      this.startState = t.state;
      this.changes = codemirrorStateCore.ChangeSet.empty(this.startState.doc.length);
      for (let n of i) {
        this.changes = this.changes.compose(n.changes);
      }
      let n = [];
      this.changes.iterChangedRanges((t, e, i, s) => n.push(new er(t, e, i, s)));
      this.changedRanges = n;
    }
    static create(t, e, i) {
      return new eo(t, e, i);
    }
    get viewportChanged() {
      return (this.flags & 4) > 0;
    }
    get heightChanged() {
      return (this.flags & 2) > 0;
    }
    get geometryChanged() {
      return this.docChanged || (this.flags & 10) > 0;
    }
    get focusChanged() {
      return (this.flags & 1) > 0;
    }
    get docChanged() {
      return !this.changes.empty;
    }
    get selectionSet() {
      return this.transactions.some(t => t.selection);
    }
    get empty() {
      return this.flags == 0 && this.transactions.length == 0;
    }
  }
  class el extends V {
    get length() {
      return this.view.state.doc.length;
    }
    constructor(t) {
      super();
      this.view = t;
      this.decorations = [];
      this.dynamicDecorationMap = [false];
      this.domChanged = null;
      this.hasComposition = null;
      this.markedForComposition = new Set();
      this.editContextFormatting = tf.none;
      this.lastCompositionAfterCursor = false;
      this.minWidth = 0;
      this.minWidthFrom = 0;
      this.minWidthTo = 0;
      this.impreciseAnchor = null;
      this.impreciseHead = null;
      this.forceSelection = false;
      this.lastUpdate = Date.now();
      this.setDOM(t.contentDOM);
      this.children = [new tb()];
      this.children[0].setParent(this);
      this.updateDeco();
      this.updateInner([new er(0, 0, 0, t.state.doc.length)], 0, null);
    }
    update(t) {
      var i;
      var n;
      var s;
      var r;
      var o;
      let a;
      let h;
      let c = t.changedRanges;
      if (this.minWidth > 0 && c.length) {
        if (c.every(({
          fromA: t,
          toA: e
        }) => e < this.minWidthFrom || t > this.minWidthTo)) {
          this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1);
          this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1);
        } else {
          this.minWidth = this.minWidthFrom = this.minWidthTo = 0;
        }
      }
      this.updateEditContextFormatting(t);
      let u = -1;
      if (!!(this.view.inputState.composing >= 0) && !this.view.observer.editContext) {
        if (this.domChanged?.newSel) {
          u = this.domChanged.newSel.head;
        } else {
          i = t.changes;
          n = this.hasComposition;
          a = false;
          if (n) {
            i.iterChangedRanges((t, e) => {
              if (t < n.to && e > n.from) {
                a = true;
              }
            });
          }
          if (!a && !t.selectionSet) {
            u = t.state.selection.main.head;
          }
        }
      }
      let f = u > -1 ? function (t, e, i) {
        let n = ea(t, i);
        if (!n) {
          return null;
        }
        let {
          node: s,
          from: r,
          to: o
        } = n;
        let l = s.nodeValue;
        if (/[\n\r]/.test(l) || t.state.doc.sliceString(n.from, n.to) != l) {
          return null;
        }
        let a = e.invertedDesc;
        let h = new er(a.mapPos(r), a.mapPos(o), r, o);
        let c = [];
        for (let e = s.parentNode;; e = e.parentNode) {
          let i = V.get(e);
          if (i instanceof te) {
            c.push({
              node: e,
              deco: i.mark
            });
          } else {
            if (i instanceof tb || e.nodeName == "DIV" && e.parentNode == t.contentDOM) {
              return {
                range: h,
                text: s,
                marks: c,
                line: e
              };
            }
            if (e == t.contentDOM) {
              return null;
            }
            c.push({
              node: e,
              deco: new td({
                inclusive: true,
                attributes: function (t) {
                  let e = Object.create(null);
                  for (let i = 0; i < t.attributes.length; i++) {
                    let n = t.attributes[i];
                    e[n.name] = n.value;
                  }
                  return e;
                }(e),
                tagName: e.tagName.toLowerCase()
              })
            });
          }
        }
      }(this.view, t.changes, u) : null;
      this.domChanged = null;
      if (this.hasComposition) {
        this.markedForComposition.clear();
        let {
          from: e,
          to: i
        } = this.hasComposition;
        c = new er(e, i, t.changes.mapPos(e, -1), t.changes.mapPos(i, 1)).addToSet(c.slice());
      }
      this.hasComposition = f ? {
        from: f.range.fromB,
        to: f.range.toB
      } : null;
      if ((Z.ie || Z.chrome) && !f && t && t.state.doc.lines != t.startState.doc.lines) {
        this.forceSelection = true;
      }
      s = this.decorations;
      r = this.updateDeco();
      o = t.changes;
      h = new eh();
      codemirrorStateCore.RangeSet.compare(s, r, o, h);
      let d = h.changes;
      c = er.extendWithRanges(c, d);
      return (!!(this.flags & 7) || c.length != 0) && (this.updateInner(c, t.startState.doc.length, f), t.transactions.length && (this.lastUpdate = Date.now()), true);
    }
    updateInner(t, e, i) {
      this.view.viewState.mustMeasureContent = true;
      this.updateChildren(t, e, i);
      let {
        observer: n
      } = this.view;
      n.ignore(() => {
        this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px";
        this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
        let t = Z.chrome || Z.ios ? {
          node: n.selectionRange.focusNode,
          written: false
        } : undefined;
        this.sync(this.view, t);
        this.flags &= -8;
        if (t && (t.written || n.selectionRange.focusNode != t.node)) {
          this.forceSelection = true;
        }
        this.dom.style.height = "";
      });
      this.markedForComposition.forEach(t => t.flags &= -9);
      let s = [];
      if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) {
        for (let t of this.children) {
          if (t instanceof tw && t.widget instanceof ty) {
            s.push(t.dom);
          }
        }
      }
      n.updateGaps(s);
    }
    updateChildren(t, e, i) {
      let n = i ? i.range.addToSet(t.slice()) : t;
      let s = this.childCursor(e);
      for (let t = n.length - 1;; t--) {
        let e = t >= 0 ? n[t] : null;
        if (!e) {
          break;
        }
        let {
          fromA: r,
          toA: o,
          fromB: l,
          toB: a
        } = e;
        let h;
        let c;
        let u;
        let f;
        if (i && i.range.fromB < a && i.range.toB > l) {
          let t = tx.build(this.view.state.doc, l, i.range.fromB, this.decorations, this.dynamicDecorationMap);
          let e = tx.build(this.view.state.doc, i.range.toB, a, this.decorations, this.dynamicDecorationMap);
          c = t.breakAtStart;
          u = t.openStart;
          f = e.openEnd;
          let n = this.compositionView(i);
          if (e.breakAtStart) {
            n.breakAfter = 1;
          } else if (e.content.length && n.merge(n.length, n.length, e.content[0], false, e.openStart, 0)) {
            n.breakAfter = e.content[0].breakAfter;
            e.content.shift();
          }
          if (t.content.length && n.merge(0, 0, t.content[t.content.length - 1], true, 0, t.openEnd)) {
            t.content.pop();
          }
          h = t.content.concat(n).concat(e.content);
        } else {
          ({
            content: h,
            breakAtStart: c,
            openStart: u,
            openEnd: f
          } = tx.build(this.view.state.doc, l, a, this.decorations, this.dynamicDecorationMap));
        }
        let {
          i: d,
          off: p
        } = s.findPos(o, 1);
        let {
          i: m,
          off: g
        } = s.findPos(r, -1);
        H(this, m, g, d, p, h, c, u, f);
      }
      if (i) {
        this.fixCompositionDOM(i);
      }
    }
    updateEditContextFormatting(t) {
      this.editContextFormatting = this.editContextFormatting.map(t.changes);
      for (let e of t.transactions) {
        for (let t of e.effects) {
          if (t.is(tY)) {
            this.editContextFormatting = t.value;
          }
        }
      }
    }
    compositionView(t) {
      let e = new tt(t.text.nodeValue);
      e.flags |= 8;
      for (let {
        deco: i
      } of t.marks) {
        e = new te(i, [e], e.length);
      }
      let i = new tb();
      i.append(e, 0);
      return i;
    }
    fixCompositionDOM(t) {
      let e = (t, e) => {
        e.flags |= +!!e.children.some(t => t.flags & 7) | 8;
        this.markedForComposition.add(e);
        let i = V.get(t);
        if (i && i != e) {
          i.dom = null;
        }
        e.setDOM(t);
      };
      let i = this.childPos(t.range.fromB, 1);
      let n = this.children[i.i];
      e(t.line, n);
      for (let s = t.marks.length - 1; s >= -1; s--) {
        i = n.childPos(i.off, 1);
        n = n.children[i.i];
        e(s >= 0 ? t.marks[s].node : t.text, n);
      }
    }
    updateSelection(t = false, e = false) {
      var i;
      if (t || !this.view.observer.selectionRange.focusNode) {
        this.view.observer.readSelectionRange();
      }
      let n = this.view.root.activeElement;
      let s = n == this.dom;
      let r = !s && !this.view.state.facet(t0) && !(this.dom.tabIndex > -1) && v(this.dom, this.view.observer.selectionRange) && (!n || !this.dom.contains(n));
      if (!s && !e && !r) {
        return;
      }
      let o = this.forceSelection;
      this.forceSelection = false;
      let l = this.view.state.selection.main;
      let a = this.moveToLine(this.domAtPos(l.anchor));
      let h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
      if (Z.gecko && l.empty && !this.hasComposition && (i = a).node.nodeType == 1 && i.node.firstChild && (i.offset == 0 || i.node.childNodes[i.offset - 1].contentEditable == "false") && (i.offset == i.node.childNodes.length || i.node.childNodes[i.offset].contentEditable == "false")) {
        let t = document.createTextNode("");
        this.view.observer.ignore(() => a.node.insertBefore(t, a.node.childNodes[a.offset] || null));
        a = h = new I(t, 0);
        o = true;
      }
      let c = this.view.observer.selectionRange;
      if (!!o || !c.focusNode || (!w(a.node, a.offset, c.anchorNode, c.anchorOffset) || !w(h.node, h.offset, c.focusNode, c.focusOffset)) && !this.suppressWidgetCursorChange(c, l)) {
        this.view.observer.ignore(() => {
          if (Z.android && Z.chrome && this.dom.contains(c.focusNode) && function (t, e) {
            for (let i = t; i && i != e; i = i.assignedSlot || i.parentNode) {
              if (i.nodeType == 1 && i.contentEditable == "false") {
                return true;
              }
            }
            return false;
          }(c.focusNode, this.dom)) {
            this.dom.blur();
            this.dom.focus({
              preventScroll: true
            });
          }
          let t = m(this.view.root);
          if (t) {
            if (l.empty) {
              if (Z.gecko) {
                var e;
                var i;
                e = a.node;
                i = a.offset;
                let t = e.nodeType != 1 ? 0 : (i && e.childNodes[i - 1].contentEditable == "false" ? 1 : 0) | (i < e.childNodes.length && e.childNodes[i].contentEditable == "false") * 2;
                if (t && t != 3) {
                  let e = (t == 1 ? L : B)(a.node, a.offset);
                  if (e) {
                    a = new I(e.node, e.offset);
                  }
                }
              }
              t.collapse(a.node, a.offset);
              if (l.bidiLevel != null && t.caretBidiLevel !== undefined) {
                t.caretBidiLevel = l.bidiLevel;
              }
            } else if (t.extend) {
              t.collapse(a.node, a.offset);
              try {
                t.extend(h.node, h.offset);
              } catch (t) {}
            } else {
              let e = document.createRange();
              if (l.anchor > l.head) {
                [a, h] = [h, a];
              }
              e.setEnd(h.node, h.offset);
              e.setStart(a.node, a.offset);
              t.removeAllRanges();
              t.addRange(e);
            }
          }
          if (r && this.view.root.activeElement == this.dom) {
            this.dom.blur();
            if (n) {
              n.focus();
            }
          }
        });
        this.view.observer.setSelectionRange(a, h);
      }
      this.impreciseAnchor = a.precise ? null : new I(c.anchorNode, c.anchorOffset);
      this.impreciseHead = h.precise ? null : new I(c.focusNode, c.focusOffset);
    }
    suppressWidgetCursorChange(t, e) {
      return this.hasComposition && e.empty && w(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) && this.posFromDOM(t.focusNode, t.focusOffset) == e.head;
    }
    enforceCursorAssoc() {
      if (this.hasComposition) {
        return;
      }
      let {
        view: t
      } = this;
      let e = t.state.selection.main;
      let i = m(t.root);
      let {
        anchorNode: n,
        anchorOffset: s
      } = t.observer.selectionRange;
      if (!i || !e.empty || !e.assoc || !i.modify) {
        return;
      }
      let r = tb.find(this, e.head);
      if (!r) {
        return;
      }
      let o = r.posAtStart;
      if (e.head == o || e.head == o + r.length) {
        return;
      }
      let l = this.coordsAt(e.head, -1);
      let a = this.coordsAt(e.head, 1);
      if (!l || !a || l.bottom > a.top) {
        return;
      }
      let h = this.domAtPos(e.head + e.assoc);
      i.collapse(h.node, h.offset);
      i.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary");
      t.observer.readSelectionRange();
      let c = t.observer.selectionRange;
      if (t.docView.posFromDOM(c.anchorNode, c.anchorOffset) != e.from) {
        i.collapse(n, s);
      }
    }
    moveToLine(t) {
      let e = this.dom;
      let i;
      if (t.node != e) {
        return t;
      }
      for (let n = t.offset; !i && n < e.childNodes.length; n++) {
        let t = V.get(e.childNodes[n]);
        if (t instanceof tb) {
          i = t.domAtPos(0);
        }
      }
      for (let n = t.offset - 1; !i && n >= 0; n--) {
        let t = V.get(e.childNodes[n]);
        if (t instanceof tb) {
          i = t.domAtPos(t.length);
        }
      }
      if (i) {
        return new I(i.node, i.offset, true);
      } else {
        return t;
      }
    }
    nearest(t) {
      for (let e = t; e;) {
        let t = V.get(e);
        if (t && t.rootView == this) {
          return t;
        }
        e = e.parentNode;
      }
      return null;
    }
    posFromDOM(t, e) {
      let i = this.nearest(t);
      if (!i) {
        throw RangeError("Trying to find position for a DOM position outside of the document");
      }
      return i.localPosFromDOM(t, e) + i.posAtStart;
    }
    domAtPos(t) {
      let {
        i: e,
        off: i
      } = this.childCursor().findPos(t, -1);
      while (e < this.children.length - 1) {
        let t = this.children[e];
        if (i < t.length || t instanceof tb) {
          break;
        }
        e++;
        i = 0;
      }
      return this.children[e].domAtPos(i);
    }
    coordsAt(t, e) {
      let i = null;
      let n = 0;
      for (let s = this.length, r = this.children.length - 1; r >= 0; r--) {
        let o = this.children[r];
        let l = s - o.breakAfter;
        let a = l - o.length;
        if (l < t) {
          break;
        }
        if (a <= t && (a < t || o.covers(-1)) && (l > t || o.covers(1)) && (!i || o instanceof tb && (!(i instanceof tb) || !(e >= 0)))) {
          i = o;
          n = a;
        } else if (i && a == t && l == t && o instanceof tw && Math.abs(e) < 2) {
          if (o.deco.startSide < 0) {
            break;
          }
          if (r) {
            i = null;
          }
        }
        s = a;
      }
      if (i) {
        return i.coordsAt(t - n, e);
      } else {
        return null;
      }
    }
    coordsForChar(t) {
      let {
        i: e,
        off: i
      } = this.childPos(t, 1);
      let n = this.children[e];
      if (!(n instanceof tb)) {
        return null;
      }
      while (n.children.length) {
        let {
          i: t,
          off: e
        } = n.childPos(i, 1);
        for (;; t++) {
          if (t == n.children.length) {
            return null;
          }
          if ((n = n.children[t]).length) {
            break;
          }
        }
        i = e;
      }
      if (!(n instanceof tt)) {
        return null;
      }
      let s = codemirrorStateCore.graphemeBoundary(n.text, i);
      if (s == i) {
        return null;
      }
      let r = D(n.dom, i, s).getClientRects();
      for (let t = 0; t < r.length; t++) {
        let e = r[t];
        if (t == r.length - 1 || e.top < e.bottom && e.left < e.right) {
          return e;
        }
      }
      return null;
    }
    measureVisibleLineHeights(t) {
      let e = [];
      let {
        from: i,
        to: n
      } = t;
      let s = this.view.contentDOM.clientWidth;
      let r = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1;
      let o = -1;
      let l = this.view.textDirection == tC.LTR;
      for (let t = 0, a = 0; a < this.children.length; a++) {
        let h = this.children[a];
        let c = t + h.length;
        if (c > n) {
          break;
        }
        if (t >= i) {
          let i = h.dom.getBoundingClientRect();
          e.push(i.height);
          if (r) {
            let e = h.dom.lastChild;
            let n = e ? b(e) : [];
            if (n.length) {
              let e = n[n.length - 1];
              let r = l ? e.right - i.left : i.right - e.left;
              if (r > o) {
                o = r;
                this.minWidth = s;
                this.minWidthFrom = t;
                this.minWidthTo = c;
              }
            }
          }
        }
        t = c + h.breakAfter;
      }
      return e;
    }
    textDirectionAt(t) {
      let {
        i: e
      } = this.childPos(t, 1);
      if (getComputedStyle(this.children[e].dom).direction == "rtl") {
        return tC.RTL;
      } else {
        return tC.LTR;
      }
    }
    measureTextSize() {
      for (let t of this.children) {
        if (t instanceof tb) {
          let e = t.measureTextSize();
          if (e) {
            return e;
          }
        }
      }
      let t = document.createElement("div");
      let e;
      let i;
      let n;
      t.className = "cm-line";
      t.style.width = "99999px";
      t.style.position = "absolute";
      t.textContent = "abc def ghi jkl mno pqr stu";
      this.view.observer.ignore(() => {
        this.dom.appendChild(t);
        let s = b(t.firstChild)[0];
        e = t.getBoundingClientRect().height;
        i = s ? s.width / 27 : 7;
        n = s ? s.height : e;
        t.remove();
      });
      return {
        lineHeight: e,
        charWidth: i,
        textHeight: n
      };
    }
    childCursor(t = this.length) {
      let e = this.children.length;
      if (e) {
        t -= this.children[--e].length;
      }
      return new j(this.children, t, e);
    }
    computeBlockGapDeco() {
      let t = [];
      let e = this.view.viewState;
      for (let i = 0, n = 0;; n++) {
        let s = n == e.viewports.length ? null : e.viewports[n];
        let r = s ? s.from - 1 : this.length;
        if (r > i) {
          let n = (e.lineBlockAt(r).bottom - e.lineBlockAt(i).top) / this.view.scaleY;
          t.push(tf.replace({
            widget: new ty(n),
            block: true,
            inclusive: true,
            isBlockGap: true
          }).range(i, r));
        }
        if (!s) {
          break;
        }
        i = s.to + 1;
      }
      return tf.set(t);
    }
    updateDeco() {
      let t = 1;
      let e = this.view.state.facet(t4).map(e => (this.dynamicDecorationMap[t++] = typeof e == "function") ? e(this.view) : e);
      let i = false;
      let n = this.view.state.facet(t9).map((t, e) => {
        let n = typeof t == "function";
        if (n) {
          i = true;
        }
        if (n) {
          return t(this.view);
        } else {
          return t;
        }
      });
      if (n.length) {
        this.dynamicDecorationMap[t++] = i;
        e.push(codemirrorStateCore.RangeSet.join(n));
      }
      this.decorations = [this.editContextFormatting, ...e, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco];
      while (t < this.decorations.length) {
        this.dynamicDecorationMap[t++] = false;
      }
      return this.decorations;
    }
    scrollIntoView(t) {
      if (t.isSnapshot) {
        let e = this.view.viewState.lineBlockAt(t.range.head);
        this.view.scrollDOM.scrollTop = e.top - t.yMargin;
        this.view.scrollDOM.scrollLeft = t.xMargin;
        return;
      }
      for (let e of this.view.state.facet(tG)) {
        try {
          if (e(this.view, t.range, t)) {
            return true;
          }
        } catch (t) {
          tZ(this.view.state, t, "scroll handler");
        }
      }
      let {
        range: e
      } = t;
      let i = this.coordsAt(e.head, e.empty ? e.assoc : e.head > e.anchor ? -1 : 1);
      let n;
      if (!i) {
        return;
      }
      if (!e.empty && (n = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1))) {
        i = {
          left: Math.min(i.left, n.left),
          top: Math.min(i.top, n.top),
          right: Math.max(i.right, n.right),
          bottom: Math.max(i.bottom, n.bottom)
        };
      }
      let s = en(this.view);
      let r = {
        left: i.left - s.left,
        top: i.top - s.top,
        right: i.right + s.right,
        bottom: i.bottom + s.bottom
      };
      let {
        offsetWidth: o,
        offsetHeight: l
      } = this.view.scrollDOM;
      (function (t, e, i, n, s, r, o, l) {
        let a = t.ownerDocument;
        let h = a.defaultView || window;
        for (let c = t, u = false; c && !u;) {
          if (c.nodeType == 1) {
            let t;
            let f = c == a.body;
            let d = 1;
            let p = 1;
            if (f) {
              t = function (t) {
                let e = t.visualViewport;
                if (e) {
                  return {
                    left: 0,
                    right: e.width,
                    top: 0,
                    bottom: e.height
                  };
                } else {
                  return {
                    left: 0,
                    right: t.innerWidth,
                    top: 0,
                    bottom: t.innerHeight
                  };
                }
              }(h);
            } else {
              if (/^(fixed|sticky)$/.test(getComputedStyle(c).position)) {
                u = true;
              }
              if (c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
                c = c.assignedSlot || c.parentNode;
                continue;
              }
              let e = c.getBoundingClientRect();
              ({
                scaleX: d,
                scaleY: p
              } = M(c, e));
              t = {
                left: e.left,
                right: e.left + c.clientWidth * d,
                top: e.top,
                bottom: e.top + c.clientHeight * p
              };
            }
            let m = 0;
            let g = 0;
            if (s == "nearest") {
              if (e.top < t.top) {
                g = -(t.top - e.top + o);
                if (i > 0 && e.bottom > t.bottom + g) {
                  g = e.bottom - t.bottom + g + o;
                }
              } else if (e.bottom > t.bottom) {
                g = e.bottom - t.bottom + o;
                if (i < 0 && e.top - g < t.top) {
                  g = -(t.top + g - e.top + o);
                }
              }
            } else {
              let n = e.bottom - e.top;
              let r = t.bottom - t.top;
              g = (s == "center" && n <= r ? e.top + n / 2 - r / 2 : s == "start" || s == "center" && i < 0 ? e.top - o : e.bottom - r + o) - t.top;
            }
            if (n == "nearest") {
              if (e.left < t.left) {
                m = -(t.left - e.left + r);
                if (i > 0 && e.right > t.right + m) {
                  m = e.right - t.right + m + r;
                }
              } else if (e.right > t.right) {
                m = e.right - t.right + r;
                if (i < 0 && e.left < t.left + m) {
                  m = -(t.left + m - e.left + r);
                }
              }
            } else {
              m = (n == "center" ? e.left + (e.right - e.left) / 2 - (t.right - t.left) / 2 : n == "start" == l ? e.left - r : e.right - (t.right - t.left) + r) - t.left;
            }
            if (m || g) {
              if (f) {
                h.scrollBy(m, g);
              } else {
                let t = 0;
                let i = 0;
                if (g) {
                  let t = c.scrollTop;
                  c.scrollTop += g / p;
                  i = (c.scrollTop - t) * p;
                }
                if (m) {
                  let e = c.scrollLeft;
                  c.scrollLeft += m / d;
                  t = (c.scrollLeft - e) * d;
                }
                e = {
                  left: e.left - t,
                  top: e.top - i,
                  right: e.right - t,
                  bottom: e.bottom - i
                };
                if (t && Math.abs(t - m) < 1) {
                  n = "nearest";
                }
                if (i && Math.abs(i - g) < 1) {
                  s = "nearest";
                }
              }
            }
            if (f) {
              break;
            }
            c = c.assignedSlot || c.parentNode;
          } else if (c.nodeType == 11) {
            c = c.host;
          } else {
            break;
          }
        }
      })(this.view.scrollDOM, r, e.head < e.anchor ? -1 : 1, t.x, t.y, Math.max(Math.min(t.xMargin, o), -o), Math.max(Math.min(t.yMargin, l), -l), this.view.textDirection == tC.LTR);
    }
  }
  function ea(t, e) {
    let i = t.observer.selectionRange;
    if (!i.focusNode) {
      return null;
    }
    let n = L(i.focusNode, i.focusOffset);
    let s = B(i.focusNode, i.focusOffset);
    let r = n || s;
    if (s && n && s.node != n.node) {
      let e = V.get(s.node);
      if (!e || e instanceof tt && e.text != s.node.nodeValue) {
        r = s;
      } else if (t.docView.lastCompositionAfterCursor) {
        let t = V.get(n.node);
        if (!!t && (!(t instanceof tt) || t.text == n.node.nodeValue)) {
          r = s;
        }
      }
    }
    t.docView.lastCompositionAfterCursor = r != n;
    if (!r) {
      return null;
    }
    let o = e - r.offset;
    return {
      from: o,
      to: o + r.node.nodeValue.length,
      node: r.node
    };
  }
  let eh = class {
    constructor() {
      this.changes = [];
    }
    compareRange(t, e) {
      tv(t, e, this.changes);
    }
    comparePoint(t, e) {
      tv(t, e, this.changes);
    }
    boundChange(t) {
      tv(t, t, this.changes);
    }
  };
  function ec(t, e) {
    return t.top < e.bottom - 1 && t.bottom > e.top + 1;
  }
  function eu(t, e) {
    if (e < t.top) {
      return {
        top: e,
        left: t.left,
        right: t.right,
        bottom: t.bottom
      };
    } else {
      return t;
    }
  }
  function ef(t, e) {
    if (e > t.bottom) {
      return {
        top: t.top,
        left: t.left,
        right: t.right,
        bottom: e
      };
    } else {
      return t;
    }
  }
  function ed(t, e, i) {
    let n = t.nodeValue.length;
    let s = -1;
    let r = 1000000000;
    let o = 0;
    for (let l = 0; l < n; l++) {
      let n = D(t, l, l + 1).getClientRects();
      for (let a = 0; a < n.length; a++) {
        let h = n[a];
        if (h.top == h.bottom) {
          continue;
        }
        o ||= e - h.left;
        let c = (h.top > i ? h.top - i : i - h.bottom) - 1;
        if (h.left - 1 <= e && h.right + 1 >= e && c < r) {
          let i = e >= (h.left + h.right) / 2;
          let n = i;
          if ((Z.chrome || Z.gecko) && D(t, l).getBoundingClientRect().left == h.right) {
            n = !i;
          }
          if (c <= 0) {
            return {
              node: t,
              offset: l + +!!n
            };
          }
          s = l + +!!n;
          r = c;
        }
      }
    }
    return {
      node: t,
      offset: s > -1 ? s : o > 0 ? t.nodeValue.length : 0
    };
  }
  function ep(t, e, i, n = -1) {
    let o = t.contentDOM.getBoundingClientRect();
    let l = o.top + t.viewState.paddingTop;
    let a;
    let {
      docHeight: h
    } = t.viewState;
    let {
      x: c,
      y: u
    } = e;
    let f = u - l;
    if (f < 0) {
      return 0;
    }
    if (f > h) {
      return t.state.doc.length;
    }
    for (let e = t.viewState.heightOracle.textHeight / 2, s = false; (a = t.elementAtHeight(f)).type != tu.Text;) {
      while (!((f = n > 0 ? a.bottom + e : a.top - e) >= 0) || !(f <= h)) {
        if (s) {
          if (i) {
            return null;
          } else {
            return 0;
          }
        }
        s = true;
        n = -n;
      }
    }
    u = l + f;
    let d = a.from;
    if (d < t.viewport.from) {
      if (t.viewport.from == 0) {
        return 0;
      } else if (i) {
        return null;
      } else {
        return em(t, o, a, c, u);
      }
    }
    if (d > t.viewport.to) {
      if (t.viewport.to == t.state.doc.length) {
        return t.state.doc.length;
      } else if (i) {
        return null;
      } else {
        return em(t, o, a, c, u);
      }
    }
    let p = t.dom.ownerDocument;
    let m = t.root.elementFromPoint ? t.root : p;
    let g = m.elementFromPoint(c, u);
    if (g && !t.contentDOM.contains(g)) {
      g = null;
    }
    if (!g) {
      c = Math.max(o.left + 1, Math.min(o.right - 1, c));
      if ((g = m.elementFromPoint(c, u)) && !t.contentDOM.contains(g)) {
        g = null;
      }
    }
    let v;
    let w = -1;
    if (g && t.docView.nearest(g)?.isEditable != false) {
      if (p.caretPositionFromPoint) {
        let t = p.caretPositionFromPoint(c, u);
        if (t) {
          ({
            offsetNode: v,
            offset: w
          } = t);
        }
      } else if (p.caretRangeFromPoint) {
        let e = p.caretRangeFromPoint(c, u);
        if (e) {
          ({
            startContainer: v,
            startOffset: w
          } = e);
          if (!t.contentDOM.contains(v) || Z.safari && function (t, e, i) {
            let n;
            if (t.nodeType != 3 || e != (n = t.nodeValue.length)) {
              return false;
            }
            for (let e = t.nextSibling; e; e = e.nextSibling) {
              if (e.nodeType != 1 || e.nodeName != "BR") {
                return false;
              }
            }
            return D(t, n - 1, n).getBoundingClientRect().left > i;
          }(v, w, c) || Z.chrome && function (t, e, i) {
            if (e != 0) {
              return false;
            }
            for (let e = t;;) {
              let t = e.parentNode;
              if (!t || t.nodeType != 1 || t.firstChild != e) {
                return false;
              }
              if (t.classList.contains("cm-line")) {
                break;
              }
              e = t;
            }
            return i - (t.nodeType == 1 ? t.getBoundingClientRect() : D(t, 0, Math.max(t.nodeValue.length, 1)).getBoundingClientRect()).left > 5;
          }(v, w, c)) {
            v = undefined;
          }
        }
      }
      if (v) {
        w = Math.min(S(v), w);
      }
    }
    if (!v || !t.docView.dom.contains(v)) {
      let e = tb.find(t.docView, d);
      if (!e) {
        if (f > a.top + a.height / 2) {
          return a.to;
        } else {
          return a.from;
        }
      }
      ({
        node: v,
        offset: w
      } = function t(e, i, n) {
        let s;
        let r;
        let o;
        let l;
        let a;
        let h;
        let c;
        let u;
        let f = false;
        for (let m = e.firstChild; m; m = m.nextSibling) {
          let e = b(m);
          for (let g = 0; g < e.length; g++) {
            var d;
            var p;
            let v = e[g];
            if (h && ec(h, v)) {
              v = eu(ef(v, h.bottom), h.top);
            }
            let b = (d = v).left > i ? d.left - i : Math.max(0, i - d.right);
            let w = (p = v).top > n ? p.top - n : Math.max(0, n - p.bottom);
            if (b == 0 && w == 0) {
              if (m.nodeType == 3) {
                return ed(m, i, n);
              } else {
                return t(m, i, n);
              }
            }
            if (!a || u > w || u == w && c > b) {
              a = m;
              h = v;
              c = b;
              u = w;
              let t = w ? n < v.top ? -1 : 1 : b ? i < v.left ? -1 : 1 : 0;
              f = !t || (t > 0 ? g < e.length - 1 : g > 0);
            }
            if (b == 0) {
              if (n > v.bottom && (!o || o.bottom < v.bottom)) {
                s = m;
                o = v;
              } else if (n < v.top && (!l || l.top > v.top)) {
                r = m;
                l = v;
              }
            } else if (o && ec(o, v)) {
              o = ef(o, v.bottom);
            } else if (l && ec(l, v)) {
              l = eu(l, v.top);
            }
          }
        }
        if (o && o.bottom >= n) {
          a = s;
          h = o;
        } else if (l && l.top <= n) {
          a = r;
          h = l;
        }
        if (!a) {
          return {
            node: e,
            offset: 0
          };
        }
        let m = Math.max(h.left, Math.min(h.right, i));
        if (a.nodeType == 3) {
          return ed(a, m, n);
        }
        if (f && a.contentEditable != "false") {
          return t(a, m, n);
        }
        let g = Array.prototype.indexOf.call(e.childNodes, a) + +(i >= (h.left + h.right) / 2);
        return {
          node: e,
          offset: g
        };
      }(e.dom, c, u));
    }
    let y = t.docView.nearest(v);
    if (!y) {
      return null;
    }
    if (!y.isWidget || y.dom?.nodeType != 1) {
      return y.localPosFromDOM(v, w) + y.posAtStart;
    }
    {
      let t = y.dom.getBoundingClientRect();
      if (e.y < t.top || e.y <= t.bottom && e.x <= (t.left + t.right) / 2) {
        return y.posAtStart;
      } else {
        return y.posAtEnd;
      }
    }
  }
  function em(t, e, i, n, s) {
    let r = Math.round((n - e.left) * t.defaultCharacterWidth);
    if (t.lineWrapping && i.height > t.defaultLineHeight * 1.5) {
      let e = t.viewState.heightOracle.textHeight;
      r += Math.floor((s - i.top - (t.defaultLineHeight - e) * 0.5) / e) * t.viewState.heightOracle.lineLength;
    }
    let o = t.state.sliceDoc(i.from, i.to);
    return i.from + codemirrorStateCore.columnToPos(o, r, t.state.tabSize);
  }
  function eg(t, e) {
    let i = t.lineBlockAt(e);
    if (Array.isArray(i.type)) {
      for (let t of i.type) {
        if (t.to > e || t.to == e && (t.to == i.to || t.type == tu.Text)) {
          return t;
        }
      }
    }
    return i;
  }
  function ev(t, e, i, n) {
    let s = t.state.doc.lineAt(e.head);
    let r = t.bidiSpans(s);
    let o = t.textDirectionAt(s.from);
    for (let a = e, h = null;;) {
      let e = function (t, e, i, n, s) {
        let o = n.head - t.from;
        let a = tB.find(e, o, n.bidiLevel ?? -1, n.assoc);
        let h = e[a];
        let c = h.side(s, i);
        if (o == c) {
          let t = a += s ? 1 : -1;
          if (t < 0 || t >= e.length) {
            return null;
          }
          o = (h = e[a = t]).side(!s, i);
          c = h.side(s, i);
        }
        let u = codemirrorStateCore.graphemeBoundary(t.text, o, h.forward(s, i));
        if (u < h.from || u > h.to) {
          u = c;
        }
        tV = t.text.slice(Math.min(o, u), Math.max(o, u));
        let f = a == (s ? e.length - 1 : 0) ? null : e[a + (s ? 1 : -1)];
        if (f && u == c && f.level + +!s < h.level) {
          return codemirrorStateCore.EditorSelection.cursor(f.side(!s, i) + t.from, f.forward(s, i) ? 1 : -1, f.level);
        } else {
          return codemirrorStateCore.EditorSelection.cursor(u + t.from, h.forward(s, i) ? -1 : 1, h.level);
        }
      }(s, r, o, a, i);
      let c = tV;
      if (!e) {
        if (s.number == (i ? t.state.doc.lines : 1)) {
          return a;
        }
        c = "\n";
        s = t.state.doc.line(s.number + (i ? 1 : -1));
        r = t.bidiSpans(s);
        e = t.visualLineSide(s, !i);
      }
      if (h) {
        if (!h(c)) {
          return a;
        }
      } else {
        if (!n) {
          return e;
        }
        h = n(c);
      }
      a = e;
    }
  }
  function eb(t, e, i) {
    while (true) {
      let n = 0;
      for (let s of t) {
        s.between(e - 1, e + 1, (t, s, r) => {
          if (e > t && e < s) {
            let r = n || i || (e - t < s - e ? -1 : 1);
            e = r < 0 ? t : s;
            n = r;
          }
        });
      }
      if (!n) {
        return e;
      }
    }
  }
  function ew(t, e, i) {
    let n = eb(t.state.facet(t7).map(e => e(t)), i.from, e.head > i.from ? -1 : 1);
    if (n == i.from) {
      return i;
    } else {
      return codemirrorStateCore.EditorSelection.cursor(n, n < i.from ? 1 : -1);
    }
  }
  class ey {
    constructor(t, e) {
      this.points = t;
      this.text = "";
      this.lineSeparator = e.facet(codemirrorStateCore.EditorState.lineSeparator);
    }
    append(t) {
      this.text += t;
    }
    lineBreak() {
      this.text += "￿";
    }
    readRange(t, e) {
      if (!t) {
        return this;
      }
      let i = t.parentNode;
      for (let n = t;;) {
        this.findPointBefore(i, n);
        let t = this.text.length;
        this.readNode(n);
        let s = n.nextSibling;
        if (s == e) {
          break;
        }
        let r = V.get(n);
        let o = V.get(s);
        if (r && o ? r.breakAfter : (r ? r.breakAfter : x(n)) || x(s) && (n.nodeName != "BR" || n.cmIgnore) && this.text.length > t) {
          this.lineBreak();
        }
        n = s;
      }
      this.findPointBefore(i, e);
      return this;
    }
    readTextNode(t) {
      let e = t.nodeValue;
      for (let i of this.points) {
        if (i.node == t) {
          i.pos = this.text.length + Math.min(i.offset, e.length);
        }
      }
      for (let i = 0, n = this.lineSeparator ? null : /\r\n?|\n/g;;) {
        let s = -1;
        let r = 1;
        let o;
        if (this.lineSeparator) {
          s = e.indexOf(this.lineSeparator, i);
          r = this.lineSeparator.length;
        } else if (o = n.exec(e)) {
          s = o.index;
          r = o[0].length;
        }
        this.append(e.slice(i, s < 0 ? e.length : s));
        if (s < 0) {
          break;
        }
        this.lineBreak();
        if (r > 1) {
          for (let e of this.points) {
            if (e.node == t && e.pos > this.text.length) {
              e.pos -= r - 1;
            }
          }
        }
        i = s + r;
      }
    }
    readNode(t) {
      if (t.cmIgnore) {
        return;
      }
      let e = V.get(t);
      let i = e && e.overrideDOMText;
      if (i != null) {
        this.findPointInside(t, i.length);
        for (let t = i.iter(); !t.next().done;) {
          if (t.lineBreak) {
            this.lineBreak();
          } else {
            this.append(t.value);
          }
        }
      } else if (t.nodeType == 3) {
        this.readTextNode(t);
      } else if (t.nodeName == "BR") {
        if (t.nextSibling) {
          this.lineBreak();
        }
      } else if (t.nodeType == 1) {
        this.readRange(t.firstChild, null);
      }
    }
    findPointBefore(t, e) {
      for (let i of this.points) {
        if (i.node == t && t.childNodes[i.offset] == e) {
          i.pos = this.text.length;
        }
      }
    }
    findPointInside(t, e) {
      for (let i of this.points) {
        if (t.nodeType == 3 ? i.node == t : t.contains(i.node)) {
          i.pos = this.text.length + (!function (t, e, i) {
            while (true) {
              if (!e || i < S(e)) {
                return false;
              }
              if (e == t) {
                return true;
              }
              i = y(e) + 1;
              e = e.parentNode;
            }
          }(t, i.node, i.offset) ? 0 : e);
        }
      }
    }
  }
  class ex {
    constructor(t, e) {
      this.node = t;
      this.offset = e;
      this.pos = -1;
    }
  }
  class ek {
    constructor(t, e, i, n) {
      this.typeOver = n;
      this.bounds = null;
      this.text = "";
      this.domChanged = e > -1;
      let {
        impreciseHead: s,
        impreciseAnchor: r
      } = t.docView;
      if (t.state.readOnly && e > -1) {
        this.newSel = null;
      } else if (e > -1 && (this.bounds = t.docView.domBoundsAround(e, i, 0))) {
        let e = s || r ? [] : function (t) {
          let e = [];
          if (t.root.activeElement != t.contentDOM) {
            return e;
          }
          let {
            anchorNode: i,
            anchorOffset: n,
            focusNode: s,
            focusOffset: r
          } = t.observer.selectionRange;
          if (i) {
            e.push(new ex(i, n));
            if (s != i || r != n) {
              e.push(new ex(s, r));
            }
          }
          return e;
        }(t);
        let i = new ey(e, t.state);
        i.readRange(this.bounds.startDOM, this.bounds.endDOM);
        this.text = i.text;
        this.newSel = function (t, e) {
          if (t.length == 0) {
            return null;
          }
          let i = t[0].pos;
          let n = t.length == 2 ? t[1].pos : i;
          if (i > -1 && n > -1) {
            return codemirrorStateCore.EditorSelection.single(i + e, n + e);
          } else {
            return null;
          }
        }(e, this.bounds.from);
      } else {
        let e = t.observer.selectionRange;
        let i = s && s.node == e.focusNode && s.offset == e.focusOffset || !g(t.contentDOM, e.focusNode) ? t.state.selection.main.head : t.docView.posFromDOM(e.focusNode, e.focusOffset);
        let n = r && r.node == e.anchorNode && r.offset == e.anchorOffset || !g(t.contentDOM, e.anchorNode) ? t.state.selection.main.anchor : t.docView.posFromDOM(e.anchorNode, e.anchorOffset);
        let o = t.viewport;
        if ((Z.ios || Z.chrome) && t.state.selection.main.empty && i != n && (o.from > 0 || o.to < t.state.doc.length)) {
          let e = Math.min(i, n);
          let s = Math.max(i, n);
          let r = o.from - e;
          let l = o.to - s;
          if ((r == 0 || r == 1 || e == 0) && (l == 0 || l == -1 || s == t.state.doc.length)) {
            i = 0;
            n = t.state.doc.length;
          }
        }
        this.newSel = codemirrorStateCore.EditorSelection.single(n, i);
      }
    }
  }
  function eS(t, e) {
    let i;
    let {
      newSel: n
    } = e;
    let s = t.state.selection.main;
    let r = t.inputState.lastKeyTime > Date.now() - 100 ? t.inputState.lastKeyCode : -1;
    if (e.bounds) {
      let {
        from: n,
        to: o
      } = e.bounds;
      let a = s.from;
      let h = null;
      if (r === 8 || Z.android && e.text.length < o - n) {
        a = s.to;
        h = "end";
      }
      let c = function (t, e, i, n) {
        let s = Math.min(t.length, e.length);
        let r = 0;
        while (r < s && t.charCodeAt(r) == e.charCodeAt(r)) {
          r++;
        }
        if (r == s && t.length == e.length) {
          return null;
        }
        let o = t.length;
        let l = e.length;
        while (o > 0 && l > 0 && t.charCodeAt(o - 1) == e.charCodeAt(l - 1)) {
          o--;
          l--;
        }
        if (n == "end") {
          let t = Math.max(0, r - Math.min(o, l));
          i -= o + t - r;
        }
        if (o < r && t.length < e.length) {
          let t = i <= r && i >= o ? r - i : 0;
          r -= t;
          l = r + (l - o);
          o = r;
        } else if (l < r) {
          let t = i <= r && i >= l ? r - i : 0;
          r -= t;
          o = r + (o - l);
          l = r;
        }
        return {
          from: r,
          toA: o,
          toB: l
        };
      }(t.state.doc.sliceString(n, o, "￿"), e.text, a - n, h);
      if (c) {
        if (Z.chrome && r == 13 && c.toB == c.from + 2 && e.text.slice(c.from, c.toB) == "￿￿") {
          c.toB--;
        }
        i = {
          from: n + c.from,
          to: n + c.toA,
          insert: codemirrorStateCore.Text.of(e.text.slice(c.from, c.toB).split("￿"))
        };
      }
    } else if (n && (!t.hasFocus && t.state.facet(t0) || n.main.eq(s))) {
      n = null;
    }
    if (!i && !n) {
      return false;
    }
    if (!i && e.typeOver && !s.empty && n && n.main.empty) {
      i = {
        from: s.from,
        to: s.to,
        insert: t.state.doc.slice(s.from, s.to)
      };
    } else if (i && i.from >= s.from && i.to <= s.to && (i.from != s.from || i.to != s.to) && s.to - s.from - (i.to - i.from) <= 4) {
      i = {
        from: s.from,
        to: s.to,
        insert: t.state.doc.slice(s.from, i.from).append(i.insert).append(t.state.doc.slice(i.to, s.to))
      };
    } else if ((Z.mac || Z.android) && i && i.from == i.to && i.from == s.head - 1 && /^\. ?$/.test(i.insert.toString()) && t.contentDOM.getAttribute("autocorrect") == "off") {
      if (n && i.insert.length == 2) {
        n = codemirrorStateCore.EditorSelection.single(n.main.anchor - 1, n.main.head - 1);
      }
      i = {
        from: s.from,
        to: s.to,
        insert: codemirrorStateCore.Text.of([" "])
      };
    } else if (Z.chrome && i && i.from == i.to && i.from == s.head && i.insert.toString() == "\n " && t.lineWrapping) {
      n &&= codemirrorStateCore.EditorSelection.single(n.main.anchor - 1, n.main.head - 1);
      i = {
        from: s.from,
        to: s.to,
        insert: codemirrorStateCore.Text.of([" "])
      };
    }
    if (i) {
      return eC(t, i, n, r);
    }
    if (!n || n.main.eq(s)) {
      return false;
    }
    {
      let e = false;
      let i = "select";
      if (t.inputState.lastSelectionTime > Date.now() - 50) {
        if (t.inputState.lastSelectionOrigin == "select") {
          e = true;
        }
        i = t.inputState.lastSelectionOrigin;
      }
      t.dispatch({
        selection: n,
        scrollIntoView: e,
        userEvent: i
      });
      return true;
    }
  }
  function eC(t, e, i, n = -1) {
    let s;
    if (Z.ios && t.inputState.flushIOSKey(e)) {
      return true;
    }
    let r = t.state.selection.main;
    if (Z.android && (e.to == r.to && (e.from == r.from || e.from == r.from - 1 && t.state.sliceDoc(e.from, r.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && P(t.contentDOM, "Enter", 13) || (e.from == r.from - 1 && e.to == r.to && e.insert.length == 0 || n == 8 && e.insert.length < e.to - e.from && e.to > r.head) && P(t.contentDOM, "Backspace", 8) || e.from == r.from && e.to == r.to + 1 && e.insert.length == 0 && P(t.contentDOM, "Delete", 46))) {
      return true;
    }
    let o = e.insert.toString();
    if (t.inputState.composing >= 0) {
      t.inputState.composing++;
    }
    let a = () => s ||= function (t, e, i) {
      let n;
      let s = t.state;
      let r = s.selection.main;
      if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!i || i.main.empty && i.main.from == e.from + e.insert.length) && t.inputState.composing < 0) {
        let i = r.from < e.from ? s.sliceDoc(r.from, e.from) : "";
        let o = r.to > e.to ? s.sliceDoc(e.to, r.to) : "";
        n = s.replaceSelection(t.state.toText(i + e.insert.sliceString(0, undefined, t.state.lineBreak) + o));
      } else {
        let o = s.changes(e);
        let a = i && i.main.to <= o.newLength ? i.main : undefined;
        if (s.selection.ranges.length > 1 && t.inputState.composing >= 0 && e.to <= r.to && e.to >= r.to - 10) {
          let h = t.state.sliceDoc(e.from, e.to);
          let c;
          let u = i && ea(t, i.main.head);
          if (u) {
            let t = e.insert.length - (e.to - e.from);
            c = {
              from: u.from,
              to: u.to - t
            };
          } else {
            c = t.state.doc.lineAt(r.head);
          }
          let f = r.to - e.to;
          let d = r.to - r.from;
          n = s.changeByRange(i => {
            if (i.from == r.from && i.to == r.to) {
              return {
                changes: o,
                range: a || i.map(o)
              };
            }
            let n = i.to - f;
            let u = n - h.length;
            if (i.to - i.from != d || t.state.sliceDoc(u, n) != h || i.to >= c.from && i.from <= c.to) {
              return {
                range: i
              };
            }
            let p = s.changes({
              from: u,
              to: n,
              insert: e.insert
            });
            let m = i.to - r.to;
            return {
              changes: p,
              range: a ? codemirrorStateCore.EditorSelection.range(Math.max(0, a.anchor + m), Math.max(0, a.head + m)) : i.map(p)
            };
          });
        } else {
          n = {
            changes: o,
            selection: a && s.selection.replaceRange(a)
          };
        }
      }
      let o = "input.type";
      if (t.composing || t.inputState.compositionPendingChange && t.inputState.compositionEndedAt > Date.now() - 50) {
        t.inputState.compositionPendingChange = false;
        o += ".compose";
        if (t.inputState.compositionFirstChange) {
          o += ".start";
          t.inputState.compositionFirstChange = false;
        }
      }
      return s.update(n, {
        userEvent: o,
        scrollIntoView: true
      });
    }(t, e, i);
    if (!t.state.facet(tq).some(i => i(t, e.from, e.to, o, a))) {
      t.dispatch(a());
    }
    return true;
  }
  class eM {
    setSelectionOrigin(t) {
      this.lastSelectionOrigin = t;
      this.lastSelectionTime = Date.now();
    }
    constructor(t) {
      var e;
      this.view = t;
      this.lastKeyCode = 0;
      this.lastKeyTime = 0;
      this.lastTouchTime = 0;
      this.lastFocusTime = 0;
      this.lastScrollTop = 0;
      this.lastScrollLeft = 0;
      this.pendingIOSKey = undefined;
      this.tabFocusMode = -1;
      this.lastSelectionOrigin = null;
      this.lastSelectionTime = 0;
      this.lastContextMenu = 0;
      this.scrollHandlers = [];
      this.handlers = Object.create(null);
      this.composing = -1;
      this.compositionFirstChange = null;
      this.compositionEndedAt = 0;
      this.compositionPendingKey = false;
      this.compositionPendingChange = false;
      this.mouseSelection = null;
      this.draggedContent = null;
      this.handleEvent = this.handleEvent.bind(this);
      this.notifiedFocused = t.hasFocus;
      if (Z.safari) {
        t.contentDOM.addEventListener("input", () => null);
      }
      if (Z.gecko) {
        e = t.contentDOM.ownerDocument;
        if (!eQ.has(e)) {
          eQ.add(e);
          e.addEventListener("copy", () => {});
          e.addEventListener("cut", () => {});
        }
      }
    }
    handleEvent(t) {
      if (!!function (t, e) {
        if (!e.bubbles) {
          return true;
        }
        if (e.defaultPrevented) {
          return false;
        }
        for (let i = e.target, n; i != t.contentDOM; i = i.parentNode) {
          if (!i || i.nodeType == 11 || (n = V.get(i)) && n.ignoreEvent(e)) {
            return false;
          }
        }
        return true;
      }(this.view, t) && !this.ignoreDuringComposition(t)) {
        if (t.type != "keydown" || !this.keydown(t)) {
          this.runHandlers(t.type, t);
        }
      }
    }
    runHandlers(t, e) {
      let i = this.handlers[t];
      if (i) {
        for (let t of i.observers) {
          t(this.view, e);
        }
        for (let t of i.handlers) {
          if (e.defaultPrevented) {
            break;
          }
          if (t(this.view, e)) {
            e.preventDefault();
            break;
          }
        }
      }
    }
    ensureHandlers(t) {
      let e = function (t) {
        let e = Object.create(null);
        function i(t) {
          return e[t] ||= {
            observers: [],
            handlers: []
          };
        }
        for (let e of t) {
          let t = e.spec;
          if (t && t.domEventHandlers) {
            for (let n in t.domEventHandlers) {
              let s = t.domEventHandlers[n];
              if (s) {
                i(n).handlers.push(eA(e.value, s));
              }
            }
          }
          if (t && t.domEventObservers) {
            for (let n in t.domEventObservers) {
              let s = t.domEventObservers[n];
              if (s) {
                i(n).observers.push(eA(e.value, s));
              }
            }
          }
        }
        for (let t in eR) {
          i(t).handlers.push(eR[t]);
        }
        for (let t in eL) {
          i(t).observers.push(eL[t]);
        }
        return e;
      }(t);
      let i = this.handlers;
      let n = this.view.contentDOM;
      for (let t in e) {
        if (t != "scroll") {
          let s = !e[t].handlers.length;
          let r = i[t];
          if (r && !r.handlers.length != s) {
            n.removeEventListener(t, this.handleEvent);
            r = null;
          }
          if (!r) {
            n.addEventListener(t, this.handleEvent, {
              passive: s
            });
          }
        }
      }
      for (let t in i) {
        if (t != "scroll" && !e[t]) {
          n.removeEventListener(t, this.handleEvent);
        }
      }
      this.handlers = e;
    }
    keydown(t) {
      let e;
      this.lastKeyCode = t.keyCode;
      this.lastKeyTime = Date.now();
      return t.keyCode == 9 && !!(this.tabFocusMode > -1) && (!this.tabFocusMode || !!(Date.now() <= this.tabFocusMode)) || ((this.tabFocusMode > 0 && t.keyCode != 27 && eD.indexOf(t.keyCode) < 0 && (this.tabFocusMode = -1), Z.android && Z.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8)) ? (this.view.observer.delayAndroidKey(t.key, t.keyCode), true) : Z.ios && !t.synthetic && !t.altKey && !t.metaKey && ((e = eT.find(e => e.keyCode == t.keyCode)) && !t.ctrlKey || eO.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey) ? (this.pendingIOSKey = e || t, setTimeout(() => this.flushIOSKey(), 250), true) : (t.keyCode != 229 && this.view.observer.forceFlush(), false));
    }
    flushIOSKey(t) {
      let e = this.pendingIOSKey;
      return !!e && (e.key != "Enter" || !t || !(t.from < t.to) || !/^\S+$/.test(t.insert.toString())) && (this.pendingIOSKey = undefined, P(this.view.contentDOM, e.key, e.keyCode, e instanceof KeyboardEvent ? e : undefined));
    }
    ignoreDuringComposition(t) {
      return !!/^key/.test(t.type) && (this.composing > 0 || !!Z.safari && !Z.ios && !!this.compositionPendingKey && !!(Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = false, true));
    }
    startMouseSelection(t) {
      if (this.mouseSelection) {
        this.mouseSelection.destroy();
      }
      this.mouseSelection = t;
    }
    update(t) {
      this.view.observer.update(t);
      if (this.mouseSelection) {
        this.mouseSelection.update(t);
      }
      if (this.draggedContent && t.docChanged) {
        this.draggedContent = this.draggedContent.map(t.changes);
      }
      if (t.transactions.length) {
        this.lastKeyCode = this.lastSelectionTime = 0;
      }
    }
    destroy() {
      if (this.mouseSelection) {
        this.mouseSelection.destroy();
      }
    }
  }
  function eA(t, e) {
    return (i, n) => {
      try {
        return e.call(t, n, i);
      } catch (t) {
        tZ(i.state, t);
      }
    };
  }
  let eT = [{
    key: "Backspace",
    keyCode: 8,
    inputType: "deleteContentBackward"
  }, {
    key: "Enter",
    keyCode: 13,
    inputType: "insertParagraph"
  }, {
    key: "Enter",
    keyCode: 13,
    inputType: "insertLineBreak"
  }, {
    key: "Delete",
    keyCode: 46,
    inputType: "deleteContentForward"
  }];
  let eO = "dthko";
  let eD = [16, 17, 18, 20, 91, 92, 224, 225];
  function eP(t) {
    return Math.max(0, t) * 0.7 + 8;
  }
  class eE {
    constructor(t, e, i, n) {
      var s;
      var r;
      let o;
      this.view = t;
      this.startEvent = e;
      this.style = i;
      this.mustSelect = n;
      this.scrollSpeed = {
        x: 0,
        y: 0
      };
      this.scrolling = -1;
      this.lastEvent = e;
      this.scrollParents = function (t) {
        let e = t.ownerDocument;
        let i;
        let n;
        for (let s = t.parentNode; s && s != e.body && (!i || !n);) {
          if (s.nodeType == 1) {
            if (!n && s.scrollHeight > s.clientHeight) {
              n = s;
            }
            if (!i && s.scrollWidth > s.clientWidth) {
              i = s;
            }
            s = s.assignedSlot || s.parentNode;
          } else if (s.nodeType == 11) {
            s = s.host;
          } else {
            break;
          }
        }
        return {
          x: i,
          y: n
        };
      }(t.contentDOM);
      this.atoms = t.state.facet(t7).map(e => e(t));
      let a = t.contentDOM.ownerDocument;
      a.addEventListener("mousemove", this.move = this.move.bind(this));
      a.addEventListener("mouseup", this.up = this.up.bind(this));
      this.extend = e.shiftKey;
      this.multiple = t.state.facet(codemirrorStateCore.EditorState.allowMultipleSelections) && (s = t, r = e, (o = s.state.facet(tF)).length ? o[0](r) : Z.mac ? r.metaKey : r.ctrlKey);
      this.dragging = !!function (t, e) {
        let {
          main: i
        } = t.state.selection;
        if (i.empty) {
          return false;
        }
        let n = m(t.root);
        if (!n || n.rangeCount == 0) {
          return true;
        }
        let s = n.getRangeAt(0).getClientRects();
        for (let t = 0; t < s.length; t++) {
          let i = s[t];
          if (i.left <= e.clientX && i.right >= e.clientX && i.top <= e.clientY && i.bottom >= e.clientY) {
            return true;
          }
        }
        return false;
      }(t, e) && e$(e) == 1 && null;
    }
    start(t) {
      if (this.dragging === false) {
        this.select(t);
      }
    }
    move(t) {
      var e;
      if (t.buttons == 0) {
        return this.destroy();
      }
      if (this.dragging || this.dragging == null && Math.max(Math.abs((e = this.startEvent).clientX - t.clientX), Math.abs(e.clientY - t.clientY)) < 10) {
        return;
      }
      this.select(this.lastEvent = t);
      let i = 0;
      let n = 0;
      let s = 0;
      let r = 0;
      let o = this.view.win.innerWidth;
      let l = this.view.win.innerHeight;
      if (this.scrollParents.x) {
        ({
          left: s,
          right: o
        } = this.scrollParents.x.getBoundingClientRect());
      }
      if (this.scrollParents.y) {
        ({
          top: r,
          bottom: l
        } = this.scrollParents.y.getBoundingClientRect());
      }
      let a = en(this.view);
      if (t.clientX - a.left <= s + 6) {
        i = -eP(s - t.clientX);
      } else if (t.clientX + a.right >= o - 6) {
        i = eP(t.clientX - o);
      }
      if (t.clientY - a.top <= r + 6) {
        n = -eP(r - t.clientY);
      } else if (t.clientY + a.bottom >= l - 6) {
        n = eP(t.clientY - l);
      }
      this.setScrollSpeed(i, n);
    }
    up(t) {
      if (this.dragging == null) {
        this.select(this.lastEvent);
      }
      if (!this.dragging) {
        t.preventDefault();
      }
      this.destroy();
    }
    destroy() {
      this.setScrollSpeed(0, 0);
      let t = this.view.contentDOM.ownerDocument;
      t.removeEventListener("mousemove", this.move);
      t.removeEventListener("mouseup", this.up);
      this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
    }
    setScrollSpeed(t, e) {
      this.scrollSpeed = {
        x: t,
        y: e
      };
      if (t || e) {
        if (this.scrolling < 0) {
          this.scrolling = setInterval(() => this.scroll(), 50);
        }
      } else if (this.scrolling > -1) {
        clearInterval(this.scrolling);
        this.scrolling = -1;
      }
    }
    scroll() {
      let {
        x: t,
        y: e
      } = this.scrollSpeed;
      if (t && this.scrollParents.x) {
        this.scrollParents.x.scrollLeft += t;
        t = 0;
      }
      if (e && this.scrollParents.y) {
        this.scrollParents.y.scrollTop += e;
        e = 0;
      }
      if (t || e) {
        this.view.win.scrollBy(t, e);
      }
      if (this.dragging === false) {
        this.select(this.lastEvent);
      }
    }
    skipAtoms(t) {
      let e = null;
      for (let i = 0; i < t.ranges.length; i++) {
        let n = t.ranges[i];
        let s = null;
        if (n.empty) {
          let t = eb(this.atoms, n.from, 0);
          if (t != n.from) {
            s = codemirrorStateCore.EditorSelection.cursor(t, -1);
          }
        } else {
          let t = eb(this.atoms, n.from, -1);
          let e = eb(this.atoms, n.to, 1);
          if (t != n.from || e != n.to) {
            s = codemirrorStateCore.EditorSelection.range(n.from == n.anchor ? t : e, n.from == n.head ? t : e);
          }
        }
        if (s) {
          e ||= t.ranges.slice();
          e[i] = s;
        }
      }
      if (e) {
        return codemirrorStateCore.EditorSelection.create(e, t.mainIndex);
      } else {
        return t;
      }
    }
    select(t) {
      let {
        view: e
      } = this;
      let i = this.skipAtoms(this.style.get(t, this.extend, this.multiple));
      if (this.mustSelect || !i.eq(e.state.selection, this.dragging === false)) {
        this.view.dispatch({
          selection: i,
          userEvent: "select.pointer"
        });
      }
      this.mustSelect = false;
    }
    update(t) {
      if (t.transactions.some(t => t.isUserEvent("input.type"))) {
        this.destroy();
      } else if (this.style.update(t)) {
        setTimeout(() => this.select(this.lastEvent), 20);
      }
    }
  }
  let eR = Object.create(null);
  let eL = Object.create(null);
  let eB = Z.ie && Z.ie_version < 15 || Z.ios && Z.webkit_version < 604;
  function eI(t, e, i) {
    for (let n of t.facet(e)) {
      i = n(i, t);
    }
    return i;
  }
  function eN(t, e) {
    e = eI(t.state, tJ, e);
    let {
      state: i
    } = t;
    let n;
    let s = 1;
    let r = i.toText(e);
    let o = r.lines == i.selection.ranges.length;
    if (e_ != null && i.selection.ranges.every(t => t.empty) && e_ == r.toString()) {
      let t = -1;
      n = i.changeByRange(n => {
        let a = i.doc.lineAt(n.from);
        if (a.from == t) {
          return {
            range: n
          };
        }
        t = a.from;
        let h = i.toText((o ? r.line(s++).text : e) + i.lineBreak);
        return {
          changes: {
            from: a.from,
            insert: h
          },
          range: codemirrorStateCore.EditorSelection.cursor(n.from + h.length)
        };
      });
    } else {
      n = o ? i.changeByRange(t => {
        let e = r.line(s++);
        return {
          changes: {
            from: t.from,
            to: t.to,
            insert: e.text
          },
          range: codemirrorStateCore.EditorSelection.cursor(t.from + e.length)
        };
      }) : i.replaceSelection(r);
    }
    t.dispatch(n, {
      userEvent: "input.paste",
      scrollIntoView: true
    });
  }
  function eV(t, e, i, n) {
    if (n == 1) {
      return codemirrorStateCore.EditorSelection.cursor(e, i);
    }
    if (n == 2) {
      return function (t, e, i = 1) {
        let n = t.charCategorizer(e);
        let s = t.doc.lineAt(e);
        let r = e - s.from;
        if (s.length == 0) {
          return codemirrorStateCore.EditorSelection.cursor(e);
        }
        if (r == 0) {
          i = 1;
        } else if (r == s.length) {
          i = -1;
        }
        let o = r;
        let a = r;
        if (i < 0) {
          o = codemirrorStateCore.graphemeBoundary(s.text, r, false);
        } else {
          a = codemirrorStateCore.graphemeBoundary(s.text, r);
        }
        let h = n(s.text.slice(o, a));
        while (o > 0) {
          let t = codemirrorStateCore.graphemeBoundary(s.text, o, false);
          if (n(s.text.slice(t, o)) != h) {
            break;
          }
          o = t;
        }
        while (a < s.length) {
          let t = codemirrorStateCore.graphemeBoundary(s.text, a);
          if (n(s.text.slice(a, t)) != h) {
            break;
          }
          a = t;
        }
        return codemirrorStateCore.EditorSelection.range(o + s.from, a + s.from);
      }(t.state, e, i);
    }
    {
      let i = tb.find(t.docView, e);
      let n = t.state.doc.lineAt(i ? i.posAtEnd : e);
      let s = i ? i.posAtStart : n.from;
      let r = i ? i.posAtEnd : n.to;
      if (r < t.state.doc.length && r == n.to) {
        r++;
      }
      return codemirrorStateCore.EditorSelection.range(s, r);
    }
  }
  eL.scroll = t => {
    t.inputState.lastScrollTop = t.scrollDOM.scrollTop;
    t.inputState.lastScrollLeft = t.scrollDOM.scrollLeft;
  };
  eR.keydown = (t, e) => {
    t.inputState.setSelectionOrigin("select");
    if (e.keyCode == 27 && t.inputState.tabFocusMode != 0) {
      t.inputState.tabFocusMode = Date.now() + 2000;
    }
    return false;
  };
  eL.touchstart = (t, e) => {
    t.inputState.lastTouchTime = Date.now();
    t.inputState.setSelectionOrigin("select.pointer");
  };
  eL.touchmove = t => {
    t.inputState.setSelectionOrigin("select.pointer");
  };
  eR.mousedown = (t, e) => {
    var i;
    var n;
    let s;
    let r;
    let o;
    t.observer.flush();
    if (t.inputState.lastTouchTime > Date.now() - 2000) {
      return false;
    }
    let a = null;
    for (let i of t.state.facet(tH)) {
      if (a = i(t, e)) {
        break;
      }
    }
    if (!a && e.button == 0) {
      s = ej(i = t, n = e);
      r = e$(n);
      o = i.state.selection;
      a = {
        update(t) {
          if (t.docChanged) {
            s.pos = t.changes.mapPos(s.pos);
            o = o.map(t.changes);
          }
        },
        get(t, e, n) {
          let a = ej(i, t);
          let h;
          let c = eV(i, a.pos, a.bias, r);
          if (s.pos != a.pos && !e) {
            let t = eV(i, s.pos, s.bias, r);
            let e = Math.min(t.from, c.from);
            let n = Math.max(t.to, c.to);
            c = e < c.from ? codemirrorStateCore.EditorSelection.range(e, n) : codemirrorStateCore.EditorSelection.range(n, e);
          }
          if (e) {
            return o.replaceRange(o.main.extend(c.from, c.to));
          } else if (n && r == 1 && o.ranges.length > 1 && (h = function (t, e) {
            for (let i = 0; i < t.ranges.length; i++) {
              let {
                from: n,
                to: s
              } = t.ranges[i];
              if (n <= e && s >= e) {
                return codemirrorStateCore.EditorSelection.create(t.ranges.slice(0, i).concat(t.ranges.slice(i + 1)), t.mainIndex == i ? 0 : t.mainIndex - +(t.mainIndex > i));
              }
            }
            return null;
          }(o, a.pos))) {
            return h;
          } else if (n) {
            return o.addRange(c);
          } else {
            return codemirrorStateCore.EditorSelection.create([c]);
          }
        }
      };
    }
    if (a) {
      let i = !t.hasFocus;
      t.inputState.startMouseSelection(new eE(t, e, a, i));
      if (i) {
        t.observer.ignore(() => {
          O(t.contentDOM);
          let e = t.root.activeElement;
          if (e && !e.contains(t.contentDOM)) {
            e.blur();
          }
        });
      }
      let n = t.inputState.mouseSelection;
      if (n) {
        n.start(e);
        return n.dragging === false;
      }
    }
    return false;
  };
  let eF = (t, e, i) => e >= i.top && e <= i.bottom && t >= i.left && t <= i.right;
  function ej(t, e) {
    let i = t.posAtCoords({
      x: e.clientX,
      y: e.clientY
    }, false);
    return {
      pos: i,
      bias: function (t, e, i, n) {
        let s = tb.find(t.docView, e);
        if (!s) {
          return 1;
        }
        let r = e - s.posAtStart;
        if (r == 0) {
          return 1;
        }
        if (r == s.length) {
          return -1;
        }
        let o = s.coordsAt(r, -1);
        if (o && eF(i, n, o)) {
          return -1;
        }
        let l = s.coordsAt(r, 1);
        if (l && eF(i, n, l)) {
          return 1;
        } else if (o && o.bottom >= n) {
          return -1;
        } else {
          return 1;
        }
      }(t, i, e.clientX, e.clientY)
    };
  }
  let eH = Z.ie && Z.ie_version <= 11;
  let eW = null;
  let ez = 0;
  let eq = 0;
  function e$(t) {
    if (!eH) {
      return t.detail;
    }
    let e = eW;
    let i = eq;
    eW = t;
    eq = Date.now();
    return ez = !e || i > Date.now() - 400 && Math.abs(e.clientX - t.clientX) < 2 && Math.abs(e.clientY - t.clientY) < 2 ? (ez + 1) % 3 : 1;
  }
  function eJ(t, e, i, n) {
    let s;
    if (!(i = eI(t.state, tJ, i))) {
      return;
    }
    let r = t.posAtCoords({
      x: e.clientX,
      y: e.clientY
    }, false);
    let {
      draggedContent: o
    } = t.inputState;
    let l = n && o && ((s = t.state.facet(tj)).length ? s[0](e) : Z.mac ? !e.altKey : !e.ctrlKey) ? {
      from: o.from,
      to: o.to
    } : null;
    let a = {
      from: r,
      insert: i
    };
    let h = t.state.changes(l ? [l, a] : a);
    t.focus();
    t.dispatch({
      changes: h,
      selection: {
        anchor: h.mapPos(r, -1),
        head: h.mapPos(r, 1)
      },
      userEvent: l ? "move.drop" : "input.drop"
    });
    t.inputState.draggedContent = null;
  }
  eR.dragstart = (t, e) => {
    let {
      selection: {
        main: i
      }
    } = t.state;
    if (e.target.draggable) {
      let n = t.docView.nearest(e.target);
      if (n && n.isWidget) {
        let t = n.posAtStart;
        let e = t + n.length;
        if (t >= i.to || e <= i.from) {
          i = codemirrorStateCore.EditorSelection.range(t, e);
        }
      }
    }
    let {
      inputState: n
    } = t;
    if (n.mouseSelection) {
      n.mouseSelection.dragging = true;
    }
    n.draggedContent = i;
    if (e.dataTransfer) {
      e.dataTransfer.setData("Text", eI(t.state, t_, t.state.sliceDoc(i.from, i.to)));
      e.dataTransfer.effectAllowed = "copyMove";
    }
    return false;
  };
  eR.dragend = t => {
    t.inputState.draggedContent = null;
    return false;
  };
  eR.drop = (t, e) => {
    if (!e.dataTransfer) {
      return false;
    }
    if (t.state.readOnly) {
      return true;
    }
    let i = e.dataTransfer.files;
    if (i && i.length) {
      let n = Array(i.length);
      let s = 0;
      let r = () => {
        if (++s == i.length) {
          eJ(t, e, n.filter(t => t != null).join(t.state.lineBreak), false);
        }
      };
      for (let t = 0; t < i.length; t++) {
        let e = new FileReader();
        e.onerror = r;
        e.onload = () => {
          if (!/[\x00-\x08\x0e-\x1f]{2}/.test(e.result)) {
            n[t] = e.result;
          }
          r();
        };
        e.readAsText(i[t]);
      }
      return true;
    }
    {
      let i = e.dataTransfer.getData("Text");
      if (i) {
        eJ(t, e, i, true);
        return true;
      }
    }
    return false;
  };
  eR.paste = (t, e) => {
    if (t.state.readOnly) {
      return true;
    }
    t.observer.flush();
    let i = eB ? null : e.clipboardData;
    if (i) {
      eN(t, i.getData("text/plain") || i.getData("text/uri-list"));
      return true;
    } else {
      (function (t) {
        let e = t.dom.parentNode;
        if (!e) {
          return;
        }
        let i = e.appendChild(document.createElement("textarea"));
        i.style.cssText = "position: fixed; left: -10000px; top: 10px";
        i.focus();
        setTimeout(() => {
          t.focus();
          i.remove();
          eN(t, i.value);
        }, 50);
      })(t);
      return false;
    }
  };
  let e_ = null;
  eR.copy = eR.cut = (t, e) => {
    let {
      text: i,
      ranges: n,
      linewise: s
    } = function (t) {
      let e = [];
      let i = [];
      let n = false;
      for (let n of t.selection.ranges) {
        if (!n.empty) {
          e.push(t.sliceDoc(n.from, n.to));
          i.push(n);
        }
      }
      if (!e.length) {
        let s = -1;
        for (let {
          from: n
        } of t.selection.ranges) {
          let r = t.doc.lineAt(n);
          if (r.number > s) {
            e.push(r.text);
            i.push({
              from: r.from,
              to: Math.min(t.doc.length, r.to + 1)
            });
          }
          s = r.number;
        }
        n = true;
      }
      return {
        text: eI(t, t_, e.join(t.lineBreak)),
        ranges: i,
        linewise: n
      };
    }(t.state);
    if (!i && !s) {
      return false;
    }
    e_ = s ? i : null;
    if (e.type == "cut" && !t.state.readOnly) {
      t.dispatch({
        changes: n,
        scrollIntoView: true,
        userEvent: "delete.cut"
      });
    }
    let r = eB ? null : e.clipboardData;
    if (r) {
      r.clearData();
      r.setData("text/plain", i);
      return true;
    } else {
      (function (t, e) {
        let i = t.dom.parentNode;
        if (!i) {
          return;
        }
        let n = i.appendChild(document.createElement("textarea"));
        n.style.cssText = "position: fixed; left: -10000px; top: 10px";
        n.value = e;
        n.focus();
        n.selectionEnd = e.length;
        n.selectionStart = 0;
        setTimeout(() => {
          n.remove();
          t.focus();
        }, 50);
      })(t, i);
      return false;
    }
  };
  let eK = codemirrorStateCore.AnnotationType.define();
  function eU(t, e) {
    let i = [];
    for (let n of t.facet(t$)) {
      let s = n(t, e);
      if (s) {
        i.push(s);
      }
    }
    if (i) {
      return t.update({
        effects: i,
        annotations: eK.of(true)
      });
    } else {
      return null;
    }
  }
  function eG(t) {
    setTimeout(() => {
      let e = t.hasFocus;
      if (e != t.inputState.notifiedFocused) {
        let i = eU(t.state, e);
        if (i) {
          t.dispatch(i);
        } else {
          t.update([]);
        }
      }
    }, 10);
  }
  eL.focus = t => {
    t.inputState.lastFocusTime = Date.now();
    if (!t.scrollDOM.scrollTop && (t.inputState.lastScrollTop || t.inputState.lastScrollLeft)) {
      t.scrollDOM.scrollTop = t.inputState.lastScrollTop;
      t.scrollDOM.scrollLeft = t.inputState.lastScrollLeft;
    }
    eG(t);
  };
  eL.blur = t => {
    t.observer.clearSelectionRange();
    eG(t);
  };
  eL.compositionstart = eL.compositionupdate = t => {
    if (!t.observer.editContext) {
      if (t.inputState.compositionFirstChange == null) {
        t.inputState.compositionFirstChange = true;
      }
      if (t.inputState.composing < 0) {
        t.inputState.composing = 0;
      }
    }
  };
  eL.compositionend = t => {
    if (!t.observer.editContext) {
      t.inputState.composing = -1;
      t.inputState.compositionEndedAt = Date.now();
      t.inputState.compositionPendingKey = true;
      t.inputState.compositionPendingChange = t.observer.pendingRecords().length > 0;
      t.inputState.compositionFirstChange = null;
      if (Z.chrome && Z.android) {
        t.observer.flushSoon();
      } else if (t.inputState.compositionPendingChange) {
        Promise.resolve().then(() => t.observer.flush());
      } else {
        setTimeout(() => {
          if (t.inputState.composing < 0 && t.docView.hasComposition) {
            t.update([]);
          }
        }, 50);
      }
    }
  };
  eL.contextmenu = t => {
    t.inputState.lastContextMenu = Date.now();
  };
  eR.beforeinput = (t, e) => {
    var i;
    let s;
    if (e.inputType == "insertReplacementText" && t.observer.editContext) {
      let n = (i = e.dataTransfer) === null || i === undefined ? undefined : i.getData("text/plain");
      let s = e.getTargetRanges();
      if (n && s.length) {
        let e = s[0];
        let i = t.posAtDOM(e.startContainer, e.startOffset);
        let r = t.posAtDOM(e.endContainer, e.endOffset);
        eC(t, {
          from: i,
          to: r,
          insert: t.state.toText(n)
        }, null);
        return true;
      }
    }
    if (Z.chrome && Z.android && (s = eT.find(t => t.inputType == e.inputType)) && (t.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
      let e = window.visualViewport?.height || 0;
      setTimeout(() => {
        if ((window.visualViewport?.height || 0) > e + 10 && t.hasFocus) {
          t.contentDOM.blur();
          t.focus();
        }
      }, 100);
    }
    if (Z.ios && e.inputType == "deleteContentForward") {
      t.observer.flushSoon();
    }
    if (Z.safari && e.inputType == "insertText" && t.inputState.composing >= 0) {
      setTimeout(() => eL.compositionend(t, e), 20);
    }
    return false;
  };
  let eQ = new Set();
  let eX = ["pre-wrap", "normal", "pre-line", "break-spaces"];
  let eY = false;
  class eZ {
    constructor(t) {
      this.lineWrapping = t;
      this.doc = codemirrorStateCore.Text.empty;
      this.heightSamples = {};
      this.lineHeight = 14;
      this.charWidth = 7;
      this.textHeight = 14;
      this.lineLength = 30;
    }
    heightForGap(t, e) {
      let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
      if (this.lineWrapping) {
        i += Math.max(0, Math.ceil((e - t - i * this.lineLength * 0.5) / this.lineLength));
      }
      return this.lineHeight * i;
    }
    heightForLine(t) {
      if (this.lineWrapping) {
        return (1 + Math.max(0, Math.ceil((t - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight;
      } else {
        return this.lineHeight;
      }
    }
    setDoc(t) {
      this.doc = t;
      return this;
    }
    mustRefreshForWrapping(t) {
      return eX.indexOf(t) > -1 != this.lineWrapping;
    }
    mustRefreshForHeights(t) {
      let e = false;
      for (let i = 0; i < t.length; i++) {
        let n = t[i];
        if (n < 0) {
          i++;
        } else if (!this.heightSamples[Math.floor(n * 10)]) {
          e = true;
          this.heightSamples[Math.floor(n * 10)] = true;
        }
      }
      return e;
    }
    refresh(t, e, i, n, s, r) {
      let o = eX.indexOf(t) > -1;
      let l = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != o;
      this.lineWrapping = o;
      this.lineHeight = e;
      this.charWidth = i;
      this.textHeight = n;
      this.lineLength = s;
      if (l) {
        this.heightSamples = {};
        for (let t = 0; t < r.length; t++) {
          let e = r[t];
          if (e < 0) {
            t++;
          } else {
            this.heightSamples[Math.floor(e * 10)] = true;
          }
        }
      }
      return l;
    }
  }
  class e0 {
    constructor(t, e) {
      this.from = t;
      this.heights = e;
      this.index = 0;
    }
    get more() {
      return this.index < this.heights.length;
    }
  }
  class e1 {
    constructor(t, e, i, n, s) {
      this.from = t;
      this.length = e;
      this.top = i;
      this.height = n;
      this._content = s;
    }
    get type() {
      if (typeof this._content == "number") {
        return tu.Text;
      } else if (Array.isArray(this._content)) {
        return this._content;
      } else {
        return this._content.type;
      }
    }
    get to() {
      return this.from + this.length;
    }
    get bottom() {
      return this.top + this.height;
    }
    get widget() {
      if (this._content instanceof tm) {
        return this._content.widget;
      } else {
        return null;
      }
    }
    get widgetLineBreaks() {
      if (typeof this._content == "number") {
        return this._content;
      } else {
        return 0;
      }
    }
    join(t) {
      let e = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
      return new e1(this.from, this.length + t.length, this.top, this.height + t.height, e);
    }
  }
  (o = e2 ||= {})[o.ByPos = 0] = "ByPos";
  o[o.ByHeight = 1] = "ByHeight";
  o[o.ByPosNoHeight = 2] = "ByPosNoHeight";
  var e2 = o;
  class e6 {
    constructor(t, e, i = 2) {
      this.length = t;
      this.height = e;
      this.flags = i;
    }
    get outdated() {
      return (this.flags & 2) > 0;
    }
    set outdated(t) {
      this.flags = !!t * 2 | this.flags & -3;
    }
    setHeight(t) {
      if (this.height != t) {
        if (Math.abs(this.height - t) > 0.001) {
          eY = true;
        }
        this.height = t;
      }
    }
    replace(t, e, i) {
      return e6.of(i);
    }
    decomposeLeft(t, e) {
      e.push(this);
    }
    decomposeRight(t, e) {
      e.push(this);
    }
    applyChanges(t, e, i, n) {
      let s = this;
      let r = i.doc;
      for (let o = n.length - 1; o >= 0; o--) {
        let {
          fromA: l,
          toA: a,
          fromB: h,
          toB: c
        } = n[o];
        let u = s.lineAt(l, e2.ByPosNoHeight, i.setDoc(e), 0, 0);
        let f = u.to >= a ? u : s.lineAt(a, e2.ByPosNoHeight, i, 0, 0);
        c += f.to - a;
        a = f.to;
        while (o > 0 && u.from <= n[o - 1].toA) {
          l = n[o - 1].fromA;
          h = n[o - 1].fromB;
          o--;
          if (l < u.from) {
            u = s.lineAt(l, e2.ByPosNoHeight, i, 0, 0);
          }
        }
        h += u.from - l;
        l = u.from;
        let d = it.build(i.setDoc(r), t, h, c);
        s = e3(s, s.replace(l, a, d));
      }
      return s.updateHeight(i, 0);
    }
    static empty() {
      return new e8(0, 0);
    }
    static of(t) {
      if (t.length == 1) {
        return t[0];
      }
      let e = 0;
      let i = t.length;
      let n = 0;
      let s = 0;
      while (true) {
        if (e == i) {
          if (n > s * 2) {
            let s = t[e - 1];
            if (s.break) {
              t.splice(--e, 1, s.left, null, s.right);
            } else {
              t.splice(--e, 1, s.left, s.right);
            }
            i += 1 + s.break;
            n -= s.size;
          } else if (s > n * 2) {
            let e = t[i];
            if (e.break) {
              t.splice(i, 1, e.left, null, e.right);
            } else {
              t.splice(i, 1, e.left, e.right);
            }
            i += 2 + e.break;
            s -= e.size;
          } else {
            break;
          }
        } else if (n < s) {
          let i = t[e++];
          if (i) {
            n += i.size;
          }
        } else {
          let e = t[--i];
          if (e) {
            s += e.size;
          }
        }
      }
      let r = 0;
      if (t[e - 1] == null) {
        r = 1;
        e--;
      } else if (t[e] == null) {
        r = 1;
        i++;
      }
      return new e9(e6.of(t.slice(0, e)), r, e6.of(t.slice(i)));
    }
  }
  function e3(t, e) {
    if (t == e) {
      return t;
    } else {
      if (t.constructor != e.constructor) {
        eY = true;
      }
      return e;
    }
  }
  e6.prototype.size = 1;
  class e5 extends e6 {
    constructor(t, e, i) {
      super(t, e);
      this.deco = i;
    }
    blockAt(t, e, i, n) {
      return new e1(n, this.length, i, this.height, this.deco || 0);
    }
    lineAt(t, e, i, n, s) {
      return this.blockAt(0, i, n, s);
    }
    forEachLine(t, e, i, n, s, r) {
      if (t <= s + this.length && e >= s) {
        r(this.blockAt(0, i, n, s));
      }
    }
    updateHeight(t, e = 0, i = false, n) {
      if (n && n.from <= e && n.more) {
        this.setHeight(n.heights[n.index++]);
      }
      this.outdated = false;
      return this;
    }
    toString() {
      return `block(${this.length})`;
    }
  }
  class e8 extends e5 {
    constructor(t, e) {
      super(t, e, null);
      this.collapsed = 0;
      this.widgetHeight = 0;
      this.breaks = 0;
    }
    blockAt(t, e, i, n) {
      return new e1(n, this.length, i, this.height, this.breaks);
    }
    replace(t, e, i) {
      let n = i[0];
      if (i.length == 1 && (n instanceof e8 || n instanceof e4 && n.flags & 4) && Math.abs(this.length - n.length) < 10) {
        if (n instanceof e4) {
          n = new e8(n.length, this.height);
        } else {
          n.height = this.height;
        }
        if (!this.outdated) {
          n.outdated = false;
        }
        return n;
      } else {
        return e6.of(i);
      }
    }
    updateHeight(t, e = 0, i = false, n) {
      if (n && n.from <= e && n.more) {
        this.setHeight(n.heights[n.index++]);
      } else if (i || this.outdated) {
        this.setHeight(Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight);
      }
      this.outdated = false;
      return this;
    }
    toString() {
      return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
    }
  }
  class e4 extends e6 {
    constructor(t) {
      super(t, 0);
    }
    heightMetrics(t, e) {
      let i = t.doc.lineAt(e).number;
      let n = t.doc.lineAt(e + this.length).number;
      let s = n - i + 1;
      let r;
      let o = 0;
      if (t.lineWrapping) {
        let e = Math.min(this.height, t.lineHeight * s);
        r = e / s;
        if (this.length > s + 1) {
          o = (this.height - e) / (this.length - s - 1);
        }
      } else {
        r = this.height / s;
      }
      return {
        firstLine: i,
        lastLine: n,
        perLine: r,
        perChar: o
      };
    }
    blockAt(t, e, i, n) {
      let {
        firstLine: s,
        lastLine: r,
        perLine: o,
        perChar: l
      } = this.heightMetrics(e, n);
      if (e.lineWrapping) {
        let s = n + (t < e.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t - i) / this.height)) * this.length));
        let r = e.doc.lineAt(s);
        let a = o + r.length * l;
        let h = Math.max(i, t - a / 2);
        return new e1(r.from, r.length, h, a, 0);
      }
      {
        let n = Math.max(0, Math.min(r - s, Math.floor((t - i) / o)));
        let {
          from: l,
          length: a
        } = e.doc.line(s + n);
        return new e1(l, a, i + o * n, o, 0);
      }
    }
    lineAt(t, e, i, n, s) {
      if (e == e2.ByHeight) {
        return this.blockAt(t, i, n, s);
      }
      if (e == e2.ByPosNoHeight) {
        let {
          from: e,
          to: n
        } = i.doc.lineAt(t);
        return new e1(e, n - e, 0, 0, 0);
      }
      let {
        firstLine: r,
        perLine: o,
        perChar: l
      } = this.heightMetrics(i, s);
      let a = i.doc.lineAt(t);
      let h = o + a.length * l;
      let c = a.number - r;
      let u = n + o * c + l * (a.from - s - c);
      return new e1(a.from, a.length, Math.max(n, Math.min(u, n + this.height - h)), h, 0);
    }
    forEachLine(t, e, i, n, s, r) {
      t = Math.max(t, s);
      e = Math.min(e, s + this.length);
      let {
        firstLine: o,
        perLine: l,
        perChar: a
      } = this.heightMetrics(i, s);
      for (let h = t, c = n; h <= e;) {
        let e = i.doc.lineAt(h);
        if (h == t) {
          let i = e.number - o;
          c += l * i + a * (t - s - i);
        }
        let n = l + a * e.length;
        r(new e1(e.from, e.length, c, n, 0));
        c += n;
        h = e.to + 1;
      }
    }
    replace(t, e, i) {
      let n = this.length - e;
      if (n > 0) {
        let t = i[i.length - 1];
        if (t instanceof e4) {
          i[i.length - 1] = new e4(t.length + n);
        } else {
          i.push(null, new e4(n - 1));
        }
      }
      if (t > 0) {
        let e = i[0];
        if (e instanceof e4) {
          i[0] = new e4(t + e.length);
        } else {
          i.unshift(new e4(t - 1), null);
        }
      }
      return e6.of(i);
    }
    decomposeLeft(t, e) {
      e.push(new e4(t - 1), null);
    }
    decomposeRight(t, e) {
      e.push(null, new e4(this.length - t - 1));
    }
    updateHeight(t, e = 0, i = false, n) {
      let s = e + this.length;
      if (n && n.from <= e + this.length && n.more) {
        let i = [];
        let r = Math.max(e, n.from);
        let o = -1;
        for (n.from > e && i.push(new e4(n.from - e - 1).updateHeight(t, e)); r <= s && n.more;) {
          let e = t.doc.lineAt(r).length;
          if (i.length) {
            i.push(null);
          }
          let s = n.heights[n.index++];
          if (o == -1) {
            o = s;
          } else if (Math.abs(s - o) >= 0.001) {
            o = -2;
          }
          let l = new e8(e, s);
          l.outdated = false;
          i.push(l);
          r += e + 1;
        }
        if (r <= s) {
          i.push(null, new e4(s - r).updateHeight(t, r));
        }
        let l = e6.of(i);
        if (o < 0 || Math.abs(l.height - this.height) >= 0.001 || Math.abs(o - this.heightMetrics(t, e).perLine) >= 0.001) {
          eY = true;
        }
        return e3(this, l);
      }
      if (i || this.outdated) {
        this.setHeight(t.heightForGap(e, e + this.length));
        this.outdated = false;
      }
      return this;
    }
    toString() {
      return `gap(${this.length})`;
    }
  }
  class e9 extends e6 {
    constructor(t, e, i) {
      super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0));
      this.left = t;
      this.right = i;
      this.size = t.size + i.size;
    }
    get break() {
      return this.flags & 1;
    }
    blockAt(t, e, i, n) {
      let s = i + this.left.height;
      if (t < s) {
        return this.left.blockAt(t, e, i, n);
      } else {
        return this.right.blockAt(t, e, s, n + this.left.length + this.break);
      }
    }
    lineAt(t, e, i, n, s) {
      let r = n + this.left.height;
      let o = s + this.left.length + this.break;
      let l = e == e2.ByHeight ? t < r : t < o;
      let a = l ? this.left.lineAt(t, e, i, n, s) : this.right.lineAt(t, e, i, r, o);
      if (this.break || (l ? a.to < o : a.from > o)) {
        return a;
      }
      let h = e == e2.ByPosNoHeight ? e2.ByPosNoHeight : e2.ByPos;
      if (l) {
        return a.join(this.right.lineAt(o, h, i, r, o));
      } else {
        return this.left.lineAt(o, h, i, n, s).join(a);
      }
    }
    forEachLine(t, e, i, n, s, r) {
      let o = n + this.left.height;
      let l = s + this.left.length + this.break;
      if (this.break) {
        if (t < l) {
          this.left.forEachLine(t, e, i, n, s, r);
        }
        if (e >= l) {
          this.right.forEachLine(t, e, i, o, l, r);
        }
      } else {
        let a = this.lineAt(l, e2.ByPos, i, n, s);
        if (t < a.from) {
          this.left.forEachLine(t, a.from - 1, i, n, s, r);
        }
        if (a.to >= t && a.from <= e) {
          r(a);
        }
        if (e > a.to) {
          this.right.forEachLine(a.to + 1, e, i, o, l, r);
        }
      }
    }
    replace(t, e, i) {
      let n = this.left.length + this.break;
      if (e < n) {
        return this.balanced(this.left.replace(t, e, i), this.right);
      }
      if (t > this.left.length) {
        return this.balanced(this.left, this.right.replace(t - n, e - n, i));
      }
      let s = [];
      if (t > 0) {
        this.decomposeLeft(t, s);
      }
      let r = s.length;
      for (let t of i) {
        s.push(t);
      }
      if (t > 0) {
        e7(s, r - 1);
      }
      if (e < this.length) {
        let t = s.length;
        this.decomposeRight(e, s);
        e7(s, t);
      }
      return e6.of(s);
    }
    decomposeLeft(t, e) {
      let i = this.left.length;
      if (t <= i) {
        return this.left.decomposeLeft(t, e);
      }
      e.push(this.left);
      if (this.break && t >= ++i) {
        e.push(null);
      }
      if (t > i) {
        this.right.decomposeLeft(t - i, e);
      }
    }
    decomposeRight(t, e) {
      let i = this.left.length;
      let n = i + this.break;
      if (t >= n) {
        return this.right.decomposeRight(t - n, e);
      }
      if (t < i) {
        this.left.decomposeRight(t, e);
      }
      if (this.break && t < n) {
        e.push(null);
      }
      e.push(this.right);
    }
    balanced(t, e) {
      if (t.size > e.size * 2 || e.size > t.size * 2) {
        return e6.of(this.break ? [t, null, e] : [t, e]);
      } else {
        this.left = e3(this.left, t);
        this.right = e3(this.right, e);
        this.setHeight(t.height + e.height);
        this.outdated = t.outdated || e.outdated;
        this.size = t.size + e.size;
        this.length = t.length + this.break + e.length;
        return this;
      }
    }
    updateHeight(t, e = 0, i = false, n) {
      let {
        left: s,
        right: r
      } = this;
      let o = e + s.length + this.break;
      let l = null;
      if (n && n.from <= e + s.length && n.more) {
        l = s = s.updateHeight(t, e, i, n);
      } else {
        s.updateHeight(t, e, i);
      }
      if (n && n.from <= o + r.length && n.more) {
        l = r = r.updateHeight(t, o, i, n);
      } else {
        r.updateHeight(t, o, i);
      }
      if (l) {
        return this.balanced(s, r);
      } else {
        this.height = this.left.height + this.right.height;
        this.outdated = false;
        return this;
      }
    }
    toString() {
      return this.left + (this.break ? " " : "-") + this.right;
    }
  }
  function e7(t, e) {
    let i;
    let n;
    if (t[e] == null && (i = t[e - 1]) instanceof e4 && (n = t[e + 1]) instanceof e4) {
      t.splice(e - 1, 3, new e4(i.length + 1 + n.length));
    }
  }
  class it {
    constructor(t, e) {
      this.pos = t;
      this.oracle = e;
      this.nodes = [];
      this.lineStart = -1;
      this.lineEnd = -1;
      this.covering = null;
      this.writtenTo = t;
    }
    get isCovered() {
      return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
    }
    span(t, e) {
      if (this.lineStart > -1) {
        let t = Math.min(e, this.lineEnd);
        let i = this.nodes[this.nodes.length - 1];
        if (i instanceof e8) {
          i.length += t - this.pos;
        } else if (t > this.pos || !this.isCovered) {
          this.nodes.push(new e8(t - this.pos, -1));
        }
        this.writtenTo = t;
        if (e > t) {
          this.nodes.push(null);
          this.writtenTo++;
          this.lineStart = -1;
        }
      }
      this.pos = e;
    }
    point(t, e, i) {
      if (t < e || i.heightRelevant) {
        let n = i.widget ? i.widget.estimatedHeight : 0;
        let s = i.widget ? i.widget.lineBreaks : 0;
        if (n < 0) {
          n = this.oracle.lineHeight;
        }
        let r = e - t;
        if (i.block) {
          this.addBlock(new e5(r, n, i));
        } else if (r || s || n >= 5) {
          this.addLineDeco(n, s, r);
        }
      } else if (e > t) {
        this.span(t, e);
      }
      if (this.lineEnd > -1 && this.lineEnd < this.pos) {
        this.lineEnd = this.oracle.doc.lineAt(this.pos).to;
      }
    }
    enterLine() {
      if (this.lineStart > -1) {
        return;
      }
      let {
        from: t,
        to: e
      } = this.oracle.doc.lineAt(this.pos);
      this.lineStart = t;
      this.lineEnd = e;
      if (this.writtenTo < t) {
        if (this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) {
          this.nodes.push(this.blankContent(this.writtenTo, t - 1));
        }
        this.nodes.push(null);
      }
      if (this.pos > t) {
        this.nodes.push(new e8(this.pos - t, -1));
      }
      this.writtenTo = this.pos;
    }
    blankContent(t, e) {
      let i = new e4(e - t);
      if (this.oracle.doc.lineAt(t).to == e) {
        i.flags |= 4;
      }
      return i;
    }
    ensureLine() {
      this.enterLine();
      let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
      if (t instanceof e8) {
        return t;
      }
      let e = new e8(0, -1);
      this.nodes.push(e);
      return e;
    }
    addBlock(t) {
      this.enterLine();
      let e = t.deco;
      if (e && e.startSide > 0 && !this.isCovered) {
        this.ensureLine();
      }
      this.nodes.push(t);
      this.writtenTo = this.pos = this.pos + t.length;
      if (e && e.endSide > 0) {
        this.covering = t;
      }
    }
    addLineDeco(t, e, i) {
      let n = this.ensureLine();
      n.length += i;
      n.collapsed += i;
      n.widgetHeight = Math.max(n.widgetHeight, t);
      n.breaks += e;
      this.writtenTo = this.pos = this.pos + i;
    }
    finish(t) {
      let e = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
      if (!(this.lineStart > -1) || e instanceof e8 || this.isCovered) {
        if (this.writtenTo < this.pos || e == null) {
          this.nodes.push(this.blankContent(this.writtenTo, this.pos));
        }
      } else {
        this.nodes.push(new e8(0, -1));
      }
      let i = t;
      for (let t of this.nodes) {
        if (t instanceof e8) {
          t.updateHeight(this.oracle, i);
        }
        i += t ? t.length : 1;
      }
      return this.nodes;
    }
    static build(t, e, i, n) {
      let s = new it(i, t);
      codemirrorStateCore.RangeSet.spans(e, i, n, s, 0);
      return s.finish(i);
    }
  }
  class ie {
    constructor() {
      this.changes = [];
    }
    compareRange() {}
    comparePoint(t, e, i, n) {
      if (t < e || i && i.heightRelevant || n && n.heightRelevant) {
        tv(t, e, this.changes, 5);
      }
    }
  }
  class ii {
    constructor(t, e, i, n) {
      this.from = t;
      this.to = e;
      this.size = i;
      this.displaySize = n;
    }
    static same(t, e) {
      if (t.length != e.length) {
        return false;
      }
      for (let i = 0; i < t.length; i++) {
        let n = t[i];
        let s = e[i];
        if (n.from != s.from || n.to != s.to || n.size != s.size) {
          return false;
        }
      }
      return true;
    }
    draw(t, e) {
      return tf.replace({
        widget: new is(this.displaySize * (e ? t.scaleY : t.scaleX), e)
      }).range(this.from, this.to);
    }
  }
  class is extends tc {
    constructor(t, e) {
      super();
      this.size = t;
      this.vertical = e;
    }
    eq(t) {
      return t.size == this.size && t.vertical == this.vertical;
    }
    toDOM() {
      let t = document.createElement("div");
      if (this.vertical) {
        t.style.height = this.size + "px";
      } else {
        t.style.width = this.size + "px";
        t.style.height = "2px";
        t.style.display = "inline-block";
      }
      return t;
    }
    get estimatedHeight() {
      if (this.vertical) {
        return this.size;
      } else {
        return -1;
      }
    }
  }
  class ir {
    constructor(t) {
      this.state = t;
      this.pixelViewport = {
        left: 0,
        right: window.innerWidth,
        top: 0,
        bottom: 0
      };
      this.inView = true;
      this.paddingTop = 0;
      this.paddingBottom = 0;
      this.contentDOMWidth = 0;
      this.contentDOMHeight = 0;
      this.editorHeight = 0;
      this.editorWidth = 0;
      this.scrollTop = 0;
      this.scrolledToBottom = false;
      this.scaleX = 1;
      this.scaleY = 1;
      this.scrollAnchorPos = 0;
      this.scrollAnchorHeight = -1;
      this.scaler = ih;
      this.scrollTarget = null;
      this.printing = false;
      this.mustMeasureContent = true;
      this.defaultTextDirection = tC.LTR;
      this.visibleRanges = [];
      this.mustEnforceCursorAssoc = false;
      let e = t.facet(t8).some(t => typeof t != "function" && t.class == "cm-lineWrapping");
      this.heightOracle = new eZ(e);
      this.stateDeco = t.facet(t4).filter(t => typeof t != "function");
      this.heightMap = e6.empty().applyChanges(this.stateDeco, codemirrorStateCore.Text.empty, this.heightOracle.setDoc(t.doc), [new er(0, 0, 0, t.doc.length)]);
      for (let t = 0; t < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); t++);
      this.updateViewportLines();
      this.lineGaps = this.ensureLineGaps([]);
      this.lineGapDeco = tf.set(this.lineGaps.map(t => t.draw(this, false)));
      this.computeVisibleRanges();
    }
    updateForViewport() {
      let t = [this.viewport];
      let {
        main: e
      } = this.state.selection;
      for (let i = 0; i <= 1; i++) {
        let n = i ? e.head : e.anchor;
        if (!t.some(({
          from: t,
          to: e
        }) => n >= t && n <= e)) {
          let {
            from: e,
            to: i
          } = this.lineBlockAt(n);
          t.push(new io(e, i));
        }
      }
      this.viewports = t.sort((t, e) => t.from - e.from);
      return this.updateScaler();
    }
    updateScaler() {
      let t = this.scaler;
      this.scaler = this.heightMap.height <= 7000000 ? ih : new ic(this.heightOracle, this.heightMap, this.viewports);
      return !t.eq(this.scaler) * 2;
    }
    updateViewportLines() {
      this.viewportLines = [];
      this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, t => {
        this.viewportLines.push(iu(t, this.scaler));
      });
    }
    update(t, e = null) {
      var i;
      var n;
      let s;
      this.state = t.state;
      let r = this.stateDeco;
      this.stateDeco = this.state.facet(t4).filter(t => typeof t != "function");
      let o = t.changedRanges;
      let a = er.extendWithRanges(o, (i = this.stateDeco, n = t ? t.changes : codemirrorStateCore.ChangeSet.empty(this.state.doc.length), s = new ie(), codemirrorStateCore.RangeSet.compare(r, i, n, s, 0), s.changes));
      let h = this.heightMap.height;
      let c = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
      eY = false;
      this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), a);
      if (this.heightMap.height != h || eY) {
        t.flags |= 2;
      }
      if (c) {
        this.scrollAnchorPos = t.changes.mapPos(c.from, -1);
        this.scrollAnchorHeight = c.top;
      } else {
        this.scrollAnchorPos = -1;
        this.scrollAnchorHeight = this.heightMap.height;
      }
      let u = a.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
      if (e && (e.range.head < u.from || e.range.head > u.to) || !this.viewportIsAppropriate(u)) {
        u = this.getViewport(0, e);
      }
      let f = u.from != this.viewport.from || u.to != this.viewport.to;
      this.viewport = u;
      t.flags |= this.updateForViewport();
      if (f || !t.changes.empty || t.flags & 2) {
        this.updateViewportLines();
      }
      if (this.lineGaps.length || this.viewport.to - this.viewport.from > 4000) {
        this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes)));
      }
      t.flags |= this.computeVisibleRanges();
      if (e) {
        this.scrollTarget = e;
      }
      if (!this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(tU)) {
        this.mustEnforceCursorAssoc = true;
      }
    }
    measure(t) {
      let e = t.contentDOM;
      let i = window.getComputedStyle(e);
      let n = this.heightOracle;
      let s = i.whiteSpace;
      this.defaultTextDirection = i.direction == "rtl" ? tC.RTL : tC.LTR;
      let r = this.heightOracle.mustRefreshForWrapping(s);
      let o = e.getBoundingClientRect();
      let a = r || this.mustMeasureContent || this.contentDOMHeight != o.height;
      this.contentDOMHeight = o.height;
      this.mustMeasureContent = false;
      let h = 0;
      let c = 0;
      if (o.width && o.height) {
        let {
          scaleX: t,
          scaleY: i
        } = M(e, o);
        if (t > 0.005 && Math.abs(this.scaleX - t) > 0.005 || i > 0.005 && Math.abs(this.scaleY - i) > 0.005) {
          this.scaleX = t;
          this.scaleY = i;
          h |= 8;
          r = a = true;
        }
      }
      let u = (parseInt(i.paddingTop) || 0) * this.scaleY;
      let f = (parseInt(i.paddingBottom) || 0) * this.scaleY;
      if (this.paddingTop != u || this.paddingBottom != f) {
        this.paddingTop = u;
        this.paddingBottom = f;
        h |= 10;
      }
      if (this.editorWidth != t.scrollDOM.clientWidth) {
        if (n.lineWrapping) {
          a = true;
        }
        this.editorWidth = t.scrollDOM.clientWidth;
        h |= 8;
      }
      let d = t.scrollDOM.scrollTop * this.scaleY;
      if (this.scrollTop != d) {
        this.scrollAnchorHeight = -1;
        this.scrollTop = d;
      }
      this.scrolledToBottom = R(t.scrollDOM);
      let p = (this.printing ? function (t, e) {
        let i = t.getBoundingClientRect();
        return {
          left: 0,
          right: i.right - i.left,
          top: e,
          bottom: i.bottom - (i.top + e)
        };
      } : function (t, e) {
        let i = t.getBoundingClientRect();
        let n = t.ownerDocument;
        let s = n.defaultView || window;
        let r = Math.max(0, i.left);
        let o = Math.min(s.innerWidth, i.right);
        let l = Math.max(0, i.top);
        let a = Math.min(s.innerHeight, i.bottom);
        for (let e = t.parentNode; e && e != n.body;) {
          if (e.nodeType == 1) {
            let i = e;
            let n = window.getComputedStyle(i);
            if ((i.scrollHeight > i.clientHeight || i.scrollWidth > i.clientWidth) && n.overflow != "visible") {
              let n = i.getBoundingClientRect();
              r = Math.max(r, n.left);
              o = Math.min(o, n.right);
              l = Math.max(l, n.top);
              a = Math.min(e == t.parentNode ? s.innerHeight : a, n.bottom);
            }
            e = n.position == "absolute" || n.position == "fixed" ? i.offsetParent : i.parentNode;
          } else if (e.nodeType == 11) {
            e = e.host;
          } else {
            break;
          }
        }
        return {
          left: r - i.left,
          right: Math.max(r, o) - i.left,
          top: l - (i.top + e),
          bottom: Math.max(l, a) - (i.top + e)
        };
      })(e, this.paddingTop);
      let m = p.top - this.pixelViewport.top;
      let g = p.bottom - this.pixelViewport.bottom;
      this.pixelViewport = p;
      let v = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
      if (v != this.inView) {
        this.inView = v;
        if (v) {
          a = true;
        }
      }
      if (!this.inView && !this.scrollTarget) {
        return 0;
      }
      let b = o.width;
      if (this.contentDOMWidth != b || this.editorHeight != t.scrollDOM.clientHeight) {
        this.contentDOMWidth = o.width;
        this.editorHeight = t.scrollDOM.clientHeight;
        h |= 8;
      }
      if (a) {
        let e = t.docView.measureVisibleLineHeights(this.viewport);
        if (n.mustRefreshForHeights(e)) {
          r = true;
        }
        if (r || n.lineWrapping && Math.abs(b - this.contentDOMWidth) > n.charWidth) {
          let {
            lineHeight: i,
            charWidth: o,
            textHeight: l
          } = t.docView.measureTextSize();
          if (r = i > 0 && n.refresh(s, i, o, l, b / o, e)) {
            t.docView.minWidth = 0;
            h |= 8;
          }
        }
        if (m > 0 && g > 0) {
          c = Math.max(m, g);
        } else if (m < 0 && g < 0) {
          c = Math.min(m, g);
        }
        eY = false;
        for (let i of this.viewports) {
          let s = i.from == this.viewport.from ? e : t.docView.measureVisibleLineHeights(i);
          this.heightMap = (r ? e6.empty().applyChanges(this.stateDeco, codemirrorStateCore.Text.empty, this.heightOracle, [new er(0, 0, 0, t.state.doc.length)]) : this.heightMap).updateHeight(n, 0, r, new e0(i.from, s));
        }
        if (eY) {
          h |= 2;
        }
      }
      let w = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
      if (w) {
        if (h & 2) {
          h |= this.updateScaler();
        }
        this.viewport = this.getViewport(c, this.scrollTarget);
        h |= this.updateForViewport();
      }
      if (h & 2 || w) {
        this.updateViewportLines();
      }
      if (this.lineGaps.length || this.viewport.to - this.viewport.from > 4000) {
        this.updateLineGaps(this.ensureLineGaps(r ? [] : this.lineGaps, t));
      }
      h |= this.computeVisibleRanges();
      if (this.mustEnforceCursorAssoc) {
        this.mustEnforceCursorAssoc = false;
        t.docView.enforceCursorAssoc();
      }
      return h;
    }
    get visibleTop() {
      return this.scaler.fromDOM(this.pixelViewport.top);
    }
    get visibleBottom() {
      return this.scaler.fromDOM(this.pixelViewport.bottom);
    }
    getViewport(t, e) {
      let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1000 / 2));
      let n = this.heightMap;
      let s = this.heightOracle;
      let {
        visibleTop: r,
        visibleBottom: o
      } = this;
      let l = new io(n.lineAt(r - i * 1000, e2.ByHeight, s, 0, 0).from, n.lineAt(o + (1 - i) * 1000, e2.ByHeight, s, 0, 0).to);
      if (e) {
        let {
          head: t
        } = e.range;
        if (t < l.from || t > l.to) {
          let i = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top);
          let r = n.lineAt(t, e2.ByPos, s, 0, 0);
          let o;
          o = e.y == "center" ? (r.top + r.bottom) / 2 - i / 2 : e.y == "start" || e.y == "nearest" && t < l.from ? r.top : r.bottom - i;
          l = new io(n.lineAt(o - 500, e2.ByHeight, s, 0, 0).from, n.lineAt(o + i + 500, e2.ByHeight, s, 0, 0).to);
        }
      }
      return l;
    }
    mapViewport(t, e) {
      let i = e.mapPos(t.from, -1);
      let n = e.mapPos(t.to, 1);
      return new io(this.heightMap.lineAt(i, e2.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n, e2.ByPos, this.heightOracle, 0, 0).to);
    }
    viewportIsAppropriate({
      from: t,
      to: e
    }, i = 0) {
      if (!this.inView) {
        return true;
      }
      let {
        top: n
      } = this.heightMap.lineAt(t, e2.ByPos, this.heightOracle, 0, 0);
      let {
        bottom: s
      } = this.heightMap.lineAt(e, e2.ByPos, this.heightOracle, 0, 0);
      let {
        visibleTop: r,
        visibleBottom: o
      } = this;
      return (t == 0 || n <= r - Math.max(10, Math.min(-i, 250))) && (e == this.state.doc.length || s >= o + Math.max(10, Math.min(i, 250))) && n > r - 2000 && s < o + 2000;
    }
    mapLineGaps(t, e) {
      if (!t.length || e.empty) {
        return t;
      }
      let i = [];
      for (let n of t) {
        if (!e.touchesRange(n.from, n.to)) {
          i.push(new ii(e.mapPos(n.from), e.mapPos(n.to), n.size, n.displaySize));
        }
      }
      return i;
    }
    ensureLineGaps(t, e) {
      let i = this.heightOracle.lineWrapping;
      let n = i ? 10000 : 2000;
      let s = n >> 1;
      let r = n << 1;
      if (this.defaultTextDirection != tC.LTR && !i) {
        return [];
      }
      let o = [];
      let a = (n, r, h, c) => {
        if (r - n < s) {
          return;
        }
        let u = this.state.selection.main;
        let f = [u.from];
        if (!u.empty) {
          f.push(u.to);
        }
        for (let t of f) {
          if (t > n && t < r) {
            a(n, t - 10, h, c);
            a(t + 10, r, h, c);
            return;
          }
        }
        let d = function (t, e) {
          for (let i of t) {
            if (e(i)) {
              return i;
            }
          }
        }(t, t => t.from >= h.from && t.to <= h.to && Math.abs(t.from - n) < s && Math.abs(t.to - r) < s && !f.some(e => t.from < e && t.to > e));
        if (!d) {
          if (r < h.to && e && i && e.visibleRanges.some(t => t.from <= r && t.to >= r)) {
            let t = e.moveToLineBoundary(codemirrorStateCore.EditorSelection.cursor(r), false, true).head;
            if (t > n) {
              r = t;
            }
          }
          let t = this.gapSize(h, n, r, c);
          let s = i || t < 2000000 ? t : 2000000;
          d = new ii(n, r, t, s);
        }
        o.push(d);
      };
      let h = e => {
        var s;
        var o;
        var h;
        let c;
        let u;
        let f;
        let d;
        let p;
        if (e.length < r || e.type != tu.Text) {
          return;
        }
        s = e.from;
        o = e.to;
        h = this.stateDeco;
        f = [];
        d = s;
        p = 0;
        codemirrorStateCore.RangeSet.spans(h, s, o, {
          span() {},
          point(t, e) {
            if (t > d) {
              f.push({
                from: d,
                to: t
              });
              p += t - d;
            }
            d = e;
          }
        }, 20);
        if (d < o) {
          f.push({
            from: d,
            to: o
          });
          p += o - d;
        }
        let m = {
          total: p,
          ranges: f
        };
        if (m.total < r) {
          return;
        }
        let g = this.scrollTarget ? this.scrollTarget.range.head : null;
        if (i) {
          let t;
          let i;
          let s = n / this.heightOracle.lineLength * this.heightOracle.lineHeight;
          if (g != null) {
            let n = ia(m, g);
            let r = ((this.visibleBottom - this.visibleTop) / 2 + s) / e.height;
            t = n - r;
            i = n + r;
          } else {
            t = (this.visibleTop - e.top - s) / e.height;
            i = (this.visibleBottom - e.top + s) / e.height;
          }
          c = il(m, t);
          u = il(m, i);
        } else {
          let i;
          let s;
          let r = m.total * this.heightOracle.charWidth;
          let o = n * this.heightOracle.charWidth;
          let l = 0;
          if (r > 2000000) {
            for (let i of t) {
              if (i.from >= e.from && i.from < e.to && i.size != i.displaySize && i.from * this.heightOracle.charWidth + l < this.pixelViewport.left) {
                l = i.size - i.displaySize;
              }
            }
          }
          let a = this.pixelViewport.left + l;
          let h = this.pixelViewport.right + l;
          if (g != null) {
            let t = ia(m, g);
            let e = ((h - a) / 2 + o) / r;
            i = t - e;
            s = t + e;
          } else {
            i = (a - o) / r;
            s = (h + o) / r;
          }
          c = il(m, i);
          u = il(m, s);
        }
        if (c > e.from) {
          a(e.from, c, e, m);
        }
        if (u < e.to) {
          a(u, e.to, e, m);
        }
      };
      for (let t of this.viewportLines) {
        if (Array.isArray(t.type)) {
          t.type.forEach(h);
        } else {
          h(t);
        }
      }
      return o;
    }
    gapSize(t, e, i, n) {
      let s = ia(n, i) - ia(n, e);
      if (this.heightOracle.lineWrapping) {
        return t.height * s;
      } else {
        return n.total * this.heightOracle.charWidth * s;
      }
    }
    updateLineGaps(t) {
      if (!ii.same(t, this.lineGaps)) {
        this.lineGaps = t;
        this.lineGapDeco = tf.set(t.map(t => t.draw(this, this.heightOracle.lineWrapping)));
      }
    }
    computeVisibleRanges() {
      let t = this.stateDeco;
      if (this.lineGaps.length) {
        t = t.concat(this.lineGapDeco);
      }
      let e = [];
      codemirrorStateCore.RangeSet.spans(t, this.viewport.from, this.viewport.to, {
        span(t, i) {
          e.push({
            from: t,
            to: i
          });
        },
        point() {}
      }, 20);
      let i = e.length != this.visibleRanges.length || this.visibleRanges.some((t, i) => t.from != e[i].from || t.to != e[i].to);
      this.visibleRanges = e;
      return !!i * 4;
    }
    lineBlockAt(t) {
      return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find(e => e.from <= t && e.to >= t) || iu(this.heightMap.lineAt(t, e2.ByPos, this.heightOracle, 0, 0), this.scaler);
    }
    lineBlockAtHeight(t) {
      return t >= this.viewportLines[0].top && t <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find(e => e.top <= t && e.bottom >= t) || iu(this.heightMap.lineAt(this.scaler.fromDOM(t), e2.ByHeight, this.heightOracle, 0, 0), this.scaler);
    }
    scrollAnchorAt(t) {
      let e = this.lineBlockAtHeight(t + 8);
      if (e.from >= this.viewport.from || this.viewportLines[0].top - t > 200) {
        return e;
      } else {
        return this.viewportLines[0];
      }
    }
    elementAtHeight(t) {
      return iu(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler);
    }
    get docHeight() {
      return this.scaler.toDOM(this.heightMap.height);
    }
    get contentHeight() {
      return this.docHeight + this.paddingTop + this.paddingBottom;
    }
  }
  class io {
    constructor(t, e) {
      this.from = t;
      this.to = e;
    }
  }
  function il({
    total: t,
    ranges: e
  }, i) {
    if (i <= 0) {
      return e[0].from;
    }
    if (i >= 1) {
      return e[e.length - 1].to;
    }
    let n = Math.floor(t * i);
    for (let t = 0;; t++) {
      let {
        from: i,
        to: s
      } = e[t];
      let r = s - i;
      if (n <= r) {
        return i + n;
      }
      n -= r;
    }
  }
  function ia(t, e) {
    let i = 0;
    for (let {
      from: n,
      to: s
    } of t.ranges) {
      if (e <= s) {
        i += e - n;
        break;
      }
      i += s - n;
    }
    return i / t.total;
  }
  let ih = {
    toDOM: t => t,
    fromDOM: t => t,
    scale: 1,
    eq(t) {
      return t == this;
    }
  };
  class ic {
    constructor(t, e, i) {
      let n = 0;
      let s = 0;
      let r = 0;
      this.viewports = i.map(({
        from: i,
        to: s
      }) => {
        let r = e.lineAt(i, e2.ByPos, t, 0, 0).top;
        let o = e.lineAt(s, e2.ByPos, t, 0, 0).bottom;
        n += o - r;
        return {
          from: i,
          to: s,
          top: r,
          bottom: o,
          domTop: 0,
          domBottom: 0
        };
      });
      this.scale = (7000000 - n) / (e.height - n);
      for (let o of this.viewports) {
        o.domTop = r + (o.top - s) * this.scale;
        r = o.domBottom = o.domTop + (o.bottom - o.top);
        s = o.bottom;
      }
    }
    toDOM(t) {
      for (let e = 0, i = 0, n = 0;; e++) {
        let s = e < this.viewports.length ? this.viewports[e] : null;
        if (!s || t < s.top) {
          return n + (t - i) * this.scale;
        }
        if (t <= s.bottom) {
          return s.domTop + (t - s.top);
        }
        i = s.bottom;
        n = s.domBottom;
      }
    }
    fromDOM(t) {
      for (let e = 0, i = 0, n = 0;; e++) {
        let s = e < this.viewports.length ? this.viewports[e] : null;
        if (!s || t < s.domTop) {
          return i + (t - n) / this.scale;
        }
        if (t <= s.domBottom) {
          return s.top + (t - s.domTop);
        }
        i = s.bottom;
        n = s.domBottom;
      }
    }
    eq(t) {
      return t instanceof ic && this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, i) => e.from == t.viewports[i].from && e.to == t.viewports[i].to);
    }
  }
  function iu(t, e) {
    if (e.scale == 1) {
      return t;
    }
    let i = e.toDOM(t.top);
    let n = e.toDOM(t.bottom);
    return new e1(t.from, t.length, i, n - i, Array.isArray(t._content) ? t._content.map(t => iu(t, e)) : t._content);
  }
  let id = codemirrorStateCore.Facet.define({
    combine: t => t.join(" ")
  });
  let ip = codemirrorStateCore.Facet.define({
    combine: t => t.indexOf(true) > -1
  });
  let im = cssStyleManager.StyleManager.newName();
  let ig = cssStyleManager.StyleManager.newName();
  let iv = cssStyleManager.StyleManager.newName();
  let ib = {
    "&light": "." + ig,
    "&dark": "." + iv
  };
  function iw(t, e, i) {
    return new cssStyleManager.StyleManager(e, {
      finish: e => /&/.test(e) ? e.replace(/&\w*/, e => {
        if (e == "&") {
          return t;
        }
        if (!i || !i[e]) {
          throw RangeError(`Unsupported selector: ${e}`);
        }
        return i[e];
      }) : t + " " + e
    });
  }
  let iy = iw("." + im, {
    "&": {
      position: "relative !important",
      boxSizing: "border-box",
      "&.cm-focused": {
        outline: "1px dotted #212121"
      },
      display: "flex !important",
      flexDirection: "column"
    },
    ".cm-scroller": {
      display: "flex !important",
      alignItems: "flex-start !important",
      fontFamily: "monospace",
      lineHeight: 1.4,
      height: "100%",
      overflowX: "auto",
      position: "relative",
      zIndex: 0,
      overflowAnchor: "none"
    },
    ".cm-content": {
      margin: 0,
      flexGrow: 2,
      flexShrink: 0,
      display: "block",
      whiteSpace: "pre",
      wordWrap: "normal",
      boxSizing: "border-box",
      minHeight: "100%",
      padding: "4px 0",
      outline: "none",
      "&[contenteditable=true]": {
        WebkitUserModify: "read-write-plaintext-only"
      }
    },
    ".cm-lineWrapping": {
      whiteSpace_fallback: "pre-wrap",
      whiteSpace: "break-spaces",
      wordBreak: "break-word",
      overflowWrap: "anywhere",
      flexShrink: 1
    },
    "&light .cm-content": {
      caretColor: "black"
    },
    "&dark .cm-content": {
      caretColor: "white"
    },
    ".cm-line": {
      display: "block",
      padding: "0 2px 0 6px"
    },
    ".cm-layer": {
      position: "absolute",
      left: 0,
      top: 0,
      contain: "size style",
      "& > *": {
        position: "absolute"
      }
    },
    "&light .cm-selectionBackground": {
      background: "#d9d9d9"
    },
    "&dark .cm-selectionBackground": {
      background: "#222"
    },
    "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
      background: "#d7d4f0"
    },
    "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
      background: "#233"
    },
    ".cm-cursorLayer": {
      pointerEvents: "none"
    },
    "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
      animation: "steps(1) cm-blink 1.2s infinite"
    },
    "@keyframes cm-blink": {
      "0%": {},
      "50%": {
        opacity: 0
      },
      "100%": {}
    },
    "@keyframes cm-blink2": {
      "0%": {},
      "50%": {
        opacity: 0
      },
      "100%": {}
    },
    ".cm-cursor, .cm-dropCursor": {
      borderLeft: "1.2px solid black",
      marginLeft: "-0.6px",
      pointerEvents: "none"
    },
    ".cm-cursor": {
      display: "none"
    },
    "&dark .cm-cursor": {
      borderLeftColor: "#ddd"
    },
    ".cm-dropCursor": {
      position: "absolute"
    },
    "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
      display: "block"
    },
    ".cm-iso": {
      unicodeBidi: "isolate"
    },
    ".cm-announced": {
      position: "fixed",
      top: "-10000px"
    },
    "@media print": {
      ".cm-announced": {
        display: "none"
      }
    },
    "&light .cm-activeLine": {
      backgroundColor: "#cceeff44"
    },
    "&dark .cm-activeLine": {
      backgroundColor: "#99eeff33"
    },
    "&light .cm-specialChar": {
      color: "red"
    },
    "&dark .cm-specialChar": {
      color: "#f78"
    },
    ".cm-gutters": {
      flexShrink: 0,
      display: "flex",
      height: "100%",
      boxSizing: "border-box",
      insetInlineStart: 0,
      zIndex: 200
    },
    "&light .cm-gutters": {
      backgroundColor: "#f5f5f5",
      color: "#6c6c6c",
      borderRight: "1px solid #ddd"
    },
    "&dark .cm-gutters": {
      backgroundColor: "#333338",
      color: "#ccc"
    },
    ".cm-gutter": {
      display: "flex !important",
      flexDirection: "column",
      flexShrink: 0,
      boxSizing: "border-box",
      minHeight: "100%",
      overflow: "hidden"
    },
    ".cm-gutterElement": {
      boxSizing: "border-box"
    },
    ".cm-lineNumbers .cm-gutterElement": {
      padding: "0 3px 0 5px",
      minWidth: "20px",
      textAlign: "right",
      whiteSpace: "nowrap"
    },
    "&light .cm-activeLineGutter": {
      backgroundColor: "#e2f2ff"
    },
    "&dark .cm-activeLineGutter": {
      backgroundColor: "#222227"
    },
    ".cm-panels": {
      boxSizing: "border-box",
      position: "sticky",
      left: 0,
      right: 0,
      zIndex: 300
    },
    "&light .cm-panels": {
      backgroundColor: "#f5f5f5",
      color: "black"
    },
    "&light .cm-panels-top": {
      borderBottom: "1px solid #ddd"
    },
    "&light .cm-panels-bottom": {
      borderTop: "1px solid #ddd"
    },
    "&dark .cm-panels": {
      backgroundColor: "#333338",
      color: "white"
    },
    ".cm-tab": {
      display: "inline-block",
      overflow: "hidden",
      verticalAlign: "bottom"
    },
    ".cm-widgetBuffer": {
      verticalAlign: "text-top",
      height: "1em",
      width: 0,
      display: "inline"
    },
    ".cm-placeholder": {
      color: "#888",
      display: "inline-block",
      verticalAlign: "top"
    },
    ".cm-highlightSpace": {
      backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
      backgroundPosition: "center"
    },
    ".cm-highlightTab": {
      backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"20\"><path stroke=\"%23888\" stroke-width=\"1\" fill=\"none\" d=\"M1 10H196L190 5M190 15L196 10M197 4L197 16\"/></svg>')",
      backgroundSize: "auto 100%",
      backgroundPosition: "right 90%",
      backgroundRepeat: "no-repeat"
    },
    ".cm-trailingSpace": {
      backgroundColor: "#ff332255"
    },
    ".cm-button": {
      verticalAlign: "middle",
      color: "inherit",
      fontSize: "70%",
      padding: ".2em 1em",
      borderRadius: "1px"
    },
    "&light .cm-button": {
      backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
      border: "1px solid #888",
      "&:active": {
        backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
      }
    },
    "&dark .cm-button": {
      backgroundImage: "linear-gradient(#393939, #111)",
      border: "1px solid #888",
      "&:active": {
        backgroundImage: "linear-gradient(#111, #333)"
      }
    },
    ".cm-textfield": {
      verticalAlign: "middle",
      color: "inherit",
      fontSize: "70%",
      border: "1px solid silver",
      padding: ".2em .5em"
    },
    "&light .cm-textfield": {
      backgroundColor: "white"
    },
    "&dark .cm-textfield": {
      border: "1px solid #555",
      backgroundColor: "inherit"
    }
  }, ib);
  let ix = {
    childList: true,
    characterData: true,
    subtree: true,
    attributes: true,
    characterDataOldValue: true
  };
  let ik = Z.ie && Z.ie_version <= 11;
  class iS {
    constructor(t) {
      this.view = t;
      this.active = false;
      this.editContext = null;
      this.selectionRange = new A();
      this.selectionChanged = false;
      this.delayedFlush = -1;
      this.resizeTimeout = -1;
      this.queue = [];
      this.delayedAndroidKey = null;
      this.flushingAndroidKey = -1;
      this.lastChange = 0;
      this.scrollTargets = [];
      this.intersection = null;
      this.resizeScroll = null;
      this.intersecting = false;
      this.gapIntersection = null;
      this.gaps = [];
      this.printQuery = null;
      this.parentCheck = -1;
      this.dom = t.contentDOM;
      this.observer = new MutationObserver(e => {
        for (let t of e) {
          this.queue.push(t);
        }
        if ((Z.ie && Z.ie_version <= 11 || Z.ios && t.composing) && e.some(t => t.type == "childList" && t.removedNodes.length || t.type == "characterData" && t.oldValue.length > t.target.nodeValue.length)) {
          this.flushSoon();
        } else {
          this.flush();
        }
      });
      if (window.EditContext && t.constructor.EDIT_CONTEXT !== false && (!Z.chrome || !(Z.chrome_version < 126))) {
        this.editContext = new iA(t);
        if (t.state.facet(t0)) {
          t.contentDOM.editContext = this.editContext.editContext;
        }
      }
      if (ik) {
        this.onCharData = t => {
          this.queue.push({
            target: t.target,
            type: "characterData",
            oldValue: t.prevValue
          });
          this.flushSoon();
        };
      }
      this.onSelectionChange = this.onSelectionChange.bind(this);
      this.onResize = this.onResize.bind(this);
      this.onPrint = this.onPrint.bind(this);
      this.onScroll = this.onScroll.bind(this);
      if (window.matchMedia) {
        this.printQuery = window.matchMedia("print");
      }
      if (typeof ResizeObserver == "function") {
        this.resizeScroll = new ResizeObserver(() => {
          if (this.view.docView?.lastUpdate < Date.now() - 75) {
            this.onResize();
          }
        });
        this.resizeScroll.observe(t.scrollDOM);
      }
      this.addWindowListeners(this.win = t.win);
      this.start();
      if (typeof IntersectionObserver == "function") {
        this.intersection = new IntersectionObserver(t => {
          if (this.parentCheck < 0) {
            this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1000);
          }
          if (t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting) {
            this.intersecting = !this.intersecting;
            if (this.intersecting != this.view.inView) {
              this.onScrollChanged(document.createEvent("Event"));
            }
          }
        }, {
          threshold: [0, 0.001]
        });
        this.intersection.observe(this.dom);
        this.gapIntersection = new IntersectionObserver(t => {
          if (t.length > 0 && t[t.length - 1].intersectionRatio > 0) {
            this.onScrollChanged(document.createEvent("Event"));
          }
        }, {});
      }
      this.listenForScroll();
      this.readSelectionRange();
    }
    onScrollChanged(t) {
      this.view.inputState.runHandlers("scroll", t);
      if (this.intersecting) {
        this.view.measure();
      }
    }
    onScroll(t) {
      if (this.intersecting) {
        this.flush(false);
      }
      if (this.editContext) {
        this.view.requestMeasure(this.editContext.measureReq);
      }
      this.onScrollChanged(t);
    }
    onResize() {
      if (this.resizeTimeout < 0) {
        this.resizeTimeout = setTimeout(() => {
          this.resizeTimeout = -1;
          this.view.requestMeasure();
        }, 50);
      }
    }
    onPrint(t) {
      if (t.type != "change" && t.type || t.matches) {
        this.view.viewState.printing = true;
        this.view.measure();
        setTimeout(() => {
          this.view.viewState.printing = false;
          this.view.requestMeasure();
        }, 500);
      }
    }
    updateGaps(t) {
      if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some((e, i) => e != t[i]))) {
        this.gapIntersection.disconnect();
        for (let e of t) {
          this.gapIntersection.observe(e);
        }
        this.gaps = t;
      }
    }
    onSelectionChange(t) {
      let e = this.selectionChanged;
      if (!this.readSelectionRange() || this.delayedAndroidKey) {
        return;
      }
      let {
        view: i
      } = this;
      let n = this.selectionRange;
      if (i.state.facet(t0) ? i.root.activeElement != this.dom : !v(this.dom, n)) {
        return;
      }
      let s = n.anchorNode && i.docView.nearest(n.anchorNode);
      if (s && s.ignoreEvent(t)) {
        if (!e) {
          this.selectionChanged = false;
        }
        return;
      }
      if ((Z.ie && Z.ie_version <= 11 || Z.android && Z.chrome) && !i.state.selection.main.empty && n.focusNode && w(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset)) {
        this.flushSoon();
      } else {
        this.flush(false);
      }
    }
    readSelectionRange() {
      let {
        view: t
      } = this;
      let e = m(t.root);
      if (!e) {
        return false;
      }
      let i = Z.safari && t.root.nodeType == 11 && t.root.activeElement == this.dom && function (t, e) {
        if (e.getComposedRanges) {
          let i = e.getComposedRanges(t.root)[0];
          if (i) {
            return iM(t, i);
          }
        }
        let i = null;
        function n(t) {
          t.preventDefault();
          t.stopImmediatePropagation();
          i = t.getTargetRanges()[0];
        }
        t.contentDOM.addEventListener("beforeinput", n, true);
        t.dom.ownerDocument.execCommand("indent");
        t.contentDOM.removeEventListener("beforeinput", n, true);
        if (i) {
          return iM(t, i);
        } else {
          return null;
        }
      }(this.view, e) || e;
      if (!i || this.selectionRange.eq(i)) {
        return false;
      }
      let n = v(this.dom, i);
      if (n && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && function (t, e) {
        let i = e.focusNode;
        let n = e.focusOffset;
        if (!i || e.anchorNode != i || e.anchorOffset != n) {
          return false;
        }
        for (n = Math.min(n, S(i));;) {
          if (n) {
            if (i.nodeType != 1) {
              return false;
            }
            let t = i.childNodes[n - 1];
            if (t.contentEditable == "false") {
              n--;
            } else {
              n = S(i = t);
            }
          } else {
            if (i == t) {
              return true;
            }
            n = y(i);
            i = i.parentNode;
          }
        }
      }(this.dom, i)) {
        this.view.inputState.lastFocusTime = 0;
        t.docView.updateSelection();
        return false;
      } else {
        this.selectionRange.setRange(i);
        if (n) {
          this.selectionChanged = true;
        }
        return true;
      }
    }
    setSelectionRange(t, e) {
      this.selectionRange.set(t.node, t.offset, e.node, e.offset);
      this.selectionChanged = false;
    }
    clearSelectionRange() {
      this.selectionRange.set(null, 0, null, 0);
    }
    listenForScroll() {
      this.parentCheck = -1;
      let t = 0;
      let e = null;
      for (let i = this.dom; i;) {
        if (i.nodeType == 1) {
          if (!e && t < this.scrollTargets.length && this.scrollTargets[t] == i) {
            t++;
          } else {
            e ||= this.scrollTargets.slice(0, t);
          }
          if (e) {
            e.push(i);
          }
          i = i.assignedSlot || i.parentNode;
        } else if (i.nodeType == 11) {
          i = i.host;
        } else {
          break;
        }
      }
      if (t < this.scrollTargets.length && !e) {
        e = this.scrollTargets.slice(0, t);
      }
      if (e) {
        for (let t of this.scrollTargets) {
          t.removeEventListener("scroll", this.onScroll);
        }
        for (let t of this.scrollTargets = e) {
          t.addEventListener("scroll", this.onScroll);
        }
      }
    }
    ignore(t) {
      if (!this.active) {
        return t();
      }
      try {
        this.stop();
        return t();
      } finally {
        this.start();
        this.clear();
      }
    }
    start() {
      if (!this.active) {
        this.observer.observe(this.dom, ix);
        if (ik) {
          this.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
        }
        this.active = true;
      }
    }
    stop() {
      if (this.active) {
        this.active = false;
        this.observer.disconnect();
        if (ik) {
          this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
        }
      }
    }
    clear() {
      this.processRecords();
      this.queue.length = 0;
      this.selectionChanged = false;
    }
    delayAndroidKey(t, e) {
      if (!this.delayedAndroidKey) {
        this.flushingAndroidKey = this.view.win.requestAnimationFrame(() => {
          let t = this.delayedAndroidKey;
          if (t) {
            this.clearDelayedAndroidKey();
            this.view.inputState.lastKeyCode = t.keyCode;
            this.view.inputState.lastKeyTime = Date.now();
            if (!this.flush() && t.force) {
              P(this.dom, t.key, t.keyCode);
            }
          }
        });
      }
      if (!this.delayedAndroidKey || t == "Enter") {
        this.delayedAndroidKey = {
          key: t,
          keyCode: e,
          force: this.lastChange < Date.now() - 50 || !!this.delayedAndroidKey?.force
        };
      }
    }
    clearDelayedAndroidKey() {
      this.win.cancelAnimationFrame(this.flushingAndroidKey);
      this.delayedAndroidKey = null;
      this.flushingAndroidKey = -1;
    }
    flushSoon() {
      if (this.delayedFlush < 0) {
        this.delayedFlush = this.view.win.requestAnimationFrame(() => {
          this.delayedFlush = -1;
          this.flush();
        });
      }
    }
    forceFlush() {
      if (this.delayedFlush >= 0) {
        this.view.win.cancelAnimationFrame(this.delayedFlush);
        this.delayedFlush = -1;
      }
      this.flush();
    }
    pendingRecords() {
      for (let t of this.observer.takeRecords()) {
        this.queue.push(t);
      }
      return this.queue;
    }
    processRecords() {
      let t = this.pendingRecords();
      if (t.length) {
        this.queue = [];
      }
      let e = -1;
      let i = -1;
      let n = false;
      for (let s of t) {
        let t = this.readMutation(s);
        if (t) {
          if (t.typeOver) {
            n = true;
          }
          if (e == -1) {
            ({
              from: e,
              to: i
            } = t);
          } else {
            e = Math.min(t.from, e);
            i = Math.max(t.to, i);
          }
        }
      }
      return {
        from: e,
        to: i,
        typeOver: n
      };
    }
    readChange() {
      let {
        from: t,
        to: e,
        typeOver: i
      } = this.processRecords();
      let n = this.selectionChanged && v(this.dom, this.selectionRange);
      if (t < 0 && !n) {
        return null;
      }
      if (t > -1) {
        this.lastChange = Date.now();
      }
      this.view.inputState.lastFocusTime = 0;
      this.selectionChanged = false;
      let s = new ek(this.view, t, e, i);
      this.view.docView.domChanged = {
        newSel: s.newSel ? s.newSel.main : null
      };
      return s;
    }
    flush(t = true) {
      if (this.delayedFlush >= 0 || this.delayedAndroidKey) {
        return false;
      }
      if (t) {
        this.readSelectionRange();
      }
      let e = this.readChange();
      if (!e) {
        this.view.requestMeasure();
        return false;
      }
      let i = this.view.state;
      let n = eS(this.view, e);
      if (this.view.state == i && (e.domChanged || e.newSel && !e.newSel.main.eq(this.view.state.selection.main))) {
        this.view.update([]);
      }
      return n;
    }
    readMutation(t) {
      let e = this.view.docView.nearest(t.target);
      if (!e || e.ignoreMutation(t)) {
        return null;
      }
      e.markDirty(t.type == "attributes");
      if (t.type == "attributes") {
        e.flags |= 4;
      }
      if (t.type == "childList") {
        let i = iC(e, t.previousSibling || t.target.previousSibling, -1);
        let n = iC(e, t.nextSibling || t.target.nextSibling, 1);
        return {
          from: i ? e.posAfter(i) : e.posAtStart,
          to: n ? e.posBefore(n) : e.posAtEnd,
          typeOver: false
        };
      }
      if (t.type == "characterData") {
        return {
          from: e.posAtStart,
          to: e.posAtEnd,
          typeOver: t.target.nodeValue == t.oldValue
        };
      } else {
        return null;
      }
    }
    setWindow(t) {
      if (t != this.win) {
        this.removeWindowListeners(this.win);
        this.win = t;
        this.addWindowListeners(this.win);
      }
    }
    addWindowListeners(t) {
      t.addEventListener("resize", this.onResize);
      if (this.printQuery) {
        if (this.printQuery.addEventListener) {
          this.printQuery.addEventListener("change", this.onPrint);
        } else {
          this.printQuery.addListener(this.onPrint);
        }
      } else {
        t.addEventListener("beforeprint", this.onPrint);
      }
      t.addEventListener("scroll", this.onScroll);
      t.document.addEventListener("selectionchange", this.onSelectionChange);
    }
    removeWindowListeners(t) {
      t.removeEventListener("scroll", this.onScroll);
      t.removeEventListener("resize", this.onResize);
      if (this.printQuery) {
        if (this.printQuery.removeEventListener) {
          this.printQuery.removeEventListener("change", this.onPrint);
        } else {
          this.printQuery.removeListener(this.onPrint);
        }
      } else {
        t.removeEventListener("beforeprint", this.onPrint);
      }
      t.document.removeEventListener("selectionchange", this.onSelectionChange);
    }
    update(t) {
      if (this.editContext) {
        this.editContext.update(t);
        if (t.startState.facet(t0) != t.state.facet(t0)) {
          t.view.contentDOM.editContext = t.state.facet(t0) ? this.editContext.editContext : null;
        }
      }
    }
    destroy() {
      var t;
      var e;
      var i;
      this.stop();
      if ((t = this.intersection) !== null && t !== undefined) {
        t.disconnect();
      }
      if ((e = this.gapIntersection) !== null && e !== undefined) {
        e.disconnect();
      }
      if ((i = this.resizeScroll) !== null && i !== undefined) {
        i.disconnect();
      }
      for (let n of this.scrollTargets) {
        n.removeEventListener("scroll", this.onScroll);
      }
      this.removeWindowListeners(this.win);
      clearTimeout(this.parentCheck);
      clearTimeout(this.resizeTimeout);
      this.win.cancelAnimationFrame(this.delayedFlush);
      this.win.cancelAnimationFrame(this.flushingAndroidKey);
      if (this.editContext) {
        this.view.contentDOM.editContext = null;
        this.editContext.destroy();
      }
    }
  }
  function iC(t, e, i) {
    while (e) {
      let n = V.get(e);
      if (n && n.parent == t) {
        return n;
      }
      let s = e.parentNode;
      e = s != t.dom ? s : i > 0 ? e.nextSibling : e.previousSibling;
    }
    return null;
  }
  function iM(t, e) {
    let i = e.startContainer;
    let n = e.startOffset;
    let s = e.endContainer;
    let r = e.endOffset;
    let o = t.docView.domAtPos(t.state.selection.main.anchor);
    if (w(o.node, o.offset, s, r)) {
      [i, n, s, r] = [s, r, i, n];
    }
    return {
      anchorNode: i,
      anchorOffset: n,
      focusNode: s,
      focusOffset: r
    };
  }
  class iA {
    constructor(t) {
      this.from = 0;
      this.to = 0;
      this.pendingContextChange = null;
      this.handlers = Object.create(null);
      this.composing = null;
      this.resetRange(t.state);
      let e = this.editContext = new window.EditContext({
        text: t.state.doc.sliceString(this.from, this.to),
        selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t.state.selection.main.anchor))),
        selectionEnd: this.toContextPos(t.state.selection.main.head)
      });
      this.handlers.textupdate = e => {
        let {
          anchor: i
        } = t.state.selection.main;
        let n = this.toEditorPos(e.updateRangeStart);
        let s = this.toEditorPos(e.updateRangeEnd);
        if (t.inputState.composing >= 0 && !this.composing) {
          this.composing = {
            contextBase: e.updateRangeStart,
            editorBase: n,
            drifted: false
          };
        }
        let r = {
          from: n,
          to: s,
          insert: codemirrorStateCore.Text.of(e.text.split("\n"))
        };
        if (r.from == this.from && i < this.from) {
          r.from = i;
        } else if (r.to == this.to && i > this.to) {
          r.to = i;
        }
        if (r.from != r.to || r.insert.length) {
          this.pendingContextChange = r;
          if (!t.state.readOnly) {
            let i = this.to - this.from + (r.to - r.from + r.insert.length);
            eC(t, r, codemirrorStateCore.EditorSelection.single(this.toEditorPos(e.selectionStart, i), this.toEditorPos(e.selectionEnd, i)));
          }
          if (this.pendingContextChange) {
            this.revertPending(t.state);
            this.setSelection(t.state);
          }
        }
      };
      this.handlers.characterboundsupdate = i => {
        let n = [];
        let s = null;
        for (let e = this.toEditorPos(i.rangeStart), r = this.toEditorPos(i.rangeEnd); e < r; e++) {
          let i = t.coordsForChar(e);
          s = i && new DOMRect(i.left, i.top, i.right - i.left, i.bottom - i.top) || s || new DOMRect();
          n.push(s);
        }
        e.updateCharacterBounds(i.rangeStart, n);
      };
      this.handlers.textformatupdate = e => {
        let i = [];
        for (let t of e.getTextFormats()) {
          let e = t.underlineStyle;
          let n = t.underlineThickness;
          if (e != "None" && n != "None") {
            let s = this.toEditorPos(t.rangeStart);
            let r = this.toEditorPos(t.rangeEnd);
            if (s < r) {
              let t = `text-decoration: underline ${e == "Dashed" ? "dashed " : e == "Squiggle" ? "wavy " : ""}${n == "Thin" ? 1 : 2}px`;
              i.push(tf.mark({
                attributes: {
                  style: t
                }
              }).range(s, r));
            }
          }
        }
        t.dispatch({
          effects: tY.of(tf.set(i))
        });
      };
      this.handlers.compositionstart = () => {
        if (t.inputState.composing < 0) {
          t.inputState.composing = 0;
          t.inputState.compositionFirstChange = true;
        }
      };
      this.handlers.compositionend = () => {
        t.inputState.composing = -1;
        t.inputState.compositionFirstChange = null;
        if (this.composing) {
          let {
            drifted: e
          } = this.composing;
          this.composing = null;
          if (e) {
            this.reset(t.state);
          }
        }
      };
      for (let i in this.handlers) {
        e.addEventListener(i, this.handlers[i]);
      }
      this.measureReq = {
        read: t => {
          this.editContext.updateControlBounds(t.contentDOM.getBoundingClientRect());
          let e = m(t.root);
          if (e && e.rangeCount) {
            this.editContext.updateSelectionBounds(e.getRangeAt(0).getBoundingClientRect());
          }
        }
      };
    }
    applyEdits(t) {
      let e = 0;
      let i = false;
      let n = this.pendingContextChange;
      t.changes.iterChanges((s, r, o, l, a) => {
        if (i) {
          return;
        }
        let h = a.length - (r - s);
        if (n && r >= n.to) {
          if (n.from == s && n.to == r && n.insert.eq(a)) {
            n = this.pendingContextChange = null;
            e += h;
            this.to += h;
            return;
          }
          n = null;
          this.revertPending(t.state);
        }
        s += e;
        if ((r += e) <= this.from) {
          this.from += h;
          this.to += h;
        } else if (s < this.to) {
          if (s < this.from || r > this.to || this.to - this.from + a.length > 30000) {
            i = true;
            return;
          }
          this.editContext.updateText(this.toContextPos(s), this.toContextPos(r), a.toString());
          this.to += h;
        }
        e += h;
      });
      if (n && !i) {
        this.revertPending(t.state);
      }
      return !i;
    }
    update(t) {
      let e = this.pendingContextChange;
      if (this.composing && (this.composing.drifted || t.transactions.some(t => !t.isUserEvent("input.type") && t.changes.touchesRange(this.from, this.to)))) {
        this.composing.drifted = true;
        this.composing.editorBase = t.changes.mapPos(this.composing.editorBase);
      } else if (this.applyEdits(t) && this.rangeIsValid(t.state)) {
        if (t.docChanged || t.selectionSet || e) {
          this.setSelection(t.state);
        }
      } else {
        this.pendingContextChange = null;
        this.reset(t.state);
      }
      if (t.geometryChanged || t.docChanged || t.selectionSet) {
        t.view.requestMeasure(this.measureReq);
      }
    }
    resetRange(t) {
      let {
        head: e
      } = t.selection.main;
      this.from = Math.max(0, e - 10000);
      this.to = Math.min(t.doc.length, e + 10000);
    }
    reset(t) {
      this.resetRange(t);
      this.editContext.updateText(0, this.editContext.text.length, t.doc.sliceString(this.from, this.to));
      this.setSelection(t);
    }
    revertPending(t) {
      let e = this.pendingContextChange;
      this.pendingContextChange = null;
      this.editContext.updateText(this.toContextPos(e.from), this.toContextPos(e.from + e.insert.length), t.doc.sliceString(e.from, e.to));
    }
    setSelection(t) {
      let {
        main: e
      } = t.selection;
      let i = this.toContextPos(Math.max(this.from, Math.min(this.to, e.anchor)));
      let n = this.toContextPos(e.head);
      if (this.editContext.selectionStart != i || this.editContext.selectionEnd != n) {
        this.editContext.updateSelection(i, n);
      }
    }
    rangeIsValid(t) {
      let {
        head: e
      } = t.selection.main;
      return (!(this.from > 0) || !(e - this.from < 500)) && (!(this.to < t.doc.length) || !(this.to - e < 500)) && !(this.to - this.from > 30000);
    }
    toEditorPos(t, e = this.to - this.from) {
      t = Math.min(t, e);
      let i = this.composing;
      if (i && i.drifted) {
        return i.editorBase + (t - i.contextBase);
      } else {
        return t + this.from;
      }
    }
    toContextPos(t) {
      let e = this.composing;
      if (e && e.drifted) {
        return e.contextBase + (t - e.editorBase);
      } else {
        return t - this.from;
      }
    }
    destroy() {
      for (let t in this.handlers) {
        this.editContext.removeEventListener(t, this.handlers[t]);
      }
    }
  }
  class iT {
    get state() {
      return this.viewState.state;
    }
    get viewport() {
      return this.viewState.viewport;
    }
    get visibleRanges() {
      return this.viewState.visibleRanges;
    }
    get inView() {
      return this.viewState.inView;
    }
    get composing() {
      return this.inputState.composing > 0;
    }
    get compositionStarted() {
      return this.inputState.composing >= 0;
    }
    get root() {
      return this._root;
    }
    get win() {
      return this.dom.ownerDocument.defaultView || window;
    }
    constructor(t = {}) {
      this.plugins = [];
      this.pluginMap = new Map();
      this.editorAttrs = {};
      this.contentAttrs = {};
      this.bidiCache = [];
      this.destroyed = false;
      this.updateState = 2;
      this.measureScheduled = -1;
      this.measureRequests = [];
      this.contentDOM = document.createElement("div");
      this.scrollDOM = document.createElement("div");
      this.scrollDOM.tabIndex = -1;
      this.scrollDOM.className = "cm-scroller";
      this.scrollDOM.appendChild(this.contentDOM);
      this.announceDOM = document.createElement("div");
      this.announceDOM.className = "cm-announced";
      this.announceDOM.setAttribute("aria-live", "polite");
      this.dom = document.createElement("div");
      this.dom.appendChild(this.announceDOM);
      this.dom.appendChild(this.scrollDOM);
      if (t.parent) {
        t.parent.appendChild(this.dom);
      }
      let {
        dispatch: i
      } = t;
      this.dispatchTransactions = t.dispatchTransactions || i && (t => t.forEach(t => i(t, this))) || (t => this.update(t));
      this.dispatch = this.dispatch.bind(this);
      this._root = t.root || function (t) {
        while (t) {
          if (t && (t.nodeType == 9 || t.nodeType == 11 && t.host)) {
            return t;
          }
          t = t.assignedSlot || t.parentNode;
        }
        return null;
      }(t.parent) || document;
      this.viewState = new ir(t.state || codemirrorStateCore.EditorState.create(t));
      if (t.scrollTo && t.scrollTo.is(tX)) {
        this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state);
      }
      this.plugins = this.state.facet(t2).map(t => new t3(t));
      for (let e of this.plugins) {
        e.update(this);
      }
      this.observer = new iS(this);
      this.inputState = new eM(this);
      this.inputState.ensureHandlers(this.plugins);
      this.docView = new el(this);
      this.mountStyles();
      this.updateAttrs();
      this.updateState = 0;
      this.requestMeasure();
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => this.requestMeasure());
      }
    }
    dispatch(...t) {
      let e = t.length == 1 && t[0] instanceof codemirrorStateCore.Transaction ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [this.state.update(...t)];
      this.dispatchTransactions(e, this);
    }
    update(t) {
      if (this.updateState != 0) {
        throw Error("Calls to EditorView.update are not allowed while an update is in progress");
      }
      let e = false;
      let i = false;
      let n;
      let s = this.state;
      for (let e of t) {
        if (e.startState != s) {
          throw RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
        }
        s = e.state;
      }
      if (this.destroyed) {
        this.viewState.state = s;
        return;
      }
      let r = this.hasFocus;
      let o = 0;
      let a = null;
      if (t.some(t => t.annotation(eK))) {
        this.inputState.notifiedFocused = r;
        o = 1;
      } else if (r != this.inputState.notifiedFocused) {
        this.inputState.notifiedFocused = r;
        if (!(a = eU(s, r))) {
          o = 1;
        }
      }
      let h = this.observer.delayedAndroidKey;
      let c = null;
      if (h) {
        this.observer.clearDelayedAndroidKey();
        if ((c = this.observer.readChange()) && !this.state.doc.eq(s.doc) || !this.state.selection.eq(s.selection)) {
          c = null;
        }
      } else {
        this.observer.clear();
      }
      if (s.facet(codemirrorStateCore.EditorState.phrases) != this.state.facet(codemirrorStateCore.EditorState.phrases)) {
        return this.setState(s);
      }
      n = eo.create(this, s, t);
      n.flags |= o;
      let u = this.viewState.scrollTarget;
      try {
        this.updateState = 2;
        for (let e of t) {
          u &&= u.map(e.changes);
          if (e.scrollIntoView) {
            let {
              main: t
            } = e.state.selection;
            u = new tQ(t.empty ? t : codemirrorStateCore.EditorSelection.cursor(t.head, t.head > t.anchor ? -1 : 1));
          }
          for (let t of e.effects) {
            if (t.is(tX)) {
              u = t.value.clip(this.state);
            }
          }
        }
        this.viewState.update(n, u);
        this.bidiCache = iP.update(this.bidiCache, n.changes);
        if (!n.empty) {
          this.updatePlugins(n);
          this.inputState.update(n);
        }
        e = this.docView.update(n);
        if (this.state.facet(es) != this.styleModules) {
          this.mountStyles();
        }
        i = this.updateAttrs();
        this.showAnnouncements(t);
        this.docView.updateSelection(e, t.some(t => t.isUserEvent("select.pointer")));
      } finally {
        this.updateState = 0;
      }
      if (n.startState.facet(id) != n.state.facet(id)) {
        this.viewState.mustMeasureContent = true;
      }
      if (e || i || u || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) {
        this.requestMeasure();
      }
      if (e) {
        this.docViewUpdate();
      }
      if (!n.empty) {
        for (let t of this.state.facet(tz)) {
          try {
            t(n);
          } catch (t) {
            tZ(this.state, t, "update listener");
          }
        }
      }
      if (a || c) {
        Promise.resolve().then(() => {
          if (a && this.state == a.startState) {
            this.dispatch(a);
          }
          if (c && !eS(this, c) && h.force) {
            P(this.contentDOM, h.key, h.keyCode);
          }
        });
      }
    }
    setState(t) {
      if (this.updateState != 0) {
        throw Error("Calls to EditorView.setState are not allowed while an update is in progress");
      }
      if (this.destroyed) {
        this.viewState.state = t;
        return;
      }
      this.updateState = 2;
      let e = this.hasFocus;
      try {
        for (let t of this.plugins) {
          t.destroy(this);
        }
        this.viewState = new ir(t);
        this.plugins = t.facet(t2).map(t => new t3(t));
        this.pluginMap.clear();
        for (let e of this.plugins) {
          e.update(this);
        }
        this.docView.destroy();
        this.docView = new el(this);
        this.inputState.ensureHandlers(this.plugins);
        this.mountStyles();
        this.updateAttrs();
        this.bidiCache = [];
      } finally {
        this.updateState = 0;
      }
      if (e) {
        this.focus();
      }
      this.requestMeasure();
    }
    updatePlugins(t) {
      let e = t.startState.facet(t2);
      let i = t.state.facet(t2);
      if (e != i) {
        let n = [];
        for (let s of i) {
          let i = e.indexOf(s);
          if (i < 0) {
            n.push(new t3(s));
          } else {
            let e = this.plugins[i];
            e.mustUpdate = t;
            n.push(e);
          }
        }
        for (let e of this.plugins) {
          if (e.mustUpdate != t) {
            e.destroy(this);
          }
        }
        this.plugins = n;
        this.pluginMap.clear();
      } else {
        for (let e of this.plugins) {
          e.mustUpdate = t;
        }
      }
      for (let t = 0; t < this.plugins.length; t++) {
        this.plugins[t].update(this);
      }
      if (e != i) {
        this.inputState.ensureHandlers(this.plugins);
      }
    }
    docViewUpdate() {
      for (let t of this.plugins) {
        let e = t.value;
        if (e && e.docViewUpdate) {
          try {
            e.docViewUpdate(this);
          } catch (t) {
            tZ(this.state, t, "doc view update listener");
          }
        }
      }
    }
    measure(t = true) {
      if (this.destroyed) {
        return;
      }
      if (this.measureScheduled > -1) {
        this.win.cancelAnimationFrame(this.measureScheduled);
      }
      if (this.observer.delayedAndroidKey) {
        this.measureScheduled = -1;
        this.requestMeasure();
        return;
      }
      this.measureScheduled = 0;
      if (t) {
        this.observer.forceFlush();
      }
      let e = null;
      let i = this.scrollDOM;
      let n = i.scrollTop * this.scaleY;
      let {
        scrollAnchorPos: s,
        scrollAnchorHeight: r
      } = this.viewState;
      if (Math.abs(n - this.viewState.scrollTop) > 1) {
        r = -1;
      }
      this.viewState.scrollAnchorHeight = -1;
      try {
        for (let t = 0;; t++) {
          if (r < 0) {
            if (R(i)) {
              s = -1;
              r = this.viewState.heightMap.height;
            } else {
              let t = this.viewState.scrollAnchorAt(n);
              s = t.from;
              r = t.top;
            }
          }
          this.updateState = 1;
          let o = this.viewState.measure(this);
          if (!o && !this.measureRequests.length && this.viewState.scrollTarget == null || t > 5) {
            break;
          }
          let l = [];
          if (!(o & 4)) {
            [this.measureRequests, l] = [l, this.measureRequests];
          }
          let a = l.map(t => {
            try {
              return t.read(this);
            } catch (t) {
              tZ(this.state, t);
              return iD;
            }
          });
          let h = eo.create(this, this.state, []);
          let c = false;
          h.flags |= o;
          if (e) {
            e.flags |= o;
          } else {
            e = h;
          }
          this.updateState = 2;
          if (!h.empty) {
            this.updatePlugins(h);
            this.inputState.update(h);
            this.updateAttrs();
            if (c = this.docView.update(h)) {
              this.docViewUpdate();
            }
          }
          for (let t = 0; t < l.length; t++) {
            if (a[t] != iD) {
              try {
                let e = l[t];
                if (e.write) {
                  e.write(a[t], this);
                }
              } catch (t) {
                tZ(this.state, t);
              }
            }
          }
          if (c) {
            this.docView.updateSelection(true);
          }
          if (!h.viewportChanged && this.measureRequests.length == 0) {
            if (this.viewState.editorHeight) {
              if (this.viewState.scrollTarget) {
                this.docView.scrollIntoView(this.viewState.scrollTarget);
                this.viewState.scrollTarget = null;
                r = -1;
                continue;
              }
              {
                let t = (s < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s).top) - r;
                if (t > 1 || t < -1) {
                  n += t;
                  i.scrollTop = n / this.scaleY;
                  r = -1;
                  continue;
                }
              }
            }
            break;
          }
        }
      } finally {
        this.updateState = 0;
        this.measureScheduled = -1;
      }
      if (e && !e.empty) {
        for (let t of this.state.facet(tz)) {
          t(e);
        }
      }
    }
    get themeClasses() {
      return im + " " + (this.state.facet(ip) ? iv : ig) + " " + this.state.facet(id);
    }
    updateAttrs() {
      let t = iE(this, t5, {
        class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
      });
      let e = {
        spellcheck: "false",
        autocorrect: "off",
        autocapitalize: "off",
        writingsuggestions: "false",
        translate: "no",
        contenteditable: this.state.facet(t0) ? "true" : "false",
        class: "cm-content",
        style: `${Z.tabSize}: ${this.state.tabSize}`,
        role: "textbox",
        "aria-multiline": "true"
      };
      if (this.state.readOnly) {
        e["aria-readonly"] = "true";
      }
      iE(this, t8, e);
      let i = this.observer.ignore(() => {
        let i = th(this.contentDOM, this.contentAttrs, e);
        let n = th(this.dom, this.editorAttrs, t);
        return i || n;
      });
      this.editorAttrs = t;
      this.contentAttrs = e;
      return i;
    }
    showAnnouncements(t) {
      let e = true;
      for (let i of t) {
        for (let t of i.effects) {
          if (t.is(iT.announce)) {
            if (e) {
              this.announceDOM.textContent = "";
            }
            e = false;
            this.announceDOM.appendChild(document.createElement("div")).textContent = t.value;
          }
        }
      }
    }
    mountStyles() {
      this.styleModules = this.state.facet(es);
      let t = this.state.facet(iT.cspNonce);
      cssStyleManager.StyleManager.mount(this.root, this.styleModules.concat(iy).reverse(), t ? {
        nonce: t
      } : undefined);
    }
    readMeasured() {
      if (this.updateState == 2) {
        throw Error("Reading the editor layout isn't allowed during an update");
      }
      if (this.updateState == 0 && this.measureScheduled > -1) {
        this.measure(false);
      }
    }
    requestMeasure(t) {
      if (this.measureScheduled < 0) {
        this.measureScheduled = this.win.requestAnimationFrame(() => this.measure());
      }
      if (t && !(this.measureRequests.indexOf(t) > -1)) {
        if (t.key != null) {
          for (let e = 0; e < this.measureRequests.length; e++) {
            if (this.measureRequests[e].key === t.key) {
              this.measureRequests[e] = t;
              return;
            }
          }
        }
        this.measureRequests.push(t);
      }
    }
    plugin(t) {
      let e = this.pluginMap.get(t);
      if (e === undefined || e && e.spec != t) {
        this.pluginMap.set(t, e = this.plugins.find(e => e.spec == t) || null);
      }
      return e && e.update(this).value;
    }
    get documentTop() {
      return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
    }
    get documentPadding() {
      return {
        top: this.viewState.paddingTop,
        bottom: this.viewState.paddingBottom
      };
    }
    get scaleX() {
      return this.viewState.scaleX;
    }
    get scaleY() {
      return this.viewState.scaleY;
    }
    elementAtHeight(t) {
      this.readMeasured();
      return this.viewState.elementAtHeight(t);
    }
    lineBlockAtHeight(t) {
      this.readMeasured();
      return this.viewState.lineBlockAtHeight(t);
    }
    get viewportLineBlocks() {
      return this.viewState.viewportLines;
    }
    lineBlockAt(t) {
      return this.viewState.lineBlockAt(t);
    }
    get contentHeight() {
      return this.viewState.contentHeight;
    }
    moveByChar(t, e, i) {
      return ew(this, t, ev(this, t, e, i));
    }
    moveByGroup(t, e) {
      return ew(this, t, ev(this, t, e, e => {
        var i;
        let n;
        let s;
        i = t.head;
        s = (n = this.state.charCategorizer(i))(e);
        return t => {
          let e = n(t);
          if (s == codemirrorStateCore.CharType.Space) {
            s = e;
          }
          return s == e;
        };
      }));
    }
    visualLineSide(t, e) {
      let i = this.bidiSpans(t);
      let n = this.textDirectionAt(t.from);
      let s = i[e ? i.length - 1 : 0];
      return codemirrorStateCore.EditorSelection.cursor(s.side(e, n) + t.from, s.forward(!e, n) ? 1 : -1);
    }
    moveToLineBoundary(t, e, i = true) {
      return function (t, e, i, n) {
        let s = eg(t, e.head);
        let r = n && s.type == tu.Text && (t.lineWrapping || s.widgetLineBreaks) ? t.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head) : null;
        if (r) {
          let e = t.dom.getBoundingClientRect();
          let n = t.textDirectionAt(s.from);
          let o = t.posAtCoords({
            x: i == (n == tC.LTR) ? e.right - 1 : e.left + 1,
            y: (r.top + r.bottom) / 2
          });
          if (o != null) {
            return codemirrorStateCore.EditorSelection.cursor(o, i ? -1 : 1);
          }
        }
        return codemirrorStateCore.EditorSelection.cursor(i ? s.to : s.from, i ? -1 : 1);
      }(this, t, e, i);
    }
    moveVertically(t, e, i) {
      return ew(this, t, function (t, e, i, n) {
        let s = e.head;
        let r = i ? 1 : -1;
        if (s == (i ? t.state.doc.length : 0)) {
          return codemirrorStateCore.EditorSelection.cursor(s, e.assoc);
        }
        let o = e.goalColumn;
        let a;
        let h = t.contentDOM.getBoundingClientRect();
        let c = t.coordsAtPos(s, e.assoc || -1);
        let u = t.documentTop;
        if (c) {
          if (o == null) {
            o = c.left - h.left;
          }
          a = r < 0 ? c.top : c.bottom;
        } else {
          let e = t.viewState.lineBlockAt(s);
          if (o == null) {
            o = Math.min(h.right - h.left, t.defaultCharacterWidth * (s - e.from));
          }
          a = (r < 0 ? e.top : e.bottom) + u;
        }
        let f = h.left + o;
        let d = n ?? t.viewState.heightOracle.textHeight >> 1;
        for (let e = 0;; e += 10) {
          let i = a + (d + e) * r;
          let n = ep(t, {
            x: f,
            y: i
          }, false, r);
          if (i < h.top || i > h.bottom || (r < 0 ? n < s : n > s)) {
            let e = t.docView.coordsForChar(n);
            let s = !e || i < e.top ? -1 : 1;
            return codemirrorStateCore.EditorSelection.cursor(n, s, undefined, o);
          }
        }
      }(this, t, e, i));
    }
    domAtPos(t) {
      return this.docView.domAtPos(t);
    }
    posAtDOM(t, e = 0) {
      return this.docView.posFromDOM(t, e);
    }
    posAtCoords(t, e = true) {
      this.readMeasured();
      return ep(this, t, e);
    }
    coordsAtPos(t, e = 1) {
      this.readMeasured();
      let i = this.docView.coordsAt(t, e);
      if (!i || i.left == i.right) {
        return i;
      }
      let n = this.state.doc.lineAt(t);
      let s = this.bidiSpans(n);
      return C(i, s[tB.find(s, t - n.from, -1, e)].dir == tC.LTR == e > 0);
    }
    coordsForChar(t) {
      this.readMeasured();
      return this.docView.coordsForChar(t);
    }
    get defaultCharacterWidth() {
      return this.viewState.heightOracle.charWidth;
    }
    get defaultLineHeight() {
      return this.viewState.heightOracle.lineHeight;
    }
    get textDirection() {
      return this.viewState.defaultTextDirection;
    }
    textDirectionAt(t) {
      if (!this.state.facet(tK) || t < this.viewport.from || t > this.viewport.to) {
        return this.textDirection;
      } else {
        this.readMeasured();
        return this.docView.textDirectionAt(t);
      }
    }
    get lineWrapping() {
      return this.viewState.heightOracle.lineWrapping;
    }
    bidiSpans(t) {
      if (t.length > iO) {
        return tN(t.length);
      }
      let e = this.textDirectionAt(t.from);
      let i;
      for (let n of this.bidiCache) {
        if (n.from == t.from && n.dir == e && (n.fresh || function t(e, i) {
          if (e.length != i.length) {
            return false;
          }
          for (let n = 0; n < e.length; n++) {
            let s = e[n];
            let r = i[n];
            if (s.from != r.from || s.to != r.to || s.direction != r.direction || !t(s.inner, r.inner)) {
              return false;
            }
          }
          return true;
        }(n.isolates, i = ee(this, t)))) {
          return n.order;
        }
      }
      i ||= ee(this, t);
      let n = function (t, e, i) {
        if (!t) {
          return [new tB(0, 0, +(e == tA))];
        }
        if (e == tM && !i.length && !tL.test(t)) {
          return tN(t.length);
        }
        if (i.length) {
          while (t.length > tI.length) {
            tI[tI.length] = 256;
          }
        }
        let n = [];
        let s = +(e != tM);
        (function t(e, i, n, s, r, o, l) {
          let a = i % 2 ? 2 : 1;
          (function (t, e, i, n, s) {
            for (let r = 0; r <= n.length; r++) {
              let o = r ? n[r - 1].to : e;
              let l = r < n.length ? n[r].from : i;
              let a = r ? 256 : s;
              for (let e = o, i = a, n = a; e < l; e++) {
                let s = tR(t.charCodeAt(e));
                if (s == 512) {
                  s = i;
                } else if (s == 8 && n == 4) {
                  s = 16;
                }
                tI[e] = s == 4 ? 2 : s;
                if (s & 7) {
                  n = s;
                }
                i = s;
              }
              for (let t = o, e = a, n = a; t < l; t++) {
                let s = tI[t];
                if (s == 128) {
                  if (t < l - 1 && e == tI[t + 1] && e & 24) {
                    s = tI[t] = e;
                  } else {
                    tI[t] = 256;
                  }
                } else if (s == 64) {
                  let s = t + 1;
                  while (s < l && tI[s] == 64) {
                    s++;
                  }
                  let r = t && e == 8 || s < i && tI[s] == 8 ? n == 1 ? 1 : 8 : 256;
                  for (let e = t; e < s; e++) {
                    tI[e] = r;
                  }
                  t = s - 1;
                } else if (s == 8 && n == 1) {
                  tI[t] = 1;
                }
                e = s;
                if (s & 7) {
                  n = s;
                }
              }
            }
          })(e, r, o, s, a);
          (function (t, e, i, n, s) {
            let r = s == 1 ? 2 : 1;
            for (let o = 0, l = 0, a = 0; o <= n.length; o++) {
              let h = o ? n[o - 1].to : e;
              let c = o < n.length ? n[o].from : i;
              for (let e = h, i, n, o; e < c; e++) {
                if (n = tP[i = t.charCodeAt(e)]) {
                  if (n < 0) {
                    for (let t = l - 3; t >= 0; t -= 3) {
                      if (tE[t + 1] == -n) {
                        let i = tE[t + 2];
                        let n = i & 2 ? s : i & 4 ? i & 1 ? r : s : 0;
                        if (n) {
                          tI[e] = tI[tE[t]] = n;
                        }
                        l = t;
                        break;
                      }
                    }
                  } else if (tE.length == 189) {
                    break;
                  } else {
                    tE[l++] = e;
                    tE[l++] = i;
                    tE[l++] = a;
                  }
                } else if ((o = tI[e]) == 2 || o == 1) {
                  let t = o == s;
                  a = +!t;
                  for (let e = l - 3; e >= 0; e -= 3) {
                    let i = tE[e + 2];
                    if (i & 2) {
                      break;
                    }
                    if (t) {
                      tE[e + 2] |= 2;
                    } else {
                      if (i & 4) {
                        break;
                      }
                      tE[e + 2] |= 4;
                    }
                  }
                }
              }
            }
          })(e, r, o, s, a);
          (function (t, e, i, n) {
            for (let s = 0, r = n; s <= i.length; s++) {
              let o = s ? i[s - 1].to : t;
              let l = s < i.length ? i[s].from : e;
              for (let a = o; a < l;) {
                let o = tI[a];
                if (o == 256) {
                  let o = a + 1;
                  while (true) {
                    if (o == l) {
                      if (s == i.length) {
                        break;
                      }
                      o = i[s++].to;
                      l = s < i.length ? i[s].from : e;
                    } else if (tI[o] == 256) {
                      o++;
                    } else {
                      break;
                    }
                  }
                  let h = r == 1;
                  let c = h == ((o < e ? tI[o] : n) == 1) ? h ? 1 : 2 : n;
                  for (let e = o, n = s, r = n ? i[n - 1].to : t; e > a;) {
                    if (e == r) {
                      e = i[--n].from;
                      r = n ? i[n - 1].to : t;
                    }
                    tI[--e] = c;
                  }
                  a = o;
                } else {
                  r = o;
                  a++;
                }
              }
            }
          })(r, o, s, a);
          (function e(i, n, s, r, o, l, a) {
            let h = r % 2 ? 2 : 1;
            if (r % 2 == o % 2) {
              for (let c = n, u = 0; c < s;) {
                let n = true;
                let f = false;
                if (u == l.length || c < l[u].from) {
                  let t = tI[c];
                  if (t != h) {
                    n = false;
                    f = t == 16;
                  }
                }
                let d = n || h != 1 ? null : [];
                let p = n ? r : r + 1;
                let m = c;
                i: while (true) {
                  if (u < l.length && m == l[u].from) {
                    if (f) {
                      break;
                    }
                    let e = l[u];
                    if (!n) {
                      for (let t = e.to, i = u + 1;;) {
                        if (t == s) {
                          break i;
                        }
                        if (i < l.length && l[i].from == t) {
                          t = l[i++].to;
                        } else if (tI[t] == h) {
                          break i;
                        } else {
                          break;
                        }
                      }
                    }
                    u++;
                    if (d) {
                      d.push(e);
                    } else {
                      if (e.from > c) {
                        a.push(new tB(c, e.from, p));
                      }
                      t(i, e.direction == tM != !(p % 2) ? r + 1 : r, o, e.inner, e.from, e.to, a);
                      c = e.to;
                    }
                    m = e.to;
                  } else if (m == s || (n ? tI[m] != h : tI[m] == h)) {
                    break;
                  } else {
                    m++;
                  }
                }
                if (d) {
                  e(i, c, m, r + 1, o, d, a);
                } else if (c < m) {
                  a.push(new tB(c, m, p));
                }
                c = m;
              }
            } else {
              for (let c = s, u = l.length; c > n;) {
                let s = true;
                let f = false;
                if (!u || c > l[u - 1].to) {
                  let t = tI[c - 1];
                  if (t != h) {
                    s = false;
                    f = t == 16;
                  }
                }
                let d = s || h != 1 ? null : [];
                let p = s ? r : r + 1;
                let m = c;
                i: while (true) {
                  if (u && m == l[u - 1].to) {
                    if (f) {
                      break;
                    }
                    let e = l[--u];
                    if (!s) {
                      for (let t = e.from, i = u;;) {
                        if (t == n) {
                          break i;
                        }
                        if (i && l[i - 1].to == t) {
                          t = l[--i].from;
                        } else if (tI[t - 1] == h) {
                          break i;
                        } else {
                          break;
                        }
                      }
                    }
                    if (d) {
                      d.push(e);
                    } else {
                      if (e.to < c) {
                        a.push(new tB(e.to, c, p));
                      }
                      t(i, e.direction == tM != !(p % 2) ? r + 1 : r, o, e.inner, e.from, e.to, a);
                      c = e.from;
                    }
                    m = e.from;
                  } else if (m == n || (s ? tI[m - 1] != h : tI[m - 1] == h)) {
                    break;
                  } else {
                    m--;
                  }
                }
                if (d) {
                  e(i, m, c, r + 1, o, d, a);
                } else if (m < c) {
                  a.push(new tB(m, c, p));
                }
                c = m;
              }
            }
          })(e, r, o, i, n, s, l);
        })(t, s, s, i, 0, t.length, n);
        return n;
      }(t.text, e, i);
      this.bidiCache.push(new iP(t.from, t.to, e, i, true, n));
      return n;
    }
    get hasFocus() {
      return (this.dom.ownerDocument.hasFocus() || Z.safari && this.inputState?.lastContextMenu > Date.now() - 30000) && this.root.activeElement == this.contentDOM;
    }
    focus() {
      this.observer.ignore(() => {
        O(this.contentDOM);
        this.docView.updateSelection();
      });
    }
    setRoot(t) {
      if (this._root != t) {
        this._root = t;
        this.observer.setWindow((t.nodeType == 9 ? t : t.ownerDocument).defaultView || window);
        this.mountStyles();
      }
    }
    destroy() {
      if (this.root.activeElement == this.contentDOM) {
        this.contentDOM.blur();
      }
      for (let t of this.plugins) {
        t.destroy(this);
      }
      this.plugins = [];
      this.inputState.destroy();
      this.docView.destroy();
      this.dom.remove();
      this.observer.destroy();
      if (this.measureScheduled > -1) {
        this.win.cancelAnimationFrame(this.measureScheduled);
      }
      this.destroyed = true;
    }
    static scrollIntoView(t, e = {}) {
      return tX.of(new tQ(typeof t == "number" ? codemirrorStateCore.EditorSelection.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin));
    }
    scrollSnapshot() {
      let {
        scrollTop: t,
        scrollLeft: e
      } = this.scrollDOM;
      let i = this.viewState.scrollAnchorAt(t);
      return tX.of(new tQ(codemirrorStateCore.EditorSelection.cursor(i.from), "start", "start", i.top - t, e, true));
    }
    setTabFocusMode(t) {
      if (t == null) {
        this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1;
      } else if (typeof t == "boolean") {
        this.inputState.tabFocusMode = t ? 0 : -1;
      } else if (this.inputState.tabFocusMode != 0) {
        this.inputState.tabFocusMode = Date.now() + t;
      }
    }
    static domEventHandlers(t) {
      return t6.define(() => ({}), {
        eventHandlers: t
      });
    }
    static domEventObservers(t) {
      return t6.define(() => ({}), {
        eventObservers: t
      });
    }
    static theme(t, e) {
      let i = cssStyleManager.StyleManager.newName();
      let n = [id.of(i), es.of(iw(`.${i}`, t))];
      if (e && e.dark) {
        n.push(ip.of(true));
      }
      return n;
    }
    static baseTheme(t) {
      return codemirrorStateCore.StateField.lowest(es.of(iw("." + im, t, ib)));
    }
    static findFromDOM(t) {
      let i = t.querySelector(".cm-content");
      let n = i && V.get(i) || V.get(t);
      return (n == null ? undefined : n.rootView)?.view || null;
    }
  }
  iT.styleModule = es;
  iT.inputHandler = tq;
  iT.clipboardInputFilter = tJ;
  iT.clipboardOutputFilter = t_;
  iT.scrollHandler = tG;
  iT.focusChangeEffect = t$;
  iT.perLineTextDirection = tK;
  iT.exceptionSink = tW;
  iT.updateListener = tz;
  iT.editable = t0;
  iT.mouseSelectionStyle = tH;
  iT.dragMovesSelection = tj;
  iT.clickAddsSelectionRange = tF;
  iT.decorations = t4;
  iT.outerDecorations = t9;
  iT.atomicRanges = t7;
  iT.bidiIsolatedRanges = et;
  iT.scrollMargins = ei;
  iT.darkTheme = ip;
  iT.cspNonce = codemirrorStateCore.Facet.define({
    combine: t => t.length ? t[0] : ""
  });
  iT.contentAttributes = t8;
  iT.editorAttributes = t5;
  iT.lineWrapping = iT.contentAttributes.of({
    class: "cm-lineWrapping"
  });
  iT.announce = codemirrorStateCore.EffectType.define();
  let iO = 4096;
  let iD = {};
  class iP {
    constructor(t, e, i, n, s, r) {
      this.from = t;
      this.to = e;
      this.dir = i;
      this.isolates = n;
      this.fresh = s;
      this.order = r;
    }
    static update(t, e) {
      if (e.empty && !t.some(t => t.fresh)) {
        return t;
      }
      let i = [];
      let n = t.length ? t[t.length - 1].dir : tC.LTR;
      for (let s = Math.max(0, t.length - 10); s < t.length; s++) {
        let r = t[s];
        if (r.dir == n && !e.touchesRange(r.from, r.to)) {
          i.push(new iP(e.mapPos(r.from, 1), e.mapPos(r.to, -1), r.dir, r.isolates, false, r.order));
        }
      }
      return i;
    }
  }
  function iE(t, e, i) {
    for (let n = t.state.facet(e), s = n.length - 1; s >= 0; s--) {
      let e = n[s];
      let r = typeof e == "function" ? e(t) : e;
      if (r) {
        to(r, i);
      }
    }
    return i;
  }
  let iR = Z.mac ? "mac" : Z.windows ? "win" : Z.linux ? "linux" : "key";
  function iL(t, e, i) {
    if (e.altKey) {
      t = "Alt-" + t;
    }
    if (e.ctrlKey) {
      t = "Ctrl-" + t;
    }
    if (e.metaKey) {
      t = "Meta-" + t;
    }
    if (i !== false && e.shiftKey) {
      t = "Shift-" + t;
    }
    return t;
  }
  let iB = codemirrorStateCore.StateField.default(iT.domEventHandlers({
    keydown: (t, e) => iW(iV(e.state), t, e, "editor")
  }));
  let iI = codemirrorStateCore.Facet.define({
    enables: iB
  });
  let iN = new WeakMap();
  function iV(t) {
    let e = t.facet(iI);
    let i = iN.get(e);
    if (!i) {
      iN.set(e, i = function (t, e = iR) {
        let i = Object.create(null);
        let n = Object.create(null);
        let s = (t, e) => {
          let i = n[t];
          if (i == null) {
            n[t] = e;
          } else if (i != e) {
            throw Error("Key binding " + t + " is used both as a regular binding and as a multi-stroke prefix");
          }
        };
        let r = (t, n, r, o, l) => {
          var h;
          let c = i[t] ||= Object.create(null);
          let u = n.split(/ (?!$)/).map(t => function (t, e) {
            let i;
            let n;
            let s;
            let r;
            let o = t.split(/-(?!$)/);
            let l = o[o.length - 1];
            if (l == "Space") {
              l = " ";
            }
            for (let t = 0; t < o.length - 1; ++t) {
              let l = o[t];
              if (/^(cmd|meta|m)$/i.test(l)) {
                r = true;
              } else if (/^a(lt)?$/i.test(l)) {
                i = true;
              } else if (/^(c|ctrl|control)$/i.test(l)) {
                n = true;
              } else if (/^s(hift)?$/i.test(l)) {
                s = true;
              } else if (/^mod$/i.test(l)) {
                if (e == "mac") {
                  r = true;
                } else {
                  n = true;
                }
              } else {
                throw Error("Unrecognized modifier name: " + l);
              }
            }
            if (i) {
              l = "Alt-" + l;
            }
            if (n) {
              l = "Ctrl-" + l;
            }
            if (r) {
              l = "Meta-" + l;
            }
            if (s) {
              l = "Shift-" + l;
            }
            return l;
          }(t, e));
          for (let e = 1; e < u.length; e++) {
            let i = u.slice(0, e).join(" ");
            s(i, true);
            c[i] ||= {
              preventDefault: true,
              stopPropagation: false,
              run: [e => {
                let n = ij = {
                  view: e,
                  prefix: i,
                  scope: t
                };
                setTimeout(() => {
                  if (ij == n) {
                    ij = null;
                  }
                }, 4000);
                return true;
              }]
            };
          }
          let f = u.join(" ");
          s(f, false);
          let d = c[f] ||= {
            preventDefault: false,
            stopPropagation: false,
            run: ((h = c._any?.run) === null || h === undefined ? undefined : h.slice()) || []
          };
          if (r) {
            d.run.push(r);
          }
          if (o) {
            d.preventDefault = true;
          }
          if (l) {
            d.stopPropagation = true;
          }
        };
        for (let n of t) {
          let t = n.scope ? n.scope.split(" ") : ["editor"];
          if (n.any) {
            for (let e of t) {
              let t = i[e] ||= Object.create(null);
              t._any ||= {
                preventDefault: false,
                stopPropagation: false,
                run: []
              };
              let {
                any: s
              } = n;
              for (let e in t) {
                t[e].run.push(t => s(t, iH));
              }
            }
          }
          let s = n[e] || n.key;
          if (s) {
            for (let e of t) {
              r(e, s, n.run, n.preventDefault, n.stopPropagation);
              if (n.shift) {
                r(e, "Shift-" + s, n.shift, n.preventDefault, n.stopPropagation);
              }
            }
          }
        }
        return i;
      }(e.reduce((t, e) => t.concat(e), [])));
    }
    return i;
  }
  function iF(t, e, i) {
    return iW(iV(t.state), e, t, i);
  }
  let ij = null;
  let iH = null;
  function iW(t, e, i, n) {
    var s;
    iH = e;
    if ((s = (!u || !e.metaKey || !e.shiftKey || !!e.ctrlKey || !!e.altKey) && (!f || !e.shiftKey || !e.key || e.key.length != 1) && e.key != "Unidentified" && e.key || (e.shiftKey ? c : h)[e.keyCode] || e.key || "Unidentified") == "Esc") {
      s = "Escape";
    }
    if (s == "Del") {
      s = "Delete";
    }
    if (s == "Left") {
      s = "ArrowLeft";
    }
    if (s == "Up") {
      s = "ArrowUp";
    }
    if (s == "Right") {
      s = "ArrowRight";
    }
    if (s == "Down") {
      s = "ArrowDown";
    }
    let r = s;
    let o = codemirrorStateCore.charCodeAt(r, 0);
    let a = codemirrorStateCore.charLength(o) == r.length && r != " ";
    let d = "";
    let p = false;
    let m = false;
    let g = false;
    if (ij && ij.view == i && ij.scope == n) {
      d = ij.prefix + " ";
      if (eD.indexOf(e.keyCode) < 0) {
        m = true;
        ij = null;
      }
    }
    let v = new Set();
    let b = t => {
      if (t) {
        for (let e of t.run) {
          if (!v.has(e) && (v.add(e), e(i))) {
            if (t.stopPropagation) {
              g = true;
            }
            return true;
          }
        }
        if (t.preventDefault) {
          if (t.stopPropagation) {
            g = true;
          }
          m = true;
        }
      }
      return false;
    };
    let w = t[n];
    let y;
    let x;
    if (w) {
      if (b(w[d + iL(r, e, !a)])) {
        p = true;
      } else if (a && (e.altKey || e.metaKey || e.ctrlKey) && (!Z.windows || !e.ctrlKey || !e.altKey) && (y = h[e.keyCode]) && y != r) {
        if (b(w[d + iL(y, e, true)])) {
          p = true;
        } else if (e.shiftKey && (x = c[e.keyCode]) != r && x != y && b(w[d + iL(x, e, false)])) {
          p = true;
        }
      } else if (a && e.shiftKey && b(w[d + iL(r, e, true)])) {
        p = true;
      }
      if (!p && b(w._any)) {
        p = true;
      }
    }
    if (m) {
      p = true;
    }
    if (p && g) {
      e.stopPropagation();
    }
    iH = null;
    return p;
  }
  class iz {
    constructor(t, e, i, n, s) {
      this.className = t;
      this.left = e;
      this.top = i;
      this.width = n;
      this.height = s;
    }
    draw() {
      let t = document.createElement("div");
      t.className = this.className;
      this.adjust(t);
      return t;
    }
    update(t, e) {
      return e.className == this.className && (this.adjust(t), true);
    }
    adjust(t) {
      t.style.left = this.left + "px";
      t.style.top = this.top + "px";
      if (this.width != null) {
        t.style.width = this.width + "px";
      }
      t.style.height = this.height + "px";
    }
    eq(t) {
      return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className;
    }
    static forRange(t, e, i) {
      if (!i.empty) {
        return function (t, e, i) {
          if (i.to <= t.viewport.from || i.from >= t.viewport.to) {
            return [];
          }
          let n = Math.max(i.from, t.viewport.from);
          let s = Math.min(i.to, t.viewport.to);
          let r = t.textDirection == tC.LTR;
          let o = t.contentDOM;
          let l = o.getBoundingClientRect();
          let a = iq(t);
          let h = o.querySelector(".cm-line");
          let c = h && window.getComputedStyle(h);
          let u = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0);
          let f = l.right - (c ? parseInt(c.paddingRight) : 0);
          let d = eg(t, n);
          let p = eg(t, s);
          let m = d.type == tu.Text ? d : null;
          let g = p.type == tu.Text ? p : null;
          if (m && (t.lineWrapping || d.widgetLineBreaks)) {
            m = i$(t, n, 1, m);
          }
          if (g && (t.lineWrapping || p.widgetLineBreaks)) {
            g = i$(t, s, -1, g);
          }
          if (m && g && m.from == g.from && m.to == g.to) {
            return b(w(i.from, i.to, m));
          }
          {
            let e = m ? w(i.from, null, m) : y(d, false);
            let n = g ? w(null, i.to, g) : y(p, true);
            let s = [];
            if ((m || d).to < (g || p).from - (m && g ? 1 : 0) || d.widgetLineBreaks > 1 && e.bottom + t.defaultLineHeight / 2 < n.top) {
              s.push(v(u, e.bottom, f, n.top));
            } else if (e.bottom < n.top && t.elementAtHeight((e.bottom + n.top) / 2).type == tu.Text) {
              e.bottom = n.top = (e.bottom + n.top) / 2;
            }
            return b(e).concat(s).concat(b(n));
          }
          function v(t, i, n, s) {
            return new iz(e, t - a.left, i - a.top - 0.01, n - t, s - i + 0.01);
          }
          function b({
            top: t,
            bottom: e,
            horizontal: i
          }) {
            let n = [];
            for (let s = 0; s < i.length; s += 2) {
              n.push(v(i[s], t, i[s + 1], e));
            }
            return n;
          }
          function w(e, i, n) {
            let s = 1000000000;
            let o = -1000000000;
            let l = [];
            function a(e, i, a, h, c) {
              let d = t.coordsAtPos(e, e == n.to ? -2 : 2);
              let p = t.coordsAtPos(a, a == n.from ? 2 : -2);
              if (d && p) {
                s = Math.min(d.top, p.top, s);
                o = Math.max(d.bottom, p.bottom, o);
                if (c == tC.LTR) {
                  l.push(r && i ? u : d.left, r && h ? f : p.right);
                } else {
                  l.push(!r && h ? u : p.left, !r && i ? f : d.right);
                }
              }
            }
            let h = e ?? n.from;
            let c = i ?? n.to;
            for (let n of t.visibleRanges) {
              if (n.to > h && n.from < c) {
                for (let s = Math.max(n.from, h), r = Math.min(n.to, c);;) {
                  let n = t.state.doc.lineAt(s);
                  for (let o of t.bidiSpans(n)) {
                    let t = o.from + n.from;
                    let l = o.to + n.from;
                    if (t >= r) {
                      break;
                    }
                    if (l > s) {
                      a(Math.max(t, s), e == null && t <= h, Math.min(l, r), i == null && l >= c, o.dir);
                    }
                  }
                  if ((s = n.to + 1) >= r) {
                    break;
                  }
                }
              }
            }
            if (l.length == 0) {
              a(h, e == null, c, i == null, t.textDirection);
            }
            return {
              top: s,
              bottom: o,
              horizontal: l
            };
          }
          function y(t, e) {
            let i = l.top + (e ? t.top : t.bottom);
            return {
              top: i,
              bottom: i,
              horizontal: []
            };
          }
        }(t, e, i);
      }
      {
        let n = t.coordsAtPos(i.head, i.assoc || 1);
        if (!n) {
          return [];
        }
        let s = iq(t);
        return [new iz(e, n.left - s.left, n.top - s.top, null, n.bottom - n.top)];
      }
    }
  }
  function iq(t) {
    let e = t.scrollDOM.getBoundingClientRect();
    return {
      left: (t.textDirection == tC.LTR ? e.left : e.right - t.scrollDOM.clientWidth * t.scaleX) - t.scrollDOM.scrollLeft * t.scaleX,
      top: e.top - t.scrollDOM.scrollTop * t.scaleY
    };
  }
  function i$(t, e, i, n) {
    let s = t.coordsAtPos(e, i * 2);
    if (!s) {
      return n;
    }
    let r = t.dom.getBoundingClientRect();
    let o = (s.top + s.bottom) / 2;
    let l = t.posAtCoords({
      x: r.left + 1,
      y: o
    });
    let a = t.posAtCoords({
      x: r.right - 1,
      y: o
    });
    if (l == null || a == null) {
      return n;
    } else {
      return {
        from: Math.max(n.from, Math.min(l, a)),
        to: Math.min(n.to, Math.max(l, a))
      };
    }
  }
  class iJ {
    constructor(t, e) {
      this.view = t;
      this.layer = e;
      this.drawn = [];
      this.scaleX = 1;
      this.scaleY = 1;
      this.measureReq = {
        read: this.measure.bind(this),
        write: this.draw.bind(this)
      };
      this.dom = t.scrollDOM.appendChild(document.createElement("div"));
      this.dom.classList.add("cm-layer");
      if (e.above) {
        this.dom.classList.add("cm-layer-above");
      }
      if (e.class) {
        this.dom.classList.add(e.class);
      }
      this.scale();
      this.dom.setAttribute("aria-hidden", "true");
      this.setOrder(t.state);
      t.requestMeasure(this.measureReq);
      if (e.mount) {
        e.mount(this.dom, t);
      }
    }
    update(t) {
      if (t.startState.facet(i_) != t.state.facet(i_)) {
        this.setOrder(t.state);
      }
      if (this.layer.update(t, this.dom) || t.geometryChanged) {
        this.scale();
        t.view.requestMeasure(this.measureReq);
      }
    }
    docViewUpdate(t) {
      if (this.layer.updateOnDocViewUpdate !== false) {
        t.requestMeasure(this.measureReq);
      }
    }
    setOrder(t) {
      let e = 0;
      let i = t.facet(i_);
      while (e < i.length && i[e] != this.layer) {
        e++;
      }
      this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e);
    }
    measure() {
      return this.layer.markers(this.view);
    }
    scale() {
      let {
        scaleX: t,
        scaleY: e
      } = this.view;
      if (t != this.scaleX || e != this.scaleY) {
        this.scaleX = t;
        this.scaleY = e;
        this.dom.style.transform = `scale(${1 / t}, ${1 / e})`;
      }
    }
    draw(t) {
      if (t.length != this.drawn.length || t.some((t, e) => {
        var i;
        i = this.drawn[e];
        return t.constructor != i.constructor || !t.eq(i);
      })) {
        let e = this.dom.firstChild;
        let i = 0;
        for (let n of t) {
          if (n.update && e && n.constructor && this.drawn[i].constructor && n.update(e, this.drawn[i])) {
            e = e.nextSibling;
            i++;
          } else {
            this.dom.insertBefore(n.draw(), e);
          }
        }
        while (e) {
          let t = e.nextSibling;
          e.remove();
          e = t;
        }
        this.drawn = t;
      }
    }
    destroy() {
      if (this.layer.destroy) {
        this.layer.destroy(this.dom, this.view);
      }
      this.dom.remove();
    }
  }
  let i_ = codemirrorStateCore.Facet.define();
  function iK(t) {
    return [t6.define(e => new iJ(e, t)), i_.of(t)];
  }
  let iU = !Z.ios || !Z.webkit || !(Z.webkit_version < 534);
  let iG = codemirrorStateCore.Facet.define({
    combine: t => codemirrorStateCore.mergeConfig(t, {
      cursorBlinkRate: 1200,
      drawRangeCursor: true
    }, {
      cursorBlinkRate: (t, e) => Math.min(t, e),
      drawRangeCursor: (t, e) => t || e
    })
  });
  function iQ(t = {}) {
    return [iG.of(t), iY, i0, i2, tU.of(true)];
  }
  function iX(t) {
    return t.startState.facet(iG) != t.state.facet(iG);
  }
  let iY = iK({
    above: true,
    markers(t) {
      let {
        state: e
      } = t;
      let i = e.facet(iG);
      let n = [];
      for (let s of e.selection.ranges) {
        let r = s == e.selection.main;
        if (s.empty ? !r || iU : i.drawRangeCursor) {
          let e = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary";
          let i = s.empty ? s : codemirrorStateCore.EditorSelection.cursor(s.head, s.head > s.anchor ? -1 : 1);
          for (let s of iz.forRange(t, e, i)) {
            n.push(s);
          }
        }
      }
      return n;
    },
    update(t, e) {
      if (t.transactions.some(t => t.selection)) {
        e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink";
      }
      let i = iX(t);
      if (i) {
        iZ(t.state, e);
      }
      return t.docChanged || t.selectionSet || i;
    },
    mount(t, e) {
      iZ(e.state, t);
    },
    class: "cm-cursorLayer"
  });
  function iZ(t, e) {
    e.style.animationDuration = t.facet(iG).cursorBlinkRate + "ms";
  }
  let i0 = iK({
    above: false,
    markers: t => t.state.selection.ranges.map(e => e.empty ? [] : iz.forRange(t, "cm-selectionBackground", e)).reduce((t, e) => t.concat(e)),
    update: (t, e) => t.docChanged || t.selectionSet || t.viewportChanged || iX(t),
    class: "cm-selectionLayer"
  });
  let i1 = {
    ".cm-line": {
      "& ::selection, &::selection": {
        backgroundColor: "transparent !important"
      }
    },
    ".cm-content": {
      "& :focus": {
        caretColor: "initial !important",
        "&::selection, & ::selection": {
          backgroundColor: "Highlight !important"
        }
      }
    }
  };
  if (iU) {
    i1[".cm-line"].caretColor = i1[".cm-content"].caretColor = "transparent !important";
  }
  let i2 = codemirrorStateCore.StateField.highest(iT.theme(i1));
  let i6 = codemirrorStateCore.EffectType.define({
    map: (t, e) => t == null ? null : e.mapPos(t)
  });
  let i3 = codemirrorStateCore.PrecLevels.define({
    create: () => null,
    update: (t, e) => {
      if (t != null) {
        t = e.changes.mapPos(t);
      }
      return e.effects.reduce((t, e) => e.is(i6) ? e.value : t, t);
    }
  });
  let i5 = t6.fromClass(class {
    constructor(t) {
      this.view = t;
      this.cursor = null;
      this.measureReq = {
        read: this.readPos.bind(this),
        write: this.drawCursor.bind(this)
      };
    }
    update(t) {
      var e;
      let i = t.state.field(i3);
      if (i == null) {
        if (this.cursor != null) {
          if ((e = this.cursor) !== null && e !== undefined) {
            e.remove();
          }
          this.cursor = null;
        }
      } else {
        if (!this.cursor) {
          this.cursor = this.view.scrollDOM.appendChild(document.createElement("div"));
          this.cursor.className = "cm-dropCursor";
        }
        if (t.startState.field(i3) != i || t.docChanged || t.geometryChanged) {
          this.view.requestMeasure(this.measureReq);
        }
      }
    }
    readPos() {
      let {
        view: t
      } = this;
      let e = t.state.field(i3);
      let i = e != null && t.coordsAtPos(e);
      if (!i) {
        return null;
      }
      let n = t.scrollDOM.getBoundingClientRect();
      return {
        left: i.left - n.left + t.scrollDOM.scrollLeft * t.scaleX,
        top: i.top - n.top + t.scrollDOM.scrollTop * t.scaleY,
        height: i.bottom - i.top
      };
    }
    drawCursor(t) {
      if (this.cursor) {
        let {
          scaleX: e,
          scaleY: i
        } = this.view;
        if (t) {
          this.cursor.style.left = t.left / e + "px";
          this.cursor.style.top = t.top / i + "px";
          this.cursor.style.height = t.height / i + "px";
        } else {
          this.cursor.style.left = "-100000px";
        }
      }
    }
    destroy() {
      if (this.cursor) {
        this.cursor.remove();
      }
    }
    setDropPos(t) {
      if (this.view.state.field(i3) != t) {
        this.view.dispatch({
          effects: i6.of(t)
        });
      }
    }
  }, {
    eventObservers: {
      dragover(t) {
        this.setDropPos(this.view.posAtCoords({
          x: t.clientX,
          y: t.clientY
        }));
      },
      dragleave(t) {
        if (t.target == this.view.contentDOM || !this.view.contentDOM.contains(t.relatedTarget)) {
          this.setDropPos(null);
        }
      },
      dragend() {
        this.setDropPos(null);
      },
      drop() {
        this.setDropPos(null);
      }
    }
  });
  function i8() {
    return [i3, i5];
  }
  function i4(t, e, i, n, s) {
    e.lastIndex = 0;
    for (let r = t.iterRange(i, n), o = i, l; !r.next().done; o += r.value.length) {
      if (!r.lineBreak) {
        while (l = e.exec(r.value)) {
          s(o + l.index, l);
        }
      }
    }
  }
  class i9 {
    constructor(t) {
      let {
        regexp: e,
        decoration: i,
        decorate: n,
        boundary: s,
        maxLength: r = 1000
      } = t;
      if (!e.global) {
        throw RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
      }
      this.regexp = e;
      if (n) {
        this.addMatch = (t, e, i, s) => n(s, i, i + t[0].length, t, e);
      } else if (typeof i == "function") {
        this.addMatch = (t, e, n, s) => {
          let r = i(t, e, n);
          if (r) {
            s(n, n + t[0].length, r);
          }
        };
      } else if (i) {
        this.addMatch = (t, e, n, s) => s(n, n + t[0].length, i);
      } else {
        throw RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
      }
      this.boundary = s;
      this.maxLength = r;
    }
    createDeco(t) {
      let e = new codemirrorStateCore.RangeSetBuilder();
      let i = e.add.bind(e);
      for (let {
        from: e,
        to: n
      } of function (t, e) {
        let i = t.visibleRanges;
        if (i.length == 1 && i[0].from == t.viewport.from && i[0].to == t.viewport.to) {
          return i;
        }
        let n = [];
        for (let {
          from: s,
          to: r
        } of i) {
          s = Math.max(t.state.doc.lineAt(s).from, s - e);
          r = Math.min(t.state.doc.lineAt(r).to, r + e);
          if (n.length && n[n.length - 1].to >= s) {
            n[n.length - 1].to = r;
          } else {
            n.push({
              from: s,
              to: r
            });
          }
        }
        return n;
      }(t, this.maxLength)) {
        i4(t.state.doc, this.regexp, e, n, (e, n) => this.addMatch(n, t, e, i));
      }
      return e.finish();
    }
    updateDeco(t, e) {
      let i = 1000000000;
      let n = -1;
      if (t.docChanged) {
        t.changes.iterChanges((e, s, r, o) => {
          if (o > t.view.viewport.from && r < t.view.viewport.to) {
            i = Math.min(r, i);
            n = Math.max(o, n);
          }
        });
      }
      if (t.viewportChanged || n - i > 1000) {
        return this.createDeco(t.view);
      } else if (n > -1) {
        return this.updateRange(t.view, e.map(t.changes), i, n);
      } else {
        return e;
      }
    }
    updateRange(t, e, i, n) {
      for (let s of t.visibleRanges) {
        let r = Math.max(s.from, i);
        let o = Math.min(s.to, n);
        if (o > r) {
          let i = t.state.doc.lineAt(r);
          let n = i.to < o ? t.state.doc.lineAt(o) : i;
          let l = Math.max(s.from, i.from);
          let a = Math.min(s.to, n.to);
          if (this.boundary) {
            for (; r > i.from; r--) {
              if (this.boundary.test(i.text[r - 1 - i.from])) {
                l = r;
                break;
              }
            }
            for (; o < n.to; o++) {
              if (this.boundary.test(n.text[o - n.from])) {
                a = o;
                break;
              }
            }
          }
          let h = [];
          let c;
          let u = (t, e, i) => h.push(i.range(t, e));
          if (i == n) {
            for (this.regexp.lastIndex = l - i.from; (c = this.regexp.exec(i.text)) && c.index < a - i.from;) {
              this.addMatch(c, t, c.index + i.from, u);
            }
          } else {
            i4(t.state.doc, this.regexp, l, a, (e, i) => this.addMatch(i, t, e, u));
          }
          e = e.update({
            filterFrom: l,
            filterTo: a,
            filter: (t, e) => t < l || e > a,
            add: h
          });
        }
      }
      return e;
    }
  }
  let i7 = /x/.unicode != null ? "gu" : "g";
  let nt = RegExp("[\0-\b\n--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩﻿￹-￼]", i7);
  let ne = {
    0: "null",
    7: "bell",
    8: "backspace",
    10: "newline",
    11: "vertical tab",
    13: "carriage return",
    27: "escape",
    8203: "zero width space",
    8204: "zero width non-joiner",
    8205: "zero width joiner",
    8206: "left-to-right mark",
    8207: "right-to-left mark",
    8232: "line separator",
    8237: "left-to-right override",
    8238: "right-to-left override",
    8294: "left-to-right isolate",
    8295: "right-to-left isolate",
    8297: "pop directional isolate",
    8233: "paragraph separator",
    65279: "zero width no-break space",
    65532: "object replacement"
  };
  let ni = null;
  let nn = codemirrorStateCore.Facet.define({
    combine(t) {
      let e = codemirrorStateCore.mergeConfig(t, {
        render: null,
        specialChars: nt,
        addSpecialChars: null
      });
      if (e.replaceTabs = !function () {
        if (ni == null && typeof document != "undefined" && document.body) {
          let e = document.body.style;
          ni = (e.tabSize ?? e.MozTabSize) != null;
        }
        return ni || false;
      }()) {
        e.specialChars = RegExp("\t|" + e.specialChars.source, i7);
      }
      if (e.addSpecialChars) {
        e.specialChars = RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, i7);
      }
      return e;
    }
  });
  function ns(t = {}) {
    return [nn.of(t), nr ||= t6.fromClass(class {
      constructor(t) {
        this.view = t;
        this.decorations = tf.none;
        this.decorationCache = Object.create(null);
        this.decorator = this.makeDecorator(t.state.facet(nn));
        this.decorations = this.decorator.createDeco(t);
      }
      makeDecorator(t) {
        return new i9({
          regexp: t.specialChars,
          decoration: (e, i, n) => {
            let {
              doc: s
            } = i.state;
            let r = codemirrorStateCore.charCodeAt(e[0], 0);
            if (r == 9) {
              let t = s.lineAt(n);
              let e = i.state.tabSize;
              let r = codemirrorStateCore.countColumn(t.text, e, n - t.from);
              return tf.replace({
                widget: new nl((e - r % e) * this.view.defaultCharacterWidth / this.view.scaleX)
              });
            }
            return this.decorationCache[r] ||= tf.replace({
              widget: new no(t, r)
            });
          },
          boundary: t.replaceTabs ? undefined : /[^]/
        });
      }
      update(t) {
        let e = t.state.facet(nn);
        if (t.startState.facet(nn) != e) {
          this.decorator = this.makeDecorator(e);
          this.decorations = this.decorator.createDeco(t.view);
        } else {
          this.decorations = this.decorator.updateDeco(t, this.decorations);
        }
      }
    }, {
      decorations: t => t.decorations
    })];
  }
  let nr = null;
  class no extends tc {
    constructor(t, e) {
      super();
      this.options = t;
      this.code = e;
    }
    eq(t) {
      return t.code == this.code;
    }
    toDOM(t) {
      var e;
      let i = (e = this.code) >= 32 ? "•" : e == 10 ? "␤" : String.fromCharCode(9216 + e);
      let n = t.state.phrase("Control character") + " " + (ne[this.code] || "0x" + this.code.toString(16));
      let s = this.options.render && this.options.render(this.code, n, i);
      if (s) {
        return s;
      }
      let r = document.createElement("span");
      r.textContent = i;
      r.title = n;
      r.setAttribute("aria-label", n);
      r.className = "cm-specialChar";
      return r;
    }
    ignoreEvent() {
      return false;
    }
  }
  class nl extends tc {
    constructor(t) {
      super();
      this.width = t;
    }
    eq(t) {
      return t.width == this.width;
    }
    toDOM() {
      let t = document.createElement("span");
      t.textContent = "\t";
      t.className = "cm-tab";
      t.style.width = this.width + "px";
      return t;
    }
    ignoreEvent() {
      return false;
    }
  }
  function na() {
    return nc;
  }
  let nh = tf.line({
    class: "cm-activeLine"
  });
  let nc = t6.fromClass(class {
    constructor(t) {
      this.decorations = this.getDeco(t);
    }
    update(t) {
      if (t.docChanged || t.selectionSet) {
        this.decorations = this.getDeco(t.view);
      }
    }
    getDeco(t) {
      let e = -1;
      let i = [];
      for (let n of t.state.selection.ranges) {
        let s = t.lineBlockAt(n.head);
        if (s.from > e) {
          i.push(nh.range(s.from));
          e = s.from;
        }
      }
      return tf.set(i);
    }
  }, {
    decorations: t => t.decorations
  });
  class nu extends tc {
    constructor(t) {
      super();
      this.content = t;
    }
    toDOM(t) {
      let e = document.createElement("span");
      e.className = "cm-placeholder";
      e.style.pointerEvents = "none";
      e.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(t) : this.content.cloneNode(true));
      if (typeof this.content == "string") {
        e.setAttribute("aria-label", "placeholder " + this.content);
      } else {
        e.setAttribute("aria-hidden", "true");
      }
      return e;
    }
    coordsAt(t) {
      let e = t.firstChild ? b(t.firstChild) : [];
      if (!e.length) {
        return null;
      }
      let i = window.getComputedStyle(t.parentNode);
      let n = C(e[0], i.direction != "rtl");
      let s = parseInt(i.lineHeight);
      if (n.bottom - n.top > s * 1.5) {
        return {
          left: n.left,
          right: n.right,
          top: n.top,
          bottom: n.top + s
        };
      } else {
        return n;
      }
    }
    ignoreEvent() {
      return false;
    }
  }
  function nf(t) {
    return t6.fromClass(class {
      constructor(e) {
        this.view = e;
        this.placeholder = t ? tf.set([tf.widget({
          widget: new nu(t),
          side: 1
        }).range(0)]) : tf.none;
      }
      get decorations() {
        if (this.view.state.doc.length) {
          return tf.none;
        } else {
          return this.placeholder;
        }
      }
    }, {
      decorations: t => t.decorations
    });
  }
  function nd(t, e) {
    var i;
    let n;
    let s = t.posAtCoords({
      x: e.clientX,
      y: e.clientY
    }, false);
    let r = t.state.doc.lineAt(s);
    let o = s - r.from;
    let a = o > 2000 ? -1 : o == r.length ? (i = e.clientX, (n = t.coordsAtPos(t.viewport.from)) ? Math.round(Math.abs((n.left - i) / t.defaultCharacterWidth)) : -1) : codemirrorStateCore.countColumn(r.text, t.state.tabSize, s - r.from);
    return {
      line: r.number,
      col: a,
      off: o
    };
  }
  function np(t) {
    let e = (t == null ? undefined : t.eventFilter) || (t => t.altKey && t.button == 0);
    return iT.mouseSelectionStyle.of((t, i) => {
      let n;
      let s;
      if (e(i)) {
        n = nd(t, i);
        s = t.state.selection;
        if (n) {
          return {
            update(t) {
              if (t.docChanged) {
                let e = t.changes.mapPos(t.startState.doc.line(n.line).from);
                let i = t.state.doc.lineAt(e);
                n = {
                  line: i.number,
                  col: n.col,
                  off: Math.min(n.off, i.length)
                };
                s = s.map(t.changes);
              }
            },
            get(e, i, r) {
              let o = nd(t, e);
              if (!o) {
                return s;
              }
              let a = function (t, e, i) {
                let n = Math.min(e.line, i.line);
                let s = Math.max(e.line, i.line);
                let r = [];
                if (e.off > 2000 || i.off > 2000 || e.col < 0 || i.col < 0) {
                  let o = Math.min(e.off, i.off);
                  let a = Math.max(e.off, i.off);
                  for (let e = n; e <= s; e++) {
                    let i = t.doc.line(e);
                    if (i.length <= a) {
                      r.push(codemirrorStateCore.EditorSelection.range(i.from + o, i.to + a));
                    }
                  }
                } else {
                  let o = Math.min(e.col, i.col);
                  let a = Math.max(e.col, i.col);
                  for (let e = n; e <= s; e++) {
                    let i = t.doc.line(e);
                    let n = codemirrorStateCore.columnToPos(i.text, o, t.tabSize, true);
                    if (n < 0) {
                      r.push(codemirrorStateCore.EditorSelection.cursor(i.to));
                    } else {
                      let e = codemirrorStateCore.columnToPos(i.text, a, t.tabSize);
                      r.push(codemirrorStateCore.EditorSelection.range(i.from + n, i.from + e));
                    }
                  }
                }
                return r;
              }(t.state, n, o);
              if (a.length) {
                if (r) {
                  return codemirrorStateCore.EditorSelection.create(a.concat(s.ranges));
                } else {
                  return codemirrorStateCore.EditorSelection.create(a);
                }
              } else {
                return s;
              }
            }
          };
        } else {
          return null;
        }
      } else {
        return null;
      }
    });
  }
  let nm = {
    Alt: [18, t => !!t.altKey],
    Control: [17, t => !!t.ctrlKey],
    Shift: [16, t => !!t.shiftKey],
    Meta: [91, t => !!t.metaKey]
  };
  let ng = {
    style: "cursor: crosshair"
  };
  function nv(t = {}) {
    let [e, i] = nm[t.key || "Alt"];
    let n = t6.fromClass(class {
      constructor(t) {
        this.view = t;
        this.isDown = false;
      }
      set(t) {
        if (this.isDown != t) {
          this.isDown = t;
          this.view.update([]);
        }
      }
    }, {
      eventObservers: {
        keydown(t) {
          this.set(t.keyCode == e || i(t));
        },
        keyup(t) {
          if (t.keyCode == e || !i(t)) {
            this.set(false);
          }
        },
        mousemove(t) {
          this.set(i(t));
        }
      }
    });
    return [n, iT.contentAttributes.of(t => {
      if (t.plugin(n)?.isDown) {
        return ng;
      } else {
        return null;
      }
    })];
  }
  let nb = "-10000px";
  class nw {
    constructor(t, e, i, n) {
      this.facet = e;
      this.createTooltipView = i;
      this.removeTooltipView = n;
      this.input = t.state.facet(e);
      this.tooltips = this.input.filter(t => t);
      let s = null;
      this.tooltipViews = this.tooltips.map(t => s = i(t, s));
    }
    update(t, e) {
      var i;
      let n = t.state.facet(this.facet);
      let s = n.filter(t => t);
      if (n === this.input) {
        for (let e of this.tooltipViews) {
          if (e.update) {
            e.update(t);
          }
        }
        return false;
      }
      let r = [];
      let o = e ? [] : null;
      for (let i = 0; i < s.length; i++) {
        let n = s[i];
        let l = -1;
        if (n) {
          for (let t = 0; t < this.tooltips.length; t++) {
            let e = this.tooltips[t];
            if (e && e.create == n.create) {
              l = t;
            }
          }
          if (l < 0) {
            r[i] = this.createTooltipView(n, i ? r[i - 1] : null);
            if (o) {
              o[i] = !!n.above;
            }
          } else {
            let n = r[i] = this.tooltipViews[l];
            if (o) {
              o[i] = e[l];
            }
            if (n.update) {
              n.update(t);
            }
          }
        }
      }
      for (let t of this.tooltipViews) {
        if (r.indexOf(t) < 0) {
          this.removeTooltipView(t);
          if ((i = t.destroy) !== null && i !== undefined) {
            i.call(t);
          }
        }
      }
      if (e) {
        o.forEach((t, i) => e[i] = t);
        e.length = o.length;
      }
      this.input = n;
      this.tooltips = s;
      this.tooltipViews = r;
      return true;
    }
  }
  function ny(t) {
    let {
      win: e
    } = t;
    return {
      top: 0,
      left: 0,
      bottom: e.innerHeight,
      right: e.innerWidth
    };
  }
  let nx = codemirrorStateCore.Facet.define({
    combine: t => {
      return {
        position: Z.ios ? "absolute" : t.find(t => t.position)?.position || "fixed",
        parent: t.find(t => t.parent)?.parent || null,
        tooltipSpace: t.find(t => t.tooltipSpace)?.tooltipSpace || ny
      };
    }
  });
  let nk = new WeakMap();
  let nS = t6.fromClass(class {
    constructor(t) {
      this.view = t;
      this.above = [];
      this.inView = true;
      this.madeAbsolute = false;
      this.lastTransaction = 0;
      this.measureTimeout = -1;
      let e = t.state.facet(nx);
      this.position = e.position;
      this.parent = e.parent;
      this.classes = t.themeClasses;
      this.createContainer();
      this.measureReq = {
        read: this.readMeasure.bind(this),
        write: this.writeMeasure.bind(this),
        key: this
      };
      this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null;
      this.manager = new nw(t, nT, (t, e) => this.createTooltip(t, e), t => {
        if (this.resizeObserver) {
          this.resizeObserver.unobserve(t.dom);
        }
        t.dom.remove();
      });
      this.above = this.manager.tooltips.map(t => !!t.above);
      this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver(t => {
        if (Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1) {
          this.measureSoon();
        }
      }, {
        threshold: [1]
      }) : null;
      this.observeIntersection();
      t.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this));
      this.maybeMeasure();
    }
    createContainer() {
      if (this.parent) {
        this.container = document.createElement("div");
        this.container.style.position = "relative";
        this.container.className = this.view.themeClasses;
        this.parent.appendChild(this.container);
      } else {
        this.container = this.view.dom;
      }
    }
    observeIntersection() {
      if (this.intersectionObserver) {
        this.intersectionObserver.disconnect();
        for (let t of this.manager.tooltipViews) {
          this.intersectionObserver.observe(t.dom);
        }
      }
    }
    measureSoon() {
      if (this.measureTimeout < 0) {
        this.measureTimeout = setTimeout(() => {
          this.measureTimeout = -1;
          this.maybeMeasure();
        }, 50);
      }
    }
    update(t) {
      if (t.transactions.length) {
        this.lastTransaction = Date.now();
      }
      let e = this.manager.update(t, this.above);
      if (e) {
        this.observeIntersection();
      }
      let i = e || t.geometryChanged;
      let n = t.state.facet(nx);
      if (n.position != this.position && !this.madeAbsolute) {
        this.position = n.position;
        for (let t of this.manager.tooltipViews) {
          t.dom.style.position = this.position;
        }
        i = true;
      }
      if (n.parent != this.parent) {
        if (this.parent) {
          this.container.remove();
        }
        this.parent = n.parent;
        this.createContainer();
        for (let t of this.manager.tooltipViews) {
          this.container.appendChild(t.dom);
        }
        i = true;
      } else if (this.parent && this.view.themeClasses != this.classes) {
        this.classes = this.container.className = this.view.themeClasses;
      }
      if (i) {
        this.maybeMeasure();
      }
    }
    createTooltip(t, e) {
      let i = t.create(this.view);
      let n = e ? e.dom : null;
      i.dom.classList.add("cm-tooltip");
      if (t.arrow && !i.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
        let t = document.createElement("div");
        t.className = "cm-tooltip-arrow";
        i.dom.appendChild(t);
      }
      i.dom.style.position = this.position;
      i.dom.style.top = nb;
      i.dom.style.left = "0px";
      this.container.insertBefore(i.dom, n);
      if (i.mount) {
        i.mount(this.view);
      }
      if (this.resizeObserver) {
        this.resizeObserver.observe(i.dom);
      }
      return i;
    }
    destroy() {
      var t;
      var e;
      var i;
      this.view.win.removeEventListener("resize", this.measureSoon);
      for (let e of this.manager.tooltipViews) {
        e.dom.remove();
        if ((t = e.destroy) !== null && t !== undefined) {
          t.call(e);
        }
      }
      if (this.parent) {
        this.container.remove();
      }
      if ((e = this.resizeObserver) !== null && e !== undefined) {
        e.disconnect();
      }
      if ((i = this.intersectionObserver) !== null && i !== undefined) {
        i.disconnect();
      }
      clearTimeout(this.measureTimeout);
    }
    readMeasure() {
      let t = 1;
      let e = 1;
      let i = false;
      if (this.position == "fixed" && this.manager.tooltipViews.length) {
        let {
          dom: t
        } = this.manager.tooltipViews[0];
        if (Z.gecko) {
          i = t.offsetParent != this.container.ownerDocument.body;
        } else if (t.style.top == nb && t.style.left == "0px") {
          let e = t.getBoundingClientRect();
          i = Math.abs(e.top + 10000) > 1 || Math.abs(e.left) > 1;
        }
      }
      if (i || this.position == "absolute") {
        if (this.parent) {
          let i = this.parent.getBoundingClientRect();
          if (i.width && i.height) {
            t = i.width / this.parent.offsetWidth;
            e = i.height / this.parent.offsetHeight;
          }
        } else {
          ({
            scaleX: t,
            scaleY: e
          } = this.view.viewState);
        }
      }
      let n = this.view.scrollDOM.getBoundingClientRect();
      let s = en(this.view);
      return {
        visible: {
          left: n.left + s.left,
          top: n.top + s.top,
          right: n.right - s.right,
          bottom: n.bottom - s.bottom
        },
        parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
        pos: this.manager.tooltips.map((t, e) => {
          let i = this.manager.tooltipViews[e];
          if (i.getCoords) {
            return i.getCoords(t.pos);
          } else {
            return this.view.coordsAtPos(t.pos);
          }
        }),
        size: this.manager.tooltipViews.map(({
          dom: t
        }) => t.getBoundingClientRect()),
        space: this.view.state.facet(nx).tooltipSpace(this.view),
        scaleX: t,
        scaleY: e,
        makeAbsolute: i
      };
    }
    writeMeasure(t) {
      if (t.makeAbsolute) {
        this.madeAbsolute = true;
        this.position = "absolute";
        for (let t of this.manager.tooltipViews) {
          t.dom.style.position = "absolute";
        }
      }
      let {
        visible: i,
        space: n,
        scaleX: s,
        scaleY: r
      } = t;
      let o = [];
      for (let l = 0; l < this.manager.tooltips.length; l++) {
        let a = this.manager.tooltips[l];
        let h = this.manager.tooltipViews[l];
        let {
          dom: c
        } = h;
        let u = t.pos[l];
        let f = t.size[l];
        if (!u || a.clip !== false && (u.bottom <= Math.max(i.top, n.top) || u.top >= Math.min(i.bottom, n.bottom) || u.right < Math.max(i.left, n.left) - 0.1 || u.left > Math.min(i.right, n.right) + 0.1)) {
          c.style.top = nb;
          continue;
        }
        let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null;
        let p = !!d * 7;
        let m = f.right - f.left;
        let g = nk.get(h) ?? f.bottom - f.top;
        let v = h.offset || nA;
        let b = this.view.textDirection == tC.LTR;
        let w = f.width > n.right - n.left ? b ? n.left : n.right - f.width : b ? Math.max(n.left, Math.min(u.left - !!d * 14 + v.x, n.right - m)) : Math.min(Math.max(n.left, u.left - m + !!d * 14 - v.x), n.right - m);
        let y = this.above[l];
        if (!a.strictSide && (y ? u.top - g - p - v.y < n.top : u.bottom + g + p + v.y > n.bottom) && y == n.bottom - u.bottom > u.top - n.top) {
          y = this.above[l] = !y;
        }
        let x = (y ? u.top - n.top : n.bottom - u.bottom) - p;
        if (x < g && h.resize !== false) {
          if (x < this.view.defaultLineHeight) {
            c.style.top = nb;
            continue;
          }
          nk.set(h, g);
          c.style.height = (g = x) / r + "px";
        } else {
          c.style.height &&= "";
        }
        let k = y ? u.top - g - p - v.y : u.bottom + p + v.y;
        let S = w + m;
        if (h.overlap !== true) {
          for (let t of o) {
            if (t.left < S && t.right > w && t.top < k + g && t.bottom > k) {
              k = y ? t.top - g - 2 - p : t.bottom + p + 2;
            }
          }
        }
        if (this.position == "absolute") {
          c.style.top = (k - t.parent.top) / r + "px";
          nC(c, (w - t.parent.left) / s);
        } else {
          c.style.top = k / r + "px";
          nC(c, w / s);
        }
        if (d) {
          let t = u.left + (b ? v.x : -v.x) - (w + 14 - 7);
          d.style.left = t / s + "px";
        }
        if (h.overlap !== true) {
          o.push({
            left: w,
            top: k,
            right: S,
            bottom: k + g
          });
        }
        c.classList.toggle("cm-tooltip-above", y);
        c.classList.toggle("cm-tooltip-below", !y);
        if (h.positioned) {
          h.positioned(t.space);
        }
      }
    }
    maybeMeasure() {
      if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) {
        for (let t of this.manager.tooltipViews) {
          t.dom.style.top = nb;
        }
      }
    }
  }, {
    eventObservers: {
      scroll() {
        this.maybeMeasure();
      }
    }
  });
  function nC(t, e) {
    let i = parseInt(t.style.left, 10);
    if (isNaN(i) || Math.abs(e - i) > 1) {
      t.style.left = e + "px";
    }
  }
  let nM = iT.baseTheme({
    ".cm-tooltip": {
      zIndex: 500,
      boxSizing: "border-box"
    },
    "&light .cm-tooltip": {
      border: "1px solid #bbb",
      backgroundColor: "#f5f5f5"
    },
    "&light .cm-tooltip-section:not(:first-child)": {
      borderTop: "1px solid #bbb"
    },
    "&dark .cm-tooltip": {
      backgroundColor: "#333338",
      color: "white"
    },
    ".cm-tooltip-arrow": {
      height: "7px",
      width: "14px",
      position: "absolute",
      zIndex: -1,
      overflow: "hidden",
      "&:before, &:after": {
        content: "''",
        position: "absolute",
        width: 0,
        height: 0,
        borderLeft: "7px solid transparent",
        borderRight: "7px solid transparent"
      },
      ".cm-tooltip-above &": {
        bottom: "-7px",
        "&:before": {
          borderTop: "7px solid #bbb"
        },
        "&:after": {
          borderTop: "7px solid #f5f5f5",
          bottom: "1px"
        }
      },
      ".cm-tooltip-below &": {
        top: "-7px",
        "&:before": {
          borderBottom: "7px solid #bbb"
        },
        "&:after": {
          borderBottom: "7px solid #f5f5f5",
          top: "1px"
        }
      }
    },
    "&dark .cm-tooltip .cm-tooltip-arrow": {
      "&:before": {
        borderTopColor: "#333338",
        borderBottomColor: "#333338"
      },
      "&:after": {
        borderTopColor: "transparent",
        borderBottomColor: "transparent"
      }
    }
  });
  let nA = {
    x: 0,
    y: 0
  };
  let nT = codemirrorStateCore.Facet.define({
    enables: [nS, nM]
  });
  let nO = codemirrorStateCore.Facet.define({
    combine: t => t.reduce((t, e) => t.concat(e), [])
  });
  class nD {
    static create(t) {
      return new nD(t);
    }
    constructor(t) {
      this.view = t;
      this.mounted = false;
      this.dom = document.createElement("div");
      this.dom.classList.add("cm-tooltip-hover");
      this.manager = new nw(t, nO, (t, e) => this.createHostedView(t, e), t => t.dom.remove());
    }
    createHostedView(t, e) {
      let i = t.create(this.view);
      i.dom.classList.add("cm-tooltip-section");
      this.dom.insertBefore(i.dom, e ? e.dom.nextSibling : this.dom.firstChild);
      if (this.mounted && i.mount) {
        i.mount(this.view);
      }
      return i;
    }
    mount(t) {
      for (let e of this.manager.tooltipViews) {
        if (e.mount) {
          e.mount(t);
        }
      }
      this.mounted = true;
    }
    positioned(t) {
      for (let e of this.manager.tooltipViews) {
        if (e.positioned) {
          e.positioned(t);
        }
      }
    }
    update(t) {
      this.manager.update(t);
    }
    destroy() {
      var t;
      for (let e of this.manager.tooltipViews) {
        if ((t = e.destroy) !== null && t !== undefined) {
          t.call(e);
        }
      }
    }
    passProp(t) {
      let e;
      for (let i of this.manager.tooltipViews) {
        let n = i[t];
        if (n !== undefined) {
          if (e === undefined) {
            e = n;
          } else if (e !== n) {
            return;
          }
        }
      }
      return e;
    }
    get offset() {
      return this.passProp("offset");
    }
    get getCoords() {
      return this.passProp("getCoords");
    }
    get overlap() {
      return this.passProp("overlap");
    }
    get resize() {
      return this.passProp("resize");
    }
  }
  let nP = nT.compute([nO], t => {
    let e = t.facet(nO);
    if (e.length === 0) {
      return null;
    } else {
      return {
        pos: Math.min(...e.map(t => t.pos)),
        end: Math.max(...e.map(t => {
          return t.end ?? t.pos;
        })),
        create: nD.create,
        above: e[0].above,
        arrow: e.some(t => t.arrow)
      };
    }
  });
  class nE {
    constructor(t, e, i, n, s) {
      this.view = t;
      this.source = e;
      this.field = i;
      this.setHover = n;
      this.hoverTime = s;
      this.hoverTimeout = -1;
      this.restartTimeout = -1;
      this.pending = null;
      this.lastMove = {
        x: 0,
        y: 0,
        target: t.dom,
        time: 0
      };
      this.checkHover = this.checkHover.bind(this);
      t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this));
      t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
    }
    update() {
      if (this.pending) {
        this.pending = null;
        clearTimeout(this.restartTimeout);
        this.restartTimeout = setTimeout(() => this.startHover(), 20);
      }
    }
    get active() {
      return this.view.state.field(this.field);
    }
    checkHover() {
      this.hoverTimeout = -1;
      if (this.active.length) {
        return;
      }
      let t = Date.now() - this.lastMove.time;
      if (t < this.hoverTime) {
        this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t);
      } else {
        this.startHover();
      }
    }
    startHover() {
      clearTimeout(this.restartTimeout);
      let {
        view: t,
        lastMove: e
      } = this;
      let i = t.docView.nearest(e.target);
      if (!i) {
        return;
      }
      let n;
      let s = 1;
      if (i instanceof ti) {
        n = i.posAtStart;
      } else {
        if ((n = t.posAtCoords(e)) == null) {
          return;
        }
        let i = t.coordsAtPos(n);
        if (!i || e.y < i.top || e.y > i.bottom || e.x < i.left - t.defaultCharacterWidth || e.x > i.right + t.defaultCharacterWidth) {
          return;
        }
        let r = t.bidiSpans(t.state.doc.lineAt(n)).find(t => t.from <= n && t.to >= n);
        let o = r && r.dir == tC.RTL ? -1 : 1;
        s = e.x < i.left ? -o : o;
      }
      let r = this.source(t, n, s);
      if (r == null ? undefined : r.then) {
        let e = this.pending = {
          pos: n
        };
        r.then(i => {
          if (this.pending == e) {
            this.pending = null;
            if (i && (!Array.isArray(i) || !!i.length)) {
              t.dispatch({
                effects: this.setHover.of(Array.isArray(i) ? i : [i])
              });
            }
          }
        }, e => tZ(t.state, e, "hover tooltip"));
      } else if (r && (!Array.isArray(r) || !!r.length)) {
        t.dispatch({
          effects: this.setHover.of(Array.isArray(r) ? r : [r])
        });
      }
    }
    get tooltip() {
      let t = this.view.plugin(nS);
      let e = t ? t.manager.tooltips.findIndex(t => t.create == nD.create) : -1;
      if (e > -1) {
        return t.manager.tooltipViews[e];
      } else {
        return null;
      }
    }
    mousemove(t) {
      this.lastMove = {
        x: t.clientX,
        y: t.clientY,
        target: t.target,
        time: Date.now()
      };
      if (this.hoverTimeout < 0) {
        this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime);
      }
      let {
        active: n,
        tooltip: s
      } = this;
      if (n.length && s && !function (t, e) {
        let {
          left: i,
          right: n,
          top: s,
          bottom: r
        } = t.getBoundingClientRect();
        let o;
        if (o = t.querySelector(".cm-tooltip-arrow")) {
          let t = o.getBoundingClientRect();
          s = Math.min(t.top, s);
          r = Math.max(t.bottom, r);
        }
        return e.clientX >= i - 4 && e.clientX <= n + 4 && e.clientY >= s - 4 && e.clientY <= r + 4;
      }(s.dom, t) || this.pending) {
        let {
          pos: s
        } = n[0] || this.pending;
        let r = n[0]?.end ?? s;
        if (s == r ? this.view.posAtCoords(this.lastMove) != s : !function (t, e, i, n, s, r) {
          let o = t.scrollDOM.getBoundingClientRect();
          let l = t.documentTop + t.documentPadding.top + t.contentHeight;
          if (o.left > n || o.right < n || o.top > s || Math.min(o.bottom, l) < s) {
            return false;
          }
          let a = t.posAtCoords({
            x: n,
            y: s
          }, false);
          return a >= e && a <= i;
        }(this.view, s, r, t.clientX, t.clientY)) {
          this.view.dispatch({
            effects: this.setHover.of([])
          });
          this.pending = null;
        }
      }
    }
    mouseleave(t) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = -1;
      let {
        active: e
      } = this;
      if (e.length) {
        let {
          tooltip: e
        } = this;
        if (e && e.dom.contains(t.relatedTarget)) {
          this.watchTooltipLeave(e.dom);
        } else {
          this.view.dispatch({
            effects: this.setHover.of([])
          });
        }
      }
    }
    watchTooltipLeave(t) {
      let e = i => {
        t.removeEventListener("mouseleave", e);
        if (this.active.length && !this.view.dom.contains(i.relatedTarget)) {
          this.view.dispatch({
            effects: this.setHover.of([])
          });
        }
      };
      t.addEventListener("mouseleave", e);
    }
    destroy() {
      clearTimeout(this.hoverTimeout);
      this.view.dom.removeEventListener("mouseleave", this.mouseleave);
      this.view.dom.removeEventListener("mousemove", this.mousemove);
    }
  }
  function nR(t, e = {}) {
    let i = codemirrorStateCore.EffectType.define();
    let n = codemirrorStateCore.PrecLevels.define({
      create: () => [],
      update(t, n) {
        if (t.length && (e.hideOnChange && (n.docChanged || n.selection) ? t = [] : e.hideOn && (t = t.filter(t => !e.hideOn(n, t))), n.docChanged)) {
          let e = [];
          for (let i of t) {
            let t = n.changes.mapPos(i.pos, -1, codemirrorStateCore.MapMode.TrackDel);
            if (t != null) {
              let s = Object.assign(Object.create(null), i);
              s.pos = t;
              if (s.end != null) {
                s.end = n.changes.mapPos(s.end);
              }
              e.push(s);
            }
          }
          t = e;
        }
        for (let e of n.effects) {
          if (e.is(i)) {
            t = e.value;
          }
          if (e.is(nB)) {
            t = [];
          }
        }
        return t;
      },
      provide: t => nO.from(t)
    });
    return {
      active: n,
      extension: [n, t6.define(s => new nE(s, t, n, i, e.hoverTime || 300)), nP]
    };
  }
  function nL(t, e) {
    let i = t.plugin(nS);
    if (!i) {
      return null;
    }
    let n = i.manager.tooltips.indexOf(e);
    if (n < 0) {
      return null;
    } else {
      return i.manager.tooltipViews[n];
    }
  }
  let nB = codemirrorStateCore.EffectType.define();
  let nI = codemirrorStateCore.Facet.define({
    combine(t) {
      let e;
      let i;
      for (let n of t) {
        e = e || n.topContainer;
        i = i || n.bottomContainer;
      }
      return {
        topContainer: e,
        bottomContainer: i
      };
    }
  });
  function nN(t, e) {
    let i = t.plugin(nV);
    let n = i ? i.specs.indexOf(e) : -1;
    if (n > -1) {
      return i.panels[n];
    } else {
      return null;
    }
  }
  let nV = t6.fromClass(class {
    constructor(t) {
      this.input = t.state.facet(nH);
      this.specs = this.input.filter(t => t);
      this.panels = this.specs.map(e => e(t));
      let e = t.state.facet(nI);
      this.top = new nF(t, true, e.topContainer);
      this.bottom = new nF(t, false, e.bottomContainer);
      this.top.sync(this.panels.filter(t => t.top));
      this.bottom.sync(this.panels.filter(t => !t.top));
      for (let i of this.panels) {
        i.dom.classList.add("cm-panel");
        if (i.mount) {
          i.mount();
        }
      }
    }
    update(t) {
      let e = t.state.facet(nI);
      if (this.top.container != e.topContainer) {
        this.top.sync([]);
        this.top = new nF(t.view, true, e.topContainer);
      }
      if (this.bottom.container != e.bottomContainer) {
        this.bottom.sync([]);
        this.bottom = new nF(t.view, false, e.bottomContainer);
      }
      this.top.syncClasses();
      this.bottom.syncClasses();
      let i = t.state.facet(nH);
      if (i != this.input) {
        let e = i.filter(t => t);
        let n = [];
        let s = [];
        let r = [];
        let o = [];
        for (let i of e) {
          let e = this.specs.indexOf(i);
          let l;
          if (e < 0) {
            l = i(t.view);
            o.push(l);
          } else if ((l = this.panels[e]).update) {
            l.update(t);
          }
          n.push(l);
          (l.top ? s : r).push(l);
        }
        this.specs = e;
        this.panels = n;
        this.top.sync(s);
        this.bottom.sync(r);
        for (let t of o) {
          t.dom.classList.add("cm-panel");
          if (t.mount) {
            t.mount();
          }
        }
      } else {
        for (let e of this.panels) {
          if (e.update) {
            e.update(t);
          }
        }
      }
    }
    destroy() {
      this.top.sync([]);
      this.bottom.sync([]);
    }
  }, {
    provide: t => iT.scrollMargins.of(e => {
      let i = e.plugin(t);
      return i && {
        top: i.top.scrollMargin(),
        bottom: i.bottom.scrollMargin()
      };
    })
  });
  class nF {
    constructor(t, e, i) {
      this.view = t;
      this.top = e;
      this.container = i;
      this.dom = undefined;
      this.classes = "";
      this.panels = [];
      this.syncClasses();
    }
    sync(t) {
      for (let e of this.panels) {
        if (e.destroy && t.indexOf(e) < 0) {
          e.destroy();
        }
      }
      this.panels = t;
      this.syncDOM();
    }
    syncDOM() {
      if (this.panels.length == 0) {
        if (this.dom) {
          this.dom.remove();
          this.dom = undefined;
        }
        return;
      }
      if (!this.dom) {
        this.dom = document.createElement("div");
        this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom";
        this.dom.style[this.top ? "top" : "bottom"] = "0";
        let t = this.container || this.view.dom;
        t.insertBefore(this.dom, this.top ? t.firstChild : null);
      }
      let t = this.dom.firstChild;
      for (let e of this.panels) {
        if (e.dom.parentNode == this.dom) {
          while (t != e.dom) {
            t = nj(t);
          }
          t = t.nextSibling;
        } else {
          this.dom.insertBefore(e.dom, t);
        }
      }
      while (t) {
        t = nj(t);
      }
    }
    scrollMargin() {
      if (!this.dom || this.container) {
        return 0;
      } else {
        return Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
      }
    }
    syncClasses() {
      if (this.container && this.classes != this.view.themeClasses) {
        for (let t of this.classes.split(" ")) {
          if (t) {
            this.container.classList.remove(t);
          }
        }
        for (let t of (this.classes = this.view.themeClasses).split(" ")) {
          if (t) {
            this.container.classList.add(t);
          }
        }
      }
    }
  }
  function nj(t) {
    let e = t.nextSibling;
    t.remove();
    return e;
  }
  let nH = codemirrorStateCore.Facet.define({
    enables: nV
  });
  class nW extends codemirrorStateCore.RangeValue {
    compare(t) {
      return this == t || this.constructor == t.constructor && this.eq(t);
    }
    eq(t) {
      return false;
    }
    destroy(t) {}
  }
  nW.prototype.elementClass = "";
  nW.prototype.toDOM = undefined;
  nW.prototype.mapMode = codemirrorStateCore.MapMode.TrackBefore;
  nW.prototype.startSide = nW.prototype.endSide = -1;
  nW.prototype.point = true;
  let nz = codemirrorStateCore.Facet.define();
  let nq = codemirrorStateCore.Facet.define();
  let n$ = {
    class: "",
    renderEmptyElements: false,
    elementStyle: "",
    markers: () => codemirrorStateCore.RangeSet.empty,
    lineMarker: () => null,
    widgetMarker: () => null,
    lineMarkerChange: null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {}
  };
  let nJ = codemirrorStateCore.Facet.define();
  function n_(t) {
    return [nU(), nJ.of(Object.assign(Object.assign({}, n$), t))];
  }
  let nK = codemirrorStateCore.Facet.define({
    combine: t => t.some(t => t)
  });
  function nU(t) {
    let e = [nG];
    if (t && t.fixed === false) {
      e.push(nK.of(true));
    }
    return e;
  }
  let nG = t6.fromClass(class {
    constructor(t) {
      this.view = t;
      this.prevViewport = t.viewport;
      this.dom = document.createElement("div");
      this.dom.className = "cm-gutters";
      this.dom.setAttribute("aria-hidden", "true");
      this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px";
      this.gutters = t.state.facet(nJ).map(e => new nZ(t, e));
      for (let e of this.gutters) {
        this.dom.appendChild(e.dom);
      }
      this.fixed = !t.state.facet(nK);
      if (this.fixed) {
        this.dom.style.position = "sticky";
      }
      this.syncGutters(false);
      t.scrollDOM.insertBefore(this.dom, t.contentDOM);
    }
    update(t) {
      if (this.updateGutters(t)) {
        let e = this.prevViewport;
        let i = t.view.viewport;
        let n = Math.min(e.to, i.to) - Math.max(e.from, i.from);
        this.syncGutters(n < (i.to - i.from) * 0.8);
      }
      if (t.geometryChanged) {
        this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px";
      }
      if (this.view.state.facet(nK) != !this.fixed) {
        this.fixed = !this.fixed;
        this.dom.style.position = this.fixed ? "sticky" : "";
      }
      this.prevViewport = t.view.viewport;
    }
    syncGutters(t) {
      let e = this.dom.nextSibling;
      if (t) {
        this.dom.remove();
      }
      let i = codemirrorStateCore.RangeSet.iter(this.view.state.facet(nz), this.view.viewport.from);
      let n = [];
      let s = this.gutters.map(t => new nY(t, this.view.viewport, -this.view.documentPadding.top));
      for (let t of this.view.viewportLineBlocks) {
        if (n.length) {
          n = [];
        }
        if (Array.isArray(t.type)) {
          let e = true;
          for (let r of t.type) {
            if (r.type == tu.Text && e) {
              nX(i, n, r.from);
              for (let t of s) {
                t.line(this.view, r, n);
              }
              e = false;
            } else if (r.widget) {
              for (let t of s) {
                t.widget(this.view, r);
              }
            }
          }
        } else if (t.type == tu.Text) {
          nX(i, n, t.from);
          for (let e of s) {
            e.line(this.view, t, n);
          }
        } else if (t.widget) {
          for (let e of s) {
            e.widget(this.view, t);
          }
        }
      }
      for (let t of s) {
        t.finish();
      }
      if (t) {
        this.view.scrollDOM.insertBefore(this.dom, e);
      }
    }
    updateGutters(t) {
      let e = t.startState.facet(nJ);
      let i = t.state.facet(nJ);
      let n = t.docChanged || t.heightChanged || t.viewportChanged || !codemirrorStateCore.RangeSet.eq(t.startState.facet(nz), t.state.facet(nz), t.view.viewport.from, t.view.viewport.to);
      if (e == i) {
        for (let e of this.gutters) {
          if (e.update(t)) {
            n = true;
          }
        }
      } else {
        n = true;
        let s = [];
        for (let n of i) {
          let i = e.indexOf(n);
          if (i < 0) {
            s.push(new nZ(this.view, n));
          } else {
            this.gutters[i].update(t);
            s.push(this.gutters[i]);
          }
        }
        for (let t of this.gutters) {
          t.dom.remove();
          if (s.indexOf(t) < 0) {
            t.destroy();
          }
        }
        for (let t of s) {
          this.dom.appendChild(t.dom);
        }
        this.gutters = s;
      }
      return n;
    }
    destroy() {
      for (let t of this.gutters) {
        t.destroy();
      }
      this.dom.remove();
    }
  }, {
    provide: t => iT.scrollMargins.of(e => {
      let i = e.plugin(t);
      if (i && i.gutters.length != 0 && i.fixed) {
        if (e.textDirection == tC.LTR) {
          return {
            left: i.dom.offsetWidth * e.scaleX
          };
        } else {
          return {
            right: i.dom.offsetWidth * e.scaleX
          };
        }
      } else {
        return null;
      }
    })
  });
  function nQ(t) {
    if (Array.isArray(t)) {
      return t;
    } else {
      return [t];
    }
  }
  function nX(t, e, i) {
    while (t.value && t.from <= i) {
      if (t.from == i) {
        e.push(t.value);
      }
      t.next();
    }
  }
  class nY {
    constructor(t, e, i) {
      this.gutter = t;
      this.height = i;
      this.i = 0;
      this.cursor = codemirrorStateCore.RangeSet.iter(t.markers, e.from);
    }
    addElement(t, e, i) {
      let {
        gutter: n
      } = this;
      let s = (e.top - this.height) / t.scaleY;
      let r = e.height / t.scaleY;
      if (this.i == n.elements.length) {
        let e = new n0(t, r, s, i);
        n.elements.push(e);
        n.dom.appendChild(e.dom);
      } else {
        n.elements[this.i].update(t, r, s, i);
      }
      this.height = e.bottom;
      this.i++;
    }
    line(t, e, i) {
      let n = [];
      nX(this.cursor, n, e.from);
      if (i.length) {
        n = n.concat(i);
      }
      let s = this.gutter.config.lineMarker(t, e, n);
      if (s) {
        n.unshift(s);
      }
      let r = this.gutter;
      if (n.length != 0 || r.config.renderEmptyElements) {
        this.addElement(t, e, n);
      }
    }
    widget(t, e) {
      let i = this.gutter.config.widgetMarker(t, e.widget, e);
      let n = i ? [i] : null;
      for (let i of t.state.facet(nq)) {
        let s = i(t, e.widget, e);
        if (s) {
          (n ||= []).push(s);
        }
      }
      if (n) {
        this.addElement(t, e, n);
      }
    }
    finish() {
      let t = this.gutter;
      while (t.elements.length > this.i) {
        let e = t.elements.pop();
        t.dom.removeChild(e.dom);
        e.destroy();
      }
    }
  }
  class nZ {
    constructor(t, e) {
      this.view = t;
      this.config = e;
      this.elements = [];
      this.spacer = null;
      this.dom = document.createElement("div");
      this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
      for (let i in e.domEventHandlers) {
        this.dom.addEventListener(i, n => {
          let s = n.target;
          let r;
          if (s != this.dom && this.dom.contains(s)) {
            while (s.parentNode != this.dom) {
              s = s.parentNode;
            }
            let t = s.getBoundingClientRect();
            r = (t.top + t.bottom) / 2;
          } else {
            r = n.clientY;
          }
          let o = t.lineBlockAtHeight(r - t.documentTop);
          if (e.domEventHandlers[i](t, o, n)) {
            n.preventDefault();
          }
        });
      }
      this.markers = nQ(e.markers(t));
      if (e.initialSpacer) {
        this.spacer = new n0(t, 0, 0, [e.initialSpacer(t)]);
        this.dom.appendChild(this.spacer.dom);
        this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none";
      }
    }
    update(t) {
      let e = this.markers;
      this.markers = nQ(this.config.markers(t.view));
      if (this.spacer && this.config.updateSpacer) {
        let e = this.config.updateSpacer(this.spacer.markers[0], t);
        if (e != this.spacer.markers[0]) {
          this.spacer.update(t.view, 0, 0, [e]);
        }
      }
      let i = t.view.viewport;
      return !codemirrorStateCore.RangeSet.eq(this.markers, e, i.from, i.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(t);
    }
    destroy() {
      for (let t of this.elements) {
        t.destroy();
      }
    }
  }
  class n0 {
    constructor(t, e, i, n) {
      this.height = -1;
      this.above = 0;
      this.markers = [];
      this.dom = document.createElement("div");
      this.dom.className = "cm-gutterElement";
      this.update(t, e, i, n);
    }
    update(t, e, i, n) {
      if (this.height != e) {
        this.height = e;
        this.dom.style.height = e + "px";
      }
      if (this.above != i) {
        this.dom.style.marginTop = (this.above = i) ? i + "px" : "";
      }
      if (!function (t, e) {
        if (t.length != e.length) {
          return false;
        }
        for (let i = 0; i < t.length; i++) {
          if (!t[i].compare(e[i])) {
            return false;
          }
        }
        return true;
      }(this.markers, n)) {
        this.setMarkers(t, n);
      }
    }
    setMarkers(t, e) {
      let i = "cm-gutterElement";
      let n = this.dom.firstChild;
      for (let s = 0, r = 0;;) {
        let o = r;
        let l = s < e.length ? e[s++] : null;
        let a = false;
        if (l) {
          let t = l.elementClass;
          if (t) {
            i += " " + t;
          }
          for (let t = r; t < this.markers.length; t++) {
            if (this.markers[t].compare(l)) {
              o = t;
              a = true;
              break;
            }
          }
        } else {
          o = this.markers.length;
        }
        while (r < o) {
          let t = this.markers[r++];
          if (t.toDOM) {
            t.destroy(n);
            let e = n.nextSibling;
            n.remove();
            n = e;
          }
        }
        if (!l) {
          break;
        }
        if (l.toDOM) {
          if (a) {
            n = n.nextSibling;
          } else {
            this.dom.insertBefore(l.toDOM(t), n);
          }
        }
        if (a) {
          r++;
        }
      }
      this.dom.className = i;
      this.markers = e;
    }
    destroy() {
      this.setMarkers(null, []);
    }
  }
  let n1 = codemirrorStateCore.Facet.define();
  let n2 = codemirrorStateCore.Facet.define();
  let n6 = codemirrorStateCore.Facet.define({
    combine: t => codemirrorStateCore.mergeConfig(t, {
      formatNumber: String,
      domEventHandlers: {}
    }, {
      domEventHandlers(t, e) {
        let i = Object.assign({}, t);
        for (let t in e) {
          let n = i[t];
          let s = e[t];
          i[t] = n ? (t, e, i) => n(t, e, i) || s(t, e, i) : s;
        }
        return i;
      }
    })
  });
  class n3 extends nW {
    constructor(t) {
      super();
      this.number = t;
    }
    eq(t) {
      return this.number == t.number;
    }
    toDOM() {
      return document.createTextNode(this.number);
    }
  }
  function n5(t, e) {
    return t.state.facet(n6).formatNumber(e, t.state);
  }
  let n8 = nJ.compute([n6], t => ({
    class: "cm-lineNumbers",
    renderEmptyElements: false,
    markers: t => t.state.facet(n1),
    lineMarker: (t, e, i) => i.some(t => t.toDOM) ? null : new n3(n5(t, t.state.doc.lineAt(e.from).number)),
    widgetMarker: (t, e, i) => {
      for (let n of t.state.facet(n2)) {
        let s = n(t, e, i);
        if (s) {
          return s;
        }
      }
      return null;
    },
    lineMarkerChange: t => t.startState.facet(n6) != t.state.facet(n6),
    initialSpacer: t => new n3(n5(t, n9(t.state.doc.lines))),
    updateSpacer(t, e) {
      let i = n5(e.view, n9(e.view.state.doc.lines));
      if (i == t.number) {
        return t;
      } else {
        return new n3(i);
      }
    },
    domEventHandlers: t.facet(n6).domEventHandlers
  }));
  function n4(t = {}) {
    return [n6.of(t), nU(), n8];
  }
  function n9(t) {
    let e = 9;
    while (e < t) {
      e = e * 10 + 9;
    }
    return e;
  }
  let n7 = new class extends nW {
    constructor() {
      super(...arguments);
      this.elementClass = "cm-activeLineGutter";
    }
  }();
  let st = nz.compute(["selection"], t => {
    let e = [];
    let i = -1;
    for (let n of t.selection.ranges) {
      let s = t.doc.lineAt(n.head).from;
      if (s > i) {
        i = s;
        e.push(n7.range(s));
      }
    }
    return codemirrorStateCore.RangeSet.of(e);
  });
  function se() {
    return st;
  }
  require.d(exports, {
    Decoration: function () {
      return tc;
    },
    columnSelection: function () {
      return np;
    },
    RangeValue: function () {
      return nW;
    },
    cursorConfig: function () {
      return iQ;
    },
    Plugin: function () {
      return t6;
    },
    EditorView: function () {
      return iT;
    },
    gutterConfig: function () {
      return n_;
    },
    keymapFacet: function () {
      return iI;
    },
    keyBindingHandler: function () {
      return iF;
    },
    gutterMarkers: function () {
      return nz;
    },
    dropCursor: function () {
      return i8;
    },
    activeLineGutter: function () {
      return nN;
    },
    specialChars: function () {
      return ns;
    },
    tooltipLookup: function () {
      return nL;
    },
    placeholder: function () {
      return nf;
    },
    crosshairCursor: function () {
      return nR;
    },
    lineNumbers: function () {
      return n4;
    },
    activeLine: function () {
      return se;
    },
    errorHandler: function () {
      return na;
    },
    DecorationType: function () {
      return tZ;
    },
    decorationClass: function () {
      return tf;
    },
    panelsFacet: function () {
      return nH;
    },
    tooltipsFacet: function () {
      return nT;
    },
    textDirection: function () {
      return nv;
    },
    directionConstants: function () {
      return tC;
    }
  });
}