// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37721.1998351f.js
         * chunkId: 37721
         * moduleId: 634692
         */
module.exports = function (module, exports, require) {
  function o(e) {
    var t;
    var r;
    var o = (e = {
      ...P,
      ...e
    }).inline;
    var i = e.tokenHooks;
    var a = e.documentTypes || {};
    var n = e.mediaTypes || {};
    var l = e.mediaFeatures || {};
    var s = e.mediaValueKeywords || {};
    var c = e.propertyKeywords || {};
    var d = e.nonStandardPropertyKeywords || {};
    var p = e.fontProperties || {};
    var u = e.counterDescriptors || {};
    var m = e.colorKeywords || {};
    var g = e.valueKeywords || {};
    var h = e.allowNested;
    var b = e.lineComment;
    var f = e.supportsAtComponent === true;
    var k = e.highlightNonStandardPropertyKeywords !== false;
    function y(e) {
      return function (r, o) {
        var i;
        var a = false;
        while ((i = r.next()) != null) {
          if (i == e && !a) {
            if (e == ")") {
              r.backUp(1);
            }
            break;
          }
          a = !a && i == "\\";
        }
        if (i == e || !a && e != ")") {
          o.tokenize = null;
        }
        t = "string";
        return "string";
      };
    }
    function w(e, r) {
      e.next();
      if (e.match(/^\s*[\"\')]/, false)) {
        r.tokenize = null;
      } else {
        r.tokenize = y(")");
      }
      t = "(";
      return null;
    }
    function v(e, t, r) {
      this.type = e;
      this.indent = t;
      this.prev = r;
    }
    function x(e, t, r, o) {
      e.context = new v(r, t.indentation() + (o === false ? 0 : t.indentUnit), e.context);
      return r;
    }
    function z(e) {
      if (e.context.prev) {
        e.context = e.context.prev;
      }
      return e.context.type;
    }
    function K(e, t, r) {
      return B[r.context.type](e, t, r);
    }
    function j(e, t, r, o) {
      for (var i = o || 1; i > 0; i--) {
        r.context = r.context.prev;
      }
      return K(e, t, r);
    }
    function q(e) {
      var t = e.current().toLowerCase();
      r = g.hasOwnProperty(t) ? "atom" : m.hasOwnProperty(t) ? "keyword" : "variable";
    }
    var B = {};
    B.top = function (e, t, o) {
      if (e == "{") {
        return x(o, t, "block");
      }
      if (e == "}" && o.context.prev) {
        return z(o);
      }
      if (f && /@component/i.test(e)) {
        return x(o, t, "atComponentBlock");
      }
      if (/^@(-moz-)?document$/i.test(e)) {
        return x(o, t, "documentTypes");
      }
      if (/^@(media|supports|(-moz-)?document|import)$/i.test(e)) {
        return x(o, t, "atBlock");
      } else if (/^@(font-face|counter-style)/i.test(e)) {
        o.stateArg = e;
        return "restricted_atBlock_before";
      } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e)) {
        return "keyframes";
      } else if (e && e.charAt(0) == "@") {
        return x(o, t, "at");
      } else if (e == "hash") {
        r = "builtin";
      } else if (e == "word") {
        r = "tag";
      } else if (e == "variable-definition") {
        return "maybeprop";
      } else if (e == "interpolation") {
        return x(o, t, "interpolation");
      } else if (e == ":") {
        return "pseudo";
      } else if (h && e == "(") {
        return x(o, t, "parens");
      }
      return o.context.type;
    };
    B.block = function (e, t, o) {
      if (e == "word") {
        var i = t.current().toLowerCase();
        if (c.hasOwnProperty(i)) {
          r = "property";
          return "maybeprop";
        } else if (d.hasOwnProperty(i)) {
          r = k ? "string.special" : "property";
          return "maybeprop";
        } else if (h) {
          r = t.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag";
          return "block";
        } else {
          r = "error";
          return "maybeprop";
        }
      }
      if (e == "meta") {
        return "block";
      } else if (h || e != "hash" && e != "qualifier") {
        return B.top(e, t, o);
      } else {
        r = "error";
        return "block";
      }
    };
    B.maybeprop = function (e, t, r) {
      if (e == ":") {
        return x(r, t, "prop");
      } else {
        return K(e, t, r);
      }
    };
    B.prop = function (e, t, o) {
      if (e == ";") {
        return z(o);
      }
      if (e == "{" && h) {
        return x(o, t, "propBlock");
      }
      if (e == "}" || e == "{") {
        return j(e, t, o);
      }
      if (e == "(") {
        return x(o, t, "parens");
      }
      if (e != "hash" || /^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(t.current())) {
        if (e == "word") {
          q(t);
        } else if (e == "interpolation") {
          return x(o, t, "interpolation");
        }
      } else {
        r = "error";
      }
      return "prop";
    };
    B.propBlock = function (e, t, o) {
      if (e == "}") {
        return z(o);
      } else if (e == "word") {
        r = "property";
        return "maybeprop";
      } else {
        return o.context.type;
      }
    };
    B.parens = function (e, t, r) {
      if (e == "{" || e == "}") {
        return j(e, t, r);
      } else if (e == ")") {
        return z(r);
      } else if (e == "(") {
        return x(r, t, "parens");
      } else if (e == "interpolation") {
        return x(r, t, "interpolation");
      } else {
        if (e == "word") {
          q(t);
        }
        return "parens";
      }
    };
    B.pseudo = function (e, t, o) {
      if (e == "meta") {
        return "pseudo";
      } else if (e == "word") {
        r = "variableName.constant";
        return o.context.type;
      } else {
        return K(e, t, o);
      }
    };
    B.documentTypes = function (e, t, o) {
      if (e == "word" && a.hasOwnProperty(t.current())) {
        r = "tag";
        return o.context.type;
      } else {
        return B.atBlock(e, t, o);
      }
    };
    B.atBlock = function (e, t, o) {
      if (e == "(") {
        return x(o, t, "atBlock_parens");
      }
      if (e == "}" || e == ";") {
        return j(e, t, o);
      }
      if (e == "{") {
        return z(o) && x(o, t, h ? "block" : "top");
      }
      if (e == "interpolation") {
        return x(o, t, "interpolation");
      }
      if (e == "word") {
        var i = t.current().toLowerCase();
        r = i == "only" || i == "not" || i == "and" || i == "or" ? "keyword" : n.hasOwnProperty(i) ? "attribute" : l.hasOwnProperty(i) ? "property" : s.hasOwnProperty(i) ? "keyword" : c.hasOwnProperty(i) ? "property" : d.hasOwnProperty(i) ? k ? "string.special" : "property" : g.hasOwnProperty(i) ? "atom" : m.hasOwnProperty(i) ? "keyword" : "error";
      }
      return o.context.type;
    };
    B.atComponentBlock = function (e, t, o) {
      if (e == "}") {
        return j(e, t, o);
      } else if (e == "{") {
        return z(o) && x(o, t, h ? "block" : "top", false);
      } else {
        if (e == "word") {
          r = "error";
        }
        return o.context.type;
      }
    };
    B.atBlock_parens = function (e, t, r) {
      if (e == ")") {
        return z(r);
      } else if (e == "{" || e == "}") {
        return j(e, t, r, 2);
      } else {
        return B.atBlock(e, t, r);
      }
    };
    B.restricted_atBlock_before = function (e, t, o) {
      if (e == "{") {
        return x(o, t, "restricted_atBlock");
      } else if (e == "word" && o.stateArg == "@counter-style") {
        r = "variable";
        return "restricted_atBlock_before";
      } else {
        return K(e, t, o);
      }
    };
    B.restricted_atBlock = function (e, t, o) {
      if (e == "}") {
        o.stateArg = null;
        return z(o);
      } else if (e == "word") {
        r = (o.stateArg != "@font-face" || p.hasOwnProperty(t.current().toLowerCase())) && (o.stateArg != "@counter-style" || u.hasOwnProperty(t.current().toLowerCase())) ? "property" : "error";
        return "maybeprop";
      } else {
        return "restricted_atBlock";
      }
    };
    B.keyframes = function (e, t, o) {
      if (e == "word") {
        r = "variable";
        return "keyframes";
      } else if (e == "{") {
        return x(o, t, "top");
      } else {
        return K(e, t, o);
      }
    };
    B.at = function (e, t, o) {
      if (e == ";") {
        return z(o);
      } else if (e == "{" || e == "}") {
        return j(e, t, o);
      } else {
        if (e == "word") {
          r = "tag";
        } else if (e == "hash") {
          r = "builtin";
        }
        return "at";
      }
    };
    B.interpolation = function (e, t, o) {
      if (e == "}") {
        return z(o);
      } else if (e == "{" || e == ";") {
        return j(e, t, o);
      } else {
        if (e == "word") {
          r = "variable";
        } else if (e != "variable" && e != "(" && e != ")") {
          r = "error";
        }
        return "interpolation";
      }
    };
    return {
      name: e.name,
      startState: function () {
        return {
          tokenize: null,
          state: o ? "block" : "top",
          stateArg: null,
          context: new v(o ? "block" : "top", 0, null)
        };
      },
      token: function (e, o) {
        if (!o.tokenize && e.eatSpace()) {
          return null;
        }
        var a = (o.tokenize || function (e, r) {
          var o = e.next();
          if (i[o]) {
            var a = i[o](e, r);
            if (a !== false) {
              return a;
            }
          }
          if (o == "@") {
            e.eatWhile(/[\w\\\-]/);
            t = e.current();
            return "def";
          }
          if (o == "=" || (o == "~" || o == "|") && e.eat("=")) {
            t = "compare";
            return null;
          }
          if (o == "\"" || o == "'") {
            r.tokenize = y(o);
            return r.tokenize(e, r);
          }
          if (o == "#") {
            e.eatWhile(/[\w\\\-]/);
            t = "hash";
            return "atom";
          }
          if (o == "!") {
            e.match(/^\s*\w*/);
            t = "important";
            return "keyword";
          } else if (/\d/.test(o) || o == "." && e.eat(/\d/)) {
            e.eatWhile(/[\w.%]/);
            t = "unit";
            return "number";
          } else if (o === "-") {
            if (/[\d.]/.test(e.peek())) {
              e.eatWhile(/[\w.%]/);
              t = "unit";
              return "number";
            }
            if (e.match(/^-[\w\\\-]*/)) {
              e.eatWhile(/[\w\\\-]/);
              if (e.match(/^\s*:/, false)) {
                t = "variable-definition";
                return "def";
              } else {
                t = "variable";
                return "variableName";
              }
            }
            if (e.match(/^\w+-/)) {
              t = "meta";
              return "meta";
            }
          } else if (/[,+>*\/]/.test(o)) {
            t = "select-op";
            return null;
          } else if (o == "." && e.match(/^-?[_a-z][_a-z0-9-]*/i)) {
            t = "qualifier";
            return "qualifier";
          } else if (/[:;{}\[\]\(\)]/.test(o)) {
            t = o;
            return null;
          } else if (e.match(/^[\w-.]+(?=\()/)) {
            if (/^(url(-prefix)?|domain|regexp)$/i.test(e.current())) {
              r.tokenize = w;
            }
            t = "variable";
            return "variableName.function";
          } else if (/[\w\\\-]/.test(o)) {
            e.eatWhile(/[\w\\\-]/);
            t = "word";
            return "property";
          } else {
            t = null;
            return null;
          }
        })(e, o);
        if (a && typeof a == "object") {
          t = a[1];
          a = a[0];
        }
        r = a;
        if (t != "comment") {
          o.state = B[o.state](t, e, o);
        }
        return r;
      },
      indent: function (e, t, r) {
        var o = e.context;
        var i = t && t.charAt(0);
        var a = o.indent;
        if (o.type == "prop" && (i == "}" || i == ")")) {
          o = o.prev;
        }
        if (o.prev) {
          if (i == "}" && (o.type == "block" || o.type == "top" || o.type == "interpolation" || o.type == "restricted_atBlock")) {
            a = (o = o.prev).indent;
          } else if (i == ")" && (o.type == "parens" || o.type == "atBlock_parens") || i == "{" && (o.type == "at" || o.type == "atBlock")) {
            a = Math.max(0, o.indent - r.unit);
          }
        }
        return a;
      },
      languageData: {
        indentOnInput: /^\s*\}$/,
        commentTokens: {
          line: b,
          block: {
            open: "/*",
            close: "*/"
          }
        },
        autocomplete: _
      }
    };
  }
  function i(e) {
    var t = {};
    var r = 0;
    for (; r < e.length; ++r) {
      t[e[r].toLowerCase()] = true;
    }
    return t;
  }
  var a = ["domain", "regexp", "url", "url-prefix"];
  var n = i(a);
  var l = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"];
  var s = i(l);
  var c = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover", "prefers-color-scheme", "dynamic-range", "video-dynamic-range"];
  var d = i(c);
  var p = ["landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive", "dark", "light", "standard", "high"];
  var u = i(p);
  var m = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "all", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backdrop-filter", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-position-x", "background-position-y", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "block-size", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-content", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-optical-sizing", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "isolation", "justify-content", "justify-items", "justify-self", "left", "letter-spacing", "line-break", "line-height", "line-height-step", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "place-content", "place-items", "place-self", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotate", "rotation", "rotation-point", "row-gap", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "scale", "scroll-behavior", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-type", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-skip-ink", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-orientation", "text-outline", "text-overflow", "text-rendering", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "touch-action", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "translate", "unicode-bidi", "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "paint-order", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"];
  var g = i(m);
  var h = ["accent-color", "aspect-ratio", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "content-visibility", "margin-block", "margin-block-end", "margin-block-start", "margin-inline", "margin-inline-end", "margin-inline-start", "overflow-anchor", "overscroll-behavior", "padding-block", "padding-block-end", "padding-block-start", "padding-inline", "padding-inline-end", "padding-inline-start", "scroll-snap-stop", "scrollbar-3d-light-color", "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-track-color", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "shape-inside", "zoom"];
  var b = i(h);
  var f = ["font-display", "font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"];
  var k = i(f);
  var y = i(["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"]);
  var w = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];
  var v = i(w);
  var x = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page", "avoid-region", "axis-pan", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "blur", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "brightness", "bullets", "button", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "conic-gradient", "contain", "content", "contents", "content-box", "context-menu", "continuous", "contrast", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "cubic-bezier", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "drop-shadow", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fill-box", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "grayscale", "graytext", "grid", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "hue-rotate", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "manipulation", "match", "matrix", "matrix3d", "media-play-button", "media-slider", "media-sliderthumb", "media-volume-slider", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiple_mask_images", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "pinch-zoom", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeating-conic-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturate", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "self-start", "self-end", "semi-condensed", "semi-expanded", "separate", "sepia", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "stroke-box", "sub", "subpixel-antialiased", "svg_masks", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "transform", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "unidirectional-pan", "unset", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "view-box", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small"];
  var z = i(x);
  var _ = a.concat(l).concat(c).concat(p).concat(m).concat(h).concat(w).concat(x);
  let K = {
    properties: m,
    colors: w,
    fonts: f,
    values: x,
    all: _
  };
  let P = {
    documentTypes: n,
    mediaTypes: s,
    mediaFeatures: d,
    mediaValueKeywords: u,
    propertyKeywords: g,
    nonStandardPropertyKeywords: b,
    fontProperties: k,
    counterDescriptors: y,
    colorKeywords: v,
    valueKeywords: z,
    tokenHooks: {
      "/": function (e, t) {
        return !!e.eat("*") && (t.tokenize = q, q(e, t));
      }
    }
  };
  let j = o({
    name: "css"
  });
  function q(e, t) {
    var r;
    var o = false;
    while ((r = e.next()) != null) {
      if (o && r == "/") {
        t.tokenize = null;
        break;
      }
      o = r == "*";
    }
    return ["comment", "comment"];
  }
  let B = o({
    name: "scss",
    mediaTypes: s,
    mediaFeatures: d,
    mediaValueKeywords: u,
    propertyKeywords: g,
    nonStandardPropertyKeywords: b,
    colorKeywords: v,
    valueKeywords: z,
    fontProperties: k,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function (e, t) {
        if (e.eat("/")) {
          e.skipToEnd();
          return ["comment", "comment"];
        } else if (e.eat("*")) {
          t.tokenize = q;
          return q(e, t);
        } else {
          return ["operator", "operator"];
        }
      },
      ":": function (e) {
        return !!e.match(/^\s*\{/, false) && [null, null];
      },
      $: function (e) {
        e.match(/^[\w-]+/);
        if (e.match(/^\s*:/, false)) {
          return ["def", "variable-definition"];
        } else {
          return ["variableName.special", "variable"];
        }
      },
      "#": function (e) {
        return !!e.eat("{") && [null, "interpolation"];
      }
    }
  });
  let A = o({
    name: "less",
    mediaTypes: s,
    mediaFeatures: d,
    mediaValueKeywords: u,
    propertyKeywords: g,
    nonStandardPropertyKeywords: b,
    colorKeywords: v,
    valueKeywords: z,
    fontProperties: k,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function (e, t) {
        if (e.eat("/")) {
          e.skipToEnd();
          return ["comment", "comment"];
        } else if (e.eat("*")) {
          t.tokenize = q;
          return q(e, t);
        } else {
          return ["operator", "operator"];
        }
      },
      "@": function (e) {
        if (e.eat("{")) {
          return [null, "interpolation"];
        } else {
          return !e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, false) && ((e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, false)) ? ["def", "variable-definition"] : ["variableName", "variable"]);
        }
      },
      "&": function () {
        return ["atom", "atom"];
      }
    }
  });
  let O = o({
    name: "gss",
    documentTypes: n,
    mediaTypes: s,
    mediaFeatures: d,
    propertyKeywords: g,
    nonStandardPropertyKeywords: b,
    fontProperties: k,
    counterDescriptors: y,
    colorKeywords: v,
    valueKeywords: z,
    supportsAtComponent: true,
    tokenHooks: {
      "/": function (e, t) {
        return !!e.eat("*") && (t.tokenize = q, q(e, t));
      }
    }
  });
  require.r(exports);
  require.d(exports, {
    css: function () {
      return j;
    },
    gss: function () {
      return O;
    },
    keywords: function () {
      return K;
    },
    less: function () {
      return A;
    },
    mkCSS: function () {
      return o;
    },
    sCSS: function () {
      return B;
    }
  });
}