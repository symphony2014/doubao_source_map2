// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'lrParserDefinition'
// - Resolved require(556971) to 'lr-parser-definition'
// - Renamed variable 'Q' to 'syntaxHighlightTags'
// - Resolved require(852622) to 'syntax-highlight-tags'
// - Renamed variable 'e' to 'syntaxTreeCore'
// - Resolved require(655745) to 'syntax-tree-core'
// - Renamed variable 'h' to 'codemirrorCssLanguageSupport'
// - Resolved require(592288) to 'codemirror-css-language-support'
// - Renamed variable 'k' to 'codemirrorJavascriptLangSupport'
// - Resolved require(911677) to 'codemirror-javascript-lang-support'
// - Renamed variable 'g' to 'codemirrorEditorViewCore'
// - Resolved require(928053) to 'codemirror-editor-view-core'
// - Renamed variable 'w' to 'codemirrorStateCore'
// - Resolved require(980017) to 'codemirror-state-core'
// - Renamed variable 'Y' to 'codemirrorLanguageSupport'
// - Resolved require(976653) to 'codemirror-language-support'
// - Updated imported property 'IK' to 'ContextTracker' (module 556971)
// - Updated imported property 'Jq' to 'TokenType' (module 556971)
// - Updated imported property 'WQ' to 'LrParser' (module 556971)
// - Updated imported property 'Gv' to 'defineHighlighter' (module 852622)
// - Updated imported property 'pJ' to 'defaultTags' (module 852622)
// - Updated imported property 'FE' to 'createNestedParse' (module 655745)
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
         * chunk file: 19994.979dc037.js
         * chunkId: 19994
         * moduleId: 850002
         */
