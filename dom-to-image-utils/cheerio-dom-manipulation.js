// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$T' to 'cheerio'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58010.e07ec0ec.js
         * chunkId: 58010
         * moduleId: 491734
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var a;
  var o;
  var s;
  var l;
  var c;
  var u;
  var h;
  var p;
  var d;
  var m;
  var f;
  var g;
  var v;
  var b;
  var y;
  var x;
  var w = {};
  var k = {};
  var S = {};
  var A = {};
  var T = {};
  var C = {};
  var M = {};
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var markmapResourceLoader = require("markmap-resource-loader") /*id: 504656*/;
  var E = {
    xml: false,
    decodeEntities: true
  };
  let I = {
    _useHtmlParser2: true,
    xmlMode: true
  };
  function _(e) {
    if (e == null ? undefined : e.xml) {
      if (typeof e.xml == "boolean") {
        return I;
      } else {
        return {
          ...I,
          ...e.xml
        };
      }
    } else {
      return e ?? undefined;
    }
  }
  var astNodeDefinitions = require("ast-node-definitions") /*id: 718070*/;
  var astToHtmlSerializer = require("ast-to-html-serializer") /*id: 717279*/;
  var astNodeTypeConstants = require("ast-node-type-constants") /*id: 324565*/;
  function O(e, t) {
    return astToHtmlSerializer.serializeAst(e, t);
  }
  function F(e, t) {
    if (astNodeDefinitions.hasChildren(e)) {
      return e.children.map(e => O(e, t)).join("");
    } else {
      return "";
    }
  }
  function L(e) {
    if (Array.isArray(e)) {
      return e.map(L).join("");
    } else if (astNodeDefinitions.hasChildren(e) && !astNodeDefinitions.isComment(e)) {
      return L(e.children);
    } else if (astNodeDefinitions.isText(e)) {
      return e.data;
    } else {
      return "";
    }
  }
  function $(e) {
    if (Array.isArray(e)) {
      return e.map($).join("");
    } else if (astNodeDefinitions.hasChildren(e) && (e.type === astNodeTypeConstants.nodeTypes.Tag || astNodeDefinitions.isCdata(e))) {
      return $(e.children);
    } else if (astNodeDefinitions.isText(e)) {
      return e.data;
    } else {
      return "";
    }
  }
  function D(e) {
    if (astNodeDefinitions.hasChildren(e)) {
      return e.children;
    } else {
      return [];
    }
  }
  function P(e) {
    return e.parent || null;
  }
  function H(e) {
    let t = P(e);
    if (t != null) {
      return D(t);
    }
    let r = [e];
    let {
      prev: n,
      next: i
    } = e;
    while (n != null) {
      r.unshift(n);
      ({
        prev: n
      } = n);
    }
    while (i != null) {
      r.push(i);
      ({
        next: i
      } = i);
    }
    return r;
  }
  function j(e, t) {
    return e.attribs?.[t];
  }
  function V(e, t) {
    return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null;
  }
  function W(e) {
    return e.name;
  }
  function U(e) {
    let {
      next: t
    } = e;
    while (t !== null && !astNodeDefinitions.isElement(t)) {
      ({
        next: t
      } = t);
    }
    return t;
  }
  function X(e) {
    let {
      prev: t
    } = e;
    while (t !== null && !astNodeDefinitions.isElement(t)) {
      ({
        prev: t
      } = t);
    }
    return t;
  }
  function Z(e) {
    if (e.prev) {
      e.prev.next = e.next;
    }
    if (e.next) {
      e.next.prev = e.prev;
    }
    if (e.parent) {
      let t = e.parent.children;
      let r = t.lastIndexOf(e);
      if (r >= 0) {
        t.splice(r, 1);
      }
    }
    e.next = null;
    e.prev = null;
    e.parent = null;
  }
  function G(e, t) {
    let r = t.prev = e.prev;
    if (r) {
      r.next = t;
    }
    let n = t.next = e.next;
    if (n) {
      n.prev = t;
    }
    let i = t.parent = e.parent;
    if (i) {
      let r = i.children;
      r[r.lastIndexOf(e)] = t;
      e.parent = null;
    }
  }
  function Y(e, t) {
    Z(t);
    t.next = null;
    t.parent = e;
    if (e.children.push(t) > 1) {
      let r = e.children[e.children.length - 2];
      r.next = t;
      t.prev = r;
    } else {
      t.prev = null;
    }
  }
  function J(e, t) {
    Z(t);
    let {
      parent: r
    } = e;
    let n = e.next;
    t.next = n;
    t.prev = e;
    e.next = t;
    t.parent = r;
    if (n) {
      n.prev = t;
      if (r) {
        let e = r.children;
        e.splice(e.lastIndexOf(n), 0, t);
      }
    } else if (r) {
      r.children.push(t);
    }
  }
  function K(e, t) {
    Z(t);
    t.parent = e;
    t.prev = null;
    if (e.children.unshift(t) !== 1) {
      let r = e.children[1];
      r.prev = t;
      t.next = r;
    } else {
      t.next = null;
    }
  }
  function Q(e, t) {
    Z(t);
    let {
      parent: r
    } = e;
    if (r) {
      let n = r.children;
      n.splice(n.indexOf(e), 0, t);
    }
    if (e.prev) {
      e.prev.next = t;
    }
    t.parent = r;
    t.prev = e.prev;
    t.next = e;
    e.prev = t;
  }
  function ee(e, t, r = true, n = Infinity) {
    return et(e, Array.isArray(t) ? t : [t], r, n);
  }
  function et(e, t, r, n) {
    let i = [];
    let a = [Array.isArray(t) ? t : [t]];
    let o = [0];
    while (true) {
      if (o[0] >= a[0].length) {
        if (o.length === 1) {
          return i;
        }
        a.shift();
        o.shift();
        continue;
      }
      let t = a[0][o[0]++];
      if (e(t) && (i.push(t), --n <= 0)) {
        return i;
      }
      if (r && astNodeDefinitions.hasChildren(t) && t.children.length > 0) {
        o.unshift(0);
        a.unshift(t.children);
      }
    }
  }
  function er(e, t) {
    return t.find(e);
  }
  function en(e, t, r = true) {
    let n = Array.isArray(t) ? t : [t];
    for (let t = 0; t < n.length; t++) {
      let i = n[t];
      if (astNodeDefinitions.isElement(i) && e(i)) {
        return i;
      }
      if (r && astNodeDefinitions.hasChildren(i) && i.children.length > 0) {
        let t = en(e, i.children, true);
        if (t) {
          return t;
        }
      }
    }
    return null;
  }
  function ei(e, t) {
    let r = [];
    let n = [Array.isArray(t) ? t : [t]];
    let i = [0];
    while (true) {
      if (i[0] >= n[0].length) {
        if (n.length === 1) {
          return r;
        }
        n.shift();
        i.shift();
        continue;
      }
      let t = n[0][i[0]++];
      if (astNodeDefinitions.isElement(t) && e(t)) {
        r.push(t);
      }
      if (astNodeDefinitions.hasChildren(t) && t.children.length > 0) {
        i.unshift(0);
        n.unshift(t.children);
      }
    }
  }
  let ea = {
    tag_name: e => typeof e == "function" ? t => astNodeDefinitions.isElement(t) && e(t.name) : e === "*" ? astNodeDefinitions.isElement : t => astNodeDefinitions.isElement(t) && t.name === e,
    tag_type: e => typeof e == "function" ? t => e(t.type) : t => t.type === e,
    tag_contains: e => typeof e == "function" ? t => astNodeDefinitions.isText(t) && e(t.data) : t => astNodeDefinitions.isText(t) && t.data === e
  };
  function eo(e, t) {
    if (typeof t == "function") {
      return r => astNodeDefinitions.isElement(r) && t(r.attribs[e]);
    } else {
      return r => astNodeDefinitions.isElement(r) && r.attribs[e] === t;
    }
  }
  function es(e, t) {
    return r => e(r) || t(r);
  }
  function el(e) {
    let t = Object.keys(e).map(t => {
      let r = e[t];
      if (Object.prototype.hasOwnProperty.call(ea, t)) {
        return ea[t](r);
      } else {
        return eo(t, r);
      }
    });
    if (t.length === 0) {
      return null;
    } else {
      return t.reduce(es);
    }
  }
  function ec(e, t) {
    let r = el(e);
    return !r || r(t);
  }
  function eu(e, t, r, n = Infinity) {
    let i = el(e);
    if (i) {
      return ee(i, t, r, n);
    } else {
      return [];
    }
  }
  function eh(e, t, r = true) {
    if (!Array.isArray(t)) {
      t = [t];
    }
    return en(eo("id", e), t, r);
  }
  function ep(e, t, r = true, n = Infinity) {
    return ee(ea.tag_name(e), t, r, n);
  }
  function ed(e, t, r = true, n = Infinity) {
    return ee(eo("class", e), t, r, n);
  }
  function em(e, t, r = true, n = Infinity) {
    return ee(ea.tag_type(e), t, r, n);
  }
  function ef(e) {
    let t = e.length;
    while (--t >= 0) {
      let r = e[t];
      if (t > 0 && e.lastIndexOf(r, t - 1) >= 0) {
        e.splice(t, 1);
        continue;
      }
      for (let n = r.parent; n; n = n.parent) {
        if (e.includes(n)) {
          e.splice(t, 1);
          break;
        }
      }
    }
    return e;
  }
  function eg(e, t) {
    let r = [];
    let n = [];
    if (e === t) {
      return 0;
    }
    let i = astNodeDefinitions.hasChildren(e) ? e : e.parent;
    while (i) {
      r.unshift(i);
      i = i.parent;
    }
    for (i = astNodeDefinitions.hasChildren(t) ? t : t.parent; i;) {
      n.unshift(i);
      i = i.parent;
    }
    let a = Math.min(r.length, n.length);
    let o = 0;
    while (o < a && r[o] === n[o]) {
      o++;
    }
    if (o === 0) {
      return d.DISCONNECTED;
    }
    let s = r[o - 1];
    let l = s.children;
    let c = r[o];
    let u = n[o];
    if (l.indexOf(c) > l.indexOf(u)) {
      if (s === t) {
        return d.FOLLOWING | d.CONTAINED_BY;
      } else {
        return d.FOLLOWING;
      }
    } else if (s === e) {
      return d.PRECEDING | d.CONTAINS;
    } else {
      return d.PRECEDING;
    }
  }
  function ev(e) {
    (e = e.filter((e, t, r) => !r.includes(e, t + 1))).sort((e, t) => {
      let r = eg(e, t);
      if (r & d.PRECEDING) {
        return -1;
      } else if (r & d.FOLLOWING) {
        return 1;
      } else {
        return 0;
      }
    });
    return e;
  }
  function eb(e) {
    let t = ek(eT, e);
    if (t) {
      if (t.name === "feed") {
        return function (e) {
          var t;
          let r = e.children;
          let n = {
            type: "atom",
            items: ep("entry", r).map(e => {
              var t;
              let {
                children: r
              } = e;
              let n = {
                media: ew(r)
              };
              eA(n, "id", "id", r);
              eA(n, "title", "title", r);
              let i = (t = ek("link", r)) === null || t === undefined ? undefined : t.attribs.href;
              if (i) {
                n.link = i;
              }
              let a = eS("summary", r) || eS("content", r);
              if (a) {
                n.description = a;
              }
              let o = eS("updated", r);
              if (o) {
                n.pubDate = new Date(o);
              }
              return n;
            })
          };
          eA(n, "id", "id", r);
          eA(n, "title", "title", r);
          let i = (t = ek("link", r)) === null || t === undefined ? undefined : t.attribs.href;
          if (i) {
            n.link = i;
          }
          eA(n, "description", "subtitle", r);
          let a = eS("updated", r);
          if (a) {
            n.updated = new Date(a);
          }
          eA(n, "author", "email", r, true);
          return n;
        }(t);
      } else {
        return function (e) {
          let n = ek("channel", e.children)?.children ?? [];
          let i = {
            type: e.name.substr(0, 3),
            id: "",
            items: ep("item", e.children).map(e => {
              let {
                children: t
              } = e;
              let r = {
                media: ew(t)
              };
              eA(r, "id", "guid", t);
              eA(r, "title", "title", t);
              eA(r, "link", "link", t);
              eA(r, "description", "description", t);
              let n = eS("pubDate", t) || eS("dc:date", t);
              if (n) {
                r.pubDate = new Date(n);
              }
              return r;
            })
          };
          eA(i, "title", "title", n);
          eA(i, "link", "link", n);
          eA(i, "description", "description", n);
          let a = eS("lastBuildDate", n);
          if (a) {
            i.updated = new Date(a);
          }
          eA(i, "author", "managingEditor", n, true);
          return i;
        }(t);
      }
    } else {
      return null;
    }
  }
  (n = d ||= {})[n.DISCONNECTED = 1] = "DISCONNECTED";
  n[n.PRECEDING = 2] = "PRECEDING";
  n[n.FOLLOWING = 4] = "FOLLOWING";
  n[n.CONTAINS = 8] = "CONTAINS";
  n[n.CONTAINED_BY = 16] = "CONTAINED_BY";
  let ey = ["url", "type", "lang"];
  let ex = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
  function ew(e) {
    return ep("media:content", e).map(e => {
      let {
        attribs: t
      } = e;
      let r = {
        medium: t.medium,
        isDefault: !!t.isDefault
      };
      for (let e of ey) {
        if (t[e]) {
          r[e] = t[e];
        }
      }
      for (let e of ex) {
        if (t[e]) {
          r[e] = parseInt(t[e], 10);
        }
      }
      if (t.expression) {
        r.expression = t.expression;
      }
      return r;
    });
  }
  function ek(e, t) {
    return ep(e, t, true, 1)[0];
  }
  function eS(e, t, r = false) {
    return L(ep(e, t, r, 1)).trim();
  }
  function eA(e, t, r, n, i = false) {
    let a = eS(r, n, i);
    if (a) {
      e[t] = a;
    }
  }
  function eT(e) {
    return e === "rss" || e === "feed" || e === "rdf:RDF";
  }
  function eC(e, t, r) {
    if (e) {
      return e(t ?? e._root.children, null, undefined, r).toString();
    } else {
      return "";
    }
  }
  function eM(e, t) {
    return eC(this, typeof e != "object" || e == null || "length" in e || "type" in e ? e : void (t = e), {
      ...E,
      ...this?._options,
      ..._(t ?? {})
    });
  }
  function eN(e) {
    return eC(this, e, {
      ...this._options,
      xmlMode: true
    });
  }
  function ez(e) {
    let t = e || (this ? this.root() : []);
    let r = "";
    for (let e = 0; e < t.length; e++) {
      r += L(t[e]);
    }
    return r;
  }
  function eE(e, t, r = typeof t == "boolean" && t) {
    if (!e || typeof e != "string") {
      return null;
    }
    if (typeof t == "boolean") {
      r = t;
    }
    let n = this.load(e, E, false);
    if (!r) {
      n("script").remove();
    }
    return n.root()[0].children.slice();
  }
  function eI() {
    return this(this._root);
  }
  function e_(e, t) {
    if (t === e) {
      return false;
    }
    let r = t;
    while (r && r !== r.parent) {
      if ((r = r.parent) === e) {
        return true;
      }
    }
    return false;
  }
  function eR(e, t) {
    if (!eB(e) || !eB(t)) {
      return;
    }
    let r = e.length;
    let n = +t.length;
    for (let i = 0; i < n; i++) {
      e[r++] = t[i];
    }
    e.length = r;
    return e;
  }
  function eB(e) {
    if (Array.isArray(e)) {
      return true;
    }
    if (typeof e != "object" || !Object.prototype.hasOwnProperty.call(e, "length") || typeof e.length != "number" || e.length < 0) {
      return false;
    }
    for (let t = 0; t < e.length; t++) {
      if (!(t in e)) {
        return false;
      }
    }
    return true;
  }
  function eq(e) {
    return e.cheerio != null;
  }
  function eO(e, t) {
    let r = e.length;
    for (let n = 0; n < r; n++) {
      t(e[n], n);
    }
    return e;
  }
  function eF(e) {
    let t = "length" in e ? Array.prototype.map.call(e, e => astNodeDefinitions.cloneNode(e, true)) : [astNodeDefinitions.cloneNode(e, true)];
    let r = new astNodeDefinitions.RootNode(t);
    t.forEach(e => {
      e.parent = r;
    });
    return t;
  }
  function eL(e) {
    let t = e.indexOf("<");
    if (t < 0 || t > e.length - 3) {
      return false;
    }
    let r = e.charCodeAt(t + 1);
    return (r >= m.LowerA && r <= m.LowerZ || r >= m.UpperA && r <= m.UpperZ || r === m.Exclamation) && e.includes(">", t + 2);
  }
  (i = m ||= {})[i.LowerA = 97] = "LowerA";
  i[i.LowerZ = 122] = "LowerZ";
  i[i.UpperA = 65] = "UpperA";
  i[i.UpperZ = 90] = "UpperZ";
  i[i.Exclamation = 33] = "Exclamation";
  let e$ = Object.prototype.hasOwnProperty;
  let eD = /\s+/;
  let eP = "data-";
  let eH = {
    null: null,
    true: true,
    false: false
  };
  let ej = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
  let eV = /^{[^]*}$|^\[[^]*]$/;
  function eW(e, t, r) {
    var n;
    if (e && astNodeDefinitions.isElement(e)) {
      if ((n = e.attribs) === null || n === undefined) {
        e.attribs = {};
      }
      if (!t) {
        return e.attribs;
      }
      if (e$.call(e.attribs, t)) {
        if (!r && ej.test(t)) {
          return t;
        } else {
          return e.attribs[t];
        }
      }
      if (e.name === "option" && t === "value") {
        return ez(e.children);
      }
      if (e.name === "input" && (e.attribs.type === "radio" || e.attribs.type === "checkbox") && t === "value") {
        return "on";
      }
    }
  }
  function eU(e, t, r) {
    if (r === null) {
      e1(e, t);
    } else {
      e.attribs[t] = `${r}`;
    }
  }
  function eX(e, t) {
    if (typeof e == "object" || t !== undefined) {
      if (typeof t == "function") {
        if (typeof e != "string") {
          throw Error("Bad combination of arguments.");
        }
        return eO(this, (r, n) => {
          if (astNodeDefinitions.isElement(r)) {
            eU(r, e, t.call(r, n, r.attribs[e]));
          }
        });
      }
      return eO(this, r => {
        if (astNodeDefinitions.isElement(r)) {
          if (typeof e == "object") {
            Object.keys(e).forEach(t => {
              let n = e[t];
              eU(r, t, n);
            });
          } else {
            eU(r, e, t);
          }
        }
      });
    }
    if (arguments.length > 1) {
      return this;
    } else {
      return eW(this[0], e, this.options.xmlMode);
    }
  }
  function eZ(e, t, r) {
    if (t in e) {
      return e[t];
    } else if (!r && ej.test(t)) {
      return eW(e, t, false) !== undefined;
    } else {
      return eW(e, t, r);
    }
  }
  function eG(e, t, r, n) {
    if (t in e) {
      e[t] = r;
    } else {
      eU(e, t, !n && ej.test(t) ? r ? "" : null : `${r}`);
    }
  }
  function eY(e, t) {
    if (typeof e == "string" && t === undefined) {
      let t = this[0];
      if (!t || !astNodeDefinitions.isElement(t)) {
        return;
      }
      switch (e) {
        case "style":
          {
            let e = this.css();
            let t = Object.keys(e);
            t.forEach((t, r) => {
              e[r] = t;
            });
            e.length = t.length;
            return e;
          }
        case "tagName":
        case "nodeName":
          return t.name.toUpperCase();
        case "href":
        case "src":
          {
            let n = t.attribs?.[e];
            if (typeof URL != "undefined" && (e === "href" && (t.tagName === "a" || t.name === "link") || e === "src" && (t.tagName === "img" || t.tagName === "iframe" || t.tagName === "audio" || t.tagName === "video" || t.tagName === "source")) && n !== undefined && this.options.baseURI) {
              return new URL(n, this.options.baseURI).href;
            }
            return n;
          }
        case "innerText":
          return $(t);
        case "textContent":
          return L(t);
        case "outerHTML":
          return this.clone().wrap("<container />").parent().html();
        case "innerHTML":
          return this.html();
        default:
          return eZ(t, e, this.options.xmlMode);
      }
    }
    if (typeof e == "object" || t !== undefined) {
      if (typeof t == "function") {
        if (typeof e == "object") {
          throw Error("Bad combination of arguments.");
        }
        return eO(this, (r, n) => {
          if (astNodeDefinitions.isElement(r)) {
            eG(r, e, t.call(r, n, eZ(r, e, this.options.xmlMode)), this.options.xmlMode);
          }
        });
      }
      return eO(this, r => {
        if (astNodeDefinitions.isElement(r)) {
          if (typeof e == "object") {
            Object.keys(e).forEach(t => {
              let n = e[t];
              eG(r, t, n, this.options.xmlMode);
            });
          } else {
            eG(r, e, t, this.options.xmlMode);
          }
        }
      });
    }
  }
  function eJ(e, t, r) {
    var n;
    if ((n = e.data) === null || n === undefined) {
      e.data = {};
    }
    if (typeof t == "object") {
      Object.assign(e.data, t);
    } else if (typeof t == "string" && r !== undefined) {
      e.data[t] = r;
    }
  }
  function eK(e, t) {
    let r;
    let n;
    let i;
    if (t == null) {
      n = (r = Object.keys(e.attribs).filter(e => e.startsWith(eP))).map(e => e.slice(eP.length).replace(/[_.-](\w|$)/g, (e, t) => t.toUpperCase()));
    } else {
      r = [eP + t.replace(/[A-Z]/g, "-$&").toLowerCase()];
      n = [t];
    }
    for (let t = 0; t < r.length; ++t) {
      let a = r[t];
      let o = n[t];
      if (e$.call(e.attribs, a) && !e$.call(e.data, o)) {
        i = e.attribs[a];
        if (e$.call(eH, i)) {
          i = eH[i];
        } else if (i === String(Number(i))) {
          i = Number(i);
        } else if (eV.test(i)) {
          try {
            i = JSON.parse(i);
          } catch (e) {}
        }
        e.data[o] = i;
      }
    }
    if (t == null) {
      return e.data;
    } else {
      return i;
    }
  }
  function eQ(e, t) {
    var r;
    let n = this[0];
    if (n && astNodeDefinitions.isElement(n)) {
      if ((r = n.data) === null || r === undefined) {
        n.data = {};
      }
      if (e) {
        if (typeof e == "object" || t !== undefined) {
          eO(this, r => {
            if (astNodeDefinitions.isElement(r)) {
              if (typeof e == "object") {
                eJ(r, e);
              } else {
                eJ(r, e, t);
              }
            }
          });
          return this;
        } else if (e$.call(n.data, e)) {
          return n.data[e];
        } else {
          return eK(n, e);
        }
      } else {
        return eK(n);
      }
    } else {
      return undefined;
    }
  }
  function e0(e) {
    let t = arguments.length == 0;
    let r = this[0];
    if (!r || !astNodeDefinitions.isElement(r)) {
      if (t) {
        return undefined;
      } else {
        return this;
      }
    }
    switch (r.name) {
      case "textarea":
        return this.text(e);
      case "select":
        {
          let r = this.find("option:selected");
          if (!t) {
            if (this.attr("multiple") == null && typeof e == "object") {
              return this;
            }
            this.find("option").removeAttr("selected");
            let t = typeof e != "object" ? [e] : e;
            for (let e = 0; e < t.length; e++) {
              this.find(`option[value="${t[e]}"]`).attr("selected", "");
            }
            return this;
          }
          if (this.attr("multiple")) {
            return r.toArray().map(e => ez(e.children));
          } else {
            return r.attr("value");
          }
        }
      case "input":
      case "option":
        if (t) {
          return this.attr("value");
        } else {
          return this.attr("value", e);
        }
    }
  }
  function e1(e, t) {
    if (e.attribs && e$.call(e.attribs, t)) {
      delete e.attribs[t];
    }
  }
  function e4(e) {
    if (e) {
      return e.trim().split(eD);
    } else {
      return [];
    }
  }
  function e5(e) {
    let t = e4(e);
    for (let e = 0; e < t.length; e++) {
      eO(this, r => {
        if (astNodeDefinitions.isElement(r)) {
          e1(r, t[e]);
        }
      });
    }
    return this;
  }
  function e3(e) {
    return this.toArray().some(t => {
      let r = astNodeDefinitions.isElement(t) && t.attribs.class;
      let n = -1;
      if (r && e.length) {
        while ((n = r.indexOf(e, n + 1)) > -1) {
          let t = n + e.length;
          if ((n === 0 || eD.test(r[n - 1])) && (t === r.length || eD.test(r[t]))) {
            return true;
          }
        }
      }
      return false;
    });
  }
  function e6(e) {
    if (typeof e == "function") {
      return eO(this, (t, r) => {
        if (astNodeDefinitions.isElement(t)) {
          let n = t.attribs.class || "";
          e6.call([t], e.call(t, r, n));
        }
      });
    }
    if (!e || typeof e != "string") {
      return this;
    }
    let t = e.split(eD);
    let r = this.length;
    for (let e = 0; e < r; e++) {
      let r = this[e];
      if (!astNodeDefinitions.isElement(r)) {
        continue;
      }
      let n = eW(r, "class", false);
      if (n) {
        let e = ` ${n} `;
        for (let r = 0; r < t.length; r++) {
          let n = `${t[r]} `;
          if (!e.includes(` ${n}`)) {
            e += n;
          }
        }
        eU(r, "class", e.trim());
      } else {
        eU(r, "class", t.join(" ").trim());
      }
    }
    return this;
  }
  function e7(e) {
    if (typeof e == "function") {
      return eO(this, (t, r) => {
        if (astNodeDefinitions.isElement(t)) {
          e7.call([t], e.call(t, r, t.attribs.class || ""));
        }
      });
    }
    let t = e4(e);
    let r = t.length;
    let n = arguments.length == 0;
    return eO(this, e => {
      if (astNodeDefinitions.isElement(e)) {
        if (n) {
          e.attribs.class = "";
        } else {
          let n = e4(e.attribs.class);
          let i = false;
          for (let e = 0; e < r; e++) {
            let r = n.indexOf(t[e]);
            if (r >= 0) {
              n.splice(r, 1);
              i = true;
              e--;
            }
          }
          if (i) {
            e.attribs.class = n.join(" ");
          }
        }
      }
    });
  }
  function e2(e, t) {
    if (typeof e == "function") {
      return eO(this, (r, n) => {
        if (astNodeDefinitions.isElement(r)) {
          e2.call([r], e.call(r, n, r.attribs.class || "", t), t);
        }
      });
    }
    if (!e || typeof e != "string") {
      return this;
    }
    let r = e.split(eD);
    let n = r.length;
    let i = typeof t == "boolean" ? t ? 1 : -1 : 0;
    let a = this.length;
    for (let e = 0; e < a; e++) {
      let t = this[e];
      if (!astNodeDefinitions.isElement(t)) {
        continue;
      }
      let a = e4(t.attribs.class);
      for (let e = 0; e < n; e++) {
        let t = a.indexOf(r[e]);
        if (i >= 0 && t < 0) {
          a.push(r[e]);
        } else if (i <= 0 && t >= 0) {
          a.splice(t, 1);
        }
      }
      t.attribs.class = a.join(" ");
    }
    return this;
  }
  (a = f ||= {}).Attribute = "attribute";
  a.Pseudo = "pseudo";
  a.PseudoElement = "pseudo-element";
  a.Tag = "tag";
  a.Universal = "universal";
  a.Adjacent = "adjacent";
  a.Child = "child";
  a.Descendant = "descendant";
  a.Parent = "parent";
  a.Sibling = "sibling";
  a.ColumnCombinator = "column-combinator";
  (o = g ||= {}).Any = "any";
  o.Element = "element";
  o.End = "end";
  o.Equals = "equals";
  o.Exists = "exists";
  o.Hyphen = "hyphen";
  o.Not = "not";
  o.Start = "start";
  let e8 = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
  let e9 = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
  let te = new Map([[126, g.Element], [94, g.Start], [36, g.End], [42, g.Any], [33, g.Not], [124, g.Hyphen]]);
  let tt = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
  function tr(e) {
    switch (e.type) {
      case f.Adjacent:
      case f.Child:
      case f.Descendant:
      case f.Parent:
      case f.Sibling:
      case f.ColumnCombinator:
        return true;
      default:
        return false;
    }
  }
  let tn = new Set(["contains", "icontains"]);
  function ti(e, t, r) {
    let n = parseInt(t, 16) - 65536;
    if (n != n || r) {
      return t;
    } else if (n < 0) {
      return String.fromCharCode(n + 65536);
    } else {
      return String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320);
    }
  }
  function ta(e) {
    return e.replace(e9, ti);
  }
  function to(e) {
    return e === 39 || e === 34;
  }
  function ts(e) {
    return e === 32 || e === 9 || e === 10 || e === 12 || e === 13;
  }
  function tl(e) {
    let t = [];
    let r = function e(t, r, n) {
      let i = [];
      function a(e) {
        let t = r.slice(n + e).match(e8);
        if (!t) {
          throw Error(`Expected name, found ${r.slice(n)}`);
        }
        let [i] = t;
        n += e + i.length;
        return ta(i);
      }
      function o(e) {
        for (n += e; n < r.length && ts(r.charCodeAt(n));) {
          n++;
        }
      }
      function s() {
        let e = n += 1;
        let t = 1;
        for (; t > 0 && n < r.length; n++) {
          if (r.charCodeAt(n) !== 40 || l(n)) {
            if (r.charCodeAt(n) === 41 && !l(n)) {
              t--;
            }
          } else {
            t++;
          }
        }
        if (t) {
          throw Error("Parenthesis not matched");
        }
        return ta(r.slice(e, n - 1));
      }
      function l(e) {
        let t = 0;
        while (r.charCodeAt(--e) === 92) {
          t++;
        }
        return (t & 1) == 1;
      }
      function c() {
        if (i.length > 0 && tr(i[i.length - 1])) {
          throw Error("Did not expect successive traversals.");
        }
      }
      function u(e) {
        if (i.length > 0 && i[i.length - 1].type === f.Descendant) {
          i[i.length - 1].type = e;
          return;
        }
        c();
        i.push({
          type: e
        });
      }
      function h(e, t) {
        i.push({
          type: f.Attribute,
          name: e,
          action: t,
          value: a(1),
          namespace: null,
          ignoreCase: "quirks"
        });
      }
      function p() {
        if (i.length && i[i.length - 1].type === f.Descendant) {
          i.pop();
        }
        if (i.length === 0) {
          throw Error("Empty sub-selector");
        }
        t.push(i);
      }
      o(0);
      if (r.length === n) {
        return n;
      }
      e: while (n < r.length) {
        let t = r.charCodeAt(n);
        switch (t) {
          case 32:
          case 9:
          case 10:
          case 12:
          case 13:
            if (i.length === 0 || i[0].type !== f.Descendant) {
              c();
              i.push({
                type: f.Descendant
              });
            }
            o(1);
            break;
          case 62:
            u(f.Child);
            o(1);
            break;
          case 60:
            u(f.Parent);
            o(1);
            break;
          case 126:
            u(f.Sibling);
            o(1);
            break;
          case 43:
            u(f.Adjacent);
            o(1);
            break;
          case 46:
            h("class", g.Element);
            break;
          case 35:
            h("id", g.Equals);
            break;
          case 91:
            {
              let e;
              o(1);
              let t = null;
              if (r.charCodeAt(n) === 124) {
                e = a(1);
              } else if (r.startsWith("*|", n)) {
                t = "*";
                e = a(2);
              } else {
                e = a(0);
                if (r.charCodeAt(n) === 124 && r.charCodeAt(n + 1) !== 61) {
                  t = e;
                  e = a(1);
                }
              }
              o(0);
              let s = g.Exists;
              let c = te.get(r.charCodeAt(n));
              if (c) {
                s = c;
                if (r.charCodeAt(n + 1) !== 61) {
                  throw Error("Expected `=`");
                }
                o(2);
              } else if (r.charCodeAt(n) === 61) {
                s = g.Equals;
                o(1);
              }
              let u = "";
              let h = null;
              if (s !== "exists") {
                if (to(r.charCodeAt(n))) {
                  let e = r.charCodeAt(n);
                  let t = n + 1;
                  while (t < r.length && (r.charCodeAt(t) !== e || l(t))) {
                    t += 1;
                  }
                  if (r.charCodeAt(t) !== e) {
                    throw Error("Attribute value didn't end");
                  }
                  u = ta(r.slice(n + 1, t));
                  n = t + 1;
                } else {
                  let e = n;
                  while (n < r.length && (!ts(r.charCodeAt(n)) && r.charCodeAt(n) !== 93 || l(n))) {
                    n += 1;
                  }
                  u = ta(r.slice(e, n));
                }
                o(0);
                let e = r.charCodeAt(n) | 32;
                if (e === 115) {
                  h = false;
                  o(1);
                } else if (e === 105) {
                  h = true;
                  o(1);
                }
              }
              if (r.charCodeAt(n) !== 93) {
                throw Error("Attribute selector didn't terminate");
              }
              n += 1;
              let p = {
                type: f.Attribute,
                name: e,
                action: s,
                value: u,
                namespace: t,
                ignoreCase: h
              };
              i.push(p);
              break;
            }
          case 58:
            {
              if (r.charCodeAt(n + 1) === 58) {
                i.push({
                  type: f.PseudoElement,
                  name: a(2).toLowerCase(),
                  data: r.charCodeAt(n) === 40 ? s() : null
                });
                continue;
              }
              let t = a(1).toLowerCase();
              let o = null;
              if (r.charCodeAt(n) === 40) {
                if (tt.has(t)) {
                  if (to(r.charCodeAt(n + 1))) {
                    throw Error(`Pseudo-selector ${t} cannot be quoted`);
                  }
                  n = e(o = [], r, n + 1);
                  if (r.charCodeAt(n) !== 41) {
                    throw Error(`Missing closing parenthesis in :${t} (${r})`);
                  }
                  n += 1;
                } else {
                  o = s();
                  if (tn.has(t)) {
                    let e = o.charCodeAt(0);
                    if (e === o.charCodeAt(o.length - 1) && to(e)) {
                      o = o.slice(1, -1);
                    }
                  }
                  o = ta(o);
                }
              }
              i.push({
                type: f.Pseudo,
                name: t,
                data: o
              });
              break;
            }
          case 44:
            p();
            i = [];
            o(1);
            break;
          default:
            {
              let e;
              if (r.startsWith("/*", n)) {
                let e = r.indexOf("*/", n + 2);
                if (e < 0) {
                  throw Error("Comment was not terminated");
                }
                n = e + 2;
                if (i.length === 0) {
                  o(0);
                }
                break;
              }
              let s = null;
              if (t === 42) {
                n += 1;
                e = "*";
              } else if (t === 124) {
                e = "";
                if (r.charCodeAt(n + 1) === 124) {
                  u(f.ColumnCombinator);
                  o(2);
                  break;
                }
              } else if (e8.test(r.slice(n))) {
                e = a(0);
              } else {
                break e;
              }
              if (r.charCodeAt(n) === 124 && r.charCodeAt(n + 1) !== 124) {
                s = e;
                if (r.charCodeAt(n + 1) === 42) {
                  e = "*";
                  n += 2;
                } else {
                  e = a(1);
                }
              }
              i.push(e === "*" ? {
                type: f.Universal,
                namespace: s
              } : {
                type: f.Tag,
                name: e,
                namespace: s
              });
            }
        }
      }
      p();
      return n;
    }(t, `${e}`, 0);
    if (r < e.length) {
      throw Error(`Unmatched selector: ${e.slice(r)}`);
    }
    return t;
  }
  var trueFalseUtils = require("true-false-utils") /*id: 162579*/;
  let tu = new Map([[f.Universal, 50], [f.Tag, 30], [f.Attribute, 1], [f.Pseudo, 0]]);
  function th(e) {
    return !tu.has(e.type);
  }
  let tp = new Map([[g.Exists, 10], [g.Equals, 8], [g.Not, 7], [g.Start, 6], [g.End, 6], [g.Any, 5]]);
  function td(e) {
    let t = e.map(tm);
    for (let r = 1; r < e.length; r++) {
      let n = t[r];
      if (!(n < 0)) {
        for (let i = r - 1; i >= 0 && n < t[i]; i--) {
          let r = e[i + 1];
          e[i + 1] = e[i];
          e[i] = r;
          t[i + 1] = t[i];
          t[i] = n;
        }
      }
    }
  }
  function tm(e) {
    let n = tu.get(e.type) ?? -1;
    if (e.type === f.Attribute) {
      n = tp.get(e.action) ?? 4;
      if (e.action === g.Equals && e.name === "id") {
        n = 9;
      }
      if (e.ignoreCase) {
        n >>= 1;
      }
    } else if (e.type === f.Pseudo) {
      if (e.data) {
        if (e.name === "has" || e.name === "contains") {
          n = 0;
        } else if (Array.isArray(e.data)) {
          if ((n = Math.min(...e.data.map(e => Math.min(...e.map(tm))))) < 0) {
            n = 0;
          }
        } else {
          n = 2;
        }
      } else {
        n = 3;
      }
    }
    return n;
  }
  let tf = /[-[\]{}()*+?.,\\^$|#\s]/g;
  function tg(e) {
    return e.replace(tf, "\\$&");
  }
  let tv = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
  function tb(e, t) {
    if (typeof e.ignoreCase == "boolean") {
      return e.ignoreCase;
    } else if (e.ignoreCase === "quirks") {
      return !!t.quirksMode;
    } else {
      return !t.xmlMode && tv.has(e.name);
    }
  }
  let ty = {
    equals(e, t, r) {
      let {
        adapter: n
      } = r;
      let {
        name: i
      } = t;
      let {
        value: a
      } = t;
      if (tb(t, r)) {
        a = a.toLowerCase();
        return t => {
          let r = n.getAttributeValue(t, i);
          return r != null && r.length === a.length && r.toLowerCase() === a && e(t);
        };
      } else {
        return t => n.getAttributeValue(t, i) === a && e(t);
      }
    },
    hyphen(e, t, r) {
      let {
        adapter: n
      } = r;
      let {
        name: i
      } = t;
      let {
        value: a
      } = t;
      let o = a.length;
      if (tb(t, r)) {
        a = a.toLowerCase();
        return function (t) {
          let r = n.getAttributeValue(t, i);
          return r != null && (r.length === o || r.charAt(o) === "-") && r.substr(0, o).toLowerCase() === a && e(t);
        };
      } else {
        return function (t) {
          let r = n.getAttributeValue(t, i);
          return r != null && (r.length === o || r.charAt(o) === "-") && r.substr(0, o) === a && e(t);
        };
      }
    },
    element(e, t, r) {
      let {
        adapter: n
      } = r;
      let {
        name: i,
        value: a
      } = t;
      if (/\s/.test(a)) {
        return trueFalseUtils.falseFunc;
      }
      let o = RegExp(`(?:^|\\s)${tg(a)}(?:$|\\s)`, tb(t, r) ? "i" : "");
      return function (t) {
        let r = n.getAttributeValue(t, i);
        return r != null && r.length >= a.length && o.test(r) && e(t);
      };
    },
    exists: (e, {
      name: t
    }, {
      adapter: r
    }) => n => r.hasAttrib(n, t) && e(n),
    start(e, t, r) {
      let {
        adapter: n
      } = r;
      let {
        name: i
      } = t;
      let {
        value: a
      } = t;
      let o = a.length;
      if (o === 0) {
        return trueFalseUtils.falseFunc;
      } else if (tb(t, r)) {
        a = a.toLowerCase();
        return t => {
          let r = n.getAttributeValue(t, i);
          return r != null && r.length >= o && r.substr(0, o).toLowerCase() === a && e(t);
        };
      } else {
        return t => {
          var r;
          return !!((r = n.getAttributeValue(t, i)) === null || r === undefined ? undefined : r.startsWith(a)) && e(t);
        };
      }
    },
    end(e, t, r) {
      let {
        adapter: n
      } = r;
      let {
        name: i
      } = t;
      let {
        value: a
      } = t;
      let o = -a.length;
      if (o === 0) {
        return trueFalseUtils.falseFunc;
      } else if (tb(t, r)) {
        a = a.toLowerCase();
        return t => {
          var r;
          return ((r = n.getAttributeValue(t, i)) === null || r === undefined ? undefined : r.substr(o).toLowerCase()) === a && e(t);
        };
      } else {
        return t => {
          var r;
          return !!((r = n.getAttributeValue(t, i)) === null || r === undefined ? undefined : r.endsWith(a)) && e(t);
        };
      }
    },
    any(e, t, r) {
      let {
        adapter: n
      } = r;
      let {
        name: i,
        value: a
      } = t;
      if (a === "") {
        return trueFalseUtils.falseFunc;
      }
      if (tb(t, r)) {
        let t = RegExp(tg(a), "i");
        return function (r) {
          let o = n.getAttributeValue(r, i);
          return o != null && o.length >= a.length && t.test(o) && e(r);
        };
      }
      return t => {
        var r;
        return !!((r = n.getAttributeValue(t, i)) === null || r === undefined ? undefined : r.includes(a)) && e(t);
      };
    },
    not(e, t, r) {
      let {
        adapter: n
      } = r;
      let {
        name: i
      } = t;
      let {
        value: a
      } = t;
      if (a === "") {
        return t => !!n.getAttributeValue(t, i) && e(t);
      } else if (tb(t, r)) {
        a = a.toLowerCase();
        return t => {
          let r = n.getAttributeValue(t, i);
          return (r == null || r.length !== a.length || r.toLowerCase() !== a) && e(t);
        };
      } else {
        return t => n.getAttributeValue(t, i) !== a && e(t);
      }
    }
  };
  let tx = new Set([9, 10, 12, 13, 32]);
  function tw(e) {
    return function (e) {
      let t = e[0];
      let r = e[1] - 1;
      if (r < 0 && t <= 0) {
        return trueFalseUtils.falseFunc;
      }
      if (t === -1) {
        return e => e <= r;
      }
      if (t === 0) {
        return e => e === r;
      }
      if (t === 1) {
        if (r < 0) {
          return trueFalseUtils.trueFunc;
        } else {
          return e => e >= r;
        }
      }
      let n = Math.abs(t);
      let i = (r % n + n) % n;
      if (t > 1) {
        return e => e >= r && e % n === i;
      } else {
        return e => e <= r && e % n === i;
      }
    }(function (e) {
      if ((e = e.trim().toLowerCase()) === "even") {
        return [2, 0];
      }
      if (e === "odd") {
        return [2, 1];
      }
      let t = 0;
      let r = 0;
      let n = a();
      let i = o();
      if (t < e.length && e.charAt(t) === "n") {
        t++;
        r = n * (i ?? 1);
        s();
        if (t < e.length) {
          n = a();
          s();
          i = o();
        } else {
          n = i = 0;
        }
      }
      if (i === null || t < e.length) {
        throw Error(`n-th rule couldn't be parsed ('${e}')`);
      }
      return [r, n * i];
      function a() {
        if (e.charAt(t) === "-") {
          t++;
          return -1;
        } else {
          if (e.charAt(t) === "+") {
            t++;
          }
          return 1;
        }
      }
      function o() {
        let r = t;
        let n = 0;
        while (t < e.length && e.charCodeAt(t) >= 48 && e.charCodeAt(t) <= 57) {
          n = n * 10 + (e.charCodeAt(t) - 48);
          t++;
        }
        if (t === r) {
          return null;
        } else {
          return n;
        }
      }
      function s() {
        while (t < e.length && tx.has(e.charCodeAt(t))) {
          t++;
        }
      }
    }(e));
  }
  function tk(e, t) {
    return r => {
      let n = t.getParent(r);
      return n != null && t.isTag(n) && e(r);
    };
  }
  let tS = {
    contains: (e, t, {
      adapter: r
    }) => function (n) {
      return e(n) && r.getText(n).includes(t);
    },
    icontains(e, t, {
      adapter: r
    }) {
      let n = t.toLowerCase();
      return function (t) {
        return e(t) && r.getText(t).toLowerCase().includes(n);
      };
    },
    "nth-child"(e, t, {
      adapter: r,
      equals: n
    }) {
      let i = tw(t);
      if (i === trueFalseUtils.falseFunc) {
        return trueFalseUtils.falseFunc;
      } else if (i === trueFalseUtils.trueFunc) {
        return tk(e, r);
      } else {
        return function (t) {
          let a = r.getSiblings(t);
          let o = 0;
          for (let e = 0; e < a.length && !n(t, a[e]); e++) {
            if (r.isTag(a[e])) {
              o++;
            }
          }
          return i(o) && e(t);
        };
      }
    },
    "nth-last-child"(e, t, {
      adapter: r,
      equals: n
    }) {
      let i = tw(t);
      if (i === trueFalseUtils.falseFunc) {
        return trueFalseUtils.falseFunc;
      } else if (i === trueFalseUtils.trueFunc) {
        return tk(e, r);
      } else {
        return function (t) {
          let a = r.getSiblings(t);
          let o = 0;
          for (let e = a.length - 1; e >= 0 && !n(t, a[e]); e--) {
            if (r.isTag(a[e])) {
              o++;
            }
          }
          return i(o) && e(t);
        };
      }
    },
    "nth-of-type"(e, t, {
      adapter: r,
      equals: n
    }) {
      let i = tw(t);
      if (i === trueFalseUtils.falseFunc) {
        return trueFalseUtils.falseFunc;
      } else if (i === trueFalseUtils.trueFunc) {
        return tk(e, r);
      } else {
        return function (t) {
          let a = r.getSiblings(t);
          let o = 0;
          for (let e = 0; e < a.length; e++) {
            let i = a[e];
            if (n(t, i)) {
              break;
            }
            if (r.isTag(i) && r.getName(i) === r.getName(t)) {
              o++;
            }
          }
          return i(o) && e(t);
        };
      }
    },
    "nth-last-of-type"(e, t, {
      adapter: r,
      equals: n
    }) {
      let i = tw(t);
      if (i === trueFalseUtils.falseFunc) {
        return trueFalseUtils.falseFunc;
      } else if (i === trueFalseUtils.trueFunc) {
        return tk(e, r);
      } else {
        return function (t) {
          let a = r.getSiblings(t);
          let o = 0;
          for (let e = a.length - 1; e >= 0; e--) {
            let i = a[e];
            if (n(t, i)) {
              break;
            }
            if (r.isTag(i) && r.getName(i) === r.getName(t)) {
              o++;
            }
          }
          return i(o) && e(t);
        };
      }
    },
    root: (e, t, {
      adapter: r
    }) => t => {
      let n = r.getParent(t);
      return (n == null || !r.isTag(n)) && e(t);
    },
    scope(e, t, r, n) {
      let {
        equals: i
      } = r;
      if (n && n.length !== 0) {
        if (n.length === 1) {
          return t => i(n[0], t) && e(t);
        } else {
          return t => n.includes(t) && e(t);
        }
      } else {
        return tS.root(e, t, r);
      }
    },
    hover: tA("isHovered"),
    visited: tA("isVisited"),
    active: tA("isActive")
  };
  function tA(e) {
    return function (t, r, {
      adapter: n
    }) {
      let i = n[e];
      if (typeof i != "function") {
        return trueFalseUtils.falseFunc;
      } else {
        return function (e) {
          return i(e) && t(e);
        };
      }
    };
  }
  let tT = {
    empty: (e, {
      adapter: t
    }) => !t.getChildren(e).some(e => t.isTag(e) || t.getText(e) !== ""),
    "first-child"(e, {
      adapter: t,
      equals: r
    }) {
      if (t.prevElementSibling) {
        return t.prevElementSibling(e) == null;
      }
      let n = t.getSiblings(e).find(e => t.isTag(e));
      return n != null && r(e, n);
    },
    "last-child"(e, {
      adapter: t,
      equals: r
    }) {
      let n = t.getSiblings(e);
      for (let i = n.length - 1; i >= 0; i--) {
        if (r(e, n[i])) {
          return true;
        }
        if (t.isTag(n[i])) {
          break;
        }
      }
      return false;
    },
    "first-of-type"(e, {
      adapter: t,
      equals: r
    }) {
      let n = t.getSiblings(e);
      let i = t.getName(e);
      for (let a = 0; a < n.length; a++) {
        let o = n[a];
        if (r(e, o)) {
          return true;
        }
        if (t.isTag(o) && t.getName(o) === i) {
          break;
        }
      }
      return false;
    },
    "last-of-type"(e, {
      adapter: t,
      equals: r
    }) {
      let n = t.getSiblings(e);
      let i = t.getName(e);
      for (let a = n.length - 1; a >= 0; a--) {
        let o = n[a];
        if (r(e, o)) {
          return true;
        }
        if (t.isTag(o) && t.getName(o) === i) {
          break;
        }
      }
      return false;
    },
    "only-of-type"(e, {
      adapter: t,
      equals: r
    }) {
      let n = t.getName(e);
      return t.getSiblings(e).every(i => r(e, i) || !t.isTag(i) || t.getName(i) !== n);
    },
    "only-child": (e, {
      adapter: t,
      equals: r
    }) => t.getSiblings(e).every(n => r(e, n) || !t.isTag(n))
  };
  function tC(e, t, r, n) {
    if (r === null) {
      if (e.length > n) {
        throw Error(`Pseudo-class :${t} requires an argument`);
      }
    } else if (e.length === n) {
      throw Error(`Pseudo-class :${t} doesn't have any arguments`);
    }
  }
  let tM = {
    "any-link": ":is(a, area, link)[href]",
    link: ":any-link:not(:visited)",
    disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
    enabled: ":not(:disabled)",
    checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
    required: ":is(input, select, textarea)[required]",
    optional: ":is(input, select, textarea):not([required])",
    selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
    checkbox: "[type=checkbox]",
    file: "[type=file]",
    password: "[type=password]",
    radio: "[type=radio]",
    reset: "[type=reset]",
    image: "[type=image]",
    submit: "[type=submit]",
    parent: ":not(:empty)",
    header: ":is(h1, h2, h3, h4, h5, h6)",
    button: ":is(button, input[type=button])",
    input: ":is(input, textarea, select, button)",
    text: "input:is(:not([type!='']), [type=text])"
  };
  let tN = {};
  function tz(e, t) {
    if (e === trueFalseUtils.falseFunc) {
      return trueFalseUtils.falseFunc;
    } else {
      return r => t.isTag(r) && e(r);
    }
  }
  function tE(e, t) {
    let r = t.getSiblings(e);
    if (r.length <= 1) {
      return [];
    }
    let n = r.indexOf(e);
    if (n < 0 || n === r.length - 1) {
      return [];
    } else {
      return r.slice(n + 1).filter(t.isTag);
    }
  }
  function tI(e) {
    return {
      xmlMode: !!e.xmlMode,
      lowerCaseAttributeNames: !!e.lowerCaseAttributeNames,
      lowerCaseTags: !!e.lowerCaseTags,
      quirksMode: !!e.quirksMode,
      cacheResults: !!e.cacheResults,
      pseudos: e.pseudos,
      adapter: e.adapter,
      equals: e.equals
    };
  }
  let t_ = (e, t, r, n, i) => {
    let a = i(t, tI(r), n);
    if (a === trueFalseUtils.trueFunc) {
      return e;
    } else if (a === trueFalseUtils.falseFunc) {
      return trueFalseUtils.falseFunc;
    } else {
      return t => a(t) && e(t);
    }
  };
  let tR = {
    is: t_,
    matches: t_,
    where: t_,
    not(e, t, r, n, i) {
      let a = i(t, tI(r), n);
      if (a === trueFalseUtils.falseFunc) {
        return e;
      } else if (a === trueFalseUtils.trueFunc) {
        return trueFalseUtils.falseFunc;
      } else {
        return t => !a(t) && e(t);
      }
    },
    has(e, t, r, n, i) {
      let {
        adapter: a
      } = r;
      let o = tI(r);
      o.relativeSelector = true;
      let s = t.some(e => e.some(th)) ? [tN] : undefined;
      let l = i(t, o, s);
      if (l === trueFalseUtils.falseFunc) {
        return trueFalseUtils.falseFunc;
      }
      let c = tz(l, a);
      if (s && l !== trueFalseUtils.trueFunc) {
        let {
          shouldTestNextSiblings: t = false
        } = l;
        return r => {
          if (!e(r)) {
            return false;
          }
          s[0] = r;
          let n = a.getChildren(r);
          let i = t ? [...n, ...tE(r, a)] : n;
          return a.existsOne(c, i);
        };
      }
      return t => e(t) && a.existsOne(c, a.getChildren(t));
    }
  };
  function tB(e, t) {
    let r = t.getParent(e);
    if (r && t.isTag(r)) {
      return r;
    } else {
      return null;
    }
  }
  function tq(e, t, r) {
    return tD(typeof e == "string" ? tl(e) : e, t, r);
  }
  function tO(e) {
    return e.type === f.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(e => e.some(tO)));
  }
  let tF = {
    type: f.Descendant
  };
  let tL = {
    type: "_flexibleDescendant"
  };
  let t$ = {
    type: f.Pseudo,
    name: "scope",
    data: null
  };
  function tD(e, t, r) {
    e.forEach(td);
    let i = Array.isArray(r = t.context ?? r);
    let a = r && (Array.isArray(r) ? r : [r]);
    if (t.relativeSelector !== false) {
      (function (e, {
        adapter: t
      }, r) {
        let n = !!(r == null ? undefined : r.every(e => {
          let r = t.isTag(e) && t.getParent(e);
          return e === tN || r && t.isTag(r);
        }));
        for (let t of e) {
          if (t.length > 0 && th(t[0]) && t[0].type !== f.Descendant) ;else {
            if (!n || t.some(tO)) {
              continue;
            }
            t.unshift(tF);
          }
          t.unshift(t$);
        }
      })(e, t, a);
    } else if (e.some(e => e.length > 0 && th(e[0]))) {
      throw Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    }
    let o = false;
    let s = e.map(e => {
      var r;
      var n;
      var s;
      if (e.length >= 2) {
        let [t, r] = e;
        if (t.type === f.Pseudo && t.name === "scope") {
          if (i && r.type === f.Descendant) {
            e[1] = tL;
          } else if (r.type === f.Adjacent || r.type === f.Sibling) {
            o = true;
          }
        }
      }
      r = e;
      n = t;
      s = a;
      return r.reduce((e, t) => e === trueFalseUtils.falseFunc ? trueFalseUtils.falseFunc : function (e, t, r, n, i) {
        let {
          adapter: a,
          equals: o
        } = r;
        switch (t.type) {
          case f.PseudoElement:
            throw Error("Pseudo-elements are not supported by css-select");
          case f.ColumnCombinator:
            throw Error("Column combinators are not yet supported by css-select");
          case f.Attribute:
            if (t.namespace != null) {
              throw Error("Namespaced attributes are not yet supported by css-select");
            }
            if (!r.xmlMode || r.lowerCaseAttributeNames) {
              t.name = t.name.toLowerCase();
            }
            return ty[t.action](e, t, r);
          case f.Pseudo:
            return function (e, t, r, n, i) {
              let {
                name: o,
                data: s
              } = t;
              if (Array.isArray(s)) {
                if (!(o in tR)) {
                  throw Error(`Unknown pseudo-class :${o}(${s})`);
                }
                return tR[o](e, s, r, n, i);
              }
              let l = r.pseudos?.[o];
              let c = typeof l == "string" ? l : tM[o];
              if (typeof c == "string") {
                if (s != null) {
                  throw Error(`Pseudo ${o} doesn't have any arguments`);
                }
                let t = tl(c);
                return tR.is(e, t, r, n, i);
              }
              if (typeof l == "function") {
                tC(l, o, s, 1);
                return t => l(t, s) && e(t);
              }
              if (o in tS) {
                return tS[o](e, s, r, n);
              }
              if (o in tT) {
                let t = tT[o];
                tC(t, o, s, 2);
                return n => t(n, r, s) && e(n);
              }
              throw Error(`Unknown pseudo-class :${o}`);
            }(e, t, r, n, i);
          case f.Tag:
            {
              if (t.namespace != null) {
                throw Error("Namespaced tag names are not yet supported by css-select");
              }
              let {
                name: n
              } = t;
              if (!r.xmlMode || r.lowerCaseTags) {
                n = n.toLowerCase();
              }
              return function (t) {
                return a.getName(t) === n && e(t);
              };
            }
          case f.Descendant:
            {
              if (r.cacheResults === false || typeof WeakSet == "undefined") {
                return function (t) {
                  let r = t;
                  while (r = tB(r, a)) {
                    if (e(r)) {
                      return true;
                    }
                  }
                  return false;
                };
              }
              let t = new WeakSet();
              return function (r) {
                let n = r;
                while (n = tB(n, a)) {
                  if (!t.has(n)) {
                    if (a.isTag(n) && e(n)) {
                      return true;
                    }
                    t.add(n);
                  }
                }
                return false;
              };
            }
          case "_flexibleDescendant":
            return function (t) {
              let r = t;
              do {
                if (e(r)) {
                  return true;
                }
              } while (r = tB(r, a));
              return false;
            };
          case f.Parent:
            return function (t) {
              return a.getChildren(t).some(t => a.isTag(t) && e(t));
            };
          case f.Child:
            return function (t) {
              let r = a.getParent(t);
              return r != null && a.isTag(r) && e(r);
            };
          case f.Sibling:
            return function (t) {
              let r = a.getSiblings(t);
              for (let n = 0; n < r.length; n++) {
                let i = r[n];
                if (o(t, i)) {
                  break;
                }
                if (a.isTag(i) && e(i)) {
                  return true;
                }
              }
              return false;
            };
          case f.Adjacent:
            if (a.prevElementSibling) {
              return function (t) {
                let r = a.prevElementSibling(t);
                return r != null && e(r);
              };
            }
            return function (t) {
              let r;
              let n = a.getSiblings(t);
              for (let e = 0; e < n.length; e++) {
                let i = n[e];
                if (o(t, i)) {
                  break;
                }
                if (a.isTag(i)) {
                  r = i;
                }
              }
              return !!r && e(r);
            };
          case f.Universal:
            if (t.namespace != null && t.namespace !== "*") {
              throw Error("Namespaced universal selectors are not yet supported by css-select");
            }
            return e;
        }
      }(e, t, n, s, tD), n.rootFunc ?? trueFalseUtils.trueFunc);
    }).reduce(tP, trueFalseUtils.falseFunc);
    s.shouldTestNextSiblings = o;
    return s;
  }
  function tP(e, t) {
    if (t === trueFalseUtils.falseFunc || e === trueFalseUtils.trueFunc) {
      return e;
    } else if (e === trueFalseUtils.falseFunc || t === trueFalseUtils.trueFunc) {
      return t;
    } else {
      return function (r) {
        return e(r) || t(r);
      };
    }
  }
  let tH = (e, t) => e === t;
  let tj = {
    adapter: w,
    equals: tH
  };
  function tV(e) {
    var t;
    var r;
    let a = e ?? tj;
    if ((t = a.adapter) === null || t === undefined) {
      a.adapter = w;
    }
    if ((r = a.equals) === null || r === undefined) {
      a.equals = a.adapter?.equals ?? tH;
    }
    return a;
  }
  function tW(e) {
    return function (t, r, n) {
      return e(t, tV(r), n);
    };
  }
  tW(function (e, t, r) {
    return tz(tq(e, t, r), t.adapter);
  });
  tW(tq);
  let tU = tW(tD);
  function tX(e) {
    return function (t, r, n) {
      let i = tV(n);
      if (typeof t != "function") {
        t = tq(t, i, r);
      }
      let a = tZ(r, i.adapter, t.shouldTestNextSiblings);
      return e(t, a, i);
    };
  }
  function tZ(e, t, r = false) {
    if (r) {
      e = function (e, t) {
        let r = Array.isArray(e) ? e.slice(0) : [e];
        let n = r.length;
        for (let e = 0; e < n; e++) {
          let n = tE(r[e], t);
          r.push(...n);
        }
        return r;
      }(e, t);
    }
    if (Array.isArray(e)) {
      return t.removeSubsets(e);
    } else {
      return t.getChildren(e);
    }
  }
  tX((e, t, r) => e !== trueFalseUtils.falseFunc && t && t.length !== 0 ? r.adapter.findAll(e, t) : []);
  tX((e, t, r) => e !== trueFalseUtils.falseFunc && t && t.length !== 0 ? r.adapter.findOne(e, t) : null);
  let tG = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
  function tY(e) {
    return e.type === "pseudo" && (!!tG.has(e.name) || e.name === "not" && !!Array.isArray(e.data) && e.data.some(e => e.some(tY)));
  }
  function tJ(e) {
    let t = [];
    let r = [];
    for (let n of e) {
      if (n.some(tY)) {
        t.push(n);
      } else {
        r.push(n);
      }
    }
    return [r, t];
  }
  let tK = {
    type: f.Universal,
    namespace: null
  };
  let tQ = {
    type: f.Pseudo,
    name: "scope",
    data: null
  };
  function t0(e, t, r = {}) {
    return t1([e], t, r);
  }
  function t1(e, t, r = {}) {
    if (typeof t == "function") {
      return e.some(t);
    }
    let [n, i] = tJ(tl(t));
    return n.length > 0 && e.some(tU(n, r)) || i.some(t => t3(t, e, r).length > 0);
  }
  function t4(e, t, r = {}) {
    return t5(tl(e), t, r);
  }
  function t5(e, t, r) {
    let n;
    if (t.length === 0) {
      return [];
    }
    let [i, a] = tJ(e);
    if (i.length) {
      let e = t8(t, i, r);
      if (a.length === 0) {
        return e;
      }
      if (e.length) {
        n = new Set(e);
      }
    }
    for (let e = 0; e < a.length && (n == null ? undefined : n.size) !== t.length; e++) {
      let i = a[e];
      if ((n ? t.filter(e => astNodeDefinitions.isElement(e) && !n.has(e)) : t).length === 0) {
        break;
      }
      let o = t3(i, t, r);
      if (o.length) {
        if (n) {
          o.forEach(e => n.add(e));
        } else {
          if (e === a.length - 1) {
            return o;
          }
          n = new Set(o);
        }
      }
    }
    if (n !== undefined) {
      if (n.size === t.length) {
        return t;
      } else {
        return t.filter(e => n.has(e));
      }
    } else {
      return [];
    }
  }
  function t3(e, t, r) {
    if (e.some(tr)) {
      let i = r.root ?? function (e) {
        while (e.parent) {
          e = e.parent;
        }
        return e;
      }(t[0]);
      let a = {
        ...r,
        context: t,
        relativeSelector: false
      };
      e.push(tQ);
      return t6(i, e, a, true, t.length);
    }
    return t6(t, e, r, false, t.length);
  }
  function t6(e, t, r, n, i) {
    let a = t.findIndex(tY);
    let o = t.slice(0, a);
    let s = t[a];
    let l = t.length - 1 === a ? i : Infinity;
    let c = function (e, t, r) {
      let n = t != null ? parseInt(t, 10) : NaN;
      switch (e) {
        case "first":
          return 1;
        case "nth":
        case "eq":
          if (isFinite(n)) {
            if (n >= 0) {
              return n + 1;
            } else {
              return Infinity;
            }
          } else {
            return 0;
          }
        case "lt":
          if (isFinite(n)) {
            if (n >= 0) {
              return Math.min(n, r);
            } else {
              return Infinity;
            }
          } else {
            return 0;
          }
        case "gt":
          if (isFinite(n)) {
            return Infinity;
          } else {
            return 0;
          }
        case "odd":
          return r * 2;
        case "even":
          return r * 2 - 1;
        case "last":
        case "not":
          return Infinity;
      }
    }(s.name, s.data, l);
    if (c === 0) {
      return [];
    }
    let u = (o.length !== 0 || Array.isArray(e) ? o.length === 0 ? (Array.isArray(e) ? e : [e]).filter(astNodeDefinitions.isElement) : n || o.some(tr) ? t7(e, [o], r, c) : t8(e, [o], r) : D(e).filter(astNodeDefinitions.isElement)).slice(0, c);
    let h = function (e, t, r, n) {
      let i = typeof r == "string" ? parseInt(r, 10) : NaN;
      switch (e) {
        case "first":
        case "lt":
          return t;
        case "last":
          if (t.length > 0) {
            return [t[t.length - 1]];
          } else {
            return t;
          }
        case "nth":
        case "eq":
          if (isFinite(i) && Math.abs(i) < t.length) {
            return [i < 0 ? t[t.length + i] : t[i]];
          } else {
            return [];
          }
        case "gt":
          if (isFinite(i)) {
            return t.slice(i + 1);
          } else {
            return [];
          }
        case "even":
          return t.filter((e, t) => t % 2 == 0);
        case "odd":
          return t.filter((e, t) => t % 2 == 1);
        case "not":
          {
            let e = new Set(t5(r, t, n));
            return t.filter(t => !e.has(t));
          }
      }
    }(s.name, u, s.data, r);
    if (h.length === 0 || t.length === a + 1) {
      return h;
    }
    let p = t.slice(a + 1);
    let d = p.some(tr);
    if (d) {
      if (tr(p[0])) {
        let {
          type: e
        } = p[0];
        if (e === f.Sibling || e === f.Adjacent) {
          h = tZ(h, w, true);
        }
        p.unshift(tK);
      }
      r = {
        ...r,
        relativeSelector: false,
        rootFunc: e => h.includes(e)
      };
    } else if (r.rootFunc && r.rootFunc !== trueFalseUtils.trueFunc) {
      r = {
        ...r,
        rootFunc: trueFalseUtils.trueFunc
      };
    }
    if (p.some(tY)) {
      return t6(h, p, r, false, i);
    } else if (d) {
      return t7(h, [p], r, i);
    } else {
      return t8(h, [p], r);
    }
  }
  function t7(e, t, r, n) {
    let i = tU(t, r, e);
    return t2(e, i, n);
  }
  function t2(e, t, r = Infinity) {
    return et(e => astNodeDefinitions.isElement(e) && t(e), tZ(e, w, t.shouldTestNextSiblings), true, r);
  }
  function t8(e, t, r) {
    let n = (Array.isArray(e) ? e : [e]).filter(astNodeDefinitions.isElement);
    if (n.length === 0) {
      return n;
    }
    let i = tU(t, r);
    if (i === trueFalseUtils.trueFunc) {
      return n;
    } else {
      return n.filter(i);
    }
  }
  let t9 = /^\s*[~+]/;
  function re(e) {
    if (!e) {
      return this._make([]);
    }
    let r = this.toArray();
    if (typeof e != "string") {
      let t = eq(e) ? e.toArray() : [e];
      return this._make(t.filter(e => r.some(t => e_(t, e))));
    }
    let n = t9.test(e) ? r : this.children().toArray();
    let i = {
      context: r,
      root: this._root?.[0],
      xmlMode: this.options.xmlMode,
      lowerCaseTags: this.options.lowerCaseTags,
      lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
      pseudos: this.options.pseudos,
      quirksMode: this.options.quirksMode
    };
    return this._make(function (e, t, r = {}, n = Infinity) {
      if (typeof e == "function") {
        return t2(t, e);
      }
      let [i, a] = tJ(tl(e));
      let o = a.map(e => t6(t, e, r, true, n));
      if (i.length) {
        o.push(t7(t, i, r, n));
      }
      if (o.length === 0) {
        return [];
      } else if (o.length === 1) {
        return o[0];
      } else {
        return ev(o.reduce((e, t) => [...e, ...t]));
      }
    }(e, n, i));
  }
  function rt(e) {
    return function (t, ...r) {
      return function (n) {
        let a = e(t, this);
        if (n) {
          a = rS(a, n, this.options.xmlMode, this._root?.[0]);
        }
        return this._make(this.length > 1 && a.length > 1 ? r.reduce((e, t) => t(e), a) : a);
      };
    };
  }
  let rr = rt((e, t) => {
    let r = [];
    for (let n = 0; n < t.length; n++) {
      let i = e(t[n]);
      r.push(i);
    }
    return [].concat(...r);
  });
  let rn = rt((e, t) => {
    let r = [];
    for (let n = 0; n < t.length; n++) {
      let i = e(t[n]);
      if (i !== null) {
        r.push(i);
      }
    }
    return r;
  });
  function ri(e, ...t) {
    let r = null;
    let n = rt((e, t) => {
      let n = [];
      eO(t, t => {
        for (let i; (i = e(t)) && (r == null || !r(i, n.length)); t = i) {
          n.push(i);
        }
      });
      return n;
    })(e, ...t);
    return function (e, t) {
      r = typeof e == "string" ? t => t0(t, e, this.options) : e ? rw(e) : null;
      let i = n.call(this, t);
      r = null;
      return i;
    };
  }
  function ra(e) {
    return Array.from(new Set(e));
  }
  let ro = rn(({
    parent: e
  }) => e && !astNodeDefinitions.isRoot(e) ? e : null, ra);
  let rs = rr(e => {
    let t = [];
    while (e.parent && !astNodeDefinitions.isRoot(e.parent)) {
      t.push(e.parent);
      e = e.parent;
    }
    return t;
  }, ev, e => e.reverse());
  let rl = ri(({
    parent: e
  }) => e && !astNodeDefinitions.isRoot(e) ? e : null, ev, e => e.reverse());
  function rc(e) {
    let r = [];
    if (!e) {
      return this._make(r);
    }
    let n = {
      xmlMode: this.options.xmlMode,
      root: this._root?.[0]
    };
    let i = typeof e == "string" ? t => t0(t, e, n) : rw(e);
    eO(this, e => {
      while (e && astNodeDefinitions.isElement(e)) {
        if (i(e, 0)) {
          if (!r.includes(e)) {
            r.push(e);
          }
          break;
        }
        e = e.parent;
      }
    });
    return this._make(r);
  }
  let ru = rn(e => U(e));
  let rh = rr(e => {
    let t = [];
    while (e.next) {
      e = e.next;
      if (astNodeDefinitions.isElement(e)) {
        t.push(e);
      }
    }
    return t;
  }, ra);
  let rp = ri(e => U(e), ra);
  let rd = rn(e => X(e));
  let rm = rr(e => {
    let t = [];
    while (e.prev) {
      e = e.prev;
      if (astNodeDefinitions.isElement(e)) {
        t.push(e);
      }
    }
    return t;
  }, ra);
  let rf = ri(e => X(e), ra);
  let rg = rr(e => H(e).filter(t => astNodeDefinitions.isElement(t) && t !== e), ev);
  let rv = rr(e => D(e).filter(astNodeDefinitions.isElement), ra);
  function rb() {
    let e = this.toArray().reduce((e, t) => astNodeDefinitions.hasChildren(t) ? e.concat(t.children) : e, []);
    return this._make(e);
  }
  function ry(e) {
    let t = 0;
    let r = this.length;
    while (t < r && e.call(this[t], t, this[t]) !== false) {
      ++t;
    }
    return this;
  }
  function rx(e) {
    let t = [];
    for (let r = 0; r < this.length; r++) {
      let n = this[r];
      let i = e.call(n, r, n);
      if (i != null) {
        t = t.concat(i);
      }
    }
    return this._make(t);
  }
  function rw(e) {
    if (typeof e == "function") {
      return (t, r) => e.call(t, r, t);
    } else if (eq(e)) {
      return t => Array.prototype.includes.call(e, t);
    } else {
      return function (t) {
        return e === t;
      };
    }
  }
  function rk(e) {
    return this._make(rS(this.toArray(), e, this.options.xmlMode, this._root?.[0]));
  }
  function rS(e, t, r, n) {
    if (typeof t == "string") {
      return t4(t, e, {
        xmlMode: r,
        root: n
      });
    } else {
      return e.filter(rw(t));
    }
  }
  function rA(e) {
    let t = this.toArray();
    if (typeof e == "string") {
      return t1(t.filter(astNodeDefinitions.isElement), e, this.options);
    } else {
      return !!e && t.some(rw(e));
    }
  }
  function rT(e) {
    let t = this.toArray();
    if (typeof e == "string") {
      let r = new Set(t4(e, t, this.options));
      t = t.filter(e => !r.has(e));
    } else {
      let r = rw(e);
      t = t.filter((e, t) => !r(e, t));
    }
    return this._make(t);
  }
  function rC(e) {
    return this.filter(typeof e == "string" ? `:has(${e})` : (t, r) => this._make(r).find(e).length > 0);
  }
  function rM() {
    if (this.length > 1) {
      return this._make(this[0]);
    } else {
      return this;
    }
  }
  function rN() {
    if (this.length > 0) {
      return this._make(this[this.length - 1]);
    } else {
      return this;
    }
  }
  function rz(e) {
    if ((e *= 1) == 0 && this.length <= 1) {
      return this;
    } else {
      if (e < 0) {
        e = this.length + e;
      }
      return this._make(this[e] ?? []);
    }
  }
  function rE(e) {
    if (e == null) {
      return this.toArray();
    } else {
      return this[e < 0 ? this.length + e : e];
    }
  }
  function rI() {
    return Array.prototype.slice.call(this);
  }
  function r_(e) {
    let t;
    let r;
    if (e == null) {
      t = this.parent().children();
      r = this[0];
    } else if (typeof e == "string") {
      t = this._make(e);
      r = this[0];
    } else {
      t = this;
      r = eq(e) ? e[0] : e;
    }
    return Array.prototype.indexOf.call(t, r);
  }
  function rR(e, t) {
    return this._make(Array.prototype.slice.call(this, e, t));
  }
  function rB() {
    return this.prevObject ?? this._make([]);
  }
  function rq(e, t) {
    let r = this._make(e, t);
    let n = ev([...this.get(), ...r.get()]);
    return this._make(n);
  }
  function rO(e) {
    if (this.prevObject) {
      return this.add(e ? this.prevObject.filter(e) : this.prevObject);
    } else {
      return this;
    }
  }
  var rF = require("buffer-polyfill-impl") /*id: 989572*/.Buffer;
  function rL(e, t) {
    let r = Array.isArray(e) ? e : [e];
    if (t) {
      t.children = r;
    } else {
      t = null;
    }
    for (let e = 0; e < r.length; e++) {
      let n = r[e];
      if (n.parent && n.parent.children !== r) {
        Z(n);
      }
      if (t) {
        n.prev = r[e - 1] || null;
        n.next = r[e + 1] || null;
      } else {
        n.prev = n.next = null;
      }
      n.parent = t;
    }
    return t;
  }
  function r$(e, t) {
    if (e == null) {
      return [];
    } else if (eq(e)) {
      if (t) {
        return eF(e.get());
      } else {
        return e.get();
      }
    } else if (Array.isArray(e)) {
      return e.reduce((e, r) => e.concat(this._makeDomArray(r, t)), []);
    } else if (typeof e == "string") {
      return this._parse(e, this.options, false, null).children;
    } else if (t) {
      return eF([e]);
    } else {
      return [e];
    }
  }
  function rD(e) {
    return function (...t) {
      let r = this.length - 1;
      return eO(this, (n, i) => {
        if (!astNodeDefinitions.hasChildren(n)) {
          return;
        }
        let a = typeof t[0] == "function" ? t[0].call(n, i, this._render(n.children)) : t;
        e(this._makeDomArray(a, i < r), n.children, n);
      });
    };
  }
  function rP(e, t, r, n, i) {
    let s = [t, r, ...n];
    let l = t === 0 ? null : e[t - 1];
    let c = t + r >= e.length ? null : e[t + r];
    for (let e = 0; e < n.length; ++e) {
      let r = n[e];
      let u = r.parent;
      if (u) {
        let e = u.children.indexOf(r);
        if (e > -1) {
          u.children.splice(e, 1);
          if (i === u && t > e) {
            s[0]--;
          }
        }
      }
      r.parent = i;
      if (r.prev) {
        r.prev.next = r.next ?? null;
      }
      if (r.next) {
        r.next.prev = r.prev ?? null;
      }
      r.prev = e === 0 ? l : n[e - 1];
      r.next = e === n.length - 1 ? c : n[e + 1];
    }
    if (l) {
      l.next = n[0];
    }
    if (c) {
      c.prev = n[n.length - 1];
    }
    return e.splice(...s);
  }
  function rH(e) {
    (eq(e) ? e : this._make(e)).append(this);
    return this;
  }
  function rj(e) {
    (eq(e) ? e : this._make(e)).prepend(this);
    return this;
  }
  let rV = rD((e, t, r) => {
    rP(t, t.length, 0, e, r);
  });
  let rW = rD((e, t, r) => {
    rP(t, 0, 0, e, r);
  });
  function rU(e) {
    return function (t) {
      let r = this.length - 1;
      let n = this.parents().last();
      for (let i = 0; i < this.length; i++) {
        let a = this[i];
        let o = typeof t == "function" ? t.call(a, i, a) : typeof t != "string" || eL(t) ? t : n.find(t).clone();
        let [s] = this._makeDomArray(o, i < r);
        if (!s || !astNodeDefinitions.hasChildren(s)) {
          continue;
        }
        let l = s;
        let c = 0;
        while (c < l.children.length) {
          let e = l.children[c];
          if (astNodeDefinitions.isElement(e)) {
            l = e;
            c = 0;
          } else {
            c++;
          }
        }
        e(a, l, [s]);
      }
      return this;
    };
  }
  let rX = rU((e, t, r) => {
    let {
      parent: n
    } = e;
    if (!n) {
      return;
    }
    let i = n.children;
    let a = i.indexOf(e);
    rL([e], t);
    rP(i, a, 0, r, n);
  });
  let rZ = rU((e, t, r) => {
    if (astNodeDefinitions.hasChildren(e)) {
      rL(e.children, t);
      rL(r, e);
    }
  });
  function rG(e) {
    this.parent(e).not("body").each((e, t) => {
      this._make(t).replaceWith(t.children);
    });
    return this;
  }
  function rY(e) {
    let t = this[0];
    if (t) {
      let r;
      let n = this._make(typeof e == "function" ? e.call(t, 0, t) : e).insertBefore(t);
      for (let e = 0; e < n.length; e++) {
        if (n[e].type === "tag") {
          r = n[e];
        }
      }
      let i = 0;
      while (r && i < r.children.length) {
        let e = r.children[i];
        if (e.type === "tag") {
          r = e;
          i = 0;
        } else {
          i++;
        }
      }
      if (r) {
        this._make(r).append(this);
      }
    }
    return this;
  }
  function rJ(...e) {
    let t = this.length - 1;
    return eO(this, (r, n) => {
      let {
        parent: i
      } = r;
      if (!astNodeDefinitions.hasChildren(r) || !i) {
        return;
      }
      let a = i.children;
      let o = a.indexOf(r);
      if (o < 0) {
        return;
      }
      let s = typeof e[0] == "function" ? e[0].call(r, n, this._render(r.children)) : e;
      rP(a, o + 1, 0, this._makeDomArray(s, n < t), i);
    });
  }
  function rK(e) {
    if (typeof e == "string") {
      e = this._make(e);
    }
    this.remove();
    let t = [];
    this._makeDomArray(e).forEach(e => {
      let r = this.clone().toArray();
      let {
        parent: n
      } = e;
      if (!n) {
        return;
      }
      let i = n.children;
      let a = i.indexOf(e);
      if (!(a < 0)) {
        rP(i, a + 1, 0, r, n);
        t.push(...r);
      }
    });
    return this._make(t);
  }
  function rQ(...e) {
    let t = this.length - 1;
    return eO(this, (r, n) => {
      let {
        parent: i
      } = r;
      if (!astNodeDefinitions.hasChildren(r) || !i) {
        return;
      }
      let a = i.children;
      let o = a.indexOf(r);
      if (o < 0) {
        return;
      }
      let s = typeof e[0] == "function" ? e[0].call(r, n, this._render(r.children)) : e;
      rP(a, o, 0, this._makeDomArray(s, n < t), i);
    });
  }
  function r0(e) {
    let t = this._make(e);
    this.remove();
    let r = [];
    eO(t, e => {
      let t = this.clone().toArray();
      let {
        parent: n
      } = e;
      if (!n) {
        return;
      }
      let i = n.children;
      let a = i.indexOf(e);
      if (!(a < 0)) {
        rP(i, a, 0, t, n);
        r.push(...t);
      }
    });
    return this._make(r);
  }
  function r1(e) {
    eO(e ? this.filter(e) : this, e => {
      Z(e);
      e.prev = e.next = e.parent = null;
    });
    return this;
  }
  function r4(e) {
    return eO(this, (t, r) => {
      let {
        parent: n
      } = t;
      if (!n) {
        return;
      }
      let i = n.children;
      let a = typeof e == "function" ? e.call(t, r, t) : e;
      let o = this._makeDomArray(a);
      rL(o, null);
      let s = i.indexOf(t);
      rP(i, s, 1, o, n);
      if (!o.includes(t)) {
        t.parent = t.prev = t.next = null;
      }
    });
  }
  function r5() {
    return eO(this, e => {
      if (astNodeDefinitions.hasChildren(e)) {
        e.children.forEach(e => {
          e.next = e.prev = e.parent = null;
        });
        e.children.length = 0;
      }
    });
  }
  function r3(e) {
    if (e === undefined) {
      let e = this[0];
      if (e && astNodeDefinitions.hasChildren(e)) {
        return this._render(e.children);
      } else {
        return null;
      }
    }
    return eO(this, t => {
      if (astNodeDefinitions.hasChildren(t)) {
        t.children.forEach(e => {
          e.next = e.prev = e.parent = null;
        });
        rL(eq(e) ? e.toArray() : this._parse(`${e}`, this.options, false, t).children, t);
      }
    });
  }
  function r6() {
    return this._render(this);
  }
  function r7(e) {
    if (e === undefined) {
      return ez(this);
    } else if (typeof e == "function") {
      return eO(this, (t, r) => this._make(t).text(e.call(t, r, ez([t]))));
    } else {
      return eO(this, t => {
        if (astNodeDefinitions.hasChildren(t)) {
          t.children.forEach(e => {
            e.next = e.prev = e.parent = null;
          });
          rL(new astNodeDefinitions.TextNode(`${e}`), t);
        }
      });
    }
  }
  function r2() {
    return this._make(eF(this.get()));
  }
  function r8(e, t) {
    if ((e == null || t == null) && (typeof e != "object" || Array.isArray(e))) {
      if (this.length !== 0) {
        return r9(this[0], e);
      } else {
        return undefined;
      }
    } else {
      return eO(this, (r, n) => {
        if (astNodeDefinitions.isElement(r)) {
          (function e(t, r, n, i) {
            if (typeof r == "string") {
              var a;
              let e = r9(t);
              let o = typeof n == "function" ? n.call(t, i, e[r]) : n;
              if (o === "") {
                delete e[r];
              } else if (o != null) {
                e[r] = o;
              }
              t.attribs.style = Object.keys(a = e).reduce((e, t) => `${e}${e ? " " : ""}${t}: ${a[t]};`, "");
            } else if (typeof r == "object") {
              Object.keys(r).forEach((n, i) => {
                e(t, n, r[n], i);
              });
            }
          })(r, e, t, n);
        }
      });
    }
  }
  function r9(e, t) {
    if (!e || !astNodeDefinitions.isElement(e)) {
      return;
    }
    let r = function (e) {
      let t;
      if (!(e = (e || "").trim())) {
        return {};
      }
      let r = {};
      for (let n of e.split(";")) {
        let e = n.indexOf(":");
        if (e < 1 || e === n.length - 1) {
          let e = n.trimEnd();
          if (e.length > 0 && t !== undefined) {
            r[t] += `;${e}`;
          }
        } else {
          r[t = n.slice(0, e).trim()] = n.slice(e + 1).trim();
        }
      }
      return r;
    }(e.attribs.style);
    if (typeof t == "string") {
      return r[t];
    }
    if (Array.isArray(t)) {
      let e = {};
      t.forEach(t => {
        if (r[t] != null) {
          e[t] = r[t];
        }
      });
      return e;
    }
    return r;
  }
  let ne = "input,select,textarea,keygen";
  let nt = /%20/g;
  let nr = /\r?\n/g;
  function nn() {
    return this.serializeArray().map(e => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`).join("&").replace(nt, "+");
  }
  function ni() {
    return this.map((e, t) => {
      let r = this._make(t);
      if (astNodeDefinitions.isElement(t) && t.name === "form") {
        return r.find(ne).toArray();
      } else {
        return r.filter(ne).toArray();
      }
    }).filter("[name!=\"\"]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))").map((e, t) => {
      let n = this._make(t);
      let i = n.attr("name");
      let a = n.val() ?? "";
      if (Array.isArray(a)) {
        return a.map(e => ({
          name: i,
          value: e.replace(nr, "\r\n")
        }));
      } else {
        return {
          name: i,
          value: a.replace(nr, "\r\n")
        };
      }
    }).toArray();
  }
  class na {
    constructor(e, t, r) {
      this.length = 0;
      this.options = r;
      this._root = t;
      if (e) {
        for (let t = 0; t < e.length; t++) {
          this[t] = e[t];
        }
        this.length = e.length;
      }
    }
  }
  na.prototype.cheerio = "[cheerio object]";
  na.prototype.splice = Array.prototype.splice;
  na.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
  Object.assign(na.prototype, S, A, T, C, M);
  var htmlParserCore = require("html-parser-core") /*id: 948150*/;
  function ns(e) {
    let t = e.includes("\"") ? "'" : "\"";
    return t + e + t;
  }
  let nl = {
    isCommentNode: astNodeDefinitions.isComment,
    isElementNode: astNodeDefinitions.isElement,
    isTextNode: astNodeDefinitions.isText,
    createDocument() {
      let e = new astNodeDefinitions.RootNode([]);
      e["x-mode"] = htmlParserCore.htmlConstants.DOCUMENT_MODE.NO_QUIRKS;
      return e;
    },
    createDocumentFragment: () => new astNodeDefinitions.RootNode([]),
    createElement(e, t, r) {
      let n = Object.create(null);
      let i = Object.create(null);
      let a = Object.create(null);
      for (let e = 0; e < r.length; e++) {
        let t = r[e].name;
        n[t] = r[e].value;
        i[t] = r[e].namespace;
        a[t] = r[e].prefix;
      }
      let o = new astNodeDefinitions.ElementNode(e, n, []);
      o.namespace = t;
      o["x-attribsNamespace"] = i;
      o["x-attribsPrefix"] = a;
      return o;
    },
    createCommentNode: e => new astNodeDefinitions.CommentNode(e),
    createTextNode: e => new astNodeDefinitions.TextNode(e),
    appendChild(e, t) {
      let r = e.children[e.children.length - 1];
      if (r) {
        r.next = t;
        t.prev = r;
      }
      e.children.push(t);
      t.parent = e;
    },
    insertBefore(e, t, r) {
      let n = e.children.indexOf(r);
      let {
        prev: i
      } = r;
      if (i) {
        i.next = t;
        t.prev = i;
      }
      r.prev = t;
      t.next = r;
      e.children.splice(n, 0, t);
      t.parent = e;
    },
    setTemplateContent(e, t) {
      nl.appendChild(e, t);
    },
    getTemplateContent: e => e.children[0],
    setDocumentType(e, t, r, n) {
      let i;
      i = "!DOCTYPE ";
      if (t) {
        i += t;
      }
      if (r) {
        i += ` PUBLIC ${ns(r)}`;
      } else if (n) {
        i += " SYSTEM";
      }
      if (n) {
        i += ` ${ns(n)}`;
      }
      let a = i;
      let o = e.children.find(e => astNodeDefinitions.isDirective(e) && e.name === "!doctype");
      if (o) {
        o.data = a ?? null;
      } else {
        o = new astNodeDefinitions.DirectiveNode("!doctype", a);
        nl.appendChild(e, o);
      }
      o["x-name"] = t;
      o["x-publicId"] = r;
      o["x-systemId"] = n;
    },
    setDocumentMode(e, t) {
      e["x-mode"] = t;
    },
    getDocumentMode: e => e["x-mode"],
    detachNode(e) {
      if (e.parent) {
        let t = e.parent.children.indexOf(e);
        let {
          prev: r,
          next: n
        } = e;
        e.prev = null;
        e.next = null;
        if (r) {
          r.next = n;
        }
        if (n) {
          n.prev = r;
        }
        e.parent.children.splice(t, 1);
        e.parent = null;
      }
    },
    insertText(e, t) {
      let r = e.children[e.children.length - 1];
      if (r && astNodeDefinitions.isText(r)) {
        r.data += t;
      } else {
        nl.appendChild(e, nl.createTextNode(t));
      }
    },
    insertTextBefore(e, t, r) {
      let n = e.children[e.children.indexOf(r) - 1];
      if (n && astNodeDefinitions.isText(n)) {
        n.data += t;
      } else {
        nl.insertBefore(e, nl.createTextNode(t), r);
      }
    },
    adoptAttributes(e, t) {
      for (let r = 0; r < t.length; r++) {
        let n = t[r].name;
        if (e.attribs[n] === undefined) {
          e.attribs[n] = t[r].value;
          e["x-attribsNamespace"][n] = t[r].namespace;
          e["x-attribsPrefix"][n] = t[r].prefix;
        }
      }
    },
    getFirstChild: e => e.children[0],
    getChildNodes: e => e.children,
    getParentNode: e => e.parent,
    getAttrList: e => e.attributes,
    getTagName: e => e.name,
    getNamespaceURI: e => e.namespace,
    getTextNodeContent: e => e.data,
    getCommentNodeContent: e => e.data,
    getDocumentTypeNodeName(e) {
      return e["x-name"] ?? "";
    },
    getDocumentTypeNodePublicId(e) {
      return e["x-publicId"] ?? "";
    },
    getDocumentTypeNodeSystemId(e) {
      return e["x-systemId"] ?? "";
    },
    isDocumentTypeNode: e => astNodeDefinitions.isDirective(e) && e.name === "!doctype",
    setNodeSourceCodeLocation(e, t) {
      if (t) {
        e.startIndex = t.startOffset;
        e.endIndex = t.endOffset;
      }
      e.sourceCodeLocation = t;
    },
    getNodeSourceCodeLocation: e => e.sourceCodeLocation,
    updateNodeSourceCodeLocation(e, t) {
      if (t.endOffset != null) {
        e.endIndex = t.endOffset;
      }
      e.sourceCodeLocation = {
        ...e.sourceCodeLocation,
        ...t
      };
    }
  };
  let nc = {
    treeAdapter: nl
  };
  var htmlEntityDecoderUtils = require("html-entity-decoder-utils") /*id: 359570*/;
  function nh(e) {
    return e === v.Space || e === v.NewLine || e === v.Tab || e === v.FormFeed || e === v.CarriageReturn;
  }
  function np(e) {
    return e === v.Slash || e === v.Gt || nh(e);
  }
  function nd(e) {
    return e >= v.Zero && e <= v.Nine;
  }
  (s = v ||= {})[s.Tab = 9] = "Tab";
  s[s.NewLine = 10] = "NewLine";
  s[s.FormFeed = 12] = "FormFeed";
  s[s.CarriageReturn = 13] = "CarriageReturn";
  s[s.Space = 32] = "Space";
  s[s.ExclamationMark = 33] = "ExclamationMark";
  s[s.Number = 35] = "Number";
  s[s.Amp = 38] = "Amp";
  s[s.SingleQuote = 39] = "SingleQuote";
  s[s.DoubleQuote = 34] = "DoubleQuote";
  s[s.Dash = 45] = "Dash";
  s[s.Slash = 47] = "Slash";
  s[s.Zero = 48] = "Zero";
  s[s.Nine = 57] = "Nine";
  s[s.Semi = 59] = "Semi";
  s[s.Lt = 60] = "Lt";
  s[s.Eq = 61] = "Eq";
  s[s.Gt = 62] = "Gt";
  s[s.Questionmark = 63] = "Questionmark";
  s[s.UpperA = 65] = "UpperA";
  s[s.LowerA = 97] = "LowerA";
  s[s.UpperF = 70] = "UpperF";
  s[s.LowerF = 102] = "LowerF";
  s[s.UpperZ = 90] = "UpperZ";
  s[s.LowerZ = 122] = "LowerZ";
  s[s.LowerX = 120] = "LowerX";
  s[s.OpeningSquareBracket = 91] = "OpeningSquareBracket";
  (l = b ||= {})[l.Text = 1] = "Text";
  l[l.BeforeTagName = 2] = "BeforeTagName";
  l[l.InTagName = 3] = "InTagName";
  l[l.InSelfClosingTag = 4] = "InSelfClosingTag";
  l[l.BeforeClosingTagName = 5] = "BeforeClosingTagName";
  l[l.InClosingTagName = 6] = "InClosingTagName";
  l[l.AfterClosingTagName = 7] = "AfterClosingTagName";
  l[l.BeforeAttributeName = 8] = "BeforeAttributeName";
  l[l.InAttributeName = 9] = "InAttributeName";
  l[l.AfterAttributeName = 10] = "AfterAttributeName";
  l[l.BeforeAttributeValue = 11] = "BeforeAttributeValue";
  l[l.InAttributeValueDq = 12] = "InAttributeValueDq";
  l[l.InAttributeValueSq = 13] = "InAttributeValueSq";
  l[l.InAttributeValueNq = 14] = "InAttributeValueNq";
  l[l.BeforeDeclaration = 15] = "BeforeDeclaration";
  l[l.InDeclaration = 16] = "InDeclaration";
  l[l.InProcessingInstruction = 17] = "InProcessingInstruction";
  l[l.BeforeComment = 18] = "BeforeComment";
  l[l.CDATASequence = 19] = "CDATASequence";
  l[l.InSpecialComment = 20] = "InSpecialComment";
  l[l.InCommentLike = 21] = "InCommentLike";
  l[l.BeforeSpecialS = 22] = "BeforeSpecialS";
  l[l.SpecialStartSequence = 23] = "SpecialStartSequence";
  l[l.InSpecialTag = 24] = "InSpecialTag";
  l[l.BeforeEntity = 25] = "BeforeEntity";
  l[l.BeforeNumericEntity = 26] = "BeforeNumericEntity";
  l[l.InNamedEntity = 27] = "InNamedEntity";
  l[l.InNumericEntity = 28] = "InNumericEntity";
  l[l.InHexEntity = 29] = "InHexEntity";
  (c = y ||= {})[c.NoValue = 0] = "NoValue";
  c[c.Unquoted = 1] = "Unquoted";
  c[c.Single = 2] = "Single";
  c[c.Double = 3] = "Double";
  let nm = {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    CdataEnd: new Uint8Array([93, 93, 62]),
    CommentEnd: new Uint8Array([45, 45, 62]),
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
  };
  class nf {
    constructor({
      xmlMode: e = false,
      decodeEntities: t = true
    }, r) {
      this.cbs = r;
      this.state = b.Text;
      this.buffer = "";
      this.sectionStart = 0;
      this.index = 0;
      this.baseState = b.Text;
      this.isSpecial = false;
      this.running = true;
      this.offset = 0;
      this.currentSequence = undefined;
      this.sequenceIndex = 0;
      this.trieIndex = 0;
      this.trieCurrent = 0;
      this.entityResult = 0;
      this.entityExcess = 0;
      this.xmlMode = e;
      this.decodeEntities = t;
      this.entityTrie = e ? htmlEntityDecoderUtils.legacyDecodeTree : htmlEntityDecoderUtils.entityDecodeTree;
    }
    reset() {
      this.state = b.Text;
      this.buffer = "";
      this.sectionStart = 0;
      this.index = 0;
      this.baseState = b.Text;
      this.currentSequence = undefined;
      this.running = true;
      this.offset = 0;
    }
    write(e) {
      this.offset += this.buffer.length;
      this.buffer = e;
      this.parse();
    }
    end() {
      if (this.running) {
        this.finish();
      }
    }
    pause() {
      this.running = false;
    }
    resume() {
      this.running = true;
      if (this.index < this.buffer.length + this.offset) {
        this.parse();
      }
    }
    getIndex() {
      return this.index;
    }
    getSectionStart() {
      return this.sectionStart;
    }
    stateText(e) {
      if (e === v.Lt || !this.decodeEntities && this.fastForwardTo(v.Lt)) {
        if (this.index > this.sectionStart) {
          this.cbs.ontext(this.sectionStart, this.index);
        }
        this.state = b.BeforeTagName;
        this.sectionStart = this.index;
      } else if (this.decodeEntities && e === v.Amp) {
        this.state = b.BeforeEntity;
      }
    }
    stateSpecialStartSequence(e) {
      let t = this.sequenceIndex === this.currentSequence.length;
      if (t ? np(e) : (e | 32) === this.currentSequence[this.sequenceIndex]) {
        if (!t) {
          this.sequenceIndex++;
          return;
        }
      } else {
        this.isSpecial = false;
      }
      this.sequenceIndex = 0;
      this.state = b.InTagName;
      this.stateInTagName(e);
    }
    stateInSpecialTag(e) {
      if (this.sequenceIndex === this.currentSequence.length) {
        if (e === v.Gt || nh(e)) {
          let t = this.index - this.currentSequence.length;
          if (this.sectionStart < t) {
            let e = this.index;
            this.index = t;
            this.cbs.ontext(this.sectionStart, t);
            this.index = e;
          }
          this.isSpecial = false;
          this.sectionStart = t + 2;
          this.stateInClosingTagName(e);
          return;
        }
        this.sequenceIndex = 0;
      }
      if ((e | 32) === this.currentSequence[this.sequenceIndex]) {
        this.sequenceIndex += 1;
      } else if (this.sequenceIndex === 0) {
        if (this.currentSequence === nm.TitleEnd) {
          if (this.decodeEntities && e === v.Amp) {
            this.state = b.BeforeEntity;
          }
        } else if (this.fastForwardTo(v.Lt)) {
          this.sequenceIndex = 1;
        }
      } else {
        this.sequenceIndex = Number(e === v.Lt);
      }
    }
    stateCDATASequence(e) {
      if (e === nm.Cdata[this.sequenceIndex]) {
        if (++this.sequenceIndex === nm.Cdata.length) {
          this.state = b.InCommentLike;
          this.currentSequence = nm.CdataEnd;
          this.sequenceIndex = 0;
          this.sectionStart = this.index + 1;
        }
      } else {
        this.sequenceIndex = 0;
        this.state = b.InDeclaration;
        this.stateInDeclaration(e);
      }
    }
    fastForwardTo(e) {
      while (++this.index < this.buffer.length + this.offset) {
        if (this.buffer.charCodeAt(this.index - this.offset) === e) {
          return true;
        }
      }
      this.index = this.buffer.length + this.offset - 1;
      return false;
    }
    stateInCommentLike(e) {
      if (e === this.currentSequence[this.sequenceIndex]) {
        if (++this.sequenceIndex === this.currentSequence.length) {
          if (this.currentSequence === nm.CdataEnd) {
            this.cbs.oncdata(this.sectionStart, this.index, 2);
          } else {
            this.cbs.oncomment(this.sectionStart, this.index, 2);
          }
          this.sequenceIndex = 0;
          this.sectionStart = this.index + 1;
          this.state = b.Text;
        }
      } else if (this.sequenceIndex === 0) {
        if (this.fastForwardTo(this.currentSequence[0])) {
          this.sequenceIndex = 1;
        }
      } else if (e !== this.currentSequence[this.sequenceIndex - 1]) {
        this.sequenceIndex = 0;
      }
    }
    isTagStartChar(e) {
      if (this.xmlMode) {
        return !np(e);
      } else {
        return e >= v.LowerA && e <= v.LowerZ || e >= v.UpperA && e <= v.UpperZ;
      }
    }
    startSpecial(e, t) {
      this.isSpecial = true;
      this.currentSequence = e;
      this.sequenceIndex = t;
      this.state = b.SpecialStartSequence;
    }
    stateBeforeTagName(e) {
      if (e === v.ExclamationMark) {
        this.state = b.BeforeDeclaration;
        this.sectionStart = this.index + 1;
      } else if (e === v.Questionmark) {
        this.state = b.InProcessingInstruction;
        this.sectionStart = this.index + 1;
      } else if (this.isTagStartChar(e)) {
        let t = e | 32;
        this.sectionStart = this.index;
        if (this.xmlMode || t !== nm.TitleEnd[2]) {
          this.state = this.xmlMode || t !== nm.ScriptEnd[2] ? b.InTagName : b.BeforeSpecialS;
        } else {
          this.startSpecial(nm.TitleEnd, 3);
        }
      } else if (e === v.Slash) {
        this.state = b.BeforeClosingTagName;
      } else {
        this.state = b.Text;
        this.stateText(e);
      }
    }
    stateInTagName(e) {
      if (np(e)) {
        this.cbs.onopentagname(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.state = b.BeforeAttributeName;
        this.stateBeforeAttributeName(e);
      }
    }
    stateBeforeClosingTagName(e) {
      if (!nh(e)) {
        if (e === v.Gt) {
          this.state = b.Text;
        } else {
          this.state = this.isTagStartChar(e) ? b.InClosingTagName : b.InSpecialComment;
          this.sectionStart = this.index;
        }
      }
    }
    stateInClosingTagName(e) {
      if (e === v.Gt || nh(e)) {
        this.cbs.onclosetag(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.state = b.AfterClosingTagName;
        this.stateAfterClosingTagName(e);
      }
    }
    stateAfterClosingTagName(e) {
      if (e === v.Gt || this.fastForwardTo(v.Gt)) {
        this.state = b.Text;
        this.baseState = b.Text;
        this.sectionStart = this.index + 1;
      }
    }
    stateBeforeAttributeName(e) {
      if (e === v.Gt) {
        this.cbs.onopentagend(this.index);
        if (this.isSpecial) {
          this.state = b.InSpecialTag;
          this.sequenceIndex = 0;
        } else {
          this.state = b.Text;
        }
        this.baseState = this.state;
        this.sectionStart = this.index + 1;
      } else if (e === v.Slash) {
        this.state = b.InSelfClosingTag;
      } else if (!nh(e)) {
        this.state = b.InAttributeName;
        this.sectionStart = this.index;
      }
    }
    stateInSelfClosingTag(e) {
      if (e === v.Gt) {
        this.cbs.onselfclosingtag(this.index);
        this.state = b.Text;
        this.baseState = b.Text;
        this.sectionStart = this.index + 1;
        this.isSpecial = false;
      } else if (!nh(e)) {
        this.state = b.BeforeAttributeName;
        this.stateBeforeAttributeName(e);
      }
    }
    stateInAttributeName(e) {
      if (e === v.Eq || np(e)) {
        this.cbs.onattribname(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.state = b.AfterAttributeName;
        this.stateAfterAttributeName(e);
      }
    }
    stateAfterAttributeName(e) {
      if (e === v.Eq) {
        this.state = b.BeforeAttributeValue;
      } else if (e === v.Slash || e === v.Gt) {
        this.cbs.onattribend(y.NoValue, this.index);
        this.state = b.BeforeAttributeName;
        this.stateBeforeAttributeName(e);
      } else if (!nh(e)) {
        this.cbs.onattribend(y.NoValue, this.index);
        this.state = b.InAttributeName;
        this.sectionStart = this.index;
      }
    }
    stateBeforeAttributeValue(e) {
      if (e === v.DoubleQuote) {
        this.state = b.InAttributeValueDq;
        this.sectionStart = this.index + 1;
      } else if (e === v.SingleQuote) {
        this.state = b.InAttributeValueSq;
        this.sectionStart = this.index + 1;
      } else if (!nh(e)) {
        this.sectionStart = this.index;
        this.state = b.InAttributeValueNq;
        this.stateInAttributeValueNoQuotes(e);
      }
    }
    handleInAttributeValue(e, t) {
      if (e === t || !this.decodeEntities && this.fastForwardTo(t)) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.cbs.onattribend(t === v.DoubleQuote ? y.Double : y.Single, this.index);
        this.state = b.BeforeAttributeName;
      } else if (this.decodeEntities && e === v.Amp) {
        this.baseState = this.state;
        this.state = b.BeforeEntity;
      }
    }
    stateInAttributeValueDoubleQuotes(e) {
      this.handleInAttributeValue(e, v.DoubleQuote);
    }
    stateInAttributeValueSingleQuotes(e) {
      this.handleInAttributeValue(e, v.SingleQuote);
    }
    stateInAttributeValueNoQuotes(e) {
      if (nh(e) || e === v.Gt) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.cbs.onattribend(y.Unquoted, this.index);
        this.state = b.BeforeAttributeName;
        this.stateBeforeAttributeName(e);
      } else if (this.decodeEntities && e === v.Amp) {
        this.baseState = this.state;
        this.state = b.BeforeEntity;
      }
    }
    stateBeforeDeclaration(e) {
      if (e === v.OpeningSquareBracket) {
        this.state = b.CDATASequence;
        this.sequenceIndex = 0;
      } else {
        this.state = e === v.Dash ? b.BeforeComment : b.InDeclaration;
      }
    }
    stateInDeclaration(e) {
      if (e === v.Gt || this.fastForwardTo(v.Gt)) {
        this.cbs.ondeclaration(this.sectionStart, this.index);
        this.state = b.Text;
        this.sectionStart = this.index + 1;
      }
    }
    stateInProcessingInstruction(e) {
      if (e === v.Gt || this.fastForwardTo(v.Gt)) {
        this.cbs.onprocessinginstruction(this.sectionStart, this.index);
        this.state = b.Text;
        this.sectionStart = this.index + 1;
      }
    }
    stateBeforeComment(e) {
      if (e === v.Dash) {
        this.state = b.InCommentLike;
        this.currentSequence = nm.CommentEnd;
        this.sequenceIndex = 2;
        this.sectionStart = this.index + 1;
      } else {
        this.state = b.InDeclaration;
      }
    }
    stateInSpecialComment(e) {
      if (e === v.Gt || this.fastForwardTo(v.Gt)) {
        this.cbs.oncomment(this.sectionStart, this.index, 0);
        this.state = b.Text;
        this.sectionStart = this.index + 1;
      }
    }
    stateBeforeSpecialS(e) {
      let t = e | 32;
      if (t === nm.ScriptEnd[3]) {
        this.startSpecial(nm.ScriptEnd, 4);
      } else if (t === nm.StyleEnd[3]) {
        this.startSpecial(nm.StyleEnd, 4);
      } else {
        this.state = b.InTagName;
        this.stateInTagName(e);
      }
    }
    stateBeforeEntity(e) {
      this.entityExcess = 1;
      this.entityResult = 0;
      if (e === v.Number) {
        this.state = b.BeforeNumericEntity;
      } else if (e !== v.Amp) {
        this.trieIndex = 0;
        this.trieCurrent = this.entityTrie[0];
        this.state = b.InNamedEntity;
        this.stateInNamedEntity(e);
      }
    }
    stateInNamedEntity(e) {
      this.entityExcess += 1;
      this.trieIndex = htmlEntityDecoderUtils.traverseDecodeTree(this.entityTrie, this.trieCurrent, this.trieIndex + 1, e);
      if (this.trieIndex < 0) {
        this.emitNamedEntity();
        this.index--;
        return;
      }
      this.trieCurrent = this.entityTrie[this.trieIndex];
      let t = this.trieCurrent & htmlEntityDecoderUtils.decodeTreeFlags.VALUE_LENGTH;
      if (t) {
        let r = (t >> 14) - 1;
        if (this.allowLegacyEntity() || e === v.Semi) {
          let e = this.index - this.entityExcess + 1;
          if (e > this.sectionStart) {
            this.emitPartial(this.sectionStart, e);
          }
          this.entityResult = this.trieIndex;
          this.trieIndex += r;
          this.entityExcess = 0;
          this.sectionStart = this.index + 1;
          if (r === 0) {
            this.emitNamedEntity();
          }
        } else {
          this.trieIndex += r;
        }
      }
    }
    emitNamedEntity() {
      this.state = this.baseState;
      if (this.entityResult !== 0) {
        switch ((this.entityTrie[this.entityResult] & htmlEntityDecoderUtils.decodeTreeFlags.VALUE_LENGTH) >> 14) {
          case 1:
            this.emitCodePoint(this.entityTrie[this.entityResult] & ~htmlEntityDecoderUtils.decodeTreeFlags.VALUE_LENGTH);
            break;
          case 2:
            this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
            break;
          case 3:
            this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
            this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
        }
      }
    }
    stateBeforeNumericEntity(e) {
      if ((e | 32) === v.LowerX) {
        this.entityExcess++;
        this.state = b.InHexEntity;
      } else {
        this.state = b.InNumericEntity;
        this.stateInNumericEntity(e);
      }
    }
    emitNumericEntity(e) {
      let t = this.index - this.entityExcess - 1;
      if (t + 2 + Number(this.state === b.InHexEntity) !== this.index) {
        if (t > this.sectionStart) {
          this.emitPartial(this.sectionStart, t);
        }
        this.sectionStart = this.index + Number(e);
        this.emitCodePoint(htmlEntityDecoderUtils.validateCodePoint(this.entityResult));
      }
      this.state = this.baseState;
    }
    stateInNumericEntity(e) {
      if (e === v.Semi) {
        this.emitNumericEntity(true);
      } else if (nd(e)) {
        this.entityResult = this.entityResult * 10 + (e - v.Zero);
        this.entityExcess++;
      } else {
        if (this.allowLegacyEntity()) {
          this.emitNumericEntity(false);
        } else {
          this.state = this.baseState;
        }
        this.index--;
      }
    }
    stateInHexEntity(e) {
      if (e === v.Semi) {
        this.emitNumericEntity(true);
      } else if (nd(e)) {
        this.entityResult = this.entityResult * 16 + (e - v.Zero);
        this.entityExcess++;
      } else if (e >= v.UpperA && e <= v.UpperF || e >= v.LowerA && e <= v.LowerF) {
        this.entityResult = this.entityResult * 16 + ((e | 32) - v.LowerA + 10);
        this.entityExcess++;
      } else {
        if (this.allowLegacyEntity()) {
          this.emitNumericEntity(false);
        } else {
          this.state = this.baseState;
        }
        this.index--;
      }
    }
    allowLegacyEntity() {
      return !this.xmlMode && (this.baseState === b.Text || this.baseState === b.InSpecialTag);
    }
    cleanup() {
      if (this.running && this.sectionStart !== this.index) {
        if (this.state === b.Text || this.state === b.InSpecialTag && this.sequenceIndex === 0) {
          this.cbs.ontext(this.sectionStart, this.index);
          this.sectionStart = this.index;
        } else if (this.state === b.InAttributeValueDq || this.state === b.InAttributeValueSq || this.state === b.InAttributeValueNq) {
          this.cbs.onattribdata(this.sectionStart, this.index);
          this.sectionStart = this.index;
        }
      }
    }
    shouldContinue() {
      return this.index < this.buffer.length + this.offset && this.running;
    }
    parse() {
      while (this.shouldContinue()) {
        let e = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
          case b.Text:
            this.stateText(e);
            break;
          case b.SpecialStartSequence:
            this.stateSpecialStartSequence(e);
            break;
          case b.InSpecialTag:
            this.stateInSpecialTag(e);
            break;
          case b.CDATASequence:
            this.stateCDATASequence(e);
            break;
          case b.InAttributeValueDq:
            this.stateInAttributeValueDoubleQuotes(e);
            break;
          case b.InAttributeName:
            this.stateInAttributeName(e);
            break;
          case b.InCommentLike:
            this.stateInCommentLike(e);
            break;
          case b.InSpecialComment:
            this.stateInSpecialComment(e);
            break;
          case b.BeforeAttributeName:
            this.stateBeforeAttributeName(e);
            break;
          case b.InTagName:
            this.stateInTagName(e);
            break;
          case b.InClosingTagName:
            this.stateInClosingTagName(e);
            break;
          case b.BeforeTagName:
            this.stateBeforeTagName(e);
            break;
          case b.AfterAttributeName:
            this.stateAfterAttributeName(e);
            break;
          case b.InAttributeValueSq:
            this.stateInAttributeValueSingleQuotes(e);
            break;
          case b.BeforeAttributeValue:
            this.stateBeforeAttributeValue(e);
            break;
          case b.BeforeClosingTagName:
            this.stateBeforeClosingTagName(e);
            break;
          case b.AfterClosingTagName:
            this.stateAfterClosingTagName(e);
            break;
          case b.BeforeSpecialS:
            this.stateBeforeSpecialS(e);
            break;
          case b.InAttributeValueNq:
            this.stateInAttributeValueNoQuotes(e);
            break;
          case b.InSelfClosingTag:
            this.stateInSelfClosingTag(e);
            break;
          case b.InDeclaration:
            this.stateInDeclaration(e);
            break;
          case b.BeforeDeclaration:
            this.stateBeforeDeclaration(e);
            break;
          case b.BeforeComment:
            this.stateBeforeComment(e);
            break;
          case b.InProcessingInstruction:
            this.stateInProcessingInstruction(e);
            break;
          case b.InNamedEntity:
            this.stateInNamedEntity(e);
            break;
          case b.BeforeEntity:
            this.stateBeforeEntity(e);
            break;
          case b.InHexEntity:
            this.stateInHexEntity(e);
            break;
          case b.InNumericEntity:
            this.stateInNumericEntity(e);
            break;
          default:
            this.stateBeforeNumericEntity(e);
        }
        this.index++;
      }
      this.cleanup();
    }
    finish() {
      if (this.state === b.InNamedEntity) {
        this.emitNamedEntity();
      }
      if (this.sectionStart < this.index) {
        this.handleTrailingData();
      }
      this.cbs.onend();
    }
    handleTrailingData() {
      let e = this.buffer.length + this.offset;
      if (this.state === b.InCommentLike) {
        if (this.currentSequence === nm.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, e, 0);
        } else {
          this.cbs.oncomment(this.sectionStart, e, 0);
        }
      } else if (this.state === b.InNumericEntity && this.allowLegacyEntity()) {
        this.emitNumericEntity(false);
      } else if (this.state === b.InHexEntity && this.allowLegacyEntity()) {
        this.emitNumericEntity(false);
      } else if (this.state !== b.InTagName && this.state !== b.BeforeAttributeName && this.state !== b.BeforeAttributeValue && this.state !== b.AfterAttributeName && this.state !== b.InAttributeName && this.state !== b.InAttributeValueSq && this.state !== b.InAttributeValueDq && this.state !== b.InAttributeValueNq && this.state !== b.InClosingTagName) {
        this.cbs.ontext(this.sectionStart, e);
      }
    }
    emitPartial(e, t) {
      if (this.baseState !== b.Text && this.baseState !== b.InSpecialTag) {
        this.cbs.onattribdata(e, t);
      } else {
        this.cbs.ontext(e, t);
      }
    }
    emitCodePoint(e) {
      if (this.baseState !== b.Text && this.baseState !== b.InSpecialTag) {
        this.cbs.onattribentity(e);
      } else {
        this.cbs.ontextentity(e);
      }
    }
  }
  let ng = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]);
  let nv = new Set(["p"]);
  let nb = new Set(["thead", "tbody"]);
  let ny = new Set(["dd", "dt"]);
  let nx = new Set(["rt", "rp"]);
  let nw = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", nv], ["h1", nv], ["h2", nv], ["h3", nv], ["h4", nv], ["h5", nv], ["h6", nv], ["select", ng], ["input", ng], ["output", ng], ["button", ng], ["datalist", ng], ["textarea", ng], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", ny], ["dt", ny], ["address", nv], ["article", nv], ["aside", nv], ["blockquote", nv], ["details", nv], ["div", nv], ["dl", nv], ["fieldset", nv], ["figcaption", nv], ["figure", nv], ["footer", nv], ["form", nv], ["header", nv], ["hr", nv], ["main", nv], ["nav", nv], ["ol", nv], ["pre", nv], ["section", nv], ["table", nv], ["ul", nv], ["rt", nx], ["rp", nx], ["tbody", nb], ["tfoot", nb]]);
  let nk = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
  let nS = new Set(["math", "svg"]);
  let nA = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]);
  let nT = /\s|\//;
  class nC {
    constructor(e, t = {}) {
      var a;
      var o;
      this.options = t;
      this.startIndex = 0;
      this.endIndex = 0;
      this.openTagStart = 0;
      this.tagname = "";
      this.attribname = "";
      this.attribvalue = "";
      this.attribs = null;
      this.stack = [];
      this.foreignContext = [];
      this.buffers = [];
      this.bufferOffset = 0;
      this.writeIndex = 0;
      this.ended = false;
      this.cbs = e ?? {};
      this.lowerCaseTagNames = t.lowerCaseTags ?? !t.xmlMode;
      this.lowerCaseAttributeNames = t.lowerCaseAttributeNames ?? !t.xmlMode;
      this.tokenizer = new (t.Tokenizer ?? nf)(this.options, this);
      if ((o = (a = this.cbs).onparserinit) !== null && o !== undefined) {
        o.call(a, this);
      }
    }
    ontext(e, t) {
      var r;
      var n;
      let i = this.getSlice(e, t);
      this.endIndex = t - 1;
      if ((n = (r = this.cbs).ontext) !== null && n !== undefined) {
        n.call(r, i);
      }
      this.startIndex = t;
    }
    ontextentity(e) {
      var t;
      var r;
      let n = this.tokenizer.getSectionStart();
      this.endIndex = n - 1;
      if ((r = (t = this.cbs).ontext) !== null && r !== undefined) {
        r.call(t, htmlEntityDecoderUtils.fromCodePoint(e));
      }
      this.startIndex = n;
    }
    isVoidElement(e) {
      return !this.options.xmlMode && nk.has(e);
    }
    onopentagname(e, t) {
      this.endIndex = t;
      let r = this.getSlice(e, t);
      if (this.lowerCaseTagNames) {
        r = r.toLowerCase();
      }
      this.emitOpenTag(r);
    }
    emitOpenTag(e) {
      var t;
      var r;
      var n;
      var i;
      this.openTagStart = this.startIndex;
      this.tagname = e;
      let a = !this.options.xmlMode && nw.get(e);
      if (a) {
        while (this.stack.length > 0 && a.has(this.stack[this.stack.length - 1])) {
          let e = this.stack.pop();
          if ((r = (t = this.cbs).onclosetag) !== null && r !== undefined) {
            r.call(t, e, true);
          }
        }
      }
      if (!this.isVoidElement(e)) {
        this.stack.push(e);
        if (nS.has(e)) {
          this.foreignContext.push(true);
        } else if (nA.has(e)) {
          this.foreignContext.push(false);
        }
      }
      if ((i = (n = this.cbs).onopentagname) !== null && i !== undefined) {
        i.call(n, e);
      }
      if (this.cbs.onopentag) {
        this.attribs = {};
      }
    }
    endOpenTag(e) {
      var t;
      var r;
      this.startIndex = this.openTagStart;
      if (this.attribs) {
        if ((r = (t = this.cbs).onopentag) !== null && r !== undefined) {
          r.call(t, this.tagname, this.attribs, e);
        }
        this.attribs = null;
      }
      if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
        this.cbs.onclosetag(this.tagname, true);
      }
      this.tagname = "";
    }
    onopentagend(e) {
      this.endIndex = e;
      this.endOpenTag(false);
      this.startIndex = e + 1;
    }
    onclosetag(e, t) {
      var r;
      var n;
      var i;
      var a;
      var o;
      var s;
      this.endIndex = t;
      let l = this.getSlice(e, t);
      if (this.lowerCaseTagNames) {
        l = l.toLowerCase();
      }
      if (nS.has(l) || nA.has(l)) {
        this.foreignContext.pop();
      }
      if (this.isVoidElement(l)) {
        if (!this.options.xmlMode && l === "br") {
          if ((n = (r = this.cbs).onopentagname) !== null && n !== undefined) {
            n.call(r, "br");
          }
          if ((a = (i = this.cbs).onopentag) !== null && a !== undefined) {
            a.call(i, "br", {}, true);
          }
          if ((s = (o = this.cbs).onclosetag) !== null && s !== undefined) {
            s.call(o, "br", false);
          }
        }
      } else {
        let e = this.stack.lastIndexOf(l);
        if (e !== -1) {
          if (this.cbs.onclosetag) {
            let t = this.stack.length - e;
            while (t--) {
              this.cbs.onclosetag(this.stack.pop(), t !== 0);
            }
          } else {
            this.stack.length = e;
          }
        } else if (!this.options.xmlMode && l === "p") {
          this.emitOpenTag("p");
          this.closeCurrentTag(true);
        }
      }
      this.startIndex = t + 1;
    }
    onselfclosingtag(e) {
      this.endIndex = e;
      if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
        this.closeCurrentTag(false);
        this.startIndex = e + 1;
      } else {
        this.onopentagend(e);
      }
    }
    closeCurrentTag(e) {
      var t;
      var r;
      let n = this.tagname;
      this.endOpenTag(e);
      if (this.stack[this.stack.length - 1] === n) {
        if ((r = (t = this.cbs).onclosetag) !== null && r !== undefined) {
          r.call(t, n, !e);
        }
        this.stack.pop();
      }
    }
    onattribname(e, t) {
      this.startIndex = e;
      let r = this.getSlice(e, t);
      this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r;
    }
    onattribdata(e, t) {
      this.attribvalue += this.getSlice(e, t);
    }
    onattribentity(e) {
      this.attribvalue += htmlEntityDecoderUtils.fromCodePoint(e);
    }
    onattribend(e, t) {
      var r;
      var n;
      this.endIndex = t;
      if ((n = (r = this.cbs).onattribute) !== null && n !== undefined) {
        n.call(r, this.attribname, this.attribvalue, e === y.Double ? "\"" : e === y.Single ? "'" : e === y.NoValue ? undefined : null);
      }
      if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
        this.attribs[this.attribname] = this.attribvalue;
      }
      this.attribvalue = "";
    }
    getInstructionName(e) {
      let t = e.search(nT);
      let r = t < 0 ? e : e.substr(0, t);
      if (this.lowerCaseTagNames) {
        r = r.toLowerCase();
      }
      return r;
    }
    ondeclaration(e, t) {
      this.endIndex = t;
      let r = this.getSlice(e, t);
      if (this.cbs.onprocessinginstruction) {
        let e = this.getInstructionName(r);
        this.cbs.onprocessinginstruction(`!${e}`, `!${r}`);
      }
      this.startIndex = t + 1;
    }
    onprocessinginstruction(e, t) {
      this.endIndex = t;
      let r = this.getSlice(e, t);
      if (this.cbs.onprocessinginstruction) {
        let e = this.getInstructionName(r);
        this.cbs.onprocessinginstruction(`?${e}`, `?${r}`);
      }
      this.startIndex = t + 1;
    }
    oncomment(e, t, r) {
      var n;
      var i;
      var a;
      var o;
      this.endIndex = t;
      if ((i = (n = this.cbs).oncomment) !== null && i !== undefined) {
        i.call(n, this.getSlice(e, t - r));
      }
      if ((o = (a = this.cbs).oncommentend) !== null && o !== undefined) {
        o.call(a);
      }
      this.startIndex = t + 1;
    }
    oncdata(e, t, r) {
      var n;
      var i;
      var a;
      var o;
      var s;
      var l;
      var c;
      var u;
      var h;
      var p;
      this.endIndex = t;
      let d = this.getSlice(e, t - r);
      if (this.options.xmlMode || this.options.recognizeCDATA) {
        if ((i = (n = this.cbs).oncdatastart) !== null && i !== undefined) {
          i.call(n);
        }
        if ((o = (a = this.cbs).ontext) !== null && o !== undefined) {
          o.call(a, d);
        }
        if ((l = (s = this.cbs).oncdataend) !== null && l !== undefined) {
          l.call(s);
        }
      } else {
        if ((u = (c = this.cbs).oncomment) !== null && u !== undefined) {
          u.call(c, `[CDATA[${d}]]`);
        }
        if ((p = (h = this.cbs).oncommentend) !== null && p !== undefined) {
          p.call(h);
        }
      }
      this.startIndex = t + 1;
    }
    onend() {
      var e;
      var t;
      if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (let e = this.stack.length; e > 0; this.cbs.onclosetag(this.stack[--e], true));
      }
      if ((t = (e = this.cbs).onend) !== null && t !== undefined) {
        t.call(e);
      }
    }
    reset() {
      var e;
      var t;
      var r;
      var n;
      if ((t = (e = this.cbs).onreset) !== null && t !== undefined) {
        t.call(e);
      }
      this.tokenizer.reset();
      this.tagname = "";
      this.attribname = "";
      this.attribs = null;
      this.stack.length = 0;
      this.startIndex = 0;
      this.endIndex = 0;
      if ((n = (r = this.cbs).onparserinit) !== null && n !== undefined) {
        n.call(r, this);
      }
      this.buffers.length = 0;
      this.bufferOffset = 0;
      this.writeIndex = 0;
      this.ended = false;
    }
    parseComplete(e) {
      this.reset();
      this.end(e);
    }
    getSlice(e, t) {
      while (e - this.bufferOffset >= this.buffers[0].length) {
        this.shiftBuffer();
      }
      let r = this.buffers[0].slice(e - this.bufferOffset, t - this.bufferOffset);
      while (t - this.bufferOffset > this.buffers[0].length) {
        this.shiftBuffer();
        r += this.buffers[0].slice(0, t - this.bufferOffset);
      }
      return r;
    }
    shiftBuffer() {
      this.bufferOffset += this.buffers[0].length;
      this.writeIndex--;
      this.buffers.shift();
    }
    write(e) {
      var t;
      var r;
      if (this.ended) {
        if ((r = (t = this.cbs).onerror) !== null && r !== undefined) {
          r.call(t, Error(".write() after done!"));
        }
        return;
      }
      this.buffers.push(e);
      if (this.tokenizer.running) {
        this.tokenizer.write(e);
        this.writeIndex++;
      }
    }
    end(e) {
      var t;
      var r;
      if (this.ended) {
        if ((r = (t = this.cbs).onerror) !== null && r !== undefined) {
          r.call(t, Error(".end() after done!"));
        }
        return;
      }
      if (e) {
        this.write(e);
      }
      this.ended = true;
      this.tokenizer.end();
    }
    pause() {
      this.tokenizer.pause();
    }
    resume() {
      for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;) {
        this.tokenizer.write(this.buffers[this.writeIndex++]);
      }
      if (this.ended) {
        this.tokenizer.end();
      }
    }
    parseChunk(e) {
      this.write(e);
    }
    done(e) {
      this.end(e);
    }
  }
  u = (e, t, r, n) => t.xmlMode || t._useHtmlParser2 ? function (e, t) {
    let r = new astNodeDefinitions.Parser(undefined, t);
    new nC(r, t).end(e);
    return r.root;
  }(e, t) : function (e, t, r, n) {
    let i = {
      scriptingEnabled: typeof t.scriptingEnabled != "boolean" || t.scriptingEnabled,
      treeAdapter: nl,
      sourceCodeLocationInfo: t.sourceCodeLocationInfo
    };
    if (r) {
      return htmlParserCore.parse(e, i);
    } else {
      return htmlParserCore.parseFragment(n, e, i);
    }
  }(e, t, r, n);
  h = function (e, t, r, n) {
    if (rF !== undefined && rF.isBuffer(e)) {
      e = e.toString();
    }
    if (typeof e == "string") {
      return u(e, t, r, n);
    }
    let i = e;
    if (!Array.isArray(i) && astNodeDefinitions.isRoot(i)) {
      return i;
    }
    let a = new astNodeDefinitions.RootNode([]);
    rL(i, a);
    return a;
  };
  p = (e, t) => t.xmlMode || t._useHtmlParser2 ? astToHtmlSerializer.serializeAst(e, t) : function (e) {
    let t = "length" in e ? e : [e];
    for (let e = 0; e < t.length; e += 1) {
      let r = t[e];
      if (astNodeDefinitions.isRoot(r)) {
        Array.prototype.splice.call(t, e, 1, ...r.children);
      }
    }
    let r = "";
    for (let e = 0; e < t.length; e += 1) {
      let n = t[e];
      r += htmlParserCore.serializeOuter(n, nc);
    }
    return r;
  }(e);
  let nM = function e(t, r, n = true) {
    if (t == null) {
      throw Error("cheerio.load() expects a string");
    }
    let i = {
      ...E,
      ..._(r)
    };
    let a = h(t, i, n, null);
    class o extends na {
      _make(e, t) {
        let r = s(e, t);
        r.prevObject = this;
        return r;
      }
      _parse(e, t, r, n) {
        return h(e, t, r, n);
      }
      _render(e) {
        return p(e, this.options);
      }
    }
    function s(e, t, r = a, n) {
      var l;
      if (e && eq(e)) {
        return e;
      }
      let c = {
        ...i,
        ..._(n)
      };
      let u = typeof r == "string" ? [h(r, c, false, null)] : "length" in r ? r : [r];
      let p = eq(u) ? u : new o(u, null, c);
      p._root = p;
      if (!e) {
        return new o(undefined, p, c);
      }
      let d = typeof e == "string" && eL(e) ? h(e, c, false, null).children : (l = e).name || l.type === "root" || l.type === "text" || l.type === "comment" ? [e] : Array.isArray(e) ? e : undefined;
      let m = new o(d, p, c);
      if (d) {
        return m;
      }
      if (typeof e != "string") {
        throw Error("Unexpected type of selector");
      }
      let f = e;
      let g = t ? typeof t == "string" ? eL(t) ? new o([h(t, c, false, null)], p, c) : (f = `${t} ${f}`, p) : eq(t) ? t : new o(Array.isArray(t) ? t : [t], p, c) : p;
      if (g) {
        return g.find(f);
      } else {
        return m;
      }
    }
    Object.assign(s, k, {
      load: e,
      _root: a,
      _options: i,
      fn: o.prototype,
      prototype: o.prototype
    });
    return s;
  };
  nM([]);
  let {
    contains: nN
  } = k;
  let {
    merge: nz
  } = k;
  let {
    parseHTML: nE
  } = k;
  let {
    root: nI
  } = k;
  let n_ = {
    selector: "h1,h2,h3,h4,h5,h6,ul,ol,li,table,pre,p>img:only-child",
    selectorRules: {
      "div,p": ({
        $node: e
      }) => ({
        queue: e.children()
      }),
      "h1,h2,h3,h4,h5,h6": ({
        $node: e,
        getContent: t
      }) => ({
        ...t(e.contents())
      }),
      "ul,ol": ({
        $node: e
      }) => ({
        queue: e.children(),
        nesting: true
      }),
      li: ({
        $node: e,
        getContent: t
      }) => {
        let r;
        let n = e.children().filter("ul,ol");
        if (e.contents().first().is("div,p")) {
          r = t(e.children().first());
        } else {
          let i = e.contents();
          let a = i.index(n);
          if (a >= 0) {
            i = i.slice(0, a);
          }
          r = t(i);
        }
        return {
          queue: n,
          nesting: true,
          ...r
        };
      },
      "table,pre,p>img:only-child": ({
        $node: e,
        getContent: t
      }) => ({
        ...t(e)
      })
    }
  };
  let nR = "markmap: ";
  let nB = /^h[1-6]$/;
  let nq = /^[uo]l$/;
  let nO = /^li$/;
  function nF(e) {
    (x = x || document.createElement("textarea")).innerHTML = "&" + e + ";";
    return x.value;
  }
  var nL = Object.prototype.hasOwnProperty;
  function n$(e) {
    var t = [].slice.call(arguments, 1);
    t.forEach(function (t) {
      if (t) {
        if (typeof t != "object") {
          throw TypeError(t + "must be object");
        }
        Object.keys(t).forEach(function (r) {
          e[r] = t[r];
        });
      }
    });
    return e;
  }
  var nD = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  function nP(e) {
    if (e.indexOf("\\") < 0) {
      return e;
    } else {
      return e.replace(nD, "$1");
    }
  }
  function nH(e) {
    return (!(e >= 55296) || !(e <= 57343)) && (!(e >= 64976) || !(e <= 65007)) && (e & 65535) != 65535 && (e & 65535) != 65534 && (!(e >= 0) || !(e <= 8)) && e !== 11 && (!(e >= 14) || !(e <= 31)) && (!(e >= 127) || !(e <= 159)) && !(e > 1114111) && true;
  }
  function nj(e) {
    if (e > 65535) {
      return String.fromCharCode(55296 + ((e -= 65536) >> 10), 56320 + (e & 1023));
    } else {
      return String.fromCharCode(e);
    }
  }
  var nV = /&([a-z#][a-z0-9]{1,31});/gi;
  var nW = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
  function nU(e, t) {
    var r = 0;
    var n = nF(t);
    if (t !== n) {
      return n;
    } else if (t.charCodeAt(0) === 35 && nW.test(t) && nH(r = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10))) {
      return nj(r);
    } else {
      return e;
    }
  }
  function nX(e) {
    if (e.indexOf("&") < 0) {
      return e;
    } else {
      return e.replace(nV, nU);
    }
  }
  var nZ = /[&<>"]/;
  var nG = /[&<>"]/g;
  var nY = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;"
  };
  function nJ(e) {
    return nY[e];
  }
  function nK(e) {
    if (nZ.test(e)) {
      return e.replace(nG, nJ);
    } else {
      return e;
    }
  }
  var nQ = {
    blockquote_open: function () {
      return "<blockquote>\n";
    }
  };
  nQ.blockquote_close = function (e, t) {
    return "</blockquote>" + n0(e, t);
  };
  nQ.code = function (e, t) {
    if (e[t].block) {
      return "<pre><code>" + nK(e[t].content) + "</code></pre>" + n0(e, t);
    } else {
      return "<code>" + nK(e[t].content) + "</code>";
    }
  };
  nQ.fence = function (e, t, r, n, i) {
    var a;
    var o;
    var s;
    var l;
    var c;
    var u = e[t];
    var h = "";
    var p = r.langPrefix;
    var d = "";
    if (u.params) {
      c = (l = u.params.split(/\s+/g)).join(" ");
      a = i.rules.fence_custom;
      o = l[0];
      if (a && nL.call(a, o)) {
        return i.rules.fence_custom[l[0]](e, t, r, n, i);
      }
      h = " class=\"" + p + nK(nX(nP(c))) + "\"";
    }
    return "<pre><code" + h + ">" + (r.highlight && r.highlight.apply(r.highlight, [u.content].concat(l)) || nK(u.content)) + "</code></pre>" + n0(e, t);
  };
  nQ.fence_custom = {};
  nQ.heading_open = function (e, t) {
    return "<h" + e[t].hLevel + ">";
  };
  nQ.heading_close = function (e, t) {
    return "</h" + e[t].hLevel + ">\n";
  };
  nQ.hr = function (e, t, r) {
    return (r.xhtmlOut ? "<hr />" : "<hr>") + n0(e, t);
  };
  nQ.bullet_list_open = function () {
    return "<ul>\n";
  };
  nQ.bullet_list_close = function (e, t) {
    return "</ul>" + n0(e, t);
  };
  nQ.list_item_open = function () {
    return "<li>";
  };
  nQ.list_item_close = function () {
    return "</li>\n";
  };
  nQ.ordered_list_open = function (e, t) {
    var r = e[t];
    return "<ol" + (r.order > 1 ? " start=\"" + r.order + "\"" : "") + ">\n";
  };
  nQ.ordered_list_close = function (e, t) {
    return "</ol>" + n0(e, t);
  };
  nQ.paragraph_open = function (e, t) {
    if (e[t].tight) {
      return "";
    } else {
      return "<p>";
    }
  };
  nQ.paragraph_close = function (e, t) {
    var r = !e[t].tight || !t || e[t - 1].type !== "inline" || !!e[t - 1].content;
    return (e[t].tight ? "" : "</p>") + (r ? n0(e, t) : "");
  };
  nQ.link_open = function (e, t, r) {
    var n = e[t].title ? " title=\"" + nK(nX(e[t].title)) + "\"" : "";
    var i = r.linkTarget ? " target=\"" + r.linkTarget + "\"" : "";
    return "<a href=\"" + nK(e[t].href) + "\"" + n + i + ">";
  };
  nQ.link_close = function () {
    return "</a>";
  };
  nQ.image = function (e, t, r) {
    var n = " src=\"" + nK(e[t].src) + "\"";
    var i = e[t].title ? " title=\"" + nK(nX(e[t].title)) + "\"" : "";
    return "<img" + n + (" alt=\"" + (e[t].alt ? nK(nX(nP(e[t].alt))) : "")) + "\"" + i + (r.xhtmlOut ? " /" : "") + ">";
  };
  nQ.table_open = function () {
    return "<table>\n";
  };
  nQ.table_close = function () {
    return "</table>\n";
  };
  nQ.thead_open = function () {
    return "<thead>\n";
  };
  nQ.thead_close = function () {
    return "</thead>\n";
  };
  nQ.tbody_open = function () {
    return "<tbody>\n";
  };
  nQ.tbody_close = function () {
    return "</tbody>\n";
  };
  nQ.tr_open = function () {
    return "<tr>";
  };
  nQ.tr_close = function () {
    return "</tr>\n";
  };
  nQ.th_open = function (e, t) {
    var r = e[t];
    return "<th" + (r.align ? " style=\"text-align:" + r.align + "\"" : "") + ">";
  };
  nQ.th_close = function () {
    return "</th>";
  };
  nQ.td_open = function (e, t) {
    var r = e[t];
    return "<td" + (r.align ? " style=\"text-align:" + r.align + "\"" : "") + ">";
  };
  nQ.td_close = function () {
    return "</td>";
  };
  nQ.strong_open = function () {
    return "<strong>";
  };
  nQ.strong_close = function () {
    return "</strong>";
  };
  nQ.em_open = function () {
    return "<em>";
  };
  nQ.em_close = function () {
    return "</em>";
  };
  nQ.del_open = function () {
    return "<del>";
  };
  nQ.del_close = function () {
    return "</del>";
  };
  nQ.ins_open = function () {
    return "<ins>";
  };
  nQ.ins_close = function () {
    return "</ins>";
  };
  nQ.mark_open = function () {
    return "<mark>";
  };
  nQ.mark_close = function () {
    return "</mark>";
  };
  nQ.sub = function (e, t) {
    return "<sub>" + nK(e[t].content) + "</sub>";
  };
  nQ.sup = function (e, t) {
    return "<sup>" + nK(e[t].content) + "</sup>";
  };
  nQ.hardbreak = function (e, t, r) {
    if (r.xhtmlOut) {
      return "<br />\n";
    } else {
      return "<br>\n";
    }
  };
  nQ.softbreak = function (e, t, r) {
    if (r.breaks) {
      if (r.xhtmlOut) {
        return "<br />\n";
      } else {
        return "<br>\n";
      }
    } else {
      return "\n";
    }
  };
  nQ.text = function (e, t) {
    return nK(e[t].content);
  };
  nQ.htmlblock = function (e, t) {
    return e[t].content;
  };
  nQ.htmltag = function (e, t) {
    return e[t].content;
  };
  nQ.abbr_open = function (e, t) {
    return "<abbr title=\"" + nK(nX(e[t].title)) + "\">";
  };
  nQ.abbr_close = function () {
    return "</abbr>";
  };
  nQ.footnote_ref = function (e, t) {
    var r = Number(e[t].id + 1).toString();
    var n = "fnref" + r;
    if (e[t].subId > 0) {
      n += ":" + e[t].subId;
    }
    return "<sup class=\"footnote-ref\"><a href=\"#fn" + r + "\" id=\"" + n + "\">[" + r + "]</a></sup>";
  };
  nQ.footnote_block_open = function (e, t, r) {
    return (r.xhtmlOut ? "<hr class=\"footnotes-sep\" />\n" : "<hr class=\"footnotes-sep\">\n") + "<section class=\"footnotes\">\n<ol class=\"footnotes-list\">\n";
  };
  nQ.footnote_block_close = function () {
    return "</ol>\n</section>\n";
  };
  nQ.footnote_open = function (e, t) {
    return "<li id=\"fn" + Number(e[t].id + 1).toString() + "\"  class=\"footnote-item\">";
  };
  nQ.footnote_close = function () {
    return "</li>\n";
  };
  nQ.footnote_anchor = function (e, t) {
    var r = "fnref" + Number(e[t].id + 1).toString();
    if (e[t].subId > 0) {
      r += ":" + e[t].subId;
    }
    return " <a href=\"#" + r + "\" class=\"footnote-backref\">↩</a>";
  };
  nQ.dl_open = function () {
    return "<dl>\n";
  };
  nQ.dt_open = function () {
    return "<dt>";
  };
  nQ.dd_open = function () {
    return "<dd>";
  };
  nQ.dl_close = function () {
    return "</dl>\n";
  };
  nQ.dt_close = function () {
    return "</dt>\n";
  };
  nQ.dd_close = function () {
    return "</dd>\n";
  };
  var n0 = nQ.getBreak = function (e, t) {
    if ((t = function e(t, r) {
      if (++r >= t.length - 2) {
        return r;
      } else if (t[r].type === "paragraph_open" && t[r].tight && t[r + 1].type === "inline" && t[r + 1].content.length === 0 && t[r + 2].type === "paragraph_close" && t[r + 2].tight) {
        return e(t, r + 2);
      } else {
        return r;
      }
    }(e, t)) < e.length && e[t].type === "list_item_close") {
      return "";
    } else {
      return "\n";
    }
  };
  function n1() {
    this.rules = n$({}, nQ);
    this.getBreak = nQ.getBreak;
  }
  function n4() {
    this.__rules__ = [];
    this.__cache__ = null;
  }
  function n5(e, t, r, n, i) {
    this.src = e;
    this.env = n;
    this.options = r;
    this.parser = t;
    this.tokens = i;
    this.pos = 0;
    this.posMax = this.src.length;
    this.level = 0;
    this.pending = "";
    this.pendingLevel = 0;
    this.cache = [];
    this.isInLabel = false;
    this.linkLevel = 0;
    this.linkContent = "";
    this.labelUnmatchedScopes = 0;
  }
  function n3(e, t) {
    var r;
    var n;
    var i;
    var a = -1;
    var o = e.posMax;
    var s = e.pos;
    var l = e.isInLabel;
    if (e.isInLabel) {
      return -1;
    }
    if (e.labelUnmatchedScopes) {
      e.labelUnmatchedScopes--;
      return -1;
    }
    e.pos = t + 1;
    e.isInLabel = true;
    r = 1;
    while (e.pos < o) {
      if ((i = e.src.charCodeAt(e.pos)) === 91) {
        r++;
      } else if (i === 93 && --r == 0) {
        n = true;
        break;
      }
      e.parser.skipToken(e);
    }
    if (n) {
      a = e.pos;
      e.labelUnmatchedScopes = 0;
    } else {
      e.labelUnmatchedScopes = r - 1;
    }
    e.pos = s;
    e.isInLabel = l;
    return a;
  }
  function n6(e) {
    var t = nX(e);
    try {
      t = decodeURI(t);
    } catch (e) {}
    return encodeURI(t);
  }
  function n7(e, t) {
    var r;
    var n;
    var i;
    var a = t;
    var o = e.posMax;
    if (e.src.charCodeAt(t) === 60) {
      for (t++; t < o && (r = e.src.charCodeAt(t)) !== 10;) {
        if (r === 62) {
          i = n6(nP(e.src.slice(a + 1, t)));
          if (!e.parser.validateLink(i)) {
            return false;
          }
          e.pos = t + 1;
          e.linkContent = i;
          return true;
        }
        if (r === 92 && t + 1 < o) {
          t += 2;
          continue;
        }
        t++;
      }
      return false;
    }
    for (n = 0; t < o && (r = e.src.charCodeAt(t)) !== 32 && !(r < 32) && r !== 127;) {
      if (r === 92 && t + 1 < o) {
        t += 2;
        continue;
      }
      if (r === 40 && ++n > 1 || r === 41 && --n < 0) {
        break;
      }
      t++;
    }
    return a !== t && (i = nP(e.src.slice(a, t)), !!e.parser.validateLink(i) && (e.linkContent = i, e.pos = t, true));
  }
  function n2(e, t) {
    var r;
    var n = t;
    var i = e.posMax;
    var a = e.src.charCodeAt(t);
    if (a !== 34 && a !== 39 && a !== 40) {
      return false;
    }
    t++;
    if (a === 40) {
      a = 41;
    }
    while (t < i) {
      if ((r = e.src.charCodeAt(t)) === a) {
        e.pos = t + 1;
        e.linkContent = nP(e.src.slice(n + 1, t));
        return true;
      }
      if (r === 92 && t + 1 < i) {
        t += 2;
        continue;
      }
      t++;
    }
    return false;
  }
  function n8(e) {
    return e.trim().replace(/\s+/g, " ").toUpperCase();
  }
  n1.prototype.renderInline = function (e, t, r) {
    var n = this.rules;
    var i = e.length;
    var a = 0;
    var o = "";
    while (i--) {
      o += n[e[a].type](e, a++, t, r, this);
    }
    return o;
  };
  n1.prototype.render = function (e, t, r) {
    var n = this.rules;
    var i = e.length;
    var a = -1;
    var o = "";
    while (++a < i) {
      if (e[a].type === "inline") {
        o += this.renderInline(e[a].children, t, r);
      } else {
        o += n[e[a].type](e, a, t, r, this);
      }
    }
    return o;
  };
  n4.prototype.__find__ = function (e) {
    var t = this.__rules__.length;
    var r = -1;
    while (t--) {
      if (this.__rules__[++r].name === e) {
        return r;
      }
    }
    return -1;
  };
  n4.prototype.__compile__ = function () {
    var e = this;
    var t = [""];
    e.__rules__.forEach(function (e) {
      if (e.enabled) {
        e.alt.forEach(function (e) {
          if (t.indexOf(e) < 0) {
            t.push(e);
          }
        });
      }
    });
    e.__cache__ = {};
    t.forEach(function (t) {
      e.__cache__[t] = [];
      e.__rules__.forEach(function (r) {
        if (!!r.enabled && (!t || !(r.alt.indexOf(t) < 0))) {
          e.__cache__[t].push(r.fn);
        }
      });
    });
  };
  n4.prototype.at = function (e, t, r) {
    var n = this.__find__(e);
    if (n === -1) {
      throw Error("Parser rule not found: " + e);
    }
    this.__rules__[n].fn = t;
    this.__rules__[n].alt = (r || {}).alt || [];
    this.__cache__ = null;
  };
  n4.prototype.before = function (e, t, r, n) {
    var i = this.__find__(e);
    if (i === -1) {
      throw Error("Parser rule not found: " + e);
    }
    this.__rules__.splice(i, 0, {
      name: t,
      enabled: true,
      fn: r,
      alt: (n || {}).alt || []
    });
    this.__cache__ = null;
  };
  n4.prototype.after = function (e, t, r, n) {
    var i = this.__find__(e);
    if (i === -1) {
      throw Error("Parser rule not found: " + e);
    }
    this.__rules__.splice(i + 1, 0, {
      name: t,
      enabled: true,
      fn: r,
      alt: (n || {}).alt || []
    });
    this.__cache__ = null;
  };
  n4.prototype.push = function (e, t, r) {
    this.__rules__.push({
      name: e,
      enabled: true,
      fn: t,
      alt: (r || {}).alt || []
    });
    this.__cache__ = null;
  };
  n4.prototype.enable = function (e, t) {
    e = Array.isArray(e) ? e : [e];
    if (t) {
      this.__rules__.forEach(function (e) {
        e.enabled = false;
      });
    }
    e.forEach(function (e) {
      var t = this.__find__(e);
      if (t < 0) {
        throw Error("Rules manager: invalid rule name " + e);
      }
      this.__rules__[t].enabled = true;
    }, this);
    this.__cache__ = null;
  };
  n4.prototype.disable = function (e) {
    (e = Array.isArray(e) ? e : [e]).forEach(function (e) {
      var t = this.__find__(e);
      if (t < 0) {
        throw Error("Rules manager: invalid rule name " + e);
      }
      this.__rules__[t].enabled = false;
    }, this);
    this.__cache__ = null;
  };
  n4.prototype.getRules = function (e) {
    if (this.__cache__ === null) {
      this.__compile__();
    }
    return this.__cache__[e] || [];
  };
  n5.prototype.pushPending = function () {
    this.tokens.push({
      type: "text",
      content: this.pending,
      level: this.pendingLevel
    });
    this.pending = "";
  };
  n5.prototype.push = function (e) {
    if (this.pending) {
      this.pushPending();
    }
    this.tokens.push(e);
    this.pendingLevel = this.level;
  };
  n5.prototype.cacheSet = function (e, t) {
    for (var r = this.cache.length; r <= e; r++) {
      this.cache.push(0);
    }
    this.cache[e] = t;
  };
  n5.prototype.cacheGet = function (e) {
    if (e < this.cache.length) {
      return this.cache[e];
    } else {
      return 0;
    }
  };
  var n9 = " \n()[]'\".,!?-";
  function ie(e) {
    return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
  }
  var it = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
  var ir = /\((c|tm|r|p)\)/ig;
  var ii = {
    c: "©",
    r: "®",
    p: "§",
    tm: "™"
  };
  var ia = /['"]/;
  var io = /['"]/g;
  var is = /[-\s()\[\]]/;
  function il(e, t) {
    return !(t < 0) && !(t >= e.length) && !is.test(e[t]);
  }
  function ic(e, t, r) {
    return e.substr(0, t) + r + e.substr(t + 1);
  }
  var iu = [["block", function (e) {
    if (e.inlineMode) {
      e.tokens.push({
        type: "inline",
        content: e.src.replace(/\n/g, " ").trim(),
        level: 0,
        lines: [0, 1],
        children: []
      });
    } else {
      e.block.parse(e.src, e.options, e.env, e.tokens);
    }
  }], ["abbr", function (e) {
    var t;
    var r;
    var n;
    var i;
    var a = e.tokens;
    if (!e.inlineMode) {
      t = 1;
      r = a.length - 1;
      for (; t < r; t++) {
        if (a[t - 1].type === "paragraph_open" && a[t].type === "inline" && a[t + 1].type === "paragraph_close") {
          for (n = a[t].content; n.length && !((i = function (e, t, r, n) {
            var i;
            var a;
            var o;
            var s;
            var l;
            var c;
            if (e.charCodeAt(0) !== 42 || e.charCodeAt(1) !== 91 || e.indexOf("]:") === -1 || (a = n3(i = new n5(e, t, r, n, []), 1)) < 0 || e.charCodeAt(a + 1) !== 58) {
              return -1;
            }
            s = i.posMax;
            o = a + 2;
            for (; o < s && i.src.charCodeAt(o) !== 10; o++);
            l = e.slice(2, a);
            if ((c = e.slice(a + 2, o).trim()).length === 0) {
              return -1;
            } else {
              n.abbreviations ||= {};
              if (n.abbreviations[":" + l] === undefined) {
                n.abbreviations[":" + l] = c;
              }
              return o;
            }
          }(n, e.inline, e.options, e.env)) < 0);) {
            n = n.slice(i).trim();
          }
          a[t].content = n;
          if (!n.length) {
            a[t - 1].tight = true;
            a[t + 1].tight = true;
          }
        }
      }
    }
  }], ["references", function (e) {
    var t;
    var r;
    var n;
    var i;
    var a = e.tokens;
    e.env.references = e.env.references || {};
    if (!e.inlineMode) {
      t = 1;
      r = a.length - 1;
      for (; t < r; t++) {
        if (a[t].type === "inline" && a[t - 1].type === "paragraph_open" && a[t + 1].type === "paragraph_close") {
          for (n = a[t].content; n.length && !((i = function (e, t, r, n) {
            var i;
            var a;
            var o;
            var s;
            var l;
            var c;
            var u;
            var h;
            var p;
            if (e.charCodeAt(0) !== 91 || e.indexOf("]:") === -1 || (a = n3(i = new n5(e, t, r, n, []), 0)) < 0 || e.charCodeAt(a + 1) !== 58) {
              return -1;
            }
            s = i.posMax;
            o = a + 2;
            for (; o < s && ((l = i.src.charCodeAt(o)) === 32 || l === 10); o++);
            if (!n7(i, o)) {
              return -1;
            }
            u = i.linkContent;
            c = o = i.pos;
            o += 1;
            for (; o < s && ((l = i.src.charCodeAt(o)) === 32 || l === 10); o++);
            for (o < s && c !== o && n2(i, o) ? (h = i.linkContent, o = i.pos) : (h = "", o = c); o < s && i.src.charCodeAt(o) === 32;) {
              o++;
            }
            if (o < s && i.src.charCodeAt(o) !== 10) {
              return -1;
            } else {
              p = n8(e.slice(1, a));
              if (n.references[p] === undefined) {
                n.references[p] = {
                  title: h,
                  href: u
                };
              }
              return o;
            }
          }(n, e.inline, e.options, e.env)) < 0);) {
            n = n.slice(i).trim();
          }
          a[t].content = n;
          if (!n.length) {
            a[t - 1].tight = true;
            a[t + 1].tight = true;
          }
        }
      }
    }
  }], ["inline", function (e) {
    var t;
    var r;
    var n;
    var i = e.tokens;
    r = 0;
    n = i.length;
    for (; r < n; r++) {
      if ((t = i[r]).type === "inline") {
        e.inline.parse(t.content, e.options, e.env, t.children);
      }
    }
  }], ["footnote_tail", function (e) {
    var t;
    var r;
    var n;
    var i;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u = 0;
    var h = false;
    var p = {};
    if (e.env.footnotes) {
      e.tokens = e.tokens.filter(function (e) {
        if (e.type === "footnote_reference_open") {
          h = true;
          l = [];
          c = e.label;
          return false;
        } else if (e.type === "footnote_reference_close") {
          h = false;
          p[":" + c] = l;
          return false;
        } else {
          if (h) {
            l.push(e);
          }
          return !h;
        }
      });
      if (e.env.footnotes.list) {
        o = e.env.footnotes.list;
        e.tokens.push({
          type: "footnote_block_open",
          level: u++
        });
        t = 0;
        r = o.length;
        for (; t < r; t++) {
          e.tokens.push({
            type: "footnote_open",
            id: t,
            level: u++
          });
          if (o[t].tokens) {
            (s = []).push({
              type: "paragraph_open",
              tight: false,
              level: u++
            });
            s.push({
              type: "inline",
              content: "",
              level: u,
              children: o[t].tokens
            });
            s.push({
              type: "paragraph_close",
              tight: false,
              level: --u
            });
          } else if (o[t].label) {
            s = p[":" + o[t].label];
          }
          e.tokens = e.tokens.concat(s);
          a = e.tokens[e.tokens.length - 1].type === "paragraph_close" ? e.tokens.pop() : null;
          i = o[t].count > 0 ? o[t].count : 1;
          n = 0;
          for (; n < i; n++) {
            e.tokens.push({
              type: "footnote_anchor",
              id: t,
              subId: n,
              level: u
            });
          }
          if (a) {
            e.tokens.push(a);
          }
          e.tokens.push({
            type: "footnote_close",
            level: --u
          });
        }
        e.tokens.push({
          type: "footnote_block_close",
          level: --u
        });
      }
    }
  }], ["abbr2", function (e) {
    var t;
    var r;
    var n;
    var i;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var h;
    var p;
    var d = e.tokens;
    if (e.env.abbreviations) {
      if (!e.env.abbrRegExp) {
        p = "(^|[" + n9.split("").map(ie).join("") + "])(" + Object.keys(e.env.abbreviations).map(function (e) {
          return e.substr(1);
        }).sort(function (e, t) {
          return t.length - e.length;
        }).map(ie).join("|") + ")($|[" + n9.split("").map(ie).join("") + "])";
        e.env.abbrRegExp = RegExp(p, "g");
      }
      u = e.env.abbrRegExp;
      r = 0;
      n = d.length;
      for (; r < n; r++) {
        if (d[r].type === "inline") {
          for (t = (i = d[r].children).length - 1; t >= 0; t--) {
            if ((a = i[t]).type === "text") {
              l = 0;
              o = a.content;
              u.lastIndex = 0;
              c = a.level;
              s = [];
              while (h = u.exec(o)) {
                if (u.lastIndex > l) {
                  s.push({
                    type: "text",
                    content: o.slice(l, h.index + h[1].length),
                    level: c
                  });
                }
                s.push({
                  type: "abbr_open",
                  title: e.env.abbreviations[":" + h[2]],
                  level: c++
                });
                s.push({
                  type: "text",
                  content: h[2],
                  level: c
                });
                s.push({
                  type: "abbr_close",
                  level: --c
                });
                l = u.lastIndex - h[3].length;
              }
              if (s.length) {
                if (l < o.length) {
                  s.push({
                    type: "text",
                    content: o.slice(l),
                    level: c
                  });
                }
                d[r].children = i = [].concat(i.slice(0, t), s, i.slice(t + 1));
              }
            }
          }
        }
      }
    }
  }], ["replacements", function (e) {
    var t;
    var r;
    var n;
    var i;
    var a;
    var o;
    if (e.options.typographer) {
      for (a = e.tokens.length - 1; a >= 0; a--) {
        if (e.tokens[a].type === "inline") {
          for (t = (i = e.tokens[a].children).length - 1; t >= 0; t--) {
            if ((r = i[t]).type === "text") {
              n = (o = n = r.content).indexOf("(") < 0 ? o : o.replace(ir, function (e, t) {
                return ii[t.toLowerCase()];
              });
              if (it.test(n)) {
                n = n.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/mg, "$1—$2").replace(/(^|\s)--(\s|$)/mg, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1–$2");
              }
              r.content = n;
            }
          }
        }
      }
    }
  }], ["smartquotes", function (e) {
    var t;
    var r;
    var n;
    var i;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var h;
    var p;
    var d;
    var m;
    var f;
    var g;
    var v;
    if (e.options.typographer) {
      v = [];
      f = e.tokens.length - 1;
      for (; f >= 0; f--) {
        if (e.tokens[f].type === "inline") {
          t = 0;
          g = e.tokens[f].children;
          v.length = 0;
          for (; t < g.length; t++) {
            if ((r = g[t]).type === "text" && !ia.test(r.text)) {
              s = g[t].level;
              d = v.length - 1;
              for (; d >= 0 && !(v[d].level <= s); d--);
              v.length = d + 1;
              n = r.content;
              a = 0;
              o = n.length;
              t: while (a < o && (io.lastIndex = a, i = io.exec(n))) {
                l = !il(n, i.index - 1);
                a = i.index + 1;
                m = i[0] === "'";
                if (!(c = !il(n, a)) && !l) {
                  if (m) {
                    r.content = ic(r.content, i.index, "’");
                  }
                  continue;
                }
                h = !c;
                if (p = !l) {
                  for (d = v.length - 1; d >= 0 && (u = v[d], !(v[d].level < s)); d--) {
                    if (u.single === m && v[d].level === s) {
                      u = v[d];
                      if (m) {
                        g[u.token].content = ic(g[u.token].content, u.pos, e.options.quotes[2]);
                        r.content = ic(r.content, i.index, e.options.quotes[3]);
                      } else {
                        g[u.token].content = ic(g[u.token].content, u.pos, e.options.quotes[0]);
                        r.content = ic(r.content, i.index, e.options.quotes[1]);
                      }
                      v.length = d;
                      continue t;
                    }
                  }
                }
                if (h) {
                  v.push({
                    token: t,
                    pos: i.index,
                    single: m,
                    level: s
                  });
                } else if (p && m) {
                  r.content = ic(r.content, i.index, "’");
                }
              }
            }
          }
        }
      }
    }
  }]];
  function ih() {
    this.options = {};
    this.ruler = new n4();
    for (var e = 0; e < iu.length; e++) {
      this.ruler.push(iu[e][0], iu[e][1]);
    }
  }
  function ip(e, t, r, n, i) {
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var h;
    this.src = e;
    this.parser = t;
    this.options = r;
    this.env = n;
    this.tokens = i;
    this.bMarks = [];
    this.eMarks = [];
    this.tShift = [];
    this.blkIndent = 0;
    this.line = 0;
    this.lineMax = 0;
    this.tight = false;
    this.parentType = "root";
    this.ddIndent = -1;
    this.level = 0;
    this.result = "";
    o = this.src;
    u = 0;
    h = false;
    s = l = u = 0;
    c = o.length;
    for (; l < c; l++) {
      a = o.charCodeAt(l);
      if (!h) {
        if (a === 32) {
          u++;
          continue;
        }
        h = true;
      }
      if (a === 10 || l === c - 1) {
        if (a !== 10) {
          l++;
        }
        this.bMarks.push(s);
        this.eMarks.push(l);
        this.tShift.push(u);
        h = false;
        u = 0;
        s = l + 1;
      }
    }
    this.bMarks.push(o.length);
    this.eMarks.push(o.length);
    this.tShift.push(0);
    this.lineMax = this.bMarks.length - 1;
  }
  function id(e, t) {
    var r;
    var n;
    var i;
    if ((n = e.bMarks[t] + e.tShift[t]) >= (i = e.eMarks[t]) || (r = e.src.charCodeAt(n++)) !== 42 && r !== 45 && r !== 43 || n < i && e.src.charCodeAt(n) !== 32) {
      return -1;
    } else {
      return n;
    }
  }
  function im(e, t) {
    var r;
    var n = e.bMarks[t] + e.tShift[t];
    var i = e.eMarks[t];
    if (n + 1 >= i || (r = e.src.charCodeAt(n++)) < 48 || r > 57) {
      return -1;
    }
    while (true) {
      if (n >= i) {
        return -1;
      }
      if (!((r = e.src.charCodeAt(n++)) >= 48) || !(r <= 57)) {
        if (r === 41 || r === 46) {
          break;
        }
        return -1;
      }
    }
    if (n < i && e.src.charCodeAt(n) !== 32) {
      return -1;
    } else {
      return n;
    }
  }
  ih.prototype.process = function (e) {
    var t;
    var r;
    var n;
    t = 0;
    r = (n = this.ruler.getRules("")).length;
    for (; t < r; t++) {
      n[t](e);
    }
  };
  ip.prototype.isEmpty = function (e) {
    return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
  };
  ip.prototype.skipEmptyLines = function (e) {
    for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
    return e;
  };
  ip.prototype.skipSpaces = function (e) {
    for (var t = this.src.length; e < t && this.src.charCodeAt(e) === 32; e++);
    return e;
  };
  ip.prototype.skipChars = function (e, t) {
    for (var r = this.src.length; e < r && this.src.charCodeAt(e) === t; e++);
    return e;
  };
  ip.prototype.skipCharsBack = function (e, t, r) {
    if (e <= r) {
      return e;
    }
    while (e > r) {
      if (t !== this.src.charCodeAt(--e)) {
        return e + 1;
      }
    }
    return e;
  };
  ip.prototype.getLines = function (e, t, r, n) {
    var i;
    var a;
    var o;
    var s;
    var l;
    var c = e;
    if (e >= t) {
      return "";
    }
    if (c + 1 === t) {
      a = this.bMarks[c] + Math.min(this.tShift[c], r);
      o = n ? this.eMarks[c] + 1 : this.eMarks[c];
      return this.src.slice(a, o);
    }
    i = 0;
    s = Array(t - e);
    for (; c < t; c++, i++) {
      if ((l = this.tShift[c]) > r) {
        l = r;
      }
      if (l < 0) {
        l = 0;
      }
      a = this.bMarks[c] + l;
      o = c + 1 < t || n ? this.eMarks[c] + 1 : this.eMarks[c];
      s[i] = this.src.slice(a, o);
    }
    return s.join("");
  };
  var ig = {};
  ["article", "aside", "button", "blockquote", "body", "canvas", "caption", "col", "colgroup", "dd", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "iframe", "li", "map", "object", "ol", "output", "p", "pre", "progress", "script", "section", "style", "table", "tbody", "td", "textarea", "tfoot", "th", "tr", "thead", "ul", "video"].forEach(function (e) {
    ig[e] = true;
  });
  var iv = /^<([a-zA-Z]{1,15})[\s\/>]/;
  var ib = /^<\/([a-zA-Z]{1,15})[\s>]/;
  function iy(e, t) {
    var r = e.bMarks[t] + e.blkIndent;
    var n = e.eMarks[t];
    return e.src.substr(r, n - r);
  }
  function ix(e, t) {
    var r;
    var n;
    var i = e.bMarks[t] + e.tShift[t];
    var a = e.eMarks[t];
    if (i >= a || (n = e.src.charCodeAt(i++)) !== 126 && n !== 58) {
      return -1;
    } else {
      r = e.skipSpaces(i);
      if (i === r || r >= a) {
        return -1;
      } else {
        return r;
      }
    }
  }
  var iw = [["code", function (e, t, r) {
    var n;
    var i;
    if (e.tShift[t] - e.blkIndent < 4) {
      return false;
    }
    for (i = n = t + 1; n < r;) {
      if (e.isEmpty(n)) {
        n++;
        continue;
      }
      if (e.tShift[n] - e.blkIndent >= 4) {
        i = ++n;
        continue;
      }
      break;
    }
    e.line = n;
    e.tokens.push({
      type: "code",
      content: e.getLines(t, i, 4 + e.blkIndent, true),
      block: true,
      lines: [t, e.line],
      level: e.level
    });
    return true;
  }], ["fences", function (e, t, r, n) {
    var i;
    var a;
    var o;
    var s;
    var l;
    var c = false;
    var u = e.bMarks[t] + e.tShift[t];
    var h = e.eMarks[t];
    if (u + 3 > h || (i = e.src.charCodeAt(u)) !== 126 && i !== 96 || (l = u, (a = (u = e.skipChars(u, i)) - l) < 3 || (o = e.src.slice(u, h).trim()).indexOf("`") >= 0)) {
      return false;
    }
    if (n) {
      return true;
    }
    for (s = t; !(++s >= r) && (!((u = l = e.bMarks[s] + e.tShift[s]) < (h = e.eMarks[s])) || !(e.tShift[s] < e.blkIndent));) {
      if (e.src.charCodeAt(u) === i && !(e.tShift[s] - e.blkIndent >= 4) && !((u = e.skipChars(u, i)) - l < a) && !((u = e.skipSpaces(u)) < h)) {
        c = true;
        break;
      }
    }
    a = e.tShift[t];
    e.line = s + +!!c;
    e.tokens.push({
      type: "fence",
      params: o,
      content: e.getLines(t + 1, s, a, true),
      lines: [t, e.line],
      level: e.level
    });
    return true;
  }, ["paragraph", "blockquote", "list"]], ["blockquote", function (e, t, r, n) {
    var i;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var h;
    var p;
    var d;
    var m;
    var f = e.bMarks[t] + e.tShift[t];
    var g = e.eMarks[t];
    if (f > g || e.src.charCodeAt(f++) !== 62 || e.level >= e.options.maxNesting) {
      return false;
    }
    if (n) {
      return true;
    }
    if (e.src.charCodeAt(f) === 32) {
      f++;
    }
    l = e.blkIndent;
    e.blkIndent = 0;
    s = [e.bMarks[t]];
    e.bMarks[t] = f;
    a = (f = f < g ? e.skipSpaces(f) : f) >= g;
    o = [e.tShift[t]];
    e.tShift[t] = f - e.bMarks[t];
    h = e.parser.ruler.getRules("blockquote");
    i = t + 1;
    for (; i < r && !((f = e.bMarks[i] + e.tShift[i]) >= (g = e.eMarks[i])); i++) {
      if (e.src.charCodeAt(f++) === 62) {
        if (e.src.charCodeAt(f) === 32) {
          f++;
        }
        s.push(e.bMarks[i]);
        e.bMarks[i] = f;
        a = (f = f < g ? e.skipSpaces(f) : f) >= g;
        o.push(e.tShift[i]);
        e.tShift[i] = f - e.bMarks[i];
        continue;
      }
      if (a) {
        break;
      }
      p = 0;
      m = false;
      d = h.length;
      for (; p < d; p++) {
        if (h[p](e, i, r, true)) {
          m = true;
          break;
        }
      }
      if (m) {
        break;
      }
      s.push(e.bMarks[i]);
      o.push(e.tShift[i]);
      e.tShift[i] = -1337;
    }
    c = e.parentType;
    e.parentType = "blockquote";
    e.tokens.push({
      type: "blockquote_open",
      lines: u = [t, 0],
      level: e.level++
    });
    e.parser.tokenize(e, t, i);
    e.tokens.push({
      type: "blockquote_close",
      level: --e.level
    });
    e.parentType = c;
    u[1] = e.line;
    p = 0;
    for (; p < o.length; p++) {
      e.bMarks[p + t] = s[p];
      e.tShift[p + t] = o[p];
    }
    e.blkIndent = l;
    return true;
  }, ["paragraph", "blockquote", "list"]], ["hr", function (e, t, r, n) {
    var i;
    var a;
    var o;
    var s = e.bMarks[t];
    var l = e.eMarks[t];
    if ((s += e.tShift[t]) > l || (i = e.src.charCodeAt(s++)) !== 42 && i !== 45 && i !== 95) {
      return false;
    }
    for (a = 1; s < l;) {
      if ((o = e.src.charCodeAt(s++)) !== i && o !== 32) {
        return false;
      }
      if (o === i) {
        a++;
      }
    }
    return !(a < 3) && (!!n || (e.line = t + 1, e.tokens.push({
      type: "hr",
      lines: [t, e.line],
      level: e.level
    }), true));
  }, ["paragraph", "blockquote", "list"]], ["list", function (e, t, r, n) {
    var i;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var h;
    var p;
    var d;
    var m;
    var f;
    var g;
    var v;
    var b;
    var y;
    var x;
    var w;
    var k;
    var S;
    var A;
    var T = true;
    if ((h = im(e, t)) >= 0) {
      f = true;
    } else {
      if (!((h = id(e, t)) >= 0)) {
        return false;
      }
      f = false;
    }
    if (e.level >= e.options.maxNesting) {
      return false;
    }
    m = e.src.charCodeAt(h - 1);
    if (n) {
      return true;
    }
    v = e.tokens.length;
    if (f) {
      u = e.bMarks[t] + e.tShift[t];
      d = Number(e.src.substr(u, h - u - 1));
      e.tokens.push({
        type: "ordered_list_open",
        order: d,
        lines: y = [t, 0],
        level: e.level++
      });
    } else {
      e.tokens.push({
        type: "bullet_list_open",
        lines: y = [t, 0],
        level: e.level++
      });
    }
    i = t;
    b = false;
    w = e.parser.ruler.getRules("list");
    while (i < r && ((p = (g = e.skipSpaces(h)) >= e.eMarks[i] ? 1 : g - h) > 4 && (p = 1), p < 1 && (p = 1), a = h - e.bMarks[i] + p, e.tokens.push({
      type: "list_item_open",
      lines: x = [t, 0],
      level: e.level++
    }), s = e.blkIndent, l = e.tight, o = e.tShift[t], c = e.parentType, e.tShift[t] = g - e.bMarks[t], e.blkIndent = a, e.tight = true, e.parentType = "list", e.parser.tokenize(e, t, r, true), (!e.tight || b) && (T = false), b = e.line - t > 1 && e.isEmpty(e.line - 1), e.blkIndent = s, e.tShift[t] = o, e.tight = l, e.parentType = c, e.tokens.push({
      type: "list_item_close",
      level: --e.level
    }), i = t = e.line, x[1] = i, g = e.bMarks[t], !(i >= r) && !e.isEmpty(i) && !(e.tShift[i] < e.blkIndent))) {
      k = 0;
      A = false;
      S = w.length;
      for (; k < S; k++) {
        if (w[k](e, i, r, true)) {
          A = true;
          break;
        }
      }
      if (A) {
        break;
      }
      if (f) {
        if ((h = im(e, i)) < 0) {
          break;
        }
      } else if ((h = id(e, i)) < 0) {
        break;
      }
      if (m !== e.src.charCodeAt(h - 1)) {
        break;
      }
    }
    e.tokens.push({
      type: f ? "ordered_list_close" : "bullet_list_close",
      level: --e.level
    });
    y[1] = i;
    e.line = i;
    if (T) {
      (function (e, t) {
        var r;
        var n;
        var i = e.level + 2;
        r = t + 2;
        n = e.tokens.length - 2;
        for (; r < n; r++) {
          if (e.tokens[r].level === i && e.tokens[r].type === "paragraph_open") {
            e.tokens[r + 2].tight = true;
            e.tokens[r].tight = true;
            r += 2;
          }
        }
      })(e, v);
    }
    return true;
  }, ["paragraph", "blockquote"]], ["footnote", function (e, t, r, n) {
    var i;
    var a;
    var o;
    var s;
    var l;
    var c = e.bMarks[t] + e.tShift[t];
    var u = e.eMarks[t];
    if (c + 4 > u || e.src.charCodeAt(c) !== 91 || e.src.charCodeAt(c + 1) !== 94 || e.level >= e.options.maxNesting) {
      return false;
    }
    for (s = c + 2; s < u; s++) {
      if (e.src.charCodeAt(s) === 32) {
        return false;
      }
      if (e.src.charCodeAt(s) === 93) {
        break;
      }
    }
    return s !== c + 2 && !(s + 1 >= u) && e.src.charCodeAt(++s) === 58 && (!!n || (s++, e.env.footnotes ||= {}, e.env.footnotes.refs ||= {}, l = e.src.slice(c + 2, s - 2), e.env.footnotes.refs[":" + l] = -1, e.tokens.push({
      type: "footnote_reference_open",
      label: l,
      level: e.level++
    }), i = e.bMarks[t], a = e.tShift[t], o = e.parentType, e.tShift[t] = e.skipSpaces(s) - s, e.bMarks[t] = s, e.blkIndent += 4, e.parentType = "footnote", e.tShift[t] < e.blkIndent && (e.tShift[t] += e.blkIndent, e.bMarks[t] -= e.blkIndent), e.parser.tokenize(e, t, r, true), e.parentType = o, e.blkIndent -= 4, e.tShift[t] = a, e.bMarks[t] = i, e.tokens.push({
      type: "footnote_reference_close",
      level: --e.level
    }), true));
  }, ["paragraph"]], ["heading", function (e, t, r, n) {
    var i;
    var a;
    var o;
    var s = e.bMarks[t] + e.tShift[t];
    var l = e.eMarks[t];
    if (s >= l || (i = e.src.charCodeAt(s)) !== 35 || s >= l) {
      return false;
    }
    a = 1;
    i = e.src.charCodeAt(++s);
    while (i === 35 && s < l && a <= 6) {
      a++;
      i = e.src.charCodeAt(++s);
    }
    return !(a > 6) && (!(s < l) || i === 32) && (!!n || (l = e.skipCharsBack(l, 32, s), (o = e.skipCharsBack(l, 35, s)) > s && e.src.charCodeAt(o - 1) === 32 && (l = o), e.line = t + 1, e.tokens.push({
      type: "heading_open",
      hLevel: a,
      lines: [t, e.line],
      level: e.level
    }), s < l && e.tokens.push({
      type: "inline",
      content: e.src.slice(s, l).trim(),
      level: e.level + 1,
      lines: [t, e.line],
      children: []
    }), e.tokens.push({
      type: "heading_close",
      hLevel: a,
      level: e.level
    }), true));
  }, ["paragraph", "blockquote"]], ["lheading", function (e, t, r) {
    var n;
    var i;
    var a;
    var o = t + 1;
    return !(o >= r) && !(e.tShift[o] < e.blkIndent) && !(e.tShift[o] - e.blkIndent > 3) && !((i = e.bMarks[o] + e.tShift[o]) >= (a = e.eMarks[o])) && ((n = e.src.charCodeAt(i)) === 45 || n === 61) && (i = e.skipChars(i, n), !((i = e.skipSpaces(i)) < a) && (i = e.bMarks[t] + e.tShift[t], e.line = o + 1, e.tokens.push({
      type: "heading_open",
      hLevel: n === 61 ? 1 : 2,
      lines: [t, e.line],
      level: e.level
    }), e.tokens.push({
      type: "inline",
      content: e.src.slice(i, e.eMarks[t]).trim(),
      level: e.level + 1,
      lines: [t, e.line - 1],
      children: []
    }), e.tokens.push({
      type: "heading_close",
      hLevel: n === 61 ? 1 : 2,
      level: e.level
    }), true));
  }], ["htmlblock", function (e, t, r, n) {
    var i;
    var a;
    var o;
    var s;
    var l = e.bMarks[t];
    var c = e.eMarks[t];
    var u = e.tShift[t];
    l += u;
    if (!e.options.html || u > 3 || l + 2 >= c || e.src.charCodeAt(l) !== 60) {
      return false;
    }
    if ((a = e.src.charCodeAt(l + 1)) === 33 || a === 63) {
      if (n) {
        return true;
      }
    } else {
      if (a !== 47 && (!((i = a | 32) >= 97) || !(i <= 122))) {
        return false;
      }
      if (a === 47) {
        if (!(o = e.src.slice(l, c).match(ib))) {
          return false;
        }
      } else if (!(o = e.src.slice(l, c).match(iv))) {
        return false;
      }
      if (ig[o[1].toLowerCase()] !== true) {
        return false;
      }
      if (n) {
        return true;
      }
    }
    for (s = t + 1; s < e.lineMax && !e.isEmpty(s);) {
      s++;
    }
    e.line = s;
    e.tokens.push({
      type: "htmlblock",
      level: e.level,
      lines: [t, e.line],
      content: e.getLines(t, s, 0, true)
    });
    return true;
  }, ["paragraph", "blockquote"]], ["table", function (e, t, r, n) {
    var i;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var h;
    var p;
    var d;
    var m;
    if (t + 2 > r || (l = t + 1, e.tShift[l] < e.blkIndent || (o = e.bMarks[l] + e.tShift[l]) >= e.eMarks[l] || (i = e.src.charCodeAt(o)) !== 124 && i !== 45 && i !== 58) || (a = iy(e, t + 1), !/^[-:| ]+$/.test(a) || (c = a.split("|")) <= 2)) {
      return false;
    }
    s = 0;
    h = [];
    for (; s < c.length; s++) {
      if (!(p = c[s].trim())) {
        if (s === 0 || s === c.length - 1) {
          continue;
        }
        return false;
      }
      if (!/^:?-+:?$/.test(p)) {
        return false;
      }
      if (p.charCodeAt(p.length - 1) === 58) {
        h.push(p.charCodeAt(0) === 58 ? "center" : "right");
      } else if (p.charCodeAt(0) === 58) {
        h.push("left");
      } else {
        h.push("");
      }
    }
    if ((a = iy(e, t).trim()).indexOf("|") === -1 || (c = a.replace(/^\||\|$/g, "").split("|"), h.length !== c.length)) {
      return false;
    }
    if (n) {
      return true;
    }
    e.tokens.push({
      type: "table_open",
      lines: d = [t, 0],
      level: e.level++
    });
    e.tokens.push({
      type: "thead_open",
      lines: [t, t + 1],
      level: e.level++
    });
    e.tokens.push({
      type: "tr_open",
      lines: [t, t + 1],
      level: e.level++
    });
    s = 0;
    for (; s < c.length; s++) {
      e.tokens.push({
        type: "th_open",
        align: h[s],
        lines: [t, t + 1],
        level: e.level++
      });
      e.tokens.push({
        type: "inline",
        content: c[s].trim(),
        lines: [t, t + 1],
        level: e.level,
        children: []
      });
      e.tokens.push({
        type: "th_close",
        level: --e.level
      });
    }
    e.tokens.push({
      type: "tr_close",
      level: --e.level
    });
    e.tokens.push({
      type: "thead_close",
      level: --e.level
    });
    e.tokens.push({
      type: "tbody_open",
      lines: m = [t + 2, 0],
      level: e.level++
    });
    l = t + 2;
    for (; l < r && !(e.tShift[l] < e.blkIndent) && (a = iy(e, l).trim()).indexOf("|") !== -1; l++) {
      c = a.replace(/^\||\|$/g, "").split("|");
      e.tokens.push({
        type: "tr_open",
        level: e.level++
      });
      s = 0;
      for (; s < c.length; s++) {
        e.tokens.push({
          type: "td_open",
          align: h[s],
          level: e.level++
        });
        u = c[s].substring(+(c[s].charCodeAt(0) === 124), c[s].charCodeAt(c[s].length - 1) === 124 ? c[s].length - 1 : c[s].length).trim();
        e.tokens.push({
          type: "inline",
          content: u,
          level: e.level,
          children: []
        });
        e.tokens.push({
          type: "td_close",
          level: --e.level
        });
      }
      e.tokens.push({
        type: "tr_close",
        level: --e.level
      });
    }
    e.tokens.push({
      type: "tbody_close",
      level: --e.level
    });
    e.tokens.push({
      type: "table_close",
      level: --e.level
    });
    d[1] = m[1] = l;
    e.line = l;
    return true;
  }, ["paragraph"]], ["deflist", function (e, t, r, n) {
    var i;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var h;
    var p;
    var d;
    var m;
    var f;
    var g;
    var v;
    if (n) {
      return !(e.ddIndent < 0) && ix(e, t) >= 0;
    }
    u = t + 1;
    if (e.isEmpty(u) && ++u > r || e.tShift[u] < e.blkIndent || (i = ix(e, u)) < 0 || e.level >= e.options.maxNesting) {
      return false;
    }
    c = e.tokens.length;
    e.tokens.push({
      type: "dl_open",
      lines: l = [t, 0],
      level: e.level++
    });
    o = t;
    a = u;
    t: while (true) {
      v = true;
      g = false;
      e.tokens.push({
        type: "dt_open",
        lines: [o, o],
        level: e.level++
      });
      e.tokens.push({
        type: "inline",
        content: e.getLines(o, o + 1, e.blkIndent, false).trim(),
        level: e.level + 1,
        lines: [o, o],
        children: []
      });
      e.tokens.push({
        type: "dt_close",
        level: --e.level
      });
      while (true) {
        e.tokens.push({
          type: "dd_open",
          lines: s = [u, 0],
          level: e.level++
        });
        f = e.tight;
        p = e.ddIndent;
        h = e.blkIndent;
        m = e.tShift[a];
        d = e.parentType;
        e.blkIndent = e.ddIndent = e.tShift[a] + 2;
        e.tShift[a] = i - e.bMarks[a];
        e.tight = true;
        e.parentType = "deflist";
        e.parser.tokenize(e, a, r, true);
        if (!e.tight || g) {
          v = false;
        }
        g = e.line - a > 1 && e.isEmpty(e.line - 1);
        e.tShift[a] = m;
        e.tight = f;
        e.parentType = d;
        e.blkIndent = h;
        e.ddIndent = p;
        e.tokens.push({
          type: "dd_close",
          level: --e.level
        });
        s[1] = u = e.line;
        if (u >= r || e.tShift[u] < e.blkIndent) {
          break t;
        }
        if ((i = ix(e, u)) < 0) {
          break;
        }
        a = u;
      }
      if (u >= r || (o = u, e.isEmpty(o) || e.tShift[o] < e.blkIndent || (a = o + 1) >= r) || (e.isEmpty(a) && a++, a >= r || e.tShift[a] < e.blkIndent || (i = ix(e, a)) < 0)) {
        break;
      }
    }
    e.tokens.push({
      type: "dl_close",
      level: --e.level
    });
    l[1] = u;
    e.line = u;
    if (v) {
      (function (e, t) {
        var r;
        var n;
        var i = e.level + 2;
        r = t + 2;
        n = e.tokens.length - 2;
        for (; r < n; r++) {
          if (e.tokens[r].level === i && e.tokens[r].type === "paragraph_open") {
            e.tokens[r + 2].tight = true;
            e.tokens[r].tight = true;
            r += 2;
          }
        }
      })(e, c);
    }
    return true;
  }, ["paragraph"]], ["paragraph", function (e, t) {
    var r;
    var n;
    var i;
    var a;
    var o;
    var s;
    var l = t + 1;
    if (l < (r = e.lineMax) && !e.isEmpty(l)) {
      for (s = e.parser.ruler.getRules("paragraph"); l < r && !e.isEmpty(l); l++) {
        if (!(e.tShift[l] - e.blkIndent > 3)) {
          a = 0;
          i = false;
          o = s.length;
          for (; a < o; a++) {
            if (s[a](e, l, r, true)) {
              i = true;
              break;
            }
          }
          if (i) {
            break;
          }
        }
      }
    }
    n = e.getLines(t, l, e.blkIndent, false).trim();
    e.line = l;
    if (n.length) {
      e.tokens.push({
        type: "paragraph_open",
        tight: false,
        lines: [t, e.line],
        level: e.level
      });
      e.tokens.push({
        type: "inline",
        content: n,
        level: e.level + 1,
        lines: [t, e.line],
        children: []
      });
      e.tokens.push({
        type: "paragraph_close",
        tight: false,
        level: e.level
      });
    }
    return true;
  }]];
  function ik() {
    this.ruler = new n4();
    for (var e = 0; e < iw.length; e++) {
      this.ruler.push(iw[e][0], iw[e][1], {
        alt: (iw[e][2] || []).slice()
      });
    }
  }
  ik.prototype.tokenize = function (e, t, r) {
    var n;
    var i = this.ruler.getRules("");
    var a = i.length;
    var o = t;
    var s = false;
    while (o < r && (e.line = o = e.skipEmptyLines(o), !(o >= r) && !(e.tShift[o] < e.blkIndent))) {
      for (n = 0; n < a && !i[n](e, o, r, false); n++);
      e.tight = !s;
      if (e.isEmpty(e.line - 1)) {
        s = true;
      }
      if ((o = e.line) < r && e.isEmpty(o)) {
        s = true;
        if (++o < r && e.parentType === "list" && e.isEmpty(o)) {
          break;
        }
        e.line = o;
      }
    }
  };
  var iS = /[\n\t]/g;
  var iA = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
  var iT = /\u00a0/g;
  ik.prototype.parse = function (e, t, r, n) {
    var i;
    var a = 0;
    var o = 0;
    if (!e) {
      return [];
    }
    if ((e = (e = e.replace(iT, " ")).replace(iA, "\n")).indexOf("\t") >= 0) {
      e = e.replace(iS, function (t, r) {
        var n;
        if (e.charCodeAt(r) === 10) {
          a = r + 1;
          o = 0;
          return t;
        } else {
          n = "    ".slice((r - a - o) % 4);
          o = r - a + 1;
          return n;
        }
      });
    }
    i = new ip(e, this, t, r, n);
    this.tokenize(i, i.line, i.lineMax);
  };
  var iC = [];
  var iM = 0;
  for (; iM < 256; iM++) {
    iC.push(0);
  }
  function iN(e) {
    return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122;
  }
  function iz(e, t) {
    var r;
    var n;
    var i;
    var a = t;
    var o = true;
    var s = true;
    var l = e.posMax;
    var c = e.src.charCodeAt(t);
    for (r = t > 0 ? e.src.charCodeAt(t - 1) : -1; a < l && e.src.charCodeAt(a) === c;) {
      a++;
    }
    if (a >= l) {
      o = false;
    }
    if ((i = a - t) >= 4) {
      o = s = false;
    } else {
      if ((n = a < l ? e.src.charCodeAt(a) : -1) === 32 || n === 10) {
        o = false;
      }
      if (r === 32 || r === 10) {
        s = false;
      }
      if (c === 95) {
        if (iN(r)) {
          o = false;
        }
        if (iN(n)) {
          s = false;
        }
      }
    }
    return {
      can_open: o,
      can_close: s,
      delims: i
    };
  }
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (e) {
    iC[e.charCodeAt(0)] = 1;
  });
  var iE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  var iI = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
  var i_ = ["coap", "doi", "javascript", "aaa", "aaas", "about", "acap", "cap", "cid", "crid", "data", "dav", "dict", "dns", "file", "ftp", "geo", "go", "gopher", "h323", "http", "https", "iax", "icap", "im", "imap", "info", "ipp", "iris", "iris.beep", "iris.xpc", "iris.xpcs", "iris.lwz", "ldap", "mailto", "mid", "msrp", "msrps", "mtqp", "mupdate", "news", "nfs", "ni", "nih", "nntp", "opaquelocktoken", "pop", "pres", "rtsp", "service", "session", "shttp", "sieve", "sip", "sips", "sms", "snmp", "soap.beep", "soap.beeps", "tag", "tel", "telnet", "tftp", "thismessage", "tn3270", "tip", "tv", "urn", "vemmi", "ws", "wss", "xcon", "xcon-userid", "xmlrpc.beep", "xmlrpc.beeps", "xmpp", "z39.50r", "z39.50s", "adiumxtra", "afp", "afs", "aim", "apt", "attachment", "aw", "beshare", "bitcoin", "bolo", "callto", "chrome", "chrome-extension", "com-eventbrite-attendee", "content", "cvs", "dlna-playsingle", "dlna-playcontainer", "dtn", "dvb", "ed2k", "facetime", "feed", "finger", "fish", "gg", "git", "gizmoproject", "gtalk", "hcp", "icon", "ipn", "irc", "irc6", "ircs", "itms", "jar", "jms", "keyparc", "lastfm", "ldaps", "magnet", "maps", "market", "message", "mms", "ms-help", "msnim", "mumble", "mvn", "notes", "oid", "palm", "paparazzi", "platform", "proxy", "psyc", "query", "res", "resource", "rmi", "rsync", "rtmp", "secondlife", "sftp", "sgn", "skype", "smb", "soldat", "spotify", "ssh", "steam", "svn", "teamspeak", "things", "udp", "unreal", "ut2004", "ventrilo", "view-source", "webcal", "wtai", "wyciwyg", "xfire", "xri", "ymsgr"];
  var iR = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
  var iB = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
  function iq(e, t) {
    e = e.source;
    t = t || "";
    return function r(n, i) {
      if (n) {
        i = i.source || i;
        e = e.replace(n, i);
        return r;
      } else {
        return new RegExp(e, t);
      }
    };
  }
  var iO = iq(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", /[^"'=<>`\x00-\x20]+/)("single_quoted", /'[^']*'/)("double_quoted", /"[^"]*"/)();
  var iF = iq(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", /[a-zA-Z_:][a-zA-Z0-9:._-]*/)("attr_value", iO)();
  var iL = iq(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", iF)();
  var i$ = iq(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", iL)("close_tag", /<\/[A-Za-z][A-Za-z0-9]*\s*>/)("comment", /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/)("processing", /<[?].*?[?]>/)("declaration", /<![A-Z]+\s+[^>]*>/)("cdata", /<!\[CDATA\[[\s\S]*?\]\]>/)();
  var iD = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
  var iP = /^&([a-z][a-z0-9]{1,31});/i;
  var iH = [["text", function (e, t) {
    for (var r = e.pos; r < e.posMax && !function (e) {
      switch (e) {
        case 10:
        case 92:
        case 96:
        case 42:
        case 95:
        case 94:
        case 91:
        case 93:
        case 33:
        case 38:
        case 60:
        case 62:
        case 123:
        case 125:
        case 36:
        case 37:
        case 64:
        case 126:
        case 43:
        case 61:
        case 58:
          return true;
        default:
          return false;
      }
    }(e.src.charCodeAt(r));) {
      r++;
    }
    return r !== e.pos && (t || (e.pending += e.src.slice(e.pos, r)), e.pos = r, true);
  }], ["newline", function (e, t) {
    var r;
    var n;
    var i = e.pos;
    if (e.src.charCodeAt(i) !== 10) {
      return false;
    }
    r = e.pending.length - 1;
    n = e.posMax;
    if (!t) {
      if (r >= 0 && e.pending.charCodeAt(r) === 32) {
        if (r >= 1 && e.pending.charCodeAt(r - 1) === 32) {
          for (var a = r - 2; a >= 0; a--) {
            if (e.pending.charCodeAt(a) !== 32) {
              e.pending = e.pending.substring(0, a + 1);
              break;
            }
          }
          e.push({
            type: "hardbreak",
            level: e.level
          });
        } else {
          e.pending = e.pending.slice(0, -1);
          e.push({
            type: "softbreak",
            level: e.level
          });
        }
      } else {
        e.push({
          type: "softbreak",
          level: e.level
        });
      }
    }
    for (i++; i < n && e.src.charCodeAt(i) === 32;) {
      i++;
    }
    e.pos = i;
    return true;
  }], ["escape", function (e, t) {
    var r;
    var n = e.pos;
    var i = e.posMax;
    if (e.src.charCodeAt(n) !== 92) {
      return false;
    }
    if (++n < i) {
      if ((r = e.src.charCodeAt(n)) < 256 && iC[r] !== 0) {
        if (!t) {
          e.pending += e.src[n];
        }
        e.pos += 2;
        return true;
      }
      if (r === 10) {
        if (!t) {
          e.push({
            type: "hardbreak",
            level: e.level
          });
        }
        n++;
        while (n < i && e.src.charCodeAt(n) === 32) {
          n++;
        }
        e.pos = n;
        return true;
      }
    }
    if (!t) {
      e.pending += "\\";
    }
    e.pos++;
    return true;
  }], ["backticks", function (e, t) {
    var r;
    var n;
    var i;
    var a;
    var o;
    var s = e.pos;
    if (e.src.charCodeAt(s) !== 96) {
      return false;
    }
    r = s;
    s++;
    n = e.posMax;
    while (s < n && e.src.charCodeAt(s) === 96) {
      s++;
    }
    i = e.src.slice(r, s);
    a = o = s;
    while ((a = e.src.indexOf("`", o)) !== -1) {
      for (o = a + 1; o < n && e.src.charCodeAt(o) === 96;) {
        o++;
      }
      if (o - a === i.length) {
        if (!t) {
          e.push({
            type: "code",
            content: e.src.slice(s, a).replace(/[ \n]+/g, " ").trim(),
            block: false,
            level: e.level
          });
        }
        e.pos = o;
        return true;
      }
    }
    if (!t) {
      e.pending += i;
    }
    e.pos += i.length;
    return true;
  }], ["del", function (e, t) {
    var r;
    var n;
    var i;
    var a;
    var o;
    var s = e.posMax;
    var l = e.pos;
    if (e.src.charCodeAt(l) !== 126 || t || l + 4 >= s || e.src.charCodeAt(l + 1) !== 126 || e.level >= e.options.maxNesting || (a = l > 0 ? e.src.charCodeAt(l - 1) : -1, o = e.src.charCodeAt(l + 2), a === 126 || o === 126 || o === 32 || o === 10)) {
      return false;
    }
    for (n = l + 2; n < s && e.src.charCodeAt(n) === 126;) {
      n++;
    }
    if (n > l + 3) {
      e.pos += n - l;
      if (!t) {
        e.pending += e.src.slice(l, n);
      }
      return true;
    }
    e.pos = l + 2;
    i = 1;
    while (e.pos + 1 < s) {
      if (e.src.charCodeAt(e.pos) === 126 && e.src.charCodeAt(e.pos + 1) === 126 && (a = e.src.charCodeAt(e.pos - 1), (o = e.pos + 2 < s ? e.src.charCodeAt(e.pos + 2) : -1) !== 126 && a !== 126 && (a !== 32 && a !== 10 ? i-- : o !== 32 && o !== 10 && i++, i <= 0))) {
        r = true;
        break;
      }
      e.parser.skipToken(e);
    }
    if (r) {
      e.posMax = e.pos;
      e.pos = l + 2;
      if (!t) {
        e.push({
          type: "del_open",
          level: e.level++
        });
        e.parser.tokenize(e);
        e.push({
          type: "del_close",
          level: --e.level
        });
      }
      e.pos = e.posMax + 2;
      e.posMax = s;
      return true;
    } else {
      e.pos = l;
      return false;
    }
  }], ["ins", function (e, t) {
    var r;
    var n;
    var i;
    var a;
    var o;
    var s = e.posMax;
    var l = e.pos;
    if (e.src.charCodeAt(l) !== 43 || t || l + 4 >= s || e.src.charCodeAt(l + 1) !== 43 || e.level >= e.options.maxNesting || (a = l > 0 ? e.src.charCodeAt(l - 1) : -1, o = e.src.charCodeAt(l + 2), a === 43 || o === 43 || o === 32 || o === 10)) {
      return false;
    }
    for (n = l + 2; n < s && e.src.charCodeAt(n) === 43;) {
      n++;
    }
    if (n !== l + 2) {
      e.pos += n - l;
      if (!t) {
        e.pending += e.src.slice(l, n);
      }
      return true;
    }
    e.pos = l + 2;
    i = 1;
    while (e.pos + 1 < s) {
      if (e.src.charCodeAt(e.pos) === 43 && e.src.charCodeAt(e.pos + 1) === 43 && (a = e.src.charCodeAt(e.pos - 1), (o = e.pos + 2 < s ? e.src.charCodeAt(e.pos + 2) : -1) !== 43 && a !== 43 && (a !== 32 && a !== 10 ? i-- : o !== 32 && o !== 10 && i++, i <= 0))) {
        r = true;
        break;
      }
      e.parser.skipToken(e);
    }
    if (r) {
      e.posMax = e.pos;
      e.pos = l + 2;
      if (!t) {
        e.push({
          type: "ins_open",
          level: e.level++
        });
        e.parser.tokenize(e);
        e.push({
          type: "ins_close",
          level: --e.level
        });
      }
      e.pos = e.posMax + 2;
      e.posMax = s;
      return true;
    } else {
      e.pos = l;
      return false;
    }
  }], ["mark", function (e, t) {
    var r;
    var n;
    var i;
    var a;
    var o;
    var s = e.posMax;
    var l = e.pos;
    if (e.src.charCodeAt(l) !== 61 || t || l + 4 >= s || e.src.charCodeAt(l + 1) !== 61 || e.level >= e.options.maxNesting || (a = l > 0 ? e.src.charCodeAt(l - 1) : -1, o = e.src.charCodeAt(l + 2), a === 61 || o === 61 || o === 32 || o === 10)) {
      return false;
    }
    for (n = l + 2; n < s && e.src.charCodeAt(n) === 61;) {
      n++;
    }
    if (n !== l + 2) {
      e.pos += n - l;
      if (!t) {
        e.pending += e.src.slice(l, n);
      }
      return true;
    }
    e.pos = l + 2;
    i = 1;
    while (e.pos + 1 < s) {
      if (e.src.charCodeAt(e.pos) === 61 && e.src.charCodeAt(e.pos + 1) === 61 && (a = e.src.charCodeAt(e.pos - 1), (o = e.pos + 2 < s ? e.src.charCodeAt(e.pos + 2) : -1) !== 61 && a !== 61 && (a !== 32 && a !== 10 ? i-- : o !== 32 && o !== 10 && i++, i <= 0))) {
        r = true;
        break;
      }
      e.parser.skipToken(e);
    }
    if (r) {
      e.posMax = e.pos;
      e.pos = l + 2;
      if (!t) {
        e.push({
          type: "mark_open",
          level: e.level++
        });
        e.parser.tokenize(e);
        e.push({
          type: "mark_close",
          level: --e.level
        });
      }
      e.pos = e.posMax + 2;
      e.posMax = s;
      return true;
    } else {
      e.pos = l;
      return false;
    }
  }], ["emphasis", function (e, t) {
    var r;
    var n;
    var i;
    var a;
    var o;
    var s;
    var l;
    var c = e.posMax;
    var u = e.pos;
    var h = e.src.charCodeAt(u);
    if (h !== 95 && h !== 42 || t) {
      return false;
    }
    r = (l = iz(e, u)).delims;
    if (!l.can_open) {
      e.pos += r;
      if (!t) {
        e.pending += e.src.slice(u, e.pos);
      }
      return true;
    }
    if (e.level >= e.options.maxNesting) {
      return false;
    }
    e.pos = u + r;
    s = [r];
    while (e.pos < c) {
      if (e.src.charCodeAt(e.pos) === h) {
        n = (l = iz(e, e.pos)).delims;
        if (l.can_close) {
          a = s.pop();
          o = n;
          while (a !== o) {
            if (o < a) {
              s.push(a - o);
              break;
            }
            o -= a;
            if (s.length === 0) {
              break;
            }
            e.pos += a;
            a = s.pop();
          }
          if (s.length === 0) {
            r = a;
            i = true;
            break;
          }
          e.pos += n;
          continue;
        }
        if (l.can_open) {
          s.push(n);
        }
        e.pos += n;
        continue;
      }
      e.parser.skipToken(e);
    }
    if (i) {
      e.posMax = e.pos;
      e.pos = u + r;
      if (!t) {
        if (r === 2 || r === 3) {
          e.push({
            type: "strong_open",
            level: e.level++
          });
        }
        if (r === 1 || r === 3) {
          e.push({
            type: "em_open",
            level: e.level++
          });
        }
        e.parser.tokenize(e);
        if (r === 1 || r === 3) {
          e.push({
            type: "em_close",
            level: --e.level
          });
        }
        if (r === 2 || r === 3) {
          e.push({
            type: "strong_close",
            level: --e.level
          });
        }
      }
      e.pos = e.posMax + r;
      e.posMax = c;
      return true;
    } else {
      e.pos = u;
      return false;
    }
  }], ["sub", function (e, t) {
    var r;
    var n;
    var i = e.posMax;
    var a = e.pos;
    if (e.src.charCodeAt(a) !== 126 || t || a + 2 >= i || e.level >= e.options.maxNesting) {
      return false;
    }
    for (e.pos = a + 1; e.pos < i;) {
      if (e.src.charCodeAt(e.pos) === 126) {
        r = true;
        break;
      }
      e.parser.skipToken(e);
    }
    if (!r || a + 1 === e.pos || (n = e.src.slice(a + 1, e.pos)).match(/(^|[^\\])(\\\\)*\s/)) {
      e.pos = a;
      return false;
    } else {
      e.posMax = e.pos;
      e.pos = a + 1;
      if (!t) {
        e.push({
          type: "sub",
          level: e.level,
          content: n.replace(iE, "$1")
        });
      }
      e.pos = e.posMax + 1;
      e.posMax = i;
      return true;
    }
  }], ["sup", function (e, t) {
    var r;
    var n;
    var i = e.posMax;
    var a = e.pos;
    if (e.src.charCodeAt(a) !== 94 || t || a + 2 >= i || e.level >= e.options.maxNesting) {
      return false;
    }
    for (e.pos = a + 1; e.pos < i;) {
      if (e.src.charCodeAt(e.pos) === 94) {
        r = true;
        break;
      }
      e.parser.skipToken(e);
    }
    if (!r || a + 1 === e.pos || (n = e.src.slice(a + 1, e.pos)).match(/(^|[^\\])(\\\\)*\s/)) {
      e.pos = a;
      return false;
    } else {
      e.posMax = e.pos;
      e.pos = a + 1;
      if (!t) {
        e.push({
          type: "sup",
          level: e.level,
          content: n.replace(iI, "$1")
        });
      }
      e.pos = e.posMax + 1;
      e.posMax = i;
      return true;
    }
  }], ["links", function (e, t) {
    var r;
    var n;
    var i;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u = false;
    var h = e.pos;
    var p = e.posMax;
    var d = e.pos;
    var m = e.src.charCodeAt(d);
    if (m === 33) {
      u = true;
      m = e.src.charCodeAt(++d);
    }
    if (m !== 91 || e.level >= e.options.maxNesting || (r = d + 1, (n = n3(e, d)) < 0)) {
      return false;
    }
    if ((s = n + 1) < p && e.src.charCodeAt(s) === 40) {
      for (s++; s < p && ((c = e.src.charCodeAt(s)) === 32 || c === 10); s++);
      if (s >= p) {
        return false;
      }
      d = s;
      if (n7(e, s)) {
        a = e.linkContent;
        s = e.pos;
      } else {
        a = "";
      }
      d = s;
      for (; s < p && ((c = e.src.charCodeAt(s)) === 32 || c === 10); s++);
      if (s < p && d !== s && n2(e, s)) {
        o = e.linkContent;
        s = e.pos;
        for (; s < p && ((c = e.src.charCodeAt(s)) === 32 || c === 10); s++);
      } else {
        o = "";
      }
      if (s >= p || e.src.charCodeAt(s) !== 41) {
        e.pos = h;
        return false;
      }
      s++;
    } else {
      if (e.linkLevel > 0) {
        return false;
      }
      for (; s < p && ((c = e.src.charCodeAt(s)) === 32 || c === 10); s++);
      if (s < p && e.src.charCodeAt(s) === 91) {
        d = s + 1;
        if ((s = n3(e, s)) >= 0) {
          i = e.src.slice(d, s++);
        } else {
          s = d - 1;
        }
      }
      if (!i) {
        if (i === undefined) {
          s = n + 1;
        }
        i = e.src.slice(r, n);
      }
      if (!(l = e.env.references[n8(i)])) {
        e.pos = h;
        return false;
      }
      a = l.href;
      o = l.title;
    }
    if (!t) {
      e.pos = r;
      e.posMax = n;
      if (u) {
        e.push({
          type: "image",
          src: a,
          title: o,
          alt: e.src.substr(r, n - r),
          level: e.level
        });
      } else {
        e.push({
          type: "link_open",
          href: a,
          title: o,
          level: e.level++
        });
        e.linkLevel++;
        e.parser.tokenize(e);
        e.linkLevel--;
        e.push({
          type: "link_close",
          level: --e.level
        });
      }
    }
    e.pos = s;
    e.posMax = p;
    return true;
  }], ["footnote_inline", function (e, t) {
    var r;
    var n;
    var i;
    var a;
    var o = e.posMax;
    var s = e.pos;
    return !(s + 2 >= o) && e.src.charCodeAt(s) === 94 && e.src.charCodeAt(s + 1) === 91 && !(e.level >= e.options.maxNesting) && (r = s + 2, !((n = n3(e, s + 1)) < 0) && (!t && (e.env.footnotes ||= {}, e.env.footnotes.list ||= [], i = e.env.footnotes.list.length, e.pos = r, e.posMax = n, e.push({
      type: "footnote_ref",
      id: i,
      level: e.level
    }), e.linkLevel++, a = e.tokens.length, e.parser.tokenize(e), e.env.footnotes.list[i] = {
      tokens: e.tokens.splice(a)
    }, e.linkLevel--), e.pos = n + 1, e.posMax = o, true));
  }], ["footnote_ref", function (e, t) {
    var r;
    var n;
    var i;
    var a;
    var o = e.posMax;
    var s = e.pos;
    if (s + 3 > o || !e.env.footnotes || !e.env.footnotes.refs || e.src.charCodeAt(s) !== 91 || e.src.charCodeAt(s + 1) !== 94 || e.level >= e.options.maxNesting) {
      return false;
    }
    for (n = s + 2; n < o; n++) {
      if (e.src.charCodeAt(n) === 32 || e.src.charCodeAt(n) === 10) {
        return false;
      }
      if (e.src.charCodeAt(n) === 93) {
        break;
      }
    }
    return n !== s + 2 && !(n >= o) && (n++, r = e.src.slice(s + 2, n - 1), e.env.footnotes.refs[":" + r] !== undefined && (t || (e.env.footnotes.list ||= [], e.env.footnotes.refs[":" + r] < 0 ? (i = e.env.footnotes.list.length, e.env.footnotes.list[i] = {
      label: r,
      count: 0
    }, e.env.footnotes.refs[":" + r] = i) : i = e.env.footnotes.refs[":" + r], a = e.env.footnotes.list[i].count, e.env.footnotes.list[i].count++, e.push({
      type: "footnote_ref",
      id: i,
      subId: a,
      level: e.level
    })), e.pos = n, e.posMax = o, true));
  }], ["autolink", function (e, t) {
    var r;
    var n;
    var i;
    var a;
    var o;
    var s = e.pos;
    return e.src.charCodeAt(s) === 60 && !((r = e.src.slice(s)).indexOf(">") < 0) && ((n = r.match(iB)) ? !(i_.indexOf(n[1].toLowerCase()) < 0) && (o = n6(a = n[0].slice(1, -1)), !!e.parser.validateLink(a) && (t || (e.push({
      type: "link_open",
      href: o,
      level: e.level
    }), e.push({
      type: "text",
      content: a,
      level: e.level + 1
    }), e.push({
      type: "link_close",
      level: e.level
    })), e.pos += n[0].length, true)) : !!(i = r.match(iR)) && (o = n6("mailto:" + (a = i[0].slice(1, -1))), !!e.parser.validateLink(o) && (t || (e.push({
      type: "link_open",
      href: o,
      level: e.level
    }), e.push({
      type: "text",
      content: a,
      level: e.level + 1
    }), e.push({
      type: "link_close",
      level: e.level
    })), e.pos += i[0].length, true)));
  }], ["htmltag", function (e, t) {
    var r;
    var n;
    var i;
    var a;
    var o = e.pos;
    return !!e.options.html && (a = e.posMax, e.src.charCodeAt(o) === 60 && !(o + 2 >= a)) && ((n = e.src.charCodeAt(o + 1)) === 33 || n === 63 || n === 47 || !!((r = n | 32) >= 97) && !!(r <= 122)) && !!(i = e.src.slice(o).match(i$)) && (t || e.push({
      type: "htmltag",
      content: e.src.slice(o, o + i[0].length),
      level: e.level
    }), e.pos += i[0].length, true);
  }], ["entity", function (e, t) {
    var r;
    var n;
    var i = e.pos;
    var a = e.posMax;
    if (e.src.charCodeAt(i) !== 38) {
      return false;
    }
    if (i + 1 < a) {
      if (e.src.charCodeAt(i + 1) === 35) {
        if (n = e.src.slice(i).match(iD)) {
          if (!t) {
            r = n[1][0].toLowerCase() === "x" ? parseInt(n[1].slice(1), 16) : parseInt(n[1], 10);
            e.pending += nH(r) ? nj(r) : nj(65533);
          }
          e.pos += n[0].length;
          return true;
        }
      } else if (n = e.src.slice(i).match(iP)) {
        var o = nF(n[1]);
        if (n[1] !== o) {
          if (!t) {
            e.pending += o;
          }
          e.pos += n[0].length;
          return true;
        }
      }
    }
    if (!t) {
      e.pending += "&";
    }
    e.pos++;
    return true;
  }]];
  function ij() {
    this.ruler = new n4();
    for (var e = 0; e < iH.length; e++) {
      this.ruler.push(iH[e][0], iH[e][1]);
    }
    this.validateLink = iV;
  }
  function iV(e) {
    var t = e.trim().toLowerCase();
    return (t = nX(t)).indexOf(":") === -1 || ["vbscript", "javascript", "file", "data"].indexOf(t.split(":")[0]) === -1;
  }
  ij.prototype.skipToken = function (e) {
    var t;
    var r;
    var n = this.ruler.getRules("");
    var i = n.length;
    var a = e.pos;
    if ((r = e.cacheGet(a)) > 0) {
      e.pos = r;
      return;
    }
    for (t = 0; t < i; t++) {
      if (n[t](e, true)) {
        e.cacheSet(a, e.pos);
        return;
      }
    }
    e.pos++;
    e.cacheSet(a, e.pos);
  };
  ij.prototype.tokenize = function (e) {
    var t;
    var r;
    var n = this.ruler.getRules("");
    var i = n.length;
    var a = e.posMax;
    while (e.pos < a) {
      for (r = 0; r < i && !(t = n[r](e, false)); r++);
      if (t) {
        if (e.pos >= a) {
          break;
        }
        continue;
      }
      e.pending += e.src[e.pos++];
    }
    if (e.pending) {
      e.pushPending();
    }
  };
  ij.prototype.parse = function (e, t, r, n) {
    var i = new n5(e, this, t, r, n);
    this.tokenize(i);
  };
  var iW = {
    default: {
      options: {
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: "language-",
        linkTarget: "",
        typographer: false,
        quotes: "“”‘’",
        highlight: null,
        maxNesting: 20
      },
      components: {
        core: {
          rules: ["block", "inline", "references", "replacements", "smartquotes", "references", "abbr2", "footnote_tail"]
        },
        block: {
          rules: ["blockquote", "code", "fences", "footnote", "heading", "hr", "htmlblock", "lheading", "list", "paragraph", "table"]
        },
        inline: {
          rules: ["autolink", "backticks", "del", "emphasis", "entity", "escape", "footnote_ref", "htmltag", "links", "newline", "text"]
        }
      }
    },
    full: {
      options: {
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: "language-",
        linkTarget: "",
        typographer: false,
        quotes: "“”‘’",
        highlight: null,
        maxNesting: 20
      },
      components: {
        core: {},
        block: {},
        inline: {}
      }
    },
    commonmark: {
      options: {
        html: true,
        xhtmlOut: true,
        breaks: false,
        langPrefix: "language-",
        linkTarget: "",
        typographer: false,
        quotes: "“”‘’",
        highlight: null,
        maxNesting: 20
      },
      components: {
        core: {
          rules: ["block", "inline", "references", "abbr2"]
        },
        block: {
          rules: ["blockquote", "code", "fences", "heading", "hr", "htmlblock", "lheading", "list", "paragraph"]
        },
        inline: {
          rules: ["autolink", "backticks", "emphasis", "entity", "escape", "htmltag", "links", "newline", "text"]
        }
      }
    }
  };
  function iU(e, t, r) {
    this.src = t;
    this.env = r;
    this.options = e.options;
    this.tokens = [];
    this.inlineMode = false;
    this.inline = e.inline;
    this.block = e.block;
    this.renderer = e.renderer;
    this.typographer = e.typographer;
  }
  function iX(e, t) {
    if (typeof e != "string") {
      t = e;
      e = "default";
    }
    if (t) {
      t.linkify;
    }
    this.inline = new ij();
    this.block = new ik();
    this.core = new ih();
    this.renderer = new n1();
    this.ruler = new n4();
    this.options = {};
    this.configure(iW[e]);
    this.set(t || {});
  }
  iX.prototype.set = function (e) {
    n$(this.options, e);
  };
  iX.prototype.configure = function (e) {
    var t = this;
    if (!e) {
      throw Error("Wrong `remarkable` preset, check name/content");
    }
    if (e.options) {
      t.set(e.options);
    }
    if (e.components) {
      Object.keys(e.components).forEach(function (r) {
        if (e.components[r].rules) {
          t[r].ruler.enable(e.components[r].rules, true);
        }
      });
    }
  };
  iX.prototype.use = function (e, t) {
    e(this, t);
    return this;
  };
  iX.prototype.parse = function (e, t) {
    var r = new iU(this, e, t);
    this.core.process(r);
    return r.tokens;
  };
  iX.prototype.render = function (e, t) {
    t = t || {};
    return this.renderer.render(this.parse(e, t), this.options, t);
  };
  iX.prototype.parseInline = function (e, t) {
    var r = new iU(this, e, t);
    r.inlineMode = true;
    this.core.process(r);
    return r.tokens;
  };
  iX.prototype.renderInline = function (e, t) {
    t = t || {};
    return this.renderer.render(this.parseInline(e, t), this.options, t);
  };
  var iZ = {
    isNothing: function (e) {
      return e == null;
    },
    isObject: function (e) {
      return typeof e == "object" && e !== null;
    },
    repeat: function (e, t) {
      var r;
      var n = "";
      for (r = 0; r < t; r += 1) {
        n += e;
      }
      return n;
    },
    isNegativeZero: function (e) {
      return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
    }
  };
  function iG(e, t) {
    var r = "";
    var n = e.reason || "(unknown reason)";
    if (e.mark) {
      if (e.mark.name) {
        r += "in \"" + e.mark.name + "\" ";
      }
      r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")";
      if (!t && e.mark.snippet) {
        r += "\n\n" + e.mark.snippet;
      }
      return n + " " + r;
    } else {
      return n;
    }
  }
  function iY(e, t) {
    Error.call(this);
    this.name = "YAMLException";
    this.reason = e;
    this.mark = t;
    this.message = iG(this, false);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = Error().stack || "";
    }
  }
  function iJ(e, t, r, n, i) {
    var a = "";
    var o = "";
    var s = Math.floor(i / 2) - 1;
    if (n - t > s) {
      t = n - s + (a = " ... ").length;
    }
    if (r - n > s) {
      r = n + s - (o = " ...").length;
    }
    return {
      str: a + e.slice(t, r).replace(/\t/g, "→") + o,
      pos: n - t + a.length
    };
  }
  function iK(e, t) {
    return iZ.repeat(" ", t - e.length) + e;
  }
  iY.prototype = Object.create(Error.prototype);
  iY.prototype.constructor = iY;
  iY.prototype.toString = function (e) {
    return this.name + ": " + iG(this, e);
  };
  function iQ(e, t) {
    t = Object.create(t || null);
    if (!e.buffer) {
      return null;
    }
    t.maxLength ||= 79;
    if (typeof t.indent != "number") {
      t.indent = 1;
    }
    if (typeof t.linesBefore != "number") {
      t.linesBefore = 3;
    }
    if (typeof t.linesAfter != "number") {
      t.linesAfter = 2;
    }
    var r = /\r?\n|\r|\0/g;
    var n = [0];
    var i = [];
    var a = -1;
    while (o = r.exec(e.buffer)) {
      i.push(o.index);
      n.push(o.index + o[0].length);
      if (e.position <= o.index && a < 0) {
        a = n.length - 2;
      }
    }
    if (a < 0) {
      a = n.length - 1;
    }
    var o;
    var s;
    var l;
    var c = "";
    var u = Math.min(e.line + t.linesAfter, i.length).toString().length;
    var h = t.maxLength - (t.indent + u + 3);
    for (s = 1; s <= t.linesBefore && !(a - s < 0); s++) {
      l = iJ(e.buffer, n[a - s], i[a - s], e.position - (n[a] - n[a - s]), h);
      c = iZ.repeat(" ", t.indent) + iK((e.line - s + 1).toString(), u) + " | " + l.str + "\n" + c;
    }
    l = iJ(e.buffer, n[a], i[a], e.position, h);
    c += iZ.repeat(" ", t.indent) + iK((e.line + 1).toString(), u) + " | " + l.str + "\n" + iZ.repeat("-", t.indent + u + 3 + l.pos) + "^\n";
    s = 1;
    for (; s <= t.linesAfter && !(a + s >= i.length); s++) {
      l = iJ(e.buffer, n[a + s], i[a + s], e.position - (n[a] - n[a + s]), h);
      c += iZ.repeat(" ", t.indent) + iK((e.line + s + 1).toString(), u) + " | " + l.str + "\n";
    }
    return c.replace(/\n$/, "");
  }
  var i0 = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"];
  var i1 = ["scalar", "sequence", "mapping"];
  function i4(e, t) {
    var r;
    var n;
    Object.keys(t = t || {}).forEach(function (t) {
      if (i0.indexOf(t) === -1) {
        throw new iY("Unknown option \"" + t + "\" is met in definition of \"" + e + "\" YAML type.");
      }
    });
    this.options = t;
    this.tag = e;
    this.kind = t.kind || null;
    this.resolve = t.resolve || function () {
      return true;
    };
    this.construct = t.construct || function (e) {
      return e;
    };
    this.instanceOf = t.instanceOf || null;
    this.predicate = t.predicate || null;
    this.represent = t.represent || null;
    this.representName = t.representName || null;
    this.defaultStyle = t.defaultStyle || null;
    this.multi = t.multi || false;
    this.styleAliases = (r = t.styleAliases || null, n = {}, r !== null && Object.keys(r).forEach(function (e) {
      r[e].forEach(function (t) {
        n[String(t)] = e;
      });
    }), n);
    if (i1.indexOf(this.kind) === -1) {
      throw new iY("Unknown kind \"" + this.kind + "\" is specified for \"" + e + "\" YAML type.");
    }
  }
  function i5(e, t) {
    var r = [];
    e[t].forEach(function (e) {
      var t = r.length;
      r.forEach(function (r, n) {
        if (r.tag === e.tag && r.kind === e.kind && r.multi === e.multi) {
          t = n;
        }
      });
      r[t] = e;
    });
    return r;
  }
  function i3(e) {
    return this.extend(e);
  }
  i3.prototype.extend = function (e) {
    var t = [];
    var r = [];
    if (e instanceof i4) {
      r.push(e);
    } else if (Array.isArray(e)) {
      r = r.concat(e);
    } else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit))) {
      if (e.implicit) {
        t = t.concat(e.implicit);
      }
      if (e.explicit) {
        r = r.concat(e.explicit);
      }
    } else {
      throw new iY("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    }
    t.forEach(function (e) {
      if (!(e instanceof i4)) {
        throw new iY("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
      if (e.loadKind && e.loadKind !== "scalar") {
        throw new iY("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
      }
      if (e.multi) {
        throw new iY("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
      }
    });
    r.forEach(function (e) {
      if (!(e instanceof i4)) {
        throw new iY("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
    });
    var n = Object.create(i3.prototype);
    n.implicit = (this.implicit || []).concat(t);
    n.explicit = (this.explicit || []).concat(r);
    n.compiledImplicit = i5(n, "implicit");
    n.compiledExplicit = i5(n, "explicit");
    n.compiledTypeMap = function () {
      var e;
      var t;
      var r = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      };
      function n(e) {
        if (e.multi) {
          r.multi[e.kind].push(e);
          r.multi.fallback.push(e);
        } else {
          r[e.kind][e.tag] = r.fallback[e.tag] = e;
        }
      }
      e = 0;
      t = arguments.length;
      for (; e < t; e += 1) {
        arguments[e].forEach(n);
      }
      return r;
    }(n.compiledImplicit, n.compiledExplicit);
    return n;
  };
  var i6 = new i3({
    explicit: [new i4("tag:yaml.org,2002:str", {
      kind: "scalar",
      construct: function (e) {
        if (e !== null) {
          return e;
        } else {
          return "";
        }
      }
    }), new i4("tag:yaml.org,2002:seq", {
      kind: "sequence",
      construct: function (e) {
        if (e !== null) {
          return e;
        } else {
          return [];
        }
      }
    }), new i4("tag:yaml.org,2002:map", {
      kind: "mapping",
      construct: function (e) {
        if (e !== null) {
          return e;
        } else {
          return {};
        }
      }
    })]
  });
  var i7 = new i4("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: function (e) {
      if (e === null) {
        return true;
      }
      var t = e.length;
      return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
    },
    construct: function () {
      return null;
    },
    predicate: function (e) {
      return e === null;
    },
    represent: {
      canonical: function () {
        return "~";
      },
      lowercase: function () {
        return "null";
      },
      uppercase: function () {
        return "NULL";
      },
      camelcase: function () {
        return "Null";
      },
      empty: function () {
        return "";
      }
    },
    defaultStyle: "lowercase"
  });
  var i2 = new i4("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: function (e) {
      if (e === null) {
        return false;
      }
      var t = e.length;
      return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
    },
    construct: function (e) {
      return e === "true" || e === "True" || e === "TRUE";
    },
    predicate: function (e) {
      return Object.prototype.toString.call(e) === "[object Boolean]";
    },
    represent: {
      lowercase: function (e) {
        if (e) {
          return "true";
        } else {
          return "false";
        }
      },
      uppercase: function (e) {
        if (e) {
          return "TRUE";
        } else {
          return "FALSE";
        }
      },
      camelcase: function (e) {
        if (e) {
          return "True";
        } else {
          return "False";
        }
      }
    },
    defaultStyle: "lowercase"
  });
  var i8 = new i4("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: function (e) {
      if (e === null) {
        return false;
      }
      var t;
      var r;
      var n;
      var i;
      var a = e.length;
      var o = 0;
      var s = false;
      if (!a) {
        return false;
      }
      if ((i = e[o]) === "-" || i === "+") {
        i = e[++o];
      }
      if (i === "0") {
        if (o + 1 === a) {
          return true;
        }
        if ((i = e[++o]) === "b") {
          for (o++; o < a; o++) {
            if ((i = e[o]) !== "_") {
              if (i !== "0" && i !== "1") {
                return false;
              }
              s = true;
            }
          }
          return s && i !== "_";
        }
        if (i === "x") {
          for (o++; o < a; o++) {
            if ((i = e[o]) !== "_") {
              if ((!((t = e.charCodeAt(o)) >= 48) || !(t <= 57)) && (!(t >= 65) || !(t <= 70)) && (!(t >= 97) || !(t <= 102))) {
                return false;
              }
              s = true;
            }
          }
          return s && i !== "_";
        }
        if (i === "o") {
          for (o++; o < a; o++) {
            if ((i = e[o]) !== "_") {
              if (!((r = e.charCodeAt(o)) >= 48) || !(r <= 55)) {
                return false;
              }
              s = true;
            }
          }
          return s && i !== "_";
        }
      }
      if (i === "_") {
        return false;
      }
      for (; o < a; o++) {
        if ((i = e[o]) !== "_") {
          if (!((n = e.charCodeAt(o)) >= 48) || !(n <= 57)) {
            return false;
          }
          s = true;
        }
      }
      return !!s && i !== "_";
    },
    construct: function (e) {
      var t;
      var r = e;
      var n = 1;
      if (r.indexOf("_") !== -1) {
        r = r.replace(/_/g, "");
      }
      if ((t = r[0]) === "-" || t === "+") {
        if (t === "-") {
          n = -1;
        }
        t = (r = r.slice(1))[0];
      }
      if (r === "0") {
        return 0;
      }
      if (t === "0") {
        if (r[1] === "b") {
          return n * parseInt(r.slice(2), 2);
        }
        if (r[1] === "x") {
          return n * parseInt(r.slice(2), 16);
        }
        if (r[1] === "o") {
          return n * parseInt(r.slice(2), 8);
        }
      }
      return n * parseInt(r, 10);
    },
    predicate: function (e) {
      return Object.prototype.toString.call(e) === "[object Number]" && e % 1 == 0 && !iZ.isNegativeZero(e);
    },
    represent: {
      binary: function (e) {
        if (e >= 0) {
          return "0b" + e.toString(2);
        } else {
          return "-0b" + e.toString(2).slice(1);
        }
      },
      octal: function (e) {
        if (e >= 0) {
          return "0o" + e.toString(8);
        } else {
          return "-0o" + e.toString(8).slice(1);
        }
      },
      decimal: function (e) {
        return e.toString(10);
      },
      hexadecimal: function (e) {
        if (e >= 0) {
          return "0x" + e.toString(16).toUpperCase();
        } else {
          return "-0x" + e.toString(16).toUpperCase().slice(1);
        }
      }
    },
    defaultStyle: "decimal",
    styleAliases: {
      binary: [2, "bin"],
      octal: [8, "oct"],
      decimal: [10, "dec"],
      hexadecimal: [16, "hex"]
    }
  });
  var i9 = RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
  var ae = /^[-+]?[0-9]+e/;
  var at = new i4("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: function (e) {
      return e !== null && !!i9.test(e) && e[e.length - 1] !== "_";
    },
    construct: function (e) {
      var t;
      var r;
      r = (t = e.replace(/_/g, "").toLowerCase())[0] === "-" ? -1 : 1;
      if ("+-".indexOf(t[0]) >= 0) {
        t = t.slice(1);
      }
      if (t === ".inf") {
        if (r === 1) {
          return Number.POSITIVE_INFINITY;
        } else {
          return Number.NEGATIVE_INFINITY;
        }
      } else if (t === ".nan") {
        return NaN;
      } else {
        return r * parseFloat(t, 10);
      }
    },
    predicate: function (e) {
      return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 != 0 || iZ.isNegativeZero(e));
    },
    represent: function (e, t) {
      var r;
      if (isNaN(e)) {
        switch (t) {
          case "lowercase":
            return ".nan";
          case "uppercase":
            return ".NAN";
          case "camelcase":
            return ".NaN";
        }
      } else if (Number.POSITIVE_INFINITY === e) {
        switch (t) {
          case "lowercase":
            return ".inf";
          case "uppercase":
            return ".INF";
          case "camelcase":
            return ".Inf";
        }
      } else if (Number.NEGATIVE_INFINITY === e) {
        switch (t) {
          case "lowercase":
            return "-.inf";
          case "uppercase":
            return "-.INF";
          case "camelcase":
            return "-.Inf";
        }
      } else if (iZ.isNegativeZero(e)) {
        return "-0.0";
      }
      r = e.toString(10);
      if (ae.test(r)) {
        return r.replace("e", ".e");
      } else {
        return r;
      }
    },
    defaultStyle: "lowercase"
  });
  var ar = i6.extend({
    implicit: [i7, i2, i8, at]
  });
  var an = RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
  var ai = RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
  var aa = new i4("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: function (e) {
      return e !== null && (an.exec(e) !== null || ai.exec(e) !== null);
    },
    construct: function (e) {
      var t;
      var r;
      var n;
      var i;
      var a;
      var o;
      var s;
      var l;
      var c = 0;
      var u = null;
      if ((t = an.exec(e)) === null) {
        t = ai.exec(e);
      }
      if (t === null) {
        throw Error("Date resolve error");
      }
      r = +t[1];
      n = +t[2] - 1;
      i = +t[3];
      if (!t[4]) {
        return new Date(Date.UTC(r, n, i));
      }
      a = +t[4];
      o = +t[5];
      s = +t[6];
      if (t[7]) {
        for (c = t[7].slice(0, 3); c.length < 3;) {
          c += "0";
        }
        c *= 1;
      }
      if (t[9]) {
        u = (+t[10] * 60 + +(t[11] || 0)) * 60000;
        if (t[9] === "-") {
          u = -u;
        }
      }
      l = new Date(Date.UTC(r, n, i, a, o, s, c));
      if (u) {
        l.setTime(l.getTime() - u);
      }
      return l;
    },
    instanceOf: Date,
    represent: function (e) {
      return e.toISOString();
    }
  });
  var ao = new i4("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: function (e) {
      return e === "<<" || e === null;
    }
  });
  var as = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
  var al = new i4("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: function (e) {
      if (e === null) {
        return false;
      }
      var t;
      var r;
      var n = 0;
      var i = e.length;
      for (r = 0; r < i; r++) {
        if (!((t = as.indexOf(e.charAt(r))) > 64)) {
          if (t < 0) {
            return false;
          }
          n += 6;
        }
      }
      return n % 8 == 0;
    },
    construct: function (e) {
      var t;
      var r;
      var n = e.replace(/[\r\n=]/g, "");
      var i = n.length;
      var a = 0;
      var o = [];
      for (t = 0; t < i; t++) {
        if (t % 4 == 0 && t) {
          o.push(a >> 16 & 255);
          o.push(a >> 8 & 255);
          o.push(a & 255);
        }
        a = a << 6 | as.indexOf(n.charAt(t));
      }
      if ((r = i % 4 * 6) == 0) {
        o.push(a >> 16 & 255);
        o.push(a >> 8 & 255);
        o.push(a & 255);
      } else if (r === 18) {
        o.push(a >> 10 & 255);
        o.push(a >> 2 & 255);
      } else if (r === 12) {
        o.push(a >> 4 & 255);
      }
      return new Uint8Array(o);
    },
    predicate: function (e) {
      return Object.prototype.toString.call(e) === "[object Uint8Array]";
    },
    represent: function (e) {
      var t;
      var r;
      var n = "";
      var i = 0;
      var a = e.length;
      for (t = 0; t < a; t++) {
        if (t % 3 == 0 && t) {
          n += as[i >> 18 & 63];
          n += as[i >> 12 & 63];
          n += as[i >> 6 & 63];
          n += as[i & 63];
        }
        i = (i << 8) + e[t];
      }
      if ((r = a % 3) == 0) {
        n += as[i >> 18 & 63];
        n += as[i >> 12 & 63];
        n += as[i >> 6 & 63];
        n += as[i & 63];
      } else if (r === 2) {
        n += as[i >> 10 & 63];
        n += as[i >> 4 & 63];
        n += as[i << 2 & 63];
        n += as[64];
      } else if (r === 1) {
        n += as[i >> 2 & 63];
        n += as[i << 4 & 63];
        n += as[64];
        n += as[64];
      }
      return n;
    }
  });
  var ac = Object.prototype.hasOwnProperty;
  var au = Object.prototype.toString;
  var ah = new i4("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: function (e) {
      if (e === null) {
        return true;
      }
      var t;
      var r;
      var n;
      var i;
      var a;
      var o = [];
      t = 0;
      r = e.length;
      for (; t < r; t += 1) {
        n = e[t];
        a = false;
        if (au.call(n) !== "[object Object]") {
          return false;
        }
        for (i in n) {
          if (ac.call(n, i)) {
            if (a) {
              return false;
            }
            a = true;
          }
        }
        if (!a || o.indexOf(i) !== -1) {
          return false;
        }
        o.push(i);
      }
      return true;
    },
    construct: function (e) {
      if (e !== null) {
        return e;
      } else {
        return [];
      }
    }
  });
  var ap = Object.prototype.toString;
  var ad = new i4("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: function (e) {
      var t;
      var r;
      var n;
      var i;
      var a;
      if (e === null) {
        return true;
      }
      t = 0;
      a = Array(e.length);
      r = e.length;
      for (; t < r; t += 1) {
        n = e[t];
        if (ap.call(n) !== "[object Object]" || (i = Object.keys(n)).length !== 1) {
          return false;
        }
        a[t] = [i[0], n[i[0]]];
      }
      return true;
    },
    construct: function (e) {
      var t;
      var r;
      var n;
      var i;
      var a;
      if (e === null) {
        return [];
      }
      t = 0;
      a = Array(e.length);
      r = e.length;
      for (; t < r; t += 1) {
        i = Object.keys(n = e[t]);
        a[t] = [i[0], n[i[0]]];
      }
      return a;
    }
  });
  var am = Object.prototype.hasOwnProperty;
  var af = new i4("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: function (e) {
      var t;
      if (e === null) {
        return true;
      }
      for (t in e) {
        if (am.call(e, t) && e[t] !== null) {
          return false;
        }
      }
      return true;
    },
    construct: function (e) {
      if (e !== null) {
        return e;
      } else {
        return {};
      }
    }
  });
  var ag = ar.extend({
    implicit: [aa, ao],
    explicit: [al, ah, ad, af]
  });
  var av = Object.prototype.hasOwnProperty;
  var ab = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  var ay = /[\x85\u2028\u2029]/;
  var ax = /[,\[\]\{\}]/;
  var aw = /^(?:!|!!|![a-z\-]+!)$/i;
  var ak = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function aS(e) {
    return Object.prototype.toString.call(e);
  }
  function aA(e) {
    return e === 10 || e === 13;
  }
  function aT(e) {
    return e === 9 || e === 32;
  }
  function aC(e) {
    return e === 9 || e === 32 || e === 10 || e === 13;
  }
  function aM(e) {
    return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
  }
  function aN(e) {
    if (e === 48) {
      return "\0";
    } else if (e === 97) {
      return "";
    } else if (e === 98) {
      return "\b";
    } else if (e === 116) {
      return "\t";
    } else if (e === 9) {
      return "\t";
    } else if (e === 110) {
      return "\n";
    } else if (e === 118) {
      return "";
    } else if (e === 102) {
      return "\f";
    } else if (e === 114) {
      return "\r";
    } else if (e === 101) {
      return "";
    } else if (e === 32) {
      return " ";
    } else if (e === 34) {
      return "\"";
    } else if (e === 47) {
      return "/";
    } else if (e === 92) {
      return "\\";
    } else if (e === 78) {
      return "";
    } else if (e === 95) {
      return "\xA0";
    } else if (e === 76) {
      return "\u2028";
    } else if (e === 80) {
      return "\u2029";
    } else {
      return "";
    }
  }
  var az = Array(256);
  var aE = Array(256);
  var aI = 0;
  for (; aI < 256; aI++) {
    az[aI] = +!!aN(aI);
    aE[aI] = aN(aI);
  }
  function a_(e, t) {
    this.input = e;
    this.filename = t.filename || null;
    this.schema = t.schema || ag;
    this.onWarning = t.onWarning || null;
    this.legacy = t.legacy || false;
    this.json = t.json || false;
    this.listener = t.listener || null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = e.length;
    this.position = 0;
    this.line = 0;
    this.lineStart = 0;
    this.lineIndent = 0;
    this.firstTabInLine = -1;
    this.documents = [];
  }
  function aR(e, t) {
    var r = {
      name: e.filename,
      buffer: e.input.slice(0, -1),
      position: e.position,
      line: e.line,
      column: e.position - e.lineStart
    };
    r.snippet = iQ(r);
    return new iY(t, r);
  }
  function aB(e, t) {
    throw aR(e, t);
  }
  function aq(e, t) {
    if (e.onWarning) {
      e.onWarning.call(null, aR(e, t));
    }
  }
  var aO = {
    YAML: function (e, t, r) {
      var n;
      var i;
      var a;
      if (e.version !== null) {
        aB(e, "duplication of %YAML directive");
      }
      if (r.length !== 1) {
        aB(e, "YAML directive accepts exactly one argument");
      }
      if ((n = /^([0-9]+)\.([0-9]+)$/.exec(r[0])) === null) {
        aB(e, "ill-formed argument of the YAML directive");
      }
      i = parseInt(n[1], 10);
      a = parseInt(n[2], 10);
      if (i !== 1) {
        aB(e, "unacceptable YAML version of the document");
      }
      e.version = r[0];
      e.checkLineBreaks = a < 2;
      if (a !== 1 && a !== 2) {
        aq(e, "unsupported YAML version of the document");
      }
    },
    TAG: function (e, t, r) {
      var n;
      var i;
      if (r.length !== 2) {
        aB(e, "TAG directive accepts exactly two arguments");
      }
      n = r[0];
      i = r[1];
      if (!aw.test(n)) {
        aB(e, "ill-formed tag handle (first argument) of the TAG directive");
      }
      if (av.call(e.tagMap, n)) {
        aB(e, "there is a previously declared suffix for \"" + n + "\" tag handle");
      }
      if (!ak.test(i)) {
        aB(e, "ill-formed tag prefix (second argument) of the TAG directive");
      }
      try {
        i = decodeURIComponent(i);
      } catch (t) {
        aB(e, "tag prefix is malformed: " + i);
      }
      e.tagMap[n] = i;
    }
  };
  function aF(e, t, r, n) {
    var i;
    var a;
    var o;
    var s;
    if (t < r) {
      s = e.input.slice(t, r);
      if (n) {
        i = 0;
        a = s.length;
        for (; i < a; i += 1) {
          if ((o = s.charCodeAt(i)) !== 9 && (!(o >= 32) || !(o <= 1114111))) {
            aB(e, "expected valid JSON character");
          }
        }
      } else if (ab.test(s)) {
        aB(e, "the stream contains non-printable characters");
      }
      e.result += s;
    }
  }
  function aL(e, t, r, n) {
    var i;
    var a;
    var o;
    var s;
    if (!iZ.isObject(r)) {
      aB(e, "cannot merge mappings; the provided source object is unacceptable");
    }
    o = 0;
    s = (i = Object.keys(r)).length;
    for (; o < s; o += 1) {
      a = i[o];
      if (!av.call(t, a)) {
        t[a] = r[a];
        n[a] = true;
      }
    }
  }
  function a$(e, t, r, n, i, a, o, s, l) {
    var c;
    var u;
    if (Array.isArray(i)) {
      c = 0;
      u = (i = Array.prototype.slice.call(i)).length;
      for (; c < u; c += 1) {
        if (Array.isArray(i[c])) {
          aB(e, "nested arrays are not supported inside keys");
        }
        if (typeof i == "object" && aS(i[c]) === "[object Object]") {
          i[c] = "[object Object]";
        }
      }
    }
    if (typeof i == "object" && aS(i) === "[object Object]") {
      i = "[object Object]";
    }
    i = String(i);
    if (t === null) {
      t = {};
    }
    if (n === "tag:yaml.org,2002:merge") {
      if (Array.isArray(a)) {
        c = 0;
        u = a.length;
        for (; c < u; c += 1) {
          aL(e, t, a[c], r);
        }
      } else {
        aL(e, t, a, r);
      }
    } else {
      if (!e.json && !av.call(r, i) && av.call(t, i)) {
        e.line = o || e.line;
        e.lineStart = s || e.lineStart;
        e.position = l || e.position;
        aB(e, "duplicated mapping key");
      }
      if (i === "__proto__") {
        Object.defineProperty(t, i, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: a
        });
      } else {
        t[i] = a;
      }
      delete r[i];
    }
    return t;
  }
  function aD(e) {
    var t;
    if ((t = e.input.charCodeAt(e.position)) === 10) {
      e.position++;
    } else if (t === 13) {
      e.position++;
      if (e.input.charCodeAt(e.position) === 10) {
        e.position++;
      }
    } else {
      aB(e, "a line break is expected");
    }
    e.line += 1;
    e.lineStart = e.position;
    e.firstTabInLine = -1;
  }
  function aP(e, t, r) {
    var n = 0;
    var i = e.input.charCodeAt(e.position);
    while (i !== 0) {
      while (aT(i)) {
        if (i === 9 && e.firstTabInLine === -1) {
          e.firstTabInLine = e.position;
        }
        i = e.input.charCodeAt(++e.position);
      }
      if (t && i === 35) {
        do {
          i = e.input.charCodeAt(++e.position);
        } while (i !== 10 && i !== 13 && i !== 0);
      }
      if (aA(i)) {
        aD(e);
        i = e.input.charCodeAt(e.position);
        n++;
        e.lineIndent = 0;
        while (i === 32) {
          e.lineIndent++;
          i = e.input.charCodeAt(++e.position);
        }
      } else {
        break;
      }
    }
    if (r !== -1 && n !== 0 && e.lineIndent < r) {
      aq(e, "deficient indentation");
    }
    return n;
  }
  function aH(e) {
    var t;
    var r = e.position;
    return ((t = e.input.charCodeAt(r)) === 45 || t === 46) && t === e.input.charCodeAt(r + 1) && t === e.input.charCodeAt(r + 2) && !!(r += 3, (t = e.input.charCodeAt(r)) === 0 || aC(t));
  }
  function aj(e, t) {
    if (t === 1) {
      e.result += " ";
    } else if (t > 1) {
      e.result += iZ.repeat("\n", t - 1);
    }
  }
  function aV(e, t) {
    var r;
    var n;
    var i = e.tag;
    var a = e.anchor;
    var o = [];
    var s = false;
    if (e.firstTabInLine !== -1) {
      return false;
    }
    if (e.anchor !== null) {
      e.anchorMap[e.anchor] = o;
    }
    n = e.input.charCodeAt(e.position);
    while (n !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, aB(e, "tab characters must not be used in indentation")), n === 45 && aC(e.input.charCodeAt(e.position + 1)))) {
      s = true;
      e.position++;
      if (aP(e, true, -1) && e.lineIndent <= t) {
        o.push(null);
        n = e.input.charCodeAt(e.position);
        continue;
      }
      r = e.line;
      aW(e, t, 3, false, true);
      o.push(e.result);
      aP(e, true, -1);
      n = e.input.charCodeAt(e.position);
      if ((e.line === r || e.lineIndent > t) && n !== 0) {
        aB(e, "bad indentation of a sequence entry");
      } else if (e.lineIndent < t) {
        break;
      }
    }
    return !!s && (e.tag = i, e.anchor = a, e.kind = "sequence", e.result = o, true);
  }
  function aW(e, t, r, n, i) {
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var h;
    var p;
    var d;
    var m = 1;
    var f = false;
    var g = false;
    if (e.listener !== null) {
      e.listener("open", e);
    }
    e.tag = null;
    e.anchor = null;
    e.kind = null;
    e.result = null;
    a = o = s = r === 4 || r === 3;
    if (n && aP(e, true, -1)) {
      f = true;
      if (e.lineIndent > t) {
        m = 1;
      } else if (e.lineIndent === t) {
        m = 0;
      } else if (e.lineIndent < t) {
        m = -1;
      }
    }
    if (m === 1) {
      while (function (e) {
        var t;
        var r;
        var n;
        var i;
        var a = false;
        var o = false;
        if ((i = e.input.charCodeAt(e.position)) !== 33) {
          return false;
        }
        if (e.tag !== null) {
          aB(e, "duplication of a tag property");
        }
        if ((i = e.input.charCodeAt(++e.position)) === 60) {
          a = true;
          i = e.input.charCodeAt(++e.position);
        } else if (i === 33) {
          o = true;
          r = "!!";
          i = e.input.charCodeAt(++e.position);
        } else {
          r = "!";
        }
        t = e.position;
        if (a) {
          do {
            i = e.input.charCodeAt(++e.position);
          } while (i !== 0 && i !== 62);
          if (e.position < e.length) {
            n = e.input.slice(t, e.position);
            i = e.input.charCodeAt(++e.position);
          } else {
            aB(e, "unexpected end of the stream within a verbatim tag");
          }
        } else {
          while (i !== 0 && !aC(i)) {
            if (i === 33) {
              if (o) {
                aB(e, "tag suffix cannot contain exclamation marks");
              } else {
                r = e.input.slice(t - 1, e.position + 1);
                if (!aw.test(r)) {
                  aB(e, "named tag handle cannot contain such characters");
                }
                o = true;
                t = e.position + 1;
              }
            }
            i = e.input.charCodeAt(++e.position);
          }
          n = e.input.slice(t, e.position);
          if (ax.test(n)) {
            aB(e, "tag suffix cannot contain flow indicator characters");
          }
        }
        if (n && !ak.test(n)) {
          aB(e, "tag name cannot contain such characters: " + n);
        }
        try {
          n = decodeURIComponent(n);
        } catch (t) {
          aB(e, "tag name is malformed: " + n);
        }
        if (a) {
          e.tag = n;
        } else if (av.call(e.tagMap, r)) {
          e.tag = e.tagMap[r] + n;
        } else if (r === "!") {
          e.tag = "!" + n;
        } else if (r === "!!") {
          e.tag = "tag:yaml.org,2002:" + n;
        } else {
          aB(e, "undeclared tag handle \"" + r + "\"");
        }
        return true;
      }(e) || function (e) {
        var t;
        var r;
        if ((r = e.input.charCodeAt(e.position)) !== 38) {
          return false;
        }
        if (e.anchor !== null) {
          aB(e, "duplication of an anchor property");
        }
        r = e.input.charCodeAt(++e.position);
        t = e.position;
        while (r !== 0 && !aC(r) && !aM(r)) {
          r = e.input.charCodeAt(++e.position);
        }
        if (e.position === t) {
          aB(e, "name of an anchor node must contain at least one character");
        }
        e.anchor = e.input.slice(t, e.position);
        return true;
      }(e)) {
        if (aP(e, true, -1)) {
          f = true;
          s = a;
          if (e.lineIndent > t) {
            m = 1;
          } else if (e.lineIndent === t) {
            m = 0;
          } else if (e.lineIndent < t) {
            m = -1;
          }
        } else {
          s = false;
        }
      }
    }
    s &&= f || i;
    if (m === 1 || r === 4) {
      p = r === 1 || r === 2 ? t : t + 1;
      d = e.position - e.lineStart;
      if (m === 1) {
        if (s && (aV(e, d) || function (e, t, r) {
          var n;
          var i;
          var a;
          var o;
          var s;
          var l;
          var c;
          var u = e.tag;
          var h = e.anchor;
          var p = {};
          var d = Object.create(null);
          var m = null;
          var f = null;
          var g = null;
          var v = false;
          var b = false;
          if (e.firstTabInLine !== -1) {
            return false;
          }
          if (e.anchor !== null) {
            e.anchorMap[e.anchor] = p;
          }
          c = e.input.charCodeAt(e.position);
          while (c !== 0) {
            if (!v && e.firstTabInLine !== -1) {
              e.position = e.firstTabInLine;
              aB(e, "tab characters must not be used in indentation");
            }
            n = e.input.charCodeAt(e.position + 1);
            a = e.line;
            if ((c === 63 || c === 58) && aC(n)) {
              if (c === 63) {
                if (v) {
                  a$(e, p, d, m, f, null, o, s, l);
                  m = f = g = null;
                }
                b = true;
                v = true;
                i = true;
              } else if (v) {
                v = false;
                i = true;
              } else {
                aB(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
              }
              e.position += 1;
              c = n;
            } else {
              o = e.line;
              s = e.lineStart;
              l = e.position;
              if (!aW(e, r, 2, false, true)) {
                break;
              }
              if (e.line === a) {
                for (c = e.input.charCodeAt(e.position); aT(c);) {
                  c = e.input.charCodeAt(++e.position);
                }
                if (c === 58) {
                  if (!aC(c = e.input.charCodeAt(++e.position))) {
                    aB(e, "a whitespace character is expected after the key-value separator within a block mapping");
                  }
                  if (v) {
                    a$(e, p, d, m, f, null, o, s, l);
                    m = f = g = null;
                  }
                  b = true;
                  v = false;
                  i = false;
                  m = e.tag;
                  f = e.result;
                } else {
                  if (!b) {
                    e.tag = u;
                    e.anchor = h;
                    return true;
                  }
                  aB(e, "can not read an implicit mapping pair; a colon is missed");
                }
              } else {
                if (!b) {
                  e.tag = u;
                  e.anchor = h;
                  return true;
                }
                aB(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
              }
            }
            if (e.line === a || e.lineIndent > t) {
              if (v) {
                o = e.line;
                s = e.lineStart;
                l = e.position;
              }
              if (aW(e, t, 4, true, i)) {
                if (v) {
                  f = e.result;
                } else {
                  g = e.result;
                }
              }
              if (!v) {
                a$(e, p, d, m, f, g, o, s, l);
                m = f = g = null;
              }
              aP(e, true, -1);
              c = e.input.charCodeAt(e.position);
            }
            if ((e.line === a || e.lineIndent > t) && c !== 0) {
              aB(e, "bad indentation of a mapping entry");
            } else if (e.lineIndent < t) {
              break;
            }
          }
          if (v) {
            a$(e, p, d, m, f, null, o, s, l);
          }
          if (b) {
            e.tag = u;
            e.anchor = h;
            e.kind = "mapping";
            e.result = p;
          }
          return b;
        }(e, d, p)) || function (e, t) {
          var r;
          var n;
          var i;
          var a;
          var o;
          var s;
          var l;
          var c;
          var u;
          var h;
          var p;
          var d;
          var m = true;
          var f = e.tag;
          var g = e.anchor;
          var v = Object.create(null);
          if ((d = e.input.charCodeAt(e.position)) === 91) {
            o = 93;
            c = false;
            a = [];
          } else {
            if (d !== 123) {
              return false;
            }
            o = 125;
            c = true;
            a = {};
          }
          if (e.anchor !== null) {
            e.anchorMap[e.anchor] = a;
          }
          d = e.input.charCodeAt(++e.position);
          while (d !== 0) {
            aP(e, true, t);
            if ((d = e.input.charCodeAt(e.position)) === o) {
              e.position++;
              e.tag = f;
              e.anchor = g;
              e.kind = c ? "mapping" : "sequence";
              e.result = a;
              return true;
            }
            if (m) {
              if (d === 44) {
                aB(e, "expected the node content, but found ','");
              }
            } else {
              aB(e, "missed comma between flow collection entries");
            }
            h = u = p = null;
            s = l = false;
            if (d === 63 && aC(e.input.charCodeAt(e.position + 1))) {
              s = l = true;
              e.position++;
              aP(e, true, t);
            }
            r = e.line;
            n = e.lineStart;
            i = e.position;
            aW(e, t, 1, false, true);
            h = e.tag;
            u = e.result;
            aP(e, true, t);
            d = e.input.charCodeAt(e.position);
            if ((l || e.line === r) && d === 58) {
              s = true;
              d = e.input.charCodeAt(++e.position);
              aP(e, true, t);
              aW(e, t, 1, false, true);
              p = e.result;
            }
            if (c) {
              a$(e, a, v, h, u, p, r, n, i);
            } else if (s) {
              a.push(a$(e, null, v, h, u, p, r, n, i));
            } else {
              a.push(u);
            }
            aP(e, true, t);
            if ((d = e.input.charCodeAt(e.position)) === 44) {
              m = true;
              d = e.input.charCodeAt(++e.position);
            } else {
              m = false;
            }
          }
          aB(e, "unexpected end of the stream within a flow collection");
        }(e, p)) {
          g = true;
        } else {
          if (o && function (e, t) {
            var r;
            var n;
            var i;
            var a;
            var o;
            var s = 1;
            var l = false;
            var c = false;
            var u = t;
            var h = 0;
            var p = false;
            if ((o = e.input.charCodeAt(e.position)) === 124) {
              i = false;
            } else {
              if (o !== 62) {
                return false;
              }
              i = true;
            }
            e.kind = "scalar";
            e.result = "";
            while (o !== 0) {
              if ((o = e.input.charCodeAt(++e.position)) === 43 || o === 45) {
                if (s === 1) {
                  s = o === 43 ? 3 : 2;
                } else {
                  aB(e, "repeat of a chomping mode identifier");
                }
              } else if ((a = (r = o) >= 48 && r <= 57 ? r - 48 : -1) >= 0) {
                if (a === 0) {
                  aB(e, "bad explicit indentation width of a block scalar; it cannot be less than one");
                } else if (c) {
                  aB(e, "repeat of an indentation width identifier");
                } else {
                  u = t + a - 1;
                  c = true;
                }
              } else {
                break;
              }
            }
            if (aT(o)) {
              do {
                o = e.input.charCodeAt(++e.position);
              } while (aT(o));
              if (o === 35) {
                do {
                  o = e.input.charCodeAt(++e.position);
                } while (!aA(o) && o !== 0);
              }
            }
            while (o !== 0) {
              aD(e);
              e.lineIndent = 0;
              o = e.input.charCodeAt(e.position);
              while ((!c || e.lineIndent < u) && o === 32) {
                e.lineIndent++;
                o = e.input.charCodeAt(++e.position);
              }
              if (!c && e.lineIndent > u) {
                u = e.lineIndent;
              }
              if (aA(o)) {
                h++;
                continue;
              }
              if (e.lineIndent < u) {
                if (s === 3) {
                  e.result += iZ.repeat("\n", l ? 1 + h : h);
                } else if (s === 1 && l) {
                  e.result += "\n";
                }
                break;
              }
              if (i) {
                if (aT(o)) {
                  p = true;
                  e.result += iZ.repeat("\n", l ? 1 + h : h);
                } else if (p) {
                  p = false;
                  e.result += iZ.repeat("\n", h + 1);
                } else if (h === 0) {
                  if (l) {
                    e.result += " ";
                  }
                } else {
                  e.result += iZ.repeat("\n", h);
                }
              } else {
                e.result += iZ.repeat("\n", l ? 1 + h : h);
              }
              l = true;
              c = true;
              h = 0;
              n = e.position;
              while (!aA(o) && o !== 0) {
                o = e.input.charCodeAt(++e.position);
              }
              aF(e, n, e.position, false);
            }
            return true;
          }(e, p) || function (e, t) {
            var r;
            var n;
            var i;
            if ((r = e.input.charCodeAt(e.position)) !== 39) {
              return false;
            }
            e.kind = "scalar";
            e.result = "";
            e.position++;
            n = i = e.position;
            while ((r = e.input.charCodeAt(e.position)) !== 0) {
              if (r === 39) {
                aF(e, n, e.position, true);
                if ((r = e.input.charCodeAt(++e.position)) !== 39) {
                  return true;
                }
                n = e.position;
                e.position++;
                i = e.position;
              } else if (aA(r)) {
                aF(e, n, i, true);
                aj(e, aP(e, false, t));
                n = i = e.position;
              } else if (e.position === e.lineStart && aH(e)) {
                aB(e, "unexpected end of the document within a single quoted scalar");
              } else {
                e.position++;
                i = e.position;
              }
            }
            aB(e, "unexpected end of the stream within a single quoted scalar");
          }(e, p) || function (e, t) {
            var r;
            var n;
            var i;
            var a;
            var o;
            var s;
            var l;
            var c;
            if ((s = e.input.charCodeAt(e.position)) !== 34) {
              return false;
            }
            e.kind = "scalar";
            e.result = "";
            e.position++;
            r = n = e.position;
            while ((s = e.input.charCodeAt(e.position)) !== 0) {
              if (s === 34) {
                aF(e, r, e.position, true);
                e.position++;
                return true;
              }
              if (s === 92) {
                aF(e, r, e.position, true);
                if (aA(s = e.input.charCodeAt(++e.position))) {
                  aP(e, false, t);
                } else if (s < 256 && az[s]) {
                  e.result += aE[s];
                  e.position++;
                } else if ((o = (l = s) === 120 ? 2 : l === 117 ? 4 : (l === 85) * 8) > 0) {
                  i = o;
                  a = 0;
                  for (; i > 0; i--) {
                    if ((o = function (e) {
                      var t;
                      if (e >= 48 && e <= 57) {
                        return e - 48;
                      } else if ((t = e | 32) >= 97 && t <= 102) {
                        return t - 97 + 10;
                      } else {
                        return -1;
                      }
                    }(s = e.input.charCodeAt(++e.position))) >= 0) {
                      a = (a << 4) + o;
                    } else {
                      aB(e, "expected hexadecimal character");
                    }
                  }
                  e.result += (c = a) <= 65535 ? String.fromCharCode(c) : String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);
                  e.position++;
                } else {
                  aB(e, "unknown escape sequence");
                }
                r = n = e.position;
              } else if (aA(s)) {
                aF(e, r, n, true);
                aj(e, aP(e, false, t));
                r = n = e.position;
              } else if (e.position === e.lineStart && aH(e)) {
                aB(e, "unexpected end of the document within a double quoted scalar");
              } else {
                e.position++;
                n = e.position;
              }
            }
            aB(e, "unexpected end of the stream within a double quoted scalar");
          }(e, p)) {
            g = true;
          } else if (function (e) {
            var t;
            var r;
            var n;
            if ((n = e.input.charCodeAt(e.position)) !== 42) {
              return false;
            }
            n = e.input.charCodeAt(++e.position);
            t = e.position;
            while (n !== 0 && !aC(n) && !aM(n)) {
              n = e.input.charCodeAt(++e.position);
            }
            if (e.position === t) {
              aB(e, "name of an alias node must contain at least one character");
            }
            r = e.input.slice(t, e.position);
            if (!av.call(e.anchorMap, r)) {
              aB(e, "unidentified alias \"" + r + "\"");
            }
            e.result = e.anchorMap[r];
            aP(e, true, -1);
            return true;
          }(e)) {
            g = true;
            if (e.tag !== null || e.anchor !== null) {
              aB(e, "alias node should not have any properties");
            }
          } else if (function (e, t, r) {
            var n;
            var i;
            var a;
            var o;
            var s;
            var l;
            var c;
            var u;
            var h = e.kind;
            var p = e.result;
            if (aC(u = e.input.charCodeAt(e.position)) || aM(u) || u === 35 || u === 38 || u === 42 || u === 33 || u === 124 || u === 62 || u === 39 || u === 34 || u === 37 || u === 64 || u === 96 || (u === 63 || u === 45) && (aC(n = e.input.charCodeAt(e.position + 1)) || r && aM(n))) {
              return false;
            }
            e.kind = "scalar";
            e.result = "";
            i = a = e.position;
            o = false;
            while (u !== 0) {
              if (u === 58) {
                if (aC(n = e.input.charCodeAt(e.position + 1)) || r && aM(n)) {
                  break;
                }
              } else if (u === 35) {
                if (aC(e.input.charCodeAt(e.position - 1))) {
                  break;
                }
              } else if (e.position === e.lineStart && aH(e) || r && aM(u)) {
                break;
              } else if (aA(u)) {
                s = e.line;
                l = e.lineStart;
                c = e.lineIndent;
                aP(e, false, -1);
                if (e.lineIndent >= t) {
                  o = true;
                  u = e.input.charCodeAt(e.position);
                  continue;
                }
                e.position = a;
                e.line = s;
                e.lineStart = l;
                e.lineIndent = c;
                break;
              }
              if (o) {
                aF(e, i, a, false);
                aj(e, e.line - s);
                i = a = e.position;
                o = false;
              }
              if (!aT(u)) {
                a = e.position + 1;
              }
              u = e.input.charCodeAt(++e.position);
            }
            aF(e, i, a, false);
            return !!e.result || (e.kind = h, e.result = p, false);
          }(e, p, r === 1)) {
            g = true;
            if (e.tag === null) {
              e.tag = "?";
            }
          }
          if (e.anchor !== null) {
            e.anchorMap[e.anchor] = e.result;
          }
        }
      } else if (m === 0) {
        g = s && aV(e, d);
      }
    }
    if (e.tag === null) {
      if (e.anchor !== null) {
        e.anchorMap[e.anchor] = e.result;
      }
    } else if (e.tag === "?") {
      if (e.result !== null && e.kind !== "scalar") {
        aB(e, "unacceptable node kind for !<?> tag; it should be \"scalar\", not \"" + e.kind + "\"");
      }
      l = 0;
      c = e.implicitTypes.length;
      for (; l < c; l += 1) {
        if ((h = e.implicitTypes[l]).resolve(e.result)) {
          e.result = h.construct(e.result);
          e.tag = h.tag;
          if (e.anchor !== null) {
            e.anchorMap[e.anchor] = e.result;
          }
          break;
        }
      }
    } else if (e.tag !== "!") {
      if (av.call(e.typeMap[e.kind || "fallback"], e.tag)) {
        h = e.typeMap[e.kind || "fallback"][e.tag];
      } else {
        l = 0;
        h = null;
        c = (u = e.typeMap.multi[e.kind || "fallback"]).length;
        for (; l < c; l += 1) {
          if (e.tag.slice(0, u[l].tag.length) === u[l].tag) {
            h = u[l];
            break;
          }
        }
      }
      if (!h) {
        aB(e, "unknown tag !<" + e.tag + ">");
      }
      if (e.result !== null && h.kind !== e.kind) {
        aB(e, "unacceptable node kind for !<" + e.tag + "> tag; it should be \"" + h.kind + "\", not \"" + e.kind + "\"");
      }
      if (h.resolve(e.result, e.tag)) {
        e.result = h.construct(e.result, e.tag);
        if (e.anchor !== null) {
          e.anchorMap[e.anchor] = e.result;
        }
      } else {
        aB(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
      }
    }
    if (e.listener !== null) {
      e.listener("close", e);
    }
    return e.tag !== null || e.anchor !== null || g;
  }
  function aU(e, t) {
    e = String(e);
    t = t || {};
    if (e.length !== 0) {
      if (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13) {
        e += "\n";
      }
      if (e.charCodeAt(0) === 65279) {
        e = e.slice(1);
      }
    }
    var r = new a_(e, t);
    var n = e.indexOf("\0");
    if (n !== -1) {
      r.position = n;
      aB(r, "null byte is not allowed in input");
    }
    r.input += "\0";
    while (r.input.charCodeAt(r.position) === 32) {
      r.lineIndent += 1;
      r.position += 1;
    }
    while (r.position < r.length - 1) {
      (function (e) {
        var t;
        var r;
        var n;
        var i;
        var a = e.position;
        var o = false;
        e.version = null;
        e.checkLineBreaks = e.legacy;
        e.tagMap = Object.create(null);
        e.anchorMap = Object.create(null);
        while ((i = e.input.charCodeAt(e.position)) !== 0 && (aP(e, true, -1), i = e.input.charCodeAt(e.position), !(e.lineIndent > 0) && i === 37)) {
          o = true;
          i = e.input.charCodeAt(++e.position);
          t = e.position;
          while (i !== 0 && !aC(i)) {
            i = e.input.charCodeAt(++e.position);
          }
          r = e.input.slice(t, e.position);
          n = [];
          if (r.length < 1) {
            aB(e, "directive name must not be less than one character in length");
          }
          while (i !== 0) {
            while (aT(i)) {
              i = e.input.charCodeAt(++e.position);
            }
            if (i === 35) {
              do {
                i = e.input.charCodeAt(++e.position);
              } while (i !== 0 && !aA(i));
              break;
            }
            if (aA(i)) {
              break;
            }
            for (t = e.position; i !== 0 && !aC(i);) {
              i = e.input.charCodeAt(++e.position);
            }
            n.push(e.input.slice(t, e.position));
          }
          if (i !== 0) {
            aD(e);
          }
          if (av.call(aO, r)) {
            aO[r](e, r, n);
          } else {
            aq(e, "unknown document directive \"" + r + "\"");
          }
        }
        aP(e, true, -1);
        if (e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45) {
          e.position += 3;
          aP(e, true, -1);
        } else if (o) {
          aB(e, "directives end mark is expected");
        }
        aW(e, e.lineIndent - 1, 4, false, true);
        aP(e, true, -1);
        if (e.checkLineBreaks && ay.test(e.input.slice(a, e.position))) {
          aq(e, "non-ASCII line breaks are interpreted as content");
        }
        e.documents.push(e.result);
        if (e.position === e.lineStart && aH(e)) {
          if (e.input.charCodeAt(e.position) === 46) {
            e.position += 3;
            aP(e, true, -1);
          }
          return;
        }
        if (e.position < e.length - 1) {
          aB(e, "end of the stream or a document separator is expected");
        }
      })(r);
    }
    return r.documents;
  }
  var aX = Object.prototype.toString;
  var aZ = Object.prototype.hasOwnProperty;
  var aG = {
    0: "\\0",
    7: "\\a",
    8: "\\b",
    9: "\\t",
    10: "\\n",
    11: "\\v",
    12: "\\f",
    13: "\\r",
    27: "\\e",
    34: "\\\"",
    92: "\\\\",
    133: "\\N",
    160: "\\_",
    8232: "\\L",
    8233: "\\P"
  };
  var aY = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"];
  var aJ = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
  function aK(e, t) {
    var r;
    var n = iZ.repeat(" ", t);
    var i = 0;
    var a = -1;
    var o = "";
    var s = e.length;
    while (i < s) {
      if ((a = e.indexOf("\n", i)) === -1) {
        r = e.slice(i);
        i = s;
      } else {
        r = e.slice(i, a + 1);
        i = a + 1;
      }
      if (r.length && r !== "\n") {
        o += n;
      }
      o += r;
    }
    return o;
  }
  function aQ(e, t) {
    return "\n" + iZ.repeat(" ", e.indent * t);
  }
  function a0(e) {
    return e === 32 || e === 9;
  }
  function a1(e) {
    return e >= 32 && e <= 126 || e >= 161 && e <= 55295 && e !== 8232 && e !== 8233 || e >= 57344 && e <= 65533 && e !== 65279 || e >= 65536 && e <= 1114111;
  }
  function a4(e) {
    return a1(e) && e !== 65279 && e !== 13 && e !== 10;
  }
  function a5(e, t, r) {
    var n = a4(e);
    var i = n && !a0(e);
    return (r ? n : n && e !== 44 && e !== 91 && e !== 93 && e !== 123 && e !== 125) && e !== 35 && (t !== 58 || !!i) || a4(t) && !a0(t) && e === 35 || t === 58 && i;
  }
  function a3(e, t) {
    var r;
    var n = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && t + 1 < e.length && (r = e.charCodeAt(t + 1)) >= 56320 && r <= 57343) {
      return (n - 55296) * 1024 + r - 56320 + 65536;
    } else {
      return n;
    }
  }
  function a6(e) {
    return /^\n* /.test(e);
  }
  function a7(e, t) {
    var r = a6(e) ? String(t) : "";
    var n = e[e.length - 1] === "\n";
    return r + (n && (e[e.length - 2] === "\n" || e === "\n") ? "+" : n ? "" : "-") + "\n";
  }
  function a2(e) {
    if (e[e.length - 1] === "\n") {
      return e.slice(0, -1);
    } else {
      return e;
    }
  }
  function a8(e, t) {
    if (e === "" || e[0] === " ") {
      return e;
    }
    var r;
    var n;
    var i = / [^ ]/g;
    var a = 0;
    var o = 0;
    var s = 0;
    var l = "";
    while (r = i.exec(e)) {
      if ((s = r.index) - a > t) {
        n = o > a ? o : s;
        l += "\n" + e.slice(a, n);
        a = n + 1;
      }
      o = s;
    }
    l += "\n";
    if (e.length - a > t && o > a) {
      l += e.slice(a, o) + "\n" + e.slice(o + 1);
    } else {
      l += e.slice(a);
    }
    return l.slice(1);
  }
  function a9(e, t, r, n) {
    var i;
    var a;
    var o;
    var s = "";
    var l = e.tag;
    i = 0;
    a = r.length;
    for (; i < a; i += 1) {
      o = r[i];
      if (e.replacer) {
        o = e.replacer.call(r, String(i), o);
      }
      if (ot(e, t + 1, o, true, true, false, true) || o === undefined && ot(e, t + 1, null, true, true, false, true)) {
        if (!n || s !== "") {
          s += aQ(e, t);
        }
        if (e.dump && e.dump.charCodeAt(0) === 10) {
          s += "-";
        } else {
          s += "- ";
        }
        s += e.dump;
      }
    }
    e.tag = l;
    e.dump = s || "[]";
  }
  function oe(e, t, r) {
    var n;
    var i;
    var a;
    var o;
    var s;
    var l;
    a = 0;
    o = (i = r ? e.explicitTypes : e.implicitTypes).length;
    for (; a < o; a += 1) {
      if (((s = i[a]).instanceOf || s.predicate) && (!s.instanceOf || typeof t == "object" && t instanceof s.instanceOf) && (!s.predicate || s.predicate(t))) {
        if (r) {
          if (s.multi && s.representName) {
            e.tag = s.representName(t);
          } else {
            e.tag = s.tag;
          }
        } else {
          e.tag = "?";
        }
        if (s.represent) {
          l = e.styleMap[s.tag] || s.defaultStyle;
          if (aX.call(s.represent) === "[object Function]") {
            n = s.represent(t, l);
          } else if (aZ.call(s.represent, l)) {
            n = s.represent[l](t, l);
          } else {
            throw new iY("!<" + s.tag + "> tag resolver accepts not \"" + l + "\" style");
          }
          e.dump = n;
        }
        return true;
      }
    }
    return false;
  }
  function ot(e, t, r, n, i, a, o) {
    e.tag = null;
    e.dump = r;
    if (!oe(e, r, false)) {
      oe(e, r, true);
    }
    var s;
    var l = aX.call(e.dump);
    var c = n;
    n &&= e.flowLevel < 0 || e.flowLevel > t;
    var u;
    var h;
    var p;
    var d = l === "[object Object]" || l === "[object Array]";
    if (d) {
      p = (h = e.duplicates.indexOf(r)) !== -1;
    }
    if (e.tag !== null && e.tag !== "?" || p || e.indent !== 2 && t > 0) {
      i = false;
    }
    if (p && e.usedDuplicates[h]) {
      e.dump = "*ref_" + h;
    } else {
      if (d && p && !e.usedDuplicates[h]) {
        e.usedDuplicates[h] = true;
      }
      if (l === "[object Object]") {
        if (n && Object.keys(e.dump).length !== 0) {
          (function (e, t, r, n) {
            var i;
            var a;
            var o;
            var s;
            var l;
            var c;
            var u = "";
            var h = e.tag;
            var p = Object.keys(r);
            if (e.sortKeys === true) {
              p.sort();
            } else if (typeof e.sortKeys == "function") {
              p.sort(e.sortKeys);
            } else if (e.sortKeys) {
              throw new iY("sortKeys must be a boolean or a function");
            }
            i = 0;
            a = p.length;
            for (; i < a; i += 1) {
              c = "";
              if (!n || u !== "") {
                c += aQ(e, t);
              }
              s = r[o = p[i]];
              if (e.replacer) {
                s = e.replacer.call(r, o, s);
              }
              if (ot(e, t + 1, o, true, true, true)) {
                if (l = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024) {
                  if (e.dump && e.dump.charCodeAt(0) === 10) {
                    c += "?";
                  } else {
                    c += "? ";
                  }
                }
                c += e.dump;
                if (l) {
                  c += aQ(e, t);
                }
                if (ot(e, t + 1, s, true, l)) {
                  if (e.dump && e.dump.charCodeAt(0) === 10) {
                    c += ":";
                  } else {
                    c += ": ";
                  }
                  c += e.dump;
                  u += c;
                }
              }
            }
            e.tag = h;
            e.dump = u || "{}";
          })(e, t, e.dump, i);
          if (p) {
            e.dump = "&ref_" + h + e.dump;
          }
        } else {
          (function (e, t, r) {
            var n;
            var i;
            var a;
            var o;
            var s;
            var l = "";
            var c = e.tag;
            var u = Object.keys(r);
            n = 0;
            i = u.length;
            for (; n < i; n += 1) {
              s = "";
              if (l !== "") {
                s += ", ";
              }
              if (e.condenseFlow) {
                s += "\"";
              }
              o = r[a = u[n]];
              if (e.replacer) {
                o = e.replacer.call(r, a, o);
              }
              if (ot(e, t, a, false, false)) {
                if (e.dump.length > 1024) {
                  s += "? ";
                }
                s += e.dump + (e.condenseFlow ? "\"" : "") + ":" + (e.condenseFlow ? "" : " ");
                if (ot(e, t, o, false, false)) {
                  s += e.dump;
                  l += s;
                }
              }
            }
            e.tag = c;
            e.dump = "{" + l + "}";
          })(e, t, e.dump);
          if (p) {
            e.dump = "&ref_" + h + " " + e.dump;
          }
        }
      } else if (l === "[object Array]") {
        if (n && e.dump.length !== 0) {
          if (e.noArrayIndent && !o && t > 0) {
            a9(e, t - 1, e.dump, i);
          } else {
            a9(e, t, e.dump, i);
          }
          if (p) {
            e.dump = "&ref_" + h + e.dump;
          }
        } else {
          (function (e, t, r) {
            var n;
            var i;
            var a;
            var o = "";
            var s = e.tag;
            n = 0;
            i = r.length;
            for (; n < i; n += 1) {
              a = r[n];
              if (e.replacer) {
                a = e.replacer.call(r, String(n), a);
              }
              if (ot(e, t, a, false, false) || a === undefined && ot(e, t, null, false, false)) {
                if (o !== "") {
                  o += "," + (e.condenseFlow ? "" : " ");
                }
                o += e.dump;
              }
            }
            e.tag = s;
            e.dump = "[" + o + "]";
          })(e, t, e.dump);
          if (p) {
            e.dump = "&ref_" + h + " " + e.dump;
          }
        }
      } else if (l === "[object String]") {
        if (e.tag !== "?") {
          s = e.dump;
          e.dump = function () {
            if (s.length === 0) {
              if (e.quotingType === 2) {
                return "\"\"";
              } else {
                return "''";
              }
            }
            if (!e.noCompatMode && (aY.indexOf(s) !== -1 || aJ.test(s))) {
              if (e.quotingType === 2) {
                return "\"" + s + "\"";
              } else {
                return "'" + s + "'";
              }
            }
            var r = e.indent * Math.max(1, t);
            var n = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - r);
            switch (function (e, t, r, n, i, a, o, s) {
              var l;
              var c;
              var u;
              var h = 0;
              var p = null;
              var d = false;
              var m = false;
              var f = n !== -1;
              var g = -1;
              var v = a1(l = a3(e, 0)) && l !== 65279 && !a0(l) && l !== 45 && l !== 63 && l !== 58 && l !== 44 && l !== 91 && l !== 93 && l !== 123 && l !== 125 && l !== 35 && l !== 38 && l !== 42 && l !== 33 && l !== 124 && l !== 61 && l !== 62 && l !== 39 && l !== 34 && l !== 37 && l !== 64 && l !== 96 && !a0(c = a3(e, e.length - 1)) && c !== 58;
              if (t || o) {
                for (u = 0; u < e.length; h >= 65536 ? u += 2 : u++) {
                  if (!a1(h = a3(e, u))) {
                    return 5;
                  }
                  v = v && a5(h, p, s);
                  p = h;
                }
              } else {
                for (u = 0; u < e.length; h >= 65536 ? u += 2 : u++) {
                  if ((h = a3(e, u)) === 10) {
                    d = true;
                    if (f) {
                      m = m || u - g - 1 > n && e[g + 1] !== " ";
                      g = u;
                    }
                  } else if (!a1(h)) {
                    return 5;
                  }
                  v = v && a5(h, p, s);
                  p = h;
                }
                m = m || f && u - g - 1 > n && e[g + 1] !== " ";
              }
              if (d || m) {
                if (r > 9 && a6(e)) {
                  return 5;
                } else if (o) {
                  if (a === 2) {
                    return 5;
                  } else {
                    return 2;
                  }
                } else if (m) {
                  return 4;
                } else {
                  return 3;
                }
              } else if (!v || o || i(e)) {
                if (a === 2) {
                  return 5;
                } else {
                  return 2;
                }
              } else {
                return 1;
              }
            }(s, a || e.flowLevel > -1 && t >= e.flowLevel, e.indent, n, function (t) {
              return function (e, t) {
                var r;
                var n;
                r = 0;
                n = e.implicitTypes.length;
                for (; r < n; r += 1) {
                  if (e.implicitTypes[r].resolve(t)) {
                    return true;
                  }
                }
                return false;
              }(e, t);
            }, e.quotingType, e.forceQuotes && !a, c)) {
              case 1:
                return s;
              case 2:
                return "'" + s.replace(/'/g, "''") + "'";
              case 3:
                return "|" + a7(s, e.indent) + a2(aK(s, r));
              case 4:
                return ">" + a7(s, e.indent) + a2(aK(function (e, t) {
                  var r;
                  var n;
                  var i;
                  var a = /(\n+)([^\n]*)/g;
                  r = (r = e.indexOf("\n")) !== -1 ? r : e.length;
                  a.lastIndex = r;
                  var o = a8(e.slice(0, r), t);
                  var s = e[0] === "\n" || e[0] === " ";
                  while (i = a.exec(e)) {
                    var l = i[1];
                    var c = i[2];
                    n = c[0] === " ";
                    o += l + (s || n || c === "" ? "" : "\n") + a8(c, t);
                    s = n;
                  }
                  return o;
                }(s, n), r));
              case 5:
                return "\"" + function (e) {
                  var t;
                  var r = "";
                  var n = 0;
                  var i = 0;
                  for (; i < e.length; n >= 65536 ? i += 2 : i++) {
                    if (!(t = aG[n = a3(e, i)]) && a1(n)) {
                      r += e[i];
                      if (n >= 65536) {
                        r += e[i + 1];
                      }
                    } else {
                      r += t || function (e) {
                        var t;
                        var r;
                        var n;
                        t = e.toString(16).toUpperCase();
                        if (e <= 255) {
                          r = "x";
                          n = 2;
                        } else if (e <= 65535) {
                          r = "u";
                          n = 4;
                        } else if (e <= 4294967295) {
                          r = "U";
                          n = 8;
                        } else {
                          throw new iY("code point within a string may not be greater than 0xFFFFFFFF");
                        }
                        return "\\" + r + iZ.repeat("0", n - t.length) + t;
                      }(n);
                    }
                  }
                  return r;
                }(s) + "\"";
              default:
                throw new iY("impossible error: invalid scalar style");
            }
          }();
        }
      } else {
        if (l === "[object Undefined]" || e.skipInvalid) {
          return false;
        }
        throw new iY("unacceptable kind of an object to dump " + l);
      }
      if (e.tag !== null && e.tag !== "?") {
        u = encodeURI(e.tag[0] === "!" ? e.tag.slice(1) : e.tag).replace(/!/g, "%21");
        u = e.tag[0] === "!" ? "!" + u : u.slice(0, 18) === "tag:yaml.org,2002:" ? "!!" + u.slice(18) : "!<" + u + ">";
        e.dump = u + " " + e.dump;
      }
    }
    return true;
  }
  function or(e, t) {
    return function () {
      throw Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
    };
  }
  or("safeLoad", "load");
  or("safeLoadAll", "loadAll");
  or("safeDump", "dump");
  var on = {
    load: function (e, t) {
      var r = aU(e, t);
      if (r.length !== 0) {
        if (r.length === 1) {
          return r[0];
        }
        throw new iY("expected a single document in the stream, but found more");
      }
    }
  };
  var markdownItKatexPlugin = require("markdown-it-katex-plugin") /*id: 732879*/;
  var oa = markdownItKatexPlugin;
  let oo = {
    " ": "<svg width=\"16\" height=\"16\" viewBox=\"0 -3 24 24\"><path fill-rule=\"evenodd\" d=\"M6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-5z\" clip-rule=\"evenodd\"/></svg>\n".trim(),
    x: "<svg width=\"16\" height=\"16\" viewBox=\"0 -3 24 24\"><path d=\"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z\"/></svg>\n".trim()
  };
  function os(e, t) {
    if (t.type === "script" && t.data.src) {
      return {
        ...t,
        data: {
          ...t.data,
          src: xssContentSanitizer.sanitizeUrl(e.getFullUrl(t.data.src), null, {
            logType: "js.href/src",
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$2hq-lhSMFdWaEJkR0pI-kds%lJFRjF%$lJaZF%x$09-%lpXRXB5WWxkR2QweFh%blpp$np*MlltdEJkMHhx%lRKTWFrRjJZbTA1-TFw$09-%mlNbEl4WWtk$2$rd3lN$2hq-lhSMFdWaEJkR0pI-kdsT%1sSndZek5SZ*xsd$NuWmtNMD$zWTJrNWNHSnR$bXhs%XpWMFlXN%9hR050WkR*amR6MDk"
          })
        }
      };
    } else {
      return t;
    }
  }
  let ol = "hljs";
  let oc = ["@highlightjs/cdn-assets@11.8.0/highlight.min.js"].map(e => markmapResourceLoader.createScript(e));
  let ou = {
    name: ol,
    config: {
      versions: {
        hljs: "11.8.0"
      },
      preloadScripts: oc,
      styles: ["@highlightjs/cdn-assets@11.8.0/styles/default.min.css"].map(e => markmapResourceLoader.createStylesheet(e))
    },
    transform(e) {
      var t;
      var r;
      var n;
      let i;
      let a = ((r = (t = ou.config) == null ? undefined : t.preloadScripts) == null ? undefined : r.map(t => os(e.transformer.urlBuilder, t))) || [];
      let o = () => {
        i ||= markmapResourceLoader.loadScripts(a);
        return i;
      };
      let s = markmapResourceLoader.noop;
      e.parser.tap(t => {
        t.set({
          highlight: (t, r) => {
            s();
            let {
              hljs: n
            } = window;
            if (n) {
              return n.highlightAuto(t, r ? [r] : undefined).value;
            } else {
              o().then(() => {
                e.retransform.call();
              });
              return t;
            }
          }
        });
      });
      e.beforeParse.tap((e, t) => {
        s = () => {
          t.features[ol] = true;
        };
      });
      return {
        styles: (n = ou.config) == null ? undefined : n.styles
      };
    }
  };
  let oh = "katex";
  let op = ["katex@0.16.8/dist/katex.min.js"].map(e => markmapResourceLoader.createScript(e));
  let od = markmapResourceLoader.createScript("webfontloader@1.6.28/webfontloader.js");
  od.data.defer = true;
  let om = ["katex@0.16.8/dist/katex.min.css"].map(e => markmapResourceLoader.createStylesheet(e));
  let of = {
    name: oh,
    config: {
      versions: {
        katex: "0.16.8",
        webfontloader: "1.6.28"
      },
      preloadScripts: op,
      scripts: [{
        type: "iife",
        data: {
          fn: e => {
            window.WebFontConfig = {
              custom: {
                families: ["KaTeX_AMS", "KaTeX_Caligraphic:n4,n7", "KaTeX_Fraktur:n4,n7", "KaTeX_Main:n4,n7,i4,i7", "KaTeX_Math:i4,i7", "KaTeX_Script", "KaTeX_SansSerif:n4,n7,i4", "KaTeX_Size1", "KaTeX_Size2", "KaTeX_Size3", "KaTeX_Size4", "KaTeX_Typewriter"]
              },
              active: () => {
                e().refreshHook.call();
              }
            };
          },
          getParams(e) {
            let {
              getMarkmap: t
            } = e;
            return [t];
          }
        }
      }, od],
      styles: om
    },
    transform(e) {
      var t;
      var r;
      var n;
      var i;
      let a;
      let o = ((r = (t = of.config) == null ? undefined : t.preloadScripts) == null ? undefined : r.map(t => os(e.transformer.urlBuilder, t))) || [];
      let s = () => {
        a ||= markmapResourceLoader.loadScripts(o);
        return a;
      };
      let l = (t, r) => {
        let {
          katex: n
        } = window;
        if (n) {
          return n.renderToString(t, {
            displayMode: r,
            throwOnError: false
          });
        } else {
          s().then(() => {
            e.retransform.call();
          });
          return t;
        }
      };
      let c = markmapResourceLoader.noop;
      e.parser.tap(e => {
        e.use(oa);
        e.renderer.rules.katex = (e, t) => {
          c();
          return l(e[t].content, !!e[t].block);
        };
      });
      e.beforeParse.tap((e, t) => {
        c = () => {
          t.features[oh] = true;
        };
      });
      e.afterParse.tap((e, t) => {
        var r;
        let n = (r = t.frontmatter) == null ? undefined : r.markmap;
        if (n) {
          ["extraJs", "extraCss"].forEach(e => {
            var t;
            var r;
            var i;
            let a = n[e];
            if (a) {
              i = ((r = (t = of.config) == null ? undefined : t.versions) == null ? undefined : r.katex) || "";
              n[e] = a.map(e => {
                if (typeof e == "string" && !e.includes("://")) {
                  if (!e.startsWith("npm:")) {
                    e = `npm:${e}`;
                  }
                  let t = 4 + oh.length;
                  if (e.startsWith(`npm:${oh}/`)) {
                    e = `${e.slice(0, t)}@${i}${e.slice(t)}`;
                  }
                }
                return e;
              });
            }
          });
        }
      });
      return {
        styles: (n = of.config) == null ? undefined : n.styles,
        scripts: (i = of.config) == null ? undefined : i.scripts
      };
    }
  };
  function og(e, t) {
    return markmapResourceLoader.createWrapper(e, function (e, t, r) {
      var n = arguments.length;
      var i = Array(n > 3 ? n - 3 : 0);
      var a = 3;
      for (; a < n; a++) {
        i[a - 3] = arguments[a];
      }
      let o = e(t, r, ...i);
      let {
        lines: s
      } = t[r];
      if (s) {
        o = o.replace(/^<[\w-]+/, e => `${e} data-lines="${s.join(",")}"`);
      }
      return o;
    });
  }
  let ov = [{
    name: "frontmatter",
    transform: e => {
      e.beforeParse.tap((e, t) => {
        let r;
        let {
          content: n
        } = t;
        if (!/^---\r?\n/.test(n)) {
          return;
        }
        let i = /\n---\r?\n/.exec(n);
        if (!i) {
          return;
        }
        let a = n.slice(4, i.index);
        try {
          r = on.load(a);
          if (r == null ? undefined : r.markmap) {
            r.markmap = function (e) {
              if (e) {
                ["color", "extraJs", "extraCss"].forEach(t => {
                  var r;
                  let n;
                  if (e[t] != null) {
                    r = e[t];
                    if (typeof r == "string") {
                      n = [r];
                    } else if (Array.isArray(r)) {
                      n = r.filter(e => e && typeof e == "string");
                    }
                    e[t] = (n == null ? undefined : n.length) ? n : undefined;
                  }
                });
                ["duration", "maxWidth", "initialExpandLevel"].forEach(t => {
                  if (e[t] != null) {
                    e[t] = function (e) {
                      if (!isNaN(+e)) {
                        return +e;
                      }
                    }(e[t]);
                  }
                });
                return e;
              }
            }(r.markmap);
          }
        } catch {
          return;
        }
        t.frontmatter = r;
        t.content = n.slice(i.index + i[0].length);
        t.contentLineOffset = n.slice(0, i.index).split("\n").length + 1;
      });
      return {};
    }
  }, of, ou, {
    name: "npmUrl",
    transform: e => {
      e.afterParse.tap((t, r) => {
        let {
          frontmatter: n
        } = r;
        let i = n == null ? undefined : n.markmap;
        if (i) {
          ["extraJs", "extraCss"].forEach(t => {
            let r = i[t];
            if (r) {
              i[t] = r.map(t => t.startsWith("npm:") ? e.transformer.urlBuilder.getFullUrl(t.slice(4)) : t);
            }
          });
        }
      });
      return {};
    }
  }, {
    name: "checkbox",
    transform: e => {
      e.parser.tap(e => {
        e.core.ruler.before("inline", "checkbox", e => {
          for (let t = 2; t < e.tokens.length; t += 1) {
            let r = e.tokens[t];
            if (r.type === "inline" && r.content) {
              let n = e.tokens[t - 1].type;
              let i = e.tokens[t - 2].type;
              if (n === "heading_open" || n === "paragraph_open" && i === "list_item_open") {
                r.content = r.content.replace(/^\[(.)\] /, (e, t) => oo[t] ? `${oo[t]} ` : e);
              }
            }
          }
          return false;
        }, {});
      });
      return {};
    }
  }, {
    name: "sourceLines",
    transform: e => {
      e.parser.tap(e => {
        Object.entries(e.renderer.rules).forEach(t => {
          let [r, n] = t;
          if (typeof n == "function") {
            e.renderer.rules[r] = og(n);
          } else {
            Object.entries(n).forEach(e => {
              let [t, r] = e;
              n[t] = og(r);
            });
          }
        });
      });
      return {};
    }
  }];
  class ob {
    transform(e, t) {
      var r;
      var n;
      var i;
      let a = {
        content: e,
        features: {},
        contentLineOffset: 0
      };
      this.hooks.beforeParse.call(this.md, a);
      let o = this.md.render(a.content, {});
      this.hooks.afterParse.call(this.md, a);
      let s = function e(t) {
        while (!t.content && t.children.length === 1) {
          t = t.children[0];
        }
        while (t.children.length === 1 && !t.children[0].content) {
          t = {
            ...t,
            children: t.children[0].children
          };
        }
        return {
          ...t,
          children: t.children.map(e)
        };
      }((i = function (e, t) {
        let r = {
          ...n_,
          ...t
        };
        let n = nM(e);
        let i = n("body");
        let a = 0;
        let o = {
          id: 0,
          tag: "",
          html: "",
          level: 0,
          parent: 0,
          childrenLevel: 0,
          children: []
        };
        let s = [];
        let l = 0;
        (function e(t, i) {
          t.each((t, u) => {
            var h;
            var p;
            let d = n(u);
            let m = (h = Object.entries(r.selectorRules).find(([e]) => d.is(e))) == null ? undefined : h[1];
            let f = m == null ? undefined : m({
              $node: d,
              $: n,
              getContent: c
            });
            if ((f == null ? undefined : f.queue) && !f.nesting) {
              e(f.queue, i);
              return;
            }
            p = u.tagName;
            let g = nB.test(p) ? +p[1] : nq.test(p) ? 8 : nO.test(p) ? 9 : 7;
            if (!f) {
              if (g <= 6) {
                l = g;
              }
              return;
            }
            if (l > 0 && g > l || !d.is(r.selector)) {
              return;
            }
            l = 0;
            let v = g <= 6;
            let b = function (e) {
              var t;
              let {
                parent: r
              } = e;
              let n = {
                id: ++a,
                tag: e.tagName,
                level: e.level,
                html: e.html,
                childrenLevel: 0,
                children: e.nesting ? [] : undefined,
                parent: r.id
              };
              if ((t = e.comments) == null ? undefined : t.length) {
                n.comments = e.comments;
              }
              if (Object.keys(e.data || {}).length) {
                n.data = e.data;
              }
              if (r.children) {
                if (r.childrenLevel === 0 || r.childrenLevel > n.level) {
                  r.children = [];
                  r.childrenLevel = n.level;
                }
                if (r.childrenLevel === n.level) {
                  r.children.push(n);
                }
              }
              return n;
            }({
              parent: i || function (e) {
                let t;
                while ((t = s.at(-1)) && t.level >= e) {
                  s.pop();
                }
                return t || o;
              }(g),
              nesting: !!f.queue || v,
              tagName: u.tagName,
              level: g,
              html: f.html || "",
              comments: f.comments,
              data: d.data()
            });
            if (v) {
              s.push(b);
            }
            if (f.queue) {
              e(f.queue, b);
            }
          });
        })(i.children());
        return o;
        function c(e) {
          var t;
          let r = function (e) {
            let t = [];
            return {
              $node: e = e.filter((e, r) => {
                if (r.type === "comment") {
                  let e = r.data.trim();
                  if (e.startsWith(nR)) {
                    t.push(e.slice(nR.length).trim());
                    return false;
                  }
                }
                return true;
              }),
              comments: t
            };
          }(e);
          let i = (t = n.html(r.$node)) == null ? undefined : t.trimEnd();
          return {
            comments: r.comments,
            html: i
          };
        }
      }(o, {
        ...((n = (r = a.frontmatter) == null ? undefined : r.markmap) == null ? undefined : n.htmlParser),
        ...t
      }), markmapResourceLoader.traverseTree(i, (e, t) => {
        let r = {
          content: e.html,
          children: t() || []
        };
        if (e.data) {
          r.payload = {
            ...e.data
          };
        }
        if (e.comments) {
          if (e.comments.includes("foldAll")) {
            r.payload = {
              ...r.payload,
              fold: 2
            };
          } else if (e.comments.includes("fold")) {
            r.payload = {
              ...r.payload,
              fold: 1
            };
          }
        }
        return r;
      })));
      return {
        ...a,
        root: s
      };
    }
    getAssets(e) {
      let t = [];
      let r = [];
      if (e == null) {
        e = this.plugins.map(e => e.name);
      }
      for (let n of e.map(e => this.assetsMap[e])) {
        if (n) {
          if (n.styles) {
            t.push(...n.styles);
          }
          if (n.scripts) {
            r.push(...n.scripts);
          }
        }
      }
      return {
        styles: t.map(e => {
          var t;
          t = this.urlBuilder;
          if (e.type === "stylesheet" && e.data.href) {
            return {
              ...e,
              data: {
                ...e.data,
                href: xssContentSanitizer.sanitizeUrl(t.getFullUrl(e.data.href), null, {
                  logType: "js.href/src",
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$2hq-lhSMFdWaEJkR0pI-kds%lJFRjF%$lJaZF%x$09-%lpXRXB5WWxkR2QweFh%blpp$np*MlltdEJkMHhx%lRKTWFrRjJZbTA1-TFw$09-%mlNbEl4WWtk$2$rd3lN$2hq-lhSMFdWaEJkR0pI-kdsT%1sSndZek5SZ*xsd$NuWmtNMD$zWTJrNWNHSnR$bXhs%XpWMFlXN%9hR050WkR*amR6MDk"
                })
              }
            };
          } else {
            return e;
          }
        }),
        scripts: r.map(e => os(this.urlBuilder, e))
      };
    }
    getUsedAssets(e) {
      let t = this.plugins.map(e => e.name).filter(t => e[t]);
      return this.getAssets(t);
    }
    constructor(e = ov) {
      var t = this;
      this.assetsMap = {};
      this.urlBuilder = new markmapResourceLoader.CdnProvider();
      this.hooks = {
        transformer: this,
        parser: new markmapResourceLoader.Hook(),
        beforeParse: new markmapResourceLoader.Hook(),
        afterParse: new markmapResourceLoader.Hook(),
        htmltag: new markmapResourceLoader.Hook(),
        retransform: new markmapResourceLoader.Hook()
      };
      this.plugins = e.map(e => typeof e == "function" ? e() : e);
      let r = {};
      for (let {
        name: e,
        transform: t
      } of this.plugins) {
        r[e] = t(this.hooks);
      }
      this.assetsMap = r;
      let n = new iX("full", {
        html: true,
        breaks: true,
        maxNesting: Infinity
      });
      n.renderer.rules.htmltag = markmapResourceLoader.createWrapper(n.renderer.rules.htmltag, function (e) {
        var r = arguments.length;
        var n = Array(r > 1 ? r - 1 : 0);
        var i = 1;
        for (; i < r; i++) {
          n[i - 1] = arguments[i];
        }
        let a = e(...n);
        t.hooks.htmltag.call({
          args: n,
          result: a
        });
        return a;
      });
      this.md = n;
      this.hooks.parser.call(n);
    }
  }
  require.d(exports, {
    cheerio: function () {
      return ob;
    }
  });
  require.r(w);
  require.d(w, {
    DocumentPosition: function () {
      return d;
    },
    append: function () {
      return J;
    },
    appendChild: function () {
      return Y;
    },
    compareDocumentPosition: function () {
      return eg;
    },
    existsOne: function () {
      return function e(t, r) {
        return (Array.isArray(r) ? r : [r]).some(r => astNodeDefinitions.isElement(r) && t(r) || astNodeDefinitions.hasChildren(r) && e(t, r.children));
      };
    },
    filter: function () {
      return ee;
    },
    find: function () {
      return et;
    },
    findAll: function () {
      return ei;
    },
    findOne: function () {
      return en;
    },
    findOneChild: function () {
      return er;
    },
    getAttributeValue: function () {
      return j;
    },
    getChildren: function () {
      return D;
    },
    getElementById: function () {
      return eh;
    },
    getElements: function () {
      return eu;
    },
    getElementsByClassName: function () {
      return ed;
    },
    getElementsByTagName: function () {
      return ep;
    },
    getElementsByTagType: function () {
      return em;
    },
    getFeed: function () {
      return eb;
    },
    getInnerHTML: function () {
      return F;
    },
    getName: function () {
      return W;
    },
    getOuterHTML: function () {
      return O;
    },
    getParent: function () {
      return P;
    },
    getSiblings: function () {
      return H;
    },
    getText: function () {
      return function e(t) {
        if (Array.isArray(t)) {
          return t.map(e).join("");
        } else if (astNodeDefinitions.isElement(t)) {
          if (t.name === "br") {
            return "\n";
          } else {
            return e(t.children);
          }
        } else if (astNodeDefinitions.isCdata(t)) {
          return e(t.children);
        } else if (astNodeDefinitions.isText(t)) {
          return t.data;
        } else {
          return "";
        }
      };
    },
    hasAttrib: function () {
      return V;
    },
    hasChildren: function () {
      return astNodeDefinitions.hasChildren;
    },
    innerText: function () {
      return $;
    },
    isCDATA: function () {
      return astNodeDefinitions.isCdata;
    },
    isComment: function () {
      return astNodeDefinitions.isComment;
    },
    isDocument: function () {
      return astNodeDefinitions.isRoot;
    },
    isTag: function () {
      return astNodeDefinitions.isElement;
    },
    isText: function () {
      return astNodeDefinitions.isText;
    },
    nextElementSibling: function () {
      return U;
    },
    prepend: function () {
      return Q;
    },
    prependChild: function () {
      return K;
    },
    prevElementSibling: function () {
      return X;
    },
    removeElement: function () {
      return Z;
    },
    removeSubsets: function () {
      return ef;
    },
    replaceElement: function () {
      return G;
    },
    testElement: function () {
      return ec;
    },
    textContent: function () {
      return L;
    },
    uniqueSort: function () {
      return ev;
    }
  });
  require.r(k);
  require.d(k, {
    contains: function () {
      return e_;
    },
    html: function () {
      return eM;
    },
    merge: function () {
      return eR;
    },
    parseHTML: function () {
      return eE;
    },
    root: function () {
      return eI;
    },
    text: function () {
      return ez;
    },
    xml: function () {
      return eN;
    }
  });
  require.r(S);
  require.d(S, {
    addClass: function () {
      return e6;
    },
    attr: function () {
      return eX;
    },
    data: function () {
      return eQ;
    },
    hasClass: function () {
      return e3;
    },
    prop: function () {
      return eY;
    },
    removeAttr: function () {
      return e5;
    },
    removeClass: function () {
      return e7;
    },
    toggleClass: function () {
      return e2;
    },
    val: function () {
      return e0;
    }
  });
  require.r(A);
  require.d(A, {
    add: function () {
      return rq;
    },
    addBack: function () {
      return rO;
    },
    children: function () {
      return rv;
    },
    closest: function () {
      return rc;
    },
    contents: function () {
      return rb;
    },
    each: function () {
      return ry;
    },
    end: function () {
      return rB;
    },
    eq: function () {
      return rz;
    },
    filter: function () {
      return rk;
    },
    filterArray: function () {
      return rS;
    },
    find: function () {
      return re;
    },
    first: function () {
      return rM;
    },
    get: function () {
      return rE;
    },
    has: function () {
      return rC;
    },
    index: function () {
      return r_;
    },
    is: function () {
      return rA;
    },
    last: function () {
      return rN;
    },
    map: function () {
      return rx;
    },
    next: function () {
      return ru;
    },
    nextAll: function () {
      return rh;
    },
    nextUntil: function () {
      return rp;
    },
    not: function () {
      return rT;
    },
    parent: function () {
      return ro;
    },
    parents: function () {
      return rs;
    },
    parentsUntil: function () {
      return rl;
    },
    prev: function () {
      return rd;
    },
    prevAll: function () {
      return rm;
    },
    prevUntil: function () {
      return rf;
    },
    siblings: function () {
      return rg;
    },
    slice: function () {
      return rR;
    },
    toArray: function () {
      return rI;
    }
  });
  require.r(T);
  require.d(T, {
    _makeDomArray: function () {
      return r$;
    },
    after: function () {
      return rJ;
    },
    append: function () {
      return rV;
    },
    appendTo: function () {
      return rH;
    },
    before: function () {
      return rQ;
    },
    clone: function () {
      return r2;
    },
    empty: function () {
      return r5;
    },
    html: function () {
      return r3;
    },
    insertAfter: function () {
      return rK;
    },
    insertBefore: function () {
      return r0;
    },
    prepend: function () {
      return rW;
    },
    prependTo: function () {
      return rj;
    },
    remove: function () {
      return r1;
    },
    replaceWith: function () {
      return r4;
    },
    text: function () {
      return r7;
    },
    toString: function () {
      return r6;
    },
    unwrap: function () {
      return rG;
    },
    wrap: function () {
      return rX;
    },
    wrapAll: function () {
      return rY;
    },
    wrapInner: function () {
      return rZ;
    }
  });
  require.r(C);
  require.d(C, {
    css: function () {
      return r8;
    }
  });
  require.r(M);
  require.d(M, {
    serialize: function () {
      return nn;
    },
    serializeArray: function () {
      return ni;
    }
  });
}