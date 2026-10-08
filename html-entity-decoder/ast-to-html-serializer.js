// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'serializeAst'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 87517.91a890fe.js
         * chunkId: 87517
         * moduleId: 717279
         */
module.exports = function (module, exports, require) {
  var a;
  var i;
  var u;
  var d;
  var astNodeTypeConstants = require("ast-node-type-constants") /*id: 324565*/;
  require("html-entity-decoder-utils") /*id: 359570*/;
  let o = /["&'<>$\x80-\uFFFF]/g;
  let s = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]);
  let c = String.prototype.codePointAt != null ? (e, r) => e.codePointAt(r) : (e, r) => (e.charCodeAt(r) & 64512) == 55296 ? (e.charCodeAt(r) - 55296) * 1024 + e.charCodeAt(r + 1) - 56320 + 65536 : e.charCodeAt(r);
  function l(e) {
    let r;
    let t = "";
    let a = 0;
    while ((r = o.exec(e)) !== null) {
      let i = r.index;
      let u = e.charCodeAt(i);
      let d = s.get(u);
      if (d !== undefined) {
        t += e.substring(a, i) + d;
        a = i + 1;
      } else {
        t += `${e.substring(a, i)}&#x${c(e, i).toString(16)};`;
        a = o.lastIndex += Number((u & 64512) == 55296);
      }
    }
    return t + e.substr(a);
  }
  function m(e, r) {
    return function (t) {
      let a;
      let i = 0;
      let u = "";
      while (a = e.exec(t)) {
        if (i !== a.index) {
          u += t.substring(i, a.index);
        }
        u += r.get(a[0].charCodeAt(0));
        i = a.index + 1;
      }
      return u + t.substring(i);
    };
  }
  m(/[&<>'"]/g, s);
  let p = m(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]]));
  let f = m(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
  (a = u ||= {})[a.XML = 0] = "XML";
  a[a.HTML = 1] = "HTML";
  (i = d ||= {})[i.UTF8 = 0] = "UTF8";
  i[i.ASCII = 1] = "ASCII";
  i[i.Extensive = 2] = "Extensive";
  i[i.Attribute = 3] = "Attribute";
  i[i.Text = 4] = "Text";
  let h = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(e => [e.toLowerCase(), e]));
  let g = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(e => [e.toLowerCase(), e]));
  let y = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
  function E(e) {
    return e.replace(/"/g, "&quot;");
  }
  let b = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
  var A = function e(r, t = {}) {
    let a = "length" in r ? r : [r];
    let i = "";
    for (let r = 0; r < a.length; r++) {
      i += function (r, t) {
        var a;
        var i;
        var u;
        switch (r.type) {
          case astNodeTypeConstants.rootType:
            return e(r.children, t);
          case astNodeTypeConstants.doctypeType:
          case astNodeTypeConstants.directiveType:
            a = r;
            return `<${a.data}>`;
          case astNodeTypeConstants.commentType:
            i = r;
            return `<!--${i.data}-->`;
          case astNodeTypeConstants.cdataType:
            u = r;
            return `<![CDATA[${u.children[0].data}]]>`;
          case astNodeTypeConstants.scriptType:
          case astNodeTypeConstants.styleType:
          case astNodeTypeConstants.tagType:
            return function (r, t) {
              if (t.xmlMode === "foreign") {
                r.name = h.get(r.name) ?? r.name;
                if (r.parent && q.has(r.parent.name)) {
                  t = {
                    ...t,
                    xmlMode: false
                  };
                }
              }
              if (!t.xmlMode && w.has(r.name)) {
                t = {
                  ...t,
                  xmlMode: "foreign"
                };
              }
              let i = `<${r.name}`;
              let u = function (e, r) {
                if (!e) {
                  return;
                }
                let a = (r.encodeEntities ?? r.decodeEntities) === false ? E : r.xmlMode || r.encodeEntities !== "utf8" ? l : p;
                return Object.keys(e).map(t => {
                  let d = e[t] ?? "";
                  if (r.xmlMode === "foreign") {
                    t = g.get(t) ?? t;
                  }
                  if (r.emptyAttrs || r.xmlMode || d !== "") {
                    return `${t}="${a(d)}"`;
                  } else {
                    return t;
                  }
                }).join(" ");
              }(r.attribs, t);
              if (u) {
                i += ` ${u}`;
              }
              if (r.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== false : t.selfClosingTags && b.has(r.name))) {
                if (!t.xmlMode) {
                  i += " ";
                }
                i += "/>";
              } else {
                i += ">";
                if (r.children.length > 0) {
                  i += e(r.children, t);
                }
                if (t.xmlMode || !b.has(r.name)) {
                  i += `</${r.name}>`;
                }
              }
              return i;
            }(r, t);
          case astNodeTypeConstants.textType:
            return function (e, r) {
              let a = e.data || "";
              if ((r.encodeEntities ?? r.decodeEntities) !== false && (!!r.xmlMode || !e.parent || !y.has(e.parent.name))) {
                a = r.xmlMode || r.encodeEntities !== "utf8" ? l(a) : f(a);
              }
              return a;
            }(r, t);
        }
      }(a[r], t);
    }
    return i;
  };
  let q = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]);
  let w = new Set(["svg", "math"]);
  require.d(exports, {
    serializeAst: function () {
      return A;
    }
  });
}