module.exports = function (module, exports, require) {
  var lrParserDefinition = require("lr-parser-definition") /*id: 556971*/;
  var syntaxHighlightTags = require("syntax-highlight-tags") /*id: 852622*/;
  var syntaxTreeCore = require("syntax-tree-core") /*id: 655745*/;
  let y = {
    area: true,
    base: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true,
    menuitem: true
  };
  let t = {
    dd: true,
    li: true,
    optgroup: true,
    option: true,
    p: true,
    rp: true,
    rt: true,
    tbody: true,
    td: true,
    tfoot: true,
    th: true,
    tr: true
  };
  let S = {
    dd: {
      dd: true,
      dt: true
    },
    dt: {
      dd: true,
      dt: true
    },
    li: {
      li: true
    },
    option: {
      option: true,
      optgroup: true
    },
    optgroup: {
      optgroup: true
    },
    p: {
      address: true,
      article: true,
      aside: true,
      blockquote: true,
      dir: true,
      div: true,
      dl: true,
      fieldset: true,
      footer: true,
      form: true,
      h1: true,
      h2: true,
      h3: true,
      h4: true,
      h5: true,
      h6: true,
      header: true,
      hgroup: true,
      hr: true,
      menu: true,
      nav: true,
      ol: true,
      p: true,
      pre: true,
      section: true,
      table: true,
      ul: true
    },
    rp: {
      rp: true,
      rt: true
    },
    rt: {
      rp: true,
      rt: true
    },
    tbody: {
      tbody: true,
      tfoot: true
    },
    td: {
      td: true,
      th: true
    },
    tfoot: {
      tbody: true
    },
    th: {
      td: true,
      th: true
    },
    thead: {
      tbody: true,
      tfoot: true
    },
    tr: {
      tr: true
    }
  };
  function l(O) {
    return O == 9 || O == 10 || O == 13 || O == 32;
  }
  let n = null;
  let s = null;
  let z = 0;
  function r(O, $) {
    var i;
    let a = O.pos + $;
    if (z == a && s == O) {
      return n;
    }
    let Q = O.peek($);
    while (l(Q)) {
      Q = O.peek(++$);
    }
    let e = "";
    while ((i = Q) == 45 || i == 46 || i == 58 || i >= 65 && i <= 90 || i == 95 || i >= 97 && i <= 122 || i >= 161) {
      e += String.fromCharCode(Q);
      Q = O.peek(++$);
    }
    s = O;
    z = a;
    return n = e ? e.toLowerCase() : Q == o || Q == P ? undefined : null;
  }
  let o = 63;
  let P = 33;
  function d(O, $) {
    this.name = O;
    this.parent = $;
  }
  let u = [6, 10, 7, 8, 9];
  let T = new lrParserDefinition.ContextTracker({
    start: null,
    shift: (O, $, i, a) => u.indexOf($) > -1 ? new d(r(a, 1) || "", O) : O,
    reduce: (O, $) => $ == 20 && O ? O.parent : O,
    reuse(O, $, i, a) {
      let Q = $.type.id;
      if (Q == 6 || Q == 36) {
        return new d(r(a, 1) || "", O);
      } else {
        return O;
      }
    },
    strict: false
  });
  let W = new lrParserDefinition.TokenType((O, $) => {
    if (O.next != 60) {
      if (O.next < 0 && $.context) {
        O.acceptToken(57);
      }
      return;
    }
    O.advance();
    let i = O.next == 47;
    if (i) {
      O.advance();
    }
    let a = r(O, 0);
    if (a === undefined) {
      return;
    }
    if (!a) {
      return O.acceptToken(i ? 14 : 6);
    }
    let Q = $.context ? $.context.name : null;
    if (i) {
      if (a == Q) {
        return O.acceptToken(11);
      }
      if (Q && t[Q]) {
        return O.acceptToken(57, -2);
      }
      if ($.dialectEnabled(0)) {
        return O.acceptToken(12);
      }
      for (let O = $.context; O; O = O.parent) {
        if (O.name == a) {
          return;
        }
      }
      O.acceptToken(13);
    } else {
      if (a == "script") {
        return O.acceptToken(7);
      }
      if (a == "style") {
        return O.acceptToken(8);
      }
      if (a == "textarea") {
        return O.acceptToken(9);
      }
      if (y.hasOwnProperty(a)) {
        return O.acceptToken(10);
      }
      if (Q && S[Q] && S[Q][a]) {
        O.acceptToken(57, -1);
      } else {
        O.acceptToken(6);
      }
    }
  }, {
    contextual: true
  });
  let p = new lrParserDefinition.TokenType(O => {
    for (let $ = 0, i = 0;; i++) {
      if (O.next < 0) {
        if (i) {
          O.acceptToken(58);
        }
        break;
      }
      if (O.next == 45) {
        $++;
      } else if (O.next == 62 && $ >= 2) {
        if (i >= 3) {
          O.acceptToken(58, -2);
        }
        break;
      } else {
        $ = 0;
      }
      O.advance();
    }
  });
  let X = new lrParserDefinition.TokenType((O, $) => {
    if (O.next == 47 && O.peek(1) == 62) {
      let i = $.dialectEnabled(1) || function (O) {
        for (; O; O = O.parent) {
          if (O.name == "svg" || O.name == "math") {
            return true;
          }
        }
        return false;
      }($.context);
      O.acceptToken(i ? 5 : 4, 2);
    } else if (O.next == 62) {
      O.acceptToken(4, 1);
    }
  });
  function q(O, $, i) {
    let Q = 2 + O.length;
    return new lrParserDefinition.TokenType(a => {
      for (let e = 0, y = 0, t = 0;; t++) {
        if (a.next < 0) {
          if (t) {
            a.acceptToken($);
          }
          break;
        }
        if (e == 0 && a.next == 60 || e == 1 && a.next == 47 || e >= 2 && e < Q && a.next == O.charCodeAt(e - 2)) {
          e++;
          y++;
        } else if ((e == 2 || e == Q) && l(a.next)) {
          y++;
        } else if (e == Q && a.next == 62) {
          if (t > y) {
            a.acceptToken($, -y);
          } else {
            a.acceptToken(i, -(y - 2));
          }
          break;
        } else if ((a.next == 10 || a.next == 13) && t) {
          a.acceptToken($, 1);
          break;
        } else {
          e = y = 0;
        }
        a.advance();
      }
    });
  }
  let m = q("script", 54, 1);
  let x = q("style", 55, 2);
  let c = q("textarea", 56, 3);
  let V = syntaxHighlightTags.defineHighlighter({
    "Text RawText": syntaxHighlightTags.defaultTags.content,
    "StartTag StartCloseTag SelfClosingEndTag EndTag": syntaxHighlightTags.defaultTags.angleBracket,
    TagName: syntaxHighlightTags.defaultTags.tagName,
    "MismatchedCloseTag/TagName": [syntaxHighlightTags.defaultTags.tagName, syntaxHighlightTags.defaultTags.invalid],
    AttributeName: syntaxHighlightTags.defaultTags.attributeName,
    "AttributeValue UnquotedAttributeValue": syntaxHighlightTags.defaultTags.attributeValue,
    Is: syntaxHighlightTags.defaultTags.definitionOperator,
    "EntityReference CharacterReference": syntaxHighlightTags.defaultTags.character,
    Comment: syntaxHighlightTags.defaultTags.blockComment,
    ProcessingInst: syntaxHighlightTags.defaultTags.processingInstruction,
    DoctypeDecl: syntaxHighlightTags.defaultTags.documentMeta
  });
  let b = lrParserDefinition.LrParser.deserialize({
    version: 14,
    states: ",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%ZQ&rO,59fO%fQ&rO,59iO%qQ&rO,59lO%|Q&rO,59nOOOa'#D^'#D^O&XOaO'#CxO&dOaO,59[OOOb'#D_'#D_O&lObO'#C{O&wObO,59[OOOd'#D`'#D`O'POdO'#DOO'[OdO,59[OOO`'#Da'#DaO'dO!rO,59[O'kQ#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'pO$fO,59oOOO`,59o,59oO'xQ#|O,59qO'}Q#|O,59rOOO`-E7W-E7WO(SQ&rO'#CsOOQW'#DZ'#DZO(bQ&rO1G.wOOOa1G.w1G.wOOO`1G/Y1G/YO(mQ&rO1G/QOOOb1G/Q1G/QO(xQ&rO1G/TOOOd1G/T1G/TO)TQ&rO1G/WOOO`1G/W1G/WO)`Q&rO1G/YOOOa-E7[-E7[O)kQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)pQ#tO'#C|OOOd-E7^-E7^O)uQ#tO'#DPOOO`-E7_-E7_O)zQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O*PQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOO`7+$t7+$tOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rO*[Q#|O,59eO*aQ#|O,59hO*fQ#|O,59kOOO`1G/X1G/XO*kO7[O'#CvO*|OMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O+_O7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+pOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",
    stateData: ",]~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OT}OhyO~OS!POT}OhyO~OS!ROT}OhyO~OS!TOT}OhyO~OS}OT}OhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXTgXhgX~OS!fOT!gOhyO~OS!hOT!gOhyO~OS!iOT!gOhyO~OS!jOT!gOhyO~OS!gOT!gOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",
    goto: "%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
    nodeNames: "⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
    maxTerm: 67,
    context: T,
    nodeProps: [["closedBy", -10, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13, "EndTag", 6, "EndTag SelfClosingEndTag", -4, 21, 30, 33, 36, "CloseTag"], ["openedBy", 4, "StartTag StartCloseTag", 5, "StartTag", -4, 29, 32, 35, 37, "OpenTag"], ["group", -9, 14, 17, 18, 19, 20, 39, 40, 41, 42, "Entity", 16, "Entity TextContent", -3, 28, 31, 34, "TextContent Entity"], ["isolate", -11, 21, 29, 30, 32, 33, 35, 36, 37, 38, 41, 42, "ltr", -3, 26, 27, 39, ""]],
    propSources: [V],
    skippedNodes: [0],
    repeatNodeCount: 9,
    tokenData: "!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebhSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXhSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vchS`P!a`!cpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WihSkWc!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zbkWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOa!R!R7tP;=`<%l7S!Z8OYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{ihSkWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbhSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QchSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXhSa!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TakWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOb!R!RAwP;=`<%lAY!ZBRYkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbhSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbhSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXhSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYlhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_khS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_X`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!a`!cpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!a`!cp!dPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!a`!cpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!a`!cpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!a`!cpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!a`!cpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!a`!cpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!a`!cpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!a`!cpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!cpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO{PP!-nP;=`<%l!-Sq!-xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!a`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!a`!cpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!a`!cpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!a`!cpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!a`!cpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!a`!cpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!a`!cpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!cpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOxPP!7TP;=`<%l!6Vq!7]V!cpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!a`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!a`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
    tokenizers: [m, x, c, X, W, p, 0, 1, 2, 3, 4, 5],
    topRules: {
      Document: [0, 15]
    },
    dialects: {
      noMatch: 0,
      selfClosing: 509
    },
    tokenPrec: 511
  });
  function v(O, $) {
    let i = Object.create(null);
    for (let a of O.getChildren(23)) {
      let O = a.getChild(24);
      let Q = a.getChild(26) || a.getChild(27);
      if (O) {
        i[$.read(O.from, O.to)] = Q ? Q.type.id == 26 ? $.read(Q.from + 1, Q.to - 1) : $.read(Q.from, Q.to) : "";
      }
    }
    return i;
  }
  function R(O, $) {
    let i = O.getChild(22);
    if (i) {
      return $.read(i.from, i.to);
    } else {
      return " ";
    }
  }
  function f(O, $, i) {
    let a;
    for (let Q of i) {
      if (!Q.attrs || Q.attrs(a ||= v(O.node.parent.firstChild, $))) {
        return {
          parser: Q.parser
        };
      }
    }
    return null;
  }
  function U(O = [], $ = []) {
    let i = [];
    let a = [];
    let Q = [];
    let y = [];
    for (let $ of O) {
      ($.tag == "script" ? i : $.tag == "style" ? a : $.tag == "textarea" ? Q : y).push($);
    }
    let t = $.length ? Object.create(null) : null;
    for (let O of $) {
      (t[O.name] ||= []).push(O);
    }
    return syntaxTreeCore.createNestedParse((O, $) => {
      let e = O.type.id;
      if (e == 28) {
        return f(O, $, i);
      }
      if (e == 31) {
        return f(O, $, a);
      }
      if (e == 34) {
        return f(O, $, Q);
      }
      if (e == 20 && y.length) {
        let i = O.node;
        let a = i.firstChild;
        let Q = a && R(a, $);
        let e;
        if (Q) {
          for (let O of y) {
            if (O.tag == Q && (!O.attrs || O.attrs(e ||= v(a, $)))) {
              let $ = i.lastChild;
              let Q = $.type.id == 37 ? $.from : i.to;
              if (Q > a.to) {
                return {
                  parser: O.parser,
                  overlay: [{
                    from: a.to,
                    to: Q
                  }]
                };
              }
            }
          }
        }
      }
      if (t && e == 23) {
        let i = O.node;
        let a;
        if (a = i.firstChild) {
          let O = t[$.read(a.from, a.to)];
          if (O) {
            for (let a of O) {
              if (a.tagName && a.tagName != R(i.parent, $)) {
                continue;
              }
              let O = i.lastChild;
              if (O.type.id == 26) {
                let $ = O.from + 1;
                let i = O.lastChild;
                let Q = O.to - (i && i.isError ? 0 : 1);
                if (Q > $) {
                  return {
                    parser: a.parser,
                    overlay: [{
                      from: $,
                      to: Q
                    }]
                  };
                }
              } else if (O.type.id == 27) {
                return {
                  parser: a.parser,
                  overlay: [{
                    from: O.from,
                    to: O.to
                  }]
                };
              }
            }
          }
        }
      }
      return null;
    });
  }
  var codemirrorCssLanguageSupport = require("codemirror-css-language-support") /*id: 592288*/;
  var codemirrorJavascriptLangSupport = require("codemirror-javascript-lang-support") /*id: 911677*/;
  var codemirrorEditorViewCore = require("codemirror-editor-view-core") /*id: 928053*/;
  var codemirrorStateCore = require("codemirror-state-core") /*id: 980017*/;
  var codemirrorLanguageSupport = require("codemirror-language-support") /*id: 976653*/;
  let Z = ["_blank", "_self", "_top", "_parent"];
  let _ = ["ascii", "utf-8", "utf-16", "latin1", "latin1"];
  let j = ["get", "post", "put", "delete"];
  let G = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"];
  let E = ["true", "false"];
  let C = {};
  let A = {
    a: {
      attrs: {
        href: null,
        ping: null,
        type: null,
        media: null,
        target: Z,
        hreflang: null
      }
    },
    abbr: C,
    address: C,
    area: {
      attrs: {
        alt: null,
        coords: null,
        href: null,
        target: null,
        ping: null,
        media: null,
        hreflang: null,
        type: null,
        shape: ["default", "rect", "circle", "poly"]
      }
    },
    article: C,
    aside: C,
    audio: {
      attrs: {
        src: null,
        mediagroup: null,
        crossorigin: ["anonymous", "use-credentials"],
        preload: ["none", "metadata", "auto"],
        autoplay: ["autoplay"],
        loop: ["loop"],
        controls: ["controls"]
      }
    },
    b: C,
    base: {
      attrs: {
        href: null,
        target: Z
      }
    },
    bdi: C,
    bdo: C,
    blockquote: {
      attrs: {
        cite: null
      }
    },
    body: C,
    br: C,
    button: {
      attrs: {
        form: null,
        formaction: null,
        name: null,
        value: null,
        autofocus: ["autofocus"],
        disabled: ["autofocus"],
        formenctype: G,
        formmethod: j,
        formnovalidate: ["novalidate"],
        formtarget: Z,
        type: ["submit", "reset", "button"]
      }
    },
    canvas: {
      attrs: {
        width: null,
        height: null
      }
    },
    caption: C,
    center: C,
    cite: C,
    code: C,
    col: {
      attrs: {
        span: null
      }
    },
    colgroup: {
      attrs: {
        span: null
      }
    },
    command: {
      attrs: {
        type: ["command", "checkbox", "radio"],
        label: null,
        icon: null,
        radiogroup: null,
        command: null,
        title: null,
        disabled: ["disabled"],
        checked: ["checked"]
      }
    },
    data: {
      attrs: {
        value: null
      }
    },
    datagrid: {
      attrs: {
        disabled: ["disabled"],
        multiple: ["multiple"]
      }
    },
    datalist: {
      attrs: {
        data: null
      }
    },
    dd: C,
    del: {
      attrs: {
        cite: null,
        datetime: null
      }
    },
    details: {
      attrs: {
        open: ["open"]
      }
    },
    dfn: C,
    div: C,
    dl: C,
    dt: C,
    em: C,
    embed: {
      attrs: {
        src: null,
        type: null,
        width: null,
        height: null
      }
    },
    eventsource: {
      attrs: {
        src: null
      }
    },
    fieldset: {
      attrs: {
        disabled: ["disabled"],
        form: null,
        name: null
      }
    },
    figcaption: C,
    figure: C,
    footer: C,
    form: {
      attrs: {
        action: null,
        name: null,
        "accept-charset": _,
        autocomplete: ["on", "off"],
        enctype: G,
        method: j,
        novalidate: ["novalidate"],
        target: Z
      }
    },
    h1: C,
    h2: C,
    h3: C,
    h4: C,
    h5: C,
    h6: C,
    head: {
      children: ["title", "base", "link", "style", "meta", "script", "noscript", "command"]
    },
    header: C,
    hgroup: C,
    hr: C,
    html: {
      attrs: {
        manifest: null
      }
    },
    i: C,
    iframe: {
      attrs: {
        src: null,
        srcdoc: null,
        name: null,
        width: null,
        height: null,
        sandbox: ["allow-top-navigation", "allow-same-origin", "allow-forms", "allow-scripts"],
        seamless: ["seamless"]
      }
    },
    img: {
      attrs: {
        alt: null,
        src: null,
        ismap: null,
        usemap: null,
        width: null,
        height: null,
        crossorigin: ["anonymous", "use-credentials"]
      }
    },
    input: {
      attrs: {
        alt: null,
        dirname: null,
        form: null,
        formaction: null,
        height: null,
        list: null,
        max: null,
        maxlength: null,
        min: null,
        name: null,
        pattern: null,
        placeholder: null,
        size: null,
        src: null,
        step: null,
        value: null,
        width: null,
        accept: ["audio/*", "video/*", "image/*"],
        autocomplete: ["on", "off"],
        autofocus: ["autofocus"],
        checked: ["checked"],
        disabled: ["disabled"],
        formenctype: G,
        formmethod: j,
        formnovalidate: ["novalidate"],
        formtarget: Z,
        multiple: ["multiple"],
        readonly: ["readonly"],
        required: ["required"],
        type: ["hidden", "text", "search", "tel", "url", "email", "password", "datetime", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"]
      }
    },
    ins: {
      attrs: {
        cite: null,
        datetime: null
      }
    },
    kbd: C,
    keygen: {
      attrs: {
        challenge: null,
        form: null,
        name: null,
        autofocus: ["autofocus"],
        disabled: ["disabled"],
        keytype: ["RSA"]
      }
    },
    label: {
      attrs: {
        for: null,
        form: null
      }
    },
    legend: C,
    li: {
      attrs: {
        value: null
      }
    },
    link: {
      attrs: {
        href: null,
        type: null,
        hreflang: null,
        media: null,
        sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"]
      }
    },
    map: {
      attrs: {
        name: null
      }
    },
    mark: C,
    menu: {
      attrs: {
        label: null,
        type: ["list", "context", "toolbar"]
      }
    },
    meta: {
      attrs: {
        content: null,
        charset: _,
        name: ["viewport", "application-name", "author", "description", "generator", "keywords"],
        "http-equiv": ["content-language", "content-type", "default-style", "refresh"]
      }
    },
    meter: {
      attrs: {
        value: null,
        min: null,
        low: null,
        high: null,
        max: null,
        optimum: null
      }
    },
    nav: C,
    noscript: C,
    object: {
      attrs: {
        data: null,
        type: null,
        name: null,
        usemap: null,
        form: null,
        width: null,
        height: null,
        typemustmatch: ["typemustmatch"]
      }
    },
    ol: {
      attrs: {
        reversed: ["reversed"],
        start: null,
        type: ["1", "a", "A", "i", "I"]
      },
      children: ["li", "script", "template", "ul", "ol"]
    },
    optgroup: {
      attrs: {
        disabled: ["disabled"],
        label: null
      }
    },
    option: {
      attrs: {
        disabled: ["disabled"],
        label: null,
        selected: ["selected"],
        value: null
      }
    },
    output: {
      attrs: {
        for: null,
        form: null,
        name: null
      }
    },
    p: C,
    param: {
      attrs: {
        name: null,
        value: null
      }
    },
    pre: C,
    progress: {
      attrs: {
        value: null,
        max: null
      }
    },
    q: {
      attrs: {
        cite: null
      }
    },
    rp: C,
    rt: C,
    ruby: C,
    samp: C,
    script: {
      attrs: {
        type: ["text/javascript"],
        src: null,
        async: ["async"],
        defer: ["defer"],
        charset: _
      }
    },
    section: C,
    select: {
      attrs: {
        form: null,
        name: null,
        size: null,
        autofocus: ["autofocus"],
        disabled: ["disabled"],
        multiple: ["multiple"]
      }
    },
    slot: {
      attrs: {
        name: null
      }
    },
    small: C,
    source: {
      attrs: {
        src: null,
        type: null,
        media: null
      }
    },
    span: C,
    strong: C,
    style: {
      attrs: {
        type: ["text/css"],
        media: null,
        scoped: null
      }
    },
    sub: C,
    summary: C,
    sup: C,
    table: C,
    tbody: C,
    td: {
      attrs: {
        colspan: null,
        rowspan: null,
        headers: null
      }
    },
    template: C,
    textarea: {
      attrs: {
        dirname: null,
        form: null,
        maxlength: null,
        name: null,
        placeholder: null,
        rows: null,
        cols: null,
        autofocus: ["autofocus"],
        disabled: ["disabled"],
        readonly: ["readonly"],
        required: ["required"],
        wrap: ["soft", "hard"]
      }
    },
    tfoot: C,
    th: {
      attrs: {
        colspan: null,
        rowspan: null,
        headers: null,
        scope: ["row", "col", "rowgroup", "colgroup"]
      }
    },
    thead: C,
    time: {
      attrs: {
        datetime: null
      }
    },
    title: C,
    tr: C,
    track: {
      attrs: {
        src: null,
        label: null,
        default: null,
        kind: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
        srclang: null
      }
    },
    ul: {
      children: ["li", "script", "template", "ul", "ol"]
    },
    var: C,
    video: {
      attrs: {
        src: null,
        poster: null,
        width: null,
        height: null,
        crossorigin: ["anonymous", "use-credentials"],
        preload: ["auto", "metadata", "none"],
        autoplay: ["autoplay"],
        mediagroup: ["movie"],
        muted: ["muted"],
        controls: ["controls"]
      }
    },
    wbr: C
  };
  let I = {
    accesskey: null,
    class: null,
    contenteditable: E,
    contextmenu: null,
    dir: ["ltr", "rtl", "auto"],
    draggable: ["true", "false", "auto"],
    dropzone: ["copy", "move", "link", "string:", "file:"],
    hidden: ["hidden"],
    id: null,
    inert: ["inert"],
    itemid: null,
    itemprop: null,
    itemref: null,
    itemscope: ["itemscope"],
    itemtype: null,
    lang: ["ar", "bn", "de", "en-GB", "en-US", "es", "fr", "hi", "id", "ja", "pa", "pt", "ru", "tr", "zh"],
    spellcheck: E,
    autocorrect: E,
    autocapitalize: E,
    style: null,
    tabindex: null,
    title: null,
    translate: ["yes", "no"],
    rel: ["stylesheet", "alternate", "author", "bookmark", "help", "license", "next", "nofollow", "noreferrer", "prefetch", "prev", "search", "tag"],
    role: "alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),
    "aria-activedescendant": null,
    "aria-atomic": E,
    "aria-autocomplete": ["inline", "list", "both", "none"],
    "aria-busy": E,
    "aria-checked": ["true", "false", "mixed", "undefined"],
    "aria-controls": null,
    "aria-describedby": null,
    "aria-disabled": E,
    "aria-dropeffect": null,
    "aria-expanded": ["true", "false", "undefined"],
    "aria-flowto": null,
    "aria-grabbed": ["true", "false", "undefined"],
    "aria-haspopup": E,
    "aria-hidden": E,
    "aria-invalid": ["true", "false", "grammar", "spelling"],
    "aria-label": null,
    "aria-labelledby": null,
    "aria-level": null,
    "aria-live": ["off", "polite", "assertive"],
    "aria-multiline": E,
    "aria-multiselectable": E,
    "aria-owns": null,
    "aria-posinset": null,
    "aria-pressed": ["true", "false", "mixed", "undefined"],
    "aria-readonly": E,
    "aria-relevant": null,
    "aria-required": E,
    "aria-selected": ["true", "false", "undefined"],
    "aria-setsize": null,
    "aria-sort": ["ascending", "descending", "none", "other"],
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuenow": null,
    "aria-valuetext": null
  };
  let N = "beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map(O => "on" + O);
  for (let O of N) {
    I[O] = null;
  }
  class F {
    constructor(O, $) {
      this.tags = Object.assign(Object.assign({}, A), O);
      this.globalAttrs = Object.assign(Object.assign({}, I), $);
      this.allTags = Object.keys(this.tags);
      this.globalAttrNames = Object.keys(this.globalAttrs);
    }
  }
  function M(O, $, i = O.length) {
    if (!$) {
      return "";
    }
    let a = $.firstChild;
    let Q = a && a.getChild("TagName");
    if (Q) {
      return O.sliceString(Q.from, Math.min(Q.to, i));
    } else {
      return "";
    }
  }
  function L(O, $ = false) {
    for (; O; O = O.parent) {
      if (O.name == "Element") {
        if (!$) {
          return O;
        }
        $ = false;
      }
    }
    return null;
  }
  function B(O, $, i) {
    let a = i.tags[M(O, L($))];
    return (a == null ? undefined : a.children) || i.allTags;
  }
  function D(O, $) {
    let i = [];
    for (let a = L($); a && !a.type.isTop; a = L(a.parent)) {
      let Q = M(O, a);
      if (Q && a.lastChild.name == "CloseTag") {
        break;
      }
      if (Q && i.indexOf(Q) < 0 && ($.name == "EndTag" || $.from >= a.firstChild.to)) {
        i.push(Q);
      }
    }
    return i;
  }
  F.default = new F();
  let J = /^[:\-\.\w\u00b7-\uffff]*$/;
  function K(O, $, i, a, Q) {
    let e = /\s*>/.test(O.sliceDoc(Q, Q + 5)) ? "" : ">";
    let y = L(i, true);
    return {
      from: a,
      to: Q,
      options: B(O.doc, y, $).map(O => ({
        label: O,
        type: "type"
      })).concat(D(O.doc, i).map((O, $) => ({
        label: "/" + O,
        apply: "/" + O + e,
        type: "type",
        boost: 99 - $
      }))),
      validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/
    };
  }
  function H(O, $, i, a) {
    let Q = /\s*>/.test(O.sliceDoc(a, a + 5)) ? "" : ">";
    return {
      from: i,
      to: a,
      options: D(O.doc, $).map((O, $) => ({
        label: O,
        apply: O + Q,
        type: "type",
        boost: 99 - $
      })),
      validFor: J
    };
  }
  function OO(O, $) {
    let {
      state: i,
      pos: a
    } = $;
    let Q = codemirrorLanguageSupport.getTree(i).resolveInner(a, -1);
    let e = Q.resolve(a);
    for (let O = a, $; e == Q && ($ = Q.childBefore(O));) {
      let i = $.lastChild;
      if (!i || !i.type.isError || i.from < i.to) {
        break;
      }
      e = Q = $;
      O = i.from;
    }
    if (Q.name == "TagName") {
      if (Q.parent && /CloseTag$/.test(Q.parent.name)) {
        return H(i, Q, Q.from, a);
      } else {
        return K(i, O, Q, Q.from, a);
      }
    }
    if (Q.name == "StartTag") {
      return K(i, O, Q, a, a);
    }
    if (Q.name == "StartCloseTag" || Q.name == "IncompleteCloseTag") {
      return H(i, Q, a, a);
    }
    if (Q.name == "OpenTag" || Q.name == "SelfClosingTag" || Q.name == "AttributeName") {
      var y;
      var t;
      let $;
      let e;
      let S;
      y = Q;
      t = Q.name == "AttributeName" ? Q.from : a;
      S = (e = ($ = L(y)) ? O.tags[M(i.doc, $)] : null) && e.attrs ? Object.keys(e.attrs) : [];
      return {
        from: t,
        to: a,
        options: (e && e.globalAttrs === false ? S : S.length ? S.concat(O.globalAttrNames) : O.globalAttrNames).map(O => ({
          label: O,
          type: "property"
        })),
        validFor: J
      };
    }
    if (Q.name == "Is" || Q.name == "AttributeValue" || Q.name == "UnquotedAttributeValue") {
      return function (O, $, i, a, Q) {
        var e;
        let y = (e = i.parent) === null || e === undefined ? undefined : e.getChild("AttributeName");
        let t = [];
        let S;
        if (y) {
          let e = O.sliceDoc(y.from, y.to);
          let l = $.globalAttrs[e];
          if (!l) {
            let a = L(i);
            let Q = a ? $.tags[M(O.doc, a)] : null;
            l = (Q == null ? undefined : Q.attrs) && Q.attrs[e];
          }
          if (l) {
            let $ = O.sliceDoc(a, Q).toLowerCase();
            let i = "\"";
            let e = "\"";
            if (/^['"]/.test($)) {
              S = $[0] == "\"" ? /^[^"]*$/ : /^[^']*$/;
              i = "";
              e = O.sliceDoc(Q, Q + 1) == $[0] ? "" : $[0];
              $ = $.slice(1);
              a++;
            } else {
              S = /^[^\s<>='"]*$/;
            }
            for (let y of l) {
              t.push({
                label: y,
                apply: i + y + e,
                type: "constant"
              });
            }
          }
        }
        return {
          from: a,
          to: Q,
          options: t,
          validFor: S
        };
      }(i, O, Q, Q.name == "Is" ? a : Q.from, a);
    } else if ($.explicit && (e.name == "Element" || e.name == "Text" || e.name == "Document")) {
      return function (O, $, i, a) {
        let Q = [];
        let e = 0;
        for (let a of B(O.doc, i, $)) {
          Q.push({
            label: "<" + a,
            type: "type"
          });
        }
        for (let $ of D(O.doc, i)) {
          Q.push({
            label: "</" + $ + ">",
            type: "type",
            boost: 99 - e++
          });
        }
        return {
          from: a,
          to: a,
          options: Q,
          validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/
        };
      }(i, O, Q, a);
    } else {
      return null;
    }
  }
  function O$(O) {
    return OO(F.default, O);
  }
  function Oi(O) {
    let {
      extraTags: $,
      extraGlobalAttributes: i
    } = O;
    let a = i || $ ? new F($, i) : F.default;
    return O => OO(a, O);
  }
  let Oa = codemirrorJavascriptLangSupport.javascriptLanguage.parser.configure({
    top: "SingleExpression"
  });
  let OQ = [{
    tag: "script",
    attrs: O => O.type == "text/typescript" || O.lang == "ts",
    parser: codemirrorJavascriptLangSupport.typescriptLanguage.parser
  }, {
    tag: "script",
    attrs: O => O.type == "text/babel" || O.type == "text/jsx",
    parser: codemirrorJavascriptLangSupport.jsxLanguage.parser
  }, {
    tag: "script",
    attrs: O => O.type == "text/typescript-jsx",
    parser: codemirrorJavascriptLangSupport.tsxLanguage.parser
  }, {
    tag: "script",
    attrs: O => /^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(O.type),
    parser: Oa
  }, {
    tag: "script",
    attrs: O => !O.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(O.type),
    parser: codemirrorJavascriptLangSupport.javascriptLanguage.parser
  }, {
    tag: "style",
    attrs: O => (!O.lang || O.lang == "css") && (!O.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(O.type)),
    parser: codemirrorCssLanguageSupport.cssLanguage.parser
  }];
  let Oe = [{
    name: "style",
    parser: codemirrorCssLanguageSupport.cssLanguage.parser.configure({
      top: "Styles"
    })
  }].concat(N.map(O => ({
    name: O,
    parser: codemirrorJavascriptLangSupport.javascriptLanguage.parser
  })));
  let Oy = codemirrorLanguageSupport.Parser.define({
    name: "html",
    parser: b.configure({
      props: [codemirrorLanguageSupport.indentNodeProp.add({
        Element(O) {
          let $ = /^(\s*)(<\/)?/.exec(O.textAfter);
          if (O.node.to <= O.pos + $[0].length) {
            return O.continue();
          } else {
            return O.lineIndent(O.node.from) + ($[2] ? 0 : O.unit);
          }
        },
        "OpenTag CloseTag SelfClosingTag": O => O.column(O.node.from) + O.unit,
        Document(O) {
          if (O.pos + /\s*/.exec(O.textAfter)[0].length < O.node.to) {
            return O.continue();
          }
          let $ = null;
          let i;
          for (let i = O.node;;) {
            let O = i.lastChild;
            if (!O || O.name != "Element" || O.to != i.to) {
              break;
            }
            $ = i = O;
          }
          if ($ && (!(i = $.lastChild) || i.name != "CloseTag" && i.name != "SelfClosingTag")) {
            return O.lineIndent($.from) + O.unit;
          } else {
            return null;
          }
        }
      }), codemirrorLanguageSupport.foldState.add({
        Element(O) {
          let $ = O.firstChild;
          let i = O.lastChild;
          if ($ && $.name == "OpenTag") {
            return {
              from: $.to,
              to: i.name == "CloseTag" ? i.from : O.to
            };
          } else {
            return null;
          }
        }
      }), codemirrorLanguageSupport.foldNodeProp.add({
        "OpenTag CloseTag": O => O.getChild("TagName")
      })]
    }),
    languageData: {
      commentTokens: {
        block: {
          open: "<!--",
          close: "-->"
        }
      },
      indentOnInput: /^\s*<\/\w+\W$/,
      wordChars: "-._"
    }
  });
  let Ot = Oy.configure({
    wrap: U(OQ, Oe)
  });
  function OS(O = {}) {
    let $ = "";
    let i;
    if (O.matchClosingTags === false) {
      $ = "noMatch";
    }
    if (O.selfClosingTags === true) {
      $ = ($ ? $ + " " : "") + "selfClosing";
    }
    if (O.nestedLanguages && O.nestedLanguages.length || O.nestedAttributes && O.nestedAttributes.length) {
      i = U((O.nestedLanguages || []).concat(OQ), (O.nestedAttributes || []).concat(Oe));
    }
    let a = i ? Oy.configure({
      wrap: i,
      dialect: $
    }) : $ ? Ot.configure({
      dialect: $
    }) : Ot;
    return new codemirrorLanguageSupport.Language(a, [Ot.data.of({
      autocomplete: Oi(O)
    }), O.autoCloseTags !== false ? On : [], codemirrorJavascriptLangSupport.javascript().support, codemirrorCssLanguageSupport.css().support]);
  }
  let Ol = new Set("area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" "));
  let On = codemirrorEditorViewCore.EditorView.inputHandler.of((O, $, i, a, Q) => {
    if (O.composing || O.state.readOnly || $ != i || a != ">" && a != "/" || !Ot.isActiveAt(O.state, $, -1)) {
      return false;
    }
    let e = Q();
    let {
      state: y
    } = e;
    let t = y.changeByRange(O => {
      let e = y.doc.sliceString(O.from - 1, O.to) == a;
      let {
        head: t
      } = O;
      let S = codemirrorLanguageSupport.getTree(y).resolveInner(t, -1);
      let l;
      if (e && a == ">" && S.name == "EndTag") {
        let a = S.parent;
        if (a.parent?.lastChild?.name != "CloseTag" && (l = M(y.doc, a.parent, t)) && !Ol.has(l)) {
          let $ = t + +(y.doc.sliceString(t, t + 1) === ">");
          return {
            range: O,
            changes: {
              from: t,
              to: $,
              insert: `</${l}>`
            }
          };
        }
      } else if (e && a == "/" && S.name == "IncompleteCloseTag") {
        let O = S.parent;
        if (S.from == t - 2 && O.lastChild?.name != "CloseTag" && (l = M(y.doc, O, t)) && !Ol.has(l)) {
          let O = t + +(y.doc.sliceString(t, t + 1) === ">");
          let $ = `${l}>`;
          return {
            range: codemirrorStateCore.EditorSelection.cursor(t + $.length, -1),
            changes: {
              from: t,
              to: O,
              insert: $
            }
          };
        }
      }
      return {
        range: O
      };
    });
    return !t.changes.empty && (O.dispatch([e, y.update(t, {
      userEvent: "input.complete",
      scrollIntoView: true
    })]), true);
  });
  require.r(exports);
  require.d(exports, {
    htmlCompletionSource: function () {
      return O$;
    },
    htmlCompletionSourceWith: function () {
      return Oi;
    },
    htmlPlain: function () {
      return Oy;
    },
    autoCloseTags: function () {
      return On;
    },
    htmlLanguage: function () {
      return Ot;
    },
    html: function () {
      return OS;
    }
  });
}