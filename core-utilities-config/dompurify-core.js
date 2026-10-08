// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DOMPurify'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 345925
         */
module.exports = function (module, exports, require) {
  let {
    entries: i,
    setPrototypeOf: a,
    isFrozen: o,
    getPrototypeOf: l,
    getOwnPropertyDescriptor: n
  } = Object;
  let {
    freeze: s,
    seal: h,
    create: c
  } = Object;
  let {
    apply: d,
    construct: u
  } = typeof Reflect != "undefined" && Reflect;
  s ||= function (t) {
    return t;
  };
  h ||= function (t) {
    return t;
  };
  d ||= function (t, e, r) {
    return t.apply(e, r);
  };
  u ||= function (t, e) {
    return new t(...e);
  };
  let p = M(Array.prototype.forEach);
  let g = M(Array.prototype.lastIndexOf);
  let f = M(Array.prototype.pop);
  let m = M(Array.prototype.push);
  let y = M(Array.prototype.splice);
  let x = M(String.prototype.toLowerCase);
  let b = M(String.prototype.toString);
  let C = M(String.prototype.match);
  let v = M(String.prototype.replace);
  let k = M(String.prototype.indexOf);
  let w = M(String.prototype.trim);
  let S = M(Object.prototype.hasOwnProperty);
  let T = M(RegExp.prototype.test);
  Q = TypeError;
  let B = function () {
    var t = arguments.length;
    var e = Array(t);
    var r = 0;
    for (; r < t; r++) {
      e[r] = arguments[r];
    }
    return u(Q, e);
  };
  function M(t) {
    return function (e) {
      var r = arguments.length;
      var i = Array(r > 1 ? r - 1 : 0);
      var a = 1;
      for (; a < r; a++) {
        i[a - 1] = arguments[a];
      }
      return d(t, e, i);
    };
  }
  function W(t, e, r = x) {
    if (a) {
      a(t, null);
    }
    let i = e.length;
    while (i--) {
      let a = e[i];
      if (typeof a == "string") {
        let t = r(a);
        if (t !== a) {
          if (!o(e)) {
            e[i] = t;
          }
          a = t;
        }
      }
      t[a] = true;
    }
    return t;
  }
  function L(t) {
    let e = c(null);
    for (let [r, a] of i(t)) {
      if (S(t, r)) {
        if (Array.isArray(a)) {
          e[r] = function (t) {
            for (let e = 0; e < t.length; e++) {
              if (!S(t, e)) {
                t[e] = null;
              }
            }
            return t;
          }(a);
        } else if (a && typeof a == "object" && a.constructor === Object) {
          e[r] = L(a);
        } else {
          e[r] = a;
        }
      }
    }
    return e;
  }
  function F(t, e) {
    while (t !== null) {
      let r = n(t, e);
      if (r) {
        if (r.get) {
          return M(r.get);
        }
        if (typeof r.value == "function") {
          return M(r.value);
        }
      }
      t = l(t);
    }
    return function () {
      return null;
    };
  }
  let _ = s(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
  let A = s(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
  let $ = s(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
  let E = s(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
  let Z = s(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
  let O = s(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
  let D = s(["#text"]);
  let I = s(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
  let q = s(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
  let R = s(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
  let N = s(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
  let P = h(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
  let z = h(/<%[\w\W]*|[\w\W]*%>/gm);
  let j = h(/\$\{[\w\W]*/gm);
  let H = h(/^data-[\-\w.\u00B7-\uFFFF]+$/);
  let U = h(/^aria-[\-\w]+$/);
  let Y = h(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
  let G = h(/^(?:\w+script|data):/i);
  let V = h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
  let X = h(/^html$/i);
  var Q;
  var J = Object.freeze({
    __proto__: null,
    ARIA_ATTR: U,
    ATTR_WHITESPACE: V,
    CUSTOM_ELEMENT: h(/^[a-z][.\w]*(-[.\w]+)+$/i),
    DATA_ATTR: H,
    DOCTYPE_NAME: X,
    ERB_EXPR: z,
    IS_ALLOWED_URI: Y,
    IS_SCRIPT_OR_DATA: G,
    MUSTACHE_EXPR: P,
    TMPLIT_EXPR: j
  });
  let K = {
    element: 1,
    text: 3,
    progressingInstruction: 7,
    comment: 8,
    document: 9
  };
  let tt = function (t, e) {
    if (typeof t != "object" || typeof t.createPolicy != "function") {
      return null;
    }
    let r = null;
    let i = "data-tt-policy-suffix";
    if (e && e.hasAttribute(i)) {
      r = e.getAttribute(i);
    }
    let a = "dompurify" + (r ? "#" + r : "");
    try {
      return t.createPolicy(a, {
        createHTML: t => t,
        createScriptURL: t => t
      });
    } catch (t) {
      return null;
    }
  };
  let te = function () {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: []
    };
  };
  var tr = function t() {
    let e;
    let r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof window == "undefined" ? null : window;
    let a = e => t(e);
    a.version = "3.2.4";
    a.removed = [];
    if (!r || !r.document || r.document.nodeType !== K.document || !r.Element) {
      a.isSupported = false;
      return a;
    }
    let {
      document: o
    } = r;
    let l = o;
    let n = l.currentScript;
    let {
      DocumentFragment: h,
      HTMLTemplateElement: d,
      Node: u,
      Element: M,
      NodeFilter: P,
      NamedNodeMap: z = r.NamedNodeMap || r.MozNamedAttrMap,
      HTMLFormElement: j,
      DOMParser: H,
      trustedTypes: U
    } = r;
    let G = M.prototype;
    let V = F(G, "cloneNode");
    let Q = F(G, "remove");
    let tr = F(G, "nextSibling");
    let ti = F(G, "childNodes");
    let ta = F(G, "parentNode");
    if (typeof d == "function") {
      let t = o.createElement("template");
      if (t.content && t.content.ownerDocument) {
        o = t.content.ownerDocument;
      }
    }
    let to = "";
    let {
      implementation: tl,
      createNodeIterator: tn,
      createDocumentFragment: ts,
      getElementsByTagName: th
    } = o;
    let {
      importNode: tc
    } = l;
    let td = te();
    a.isSupported = typeof i == "function" && typeof ta == "function" && tl && tl.createHTMLDocument !== undefined;
    let {
      MUSTACHE_EXPR: tu,
      ERB_EXPR: tp,
      TMPLIT_EXPR: tg,
      DATA_ATTR: tf,
      ARIA_ATTR: tm,
      IS_SCRIPT_OR_DATA: ty,
      ATTR_WHITESPACE: tx,
      CUSTOM_ELEMENT: tb
    } = J;
    let {
      IS_ALLOWED_URI: tC
    } = J;
    let tv = null;
    let tk = W({}, [..._, ...A, ...$, ...Z, ...D]);
    let tw = null;
    let tS = W({}, [...I, ...q, ...R, ...N]);
    let tT = Object.seal(c(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    let tB = null;
    let tM = null;
    let tW = true;
    let tL = true;
    let tF = false;
    let t_ = true;
    let tA = false;
    let t$ = true;
    let tE = false;
    let tZ = false;
    let tO = false;
    let tD = false;
    let tI = false;
    let tq = false;
    let tR = true;
    let tN = false;
    let tP = true;
    let tz = false;
    let tj = {};
    let tH = null;
    let tU = W({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let tY = null;
    let tG = W({}, ["audio", "video", "img", "source", "image", "track"]);
    let tV = null;
    let tX = W({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
    let tQ = "http://www.w3.org/1998/Math/MathML";
    let tJ = "http://www.w3.org/2000/svg";
    let tK = "http://www.w3.org/1999/xhtml";
    let t0 = tK;
    let t1 = false;
    let t2 = null;
    let t5 = W({}, [tQ, tJ, tK], b);
    let t3 = W({}, ["mi", "mo", "mn", "ms", "mtext"]);
    let t6 = W({}, ["annotation-xml"]);
    let t4 = W({}, ["title", "style", "font", "a", "script"]);
    let t8 = null;
    let t9 = ["application/xhtml+xml", "text/html"];
    let t7 = null;
    let et = null;
    let ee = o.createElement("form");
    let er = function (t) {
      return t instanceof RegExp || t instanceof Function;
    };
    let ei = function (t = {}) {
      if (!et || et !== t) {
        if (!t || typeof t != "object") {
          t = {};
        }
        t = L(t);
        t7 = (t8 = t9.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? "text/html" : t.PARSER_MEDIA_TYPE) === "application/xhtml+xml" ? b : x;
        tv = S(t, "ALLOWED_TAGS") ? W({}, t.ALLOWED_TAGS, t7) : tk;
        tw = S(t, "ALLOWED_ATTR") ? W({}, t.ALLOWED_ATTR, t7) : tS;
        t2 = S(t, "ALLOWED_NAMESPACES") ? W({}, t.ALLOWED_NAMESPACES, b) : t5;
        tV = S(t, "ADD_URI_SAFE_ATTR") ? W(L(tX), t.ADD_URI_SAFE_ATTR, t7) : tX;
        tY = S(t, "ADD_DATA_URI_TAGS") ? W(L(tG), t.ADD_DATA_URI_TAGS, t7) : tG;
        tH = S(t, "FORBID_CONTENTS") ? W({}, t.FORBID_CONTENTS, t7) : tU;
        tB = S(t, "FORBID_TAGS") ? W({}, t.FORBID_TAGS, t7) : {};
        tM = S(t, "FORBID_ATTR") ? W({}, t.FORBID_ATTR, t7) : {};
        tj = !!S(t, "USE_PROFILES") && t.USE_PROFILES;
        tW = t.ALLOW_ARIA_ATTR !== false;
        tL = t.ALLOW_DATA_ATTR !== false;
        tF = t.ALLOW_UNKNOWN_PROTOCOLS || false;
        t_ = t.ALLOW_SELF_CLOSE_IN_ATTR !== false;
        tA = t.SAFE_FOR_TEMPLATES || false;
        t$ = t.SAFE_FOR_XML !== false;
        tE = t.WHOLE_DOCUMENT || false;
        tD = t.RETURN_DOM || false;
        tI = t.RETURN_DOM_FRAGMENT || false;
        tq = t.RETURN_TRUSTED_TYPE || false;
        tO = t.FORCE_BODY || false;
        tR = t.SANITIZE_DOM !== false;
        tN = t.SANITIZE_NAMED_PROPS || false;
        tP = t.KEEP_CONTENT !== false;
        tz = t.IN_PLACE || false;
        tC = t.ALLOWED_URI_REGEXP || Y;
        t0 = t.NAMESPACE || tK;
        t3 = t.MATHML_TEXT_INTEGRATION_POINTS || t3;
        t6 = t.HTML_INTEGRATION_POINTS || t6;
        tT = t.CUSTOM_ELEMENT_HANDLING || {};
        if (t.CUSTOM_ELEMENT_HANDLING && er(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
          tT.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
        }
        if (t.CUSTOM_ELEMENT_HANDLING && er(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
          tT.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
        }
        if (t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean") {
          tT.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
        }
        if (tA) {
          tL = false;
        }
        if (tI) {
          tD = true;
        }
        if (tj) {
          tv = W({}, D);
          tw = [];
          if (tj.html === true) {
            W(tv, _);
            W(tw, I);
          }
          if (tj.svg === true) {
            W(tv, A);
            W(tw, q);
            W(tw, N);
          }
          if (tj.svgFilters === true) {
            W(tv, $);
            W(tw, q);
            W(tw, N);
          }
          if (tj.mathMl === true) {
            W(tv, Z);
            W(tw, R);
            W(tw, N);
          }
        }
        if (t.ADD_TAGS) {
          if (tv === tk) {
            tv = L(tv);
          }
          W(tv, t.ADD_TAGS, t7);
        }
        if (t.ADD_ATTR) {
          if (tw === tS) {
            tw = L(tw);
          }
          W(tw, t.ADD_ATTR, t7);
        }
        if (t.ADD_URI_SAFE_ATTR) {
          W(tV, t.ADD_URI_SAFE_ATTR, t7);
        }
        if (t.FORBID_CONTENTS) {
          if (tH === tU) {
            tH = L(tH);
          }
          W(tH, t.FORBID_CONTENTS, t7);
        }
        if (tP) {
          tv["#text"] = true;
        }
        if (tE) {
          W(tv, ["html", "head", "body"]);
        }
        if (tv.table) {
          W(tv, ["tbody"]);
          delete tB.tbody;
        }
        if (t.TRUSTED_TYPES_POLICY) {
          if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function") {
            throw B("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
          }
          if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function") {
            throw B("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
          }
          to = (e = t.TRUSTED_TYPES_POLICY).createHTML("");
        } else {
          if (e === undefined) {
            e = tt(U, n);
          }
          if (e !== null && typeof to == "string") {
            to = e.createHTML("");
          }
        }
        if (s) {
          s(t);
        }
        et = t;
      }
    };
    let ea = W({}, [...A, ...$, ...E]);
    let eo = W({}, [...Z, ...O]);
    let el = function (t) {
      let e = ta(t);
      if (!e || !e.tagName) {
        e = {
          namespaceURI: t0,
          tagName: "template"
        };
      }
      let r = x(t.tagName);
      let i = x(e.tagName);
      return !!t2[t.namespaceURI] && (t.namespaceURI === tJ ? e.namespaceURI === tK ? r === "svg" : e.namespaceURI === tQ ? r === "svg" && (i === "annotation-xml" || t3[i]) : !!ea[r] : t.namespaceURI === tQ ? e.namespaceURI === tK ? r === "math" : e.namespaceURI === tJ ? r === "math" && t6[i] : !!eo[r] : t.namespaceURI === tK ? (e.namespaceURI !== tJ || !!t6[i]) && (e.namespaceURI !== tQ || !!t3[i]) && !eo[r] && (t4[r] || !ea[r]) : t8 === "application/xhtml+xml" && !!t2[t.namespaceURI]);
    };
    let en = function (t) {
      m(a.removed, {
        element: t
      });
      try {
        ta(t).removeChild(t);
      } catch (e) {
        Q(t);
      }
    };
    let es = function (t, e) {
      try {
        m(a.removed, {
          attribute: e.getAttributeNode(t),
          from: e
        });
      } catch (t) {
        m(a.removed, {
          attribute: null,
          from: e
        });
      }
      e.removeAttribute(t);
      if (t === "is") {
        if (tD || tI) {
          try {
            en(e);
          } catch (t) {}
        } else {
          try {
            e.setAttribute(t, "");
          } catch (t) {}
        }
      }
    };
    let eh = function (t) {
      let r = null;
      let i = null;
      if (tO) {
        t = "<remove></remove>" + t;
      } else {
        let e = C(t, /^[\r\n\t ]+/);
        i = e && e[0];
      }
      if (t8 === "application/xhtml+xml" && t0 === tK) {
        t = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + t + "</body></html>";
      }
      let a = e ? e.createHTML(t) : t;
      if (t0 === tK) {
        try {
          r = new H().parseFromString(a, t8);
        } catch (t) {}
      }
      if (!r || !r.documentElement) {
        r = tl.createDocument(t0, "template", null);
        try {
          r.documentElement.innerHTML = t1 ? to : a;
        } catch (t) {}
      }
      let l = r.body || r.documentElement;
      if (t && i) {
        l.insertBefore(o.createTextNode(i), l.childNodes[0] || null);
      }
      if (t0 === tK) {
        return th.call(r, tE ? "html" : "body")[0];
      } else if (tE) {
        return r.documentElement;
      } else {
        return l;
      }
    };
    let ec = function (t) {
      return tn.call(t.ownerDocument || t, t, P.SHOW_ELEMENT | P.SHOW_COMMENT | P.SHOW_TEXT | P.SHOW_PROCESSING_INSTRUCTION | P.SHOW_CDATA_SECTION, null);
    };
    let ed = function (t) {
      return t instanceof j && (typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || !(t.attributes instanceof z) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function");
    };
    let eu = function (t) {
      return typeof u == "function" && t instanceof u;
    };
    function ep(t, e, r) {
      p(t, t => {
        t.call(a, e, r, et);
      });
    }
    let eg = function (t) {
      let e = null;
      ep(td.beforeSanitizeElements, t, null);
      if (ed(t)) {
        en(t);
        return true;
      }
      let r = t7(t.nodeName);
      ep(td.uponSanitizeElement, t, {
        tagName: r,
        allowedTags: tv
      });
      if (t.hasChildNodes() && !eu(t.firstElementChild) && T(/<[/\w]/g, t.innerHTML) && T(/<[/\w]/g, t.textContent) || t.nodeType === K.progressingInstruction || t$ && t.nodeType === K.comment && T(/<[/\w]/g, t.data)) {
        en(t);
        return true;
      }
      if (!tv[r] || tB[r]) {
        if (!tB[r] && em(r) && (tT.tagNameCheck instanceof RegExp && T(tT.tagNameCheck, r) || tT.tagNameCheck instanceof Function && tT.tagNameCheck(r))) {
          return false;
        }
        if (tP && !tH[r]) {
          let e = ta(t) || t.parentNode;
          let r = ti(t) || t.childNodes;
          if (r && e) {
            let i = r.length;
            for (let a = i - 1; a >= 0; --a) {
              let i = V(r[a], true);
              i.__removalCount = (t.__removalCount || 0) + 1;
              e.insertBefore(i, tr(t));
            }
          }
        }
        en(t);
        return true;
      }
      if (t instanceof M && !el(t) || (r === "noscript" || r === "noembed" || r === "noframes") && T(/<\/no(script|embed|frames)/i, t.innerHTML)) {
        en(t);
        return true;
      } else {
        if (tA && t.nodeType === K.text) {
          e = t.textContent;
          p([tu, tp, tg], t => {
            e = v(e, t, " ");
          });
          if (t.textContent !== e) {
            m(a.removed, {
              element: t.cloneNode()
            });
            t.textContent = e;
          }
        }
        ep(td.afterSanitizeElements, t, null);
        return false;
      }
    };
    let ef = function (t, e, r) {
      if (tR && (e === "id" || e === "name") && (r in o || r in ee)) {
        return false;
      }
      if (tL && !tM[e] && T(tf, e)) ;else if (tW && T(tm, e)) ;else if (!tw[e] || tM[e]) {
        if ((!em(t) || (!(tT.tagNameCheck instanceof RegExp) || !T(tT.tagNameCheck, t)) && (!(tT.tagNameCheck instanceof Function) || !tT.tagNameCheck(t)) || (!(tT.attributeNameCheck instanceof RegExp) || !T(tT.attributeNameCheck, e)) && (!(tT.attributeNameCheck instanceof Function) || !tT.attributeNameCheck(e))) && (e !== "is" || !tT.allowCustomizedBuiltInElements || (!(tT.tagNameCheck instanceof RegExp) || !T(tT.tagNameCheck, r)) && (!(tT.tagNameCheck instanceof Function) || !tT.tagNameCheck(r)))) {
          return false;
        }
      } else if (tV[e]) ;else if (T(tC, v(r, tx, ""))) ;else if ((e === "src" || e === "xlink:href" || e === "href") && t !== "script" && k(r, "data:") === 0 && tY[t]) ;else if (tF && !T(ty, v(r, tx, ""))) ;else if (r) {
        return false;
      }
      return true;
    };
    let em = function (t) {
      return t !== "annotation-xml" && C(t, tb);
    };
    let ey = function (t) {
      ep(td.beforeSanitizeAttributes, t, null);
      let {
        attributes: r
      } = t;
      if (!r || ed(t)) {
        return;
      }
      let i = {
        attrName: "",
        attrValue: "",
        keepAttr: true,
        allowedAttributes: tw,
        forceKeepAttr: undefined
      };
      let o = r.length;
      while (o--) {
        let {
          name: l,
          namespaceURI: n,
          value: s
        } = r[o];
        let h = t7(l);
        let c = l === "value" ? s : w(s);
        i.attrName = h;
        i.attrValue = c;
        i.keepAttr = true;
        i.forceKeepAttr = undefined;
        ep(td.uponSanitizeAttribute, t, i);
        c = i.attrValue;
        if (tN && (h === "id" || h === "name")) {
          es(l, t);
          c = "user-content-" + c;
        }
        if (t$ && T(/((--!?|])>)|<\/(style|title)/i, c)) {
          es(l, t);
          continue;
        }
        if (i.forceKeepAttr || (es(l, t), !i.keepAttr)) {
          continue;
        }
        if (!t_ && T(/\/>/i, c)) {
          es(l, t);
          continue;
        }
        if (tA) {
          p([tu, tp, tg], t => {
            c = v(c, t, " ");
          });
        }
        let d = t7(t.nodeName);
        if (ef(d, h, c)) {
          if (e && typeof U == "object" && typeof U.getAttributeType == "function") {
            if (n) ;else {
              switch (U.getAttributeType(d, h)) {
                case "TrustedHTML":
                  c = e.createHTML(c);
                  break;
                case "TrustedScriptURL":
                  c = e.createScriptURL(c);
              }
            }
          }
          try {
            if (n) {
              t.setAttributeNS(n, l, c);
            } else {
              t.setAttribute(l, c);
            }
            if (ed(t)) {
              en(t);
            } else {
              f(a.removed);
            }
          } catch (t) {}
        }
      }
      ep(td.afterSanitizeAttributes, t, null);
    };
    let ex = function t(e) {
      let r = null;
      let i = ec(e);
      for (ep(td.beforeSanitizeShadowDOM, e, null); r = i.nextNode();) {
        ep(td.uponSanitizeShadowNode, r, null);
        eg(r);
        ey(r);
        if (r.content instanceof h) {
          t(r.content);
        }
      }
      ep(td.afterSanitizeShadowDOM, e, null);
    };
    a.sanitize = function (t, r = {}) {
      let i = null;
      let o = null;
      let n = null;
      let s = null;
      if (t1 = !t) {
        t = "<!-->";
      }
      if (typeof t != "string" && !eu(t)) {
        if (typeof t.toString == "function") {
          if (typeof (t = t.toString()) != "string") {
            throw B("dirty is not a string, aborting");
          }
        } else {
          throw B("toString is not a function");
        }
      }
      if (!a.isSupported) {
        return t;
      }
      if (!tZ) {
        ei(r);
      }
      a.removed = [];
      if (typeof t == "string") {
        tz = false;
      }
      if (tz) {
        if (t.nodeName) {
          let e = t7(t.nodeName);
          if (!tv[e] || tB[e]) {
            throw B("root node is forbidden and cannot be sanitized in-place");
          }
        }
      } else if (t instanceof u) {
        if ((o = (i = eh("<!---->")).ownerDocument.importNode(t, true)).nodeType === K.element && o.nodeName === "BODY") {
          i = o;
        } else if (o.nodeName === "HTML") {
          i = o;
        } else {
          i.appendChild(o);
        }
      } else {
        if (!tD && !tA && !tE && t.indexOf("<") === -1) {
          if (e && tq) {
            return e.createHTML(t);
          } else {
            return t;
          }
        }
        if (!(i = eh(t))) {
          if (tD) {
            return null;
          } else if (tq) {
            return to;
          } else {
            return "";
          }
        }
      }
      if (i && tO) {
        en(i.firstChild);
      }
      let c = ec(tz ? t : i);
      while (n = c.nextNode()) {
        eg(n);
        ey(n);
        if (n.content instanceof h) {
          ex(n.content);
        }
      }
      if (tz) {
        return t;
      }
      if (tD) {
        if (tI) {
          for (s = ts.call(i.ownerDocument); i.firstChild;) {
            s.appendChild(i.firstChild);
          }
        } else {
          s = i;
        }
        if (tw.shadowroot || tw.shadowrootmode) {
          s = tc.call(l, s, true);
        }
        return s;
      }
      let d = tE ? i.outerHTML : i.innerHTML;
      if (tE && tv["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && T(X, i.ownerDocument.doctype.name)) {
        d = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + d;
      }
      if (tA) {
        p([tu, tp, tg], t => {
          d = v(d, t, " ");
        });
      }
      if (e && tq) {
        return e.createHTML(d);
      } else {
        return d;
      }
    };
    a.setConfig = function (t = {}) {
      ei(t);
      tZ = true;
    };
    a.clearConfig = function () {
      et = null;
      tZ = false;
    };
    a.isValidAttribute = function (t, e, r) {
      if (!et) {
        ei({});
      }
      return ef(t7(t), t7(e), r);
    };
    a.addHook = function (t, e) {
      if (typeof e == "function") {
        m(td[t], e);
      }
    };
    a.removeHook = function (t, e) {
      if (e !== undefined) {
        let r = g(td[t], e);
        if (r === -1) {
          return undefined;
        } else {
          return y(td[t], r, 1)[0];
        }
      }
      return f(td[t]);
    };
    a.removeHooks = function (t) {
      td[t] = [];
    };
    a.removeAllHooks = function () {
      td = te();
    };
    return a;
  }();
  require.d(exports, {
    DOMPurify: function () {
      return tr;
    }
  });
}