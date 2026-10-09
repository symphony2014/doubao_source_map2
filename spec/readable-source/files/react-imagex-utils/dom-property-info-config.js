// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'dompurifyAttributeMappings'
// - Resolved require(625573) to 'dompurify-attribute-mappings'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 357408
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    var n = 0;
    var r = Array(t);
    for (; n < t; n++) {
      r[n] = e[n];
    }
    return r;
  }
  function i(e, t, n, r, i, o, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4;
    this.attributeName = r;
    this.attributeNamespace = i;
    this.mustUseProperty = n;
    this.propertyName = e;
    this.type = t;
    this.sanitizeURL = o;
    this.removeEmptyString = a;
  }
  var o = {};
  ["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"].forEach(function (e) {
    o[e] = new i(e, 0, false, e, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var n;
      var r;
      var i = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (i != null) {
        var o = [];
        var a = true;
        var l = false;
        try {
          for (i = i.call(e); !(a = (n = i.next()).done) && (o.push(n.value), o.length !== t); a = true);
        } catch (e) {
          l = true;
          r = e;
        } finally {
          try {
            if (!a && i.return != null) {
              i.return();
            }
          } finally {
            if (l) {
              throw r;
            }
          }
        }
        return o;
      }
    }(e, 2) || function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return r(e, 2);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return r(e, t);
        }
      }
    }(e, 2) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
    var n = t[0];
    var a = t[1];
    o[n] = new i(n, 1, false, a, null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    o[e] = new i(e, 2, false, e.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    o[e] = new i(e, 2, false, e, null, false, false);
  });
  ["allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "disableRemotePlayback", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope"].forEach(function (e) {
    o[e] = new i(e, 3, false, e.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    o[e] = new i(e, 3, true, e, null, false, false);
  });
  ["capture", "download"].forEach(function (e) {
    o[e] = new i(e, 4, false, e, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    o[e] = new i(e, 6, false, e, null, false, false);
  });
  ["rowSpan", "start"].forEach(function (e) {
    o[e] = new i(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var a = /[\-\:]([a-z])/g;
  function l(e) {
    return e[1].toUpperCase();
  }
  ["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach(function (e) {
    var t = e.replace(a, l);
    o[t] = new i(t, 1, false, e, null, false, false);
  });
  ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach(function (e) {
    var t = e.replace(a, l);
    o[t] = new i(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(a, l);
    o[t] = new i(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    o[e] = new i(e, 1, false, e.toLowerCase(), null, false, false);
  });
  o.xlinkHref = new i("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function (e) {
    o[e] = new i(e, 1, false, e.toLowerCase(), null, true, true);
  });
  var dompurifyAttributeMappings = require("dompurify-attribute-mappings") /*id: 625573*/;
  var c = dompurifyAttributeMappings.CAMELCASE;
  var u = dompurifyAttributeMappings.SAME;
  var p = dompurifyAttributeMappings.possibleStandardNames;
  var h = RegExp.prototype.test.bind(RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"));
  var d = Object.keys(p).reduce(function (e, t) {
    var n = p[t];
    if (n === u) {
      e[t] = t;
    } else if (n === c) {
      e[t.toLowerCase()] = t;
    } else {
      e[t] = n;
    }
    return e;
  }, {});
  exports.BOOLEAN = 3;
  exports.BOOLEANISH_STRING = 2;
  exports.NUMERIC = 5;
  exports.OVERLOADED_BOOLEAN = 4;
  exports.POSITIVE_NUMERIC = 6;
  exports.RESERVED = 0;
  exports.STRING = 1;
  exports.getPropertyInfo = function (e) {
    if (o.hasOwnProperty(e)) {
      return o[e];
    } else {
      return null;
    }
  };
  exports.isCustomAttribute = h;
  exports.possibleStandardNames = d;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}