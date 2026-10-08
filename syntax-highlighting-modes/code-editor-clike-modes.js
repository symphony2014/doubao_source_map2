// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'cLanguageMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55234.5af72080.js
         * chunkId: 55234
         * moduleId: 594345
         */
module.exports = function (module, exports, require) {
  function r(e, t, n, r, a, o) {
    this.indented = e;
    this.column = t;
    this.type = n;
    this.info = r;
    this.align = a;
    this.prev = o;
  }
  function a(e, t, n, a) {
    var o = e.indented;
    if (e.context && e.context.type == "statement" && n != "statement") {
      o = e.context.indented;
    }
    return e.context = new r(o, t, n, a, null, e.context);
  }
  function o(e) {
    var t = e.context.type;
    if (t == ")" || t == "]" || t == "}") {
      e.indented = e.context.indented;
    }
    return e.context = e.context.prev;
  }
  function i(e, t, n) {
    if (t.prevToken == "variable" || t.prevToken == "type" || /\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0, n)) || t.typeAtEndOfLine && e.column() == e.indentation()) {
      return true;
    }
  }
  function l(e) {
    while (true) {
      if (!e || e.type == "top") {
        return true;
      }
      if (e.type == "}" && e.prev.info != "namespace") {
        return false;
      }
      e = e.prev;
    }
  }
  function s(e) {
    var t;
    var n;
    var s = e.statementIndentUnit;
    var c = e.dontAlignCalls;
    var f = e.keywords || {};
    var d = e.types || {};
    var p = e.builtin || {};
    var m = e.blockKeywords || {};
    var h = e.defKeywords || {};
    var y = e.atoms || {};
    var g = e.hooks || {};
    var k = e.multiLineStrings;
    var b = e.indentStatements !== false;
    var _ = e.indentSwitch !== false;
    var v = e.namespaceSeparator;
    var w = e.isPunctuationChar || /[\[\]{}\(\),;\:\.]/;
    var x = e.numberStart || /[\d\.]/;
    var S = e.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i;
    var T = e.isOperatorChar || /[+\-*&%=<>!?|\/]/;
    var N = e.isIdentifierChar || /[\w\$_\xa1-\uffff]/;
    var D = e.isReservedIdentifier || false;
    function C(e, r) {
      var a;
      var o = e.next();
      if (g[o]) {
        var i = g[o](e, r);
        if (i !== false) {
          return i;
        }
      }
      if (o == "\"" || o == "'") {
        ;
        a = o;
        r.tokenize = function (e, t) {
          var n;
          var r = false;
          var o = false;
          while ((n = e.next()) != null) {
            if (n == a && !r) {
              o = true;
              break;
            }
            r = !r && n == "\\";
          }
          if (o || !r && !k) {
            t.tokenize = null;
          }
          return "string";
        };
        return r.tokenize(e, r);
      }
      if (x.test(o)) {
        e.backUp(1);
        if (e.match(S)) {
          return "number";
        }
        e.next();
      }
      if (w.test(o)) {
        t = o;
        return null;
      }
      if (o == "/") {
        if (e.eat("*")) {
          r.tokenize = L;
          return L(e, r);
        }
        if (e.eat("/")) {
          e.skipToEnd();
          return "comment";
        }
      }
      if (T.test(o)) {
        while (!e.match(/^\/[\/*]/, false) && e.eat(T));
        return "operator";
      }
      e.eatWhile(N);
      if (v) {
        while (e.match(v)) {
          e.eatWhile(N);
        }
      }
      var l = e.current();
      if (u(f, l)) {
        if (u(m, l)) {
          t = "newstatement";
        }
        if (u(h, l)) {
          n = true;
        }
        return "keyword";
      } else if (u(d, l)) {
        return "type";
      } else if (u(p, l) || D && D(l)) {
        if (u(m, l)) {
          t = "newstatement";
        }
        return "builtin";
      } else if (u(y, l)) {
        return "atom";
      } else {
        return "variable";
      }
    }
    function L(e, t) {
      var n;
      var r = false;
      while (n = e.next()) {
        if (n == "/" && r) {
          t.tokenize = null;
          break;
        }
        r = n == "*";
      }
      return "comment";
    }
    function I(t, n) {
      if (e.typeFirstDefinitions && t.eol() && l(n.context)) {
        n.typeAtEndOfLine = i(t, n, t.pos);
      }
    }
    return {
      name: e.name,
      startState: function (e) {
        return {
          tokenize: null,
          context: new r(-e, 0, "top", null, false),
          indented: 0,
          startOfLine: true,
          prevToken: null
        };
      },
      token: function (r, s) {
        var c = s.context;
        if (r.sol()) {
          if (c.align == null) {
            c.align = false;
          }
          s.indented = r.indentation();
          s.startOfLine = true;
        }
        if (r.eatSpace()) {
          I(r, s);
          return null;
        }
        t = n = null;
        var u = (s.tokenize || C)(r, s);
        if (u == "comment" || u == "meta") {
          return u;
        }
        if (c.align == null) {
          c.align = true;
        }
        if (t == ";" || t == ":" || t == "," && r.match(/^\s*(?:\/\/.*)?$/, false)) {
          while (s.context.type == "statement") {
            o(s);
          }
        } else if (t == "{") {
          a(s, r.column(), "}");
        } else if (t == "[") {
          a(s, r.column(), "]");
        } else if (t == "(") {
          a(s, r.column(), ")");
        } else if (t == "}") {
          while (c.type == "statement") {
            c = o(s);
          }
          for (c.type == "}" && (c = o(s)); c.type == "statement";) {
            c = o(s);
          }
        } else if (t == c.type) {
          o(s);
        } else if (b && ((c.type == "}" || c.type == "top") && t != ";" || c.type == "statement" && t == "newstatement")) {
          a(s, r.column(), "statement", r.current());
        }
        if (u == "variable" && (s.prevToken == "def" || e.typeFirstDefinitions && i(r, s, r.start) && l(s.context) && r.match(/^\s*\(/, false))) {
          u = "def";
        }
        if (g.token) {
          var f = g.token(r, s, u);
          if (f !== undefined) {
            u = f;
          }
        }
        if (u == "def" && e.styleDefs === false) {
          u = "variable";
        }
        s.startOfLine = false;
        s.prevToken = n ? "def" : u || t;
        I(r, s);
        return u;
      },
      indent: function (t, n, r) {
        if (t.tokenize != C && t.tokenize != null || t.typeAtEndOfLine && l(t.context)) {
          return null;
        }
        var a = t.context;
        var o = n && n.charAt(0);
        var i = o == a.type;
        if (a.type == "statement" && o == "}") {
          a = a.prev;
        }
        if (e.dontIndentStatements) {
          while (a.type == "statement" && e.dontIndentStatements.test(a.info)) {
            a = a.prev;
          }
        }
        if (g.indent) {
          var u = g.indent(t, a, n, r.unit);
          if (typeof u == "number") {
            return u;
          }
        }
        var f = a.prev && a.prev.info == "switch";
        if (e.allmanIndentation && /[{(]/.test(o)) {
          while (a.type != "top" && a.type != "}") {
            a = a.prev;
          }
          return a.indented;
        }
        if (a.type == "statement") {
          return a.indented + (o == "{" ? 0 : s || r.unit);
        } else if (a.align && (!c || a.type != ")")) {
          return a.column + +!i;
        } else if (a.type != ")" || i) {
          return a.indented + (i ? 0 : r.unit) + (i || !f || /^(?:case|default)\b/.test(n) ? 0 : r.unit);
        } else {
          return a.indented + (s || r.unit);
        }
      },
      languageData: {
        indentOnInput: _ ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/,
        commentTokens: {
          line: "//",
          block: {
            open: "/*",
            close: "*/"
          }
        },
        autocomplete: Object.keys(f).concat(Object.keys(d)).concat(Object.keys(p)).concat(Object.keys(y)),
        ...e.languageData
      }
    };
  }
  function c(e) {
    var t = {};
    var n = e.split(" ");
    var r = 0;
    for (; r < n.length; ++r) {
      t[n[r]] = true;
    }
    return t;
  }
  function u(e, t) {
    if (typeof e == "function") {
      return e(t);
    } else {
      return e.propertyIsEnumerable(t);
    }
  }
  var f = "auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran";
  var d = "alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq";
  var p = "bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available";
  var m = "FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT";
  var h = c("int long char short double float unsigned signed void bool");
  var y = c("SEL instancetype id Class Protocol BOOL");
  function g(e) {
    return u(h, e) || /.+_t$/.test(e);
  }
  function k(e) {
    return g(e) || u(y, e);
  }
  var b = "case do else for if switch while struct enum union";
  var _ = "struct enum union";
  function v(e, t) {
    if (!t.startOfLine) {
      return false;
    }
    var n;
    var r = null;
    while (n = e.peek()) {
      if (n == "\\" && e.match(/^.$/)) {
        r = v;
        break;
      }
      if (n == "/" && e.match(/^\/[\/\*]/, false)) {
        break;
      }
      e.next();
    }
    t.tokenize = r;
    return "meta";
  }
  function w(e, t) {
    return t.prevToken == "type" && "type";
  }
  function x(e) {
    return !!e && !(e.length < 2) && e[0] == "_" && (e[1] == "_" || e[1] !== e[1].toLowerCase());
  }
  function S(e) {
    e.eatWhile(/[\w\.']/);
    return "number";
  }
  function T(e, t) {
    e.backUp(1);
    if (e.match(/^(?:R|u8R|uR|UR|LR)/)) {
      var n = e.match(/^"([^\s\\()]{0,16})\(/);
      return !!n && (t.cpp11RawStringDelim = n[1], t.tokenize = C, C(e, t));
    }
    if (e.match(/^(?:u8|u|U|L)/)) {
      return !!e.match(/^["']/, false) && "string";
    } else {
      e.next();
      return false;
    }
  }
  function N(e) {
    var t = /(\w+)::~?(\w+)$/.exec(e);
    return t && t[1] == t[2];
  }
  function D(e, t) {
    for (var n; (n = e.next()) != null;) {
      if (n == "\"" && !e.eat("\"")) {
        t.tokenize = null;
        break;
      }
    }
    return "string";
  }
  function C(e, t) {
    var n = t.cpp11RawStringDelim.replace(/[^\w\s]/g, "\\$&");
    if (e.match(RegExp(".*?\\)" + n + "\""))) {
      t.tokenize = null;
    } else {
      e.skipToEnd();
    }
    return "string";
  }
  let L = s({
    name: "c",
    keywords: c(f),
    types: g,
    blockKeywords: c(b),
    defKeywords: c(_),
    typeFirstDefinitions: true,
    atoms: c("NULL true false"),
    isReservedIdentifier: x,
    hooks: {
      "#": v,
      "*": w
    }
  });
  let I = s({
    name: "cpp",
    keywords: c(f + " " + d),
    types: g,
    blockKeywords: c(b + " class try catch"),
    defKeywords: c(_ + " class namespace"),
    typeFirstDefinitions: true,
    atoms: c("true false NULL nullptr"),
    dontIndentStatements: /^template$/,
    isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
    isReservedIdentifier: x,
    hooks: {
      "#": v,
      "*": w,
      u: T,
      U: T,
      L: T,
      R: T,
      0: S,
      1: S,
      2: S,
      3: S,
      4: S,
      5: S,
      6: S,
      7: S,
      8: S,
      9: S,
      token: function (e, t, n) {
        if (n == "variable" && e.peek() == "(" && (t.prevToken == ";" || t.prevToken == null || t.prevToken == "}") && N(e.current())) {
          return "def";
        }
      }
    },
    namespaceSeparator: "::"
  });
  let z = s({
    name: "java",
    keywords: c("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),
    types: c("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),
    blockKeywords: c("catch class do else finally for if switch try while"),
    defKeywords: c("class interface enum @interface"),
    typeFirstDefinitions: true,
    atoms: c("true false null"),
    number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
    hooks: {
      "@": function (e) {
        return !e.match("interface", false) && (e.eatWhile(/[\w\$_]/), "meta");
      },
      "\"": function (e, t) {
        return !!e.match(/""$/) && (t.tokenize = M, t.tokenize(e, t));
      }
    }
  });
  let E = s({
    name: "csharp",
    keywords: c("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),
    types: c("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),
    blockKeywords: c("catch class do else finally for foreach if struct switch try while"),
    defKeywords: c("class interface namespace record struct var"),
    typeFirstDefinitions: true,
    atoms: c("true false null"),
    hooks: {
      "@": function (e, t) {
        if (e.eat("\"")) {
          t.tokenize = D;
          return D(e, t);
        } else {
          e.eatWhile(/[\w\$_]/);
          return "meta";
        }
      }
    }
  });
  function M(e, t) {
    var n = false;
    for (; !e.eol();) {
      if (!n && e.match("\"\"\"")) {
        t.tokenize = null;
        break;
      }
      n = e.next() == "\\" && !n;
    }
    return "string";
  }
  function O(e) {
    return function (t, n) {
      for (var r; r = t.next();) {
        if (r == "*" && t.eat("/")) {
          if (e != 1) {
            n.tokenize = O(e - 1);
            return n.tokenize(t, n);
          }
          n.tokenize = null;
          break;
        }
        if (r == "/" && t.eat("*")) {
          n.tokenize = O(e + 1);
          return n.tokenize(t, n);
        }
      }
      return "comment";
    };
  }
  let F = s({
    name: "scala",
    keywords: c("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),
    types: c("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),
    multiLineStrings: true,
    blockKeywords: c("catch class enum do else finally for forSome if match switch try while"),
    defKeywords: c("class enum def object package trait type val var"),
    atoms: c("true false null"),
    indentStatements: false,
    indentSwitch: false,
    isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
    hooks: {
      "@": function (e) {
        e.eatWhile(/[\w\$_]/);
        return "meta";
      },
      "\"": function (e, t) {
        return !!e.match("\"\"") && (t.tokenize = M, t.tokenize(e, t));
      },
      "'": function (e) {
        if (e.match(/^(\\[^'\s]+|[^\\'])'/)) {
          return "character";
        } else {
          e.eatWhile(/[\w\$_\xa1-\uffff]/);
          return "atom";
        }
      },
      "=": function (e, t) {
        var n = t.context;
        return n.type == "}" && !!n.align && !!e.eat(">") && (t.context = new r(n.indented, n.column, n.type, n.info, null, n.prev), "operator");
      },
      "/": function (e, t) {
        return !!e.eat("*") && (t.tokenize = O(1), t.tokenize(e, t));
      }
    },
    languageData: {
      closeBrackets: {
        brackets: ["(", "[", "{", "'", "\"", "\"\"\""]
      }
    }
  });
  let P = s({
    name: "kotlin",
    keywords: c("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam"),
    types: c("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),
    intendSwitch: false,
    indentStatements: false,
    multiLineStrings: true,
    number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
    blockKeywords: c("catch class do else finally for if where try while enum"),
    defKeywords: c("class val var object interface fun"),
    atoms: c("true false null this"),
    hooks: {
      "@": function (e) {
        e.eatWhile(/[\w\$_]/);
        return "meta";
      },
      "*": function (e, t) {
        if (t.prevToken == ".") {
          return "variable";
        } else {
          return "operator";
        }
      },
      "\"": function (e, t) {
        var n;
        n = e.match("\"\"");
        t.tokenize = function (e, t) {
          var r;
          var a = false;
          var o = false;
          while (!e.eol()) {
            if (!n && !a && e.match("\"") || n && e.match("\"\"\"")) {
              o = true;
              break;
            }
            r = e.next();
            if (!a && r == "$" && e.match("{")) {
              e.skipTo("}");
            }
            a = !a && r == "\\" && !n;
          }
          if (o || !n) {
            t.tokenize = null;
          }
          return "string";
        };
        return t.tokenize(e, t);
      },
      "/": function (e, t) {
        return !!e.eat("*") && (t.tokenize = O(1), t.tokenize(e, t));
      },
      indent: function (e, t, n, r) {
        var a = n && n.charAt(0);
        if ((e.prevToken == "}" || e.prevToken == ")") && n == "") {
          return e.indented;
        } else if (e.prevToken == "operator" && n != "}" && e.context.type != "}" || e.prevToken == "variable" && a == "." || (e.prevToken == "}" || e.prevToken == ")") && a == ".") {
          return r * 2 + t.indented;
        } else if (t.align && t.type == "}") {
          return t.indented + (e.context.type == (n || "").charAt(0) ? 0 : r);
        } else {
          return undefined;
        }
      }
    },
    languageData: {
      closeBrackets: {
        brackets: ["(", "[", "{", "'", "\"", "\"\"\""]
      }
    }
  });
  let R = s({
    name: "shader",
    keywords: c("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),
    types: c("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),
    blockKeywords: c("for while do if else struct"),
    builtin: c("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),
    atoms: c("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),
    indentSwitch: false,
    hooks: {
      "#": v
    }
  });
  let A = s({
    name: "nesc",
    keywords: c(f + " as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),
    types: g,
    blockKeywords: c(b),
    atoms: c("null true false"),
    hooks: {
      "#": v
    }
  });
  let j = s({
    name: "objectivec",
    keywords: c(f + " " + p),
    types: k,
    builtin: c(m),
    blockKeywords: c(b + " @synthesize @try @catch @finally @autoreleasepool @synchronized"),
    defKeywords: c(_ + " @interface @implementation @protocol @class"),
    dontIndentStatements: /^@.*$/,
    typeFirstDefinitions: true,
    atoms: c("YES NO NULL Nil nil true false nullptr"),
    isReservedIdentifier: x,
    hooks: {
      "#": v,
      "*": w
    }
  });
  let U = s({
    name: "objectivecpp",
    keywords: c(f + " " + p + " " + d),
    types: k,
    builtin: c(m),
    blockKeywords: c(b + " @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),
    defKeywords: c(_ + " @interface @implementation @protocol @class class namespace"),
    dontIndentStatements: /^@.*$|^template$/,
    typeFirstDefinitions: true,
    atoms: c("YES NO NULL Nil nil true false nullptr"),
    isReservedIdentifier: x,
    hooks: {
      "#": v,
      "*": w,
      u: T,
      U: T,
      L: T,
      R: T,
      0: S,
      1: S,
      2: S,
      3: S,
      4: S,
      5: S,
      6: S,
      7: S,
      8: S,
      9: S,
      token: function (e, t, n) {
        if (n == "variable" && e.peek() == "(" && (t.prevToken == ";" || t.prevToken == null || t.prevToken == "}") && N(e.current())) {
          return "def";
        }
      }
    },
    namespaceSeparator: "::"
  });
  let B = s({
    name: "squirrel",
    keywords: c("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),
    types: g,
    blockKeywords: c("case catch class else for foreach if switch try while"),
    defKeywords: c("function local class"),
    typeFirstDefinitions: true,
    atoms: c("true false null"),
    hooks: {
      "#": v
    }
  });
  var $ = null;
  let K = s({
    name: "ceylon",
    keywords: c("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),
    types: function (e) {
      var t = e.charAt(0);
      return t === t.toUpperCase() && t !== t.toLowerCase();
    },
    blockKeywords: c("case catch class dynamic else finally for function if interface module new object switch try while"),
    defKeywords: c("class dynamic function interface module object package value"),
    builtin: c("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),
    isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
    isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
    numberStart: /[\d#$]/,
    number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
    multiLineStrings: true,
    typeFirstDefinitions: true,
    atoms: c("true false null larger smaller equal empty finished"),
    indentSwitch: false,
    styleDefs: false,
    hooks: {
      "@": function (e) {
        e.eatWhile(/[\w\$_]/);
        return "meta";
      },
      "\"": function (e, t) {
        t.tokenize = function e(t) {
          return function (n, r) {
            var a;
            var o = false;
            var i = false;
            while (!n.eol()) {
              if (!o && n.match("\"") && (t == "single" || n.match("\"\""))) {
                i = true;
                break;
              }
              if (!o && n.match("``")) {
                $ = e(t);
                i = true;
                break;
              }
              a = n.next();
              o = t == "single" && !o && a == "\\";
            }
            if (i) {
              r.tokenize = null;
            }
            return "string";
          };
        }(e.match("\"\"") ? "triple" : "single");
        return t.tokenize(e, t);
      },
      "`": function (e, t) {
        return !!$ && !!e.match("`") && (t.tokenize = $, $ = null, t.tokenize(e, t));
      },
      "'": function (e) {
        if (e.match(/^(\\[^'\s]+|[^\\'])'/)) {
          return "string.special";
        } else {
          e.eatWhile(/[\w\$_\xa1-\uffff]/);
          return "atom";
        }
      },
      token: function (e, t, n) {
        if ((n == "variable" || n == "type") && t.prevToken == ".") {
          return "variableName.special";
        }
      }
    },
    languageData: {
      closeBrackets: {
        brackets: ["(", "[", "{", "'", "\"", "\"\"\""]
      }
    }
  });
  function q(e) {
    return (e.interpolationStack ||= []).pop();
  }
  function V(e, t, n, r) {
    var a = false;
    if (t.eat(e)) {
      if (!t.eat(e)) {
        return "string";
      }
      a = true;
    }
    function o(t, n) {
      var o = false;
      for (; !t.eol();) {
        if (!r && !o && t.peek() == "$") {
          (function (e) {
            (e.interpolationStack ||= []).push(e.tokenize);
          })(n);
          n.tokenize = W;
          break;
        }
        var i = t.next();
        if (i == e && !o && (!a || t.match(e + e))) {
          n.tokenize = null;
          break;
        }
        o = !r && !o && i == "\\";
      }
      return "string";
    }
    n.tokenize = o;
    return o(t, n);
  }
  function W(e, t) {
    e.eat("$");
    if (e.eat("{")) {
      t.tokenize = null;
    } else {
      t.tokenize = G;
    }
    return null;
  }
  function G(e, t) {
    e.eatWhile(/[\w_]/);
    t.tokenize = q(t);
    return "variable";
  }
  let Z = s({
    name: "dart",
    keywords: c("this super static final const abstract class extends external factory implements mixin get native set typedef with enum throw rethrow assert break case continue default in return new deferred async await covariant try catch finally do else for if switch while import library export part of show hide is as extension on yield late required sealed base interface when inline"),
    blockKeywords: c("try catch finally do else for if switch while"),
    builtin: c("void bool num int double dynamic var String Null Never"),
    atoms: c("true false null"),
    number: /^(?:0x[a-f\d_]+|(?:[\d_]+\.?[\d_]*|\.[\d_]+)(?:e[-+]?[\d_]+)?)/i,
    hooks: {
      "@": function (e) {
        e.eatWhile(/[\w\$_\.]/);
        return "meta";
      },
      "'": function (e, t) {
        return V("'", e, t, false);
      },
      "\"": function (e, t) {
        return V("\"", e, t, false);
      },
      r: function (e, t) {
        var n = e.peek();
        return (n == "'" || n == "\"") && V(e.next(), e, t, true);
      },
      "}": function (e, t) {
        return (t.interpolationStack ? t.interpolationStack.length : 0) > 0 && (t.tokenize = q(t), null);
      },
      "/": function (e, t) {
        return !!e.eat("*") && (t.tokenize = O(1), t.tokenize(e, t));
      },
      token: function (e, t, n) {
        if (n == "variable" && RegExp("^[_$]*[A-Z][a-zA-Z0-9_$]*$", "g").test(e.current())) {
          return "type";
        }
      }
    }
  });
  require.r(exports);
  require.d(exports, {
    cLanguageMode: function () {
      return L;
    },
    ceylon: function () {
      return K;
    },
    clike: function () {
      return s;
    },
    cpp: function () {
      return I;
    },
    csharp: function () {
      return E;
    },
    dart: function () {
      return Z;
    },
    java: function () {
      return z;
    },
    kotlin: function () {
      return P;
    },
    nesC: function () {
      return A;
    },
    objectiveC: function () {
      return j;
    },
    objectiveCpp: function () {
      return U;
    },
    scala: function () {
      return F;
    },
    shader: function () {
      return R;
    },
    squirrel: function () {
      return B;
    }
  });
}