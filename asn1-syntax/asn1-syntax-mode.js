// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 62026.6e22b913.js
         * chunkId: 62026
         * moduleId: 203418
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var t = {};
    var n = e.split(" ");
    var r = 0;
    for (; r < n.length; ++r) {
      t[n[r]] = true;
    }
    return t;
  }
  let i = {
    keywords: r("DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS"),
    cmipVerbs: r("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"),
    compareTypes: r("OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION"),
    status: r("current deprecated mandatory obsolete"),
    tags: r("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL"),
    storage: r("BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminString TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64"),
    modifier: r("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED"),
    accessTypes: r("not-accessible accessible-for-notify read-only read-create read-write"),
    multiLineStrings: true
  };
  function E(e) {
    var t;
    var n = e.keywords || i.keywords;
    var r = e.cmipVerbs || i.cmipVerbs;
    var E = e.compareTypes || i.compareTypes;
    var s = e.status || i.status;
    var a = e.tags || i.tags;
    var o = e.storage || i.storage;
    var I = e.modifier || i.modifier;
    var T = e.accessTypes || i.accessTypes;
    var S = e.multiLineStrings || i.multiLineStrings;
    var u = e.indentStatements !== false;
    var A = /[\|\^]/;
    function l(e, t, n, r, i) {
      this.indented = e;
      this.column = t;
      this.type = n;
      this.align = r;
      this.prev = i;
    }
    function N(e, t, n) {
      var r = e.indented;
      if (e.context && e.context.type == "statement") {
        r = e.context.indented;
      }
      return e.context = new l(r, t, n, null, e.context);
    }
    function O(e) {
      var t = e.context.type;
      if (t == ")" || t == "]" || t == "}") {
        e.indented = e.context.indented;
      }
      return e.context = e.context.prev;
    }
    return {
      name: "asn1",
      startState: function () {
        return {
          tokenize: null,
          context: new l(-2, 0, "top", false),
          indented: 0,
          startOfLine: true
        };
      },
      token: function (e, i) {
        var l = i.context;
        if (e.sol()) {
          if (l.align == null) {
            l.align = false;
          }
          i.indented = e.indentation();
          i.startOfLine = true;
        }
        if (e.eatSpace()) {
          return null;
        }
        t = null;
        var p = (i.tokenize || function (e, i) {
          var u;
          var l = e.next();
          if (l == "\"" || l == "'") {
            ;
            u = l;
            i.tokenize = function (e, t) {
              var n;
              var r = false;
              var i = false;
              while ((n = e.next()) != null) {
                if (n == u && !r) {
                  var E = e.peek();
                  if (E && ((E = E.toLowerCase()) == "b" || E == "h" || E == "o")) {
                    e.next();
                  }
                  i = true;
                  break;
                }
                r = !r && n == "\\";
              }
              if (i || !r && !S) {
                t.tokenize = null;
              }
              return "string";
            };
            return i.tokenize(e, i);
          }
          if (/[\[\]\(\){}:=,;]/.test(l)) {
            t = l;
            return "punctuation";
          }
          if (l == "-" && e.eat("-")) {
            e.skipToEnd();
            return "comment";
          }
          if (/\d/.test(l)) {
            e.eatWhile(/[\w\.]/);
            return "number";
          }
          if (A.test(l)) {
            e.eatWhile(A);
            return "operator";
          }
          e.eatWhile(/[\w\-]/);
          var N = e.current();
          if (n.propertyIsEnumerable(N)) {
            return "keyword";
          } else if (r.propertyIsEnumerable(N)) {
            return "variableName";
          } else if (E.propertyIsEnumerable(N)) {
            return "atom";
          } else if (s.propertyIsEnumerable(N)) {
            return "comment";
          } else if (a.propertyIsEnumerable(N)) {
            return "typeName";
          } else if (o.propertyIsEnumerable(N) || I.propertyIsEnumerable(N) || T.propertyIsEnumerable(N)) {
            return "modifier";
          } else {
            return "variableName";
          }
        })(e, i);
        if (p == "comment") {
          return p;
        }
        if (l.align == null) {
          l.align = true;
        }
        if ((t == ";" || t == ":" || t == ",") && l.type == "statement") {
          O(i);
        } else if (t == "{") {
          N(i, e.column(), "}");
        } else if (t == "[") {
          N(i, e.column(), "]");
        } else if (t == "(") {
          N(i, e.column(), ")");
        } else if (t == "}") {
          while (l.type == "statement") {
            l = O(i);
          }
          for (l.type == "}" && (l = O(i)); l.type == "statement";) {
            l = O(i);
          }
        } else if (t == l.type) {
          O(i);
        } else if (u && ((l.type == "}" || l.type == "top") && t != ";" || l.type == "statement" && t == "newstatement")) {
          N(i, e.column(), "statement");
        }
        i.startOfLine = false;
        return p;
      },
      languageData: {
        indentOnInput: /^\s*[{}]$/,
        commentTokens: {
          line: "--"
        }
      }
    };
  }
  require.r(exports);
  require.d(exports, {
    asn1: function () {
      return E;
    }
  });
}