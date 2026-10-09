// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'O' to 'lrParserDefinition'
// - Resolved require(556971) to 'lr-parser-definition'
// - Renamed variable 'a' to 'syntaxHighlightTags'
// - Resolved require(852622) to 'syntax-highlight-tags'
// - Renamed variable 'b' to 'codemirrorLanguageSupport'
// - Resolved require(976653) to 'codemirror-language-support'
// - Renamed variable 'L' to 'codemirrorStateCore'
// - Resolved require(980017) to 'codemirror-state-core'
// - Renamed variable 'H' to 'codemirrorEditorViewCore'
// - Resolved require(928053) to 'codemirror-editor-view-core'
// - Updated imported property 'Jq' to 'TokenType' (module 556971)
// - Updated imported property 'IK' to 'ContextTracker' (module 556971)
// - Updated imported property 'WQ' to 'LrParser' (module 556971)
// - Updated imported property 'Gv' to 'defineHighlighter' (module 852622)
// - Updated imported property 'pJ' to 'defaultTags' (module 852622)
// - Updated imported property 'qz' to 'getTree' (module 976653)
// - Updated imported property 'c' to 'indentUnitFacet' (module 976653)
// - Updated imported property 'qp' to 'Parser' (module 976653)
// - Updated imported property 'uj' to 'indentNodeProp' (module 976653)
// - Updated imported property 'vw' to 'continuedIndent' (module 976653)
// - Updated imported property 'x0' to 'foldState' (module 976653)
// - Updated imported property 'Dv' to 'getFoldRange' (module 976653)
// - Updated imported property 'ri' to 'Language' (module 976653)
// - Updated imported property 'q6' to 'AnnotationType' (module 980017)
// - Updated imported property 'Py' to 'EffectType' (module 980017)
// - Updated imported property 'gm' to 'charCodeAt' (module 980017)
// - Updated imported property 'nZ' to 'charLength' (module 980017)
// - Updated imported property 'bg' to 'fromCharCode' (module 980017)
// - Updated imported property 'r$' to 'Facet' (module 980017)
// - Updated imported property 'BO' to 'mergeConfig' (module 980017)
// - Updated imported property 'QQ' to 'PrecLevels' (module 980017)
// - Updated imported property 'jT' to 'EditorSelection' (module 980017)
// - Updated imported property 'gc' to 'MapMode' (module 980017)
// - Updated imported property 'Wl' to 'StateField' (module 980017)
// - Updated imported property 'xv' to 'Text' (module 980017)
// - Updated imported property 'YW' to 'Transaction' (module 980017)
// - Updated imported property 'uU' to 'RangeValue' (module 980017)
// - Updated imported property 'Nm' to 'directionConstants' (module 928053)
// - Updated imported property 'OO' to 'DecorationType' (module 928053)
// - Updated imported property 'hJ' to 'tooltipsFacet' (module 928053)
// - Updated imported property 'tk' to 'EditorView' (module 928053)
// - Updated imported property 'p' to 'decorationClass' (module 928053)
// - Updated imported property 'l9' to 'Decoration' (module 928053)
// - Updated imported property '$f' to 'keymapFacet' (module 928053)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 87794.dde3e6df.js
         * chunkId: 87794
         * moduleId: 405355
         */
