// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm6' to 'mergeClassNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 323366
         */
module.exports = function (module, exports, require) {
  let r = e => {
    let t = s(e);
    let {
      conflictingClassGroups: n,
      conflictingClassGroupModifiers: r
    } = e;
    return {
      getClassGroupId: e => {
        let n = e.split("-");
        if (n[0] === "" && n.length !== 1) {
          n.shift();
        }
        return i(n, t) || a(e);
      },
      getConflictingClassGroupIds: (e, t) => {
        let i = n[e] || [];
        if (t && r[e]) {
          return [...i, ...r[e]];
        } else {
          return i;
        }
      }
    };
  };
  let i = (e, t) => {
    if (e.length === 0) {
      return t.classGroupId;
    }
    let r = e[0];
    let o = t.nextPart.get(r);
    let a = o ? i(e.slice(1), o) : undefined;
    if (a) {
      return a;
    }
    if (t.validators.length === 0) {
      return;
    }
    let s = e.join("-");
    return t.validators.find(e => {
      let {
        validator: t
      } = e;
      return t(s);
    })?.classGroupId;
  };
  let o = /^\[(.+)\]$/;
  let a = e => {
    if (o.test(e)) {
      let t = o.exec(e)[1];
      let n = t == null ? undefined : t.substring(0, t.indexOf(":"));
      if (n) {
        return "arbitrary.." + n;
      }
    }
  };
  let s = e => {
    let {
      theme: t,
      classGroups: n
    } = e;
    let r = {
      nextPart: new Map(),
      validators: []
    };
    for (let e in n) {
      u(n[e], r, e, t);
    }
    return r;
  };
  let u = (e, t, n, r) => {
    e.forEach(e => {
      if (typeof e == "string") {
        (e === "" ? t : c(t, e)).classGroupId = n;
        return;
      }
      if (typeof e == "function") {
        if (l(e)) {
          u(e(r), t, n, r);
          return;
        }
        t.validators.push({
          validator: e,
          classGroupId: n
        });
        return;
      }
      Object.entries(e).forEach(e => {
        let [i, o] = e;
        u(o, c(t, i), n, r);
      });
    });
  };
  let c = (e, t) => {
    let n = e;
    t.split("-").forEach(e => {
      if (!n.nextPart.has(e)) {
        n.nextPart.set(e, {
          nextPart: new Map(),
          validators: []
        });
      }
      n = n.nextPart.get(e);
    });
    return n;
  };
  let l = e => e.isThemeGetter;
  let f = e => {
    if (e < 1) {
      return {
        get: () => undefined,
        set: () => {}
      };
    }
    let t = 0;
    let n = new Map();
    let r = new Map();
    let i = (i, o) => {
      n.set(i, o);
      if (++t > e) {
        t = 0;
        r = n;
        n = new Map();
      }
    };
    return {
      get(e) {
        let t = n.get(e);
        if (t !== undefined) {
          return t;
        } else if ((t = r.get(e)) !== undefined) {
          i(e, t);
          return t;
        } else {
          return undefined;
        }
      },
      set(e, t) {
        if (n.has(e)) {
          n.set(e, t);
        } else {
          i(e, t);
        }
      }
    };
  };
  let h = e => {
    let {
      prefix: t,
      experimentalParseClassName: n
    } = e;
    let r = e => {
      let t;
      let n = [];
      let r = 0;
      let i = 0;
      let o = 0;
      for (let a = 0; a < e.length; a++) {
        let s = e[a];
        if (r === 0 && i === 0) {
          if (s === ":") {
            n.push(e.slice(o, a));
            o = a + 1;
            continue;
          }
          if (s === "/") {
            t = a;
            continue;
          }
        }
        if (s === "[") {
          r++;
        } else if (s === "]") {
          r--;
        } else if (s === "(") {
          i++;
        } else if (s === ")") {
          i--;
        }
      }
      let a = n.length === 0 ? e : e.substring(o);
      let s = d(a);
      return {
        modifiers: n,
        hasImportantModifier: s !== a,
        baseClassName: s,
        maybePostfixModifierPosition: t && t > o ? t - o : undefined
      };
    };
    if (t) {
      let e = t + ":";
      let n = r;
      r = t => t.startsWith(e) ? n(t.substring(e.length)) : {
        isExternal: true,
        modifiers: [],
        hasImportantModifier: false,
        baseClassName: t,
        maybePostfixModifierPosition: undefined
      };
    }
    if (n) {
      let e = r;
      r = t => n({
        className: t,
        parseClassName: e
      });
    }
    return r;
  };
  let d = e => e.endsWith("!") ? e.substring(0, e.length - 1) : e.startsWith("!") ? e.substring(1) : e;
  let p = e => {
    let t = Object.fromEntries(e.orderSensitiveModifiers.map(e => [e, true]));
    return e => {
      if (e.length <= 1) {
        return e;
      }
      let n = [];
      let r = [];
      e.forEach(e => {
        if (e[0] === "[" || t[e]) {
          n.push(...r.sort(), e);
          r = [];
        } else {
          r.push(e);
        }
      });
      n.push(...r.sort());
      return n;
    };
  };
  let g = e => ({
    cache: f(e.cacheSize),
    parseClassName: h(e),
    sortModifiers: p(e),
    ...r(e)
  });
  let v = /\s+/;
  let m = (e, t) => {
    let {
      parseClassName: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: i,
      sortModifiers: o
    } = t;
    let a = [];
    let s = e.trim().split(v);
    let u = "";
    for (let e = s.length - 1; e >= 0; e -= 1) {
      let t = s[e];
      let {
        isExternal: c,
        modifiers: l,
        hasImportantModifier: f,
        baseClassName: h,
        maybePostfixModifierPosition: d
      } = n(t);
      if (c) {
        u = t + (u.length > 0 ? " " + u : u);
        continue;
      }
      let p = !!d;
      let g = r(p ? h.substring(0, d) : h);
      if (!g) {
        if (!p || !(g = r(h))) {
          u = t + (u.length > 0 ? " " + u : u);
          continue;
        }
        p = false;
      }
      let v = o(l).join(":");
      let m = f ? v + "!" : v;
      let y = m + g;
      if (a.includes(y)) {
        continue;
      }
      a.push(y);
      let b = i(g, p);
      for (let e = 0; e < b.length; ++e) {
        let t = b[e];
        a.push(m + t);
      }
      u = t + (u.length > 0 ? " " + u : u);
    }
    return u;
  };
  function y() {
    let e;
    let t;
    let n = 0;
    let r = "";
    while (n < arguments.length) {
      if ((e = arguments[n++]) && (t = b(e))) {
        if (r) {
          r += " ";
        }
        r += t;
      }
    }
    return r;
  }
  let b = e => {
    let t;
    if (typeof e == "string") {
      return e;
    }
    let n = "";
    for (let r = 0; r < e.length; r++) {
      if (e[r] && (t = b(e[r]))) {
        if (n) {
          n += " ";
        }
        n += t;
      }
    }
    return n;
  };
  let _ = e => {
    let t = t => t[e] || [];
    t.isThemeGetter = true;
    return t;
  };
  let w = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
  let E = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
  let S = /^\d+\/\d+$/;
  let x = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  let k = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  let O = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
  let A = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  let T = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  let R = e => S.test(e);
  let C = e => !!e && !Number.isNaN(Number(e));
  let M = e => !!e && Number.isInteger(Number(e));
  let P = e => e.endsWith("%") && C(e.slice(0, -1));
  let D = e => x.test(e);
  let j = () => true;
  let I = e => k.test(e) && !O.test(e);
  let N = () => false;
  let L = e => A.test(e);
  let B = e => T.test(e);
  let Z = e => !z(e) && !W(e);
  let U = e => ee(e, ei, N);
  let z = e => w.test(e);
  let F = e => ee(e, eo, I);
  let H = e => ee(e, ea, C);
  let G = e => ee(e, en, N);
  let V = e => ee(e, er, B);
  let $ = e => ee(e, eu, L);
  let W = e => E.test(e);
  let q = e => et(e, eo);
  let K = e => et(e, es);
  let J = e => et(e, en);
  let X = e => et(e, ei);
  let Y = e => et(e, er);
  let Q = e => et(e, eu, true);
  let ee = (e, t, n) => {
    let r = w.exec(e);
    return !!r && (r[1] ? t(r[1]) : n(r[2]));
  };
  let et = function (e, t, n = false) {
    let r = E.exec(e);
    return !!r && (r[1] ? t(r[1]) : n);
  };
  let en = e => e === "position" || e === "percentage";
  let er = e => e === "image" || e === "url";
  let ei = e => e === "length" || e === "size" || e === "bg-size";
  let eo = e => e === "length";
  let ea = e => e === "number";
  let es = e => e === "family-name";
  let eu = e => e === "shadow";
  let ec = function (e) {
    let t;
    let n;
    let r;
    var i = arguments.length;
    var o = Array(i > 1 ? i - 1 : 0);
    var a = 1;
    for (; a < i; a++) {
      o[a - 1] = arguments[a];
    }
    let s = function (i) {
      n = (t = g(o.reduce((e, t) => t(e), e()))).cache.get;
      r = t.cache.set;
      s = u;
      return u(i);
    };
    function u(e) {
      let i = n(e);
      if (i) {
        return i;
      }
      let o = m(e, t);
      r(e, o);
      return o;
    }
    return function () {
      return s(y.apply(null, arguments));
    };
  }(() => {
    let e = _("color");
    let t = _("font");
    let n = _("text");
    let r = _("font-weight");
    let i = _("tracking");
    let o = _("leading");
    let a = _("breakpoint");
    let s = _("container");
    let u = _("spacing");
    let c = _("radius");
    let l = _("shadow");
    let f = _("inset-shadow");
    let h = _("text-shadow");
    let d = _("drop-shadow");
    let p = _("blur");
    let g = _("perspective");
    let v = _("aspect");
    let m = _("ease");
    let y = _("animate");
    let b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
    let w = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"];
    let E = () => [...w(), W, z];
    let S = () => ["auto", "hidden", "clip", "visible", "scroll"];
    let x = () => ["auto", "contain", "none"];
    let k = () => [W, z, u];
    let O = () => [R, "full", "auto", ...k()];
    let A = () => [M, "none", "subgrid", W, z];
    let T = () => ["auto", {
      span: ["full", M, W, z]
    }, M, W, z];
    let I = () => [M, "auto", W, z];
    let N = () => ["auto", "min", "max", "fr", W, z];
    let L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
    let B = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
    let ee = () => ["auto", ...k()];
    let et = () => [R, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()];
    let en = () => [e, W, z];
    let er = () => [...w(), J, G, {
      position: [W, z]
    }];
    let ei = () => ["no-repeat", {
      repeat: ["", "x", "y", "space", "round"]
    }];
    let eo = () => ["auto", "cover", "contain", X, U, {
      size: [W, z]
    }];
    let ea = () => [P, q, F];
    let es = () => ["", "none", "full", c, W, z];
    let eu = () => ["", C, q, F];
    let ec = () => ["solid", "dashed", "dotted", "double"];
    let el = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
    let ef = () => [C, P, J, G];
    let eh = () => ["", "none", p, W, z];
    let ed = () => ["none", C, W, z];
    let ep = () => ["none", C, W, z];
    let eg = () => [C, W, z];
    let ev = () => [R, "full", ...k()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [D],
        breakpoint: [D],
        color: [j],
        container: [D],
        "drop-shadow": [D],
        ease: ["in", "out", "in-out"],
        font: [Z],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [D],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [D],
        shadow: [D],
        spacing: ["px", C],
        text: [D],
        "text-shadow": [D],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", R, z, W, v]
        }],
        container: ["container"],
        columns: [{
          columns: [C, z, W, s]
        }],
        "break-after": [{
          "break-after": b()
        }],
        "break-before": [{
          "break-before": b()
        }],
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        box: [{
          box: ["border", "content"]
        }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        sr: ["sr-only", "not-sr-only"],
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        "object-position": [{
          object: E()
        }],
        overflow: [{
          overflow: S()
        }],
        "overflow-x": [{
          "overflow-x": S()
        }],
        "overflow-y": [{
          "overflow-y": S()
        }],
        overscroll: [{
          overscroll: x()
        }],
        "overscroll-x": [{
          "overscroll-x": x()
        }],
        "overscroll-y": [{
          "overscroll-y": x()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: O()
        }],
        "inset-x": [{
          "inset-x": O()
        }],
        "inset-y": [{
          "inset-y": O()
        }],
        start: [{
          start: O()
        }],
        end: [{
          end: O()
        }],
        top: [{
          top: O()
        }],
        right: [{
          right: O()
        }],
        bottom: [{
          bottom: O()
        }],
        left: [{
          left: O()
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: [M, "auto", W, z]
        }],
        basis: [{
          basis: [R, "full", "auto", s, ...k()]
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        flex: [{
          flex: [C, R, "auto", "initial", "none", z]
        }],
        grow: [{
          grow: ["", C, W, z]
        }],
        shrink: [{
          shrink: ["", C, W, z]
        }],
        order: [{
          order: [M, "first", "last", "none", W, z]
        }],
        "grid-cols": [{
          "grid-cols": A()
        }],
        "col-start-end": [{
          col: T()
        }],
        "col-start": [{
          "col-start": I()
        }],
        "col-end": [{
          "col-end": I()
        }],
        "grid-rows": [{
          "grid-rows": A()
        }],
        "row-start-end": [{
          row: T()
        }],
        "row-start": [{
          "row-start": I()
        }],
        "row-end": [{
          "row-end": I()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": N()
        }],
        "auto-rows": [{
          "auto-rows": N()
        }],
        gap: [{
          gap: k()
        }],
        "gap-x": [{
          "gap-x": k()
        }],
        "gap-y": [{
          "gap-y": k()
        }],
        "justify-content": [{
          justify: [...L(), "normal"]
        }],
        "justify-items": [{
          "justify-items": [...B(), "normal"]
        }],
        "justify-self": [{
          "justify-self": ["auto", ...B()]
        }],
        "align-content": [{
          content: ["normal", ...L()]
        }],
        "align-items": [{
          items: [...B(), {
            baseline: ["", "last"]
          }]
        }],
        "align-self": [{
          self: ["auto", ...B(), {
            baseline: ["", "last"]
          }]
        }],
        "place-content": [{
          "place-content": L()
        }],
        "place-items": [{
          "place-items": [...B(), "baseline"]
        }],
        "place-self": [{
          "place-self": ["auto", ...B()]
        }],
        p: [{
          p: k()
        }],
        px: [{
          px: k()
        }],
        py: [{
          py: k()
        }],
        ps: [{
          ps: k()
        }],
        pe: [{
          pe: k()
        }],
        pt: [{
          pt: k()
        }],
        pr: [{
          pr: k()
        }],
        pb: [{
          pb: k()
        }],
        pl: [{
          pl: k()
        }],
        m: [{
          m: ee()
        }],
        mx: [{
          mx: ee()
        }],
        my: [{
          my: ee()
        }],
        ms: [{
          ms: ee()
        }],
        me: [{
          me: ee()
        }],
        mt: [{
          mt: ee()
        }],
        mr: [{
          mr: ee()
        }],
        mb: [{
          mb: ee()
        }],
        ml: [{
          ml: ee()
        }],
        "space-x": [{
          "space-x": k()
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": k()
        }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{
          size: et()
        }],
        w: [{
          w: [s, "screen", ...et()]
        }],
        "min-w": [{
          "min-w": [s, "screen", "none", ...et()]
        }],
        "max-w": [{
          "max-w": [s, "screen", "none", "prose", {
            screen: [a]
          }, ...et()]
        }],
        h: [{
          h: ["screen", "lh", ...et()]
        }],
        "min-h": [{
          "min-h": ["screen", "lh", "none", ...et()]
        }],
        "max-h": [{
          "max-h": ["screen", "lh", ...et()]
        }],
        "font-size": [{
          text: ["base", n, q, F]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: [r, W, H]
        }],
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", P, z]
        }],
        "font-family": [{
          font: [K, z, t]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{
          tracking: [i, W, z]
        }],
        "line-clamp": [{
          "line-clamp": [C, "none", W, H]
        }],
        leading: [{
          leading: [o, ...k()]
        }],
        "list-image": [{
          "list-image": ["none", W, z]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "list-style-type": [{
          list: ["disc", "decimal", "none", W, z]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "placeholder-color": [{
          placeholder: en()
        }],
        "text-color": [{
          text: en()
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...ec(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: [C, "from-font", "auto", W, F]
        }],
        "text-decoration-color": [{
          decoration: en()
        }],
        "underline-offset": [{
          "underline-offset": [C, "auto", W, z]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: k()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W, z]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        wrap: [{
          wrap: ["break-word", "anywhere", "normal"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", W, z]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: er()
        }],
        "bg-repeat": [{
          bg: ei()
        }],
        "bg-size": [{
          bg: eo()
        }],
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, M, W, z],
            radial: ["", W, z],
            conic: [M, W, z]
          }, Y, V]
        }],
        "bg-color": [{
          bg: en()
        }],
        "gradient-from-pos": [{
          from: ea()
        }],
        "gradient-via-pos": [{
          via: ea()
        }],
        "gradient-to-pos": [{
          to: ea()
        }],
        "gradient-from": [{
          from: en()
        }],
        "gradient-via": [{
          via: en()
        }],
        "gradient-to": [{
          to: en()
        }],
        rounded: [{
          rounded: es()
        }],
        "rounded-s": [{
          "rounded-s": es()
        }],
        "rounded-e": [{
          "rounded-e": es()
        }],
        "rounded-t": [{
          "rounded-t": es()
        }],
        "rounded-r": [{
          "rounded-r": es()
        }],
        "rounded-b": [{
          "rounded-b": es()
        }],
        "rounded-l": [{
          "rounded-l": es()
        }],
        "rounded-ss": [{
          "rounded-ss": es()
        }],
        "rounded-se": [{
          "rounded-se": es()
        }],
        "rounded-ee": [{
          "rounded-ee": es()
        }],
        "rounded-es": [{
          "rounded-es": es()
        }],
        "rounded-tl": [{
          "rounded-tl": es()
        }],
        "rounded-tr": [{
          "rounded-tr": es()
        }],
        "rounded-br": [{
          "rounded-br": es()
        }],
        "rounded-bl": [{
          "rounded-bl": es()
        }],
        "border-w": [{
          border: eu()
        }],
        "border-w-x": [{
          "border-x": eu()
        }],
        "border-w-y": [{
          "border-y": eu()
        }],
        "border-w-s": [{
          "border-s": eu()
        }],
        "border-w-e": [{
          "border-e": eu()
        }],
        "border-w-t": [{
          "border-t": eu()
        }],
        "border-w-r": [{
          "border-r": eu()
        }],
        "border-w-b": [{
          "border-b": eu()
        }],
        "border-w-l": [{
          "border-l": eu()
        }],
        "divide-x": [{
          "divide-x": eu()
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": eu()
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{
          border: [...ec(), "hidden", "none"]
        }],
        "divide-style": [{
          divide: [...ec(), "hidden", "none"]
        }],
        "border-color": [{
          border: en()
        }],
        "border-color-x": [{
          "border-x": en()
        }],
        "border-color-y": [{
          "border-y": en()
        }],
        "border-color-s": [{
          "border-s": en()
        }],
        "border-color-e": [{
          "border-e": en()
        }],
        "border-color-t": [{
          "border-t": en()
        }],
        "border-color-r": [{
          "border-r": en()
        }],
        "border-color-b": [{
          "border-b": en()
        }],
        "border-color-l": [{
          "border-l": en()
        }],
        "divide-color": [{
          divide: en()
        }],
        "outline-style": [{
          outline: [...ec(), "none", "hidden"]
        }],
        "outline-offset": [{
          "outline-offset": [C, W, z]
        }],
        "outline-w": [{
          outline: ["", C, q, F]
        }],
        "outline-color": [{
          outline: en()
        }],
        shadow: [{
          shadow: ["", "none", l, Q, $]
        }],
        "shadow-color": [{
          shadow: en()
        }],
        "inset-shadow": [{
          "inset-shadow": ["none", f, Q, $]
        }],
        "inset-shadow-color": [{
          "inset-shadow": en()
        }],
        "ring-w": [{
          ring: eu()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: en()
        }],
        "ring-offset-w": [{
          "ring-offset": [C, F]
        }],
        "ring-offset-color": [{
          "ring-offset": en()
        }],
        "inset-ring-w": [{
          "inset-ring": eu()
        }],
        "inset-ring-color": [{
          "inset-ring": en()
        }],
        "text-shadow": [{
          "text-shadow": ["none", h, Q, $]
        }],
        "text-shadow-color": [{
          "text-shadow": en()
        }],
        opacity: [{
          opacity: [C, W, z]
        }],
        "mix-blend": [{
          "mix-blend": [...el(), "plus-darker", "plus-lighter"]
        }],
        "bg-blend": [{
          "bg-blend": el()
        }],
        "mask-clip": [{
          "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
        }, "mask-no-clip"],
        "mask-composite": [{
          mask: ["add", "subtract", "intersect", "exclude"]
        }],
        "mask-image-linear-pos": [{
          "mask-linear": [C]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": ef()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": ef()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": en()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": en()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": ef()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": ef()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": en()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": en()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": ef()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": ef()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": en()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": en()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": ef()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": ef()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": en()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": en()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": ef()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": ef()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": en()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": en()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": ef()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": ef()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": en()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": en()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": ef()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": ef()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": en()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": en()
        }],
        "mask-image-radial": [{
          "mask-radial": [W, z]
        }],
        "mask-image-radial-from-pos": [{
          "mask-radial-from": ef()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": ef()
        }],
        "mask-image-radial-from-color": [{
          "mask-radial-from": en()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": en()
        }],
        "mask-image-radial-shape": [{
          "mask-radial": ["circle", "ellipse"]
        }],
        "mask-image-radial-size": [{
          "mask-radial": [{
            closest: ["side", "corner"],
            farthest: ["side", "corner"]
          }]
        }],
        "mask-image-radial-pos": [{
          "mask-radial-at": w()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [C]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": ef()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": ef()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": en()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": en()
        }],
        "mask-mode": [{
          mask: ["alpha", "luminance", "match"]
        }],
        "mask-origin": [{
          "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
        }],
        "mask-position": [{
          mask: er()
        }],
        "mask-repeat": [{
          mask: ei()
        }],
        "mask-size": [{
          mask: eo()
        }],
        "mask-type": [{
          "mask-type": ["alpha", "luminance"]
        }],
        "mask-image": [{
          mask: ["none", W, z]
        }],
        filter: [{
          filter: ["", "none", W, z]
        }],
        blur: [{
          blur: eh()
        }],
        brightness: [{
          brightness: [C, W, z]
        }],
        contrast: [{
          contrast: [C, W, z]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", d, Q, $]
        }],
        "drop-shadow-color": [{
          "drop-shadow": en()
        }],
        grayscale: [{
          grayscale: ["", C, W, z]
        }],
        "hue-rotate": [{
          "hue-rotate": [C, W, z]
        }],
        invert: [{
          invert: ["", C, W, z]
        }],
        saturate: [{
          saturate: [C, W, z]
        }],
        sepia: [{
          sepia: ["", C, W, z]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none", W, z]
        }],
        "backdrop-blur": [{
          "backdrop-blur": eh()
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [C, W, z]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [C, W, z]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", C, W, z]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [C, W, z]
        }],
        "backdrop-invert": [{
          "backdrop-invert": ["", C, W, z]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [C, W, z]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [C, W, z]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": ["", C, W, z]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": k()
        }],
        "border-spacing-x": [{
          "border-spacing-x": k()
        }],
        "border-spacing-y": [{
          "border-spacing-y": k()
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", W, z]
        }],
        "transition-behavior": [{
          transition: ["normal", "discrete"]
        }],
        duration: [{
          duration: [C, "initial", W, z]
        }],
        ease: [{
          ease: ["linear", "initial", m, W, z]
        }],
        delay: [{
          delay: [C, W, z]
        }],
        animate: [{
          animate: ["none", y, W, z]
        }],
        backface: [{
          backface: ["hidden", "visible"]
        }],
        perspective: [{
          perspective: [g, W, z]
        }],
        "perspective-origin": [{
          "perspective-origin": E()
        }],
        rotate: [{
          rotate: ed()
        }],
        "rotate-x": [{
          "rotate-x": ed()
        }],
        "rotate-y": [{
          "rotate-y": ed()
        }],
        "rotate-z": [{
          "rotate-z": ed()
        }],
        scale: [{
          scale: ep()
        }],
        "scale-x": [{
          "scale-x": ep()
        }],
        "scale-y": [{
          "scale-y": ep()
        }],
        "scale-z": [{
          "scale-z": ep()
        }],
        "scale-3d": ["scale-3d"],
        skew: [{
          skew: eg()
        }],
        "skew-x": [{
          "skew-x": eg()
        }],
        "skew-y": [{
          "skew-y": eg()
        }],
        transform: [{
          transform: [W, z, "", "none", "gpu", "cpu"]
        }],
        "transform-origin": [{
          origin: E()
        }],
        "transform-style": [{
          transform: ["3d", "flat"]
        }],
        translate: [{
          translate: ev()
        }],
        "translate-x": [{
          "translate-x": ev()
        }],
        "translate-y": [{
          "translate-y": ev()
        }],
        "translate-z": [{
          "translate-z": ev()
        }],
        "translate-none": ["translate-none"],
        accent: [{
          accent: en()
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        "caret-color": [{
          caret: en()
        }],
        "color-scheme": [{
          scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W, z]
        }],
        "field-sizing": [{
          "field-sizing": ["fixed", "content"]
        }],
        "pointer-events": [{
          "pointer-events": ["auto", "none"]
        }],
        resize: [{
          resize: ["none", "", "y", "x"]
        }],
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        "scroll-m": [{
          "scroll-m": k()
        }],
        "scroll-mx": [{
          "scroll-mx": k()
        }],
        "scroll-my": [{
          "scroll-my": k()
        }],
        "scroll-ms": [{
          "scroll-ms": k()
        }],
        "scroll-me": [{
          "scroll-me": k()
        }],
        "scroll-mt": [{
          "scroll-mt": k()
        }],
        "scroll-mr": [{
          "scroll-mr": k()
        }],
        "scroll-mb": [{
          "scroll-mb": k()
        }],
        "scroll-ml": [{
          "scroll-ml": k()
        }],
        "scroll-p": [{
          "scroll-p": k()
        }],
        "scroll-px": [{
          "scroll-px": k()
        }],
        "scroll-py": [{
          "scroll-py": k()
        }],
        "scroll-ps": [{
          "scroll-ps": k()
        }],
        "scroll-pe": [{
          "scroll-pe": k()
        }],
        "scroll-pt": [{
          "scroll-pt": k()
        }],
        "scroll-pr": [{
          "scroll-pr": k()
        }],
        "scroll-pb": [{
          "scroll-pb": k()
        }],
        "scroll-pl": [{
          "scroll-pl": k()
        }],
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", W, z]
        }],
        fill: [{
          fill: ["none", ...en()]
        }],
        "stroke-w": [{
          stroke: [C, q, F, H]
        }],
        stroke: [{
          stroke: ["none", ...en()]
        }],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      },
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    };
  });
  require.d(exports, {
    mergeClassNames: function () {
      return ec;
    }
  });
}