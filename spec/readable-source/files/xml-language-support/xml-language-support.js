// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'lrParserDefinition'
// - Resolved require(556971) to 'lr-parser-definition'
// - Renamed variable 'n' to 'syntaxHighlightTags'
// - Resolved require(852622) to 'syntax-highlight-tags'
// - Renamed variable 'k' to 'codemirrorLanguageSupport'
// - Resolved require(976653) to 'codemirror-language-support'
// - Renamed variable 'y' to 'codemirrorStateCore'
// - Resolved require(980017) to 'codemirror-state-core'
// - Renamed variable 'S' to 'codemirrorEditorViewCore'
// - Resolved require(928053) to 'codemirror-editor-view-core'
// - Updated imported property 'IK' to 'ContextTracker' (module 556971)
// - Updated imported property 'Jq' to 'TokenType' (module 556971)
// - Updated imported property 'WQ' to 'LrParser' (module 556971)
// - Updated imported property 'Gv' to 'defineHighlighter' (module 852622)
// - Updated imported property 'pJ' to 'defaultTags' (module 852622)
// - Updated imported property 'qz' to 'getTree' (module 976653)
// - Updated imported property 'qp' to 'Parser' (module 976653)
// - Updated imported property 'uj' to 'indentNodeProp' (module 976653)
// - Updated imported property 'x0' to 'foldState' (module 976653)
// - Updated imported property 'a0' to 'foldNodeProp' (module 976653)
// - Updated imported property 'ri' to 'Language' (module 976653)
// - Updated imported property 'tk' to 'EditorView' (module 928053)
// - Updated imported property 'jT' to 'EditorSelection' (module 980017)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40871.2aac5e5a.js
         * chunkId: 40871
         * moduleId: 856418
         */
