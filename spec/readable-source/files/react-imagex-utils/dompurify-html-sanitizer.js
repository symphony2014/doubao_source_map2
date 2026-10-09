// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 79454
         */
module.exports = function (module, exports, require) {
  let {
    entries: t,
    setPrototypeOf: n,
    isFrozen: r,
    getPrototypeOf: i,
    getOwnPropertyDescriptor: o
  } = Object;
  let {
    freeze: a,
    seal: l,
    create: s
  } = Object;
  let {
    apply: c,
    construct: u
  } = typeof Reflect != "undefined" && Reflect;
  a ||= function (e) {
    return e;
  };
  l ||= function (e) {
    return e;
  };
  c ||= function (e, t, n) {
    return e.apply(t, n);
  };
  u ||= function (e, t) {
    return new e(...t);
  };
  let p = S(Array.prototype.forEach);
  let h = S(Array.prototype.lastIndexOf);
  let d = S(Array.prototype.pop);
  let A = S(Array.prototype.push);
  let f = S(Array.prototype.splice);
  let g = S(String.prototype.toLowerCase);
  let m = S(String.prototype.toString);
  let y = S(String.prototype.match);
  let b = S(String.prototype.replace);
  let x = S(String.prototype.indexOf);
  let k = S(String.prototype.trim);
  let w = S(Object.prototype.hasOwnProperty);
  let v = S(RegExp.prototype.test);
  Y = TypeError;
  let E = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return u(Y, t);
  };
  function S(e) {
    return function (t) {
      var n = arguments.length;
      var r = Array(n > 1 ? n - 1 : 0);
      var i = 1;
      for (; i < n; i++) {
        r[i - 1] = arguments[i];
      }
      return c(e, t, r);
    };
  }
  function T(e, t, i = g) {
    if (n) {
      n(e, null);
    }
    let o = t.length;
    while (o--) {
      let n = t[o];
      if (typeof n == "string") {
        let e = i(n);
        if (e !== n) {
          if (!r(t)) {
            t[o] = e;
          }
          n = e;
        }
      }
      e[n] = true;
    }
    return e;
  }
  function I(e) {
    let n = s(null);
    for (let [r, i] of t(e)) {
      if (w(e, r)) {
        if (Array.isArray(i)) {
          n[r] = function (e) {
            for (let t = 0; t < e.length; t++) {
              if (!w(e, t)) {
                e[t] = null;
              }
            }
            return e;
          }(i);
        } else if (i && typeof i == "object" && i.constructor === Object) {
          n[r] = I(i);
        } else {
          n[r] = i;
        }
      }
    }
    return n;
  }
  function C(e, t) {
    while (e !== null) {
      let n = o(e, t);
      if (n) {
        if (n.get) {
          return S(n.get);
        }
        if (typeof n.value == "function") {
          return S(n.value);
        }
      }
      e = i(e);
    }
    return function () {
      return null;
    };
  }
  let R = a(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
  let N = a(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
  let D = a(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
  let _ = a(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
  let L = a(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
  let z = a(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
  let M = a(["#text"]);
  let O = a(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
  let P = a(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
  let B = a(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
  let $ = a(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
  let H = l(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
  let j = l(/<%[\w\W]*|[\w\W]*%>/gm);
  let G = l(/\$\{[\w\W]*/gm);
  let F = l(/^data-[\-\w.\u00B7-\uFFFF]+$/);
  let U = l(/^aria-[\-\w]+$/);
  let W = l(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
  let Z = l(/^(?:\w+script|data):/i);
  let q = l(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
  let Q = l(/^html$/i);
  var Y;
  var V = Object.freeze({
    __proto__: null,
    ARIA_ATTR: U,
    ATTR_WHITESPACE: q,
    CUSTOM_ELEMENT: l(/^[a-z][.\w]*(-[.\w]+)+$/i),
    DATA_ATTR: F,
    DOCTYPE_NAME: Q,
    ERB_EXPR: j,
    IS_ALLOWED_URI: W,
    IS_SCRIPT_OR_DATA: Z,
    MUSTACHE_EXPR: H,
    TMPLIT_EXPR: G
  });
  let X = {
    element: 1,
    text: 3,
    progressingInstruction: 7,
    comment: 8,
    document: 9
  };
  let J = function (e, t) {
    if (typeof e != "object" || typeof e.createPolicy != "function") {
      return null;
    }
    let n = null;
    let r = "data-tt-policy-suffix";
    if (t && t.hasAttribute(r)) {
      n = t.getAttribute(r);
    }
    let i = "dompurify" + (n ? "#" + n : "");
    try {
      return e.createPolicy(i, {
        createHTML: e => e,
        createScriptURL: e => e
      });
    } catch (e) {
      return null;
    }
  };
  let K = function () {
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
  var ee = function e() {
    let n;
    let r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof window == "undefined" ? null : window;
    let i = t => e(t);
    i.version = "3.2.4";
    i.removed = [];
    if (!r || !r.document || r.document.nodeType !== X.document || !r.Element) {
      i.isSupported = false;
      return i;
    }
    let {
      document: o
    } = r;
    let l = o;
    let c = l.currentScript;
    let {
      DocumentFragment: u,
      HTMLTemplateElement: S,
      Node: H,
      Element: j,
      NodeFilter: G,
      NamedNodeMap: F = r.NamedNodeMap || r.MozNamedAttrMap,
      HTMLFormElement: U,
      DOMParser: Z,
      trustedTypes: q
    } = r;
    let Y = j.prototype;
    let ee = C(Y, "cloneNode");
    let et = C(Y, "remove");
    let en = C(Y, "nextSibling");
    let er = C(Y, "childNodes");
    let ei = C(Y, "parentNode");
    if (typeof S == "function") {
      let e = o.createElement("template");
      if (e.content && e.content.ownerDocument) {
        o = e.content.ownerDocument;
      }
    }
    let eo = "";
    let {
      implementation: ea,
      createNodeIterator: el,
      createDocumentFragment: es,
      getElementsByTagName: ec
    } = o;
    let {
      importNode: eu
    } = l;
    let ep = K();
    i.isSupported = typeof t == "function" && typeof ei == "function" && ea && ea.createHTMLDocument !== undefined;
    let {
      MUSTACHE_EXPR: eh,
      ERB_EXPR: ed,
      TMPLIT_EXPR: eA,
      DATA_ATTR: ef,
      ARIA_ATTR: eg,
      IS_SCRIPT_OR_DATA: em,
      ATTR_WHITESPACE: ey,
      CUSTOM_ELEMENT: eb
    } = V;
    let {
      IS_ALLOWED_URI: ex
    } = V;
    let ek = null;
    let ew = T({}, [...R, ...N, ...D, ...L, ...M]);
    let ev = null;
    let eE = T({}, [...O, ...P, ...B, ...$]);
    let eS = Object.seal(s(null, {
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
    let eT = null;
    let eI = null;
    let eC = true;
    let eR = true;
    let eN = false;
    let eD = true;
    let e_ = false;
    let eL = true;
    let ez = false;
    let eM = false;
    let eO = false;
    let eP = false;
    let eB = false;
    let e$ = false;
    let eH = true;
    let ej = false;
    let eG = true;
    let eF = false;
    let eU = {};
    let eW = null;
    let eZ = T({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let eq = null;
    let eQ = T({}, ["audio", "video", "img", "source", "image", "track"]);
    let eY = null;
    let eV = T({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
    let eX = "http://www.w3.org/1998/Math/MathML";
    let eJ = "http://www.w3.org/2000/svg";
    let eK = "http://www.w3.org/1999/xhtml";
    let e0 = eK;
    let e1 = false;
    let e2 = null;
    let e3 = T({}, [eX, eJ, eK], m);
    let e4 = T({}, ["mi", "mo", "mn", "ms", "mtext"]);
    let e9 = T({}, ["annotation-xml"]);
    let e8 = T({}, ["title", "style", "font", "a", "script"]);
    let e6 = null;
    let e7 = ["application/xhtml+xml", "text/html"];
    let e5 = null;
    let te = null;
    let tt = o.createElement("form");
    let tn = function (e) {
      return e instanceof RegExp || e instanceof Function;
    };
    let tr = function (e = {}) {
      if (!te || te !== e) {
        if (!e || typeof e != "object") {
          e = {};
        }
        e = I(e);
        e5 = (e6 = e7.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE) === "application/xhtml+xml" ? m : g;
        ek = w(e, "ALLOWED_TAGS") ? T({}, e.ALLOWED_TAGS, e5) : ew;
        ev = w(e, "ALLOWED_ATTR") ? T({}, e.ALLOWED_ATTR, e5) : eE;
        e2 = w(e, "ALLOWED_NAMESPACES") ? T({}, e.ALLOWED_NAMESPACES, m) : e3;
        eY = w(e, "ADD_URI_SAFE_ATTR") ? T(I(eV), e.ADD_URI_SAFE_ATTR, e5) : eV;
        eq = w(e, "ADD_DATA_URI_TAGS") ? T(I(eQ), e.ADD_DATA_URI_TAGS, e5) : eQ;
        eW = w(e, "FORBID_CONTENTS") ? T({}, e.FORBID_CONTENTS, e5) : eZ;
        eT = w(e, "FORBID_TAGS") ? T({}, e.FORBID_TAGS, e5) : {};
        eI = w(e, "FORBID_ATTR") ? T({}, e.FORBID_ATTR, e5) : {};
        eU = !!w(e, "USE_PROFILES") && e.USE_PROFILES;
        eC = e.ALLOW_ARIA_ATTR !== false;
        eR = e.ALLOW_DATA_ATTR !== false;
        eN = e.ALLOW_UNKNOWN_PROTOCOLS || false;
        eD = e.ALLOW_SELF_CLOSE_IN_ATTR !== false;
        e_ = e.SAFE_FOR_TEMPLATES || false;
        eL = e.SAFE_FOR_XML !== false;
        ez = e.WHOLE_DOCUMENT || false;
        eP = e.RETURN_DOM || false;
        eB = e.RETURN_DOM_FRAGMENT || false;
        e$ = e.RETURN_TRUSTED_TYPE || false;
        eO = e.FORCE_BODY || false;
        eH = e.SANITIZE_DOM !== false;
        ej = e.SANITIZE_NAMED_PROPS || false;
        eG = e.KEEP_CONTENT !== false;
        eF = e.IN_PLACE || false;
        ex = e.ALLOWED_URI_REGEXP || W;
        e0 = e.NAMESPACE || eK;
        e4 = e.MATHML_TEXT_INTEGRATION_POINTS || e4;
        e9 = e.HTML_INTEGRATION_POINTS || e9;
        eS = e.CUSTOM_ELEMENT_HANDLING || {};
        if (e.CUSTOM_ELEMENT_HANDLING && tn(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
          eS.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
        }
        if (e.CUSTOM_ELEMENT_HANDLING && tn(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
          eS.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
        }
        if (e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean") {
          eS.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
        }
        if (e_) {
          eR = false;
        }
        if (eB) {
          eP = true;
        }
        if (eU) {
          ek = T({}, M);
          ev = [];
          if (eU.html === true) {
            T(ek, R);
            T(ev, O);
          }
          if (eU.svg === true) {
            T(ek, N);
            T(ev, P);
            T(ev, $);
          }
          if (eU.svgFilters === true) {
            T(ek, D);
            T(ev, P);
            T(ev, $);
          }
          if (eU.mathMl === true) {
            T(ek, L);
            T(ev, B);
            T(ev, $);
          }
        }
        if (e.ADD_TAGS) {
          if (ek === ew) {
            ek = I(ek);
          }
          T(ek, e.ADD_TAGS, e5);
        }
        if (e.ADD_ATTR) {
          if (ev === eE) {
            ev = I(ev);
          }
          T(ev, e.ADD_ATTR, e5);
        }
        if (e.ADD_URI_SAFE_ATTR) {
          T(eY, e.ADD_URI_SAFE_ATTR, e5);
        }
        if (e.FORBID_CONTENTS) {
          if (eW === eZ) {
            eW = I(eW);
          }
          T(eW, e.FORBID_CONTENTS, e5);
        }
        if (eG) {
          ek["#text"] = true;
        }
        if (ez) {
          T(ek, ["html", "head", "body"]);
        }
        if (ek.table) {
          T(ek, ["tbody"]);
          delete eT.tbody;
        }
        if (e.TRUSTED_TYPES_POLICY) {
          if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") {
            throw E("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
          }
          if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") {
            throw E("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
          }
          eo = (n = e.TRUSTED_TYPES_POLICY).createHTML("");
        } else {
          if (n === undefined) {
            n = J(q, c);
          }
          if (n !== null && typeof eo == "string") {
            eo = n.createHTML("");
          }
        }
        if (a) {
          a(e);
        }
        te = e;
      }
    };
    let ti = T({}, [...N, ...D, ..._]);
    let to = T({}, [...L, ...z]);
    let ta = function (e) {
      let t = ei(e);
      if (!t || !t.tagName) {
        t = {
          namespaceURI: e0,
          tagName: "template"
        };
      }
      let n = g(e.tagName);
      let r = g(t.tagName);
      return !!e2[e.namespaceURI] && (e.namespaceURI === eJ ? t.namespaceURI === eK ? n === "svg" : t.namespaceURI === eX ? n === "svg" && (r === "annotation-xml" || e4[r]) : !!ti[n] : e.namespaceURI === eX ? t.namespaceURI === eK ? n === "math" : t.namespaceURI === eJ ? n === "math" && e9[r] : !!to[n] : e.namespaceURI === eK ? (t.namespaceURI !== eJ || !!e9[r]) && (t.namespaceURI !== eX || !!e4[r]) && !to[n] && (e8[n] || !ti[n]) : e6 === "application/xhtml+xml" && !!e2[e.namespaceURI]);
    };
    let tl = function (e) {
      A(i.removed, {
        element: e
      });
      try {
        ei(e).removeChild(e);
      } catch (t) {
        et(e);
      }
    };
    let ts = function (e, t) {
      try {
        A(i.removed, {
          attribute: t.getAttributeNode(e),
          from: t
        });
      } catch (e) {
        A(i.removed, {
          attribute: null,
          from: t
        });
      }
      t.removeAttribute(e);
      if (e === "is") {
        if (eP || eB) {
          try {
            tl(t);
          } catch (e) {}
        } else {
          try {
            t.setAttribute(e, "");
          } catch (e) {}
        }
      }
    };
    let tc = function (e) {
      let t = null;
      let r = null;
      if (eO) {
        e = "<remove></remove>" + e;
      } else {
        let t = y(e, /^[\r\n\t ]+/);
        r = t && t[0];
      }
      if (e6 === "application/xhtml+xml" && e0 === eK) {
        e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>";
      }
      let i = n ? n.createHTML(e) : e;
      if (e0 === eK) {
        try {
          t = new Z().parseFromString(i, e6);
        } catch (e) {}
      }
      if (!t || !t.documentElement) {
        t = ea.createDocument(e0, "template", null);
        try {
          t.documentElement.innerHTML = e1 ? eo : i;
        } catch (e) {}
      }
      let a = t.body || t.documentElement;
      if (e && r) {
        a.insertBefore(o.createTextNode(r), a.childNodes[0] || null);
      }
      if (e0 === eK) {
        return ec.call(t, ez ? "html" : "body")[0];
      } else if (ez) {
        return t.documentElement;
      } else {
        return a;
      }
    };
    let tu = function (e) {
      return el.call(e.ownerDocument || e, e, G.SHOW_ELEMENT | G.SHOW_COMMENT | G.SHOW_TEXT | G.SHOW_PROCESSING_INSTRUCTION | G.SHOW_CDATA_SECTION, null);
    };
    let tp = function (e) {
      return e instanceof U && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof F) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
    };
    let th = function (e) {
      return typeof H == "function" && e instanceof H;
    };
    function td(e, t, n) {
      p(e, e => {
        e.call(i, t, n, te);
      });
    }
    let tA = function (e) {
      let t = null;
      td(ep.beforeSanitizeElements, e, null);
      if (tp(e)) {
        tl(e);
        return true;
      }
      let n = e5(e.nodeName);
      td(ep.uponSanitizeElement, e, {
        tagName: n,
        allowedTags: ek
      });
      if (e.hasChildNodes() && !th(e.firstElementChild) && v(/<[/\w]/g, e.innerHTML) && v(/<[/\w]/g, e.textContent) || e.nodeType === X.progressingInstruction || eL && e.nodeType === X.comment && v(/<[/\w]/g, e.data)) {
        tl(e);
        return true;
      }
      if (!ek[n] || eT[n]) {
        if (!eT[n] && tg(n) && (eS.tagNameCheck instanceof RegExp && v(eS.tagNameCheck, n) || eS.tagNameCheck instanceof Function && eS.tagNameCheck(n))) {
          return false;
        }
        if (eG && !eW[n]) {
          let t = ei(e) || e.parentNode;
          let n = er(e) || e.childNodes;
          if (n && t) {
            let r = n.length;
            for (let i = r - 1; i >= 0; --i) {
              let r = ee(n[i], true);
              r.__removalCount = (e.__removalCount || 0) + 1;
              t.insertBefore(r, en(e));
            }
          }
        }
        tl(e);
        return true;
      }
      if (e instanceof j && !ta(e) || (n === "noscript" || n === "noembed" || n === "noframes") && v(/<\/no(script|embed|frames)/i, e.innerHTML)) {
        tl(e);
        return true;
      } else {
        if (e_ && e.nodeType === X.text) {
          t = e.textContent;
          p([eh, ed, eA], e => {
            t = b(t, e, " ");
          });
          if (e.textContent !== t) {
            A(i.removed, {
              element: e.cloneNode()
            });
            e.textContent = t;
          }
        }
        td(ep.afterSanitizeElements, e, null);
        return false;
      }
    };
    let tf = function (e, t, n) {
      if (eH && (t === "id" || t === "name") && (n in o || n in tt)) {
        return false;
      }
      if (eR && !eI[t] && v(ef, t)) ;else if (eC && v(eg, t)) ;else if (!ev[t] || eI[t]) {
        if ((!tg(e) || (!(eS.tagNameCheck instanceof RegExp) || !v(eS.tagNameCheck, e)) && (!(eS.tagNameCheck instanceof Function) || !eS.tagNameCheck(e)) || (!(eS.attributeNameCheck instanceof RegExp) || !v(eS.attributeNameCheck, t)) && (!(eS.attributeNameCheck instanceof Function) || !eS.attributeNameCheck(t))) && (t !== "is" || !eS.allowCustomizedBuiltInElements || (!(eS.tagNameCheck instanceof RegExp) || !v(eS.tagNameCheck, n)) && (!(eS.tagNameCheck instanceof Function) || !eS.tagNameCheck(n)))) {
          return false;
        }
      } else if (eY[t]) ;else if (v(ex, b(n, ey, ""))) ;else if ((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && x(n, "data:") === 0 && eq[e]) ;else if (eN && !v(em, b(n, ey, ""))) ;else if (n) {
        return false;
      }
      return true;
    };
    let tg = function (e) {
      return e !== "annotation-xml" && y(e, eb);
    };
    let tm = function (e) {
      td(ep.beforeSanitizeAttributes, e, null);
      let {
        attributes: t
      } = e;
      if (!t || tp(e)) {
        return;
      }
      let r = {
        attrName: "",
        attrValue: "",
        keepAttr: true,
        allowedAttributes: ev,
        forceKeepAttr: undefined
      };
      let o = t.length;
      while (o--) {
        let {
          name: a,
          namespaceURI: l,
          value: s
        } = t[o];
        let c = e5(a);
        let u = a === "value" ? s : k(s);
        r.attrName = c;
        r.attrValue = u;
        r.keepAttr = true;
        r.forceKeepAttr = undefined;
        td(ep.uponSanitizeAttribute, e, r);
        u = r.attrValue;
        if (ej && (c === "id" || c === "name")) {
          ts(a, e);
          u = "user-content-" + u;
        }
        if (eL && v(/((--!?|])>)|<\/(style|title)/i, u)) {
          ts(a, e);
          continue;
        }
        if (r.forceKeepAttr || (ts(a, e), !r.keepAttr)) {
          continue;
        }
        if (!eD && v(/\/>/i, u)) {
          ts(a, e);
          continue;
        }
        if (e_) {
          p([eh, ed, eA], e => {
            u = b(u, e, " ");
          });
        }
        let h = e5(e.nodeName);
        if (tf(h, c, u)) {
          if (n && typeof q == "object" && typeof q.getAttributeType == "function") {
            if (l) ;else {
              switch (q.getAttributeType(h, c)) {
                case "TrustedHTML":
                  u = n.createHTML(u);
                  break;
                case "TrustedScriptURL":
                  u = n.createScriptURL(u);
              }
            }
          }
          try {
            if (l) {
              e.setAttributeNS(l, a, u);
            } else {
              e.setAttribute(a, u);
            }
            if (tp(e)) {
              tl(e);
            } else {
              d(i.removed);
            }
          } catch (e) {}
        }
      }
      td(ep.afterSanitizeAttributes, e, null);
    };
    let ty = function e(t) {
      let n = null;
      let r = tu(t);
      for (td(ep.beforeSanitizeShadowDOM, t, null); n = r.nextNode();) {
        td(ep.uponSanitizeShadowNode, n, null);
        tA(n);
        tm(n);
        if (n.content instanceof u) {
          e(n.content);
        }
      }
      td(ep.afterSanitizeShadowDOM, t, null);
    };
    i.sanitize = function (e, t = {}) {
      let r = null;
      let o = null;
      let a = null;
      let s = null;
      if (e1 = !e) {
        e = "<!-->";
      }
      if (typeof e != "string" && !th(e)) {
        if (typeof e.toString == "function") {
          if (typeof (e = e.toString()) != "string") {
            throw E("dirty is not a string, aborting");
          }
        } else {
          throw E("toString is not a function");
        }
      }
      if (!i.isSupported) {
        return e;
      }
      if (!eM) {
        tr(t);
      }
      i.removed = [];
      if (typeof e == "string") {
        eF = false;
      }
      if (eF) {
        if (e.nodeName) {
          let t = e5(e.nodeName);
          if (!ek[t] || eT[t]) {
            throw E("root node is forbidden and cannot be sanitized in-place");
          }
        }
      } else if (e instanceof H) {
        if ((o = (r = tc("<!---->")).ownerDocument.importNode(e, true)).nodeType === X.element && o.nodeName === "BODY") {
          r = o;
        } else if (o.nodeName === "HTML") {
          r = o;
        } else {
          r.appendChild(o);
        }
      } else {
        if (!eP && !e_ && !ez && e.indexOf("<") === -1) {
          if (n && e$) {
            return n.createHTML(e);
          } else {
            return e;
          }
        }
        if (!(r = tc(e))) {
          if (eP) {
            return null;
          } else if (e$) {
            return eo;
          } else {
            return "";
          }
        }
      }
      if (r && eO) {
        tl(r.firstChild);
      }
      let c = tu(eF ? e : r);
      while (a = c.nextNode()) {
        tA(a);
        tm(a);
        if (a.content instanceof u) {
          ty(a.content);
        }
      }
      if (eF) {
        return e;
      }
      if (eP) {
        if (eB) {
          for (s = es.call(r.ownerDocument); r.firstChild;) {
            s.appendChild(r.firstChild);
          }
        } else {
          s = r;
        }
        if (ev.shadowroot || ev.shadowrootmode) {
          s = eu.call(l, s, true);
        }
        return s;
      }
      let h = ez ? r.outerHTML : r.innerHTML;
      if (ez && ek["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && v(Q, r.ownerDocument.doctype.name)) {
        h = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + h;
      }
      if (e_) {
        p([eh, ed, eA], e => {
          h = b(h, e, " ");
        });
      }
      if (n && e$) {
        return n.createHTML(h);
      } else {
        return h;
      }
    };
    i.setConfig = function (e = {}) {
      tr(e);
      eM = true;
    };
    i.clearConfig = function () {
      te = null;
      eM = false;
    };
    i.isValidAttribute = function (e, t, n) {
      if (!te) {
        tr({});
      }
      return tf(e5(e), e5(t), n);
    };
    i.addHook = function (e, t) {
      if (typeof t == "function") {
        A(ep[e], t);
      }
    };
    i.removeHook = function (e, t) {
      if (t !== undefined) {
        let n = h(ep[e], t);
        if (n === -1) {
          return undefined;
        } else {
          return f(ep[e], n, 1)[0];
        }
      }
      return d(ep[e]);
    };
    i.removeHooks = function (e) {
      ep[e] = [];
    };
    i.removeAllHooks = function () {
      ep = K();
    };
    return i;
  }();
  module.exports = ee;
}