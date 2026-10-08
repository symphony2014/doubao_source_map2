// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63962.683a365f.js
         * chunkId: 63962
         * moduleId: 884124
         */
module.exports = function (module, exports, require) {
  function n(e) {
    return RegExp("^((" + e.join(")|(") + "))\\b");
  }
  var a = ["Clamp", "Constructor", "EnforceRange", "Exposed", "ImplicitThis", "Global", "PrimaryGlobal", "LegacyArrayClass", "LegacyUnenumerableNamedProperties", "LenientThis", "NamedConstructor", "NewObject", "NoInterfaceObject", "OverrideBuiltins", "PutForwards", "Replaceable", "SameObject", "TreatNonObjectAsNull", "TreatNullAs", "EmptyString", "Unforgeable", "Unscopeable"];
  var i = n(a);
  var c = ["unsigned", "short", "long", "unrestricted", "float", "double", "boolean", "byte", "octet", "Promise", "ArrayBuffer", "DataView", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint16Array", "Uint32Array", "Uint8ClampedArray", "Float32Array", "Float64Array", "ByteString", "DOMString", "USVString", "sequence", "object", "RegExp", "Error", "DOMException", "FrozenArray", "any", "void"];
  var o = n(c);
  var l = ["attribute", "callback", "const", "deleter", "dictionary", "enum", "getter", "implements", "inherit", "interface", "iterable", "legacycaller", "maplike", "partial", "required", "serializer", "setlike", "setter", "static", "stringifier", "typedef", "optional", "readonly", "or"];
  var m = n(l);
  var u = ["true", "false", "Infinity", "NaN", "null"];
  var s = n(u);
  var f = n(["callback", "dictionary", "enum", "interface"]);
  var d = n(["typedef"]);
  var y = /^[:<=>?]/;
  var b = /^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/;
  var p = /^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/;
  var A = /^_?[A-Za-z][0-9A-Z_a-z-]*/;
  var h = /^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/;
  var D = /^"[^"]*"/;
  var g = /^\/\*.*?\*\//;
  var _ = /^\/\*.*/;
  var E = /^.*?\*\//;
  let k = {
    name: "webidl",
    startState: function () {
      return {
        inComment: false,
        lastToken: "",
        startDef: false,
        endDef: false
      };
    },
    token: function (e, t) {
      var r = function (e, t) {
        if (e.eatSpace()) {
          return null;
        }
        if (t.inComment) {
          if (e.match(E)) {
            t.inComment = false;
          } else {
            e.skipToEnd();
          }
          return "comment";
        }
        if (e.match("//")) {
          e.skipToEnd();
          return "comment";
        }
        if (e.match(g)) {
          return "comment";
        }
        if (e.match(_)) {
          t.inComment = true;
          return "comment";
        }
        if (e.match(/^-?[0-9\.]/, false) && (e.match(b) || e.match(p))) {
          return "number";
        }
        if (e.match(D)) {
          return "string";
        }
        if (t.startDef && e.match(A)) {
          return "def";
        }
        if (t.endDef && e.match(h)) {
          t.endDef = false;
          return "def";
        }
        if (e.match(m)) {
          return "keyword";
        }
        if (e.match(o)) {
          var r = t.lastToken;
          var n = (e.match(/^\s*(.+?)\b/, false) || [])[1];
          if (r === ":" || r === "implements" || n === "implements" || n === "=") {
            return "builtin";
          } else {
            return "type";
          }
        }
        if (e.match(i)) {
          return "builtin";
        } else if (e.match(s)) {
          return "atom";
        } else if (e.match(A)) {
          return "variable";
        } else if (e.match(y)) {
          return "operator";
        } else {
          e.next();
          return null;
        }
      }(e, t);
      if (r) {
        var n = e.current();
        t.lastToken = n;
        if (r === "keyword") {
          t.startDef = f.test(n);
          t.endDef = t.endDef || d.test(n);
        } else {
          t.startDef = false;
        }
      }
      return r;
    },
    languageData: {
      autocomplete: a.concat(c).concat(l).concat(u)
    }
  };
  require.r(exports);
  require.d(exports, {
    webIDL: function () {
      return k;
    }
  });
}