module.exports = function (module, exports, require) {
  var lrParserDefinition = require("lr-parser-definition") /*id: 556971*/;
  var syntaxHighlightTags = require("syntax-highlight-tags") /*id: 852622*/;
  let r = null;
  let o = null;
  let h = 0;
  function a(t, e) {
    var s;
    let i = t.pos + e;
    if (o == t && h == i) {
      return r;
    }
    while ((s = t.peek(e)) == 9 || s == 10 || s == 13 || s == 32) {
      e++;
    }
    let n = "";
    while (true) {
      let s = t.peek(e);
      if (s != 45 && s != 46 && s != 58 && (!(s >= 65) || !(s <= 90)) && s != 95 && (!(s >= 97) || !(s <= 122)) && !(s >= 161)) {
        break;
      }
      n += String.fromCharCode(s);
      e++;
    }
    o = t;
    h = i;
    return r = n || null;
  }
  function l(t, e) {
    this.name = t;
    this.parent = e;
    this.hash = e ? e.hash : 0;
    for (let e = 0; e < t.length; e++) {
      this.hash += (this.hash << 4) + t.charCodeAt(e) + (t.charCodeAt(e) << 8);
    }
  }
  let c = new lrParserDefinition.ContextTracker({
    start: null,
    shift: (t, e, s, i) => e == 1 ? new l(a(i, 1) || "", t) : t,
    reduce: (t, e) => e == 11 && t ? t.parent : t,
    reuse(t, e, s, i) {
      let n = e.type.id;
      if (n == 1 || n == 13) {
        return new l(a(i, 1) || "", t);
      } else {
        return t;
      }
    },
    hash: t => t ? t.hash : 0,
    strict: false
  });
  let u = new lrParserDefinition.TokenType((t, e) => {
    if (t.next == 60) {
      t.advance();
      if (t.next == 47) {
        t.advance();
        let s = a(t, 0);
        if (!s) {
          return t.acceptToken(5);
        }
        if (e.context && s == e.context.name) {
          return t.acceptToken(2);
        }
        for (let i = e.context; i; i = i.parent) {
          if (i.name == s) {
            return t.acceptToken(3, -2);
          }
        }
        t.acceptToken(4);
      } else if (t.next != 33 && t.next != 63) {
        return t.acceptToken(1);
      }
    }
  }, {
    contextual: true
  });
  function f(t, e) {
    return new lrParserDefinition.TokenType(s => {
      let i = 0;
      let n = e.charCodeAt(0);
      t: for (; !(s.next < 0); s.advance(), i++) {
        if (s.next == n) {
          for (let t = 1; t < e.length; t++) {
            if (s.peek(t) != e.charCodeAt(t)) {
              continue t;
            }
          }
          break;
        }
      }
      if (i) {
        s.acceptToken(t);
      }
    });
  }
  let p = f(35, "-->");
  let O = f(36, "?>");
  let d = f(37, "]]>");
  let g = syntaxHighlightTags.defineHighlighter({
    Text: syntaxHighlightTags.defaultTags.content,
    "StartTag StartCloseTag EndTag SelfCloseEndTag": syntaxHighlightTags.defaultTags.angleBracket,
    TagName: syntaxHighlightTags.defaultTags.tagName,
    "MismatchedCloseTag/TagName": [syntaxHighlightTags.defaultTags.tagName, syntaxHighlightTags.defaultTags.invalid],
    AttributeName: syntaxHighlightTags.defaultTags.attributeName,
    AttributeValue: syntaxHighlightTags.defaultTags.attributeValue,
    Is: syntaxHighlightTags.defaultTags.definitionOperator,
    "EntityReference CharacterReference": syntaxHighlightTags.defaultTags.character,
    Comment: syntaxHighlightTags.defaultTags.blockComment,
    ProcessingInst: syntaxHighlightTags.defaultTags.processingInstruction,
    DoctypeDecl: syntaxHighlightTags.defaultTags.documentMeta,
    Cdata: syntaxHighlightTags.defaultTags.special(syntaxHighlightTags.defaultTags.string)
  });
  let m = lrParserDefinition.LrParser.deserialize({
    version: 14,
    states: ",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",
    stateData: ")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",
    goto: "%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",
    nodeNames: "⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",
    maxTerm: 47,
    context: c,
    nodeProps: [["closedBy", 1, "SelfCloseEndTag EndTag", 13, "CloseTag MissingCloseTag"], ["openedBy", 12, "StartTag StartCloseTag", 19, "OpenTag", 20, "StartTag"], ["isolate", -6, 13, 18, 19, 21, 22, 24, ""]],
    propSources: [g],
    skippedNodes: [0],
    repeatNodeCount: 8,
    tokenData: "Jy~R!XOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs'ssv$nvw(Zw}$n}!O,^!O!P$n!P!Q.m!Q![$n![!]0V!]!^$n!^!_3h!_!`El!`!aF_!a!bGQ!b!c$n!c!}0V!}#P$n#P#QHj#Q#R$n#R#S0V#S#T$n#T#o0V#o%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U$n4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$nX$uWVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nP%dTVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_P%vP;=`<%l%_W&OT{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yW&bP;=`<%l%yX&hP;=`<%l$n_&t_VP{WyUOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ'zTzYVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_~(^ast)c![!]*g!c!}*g#R#S*g#T#o*g%W%o*g%p&a*g&b1p*g4U4d*g4e$IS*g$I`$Ib*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~)fQ!Q![)l#l#m)z~)oQ!Q![)l!]!^)u~)zOX~~)}R!Q![*W!c!i*W#T#Z*W~*ZS!Q![*W!]!^)u!c!i*W#T#Z*W~*jg}!O*g!O!P*g!Q![*g![!]*g!]!^,R!c!}*g#R#S*g#T#o*g$}%O*g%W%o*g%p&a*g&b1p*g1p4U*g4U4d*g4e$IS*g$I`$Ib*g$Je$Jg*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~,WOW~~,ZP;=`<%l*gZ,eYVP{WOr$nrs%_sv$nw}$n}!O-T!O!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ-[YVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a-z!a;'S$n;'S;=`&e<%lO$nZ.TW|QVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n].tYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a/d!a;'S$n;'S;=`&e<%lO$n]/mWdSVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_0b!O`S^QVP{WOr$nrs%_sv$nw}$n}!O0V!O!P0V!P!Q$n!Q![0V![!]0V!]!^$n!^!_%y!_!c$n!c!}0V!}#R$n#R#S0V#S#T$n#T#o0V#o$}$n$}%O0V%O%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U0V4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Je$n$Je$Jg0V$Jg$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$n_3eP;=`<%l0VX3mW{WOq%yqr4Vsv%yw!a%y!a!bEU!b;'S%y;'S;=`&_<%lO%yX4[]{WOr%ysv%yw}%y}!O5T!O!f%y!f!g6V!g!}%y!}#O;f#O#W%y#W#XAr#X;'S%y;'S;=`&_<%lO%yX5YV{WOr%ysv%yw}%y}!O5o!O;'S%y;'S;=`&_<%lO%yX5vT}P{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX6[V{WOr%ysv%yw!q%y!q!r6q!r;'S%y;'S;=`&_<%lO%yX6vV{WOr%ysv%yw!e%y!e!f7]!f;'S%y;'S;=`&_<%lO%yX7bV{WOr%ysv%yw!v%y!v!w7w!w;'S%y;'S;=`&_<%lO%yX7|V{WOr%ysv%yw!{%y!{!|8c!|;'S%y;'S;=`&_<%lO%yX8hV{WOr%ysv%yw!r%y!r!s8}!s;'S%y;'S;=`&_<%lO%yX9SV{WOr%ysv%yw!g%y!g!h9i!h;'S%y;'S;=`&_<%lO%yX9nX{WOr9irs:Zsv9ivw:Zw!`9i!`!a:x!a;'S9i;'S;=`;`<%lO9iP:^TO!`:Z!`!a:m!a;'S:Z;'S;=`:r<%lO:ZP:rOiPP:uP;=`<%l:ZX;PTiP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX;cP;=`<%l9iX;kX{WOr%ysv%yw!e%y!e!f<W!f#V%y#V#W?f#W;'S%y;'S;=`&_<%lO%yX<]V{WOr%ysv%yw!f%y!f!g<r!g;'S%y;'S;=`&_<%lO%yX<wV{WOr%ysv%yw!c%y!c!d=^!d;'S%y;'S;=`&_<%lO%yX=cV{WOr%ysv%yw!v%y!v!w=x!w;'S%y;'S;=`&_<%lO%yX=}V{WOr%ysv%yw!c%y!c!d>d!d;'S%y;'S;=`&_<%lO%yX>iV{WOr%ysv%yw!}%y!}#O?O#O;'S%y;'S;=`&_<%lO%yX?VT{WxPOr%ysv%yw;'S%y;'S;=`&_<%lO%yX?kV{WOr%ysv%yw#W%y#W#X@Q#X;'S%y;'S;=`&_<%lO%yX@VV{WOr%ysv%yw#T%y#T#U@l#U;'S%y;'S;=`&_<%lO%yX@qV{WOr%ysv%yw#h%y#h#iAW#i;'S%y;'S;=`&_<%lO%yXA]V{WOr%ysv%yw#T%y#T#U>d#U;'S%y;'S;=`&_<%lO%yXAwV{WOr%ysv%yw#c%y#c#dB^#d;'S%y;'S;=`&_<%lO%yXBcV{WOr%ysv%yw#V%y#V#WBx#W;'S%y;'S;=`&_<%lO%yXB}V{WOr%ysv%yw#h%y#h#iCd#i;'S%y;'S;=`&_<%lO%yXCiV{WOr%ysv%yw#m%y#m#nDO#n;'S%y;'S;=`&_<%lO%yXDTV{WOr%ysv%yw#d%y#d#eDj#e;'S%y;'S;=`&_<%lO%yXDoV{WOr%ysv%yw#X%y#X#Y9i#Y;'S%y;'S;=`&_<%lO%yXE]T!PP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yZEuWaQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_FhW[UVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZGXYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aGw!a;'S$n;'S;=`&e<%lO$nZHQW!OQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZHqYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_#P$n#P#QIa#Q;'S$n;'S;=`&e<%lO$nZIhYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aJW!a;'S$n;'S;=`&e<%lO$nZJaWwQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n",
    tokenizers: [u, p, O, d, 0, 1, 2, 3],
    topRules: {
      Document: [0, 6]
    },
    tokenPrec: 0
  });
  var codemirrorLanguageSupport = require("codemirror-language-support") /*id: 976653*/;
  var codemirrorStateCore = require("codemirror-state-core") /*id: 980017*/;
  var codemirrorEditorViewCore = require("codemirror-editor-view-core") /*id: 928053*/;
  function b(t, e) {
    let s = e && e.getChild("TagName");
    if (s) {
      return t.sliceString(s.from, s.to);
    } else {
      return "";
    }
  }
  function x(t, e) {
    let s = e && e.firstChild;
    if (s && s.name == "OpenTag") {
      return b(t, s);
    } else {
      return "";
    }
  }
  function $(t) {
    for (let e = t && t.parent; e; e = e.parent) {
      if (e.name == "Element") {
        return e;
      }
    }
    return null;
  }
  class v {
    constructor(t, e, s) {
      this.attrs = e;
      this.attrValues = s;
      this.children = [];
      this.name = t.name;
      this.completion = Object.assign(Object.assign({
        type: "type"
      }, t.completion || {}), {
        label: this.name
      });
      this.openCompletion = Object.assign(Object.assign({}, this.completion), {
        label: "<" + this.name
      });
      this.closeCompletion = Object.assign(Object.assign({}, this.completion), {
        label: "</" + this.name + ">",
        boost: 2
      });
      this.closeNameCompletion = Object.assign(Object.assign({}, this.completion), {
        label: this.name + ">"
      });
      this.text = t.textContent ? t.textContent.map(t => ({
        label: t,
        type: "text"
      })) : [];
    }
  }
  let P = /^[:\-\.\w\u00b7-\uffff]*$/;
  function T(t) {
    return Object.assign(Object.assign({
      type: "property"
    }, t.completion || {}), {
      label: t.name
    });
  }
  function C(t) {
    if (typeof t == "string") {
      return {
        label: `"${t}"`,
        type: "constant"
      };
    } else if (/^"/.test(t.label)) {
      return t;
    } else {
      return Object.assign(Object.assign({}, t), {
        label: `"${t.label}"`
      });
    }
  }
  function w(t, e) {
    let s = [];
    let i = [];
    let n = Object.create(null);
    for (let t of e) {
      let e = T(t);
      s.push(e);
      if (t.global) {
        i.push(e);
      }
      if (t.values) {
        n[t.name] = t.values.map(C);
      }
    }
    let r = [];
    let o = [];
    let h = Object.create(null);
    for (let e of t) {
      let t = i;
      let a = n;
      if (e.attributes) {
        t = t.concat(e.attributes.map(t => typeof t == "string" ? s.find(e => e.label == t) || {
          label: t,
          type: "property"
        } : (t.values && (a == n && (a = Object.create(a)), a[t.name] = t.values.map(C)), T(t))));
      }
      let l = new v(e, t, a);
      h[l.name] = l;
      r.push(l);
      if (e.top) {
        o.push(l);
      }
    }
    if (!o.length) {
      o = r;
    }
    for (let e = 0; e < r.length; e++) {
      let s = t[e];
      let i = r[e];
      if (s.children) {
        for (let t of s.children) {
          if (h[t]) {
            i.children.push(h[t]);
          }
        }
      } else {
        i.children = r;
      }
    }
    return t => {
      let {
        doc: s
      } = t.state;
      let a = function (t, e) {
        var s;
        let i = codemirrorLanguageSupport.getTree(t).resolveInner(e, -1);
        let n = null;
        for (let t = i; !n && t.parent; t = t.parent) {
          if (t.name == "OpenTag" || t.name == "CloseTag" || t.name == "SelfClosingTag" || t.name == "MismatchedCloseTag") {
            n = t;
          }
        }
        if (n && (n.to > e || n.lastChild.type.isError)) {
          let t = n.parent;
          if (i.name == "TagName") {
            if (n.name == "CloseTag" || n.name == "MismatchedCloseTag") {
              return {
                type: "closeTag",
                from: i.from,
                context: t
              };
            } else {
              return {
                type: "openTag",
                from: i.from,
                context: $(t)
              };
            }
          }
          if (i.name == "AttributeName") {
            return {
              type: "attrName",
              from: i.from,
              context: n
            };
          }
          if (i.name == "AttributeValue") {
            return {
              type: "attrValue",
              from: i.from,
              context: n
            };
          }
          let s = i == n || i.name == "Attribute" ? i.childBefore(e) : i;
          if ((s == null ? undefined : s.name) == "StartTag") {
            return {
              type: "openTag",
              from: e,
              context: $(t)
            };
          } else if ((s == null ? undefined : s.name) == "StartCloseTag" && s.to <= e) {
            return {
              type: "closeTag",
              from: e,
              context: t
            };
          } else if ((s == null ? undefined : s.name) == "Is") {
            return {
              type: "attrValue",
              from: e,
              context: n
            };
          } else if (s) {
            return {
              type: "attrName",
              from: e,
              context: n
            };
          } else {
            return null;
          }
        }
        if (i.name == "StartCloseTag") {
          return {
            type: "closeTag",
            from: e,
            context: i.parent
          };
        }
        while (i.parent && i.to == e && !((s = i.lastChild) === null || s === undefined ? undefined : s.type.isError)) {
          i = i.parent;
        }
        if (i.name == "Element" || i.name == "Text" || i.name == "Document") {
          return {
            type: "tag",
            from: e,
            context: i.name == "Element" ? i : $(i)
          };
        } else {
          return null;
        }
      }(t.state, t.pos);
      if (!a || a.type == "tag" && !t.explicit) {
        return null;
      }
      let {
        type: l,
        from: c,
        context: u
      } = a;
      if (l == "openTag") {
        let t = o;
        let e = x(s, u);
        if (e) {
          let s = h[e];
          t = (s == null ? undefined : s.children) || r;
        }
        return {
          from: c,
          options: t.map(t => t.completion),
          validFor: P
        };
      }
      if (l == "closeTag") {
        let i = x(s, u);
        if (i) {
          return {
            from: c,
            to: t.pos + +(s.sliceString(t.pos, t.pos + 1) == ">"),
            options: [h[i]?.closeNameCompletion || {
              label: i + ">",
              type: "type"
            }],
            validFor: P
          };
        } else {
          return null;
        }
      }
      if (l == "attrName") {
        let t = h[b(s, u)];
        return {
          from: c,
          options: (t == null ? undefined : t.attrs) || i,
          validFor: P
        };
      }
      if (l == "attrValue") {
        let e;
        let i;
        let r = (i = (e = u && u.getChildren("Attribute").find(t => t.from <= c && t.to >= c)) && e.getChild("AttributeName")) ? s.sliceString(i.from, i.to) : "";
        if (!r) {
          return null;
        }
        let o = h[b(s, u)];
        let a = ((o == null ? undefined : o.attrValues) || n)[r];
        if (a && a.length) {
          return {
            from: c,
            to: t.pos + +(s.sliceString(t.pos, t.pos + 1) == "\""),
            options: a,
            validFor: /^"[^"]*"?$/
          };
        } else {
          return null;
        }
      }
      {
        if (l != "tag") {
          return null;
        }
        let e = x(s, u);
        let i = h[e];
        let n = [];
        let a = u && u.lastChild;
        if (e && (!a || a.name != "CloseTag" || b(s, a) != e)) {
          n.push(i ? i.closeCompletion : {
            label: "</" + e + ">",
            type: "type",
            boost: 2
          });
        }
        let f = n.concat(((i == null ? undefined : i.children) || (u ? r : o)).map(t => t.openCompletion));
        if (u && (i == null ? undefined : i.text.length)) {
          let e = u.firstChild;
          if (e.to > t.pos - 20 && !/\S/.test(t.state.sliceDoc(e.to, t.pos))) {
            f = f.concat(i.text);
          }
        }
        return {
          from: c,
          options: f,
          validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/
        };
      }
    };
  }
  let _ = codemirrorLanguageSupport.Parser.define({
    name: "xml",
    parser: m.configure({
      props: [codemirrorLanguageSupport.indentNodeProp.add({
        Element(t) {
          let e = /^\s*<\//.test(t.textAfter);
          return t.lineIndent(t.node.from) + (e ? 0 : t.unit);
        },
        "OpenTag CloseTag SelfClosingTag": t => t.column(t.node.from) + t.unit
      }), codemirrorLanguageSupport.foldState.add({
        Element(t) {
          let e = t.firstChild;
          let s = t.lastChild;
          if (e && e.name == "OpenTag") {
            return {
              from: e.to,
              to: s.name == "CloseTag" ? s.from : t.to
            };
          } else {
            return null;
          }
        }
      }), codemirrorLanguageSupport.foldNodeProp.add({
        "OpenTag CloseTag": t => t.getChild("TagName")
      })]
    }),
    languageData: {
      commentTokens: {
        block: {
          open: "<!--",
          close: "-->"
        }
      },
      indentOnInput: /^\s*<\/$/
    }
  });
  function V(t = {}) {
    let e = [_.data.of({
      autocomplete: w(t.elements || [], t.attributes || [])
    })];
    if (t.autoCloseTags !== false) {
      e.push(A);
    }
    return new codemirrorLanguageSupport.Language(_, e);
  }
  function W(t, e, s = t.length) {
    if (!e) {
      return "";
    }
    let i = e.firstChild;
    let n = i && i.getChild("TagName");
    if (n) {
      return t.sliceString(n.from, Math.min(n.to, s));
    } else {
      return "";
    }
  }
  let A = codemirrorEditorViewCore.EditorView.inputHandler.of((t, e, s, i, n) => {
    if (t.composing || t.state.readOnly || e != s || i != ">" && i != "/" || !_.isActiveAt(t.state, e, -1)) {
      return false;
    }
    let r = n();
    let {
      state: o
    } = r;
    let h = o.changeByRange(t => {
      let {
        head: r
      } = t;
      let h = o.doc.sliceString(r - 1, r) == i;
      let a = codemirrorLanguageSupport.getTree(o).resolveInner(r, -1);
      let l;
      if (h && i == ">" && a.name == "EndTag") {
        let i = a.parent;
        if (i.parent?.lastChild?.name != "CloseTag" && (l = W(o.doc, i.parent, r))) {
          let e = r + +(o.doc.sliceString(r, r + 1) === ">");
          return {
            range: t,
            changes: {
              from: r,
              to: e,
              insert: `</${l}>`
            }
          };
        }
      } else if (h && i == "/" && a.name == "StartCloseTag") {
        let t = a.parent;
        if (a.from == r - 2 && t.lastChild?.name != "CloseTag" && (l = W(o.doc, t, r))) {
          let t = r + +(o.doc.sliceString(r, r + 1) === ">");
          let e = `${l}>`;
          return {
            range: codemirrorStateCore.EditorSelection.cursor(r + e.length, -1),
            changes: {
              from: r,
              to: t,
              insert: e
            }
          };
        }
      }
      return {
        range: t
      };
    });
    return !h.changes.empty && (t.dispatch([r, o.update(h, {
      userEvent: "input.complete",
      scrollIntoView: true
    })]), true);
  });
  require.r(exports);
  require.d(exports, {
    completeFromSchema: function () {
      return w;
    },
    xml: function () {
      return V;
    },
    autoCloseTags: function () {
      return A;
    },
    xmlLanguage: function () {
      return _;
    }
  });
}