module.exports = function (module, exports, require) {
  var n;
  var s;
  var r;
  var o;
  var lrParserDefinition = require("lr-parser-definition") /*id: 556971*/;
  var syntaxHighlightTags = require("syntax-highlight-tags") /*id: 852622*/;
  let l = new Set([25, 49, 50, 263, 65, 130, 56, 57, 238, 62, 63, 72, 73, 77, 60, 61, 151, 152, 155, 112]);
  function h(t) {
    return t == 10 || t == 13;
  }
  function c(t) {
    return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
  }
  let d = new lrParserDefinition.TokenType((t, e) => {
    let i;
    if (t.next < 0) {
      t.acceptToken(199);
    } else if (e.context.flags & f) {
      if (h(t.next)) {
        t.acceptToken(198, 1);
      }
    } else if (((i = t.peek(-1)) < 0 || h(i)) && e.canShift(197)) {
      let e = 0;
      while (t.next == 32 || t.next == 9) {
        t.advance();
        e++;
      }
      if (t.next == 10 || t.next == 13 || t.next == 35) {
        t.acceptToken(197, -e);
      }
    } else if (h(t.next)) {
      t.acceptToken(196, 1);
    }
  }, {
    contextual: true
  });
  let p = new lrParserDefinition.TokenType((t, e) => {
    let i = e.context;
    if (i.flags) {
      return;
    }
    let n = t.peek(-1);
    if (n == 10 || n == 13) {
      let e = 0;
      let n = 0;
      while (true) {
        if (t.next == 32) {
          e++;
        } else if (t.next == 9) {
          e += 8 - e % 8;
        } else {
          break;
        }
        t.advance();
        n++;
      }
      if (e != i.indent && t.next != 10 && t.next != 13 && t.next != 35) {
        if (e < i.indent) {
          t.acceptToken(195, -n);
        } else {
          t.acceptToken(194);
        }
      }
    }
  });
  let f = 1;
  function u(t, e, i) {
    this.parent = t;
    this.indent = e;
    this.flags = i;
    this.hash = (t ? t.hash + t.hash << 8 : 0) + e + (e << 4) + i + (i << 6);
  }
  let m = new u(null, 0, 0);
  let Q = new Map([[241, 0], [242, 4], [243, 8], [244, 12], [245, 16], [246, 20], [247, 24], [248, 28], [249, 32], [250, 36], [251, 40], [252, 44], [253, 48], [254, 52], [255, 56], [256, 60]].map(([t, e]) => [t, e | 2]));
  let g = new lrParserDefinition.ContextTracker({
    start: m,
    reduce: (t, e, i, n) => t.flags & f && l.has(e) || (e == 71 || e == 72) && t.flags & 2 ? t.parent : t,
    shift: (t, e, i, n) => e == 194 ? new u(t, function (t) {
      let e = 0;
      for (let i = 0; i < t.length; i++) {
        e += t.charCodeAt(i) == 9 ? 8 - e % 8 : 1;
      }
      return e;
    }(n.read(n.pos, i.pos)), 0) : e == 195 ? t.parent : e == 24 || e == 55 || e == 59 || e == 3 ? new u(t, 0, f) : Q.has(e) ? new u(t, 0, Q.get(e) | t.flags & f) : t,
    hash: t => t.hash
  });
  let T = new lrParserDefinition.TokenType(t => {
    for (let e = 0; e < 5; e++) {
      if (t.next != "print".charCodeAt(e)) {
        return;
      }
      t.advance();
    }
    if (!/\w/.test(String.fromCharCode(t.next))) {
      for (let e = 0;; e++) {
        let i = t.peek(e);
        if (i != 32 && i != 9) {
          if (i != 40 && i != 46 && i != 10 && i != 13 && i != 35) {
            t.acceptToken(1);
          }
          return;
        }
      }
    }
  });
  let S = new lrParserDefinition.TokenType((t, e) => {
    let {
      flags: i
    } = e.context;
    let n = i & 4 ? 34 : 39;
    let s = (i & 8) > 0;
    let r = !(i & 16);
    let o = (i & 32) > 0;
    let O = t.pos;
    while (!(t.next < 0)) {
      if (o && t.next == 123) {
        if (t.peek(1) == 123) {
          t.advance(2);
        } else {
          if (t.pos == O) {
            t.acceptToken(3, 1);
            return;
          }
          break;
        }
      } else if (r && t.next == 92) {
        if (t.pos == O) {
          t.advance();
          let e = t.next;
          if (e >= 0) {
            t.advance();
            (function (t, e) {
              if (e == 111) {
                for (let e = 0; e < 2 && t.next >= 48 && t.next <= 55; e++) {
                  t.advance();
                }
              } else if (e == 120) {
                for (let e = 0; e < 2 && c(t.next); e++) {
                  t.advance();
                }
              } else if (e == 117) {
                for (let e = 0; e < 4 && c(t.next); e++) {
                  t.advance();
                }
              } else if (e == 85) {
                for (let e = 0; e < 8 && c(t.next); e++) {
                  t.advance();
                }
              } else if (e == 78 && t.next == 123) {
                for (t.advance(); t.next >= 0 && t.next != 125 && t.next != 39 && t.next != 34 && t.next != 10;) {
                  t.advance();
                }
                if (t.next == 125) {
                  t.advance();
                }
              }
            })(t, e);
          }
          t.acceptToken(2);
          return;
        }
        break;
      } else if (t.next != n || s && (t.peek(1) != n || t.peek(2) != n)) {
        if (t.next == 10) {
          if (s) {
            t.advance();
          } else if (t.pos == O) {
            t.acceptToken(201);
            return;
          }
          break;
        }
        t.advance();
      } else {
        if (t.pos == O) {
          t.acceptToken(201, s ? 3 : 1);
          return;
        }
        break;
      }
    }
    if (t.pos > O) {
      t.acceptToken(200);
    }
  });
  let x = syntaxHighlightTags.defineHighlighter({
    "async \"*\" \"**\" FormatConversion FormatSpec": syntaxHighlightTags.defaultTags.modifier,
    "for while if elif else try except finally return raise break continue with pass assert await yield match case": syntaxHighlightTags.defaultTags.controlKeyword,
    "in not and or is del": syntaxHighlightTags.defaultTags.operatorKeyword,
    "from def class global nonlocal lambda": syntaxHighlightTags.defaultTags.definitionKeyword,
    import: syntaxHighlightTags.defaultTags.moduleKeyword,
    "with as print": syntaxHighlightTags.defaultTags.keyword,
    Boolean: syntaxHighlightTags.defaultTags.bool,
    None: syntaxHighlightTags.defaultTags.null,
    VariableName: syntaxHighlightTags.defaultTags.variableName,
    "CallExpression/VariableName": syntaxHighlightTags.defaultTags.function(syntaxHighlightTags.defaultTags.variableName),
    "FunctionDefinition/VariableName": syntaxHighlightTags.defaultTags.function(syntaxHighlightTags.defaultTags.definition(syntaxHighlightTags.defaultTags.variableName)),
    "ClassDefinition/VariableName": syntaxHighlightTags.defaultTags.definition(syntaxHighlightTags.defaultTags.className),
    PropertyName: syntaxHighlightTags.defaultTags.propertyName,
    "CallExpression/MemberExpression/PropertyName": syntaxHighlightTags.defaultTags.function(syntaxHighlightTags.defaultTags.propertyName),
    Comment: syntaxHighlightTags.defaultTags.lineComment,
    Number: syntaxHighlightTags.defaultTags.number,
    String: syntaxHighlightTags.defaultTags.string,
    FormatString: syntaxHighlightTags.defaultTags.special(syntaxHighlightTags.defaultTags.string),
    Escape: syntaxHighlightTags.defaultTags.escape,
    UpdateOp: syntaxHighlightTags.defaultTags.updateOperator,
    "ArithOp!": syntaxHighlightTags.defaultTags.arithmeticOperator,
    BitOp: syntaxHighlightTags.defaultTags.bitwiseOperator,
    CompareOp: syntaxHighlightTags.defaultTags.compareOperator,
    AssignOp: syntaxHighlightTags.defaultTags.definitionOperator,
    Ellipsis: syntaxHighlightTags.defaultTags.punctuation,
    At: syntaxHighlightTags.defaultTags.meta,
    "( )": syntaxHighlightTags.defaultTags.paren,
    "[ ]": syntaxHighlightTags.defaultTags.squareBracket,
    "{ }": syntaxHighlightTags.defaultTags.brace,
    ".": syntaxHighlightTags.defaultTags.derefOperator,
    ", ;": syntaxHighlightTags.defaultTags.separator
  });
  let k = {
    __proto__: null,
    await: 44,
    or: 54,
    and: 56,
    in: 60,
    not: 62,
    is: 64,
    if: 70,
    else: 72,
    lambda: 76,
    yield: 94,
    from: 96,
    async: 102,
    for: 104,
    None: 162,
    True: 164,
    False: 164,
    del: 178,
    pass: 182,
    break: 186,
    continue: 190,
    return: 194,
    raise: 202,
    import: 206,
    as: 208,
    global: 212,
    nonlocal: 214,
    assert: 218,
    type: 223,
    elif: 236,
    while: 240,
    try: 246,
    except: 248,
    finally: 250,
    with: 254,
    def: 258,
    class: 268,
    match: 279,
    case: 285
  };
  let y = lrParserDefinition.LrParser.deserialize({
    version: 14,
    states: "##jO`QeOOP$}OSOOO&WQtO'#HUOOQS'#Co'#CoOOQS'#Cp'#CpO'vQdO'#CnO*UQtO'#HTOOQS'#HU'#HUOOQS'#DU'#DUOOQS'#HT'#HTO*rQdO'#D_O+VQdO'#DfO+gQdO'#DjO+zOWO'#DuO,VOWO'#DvO.[QtO'#GuOOQS'#Gu'#GuO'vQdO'#GtO0ZQtO'#GtOOQS'#Eb'#EbO0rQdO'#EcOOQS'#Gs'#GsO0|QdO'#GrOOQV'#Gr'#GrO1XQdO'#FYOOQS'#G^'#G^O1^QdO'#FXOOQV'#IS'#ISOOQV'#Gq'#GqOOQV'#Fq'#FqQ`QeOOO'vQdO'#CqO1lQdO'#C}O1sQdO'#DRO2RQdO'#HYO2cQtO'#EVO'vQdO'#EWOOQS'#EY'#EYOOQS'#E['#E[OOQS'#E^'#E^O2wQdO'#E`O3_QdO'#EdO3rQdO'#EfO3zQtO'#EfO1XQdO'#EiO0rQdO'#ElO1XQdO'#EnO0rQdO'#EtO0rQdO'#EwO4VQdO'#EyO4^QdO'#FOO4iQdO'#EzO0rQdO'#FOO1XQdO'#FQO1XQdO'#FVO4nQdO'#F[P4uOdO'#GpPOOO)CBd)CBdOOQS'#Ce'#CeOOQS'#Cf'#CfOOQS'#Cg'#CgOOQS'#Ch'#ChOOQS'#Ci'#CiOOQS'#Cj'#CjOOQS'#Cl'#ClO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO'vQdO,59OO5TQdO'#DoOOQS,5:Y,5:YO5hQdO'#HdOOQS,5:],5:]O5uQ!fO,5:]O5zQtO,59YO1lQdO,59bO1lQdO,59bO1lQdO,59bO8jQdO,59bO8oQdO,59bO8vQdO,59jO8}QdO'#HTO:TQdO'#HSOOQS'#HS'#HSOOQS'#D['#D[O:lQdO,59aO'vQdO,59aO:zQdO,59aOOQS,59y,59yO;PQdO,5:RO'vQdO,5:ROOQS,5:Q,5:QO;_QdO,5:QO;dQdO,5:XO'vQdO,5:XO'vQdO,5:VOOQS,5:U,5:UO;uQdO,5:UO;zQdO,5:WOOOW'#Fy'#FyO<POWO,5:aOOQS,5:a,5:aO<[QdO'#HwOOOW'#Dw'#DwOOOW'#Fz'#FzO<lOWO,5:bOOQS,5:b,5:bOOQS'#F}'#F}O<zQtO,5:iO?lQtO,5=`O@VQ#xO,5=`O@vQtO,5=`OOQS,5:},5:}OA_QeO'#GWOBqQdO,5;^OOQV,5=^,5=^OB|QtO'#IPOCkQdO,5;tOOQS-E:[-E:[OOQV,5;s,5;sO4dQdO'#FQOOQV-E9o-E9oOCsQtO,59]OEzQtO,59iOFeQdO'#HVOFpQdO'#HVO1XQdO'#HVOF{QdO'#DTOGTQdO,59mOGYQdO'#HZO'vQdO'#HZO0rQdO,5=tOOQS,5=t,5=tO0rQdO'#EROOQS'#ES'#ESOGwQdO'#GPOHXQdO,58|OHXQdO,58|O*xQdO,5:oOHgQtO'#H]OOQS,5:r,5:rOOQS,5:z,5:zOHzQdO,5;OOI]QdO'#IOO1XQdO'#H}OOQS,5;Q,5;QOOQS'#GT'#GTOIqQtO,5;QOJPQdO,5;QOJUQdO'#IQOOQS,5;T,5;TOJdQdO'#H|OOQS,5;W,5;WOJuQdO,5;YO4iQdO,5;`O4iQdO,5;cOJ}QtO'#ITO'vQdO'#ITOKXQdO,5;eO4VQdO,5;eO0rQdO,5;jO1XQdO,5;lOK^QeO'#EuOLjQgO,5;fO!!kQdO'#IUO4iQdO,5;jO!!vQdO,5;lO!#OQdO,5;qO!#ZQtO,5;vO'vQdO,5;vPOOO,5=[,5=[P!#bOSO,5=[P!#jOdO,5=[O!&bQtO1G.jO!&iQtO1G.jO!)YQtO1G.jO!)dQtO1G.jO!+}QtO1G.jO!,bQtO1G.jO!,uQdO'#HcO!-TQtO'#GuO0rQdO'#HcO!-_QdO'#HbOOQS,5:Z,5:ZO!-gQdO,5:ZO!-lQdO'#HeO!-wQdO'#HeO!.[QdO,5>OOOQS'#Ds'#DsOOQS1G/w1G/wOOQS1G.|1G.|O!/[QtO1G.|O!/cQtO1G.|O1lQdO1G.|O!0OQdO1G/UOOQS'#DZ'#DZO0rQdO,59tOOQS1G.{1G.{O!0VQdO1G/eO!0gQdO1G/eO!0oQdO1G/fO'vQdO'#H[O!0tQdO'#H[O!0yQtO1G.{O!1ZQdO,59iO!2aQdO,5=zO!2qQdO,5=zO!2yQdO1G/mO!3OQtO1G/mOOQS1G/l1G/lO!3`QdO,5=uO!4VQdO,5=uO0rQdO1G/qO!4tQdO1G/sO!4yQtO1G/sO!5ZQtO1G/qOOQS1G/p1G/pOOQS1G/r1G/rOOOW-E9w-E9wOOQS1G/{1G/{O!5kQdO'#HxO0rQdO'#HxO!5|QdO,5>cOOOW-E9x-E9xOOQS1G/|1G/|OOQS-E9{-E9{O!6[Q#xO1G2zO!6{QtO1G2zO'vQdO,5<jOOQS,5<j,5<jOOQS-E9|-E9|OOQS,5<r,5<rOOQS-E:U-E:UOOQV1G0x1G0xO1XQdO'#GRO!7dQtO,5>kOOQS1G1`1G1`O!8RQdO1G1`OOQS'#DV'#DVO0rQdO,5=qOOQS,5=q,5=qO!8WQdO'#FrO!8cQdO,59oO!8kQdO1G/XO!8uQtO,5=uOOQS1G3`1G3`OOQS,5:m,5:mO!9fQdO'#GtOOQS,5<k,5<kOOQS-E9}-E9}O!9wQdO1G.hOOQS1G0Z1G0ZO!:VQdO,5=wO!:gQdO,5=wO0rQdO1G0jO0rQdO1G0jO!:xQdO,5>jO!;ZQdO,5>jO1XQdO,5>jO!;lQdO,5>iOOQS-E:R-E:RO!;qQdO1G0lO!;|QdO1G0lO!<RQdO,5>lO!<aQdO,5>lO!<oQdO,5>hO!=VQdO,5>hO!=hQdO'#EpO0rQdO1G0tO!=sQdO1G0tO!=xQgO1G0zO!AvQgO1G0}O!EqQdO,5>oO!E{QdO,5>oO!FTQtO,5>oO0rQdO1G1PO!F_QdO1G1PO4iQdO1G1UO!!vQdO1G1WOOQV,5;a,5;aO!FdQfO,5;aO!FiQgO1G1QO!JjQdO'#GZO4iQdO1G1QO4iQdO1G1QO!JzQdO,5>pO!KXQdO,5>pO1XQdO,5>pOOQV1G1U1G1UO!KaQdO'#FSO!KrQ!fO1G1WO!KzQdO1G1WOOQV1G1]1G1]O4iQdO1G1]O!LPQdO1G1]O!LXQdO'#F^OOQV1G1b1G1bO!#ZQtO1G1bPOOO1G2v1G2vP!L^OSO1G2vOOQS,5=},5=}OOQS'#Dp'#DpO0rQdO,5=}O!LfQdO,5=|O!LyQdO,5=|OOQS1G/u1G/uO!MRQdO,5>PO!McQdO,5>PO!MkQdO,5>PO!NOQdO,5>PO!N`QdO,5>POOQS1G3j1G3jOOQS7+$h7+$hO!8kQdO7+$pO#!RQdO1G.|O#!YQdO1G.|OOQS1G/`1G/`OOQS,5<`,5<`O'vQdO,5<`OOQS7+%P7+%PO#!aQdO7+%POOQS-E9r-E9rOOQS7+%Q7+%QO#!qQdO,5=vO'vQdO,5=vOOQS7+$g7+$gO#!vQdO7+%PO##OQdO7+%QO##TQdO1G3fOOQS7+%X7+%XO##eQdO1G3fO##mQdO7+%XOOQS,5<_,5<_O'vQdO,5<_O##rQdO1G3aOOQS-E9q-E9qO#$iQdO7+%]OOQS7+%_7+%_O#$wQdO1G3aO#%fQdO7+%_O#%kQdO1G3gO#%{QdO1G3gO#&TQdO7+%]O#&YQdO,5>dO#&sQdO,5>dO#&sQdO,5>dOOQS'#Dx'#DxO#'UO&jO'#DzO#'aO`O'#HyOOOW1G3}1G3}O#'fQdO1G3}O#'nQdO1G3}O#'yQ#xO7+(fO#(jQtO1G2UP#)TQdO'#GOOOQS,5<m,5<mOOQS-E:P-E:POOQS7+&z7+&zOOQS1G3]1G3]OOQS,5<^,5<^OOQS-E9p-E9pOOQS7+$s7+$sO#)bQdO,5=`O#){QdO,5=`O#*^QtO,5<aO#*qQdO1G3cOOQS-E9s-E9sOOQS7+&U7+&UO#+RQdO7+&UO#+aQdO,5<nO#+uQdO1G4UOOQS-E:Q-E:QO#,WQdO1G4UOOQS1G4T1G4TOOQS7+&W7+&WO#,iQdO7+&WOOQS,5<p,5<pO#,tQdO1G4WOOQS-E:S-E:SOOQS,5<l,5<lO#-SQdO1G4SOOQS-E:O-E:OO1XQdO'#EqO#-jQdO'#EqO#-uQdO'#IRO#-}QdO,5;[OOQS7+&`7+&`O0rQdO7+&`O#.SQgO7+&fO!JmQdO'#GXO4iQdO7+&fO4iQdO7+&iO#2QQtO,5<tO'vQdO,5<tO#2[QdO1G4ZOOQS-E:W-E:WO#2fQdO1G4ZO4iQdO7+&kO0rQdO7+&kOOQV7+&p7+&pO!KrQ!fO7+&rO!KzQdO7+&rO`QeO1G0{OOQV-E:X-E:XO4iQdO7+&lO4iQdO7+&lOOQV,5<u,5<uO#2nQdO,5<uO!JmQdO,5<uOOQV7+&l7+&lO#2yQgO7+&lO#6tQdO,5<vO#7PQdO1G4[OOQS-E:Y-E:YO#7^QdO1G4[O#7fQdO'#IWO#7tQdO'#IWO1XQdO'#IWOOQS'#IW'#IWO#8PQdO'#IVOOQS,5;n,5;nO#8XQdO,5;nO0rQdO'#FUOOQV7+&r7+&rO4iQdO7+&rOOQV7+&w7+&wO4iQdO7+&wO#8^QfO,5;xOOQV7+&|7+&|POOO7+(b7+(bO#8cQdO1G3iOOQS,5<c,5<cO#8qQdO1G3hOOQS-E9u-E9uO#9UQdO,5<dO#9aQdO,5<dO#9tQdO1G3kOOQS-E9v-E9vO#:UQdO1G3kO#:^QdO1G3kO#:nQdO1G3kO#:UQdO1G3kOOQS<<H[<<H[O#:yQtO1G1zOOQS<<Hk<<HkP#;WQdO'#FtO8vQdO1G3bO#;eQdO1G3bO#;jQdO<<HkOOQS<<Hl<<HlO#;zQdO7+)QOOQS<<Hs<<HsO#<[QtO1G1yP#<{QdO'#FsO#=YQdO7+)RO#=jQdO7+)RO#=rQdO<<HwO#=wQdO7+({OOQS<<Hy<<HyO#>nQdO,5<bO'vQdO,5<bOOQS-E9t-E9tOOQS<<Hw<<HwOOQS,5<g,5<gO0rQdO,5<gO#>sQdO1G4OOOQS-E9y-E9yO#?^QdO1G4OO<[QdO'#H{OOOO'#D{'#D{OOOO'#F|'#F|O#?oO&jO,5:fOOOW,5>e,5>eOOOW7+)i7+)iO#?zQdO7+)iO#@SQdO1G2zO#@mQdO1G2zP'vQdO'#FuO0rQdO<<IpO1XQdO1G2YP1XQdO'#GSO#AOQdO7+)pO#AaQdO7+)pOOQS<<Ir<<IrP1XQdO'#GUP0rQdO'#GQOOQS,5;],5;]O#ArQdO,5>mO#BQQdO,5>mOOQS1G0v1G0vOOQS<<Iz<<IzOOQV-E:V-E:VO4iQdO<<JQOOQV,5<s,5<sO4iQdO,5<sOOQV<<JQ<<JQOOQV<<JT<<JTO#BYQtO1G2`P#BdQdO'#GYO#BkQdO7+)uO#BuQgO<<JVO4iQdO<<JVOOQV<<J^<<J^O4iQdO<<J^O!KrQ!fO<<J^O#FpQgO7+&gOOQV<<JW<<JWO#FzQgO<<JWOOQV1G2a1G2aO1XQdO1G2aO#JuQdO1G2aO4iQdO<<JWO1XQdO1G2bP0rQdO'#G[O#KQQdO7+)vO#K_QdO7+)vOOQS'#FT'#FTO0rQdO,5>rO#KgQdO,5>rOOQS,5>r,5>rO#KrQdO,5>qO#LTQdO,5>qOOQS1G1Y1G1YOOQS,5;p,5;pOOQV<<Jc<<JcO#L]QdO1G1dOOQS7+)T7+)TP#LbQdO'#FwO#LrQdO1G2OO#MVQdO1G2OO#MgQdO1G2OP#MrQdO'#FxO#NPQdO7+)VO#NaQdO7+)VO#NaQdO7+)VO#NiQdO7+)VO#NyQdO7+(|O8vQdO7+(|OOQSAN>VAN>VO$ dQdO<<LmOOQSAN>cAN>cO0rQdO1G1|O$ tQtO1G1|P$!OQdO'#FvOOQS1G2R1G2RP$!]QdO'#F{O$!jQdO7+)jO$#TQdO,5>gOOOO-E9z-E9zOOOW<<MT<<MTO$#cQdO7+(fOOQSAN?[AN?[OOQS7+'t7+'tO$#|QdO<<M[OOQS,5<q,5<qO$$_QdO1G4XOOQS-E:T-E:TOOQVAN?lAN?lOOQV1G2_1G2_O4iQdOAN?qO$$mQgOAN?qOOQVAN?xAN?xO4iQdOAN?xOOQV<<JR<<JRO4iQdOAN?rO4iQdO7+'{OOQV7+'{7+'{O1XQdO7+'{OOQVAN?rAN?rOOQS7+'|7+'|O$(hQdO<<MbOOQS1G4^1G4^O0rQdO1G4^OOQS,5<w,5<wO$(uQdO1G4]OOQS-E:Z-E:ZOOQU'#G_'#G_O$)WQfO7+'OO$)cQdO'#F_O$*jQdO7+'jO$*zQdO7+'jOOQS7+'j7+'jO$+VQdO<<LqO$+gQdO<<LqO$+gQdO<<LqO$+oQdO'#H^OOQS<<Lh<<LhO$+yQdO<<LhOOQS7+'h7+'hOOQS'#D|'#D|OOOO1G4R1G4RO$,dQdO1G4RO$,lQdO1G4RP!=hQdO'#GVOOQVG25]G25]O4iQdOG25]OOQVG25dG25dOOQVG25^G25^OOQV<<Kg<<KgO4iQdO<<KgOOQS7+)x7+)xP$,wQdO'#G]OOQU-E:]-E:]OOQV<<Jj<<JjO$-kQtO'#FaOOQS'#Fc'#FcO$-{QdO'#FbO$.mQdO'#FbOOQS'#Fb'#FbO$.rQdO'#IYO$)cQdO'#FiO$)cQdO'#FiO$/ZQdO'#FjO$)cQdO'#FkO$/bQdO'#IZOOQS'#IZ'#IZO$0PQdO,5;yOOQS<<KU<<KUO$0XQdO<<KUO$0iQdOANB]O$0yQdOANB]O$1RQdO'#H_OOQS'#H_'#H_O1sQdO'#DcO$1lQdO,5=xOOQSANBSANBSOOOO7+)m7+)mO$2TQdO7+)mOOQVLD*wLD*wOOQVANARANARO5uQ!fO'#GaO$2]QtO,5<SO$)cQdO'#FmOOQS,5<W,5<WOOQS'#Fd'#FdO$2}QdO,5;|O$3SQdO,5;|OOQS'#Fg'#FgO$)cQdO'#G`O$3tQdO,5<QO$4`QdO,5>tO$4pQdO,5>tO1XQdO,5<PO$5RQdO,5<TO$5WQdO,5<TO$)cQdO'#I[O$5]QdO'#I[O$5bQdO,5<UOOQS,5<V,5<VO'vQdO'#FpOOQU1G1e1G1eO4iQdO1G1eOOQSAN@pAN@pO$5gQdOG27wO$5wQdO,59}OOQS1G3d1G3dOOOO<<MX<<MXOOQS,5<{,5<{OOQS-E:_-E:_O$5|QtO'#FaO$6TQdO'#I]O$6cQdO'#I]O$6kQdO,5<XOOQS1G1h1G1hO$6pQdO1G1hO$6uQdO,5<zOOQS-E:^-E:^O$7aQdO,5=OO$7xQdO1G4`OOQS-E:b-E:bOOQS1G1k1G1kOOQS1G1o1G1oO$8YQdO,5>vO$)cQdO,5>vOOQS1G1p1G1pO$8hQtO,5<[OOQU7+'P7+'PO$+oQdO1G/iO$)cQdO,5<YO$8oQdO,5>wO$8vQdO,5>wOOQS1G1s1G1sOOQS7+'S7+'SP$)cQdO'#GdO$9OQdO1G4bO$9YQdO1G4bO$9bQdO1G4bOOQS7+%T7+%TO$9pQdO1G1tO$:OQtO'#FaO$:VQdO,5<}OOQS,5<},5<}O$:eQdO1G4cOOQS-E:a-E:aO$)cQdO,5<|O$:lQdO,5<|O$:qQdO7+)|OOQS-E:`-E:`O$:{QdO7+)|O$)cQdO,5<ZP$)cQdO'#GcO$;TQdO1G2hO$)cQdO1G2hP$;cQdO'#GbO$;jQdO<<MhO$;tQdO1G1uO$<SQdO7+(SO8vQdO'#C}O8vQdO,59bO8vQdO,59bO8vQdO,59bO$<bQtO,5=`O8vQdO1G.|O0rQdO1G/XO0rQdO7+$pP$<uQdO'#GOO'vQdO'#GtO$=SQdO,59bO$=XQdO,59bO$=`QdO,59mO$=eQdO1G/UO1sQdO'#DRO8vQdO,59j",
    stateData: "$>O~O%cOS%^OSSOS%]PQ~OPdOVaOfoOhYOopOs!POvqO!PrO!Q{O!T!SO!U!RO!XZO!][O!h`O!r`O!s`O!t`O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO#l!QO#o!TO#s!UO#u!VO#z!WO#}hO$P!XO%oRO%pRO%tSO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O~O%]!YO~OV!aO_!aOa!bOh!iO!X!kO!f!mO%j![O%k!]O%l!^O%m!_O%n!_O%o!`O%p!`O%q!aO%r!aO%s!aO~Ok%xXl%xXm%xXn%xXo%xXp%xXs%xXz%xX{%xX!x%xX#g%xX%[%xX%_%xX%z%xXg%xX!T%xX!U%xX%{%xX!W%xX![%xX!Q%xX#[%xXt%xX!m%xX~P%SOfoOhYO!XZO!][O!h`O!r`O!s`O!t`O%oRO%pRO%tSO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O~Oz%wX{%wX#g%wX%[%wX%_%wX%z%wX~Ok!pOl!qOm!oOn!oOo!rOp!sOs!tO!x%wX~P)pOV!zOg!|Oo0cOv0qO!PrO~P'vOV#OOo0cOv0qO!W#PO~P'vOV#SOa#TOo0cOv0qO![#UO~P'vOQ#XO%`#XO%a#ZO~OQ#^OR#[O%`#^O%a#`O~OV%iX_%iXa%iXh%iXk%iXl%iXm%iXn%iXo%iXp%iXs%iXz%iX!X%iX!f%iX%j%iX%k%iX%l%iX%m%iX%n%iX%o%iX%p%iX%q%iX%r%iX%s%iXg%iX!T%iX!U%iX~O&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O&c^O&d^O&e^O&f^O&g^O&h^O&i^O&j^O{%iX!x%iX#g%iX%[%iX%_%iX%z%iX%{%iX!W%iX![%iX!Q%iX#[%iXt%iX!m%iX~P,eOz#dO{%hX!x%hX#g%hX%[%hX%_%hX%z%hX~Oo0cOv0qO~P'vO#g#gO%[#iO%_#iO~O%uWO~O!T#nO#u!VO#z!WO#}hO~OopO~P'vOV#sOa#tO%uWO{wP~OV#xOo0cOv0qO!Q#yO~P'vO{#{O!x$QO%z#|O#g!yX%[!yX%_!yX~OV#xOo0cOv0qO#g#SX%[#SX%_#SX~P'vOo0cOv0qO#g#WX%[#WX%_#WX~P'vOh$WO%uWO~O!f$YO!r$YO%uWO~OV$eO~P'vO!U$gO#s$hO#u$iO~O{$jO~OV$qO~P'vOS$sO%[$rO%_$rO%c$tO~OV$}Oa$}Og%POo0cOv0qO~P'vOo0cOv0qO{%SO~P'vO&Y%UO~Oa!bOh!iO!X!kO!f!mOVba_bakbalbambanbaobapbasbazba{ba!xba#gba%[ba%_ba%jba%kba%lba%mba%nba%oba%pba%qba%rba%sba%zbagba!Tba!Uba%{ba!Wba![ba!Qba#[batba!mba~On%ZO~Oo%ZO~P'vOo0cO~P'vOk0eOl0fOm0dOn0dOo0mOp0nOs0rOg%wX!T%wX!U%wX%{%wX!W%wX![%wX!Q%wX#[%wX!m%wX~P)pO%{%]Og%vXz%vX!T%vX!U%vX!W%vX{%vX~Og%_Oz%`O!T%dO!U%cO~Og%_O~Oz%gO!T%dO!U%cO!W&SX~O!W%kO~Oz%lO{%nO!T%dO!U%cO![%}X~O![%rO~O![%sO~OQ#XO%`#XO%a%uO~OV%wOo0cOv0qO!PrO~P'vOQ#^OR#[O%`#^O%a%zO~OV!qa_!qaa!qah!qak!qal!qam!qan!qao!qap!qas!qaz!qa{!qa!X!qa!f!qa!x!qa#g!qa%[!qa%_!qa%j!qa%k!qa%l!qa%m!qa%n!qa%o!qa%p!qa%q!qa%r!qa%s!qa%z!qag!qa!T!qa!U!qa%{!qa!W!qa![!qa!Q!qa#[!qat!qa!m!qa~P#yOz%|O{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~P%SOV&OOopOvqO{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~P'vOz%|O{%ha!x%ha#g%ha%[%ha%_%ha%z%ha~OPdOVaOopOvqO!PrO!Q{O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO#g$zX%[$zX%_$zX~P'vO#g#gO%[&TO%_&TO~O!f&UOh&sX%[&sXz&sX#[&sX#g&sX%_&sX#Z&sXg&sX~Oh!iO%[&WO~Okealeameaneaoeapeaseazea{ea!xea#gea%[ea%_ea%zeagea!Tea!Uea%{ea!Wea![ea!Qea#[eatea!mea~P%SOsqazqa{qa#gqa%[qa%_qa%zqa~Ok!pOl!qOm!oOn!oOo!rOp!sO!xqa~PEcO%z&YOz%yX{%yX~O%uWOz%yX{%yX~Oz&]O{wX~O{&_O~Oz%lO#g%}X%[%}X%_%}Xg%}X{%}X![%}X!m%}X%z%}X~OV0lOo0cOv0qO!PrO~P'vO%z#|O#gUa%[Ua%_Ua~Oz&hO#g&PX%[&PX%_&PXn&PX~P%SOz&kO!Q&jO#g#Wa%[#Wa%_#Wa~Oz&lO#[&nO#g&rX%[&rX%_&rXg&rX~O!f$YO!r$YO#Z&qO%uWO~O#Z&qO~Oz&sO#g&tX%[&tX%_&tX~Oz&uO#g&pX%[&pX%_&pX{&pX~O!X&wO%z&xO~Oz&|On&wX~P%SOn'PO~OPdOVaOopOvqO!PrO!Q{O!{tO!}uO#PvO#RwO#TxO#XyO#ZzO#^|O#_|O#a}O#c!OO%['UO~P'vOt'YO#p'WO#q'XOP#naV#naf#nah#nao#nas#nav#na!P#na!Q#na!T#na!U#na!X#na!]#na!h#na!r#na!s#na!t#na!{#na!}#na#P#na#R#na#T#na#X#na#Z#na#^#na#_#na#a#na#c#na#l#na#o#na#s#na#u#na#z#na#}#na$P#na%X#na%o#na%p#na%t#na%u#na&Z#na&[#na&]#na&^#na&_#na&`#na&a#na&b#na&c#na&d#na&e#na&f#na&g#na&h#na&i#na&j#na%Z#na%_#na~Oz'ZO#[']O{&xX~Oh'_O!X&wO~Oh!iO{$jO!X&wO~O{'eO~P%SO%['hO%_'hO~OS'iO%['hO%_'hO~OV!aO_!aOa!bOh!iO!X!kO!f!mO%l!^O%m!_O%n!_O%o!`O%p!`O%q!aO%r!aO%s!aOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~O%k!]O~P!#uO%kWi~P!#uOV!aO_!aOa!bOh!iO!X!kO!f!mO%o!`O%p!`O%q!aO%r!aO%s!aOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%kWi%lWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~O%m!_O%n!_O~P!&pO%mWi%nWi~P!&pOa!bOh!iO!X!kO!f!mOkWilWimWinWioWipWisWizWi{Wi!xWi#gWi%[Wi%_Wi%jWi%kWi%lWi%mWi%nWi%oWi%pWi%zWigWi!TWi!UWi%{Wi!WWi![Wi!QWi#[WitWi!mWi~OV!aO_!aO%q!aO%r!aO%s!aO~P!)nOVWi_Wi%qWi%rWi%sWi~P!)nO!T%dO!U%cOg&VXz&VX~O%z'kO%{'kO~P,eOz'mOg&UX~Og'oO~Oz'pO{'rO!W&XX~Oo0cOv0qOz'pO{'sO!W&XX~P'vO!W'uO~Om!oOn!oOo!rOp!sOkjisjizji{ji!xji#gji%[ji%_ji%zji~Ol!qO~P!.aOlji~P!.aOk0eOl0fOm0dOn0dOo0mOp0nO~Ot'wO~P!/jOV'|Og'}Oo0cOv0qO~P'vOg'}Oz(OO~Og(QO~O!U(SO~Og(TOz(OO!T%dO!U%cO~P%SOk0eOl0fOm0dOn0dOo0mOp0nOgqa!Tqa!Uqa%{qa!Wqa![qa!Qqa#[qatqa!mqa~PEcOV'|Oo0cOv0qO!W&Sa~P'vOz(WO!W&Sa~O!W(XO~Oz(WO!T%dO!U%cO!W&Sa~P%SOV(]Oo0cOv0qO![%}a#g%}a%[%}a%_%}ag%}a{%}a!m%}a%z%}a~P'vOz(^O![%}a#g%}a%[%}a%_%}ag%}a{%}a!m%}a%z%}a~O![(aO~Oz(^O!T%dO!U%cO![%}a~P%SOz(dO!T%dO!U%cO![&Ta~P%SOz(gO{&lX![&lX!m&lX%z&lX~O{(kO![(mO!m(nO%z(jO~OV&OOopOvqO{%hi!x%hi#g%hi%[%hi%_%hi%z%hi~P'vOz(pO{%hi!x%hi#g%hi%[%hi%_%hi%z%hi~O!f&UOh&sa%[&saz&sa#[&sa#g&sa%_&sa#Z&sag&sa~O%[(uO~OV#sOa#tO%uWO~Oz&]O{wa~OopOvqO~P'vOz(^O#g%}a%[%}a%_%}ag%}a{%}a![%}a!m%}a%z%}a~P%SOz(zO#g%hX%[%hX%_%hX%z%hX~O%z#|O#gUi%[Ui%_Ui~O#g&Pa%[&Pa%_&Pan&Pa~P'vOz(}O#g&Pa%[&Pa%_&Pan&Pa~O%uWO#g&ra%[&ra%_&rag&ra~Oz)SO#g&ra%[&ra%_&rag&ra~Og)VO~OV)WOh$WO%uWO~O#Z)XO~O%uWO#g&ta%[&ta%_&ta~Oz)ZO#g&ta%[&ta%_&ta~Oo0cOv0qO#g&pa%[&pa%_&pa{&pa~P'vOz)^O#g&pa%[&pa%_&pa{&pa~OV)`Oa)`O%uWO~O%z)eO~Ot)hO#j)gOP#hiV#hif#hih#hio#his#hiv#hi!P#hi!Q#hi!T#hi!U#hi!X#hi!]#hi!h#hi!r#hi!s#hi!t#hi!{#hi!}#hi#P#hi#R#hi#T#hi#X#hi#Z#hi#^#hi#_#hi#a#hi#c#hi#l#hi#o#hi#s#hi#u#hi#z#hi#}#hi$P#hi%X#hi%o#hi%p#hi%t#hi%u#hi&Z#hi&[#hi&]#hi&^#hi&_#hi&`#hi&a#hi&b#hi&c#hi&d#hi&e#hi&f#hi&g#hi&h#hi&i#hi&j#hi%Z#hi%_#hi~Ot)iOP#kiV#kif#kih#kio#kis#kiv#ki!P#ki!Q#ki!T#ki!U#ki!X#ki!]#ki!h#ki!r#ki!s#ki!t#ki!{#ki!}#ki#P#ki#R#ki#T#ki#X#ki#Z#ki#^#ki#_#ki#a#ki#c#ki#l#ki#o#ki#s#ki#u#ki#z#ki#}#ki$P#ki%X#ki%o#ki%p#ki%t#ki%u#ki&Z#ki&[#ki&]#ki&^#ki&_#ki&`#ki&a#ki&b#ki&c#ki&d#ki&e#ki&f#ki&g#ki&h#ki&i#ki&j#ki%Z#ki%_#ki~OV)kOn&wa~P'vOz)lOn&wa~Oz)lOn&wa~P%SOn)pO~O%Y)tO~Ot)wO#p'WO#q)vOP#niV#nif#nih#nio#nis#niv#ni!P#ni!Q#ni!T#ni!U#ni!X#ni!]#ni!h#ni!r#ni!s#ni!t#ni!{#ni!}#ni#P#ni#R#ni#T#ni#X#ni#Z#ni#^#ni#_#ni#a#ni#c#ni#l#ni#o#ni#s#ni#u#ni#z#ni#}#ni$P#ni%X#ni%o#ni%p#ni%t#ni%u#ni&Z#ni&[#ni&]#ni&^#ni&_#ni&`#ni&a#ni&b#ni&c#ni&d#ni&e#ni&f#ni&g#ni&h#ni&i#ni&j#ni%Z#ni%_#ni~OV)zOo0cOv0qO{$jO~P'vOo0cOv0qO{&xa~P'vOz*OO{&xa~OV*SOa*TOg*WO%q*UO%uWO~O{$jO&{*YO~Oh'_O~Oh!iO{$jO~O%[*_O~O%[*aO%_*aO~OV$}Oa$}Oo0cOv0qOg&Ua~P'vOz*dOg&Ua~Oo0cOv0qO{*gO!W&Xa~P'vOz*hO!W&Xa~Oo0cOv0qOz*hO{*kO!W&Xa~P'vOo0cOv0qOz*hO!W&Xa~P'vOz*hO{*kO!W&Xa~Om0dOn0dOo0mOp0nOgjikjisjizji!Tji!Uji%{ji!Wji{ji![ji#gji%[ji%_ji!Qji#[jitji!mji%zji~Ol0fO~P!NkOlji~P!NkOV'|Og*pOo0cOv0qO~P'vOn*rO~Og*pOz*tO~Og*uO~OV'|Oo0cOv0qO!W&Si~P'vOz*vO!W&Si~O!W*wO~OV(]Oo0cOv0qO![%}i#g%}i%[%}i%_%}ig%}i{%}i!m%}i%z%}i~P'vOz*zO!T%dO!U%cO![&Ti~Oz*}O![%}i#g%}i%[%}i%_%}ig%}i{%}i!m%}i%z%}i~O![+OO~Oa+QOo0cOv0qO![&Ti~P'vOz*zO![&Ti~O![+SO~OV+UOo0cOv0qO{&la![&la!m&la%z&la~P'vOz+VO{&la![&la!m&la%z&la~O!]+YO&n+[O![!nX~O![+^O~O{(kO![+_O~O{(kO![+_O!m+`O~OV&OOopOvqO{%hq!x%hq#g%hq%[%hq%_%hq%z%hq~P'vOz$ri{$ri!x$ri#g$ri%[$ri%_$ri%z$ri~P%SOV&OOopOvqO~P'vOV&OOo0cOv0qO#g%ha%[%ha%_%ha%z%ha~P'vOz+aO#g%ha%[%ha%_%ha%z%ha~Oz$ia#g$ia%[$ia%_$ian$ia~P%SO#g&Pi%[&Pi%_&Pin&Pi~P'vOz+dO#g#Wq%[#Wq%_#Wq~O#[+eOz$va#g$va%[$va%_$vag$va~O%uWO#g&ri%[&ri%_&rig&ri~Oz+gO#g&ri%[&ri%_&rig&ri~OV+iOh$WO%uWO~O%uWO#g&ti%[&ti%_&ti~Oo0cOv0qO#g&pi%[&pi%_&pi{&pi~P'vO{#{Oz#eX!W#eX~Oz+mO!W&uX~O!W+oO~Ot+rO#j)gOP#hqV#hqf#hqh#hqo#hqs#hqv#hq!P#hq!Q#hq!T#hq!U#hq!X#hq!]#hq!h#hq!r#hq!s#hq!t#hq!{#hq!}#hq#P#hq#R#hq#T#hq#X#hq#Z#hq#^#hq#_#hq#a#hq#c#hq#l#hq#o#hq#s#hq#u#hq#z#hq#}#hq$P#hq%X#hq%o#hq%p#hq%t#hq%u#hq&Z#hq&[#hq&]#hq&^#hq&_#hq&`#hq&a#hq&b#hq&c#hq&d#hq&e#hq&f#hq&g#hq&h#hq&i#hq&j#hq%Z#hq%_#hq~On$|az$|a~P%SOV)kOn&wi~P'vOz+yOn&wi~Oz,TO{$jO#[,TO~O#q,VOP#nqV#nqf#nqh#nqo#nqs#nqv#nq!P#nq!Q#nq!T#nq!U#nq!X#nq!]#nq!h#nq!r#nq!s#nq!t#nq!{#nq!}#nq#P#nq#R#nq#T#nq#X#nq#Z#nq#^#nq#_#nq#a#nq#c#nq#l#nq#o#nq#s#nq#u#nq#z#nq#}#nq$P#nq%X#nq%o#nq%p#nq%t#nq%u#nq&Z#nq&[#nq&]#nq&^#nq&_#nq&`#nq&a#nq&b#nq&c#nq&d#nq&e#nq&f#nq&g#nq&h#nq&i#nq&j#nq%Z#nq%_#nq~O#[,WOz%Oa{%Oa~Oo0cOv0qO{&xi~P'vOz,YO{&xi~O{#{O%z,[Og&zXz&zX~O%uWOg&zXz&zX~Oz,`Og&yX~Og,bO~O%Y,eO~O!T%dO!U%cOg&Viz&Vi~OV$}Oa$}Oo0cOv0qOg&Ui~P'vO{,hOz$la!W$la~Oo0cOv0qO{,iOz$la!W$la~P'vOo0cOv0qO{*gO!W&Xi~P'vOz,lO!W&Xi~Oo0cOv0qOz,lO!W&Xi~P'vOz,lO{,oO!W&Xi~Og$hiz$hi!W$hi~P%SOV'|Oo0cOv0qO~P'vOn,qO~OV'|Og,rOo0cOv0qO~P'vOV'|Oo0cOv0qO!W&Sq~P'vOz$gi![$gi#g$gi%[$gi%_$gig$gi{$gi!m$gi%z$gi~P%SOV(]Oo0cOv0qO~P'vOa+QOo0cOv0qO![&Tq~P'vOz,sO![&Tq~O![,tO~OV(]Oo0cOv0qO![%}q#g%}q%[%}q%_%}qg%}q{%}q!m%}q%z%}q~P'vO{,uO~OV+UOo0cOv0qO{&li![&li!m&li%z&li~P'vOz,zO{&li![&li!m&li%z&li~O!]+YO&n+[O![!na~O{(kO![,}O~OV&OOo0cOv0qO#g%hi%[%hi%_%hi%z%hi~P'vOz-OO#g%hi%[%hi%_%hi%z%hi~O%uWO#g&rq%[&rq%_&rqg&rq~Oz-RO#g&rq%[&rq%_&rqg&rq~OV)`Oa)`O%uWO!W&ua~Oz-TO!W&ua~On$|iz$|i~P%SOV)kO~P'vOV)kOn&wq~P'vOt-XOP#myV#myf#myh#myo#mys#myv#my!P#my!Q#my!T#my!U#my!X#my!]#my!h#my!r#my!s#my!t#my!{#my!}#my#P#my#R#my#T#my#X#my#Z#my#^#my#_#my#a#my#c#my#l#my#o#my#s#my#u#my#z#my#}#my$P#my%X#my%o#my%p#my%t#my%u#my&Z#my&[#my&]#my&^#my&_#my&`#my&a#my&b#my&c#my&d#my&e#my&f#my&g#my&h#my&i#my&j#my%Z#my%_#my~O%Z-]O%_-]O~P`O#q-^OP#nyV#nyf#nyh#nyo#nys#nyv#ny!P#ny!Q#ny!T#ny!U#ny!X#ny!]#ny!h#ny!r#ny!s#ny!t#ny!{#ny!}#ny#P#ny#R#ny#T#ny#X#ny#Z#ny#^#ny#_#ny#a#ny#c#ny#l#ny#o#ny#s#ny#u#ny#z#ny#}#ny$P#ny%X#ny%o#ny%p#ny%t#ny%u#ny&Z#ny&[#ny&]#ny&^#ny&_#ny&`#ny&a#ny&b#ny&c#ny&d#ny&e#ny&f#ny&g#ny&h#ny&i#ny&j#ny%Z#ny%_#ny~Oz-aO{$jO#[-aO~Oo0cOv0qO{&xq~P'vOz-dO{&xq~O%z,[Og&zaz&za~OV*SOa*TO%q*UO%uWOg&ya~Oz-hOg&ya~O$S-lO~OV$}Oa$}Oo0cOv0qO~P'vOo0cOv0qO{-mOz$li!W$li~P'vOo0cOv0qOz$li!W$li~P'vO{-mOz$li!W$li~Oo0cOv0qO{*gO~P'vOo0cOv0qO{*gO!W&Xq~P'vOz-pO!W&Xq~Oo0cOv0qOz-pO!W&Xq~P'vOs-sO!T%dO!U%cOg&Oq!W&Oq![&Oqz&Oq~P!/jOa+QOo0cOv0qO![&Ty~P'vOz$ji![$ji~P%SOa+QOo0cOv0qO~P'vOV+UOo0cOv0qO~P'vOV+UOo0cOv0qO{&lq![&lq!m&lq%z&lq~P'vO{(kO![-xO!m-yO%z-wO~OV&OOo0cOv0qO#g%hq%[%hq%_%hq%z%hq~P'vO%uWO#g&ry%[&ry%_&ryg&ry~OV)`Oa)`O%uWO!W&ui~Ot-}OP#m!RV#m!Rf#m!Rh#m!Ro#m!Rs#m!Rv#m!R!P#m!R!Q#m!R!T#m!R!U#m!R!X#m!R!]#m!R!h#m!R!r#m!R!s#m!R!t#m!R!{#m!R!}#m!R#P#m!R#R#m!R#T#m!R#X#m!R#Z#m!R#^#m!R#_#m!R#a#m!R#c#m!R#l#m!R#o#m!R#s#m!R#u#m!R#z#m!R#}#m!R$P#m!R%X#m!R%o#m!R%p#m!R%t#m!R%u#m!R&Z#m!R&[#m!R&]#m!R&^#m!R&_#m!R&`#m!R&a#m!R&b#m!R&c#m!R&d#m!R&e#m!R&f#m!R&g#m!R&h#m!R&i#m!R&j#m!R%Z#m!R%_#m!R~Oo0cOv0qO{&xy~P'vOV*SOa*TO%q*UO%uWOg&yi~O$S-lO%Z.VO%_.VO~OV.aOh._O!X.^O!].`O!h.YO!s.[O!t.[O%p.XO%uWO&Z]O&[]O&]]O&^]O&_]O&`]O&a]O&b]O~Oo0cOv0qOz$lq!W$lq~P'vO{.fOz$lq!W$lq~Oo0cOv0qO{*gO!W&Xy~P'vOz.gO!W&Xy~Oo0cOv.kO~P'vOs-sO!T%dO!U%cOg&Oy!W&Oy![&Oyz&Oy~P!/jO{(kO![.nO~O{(kO![.nO!m.oO~OV*SOa*TO%q*UO%uWO~Oh.tO!f.rOz$TX#[$TX%j$TXg$TX~Os$TX{$TX!W$TX![$TX~P$-VO%o.vO%p.vOs$UXz$UX{$UX#[$UX%j$UX!W$UXg$UX![$UX~O!h.xO~Oz.|O#[/OO%j.yOs&|X{&|X!W&|Xg&|X~Oa/RO~P$)oOh.tOs&}Xz&}X{&}X#[&}X%j&}X!W&}Xg&}X![&}X~Os/VO{$jO~Oo0cOv0qOz$ly!W$ly~P'vOo0cOv0qO{*gO!W&X!R~P'vOz/ZO!W&X!R~Og&RXs&RX!T&RX!U&RX!W&RX![&RXz&RX~P!/jOs-sO!T%dO!U%cOg&Qa!W&Qa![&Qaz&Qa~O{(kO![/^O~O!f.rOh$[as$[az$[a{$[a#[$[a%j$[a!W$[ag$[a![$[a~O!h/eO~O%o.vO%p.vOs$Uaz$Ua{$Ua#[$Ua%j$Ua!W$Uag$Ua![$Ua~O%j.yOs$Yaz$Ya{$Ya#[$Ya!W$Yag$Ya![$Ya~Os&|a{&|a!W&|ag&|a~P$)cOz/jOs&|a{&|a!W&|ag&|a~O!W/mO~Og/mO~O{/oO~O![/pO~Oo0cOv0qO{*gO!W&X!Z~P'vO{/sO~O%z/tO~P$-VOz/uO#[/OO%j.yOg'PX~Oz/uOg'PX~Og/wO~O!h/xO~O#[/OOs%Saz%Sa{%Sa%j%Sa!W%Sag%Sa![%Sa~O#[/OO%j.yOs%Waz%Wa{%Wa!W%Wag%Wa~Os&|i{&|i!W&|ig&|i~P$)cOz/zO#[/OO%j.yO!['Oa~O{$da~P%SOg'Pa~P$)cOz0SOg'Pa~Oa0UO!['Oi~P$)oOz0WO!['Oi~Oz0WO#[/OO%j.yO!['Oi~O#[/OO%j.yOg$biz$bi~O%z0ZO~P$-VO#[/OO%j.yOg%Vaz%Va~Og'Pi~P$)cO{0^O~Oa0UO!['Oq~P$)oOz0`O!['Oq~O#[/OO%j.yOz%Ui![%Ui~Oa0UO~P$)oOa0UO!['Oy~P$)oO#[/OO%j.yOg$ciz$ci~O#[/OO%j.yOz%Uq![%Uq~Oz+aO#g%ha%[%ha%_%ha%z%ha~P%SOV&OOo0cOv0qO~P'vOn0hO~Oo0hO~P'vO{0iO~Ot0jO~P!/jO&]&Z&j&h&i&g&f&d&e&c&b&`&a&_&^&[%u~",
    goto: "!=l'QPPPPPP'RP'Z*s+]+v,b,}-kP.YP'Z.y.y'ZPPP'Z2cPPPPPP2c5VPP5VP7g7p=xPP={>m>pPP'Z'ZPP?PPP'Z'ZPP'Z'Z'Z'Z'Z?T?}'ZP@QP@WD_G{HPPHSH^Hb'ZPPPHeHn'RP'R'RP'RP'RP'RP'RP'R'R'RP'RPP'RPP'RP'RPHtIQIYPIaIgPIaPIaIaPPPIaPKuPLOLYL`KuPIaLiPIaPLpLvPLzM`M}NhLzLzNnN{LzLzLzLz! a! g! j! o! r! |!!S!!`!!r!!x!#S!#Y!#v!#|!$S!$^!$d!$j!$|!%W!%^!%d!%n!%t!%z!&Q!&W!&^!&h!&n!&x!'O!'X!'_!'n!'v!(Q!(XPPPPPPPPPPP!(_!(b!(h!(q!({!)WPPPPPPPPPPPP!-z!/`!3`!6pPP!6x!7X!7b!8Z!8Q!8d!8j!8m!8p!8s!8{!9lPPPPPPPPPPPPPPPPP!9o!9s!9yP!:_!:c!:o!:x!;U!;l!;o!;r!;x!<O!<U!<XP!<a!<j!=f!=i]eOn#g$j)t,P'}`OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0r}!cQ#c#p$R$d$p%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!P!dQ#c#p$R$d$p$u%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!R!eQ#c#p$R$d$p$u$v%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!T!fQ#c#p$R$d$p$u$v$w%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!V!gQ#c#p$R$d$p$u$v$w$x%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!X!hQ#c#p$R$d$p$u$v$w$x$y%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g!]!hQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0g'}TOTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0r&cVOYZ[dnprxy}!P!Q!U!i!k!o!p!q!s!t#[#d#g#y#{#}$Q$h$j$}%S%Z%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/Z/s0c0d0e0f0h0i0j0k0n0r%mXOYZ[dnrxy}!P!Q!U!i!k#[#d#g#y#{#}$Q$h$j$}%S%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,s,u,w,y,z-O-d-f-m-p.f.g/Z0i0j0kQ#vqQ/[.kR0o0q't`OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rh#jhz{$W$Z&l&q)S)X+f+g-RW#rq&].k0qQ$]|Q$a!OQ$n!VQ$o!WW$|!i'm*d,gS&[#s#tQ'S$iQ(s&UQ)U&nU)Y&s)Z+jW)a&w+m-T-{Q*Q']W*R'_,`-h.TQ+l)`S,_*S*TQ-Q+eQ-_,TQ-c,WQ.R-al.W-l.^._.a.z.|/R/j/o/t/y0U0Z0^Q/S.`Q/a.tQ/l/OU0P/u0S0[X0V/z0W0_0`R&Z#r!_!wYZ!P!Q!k%S%`%g'p'r's(O(W)g*g*h*k*q*t*v,h,i,k,l,o-m-p.f.g/ZR%^!vQ!{YQ%x#[Q&d#}Q&g$QR,{+YT.j-s/s![!jQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0gQ&X#kQ'c$oR*^'dR'l$|Q%V!mR/_.r'|_OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rS#a_#b!P.[-l.^._.`.a.t.z.|/R/j/o/t/u/y/z0S0U0W0Z0[0^0_0`'|_OTYZ[adnoprtxy}!P!Q!R!U!X!c!d!e!f!g!h!i!k!o!p!q!s!t!z#O#S#T#[#d#g#x#y#{#}$Q$e$g$h$j$q$}%S%Z%^%`%c%g%l%n%w%|&O&Z&_&h&j&k&u&x&|'P'W'Z'l'm'p'r's'w'|(O(S(W(](^(d(g(p(r(z(})^)e)g)k)l)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+Q+U+V+Y+a+c+d+k+x+y,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/V/Z/s0c0d0e0f0h0i0j0k0l0n0rT#a_#bT#^^#_R(o%xa(l%x(n(o+`,{-y-z.oT+[(k+]R-z,{Q$PsQ+l)aR,^*RX#}s$O$P&fQ&y$aQ'a$nQ'd$oR)s'SQ)b&wV-S+m-T-{ZgOn$j)t,PXkOn)t,PQ$k!TQ&z$bQ&{$cQ'^$mQ'b$oQ)q'RQ)x'WQ){'XQ)|'YQ*Z'`S*]'c'dQ+s)gQ+u)hQ+v)iQ+z)oS+|)r*[Q,Q)vQ,R)wS,S)y)zQ,d*^Q-V+rQ-W+tQ-Y+{S-Z+},OQ-`,UQ-b,VQ-|-XQ.O-[Q.P-^Q.Q-_Q.p-}Q.q.RQ/W.dR/r/XWkOn)t,PR#mjQ'`$nS)r'S'aR,O)sQ,]*RR-f,^Q*['`Q+})rR-[,OZiOjn)t,PQ'f$pR*`'gT-j,e-ku.c-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^t.c-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^Q/S.`X0V/z0W0_0`!P.Z-l.^._.`.a.t.z.|/R/j/o/t/u/y/z0S0U0W0Z0[0^0_0`Q.w.YR/f.xg.z.].{/b/i/n/|0O0Q0]0a0bu.b-l.^._.a.t.z.|/R/j/o/t/u/y0S0U0Z0[0^X.u.W.b/a0PR/c.tV0R/u0S0[R/X.dQnOS#on,PR,P)tQ&^#uR(x&^S%m#R#wS(_%m(bT(b%p&`Q%a!yQ%h!}W(P%a%h(U(YQ(U%eR(Y%jQ&i$RR)O&iQ(e%qQ*{(`T+R(e*{Q'n%OR*e'nS'q%R%SY*i'q*j,m-q.hU*j'r's'tU,m*k*l*mS-q,n,oR.h-rQ#Y]R%t#YQ#_^R%y#_Q(h%vS+W(h+XR+X(iQ+](kR,|+]Q#b_R%{#bQ#ebQ%}#cW&Q#e%}({+bQ({&cR+b0gQ$OsS&e$O&fR&f$PQ&v$_R)_&vQ&V#jR(t&VQ&m$VS)T&m+hR+h)UQ$Z{R&p$ZQ&t$]R)[&tQ+n)bR-U+nQ#hfR&S#hQ)f&zR+q)fQ&}$dS)m&})nR)n'OQ'V$kR)u'VQ'[$lS*P'[,ZR,Z*QQ,a*VR-i,aWjOn)t,PR#ljQ-k,eR.U-kd.{.]/b/i/n/|0O0Q0]0a0bR/h.{U.s.W/a0PR/`.sQ/{/nS0X/{0YR0Y/|S/v/b/cR0T/vQ.}.]R/k.}R!ZPXmOn)t,PWlOn)t,PR'T$jYfOn$j)t,PR&R#g[sOn#g$j)t,PR&d#}&bQOYZ[dnprxy}!P!Q!U!i!k!o!p!q!s!t#[#d#g#y#{#}$Q$h$j$}%S%Z%^%`%g%l%n%w%|&Z&_&j&k&u&x'P'W'Z'l'm'p'r's'w(O(W(^(d(g(p(r(z)^)e)g)p)t)z*O*Y*d*g*h*k*q*r*t*v*y*z*}+U+V+Y+a+d+k,P,X,Y,],g,h,i,k,l,o,q,s,u,w,y,z-O-d-f-m-p-s.f.g/Z/s0c0d0e0f0h0i0j0k0n0rQ!nTQ#caQ#poU$Rt%c(SS$d!R$gQ$p!XQ$u!cQ$v!dQ$w!eQ$x!fQ$y!gQ$z!hQ%e!zQ%j#OQ%p#SQ%q#TQ&`#xQ'O$eQ'g$qQ(q&OU(|&h(}+cW)j&|)l+x+yQ*o'|Q*x(]Q+w)kQ,v+QQ/q/VR0g0lQ!yYQ!}ZQ$b!PQ$c!QQ%R!kQ't%S^'{%`%g(O(W*q*t*v^*f'p*h,k,l-p.g/ZQ*l'rQ*m'sQ+t)gQ,j*gQ,n*kQ-n,hQ-o,iQ-r,oQ.e-mR/Y.f[bOn#g$j)t,P!^!vYZ!P!Q!k%S%`%g'p'r's(O(W)g*g*h*k*q*t*v,h,i,k,l,o-m-p.f.g/ZQ#R[Q#fdS#wrxQ$UyW$_}$Q'P)pS$l!U$hW${!i'm*d,gS%v#[+Y`&P#d%|(p(r(z+a-O0kQ&a#yQ&b#{Q&c#}Q'j$}Q'z%^W([%l(^*y*}Q(`%nQ(i%wQ(v&ZS(y&_0iQ)P&jQ)Q&kU)]&u)^+kQ)d&xQ)y'WY)}'Z*O,X,Y-dQ*b'lS*n'w0jW+P(d*z,s,wW+T(g+V,y,zQ+p)eQ,U)zQ,c*YQ,x+UQ-P+dQ-e,]Q-v,uR.S-fhUOn#d#g$j%|&_'w(p(r)t,P%S!uYZ[drxy}!P!Q!U!i!k#[#y#{#}$Q$h$}%S%^%`%g%l%n%w&Z&j&k&u&x'P'W'Z'l'm'p'r's(O(W(^(d(g(z)^)e)g)p)z*O*Y*d*g*h*k*q*t*v*y*z*}+U+V+Y+a+d+k,X,Y,],g,h,i,k,l,o,s,u,w,y,z-O-d-f-m-p.f.g/Z0i0j0kQ#qpW%W!o!s0d0nQ%X!pQ%Y!qQ%[!tQ%f0cS'v%Z0hQ'x0eQ'y0fQ,p*rQ-u,qS.i-s/sR0p0rU#uq.k0qR(w&][cOn#g$j)t,PZ!xY#[#}$Q+YQ#W[Q#zrR$TxQ%b!yQ%i!}Q%o#RQ'j${Q(V%eQ(Z%jQ(c%pQ(f%qQ*|(`Q,f*bQ-t,pQ.m-uR/].lQ$StQ(R%cR*s(SQ.l-sR/}/sR#QZR#V[R%Q!iQ%O!iV*c'm*d,g!]!lQ!n#c#p$R$d$p$u$v$w$x$y$z%e%j%p%q&`'O'g(q(|)j*o*x+w,v/q0gR%T!kT#]^#_Q%x#[R,{+YQ(m%xS+_(n(oQ,}+`Q-x,{S.n-y-zR/^.oT+Z(k+]Q$`}Q&g$QQ)o'PR+{)pQ$XzQ)W&qR+i)XQ$XzQ&o$WQ)W&qR+i)XQ#khW$Vz$W&q)XQ$[{Q&r$ZZ)R&l)S+f+g-RR$^|R)c&wXlOn)t,PQ$f!RR'Q$gQ$m!UR'R$hR*X'_Q*V'_V-g,`-h.TQ.d-lQ/P.^R/Q._U.]-l.^._Q/U.aQ/b.tQ/g.zU/i.|/j/yQ/n/RQ/|/oQ0O/tU0Q/u0S0[Q0]0UQ0a0ZR0b0^R/T.`R/d.t",
    nodeNames: "⚠ print Escape { Comment Script AssignStatement * BinaryExpression BitOp BitOp BitOp BitOp ArithOp ArithOp @ ArithOp ** UnaryExpression ArithOp BitOp AwaitExpression await ) ( ParenthesizedExpression BinaryExpression or and CompareOp in not is UnaryExpression ConditionalExpression if else LambdaExpression lambda ParamList VariableName AssignOp , : NamedExpression AssignOp YieldExpression yield from TupleExpression ComprehensionExpression async for LambdaExpression ] [ ArrayExpression ArrayComprehensionExpression } { DictionaryExpression DictionaryComprehensionExpression SetExpression SetComprehensionExpression CallExpression ArgList AssignOp MemberExpression . PropertyName Number String FormatString FormatReplacement FormatSelfDoc FormatConversion FormatSpec FormatReplacement FormatSelfDoc ContinuedString Ellipsis None Boolean TypeDef AssignOp UpdateStatement UpdateOp ExpressionStatement DeleteStatement del PassStatement pass BreakStatement break ContinueStatement continue ReturnStatement return YieldStatement PrintStatement RaiseStatement raise ImportStatement import as ScopeStatement global nonlocal AssertStatement assert TypeDefinition type TypeParamList TypeParam StatementGroup ; IfStatement Body elif WhileStatement while ForStatement TryStatement try except finally WithStatement with FunctionDefinition def ParamList AssignOp TypeDef ClassDefinition class DecoratedStatement Decorator At MatchStatement match MatchBody MatchClause case CapturePattern LiteralPattern ArithOp ArithOp AsPattern OrPattern LogicOp AttributePattern SequencePattern MappingPattern StarPattern ClassPattern PatternArgList KeywordPattern KeywordPattern Guard",
    maxTerm: 277,
    context: g,
    nodeProps: [["isolate", -5, 4, 71, 72, 73, 77, ""], ["group", -15, 6, 85, 87, 88, 90, 92, 94, 96, 98, 99, 100, 102, 105, 108, 110, "Statement Statement", -22, 8, 18, 21, 25, 40, 49, 50, 56, 57, 60, 61, 62, 63, 64, 67, 70, 71, 72, 79, 80, 81, 82, "Expression", -10, 114, 116, 119, 121, 122, 126, 128, 133, 135, 138, "Statement", -9, 143, 144, 147, 148, 150, 151, 152, 153, 154, "Pattern"], ["openedBy", 23, "(", 54, "[", 58, "{"], ["closedBy", 24, ")", 55, "]", 59, "}"]],
    propSources: [x],
    skippedNodes: [0, 4],
    repeatNodeCount: 34,
    tokenData: "!2|~R!`OX%TXY%oY[%T[]%o]p%Tpq%oqr'ars)Yst*xtu%Tuv,dvw-hwx.Uxy/tyz0[z{0r{|2S|}2p}!O3W!O!P4_!P!Q:Z!Q!R;k!R![>_![!]Do!]!^Es!^!_FZ!_!`Gk!`!aHX!a!b%T!b!cIf!c!dJU!d!eK^!e!hJU!h!i!#f!i!tJU!t!u!,|!u!wJU!w!x!.t!x!}JU!}#O!0S#O#P&o#P#Q!0j#Q#R!1Q#R#SJU#S#T%T#T#UJU#U#VK^#V#YJU#Y#Z!#f#Z#fJU#f#g!,|#g#iJU#i#j!.t#j#oJU#o#p!1n#p#q!1s#q#r!2a#r#s!2f#s$g%T$g;'SJU;'S;=`KW<%lOJU`%YT&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T`%lP;=`<%l%To%v]&n`%c_OX%TXY%oY[%T[]%o]p%Tpq%oq#O%T#O#P&o#P#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To&tX&n`OY%TYZ%oZ]%T]^%o^#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc'f[&n`O!_%T!_!`([!`#T%T#T#U(r#U#f%T#f#g(r#g#h(r#h#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc(cTmR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc(yT!mR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk)aV&n`&[ZOr%Trs)vs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk){V&n`Or%Trs*bs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk*iT&n`&^ZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To+PZS_&n`OY*xYZ%TZ]*x]^%T^#o*x#o#p+r#p#q*x#q#r+r#r;'S*x;'S;=`,^<%lO*x_+wTS_OY+rZ]+r^;'S+r;'S;=`,W<%lO+r_,ZP;=`<%l+ro,aP;=`<%l*xj,kV%rQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj-XT!xY&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj-oV%lQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk.]V&n`&ZZOw%Twx.rx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk.wV&n`Ow%Twx/^x#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk/eT&n`&]ZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk/{ThZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc0cTgR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk0yXVZ&n`Oz%Tz{1f{!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk1mVaR&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk2ZV%oZ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc2wTzR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To3_W%pZ&n`O!_%T!_!`-Q!`!a3w!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Td4OT&{S&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk4fX!fQ&n`O!O%T!O!P5R!P!Q%T!Q![6T![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk5WV&n`O!O%T!O!P5m!P#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk5tT!rZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti6[a!hX&n`O!Q%T!Q![6T![!g%T!g!h7a!h!l%T!l!m9s!m#R%T#R#S6T#S#X%T#X#Y7a#Y#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti7fZ&n`O{%T{|8X|}%T}!O8X!O!Q%T!Q![8s![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti8^V&n`O!Q%T!Q![8s![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti8z]!hX&n`O!Q%T!Q![8s![!l%T!l!m9s!m#R%T#R#S8s#S#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti9zT!hX&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk:bX%qR&n`O!P%T!P!Q:}!Q!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj;UV%sQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti;ro!hX&n`O!O%T!O!P=s!P!Q%T!Q![>_![!d%T!d!e?q!e!g%T!g!h7a!h!l%T!l!m9s!m!q%T!q!rA]!r!z%T!z!{Bq!{#R%T#R#S>_#S#U%T#U#V?q#V#X%T#X#Y7a#Y#^%T#^#_9s#_#c%T#c#dA]#d#l%T#l#mBq#m#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti=xV&n`O!Q%T!Q![6T![#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti>fc!hX&n`O!O%T!O!P=s!P!Q%T!Q![>_![!g%T!g!h7a!h!l%T!l!m9s!m#R%T#R#S>_#S#X%T#X#Y7a#Y#^%T#^#_9s#_#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti?vY&n`O!Q%T!Q!R@f!R!S@f!S#R%T#R#S@f#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Ti@mY!hX&n`O!Q%T!Q!R@f!R!S@f!S#R%T#R#S@f#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiAbX&n`O!Q%T!Q!YA}!Y#R%T#R#SA}#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiBUX!hX&n`O!Q%T!Q!YA}!Y#R%T#R#SA}#S#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiBv]&n`O!Q%T!Q![Co![!c%T!c!iCo!i#R%T#R#SCo#S#T%T#T#ZCo#Z#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TiCv]!hX&n`O!Q%T!Q![Co![!c%T!c!iCo!i#R%T#R#SCo#S#T%T#T#ZCo#Z#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%ToDvV{_&n`O!_%T!_!`E]!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TcEdT%{R&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkEzT#gZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkFbXmR&n`O!^%T!^!_F}!_!`([!`!a([!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TjGUV%mQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkGrV%zZ&n`O!_%T!_!`([!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkH`WmR&n`O!_%T!_!`([!`!aHx!a#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TjIPV%nQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkIoV_Q#}P&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%ToJ_]&n`&YS%uZO!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUoKZP;=`<%lJUoKge&n`&YS%uZOr%Trs)Ysw%Twx.Ux!Q%T!Q![JU![!c%T!c!tJU!t!uLx!u!}JU!}#R%T#R#SJU#S#T%T#T#fJU#f#gLx#g#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUoMRa&n`&YS%uZOr%TrsNWsw%Twx! vx!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUkN_V&n`&`ZOr%TrsNts#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%TkNyV&n`Or%Trs! `s#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk! gT&n`&bZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk! }V&n`&_ZOw%Twx!!dx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!!iV&n`Ow%Twx!#Ox#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!#VT&n`&aZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!#oe&n`&YS%uZOr%Trs!%Qsw%Twx!&px!Q%T!Q![JU![!c%T!c!tJU!t!u!(`!u!}JU!}#R%T#R#SJU#S#T%T#T#fJU#f#g!(`#g#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!%XV&n`&dZOr%Trs!%ns#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!%sV&n`Or%Trs!&Ys#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!&aT&n`&fZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!&wV&n`&cZOw%Twx!'^x#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!'cV&n`Ow%Twx!'xx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!(PT&n`&eZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!(ia&n`&YS%uZOr%Trs!)nsw%Twx!+^x!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!)uV&n`&hZOr%Trs!*[s#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!*aV&n`Or%Trs!*vs#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!*}T&n`&jZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!+eV&n`&gZOw%Twx!+zx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!,PV&n`Ow%Twx!,fx#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tk!,mT&n`&iZO#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%To!-Vi&n`&YS%uZOr%TrsNWsw%Twx! vx!Q%T!Q![JU![!c%T!c!dJU!d!eLx!e!hJU!h!i!(`!i!}JU!}#R%T#R#SJU#S#T%T#T#UJU#U#VLx#V#YJU#Y#Z!(`#Z#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUo!.}a&n`&YS%uZOr%Trs)Ysw%Twx.Ux!Q%T!Q![JU![!c%T!c!}JU!}#R%T#R#SJU#S#T%T#T#oJU#p#q%T#r$g%T$g;'SJU;'S;=`KW<%lOJUk!0ZT!XZ&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tc!0qT!WR&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%Tj!1XV%kQ&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T~!1sO!]~k!1zV%jR&n`O!_%T!_!`-Q!`#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T~!2fO![~i!2mT%tX&n`O#o%T#p#q%T#r;'S%T;'S;=`%i<%lO%T",
    tokenizers: [T, p, d, S, 0, 1, 2, 3, 4],
    topRules: {
      Script: [0, 5]
    },
    specialized: [{
      term: 221,
      get: t => k[t] || -1
    }],
    tokenPrec: 7664
  });
  var codemirrorLanguageSupport = require("codemirror-language-support") /*id: 976653*/;
  let P = 0;
  class v {
    constructor(t = {}) {
      this.id = P++;
      this.perNode = !!t.perNode;
      this.deserialize = t.deserialize || (() => {
        throw Error("This node type doesn't define a deserialize function");
      });
    }
    add(t) {
      if (this.perNode) {
        throw RangeError("Can't add per-node props to node types");
      }
      if (typeof t != "function") {
        t = z.match(t);
      }
      return e => {
        let i = t(e);
        if (i === undefined) {
          return null;
        } else {
          return [this, i];
        }
      };
    }
  }
  v.closedBy = new v({
    deserialize: t => t.split(" ")
  });
  v.openedBy = new v({
    deserialize: t => t.split(" ")
  });
  v.group = new v({
    deserialize: t => t.split(" ")
  });
  v.isolate = new v({
    deserialize: t => {
      if (t && t != "rtl" && t != "ltr" && t != "auto") {
        throw RangeError("Invalid value for isolate: " + t);
      }
      return t || "auto";
    }
  });
  v.contextHash = new v({
    perNode: true
  });
  v.lookAhead = new v({
    perNode: true
  });
  v.mounted = new v({
    perNode: true
  });
  class q {
    constructor(t, e, i) {
      this.tree = t;
      this.overlay = e;
      this.parser = i;
    }
    static get(t) {
      return t && t.props && t.props[v.mounted.id];
    }
  }
  let $ = Object.create(null);
  class z {
    constructor(t, e, i, n = 0) {
      this.name = t;
      this.props = e;
      this.id = i;
      this.flags = n;
    }
    static define(t) {
      let e = t.props && t.props.length ? Object.create(null) : $;
      let i = +!!t.top | !!t.skipped * 2 | !!t.error * 4 | (t.name == null) * 8;
      let n = new z(t.name || "", e, t.id, i);
      if (t.props) {
        for (let i of t.props) {
          if (!Array.isArray(i)) {
            i = i(n);
          }
          if (i) {
            if (i[0].perNode) {
              throw RangeError("Can't store a per-node prop on a node type");
            }
            e[i[0].id] = i[1];
          }
        }
      }
      return n;
    }
    prop(t) {
      return this.props[t.id];
    }
    get isTop() {
      return (this.flags & 1) > 0;
    }
    get isSkipped() {
      return (this.flags & 2) > 0;
    }
    get isError() {
      return (this.flags & 4) > 0;
    }
    get isAnonymous() {
      return (this.flags & 8) > 0;
    }
    is(t) {
      if (typeof t == "string") {
        if (this.name == t) {
          return true;
        }
        let e = this.prop(v.group);
        return !!e && e.indexOf(t) > -1;
      }
      return this.id == t;
    }
    static match(t) {
      let e = Object.create(null);
      for (let i in t) {
        for (let n of i.split(" ")) {
          e[n] = t[i];
        }
      }
      return t => {
        for (let i = t.prop(v.group), n = -1; n < (i ? i.length : 0); n++) {
          let s = e[n < 0 ? t.name : i[n]];
          if (s) {
            return s;
          }
        }
      };
    }
  }
  z.none = new z("", Object.create(null), 0, 8);
  let R = new WeakMap();
  let w = new WeakMap();
  (n = o ||= {})[n.ExcludeBuffers = 1] = "ExcludeBuffers";
  n[n.IncludeAnonymous = 2] = "IncludeAnonymous";
  n[n.IgnoreMounts = 4] = "IgnoreMounts";
  n[n.IgnoreOverlays = 8] = "IgnoreOverlays";
  class X {
    constructor(t, e, i, n, s) {
      this.type = t;
      this.children = e;
      this.positions = i;
      this.length = n;
      this.props = null;
      if (s && s.length) {
        this.props = Object.create(null);
        for (let [t, e] of s) {
          this.props[typeof t == "number" ? t : t.id] = e;
        }
      }
    }
    toString() {
      let t = q.get(this);
      if (t && !t.overlay) {
        return t.tree.toString();
      }
      let e = "";
      for (let t of this.children) {
        let i = t.toString();
        if (i) {
          if (e) {
            e += ",";
          }
          e += i;
        }
      }
      if (this.type.name) {
        return (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e.length ? "(" + e + ")" : "");
      } else {
        return e;
      }
    }
    cursor(t = 0) {
      return new Y(this.topNode, t);
    }
    cursorAt(t, e = 0, i = 0) {
      let n = new Y(R.get(this) || this.topNode);
      n.moveTo(t, e);
      R.set(this, n._tree);
      return n;
    }
    get topNode() {
      return new E(this, 0, 0, null);
    }
    resolve(t, e = 0) {
      let i = j(R.get(this) || this.topNode, t, e, false);
      R.set(this, i);
      return i;
    }
    resolveInner(t, e = 0) {
      let i = j(w.get(this) || this.topNode, t, e, true);
      w.set(this, i);
      return i;
    }
    resolveStack(t, e = 0) {
      return function (t, e, i) {
        let n = t.resolveInner(e, i);
        let s = null;
        for (let t = n instanceof E ? n : n.context.parent; t; t = t.parent) {
          if (t.index < 0) {
            let r = t.parent;
            (s ||= [n]).push(r.resolve(e, i));
            t = r;
          } else {
            let r = q.get(t.tree);
            if (r && r.overlay && r.overlay[0].from <= e && r.overlay[r.overlay.length - 1].to >= e) {
              let o = new E(r.tree, r.overlay[0].from + t.from, -1, t);
              (s ||= [n]).push(j(o, e, i, false));
            }
          }
        }
        if (s) {
          return I(s);
        } else {
          return n;
        }
      }(this, t, e);
    }
    iterate(t) {
      let {
        enter: e,
        leave: i,
        from: n = 0,
        to: s = this.length
      } = t;
      let r = t.mode || 0;
      let O = (r & o.IncludeAnonymous) > 0;
      for (let t = this.cursor(r | o.IncludeAnonymous);;) {
        let r = false;
        if (t.from <= s && t.to >= n && (!O && t.type.isAnonymous || e(t) !== false)) {
          if (t.firstChild()) {
            continue;
          }
          r = true;
        }
        while (r && i && (O || !t.type.isAnonymous) && i(t), !t.nextSibling()) {
          if (!t.parent()) {
            return;
          }
          r = true;
        }
      }
    }
    prop(t) {
      if (t.perNode) {
        if (this.props) {
          return this.props[t.id];
        } else {
          return undefined;
        }
      } else {
        return this.type.prop(t);
      }
    }
    get propValues() {
      let t = [];
      if (this.props) {
        for (let e in this.props) {
          t.push([+e, this.props[e]]);
        }
      }
      return t;
    }
    balance(t = {}) {
      if (this.children.length <= 8) {
        return this;
      } else {
        return B(z.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, e, i) => new X(this.type, t, e, i, this.propValues), t.makeTree || ((t, e, i) => new X(z.none, t, e, i)));
      }
    }
    static build(t) {
      return function (t) {
        let {
          buffer: i,
          nodeSet: n,
          maxBufferLength: s = 1024,
          reused: r = [],
          minRepeatType: o = n.types.length
        } = t;
        let O = Array.isArray(i) ? new _(i, i.length) : i;
        let a = n.types;
        let l = 0;
        let h = 0;
        function c(t, e, i, s, r, o, O, a, l) {
          let h = [];
          let c = [];
          while (t.length > s) {
            h.push(t.pop());
            c.push(e.pop() + i - r);
          }
          t.push(d(n.types[O], h, c, o - r, a - o, l));
          e.push(r - i);
        }
        function d(t, e, i, n, s, r, o) {
          if (r) {
            let t = [v.contextHash, r];
            o = o ? [t].concat(o) : [t];
          }
          if (s > 25) {
            let t = [v.lookAhead, s];
            o = o ? [t].concat(o) : [t];
          }
          return new X(t, e, i, n, o);
        }
        let p = [];
        let f = [];
        while (O.pos > 0) {
          (function t(e, i, p, f, u, m) {
            let {
              id: Q,
              start: g,
              end: T,
              size: S
            } = O;
            let x = h;
            let k = l;
            while (S < 0) {
              O.next();
              if (S == -1) {
                let t = r[Q];
                p.push(t);
                f.push(g - e);
                return;
              }
              if (S == -3) {
                l = Q;
                return;
              }
              if (S == -4) {
                h = Q;
                return;
              } else {
                throw RangeError(`Unrecognized record size: ${S}`);
              }
            }
            let y = a[Q];
            let b;
            let P;
            let q = g - e;
            if (T - g <= s && (P = function (t, e) {
              let i = O.fork();
              let n = 0;
              let r = 0;
              let a = 0;
              let l = i.end - s;
              let h = {
                size: 0,
                start: 0,
                skip: 0
              };
              t: for (let s = i.pos - t; i.pos > s;) {
                let t = i.size;
                if (i.id == e && t >= 0) {
                  h.size = n;
                  h.start = r;
                  h.skip = a;
                  a += 4;
                  n += 4;
                  i.next();
                  continue;
                }
                let O = i.pos - t;
                if (t < 0 || O < s || i.start < l) {
                  break;
                }
                let c = (i.id >= o) * 4;
                let d = i.start;
                for (i.next(); i.pos > O;) {
                  if (i.size < 0) {
                    if (i.size == -3) {
                      c += 4;
                    } else {
                      break t;
                    }
                  } else if (i.id >= o) {
                    c += 4;
                  }
                  i.next();
                }
                r = d;
                n += t;
                a += c;
              }
              if (e < 0 || n == t) {
                h.size = n;
                h.start = r;
                h.skip = a;
              }
              if (h.size > 4) {
                return h;
              } else {
                return undefined;
              }
            }(O.pos - i, u))) {
              let t = new Uint16Array(P.size - P.skip);
              let i = O.pos - P.size;
              let s = t.length;
              while (O.pos > i) {
                s = function t(e, i, n) {
                  let {
                    id: s,
                    start: r,
                    end: a,
                    size: c
                  } = O;
                  O.next();
                  if (c >= 0 && s < o) {
                    let o = n;
                    if (c > 4) {
                      let s = O.pos - (c - 4);
                      while (O.pos > s) {
                        n = t(e, i, n);
                      }
                    }
                    i[--n] = o;
                    i[--n] = a - e;
                    i[--n] = r - e;
                    i[--n] = s;
                  } else if (c == -3) {
                    l = s;
                  } else if (c == -4) {
                    h = s;
                  }
                  return n;
                }(P.start, t, s);
              }
              b = new W(t, T - P.start, n);
              q = P.start - e;
            } else {
              let e = O.pos - S;
              O.next();
              let i = [];
              let r = [];
              let a = Q >= o ? Q : -1;
              let l = 0;
              let h = T;
              while (O.pos > e) {
                if (a >= 0 && O.id == a && O.size >= 0) {
                  if (O.end <= h - s) {
                    c(i, r, g, l, O.end, h, a, x, k);
                    l = i.length;
                    h = O.end;
                  }
                  O.next();
                } else if (m > 2500) {
                  (function (t, e, i, r) {
                    let o = [];
                    let a = 0;
                    let l = -1;
                    while (O.pos > e) {
                      let {
                        id: t,
                        start: e,
                        end: i,
                        size: n
                      } = O;
                      if (n > 4) {
                        O.next();
                      } else if (l > -1 && e < l) {
                        break;
                      } else {
                        if (l < 0) {
                          l = i - s;
                        }
                        o.push(t, e, i);
                        a++;
                        O.next();
                      }
                    }
                    if (a) {
                      let e = new Uint16Array(a * 4);
                      let s = o[o.length - 2];
                      for (let t = o.length - 3, i = 0; t >= 0; t -= 3) {
                        e[i++] = o[t];
                        e[i++] = o[t + 1] - s;
                        e[i++] = o[t + 2] - s;
                        e[i++] = i;
                      }
                      i.push(new W(e, o[2] - s, n));
                      r.push(s - t);
                    }
                  })(g, e, i, r);
                } else {
                  t(g, e, i, r, a, m + 1);
                }
              }
              if (a >= 0 && l > 0 && l < i.length) {
                c(i, r, g, l, g, h, a, x, k);
              }
              i.reverse();
              r.reverse();
              if (a > -1 && l > 0) {
                let t = function (t, e) {
                  return (i, n, s) => {
                    let r = 0;
                    let o = i.length - 1;
                    let O;
                    let a;
                    if (o >= 0 && (O = i[o]) instanceof X) {
                      if (!o && O.type == t && O.length == s) {
                        return O;
                      }
                      if (a = O.prop(v.lookAhead)) {
                        r = n[o] + O.length + a;
                      }
                    }
                    return d(t, i, n, s, r, e);
                  };
                }(y, k);
                b = B(y, i, r, 0, i.length, 0, T - g, t, t);
              } else {
                b = d(y, i, r, T - g, x - T, k);
              }
            }
            p.push(b);
            f.push(q);
          })(t.start || 0, t.bufferStart || 0, p, f, -1, 0);
        }
        let u = t.length ?? (p.length ? f[0] + p[0].length : 0);
        return new X(a[t.topID], p.reverse(), f.reverse(), u);
      }(t);
    }
  }
  X.empty = new X(z.none, [], [], 0);
  class _ {
    constructor(t, e) {
      this.buffer = t;
      this.index = e;
    }
    get id() {
      return this.buffer[this.index - 4];
    }
    get start() {
      return this.buffer[this.index - 3];
    }
    get end() {
      return this.buffer[this.index - 2];
    }
    get size() {
      return this.buffer[this.index - 1];
    }
    get pos() {
      return this.index;
    }
    next() {
      this.index -= 4;
    }
    fork() {
      return new _(this.buffer, this.index);
    }
  }
  class W {
    constructor(t, e, i) {
      this.buffer = t;
      this.length = e;
      this.set = i;
    }
    get type() {
      return z.none;
    }
    toString() {
      let t = [];
      for (let e = 0; e < this.buffer.length;) {
        t.push(this.childString(e));
        e = this.buffer[e + 3];
      }
      return t.join(",");
    }
    childString(t) {
      let e = this.buffer[t];
      let i = this.buffer[t + 3];
      let n = this.set.types[e];
      let s = n.name;
      if (/\W/.test(s) && !n.isError) {
        s = JSON.stringify(s);
      }
      if (i == (t += 4)) {
        return s;
      }
      let r = [];
      while (t < i) {
        r.push(this.childString(t));
        t = this.buffer[t + 3];
      }
      return s + "(" + r.join(",") + ")";
    }
    findChild(t, e, i, n, s) {
      let {
        buffer: r
      } = this;
      let o = -1;
      for (let O = t; O != e && (!U(s, n, r[O + 1], r[O + 2]) || (o = O, !(i > 0))); O = r[O + 3]);
      return o;
    }
    slice(t, e, i) {
      let n = this.buffer;
      let s = new Uint16Array(e - t);
      let r = 0;
      for (let o = t, O = 0; o < e;) {
        s[O++] = n[o++];
        s[O++] = n[o++] - i;
        let e = s[O++] = n[o++] - i;
        s[O++] = n[o++] - t;
        r = Math.max(r, e);
      }
      return new W(s, r, this.set);
    }
  }
  function U(t, e, i, n) {
    switch (t) {
      case -2:
        return i < e;
      case -1:
        return n >= e && i < e;
      case 0:
        return i < e && n > e;
      case 1:
        return i <= e && n > e;
      case 2:
        return n > e;
      case 4:
        return true;
    }
  }
  function j(t, e, i, n) {
    for (; t.from == t.to || (i < 1 ? t.from >= e : t.from > e) || (i > -1 ? t.to <= e : t.to < e);) {
      let e = !n && t instanceof E && t.index < 0 ? null : t.parent;
      if (!e) {
        return t;
      }
      t = e;
    }
    let r = n ? 0 : o.IgnoreOverlays;
    if (n) {
      for (let n = t, o = n.parent; o; o = (n = o).parent) {
        if (n instanceof E && n.index < 0 && o.enter(e, i, r)?.from != n.from) {
          t = o;
        }
      }
    }
    while (true) {
      let n = t.enter(e, i, r);
      if (!n) {
        return t;
      }
      t = n;
    }
  }
  class V {
    cursor(t = 0) {
      return new Y(this, t);
    }
    getChild(t, e = null, i = null) {
      let n = G(this, t, e, i);
      if (n.length) {
        return n[0];
      } else {
        return null;
      }
    }
    getChildren(t, e = null, i = null) {
      return G(this, t, e, i);
    }
    resolve(t, e = 0) {
      return j(this, t, e, false);
    }
    resolveInner(t, e = 0) {
      return j(this, t, e, true);
    }
    matchContext(t) {
      return C(this.parent, t);
    }
    enterUnfinishedNodesBefore(t) {
      let e = this.childBefore(t);
      let i = this;
      while (e) {
        let t = e.lastChild;
        if (!t || t.to != e.to) {
          break;
        }
        if (t.type.isError && t.from == t.to) {
          i = e;
          e = t.prevSibling;
        } else {
          e = t;
        }
      }
      return i;
    }
    get node() {
      return this;
    }
    get next() {
      return this.parent;
    }
  }
  class E extends V {
    constructor(t, e, i, n) {
      super();
      this._tree = t;
      this.from = e;
      this.index = i;
      this._parent = n;
    }
    get type() {
      return this._tree.type;
    }
    get name() {
      return this._tree.type.name;
    }
    get to() {
      return this.from + this._tree.length;
    }
    nextChild(t, e, i, n, s = 0) {
      for (let r = this;;) {
        for (let {
            children: O,
            positions: a
          } = r._tree, l = e > 0 ? O.length : -1; t != l; t += e) {
          let l = O[t];
          let h = a[t] + r.from;
          if (U(n, i, h, h + l.length)) {
            if (l instanceof W) {
              if (s & o.ExcludeBuffers) {
                continue;
              }
              let O = l.findChild(0, l.buffer.length, e, i - h, n);
              if (O > -1) {
                return new A(new Z(r, l, t, h), null, O);
              }
            } else if (s & o.IncludeAnonymous || !l.type.isAnonymous || J(l)) {
              let O;
              if (!(s & o.IgnoreMounts) && (O = q.get(l)) && !O.overlay) {
                return new E(O.tree, h, t, r);
              }
              let a = new E(l, h, t, r);
              if (s & o.IncludeAnonymous || !a.type.isAnonymous) {
                return a;
              } else {
                return a.nextChild(e < 0 ? l.children.length - 1 : 0, e, i, n);
              }
            }
          }
        }
        if (s & o.IncludeAnonymous || !r.type.isAnonymous || (t = r.index >= 0 ? r.index + e : e < 0 ? -1 : r._parent._tree.children.length, !(r = r._parent))) {
          return null;
        }
      }
    }
    get firstChild() {
      return this.nextChild(0, 1, 0, 4);
    }
    get lastChild() {
      return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
    }
    childAfter(t) {
      return this.nextChild(0, 1, t, 2);
    }
    childBefore(t) {
      return this.nextChild(this._tree.children.length - 1, -1, t, -2);
    }
    enter(t, e, i = 0) {
      let n;
      if (!(i & o.IgnoreOverlays) && (n = q.get(this._tree)) && n.overlay) {
        let i = t - this.from;
        for (let {
          from: t,
          to: s
        } of n.overlay) {
          if ((e > 0 ? t <= i : t < i) && (e < 0 ? s >= i : s > i)) {
            return new E(n.tree, n.overlay[0].from + this.from, -1, this);
          }
        }
      }
      return this.nextChild(0, 1, t, e, i);
    }
    nextSignificantParent() {
      let t = this;
      while (t.type.isAnonymous && t._parent) {
        t = t._parent;
      }
      return t;
    }
    get parent() {
      if (this._parent) {
        return this._parent.nextSignificantParent();
      } else {
        return null;
      }
    }
    get nextSibling() {
      if (this._parent && this.index >= 0) {
        return this._parent.nextChild(this.index + 1, 1, 0, 4);
      } else {
        return null;
      }
    }
    get prevSibling() {
      if (this._parent && this.index >= 0) {
        return this._parent.nextChild(this.index - 1, -1, 0, 4);
      } else {
        return null;
      }
    }
    get tree() {
      return this._tree;
    }
    toTree() {
      return this._tree;
    }
    toString() {
      return this._tree.toString();
    }
  }
  function G(t, e, i, n) {
    let s = t.cursor();
    let r = [];
    if (!s.firstChild()) {
      return r;
    }
    if (i != null) {
      for (let t = false; !t;) {
        t = s.type.is(i);
        if (!s.nextSibling()) {
          return r;
        }
      }
    }
    while (true) {
      if (n != null && s.type.is(n)) {
        return r;
      }
      if (s.type.is(e)) {
        r.push(s.node);
      }
      if (!s.nextSibling()) {
        if (n == null) {
          return r;
        } else {
          return [];
        }
      }
    }
  }
  function C(t, e, i = e.length - 1) {
    for (let n = t; i >= 0; n = n.parent) {
      if (!n) {
        return false;
      }
      if (!n.type.isAnonymous) {
        if (e[i] && e[i] != n.name) {
          return false;
        }
        i--;
      }
    }
    return true;
  }
  class Z {
    constructor(t, e, i, n) {
      this.parent = t;
      this.buffer = e;
      this.index = i;
      this.start = n;
    }
  }
  class A extends V {
    get name() {
      return this.type.name;
    }
    get from() {
      return this.context.start + this.context.buffer.buffer[this.index + 1];
    }
    get to() {
      return this.context.start + this.context.buffer.buffer[this.index + 2];
    }
    constructor(t, e, i) {
      super();
      this.context = t;
      this._parent = e;
      this.index = i;
      this.type = t.buffer.set.types[t.buffer.buffer[i]];
    }
    child(t, e, i) {
      let {
        buffer: n
      } = this.context;
      let s = n.findChild(this.index + 4, n.buffer[this.index + 3], t, e - this.context.start, i);
      if (s < 0) {
        return null;
      } else {
        return new A(this.context, this, s);
      }
    }
    get firstChild() {
      return this.child(1, 0, 4);
    }
    get lastChild() {
      return this.child(-1, 0, 4);
    }
    childAfter(t) {
      return this.child(1, t, 2);
    }
    childBefore(t) {
      return this.child(-1, t, -2);
    }
    enter(t, e, i = 0) {
      if (i & o.ExcludeBuffers) {
        return null;
      }
      let {
        buffer: n
      } = this.context;
      let s = n.findChild(this.index + 4, n.buffer[this.index + 3], e > 0 ? 1 : -1, t - this.context.start, e);
      if (s < 0) {
        return null;
      } else {
        return new A(this.context, this, s);
      }
    }
    get parent() {
      return this._parent || this.context.parent.nextSignificantParent();
    }
    externalSibling(t) {
      if (this._parent) {
        return null;
      } else {
        return this.context.parent.nextChild(this.context.index + t, t, 0, 4);
      }
    }
    get nextSibling() {
      let {
        buffer: t
      } = this.context;
      let e = t.buffer[this.index + 3];
      if (e < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length)) {
        return new A(this.context, this._parent, e);
      } else {
        return this.externalSibling(1);
      }
    }
    get prevSibling() {
      let {
        buffer: t
      } = this.context;
      let e = this._parent ? this._parent.index + 4 : 0;
      if (this.index == e) {
        return this.externalSibling(-1);
      } else {
        return new A(this.context, this._parent, t.findChild(e, this.index, -1, 0, 4));
      }
    }
    get tree() {
      return null;
    }
    toTree() {
      let t = [];
      let e = [];
      let {
        buffer: i
      } = this.context;
      let n = this.index + 4;
      let s = i.buffer[this.index + 3];
      if (s > n) {
        let r = i.buffer[this.index + 1];
        t.push(i.slice(n, s, r));
        e.push(0);
      }
      return new X(this.type, t, e, this.to - this.from);
    }
    toString() {
      return this.context.buffer.childString(this.index);
    }
  }
  function I(t) {
    if (!t.length) {
      return null;
    }
    let e = 0;
    let i = t[0];
    for (let n = 1; n < t.length; n++) {
      let s = t[n];
      if (s.from > i.from || s.to < i.to) {
        i = s;
        e = n;
      }
    }
    let n = i instanceof E && i.index < 0 ? null : i.parent;
    let s = t.slice();
    if (n) {
      s[e] = n;
    } else {
      s.splice(e, 1);
    }
    return new N(s, i);
  }
  class N {
    constructor(t, e) {
      this.heads = t;
      this.node = e;
    }
    get next() {
      return I(this.heads);
    }
  }
  class Y {
    get name() {
      return this.type.name;
    }
    constructor(t, e = 0) {
      this.mode = e;
      this.buffer = null;
      this.stack = [];
      this.index = 0;
      this.bufferNode = null;
      if (t instanceof E) {
        this.yieldNode(t);
      } else {
        this._tree = t.context.parent;
        this.buffer = t.context;
        for (let e = t._parent; e; e = e._parent) {
          this.stack.unshift(e.index);
        }
        this.bufferNode = t;
        this.yieldBuf(t.index);
      }
    }
    yieldNode(t) {
      return !!t && (this._tree = t, this.type = t.type, this.from = t.from, this.to = t.to, true);
    }
    yieldBuf(t, e) {
      this.index = t;
      let {
        start: i,
        buffer: n
      } = this.buffer;
      this.type = e || n.set.types[n.buffer[t]];
      this.from = i + n.buffer[t + 1];
      this.to = i + n.buffer[t + 2];
      return true;
    }
    yield(t) {
      return !!t && (t instanceof E ? (this.buffer = null, this.yieldNode(t)) : (this.buffer = t.context, this.yieldBuf(t.index, t.type)));
    }
    toString() {
      if (this.buffer) {
        return this.buffer.buffer.childString(this.index);
      } else {
        return this._tree.toString();
      }
    }
    enterChild(t, e, i) {
      if (!this.buffer) {
        return this.yield(this._tree.nextChild(t < 0 ? this._tree._tree.children.length - 1 : 0, t, e, i, this.mode));
      }
      let {
        buffer: n
      } = this.buffer;
      let s = n.findChild(this.index + 4, n.buffer[this.index + 3], t, e - this.buffer.start, i);
      return !(s < 0) && (this.stack.push(this.index), this.yieldBuf(s));
    }
    firstChild() {
      return this.enterChild(1, 0, 4);
    }
    lastChild() {
      return this.enterChild(-1, 0, 4);
    }
    childAfter(t) {
      return this.enterChild(1, t, 2);
    }
    childBefore(t) {
      return this.enterChild(-1, t, -2);
    }
    enter(t, e, i = this.mode) {
      if (this.buffer) {
        return !(i & o.ExcludeBuffers) && this.enterChild(1, t, e);
      } else {
        return this.yield(this._tree.enter(t, e, i));
      }
    }
    parent() {
      if (!this.buffer) {
        return this.yieldNode(this.mode & o.IncludeAnonymous ? this._tree._parent : this._tree.parent);
      }
      if (this.stack.length) {
        return this.yieldBuf(this.stack.pop());
      }
      let t = this.mode & o.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
      this.buffer = null;
      return this.yieldNode(t);
    }
    sibling(t) {
      if (!this.buffer) {
        return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + t, t, 0, 4, this.mode));
      }
      let {
        buffer: e
      } = this.buffer;
      let i = this.stack.length - 1;
      if (t < 0) {
        let t = i < 0 ? 0 : this.stack[i] + 4;
        if (this.index != t) {
          return this.yieldBuf(e.findChild(t, this.index, -1, 0, 4));
        }
      } else {
        let t = e.buffer[this.index + 3];
        if (t < (i < 0 ? e.buffer.length : e.buffer[this.stack[i] + 3])) {
          return this.yieldBuf(t);
        }
      }
      return i < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + t, t, 0, 4, this.mode));
    }
    nextSibling() {
      return this.sibling(1);
    }
    prevSibling() {
      return this.sibling(-1);
    }
    atLastNode(t) {
      let e;
      let i;
      let {
        buffer: n
      } = this;
      if (n) {
        if (t > 0) {
          if (this.index < n.buffer.buffer.length) {
            return false;
          }
        } else {
          for (let t = 0; t < this.index; t++) {
            if (n.buffer.buffer[t + 3] < this.index) {
              return false;
            }
          }
        }
        ({
          index: e,
          parent: i
        } = n);
      } else {
        ({
          index: e,
          _parent: i
        } = this._tree);
      }
      for (; i; {
        index: e,
        _parent: i
      } = i) {
        if (e > -1) {
          for (let n = e + t, s = t < 0 ? -1 : i._tree.children.length; n != s; n += t) {
            let t = i._tree.children[n];
            if (this.mode & o.IncludeAnonymous || t instanceof W || !t.type.isAnonymous || J(t)) {
              return false;
            }
          }
        }
      }
      return true;
    }
    move(t, e) {
      if (e && this.enterChild(t, 0, 4)) {
        return true;
      }
      while (true) {
        if (this.sibling(t)) {
          return true;
        }
        if (this.atLastNode(t) || !this.parent()) {
          return false;
        }
      }
    }
    next(t = true) {
      return this.move(1, t);
    }
    prev(t = true) {
      return this.move(-1, t);
    }
    moveTo(t, e = 0) {
      while ((this.from == this.to || (e < 1 ? this.from >= t : this.from > t) || (e > -1 ? this.to <= t : this.to < t)) && this.parent());
      while (this.enterChild(1, t, e));
      return this;
    }
    get node() {
      if (!this.buffer) {
        return this._tree;
      }
      let t = this.bufferNode;
      let e = null;
      let i = 0;
      if (t && t.context == this.buffer) {
        t: for (let n = this.index, s = this.stack.length; s >= 0;) {
          for (let r = t; r; r = r._parent) {
            if (r.index == n) {
              if (n == this.index) {
                return r;
              }
              e = r;
              i = s + 1;
              break t;
            }
          }
          n = this.stack[--s];
        }
      }
      for (let t = i; t < this.stack.length; t++) {
        e = new A(this.buffer, e, this.stack[t]);
      }
      return this.bufferNode = new A(this.buffer, e, this.index);
    }
    get tree() {
      if (this.buffer) {
        return null;
      } else {
        return this._tree._tree;
      }
    }
    iterate(t, e) {
      for (let i = 0;;) {
        let n = false;
        if (this.type.isAnonymous || t(this) !== false) {
          if (this.firstChild()) {
            i++;
            continue;
          }
          if (!this.type.isAnonymous) {
            n = true;
          }
        }
        while (true) {
          if (n && e) {
            e(this);
          }
          n = this.type.isAnonymous;
          if (!i) {
            return;
          }
          if (this.nextSibling()) {
            break;
          }
          this.parent();
          i--;
          n = true;
        }
      }
    }
    matchContext(t) {
      if (!this.buffer) {
        return C(this.node.parent, t);
      }
      let {
        buffer: e
      } = this.buffer;
      let {
        types: i
      } = e.set;
      for (let n = t.length - 1, s = this.stack.length - 1; n >= 0; s--) {
        if (s < 0) {
          return C(this._tree, t, n);
        }
        let r = i[e.buffer[this.stack[s]]];
        if (!r.isAnonymous) {
          if (t[n] && t[n] != r.name) {
            return false;
          }
          n--;
        }
      }
      return true;
    }
  }
  function J(t) {
    return t.children.some(t => t instanceof W || !t.type.isAnonymous || J(t));
  }
  let F = new WeakMap();
  function D(t, e) {
    if (!t.isAnonymous || e instanceof W || e.type != t) {
      return 1;
    }
    let i = F.get(e);
    if (i == null) {
      i = 1;
      for (let n of e.children) {
        if (n.type != t || !(n instanceof X)) {
          i = 1;
          break;
        }
        i += D(t, n);
      }
      F.set(e, i);
    }
    return i;
  }
  function B(t, e, i, n, s, r, o, O, a) {
    let l = 0;
    for (let i = n; i < s; i++) {
      l += D(t, e[i]);
    }
    let h = Math.ceil(l * 1.5 / 8);
    let c = [];
    let d = [];
    (function e(i, n, s, o, O) {
      for (let l = s; l < o;) {
        let s = l;
        let p = n[l];
        let f = D(t, i[l]);
        for (l++; l < o; l++) {
          let e = D(t, i[l]);
          if (f + e >= h) {
            break;
          }
          f += e;
        }
        if (l == s + 1) {
          if (f > h) {
            let t = i[s];
            e(t.children, t.positions, 0, t.children.length, n[s] + O);
            continue;
          }
          c.push(i[s]);
        } else {
          let e = n[l - 1] + i[l - 1].length - p;
          c.push(B(t, i, n, s, l, p, e, null, a));
        }
        d.push(p + O - r);
      }
    })(e, i, n, s, 0);
    return (O || a)(c, d, o);
  }
  new v({
    perNode: true
  });
  var codemirrorStateCore = require("codemirror-state-core") /*id: 980017*/;
  var codemirrorEditorViewCore = require("codemirror-editor-view-core") /*id: 928053*/;
  class M {
    constructor(t, e, i, n) {
      this.state = t;
      this.pos = e;
      this.explicit = i;
      this.view = n;
      this.abortListeners = [];
      this.abortOnDocChange = false;
    }
    tokenBefore(t) {
      let e = codemirrorLanguageSupport.getTree(this.state).resolveInner(this.pos, -1);
      while (e && t.indexOf(e.name) < 0) {
        e = e.parent;
      }
      if (e) {
        return {
          from: e.from,
          to: this.pos,
          text: this.state.sliceDoc(e.from, this.pos),
          type: e.type
        };
      } else {
        return null;
      }
    }
    matchBefore(t) {
      let e = this.state.doc.lineAt(this.pos);
      let i = Math.max(e.from, this.pos - 250);
      let n = e.text.slice(i - e.from, this.pos - e.from);
      let s = n.search(tn(t, false));
      if (s < 0) {
        return null;
      } else {
        return {
          from: i + s,
          to: this.pos,
          text: n.slice(s)
        };
      }
    }
    get aborted() {
      return this.abortListeners == null;
    }
    addEventListener(t, e, i) {
      if (t == "abort" && this.abortListeners) {
        this.abortListeners.push(e);
        if (i && i.onDocChange) {
          this.abortOnDocChange = true;
        }
      }
    }
  }
  function K(t) {
    let e = Object.keys(t).join("");
    let i = /\w/.test(e);
    if (i) {
      e = e.replace(/\w/g, "");
    }
    return `[${i ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
  }
  function tt(t) {
    let e = t.map(t => typeof t == "string" ? {
      label: t
    } : t);
    let [i, n] = e.every(t => /^\w+$/.test(t.label)) ? [/\w*$/, /\w+$/] : function (t) {
      let e = Object.create(null);
      let i = Object.create(null);
      for (let {
        label: n
      } of t) {
        e[n[0]] = true;
        for (let t = 1; t < n.length; t++) {
          i[n[t]] = true;
        }
      }
      let n = K(e) + K(i) + "*$";
      return [RegExp("^" + n), new RegExp(n)];
    }(e);
    return t => {
      let s = t.matchBefore(n);
      if (s || t.explicit) {
        return {
          from: s ? s.from : t.pos,
          options: e,
          validFor: i
        };
      } else {
        return null;
      }
    };
  }
  class te {
    constructor(t, e, i, n) {
      this.completion = t;
      this.source = e;
      this.match = i;
      this.score = n;
    }
  }
  function ti(t) {
    return t.selection.main.from;
  }
  function tn(t, e) {
    let {
      source: n
    } = t;
    let s = e && n[0] != "^";
    let r = n[n.length - 1] != "$";
    if (s || r) {
      return RegExp(`${s ? "^" : ""}(?:${n})${r ? "$" : ""}`, t.flags ?? (t.ignoreCase ? "i" : ""));
    } else {
      return t;
    }
  }
  let ts = codemirrorStateCore.AnnotationType.define();
  let tr = new WeakMap();
  function to(t) {
    if (!Array.isArray(t)) {
      return t;
    }
    let e = tr.get(t);
    if (!e) {
      tr.set(t, e = tt(t));
    }
    return e;
  }
  let tO = codemirrorStateCore.EffectType.define();
  let ta = codemirrorStateCore.EffectType.define();
  class tl {
    constructor(t) {
      this.pattern = t;
      this.chars = [];
      this.folded = [];
      this.any = [];
      this.precise = [];
      this.byWord = [];
      this.score = 0;
      this.matched = [];
      for (let e = 0; e < t.length;) {
        let i = codemirrorStateCore.charCodeAt(t, e);
        let n = codemirrorStateCore.charLength(i);
        this.chars.push(i);
        let s = t.slice(e, e + n);
        let r = s.toUpperCase();
        this.folded.push(codemirrorStateCore.charCodeAt(r == s ? s.toLowerCase() : r, 0));
        e += n;
      }
      this.astral = t.length != this.chars.length;
    }
    ret(t, e) {
      this.score = t;
      this.matched = e;
      return this;
    }
    match(t) {
      if (this.pattern.length == 0) {
        return this.ret(-100, []);
      }
      if (t.length < this.pattern.length) {
        return null;
      }
      let {
        chars: e,
        folded: i,
        any: n,
        precise: s,
        byWord: r
      } = this;
      if (e.length == 1) {
        let n = codemirrorStateCore.charCodeAt(t, 0);
        let s = codemirrorStateCore.charLength(n);
        let r = s == t.length ? 0 : -100;
        if (n == e[0]) ;else {
          if (n != i[0]) {
            return null;
          }
          r += -200;
        }
        return this.ret(r, [0, s]);
      }
      let o = t.indexOf(this.pattern);
      if (o == 0) {
        return this.ret(t.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
      }
      let O = e.length;
      let a = 0;
      if (o < 0) {
        for (let s = 0, r = Math.min(t.length, 200); s < r && a < O;) {
          let r = codemirrorStateCore.charCodeAt(t, s);
          if (r == e[a] || r == i[a]) {
            n[a++] = s;
          }
          s += codemirrorStateCore.charLength(r);
        }
        if (a < O) {
          return null;
        }
      }
      let l = 0;
      let h = 0;
      let c = false;
      let d = 0;
      let p = -1;
      let f = -1;
      let u = /[a-z]/.test(t);
      let m = true;
      for (let n = 0, a = Math.min(t.length, 200), Q = 0; n < a && h < O;) {
        let a = codemirrorStateCore.charCodeAt(t, n);
        if (o < 0) {
          if (l < O && a == e[l]) {
            s[l++] = n;
          }
          if (d < O) {
            if (a == e[d] || a == i[d]) {
              if (d == 0) {
                p = n;
              }
              f = n + 1;
              d++;
            } else {
              d = 0;
            }
          }
        }
        let g;
        let T = a < 255 ? a >= 48 && a <= 57 || a >= 97 && a <= 122 ? 2 : +(a >= 65 && a <= 90) : (g = codemirrorStateCore.fromCharCode(a)) != g.toLowerCase() ? 1 : (g != g.toUpperCase()) * 2;
        if (!n || T == 1 && u || Q == 0 && T != 0) {
          if (e[h] == a || i[h] == a && (c = true)) {
            r[h++] = n;
          } else if (r.length) {
            m = false;
          }
        }
        Q = T;
        n += codemirrorStateCore.charLength(a);
      }
      if (h == O && r[0] == 0 && m) {
        return this.result(-100 + (c ? -200 : 0), r, t);
      } else if (d == O && p == 0) {
        return this.ret(-200 - t.length + (f == t.length ? 0 : -100), [0, f]);
      } else if (o > -1) {
        return this.ret(-700 - t.length, [o, o + this.pattern.length]);
      } else if (d == O) {
        return this.ret(-900 - t.length, [p, f]);
      } else if (h == O) {
        return this.result(-100 + (c ? -200 : 0) + -700 + (m ? 0 : -1100), r, t);
      } else if (e.length == 2) {
        return null;
      } else {
        return this.result((n[0] ? -700 : 0) + -200 + -1100, n, t);
      }
    }
    result(t, e, i) {
      let n = [];
      let s = 0;
      for (let t of e) {
        let e = t + (this.astral ? codemirrorStateCore.charLength(codemirrorStateCore.charCodeAt(i, t)) : 1);
        if (s && n[s - 1] == t) {
          n[s - 1] = e;
        } else {
          n[s++] = t;
          n[s++] = e;
        }
      }
      return this.ret(t - i.length, n);
    }
  }
  class th {
    constructor(t) {
      this.pattern = t;
      this.matched = [];
      this.score = 0;
      this.folded = t.toLowerCase();
    }
    match(t) {
      if (t.length < this.pattern.length) {
        return null;
      }
      let e = t.slice(0, this.pattern.length);
      let i = e == this.pattern ? 0 : e.toLowerCase() == this.folded ? -200 : null;
      if (i == null) {
        return null;
      } else {
        this.matched = [0, e.length];
        this.score = i + (t.length == this.pattern.length ? 0 : -100);
        return this;
      }
    }
  }
  let tc = codemirrorStateCore.Facet.define({
    combine: t => codemirrorStateCore.mergeConfig(t, {
      activateOnTyping: true,
      activateOnCompletion: () => false,
      activateOnTypingDelay: 100,
      selectOnOpen: true,
      override: null,
      closeOnBlur: true,
      maxRenderedOptions: 100,
      defaultKeymap: true,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: false,
      icons: true,
      addToOptions: [],
      positionInfo: tp,
      filterStrict: false,
      compareCompletions: (t, e) => t.label.localeCompare(e.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (t, e) => t && e,
      closeOnBlur: (t, e) => t && e,
      icons: (t, e) => t && e,
      tooltipClass: (t, e) => i => td(t(i), e(i)),
      optionClass: (t, e) => i => td(t(i), e(i)),
      addToOptions: (t, e) => t.concat(e),
      filterStrict: (t, e) => t || e
    })
  });
  function td(t, e) {
    if (t) {
      if (e) {
        return t + " " + e;
      } else {
        return t;
      }
    } else {
      return e;
    }
  }
  function tp(t, e, i, n, s, r) {
    let o = t.textDirection == codemirrorEditorViewCore.directionConstants.RTL;
    let O = o;
    let a = false;
    let l = "top";
    let h;
    let c;
    let d = e.left - s.left;
    let p = s.right - e.right;
    let f = n.right - n.left;
    let u = n.bottom - n.top;
    if (O && d < Math.min(f, p)) {
      O = false;
    } else if (!O && p < Math.min(f, d)) {
      O = true;
    }
    if (f <= (O ? d : p)) {
      h = Math.max(s.top, Math.min(i.top, s.bottom - u)) - e.top;
      c = Math.min(400, O ? d : p);
    } else {
      a = true;
      c = Math.min(400, (o ? e.right : s.right - e.left) - 30);
      let t = s.bottom - e.bottom;
      if (t >= u || t > e.top) {
        h = i.bottom - e.top;
      } else {
        l = "bottom";
        h = e.bottom - i.top;
      }
    }
    let m = (e.bottom - e.top) / r.offsetHeight;
    let Q = (e.right - e.left) / r.offsetWidth;
    return {
      style: `${l}: ${h / m}px; max-width: ${c / Q}px`,
      class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : O ? "left" : "right")
    };
  }
  function tf(t, e, i) {
    if (t <= i) {
      return {
        from: 0,
        to: t
      };
    }
    if (e < 0) {
      e = 0;
    }
    if (e <= t >> 1) {
      let t = Math.floor(e / i);
      return {
        from: t * i,
        to: (t + 1) * i
      };
    }
    let n = Math.floor((t - e) / i);
    return {
      from: t - (n + 1) * i,
      to: t - n * i
    };
  }
  class tu {
    constructor(t, e, i) {
      let n;
      this.view = t;
      this.stateField = e;
      this.applyCompletion = i;
      this.info = null;
      this.infoDestroy = null;
      this.placeInfoReq = {
        read: () => this.measureInfo(),
        write: t => this.placeInfo(t),
        key: this
      };
      this.space = null;
      this.currentClass = "";
      let s = t.state.field(e);
      let {
        options: r,
        selected: o
      } = s.open;
      let O = t.state.facet(tc);
      this.optionContent = (n = O.addToOptions.slice(), O.icons && n.push({
        render(t) {
          let e = document.createElement("div");
          e.classList.add("cm-completionIcon");
          if (t.type) {
            e.classList.add(...t.type.split(/\s+/g).map(t => "cm-completionIcon-" + t));
          }
          e.setAttribute("aria-hidden", "true");
          return e;
        },
        position: 20
      }), n.push({
        render(t, e, i, n) {
          let s = document.createElement("span");
          s.className = "cm-completionLabel";
          let r = t.displayLabel || t.label;
          let o = 0;
          for (let t = 0; t < n.length;) {
            let e = n[t++];
            let i = n[t++];
            if (e > o) {
              s.appendChild(document.createTextNode(r.slice(o, e)));
            }
            let O = s.appendChild(document.createElement("span"));
            O.appendChild(document.createTextNode(r.slice(e, i)));
            O.className = "cm-completionMatchedText";
            o = i;
          }
          if (o < r.length) {
            s.appendChild(document.createTextNode(r.slice(o)));
          }
          return s;
        },
        position: 50
      }, {
        render(t) {
          if (!t.detail) {
            return null;
          }
          let e = document.createElement("span");
          e.className = "cm-completionDetail";
          e.textContent = t.detail;
          return e;
        },
        position: 80
      }), n.sort((t, e) => t.position - e.position).map(t => t.render));
      this.optionClass = O.optionClass;
      this.tooltipClass = O.tooltipClass;
      this.range = tf(r.length, o, O.maxRenderedOptions);
      this.dom = document.createElement("div");
      this.dom.className = "cm-tooltip-autocomplete";
      this.updateTooltipClass(t.state);
      this.dom.addEventListener("mousedown", i => {
        let {
          options: n
        } = t.state.field(e).open;
        for (let e = i.target, s; e && e != this.dom; e = e.parentNode) {
          if (e.nodeName == "LI" && (s = /-(\d+)$/.exec(e.id)) && +s[1] < n.length) {
            this.applyCompletion(t, n[+s[1]]);
            i.preventDefault();
            return;
          }
        }
      });
      this.dom.addEventListener("focusout", e => {
        let i = t.state.field(this.stateField, false);
        if (i && i.tooltip && t.state.facet(tc).closeOnBlur && e.relatedTarget != t.contentDOM) {
          t.dispatch({
            effects: ta.of(null)
          });
        }
      });
      this.showOptions(r, s.id);
    }
    mount() {
      this.updateSel();
    }
    showOptions(t, e) {
      if (this.list) {
        this.list.remove();
      }
      this.list = this.dom.appendChild(this.createListBox(t, e, this.range));
      this.list.addEventListener("scroll", () => {
        if (this.info) {
          this.view.requestMeasure(this.placeInfoReq);
        }
      });
    }
    update(t) {
      let i = t.state.field(this.stateField);
      let n = t.startState.field(this.stateField);
      this.updateTooltipClass(t.state);
      if (i != n) {
        let {
          options: s,
          selected: r,
          disabled: o
        } = i.open;
        if (!n.open || n.open.options != s) {
          this.range = tf(s.length, r, t.state.facet(tc).maxRenderedOptions);
          this.showOptions(s, i.id);
        }
        this.updateSel();
        if (o != n.open?.disabled) {
          this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!o);
        }
      }
    }
    updateTooltipClass(t) {
      let e = this.tooltipClass(t);
      if (e != this.currentClass) {
        for (let t of this.currentClass.split(" ")) {
          if (t) {
            this.dom.classList.remove(t);
          }
        }
        for (let t of e.split(" ")) {
          if (t) {
            this.dom.classList.add(t);
          }
        }
        this.currentClass = e;
      }
    }
    positioned(t) {
      this.space = t;
      if (this.info) {
        this.view.requestMeasure(this.placeInfoReq);
      }
    }
    updateSel() {
      let t = this.view.state.field(this.stateField);
      let e = t.open;
      if (e.selected > -1 && e.selected < this.range.from || e.selected >= this.range.to) {
        this.range = tf(e.options.length, e.selected, this.view.state.facet(tc).maxRenderedOptions);
        this.showOptions(e.options, t.id);
      }
      if (this.updateSelectedOption(e.selected)) {
        this.destroyInfo();
        let {
          completion: i
        } = e.options[e.selected];
        let {
          info: n
        } = i;
        if (!n) {
          return;
        }
        let s = typeof n == "string" ? document.createTextNode(n) : n(i);
        if (!s) {
          return;
        }
        if ("then" in s) {
          s.then(e => {
            if (e && this.view.state.field(this.stateField, false) == t) {
              this.addInfoPane(e, i);
            }
          }).catch(t => codemirrorEditorViewCore.DecorationType(this.view.state, t, "completion info"));
        } else {
          this.addInfoPane(s, i);
        }
      }
    }
    addInfoPane(t, e) {
      this.destroyInfo();
      let i = this.info = document.createElement("div");
      i.className = "cm-tooltip cm-completionInfo";
      if (t.nodeType != null) {
        i.appendChild(t);
        this.infoDestroy = null;
      } else {
        let {
          dom: e,
          destroy: n
        } = t;
        i.appendChild(e);
        this.infoDestroy = n || null;
      }
      this.dom.appendChild(i);
      this.view.requestMeasure(this.placeInfoReq);
    }
    updateSelectedOption(t) {
      var e;
      var i;
      let n;
      let s;
      let r;
      let o = null;
      for (let e = this.list.firstChild, i = this.range.from; e; e = e.nextSibling, i++) {
        if (e.nodeName == "LI" && e.id) {
          if (i == t) {
            if (!e.hasAttribute("aria-selected")) {
              e.setAttribute("aria-selected", "true");
              o = e;
            }
          } else if (e.hasAttribute("aria-selected")) {
            e.removeAttribute("aria-selected");
          }
        } else {
          i--;
        }
      }
      if (o) {
        e = this.list;
        i = o;
        n = e.getBoundingClientRect();
        s = i.getBoundingClientRect();
        r = n.height / e.offsetHeight;
        if (s.top < n.top) {
          e.scrollTop -= (n.top - s.top) / r;
        } else if (s.bottom > n.bottom) {
          e.scrollTop += (s.bottom - n.bottom) / r;
        }
      }
      return o;
    }
    measureInfo() {
      let t = this.dom.querySelector("[aria-selected]");
      if (!t || !this.info) {
        return null;
      }
      let e = this.dom.getBoundingClientRect();
      let i = this.info.getBoundingClientRect();
      let n = t.getBoundingClientRect();
      let s = this.space;
      if (!s) {
        let t = this.dom.ownerDocument.defaultView || window;
        s = {
          left: 0,
          top: 0,
          right: t.innerWidth,
          bottom: t.innerHeight
        };
      }
      if (n.top > Math.min(s.bottom, e.bottom) - 10 || n.bottom < Math.max(s.top, e.top) + 10) {
        return null;
      } else {
        return this.view.state.facet(tc).positionInfo(this.view, e, n, i, s, this.dom);
      }
    }
    placeInfo(t) {
      if (this.info) {
        if (t) {
          if (t.style) {
            this.info.style.cssText = t.style;
          }
          this.info.className = "cm-tooltip cm-completionInfo " + (t.class || "");
        } else {
          this.info.style.cssText = "top: -1e6px";
        }
      }
    }
    createListBox(t, e, i) {
      let n = document.createElement("ul");
      n.id = e;
      n.setAttribute("role", "listbox");
      n.setAttribute("aria-expanded", "true");
      n.setAttribute("aria-label", this.view.state.phrase("Completions"));
      let s = null;
      for (let r = i.from; r < i.to; r++) {
        let {
          completion: o,
          match: O
        } = t[r];
        let {
          section: a
        } = o;
        if (a) {
          let t = typeof a == "string" ? a : a.name;
          if (t != s && (r > i.from || i.from == 0)) {
            s = t;
            if (typeof a != "string" && a.header) {
              n.appendChild(a.header(a));
            } else {
              n.appendChild(document.createElement("completion-section")).textContent = t;
            }
          }
        }
        let l = n.appendChild(document.createElement("li"));
        l.id = e + "-" + r;
        l.setAttribute("role", "option");
        let h = this.optionClass(o);
        if (h) {
          l.className = h;
        }
        for (let t of this.optionContent) {
          let e = t(o, this.view.state, this.view, O);
          if (e) {
            l.appendChild(e);
          }
        }
      }
      if (i.from) {
        n.classList.add("cm-completionListIncompleteTop");
      }
      if (i.to < t.length) {
        n.classList.add("cm-completionListIncompleteBottom");
      }
      return n;
    }
    destroyInfo() {
      if (this.info) {
        if (this.infoDestroy) {
          this.infoDestroy();
        }
        this.info.remove();
        this.info = null;
      }
    }
    destroy() {
      this.destroyInfo();
    }
  }
  function tm(t) {
    return (t.boost || 0) * 100 + !!t.apply * 10 + !!t.info * 5 + +!!t.type;
  }
  class tQ {
    constructor(t, e, i, n, s, r) {
      this.options = t;
      this.attrs = e;
      this.tooltip = i;
      this.timestamp = n;
      this.selected = s;
      this.disabled = r;
    }
    setSelected(t, e) {
      if (t == this.selected || t >= this.options.length) {
        return this;
      } else {
        return new tQ(this.options, tx(e, t), this.tooltip, this.timestamp, t, this.disabled);
      }
    }
    static build(t, e, i, n, s, r) {
      if (n && !r && t.some(t => t.isPending)) {
        return n.setDisabled();
      }
      let o = function (t, e) {
        let i = [];
        let n = null;
        let s = t => {
          i.push(t);
          let {
            section: e
          } = t.completion;
          if (e) {
            n ||= [];
            let t = typeof e == "string" ? e : e.name;
            if (!n.some(e => e.name == t)) {
              n.push(typeof e == "string" ? {
                name: t
              } : e);
            }
          }
        };
        let r = e.facet(tc);
        for (let n of t) {
          if (n.hasResult()) {
            let t = n.result.getMatch;
            if (n.result.filter === false) {
              for (let e of n.result.options) {
                s(new te(e, n.source, t ? t(e) : [], 1000000000 - i.length));
              }
            } else {
              let i = e.sliceDoc(n.from, n.to);
              let o;
              let O = r.filterStrict ? new th(i) : new tl(i);
              for (let e of n.result.options) {
                if (o = O.match(e.label)) {
                  let i = e.displayLabel ? t ? t(e, o.matched) : [] : o.matched;
                  s(new te(e, n.source, i, o.score + (e.boost || 0)));
                }
              }
            }
          }
        }
        if (n) {
          let t = Object.create(null);
          let e = 0;
          for (let i of n.sort((t, e) => {
            return (t.rank ?? 1000000000) - (e.rank ?? 1000000000) || (t.name < e.name ? -1 : 1);
          })) {
            e -= 100000;
            t[i.name] = e;
          }
          for (let e of i) {
            let {
              section: i
            } = e.completion;
            if (i) {
              e.score += t[typeof i == "string" ? i : i.name];
            }
          }
        }
        let o = [];
        let O = null;
        let a = r.compareCompletions;
        for (let t of i.sort((t, e) => e.score - t.score || a(t.completion, e.completion))) {
          let e = t.completion;
          if (O && O.label == e.label && O.detail == e.detail && (O.type == null || e.type == null || O.type == e.type) && O.apply == e.apply && O.boost == e.boost) {
            if (tm(t.completion) > tm(O)) {
              o[o.length - 1] = t;
            }
          } else {
            o.push(t);
          }
          O = t.completion;
        }
        return o;
      }(t, e);
      if (!o.length) {
        if (n && t.some(t => t.isPending)) {
          return n.setDisabled();
        } else {
          return null;
        }
      }
      let O = e.facet(tc).selectOnOpen ? 0 : -1;
      if (n && n.selected != O && n.selected != -1) {
        let t = n.options[n.selected].completion;
        for (let e = 0; e < o.length; e++) {
          if (o[e].completion == t) {
            O = e;
            break;
          }
        }
      }
      return new tQ(o, tx(i, O), {
        pos: t.reduce((t, e) => e.hasResult() ? Math.min(t, e.from) : t, 100000000),
        create: t$,
        above: s.aboveCursor
      }, n ? n.timestamp : Date.now(), O, false);
    }
    map(t) {
      return new tQ(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), {
        pos: t.mapPos(this.tooltip.pos)
      }), this.timestamp, this.selected, this.disabled);
    }
    setDisabled() {
      return new tQ(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
    }
  }
  class tg {
    constructor(t, e, i) {
      this.active = t;
      this.id = e;
      this.open = i;
    }
    static start() {
      return new tg(tk, "cm-ac-" + Math.floor(Math.random() * 2000000).toString(36), null);
    }
    update(t) {
      let {
        state: e
      } = t;
      let i = e.facet(tc);
      let n = (i.override || e.languageDataAt("autocomplete", ti(e)).map(to)).map(e => (this.active.find(t => t.source == e) || new ty(e, +!!this.active.some(t => t.state != 0))).update(t, i));
      if (n.length == this.active.length && n.every((t, e) => t == this.active[e])) {
        n = this.active;
      }
      let s = this.open;
      let r = t.effects.some(t => t.is(tP));
      if (s && t.docChanged) {
        s = s.map(t.changes);
      }
      if (t.selection || n.some(e => e.hasResult() && t.changes.touchesRange(e.from, e.to)) || !function (t, e) {
        if (t == e) {
          return true;
        }
        for (let i = 0, n = 0;;) {
          while (i < t.length && !t[i].hasResult()) {
            i++;
          }
          while (n < e.length && !e[n].hasResult()) {
            n++;
          }
          let s = i == t.length;
          let r = n == e.length;
          if (s || r) {
            return s == r;
          }
          if (t[i++].result != e[n++].result) {
            return false;
          }
        }
      }(n, this.active) || r) {
        s = tQ.build(n, e, this.id, s, i, r);
      } else if (s && s.disabled && !n.some(t => t.isPending)) {
        s = null;
      }
      if (!s && n.every(t => !t.isPending) && n.some(t => t.hasResult())) {
        n = n.map(t => t.hasResult() ? new ty(t.source, 0) : t);
      }
      for (let o of t.effects) {
        if (o.is(tv)) {
          s = s && s.setSelected(o.value, this.id);
        }
      }
      if (n == this.active && s == this.open) {
        return this;
      } else {
        return new tg(n, this.id, s);
      }
    }
    get tooltip() {
      if (this.open) {
        return this.open.tooltip;
      } else {
        return null;
      }
    }
    get attrs() {
      if (this.open) {
        return this.open.attrs;
      } else if (this.active.length) {
        return tT;
      } else {
        return tS;
      }
    }
  }
  let tT = {
    "aria-autocomplete": "list"
  };
  let tS = {};
  function tx(t, e) {
    let i = {
      "aria-autocomplete": "list",
      "aria-haspopup": "listbox",
      "aria-controls": t
    };
    if (e > -1) {
      i["aria-activedescendant"] = t + "-" + e;
    }
    return i;
  }
  let tk = [];
  class ty {
    constructor(t, e, i = false) {
      this.source = t;
      this.state = e;
      this.explicit = i;
    }
    hasResult() {
      return false;
    }
    get isPending() {
      return this.state == 1;
    }
    update(t, e) {
      let i = function (t, e) {
        if (t.isUserEvent("input.complete")) {
          let i = t.annotation(ts);
          if (i && e.activateOnCompletion(i)) {
            return 12;
          }
        }
        let i = t.isUserEvent("input.type");
        if (i && e.activateOnTyping) {
          return 5;
        } else if (i) {
          return 1;
        } else if (t.isUserEvent("delete.backward")) {
          return 2;
        } else if (t.selection) {
          return 8;
        } else {
          return !!t.docChanged * 16;
        }
      }(t, e);
      let n = this;
      if (i & 8 || i & 16 && this.touches(t)) {
        n = new ty(n.source, 0);
      }
      if (i & 4 && n.state == 0) {
        n = new ty(this.source, 1);
      }
      n = n.updateFor(t, i);
      for (let e of t.effects) {
        if (e.is(tO)) {
          n = new ty(n.source, 1, e.value);
        } else if (e.is(ta)) {
          n = new ty(n.source, 0);
        } else if (e.is(tP)) {
          for (let t of e.value) {
            if (t.source == n.source) {
              n = t;
            }
          }
        }
      }
      return n;
    }
    updateFor(t, e) {
      return this.map(t.changes);
    }
    map(t) {
      return this;
    }
    touches(t) {
      return t.changes.touchesRange(ti(t.state));
    }
  }
  class tb extends ty {
    constructor(t, e, i, n, s, r) {
      super(t, 3, e);
      this.limit = i;
      this.result = n;
      this.from = s;
      this.to = r;
    }
    hasResult() {
      return true;
    }
    updateFor(t, e) {
      if (!(e & 3)) {
        return this.map(t.changes);
      }
      let n = this.result;
      if (n.map && !t.changes.empty) {
        n = n.map(n, t.changes);
      }
      let s = t.changes.mapPos(this.from);
      let r = t.changes.mapPos(this.to, 1);
      let o = ti(t.state);
      if (o > r || !n || e & 2 && (ti(t.startState) == this.from || o < this.limit)) {
        return new ty(this.source, e & 4 ? 1 : 0);
      }
      let O = t.changes.mapPos(this.limit);
      if (!function (t, e, i, n) {
        if (!t) {
          return false;
        }
        let s = e.sliceDoc(i, n);
        if (typeof t == "function") {
          return t(s, i, n, e);
        } else {
          return tn(t, true).test(s);
        }
      }(n.validFor, t.state, s, r)) {
        if (n.update && (n = n.update(n, s, r, new M(t.state, o, false)))) {
          return new tb(this.source, this.explicit, O, n, n.from, n.to ?? ti(t.state));
        } else {
          return new ty(this.source, 1, this.explicit);
        }
      } else {
        return new tb(this.source, this.explicit, O, n, s, r);
      }
    }
    map(t) {
      if (t.empty) {
        return this;
      } else if (this.result.map ? this.result.map(this.result, t) : this.result) {
        return new tb(this.source, this.explicit, t.mapPos(this.limit), this.result, t.mapPos(this.from), t.mapPos(this.to, 1));
      } else {
        return new ty(this.source, 0);
      }
    }
    touches(t) {
      return t.changes.touchesRange(this.from, this.to);
    }
  }
  let tP = codemirrorStateCore.EffectType.define({
    map: (t, e) => t.map(t => t.map(e))
  });
  let tv = codemirrorStateCore.EffectType.define();
  let tq = codemirrorStateCore.PrecLevels.define({
    create: () => tg.start(),
    update: (t, e) => t.update(e),
    provide: t => [codemirrorEditorViewCore.tooltipsFacet.from(t, t => t.tooltip), codemirrorEditorViewCore.EditorView.contentAttributes.from(t, t => t.attrs)]
  });
  s = function (t, e) {
    let i = e.completion.apply || e.completion.label;
    let n = t.state.field(tq).active.find(t => t.source == e.source);
    return n instanceof tb && (typeof i == "string" ? t.dispatch(Object.assign(Object.assign({}, function (t, e, i, n) {
      let {
        main: s
      } = t.selection;
      let r = i - s.from;
      let o = n - s.from;
      return Object.assign(Object.assign({}, t.changeByRange(O => {
        if (O != s && i != n && t.sliceDoc(O.from + r, O.from + o) != t.sliceDoc(i, n)) {
          return {
            range: O
          };
        }
        let a = t.toText(e);
        return {
          changes: {
            from: O.from + r,
            to: n == s.from ? O.to : O.from + o,
            insert: a
          },
          range: codemirrorStateCore.EditorSelection.cursor(O.from + r + a.length)
        };
      })), {
        scrollIntoView: true,
        userEvent: "input.complete"
      });
    }(t.state, i, n.from, n.to)), {
      annotations: ts.of(e.completion)
    })) : i(t, e.completion, n.from, n.to), true);
  };
  let t$ = t => new tu(t, tq, s);
  if (typeof navigator == "object") {
    navigator.platform;
  }
  let tz = codemirrorEditorViewCore.EditorView.baseTheme({
    ".cm-tooltip.cm-tooltip-autocomplete": {
      "& > ul": {
        fontFamily: "monospace",
        whiteSpace: "nowrap",
        overflow: "hidden auto",
        maxWidth_fallback: "700px",
        maxWidth: "min(700px, 95vw)",
        minWidth: "250px",
        maxHeight: "10em",
        height: "100%",
        listStyle: "none",
        margin: 0,
        padding: 0,
        "& > li, & > completion-section": {
          padding: "1px 3px",
          lineHeight: 1.2
        },
        "& > li": {
          overflowX: "hidden",
          textOverflow: "ellipsis",
          cursor: "pointer"
        },
        "& > completion-section": {
          display: "list-item",
          borderBottom: "1px solid silver",
          paddingLeft: "0.5em",
          opacity: 0.7
        }
      }
    },
    "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
      background: "#17c",
      color: "white"
    },
    "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
      background: "#777"
    },
    "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
      background: "#347",
      color: "white"
    },
    "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
      background: "#444"
    },
    ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
      content: "\"···\"",
      opacity: 0.5,
      display: "block",
      textAlign: "center"
    },
    ".cm-tooltip.cm-completionInfo": {
      position: "absolute",
      padding: "3px 9px",
      width: "max-content",
      maxWidth: "400px",
      boxSizing: "border-box",
      whiteSpace: "pre-line"
    },
    ".cm-completionInfo.cm-completionInfo-left": {
      right: "100%"
    },
    ".cm-completionInfo.cm-completionInfo-right": {
      left: "100%"
    },
    ".cm-completionInfo.cm-completionInfo-left-narrow": {
      right: "30px"
    },
    ".cm-completionInfo.cm-completionInfo-right-narrow": {
      left: "30px"
    },
    "&light .cm-snippetField": {
      backgroundColor: "#00000022"
    },
    "&dark .cm-snippetField": {
      backgroundColor: "#ffffff22"
    },
    ".cm-snippetFieldPosition": {
      verticalAlign: "text-top",
      width: 0,
      height: "1.15em",
      display: "inline-block",
      margin: "0 -0.7px -.7em",
      borderLeft: "1.4px dotted #888"
    },
    ".cm-completionMatchedText": {
      textDecoration: "underline"
    },
    ".cm-completionDetail": {
      marginLeft: "0.5em",
      fontStyle: "italic"
    },
    ".cm-completionIcon": {
      fontSize: "90%",
      width: ".8em",
      display: "inline-block",
      textAlign: "center",
      paddingRight: ".6em",
      opacity: "0.6",
      boxSizing: "content-box"
    },
    ".cm-completionIcon-function, .cm-completionIcon-method": {
      "&:after": {
        content: "'ƒ'"
      }
    },
    ".cm-completionIcon-class": {
      "&:after": {
        content: "'○'"
      }
    },
    ".cm-completionIcon-interface": {
      "&:after": {
        content: "'◌'"
      }
    },
    ".cm-completionIcon-variable": {
      "&:after": {
        content: "'𝑥'"
      }
    },
    ".cm-completionIcon-constant": {
      "&:after": {
        content: "'𝐶'"
      }
    },
    ".cm-completionIcon-type": {
      "&:after": {
        content: "'𝑡'"
      }
    },
    ".cm-completionIcon-enum": {
      "&:after": {
        content: "'∪'"
      }
    },
    ".cm-completionIcon-property": {
      "&:after": {
        content: "'□'"
      }
    },
    ".cm-completionIcon-keyword": {
      "&:after": {
        content: "'🔑︎'"
      }
    },
    ".cm-completionIcon-namespace": {
      "&:after": {
        content: "'▢'"
      }
    },
    ".cm-completionIcon-text": {
      "&:after": {
        content: "'abc'",
        fontSize: "50%",
        verticalAlign: "middle"
      }
    }
  });
  class tR {
    constructor(t, e, i, n) {
      this.field = t;
      this.line = e;
      this.from = i;
      this.to = n;
    }
  }
  class tw {
    constructor(t, e, i) {
      this.field = t;
      this.from = e;
      this.to = i;
    }
    map(t) {
      let e = t.mapPos(this.from, -1, codemirrorStateCore.MapMode.TrackDel);
      let i = t.mapPos(this.to, 1, codemirrorStateCore.MapMode.TrackDel);
      if (e == null || i == null) {
        return null;
      } else {
        return new tw(this.field, e, i);
      }
    }
  }
  class tX {
    constructor(t, e) {
      this.lines = t;
      this.fieldPositions = e;
    }
    instantiate(t, e) {
      let i = [];
      let n = [e];
      let s = t.doc.lineAt(e);
      let r = /^\s*/.exec(s.text)[0];
      for (let s of this.lines) {
        if (i.length) {
          let i = r;
          let o = /^\t*/.exec(s)[0].length;
          for (let e = 0; e < o; e++) {
            i += t.facet(codemirrorLanguageSupport.indentUnitFacet);
          }
          n.push(e + i.length - o);
          s = i + s.slice(o);
        }
        i.push(s);
        e += s.length + 1;
      }
      return {
        text: i,
        ranges: this.fieldPositions.map(t => new tw(t.field, n[t.line] + t.from, n[t.line] + t.to))
      };
    }
    static parse(t) {
      let e = [];
      let i = [];
      let n = [];
      let s;
      for (let r of t.split(/\r\n?|\n/)) {
        while (s = /[#$]\{(?:(\d+)(?::([^}]*))?|((?:\\[{}]|[^}])*))\}/.exec(r)) {
          let t = s[1] ? +s[1] : null;
          let o = s[2] || s[3] || "";
          let O = -1;
          let a = o.replace(/\\[{}]/g, t => t[1]);
          for (let i = 0; i < e.length; i++) {
            if (!(t != null ? e[i].seq != t : !a || e[i].name != a)) {
              O = i;
            }
          }
          if (O < 0) {
            let i = 0;
            while (i < e.length && (t == null || e[i].seq != null && e[i].seq < t)) {
              i++;
            }
            e.splice(i, 0, {
              seq: t,
              name: a
            });
            O = i;
            for (let s of n) {
              if (s.field >= O) {
                s.field++;
              }
            }
          }
          n.push(new tR(O, i.length, s.index, s.index + a.length));
          r = r.slice(0, s.index) + o + r.slice(s.index + s[0].length);
        }
        r = r.replace(/\\([{}])/g, (t, e, s) => {
          for (let t of n) {
            if (t.line == i.length && t.from > s) {
              t.from--;
              t.to--;
            }
          }
          return e;
        });
        i.push(r);
      }
      return new tX(i, n);
    }
  }
  let t_ = codemirrorEditorViewCore.decorationClass.widget({
    widget: new class extends codemirrorEditorViewCore.Decoration {
      toDOM() {
        let t = document.createElement("span");
        t.className = "cm-snippetFieldPosition";
        return t;
      }
      ignoreEvent() {
        return false;
      }
    }()
  });
  let tW = codemirrorEditorViewCore.decorationClass.mark({
    class: "cm-snippetField"
  });
  class tU {
    constructor(t, e) {
      this.ranges = t;
      this.active = e;
      this.deco = codemirrorEditorViewCore.decorationClass.set(t.map(t => (t.from == t.to ? t_ : tW).range(t.from, t.to)));
    }
    map(t) {
      let e = [];
      for (let i of this.ranges) {
        let n = i.map(t);
        if (!n) {
          return null;
        }
        e.push(n);
      }
      return new tU(e, this.active);
    }
    selectionInsideField(t) {
      return t.ranges.every(t => this.ranges.some(e => e.field == this.active && e.from <= t.from && e.to >= t.to));
    }
  }
  let tj = codemirrorStateCore.EffectType.define({
    map: (t, e) => t && t.map(e)
  });
  let tV = codemirrorStateCore.EffectType.define();
  let tE = codemirrorStateCore.PrecLevels.define({
    create: () => null,
    update(t, e) {
      for (let i of e.effects) {
        if (i.is(tj)) {
          return i.value;
        }
        if (i.is(tV) && t) {
          return new tU(t.ranges, i.value);
        }
      }
      if (t && e.docChanged) {
        t = t.map(e.changes);
      }
      if (t && e.selection && !t.selectionInsideField(e.selection)) {
        t = null;
      }
      return t;
    },
    provide: t => codemirrorEditorViewCore.EditorView.decorations.from(t, t => t ? t.deco : codemirrorEditorViewCore.decorationClass.none)
  });
  function tG(t, e) {
    return codemirrorStateCore.EditorSelection.create(t.filter(t => t.field == e).map(t => codemirrorStateCore.EditorSelection.range(t.from, t.to)));
  }
  function tC(t) {
    return ({
      state: e,
      dispatch: i
    }) => {
      let n = e.field(tE, false);
      if (!n || t < 0 && n.active == 0) {
        return false;
      }
      let s = n.active + t;
      let r = t > 0 && !n.ranges.some(e => e.field == s + t);
      i(e.update({
        selection: tG(n.ranges, s),
        effects: tj.of(r ? null : new tU(n.ranges, s)),
        scrollIntoView: true
      }));
      return true;
    };
  }
  let tZ = [{
    key: "Tab",
    run: tC(1),
    shift: tC(-1)
  }, {
    key: "Escape",
    run: ({
      state: t,
      dispatch: e
    }) => !!t.field(tE, false) && (e(t.update({
      effects: tj.of(null)
    })), true)
  }];
  let tA = codemirrorStateCore.Facet.define({
    combine: t => t.length ? t[0] : tZ
  });
  let tI = codemirrorStateCore.StateField.highest(codemirrorEditorViewCore.keymapFacet.compute([tA], t => t.facet(tA)));
  function tN(t, e) {
    let i;
    return Object.assign(Object.assign({}, e), {
      apply: (i = tX.parse(t), (t, e, n, s) => {
        let {
          text: r,
          ranges: o
        } = i.instantiate(t.state, n);
        let O = {
          changes: {
            from: n,
            to: s,
            insert: codemirrorStateCore.Text.of(r)
          },
          scrollIntoView: true,
          annotations: e ? [ts.of(e), codemirrorStateCore.Transaction.userEvent.of("input.complete")] : undefined
        };
        if (o.length) {
          O.selection = tG(o, 0);
        }
        if (o.some(t => t.field > 0)) {
          let e = new tU(o, 0);
          let i = O.effects = [tj.of(e)];
          if (t.state.field(tE, false) === undefined) {
            i.push(codemirrorStateCore.EffectType.appendConfig.of([tE, tI, tY, tz]));
          }
        }
        t.dispatch(t.state.update(O));
      })
    });
  }
  let tY = codemirrorEditorViewCore.EditorView.domEventHandlers({
    mousedown(t, e) {
      let i = e.state.field(tE, false);
      let n;
      if (!i || (n = e.posAtCoords({
        x: t.clientX,
        y: t.clientY
      })) == null) {
        return false;
      }
      let s = i.ranges.find(t => t.from <= n && t.to >= n);
      return !!s && s.field != i.active && (e.dispatch({
        selection: tG(i.ranges, s.field),
        effects: tj.of(i.ranges.some(t => t.field > s.field) ? new tU(i.ranges, s.field) : null),
        scrollIntoView: true
      }), true);
    }
  });
  let tJ = new class extends codemirrorStateCore.RangeValue {}();
  tJ.startSide = 1;
  tJ.endSide = -1;
  if (typeof navigator == "object") {
    navigator.userAgent;
  }
  let tF = new class {
    constructor() {
      this.map = new WeakMap();
    }
    setBuffer(t, e, i) {
      let n = this.map.get(t);
      if (!n) {
        this.map.set(t, n = new Map());
      }
      n.set(e, i);
    }
    getBuffer(t, e) {
      let i = this.map.get(t);
      return i && i.get(e);
    }
    set(t, e) {
      if (t instanceof A) {
        this.setBuffer(t.context.buffer, t.index, e);
      } else if (t instanceof E) {
        this.map.set(t.tree, e);
      }
    }
    get(t) {
      if (t instanceof A) {
        return this.getBuffer(t.context.buffer, t.index);
      } else if (t instanceof E) {
        return this.map.get(t.tree);
      } else {
        return undefined;
      }
    }
    cursorSet(t, e) {
      if (t.buffer) {
        this.setBuffer(t.buffer.buffer, t.index, e);
      } else {
        this.map.set(t.tree, e);
      }
    }
    cursorGet(t) {
      if (t.buffer) {
        return this.getBuffer(t.buffer.buffer, t.index);
      } else {
        return this.map.get(t.tree);
      }
    }
  }();
  let tD = new Set(["Script", "Body", "FunctionDefinition", "ClassDefinition", "LambdaExpression", "ForStatement", "MatchClause"]);
  function tB(t) {
    return (e, i, n) => {
      if (n) {
        return false;
      }
      let s = e.node.getChild("VariableName");
      if (s) {
        i(s, t);
      }
      return true;
    };
  }
  let tL = {
    FunctionDefinition: tB("function"),
    ClassDefinition: tB("class"),
    ForStatement(t, e, i) {
      if (i) {
        for (let i = t.node.firstChild; i; i = i.nextSibling) {
          if (i.name == "VariableName") {
            e(i, "variable");
          } else if (i.name == "in") {
            break;
          }
        }
      }
    },
    ImportStatement(t, e) {
      let {
        node: s
      } = t;
      let r = s.firstChild?.name == "from";
      for (let t = s.getChild("import"); t; t = t.nextSibling) {
        if (t.name == "VariableName" && t.nextSibling?.name != "as") {
          e(t, r ? "variable" : "namespace");
        }
      }
    },
    AssignStatement(t, e) {
      for (let i = t.node.firstChild; i; i = i.nextSibling) {
        if (i.name == "VariableName") {
          e(i, "variable");
        } else if (i.name == ":" || i.name == "AssignOp") {
          break;
        }
      }
    },
    ParamList(t, e) {
      for (let i = null, n = t.node.firstChild; n; n = n.nextSibling) {
        if (n.name == "VariableName" && (!i || !/\*|AssignOp/.test(i.name))) {
          e(n, "variable");
        }
        i = n;
      }
    },
    CapturePattern: tB("variable"),
    AsPattern: tB("variable"),
    __proto__: null
  };
  let tH = /^[\w\xa1-\uffff][\w\d\xa1-\uffff]*$/;
  let tM = ["String", "FormatString", "Comment", "PropertyName"];
  function tK(t) {
    let e = codemirrorLanguageSupport.getTree(t.state).resolveInner(t.pos, -1);
    if (tM.indexOf(e.name) > -1) {
      return null;
    }
    let i = e.name == "VariableName" || e.to - e.from < 20 && tH.test(t.state.sliceDoc(e.from, e.to));
    if (!i && !t.explicit) {
      return null;
    }
    let n = [];
    for (let i = e; i; i = i.parent) {
      if (tD.has(i.name)) {
        n = n.concat(function t(e, i) {
          let n = tF.get(i);
          if (n) {
            return n;
          }
          let s = [];
          let r = true;
          function O(t, i) {
            let n = e.sliceString(t.from, t.to);
            s.push({
              label: n,
              type: i
            });
          }
          i.cursor(o.IncludeAnonymous).iterate(i => {
            if (i.name) {
              let t = tL[i.name];
              if (t && t(i, O, r) || !r && tD.has(i.name)) {
                return false;
              }
              r = false;
            } else if (i.to - i.from > 8192) {
              for (let n of t(e, i.node)) {
                s.push(n);
              }
              return false;
            }
          });
          tF.set(i, s);
          return s;
        }(t.state.doc, i));
      }
    }
    return {
      options: n,
      from: i ? e.from : t.pos,
      validFor: tH
    };
  }
  let t0 = ["__annotations__", "__builtins__", "__debug__", "__doc__", "__import__", "__name__", "__loader__", "__package__", "__spec__", "False", "None", "True"].map(t => ({
    label: t,
    type: "constant"
  })).concat(["ArithmeticError", "AssertionError", "AttributeError", "BaseException", "BlockingIOError", "BrokenPipeError", "BufferError", "BytesWarning", "ChildProcessError", "ConnectionAbortedError", "ConnectionError", "ConnectionRefusedError", "ConnectionResetError", "DeprecationWarning", "EOFError", "Ellipsis", "EncodingWarning", "EnvironmentError", "Exception", "FileExistsError", "FileNotFoundError", "FloatingPointError", "FutureWarning", "GeneratorExit", "IOError", "ImportError", "ImportWarning", "IndentationError", "IndexError", "InterruptedError", "IsADirectoryError", "KeyError", "KeyboardInterrupt", "LookupError", "MemoryError", "ModuleNotFoundError", "NameError", "NotADirectoryError", "NotImplemented", "NotImplementedError", "OSError", "OverflowError", "PendingDeprecationWarning", "PermissionError", "ProcessLookupError", "RecursionError", "ReferenceError", "ResourceWarning", "RuntimeError", "RuntimeWarning", "StopAsyncIteration", "StopIteration", "SyntaxError", "SyntaxWarning", "SystemError", "SystemExit", "TabError", "TimeoutError", "TypeError", "UnboundLocalError", "UnicodeDecodeError", "UnicodeEncodeError", "UnicodeError", "UnicodeTranslateError", "UnicodeWarning", "UserWarning", "ValueError", "Warning", "ZeroDivisionError"].map(t => ({
    label: t,
    type: "type"
  }))).concat(["bool", "bytearray", "bytes", "classmethod", "complex", "float", "frozenset", "int", "list", "map", "memoryview", "object", "range", "set", "staticmethod", "str", "super", "tuple", "type"].map(t => ({
    label: t,
    type: "class"
  }))).concat(["abs", "aiter", "all", "anext", "any", "ascii", "bin", "breakpoint", "callable", "chr", "compile", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "exit", "filter", "format", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "isinstance", "issubclass", "iter", "len", "license", "locals", "max", "min", "next", "oct", "open", "ord", "pow", "print", "property", "quit", "repr", "reversed", "round", "setattr", "slice", "sorted", "sum", "vars", "zip"].map(t => ({
    label: t,
    type: "function"
  })));
  let t1 = [tN("def ${name}(${params}):\n\t${}", {
    label: "def",
    detail: "function",
    type: "keyword"
  }), tN("for ${name} in ${collection}:\n\t${}", {
    label: "for",
    detail: "loop",
    type: "keyword"
  }), tN("while ${}:\n\t${}", {
    label: "while",
    detail: "loop",
    type: "keyword"
  }), tN("try:\n\t${}\nexcept ${error}:\n\t${}", {
    label: "try",
    detail: "/ except block",
    type: "keyword"
  }), tN("if ${}:\n\t\n", {
    label: "if",
    detail: "block",
    type: "keyword"
  }), tN("if ${}:\n\t${}\nelse:\n\t${}", {
    label: "if",
    detail: "/ else block",
    type: "keyword"
  }), tN("class ${name}:\n\tdef __init__(self, ${params}):\n\t\t\t${}", {
    label: "class",
    detail: "definition",
    type: "keyword"
  }), tN("import ${module}", {
    label: "import",
    detail: "statement",
    type: "keyword"
  }), tN("from ${module} import ${names}", {
    label: "from",
    detail: "import",
    type: "keyword"
  })];
  r = tt(t0.concat(t1));
  let t5 = t => {
    for (let e = codemirrorLanguageSupport.getTree(t.state).resolveInner(t.pos, -1); e; e = e.parent) {
      if (tM.indexOf(e.name) > -1) {
        return null;
      }
      if (e.type.isTop) {
        break;
      }
    }
    return r(t);
  };
  function t2(t) {
    let {
      node: e,
      pos: i
    } = t;
    let n = t.lineIndent(i, -1);
    let s = null;
    while (true) {
      let r = e.childBefore(i);
      if (r) {
        if (r.name == "Comment") {
          i = r.from;
        } else if (r.name == "Body") {
          if (t.baseIndentFor(r) + t.unit <= n) {
            s = r;
          }
          e = r;
        } else if (r.type.is("Statement")) {
          e = r;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    return s;
  }
  function t4(t, e) {
    let i = t.baseIndentFor(e);
    let n = t.lineAt(t.pos, -1);
    let s = n.from + n.text.length;
    if (/^\s*($|#)/.test(n.text) && t.node.to < s + 100 && !/\S/.test(t.state.sliceDoc(s, t.node.to)) && t.lineIndent(t.pos, -1) <= i || /^\s*(else:|elif |except |finally:)/.test(t.textAfter) && t.lineIndent(t.pos, -1) > i) {
      return null;
    } else {
      return i + t.unit;
    }
  }
  let t7 = codemirrorLanguageSupport.Parser.define({
    name: "python",
    parser: y.configure({
      props: [codemirrorLanguageSupport.indentNodeProp.add({
        Body: t => {
          let i = t2(t);
          return t4(t, i || t.node) ?? t.continue();
        },
        IfStatement: t => /^\s*(else:|elif )/.test(t.textAfter) ? t.baseIndent : t.continue(),
        "ForStatement WhileStatement": t => /^\s*else:/.test(t.textAfter) ? t.baseIndent : t.continue(),
        TryStatement: t => /^\s*(except |finally:|else:)/.test(t.textAfter) ? t.baseIndent : t.continue(),
        "TupleExpression ComprehensionExpression ParamList ArgList ParenthesizedExpression": codemirrorLanguageSupport.continuedIndent({
          closing: ")"
        }),
        "DictionaryExpression DictionaryComprehensionExpression SetExpression SetComprehensionExpression": codemirrorLanguageSupport.continuedIndent({
          closing: "}"
        }),
        "ArrayExpression ArrayComprehensionExpression": codemirrorLanguageSupport.continuedIndent({
          closing: "]"
        }),
        "String FormatString": () => null,
        Script: t => {
          let i = t2(t);
          return (i && t4(t, i)) ?? t.continue();
        }
      }), codemirrorLanguageSupport.foldState.add({
        "ArrayExpression DictionaryExpression SetExpression TupleExpression": codemirrorLanguageSupport.getFoldRange,
        Body: (t, e) => ({
          from: t.from + 1,
          to: t.to - +(t.to != e.doc.length)
        })
      })]
    }),
    languageData: {
      closeBrackets: {
        brackets: ["(", "[", "{", "'", "\"", "'''", "\"\"\""],
        stringPrefixes: ["f", "fr", "rf", "r", "u", "b", "br", "rb", "F", "FR", "RF", "R", "U", "B", "BR", "RB"]
      },
      commentTokens: {
        line: "#"
      },
      indentOnInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/
    }
  });
  function t3() {
    return new codemirrorLanguageSupport.Language(t7, [t7.data.of({
      autocomplete: tK
    }), t7.data.of({
      autocomplete: t5
    })]);
  }
  require.r(exports);
  require.d(exports, {
    python: function () {
      return t3;
    },
    pythonLanguage: function () {
      return t7;
    },
    globalCompletion: function () {
      return t5;
    },
    localCompletionSource: function () {
      return tK;
    }
  });
}